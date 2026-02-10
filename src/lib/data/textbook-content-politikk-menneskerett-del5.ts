/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Politikk og menneskerettigheter (VG2/VG3)
 *
 * Seksjon 5: Internasjonal politikk (Kapittel 5.1–5.6)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1: Det internasjonale statssystemet
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_5_1: TextbookChapter = {
  id: 'politikk-menneskerett-5-1',
  courseId: 'politikk-menneskerett',
  chapterNumber: '5.1',
  title: 'Det internasjonale statssystemet',
  description: 'Suverenitetsprinsippet, folkerett, FN-pakten, maktbalanse og ulike verdensordener.',
  estimatedMinutes: 50,
  prevChapter: 'politikk-menneskerett-4-6',
  nextChapter: 'politikk-menneskerett-5-2',
  competenceGoals: [
    'gjøre rede for det internasjonale statssystemets oppbygging og grunnprinsipper',
    'forklare spenningen mellom statssuverenitet og internasjonalt samarbeid',
  ],
  keyTerms: [
    { term: 'Suverenitet', definition: 'En stats rett til å styre seg selv uten innblanding fra andre stater.' },
    { term: 'Folkerett', definition: 'Internasjonale regler som regulerer forholdet mellom stater, inkludert traktater, sedvanerett og alminnelige rettsprinsipper.' },
    { term: 'Maktbalanse', definition: 'Et system der stater søker å hindre at én stat blir for mektig, gjennom allianser og motvekt.' },
    { term: 'Unipolar verdensorden', definition: 'Internasjonal maktstruktur dominert av én supermakt, som USA etter den kalde krigen.' },
    { term: 'Bipolar verdensorden', definition: 'Maktstruktur med to dominerende supermakter, som USA og Sovjetunionen under den kalde krigen.' },
    { term: 'Multipolar verdensorden', definition: 'Maktstruktur med flere jevnbyrdige stormakter, som i dagens verden med USA, Kina, EU og Russland.' },
    { term: 'Internasjonal organisasjon', definition: 'Sammenslutning av stater som samarbeider om felles mål, som FN, NATO og EU.' },
  ],
  content: [
    {
      id: 'pm-5-1-intro',
      type: 'text',
      content: `## Det internasjonale statssystemet

Verden består av nesten 200 selvstendige stater, hver med sin regjering, sine lover og sine interesser. Men hvordan fungerer forholdet mellom disse statene? Hvem bestemmer reglene i internasjonal politikk? Og hva skjer når stater er uenige?

I motsetning til innenrikspolitikken finnes det ingen verdensregjering som kan tvinge stater til å følge lover. Det internasjonale systemet er i prinsippet anarkisk — det vil si at det mangler en overordnet myndighet. Likevel har stater utviklet regler, normer og institusjoner som skaper en viss orden.

I dette kapittelet skal du lære:
- Hva suverenitetsprinsippet innebærer
- Hva folkeretten er og hvordan den fungerer
- Ulike verdensordener: unipolar, bipolar og multipolar
- Spenningen mellom statssuverenitet og internasjonalt samarbeid`,
    },
    {
      id: 'pm-5-1-def-1',
      type: 'definition',
      title: 'Suverenitetsprinsippet',
      content: `**Suverenitetsprinsippet** er grunnpilaren i det internasjonale statssystemet. Det betyr at hver stat har rett til å styre seg selv uten innblanding fra andre stater. Prinsippet stammer fra Westfalerfreden i 1648, som avsluttet trettiårskrigen i Europa.

Suverenitet innebærer:
- **Indre suverenitet:** Staten har øverste myndighet over sitt eget territorium og befolkning
- **Ytre suverenitet:** Staten er uavhengig og likeverdig med andre stater i det internasjonale samfunnet
- **Territoriell integritet:** Andre stater har ikke rett til å gripe inn i statens indre anliggender

FN-pakten slår fast at alle stater er suverene og likeverdige (artikkel 2). Samtidig finnes det situasjoner der suverenitetsprinsippet utfordres — for eksempel ved grove menneskerettighetsbrudd, der det internasjonale samfunnet kan påberope seg «Responsibility to Protect» (R2P).`,
    },
    {
      id: 'pm-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Suverenitet under press',
      problem: 'Da NATO bombet Libya i 2011, begrunnet de det med FNs Sikkerhetsrådsresolusjon 1973 og prinsippet om Responsibility to Protect. Hvordan utfordrer dette suverenitetsprinsippet?',
      solution: `Libya-intervensjonen illustrerer spenningen mellom to prinsipper:

**Suverenitetsprinsippet:** Libya var en suveren stat, og innblanding strider mot FN-paktens prinsipp om ikke-innblanding.

**Responsibility to Protect (R2P):** Når en stat ikke beskytter sin egen befolkning mot folkemord, krigsforbrytelser eller forbrytelser mot menneskeheten, har det internasjonale samfunnet et ansvar for å gripe inn.

Sikkerhetsrådet autoriserte intervensjonen for å beskytte sivile. Men operasjonen gikk lenger enn mandatet og førte til regimeskifte, noe som har gjort Russland og Kina skeptiske til fremtidig bruk av R2P. Hendelsen viser at det internasjonale systemet preges av uenighet om når suverenitet kan settes til side.`,
    },
    {
      id: 'pm-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'pm-5-1-ex-1',
        number: '5.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva innebærer suverenitetsprinsippet?',
        options: [
          { id: 'a', text: 'At stater kan gjøre hva de vil mot sine egne borgere', isCorrect: false, feedback: 'Suverenitet begrenses av folkeretten og menneskerettighetene.' },
          { id: 'b', text: 'At stater har rett til å styre seg selv uten innblanding', isCorrect: true },
          { id: 'c', text: 'At FN bestemmer over alle stater', isCorrect: false },
          { id: 'd', text: 'At stormakter har flere rettigheter enn små stater', isCorrect: false },
        ],
        solution: 'Suverenitetsprinsippet betyr at hver stat har rett til å styre seg selv uten innblanding fra andre stater. Alle stater er formelt likeverdige i det internasjonale systemet.',
      },
    },
    {
      id: 'pm-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'pm-5-1-ex-2',
        number: '5.1.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar forskjellen mellom indre og ytre suverenitet med egne ord og gi et eksempel til hver.',
        hints: ['Indre handler om myndighet innenfor egne grenser, ytre om uavhengighet utad.'],
        solution: `**Indre suverenitet:** Statens rett til å styre innad — lage lover, innkreve skatt, opprettholde orden. Eksempel: Stortinget vedtar ny lov om innvandring.

**Ytre suverenitet:** Statens uavhengighet utad — ingen andre stater kan diktere landets politikk. Eksempel: Norge bestemmer selv om landet skal søke EU-medlemskap, uavhengig av press fra andre.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'pm-5-1-def-2',
      type: 'definition',
      title: 'Folkerett',
      content: `**Folkeretten** er det internasjonale rettssystemet som regulerer forholdet mellom stater. Den består av:

- **Traktater:** Skriftlige avtaler mellom stater, som FN-pakten og Genèvekonvensjonene
- **Sedvanerett:** Regler som har utviklet seg gjennom lang tids praksis og oppfattes som bindende
- **Alminnelige rettsprinsipper:** Grunnleggende prinsipper som finnes i alle rettssystemer

Den internasjonale domstolen i Haag (ICJ) avgjør tvister mellom stater basert på folkeretten. I tillegg finnes den internasjonale straffedomstolen (ICC) som kan straffeforfølge enkeltpersoner for folkemord, forbrytelser mot menneskeheten og krigsforbrytelser.

En utfordring med folkeretten er håndhevelse: det finnes ingen verdenspoliti som kan tvinge stater til å følge reglene. Håndhevelse avhenger av staters vilje til å samarbeide og eventuelt FNs sanksjoner.`,
    },
    {
      id: 'pm-5-1-text-1',
      type: 'text',
      title: 'Verdensordener: uni-, bi- og multipolar',
      content: `## Ulike verdensordener

Maktfordelingen mellom stater endrer seg over tid. Statsviterne skiller mellom tre typer verdensordener:

### Bipolar verdensorden (1945–1991)
Under den kalde krigen var verden delt i to blokker: den vestlige blokken ledet av USA, og den østlige blokken ledet av Sovjetunionen. De to supermaktene holdt hverandre i sjakk gjennom atomvåpen og allianser (NATO vs. Warszawapakten). Denne maktbalansen hindret direkte krig mellom blokkene, men førte til kriger i tredjeland (Korea, Vietnam, Afghanistan).

### Unipolar verdensorden (1991–ca. 2010)
Etter Sovjetunionens oppløsning stod USA igjen som verdens eneste supermakt. USA hadde overlegen militærmakt, den største økonomien og dominerte internasjonale institusjoner. Denne perioden kalles gjerne «det amerikanske øyeblikket».

### Multipolar verdensorden (ca. 2010–i dag)
I dag er maktfordelingen i endring. Kina har vokst til verdens nest største økonomi. EU er en økonomisk stormakt. Russland hevder sine interesser. India og Brasil vokser i innflytelse. Mange analytikere mener vi lever i en multipolar verden med flere maktsentra.`,
    },
    {
      id: 'pm-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'pm-5-1-ex-3',
        number: '5.1.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken type verdensorden preget den kalde krigen?',
        options: [
          { id: 'a', text: 'Unipolar — USA dominerte alene', isCorrect: false },
          { id: 'b', text: 'Bipolar — USA og Sovjetunionen dominerte', isCorrect: true },
          { id: 'c', text: 'Multipolar — mange likeverdige stormakter', isCorrect: false },
          { id: 'd', text: 'Anarkisk — ingen dominerende stater', isCorrect: false },
        ],
        solution: 'Den kalde krigen (1945-1991) var preget av en bipolar verdensorden med to supermakter: USA og Sovjetunionen, som ledet hver sin allianse.',
      },
    },
    {
      id: 'pm-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'pm-5-1-ex-4',
        number: '5.1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom en unipolar, bipolar og multipolar verdensorden. Hvilken type mener du best beskriver verden i dag?',
        hints: ['Tenk på USAs relative tilbakegang og Kinas vekst.'],
        solution: `Unipolar: Én supermakt dominerer. Bipolar: To supermakter. Multipolar: Flere jevnbyrdige maktsentra. Verden i dag er trolig multipolar: USA er fortsatt mektigst militært, men Kina utfordrer økonomisk. EU, Russland, India og andre har betydelig innflytelse. Ingen stat kan diktere alene.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'pm-5-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Suverenitetsprinsippet** gir stater rett til selvstyre, men utfordres av menneskerettigheter og R2P
- **Folkeretten** regulerer staters forhold gjennom traktater, sedvanerett og rettsprinsipper
- Verdensordener: **bipolar** (kald krig), **unipolar** (USA etter 1991), **multipolar** (i dag)
- Det internasjonale systemet mangler en overordnet myndighet — håndhevelse avhenger av samarbeid`,
    },
    // --- Samleoppgaver ---
    {
      id: 'pm-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'pm-5-1-ex-5',
        number: '5.1.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft om suverenitetsprinsippet bør settes til side ved grove menneskerettighetsbrudd. Bruk konkrete eksempler.',
        hints: ['Tenk på Libya, Syria, Rwanda. Vurder R2P.'],
        solution: `For: Rwanda-folkemordet (1994) viste at passivitet kan koste hundretusener av liv. R2P gir moralsk grunnlag for å beskytte sivile. Mot: Libya-intervensjonen (2011) gikk fra beskyttelse til regimeskifte, noe som skaper mistillit. Hvem avgjør når suverenitet kan settes til side? Risiko for misbruk av stormakter. Balansert: R2P er et viktig prinsipp, men bruken må være strikt regulert gjennom FNs Sikkerhetsråd.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'pm-5-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'pm-5-1-ex-6',
        number: '5.1.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Hvilke konsekvenser kan overgangen fra en unipolar til en multipolar verdensorden ha for internasjonal fred og sikkerhet?',
        hints: ['Tenk på maktbalanse, rivalisering og samarbeid.'],
        solution: `Positive: Flere motvekter mot supermaktdominans, mer representativt system, tvinger frem forhandling. Negative: Økt rivalisering mellom stormakter (USA-Kina), svekket evne til kollektiv handling, økt risiko for regionale konflikter uten tydelig verdenspoliti. Det multipolare systemet kan bli mer ustabilt, men også mer rettferdig.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.2: FN – oppbygging og rolle
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_5_2: TextbookChapter = {
  id: 'politikk-menneskerett-5-2',
  courseId: 'politikk-menneskerett',
  chapterNumber: '5.2',
  title: 'FN – oppbygging og rolle',
  description: 'FNs struktur med Generalforsamlingen, Sikkerhetsrådet og vetoretten, samt FN-organer og bærekraftsmålene.',
  estimatedMinutes: 50,
  prevChapter: 'politikk-menneskerett-5-1',
  nextChapter: 'politikk-menneskerett-5-3',
  competenceGoals: [
    'gjøre rede for FNs oppbygging og viktigste organer',
    'vurdere FNs rolle og begrensninger i internasjonal politikk',
  ],
  keyTerms: [
    { term: 'Generalforsamlingen', definition: 'FNs hovedorgan der alle 193 medlemsland har én stemme. Vedtar resolusjoner som er politisk viktige, men ikke juridisk bindende.' },
    { term: 'Sikkerhetsrådet', definition: 'FNs mektigste organ med 15 medlemmer, hvorav 5 faste med vetorett. Kan vedta bindende resolusjoner og autorisere bruk av makt.' },
    { term: 'Vetorett', definition: 'De fem faste medlemmene av Sikkerhetsrådet (USA, Russland, Kina, Frankrike, Storbritannia) kan blokkere enhver resolusjon.' },
    { term: 'FNs bærekraftsmål', definition: '17 mål vedtatt i 2015 som skal oppnås innen 2030, inkludert utrydding av fattigdom, god utdanning og klimahandling.' },
    { term: 'UNICEF', definition: 'FNs barnefond som arbeider for barns rettigheter, helse, utdanning og beskyttelse.' },
    { term: 'UNHCR', definition: 'FNs høykommissær for flyktninger, som beskytter og hjelper flyktninger verden over.' },
  ],
  content: [
    {
      id: 'pm-5-2-intro',
      type: 'text',
      content: `## FN – oppbygging og rolle

De forente nasjoner (FN) ble grunnlagt i 1945 etter andre verdenskrig med et klart mål: å forhindre en ny global krig. I dag har FN 193 medlemsland og er den viktigste internasjonale organisasjonen for fred, sikkerhet og samarbeid.

Men FN er også gjenstand for mye kritikk. Organisasjonen har ikke klart å forhindre kriger i Syria, Ukraina eller Yemen. Vetoretten blokkerer handling. Byråkratiet er tungt.

I dette kapittelet skal du lære:
- FNs hovedorganer og hvordan de fungerer
- Vetoretten — makt og kritikk
- FNs underorganisasjoner og deres arbeid
- Bærekraftsmålene og deres betydning`,
    },
    {
      id: 'pm-5-2-def-1',
      type: 'definition',
      title: 'FNs hovedorganer',
      content: `FN har seks hovedorganer:

1. **Generalforsamlingen:** Alle 193 medlemsland har én stemme. Drøfter internasjonale spørsmål og vedtar resolusjoner. Ikke juridisk bindende, men politisk viktige.

2. **Sikkerhetsrådet:** 15 medlemmer — 5 faste (USA, Russland, Kina, Frankrike, Storbritannia) med vetorett og 10 valgte. Har myndighet til å vedta bindende resolusjoner, innføre sanksjoner og autorisere bruk av militærmakt.

3. **Sekretariatet:** Ledet av generalsekretæren (nå António Guterres). Administrerer FNs daglige arbeid.

4. **Den internasjonale domstolen (ICJ):** Avgjør tvister mellom stater. Ligger i Haag.

5. **Det økonomiske og sosiale rådet (ECOSOC):** Koordinerer FNs arbeid med økonomi og sosiale spørsmål.

6. **Tillitsrådet:** Opprinnelig ansvarlig for forvaltningsområder, nå inaktivt.`,
    },
    {
      id: 'pm-5-2-example-1',
      type: 'example',
      title: 'Eksempel: Vetoretten i praksis',
      problem: 'Russland har lagt ned veto mot FN-resolusjoner om Syria-krigen minst 16 ganger. Hva betyr dette i praksis?',
      solution: `Russland er fast medlem av Sikkerhetsrådet og har brukt vetoretten gjentatte ganger for å blokkere resolusjoner som fordømmer syriske myndigheters handlinger, innfører sanksjoner eller autoriserer intervensjon.

**Konsekvensen:** FN har vært lammet i Syria-konflikten. Hundretusener har dødd, millioner er på flukt, og kjemiske våpen er brukt — uten at Sikkerhetsrådet har kunnet handle effektivt.

**Debatten:** Kritikere mener vetoretten gir stormaktene for mye makt og hindrer FN i å oppfylle sitt mandat. Tilhengere mener vetoretten er nødvendig for å holde stormaktene innenfor FN-systemet — uten vetorett ville stormakter trolig forlate organisasjonen.`,
    },
    {
      id: 'pm-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'pm-5-2-ex-1',
        number: '5.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilke land har fast plass og vetorett i FNs Sikkerhetsråd?',
        options: [
          { id: 'a', text: 'USA, Kina, India, Brasil og Japan', isCorrect: false },
          { id: 'b', text: 'USA, Russland, Kina, Frankrike og Storbritannia', isCorrect: true },
          { id: 'c', text: 'USA, Russland, Tyskland, Frankrike og Italia', isCorrect: false },
          { id: 'd', text: 'De fem største økonomiene i verden', isCorrect: false },
        ],
        solution: 'De fem faste medlemmene er USA, Russland, Kina, Frankrike og Storbritannia — seiersmaktene fra andre verdenskrig. De har vetorett som gir dem makt til å blokkere enhver resolusjon.',
      },
    },
    {
      id: 'pm-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'pm-5-2-ex-2',
        number: '5.2.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar forskjellen mellom Generalforsamlingen og Sikkerhetsrådet i FN.',
        hints: ['Tenk på sammensetning, stemmerett og myndighet.'],
        solution: `Generalforsamlingen: Alle 193 land, én stemme hver, vedtar ikke-bindende resolusjoner, drøfter alle internasjonale spørsmål. Sikkerhetsrådet: 15 medlemmer (5 faste med veto), vedtar bindende resolusjoner, kan autorisere sanksjoner og militærmakt. Sikkerhetsrådet er mektigere fordi vedtakene er bindende.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'pm-5-2-def-2',
      type: 'definition',
      title: 'FNs bærekraftsmål (SDGs)',
      content: `I 2015 vedtok FNs generalforsamling **17 bærekraftsmål** (Sustainable Development Goals) som skal oppnås innen 2030. Målene erstatter tusenårsmålene og er mer ambisiøse:

Blant de 17 målene er:
- **Mål 1:** Utrydde fattigdom
- **Mål 4:** God utdanning
- **Mål 5:** Likestilling mellom kjønnene
- **Mål 10:** Mindre ulikhet
- **Mål 13:** Stoppe klimaendringene
- **Mål 16:** Fred, rettferdighet og sterke institusjoner

Bærekraftsmålene er universelle — de gjelder for alle land, ikke bare utviklingsland. Norge rapporterer årlig om sin innsats, og norsk politikk skal bidra til å nå målene.`,
    },
    {
      id: 'pm-5-2-text-1',
      type: 'text',
      title: 'FNs underorganisasjoner',
      content: `## FNs underorganisasjoner

FN-systemet omfatter en rekke spesialorganer og programmer:

- **UNICEF:** Arbeider for barns rettigheter, helse og utdanning i over 190 land
- **UNHCR:** Beskytter og hjelper flyktninger — ansvar for over 100 millioner mennesker på flukt
- **WHO:** Verdens helseorganisasjon, leder globalt helsearbeid (f.eks. koronapandemien)
- **UNESCO:** Arbeid for utdanning, vitenskap og kultur, samt verdensarvsteder
- **WFP:** Verdens matvareprogram, gir nødhjelp ved hungersnød og kriser

Norge er en viktig bidragsyter til FN-systemet og har bidratt med soldater til FNs fredsbevarende operasjoner i mange tiår.`,
    },
    {
      id: 'pm-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'pm-5-2-ex-3',
        number: '5.2.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva innebærer vetoretten i FNs Sikkerhetsråd?',
        options: [
          { id: 'a', text: 'At alle 15 medlemmer kan blokkere vedtak', isCorrect: false },
          { id: 'b', text: 'At de 5 faste medlemmene kan blokkere enhver resolusjon', isCorrect: true },
          { id: 'c', text: 'At Generalsekretæren kan overstyre Sikkerhetsrådet', isCorrect: false },
          { id: 'd', text: 'At Generalforsamlingen kan overprøve Sikkerhetsrådets vedtak', isCorrect: false },
        ],
        solution: 'Vetoretten betyr at hvert av de fem faste medlemmene kan blokkere enhver substansiell resolusjon i Sikkerhetsrådet. Det holder at ett land sier nei for å stoppe vedtaket.',
      },
    },
    {
      id: 'pm-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'pm-5-2-ex-4',
        number: '5.2.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg tre av FNs bærekraftsmål og vurder Norges innsats for å nå dem. Er Norge på god vei?',
        hints: ['Bruk regjeringens rapportering om bærekraftsmålene som kilde.'],
        solution: `Mål 4 (God utdanning): Norge scorer høyt med gratis skole og høy fullføringsgrad. Mål 13 (Klimahandling): Blandet — Norge er verdensledende på elbiler men er stor olje- og gassprodusent. Mål 10 (Mindre ulikhet): Norge har lav ulikhet nasjonalt, men bidrar til global ulikhet gjennom oljepolitikk. Konklusjon: Norge gjør det bra nasjonalt men har utfordringer globalt.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'pm-5-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- FN har 193 medlemsland og ble grunnlagt i 1945 for å sikre fred
- **Sikkerhetsrådet** er mektigst med 5 faste medlemmer med **vetorett**
- FN-systemet omfatter viktige organisasjoner som UNICEF, UNHCR, WHO
- **17 bærekraftsmål** skal oppnås innen 2030 — gjelder alle land`,
    },
    // --- Samleoppgaver ---
    {
      id: 'pm-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'pm-5-2-ex-5',
        number: '5.2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft om vetoretten i FNs Sikkerhetsråd bør avskaffes eller reformeres.',
        hints: ['Tenk på effektivitet vs. stormaktsinteresser.'],
        solution: `For avskaffelse: Lammet handling i Syria, Ukraina. Representerer 1945-maktforhold. Mot: Uten veto ville stormakter forlate FN. Veto hindrer direkte konfrontasjon. Reform-forslag: Utvide med nye faste medlemmer (India, Brasil, Japan, afrikansk land), begrense veto til spesifikke saker, kreve begrunnelse ved veto.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'pm-5-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'pm-5-2-ex-6',
        number: '5.2.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vurder FNs rolle i en selvvalgt internasjonal krise. Hva klarte FN å gjøre, og hva klarte de ikke?',
        hints: ['Velg f.eks. Syria, Ukraina, klimaforhandlinger eller koronapandemien.'],
        solution: `Eksempel (koronapandemien): FN/WHO klarte: koordinere informasjonsdeling, utvikle COVAX-ordningen for vaksinedistribusjon, gi helsefaglige anbefalinger. Klarte ikke: hindre vaksinenasjonalisme, tvinge land til å dele vaksiner, forhindre reisebegrensninger. Lærdommer: FN er avhengig av staters vilje til å samarbeide.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.3: NATO og internasjonal sikkerhet
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_5_3: TextbookChapter = {
  id: 'politikk-menneskerett-5-3',
  courseId: 'politikk-menneskerett',
  chapterNumber: '5.3',
  title: 'NATO og internasjonal sikkerhet',
  description: 'NATOs oppbygging, artikkel 5, kollektivt forsvar, norsk sikkerhetspolitikk og nye sikkerhetstrusler.',
  estimatedMinutes: 50,
  prevChapter: 'politikk-menneskerett-5-2',
  nextChapter: 'politikk-menneskerett-5-4',
  competenceGoals: [
    'gjøre rede for NATOs rolle og oppbygging',
    'drøfte Norges sikkerhetspolitiske utfordringer',
  ],
  keyTerms: [
    { term: 'NATO', definition: 'North Atlantic Treaty Organization — forsvarsallianse grunnlagt 1949 med 32 medlemsland.' },
    { term: 'Artikkel 5', definition: 'NATOs kollektive forsvarsklausul: et angrep på ett medlemsland betraktes som angrep på alle.' },
    { term: 'Kollektivt forsvar', definition: 'Prinsippet om at allierte forsvarer hverandre mot ytre angrep.' },
    { term: 'Hybridkrig', definition: 'Krigføring som kombinerer konvensjonelle militære midler med cyberangrep, desinformasjon og økonomisk press.' },
    { term: 'Totalberedskap', definition: 'Norsk konsept for at hele samfunnet — sivilt og militært — må være forberedt på krise og krig.' },
    { term: 'Toprosentmålet', definition: 'NATO-landenes mål om å bruke minst 2 % av BNP på forsvar.' },
  ],
  content: [
    {
      id: 'pm-5-3-intro',
      type: 'text',
      content: `## NATO og internasjonal sikkerhet

NATO er Norges viktigste sikkerhetsgaranti. Som et lite land med en lang grense mot Russland er Norge avhengig av allierte som stiller opp dersom vi trues. Artikkel 5 i Atlanterhavspakten — «én for alle, alle for én» — er kjernen i denne garantien.

Men sikkerhetstruslene har endret seg dramatisk siden NATO ble grunnlagt i 1949. I tillegg til tradisjonelle militære trusler står NATO overfor cyberangrep, terrorisme, hybridkrigføring og klimarelaterte sikkerhetstrusler.

I dette kapittelet skal du lære:
- NATOs oppbygging og viktigste funksjoner
- Artikkel 5 og kollektivt forsvar
- Norges rolle i NATO og norsk sikkerhetspolitikk
- Nye sikkerhetstrusler i det 21. århundre`,
    },
    {
      id: 'pm-5-3-def-1',
      type: 'definition',
      title: 'NATO og artikkel 5',
      content: `**NATO** ble grunnlagt i 1949 som svar på trusselen fra Sovjetunionen. I dag har alliansen 32 medlemmer etter at Finland og Sverige ble med i 2023-2024.

**Artikkel 5** er NATOs kjerne: «Et væpnet angrep mot en eller flere [allierte] i Europa eller Nord-Amerika skal betraktes som et angrep mot alle.» Den er blitt aktivert kun én gang — etter terrorangrepet 11. september 2001.

NATOs struktur:
- **Det nordatlantiske råd (NAC):** Øverste politiske organ, alle beslutninger krever enstemmighet
- **Generalsekretæren:** Leder NATOs daglige arbeid (nå Mark Rutte)
- **SACEUR:** Øverstkommanderende for NATOs militære operasjoner
- **NATOs hovedkvarter:** Brussel, Belgia`,
    },
    {
      id: 'pm-5-3-example-1',
      type: 'example',
      title: 'Eksempel: Norsk sikkerhetspolitikk',
      problem: 'Hvordan balanserer Norge forholdet til NATO og naboskapet med Russland?',
      solution: `Norge fører en balansegang:

**NATO-forankring:** Norge var med å grunnlegge NATO og er en lojal alliert. Norske soldater deltar i NATO-operasjoner, og allierte øver jevnlig i Norge.

**Beroligelse:** Samtidig har Norge tradisjonelt ført en «beroligelsespolitikk» overfor Russland: ingen utenlandske baser på norsk jord i fredstid, begrensninger på alliert øvingsaktivitet nær russisk grense.

**Endring:** Etter Russlands invasjon av Ukraina i 2022 har Norge økt forsvarsbudsjettet, styrket samarbeidet med allierte, og tillatt mer alliert aktivitet i nord. Debatten om basepolitikken har blitt mer nyansert.

Denne balansegangen mellom avskrekking og beroligelse er sentral i norsk sikkerhetspolitikk.`,
    },
    {
      id: 'pm-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'pm-5-3-ex-1',
        number: '5.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva innebærer artikkel 5 i Atlanterhavspakten?',
        options: [
          { id: 'a', text: 'At NATO kan angripe ethvert land som truer verdensfreden', isCorrect: false },
          { id: 'b', text: 'At et angrep på ett medlemsland betraktes som angrep på alle', isCorrect: true },
          { id: 'c', text: 'At USA bestemmer NATOs militære operasjoner', isCorrect: false },
          { id: 'd', text: 'At alle medlemsland må ha atomvåpen', isCorrect: false },
        ],
        solution: 'Artikkel 5 er NATOs kollektive forsvarsgaranti: et angrep på ett medlemsland er et angrep på alle, og alle er forpliktet til å bistå.',
      },
    },
    {
      id: 'pm-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'pm-5-3-ex-2',
        number: '5.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva hybridkrigføring er og gi tre eksempler på hybride trusler.',
        hints: ['Tenk på metoder som kombinerer militære og ikke-militære virkemidler.'],
        solution: `Hybridkrigføring kombinerer konvensjonelle og ukonvensjonelle metoder: 1) Cyberangrep mot infrastruktur (strømnett, sykehus). 2) Desinformasjonskampanjer i sosiale medier for å påvirke valg. 3) Bruk av «grønne menn» — soldater uten merker som i Russlands annektering av Krim (2014). Andre: sanksjoner, energipolitisk press, sabotasje.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'pm-5-3-def-2',
      type: 'definition',
      title: 'Nye sikkerhetstrusler',
      content: `Sikkerhet i det 21. århundre handler om mer enn militært forsvar:

- **Cybertrusler:** Statlige og ikke-statlige aktører angriper digital infrastruktur. Norge utsettes for tusenvis av cyberangrep årlig
- **Terrorisme:** Både islamistisk ekstremisme og høyreekstremisme utgjør trusler
- **Hybridkrigføring:** Kombinasjon av militære, økonomiske, digitale og informasjonsrelaterte virkemidler
- **Klimasikkerhet:** Klimaendringer kan forsterke konflikter om ressurser og øke migrasjon
- **Pandemier:** Covid-19 viste at helsesikkerhet er en del av nasjonal sikkerhet`,
    },
    {
      id: 'pm-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'pm-5-3-ex-3',
        number: '5.3.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvor mange ganger har NATOs artikkel 5 blitt aktivert?',
        options: [
          { id: 'a', text: 'Aldri', isCorrect: false },
          { id: 'b', text: 'Én gang — etter 11. september 2001', isCorrect: true },
          { id: 'c', text: 'To ganger — etter 11. september og Ukraina-krigen', isCorrect: false },
          { id: 'd', text: 'Fem ganger siden 1949', isCorrect: false },
        ],
        solution: 'Artikkel 5 er blitt aktivert kun én gang — etter terrorangrepet mot USA 11. september 2001. Ukraina er ikke NATO-medlem, så artikkel 5 ble ikke aktivert for Ukraina.',
      },
    },
    {
      id: 'pm-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'pm-5-3-ex-4',
        number: '5.3.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv Norges sikkerhetspolitiske utfordringer og forklar hvorfor NATO er viktig for Norge.',
        hints: ['Tenk på geografi, naboskap med Russland, arktisk politikk.'],
        solution: `Norge har lang grense med Russland i nord, strategisk viktige havområder, og er for lite til å forsvare seg alene. NATO gir en kollektiv sikkerhetsgaranti som avskrekker potensielle angripere. Etter Ukraina-krigen er dette viktigere enn noen gang. Norge bidrar tilbake med arktisk kompetanse, etterretning og deltakelse i operasjoner.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'pm-5-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **NATO** er en forsvarsallianse med 32 medlemsland, grunnlagt 1949
- **Artikkel 5** garanterer kollektivt forsvar — brukt kun etter 11. september
- Norge balanserer mellom NATO-forankring og beroligelse av Russland
- Nye trusler: **cyberangrep, hybridkrig, terrorisme, klimasikkerhet**`,
    },
    // --- Samleoppgaver ---
    {
      id: 'pm-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'pm-5-3-ex-5',
        number: '5.3.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft om NATO bør utvide sitt fokus fra tradisjonelt forsvar til også å håndtere klimasikkerhet og pandemier.',
        hints: ['Tenk på NATOs mandat, ressurser og alternative organisasjoner.'],
        solution: `For: Sikkerhet er bredere i dag, NATO har resurser og samordningsevne. Mot: NATO er en militærallianse, bør fokusere på kjerneoppdrag. Klimaarbeid tilhører FN/EU. Balansert: NATO bør integrere klima i sikkerhetsplanlegging, men ikke overta oppgaver som tilhører andre organisasjoner.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'pm-5-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'pm-5-3-ex-6',
        number: '5.3.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bør Norge bruke 2 % av BNP på forsvar (toprosentmålet)? Drøft med argumenter for og mot.',
        hints: ['Tenk på sikkerhet, økonomi, andre behov (helse, utdanning, klima).'],
        solution: `For: Alvorligere sikkerhetssituasjon etter Ukraina-krigen. Norge har råd. Solidaritet med allierte. Mot: Pengene kunne brukes på helse, utdanning, klima. Norges BNP er kunstig høyt pga. olje, 2 % betyr enormt. Balansert: De fleste norske partier støtter toprosentmålet gitt den endrede sikkerhetssituasjonen.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.4: EU og europeisk samarbeid
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_5_4: TextbookChapter = {
  id: 'politikk-menneskerett-5-4',
  courseId: 'politikk-menneskerett',
  chapterNumber: '5.4',
  title: 'EU og europeisk samarbeid',
  description: 'EUs institusjoner, det indre markedet, norsk tilknytning gjennom EØS og Schengen, og debatten om EU-medlemskap.',
  estimatedMinutes: 50,
  prevChapter: 'politikk-menneskerett-5-3',
  nextChapter: 'politikk-menneskerett-5-5',
  competenceGoals: [
    'gjøre rede for EUs oppbygging og norsk tilknytning',
    'drøfte argumenter for og mot norsk EU-medlemskap',
  ],
  keyTerms: [
    { term: 'EU', definition: 'Den europeiske union — politisk og økonomisk samarbeid mellom 27 europeiske land.' },
    { term: 'EØS-avtalen', definition: 'Europeisk økonomisk samarbeidsområde — gir Norge tilgang til EUs indre marked mot å innføre EUs regelverk.' },
    { term: 'Schengen', definition: 'Samarbeid om fri bevegelse uten grensekontroll mellom 27 europeiske land.' },
    { term: 'Det indre markedet', definition: 'EUs felles marked med fri bevegelse av varer, tjenester, kapital og personer.' },
    { term: 'EU-kommisjonen', definition: 'EUs utøvende organ som foreslår lover og håndhever regelverk.' },
    { term: 'Europaparlamentet', definition: 'EUs lovgivende organ med direkte valgte representanter fra alle medlemsland.' },
  ],
  content: [
    {
      id: 'pm-5-4-intro',
      type: 'text',
      content: `## EU og europeisk samarbeid

Norge er ikke medlem av EU, men er likevel tett knyttet til unionen gjennom EØS-avtalen og Schengen-samarbeidet. Norge har implementert mer enn 10 000 EU-direktiver og -forordninger, betaler milliarder i EØS-midler, og følger store deler av EUs regelverk — men uten stemmerett.

EU-debatten er en av de mest varige i norsk politikk. Norge sa nei i folkeavstemninger i 1972 og 1994, men spørsmålet dukker stadig opp.

I dette kapittelet skal du lære:
- EUs oppbygging og institusjoner
- Norges tilknytning gjennom EØS og Schengen
- Argumenter for og mot norsk EU-medlemskap`,
    },
    {
      id: 'pm-5-4-def-1',
      type: 'definition',
      title: 'EUs institusjoner',
      content: `EU har fire hovedinstitusjoner:

1. **EU-kommisjonen:** Foreslår lover, administrerer EU-politikk, håndhever regelverk. Én kommissær per land.
2. **Europaparlamentet:** 705 direkte valgte representanter. Vedtar lover sammen med Ministerrådet.
3. **Ministerrådet (Rådet):** Representerer medlemslandenes regjeringer. Vedtar lover sammen med Parlamentet.
4. **Det europeiske råd:** Stats- og regjeringssjefer. Setter EUs overordnede politiske retning.

EU har også en domstol (EU-domstolen) som tolker EU-retten og sikrer at den følges likt i alle land.`,
    },
    {
      id: 'pm-5-4-example-1',
      type: 'example',
      title: 'Eksempel: EØS-avtalen i praksis',
      problem: 'Hvordan påvirker EØS-avtalen en norsk bedrift som eksporterer laks til Europa?',
      solution: `Uten EØS-avtalen ville norsk laks møtt høye tollbarrierer i EU. Med EØS: 1) Laksen eksporteres tollfritt til EU-markedet (fri varebevegelse). 2) Bedriften følger EUs mattrygghetsstandarder (harmoniserte regler). 3) Arbeidere kan rekrutteres fritt fra EU-land (fri personbevegelse). 4) Norge har ingen stemmerett i EU, men må innføre EUs regelverk for matproduksjon. EØS-avtalen gir markedstilgang, men betyr at Norge må akseptere EUs regler uten medbestemmelse.`,
    },
    {
      id: 'pm-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'pm-5-4-ex-1',
        number: '5.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva gir EØS-avtalen Norge tilgang til?',
        options: [
          { id: 'a', text: 'EUs forsvarspolitikk', isCorrect: false },
          { id: 'b', text: 'EUs indre marked med fri bevegelse av varer, tjenester, kapital og personer', isCorrect: true },
          { id: 'c', text: 'Stemmerett i Europaparlamentet', isCorrect: false },
          { id: 'd', text: 'Bruk av euro som valuta', isCorrect: false },
        ],
        solution: 'EØS-avtalen gir Norge tilgang til EUs indre marked med de fire frihetene: fri bevegelse av varer, tjenester, kapital og personer.',
      },
    },
    {
      id: 'pm-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'pm-5-4-ex-2',
        number: '5.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør rede for argumenter for og mot norsk EU-medlemskap. Presenter minst tre argumenter på hver side.',
        hints: ['Tenk på demokrati, økonomi, suverenitet, fiskeri, landbruk og utenrikspolitikk.'],
        solution: `**For:** 1) Stemmerett i EU — i dag innfører vi regler uten medbestemmelse. 2) Sterkere innflytelse i internasjonal politikk. 3) Enklere samarbeid om klima og sikkerhet.

**Mot:** 1) Tap av suverenitet over viktige områder (fiskeri, landbruk, olje). 2) Norsk distriktspolitikk kan undergraves av EU-regler. 3) EØS-avtalen gir allerede markedstilgang uten full integrasjon.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'pm-5-4-def-2',
      type: 'definition',
      title: 'Det demokratiske underskuddet',
      content: `Norges EØS-tilknytning omtales ofte som et **demokratisk underskudd**: Norge innfører store deler av EUs regelverk, men har ingen stemmerett i EU-institusjonene. Stortinget kan i teorien bruke vetoretten (reservasjonsretten), men dette har aldri blitt gjort fordi det kan sette hele EØS-avtalen i fare.

Kritikere mener dette er udemokratisk — norske borgere er bundet av regler de ikke har vært med på å vedta. Tilhengere av EØS mener avtalen gir den best mulige balansen mellom markedstilgang og nasjonal suverenitet.`,
    },
    {
      id: 'pm-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'pm-5-4-ex-3',
        number: '5.4.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva menes med «det demokratiske underskuddet» i Norges forhold til EU?',
        options: [
          { id: 'a', text: 'At EU har for mange byråkrater', isCorrect: false },
          { id: 'b', text: 'At Norge innfører EU-regler uten å ha stemmerett i EU', isCorrect: true },
          { id: 'c', text: 'At EU-valgene har lav valgdeltakelse', isCorrect: false },
          { id: 'd', text: 'At EU-kommisjonen ikke er demokratisk valgt', isCorrect: false },
        ],
        solution: 'Det demokratiske underskuddet betyr at Norge innfører store deler av EUs regelverk gjennom EØS, men uten stemmerett i EUs organer — norske borgere bindes av regler de ikke har vært med å vedta.',
      },
    },
    {
      id: 'pm-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'pm-5-4-ex-4',
        number: '5.4.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva Schengen-samarbeidet innebærer og vurder fordeler og ulemper.',
        hints: ['Tenk på reisefrihet, grensekontroll, innvandring og sikkerhet.'],
        solution: `Schengen betyr fri bevegelse uten grensekontroll mellom 27 land. Fordeler: Enklere reise og handel, reduserte kostnader for transport, styrker europeisk samhold. Ulemper: Vanskeligere å kontrollere ulovlig innvandring og grensekryssende kriminalitet. Under flyktningkrisen 2015 gjeninnførte flere land midlertidig grensekontroll.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'pm-5-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- EU er et politisk og økonomisk samarbeid mellom 27 land
- Norge er tilknyttet via **EØS-avtalen** (indre marked) og **Schengen** (fri bevegelse)
- **Det demokratiske underskuddet** betyr at Norge følger EU-regler uten stemmerett
- EU-debatten i Norge handler om avveiingen mellom suverenitet og innflytelse`,
    },
    // --- Samleoppgaver ---
    {
      id: 'pm-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'pm-5-4-ex-5',
        number: '5.4.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft om EØS-avtalen er den beste løsningen for Norge, eller om fullt EU-medlemskap eller oppsigelse av EØS ville vært bedre.',
        hints: ['Tenk på demokrati, økonomi, suverenitet og alternativer.'],
        solution: `EØS: Gir markedstilgang uten fullt tap av suverenitet, men demokratisk underskudd. EU-medlemskap: Gir stemmerett men krever mer suverenitetstap (fiskeri, landbruk). Oppsigelse: Gjenvinne suverenitet men miste markedstilgang — alvorlig for norsk næringsliv. De fleste eksperter mener EØS er et kompromiss, ikke en optimal løsning.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'pm-5-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'pm-5-4-ex-6',
        number: '5.4.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign Norges og Storbritannias forhold til EU. Hva kan vi lære av Brexit?',
        hints: ['Storbritannia forlot EU i 2020 etter folkeavstemning i 2016.'],
        solution: `Likheter: Begge land utenfor EU, begge skeptiske til deler av EU-integrasjonen. Forskjeller: Norge har EØS som sikrer markedstilgang; UK forhandlet en ny handelsavtale med mer friksjon. Brexit-lærdommer: Handel uten EU-tilknytning er komplisert, grensekontroller koster, løfter om store besparelser var overdrevne. For Norge: EØS-avtalen gir bedre tilgang enn det UK oppnådde utenfor.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.5: Internasjonal handel og økonomi
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_5_5: TextbookChapter = {
  id: 'politikk-menneskerett-5-5',
  courseId: 'politikk-menneskerett',
  chapterNumber: '5.5',
  title: 'Internasjonal handel og økonomi',
  description: 'WTO, frihandel vs. proteksjonisme, handelsavtaler, utviklingslandenes rolle og økonomisk globalisering.',
  estimatedMinutes: 50,
  prevChapter: 'politikk-menneskerett-5-4',
  nextChapter: 'politikk-menneskerett-5-6',
  competenceGoals: [
    'gjøre rede for prinsipper for internasjonal handel',
    'drøfte fordeler og ulemper ved frihandel og proteksjonisme',
  ],
  keyTerms: [
    { term: 'WTO', definition: 'Verdens handelsorganisasjon — regulerer internasjonal handel mellom 164 medlemsland.' },
    { term: 'Frihandel', definition: 'Handel mellom land uten tollbarrierer, kvoter eller andre handelshindringer.' },
    { term: 'Proteksjonisme', definition: 'Politikk som beskytter nasjonal industri mot utenlandsk konkurranse gjennom toll, subsidier eller importrestriksjoner.' },
    { term: 'Handelskrig', definition: 'Situasjon der land innfører gjensidig straffetoll mot hverandres varer.' },
    { term: 'Handelsavtale', definition: 'Avtale mellom land om å redusere handelshindringer seg imellom.' },
    { term: 'Komparative fortrinn', definition: 'Prinsippet om at land bør spesialisere seg i produksjon av det de er relativt best på, og handle med andre for resten.' },
  ],
  content: [
    {
      id: 'pm-5-5-intro',
      type: 'text',
      content: `## Internasjonal handel og økonomi

Når du kjøper en smarttelefon, er den sannsynligvis designet i USA, med komponenter fra Japan, Sør-Korea og Taiwan, satt sammen i Kina og solgt i Norge. Internasjonal handel gjør at vi har tilgang til produkter fra hele verden, ofte til lavere priser enn om alt ble produsert nasjonalt.

Men internasjonal handel er også politikk. Handelskriger, tollmurer og urettferdig konkurranse kan skape konflikter. Og globaliseringen har vinnere og tapere — noen tjener på fri handel, mens andre mister jobben.

I dette kapittelet skal du lære:
- Prinsipper for internasjonal handel og WTOs rolle
- Forskjellen mellom frihandel og proteksjonisme
- Norges handelsrelasjoner og handelsavtaler
- Konsekvenser av økonomisk globalisering`,
    },
    {
      id: 'pm-5-5-def-1',
      type: 'definition',
      title: 'Frihandel og proteksjonisme',
      content: `**Frihandel** betyr at varer og tjenester kan krysse landegrenser uten tollbarrierer, kvoter eller andre hindringer. Tilhengere mener frihandel gir lavere priser, større utvalg og økonomisk vekst.

**Proteksjonisme** betyr å beskytte nasjonal industri mot utenlandsk konkurranse. Virkemidler: toll (avgift på importvarer), subsidier (statlig støtte til nasjonal industri), importkvoter (begrensning på mengde importvarer).

**WTO** (Verdens handelsorganisasjon) arbeider for friere handel og løser handelstvister mellom land. WTO bygger på prinsippet om «mest begunstiget nasjon» — handelsfordeler gitt til ett land skal gis til alle WTO-medlemmer.`,
    },
    {
      id: 'pm-5-5-example-1',
      type: 'example',
      title: 'Eksempel: Norsk landbruksproteksjonisme',
      problem: 'Norge har høy toll på matvarer som ost, kjøtt og korn. Hvorfor, og hva er konsekvensene?',
      solution: `**Hvorfor:** Norge beskytter norsk landbruk av hensyn til: matvaresikkerhet (selvforsyning), bosetting i distriktene, kulturlandskap og dyrevelferd. Uten toll ville billigere importmat utkonkurrere norske bønder.

**Konsekvenser:** Fordeler: Norsk landbruk overlever, distrikts-Norge opprettholdes, høy dyrevelferd. Ulemper: Nordmenn betaler mer for mat enn nødvendig, utviklingsland stenges ute fra norsk marked.

**Dilemma:** Frihandel-prinsippet tilsier at Norge bør fjerne tollbarrierene. Men politiske hensyn til distrikt, matvaresikkerhet og kulturlandskap gjør at proteksjonismen opprettholdes. Norge er internasjonalt kritisert for dette.`,
    },
    {
      id: 'pm-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'pm-5-5-ex-1',
        number: '5.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom frihandel og proteksjonisme?',
        options: [
          { id: 'a', text: 'Frihandel betyr toll, proteksjonisme betyr ingen toll', isCorrect: false },
          { id: 'b', text: 'Frihandel betyr handel uten barrierer, proteksjonisme betyr å beskytte nasjonal industri', isCorrect: true },
          { id: 'c', text: 'De betyr det samme', isCorrect: false },
          { id: 'd', text: 'Frihandel er for rike land, proteksjonisme for fattige', isCorrect: false },
        ],
        solution: 'Frihandel fjerner handelsbarrierer for å fremme internasjonal handel. Proteksjonisme bruker toll, subsidier og kvoter for å beskytte nasjonal industri mot konkurranse.',
      },
    },
    {
      id: 'pm-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'pm-5-5-ex-2',
        number: '5.5.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Drøft om Norge bør opprettholde toll på landbruksvarer. Presenter argumenter fra ulike perspektiver.',
        hints: ['Tenk på bønder, forbrukere, utviklingsland og matvaresikkerhet.'],
        solution: `For toll: Matvaresikkerhet, distriktsbosetting, dyrevelferd, kulturlandskap. Mot toll: Høye matpriser, hindrer utviklingslands markedstilgang, strider mot frihandelsprinsipp. Balansert: Toll kan forsvares for selvforsyning, men bør kombineres med importlettelser for utviklingsland.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'pm-5-5-text-1',
      type: 'text',
      title: 'Økonomisk globalisering',
      content: `## Økonomisk globalisering

Økonomisk globalisering betyr at landenes økonomier blir stadig mer sammenvevde. Handelen øker, kapital flyter fritt, og produksjonskjeder strekker seg over hele verden.

### Vinnere og tapere
Globaliseringen har løftet hundrevis av millioner ut av fattigdom, spesielt i Asia. Kina, India og Sør-Korea har hatt enorm økonomisk vekst. Men innen rike land har globaliseringen bidratt til at industrijobber flyttes til lavkostland, noe som rammer arbeidere i tradisjonell industri.

### Norges rolle
Norge eksporterer olje, gass, fisk og sjømat, og er svært avhengig av verdenshandelen. Oljefondet (Statens pensjonsfond utland) investerer i selskaper over hele verden. Norge tjener på globaliseringen, men er også sårbar for internasjonale kriser.`,
    },
    {
      id: 'pm-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'pm-5-5-ex-3',
        number: '5.5.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvordan en handelskrig oppstår og gi et eksempel fra nyere tid.',
        hints: ['Tenk på USA-Kina-konflikten under Trump.'],
        solution: `En handelskrig oppstår når land gjensididig innfører straffetoll. Eksempel: USA innførte toll på kinesiske varer (stål, elektronikk) i 2018. Kina svarte med toll på amerikanske varer (soyabønner, biler). Konsekvenser: Høyere priser for forbrukere i begge land, forstyrrede forsyningskjeder, usikkerhet for bedrifter. Handelskrigen viste at proteksjonisme sjelden er vinn-vinn.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'pm-5-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **WTO** regulerer internasjonal handel mellom 164 land
- **Frihandel** fjerner barrierer, **proteksjonisme** beskytter nasjonal industri
- Norge beskytter landbruket med toll, men er ellers avhengig av fri handel
- Økonomisk globalisering har vinnere og tapere — både mellom og innen land`,
    },
    // --- Samleoppgaver ---
    {
      id: 'pm-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'pm-5-5-ex-4',
        number: '5.5.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vurder om økonomisk globalisering er positivt eller negativt for utviklingsland. Bruk konkrete eksempler.',
        hints: ['Tenk på Kinas vekst vs. afrikanke lands utfordringer.'],
        solution: `Positivt: Hundrevis av millioner løftet ut av fattigdom (Kina, Vietnam). Tilgang til kapital og teknologi. Eksportmuligheter. Negativt: Mange afrikanske land er låst i råvareeksport uten verdiøkning. Urettferdige handelsregler. Multinasjonale selskaper kan utnytte billig arbeidskraft. Konklusjon: Globaliseringen har potensial men krever rettferdige regler.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'pm-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'pm-5-5-ex-5',
        number: '5.5.5',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hva menes med komparative fortrinn?',
        options: [
          { id: 'a', text: 'At land bør produsere alt selv for å være selvforsynt', isCorrect: false },
          { id: 'b', text: 'At land bør spesialisere seg i det de er relativt best på og handle for resten', isCorrect: true },
          { id: 'c', text: 'At rike land alltid har fordel i handel med fattige land', isCorrect: false },
          { id: 'd', text: 'At land med størst befolkning produserer billigst', isCorrect: false },
        ],
        solution: 'Komparative fortrinn betyr at land bør spesialisere seg i produksjon av det de er relativt mest effektive på, selv om de ikke er absolutt best. Gjennom spesialisering og handel tjener alle parter.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.6: Krig, fred og konfliktløsning
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_5_6: TextbookChapter = {
  id: 'politikk-menneskerett-5-6',
  courseId: 'politikk-menneskerett',
  chapterNumber: '5.6',
  title: 'Krig, fred og konfliktløsning',
  description: 'Årsaker til væpnede konflikter, folkerett i krig, fredsbygging og Norges rolle i fredsprosesser.',
  estimatedMinutes: 50,
  prevChapter: 'politikk-menneskerett-5-5',
  nextChapter: 'politikk-menneskerett-6-1',
  competenceGoals: [
    'gjøre rede for årsaker til internasjonale konflikter',
    'vurdere Norges rolle i fredsarbeid og konfliktløsning',
  ],
  keyTerms: [
    { term: 'Genèvekonvensjonene', definition: 'Fire konvensjoner fra 1949 som beskytter sivile, krigsfanger og sårede i væpnede konflikter.' },
    { term: 'Krigsforbrytelse', definition: 'Alvorlige brudd på krigens folkerett, som angrep på sivile, tortur eller bruk av forbudte våpen.' },
    { term: 'Fredsbygging', definition: 'Langsiktig innsats for å forhindre tilbakefall til konflikt, inkludert demokratisering, forsoning og økonomisk gjenoppbygging.' },
    { term: 'Humanitær intervensjon', definition: 'Militær inngripen i et land for å beskytte sivile mot grove menneskerettighetsbrudd.' },
    { term: 'Fredsdiplomati', definition: 'Bruk av forhandlinger og mekling for å løse konflikter fredelig.' },
    { term: 'Nobels fredspris', definition: 'Internasjonal pris for fremragende fredsarbeid, deles ut av Norske Nobelkomité i Oslo.' },
  ],
  content: [
    {
      id: 'pm-5-6-intro',
      type: 'text',
      content: `## Krig, fred og konfliktløsning

Selv om verden i dag er fredligere enn gjennom mesteparten av historien, er væpnede konflikter fortsatt en realitet. Krig i Ukraina, borgerkrig i Syria og Yemen, konflikter i Sahel-regionen — alle minner om at fred ikke kan tas for gitt.

Norge har en lang tradisjon for fredsarbeid. Fra Oslo-avtalen mellom Israel og PLO (1993) til fredsprosessen i Colombia, har Norge bidratt som mekler i internasjonale konflikter. Nobels fredspris deles ut i Oslo.

I dette kapittelet skal du lære:
- Årsaker til væpnede konflikter
- Krigens folkerett — Genèvekonvensjonene
- Fredsbygging og konfliktløsning
- Norges rolle i internasjonalt fredsarbeid`,
    },
    {
      id: 'pm-5-6-def-1',
      type: 'definition',
      title: 'Årsaker til væpnede konflikter',
      content: `Væpnede konflikter har sjelden én enkelt årsak. Forskere identifiserer flere sammenvirkende faktorer:

- **Politiske årsaker:** Kamp om makt, undertrykkelse av minoriteter, sammenbrudd i politiske institusjoner
- **Økonomiske årsaker:** Fattigdom, ulikhet, konkurranse om ressurser (olje, vann, mineraler)
- **Etniske og religiøse motsetninger:** Diskriminering, identitetskonflikter, historiske traumer
- **Geopolitiske årsaker:** Stormaktsrivalisering, grenstetvister, innflytelsessfærer
- **Miljøfaktorer:** Klimaendringer, vannmangel, ørkenspredning kan forsterke konflikter

De fleste moderne konflikter er **interne** (borgerkriger) snarere enn mellomstatlige. Ofte involverer de ikke-statlige aktører som opprørsgrupper, militsier og terrororganisasjoner.`,
    },
    {
      id: 'pm-5-6-example-1',
      type: 'example',
      title: 'Eksempel: Konflikten i Syria',
      problem: 'Hvilke faktorer bidro til at en fredelig protest i Syria i 2011 utviklet seg til en fullskala borgerkrig?',
      solution: `**Politiske:** Assad-regimets brutale undertrykkelse av protester, manglende demokrati.
**Økonomiske:** Fattigdom og arbeidsledighet, spesielt blant unge.
**Etnisk-religiøse:** Spenninger mellom alawitter (styrende minoritet) og sunni-flertallet.
**Geopolitiske:** Stormaktsinvolvering — Russland og Iran støttet Assad, USA og vestlige land støttet deler av opposisjonen. IS utnyttet maktvakuumet.
**Miljø:** Langvarig tørke 2006-2010 drev bønder til byene, økte sosial uro.

Syria-konflikten viser hvordan flere årsaker kan forsterke hverandre og gjøre en konflikt svært vanskelig å løse.`,
    },
    {
      id: 'pm-5-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'pm-5-6-ex-1',
        number: '5.6.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva beskytter Genèvekonvensjonene?',
        options: [
          { id: 'a', text: 'Staters rett til å føre krig', isCorrect: false },
          { id: 'b', text: 'Sivile, krigsfanger og sårede i væpnede konflikter', isCorrect: true },
          { id: 'c', text: 'Staters territorielle integritet', isCorrect: false },
          { id: 'd', text: 'Retten til å bruke atomvåpen i selvforsvar', isCorrect: false },
        ],
        solution: 'Genèvekonvensjonene fra 1949 beskytter personer som ikke deltar i kamphandlinger: sivile, krigsfanger, sårede og syke soldater, og medisinsk personell.',
      },
    },
    {
      id: 'pm-5-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'pm-5-6-ex-2',
        number: '5.6.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv tre ulike årsaker til væpnede konflikter og gi et eksempel til hver.',
        hints: ['Tenk på politikk, økonomi, religion/etnisitet, geopolitikk og miljø.'],
        solution: `1. Politisk: Undertrykkelse av demokrati førte til borgerkrig i Libya (2011). 2. Økonomisk: Kontroll over diamantressurser drev konflikten i Sierra Leone. 3. Geopolitisk: Russlands ønske om innflytelsessfære bidro til invasjonen av Ukraina (2022).`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'pm-5-6-def-2',
      type: 'definition',
      title: 'Norges fredsrolle',
      content: `Norge har en lang tradisjon som fredsmekler og bistandsyter:

- **Oslo-avtalen (1993):** Hemmelige forhandlinger mellom Israel og PLO, ledet av norske diplomater
- **Sri Lanka:** Norge meklet mellom regjeringen og Tamil-tigrene (2002-2008)
- **Colombia:** Norge bidro som garantist i fredsprosessen mellom regjeringen og FARC (2016)
- **Fredsbevarende operasjoner:** Norske soldater har deltatt i FN- og NATO-operasjoner i mange tiår
- **Nobels fredspris:** Deles ut i Oslo av Norske Nobelkomité, gir Norge en unik plattform for fredsspørsmål

Norges fredsrolle bygger på en kombinasjon av nøytralitetstradisjon, stor bistandsbudsjett og vilje til å engasjere seg i vanskelige konflikter.`,
    },
    {
      id: 'pm-5-6-text-1',
      type: 'text',
      title: 'Fredsbygging og forsoning',
      content: `## Fredsbygging

Å stoppe en krig er bare halve jobben — å bygge varig fred er den virkelige utfordringen. Fredsbygging omfatter:

- **Politisk:** Etablere demokratiske institusjoner, rettssystem og godt styresett
- **Sikkerhet:** Avvæpne stridende, reformere sikkerhetsstyrkene
- **Økonomisk:** Gjenoppbygging, jobbskaping, økonomisk utvikling
- **Forsoning:** Sannhets- og forsoningskommisjoner, rettferdighet for ofre

Sør-Afrikas sannhets- og forsoningskommisjon etter apartheid er et velkjent eksempel. Ledet av erkebiskop Desmond Tutu, ga den ofre mulighet til å fortelle sine historier og gjerningsmenn mulighet til å søke amnesti mot full tilståelse.`,
    },
    {
      id: 'pm-5-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'pm-5-6-ex-3',
        number: '5.6.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva fredsbygging innebærer og hvorfor det er viktigere enn bare å stoppe kamphandlingene.',
        hints: ['Tenk på hva som skjer etter en våpenhvile — hvordan forhindre tilbakefall.'],
        solution: `Å stoppe kamphandlinger er nødvendig men ikke tilstrekkelig. Uten fredsbygging er risikoen for tilbakefall til konflikt stor. Fredsbygging inkluderer politisk stabilisering, økonomisk gjenoppbygging, forsoning mellom grupper og reform av sikkerhetsstyrkene. Eksempel: Etter borgerkrigen i Sierra Leone krevdes tiår med fredsbygging for å stabilisere landet.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'pm-5-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'pm-5-6-ex-4',
        number: '5.6.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken norsk fredsinnsats regnes som mest kjent internasjonalt?',
        options: [
          { id: 'a', text: 'Fredsprosessen i Colombia', isCorrect: false },
          { id: 'b', text: 'Oslo-avtalen mellom Israel og PLO (1993)', isCorrect: true },
          { id: 'c', text: 'Meklingen i Sri Lanka', isCorrect: false },
          { id: 'd', text: 'Nobels fredspris-utdelingen', isCorrect: false },
        ],
        solution: 'Oslo-avtalen (1993) mellom Israel og PLO er Norges mest kjente fredsdiplomatiske bidrag. Hemmelige forhandlinger i Norge førte til en historisk avtale, selv om fredsprosessen senere stagnerte.',
      },
    },
    {
      id: 'pm-5-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Væpnede konflikter har sammensatte årsaker: politiske, økonomiske, etniske, geopolitiske og miljømessige
- **Genèvekonvensjonene** beskytter sivile og krigsfanger i væpnede konflikter
- **Fredsbygging** er langsiktig innsats for varig fred — ikke bare våpenhvile
- Norge har lang tradisjon som fredsmekler, fra **Oslo-avtalen** til **Colombia**`,
    },
    // --- Samleoppgaver ---
    {
      id: 'pm-5-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'pm-5-6-ex-5',
        number: '5.6.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vurder Norges rolle som fredsmekler. Hva er Norges styrker og svakheter i denne rollen?',
        hints: ['Tenk på troverdighet, ressurser, størrelse og nøytralitet.'],
        solution: `Styrker: Oppfattes som nøytralt, ingen kolonial fortid i de fleste konfliktområder, stor bistandsbudsjett gir innflytelse, erfaring og kompetanse, Nobels fredspris gir plattform. Svakheter: Lite land med begrenset makt, kan ikke garantere avtaler, Oslo-avtalen har ikke ført til varig fred. Norge er mest effektivt som tilrettelegger, ikke som garantist.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'pm-5-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'pm-5-6-ex-6',
        number: '5.6.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft om humanitær intervensjon (militær inngripen for å beskytte sivile) noen gang er rettferdig. Bruk eksempler.',
        hints: ['Tenk på Rwanda (mangel på intervensjon) og Libya (intervensjon med konsekvenser).'],
        solution: `For: Rwanda (1994) — FN grep ikke inn, 800 000 ble drept. Passivitet kan koste mange liv. R2P gir moralsk grunnlag. Mot: Libya (2011) — intervensjon førte til statskollaps og langvarig kaos. Hvem bestemmer når intervensjon er berettiget? Risiko for misbruk. Balansert: Intervensjon kan være rettferdig ved folkemord, men må ha strenge kriterier, FN-mandat og realistisk etterspill.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle delkapitler
// ============================================================================

export const POLITIKK_MENNESKERETT_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_POLITIKK_MENNESKERETT_5_1,
  CHAPTER_POLITIKK_MENNESKERETT_5_2,
  CHAPTER_POLITIKK_MENNESKERETT_5_3,
  CHAPTER_POLITIKK_MENNESKERETT_5_4,
  CHAPTER_POLITIKK_MENNESKERETT_5_5,
  CHAPTER_POLITIKK_MENNESKERETT_5_6,
];
