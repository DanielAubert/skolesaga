/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/**
 * Tekstbok innhold for Teknologi og forskningslære 2 VG3
 * Seksjon 6: Forskningsprosjekt og formidling (Kapittel 6.1–6.8)
 * Denne filen inneholder kapittel 6.1–6.8.
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 6.1: Prosjektplanlegging og tidsstyring
// ============================================================================

export const CHAPTER_TOF_2_6_1: TextbookChapter = {
  id: 'tof-2-6-1',
  courseId: 'tof-2',
  chapterNumber: '6.1',
  title: 'Prosjektplanlegging og tidsstyring',
  description: 'Mål, delmål, Gantt-diagram, milepæler, risikovurdering og ressursstyring.',
  estimatedMinutes: 25,
  competenceGoals: [
    'planlegge og gjennomføre et forskningsprosjekt med tydelig tidsplan og ressursstyring',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-6-1-intro',
      type: 'text',
      content: `## Prosjektplanlegging og tidsstyring

Et forskningsprosjekt kan sammenlignes med en ekspedisjon: uten kart, kompass og en gjennomtenkt plan ender man lett opp med å gå i ring. **Prosjektplanlegging** handler om å bryte ned et stort, komplekst mål til håndterbare deler — og sørge for at alle delene fullføres i riktig rekkefølge og innenfor tidsrammen.

I dette kapittelet skal du lære å formulere klare mål og delmål, bygge opp et Gantt-diagram, sette milepæler, vurdere risiko og styre ressurser. Disse ferdighetene er like viktige i forskning som i ingeniørprosjekter og teknologiutvikling — og de er etterspurt i arbeidslivet langt ut over naturvitenskapelige yrker.

God planlegging er ikke det motsatte av kreativitet; det er forutsetningen for at kreativiteten skal gi resultater.`,
    },

    // --- BLOKK 1: Mål, delmål og arbeidsoppgaver ---
    {
      id: 'tof2-6-1-def-1',
      type: 'definition',
      title: 'Prosjektmål og delmål',
      content: `Et **prosjektmål** er den overordnede hensikten med prosjektet — hva du skal oppnå til slutt. Målet skal være formulert slik at det er mulig å avgjøre om det er nådd eller ikke.

**Delmål** er mellomstadier på veien mot hovedmålet. Hvert delmål bør oppfylle SMART-kriteriene:

- **Spesifikt:** Tydelig avgrenset — hva skal gjøres?
- **Målbart:** Kan vi avgjøre om delmålet er nådd?
- **Ambisiøst:** Utfordrende nok til å drive arbeidet fremover
- **Realistisk:** Mulig å oppnå med tilgjengelige ressurser
- **Tidsbegrenset:** Har en klar frist

**Arbeidsoppgaver** er de konkrete handlingene som må utføres for å nå et delmål. Å bryte delmål ned i arbeidsoppgaver kalles **arbeidsnedbrytning** (Work Breakdown Structure, WBS).`,
    },
    {
      id: 'tof2-6-1-example-1',
      type: 'example',
      title: 'Eksempel: Fra prosjektmål til arbeidsoppgaver',
      problem: 'Du skal undersøke om grønt lys påvirker veksthastigheten til karseplanter sammenlignet med vanlig hvitt lys. Bryt prosjektet ned i mål, delmål og arbeidsoppgaver.',
      solution: `**Prosjektmål:** Gjennomføre et kontrollert eksperiment som tester effekten av grønt lys på veksthastigheten til karseplanter, og presentere resultatene i en forskningsartikkel.

**Delmål 1:** Utforme eksperimentelt design (frist: uke 1)
- Arbeidsoppgaver: Formulere hypotese, velge variabler, bestemme antall planter per gruppe, planlegge lysoppsett, lage måleskjema.

**Delmål 2:** Gjennomføre forsøket (frist: uke 2–4)
- Arbeidsoppgaver: Så frø, sette opp lyskilder, vanne daglig, måle stengellengde hver dag, fotografere, registrere data i regneark.

**Delmål 3:** Analysere data (frist: uke 5)
- Arbeidsoppgaver: Beregne gjennomsnitt og standardavvik, lage grafer, gjennomføre t-test, tolke p-verdi.

**Delmål 4:** Skrive og presentere (frist: uke 6–7)
- Arbeidsoppgaver: Skrive IMRaD-artikkel, lage poster, forberede muntlig presentasjon.

Merk at hvert delmål er SMART: spesifikt, målbart, ambisiøst, realistisk og tidsbegrenset.`,
    },
    {
      id: 'tof2-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilket av følgende er det beste eksempelet på et SMART-formulert delmål for et forskningsprosjekt?',
        options: [
          { id: 'a', text: 'Samle inn data om temaet', isCorrect: false },
          { id: 'b', text: 'Gjennomføre 30 spørreundersøkelser blant elever ved skolen innen fredag 15. mars', isCorrect: true },
          { id: 'c', text: 'Lære mer om statistikk', isCorrect: false },
          { id: 'd', text: 'Jobbe hardt med prosjektet i uke 3', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Dette delmålet er spesifikt (30 spørreundersøkelser blant elever ved skolen), målbart (vi kan telle om 30 er gjennomført), ambisiøst men realistisk, og tidsbegrenset (frist 15. mars). Alternativ A er for vagt, C er ikke målbart, og D mangler et konkret resultat.',
      },
    },

    // --- BLOKK 2: Gantt-diagram ---
    {
      id: 'tof2-6-1-text-2',
      type: 'text',
      content: `### Gantt-diagram: visualisering av tidsplanen

Et **Gantt-diagram** er det mest brukte verktøyet for å visualisere tidsplanen i et prosjekt. Diagrammet viser arbeidsoppgaver langs en tidsakse, slik at du ser hva som skal gjøres når, og hvilke oppgaver som overlapper.

**Oppbygning av et Gantt-diagram:**
- **Vertikal akse:** Liste over alle arbeidsoppgaver, gjerne gruppert etter delmål
- **Horisontal akse:** Tidsperioden (dager, uker eller måneder)
- **Horisontale søyler:** Viser varigheten til hver oppgave
- **Piler mellom søyler:** Viser avhengigheter — oppgaver som må fullføres før andre kan starte

**Avhengigheter** betyr at én oppgave krever at en annen er ferdig først. For eksempel kan du ikke analysere data før datainnsamlingen er fullført. Det finnes fire typer avhengigheter:

1. **Slutt-til-start (SS):** B kan ikke starte før A er ferdig (vanligst)
2. **Start-til-start:** B kan ikke starte før A har startet
3. **Slutt-til-slutt:** B kan ikke avsluttes før A er ferdig
4. **Start-til-slutt:** B kan ikke avsluttes før A har startet (sjelden)

**Kritisk sti** er den lengste sammenhengende kjeden av avhengige oppgaver gjennom prosjektet. Forsinkelse på den kritiske stien forsinker hele prosjektet. Oppgaver som ikke ligger på kritisk sti, har **slakk** — de kan forsinkes noe uten at totaltiden påvirkes.`,
    },
    {
      id: 'tof2-6-1-note-1',
      type: 'note',
      title: 'Digitale verktøy for Gantt-diagram',
      content: `Du kan lage Gantt-diagrammer i flere verktøy:

- **Regneark (Excel/Google Sheets):** Enklest for små prosjekter — bruk betinget formatering for å fylle celler med farge
- **GanttProject (gratis):** Dedikert programvare med avhengigheter og kritisk sti
- **Trello/Asana:** Prosjektstyringsverktøy med tidslinjefunksjon
- **Microsoft Project:** Profesjonelt verktøy brukt i arbeidslivet

For et skoleprosjekt er regneark eller GanttProject mer enn tilstrekkelig. Det viktigste er ikke verktøyet, men at du tenker gjennom oppgavenes rekkefølge og varighet.`,
    },
    {
      id: 'tof2-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'I et Gantt-diagram har du tre oppgaver: A (3 uker), B (2 uker, avhengig av A) og C (4 uker, kan starte samtidig med A). Hva er den kritiske stien og total prosjekttid?',
        options: [
          { id: 'a', text: 'Kritisk sti: A → B. Total tid: 5 uker.', isCorrect: true },
          { id: 'b', text: 'Kritisk sti: C. Total tid: 4 uker.', isCorrect: false },
          { id: 'c', text: 'Kritisk sti: A → B → C. Total tid: 9 uker.', isCorrect: false },
          { id: 'd', text: 'Kritisk sti: A. Total tid: 3 uker.', isCorrect: false },
        ],
        solution: 'Riktig svar er A. Det finnes to stier: A → B (3 + 2 = 5 uker) og C (4 uker, kjører parallelt). Den lengste stien er A → B med 5 uker, og denne er den kritiske stien. C har 1 uke slakk (kan forsinkes 1 uke uten å påvirke totaltiden). Total prosjekttid bestemmes av den kritiske stien: 5 uker.',
      },
    },

    // --- BLOKK 3: Milepæler og leveranser ---
    {
      id: 'tof2-6-1-text-3',
      type: 'text',
      content: `### Milepæler og leveranser

En **milepæl** er et viktig sjekkpunkt i prosjektet — et tidspunkt der en vesentlig del av arbeidet skal være fullført. Milepæler har ingen varighet (de er øyeblikkshendelser) og markerer overgangen fra én fase til neste.

Gode milepæler er:
- **Tydelige:** Det er klart hva som skal være ferdig
- **Verifiserbare:** Noen kan sjekke at milepælen er nådd
- **Få:** Typisk 4–8 milepæler i et skoleprosjekt

**Leveranser** er de konkrete produktene som leveres ved milepælene. En leveranse kan være et dokument, et datasett, en prototype eller en presentasjon.

Eksempler på milepæler og leveranser i et forskningsprosjekt:

| Milepæl | Tidspunkt | Leveranse |
|---------|-----------|-----------|
| M1: Design godkjent | Uke 2 | Prosjektplan med forskningsdesign |
| M2: Datainnsamling ferdig | Uke 5 | Komplett datasett i regneark |
| M3: Analyse fullført | Uke 7 | Statistiske resultater og figurer |
| M4: Artikkel ferdig | Uke 9 | Ferdig IMRaD-artikkel |
| M5: Presentasjon holdt | Uke 10 | Poster og muntlig fremføring |

Milepæler fungerer som kontrollpunkter: hvis du er forsinket på en milepæl, vet du tidlig at tidsplanen er i fare, og kan justere.`,
    },

    // --- BLOKK 4: Risikovurdering ---
    {
      id: 'tof2-6-1-text-4',
      type: 'text',
      content: `### Risikovurdering

Alle prosjekter møter uventede problemer. **Risikovurdering** handler om å identifisere hva som kan gå galt *før* det skjer, vurdere hvor sannsynlig og alvorlig problemet er, og planlegge tiltak.

En risikovurdering gjøres i tre trinn:

**1. Identifisere risiko:** Hva kan gå galt? Typiske risikoer i et forskningsprosjekt:
- Utstyr som ikke fungerer eller ikke er tilgjengelig
- For få respondenter i en spørreundersøkelse
- Forsøksplanter eller -dyr som dør
- Tekniske problemer med programvare eller datalogger
- Gruppemedlemmer som blir syke eller ikke bidrar

**2. Vurdere risiko:** For hver risiko vurderes **sannsynlighet** (lav/middels/høy) og **konsekvens** (lav/middels/høy). Risikoer med høy sannsynlighet *og* høy konsekvens prioriteres.

**3. Planlegge tiltak:** For de viktigste risikoene lages **forebyggende tiltak** (redusere sannsynlighet) og **avbøtende tiltak** (redusere konsekvens hvis det skjer).`,
    },
    {
      id: 'tof2-6-1-example-2',
      type: 'example',
      title: 'Eksempel: Risikovurdering for et planteeksperiment',
      problem: 'Du skal gjennomføre et eksperiment der du undersøker effekten av ulike jordblandinger på planters vekst. Lag en risikovurdering med tre risikoer.',
      solution: `| Risiko | Sannsynlighet | Konsekvens | Forebyggende tiltak | Avbøtende tiltak |
|--------|--------------|------------|--------------------|--------------------|
| Planter dør av overvanningen | Middels | Høy | Lage vanningsskjema, måle jordfuktighet | Ha ekstra frø klare, starte med flere planter enn nødvendig |
| Temperatursvingninger i klasserommet i helgen | Høy | Middels | Plassere plantene ved stabil temperaturkilde, unngå vinduskarmer | Dokumentere temperaturen med datalogger, justere i analysen |
| Data går tapt (regneark slettes) | Lav | Svært høy | Lagre i sky (Google Sheets), ta daglig backup | Skrive ut papirkopi ukentlig, ta bilder av plantene som backup-data |

Risikovurderingen viser at «data går tapt» har lav sannsynlighet men svært høy konsekvens, og derfor prioriteres forebyggende tiltak (backup). Temperatursvingninger har høy sannsynlighet, så her er det viktig med både forebygging og avbøting.`,
    },
    {
      id: 'tof2-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som menes med «kritisk sti» i et Gantt-diagram, og begrunn hvorfor forsinkelse på den kritiske stien er mer alvorlig enn forsinkelse på andre oppgaver. Gi et konkret eksempel fra et tenkt forskningsprosjekt.',
        hints: ['Tenk på avhengigheter mellom oppgaver og hva som bestemmer den totale prosjekttiden.'],
        solution: 'Den kritiske stien er den lengste kjeden av avhengige oppgaver gjennom prosjektet, og den bestemmer den korteste mulige totaltiden. Forsinkelse på den kritiske stien forsinker hele prosjektet fordi det ikke finnes slakk — det er ingen tidsmargin.\n\nOppgaver som ikke ligger på den kritiske stien, har slakk og kan forsinkes noe uten at totaltiden påvirkes.\n\nEksempel: I et forskningsprosjekt har vi stien «Forberede spørreskjema (1 uke) → Samle inn data (3 uker) → Analysere data (2 uker) → Skrive rapport (2 uker)» = 8 uker. Parallelt kjører «Lese bakgrunnslitteratur (3 uker) → Skrive teorikapittel (2 uker)» = 5 uker. Den kritiske stien er den første (8 uker). Hvis datainnsamlingen forsinkes med 1 uke, forskyves hele prosjektet til 9 uker. Men hvis litteraturlesingen forsinkes med 1 uke, har den fortsatt 2 uker slakk og påvirker ikke sluttdatoen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- BLOKK 5: Ressursstyring ---
    {
      id: 'tof2-6-1-text-5',
      type: 'text',
      content: `### Ressursstyring

Et prosjekt krever ulike **ressurser**, og god planlegging innebærer å kartlegge og styre disse ressursene effektivt. De viktigste ressurstypene er:

**Tid:** Den mest kritiske ressursen i et skoleprosjekt. Tid kan ikke lagres eller lånes — den brukes opp uansett. Tidsressursen styres gjennom Gantt-diagrammet og milepælene.

**Penger (budsjett):** Selv skoleprosjekter kan ha kostnader: materialer, kjemikalier, utskrifter, transportkostnader til feltarbeid. Lag et enkelt budsjett og sjekk om skolen kan dekke utgiftene.

**Utstyr:** Laboratorier, datamaskiner, måleinstrumenter, kameraer, sensorer. Kartlegg hva som trengs, hva skolen har, og hva som eventuelt må lånes eller kjøpes. Bestill i god tid — leveringstid kan forsinke prosjektet.

**Kompetanse:** Har gruppemedlemmene den kunnskapen som trengs? Trenger noen opplæring i statistikkprogramvare, laboratorieteknikker eller intervjumetodikk? Planlegg opplæring som en egen oppgave i Gantt-diagrammet.

**Personer:** I gruppeprosjekter er det viktig å fordele oppgaver etter kompetanse og kapasitet. En **ansvarsmatrise** (RACI-matrise) klargjør hvem som er Ansvarlig (Responsible), Godkjenner (Accountable), Konsultert (Consulted) og Informert (Informed) for hver oppgave.`,
    },

    // --- Oppsummering ---
    {
      id: 'tof2-6-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Et **prosjektmål** er det overordnede resultatet du vil oppnå, mens **delmål** er målbare mellomstasjoner formulert etter SMART-kriteriene.
- **Gantt-diagram** visualiserer oppgaver langs en tidsakse og viser avhengigheter mellom dem.
- Den **kritiske stien** er den lengste kjeden av avhengige oppgaver og bestemmer korteste mulige prosjekttid.
- **Milepæler** er sjekkpunkter der vesentlige deler av arbeidet skal være ferdig, med tilhørende **leveranser**.
- **Risikovurdering** identifiserer hva som kan gå galt, vurderer sannsynlighet og konsekvens, og planlegger forebyggende og avbøtende tiltak.
- **Ressursstyring** handler om å kartlegge og styre tid, penger, utstyr, kompetanse og personer.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof2-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du skal planlegge et prosjekt der du undersøker lydisolasjonsevnen til tre ulike materialer. Lag en arbeidsnedbrytning (WBS) med minst tre delmål og minst to arbeidsoppgaver per delmål. Formuler alle delmål etter SMART-kriteriene.',
        hints: ['Tenk gjennom hele prosjektforløpet: planlegging, gjennomføring, analyse og rapportering. Hvert delmål trenger en konkret frist.'],
        solution: 'Prosjektmål: Undersøke og sammenligne lydisolasjonsevnen til isopor, mineralull og kork ved å måle lyddempning i desibel, og presentere resultatene i en forskningsartikkel innen 8 uker.\n\nDelmål 1: Ferdigstille eksperimentelt design innen uke 2.\n- Oppgave 1.1: Formulere hypotese og velge variabler\n- Oppgave 1.2: Designe testkammeret med høyttaler og mikrofon\n- Oppgave 1.3: Lage standardisert testprosedyre\n\nDelmål 2: Gjennomføre alle målinger innen uke 5.\n- Oppgave 2.1: Bygge testkammer og kalibrere mikrofon\n- Oppgave 2.2: Utføre 10 målinger per materiale ved 5 ulike frekvenser\n- Oppgave 2.3: Registrere alle data i regneark med backup\n\nDelmål 3: Ferdigstille analyse og rapport innen uke 8.\n- Oppgave 3.1: Beregne gjennomsnitt, standardavvik og gjøre variansanalyse (ANOVA)\n- Oppgave 3.2: Lage grafer og tabeller\n- Oppgave 3.3: Skrive IMRaD-artikkel og forberede presentasjon',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof2-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et gruppeprosjekt har følgende oppgaver med estimert varighet og avhengigheter:\n\n- A: Litteratursøk (2 uker, ingen avhengighet)\n- B: Designe spørreskjema (1 uke, avhengig av A)\n- C: Pilotteste skjema (1 uke, avhengig av B)\n- D: Samle inn data (3 uker, avhengig av C)\n- E: Lage analyseverktøy i Python (2 uker, avhengig av A)\n- F: Analysere data (2 uker, avhengig av D og E)\n- G: Skrive rapport (2 uker, avhengig av F)\n\n(a) Tegn et Gantt-diagram og identifiser den kritiske stien.\n(b) Beregn total prosjekttid og slakken til oppgave E.\n(c) Hva skjer med prosjekttiden dersom oppgave E forsinkes med 3 uker?',
        hints: ['Identifiser alle stier gjennom prosjektet og beregn varigheten til hver. Den lengste stien er den kritiske stien. Slakk = kritisk sti-tid minus stiens tid for oppgaver utenfor kritisk sti.'],
        solution: '(a) To hovedstier gjennom prosjektet:\n- Sti 1: A → B → C → D → F → G = 2+1+1+3+2+2 = 11 uker\n- Sti 2: A → E → F → G = 2+2+2+2 = 8 uker\n(F avhenger av både D og E, så den starter når den siste av de to er ferdig.)\n\nKritisk sti: A → B → C → D → F → G (11 uker).\n\n(b) Total prosjekttid: 11 uker. Oppgave E ligger på sti 2 (8 uker). E kan starte i uke 3 (etter A) og må være ferdig før F kan starte (uke 10). E tar 2 uker, altså ferdig i uke 4. Men F starter først i uke 8 (etter D). Slakk for E = 8 - (2+2) = 4 uker.\n\n(c) Dersom E forsinkes med 3 uker, er E fortsatt ferdig innen F starter (slakk var 4 uker). Prosjekttiden forblir 11 uker. Men dersom E forsinkes med mer enn 4 uker, vil den bli ny flaskehals og forlenge prosjektet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.2: Forskningsspørsmål og hypoteser
// ============================================================================

export const CHAPTER_TOF_2_6_2: TextbookChapter = {
  id: 'tof-2-6-2',
  courseId: 'tof-2',
  chapterNumber: '6.2',
  title: 'Forskningsspørsmål og hypoteser',
  description: 'Formulering av forskningsspørsmål, PICO-modellen, operasjonalisering og variabeltyper.',
  estimatedMinutes: 25,
  competenceGoals: [
    'formulere presise forskningsspørsmål og testbare hypoteser',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-6-2-intro',
      type: 'text',
      content: `## Forskningsspørsmål og hypoteser

Hvert forskningsprosjekt starter med et spørsmål — men ikke alle spørsmål er like gode. Et **forskningsspørsmål** er den presise formuleringen av hva du vil finne ut, og kvaliteten på spørsmålet bestemmer kvaliteten på hele prosjektet.

Et vagt spørsmål som «Er forurensning farlig?» gir ingen retning. Et presist spørsmål som «Reduserer svevestøvkonsentrasjoner over 50 µg/m³ lungefunksjonen hos ungdom i Oslo målt ved FEV1?» gir en klar plan for hva som skal måles, hvem som skal undersøkes og hva vi forventer å finne.

I dette kapittelet lærer du å formulere gode forskningsspørsmål, bruke PICO-modellen, operasjonalisere begreper til målbare variabler, og skille mellom hypoteser og forskningsspørsmål.`,
    },

    // --- BLOKK 1: Åpne vs. lukkede spørsmål ---
    {
      id: 'tof2-6-2-text-1',
      type: 'text',
      content: `### Åpne og lukkede forskningsspørsmål

Forskningsspørsmål kan deles i to hovedtyper:

**Åpne spørsmål** utforsker et fenomen uten å forvente et bestemt svar. De begynner ofte med «hvordan», «hvorfor» eller «på hvilken måte». Eksempel: «Hvordan opplever elever bruk av kunstig intelligens i undervisningen?» Åpne spørsmål passer best til **kvalitativ forskning** der vi ønsker dybdeforståelse.

**Lukkede spørsmål** kan besvares med ja/nei eller med en tallfestet sammenheng. De begynner ofte med «er det», «fører … til» eller «i hvilken grad». Eksempel: «Er det en statistisk signifikant forskjell i testresultater mellom elever som bruker AI-verktøy og elever som ikke gjør det?» Lukkede spørsmål passer best til **kvantitativ forskning** der vi ønsker å teste en spesifikk sammenheng.

**Presise vs. vage spørsmål:**
Et godt forskningsspørsmål er presist nok til at du vet nøyaktig hva du skal måle og hvem du skal undersøke. Sammenligningen under viser forskjellen:

| Vagt spørsmål | Presist spørsmål |
|--------------|-----------------|
| Er trening bra for helsen? | Reduserer 30 minutters daglig løping det diastoliske blodtrykket hos menn i alderen 40–60 år over en 12-ukers periode? |
| Påvirker sosiale medier ungdom? | Er det en sammenheng mellom daglig skjermtid på sosiale medier og selvrapportert søvnkvalitet blant elever i VG2? |
| Fungerer ny teknologi i skolen? | Forbedrer bruk av interaktive simuleringer elevenes forståelse av kjemisk likevekt målt på en standardisert kunnskapstest? |`,
    },
    {
      id: 'tof2-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilket av følgende forskningsspørsmål er best formulert for en kvantitativ studie?',
        options: [
          { id: 'a', text: 'Hvordan opplever elever lekser?', isCorrect: false },
          { id: 'b', text: 'Er lekser bra eller dårlig?', isCorrect: false },
          { id: 'c', text: 'Er det en sammenheng mellom tid brukt på lekser og karakter i matematikk blant VG1-elever?', isCorrect: true },
          { id: 'd', text: 'Hva tenker lærere om leksers rolle i skolen?', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Dette spørsmålet er presist formulert for kvantitativ forskning: det spesifiserer variablene (tid på lekser og karakter i matematikk), populasjonen (VG1-elever) og sammenhengen som undersøkes. Alternativ A og D er åpne spørsmål for kvalitativ forskning. Alternativ B er for vagt og unyansert til å gi retning for forskning.',
      },
    },

    // --- BLOKK 2: PICO-modellen ---
    {
      id: 'tof2-6-2-def-1',
      type: 'definition',
      title: 'PICO-modellen',
      content: `**PICO-modellen** er et rammeverk for å formulere presise forskningsspørsmål, opprinnelig utviklet for klinisk forskning, men nyttig i alle kvantitative studier. PICO står for:

- **P – Population (populasjon):** Hvem undersøkes? (f.eks. «VG3-elever i Oslo»)
- **I – Intervention (intervensjon/eksponering):** Hva gjøres eller hva utsettes gruppen for? (f.eks. «bruk av digitale læringsverktøy»)
- **C – Comparison (sammenligning):** Hva sammenlignes intervensjonen med? (f.eks. «tradisjonell tavleundervisning»)
- **O – Outcome (utfall):** Hva måles? (f.eks. «score på eksamen»)

Ved å fylle ut alle fire PICO-elementene får du et forskningsspørsmål som er presist nok til å danne grunnlag for et eksperiment.

**Eksempel:** «Blant VG3-elever i realfag (P), gir bruk av interaktive simuleringer (I) sammenlignet med tradisjonell tavleundervisning (C) bedre resultater på standardiserte kunnskapstester (O)?»`,
    },
    {
      id: 'tof2-6-2-example-1',
      type: 'example',
      title: 'Eksempel: Bruke PICO til å formulere forskningsspørsmål',
      problem: 'En elev vil undersøke om musikkundervisning påvirker konsentrasjonsevne. Bruk PICO-modellen til å formulere et presist forskningsspørsmål.',
      solution: `**P (Population):** Elever i 9. klasse ved tre ungdomsskoler i Bergen

**I (Intervention):** Ukentlig musikkundervisning med fokus på instrumentøving (2 timer per uke i 12 uker)

**C (Comparison):** Elever som i samme tidsrom har ordinære studietimer uten musikkinnslag

**O (Outcome):** Konsentrasjonsevne målt ved d2-testen (en standardisert oppmerksomhetstest) gjennomført før og etter intervensjonsperioden

**Forskningsspørsmål:** «Gir 12 uker med ukentlig instrumentøving (2 timer/uke) bedre konsentrasjonsevne, målt ved d2-testen, hos elever i 9. klasse sammenlignet med elever som har ordinære studietimer?»

Merk hvordan PICO-modellen tvinger oss til å presisere hvem vi undersøker, hva intervensjonen er, hva vi sammenligner med, og hva vi måler. Uten PICO kunne spørsmålet ha blitt det vage «påvirker musikk konsentrasjon?»`,
    },
    {
      id: 'tof2-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'I PICO-modellen, hva representerer «C»?',
        options: [
          { id: 'a', text: 'Kontrollvariabel (Confounding variable)', isCorrect: false },
          { id: 'b', text: 'Konsekvens (Consequence)', isCorrect: false },
          { id: 'c', text: 'Sammenligning (Comparison)', isCorrect: true },
          { id: 'd', text: 'Samarbeid (Collaboration)', isCorrect: false },
        ],
        solution: 'Riktig svar er C. I PICO-modellen står C for Comparison (sammenligning) — altså hva intervensjonen sammenlignes med, typisk en kontrollgruppe eller standardbehandling. Kontrollvariabler (A) er en annen viktig del av forskningsdesign, men er ikke det «C» refererer til i PICO.',
      },
    },

    // --- BLOKK 3: Operasjonalisering ---
    {
      id: 'tof2-6-2-text-3',
      type: 'text',
      content: `### Operasjonalisering: fra begrep til måling

Mange begreper vi ønsker å undersøke — som «trivsel», «kreativitet» eller «stress» — er abstrakte og kan ikke måles direkte. **Operasjonalisering** er prosessen der vi definerer nøyaktig *hvordan* et abstrakt begrep skal måles i praksis.

Operasjonalisering innebærer to trinn:

**Trinn 1: Konseptuell definisjon** — Hva mener vi med begrepet? Eksempel: «Stress» kan defineres som «en fysiologisk og psykologisk tilstand utløst av opplevde krav som overstiger tilgjengelige mestringsressurser».

**Trinn 2: Operasjonell definisjon** — Hvordan måler vi begrepet? Eksempel: «Stress måles med Perceived Stress Scale (PSS-10), en validert spørreskala med 10 ledd der respondenten scorer fra 0 (aldri) til 4 (svært ofte). Total score rangerer fra 0 til 40, der høyere score indikerer høyere opplevd stress.»

Uten operasjonalisering kan to forskere som studerer «stress» måle helt forskjellige ting og få usammenlignbare resultater. Operasjonalisering sikrer **reproduserbarhet** — andre forskere kan gjenta studien din fordi de vet nøyaktig hva og hvordan du målte.

Operasjonaliseringen påvirker **validiteten** til studien: måler vi det vi faktisk ønsker å måle? Hvis vi operasjonaliserer «fysisk form» som «antall push-ups på ett minutt», måler vi egentlig muskulær utholdenhet i overkroppen — ikke fysisk form generelt. En operasjonalisering er aldri perfekt, men den bør dekke de viktigste aspektene av begrepet.`,
    },

    // --- BLOKK 4: Variabeltyper ---
    {
      id: 'tof2-6-2-text-4',
      type: 'text',
      content: `### Uavhengig, avhengig og kontrollvariabler

I kvantitativ forskning studerer vi sammenhengen mellom **variabler** — egenskaper som varierer mellom enheter eller over tid.

**Uavhengig variabel (UV):** Den variabelen vi tror *forårsaker* eller *påvirker* noe annet. I et eksperiment er dette variabelen forskeren manipulerer. Eksempel: Type gjødsel som brukes.

**Avhengig variabel (AV):** Den variabelen som *påvirkes* — utfallet vi måler. Eksempel: Plantens veksthastighet i centimeter per uke.

**Kontrollvariabler:** Variabler som holdes konstante for å hindre at de forstyrrer sammenhengen mellom UV og AV. Eksempel: Vannmengde, temperatur, lysforhold og jordtype holdes like for alle planter.

En vanlig feil er å forveksle kontrollvariabler med kontrollgruppe. **Kontrollvariabler** er faktorer vi holder konstante, mens en **kontrollgruppe** er en gruppe som ikke utsettes for intervensjonen.

Det finnes også **konfunderende variabler** — ukjente eller ukontrollerte faktorer som påvirker både UV og AV, og dermed kan skape falske sammenhenger. Eksempel: Hvis vi studerer sammenhengen mellom iskremssalg og drukningsulykker uten å kontrollere for temperatur, vil temperatur være en konfunderende variabel.`,
    },
    {
      id: 'tof2-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'En forsker undersøker om mengden søvn påvirker reaksjonstid. Deltakerne sover enten 5, 7 eller 9 timer, og reaksjonstiden deres måles neste morgen. Hva er den avhengige variabelen?',
        options: [
          { id: 'a', text: 'Antall timer søvn', isCorrect: false },
          { id: 'b', text: 'Reaksjonstid', isCorrect: true },
          { id: 'c', text: 'Tidspunktet målingen gjøres', isCorrect: false },
          { id: 'd', text: 'Antall deltakere', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Den avhengige variabelen er det vi måler som utfall — i dette tilfellet reaksjonstiden. Den uavhengige variabelen er det forskeren manipulerer — antall timer søvn (A). Tidspunktet for målingen (C) er en kontrollvariabel som bør holdes konstant. Antall deltakere (D) er en del av forskningsdesignet, ikke en variabel i selve eksperimentet.',
      },
    },

    // --- BLOKK 5: Hypotese vs. forskningsspørsmål ---
    {
      id: 'tof2-6-2-text-5',
      type: 'text',
      content: `### Hypotese vs. forskningsspørsmål

Et **forskningsspørsmål** er det overordnede spørsmålet studien søker å besvare. En **hypotese** er en konkret, testbar påstand om forventet resultat.

Ikke alle studier bruker hypoteser. Utforskende og kvalitative studier bruker ofte bare forskningsspørsmål. Men i kvantitative studier — spesielt eksperimenter — er hypoteser sentrale fordi de gir et presist grunnlag for statistisk testing.

**Forskjellen:**
| | Forskningsspørsmål | Hypotese |
|--|-------------------|---------|
| Form | Spørsmål | Påstand |
| Retning | Åpen | Angir forventet resultat |
| Testbarhet | Veileder forskningen | Kan forkastes eller beholdes statistisk |
| Eksempel | «Er det en sammenheng mellom søvn og konsentrasjon?» | «Elever som sover 8 timer har signifikant bedre konsentrasjonsscore enn elever som sover 5 timer.» |

I statistisk hypotesetesting formulerer vi en **nullhypotese** ($H_0$) og en **alternativ hypotese** ($H_1$):

- $H_0$: Det er ingen forskjell (eller ingen sammenheng) — status quo
- $H_1$: Det er en forskjell (eller en sammenheng) — det vi tror er tilfellet

Forskeren prøver å forkaste $H_0$ ved hjelp av data. Hvis p-verdien er under et forhåndsbestemt signifikansnivå (vanligvis 0,05), forkaster vi $H_0$ til fordel for $H_1$.`,
    },

    // --- Oppsummering ---
    {
      id: 'tof2-6-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Forskningsspørsmål kan være **åpne** (kvalitative, utforskende) eller **lukkede** (kvantitative, testbare).
- Et godt forskningsspørsmål er **presist**: det spesifiserer variabler, populasjon og sammenheng.
- **PICO-modellen** (Population, Intervention, Comparison, Outcome) hjelper med å formulere presise forskningsspørsmål.
- **Operasjonalisering** oversetter abstrakte begreper til målbare variabler gjennom konseptuell og operasjonell definisjon.
- **Uavhengig variabel** er det som manipuleres, **avhengig variabel** er utfallet som måles, og **kontrollvariabler** holdes konstante.
- En **hypotese** er en testbar påstand om forventet resultat, mens et **forskningsspørsmål** er mer åpent.
- Statistisk testing bruker $H_0$ (ingen effekt) og $H_1$ (forventet effekt) for å trekke konklusjoner fra data.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof2-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du ønsker å undersøke om bakgrunnsmusikk påvirker hvor effektivt elever løser matematikkoppgaver. (a) Bruk PICO-modellen til å formulere et presist forskningsspørsmål. (b) Operasjonaliser begrepene «bakgrunnsmusikk» og «effektivitet». (c) Identifiser uavhengig variabel, avhengig variabel og minst to kontrollvariabler.',
        hints: ['PICO: Hvem undersøker du? Hva er intervensjonen? Hva sammenlignes den med? Hva måles? Operasjonalisering: Hvordan definerer du musikktypen og hvordan måler du effektivitet?'],
        solution: '(a) PICO-spørsmål:\nP: Elever i VG1 ved en videregående skole i Trondheim\nI: Rolig instrumentalmusikk (klassisk, 60 bpm) spilt med hodetelefoner under oppgaveløsning\nC: Ingen musikk (stillhet med støydempende hodetelefoner)\nO: Antall korrekt løste oppgaver på 30 minutter\n\nForskningsspørsmål: «Løser VG1-elever flere matematikkoppgaver korrekt på 30 minutter med rolig instrumentalmusikk i hodetelefonene enn i stillhet?»\n\n(b) Operasjonalisering:\n- Bakgrunnsmusikk: Klassisk instrumentalmusikk (Mozart, pianosonater) spilt på 40 dB med lukkede hodetelefoner. Kontrollgruppen bruker identiske hodetelefoner uten lyd.\n- Effektivitet: Antall korrekt besvarte standardiserte oppgaver (fra en oppgavebank med lik vanskelighetsgrad) i løpet av 30 minutter.\n\n(c) Variabler:\n- UV: Bakgrunnsmusikk (ja/nei)\n- AV: Antall korrekt løste oppgaver\n- Kontrollvariabler: Oppgavenes vanskelighetsgrad (standardisert), tid tilgjengelig (30 min), romtemperatur, tidspunkt på dagen, stillesittende posisjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof2-6-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En medieoverskrift lyder: «Studie viser at barn som leser bøker, blir smartere.» Drøft følgende: (a) Hva er problemet med å operasjonalisere «smartere»? Foreslå to ulike operasjonaliseringer som ville gi ulike resultater. (b) Formuler en nullhypotese og en alternativ hypotese for studien. (c) Identifiser minst to mulige konfunderende variabler og forklar hvorfor de kan skape en falsk sammenheng.',
        hints: ['Tenk på at «smart» er et svært bredt begrep med mange dimensjoner. Konfunderende variabler er faktorer som kan påvirke både lesevaner OG kognitive evner.'],
        solution: '(a) «Smartere» er problematisk fordi det er et vagt, flerdimensjonalt begrep. Ulike operasjonaliseringer:\n- Operasjonalisering 1: IQ-score målt med Wechsler Intelligence Scale for Children. Denne fanger generell kognitiv evne, men kritiseres for å være kulturelt betinget.\n- Operasjonalisering 2: Leseforståelse målt med nasjonal leseprøve. Denne er smalere og favoritiserer nettopp barn som leser mye — altså kan den forveksle årsak og effekt.\nDe to operasjonaliseringene kan gi ulike resultater fordi de måler ulike aspekter av «smarthet».\n\n(b) Hypoteser:\n$H_0$: Det er ingen forskjell i kognitiv skår mellom barn som leser bøker regelmessig og barn som ikke gjør det.\n$H_1$: Barn som leser bøker regelmessig, har høyere kognitiv skår enn barn som ikke leser bøker regelmessig.\n\n(c) Konfunderende variabler:\n1. Foreldrenes utdanningsnivå: Foreldre med høy utdanning leser mer for barna OG gir dem et mer stimulerende oppvekstmiljø som uavhengig fremmer kognitiv utvikling.\n2. Sosioøkonomisk status: Familier med høyere inntekt har råd til flere bøker OG bedre tilgang til utdanningsressurser, ernæring og helsetjenester — som alle kan påvirke kognitiv utvikling.\n\nBegge variablene kan skape en falsk sammenheng mellom lesing og intelligens: det er ikke bøkene i seg selv som gjør barn «smartere», men de underliggende faktorene som fører til at noen barn leser mer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.3: Datainnsamling og analyse
// ============================================================================

export const CHAPTER_TOF_2_6_3: TextbookChapter = {
  id: 'tof-2-6-3',
  courseId: 'tof-2',
  chapterNumber: '6.3',
  title: 'Datainnsamling og analyse',
  description: 'Kvantitative og kvalitative metoder, koding, statistisk analyse og datavisualisering.',
  estimatedMinutes: 25,
  competenceGoals: [
    'samle inn og analysere data med egnede metoder',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-6-3-intro',
      type: 'text',
      content: `## Datainnsamling og analyse

Data er råmaterialet i all forskning — uten gode data er selv den mest elegante analysen verdiløs. Men innsamling av data er ikke bare å «hente tall»; det er en systematisk prosess som krever nøye planlegging for å sikre at dataene er **relevante**, **pålitelige** og **gyldige**.

I dette kapittelet skal du lære om ulike metoder for datainnsamling, både kvantitative og kvalitative, og hvordan data systematiseres, kodes og analyseres. Du lærer også om forskjellen mellom deskriptiv og analytisk statistikk, og hvordan resultater fremstilles i tabeller og figurer.

Valget av datainnsamlingsmetode følger direkte av forskningsspørsmålet og forskningsdesignet du har valgt. En kvantitativ studie krever talldata; en kvalitativ studie krever tekstdata. Noen studier bruker begge deler — dette kalles **mixed methods**.`,
    },

    // --- BLOKK 1: Kvantitativ datainnsamling ---
    {
      id: 'tof2-6-3-text-1',
      type: 'text',
      content: `### Kvantitativ datainnsamling

Kvantitative metoder produserer **talldata** som kan bearbeides statistisk. De vanligste metodene er:

**Spørreskjema (survey):** En strukturert liste med spørsmål som besvares av respondentene. Spørreskjemaer kan distribueres på papir eller digitalt (Google Forms, Nettskjema, SurveyMonkey) og når mange respondenter raskt.

Gode spørreskjemaer kjennetegnes av:
- Enkle, entydige spørsmål uten fagsjargong
- Logisk rekkefølge fra generelt til spesifikt
- Blandede svarformater: Likert-skala (1–5), flervalg, rangeringsoppgaver
- Pilottesting på en liten gruppe før utsending
- Anonymitet for å sikre ærlige svar

**Måleinstrumenter og sensorer:** I naturvitenskapelige forsøk brukes fysiske instrumenter som termometre, pH-målere, vekter, desibelmålere, spektrofotometre og dataloggere. Kalibrering av instrumenter før bruk er avgjørende for reliable data.

**Logger og automatisk registrering:** Digitale logger registrerer data automatisk over tid — for eksempel temperatursensorer som logger hvert 10. minutt, apper som registrerer skjermtid, eller kameraer med tidsintervallopptak av plantevekst.`,
    },
    {
      id: 'tof2-6-3-note-1',
      type: 'note',
      title: 'Vanlige feil i spørreskjemaer',
      content: `**Ledende spørsmål:** «Er du ikke enig i at mobilbruk er skadelig?» → Spørsmålet forutsetter et bestemt svar.

**Doble spørsmål:** «Er du fornøyd med undervisningen og læremidlene?» → Respondenten kan være fornøyd med det ene, men ikke det andre.

**Uklare skalaer:** «Hvor ofte trener du? Ofte / Av og til / Sjelden» → Hva betyr «ofte» for ulike personer?

**Sosial ønskverdighet:** Respondenter svarer det de tror er «riktig» i stedet for det som er sant. Anonym utfylling og nøytral ordlyd reduserer dette problemet.`,
    },
    {
      id: 'tof2-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken av følgende er den beste formuleringen av et spørsmål i et spørreskjema?',
        options: [
          { id: 'a', text: '«Synes du ikke også at skolen bør ha mer fysisk aktivitet?»', isCorrect: false },
          { id: 'b', text: '«I hvilken grad er du enig i at skoledagen bør inneholde mer fysisk aktivitet?» (Likert-skala 1–5)', isCorrect: true },
          { id: 'c', text: '«Er du fornøyd med mengden fysisk aktivitet og kostholdsundervisning på skolen?»', isCorrect: false },
          { id: 'd', text: '«Trener du mye?»', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Denne formuleringen er nøytral (ikke ledende), stiller kun ett spørsmål (ikke dobbelt) og bruker en definert Likert-skala for presise svar. Alternativ A er ledende («Synes du ikke også»). Alternativ C er et dobbeltspørsmål (fysisk aktivitet OG kostholdsundervisning). Alternativ D er vagt — «mye» er subjektivt og gir ikke sammenlignbare data.',
      },
    },

    // --- BLOKK 2: Kvalitativ datainnsamling ---
    {
      id: 'tof2-6-3-text-2',
      type: 'text',
      content: `### Kvalitativ datainnsamling

Kvalitative metoder produserer **tekstdata** — rike, detaljerte beskrivelser av erfaringer, opplevelser og meninger. De viktigste metodene er:

**Intervju:** En samtale mellom forsker og informant, styrt av en intervjuguide. Intervjuer kan være:
- *Strukturerte:* Faste spørsmål i fast rekkefølge (nær spørreskjema)
- *Semistrukturerte:* Forberedte temaer, men rom for oppfølgingsspørsmål (vanligst i kvalitativ forskning)
- *Ustrukturerte:* Åpen samtale rundt et tema (brukes i utforskende studier)

**Observasjon:** Forskeren observerer og registrerer atferd, samhandling eller fenomener i naturlige omgivelser. Observasjon kan være:
- *Deltakende:* Forskeren deltar i aktiviteten som observeres
- *Ikke-deltakende:* Forskeren observerer utenfra uten å påvirke situasjonen

**Dokumentanalyse:** Systematisk gjennomgang av eksisterende dokumenter — rapporter, avisartikler, lovtekster, sosiale medier-poster, dagbøker eller historiske kilder. Fordelen er at dataene allerede eksisterer; ulempen er at de ikke er samlet inn for forskerens formål.

Kvalitative metoder gir dybde, men ikke bredde. De egner seg for å forstå *hvorfor* og *hvordan*, mens kvantitative metoder svarer bedre på *hvor mye* og *hvor mange*.`,
    },
    {
      id: 'tof2-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'En forsker vil forstå hvordan nyutdannede lærere opplever det første året i jobb. Hvilken datainnsamlingsmetode er mest hensiktsmessig?',
        options: [
          { id: 'a', text: 'Spørreskjema med Likert-skala sendt til 500 lærere', isCorrect: false },
          { id: 'b', text: 'Semistrukturerte intervjuer med 12–15 nyutdannede lærere', isCorrect: true },
          { id: 'c', text: 'Automatisk loggføring av arbeidstimer', isCorrect: false },
          { id: 'd', text: 'Eksperiment med tilfeldig fordeling til ulike skoler', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Spørsmålet handler om å *forstå opplevelsen* — det er et kvalitativt forskningsspørsmål som krever rike, detaljerte beskrivelser. Semistrukturerte intervjuer gir rom for å utforske lærernes erfaringer i dybden. Spørreskjema (A) gir bredde men ikke dybde. Loggføring (C) fanger bare arbeidstimer, ikke opplevelser. Eksperiment (D) er verken gjennomførbart eller relevant for denne problemstillingen.',
      },
    },

    // --- BLOKK 3: Koding og systematisering ---
    {
      id: 'tof2-6-3-text-3',
      type: 'text',
      content: `### Koding og systematisering av data

Uansett om dataene er kvantitative eller kvalitative, må de **systematiseres** før analyse.

**Kvantitative data** systematiseres ved å legge dem inn i et regneark eller statistikkprogram med klare variabelnavn, korrekte dataformater (tall, dato, tekst) og konsistent koding. For eksempel kan kjønn kodes som 0 = gutt, 1 = jente; Likert-svar kodes numerisk 1–5.

**Kvalitative data** kodes gjennom en prosess kalt **tematisk analyse**:

1. **Transkribering:** Intervjuer skrives ut ordrett fra lydopptak
2. **Åpen koding:** Les gjennom teksten og merk interessante utsagn med koder (merkelapper), for eksempel «mestring», «tidsmangel», «kollegastøtte»
3. **Kategorisering:** Grupper kodene i overordnede kategorier/temaer
4. **Tolkning:** Hva forteller temaene oss? Hvilke mønstre ser vi?

Eksempel: I intervjuer med nyutdannede lærere kan kodene «overlesse», «ikke nok tid til planlegging» og «for mange oppgaver» grupperes under kategorien **arbeidsmengde**. Kodene «støttende rektor», «erfarne kollegaer hjelper» og «mentorordning» kan grupperes under **kollegastøtte**.

Kvalitativ koding krever **refleksivitet** — at forskeren er bevisst sine egne antagelser og fordommer, og hvordan disse kan påvirke tolkningene.`,
    },

    // --- BLOKK 4: Statistisk analyse ---
    {
      id: 'tof2-6-3-text-4',
      type: 'text',
      content: `### Statistisk analyse: deskriptiv og analytisk

Statistisk analyse av kvantitative data deles i to hovedkategorier:

**Deskriptiv (beskrivende) statistikk** oppsummerer og beskriver dataene:
- **Sentralmål:** Gjennomsnitt, median og modus — forteller hva som er «typisk»
- **Spredningsmål:** Standardavvik, varians og variasjonsbredde — forteller hvor spredte dataene er
- **Frekvensfordelinger:** Hvor mange observasjoner finnes i ulike kategorier?
- **Prosentiler og kvartiler:** Hvor i fordelingen ligger en observasjon?

**Analytisk (slutnings-)statistikk** tester om mønstrene vi ser er reelle eller tilfeldige:
- **t-test:** Sammenligner gjennomsnitt mellom to grupper. Eksempel: Er gjennomsnittsscoren signifikant høyere i eksperimentgruppen enn i kontrollgruppen?
- **Kjikvadrattest:** Tester sammenheng mellom to kategoriske variabler. Eksempel: Er det en sammenheng mellom kjønn og valg av studieretning?
- **Korrelasjonsanalyse:** Måler styrken og retningen på sammenhengen mellom to variabler. Korrelasjonskoeffisienten $r$ varierer fra $-1$ (perfekt negativ) til $+1$ (perfekt positiv).
- **ANOVA (variansanalyse):** Sammenligner gjennomsnitt mellom tre eller flere grupper.

I alle analytiske tester beregnes en **p-verdi** som angir sannsynligheten for å observere resultatene gitt at nullhypotesen er sann. Vanlig signifikansnivå er $p < 0{,}05$ — det betyr at det er under 5 % sannsynlighet for at resultatet skyldes tilfeldigheter.`,
    },
    {
      id: 'tof2-6-3-warning-1',
      type: 'warning',
      title: 'P-verdi er ikke sannsynligheten for at hypotesen er sann',
      content: `En vanlig misforståelse: «$p = 0{,}03$ betyr at det er 97 % sannsynlighet for at hypotesen vår er riktig.» Dette er **feil**.

P-verdien er sannsynligheten for å observere data like ekstreme som (eller mer ekstreme enn) de vi fikk, *gitt at nullhypotesen er sann*. Den sier ingenting direkte om sannsynligheten for at hypotesen vår er riktig.

En lav p-verdi betyr at dataene er lite forenlige med nullhypotesen — men ikke nødvendigvis at den alternative hypotesen er korrekt. Andre forklaringer, som feil i datainnsamlingen eller konfunderende variabler, kan også forklare resultatet.`,
    },
    {
      id: 'tof2-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'En forsker sammenligner testresultatene til to grupper og finner en p-verdi på 0,02. Hva betyr dette?',
        options: [
          { id: 'a', text: 'Det er 2 % sannsynlighet for at den alternative hypotesen er feil', isCorrect: false },
          { id: 'b', text: 'Det er 98 % sannsynlighet for at behandlingen virker', isCorrect: false },
          { id: 'c', text: 'Gitt at nullhypotesen er sann, er det 2 % sannsynlighet for å observere en forskjell like stor eller større enn den observerte', isCorrect: true },
          { id: 'd', text: 'Forskjellen mellom gruppene er 2 %', isCorrect: false },
        ],
        solution: 'Riktig svar er C. P-verdien er sannsynligheten for å observere data like ekstreme (eller mer) gitt at nullhypotesen stemmer. Den er IKKE sannsynligheten for at hypotesen er sann (B) eller feil (A), og den sier ingenting om størrelsen på forskjellen (D). Med p = 0,02 er det uvanlig å observere en slik forskjell hvis det ikke var noen reell effekt, og vi ville typisk forkaste nullhypotesen ved signifikansnivå 0,05.',
      },
    },

    // --- BLOKK 5: Tabeller og figurer ---
    {
      id: 'tof2-6-3-text-5',
      type: 'text',
      content: `### Tabeller og figurer: fremstilling av data

Resultatene av analysen presenteres visuelt gjennom tabeller og figurer. Godt designede visualiseringer gjør komplekse data forståelige.

**Tabeller** brukes når:
- Du har nøyaktige tall som leseren bør kunne slå opp
- Du sammenligner flere variabler eller grupper
- Dataene har få kategorier men mange målinger

En god tabell har tydelig overskrift, beskrivende kolonnenavn, riktig antall desimaler (vanligvis 1–2) og enhetsbetegnelser.

**Figurer** brukes når:
- Du vil vise trender, mønstre eller fordelinger
- Du vil gi et raskt visuelt inntrykk
- Dataene har en tidsdimensjon eller mange kategorier

Vanlige figurtyper:
- **Søylediagram:** Sammenligner kategorier (f.eks. gjennomsnittlig score i tre grupper)
- **Linjediagram:** Viser utvikling over tid (f.eks. plantevekst per dag)
- **Spredningsdiagram (scatterplot):** Viser sammenhengen mellom to variabler (f.eks. studietid vs. karakter)
- **Boksdiagram (boxplot):** Viser fordeling, median, kvartiler og uteliggere
- **Histogram:** Viser frekvensfordelingen til en variabel

Alle figurer skal ha tittel, aksetitler med enheter, forklaring (legend) og kilde. Unngå 3D-effekter, overflødige dekorasjoner og forvirrende fargebruk — klarhet er viktigere enn estetikk.`,
    },

    // --- Oppsummering ---
    {
      id: 'tof2-6-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Kvantitativ datainnsamling** (spørreskjema, måleinstrumenter, logger) gir talldata for statistisk analyse.
- **Kvalitativ datainnsamling** (intervju, observasjon, dokumentanalyse) gir tekstdata for tematisk analyse.
- Spørreskjemaer må unngå ledende spørsmål, doble spørsmål og uklare skalaer.
- Kvalitative data systematiseres gjennom **koding**: transkribering, åpen koding, kategorisering og tolkning.
- **Deskriptiv statistikk** beskriver dataene (gjennomsnitt, standardavvik), mens **analytisk statistikk** tester hypoteser (t-test, kjikvadrat, korrelasjon).
- **P-verdien** er sannsynligheten for å observere dataene gitt at $H_0$ er sann — den er ikke sannsynligheten for at hypotesen er riktig.
- Tabeller og figurer skal være klare, presise og inneholde tittel, aksetitler og enheter.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof2-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du har gjennomført et eksperiment der du testet om plantevekst påvirkes av musikktype. Tre grupper planter ble utsatt for henholdsvis klassisk musikk, heavy metal og stillhet i fire uker. Du har målt høyden på plantene ukentlig.\n\n(a) Hvilken type diagram egner seg best for å vise planteveksten over tid for de tre gruppene?\n(b) Hvilken statistisk test er egnet for å sammenligne gjennomsnittshøyden mellom de tre gruppene etter fire uker?\n(c) Forklar kort hva du ville rapportert som deskriptiv statistikk for dette datasettet.',
        hints: ['Tenk på at du har tidsserie-data for tre grupper og at du sammenligner gjennomsnitt mellom tre (ikke to) grupper.'],
        solution: '(a) Et linjediagram er best egnet. X-aksen viser tid (uke 0–4), y-aksen viser plantehøyde (i cm), og tre linjer representerer de tre gruppene (klassisk, heavy metal, stillhet). Et linjediagram viser tydelig utviklingen over tid for hver gruppe og gjør det lett å sammenligne vekstmønstre.\n\n(b) ANOVA (variansanalyse) er den rette testen fordi vi sammenligner gjennomsnittshøyden mellom tre grupper. En t-test kan bare sammenligne to grupper om gangen, og å bruke flere t-tester øker risikoen for falske positive resultater. ANOVA tester om det er en signifikant forskjell mellom minst to av gruppene.\n\n(c) Deskriptiv statistikk ville inkludere: gjennomsnittshøyde og standardavvik for hver gruppe etter fire uker, median og variasjonsbredde for å vise spredningen, antall planter per gruppe (n), og eventuelt gjennomsnittshøyde per uke for å beskrive vekstkurvene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof2-6-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du skal undersøke hvordan ungdom i VG2 opplever stress knyttet til eksamen. Du velger en mixed methods-tilnærming.\n\n(a) Beskriv hvordan du ville samlet inn kvantitative data og kvalitative data i denne studien.\n(b) Forklar hvordan du ville kodet og analysert de kvalitative dataene (beskriv trinnene i tematisk analyse).\n(c) Drøft fordeler og ulemper med å kombinere kvantitative og kvalitative metoder i samme studie.',
        hints: ['Mixed methods betyr å bruke begge tilnærminger i samme studie. Tenk på hvordan de kan utfylle hverandre — for eksempel kvantitative data for bredde, kvalitative for dybde.'],
        solution: '(a) Kvantitativ datainnsamling: Spørreskjema (digitalt, anonymt) til alle VG2-elever på skolen (ca. 200 elever) med Perceived Stress Scale (PSS-10) og tilleggsspørsmål om eksamensstress, studievaner og søvn (Likert-skala 1–5).\n\nKvalitativ datainnsamling: Semistrukturerte intervjuer med 8–12 elever valgt strategisk fra ulike studieretninger og med ulikt stressnivå (basert på spørreskjemaresultatene). Intervjuguide med åpne spørsmål om opplevelse av eksamensperioden, mestringsstrategier og støtteapparat.\n\n(b) Tematisk analyse i fire trinn:\n1. Transkribering: Skrive ut alle intervjuer ordrett fra lydopptak.\n2. Åpen koding: Lese gjennom transkripsjonene og merke relevante utsagn med koder, for eksempel «søvnproblemer», «prestasjonsangst», «foreldrenes forventninger», «venners støtte».\n3. Kategorisering: Gruppere kodene i overordnede temaer, for eksempel «fysiologiske stressreaksjoner», «akademisk press», «sosial støtte», «mestringsstrategier».\n4. Tolkning: Analysere hva temaene forteller — for eksempel at elevene opplever at mangel på kontroll er den viktigste stressfaktoren, og at sosial støtte fra venner oppleves som viktigere enn foreldrestøtte.\n\n(c) Fordeler med mixed methods: Kvantitative data gir bredde (hvor mange er stresset?), mens kvalitative data gir dybde (hvorfor er de stresset?). Metodene kan validere hverandre — hvis spørreskjemaet viser høy stressscore og intervjuene beskriver konkrete stressfaktorer, styrkes funnene. Kvalitative data kan forklare uventede kvantitative resultater.\n\nUlemper: Tidkrevende å gjennomføre begge tilnærminger grundig. Krever kompetanse i både statistisk og kvalitativ analyse. Kan være vanskelig å integrere funnene på en meningsfull måte. Kvalitative data fra 10 intervjuer kan ikke generaliseres til hele populasjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.4: IMRaD-strukturen
// ============================================================================

export const CHAPTER_TOF_2_6_4: TextbookChapter = {
  id: 'tof-2-6-4',
  courseId: 'tof-2',
  chapterNumber: '6.4',
  title: 'IMRaD-strukturen',
  description: 'Introduksjon, metode, resultater, diskusjon og abstract — oppbygningen av en forskningsartikkel.',
  estimatedMinutes: 25,
  competenceGoals: [
    'strukturere og skrive en forskningsartikkel etter IMRaD-formatet',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-6-4-intro',
      type: 'text',
      content: `## IMRaD-strukturen

Når du har planlagt, gjennomført og analysert et forskningsprosjekt, gjenstår en avgjørende oppgave: å **formidle resultatene**. I vitenskapelig forskning skrives resultatene som regel i form av en **forskningsartikkel** — og den internasjonale standarden for oppbygningen av slike artikler er **IMRaD**.

IMRaD står for **Introduksjon, Metode, Resultater og Diskusjon**. Denne strukturen har vært dominerende i naturvitenskapelige tidsskrifter siden 1970-tallet og brukes i dag i de aller fleste fagfelt. Strukturen er logisk: den følger forskningsprosessen fra spørsmål til svar.

IMRaD er ikke bare relevant for profesjonelle forskere. I Teknologi og forskningslære 2 forventes det at du kan strukturere ditt eget forskningsprosjekt som en vitenskapelig artikkel. Å lære IMRaD-formatet er samtidig å lære **kritisk lesing** — du vet hva du skal se etter når du vurderer andres forskning.`,
    },

    // --- BLOKK 1: Introduksjon ---
    {
      id: 'tof2-6-4-def-1',
      type: 'definition',
      title: 'IMRaD',
      content: `**IMRaD** er en forkortelse for den standardiserte oppbygningen av vitenskapelige artikler:

- **I** – Introduksjon: Hvorfor ble studien gjort?
- **M** – Metode: Hvordan ble studien gjennomført?
- **R** – Resultater: Hva ble funnet?
- **a** – (og)
- **D** – Diskusjon: Hva betyr funnene?

I tillegg har artikkelen et **abstract** (sammendrag) i begynnelsen og en **referanseliste** til slutt. Noen artikler har også en **konklusjon** som egen seksjon etter diskusjonen.`,
    },
    {
      id: 'tof2-6-4-text-1',
      type: 'text',
      content: `### Introduksjon: bakgrunn, problemstilling, formål

Introduksjonen besvarer spørsmålet: **Hvorfor ble denne studien gjort?** Den leder leseren fra det brede temaet inn mot det spesifikke forskningsspørsmålet, som en trakt.

**Oppbygning av introduksjonen:**

1. **Bakgrunn:** Start bredt — hva er det overordnede temaet? Hvorfor er det viktig? Etabler konteksten med henvisning til tidligere forskning.

2. **Kunnskapshull:** Hva vet vi *ikke* enda? Hva har tidligere studier ikke undersøkt, eller hvilke motstridende resultater finnes? Her viser du at din studie fyller et behov.

3. **Problemstilling/forskningsspørsmål:** Formuler den presise problemstillingen. Dette er det mest sentrale avsnittet i introduksjonen — alt som kommer før, bygger opp mot dette.

4. **Formål og hypotese:** Hva er formålet med studien? Hvis studien er kvantitativ, inkluder hypotesen.

En god introduksjon er som en fortelling der hvert avsnitt logisk fører til det neste. Leseren skal tenke: «Ja, selvfølgelig — dette måtte undersøkes!»

**Vanlige feil i introduksjonen:**
- For bred bakgrunn uten å koble til egen studie
- Manglende referanser til tidligere forskning
- Uklar eller fraværende problemstilling
- For lang — introduksjonen bør typisk være 10–15 % av artikkelen`,
    },
    {
      id: 'tof2-6-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er hovedformålet med introduksjonen i en IMRaD-artikkel?',
        options: [
          { id: 'a', text: 'Presentere resultatene fra studien', isCorrect: false },
          { id: 'b', text: 'Beskrive metoden som ble brukt', isCorrect: false },
          { id: 'c', text: 'Etablere bakgrunn, identifisere kunnskapshull og formulere forskningsspørsmålet', isCorrect: true },
          { id: 'd', text: 'Diskutere begrensningene ved studien', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Introduksjonen har tre hovedoppgaver: etablere bakgrunn og kontekst, identifisere et kunnskapshull i eksisterende forskning, og formulere forskningsspørsmålet/hypotesen. Resultater (A) hører til R-delen, metode (B) hører til M-delen, og begrensninger (D) hører til diskusjonen.',
      },
    },

    // --- BLOKK 2: Metode ---
    {
      id: 'tof2-6-4-text-2',
      type: 'text',
      content: `### Metode: detaljert beskrivelse og reproduserbarhet

Metodedelen besvarer spørsmålet: **Hvordan ble studien gjennomført?** Den skal være så detaljert at en annen forsker kan gjenta studien og få sammenlignbare resultater. Dette kalles **reproduserbarhet** og er et grunnleggende krav i all vitenskap.

**Metodedelen bør inneholde:**

**Design:** Hvilket forskningsdesign ble brukt? Eksperimentelt, kvasi-eksperimentelt eller observasjonelt? Tidsramme?

**Utvalg:** Hvem eller hva ble undersøkt? Hvor mange deltakere/enheter? Hvordan ble de rekruttert? Inklusjons- og eksklusjonskriterier?

**Materialer og utstyr:** Hvilke instrumenter, kjemikalier, programvare eller materialer ble brukt? Spesifiser produsent, modell og innstillinger.

**Prosedyre:** Steg-for-steg-beskrivelse av hva som ble gjort. Rekkefølge, tidsintervaller, betingelser.

**Datainnsamling:** Hvordan ble data registrert? Hvilke måleinstrumenter ble brukt? Kalibrering?

**Analyse:** Hvilke statistiske metoder ble brukt? Signifikansnivå? Programvare?

**Etikk:** Ble studien godkjent av etisk komité? Ble informert samtykke innhentet?

Metodedelen skrives i **fortid** (preteritum) fordi den beskriver hva som *ble gjort*. Bruk passiv form eller «vi»-form konsistent gjennom hele seksjonen.`,
    },
    {
      id: 'tof2-6-4-tip-1',
      type: 'tip',
      title: 'Testen for god metodebeskrivelse',
      content: `Still deg selv spørsmålet: **Kan en annen elev gjenta forsøket mitt basert bare på metodebeskrivelsen, uten å ha snakket med meg?**

Hvis svaret er nei, mangler det detaljer. Typiske mangler:
- Nøyaktige mengder, konsentrasjoner eller temperaturer er utelatt
- Tidsintervaller er ikke spesifisert
- Merke og modell på utstyr er ikke nevnt
- Analysevalg (hvilken test, signifikansnivå) er ikke beskrevet

Husk: Leseren skal ikke trenge å gjette eller tolke noe i metodedelen. Den skal være en oppskrift.`,
    },
    {
      id: 'tof2-6-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er det viktigste kravet til metodedelen i en vitenskapelig artikkel?',
        options: [
          { id: 'a', text: 'Den skal overbevise leseren om at resultatene er korrekte', isCorrect: false },
          { id: 'b', text: 'Den skal være så detaljert at studien kan reproduseres av andre forskere', isCorrect: true },
          { id: 'c', text: 'Den skal inneholde tolkning av resultatene', isCorrect: false },
          { id: 'd', text: 'Den skal være den lengste seksjonen i artikkelen', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Reproduserbarhet er det grunnleggende kravet til metodedelen. Andre forskere skal kunne gjenta studien basert på beskrivelsen og forvente sammenlignbare resultater. Å overbevise (A) hører mer til diskusjonen. Tolkning av resultater (C) hører til diskusjonen. Metodedelen trenger ikke å være lengst (D) — den skal være så lang som nødvendig, men ikke lengre.',
      },
    },

    // --- BLOKK 3: Resultater ---
    {
      id: 'tof2-6-4-text-3',
      type: 'text',
      content: `### Resultater: objektiv presentasjon av funn

Resultatdelen besvarer spørsmålet: **Hva ble funnet?** Her presenteres dataene og analysene uten tolkning — bare fakta.

**Prinsipper for resultatdelen:**

**Objektivitet:** Presenter funnene nøytralt. Skriv «Gjennomsnittlig veksthastighet i gruppe A var 2,3 cm/uke (SD = 0,4)» — ikke «Gruppe A vokste imponerende raskt.» Vurderinger og tolkninger hører til diskusjonen.

**Struktur:** Organiser resultatene logisk, gjerne i samme rekkefølge som forskningsspørsmålene. Bruk underoverskrifter.

**Tekst og figurer samspiller:** Hovedfunnene beskrives i tekst og støttes av tabeller og figurer. Teksten skal ikke bare gjenta tallene fra tabellen, men peke på de viktigste mønstrene: «Som vist i Tabell 2 var gjennomsnittshøyden signifikant høyere i gruppe A enn i gruppe B ($t = 3{,}42$, $p = 0{,}002$).»

**Statistiske resultater rapporteres fullstendig:** Inkluder teststatistikk, frihetsgrader, p-verdi og effektstørrelse. Eksempel: «En uavhengig t-test viste en signifikant forskjell i testresultater mellom gruppene, $t(58) = 2{,}87$, $p = 0{,}006$, Cohens $d = 0{,}74$.»

**Ikke-signifikante resultater rapporteres også:** Det er viktig å rapportere alle resultater — også de som ikke støtter hypotesen. Å unnlate dette kalles **rapporteringsskjevhet** (reporting bias) og er et alvorlig brudd på vitenskapelig etikk.`,
    },
    {
      id: 'tof2-6-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvilken av følgende setninger hører hjemme i resultatdelen av en IMRaD-artikkel?',
        options: [
          { id: 'a', text: '«Resultatene kan forklares med at lys stimulerer fotosyntesen.»', isCorrect: false },
          { id: 'b', text: '«Gjennomsnittlig stengellengde i lysgruppen var 12,4 cm (SD = 1,8) mot 8,1 cm (SD = 2,0) i kontrollgruppen, t(38) = 6,37, p < 0,001.»', isCorrect: true },
          { id: 'c', text: '«Tidligere studier har vist at lys er viktig for plantevekst (Hansen, 2021).»', isCorrect: false },
          { id: 'd', text: '«Vi brukte 40 karseplanter fordelt i to grupper à 20 planter.»', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Denne setningen presenterer data objektivt med nøyaktige tall, spredningsmål og fullstendig statistisk resultat — akkurat det resultatdelen skal inneholde. Alternativ A er tolkning (hører til diskusjonen). Alternativ C er bakgrunnslitteratur (hører til introduksjonen). Alternativ D er prosedyrebeskrivelse (hører til metoden).',
      },
    },

    // --- BLOKK 4: Diskusjon ---
    {
      id: 'tof2-6-4-text-4',
      type: 'text',
      content: `### Diskusjon: tolkning, begrensninger og implikasjoner

Diskusjonen besvarer spørsmålet: **Hva betyr funnene?** Her tolkes resultatene, sammenlignes med tidligere forskning og settes i en bredere kontekst.

**Oppbygning av diskusjonen:**

1. **Hovedfunn:** Start med å gjenta de viktigste resultatene i én eller to setninger. Koble dem direkte til forskningsspørsmålet og hypotesen: «Resultatene støtter hypotesen om at …» eller «I motsetning til hypotesen fant vi at …»

2. **Tolkning:** Hva kan forklare resultatene? Hva er de underliggende mekanismene? Trekk inn teori og fagkunnskap.

3. **Sammenligning med tidligere forskning:** Stemmer resultatene med andre studier? Hvis ikke, hva kan forklare forskjellene? Var metoden annerledes? Var utvalget forskjellig?

4. **Begrensninger:** Vær ærlig om studiens svakheter. Typiske begrensninger:
   - Lite utvalg (gir lav statistisk styrke)
   - Mulige konfunderende variabler
   - Begrensninger ved måleinstrumentene
   - Kort tidshorisont
   - Manglende generalisering (kan resultatene gjelde for andre populasjoner?)

5. **Implikasjoner:** Hva betyr funnene i praksis? Hva er konsekvensene for feltet?

6. **Videre forskning:** Hva bør undersøkes videre? Hvilke nye spørsmål reiser studien?

En god diskusjon viser at forfatteren forstår sine egne data, kjenner fagfeltet og er ærlig om begrensninger. Det er dette som skiller en grundig forsker fra en som bare rapporterer tall.`,
    },
    {
      id: 'tof2-6-4-warning-1',
      type: 'warning',
      title: 'Vanlige feil i diskusjonen',
      content: `**Overtolkning:** Å hevde mer enn dataene gir grunnlag for. Hvis du har en korrelasjon, kan du ikke konkludere med kausalitet. Hvis utvalget er lite, kan du ikke generalisere bredt.

**Bortforklaring:** Å forklare bort resultater som ikke støtter hypotesen, i stedet for å ta dem på alvor. Negative funn er også funn — og kan være vel så viktige.

**Nye resultater:** Diskusjonen skal *ikke* presentere nye data eller analyser som ikke var i resultatdelen. All tolkning skal basere seg på allerede presenterte funn.

**Ingen selvkritikk:** En artikkel uten begrensninger virker upålitelig. Alle studier har svakheter — å anerkjenne dem viser vitenskapelig modenhet.`,
    },

    // --- BLOKK 5: Abstract ---
    {
      id: 'tof2-6-4-text-5',
      type: 'text',
      content: `### Abstract: sammendrag av hele artikkelen

Selv om abstractet skrives *sist*, plasseres det *først* i artikkelen. Et abstract er et komprimert sammendrag av hele studien — vanligvis 150–300 ord — og er ofte det eneste leseren leser før hen bestemmer seg for å lese videre.

**Et godt abstract inneholder (i denne rekkefølgen):**

1. **Bakgrunn/formål:** 1–2 setninger om kontekst og forskningsspørsmål
2. **Metode:** 2–3 setninger om design, utvalg og analyse
3. **Resultater:** 2–3 setninger om hovedfunnene med nøkkeltall
4. **Konklusjon:** 1–2 setninger om hva funnene betyr

Abstractet skrives som ett sammenhengende avsnitt uten underoverskrifter (i de fleste tidsskrifter) og bør kunne leses uavhengig av resten av artikkelen. Det skal ikke inneholde referanser, forkortelser som ikke er definert, eller figur-/tabellhenvisninger.

**Tip:** Skriv abstractet sist — når du vet nøyaktig hva studien fant. Ta én nøkkelsetning fra hver del av artikkelen og sett dem sammen. Forkort deretter til maks antall ord.

**Nøkkelord** listes ofte under abstractet (3–5 ord som beskriver studiens hovedtemaer) og brukes av søkemotorer for å gjøre artikkelen søkbar i databaser.`,
    },
    {
      id: 'tof2-6-4-example-1',
      type: 'example',
      title: 'Eksempel: Et komplett abstract',
      problem: 'Skriv et abstract for en tenkt studie om effekten av bakgrunnsmusikk på konsentrasjon hos elever.',
      solution: `**Abstract:**

Bakgrunnsmusikk brukes av mange elever under studier, men det er uklart om musikken forbedrer eller forstyrrer konsentrasjonen. Denne studien undersøkte effekten av rolig instrumentalmusikk på konsentrasjonsevne hos VG1-elever. I et randomisert kontrollert eksperiment ble 60 elever fordelt i to grupper: musikkgruppen (n = 30) hørte klassisk instrumentalmusikk under oppgaveløsning, mens kontrollgruppen (n = 30) arbeidet i stillhet. Konsentrasjon ble målt med d2-oppmerksomhetstesten. Musikkgruppen løste gjennomsnittlig 47,2 oppgaver korrekt (SD = 6,1), mot 42,8 (SD = 5,9) i kontrollgruppen. En uavhengig t-test viste en signifikant forskjell, t(58) = 2,87, p = 0,006, Cohens d = 0,74. Resultatene tyder på at rolig instrumentalmusikk kan ha en moderat positiv effekt på konsentrasjonen hos elever i denne aldersgruppen, men begrensninger i utvalgsstørrelse og generalisering må tas hensyn til.

**Nøkkelord:** bakgrunnsmusikk, konsentrasjon, d2-test, randomisert kontrollert eksperiment, videregående skole

*Merk: Abstractet følger strukturen bakgrunn → metode → resultater → konklusjon i ett sammenhengende avsnitt, inneholder nøkkeltall og er på ca. 150 ord.*`,
    },

    // --- Oppsummering ---
    {
      id: 'tof2-6-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **IMRaD** (Introduksjon, Metode, Resultater og Diskusjon) er den internasjonale standarden for vitenskapelige artikler.
- **Introduksjonen** bygger fra bred bakgrunn via kunnskapshull til et presist forskningsspørsmål.
- **Metoden** beskriver nøyaktig hvordan studien ble gjennomført — detaljert nok til at andre kan reprodusere den.
- **Resultatene** presenterer funn objektivt med tall, statistikk, tabeller og figurer — uten tolkning.
- **Diskusjonen** tolker resultatene, sammenligner med tidligere forskning, erkjenner begrensninger og foreslår videre forskning.
- **Abstractet** skrives sist men plasseres først — det er et komprimert sammendrag av hele artikkelen på 150–300 ord.
- God vitenskapelig skriving er ærlig, presis og transparent — også om svakheter og uventede funn.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof2-6-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sorter følgende setninger til riktig IMRaD-seksjon (Introduksjon, Metode, Resultater eller Diskusjon):\n\n(a) «Tidligere studier har vist motstridende resultater om sammenhengen mellom skjermtid og søvnkvalitet (Li et al., 2022; Berg, 2023).»\n(b) «Gjennomsnittlig søvnlengde i gruppen med høy skjermtid var 6,4 timer (SD = 0,8) mot 7,2 timer (SD = 0,6) i gruppen med lav skjermtid.»\n(c) «Data ble analysert med en uavhengig t-test i SPSS versjon 29. Signifikansnivå ble satt til p < 0,05.»\n(d) «Den observerte forskjellen kan skyldes at blått lys fra skjermer hemmer produksjonen av melatonin.»\n\nBegrunn plasseringen av hver setning.',
        hints: ['Tenk på hva hver seksjon skal inneholde: bakgrunn og tidligere forskning, prosedyre og analyse, rene data, eller tolkning.'],
        solution: '(a) Introduksjon — Setningen refererer til tidligere forskning og motstridende funn, noe som er typisk for bakgrunnsdelen der man etablerer kunnskapshull.\n\n(b) Resultater — Setningen presenterer konkrete data (gjennomsnitt og standardavvik) objektivt uten tolkning. Dette er ren datapresentasjon.\n\n(c) Metode — Setningen beskriver analyseverktøyet (SPSS), den statistiske metoden (t-test) og signifikansnivået. Alt dette er prosedyreinformasjon.\n\n(d) Diskusjon — Setningen tolker et funn ved å foreslå en biologisk mekanisme (melatoninhemming). Tolkning og forklaring av resultater hører til diskusjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof2-6-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du har gjennomført et eksperiment der du testet om ulike farger på klasseromsveggene påvirker elevenes konsentrasjon. Du fant at blå vegger ga signifikant bedre konsentrasjon enn hvite vegger (p = 0,03), mens røde vegger ikke ga signifikant forskjell fra hvite (p = 0,41).\n\nSkriv et kort diskusjonsavsnitt (ca. 150–200 ord) som:\n(a) Oppsummerer hovedfunnene i lys av hypotesen\n(b) Foreslår en mulig forklaring på resultatene\n(c) Nevner minst to begrensninger ved studien\n(d) Foreslår videre forskning',
        hints: ['Husk å tolke BEGGE resultatene (signifikant og ikke-signifikant). Begrensninger kan handle om utvalgsstørrelse, varighet, kontroll for konfunderende variabler osv.'],
        solution: 'Resultatene viser at klasseromsveggenes farge kan påvirke elevers konsentrasjon. I tråd med hypotesen ga blå vegger signifikant bedre konsentrasjon enn hvite vegger (p = 0,03). Derimot ga røde vegger ingen signifikant forskjell sammenlignet med hvite vegger (p = 0,41), noe som ikke støttet hypotesen om at alle fargeendringer ville ha en effekt.\n\nEn mulig forklaring er at blåfargen virker beroligende og reduserer fysiologisk aktivering, noe som kan fremme vedvarende oppmerksomhet. Rødt er derimot forbundet med økt aktivering og kan motvirke konsentrasjon hos noen, mens det stimulerer andre — noe som gir stor variasjon og dermed ikke-signifikant resultat.\n\nStudien har flere begrensninger. For det første var utvalget begrenset til 45 elever ved én skole, noe som begrenser generaliserbarheten. For det andre varte intervensjonen bare to uker — langvarig eksponering kan gi andre resultater. For det tredje var det vanskelig å blinde elevene for fargeendringen, noe som kan ha skapt en placeboeffekt.\n\nVidere forskning bør undersøke langtidseffekter av veggfarge, inkludere flere farger og bruke et større, mer representativt utvalg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.5: Akademisk skriving
// ============================================================================

export const CHAPTER_TOF_2_6_5: TextbookChapter = {
  id: 'tof-2-6-5',
  courseId: 'tof-2',
  chapterNumber: '6.5',
  title: 'Akademisk skriving',
  description: 'Kildehenvisning, APA-stil, sitat og parafrasering.',
  estimatedMinutes: 25,
  competenceGoals: [
    'anvende akademisk skrivestil',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-6-5-intro',
      type: 'text',
      content: `## Akademisk skriving

Akademisk skriving skiller seg fra annen skriving på flere måter: den er **presis**, **etterprøvbar** og **saklig**. Hver påstand skal underbygges med kilder, og leseren skal alltid kunne spore informasjonen tilbake til opphavet.

I vitenskapelig forskning er det ikke nok å ha gode ideer og solide data — du må også kunne formidle dem i et språk og en form som forskersamfunnet anerkjenner. Akademisk skriving handler om å bygge et argument stein for stein, der hver stein er en dokumentert kilde, et presist begrep eller et logisk resonnement.

I dette kapittelet lærer du om kildehenvisning etter APA-standarden, forskjellen mellom direkte sitat og parafrasering, hvordan du unngår plagiat, og hvordan du bygger opp en akademisk tekst med en tydelig rød tråd. Disse ferdighetene er helt sentrale for forskningsprosjektet i Teknologi og forskningslære 2 — og for all videre akademisk utdanning.`,
    },

    // --- BLOKK 1: Kjennetegn ved akademisk skriving ---
    {
      id: 'tof2-6-5-text-1',
      type: 'text',
      content: `### Kjennetegn ved akademisk skriving

Akademisk skriving har flere kjennetegn som skiller den fra dagligtale, journalistikk og skjønnlitteratur:

**Saklighet og objektivitet:** Teksten fokuserer på saken, ikke på forfatterens følelser. I stedet for «Jeg synes dette er et spennende funn» skriver man «Funnet er bemerkelsesverdig fordi det avviker fra tidligere studier (Hansen, 2023)».

**Presisjon:** Fagbegreper brukes konsekvent og defineres ved første bruk. Vage ord som «mange», «ganske» og «en del» erstattes med konkrete angivelser: «73 % av respondentene», «en moderat effektstørrelse (d = 0,52)».

**Kildebelegg:** Alle påstander som ikke er allmennkunnskap eller egne funn, skal belegges med kildehenvisning. Dette viser at du bygger på eksisterende forskning og gjør teksten etterprøvbar.

**Logisk struktur:** Teksten har en tydelig rød tråd der hvert avsnitt bygger på det forrige. Avsnittene innledes med en temasetning som forteller leseren hva avsnittet handler om.

**Upersonlig stil (tradisjonelt):** Mange fagtradisjoner foretrekker passivform («Dataene ble analysert …») fremfor aktiv førsteperson («Jeg analyserte …»). I nyere forskning er det imidlertid blitt mer akseptert å bruke «vi» og «jeg» i metodebeskrivelser for å gjøre teksten tydeligere.`,
    },
    {
      id: 'tof2-6-5-def-1',
      type: 'definition',
      title: 'Akademisk skriving',
      content: `**Akademisk skriving** er en sjanger for fagtekster som kjennetegnes av presisjon, saklighet, kildebruk og logisk argumentasjon. Formålet er å formidle kunnskap på en etterprøvbar måte.

Sentrale prinsipper:
- Påstander underbygges med kilder
- Fagbegreper defineres og brukes konsekvent
- Argumentasjonen er logisk og systematisk
- Teksten er objektiv og saklig i tonen
- Kildelisten gjør det mulig å etterprøve all informasjon`,
    },
    {
      id: 'tof2-6-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken av følgende setninger er best egnet i en akademisk tekst?',
        options: [
          { id: 'a', text: '«Alle vet jo at klimaendringene er menneskeskapte.»', isCorrect: false },
          { id: 'b', text: '«Jeg synes virkelig at resultatene var overraskende og spennende.»', isCorrect: false },
          { id: 'c', text: '«Ifølge FNs klimapanel (IPCC, 2023) er det overveiende sannsynlig at menneskelig aktivitet er hovedårsaken til den observerte oppvarmingen siden 1950.»', isCorrect: true },
          { id: 'd', text: '«Det er ganske mange studier som viser en del sammenhenger her.»', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Denne setningen oppfyller kravene til akademisk skriving: den er presis (spesifiserer hva som er overveiende sannsynlig), belagt med kilde (IPCC, 2023) og saklig i tonen. Alternativ A mangler kilde og bruker «alle vet jo» (uformelt). Alternativ B er subjektiv og følelsesladet. Alternativ D er vag — «ganske mange», «en del» og «sammenhenger» gir ingen presis informasjon.',
      },
    },

    // --- BLOKK 2: APA-stil og kildehenvisning ---
    {
      id: 'tof2-6-5-text-2',
      type: 'text',
      content: `### APA-stilen — standarden for kildehenvisning

**APA-stilen** (American Psychological Association) er det mest brukte referansesystemet i samfunnsvitenskap, naturvitenskap og teknologi. I Norge brukes APA-stil i de fleste videregående skoler og universiteter.

APA-stilen har to hoveddeler:

**1. Referanser i teksten (in-text citations):**
Når du bruker informasjon fra en kilde, setter du inn en kort referanse i parentesen med forfatterens etternavn og årstall:

- Én forfatter: (Hansen, 2023)
- To forfattere: (Hansen & Berg, 2023)
- Tre eller flere forfattere: (Hansen et al., 2023)
- Direkte sitat: (Hansen, 2023, s. 47)

**2. Referanseliste:**
Bakerst i teksten lister du opp alle kildene du har referert til, sortert alfabetisk etter etternavn. Formatet varierer med kildetype:

**Bok:**
Etternavn, I. (Årstall). *Tittel i kursiv*. Forlag.
→ Hansen, K. (2023). *Forskningsmetode for videregående*. Gyldendal.

**Tidsskriftartikkel:**
Etternavn, I. (Årstall). Artikkeltittel. *Tidsskriftnavn*, *volum*(nummer), sidetall. https://doi.org/xxxxx
→ Berg, L. & Olsen, T. (2022). Effekten av digitale verktøy på læringsutbytte. *Norsk pedagogisk tidsskrift*, *106*(3), 215–228. https://doi.org/10.1234/npt.2022.3

**Nettside:**
Etternavn, I. (Årstall, dato). Tittel. Nettsted. URL
→ Utdanningsdirektoratet. (2024, 15. mars). Læreplan i teknologi og forskningslære. https://www.udir.no/lk20/tof`,
    },
    {
      id: 'tof2-6-5-def-2',
      type: 'definition',
      title: 'APA-stil',
      content: `**APA-stilen** (American Psychological Association, 7. utgave) er et referansesystem som brukes for å oppgi kilder i akademiske tekster.

Hovedelementer:
- **In-text citation:** Kort referanse i teksten, f.eks. (Forfatter, årstall)
- **Referanseliste:** Fullstendig oversikt over alle brukte kilder bakerst i dokumentet
- **DOI:** Digital Object Identifier — en permanent lenke til vitenskapelige artikler

APA-stilen sikrer at leseren kan finne tilbake til alle kilder du har brukt, og at du gir opphavspersonene anerkjennelse for arbeidet deres.`,
    },
    {
      id: 'tof2-6-5-example-1',
      type: 'example',
      title: 'Eksempel: Referanseliste i APA-stil',
      problem: 'Sett opp en korrekt referanseliste i APA-stil for følgende tre kilder:\n\n1. En bok av Kari Hansen utgitt av Cappelen Damm i 2022 med tittelen «Naturfagdidaktikk»\n2. En artikkel av Lars Berg og Tone Olsen i tidsskriftet «Nordisk fysikk» (volum 15, nummer 2, side 45–62, 2023) med tittelen «Simulering som læringsverktøy»\n3. En nettside fra NTNU publisert 10. januar 2024 med tittelen «Retningslinjer for kildebruk»',
      solution: `**Referanseliste:**

Berg, L. & Olsen, T. (2023). Simulering som læringsverktøy. *Nordisk fysikk*, *15*(2), 45–62.

Hansen, K. (2022). *Naturfagdidaktikk*. Cappelen Damm.

NTNU. (2024, 10. januar). Retningslinjer for kildebruk. https://www.ntnu.no/kildebruk

**Viktige detaljer:**
- Kildene er sortert **alfabetisk** etter etternavn (Berg → Hansen → NTNU)
- Boktitler er i *kursiv*, artikkelens tittel er i vanlig skrift, men tidsskriftnavnet er i *kursiv*
- For nettsiden oppgis organisasjonen som forfatter når det ikke finnes en navngitt person
- Innrykk brukes på andre og påfølgende linjer av hver referanse (hengende innrykk)`,
    },
    {
      id: 'tof2-6-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilken av følgende in-text citations er korrekt etter APA-stil (7. utgave) for en bok skrevet av tre forfattere?',
        options: [
          { id: 'a', text: '(Hansen, Berg & Olsen, 2023)', isCorrect: false },
          { id: 'b', text: '(Hansen et al., 2023)', isCorrect: true },
          { id: 'c', text: '(Hansen mfl., 2023)', isCorrect: false },
          { id: 'd', text: '(Hansen, K., Berg, L. & Olsen, T., 2023)', isCorrect: false },
        ],
        solution: 'Riktig svar er B. I APA 7. utgave brukes «et al.» allerede fra første gang det er tre eller flere forfattere. I APA 6. utgave ble alle forfattere listet opp første gang (inntil fem), men denne regelen ble endret i 7. utgave. Alternativ A følger den gamle 6. utgave-regelen. Alternativ C bruker den norske forkortelsen «mfl.» som ikke er standard APA. Alternativ D inkluderer initialer, som ikke brukes i in-text citations.',
      },
    },

    // --- BLOKK 3: Sitat og parafrasering ---
    {
      id: 'tof2-6-5-text-3',
      type: 'text',
      content: `### Direkte sitat og parafrasering

Det finnes to hovedmåter å bruke kilder i teksten din:

**Direkte sitat** er en ordrett gjengivelse av kildens tekst, markert med anførselstegn. Direkte sitat brukes når den opprinnelige formuleringen er spesielt presis, autorativ eller slående, og du ikke kan si det bedre selv.

Kort sitat (under 40 ord) plasseres i løpende tekst med anførselstegn:
Hansen (2023) påpeker at «forskningsspørsmålet er fundamentet hele studien bygges på, og et svakt fundament gir en svak bygning» (s. 34).

Langt sitat (40 ord eller mer) settes som et innrykket blokkitat uten anførselstegn.

**Parafrasering** er å gjengi kildens idé med egne ord og egen setningsstruktur. Parafrasering er den vanligste formen for kildebruk i akademisk skriving. Du skal *ikke* bare bytte ut enkeltord med synonymer — da er det fortsatt et sitat. En god parafrasering viser at du har **forstått** innholdet og kan uttrykke det på din egen måte.

| Aspekt | Direkte sitat | Parafrasering |
|--------|--------------|---------------|
| Ordlyd | Ordrett fra kilden | Egne ord og setningsstruktur |
| Markering | Anførselstegn | Ingen anførselstegn |
| Sidetall | Påkrevd i referansen | Anbefalt, men ikke påkrevd |
| Bruk | Når ordlyden er viktig | I de fleste tilfeller |
| Hyppighet | Sparsomt | Ofte |`,
    },
    {
      id: 'tof2-6-5-def-3',
      type: 'definition',
      title: 'Plagiat',
      content: `**Plagiat** er å fremstille andres arbeid, ideer eller formuleringer som sine egne uten å oppgi kilde. Plagiat regnes som akademisk juks og kan få alvorlige konsekvenser — fra strykkarakter til utestengelse.

Vanlige former for plagiat:
- **Direkte plagiat:** Kopiere tekst ordrett uten anførselstegn og kildehenvisning
- **Mosaikk-plagiat:** Sette sammen setninger fra ulike kilder uten å oppgi dem
- **Utilstrekkelig parafrasering:** Bytte ut noen ord med synonymer, men beholde kildens setningsstruktur
- **Selv-plagiat:** Gjenbruke eget tidligere innlevert arbeid uten å oppgi det

For å unngå plagiat: Referer alltid til kilden, bruk anførselstegn ved direkte sitat, og reformuler innholdet genuint når du parafraserer.`,
    },
    {
      id: 'tof2-6-5-example-2',
      type: 'example',
      title: 'Eksempel: Sitat vs. parafrasering',
      problem: 'Kildetekst fra Hansen (2023, s. 112): «Reliabilitet handler om hvor konsistente og stabile resultatene er over tid og på tvers av målinger. En studie med høy reliabilitet vil gi svært like resultater dersom den gjennomføres på nytt under samme betingelser.»\n\nVis hvordan du kan bruke denne kilden som (a) direkte sitat og (b) parafrasering.',
      solution: `**(a) Direkte sitat:**
Hansen (2023) definerer begrepet slik: «Reliabilitet handler om hvor konsistente og stabile resultatene er over tid og på tvers av målinger» (s. 112).

**(b) Parafrasering:**
Reliabilitet beskriver i hvilken grad en studie gir tilsvarende resultater dersom den gjentas under de samme forutsetningene — det er altså et mål på målingens konsistens og stabilitet (Hansen, 2023).

**Legg merke til forskjellen:**
- Sitatet gjengir ordlyden nøyaktig, med anførselstegn og sidetall
- Parafraseringen uttrykker den *samme ideen* med en helt annen setningsstruktur og ordvalg
- Begge oppgir kilde — kildehenvisning er påkrevd uansett om du siterer eller parafraserer`,
    },
    {
      id: 'tof2-6-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'En elev skriver følgende i sin rapport: «Validitet handler om i hvilken grad resultatene er gyldige og stabile over tid (Hansen, 2023).» Kildeteksten er: «Reliabilitet handler om hvor konsistente og stabile resultatene er over tid.» Hva er problemet?',
        options: [
          { id: 'a', text: 'Eleven har parafrasert korrekt', isCorrect: false },
          { id: 'b', text: 'Eleven har blandet sammen reliabilitet og validitet, og parafraseringen er utilstrekkelig', isCorrect: true },
          { id: 'c', text: 'Eleven mangler bare sidetall i referansen', isCorrect: false },
          { id: 'd', text: 'Eleven burde brukt direkte sitat i stedet', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Eleven har gjort to feil: (1) Blandet begrepene — kilden handler om *reliabilitet*, men eleven skriver *validitet*. Dette er en innholdsfeil som viser manglende forståelse. (2) Parafraseringen er utilstrekkelig — setningsstrukturen er nesten identisk med originalen, bare med noen ord byttet ut. En god parafrasering krever ny setningsstruktur og korrekt gjengivelse av innholdet.',
      },
    },

    // --- BLOKK 4: Oppbygging av akademisk tekst ---
    {
      id: 'tof2-6-5-text-4',
      type: 'text',
      content: `### Oppbygging av en akademisk tekst

En velskrevet akademisk tekst har en tydelig **rød tråd** — en logisk sammenheng mellom avsnittene som fører leseren fra innledning til konklusjon.

**Avsnittets oppbygning — TEKK-modellen:**
Hvert avsnitt bør følge denne strukturen:
- **T — Temasetning:** Første setning presenterer avsnittets hovedpoeng
- **E — Evidens:** Påstanden underbygges med referanser til forskning, data eller eksempler
- **K — Kommentar:** Du kommenterer, analyserer eller tolker evidensen
- **K — Kobling:** Siste setning kobler avsnittet til neste avsnitt eller tilbake til den overordnede problemstillingen

**Tekstbinding — ord og uttrykk som skaper sammenheng:**
- *Tillegg:* Videre, dessuten, i tillegg, for det andre
- *Motsetning:* Derimot, på den andre siden, til tross for dette, imidlertid
- *Årsak/virkning:* Følgelig, dermed, som en konsekvens av, dette skyldes
- *Eksempel:* For eksempel, dette illustreres av, et tilfelle er
- *Oppsummering:* Oppsummert, samlet sett, alt i alt, dette innebærer

**Vanlige feil i akademisk skriving:**
- Listeform i stedet for sammenhengende tekst
- For mange direkte sitater — teksten fremstår som en «sitatsamling»
- Manglende analyse — informasjonen presenteres uten kommentar eller tolkning
- Upresist språk og vage påstander uten kildebelegg`,
    },
    {
      id: 'tof2-6-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et akademisk avsnitt (ca. 100–150 ord) om sammenhengen mellom søvn og læringsevne. Avsnittet skal:\n\n(a) Begynne med en temasetning\n(b) Inneholde minst to (fiktive) kildereferanser i APA-stil\n(c) Inneholde minst én parafrasering\n(d) Avsluttes med en kobling til et mulig neste avsnitt\n\nMerk: Du kan finne på forfatternavn og årstall, men referansene skal ha korrekt APA-format.',
        hints: ['Temasetningen bør si noe om hovedfunnet (f.eks. «Forskning viser en tydelig sammenheng mellom søvnmengde og læringsevne»). Bruk tekstbindingsord for å skape flyt mellom setningene.'],
        solution: 'Eksempel på et godt akademisk avsnitt:\n\n«Forskning tyder på en sterk sammenheng mellom søvnmengde og kognitive funksjoner som er sentrale for læring. Ifølge Walker (2021) konsolideres ny kunnskap i hippocampus under dyp søvn, og søvnmangel reduserer denne konsolideringsprosessen med opptil 40 %. Tilsvarende fant Johansen og Lie (2022) at elever som sov mindre enn seks timer natten før en prøve, presterte signifikant dårligere enn elever med åtte timers søvn (p < 0,01). Dette tyder på at søvn ikke bare påvirker oppmerksomhet i klasserommet, men også langtidslagring av kunnskap. Gitt den utbredte søvnmangelen blant ungdom (Pallesen et al., 2023), er det relevant å undersøke hvilke tiltak skolen kan iverksette for å fremme gode søvnvaner.»\n\nAvsnittet inneholder temasetning (første setning), to parafraseringer med kildehenvisning, kommentar/tolkning og en avsluttende kobling til neste tema.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof2-6-5-summary',
      type: 'text',
      content: `### Oppsummering

Akademisk skriving er en egen sjanger med klare krav til presisjon, saklighet og kildebruk.

**Hovedpunkter:**
- Akademisk skriving kjennetegnes av presisjon, objektivitet, kildebelegg og logisk struktur
- **APA-stilen** (7. utgave) er standarden for kildehenvisning, med in-text citations og referanseliste
- **Direkte sitat** gjengir kildens ordlyd nøyaktig med anførselstegn og sidetall
- **Parafrasering** gjengir kildens idé med egne ord og egen setningsstruktur
- **Plagiat** er å fremstille andres arbeid som sitt eget — unngå dette med korrekt kildebruk
- **TEKK-modellen** (Temasetning, Evidens, Kommentar, Kobling) gir gode avsnitt
- Tekstbindingsord skaper flyt og sammenheng mellom avsnittene

God akademisk skriving er en ferdighet som utvikles gjennom øvelse. Jo flere akademiske tekster du leser og skriver, desto mer naturlig blir sjangeren.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof2-6-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Les følgende avsnitt og identifiser alle feilene:\n\n«Klimaendringer er et stort problem i dag. Mange forskere mener at temperaturen stiger. Ifølge en rapport kan havnivået stige med opptil en meter. CO₂-utslippene er for høye og vi må gjøre noe med det. Det er viktig å handle nå før det er for sent (IPCC).»\n\n(a) List opp minst fem konkrete feil eller mangler i forhold til akademisk skriving.\n(b) Skriv avsnittet om slik at det oppfyller kravene til akademisk skriving. Bruk (fiktive) APA-referanser.',
        hints: ['Se etter: upresist språk, manglende kildehenvisninger, ufullstendige referanser, subjektive utsagn, mangel på analyse/kommentar.'],
        solution: '**(a) Feil og mangler:**\n\n1. «Et stort problem» — upresist og subjektivt. Hva gjør det til et «stort» problem? Mangler presisering.\n2. «Mange forskere mener» — hvem? Mangler kildehenvisning. «Mener» er dessuten upresist — forskere «mener» ikke, de «viser» eller «dokumenterer».\n3. «Ifølge en rapport» — hvilken rapport? Mangler forfatter, årstall og tittel.\n4. «Opptil en meter» — mangler kilde og tidshorisont (innen når?).\n5. «CO₂-utslippene er for høye» — normativt utsagn uten kildebelegg.\n6. «Vi må gjøre noe med det» — vagt og subjektivt. Hva bør gjøres? Av hvem?\n7. «(IPCC)» — ufullstendig referanse: mangler årstall.\n8. Ingen tekstbinding mellom setningene — teksten er en opplisting uten rød tråd.\n\n**(b) Omskrevet avsnitt:**\n«Global oppvarming representerer en av de mest dokumenterte utfordringene i moderne tid. Ifølge FNs klimapanel (IPCC, 2023) har den globale middeltemperaturen steget med 1,1 °C siden førindustriell tid, og denne økningen er med over 95 % sannsynlighet forårsaket av menneskelige utslipp av klimagasser. En konsekvens av oppvarmingen er at havnivået kan stige med 0,3–1,0 meter innen 2100, avhengig av utslippsscenario (Oppenheimer et al., 2022). Denne havnivåstigningen kan true kystsamfunn globalt og krever tilpasningsstrategier på alle forvaltningsnivåer (Hallegatte et al., 2023). Det er derfor relevant å undersøke hvilke politiske og teknologiske tiltak som mest effektivt kan begrense utslippsveksten.»',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.6: Muntlig presentasjon
// ============================================================================

export const CHAPTER_TOF_2_6_6: TextbookChapter = {
  id: 'tof-2-6-6',
  courseId: 'tof-2',
  chapterNumber: '6.6',
  title: 'Muntlig presentasjon',
  description: 'Formidlingsteknikk, visualisering og vitenskapelig foredrag.',
  estimatedMinutes: 25,
  competenceGoals: [
    'presentere forskningsresultater muntlig',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-6-6-intro',
      type: 'text',
      content: `## Muntlig presentasjon

En forskningsartikkel kan nå tusenvis av lesere, men en god muntlig presentasjon kan begeistre, overbevise og skape endring på en måte som tekst alene sjelden klarer. **Muntlig formidling** er en sentral del av forskerens verktøykasse — konferansepresentasjoner, disputaser, folkemøter og undervisning er alle arenaer der forskningsresultater formidles muntlig.

I Teknologi og forskningslære 2 skal du presentere ditt eget forskningsprosjekt, og kvaliteten på presentasjonen teller. Det handler ikke bare om *hva* du sier, men om *hvordan* du sier det: struktur, kroppsspråk, visualisering og evnen til å tilpasse budskapet til publikum.

I dette kapittelet lærer du prinsipper for effektive vitenskapelige presentasjoner, hvordan du lager gode visuelle hjelpemidler, og hvordan du håndterer spørsmål fra publikum.`,
    },

    // --- BLOKK 1: Struktur og forberedelse ---
    {
      id: 'tof2-6-6-text-1',
      type: 'text',
      content: `### Struktur og forberedelse

En vitenskapelig presentasjon følger ofte den samme logiske strukturen som en forskningsartikkel, men tilpasset muntlig formidling:

**1. Åpning (ca. 10 % av tiden):**
Start med noe som fanger oppmerksomheten — et overraskende faktum, et relevant spørsmål eller et hverdagseksempel. Presenter deretter problemstillingen og hva du har undersøkt.

**2. Bakgrunn (ca. 15 % av tiden):**
Gi publikum den konteksten de trenger for å forstå studien. Hva vet vi fra før? Hvorfor er dette viktig? Unngå å gå for dypt inn i tidligere forskning — presenter bare det som er nødvendig.

**3. Metode (ca. 15 % av tiden):**
Forklar kort hvordan du gikk frem. Fokuser på hovedtrekkene i metoden — publikum trenger ikke alle detaljer, men de må forstå nok til å vurdere troverdigheten.

**4. Resultater (ca. 30 % av tiden):**
Dette er kjernen i presentasjonen. Presenter de viktigste funnene visuelt med figurer og diagrammer. Forklar hva figurene viser — aldri vis en figur uten å kommentere den.

**5. Diskusjon og konklusjon (ca. 20 % av tiden):**
Hva betyr resultatene? Hvordan forholder de seg til det du forventet? Hva er begrensningene? Avslutt med en tydelig konklusjon og eventuelt forslag til videre forskning.

**6. Spørsmål (ca. 10 % av tiden):**
Avsett tid til spørsmål fra publikum. Forbered deg på sannsynlige spørsmål på forhånd.`,
    },
    {
      id: 'tof2-6-6-def-1',
      type: 'definition',
      title: 'Vitenskapelig presentasjon',
      content: `En **vitenskapelig presentasjon** er en muntlig fremstilling av forskningsresultater, typisk med visuelle hjelpemidler (lysbilder, figurer, tabeller).

Kjennetegn:
- Følger en logisk struktur (ofte parallell med IMRaD)
- Tilpasset publikums faglige nivå
- Bruker visualiseringer for å forklare data
- Holder seg innenfor tidsrammen
- Inkluderer tid til spørsmål og diskusjon

Vanlige arenaer: konferanser, seminarer, disputaser, prosjektpresentasjoner i skolen, folkemøter og forskningsformidling i media.`,
    },
    {
      id: 'tof2-6-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Du har 15 minutter til en presentasjon av ditt forskningsprosjekt. Omtrent hvor mye tid bør du bruke på resultatdelen?',
        options: [
          { id: 'a', text: 'Ca. 2 minutter — resultatene kan publikum lese i rapporten', isCorrect: false },
          { id: 'b', text: 'Ca. 4–5 minutter — resultatene er den viktigste delen av presentasjonen', isCorrect: true },
          { id: 'c', text: 'Ca. 10 minutter — alt annet er bare innledning', isCorrect: false },
          { id: 'd', text: 'Ca. 1 minutt — det er metodebeskrivelsen som er viktigst', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Resultatdelen bør utgjøre ca. 30 % av presentasjonstiden, som gir 4–5 minutter av en 15-minutters presentasjon. Dette er den viktigste delen fordi det er her du viser hva du fant. Alternativ A gir for lite tid — du kan ikke forvente at publikum leser rapporten. Alternativ C tar for mye tid fra bakgrunn, metode og diskusjon. Alternativ D undervurderer resultatenes betydning.',
      },
    },

    // --- BLOKK 2: Lysbilder og visualisering ---
    {
      id: 'tof2-6-6-text-2',
      type: 'text',
      content: `### Lysbilder og visuell design

Lysbilder (slides) er det vanligste visuelle hjelpemiddelet i vitenskapelige presentasjoner. Gode lysbilder **støtter** det du sier — de skal ikke erstatte deg som formidler.

**Prinsipper for gode lysbilder:**

**Regel 1: Minimal tekst.** Lysbildet skal inneholde stikkord og nøkkeltall, ikke hele setninger. Publikum skal *lytte* til deg, ikke *lese* lysbildet. En tommelfingerregel er maks 6 linjer med maks 6 ord per linje.

**Regel 2: Store, tydelige figurer.** Figurer og diagrammer bør være store nok til å leses fra bakerste rad. Bruk tydelige aksetitler, forklaring (legend) og farger med god kontrast.

**Regel 3: Én idé per lysbilde.** Hvert lysbilde bør formidle ett hovedpoeng. Hvis du trenger å forklare to ting, bruk to lysbilder.

**Regel 4: Konsistent design.** Bruk samme skrifttype, fargepalett og layout gjennom hele presentasjonen. Unngå animasjoner og lydeffekter som ikke tilfører faglig innhold.

**Regel 5: Fortell med figurer, ikke tabeller.** Et stolpediagram er lettere å tolke raskt enn en tabell med tall. Bruk tabeller bare når eksakte tallverdier er viktige.

**Vanlige feil:**
- For mye tekst — lysbildet blir et «ordteppe» som ingen leser
- For mange lysbilder — tempoet blir for høyt
- Figurer uten forklaring — publikum vet ikke hva de ser på
- Dårlig kontrast — lys tekst på lys bakgrunn er uleselig`,
    },
    {
      id: 'tof2-6-6-example-1',
      type: 'example',
      title: 'Eksempel: Godt vs. dårlig lysbilde',
      problem: 'En elev skal presentere resultater fra en undersøkelse om skjermtid og søvnkvalitet. Vurder følgende to lysbildeforslag og forklar hvilket som er best og hvorfor.',
      solution: `**Lysbilde A (dårlig):**
Tittel: «Resultater fra spørreundersøkelsen om sammenhengen mellom skjermtid og søvnkvalitet blant VG2-elever ved Bergenskolen i perioden januar–mars 2024»
Tekst: «Vi fant at elever som brukte mer enn 3 timer på skjerm etter kl. 21:00 rapporterte dårligere søvnkvalitet (gjennomsnitt 3,2 på en skala fra 1 til 7) sammenlignet med elever som brukte mindre enn 1 time (gjennomsnitt 5,1 på en skala fra 1 til 7). Forskjellen var statistisk signifikant med en p-verdi på 0,002. Standardavviket var 1,3 i den høye gruppen og 0,9 i den lave gruppen.»

**Lysbilde B (godt):**
Tittel: «Høy skjermtid = dårligere søvnkvalitet»
Innhold: Et stolpediagram med to søyler — «< 1 time» (søvnkvalitet 5,1) og «> 3 timer» (søvnkvalitet 3,2) — med feilfelt og asterisk for p < 0,01.

**Vurdering:** Lysbilde B er klart bedre:
- Kort, informativ tittel som formidler hovedfunnet
- Figur i stedet for tekstblokk — lettere å tolke raskt
- Feilfelt viser spredning visuelt
- Asterisk markerer signifikans uten å kreve at publikum leser p-verdier
- Presentatøren forklarer detaljene muntlig

Lysbilde A inneholder all informasjonen, men som tekst er det uleselig fra bakre rad og konkurrerer med presentatørens tale.`,
    },
    {
      id: 'tof2-6-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-6-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er den viktigste grunnen til å bruke figurer fremfor tabeller på lysbilder i en muntlig presentasjon?',
        options: [
          { id: 'a', text: 'Figurer er penere å se på', isCorrect: false },
          { id: 'b', text: 'Figurer viser mønstre og trender raskere enn tabeller med tall', isCorrect: true },
          { id: 'c', text: 'Tabeller tar for stor plass på lysbildet', isCorrect: false },
          { id: 'd', text: 'Det er en regel i APA-stilen at tabeller ikke skal brukes i presentasjoner', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Den viktigste grunnen er at figurer kommuniserer mønstre, trender og forskjeller visuelt og umiddelbart. Publikum har bare noen sekunder per lysbilde, og et diagram kan tolkes på et øyeblikk, mens en tabell med tall krever tid til å lese og sammenligne. Alternativ A er overfladisk — estetikk er ikke hovedbegrunnelsen. Alternativ C er feil — tabeller kan gjøres kompakte. Alternativ D er oppdiktet — APA har ingen slik regel.',
      },
    },

    // --- BLOKK 3: Formidlingsteknikk og kroppsspråk ---
    {
      id: 'tof2-6-6-text-3',
      type: 'text',
      content: `### Formidlingsteknikk og kroppsspråk

Selv med perfekte lysbilder og solid faginnhold kan en presentasjon falle flat dersom formidlingen er dårlig. **Formidlingsteknikk** handler om *hvordan* du leverer budskapet.

**Stemmebruk:**
- **Tempo:** Snakk rolig og tydelig. Nervøsitet får oss til å snakke for fort. Bruk pauser bevisst — en pause etter et viktig poeng gir publikum tid til å fordøye informasjonen.
- **Volum:** Snakk høyt nok til at alle i rommet hører deg. Varier volumet for å markere viktige poenger.
- **Variasjon:** Monoton tale gjør publikum søvnig. Varier tonefall og betoning for å holde oppmerksomheten.

**Kroppsspråk:**
- **Øyekontakt:** Se på publikum, ikke på lysbildet eller notatene. Skann rommet og etabler kontakt med ulike deler av publikum.
- **Holdning:** Stå oppreist og vendt mot publikum. Unngå å stå med ryggen til salen.
- **Gester:** Bruk naturlige gester for å understreke poenger. Unngå repetitive bevegelser (f.eks. leke med pennen) som distraherer.
- **Bevegelse:** Du kan bevege deg litt for å skape dynamikk, men unngå å rusle hvileløst frem og tilbake.

**Håndtering av spørsmål:**
- Lytt til hele spørsmålet før du svarer
- Gjenta eller omformuler spørsmålet slik at alle i salen hører det
- Innrøm det dersom du ikke vet svaret: «Det er et godt spørsmål som jeg ikke har undersøkt, men det ville vært interessant å se nærmere på»
- Hold svarene korte og presise — ikke hold en ny mini-presentasjon`,
    },
    {
      id: 'tof2-6-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-6-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Under en presentasjon får du spørsmålet: «Har du kontrollert for konfunderende variabler?» Du er usikker på svaret. Hva er den beste responsen?',
        options: [
          { id: 'a', text: '«Ja, selvfølgelig» — og gå videre uten å utdype', isCorrect: false },
          { id: 'b', text: '«Det er et relevant spørsmål. Vi kontrollerte for kjønn og alder, men andre konfunderende variabler som sosioøkonomisk bakgrunn ble ikke inkludert i analysen. Det er en begrensning vi anerkjenner.»', isCorrect: true },
          { id: 'c', text: 'Ignorere spørsmålet og gå videre til neste lysbilde', isCorrect: false },
          { id: 'd', text: '«Hva mener du med konfunderende variabler?»', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Dette svaret viser akademisk modenhet: det anerkjenner spørsmålets relevans, svarer ærlig på hva som ble gjort, innrømmer en begrensning uten å bli defensiv, og viser at du har reflektert over studiens svakheter. Alternativ A er uærlig og overfladisk. Alternativ C er uhøflig og skader troverdigheten. Alternativ D avslører at du ikke forstår grunnleggende begreper — som presentatør bør du kjenne fagterminologien.',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof2-6-6-summary',
      type: 'text',
      content: `### Oppsummering

Muntlig presentasjon er en sentral formidlingskompetanse i forskning og teknologi.

**Hovedpunkter:**
- En vitenskapelig presentasjon følger en logisk struktur: åpning, bakgrunn, metode, resultater, diskusjon og spørsmål
- **Resultatdelen** er kjernen og bør få ca. 30 % av tiden
- Gode lysbilder har **minimal tekst**, **tydelige figurer** og **én idé per lysbilde**
- Figurer formidler data raskere enn tabeller i en muntlig kontekst
- **Formidlingsteknikk** inkluderer stemmebruk, kroppsspråk og øyekontakt
- Håndter spørsmål ærlig og profesjonelt — det er ok å innrømme begrensninger
- Øving er nøkkelen: presenter for medstudenter, ta imot tilbakemeldinger og juster

En god presentasjon forener faglig kvalitet med effektiv kommunikasjon — begge deler kan læres gjennom bevisst øvelse.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof2-6-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du skal holde en 10-minutters presentasjon av et forskningsprosjekt om effekten av bakgrunnsmusikk på konsentrasjon.\n\n(a) Lag en disposisjon for presentasjonen med tidsfordeling for hver del.\n(b) Beskriv innholdet på tre nøkkel-lysbilder: ett for metode, ett for hovedresultater og ett for konklusjon.\n(c) Forklar hvordan du vil åpne presentasjonen for å fange publikums oppmerksomhet.',
        hints: ['Bruk strukturen fra kapittelet: åpning (10 %), bakgrunn (15 %), metode (15 %), resultater (30 %), diskusjon/konklusjon (20 %), spørsmål (10 %). Lysbildene bør ha minimalt med tekst.'],
        solution: '**(a) Disposisjon med tidsfordeling (10 minutter):**\n\n1. Åpning — 1 minutt: Oppmerksomhetsfanger + problemstilling\n2. Bakgrunn — 1,5 minutter: Hva vet vi om musikk og konsentrasjon? Kort om tidligere forskning.\n3. Metode — 1,5 minutter: Design, deltakere, prosedyre, måleinstrument\n4. Resultater — 3 minutter: Hovedfunn med figurer\n5. Diskusjon og konklusjon — 2 minutter: Tolkning, begrensninger, konklusjon\n6. Spørsmål — 1 minutt\n\n**(b) Tre nøkkel-lysbilder:**\n\n*Metode-lysbilde:* Tittel: «Eksperimentelt design». Enkel figur som viser tre grupper (stille, rolig musikk, pop-musikk) med piler til felles konsentrasjonstest. Stikkord: n = 60, randomisert, d2-test.\n\n*Resultat-lysbilde:* Tittel: «Rolig musikk ga best konsentrasjon». Stolpediagram med tre søyler (stille: 78, rolig: 85, pop: 71) med feilfelt og asterisk for signifikante forskjeller.\n\n*Konklusjon-lysbilde:* Tittel: «Konklusjon». Tre kulepunkter: (1) Rolig musikk forbedret konsentrasjonen signifikant, (2) Pop-musikk ga ingen forbedring, (3) Videre forskning bør teste ulike musikksjangre.\n\n**(c) Åpning:**\n«Tenk tilbake til sist du plugget inn øreproppene for å jobbe — hjalp musikken deg å fokusere, eller ble den en distraksjon? De fleste av oss har en mening om dette, men hva sier forskningen? Det ville vi finne ut.» Denne åpningen skaper gjenkjennelse, stiller et spørsmål og skaper nysgjerrighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof2-6-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vurder følgende presentasjonsscenario:\n\nEn elev presenterer sitt forskningsprosjekt. Hun leser teksten fra lysbildene ord for ord, har 35 lysbilder på 10 minutter, snakker raskt og monotont, og viser en tabell med 50 datapunkter i liten skrift. Når hun får et spørsmål, sier hun: «Det står i rapporten min, du kan lese det der.»\n\n(a) Identifiser minst fem konkrete problemer med denne presentasjonen.\n(b) Gi et konkret forbedringsforslag for hvert problem.\n(c) Hvordan burde hun ha håndtert spørsmålet?',
        hints: ['Tenk på alle aspektene vi har dekket: struktur, lysbilder, stemmebruk, kroppsspråk og spørsmålshåndtering.'],
        solution: '**(a) og (b) — Problemer og forbedringsforslag:**\n\n1. **Leser fra lysbildene:** Indikerer at lysbildene har for mye tekst og at eleven ikke kan stoffet. *Forbedring:* Reduser teksten til stikkord og øv på å forklare med egne ord.\n\n2. **35 lysbilder på 10 minutter:** Ca. 17 sekunder per lysbilde er alt for raskt. Publikum rekker ikke å prosessere innholdet. *Forbedring:* Reduser til 10–12 lysbilder (ca. 1 minutt per lysbilde) og prioriter hovedpoengene.\n\n3. **Rask og monoton tale:** Gjør det vanskelig å følge med og viser nervøsitet. *Forbedring:* Øv med tidtaking, bruk bevisste pauser, varier tonefallet.\n\n4. **Tabell med 50 datapunkter i liten skrift:** Uleselig og uforståelig for publikum. *Forbedring:* Erstatt tabellen med et diagram (stolpe-, linje- eller punktdiagram) som viser hovedtrendene. Vis kun nøkkeltall.\n\n5. **Avvisende svar på spørsmål:** Uhøflig og uprofesjonelt. *Forbedring:* Se punkt (c).\n\n**(c) Bedre håndtering av spørsmålet:**\nHun burde svart: «Takk for spørsmålet. Kort oppsummert fant vi at … [gi et konsist svar]. Hvis du ønsker flere detaljer, kan du gjerne se i rapporten der dette er beskrevet i metodekapittelet.» Dette viser respekt for spørsmålsstilleren og vilje til å formidle, samtidig som hun kan henvise til rapporten for detaljer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.7: Poster og visuell formidling
// ============================================================================

export const CHAPTER_TOF_2_6_7: TextbookChapter = {
  id: 'tof-2-6-7',
  courseId: 'tof-2',
  chapterNumber: '6.7',
  title: 'Poster og visuell formidling',
  description: 'Vitenskapelig poster, infografikk og visuell kommunikasjon.',
  estimatedMinutes: 20,
  competenceGoals: [
    'lage vitenskapelig poster',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-6-7-intro',
      type: 'text',
      content: `## Poster og visuell formidling

Ved vitenskapelige konferanser vil du ofte se store korridorer fylt med **postere** — store plakater som oppsummerer et forskningsprosjekt visuelt. Posteren er en unik formidlingsform som kombinerer tekst, figurer og design på en måte som skal fange oppmerksomheten til forbipasserende og gi dem hovedfunnene på noen minutter.

Visuell formidling strekker seg også utover posteren: **infografikk**, animasjoner, interaktive visualiseringer og grafiske sammendrag (graphical abstracts) brukes i stadig større grad for å gjøre forskning tilgjengelig for et bredere publikum.

I dette kapittelet lærer du å designe en vitenskapelig poster, lage infografikk og bruke visuelle prinsipper for å formidle komplekse data på en forståelig måte.`,
    },

    // --- BLOKK 1: Den vitenskapelige posteren ---
    {
      id: 'tof2-6-7-text-1',
      type: 'text',
      content: `### Den vitenskapelige posteren

En vitenskapelig poster er en visuell oppsummering av et forskningsprosjekt, vanligvis i A0- eller A1-format (ca. 84 × 119 cm eller 59 × 84 cm). Posteren leses stående, ofte i en travel konferansehall, og må derfor kommunisere tydelig og raskt.

**Oppbygning av en poster:**

Posteren følger vanligvis IMRaD-strukturen, men i forkortet og visuell form:

| Seksjon | Innhold | Omfang |
|---------|---------|--------|
| Tittel | Kort, informativ tittel + forfatternavn og institusjonstilhørighet | 1–2 linjer, stor skrift |
| Introduksjon | Bakgrunn og problemstilling | 3–5 setninger |
| Metode | Kort beskrivelse av fremgangsmåte | 3–5 setninger eller flytdiagram |
| Resultater | Hovedfunn med figurer og diagrammer | 1–3 figurer med kort forklaring |
| Konklusjon | Hovedkonklusjoner og implikasjoner | 2–3 setninger |
| Referanser | Nøkkelkilder | 3–5 referanser |

**Leseretning:** Postere leses vanligvis i kolonner fra venstre til høyre, ovenfra og ned. Sørg for at leseretningen er intuitiv — nummerer seksjonene eller bruk visuell veiledning (piler, fargebokser) dersom layouten er uvanlig.

**Tommelfingerregel:** En god poster kan forstås på 3–5 minutter. Dersom leseren trenger mer enn 5 minutter, er det for mye tekst.`,
    },
    {
      id: 'tof2-6-7-def-1',
      type: 'definition',
      title: 'Vitenskapelig poster',
      content: `En **vitenskapelig poster** er en visuell fremstilling av et forskningsprosjekt på en stor plakat (typisk A0 eller A1). Posteren presenteres ved konferanser, skoleprosjekter og forskningsmesser.

Kjennetegn:
- Kombinerer tekst, figurer og design
- Følger en forkortet IMRaD-struktur
- Skal kunne leses og forstås på 3–5 minutter
- Forskeren står ved posteren for å svare på spørsmål (postersesjon)
- Figurene er hovedelementet — teksten er sekundær

Posteren er et **selvstendig formidlingsprodukt** — den skal gi mening uten at forskeren forklarer den muntlig.`,
    },
    {
      id: 'tof2-6-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-7-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste forskjellen mellom en vitenskapelig poster og en forskningsartikkel?',
        options: [
          { id: 'a', text: 'Posteren trenger ikke kildehenvisninger', isCorrect: false },
          { id: 'b', text: 'Posteren prioriterer visuell formidling og korthet fremfor detaljert tekst', isCorrect: true },
          { id: 'c', text: 'Posteren følger ikke IMRaD-strukturen', isCorrect: false },
          { id: 'd', text: 'Posteren inneholder bare resultater, ikke metode eller diskusjon', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Den grunnleggende forskjellen er at posteren er et visuelt medium som skal kommunisere hovedfunnene raskt og tydelig. Den bruker figurer, korte tekster og design for å formidle budskapet på 3–5 minutter, mens en artikkel kan ha detaljerte beskrivelser over mange sider. Alternativ A er feil — postere har kildehenvisninger, om enn færre. Alternativ C er feil — postere følger ofte en forkortet IMRaD-struktur. Alternativ D er feil — postere inkluderer alle deler, bare kortere.',
      },
    },

    // --- BLOKK 2: Designprinsipper ---
    {
      id: 'tof2-6-7-text-2',
      type: 'text',
      content: `### Designprinsipper for postere og infografikk

God visuell formidling bygger på noen grunnleggende designprinsipper som gjelder for både postere, infografikk og andre visuelle medier:

**1. Visuelt hierarki:**
Det viktigste elementet skal være mest fremtredende. Bruk størrelse, farge og plassering for å guide leserens øye:
- Tittelen er størst (skriftstørrelse ca. 72–96 pt)
- Overskrifter er mellomstore (36–48 pt)
- Brødtekst er minst (24–28 pt)
- Figurer er store og sentrale

**2. Luft (whitespace):**
Ikke fyll hele posteren med innhold. Luft mellom elementene gjør teksten lettere å lese og gir øyet hvilepunkter. En poster med 40 % «tomrom» ser profesjonell ut — en poster der alt er pakket tett, ser rotete ut.

**3. Fargebruk:**
- Bruk en begrenset fargepalett (3–4 farger)
- Velg farger med god kontrast mellom tekst og bakgrunn
- Bruk farge funksjonelt — for å markere seksjoner, fremheve nøkkelfunn eller kode kategorier i figurer
- Unngå rød-grønn-kombinasjoner (fargeblindhet)

**4. Konsistens:**
- Samme skrifttype gjennom hele posteren (maks to: én for overskrifter, én for brødtekst)
- Ensartet tekstjustering (venstrejustert er lettest å lese)
- Konsistent plassering av elementer i hver seksjon

**5. Figurkvalitet:**
- Bruk vektorgrafikkformat (SVG, PDF) for diagrammer — de skaleres uten pikseler
- Figurer skal ha tydelige aksetitler, enheter og forklaringer
- Fjern unødvendige elementer (grid-linjer, overflødige rammer)`,
    },
    {
      id: 'tof2-6-7-def-2',
      type: 'definition',
      title: 'Infografikk',
      content: `**Infografikk** er en visuell fremstilling av informasjon, data eller kunnskap som bruker grafikk, ikoner, diagrammer og minimal tekst for å kommunisere et budskap raskt og effektivt.

Typer infografikk:
- **Statistisk infografikk:** Presenterer talldata med diagrammer og visualiseringer
- **Prosessinfografikk:** Viser trinn i en prosess med piler og ikoner
- **Sammenligningsinfografikk:** Setter to eller flere alternativer opp mot hverandre visuelt
- **Geografisk infografikk:** Bruker kart for å vise romlige data
- **Tidslinje-infografikk:** Viser utvikling over tid

Infografikk brukes i populærvitenskapelig formidling, aviser, sosiale medier og undervisning for å gjøre forskning tilgjengelig for et bredt publikum.`,
    },
    {
      id: 'tof2-6-7-example-1',
      type: 'example',
      title: 'Eksempel: Vurdere en posterdesign',
      problem: 'En elev har laget en poster med følgende egenskaper:\n- Hvit tekst på lys gul bakgrunn\n- Fem ulike skrifttyper\n- Teksten fyller ca. 90 % av posteroverflaten\n- Resultatene vises som en stor tabell med 40 rader\n- Introduksjonen er 250 ord lang\n\nHvilke designprinsipper brytes, og hvordan bør posteren forbedres?',
      solution: `**Brudd på designprinsipper og forbedringsforslag:**

**1. Dårlig kontrast:** Hvit tekst på lys gul bakgrunn er vanskelig å lese. *Forbedring:* Bruk mørk tekst (svart eller mørk grå) på lys bakgrunn, eller hvit tekst på mørk bakgrunn. Test lesbarheten fra 1,5 meters avstand.

**2. For mange skrifttyper:** Fem skrifttyper gir et rotete og uprofesjonelt inntrykk. *Forbedring:* Bruk maks to skrifttyper — én sans-serif for overskrifter (f.eks. Helvetica) og én for brødtekst (f.eks. Calibri).

**3. For lite luft:** 90 % tekstdekning er alt for tett. Leseren vet ikke hvor øyet skal hvile. *Forbedring:* Reduser tekst til ca. 60 % dekning. Kutt ned hver seksjon til det aller viktigste. Legg til marginer og mellomrom.

**4. Tabell i stedet for figur:** 40 rader i en tabell er umulig å lese på en poster. *Forbedring:* Erstatt tabellen med et diagram (stolpe-, linje- eller punktdiagram) som viser hovedtrendene. Hvis detaljer er nødvendige, legg ved en QR-kode til fullstendig datasett.

**5. For lang introduksjon:** 250 ord er en hel halv side — for mye for en poster. *Forbedring:* Kutt introduksjonen til 50–80 ord. Presenter bare det nødvendige: kontekst (1–2 setninger) og problemstilling (1 setning).`,
    },
    {
      id: 'tof2-6-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-7-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvor stor andel av en vitenskapelig poster bør være «luft» (whitespace)?',
        options: [
          { id: 'a', text: 'Så lite som mulig — all plass bør brukes til innhold', isCorrect: false },
          { id: 'b', text: 'Ca. 10–15 %', isCorrect: false },
          { id: 'c', text: 'Ca. 30–40 %', isCorrect: true },
          { id: 'd', text: 'Ca. 60–70 %', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Ca. 30–40 % luft (whitespace) gir en poster som er luftig, lesbar og profesjonell. Luft mellom seksjoner, rundt figurer og i marginer guide leserens øye og hindrer at posteren fremstår som et uleselig «tekstvegg». Alternativ A gir en overlesset poster. Alternativ B er for lite luft. Alternativ D er for mye — da mangler det innhold.',
      },
    },

    // --- BLOKK 3: Grafisk sammendrag og populærvitenskapelig formidling ---
    {
      id: 'tof2-6-7-text-3',
      type: 'text',
      content: `### Grafisk sammendrag og populærvitenskapelig formidling

Stadig flere tidsskrifter krever et **grafisk sammendrag** (graphical abstract) ved innsending av artikler. Et grafisk sammendrag er en enkelt figur som oppsummerer hele studien visuelt — fra problemstilling til hovedfunn.

**Kjennetegn ved et godt grafisk sammendrag:**
- Én enkelt figur (vanligvis liggende format)
- Viser forskningsprosessen som et visuelt narrativ: «Vi startet her → gjorde dette → fant dette»
- Bruker enkle ikoner, symboler og farger
- Minimal tekst — noen stikkord eller korte labels
- Kan forstås uten å lese artikkelen

**Populærvitenskapelig formidling:**
Forskere har et ansvar for å formidle forskning til allmennheten. Populærvitenskapelig formidling innebærer å oversette fagspråk til dagligspråk, forenkle uten å forvri, og gjøre forskning relevant for folk flest.

Virkemidler i populærvitenskapelig formidling:
- **Analogier:** Sammenlign komplekse fenomener med noe kjent (f.eks. «DNA er som en oppskriftsbok for kroppen»)
- **Fortelling:** Bygg opp teksten som en historie med en begynnelse, en spenning og en løsning
- **Konkrete eksempler:** Erstatt abstrakte tall med levende eksempler («én million tonn CO₂ tilsvarer utslippene fra 200 000 biler i ett år»)
- **Visualisering:** Bruk infografikk, animasjoner eller illustrasjoner for å gjøre det abstrakte konkret`,
    },
    {
      id: 'tof2-6-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-7-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du har gjennomført et forskningsprosjekt om effekten av mikrosplast i drikkevann på cellevekst i laboratoriet.\n\n(a) Beskriv kort hva et grafisk sammendrag av denne studien bør inneholde (hvilke elementer og hvilken rekkefølge).\n(b) Forklar hvordan du ville formidlet hovedfunnet populærvitenskapelig til en avisleser — bruk analogi, konkret eksempel eller fortelling.',
        hints: ['Et grafisk sammendrag viser forskningsprosessen visuelt: fra problemstilling via metode til hovedfunn. For populærvitenskapelig formidling: tenk «hva betyr dette for folk flest?»'],
        solution: '**(a) Grafisk sammendrag:**\n\nElementer fra venstre til høyre:\n1. Ikon av vannglass med synlige mikroplastpartikler → representerer problemstillingen\n2. Pil mot et petriskål-ikon med celler → viser eksperimentet (celler eksponert for ulike konsentrasjoner)\n3. Tre petriskåler med ulik celletetthet (lav, middels, høy eksponering) → viser dose-respons\n4. Stolpediagram som viser cellevekst (%) ved ulike konsentrasjoner → hovedresultat\n5. Kort label: «Høye konsentrasjoner av mikroplast hemmet celleveksten med 35 %»\n\n**(b) Populærvitenskapelig formidling:**\n\n«Hvert år drikker vi i gjennomsnitt 50 000 mikroskopiske plastpartikler med drikkevannet — omtrent like mange som det er mennesker i en liten norsk by. Men gjør det oss syke? I et laboratorieeksperiment utsatte vi menneskeceller for de samme konsentrasjonene av mikroplast som finnes i vanlig springvann. Resultatet var overraskende: ved de høyeste konsentrasjonene vokste cellene 35 % saktere enn normalt. Det betyr ikke nødvendigvis at drikkevannet ditt er farlig — laboratorieceller er ikke det samme som en hel kropp — men det gir grunn til å forske videre.»\n\nVirkemidler brukt: konkret tall (50 000 partikler), analogi (en liten norsk by), forsiktighet med tolkningen (ikke overdriving), og forklaring av hva funnet betyr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof2-6-7-summary',
      type: 'text',
      content: `### Oppsummering

Visuell formidling er en stadig viktigere kompetanse i forskning og teknologi.

**Hovedpunkter:**
- En **vitenskapelig poster** oppsummerer et forskningsprosjekt visuelt i IMRaD-format, lesbar på 3–5 minutter
- Godt posterdesign bruker **visuelt hierarki**, **luft** (30–40 %), **begrenset fargepalett** og **konsistens**
- Figurer er hovedelementet på en poster — tabeller med mange tall fungerer dårlig visuelt
- **Infografikk** bruker grafikk, ikoner og minimal tekst for å kommunisere informasjon raskt
- **Grafiske sammendrag** oppsummerer hele studien i én figur
- **Populærvitenskapelig formidling** oversetter fagspråk til dagligspråk ved hjelp av analogier, fortellinger og konkrete eksempler

Visuell formidling er ikke utsmykning — det er et verktøy for å gjøre forskning tilgjengelig, forståelig og engasjerende.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof2-6-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-7-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du skal lage en vitenskapelig poster for et forskningsprosjekt om sammenhengen mellom fysisk aktivitet i friminuttene og elevers konsentrasjon i påfølgende undervisningstime.\n\n(a) Skriv en postertittel som er kort, informativ og fanger oppmerksomheten.\n(b) Beskriv layouten: hvilke seksjoner skal med, hvor plasseres de, og hvor mye plass (i prosent) bør hver seksjon få?\n(c) Beskriv én figur du ville inkludert i resultatdelen — hva viser den, og hva er aksene?\n(d) Skriv en konklusjonstekst for posteren (maks 3 setninger).',
        hints: ['En god postertittel formidler hovedfunnet. Layouten følger gjerne to eller tre kolonner med IMRaD-seksjoner. Resultatfiguren bør være det mest fremtredende visuelle elementet.'],
        solution: '**(a) Postertittel:**\n«Aktive friminutt, fokuserte elever: Fysisk aktivitet i friminuttene forbedrer konsentrasjonen i neste time»\n\n**(b) Layout (to kolonner):**\n\n*Toppen (full bredde, 10 %):* Tittel, forfatternavn, skoletilhørighet\n\n*Venstre kolonne (45 %):*\n- Introduksjon (10 %): Bakgrunn om konsentrasjon og fysisk aktivitet, problemstilling\n- Metode (15 %): Design, deltakere, prosedyre (gjerne som flytdiagram)\n\n*Høyre kolonne (45 %):*\n- Resultater (25 %): Hovedfigur + kort forklaring\n- Konklusjon (8 %): Hovedfunn og implikasjoner\n- Referanser (7 %): 3–5 nøkkelkilder\n\nLuft/whitespace: ca. 35 % av totalarealet\n\n**(c) Resultatfigur:**\nEt stolpediagram med to grupper: «Aktiv» (elever som var fysisk aktive i friminuttet) og «Inaktiv» (elever som satt stille). Y-aksen viser gjennomsnittlig konsentrasjonspoeng på d2-testen (0–100). X-aksen viser de to gruppene. Feilfelt viser standardavvik. Asterisk (*) markerer statistisk signifikant forskjell (p < 0,05). Aktiv-gruppen viser høyere gjennomsnitt enn inaktiv-gruppen.\n\n**(d) Konklusjonstekst:**\n«Elever som var fysisk aktive i friminuttet, viste signifikant bedre konsentrasjon i den påfølgende timen sammenlignet med elever som var inaktive (p = 0,01). Resultatene støtter anbefalinger om å legge til rette for bevegelse i friminuttene. Videre forskning bør undersøke langvarige effekter og hvilke aktivitetstyper som gir størst utbytte.»',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.8: Fagfellevurdering og publisering
// ============================================================================

export const CHAPTER_TOF_2_6_8: TextbookChapter = {
  id: 'tof-2-6-8',
  courseId: 'tof-2',
  chapterNumber: '6.8',
  title: 'Fagfellevurdering og publisering',
  description: 'Fagfellevurdering, preprint, open access og vitenskapelig kvalitetssikring.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forstå vitenskapelig publisering',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-6-8-intro',
      type: 'text',
      content: `## Fagfellevurdering og publisering

Hva gjør vitenskapelig kunnskap mer pålitelig enn en bloggpost, et innlegg på sosiale medier eller en avisartikkel? Svaret er **fagfellevurdering** (peer review) — prosessen der andre eksperter vurderer og kvalitetssikrer forskning før den publiseres.

Fagfellevurdering er selve grunnsteinen i det vitenskapelige kvalitetssystemet. Den sikrer at metoder er forsvarlige, at konklusjoner er rimelige, og at resultatene tåler kritisk granskning. Uten fagfellevurdering ville vitenskapelig publisering ikke vært annet enn selvpublisering.

I dette kapittelet lærer du hvordan fagfellevurdering fungerer, hva som skjer når en forsker sender inn en artikkel til et tidsskrift, hva preprint og open access er, og hvordan du selv kan utøve fagfellevurdering i skolekonteksten. Å forstå publiseringsprosessen gjør deg til en bedre kritisk leser av forskning.`,
    },

    // --- BLOKK 1: Fagfellevurderingsprosessen ---
    {
      id: 'tof2-6-8-text-1',
      type: 'text',
      content: `### Fagfellevurderingsprosessen

Når en forsker har skrevet en forskningsartikkel, sendes den til et **vitenskapelig tidsskrift** for vurdering. Prosessen fra innsending til publisering følger vanligvis disse stegene:

**1. Innsending:** Forskeren sender manuskriptet til et tidsskrift som er relevant for fagfeltet. Artikkelen formateres etter tidsskriftets retningslinjer.

**2. Redaksjonell vurdering:** Tidsskriftets redaktør leser artikkelen og vurderer om den er relevant og holder tilstrekkelig kvalitet. Mange artikler avvises allerede her (desk rejection) — ofte fordi temaet ikke passer tidsskriftet eller kvaliteten er for lav.

**3. Fagfellevurdering:** Redaktøren sender artikkelen til 2–3 uavhengige eksperter (fagfeller/reviewers) som er anonyme for forfatteren. Fagfellene vurderer:
- Er forskningsspørsmålet relevant og originalt?
- Er metoden forsvarlig og tilstrekkelig beskrevet?
- Støtter dataene konklusjonene?
- Er artikkelen godt skrevet og logisk oppbygd?
- Er referansene relevante og oppdaterte?

**4. Tilbakemelding:** Fagfellene sender sine vurderinger til redaktøren, som videresender dem til forfatteren med en beslutning:
- *Akseptert (accept):* Sjeldent ved første innsending
- *Akseptert med mindre endringer (minor revisions):* Små justeringer kreves
- *Større endringer kreves (major revisions):* Vesentlige endringer, ofte ny analyse eller tilleggsdata
- *Avvist (reject):* Artikkelen publiseres ikke i dette tidsskriftet

**5. Revisjon og ny vurdering:** Forfatteren reviderer artikkelen basert på tilbakemeldingene og sender inn en ny versjon med et svar på hver kommentar fra fagfellene.

**6. Publisering:** Når redaktøren er tilfreds, aksepteres artikkelen og publiseres — enten i trykt form, digitalt eller begge deler.

Hele prosessen tar typisk **3–12 måneder**, noe som er en av de mest kritiserte sidene ved systemet.`,
    },
    {
      id: 'tof2-6-8-def-1',
      type: 'definition',
      title: 'Fagfellevurdering (peer review)',
      content: `**Fagfellevurdering** (peer review) er prosessen der en vitenskapelig artikkel vurderes av uavhengige eksperter (fagfeller) innenfor samme fagfelt før den publiseres i et tidsskrift.

Typer fagfellevurdering:
- **Enkelblind (single-blind):** Fagfellene er anonyme, men kjenner forfatterens identitet (vanligst)
- **Dobbeltblind (double-blind):** Både fagfeller og forfattere er anonyme for hverandre
- **Åpen (open review):** Begge parters identitet er kjent, og vurderingene publiseres offentlig

Fagfellevurdering er ikke perfekt — den kan være treg, subjektiv og oppdager ikke alltid feil — men den er det beste kvalitetssikringssystemet vitenskapen har.`,
    },
    {
      id: 'tof2-6-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-8-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste funksjonen til fagfellevurdering i vitenskapelig publisering?',
        options: [
          { id: 'a', text: 'Å sikre at artikkelen er godt skrevet og har korrekt grammatikk', isCorrect: false },
          { id: 'b', text: 'Å kvalitetssikre forskningen ved at uavhengige eksperter vurderer metode, resultater og konklusjoner', isCorrect: true },
          { id: 'c', text: 'Å forhindre at for mange artikler publiseres i samme tidsskrift', isCorrect: false },
          { id: 'd', text: 'Å gjøre forskningen mer populærvitenskapelig tilgjengelig', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Fagfellevurderingens hovedfunksjon er kvalitetssikring: uavhengige eksperter vurderer om metoden er forsvarlig, om dataene støtter konklusjonene, og om studien bidrar med ny kunnskap til fagfeltet. Alternativ A er sekundært — språkvask er en bonus, men ikke hovedformålet. Alternativ C handler om publiseringskapasitet, ikke kvalitet. Alternativ D er feil — fagfellevurdering er intern kvalitetskontroll, ikke populærvitenskapelig formidling.',
      },
    },

    // --- BLOKK 2: Preprint og open access ---
    {
      id: 'tof2-6-8-text-2',
      type: 'text',
      content: `### Preprint og open access

Det tradisjonelle publiseringssystemet har blitt utfordret av to viktige utviklinger: **preprint** og **open access**.

**Preprint:**
Et preprint er en versjon av en forskningsartikkel som publiseres **før** den har gjennomgått fagfellevurdering. Preprintet legges ut på åpne servere som:
- **arXiv** (fysikk, matematikk, informatikk)
- **bioRxiv** (biologi)
- **medRxiv** (medisin)
- **SSRN** (samfunnsvitenskap)

Fordeler med preprint:
- Rask deling av resultater (timer/dager i stedet for måneder/år)
- Åpen tilgang for alle — gratis å lese
- Mulighet for tilbakemeldinger fra hele forskersamfunnet, ikke bare 2–3 fagfeller
- Tidsstempel som dokumenterer hvem som var først

Ulemper:
- Ikke kvalitetssikret gjennom fagfellevurdering
- Kan inneholde feil som ville blitt fanget opp i review-prosessen
- Kan bli formidlet i media som «ferdig forskning» selv om den ikke er kvalitetssikret

Under koronapandemien ble preprints spesielt viktige for å dele forskning raskt, men det førte også til at uferdige og til dels feilaktige studier fikk stor medieoppmerksomhet.

**Open access (åpen tilgang):**
Open access betyr at vitenskapelige artikler er fritt tilgjengelige for alle på internett — uten betalingsmur.

Det finnes to hovedtyper:
- **Gull open access:** Artikkelen publiseres åpent i tidsskriftet. Forfatteren (eller institusjonen) betaler en publiseringsavgift (APC, typisk 10 000–50 000 kr).
- **Grønn open access:** Artikkelen publiseres i et tradisjonelt tidsskrift, men forfatteren legger også ut en versjon i et åpent arkiv (f.eks. universitetets forskningsarkiv).

Open access er viktig fordi det sikrer at forskning — som ofte er finansiert av offentlige midler — er tilgjengelig for alle, ikke bare for de som har tilgang gjennom universitetsbiblioteker.`,
    },
    {
      id: 'tof2-6-8-def-2',
      type: 'definition',
      title: 'Open access',
      content: `**Open access** (åpen tilgang) er en publiseringsmodell der vitenskapelige artikler gjøres fritt tilgjengelige for alle lesere uten abonnementsavgift.

Hovedtyper:
- **Gull open access:** Publisert åpent fra starten, forfatteren betaler publiseringsavgift
- **Grønn open access:** Forfatterens versjon legges i et åpent arkiv parallelt med tidsskriftets betalversjon
- **Diamant/platina open access:** Åpent for lesere uten at forfatteren betaler — finansiert av institusjoner eller organisasjoner

Argumenter for open access:
- Offentlig finansiert forskning bør være offentlig tilgjengelig
- Forskere i lavinntektsland får tilgang til forskning de ellers ikke har råd til
- Forskningen når et bredere publikum, inkludert allmennheten og beslutningstakere`,
    },
    {
      id: 'tof2-6-8-example-1',
      type: 'example',
      title: 'Eksempel: Preprint under koronapandemien',
      problem: 'I mars 2020 ble det lagt ut et preprint som hevdet å ha funnet en effektiv behandling mot covid-19. Studien ble delt tusenvis av ganger på sosiale medier og sitert av politikere. Da studien senere ble fagfellevurdert, ble den avvist fordi den hadde alvorlige metodefeil. Analyser dette scenarioet med tanke på fordeler og ulemper med preprints.',
      solution: `**Fordeler demonstrert:**
- Forskningen ble delt raskt — i en pandemi der dager teller, er rask informasjonsdeling potensielt livreddende
- Alle forskere hadde tilgang til å vurdere studien, ikke bare de 2–3 utvalgte fagfellene
- Metodefeilene ble til slutt avdekket — systemet fungerte, om enn forsinket

**Ulemper demonstrert:**
- Studien ble behandlet som «ferdig forskning» av medier og politikere, selv om den ikke var kvalitetssikret
- Feilaktige konklusjoner kan ha påvirket helsebeslutninger og politikk
- Allmennheten skiller ikke alltid mellom et preprint og en fagfellevurdert artikkel

**Analyse:**
Dette eksempelet viser spenningen i preprintsystemet: rask deling er verdifullt, men bare dersom mottakerne forstår at et preprint er en *foreløpig* rapport som ikke er kvalitetssikret. Løsningen er ikke å fjerne preprints, men å styrke medienes og allmennhetens forståelse av hva et preprint er. Preprint-servere har etter pandemien innført tydeligere merking: «Denne artikkelen har ikke gjennomgått fagfellevurdering.»`,
    },
    {
      id: 'tof2-6-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-8-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er hovedforskjellen mellom et preprint og en fagfellevurdert artikkel?',
        options: [
          { id: 'a', text: 'Preprints er kortere enn fagfellevurderte artikler', isCorrect: false },
          { id: 'b', text: 'Preprints har ikke gjennomgått uavhengig kvalitetsvurdering av eksperter', isCorrect: true },
          { id: 'c', text: 'Preprints publiseres bare innen medisin', isCorrect: false },
          { id: 'd', text: 'Preprints er ikke tilgjengelige for offentligheten', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Den avgjørende forskjellen er at et preprint publiseres *før* fagfellevurdering og derfor ikke har gjennomgått uavhengig kvalitetskontroll. Artikkelen kan inneholde feil i metode, analyse eller tolkning som fagfeller ville ha fanget opp. Alternativ A er feil — preprintets lengde er den samme som en ferdig artikkel. Alternativ C er feil — preprints finnes i alle fagfelt. Alternativ D er feil — preprints er nettopp *åpent* tilgjengelige.',
      },
    },

    // --- BLOKK 3: Fagfellevurdering i skolekonteksten ---
    {
      id: 'tof2-6-8-text-3',
      type: 'text',
      content: `### Fagfellevurdering i skolekonteksten

Du trenger ikke vente til du er forsker for å praktisere fagfellevurdering. I skolen kan du bruke prinsippene fra fagfellevurdering når du gir og mottar tilbakemeldinger på medelevers arbeid.

**Hvordan gi en god fagfellevurdering (medelev-vurdering):**

**1. Vær konstruktiv:** Formålet er å forbedre arbeidet, ikke å kritisere personen. Start med å anerkjenne det som er bra, deretter pek på forbedringspunkter med konkrete forslag.

**2. Vær spesifikk:** «Denne delen er uklar» er lite nyttig. «Metoden beskriver ikke hvordan deltakerne ble rekruttert — dette bør legges til for at leseren skal kunne vurdere utvalgets representativitet» er konkret og handlingsrettet.

**3. Still spørsmål:** Gode fagfeller stiller spørsmål som hjelper forfatteren å tenke dypere: «Hvordan ville resultatene endret seg med et større utvalg?» «Har du vurdert alternative forklaringer på dette funnet?»

**4. Strukturer tilbakemeldingen:** Organiser kommentarene etter seksjon (introduksjon, metode, resultater, diskusjon) og nummerer dem. Da er det lett for forfatteren å svare systematisk.

**5. Skil mellom store og små problemer:** Store problemer (feil i metode, konklusjoner som ikke støttes av data) bør prioriteres over små problemer (skrivefeil, formateringsfeil).

**Hvordan motta tilbakemelding:**
- Les kommentarene med åpent sinn — fagfellen prøver å hjelpe, ikke å dømme
- Svar på alle kommentarer, enten ved å gjøre endringen eller ved å forklare hvorfor du ikke gjør det
- Se tilbakemeldingen som en mulighet til å forbedre arbeidet, ikke som kritikk av deg som person`,
    },
    {
      id: 'tof2-6-8-def-3',
      type: 'definition',
      title: 'Rovtidsskrift (predatory journals)',
      content: `**Rovtidsskrifter** (predatory journals) er useriøse tidsskrifter som utgir seg for å drive fagfellevurdering, men som i realiteten publiserer alt mot betaling — uten reell kvalitetskontroll.

Kjennetegn:
- Sender uoppfordrede e-poster til forskere med oppfordring om å sende inn artikler
- Lover svært rask fagfellevurdering (dager i stedet for måneder)
- Krever høye publiseringsavgifter
- Har vage eller manglende retningslinjer for fagfellevurdering
- Ofte dårlig nettside med skrivefeil og manglende kontaktinformasjon
- Redaktøren og redaksjonsrådet er ukjente eller har lav faglig kompetanse

Rovtidsskrifter undergraver tilliten til vitenskapelig forskning og er et økende problem. For å unngå dem: sjekk tidsskriftet i **NSD kanalregister** (i Norge) eller **DOAJ** (Directory of Open Access Journals).`,
    },
    {
      id: 'tof2-6-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-8-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvilket av følgende er et typisk kjennetegn på et rovtidsskrift?',
        options: [
          { id: 'a', text: 'Tidsskriftet har lang fagfellevurderingsprosess (6–12 måneder)', isCorrect: false },
          { id: 'b', text: 'Tidsskriftet sender uoppfordrede e-poster med oppfordring om å sende inn artikler og lover publisering på noen dager', isCorrect: true },
          { id: 'c', text: 'Tidsskriftet krever at artikkelen omskrives etter fagfelletilbakemelding', isCorrect: false },
          { id: 'd', text: 'Tidsskriftet avviser flertallet av innsendte artikler', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Rovtidsskrifter kjennetegnes blant annet ved at de sender uoppfordrede e-poster (spam) til forskere og lover ekstremt rask publisering — noe som indikerer at det ikke skjer noen reell fagfellevurdering. Alternativ A er kjennetegn på seriøse tidsskrifter (grundig vurdering tar tid). Alternativ C er normalt i en seriøs fagfellevurderingsprosess. Alternativ D er vanlig for prestisjetidsskrifter med høy avvisningsrate — et tegn på kvalitet, ikke useriøsitet.',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof2-6-8-summary',
      type: 'text',
      content: `### Oppsummering

Fagfellevurdering og publisering utgjør kjernen i vitenskapens kvalitetssikringssystem.

**Hovedpunkter:**
- **Fagfellevurdering** (peer review) er prosessen der uavhengige eksperter vurderer en artikkel før publisering — den viktigste kvalitetskontrollen i vitenskap
- Prosessen går fra innsending via redaksjonell vurdering og fagfelletilbakemelding til revisjon og eventuell publisering
- **Preprints** deler forskning raskt og åpent, men uten fagfellevurdering — de er foreløpige rapporter
- **Open access** gjør forskning fritt tilgjengelig — viktig for demokratisering av kunnskap
- **Rovtidsskrifter** utgir seg for seriøse tidsskrifter, men publiserer uten reell kvalitetskontroll
- Fagfellevurderingsprinsipper kan brukes i skolekonteksten: vær konstruktiv, spesifikk og strukturert

Å forstå publiseringsprosessen gjør deg til en mer kritisk leser av forskning — du kan vurdere om en kilde er fagfellevurdert, publisert i et seriøst tidsskrift, eller om den er et preprint som ennå ikke er kvalitetssikret.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof2-6-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-8-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En medelev ber deg om fagfellevurdering av forskningsrapporten sin. Rapporten handler om effekten av klasseromstemperatur på testresultater. Her er et utdrag fra metodedelen:\n\n«Vi testet elevene i to klasserom — ett varmt og ett kaldt. De 15 elevene i det varme klasserommet fikk en matteprøve og de 15 i det kalde fikk en norskprøve. Det varme rommet hadde 25 grader og det kalde 18 grader. Vi fant at elevene i det kalde rommet presterte bedre.»\n\n(a) Identifiser minst tre metodefeil eller svakheter.\n(b) Skriv en konstruktiv fagfelletilbakemelding med konkrete forbedringsforslag for hver feil.',
        hints: ['Tenk på hva som gjør en god eksperimentell studie: kontroll av variabler, sammenlignbarhet, randomisering, operasjonalisering. Hva er det som gjør at vi IKKE kan konkludere at temperatur var årsaken?'],
        solution: '**(a) Metodefeil:**\n\n1. **Ulik test i de to gruppene:** Det varme rommet fikk matteprøve, det kalde fikk norskprøve. Da kan forskjellen i resultater skyldes testtypen, ikke temperaturen. Gruppene må gjøre den *samme* testen for å kunne sammenlignes.\n\n2. **Ingen randomisering:** Det beskrives ikke hvordan elevene ble fordelt på rommene. Hvis fordeling ikke var tilfeldig, kan gruppene være systematisk forskjellige (f.eks. forskjellig faglig nivå).\n\n3. **Konfunderende variabler:** De to rommene kan ha forskjeller utover temperatur — lysforhold, støynivå, møblering. Bare temperaturen kontrolleres.\n\n4. **Manglende operasjonalisering av «presterte bedre»:** Hva betyr «bedre»? Høyere gjennomsnittscore? Signifikant forskjell? Uten statistisk test er konklusjonen ugyldig.\n\n5. **Lite utvalg:** 15 elever per gruppe er lite og gir lav statistisk styrke.\n\n**(b) Fagfelletilbakemelding:**\n\n«Takk for muligheten til å lese rapporten. Studien tar opp et interessant og praktisk relevant spørsmål. Jeg har noen forslag som kan styrke metoden vesentlig:\n\n1. *Samme test i begge grupper:* For å kunne sammenligne må begge gruppene ta den samme prøven (f.eks. matteprøve). Ellers vet vi ikke om forskjellen skyldes temperatur eller testtype.\n\n2. *Tilfeldig fordeling:* Beskriv hvordan elevene ble fordelt på rommene. Ideelt sett bør fordelingen være tilfeldig (randomisert) for å unngå systematiske forskjeller mellom gruppene.\n\n3. *Kontroll for andre variabler:* Beskriv om rommene var like utover temperaturen. Lysforhold, støy og tidspunkt på dagen kan alle påvirke prestasjon.\n\n4. *Statistisk analyse:* Konklusjonen bør støttes av en statistisk test (f.eks. t-test) som viser om forskjellen er signifikant. Oppgi gjennomsnitt og standardavvik for begge grupper.»',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof2-6-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof2-6-8-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En journalist skriver følgende i en nettavis:\n\n«Ny forskning viser at vitamin D kurerer depresjon. Studien, publisert som preprint på medRxiv, fant at pasienter som tok høye doser vitamin D ble friske på fire uker. Forskerne bak studien sier at alle med depresjon bør begynne med kosttilskudd umiddelbart.»\n\n(a) Identifiser minst fire problemer med denne fremstillingen, basert på det du har lært om fagfellevurdering og vitenskapelig publisering.\n(b) Skriv om artikkelen slik at den gir en mer korrekt fremstilling av forskningssituasjonen.\n(c) Hva bør en kritisk leser se etter for å vurdere troverdigheten av slike nyhetsoppslag?',
        hints: ['Tenk på: preprint vs. fagfellevurdert, kausalitet vs. korrelasjon, generalisering, forskjellen mellom forskerens ordbruk og journalistens fremstilling.'],
        solution: '**(a) Problemer:**\n\n1. **Preprint — ikke fagfellevurdert:** Studien er publisert som preprint og har derfor ikke gjennomgått uavhengig kvalitetskontroll. Journalisten omtaler den som «ny forskning» uten å nevne denne avgjørende begrensningen.\n\n2. **«Kurerer» — kausalitet uten grunnlag:** Ordet «kurerer» impliserer en sikker årsakssammenheng. Uten å vite om studien hadde kontrollgruppe, randomisering og blinding, kan vi ikke trekke slike konklusjoner. Forbedring kunne ha vært «assosiert med bedring» eller «kan muligens bidra til».\n\n3. **Generalisering — «alle med depresjon»:** Én studie (særlig en som ikke er fagfellevurdert) er ikke grunnlag for å anbefale behandling til alle. Studien kan ha begrenset utvalg, spesifikke inklusjonskriterier eller andre begrensninger som gjør generalisering uriktig.\n\n4. **Interessekonflikter unevnt:** Hvem finansierte studien? Har forskerne tilknytning til kosttilskuddsindustrien? Journalisten opplyser ikke om dette.\n\n5. **Ukritisk videreformidling av forskernes påstander:** «Bør begynne umiddelbart» er en terapeutisk anbefaling som krever klinisk evidens av høy kvalitet, ikke én ukontrollert studie.\n\n**(b) Omskrevet artikkel:**\n«En foreløpig studie, publisert som preprint på medRxiv og ennå ikke fagfellevurdert, antyder at høye doser vitamin D kan være assosiert med bedring av depresjonssymptomer hos en gruppe pasienter over fire uker. Studien inkluderte [antall] deltakere, og det er foreløpig uklart om funnene skyldes vitamintilskuddet eller andre faktorer. Forskerne understreker at resultatene er foreløpige og at det trengs større, kontrollerte studier før man kan trekke kliniske konklusjoner. Eksperter som ikke er involvert i studien påpeker at enkeltpersoner bør rådføre seg med lege før de endrer medisinering eller starter med høye doser kosttilskudd.»\n\n**(c) Hva en kritisk leser bør se etter:**\n- Er studien fagfellevurdert eller er det et preprint?\n- Var det en kontrollgruppe? Randomisering? Blinding?\n- Hvor mange deltakere var med (utvalgsstørrelse)?\n- Hvem finansierte studien, og har forskerne interessekonflikter?\n- Brukes ord som «kurerer» eller «beviser» — som er sterkere enn forskningen egentlig støtter?\n- Er andre eksperter sitert for å gi et nyansert bilde?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport alle kapitler i Seksjon 6
// ============================================================================

export const TOF_2_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TOF_2_6_1,
  CHAPTER_TOF_2_6_2,
  CHAPTER_TOF_2_6_3,
  CHAPTER_TOF_2_6_4,
  CHAPTER_TOF_2_6_5,
  CHAPTER_TOF_2_6_6,
  CHAPTER_TOF_2_6_7,
  CHAPTER_TOF_2_6_8,
];
