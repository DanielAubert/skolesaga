/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Treningslære 3 (VG3) - Del 5: Dopingproblematikk
 *
 * Dekker LK20-kompetansemål for treningslære 3
 * Kapittel 5.1-5.5: Hva er doping, dopingmidler og metoder, helsekonsekvenser,
 * antidopingarbeid og etikk og doping
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1: Hva er doping?
// ============================================================================

export const CHAPTER_TRENING_3_5_1: TextbookChapter = {
  id: 'trening-3-5-1',
  courseId: 'trening-3',
  chapterNumber: '5.1',
  title: 'Hva er doping?',
  description: 'WADAs definisjon av doping, dopinglisten, kategorier av forbudte stoffer og metoder.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare hva doping er og gjore rede for WADAs definisjon',
    'beskrive hovedkategoriene av forbudte stoffer og metoder',
    'forstå prinsippene bak dopinglisten og dens oppdateringer',
  ],
  keyTerms: [],
  content: [
    {
      id: 'tr3-5-1-intro',
      type: 'text',
      content: `# Hva er doping?

Doping er et av de mest alvorlige problemene i moderne idrett. Det truer utovernes helse, undergraver rettferdig konkurranse og svekker tilliten til idrett som helhet. For a forstå dopingproblematikken er det viktig å kjenne til den offisielle definisjonen, hvilke stoffer og metoder som er forbudt, og hvordan regelverket er bygget opp.

Historisk sett har mennesker brukt prestasjonsfremmende midler i tusenvis av år. Allerede i antikkens olympiske leker brukte utovere spesielle dietter og planteekstrakter for å forbedre sine prestasjoner. Det moderne dopingbegrepet utviklet seg på 1900-tallet, og behovet for et internasjonalt regelverk ble tydelig etter flere alvorlige hendelser, inkludert dodsfall blant syklister.`,
    },
    {
      id: 'tr3-5-1-def-doping',
      type: 'definition',
      title: 'Doping',
      content: `Ifølge World Anti-Doping Agency (WADA) er doping definert som forekomsten av ett eller flere brudd på antidopingregelverket. Dette inkluderer ikke bare bruk av forbudte stoffer, men også besittelse, distribusjon, manipulering av dopingprover, nekting av å avlegge prove og brudd på meldeplikten for utovere i dopingkontrollsystemet.`,
    },
    {
      id: 'tr3-5-1-text-wada',
      type: 'text',
      title: 'WADA og antidopingkoden',
      content: `**World Anti-Doping Agency (WADA)** ble grunnlagt i 1999 som et uavhengig internasjonalt byrå med hovedkontor i Montreal, Canada. WADA har ansvar for å utvikle og harmonisere antidopingregelverket i internasjonal idrett.

**WADAs antidopingkode** er det grunnleggende dokumentet som definerer antidopingreglene. Koden ble forst vedtatt i 2003 og er revidert flere ganger siden. Alle land som har signert UNESCO-konvensjonen mot doping i idrett, og alle internasjonale idrettsforbund, er forpliktet til å folge denne koden.

**Regelbrudd ifølge WADA inkluderer:**
1. Tilstedeværelse av forbudt stoff i en utøvers prove
2. Bruk eller forsøk på bruk av forbudt stoff eller metode
3. Unnvikelse, nekting eller unnlatelse av å avgi prove
4. Brudd på meldeplikten (whereabouts)
5. Manipulering eller forsok på manipulering av dopingkontroll
6. Besittelse av forbudte stoffer eller utstyr
7. Distribusjon eller handel med forbudte stoffer
8. Administrering av forbudte stoffer til utovere
9. Medvirkning til dopingbrudd
10. Omgang med utestengte personer i treningssammenheng`,
    },
    {
      id: 'tr3-5-1-def-dopinglisten',
      type: 'definition',
      title: 'Dopinglisten',
      content: `Dopinglisten er WADAs offisielle oversikt over alle forbudte stoffer og metoder i idretten. Listen oppdateres årlig og trer i kraft 1. januar hvert år. Et stoff eller en metode kan plasseres på listen dersom det oppfyller minst to av tre kriterier: (1) det er prestasjonsfremmende eller potensielt prestasjonsfremmende, (2) det utgjor en reell eller potensiell helserisiko, og (3) bruk strider mot idrettens ånd.`,
    },
    {
      id: 'tr3-5-1-text-kategorier',
      type: 'text',
      title: 'Kategorier på dopinglisten',
      content: `Dopinglisten er delt inn i flere hovedkategorier:

**Stoffer som er forbudt til enhver tid (i og utenfor konkurranse):**
- **S0** — Stoffer uten godkjenning (ikke godkjent for medisinsk bruk)
- **S1** — Anabole stoffer (anabole steroider og andre anabole midler)
- **S2** — Peptidhormoner, vekstfaktorer og lignende stoffer (f.eks. EPO, veksthormon)
- **S3** — Beta-2-agonister (med visse unntak for astmamedisin)
- **S4** — Hormon- og metabolske modulatorer (f.eks. antiostrogener)
- **S5** — Diuretika og maskeringsmidler

**Stoffer forbudt i konkurranse (i tillegg til S0–S5):**
- **S6** — Stimulerende midler (f.eks. amfetamin, efedrin over grenseverdier)
- **S7** — Narkotika (f.eks. morfin, metadon)
- **S8** — Cannabinoider (f.eks. THC)
- **S9** — Glukokortikoider (visse bruksmåter)

**Forbudte metoder:**
- **M1** — Manipulering av blod og blodkomponenter
- **M2** — Kjemisk og fysisk manipulering (f.eks. av urinprover)
- **M3** — Gendoping`,
    },
    {
      id: 'tr3-5-1-note-idrettens-aand',
      type: 'note',
      title: 'Idrettens ånd',
      content: `Begrepet «idrettens ånd» er sentralt i WADAs arbeid. Det beskriver de verdiene som idretten er bygget på: etikk, fair play, ærlighet, helse, karakter, utdanning, glede, lagarbeid, respekt for regler, respekt for seg selv og andre, mot og solidaritet. Doping bryter med alle disse verdiene.`,
    },
    {
      id: 'tr3-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Strengt objektivt ansvar',
      problem: `En utøver spiser en forurenset kosttilskudd som inneholder et forbudt stoff uten at det står på innholdsfortegnelsen. Utøveren tester positivt i en dopingkontroll. Hvem har ansvaret?`,
      solution: `Ifølge WADAs regelverk gjelder prinsippet om **strengt objektivt ansvar**. Det betyr at utøveren alltid er personlig ansvarlig for det som finnes i kroppen, uavhengig av hvordan stoffet kom dit. Utøveren kan altså bli utestengt selv om inntak av det forbudte stoffet var utilsiktet.

Utøveren kan imidlertid søke om redusert straff dersom vedkommende kan bevise at det ikke var noen feil eller uaktsomhet, eller at det var «ingen vesentlig feil eller uaktsomhet». I praksis betyr dette at utøveren må dokumentere at rimelige forholdsregler ble tatt, f.eks. bruk av sertifiserte kosttilskudd med tredjepartskontroll.`,
    },
    {
      id: 'tr3-5-1-tip-1',
      type: 'tip',
      title: 'Sjekk dopinglisten',
      content: `Antidoping Norge har en gratis app og nettside der utovere og trenere kan søke opp medisiner og kosttilskudd for å sjekke om de inneholder forbudte stoffer. Tjenesten heter «Medisinsoket» og er tilgjengelig på antidoping.no.`,
    },
    {
      id: 'tr3-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr3-5-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er WADA?',
        options: [
          { id: 'a', text: 'Et internasjonalt uavhengig byrå som utvikler og harmoniserer antidopingregler', isCorrect: true },
          { id: 'b', text: 'En norsk organisasjon som kontrollerer kosttilskudd', isCorrect: false },
          { id: 'c', text: 'En avdeling i Den internasjonale olympiske komite (IOC)', isCorrect: false },
          { id: 'd', text: 'Et medisinsk laboratorium som analyserer blodprover', isCorrect: false },
        ],
        solution: 'WADA (World Anti-Doping Agency) er et uavhengig internasjonalt byrå som ble grunnlagt i 1999 for å lede kampen mot doping i idrett. WADA utvikler og harmoniserer antidopingreglene gjennom WADAs antidopingkode.',
      },
    },
    {
      id: 'tr3-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr3-5-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilke kriterier må et stoff oppfylle for å bli plassert på WADAs dopingliste?',
        options: [
          { id: 'a', text: 'Minst to av tre: prestasjonsfremmende, helserisiko, og i strid med idrettens ånd', isCorrect: true },
          { id: 'b', text: 'Alle tre: prestasjonsfremmende, helserisiko, og ulovlig i de fleste land', isCorrect: false },
          { id: 'c', text: 'Minst ett: enten prestasjonsfremmende eller farlig for helsen', isCorrect: false },
          { id: 'd', text: 'Stoffet må være reseptbelagt og ha dokumenterte bivirkninger', isCorrect: false },
        ],
        solution: 'Et stoff kan føres opp på dopinglisten dersom det oppfyller minst to av tre kriterier: det er prestasjonsfremmende eller potensielt prestasjonsfremmende, det utgjor en reell eller potensiell helserisiko, og bruk av stoffet strider mot idrettens ånd.',
      },
    },
    {
      id: 'tr3-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr3-5-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som menes med strengt objektivt ansvar i antidopingregelverket. Hvorfor er dette prinsippet viktig?',
        solution: 'Strengt objektivt ansvar betyr at utoveren alltid er personlig ansvarlig for det som finnes i kroppen sin, uavhengig av om inntaket var tilsiktet eller ikke. Prinsippet er viktig fordi det plasserer ansvaret entydig hos utoveren, noe som gjor det enklere å håndheve regelverket. Uten dette prinsippet kunne utovere hevde uvitenhet som forsvar, og det ville bli svært vanskelig å bevise forsettlig doping. Prinsippet motiverer utovere til å ta ansvar for hva de putter i kroppen og til å søke informasjon om medisiner og kosttilskudd.',
        hints: ['Tenk på konsekvensene dersom utovere fritt kunne påberope seg uvitenhet'],
      },
    },
    {
      id: 'tr3-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr3-5-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjor rede for de ulike hovedkategoriene av forbudte stoffer på WADAs dopingliste. Nevn minst fire kategorier med eksempler.',
        solution: '1) Anabole stoffer (S1) — f.eks. anabole steroider som testosteron og nandrolon. 2) Peptidhormoner og vekstfaktorer (S2) — f.eks. EPO (erytropoietin) og veksthormon (HGH). 3) Beta-2-agonister (S3) — f.eks. salbutamol i høye doser. 4) Diuretika og maskeringsmidler (S5) — f.eks. furosemid som okes urinutskillelsen og kan skjule andre stoffer. 5) Stimulerende midler (S6) — f.eks. amfetamin og efedrin. Stoffer i kategori S0-S5 er forbudt både i og utenfor konkurranse, mens S6-S9 er forbudt i konkurranse.',
        hints: ['Bruk kategori-inndelingen S0-S9 som utgangspunkt'],
      },
    },
    {
      id: 'tr3-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr3-5-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar forskjellen mellom stoffer som er forbudt til enhver tid og stoffer som bare er forbudt i konkurranse. Droft hvorfor noen stoffer kun er forbudt i konkurranse.',
        solution: 'Stoffer som er forbudt til enhver tid (S0-S5, samt forbudte metoder M1-M3) gir varige prestasjonsfordeler eller er så helseskadelige at de ikke kan forsvares medisinsk. Anabole steroider bygger f.eks. opp muskelmasse over tid, og effekten vedvarer lenge etter at bruken er avsluttet. Stoffer som kun er forbudt i konkurranse (S6-S9) har mer akutt, kortvarig effekt. Stimulerende midler som koffein i høye doser kan gi en umiddelbar prestasjonsfordel, men effekten er forbigående. Narkotika og cannabinoider kan påvirke reaksjonsevne og risikovurdering under konkurranse, men gir ingen treningsfordel. Noen av disse stoffene har også legitim medisinsk bruk som ikke gir varig prestasjonsfordel, og derfor er det ansett som uforholdsmessig å forby dem utenfor konkurranse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr3-5-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr3-5-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Droft utfordringene med å holde dopinglisten oppdatert. Hva skjer når nye stoffer utvikles raskere enn regelverket kan tilpasse seg?',
        solution: 'Dopinglisten oppdateres årlig, men det er en konstant kamp mellom utvikling av nye stoffer og oppdatering av regelverket. Utfordringer inkluderer: 1) Designerdrugs — stoffer som bevisst modifiseres kjemisk for å unngå deteksjon og som teknisk sett ikke star på listen. WADA har imidlertid kategori S0 som fanger opp stoffer uten medisinsk godkjenning. 2) Ny forskning — det tar tid å dokumentere at et stoff er prestasjonsfremmende og helseskadelig. 3) Analysemetoder — nye stoffer krever nye deteksjonsmetoder som tar tid å utvikle og validere. 4) Biologisk pass — WADA har innfort det biologiske passet som overvåker endringer i utoverens biologiske markorer over tid, noe som kan avsløre doping uten å måtte identifisere det spesifikke stoffet. 5) Gendoping — fremtidig genredigering kan bli svært vanskelig å oppdage. WADA adresserer dette gjennom forskning og ved å forby metoder for genmanipulering under kategori M3.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.2: Dopingmidler og metoder
// ============================================================================

export const CHAPTER_TRENING_3_5_2: TextbookChapter = {
  id: 'trening-3-5-2',
  courseId: 'trening-3',
  chapterNumber: '5.2',
  title: 'Dopingmidler og metoder',
  description: 'Anabole steroider, EPO, veksthormon, blodtransfusjon og andre dopingmetoder.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjore rede for virkningsmekanismene til de vanligste dopingmidlene',
    'forklare hvordan bloddoping og blodtransfusjon fungerer',
    'forstå sammenhengen mellom dopingmiddel og prestasjonstype',
  ],
  keyTerms: [],
  content: [
    {
      id: 'tr3-5-2-intro',
      type: 'text',
      content: `# Dopingmidler og metoder

Det finnes et bredt spekter av dopingmidler og metoder som brukes for å forbedre prestasjoner i idrett. Noen midler oker muskelmasse og styrke, andre forbedrer utholdenheten, og noen brukes for å skjule bruk av andre forbudte stoffer. I dette kapittelet gjennomgår vi de viktigste kategoriene med vekt på virkningsmekanismer og bruksområder.`,
    },
    {
      id: 'tr3-5-2-def-anabole',
      type: 'definition',
      title: 'Anabole androgene steroider (AAS)',
      content: `Anabole androgene steroider er syntetiske varianter av det mannlige kjønnshormonet testosteron. «Anabolt» betyr oppbyggende (stimulerer muskelvekst og proteinsyntese), mens «androgent» betyr maskuliniserende (utvikler mannlige kjonnskjennetegn). AAS er den mest utbredte gruppen dopingmidler på verdensbasis.`,
    },
    {
      id: 'tr3-5-2-text-steroider',
      type: 'text',
      title: 'Anabole steroider — virkningsmekanismer',
      content: `Anabole steroider virker ved å binde seg til androgenreseptorer i muskelcellene. Dette stimulerer proteinsyntesen og hemmer nedbrytningen av muskelprotein. Resultatet er okt muskelmasse, styrke og restitusjon.

**Prestasjonseffekter:**
- Okt muskelmasse og muskelstyrke
- Raskere restitusjon mellom treningsokter
- Okt aggressivitet som kan gi hard innsats i trening og konkurranse
- Redusert muskelnedbrytning under hard trening

**Eksempler på anabole steroider:**
- Testosteron (naturlig og syntetisk)
- Nandrolon (Deca-Durabolin)
- Stanozolol (Winstrol)
- Oxandrolon (Anavar)
- Trenbolon

Anabole steroider tas som tabletter, injeksjoner eller gjennom kremer og plaster. Dosene som brukes i dopingsammenheng er ofte 10-100 ganger hoyere enn medisinske doser.`,
    },
    {
      id: 'tr3-5-2-def-epo',
      type: 'definition',
      title: 'Erytropoietin (EPO)',
      content: `Erytropoietin (EPO) er et naturlig hormon som produseres i nyrene. Det stimulerer benmargen til å produsere flere røde blodceller. Syntetisk EPO (f.eks. rHuEPO) brukes medisinsk ved blodmangel, men i dopingsammenheng for å øke blodets oksygentransportkapasitet og dermed utholdenheten.`,
    },
    {
      id: 'tr3-5-2-text-epo',
      type: 'text',
      title: 'EPO og bloddoping',
      content: `**EPOs virkning i kroppen:**
1. EPO stimulerer produksjonen av røde blodceller i benmargen
2. Flere røde blodceller gir høyere hemoglobinnivå
3. Høyere hemoglobin betyr at blodet kan transportere mer oksygen
4. Økt oksygentransport gir bedre aerob utholdenhet

EPO gir særlig fordeler i utholdenhetsidretter som langrenn, sykling, langdistanseløp og triatlon. Studier har vist at EPO kan forbedre VO2max med 5-10 %, noe som er en enormt prestasjonsfordel i toppidrett.

**Blodtransfusjon** er en alternativ metode for å oppnå lignende effekter:
- **Autolog transfusjon:** Utoveren tapper eget blod, lagrer det, og reinfunderer det for konkurranse
- **Homolog transfusjon:** Utoveren mottar blod fra en annen person med samme blodtype

Begge metodene oker hemoglobinnivået og oksygentransporten, men er forbudt under kategori M1 på dopinglisten.`,
    },
    {
      id: 'tr3-5-2-text-veksthormon',
      type: 'text',
      title: 'Veksthormon (HGH) og andre peptidhormoner',
      content: `**Veksthormon (Human Growth Hormone, HGH):**
- Stimulerer vekst, cellereproduksjon og regenerering
- Oker fettforbrenningen og reduserer kroppsfett
- Kan oke muskelmasse, men effekten på styrke er omdiskutert
- Vanskelig å påvise i dopingkontroll fordi det er identisk med naturlig veksthormon

**Insulinlignende vekstfaktor (IGF-1):**
- Virker sammen med veksthormon
- Stimulerer muskel- og bruskevekst
- Brukes ofte i kombinasjon med veksthormon og anabole steroider

**Insulin:**
- Brukes av noen utovere for å oke opptaket av næringsstoffer i musklene
- Svært farlig — kan gi livstruende lavt blodsukker (hypoglykemi)
- Kombineres ofte med anabole steroider og veksthormon`,
    },
    {
      id: 'tr3-5-2-text-maskeringsmidler',
      type: 'text',
      title: 'Maskeringsmidler og stimulerende midler',
      content: `**Maskeringsmidler:**
- **Diuretika** — oker urinutskillelsen og kan fortynne urinen, slik at andre dopingmidler blir vanskeligere å påvise
- **Probenecid** — hemmer utskillelsen av visse stoffer i urinen
- **Plasmaekspandere** — fortynner blodet og kan maskere forhoyede hemoglobinverdier

**Stimulerende midler (S6):**
- **Amfetamin og metamfetamin** — oker våkenhet, energi og aggressivitet
- **Efedrin** — virker som svakt sentralstimulerende middel
- **Modafinil** — brukes mot sorvighet og oker våkenhet
- Stimulerende midler er bare forbudt i konkurranse, da de gir kortvarig akutt effekt`,
    },
    {
      id: 'tr3-5-2-example-1',
      type: 'example',
      title: 'Eksempel: Lance Armstrong og EPO-bruk',
      problem: `Lance Armstrong vant Tour de France syv ganger mellom 1999 og 2005, men ble senere fratatt alle titlene. Hva slags dopingmetoder ble Armstrong felt for, og hvordan ble dopingen til slutt avslørt?`,
      solution: `Armstrong brukte et sofistikert dopingprogram som inkluderte:
- **EPO** for å øke antallet røde blodceller og oksygentransporten
- **Blodtransfusjoner** (autologe) for å øke hemoglobinnivået før etapper
- **Testosteron** for å fremme restitusjon og muskelvekst
- **Kortison** for å redusere betennelser og smerter

Dopingen ble til slutt avslørt gjennom USADA (US Anti-Doping Agency) sin etterforskning i 2012. Nøkkelbeviset var vitneutsagn fra tidligere lagkamerater som beskrev et systematisk dopingprogram på hele laget. I tillegg ble retroaktive analyser av eldre blodprover med nyere testmetoder brukt som støttebevis. Armstrong innrommet dopingbruken i et TV-intervju i 2013.`,
    },
    {
      id: 'tr3-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr3-5-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedvirkningen av anabole steroider?',
        options: [
          { id: 'a', text: 'Okt proteinsyntese og muskelvekst gjennom binding til androgenreseptorer', isCorrect: true },
          { id: 'b', text: 'Okt produksjon av rode blodceller i benmargen', isCorrect: false },
          { id: 'c', text: 'Stimulering av sentralnervesystemet for okt våkenhet', isCorrect: false },
          { id: 'd', text: 'Okt fettforbrenning gjennom stimulering av skjoldbruskkjertelen', isCorrect: false },
        ],
        solution: 'Anabole steroider binder seg til androgenreseptorer i muskelcellene, noe som stimulerer proteinsyntesen og hemmer nedbrytningen av muskelprotein. Resultatet er okt muskelmasse, styrke og raskere restitusjon.',
      },
    },
    {
      id: 'tr3-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr3-5-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvordan virker EPO som dopingmiddel?',
        options: [
          { id: 'a', text: 'Det oker produksjonen av rode blodceller, som gir bedre oksygentransport', isCorrect: true },
          { id: 'b', text: 'Det oker produksjonen av hvite blodceller, som styrker immunforsvaret', isCorrect: false },
          { id: 'c', text: 'Det utvider blodårene slik at blodet strommer raskere', isCorrect: false },
          { id: 'd', text: 'Det oker lungenes kapasitet til å ta opp oksygen fra luften', isCorrect: false },
        ],
        solution: 'EPO stimulerer benmargen til å produsere flere rode blodceller. Flere rode blodceller gir hoyere hemoglobinnivå, som betyr at blodet kan transportere mer oksygen til de arbeidende musklene. Dette gir bedre aerob utholdenhet.',
      },
    },
    {
      id: 'tr3-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr3-5-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom autolog og homolog blodtransfusjon. Hvilke fordeler og risikoer har hver metode for dopingbrukeren?',
        solution: 'Autolog blodtransfusjon innebærer at utoveren tapper sitt eget blod i forkant, lagrer det, og reinfunderer det for konkurranse. Fordelen er at det er vanskeligere å påvise fordi blodet er utoverens eget. Ulempen er at utoveren har redusert kapasitet i perioden mellom tapping og reinfusjon. Homolog blodtransfusjon innebærer å motta blod fra en annen person med kompatibel blodtype. Fordelen er at utoveren slipper å tape eget blod. Risikoen inkluderer blodtypeinkompabilitet, overføring av infeksjoner, og det er lettere å påvise fordi fremmed blod kan identifiseres gjennom flowcytometri.',
        hints: ['Tenk på det som forskjellen mellom å bruke eget blod og blod fra en annen person'],
      },
    },
    {
      id: 'tr3-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr3-5-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjor rede for hva maskeringsmidler er og forklar hvorfor de er plassert på dopinglisten, selv om de ikke i seg selv er prestasjonsfremmende.',
        solution: 'Maskeringsmidler er stoffer som brukes for å skjule bruk av andre dopingmidler. Eksempler inkluderer diuretika som fortynner urinen og gjor det vanskeligere å påvise andre stoffer, og probenecid som hemmer utskillelsen av visse stoffer i urinen. Maskeringsmidler er på dopinglisten fordi de muliggjor bruk av andre dopingmidler uten å bli oppdaget. Å tillate maskeringsmidler ville i praksis undergrave hele antidopingsystemet, fordi utovere da kunne skjule forbudt bruk. I tillegg kan maskeringsmidler som diuretika ha egne helserisikoer, som dehydrering og elektrolyttforstyrrelser.',
        hints: ['Fokuser på hvordan maskeringsmidler undergraver deteksjon'],
      },
    },
    {
      id: 'tr3-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr3-5-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Droft sammenhengen mellom type dopingmiddel og type idrett. Hvorfor bruker utholdenhetsidretter og styrke-/kraftidretter typisk ulike dopingmidler?',
        solution: 'Valg av dopingmiddel henger direkte sammen med de fysiske kravene i idretten. Utholdenhetsidretter (sykling, langrenn, maraton) krever hoy aerob kapasitet, derfor dominerer EPO og blodtransfusjoner som oker oksygentransporten. Styrke- og kraftidretter (vektlofting, bryting, sprint) krever stor muskelmasse og eksplosiv kraft, derfor dominerer anabole steroider og veksthormon som oker proteinsyntese og muskelvekst. I lagidretter med varierte krav (fotball, håndball) kan begge typer forekomme. Stimulerende midler brukes på tvers av idretter for å oke fokus og våkenhet i konkurranse. Denne sammenhengen viser at doping er målrettet mot de spesifikke prestasjonsbestemmende faktorene i hver idrett.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr3-5-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr3-5-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Veksthormon (HGH) beskrives ofte som et dopingmiddel som er vanskelig å påvise. Forklar hvorfor, og droft hvilke metoder som brukes for å avdekke HGH-doping.',
        solution: 'HGH er vanskelig å påvise av flere grunner: 1) Syntetisk HGH er strukturelt identisk med naturlig HGH som kroppen selv produserer. 2) HGH har kort halveringstid i blodet (15-20 minutter), slik at nivåene raskt faller etter injeksjon. 3) HGH-nivået varierer naturlig gjennom døgnet og med trening, sovn og stress. Deteksjonsmetoder inkluderer: a) Isoformtesten — måler forholdet mellom ulike isoformer av HGH. Injeksjon av rekombinant HGH forskyver dette forholdet. Deteksjonsvinduet er imidlertid bare 24-48 timer. b) Biomarkortesten — måler biologiske markorer som IGF-1 og P-III-NP (prokollagen type III) som oker ved HGH-bruk. Disse markorene forblir forhoyede i 2-3 uker, noe som gir lengre deteksjonsvindu. c) Biologisk pass — overvåker endringer i utoverens hormonprofil over tid. Plutselige endringer kan indikere doping selv om selve stoffet ikke påvises direkte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.3: Helsekonsekvenser av doping
// ============================================================================

export const CHAPTER_TRENING_3_5_3: TextbookChapter = {
  id: 'trening-3-5-3',
  courseId: 'trening-3',
  chapterNumber: '5.3',
  title: 'Helsekonsekvenser av doping',
  description: 'Bivirkninger av dopingmidler, akutte og kroniske helseeffekter, og psykiske konsekvenser.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjore rede for de viktigste bivirkningene av vanlige dopingmidler',
    'forstå forskjellen mellom akutte og kroniske helseeffekter',
    'drøfte psykiske konsekvenser av dopingbruk',
  ],
  keyTerms: [],
  content: [
    {
      id: 'tr3-5-3-intro',
      type: 'text',
      content: `# Helsekonsekvenser av doping

Dopingmidler brukes for å forbedre prestasjoner, men de har også alvorlige bivirkninger som kan true utoverens helse på kort og lang sikt. Mange av bivirkningene er irreversible, og noen kan være livstruende. I dette kapittelet ser vi nærmere på de fysiske og psykiske helsekonsekvensene av de vanligste dopingmidlene.

Det er viktig å understreke at dopingbruk ofte skjer i doser som langt overstiger medisinsk anbefalt bruk, at stoffer ofte kombineres (såkalt «stacking»), og at bruken gjerne foregår uten medisinsk oppfolging. Alt dette oker risikoen for alvorlige bivirkninger.`,
    },
    {
      id: 'tr3-5-3-text-steroider-bivirk',
      type: 'text',
      title: 'Bivirkninger av anabole steroider',
      content: `Anabole steroider er den mest utbredte gruppen dopingmidler, og bivirkningene er omfattende og godt dokumenterte.

**Kardiovaskulære effekter:**
- Forhøyet blodtrykk
- Ugunstig kolesterolprofil (okt LDL, redusert HDL)
- Økt risiko for hjerteinfarkt og hjerneslag
- Forstørrelse av hjertemuskelen (kardiomegali) som kan svekke hjertets pumpefunksjon
- Økt risiko for plutselig hjertedod

**Leverskader:**
- Oral inntak av anabole steroider er særlig belastende for leveren
- Kan føre til leverbetennelse, leversvulster og leversvikt
- Kolestase (opphopning av galle) med gulsott

**Hormonelle forstyrrelser:**
- Hos menn: redusert testosteronproduksjon, testikkelatrofi (krymping av testiklene), nedsatt sædkvalitet, infertilitet, utvikling av brystvevsforstørrelse (gynekomasti)
- Hos kvinner: dypere stemme, okt kroppsbehåring, menstruasjonsforstyrrelser, forstorret klitoris, mannlig hårfestmønster (skallethet)
- Hos ungdom: for tidlig lukking av vekstsonene i skjelettet, som kan gi permanent redusert kroppshøyde`,
    },
    {
      id: 'tr3-5-3-text-psykiske',
      type: 'text',
      title: 'Psykiske bivirkninger',
      content: `Dopingmidler påvirker ikke bare kroppen, men også hjernen og psyken.

**Anabole steroider:**
- «Roid rage» — ukontrollerte aggresjonsutbrudd og voldelig atferd
- Humørsvingninger, irritabilitet og emosjonell ustabilitet
- Depresjon, særlig ved seponering (avslutning av bruk)
- Angst og paranoia
- Avhengighet — studier viser at 30 % av brukere utvikler avhengighet

**Stimulerende midler:**
- Søvnproblemer og rastloshet
- Angst, paranoia og psykose ved hoye doser
- Avhengighet med sterke abstinenser

**Generelle psykiske konsekvenser:**
- Hemmeligholdelse og isolasjon fra venner og familie
- Kroppsmisnøye og dysmorfisk lidelse (forvreng kroppsbilde)
- Skam og skyldfølelse ved juks
- Frykt for å bli avslørt
- Depresjon og identitetskrise ved utestengelse fra idrett`,
    },
    {
      id: 'tr3-5-3-def-langtidseffekter',
      type: 'definition',
      title: 'Langtidseffekter',
      content: `Langtidseffekter er helsekonsekvenser som utvikler seg over tid og som kan vedvare eller forverres etter at dopingbruken er avsluttet. Mange langtidseffekter er irreversible og kan forkorte levetiden. Eksempler inkluderer hjertesykdom, leversvikt, hormonelle forstyrrelser og psykiske lidelser.`,
    },
    {
      id: 'tr3-5-3-text-epo-risiko',
      type: 'text',
      title: 'Helserisiko ved EPO og bloddoping',
      content: `EPO og bloddoping oker antallet rode blodceller, men dette medforer alvorlige helserisikoer:

**Akutte risikoer:**
- Økt blodviskositet (tykkere blod) som gjor at hjertet må arbeide hardere
- Økt risiko for blodpropper (trombose) i blodårer, lunger og hjerne
- Risiko for hjerteinfarkt og hjerneslag, særlig under sovn når puls og blodtrykk er lavt
- Ved blodtransfusjon: risiko for infeksjoner, allergiske reaksjoner og blodtypeinkompabilitet

**Langtidseffekter:**
- Kronisk forhøyet blodtrykk
- Økt risiko for hjerte- og karsykdom
- Autoimmune reaksjoner der kroppen lager antistoffer mot eget EPO (PRCA — Pure Red Cell Aplasia)
- Jernmangel ved langvarig bruk

På 1990-tallet ble flere unge syklister funnet dode i sengen, sannsynligvis som følge av EPO-relaterte blodpropper. Disse dødsfallene var en viktig drivkraft bak opprettelsen av WADA.`,
    },
    {
      id: 'tr3-5-3-example-1',
      type: 'example',
      title: 'Eksempel: Birgit Dressel-saken',
      problem: `Den tyske sjukjemperen Birgit Dressel døde i 1987, bare 26 år gammel. Hva skjedde, og hva kan denne saken fortelle oss om helserisikoene ved doping?`,
      solution: `Birgit Dressel var en talentfull sjukjemper som kollapset under et løp og dode av multiorgansvikt. En etterforskning avdekket at hun over tid hadde brukt et enormt antall ulike medikamenter og dopingmidler — anslagene varierer mellom 100 og 400 ulike preparater. Kroppen hennes reagerte med en alvorlig allergisk reaksjon (anafylaktisk sjokk) som utloste sammenbrudd av flere organsystemer.

Saken illustrerer flere sentrale poenger: 1) Kombinasjonsbruk (stacking) av mange ulike stoffer oker risikoen dramatisk fordi interaksjoner mellom stoffene er uforutsigbare. 2) Dopingbruk foregår ofte uten tilstrekkelig medisinsk overvåking. 3) Selv unge, tilsynelatende friske utovere kan dø av dopingrelaterte komplikasjoner. 4) Miljøet rundt utoveren (trenere, leger, forbund) har et medansvar for å beskytte utovernes helse.`,
    },
    {
      id: 'tr3-5-3-note-ungdom',
      type: 'note',
      title: 'Doping og ungdom',
      content: `Dopingbruk blant ungdom er særlig bekymringsfullt fordi kroppen er i vekst og utvikling. Anabole steroider kan føre til permanent redusert kroppshøyde ved å lukke vekstsonene i skjelettet for tidlig. Hormonelle forstyrrelser kan påvirke pubertetsutviklingen, og den umodne hjernen er mer sårbar for psykiske bivirkninger som aggresjon og depresjon. Studier viser at dopingbruk blant norsk ungdom utenfor organisert idrett er mer utbredt enn mange tror.`,
    },
    {
      id: 'tr3-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr3-5-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken kardiovaskulær bivirkning er mest typisk ved bruk av anabole steroider?',
        options: [
          { id: 'a', text: 'Ugunstig kolesterolprofil med okt LDL og redusert HDL', isCorrect: true },
          { id: 'b', text: 'Lavt blodtrykk og svimmelhet', isCorrect: false },
          { id: 'c', text: 'Redusert hjertefrekvens i hvile', isCorrect: false },
          { id: 'd', text: 'Bedre blodsirkulasjon i kapillærene', isCorrect: false },
        ],
        solution: 'Anabole steroider gir en ugunstig kolesterolprofil ved å oke LDL (det dårlige kolesterolet) og redusere HDL (det gode kolesterolet). Dette oker risikoen for åreforkalkning, hjerteinfarkt og hjerneslag.',
      },
    },
    {
      id: 'tr3-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr3-5-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den farligste akutte helserisikoen ved EPO-bruk?',
        options: [
          { id: 'a', text: 'Okt blodviskositet som gir risiko for blodpropper, hjerteinfarkt og hjerneslag', isCorrect: true },
          { id: 'b', text: 'Akutt lever- og nyresvikt', isCorrect: false },
          { id: 'c', text: 'Alvorlige allergiske reaksjoner i huden', isCorrect: false },
          { id: 'd', text: 'Plutselig tap av muskelmasse', isCorrect: false },
        ],
        solution: 'EPO oker antallet rode blodceller, noe som gjor blodet tykkere (okt viskositet). Tykkere blod strommer langsommere og har okt risiko for å danne blodpropper. Disse blodproppene kan blokkere blodårer i hjertet (hjerteinfarkt), hjernen (hjerneslag) eller lungene (lungeemboli), noe som kan være dødelig.',
      },
    },
    {
      id: 'tr3-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr3-5-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjor rede for de hormonelle bivirkningene av anabole steroider hos menn og kvinner. Forklar hvorfor noen av disse effektene er irreversible.',
        solution: 'Hos menn: Kroppen registrerer forhoyede nivåer av androgener og reduserer egen testosteronproduksjon (negativ tilbakekobling). Dette forer til testikkelatrofi (krymping av testiklene), nedsatt sædkvalitet og infertilitet. I tillegg kan overskudd av testosteron omdannes til ostrogen, noe som kan gi gynekomasti (brystvevsforstørrelse hos menn). De fleste av disse effektene er reversible ved seponering, men langvarig bruk kan gi permanent infertilitet. Hos kvinner: Testosteron gir maskuliniserende effekter som dypere stemme (irreversibel fordi stemmebåndene forandres strukturelt), okt kroppsbehåring, forstorret klitoris (irreversibel vekst) og mannlig hårfestmønster. Menstruasjonsforstyrrelser er vanlig. Noen av disse effektene er irreversible fordi de involverer strukturelle endringer i vev som ikke tilbakestilles selv når hormonpåvirkningen opphorer.',
        hints: ['Tenk på negativ tilbakekobling i hormonsystemet'],
      },
    },
    {
      id: 'tr3-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr3-5-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva «roid rage» er. Droft om det er riktig å bruke dette begrepet, og hvilke psykiske bivirkninger anabole steroider faktisk kan gi.',
        solution: '«Roid rage» er et populært uttrykk for ukontrollerte aggresjonsutbrudd knyttet til bruk av anabole steroider. Forskning viser at anabole steroider kan oke aggressivitet, irritabilitet og emosjonell ustabilitet hos noen brukere, men bildet er mer nyansert enn det populære uttrykket antyder. Ikke alle brukere opplever aggresjon, og personlighetsforutsetninger og doser spiller inn. Andre psykiske bivirkninger som er vel så viktige inkluderer depresjon (særlig ved seponering), angst, humørsvingninger, paranoia og avhengighet. Omtrent 30 % av brukere utvikler avhengighet. Begrepet «roid rage» kan derfor være misvisende fordi det fokuserer på kun en bivirkning og forenkler et sammensatt bilde av psykiske helseeffekter.',
        hints: ['Vurder om begrepet gir et balansert bilde av de psykiske bivirkningene'],
      },
    },
    {
      id: 'tr3-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr3-5-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Droft hvorfor helsekonsekvensene av doping ofte er dårlig dokumentert i vitenskapelig forskning. Hvilke metodiske utfordringer finnes?',
        solution: 'Det er flere metodiske utfordringer: 1) Etikk — det er uetisk å gjennomfore kontrollerte studier der man gir friske mennesker dopingmidler i de dosene som faktisk brukes. 2) Doser — dosene i dopingsammenheng er ofte 10-100 ganger hoyere enn medisinsk bruk, og vi har begrenset forskningsdata på slike doser. 3) Kombinasjonsbruk — dopingbrukere kombinerer ofte flere stoffer (stacking), og interaksjonene mellom stoffene er dårlig studert. 4) Hemmeligholdelse — brukere skjuler bruken, noe som gjor epidemiologisk forskning vanskelig. 5) Seleksjonsbias — de som melder seg til studier er kanskje ikke representative. 6) Langvarig oppfolging — det tar tiår å dokumentere langtidseffekter, og mange brukere faller ut av oppfølgingen. 7) Retrospektive data — mye av kunnskapen kommer fra kasuistikker og retrospektive studier, som har lavere evidensstyrke enn randomiserte kontrollerte studier. Disse utfordringene betyr at vi sannsynligvis underestimerer de reelle helsekonsekvensene av doping.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr3-5-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr3-5-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En 18-åring vurderer å bruke anabole steroider for å få raskere resultater på treningssenteret. Skriv en faglig begrunnet tekst der du gjor rede for de viktigste helserisikoene dette medforer, med særlig vekt på konsekvenser for unge kropper.',
        solution: 'Bruk av anabole steroider i 18-årsalderen er særlig risikabelt av flere grunner. For det forste er skjelettet fortsatt i vekst, og anabole steroider kan føre til for tidlig lukking av vekstsonene (epifyseskivene), noe som gir permanent redusert kroppshøyde. For det andre er hormonsystemet i en sensitiv utviklingsfase, og tilforsel av ytre androgener kan forstyrre den naturlige hormonbalansen varig. Testikkelfunksjonen kan bli skadet med risiko for infertilitet. Hjernen er ikke ferdig utviklet for alderen av 25, og anabole steroider kan oke risikoen for aggresjon, depresjon og avhengighet i en sårbar periode. Kardiovaskulært vil steroider oke kolesterol og blodtrykk, noe som setter grunnlaget for hjerte- og karsykdom allerede i ung alder. Psykisk kan avhengighet utvikle seg raskt, og kroppsmisnøye kan forverres til muskulær dysmorfisk lidelse. Til slutt er det viktig å understreke at resultatene fra trening i denne alderen er svært gode uten dopingmidler — den naturlige hormonproduksjonen er høy, og muskler responderer godt på riktig trening og ernæring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.4: Antidopingarbeid
// ============================================================================

export const CHAPTER_TRENING_3_5_4: TextbookChapter = {
  id: 'trening-3-5-4',
  courseId: 'trening-3',
  chapterNumber: '5.4',
  title: 'Antidopingarbeid',
  description: 'WADA, Antidoping Norge, dopingkontroll, biologisk pass, TUE og forebyggende arbeid.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjore rede for organisering av antidopingarbeidet nasjonalt og internasjonalt',
    'forklare hvordan dopingkontroll gjennomfores og hvilke metoder som brukes',
    'forstå ordningen med medisinsk fritak (TUE) og det biologiske passet',
  ],
  keyTerms: [],
  content: [
    {
      id: 'tr3-5-4-intro',
      type: 'text',
      content: `# Antidopingarbeid

Kampen mot doping i idretten er organisert på flere nivåer — internasjonalt, nasjonalt og lokalt. Et effektivt antidopingarbeid krever samarbeid mellom idrettsorganisasjoner, offentlige myndigheter, laboratorier og utoverne selv. I dette kapittelet ser vi på hvordan antidopingarbeidet er organisert, hvordan dopingkontroller gjennomfores, og hvilke verktoy som brukes for å avdekke og forebygge doping.`,
    },
    {
      id: 'tr3-5-4-text-organisering',
      type: 'text',
      title: 'Organisering av antidopingarbeidet',
      content: `**Internasjonalt nivå:**
- **WADA** — Utvikler regelverk, koordinerer forskning, og akk rediterer laboratorier
- **IOC** (Den internasjonale olympiske komite) — Ansvarlig for dopingkontroll under OL
- **Internasjonale særforbund** — Gjennomforer dopingkontroller i sine idretter
- **CAS** (Court of Arbitration for Sport) — Behandler ankesaker i dopingsaker

**Nasjonalt nivå i Norge:**
- **Antidoping Norge (ADNO)** — Stiftelse opprettet i 2003 som Norges nasjonale antidopingorganisasjon
- Uavhengig av Norges idrettsforbund for å sikre objektivitet
- Gjennomforer ca. 3000 dopingkontroller årlig i norsk idrett
- Driver forebyggende arbeid, informasjonskampanjer og utdanning
- Samarbeider med tollvesenet og politiet om illegal import av dopingmidler
- Administrerer dopingkontroll også utenfor organisert idrett (treningssenterdoping)`,
    },
    {
      id: 'tr3-5-4-def-dopingkontroll',
      type: 'definition',
      title: 'Dopingkontroll',
      content: `En dopingkontroll er en prosedyre der en utover avgir en biologisk prove (urin og/eller blod) som analyseres for forbudte stoffer og metoder. Kontrollene kan gjennomfores i konkurranse (rett etter en konkurranse) eller utenfor konkurranse (når som helst og hvor som helst, uten forvarsel). Utovere på høyeste nivå er underlagt meldeplikt og kan testes uten forvarsel.`,
    },
    {
      id: 'tr3-5-4-text-kontrollprosess',
      type: 'text',
      title: 'Gjennomforing av en dopingkontroll',
      content: `En dopingkontroll følger en streng prosedyre for å sikre at proven er gyldig og ikke manipulert:

**1. Varsling**
- Utoveren varsles av en dopingkontrollor (DCO) som identifiserer seg
- Utoveren skal følges av en kontrollor fra varsling til proven er avlagt
- Utoveren har rett til en representant (f.eks. trener eller lege)

**2. Provegivning**
- Utoveren velger selv sitt utstyr (proveglass, beger) fra forseglede pakker
- Urinprove: Utoveren avgir minst 90 ml urin under direkte observasjon
- Blodprove: Tas av autorisert personell

**3. Provesikring**
- Urinen fordeles i en A-prove og en B-prove
- Provene forsegles med et nummerert lokkesystem som utoveren selv kontrollerer
- All informasjon registreres på et kontrollskjema som utoveren signerer

**4. Analyse**
- Provene sendes til et WADA-akkreditert laboratorium
- A-proven analyseres forst
- Ved positivt funn kan utoveren kreve at B-proven analyseres
- Laboratoriets anonyme rapportering sikrer uavhengighet

**5. Resultatbehandling**
- Ved positivt funn varsles utoveren og den relevante antidopingorganisasjonen
- Utoveren har rett til å forklare seg og kan anke avgjørelser til CAS`,
    },
    {
      id: 'tr3-5-4-def-biologisk-pass',
      type: 'definition',
      title: 'Det biologiske passet (Athlete Biological Passport)',
      content: `Det biologiske passet er et individuelt elektronisk dokument som registrerer utoverens biologiske markorer over tid. Ved å overvåke naturlige svingninger i blodverdier (hematologisk modul) og hormonprofil (steroidmodul), kan unormale endringer som tyder på doping oppdages — selv om det spesifikke dopingmiddelet ikke påvises direkte. Det biologiske passet ble innfort av WADA i 2009.`,
    },
    {
      id: 'tr3-5-4-text-biologisk-pass',
      type: 'text',
      title: 'Hvordan det biologiske passet fungerer',
      content: `Det biologiske passet har to hovedmoduler:

**Hematologisk modul (blodprofil):**
- Overvåker hemoglobin, hematokrit, retikulocytter og andre blodmarkorer
- Etablerer et individuelt normalområde for hver utover
- Bruk av EPO eller blodtransfusjon gir avvikende mønstre
- F.eks. vil EPO-bruk forst oke retikulocytter, deretter hemoglobin, og til slutt falle retikulocyttene under normalnivå

**Steroidmodul (hormonprofil):**
- Overvåker forholdet mellom testosteron og epitestosteron (T/E-ratio)
- Normalt T/E-forhold er ca. 1:1, men varierer individuelt
- Tilforsel av syntetisk testosteron forskyver forholdet
- Individuelle grenser gjor det vanskelig å bruke «mikrodosering» for å unngå deteksjon

Fordelen med det biologiske passet er at det kan avdekke doping indirekte, uten å påvise et spesifikt stoff. Det gjor det vanskeligere for utovere å dosere presist nok til å unngå oppdagelse.`,
    },
    {
      id: 'tr3-5-4-def-tue',
      type: 'definition',
      title: 'TUE — Therapeutic Use Exemption (Medisinsk fritak)',
      content: `TUE er en medisinsk fritaksordning som gjor det mulig for utovere å bruke forbudte stoffer eller metoder dersom det foreligger en dokumentert medisinsk nødvendighet. For å få innvilget TUE må utoveren dokumentere en diagnose, vise at det ikke finnes tillatte alternativer, og at bruken ikke gir prestasjonsfordeler utover normal helsetilstand. Søknaden vurderes av et uavhengig medisinsk panel.`,
    },
    {
      id: 'tr3-5-4-text-forebygging',
      type: 'text',
      title: 'Forebyggende antidopingarbeid',
      content: `Antidopingarbeid handler ikke bare om å avdekke dopingbruk, men like mye om å forebygge det.

**Utdanning og informasjon:**
- Antidoping Norge driver «Ren utover»-programmet for unge utovere
- Informasjon om regelverk, helserisikoer og verdivalg
- E-læringskurs og foredrag for utovere, trenere og foreldre

**Holdningsskapende arbeid:**
- Fokus på idrettens verdier: fair play, helse og glede
- Rollemodeller som fremmer ren idrett
- Åpen diskusjon om press og forventninger i toppidrett

**Samarbeid med treningssentre:**
- Treningssentre kan sertifiseres som «Rent senter» gjennom Antidoping Norge
- Dopingkontroller gjennomfores også på treningssentre
- Informasjon og forebygging rettet mot mosjonister og treningssenter-brukere

**Internasjonal koordinering:**
- Deling av etterretningsinformasjon mellom land
- Samarbeid mellom antidopingorganisasjoner, toll og politi
- Oppfølging av produksjons- og distribusjonskjeder for dopingmidler`,
    },
    {
      id: 'tr3-5-4-example-1',
      type: 'example',
      title: 'Eksempel: Whereabouts-systemet',
      problem: `Toppidrettsutovere er underlagt et system kalt «whereabouts» (meldeplikt). Hva innebærer dette systemet, og hvorfor er det nødvendig?`,
      solution: `Whereabouts-systemet krever at utovere i den registrerte testgruppen (RTP) kvartalsvis oppgir detaljert informasjon om hvor de befinner seg, inkludert: bosted, treningssted, reiseplaner og en «60-minuttersregel» — en time hver dag der de garantert er tilgjengelige for uanmeldt testing på et oppgitt sted.

Systemet er nødvendig fordi: 1) Det muliggjor effektiv utenfor-konkurranse-testing, som er avgjørende for å avdekke stoffer som brukes i treningsperioder (f.eks. anabole steroider og EPO). 2) Uten whereabouts ville utovere kunne planlegge dopingbruk rundt kjente testtidspunkter. 3) Tre brudd på meldeplikten innen 12 måneder kan gi utestengelse.

Systemet er omdiskutert fordi det innebærer en betydelig inngripen i utovernes privatliv. Utovere opplever det som belastende å rapportere sin posisjon daglig, og systemet har blitt kritisert for å gå for langt i overvåkingen av individet.`,
    },
    {
      id: 'tr3-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr3-5-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er Antidoping Norges hovedoppgave?',
        options: [
          { id: 'a', text: 'Gjennomfore dopingkontroller og drive forebyggende arbeid mot doping i Norge', isCorrect: true },
          { id: 'b', text: 'Utvikle nye treningsmetoder for norske idrettsutovere', isCorrect: false },
          { id: 'c', text: 'Produsere lovlige kosttilskudd for idrettsutovere', isCorrect: false },
          { id: 'd', text: 'Behandle utovere som har blitt syke av dopingbruk', isCorrect: false },
        ],
        solution: 'Antidoping Norge (ADNO) er Norges nasjonale antidopingorganisasjon, opprettet i 2003. Deres hovedoppgaver er å gjennomfore dopingkontroller i norsk idrett (ca. 3000 årlig), drive forebyggende arbeid og informasjonskampanjer, og samarbeide med myndigheter om illegal import av dopingmidler.',
      },
    },
    {
      id: 'tr3-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr3-5-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er formålet med det biologiske passet?',
        options: [
          { id: 'a', text: 'Å overvåke utoverens biologiske markorer over tid for å avdekke unormale endringer som tyder på doping', isCorrect: true },
          { id: 'b', text: 'Å registrere utoverens treningsbelastning og restitusjon', isCorrect: false },
          { id: 'c', text: 'Å lagre utoverens medisinske journal elektronisk', isCorrect: false },
          { id: 'd', text: 'Å bekrefte utoverens identitet under dopingkontroll', isCorrect: false },
        ],
        solution: 'Det biologiske passet registrerer utoverens blodverdier og hormonprofil over tid, og etablerer et individuelt normalområde. Unormale avvik fra dette området kan tyde på doping, selv om det spesifikke stoffet ikke påvises direkte.',
      },
    },
    {
      id: 'tr3-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr3-5-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv trinnene i en dopingkontroll fra varsling til resultatbehandling. Forklar hvorfor prosedyren er så streng.',
        solution: 'Trinnene er: 1) Varsling — utoveren varsles av en DCO og folges deretter kontinuerlig. 2) Provegivning — utoveren velger forseglede proveglass og avgir minst 90 ml urin under observasjon eller blodprove. 3) Provesikring — urinen fordeles i A- og B-prove i nummererte, forseglede beholdere. 4) Analyse — provene sendes til WADA-akkreditert lab, der A-proven analyseres. 5) Resultatbehandling — ved positivt funn varsles utoveren, som kan kreve B-prove-analyse og har ankerett. Prosedyren er streng for å sikre at proven er autentisk (ikke manipulert eller byttet ut), at resultatene er pålitelige (akkreditert lab, A/B-system), og at utoverens rettigheter ivaretas (signering, representant, ankerett). Eventuelle feil i prosedyren kan gjore at saken forkastes.',
        hints: ['Tenk på rettssikkerhet og beviskjede'],
      },
    },
    {
      id: 'tr3-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr3-5-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva TUE (Therapeutic Use Exemption) er og hvilke vilkår som må være oppfylt for å få medisinsk fritak.',
        solution: 'TUE er en medisinsk fritaksordning som tillater utovere å bruke forbudte stoffer eller metoder dersom det foreligger medisinsk nødvendighet. Vilkårene er: 1) Utoveren må ha en dokumentert diagnose stilt av kvalifisert lege. 2) Det må ikke finnes tillatte behandlingsalternativer. 3) Bruken av det forbudte stoffet skal ikke gi prestasjonsfordeler utover det som trengs for å gjenopprette normal helsetilstand. 4) Nødvendigheten av å bruke det forbudte stoffet er ikke en konsekvens av tidligere bruk av forbudte stoffer. Søknaden vurderes av et uavhengig medisinsk panel (TUE-komite). Eksempler inkluderer astmamedisin (visse beta-2-agonister), ADHD-medisiner (stimulerende midler) og insulin for diabetikere.',
        hints: ['Tenk på utovere med kroniske sykdommer som krever medisinering'],
      },
    },
    {
      id: 'tr3-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr3-5-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Droft whereabouts-systemet fra to perspektiver: antidopingarbeidets behov og utoverens rett til privatliv. Er systemet rettferdig?',
        solution: 'Fra antidopingens perspektiv er whereabouts-systemet nødvendig fordi: uanmeldt testing utenfor konkurranse er det mest effektive virkemiddelet mot doping. Mange dopingmidler (f.eks. anabole steroider, EPO) brukes i treningsperioder og kan ikke avdekkes i konkurransetester alene. Uten meldeplikt ville utovere kunne planlegge dopingbruk rundt forutsigbare testtidspunkter. Fra utoverens perspektiv innebærer systemet en betydelig inngripen i privatlivet. Utovere må rapportere daglig hvor de er, inkludert under ferie og fritid. Systemet skaper stress og kan føles som overvåking. Tre brudd innen 12 måneder kan gi utestengelse, noe som føles uforholdsmessig for administrative feil. Vurdering av rettferdighet: Systemet kan forsvares fordi toppidrettsutovere frivillig velger å konkurrere under disse reglene, og systemet beskytter rene utoveres rett til rettferdig konkurranse. Samtidig er det rimelig å forbedre systemet, f.eks. gjennom smartere teknologibruk, kortere rapporteringsvindu og bedre personvernhåndtering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr3-5-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr3-5-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar hvordan det biologiske passet kan avdekke EPO-doping, selv uten å påvise EPO direkte. Beskriv hvilke blodverdier som endres og hvilket mønster man ser.',
        solution: 'Det biologiske passets hematologiske modul overvåker blodmarkorer over tid. Ved EPO-bruk ser man folgende mønster: 1) Under EPO-bruk: Retikulocytter (umodne rode blodceller) oker forst kraftig fordi benmargen stimuleres til okt produksjon. Deretter oker hemoglobin og hematokrit ettersom de nye blodcellene modnes. 2) Etter seponering av EPO: Retikulocyttene faller raskt til under normalnivå fordi den naturlige EPO-produksjonen er undertrykt av negativ tilbakekobling. Hemoglobin forblir forhøyet en stund, men synker gradvis. 3) Avvikende mønster: Det biologiske passet sammenligner aktuelle verdier med utoverens individuelle normalområde. En kombinasjon av forhøyet hemoglobin og unormalt lave retikulocytter er et klassisk tegn på nylig avsluttet EPO-bruk. Fordelen er at man ikke trenger å påvise selve EPO-molekylet, som har kort deteksjonsvindu. Det biologiske passet kan avdekke effektene av EPO i uker etter at stoffet er ute av kroppen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.5: Etikk og doping
// ============================================================================

export const CHAPTER_TRENING_3_5_5: TextbookChapter = {
  id: 'trening-3-5-5',
  courseId: 'trening-3',
  chapterNumber: '5.5',
  title: 'Etikk og doping',
  description: 'Fair play, etiske dilemmaer, gråsoner i antidoping, kosttilskudd og utoveransvar.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drøfte dopingproblematikken i et etisk perspektiv med vekt på fair play',
    'vurdere gråsoner i antidopingregelverket, inkludert bruk av kosttilskudd',
    'gjore rede for utoveransvaret og hvilke etiske forpliktelser som folger med idretts deltakelse',
  ],
  keyTerms: [],
  content: [
    {
      id: 'tr3-5-5-intro',
      type: 'text',
      content: `# Etikk og doping

Doping i idrett handler ikke bare om regelverk og helse — det er i bunn og grunn et etisk spørsmål. Doping berorer grunnleggende verdier som rettferdighet, ærlighet og respekt. I dette kapittelet undersøker vi de etiske sidene ved dopingproblematikken, inkludert fair play, gråsoner i regelverket, utfordringer knyttet til kosttilskudd og det individuelle ansvaret hver utover har.`,
    },
    {
      id: 'tr3-5-5-def-fairplay',
      type: 'definition',
      title: 'Fair play',
      content: `Fair play (rettferdig spill) er et grunnleggende prinsipp i idrett som innebærer at alle utovere konkurrerer på like vilkår og etter de samme reglene. Doping bryter med fair play fordi det gir en kunstig fordel som ikke er tilgjengelig for alle, og fordi det skjer i det skjulte og undergraver tilliten mellom utovere.`,
    },
    {
      id: 'tr3-5-5-text-etiske-argumenter',
      type: 'text',
      title: 'Etiske argumenter mot doping',
      content: `Det finnes flere etiske argumenter mot doping i idretten:

**1. Rettferdighetsargumentet**
Doping gir en urettferdig fordel. Når noen utovere doper seg og andre ikke, konkurrerer de ikke lenger på like vilkår. Prestasjonene gjenspeiler ikke lenger talent, innsats og god trening, men tilgang til dopingmidler og vilje til å jukse.

**2. Helseargumentet**
Dopingmidler har alvorlige helsekonsekvenser. Å tillate doping ville sette utoveres helse i fare og skape et press der utovere føler seg tvunget til å dope seg for å kunne konkurrere. Det ville være uetisk å skape et system som tvinger utovere til å skade sin egen helse.

**3. Rollemodellargumentet**
Toppidrettsutovere er forbilder for barn og unge. Doping sender et signal om at juks lønner seg, og at det er akseptabelt å ta snarveier for å oppnå suksess.

**4. Idrettens egenverdi**
Idretten har en egenverdi som handler om menneskelig utvikling, mestring og fellesskap. Doping reduserer idretten til et spørsmål om hvem som har den beste kjemien, ikke den beste innsatsen og talentet.

**5. Tillitsargumentet**
Idretten er avhengig av tillit — mellom utovere, mellom utovere og publikum, og mellom utovere og sponsorer. Doping undergraver denne tilliten og kan skade hele idrettens omdømme.`,
    },
    {
      id: 'tr3-5-5-text-grasoner',
      type: 'text',
      title: 'Gråsoner og etiske dilemmaer',
      content: `Selv om doping er klart definert i regelverket, finnes det mange gråsoner som reiser etiske spørsmål:

**Høydetrening og høydehus:**
Trening i høyden eller bruk av høydehus stimulerer kroppens egen EPO-produksjon og oker hemoglobinnivået — den samme effekten som EPO-doping gir. Likevel er dette lovlig. Er det etisk forsvarlig at utovere med tilgang til dyre høydehus har en fordel?

**Utstyrsteknologi:**
Avansert utstyr (supersko, spesialdrakter, aerodynamiske hjul) kan gi store prestasjonsfordeler. Grensen mellom lovlig teknologisk fordel og urettferdig fordel er uklar.

**Medisinsk bruk og TUE:**
Er det rettferdig at noen utovere kan bruke ellers forbudte stoffer gjennom TUE? Kan TUE-systemet misbrukes?

**Kosttilskudd:**
Mange kosttilskudd befinner seg i en etisk gråsone — de er lovlige, men noen er designet for å gi effekter som ligner dopingmidler. Hvor går grensen?

**Gendoping i fremtiden:**
Hvis genredigering en dag kan forbedre prestasjon permanent og usynlig, hvordan skal vi forholde oss til det?`,
    },
    {
      id: 'tr3-5-5-text-kosttilskudd',
      type: 'text',
      title: 'Kosttilskudd og dopingrisiko',
      content: `Kosttilskudd representerer et betydelig gråsoneområde i antidopingarbeidet.

**Utbredelse:**
- Mange utovere bruker kosttilskudd som proteinpulver, kreatin, koffein og vitaminer
- Bruk er lovlig, men det er viktig å velge produkter med omhu
- Studier viser at 10-25 % av kosttilskudd inneholder stoffer som ikke er deklarert på etiketten

**Kontamineringsrisiko:**
- Noen kosttilskudd inneholder forbudte stoffer som anabole steroider, stimulerende midler eller prohormoner uten at dette står på innholdsdeklarasjonen
- Krysskontaminering kan skje under produksjon
- Uregulert produksjon i noen land gir hoy risiko
- Et positivt dopingfunn grunnet forurenset kosttilskudd fritar IKKE utoveren for ansvar (strengt objektivt ansvar)

**Forebyggende tiltak:**
- Bruk kun produkter med tredjepartssertifisering (f.eks. Informed Sport eller NSF Certified for Sport)
- Konsulter idrettslege eller ernaeringsrådgiver
- Sjekk Antidoping Norges Medisinsok
- Vær skeptisk til produkter som lover «dramatiske resultater»
- Husk at god ernæring fra vanlig mat dekker de fleste behov`,
    },
    {
      id: 'tr3-5-5-def-utoeveransvar',
      type: 'definition',
      title: 'Utoveransvar',
      content: `Utoveransvar innebærer at hver idrettsutover har et personlig ansvar for å holde seg oppdatert på antidopingreglene, sikre at alt som inntas er fritt for forbudte stoffer, oppfylle meldeplikten dersom det er påkrevd, og opptre som et positivt forbilde for ren idrett. Ansvaret er ikke begrenset til å unngå bevisst dopingbruk, men inkluderer også plikt til å ta rimelige forholdsregler.`,
    },
    {
      id: 'tr3-5-5-text-press',
      type: 'text',
      title: 'Press og dopingkultur',
      content: `For å forstå hvorfor utovere velger å dope seg, er det viktig å se på presset de utsettes for:

**Prestsjonspress:**
- Forventninger fra trenere, forbund, sponsorer og medier
- Okonomisk press — sponsorinntekter avhenger av resultater
- Frykt for å miste plassen på laget eller støtte

**Dopingkultur:**
- I noen miljøer har doping vært normalisert over tid
- «Alle andre gjor det» — opplevelsen av at man må dope seg for å konkurrere
- Press fra lagkamerater eller stotte-apparat

**Miljøets ansvar:**
- Trenere, ledere og medisinsk personell har et ansvar for å motvirke dopingkultur
- Forbund må skape en kultur der ren idrett verdsettes
- Varslere (whistleblowers) spiller en viktig rolle, men trenger beskyttelse

Det er viktig å forstå disse faktorene uten å bruke dem som unnskyldning. Utoveren har alltid et personlig valg og et personlig ansvar. Samtidig har miljøet rundt utoveren et medansvar for å skape rammer som gjor det lettere å velge ren idrett.`,
    },
    {
      id: 'tr3-5-5-example-1',
      type: 'example',
      title: 'Eksempel: Etisk dilemma — høydehus',
      problem: `En langrennsutover bruker et høydehus hjemme for å simulere opphold i høyden. Dette stimulerer kroppens naturlige EPO-produksjon og oker antallet rode blodceller. Effekten ligner det man oppnår med EPO-doping. Er dette etisk forsvarlig?`,
      solution: `**Argumenter for at det er etisk forsvarlig:**
- Høydehus er lovlig ifølge WADAs regelverk
- Det stimulerer en naturlig fysiologisk respons, ikke en kunstig farmakologisk effekt
- Alle utovere har i prinsippet tilgang til å trene i høyden
- Effekten er beskjeden sammenlignet med EPO-injeksjoner

**Argumenter for at det er etisk problematisk:**
- Dyre høydehus er kun tilgjengelige for utovere med økonomiske ressurser
- Den fysiologiske effekten (okt hemoglobin) er den samme som ved EPO-bruk
- Det bidrar til et «teknologisk rustningskappløp» der de rikeste vinner
- Noen mener det strider mot idrettens ånd å bruke kunstige hjelpemidler for å endre kroppens fysiologi

**Konklusjon:** Dette er et genuint etisk dilemma uten enkelt svar. WADA har valgt å tillate høydehus, men debatten pågår. Det illustrerer at grensen mellom «akseptabel forberedelse» og «uakseptabel manipulering» ikke alltid er klar.`,
    },
    {
      id: 'tr3-5-5-note-1',
      type: 'note',
      title: 'Idrettens verdier',
      content: `WADA definerer «idrettens ånd» som summen av folgende verdier: etikk, fair play og ærlighet; helse; prestasjonsglede; karakter og utdanning; glede og moro; lagarbeid; engasjement og mot; respekt for regler og lover; respekt for seg selv og andre utovere; solidaritet. Disse verdiene utgjor det etiske fundamentet for kampen mot doping.`,
    },
    {
      id: 'tr3-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr3-5-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er det viktigste etiske argumentet mot doping?',
        options: [
          { id: 'a', text: 'Doping gir en urettferdig fordel og bryter med prinsippet om fair play', isCorrect: true },
          { id: 'b', text: 'Doping er dyrt og gjor at fattige utovere ikke kan konkurrere', isCorrect: false },
          { id: 'c', text: 'Doping gjor idretten kjedelig å se på for publikum', isCorrect: false },
          { id: 'd', text: 'Doping forer til at utovere trener mindre og blir late', isCorrect: false },
        ],
        solution: 'Det viktigste etiske argumentet mot doping er at det gir en urettferdig fordel og bryter med prinsippet om fair play. Når noen utovere doper seg, konkurrerer de ikke lenger på like vilkår med rene utovere. Prestasjonene gjenspeiler da ikke talent og innsats, men tilgang til dopingmidler.',
      },
    },
    {
      id: 'tr3-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr3-5-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvorfor er kosttilskudd en risiko i dopingsammenheng?',
        options: [
          { id: 'a', text: 'Noen kosttilskudd inneholder forbudte stoffer som ikke er deklarert på etiketten', isCorrect: true },
          { id: 'b', text: 'Alle kosttilskudd er forbudt ifølge WADAs dopingliste', isCorrect: false },
          { id: 'c', text: 'Kosttilskudd gjor at dopingmidler virker sterkere', isCorrect: false },
          { id: 'd', text: 'Antidoping Norge forbyr bruk av proteinpulver', isCorrect: false },
        ],
        solution: 'Studier viser at 10-25 % av kosttilskudd inneholder stoffer som ikke er deklarert på etiketten, inkludert forbudte stoffer som anabole steroider og stimulerende midler. Et positivt dopingfunn grunnet forurenset kosttilskudd fritar ikke utoveren for ansvar på grunn av strengt objektivt ansvar.',
      },
    },
    {
      id: 'tr3-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr3-5-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar begrepet fair play og droft hvorfor dette prinsippet er sentralt i argumentasjonen mot doping.',
        solution: 'Fair play betyr rettferdig spill og innebærer at alle utovere konkurrerer etter de samme reglene og på like vilkår. Prinsippet er sentralt i argumentasjonen mot doping fordi: 1) Doping gir en kunstig fordel som bryter med premisset om at prestasjoner skal gjenspeile naturlig talent, god trening og innsats. 2) Doping skjer i det skjulte, noe som bryter med ærlighets- og åpenhetsprinsippet i fair play. 3) Doping undergraver tilliten mellom utovere — rene utovere vet ikke om de konkurrerer mot dopede motstandere. 4) Fair play handler også om respekt for konkurrentene — doping er respektløst overfor utovere som velger å konkurrere rent. Uten fair play mister idretten sin mening og legitimitet som arena for menneskelig utvikling og rettferdig kamp.',
        hints: ['Koble fair play til de grunnleggende verdiene i idretten'],
      },
    },
    {
      id: 'tr3-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr3-5-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjor rede for minst tre tiltak en idrettsutover kan gjøre for å redusere risikoen for utilsiktet inntak av forbudte stoffer gjennom kosttilskudd.',
        solution: '1) Bruk kun kosttilskudd med tredjepartssertifisering som Informed Sport eller NSF Certified for Sport, der produktene er testet for forbudte stoffer. 2) Bruk Antidoping Norges Medisinsok for å sjekke ingredienser i produkter mot dopinglisten. 3) Konsulter idrettslege eller sertifisert ernæringsrådgiver for medisin og kosttilskudd. 4) Vær skeptisk til produkter som lover store eller raske resultater — slike produkter har storre sannsynlighet for å inneholde udeklarerte stoffer. 5) Velg produkter fra anerkjente produsenter i land med god regulering, og unngå produkter kjøpt fra uregulerte nettbutikker. 6) Vurder om kosttilskuddet i det hele tatt er nødvendig — et godt sammensatt kosthold dekker de fleste behov, og unødvendig bruk oker risikoen uten å gi reell nytte.',
        hints: ['Tenk på forebyggende tiltak, informasjonsinnhenting og risikovurdering'],
      },
    },
    {
      id: 'tr3-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr3-5-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Droft folgende påstand: «Dersom doping ble tillatt for alle, ville det skape like vilkår og dermed ikke være urettferdig.» Bruk etiske argumenter i droftingen.',
        solution: 'Påstanden bygger på ideen om at urettferdighet forsvinner dersom alle har samme tilgang. Argumenter som stotter påstanden: Alle ville konkurrere under like regler, og det ville eliminere problemet med hemmelig juks. Argumenter mot påstanden: 1) Helseargumentet — å tillate doping ville tvinge utovere til å skade sin egen helse for å konkurrere, noe som er etisk uforsvarlig. Ingen bor tvinges til å risikere livet for å drive idrett. 2) Ulik tilgang — selv med lovlig doping ville utovere fra rike land ha tilgang til bedre preparater, medisinsk oppfolging og dosering enn utovere fra fattigere land. 3) Rollemodellargumentet — å normalisere doping sender et farlig signal til samfunnet om at prestasjonsforbedring gjennom farmasøytiske midler er akseptabelt. 4) Idrettens egenverdi — doping reduserer idretten til farmakologisk konkurranse og fjerner det menneskelige elementet som gjor idrett meningsfull. 5) Samtykkeproblematikk — unge utovere kan ikke gi informert samtykke til helserisikoen. Konklusjon: Selv med fri tilgang ville doping ikke skape genuint like vilkår, og de etiske innvendingene knyttet til helse, rollemodell og idrettens verdi gjor at argumentet ikke holder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr3-5-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr3-5-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Droft utoverens individuelle ansvar opp mot miljøets ansvar i dopingproblematikken. Hvem har storst ansvar når en utover blir tatt for doping — utoveren selv, treneren, forbundet eller samfunnet?',
        solution: 'Utoverens ansvar: Utoveren har alltid et personlig ansvar for sine valg. Strengt objektivt ansvar plasserer det juridiske ansvaret hos utoveren. Ingen kan tvinge en voksen person til å ta dopingmidler. Trenerens ansvar: Treneren har stor innflytelse over utoverens valg og tilgang til midler. Trenere som aktivt bistår med doping har et tungt moralsk og juridisk ansvar. Forbundets ansvar: Forbund som skaper en resultatorientert kultur med enormt press, uten tilstrekkelige stottestrukturer, bidrar til å skape miljøer der doping kan blomstre. Manglende oppfolging og varslingssystemer er et systemproblem. Samfunnets ansvar: Samfunnet skaper forventninger gjennom medier, sponsorer og publikums krav om prestasjoner og rekorder. Kommersialisering av idrett oker det okonomiske presset. I praksis er ansvaret delt, men utoverens personlige ansvar kan ikke elimineres. Det mest effektive forebyggende arbeidet adresserer alle nivåer: individuell bevisstgjøring, trenerutdanning, forbundskultur og samfunnsholdninger. En helhetlig tilnærming anerkjenner at doping sjelden skjer i et vakuum, men at enkeltmenneskets etiske valg alltid er avgjørende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler i del 5
// ============================================================================

export const TRENING_3_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TRENING_3_5_1,
  CHAPTER_TRENING_3_5_2,
  CHAPTER_TRENING_3_5_3,
  CHAPTER_TRENING_3_5_4,
  CHAPTER_TRENING_3_5_5,
];
