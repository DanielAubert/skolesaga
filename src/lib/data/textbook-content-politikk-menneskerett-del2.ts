/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Politikk og menneskerettigheter (VG2/VG3)
 *
 * Seksjon 2: Styreformer og politiske systemer (Kapittel 2.1–2.6)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 2.1 – Demokrati som styreform
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_2_1: TextbookChapter = {
  id: 'politikk-menneskerett-2-1',
  courseId: 'politikk-menneskerett',
  chapterNumber: '2.1',
  title: 'Demokrati som styreform',
  description: 'Utforsk demokratiets kjennetegn, forutsetninger og ulike former for demokratisk styring.',
  estimatedMinutes: 45,
  prevChapter: 'politikk-menneskerett-1-6',
  nextChapter: 'politikk-menneskerett-2-2',
  competenceGoals: [
    'gjore rede for demokratiets kjennetegn og forutsetninger',
    'sammenligne direkte og representativt demokrati',
  ],
  exercises: [],
  keyTerms: [
    { term: 'Demokrati', definition: 'Styreform der folket har den overste makten, enten direkte eller gjennom valgte representanter. Fra gresk demos (folk) og kratos (styre).' },
    { term: 'Direkte demokrati', definition: 'Demokratiform der borgerne selv stemmer over lover og politiske vedtak, uten mellomledd av representanter.' },
    { term: 'Representativt demokrati', definition: 'Demokratiform der borgerne velger representanter som fatter beslutninger pa deres vegne, typisk gjennom parlamentsvalg.' },
    { term: 'Folkestyre', definition: 'Norsk betegnelse for demokrati. Innebarer at politisk makt springer ut fra folkeviljen, uttrykt gjennom frie valg.' },
    { term: 'Rettsstat', definition: 'En stat der makten er bundet av lover, og der borgernes rettigheter er beskyttet gjennom uavhengige domstoler og rettssikkerhet.' },
    { term: 'Pluralisme', definition: 'Prinsippet om at et mangfold av meninger, interesser og organisasjoner er onskelig og nodvendig i et demokrati.' },
    { term: 'Konstitusjonelt demokrati', definition: 'Demokrati der grunnloven setter rammer for flertallets makt og beskytter minoriteters rettigheter.' },
  ],
  content: [
    {
      id: 'pm-2-1-intro',
      type: 'text',
      content: `## Demokrati som styreform

Demokrati er i dag den mest utbredte styreformen i verden, men det har ikke alltid vaert slik. Gjennom storstedelen av menneskehetens historie har folk vaert styrt av konger, keisere, hoyprester eller militaerledere. Demokratiet slik vi kjenner det, er et relativt nytt fenomen som har utviklet seg gradvis over flere hundre ar.

Ordet demokrati kommer fra gresk og betyr folkestyre – av demos (folk) og kratos (styre eller makt). Men hva innebarer det egentlig at folket styrer? Betyr det at alle skal bestemme alt? Eller holder det at vi velger noen til a bestemme for oss? Og hva skjer nar flertallet vil noe som gar ut over mindretallet?

I dette kapittelet skal vi se naermere pa hva demokrati er, hvilke former det kan ta, og hvilke forutsetninger som ma vaere pa plass for at et demokrati skal fungere.`,
    },
    {
      id: 'pm-2-1-def-1',
      type: 'definition',
      title: 'Demokrati',
      content: `**Demokrati** er en styreform der den politiske makten utgaar fra folket. I et demokrati har borgerne rett til a delta i politiske beslutningsprosesser, enten direkte eller gjennom valgte representanter.

Sentrale kjennetegn ved et demokrati:
- **Frie og rettferdige valg** med allmenn stemmerett
- **Ytringsfrihet** og pressefrihet
- **Organisasjonsfrihet** og rett til a danne politiske partier
- **Rettssikkerhet** og uavhengige domstoler
- **Maktfordeling** mellom lovgivende, utovende og dommende makt
- **Mindretallsvern** – flertallets makt er begrenset av grunnleggende rettigheter`,
    },
    {
      id: 'pm-2-1-text-1',
      type: 'text',
      content: `## Demokratiets historiske roetter

Demokratiets historie begynner i antikkens Aten rundt 500 f.Kr. Det athenske demokratiet var et direkte demokrati der mannlige borgere over 20 ar motte i folkeforsamlingen (ekklesia) for a stemme over lover og viktige beslutninger. Kvinner, slaver og utlendinger var utelukket – sa det athenske demokratiet var langt fra et folkestyre i moderne forstand.

Etter antikken levde demokratiske ideer videre i begrenset form. I middelalderen fantes det folkeforsamlinger i skandinaviske land (ting), og den engelske Magna Carta fra 1215 la grunnlaget for tanken om at selv kongen var bundet av loven.

Den moderne demokratiske tradisjonen vokste fram under opplysningstiden pa 1700-tallet. Tenkere som John Locke, Jean-Jacques Rousseau og Montesquieu utviklet ideer om folkelig suverenitet, samfunnskontrakten og maktfordeling som ble avgjorende for den amerikanske uavhengighetserklaeringen (1776) og den franske revolusjonen (1789).

I Norge markerte Grunnloven av 1814 begynnelsen pa det moderne demokratiet, selv om stemmeretten lenge var begrenset til eiendomsbesittende menn. Allmenn stemmerett for menn kom i 1898, og for kvinner i 1913. Norge var dermed blant de forste landene i verden som innforte full stemmerett for kvinner.`,
    },
    {
      id: 'pm-2-1-text-2',
      type: 'text',
      content: `## Direkte og representativt demokrati

Det finnes to hovedformer for demokrati: direkte demokrati og representativt demokrati.

**Direkte demokrati** innebærer at borgerne selv stemmer over lover og politiske vedtak. Det athenske demokratiet var et direkte demokrati, og i dag finnes det fortsatt elementer av direkte demokrati i Sveits, der befolkningen jevnlig stemmer i folkeavstemninger om konkrete saker. I Norge har vi hatt enkelte folkeavstemninger, som EU-avstemningene i 1972 og 1994, men disse har vaert radgivende, ikke bindende.

**Representativt demokrati** innebarer at borgerne velger representanter som fatter beslutninger pa deres vegne. De fleste moderne demokratier, inkludert Norge, er representative demokratier. Velgerne stemmer ved valg, og de valgte representantene sitter i nasjonalforsamlinger, fylkesting og kommunestyrer.

**Fordeler med direkte demokrati:**
- Hoy grad av folkelig deltakelse
- Beslutningene har sterk demokratisk legitimitet
- Borgerne engasjerer seg mer i politikk

**Utfordringer med direkte demokrati:**
- Tidkrevende og lite praktisk i store samfunn
- Krever hoyt kunnskapsniva hos alle borgere
- Risiko for at flertallet overser mindretallsrettigheter
- Komplekse saker er vanskelige a redusere til ja/nei-sporsmal

**Fordeler med representativt demokrati:**
- Mer effektivt i store og komplekse samfunn
- Representantene kan spesialisere seg pa ulike saksfelt
- Gir rom for forhandlinger og kompromisser
- Grunnlovsfestede rettigheter beskytter minoriteter

De fleste moderne demokratier kombinerer elementer av begge formene. I Norge har vi for eksempel innbyggerinitiativ i kommunene, der innbyggere kan kreve at en sak behandles av kommunestyret.`,
    },
    {
      id: 'pm-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Folkeavstemninger i Norge',
      problem: 'Hvilke erfaringer har Norge med direkte demokrati gjennom folkeavstemninger?',
      solution: `Norge har gjennomfort seks nasjonale folkeavstemninger:

1. **1905** – Unionsopplosningen med Sverige (99,95 % for opplosning)
2. **1905** – Statsform – monarki eller republikk (78,9 % for monarki)
3. **1919** – Forbud mot brennevin (61,6 % for forbud)
4. **1926** – Opphevelse av brennevinsforbudet (55,8 % for opphevelse)
5. **1972** – EF-medlemskap (53,5 % mot)
6. **1994** – EU-medlemskap (52,2 % mot)

Alle disse folkeavstemningene har vaert radgivende, ikke juridisk bindende. Stortinget har likevel fulgt resultatet i samtlige tilfeller. EU-avstemningene viser at direkte demokrati kan gi andre resultater enn det det politiske flertallet pa Stortinget onsker – i begge tilfellene var et flertall pa Stortinget for medlemskap, men folket sa nei.

Dette reiser viktige sporsmal om forholdet mellom direkte og representativt demokrati: Bor folket ha det siste ordet i viktige saker, eller bor de valgte representantene bestemme?`,
    },
    {
      id: 'pm-2-1-text-3',
      type: 'text',
      content: `## Demokratiets forutsetninger

Et velfungerende demokrati krever mer enn bare valg. Statsviterne har identifisert en rekke forutsetninger som ma vaere oppfylt for at demokratiet skal fungere:

**1. Rettsstaten**
Makten ma vaere bundet av lover, og borgernes rettigheter ma vaere beskyttet gjennom uavhengige domstoler. Ingen – heller ikke flertallet – star over loven.

**2. Maktfordeling**
Montesquieu argumenterte for at makten ma fordeles mellom lovgivende, utovende og dommende institusjoner. Nar makten er konsentrert hos en person eller gruppe, er veien kort til maktmisbruk.

**3. Ytringsfrihet og pressefrihet**
Borgerne ma fritt kunne uttrykke sine meninger, og media ma kunne granske makthaverne uten frykt for represalier. En fri presse er demokratiets vaktbikkje.

**4. Organisasjonsfrihet**
Borgerne ma ha rett til a organisere seg i partier, fagforeninger og interesseorganisasjoner. Politisk konkurranse mellom flere partier er avgjorende.

**5. Allmenn stemmerett**
Alle voksne borgere ma ha lik rett til a stemme ved valg, uavhengig av kjonn, etnisitet, religion eller okonomisk status.

**6. Politisk kultur**
Demokratiet krever en kultur preget av toleranse, kompromissvilje og respekt for andres meninger. Demokratisk deltakelse forutsetter at borgerne er villige til a akseptere utfallet av demokratiske prosesser, ogsa nar de selv taper.

**7. Utdanning og opplysning**
Borgerne ma ha tilgang til utdanning og informasjon for a kunne delta i demokratiet pa en meningsfull mate.`,
    },
    {
      id: 'pm-2-1-note-1',
      type: 'note',
      title: 'Demokrati og menneskerettigheter',
      content: `Demokrati og menneskerettigheter henger tett sammen, men de er ikke det samme. Demokrati handler om hvem som bestemmer (folket), mens menneskerettigheter handler om hva som ikke kan bestemmes (grunnleggende rettigheter). Et rent flertallsdemokrati uten rettighetsgarantier kan bli et «flertallets tyranni» der majoriteten undertrykkker minoritetene. Derfor har de fleste moderne demokratier et konstitusjonelt rammeverk som beskytter individuelle rettigheter mot flertallets vilje.`,
    },
    {
      id: 'pm-2-1-text-4',
      type: 'text',
      content: `## Demokratiets utfordringer i dag

Selv etablerte demokratier star overfor betydelige utfordringer i var tid:

**Synkende valgdeltakelse:** I mange vestlige land har valgdeltakelsen sunket over tid. I Norge var valgdeltakelsen ved kommunevalget i 2023 pa rundt 63 prosent, noe som betyr at over en tredjedel av de stemmeberettigede lot vaere a stemme. Lavere valgdeltakelse svekker demokratiets legitimitet.

**Polarisering:** Okende politisk polarisering truer evnen til kompromiss og dialog. Nar politiske motstandere ses som fiender i stedet for meningsmotstander, erodering grunnlaget for demokratisk sameksistens.

**Desinformasjon og falske nyheter:** Spredning av feilinformasjon, sarlig gjennom sosiale medier, undergraver den informerte offentlige debatten som demokratiet avhenger av. Nar borgere lever i ulike «informasjonsbobler», blir det vanskeligere a finne felles grunn.

**Okonomisk ulikhet:** Stor okonomisk ulikhet kan undergrave det politiske likhetsidealet. Nar noen har mye storre ressurser til a pavirke politikken enn andre, blir demokratiet mindre reelt.

**Populisme og demokratisk tilbakegang:** Populistiske bevegelser som utfordrer demokratiske institusjoner og normer, har fatt okende oppslutning i mange land. Noen ledere bruker demokratiske valg til a konsentrere makt og svekke maktfordelingen.

**Teknologi og overvaking:** Ny teknologi gir myndighetene mulighet til a overvake borgerne pa mate som kan true personvernet og den demokratiske friheten.

Disse utfordringene viser at demokratiet ikke er noe vi kan ta for gitt – det ma stadig forsvares, fornyes og tilpasses nye forhold.`,
    },
    {
      id: 'pm-2-1-text-5',
      type: 'text',
      title: 'Oppsummering',
      content: `Demokrati betyr folkestyre og innebarer at den politiske makten utgaar fra folket. Det finnes to hovedformer: direkte demokrati, der borgerne selv stemmer over vedtak, og representativt demokrati, der borgerne velger representanter. De fleste moderne demokratier, inkludert Norge, er representative demokratier med innslag av direkte demokrati. Et velfungerende demokrati krever rettsstaten, maktfordeling, ytringsfrihet, organisasjonsfrihet, allmenn stemmerett, demokratisk politisk kultur og utdanning. Selv etablerte demokratier star overfor utfordringer som synkende valgdeltakelse, polarisering, desinformasjon og populisme.`,
    },
    {
      id: 'pm-2-1-exercise-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 1',
      content: 'Hva betyr ordet demokrati?',
      options: [
        'Statsstyre – styring av staten',
        'Folkestyre – at folket har den overste makten',
        'Lovstyre – at lovene bestemmer',
        'Elitestyre – at de beste bestemmer',
      ],
      correctAnswer: 1,
      explanation: 'Demokrati kommer fra gresk demos (folk) og kratos (styre/makt), og betyr folkestyre. Det innebarer at den politiske makten utgaar fra folket, enten direkte eller gjennom valgte representanter.',
    },
    {
      id: 'pm-2-1-exercise-2',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 2',
      content: 'Hvilken av folgende er IKKE en forutsetning for et velfungerende demokrati?',
      options: [
        'Ytringsfrihet og pressefrihet',
        'Maktfordeling mellom statsorganene',
        'At alle borgere er enige om politikken',
        'Uavhengige domstoler og rettssikkerhet',
      ],
      correctAnswer: 2,
      explanation: 'At alle borgere er enige om politikken er ikke en forutsetning for demokrati – tvert imot er uenighet og politisk debatt en naturlig del av demokratiet. Forutsetningene inkluderer ytringsfrihet, maktfordeling og rettssikkerhet.',
    },
    {
      id: 'pm-2-1-exercise-3',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 3',
      content: 'Forklar forskjellen mellom direkte og representativt demokrati. Gi eksempler pa begge fra norsk politikk, og diskuter fordeler og ulemper ved hver form.',
    },
    {
      id: 'pm-2-1-exercise-4',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 4',
      content: 'Nar fikk kvinner full stemmerett i Norge?',
      options: [
        '1814',
        '1898',
        '1913',
        '1945',
      ],
      correctAnswer: 2,
      explanation: 'Kvinner fikk full stemmerett i Norge i 1913. Allmenn stemmerett for menn kom i 1898. Norge var blant de forste landene i verden som innforte full stemmerett for kvinner.',
    },
    {
      id: 'pm-2-1-exercise-5',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 5',
      content: 'Diskuter: Hvilke av demokratiets utfordringer (synkende valgdeltakelse, polarisering, desinformasjon, okonomisk ulikhet, populisme) mener du er den storste trusselen mot demokratiet i Norge i dag? Begrunn svaret ditt.',
    },
    {
      id: 'pm-2-1-exercise-6',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 6',
      content: 'Hva menes med konstitusjonelt demokrati?',
      options: [
        'Et demokrati der grunnloven beskytter mindretallsrettigheter og begrenser flertallets makt',
        'Et demokrati der kongen har den reelle makten',
        'Et demokrati som bare finnes i grunnloven, men ikke i praksis',
        'Et demokrati der domstolene bestemmer all politikk',
      ],
      correctAnswer: 0,
      explanation: 'Et konstitusjonelt demokrati er et demokrati der grunnloven setter rammer for flertallets makt og beskytter grunnleggende rettigheter. Dette hindrer det som kalles flertallets tyranni, der majoriteten overkjorer minoriteters rettigheter.',
    },
  ],
};

// ============================================================================
// KAPITTEL 2.2 – Det norske politiske systemet
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_2_2: TextbookChapter = {
  id: 'politikk-menneskerett-2-2',
  courseId: 'politikk-menneskerett',
  chapterNumber: '2.2',
  title: 'Det norske politiske systemet',
  description: 'Forsta hovedtrekkene i det norske politiske systemet, maktfordelingen og parlamentarismens rolle.',
  estimatedMinutes: 50,
  prevChapter: 'politikk-menneskerett-2-1',
  nextChapter: 'politikk-menneskerett-2-3',
  competenceGoals: [
    'gjore rede for hovedtrekkene i det norske politiske systemet',
    'analysere forholdet mellom storting, regjering og domstolene',
  ],
  exercises: [],
  keyTerms: [
    { term: 'Parlamentarisme', definition: 'Styringsprinsipp der regjeringen er avhengig av Stortingets tillit. Regjeringen ma ga av dersom Stortinget vedtar et mistillitsforslag.' },
    { term: 'Maktfordelingsprinsippet', definition: 'Prinsippet om at statsmakten deles mellom lovgivende (Stortinget), utovende (regjeringen) og dommende makt (domstolene) for a hindre maktmisbruk.' },
    { term: 'Grunnloven', definition: 'Norges konstitusjon fra 1814. Den overordnede loven som fastsetter statens styreform, borgernes grunnleggende rettigheter og maktfordelingen mellom statsmaktene.' },
    { term: 'Konstitusjonelt monarki', definition: 'Styreform der monarken er statsoverhode, men der den reelle makten ligger hos folkevalgte organer. Kongens makt er begrenset av grunnloven.' },
    { term: 'Mindretallsregjering', definition: 'En regjering som ikke har flertall bak seg i Stortinget, og som derfor ma soke stotte fra andre partier for a fa vedtatt sin politikk.' },
    { term: 'Flertallsregjering', definition: 'En regjering som har stotte fra partier som til sammen har flertall pa Stortinget, noe som gir mer stabil styring.' },
    { term: 'Mistillitsvotum', definition: 'Stortingsvedtak som utrykker at regjeringen eller en statsrad ikke lenger har Stortingets tillit. Regjeringen plikter da a ga av.' },
  ],
  content: [
    {
      id: 'pm-2-2-intro',
      type: 'text',
      content: `## Det norske politiske systemet

Norge er et konstitusjonelt monarki med et parlamentarisk styresett. Det betyr at kongen er statsoverhode, men at den reelle politiske makten ligger hos Stortinget og regjeringen. Det norske politiske systemet bygger pa tre grunnpilarer: Grunnloven fra 1814, parlamentarismen som ble innfort i 1884, og et flerpartisystem med proporsjonal representasjon.

Det norske systemet kjennetegnes av maktfordeling mellom tre statsorganer: Stortinget (lovgivende makt), regjeringen (utovende makt) og domstolene (dommende makt). Denne tredelingen bygger pa ideene til den franske opplysningstenkeren Montesquieu, som mente at maktfordeling var det beste vernet mot tyranni.

I dette kapittelet skal vi se naermere pa hvordan det norske politiske systemet er bygd opp, og hvordan de ulike statsorganene samspiller.`,
    },
    {
      id: 'pm-2-2-def-1',
      type: 'definition',
      title: 'Parlamentarisme',
      content: `**Parlamentarisme** er et styringsprinsipp der regjeringen er avhengig av nasjonalforsamlingens (Stortingets) tillit. Det innebarer:

1. **Regjeringen kan ikke sitte mot Stortingets vilje** – dersom Stortinget vedtar et mistillitsforslag, ma regjeringen ga av
2. **Regjeringen utgaar normalt fra stortingsflertallet** – etter valg dannes regjeringen av det partiet eller den koalisjonen som har flertall, eller som i det minste tolereres av flertallet
3. **Regjeringen har ansvar overfor Stortinget** – statsradene ma svare pa sporsmal og redegjore for sin politikk

Parlamentarismen ble innfort i Norge i 1884, da Stortinget tvang gjennom prinsippet om at regjeringen (den gang Kongens rad) matte ha Stortingets tillit. Dette markerte overgangen fra embetsmannsstaten til folkestyret.`,
    },
    {
      id: 'pm-2-2-text-1',
      type: 'text',
      content: `## Grunnloven – Norges overordnede lov

Norges Grunnlov ble vedtatt pa Eidsvoll 17. mai 1814 og er en av verdens eldste grunnlover som fortsatt er i bruk. Grunnloven fastsetter:

**Statsform og styresett:**
Paragraf 1 slar fast at Norge er et «fritt, selvstendig, udelelig og uavhendelig rike», og paragraf 2 fastlegger verdigrunnlaget: «Verdigrunnlaget forblir var kristne og humanistiske arv.»

**Maktfordelingen:**
- **Stortinget** (§§ 49–85): Lovgivende makt
- **Kongen og regjeringen** (§§ 3–48): Utovende makt
- **Domstolene** (§§ 86–91): Dommende makt

**Menneskerettigheter:**
Grunnloven ble betydelig utvidet i 2014, da et nytt kapittel E om menneskerettigheter ble innfort. Her grunnlovsfestes blant annet ytringsfrihet, religionsfrihet, rett til utdanning og barns rettigheter.

**Endring av Grunnloven:**
Grunnloven er vanskeligere a endre enn vanlige lover. Et grunnlovsforslag ma fremmes i en stortingsperiode og vedtas i den neste, med to tredjedels flertall. Dette sikrer at grunnleggende rettigheter og prinsipper ikke endres i et oveblikks innfall.`,
    },
    {
      id: 'pm-2-2-text-2',
      type: 'text',
      content: `## Maktfordelingen i praksis

Selv om Grunnloven fastsetter en tredeling av makten, er det norske systemet i praksis preget av et tett samspill mellom Stortinget og regjeringen.

**Stortingets rolle:**
Stortinget er Norges nasjonalforsamling og det overste folkevalgte organet. De 169 representantene velges hvert fjerde ar gjennom forholdstallsvalg. Stortingets hovedoppgaver er a:
- Vedta lover
- Bevilge penger gjennom statsbudsjettet
- Kontrollere regjeringens arbeid

**Regjeringens rolle:**
Regjeringen ledes av statsministeren og bestar av statsrader (ministre) med ansvar for hvert sitt departement. Regjeringens hovedoppgaver er a:
- Forberede og fremme lovforslag for Stortinget
- Gjennomfore Stortingets vedtak
- Lede den daglige styringen av landet
- Representere Norge utenrikspolitisk

**Domstolenes rolle:**
Domstolene er uavhengige av Stortinget og regjeringen. De tolker og anvender lovene, og kan i ytterste konsekvens prove om lover vedtatt av Stortinget er i strid med Grunnloven (domstolenes provingsrett). Hoyesterett er den overste domstolen i Norge.

**Kongens rolle:**
I praksis har kongen i dag en seremoniell rolle. Han apner Stortinget, leder statsrad og representerer Norge ved offisielle anledninger. Grunnloven gir formelt kongen betydelig makt, men gjennom konstitusjonell sedvane utoves denne makten av regjeringen.`,
    },
    {
      id: 'pm-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Mindretallsregjering i Norge',
      problem: 'Hvorfor har Norge sa ofte mindretallsregjeringer, og hvilke konsekvenser har det?',
      solution: `Norge har et flerpartisystem med mange partier representert pa Stortinget, noe som gjor det vanskelig for ett parti a fa rent flertall. Siden 1961 har de fleste norske regjeringene vaert mindretallsregjeringer.

**Eksempel: Regjeringen Solberg (2013–2021)**
Erna Solbergs regjering besto opprinnelig av Hoyre og Fremskrittspartiet, som til sammen hadde 77 av 169 mandater – langt fra flertall. Regjeringen var avhengig av stotte fra Kristelig Folkeparti og Venstre for a fa gjennomslag. Senere gikk Venstre (2018) og KrF (2019) inn i regjeringen, mens FrP gikk ut i 2020.

**Konsekvenser av mindretallsregjering:**
- Regjeringen ma forhandle med andre partier for hvert forslag
- Det gir opposisjonen storre innflytelse
- Politikken blir ofte preget av kompromisser
- Det kan gi mer ustabil styring, men sikrer bredere forankring

Mindretallsregjeringer tvinger partiene til a samarbeide pa tvers av politiske skillelinjer, noe som mange mener er en styrke ved det norske demokratiet.`,
    },
    {
      id: 'pm-2-2-text-3',
      type: 'text',
      content: `## Flerpartisystemet

Norge har et flerpartisystem med ni partier representert pa Stortinget etter valget i 2021. Partiene kan grovt plasseres pa en hoyre-venstre-akse etter okonomisk politikk:

**Venstresiden:**
- **Rodt** (R): Sosialistisk parti, mot kapitalisme
- **Sosialistisk Venstreparti** (SV): Sosialdemokratisk/sosialistisk
- **Arbeiderpartiet** (Ap): Sosialdemokratisk, Norges tradisjonelt storste parti

**Sentrum:**
- **Senterpartiet** (Sp): Distriktspolitikk, EU-motstand
- **Kristelig Folkeparti** (KrF): Kristendemokratisk
- **Venstre** (V): Sosialliberalt

**Hoyresiden:**
- **Hoyre** (H): Konservativt, markedsliberalt
- **Fremskrittspartiet** (FrP): Hoyreplibertaert/populistisk

**Miljopartiet De Gronne** (MDG) passer ikke like godt inn pa hoyre-venstre-aksen, da partiets hovedsak er miljopolitikk.

Det norske flerpartisystemet reflekterer de historiske skillelinjene i norsk politikk som statsviteren Stein Rokkan identifiserte: konflikten mellom sentrum og periferi, mellom by og land, mellom arbeid og kapital, og mellom stat og kirke. Disse skillelinjene har formet partilandskapet fra 1800-tallet og fremover.`,
    },
    {
      id: 'pm-2-2-text-4',
      type: 'text',
      content: `## Valgsystemet

Norge bruker forholdstallsvalg (proporsjonal representasjon), som betyr at partienes mandater pa Stortinget gjenspeiler stemmeandelen sa godt som mulig. Dette skiller seg fra flertallsvalg (som i Storbritannia og USA), der kandidaten med flest stemmer i hvert valgdistrikt vinner.

**Stortingsvalg:**
- Holdes hvert fjerde ar (i september)
- 169 representanter velges fra 19 valgdistrikter (fylkene)
- 150 distriktsmandater fordeles etter stemmeandelen i hvert fylke
- 19 utjevningsmandater fordeles for a sikre bedre nasjonal proporsjonalitet
- Sperregrensen er 4 prosent for a fa utjevningsmandater

**Kommunevalg og fylkestingsvalg:**
- Holdes hvert fjerde ar (i september, to ar etter stortingsvalget)
- Velger representanter til kommunestyrer og fylkesting
- Ogsa forholdstallsvalg, men uten utjevningsmandater

Forholdstallsvalg gir et mer representativt demokrati, der ogsa mindre partier far stortingsmandater. Ulempen er at det sjelden gir ett parti rent flertall, noe som forer til koalisjonsregjeringer eller mindretallsregjeringer.`,
    },
    {
      id: 'pm-2-2-text-5',
      type: 'text',
      title: 'Oppsummering',
      content: `Norge er et konstitusjonelt monarki med et parlamentarisk styresett. Grunnloven fra 1814 fastsetter maktfordelingen mellom Stortinget (lovgivende), regjeringen (utovende) og domstolene (dommende). Parlamentarismen, innfort i 1884, betyr at regjeringen ma ha Stortingets tillit. Flerpartisystemet forer ofte til mindretallsregjeringer som ma forhandle med opposisjonen. Valgsystemet med forholdstallsvalg sikrer at partienes mandater gjenspeiler stemmeandelen.`,
    },
    {
      id: 'pm-2-2-exercise-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 1',
      content: 'Hva innebarer parlamentarisme?',
      options: [
        'At parlamentet (Stortinget) velger president',
        'At regjeringen er avhengig av Stortingets tillit og ma ga av ved mistillitsvotum',
        'At domstolene kontrollerer Stortinget',
        'At kongen utpeker regjeringen uten hensyn til Stortinget',
      ],
      correctAnswer: 1,
      explanation: 'Parlamentarisme innebarer at regjeringen er avhengig av nasjonalforsamlingens tillit. I Norge betyr dette at regjeringen ma ga av dersom Stortinget vedtar et mistillitsforslag. Prinsippet ble innfort i Norge i 1884.',
    },
    {
      id: 'pm-2-2-exercise-2',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 2',
      content: 'Hvor mange representanter sitter pa Stortinget?',
      options: [
        '150',
        '169',
        '200',
        '101',
      ],
      correctAnswer: 1,
      explanation: 'Stortinget har 169 representanter: 150 distriktsmandater fordelt pa 19 valgdistrikter, pluss 19 utjevningsmandater (ett fra hvert distrikt) som sikrer bedre nasjonal proporsjonalitet.',
    },
    {
      id: 'pm-2-2-exercise-3',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 3',
      content: 'Forklar maktfordelingsprinsippet i det norske politiske systemet. Beskriv de tre statsmaktene og gi eksempler pa hvordan de kontrollerer hverandre.',
    },
    {
      id: 'pm-2-2-exercise-4',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 4',
      content: 'Diskuter fordeler og ulemper ved mindretallsregjeringer sammenlignet med flertallsregjeringer. Bruk eksempler fra nyere norsk politikk.',
    },
    {
      id: 'pm-2-2-exercise-5',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 5',
      content: 'Hva er sperregrensen for a fa utjevningsmandater pa Stortinget?',
      options: [
        '2 prosent',
        '3 prosent',
        '4 prosent',
        '5 prosent',
      ],
      correctAnswer: 2,
      explanation: 'Sperregrensen for utjevningsmandater pa Stortinget er 4 prosent. Partier som far under 4 prosent av stemmene nasjonalt, far ikke utjevningsmandater, men kan likevel fa distriktsmandater dersom de har nok stemmer i et enkelt valgdistrikt.',
    },
    {
      id: 'pm-2-2-exercise-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 6',
      content: 'Plasser de norske partiene pa en hoyre-venstre-akse. Velg to partier og forklar de viktigste forskjellene i politikken deres.',
    },
  ],
};

// ============================================================================
// KAPITTEL 2.3 – Stortinget og lovgivningsprosessen
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_2_3: TextbookChapter = {
  id: 'politikk-menneskerett-2-3',
  courseId: 'politikk-menneskerett',
  chapterNumber: '2.3',
  title: 'Stortinget og lovgivningsprosessen',
  description: 'Forsta Stortingets rolle, oppbygning og hvordan lover blir til i Norge.',
  estimatedMinutes: 45,
  prevChapter: 'politikk-menneskerett-2-2',
  nextChapter: 'politikk-menneskerett-2-4',
  competenceGoals: [
    'gjore rede for Stortingets oppgaver og arbeidsform',
    'beskrive lovgivningsprosessen fra forslag til vedtak',
  ],
  exercises: [],
  keyTerms: [
    { term: 'Proposisjon', definition: 'Lovforslag eller budsjettforslag som regjeringen fremmer for Stortinget. En proposisjon til Stortinget (Prop. S eller Prop. L) er regjeringens formelle forslag til vedtak.' },
    { term: 'Stortingskomite', definition: 'En fast fagkomite pa Stortinget som forbereder saker innenfor et bestemt omrade for grunnlag for Stortingets behandling. Det finnes 12 faste komiteer.' },
    { term: 'Innstilling', definition: 'Komiteens skriftlige anbefaling til Stortinget etter behandling av en sak. Innstillingen presenterer flertallets og mindretallets syn.' },
    { term: 'Stortingsmelding', definition: 'Dokument der regjeringen informerer Stortinget om sitt arbeid pa et bestemt omrade uten a fremme konkrete lovforslag.' },
    { term: 'Horing', definition: 'Prosess der interesseorganisasjoner, eksperter og bererte parter far uttale seg om lovforslag for Stortinget behandler dem.' },
    { term: 'Representantforslag', definition: 'Lovforslag eller annet forslag fremmet av en eller flere stortingsrepresentanter, til forskjell fra regjeringens proposisjoner (ogsa kalt Dokument 8-forslag).' },
    { term: 'Sanksjon', definition: 'Kongens formelle godkjenning av et lovvedtak fattet av Stortinget. Etter Grunnloven skal kongen sanksjonere alle lover, noe som i praksis er en formalitet.' },
  ],
  content: [
    {
      id: 'pm-2-3-intro',
      type: 'text',
      content: `## Stortinget og lovgivningsprosessen

Stortinget er hjertet i det norske demokratiet. Det er her folkets vilje omsettes til lover, budsjetter og politiske vedtak. Med sine 169 representanter, valgt fra hele landet, er Stortinget det organet som gir det norske demokratiet dets legitimitet.

Men hvordan arbeider Stortinget? Hvordan blir et politisk onske til en lov? Og hvilken rolle spiller komiteene, horingene og debattene i denne prosessen?

I dette kapittelet folger vi en lov fra ide til vedtak, og ser naermere pa Stortingets organisering, arbeidsformer og kontrolloppgaver.`,
    },
    {
      id: 'pm-2-3-text-1',
      type: 'text',
      content: `## Stortingets organisering

Stortinget ledes av stortingspresidenten, som velges blant representantene ved begynnelsen av hver stortingsperiode. Presidenten leder Stortingets forhandlinger og representerer Stortinget utad.

**Stortingets presidium** bestar av stortingspresidenten og fem visepresidenter. Presidiet leder det daglige arbeidet og avgjor praktiske sporsmal om Stortingets drift.

**Fagkomiteene** er kanskje den viktigste delen av Stortingets organisering. Alle saker som behandles i Stortinget, sendes forst til en fagkomite som gjennomgar forslaget grundig. Det finnes 12 faste komiteer:

- Arbeids- og sosialkomiteen
- Energi- og miljokomiteen
- Familie- og kulturkomiteen
- Finanskomiteen
- Helse- og omsorgskomiteen
- Justiskomiteen
- Kommunal- og forvaltningskomiteen
- Kontroll- og konstitusjonskomiteen
- Naerings komiteen
- Transport- og kommunikasjonskomiteen
- Utenriks- og forsvarskomiteen
- Utdannings- og forskningskomiteen

Hver representant sitter i en komite, og komiteene gjenspeiler partienes styrkeforhold pa Stortinget. Komitearbeidet er der mye av det reelle politiske arbeidet skjer – det er her lovforslag diskuteres i detalj, eksperter hores, og kompromisser inngaas.`,
    },
    {
      id: 'pm-2-3-text-2',
      type: 'text',
      content: `## Stortingets oppgaver

Stortinget har fire hovedoppgaver:

**1. Lovgivning**
Stortinget vedtar alle lover i Norge. De fleste lovforslag kommer fra regjeringen i form av proposisjoner, men stortingsrepresentanter kan ogsa fremme egne forslag (representantforslag / Dokument 8-forslag).

**2. Bevilgning**
Stortinget vedtar statsbudsjettet, som bestemmer hvordan statens inntekter skal brukes. Budsjettbehandlingen om hosten er en av Stortingets viktigste oppgaver, og det er her de reelle prioriteringene i politikken synliggjores. Budsjettbehandlingen folger en stram tidsplan fra regjeringen legger fram budsjettet i oktober til det er vedtatt for jul.

**3. Kontroll**
Stortinget kontrollerer regjeringens arbeid gjennom flere mekanismer:
- **Sporretime:** Statsradene svarer pa representantenes sporsmal
- **Interpellasjoner:** Representanter stiller regjeringen sporsmal om viktige saker
- **Kontroll- og konstitusjonskomiteen:** Gransker om regjeringen folger opp Stortingets vedtak
- **Riksrevisjonen:** Kontrollerer at statens midler brukes i trad med Stortingets vedtak
- **Stortingets kontrollkomite** kan kalle inn statsrader og embetsfolk til horing

**4. Stortinget som forum for offentlig debatt**
Gjennom debatter, sporretime og medieoppmerksom bidrar Stortinget til den offentlige samtalen om politikk. Stortingsrepresentantenes innlegg er offentlige og bidrar til transparens i demokratiet.`,
    },
    {
      id: 'pm-2-3-text-3',
      type: 'text',
      content: `## Lovgivningsprosessen steg for steg

Veien fra en ide til en ferdig lov er lang og grundig. Prosessen sikrer at lover er godt gjennomtenkt og har bred forankring:

**Steg 1: Utredning**
Nar regjeringen onsker a endre eller innfore en ny lov, starter prosessen ofte med en utredning. Et utvalg av eksperter utreder saken og legger fram en offentlig utredning (NOU – Norges offentlige utredninger). Utvalget bestar gjerne av fagfolk, forskere og representanter for berore parter.

**Steg 2: Horing**
Lovforslaget sendes pa horing, der alle berore parter – organisasjoner, kommuner, fagforeninger, naeringslivsorganisasjoner og privatpersoner – far mulighet til a uttale seg. Horingssvarene er offentlige og bidrar til a belyse forslaget fra mange sider. Horingsinstituttet er en viktig del av det norske demokratiet og sikrer at berore parter far si sin mening.

**Steg 3: Proposisjon til Stortinget**
Pa bakgrunn av utredningen og horingssvarene utarbeider departementet et lovforslag i form av en proposisjon til Stortinget (Prop. L). Proposisjonen inneholder en grundig begrunnelse for forslaget, en gjennomgang av horingssvarene og det endelige lovforslaget.

**Steg 4: Komitebehandling**
Stortinget sender proposisjonen til den relevante fagkomiteen. Komiteen gjennomgar forslaget, holder egne horinger dersom onskelig, og utarbeider en innstilling til Stortinget. Innstillingen viser flertallets og mindretallets syn.

**Steg 5: Debatt og votering i Stortinget**
Saken debatteres i Stortinget, og representantene stemmer over forslaget. Lovforslag krever alminnelig flertall (85 av 169 stemmer) for a bli vedtatt. Grunnlovsendringer krever to tredjedels flertall.

**Steg 6: Sanksjon og kunngjoring**
Etter at Stortinget har vedtatt loven, sendes den til kongen i statsrad for sanksjon (formell godkjenning). Loven kunngjores deretter i Norsk Lovtidend og trer i kraft fra den dato som er fastsatt.`,
    },
    {
      id: 'pm-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Lovprosessen bak abortloven',
      problem: 'Hvordan illustrerer debatten om abortloven lovgivningsprosessen og det politiske samspillet?',
      solution: `Norges lov om svangerskapsavbrudd (abortloven) fra 1975, med selvbestemt abort inntil 12. uke, ble til etter en lang politisk prosess:

**Utredning:** Sporsmaiet ble utredet i flere omganger fra 1960-tallet, med offentlige utvalg som vurderte medisinske, etiske og juridiske sider.

**Politisk debatt:** Saken var sterkt politisk betent. Arbeiderpartiet og venstresiden stolet selvbestemt abort, mens Kristelig Folkeparti og deler av hoyresiden var motstandere. Debatten engasjerte bade politikere, helsepersonell, kirken og kvinnebevegelsen.

**Vedtak:** Loven ble vedtatt med knapt flertall i 1975 (med utvidelse i 1978). Vedtaket viste hvordan kontroversielle saker krever avveininger mellom ulike verdier og interesser.

**Senere endringer:** I 2019 vedtok Stortinget a fjerne muligheten for fosterreduksjon ved flerlingsvangerskap, etter at KrF stilte dette som krav for a ga inn i regjeringen Solberg. Lovendringen ble opphevet i 2023 av regjeringen Store. Dette viser at lovgivning er en kontinuerlig prosess der lover kan endres nar politiske flertall endrer seg.

Eksempelet illustrerer alle stegene i lovgivningsprosessen: utredning, offentlig debatt, komitebehandling, votering og kongens sanksjon.`,
    },
    {
      id: 'pm-2-3-text-4',
      type: 'text',
      content: `## Kontrolloppgaven

En av Stortingets viktigste funksjoner er a kontrollere regjeringen. Denne kontrollfunksjonen sikrer at regjeringen handler i trad med Stortingets vilje og innenfor lovens rammer.

**Sporretimen** holdes hver onsdag nar Stortinget er samlet. Representanter kan stille direkte sporsmal til statsradene, som ma svare umiddelbart. Den muntlige sporretimen gir opposisjonen mulighet til a sette regjeringen under press i aktuelle saker.

**Kontroll- og konstitusjonskomiteen** er Stortingets fremste kontrollorgan. Komiteen gransker om regjeringen folger opp Stortingets vedtak, og kan holde apne kontrollhoringer der statsrader og embetsfolk forklarer seg.

**Riksrevisjonen** er Stortingets eget kontrollorgan for offentlig forvaltning. Riksrevisjonen kontrollerer at statens midler brukes effektivt og i samsvar med Stortingets vedtak.

Kontrolloppgaven er avgjorende for demokratiets legitimitet. Nar innbyggerne vet at makthaverne kontrolleres, styrker det tilliten til det politiske systemet.`,
    },
    {
      id: 'pm-2-3-text-5',
      type: 'text',
      content: `## Lobbyvirksomhet og pavirkning

Lovgivningsprosessen pavirkeres ikke bare av politikere. Mange aktorer forsoker a pavirke utfallet:

**Lobbyister** arbeider pa vegne av bedrifter, organisasjoner eller interessegrupper for a pavirke politikere og lovgivning. I Norge er lobbyvirksomhet mindre formalisert enn for eksempel i USA, men det er et betydelig fenomen.

**Interesseorganisasjoner** som LO, NHO, Norges Bondelag og Naturvernforbundet deltar aktivt i horingsprosesser og soker direkte kontakt med politikere og byrakrater.

**Media** setter dagsorden og pavirkerer hvilke saker som far oppmerksomhet. Medias dekning av en sak kan legge press pa politikerne.

**Forskningsmiljoer** bidrar med fagkunnskap gjennom utredninger, horingssvar og deltakelse i offentlig debatt.

Det er viktig a vaere bevisst pa at ulike grupper har ulik tilgang til pavirkningsmuligheter. Store organisasjoner med mange ressurser har storre muligheter til a drive lobbyvirksomhet enn enkeltpersoner og sma grupper. Dette reiser sporsmal om politisk likhet i demokratiet.`,
    },
    {
      id: 'pm-2-3-text-6',
      type: 'text',
      title: 'Oppsummering',
      content: `Stortinget er det overste folkevalgte organet i Norge med fire hovedoppgaver: lovgivning, bevilgning, kontroll og offentlig debatt. De 169 representantene arbeider i 12 faste fagkomiteer der det meste av det politiske arbeidet skjer. Lovgivningsprosessen folger en grundig prosedyre fra utredning og horing, via proposisjon og komitebehandling, til debatt, votering og kongelig sanksjon. Stortingets kontrolloppgave sikrer at regjeringen handler i trad med Stortingets vilje. Lobbyvirksomhet og pavirkning fra organisasjoner, media og forskningsmiljoer er en viktig del av den politiske prosessen.`,
    },
    {
      id: 'pm-2-3-exercise-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 1',
      content: 'Hva er en proposisjon?',
      options: [
        'Et forslag som fremmes av en enkelt stortingsrepresentant',
        'Et lovforslag eller budsjettforslag som regjeringen fremmer for Stortinget',
        'En dom fra Hoyesterett',
        'En uttalelse fra en interesseorganisasjon',
      ],
      correctAnswer: 1,
      explanation: 'En proposisjon er et formelt forslag fra regjeringen til Stortinget. Det kan vaere et lovforslag (Prop. L) eller andre forslag til vedtak (Prop. S). Et forslag fra en stortingsrepresentant kalles derimot et representantforslag eller Dokument 8-forslag.',
    },
    {
      id: 'pm-2-3-exercise-2',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 2',
      content: 'Hva er det forste steget i lovgivningsprosessen?',
      options: [
        'Stortinget stemmer over loven',
        'Kongen sanksjonerer loven',
        'Saken utredes og sendes pa horing',
        'Komiteen skriver innstilling',
      ],
      correctAnswer: 2,
      explanation: 'Lovgivningsprosessen begynner med utredning (ofte en NOU) og horing, der berore parter far uttale seg. Forst etter denne grundige forberedelsen utarbeider regjeringen en proposisjon til Stortinget.',
    },
    {
      id: 'pm-2-3-exercise-3',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 3',
      content: 'Beskriv lovgivningsprosessen fra ide til vedtak. Bruk en konkret sak du kjenner til som eksempel.',
    },
    {
      id: 'pm-2-3-exercise-4',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 4',
      content: 'Forklar hva horingsinstituttet er og hvorfor det er viktig for demokratiet. Diskuter ogsa mulige svakheter ved horingsordningen.',
    },
    {
      id: 'pm-2-3-exercise-5',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 5',
      content: 'Hvor mange faste komiteer har Stortinget?',
      options: [
        '8',
        '10',
        '12',
        '15',
      ],
      correctAnswer: 2,
      explanation: 'Stortinget har 12 faste fagkomiteer. Alle saker som behandles i Stortinget sendes forst til en relevant komite for grundig gjennomgang for de debatteres og voteres over i plenum.',
    },
    {
      id: 'pm-2-3-exercise-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 6',
      content: 'Diskuter: Er lobbyvirksomhet en trussel mot demokratiet, eller er det en naturlig del av den demokratiske prosessen? Begrunn svaret ditt med eksempler.',
    },
  ],
};

// ============================================================================
// KAPITTEL 2.4 – Regjeringen og forvaltningen
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_2_4: TextbookChapter = {
  id: 'politikk-menneskerett-2-4',
  courseId: 'politikk-menneskerett',
  chapterNumber: '2.4',
  title: 'Regjeringen og forvaltningen',
  description: 'Forsta regjeringens rolle, departementsstrukturen og den offentlige forvaltningens oppgaver.',
  estimatedMinutes: 45,
  prevChapter: 'politikk-menneskerett-2-3',
  nextChapter: 'politikk-menneskerett-2-5',
  competenceGoals: [
    'gjore rede for regjeringens oppgaver og organisering',
    'forklare forvaltningens rolle i det politiske systemet',
  ],
  exercises: [],
  keyTerms: [
    { term: 'Statsrad', definition: 'Medlem av regjeringen med ansvar for et departement. Ogsa kalt minister. Statsradene utnevnes av kongen etter forslag fra statsministeren.' },
    { term: 'Departement', definition: 'Regjeringens sekretariat, organisert i fagomrader. Hvert departement ledes av en statsrad og forbereder saker og gjennomforer regjeringens politikk.' },
    { term: 'Direktorat', definition: 'Faglig organ underlagt et departement som har ansvar for a gjennomfore politikk pa et avgrenset omrade, for eksempel Utdanningsdirektoratet eller Helsedirektoratet.' },
    { term: 'Byrakrati', definition: 'Den offentlige forvaltningens apparat av ansatte embetsfolk og tjenestepersoner som forbereder saker og gjennomforer politiske vedtak.' },
    { term: 'Kongen i statsrad', definition: 'Den formelle betegnelsen pa regjeringens moter hos kongen, der viktige beslutninger fattes. Kongen leder motet, men har i praksis ingen innflytelse pa beslutningene.' },
    { term: 'Regjeringserklæring', definition: 'Dokument der en ny regjering presenterer sin politiske plattform og de viktigste sakene den vil prioritere i regjeringsperioden.' },
  ],
  content: [
    {
      id: 'pm-2-4-intro',
      type: 'text',
      content: `## Regjeringen og forvaltningen

Mens Stortinget vedtar lover og bevilger penger, er det regjeringen som star for den daglige styringen av landet. Regjeringen forbereder lovforslag, gjennomforer Stortingets vedtak og leder den enorme statlige forvaltningen som sysselsetter hundretusenvis av mennesker.

Regjeringen er bindeleddet mellom Stortingets politiske vilje og den praktiske gjennomforingen av politikken. Uten en velfungerende regjering og forvaltning ville Stortingets vedtak bare vaere ord pa papir.

I dette kapittelet ser vi naermere pa hvordan regjeringen er organisert, hvordan den arbeider, og hvilken rolle den statlige forvaltningen spiller i det norske politiske systemet.`,
    },
    {
      id: 'pm-2-4-text-1',
      type: 'text',
      content: `## Regjeringens sammensetning og dannelse

Etter et stortingsvalg innleder kongen konsultasjoner med partiene for a avklare hvem som bor danne regjering. I praksis er det stortingsflertallet som avgjor hvem som far regjeringsoppdraget. Statsministerkandidaten far i oppdrag a danne regjering og utpeker sine statsrader.

**Statsministeren** er regjeringens leder. Statsministeren koordinerer regjeringens arbeid, leder regjeringskonferansene og representerer Norge i internasjonale sammenhenger som EU-toppmeter og NATO-rad.

**Statsradene** (ministrene) leder hvert sitt departement. Norge har vanligvis rundt 20 statsrader. Statsradene har et dobbelt ansvar: de er bade politiske ledere for sine fagfelt og administrative ledere for departementene.

**Regjeringskonferansen** er et ukentlig mote der statsradene diskuterer politiske sporsmal og koordinerer regjeringens politikk. Det er pa regjeringskonferansen de viktigste politiske avveiningene gjores, for formelle beslutninger fattes i statsrad hos kongen.

**Kongen i statsrad** motes vanligvis hver fredag. Her fattes formelle beslutninger som utnevning av embetsfolk, godkjenning av lovforslag og andre viktige vedtak. Kongen leder motet, men har i praksis ingen innflytelse pa beslutningene – han «godkjenner» det regjeringen allerede har bestemt.`,
    },
    {
      id: 'pm-2-4-text-2',
      type: 'text',
      content: `## Regjeringens oppgaver

Regjeringen har fire hovedoppgaver:

**1. Initiativ og forberedelse**
Regjeringen tar initiativ til ny politikk og forbereder lovforslag, stortingsmeldinger og budsjettforslag. Det meste av det lovarbeidet Stortinget behandler, har sin opprinnelse i regjeringen. Departementene utreder saker, sender forslag pa horing og utarbeider proposisjoner.

**2. Gjennomforing og iverksetting**
Etter at Stortinget har vedtatt en lov eller et budsjett, er det regjeringens oppgave a gjennomfore vedtakene. Dette skjer gjennom departementene, direktoratene og andre statlige organer. Regjeringen fastsetter ogsa forskrifter som utfyller lovene med mer detaljerte regler.

**3. Styring av statsforvaltningen**
Regjeringen leder den statlige forvaltningen, som omfatter departementene, direktoratene, tilsynene, statsforvalterne og en rekke andre organer. Med hundretusenvis av ansatte er statsforvaltningen en enorm organisasjon som krever politisk styring.

**4. Utenrikspolitikk og forsvar**
Regjeringen representerer Norge i internasjonale sammenhenger, inngiar traktater og avtaler, og leder forsvaret. Utenrikspolitikken er tradisjonelt et felt der regjeringen har stor handlefrihet, selv om Stortinget ma godkjenne viktige avtaler.`,
    },
    {
      id: 'pm-2-4-def-1',
      type: 'definition',
      title: 'Forvaltningen',
      content: `**Den offentlige forvaltningen** er fellesbetegnelsen pa alle statlige og kommunale organer som forbereder og gjennomforer politiske vedtak. Forvaltningen er organisert i flere nivaer:

**Sentralforvaltningen:**
- **Departementene** (16 stykker) – regjeringens sekretariat
- **Direktoratene** – faglige gjennomforingsorganer (f.eks. Utdanningsdirektoratet, NAV)
- **Tilsyn** – kontrollorganer (f.eks. Datatilsynet, Arbeidstilsynet)

**Regional forvaltning:**
- **Statsforvalterne** (tidl. fylkesmannen) – statens representant i fylkene

**Lokal forvaltning:**
- Kommunene og fylkeskommunene (omtales i kapittel 2.5)

Forvaltningen bygger pa prinsipper om lovbundethet, likebehandling, offentlighet og faglig uavhengighet.`,
    },
    {
      id: 'pm-2-4-text-3',
      type: 'text',
      content: `## Departementsstrukturen

Norge har 16 departementer (per 2024), som dekker alle omrader av statlig politikk:

- Statsministerens kontor (SMK)
- Arbeids- og inkluderingsdepartementet
- Barne- og familiedepartementet
- Digitaliserings- og forvaltningsdepartementet
- Energidepartementet
- Finansdepartementet
- Forsvarsdepartementet
- Helse- og omsorgsdepartementet
- Justis- og beredskapsdepartementet
- Klima- og miljodepartementet
- Kommunal- og distriktsdepartementet
- Kultur- og likestillingsdepartementet
- Kunnskapsdepartementet
- Landbruks- og matdepartementet
- Nærings- og fiskeridepartementet
- Samferdselsdepartementet
- Utenriksdepartementet

Hvert departement har en politisk ledelse (statsraden og politiske radgivere) og en faglig administrativ ledelse (departementsraden og embetsverket). Den politiske ledelsen skifter nar regjeringen gar av, mens embetsverket er fast ansatt og sikrer kontinuitet i forvaltningen.`,
    },
    {
      id: 'pm-2-4-example-1',
      type: 'example',
      title: 'Eksempel: Fra Stortingets vedtak til gjennomforing',
      problem: 'Hvordan gjennomfores en reform i praksis? Se pa innforingen av ny lareplan (LK20) som eksempel.',
      solution: `**Stortingets vedtak:** Stortinget vedtok at skolens lareplaner skulle fornyes (fagfornyelsen).

**Regjeringens forberedelse:** Kunnskapsdepartementet ledet arbeidet med a utvikle nye lareplaner. Departementet nedsatte faggrupper, gjennomforte brede horinger og koordinerte prosessen.

**Direktoratets rolle:** Utdanningsdirektoratet (Udir) fikk i oppgave a utarbeide selve lareplanene i samarbeid med laerere, forskere og organisasjoner. Udir utviklet ogsa stotte- og veiledningsmateriell.

**Statsforvalteren:** Statsforvalterne i hvert fylke fikk ansvar for a folge opp kommunenes gjennomforing og tilby kompetanseutvikling til skolene.

**Kommunene:** Kommunene som skoleeiere matte tilrettelegge for at laererne fikk opplaering i de nye lareplanene og tilpasse undervisningen.

**Resultatet:** En prosess som startet med et politisk vedtak pa Stortinget, involverte hundrevis av fagpersoner og byrakrater, og til slutt endret hverdagen for over 800 000 elever og 70 000 laerere i Norge.

Dette viser hvordan forvaltningen fungerer som et komplekst maskineri som oversetter politiske vedtak til praktisk virkelighet.`,
    },
    {
      id: 'pm-2-4-text-4',
      type: 'text',
      content: `## Byrakratiet – makt uten mandat?

Byrakratiet – de faste ansatte i forvaltningen – har en viktig, men omdiskutert rolle i det politiske systemet. Byrakratene er ikke folkevalgte, men de har betydelig innflytelse pa politikken gjennom sitt arbeid med a:

- **Forberede saker** – byrakratene utreder saker og lager beslutningsgrunnlag for politikerne
- **Gi rad** – embetsverket gir faglige rad til statsraden, noe som pavirker hvilke alternativer som vurderes
- **Fortolke lover** – byrakratene tolker og anvender lovene i praksis
- **Iverksette vedtak** – forvaltningen bestemmer hvordan vedtak gjennomfores i praksis

Sosiologen Max Weber beskrev byrakratiet som den mest effektive formen for organisering, bygd pa regler, hierarki, spesialisering og upersonlighet. Men Weber advarte ogsa mot at byrakratiet kunne bli et «jernbur» som begrenset individuell frihet.

**Demokratisk utfordring:** Det er en spenning mellom politisk styring og faglig autonomi i forvaltningen. Pa den ene siden skal forvaltningen vaere et noytral verktoy for a gjennomfore politikernes vilje. Pa den andre siden ma forvaltningen ogsa ivareta faglige hensyn, rettsikkerhet og likebehandling. Nar byrakrater motsetter seg politiske vedtak fordi de anser dem som faglig uholdbare, oppstar sporsmaiet om hvem som egentlig bestemmer.`,
    },
    {
      id: 'pm-2-4-note-1',
      type: 'note',
      title: 'Offentlighetsprinsippet',
      content: `Offentlighetsprinsippet er et sentralt prinsipp i norsk forvaltning. Det innebarer at alle dokumenter i offentlig forvaltning er offentlige og tilgjengelige for innbyggerne, med mindre det foreligger en lovbestemt grunn til a gjore unntak (for eksempel personvern eller nasjonal sikkerhet). Offentleglova (2006) sikrer innsynsrett og er et viktig verktoy for demokratisk kontroll av forvaltningen. Medier og enkeltpersoner kan be om innsyn i offentlige dokumenter, noe som bidrar til transparens og ansvarlighet.`,
    },
    {
      id: 'pm-2-4-text-5',
      type: 'text',
      title: 'Oppsummering',
      content: `Regjeringen er den utovende makten i Norge, ledet av statsministeren. Regjeringens hovedoppgaver er a forberede lovforslag, gjennomfore Stortingets vedtak, styre forvaltningen og lede utenrikspolitikken. Den statlige forvaltningen er organisert i departementer, direktorater og tilsyn, og sysselsetter hundretusenvis av mennesker. Byrakratiet har betydelig innflytelse pa politikken gjennom sitt arbeid med a forberede saker, gi rad og gjennomfore vedtak. Offentlighetsprinsippet sikrer transparens og demokratisk kontroll.`,
    },
    {
      id: 'pm-2-4-exercise-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 1',
      content: 'Hva er regjeringens viktigste oppgave?',
      options: [
        'A vedta lover',
        'A domme i rettssaker',
        'A forberede lovforslag og gjennomfore Stortingets vedtak',
        'A kontrollere Stortinget',
      ],
      correctAnswer: 2,
      explanation: 'Regjeringens viktigste oppgaver er a ta initiativ til og forberede lovforslag for Stortinget, og a gjennomfore vedtakene Stortinget fatter. Lovgivning er Stortingets oppgave, og domstolene dommer i rettssaker.',
    },
    {
      id: 'pm-2-4-exercise-2',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 2',
      content: 'Hva er et direktorat?',
      options: [
        'En domstol som behandler forvaltningssaker',
        'Et faglig gjennomforingsorgan underlagt et departement',
        'Et politisk parti',
        'En avdeling innenfor Stortinget',
      ],
      correctAnswer: 1,
      explanation: 'Et direktorat er et faglig organ underlagt et departement som har ansvar for a gjennomfore politikk pa et avgrenset omrade. Eksempler er Utdanningsdirektoratet, Helsedirektoratet og NAV.',
    },
    {
      id: 'pm-2-4-exercise-3',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 3',
      content: 'Forklar forskjellen mellom den politiske ledelsen og embetsverket i et departement. Hvorfor er det viktig a skille mellom disse?',
    },
    {
      id: 'pm-2-4-exercise-4',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 4',
      content: 'Max Weber beskrev byrakratiet som bade effektivt og potensielt farlig. Forklar Webers syn pa byrakratiet og diskuter om hans bekymringer er relevante i Norge i dag.',
    },
    {
      id: 'pm-2-4-exercise-5',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 5',
      content: 'Hva innebarer offentlighetsprinsippet?',
      options: [
        'At alle statsrader ma vaere offentlig kjent',
        'At alle dokumenter i offentlig forvaltning er tilgjengelige for innbyggerne, med visse unntak',
        'At alle mater i regjeringen er apne for publikum',
        'At forvaltningen bare behandler offentlige saker',
      ],
      correctAnswer: 1,
      explanation: 'Offentlighetsprinsippet innebarer at alle dokumenter i offentlig forvaltning er offentlige og tilgjengelige for innbyggerne, med mindre det foreligger en lovbestemt grunn til unntak. Offentleglova sikrer innsynsretten.',
    },
    {
      id: 'pm-2-4-exercise-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 6',
      content: 'Velg et departement og beskriv hvilke oppgaver det har ansvar for. Finn ogsa ut hvilke direktorater og underliggende organer som horer under dette departementet.',
    },
  ],
};

// ============================================================================
// KAPITTEL 2.5 – Lokaldemokrati og kommunestyre
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_2_5: TextbookChapter = {
  id: 'politikk-menneskerett-2-5',
  courseId: 'politikk-menneskerett',
  chapterNumber: '2.5',
  title: 'Lokaldemokrati og kommunestyre',
  description: 'Forsta det lokale selvstyret, kommunenes rolle og formannskapsprinsippet i norsk demokrati.',
  estimatedMinutes: 45,
  prevChapter: 'politikk-menneskerett-2-4',
  nextChapter: 'politikk-menneskerett-2-6',
  competenceGoals: [
    'gjore rede for kommunenes og fylkeskommunenes rolle i det norske styringssystemet',
    'vurdere forholdet mellom statlig styring og kommunalt selvstyre',
  ],
  exercises: [],
  keyTerms: [
    { term: 'Kommunalt selvstyre', definition: 'Prinsippet om at kommunene har rett til a styre seg selv innenfor rammene av nasjonal lovgivning. Grunnlovfestet i 2016.' },
    { term: 'Formannskapsmodellen', definition: 'Styringsform der kommunestyret velger et formannskap som forbereder saker. Brukes i de aller fleste norske kommuner.' },
    { term: 'Parlamentarismemodellen', definition: 'Styringsform der kommunen styres etter parlamentariske prinsipper, med et byrad (kommunerad) som ma ha kommunestyrets tillit. Brukes i Oslo, Bergen og noen fa andre kommuner.' },
    { term: 'Kommunestyre', definition: 'Det overste folkevalgte organet i en kommune. Medlemmene velges gjennom kommunevalg hvert fjerde ar.' },
    { term: 'Ordforer', definition: 'Kommunestyrets leder og kommunens overste folkevalgte representant. Velges av kommunestyret etter kommunevalg.' },
    { term: 'Kommunesammenslaaing', definition: 'Prosess der to eller flere kommuner slaas sammen til en storre enhet. Kommunereformen i 2020 reduserte antall kommuner fra 428 til 356.' },
    { term: 'Fylkeskommune', definition: 'Regionalt folkevalgt organ med ansvar for videregaaende opplaering, tannhelse, regional samferdsel og regional planlegging.' },
  ],
  content: [
    {
      id: 'pm-2-5-intro',
      type: 'text',
      content: `## Lokaldemokrati og kommunestyre

Norge er ikke bare styrt fra Oslo. Tvert imot er det lokale selvstyret en grunnpilar i det norske demokratiet. Kommunene og fylkeskommunene har ansvar for en stor del av de offentlige tjenestene som innbyggerne mottar hver dag – fra barnehage og skole til eldreomsorg, renovasjon og kultur.

Det kommunale selvstyret handler om at lokalsamfunnene selv skal kunne bestemme over saker som angar dem direkte. Tanken er at de som bor naermest problemene, ogsa er best egnet til a finne losninger. Samtidig setter staten rammer for kommunenes virksomhet gjennom lover, forskrifter og finansiering.

I dette kapittelet ser vi naermere pa hvordan det lokale demokratiet er organisert, hvilke oppgaver kommunene har, og hvilke utfordringer lokaldemokratiet star overfor.`,
    },
    {
      id: 'pm-2-5-def-1',
      type: 'definition',
      title: 'Kommunalt selvstyre',
      content: `**Kommunalt selvstyre** er prinsippet om at kommunene har rett til a styre seg selv innenfor rammene av nasjonal lovgivning. Prinsippet ble grunnlovfestet i 2016 gjennom ny paragraf 49, andre ledd:

«Innbyggerne har rett til a styre lokale anliggender gjennom lokale folkevalgte organer.»

Det kommunale selvstyret innebarer at:
- Kommunene har en selvstendig stilling i det norske styringssystemet
- Kommunene kan ta avgjorelser i lokale saker uten a ma sporge staten
- Staten kan ikke gripe inn i kommunenes virksomhet uten hjemmel i lov
- Kommunene har rett til a kreve inn skatt (innenfor statlig fastsatte rammer)

Selvstyret er likevel ikke absolutt – det er begrenset av lover og regler vedtatt av Stortinget, og kommunene er avhengige av statlige overforinger for a finansiere sine oppgaver.`,
    },
    {
      id: 'pm-2-5-text-1',
      type: 'text',
      content: `## Kommunenes oppgaver

Norske kommuner har ansvar for en lang rekke viktige tjenester. Oppgavene kan deles i tre kategorier:

**Lovpalagte oppgaver** – oppgaver kommunene er palagt a utfore etter lov:
- Barnehager og grunnskole (1.–10. klasse)
- Helse- og omsorgstjenester (legevakt, sykehjem, hjemmesykepleie)
- Sosialtjenester og barnevern
- Kommunale veier og vann/avlop
- Arealplanlegging og byggesaksbehandling
- Brannvern og beredskap

**Frivillige oppgaver** – oppgaver kommunene selv velger a ta pa seg:
- Kulturhus og bibliotek
- Idrettsanlegg og svommehaller
- Naeringsstotte og naeringsfremme
- Diverse tilskuddsordninger

**Oppgaver som myndighetsutover** – kommunen som lokal forvaltning:
- Byggetillatelser og reguleringsplaner
- Skjenkebevilling og serveringsloyve
- Tilsyn med barnehager og miljovern

Med over 400 000 ansatte i norske kommuner er kommunesektoren den storste arbeidsgiveren i Norge. Omtrent halvparten av all offentlig tjenesteyting skjer i kommunene.`,
    },
    {
      id: 'pm-2-5-text-2',
      type: 'text',
      content: `## Formannskapsmodellen og parlamentarismemodellen

Norske kommuner styres etter en av to modeller:

**Formannskapsmodellen** (brukes i de aller fleste kommuner):
- **Kommunestyret** er det overste organet, valgt av innbyggerne
- **Formannskapet** velges av og blant kommunestyrets medlemmer og forbereder saker
- Formannskapet gjenspeiler den politiske sammensetningen i kommunestyret – bade posisjon og opposisjon er representert
- **Ordforeren** velges av kommunestyret og leder bade kommunestyret og formannskapet
- **Kommunedirektoren** (tidl. radmannen) er den overste administrative lederen

Et saertrekk ved formannskapsmodellen er at alle partier er representert i formannskapet, i motsetning til parlamentarismen der bare regjeringspartiene sitter i byradet.

**Parlamentarismemodellen** (brukes i Oslo, Bergen og noen fa andre kommuner):
- **Kommunestyret** (bystyret i Oslo og Bergen) er det overste organet
- **Byradet** (kommuneradet) fungerer som en lokal regjering og ma ha kommunestyrets tillit
- Byradet kan fellesved et mistillitsvotum, pa samme mate som regjeringen kan felles av Stortinget
- Ordforeren har en mer seremoniell rolle

Parlamentarismemodellen gir klarere ansvarsforhold mellom posisjon og opposisjon, men kan ogsa gi mindre tverrpolitisk samarbeid enn formannskapsmodellen.`,
    },
    {
      id: 'pm-2-5-example-1',
      type: 'example',
      title: 'Eksempel: Kommunereformen',
      problem: 'Hva var bakgrunnen for kommunereformen i 2020, og hvilke argumenter ble brukt for og mot sammenslaaing?',
      solution: `**Bakgrunn:** Kommunereformen, igangsatt av regjeringen Solberg i 2014, hadde som mal a skape storre og mer robuste kommuner. Fra 1. januar 2020 ble antall kommuner redusert fra 428 til 356 gjennom 119 kommunesammenslaainger.

**Argumenter for sammenslaaing:**
- Storre fagmiljoer gir bedre tjenester til innbyggerne
- Okonomiske stordriftsfordeler
- Storre kommuner kan paata seg flere oppgaver
- Bedre kapasitet til planlegging og naeringsetvikling
- Mange kommunegrenser er foreldet og gjenspeiler ikke dagens bo- og arbeidsmarkedsregioner

**Argumenter mot sammenslaaing:**
- Svekker naerheten mellom innbyggere og politikere
- Kan fore til sentralisering av tjenester
- Truer lokal identitet og tilhorighet
- Frivillighetsprinsippet bor gjelde – kommuner bor ikke tvinges sammen
- Sma kommuner kan vaere gode pa narre tjenester og naerhet til innbyggerne

**Resultat:** Reformen var kontroversiell, og mange sammenslaainger skjedde mot innbyggernes vilje i folkeavstemninger. Noen kommuner (som Vinje og Fyresdal) takket nei trass i statlig press. Debatten illustrerer spenningen mellom effektivitet og naerhet i lokaldemokratiet.`,
    },
    {
      id: 'pm-2-5-text-3',
      type: 'text',
      content: `## Fylkeskommunen

Mellom staten og kommunene finner vi fylkeskommunen, et regionalt folkevalgt organ. Etter regionreformen i 2020 ble antall fylkeskommuner redusert fra 19 til 11, for noen reverseringer brakte antallet tilbake til 15 fra 2024.

**Fylkeskommunens hovedoppgaver:**
- **Videregaaende opplaering** – drift av videregaaende skoler
- **Tannhelse** – offentlig tannhelsetjeneste
- **Samferdsel** – fylkesveier og kollektivtransport
- **Regional planlegging** – overordnet planlegging for regionen
- **Kultur** – regionale kulturinstitusjoner
- **Naeringsliv** – regional naeringsutvikling

Fylkeskommunens rolle har vaert omdiskutert i mange ar. Noen mener fylkeskommunen er et unodvendig byrakratisk nivaa, og at oppgavene like gjerne kan fordeles mellom stat og kommune. Andre mener fylkeskommunen er viktig for a ivareta regionale hensyn og sikre desentralisering.`,
    },
    {
      id: 'pm-2-5-text-4',
      type: 'text',
      content: `## Utfordringer for lokaldemokratiet

Det norske lokaldemokratiet star overfor flere utfordringer:

**Lav valgdeltakelse:** Valgdeltakelsen ved kommunevalg er tradisjonelt lavere enn ved stortingsvalg. Ved kommunevalget i 2023 var valgdeltakelsen pa rundt 63 prosent, noe som betyr at mer enn en av tre stemmeberettigede ikke brukte stemmeretten sin.

**Statlig detaljstyring:** Mange mener at staten har blitt stadig mer detaljert i sin styring av kommunene gjennom lover, forskrifter og oremerkede tilskudd. Dette kan svekke det reelle lokale selvstyret og redusere kommunenes handlingsrom.

**Okonomiske forskjeller:** Det er store forskjeller mellom kommunene nar det gjelder okonomiske ressurser. Rike kraftkommuner kan tilby bedre tjenester enn fattige utkantkommuner, noe som utfordrer prinsippet om likeverdige tjenester uansett bosted.

**Rekruttering:** Sma kommuner kan ha problemer med a rekruttere nok kompetent arbeidskraft til a ivareta alle sine oppgaver, sarlig innenfor helse, barnevern og tekniske tjenester.

**Demografiske endringer:** Urbanisering og aldrende befolkning stiller ulike krav til kommunene. Bykommuner opplever befolkningsvekst og press pa tjenestene, mens utkaktkommuner opplever fraflytting og en stadig aldrende befolkning.

**Innbyggermedvirkning:** Utover valg er det begrenset hvordan innbyggerne kan delta i lokalpolitikken. Mange kommuner arbeider med a utvikle nye former for innbyggermedvirkning, som borgerpanel, innbyggerhoringer og digitale deltakelsesverktoy.`,
    },
    {
      id: 'pm-2-5-text-5',
      type: 'text',
      title: 'Oppsummering',
      content: `Det kommunale selvstyret er en grunnpilar i det norske demokratiet og ble grunnlovfestet i 2016. Kommunene har ansvar for en rekke viktige tjenester som barnehage, skole, helse og omsorg. De fleste kommuner styres etter formannskapsmodellen, mens noen fa bruker parlamentarismemodellen. Kommunereformen i 2020 reduserte antall kommuner for a skape storre og mer robuste enheter, men var kontroversiell. Fylkeskommunen har ansvar for videregaaende opplaering, samferdsel og regional planlegging. Lokaldemokratiet star overfor utfordringer som lav valgdeltakelse, statlig detaljstyring, okonomiske forskjeller og demografiske endringer.`,
    },
    {
      id: 'pm-2-5-exercise-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 1',
      content: 'Hva kjennetegner formannskapsmodellen?',
      options: [
        'Bare regjeringspartiene er representert i formannskapet',
        'Formannskapet velges av og blant kommunestyrets medlemmer og gjenspeiler den politiske sammensetningen',
        'Ordforeren utpeker formannskapet uten valg',
        'Formannskapet overtar all makt fra kommunestyret',
      ],
      correctAnswer: 1,
      explanation: 'I formannskapsmodellen velges formannskapet av og blant kommunestyrets medlemmer, og det gjenspeiler den politiske sammensetningen i kommunestyret. Bade posisjon og opposisjon er representert, til forskjell fra parlamentarismemodellen der bare byradspartiene sitter i byradet.',
    },
    {
      id: 'pm-2-5-exercise-2',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 2',
      content: 'Nar ble det kommunale selvstyret grunnlovfestet i Norge?',
      options: [
        '1814',
        '1905',
        '2014',
        '2016',
      ],
      correctAnswer: 3,
      explanation: 'Det kommunale selvstyret ble grunnlovfestet i 2016 gjennom ny paragraf 49, andre ledd: «Innbyggerne har rett til a styre lokale anliggender gjennom lokale folkevalgte organer.» For dette var selvstyret forankret i lov, men ikke i Grunnloven.',
    },
    {
      id: 'pm-2-5-exercise-3',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 3',
      content: 'Sammenlign formannskapsmodellen og parlamentarismemodellen. Hvilke fordeler og ulemper har hver modell for lokaldemokratiet?',
    },
    {
      id: 'pm-2-5-exercise-4',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 4',
      content: 'Diskuter: Bor staten kunne tvinge kommuner til a sla seg sammen, eller bor sammenslaaing alltid vaere frivillig? Begrunn svaret ditt med argumenter for og mot.',
    },
    {
      id: 'pm-2-5-exercise-5',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 5',
      content: 'Hvilken oppgave er IKKE en lovpalagt kommunal oppgave?',
      options: [
        'Grunnskoleopplaering',
        'Helse- og omsorgstjenester',
        'Drift av idrettsanlegg',
        'Brannvern og beredskap',
      ],
      correctAnswer: 2,
      explanation: 'Drift av idrettsanlegg er en frivillig oppgave som kommunene selv velger a ta pa seg. Grunnskole, helse og omsorg, og brannvern er lovpalagte oppgaver som alle kommuner ma tilby.',
    },
    {
      id: 'pm-2-5-exercise-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 6',
      content: 'Undersok din egen kommune: Hvilken styringsmodell bruker kommunen? Hvem er ordforeren? Hvor mange innbyggere har kommunen, og hvilke tjenester tilbyr den utover de lovpalagte oppgavene?',
    },
  ],
};

// ============================================================================
// KAPITTEL 2.6 – Autoritære regimer og demokratisk tilbakegang
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_2_6: TextbookChapter = {
  id: 'politikk-menneskerett-2-6',
  courseId: 'politikk-menneskerett',
  chapterNumber: '2.6',
  title: 'Autoritaere regimer og demokratisk tilbakegang',
  description: 'Forsta ulike typer autoritaere regimer, hybridregimer og trusselen om demokratisk tilbakegang i verden.',
  estimatedMinutes: 50,
  prevChapter: 'politikk-menneskerett-2-5',
  nextChapter: 'politikk-menneskerett-3-1',
  competenceGoals: [
    'sammenligne demokratiske og autoritaere styreformer',
    'analysere arsaker til og konsekvenser av demokratisk tilbakegang',
  ],
  exercises: [],
  keyTerms: [
    { term: 'Autoritaert regime', definition: 'Styreform der makten er konsentrert hos en liten gruppe eller en enkeltperson, og der politisk opposisjon og sivile friheter er begrenset.' },
    { term: 'Totalitaert regime', definition: 'Ekstrem form for autoritaert styre der staten soker total kontroll over alle sider av borgernes liv, inkludert tanker, kultur og privatliv.' },
    { term: 'Hybridregime', definition: 'Styreform som blander elementer av demokrati og autoritarisme. Det holdes valg, men de er ikke frie og rettferdige, og sivile friheter er begrenset.' },
    { term: 'Demokratisk tilbakegang', definition: 'Prosess der demokratiske institusjoner, normer og rettigheter gradvis svekkes, ofte innenfra, av demokratisk valgte ledere.' },
    { term: 'Autokrati', definition: 'Styre der en enkeltperson eller liten gruppe har uinnskrenket makt, uten meningsfulle kontrollmekanismer eller demokratisk ansvarlighet.' },
    { term: 'Pressfrihet', definition: 'Medias rett til a operere fritt, uten statlig sensur eller kontroll. Pressefrihet er en forutsetning for demokrati og en truet rettighet i mange land.' },
    { term: 'Sivilsamfunn', definition: 'Fellesbetegnelse for frivillige organisasjoner, foreninger og bevegelser som opererer uavhengig av staten og naeringslivet, og som er viktige for demokratisk deltakelse.' },
  ],
  content: [
    {
      id: 'pm-2-6-intro',
      type: 'text',
      content: `## Autoritaere regimer og demokratisk tilbakegang

Mens vi i de forrige kapitlene har sett pa hvordan demokratiet fungerer i Norge, er virkeligheten i mange land en helt annen. Ifoolge organisasjonen Freedom House lever bare rundt 20 prosent av verdens befolkning i frie demokratier. Resten lever under ulike grader av autoritaert styre – fra mild begrensning av sivile friheter til brutal undertrykkelse.

I de siste tiaarene har verden opplevd det mange forskere kaller en «demokratisk tilbakegang» eller «demokratisk resesjon». Flere land har beveget seg i autoritaer retning, og selv etablerte demokratier opplever press pa sine institusjoner og normer.

I dette kapittelet ser vi naermere pa hva som kjennetegner autoritaere regimer, hva som forar hybridregimer, og hvorfor demokratisk tilbakegang er en av var tids storste politiske utfordringer.`,
    },
    {
      id: 'pm-2-6-def-1',
      type: 'definition',
      title: 'Autoritaere regimer',
      content: `**Autoritaere regimer** er styreformer der makten er konsentrert hos en liten gruppe eller en enkeltperson, og der politisk opposisjon, sivile friheter og mediefrihet er begrenset. Kjennetegn:

- **Begrenset politisk pluralisme** – opposisjonspartier forbys eller marginaliseres
- **Svak eller fravarende maktfordeling** – den utovende makten dominerer
- **Kontrollertemedier** – sensur og statlig mediakontroll
- **Begrenset sivil frihet** – ytringsfrihet, forsamlingsfrihet og organisasjonsfrihet er innskrenket
- **Svakt rettsvesen** – domstolene er ikke uavhengige av den politiske makten

Autoritaere regimer skiller seg fra **totalitaere regimer**, som soker total kontroll over alle aspekter av borgernes liv, inkludert privatliv, tenkning og kultur. Eksempler pa totalitaere regimer er Stalins Sovjet, Nazi-Tyskland og Nord-Korea.`,
    },
    {
      id: 'pm-2-6-text-1',
      type: 'text',
      content: `## Typer av autoritaere regimer

Autoritaere regimer er ikke en ensartet gruppe. Statsviterne skiller mellom flere typer:

**Militaerdiktatur:**
Makten holdes av militaeret, som har overtatt styringen gjennom et kupp eller vedvarende militaer innflytelse. Eksempler inkluderer Myanmar etter kuppet i 2021, og historisk flere land i Latin-Amerika og Afrika. Militaerdiktaturer legitimerer seg ofte med at de «redder nasjonen» fra kaos eller korrupsjon.

**Ettpartistater:**
Landet styres av ett dominerende parti som kontrollerer alle statsinstitusjoner. Kina under Det kommunistiske partiet er det fremste eksempelet i dag. Partiet kontrollerer regjeringen, militaeret, rettsvesenet og media. Andre eksempler er Cuba og Vietnam.

**Personalistiske regimer:**
Makten er konsentrert hos en enkelt leder, som styrer gjennom personlige nettverk og lojalitetsbind snarere enn gjennom formelle institusjoner. Eksempler inkluderer Russland under Putin, Hviterussland under Lukasjenko og Turkmenistan. I slike regimer er overgangen mellom stat og leder uklar.

**Teokratier:**
Religiose ledere og religiose lover er grunnlaget for styringen. Iran, der landets overste leder (ayatollahen) har den endelige makten over alle politiske sporsmal, er det fremste eksempelet. Saudi-Arabia styres ogsa etter religiose prinsipper, selv om det er et monarki.

**Monarkier med absolutt makt:**
Kongen eller emiren styrer uten reelle demokratiske begrensninger. Eksempler finnes i Gulfen, som Saudi-Arabia og De forente arabiske emirater, selv om noen av disse har innfort begrensede reformer.

Mange regimer kombinerer elementer fra flere av disse typene. For eksempel er Kina bade en ettpartistat og et regime med sterke personalistiske trekk under Xi Jinping.`,
    },
    {
      id: 'pm-2-6-text-2',
      type: 'text',
      content: `## Hybridregimer – det graa omradet

Mellom fullt utviklede demokratier og klart autoritaere regimer finner vi en voksende gruppe land som kalles hybridregimer. Disse landene har formelt sett demokratiske institusjoner – det holdes valg, det finnes en grunnlov, og opposisjonspartier eksisterer – men i praksis er demokratiet uthulet.

**Kjennetegn pa hybridregimer:**
- Valg holdes, men de er ikke frie og rettferdige (valgfusk, undertrykkelse av opposisjonen)
- Media finnes, men statlig kontroll og selvsensur er utbredt
- Opposisjonen finnes, men den trakasseres, fengsles eller marginaliseres
- Domstolene finnes, men de er ikke uavhengige
- Grunnloven finnes, men den endres for a passe makthaverne

Statsviteren Steven Levitsky har kalt slike regimer for «competitive authoritarianism» (konkurransepreget autoritarisme). Makthaverne bruker demokratiske former for a legitimere sin makt, men spillereglene er sa skjeve at opposisjonen har svaert liten sjanse til a vinne.

**Eksempler pa hybridregimer:**
- **Tyrkia** – President Erdogan har gradvis uthulet demokratiet gjennom kontroll over media, undertrykkelse av opposisjon og svekkelse av domstolenes uavhengighet
- **Ungarn** – Statsminister Viktor Orban har selv beskrevet sitt system som «illiberalt demokrati», med svekket pressefrihet og domstolsuavhengighet
- **Venezuela** – Formelt demokrati med valg, men regimet kontrollerer valgapparatet, domstolene og media
- **Russland** – Holdt valg, men Putin-regimet kontrollerte resultatet gjennom undertrykkelse av opposisjon og mediakontroll`,
    },
    {
      id: 'pm-2-6-example-1',
      type: 'example',
      title: 'Eksempel: Demokratisk tilbakegang i Ungarn',
      problem: 'Hvordan har det ungarske demokratiet blitt svekket under Viktor Orban?',
      solution: `Ungarn er et laerebokveksempel pa demokratisk tilbakegang. Etter a ha vunnet fritt valg i 2010 med to tredjedels flertall, har Viktor Orbans parti Fidesz gradvis uthulet demokratiske institusjoner:

**Grunnlovsendringer:** Orban brukte sitt to tredjedels flertall til a skrive en helt ny grunnlov i 2011, som styrket regjeringens makt og svekket domstolenes uavhengighet.

**Mediakontroll:** Gjennom en kombinasjon av lovgivning, oppkjop og okonomisk press har Orban sikret kontroll over storstedelen av ungarsk media. Uavhengige medier er marginalisert.

**Svekking av domstolene:** Pensjoneringsalder for dommere ble senket, noe som fjernet erfarne dommere og lot regjeringen utpeke nye, mer lojale dommere.

**Valgmanipulasjon:** Valgdistriktene er endret til fordel for regjeringspartiet, og valgkampreglene favoriserer Fidesz.

**Angrep pa sivilsamfunnet:** Uavhengige organisasjoner og universiteter (som Central European University) har blitt presset ut av landet.

**Det viktige poenget:** Orbaan har ikke gjennomfort et kupp. Han har brukt demokratiske mekanismer – valg, lovgivning, grunnlovsendringer – til gradvis a svekke demokratiet. Dette gjor det vanskeligere a sette en grense for nar demokratiet slutter a vaere et demokrati.`,
    },
    {
      id: 'pm-2-6-text-3',
      type: 'text',
      content: `## Demokratisk tilbakegang – en global trend

Ifoolge organisasjonen V-Dem (Varieties of Democracy) ved Universitetet i Goteborg har verden opplevd demokratisk tilbakegang siden midten av 2000-tallet. Flere land har blitt mindre demokratiske enn de var for ti eller tjue ar siden.

**Mekanismer for demokratisk tilbakegang:**
Statsviterne Steven Levitsky og Daniel Ziblatt har i boken «How Democracies Die» (2018) beskrevet fire kjennetegn pa ledere som truer demokratiet:

1. **Avvisning av demokratiske spilleregler** – de utfordrer valgresultater, angriper rettsvesenet eller forsoker a endre reglene til sin fordel
2. **Benektelse av politiske motstanderes legitimitet** – de stempler opposisjonen som fiender, forrederere eller kriminelle
3. **Toleranse for eller oppmuntring til vold** – de aksepterer eller oppildner politisk motivert vold
4. **Beredthet til a innskrenke sivile friheter** – de truger med a begrense ytringsfrihet, pressefrihet eller organisasjonsfrihet

**Arsaker til demokratisk tilbakegang:**
- **Okonomisk krise og ulikhet** – nar folk opplever okonomisk utrygget, kan de trekkes mot sterke ledere som lover raske losninger
- **Polarisering** – nar politiske motstandere ses som fiender, svekkes tilliten til demokratiske prosesser
- **Desinformasjon** – spredning av falske nyheter undergraver den informerte offentlige debatten
- **Svake demokratiske institusjoner** – nar rettsvesen, media og sivilsamfunn er svake, er det lettere for autoritaere ledere a ta kontroll
- **Ekstern pavirkning** – autoritaere stormakter som Kina og Russland stotter autoritaere bevegesler i andre land`,
    },
    {
      id: 'pm-2-6-text-4',
      type: 'text',
      content: `## Hvordan beskytte demokratiet?

Erfaring fra land som har opplevd demokratisk tilbakegang gir viktige laerdommer:

**Sterke institusjoner:** Uavhengige domstoler, frie medier og et aktivt sivilsamfunn er de viktigste beskyttelsene mot autoritaere tendenser. Nar disse institusjonene er sterke, er det vanskeligere for en enkelt leder eller et parti a konsentrere makten.

**Demokratisk politisk kultur:** Demokratiet avhenger av uformelle normer like mye som formelle regler. Normer som respekt for motstandere, aksept av valgresultater og selvpalagt maktbegrensning er avgjorende. Nar disse normene bryter sammen, er demokratiet saarbart.

**Vaktsomme borgere:** Innbyggerne ma engasjere seg politisk, holde seg informert og reagere nar demokratiske normer trues. Historien viser at demokratier sjelden faller over natt – det skjer gradvis, og ofte uten at folk legger merke til det for det er for sent.

**Internasjonalt samarbeid:** Internasjonale organisasjoner som EU, Europaradet og FN kan legge press pa land som svekker demokratiet. Regionale menneskerettighetsdomstoler, som Den europeiske menneskerettighetsdomstolen, kan holde stater ansvarlige.

**Utdanning:** Demokratisk utdanning – der unge larer om demokratiets verdier, rettigheter og ansvar – er en langsiktig investering i demokratiets overlevelse.`,
    },
    {
      id: 'pm-2-6-note-1',
      type: 'note',
      title: 'Demokratiindekser',
      content: `Flere organisasjoner maler demokratiets tilstand rundt i verden:

- **Freedom House** klassifiserer land som «frie», «delvis frie» eller «ikke frie» basert pa politiske rettigheter og sivile friheter.
- **V-Dem** (Varieties of Democracy) maler demokrati langs mange dimensjoner og kategoriserer land som lukkede autokratier, valgautokratier, valgdemokratier eller liberale demokratier.
- **The Economist Intelligence Unit** publiserer en arlig demokratiindeks som rangerer land pa en skala fra 0 til 10.

Norge scorer konsekvent blant de aller hoyeste pa alle disse indeksene og regnes som et av verdens mest velfungerende demokratier.`,
    },
    {
      id: 'pm-2-6-text-5',
      type: 'text',
      title: 'Oppsummering',
      content: `Autoritaere regimer kjennetegnes av konsentrert makt, begrenset politisk frihet og svak maktfordeling. Det finnes flere typer: militaerdiktaturer, ettpartistater, personalistiske regimer, teokratier og absolutte monarkier. Hybridregimer befinner seg i en grasone mellom demokrati og autoritarisme, med formelt demokratiske institusjoner som i praksis er uthulet. Verden opplever en demokratisk tilbakegang der flere land beveger seg i autoritaer retning. For a beskytte demokratiet trengs sterke institusjoner, demokratisk kultur, vaktsomme borgere og internasjonalt samarbeid.`,
    },
    {
      id: 'pm-2-6-exercise-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 1',
      content: 'Hva er et hybridregime?',
      options: [
        'Et regime som kombinerer demokrati og kommunisme',
        'Et regime som har formelt demokratiske institusjoner, men der demokratiet i praksis er uthulet',
        'Et regime med to presidenter som deler makten',
        'Et regime der militaeret og sivilbefolkningen styrer sammen',
      ],
      correctAnswer: 1,
      explanation: 'Et hybridregime er en styreform som blander elementer av demokrati og autoritarisme. Det holdes valg og det finnes formelt demokratiske institusjoner, men i praksis er valg ikke frie, media er kontrollert og opposisjonen er svekket.',
    },
    {
      id: 'pm-2-6-exercise-2',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 2',
      content: 'Hva skiller et totalitaert regime fra et autoritaert regime?',
      options: [
        'Totalitaere regimer har valg, autoritaere har ikke',
        'Totalitaere regimer soker total kontroll over alle sider av borgernes liv, ogsa privatliv og tanker',
        'Autoritaere regimer er alltid militaere, totalitaere er alltid sivile',
        'Det er ingen forskjell mellom dem',
      ],
      correctAnswer: 1,
      explanation: 'Totalitaere regimer soker total kontroll over alle aspekter av borgernes liv – inkludert privatliv, tanker, kultur og utdanning. Autoritaere regimer begrenser politisk frihet, men lar gjerne borgerne beholde noe privat autonomi sa lenge de ikke utfordrer makten.',
    },
    {
      id: 'pm-2-6-exercise-3',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 3',
      content: 'Velg et land som har opplevd demokratisk tilbakegang (for eksempel Ungarn, Tyrkia eller Venezuela). Beskriv hvordan demokratiet ble svekket, og analyser arsaker og konsekvenser.',
    },
    {
      id: 'pm-2-6-exercise-4',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 4',
      content: 'Levitsky og Ziblatt beskriver fire varseltegn pa ledere som truer demokratiet. Forklar disse fire tegnene og diskuter om du kan se noen av dem i dagens politikk, i Norge eller internasjonalt.',
    },
    {
      id: 'pm-2-6-exercise-5',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 5',
      content: 'Hvilken organisasjon publiserer «Freedom in the World»-rapporten?',
      options: [
        'FN',
        'Amnesty International',
        'Freedom House',
        'V-Dem',
      ],
      correctAnswer: 2,
      explanation: 'Freedom House publiserer den arlige rapporten «Freedom in the World», som klassifiserer land som «frie», «delvis frie» eller «ikke frie» basert pa politiske rettigheter og sivile friheter.',
    },
    {
      id: 'pm-2-6-exercise-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 6',
      content: 'Diskuter: «Demokratiet ma stadig forsvares, fornyes og tilpasses nye forhold.» Hva menes med dette utsagnet? Hvilke tiltak mener du er viktigst for a beskytte demokratiet i var tid?',
    },
    {
      id: 'pm-2-6-exercise-7',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 7',
      content: 'Hva er den viktigste forskjellen mellom demokrati og autoritarisme nar det gjelder makt?',
      options: [
        'I demokratier er det alltid fred, i autoritaere regimer er det alltid krig',
        'I demokratier er makten fordelt og kontrollert, i autoritaere regimer er makten konsentrert og ukontrollert',
        'I demokratier bestemmer ekspertene, i autoritaere regimer bestemmer folket',
        'Det er ingen forskjell – all makt er lik',
      ],
      correctAnswer: 1,
      explanation: 'Den grunnleggende forskjellen er maktfordeling og kontroll. I demokratier er makten fordelt mellom ulike institusjoner som kontrollerer hverandre, mens i autoritaere regimer er makten konsentrert hos en liten gruppe uten effektive kontrollmekanismer.',
    },
  ],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const POLITIKK_MENNESKERETT_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_POLITIKK_MENNESKERETT_2_1, CHAPTER_POLITIKK_MENNESKERETT_2_2,
  CHAPTER_POLITIKK_MENNESKERETT_2_3, CHAPTER_POLITIKK_MENNESKERETT_2_4,
  CHAPTER_POLITIKK_MENNESKERETT_2_5, CHAPTER_POLITIKK_MENNESKERETT_2_6,
];
