/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Treningslære 3 (VG3) - Del 1: Spesialisert treningslære
 * Kapittel 1.1–1.5
 * LK20-kompetansemål:
 * - anvende periodiseringsmodeller for langsiktig treningsplanlegging
 * - bruke autoregulering og subjektive mål i treningsstyring
 * - vurdere dose-respons-forholdet i trening
 * - identifisere og forebygge overtreningssyndrom
 * - designe helhetlige treningsprogrammer med flere samtidige mål
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Blokkperiodisering
// ============================================================================

export const CHAPTER_TRENING_3_1_1: TextbookChapter = {
  id: 'trening-3-1-1',
  courseId: 'trening-3',
  chapterNumber: '1.1',
  title: 'Blokkperiodisering',
  description: 'Issurins modell for konsentrerte belastningsblokker og fasestruktur i periodisering.',
  estimatedMinutes: 20,
  competenceGoals: [
    'anvende periodiseringsmodeller for langsiktig treningsplanlegging',
    'forklare forskjellen mellom tradisjonell og blokkperiodisering',
  ],
  content: [
    {
      id: 'tr3-1-1-intro',
      type: 'text' as const,
      content: `# Blokkperiodisering

Tradisjonell periodisering, slik Matveyev beskrev den, bygger på en gradvis utvikling av flere fysiske egenskaper samtidig gjennom makro-, meso- og mikrosykluser. Selv om denne modellen har tjent idretten godt i flere tiaar, har moderne treningsvitenskap avdekket utfordringer knyttet til samtidig utvikling av mange egenskaper.

Den israelske treningsforskeren **Vladimir Issurin** utviklet blokkperiodisering som et alternativ. Hans modell bygger pa ideen om at det er mer effektivt aa konsentrere treningsbelastningen rundt et faerre antall egenskaper i avgrensede blokker, fremfor aa trene alt samtidig. Modellen ble opprinnelig utviklet for eliteutovere i utholdenhetsidretter og svomming, men har fatt bred anvendelse pa tvers av idretter.`
    },
    {
      id: 'tr3-1-1-def-1',
      type: 'definition' as const,
      title: 'Blokkperiodisering',
      content: `**Blokkperiodisering** er en periodiseringsmodell utviklet av Vladimir Issurin der treningsaret deles inn i konsentrerte blokker som hver fokuserer pa et begrenset antall fysiske egenskaper (vanligvis 2-3). Hensikten er aa oppna sterkere treningsadaptasjoner gjennom mer fokusert belastning.

Modellen skiller seg fra tradisjonell periodisering ved at:
- Faerre egenskaper trenes parallelt i hver blokk
- Belastningen er mer konsentrert og intensiv
- Blokkene folger en spesifikk rekkefolge (akkumulering, transformering, realisering)
- Residualeffekter fra tidligere blokker utnyttes systematisk`
    },
    {
      id: 'tr3-1-1-text-1',
      type: 'text' as const,
      title: 'De tre blokkfasene',
      content: `## Issurins tre blokkfaser

Blokkperiodisering er bygd opp rundt tre hovedfaser som folger hverandre i en logisk rekkefolge:

**1. Akkumuleringsfasen (A-blokken)**
- Varighet: 2-6 uker
- Fokus: Grunnleggende fysiske egenskaper
- Hoyt treningsvolum, moderat intensitet
- Bygger aerob kapasitet, grunnstyrke og generell arbeidskapasitet
- Eksempel: Langkjoringer, styrketrening med moderat belastning, teknisk grunnarbeid

**2. Transformeringsfasen (T-blokken)**
- Varighet: 2-4 uker
- Fokus: Idrettsspesifikk kapasitet
- Moderat volum, hoy intensitet
- Omsetter grunnkapasiteten til idrettsspesifikke egenskaper
- Eksempel: Terskeltreninger, tung styrketrening, fartstrening

**3. Realiseringsfasen (R-blokken)**
- Varighet: 1-2 uker
- Fokus: Konkurranseform og toppform
- Lavt volum, svart hoy intensitet
- Friskgjoring og oppladning til konkurranse
- Eksempel: Korte, intensive intervaller, teknisk finpuss, mentale forberedelser`
    },
    {
      id: 'tr3-1-1-def-2',
      type: 'definition' as const,
      title: 'Residualeffekter',
      content: `**Residualeffekter** (ettervirkninger) er de varige treningseffektene som vedvarer etter at treningen av en bestemt egenskap er avsluttet eller sterkt redusert.

Ulike egenskaper har forskjellig residualtid:
- **Aerob utholdenhet:** Ca. 25-35 dager
- **Maksimal styrke:** Ca. 25-30 dager
- **Anaerob kapasitet:** Ca. 15-20 dager
- **Hurtighet/eksplosivitet:** Ca. 5-8 dager

Blokkperiodiseringen utnytter dette ved aa plassere blokkene i en rekkefolge der egenskaper med lang residualtid trenes forst, slik at effekten vedvarer mens utoveren fokuserer pa neste blokk.`
    },
    {
      id: 'tr3-1-1-example-1',
      type: 'example' as const,
      title: 'Eksempel: Blokkperiodisering for en langrennslopere',
      content: `**Situasjon:** En langrennslopere skal forberede seg til sesongstart i november.

**Fase 1 – Akkumulering (august, 4 uker):**
- 5-6 okter per uke med langkjoring (rulleski, loping)
- 2-3 styrkeokter med fokus pa grunnstyrke
- Total varighet per okt: 60-120 min
- Intensitet: 65-80 % av maks

**Fase 2 – Transformering (september, 3 uker):**
- 3-4 terskelokter per uke (rulleski, intervalldrag)
- 2 styrkeokter med tyngre belastning (maksimal styrke)
- Redusert langkjoring (vedlikehold)
- Intensitet: 80-90 % av maks

**Fase 3 – Realisering (oktober, 2 uker):**
- 2-3 korte, intensive intervallokter
- Teknikktrimming pa sno (om tilgjengelig)
- Gradvis reduksjon av totalvolum
- Fokus pa friskgjoring og mental forberedelse

**Residualeffektene:** Den aerobe kapasiteten fra akkumuleringsfasen varer i 25-35 dager, noe som betyr at den fremdeles er pa et hoyt niva nar realiseringsfasen begynner. Maksimal styrke har ogsaa tilstrekkelig residualtid.`
    },
    {
      id: 'tr3-1-1-text-2',
      type: 'text' as const,
      title: 'Fordeler og begrensninger',
      content: `## Fordeler og begrensninger ved blokkperiodisering

**Fordeler:**
- Sterkere adaptasjoner gjennom konsentrert belastning
- Tydeligere fokus i treningshverdagen
- Systematisk utnyttelse av residualeffekter
- Egner seg godt for utovere med mange konkurranser gjennom sesongen
- Lettere aa planlegge treningsopplegget

**Begrensninger:**
- Krever god kunnskap om residualeffekter og blokksammensetning
- Midlertidig nedsatt prestasjon i egenskaper som ikke trenes direkte
- Fungerer best for erfarne utovere som allerede har et hoyt grunnlag
- Forskningsgrunnlaget er begrenset for visse idretter og utovergrupper
- Individuelle forskjeller i residualeffekter kan gjore planlegging utfordrende

**Sammenligning med tradisjonell periodisering:**
Tradisjonell periodisering trener flere egenskaper parallelt med gradvis okning i intensitet. Dette kan gi en bredere utvikling, men risikerer at treningsstimuluset for hver enkelt egenskap blir for svakt. Blokkperiodisering lagger mer konsentrert belastning pa faerre egenskaper, noe som kan gi sterkere adaptasjoner hos godt trente utovere.`
    },
    {
      id: 'tr3-1-1-ex-1',
      type: 'exercise' as const,
      exercise: {
        id: 'tr3-1-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken fase i blokkperiodisering kjennetegnes av hoyt treningsvolum og moderat intensitet?',
        options: [
          { id: 'a', text: 'Akkumuleringsfasen', isCorrect: true },
          { id: 'b', text: 'Transformeringsfasen', isCorrect: false },
          { id: 'c', text: 'Realiseringsfasen', isCorrect: false },
          { id: 'd', text: 'Taperfasen', isCorrect: false },
        ],
        solution: 'Riktig svar er a. Akkumuleringsfasen (A-blokken) er preget av hoyt treningsvolum og moderat intensitet. Formalet er aa bygge grunnleggende fysiske egenskaper som aerob kapasitet og grunnstyrke.',
      },
    },
    {
      id: 'tr3-1-1-ex-2',
      type: 'exercise' as const,
      exercise: {
        id: 'tr3-1-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva menes med residualeffekter i blokkperiodisering?',
        options: [
          { id: 'a', text: 'Bivirkninger av for hard trening', isCorrect: false },
          { id: 'b', text: 'Varige treningseffekter som vedvarer etter at trening av en egenskap er avsluttet', isCorrect: true },
          { id: 'c', text: 'Effekten av a ta prestasjonsfremende midler', isCorrect: false },
          { id: 'd', text: 'Nedsatt ytelse etter sykdom', isCorrect: false },
        ],
        solution: 'Riktig svar er b. Residualeffekter er de varige treningseffektene som vedvarer etter at trening av en bestemt egenskap er sterkt redusert eller avsluttet. For eksempel kan aerob utholdenhet vedvare i 25-35 dager etter siste spesifikke okt.',
      },
    },
    {
      id: 'tr3-1-1-ex-3',
      type: 'exercise' as const,
      exercise: {
        id: 'tr3-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar de tre fasene i Issurins blokkperiodisering. Beskriv kjennetegnene ved hver fase og hvordan de bygger pa hverandre.',
        hints: [
          'Tenk pa volum, intensitet og fokusomrader i hver fase',
          'Forklar hvorfor rekkefolgen er viktig med tanke pa residualeffekter',
        ],
        solution: 'De tre fasene er: 1) Akkumulering – hoyt volum, moderat intensitet, fokus pa grunnleggende egenskaper (aerob kapasitet, grunnstyrke). 2) Transformering – moderat volum, hoy intensitet, fokus pa idrettsspesifikke egenskaper. 3) Realisering – lavt volum, svart hoy intensitet, fokus pa konkurranseform og toppform. Fasene bygger pa hverandre fordi residualeffektene fra akkumuleringsfasen vedvarer mens utoveren fokuserer pa transformering, og bade akkumulerings- og transformeringseffektene unyttes under realisering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr3-1-1-ex-4',
      type: 'exercise' as const,
      exercise: {
        id: 'tr3-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign tradisjonell periodisering og blokkperiodisering. Diskuter fordeler og ulemper med begge tilnarmingene, og vurder hvilken modell som passer best for en utover som har mange konkurranser gjennom sesongen.',
        hints: [
          'Tradisjonell periodisering trener mange egenskaper parallelt, blokkperiodisering fokuserer pa farre om gangen',
          'Tenk pa residualeffekter og hvordan mange konkurranser pavirker treningsplanleggingen',
        ],
        solution: 'Tradisjonell periodisering gir bred utvikling gjennom hele aret, men kan gi for svakt stimulus for hver egenskap hos godt trente utovere. Blokkperiodisering gir sterkere adaptasjoner gjennom konsentrert belastning. For utovere med mange konkurranser passer blokkperiodisering bedre fordi den muliggjor gjentatte toppformperioder gjennom korte A-T-R-sykluser, mens tradisjonell periodisering typisk sikter mot en eller to toppformperioder per sesong.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr3-1-1-ex-5',
      type: 'exercise' as const,
      exercise: {
        id: 'tr3-1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag et forslag til en blokkperiodiseringsplan for en svommer som skal konkurrere i NM i mars. Beskriv innholdet i hver blokk, varigheten, og forklar hvorfor du har valgt denne oppbyggingen.',
        hints: [
          'Start med aa regne tilbake fra konkurransetidspunktet',
          'Husk at realiseringsfasen bor vare 1-2 uker for konkurransen',
        ],
        solution: 'Et godt svar planlegger tilbake fra NM i mars. Eksempel: Akkumulering (januar, 4 uker) – hoyt volum svomming med fokus pa aerob kapasitet og teknikkarbeid, grunnstyrke pa land. Transformering (februar, 3 uker) – terskeltrening og anaerobisk arbeid i bassenget, tung styrketrening. Realisering (forste halvdel av mars, 2 uker) – korte, intense intervaller, redusert totalvolum, mental forberedelse. Begrunnelsen bor vise forstaelse for residualeffekter og samspillet mellom blokkene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr3-1-1-ex-6',
      type: 'exercise' as const,
      exercise: {
        id: 'tr3-1-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drofte hvorfor residualeffektene varierer mellom ulike fysiske egenskaper. Hvordan kan denne kunnskapen brukes praktisk i treningsplanlegging?',
        hints: [
          'Aerobe tilpasninger involverer strukturelle endringer (mitokondrier, kapillaerer) som tar lang tid aa bygge ned',
          'Nevromuskulaere tilpasninger (hurtighet) er mer flyktige',
        ],
        solution: 'Egenskaper som bygger pa strukturelle tilpasninger (aerob kapasitet, maksimal styrke) har lengre residualtid fordi endringer i muskelmasse, mitokondrier og kapillaernettverk tar tid aa bryte ned. Nevromuskulaere egenskaper (hurtighet, eksplosivitet) baserer seg mer pa nervos aktivering og koordinasjon, som reduseres raskere uten vedlikehold. Praktisk betyr dette at egenskaper med kort residualtid bor trenes narme konkurranse, mens grunnleggende egenskaper med lang residualtid kan trenes tidligere i forberedelsesperioden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.2: Autoregulering av trening
// ============================================================================

export const CHAPTER_TRENING_3_1_2: TextbookChapter = {
  id: 'trening-3-1-2',
  courseId: 'trening-3',
  chapterNumber: '1.2',
  title: 'Autoregulering av trening',
  description: 'RPE-skala, velocity-based training og daglig readiness i treningsstyring.',
  estimatedMinutes: 20,
  competenceGoals: [
    'bruke autoregulering og subjektive mal i treningsstyring',
    'vurdere utoverens dagsform for a tilpasse treningsbelastningen',
  ],
  content: [
    {
      id: 'tr3-1-2-intro',
      type: 'text' as const,
      content: `# Autoregulering av trening

Tradisjonelle treningsprogrammer bygger ofte pa forhanda fastsatte belastninger: du skal lope X kilometer i Y tempo, eller lotte Z kilo i W repetisjoner. Men kroppen er ikke en maskin. Dagsformen varierer med sovn, stress, kosthold, tidligere treningsbelastning og en rekke andre faktorer.

**Autoregulering** er en tilnarming til trening der belastningen justeres basert pa utoverens aktuelle prestasjonsniva og dagsform, fremfor a folge en rigid plan. I stedet for a presse gjennom et forhanda bestemt program uansett hvordan du foler deg, tillater autoregulering at du tilpasser treningen til kroppens faktiske kapasitet den aktuelle dagen.

Moderne treningsvitenskap har utviklet flere verktoy for autoregulering, fra enkle subjektive skalaer til avanserte teknologiske losninger.`
    },
    {
      id: 'tr3-1-2-def-1',
      type: 'definition' as const,
      title: 'RPE-skalaen (Rate of Perceived Exertion)',
      content: `**RPE-skalaen** (Rate of Perceived Exertion) er et subjektivt mal pa treningsintensitet basert pa utoverens opplevde anstrengelse.

Den mest brukte versjonen i styrketrening er **Tuchscherers modifiserte RPE-skala** (0-10):
- **RPE 10:** Maksimal innsats, ingen flere repetisjoner mulig
- **RPE 9:** Kunne gjort 1 repetisjon til
- **RPE 8:** Kunne gjort 2 repetisjoner til
- **RPE 7:** Kunne gjort 3 repetisjoner til
- **RPE 6:** Kunne gjort 4+ repetisjoner til

I utholdenhetstrening brukes ofte **Borgs RPE-skala** (6-20):
- **6-7:** Svart lett (hvile)
- **11-13:** Noe anstrengende (moderat intensitet)
- **15-17:** Anstrengende (hoy intensitet)
- **19-20:** Maksimalt anstrengende

RPE-verdiene kan brukes til a styre belastningen: i stedet for a foreskrive et spesifikt antall kilo, foreskriver man en RPE-verdi.`
    },
    {
      id: 'tr3-1-2-text-1',
      type: 'text' as const,
      title: 'Velocity-Based Training (VBT)',
      content: `## Velocity-Based Training

**Velocity-Based Training (VBT)** er en objektiv metode for autoregulering der treningsbelastningen styres basert pa stanghastighetene under loft.

**Grunnprinsippet:** Det er en invers sammenheng mellom belastning og hastighet. Jo tyngre vekten er, desto saktere beveger stangen seg. Ved a male hastigheten pa stangen kan man objektivt vurdere utoverens dagsform og tilpasse belastningen deretter.

**Hastighetssoner i styrketrening:**
- **> 1.0 m/s:** Eksplosiv styrke og hurtighet
- **0.75-1.0 m/s:** Kraftutvikling og power
- **0.5-0.75 m/s:** Styrke-hurtighet
- **0.3-0.5 m/s:** Maksimal styrke
- **< 0.3 m/s:** Absolutt styrke (nart maks)

**Fordeler med VBT:**
- Objektive data i sanntid
- Automatisk tilpasning til dagsform
- Kan oppdage tretthet tidlig (synkende hastigheter)
- Motiverende tilbakemeldinger for utoveren

**Utstyr:** Linjaere posisjonstransduktorer (f.eks. GymAware, Tendo Unit), akselerometere, eller appbaserte losninger med kamera.`
    },
    {
      id: 'tr3-1-2-def-2',
      type: 'definition' as const,
      title: 'Readiness (treningsberedskap)',
      content: `**Readiness** (treningsberedskap) er en helhetlig vurdering av utoverens evne til a prestere og ta imot treningsbelastning pa et gitt tidspunkt.

Readiness pavirkes av mange faktorer:
- **Fysiologiske:** Hjertefrekvensvariabilitet (HRV), hvilepuls, sovnkvalitet
- **Psykologiske:** Motivasjon, stressniva, mental energi
- **Livsstilsfaktorer:** Kosthold, hydrering, sosiale forhold
- **Treningshistorikk:** Kumulativ belastning, tid siden forrige harde okt

**Maling av readiness:**
- Subjektive sporsmalsbaserte verktoy (f.eks. wellnessprotokoll)
- Fysiologiske malinger (HRV, hvilepuls om morgenen)
- Kombinerte systemer som vekter flere faktorer

Readiness-data brukes til a justere treningsplanen: pa dager med lav readiness reduseres volum eller intensitet, mens dager med hoy readiness kan utnyttes til a presse grensene.`
    },
    {
      id: 'tr3-1-2-example-1',
      type: 'example' as const,
      title: 'Eksempel: Autoregulert styrketreningsprogram',
      content: `**Situasjon:** En styrkelofter bruker RPE-basert autoregulering for benkpress.

**Planlagt okt:**
- Benkpress: 4 x 5 @ RPE 8

**God dag (hoy readiness):**
Utoveren varmer opp og finner at 100 kg gir RPE 8 for 5 repetisjoner.
- Sett 1: 100 kg x 5 @ RPE 8
- Sett 2: 100 kg x 5 @ RPE 8
- Sett 3: 100 kg x 5 @ RPE 8.5
- Sett 4: 97.5 kg x 5 @ RPE 8

**Darlig dag (lav readiness):**
Utoveren finner at allerede 90 kg gir RPE 8 for 5 repetisjoner.
- Sett 1: 90 kg x 5 @ RPE 8
- Sett 2: 90 kg x 5 @ RPE 8
- Sett 3: 90 kg x 5 @ RPE 8.5
- Sett 4: 87.5 kg x 5 @ RPE 8

**Poenget:** Begge dagene trener utoveren med riktig relativ intensitet (RPE 8), selv om den absolutte vekten varierer med 10 %. Dette sikrer optimal belastning uavhengig av dagsform.`
    },
    {
      id: 'tr3-1-2-text-2',
      type: 'text' as const,
      title: 'Praktisk implementering av autoregulering',
      content: `## Praktisk implementering

**Trinn for a innfore autoregulering:**

1. **Lar deg a bruke RPE-skalaen:** Det tar tid a utvikle god selvvurderingsevne. Start med a logge RPE etter hvert sett og sammenlign med objektive data over tid.

2. **Etabler en readiness-rutine:** Mal hvilepuls og/eller HRV om morgenen, og vurder sovnkvalitet og energiniva pa en enkel skala (1-5).

3. **Sett opp retningslinjer for justering:**
   - Hoy readiness (> 7/10): Folg planen eller ok belastningen lett
   - Normal readiness (5-7/10): Folg planen som planlagt
   - Lav readiness (< 5/10): Reduser volum med 20-30 % eller intensitet med 5-10 %

4. **Kombiner subjektivt og objektivt:** Bruk RPE sammen med VBT-data for mest mulig presis styring.

**Begrensninger ved autoregulering:**
- Krever erfaring og selvbevissthet
- Nybegynnere har ofte darlig evne til a vurdere RPE
- Kan fore til at utovere «tar det for lett» ved lav motivasjon
- Teknologiske losninger kan vare kostbare
- Krever systematisk logging og analyse`
    },
    {
      id: 'tr3-1-2-ex-1',
      type: 'exercise' as const,
      exercise: {
        id: 'tr3-1-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva betyr RPE 8 pa Tuchscherers modifiserte skala for styrketrening?',
        options: [
          { id: 'a', text: 'Maksimal innsats, ingen repetisjoner igjen', isCorrect: false },
          { id: 'b', text: 'Kunne gjort 2 repetisjoner til', isCorrect: true },
          { id: 'c', text: 'Kunne gjort 4 repetisjoner til', isCorrect: false },
          { id: 'd', text: 'Moderat anstrengelse, lett okt', isCorrect: false },
        ],
        solution: 'Riktig svar er b. Pa Tuchscherers modifiserte RPE-skala betyr RPE 8 at utoveren kunne ha gjennomfort 2 repetisjoner til for teknisk svikt. RPE 10 er maksimalt, RPE 9 er 1 repetisjon igjen, og RPE 7 er 3 repetisjoner igjen.',
      },
    },
    {
      id: 'tr3-1-2-ex-2',
      type: 'exercise' as const,
      exercise: {
        id: 'tr3-1-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er hovedformalet med Velocity-Based Training (VBT)?',
        options: [
          { id: 'a', text: 'A trene sa raskt som mulig for a spare tid', isCorrect: false },
          { id: 'b', text: 'A male stangfart for objektivt a regulere treningsbelastningen etter dagsform', isCorrect: true },
          { id: 'c', text: 'A oke lophastigheten i utholdenhetstrening', isCorrect: false },
          { id: 'd', text: 'A erstatte all styrketrening med hurtighetstrening', isCorrect: false },
        ],
        solution: 'Riktig svar er b. VBT bruker stanghastighetsmaling for objektivt a vurdere utoverens dagsform og tilpasse belastningen deretter. Hvis hastigheten er lavere enn normalt ved en gitt vekt, indikerer dette lavere readiness, og belastningen bor justeres ned.',
      },
    },
    {
      id: 'tr3-1-2-ex-3',
      type: 'exercise' as const,
      exercise: {
        id: 'tr3-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hva autoregulering i trening innebarer og hvorfor det kan vare mer hensiktsmessig enn a folge en rigid treningsplan. Gi eksempler pa bade subjektive og objektive metoder for autoregulering.',
        hints: [
          'Tenk pa faktorer som pavirker dagsformen: sovn, stress, sykdom',
          'Subjektive metoder: RPE, wellnessprotokoll. Objektive: VBT, HRV',
        ],
        solution: 'Autoregulering innebarer a justere treningsbelastningen basert pa utoverens aktuelle prestasjonsniva og dagsform. Det er mer hensiktsmessig enn rigid plan fordi kroppen ikke reagerer likt fra dag til dag. Subjektive metoder inkluderer RPE-skalaen og wellnessprotokoller der utoveren vurderer sin egen tilstand. Objektive metoder inkluderer VBT (maling av stanghastighet) og HRV-malinger (hjertefrekvensvariabilitet). En kombinasjon av begge gir best grunnlag for beslutninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr3-1-2-ex-4',
      type: 'exercise' as const,
      exercise: {
        id: 'tr3-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv hvordan en utover kan bruke readiness-malinger til a tilpasse treningsplanen sin. Lag et eksempel pa en uke der readiness varierer fra dag til dag, og forklar hvordan treningsokten justeres.',
        hints: [
          'Bruk en enkel skala (1-10) for readiness hver morgen',
          'Vis hvordan volum og intensitet endres pa dager med lav versus hoy readiness',
        ],
        solution: 'Utoveren maler readiness hver morgen med HRV og subjektiv vurdering. Eksempel: Mandag readiness 8/10 – hoy intensitet kneboying 5x3@RPE 9. Tirsdag readiness 7/10 – moderat okt som planlagt. Onsdag readiness 4/10 (darlig sovn, stress) – reduserer volum med 30 % og dropper tunge ovelser til fordel for lett teknikkarbeid. Torsdag readiness 6/10 – folger planen med lette justeringer. Fredag readiness 9/10 – utnytter god form til en tyngre okt enn opprinnelig planlagt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr3-1-2-ex-5',
      type: 'exercise' as const,
      exercise: {
        id: 'tr3-1-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Diskuter fordeler og begrensninger ved autoregulering. Hvem egner autoregulering seg best for, og hvorfor kan det vare utfordrende for nybegynnere?',
        hints: [
          'Nybegynnere mangler ofte kroppsbevissthet til a vurdere RPE noyaktig',
          'Erfarne utovere har bedre evne til a vurdere sin egen kapasitet',
        ],
        solution: 'Fordeler: Tilpasser belastningen til reell kapasitet, reduserer risiko for overtrening, tillater a utnytte gode dager. Begrensninger: Krever god selvvurderingsevne, kan fore til at utovere tar det for lett, teknologiske verktoy er kostbare. Autoregulering passer best for erfarne utovere som har utviklet god kroppsbevissthet og kan vurdere RPE nobygge. Nybegynnere bor starte med enkle programmer og gradvis innfore RPE-vurdering for a bygge erfaringsgrunnlaget.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr3-1-2-ex-6',
      type: 'exercise' as const,
      exercise: {
        id: 'tr3-1-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Sammenlign RPE-basert autoregulering og VBT-basert autoregulering. Nar passer det best a bruke henholdsvis subjektiv og objektiv maling, og hva er styrkene og svakhetene ved hver metode?',
        hints: [
          'RPE er gratis og krever ingen utstyr, men er subjektivt',
          'VBT gir objektive data, men krever spesialutstyr og egner seg best for styrketrening',
        ],
        solution: 'RPE er tilgjengelig for alle, koster ingenting og kan brukes i alle treningsformer. Ulempen er at det er subjektivt og kan pavirkes av motivasjon og erfaring. VBT gir presise, objektive data og kan oppdage tretthet for utoveren merker det selv. Ulempen er kostbart utstyr og at det hovedsakelig fungerer i styrketrening med frie vekter. RPE passer best for utholdenhetstrening og nybegynnere med begrenset budsjett. VBT passer best for styrkeloftere og kraftutovere som trener med frie vekter. Ideelt kombineres begge metodene for mest mulig presis autoregulering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.3: Treningsdosering
// ============================================================================

export const CHAPTER_TRENING_3_1_3: TextbookChapter = {
  id: 'trening-3-1-3',
  courseId: 'trening-3',
  chapterNumber: '1.3',
  title: 'Treningsdosering',
  description: 'Dose-respons-forholdet i trening, minimumsdose og optimal belastning for adaptasjon.',
  estimatedMinutes: 20,
  competenceGoals: [
    'vurdere dose-respons-forholdet i trening',
    'tilpasse treningsdosen til utoverens niva og mal',
  ],
  content: [
    {
      id: 'tr3-1-3-intro',
      type: 'text' as const,
      content: `# Treningsdosering

Hvor mye trening trengs for a oppna et oensket resultat? Og finnes det en grense for hvor mye trening som er nyttig for det er skadelig? Disse sporsmolene handler om **treningsdosering** – forholdet mellom treningens mengde, intensitet og frekvens pa den ene siden, og de fysiologiske tilpasningene pa den andre.

Akkurat som legemidler har en optimal dose – for lite gir ingen effekt, for mye gir bivirkninger – har ogsa trening et dose-respons-forhold. A forsta dette forholdet er avgjorende for a designe effektive og trygge treningsprogrammer, enten malet er helseforbedring, prestasjonsutvikling eller rehabilitering.`
    },
    {
      id: 'tr3-1-3-def-1',
      type: 'definition' as const,
      title: 'Dose-respons-forholdet i trening',
      content: `**Dose-respons-forholdet** i trening beskriver sammenhengen mellom treningsbelastningen (dosen) og de fysiologiske tilpasningene (responsen).

**Treningsdosen** bestemmes av:
- **Volum:** Total mengde arbeid (antall sett x repetisjoner x vekt, eller total distanse/tid)
- **Intensitet:** Hvor hardt hvert arbeidsstykke er (% av maks, tempo, RPE)
- **Frekvens:** Hvor ofte treningen gjennomfores (okter per uke)
- **Varighet:** Lengden pa hver okt og treningsperiode
- **Type:** Valg av ovelser, treningsform og bevegelsesmonster

**Responsen** er de fysiologiske tilpasningene:
- Okat muskelstyrke og muskelmasse
- Forbedret utholdenhet og VO2maks
- Okt bevegelighet og koordinasjon
- Redusert hvilepuls og blodtrykk
- Forbedret kroppssammensetning`
    },
    {
      id: 'tr3-1-3-text-1',
      type: 'text' as const,
      title: 'Minimumsdose og optimal dose',
      content: `## Minimumsdose og optimal dose

**Minimumsdosen (MED – Minimum Effective Dose):**
Den laveste treningsmengden som gir maalbar forbedring. Verdens helseorganisasjon (WHO) anbefaler minimum 150 minutter moderat eller 75 minutter intensiv fysisk aktivitet per uke for voksne. For utrente individer kan selv sma mengder trening gi betydelig framgang.

**Optimal dose:**
Den treningsmengden som gir maksimal framgang per investert tid og innsats. Den optimale dosen varierer sterkt basert pa:
- Treningsniva (nybegynner vs. erfaren)
- Alder og kjonn
- Mal (helse vs. prestasjon)
- Restitusjonsbetingelser (sovn, ernaring, stress)
- Genetiske forutsetninger

**Grafisk fremstilling av dose-respons-forholdet:**

For utrente individer er dose-respons-kurven bratt: litt trening gir mye framgang. Etter hvert som treningsnivaet oker, flater kurven ut – det kreves stadig mer trening for ytterligere framgang. Pa et visst punkt kan ytterligere okning i treningsdosen gi negative effekter (overtrening).

**Prinsippet om avtagende meravkastning:** Forbedringen per ekstra treningsokt avtar etter hvert som man narmer seg sitt genetiske potensial. En nybegynner kan forbedre styrken med 10-15 % pa fire uker, mens en eliteutover kanskje bare forbedrer seg 1-2 % pa et helt ar.`
    },
    {
      id: 'tr3-1-3-example-1',
      type: 'example' as const,
      title: 'Eksempel: Dose-respons i styrketrening',
      content: `**Situasjon:** Hvor mange sett per muskelgruppe per uke gir optimal muskelvekst?

Forskning pa dose-respons i styrketrening for hypertrofi (muskelvekst) viser:

| Ukentlige sett per muskelgruppe | Forventet respons |
|---|---|
| 0-4 sett | Under minimumsdose for de fleste; liten eller ingen vekst |
| 5-9 sett | Minimumsdose; moderat muskelvekst |
| 10-20 sett | Optimal sone for de fleste; god til svart god muskelvekst |
| 20-30 sett | Mulig ytterligere gevinst for avanserte; okt risiko for overbelastning |
| > 30 sett | Sannsynlig overbelastning; redusert respons og okt skaderisiko |

**Viktige nyanser:**
- Nybegynnere responderer godt pa 5-10 sett per muskelgruppe per uke
- Viderekomne trenger gjerne 15-20+ sett for optimal framgang
- Individuelle forskjeller er store – noen responderer bedre pa lavt volum
- Kvaliteten pa hvert sett (intensitet, teknikk) er vel sa viktig som antall sett`
    },
    {
      id: 'tr3-1-3-def-2',
      type: 'definition' as const,
      title: 'Superkompenasjon',
      content: `**Superkompensasjon** er den fysiologiske prosessen der kroppen ikke bare gjenoppretter kapasiteten etter treningsbelastning, men bygger opp til et hoyre niva enn utgangspunktet.

**Fasene i superkompensasjon:**
1. **Treningsbelastning:** Treningen bryter ned vev og tomner energilagre (katabolt)
2. **Restitusjon:** Kroppen reparerer skader og fyller opp energilagre
3. **Superkompensasjon:** Kroppen bygger opp til et hoyre niva enn for trening
4. **Tilbakegang:** Uten ny belastning synker kapasiteten tilbake mot utgangspunktet

**Optimal dosering innebarer a treffe neste okt i superkompensasjonsfasen.** For kort restitusjon gir kumulativ tretthet (potensielt overtrening), mens for lang pause lar superkompensasjonen forsvinne.`
    },
    {
      id: 'tr3-1-3-text-2',
      type: 'text' as const,
      title: 'Individualisering av treningsdosen',
      content: `## Individualisering av treningsdosen

**Faktorer som pavirker optimal dose:**

**Treningsstatus:**
- Nybegynnere: Lav dose, hoy respons. 2-3 okter/uke kan vare tilstrekkelig
- Middels trente: Moderat dose, moderat respons. 4-5 okter/uke
- Eliteutovere: Hoy dose, lav marginal respons. 8-12+ okter/uke

**Alder:**
- Yngre utovere tolererer generelt hoyere treningsdoser
- Eldre utovere trenger lengre restitusjon og lavere toppbelastning
- Minimumsdosen for helsegevinst forblir relativt lav uansett alder

**Treningsmal:**
- Helseforbedring: Relativt lav dose (WHO-anbefalingene)
- Prestasjonsutvikling: Moderat til hoy dose, progressivt okende
- Konkurranse pa hoyt niva: Hoy dose med periodisert variasjon

**Monitoreringsverktoy for dosering:**
- Treningsdagbok med volum og intensitetsregistrering
- Subjektiv tretthets- og restitusjonsovervaking
- Objektive malinger (HRV, ytelsesdata, somnregistrering)
- Periodisk testing av fysiske egenskaper`
    },
    {
      id: 'tr3-1-3-ex-1',
      type: 'exercise' as const,
      exercise: {
        id: 'tr3-1-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva beskriver dose-respons-forholdet i trening?',
        options: [
          { id: 'a', text: 'Forholdet mellom medikamentbruk og treningsresultater', isCorrect: false },
          { id: 'b', text: 'Sammenhengen mellom treningsbelastning og fysiologiske tilpasninger', isCorrect: true },
          { id: 'c', text: 'Hvor fort man responderer pa treningsradgivning', isCorrect: false },
          { id: 'd', text: 'Antall okter for man blir skadet', isCorrect: false },
        ],
        solution: 'Riktig svar er b. Dose-respons-forholdet i trening beskriver sammenhengen mellom treningsbelastningen (dosen) og de fysiologiske tilpasningene (responsen). Litt trening gir noe forbedring, mer trening gir mer forbedring – opp til et punkt der ytterligere okning kan vare skadelig.',
      },
    },
    {
      id: 'tr3-1-3-ex-2',
      type: 'exercise' as const,
      exercise: {
        id: 'tr3-1-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er minimumsdosen (MED) i treningssammenheng?',
        options: [
          { id: 'a', text: 'Den treningsmengden som gir best mulig resultater', isCorrect: false },
          { id: 'b', text: 'Den laveste treningsmengden som gir maalbar forbedring', isCorrect: true },
          { id: 'c', text: 'Den mengden trening som forer til overtrening', isCorrect: false },
          { id: 'd', text: 'Den mengden trening WHO anbefaler for eliteutovere', isCorrect: false },
        ],
        solution: 'Riktig svar er b. Minimumsdosen (Minimum Effective Dose) er den laveste treningsmengden som gir maalbar fysiologisk forbedring. For utrente individer kan dette vare overraskende lite – selv 2-3 korte okter per uke kan gi betydelig framgang.',
      },
    },
    {
      id: 'tr3-1-3-ex-3',
      type: 'exercise' as const,
      exercise: {
        id: 'tr3-1-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar prinsippet om avtagende meravkastning i trening. Hvorfor er det vanskeligere for en erfaren utover a forbedre seg sammenlignet med en nybegynner, selv om den erfarne trener mer?',
        hints: [
          'Tenk pa dose-respons-kurven som flater ut etter hvert',
          'Nybegynnere har stort forbedringspotensial, erfarne er narmere sitt genetiske potensial',
        ],
        solution: 'Avtagende meravkastning betyr at forbedringen per ekstra treningsokt avtar jo bedre trent man er. En nybegynner ligger langt fra sitt genetiske potensial og responderer kraftig pa selv sma treningsstimuli. En erfaren utover har allerede realisert mye av sitt potensial, og ytterligere framgang krever stadig mer spesialisert og voluminoes trening for marginale forbedringer. Dette forklarer hvorfor eliteutovere trener mange timer daglig for minimale forbedringer, mens nybegynnere kan gjore store framskritt med noen fa okter per uke.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr3-1-3-ex-4',
      type: 'exercise' as const,
      exercise: {
        id: 'tr3-1-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv superkompensasjonsmodellen og forklar hvordan den pavirker timingen av treningsokter. Hva skjer hvis man trener for hyppig eller for sjelden i forhold til superkompensasjonsfasen?',
        hints: [
          'Tegn gjerne en tidslinje som viser de fire fasene',
          'For hyppig trening gir nedbrytning, for sjelden lar effekten forsvinne',
        ],
        solution: 'Superkompensasjonsmodellen bestar av fire faser: 1) Treningsbelastning som bryter ned kroppen, 2) Restitusjon der kroppen repareres, 3) Superkompensasjon der kapasiteten overgar utgangspunktet, 4) Tilbakegang dersom ny belastning uteblir. Optimal treningsfrekvens innebarer a starte neste okt i superkompensasjonsfasen. Trener man for hyppig (for fullstendig restitusjon), oppstar kumulativ tretthet som over tid kan fore til overtrening. Trener man for sjelden, gar superkompensasjonen tapt, og man starter fra samme niva hver gang uten framgang.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr3-1-3-ex-5',
      type: 'exercise' as const,
      exercise: {
        id: 'tr3-1-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'En 16-arig jente vil begynne a trene styrke for a forbedre prestasjonen i handball. Hun har aldri trent styrke for. Forslag til treningsdose (antall okter, sett, repetisjoner per uke) og begrunn doseringen ut fra dose-respons-prinsippene.',
        hints: [
          'Hun er nybegynner og vil respondere godt pa lav dose',
          'Start forsiktig og ok gradvis – progressivt overbelastningsprinsipp',
        ],
        solution: 'Som nybegynner vil hun respondere godt pa en lav til moderat dose. Forslag: 2-3 styrkeokter per uke, 3-4 ovelser per okt, 3 sett a 8-12 repetisjoner. Start med kroppsvektovelser og lette vekter for a laere teknikk. Begrunnelse: Dose-respons-kurven er bratt for nybegynnere, sa selv moderat trening gir stor framgang. Minimumsdosen for styrkeframgang hos utrente er kun 2-3 sett per muskelgruppe per uke. Progressiv okning i volum og intensitet over 8-12 uker er trygt og effektivt. Viktig a sikre tilstrekkelig restitusjon (minst 48 timer mellom styrkeokter for samme muskelgruppe).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr3-1-3-ex-6',
      type: 'exercise' as const,
      exercise: {
        id: 'tr3-1-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drofte hvordan individuelle forskjeller pavirker den optimale treningsdosen. Hvilke faktorer gjor at to personer med samme treningsniva kan trenge helt ulike treningsprogrammer?',
        hints: [
          'Tenk pa genetikk, sovn, stress, ernaering, alder og livssituasjon',
          'Noen responderer bedre pa hoyt volum, andre pa hoy intensitet',
        ],
        solution: 'Individuelle forskjeller som pavirker optimal dose inkluderer: 1) Genetiske faktorer – muskelfibersammensetning, hormonniva og restitusjonsevne varierer genetisk. 2) Livsstilsfaktorer – sovnkvalitet, ernaering, yrkesrelatert fysisk aktivitet og psykisk stress pavirker restitusjonskapasiteten. 3) Treningsresponstype – noen er «high responders» som tilpasser seg raskt, andre trenger lengre tid. 4) Muskelfibertype – personer med overvekt av type I-fibre responderer bedre pa hoyt volum, mens type II-dominante kan trenge mer intensitet. 5) Hormonelle forskjeller og alder pavirker restitusjonstid og adaptasjonsrate. Derfor er individualisering og monitorering avgjorende for optimal treningsdosering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.4: Overtrening og underprestasjon
// ============================================================================

export const CHAPTER_TRENING_3_1_4: TextbookChapter = {
  id: 'trening-3-1-4',
  courseId: 'trening-3',
  chapterNumber: '1.4',
  title: 'Overtrening og underprestasjon',
  description: 'Overtreningssyndrom (OTS), symptomer, diagnostisering og forebygging.',
  estimatedMinutes: 20,
  competenceGoals: [
    'identifisere og forebygge overtreningssyndrom',
    'skille mellom funksjonell og ikke-funksjonell overbelastning',
  ],
  content: [
    {
      id: 'tr3-1-4-intro',
      type: 'text' as const,
      content: `# Overtrening og underprestasjon

For a bli bedre ma vi stresse kroppen ut over det den er vant til. Dette er grunnprinsippet i all trening – progressiv overbelastning. Men hva skjer nar belastningen blir for stor, eller restitusjonen for kort? Da risikerer vi a havne i en tilstand der trening ikke lenger gir framgang, men tvert imot forarer prestasjonen.

Overtrening er et av de mest diskuterte temaene innen treningsvitenskap, men ogsa et av de mest misforstate. Mange bruker begrepet unyansert. I virkeligheten finnes det et kontinuum fra normal treningsutmattelse til alvorlig overtreningssyndrom, og det er viktig a forsta forskjellen mellom disse tilstandene for a kunne forebygge og handtere dem.`
    },
    {
      id: 'tr3-1-4-def-1',
      type: 'definition' as const,
      title: 'Overtreningskontinuumet',
      content: `Overbelastning og overtrening eksisterer pa et kontinuum med oekende alvorlighetsgrad:

**1. Funksjonell overbelastning (FOR – Functional Overreaching):**
- Kortsiktig prestasjonsnedgang etter en periode med intensiv trening
- Kroppen superkompenserer etter 1-2 ukers restitusjon
- Normal og oensket del av treningsprosessen
- Eksempel: Tretthet etter en intensiv treningsuke med planlagt deload-uke

**2. Ikke-funksjonell overbelastning (NFOR – Non-Functional Overreaching):**
- Prestasjonsnedgang som varer i uker til maneder
- Trenger lengre restitusjon (flere uker til maneder)
- Ledsages av psykologiske og hormonelle forstyrrelser
- Signal om at treningsdosen har overskredet kroppens restitusjonsevne

**3. Overtreningssyndrom (OTS – Overtraining Syndrome):**
- Alvorlig og langvarig prestasjonsnedgang (maneder til ar)
- Kompleks tilstand med fysiologiske, psykologiske og hormonelle forstyrrelser
- Krever omfattende restitusjon og kan fore til langvarig skade pa karrieren
- Relativt sjeldent, men svart alvorlig nar det oppstar`
    },
    {
      id: 'tr3-1-4-text-1',
      type: 'text' as const,
      title: 'Symptomer pa overtreningssyndrom',
      content: `## Symptomer pa overtreningssyndrom

OTS kjennetegnes av et bredt spekter av symptomer som pavirker hele kroppen:

**Prestasjonsrelaterte symptomer:**
- Vedvarende prestasjonsnedgang til tross for tilstrekkelig restitusjon
- Okt opplevd anstrengelse ved vanlige treningsbelastninger
- Redusert arbeidskapasitet og utholdenhet
- Nedsatt evne til a gjennomfore hoy-intensitetstrening

**Fysiologiske symptomer:**
- Forhoeyet hvilepuls og redusert hjertefrekvensvariabilitet
- Forlenget restitusjonstid etter trening
- Hyppige infeksjoner (nedsatt immunforsvar)
- Forstyrret somnmonster (insomni eller overdreven tretthet)
- Muskel- og leddsmerter uten kjent skade
- Appetittforandringer og vekttap

**Psykologiske symptomer:**
- Kronisk tretthet og mangel pa energi
- Nedsatt motivasjon og treningsmotvilje
- Irritabilitet og humorssvingninger
- Konsentrasjonsvansker
- Depressive symptomer
- Angst og uro

**Hormonelle forstyrrelser:**
- Redusert testosteron (hos menn)
- Forstyrret menstruasjonssyklus (hos kvinner)
- Okt kortisolniva
- Endret kortisol/testosteron-ratio`
    },
    {
      id: 'tr3-1-4-def-2',
      type: 'definition' as const,
      title: 'Relative Energy Deficiency in Sport (RED-S)',
      content: `**RED-S** (Relative Energy Deficiency in Sport) er en tilstand der utoverens energiinntak er utilstrekkelig i forhold til energiforbruket, noe som forer til en rekke fysiologiske forstyrrelser.

RED-S overlapper ofte med overtreningssyndrom og kan forsterke symptomene:
- Redusert metabolsk rate og hormonelle forstyrrelser
- Nedsatt beinhelse (okt risiko for stressbrudd)
- Forstyrret menstruasjon hos kvinner
- Redusert immunfunksjon
- Nedsatt treningsadaptasjon og prestasjon

**Tidligere kalt «den kvinnelige utoverstriaden»**, men anerkjennes na som en tilstand som rammer bade menn og kvinner. Underernaring, bevisst eller ubevisst, er en vanlig medvirkende faktor ved overtreningssyndrom.`
    },
    {
      id: 'tr3-1-4-example-1',
      type: 'example' as const,
      title: 'Eksempel: Fra funksjonell overbelastning til OTS',
      content: `**Situasjon:** En 19-arig mannlig lopere trener mot et viktig mesterskap.

**Fase 1 – Funksjonell overbelastning (normal):**
- Uke 1-3: Intensiv treningsblokk med 10 okter/uke
- Foler seg trott og presterer svakere mot slutten av blokken
- Planlagt deload-uke (uke 4): Redusert volum med 50 %
- Resultat: Superkompensasjon, nye personlige rekorder

**Fase 2 – Glidning mot NFOR (faresignal):**
- Motivert av gode resultater, oker han treningsvolumet ytterligere
- Dropper deload-uker fordi han «foler seg bra»
- Etter 6 uker: Prestasjonene stagnerer, sovnen forverres
- Ignorerer signalene og trener hardere

**Fase 3 – Overtreningssyndrom (krise):**
- Etter 10 uker: Kan ikke fulllfore vanlige okter
- Hvilepuls okt med 10 slag, kronisk tretthet
- Hyppige forkjolelser, nedsatt appetitt
- Irritabel og umotivert, depressive tanker
- Legen diagnostiserer OTS etter aa ha utelukket andre arsaker

**Konsekvens:** 3-6 maneder uten systematisk trening. Gradvis tilbakegang til forrige niva over 8-12 maneder. Mesterskapet tapte.

**Hva burde han gjort?** Fulgt den opprinnelige planen med deload-uker, lyttet til kroppens signaler (tretthet, darlig sovn), og redusert belastningen da prestasjonene stagnerte.`
    },
    {
      id: 'tr3-1-4-text-2',
      type: 'text' as const,
      title: 'Forebygging og handtering',
      content: `## Forebygging og handtering av overtrening

**Forebyggende strategier:**

**1. Periodisering og restitusjonsplanlegging:**
- Innbygg deload-uker (redusert belastning) hver 3.-4. uke
- Varier treningsmengde og intensitet systematisk
- Planlegg tilstrekkelig restitusjon mellom harde okter

**2. Monitorering:**
- Daglig registrering av subjektiv tretthet og sovnkvalitet
- Overvak hvilepuls og HRV over tid
- Bruk treningsdagbok for a spore treningsbelastning
- Vurder prestasjonsutviklingen jevnlig

**3. Livsstilsfaktorer:**
- Prioriter 7-9 timers sovn per natt
- Sikre tilstrekkelig energiinntak og naringsstoffer
- Handter stress utenfor treningen
- Oppretthold sosiale relasjoner og fritidsaktiviteter

**4. Kommunikasjon:**
- Ha apen dialog med trener om dagsform og tretthet
- Skalere ned ved advarselssignaler
- Ikke la ambisjon overstyre signalene fra kroppen

**Handtering av OTS:**
- Fullstendig eller kraftig redusert trening i flere uker/maneder
- Gradvis tilbakeforing med lav belastning
- Medisinsk oppfolging (hormoner, blodprover)
- Psykologisk stotte ved behov
- Korrigering av ernaring og sovnvaner`
    },
    {
      id: 'tr3-1-4-ex-1',
      type: 'exercise' as const,
      exercise: {
        id: 'tr3-1-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom funksjonell overbelastning (FOR) og overtreningssyndrom (OTS)?',
        options: [
          { id: 'a', text: 'Det er ingen forskjell – begge er like alvorlige', isCorrect: false },
          { id: 'b', text: 'FOR er en normal treningsrespons som loses med kort restitusjon, OTS er en alvorlig tilstand med langvarig prestasjonsnedgang', isCorrect: true },
          { id: 'c', text: 'FOR rammer bare nybegynnere, OTS rammer bare eliteutovere', isCorrect: false },
          { id: 'd', text: 'FOR er en psykologisk tilstand, OTS er rent fysisk', isCorrect: false },
        ],
        solution: 'Riktig svar er b. Funksjonell overbelastning er en normal og oensket del av treningsprosessen der kortsiktig tretthet etterfolges av superkompensasjon etter 1-2 ukers restitusjon. Overtreningssyndrom er en alvorlig tilstand med langvarig prestasjonsnedgang (maneder til ar) og sammensatte fysiologiske, psykologiske og hormonelle forstyrrelser.',
      },
    },
    {
      id: 'tr3-1-4-ex-2',
      type: 'exercise' as const,
      exercise: {
        id: 'tr3-1-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilken av folgende er IKKE et vanlig symptom pa overtreningssyndrom?',
        options: [
          { id: 'a', text: 'Okat motivasjon og treningslyst', isCorrect: true },
          { id: 'b', text: 'Forhoyet hvilepuls', isCorrect: false },
          { id: 'c', text: 'Hyppige infeksjoner', isCorrect: false },
          { id: 'd', text: 'Forstyrret somnmonster', isCorrect: false },
        ],
        solution: 'Riktig svar er a. Okat motivasjon og treningslyst er IKKE et symptom pa overtrening – tvert imot er nedsatt motivasjon og treningsmotvilje typiske psykologiske symptomer. Forhoyet hvilepuls, hyppige infeksjoner og forstyrret somn er alle vanlige symptomer pa OTS.',
      },
    },
    {
      id: 'tr3-1-4-ex-3',
      type: 'exercise' as const,
      exercise: {
        id: 'tr3-1-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv overtreningskontinuumet fra funksjonell overbelastning til overtreningssyndrom. Forklar hva som kjennetegner hvert stadium og hvordan man kan forebygge progresjon fra ett stadium til neste.',
        hints: [
          'Tre stadier: FOR, NFOR og OTS',
          'Tenk pa varighet, alvorlighetsgrad og tiltak for hvert stadium',
        ],
        solution: 'Kontinuumet bestar av tre stadier: 1) Funksjonell overbelastning (FOR) – kortsiktig prestasjonsnedgang (dager) som er en oensket del av trening. Forebygges ved planlagte deload-uker. 2) Ikke-funksjonell overbelastning (NFOR) – prestasjonsnedgang som varer uker til maneder, med psykologiske symptomer. Forebygges ved a lytte til kroppens signaler og redusere belastning ved advarselstegn. 3) Overtreningssyndrom (OTS) – alvorlig og langvarig nedgang med sammensatte symptomer. Forebygges ved systematisk monitorering, tilstrekkelig restitusjon og ernaring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr3-1-4-ex-4',
      type: 'exercise' as const,
      exercise: {
        id: 'tr3-1-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hva RED-S (Relative Energy Deficiency in Sport) er og hvordan det henger sammen med overtreningssyndrom. Hvorfor er tilstrekkelig energiinntak viktig for treningsadaptasjon?',
        hints: [
          'RED-S handler om energiunderskudd i forhold til treningsbelastning',
          'Tenk pa hvordan ernaring pavirker restitusjon, hormoner og immunforsvar',
        ],
        solution: 'RED-S er en tilstand der energiinntaket er utilstrekkelig i forhold til energiforbruket. Det forer til hormonelle forstyrrelser, nedsatt immunfunksjon, darlig beinhelse og redusert treningsadaptasjon. Sammenhengen med OTS er at energiunderskudd forsterker alle symptomene pa overtrening: kroppen far ikke nok byggesteiner til restitusjon og adaptasjon. Tilstrekkelig energiinntak er avgjorende fordi muskeloppbygging, hormonproduksjon, immunforsvar og nervesystemets funksjon alle krever energi og naringsstoffer for a fungere optimalt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr3-1-4-ex-5',
      type: 'exercise' as const,
      exercise: {
        id: 'tr3-1-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag en forebyggingsplan mot overtrening for et juniorlag i fotball. Planen skal inkludere monitoreringsverktoy, retningslinjer for treningsbelastning og tiltak for livsstilsfaktorer.',
        hints: [
          'Inkluder bade objektive (HRV, treningsbelastning) og subjektive malinger',
          'Tenk pa unge utoveres spesielle utfordringer: skole, vekst, sosialt',
        ],
        solution: 'Forebyggingsplan: 1) Monitorering: Daglig wellnessprotokoll (sovn, tretthet, motivasjon pa skala 1-5), ukentlig registrering av treningsbelastning (volum x intensitet), manedlig testing av fysiske egenskaper. 2) Treningsbelastning: Periodisert arsplan med hardkjoringsperioder og restitusjonsperioder, deload-uker hver 3.-4. uke, aldri mer enn 3 harde okter etter hverandre. 3) Livsstilsfaktorer: Sovnrutiner (minimum 8-9 timer for juniorer), ernaringsveiledning med fokus pa tilstrekkelig energiinntak, dialog med skolen om belastning i eksamensperioder, psykologisk stotte og apen kommunikasjon om tretthet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr3-1-4-ex-6',
      type: 'exercise' as const,
      exercise: {
        id: 'tr3-1-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drofte hvorfor det er vanskelig a diagnostisere overtreningssyndrom. Hvilke andre tilstander kan gi lignende symptomer, og hvordan kan man skille mellom dem?',
        hints: [
          'OTS er en eksklusjonsdiagnose – man ma utelukke andre arsaker forst',
          'Tenk pa medisinske tilstander som kan ligne: jernmangel, infeksjon, depresjon',
        ],
        solution: 'OTS er vanskelig a diagnostisere fordi: 1) Det er en eksklusjonsdiagnose uten en spesifikk test. 2) Symptomene overlapper med mange andre tilstander: jernmangelanemi (tretthet, nedsatt prestasjon), subkliniske infeksjoner (immunsvikt, tretthet), depresjon (motivasjonssvikt, somnproblemer), skjoldbruskkjertelforstyrrelser (tretthet, vektendring), RED-S (energimangel). 3) Det finnes ingen enkelt biomarkor som bekrefter diagnosen. Man skiller mellom tilstandene gjennom grundig medisinsk utredning (blodprover, hormonstatus), treningshistorikk (har belastningen vaert for hoy?), psykologisk vurdering, og utelukkelse av andre medisinske arsaker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.5: Avansert treningsdesign
// ============================================================================

export const CHAPTER_TRENING_3_1_5: TextbookChapter = {
  id: 'trening-3-1-5',
  courseId: 'trening-3',
  chapterNumber: '1.5',
  title: 'Avansert treningsdesign',
  description: 'Helhetlig programmering, concurrent training og integrering av flere treningsmal.',
  estimatedMinutes: 20,
  competenceGoals: [
    'designe helhetlige treningsprogrammer med flere samtidige mal',
    'handtere interference-effekten ved concurrent training',
  ],
  content: [
    {
      id: 'tr3-1-5-intro',
      type: 'text' as const,
      content: `# Avansert treningsdesign

De fleste utovere – og mange mosjonister – trenger a utvikle flere fysiske egenskaper samtidig. En fotballspiller trenger bade utholdenhet, styrke, hurtighet og bevegelighet. En crossfit-utover ma vare sterk, utholdende og eksplosiv. En eldre person som trener for helse trenger styrke, utholdenhet, balanse og bevegelighet.

Men a trene alt samtidig er ikke uproblematisk. Forskning viser at enkelte treningsformer kan hemme hverandres effekt – et fenomen kjent som **interference-effekten**. Avansert treningsdesign handler om a integrere ulike treningsformer pa en mate som maksimerer den totale framgangen og minimerer negative samspillseffekter.

I dette kapittelet ser vi pa prinsipper for helhetlig programmering, utfordringene med concurrent training, og strategier for a handtere interference-effekten.`
    },
    {
      id: 'tr3-1-5-def-1',
      type: 'definition' as const,
      title: 'Concurrent training (samtidig trening)',
      content: `**Concurrent training** er trening der to eller flere fysiske egenskaper utvikles i samme treningsperiode, typisk utholdenhet og styrke kombinert.

**Interference-effekten:** Utholdenhetstrening kan hemme styrkeutvikling (og i mindre grad omvendt) nar begge trenes i samme periode. Denne effekten ble forst beskrevet av Robert Hickson i 1980 og er kjent som Hicksons interference-effekt.

**Mekanismer bak interference:**
- **Molekylart:** Utholdenhetstrening aktiverer AMPK-signalveien, som hemmer mTOR-signalveien (viktig for muskelvekst)
- **Nevromuskulart:** Utholdenhetstrening kan redusere kraftutviklingshastigheten
- **Substrat:** Uttomming av glykogenlagre kan begrense kvaliteten pa styrketreningen
- **Overbelastning:** Samlet treningsbelastning kan overskride restitusjonskapasiteten

**Viktig:** Interference-effekten er ikke absolutt. Med riktig programmering kan bade styrke og utholdenhet utvikles effektivt i parallell.`
    },
    {
      id: 'tr3-1-5-text-1',
      type: 'text' as const,
      title: 'Strategier for a handtere interference-effekten',
      content: `## Strategier for a minimere interference

**1. Temporal separasjon:**
- Skill utholdenhets- og styrketrening med minst 6-8 timer
- Plasser styrketrening for utholdenhets trening dersom styrke er prioritert
- Bruk separate dager for harde okter i styrke og utholdenhet

**2. Sekvensiering innen okten:**
- Tren den prioriterte egenskapen forst i okten
- For styrke: Styrke for utholdenhet
- For utholdenhet: Utholdenhet for styrke

**3. Modalitetsvalg:**
- Velg utholdenhetsformer med lite eksentrisk belastning (sykling, svomming) for a redusere muskelskade
- Unnga langvarig loping i store volum nar muskelvekst er mal
- Bruk hoy-intensitets-intervalltrening (HIIT) fremfor langkjoring for a spare tid og redusere interferens

**4. Periodisert tilnarming:**
- Bruk blokkperiodisering til a vektlegge en egenskap om gangen
- Vedlikeholdstrening for egenskaper som ikke er i fokus
- Varier fokuset gjennom sesongen basert pa behov

**5. Volumstyring:**
- Hold totalvolumet pa et handterlig niva
- Reduser volumet i den lavest prioriterte treningsformen
- Overvak restitusjon og juster ned ved tegn pa overbelastning`
    },
    {
      id: 'tr3-1-5-example-1',
      type: 'example' as const,
      title: 'Eksempel: Ukeplan for concurrent training i fotball',
      content: `**Situasjon:** En fotballspiller i sesongforberedelse trenger a utvikle bade utholdenhet, styrke og hurtighet.

**Ukeplan med strategisk plassering:**

| Dag | Morgen | Ettermiddag |
|---|---|---|
| Mandag | Styrke – overkropp + kjernemuskulatur | Fotballtrening (teknisk/taktisk) |
| Tirsdag | Utholdenhet – HIIT (4x4 min) | Hvile |
| Onsdag | Styrke – underkropp (tungt) | Fotballtrening (lett) |
| Torsdag | Hvile | Fotballtrening (teknisk/taktisk) |
| Fredag | Styrke – power/eksplosivitet | Utholdenhet – moderat langkjoring |
| Lordag | Kamp eller kamplik trening | - |
| Sondag | Hvile/aktiv restitusjon | - |

**Begrunnelse:**
- Styrke- og utholdenhetsokter er plassert pa separate dager nar mulig
- Tung underkropp (onsdag) har tilstrekkelig avstand til kamp (lordag)
- HIIT brukes i stedet for langkjoring for a redusere interference med styrke
- Lett fotballtrening onsdag ettermiddag forstyrrer ikke styrketreningen
- Hvile/aktiv restitusjon sondag sikrer fullstendig restitusjon`
    },
    {
      id: 'tr3-1-5-def-2',
      type: 'definition' as const,
      title: 'Helhetlig treningsprogrammering',
      content: `**Helhetlig treningsprogrammering** er en systematisk tilnarming til treningsplanlegging som tar hensyn til alle relevante faktorer for utoverens utvikling:

**Komponenter i helhetlig programmering:**
- **Behovsanalyse:** Identifisere idrettens krav og utoverens styrker og svakheter
- **Malsetning:** Definere kortsiktige og langsiktige treningsmal
- **Periodisering:** Strukturere treningen i meningsfulle perioder og faser
- **Ovelses-seleksjon:** Velge ovelser som adresserer identifiserte behov
- **Belastningsplanlegging:** Bestemme volum, intensitet og frekvens
- **Restitusjonsstrategi:** Planlegge hvile, ernaring og restitusjonsmidler
- **Monitorering og evaluering:** Systematisk oppfolging og justering

**Prinsippet om SAID (Specific Adaptation to Imposed Demands):** Kroppen tilpasser seg spesifikt til den belastningen den utsettes for. Treningsprogrammet ma darfor gjenspeile idrettens krav for at adaptasjonene skal vare relevante.`
    },
    {
      id: 'tr3-1-5-text-2',
      type: 'text' as const,
      title: 'Fra analyse til program',
      content: `## Fra behovsanalyse til ferdig treningsprogram

**Steg 1: Behovsanalyse**
- Analyser idrettens fysiske krav (energisystemer, bevegelsesmonster, styrke)
- Kartlegg utoverens navarende kapasitet gjennom testing
- Identifiser gapet mellom krav og kapasitet

**Steg 2: Prioritering**
- Ranger utviklingsbehovene etter viktighet
- Bestem hvilke egenskaper som krever mest oppmerksomhet
- Vurder tidsrammen til neste viktige konkurranse

**Steg 3: Strukturering**
- Velg periodiseringsmodell (tradisjonell, blokk, eller hybrid)
- Fordel treningsinnholdet pa uker og dager
- Plasser okter strategisk for a minimere interference

**Steg 4: Detaljplanlegging**
- Velg spesifikke ovelser for hver okt
- Sett opp belastningsparametere (sett, repetisjoner, intensitet)
- Planlegg progresjon over tid

**Steg 5: Implementering og justering**
- Gjennomfor programmet med autoregulering
- Overvak respons gjennom monitoreringsverktoy
- Juster programmet basert pa data og tilbakemeldinger

**Vanlige feil i treningsdesign:**
- Trene for mye av alt samtidig (mangel pa prioritering)
- Ignorere interference-effekten
- Utilstrekkelig restitusjon mellom harde okter
- Manglende individualisering
- For rigid tilnarming uten autoregulering`
    },
    {
      id: 'tr3-1-5-ex-1',
      type: 'exercise' as const,
      exercise: {
        id: 'tr3-1-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er interference-effekten i concurrent training?',
        options: [
          { id: 'a', text: 'At styrketrening automatisk forbedrer utholdenhet', isCorrect: false },
          { id: 'b', text: 'At utholdenhetstrening kan hemme styrkeutvikling nar begge trenes samtidig', isCorrect: true },
          { id: 'c', text: 'At to personer ikke kan trene i samme rom', isCorrect: false },
          { id: 'd', text: 'At man bare kan trene en egenskap per ar', isCorrect: false },
        ],
        solution: 'Riktig svar er b. Interference-effekten, forst beskrevet av Hickson (1980), innebarer at utholdenhetstrening kan hemme styrkeutvikling nar begge trenes i samme periode. Mekanismene inkluderer motstridende cellulare signalveier (AMPK hemmer mTOR), nevromuskulaere forstyrrelser og okt total belastning.',
      },
    },
    {
      id: 'tr3-1-5-ex-2',
      type: 'exercise' as const,
      exercise: {
        id: 'tr3-1-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva star SAID-prinsippet for?',
        options: [
          { id: 'a', text: 'Systematic Approach to Individual Development', isCorrect: false },
          { id: 'b', text: 'Specific Adaptation to Imposed Demands', isCorrect: true },
          { id: 'c', text: 'Standard Assessment of Individual Deficiencies', isCorrect: false },
          { id: 'd', text: 'Sport-Adapted Intensity Distribution', isCorrect: false },
        ],
        solution: 'Riktig svar er b. SAID star for Specific Adaptation to Imposed Demands – kroppen tilpasser seg spesifikt til den belastningen den utsettes for. Dette betyr at treningsprogrammet ma gjenspeile idrettens krav for at tilpasningene skal vare relevante for prestasjonen.',
      },
    },
    {
      id: 'tr3-1-5-ex-3',
      type: 'exercise' as const,
      exercise: {
        id: 'tr3-1-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar interference-effekten og beskriv minst tre strategier for a minimere den i et treningsprogram som kombinerer styrke og utholdenhet.',
        hints: [
          'Tenk pa timing, rekkefolge, modalitetsvalg og volumstyring',
          'Praktiske eksempler gjor svaret bedre',
        ],
        solution: 'Interference-effekten oppstar nar utholdenhetstrening hemmer styrkeutvikling (og vice versa) gjennom motstridende cellulare signalveier og okt totalbelastning. Strategier: 1) Temporal separasjon – skill styke- og utholdenhetsokter med 6-8 timer eller plasser dem pa separate dager. 2) Modalitetsvalg – bruk utholdenhetsformer med lite eksentrisk belastning (sykling framfor loping) for a redusere muskelskade. 3) Prioritert sekvensering – tren den viktigste egenskapen forst i okten eller pa dager der man er uthvilt. 4) Volumstyring – hold totalvolumet handterlig og reduser volum i den lavest prioriterte treningsformen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr3-1-5-ex-4',
      type: 'exercise' as const,
      exercise: {
        id: 'tr3-1-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Gjennomfor en forenklet behovsanalyse for en idrett du kjenner godt. Beskriv idrettens fysiske krav, identifiser de viktigste fysiske egenskapene, og forklar hvordan du ville prioritert treningen.',
        hints: [
          'Tenk pa energisystemer (aerobe vs. anaerobe krav), bevegelsesmonster og styrkekrav',
          'Vurder hva som skiller gode fra fremragende utovere i idretten',
        ],
        solution: 'Et godt svar velger en konkret idrett og analyserer: 1) Energisystemkrav – f.eks. fotball: primaert aerob med gjentatte anaerobe spurter. 2) Bevegelsesmonster – loping, retningsforandringer, hopping, skudd. 3) Styrke – underkroppsstyrke for spurter og dueller, kjernemuskulatur for stabilitet. 4) Prioritering basert pa analysen – f.eks. aerob kapasitet som grunnlag, hurtighetsstyrke for avgjorende situasjoner, bevegelighet for skadeforebygging. Prioriteringen bor begrunnes ut fra hva som er mest prestasjonsavgjorende og hva utoveren mangler mest.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr3-1-5-ex-5',
      type: 'exercise' as const,
      exercise: {
        id: 'tr3-1-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Design en 4-ukers treningsplan for en utover som trenger a forbedre bade styrke og utholdenhet. Forklar treningsprinsippene du har brukt og hvordan du har handtert interference-effekten.',
        hints: [
          'Bruk en ukeplan som viser alle oktene med innhold og belastning',
          'Vis progresjon fra uke 1 til uke 4, og husk deload/restitusjon',
        ],
        solution: 'En god plan viser: Uke 1-3 med progressiv okning i belastning, uke 4 som deload. Styrke og utholdenhet separert tidsmessig (separate dager eller minst 6 timer mellom). HIIT brukt fremfor langkjoring for a redusere interference. Styrke forst pa kombinasjonssdager dersom styrke er prioritert. Progresjon vist gjennom okende volum eller intensitet. Minimum 2 styrkekter og 2-3 utholdenhetsokter per uke. Autoregulering gjennom RPE-basert belastningsstyring. Planen bor vise tydelig forstaelse for periodisering, interference-handtering og individualisering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr3-1-5-ex-6',
      type: 'exercise' as const,
      exercise: {
        id: 'tr3-1-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drofte fordeler og ulemper ved blokkperiodisering sammenlignet med concurrent training for en lagidretts-utover som har kamp hver helg gjennom sesongen. Hvilken tilnarming ville du anbefalt, og hvorfor?',
        hints: [
          'Blokkperiodisering fokuserer pa en egenskap om gangen, concurrent trener flere parallelt',
          'Tenk pa sesongkonteksten: kamper hver helg begrenser mulighetene for tung treningsbelastning',
        ],
        solution: 'Blokkperiodisering gir sterkere adaptasjoner gjennom konsentrert belastning, men er vanskelig a gjennomfore i sesong med ukentlige kamper fordi midlertidig prestasjonsnedgang ikke er akseptabelt. Concurrent training tillater vedlikehold og moderat utvikling av flere egenskaper parallelt, noe som passer bedre i sesong. Anbefaling: Bruk blokkperiodisering i for- og ettersesong (der man kan akseptere midlertidig prestasjonsnedgang), og ga over til concurrent training med lavere volum i sesong. I sesong prioriteres vedlikehold av styrke (2 okter/uke) og utholdenhet (gjennom kamp og 1-2 ekstraokter). Denne hybrid-tilnarmingen utnytter fordelene fra begge modellene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle kapitler i Del 1
// ============================================================================

export const TRENING_3_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TRENING_3_1_1,
  CHAPTER_TRENING_3_1_2,
  CHAPTER_TRENING_3_1_3,
  CHAPTER_TRENING_3_1_4,
  CHAPTER_TRENING_3_1_5,
];
