/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Treningslære 1 (VG2) - Seksjon 8: Treningsplanlegging
 *
 * Dekker LK20-kompetansemål for treningslære 1
 * 5 delkapitler (8.1–8.5): Periodisering, treningsprogrammer, testing og evaluering,
 * trening for ulike mål, og treningsveiledning
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 8.1: Periodisering
// ============================================================================

export const CHAPTER_TRENING_1_8_1: TextbookChapter = {
  id: 'trening-1-8-1',
  courseId: 'trening-1',
  chapterNumber: '8.1',
  title: 'Periodisering',
  description: 'Makrosyklus, mesosyklus, mikrosyklus og årsplanlegging for systematisk treningsutvikling.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forstå prinsippene bak periodisering av trening',
    'kunne forklare forskjellen mellom makro-, meso- og mikrosyklus',
    'kunne utforme en enkel årsplan for trening',
  ],
  keyTerms: [],
  content: [
    {
      id: 'tr-8-1-intro',
      type: 'text',
      content: `## Hva er periodisering?

Periodisering er den systematiske planleggingen av trening over tid. I stedet for å trene likt hele året, deler vi treningsåret inn i perioder med ulikt innhold og intensitet. Hensikten er å sikre at kroppen får riktig belastning til riktig tid, slik at utøveren er i best mulig form når det gjelder som mest.

Periodisering bygger på grunnleggende treningsprinsipper som overbelastning, progresjon og variasjon. Ved å planlegge treningen i sykluser unngår vi stagnasjon og overtrenning, samtidig som vi legger til rette for optimal utvikling over lang tid.

**Hvorfor periodisere?**
- Unngå overbelastning og skader
- Sikre variasjon i treningen
- Tilpasse formen til konkurransesesongen
- Bygge opp kapasitet systematisk
- Legge inn tilstrekkelig restitusjon`,
    },
    {
      id: 'tr-8-1-def-periodisering',
      type: 'definition',
      title: 'Periodisering',
      content: 'Periodisering er den planmessige inndelingen av trening i tidsperioder med ulik vektlegging av treningsinnhold, belastning og intensitet. Målet er å optimalisere treningseffekten og oppnå toppform til ønsket tidspunkt.',
    },
    {
      id: 'tr-8-1-makrosyklus',
      type: 'text',
      title: 'Makrosyklus',
      content: `En **makrosyklus** er den lengste planleggingsperioden og dekker vanligvis et helt treningsår (10–12 måneder), men kan også strekke seg over flere år, for eksempel en olympisk syklus på fire år.

Makrosyklusen deles typisk inn i tre hovedfaser:

**1. Forberedelsesperioden (oppkjøringsfase)**
- Bygge et bredt fysisk grunnlag
- Høyt treningsvolum, moderat intensitet
- Generell trening i starten, mer spesifikk trening mot slutten
- Varer ofte 3–6 måneder

**2. Konkurranseperioden**
- Vedlikeholde fysisk kapasitet, fokus på prestasjoner
- Lavere volum, høyere intensitet
- Spesifikk trening tilpasset idretten
- Varer gjennom sesongen

**3. Overgangsperioden (hvile og restitusjon)**
- Aktiv hvile og mental restitusjon
- Lav intensitet og lavt volum
- Alternative aktiviteter og lek
- Varer 2–6 uker`,
    },
    {
      id: 'tr-8-1-def-makrosyklus',
      type: 'definition',
      title: 'Makrosyklus',
      content: 'En makrosyklus er den overordnede treningsplanen som dekker en lang periode, typisk et treningsår eller en olympisk fireårssyklus. Den gir en helhetlig oversikt over treningens hovedfaser og mål.',
    },
    {
      id: 'tr-8-1-mesosyklus',
      type: 'text',
      title: 'Mesosyklus',
      content: `En **mesosyklus** er en mellomperiode som typisk varer 3–6 uker. Hver mesosyklus har et spesifikt treningsmål og bygger videre på den forrige.

**Eksempler på mesosykluser i en forberedelsesperiode:**

| Mesosyklus | Varighet | Fokus | Intensitet |
|------------|----------|-------|------------|
| Grunntrening 1 | 4 uker | Aerob base, generell styrke | Lav–moderat |
| Grunntrening 2 | 4 uker | Økt volum, spesifikk styrke | Moderat |
| Oppbygging | 4 uker | Spesifikk utholdenhet, kraft | Moderat–høy |
| Toppfase | 3 uker | Maksimal intensitet, tapering | Høy |

Hver mesosyklus bør avsluttes med en lettere uke (deload) for å sikre restitusjon og superkompensasjon før neste fase starter.`,
    },
    {
      id: 'tr-8-1-mikrosyklus',
      type: 'text',
      title: 'Mikrosyklus',
      content: `En **mikrosyklus** er den korteste planleggingsenheten og varer vanligvis én uke (7 dager). Mikrosyklusen beskriver det konkrete treningsopplegget for hver dag.

**Innholdet i en mikrosyklus bestemmes av:**
- Treningsfasen i mesosyklusen
- Utøverens dagsform og restitusjonsstatus
- Praktiske hensyn (arbeid, skole, reise)
- Konkurranser og kamper

**Eksempel på en mikrosyklus (uke) for en ballspiller:**

| Dag | Økttema | Intensitet |
|-----|---------|------------|
| Mandag | Styrke underkropp + sprint | Høy |
| Tirsdag | Lagtrening taktikk | Moderat |
| Onsdag | Hviledag / restitusjon | Lav |
| Torsdag | Styrke overkropp + utholdenhet | Moderat–høy |
| Fredag | Lettere lagtrening, kampforberedelse | Lav–moderat |
| Lørdag | Kamp | Høy |
| Søndag | Hvile | Restitusjon |`,
    },
    {
      id: 'tr-8-1-def-mikrosyklus',
      type: 'definition',
      title: 'Mikrosyklus',
      content: 'En mikrosyklus er den minste planleggingsenheten i periodiseringen, vanligvis én uke. Den inneholder det konkrete treningsopplegget med økter, intensitet og restitusjon for hver dag.',
    },
    {
      id: 'tr-8-1-aarsplan',
      type: 'text',
      title: 'Årsplan',
      content: `En **årsplan** gir en visuell oversikt over hele treningsåret. Den viser hvordan makro-, meso- og mikrosykluser henger sammen.

**En god årsplan inneholder:**
- Konkurransedatoer og viktige mål
- Fordeling av forberedelse, konkurranse og overgangsfaser
- Mesosykluser med hovedfokus for hver periode
- Planlagte tester og evalueringspunkter
- Ferier og andre avbrekk

**Lineær vs. undulerende periodisering:**

Ved **lineær periodisering** øker intensiteten gradvis gjennom sesongen, mens volumet reduseres. Dette er den klassiske modellen og passer godt for utøvere med én hovedkonkurranse per år.

Ved **undulerende periodisering** varieres intensitet og volum fra uke til uke eller økt til økt. Dette kan gi bedre tilpasning for utøvere som konkurrerer gjennom hele sesongen.`,
    },
    {
      id: 'tr-8-1-example-1',
      type: 'example',
      title: 'Eksempel: Årsplan for en langrennsløper',
      problem: 'Lag en forenklet årsplan for en langrennsløper som har hovedmål i NM i mars.',
      solution: `**Årsplan:**

**Mai–juni (overgangsperiode, 8 uker):** Aktiv hvile, alternative aktiviteter som sykling, padling og fotball. Lav intensitet, mental restitusjon.

**Juli–august (grunntrening, 8 uker):** Bygging av aerob base med langtur og rolig trening. Generell styrketrening. Høyt volum, lav–moderat intensitet.

**September–oktober (oppbygging, 8 uker):** Spesifikk utholdenhetstrening med intervalløkter. Rulleski med staking og skating. Økende intensitet.

**November–desember (tidlig konkurranse, 8 uker):** Overgangen til snøtrening. Spesifikke intervaller på ski. Første renn brukes som formsjekk.

**Januar–februar (hovedoppbygging, 8 uker):** Høy spesifisitet, intensitetstopper. Siste harde treningsblokker. Tapering de siste 2 ukene.

**Mars (hovedkonkurranse):** Redusert volum, opprettholdelse av intensitet. Fullt fokus på prestasjon i NM.

**April (overgangsperiode, 4 uker):** Gradvis nedtrapping, mental og fysisk restitusjon.`,
    },
    {
      id: 'tr-8-1-tip-1',
      type: 'tip',
      title: 'Tips for periodisering',
      content: `Selv om du ikke er toppidrettsutøver, kan du bruke periodisering i din egen trening. Varier belastningen fra uke til uke, planlegg hardere og lettere perioder, og sørg for at du har perioder med restitusjon innimellom. En enkel tommelfingerregel er 3:1 – tre uker med progressiv belastning etterfulgt av én lettere uke.`,
    },
    {
      id: 'tr-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr-8-1-ex-1',
        number: '8.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en makrosyklus?',
        multipleChoiceOptions: [
          'Den overordnede treningsplanen som dekker et helt treningsår eller lenger',
          'En treningsperiode på 3–6 uker med et spesifikt mål',
          'En ukeplan med daglige treningsøkter',
          'En enkelt treningsøkt med oppvarming og hoveddel',
        ],
        hints: ['Tenk på den lengste planleggingsperioden i periodisering'],
        solution: 'En makrosyklus er den overordnede treningsplanen som dekker en lang periode, typisk et helt treningsår (10–12 måneder) eller en olympisk fireårssyklus. Den gir en helhetlig oversikt over treningens hovedfaser.',
      },
    },
    {
      id: 'tr-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr-8-1-ex-2',
        number: '8.1.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken rekkefølge er riktig for de tre hovedfasene i en makrosyklus?',
        multipleChoiceOptions: [
          'Forberedelsesperiode – konkurranseperiode – overgangsperiode',
          'Overgangsperiode – konkurranseperiode – forberedelsesperiode',
          'Konkurranseperiode – forberedelsesperiode – overgangsperiode',
          'Forberedelsesperiode – overgangsperiode – konkurranseperiode',
        ],
        hints: ['Tenk logisk: hva må komme først for å bygge form?'],
        solution: 'Riktig rekkefølge er forberedelsesperiode (oppkjøring), konkurranseperiode (prestasjon) og overgangsperiode (hvile). Man bygger først et grunnlag, konkurrer så, og tar deretter en restitusjonsfase.',
      },
    },
    {
      id: 'tr-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr-8-1-ex-3',
        number: '8.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom lineær og undulerende periodisering. Gi et eksempel på når hver modell passer best.',
        hints: ['Tenk på hvor mange hovedkonkurranser utøveren har i løpet av sesongen'],
        solution: 'Lineær periodisering innebærer en gradvis økning av intensiteten gjennom sesongen, mens volumet reduseres. Denne modellen passer best for utøvere med én eller få hovedkonkurranser per år, for eksempel en friidrettsutøver som forbereder seg til NM. Undulerende periodisering varierer intensitet og volum fra uke til uke eller økt til økt. Denne modellen passer bedre for utøvere som konkurrerer gjennom hele sesongen, som fotballspillere eller håndballspillere, fordi den gir mulighet til å opprettholde et bredt sett av fysiske egenskaper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr-8-1-ex-4',
        number: '8.1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en enkel mikrosyklus (ukeplan) for en elev som trener styrke tre ganger i uken og løper to ganger i uken. Husk å legge inn restitusjonsdager.',
        hints: ['Sørg for at du ikke legger tunge styrkeøkter rett etter hverandre'],
        solution: 'Eksempel: Mandag – styrketrening overkropp (moderat–høy intensitet). Tirsdag – rolig løpetur 30–40 min (lav intensitet). Onsdag – styrketrening underkropp (høy intensitet). Torsdag – hviledag eller lett tøying. Fredag – styrketrening helkropp (moderat). Lørdag – intervalltrening løping 4×4 min (høy intensitet). Søndag – hviledag. Planen gir variasjon mellom muskelgrupper og energisystemer, og legger inn restitusjon mellom de tyngste øktene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr-8-1-ex-5',
        number: '8.1.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvorfor periodisering er viktig for å unngå overtrenning. Bruk begrepene makrosyklus, mesosyklus, mikrosyklus og superkompensasjon i svaret ditt.',
        hints: ['Tenk på hva som skjer hvis kroppen belastes hardt uten planlagte lettuker'],
        solution: 'Periodisering er avgjørende for å unngå overtrenning fordi det sikrer en balanse mellom belastning og restitusjon på alle nivåer. På makrosyklusnivå sørger overgangsperioden for langvarig mental og fysisk restitusjon. I mesosyklusene planlegges det lettuker (deload) etter 3–4 uker med progressiv belastning, slik at kroppen får tid til superkompensasjon. I mikrosyklusen fordeles harde og lette økter slik at muskelgrupper og energisystemer får restituert seg mellom belastninger. Uten periodisering risikerer man at treningsbelastningen stadig øker uten tilstrekkelig restitusjon, noe som fører til at superkompensasjonen uteblir og kroppen gradvis brytes ned – altså overtrenning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-8-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr-8-1-ex-6',
        number: '8.1.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En håndballspiller har seriespill fra september til april og sluttspill i mai. Skisser en forenklet årsplan med passende makro-, meso- og mikrosyklusfordelinger. Begrunn valgene dine.',
        hints: ['Husk at håndball krever prestasjon gjennom en lang sesong – undulerende periodisering kan være aktuelt'],
        solution: 'Årsplan: Juni (overgangsperiode, 4 uker) – aktiv hvile, alternative aktiviteter. Juli–august (forberedelsesperiode, 8 uker) – to mesosykluser: grunntrening (4 uker med høyt volum, generell styrke og aerob base) og oppbygging (4 uker med spesifikk styrke, hurtighet og spesifikk utholdenhet). September–april (konkurranseperiode, 32 uker) – undulerende periodisering med ukentlige mikrosykluser tilpasset kampprogram. Hver mesosyklus på 4 uker med 3 uker moderat–høy belastning og 1 lettuke. Fokus på vedlikehold av styrke og utholdenhet samt kampspesifikk trening. April–mai (sluttspill) – redusert volum, høy intensitet, tapering mot sluttspill. Undulerende modell velges fordi utøveren må prestere i kamper gjennom hele sesongen, ikke bare ved ett tidspunkt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.2: Treningsprogrammer
// ============================================================================

export const CHAPTER_TRENING_1_8_2: TextbookChapter = {
  id: 'trening-1-8-2',
  courseId: 'trening-1',
  chapterNumber: '8.2',
  title: 'Treningsprogrammer',
  description: 'Helkroppsprogram, splitprogram, push/pull/legs og undulerende programmering.',
  estimatedMinutes: 25,
  competenceGoals: [
    'kjenne til ulike måter å organisere styrketreningsprogrammer på',
    'kunne vurdere fordeler og ulemper med ulike programtyper',
    'kunne tilpasse treningsprogram til individuelle behov',
  ],
  keyTerms: [],
  content: [
    {
      id: 'tr-8-2-intro',
      type: 'text',
      content: `## Treningsprogrammer

Et treningsprogram er en strukturert plan som beskriver hvilke øvelser du skal gjøre, hvor mye du skal trene, og hvordan treningen er organisert over tid. Det finnes mange måter å organisere et treningsprogram på, og valget avhenger av dine mål, erfaring og tilgjengelig tid.

I dette kapittelet ser vi på de vanligste programtypene for styrketrening og hvordan du velger riktig program for din situasjon.`,
    },
    {
      id: 'tr-8-2-helkropp',
      type: 'text',
      title: 'Helkroppsprogram',
      content: `Et **helkroppsprogram** trener alle de store muskelgruppene i hver treningsøkt. Dette er den mest grunnleggende programtypen og anbefales for nybegynnere.

**Typisk oppsett:**
- 2–3 treningsøkter per uke
- 1–2 øvelser per muskelgruppe per økt
- Flerleddsøvelser som knebøy, markløft, benkpress og roing
- Hviledager mellom øktene

**Fordeler:**
- Hver muskelgruppe trenes 2–3 ganger per uke
- Høy treningsfrekvens per muskelgruppe gir god stimulering
- Enkelt å planlegge og følge
- Effektivt for nybegynnere og de med begrenset tid

**Ulemper:**
- Øktene kan bli lange hvis mange øvelser inkluderes
- Begrenset volum per muskelgruppe per økt
- Kan bli for lite variasjon for erfarne utøvere`,
    },
    {
      id: 'tr-8-2-def-helkropp',
      type: 'definition',
      title: 'Helkroppsprogram',
      content: 'Et helkroppsprogram er en treningsplan der alle kroppens store muskelgrupper trenes i hver økt. Programmet brukes typisk 2–3 ganger per uke med hviledager mellom øktene, og egner seg godt for nybegynnere og mosjonister.',
    },
    {
      id: 'tr-8-2-split',
      type: 'text',
      title: 'Splitprogram',
      content: `Et **splitprogram** deler kroppen inn i deler som trenes på forskjellige dager. Dette gir mulighet for høyere volum per muskelgruppe og mer variasjon i treningen.

**Vanlige split-varianter:**

**2-dagers split (overkropp/underkropp):**
- Dag A: Overkropp (bryst, rygg, skuldre, armer)
- Dag B: Underkropp (lår, bein, rumpe, kjernemuskulatur)
- Trenes 4 dager per uke (A–B–hvile–A–B–hvile–hvile)

**3-dagers split:**
- Dag A: Bryst og triceps
- Dag B: Rygg og biceps
- Dag C: Bein og skuldre
- Trenes 3–6 dager per uke

**Fordeler:**
- Mer volum per muskelgruppe per økt
- Kortere økter
- Mer rom for isolasjonsøvelser
- Bedre for viderekomne utøvere

**Ulemper:**
- Lavere treningsfrekvens per muskelgruppe
- Krever flere treningsdager per uke
- Mer komplisert planlegging`,
    },
    {
      id: 'tr-8-2-ppl',
      type: 'text',
      title: 'Push/Pull/Legs (PPL)',
      content: `**Push/Pull/Legs** er en populær 3-dagers split som organiserer øvelser etter bevegelsesmønster i stedet for muskelgrupper.

**Push-dag (skyveøvelser):**
- Brystpress, skulderpress, dips
- Trener: bryst, fremre skulder, triceps

**Pull-dag (trekkøvelser):**
- Roing, chin-ups, ansiktstrekk
- Trener: rygg, bakre skulder, biceps

**Legs-dag (beinøvelser):**
- Knebøy, markløft, utfall, legcurl
- Trener: lår, rumpe, legger

**Typisk ukeprogram:**
| Dag | Treningsøkt |
|-----|-------------|
| Mandag | Push |
| Tirsdag | Pull |
| Onsdag | Legs |
| Torsdag | Hvile |
| Fredag | Push |
| Lørdag | Pull |
| Søndag | Legs |

PPL er svært populært fordi det kombinerer fordelene med en split (høyt volum) og relativt høy frekvens (hver muskelgruppe trenes to ganger per uke ved 6 økter).`,
    },
    {
      id: 'tr-8-2-undulerende',
      type: 'text',
      title: 'Undulerende programmering',
      content: `**Undulerende periodisering** i et treningsprogram betyr at intensitet og volum varieres systematisk fra økt til økt eller uke til uke, i stedet for å holdes konstant over lengre perioder.

**Daglig undulerende periodisering (DUP):**

| Dag | Fokus | Sett × Reps | Intensitet |
|-----|-------|-------------|------------|
| Mandag | Hypertrofi | 4×10 | 70% av 1RM |
| Onsdag | Styrke | 5×5 | 82% av 1RM |
| Fredag | Kraft/power | 5×3 | 90% av 1RM |

**Fordeler:**
- Trener flere egenskaper i samme uke
- Variasjon forebygger stagnasjon og monotoni
- Kan gi bedre resultater enn lineær progresjon for viderekomne
- Fleksibelt og tilpasningsdyktig

**Ulemper:**
- Krever mer kunnskap om belastningsstyring
- Kan være forvirrende for nybegynnere
- Vanskeligere å måle fremgang på kort sikt`,
    },
    {
      id: 'tr-8-2-note-valg',
      type: 'note',
      title: 'Hvordan velge riktig program?',
      content: `Valg av treningsprogram bør baseres på:

- **Treningserfaring**: Nybegynnere bør starte med helkropp, viderekomne kan bruke split eller PPL
- **Tilgjengelig tid**: Helkropp krever færre dager, split og PPL krever flere
- **Mål**: Generell styrke → helkropp, muskelbygging → split/PPL, prestasjon → undulerende
- **Preferanser**: Du vil trene mer konsistent med et program du liker

Det beste treningsprogrammet er det du faktisk gjennomfører over tid.`,
    },
    {
      id: 'tr-8-2-example-1',
      type: 'example',
      title: 'Eksempel: Valg av program',
      problem: 'En 17-åring har trent styrke i ett år med helkroppsprogram tre ganger i uken. Hun begynner å stagnere og ønsker å trene mer. Hvilken programtype vil du anbefale, og hvorfor?',
      solution: `**Anbefaling: Overkropp/underkropp-split (2-dagers split)**

**Begrunnelse:**
Etter ett år med helkroppstrening har utøveren god grunnstyrke og teknikk i de store øvelsene. En overkropp/underkropp-split gir:

1. **Mer volum per muskelgruppe** – hver økt kan inneholde flere øvelser for færre muskelgrupper
2. **Fortsatt høy frekvens** – med 4 økter per uke trenes hver muskelgruppe 2 ganger
3. **Overkommelig steg** – ikke for stor økning i kompleksitet fra helkropp
4. **Kortere økter** – selv om det er flere dager, er hver økt kortere og mer fokusert

PPL med 6 økter per uke ville vært for mye for en 17-åring som også har skole og eventuelt annen idrett. En standard 3-dagers split gir lavere frekvens per muskelgruppe, noe som er suboptimalt.`,
    },
    {
      id: 'tr-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr-8-2-ex-1',
        number: '8.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken programtype anbefales vanligvis for nybegynnere i styrketrening?',
        multipleChoiceOptions: [
          'Helkroppsprogram',
          'Push/Pull/Legs',
          '5-dagers split',
          'Undulerende periodisering',
        ],
        hints: ['Nybegynnere trenger å trene grunnleggende bevegelsesmønstre ofte'],
        solution: 'Helkroppsprogram anbefales for nybegynnere fordi det gir høy treningsfrekvens per muskelgruppe (2–3 ganger per uke), er enkelt å følge, og fokuserer på de store flerleddsøvelsene som bygger et godt grunnlag.',
      },
    },
    {
      id: 'tr-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr-8-2-ex-2',
        number: '8.2.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva inneholder en typisk «push-dag» i et Push/Pull/Legs-program?',
        multipleChoiceOptions: [
          'Brystpress, skulderpress og tricepsøvelser',
          'Roing, chin-ups og bicepsøvelser',
          'Knebøy, markløft og utfall',
          'Planke, crunches og ryggekstensjon',
        ],
        hints: ['Tenk på hvilke muskler som jobber når du skyver noe fra deg'],
        solution: 'En push-dag inneholder skyveøvelser som brystpress, skulderpress og dips. Musklene som trenes er bryst, fremre skulder og triceps – altså muskler som jobber når du skyver noe fra deg.',
      },
    },
    {
      id: 'tr-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr-8-2-ex-3',
        number: '8.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva undulerende periodisering innebærer i et treningsprogram, og gi et konkret eksempel på hvordan man kan variere belastningen gjennom en uke.',
        hints: ['Tenk på å variere sett, repetisjoner og intensitet mellom øktene'],
        solution: 'Undulerende periodisering betyr at intensitet og volum varieres systematisk fra økt til økt i stedet for å holdes likt over lengre perioder. Et eksempel: Mandag trener man hypertrofi med 4 sett × 10 repetisjoner på 70% av 1RM, onsdag trener man styrke med 5 sett × 5 repetisjoner på 82% av 1RM, og fredag trener man kraft med 5 sett × 3 repetisjoner på 90% av 1RM. Slik trenes ulike egenskaper i samme uke, noe som forebygger stagnasjon og gir bredere utvikling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr-8-2-ex-4',
        number: '8.2.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett opp et helkroppsprogram med 6–8 øvelser som dekker alle de store muskelgruppene. Begrunn øvelsesvalget ditt.',
        hints: ['Inkluder minst én øvelse for bryst, rygg, skuldre, bein og kjernemuskulatur'],
        solution: 'Eksempel helkroppsprogram: 1) Knebøy (3×8) – trener lår, rumpe og kjernemuskulatur, grunnleggende flerleddsøvelse. 2) Benkpress (3×8) – trener bryst, fremre skulder og triceps. 3) Romaskin eller bøyd over roing (3×10) – trener rygg og biceps. 4) Skulderpress (3×10) – trener skuldre og triceps. 5) Markløft (3×6) – trener bakside lår, rygg og rumpe. 6) Planke (3×45 sek) – trener kjernemuskulatur. 7) Chin-ups eller nedtrekk (3×8) – trener øvre rygg og biceps. Programmet prioriterer flerleddsøvelser som trener flere muskler samtidig, gir et bredt treningsgrunnlag og kan gjennomføres på ca. 60 minutter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-8-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr-8-2-ex-5',
        number: '8.2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign helkroppsprogram, overkropp/underkropp-split og Push/Pull/Legs med hensyn til treningsfrekvens, volum per muskelgruppe, og hvem programtypene passer for. Bruk en tabell i svaret ditt.',
        hints: ['Tenk på fordeler og ulemper ved hver programtype for ulike treningsnivåer'],
        solution: 'Helkroppsprogram: 2–3 økter/uke, høy frekvens per muskelgruppe (2–3x/uke), lavt–moderat volum per økt, passer nybegynnere og mosjonister med begrenset tid. Overkropp/underkropp-split: 4 økter/uke, moderat–høy frekvens (2x/uke per muskelgruppe), moderat volum per økt, passer lett viderekomne og de som kan trene 4 dager. PPL: 6 økter/uke, høy frekvens (2x/uke per muskelgruppe), høyt volum per økt, passer viderekomne med god tid og motivasjon. Frekvens per muskelgruppe er viktig for stimulering. Helkropp gir høyest frekvens med færrest økter, men begrenset volum. PPL gir både høy frekvens og høyt volum, men krever mest tid. For de fleste vil overkropp/underkropp-split være en god mellomløsning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-8-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr-8-2-ex-6',
        number: '8.2.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En fotballspiller på 18 år ønsker å bli sterkere og mer eksplosiv, men har lagtrening 4 dager i uken. Foreslå et styrketreningsprogram som passer for ham, og begrunn programtype, øvelsesvalg og plassering i uken.',
        hints: ['Husk at lagtrening allerede gir høy belastning – styrketreningen må tilpasses'],
        solution: 'Anbefaling: 2 helkroppsøkter per uke med fokus på styrke og eksplosivitet. Økt A (mandag, etter hviledag): Knebøy 4×5, benkpress 3×6, roing 3×8, plyometriske hopp 3×5, planke 3×30 sek. Økt B (torsdag, før lett trening fredag): Markløft 4×5, skulderpress 3×6, chin-ups 3×8, sprintdrag 4×20 m, russisk vri 3×12. Begrunnelse: Helkropp velges fordi det gir tilstrekkelig stimulering med kun 2 økter, uten å konkurrere for mye med lagtreningen. Flerleddsøvelser prioriteres for overførbarhet til fotball. Plyometri og sprint inkluderes for eksplosivitet. Øktene legges på dager med mest restitusjon tilgjengelig. Lav–moderat volum per økt for å unngå overbelastning i kombinasjon med 4 lagtreninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.3: Testing og evaluering
// ============================================================================

export const CHAPTER_TRENING_1_8_3: TextbookChapter = {
  id: 'trening-1-8-3',
  courseId: 'trening-1',
  chapterNumber: '8.3',
  title: 'Testing og evaluering',
  description: 'Fysiske tester, 1RM-testing, Cooper-test, bip-test og bruk av treningsdagbok.',
  estimatedMinutes: 25,
  competenceGoals: [
    'kjenne til ulike fysiske tester og deres formål',
    'kunne gjennomføre og tolke resultater fra standardiserte tester',
    'forstå verdien av systematisk evaluering og treningsdagbok',
  ],
  keyTerms: [],
  content: [
    {
      id: 'tr-8-3-intro',
      type: 'text',
      content: `## Hvorfor teste og evaluere?

Testing og evaluering er en sentral del av treningsplanlegging. Uten å vite hvor du står, er det vanskelig å planlegge hvor du skal. Tester gir objektive data som kan brukes til å:

- Kartlegge nåværende fysisk form
- Sette realistiske treningsmål
- Tilpasse treningsprogrammet
- Måle fremgang over tid
- Motivere utøveren med konkrete resultater

God testing følger vitenskapelige prinsipper som **validitet** (tester vi det vi ønsker å teste?), **reliabilitet** (gir testen samme resultat ved gjentatte målinger?) og **standardisering** (gjennomføres testen likt hver gang?).`,
    },
    {
      id: 'tr-8-3-def-validitet',
      type: 'definition',
      title: 'Validitet og reliabilitet',
      content: 'Validitet handler om hvorvidt en test faktisk måler det den er ment å måle. Reliabilitet handler om påliteligheten til testresultatene – at gjentatte målinger gir tilnærmet like resultater under like betingelser. En god fysisk test må ha både høy validitet og høy reliabilitet.',
    },
    {
      id: 'tr-8-3-1rm',
      type: 'text',
      title: '1RM-testing (styrke)',
      content: `**1RM (én repetisjons maksimum)** er den tyngste vekten du kan løfte én gang med korrekt teknikk i en gitt øvelse. 1RM er gullstandarden for måling av maksimal styrke.

**Gjennomføring av 1RM-test:**

1. Grundig oppvarming (5–10 min generell + spesifikk)
2. Oppvarmingssett: 10 reps × 50%, 5 reps × 70%, 3 reps × 80%, 1 rep × 90%
3. Forsøk 1: Estimert 1RM (1 rep)
4. Hvile 3–5 minutter mellom forsøk
5. Juster vekt opp eller ned basert på forsøket
6. Maks 3–5 forsøk for å unngå utmattelse

**Estimering av 1RM fra submaksimale løft:**

Hvis direkte 1RM-testing ikke er ønskelig (f.eks. for nybegynnere), kan man estimere 1RM ut fra submaksimale tester:

- **Epley-formelen**: 1RM = vekt × (1 + reps / 30)
- Eksempel: 60 kg × 8 reps → 1RM ≈ 60 × (1 + 8/30) = 76 kg

**Vanlige 1RM-øvelser:**
- Benkpress (overkroppsstyrke)
- Knebøy (underkroppsstyrke)
- Markløft (total kroppsstyrke)`,
    },
    {
      id: 'tr-8-3-warning-1rm',
      type: 'warning',
      title: 'Sikkerhet ved 1RM-testing',
      content: 'Direkte 1RM-testing bør kun gjennomføres av personer med god løfteteknikk og tilstrekkelig treningsbakgrunn. Bruk alltid spotter (hjelper) ved benkpress og knebøy. For nybegynnere og unge utøvere er submaksiml testing (f.eks. 5RM eller estimering) tryggere og mer hensiktsmessig.',
    },
    {
      id: 'tr-8-3-cooper',
      type: 'text',
      title: 'Cooper-test (utholdenhet)',
      content: `**Cooper-testen** er en klassisk utholdenhetsttest utviklet av dr. Kenneth Cooper i 1968. Testen måler aerob utholdenhet og estimerer maksimalt oksygenopptak (VO₂maks).

**Gjennomføring:**
- Løp så langt du kan på **12 minutter**
- Gjennomføres på flat bane (ideelt 400 m løpebane)
- Mål distansen i meter

**Resultattabell (gutter 17–20 år):**

| Vurdering | Distanse |
|-----------|----------|
| Svært god | > 3000 m |
| God | 2500–3000 m |
| Gjennomsnittlig | 2200–2499 m |
| Under gjennomsnitt | 1900–2199 m |
| Svak | < 1900 m |

**Estimering av VO₂maks:**
VO₂maks ≈ (distanse i meter − 504,9) / 44,73

**Eksempel:** 2600 m → VO₂maks ≈ (2600 − 504,9) / 44,73 ≈ 46,8 ml/kg/min`,
    },
    {
      id: 'tr-8-3-biptest',
      type: 'text',
      title: 'Bip-test (pieptest)',
      content: `**Bip-testen** (også kalt pieptesten eller multistage fitness test) er en progressiv utholdenhetsttest som måler aerob kapasitet.

**Gjennomføring:**
- To linjer med 20 meters avstand
- Et lydsignal (bip) angir tempoet
- Løp mellom linjene og vær på plass ved hvert bip
- Tempoet øker gradvis for hvert nivå
- Testen starter på ca. 8,5 km/t og øker med 0,5 km/t per nivå
- Testen avsluttes når du ikke rekker linjen to ganger på rad

**Fordeler sammenlignet med Cooper-test:**
- Selvregulerende intensitet (trenger ikke eget tempo)
- Kan gjennomføres innendørs
- Standardisert hastighetsøkning
- Lettere å motivere seg (ett bip om gangen)

**Resultatet oppgis som nivå og shuttle:**
- Eksempel: Nivå 10, shuttle 5 → skriver 10.5
- Kan konverteres til estimert VO₂maks via tabeller`,
    },
    {
      id: 'tr-8-3-andre-tester',
      type: 'text',
      title: 'Andre vanlige tester',
      content: `**Bevegelighet:**
- **Sit and reach**: Måler bevegelighet i hamstrings og korsrygg
- **Skulderbevegelighet**: Hånden bak ryggen – mål avstand mellom hendene

**Hurtighet og eksplosivitet:**
- **Sprinttest (40 m)**: Måler akselerasjon og toppfart
- **Sargenttest (vertikalhopp)**: Måler eksplosiv beinkraft
- **T-test**: Måler hurtighet med retningsendringer

**Muskulær utholdenhet:**
- **Push-ups på tid**: Antall push-ups på 60 sekunder
- **Sit-ups på tid**: Antall sit-ups på 60 sekunder
- **Planketest**: Hvor lenge du holder plankeposisjon

**Kroppssammensetning:**
- **KMI (BMI)**: Vekt (kg) / høyde² (m) – grovt mål, skiller ikke fett og muskler
- **Hudfoldmåling**: Måler underhudsfett med kaliper
- **Midjemål**: Enkel indikator på bukfett`,
    },
    {
      id: 'tr-8-3-dagbok',
      type: 'text',
      title: 'Treningsdagbok',
      content: `En **treningsdagbok** er et systematisk verktøy for å loggføre og evaluere treningen din. Den gir verdifull innsikt i treningsbelastning, utvikling og mønstre over tid.

**Hva bør du notere?**
- Dato og klokkeslett
- Øvelser, sett, repetisjoner og vekt
- Intensitet (RPE-skala 1–10 eller pulssoner)
- Varighet på økten
- Søvn og energinivå
- Dagsform og eventuelle plager
- Treningstype (styrke, utholdenhet, etc.)

**RPE-skalaen (Rate of Perceived Exertion):**

| RPE | Beskrivelse |
|-----|-------------|
| 1–3 | Lett, kan prate uanstrengt |
| 4–6 | Moderat, merkbar anstrengelse |
| 7–8 | Tungt, vanskelig å snakke |
| 9 | Svært tungt, nesten maksimalt |
| 10 | Maksimalt, kan ikke gjøre mer |

**Fordeler med treningsdagbok:**
- Synliggjør fremgang og stagnasjon
- Hjelper med å identifisere mønstre (hva fungerer/fungerer ikke)
- Motiverer gjennom dokumentert utvikling
- Gjør det lettere å justere programmet`,
    },
    {
      id: 'tr-8-3-example-1',
      type: 'example',
      title: 'Eksempel: Tolke testresultater',
      problem: 'En 17 år gammel gutt gjennomfører følgende tester: Cooper-test: 2450 m, benkpress 5RM: 55 kg, knebøy 5RM: 75 kg, sargenttest: 42 cm. Hvordan vil du vurdere resultatene, og hva bør prioriteres i treningen fremover?',
      solution: `**Vurdering:**

**Cooper-test (2450 m):** Gjennomsnittlig for aldersgruppen. VO₂maks ≈ (2450 − 504,9) / 44,73 ≈ 43,5 ml/kg/min. Tilfredsstillende, men rom for forbedring.

**Benkpress estimert 1RM:** 55 × (1 + 5/30) = 55 × 1,167 ≈ 64 kg. Moderat overkroppsstyrke for en 17-åring.

**Knebøy estimert 1RM:** 75 × (1 + 5/30) = 75 × 1,167 ≈ 88 kg. Relativt god underkroppsstyrke.

**Sargenttest (42 cm):** Gjennomsnittlig vertikalhopp. Indikerer moderat eksplosivitet.

**Treningsanbefaling:**
1. Utholdenhet bør prioriteres – intervalltrening 2 ganger per uke for å øke VO₂maks
2. Overkroppsstyrke kan forbedres – forholdet mellom over- og underkropp bør jevnes ut
3. Eksplosivitetstrening med plyometri kan integreres for å forbedre vertikalhoppet

Ny testing anbefales etter 8–12 ukers systematisk trening.`,
    },
    {
      id: 'tr-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr-8-3-ex-1',
        number: '8.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva måler Cooper-testen?',
        multipleChoiceOptions: [
          'Aerob utholdenhet (estimert VO₂maks)',
          'Maksimal styrke (1RM)',
          'Hurtighet og akselerasjon',
          'Bevegelighet i hofte og hamstrings',
        ],
        hints: ['Cooper-testen innebærer å løpe så langt du kan på 12 minutter'],
        solution: 'Cooper-testen måler aerob utholdenhet og gir et estimat på maksimalt oksygenopptak (VO₂maks). Testen går ut på å løpe så langt som mulig på 12 minutter, og distansen brukes til å beregne estimert VO₂maks.',
      },
    },
    {
      id: 'tr-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr-8-3-ex-2',
        number: '8.3.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr 1RM?',
        multipleChoiceOptions: [
          'Den tyngste vekten du kan løfte én gang med korrekt teknikk',
          'Antall repetisjoner du kan gjøre med én kilos vekt',
          'Den første repetisjonen i et sett',
          'Vekten du bruker i oppvarmingssettene',
        ],
        hints: ['RM står for «repetition maximum»'],
        solution: '1RM (én repetisjons maksimum) er den tyngste vekten du kan løfte én gang med korrekt teknikk i en gitt øvelse. Det er gullstandarden for måling av maksimal styrke.',
      },
    },
    {
      id: 'tr-8-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr-8-3-ex-3',
        number: '8.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom validitet og reliabilitet i testing, og gi et eksempel på en test som har høy reliabilitet men lav validitet.',
        hints: ['Validitet = måler riktig ting, reliabilitet = gir likt resultat'],
        solution: 'Validitet handler om at testen måler det den skal måle, mens reliabilitet handler om at gjentatte målinger gir tilnærmet like resultater. Eksempel: En vekt (badevekt) som alltid viser 2 kg for mye har høy reliabilitet (gir konsistente resultater) men lav validitet (viser ikke riktig vekt). I treningssammenheng: KMI (BMI) er en reliabel test (enkel å gjennomføre likt hver gang), men har lav validitet for å måle kroppssammensetning fordi den ikke skiller mellom fett og muskelmasse. En muskuløs person kan få høy KMI uten å være overvektig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-8-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr-8-3-ex-4',
        number: '8.3.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk Epley-formelen til å estimere 1RM for en person som klarer 80 kg i 6 repetisjoner i knebøy. Vis utregningen.',
        hints: ['Epley-formelen: 1RM = vekt × (1 + reps / 30)'],
        solution: 'Epley-formelen: 1RM = vekt × (1 + reps / 30). Innsatt: 1RM = 80 × (1 + 6/30) = 80 × (1 + 0,2) = 80 × 1,2 = 96 kg. Estimert 1RM i knebøy er altså 96 kg. Merk at dette er et estimat – den faktiske 1RM kan avvike noe, spesielt ved høyere repetisjonstall der formelen blir mindre nøyaktig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-8-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr-8-3-ex-5',
        number: '8.3.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar hvorfor treningsdagbok er et viktig verktøy for treningsplanlegging. Beskriv hva en god treningsdagbok bør inneholde, og gi et konkret eksempel på hvordan data fra dagboken kan brukes til å justere et treningsprogram.',
        hints: ['Tenk på hvordan systematisk dokumentasjon kan avdekke mønstre og problemer'],
        solution: 'Treningsdagbok er viktig fordi den gir systematisk dokumentasjon som muliggjør evaluering og tilpasning av treningen. En god treningsdagbok bør inneholde: dato, øvelser med sett/reps/vekt, intensitet (RPE), varighet, søvn, energinivå, dagsform og eventuelle plager. Eksempel på bruk: En utøver logger at hun de siste 4 ukene har stagnert i benkpress (samme vekt/reps), samtidig som RPE har vært 9–10 og søvnkvaliteten har vært dårlig (5–6 timer). Dagboken avdekker at kombinasjonen av for høy intensitet og for lite søvn sannsynligvis hemmer restitusjonen. Justeringen kan være å redusere intensiteten til RPE 7–8, legge inn en deload-uke, og prioritere søvnhygiene. Etter 2–3 uker kan man teste igjen for å se om progresjonen gjenopptas.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-8-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr-8-3-ex-6',
        number: '8.3.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du skal planlegge et testbatteri for en skoleklasse med 30 elever. Velg 4–5 tester som dekker ulike fysiske egenskaper, begrunn valgene dine, og beskriv hvordan du sikrer god validitet og reliabilitet i gjennomføringen.',
        hints: ['Velg tester som er praktiske å gjennomføre med mange elever, og som dekker styrke, utholdenhet, bevegelighet og hurtighet'],
        solution: 'Forslag til testbatteri: 1) Bip-test (aerob utholdenhet) – selvregulerende, standardisert, kan gjennomføres innendørs med hele klassen. 2) Sargenttest (eksplosiv beinkraft) – enkel å gjennomføre, krever lite utstyr. 3) Push-ups 60 sek (muskulær utholdenhet overkropp) – praktisk, ingen utstyr. 4) Sit and reach (bevegelighet) – rask å gjennomføre, standardisert. 5) 40 m sprint (hurtighet) – grunnleggende test, enkel organisering. For god validitet: bruk standardiserte testprotokoller, sørg for grundig oppvarming, og test under like betingelser (tid på dagen, underlag, temperatur). For god reliabilitet: gi tydelige instruksjoner, demonstrer øvelsene, bruk samme testleder, la elevene prøve øvelsene før selve testen (unngå læringseffekt), og gjennomfør testene i samme rekkefølge. Praktisk tips: organiser klassen i grupper som roterer mellom teststasjoner for effektiv bruk av tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.4: Trening for ulike mål
// ============================================================================

export const CHAPTER_TRENING_1_8_4: TextbookChapter = {
  id: 'trening-1-8-4',
  courseId: 'trening-1',
  chapterNumber: '8.4',
  title: 'Trening for ulike mål',
  description: 'Vektnedgang, muskelvekst, bedre utholdenhet, idrettsspesifikk trening og helse og livskvalitet.',
  estimatedMinutes: 25,
  competenceGoals: [
    'kunne tilpasse trening til ulike mål som vektnedgang, muskelvekst og utholdenhet',
    'forstå prinsippene bak idrettsspesifikk trening',
    'kunne vurdere hvordan trening bidrar til helse og livskvalitet',
  ],
  keyTerms: [],
  content: [
    {
      id: 'tr-8-4-intro',
      type: 'text',
      content: `## Trening tilpasset målet

Mennesker trener av mange ulike grunner. Noen ønsker å gå ned i vekt, andre vil bygge muskler, forbedre utholdenheten sin, bli bedre i en bestemt idrett, eller rett og slett leve et sunnere og bedre liv. Selv om de grunnleggende treningsprinsippene – overbelastning, progresjon, spesifisitet og variasjon – gjelder for alle, må treningen tilpasses det konkrete målet for at den skal være mest mulig effektiv.

I dette kapittelet ser vi på hvordan trening bør utformes for fem vanlige treningsmål:

- **Vektnedgang** – redusere kroppsfett
- **Muskelvekst** – øke muskelmasse (hypertrofi)
- **Bedre utholdenhet** – øke aerob og anaerob kapasitet
- **Idrettsspesifikk trening** – målrettet trening for en bestemt idrett
- **Helse og livskvalitet** – trene for å leve bedre og forebygge sykdom`,
    },
    {
      id: 'tr-8-4-vektnedgang',
      type: 'text',
      title: 'Trening for vektnedgang',
      content: `For å gå ned i vekt må kroppen forbruke mer energi enn den tar inn – et **kalorisk underskudd**. Trening bidrar til vektnedgang ved å øke energiforbruket, men kosthold er som regel den viktigste faktoren.

**Treningsanbefalinger for vektnedgang:**

| Faktor | Anbefaling |
|--------|------------|
| Treningstype | Kombinasjon av styrke og utholdenhet |
| Frekvens | 3–5 økter per uke |
| Intensitet | Moderat til høy |
| Varighet | 30–60 min per økt |
| Progressjon | Gradvis økning i varighet og intensitet |

**Hvorfor styrketrening er viktig ved vektnedgang:**
- Bevarer og bygger muskelmasse som ellers kan gå tapt
- Øker hvilemetabolismen (muskler forbrenner mer energi i hvile)
- Gir en strammere kropp og bedre kroppsholdning
- Forebygger skader som kan oppstå ved økt treningsmengde

**Utholdenhetsaktiviteter med høyt energiforbruk:**
- Løping, sykling, svømming
- HIIT (høyintensiv intervalltrening) – effektivt, men krevende
- Gange i raskt tempo – skånsomt og bærekraftig over tid

**Viktig:** Et for stort kalorisk underskudd kan føre til muskeltap, energimangel, nedsatt prestasjon og hormonelle forstyrrelser. Et moderat underskudd på 300–500 kcal per dag anbefales.`,
    },
    {
      id: 'tr-8-4-def-kalorisk-underskudd',
      type: 'definition',
      title: 'Kalorisk underskudd',
      content: 'Et kalorisk underskudd oppstår når kroppen forbruker mer energi enn den tar inn gjennom mat og drikke. Over tid fører dette til vektnedgang fordi kroppen må bruke lagret energi (primært fett) for å dekke behovet. Et moderat underskudd på 300–500 kcal per dag regnes som bærekraftig.',
    },
    {
      id: 'tr-8-4-muskelvekst',
      type: 'text',
      title: 'Trening for muskelvekst (hypertrofi)',
      content: `**Hypertrofi** er økning i muskelcellenes størrelse, som fører til synlig muskelvekst. For å oppnå hypertrofi kreves systematisk styrketrening kombinert med tilstrekkelig ernæring og restitusjon.

**De tre hovedmekanismene for muskelvekst:**
1. **Mekanisk spenning** – belaste muskelen med tung motstand
2. **Metabolsk stress** – «pumpen» som oppstår ved moderat–høye repetisjoner
3. **Muskelskade** – mikroreparasjoner som stimulerer vekst

**Treningsvariabler for hypertrofi:**

| Variabel | Anbefaling |
|----------|------------|
| Sett per muskelgruppe per uke | 10–20 sett |
| Repetisjoner per sett | 6–12 (hovedsakelig) |
| Intensitet | 60–80% av 1RM |
| Hvile mellom sett | 60–120 sekunder |
| Frekvens per muskelgruppe | 2–3 ganger per uke |
| Tempo | Kontrollert, 2–4 sek eksentrisk fase |

**Ernæring for muskelvekst:**
- **Kalorisk overskudd** – ca. 200–500 kcal over daglig behov
- **Protein** – 1,6–2,2 g per kg kroppsvekt per dag
- **Fordelt inntak** – 4–5 proteinrike måltider per dag
- Tilstrekkelig karbohydrater for treningsenergi

**Restitusjon:**
- Minimum 7–9 timers søvn per natt
- 48–72 timer mellom harde økter for samme muskelgruppe
- Stress og søvnmangel hemmer muskelvekst`,
    },
    {
      id: 'tr-8-4-def-hypertrofi',
      type: 'definition',
      title: 'Hypertrofi',
      content: 'Hypertrofi betyr økning i muskelcellenes størrelse, som fører til større og kraftigere muskler. Det oppnås gjennom systematisk styrketrening med tilstrekkelig volum (antall sett og repetisjoner), progressiv overbelastning, riktig ernæring og god restitusjon.',
    },
    {
      id: 'tr-8-4-utholdenhet',
      type: 'text',
      title: 'Trening for bedre utholdenhet',
      content: `Utholdenhetstrening handler om å forbedre kroppens evne til å arbeide over lengre tid. Det skilles mellom **aerob** utholdenhet (med oksygen) og **anaerob** utholdenhet (uten tilstrekkelig oksygen).

**Treningsmetoder for aerob utholdenhet:**

**1. Langkjøring (LIT – lav intensitetstrening):**
- 60–75% av makspuls
- 30–90 minutter
- Bygger aerob grunnkapasitet
- Bør utgjøre 80% av treningsvolumet (80/20-regelen)

**2. Terskeltrening:**
- Rundt anaerob terskel (ca. 85–90% av makspuls)
- 20–40 minutter kontinuerlig eller intervaller (f.eks. 4 × 8 min)
- Forbedrer evnen til å tåle høy intensitet over tid

**3. Intervalltrening (HIT – høy intensitetstrening):**
- 90–95% av makspuls
- Korte arbeidsperioder med pauser (f.eks. 4 × 4 min)
- Mest effektivt for å øke VO₂maks
- Bør utgjøre ca. 20% av treningsvolumet

**80/20-regelen i utholdenhetstrening:**
Forskning viser at fordeling av ca. 80% lavintensiv trening og 20% høyintensiv trening gir best utvikling for de fleste utøvere. For mye høyintensiv trening øker risikoen for overtrenning og skader.`,
    },
    {
      id: 'tr-8-4-example-1',
      type: 'example',
      title: 'Eksempel: Utholdenhetsuke for en mosjonist',
      problem: 'Lag et ukeopplegg for en mosjonist som ønsker å forbedre sin aerobe utholdenhet og trener 4 ganger i uken.',
      solution: `**Ukeplan basert på 80/20-regelen:**

**Mandag – Langkjøring (LIT):**
Rolig løpetur, 45 minutter i 60–70% av makspuls. Fokus på å holde jevnt og behagelig tempo.

**Onsdag – Terskeltrening:**
10 min oppvarming + 3 × 8 min i 85–90% av makspuls med 2 min rolig jogg mellom intervallene + 10 min nedjogg. Total ca. 50 min.

**Fredag – Rolig langtur (LIT):**
60 minutter lett jogg eller rask gange i 60–65% av makspuls. Kan kombineres med en venn for samtaletrening.

**Søndag – Intervalltrening (HIT):**
10 min oppvarming + 4 × 4 min i 90–95% av makspuls med 3 min aktiv pause + 10 min nedjogg. Total ca. 45 min.

**Fordeling:** 3 av 4 økter er lavintensiv eller moderat (75%), 1 økt er høyintensiv (25%). Dette er nær 80/20-fordelingen og gir god balanse mellom utvikling og restitusjon.`,
    },
    {
      id: 'tr-8-4-idrettsspesifikk',
      type: 'text',
      title: 'Idrettsspesifikk trening',
      content: `**Idrettsspesifikk trening** bygger på prinsippet om **spesifisitet** – at treningseffekten er størst når treningen ligner bevegelsesmønsteret, energisystemet og belastningen i idretten.

**Steg for å planlegge idrettsspesifikk trening:**

1. **Kravanalyse** – Hva krever idretten?
   - Hvilke fysiske egenskaper er viktigst? (styrke, utholdenhet, hurtighet, bevegelighet)
   - Hvilke bevegelsesmønstre dominerer?
   - Hvilke energisystemer brukes mest? (aerob, anaerob, fosfagen)
   - Typiske skademønstre

2. **Utøveranalyse** – Hvor står utøveren?
   - Styrker og svakheter
   - Testresultater
   - Treningsbakgrunn og erfaring

3. **Tilpasning** – Treningsinnholdet tilpasses
   - Øvelsesvalg som ligner idrettens bevegelser
   - Intensitet og varighet som matcher idrettens krav
   - Gradvis overgang fra generell til spesifikk trening

**Eksempler på spesifisitet:**

| Idrett | Viktigste egenskaper | Spesifikke øvelser |
|--------|---------------------|-------------------|
| Fotball | Utholdenhet, sprint, styrke | Intervaller med retningsendringer, knebøy, sprintdrag |
| Svømming | Overkroppsstyrke, utholdenhet | Nedtrekk, skulderrotasjon, intervaller i vannet |
| Friidrett (sprint) | Eksplosivitet, hurtighet | Plyometri, markløft, sprintøvelser |
| Klatring | Gripestyrke, utholdenhet, bevegelighet | Hengetrening, fingerboard, bevegelighetsøvelser |`,
    },
    {
      id: 'tr-8-4-def-spesifisitet',
      type: 'definition',
      title: 'Spesifisitetsprinsippet',
      content: 'Spesifisitetsprinsippet innebærer at treningseffekten er størst når treningen er mest mulig lik de kravene som idretten eller aktiviteten stiller. Det betyr at bevegelsesmønstre, energisystemer, intensitet og varighet i treningen bør gjenspeile det som kreves i konkurranse.',
    },
    {
      id: 'tr-8-4-helse',
      type: 'text',
      title: 'Trening for helse og livskvalitet',
      content: `Ikke all trening handler om idrettslige mål. For mange er trening først og fremst et middel for å opprettholde god helse, forebygge sykdom og oppleve bedre livskvalitet.

**Helsemyndighetenes anbefalinger for voksne:**
- Minst **150 minutter moderat** eller **75 minutter høyintensiv** fysisk aktivitet per uke
- **Styrketrening** for de store muskelgruppene minst **2 ganger per uke**
- Redusere stillesitting og bryte opp lange perioder med inaktivitet

**Helsegevinster av regelmessig trening:**

| Område | Effekt |
|--------|--------|
| Hjerte og kar | Lavere blodtrykk, bedre kolesterol, redusert risiko for hjertesykdom |
| Metabolisme | Bedre blodsukkerregulering, redusert risiko for diabetes type 2 |
| Muskel og skjelett | Sterkere bein, bedre balanse, redusert risiko for benskjørhet |
| Mental helse | Redusert angst og depresjon, bedre søvnkvalitet, økt selvfølelse |
| Kognisjon | Bedre konsentrasjon, hukommelse og læringsevne |
| Immunforsvar | Redusert risiko for infeksjoner og kroniske sykdommer |

**Trening for mental helse:**
Forskning viser at regelmessig fysisk aktivitet kan være like effektivt som medikamenter mot mild til moderat depresjon. Effekten skyldes blant annet:
- Frigjøring av endorfiner og serotonin
- Redusert stresshormonnivå (kortisol)
- Bedre søvnkvalitet
- Opplevelse av mestring og sosial tilhørighet

**For de som ikke er vant til å trene**, er det viktigste å komme i gang med noe – selv korte turer og lett aktivitet gir helsegevinster. Deretter kan man gradvis øke mengde og intensitet.`,
    },
    {
      id: 'tr-8-4-tip-1',
      type: 'tip',
      title: 'Tilpass treningen til livet ditt',
      content: `Det viktigste er ikke å trene perfekt, men å trene konsistent. Velg en treningsform du liker og som passer inn i hverdagen din. En 30-minutters gåtur fem ganger i uken gir betydelige helsegevinster – du trenger ikke å løpe maraton for å holde deg frisk.`,
    },
    {
      id: 'tr-8-4-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `Ulike treningsmål krever ulike tilnærminger:

- **Vektnedgang:** Kombinasjon av styrke og utholdenhet + moderat kalorisk underskudd
- **Muskelvekst:** Systematisk styrketrening med høyt volum + kalorisk overskudd og proteinrikt kosthold
- **Utholdenhet:** 80% lavintensiv, 20% høyintensiv trening med langkjøring, terskel og intervaller
- **Idrettsspesifikk trening:** Basert på kravanalyse og spesifisitetsprinsippet
- **Helse og livskvalitet:** Minimum 150 min moderat aktivitet + styrketrening 2× per uke

Felles for alle mål er at treningen må være **progressiv**, **variert** og **individuelt tilpasset**. De grunnleggende treningsprinsippene gjelder uansett hva du trener for.`,
    },
    {
      id: 'tr-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr-8-4-ex-1',
        number: '8.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste faktoren for vektnedgang?',
        multipleChoiceOptions: [
          'Et kalorisk underskudd – kroppen bruker mer energi enn den tar inn',
          'Å trene styrke minst 5 ganger i uken',
          'Å kutte ut alle karbohydrater fra kostholdet',
          'Å løpe så fort som mulig hver dag',
        ],
        hints: ['Tenk på energibalanse – forholdet mellom inntak og forbruk'],
        solution: 'Den viktigste faktoren for vektnedgang er et kalorisk underskudd, altså at kroppen forbruker mer energi enn den tar inn. Trening bidrar til å øke forbruket, men kosthold er som regel den viktigste faktoren for å oppnå underskuddet. Et moderat underskudd på 300–500 kcal per dag anbefales.',
      },
    },
    {
      id: 'tr-8-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr-8-4-ex-2',
        number: '8.4.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva beskriver 80/20-regelen i utholdenhetstrening?',
        multipleChoiceOptions: [
          'Ca. 80% av treningen bør være lavintensiv og ca. 20% høyintensiv',
          '80% av treningen bør være styrketrening og 20% utholdenhet',
          'Man bør trene 80 minutter og hvile 20 minutter per økt',
          '80% av energien bør komme fra karbohydrater under trening',
        ],
        hints: ['Regelen handler om fordelingen mellom ulike intensitetssoner'],
        solution: '80/20-regelen innebærer at ca. 80% av treningsvolumet bør være lavintensiv trening (under anaerob terskel) og ca. 20% bør være høyintensiv trening (over anaerob terskel). Forskning viser at denne fordelingen gir best utholdenhetsutvikling for de fleste utøvere.',
      },
    },
    {
      id: 'tr-8-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr-8-4-ex-3',
        number: '8.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar de tre hovedmekanismene for muskelvekst (hypertrofi), og beskriv hvordan treningen bør organiseres for å stimulere alle tre.',
        hints: ['De tre mekanismene er mekanisk spenning, metabolsk stress og muskelskade'],
        solution: 'De tre hovedmekanismene for muskelvekst er: 1) Mekanisk spenning – belastning av muskelen med tung motstand. Stimuleres ved å trene med 70–85% av 1RM i 6–8 repetisjoner. 2) Metabolsk stress – den «pumpen» som oppstår ved moderat–høye repetisjoner. Stimuleres ved å trene med 60–70% av 1RM i 10–15 repetisjoner med kort pause (60–90 sek). 3) Muskelskade – mikroreparasjoner som stimulerer vekst. Stimuleres ved eksentrisk trening (kontrollert senking av vekten) og nye øvelser. For å stimulere alle tre bør man variere repetisjonsområdet gjennom uken, kontrollere tempoet (spesielt den eksentriske fasen), og gradvis øke belastningen over tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-8-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr-8-4-ex-4',
        number: '8.4.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjennomfør en enkel kravanalyse for en selvvalgt idrett. Beskriv hvilke fysiske egenskaper som er viktigst, hvilke energisystemer som brukes, og foreslå tre spesifikke treningsøvelser.',
        hints: ['Bruk tabellen i kapittelet som inspirasjon, men velg en annen idrett enn eksemplene'],
        solution: 'Eksempel – håndball: Viktigste egenskaper: utholdenhet (løping i 60 min), eksplosivitet (hopp og skudd), styrke (taklinger og skuddkraft), hurtighet med retningsendringer. Energisystemer: Primært aerob for grunnlagsarbeid, anaerob for sprinter og intensive dueller, fosfagen for eksplosive skudd og hopp. Spesifikke øvelser: 1) Intervalltrening med retningsendringer (f.eks. 10 × 30 sek sprint med retningsskift, 30 sek pause) – trener anaerob utholdenhet og hurtighet med retningsendringer som i kamp. 2) Knebøyhopp med vekt (4 × 5 med 30–40% av 1RM) – trener eksplosiv beinkraft for hopp og akselerasjon. 3) Medisinballkast fra brystet (3 × 10) – trener skuddkraft med bevegelsesmønster som ligner skudd i håndball.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'tr-8-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr-8-4-ex-5',
        number: '8.4.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En 16 år gammel jente ønsker å gå ned 5 kg i kroppsvekt, samtidig som hun spiller fotball tre ganger i uken. Lag en treningsplan for henne som inkluderer både styrke- og utholdenhetstrening, og forklar hvordan kostholdet bør tilpasses. Begrunn valgene dine med tanke på helserisiko og bærekraftig vektnedgang.',
        hints: ['Husk at hun er ung og voksende – et for stort underskudd kan være skadelig. Fotballen gir allerede høy belastning'],
        solution: 'Treningsplan: I tillegg til 3 fotballtreninger per uke legger vi inn 2 styrkeøkter (helkropp). Mandag: Styrke helkropp (45 min) – knebøy, benkpress, roing, planke, utfall. Moderat belastning (3 × 10). Tirsdag: Fotballtrening. Onsdag: Hviledag. Torsdag: Fotballtrening + eventuelt 20 min rolig jogg etter trening. Fredag: Styrke helkropp (45 min) – markløft, skulderpress, chin-ups, bulgarsk split squat. Lørdag: Fotballkamp/trening. Søndag: Aktiv hvile (gåtur, yoga). Kostholdstilpasning: Moderat underskudd på maks 300 kcal/dag. Prioritere proteinrikt kosthold (1,6 g/kg) for å bevare muskelmasse. Spise nok karbohydrater rundt treningsøktene for energi. Begrunnelse: Et moderat underskudd gir bærekraftig vektnedgang (ca. 0,3 kg/uke) uten å hemme prestasjon eller vekst. Styrketrening bevarer muskelmasse. For stort underskudd kan forstyrre menstruasjon, benhelse og vekst hos en 16-åring. Mål: 5 kg over 4–5 måneder er realistisk og helsemessig forsvarlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-8-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr-8-4-ex-6',
        number: '8.4.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvordan trening bidrar til mental helse. Forklar de fysiologiske og psykologiske mekanismene bak effekten, og gi eksempler på hvordan skolen kan legge til rette for at elever opplever de positive mentale effektene av fysisk aktivitet.',
        hints: ['Inkluder både biologiske mekanismer (hormoner, signalstoffer) og psykologiske faktorer (mestring, sosial tilhørighet)'],
        solution: 'Fysiologiske mekanismer: Under fysisk aktivitet frigjøres endorfiner (naturlige smertestillende og velværefremkallende stoffer) og serotonin (signalstoff knyttet til humør og velvære). Trening reduserer også stresshormonnivået (kortisol) og bedrer søvnkvaliteten ved å regulere døgnrytmen. Over tid øker trening hjernens produksjon av BDNF (brain-derived neurotrophic factor), som fremmer hjernehelse og læringsevne. Psykologiske mekanismer: Trening gir opplevelse av mestring, som styrker selvfølelsen. Lagaktiviteter gir sosial tilhørighet og reduserer ensomhet. Trening kan fungere som en «pause» fra bekymringer og gi en følelse av kontroll. Regelmessig trening gir struktur og rutiner, som er viktig for mental helse. Skolens rolle: 1) Tilby varierte aktiviteter i kroppsøving slik at alle finner noe de mestrer. 2) Legge til rette for aktive friminutt med tilgjengelig utstyr og fasiliteter. 3) Organisere sosiale treningsaktiviteter på tvers av klasser. 4) Redusere presset om å prestere og fokusere på gleden ved bevegelse. 5) Integrere korte bevegelsespauser i teorifag for å bryte opp stillesitting og øke konsentrasjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.5: Treningsveiledning
// ============================================================================

export const CHAPTER_TRENING_1_8_5: TextbookChapter = {
  id: 'trening-1-8-5',
  courseId: 'trening-1',
  chapterNumber: '8.5',
  title: 'Treningsveiledning',
  description: 'Veiledningsrollen, motivasjonsteknikker, tilbakemelding, tilpasning til ulike utøvere og etikk i veiledning.',
  estimatedMinutes: 22,
  competenceGoals: [
    'forstå rollen som treningsveileder og hva god veiledning innebærer',
    'kjenne til ulike motivasjonsteknikker og kunne anvende dem i praksis',
    'kunne gi konstruktiv tilbakemelding og tilpasse veiledningen til ulike utøvere',
    'reflektere over etiske problemstillinger knyttet til treningsveiledning',
  ],
  keyTerms: [],
  content: [
    {
      id: 'tr-8-5-intro',
      type: 'text',
      content: `## Treningsveiledning – å hjelpe andre med å trene

Treningsveiledning handler om å lede, motivere og tilpasse trening for andre mennesker. Enten du er personlig trener, kroppsøvingslærer, lagleder eller bare hjelper en venn, er god veiledning avgjørende for at treningen skal være trygg, effektiv og motiverende.

En god treningsveileder kombinerer fagkunnskap med mellommenneskelige ferdigheter. Det handler ikke bare om å vite hva som er riktig trening, men også om å formidle det på en måte som inspirerer og skaper trygghet.

**Sentrale ferdigheter i treningsveiledning:**
- Kommunikasjon og lytting
- Motivasjon og oppmuntring
- Observasjon og tilbakemelding
- Tilpasning til individuelle behov
- Etisk bevissthet og ansvarlighet`,
    },
    {
      id: 'tr-8-5-veiledningsrollen',
      type: 'text',
      title: 'Veiledningsrollen',
      content: `Treningsveiledning er mer enn å fortelle noen hva de skal gjøre. En veileder har mange roller og må tilpasse seg situasjonen.

**Veilederens ulike roller:**

| Rolle | Beskrivelse | Eksempel |
|-------|-------------|----------|
| Instruktør | Demonstrere og forklare øvelser | Vise korrekt teknikk i knebøy |
| Motivator | Inspirere og oppmuntre | Heie frem under intervalltrening |
| Rådgiver | Gi faglige råd og anbefalinger | Anbefale treningsvolum basert på mål |
| Tilrettelegger | Tilpasse treningen til den enkelte | Foreslå alternativ øvelse ved skade |
| Trygghetsperson | Skape et trygt og inkluderende miljø | Sørge for at alle føler seg velkomne |

**Autoritær vs. demokratisk veilederstil:**

En **autoritær** veileder bestemmer alt selv og gir klare instrukser. Dette kan fungere godt i situasjoner som krever rask handling (f.eks. sikkerhet i vektrom), men kan hemme selvstendighet og motivasjon over tid.

En **demokratisk** veileder involverer utøveren i beslutninger og legger vekt på medvirkning. Dette styrker indre motivasjon og selvstendighet, men kan være mindre effektivt med store grupper eller når raske avgjørelser kreves.

De beste veilederne tilpasser stilen sin til situasjonen og utøverens behov.`,
    },
    {
      id: 'tr-8-5-def-veiledning',
      type: 'definition',
      title: 'Treningsveiledning',
      content: 'Treningsveiledning er prosessen med å planlegge, instruere, motivere og evaluere trening for andre mennesker. Det innebærer å kombinere fagkunnskap om trening med mellommenneskelige ferdigheter som kommunikasjon, empati og tilpasningsevne.',
    },
    {
      id: 'tr-8-5-motivasjon',
      type: 'text',
      title: 'Motivasjonsteknikker',
      content: `Motivasjon er drivkraften bak all trening. En veileder som forstår hva som motiverer utøveren, kan tilpasse kommunikasjon og treningsopplegg for å opprettholde engasjementet over tid.

**Indre vs. ytre motivasjon:**

**Indre motivasjon** kommer fra aktiviteten selv – glede, mestring, nysgjerrighet. En som trener fordi det er gøy eller fordi det gir mestringsfølelse, er indre motivert.

**Ytre motivasjon** kommer fra belønninger utenfor aktiviteten – premier, ros, sosial anerkjennelse. En som trener for å vinne en konkurranse eller for å få likes på sosiale medier, er ytre motivert.

Forskning viser at **indre motivasjon** gir mer varig treningsatferd enn ytre motivasjon. Veilederen bør derfor legge til rette for indre motivasjon.

**Teknikker for å styrke motivasjon:**

1. **Autonomi** – La utøveren medvirke i valg (øvelser, intensitet, musikk)
2. **Kompetanse** – Gi oppgaver som er utfordrende, men oppnåelige. Feire fremgang
3. **Tilhørighet** – Skape et sosialt og inkluderende treningsmiljø
4. **Målsetting** – Sette konkrete, realistiske og tidsbestemte mål (SMART-mål)
5. **Variasjon** – Unngå monotoni ved å variere øvelser og treningsformer
6. **Positiv forsterkning** – Gi ros og anerkjennelse for innsats, ikke bare resultat`,
    },
    {
      id: 'tr-8-5-def-indre-motivasjon',
      type: 'definition',
      title: 'Indre og ytre motivasjon',
      content: 'Indre motivasjon er drivkraft som kommer fra selve aktiviteten – glede, mestring og nysgjerrighet. Ytre motivasjon kommer fra faktorer utenfor aktiviteten – belønninger, ros eller sosial anerkjennelse. Forskning viser at indre motivasjon gir mer varig og selvregulert atferd enn ytre motivasjon.',
    },
    {
      id: 'tr-8-5-tilbakemelding',
      type: 'text',
      title: 'Tilbakemelding',
      content: `God tilbakemelding er et av de viktigste verktøyene i treningsveiledning. Tilbakemeldinger hjelper utøveren med å forstå hva som fungerer, hva som kan forbedres, og hvordan det kan gjøres.

**Typer tilbakemelding:**

**1. Kunnskapsresultat (KR):**
Informasjon om resultatet av bevegelsen – «Du løftet 80 kg», «Du løp 2600 meter».

**2. Kunnskapsytelse (KY):**
Informasjon om selve utførelsen – «Knærne dine falt innover i knebøyen», «Du hadde god armstrekk i svømmingen».

**Prinsipper for god tilbakemelding:**

- **Spesifikk** – «Hold ryggen rett i markløftet» i stedet for «bra jobba»
- **Rettidig** – Gi tilbakemelding kort tid etter utførelsen
- **Konstruktiv** – Fokuser på hva som kan forbedres, ikke bare hva som er feil
- **Sandwich-metoden** – Start positivt, gi forbedringsforslag, avslutt positivt
- **Dosert** – Ikke gi for mye tilbakemelding på én gang (1–2 hovedpunkter)
- **Tilpasset** – Nybegynnere trenger mer tilbakemelding, erfarne utøvere trenger mer autonomi

**Eksempel på sandwich-metoden:**
1. «Bra at du holder blikket fremover i knebøyen.» (positivt)
2. «Prøv å skyve knærne litt mer utover på vei ned.» (forbedring)
3. «Ellers fin dybde og kontroll – bare fortsett sånn!» (positivt)`,
    },
    {
      id: 'tr-8-5-example-1',
      type: 'example',
      title: 'Eksempel: Veiledning av en nybegynner',
      problem: 'Du skal veilede en 16-åring som aldri har trent styrke før. Han er nervøs og usikker. Hvordan vil du gjennomføre den første treningsøkten?',
      solution: `**Tilnærming:**

**1. Skape trygghet (5 min):**
Start med en uformell samtale. Spør hva han er interessert i, om han driver med annen aktivitet, og hva han ønsker å oppnå. Forklar at alle har vært nybegynnere, og at det er helt normalt å føle seg usikker.

**2. Enkel oppvarming (10 min):**
Lett jogg, armsvinger, knebøy uten vekt, utfall med kroppsvekt. Bruk denne tiden til å observere bevegelighet og koordinasjon.

**3. Introduksjon av 3–4 øvelser (25 min):**
Velg enkle øvelser med lav risiko: knebøy med kroppsvekt (eller goblet squat med lett vekt), brystpress i maskin, roing i maskin, planke. Demonstrer hver øvelse, la ham prøve med lett motstand, gi positiv tilbakemelding og korriger maks 1–2 ting om gangen.

**4. Avslutning (5 min):**
Oppsummér hva han lærte, ros innsatsen, og fortell hva neste økt vil inneholde. Spør om det er noe han lurer på.

**Nøkkelprinsipper:**
- Bruk demokratisk veilederstil – la ham medvirke i valg
- Gi mye positiv forsterkning for å bygge kompetanseopplevelse
- Hold det enkelt – ikke introduser for mange øvelser
- Fokuser på mestring og glede, ikke prestasjon`,
    },
    {
      id: 'tr-8-5-tilpasning',
      type: 'text',
      title: 'Tilpasning til ulike utøvere',
      content: `Mennesker er forskjellige, og trening som passer for én person, passer ikke nødvendigvis for en annen. En god veileder tilpasser treningen basert på individuelle forskjeller.

**Faktorer som krever tilpasning:**

**Alder:**
- **Barn og unge**: Fokus på lek, allsidig bevegelse, motorisk utvikling. Unngå for tidlig spesialisering
- **Voksne**: Kan trene mer intensivt og spesifikt. Tilpass til livssituasjon
- **Eldre**: Fokus på balanse, fallforebygging, bevegelighetsstrening. Lavere intensitet, lengre oppvarming

**Treningserfaring:**
- **Nybegynnere**: Enkle øvelser, mye instruksjon, lav belastning, høy frekvens
- **Viderekomne**: Mer variasjon, høyere intensitet, mer autonomi
- **Erfarne**: Spesialisert programmering, mindre tilbakemelding, mer selvstendig trening

**Funksjonsnivå og helse:**
- Tilpass øvelser ved skader eller smerter
- Ta hensyn til kroniske sykdommer (diabetes, astma, hjertesykdom)
- Samarbeid med helsepersonell ved behov

**Personlighet og preferanser:**
- Noen liker gruppetrening, andre foretrekker individuell trening
- Noen motiveres av konkurranse, andre av samarbeid
- Tilpass kommunikasjonsstil – noen vil ha direkte instrukser, andre vil ha forklaringer og medvirkning`,
    },
    {
      id: 'tr-8-5-etikk',
      type: 'text',
      title: 'Etikk i treningsveiledning',
      content: `Treningsveiledning innebærer et tillitsforhold mellom veileder og utøver. Veilederen har en maktposisjon som krever etisk bevissthet og profesjonalitet.

**Sentrale etiske prinsipper:**

**1. Velgjørenhet (gjøre godt):**
Treningen skal fremme helse og velvære. Veilederen skal alltid handle i utøverens beste interesse, ikke for personlig vinning.

**2. Ikke-skade:**
Unngå trening som utsetter utøveren for unødig risiko. Tilpass belastning og øvelsesvalg til utøverens forutsetninger. Si fra hvis noe er usikkert.

**3. Autonomi (selvbestemmelse):**
Respekter utøverens rett til å ta egne valg. Gi informasjon og anbefalinger, men tving aldri noen til å gjøre noe de ikke er komfortable med.

**4. Konfidensialitet:**
Personlig informasjon om utøverens helse, kropp og treningsdata skal behandles fortrolig og ikke deles med andre uten samtykke.

**Etiske utfordringer i praksis:**

- **Kroppspress:** Unngå kommentarer om utseende og vekt. Fokuser på funksjon og helse
- **Grenser:** Hold en profesjonell relasjon og respekter personlige grenser
- **Kompetanse:** Ikke gi råd utenfor eget kompetanseområde (f.eks. medisinsk rådgivning)
- **Kosttilskudd og doping:** Gi ærlig informasjon, aldri oppfordre til bruk av forbudte stoffer
- **Inkludering:** Sørg for at alle føler seg velkomne uavhengig av kjønn, kropp, funksjonsnivå eller bakgrunn`,
    },
    {
      id: 'tr-8-5-warning-etikk',
      type: 'warning',
      title: 'Viktig om kroppspress',
      content: 'Som treningsveileder har du stor påvirkningskraft. Unngå å kommentere utøveres utseende, vekt eller kroppsform. Fokuser på hva kroppen kan gjøre, ikke hvordan den ser ut. Negativ oppmerksomhet på kropp kan bidra til spiseforstyrrelser, dårlig selvbilde og frafall fra trening – spesielt blant unge.',
    },
    {
      id: 'tr-8-5-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `God treningsveiledning handler om mer enn treningsfaglig kunnskap. Det handler om å:

- **Forstå veiledningsrollen** – tilpasse stilen etter situasjonen og utøveren
- **Motivere effektivt** – legge til rette for indre motivasjon gjennom autonomi, kompetanse og tilhørighet
- **Gi god tilbakemelding** – spesifikk, rettidig, konstruktiv og tilpasset utøverens nivå
- **Tilpasse til individet** – ta hensyn til alder, erfaring, helse og personlighet
- **Handle etisk** – respektere utøverens autonomi, beskytte mot skade, og opprettholde profesjonelle grenser

En dyktig veileder gjør at treningen oppleves som trygg, meningsfull og motiverende – og bidrar til at utøveren utvikler selvstendighet og glede ved fysisk aktivitet over tid.`,
    },
    {
      id: 'tr-8-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr-8-5-ex-1',
        number: '8.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom indre og ytre motivasjon?',
        multipleChoiceOptions: [
          'Indre motivasjon kommer fra glede ved aktiviteten selv, ytre motivasjon fra belønninger utenfor aktiviteten',
          'Indre motivasjon handler om fysisk styrke, ytre motivasjon handler om utholdenhet',
          'Indre motivasjon gjelder individuell trening, ytre motivasjon gjelder lagtrening',
          'Indre motivasjon er medfødt, ytre motivasjon er tillært',
        ],
        hints: ['Tenk på hva som driver deg til å trene – er det gleden ved aktiviteten eller noe du får etterpå?'],
        solution: 'Indre motivasjon kommer fra selve aktiviteten – glede, mestring og nysgjerrighet. Ytre motivasjon kommer fra faktorer utenfor aktiviteten – belønninger, ros, premier eller sosial anerkjennelse. Forskning viser at indre motivasjon gir mer varig treningsatferd.',
      },
    },
    {
      id: 'tr-8-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr-8-5-ex-2',
        number: '8.5.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva innebærer sandwich-metoden for tilbakemelding?',
        multipleChoiceOptions: [
          'Start med noe positivt, gi forbedringsforslag, avslutt med noe positivt',
          'Gi tilbakemelding i tre omganger med pauser mellom',
          'Kombiner tilbakemelding om styrke, utholdenhet og bevegelighet',
          'Gi skriftlig tilbakemelding som utøveren leser mellom øktene',
        ],
        hints: ['Tenk på et «lag» med positiv tilbakemelding rundt forbedringsforslaget'],
        solution: 'Sandwich-metoden innebærer at man starter med en positiv tilbakemelding, deretter gir et konkret forbedringsforslag, og avslutter med noe positivt igjen. Eksempel: «Bra dybde i knebøyen. Prøv å holde brystet litt mer opp. Ellers veldig fin kontroll – bra!» Metoden gjør at utøveren er mer mottakelig for korrigering fordi det pakkes inn i anerkjennelse.',
      },
    },
    {
      id: 'tr-8-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr-8-5-ex-3',
        number: '8.5.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv tre konkrete teknikker en treningsveileder kan bruke for å styrke indre motivasjon hos en utøver. Gi et praktisk eksempel for hver teknikk.',
        hints: ['Tenk på autonomi, kompetanse og tilhørighet som grunnleggende behov'],
        solution: '1) Autonomi – la utøveren velge mellom to likeverdige øvelser. Eksempel: «I dag skal vi trene rygg. Vil du gjøre roing i maskin eller med frivekter?» Dette gir utøveren en opplevelse av medbestemmelse. 2) Kompetanse – gi oppgaver som er utfordrende men oppnåelige, og anerkjenn fremgang. Eksempel: «Forrige uke klarte du 40 kg i 8 reps – i dag prøver vi 42,5 kg. Du er klar for det!» 3) Tilhørighet – skape et sosialt og inkluderende miljø. Eksempel: Organisere partnerøvelser der utøverne samarbeider og heier på hverandre, eller ha faste treningsgrupper der folk blir kjent med hverandre over tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-8-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr-8-5-ex-4',
        number: '8.5.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvordan en treningsveileder bør tilpasse veiledningen til henholdsvis en nybegynner og en erfaren utøver. Bruk konkrete eksempler for å vise forskjellene.',
        hints: ['Tenk på mengden instruksjon, veilederstil og grad av autonomi'],
        solution: 'Nybegynner: Veilederen bør bruke mer instruksjon og demonstrasjon. Velg enkle øvelser med lav risiko (maskiner, øvelser med kroppsvekt). Gi hyppig tilbakemelding med fokus på 1–2 teknikkpunkter om gangen. Bruk positiv forsterkning for å bygge mestringsfølelse. Eksempel: Demonstrere knebøy med kroppsvekt, la utøveren prøve mens du gir spesifikk tilbakemelding – «Bra dybde! Fokuser på å holde hælene i gulvet.» Erfaren utøver: Veilederen bør ha en mer demokratisk og rådgivende rolle. Diskuter programvalg og progresjon sammen. Gi mindre hyppig men mer nyansert tilbakemelding. La utøveren styre mer av økten selv. Eksempel: «Hvordan opplevde du settet? Jeg så at du mistet litt spenning i nedre posisjon – hva tenker du om å prøve en pustepause i bunnen?» Forskjellen handler om gradvis overføring av ansvar fra veileder til utøver.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'tr-8-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr-8-5-ex-5',
        number: '8.5.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du er treningsveileder for en gruppe på 15 elever i kroppsøving. Gruppen er svært variert – noen er aktive idrettsutøvere, mens andre sjelden er fysisk aktive og opplever kroppsøving som ubehagelig. Beskriv hvordan du vil planlegge og gjennomføre en styrketreningsøkt som inkluderer alle, og forklar hvilke veiledningsprinsipper du legger til grunn.',
        hints: ['Tenk på differensiering, inkludering og hvordan du kan gi alle en positiv opplevelse'],
        solution: 'Planlegging: Sett opp en stasjonstreningsøkt med 6 stasjoner som har øvelser på flere nivåer. Eksempel: Stasjon 1 – knebøy (kroppsvekt / med vekt / med hopp), Stasjon 2 – brystpress (veggpress / gulvpress / benkpress), osv. Elevene velger selv nivå på hver stasjon (autonomi). Gjennomføring: Start med felles oppvarming med lek-baserte aktiviteter (alle kan delta). Demonstrer øvelsene og vis alle nivåer uten å rangere dem. La elevene jobbe i par slik at de kan støtte hverandre (tilhørighet). Gå rundt og gi individuell tilbakemelding tilpasset nivå – anerkjenn innsats, ikke resultat. Veiledningsprinsipper: 1) Differensiering – ulike nivåer sikrer at alle utfordres passende (kompetanse). 2) Valgfrihet – å velge eget nivå gir opplevelse av autonomi og reduserer prestasjonsangst. 3) Inkluderende språk – unngå sammenligning mellom elever og fokuser på individuell fremgang. 4) Positiv forsterkning – gi mye ros for innsats, mot og samarbeid. 5) Trygge rammer – tydelige instrukser, sikkerhetsfokus og en aksepterende tone.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-8-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr-8-5-ex-6',
        number: '8.5.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft etiske utfordringer knyttet til treningsveiledning av unge utøvere. Diskuter minst tre konkrete problemstillinger og foreslå hvordan en veileder bør håndtere dem. Bruk de etiske prinsippene fra kapittelet i svaret ditt.',
        hints: ['Tenk på kroppspress, grenser for belastning, maktforhold og inkludering'],
        solution: 'Problemstilling 1 – Kroppspress og vektfokus: En ung utøver spør om hjelp til å «bli tynnere». Veilederens håndtering: Ifølge prinsippet om ikke-skade bør veilederen unngå å kommentere kroppen direkte. I stedet fokusere på funksjonelle mål som «bli sterkere» eller «løpe fortere». Hvis det er mistanke om spiseforstyrrelser, henvise til helsepersonell. Prinsippet om velgjørenhet tilsier at veilederen skal fremme et positivt kroppsbilde. Problemstilling 2 – Overtrening og press: En ambisiøs 15-åring vil trene hver dag og øke belastningen raskt. Veilederens håndtering: Prinsippet om ikke-skade krever at veilederen forklarer risikoen ved overtrening og sørger for tilstrekkelig restitusjon, selv om utøveren protesterer. Autonomiprinsippet respekteres ved å involvere utøveren i å lage en balansert plan. Problemstilling 3 – Ekskludering og ubehag: En elev med overvekt føler seg ukomfortabel med øvelser foran klassen. Veilederens håndtering: Prinsippene om autonomi og velgjørenhet tilsier at veilederen tilpasser aktiviteten slik at eleven kan delta uten å føle seg utstilt. Tilby alternativer, la eleven jobbe i mindre grupper, og aldri tving noen til å gjøre øvelser de opplever som ydmykende. Sørg for at treningsmiljøet er inkluderende og aksepterende for alle kroppstyper. Overordnet: Veilederen har et spesielt ansvar overfor unge utøvere fordi de er i en sårbar fase av livet og maktforholdet mellom veileder og ung utøver er asymmetrisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksportert samling: Seksjon 8 – Treningsplanlegging
// ============================================================================

export const TRENING_1_DEL8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TRENING_1_8_1,
  CHAPTER_TRENING_1_8_2,
  CHAPTER_TRENING_1_8_3,
  CHAPTER_TRENING_1_8_4,
  CHAPTER_TRENING_1_8_5,
];
