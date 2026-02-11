/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Rettslære 2 VG3
 *
 * Seksjon 4: Forvaltningsrett (Kapittel 4.1–4.5)
 * Denne filen inneholder kapittel 4.1–4.5 (komplett).
 *
 * LK20 kompetansemål:
 * - «utforske rettsforholdet mellom individ og offentlig forvaltning og bruke sentrale
 *    regler om saksbehandling»
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 4.1: Offentlig forvaltning og organer
// ============================================================================

export const CHAPTER_RETTSLAERE_2_4_1: TextbookChapter = {
  id: 'rettslaere-2-4-1',
  courseId: 'rettslaere-2',
  chapterNumber: '4.1',
  title: 'Offentlig forvaltning og organer',
  description: 'Stat, kommune, fylkeskommune, direktorater og tilsyn – oppbygging og oppgavefordeling i den offentlige forvaltningen.',
  estimatedMinutes: 20,
  competenceGoals: [
    'utforske rettsforholdet mellom individ og offentlig forvaltning og bruke sentrale regler om saksbehandling'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rtl2-4-1-intro',
      type: 'text',
      content: `## Offentlig forvaltning og organer

Den offentlige forvaltningen er det apparatet som gjennomfører de politiske beslutningene som Stortinget og kommunestyrene fatter. Forvaltningen treffer vedtak som griper direkte inn i borgernes rettigheter og plikter – fra byggetillatelser og trygdeytelser til skattekrav og helsetjenester.

Forholdet mellom individet og forvaltningen er regulert av et omfattende regelverk som skal sikre at myndighetene opptrer forsvarlig, rettferdig og forutsigbart. **Forvaltningsloven** (lov 10. februar 1967 om behandlingsmåten i forvaltningssaker) er den sentrale loven som regulerer saksbehandlingen i offentlige organer.

For å forstå forvaltningsretten må vi først kjenne til hvordan forvaltningen er organisert og hvilke organer som utøver offentlig myndighet.`
    },

    // --- BLOKK 1: Hva er offentlig forvaltning ---
    {
      id: 'rtl2-4-1-def-1',
      type: 'definition',
      title: 'Offentlig forvaltning',
      content: `**Offentlig forvaltning** omfatter alle organer som utøver offentlig myndighet på vegne av stat, fylkeskommune eller kommune. Forvaltningen er den **utøvende makt** i maktfordelingsprinsippet.

Forvaltningsloven § 1 definerer lovens virkeområde som «virksomhet som drives av forvaltningsorganer» – det vil si ethvert organ for stat eller kommune.

Forvaltningens oppgaver kan deles i tre hovedkategorier:
- **Myndighetsutøvelse** – å treffe vedtak som binder borgerne (f.eks. byggetillatelse, skattekrav)
- **Tjenesteyting** – å levere offentlige tjenester (f.eks. helsetjenester, undervisning)
- **Eierskap og drift** – å forvalte offentlig eiendom og virksomheter`
    },
    {
      id: 'rtl2-4-1-text-1',
      type: 'text',
      content: `### Statsforvaltningen

Statsforvaltningen er hierarkisk oppbygd med Kongen i statsråd (regjeringen) som øverste forvaltningsorgan. Under regjeringen finner vi departementene, som er det politiske og administrative bindeleddet mellom regjeringen og den øvrige statsforvaltningen.

**Departementene** ledes av statsrådene og har ansvar for å forberede saker for regjeringen, utforme politikk og føre tilsyn med underliggende etater. Norge har i dag 16 departementer. Eksempler:
- Justis- og beredskapsdepartementet (JD) – politi, rettsvesen, beredskap
- Helse- og omsorgsdepartementet (HOD) – helsetjenester, folkehelse
- Kunnskapsdepartementet (KD) – utdanning, forskning

**Direktorater** er faglige ekspertorganer som er underordnet et departement. De har ofte delegert myndighet til å treffe vedtak på sine fagområder. Eksempler:
- Utdanningsdirektoratet (UDIR) – styrer grunnopplæringen
- Helsedirektoratet – gir faglige råd og forvalter helselovgivningen
- Skatteetaten – fastsetter og innkrever skatter og avgifter

**Tilsyn** er organer som fører kontroll med at lover og regler overholdes innenfor bestemte sektorer. Eksempler:
- Arbeidstilsynet – fører tilsyn med arbeidsmiljøloven
- Datatilsynet – fører tilsyn med personvernlovgivningen
- Mattilsynet – fører tilsyn med næringsmiddel- og dyrevelferdsloven

**Statsforvalteren** (tidligere Fylkesmannen) er statens representant i hvert fylke og fungerer som klageinstans for mange kommunale vedtak.`
    },
    {
      id: 'rtl2-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Statsforvaltningens hierarki',
      problem: 'En kommune avslår en søknad om spesialundervisning for et barn med lærevansker. Foreldrene ønsker å klage. Hvilket organ behandler klagen, og hvorfor?',
      solution: `**Analyse:**

Kommunen er førsteinstans og treffer vedtak om spesialundervisning etter opplæringslova. Når foreldrene klager, sendes klagen til **statsforvalteren** i det aktuelle fylket.

Statsforvalteren er klageinstans fordi vedkommende er statens representant i fylket og har som oppgave å føre tilsyn med at kommunene følger lover og regler på utdanningsfeltet. Statsforvalteren kan prøve alle sider av saken og eventuelt omgjøre kommunens vedtak.

Hierarkiet er altså: kommunen (vedtaksinstans) → statsforvalteren (klageinstans) → Utdanningsdirektoratet (overordnet direktorat som kan gi føringer).`
    },
    {
      id: 'rtl2-4-1-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rtl2-4-1-oppg-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom et direktorat og et tilsynsorgan?',
        options: [
          { id: 'a', text: 'Et direktorat er underordnet kommunen, mens et tilsyn er underordnet staten', isCorrect: false },
          { id: 'b', text: 'Et direktorat er et faglig ekspertorgan med delegert vedtaksmyndighet, mens et tilsyn fører kontroll med at lover overholdes', isCorrect: true },
          { id: 'c', text: 'Et direktorat gjelder bare for helsesektoren, mens tilsyn gjelder alle sektorer', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell – begge er betegnelser for det samme organet', isCorrect: false }
        ],
        solution: 'Direktorater er faglige ekspertorganer som er underordnet et departement og som ofte har fått delegert myndighet til å treffe vedtak på sine fagområder. Tilsynsorganer har som primæroppgave å føre kontroll med at lover og forskrifter overholdes. I praksis kan et organ ha begge funksjoner, men hovedoppgavene er forskjellige.'
      }
    },

    // --- BLOKK 2: Kommunal forvaltning ---
    {
      id: 'rtl2-4-1-def-2',
      type: 'definition',
      title: 'Kommunal og fylkeskommunal forvaltning',
      content: `**Kommunen** er det laveste forvaltningsnivået og har ansvaret for grunnleggende tjenester som grunnskole, barnehager, primærhelsetjeneste, sosialtjenester, byggesaker og lokal arealplanlegging. Det finnes 357 kommuner i Norge (2024).

**Fylkeskommunen** er et regionalt forvaltningsnivå som har ansvar for videregående opplæring, fylkesveier, kollektivtransport, regional planlegging og kulturoppgaver. Det finnes 15 fylkeskommuner (2024).

Kommuner og fylkeskommuner har **selvstyre** forankret i Grunnloven § 49 annet ledd og kommuneloven (lov 22. juni 2018 nr. 83). Kommunestyret og fylkestinget er de øverste folkevalgte organene og kan treffe vedtak i alle saker som ikke er lagt til andre organer ved lov.`
    },
    {
      id: 'rtl2-4-1-text-2',
      type: 'text',
      content: `### Forholdet mellom stat og kommune

Selv om kommunene har selvstyre, er de bundet av statlig lovgivning. Staten kan gjennom lov pålegge kommunene oppgaver og plikter, og staten fører tilsyn med at kommunene oppfyller sine lovpålagte plikter.

**Legalitetsprinsippet** gjelder også for kommunene: et inngrep overfor den enkelte borger krever hjemmel i lov, uavhengig av om inngrepet foretas av staten eller kommunen.

Eksempler på kommunale vedtak som griper inn i borgernes rettigheter:
- **Byggesaker** – kommunen avgjør om et tiltak er i samsvar med plan- og bygningsloven
- **Sosialtjenester** – kommunen treffer vedtak om økonomisk sosialhjelp etter sosialtjenesteloven
- **Barnevern** – kommunen har ansvaret for å undersøke og sette inn tiltak etter barnevernsloven
- **Skjenkebevillinger** – kommunen avgjør hvem som får servere alkohol

Når kommunen treffer slike vedtak, opptrer den som **forvaltningsorgan** og er bundet av saksbehandlingsreglene i forvaltningsloven.`
    },
    {
      id: 'rtl2-4-1-example-2',
      type: 'example',
      title: 'Eksempel: Kommunalt vedtak',
      problem: 'Familien Hansen søker kommunen om byggetillatelse for å bygge et tilbygg til huset sitt. Kommunen avslår søknaden med henvisning til at tiltaket er i strid med reguleringsplanen. Er kommunen bundet av forvaltningslovens regler når den behandler søknaden?',
      solution: `**Analyse:**

Kommunen treffer vedtak om byggetillatelse etter plan- og bygningsloven. Avslaget er et **enkeltvedtak** fordi det gjelder en bestemt person (familien Hansen) og er bestemmende for deres rettigheter (retten til å bygge).

Forvaltningsloven gjelder for alle forvaltningsorganer, herunder kommunen. Kommunen er derfor bundet av forvaltningslovens regler om:
- **Utredningsplikt** – saken skal være tilstrekkelig opplyst (§ 17)
- **Begrunnelsesplikt** – avslaget skal begrunnes (§§ 24–25)
- **Klageadgang** – familien har rett til å klage (§ 28)
- **Forhåndsvarsel** – familien skal normalt varsles før vedtak treffes (§ 16)

**Konklusjon:** Ja, kommunen er fullt ut bundet av forvaltningslovens saksbehandlingsregler.`
    },
    {
      id: 'rtl2-4-1-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rtl2-4-1-oppg-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken funksjon har statsforvalteren i det norske forvaltningssystemet?',
        options: [
          { id: 'a', text: 'Statsforvalteren er øverste leder for kommunestyret i hvert fylke', isCorrect: false },
          { id: 'b', text: 'Statsforvalteren er statens representant i fylket og fungerer blant annet som klageinstans for kommunale vedtak', isCorrect: true },
          { id: 'c', text: 'Statsforvalteren erstatter fylkeskommunen i alle administrative saker', isCorrect: false },
          { id: 'd', text: 'Statsforvalteren har ansvar for å vedta fylkesbudsjettet', isCorrect: false }
        ],
        solution: 'Statsforvalteren (tidligere Fylkesmannen) er statens representant i hvert fylke. En av de viktigste oppgavene er å fungere som klageinstans for mange kommunale vedtak, for eksempel innenfor barnevern, sosial, helse og utdanning. Statsforvalteren fører også tilsyn med at kommunene følger lovverket.'
      }
    },
    {
      id: 'rtl2-4-1-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rtl2-4-1-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som menes med det kommunale selvstyret. Hvilke begrensninger gjelder for selvstyret?',
        hints: ['Se Grunnloven § 49 annet ledd og kommuneloven.', 'Tenk på forholdet mellom statlig lovgivning og kommunal handlefrihet.'],
        solution: 'Det kommunale selvstyret er forankret i Grunnloven § 49 annet ledd og innebærer at kommuner og fylkeskommuner kan treffe vedtak i alle saker som ikke er lagt til andre organer ved lov. Selvstyret gir kommunene handlefrihet til å tilpasse tjenester og politikk til lokale forhold. Begrensningene er at kommunene er bundet av lover vedtatt av Stortinget. Staten kan gjennom lov pålegge kommunene oppgaver og plikter, og staten fører tilsyn med at kommunene oppfyller sine lovpålagte forpliktelser. Legalitetsprinsippet gjelder også for kommunale vedtak.'
      }
    },
    {
      id: 'rtl2-4-1-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rtl2-4-1-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi tre eksempler på direktorater i den norske statsforvaltningen, og forklar kort hvilke oppgaver hvert direktorat har.',
        hints: ['Tenk på ulike samfunnsområder som utdanning, helse og skatt.'],
        solution: 'Tre eksempler på direktorater: 1) Utdanningsdirektoratet (UDIR) – styrer grunnopplæringen, fastsetter læreplaner og gjennomfører nasjonale prøver. 2) Helsedirektoratet – gir faglige råd til helsetjenesten, forvalter helselovgivningen og koordinerer nasjonalt folkehelsearbeid. 3) Skatteetaten – fastsetter og innkrever skatter og avgifter, administrerer folkeregisteret og fører kontroll med skattyterne. Alle tre er underordnet sine respektive departementer og har fått delegert myndighet til å treffe vedtak på sine fagområder.'
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rtl2-4-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Offentlig forvaltning og organer

- **Offentlig forvaltning** omfatter alle organer som utøver offentlig myndighet på vegne av stat, fylkeskommune eller kommune.
- **Forvaltningsloven** regulerer saksbehandlingen i forvaltningsorganer og gjelder for all offentlig myndighetsutøvelse.
- **Statsforvaltningen** er hierarkisk oppbygd: regjeringen → departementene → direktorater og tilsyn.
- **Direktorater** er faglige ekspertorganer med delegert vedtaksmyndighet, mens **tilsyn** fører kontroll med at lover overholdes.
- **Statsforvalteren** er statens representant i hvert fylke og fungerer som klageinstans for mange kommunale vedtak.
- **Kommunene** har selvstyre forankret i Grunnloven § 49 og kommuneloven, men er bundet av statlig lovgivning og legalitetsprinsippet.
- **Fylkeskommunen** har ansvar for videregående opplæring, fylkesveier, kollektivtransport og regional planlegging.
- Forvaltningens tre hovedoppgaver er myndighetsutøvelse, tjenesteyting og forvaltning av offentlig eiendom.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rtl2-4-1-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rtl2-4-1-oppg-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket organ er øverste forvaltningsorgan i Norge?',
        options: [
          { id: 'a', text: 'Stortinget', isCorrect: false },
          { id: 'b', text: 'Høyesterett', isCorrect: false },
          { id: 'c', text: 'Kongen i statsråd (regjeringen)', isCorrect: true },
          { id: 'd', text: 'Statsforvalteren', isCorrect: false }
        ],
        solution: 'Kongen i statsråd (regjeringen) er det øverste forvaltningsorganet i Norge. Regjeringen leder den utøvende makt og står øverst i det hierarkiske forvaltningssystemet. Stortinget er lovgivende makt, Høyesterett er dømmende makt, og statsforvalteren er statens representant i fylket – underordnet regjeringen.'
      }
    },
    {
      id: 'rtl2-4-1-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rtl2-4-1-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Petter ønsker å klage på et vedtak fra kommunen om å nekte ham skjenkebevilling for restauranten sin. Han er usikker på hvem han skal klage til.\n\na) Forklar kort hva en skjenkebevilling er og hvilket forvaltningsorgan som treffer vedtak om dette.\nb) Hvilket organ er klageinstans?\nc) Begrunn svaret ditt med utgangspunkt i forvaltningens hierarkiske oppbygging.',
        hints: ['Kommunen treffer vedtak i første instans. Statsforvalteren er klageinstans for mange kommunale vedtak.'],
        solution: `a) En skjenkebevilling er en tillatelse fra kommunen til å servere alkohol i næring. Det er kommunen som treffer vedtak om tildeling, avslag eller inndragning av skjenkebevillinger etter alkoholloven.

b) Klageinstansen er statsforvalteren i det aktuelle fylket.

c) I det norske forvaltningshierarkiet er kommunen førsteinstans for vedtak etter alkoholloven. Statsforvalteren er statens representant i fylket og har som oppgave å føre tilsyn med kommunenes vedtak. Etter forvaltningsloven § 28 annet ledd er klageinstansen for kommunale vedtak det organet som er nærmest overordnet det organet som har truffet vedtaket. For kommunale vedtak etter særlovgivning er dette som hovedregel statsforvalteren.`
      }
    }
  ],
  exercises: [],
  keyTerms: [
    { term: 'Offentlig forvaltning', definition: 'Alle organer som utøver offentlig myndighet på vegne av stat, fylkeskommune eller kommune.' },
    { term: 'Forvaltningsloven', definition: 'Lov 10. februar 1967 om behandlingsmåten i forvaltningssaker – regulerer saksbehandlingen i forvaltningen.' },
    { term: 'Departement', definition: 'Det politiske og administrative bindeleddet mellom regjeringen og den øvrige statsforvaltningen.' },
    { term: 'Direktorat', definition: 'Faglig ekspertorgan underordnet et departement, ofte med delegert vedtaksmyndighet.' },
    { term: 'Statsforvalteren', definition: 'Statens representant i hvert fylke, fungerer blant annet som klageinstans for kommunale vedtak.' },
    { term: 'Kommunalt selvstyre', definition: 'Kommuners rett til å treffe vedtak i saker som ikke er lagt til andre organer ved lov, jf. Grunnloven § 49.' },
  ],
};

// ============================================================================
// KAPITTEL 4.2: Saksbehandlingsregler
// ============================================================================

export const CHAPTER_RETTSLAERE_2_4_2: TextbookChapter = {
  id: 'rettslaere-2-4-2',
  courseId: 'rettslaere-2',
  chapterNumber: '4.2',
  title: 'Saksbehandlingsregler',
  description: 'Forvaltningslovens regler om habilitet, veiledningsplikt og utredningsplikt.',
  estimatedMinutes: 20,
  competenceGoals: [
    'utforske rettsforholdet mellom individ og offentlig forvaltning og bruke sentrale regler om saksbehandling'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rtl2-4-2-intro',
      type: 'text',
      content: `## Saksbehandlingsregler

Forvaltningslovens saksbehandlingsregler er grunnmuren i forholdet mellom forvaltningen og borgerne. Reglene skal sikre at vedtak treffes på et **forsvarlig grunnlag**, at borgerne blir **behandlet likt**, og at det ikke tas **usaklige hensyn**.

Forvaltningsloven skiller mellom regler som gjelder for **all virksomhet** i forvaltningen (lovens kapittel II og III) og regler som gjelder spesielt for **enkeltvedtak** (kapittel IV–VI) og **forskrifter** (kapittel VII). I dette kapittelet ser vi på de generelle saksbehandlingsreglene som gjelder uavhengig av sakstype.

Tre sentrale prinsipper står i forgrunnen: **habilitet**, **veiledningsplikt** og **utredningsplikt**. Sammen utgjør disse kjernen i god forvaltningsskikk.`
    },

    // --- BLOKK 1: Habilitet ---
    {
      id: 'rtl2-4-2-def-1',
      type: 'definition',
      title: 'Habilitet',
      content: `**Habilitet** betyr at den som behandler en sak i forvaltningen, må være **uhildet** – det vil si at vedkommende ikke har personlige interesser i saken som kan påvirke avgjørelsen. Habilitetsreglene i forvaltningsloven §§ 6–10 skal sikre at borgerne kan ha tillit til at avgjørelser treffes på et objektivt og saklig grunnlag.

Etter forvaltningsloven § 6 er en tjenestemann **inhabil** når:
- Vedkommende selv er **part** i saken
- Vedkommende er **i slekt eller svogerskap** med en part (ektefelle, barn, forelder, søsken m.fl.)
- Vedkommende er **verge eller fullmektig** for en part
- Det foreligger **andre særegne forhold** som er egnet til å svekke tilliten til vedkommendes upartiskhet

Er en tjenestemann inhabil, kan vedkommende **ikke** tilrettelegge grunnlaget for eller treffe avgjørelse i saken.`
    },
    {
      id: 'rtl2-4-2-text-1',
      type: 'text',
      content: `### Den skjønnsmessige inhabilitetsregelen

Den mest praktiske habilitetsregelen er den skjønnsmessige bestemmelsen i forvaltningsloven § 6 annet ledd: en tjenestemann er inhabil når det foreligger «andre særegne forhold som er egnet til å svekke tilliten til hans upartiskhet».

Ved denne vurderingen skal det blant annet legges vekt på:
- Om avgjørelsen kan innebære **særlig fordel, tap eller ulempe** for tjenestemannen eller noen vedkommende har nær tilknytning til
- Om tjenestemannen har en **personlig eller økonomisk interesse** i utfallet
- Om det foreligger **vennskap eller fiendskap** mellom tjenestemannen og en part

Det avgjørende er ikke om tjenestemannen faktisk er partisk, men om det foreligger omstendigheter som er **egnet til å svekke tilliten** til at avgjørelsen er truffet på et saklig grunnlag. Habilitetsreglene har altså et **objektivt perspektiv**: det er den ytre tilliten som vernes.

En tjenestemann som er usikker på sin habilitet, **plikter å ta opp spørsmålet** med sin overordnede (fvl. § 8). Det er den overordnede eller kollegiet som avgjør habilitetsspørsmålet.`
    },
    {
      id: 'rtl2-4-2-example-1',
      type: 'example',
      title: 'Eksempel: Habilitetsvurdering',
      problem: 'Saksbehandler Kari i kommunens planavdeling skal behandle en byggesøknad fra sin brors firma. Firmaet ønsker å bygge et stort leilighetskompleks. Er Kari habil til å behandle saken?',
      solution: `**Analyse etter forvaltningsloven § 6:**

Forvaltningsloven § 6 første ledd bokstav b fastsetter at en tjenestemann er inhabil når en part i saken er tjenestemannens søsken. Karis bror er medeier i firmaet som søker byggetillatelse.

Spørsmålet er om broren er «part» i saken. Etter forvaltningsloven § 2 første ledd bokstav e er en part den som en avgjørelse retter seg mot eller som saken direkte gjelder. Firmaet er part, og broren er nært tilknyttet firmaet.

Selv om § 6 første ledd bokstav b knytter inhabiliteten til at parten er søsken (ikke partens eier), vil § 6 annet ledd uansett fange opp tilfellet: Karis brors firma har en åpenbar økonomisk interesse i utfallet. Det foreligger «særegne forhold» som er egnet til å svekke tilliten til Karis upartiskhet.

**Konklusjon:** Kari er inhabil og kan verken tilrettelegge grunnlaget for eller treffe avgjørelse i denne byggesaken.`
    },
    {
      id: 'rtl2-4-2-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rtl2-4-2-oppg-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er formålet med habilitetsreglene i forvaltningsloven?',
        options: [
          { id: 'a', text: 'Å sikre at saksbehandlere har tilstrekkelig kompetanse', isCorrect: false },
          { id: 'b', text: 'Å sikre at avgjørelser treffes på et objektivt og saklig grunnlag uten personlige interessekonflikter', isCorrect: true },
          { id: 'c', text: 'Å hindre at saker behandles for raskt', isCorrect: false },
          { id: 'd', text: 'Å beskytte saksbehandlere mot urettmessige anklager', isCorrect: false }
        ],
        solution: 'Habilitetsreglene skal sikre at forvaltningens avgjørelser treffes på et objektivt og saklig grunnlag, uten at personlige interesser påvirker utfallet. Reglene verner om borgernes tillit til forvaltningen, og det er det objektive perspektivet – tilliten utad – som er avgjørende.'
      }
    },

    // --- BLOKK 2: Veiledningsplikt og utredningsplikt ---
    {
      id: 'rtl2-4-2-def-2',
      type: 'definition',
      title: 'Veiledningsplikt',
      content: `**Veiledningsplikten** er regulert i forvaltningsloven § 11 og pålegger forvaltningsorganer å gi parter og andre interesserte «nødvendig veiledning» om regler, prosedyrer og rettigheter innenfor sitt saksområde.

Veiledningsplikten innebærer blant annet at forvaltningen skal:
- Gi opplysninger om **gjeldende regler** og vanlig praksis på vedkommende saksområde
- Gi veiledning om **fremgangsmåten** ved henvendelser til forvaltningen
- Opplyse om **rettigheter og plikter** etter forvaltningsloven, herunder klageadgang
- Hjelpe parten med å **fylle ut søknader** og liknende, så langt det er rimelig

Veiledningsplikten skal tilpasses forvaltningsorganets situasjon og kapasitet, men den kan **ikke** bortfalle fullstendig. Organet har en aktiv plikt til å veilede.`
    },
    {
      id: 'rtl2-4-2-def-3',
      type: 'definition',
      title: 'Utredningsplikt',
      content: `**Utredningsplikten** er regulert i forvaltningsloven § 17 og pålegger forvaltningsorganet å «påse at saken er så godt opplyst som mulig» før vedtak treffes.

Utredningsplikten innebærer at forvaltningen skal:
- Innhente **nødvendige opplysninger** og uttalelser fra berørte parter og andre relevante instanser
- Sørge for at **alle relevante fakta** og hensyn er kartlagt
- Vurdere saken fra **flere sider** – ikke bare den ene partens perspektiv
- Gi parten anledning til å uttale seg om **opplysninger** som er innhentet fra andre

Utredningsplikten er et utslag av det **kontradiktoriske prinsippet**: parten skal ha mulighet til å komme til orde og imøtegå argumenter og opplysninger som er anført mot vedkommende.`
    },
    {
      id: 'rtl2-4-2-example-2',
      type: 'example',
      title: 'Eksempel: Utredningsplikt',
      problem: 'NAV mottar en søknad om uføretrygd fra Ola. NAV avslår søknaden utelukkende basert på opplysningene Ola selv oppga i søknadsskjemaet, uten å innhente medisinske erklæringer eller uttalelser fra Olas fastlege. Har NAV overholdt utredningsplikten?',
      solution: `**Analyse etter forvaltningsloven § 17:**

Utredningsplikten pålegger forvaltningen å sørge for at saken er «så godt opplyst som mulig» før vedtak treffes. En søknad om uføretrygd er en alvorlig sak som griper direkte inn i søkerens livssituasjon.

Medisinske opplysninger er helt sentrale for vurderingen av uføretrygd. Ved å unnlate å innhente uttalelser fra Olas fastlege og eventuelt spesialisthelsetjenesten har NAV **ikke** overholdt utredningsplikten. Saken er ikke tilstrekkelig opplyst.

Et vedtak som er truffet på et utilstrekkelig opplysningsgrunnlag, kan være **ugyldig** etter forvaltningsloven § 41, dersom feilen kan ha virket inn på vedtakets innhold.

**Konklusjon:** NAV har brutt utredningsplikten i § 17. Vedtaket kan være ugyldig.`
    },
    {
      id: 'rtl2-4-2-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rtl2-4-2-oppg-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En kommune mottar en byggesøknad, men parten har fylt ut søknaden feil og mangelfullt. Hva er kommunens plikt etter forvaltningsloven § 11?',
        options: [
          { id: 'a', text: 'Kommunen kan avvise søknaden uten videre fordi den er mangelfull', isCorrect: false },
          { id: 'b', text: 'Kommunen har plikt til å veilede parten om hvordan søknaden skal fylles ut korrekt', isCorrect: true },
          { id: 'c', text: 'Kommunen skal fylle ut søknaden på vegne av parten', isCorrect: false },
          { id: 'd', text: 'Kommunen skal sende søknaden videre til statsforvalteren', isCorrect: false }
        ],
        solution: 'Forvaltningsloven § 11 pålegger forvaltningsorganer en veiledningsplikt. Kommunen skal gi parten veiledning om hvordan søknaden skal fylles ut og hvilke opplysninger som kreves. Kommunen skal ikke fylle ut søknaden selv, men hjelpe parten til å gjøre det riktig. Å avvise en mangelfull søknad uten veiledning vil normalt stride mot veiledningsplikten.'
      }
    },
    {
      id: 'rtl2-4-2-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rtl2-4-2-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Saksbehandler Anders i en kommune behandler en søknad om økonomisk sosialhjelp. Anders og søkeren er gode barndomsvenner og sees jevnlig privat.\n\na) Er Anders inhabil etter forvaltningsloven § 6?\nb) Hva bør Anders gjøre?',
        hints: ['Vennskap kan utgjøre «andre særegne forhold» etter fvl. § 6 annet ledd.'],
        solution: `a) Forvaltningsloven § 6 første ledd nevner ikke vennskap direkte, men § 6 annet ledd inneholder en skjønnsmessig regel: en tjenestemann er inhabil når det foreligger «andre særegne forhold som er egnet til å svekke tilliten til hans upartiskhet». Et nært vennskap der partene sees jevnlig privat, vil som regel oppfylle dette vilkåret. Vedtaket om sosialhjelp innebærer dessuten en direkte økonomisk fordel for vennen. Anders er sannsynligvis inhabil.

b) Anders plikter å ta opp habilitetsspørsmålet med sin overordnede, jf. fvl. § 8. Den overordnede avgjør om Anders er inhabil. Dersom han er inhabil, skal saken overføres til en annen saksbehandler.`
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rtl2-4-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Saksbehandlingsregler

- **Forvaltningsloven** inneholder generelle saksbehandlingsregler som gjelder for all virksomhet i forvaltningen.
- **Habilitet** (fvl. §§ 6–10) krever at den som behandler en sak, er uhildet. Inhabilitet foreligger ved slektskap, personlige interesser eller andre særegne forhold som er egnet til å svekke tilliten til upartiskhet.
- Habilitetsvurderingen har et **objektivt perspektiv**: det er den ytre tilliten som vernes, ikke spørsmålet om faktisk partiskhet.
- **Veiledningsplikten** (fvl. § 11) pålegger forvaltningen å gi parter nødvendig veiledning om regler, prosedyrer og rettigheter.
- **Utredningsplikten** (fvl. § 17) pålegger forvaltningen å sørge for at saken er så godt opplyst som mulig før vedtak treffes.
- Utredningsplikten er et utslag av det **kontradiktoriske prinsippet**: parten skal ha mulighet til å uttale seg.
- Brudd på saksbehandlingsreglene kan medføre at vedtaket blir **ugyldig** etter forvaltningsloven § 41.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rtl2-4-2-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rtl2-4-2-oppg-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er konsekvensen dersom et forvaltningsvedtak er truffet av en inhabil tjenestemann?',
        options: [
          { id: 'a', text: 'Vedtaket er automatisk ugyldig uten videre vurdering', isCorrect: false },
          { id: 'b', text: 'Vedtaket kan bli ugyldig dersom inhabiliteten kan ha virket inn på vedtakets innhold', isCorrect: true },
          { id: 'c', text: 'Vedtaket er alltid gyldig så lenge det er materielt riktig', isCorrect: false },
          { id: 'd', text: 'Tjenestemannen straffes, men vedtaket står', isCorrect: false }
        ],
        solution: 'Etter forvaltningsloven § 41 er et vedtak ugyldig når det er grunn til å regne med at feilen kan ha virket bestemmende på vedtakets innhold. Inhabilitet er en saksbehandlingsfeil som kan medføre ugyldighet, men det kreves en konkret vurdering av om feilen har hatt innvirkning. Vedtaket er altså ikke automatisk ugyldig, men kan bli det.'
      }
    },
    {
      id: 'rtl2-4-2-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rtl2-4-2-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En innvandrer med begrensede norskkunnskaper søker kommunen om økonomisk sosialhjelp. Kommunen sender et vedtak skrevet på formelt juridisk norsk uten ytterligere forklaring. Søknaden avslås.\n\na) Hvilke saksbehandlingsregler kan kommunen ha brutt?\nb) Drøft om kommunen har overholdt veiledningsplikten.\nc) Har søkeren krav på oversettelse eller tilrettelagt informasjon?',
        hints: ['Se forvaltningsloven §§ 11, 17 og 24–25. Tenk også på formålet med veiledningsplikten.'],
        solution: `a) Kommunen kan ha brutt veiledningsplikten (fvl. § 11) ved ikke å tilpasse veiledningen til søkerens forutsetninger, utredningsplikten (fvl. § 17) dersom søkerens situasjon ikke er tilstrekkelig belyst, og begrunnelsesplikten (fvl. §§ 24–25) dersom begrunnelsen ikke er forståelig for parten.

b) Veiledningsplikten i § 11 innebærer at forvaltningen skal gi «nødvendig veiledning» tilpasset mottakerens behov. Overfor en person med begrensede norskkunnskaper tilsier dette at kommunen bør gjøre en særlig innsats for å sikre at vedkommende forstår prosessen, sine rettigheter og vedtakets innhold. Å sende et standardbrev på formelt juridisk norsk uten ytterligere tilpasning er neppe tilstrekkelig.

c) Forvaltningsloven gir ikke en ubetinget rett til oversettelse, men veiledningsplikten og kravet om forsvarlig saksbehandling tilsier at forvaltningen må tilrettelegge informasjonen slik at parten faktisk kan ivareta sine interesser. I praksis kan dette innebære bruk av tolk eller forenklet informasjon.`
      }
    },
    {
      id: 'rtl2-4-2-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rtl2-4-2-oppg-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva innebærer utredningsplikten i forvaltningsloven § 17?',
        options: [
          { id: 'a', text: 'Parten har plikt til å utrede saken selv', isCorrect: false },
          { id: 'b', text: 'Forvaltningen skal sørge for at saken er så godt opplyst som mulig før vedtak treffes', isCorrect: true },
          { id: 'c', text: 'Forvaltningen skal alltid innhente uttalelse fra domstolene', isCorrect: false },
          { id: 'd', text: 'Utredningsplikten gjelder bare i straffesaker', isCorrect: false }
        ],
        solution: 'Forvaltningsloven § 17 pålegger forvaltningen å «påse at saken er så godt opplyst som mulig» før vedtak treffes. Det er forvaltningen – ikke parten – som har hovedansvaret for at beslutningsgrunnlaget er tilstrekkelig. Plikten gjelder i alle forvaltningssaker, ikke bare straffesaker.'
      }
    }
  ],
  exercises: [],
  keyTerms: [
    { term: 'Habilitet', definition: 'At saksbehandleren er uhildet og ikke har personlige interesser som kan påvirke avgjørelsen.' },
    { term: 'Inhabilitet', definition: 'At saksbehandleren har slike tilknytninger til saken at tilliten til upartiskhet svekkes, jf. fvl. § 6.' },
    { term: 'Veiledningsplikt', definition: 'Forvaltningens plikt til å gi parter nødvendig veiledning om regler, prosedyrer og rettigheter, jf. fvl. § 11.' },
    { term: 'Utredningsplikt', definition: 'Forvaltningens plikt til å sørge for at saken er tilstrekkelig opplyst før vedtak treffes, jf. fvl. § 17.' },
    { term: 'Kontradiktorisk prinsipp', definition: 'Prinsippet om at parten skal ha mulighet til å uttale seg og imøtegå argumenter før vedtak treffes.' },
    { term: 'Saksbehandlingsfeil', definition: 'Brudd på forvaltningslovens prosessuelle regler, som kan medføre ugyldighet etter fvl. § 41.' },
  ],
};

// ============================================================================
// KAPITTEL 4.3: Enkeltvedtak og forskrifter
// ============================================================================

export const CHAPTER_RETTSLAERE_2_4_3: TextbookChapter = {
  id: 'rettslaere-2-4-3',
  courseId: 'rettslaere-2',
  chapterNumber: '4.3',
  title: 'Enkeltvedtak og forskrifter',
  description: 'Hva er vedtak, vilkår for enkeltvedtak, forskrifter og begrunnelsesplikt.',
  estimatedMinutes: 20,
  competenceGoals: [
    'utforske rettsforholdet mellom individ og offentlig forvaltning og bruke sentrale regler om saksbehandling'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rtl2-4-3-intro',
      type: 'text',
      content: `## Enkeltvedtak og forskrifter

Forvaltningslovens sentrale begrep er **vedtak**. Loven skiller mellom to typer vedtak: **enkeltvedtak** og **forskrifter**. Denne sondringen er avgjørende fordi forvaltningsloven stiller strengere saksbehandlingskrav til enkeltvedtak enn til forskrifter.

Når forvaltningen treffer et enkeltvedtak, griper den direkte inn i en bestemt persons rettigheter eller plikter. Borgeren har derfor krav på særlig beskyttelse i form av forhåndsvarsel, rett til å uttale seg, begrunnelse og klageadgang. Forskrifter retter seg derimot mot en ubestemt krets av personer og reguleres av egne prosessregler.

Det er viktig å kunne skille mellom enkeltvedtak og forskrifter, fordi dette avgjør hvilke rettigheter den enkelte har i saksbehandlingsprosessen.`
    },

    // --- BLOKK 1: Vedtaksbegrepet ---
    {
      id: 'rtl2-4-3-def-1',
      type: 'definition',
      title: 'Vedtak, enkeltvedtak og forskrift',
      content: `Forvaltningsloven § 2 definerer de sentrale begrepene:

**Vedtak** (§ 2 første ledd bokstav a): En avgjørelse som treffes under utøving av offentlig myndighet og som generelt eller konkret er bestemmende for rettigheter eller plikter til private personer.

**Enkeltvedtak** (§ 2 første ledd bokstav b): Et vedtak som gjelder rettigheter eller plikter til **en eller flere bestemte personer**. Eksempler: byggetillatelse, skattekrav, avslag på søknad om trygd.

**Forskrift** (§ 2 første ledd bokstav c): Et vedtak som gjelder rettigheter eller plikter til **et ubestemt antall eller en ubestemt krets av personer**. Eksempler: forskrift om fartsgrenser, forskrift om smittevern.

For at noe skal være et vedtak, må det oppfylle tre vilkår:
1. Det må være en **avgjørelse** (ikke bare et råd eller en uttalelse)
2. Det må treffes under utøving av **offentlig myndighet**
3. Det må være **bestemmende for rettigheter eller plikter** til private personer`
    },
    {
      id: 'rtl2-4-3-text-1',
      type: 'text',
      content: `### Betydningen av sondringen

Sondringen mellom enkeltvedtak og forskrift har stor praktisk betydning fordi forvaltningsloven stiller **ulike saksbehandlingskrav**:

**For enkeltvedtak gjelder blant annet:**
- **Forhåndsvarsel** (§ 16) – parten skal normalt varsles og gis anledning til å uttale seg før vedtaket treffes
- **Begrunnelsesplikt** (§§ 24–25) – vedtaket skal begrunnes, og begrunnelsen skal inneholde de regler og fakta vedtaket bygger på
- **Underretning** (§ 27) – parten skal underrettes om vedtaket og om klageadgangen
- **Klagerett** (§ 28) – parten kan påklage vedtaket til en overordnet instans
- **Sakskostnader** (§ 36) – parten kan kreve dekning av vesentlige kostnader dersom vedtaket endres til gunst

**For forskrifter gjelder:**
- **Utredningsplikt** (§ 37) – saken skal utredes og berørte parter gis anledning til å uttale seg
- **Kunngjøring** (§ 38) – forskriften skal kunngjøres i Norsk Lovtidend
- **Ingen individuell klagerett** – forskrifter kan ikke påklages av den enkelte borger

Grensen mellom enkeltvedtak og forskrift kan i praksis være vanskelig. Avgjørende er om vedtaket retter seg mot **bestemte** eller **ubestemte** personer.`
    },
    {
      id: 'rtl2-4-3-example-1',
      type: 'example',
      title: 'Eksempel: Enkeltvedtak eller forskrift?',
      problem: 'Klassifiser følgende avgjørelser som enten enkeltvedtak eller forskrift:\n\na) Kommunen innvilger Arne en skjenkebevilling for restauranten hans.\nb) Kommunen vedtar en lokal forskrift om forbud mot bålbrenning i skogområder i tørkeperioder.\nc) NAV avslår Berits søknad om dagpenger.\nd) Helsedirektoratet fastsetter forskrift om meldeplikt for en bestemt smittsom sykdom.',
      solution: `**a) Skjenkebevilling til Arne – enkeltvedtak:**
Vedtaket gjelder en bestemt person (Arne) og er bestemmende for hans rettigheter (retten til å servere alkohol). Dette er et typisk enkeltvedtak.

**b) Lokal forskrift om bålbrenning – forskrift:**
Vedtaket retter seg mot en ubestemt krets av personer (alle som oppholder seg i skogområdene) og gjelder generelt. Det er ikke rettet mot bestemte personer.

**c) Avslag på dagpenger til Berit – enkeltvedtak:**
Vedtaket gjelder en bestemt person (Berit) og er bestemmende for hennes rettigheter (retten til dagpenger).

**d) Forskrift om meldeplikt – forskrift:**
Vedtaket gjelder alle leger og helsepersonell som diagnostiserer den aktuelle sykdommen – en ubestemt krets av personer.`
    },
    {
      id: 'rtl2-4-3-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rtl2-4-3-oppg-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva skiller et enkeltvedtak fra en forskrift?',
        options: [
          { id: 'a', text: 'Et enkeltvedtak gjelder bestemte personer, mens en forskrift gjelder en ubestemt krets av personer', isCorrect: true },
          { id: 'b', text: 'Et enkeltvedtak kan påklages til domstolene, mens en forskrift bare kan påklages til forvaltningen', isCorrect: false },
          { id: 'c', text: 'Et enkeltvedtak treffes av kommunen, mens forskrifter bare kan vedtas av staten', isCorrect: false },
          { id: 'd', text: 'Det er ingen vesentlig forskjell mellom et enkeltvedtak og en forskrift', isCorrect: false }
        ],
        solution: 'Etter forvaltningsloven § 2 er et enkeltvedtak et vedtak som gjelder rettigheter eller plikter til en eller flere bestemte personer, mens en forskrift er et vedtak som gjelder en ubestemt krets av personer. Denne sondringen har stor betydning for hvilke saksbehandlingsregler som gjelder.'
      }
    },

    // --- BLOKK 2: Begrunnelsesplikt og vilkår ---
    {
      id: 'rtl2-4-3-def-2',
      type: 'definition',
      title: 'Begrunnelsesplikt',
      content: `**Begrunnelsesplikten** for enkeltvedtak er regulert i forvaltningsloven §§ 24 og 25.

Etter § 24 skal enkeltvedtak **begrunnes**, og begrunnelsen skal gis **samtidig** med at vedtaket treffes. Dersom dette ikke er mulig, skal begrunnelsen gis «snarest mulig» etter vedtaket.

Etter § 25 skal begrunnelsen inneholde:
1. De **reglene** vedtaket bygger på, med henvisning til lov, forskrift eller ulovfestet rett
2. De **faktiske forholdene** vedtaket bygger på
3. De **hovedhensynene** som har vært avgjørende ved utøving av forvaltningsmessig skjønn

Begrunnelsesplikten har to viktige formål:
- Den gjør det mulig for parten å **vurdere** om vedtaket er riktig og om det er grunnlag for klage
- Den tvinger forvaltningen til å tenke grundig gjennom saken, noe som fremmer **kvaliteten** på vedtakene`
    },
    {
      id: 'rtl2-4-3-text-2',
      type: 'text',
      content: `### Vilkår i enkeltvedtak

Forvaltningen har i mange tilfeller adgang til å sette **vilkår** for et begunstigende vedtak. Et vilkår er en betingelse som parten må oppfylle for at vedtaket skal gjelde.

Adgangen til å stille vilkår er dels lovregulert, dels ulovfestet. Den ulovfestede hovedregelen er:

> Forvaltningen kan sette vilkår for begunstigende vedtak dersom vilkårene har **saklig sammenheng** med vedtaket, ikke er **uforholdsmessig tyngende** og ikke er **urimelige**.

**Eksempler på lovlige vilkår:**
- En skjenkebevilling gis med vilkår om at det ikke serveres alkohol etter kl. 02.00
- En byggetillatelse gis med vilkår om at tiltakshaver sikrer tilstrekkelig parkering
- Et tilskudd til en frivillig organisasjon gis med vilkår om at midlene brukes til det angitte formålet

**Eksempler på ulovlige vilkår:**
- En byggetillatelse gis med vilkår om at søkeren stemmer på et bestemt parti (usaklig)
- En skjenkebevilling gis med vilkår om at eieren donerer penger til kommunens kulturfond (ingen saklig sammenheng)`
    },
    {
      id: 'rtl2-4-3-example-2',
      type: 'example',
      title: 'Eksempel: Vilkår i vedtak',
      problem: 'Kommunen innvilger en byggetillatelse for et nytt kjøpesenter, men stiller følgende vilkår:\n\n1. Tiltakshaver skal anlegge 200 parkeringsplasser.\n2. Tiltakshaver skal betale 500 000 kroner til kommunens kulturfond.\n\nEr begge vilkårene lovlige?',
      solution: `**Vilkår 1 – Parkeringsplasser:**
Vilkåret har **saklig sammenheng** med byggetillatelsen: et kjøpesenter genererer trafikk, og det er rimelig at tiltakshaver sørger for tilstrekkelig parkering. Vilkåret er ikke uforholdsmessig tyngende for et stort kjøpesenter. **Lovlig vilkår.**

**Vilkår 2 – Bidrag til kulturfondet:**
Vilkåret har **ingen saklig sammenheng** med byggetillatelsen. Det er ingen naturlig forbindelse mellom å bygge et kjøpesenter og å finansiere kommunens kulturarbeid. Vilkåret fremstår som en skjult beskatning uten lovhjemmel. **Ulovlig vilkår.**

**Konklusjon:** Vilkår 1 er lovlig, mens vilkår 2 er ulovlig. Dersom vilkår 2 opprettholdes, kan tiltakshaver klage og kreve at vilkåret fjernes.`
    },
    {
      id: 'rtl2-4-3-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rtl2-4-3-oppg-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva skal begrunnelsen for et enkeltvedtak inneholde etter forvaltningsloven § 25?',
        options: [
          { id: 'a', text: 'Bare en henvisning til den aktuelle lovbestemmelsen', isCorrect: false },
          { id: 'b', text: 'Reglene vedtaket bygger på, de faktiske forholdene og hovedhensynene ved skjønnsutøvelse', isCorrect: true },
          { id: 'c', text: 'En fullstendig gjennomgang av alle rettskilder som er vurdert', isCorrect: false },
          { id: 'd', text: 'Bare de faktiske forholdene i saken', isCorrect: false }
        ],
        solution: 'Forvaltningsloven § 25 krever at begrunnelsen for et enkeltvedtak inneholder tre elementer: (1) reglene vedtaket bygger på, med henvisning til lov, forskrift eller ulovfestet rett, (2) de faktiske forholdene vedtaket bygger på, og (3) de hovedhensynene som har vært avgjørende ved utøving av forvaltningsmessig skjønn.'
      }
    },
    {
      id: 'rtl2-4-3-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rtl2-4-3-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar med egne ord hva som menes med at et vilkår i et forvaltningsvedtak må ha «saklig sammenheng» med vedtaket. Gi ett eksempel på et lovlig vilkår og ett eksempel på et ulovlig vilkår.',
        hints: ['Saklig sammenheng betyr at vilkåret må knytte seg til formålet med tillatelsen.'],
        solution: 'At et vilkår må ha «saklig sammenheng» med vedtaket betyr at vilkåret må knytte seg naturlig til det vedtaket handler om – det kan ikke dreie seg om noe helt uvedkommende. Eksempel på lovlig vilkår: en skjenkebevilling gis med vilkår om skjenketider og vakthold (saklig sammenheng med alkoholservering). Eksempel på ulovlig vilkår: en byggetillatelse gis med vilkår om at søkeren sponser et kommunalt arrangement (ingen sammenheng med byggesaken).'
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rtl2-4-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Enkeltvedtak og forskrifter

- Et **vedtak** er en avgjørelse som treffes under utøving av offentlig myndighet og som er bestemmende for rettigheter eller plikter til private personer (fvl. § 2).
- Et **enkeltvedtak** gjelder bestemte personer, mens en **forskrift** gjelder en ubestemt krets av personer.
- Sondringen er avgjørende for hvilke saksbehandlingsregler som gjelder: enkeltvedtak utløser strengere krav.
- For enkeltvedtak gjelder regler om **forhåndsvarsel** (§ 16), **begrunnelsesplikt** (§§ 24–25), **underretning** (§ 27) og **klagerett** (§ 28).
- **Begrunnelsesplikten** krever at vedtaket inneholder de regler, fakta og hovedhensyn det bygger på.
- Forvaltningen kan sette **vilkår** for begunstigende vedtak, forutsatt at vilkårene har saklig sammenheng med vedtaket, ikke er uforholdsmessig tyngende og ikke er urimelige.
- For forskrifter gjelder egne prosessregler (fvl. §§ 37–38) med utredningsplikt og kunngjøring, men ingen individuell klagerett.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rtl2-4-3-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rtl2-4-3-oppg-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket av følgende er et enkeltvedtak?',
        options: [
          { id: 'a', text: 'Regjeringen vedtar en ny forskrift om brannvern i offentlige bygninger', isCorrect: false },
          { id: 'b', text: 'Kommunen gir Marte avslag på søknaden om parkeringstillatelse for funksjonshemmede', isCorrect: true },
          { id: 'c', text: 'Stortinget vedtar en ny lov om arbeidsmiljø', isCorrect: false },
          { id: 'd', text: 'Mattilsynet publiserer generelle råd om matsikkerhet', isCorrect: false }
        ],
        solution: 'Avslaget på Martes søknad om parkeringstillatelse er et enkeltvedtak fordi det gjelder en bestemt person (Marte) og er bestemmende for hennes rettigheter. Forskriften om brannvern er en forskrift (ubestemt krets), Stortingets lovvedtak er ikke et forvaltningsvedtak, og generelle råd er ikke vedtak overhodet.'
      }
    },
    {
      id: 'rtl2-4-3-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rtl2-4-3-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Kommunen avslår en byggesøknad fra Henrik med følgende begrunnelse: «Søknaden avslås.» Henrik mener begrunnelsen er utilstrekkelig.\n\na) Vurder om kommunens begrunnelse oppfyller kravene i forvaltningsloven §§ 24–25.\nb) Hva burde begrunnelsen inneholdt?\nc) Hvilken konsekvens kan den mangelfulle begrunnelsen ha?',
        hints: ['Se forvaltningsloven § 25 om krav til begrunnelsens innhold, og § 41 om virkningen av saksbehandlingsfeil.'],
        solution: `a) Kommunens begrunnelse oppfyller ikke kravene i forvaltningsloven § 25. Begrunnelsen mangler alle de tre elementene § 25 krever: reglene vedtaket bygger på, de faktiske forholdene og hovedhensynene som har vært avgjørende. En begrunnelse som bare sier «søknaden avslås» gir Henrik ingen mulighet til å vurdere om vedtaket er riktig.

b) Begrunnelsen burde inneholdt: (1) hvilke bestemmelser i plan- og bygningsloven eller reguleringsplanen som er til hinder for byggetillatelse, (2) de faktiske forholdene – hva ved Henriks søknad eller tomt som gjør at vilkårene ikke er oppfylt, og (3) eventuelle skjønnsmessige vurderinger kommunen har foretatt.

c) Mangelfull begrunnelse er en saksbehandlingsfeil. Etter fvl. § 41 kan vedtaket bli ugyldig dersom feilen kan ha virket inn på vedtakets innhold. I tillegg kan Henrik be om etterfølgende begrunnelse etter § 24 tredje ledd, og han kan påklage vedtaket etter § 28.`
      }
    },
    {
      id: 'rtl2-4-3-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rtl2-4-3-oppg-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Når har forvaltningen adgang til å sette vilkår for et begunstigende vedtak?',
        options: [
          { id: 'a', text: 'Forvaltningen kan aldri sette vilkår – vedtaket gis enten eller avslås', isCorrect: false },
          { id: 'b', text: 'Forvaltningen kan sette vilkår fritt uten begrensninger', isCorrect: false },
          { id: 'c', text: 'Forvaltningen kan sette vilkår dersom de har saklig sammenheng med vedtaket og ikke er uforholdsmessig tyngende', isCorrect: true },
          { id: 'd', text: 'Forvaltningen kan bare sette vilkår dersom det er uttrykkelig hjemmel i lov', isCorrect: false }
        ],
        solution: 'Forvaltningen kan sette vilkår for begunstigende vedtak, men vilkårene er underlagt tre begrensninger: de må ha saklig sammenheng med vedtaket, de må ikke være uforholdsmessig tyngende, og de må ikke være urimelige. Denne adgangen er dels lovfestet, dels ulovfestet. Det kreves ikke alltid uttrykkelig lovhjemmel – den ulovfestede vilkårslæren gir forvaltningen en generell adgang innenfor disse rammene.'
      }
    }
  ],
  exercises: [],
  keyTerms: [
    { term: 'Vedtak', definition: 'En avgjørelse som treffes under utøving av offentlig myndighet og som er bestemmende for rettigheter eller plikter, jf. fvl. § 2 bokstav a.' },
    { term: 'Enkeltvedtak', definition: 'Et vedtak som gjelder rettigheter eller plikter til en eller flere bestemte personer, jf. fvl. § 2 bokstav b.' },
    { term: 'Forskrift', definition: 'Et vedtak som gjelder rettigheter eller plikter til en ubestemt krets av personer, jf. fvl. § 2 bokstav c.' },
    { term: 'Begrunnelsesplikt', definition: 'Krav om at enkeltvedtak skal begrunnes med regler, fakta og hovedhensyn, jf. fvl. §§ 24–25.' },
    { term: 'Vilkår', definition: 'Betingelse som stilles for et begunstigende vedtak, må ha saklig sammenheng og ikke være uforholdsmessig tyngende.' },
    { term: 'Forhåndsvarsel', definition: 'Partens rett til å bli varslet og gis anledning til å uttale seg før enkeltvedtak treffes, jf. fvl. § 16.' },
  ],
};

// ============================================================================
// KAPITTEL 4.4: Klageadgang og omgjøring
// ============================================================================

export const CHAPTER_RETTSLAERE_2_4_4: TextbookChapter = {
  id: 'rettslaere-2-4-4',
  courseId: 'rettslaere-2',
  chapterNumber: '4.4',
  title: 'Klageadgang og omgjøring',
  description: 'Klagerett, klagefrist, klageinstans og forvaltningens adgang til å omgjøre egne vedtak.',
  estimatedMinutes: 25,
  competenceGoals: [
    'utforske rettsforholdet mellom individ og offentlig forvaltning og bruke sentrale regler om saksbehandling'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rtl2-4-4-intro',
      type: 'text',
      content: `## Klageadgang og omgjøring

Retten til å klage på forvaltningsvedtak er en av de viktigste rettssikkerhetsgarantiene i norsk forvaltningsrett. Klageretten sikrer at borgerne kan få prøvd vedtak som de mener er uriktige, og at feil i saksbehandlingen kan bli rettet opp.

Forvaltningsloven kapittel VI (§§ 28–34) regulerer klageordningen for enkeltvedtak. Reglene fastsetter hvem som har klagerett, hvilken instans som behandler klagen, hvilke frister som gjelder, og hva klageinstansen kan beslutte.

I tillegg til klageadgangen har forvaltningen en adgang til å **omgjøre** vedtak på eget initiativ etter forvaltningsloven § 35. Omgjøringsreglene er viktige fordi de gir forvaltningen mulighet til å rette opp feil uten at parten behøver å klage.`
    },

    // --- BLOKK 1: Klageretten ---
    {
      id: 'rtl2-4-4-def-1',
      type: 'definition',
      title: 'Klagerett og klageinstans',
      content: `**Klageretten** er regulert i forvaltningsloven § 28 og gir parter og andre med rettslig klageinteresse rett til å påklage enkeltvedtak til den nærmest overordnede forvaltningsinstansen.

**Hvem kan klage?**
- **Parten** – den som vedtaket retter seg mot eller direkte gjelder (fvl. § 2 bokstav e)
- **Andre med rettslig klageinteresse** – personer som har en tilstrekkelig nær tilknytning til saken, f.eks. naboer ved byggesaker

**Klageinstans:**
- For statlige vedtak: det nærmest overordnede organet (f.eks. departementet over direktoratet)
- For kommunale vedtak: som hovedregel statsforvalteren, eller det organ som er bestemt i særlovgivningen
- For vedtak truffet av et kommunestyre eller fylkesting: klagen behandles av kommunestyret/fylkestinget selv eller av en klagenemnd

Klagen skal sendes til det organet som traff vedtaket (**underinstansen**), som først vurderer om det er grunnlag for å endre vedtaket. Opprettholder underinstansen vedtaket, sendes klagen videre til klageinstansen.`
    },
    {
      id: 'rtl2-4-4-text-1',
      type: 'text',
      content: `### Klagefrist og krav til klagen

**Klagefristen** er regulert i forvaltningsloven § 29. Fristen for å klage er **tre uker** fra det tidspunktet parten mottok underretning om vedtaket. Dersom parten ikke har mottatt underretning, løper fristen fra det tidspunktet vedkommende fikk eller burde ha skaffet seg kunnskap om vedtaket.

Forvaltningsloven § 31 åpner for at klagefristen kan forlenges (**oppreisning**) dersom:
- Parten ikke kan lastes for å ha oversittet fristen, eller
- Det av særlige grunner er rimelig at klagen prøves

**Krav til klagens innhold (§ 32):**
Klagen skal:
- Nevne det vedtaket det klages over
- Angi den endring som kreves
- Nevne de grunner klagen bygger på

Klagen skal være **skriftlig** og **undertegnet** av klageren eller klagerens fullmektig. Dersom klagen er mangelfull, skal forvaltningsorganet gi klageren en kort frist til å rette mangelen (jf. veiledningsplikten i § 11).`
    },
    {
      id: 'rtl2-4-4-example-1',
      type: 'example',
      title: 'Eksempel: Klageprosessen',
      problem: 'Lise mottar vedtak fra kommunen om avslag på søknad om parkeringstillatelse for funksjonshemmede. Vedtaket er datert 15. mars og mottas av Lise 18. mars. Lise ønsker å klage. Beskriv klageprosessen.',
      solution: `**Trinn 1: Klagefrist**
Klagefristen er tre uker fra Lise mottok vedtaket (18. mars), jf. fvl. § 29. Fristen utløper derfor 8. april. Lise må sende klagen innen denne datoen.

**Trinn 2: Klagens innhold**
Klagen skal være skriftlig og inneholde: hvilket vedtak det klages over (avslaget på parkeringstillatelse, dato og saksnummer), hvilken endring Lise ønsker (innvilgelse av parkeringstillatelse), og begrunnelsen for klagen (f.eks. at hennes funksjonshemming oppfyller vilkårene, med vedlagt legeerklæring).

**Trinn 3: Klagen sendes til kommunen (underinstansen)**
Klagen sendes til kommunen, som er det organet som traff vedtaket. Kommunen vurderer om klagen gir grunnlag for å endre vedtaket.

**Trinn 4: Oversending til klageinstansen**
Dersom kommunen opprettholder avslaget, sendes klagen med alle saksdokumenter til **statsforvalteren** som klageinstans. Statsforvalteren kan prøve alle sider av saken og eventuelt omgjøre vedtaket.`
    },
    {
      id: 'rtl2-4-4-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rtl2-4-4-oppg-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er klagefristen for enkeltvedtak etter forvaltningsloven § 29?',
        options: [
          { id: 'a', text: 'Én uke fra vedtaket ble truffet', isCorrect: false },
          { id: 'b', text: 'To uker fra parten mottok underretning', isCorrect: false },
          { id: 'c', text: 'Tre uker fra parten mottok underretning om vedtaket', isCorrect: true },
          { id: 'd', text: 'Fire uker fra vedtaket ble kunngjort', isCorrect: false }
        ],
        solution: 'Forvaltningsloven § 29 fastsetter at klagefristen er tre uker fra det tidspunktet parten mottok underretning om vedtaket. Fristen løper altså fra mottakstidspunktet, ikke fra vedtakstidspunktet.'
      }
    },

    // --- BLOKK 2: Klageinstansens kompetanse og omgjøring ---
    {
      id: 'rtl2-4-4-def-2',
      type: 'definition',
      title: 'Klageinstansens kompetanse',
      content: `**Klageinstansens kompetanse** er regulert i forvaltningsloven § 34. Klageinstansen har vid prøvingskompetanse og kan prøve **alle sider** av saken:

1. **Rettsanvendelsen** – om underinstansen har tolket og anvendt loven riktig
2. **Faktum** – om de faktiske forholdene er riktig vurdert
3. **Saksbehandlingen** – om saksbehandlingsreglene er fulgt
4. **Skjønnsutøvelsen** – om det forvaltningsmessige skjønnet er forsvarlig utøvd

Klageinstansen kan treffe **nytt vedtak** i saken eller oppheve vedtaket og sende saken tilbake til underinstansen for ny behandling.

**Reformatio in peius** (endring til ugunst): Klageinstansen kan også endre vedtaket til ugunst for klageren, men dette krever at hensynet til andre privatpersoner eller offentlige interesser tilsier det, og at klagerens interesser er tilstrekkelig ivaretatt.`
    },
    {
      id: 'rtl2-4-4-def-3',
      type: 'definition',
      title: 'Omgjøring uten klage',
      content: `**Omgjøring** er regulert i forvaltningsloven § 35 og gir forvaltningen adgang til å endre et vedtak **uten** at det foreligger klage. Omgjøringsadgangen avhenger av hvem som omgjør og om endringen er til gunst eller ugunst for parten:

**Underinstansen** (det organet som traff vedtaket) kan omgjøre vedtaket dersom:
- Endringen er til **gunst** for parten og ikke er til skade for andre (§ 35 første ledd bokstav a)
- Vedtaket er **ikke underrettet** parten ennå (§ 35 første ledd bokstav b)
- Vedtaket er **ugyldig** (§ 35 første ledd bokstav c)

**Klageinstansen** eller annet overordnet organ kan omgjøre vedtaket av samme grunner, og i tillegg dersom «alminnelige forvaltningsrettslige regler» tilsier det (§ 35 tredje ledd). Ved omgjøring til ugunst må hensynet til parten veies mot andre hensyn.

Omgjøringsreglene gir forvaltningen fleksibilitet til å rette opp feil uten å avvente klage, noe som fremmer effektivitet og rettssikkerhet.`
    },
    {
      id: 'rtl2-4-4-example-2',
      type: 'example',
      title: 'Eksempel: Omgjøring av vedtak',
      problem: 'NAV innvilger uføretrygd til Per. Tre måneder senere oppdager NAV at Per oppga uriktige opplysninger om inntekten sin, og at han egentlig ikke fyller vilkårene for uføretrygd. Kan NAV omgjøre vedtaket?',
      solution: `**Analyse etter forvaltningsloven § 35:**

Spørsmålet er om NAV kan omgjøre innvilgelsen til ugunst for Per uten at Per har klaget.

**Vurdering:**
1. Omgjøring til gunst (§ 35 første ledd bokstav a) er ikke aktuelt – dette er omgjøring til ugunst.
2. Vedtaket er allerede underrettet parten (§ 35 første ledd bokstav b er ikke aktuelt).
3. **Ugyldighet** (§ 35 første ledd bokstav c): Dersom Pers uriktige opplysninger har vært bestemmende for vedtakets innhold, kan vedtaket være ugyldig. Forvaltningen har gitt Per en ytelse han ikke har krav på, basert på feilaktige premisser.
4. I tillegg kan § 35 tredje ledd og alminnelige forvaltningsrettslige regler gi omgjøringsadgang dersom overordnet organ griper inn.

Ved vurderingen må NAV avveie hensynet til korrekt myndighetsutøvelse mot Pers innrettelse og eventuelle godtroenhet. Siden Per selv har oppgitt uriktige opplysninger, er det liten grunn til å beskytte hans innrettelse.

**Konklusjon:** NAV kan sannsynligvis omgjøre vedtaket. Vedtaket er trolig ugyldig på grunn av Pers uriktige opplysninger, og omgjøring er berettiget.`
    },
    {
      id: 'rtl2-4-4-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rtl2-4-4-oppg-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva kan klageinstansen gjøre etter forvaltningsloven § 34?',
        options: [
          { id: 'a', text: 'Bare oppheve vedtaket – ikke treffe nytt vedtak', isCorrect: false },
          { id: 'b', text: 'Bare prøve saksbehandlingen, ikke det materielle innholdet i vedtaket', isCorrect: false },
          { id: 'c', text: 'Prøve alle sider av saken og treffe nytt vedtak eller sende saken tilbake', isCorrect: true },
          { id: 'd', text: 'Bare prøve rettsanvendelsen, ikke skjønnsutøvelsen', isCorrect: false }
        ],
        solution: 'Forvaltningsloven § 34 gir klageinstansen vid kompetanse: den kan prøve alle sider av saken – rettsanvendelse, faktum, saksbehandling og skjønnsutøvelse. Klageinstansen kan treffe nytt vedtak eller oppheve vedtaket og sende saken tilbake til underinstansen for ny behandling.'
      }
    },
    {
      id: 'rtl2-4-4-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rtl2-4-4-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom klage og omgjøring i forvaltningsretten. Hvem tar initiativet i hvert tilfelle?',
        hints: ['Klage reguleres av fvl. §§ 28–34, omgjøring av § 35.'],
        solution: 'Klage er en rettighet for parten som innebærer at vedkommende ber en overordnet instans om å prøve vedtaket på nytt. Det er parten (eller andre med rettslig klageinteresse) som tar initiativet. Omgjøring er forvaltningens egen adgang til å endre et vedtak uten at det foreligger klage. Det er forvaltningsorganet selv eller et overordnet organ som tar initiativet. Klage er regulert i fvl. §§ 28–34, mens omgjøring er regulert i § 35. Begge mekanismene har til formål å sikre at riktige vedtak treffes.'
      }
    },
    {
      id: 'rtl2-4-4-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rtl2-4-4-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Kommunen innvilger Eva en skjenkebevilling. Tre uker senere klager naboen Tor på vedtaket fordi han mener uteserveringen vil medføre støyplager. Kommunen er enig i at vedtaket bør endres.\n\na) Har Tor rettslig klageinteresse?\nb) Kan kommunen endre vedtaket til ugunst for Eva?\nc) Hvilke hensyn skal vektlegges ved vurderingen?',
        hints: ['Rettslig klageinteresse forutsetter tilstrekkelig nær tilknytning. Se fvl. §§ 28, 34 og 35.'],
        solution: `a) Tor er nabo til uteserveringen og vil bli direkte berørt av støy. Som nabo har han sannsynligvis «rettslig klageinteresse» etter fvl. § 28 første ledd – han har en tilstrekkelig nær og aktuell tilknytning til vedtaket.

b) Dersom Tors klage behandles av klageinstansen (f.eks. statsforvalteren), kan klageinstansen etter fvl. § 34 prøve alle sider av saken og potensielt endre vedtaket til ugunst for Eva. Klageinstansen kan også sende saken tilbake til kommunen. Kommunen kan i tillegg bruke omgjøringsreglene i § 35, men omgjøring til ugunst for Eva krever tungtveiende grunner.

c) Ved vurderingen skal det legges vekt på: Evas innrettelse etter vedtaket (har hun investert i uteserveringen?), støyplagenes omfang for naboene, om det finnes mellomløsninger (f.eks. vilkår om begrensede åpningstider), og hensynet til forvaltningens troverdighet – borgerne skal kunne stole på vedtak som er truffet.`
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rtl2-4-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Klageadgang og omgjøring

- **Klageretten** (fvl. § 28) gir parter og andre med rettslig klageinteresse rett til å påklage enkeltvedtak til overordnet instans.
- **Klagefristen** er tre uker fra parten mottok underretning om vedtaket (fvl. § 29).
- Klagen sendes til **underinstansen**, som først vurderer om det er grunnlag for å endre vedtaket. Opprettholdes vedtaket, sendes klagen til **klageinstansen**.
- **Klageinstansen** kan prøve alle sider av saken: rettsanvendelse, faktum, saksbehandling og skjønnsutøvelse (fvl. § 34).
- Klageinstansen kan treffe nytt vedtak, oppheve vedtaket eller sende saken tilbake til underinstansen.
- **Omgjøring** (fvl. § 35) gir forvaltningen adgang til å endre vedtak uten klage – til gunst dersom det ikke skader andre, eller ved ugyldighet.
- Omgjøring til **ugunst** krever tungtveiende grunner og avveining mot partens innrettelse.
- Klageretten og omgjøringsadgangen er viktige rettssikkerhetsgarantier som sikrer at feil kan rettes opp.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rtl2-4-4-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rtl2-4-4-oppg-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Kommunen har innvilget en byggetillatelse som viser seg å bygge på feil rettsanvendelse. Vedtaket er allerede meddelt parten. Kan kommunen omgjøre vedtaket etter forvaltningsloven § 35?',
        options: [
          { id: 'a', text: 'Nei, vedtaket kan bare endres etter klage', isCorrect: false },
          { id: 'b', text: 'Ja, dersom vedtaket anses ugyldig på grunn av feil rettsanvendelse', isCorrect: true },
          { id: 'c', text: 'Ja, men bare dersom det er til gunst for parten', isCorrect: false },
          { id: 'd', text: 'Nei, bare Stortinget kan omgjøre kommunale vedtak', isCorrect: false }
        ],
        solution: 'Forvaltningsloven § 35 første ledd bokstav c gir underinstansen adgang til å omgjøre vedtaket dersom det er ugyldig. Feil rettsanvendelse er en saksbehandlingsfeil som kan medføre ugyldighet etter fvl. § 41 dersom feilen kan ha virket inn på vedtakets innhold. Kommunen kan da omgjøre vedtaket, men må foreta en konkret vurdering av partens innrettelse og andre hensyn.'
      }
    },
    {
      id: 'rtl2-4-4-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rtl2-4-4-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sara mottok vedtak om avslag på søknad om studielån 1. februar. Hun var syk og kunne ikke åpne posten før 1. mars. Den 22. mars sender hun klage.\n\na) Har Sara oversittet klagefristen?\nb) Kan Sara få oppreisning for fristoversittelsen?\nc) Hvilke momenter er relevante i vurderingen?',
        hints: ['Se fvl. §§ 29 og 31 om klagefrist og oppreisning.'],
        solution: `a) Klagefristen er tre uker fra parten «mottok underretning om vedtaket» (fvl. § 29). Spørsmålet er om fristen regnes fra vedtaket kom i postkassen (rundt 1. februar) eller fra Sara faktisk fikk kunnskap om vedtaket (1. mars). Etter lovens ordlyd løper fristen fra mottakstidspunktet, det vil si da brevet ankom postkassen. Tre uker fra ca. 3. februar gir fristutløp ca. 24. februar. Sara har da oversittet fristen.

b) Forvaltningsloven § 31 åpner for oppreisning dersom parten ikke kan lastes for forsinkelsen, eller det av særlige grunner er rimelig at klagen prøves.

c) Relevante momenter: Var Sara så syk at hun ikke kunne åpne posten – dette kan tale for at hun ikke kan lastes. Varigheten av sykdommen og om hun hadde mulighet til å be noen om hjelp. Hvor lang tid som gikk fra hun ble frisk til hun klagde. Om klagen virker godt begrunnet (sakens betydning for Sara). Dersom sykdommen var alvorlig og Sara handlet raskt etter at hun ble frisk, taler gode grunner for oppreisning.`
      }
    }
  ],
  exercises: [],
  keyTerms: [
    { term: 'Klagerett', definition: 'Partens rett til å påklage enkeltvedtak til overordnet instans, jf. fvl. § 28.' },
    { term: 'Klagefrist', definition: 'Tre uker fra parten mottok underretning om vedtaket, jf. fvl. § 29.' },
    { term: 'Klageinstans', definition: 'Det overordnede organet som behandler klagen, f.eks. statsforvalteren for kommunale vedtak.' },
    { term: 'Omgjøring', definition: 'Forvaltningens adgang til å endre et vedtak uten klage, jf. fvl. § 35.' },
    { term: 'Rettslig klageinteresse', definition: 'Tilstrekkelig nær tilknytning til saken til å ha klagerett, jf. fvl. § 28.' },
    { term: 'Oppreisning', definition: 'Adgang til å få prøvd en klage selv om klagefristen er oversittet, jf. fvl. § 31.' },
  ],
};

// ============================================================================
// KAPITTEL 4.5: Offentlighet og innsyn
// ============================================================================

export const CHAPTER_RETTSLAERE_2_4_5: TextbookChapter = {
  id: 'rettslaere-2-4-5',
  courseId: 'rettslaere-2',
  chapterNumber: '4.5',
  title: 'Offentlighet og innsyn',
  description: 'Offentleglova, innsynsrett, taushetsplikt og avveiningen mellom åpenhet og personvern.',
  estimatedMinutes: 20,
  competenceGoals: [
    'utforske rettsforholdet mellom individ og offentlig forvaltning og bruke sentrale regler om saksbehandling'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rtl2-4-5-intro',
      type: 'text',
      content: `## Offentlighet og innsyn

Offentlighetsprinsippet er en bærebjelke i det norske demokratiet. Prinsippet innebærer at forvaltningens dokumenter som hovedregel skal være tilgjengelige for allmennheten. Åpenhet gir borgerne mulighet til å kontrollere forvaltningen, delta i offentlig debatt og ivareta sine rettigheter.

Offentlighetsprinsippet er forankret i Grunnloven § 100 femte ledd, som fastslår at «enhver har rett til innsyn i statens og kommunenes dokumenter». Den nærmere reguleringen finnes i **offentleglova** (lov 19. mai 2006 nr. 16 om rett til innsyn i dokument i offentleg verksemd).

Offentlighetsprinsippet er imidlertid ikke absolutt. Det finnes viktige unntak, særlig av hensyn til **personvern** (taushetsplikt) og **offentlige interesser** (f.eks. rikets sikkerhet). Avveiningen mellom åpenhet og berettigede unntaksbehov er en sentral utfordring i forvaltningsretten.`
    },

    // --- BLOKK 1: Offentleglova og innsynsretten ---
    {
      id: 'rtl2-4-5-def-1',
      type: 'definition',
      title: 'Offentleglova og innsynsrett',
      content: `**Offentleglova** (offl.) gjelder for stat, fylkeskommune, kommune og andre rettssubjekter som utøver offentlig myndighet. Lovens hovedregel er nedfelt i § 3:

> *«Saksdokument, journalar og liknande register for organet er opne for innsyn dersom ikkje anna følgjer av lov eller forskrift med heimel i lov.»*

**Innsynsretten** innebærer at:
- **Enhver** kan kreve innsyn – man trenger ikke begrunne hvorfor man ønsker innsyn
- Innsynskravet kan gjelde **alle dokumenter** hos et forvaltningsorgan
- Organet skal behandle innsynskrav **uten ugrunnet opphold** (offl. § 29)
- Innsyn gis i den formen dokumentet foreligger (papir, elektronisk m.v.)
- Man kan kreve innsyn i **egne saker** etter forvaltningsloven §§ 18–19 (partsinnsyn), som gir videre innsynsrett enn offentleglova`
    },
    {
      id: 'rtl2-4-5-text-1',
      type: 'text',
      content: `### Unntak fra innsynsretten

Offentleglova inneholder flere unntaksbestemmelser som gir forvaltningen adgang – eller plikt – til å unnta dokumenter fra innsyn:

**Obligatoriske unntak (plikt til å unnta):**
- **Taushetsbelagte opplysninger** (offl. § 13) – opplysninger som er underlagt lovbestemt taushetsplikt (f.eks. helseopplysninger, personlige forhold)
- **Opplysninger som kan skade rikets sikkerhet** (offl. § 21)

**Fakultative unntak (adgang til å unnta):**
- **Interne dokumenter** (offl. § 14) – dokumenter som er utarbeidet for organets interne saksforberedelse
- **Dokument innhentet utenfra for den interne saksforberedelsen** (offl. § 15)
- **Kontroll- og reguleringstiltak** (offl. § 24) – unntak for å hindre at kontroll- og tilsynstiltak svekkes

Selv om et dokument kan unntas fra innsyn, skal forvaltningen vurdere **meroffentlighet** (offl. § 11): organet skal gi innsyn dersom hensynet til offentlighet veier tyngre enn behovet for unntak. Meroffentlighet er en plikt til å vurdere, ikke en plikt til å gi innsyn.`
    },
    {
      id: 'rtl2-4-5-example-1',
      type: 'example',
      title: 'Eksempel: Innsynskrav',
      problem: 'Journalist Kari ber kommunen om innsyn i dokumentene knyttet til tildelingen av en stor byggekontrakt. Kommunen svarer at dokumentene er unntatt offentlighet fordi de er «interne dokumenter». Kari mener svaret er feil. Vurder saken.',
      solution: `**Analyse etter offentleglova:**

1. **Hovedregelen** (offl. § 3): Saksdokumenter er åpne for innsyn. Kari trenger ikke begrunne sitt innsynskrav.

2. **Unntaket for interne dokumenter** (offl. § 14): Dette unntaket gjelder dokumenter som er utarbeidet for organets **interne saksforberedelse** – typisk notater, utkast og interne vurderinger. Dokumenter knyttet til en byggekontrakt – som selve kontrakten, tilbudsdokumenter, evalueringsrapporter og tildelingsbeslutningen – er normalt **ikke** interne dokumenter. De er saksdokumenter i en anskaffelsessak.

3. **Meroffentlighet** (offl. § 11): Selv om deler av dokumentasjonen kunne vært unntatt, skal kommunen vurdere om hensynet til offentlighet veier tyngre. Tildeling av offentlige kontrakter er et område med sterke transparensbehov.

**Konklusjon:** Kommunens avslag er trolig feil. Kontraktsdokumenter og tildelingsbeslutninger er som hovedregel ikke interne dokumenter og skal være offentlig tilgjengelige. Kari kan klage på avslaget til statsforvalteren.`
    },
    {
      id: 'rtl2-4-5-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rtl2-4-5-oppg-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedregelen i offentleglova § 3?',
        options: [
          { id: 'a', text: 'Alle dokumenter i forvaltningen er unntatt offentlighet', isCorrect: false },
          { id: 'b', text: 'Saksdokumenter er åpne for innsyn med mindre det finnes lovhjemmel for unntak', isCorrect: true },
          { id: 'c', text: 'Bare parter i saken kan kreve innsyn', isCorrect: false },
          { id: 'd', text: 'Innsyn kan bare gis etter godkjenning fra departementet', isCorrect: false }
        ],
        solution: 'Offentleglova § 3 fastslår at saksdokumenter, journaler og lignende registre er åpne for innsyn med mindre annet følger av lov eller forskrift med hjemmel i lov. Hovedregelen er altså åpenhet – unntak krever lovhjemmel.'
      }
    },

    // --- BLOKK 2: Taushetsplikt ---
    {
      id: 'rtl2-4-5-def-2',
      type: 'definition',
      title: 'Taushetsplikt',
      content: `**Taushetsplikten** i forvaltningsretten er regulert i forvaltningsloven §§ 13–13 f og pålegger enhver som utfører tjeneste for et forvaltningsorgan, plikt til å hindre at andre får kjennskap til visse opplysninger.

Forvaltningsloven § 13 første ledd oppstiller taushetsplikt for opplysninger om:
1. **Noens personlige forhold** – herunder helseopplysninger, familieforhold, økonomiske forhold og andre private opplysninger
2. **Tekniske innretninger og fremgangsmåter samt drifts- eller forretningsforhold** som det vil være av konkurransemessig betydning å hemmeligholde

Taushetsplikten er **absolutt** i den forstand at den gjelder uavhengig av om den som har opplysningene, mener det er forsvarlig å gi dem videre. Brudd på taushetsplikten kan medføre straffeansvar etter straffeloven § 209.

Taushetsplikten viker for opplysninger som er **allment tilgjengelige** eller som parten selv har offentliggjort (fvl. § 13 a).`
    },
    {
      id: 'rtl2-4-5-text-2',
      type: 'text',
      content: `### Forholdet mellom offentlighet og taushetsplikt

Offentlighetsprinsippet og taushetsplikten representerer to motstridende hensyn som forvaltningen løpende må avveie:

**Offentlighetsprinsippet** bygger på at åpenhet er en forutsetning for demokratisk kontroll, ansvarliggjøring og tillitsbygging. Borgerne skal kunne etterprøve at forvaltningen opptrer korrekt.

**Taushetsplikten** bygger på at visse opplysninger er så sensitive at de ikke bør deles med uvedkommende. Hensynet til personvern og forretningshemmeligheter tilsier at forvaltningen beskytter slik informasjon.

I praksis løses konflikten slik:
- Taushetsbelagte opplysninger **skal** unntas fra innsyn (offl. § 13)
- Øvrige deler av dokumentet **kan** gis innsyn i – taushetsplikten gjelder bare de konkrete opplysningene, ikke hele dokumentet
- Forvaltningen kan gi innsyn i en **sladdet versjon** der taushetsbelagte opplysninger er fjernet

**Partsinnsyn** etter forvaltningsloven §§ 18–19 gir parten videre innsynsrett enn allmennheten. Parten kan som hovedregel kreve innsyn i alle dokumenter i sin egen sak, inkludert opplysninger som er unntatt offentlighet – men ikke i opplysninger om andre parter som er underlagt taushetsplikt.`
    },
    {
      id: 'rtl2-4-5-example-2',
      type: 'example',
      title: 'Eksempel: Taushetsplikt og innsyn',
      problem: 'En journalist ber kommunens barnevern om innsyn i dokumentene i en bestemt barnevernssak. Kommunen avslår innsynskravet. Journalisten mener offentlighetsprinsippet gir rett til innsyn. Hvem har rett?',
      solution: `**Analyse:**

Barnevernssaker inneholder opplysninger om **noens personlige forhold** – herunder barns oppvekstforhold, foreldrenes omsorgsevne, helseopplysninger og familieforhold. Slike opplysninger er underlagt **taushetsplikt** etter forvaltningsloven § 13 første ledd nr. 1.

Taushetsplikten utgjør et **obligatorisk unntak** fra innsynsretten etter offentleglova § 13. Forvaltningen har ikke bare adgang, men **plikt** til å unnta taushetsbelagte opplysninger fra innsyn.

Journalisten kan likevel kreve innsyn i **ikke-taushetsbelagte deler** av dokumentene – for eksempel generelle opplysninger om saksbehandlingstider, anonymiserte statistikker eller prosedyrebeskrivelser.

**Konklusjon:** Kommunen har rett i å avslå innsyn i de taushetsbelagte opplysningene. Taushetsplikten går foran offentlighetsprinsippet for opplysninger om personlige forhold. Journalisten kan imidlertid kreve innsyn i ikke-taushetsbelagte deler av dokumentene.`
    },
    {
      id: 'rtl2-4-5-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rtl2-4-5-oppg-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva innebærer plikten til meroffentlighet etter offentleglova § 11?',
        options: [
          { id: 'a', text: 'At forvaltningen alltid må gi innsyn i alle dokumenter', isCorrect: false },
          { id: 'b', text: 'At forvaltningen skal vurdere om hensynet til offentlighet veier tyngre enn behovet for unntak, også der det er adgang til å unnta', isCorrect: true },
          { id: 'c', text: 'At forvaltningen kan gi innsyn i taushetsbelagte opplysninger dersom det tjener offentligheten', isCorrect: false },
          { id: 'd', text: 'At forvaltningen må publisere alle vedtak på internett', isCorrect: false }
        ],
        solution: 'Meroffentlighet etter offl. § 11 innebærer at forvaltningen har plikt til å vurdere om det bør gis innsyn selv om det foreligger adgang til å unnta dokumentet. Dersom hensynet til offentlighet veier tyngre enn unntaksbehovet, bør innsyn gis. Meroffentlighet gjelder bare for fakultative unntak – den kan ikke overstyre obligatoriske unntak som taushetsplikt.'
      }
    },
    {
      id: 'rtl2-4-5-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rtl2-4-5-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom partsinnsyn etter forvaltningsloven §§ 18–19 og allmennhetens innsynsrett etter offentleglova.',
        hints: ['Partsinnsyn gir videre rett enn allmennhetens innsyn. Tenk på hvem som har tilgang til hva.'],
        solution: 'Partsinnsyn etter forvaltningsloven §§ 18–19 gir parten i en sak rett til å gjøre seg kjent med dokumentene i sin egen sak. Denne retten er videre enn allmennhetens innsynsrett etter offentleglova, fordi parten som hovedregel kan se også dokumenter som er unntatt offentlighet – for eksempel interne dokumenter. Begrensningen er at parten ikke har rett til innsyn i opplysninger om andre som er underlagt taushetsplikt. Allmennhetens innsynsrett etter offentleglova gjelder for enhver uten begrunnelseskrav, men er begrenset av de unntakene loven oppstiller.'
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rtl2-4-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Offentlighet og innsyn

- **Offentlighetsprinsippet** er forankret i Grunnloven § 100 femte ledd og innebærer at forvaltningens dokumenter som hovedregel er åpne for innsyn.
- **Offentleglova** regulerer innsynsretten. Hovedregelen i § 3 er at saksdokumenter er åpne for innsyn.
- **Enhver** kan kreve innsyn uten å oppgi begrunnelse, og innsynskrav skal behandles uten ugrunnet opphold.
- Unntak fra innsynsretten krever hjemmel i lov. **Obligatoriske unntak** gjelder for taushetsbelagte opplysninger og sikkerhetsgradert informasjon. **Fakultative unntak** gjelder for interne dokumenter m.m.
- **Meroffentlighet** (offl. § 11) pålegger forvaltningen å vurdere om innsyn bør gis selv om det er adgang til unntak.
- **Taushetsplikten** (fvl. § 13) beskytter opplysninger om personlige forhold og forretningshemmeligheter.
- **Partsinnsyn** (fvl. §§ 18–19) gir parten videre innsynsrett enn allmennheten, men er begrenset av taushetsplikten.
- Brudd på taushetsplikten kan medføre straffeansvar etter straffeloven § 209.
- Avveiningen mellom offentlighet og taushetsplikt er en sentral utfordring i forvaltningsretten.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rtl2-4-5-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rtl2-4-5-oppg-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilke opplysninger er underlagt taushetsplikt etter forvaltningsloven § 13?',
        options: [
          { id: 'a', text: 'Alle opplysninger i forvaltningssaker', isCorrect: false },
          { id: 'b', text: 'Opplysninger om noens personlige forhold og forretningshemmeligheter', isCorrect: true },
          { id: 'c', text: 'Bare opplysninger om helse og sykdom', isCorrect: false },
          { id: 'd', text: 'Opplysninger som er eldre enn fem år', isCorrect: false }
        ],
        solution: 'Forvaltningsloven § 13 første ledd oppstiller taushetsplikt for to kategorier: (1) opplysninger om noens personlige forhold, som omfatter helse, familieforhold, økonomiske forhold og andre private opplysninger, og (2) tekniske innretninger, fremgangsmåter samt drifts- eller forretningsforhold som det er av konkurransemessig betydning å hemmeligholde.'
      }
    },
    {
      id: 'rtl2-4-5-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rtl2-4-5-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Fylkeskommunen behandler en klagesak om spesialundervisning. Foreldrene ber om innsyn i alle dokumenter i saken. I saksmappen finnes det:\n\n1. En rapport fra skolen om barnets faglige utvikling.\n2. Et internt notat fra saksbehandleren med utkast til vedtak.\n3. En legeerklæring om barnets diagnose.\n4. En uttalelse fra PP-tjenesten.\n\na) Hvilke dokumenter har foreldrene krav på innsyn i som parter?\nb) Hvilke dokumenter kan allmennheten kreve innsyn i etter offentleglova?\nc) Begrunn svarene med henvisning til relevante lovbestemmelser.',
        hints: ['Partsinnsyn reguleres av fvl. §§ 18–19, allmennhetens innsyn av offentleglova. Taushetsplikt etter fvl. § 13 begrenser begge.'],
        solution: `a) Som parter har foreldrene vid innsynsrett etter forvaltningsloven §§ 18–19. De har krav på innsyn i: (1) rapporten fra skolen, (3) legeerklæringen og (4) uttalelsen fra PP-tjenesten. Det interne notatet (2) kan i utgangspunktet unntas etter fvl. § 18 b (interne dokumenter), men foreldrene har likevel krav på å gjøre seg kjent med de faktiske opplysningene notatet bygger på.

b) Allmennheten har som utgangspunkt innsynsrett etter offl. § 3, men: legeerklæringen (3) og rapporten (1) inneholder opplysninger om barnets personlige forhold som er underlagt taushetsplikt (fvl. § 13, offl. § 13). Det interne notatet (2) kan unntas som internt dokument (offl. § 14). Uttalelsen fra PP-tjenesten (4) inneholder trolig også taushetsbelagte opplysninger. Allmennheten har dermed begrenset innsynsrett i denne saken.

c) Partsinnsyn: fvl. § 18 gir hovedregelen om partsinnsyn, § 18 b gir unntaksadgang for interne dokumenter. Allmennhetens innsyn: offl. § 3 (hovedregel), offl. § 13 (obligatorisk unntak for taushetsbelagte opplysninger), offl. § 14 (fakultativt unntak for interne dokumenter). Taushetsplikt: fvl. § 13 nr. 1 (personlige forhold).`
      }
    },
    {
      id: 'rtl2-4-5-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rtl2-4-5-oppg-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva kan konsekvensen være dersom en offentlig tjenestemann bryter taushetsplikten?',
        options: [
          { id: 'a', text: 'Det får ingen rettslige konsekvenser', isCorrect: false },
          { id: 'b', text: 'Tjenestemannen kan bare ilegges en advarsel fra arbeidsgiver', isCorrect: false },
          { id: 'c', text: 'Tjenestemannen kan straffes etter straffeloven § 209 og bli erstatningsansvarlig', isCorrect: true },
          { id: 'd', text: 'Bare forvaltningsorganet kan holdes ansvarlig, ikke den enkelte tjenestemann', isCorrect: false }
        ],
        solution: 'Brudd på lovbestemt taushetsplikt kan medføre straffeansvar etter straffeloven § 209, som rammer den som røper opplysninger som er underlagt taushetsplikt i medhold av lov. Strafferammen er bot eller fengsel inntil 1 år. I tillegg kan tjenestemannen bli erstatningsansvarlig for skade som følge av bruddet, og det kan ilegges disiplinære reaksjoner fra arbeidsgiveren.'
      }
    }
  ],
  exercises: [],
  keyTerms: [
    { term: 'Offentleglova', definition: 'Lov 19. mai 2006 nr. 16 om rett til innsyn i dokument i offentleg verksemd – regulerer allmennhetens innsynsrett.' },
    { term: 'Innsynsrett', definition: 'Enhvers rett til å kreve innsyn i forvaltningens saksdokumenter uten å oppgi begrunnelse, jf. offl. § 3.' },
    { term: 'Taushetsplikt', definition: 'Plikt til å hindre at andre får kjennskap til opplysninger om personlige forhold eller forretningshemmeligheter, jf. fvl. § 13.' },
    { term: 'Meroffentlighet', definition: 'Forvaltningens plikt til å vurdere om innsyn bør gis selv om det er adgang til unntak, jf. offl. § 11.' },
    { term: 'Partsinnsyn', definition: 'Partens rett til å gjøre seg kjent med dokumentene i sin egen sak, jf. fvl. §§ 18–19 – videre enn allmennhetens innsynsrett.' },
    { term: 'Interne dokumenter', definition: 'Dokumenter utarbeidet for organets interne saksforberedelse, som kan unntas fra innsyn etter offl. § 14.' },
  ],
};

// ============================================================================
// Samlet eksport for del 4 (kapittel 4.1–4.5)
// ============================================================================

export const RETTSLAERE_2_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_RETTSLAERE_2_4_1,
  CHAPTER_RETTSLAERE_2_4_2,
  CHAPTER_RETTSLAERE_2_4_3,
  CHAPTER_RETTSLAERE_2_4_4,
  CHAPTER_RETTSLAERE_2_4_5,
];
