/* eslint-disable */
// @ts-nocheck
/**
 * Treningslære 2 (VG3) - Del 4: Idrettsspesifikk trening
 * Seksjon 4: Kapittel 4.1-4.5
 * Følger LK20 læreplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 4.1: Behovsanalyse for idretter
// ============================================================================

export const CHAPTER_TRENING_2_4_1: TextbookChapter = {
  id: 'trening-2-4-1',
  courseId: 'trening-2',
  chapterNumber: '4.1',
  title: 'Behovsanalyse for idretter',
  description: 'Lær hvordan du gjennomforer en systematisk behovsanalyse for en idrett ved hjelp av bevegelsesanalyse, kartlegging av energisystemer og identifisering av sentrale muskelgrupper.',
  estimatedMinutes: 20,
  competenceGoals: [
    'kunne gjennomfore en behovsanalyse for en selvvalgt idrett',
    'forstå sammenhengen mellom bevegelsesanalyse, energisystemer og muskelgrupper i idrettsspesifikk trening',
  ],
  content: [
    {
      id: 'tr2-4-1-intro',
      type: 'text',
      content: `## Behovsanalyse for idretter

For å trene mest mulig effektivt for en bestemt idrett, er det avgjorende å forstå hva idretten faktisk krever av utoveren. En behovsanalyse er en systematisk gjennomgang av de fysiske, tekniske og taktiske kravene i en idrett. Resultatet av analysen danner grunnlaget for et skreddersydd treningsprogram.

En grundig behovsanalyse innebærer tre hovedelementer: bevegelsesanalyse, kartlegging av energisystemer og identifisering av sentrale muskelgrupper. Ved å kombinere disse tre elementene kan du bygge et treningsprogram som treffer de reelle kravene i idretten.`,
    },
    {
      id: 'tr2-4-1-def-1',
      type: 'definition',
      title: 'Behovsanalyse',
      content: `En behovsanalyse er en systematisk kartlegging av de fysiske kravene i en idrett eller aktivitet. Analysen skal svare på:

- **Hvilke bevegelser dominerer?** (bevegelsesanalyse)
- **Hvilke energisystemer brukes?** (metabolsk analyse)
- **Hvilke muskelgrupper belastes mest?** (muskulær analyse)
- **Hvilke fysiske egenskaper er viktigst?** (styrke, utholdenhet, hurtighet, bevegelighet)
- **Hvilke skader er vanligst?** (skadeforebygging)

Behovsanalysen er forste steg i utviklingen av et idrettsspesifikt treningsprogram.`,
    },
    {
      id: 'tr2-4-1-text-1',
      type: 'text',
      title: 'Bevegelsesanalyse',
      content: `**Bevegelsesanalyse** handler om å kartlegge de viktigste bevegelsene i en idrett. Dette innebærer å observere og dokumentere:

**Bevegelsesmonster:**
- Lineære bevegelser (loping, sykling, svomming)
- Laterale bevegelser (sidesteg, glidesteg)
- Rotasjoner (kast, slag, skudd)
- Akselerasjoner og deselerasjoner (retningsforandringer)
- Hopp og landinger (vertikale og horisontale)

**Leddvinkler og bevegelsesutslag:**
- Hvilke ledd beveger seg gjennom store utslag?
- Hvor i bevegelsen er kraftkravet storst?
- Finnes det spesifikke posisjoner som krever stor stabilitet?

**Bevegelseshastighet:**
- Er bevegelsene raske og eksplosive, eller langsomme og kontrollerte?
- Varierer tempoet gjennom aktiviteten?
- Hvor lang tid har utoveren til disposisjon for hver bevegelse?

Ved å kartlegge bevegelsesmonstrene kan du velge ovelser som etterlikner idrettens krav. Prinsippet om spesifisitet tilsier at treningen bor ligne mest mulig på det du trener til.`,
    },
    {
      id: 'tr2-4-1-text-2',
      type: 'text',
      title: 'Kartlegging av energisystemer',
      content: `**Energisystemanalyse** handler om å bestemme hvilke energisystemer som dominerer i idretten. De tre energisystemene bidrar i ulik grad avhengig av intensitet og varighet:

**Fosfagensystemet (ATP-CP):**
- Dominerer ved maksimal intensitet i 0-10 sekunder
- Viktig i: 100 m sprint, vektlofting, hopp, kast
- Treningskonsekvens: Korte, maksimale intervaller med full restitusjon

**Det anaerobe glykolytiske systemet (melkesyre):**
- Dominerer ved hoy intensitet i 10 sekunder til 2-3 minutter
- Viktig i: 400 m loping, 100 m svomming, bryting
- Treningskonsekvens: Intensive intervaller med ufullstendig restitusjon

**Det aerobe systemet:**
- Dominerer ved moderat til hoy intensitet over 2-3 minutter
- Viktig i: Langdistanseloping, sykling, langrenn, fotball (total belastning)
- Treningskonsekvens: Lang, sammenhengende trening eller lange intervaller

**Viktig:** De fleste idretter krever bidrag fra alle tre energisystemene. For eksempel bruker en fotballspiller det aerobe systemet som grunnlag, men er avhengig av det anaerobe systemet ved sprinter og kraftige aksjoner.`,
    },
    {
      id: 'tr2-4-1-def-2',
      type: 'definition',
      title: 'Energisystemenes arbeidstid',
      content: `Energisystemene bidrar i ulik grad avhengig av varigheten av aktiviteten:

| Varighet | Dominerende system | Eksempel |
|----------|-------------------|----------|
| 0-10 sek | Fosfagensystemet (ATP-CP) | Spensthopp, 100 m sprint |
| 10 sek - 2 min | Anaerob glykolyse | 400 m loping, kampsekvenser i bryting |
| 2-5 min | Aerob + anaerob | 1500 m loping, 200 m svomming |
| Over 5 min | Aerob | Maratonloping, langrenn, langdistansesykling |

Merk: Det er glidende overganger mellom systemene, og alle bidrar til en viss grad ved enhver aktivitet.`,
    },
    {
      id: 'tr2-4-1-text-3',
      type: 'text',
      title: 'Identifisering av sentrale muskelgrupper',
      content: `**Muskelanalysen** kartlegger hvilke muskler og muskelgrupper som er mest aktive i idretten:

**Primærmuskler (agonister):**
Musklene som utforer hovedbevegelsen. For eksempel er quadriceps og gluteus maximus primærmuskler i sprint og hopp.

**Stabilisatorer:**
Muskler som stabiliserer ledd og kroppsstamme under bevegelsen. Core-muskulaturen (mage, rygg, hoftemuskulatur) fungerer som stabilisator i nesten alle idretter.

**Antagonister:**
Muskler som arbeider motsatt av agonistene. Hamstrings fungerer som antagonist til quadriceps under kneekstensjon, men har en viktig rolle i deselerasjon og skadeforebygging.

**Metoder for muskelanalyse:**
- Videoanalyse av idrettsbevegelser
- EMG-studier (elektromyografi) som måler muskelaktivering
- Biomekamisk analyse av leddvinkler og kraftvektorer
- Observasjon av typiske skademonstre (indikerer overbelastede strukturer)

En grundig muskelanalyse avdekker ikke bare hvilke muskler som er viktigst, men også hvilken type muskelarbeid som dominerer: konsentrisk (forkortning), eksentrisk (forlengning) eller isometrisk (statisk hold).`,
    },
    {
      id: 'tr2-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Behovsanalyse for fotball',
      problem: 'Gjennomfor en forenklet behovsanalyse for fotball.',
      solution: `**Bevegelsesanalyse:**
- Dominerende bevegelsesmonster: Loping (60-70 % av kamptiden), sprint (5-10 %), retningsforandringer, hopp, skudd og taklinger
- Bevegelsene er multidireksjonale med hyppige akselerasjoner og deselerasjoner
- Rotasjoner forekommer ved skudd, kast (keeper) og taklinger

**Energisystemer:**
- Aerob kapasitet er grunnlaget (kamp varer 90 min, spilleren loper 10-13 km)
- Anaerob kapasitet er avgjorende for intensive perioder (sprinter, dueller)
- Fosfagensystemet brukes ved eksplosive aksjoner (sprintstart, hopp, skudd)
- Fordeling: ca. 70 % aerobt, 20 % anaerob glykolyse, 10 % fosfagensystem

**Sentrale muskelgrupper:**
- Primærmuskler: Quadriceps, hamstrings, gluteus maximus, leggmuskulatur
- Stabilisatorer: Core-muskulatur, hofteabduktorer, ankelmuskler
- Antagonister: Hamstrings (viktig for deselerasjon og skadeforebygging)
- Vanlige skader: Hamstringsstrekk, korsbåndskade, lyskebetennelse

**Konklusjon for treningsprogram:**
Fotball krever et bredt treningsprogram med vekt på aerob utholdenhet, eksplosiv styrke, retningsspesifikk hurtighet og skadeforebygging. Styrketreningen bor prioritere bein og core, med spesielt fokus på hamstrings for å forebygge skader.`,
    },
    {
      id: 'tr2-4-1-tip-1',
      type: 'tip',
      title: 'Bruk video for bevegelsesanalyse',
      content: `Film idrettsutovere under trening og konkurranse, og analyser opptakene systematisk. Se etter gjentakende bevegelsesmonster, tidspunkter med hoyest intensitet og situasjoner der utoveren ser ut til å slite. Moderne teknologi som GPS-sporere og akselerometere kan gi verdifull tilleggsinformasjon om bevegelsesmonster, hastigheter og akselerasjoner.`,
    },
    {
      id: 'tr2-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr2-4-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedformålet med en behovsanalyse i idrett?',
        options: [
          'Å bestemme hvilken idrett utoveren passer best til',
          'Å kartlegge de fysiske kravene i idretten for å lage et tilpasset treningsprogram',
          'Å finne ut om utoveren har talent for idretten',
          'Å sammenligne ulike idretter med hverandre',
        ],
        answer: 1,
        solution: 'En behovsanalyse kartlegger de fysiske kravene i idretten (bevegelsesmonster, energisystemer, muskelgrupper) for å danne grunnlaget for et skreddersydd treningsprogram. Det handler ikke om talentidentifikasjon, men om å forstå hva idretten krever.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr2-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr2-4-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket energisystem dominerer ved maksimal innsats i 0-10 sekunder?',
        options: [
          'Det aerobe systemet',
          'Det anaerobe glykolytiske systemet',
          'Fosfagensystemet (ATP-CP)',
          'Fettforbrenningssystemet',
        ],
        answer: 2,
        solution: 'Fosfagensystemet (ATP-CP) dominerer ved maksimal intensitet i 0-10 sekunder. Det bruker lagret ATP og kreatinfosfat i muskelen og gir svært rask energifrigjoring uten behov for oksygen.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr2-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr2-4-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom primærmuskler, stabilisatorer og antagonister, og gi eksempler fra en selvvalgt idrettsbevegelse.',
        solution: 'Primærmuskler (agonister) er musklene som utforer hovedbevegelsen, for eksempel quadriceps ved et spark i fotball. Stabilisatorer er muskler som holder ledd og kroppsstamme stabile under bevegelsen, for eksempel core-muskulaturen som stabiliserer overkroppen under sparket. Antagonister er muskler som arbeider motsatt av primærmusklene, for eksempel hamstrings som bremser beinets bevegelse etter sparket (eksentrisk bremsing). Alle tre kategorier er viktige for effektive og skadeforebyggende bevegelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr2-4-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En langrennsutover og en bryterutover har svært ulike energisystemprofiler. Beskriv hvilke energisystemer som dominerer i hver idrett, og forklar hvordan dette påvirker valg av kondisjonstrening.',
        solution: 'Langrenn er en utholdenhetsidrett der det aerobe systemet dominerer (over 85 % av energibidraget). Kondisjonstreningen bor derfor prioritere lange okter, lange intervaller og terskeltreninger som utvikler aerob kapasitet og laktatterskel. Bryting er en kampidrett med intense perioder (2-3 minutter per periode) der det anaerobe glykolytiske systemet og fosfagensystemet har stor betydning. Kondisjonstreningen bor inkludere intensive intervaller (30 sek-2 min), gjentatte sprinter og spesifikke kampintervaller. Begge idretter trenger et aerob grunnlag, men fordelingen mellom lang, rolig trening og intensive intervaller er svært forskjellig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr2-4-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjennomfor en bevegelsesanalyse for volleyball. Beskriv de viktigste bevegelsesmonstrene og hvilke ledd som belastes mest.',
        solution: 'Volleyball domineres av folgende bevegelser: Vertikale hopp (blokk og angrep) som krever kraftig kne- og hofteekstensjon og ankelplantar-fleksjon. Slag over hodet (serv og angrep) som innebærer skulderfleksjon, abduksjon, innoverrotasjon og hurtig armstrekk. Laterale bevegelser og utfall (forsvar) som krever hofteabduksjon og adduksjon. Hurtige retningsforandringer (posisjonering). Leddene som belastes mest er skulderleddet (repetitive slag), kneleddet (gjentatte hopp og landinger), ankelleddet (hopplandinger) og ryggsoylen (rotasjoner og hyperekstensjon ved slag). Treningsprogrammet bor derfor inkludere styrke for hopp, skulderstabilisering og eksentrisk trening for kne og ankel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-4-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr2-4-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en idrett du kjenner godt og gjennomfor en fullstendig behovsanalyse. Analysen skal inneholde bevegelsesanalyse, kartlegging av energisystemer, identifisering av sentrale muskelgrupper og konkrete anbefalinger for trening.',
        solution: 'Besvarelsen bor inneholde: 1) Bevegelsesanalyse med beskrivelse av dominerende bevegelsesmonster, leddvinkler, bevegelseshastighet og bevegelighetsutslag. 2) Energisystemanalyse med estimert prosentvis bidrag fra hvert system, begrunnet i idrettens typiske arbeids- og hvileperioder. 3) Muskelanalyse med identifisering av primærmuskler, stabilisatorer og antagonister, samt vanlige skader. 4) Konkrete treningsanbefalinger med begrunnelse for valg av styrkeovelser, kondisjonstrening, bevegelighets- og skadeforebyggende arbeid. Analysen bor vise evne til å koble teoretisk kunnskap til praktiske treningsvalg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// KAPITTEL 4.2: Ballidrett
// ============================================================================

export const CHAPTER_TRENING_2_4_2: TextbookChapter = {
  id: 'trening-2-4-2',
  courseId: 'trening-2',
  chapterNumber: '4.2',
  title: 'Ballidrett',
  description: 'Lær om fysiske krav og treningsopplegg for ballidretter som fotball, håndball og basketball, med fokus på idrettsspesifikk fysisk trening.',
  estimatedMinutes: 20,
  competenceGoals: [
    'kunne beskrive de fysiske kravene i ballidretter',
    'kunne planlegge idrettsspesifikk trening for ballidretter',
  ],
  content: [
    {
      id: 'tr2-4-2-intro',
      type: 'text',
      content: `## Ballidrett -- fotball, håndball og basketball

Ballidretter kjennetegnes av at de er intermitterende, det vil si at aktiviteten veksler mellom perioder med hoy og lav intensitet. En fotballspiller veksler mellom rolig jogging, hurtig loping, maksimal sprint, retningsforandringer og ulike tekniske handlinger. Denne vekslingen stiller store krav til både aerob og anaerob kapasitet, samt evnen til å gjenta intensive aksjoner.

I dette kapittelet ser vi nærmere på de fysiske kravene i fotball, håndball og basketball, og hvordan treningen kan tilpasses for å utvikle de egenskapene utoverne trenger mest.`,
    },
    {
      id: 'tr2-4-2-def-1',
      type: 'definition',
      title: 'Intermitterende aktivitet',
      content: `Intermitterende aktivitet er aktivitet som veksler mellom perioder med hoy og lav intensitet. I motsetning til kontinuerlig utholdenhetstrening (som et jevnt lopetempo) innebærer intermitterende aktivitet gjentatte overganger mellom sprinting, jogging, gange og stillstand.

Denne arbeidsformen krever:
- **Aerob kapasitet** for å opprettholde aktiviteten over tid og for rask restitusjon mellom intensive aksjoner
- **Anaerob kapasitet** for å levere energi under intensive aksjoner
- **Gjentatt sprintevne (RSA)** for å opprettholde sprintkvaliteten gjennom hele kampen`,
    },
    {
      id: 'tr2-4-2-text-1',
      type: 'text',
      title: 'Fysiske krav i fotball',
      content: `**Fotball** er verdens mest utbredte lagidrett og stiller sammensatte fysiske krav:

**Bevegelsesmonster og distanser:**
- Total lopedistanse: 10-13 km per kamp
- Hoyintensitetsloping (over 19,8 km/t): 800-1200 m per kamp
- Sprinting (over 25,2 km/t): 200-400 m per kamp
- Antall akselerasjoner: 50-80 per kamp
- Antall retningsforandringer: 700-1400 per kamp

**Viktigste fysiske egenskaper:**
- **Aerob kapasitet**: VO2maks på 55-70 ml/kg/min for toppspillere
- **Gjentatt sprintevne**: Evnen til å gjenta 20-30 m sprinter med kort restitusjon
- **Eksplosiv styrke**: For sprint, hopp, skudd og dueller
- **Retningsspesifikk hurtighet**: Akselerasjon, deselerasjon og retningsforandringer
- **Core-stabilitet**: For balanse under dueller og tekniske handlinger

**Typisk treningsuke i sesong:**
En toppfotballspiller trener 6-10 okter per uke i sesong. Fordelingen avhenger av kampprogram, men inkluderer vanligvis 2-3 styrkeokter, 1-2 hurtighetsokter og 3-4 ballrelaterte treninger der kondisjon integreres.`,
    },
    {
      id: 'tr2-4-2-text-2',
      type: 'text',
      title: 'Fysiske krav i håndball',
      content: `**Håndball** er en intensiv kontaktidrett som kombinerer loping, kast, hopp og kroppskontakt:

**Kjennetegn:**
- Kamp varer 2 x 30 minutter med effektiv spilletid
- Banen er 40 x 20 meter, noe som gir korte distanser og hyppige retningsforandringer
- Gjennomsnittlig hjertefrekvens: 80-90 % av maks
- Kontakt og dueller krever mye styrke i overkropp

**Viktigste fysiske egenskaper:**
- **Hurtighet og akselerasjon**: Korte sprinter (5-15 m) med maksimal intensitet
- **Kasthastighet**: Avhengig av eksplosiv styrke i skulder, kjerne og bein
- **Hoppevne**: For skudd i hopp og blokkeringshopp
- **Kroppsstyrke**: For dueller, hold og kontaktsituasjoner
- **Anaerob kapasitet**: Hoy andel intensivt arbeid med ufullstendig restitusjon

**Kasthastighet og styrke:**
Skuddhastighet i toppåndball kan nå 100-130 km/t for menn og 80-105 km/t for kvinner. Kasthastigheten avhenger av en kinetisk kjede som starter fra bein, gjennom hofter og overkropp, til skulder, albue og håndledd. Styrketrening for kasthastighet bor derfor inkludere hele denne kjeden.`,
    },
    {
      id: 'tr2-4-2-text-3',
      type: 'text',
      title: 'Fysiske krav i basketball',
      content: `**Basketball** er en dynamisk idrett som kombinerer loping, sprinting, hopping og kroppskontakt i et begrenset spilleområde:

**Kjennetegn:**
- Fire perioder med 10 minutter effektiv spilletid (FIBA)
- Mange bytter gjor at spillerne kan opprettholde hoy intensitet
- 24-sekunders skuddklokke krever hurtig omstilling
- Vertikale bevegelser (hopp, rebounding) er svært sentrale

**Viktigste fysiske egenskaper:**
- **Vertikal hoppevne**: Avgjorende for rebounding, blokking og avslutninger
- **Akselerasjon og retningsforandring**: Korte sprinter og raske kutt
- **Gjentatt sprintevne**: Veksling mellom forsvar og angrep
- **Anaerob kapasitet**: Hoyintensitetsperioder med korte pauser
- **Relativ styrke**: Styrke i forhold til kroppsvekt er viktigere enn absolutt styrke

**Posisjonsspesifikke krav:**
Guards (bakspillere) trenger mer hurtighet og utholdenhet, mens sentre trenger mer styrke og hoppevne. Forwarden (vingen) trenger en kombinasjon av begge. Treningsprogrammet bor tilpasses posisjon og individuelle styrker og svakheter.`,
    },
    {
      id: 'tr2-4-2-example-1',
      type: 'example',
      title: 'Eksempel: Treningsopplegg for fotball i forberedelsesfasen',
      problem: 'Sett opp et forenklet ukentlig treningsopplegg for en fotballspiller i forberedelsesfasen (4-6 uker for sesongstart).',
      solution: `**Uke i forberedelsesfasen:**

| Dag | Innhold |
|-----|---------|
| **Mandag** | Styrke underkropp (knebooy, utfall, romansk markdrag) + aerob loping (4x4 min intervaller) |
| **Tirsdag** | Fotballtrening (teknisk/taktisk) + hurtighet (5x20 m sprint med full restitusjon) |
| **Onsdag** | Styrke overkropp og core + aerob loping (rolig 30-40 min) |
| **Torsdag** | Fotballtrening (småspill, kampliknende) + retningsspesifikk hurtighet |
| **Fredag** | Styrke underkropp (fokus eksplosiv styrke) + spenst (plyometrisk trening) |
| **Lordag** | Fotballtrening (treningskamp eller intensivt lagokt) |
| **Sondag** | Hvile eller rolig restitusjonstrening |

**Prioriteringer i forberedelsesfasen:**
- Bygge aerob grunnlag med 4x4-intervaller og rolige okter
- Utvikle styrke og eksplosivitet med tungt styrkearbeid
- Gradvis oke mengden fotballspesifikk trening
- Forebygge skader med hamstringstrening og core-stabilitet`,
    },
    {
      id: 'tr2-4-2-note-1',
      type: 'note',
      title: 'Gjentatt sprintevne (RSA)',
      content: `Gjentatt sprintevne (Repeated Sprint Ability) er evnen til å opprettholde sprintkvaliteten gjennom gjentatte sprinter med kort restitusjon. RSA påvirkes av både aerob kapasitet (rask restitusjon mellom sprinter) og anaerob kapasitet (energileveranse under sprinter). En hoy VO2maks forbedrer RSA fordi den aerobe restitusjonen mellom sprintene blir raskere. Derfor er utholdenhetstrening viktig også for spillere i typiske sprinterposisjoner.`,
    },
    {
      id: 'tr2-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr2-4-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva menes med at ballidretter har intermitterende aktivitetsprofil?',
        options: [
          'At aktiviteten holder jevn intensitet gjennom hele kampen',
          'At aktiviteten veksler mellom perioder med hoy og lav intensitet',
          'At aktiviteten alltid er maksimal',
          'At aktiviteten kun er aerob',
        ],
        answer: 1,
        solution: 'Intermitterende aktivitet betyr at intensiteten veksler mellom hoy og lav. I ballidretter alternerer spillerne mellom sprinting, jogging, gange og stillstand. Denne vekslingen stiller krav til både aerob og anaerob kapasitet.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr2-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr2-4-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken fysisk egenskap er spesielt viktig for kasthastighet i håndball?',
        options: [
          'Aerob utholdenhet',
          'Statisk styrke i armene',
          'Eksplosiv styrke gjennom den kinetiske kjeden (bein, hofte, overkropp, skulder)',
          'Bevegelighet i ankelleddet',
        ],
        answer: 2,
        solution: 'Kasthastighet i håndball avhenger av eksplosiv kraft gjennom hele den kinetiske kjeden, fra bein og hofter gjennom overkroppen til skulder, albue og håndledd. Det er ikke bare armstyrke, men evnen til å overfore kraft fra store til små ledd i riktig rekkefolge.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr2-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr2-4-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign de fysiske kravene i fotball og basketball. Hvilke likheter og forskjeller finnes, og hvordan påvirker dette treningsvalg?',
        solution: 'Likheter: Begge er intermitterende lagidretter som krever aerob grunnkondisjon, gjentatt sprintevne, eksplosiv styrke og retningsspesifikk hurtighet. Forskjeller: Basketball har kortere bane og flere bytter, noe som gir hoyere gjennomsnittlig intensitet. Basketball har storre krav til vertikal hoppevne (rebounding, blokking). Fotball har lengre kamptid (90 vs. 40 min effektiv) og storre krav til total utholdenhet. Fotball har storre totale lopedistanser. Treningskonsekvenser: Basketballspillere bor prioritere spenst- og hopptrening mer, mens fotballspillere trenger mer utholdenhetstrening. Begge trenger styrketrening, men basketball har storre fokus på relativ styrke (styrke per kg kroppsvekt).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr2-4-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor aerob utholdenhet er viktig også i håndball, selv om mange av de avgjorende aksjonene er anaerobe.',
        solution: 'Selv om håndball inneholder mange eksplosive, anaerobe aksjoner (sprinter, hopp, kast, dueller), spiller aerob utholdenhet en viktig rolle av flere grunner: 1) Restitusjonen mellom intensive aksjoner er aerob -- en hoy VO2maks gjor at spilleren raskere gjenvinner energi mellom sprinter og dueller. 2) Kampen varer 60 minutter, og spillere som mangler aerob kapasitet vil oppleve prestasjonsfall i andre omgang. 3) Gjentatt sprintevne (RSA) er delvis avhengig av aerob kapasitet. 4) Aerob kapasitet forbedrer evnen til å fjerne laktat under lavintensitetsperioder. 5) God aerob kapasitet gjor at utoveren tåler storre treningsmengder i det daglige, noe som er viktig for total utvikling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr2-4-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv hvordan styrketrening for en basketballspiller kan tilpasses ulike posisjoner (guard, forward, senter).',
        solution: 'Guard (bakspiller): Fokus på relativ styrke og eksplosivitet. Lett til moderat styrketrening med hoy hastighet, plyometrisk trening for hurtighet og akselerasjon, lateral bevegelighetstrening. Unngå stor muskelvekst som kan redusere hurtighet. Forward (ving): Balansert styrkeprogram med elementer fra både guard- og sentertrening. Kombinasjon av eksplosiv styrke, spenst og kroppsstyrke. Trening for bade vertikal og horisontal kraft. Senter: Storre vekt på maksimal styrke og hypertrofi for å tåle kontakt under kurven. Tung styrketrening i knebooy og benkpress, supplert med spensttrening for rebounding og blokking. Core-styrke for stabilitet i kontaktsituasjoner. Felles for alle: Spenst- og hopptrening, core-stabilitet, skadeforebygging (spesielt ankel og kne).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-4-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr2-4-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en av ballidrettene (fotball, håndball eller basketball) og sett opp et detaljert styrketreningsprogram for en uke i sesong. Programmet skal begrunnes med utgangspunkt i behovsanalyse og ta hensyn til kampbelastning.',
        solution: 'Besvarelsen bor inneholde: Valgt idrett med kort behovsanalyse (viktigste fysiske krav). Ukeplan med 2-3 styrkeokter som tar hensyn til kampdagen (styrketrening bor legges tidlig i uken hvis kamp er i helgen). Konkrete ovelser med begrunnelse (knebooy for beinstyrke, romansk markdrag for hamstrings og skadeforebygging, benkpress eller push-ups for overkropp, planke og pallofpress for core). Belastningsparametere (sett, reps, prosent av 1RM). Tilpasning til sesong: Lavere volum enn i forberedelsesperioden, opprettholde styrkenivå uten å skape for mye tretthet for kamper. Skadeforebyggende ovelser som Nordisk hamstringoving, hofteabduktorstyrke og ankelprofylakse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// KAPITTEL 4.3: Individuelle idretter
// ============================================================================

export const CHAPTER_TRENING_2_4_3: TextbookChapter = {
  id: 'trening-2-4-3',
  courseId: 'trening-2',
  chapterNumber: '4.3',
  title: 'Individuelle idretter',
  description: 'Lær om fysiske krav og periodisering for individuelle idretter som friidrett, svomming og kampsport.',
  estimatedMinutes: 20,
  competenceGoals: [
    'kunne analysere fysiske krav i individuelle idretter',
    'forstå hvordan periodisering tilpasses ulike individuelle idretter',
  ],
  content: [
    {
      id: 'tr2-4-3-intro',
      type: 'text',
      content: `## Individuelle idretter -- friidrett, svomming og kampsport

Individuelle idretter skiller seg fra lagidretter ved at utoveren i stor grad er ansvarlig for sin egen prestasjon. Det finnes ingen lagkamerater å stotte seg på, og prestasjonen måles ofte i tid, distanse eller poeng. Dette gjor at treningsplanleggingen kan være svært målrettet og tilpasset den enkelte utoverens behov.

I dette kapittelet ser vi på tre ulike individuelle idretter -- friidrett, svomming og kampsport -- og hvordan treningen kan periodiseres for å oppnå toppform til riktig tidspunkt.`,
    },
    {
      id: 'tr2-4-3-def-1',
      type: 'definition',
      title: 'Periodisering',
      content: `Periodisering er den systematiske planleggingen av trening over tid. Målet er å variere treningsbelastningen slik at utoveren oppnår optimal form til de viktigste konkurransene.

**Periodiseringens oppbygning:**
- **Makrosyklus**: Hele sesong- eller årsplan (6-12 måneder)
- **Mesosyklus**: Treningsperioder på 2-6 uker med et bestemt fokus
- **Mikrosyklus**: Enkeltuke med detaljert treningsplan
- **Treningsokt**: Enkelt treningsokt

**Periodiseringsmodeller:**
- **Lineær periodisering**: Gradvis okning av intensitet og reduksjon av volum
- **Blokkperiodisering**: Konsentrerte blokker med fokus på en egenskap om gangen
- **Boylgeperiodisering (undulerende)**: Variasjon av belastning fra okt til okt`,
    },
    {
      id: 'tr2-4-3-text-1',
      type: 'text',
      title: 'Friidrett -- mangfoldet av disipliner',
      content: `**Friidrett** omfatter et stort mangfold av disipliner med svært ulike fysiske krav. Vi kan gruppere dem i hovedkategorier:

**Sprintdisipliner (100 m - 400 m):**
- Dominerende energisystem: Fosfagensystem og anaerob glykolyse
- Viktigste fysiske egenskaper: Maksimal hastighet, akselerasjon, eksplosiv styrke, reaktiv styrke
- Styrketrening: Tung styrketrening for bein og hofter, plyometrisk trening, olympiske loft
- Periodisering: Lang forberedelsesperiode med tung styrke og generell trening, gradvis overgang til mer sprintspesifikk trening mot sesong

**Mellomdistanse (800 m - 1500 m):**
- Dominerende energisystem: Kombinasjon av aerob og anaerob kapasitet
- Viktigste fysiske egenskaper: VO2maks, anaerob kapasitet, lopsokonomi, spurtstyrke
- Treningsfokus: Stor andel aerob trening supplert med terskel- og intervalltrening
- Periodisering: Bygge aerob grunnlag, deretter oke andelen intensiv trening mot konkurranse

**Langdistanse (5000 m - maraton):**
- Dominerende energisystem: Aerob
- Viktigste fysiske egenskaper: VO2maks, laktatterskel, lopsokonomi, fettoksidasjon
- Treningsfokus: Hoy andel lavintensitetstrening (80-20-regelen), styrketrening for lopsokonomi
- Periodisering: Gradvis oppbygging av lopemengde, intensitet oker nærmere konkurranse

**Hopp og kast:**
- Dominerende energisystem: Fosfagensystem
- Viktigste fysiske egenskaper: Eksplosiv styrke, teknikk, bevegelighet, koordinasjon
- Treningsfokus: Tung styrketrening, plyometrisk trening, teknisk trening
- Periodisering: Oppbygging av generell styrke, deretter konvertering til spesifikk eksplosiv styrke`,
    },
    {
      id: 'tr2-4-3-text-2',
      type: 'text',
      title: 'Svomming -- trening i vann',
      content: `**Svomming** er en utholdenhetsidretter som utfores i et unikt miljo -- vannet. Vannets egenskaper (motstand, oppdrift, varmeledning) påvirker de fysiske kravene:

**Særtrekk ved svomming:**
- Horisontal kroppsstilling reduserer gravitasjonens effekt
- Vannets motstand oker med hastigheten i andre potens (dobbel hastighet = fire ganger motstanden)
- Effektivitet i vannet avhenger av både styrke og teknikk
- Varmetap i vann er ca. 25 ganger storre enn i luft

**Fysiske krav:**
- **Aerob kapasitet**: Grunnlaget for distanser fra 200 m og oppover
- **Anaerob kapasitet**: Avgjorende for 50-200 m
- **Overkroppsstyrke**: Armer og skulderparti genererer det meste av framdriften
- **Core-stabilitet**: Nødvendig for å opprettholde strømlinjeform
- **Skuldermobilitet**: Stort bevegelsesutslag kreves i crawl og butterfly

**Periodisering i svomming:**
Svommere folger ofte en lineær eller blokkbasert periodisering:

1. **Grunnlagsperiode** (8-12 uker): Stort volum i vannet (lavere intensitet), generell styrketrening på land
2. **Oppbyggingsperiode** (6-8 uker): Redusert volum, okt intensitet, mer spesifikk styrketrening
3. **Konkurranseperiode** (4-6 uker): Ytterligere volumreduksjon, hoy intensitet, teknisk finjustering
4. **Toppformsperiode (taper)** (2-3 uker): Betydelig reduksjon i treningsmengde for å oppnå toppform

Den klassiske taperen i svomming innebærer 40-60 % reduksjon i volum de siste 2-3 ukene for hovedkonkurranse, mens intensiteten opprettholdes eller okes.`,
    },
    {
      id: 'tr2-4-3-text-3',
      type: 'text',
      title: 'Kampsport -- styrke, utholdenhet og teknikk',
      content: `**Kampsport** (boksing, bryting, judo, taekwondo, karate) er idretter som kombinerer eksplosiv styrke, utholdenhet og teknisk ferdighet i kamp mot en motstander:

**Fellesnevnere i kampsport:**
- Kampene er intermitterende med svært intense perioder
- Vektklasser gjor at relativ styrke (styrke per kg) er viktigere enn absolutt styrke
- Teknikk og timing er avgjorende -- styrke alene er ikke nok
- Mentale egenskaper som konsentrasjon, aggressivitet og stressmestring er svært viktige

**Fysiske krav:**
- **Eksplosiv styrke**: For slag, kast, felling og hurtige bevegelser
- **Gripestyrke**: Spesielt viktig i bryting og judo (kontroll over motstander)
- **Anaerob kapasitet**: Hoy melkesyretoleranse for å opprettholde intensiteten
- **Aerob grunnlag**: Viktig for restitusjon mellom intense perioder og mellom kamper i turneringer
- **Bevegelighet**: Nødvendig for sparkteknikker og for å unngå skader
- **Reaktiv styrke**: Evnen til å generere kraft raskt etter en eksentrisk fase

**Periodisering i kampsport:**
Kampsportutovere har ofte mange konkurranser gjennom året, noe som gjor periodisering utfordrende. En vanlig tilnærming er blokkperiodisering:

1. **Styrkeblokk** (3-4 uker): Fokus på maksimal styrke og muskelvekst
2. **Kraftblokk** (3-4 uker): Konvertering til eksplosiv styrke og hurtighet
3. **Konkurranseforberedelse** (2-3 uker): Redusert styrkearbeid, okt teknisk og taktisk trening
4. **Taper** (1-2 uker): Redusert volum for toppform, eventuelt vektnedgang til kampvekt`,
    },
    {
      id: 'tr2-4-3-example-1',
      type: 'example',
      title: 'Eksempel: Årssyklus for en sprinter (100 m)',
      problem: 'Beskriv en forenklet årssyklus med periodisering for en 100 m-sprinter.',
      solution: `**Forberedelsesperiode 1 -- Generell (oktober-desember):**
- Tung styrketrening: Knebooy, markdrag, benkpress (4-6 RM)
- Generell lopetrening: Tempolop, bakkesprinter
- Plyometrisk grunnlag: Hoppserier, bokshopp
- Bevegelighets- og stabilitetstrening
- Volum: Hoyt. Intensitet: Moderat.

**Forberedelsesperiode 2 -- Spesifikk (januar-mars):**
- Olympiske loft og eksplosiv styrke (3-5 RM med hoy hastighet)
- Sprintintervaller: 30-60 m med full restitusjon
- Avansert plyometrisk trening: Dybdehopp, reaktive hopp
- Starthastighet og akselerasjonstrening
- Volum: Avtagende. Intensitet: Okende.

**Konkurranseperiode (april-august):**
- Vedlikeholdsstyrke: 2 okter per uke, redusert volum
- Maksimal sprinttrening: 20-60 m med full restitusjon
- Konkurranser som treningsverktoy
- Teknisk finjustering av start og overgang til topphastighet
- Volum: Lavt. Intensitet: Svært hoy (kvalitet fremfor kvantitet).

**Overgangsperiode (september):**
- Aktiv hvile: Generell trening, andre aktiviteter
- Mental og fysisk restitusjon
- Volum og intensitet: Lavt.`,
    },
    {
      id: 'tr2-4-3-tip-1',
      type: 'tip',
      title: 'Periodisering krever fleksibilitet',
      content: `Ingen periodiseringsplan overlever uendret gjennom et helt år. Skader, sykdom, uventede konkurranser og personlige forhold krever justeringer. Det viktigste er å ha en overordnet plan med tydelige mål for hver periode, men å være villig til å tilpasse detaljene underveis. Lytt til kroppen og juster belastningen etter dagsform og restitusjonsbehov.`,
    },
    {
      id: 'tr2-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr2-4-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en makrosyklus i periodisering?',
        options: [
          'En enkelt treningsokt',
          'En treningsuke',
          'En treningsperiode på 2-6 uker',
          'Hele sesong- eller årsplanen (6-12 måneder)',
        ],
        answer: 3,
        solution: 'En makrosyklus er den overordnede sesong- eller årsplanen som strekker seg over 6-12 måneder. Den deles inn i mesosykluser (2-6 uker), mikrosykluser (uker) og enkelttreningsokter.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr2-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr2-4-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner en taper-periode i svomming?',
        options: [
          'Betydelig okning i treningsmengde for å bygge form',
          'Betydelig reduksjon i treningsmengde mens intensiteten opprettholdes',
          'Kun teknisk trening uten fysisk belastning',
          'Full hvile uten trening i 2-3 uker',
        ],
        answer: 1,
        solution: 'En taper innebærer 40-60 % reduksjon i treningsmengde (volum) de siste 2-3 ukene for en hovedkonkurranse, mens intensiteten opprettholdes eller oker. Målet er at kroppen skal restituere og oppnå toppform etter lang tid med tung trening.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr2-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr2-4-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign treningsbehovene for en 100 m-sprinter og en maratonloper. Beskriv forskjeller i energisystemer, styrketrening og periodisering.',
        solution: 'Energisystemer: 100 m domineres av fosfagensystemet (maks 10-12 sekunder), mens maraton domineres av det aerobe systemet (over 2 timer). Styrketrening: Sprinteren prioriterer maksimal og eksplosiv styrke med tungt styrkearbeid, olympiske loft og plyometrisk trening for å utvikle hurtighet og kraftutvikling. Maratonloperen prioriterer styrkeutholdenthet og lopsokonomi-forbedring med moderat styrketrening (knebooy, utfall) i 3-6 RM-sonen for å forbedre nevral effektivitet uten stor muskelvekst. Periodisering: Sprinteren har lang forberedelsesperiode med tung styrke, gradvis overgang til spesifikk sprinttrening. Maratonloperen bygger gradvis opp lopemengde over måneder, oker intensiteten nærmere konkurranse, og gjennomforer en taper på 2-3 uker for hovedlop.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr2-4-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor blokkperiodisering kan være en god tilnærming for kampsportutovere som har mange konkurranser gjennom året.',
        solution: 'Kampsportutovere har ofte konkurranser spredt gjennom året, noe som gjor tradisjonell lineær periodisering (med en lang oppbygging mot en hovedkonkurranse) vanskelig. Blokkperiodisering losen dette ved å bruke korte, konsentrerte treningsblokker (3-4 uker) som fokuserer på en egenskap om gangen. Fordelene er: 1) Korte blokker kan gjentas flere ganger i lopet av sesongen, slik at utoveren kan bygge form til flere konkurranser. 2) Konsentrert fokus gir sterkere treningsstimulus for den målrettede egenskapen. 3) Blokkene kan tilpasses og omarrangeres etter konkurransekalenderen. 4) Det er lettere å styre vektnedgang og toppform til spesifikke stevner. Utfordringen er at egenskaper som ikke trenes i en blokk kan svekkes noe (detrenering), men residualeffektene (ettervirkningen) av tidligere blokker bidrar til å opprettholde formen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-4-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr2-4-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor overkroppsstyrke og core-stabilitet er spesielt viktig i svomming, og gi eksempler på relevante styrkeovelser.',
        solution: 'I svomming genereres det aller meste av framdriften av armene (anslagsvis 80-90 % i crawl). Sterk overkropp gjor det mulig å trekke mer vann per tak, noe som oker framdriften uten å oke takfrekvensen. Core-stabilitet er avgjorende for å opprettholde en strømlinjet kroppsstilling i vannet. Uten god core-styrke vil kroppen rotere for mye eller synke i vannet, noe som oker motstanden dramatisk. Relevante styrkeovelser: Overkropp -- lat pulldown, pull-ups, roing, benkpress, skulderpress, triceps pushdowns. Core -- planke, pallofpress, hanging leg raises, rullinger med ball. Spesifikke ovelser -- drag med strikk som etterlikner svommetaket, medisinball-rotasjoner for butterflybevegelse, sittende rotasjoner med kabel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-4-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr2-4-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en individuell idrett og lag en periodiseringsplan for et helt år. Planen skal inneholde makrosyklus med inndeling i mesosykluser, treningsfokus for hver periode, og begrunnelse for valgene basert på behovsanalyse og periodiseringsprinsipper.',
        solution: 'Besvarelsen bor inneholde: 1) Kort behovsanalyse for valgt idrett (energisystemer, viktigste fysiske egenskaper). 2) Identifisering av årets viktigste konkurranser og oppbygging mot disse. 3) Makrosyklus med tydelig inndeling i forberedelsesperiode (generell og spesifikk), konkurranseperiode og overgangsperiode. 4) Mesosykluser (2-6 uker) med konkret treningsfokus for hver periode: volum, intensitet, treningstype. 5) Begrunnelse for valg av periodiseringsmodell (lineær, blokk eller undulerende) basert på idrettens konkurransekalender. 6) Beskrivelse av taper-strategi for hovedkonkurranse. 7) Eventuell overgangsfase med aktiv hvile. Planen bor vise forståelse for sammenhengen mellom behovsanalyse, periodiseringsprinsipper og praktisk treningsplanlegging.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// KAPITTEL 4.4: Teknisk trening og motorisk læring
// ============================================================================

export const CHAPTER_TRENING_2_4_4: TextbookChapter = {
  id: 'trening-2-4-4',
  courseId: 'trening-2',
  chapterNumber: '4.4',
  title: 'Teknisk trening og motorisk læring',
  description: 'Lær om implisitt og eksplisitt læring, variabilitet i trening og hvordan motoriske ferdigheter utvikles og automatiseres.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forstå forskjellen mellom implisitt og eksplisitt motorisk læring',
    'kunne anvende prinsipper for variabilitet i teknisk trening',
  ],
  content: [
    {
      id: 'tr2-4-4-intro',
      type: 'text',
      content: `## Teknisk trening og motorisk læring

Teknisk ferdighet er avgjorende i nesten alle idretter. Uansett hvor sterk eller utholdende en utover er, vil dårlig teknikk begrense prestasjonen. Motorisk læring er fagfeltet som studerer hvordan bevegelser læres, forbedres og automatiseres.

I dette kapittelet ser vi på to hovedtilnærminger til motorisk læring -- implisitt og eksplisitt læring -- og hvordan variabilitet i trening kan fremme mer robuste og tilpasningsdyktige ferdigheter.`,
    },
    {
      id: 'tr2-4-4-def-1',
      type: 'definition',
      title: 'Motorisk læring',
      content: `Motorisk læring er en relativt varig endring i evnen til å utfore en bevegelse, som skyldes ovelse eller erfaring. Motorisk læring skiller seg fra motorisk prestasjon:

- **Motorisk prestasjon**: Hvordan du utforer en bevegelse akkurat nå (påvirkes av dagsform, tretthet, motivasjon)
- **Motorisk læring**: Den underliggende, varige endringen i bevegelsesevne (kan ikke observeres direkte, men sluttes fra gjentatte prestasjoner)

Kjennetegn på motorisk læring:
- Bevegelsen blir mer konsistent og presis
- Bevegelsen krever mindre bevisst oppmerksomhet
- Bevegelsen kan utfores under varierende forhold (stress, tretthet, nye omgivelser)
- Bevegelsen huskes over tid (retensjon)`,
    },
    {
      id: 'tr2-4-4-text-1',
      type: 'text',
      title: 'Eksplisitt læring',
      content: `**Eksplisitt læring** (også kalt deklarativ læring) innebærer at utoveren bevisst og aktivt forsøker å forstå og kontrollere bevegelsen. Treneren gir verbale instruksjoner, og utoveren tenker seg gjennom hvert steg.

**Kjennetegn:**
- Treneren forklarer teknikken i detalj: «Bøy knærne, hold ryggen rett, se fremover»
- Utoveren fokuserer bevisst på kroppens bevegelser (internalt fokus)
- Bevegelsen brytes ned i delkomponenter som oves separat
- Utoveren kan forklare hva han eller hun gjor og hvorfor

**Fordeler:**
- Rask innledende læring av grunnleggende bevegelsesmonster
- Utoveren forstår prinsippene bak bevegelsen
- Effektivt for å korrigere spesifikke tekniske feil
- Egner seg godt for nybegynnere som trenger et utgangspunkt

**Ulemper:**
- Kan overbelaste arbeidsminnet -- for mange instruksjoner hemmer prestasjonen
- Bevegelsen kan bli stiv og mekanisk fordi utoveren tenker for mye
- Under press (konkurranse, stress) kan utovere som har lært eksplisitt falle tilbake til bevisst kontroll, noe som ofte svekker prestasjonen (choking under pressure)
- Kan hemme kreativitet og naturlig bevegelseslæring`,
    },
    {
      id: 'tr2-4-4-text-2',
      type: 'text',
      title: 'Implisitt læring',
      content: `**Implisitt læring** innebærer at utoveren lærer bevegelser uten å bevisst formulere regler for hvordan bevegelsen utfores. Læringen skjer gjennom erfaring, utforskning og oppdagelse.

**Kjennetegn:**
- Treneren gir få eller ingen verbale instruksjoner om teknikk
- Fokus rettes mot bevegelsens mål (eksternt fokus) i stedet for kroppens bevegelser
- Utoveren oppdager løsninger gjennom prøving og feiling
- Utoveren kan ofte ikke forklare nøyaktig hva som endret seg

**Metoder for implisitt læring:**
- **Eksternt fokus**: «Tenk på å treffe midten av målet» (ikke «bøy albuen 90 grader»)
- **Analogilæring**: «Kast ballen som om du kaster en stein i vannet» (i stedet for detaljerte instruksjoner)
- **Constraints-led approach**: Endre oppgaven, utstyret eller miljøet for å tvinge frem ønskede bevegelsesmonster
- **Discovery learning**: La utoveren utforske og finne løsninger selv

**Fordeler:**
- Bevegelsen automatiseres raskere og er mer motstandsdyktig mot stress
- Mindre sårbar for prestasjonsfall under press (choking)
- Fremmer kreativitet og tilpasningsevne
- Mindre belastning på arbeidsminnet

**Ulemper:**
- Kan ta lengre tid å lære grunnleggende teknikk
- Vanskelig å korrigere spesifikke feil uten verbale instruksjoner
- Krever erfarne trenere som kan designe gode læringsmiljoer`,
    },
    {
      id: 'tr2-4-4-def-2',
      type: 'definition',
      title: 'Eksternt vs. internalt fokus',
      content: `**Internalt fokus** betyr at utoveren retter oppmerksomheten mot kroppens egne bevegelser: «Strekk kneet», «Hold albuen inne», «Roter hoften».

**Eksternt fokus** betyr at utoveren retter oppmerksomheten mot bevegelsens effekt på omgivelsene: «Sikt på det overste hjornet», «Skyv plattformen vekk», «Sving klubben gjennom ballen».

**Forskning viser gjennomgående at eksternt fokus gir:**
- Bedre prestasjon (mer nøyaktighet, mer kraft, bedre balanse)
- Raskere automatisering av bevegelser
- Mer effektive bevegelsesmonster (lavere muskelaktivering for samme resultat)

Effekten gjelder for alle ferdighetsnivåer, fra nybegynnere til eliteutovere, og på tvers av ulike idretter og bevegelsesoppgaver.`,
    },
    {
      id: 'tr2-4-4-text-3',
      type: 'text',
      title: 'Variabilitet i trening',
      content: `**Variabilitet i trening** innebærer å bevisst variere treningsbetingelsene for å utvikle mer robuste og tilpasningsdyktige ferdigheter.

**Tradisjonell tilnærming (blokktrening):**
I tradisjonell teknisk trening gjentar utoveren samme bevegelse mange ganger under identiske forhold. For eksempel øver en basketballspiller frikast fra samme posisjon 100 ganger på rad. Dette gir rask forbedring på trening, men overforingsverdien til kamp kan være begrenset.

**Variabel trening:**
Variabel trening innebærer å endre betingelsene mellom repetisjoner: ulikt tempo, ulik avstand, ulik vinkel, ulikt underlag. Eksempel: En tennisutover slår forehand til ulike mål i tilfeldig rekkefolge, i stedet for å slå 50 baller til samme mål.

**Differensiell læring:**
En mer radikal form for variabilitet der utoveren bevisst legger til variasjoner (også «feil») i bevegelsesutforelsen. Teorien er at kroppen finner optimale losninger gjennom å utforske et bredt bevegelsesrom.

**Kontekstuell interferens:**
Å trene flere ferdigheter om hverandre (tilfeldig rekkefolge) i stedet for en ferdighet om gangen (blokktrening). Dette kan gi svakere resultater på kort sikt, men bedre langtidslæring og overforingverdi.

**Praktiske anbefalinger:**
- Nybegynnere: Mer blokktrening for å etablere grunnleggende bevegelsesmonster
- Videregående: Gradvis innforing av variabilitet og kontekstuell interferens
- Eksperter: Hoy grad av variabilitet og tilfeldig trening for å vedlikeholde og videreutvikle ferdigheter`,
    },
    {
      id: 'tr2-4-4-example-1',
      type: 'example',
      title: 'Eksempel: Implisitt vs. eksplisitt instruksjon i golf',
      problem: 'En golftrener skal lære en ny elev å slå en pitch (kort tilnærmingsslag). Beskriv hvordan eksplisitt og implisitt instruksjon vil se ut.',
      solution: `**Eksplisitt tilnærming:**
Treneren forklarer detaljert: «Plasser ballen midt mellom fotene. Grip klubben slik at venstre hånd er overst. Bøy knærne lett. Før klubben tilbake med strak venstre arm til kl. 9. Roter hoftene inn i slaget. Følg gjennom til kl. 3.» Eleven forsøker å huske og gjennomfore alle instruksjonene samtidig.

**Implisitt tilnærming:**
Treneren sier: «Forsøk å lande ballen så nær flagget som mulig. Prøv ulike ting og kjenn hva som fungerer.» Eventuelt bruker treneren en analogi: «Tenk at du kaster ballen underarms mot flagget med klubben som en forlengelse av armen.» Eleven utforsker og oppdager effektive bevegelser uten å tenke på spesifikke kroppsposisjoner.

**Kombinasjon (ofte mest praktisk):**
Treneren gir en eller to nøkkelinstruksjoner for å etablere et rimelig utgangspunkt, og bruker deretter eksternt fokus og oppgavemanipulasjon for å finslipe teknikken implisitt. For eksempel: «Grip slik (viser). Nå skal vi se om du klarer å få ballen til å lande innenfor den ringen der.»`,
    },
    {
      id: 'tr2-4-4-note-1',
      type: 'note',
      title: 'Choking under pressure',
      content: `Choking under pressure er et fenomen der utovere presterer dårligere enn forventet under hoyt press. En forklaring er at stress gjor at utoveren begynner å tenke bevisst over bevegelser som normalt er automatiserte (eksplisitt overvåking). Utovere som har lært gjennom implisitt læring er mer motstandsdyktige mot dette, fordi de har færre eksplisitte regler å «falle tilbake» til. Trenere bor derfor kombinere implisitte læringsmetoder med presstrening (ovelse under stressende forhold) for å forberede utovere på konkurransesituasjoner.`,
    },
    {
      id: 'tr2-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr2-4-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom internalt og eksternt fokus i motorisk læring?',
        options: [
          'Internalt fokus retter oppmerksomheten mot kroppens bevegelser, mens eksternt fokus retter oppmerksomheten mot bevegelsens effekt på omgivelsene',
          'Internalt fokus betyr å trene innendors, mens eksternt fokus betyr å trene utendors',
          'Internalt fokus er for nybegynnere, mens eksternt fokus bare brukes av eksperter',
          'Det er ingen forskjell -- begrepene betyr det samme',
        ],
        answer: 0,
        solution: 'Internalt fokus retter oppmerksomheten mot kroppens egne bevegelser (f.eks. «strekk kneet»), mens eksternt fokus retter oppmerksomheten mot bevegelsens effekt på omgivelsene (f.eks. «sikt på målet»). Forskning viser at eksternt fokus gir bedre prestasjon og raskere læring.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr2-4-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr2-4-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner implisitt motorisk læring?',
        options: [
          'Utoveren får detaljerte verbale instruksjoner om teknikken',
          'Utoveren lærer gjennom erfaring og utforskning uten å formulere eksplisitte regler',
          'Utoveren leser seg opp på teori for å forstå bevegelsen',
          'Utoveren kopierer en ekspert ved å se videoopptak',
        ],
        answer: 1,
        solution: 'Implisitt læring innebærer at utoveren lærer bevegelser gjennom erfaring, utforskning og oppdagelse, uten å bevisst formulere regler for bevegelsesutforelsen. Utoveren kan gjerne utfore bevegelsen godt uten å kunne forklare nøyaktig hva som gjor den effektiv.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr2-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr2-4-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva kontekstuell interferens er, og hvorfor det kan gi bedre langtidslæring selv om det gir svakere resultater på kort sikt.',
        solution: 'Kontekstuell interferens oppstår når flere ferdigheter trenes om hverandre i tilfeldig rekkefolge (random practice) i stedet for en ferdighet om gangen (blocked practice). Eksempel: I stedet for å ove 50 serv, 50 forehand og 50 backhand (blokktrening), blander utoveren slagene tilfeldig (tilfeldig trening). På kort sikt gir blokktrening bedre resultater fordi utoveren får repetere samme bevegelse mange ganger. Men på lang sikt gir tilfeldig trening bedre retensjon (hukommelse) og transfer (overforing til nye situasjoner). Forklaringen er at kontekstuell interferens tvinger hjernen til å aktivt rekonstruere handlingsplanen for hver repetisjon, noe som styrker den motoriske hukommelsen. Ved blokktrening kan hjernen «gjenbruke» planen fra forrige repetisjon uten aktiv bearbeiding, noe som gir rask forbedring men svakere lagring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-4-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr2-4-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En fotballtrener ønsker å forbedre spillernes skuddteknikk. Beskriv to ulike treningsopplegg -- ett basert på eksplisitt læring og ett basert på implisitt læring. Drofte fordeler og ulemper ved begge tilnærminger.',
        solution: 'Eksplisitt opplegg: Treneren demonstrerer og forklarer skuddteknikken steg for steg -- plassering av stottefoten ved siden av ballen, treffpunkt på ballen med vristen, gjennomtrekk med foten mot målet. Spillerne gjentar fra faste posisjoner mens treneren korrigerer. Fordeler: Rask etablering av grunnleggende teknikk, enkel å korrigere feil. Ulemper: Spillerne kan bli for mekaniske, teknikken kan bryte sammen under kamppress. Implisitt opplegg: Treneren setter opp ulike spillsituasjoner der spillerne må skyte fra ulike posisjoner, vinkler og avstander. Instruksjonen er begrenset til «forsøk å treffe de ulike målene». Treneren manipulerer oppgaven (små mål, store mål, bevegelige mål, tidspress) for å stimulere til ulike losninger. Fordeler: Teknikken blir mer tilpasningsdyktig og robust under press, spillerne utvikler kreativitet. Ulemper: Kan ta lengre tid, vanskelig å korrigere spesifikke feil. Ideelt kombineres tilnærmingene: grunnleggende instruksjon tidlig, deretter implisitte metoder for å automatisere og tilpasse ferdighetene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-4-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr2-4-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar fenomenet choking under pressure og hvordan valg av læringsmetode (implisitt vs. eksplisitt) kan påvirke sannsynligheten for at det oppstår.',
        solution: 'Choking under pressure er et fenomen der utovere presterer vesentlig dårligere enn forventet i pressede situasjoner (viktige konkurranser, avgjorende øyeblikk). En sentral forklaring er reinvestment-teorien: Under press forsøker utoveren å ta bevisst kontroll over bevegelser som normalt er automatiserte, noe som forstyrrer den flytende utforelsen. Utovere som har lært gjennom eksplisitte metoder har mange verbale regler lagret i minnet, og under press kan disse reglene aktiveres og forstyrre automatiseringen. Utovere som har lært gjennom implisitte metoder har færre eksplisitte regler å «falle tilbake» til, og er derfor mer motstandsdyktige mot choking. Praktisk konsekvens: Trenere bor bruke implisitte læringsmetoder i kombinasjon med presstrening for å forberede utovere på konkurransesituasjoner. Jo nærmere konkurranse, desto mer bor treningen ligne på kampforhold med realistisk stress og konsekvenser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-4-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr2-4-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du er trener for et juniorhåndballag som sliter med feilpasninger under kamp. Lag et treningsopplegg som bruker prinsipper fra motorisk læring (implisitt læring, variabilitet, eksternt fokus) for å forbedre pasningskvaliteten. Begrunn valgene dine.',
        solution: 'Besvarelsen bor inneholde: 1) Analyse av problemet: Feilpasninger under kamp kan skyldes at spillerne har ovd pasninger i forutsigbare treningssituasjoner (blokktrening) som ikke overfores til kampens uforutsigbarhet. 2) Treningsopplegg basert på implisitt læring: Spillsituasjoner i småspill (3v3, 4v4) med ulike regler som fremmer pasningskvalitet, for eksempel poeng for antall vellykkede pasninger for skudd. 3) Variabilitet: Variasjon i pasningsavstand, mottakerens bevegelse, forsvarspress, banestorrelse og antall spillere. Tilfeldig rekkefolge av ulike pasningstyper i spilllignende ovelser. 4) Eksternt fokus: Instruksjoner som «lever ballen i brysthøyde til mottakeren» (eksternt) i stedet for «vri håndleddet og slipp ballen tidlig» (internalt). 5) Presstrening: Innforing av konsekvensspill (lag som har flest feilpasninger må gjore ekstraovelser), tidsbegrensning på angrep, publikumssto. 6) Begrunnelse: Denne tilnærmingen bygger tilpasningsdyktige ferdigheter som tåler kampens krav bedre enn isolert teknisk trening.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// KAPITTEL 4.5: Kombinasjonstrening
// ============================================================================

export const CHAPTER_TRENING_2_4_5: TextbookChapter = {
  id: 'trening-2-4-5',
  courseId: 'trening-2',
  chapterNumber: '4.5',
  title: 'Kombinasjonstrening',
  description: 'Lær om concurrent training, interferenseffekten og strategier for å kombinere styrke- og utholdenhetstrening effektivt.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forstå hva concurrent training og interferenseffekten innebærer',
    'kunne planlegge kombinert styrke- og utholdenhetstrening for å minimere interferens',
  ],
  content: [
    {
      id: 'tr2-4-5-intro',
      type: 'text',
      content: `## Kombinasjonstrening -- concurrent training

De fleste idrettsutovere trenger å utvikle flere fysiske egenskaper samtidig. En fotballspiller trenger bade utholdenhet og styrke. En svommer trenger bade aerob kapasitet og overkroppsstyrke. Denne samtidige treningen av flere egenskaper kalles concurrent training (kombinasjonstrening).

Utfordringen er at styrketrening og utholdenhetstrening kan motarbeide hverandre når de kombineres. Denne motarbeidelsen kalles interferenseffekten, og den er et sentralt tema i treningsplanlegging for idretter som krever bade styrke og utholdenhet.`,
    },
    {
      id: 'tr2-4-5-def-1',
      type: 'definition',
      title: 'Concurrent training',
      content: `Concurrent training (kombinasjonstrening) er simultam trening av to eller flere fysiologiske egenskaper i samme treningsprogram. Vanligvis refererer begrepet til kombinasjonen av styrketrening og utholdenhetstrening.

**Interferenseffekten** (også kalt den molekylære interferenshypotesen) beskriver fenomenet der den ene treningsformen hemmer tilpasningene til den andre. Spesielt kan utholdenhetstrening hemme utviklingen av maksimal styrke og muskelmasse.

Interferenseffekten ble forst beskrevet av Robert Hickson i 1980, som viste at kombinert styrke- og utholdenhetstrening ga svakere styrkegevinster enn styrketrening alene.`,
    },
    {
      id: 'tr2-4-5-text-1',
      type: 'text',
      title: 'Mekanismene bak interferenseffekten',
      content: `For å forstå hvorfor styrke- og utholdenhetstrening kan motarbeide hverandre, må vi se på de molekylære signalveiene som styrer tilpasningene:

**Styrketreningens signalvei (mTOR-banen):**
Styrketrening aktiverer mTOR (mammalian target of rapamycin), en signalmolekyl som stimulerer proteinsyntese og muskelvekst. mTOR-aktivering forer til:
- Okt proteinsyntese (bygging av nye muskelproteiner)
- Hypertrofi (muskelvekst)
- Okt styrke gjennom strukturelle tilpasninger

**Utholdenhetstreningens signalvei (AMPK-banen):**
Utholdenhetstrening aktiverer AMPK (AMP-aktivert proteinkinase), som stimulerer mitokondriell biogenese og aerobe tilpasninger. AMPK-aktivering forer til:
- Flere og storre mitokondrier
- Okt kapillærtetthet
- Bedre fettoksidasjon og aerob kapasitet

**Interferensen:**
AMPK kan hemme mTOR-aktiviteten. Når utholdenhetstrening aktiverer AMPK, kan dette dempe det anabole signalet fra styrketreningen. Resultatet er at muskelvekst og styrkegevinster reduseres sammenlignet med å trene styrke alene.

**Viktig nyansering:**
Interferenseffekten er ikke absolutt. Den avhenger av treningstype, volum, intensitet, rekkefolge, tid mellom okter og utoverens treningsstatus. Med riktig planlegging kan interferensen minimeres betydelig.`,
    },
    {
      id: 'tr2-4-5-text-2',
      type: 'text',
      title: 'Faktorer som påvirker interferenseffekten',
      content: `Styrken på interferenseffekten varierer betydelig avhengig av flere faktorer:

**Type utholdenhetstrening:**
- **Loping** gir storre interferens enn **sykling**. Loping innebærer mer eksentrisk muskelarbeid (landinger) som forårsaker muskelskade, noe som hemmer styrketilpasninger ekstra.
- **Hoyintensitets intervalltrening (HIIT)** gir sterkere AMPK-aktivering enn langsom, kontinuerlig trening.
- **Langvarige, moderate okter** kan gi kronisk AMPK-aktivering som hemmer mTOR.

**Tid mellom treningsokter:**
- Å trene styrke og utholdenhet i **samme okt** gir sterkere interferens enn å dele dem i **separate okter**.
- Forskning tyder på at det bor gå **minst 6-8 timer** mellom en utholdenhetsokt og en styrkeokt for å minimere interferensen.
- Hvis du må trene begge på samme dag, er det gunstigere å trene **styrke forst** og utholdenhet etterpå.

**Treningsvolum:**
- Hoyere volum utholdenhetstrening gir sterkere interferens.
- For utovere som primært trenger styrke, bor utholdenhetsvolumet holdes på et minimum.

**Treningsstatus:**
- **Utrente** individer opplever mindre interferens fordi kroppen responderer sterkt på all stimuli.
- **Veltrente** utovere er mer sensitive for interferens fordi tilpasningene er nærmere det genetiske potensialet.

**Type styrketrening som hemmes:**
- **Hypertrofi** (muskelvekst) er mest sårbar for interferens.
- **Nevrale tilpasninger** (kraftutvikling uten muskelvekst) påvirkes mindre.
- **Eksplosiv styrke** ser ut til å påvirkes minst av utholdenhetstrening.`,
    },
    {
      id: 'tr2-4-5-text-3',
      type: 'text',
      title: 'Strategier for å minimere interferens',
      content: `Med riktig planlegging kan utovere trene bade styrke og utholdenhet effektivt. Her er de viktigste strategiene:

**1. Separer oktene i tid:**
Legg styrke- og utholdenhetsokter på ulike tidspunkt med minst 6-8 timers mellomrom, eller helst på ulike dager.

**2. Prioriter treningsrekkefolge:**
Tren den egenskapen som er viktigst for idretten forst i okten eller tidlig på dagen. Hvis styrke er prioritet, tren styrke om morgenen og utholdenhet om kvelden.

**3. Velg riktig type utholdenhetstrening:**
Sykling gir mindre interferens enn loping for underkroppsstyrke. Bruk lav-impact modaliteter for utholdenhetstrening der det er mulig.

**4. Kontroller volumet:**
Hold utholdenhetsvolumet så lavt som mulig for å oppnå ønsket effekt. Polarisert trening (mye lavintensitet, lite moderat, noe hoyintensitet) kan gi god aerob utvikling med begrenset interferens.

**5. Tilpass ernæringen:**
Sikre tilstrekkelig proteininntak (1,6-2,2 g/kg/dag) og totalt kaloriinntak. Underskudd på energi og protein forsterker interferenseffekten. Innta protein etter styrketrening for å maksimere proteinsyntesen.

**6. Periodiser treningsfokus:**
Bruk blokkperiodisering der styrke og utholdenhet vektlegges i ulike perioder. For eksempel kan en utover ha en 4-ukers styrkeblokk med vedlikeholdsutholdenhet, fulgt av en 4-ukers utholdenhetsblokk med vedlikeholdsstyrke.

**7. Prioriter sovn og restitusjon:**
Kombinert trening krever mer restitusjon. Sikre 7-9 timer sovn per natt og planlegg restitusjonsokter.`,
    },
    {
      id: 'tr2-4-5-example-1',
      type: 'example',
      title: 'Eksempel: Ukeplanlegging for å minimere interferens',
      problem: 'En håndballspiller trenger bade styrke og utholdenhet. Sett opp en uke som minimerer interferenseffekten.',
      solution: `**Uke med minimerert interferens:**

| Dag | Morgen | Ettermiddag/kveld |
|-----|--------|-------------------|
| **Mandag** | Styrke underkropp (knebooy, utfall, markdrag) | Håndballtrening (teknisk/taktisk) |
| **Tirsdag** | Rolig jogging/sykling 30 min (lav intensitet) | Håndballtrening (spilltrening) |
| **Onsdag** | Styrke overkropp og core | Hvile eller lett bevegelighet |
| **Torsdag** | Hurtighet/spenst (kort, eksplosiv) | Håndballtrening (kampforberedelse) |
| **Fredag** | Styrke underkropp (eksplosiv fokus) | Hvile |
| **Lordag** | Kamp | - |
| **Sondag** | Hvile/restitusjon | - |

**Prinsipper brukt:**
- Styrke trenes om morgenen (prioritert), håndball om ettermiddagen
- Lavintensitets utholdenhet (tirsdag morgen) gir minimal interferens
- Minst 6 timer mellom styrke og hoyintensitetsaktivitet
- Dag for kamp er lett eller fri
- Restitusjon prioriteres etter kamp`,
    },
    {
      id: 'tr2-4-5-def-2',
      type: 'definition',
      title: 'Molekylær interferens',
      content: `Den molekylære interferenshypotesen forklarer hvordan styrke- og utholdenhetstrening kan motarbeide hverandre på cellenivå:

- **mTOR-banen**: Aktiveres av styrketrening, stimulerer proteinsyntese og muskelvekst
- **AMPK-banen**: Aktiveres av utholdenhetstrening, stimulerer mitokondriell biogenese
- **Interferens**: AMPK hemmer mTOR, noe som kan redusere muskelvekst og styrkegevinster

Interferensen er sterkest:
- Når oktene utfores tett i tid (under 6 timer mellom)
- Ved hoyt utholdenhetsvolum
- Når utholdenhetstreningen er lopbasert (mye eksentrisk belastning)
- Når målet er hypertrofi (muskelvekst)`,
    },
    {
      id: 'tr2-4-5-note-1',
      type: 'note',
      title: 'Interferens er ikke alltid negativt',
      content: `For mange idrettsutovere er det viktigere å ha et godt nivå av bade styrke og utholdenhet enn å maksimere en av dem. En fotballspiller trenger ikke å være like sterk som en vektlofter eller ha like hoy VO2maks som en langrennsutover. Concurrent training er nødvendig for de fleste idrettsutovere, og interferenseffekten er sjelden så stor at den gjor kombinasjonen kontraproduktiv. Med god planlegging kan utovere oppnå betydelige forbedringer i bade styrke og utholdenhet samtidig.`,
    },
    {
      id: 'tr2-4-5-tip-1',
      type: 'tip',
      title: 'Tommelfingerregel for kombinasjonstrening',
      content: `En enkel tommelfingerregel: Tren det viktigste forst, og legg det minst viktige lengst unna. Hvis styrke er hovedprioritet, tren styrke tidlig på dagen eller tidlig i uken. Legg utholdenhetsarbeidet til ettermiddagen eller andre dager. Og husk at ernæring og sovn er ekstra viktig når du trener bade styrke og utholdenhet.`,
    },
    {
      id: 'tr2-4-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr2-4-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva menes med interferenseffekten i concurrent training?',
        options: [
          'At styrketrening og utholdenhetstrening alltid forsterker hverandre',
          'At utholdenhetstrening kan hemme styrkegevinster når de trenes samtidig',
          'At styrketrening aldri bor kombineres med utholdenhetstrening',
          'At bare veltrente utovere kan trene bade styrke og utholdenhet',
        ],
        answer: 1,
        solution: 'Interferenseffekten beskriver fenomenet der utholdenhetstrening kan hemme tilpasningene fra styrketrening (og omvendt) når de trenes i samme program. Spesielt kan AMPK (aktivert av utholdenhet) hemme mTOR (som driver muskelvekst), noe som reduserer styrke- og hypertrofigevinster.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr2-4-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr2-4-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken type utholdenhetstrening gir vanligvis minst interferens med styrketrening for underkroppen?',
        options: [
          'Lang, intensiv loping',
          'Sykling',
          'Terrengløping med mye motbakke',
          'Trappeloping',
        ],
        answer: 1,
        solution: 'Sykling gir vanligvis minst interferens med styrketrening for underkroppen. Dette skyldes at sykling har minimalt eksentrisk muskelarbeid sammenlignet med loping, og forårsaker derfor mindre muskelskade som kan hemme styrketilpasninger.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr2-4-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr2-4-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar de molekylære mekanismene bak interferenseffekten ved å beskrive mTOR- og AMPK-banene og hvordan de påvirker hverandre.',
        solution: 'Styrketrening aktiverer mTOR (mammalian target of rapamycin), en signalvei som stimulerer proteinsyntese og muskelvekst. mTOR-aktivering forer til okt bygging av nye muskelproteiner og dermed hypertrofi. Utholdenhetstrening aktiverer AMPK (AMP-aktivert proteinkinase), en signalvei som stimulerer mitokondriell biogenese og aerobe tilpasninger. AMPK registrerer energistatus i cellen og aktiveres når energinivåene er lave (mye AMP i forhold til ATP). Interferensen oppstår fordi AMPK kan hemme mTOR-aktiviteten direkte. Når utholdenhetstrening aktiverer AMPK, kan dette dempe det anabole signalet fra styrketreningen, slik at proteinsyntesen og muskelveksten reduseres. Konsekvensen er at kombinert trening kan gi svakere hypertrofi enn styrketrening alene, spesielt når oktene legges nær hverandre i tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-4-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr2-4-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv minst fire strategier for å minimere interferenseffekten, og forklar mekanismen bak hver strategi.',
        solution: '1) Separer oktene i tid (minst 6-8 timer mellom): Gir mTOR-signalet tid til å virke uten at AMPK hemmer det. Proteinsyntesen er hoyest de forste timene etter styrketrening, og om AMPK-aktivering fra utholdenhet kommer etter dette vinduet, reduseres interferensen. 2) Tren styrke forst i kombinasjonsokter: mTOR-aktiveringen fra styrketrening er sterkest rett etter okten. Ved å trene styrke forst, får du det meste av det anabole signalet for utholdenhetstreningen aktiverer AMPK. 3) Velg sykling over loping: Loping gir mer eksentrisk muskelskade som krever restitusjon og hemmer styrketilpasninger. Sykling har minimal eksentrisk komponent og gir derfor mindre interferens. 4) Sikre tilstrekkelig energiinntak og protein: Kaloriunderskudd forsterker AMPK-aktivering og hemmer mTOR ytterligere. Tilstrekkelig protein (1,6-2,2 g/kg/dag) sikrer byggestoff for proteinsyntese. 5) Kontroller utholdenhetsvolum: Lavere volum gir svakere AMPK-signal og dermed mindre interferens.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-4-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr2-4-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor eksplosiv styrke ser ut til å være mindre sårbar for interferenseffekten enn hypertrofi.',
        solution: 'Hypertrofi avhenger av mTOR-aktivert proteinsyntese som bygger nye muskelproteiner og oker muskelmasse. Denne prosessen er direkte sårbar for AMPK-hemming. Eksplosiv styrke avhenger i storre grad av nevrale tilpasninger: okt rekrutteringshastighet av motoriske enheter, bedre intra- og intermuskulær koordinasjon, og okt kraftutviklingshastighet (RFD). Disse nevrale tilpasningene er ikke avhengige av mTOR-banen på samme måte og påvirkes derfor mindre av AMPK-aktivering fra utholdenhetstrening. I tillegg trenes eksplosiv styrke vanligvis med lavere volum og hoyere hastighet, noe som gir et annet treningssignal enn tradisjonell hypertrofitrening. Derfor kan utovere som prioriterer eksplosiv styrke kombinere dette med utholdenhetstrening med mindre tap av treningseffekt enn om de hadde prioritert muskelvekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-4-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr2-4-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En langrennsutover ønsker å forbedre bade VO2maks og maksimal styrke i bein. Lag en 4-ukers treningsplan som tar hensyn til interferenseffekten. Begrunn valg av treningsfordeling, rekkefolge av okter, type utholdenhetstrening og styrkemetoder.',
        solution: 'Besvarelsen bor inneholde: 1) Overordnet strategi: Prioritere utholdenhet (viktigst i langrenn) mens styrke utvikles med minimert interferens. 2) Treningsfordeling per uke: 5-7 utholdenhetsokter (3-4 lavintensitet, 1-2 terskel/intervall), 2-3 styrkeokter. 3) Rekkefolge: Styrkeokter om morgenen, utholdenhetsokter om ettermiddagen, med minst 6-8 timers mellomrom. På rene utholdenhetsdager kan lengre okter legges inn. 4) Type utholdenhet: Hoveddelen som lavintensitetstrening (rolig staving/rulleski), med noen hoyintensitetsintervaller. Bruk rulleski, sykling eller romaskin fremfor loping for å redusere eksentrisk belastning. 5) Styrkemetoder: Tunge ovelser (knebooy, markdrag, ettbeins ovelser) i 3-5 RM-sonen for å prioritere nevrale tilpasninger fremfor hypertrofi. Eventuelt plyometrisk trening for eksplosivitet. 6) Progresjon over 4 uker: Gradvis okning av styrkebelastning og utholdenhetsvolum de forste 3 ukene, redusert belastning i uke 4 (restitusjonsuke). 7) Ernæring: Sikre tilstrekkelig energiinntak og 1,6-2,0 g protein per kg per dag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Eksport av alle kapitler i Seksjon 4
// ============================================================================

export const TRENING_2_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TRENING_2_4_1,
  CHAPTER_TRENING_2_4_2,
  CHAPTER_TRENING_2_4_3,
  CHAPTER_TRENING_2_4_4,
  CHAPTER_TRENING_2_4_5,
];
