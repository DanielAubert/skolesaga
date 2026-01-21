/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Treningslære 3 (VG3 valgfag)
 * Følger LK20 læreplan - fordypning
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Spesialisert treningslære
// ============================================================================

export const CHAPTER_TRENING_3_1: TextbookChapter = {
  id: 'trening-3-1',
  courseId: 'trening-3',
  chapterNumber: '1',
  title: 'Spesialisert treningslære',
  description: 'Fordypning i treningsprinsipper, periodisering og avanserte treningsmetoder for ulike målgrupper.',
  estimatedMinutes: 90,
  competenceGoals: [
    'anvende avanserte treningsprinsipper i praksis',
    'planlegge og gjennomføre periodisert trening',
    'tilpasse trening til ulike målgrupper og behov',
  ],
  content: [
    {
      id: 'trening-3-1-intro',
      type: 'text',
      content: `I Treningslære 3 går vi dypere inn i treningsvitenskapen. Du skal lære å anvende avanserte prinsipper, forstå kompleks periodisering, og kunne tilpasse trening til ulike behov. Dette kapitlet gir deg verktøyene for å designe treningsprogrammer på høyt nivå.`,
    },
    {
      id: 'trening-3-1-def-1',
      type: 'definition',
      title: 'Spesialisert treningslære',
      content: `Spesialisert treningslære er fordypning i treningsvitenskap som går utover generelle prinsipper. Det inkluderer avansert periodisering, individualisering, og anvendelse av forskningsbasert kunnskap for å optimalisere treningseffekten.`,
    },
    {
      id: 'trening-3-1-text-1',
      type: 'text',
      content: `**Avanserte treningsprinsipper**

**Superkompensasjon - dypere forståelse**:
- Timing av neste treningsøkt er kritisk
- Ulike egenskaper har ulik superkompensasjonstid
- Styrke: 48-72 timer
- Utholdenhet: 24-48 timer
- Kraft/eksplosivitet: 72-96 timer
- Individuell variasjon er stor

**Progressiv overbelastning - avansert**:
- Lineær progresjon (nybegynnere)
- Blokkperiodisering (viderekomne)
- Undulerende periodisering (avanserte)
- Autoregulering basert på dagsform

**Spesifisitet - presisjon**:
- Jo nærmere konkurranse, jo mer spesifikk
- Overføring mellom øvelser
- Bevegelsesmønster vs. muskelgrupper
- Energisystemspesifisitet`,
    },
    {
      id: 'trening-3-1-text-2',
      type: 'text',
      content: `**Avansert periodisering**

**Klassisk periodisering (Matveyev)**:
- Forberedende periode (høyt volum, lav intensitet)
- Konkurranseperiode (lavt volum, høy intensitet)
- Overgangsperiode (aktiv restitusjon)
- Årssyklus med makro-, meso- og mikrosykluser

**Blokkperiodisering (Verkhoshansky)**:
- Konsentrerte belastningsblokker
- Akkumulering → Transmutasjon → Realisering
- Egnet for avanserte utøvere
- Fokuserer på én egenskap per blokk

**Undulerende periodisering**:
- Daglig eller ukentlig variasjon
- Høy variasjon i belastning
- Hindrer tilpasning og monotoni
- Praktisk for travle utøvere

**Omvendt periodisering**:
- Starter med høy intensitet
- Øker volum gradvis
- Brukt i utholdenhetsidrett
- Unngår tap av toppform`,
    },
    {
      id: 'trening-3-1-def-2',
      type: 'definition',
      title: 'Autoregulering',
      content: `Autoregulering er en treningsmetode der belastningen justeres basert på utøverens dagsform og respons. Dette kan gjøres gjennom RPE-skala (Rate of Perceived Exertion), velocity-based training, eller HRV-målinger.`,
    },
    {
      id: 'trening-3-1-text-3',
      type: 'text',
      content: `**Treningsplanlegging - makronivå**

**Behovsanalyse**:
1. Idrettens krav (fysiske, tekniske, taktiske)
2. Utøverens styrker og svakheter
3. Konkurransekalender og mål
4. Tilgjengelige ressurser

**Årssyklus eksempel - ballsport**:
- **Forberedende 1** (8 uker): Generell fysisk kapasitet
- **Forberedende 2** (6 uker): Spesifikk styrke og utholdenhet
- **Preseason** (4 uker): Idrettsspesifikk trening
- **Sesong** (30+ uker): Vedlikehold og konkurranser
- **Overgang** (4 uker): Aktiv restitusjon

**Mesoperiode (typisk 3-6 uker)**:
- Klart mål for perioden
- Progresjon i volum eller intensitet
- Avsluttes med lettere uke (deload)
- Evaluering før neste blokk`,
    },
    {
      id: 'trening-3-1-text-4',
      type: 'text',
      content: `**Avanserte treningsmetoder**

**Styrketrening**:
- Cluster sets (korte pauser mellom rep)
- Post-activation potentiation (PAP)
- Excentrisk trening
- Isometriske kontraksjoner
- Blood flow restriction (BFR)

**Utholdenhetsstrening**:
- Polarisert trening (80/20)
- Terskeltrening
- VO2max-intervaller
- Sprint interval training (SIT)
- Høydetrening

**Kraft og hurtighet**:
- Ballistisk trening
- Plyometri (avansert)
- Complex training (styrke + plyometri)
- Overspeed training
- Resisted sprinting`,
    },
    {
      id: 'trening-3-1-tip-1',
      type: 'tip',
      title: 'Individualisering',
      content: `Det finnes ikke én beste treningsmetode. Den beste metoden er den som passer utøverens genetiske forutsetninger, treningshistorikk, livssituasjon og mål. Vær kritisk til "one-size-fits-all"-programmer.`,
    },
    {
      id: 'trening-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'trening-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er superkompensasjonstiden for styrketrening?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig tidsintervall.',
            solution: '48-72 timer',
            multipleChoiceOptions: [
              '48-72 timer',
              '12-24 timer',
              '1-2 uker',
              '6-8 timer',
            ],
          },
        ],
        solution: 'Styrketrening har typisk 48-72 timer superkompensasjonstid, men dette varierer individuelt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'trening-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva kjennetegner blokkperiodisering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Konsentrerte belastningsblokker med fokus på én egenskap per blokk',
            multipleChoiceOptions: [
              'Konsentrerte belastningsblokker med fokus på én egenskap per blokk',
              'Lik trening hele året',
              'Bare utholdenhetstrening',
              'Trening uten plan',
            ],
          },
        ],
        solution: 'Blokkperiodisering følger mønsteret akkumulering → transmutasjon → realisering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'trening-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er autoregulering i trening?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv autoregulering.',
            solution: 'Justering av belastning basert på dagsform og respons',
            multipleChoiceOptions: [
              'Justering av belastning basert på dagsform og respons',
              'Å alltid trene med maksimal intensitet',
              'Automatisk treningsprogram',
              'Å trene uten trener',
            ],
          },
        ],
        solution: 'Autoregulering bruker verktøy som RPE-skala eller velocity-based training.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'trening-3-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er polarisert trening?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: '80% lav intensitet og 20% høy intensitet',
            multipleChoiceOptions: [
              '80% lav intensitet og 20% høy intensitet',
              '50% styrke og 50% utholdenhet',
              'Bare høyintensitetstrening',
              'Bare lavintensitetstrening',
            ],
          },
        ],
        solution: 'Polarisert trening unngår moderat intensitet og har vist gode resultater i utholdenhetsidrett.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'trening-3-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Design en 4-ukers mesoperiode for en fotballspiller i forberedende fase. Inkluder ukentlig progresjon og øktstruktur.',
        solution: 'Forslag: Uke 1-3 med progressiv økning i volum (3-4-5 styrkeøkter), utholdenhet 3x/uke, teknikk daglig. Uke 4 deload med 50% redusert volum. Fokus på aerob kapasitet og maksimal styrke.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2: Alderstilpasset trening
// ============================================================================

export const CHAPTER_TRENING_3_2: TextbookChapter = {
  id: 'trening-3-2',
  courseId: 'trening-3',
  chapterNumber: '2',
  title: 'Alderstilpasset trening',
  description: 'Forstå hvordan trening bør tilpasses ulike aldersgrupper fra barn til eldre.',
  estimatedMinutes: 85,
  competenceGoals: [
    'forstå biologisk utvikling og treningstilpasning',
    'tilpasse trening til barn, ungdom, voksne og eldre',
    'identifisere kritiske perioder for utvikling av ulike egenskaper',
  ],
  content: [
    {
      id: 'trening-3-2-intro',
      type: 'text',
      content: `Trening må tilpasses alder og utviklingsnivå. Barn er ikke "små voksne", og eldre har andre behov enn unge voksne. I dette kapitlet lærer du hvordan biologisk utvikling påvirker treningsrespons, og hvordan du tilpasser trening for optimal effekt og sikkerhet.`,
    },
    {
      id: 'trening-3-2-def-1',
      type: 'definition',
      title: 'Biologisk alder',
      content: `Biologisk alder beskriver hvor langt en person har kommet i sin fysiske utvikling, uavhengig av kronologisk alder. To 12-åringer kan ha flere års forskjell i biologisk alder, noe som har stor betydning for treningstilpasning.`,
    },
    {
      id: 'trening-3-2-text-1',
      type: 'text',
      content: `**Trening for barn (6-12 år)**

**Kjennetegn**:
- Rask motorisk utvikling
- Høy læreevne for bevegelser
- Lav anaerob kapasitet
- Skjelettet under utvikling
- Kort oppmerksomhetsspenn

**Anbefalt trening**:
- Allsidig bevegelseserfaring
- Lek og spill fremfor strukturert trening
- Korte økter med mye variasjon
- Fokus på koordinasjon og balanse
- Grunnleggende bevegelsesmønstre

**Unngå**:
- Tung styrketrening
- Ensidig spesialisering
- For mye konkurranse
- Lange, monotone økter
- Overbelastningsskader

**"Windows of opportunity"**:
- Koordinasjon: 6-10 år (gutter), 6-9 år (jenter)
- Hurtighet: 7-9 år (begge)
- Bevegelighet: Før puberteten`,
    },
    {
      id: 'trening-3-2-text-2',
      type: 'text',
      content: `**Trening for ungdom (13-18 år)**

**Pubertale endringer**:
- Vekstspurt (PHV - Peak Height Velocity)
- Økt hormonnivå
- Muskelmasseøkning (særlig gutter)
- Endret kroppsproportjoner
- Økt anaerob kapasitet

**Treningstilpasning i puberteten**:
- **Før PHV**: Fortsett allsidig trening
- **Under PHV**: Reduser belastning, fokus på teknikk
- **Etter PHV**: Gradvis økning i spesialisering og belastning

**Styrketrening for ungdom**:
- Trygt med riktig veiledning
- Start med kroppsvektøvelser
- Lær teknikk før belastning
- Progressiv økning
- Unngå maksimale løft før full modenhet

**Psykologiske hensyn**:
- Identitetsutvikling
- Motivasjonsskift
- Sosial tilhørighet viktig
- Autonomi og medbestemmelse
- Positiv feedback`,
    },
    {
      id: 'trening-3-2-def-2',
      type: 'definition',
      title: 'Peak Height Velocity (PHV)',
      content: `PHV er tidspunktet for maksimal veksthastighet under puberteten. Jenter opplever typisk PHV ved 11-12 år, gutter ved 13-14 år. Under PHV er skjelettet ekstra sårbart, og belastningen bør tilpasses.`,
    },
    {
      id: 'trening-3-2-text-3',
      type: 'text',
      content: `**Trening for voksne (19-65 år)**

**Unge voksne (19-35 år)**:
- Optimal treningsrespons
- Kan tåle høy belastning
- Høyest potensial for toppform
- Balanse mellom trening og livsstil
- Forebygging av skader

**Middelaldrende (35-50 år)**:
- Gradvis reduksjon i kapasitet
- Lengre restitusjonstid
- Økt fokus på bevegelighet
- Styrketrening viktigere
- Kvalitet over kvantitet

**Eldre voksne (50-65 år)**:
- Tap av muskelmasse (sarkopeni)
- Redusert beinmineraltetthet
- Langsommere restitusjon
- Styrketrening svært viktig
- Tilpasse intensitet og volum

**Generelle anbefalinger voksne**:
- 150-300 min moderat aktivitet/uke
- Styrketrening 2-3 ganger/uke
- Bevegelighet og mobilitet
- Variasjon for å unngå slitasje`,
    },
    {
      id: 'trening-3-2-text-4',
      type: 'text',
      content: `**Trening for eldre (65+ år)**

**Fysiologiske endringer**:
- 3-5% muskeltap per tiår etter 30
- Akselerert tap etter 60
- Redusert koordinasjon og balanse
- Stivere ledd og sener
- Økt risiko for fall

**Treningsprioriteringer**:
1. **Styrke** - Motvirker sarkopeni
2. **Balanse** - Forebygger fall
3. **Bevegelighet** - Opprettholder funksjon
4. **Utholdenhet** - Hjerte-kar-helse

**Styrketrening for eldre**:
- Like effektivt som for yngre
- 2-3 økter/uke
- 8-12 repetisjoner
- Alle hovedmuskelgrupper
- Maskiner eller frie vekter

**Fallforebygging**:
- Balanceøvelser daglig
- Styrke i bein og hofte
- Funksjonelle øvelser (reise seg, gå i trapper)
- Tai chi har dokumentert effekt`,
    },
    {
      id: 'trening-3-2-warning-1',
      type: 'warning',
      title: 'Early specialization',
      content: `Tidlig spesialisering (før 12-14 år) i én idrett er assosiert med økt skaderisiko, dropout og dårligere langsiktig utvikling. Allsidig aktivitet i barnealder gir best grunnlag for senere prestasjon.`,
    },
    {
      id: 'trening-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'trening-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er biologisk alder?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon.',
            solution: 'Hvor langt en person har kommet i fysisk utvikling, uavhengig av kronologisk alder',
            multipleChoiceOptions: [
              'Hvor langt en person har kommet i fysisk utvikling, uavhengig av kronologisk alder',
              'Antall år en person har levd',
              'Alderen i passet',
              'Mental modenhet',
            ],
          },
        ],
        solution: 'Biologisk alder kan variere flere år mellom jevnaldrende og påvirker treningsrespons.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'trening-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er Peak Height Velocity (PHV)?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv PHV.',
            solution: 'Tidspunktet for maksimal veksthastighet under puberteten',
            multipleChoiceOptions: [
              'Tidspunktet for maksimal veksthastighet under puberteten',
              'Maksimal løpshastighet',
              'Høyeste hopphøyde',
              'Beste treningsform',
            ],
          },
        ],
        solution: 'Under PHV er skjelettet ekstra sårbart, og treningen bør tilpasses.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'trening-3-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilken type trening bør prioriteres for barn (6-12 år)?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig fokus.',
            solution: 'Allsidig bevegelseserfaring, lek og koordinasjon',
            multipleChoiceOptions: [
              'Allsidig bevegelseserfaring, lek og koordinasjon',
              'Tung styrketrening',
              'Spesialisert idrettstrening',
              'Maksimal utholdenhetstrening',
            ],
          },
        ],
        solution: 'Barn har høy læreevne for bevegelser og bør utvikle et bredt bevegelsesfundament.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'trening-3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er sarkopeni?',
        subTasks: [
          {
            label: 'a',
            task: 'Definer sarkopeni.',
            solution: 'Aldersrelatert tap av muskelmasse og muskelstyrke',
            multipleChoiceOptions: [
              'Aldersrelatert tap av muskelmasse og muskelstyrke',
              'En type muskeltrening',
              'Økt muskelmasse med alderen',
              'En bensykdom',
            ],
          },
        ],
        solution: 'Sarkopeni kan motvirkes effektivt med styrketrening, også hos eldre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'trening-3-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er problemet med tidlig spesialisering i idrett?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg konsekvenser av tidlig spesialisering.',
            solution: 'Økt skaderisiko, dropout og dårligere langsiktig utvikling',
            multipleChoiceOptions: [
              'Økt skaderisiko, dropout og dårligere langsiktig utvikling',
              'Bedre prestasjoner',
              'Sterkere motivasjon',
              'Ingen negative konsekvenser',
            ],
          },
        ],
        solution: 'Allsidig aktivitet i barnealder gir best grunnlag for langsiktig idrettsutvikling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'trening-3-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Design et treningsprogram for en 70-åring som ønsker å forbedre funksjonell kapasitet og forebygge fall. Begrunn valgene dine.',
        solution: 'Forslag: 3 økter/uke med styrke (sittende til stående, trappegang, veggpress), balanse daglig (stå på ett ben, tandemgang), bevegelighet etter hver økt, 20-30 min gange 5 dager/uke. Fokus på funksjonelle øvelser som etterligner daglige aktiviteter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3: Trening for ulike idretter
// ============================================================================

export const CHAPTER_TRENING_3_3: TextbookChapter = {
  id: 'trening-3-3',
  courseId: 'trening-3',
  chapterNumber: '3',
  title: 'Trening for ulike idretter',
  description: 'Spesifikk treningsplanlegging for ulike idrettskategorier og deres krav.',
  estimatedMinutes: 90,
  competenceGoals: [
    'analysere fysiske krav i ulike idretter',
    'tilpasse treningsprogrammer til idrettsspesifikke behov',
    'forstå overføringsverdi mellom ulike treningsformer',
  ],
  content: [
    {
      id: 'trening-3-3-intro',
      type: 'text',
      content: `Ulike idretter stiller ulike fysiske krav. En maratonløper trenger annen trening enn en vektløfter eller en fotballspiller. I dette kapitlet lærer du å analysere idrettskrav og designe treningsprogrammer som bygger de egenskapene idretten krever.`,
    },
    {
      id: 'trening-3-3-def-1',
      type: 'definition',
      title: 'Behovsanalyse',
      content: `En behovsanalyse er en systematisk gjennomgang av idrettens fysiske, tekniske, taktiske og mentale krav. Den danner grunnlaget for å prioritere treningsinnhold og velge riktige metoder.`,
    },
    {
      id: 'trening-3-3-text-1',
      type: 'text',
      content: `**Kategorisering av idretter**

**Utholdenhetsidrett**:
- Langdistanseløping, sykling, langrenn
- Aerob kapasitet dominerer
- Terskeltrening og langkjøring
- Økonomisering av bevegelse
- Eksempel: VO2max, laktatterskel

**Styrke- og kraftidrett**:
- Vektløfting, bryting, kast
- Maksimal styrke og eksplosivitet
- Periodisert styrketrening
- Teknikk under maksimal belastning
- Eksempel: 1RM, rate of force development

**Ballspill og lagidrett**:
- Fotball, håndball, basketball
- Intermitterende aktivitet
- Kombinasjon av alle egenskaper
- Idrettsspesifikk utholdenhet
- Eksempel: gjentatte sprinter, retningsendringer

**Tekniske idretter**:
- Ski hopp, turn, kunstløp
- Koordinasjon og presisjson
- Kjernemuskulatur og balanse
- Mental forberedelse
- Eksempel: kroppskontroll, timing`,
    },
    {
      id: 'trening-3-3-text-2',
      type: 'text',
      content: `**Trening for utholdenhetsidrett**

**Energisystemet**:
- 95-99% aerob energiomsetning
- VO2max og laktatterskel avgjørende
- Arbeidsøkonomi viktig

**Treningsmetoder**:
- **Langkjøring**: Bygger aerob base
- **Terskeltrening**: Hever laktatterskel
- **Intervaller**: Forbedrer VO2max
- **Fartlek**: Variasjon og mental stimuli

**Treningsfordeling (polarisert modell)**:
- 75-80% under terskel (lett)
- 0-5% på terskel (moderat)
- 15-20% over terskel (hardt)

**Årssyklus**:
- Grunntreningsperiode: Volum
- Oppbyggingsperiode: Intensitet øker
- Konkurranseperiode: Vedlikehold og topping
- Restitusjon: Aktiv hvile

**Styrketrening i utholdenhet**:
- Forebygger skader
- Kan forbedre økonomi
- Bør ikke gå på bekostning av spesifikk trening
- 1-2 økter/uke i sesong`,
    },
    {
      id: 'trening-3-3-text-3',
      type: 'text',
      content: `**Trening for styrke- og kraftidrett**

**Fysiske krav**:
- Maksimal styrke
- Eksplosiv kraft (power)
- Relativ styrke i vektklasseidretter
- Muskelmasse i absolutt styrke

**Styrketreniningsmetoder**:
- **Maksimal styrke**: 1-5 rep, 85-100% av 1RM
- **Hypertrofi**: 6-12 rep, 67-85% av 1RM
- **Eksplosiv styrke**: 1-5 rep, 30-60% av 1RM med maksimal hastighet
- **Reaktiv styrke**: Plyometri, dybdehopp

**Periodisering**:
- **Akkumulering**: Høyt volum, hypertrofi
- **Intensifisering**: Økt intensitet, styrke
- **Realisering**: Lav volum, høy intensitet, peaking

**Vektløfting spesifikt**:
- Teknisk trening daglig
- Styrketrening som supplement
- Eksplosivitet i alle løft
- Mobilitet og stabilitet`,
    },
    {
      id: 'trening-3-3-text-4',
      type: 'text',
      content: `**Trening for ballspill og lagidrett**

**Fysiske krav**:
- Gjentatte sprinter
- Retningsendringer
- Hoppkapasitet
- Kontaktstyrke
- Aerob utholdenhet for restitusjon

**Periodisering i sesongidrett**:
- **Forberedende**: Generell fysisk trening
- **Preseason**: Idrettsspesifikk trening
- **Sesong**: Vedlikehold og taktikk
- **Off-season**: Restitusjon og base

**Styrketrening for ballspill**:
- Funksjonell styrke
- Unilaterale øvelser
- Eksplosivitet og kraft
- Skadeforebygging (hamstrings, korsbånd)

**Utholdenhet i ballspill**:
- Small-sided games
- Intervaller med ball
- Høyintensitetsintervaller
- Gjentatte sprinter (RSA)

**Hurtighetstrening**:
- Akselerasjon (0-10 m)
- Maksimal hastighet (10-30 m)
- Retningsendringer (agility)
- Reaksjonstid`,
    },
    {
      id: 'trening-3-3-text-5',
      type: 'text',
      content: `**Trening for tekniske idretter**

**Fysiske krav**:
- Koordinasjon og motorisk kontroll
- Kjernemuskulatur
- Balanse og propriosepsjon
- Fleksibilitet
- Idrettsspesifikk styrke

**Treningsmetoder**:
- **Teknisk trening**: Daglig, høyt volum
- **Kjernetrening**: Stabilitet og rotasjon
- **Balanse**: Ustabile underlag, redusert syn
- **Bevegelighet**: Daglig tøying, mobilitet

**Mental trening**:
- Visualisering av bevegelser
- Konsentrasjon og fokus
- Håndtering av press
- Rutiner før prestasjon

**Eksempel - turn**:
- Teknikk: 3-5 timer/dag
- Styrke: 3-4 økter/uke (kjernemuskulatur, overarm)
- Bevegelighet: Daglig
- Kondisjon: Minimal, idrettsspesifikk`,
    },
    {
      id: 'trening-3-3-tip-1',
      type: 'tip',
      title: 'Overføringsverdi',
      content: `All trening har overføringsverdi til idretten - positiv, nøytral eller negativ. Jo nærmere konkurransesituasjonen du kommer i perioden, jo mer spesifikk bør treningen være. Generell trening har størst verdi i grunntreningsperioden.`,
    },
    {
      id: 'trening-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'trening-3-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er en behovsanalyse?',
        subTasks: [
          {
            label: 'a',
            task: 'Definer behovsanalyse.',
            solution: 'Systematisk gjennomgang av idrettens fysiske, tekniske, taktiske og mentale krav',
            multipleChoiceOptions: [
              'Systematisk gjennomgang av idrettens fysiske, tekniske, taktiske og mentale krav',
              'En test av maksimal styrke',
              'Måling av VO2max',
              'Teknisk analyse av bevegelser',
            ],
          },
        ],
        solution: 'Behovsanalysen danner grunnlag for å prioritere treningsinnhold og metoder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'trening-3-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva kjennetegner polarisert treningsfordeling i utholdenhetsidrett?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig fordeling.',
            solution: '75-80% lett, 15-20% hardt, lite på terskel',
            multipleChoiceOptions: [
              '75-80% lett, 15-20% hardt, lite på terskel',
              '50% lett, 50% hardt',
              '100% høy intensitet',
              '33% i hver intensitetssone',
            ],
          },
        ],
        solution: 'Polarisert trening unngår "grå sone"-trening og har vist gode resultater i forskning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'trening-3-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke fysiske egenskaper er viktigst i ballspill?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg viktige egenskaper.',
            solution: 'Gjentatte sprinter, retningsendringer, hoppkapasitet og aerob utholdenhet',
            multipleChoiceOptions: [
              'Gjentatte sprinter, retningsendringer, hoppkapasitet og aerob utholdenhet',
              'Bare maksimal utholdenhet',
              'Bare maksimal styrke',
              'Bare bevegelighet',
            ],
          },
        ],
        solution: 'Ballspill krever en kombinasjon av mange fysiske egenskaper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'trening-3-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva menes med overføringsverdi i trening?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar overføringsverdi.',
            solution: 'Hvor mye treningseffekten fra én øvelse bidrar til prestasjon i idretten',
            multipleChoiceOptions: [
              'Hvor mye treningseffekten fra én øvelse bidrar til prestasjon i idretten',
              'Å bytte fra én idrett til en annen',
              'Å overføre penger til treningsklubb',
              'Å kopiere andres treningsprogram',
            ],
          },
        ],
        solution: 'Overføringsverdi kan være positiv, nøytral eller negativ.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'trening-3-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Gjennomfør en enkel behovsanalyse for en selvvalgt idrett. Identifiser de viktigste fysiske kravene og foreslå treningsmetoder for å utvikle disse.',
        solution: 'Besvarelsen bør inkludere: idrettens karakteristikk, dominerende energisystem, viktigste fysiske egenskaper (styrke, utholdenhet, hurtighet, koordinasjon), og konkrete treningsmetoder med begrunnelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4: Teknologisk treningsstøtte
// ============================================================================

export const CHAPTER_TRENING_3_4: TextbookChapter = {
  id: 'trening-3-4',
  courseId: 'trening-3',
  chapterNumber: '4',
  title: 'Teknologisk treningsstøtte',
  description: 'Bruk av moderne teknologi for å måle, analysere og optimalisere trening.',
  estimatedMinutes: 80,
  competenceGoals: [
    'forstå og anvende treningsteknologi',
    'tolke data fra wearables og sensorer',
    'kritisk vurdere teknologiens rolle i trening',
  ],
  content: [
    {
      id: 'trening-3-4-intro',
      type: 'text',
      content: `Teknologi har revolusjonert hvordan vi måler og analyserer trening. Fra pulsklokker til GPS-trackere, fra kraftplattformer til videoanalyse - moderne utøvere har tilgang til mer data enn noen gang. I dette kapitlet lærer du å bruke og tolke treningsteknologi kritisk.`,
    },
    {
      id: 'trening-3-4-def-1',
      type: 'definition',
      title: 'Treningsteknologi',
      content: `Treningsteknologi omfatter alle tekniske hjelpemidler som brukes for å måle, registrere, analysere eller forbedre treningseffekt. Dette inkluderer wearables, sensorer, programvare og analyseverkktøy.`,
    },
    {
      id: 'trening-3-4-text-1',
      type: 'text',
      content: `**Wearables og sportsklokker**

**Pulsmåling**:
- Brystbelte (mest nøyaktig)
- Optisk sensor (håndledd)
- Hvilepuls, makspuls, pulssoner
- HRV (Heart Rate Variability)

**GPS-tracking**:
- Distanse og hastighet
- Høydemeter
- Pace og splits
- Rute og kart

**Aktivitetsmåling**:
- Skritt og daglig aktivitet
- Søvnkvalitet
- Kaloriforbruk (estimat)
- Treningsbelastning

**Avanserte metrics**:
- Training Load (Garmin, Polar)
- Recovery time
- VO2max-estimat
- Running dynamics (kadence, bakkekontakt)`,
    },
    {
      id: 'trening-3-4-text-2',
      type: 'text',
      content: `**Kraftmåling og bevegelsesanalyse**

**Kraftplattformer**:
- Måler kraft i flere retninger
- Hopp- og landingsanalyse
- Asymmetri mellom bein
- Rate of force development
- Brukes i testing og rehab

**Velocity-based training (VBT)**:
- Måler stangfart i styrkeøvelser
- Autoregulering av belastning
- Feedback i sanntid
- Enheter: PUSH, GymAware, Tendo

**Videoanalyse**:
- Teknikk i slow motion
- Vinkel- og posisjonsmålinger
- Sammenligning med idealteknikk
- Apps: Hudl, Dartfish, Coach's Eye

**3D-bevegelsesanalyse**:
- Markører på kroppen
- Nøyaktig leddvinkler
- Biomekanisk modellering
- Brukes i forskning og elite`,
    },
    {
      id: 'trening-3-4-text-3',
      type: 'text',
      content: `**Fysiologisk testing og monitorering**

**Laktatmåling**:
- Blodprøve fra finger/øre
- Bestemmer anaerob terskel
- Treningssoner basert på laktat
- Bærbare målere (Lactate Pro, Edge)

**Oksygenopptak (VO2)**:
- Måler O2-forbruk og CO2-produksjon
- Gullstandard for aerob kapasitet
- Laboratorie vs. felt-tester
- Kostbart utstyr

**Muskeloksygenering (NIRS)**:
- Sensor på muskel
- Måler lokal oksygentilgjengelighet
- Huski, Moxy
- Brukes i utholdenhetsidrett

**HRV-analyse**:
- Variasjon mellom hjerteslag
- Indikator på restitusjon
- Morgen-måling
- Apps: HRV4Training, EliteHRV`,
    },
    {
      id: 'trening-3-4-text-4',
      type: 'text',
      content: `**Treningsplanlegging og dataanalyse**

**Treningslogg-programvare**:
- TrainingPeaks
- Today's Plan
- Golden Cheetah (gratis)
- Intervals.icu (gratis)

**Nyttige metrics**:
- TSS (Training Stress Score)
- CTL (Chronic Training Load)
- ATL (Acute Training Load)
- TSB (Training Stress Balance)

**Datavisualisering**:
- Trender over tid
- Sammenligning av økter
- Formkurver
- Prestasjonsprogresjon

**Kunstig intelligens (AI)**:
- Automatisk treningsplanlegging
- Analyse av store datamengder
- Prediksjoner og anbefalinger
- Under utvikling, ikke erstatning for trener`,
    },
    {
      id: 'trening-3-4-warning-1',
      type: 'warning',
      title: 'Dataoverload',
      content: `Mer data betyr ikke alltid bedre trening. For mye fokus på tall kan ta fokus bort fra kroppens signaler og gjøre trening stressende. Bruk teknologi som et verktøy, ikke som en erstatning for sunn fornuft og erfaring.`,
    },
    {
      id: 'trening-3-4-tip-1',
      type: 'tip',
      title: 'Validering av data',
      content: `Ikke all treningsteknologi er like nøyaktig. Valider dataene dine med subjektiv opplevelse og anerkjente tester. En pulsklokkes VO2max-estimat kan være 10-15% feil.`,
    },
    {
      id: 'trening-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'trening-3-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er HRV (Heart Rate Variability)?',
        subTasks: [
          {
            label: 'a',
            task: 'Definer HRV.',
            solution: 'Variasjon i tid mellom hjerteslag, brukes som indikator på restitusjon',
            multipleChoiceOptions: [
              'Variasjon i tid mellom hjerteslag, brukes som indikator på restitusjon',
              'Gjennomsnittlig hjertefrekvens',
              'Maksimal hjertefrekvens',
              'Hvilepuls',
            ],
          },
        ],
        solution: 'Høyere HRV indikerer generelt bedre restitusjon og lavere stress.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'trening-3-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva måler velocity-based training (VBT)?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv VBT.',
            solution: 'Stangfart i styrkeøvelser for å autoregulere belastning',
            multipleChoiceOptions: [
              'Stangfart i styrkeøvelser for å autoregulere belastning',
              'Løpsfart',
              'Hjertefrekvens',
              'Kaloriforbruk',
            ],
          },
        ],
        solution: 'VBT gir objektiv tilbakemelding og muliggjør presisjon i styrketrening.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'trening-3-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er TSS (Training Stress Score)?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar TSS.',
            solution: 'En metrikk som kvantifiserer treningsbelastning basert på intensitet og varighet',
            multipleChoiceOptions: [
              'En metrikk som kvantifiserer treningsbelastning basert på intensitet og varighet',
              'Antall repetisjoner',
              'Treningsfrekvens',
              'Søvnkvalitet',
            ],
          },
        ],
        solution: 'TSS brukes til å planlegge progresjon og unngå overtrening.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'trening-3-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilke begrensninger har treningsteknologi?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg viktige begrensninger.',
            solution: 'Varierende nøyaktighet, dataoverload, kan overskygge kroppens signaler',
            multipleChoiceOptions: [
              'Varierende nøyaktighet, dataoverload, kan overskygge kroppens signaler',
              'Ingen begrensninger',
              'For dyrt',
              'Bare nyttig for elite',
            ],
          },
        ],
        solution: 'Teknologi er et verktøy, ikke en erstatning for kunnskap og erfaring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'trening-3-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Velg en type treningsteknologi og beskriv hvordan den kan brukes i en selvvalgt idrett. Diskuter både fordeler og begrensninger.',
        solution: 'Besvarelsen bør inkludere: valgt teknologi, idrett, konkret bruksområde, hvordan data tolkes og anvendes, potensielle feilkilder og kritisk vurdering av nytte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5: Forskning i treningslære
// ============================================================================

export const CHAPTER_TRENING_3_5: TextbookChapter = {
  id: 'trening-3-5',
  courseId: 'trening-3',
  chapterNumber: '5',
  title: 'Forskning i treningslære',
  description: 'Forstå forskningsmetoder, kritisk lesing av studier og evidensbasert trening.',
  estimatedMinutes: 85,
  competenceGoals: [
    'forstå grunnleggende forskningsmetoder i idrettsvitenskap',
    'kritisk vurdere treningsrelatert forskning',
    'anvende forskningsbasert kunnskap i praksis',
  ],
  content: [
    {
      id: 'trening-3-5-intro',
      type: 'text',
      content: `I en verden full av treningsmyter og "brosciense" er evnen til å lese og forstå forskning uvurderlig. Dette kapitlet gir deg verktøyene til å vurdere treningsstudier kritisk, forstå forskningsmetoder, og anvende evidensbasert kunnskap i praksis.`,
    },
    {
      id: 'trening-3-5-def-1',
      type: 'definition',
      title: 'Evidensbasert trening',
      content: `Evidensbasert trening er integrering av beste tilgjengelige forskning med praktisk erfaring og utøverens individuelle behov og preferanser. Det handler ikke om å blindt følge forskning, men å bruke den som ett av flere verktøy.`,
    },
    {
      id: 'trening-3-5-text-1',
      type: 'text',
      content: `**Forskningsdesign i idrettsvitenskap**

**Casestudier**:
- Detaljert studie av enkelindivid/tilfelle
- Genererer hypoteser
- Lav generaliserbarhet
- Nyttig for unike tilfeller

**Tverrsnittsstudier**:
- Måler på ett tidspunkt
- Kan vise sammenhenger
- Kan ikke vise årsak-virkning
- Relativt rimelige og raske

**Longitudinelle studier**:
- Følger deltakere over tid
- Kan vise utvikling
- Tidkrevende og kostbare
- Frafall kan være problem

**Eksperimentelle studier (RCT)**:
- Randomisert kontrollert forsøk
- Gullstandard for å vise årsak-virkning
- Kontrollgruppe og intervensjon
- Vanskelig å blinde i treningsstudier`,
    },
    {
      id: 'trening-3-5-text-2',
      type: 'text',
      content: `**Kritisk lesing av forskningsartikler**

**IMRaD-struktur**:
- **Introduction**: Bakgrunn og problemstilling
- **Methods**: Hvordan studien ble gjennomført
- **Results**: Funn og data
- **Discussion**: Tolkning og implikasjoner

**Viktige spørsmål å stille**:
1. Er utvalget representativt?
2. Er studiedesignet passende?
3. Var det kontrollgruppe?
4. Er effektstørrelsen praktisk betydningsfull?
5. Kan funnene generaliseres?
6. Er det interessekonflikter?

**Statistiske begreper**:
- **P-verdi**: Sannsynlighet for tilfeldig resultat (< 0,05 = signifikant)
- **Effektstørrelse**: Hvor stor er forskjellen (Cohen's d)
- **Konfidensintervall**: Usikkerhet i estimat
- **Statistisk vs. praktisk signifikans**: Kan være statistisk uten å være praktisk viktig`,
    },
    {
      id: 'trening-3-5-text-3',
      type: 'text',
      content: `**Evidenshierarkiet**

Fra svakest til sterkest bevis:

1. **Ekspertuttalelser og erfaring**
2. **Casestudier**
3. **Tverrsnittsstudier**
4. **Kohort-studier**
5. **Randomiserte kontrollerte studier (RCT)**
6. **Systematiske reviews**
7. **Meta-analyser**

**Systematisk review**:
- Oppsummerer all forskning på et tema
- Systematisk søk og utvelgelse
- Kvalitetsvurdering av studier
- Narrativ eller kvantitativ syntese

**Meta-analyse**:
- Kvantitativ sammenslåing av studier
- Beregner samlet effektstørrelse
- Kan avdekke mønstre
- Avhengig av studiekvalitet`,
    },
    {
      id: 'trening-3-5-text-4',
      type: 'text',
      content: `**Vanlige feilkilder og bias**

**Seleksjonsbias**:
- Skjevt utvalg
- Frivillige deltakere
- Ikke representativt

**Publikasjonsbias**:
- Positive funn publiseres oftere
- Negative studier "forsvinner"
- Overestimerer effekter

**Konfirmasjonsbias**:
- Tolker data i favør av hypotesen
- Ignorerer motstridende funn
- Gjelder forskere og lesere

**Placeboeffekt**:
- Forventning påvirker resultat
- Vanskelig å kontrollere i trening
- Kan gi reelle effekter

**Fra forskning til praksis**:
- Forskningsresultater er gjennomsnitt
- Individuell respons varierer
- Kontekst påvirker overførbarhet
- Test selv og evaluer`,
    },
    {
      id: 'trening-3-5-text-5',
      type: 'text',
      content: `**Aktuelle forskningstemaer i treningslære**

**Trening og genetikk**:
- Individuell treningsrespons
- ACTN3, ACE og andre gener
- Epigenetikk og trening
- Personalisert trening

**Concurrent training**:
- Kombinasjon av styrke og utholdenhet
- Interferens-effekten
- Optimal rekkefølge og timing
- Molekylære mekanismer

**Periodisering**:
- Sammenligning av ulike modeller
- Individuell respons
- Autoregulering vs. planlagt
- Fleksibel periodisering

**Restitusjon**:
- Søvn og prestasjon
- Kosthold og timing
- Aktiv vs. passiv restitusjon
- Psykologisk restitusjon

**Teknologi**:
- Wearables og validitet
- AI i treningsplanlegging
- VR og mentale trening
- Biofeedback`,
    },
    {
      id: 'trening-3-5-tip-1',
      type: 'tip',
      title: 'Søk etter forskning',
      content: `Google Scholar (scholar.google.com) og PubMed (pubmed.gov) er gode utgangspunkt for å finne forskningsartikler. Mange artikler er åpent tilgjengelige, og universitetsbiblioteker gir ofte tilgang til resten.`,
    },
    {
      id: 'trening-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'trening-3-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er evidensbasert trening?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon.',
            solution: 'Integrering av forskning, praktisk erfaring og individuelle behov',
            multipleChoiceOptions: [
              'Integrering av forskning, praktisk erfaring og individuelle behov',
              'Å blindt følge forskning',
              'Å bare bruke egen erfaring',
              'Å kopiere eliteutøvere',
            ],
          },
        ],
        solution: 'Evidensbasert trening balanserer flere kunnskapskilder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'trening-3-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er RCT (randomisert kontrollert forsøk)?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv RCT.',
            solution: 'Forsøksdesign med tilfeldig fordeling til kontroll- og intervensjonsgruppe',
            multipleChoiceOptions: [
              'Forsøksdesign med tilfeldig fordeling til kontroll- og intervensjonsgruppe',
              'En type treningsøvelse',
              'En statistisk beregning',
              'En måte å periodisere på',
            ],
          },
        ],
        solution: 'RCT er gullstandard for å påvise årsak-virkning i medisinsk forskning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'trening-3-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er publikasjonsbias?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar publikasjonsbias.',
            solution: 'Tendensen til at positive funn publiseres oftere enn negative',
            multipleChoiceOptions: [
              'Tendensen til at positive funn publiseres oftere enn negative',
              'Feil i publisering',
              'Plagiering',
              'Mangel på publisering',
            ],
          },
        ],
        solution: 'Publikasjonsbias kan føre til at effekter overestimeres i litteraturen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'trening-3-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er forskjellen mellom statistisk og praktisk signifikans?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar forskjellen.',
            solution: 'Statistisk signifikans betyr at resultatet neppe er tilfeldig, praktisk signifikans at effekten er stor nok til å ha betydning i praksis',
            multipleChoiceOptions: [
              'Statistisk signifikans betyr at resultatet neppe er tilfeldig, praktisk signifikans at effekten er stor nok til å ha betydning i praksis',
              'De betyr det samme',
              'Statistisk er viktigere enn praktisk',
              'Praktisk betyr at det er utført i praksis',
            ],
          },
        ],
        solution: 'En liten effekt kan være statistisk signifikant med stort utvalg, men uten praktisk betydning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'trening-3-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Finn en forskningsartikkel om et treningsrelatert tema. Les abstractet og metodedelen. Vurder styrker og svakheter ved studien.',
        solution: 'Besvarelsen bør inkludere: artikkeltittel og kilde, hovedfunn fra abstract, beskrivelse av metode (utvalg, design, variabler), minst 2 styrker og 2 svakheter, og vurdering av om funnene kan generaliseres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6: Toppidrett
// ============================================================================

export const CHAPTER_TRENING_3_6: TextbookChapter = {
  id: 'trening-3-6',
  courseId: 'trening-3',
  chapterNumber: '6',
  title: 'Toppidrett',
  description: 'Innblikk i toppidrettens krav, struktur og prinsipper for talentutvikling.',
  estimatedMinutes: 85,
  competenceGoals: [
    'forstå krav og strukturer i norsk toppidrett',
    'kjenne til prinsipper for talentutvikling',
    'reflektere over etiske aspekter ved toppidrett',
  ],
  content: [
    {
      id: 'trening-3-6-intro',
      type: 'text',
      content: `Toppidrett representerer menneskets ytterste fysiske og mentale kapasitet. I dette kapitlet får du innblikk i hva som kreves for å nå toppen, hvordan norsk toppidrett er organisert, og hvilke prinsipper som ligger til grunn for talentutvikling. Vi ser også på de etiske sidene ved toppidrettens krav.`,
    },
    {
      id: 'trening-3-6-def-1',
      type: 'definition',
      title: 'Toppidrett',
      content: `Toppidrett er idrett på høyeste prestasjonsnivå, der utøverne konkurrerer nasjonalt og internasjonalt med mål om medaljer i mesterskap. Det krever full dedikasjon og profesjonalisering av alle aspekter ved trening og livsstil.`,
    },
    {
      id: 'trening-3-6-text-1',
      type: 'text',
      content: `**Norsk toppidrettsmodell**

**Olympiatoppen**:
- Nasjonal koordinering av toppidrett
- Kompetansesentrum for idrettsfag
- Støtte til særforbund og utøvere
- Fysisk, mental og medisinsk oppfølging

**Toppidrettssentre**:
- Regionale sentre (Oslo, Bergen, Trondheim, Tromsø)
- Tverrfaglig støtteapparat
- Treningsfasiliteter
- Idretts- og videregående skoler

**Finansiering**:
- Statlig støtte via Kulturdepartementet
- Særforbundenes egne midler
- Sponsorer og private midler
- Utdanningsstipend og støtteordninger

**Dual karriere**:
- Kombinasjon av idrett og utdanning
- Tilrettelagte studieprogrammer
- Fleksible ordninger
- Karriereplanlegging`,
    },
    {
      id: 'trening-3-6-text-2',
      type: 'text',
      content: `**Krav til toppidrettsutøvere**

**Fysiske krav**:
- Ekstremt høyt prestasjonsnivå
- Optimal genetisk forutsetning
- Maksimal treningskapasitet
- Evne til å tåle belastning

**Treningskrav**:
- 20-35 timer trening/uke (idrettsavhengig)
- 10+ år systematisk trening
- Helårsperiodisering
- Profesjonelt støtteapparat

**Mentale krav**:
- Håndtering av press
- Indre motivasjon
- Resiliens ved motgang
- Konsentrasjon og fokus
- Målsetting og planlegging

**Livsstilskrav**:
- Optimal restitusjon og søvn
- Tilpasset kosthold
- Begrenset sosialt liv
- Reising og fravær fra hjemmet
- Balanse mellom idrett og livet`,
    },
    {
      id: 'trening-3-6-text-3',
      type: 'text',
      content: `**Talentutvikling**

**Hva er talent?**:
- Genetiske forutsetninger
- Treningshistorikk og erfaring
- Psykologiske egenskaper
- Sosial og økonomisk støtte
- Timing og muligheter

**Long-Term Athlete Development (LTAD)**:
- FUNdamentals (lek og grunnleggende bevegelse)
- Learning to Train (ferdighetsutvikling)
- Training to Train (bygge treningskapasitet)
- Training to Compete (konkurranseforberedelse)
- Training to Win (prestasjonsfokus)

**Tidlig vs. sen spesialisering**:
- Noen idretter krever tidlig spesialisering (turn, kunstløp)
- De fleste idretter: bred base først, spesialisering senere
- Relativ alderseffekt (RAE)
- Biologisk vs. kronologisk alder

**Talent-ID utfordringer**:
- Vanskelig å predikere fremtidig prestasjon
- Tidlig modenhet vs. sen blomstring
- Psykologiske faktorer undervurderes
- Frafall av potensielle talenter`,
    },
    {
      id: 'trening-3-6-text-4',
      type: 'text',
      content: `**Støtteapparat i toppidrett**

**Trenerteam**:
- Hovedtrener (ansvar for helhet)
- Teknikktrener
- Fysisk trener
- Spesialtrenere

**Medisinsk team**:
- Idrettslege
- Fysioterapeut
- Kiropraktor/manuellterapeut
- Ernæringsfysiolog

**Mentalt team**:
- Idrettspsykolog
- Mentaltrener
- Karriererådgiver

**Administrativt**:
- Manager/agent
- Sponsor-koordinator
- Media-ansvarlig
- Logistikk og reise

**Testpersonell**:
- Fysiologiske tester
- Biomekanisk analyse
- Prestasjonsanalyse`,
    },
    {
      id: 'trening-3-6-text-5',
      type: 'text',
      content: `**Etiske aspekter ved toppidrett**

**Doping**:
- Antidoping-arbeid (WADA, ADNO)
- Helserisiko
- Fairplay og rettferdighet
- Whereabouts og testing

**Helse vs. prestasjon**:
- Overtrening og burnout
- Spiseforstyrrelser
- Skader og langtidskonsekvenser
- Psykisk helse

**Rettferdig konkurranse**:
- Økonomisk ulikhet
- Kjønnsulikhet
- Tilgjengelighet for funksjonshemmede
- Nasjonale ressurser

**Livet etter idrettskarrieren**:
- Identitet og selvbilde
- Utdanning og arbeid
- Sosiale nettverk
- Fysisk og psykisk helse

**Barns rettigheter**:
- Press fra foreldre/trenere
- Utbrenthet i ung alder
- Rett til lek og skole
- Beskyttelse mot overgrep`,
    },
    {
      id: 'trening-3-6-warning-1',
      type: 'warning',
      title: 'Idrettens pris',
      content: `Toppidrett har en pris. Mange utøvere opplever skader, overtrening, psykiske utfordringer eller vanskelig overgang til livet etter karrieren. En bærekraftig tilnærming balanserer prestasjonsmål med langsiktig helse og velvære.`,
    },
    {
      id: 'trening-3-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'trening-3-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er Olympiatoppens rolle?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv Olympiatoppens funksjon.',
            solution: 'Nasjonal koordinering av toppidrett, kompetansesenter og støtte til utøvere',
            multipleChoiceOptions: [
              'Nasjonal koordinering av toppidrett, kompetansesenter og støtte til utøvere',
              'Å arrangere OL',
              'Å trene breddeidrett',
              'Å bygge idrettsanlegg',
            ],
          },
        ],
        solution: 'Olympiatoppen koordinerer norsk toppidrett og tilbyr tverrfaglig støtte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'trening-3-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er LTAD (Long-Term Athlete Development)?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar LTAD.',
            solution: 'En modell for langsiktig utøverutvikling gjennom ulike stadier',
            multipleChoiceOptions: [
              'En modell for langsiktig utøverutvikling gjennom ulike stadier',
              'En treningsmetode',
              'En type periodisering',
              'En dopingtest',
            ],
          },
        ],
        solution: 'LTAD fokuserer på riktig utvikling til riktig tid i utøverens karriere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'trening-3-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er relativ alderseffekt (RAE)?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv RAE.',
            solution: 'At barn født tidlig på året har fordel i aldersbestemte klasser',
            multipleChoiceOptions: [
              'At barn født tidlig på året har fordel i aldersbestemte klasser',
              'At eldre utøvere presterer bedre',
              'At biologisk alder er viktigere enn kronologisk',
              'At talent avhenger av alder',
            ],
          },
        ],
        solution: 'RAE kan føre til at senmodne talenter overses i talentutvikling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'trening-3-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn tre etiske utfordringer i toppidrett.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg etiske utfordringer.',
            solution: 'Doping, helse vs. prestasjon, og livet etter karrieren',
            multipleChoiceOptions: [
              'Doping, helse vs. prestasjon, og livet etter karrieren',
              'For mye trening',
              'For lite trening',
              'Dårlige fasiliteter',
            ],
          },
        ],
        solution: 'Toppidrett stiller store etiske krav til utøvere, trenere og system.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'trening-3-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Diskuter fordeler og ulemper ved tidlig spesialisering vs. allsidig aktivitet i barneidrett. Bruk eksempler fra ulike idretter.',
        solution: 'Besvarelsen bør inkludere: definisjoner, forskjeller mellom idretter (tidlig spesialisering nødvendig i f.eks. turn vs. ballsport), fordeler (teknikk, timing) og ulemper (skader, frafall), samt forskningsbasert begrunnelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7: Helse og livsstil
// ============================================================================

export const CHAPTER_TRENING_3_7: TextbookChapter = {
  id: 'trening-3-7',
  courseId: 'trening-3',
  chapterNumber: '7',
  title: 'Helse og livsstil',
  description: 'Sammenhengen mellom trening, livsstil og helhetlig helse i et livsløpsperspektiv.',
  estimatedMinutes: 80,
  competenceGoals: [
    'forstå treningens rolle i forebygging av livsstilssykdommer',
    'kunne gi helsefremmende råd basert på kunnskap',
    'reflektere over egen og andres livsstil',
  ],
  content: [
    {
      id: 'trening-3-7-intro',
      type: 'text',
      content: `Fysisk aktivitet er en av de viktigste faktorene for god helse gjennom hele livet. I dette kapitlet ser vi på sammenhengen mellom trening, livsstil og helse i et helhetlig perspektiv. Du lærer å forstå og formidle helsefremmende kunnskap til ulike målgrupper.`,
    },
    {
      id: 'trening-3-7-def-1',
      type: 'definition',
      title: 'Livsstilssykdommer',
      content: `Livsstilssykdommer er sykdommer der livsstilsfaktorer som fysisk inaktivitet, usunt kosthold, røyking og alkohol spiller en vesentlig rolle. Eksempler er hjerte-karsykdommer, type 2-diabetes, enkelte kreftformer og muskel-skjelettlidelser.`,
    },
    {
      id: 'trening-3-7-text-1',
      type: 'text',
      content: `**Fysisk aktivitet og sykdomsforebygging**

**Hjerte-karsykdommer**:
- Kondisjonstrening styrker hjertet
- Reduserer blodtrykk
- Forbedrer kolesterolprofil
- Reduserer risiko 30-50%

**Type 2-diabetes**:
- Bedrer insulinfølsomhet
- Hjelper med vektkontroll
- Kan reversere prediabetes
- Anbefales som primærbehandling

**Kreft**:
- Reduserer risiko for flere krefttyper
- Bedrer prognose ved behandling
- Motvirker fatigue
- Viktig i rehabilitering

**Muskel-skjelettlidelser**:
- Styrketrening forebygger osteoporose
- Bevegelse lindrer artrose
- Reduserer ryggsmerter
- Forebygger fall hos eldre

**Mental helse**:
- Reduserer symptomer på depresjon
- Reduserer angst
- Forbedrer søvn
- Øker livskvalitet`,
    },
    {
      id: 'trening-3-7-text-2',
      type: 'text',
      content: `**Aktivitetsanbefalinger for ulike grupper**

**Friske voksne**:
- 150-300 min moderat ELLER 75-150 min intensiv/uke
- Styrketrening 2+ dager/uke
- Redusere stillesitting
- Litt er bedre enn ingenting

**Eldre (65+)**:
- Som voksne + balanse og fallforebygging
- Tilpass til funksjonsevne
- Prioriter funksjonell styrke
- Daglig aktivitet viktig

**Barn og unge**:
- 60 min moderat-intensiv daglig
- Variert aktivitet
- Styrke 3 dager/uke
- Begrense skjermtid

**Kronisk syke**:
- Tilpasset aktivitet anbefales for de fleste
- Samarbeid med helsepersonell
- Start forsiktig, øk gradvis
- Store helsegevinster mulig

**Gravide**:
- Fortsett aktivitet om det føles bra
- Unngå kontaktidrett og fall
- 150 min moderat aktivitet/uke
- Styrketrening anbefales`,
    },
    {
      id: 'trening-3-7-text-3',
      type: 'text',
      content: `**Helhetlig livsstil**

**Søvn**:
- 7-9 timer for voksne
- Kvalitet like viktig som kvantitet
- Påvirker restitusjon, læring, helse
- Regelmessig døgnrytme

**Kosthold**:
- Variert og balansert
- Nok energi for aktivitetsnivå
- Frukt, grønnsaker, fullkorn, fisk
- Begrense sukker, mettet fett, salt

**Stressmestring**:
- Kronisk stress er helseskadelig
- Aktivitet som stressventil
- Avspenning og mindfulness
- Sosial støtte

**Sosiale relasjoner**:
- Ensomhet like skadelig som røyking
- Aktivitet som sosial arena
- Støttende nettverk
- Fellesskap og tilhørighet

**Rus og tobakk**:
- Røyking: Største enkeltrisk for tidlig død
- Alkohol: Moderat eller ingen
- Aktivitet kan ikke kompensere for røyking`,
    },
    {
      id: 'trening-3-7-text-4',
      type: 'text',
      content: `**Atferdsendring og motivasjon**

**Transteoretisk modell (TTM)**:
1. **Føroverveielse**: Ikke klar for endring
2. **Overveielse**: Tenker på endring
3. **Forberedelse**: Planlegger endring
4. **Handling**: Gjennomfører endring
5. **Vedlikehold**: Opprettholder ny atferd

**Motivasjonsstrategier**:
- Sett realistiske mål
- Finn indre motivasjon
- Bygg vaner gradvis
- Bruk sosial støtte
- Feir små seire
- Ha en plan for tilbakefall

**Barrierer og løsninger**:
- "Ikke tid" → Korte økter, integrert i hverdagen
- "Orker ikke" → Start smått, finn noe du liker
- "Koster penger" → Gange, løping, hjemmetrening
- "Kjedelig" → Finn aktiviteter du liker, varier
- "Ikke i form" → Alle kan starte, tilpass nivå

**Helsefremmende kommunikasjon**:
- Møt personen der de er
- Unngå pekefinger
- Fokuser på gevinster, ikke risiko
- Støtt autonomi og valg`,
    },
    {
      id: 'trening-3-7-text-5',
      type: 'text',
      content: `**Helse i et samfunnsperspektiv**

**Folkehelse og aktivitet**:
- Kun 30% av voksne møter anbefalinger
- Stillesitting økende problem
- Sosial ulikhet i aktivitetsnivå
- Store samfunnskostnader ved inaktivitet

**Tiltak på samfunnsnivå**:
- Gang- og sykkelveger
- Tilgjengelige idrettsanlegg
- Aktivitetsfremmende skoler
- Arbeidsplassaktivitet
- Grøntområder og friluftsliv

**Rollen som helseformidler**:
- Gi kunnskap tilpasset mottaker
- Være et godt forbilde
- Skape gode opplevelser
- Bidra til aktive nærmiljøer

**Bærekraftig aktivitet**:
- Aktivitet som varer livet ut
- Ikke ekstremisme
- Tilpasset livssituasjon
- Glede og mestring i fokus`,
    },
    {
      id: 'trening-3-7-tip-1',
      type: 'tip',
      title: 'Den viktigste øvelsen',
      content: `Den beste treningsformen er den du faktisk gjennomfører. Perfekt er fienden til godt nok. En daglig 10-minutters tur er bedre enn et ambisiøst program du aldri starter på.`,
    },
    {
      id: 'trening-3-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'trening-3-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er livsstilssykdommer?',
        subTasks: [
          {
            label: 'a',
            task: 'Definer livsstilssykdommer.',
            solution: 'Sykdommer der livsstilsfaktorer som inaktivitet, kosthold og røyking spiller en vesentlig rolle',
            multipleChoiceOptions: [
              'Sykdommer der livsstilsfaktorer som inaktivitet, kosthold og røyking spiller en vesentlig rolle',
              'Sykdommer man arver',
              'Sykdommer fra trening',
              'Smittsomme sykdommer',
            ],
          },
        ],
        solution: 'Livsstilssykdommer kan i stor grad forebygges gjennom sunne vaner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'trening-3-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er aktivitetsanbefalingen for friske voksne?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig anbefaling.',
            solution: '150-300 min moderat aktivitet + styrketrening 2+ dager/uke',
            multipleChoiceOptions: [
              '150-300 min moderat aktivitet + styrketrening 2+ dager/uke',
              '30 min total per uke',
              'Bare styrketrening',
              'Så mye som mulig',
            ],
          },
        ],
        solution: 'Anbefalingene er minimumsanbefalinger - mer aktivitet gir ytterligere gevinster.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'trening-3-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke stadier har den transteoretiske modellen for atferdsendring?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktige stadier.',
            solution: 'Føroverveielse, overveielse, forberedelse, handling, vedlikehold',
            multipleChoiceOptions: [
              'Føroverveielse, overveielse, forberedelse, handling, vedlikehold',
              'Start, midt, slutt',
              'Lett, middels, hard',
              'Styrke, utholdenhet, bevegelighet',
            ],
          },
        ],
        solution: 'Modellen hjelper å tilpasse kommunikasjon og tiltak til personens beredskapsnivå.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'trening-3-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er stillesitting et helseproblem uavhengig av trening?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar sammenhengen.',
            solution: 'Lang stillesitting er skadelig selv om man trener, fordi kroppen trenger jevnlig bevegelse gjennom dagen',
            multipleChoiceOptions: [
              'Lang stillesitting er skadelig selv om man trener, fordi kroppen trenger jevnlig bevegelse gjennom dagen',
              'Stillesitting er bare et problem for inaktive',
              'Trening kompenserer for all stillesitting',
              'Stillesitting er ikke skadelig',
            ],
          },
        ],
        solution: 'Forskning viser at lang sammenhengende stillesitting er en uavhengig risikofaktor.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'trening-3-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'En venn sier at hen ikke har tid til å trene og at det ikke nytter uansett. Hvordan vil du møte dette med helsefremmende kommunikasjon?',
        solution: 'Forslag: Anerkjenn følelsen, unngå pekefinger, utforsk hva de liker, foreslå små tiltak (gå til jobben, ta trappen), fokuser på positive effekter (energi, søvn), støtt autonomi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8: Selvstendig prosjekt
// ============================================================================

export const CHAPTER_TRENING_3_8: TextbookChapter = {
  id: 'trening-3-8',
  courseId: 'trening-3',
  chapterNumber: '8',
  title: 'Selvstendig prosjekt',
  description: 'Planlegging, gjennomføring og evaluering av et selvstendig fordypningsprosjekt.',
  estimatedMinutes: 120,
  competenceGoals: [
    'planlegge og gjennomføre et selvstendig prosjekt',
    'anvende treningslærekunnskap i praksis',
    'dokumentere, analysere og presentere resultater',
  ],
  content: [
    {
      id: 'trening-3-8-intro',
      type: 'text',
      content: `Avslutningsprosjektet i Treningslære 3 gir deg mulighet til å fordype deg i et selvvalgt tema og anvende kunnskapen du har tilegnet deg gjennom kurset. Du skal planlegge, gjennomføre og evaluere et prosjekt der du viser selvstendighet, faglig dybde og evne til kritisk refleksjon.`,
    },
    {
      id: 'trening-3-8-def-1',
      type: 'definition',
      title: 'Fordypningsprosjekt',
      content: `Et fordypningsprosjekt er en selvstendig faglig oppgave der eleven utforsker et avgrenset tema i dybden. Det involverer problemformulering, datainnsamling, analyse og presentasjon av funn, samt refleksjon over prosess og læring.`,
    },
    {
      id: 'trening-3-8-text-1',
      type: 'text',
      content: `**Prosjekttyper**

**Treningsintervensjonsprosjekt**:
- Design og gjennomfør et treningsprogram
- For deg selv eller andre (med samtykke)
- Dokumenter effekter
- Evaluér metode og resultater

**Forskningsprosjekt**:
- Utforsk et forskningsspørsmål
- Litteraturstudie eller mindre studie
- Analyse og diskusjon
- Faglig rapport

**Case-studie**:
- Dybdestudie av en utøver/gruppe
- Behovsanalyse og tiltak
- Dokumentasjon og evaluering
- Refleksjon over praksis

**Formidlingsprosjekt**:
- Utvikle undervisningsmateriell
- Treningsvideoer eller program
- Artikkel eller blogg
- Presentasjon for målgruppe`,
    },
    {
      id: 'trening-3-8-text-2',
      type: 'text',
      content: `**Planleggingsfasen**

**Valg av tema**:
- Velg noe du brenner for
- Må kunne knyttes til pensum
- Realistisk omfang
- Tilgjengelig informasjon/data

**Problemformulering**:
- Klart og avgrenset spørsmål
- Konkret og målbart (hvis mulig)
- Relevant for treningslære
- Eksempel: "Hvordan påvirker 8 ukers styrketrening hoppkapasiteten hos en basketballspiller?"

**Prosjektplan**:
- Tidsplan med milepæler
- Ressursbehov
- Metode for datainnsamling
- Plan for dokumentasjon

**Etiske vurderinger**:
- Samtykke fra deltakere
- Personvern og anonymitet
- Sikkerhet i gjennomføring
- Ærlig rapportering`,
    },
    {
      id: 'trening-3-8-text-3',
      type: 'text',
      content: `**Gjennomføringsfasen**

**Datainnsamling**:
- Følg planen, men vær fleksibel
- Dokumenter underveis
- Noter utfordringer og justeringer
- Hold tidsplanen

**Typer data**:
- **Kvantitative**: Tester, målinger, tall
- **Kvalitative**: Intervju, observasjon, dagbok
- **Sekundærdata**: Forskningsartikler, statistikk

**Treningslogg**:
- Dato, økt, innhold
- Belastning (volum, intensitet)
- Subjektiv opplevelse
- Ytre faktorer (søvn, stress, etc.)

**Testprosedyrer**:
- Standardiserte tester når mulig
- Dokumenter testprotokoll
- Pre- og post-testing
- Kontroller for feilkilder`,
    },
    {
      id: 'trening-3-8-text-4',
      type: 'text',
      content: `**Analysefasen**

**Databehandling**:
- Organiser data systematisk
- Beregn gjennomsnitt, endring, etc.
- Lag tabeller og figurer
- Identifiser mønstre

**Tolkning**:
- Hva viser dataene?
- Svarte du på problemstillingen?
- Stemmer det med teori?
- Alternative forklaringer?

**Diskusjon**:
- Sammenlign med forskning
- Styrker og svakheter
- Hva kunne vært gjort annerledes?
- Praktiske implikasjoner

**Konklusjon**:
- Oppsummer hovedfunn
- Svar på problemstillingen
- Begrensninger
- Forslag til videre arbeid`,
    },
    {
      id: 'trening-3-8-text-5',
      type: 'text',
      content: `**Rapportskriving**

**Struktur**:
1. **Tittel og sammendrag**
2. **Innledning**: Bakgrunn, problemstilling
3. **Teori**: Relevant pensum/forskning
4. **Metode**: Hvordan du gikk frem
5. **Resultater**: Hva du fant
6. **Diskusjon**: Tolkning og refleksjon
7. **Konklusjon**: Oppsummering
8. **Referanser**: Kilder

**Skrivtips**:
- Skriv klart og presist
- Unngå "jeg synes" - begrunn påstander
- Bruk fagbegreper korrekt
- Sitér kilder

**Referering**:
- Henvis til kilder i teksten
- Lag referanseliste
- Bruk konsistent stil (APA el.l.)
- Unngå plagiering`,
    },
    {
      id: 'trening-3-8-text-6',
      type: 'text',
      content: `**Presentasjon og vurdering**

**Muntlig presentasjon**:
- 10-15 minutter (følg retningslinjer)
- Strukturert og engasjerende
- Visuelle hjelpemidler
- Forbered deg på spørsmål

**Presentasjonstips**:
- Øv på forhånd
- Ha god tidsplan
- Snakk til publikum, ikke slides
- Avslutt med hovedbudskap

**Vurderingskriterier**:
- Faglig innhold og dybde
- Metodisk tilnærming
- Kritisk refleksjon
- Selvstendig arbeid
- Presentasjon og språk

**Egenvurdering**:
- Hva lærte du?
- Hva gikk bra/dårlig?
- Hva ville du gjort annerledes?
- Hvordan kan du bruke dette videre?`,
    },
    {
      id: 'trening-3-8-tip-1',
      type: 'tip',
      title: 'Start tidlig',
      content: `Treningsprosjekter tar tid. Begynn planleggingen tidlig, så du har nok uker til å gjennomføre en meningsfull intervensjon og analysere resultatene grundig.`,
    },
    {
      id: 'trening-3-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'trening-3-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilke prosjekttyper kan velges i fordypningsprosjektet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg mulige prosjekttyper.',
            solution: 'Treningsintervensjon, forskningsprosjekt, case-studie, formidlingsprosjekt',
            multipleChoiceOptions: [
              'Treningsintervensjon, forskningsprosjekt, case-studie, formidlingsprosjekt',
              'Bare treningsprosjekt',
              'Bare teoretisk oppgave',
              'Bare presentasjon',
            ],
          },
        ],
        solution: 'Prosjekttypen bør velges basert på interesser, ressurser og læringsmål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'trening-3-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva kjennetegner en god problemformulering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg kjennetegn.',
            solution: 'Klar, avgrenset, konkret og relevant for treningslære',
            multipleChoiceOptions: [
              'Klar, avgrenset, konkret og relevant for treningslære',
              'Så bred som mulig',
              'Uten faglig forankring',
              'Umulig å besvare',
            ],
          },
        ],
        solution: 'En god problemformulering gjør det mulig å svare konkret og faglig fundert.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'trening-3-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke etiske hensyn må tas i et treningsprosjekt med deltakere?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg etiske hensyn.',
            solution: 'Samtykke, personvern, sikkerhet og ærlig rapportering',
            multipleChoiceOptions: [
              'Samtykke, personvern, sikkerhet og ærlig rapportering',
              'Ingen etiske hensyn nødvendig',
              'Bare sikkerhet',
              'Bare samtykke',
            ],
          },
        ],
        solution: 'Etiske hensyn beskytter deltakere og sikrer forskningsintegritet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'trening-3-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilken struktur bør en prosjektrapport ha?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig struktur.',
            solution: 'Innledning, teori, metode, resultater, diskusjon, konklusjon, referanser',
            multipleChoiceOptions: [
              'Innledning, teori, metode, resultater, diskusjon, konklusjon, referanser',
              'Bare innledning og konklusjon',
              'Kun resultater',
              'Ingen fast struktur',
            ],
          },
        ],
        solution: 'IMRaD-strukturen (eller lignende) gir klarhet og gjør rapporten lettere å følge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'trening-3-8-ex-5',
        number: '5',
        type: 'classic',
        task: 'Utvikle en prosjektplan for et selvvalgt tema. Inkluder problemformulering, metode, tidsplan og etiske vurderinger.',
        solution: 'Planen bør inkludere: tema og begrunnelse, konkret problemformulering, beskrivelse av metode/datainnsamling, tidsplan med milepæler over minimum 6-8 uker, og refleksjon over etiske hensyn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'trening-3-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'trening-3-8-ex-6',
        number: '6',
        type: 'classic',
        task: 'Gjennomfør fordypningsprosjektet ditt og lever rapport og/eller presentasjon i henhold til veiledning fra lærer.',
        solution: 'Vurderingen baseres på faglig innhold, metodisk tilnærming, kritisk refleksjon, selvstendig arbeid, og presentasjon/skriftlig fremstilling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle kapitler
// ============================================================================

export const TRENING_3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TRENING_3_1,
  CHAPTER_TRENING_3_2,
  CHAPTER_TRENING_3_3,
  CHAPTER_TRENING_3_4,
  CHAPTER_TRENING_3_5,
  CHAPTER_TRENING_3_6,
  CHAPTER_TRENING_3_7,
  CHAPTER_TRENING_3_8,
];
