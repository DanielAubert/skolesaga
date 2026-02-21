/* eslint-disable */
// @ts-nocheck
/**
 * Informasjonsteknologi og medieproduksjon VG1 - Del 8: Prosjektarbeid, bærekraft og yrke
 *
 * Kapittel 8.1-8.8: Prosjektarbeid, bærekraft og yrke
 * Dekker LK20 kompetansemål for prosjektmetodikk, samarbeid, konseptutvikling, dramaturgi,
 * databaser, bærekraft, HMS og yrkesmuligheter
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 8.1: Prosjektmetodikk og planlegging
// ============================================================================

export const CHAPTER_IM_VG1_8_1: TextbookChapter = {
  id: 'im-vg1-8-1',
  courseId: 'im-vg1',
  chapterNumber: '8.1',
  title: 'Prosjektmetodikk og planlegging',
  description: 'Lær ulike prosjektmetodikker som fossefall og agile metoder, og utvikle ferdigheter i planlegging og oppfølging.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke dokumentasjon og dokumentere faglige prosesser',
  ],
  content: [
    {
      id: 'im-8-1-intro',
      type: 'text',
      content: `## Prosjektmetodikk og planlegging

Uansett om du lager en nettside, produserer en video eller utvikler en app, trenger du en plan. Prosjektmetodikk gir deg verktøy og rammeverk for å gjennomføre prosjekter strukturert, effektivt og med forutsigbart resultat. Å velge riktig metode kan bety forskjellen mellom suksess og kaos.

I dette kapittelet skal du lære:
- Fossefallsmetoden og dens faser
- Agile metoder og Scrum
- Kanban-tavle for oppgavestyring
- Gantt-diagram og milepæler
- Hvordan lage en god prosjektplan`,
    },
    {
      id: 'im-8-1-def-1',
      type: 'definition',
      title: 'Prosjektmetodikk',
      content: `**Prosjektmetodikk** er et strukturert rammeverk for å planlegge, gjennomføre og avslutte prosjekter. Den definerer faser, roller, verktøy og prosesser som sikrer at prosjektet leverer ønsket resultat innenfor tid og budsjett.`,
    },
    {
      id: 'im-8-1-text-1',
      type: 'text',
      content: `### Fossefallsmetoden

Fossefallsmetoden er en lineær, sekvensiell tilnærming der hver fase må fullføres før neste begynner, som vann som faller nedover en foss.

**Fasene:**
1. **Kravspesifikasjon**: Definer hva som skal lages og hvilke krav det skal oppfylle.
2. **Design**: Planlegg løsningen basert på kravene.
3. **Implementering**: Bygg løsningen.
4. **Testing**: Sjekk at alt fungerer som spesifisert.
5. **Lansering**: Sett løsningen i produksjon.
6. **Vedlikehold**: Fiks feil og gjør forbedringer.

**Fordeler:**
- Tydelig struktur med klare milepæler
- God dokumentasjon
- Forutsigbart tidsforløp

**Ulemper:**
- Vanskelig å endre kurs underveis
- Problemer oppdages sent (i testfasen)
- Brukerne ser resultatet først helt til slutt`,
    },
    {
      id: 'im-8-1-text-2',
      type: 'text',
      content: `### Agile metoder og Scrum

**Agile** (smidig) utvikling er en tilnærming der man jobber i korte iterasjoner og tilpasser seg underveis. I stedet for å planlegge alt på forhånd, leverer man små deler av produktet regelmessig.

**Scrum** er det mest brukte agile rammeverket:

**Roller:**
- **Produkteier**: Definerer hva som skal lages og prioriterer oppgaver
- **Scrum master**: Fjerner hindringer og sørger for at teamet følger Scrum
- **Utviklingsteam**: Bygger produktet

**Seremonier:**
- **Sprint**: En tidsperiode (vanligvis 2 uker) der teamet jobber med et sett oppgaver
- **Sprint planning**: Planlegge hva som skal gjøres i sprinten
- **Daily standup**: 15-minutters daglig statusmøte
- **Sprint review**: Vis hva som ble laget
- **Retrospektiv**: Diskuter hva som fungerte og hva som kan forbedres

### Kanban

Kanban bruker en tavle med kolonner for å visualisere arbeidsflyten:
- **Å gjøre** (backlog)
- **Under arbeid** (in progress)
- **Til godkjenning** (review)
- **Ferdig** (done)

Oppgaver flyttes fra venstre til høyre etter hvert som de gjøres ferdig. Begrens antall oppgaver under arbeid samtidig for å unngå flaskehalser.`,
    },
    {
      id: 'im-8-1-text-3',
      type: 'text',
      content: `### Planleggingsverktøy

**Gantt-diagram** viser oppgaver plottet langs en tidslinje. Hver oppgave er en stolpe som viser start, varighet og slutt. Avhengigheter mellom oppgaver vises med piler.

**Milepæler** er viktige kontrollpunkter i prosjektet: "Designet er godkjent", "Prototypen er ferdig", "Brukertest gjennomført".

### Prosjektplan

En god prosjektplan inneholder:
- **Mål**: Hva skal oppnås?
- **Omfang**: Hva er innenfor og utenfor prosjektet?
- **Tidsplan**: Når skal hvert steg gjøres?
- **Ressurser**: Hvem gjør hva? Hvilket utstyr trengs?
- **Risiko**: Hva kan gå galt, og hva gjør vi da?
- **Leveranser**: Hva skal leveres og når?`,
    },
    {
      id: 'im-8-1-example-1',
      type: 'example',
      title: 'Prosjektplan for et skoleprosjekt',
      content: `**Prosjekt**: Lage en informasjonsvideo om skolen (2 minutter)
**Metode**: Kanban med milepæler

**Tidsplan (4 uker):**
- Uke 1: Planlegging - Manus, storyboard, produksjonsplan. Milepæl: Godkjent manus.
- Uke 2: Filming - Opptak av alle scener. Milepæl: Alt råmateriale filmet.
- Uke 3: Redigering - Klipping, fargekorrigering, lyd. Milepæl: Førsteutkast ferdig.
- Uke 4: Ferdigstilling - Tilbakemeldinger, endringer, eksport. Milepæl: Video levert.

**Kanban-tavle:**
Å gjøre: Skrive manus | Under arbeid: Lage storyboard | Ferdig: Velge lokasjoner

**Risiko**: Dårlig vær for utendørs opptak. Tiltak: Ha innendørsscener som alternativ.`,
    },
    {
      id: 'im-8-1-summary',
      type: 'text',
      content: `## Oppsummering

- Prosjektmetodikk gir struktur og system til arbeidet med et prosjekt.
- Fossefallsmetoden er lineær med faste faser fra start til slutt.
- Agile metoder (Scrum) arbeider i korte sprinter med hyppige leveranser.
- Kanban-tavler visualiserer oppgaver i kolonner (å gjøre, pågår, ferdig).
- Gantt-diagrammer viser aktiviteter og tidslinjer visuelt.
- Valg av metodikk avhenger av prosjektets størrelse, kompleksitet og krav.`,
    },
    {
      id: 'im-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-8-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er hovedforskjellen mellom fossefallsmetoden og agile metoder?',
        options: [
          'Fossefall er for store prosjekter, agile er for små',
          'Fossefall er lineær og sekvensiell, agile er iterativ og tilpasningsdyktig',
          'Agile har ingen planlegging',
          'Fossefall brukes bare i IT-bransjen',
        ],
        correctAnswer: 1,
        solution: 'Fossefallsmetoden er lineær og sekvensiell - fasene gjøres i rekkefølge og man planlegger alt på forhånd. Agile metoder er iterative - man jobber i korte sprinter og tilpasser seg underveis basert på tilbakemeldinger.',
      },
    },
    {
      id: 'im-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-8-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv Scrum-rammeverket: Forklar de tre rollene og de viktigste seremoniene.',
        solution: 'Roller: 1) Produkteier - definerer hva som skal bygges og prioriterer oppgaver basert på verdi. 2) Scrum master - sikrer at teamet følger Scrum, fjerner hindringer. 3) Utviklingsteam - de som faktisk bygger produktet. Seremonier: Sprint - en 2-ukers arbeidsperiode. Sprint planning - teamet planlegger hva som skal gjøres i sprinten. Daily standup - 15 min daglig statusmøte. Sprint review - teamet viser hva de har laget. Retrospektiv - teamet reflekterer over hva som kan forbedres.',
      },
    },
    {
      id: 'im-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-8-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er en Kanban-tavle?',
        options: [
          'Et diagram som viser tidsplanen for et prosjekt',
          'En tavle med kolonner som visualiserer arbeidsflyten fra "å gjøre" til "ferdig"',
          'Et regneark for budsjett',
          'En type presentasjonsverktøy',
        ],
        correctAnswer: 1,
        solution: 'En Kanban-tavle har kolonner (typisk "Å gjøre", "Under arbeid", "Til godkjenning", "Ferdig") der oppgaver flyttes fra venstre til høyre etter hvert som de gjøres. Den gir visuell oversikt over status og begrenser arbeid som gjøres samtidig.',
      },
    },
    {
      id: 'im-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-8-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag en prosjektplan for et fiktivt IT-prosjekt du velger selv. Inkluder mål, tidsplan med milepæler og en risikovurdering.',
        solution: 'Prosjekt: Lage en enkel nettside for skolens elevråd. Mål: En nettside der elever kan lese om elevrådets arbeid, se kommende arrangementer og kontakte representantene. Tidsplan: Uke 1 - Kravspesifikasjon og wireframes (milepæl: godkjent wireframe). Uke 2-3 - Design og utvikling (milepæl: prototype klar). Uke 4 - Brukertesting og fikser (milepæl: testen gjennomført). Uke 5 - Lansering (milepæl: nettsiden live). Risikovurdering: 1) Forsinkelse i innholdsproduksjon - tiltak: starte innsamling tidlig. 2) Tekniske problemer med hosting - tiltak: bruke kjent plattform som GitHub Pages.',
      },
    },
    {
      id: 'im-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-8-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva viser et Gantt-diagram?',
        options: [
          'Budsjettfordelingen i et prosjekt',
          'Oppgaver plottet langs en tidslinje med start, varighet og avhengigheter',
          'Antall medarbeidere i prosjektet',
          'Kvaliteten på leveransene',
        ],
        correctAnswer: 1,
        solution: 'Et Gantt-diagram viser prosjektets oppgaver plottet langs en tidslinje. Hver oppgave representeres som en stolpe med start og slutt, og piler viser avhengigheter mellom oppgaver. Det gir visuell oversikt over tidsplanen.',
      },
    },
    {
      id: 'im-8-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-8-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Sammenlign fossefallsmetoden og Scrum. Gi minst to fordeler og to ulemper med hver, og beskriv et prosjekt der du ville valgt den ene fremfor den andre.',
        solution: 'Fossefall - Fordeler: 1) Tydelig struktur og milepæler, lett å planlegge tid og kostnader. 2) God dokumentasjon gjennom hele prosessen. Ulemper: 1) Vanskelig å endre kurs underveis. 2) Brukeren ser resultatet først på slutten. Best for: Prosjekter med klare, stabile krav, f.eks. en brosjyre med fast innhold. Scrum - Fordeler: 1) Tilpasningsdyktig, kan endre retning basert på tilbakemelding. 2) Leverer verdi tidlig gjennom inkrementelle leveranser. Ulemper: 1) Kan være vanskelig å estimere total tid og kostnad. 2) Krever aktiv deltakelse fra alle. Best for: Prosjekter der kravene kan endres, f.eks. utvikling av en ny app der brukertilbakemeldinger styrer retningen.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Fossefallsmetoden', definition: 'Lineær, sekvensiell prosjektmetodikk der fasene gjøres i rekkefølge.' },
    { term: 'Agile', definition: 'Iterativ prosjekttilnærming med korte sprinter og tilpasning underveis.' },
    { term: 'Scrum', definition: 'Agilt rammeverk med definerte roller, sprinter og seremonier.' },
    { term: 'Kanban', definition: 'Visuell oppgavestyring med tavle og kolonner for arbeidsflyt.' },
    { term: 'Sprint', definition: 'Tidsavgrenset arbeidsperiode (vanligvis 2 uker) i Scrum.' },
    { term: 'Gantt-diagram', definition: 'Diagram som viser oppgaver plottet langs en tidslinje.' },
  ],
};

// ============================================================================
// Kapittel 8.2: Samarbeid og kommunikasjon i team
// ============================================================================

export const CHAPTER_IM_VG1_8_2: TextbookChapter = {
  id: 'im-vg1-8-2',
  courseId: 'im-vg1',
  chapterNumber: '8.2',
  title: 'Samarbeid og kommunikasjon i team',
  description: 'Utvikle samarbeidsevner, lær om teamroller, effektiv kommunikasjon og konflikthåndtering i prosjektarbeid.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjøre rede for og vurdere hvordan partene i arbeidslivet samarbeider for å utvikle et bedre arbeidsliv',
  ],
  content: [
    {
      id: 'im-8-2-intro',
      type: 'text',
      content: `## Samarbeid og kommunikasjon i team

De fleste IT- og medieproduksjoner er teamarbeid. Å kunne samarbeide effektivt er en av de viktigste ferdighetene du kan utvikle. Gode team leverer bedre resultater enn enkeltpersoner, men det krever bevisst innsats for å kommunisere tydelig, fordele ansvar og håndtere uenigheter konstruktivt.

I dette kapittelet skal du lære:
- Teamroller og ansvarsfordeling
- Effektiv kommunikasjon i prosjekter
- Tilbakemeldingskultur
- Konflikthåndtering
- Digitale samarbeidsverktøy`,
    },
    {
      id: 'im-8-2-text-1',
      type: 'text',
      content: `### Teamroller

I et prosjektteam har alle en rolle. Klare roller forhindrer dobbeltarbeid og sikrer at alle oppgaver dekkes.

**Vanlige roller i IT/medieproduksjon:**
- **Prosjektleder**: Koordinerer arbeidet, holder oversikt over tidsplan og leveranser
- **Designer**: Ansvarlig for visuelt design og brukeropplevelse
- **Utvikler/tekniker**: Bygger den tekniske løsningen
- **Innholdsprodusent**: Lager tekst, bilder, video eller lyd
- **Kvalitetssikrer/tester**: Sjekker at alt fungerer som det skal

**Tips for rollefordeling:**
- Fordel roller basert på styrker og interesser
- Sørg for at alle forstår sitt ansvarsområde
- Ha overlap mellom roller slik at teamet ikke stopper hvis én person er fraværende`,
    },
    {
      id: 'im-8-2-text-2',
      type: 'text',
      content: `### Effektiv kommunikasjon

**Klarhet**: Si tydelig hva du mener. Unngå vage formuleringer som "kanskje vi burde..."
**Lytte aktivt**: Gi full oppmerksomhet, still oppfølgingsspørsmål, oppsummer for å sjekke forståelse.
**Dokumenter**: Skriv ned beslutninger og avtaler. Det som ikke er skrevet ned, er lett å glemme.
**Regelmessige møter**: Kort, fokuserte statusmøter holder alle oppdatert.

### Tilbakemeldingskultur

Gode tilbakemeldinger er spesifikke, konstruktive og rettidige.

**Gi tilbakemelding:**
- Start med noe positivt
- Vær spesifikk: "Fargene i designet skaper god kontrast" (ikke "ser bra ut")
- Fokuser på arbeidet, ikke personen
- Foreslå forbedringer: "Kanskje teksten kan bli litt større for bedre lesbarhet"

**Motta tilbakemelding:**
- Lytt uten å forsvare deg
- Still oppfølgingsspørsmål for å forstå
- Takk for tilbakemeldingen
- Vurder den objektivt etterpå`,
    },
    {
      id: 'im-8-2-text-3',
      type: 'text',
      content: `### Konflikthåndtering

Konflikter i team er naturlig og kan være konstruktive hvis de håndteres riktig.

**Vanlige årsaker:**
- Uklare roller og forventninger
- Ulik arbeidsinnsats
- Kommunikasjonssvikt
- Uenighet om kreative valg

**Håndtering:**
1. Anerkjenn konflikten tidlig - ikke ignorer den
2. Snakk om problemet, ikke personen
3. Lytt til alle parter
4. Se etter felles grunn og kompromisser
5. Avtal konkrete løsninger og følg opp

### Digitale samarbeidsverktøy

- **Kommunikasjon**: Slack, Microsoft Teams, Discord
- **Prosjektstyring**: Trello, Notion, Jira, Asana
- **Dokumentdeling**: Google Workspace, Microsoft 365
- **Versjonskontroll**: Git og GitHub for kode
- **Design**: Figma (sanntidssamarbeid)
- **Videosamtaler**: Zoom, Google Meet, Microsoft Teams`,
    },
    {
      id: 'im-8-2-example-1',
      type: 'example',
      title: 'Organisere et gruppeprosjekt',
      content: `Et prosjektteam med fire elever skal lage en kampanjevideo. Slik organiserer de seg:

**Roller**: Mia (prosjektleder/manus), Jonas (fotograf/filmopptak), Sara (designer/grafikk), Erik (klipper/lyd).

**Samarbeidsverktøy**: Trello for oppgavestyring, Google Drev for deling av filer, Discord for daglig kommunikasjon.

**Møteplan**: Mandag 10 min statusmøte, torsdag 20 min gjennomgang av ukens arbeid.

**Kommunikasjonsregler**: Svar på meldinger innen 24 timer. Gi tilbakemelding innen 48 timer etter at noen deler arbeid. Si ifra tidlig hvis du ikke rekker en deadline.`,
    },
    {
      id: 'im-8-2-summary',
      type: 'text',
      content: `## Oppsummering

- Effektivt samarbeid krever tydelige roller, ansvar og kommunikasjonskanaler.
- Teamroller som leder, kreativ og utfører utfyller hverandre.
- God tilbakemeldingskultur bygger tillit og fremmer kontinuerlig forbedring.
- Konflikthåndtering krever åpen dialog og fokus på sak fremfor person.
- Digitale samarbeidsverktøy støtter kommunikasjon og dokumentdeling.
- Profesjonell samarbeidskompetanse er viktig i alle yrker innen IT og media.`,
    },
    {
      id: 'im-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-8-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er viktigst for effektiv kommunikasjon i et prosjektteam?',
        options: [
          'At alle er enige hele tiden',
          'Klarhet, aktiv lytting og dokumentasjon av beslutninger',
          'At lederen tar alle beslutninger',
          'At man unngår møter',
        ],
        correctAnswer: 1,
        solution: 'Effektiv kommunikasjon krever klarhet (si tydelig hva du mener), aktiv lytting (forstå hva andre sier) og dokumentasjon (skriv ned beslutninger slik at de ikke glemmes).',
      },
    },
    {
      id: 'im-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-8-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Du jobber i et prosjektteam der ett medlem gjør mye mindre enn de andre. Beskriv hvordan du ville håndtert situasjonen.',
        solution: 'Tilnærming: 1) Snakk direkte med personen privat, ikke foran hele gruppen. Spør om det er noe som gjør det vanskelig å bidra. 2) Vær spesifikk om hva du har observert (ikke anklag). 3) Lytt til forklaringen - kanskje personen er usikker på oppgavene eller har personlige utfordringer. 4) Avtal konkrete oppgaver med tydelige frister. 5) Følg opp etter kort tid. 6) Hvis problemet vedvarer, ta det opp med hele gruppen eller be om hjelp fra læreren. Viktig: Fokuser på løsning, ikke skyld.',
      },
    },
    {
      id: 'im-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-8-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er en konstruktiv tilbakemelding?',
        options: [
          '"Det ser dårlig ut"',
          '"Fargene skaper god kontrast, men teksten kan bli litt større for bedre lesbarhet"',
          '"Du må gjøre alt om igjen"',
          '"Bra nok"',
        ],
        correctAnswer: 1,
        solution: 'En konstruktiv tilbakemelding er spesifikk (hva fungerer og hva kan forbedres), fokuserer på arbeidet (ikke personen), og foreslår konkrete forbedringer. "Fargene skaper god kontrast, men teksten kan bli litt større for bedre lesbarhet" er spesifikk, balansert og handlingsorientert.',
      },
    },
    {
      id: 'im-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-8-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Planlegg samarbeidsstrukturen for et gruppeprosjekt med fire medlemmer. Beskriv roller, verktøy, møteplan og kommunikasjonsregler.',
        solution: 'Prosjekt: Lage en podcast med tre episoder. Roller: Person A - Prosjektleder og programvert. Person B - Lydtekniker og redigerer. Person C - Research og manusskriving. Person D - Grafisk design (cover art) og markedsføring. Verktøy: Trello for oppgaver, Google Drev for manus og research, Discord for kommunikasjon, Audacity for redigering. Møteplan: Mandag 15 min planlegging, fredag 20 min gjennomgang. Regler: Svar på meldinger innen en dag, gi tilbakemelding innen to dager, si fra minst to dager før hvis du ikke rekker en deadline.',
      },
    },
    {
      id: 'im-8-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-8-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva bør du gjøre først når en konflikt oppstår i teamet?',
        options: [
          'Ignorere den og håpe den går over',
          'Anerkjenne konflikten tidlig og snakke om problemet, ikke personen',
          'Klage til læreren umiddelbart',
          'Slutte å samarbeide med personen',
        ],
        correctAnswer: 1,
        solution: 'Konflikter bør anerkjennes tidlig - å ignorere dem gjør dem verre. Snakk om det faktiske problemet (ikke angrip personen), lytt til alle parter, og se etter løsninger og kompromisser.',
      },
    },
    {
      id: 'im-8-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-8-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Reflekter over et gruppeprosjekt du har deltatt i. Hva fungerte bra med samarbeidet, og hva kunne vært forbedret? Begrunn med prinsipper fra dette kapittelet.',
        solution: 'Eksempel: I et gruppeprosjekt i norsk fungerte det bra at vi fordelte roller tidlig (en skrev, en redigerte, en lagde presentasjon). Vi hadde jevnlige statusmøter. Forbedringspotensial: Vi dokumenterte ikke beslutninger godt nok, noe som førte til misforståelser om hvem som hadde ansvar for hva. Tilbakemeldingene var for vage ("ser bra ut") i stedet for spesifikke. Vi burde også ha satt tydeligere frister for delleveranser i stedet for bare sluttfristen.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Teamrolle', definition: 'Definert ansvarsområde for et medlem av prosjektteamet.' },
    { term: 'Aktiv lytting', definition: 'Å gi full oppmerksomhet, stille spørsmål og bekrefte forståelse.' },
    { term: 'Konstruktiv tilbakemelding', definition: 'Spesifikk, balansert tilbakemelding som foreslår forbedringer.' },
    { term: 'Konflikthåndtering', definition: 'Prosessen med å løse uenigheter på en konstruktiv måte.' },
    { term: 'Statusmøte', definition: 'Kort, regelmessig møte for å oppdatere teamet om fremdrift.' },
    { term: 'Versjonskontroll', definition: 'System for å spore endringer i filer og samarbeide om kode.' },
  ],
};

// ============================================================================
// Kapittel 8.3: Konseptutvikling og idéarbeid
// ============================================================================

export const CHAPTER_IM_VG1_8_3: TextbookChapter = {
  id: 'im-vg1-8-3',
  courseId: 'im-vg1',
  chapterNumber: '8.3',
  title: 'Konseptutvikling og idéarbeid',
  description: 'Lær kreative metoder for idéutvikling og konseptarbeid, fra brainstorming til ferdig konseptpresentasjon.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke teknikker for idéutvikling, kreativitet og historiefortelling i produksjon',
    'visualisere og utvikle konsepter og ideer tilpasset ulike plattformer',
  ],
  content: [
    {
      id: 'im-8-3-intro',
      type: 'text',
      content: `## Konseptutvikling og idéarbeid

Gode ideer kommer sjelden av seg selv. Kreativitet er en ferdighet som kan trenes, og det finnes metoder som systematisk hjelper deg å generere, vurdere og utvikle ideer. Fra brainstorming til ferdig konseptpresentasjon - dette kapittelet gir deg verktøyene.

I dette kapittelet skal du lære:
- Brainstorming og idémyldring
- Mind mapping som struktureringsverktøy
- Moodboards og referanseinnsamling
- Konseptbeskrivelse og pitch`,
    },
    {
      id: 'im-8-3-text-1',
      type: 'text',
      content: `### Brainstorming

**Regler for brainstorming:**
1. **Kvantitet over kvalitet**: Generer så mange ideer som mulig
2. **Ingen kritikk**: Alle ideer er velkomne, vurdering kommer senere
3. **Bygg videre**: Ta andres ideer og utvid dem
4. **Vær vill**: Uvanlige ideer kan lede til gode løsninger

**Varianter:**
- **Brainwriting**: Alle skriver ideer individuelt i 5 minutter, deretter deles de
- **Omvendt brainstorming**: "Hvordan kan vi gjøre dette så dårlig som mulig?" - deretter snu ideene
- **SCAMPER**: Substitute, Combine, Adapt, Modify, Put to other use, Eliminate, Reverse

### Mind mapping

Mind mapping organiserer tanker visuelt rundt et sentralt tema:
1. Skriv hovedtemaet i midten
2. Trekk grener for undertemaer
3. Legg til detaljer på hver gren
4. Bruk farger og symboler for å gruppere
5. Se sammenhenger mellom grenene`,
    },
    {
      id: 'im-8-3-text-2',
      type: 'text',
      content: `### Moodboard og referanser

Et **moodboard** er en visuell samling av bilder, farger, teksturer, typografi og andre elementer som definerer stilen og stemningen for et prosjekt.

**Hva inkludere:**
- Bilder og fotografier som inspirerer
- Fargepaletter
- Typografieksempler
- Teksturer og materialer
- Referanser fra eksisterende produkter
- Nøkkelord som beskriver stemningen

**Digitale verktøy**: Pinterest, Milanote, Figma, eller en enkel Google Slides-presentasjon.

### Konseptbeskrivelse

En **konseptbeskrivelse** oppsummerer ideen tydelig og konsist:
- **Prosjektnavn**: Et kort, beskrivende navn
- **Problemstilling**: Hvilket problem løser vi?
- **Målgruppe**: Hvem er dette for?
- **Løsning**: Hva er ideen vår?
- **Unikt verdiforslag**: Hvorfor er dette bedre enn alternativene?
- **Plattform**: Nettside, app, video, podcast?`,
    },
    {
      id: 'im-8-3-text-3',
      type: 'text',
      content: `### Pitch

En **pitch** er en kort, overbevisende presentasjon av konseptet.

**Elevator pitch** (30 sekunder): "For [målgruppe] som [har dette problemet], er [produktnavn] en [type produkt] som [løser problemet]. I motsetning til [alternativer], [vårt unike fortrinn]."

**Kort pitch** (3-5 minutter): Utvid elevator pitch med:
- Visuell demonstrasjon (moodboard, wireframes)
- Kort om teamet og kompetansen
- Tidsplan og neste steg

**Tips for god pitch:**
- Start med problemet, ikke løsningen
- Fortell en historie
- Vis, ikke bare fortell
- Vær entusiastisk men realistisk
- Avslutt med en tydelig handlingsplan`,
    },
    {
      id: 'im-8-3-example-1',
      type: 'example',
      title: 'Konseptutvikling for en skolerelatert app',
      content: `**Brainstorming** ga 20 ideer. Etter vurdering valgte teamet de tre beste og utviklet den mest lovende:

**Konseptbeskrivelse:**
- Navn: "StudieBuddy"
- Problem: Elever sliter med å organisere lekser og frister
- Målgruppe: Elever 15-19 år
- Løsning: En enkel app som automatisk henter frister fra læringsplattformen og sender påminnelser
- Unikt: Integrerer med eksisterende systemer, ingen manuell registrering

**Elevator pitch**: "For elever som glemmer frister og sliter med oversikt, er StudieBuddy en app som automatisk samler alle innleveringsfrister fra It's Learning og sender smarte påminnelser. I motsetning til vanlige kalenderapper, trenger du ikke legge inn noe manuelt."`,
    },
    {
      id: 'im-8-3-summary',
      type: 'text',
      content: `## Oppsummering

- Idéutvikling bruker kreative metoder som brainstorming, mind mapping og moodboards.
- Brainstorming handler om å generere mange ideer uten å vurdere dem underveis.
- Mind mapping organiserer ideer visuelt rundt et sentralt tema.
- Moodboards samler inspirasjon i bilder, farger, materialer og stemning.
- En konseptbeskrivelse oppsummerer ideen, målgruppen og den kreative retningen.
- Pitching presenterer konseptet kort og overbevisende for beslutningstakere.`,
    },
    {
      id: 'im-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-8-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste regelen under brainstorming?',
        options: [
          'Bare de beste ideene deles',
          'Kvantitet over kvalitet - generer mange ideer uten å kritisere',
          'Lederen bestemmer hvilke ideer som er gode',
          'Man jobber alene',
        ],
        correctAnswer: 1,
        solution: 'Under brainstorming er den viktigste regelen kvantitet over kvalitet - generer så mange ideer som mulig uten å kritisere. Vurdering og filtrering gjøres etterpå. Å kritisere tidlig dreper kreativiteten.',
      },
    },
    {
      id: 'im-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-8-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Lag en elevator pitch (2-3 setninger) for et digitalt produkt du ville laget for skolen din.',
        solution: 'Eksempel: "For elever som aldri vet hva som serveres i kantina, er KantinaApp en enkel app som viser dagens meny, allergener og kø-tid i sanntid. I motsetning til den papirplakaten ved inngangen, kan du sjekke menyen fra klasserommet og planlegge matpausen din."',
      },
    },
    {
      id: 'im-8-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-8-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er et moodboard?',
        options: [
          'Et diagram over prosjektets tidsplan',
          'En visuell samling av bilder, farger og elementer som definerer stilen for et prosjekt',
          'Et skjema for budsjettering',
          'En type kode-editor',
        ],
        correctAnswer: 1,
        solution: 'Et moodboard er en visuell samling av bilder, farger, typografi, teksturer og referanser som definerer den ønskede stilen og stemningen for et prosjekt. Det brukes for å kommunisere kreativ retning til teamet og oppdragsgivere.',
      },
    },
    {
      id: 'im-8-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-8-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Gjennomfør en brainstorming (individuelt eller med en medelev) om temaet "forbedre skolehverdagen med teknologi." Skriv ned minst 10 ideer, og velg ut de tre mest lovende.',
        solution: 'Eksempel-ideer: 1) App for leksehjelp med KI-tutor, 2) Digital tavle for klassens aktiviteter, 3) System for å booke grupperom, 4) Anonym tilbakemeldingsapp for undervisning, 5) Automatisk fraværsregistrering med mobil, 6) App som matcher studiegrupper, 7) Digitalt ryddehjul for klasserommet, 8) Podcast fra rådgiver om studieteknikk, 9) Gamification av skolearbeid, 10) AR-app for naturfageksperimenter. Tre mest lovende: System for å booke grupperom (løser reelt problem), anonym tilbakemelding (forbedrer undervisning), app som matcher studiegrupper (sosialt og faglig).',
      },
    },
    {
      id: 'im-8-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-8-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva bør en konseptbeskrivelse inneholde?',
        options: [
          'Bare prosjektnavnet',
          'Prosjektnavn, problemstilling, målgruppe, løsning og unikt verdiforslag',
          'Bare en teknisk spesifikasjon',
          'En fullstendig kodebase',
        ],
        correctAnswer: 1,
        solution: 'En konseptbeskrivelse bør inneholde prosjektnavn, problemstilling (hvilket problem løses), målgruppe (hvem er dette for), løsning (hva er ideen), unikt verdiforslag (hvorfor er dette bedre enn alternativene) og plattform.',
      },
    },
    {
      id: 'im-8-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-8-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en mind map rundt temaet "medieproduksjon". Inkluder minst fire hovedgrener med undergrener.',
        solution: 'Mind map - Medieproduksjon: GREN 1 - Video: Undergrener: dokumentar, reklamefilm, musikkvideo, opplæringsvideo, kortfilm. GREN 2 - Lyd: Undergrener: podcast, musikkproduksjon, lydeffekter, voiceover, lydbok. GREN 3 - Grafisk design: Undergrener: logo, plakat, infografikk, sosiale medier-innhold, merkevareprofil. GREN 4 - Webutvikling: Undergrener: nettside, app, nettbutikk, blogg, portfolio. GREN 5 - Animasjon: Undergrener: motion graphics, 2D-animasjon, 3D-animasjon, interaktiv media.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Brainstorming', definition: 'Kreativ metode for å generere mange ideer uten kritikk.' },
    { term: 'Mind map', definition: 'Visuell organisering av tanker rundt et sentralt tema med grener.' },
    { term: 'Moodboard', definition: 'Visuell samling som definerer stil og stemning for et prosjekt.' },
    { term: 'Konseptbeskrivelse', definition: 'Kort oppsummering av en idé med problem, løsning og målgruppe.' },
    { term: 'Elevator pitch', definition: 'Overbevisende presentasjon av et konsept på 30 sekunder.' },
    { term: 'SCAMPER', definition: 'Kreativ metode: Substitute, Combine, Adapt, Modify, Put to other use, Eliminate, Reverse.' },
  ],
};

// ============================================================================
// Kapittel 8.4: Dramaturgi og historiefortelling
// ============================================================================

export const CHAPTER_IM_VG1_8_4: TextbookChapter = {
  id: 'im-vg1-8-4',
  courseId: 'im-vg1',
  chapterNumber: '8.4',
  title: 'Dramaturgi og historiefortelling',
  description: 'Forstå fortellerteknikkens grunnprinsipper og lær å bruke dramaturgi og narrativ struktur i digitale produksjoner.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og bruke fortelleteknikk og dramaturgi i egne produksjoner',
    'utforske hvordan interaktivitet i historiefortelling kan brukes for å skape engasjement og nye uttrykk, og bruke dette i egen produksjon',
  ],
  content: [
    {
      id: 'im-8-4-intro',
      type: 'text',
      content: `## Dramaturgi og historiefortelling

Mennesker er fortellende vesener. Vi har fortalt historier rundt leirbålet i tusenvis av år, og de grunnleggende prinsippene for god historiefortelling er de samme enten det er en kinofilm, en reklame, en podcast eller en nettside. Å forstå dramaturgi gjør deg til en bedre medieprodusent uansett format.

I dette kapittelet skal du lære:
- Dramaturgiske modeller (tre-akt-strukturen, berettermodellen)
- Karakterutvikling og empati
- Spenningskurve og vendepunkt
- Interaktiv historiefortelling i digitale medier`,
    },
    {
      id: 'im-8-4-text-1',
      type: 'text',
      content: `### Tre-akt-strukturen

Den klassiske tre-akt-strukturen deler en fortelling i tre deler:

**Akt 1 - Presentasjon (setup):**
- Introduser hovedpersonen og verdenen
- Vis normaltilstanden
- Presenter konflikten eller utfordringen
- Avsluttes med et vendepunkt som setter handlingen i gang

**Akt 2 - Konfrontasjon (confrontation):**
- Hovedpersonen møter hindringer
- Spenningen øker gradvis
- Allierer og motstandere introduseres
- Midtpunktet snur handlingens retning
- Avsluttes med det laveste punktet (alt ser håpløst ut)

**Akt 3 - Oppløsning (resolution):**
- Hovedpersonen finner en løsning
- Klimaks - det avgjørende øyeblikket
- Konflikten løses
- Ny normaltilstand etableres`,
    },
    {
      id: 'im-8-4-text-2',
      type: 'text',
      content: `### Berettermodellen

Berettermodellen er en skandinavisk dramaturgisk modell med syv faser:

1. **Anslag**: Fanger oppmerksomheten, setter tonen
2. **Presentasjon**: Introduserer karakterer og setting
3. **Utdyping**: Fordyper konflikten, bygger spenning
4. **Point of no return**: Vendepunkt der det ikke er noen vei tilbake
5. **Konfliktopptrapping**: Spenningen øker mot klimaks
6. **Klimaks**: Det avgjørende øyeblikket
7. **Uttoning**: Handlingen roer seg, ny normaltilstand

### Karakterutvikling

Gode karakterer driver handlingen. En hovedperson trenger:
- **Mål**: Hva vil de oppnå?
- **Motivasjon**: Hvorfor er det viktig for dem?
- **Svakhet/feil**: Hva holder dem tilbake?
- **Utvikling**: Hvordan endrer de seg gjennom historien?

Publikum engasjerer seg når de bryr seg om karakteren. Empati skapes ved å vise sårbarhet, gjenkjennelige utfordringer og menneskelige reaksjoner.`,
    },
    {
      id: 'im-8-4-text-3',
      type: 'text',
      content: `### Interaktiv historiefortelling

Digitale medier åpner for nye former for historiefortelling der publikum deltar aktivt.

**Forgreningsnarrativer**: Seeren gjør valg som påvirker handlingen (interaktive filmer, spill). Eksempel: Netflix' "Black Mirror: Bandersnatch".

**Scrollytelling**: Historien avdekkes gradvis når brukeren scroller nedover en nettside. Tekst, bilder og animasjon aktiveres av scrolling.

**Transmedial historiefortelling**: Én historie fortelles på tvers av flere plattformer - en serie på TV, en podcast med bakgrunnshistorie, en nettside med ekstra innhold.

**Spillmekanismer**: Poeng, nivåer og belønninger brukt i ikke-spillkontekster (gamification) for å engasjere.

### Storytelling i medieproduksjon

- **Video**: Bruk tre-akt-strukturen for kortfilmer og dokumentarer
- **Reklame**: Anslag + problem + løsning i 30 sekunder
- **Podcast**: Bygg episoder rundt en spenningskurve
- **Nettside**: Fortell bedriftens historie gjennom scrollytelling`,
    },
    {
      id: 'im-8-4-summary',
      type: 'text',
      content: `## Oppsummering

- Dramaturgi er læren om hvordan historier bygges opp for å engasjere publikum.
- Tre-akt-strukturen deler historien i introduksjon, konfrontasjon og oppløsning.
- Karakterutvikling gir publikum noen å identifisere seg med og heie på.
- Spenningskurven bygger opp mot et klimaks og gir historien dynamikk.
- Interaktiv historiefortelling lar publikum påvirke handlingen og skape engasjement.
- Dramaturgiske prinsipper kan brukes i alt fra film og spill til presentasjoner og reklame.`,
    },
    {
      id: 'im-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-8-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva skjer i Akt 2 (konfrontasjon) av tre-akt-strukturen?',
        options: [
          'Karakterene introduseres og normaltilstanden vises',
          'Hovedpersonen møter hindringer og spenningen øker',
          'Konflikten løses og en ny normaltilstand etableres',
          'Historien avsluttes',
        ],
        correctAnswer: 1,
        solution: 'I Akt 2 (konfrontasjon) møter hovedpersonen hindringer og motstand. Spenningen øker gradvis, og handlingen drives mot klimaks. Denne akten utgjør vanligvis halvparten av fortellingen.',
      },
    },
    {
      id: 'im-8-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-8-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Bruk tre-akt-strukturen til å planlegge en kort historie (1-2 minutter video) om en elev som har en utfordring på skolen.',
        solution: 'Akt 1: En elev (Mia) er stresset fordi hun har tre innleveringer på samme dag. Vi ser henne omgitt av bøker og noter, fortvilt. Vendepunkt: Hun bestemmer seg for å prøve en ny studieteknikk. Akt 2: Mia prøver å organisere arbeidet med en Kanban-tavle. Det er vanskelig først, hun gjør feil og blir frustrert. En venn hjelper henne med å prioritere. Akt 3: Mia leverer alle tre oppgavene i tide. Vi ser henne slappet av, fornøyd. Hun har lært at planlegging gjør ting overkommelig.',
      },
    },
    {
      id: 'im-8-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-8-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er "point of no return" i berettermodellen?',
        options: [
          'Starten av historien',
          'Et vendepunkt der det ikke er noen vei tilbake for karakteren',
          'Avslutningen av historien',
          'En teknisk feil i produksjonen',
        ],
        correctAnswer: 1,
        solution: 'Point of no return er et vendepunkt der karakteren har gått så langt at det ikke er mulig å gå tilbake til normaltilstanden. Det hever innsatsen og driver handlingen mot klimaks.',
      },
    },
    {
      id: 'im-8-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-8-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hva interaktiv historiefortelling er, og gi to eksempler på hvordan det kan brukes i digitale medier.',
        solution: 'Interaktiv historiefortelling lar publikum delta aktivt i fortellingen gjennom valg og handlinger. Eksempel 1: En interaktiv dokumentar der seeren velger hvilke intervjuobjekter de vil høre fra, noe som gir ulike perspektiver på samme tema. Eksempel 2: En nettside med scrollytelling der besøkende avdekker en bedrifts historie steg for steg ved å scrolle, med animasjoner, bilder og tekst som aktiveres av scrollposisjonen.',
      },
    },
    {
      id: 'im-8-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-8-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva trenger en god karakter i en fortelling?',
        options: [
          'Bare et navn',
          'Et mål, en motivasjon, en svakhet og mulighet for utvikling',
          'Mye penger og makt',
          'En detaljert utseendebeskrivelse',
        ],
        correctAnswer: 1,
        solution: 'En god karakter trenger et klart mål (hva de vil oppnå), motivasjon (hvorfor det er viktig), en svakhet eller feil (som skaper spenning), og mulighet for utvikling (de endrer seg gjennom historien). Disse elementene gjør karakteren menneskelig og engasjerende.',
      },
    },
    {
      id: 'im-8-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-8-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Analyser en film, serie eller YouTube-video du har sett nylig. Identifiser tre-akt-strukturen: Hvor er presentasjonen, konfrontasjonen og oppløsningen?',
        solution: 'Eksempel - Analyse av en YouTube-video "Slik bygde jeg en PC": Akt 1 (Presentasjon, 0:00-2:00): Skaperen viser ønskelisten over deler, forklarer budsjettet og målet (bygge en gaming-PC for under 8000 kr). Akt 2 (Konfrontasjon, 2:00-12:00): Bestilling av deler, venting, et grafikkort er utsolgt (hinder), finner alternativ, byggeprosessen med problemer (PCen starter ikke første gang, feilsøking). Akt 3 (Oppløsning, 12:00-15:00): Problemet løses (løs RAM-brikke), PCen starter, kjører benchmarks, viser at målet er nådd. Konklusjon og anbefalinger.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Tre-akt-struktur', definition: 'Klassisk fortellerstruktur med presentasjon, konfrontasjon og oppløsning.' },
    { term: 'Berettermodellen', definition: 'Skandinavisk dramaturgisk modell med syv faser fra anslag til uttoning.' },
    { term: 'Klimaks', definition: 'Det mest intense, avgjørende øyeblikket i en fortelling.' },
    { term: 'Point of no return', definition: 'Vendepunkt der karakteren ikke kan gå tilbake til normaltilstanden.' },
    { term: 'Scrollytelling', definition: 'Historiefortelling der innhold avdekkes gradvis ved scrolling.' },
    { term: 'Transmedial fortelling', definition: 'Historie som fortelles på tvers av flere medieplattformer.' },
  ],
};

// ============================================================================
// Kapittel 8.5: Databaser og datamodellering
// ============================================================================

export const CHAPTER_IM_VG1_8_5: TextbookChapter = {
  id: 'im-vg1-8-5',
  courseId: 'im-vg1',
  chapterNumber: '8.5',
  title: 'Databaser og datamodellering',
  description: 'Lær grunnleggende databasekonsepter, ER-modellering og enkel bruk av SQL for å hente og organisere data.',
  estimatedMinutes: 60,
  competenceGoals: [
    'utforske og anvende verktøy for datamodellering i oppbygging av databaser',
  ],
  content: [
    {
      id: 'im-8-5-intro',
      type: 'text',
      content: `## Databaser og datamodellering

Databaser er hjørnestenen i nesten alle digitale tjenester. Når du logger inn, bestiller noe på nett eller poster på sosiale medier, lagres dataene i en database. Å forstå grunnleggende databasekonsepter er viktig for alle som jobber med IT og medieproduksjon.

I dette kapittelet skal du lære:
- Hva en database er og hvorfor de brukes
- ER-diagrammer for datamodellering
- Tabeller, rader, kolonner og relasjoner
- Grunnleggende SQL-spørringer`,
    },
    {
      id: 'im-8-5-def-1',
      type: 'definition',
      title: 'Database',
      content: `En **database** er en organisert samling av data som lagres og administreres elektronisk. Den gjør det mulig å lagre, hente, oppdatere og slette data effektivt. En **relasjonsdatabase** organiserer data i tabeller med definerte relasjoner mellom dem.`,
    },
    {
      id: 'im-8-5-text-1',
      type: 'text',
      content: `### Tabeller, rader og kolonner

En relasjonsdatabase organiserer data i **tabeller**:
- Hver tabell representerer en type ting (elever, fag, karakterer)
- **Kolonner** definerer egenskapene (navn, fødselsdato, e-post)
- **Rader** er individuelle poster (én elev, ett fag)

**Eksempel - Tabell "Elever":**
| elev_id | fornavn | etternavn | klasse | epost |
|---------|---------|-----------|--------|-------|
| 1 | Mia | Hansen | 1IMA | mia@skole.no |
| 2 | Jonas | Berg | 1IMB | jonas@skole.no |
| 3 | Sara | Nilsen | 1IMA | sara@skole.no |

**Primærnøkkel** er en unik identifikator for hver rad (elev_id i eksempelet). Ingen to rader kan ha samme primærnøkkel.

**Fremmednøkkel** er en kolonne som refererer til primærnøkkelen i en annen tabell. Den knytter tabellene sammen.`,
    },
    {
      id: 'im-8-5-text-2',
      type: 'text',
      content: `### ER-diagrammer

Et **ER-diagram** (Entity-Relationship) er et visuelt verktøy for å planlegge databasestrukturen.

**Entiteter** er tingene vi lagrer data om (Elev, Fag, Karakter). De representeres som rektangler.

**Attributter** er egenskapene til entitetene (navn, dato, poeng). De listes i entiteten.

**Relasjoner** viser hvordan entiteter henger sammen:
- **En-til-en (1:1)**: Én elev har én brukerkonto
- **En-til-mange (1:N)**: Én klasse har mange elever
- **Mange-til-mange (N:M)**: Mange elever tar mange fag

En mange-til-mange-relasjon krever en **koblingstabell** mellom de to tabellene.

**Eksempel:**
Elev (1) --- (N) Karakter (N) --- (1) Fag

Oversatt: Én elev har mange karakterer, og hvert fag har mange karakterer fra ulike elever.`,
    },
    {
      id: 'im-8-5-text-3',
      type: 'text',
      content: `### Grunnleggende SQL

**SQL** (Structured Query Language) er språket for å kommunisere med databaser.

**Hente data (SELECT):**
SELECT fornavn, etternavn FROM elever;
Henter fornavn og etternavn for alle elever.

SELECT * FROM elever WHERE klasse = '1IMA';
Henter alle kolonner for elever i klasse 1IMA.

**Sette inn data (INSERT):**
INSERT INTO elever (fornavn, etternavn, klasse) VALUES ('Erik', 'Larsen', '1IMB');

**Oppdatere data (UPDATE):**
UPDATE elever SET klasse = '2IMA' WHERE elev_id = 1;

**Slette data (DELETE):**
DELETE FROM elever WHERE elev_id = 3;

**Sortere (ORDER BY):**
SELECT * FROM elever ORDER BY etternavn;

**Filtrere (WHERE):**
SELECT * FROM karakterer WHERE poeng > 50;`,
    },
    {
      id: 'im-8-5-example-1',
      type: 'example',
      title: 'Database for et bibliotek',
      content: `ER-diagram for et skolebibliotek:

**Entiteter:**
- Bok (bok_id, tittel, forfatter, isbn, antall)
- Elev (elev_id, fornavn, etternavn, klasse)
- Utlån (utlan_id, bok_id, elev_id, utlånsdato, innleveringsdato)

**Relasjoner:**
- Én bok kan lånes ut mange ganger (1:N mellom Bok og Utlån)
- Én elev kan ha mange utlån (1:N mellom Elev og Utlån)

**SQL-eksempel:**
"Vis alle bøker som Mia Hansen har lånt:"
SELECT b.tittel, u.utlånsdato FROM bok b JOIN utlån u ON b.bok_id = u.bok_id JOIN elev e ON e.elev_id = u.elev_id WHERE e.fornavn = 'Mia' AND e.etternavn = 'Hansen';`,
    },
    {
      id: 'im-8-5-summary',
      type: 'text',
      content: `## Oppsummering

- En database er en organisert samling av data som kan søkes, oppdateres og analyseres.
- ER-diagrammer modellerer relasjoner mellom ulike dataelementer (entiteter).
- Tabeller organiserer data i rader (poster) og kolonner (felter).
- Primærnøkler identifiserer hver rad unikt, fremmednøkler kobler tabeller sammen.
- SQL-spørringer brukes til å hente, legge til, oppdatere og slette data.
- Databasekunnskap er viktig for å forstå hvordan digitale systemer lagrer og organiserer informasjon.`,
    },
    {
      id: 'im-8-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-8-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er en primærnøkkel i en database?',
        options: [
          'Det første feltet i en tabell',
          'En unik identifikator for hver rad i en tabell',
          'Et passord for å få tilgang til databasen',
          'En kolonne som alltid inneholder tekst',
        ],
        correctAnswer: 1,
        solution: 'En primærnøkkel er en unik identifikator for hver rad i en tabell. Ingen to rader kan ha samme primærnøkkelverdi. Den brukes til å referere til spesifikke poster og koble tabeller sammen.',
      },
    },
    {
      id: 'im-8-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-8-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom en-til-mange (1:N) og mange-til-mange (N:M) relasjoner, og gi et eksempel på hver.',
        solution: 'En-til-mange (1:N): Én entitet på den ene siden kan knyttes til mange entiteter på den andre. Eksempel: Én lærer underviser mange fag, men hvert fag har bare én ansvarlig lærer. Mange-til-mange (N:M): Mange entiteter på begge sider kan knyttes til hverandre. Eksempel: Mange elever tar mange fag, og hvert fag har mange elever. N:M-relasjoner krever en koblingstabell for å representeres i databasen.',
      },
    },
    {
      id: 'im-8-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-8-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvilken SQL-kommando brukes for å hente data fra en database?',
        options: [
          'INSERT',
          'UPDATE',
          'SELECT',
          'DELETE',
        ],
        correctAnswer: 2,
        solution: 'SELECT brukes for å hente (lese) data fra en database. Eksempel: SELECT * FROM elever; henter alle kolonner og rader fra tabellen "elever".',
      },
    },
    {
      id: 'im-8-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-8-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag et enkelt ER-diagram for en nettbutikk. Inkluder minst tre entiteter med attributter og relasjoner.',
        solution: 'Entiteter: 1) Kunde (kunde_id, fornavn, etternavn, epost, adresse) 2) Produkt (produkt_id, navn, pris, beskrivelse, antall_på_lager) 3) Bestilling (bestilling_id, kunde_id, bestillingsdato, totalbeløp). Koblingstabell: Bestillingslinje (linje_id, bestilling_id, produkt_id, antall, linjepris). Relasjoner: Én kunde kan ha mange bestillinger (1:N). Én bestilling kan inneholde mange produkter, og ett produkt kan være i mange bestillinger (N:M via bestillingslinje).',
      },
    },
    {
      id: 'im-8-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-8-5-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva er en fremmednøkkel?',
        options: [
          'En nøkkel som åpner en annen database',
          'En kolonne som refererer til primærnøkkelen i en annen tabell',
          'Et hemmelig passord',
          'En kolonne som aldri kan endres',
        ],
        correctAnswer: 1,
        solution: 'En fremmednøkkel er en kolonne i en tabell som refererer til primærnøkkelen i en annen tabell. Den knytter tabellene sammen og etablerer relasjoner mellom dem. For eksempel kan en "klasse_id" i Elev-tabellen være en fremmednøkkel som peker på Klasse-tabellen.',
      },
    },
    {
      id: 'im-8-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-8-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Skriv SQL-spørringer for følgende oppgaver basert på en tabell "produkter" med kolonnene produkt_id, navn, pris og kategori: a) Hent alle produkter. b) Hent produkter med pris over 500. c) Hent alle produkter sortert etter pris fra lavest til høyest.',
        solution: 'a) SELECT * FROM produkter; - Henter alle kolonner og rader. b) SELECT * FROM produkter WHERE pris > 500; - Filtrerer slik at bare produkter med pris over 500 vises. c) SELECT * FROM produkter ORDER BY pris ASC; - Sorterer alle produkter etter pris i stigende rekkefølge (ASC = ascending).',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Database', definition: 'Organisert samling av data som lagres og administreres elektronisk.' },
    { term: 'Primærnøkkel', definition: 'Unik identifikator for hver rad i en tabell.' },
    { term: 'Fremmednøkkel', definition: 'Kolonne som refererer til primærnøkkelen i en annen tabell.' },
    { term: 'ER-diagram', definition: 'Visuelt verktøy for å planlegge databasestruktur med entiteter og relasjoner.' },
    { term: 'SQL', definition: 'Structured Query Language - standardspråk for å kommunisere med databaser.' },
    { term: 'Relasjon', definition: 'Forbindelse mellom to tabeller i en relasjonsdatabase.' },
  ],
};

// ============================================================================
// Kapittel 8.6: Bærekraft og grønn teknologi
// ============================================================================

export const CHAPTER_IM_VG1_8_6: TextbookChapter = {
  id: 'im-vg1-8-6',
  courseId: 'im-vg1',
  chapterNumber: '8.6',
  title: 'Bærekraft og grønn teknologi',
  description: 'Reflekter over teknologiens miljøpåvirkning og lær om bærekraftige valg ved anskaffelse, drift og avhending av utstyr.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjøre rede for hvordan hensynet til bærekraft påvirker anskaffelse, drift og avhending av utstyr og materiell',
  ],
  content: [
    {
      id: 'im-8-6-intro',
      type: 'text',
      content: `## Bærekraft og grønn teknologi

Teknologibransjen har et betydelig miljøfotavtrykk. Fra produksjon av elektronikk med sjeldne mineraler til energikrevende datasentre og voksende mengder e-avfall - IT-bransjen må ta sin del av ansvaret for en bærekraftig fremtid. Som IT-profesjonelle har vi mulighet til å gjøre bevisste valg som reduserer miljøbelastningen.

I dette kapittelet skal du lære:
- Teknologiens miljøpåvirkning
- Energiforbruk og datasentre
- E-avfall og sirkulærøkonomi
- Bærekraftige valg i praksis`,
    },
    {
      id: 'im-8-6-text-1',
      type: 'text',
      content: `### Teknologiens miljøpåvirkning

**Produksjon**: Elektronikk krever sjeldne jordarter og mineraler som ofte utvinnes under dårlige arbeidsforhold og med stor miljøbelastning. En smarttelefon inneholder over 60 ulike grunnstoffer.

**Energiforbruk**: IT-sektoren står for ca. 2-3% av verdens totale energiforbruk - omtrent like mye som flytrafikken. Datasentre, nettverk og brukerenheter krever enorme mengder strøm.

**E-avfall**: Verdens e-avfall vokser med ca. 2% per år. Mye eksporteres til utviklingsland der det resirkuleres under farlige forhold. Bare 20% av verdens e-avfall resirkuleres forsvarlig.

### Datasentre og energi

Datasentre bruker energi til:
- Servere som kjører applikasjoner og lagrer data
- Kjøling (serverne genererer mye varme)
- Nettverk og lagring
- Nødstrøm og infrastruktur

**Tiltak**: Mange datasentre går over til fornybar energi. Noen bruker overskuddsvarmen til fjernvarme. Effektive kjøleløsninger reduserer energiforbruket.`,
    },
    {
      id: 'im-8-6-text-2',
      type: 'text',
      content: `### Sirkulærøkonomi i IT

**Lineær økonomi**: Produser → Bruk → Kast (ta-bruk-kast)
**Sirkulærøkonomi**: Produser → Bruk → Reparer → Gjenbruk → Resirkuler

**Tiltak for sirkulærøkonomi:**
- **Lengre levetid**: Kjøp kvalitetsprodukter som varer lenger
- **Reparasjon**: Fiks det som er ødelagt i stedet for å kjøpe nytt
- **Oppgradering**: Oppgrader komponenter i stedet for å bytte hele enheten
- **Bruktmarked**: Selg eller doner utstyr du ikke bruker
- **Resirkulering**: Lever e-avfall til godkjent mottak

### Bærekraftig programvareutvikling

- **Effektiv kode** bruker mindre prosessorkraft og energi
- **Optimaliserte bilder** reduserer dataoverføring og energi
- **Mørk modus** sparer batteristrøm på OLED-skjermer
- **Caching** reduserer unødvendige serverforespørsler
- **Grønn hosting**: Velg hostingleverandører som bruker fornybar energi`,
    },
    {
      id: 'im-8-6-summary',
      type: 'text',
      content: `## Oppsummering

- IT-bransjen har et betydelig energi- og miljøfotavtrykk gjennom produksjon, drift og avhending.
- Datasentre bruker store mengder energi og krever effektiv kjøling.
- E-avfall er et voksende globalt problem som krever ansvarlig håndtering.
- Sirkulærøkonomi handler om å gjenbruke, reparere og resirkulere elektronikk.
- Bærekraftig programvareutvikling minimerer ressursbruk og energiforbruk.
- Bevisste valg ved anskaffelse, drift og avhending reduserer miljøpåvirkningen.`,
    },
    {
      id: 'im-8-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-8-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er sirkulærøkonomi?',
        options: [
          'Å produsere mest mulig',
          'En modell der produkter repareres, gjenbrukes og resirkuleres i stedet for å kastes',
          'Å bare kjøpe nye produkter',
          'En type kryptovaluta',
        ],
        correctAnswer: 1,
        solution: 'Sirkulærøkonomi er en modell der produkter designes for lang levetid, repareres, gjenbrukes og resirkuleres i stedet for å kastes. Målet er å minimere avfall og maksimere verdien av materialene.',
      },
    },
    {
      id: 'im-8-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-8-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv tre konkrete tiltak en IT-avdeling kan gjøre for å redusere sin miljøpåvirkning.',
        solution: '1) Forlenge levetiden på utstyr ved å oppgradere komponenter (RAM, SSD) i stedet for å kjøpe nye maskiner, og bruke tynne klienter som krever mindre energi. 2) Velge grønn hosting for nettsider og tjenester - leverandører som bruker 100% fornybar energi og effektive kjøleløsninger. 3) Innføre en e-avfallsrutine der gammelt utstyr leveres til godkjent resirkulering, og fungerende utstyr doneres til skoler eller organisasjoner.',
      },
    },
    {
      id: 'im-8-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-8-6-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Omtrent hvor stor andel av verdens e-avfall resirkuleres forsvarlig?',
        options: [
          'Ca. 80%',
          'Ca. 50%',
          'Ca. 20%',
          'Ca. 5%',
        ],
        correctAnswer: 2,
        solution: 'Bare ca. 20% av verdens e-avfall resirkuleres forsvarlig. Resten havner på søppelfyllinger, eksporteres til utviklingsland eller behandles under farlige forhold. Dette er et stort miljø- og helseproblem.',
      },
    },
    {
      id: 'im-8-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-8-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hvordan programvareutvikling kan gjøres mer bærekraftig. Gi minst tre eksempler.',
        solution: '1) Effektiv kode: Optimalisert kode bruker mindre prosessorkraft, noe som betyr lavere energiforbruk på servere og brukerenheter. 2) Optimaliserte bilder og mediefiler: Komprimering av bilder og bruk av moderne formater som WebP reduserer dataoverføring og dermed energi i nettverk og datasentre. 3) Caching: Lagre data lokalt slik at brukeren ikke trenger å hente det på nytt fra serveren, noe som reduserer antall forespørsler og energiforbruk. 4) Grønn hosting: Velge serverleverandører som drives av fornybar energi.',
      },
    },
    {
      id: 'im-8-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-8-6-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva er det mest bærekraftige alternativet når en datamaskin blir treg?',
        options: [
          'Kjøpe en ny datamaskin umiddelbart',
          'Først prøve å oppgradere komponenter som RAM og SSD for å forlenge levetiden',
          'Kaste den i vanlig søppel',
          'Bruke den som den er uten å gjøre noe',
        ],
        correctAnswer: 1,
        solution: 'Det mest bærekraftige er å først forsøke å oppgradere komponenter (f.eks. bytte til SSD, øke RAM, reinstallere operativsystemet). Dette kan ofte gi en treg maskin nytt liv i flere år, og forlenger levetiden slik at man slipper å produsere og kjøpe en ny.',
      },
    },
    {
      id: 'im-8-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-8-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Reflekter over ditt eget forbruk av elektronikk. Hvor ofte bytter du telefon? Hva gjør du med gammelt utstyr? Foreslå tre ting du kan gjøre for å redusere ditt digitale fotavtrykk.',
        solution: 'Refleksjon bør inkludere ærlig vurdering av egen praksis. Tre forslag: 1) Bruke telefonen lenger - sette som mål å beholde den i minst 4 år i stedet for å oppgradere hvert 2. år. 2) Reparere i stedet for å kaste - bytte batteri, skjermbeskytter, eller reparere knust skjerm. 3) Levere gammelt utstyr til resirkulering i stedet for å la det ligge i en skuff - eller selge/donere fungerende utstyr slik at andre kan bruke det.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'E-avfall', definition: 'Kassert elektronisk utstyr som krever spesiell resirkulering.' },
    { term: 'Sirkulærøkonomi', definition: 'Økonomisk modell der produkter repareres, gjenbrukes og resirkuleres.' },
    { term: 'Grønn hosting', definition: 'Serverhosting som drives av fornybar energi.' },
    { term: 'Sjeldne jordarter', definition: 'Mineraler som brukes i elektronikk og utvinnes med stor miljøbelastning.' },
    { term: 'Karbonfotavtrykk', definition: 'Totale klimagassutslipp knyttet til en aktivitet eller et produkt.' },
    { term: 'Bærekraftig utvikling', definition: 'Utvikling som dekker nåtidens behov uten å ødelegge for fremtidige generasjoner.' },
  ],
};

// ============================================================================
// Kapittel 8.7: HMS og arbeidsmiljø i IT-bransjen
// ============================================================================

export const CHAPTER_IM_VG1_8_7: TextbookChapter = {
  id: 'im-vg1-8-7',
  courseId: 'im-vg1',
  chapterNumber: '8.7',
  title: 'HMS og arbeidsmiljø i IT-bransjen',
  description: 'Forstå kravene til helse, miljø og sikkerhet på arbeidsplassen, og lær om ergonomi og forebygging av belastningsskader.',
  estimatedMinutes: 40,
  competenceGoals: [
    'gjennomføre og dokumentere arbeid i tråd med gjeldende bestemmelser for helse, miljø og sikkerhet',
  ],
  content: [
    {
      id: 'im-8-7-intro',
      type: 'text',
      content: `## HMS og arbeidsmiljø i IT-bransjen

Selv om IT-arbeid ikke involverer tunge maskiner eller farlige kjemikalier, har bransjen sine egne HMS-utfordringer. Ergonomi, belastningsskader, skjermarbeid og psykososialt arbeidsmiljø er sentrale temaer. Å ta vare på helsen som IT-arbeider handler om forebygging - de problemene som oppstår av feil arbeidsstilling eller for mye skjermtid, kommer snikende over tid.

I dette kapittelet skal du lære:
- HMS-lovgivning og arbeidsmiljøloven
- Ergonomi ved skjermarbeid
- Belastningsskader og forebygging
- Psykososialt arbeidsmiljø og stressmestring`,
    },
    {
      id: 'im-8-7-text-1',
      type: 'text',
      content: `### HMS-lovgivning

**Arbeidsmiljøloven** regulerer arbeidsmiljøet i Norge. Den gjelder for alle arbeidsplasser.

**Arbeidsgiver plikter å:**
- Sørge for et fullt forsvarlig arbeidsmiljø
- Gjennomføre risikovurderinger
- Gi opplæring i HMS
- Ha verneombud og arbeidsmiljøutvalg

**Arbeidstaker plikter å:**
- Følge instrukser og sikkerhetsprosedyrer
- Bruke verneutstyr der det kreves
- Melde fra om farlige forhold
- Bidra til et godt arbeidsmiljø

**For skjermarbeid** gjelder forskrift om arbeid ved dataskjerm som stiller krav til utstyr, belysning og pauser.

### Ergonomi

**Riktig arbeidsstilling:**
- Skjermen i øyehøyde, en armlengdes avstand
- Underarmene horisontale, albuer i 90 grader
- Føttene flatt på gulvet, knær i 90 grader
- Rett rygg med støtte i korsryggen
- Skuldre avslappet, ikke hevet`,
    },
    {
      id: 'im-8-7-text-2',
      type: 'text',
      content: `### Belastningsskader

**Muskel- og skjelettplager** er vanlige ved skjermarbeid:
- **Nakke- og skuldersmerter**: Fra feil skjermhøyde og anspente skuldre
- **Karpaltunnelsyndrom**: Smerte i håndleddet fra gjentatte bevegelser
- **Tennisalbue**: Overbelastning av underarmen
- **Ryggplager**: Fra dårlig sittestilling

**Forebygging:**
- Ta pauser hvert 45-60 minutt - reis deg og strekk
- Varier arbeidsstilling (stå-/sittebord)
- Gjør strekkøvelser for nakke, skuldre og hender
- Juster utstyr til riktig høyde
- Bruk ergonomisk tastatur og mus ved behov

### Øyebelastning

**Dataøyesyndrom** (digital eye strain):
- Tørre, irriterte øyne
- Hodepine
- Uklart syn

**Forebygging (20-20-20-regelen):**
- Hvert 20. minutt
- Se på noe 20 fot (6 meter) unna
- I 20 sekunder`,
    },
    {
      id: 'im-8-7-text-3',
      type: 'text',
      content: `### Psykososialt arbeidsmiljø

IT-bransjen har utfordringer med:
- **Stress og tidspress**: Stramme frister og høye forventninger
- **Sosial isolasjon**: Mye alenearbeid foran skjermen
- **Grenseløst arbeid**: Vanskelig å skille jobb og fritid med hjemmekontor
- **Imposter-syndrom**: Følelsen av å ikke være god nok

**Tiltak:**
- Åpen kommunikasjon om arbeidsbelastning
- Tydelige grenser mellom jobb og fritid
- Sosialt samvær med kollegaer
- Fysisk aktivitet i arbeidsdagen
- Søke hjelp ved behov

### Risikovurdering

En **risikovurdering** identifiserer farer og vurderer risiko:
1. Hva kan gå galt?
2. Hvor sannsynlig er det?
3. Hvor alvorlig er konsekvensene?
4. Hva kan vi gjøre for å redusere risikoen?`,
    },
    {
      id: 'im-8-7-summary',
      type: 'text',
      content: `## Oppsummering

- HMS-lovgivningen stiller krav til helse, miljø og sikkerhet på arbeidsplassen.
- Ergonomi ved skjermarbeid omfatter riktig stol, skjermhøyde og pauserutiner.
- Belastningsskader kan forebygges med riktige arbeidsstillinger og regelmessige pauser.
- Psykososialt arbeidsmiljø handler om trivsel, relasjoner og mestring på jobb.
- Risikovurdering identifiserer farer og iverksetter forebyggende tiltak.
- Arbeidsgiver har hovedansvaret for HMS, men alle ansatte har medvirkningsplikt.`,
    },
    {
      id: 'im-8-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-8-7-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er 20-20-20-regelen?',
        options: [
          'Jobb 20 timer, hvil 20 timer, gjenta 20 ganger',
          'Hvert 20. minutt, se på noe 6 meter unna, i 20 sekunder',
          'Ta 20 minutters pause hver 20. time',
          'Skriv 20 linjer kode på 20 minutter',
        ],
        correctAnswer: 1,
        solution: '20-20-20-regelen forebygger øyebelastning fra skjermarbeid: Hvert 20. minutt, se på noe ca. 6 meter (20 fot) unna, i 20 sekunder. Dette lar øynene slappe av og fokusere på noe annet enn skjermen.',
      },
    },
    {
      id: 'im-8-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-8-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv en ergonomisk korrekt arbeidsstilling ved datamaskin med minst fem konkrete punkter.',
        solution: '1) Skjermen i øyehøyde - toppen av skjermen bør være i øyehøyde eller litt under, en armlengdes avstand. 2) Underarmene horisontale med albuer i ca. 90 grader, håndleddene rette. 3) Føttene flatt på gulvet med knær i ca. 90 grader - bruk fotstøtte om nødvendig. 4) Rett rygg med god støtte i korsryggen - stolen bør ha justerbar ryggstøtte. 5) Skuldre avslappet og senket - ikke hevet mot ørene. 6) God belysning uten gjenskinn på skjermen.',
      },
    },
    {
      id: 'im-8-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-8-7-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvem har ansvar for å melde fra om farlige forhold på arbeidsplassen?',
        options: [
          'Bare arbeidsgiver',
          'Bare verneombudet',
          'Alle arbeidstakere',
          'Bare HMS-ansvarlig',
        ],
        correctAnswer: 2,
        solution: 'Ifølge arbeidsmiljøloven plikter alle arbeidstakere å melde fra om farlige forhold de oppdager på arbeidsplassen. Det er alles ansvar å bidra til et trygt arbeidsmiljø.',
      },
    },
    {
      id: 'im-8-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-8-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Gjennomfør en enkel risikovurdering av din egen arbeidsplass (der du sitter med datamaskinen). Identifiser tre mulige risikoer og foreslå tiltak for å redusere dem.',
        solution: 'Eksempel: 1) Risiko: Feil skjermhøyde fører til nakkesmerter. Tiltak: Hev skjermen med en stabel bøker eller skjermarm til øyehøyde. 2) Risiko: For lange arbeidsøkter uten pauser gir øyebelastning og ryggplager. Tiltak: Sett timer for 45-minutters intervaller, gjør strekkøvelser i pausene. 3) Risiko: Dårlig belysning gir hodepine og øyeproblemer. Tiltak: Plasser arbeidsplassen ved vindu med naturlig lys, bruk skrivebordslampe som tillegg, unngå gjenskinn på skjermen.',
      },
    },
    {
      id: 'im-8-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-8-7-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva kan karpaltunnelsyndrom skyldes?',
        options: [
          'For lite søvn',
          'Gjentatte bevegelser i håndleddet fra tastatur- og musbruk',
          'For mye fysisk trening',
          'Dårlig nettforbindelse',
        ],
        correctAnswer: 1,
        solution: 'Karpaltunnelsyndrom skyldes kompresjon av nerven i karpaltunnelen i håndleddet, ofte forårsaket av gjentatte bevegelser som skriving og musbruk. Forebygging inkluderer ergonomisk tastatur, pauser og strekkøvelser.',
      },
    },
    {
      id: 'im-8-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-8-7-ex-6',
        number: '6',
        type: 'classic',
        task: 'Beskriv tre utfordringer knyttet til psykososialt arbeidsmiljø i IT-bransjen, og foreslå tiltak for å forebygge dem.',
        solution: '1) Stress og tidspress: Stramme frister og komplekse oppgaver kan gi kronisk stress. Tiltak: Realistisk planlegging, prioritering av oppgaver, åpen dialog med leder om arbeidsbelastning. 2) Sosial isolasjon: Mye skjermarbeid alene, spesielt med hjemmekontor. Tiltak: Faste sosiale treffpunkter, kaffe-møter, teamaktiviteter, bruke kontoret regelmessig. 3) Grenseløst arbeid: Mobil og laptop gjør det lett å jobbe døgnet rundt. Tiltak: Faste arbeidstider, skru av jobbvarsler etter arbeidstid, ha en dedikert arbeidsplass man forlater.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'HMS', definition: 'Helse, miljø og sikkerhet - krav til forsvarlig arbeidsmiljø.' },
    { term: 'Ergonomi', definition: 'Tilpasning av arbeidsplass og utstyr til menneskets behov.' },
    { term: 'Karpaltunnelsyndrom', definition: 'Nervekompresjon i håndleddet fra gjentatte bevegelser.' },
    { term: '20-20-20-regelen', definition: 'Hvert 20 min, se 6 meter unna, i 20 sekunder for å forebygge øyebelastning.' },
    { term: 'Risikovurdering', definition: 'Systematisk identifisering og vurdering av farer på arbeidsplassen.' },
    { term: 'Verneombud', definition: 'Arbeidstakernes representant for HMS-spørsmål på arbeidsplassen.' },
  ],
};

// ============================================================================
// Kapittel 8.8: Yrkesmuligheter og karriereveier
// ============================================================================

export const CHAPTER_IM_VG1_8_8: TextbookChapter = {
  id: 'im-vg1-8-8',
  courseId: 'im-vg1',
  chapterNumber: '8.8',
  title: 'Yrkesmuligheter og karriereveier',
  description: 'Utforsk yrker og karriereveier innen IT og medieproduksjon, og lær om videre utdanningsløp og bransjens behov.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjøre rede for og vurdere hvordan partene i arbeidslivet samarbeider for å utvikle et bedre arbeidsliv',
    'utforske og tilegne seg kunnskap om endringer innenfor teknologi og programvare ved å bruke ulike kilder',
  ],
  content: [
    {
      id: 'im-8-8-intro',
      type: 'text',
      content: `## Yrkesmuligheter og karriereveier

IT og medieproduksjon er en av de raskest voksende bransjene i verden. Etterspørselen etter kompetente fagfolk er høy, og yrkene er varierte - fra programmering og nettverksadministrasjon til grafisk design og videoproduksjon. Dette kapittelet gir deg oversikt over mulighetene som venter.

I dette kapittelet skal du lære:
- Yrker innen IT og medieproduksjon
- Lærlingordning og fagbrev
- Høyere utdanning innen IT og media
- Fremtidens kompetansebehov`,
    },
    {
      id: 'im-8-8-text-1',
      type: 'text',
      content: `### Yrker innen IT

**Utvikling og programmering:**
- Frontendutvikler: Bygger det brukeren ser (nettsider, apper)
- Backendutvikler: Bygger systemer bak kulissene (servere, databaser)
- Fullstack-utvikler: Behersker både frontend og backend
- Mobilutvikler: Lager apper for iOS og Android
- DevOps-ingeniør: Automatiserer utvikling og drift

**Infrastruktur og sikkerhet:**
- Systemadministrator: Drifter servere og nettverk
- Nettverksadministrator: Bygger og vedlikeholder nettverk
- Sikkerhetsanalytiker: Beskytter systemer mot cybertrusler
- Skyarkitekt: Designer løsninger i skyen (AWS, Azure, Google Cloud)

**Data og analyse:**
- Dataanalytiker: Finner innsikt i store datamengder
- Datavitenskaper: Bruker statistikk og maskinlæring
- Databaseadministrator: Administrerer og optimaliserer databaser`,
    },
    {
      id: 'im-8-8-text-2',
      type: 'text',
      content: `### Yrker innen medieproduksjon

**Visuelt:**
- Grafisk designer: Lager visuell kommunikasjon (logoer, plakater, profiler)
- UX-/UI-designer: Designer digitale brukeropplevelser
- Fotograf: Profesjonell fotografering for ulike formål
- Animatør: Lager animasjoner og motion graphics

**Video og lyd:**
- Videoprodusent: Planlegger og gjennomfører videoproduksjoner
- Filmfotograf: Ansvarlig for kamera og bildekvalitet
- Lydtekniker: Tar opp og bearbeider lyd
- Klipper: Redigerer video i postproduksjon

**Digitalt:**
- Webdesigner: Designer nettsider med fokus på UX og visuelt uttrykk
- Innholdsprodusent: Skaper innhold for sosiale medier og nett
- Digital markedsfører: Planlegger og gjennomfører digitale kampanjer

### Lærlingordning og fagbrev

Fra VG1 IM kan du gå videre til VG2 og deretter to år i lære for å ta **fagbrev** i:
- IKT-servicefag
- Mediegrafikerfaget
- Medieteknikerfaget

Fagbrev gir en formell yrkeskompetanse som er etterspurt i arbeidsmarkedet.`,
    },
    {
      id: 'im-8-8-text-3',
      type: 'text',
      content: `### Høyere utdanning

Med generell studiekompetanse (eller fagbrev + påbygg) kan du studere:
- **Informatikk/datavitenskap**: Bred IT-utdanning ved universiteter
- **Informasjonsteknologi**: Praktisk IT-utdanning ved høgskoler
- **Medieproduksjon**: Film, TV, lyd og mediefag
- **Grafisk design**: Visuell kommunikasjon og design
- **Interaksjonsdesign**: UX-design og digital brukeropplevelse
- **Spillutvikling**: Programmering og design av dataspill

### Fremtidens kompetansebehov

**Trender:**
- **Kunstig intelligens og maskinlæring**: Etterspørselen etter KI-kompetanse vokser raskt
- **Cybersikkerhet**: Økt digitalisering krever flere sikkerhetseksperter
- **Skyteknologi**: Flere tjenester flyttes til skyen
- **Bærekraftig IT**: Grønn teknologi og ansvarlig utvikling
- **Tverrfaglighet**: Kombinasjonen IT + annet fag (helse, jus, økonomi) er svært etterspurt

**Livslang læring**: IT-bransjen endrer seg raskt. Å holde seg oppdatert gjennom kurs, sertifiseringer og selvstudium er nødvendig gjennom hele karrieren.`,
    },
    {
      id: 'im-8-8-summary',
      type: 'text',
      content: `## Oppsummering

- IT- og mediebransjen tilbyr mange ulike yrkesroller fra utvikler til innholdsprodusent.
- Lærlingordning og fagbrev gir praktisk kompetanse og formell kvalifikasjon.
- Høyere utdanning ved universiteter og høyskoler gir fordypning innen IT og media.
- Bransjen etterspør kombinasjoner av teknisk, kreativ og kommunikativ kompetanse.
- Livslang læring er nødvendig fordi teknologien utvikler seg raskt.
- Fremtidens kompetansebehov inkluderer AI, datasikkerhet, bærekraft og brukeropplevelse.`,
    },
    {
      id: 'im-8-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-8-8-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom en frontendutvikler og en backendutvikler?',
        options: [
          'Frontend jobber med det brukeren ser, backend jobber med systemer bak kulissene',
          'Frontend jobber med servere, backend jobber med design',
          'Det er det samme',
          'Frontend jobber med lyd, backend jobber med video',
        ],
        correctAnswer: 0,
        solution: 'En frontendutvikler bygger det brukeren ser og interagerer med (nettsider, apper) ved hjelp av HTML, CSS og JavaScript. En backendutvikler bygger systemene bak kulissene (servere, databaser, API-er) som fronten kommuniserer med.',
      },
    },
    {
      id: 'im-8-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-8-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'Velg to yrker innen IT eller medieproduksjon som interesserer deg. Beskriv hva hvert yrke innebærer, og hvilken utdanning som kreves.',
        solution: 'Eksempel: 1) UX-designer: Planlegger og designer digitale brukeropplevelser. Gjennomfører brukerundersøkelser, lager wireframes og prototyper, gjennomfører brukertester. Utdanning: Bachelor i interaksjonsdesign, informatikk eller visuell kommunikasjon, eller relevant fagbrev + erfaring. 2) Cybersikkerhetsanalytiker: Beskytter organisasjoner mot digitale trusler. Overvåker systemer, analyserer sikkerhetshendelser, implementerer sikkerhetstiltak. Utdanning: Bachelor i IT-sikkerhet, informatikk eller nettverksadministrasjon, gjerne med sertifiseringer som CompTIA Security+ eller CISSP.',
      },
    },
    {
      id: 'im-8-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-8-8-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er et fagbrev?',
        options: [
          'En universitetsgrad',
          'En formell yrkeskompetanse oppnådd gjennom VG1-VG2 og to år i lære',
          'En autorisasjon for å drive firma',
          'Et kurs i bedriftsledelse',
        ],
        correctAnswer: 1,
        solution: 'Et fagbrev er en formell yrkeskompetanse som oppnås gjennom videregående opplæring (VG1 + VG2) etterfulgt av to år som lærling i en bedrift, avsluttet med fagprøve. Det gir kompetanse som er etterspurt i arbeidsmarkedet.',
      },
    },
    {
      id: 'im-8-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-8-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv tre trender som vil påvirke IT-bransjen i fremtiden, og forklar hvorfor de er viktige.',
        solution: '1) Kunstig intelligens: KI integreres i stadig flere produkter og tjenester. Viktig fordi det endrer hvordan vi jobber, automatiserer oppgaver og skaper nye muligheter. Kompetanse innen KI vil bli like grunnleggende som datakompetanse er i dag. 2) Cybersikkerhet: Med økende digitalisering og cyberkriminalitet trengs flere sikkerhetseksperter. Viktig fordi kostnaden av dataangrep for samfunnet er enorm, og alle organisasjoner trenger sikkerhetskompetanse. 3) Bærekraftig IT: Klimakrisen krever at IT-bransjen reduserer sitt fotavtrykk. Viktig fordi IT står for 2-3% av globale utslipp, og forbrukere og myndigheter stiller økende krav til bærekraft.',
      },
    },
    {
      id: 'im-8-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-8-8-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hvorfor er livslang læring spesielt viktig i IT-bransjen?',
        options: [
          'Det er lovpålagt',
          'Bransjen endrer seg raskt, og teknologier som er relevante i dag kan bli utdaterte i morgen',
          'Det er bare viktig for ledere',
          'Det er ikke viktigere her enn i andre bransjer',
        ],
        correctAnswer: 1,
        solution: 'IT-bransjen endrer seg raskere enn de fleste andre bransjer. Nye programmeringsspråk, rammeverk, verktøy og teknologier dukker opp kontinuerlig. Det som er cutting-edge i dag kan være utdatert om få år. Livslang læring er derfor nødvendig for å holde seg relevant.',
      },
    },
    {
      id: 'im-8-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-8-8-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en enkel karriereplan for deg selv innen IT eller medieproduksjon. Beskriv hva du vil jobbe med, hvilken utdanning du trenger, og tre steg du kan ta det neste året for å komme nærmere målet.',
        solution: 'Eksempel: Mål: Jobbe som UX-designer. Utdanning: Fullføre VG1 IM, ta VG2 Informasjonsteknologi, søke bachelor i interaksjonsdesign. Tre steg neste år: 1) Øve på Figma gjennom gratiskurs på YouTube og lage en liten portfolio med designprosjekter. 2) Lære grunnleggende HTML/CSS for å forstå tekniske muligheter og begrensninger. 3) Lese om UX-design (bøker, blogger, podcaster) og følge UX-designere på sosiale medier for inspirasjon og oppdatering på bransjetrender.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Frontendutvikler', definition: 'Utvikler som bygger det brukeren ser og interagerer med.' },
    { term: 'Backendutvikler', definition: 'Utvikler som bygger systemer bak kulissene (servere, databaser).' },
    { term: 'Fagbrev', definition: 'Formell yrkeskompetanse oppnådd gjennom opplæring og lærlingtid.' },
    { term: 'DevOps', definition: 'Praksis som kombinerer utvikling og drift for raskere, sikrere leveranser.' },
    { term: 'Livslang læring', definition: 'Kontinuerlig oppdatering av kunnskap og ferdigheter gjennom karrieren.' },
    { term: 'Fullstack', definition: 'Utvikler som behersker både frontend og backend.' },
  ],
};

// ============================================================================
// Eksport av del 8 kapitler
// ============================================================================

export const IM_VG1_DEL8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_IM_VG1_8_1,
  CHAPTER_IM_VG1_8_2,
  CHAPTER_IM_VG1_8_3,
  CHAPTER_IM_VG1_8_4,
  CHAPTER_IM_VG1_8_5,
  CHAPTER_IM_VG1_8_6,
  CHAPTER_IM_VG1_8_7,
  CHAPTER_IM_VG1_8_8,
];
