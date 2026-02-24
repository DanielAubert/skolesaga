/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Geografi VG1/VG2 - Del 1: Geografiens verktoy
 *
 * Dekker LK20-kompetansemaal for geografi (GEO01-02)
 * Seksjon 1: Geografiens verktoy
 * Delkapitler 1.1 - 1.6
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Hva er geografi?
// ============================================================================

export const CHAPTER_GEOGRAFI_1_1: TextbookChapter = {
  id: 'geografi-1-1-1',
  courseId: 'geografi',
  chapterNumber: '1.1',
  title: 'Hva er geografi?',
  description: 'En introduksjon til geografi som fag, med vekt paa skillet mellom naturgeografi og samfunnsgeografi.',
  estimatedMinutes: 20,
  competenceGoals: [
    'utforske og beskrive geografiske hovudtrekk lokalt, nasjonalt og globalt',
    'reflektere over kva geografi handlar om som vitskap og samfunnsfag',
  ],
  content: [
    {
      id: 'geo-1-1-intro',
      type: 'text',
      content: `# Hva er geografi?

Ordet **geografi** kommer fra gresk og betyr \"jordbeskrivelse\" (geo = jord, graphein = skrive). Men geografi handler om langt mer enn bare aa beskrive jordoverflaten. Moderne geografi er vitenskapen om **samspillet mellom natur og samfunn i et romlig perspektiv**.

## Geografiens kjernesporsmal

Geografer stiller alltid sporsmaal knyttet til **sted** og **rom**:
- **Hvor?** Hvor finner vi fenomenet?
- **Hvorfor der?** Hva forklarer den geografiske plasseringen?
- **Hva betyr det?** Hvilke konsekvenser har plasseringen for mennesker og natur?
- **Hvordan endrer det seg?** Hvordan forandrer stedet og prosessene seg over tid?

Denne romlige tenkemaaten skiller geografi fra andre fag. Mens en biolog studerer en art, spoer geografen: Hvor lever arten, og hvorfor nettopp der?`,
    },
    {
      id: 'geo-1-1-def-geografi',
      type: 'definition',
      title: 'Geografi',
      content: 'Geografi er vitenskapen som studerer jordoverflaten, naturmiljoeet og menneskelig aktivitet i et romlig (spatial) perspektiv. Faget undersoeker hvordan naturgitte og samfunnsmessige forhold varierer fra sted til sted, og hvordan de pavirker hverandre.',
    },
    {
      id: 'geo-1-1-naturgeografi',
      type: 'text',
      content: `## Naturgeografi

Naturgeografi studerer de fysiske prosessene og forholdene paa jordoverflaten. Det handler om aa forstaa **hvordan naturen fungerer** og hvordan landskap dannes og endres.

### Viktige delomraader i naturgeografi

| Delomraade | Studerer | Eksempler |
|------------|----------|-----------|
| Geomorfologi | Landformer og prosesser | Fjorder, daler, fjell, kystformer |
| Klimatologi | Klima og klimasystemer | Klimasoner, klimaendringer |
| Hydrologi | Vannets kretslop | Elver, innsjoer, grunnvann |
| Biogeografi | Livsmiljoer og artsspredning | Vegetasjonssoner, okosystemer |
| Glasiologi | Isbreer og is | Isbreer, permafrost |

### Eksempler paa naturgeografiske sporsmaal
- Hvorfor har Norge saa mange fjorder?
- Hva skjer med isbreene naar klimaet endres?
- Hvorfor er det orkener langs vendesirklene?`,
    },
    {
      id: 'geo-1-1-def-naturgeografi',
      type: 'definition',
      title: 'Naturgeografi',
      content: 'Naturgeografi er den delen av geografien som studerer naturmiljoeet og de fysiske prosessene paa jordoverflaten. Dette inkluderer landformer, klima, vaer, vegetasjon, vannressurser og jordsmonn.',
    },
    {
      id: 'geo-1-1-samfunnsgeografi',
      type: 'text',
      content: `## Samfunnsgeografi

Samfunnsgeografi studerer **menneskelig aktivitet** i et romlig perspektiv. Her er fokuset paa hvordan mennesker organiserer seg, bruker ressurser og former landskapet.

### Viktige delomraader i samfunnsgeografi

| Delomraade | Studerer | Eksempler |
|------------|----------|-----------|
| Befolkningsgeografi | Befolkningsfordeling og -endring | Urbanisering, migrasjon |
| Okonomisk geografi | Okonomisk aktivitet | Naeringsstruktur, handel, globalisering |
| Politisk geografi | Makt og territorium | Grenser, geopolitikk, konflikter |
| Kulturgeografi | Kultur og identitet | Spraak, religion, levesett |
| Bygeografi | Byer og tettsteder | Byplanlegging, boligmoenstre |

### Eksempler paa samfunnsgeografiske sporsmaal
- Hvorfor vokser noen byer mens andre krymper?
- Hvordan pavirker globalisering lokale samfunn?
- Hva forklarer migrasjonsmoenstre mellom land?`,
    },
    {
      id: 'geo-1-1-def-samfunnsgeografi',
      type: 'definition',
      title: 'Samfunnsgeografi',
      content: 'Samfunnsgeografi (eller humangeografi) er den delen av geografien som studerer forholdet mellom mennesker og steder. Det handler om befolkning, bosetting, ressursbruk, okonomi, kultur og politikk sett i et romlig perspektiv.',
    },
    {
      id: 'geo-1-1-samspill',
      type: 'text',
      content: `## Samspillet mellom natur og samfunn

Det som gjoer geografi spesielt, er at faget ser paa **samspillet** mellom naturforhold og samfunnsforhold. Naturen setter rammer for menneskelig aktivitet, mens menneskene pavirker og endrer naturen.

### Eksempler paa samspill
- **Naturressurser og okonomi**: Norges olje- og gassressurser har formet landets okonomi og politikk
- **Klima og bosetting**: De fleste byer ligger ved kysten eller langs elver
- **Naturkatastrofer og saarbarhet**: Fattige samfunn rammes hardere av flom og jordskjelv
- **Menneskelig pavirkning**: Avskoging, forurensning og klimaendringer endrer natursystemer

### Baerekraftig utvikling
Et sentralt tema i moderne geografi er **baerekraftig utvikling** - hvordan vi kan bruke jordens ressurser uten aa oedelegge for fremtidige generasjoner. FNs baerekraftsmaal er et viktig rammeverk for dette.`,
    },
    {
      id: 'geo-1-1-example',
      type: 'example',
      title: 'Geografi i praksis: Norges kystlinje',
      problem: 'Forklar hvordan studiet av Norges kystlinje involverer baade naturgeografi og samfunnsgeografi.',
      solution: `**Naturgeografi:**
- Kystlinjen er formet av isbreer, haverosjonen og landhevning etter istiden
- Fjordene er overfordypede daler gravd ut av isbreer
- Klimaet langs kysten er mildt paa grunn av Golfstroemmen

**Samfunnsgeografi:**
- Mesteparten av Norges befolkning bor langs kysten
- Fiskeri, havbruk og skipsfart har preget kystsamfunnene i hundrevis av aar
- Byer som Bergen, Stavanger og Tromsoe vokste frem paa grunn av kystens ressurser

**Samspill natur-samfunn:**
- Naturressursene (fisk, olje) har styrt bosettingsmoensteret
- Klimaendringer med stigende havnivaa og sterkere stormer truer kystinfrastruktur
- Konflikten mellom vern av kystmiljoe og okonomisk utnyttelse

**Konklusjon:** Studiet av kystlinjen krever at vi forstaar baade naturprosessene og den menneskelige aktiviteten, og hvordan disse haenger sammen.`,
    },
    {
      id: 'geo-1-1-geografi-historie',
      type: 'text',
      content: `## Kort om geografiens historie

Geografi er et av verdens eldste fag. Allerede i antikken beskrev greske tenkere som **Eratosthenes** (som beregnet jordens omkrets rundt 240 f.Kr.) og **Strabon** jordoverflaten systematisk.

### Viktige milepaler
- **Antikken**: Greske geografer kartla den kjente verden
- **Oppdagelsestiden (1400-1600)**: Europeiske oppdagelsesreiser utvidet det geografiske verdensbildet
- **1800-tallet**: Alexander von Humboldt og Carl Ritter grunnla moderne geografi som vitenskap
- **1900-tallet**: Geografi ble delt i naturgeografi og samfunnsgeografi
- **I dag**: GIS, fjernanalyse og dataanalyse har revolusjonert faget`,
    },
  
    {
      id: 'geo-1-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Geografi betyr "jordbeskrivelse" og studerer samspillet mellom natur og samfunn i et romlig perspektiv
- Faget deles i **naturgeografi** (fysiske prosesser og landskap) og **samfunnsgeografi** (menneskelig aktivitet)
- Geografiens kjernesporsmal handler om **sted** og **rom**: Hvor? Hvorfor der? Hva betyr det?
- Samspillet mellom naturforhold og samfunnsforhold er det som gjoer geografi unikt
- Baerekraftig utvikling er et sentralt tema i moderne geografi`,
    },
  ],
  exercises: [
    {
      id: 'geo-1-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr ordet \"geografi\"?',
      options: [
        { id: 'a', text: 'Jordbeskrivelse', isCorrect: true },
        { id: 'b', text: 'Jordmaaling', isCorrect: false },
        { id: 'c', text: 'Jordforskning', isCorrect: false },
        { id: 'd', text: 'Jordkunnskap', isCorrect: false },
      ],
      solution: 'Geografi kommer fra gresk geo (jord) og graphein (skrive/beskrive), altsaa \"jordbeskrivelse\".',
    },
    {
      id: 'geo-1-1-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom naturgeografi og samfunnsgeografi. Gi to eksempler paa hvert omraade.',
      solution: 'Naturgeografi studerer fysiske forhold som landformer, klima og vegetasjon. Eksempler: fjorddannelse, klimasoner. Samfunnsgeografi studerer menneskelig aktivitet i romlig perspektiv. Eksempler: urbanisering, migrasjonsmoenstre. Det som binder dem sammen er at geografi alltid spoer \"hvor\" og \"hvorfor der\".',
    },
    {
      id: 'geo-1-1-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket av foelgende er et eksempel paa samspill mellom naturgeografi og samfunnsgeografi?',
      options: [
        { id: 'a', text: 'Norges oljeressurser har formet landets okonomi og bosettingsmoenster', isCorrect: true },
        { id: 'b', text: 'Vulkaner finnes langs plategrenser', isCorrect: false },
        { id: 'c', text: 'Oslo er Norges stoerste by', isCorrect: false },
        { id: 'd', text: 'Vannet i elver stroemmer nedover', isCorrect: false },
      ],
      solution: 'Samspillet mellom natur og samfunn betyr at naturforhold (oljeressurser) pavirker samfunnsforhold (okonomi, bosetting). De andre eksemplene er enten rent naturgeografiske eller rene fakta uten samspillsdimensjon.',
    },
    {
      id: 'geo-1-1-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Velg et sted i naerheten av der du bor. Beskriv stedet fra baade et naturgeografisk og et samfunnsgeografisk perspektiv.',
      solution: 'Svaret boer inneholde: 1) Naturgeografisk: Terreng, berggrunn, klima, vegetasjon, vann. 2) Samfunnsgeografisk: Bosetting, naering, transport, historie. 3) Samspill: Hvordan naturforholdene har pavirket bosetting og naering paa stedet.',
    },
    {
      id: 'geo-1-1-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket av foelgende kjernesporsmal er typisk for geografi?',
      options: [
        { id: 'a', text: 'Hvor finnes fenomenet, og hvorfor akkurat der?', isCorrect: true },
        { id: 'b', text: 'Naar skjedde hendelsen, og hva kom foerst?', isCorrect: false },
        { id: 'c', text: 'Hvilke atomer bestaar stoffet av?', isCorrect: false },
        { id: 'd', text: 'Hva er den matematiske formelen for fenomenet?', isCorrect: false },
      ],
      solution: 'Geografiens kjernesporsmal handler alltid om sted og rom: Hvor, hvorfor der, og hva betyr det? Det romlige perspektivet skiller geografi fra andre fag.',
    },
  ],
};

// ============================================================================
// Kapittel 1.2: Kart og kartprojeksjoner
// ============================================================================

export const CHAPTER_GEOGRAFI_1_2: TextbookChapter = {
  id: 'geografi-1-1-2',
  courseId: 'geografi',
  chapterNumber: '1.2',
  title: 'Kart og kartprojeksjoner',
  description: 'Kartets historie, maalestokk, kartbegreper og ulike kartprojeksjoner.',
  estimatedMinutes: 25,
  competenceGoals: [
    'bruke kart og geografiske informasjonssystemer til aa utforske, analysere og presentere geografiske forhold',
  ],
  content: [
    {
      id: 'geo-1-2-intro',
      type: 'text',
      content: `# Kart og kartprojeksjoner

Kart er geografens viktigste verktoy. Et kart er en forenklet framstilling av virkeligheten, der deler av jordoverflaten gjengis paa et flatt underlag. Alle kart er **modeller** - de forenkler og velger ut informasjon for aa kommunisere geografisk kunnskap.

## Kartets historie

Mennesker har laget kart i tusenvis av aar. De eldste kjente kartene er babylonske leirtavler fra ca. 2300 f.Kr. som viser jordbruksarealer og irrigasjonskanaler.

### Viktige milepaler i karthistorien

**Antikken:**
Den greske geografen Eratosthenes beregnet jordens omkrets rundt 240 f.Kr. med forbausende noyaktighet. Ptolemaios (ca. 150 e.Kr.) laget et verdenskart med et koordinatsystem basert paa bredde- og lengdegrader.

**Middelalderen:**
I Europa dominerte religioese verdenskart (mappae mundi) der Jerusalem var sentrum. Arabiske kartografer som al-Idrisi laget mer noyaktige kart basert paa reiser og observasjoner.

**Oppdagelsestiden:**
Gerardus Mercator utviklet i 1569 en kartprojeksjon som ble standard for sjofart. Denne projeksjonen bevarer vinkler, men forvrenger arealer.

**Moderne tid:**
Fra 1900-tallet revolusjonerte flybilder og senere satellitter kartleggingen. I dag kan vi oppdatere kart i sanntid med GPS og satellittdata.`,
    },
    {
      id: 'geo-1-2-def-kartbegreper',
      type: 'definition',
      title: 'Kartbegreper',
      content: `**Maalestokk:** Forholdet mellom avstand paa kartet og virkeligheten. 1:50 000 betyr at 1 cm paa kartet tilsvarer 50 000 cm (500 m) i virkeligheten.

**Hoeydekurver:** Linjer som forbinder punkter med samme hoeyde over havet. Tette kurver = bratt terreng. Avstand mellom kurvene kalles ekvidistanse.

**Koordinatsystem:** System for aa angi posisjon. I Norge brukes UTM-koordinater og geografiske koordinater (bredde- og lengdegrader).

**Tegnforklaring:** Oversikt over symbolene som brukes paa kartet.

**Projeksjon:** Metode for aa overfoere jordoverflaten til et flatt kart. Alle projeksjoner gir noe forvrengning.`,
    },
    {
      id: 'geo-1-2-maalestokk',
      type: 'text',
      content: `## Maalestokk

Maalestokken forteller oss forholdet mellom avstand paa kartet og tilsvarende avstand i virkeligheten.

### Stor og liten maalestokk

| Maalestokk | Type | Detaljer | Bruk |
|-------------|------|----------|------|
| 1:1 000 | Svart stor | Svart mange detaljer | Eiendomskart |
| 1:5 000 | Stor | Mange detaljer | Reguleringsplan |
| 1:50 000 | Middels | Middels detaljer | Turkart |
| 1:250 000 | Liten | Faa detaljer | Veikart |
| 1:1 000 000 | Svart liten | Svart faa detaljer | Overisktskart |

**Viktig:** Jo stoerre tallet etter kolon, jo mindre er maalestokken. Et kart i 1:50 000 har stoerre maalestokk (og flere detaljer) enn et kart i 1:250 000.

### Beregne avstander
For aa beregne virkelig avstand:
**Kartavstand x maalestokktall = virkelig avstand**

Eksempel: 4 cm paa et kart med maalestokk 1:50 000:
4 cm x 50 000 = 200 000 cm = 2000 m = 2 km`,
    },
    {
      id: 'geo-1-2-projeksjoner',
      type: 'text',
      content: `## Kartprojeksjoner

Jorden er en kule (mer presist en **geoide**), og det er umulig aa overfoere en kuleflate til et flatt kart uten forvrengning. Kartografer maa velge hva de vil bevare og hva de vil ofre.

### Typer forvrengning
- **Arealforvrengning**: Omraader faar feil stoerrelse
- **Vinkelforvrengning**: Former og retninger forvrenges
- **Avstandsforvrengning**: Avstander blir unoyaktige

Ingen projeksjon kan bevare alt samtidig. Valg av projeksjon avhenger av formaal.`,
    },
    {
      id: 'geo-1-2-def-projeksjoner',
      type: 'definition',
      title: 'Kartprojeksjoner',
      content: `**Mercator-projeksjonen:** Vinkelriktig (konform). Bevarer former lokalt, men forvrenger arealer sterkt mot polene. Groenland ser like stort ut som Afrika, selv om Afrika er 14 ganger stoerre. Brukes til sjofart og navigasjon fordi rette linjer paa kartet tilsvarer kurs med konstant kompassretning.

**Peters-projeksjonen:** Arealriktig (ekvivalent). Viser landoraadenes riktige stoerrelse i forhold til hverandre, men forvrenger former. Ofte brukt for aa vise at utviklingsland er stoerre enn Mercator gir inntrykk av.

**UTM (Universal Transverse Mercator):** Deler jorden inn i 60 soner paa 6 lengdegrader. Hvert omraade faar sitt eget koordinatsystem. Brukes til topografiske kart i Norge. Norge ligger i UTM-sone 32 og 33.

**Viktig poeng:** Det finnes ingen perfekt kartprojeksjon. Valg av projeksjon avhenger av formaalet.`,
    },
    {
      id: 'geo-1-2-karttyper',
      type: 'text',
      content: `## Karttyper

### Topografiske kart
Viser terreng, hoeyder, vann, veier og bebyggelse. Norges offisielle topografiske kart lages av Kartverket. Ekvidistansen (avstand mellom hoeydekurvene) varierer med maalestokk.

### Tematiske kart
Fremhever ett eller noen faa tema:
- **Geologiske kart**: Viser bergarter og loesemassetyper
- **Klimakart**: Viser temperatur, nedboer, klimasoner
- **Befolkningskart**: Viser befolkningstetthet og fordeling
- **Arealdekke-kart**: Viser arealbruk (skog, jordbruk, bebyggelse)

### Digitale kart
Moderne kart er oftest digitale og interaktive:
- Kan zoome og panorere
- Velge ulike kartlag
- Kombinere med sanntidsdata (trafikk, vaer)
- Brukergenerert innhold (OpenStreetMap)`,
    },
    {
      id: 'geo-1-2-example',
      type: 'example',
      title: 'Beregne avstand med maalestokk',
      problem: 'Paa et kart med maalestokk 1:50 000 maaler du at avstanden mellom to fjelltopper er 6 cm. Hvor lang er avstanden i virkeligheten?',
      solution: `**Loesning:**

1. Maalestokk 1:50 000 betyr at 1 cm paa kartet = 50 000 cm i virkeligheten

2. 6 cm paa kartet = 6 x 50 000 cm = 300 000 cm

3. Gjoer om til kilometer: 300 000 cm = 3000 m = 3 km

**Svar:** Avstanden mellom fjelltoppene er 3 km.

**Merk:** Dette er horisontal avstand (luftlinje). Den faktiske gangavstanden kan vaere lengre paa grunn av terrenget.`,
    },
    {
      id: 'geo-1-2-tip',
      type: 'tip',
      title: 'Studietips: Kart og projeksjoner',
      content: `**Til eksamen:**
- Oev paa aa beregne avstander med maalestokk - dette er en typisk eksamensoppgave
- Forstaa forskjellen mellom Mercator (vinkelriktig) og Peters (arealriktig)
- Kunne forklare hvorfor alle kartprojeksjoner har forvrengning

**Praktisk oeving:**
- Bruk norgeskart.no til aa oeve paa karttolkning
- Sammenlign samme omraade i ulike maalestokker
- Prov aa finne din skole paa kartet og les av koordinater`,
    },
  
    {
      id: 'geo-1-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Kart er forenklede modeller av virkeligheten
- **Maalestokk** angir forholdet mellom avstand paa kartet og i virkeligheten
- Jo stoerre tallet etter kolon, jo mindre er maalestokken
- **Kartprojeksjoner** overforer jordoverflaten til et flatt kart, men gir alltid noe forvrengning
- **Mercator** bevarer vinkler men forvrenger arealer, **Peters** bevarer arealer men forvrenger former
- **UTM-koordinater** og **bredde-/lengdegrader** brukes til aa angi posisjon`,
    },
  ],
  exercises: [
    {
      id: 'geo-1-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr maalestokk 1:50 000?',
      options: [
        { id: 'a', text: '1 cm paa kartet tilsvarer 500 m i virkeligheten', isCorrect: true },
        { id: 'b', text: '1 cm paa kartet tilsvarer 50 m i virkeligheten', isCorrect: false },
        { id: 'c', text: '1 cm paa kartet tilsvarer 5 km i virkeligheten', isCorrect: false },
        { id: 'd', text: '1 cm paa kartet tilsvarer 50 km i virkeligheten', isCorrect: false },
      ],
      solution: '1:50 000 betyr at 1 cm paa kartet tilsvarer 50 000 cm i virkeligheten. 50 000 cm = 500 m.',
    },
    {
      id: 'geo-1-2-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Regn ut virkelig avstand: a) Maalestokk 1:25 000, kartavstand 4 cm. b) Maalestokk 1:100 000, kartavstand 8,5 cm. c) Maalestokk 1:50 000, kartavstand 12 cm.',
      solution: 'a) 4 x 25 000 = 100 000 cm = 1 km. b) 8,5 x 100 000 = 850 000 cm = 8,5 km. c) 12 x 50 000 = 600 000 cm = 6 km.',
    },
    {
      id: 'geo-1-2-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken kartprojeksjon bevarer riktige vinkler og brukes til sjofart?',
      options: [
        { id: 'a', text: 'Mercator-projeksjonen', isCorrect: true },
        { id: 'b', text: 'Peters-projeksjonen', isCorrect: false },
        { id: 'c', text: 'UTM-projeksjonen', isCorrect: false },
        { id: 'd', text: 'Stereografisk projeksjon', isCorrect: false },
      ],
      solution: 'Mercator-projeksjonen er vinkelriktig (konform) og bevarer retninger, noe som gjoer den ideell for navigasjon og sjofart. Ulempen er at arealer forvrenge sterkt mot polene.',
    },
    {
      id: 'geo-1-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor alle kartprojeksjoner gir noe forvrengning. Hva maa kartografer velge mellom?',
      solution: 'Jorden er en kule (geoide), og det er matematisk umulig aa overfoere en kuleflate til et flatt kart uten forvrengning. Kartografer maa velge mellom aa bevare: 1) Riktige arealer (arealriktige/ekvivalente projeksjoner som Peters), 2) Riktige vinkler/former (vinkelriktige/konforme projeksjoner som Mercator), eller 3) Riktige avstander langs visse linjer (avstandsriktige projeksjoner). Ingen projeksjon kan bevare alt samtidig.',
    },
    {
      id: 'geo-1-2-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva viser tette hoeydekurver paa et topografisk kart?',
      options: [
        { id: 'a', text: 'Bratt terreng', isCorrect: true },
        { id: 'b', text: 'Flatt terreng', isCorrect: false },
        { id: 'c', text: 'Skog', isCorrect: false },
        { id: 'd', text: 'Tettbebyggelse', isCorrect: false },
      ],
      solution: 'Hoeydekurver forbinder punkter med samme hoeyde over havet. Naar kurvene ligger tett, betyr det at hoeyden endrer seg raskt over en kort avstand - altsaa er terrenget bratt.',
    },
  ],
};

// ============================================================================
// Kapittel 1.3: GIS og digitale kart
// ============================================================================

export const CHAPTER_GEOGRAFI_1_3: TextbookChapter = {
  id: 'geografi-1-1-3',
  courseId: 'geografi',
  chapterNumber: '1.3',
  title: 'GIS og digitale kart',
  description: 'Geografiske informasjonssystemer, GIS-analysemetoder og digitale kartverktoy.',
  estimatedMinutes: 25,
  competenceGoals: [
    'bruke kart og geografiske informasjonssystemer til aa utforske, analysere og presentere geografiske forhold',
    'bruke digitale verktoy til aa samle inn, behandle og presentere geografisk informasjon',
  ],
  content: [
    {
      id: 'geo-1-3-intro',
      type: 'text',
      content: `# GIS og digitale kart

**GIS** (Geografiske informasjonssystemer) har revolusjonert maalten vi arbeider med geografisk informasjon. GIS er mer enn bare digitale kart - det er et komplett system for aa samle inn, lagre, analysere og presentere geografiske data.

## Hva er GIS?

Et GIS bestaar av fire hoveddeler:
1. **Data**: Geografisk informasjon (posisjon + egenskaper)
2. **Maskinvare**: Datamaskiner, GPS, sensorer
3. **Programvare**: GIS-programmer som ArcGIS, QGIS, Google Earth
4. **Brukere**: Mennesker som analyserer og tolker dataene

### Kartlag i GIS
Den stoerste fordelen med GIS er muligheten til aa bruke **kartlag**. Ulike typer informasjon lagres i separate lag som kan kombineres:
- Terreng og hoeyde
- Veier og infrastruktur
- Bygninger
- Befolkningstetthet
- Naturomraader
- Vannforekomster`,
    },
    {
      id: 'geo-1-3-def-gis',
      type: 'definition',
      title: 'GIS - Geografiske informasjonssystemer',
      content: 'GIS (Geografisk informasjonssystem) er dataverktoy for aa samle, lagre, analysere og presentere geografisk informasjon. GIS kobler sammen stedsinformasjon (\"hvor\") med egenskapsinformasjon (\"hva\") og gjoer det mulig aa se moenstre og sammenhenger som ellers ville vaert vanskelig aa oppdage.',
    },
    {
      id: 'geo-1-3-datatyper',
      type: 'text',
      content: `## Datatyper i GIS

### Vektor-data
Geografiske objekter representert som **punkter, linjer og polygoner**:
- **Punkter**: Enkeltstaaende steder (sykehus, skoler, malingsstasjoner)
- **Linjer**: Lineaere strukturer (veier, elver, roerledninger)
- **Polygoner**: Omraader (kommuner, innsjoer, verneomraader)

Hvert objekt har en tabell med egenskaper (attributter). En vei kan for eksempel ha attributter for navn, bredde, fartsgrense og trafikkvolum.

### Raster-data
Informasjon lagret som et rutenett (grid) av celler:
- Satellittbilder
- Hoeydemodeller (DEM)
- Temperaturkart
- Nedboerskart

Hver celle har en verdi (f.eks. hoeyde i meter eller temperatur i grader).`,
    },
    {
      id: 'geo-1-3-def-analysemetoder',
      type: 'definition',
      title: 'GIS-analysemetoder',
      content: `**Bufferanalyse:** Oppretter en sone (buffer) rundt et geografisk objekt. Eksempel: Finn alle boliger innenfor 500 meter fra en planlagt motorvei (stoeysone).

**Overlay-analyse:** Legger flere kartlag oppaa hverandre for aa finne sammenhenger. Eksempel: Kombinere jordtype, helning og nedboer for aa finne egnede jordbruksarealer.

**Nettverksanalyse:** Analyserer forbindelser i nettverk (veier, roerledninger). Eksempel: Finn korteste rute mellom to steder, eller beregn kjoretid til naermeste sykehus.

**Terrenganalyse:** Beregner helning, eksposisjon og siktlinjer fra digitale hoeydemodeller. Brukes i arealplanlegging og skredvurdering.

**Romlig statistikk:** Analyserer moenstre i romlig fordeling. Eksempel: Er sykdomstilfeller klynget i bestemte omraader, eller tilfeldig fordelt?`,
    },
    {
      id: 'geo-1-3-bruk',
      type: 'text',
      content: `## GIS i bruk

GIS brukes i nesten alle sektorer i samfunnet:

### Offentlig forvaltning
- **Kommuneplanlegging**: Arealbruk, reguleringsplaner, konsekvensutredninger
- **Helse**: Kartlegging av sykdomsutbredelse (epidemiologi)
- **Beredskap**: Planlegging av evakueringsruter, flomsonekart

### Naering og industri
- **Transport**: Ruteplanlegging, logistikk
- **Energi**: Plassering av vindmoeller, solanlegg
- **Eiendom**: Eiendomsregistrering, verdsetting

### Forskning og miljoe
- **Klimaforskning**: Overvaaking av klimaendringer
- **Naturforvaltning**: Verneomraader, artskartlegging
- **Arkeologi**: Lokalisering av kulturminner

### Hverdagen
- Google Maps, Apple Maps (navigasjon)
- Finn.no (boligkart)
- Yr.no (vaerkart)
- Pokemon Go (posisjonsbasert spill)`,
    },
    {
      id: 'geo-1-3-verktoy',
      type: 'text',
      content: `## Digitale kartverktoy

### Profesjonelle GIS-programmer
- **ArcGIS**: Markedsledende GIS-programvare. Brukes i forskning og forvaltning. Har gratisversjon for studenter (ArcGIS Online).
- **QGIS**: Gratis og aapen kildekode. Godt alternativ for skoleprosjekter og feltarbeid. Kan det meste som ArcGIS kan.

### Nettbaserte kartverktoy
- **Norgeskart.no**: Kartverkets offisielle karttjeneste med topografiske kart, flybilder og historiske kart.
- **Google Earth**: Utforsking av hele kloden med satellittbilder, 3D-terreng og tidslinjer.
- **Gapminder**: Interaktive kart og grafer som viser global utvikling over tid.

### GPS og posisjonsbestemmelse
**GPS (Global Positioning System)** er et satellittbasert system for noyaktig posisjonsbestemmelse. Det fungerer ved at en GPS-mottaker beregner sin posisjon basert paa signaler fra minst fire satellitter. Noyaktighet: Typisk 2-5 meter for sivile enheter.`,
    },
    {
      id: 'geo-1-3-example',
      type: 'example',
      title: 'GIS i praksis: Plassering av ny skole',
      problem: 'En kommune skal bygge en ny barneskole. Hvordan kan GIS brukes til aa finne den beste plasseringen?',
      solution: `**GIS-analyse for skoleplassering:**

1. **Samle kartlag:**
   - Befolkningsdata (hvor bor barn i skolealder?)
   - Eksisterende skoler og kapasitet
   - Veinett og gangavstand
   - Ledig kommunalt areal
   - Stoeysoner og forurensning

2. **Bufferanalyse:**
   - Finn omraader innenfor 2 km gangavstand fra flest barn
   - Finn arealer utenfor stoeysoner fra motorveier

3. **Overlay-analyse:**
   - Kombiner alle kriteriene for aa finne egnede omraader
   - Fjern arealer med bratt terreng, flomfare eller vernestatus

4. **Nettverksanalyse:**
   - Beregn gangavstand for alle barn til de mulige tomtene
   - Vurder tilgjengelighet med kollektivtransport

5. **Resultat:**
   - Rangerte alternativer med kart og statistikk
   - Beslutningsgrunnlag for kommunestyret

**Konklusjon:** GIS gjoer det mulig aa ta kunnskapsbaserte beslutninger ved aa analysere mange faktorer samtidig.`,
    },
    {
      id: 'geo-1-3-tip',
      type: 'tip',
      title: 'Praktisk oeving med GIS',
      content: `**Prov selv:**
- Gaa inn paa norgeskart.no og finn hjemstedet ditt. Bytt mellom ulike kartlag (topografisk, flyfoto, sjokart).
- Last ned QGIS (gratis) og importer data fra Geonorge.no.
- Bruk Google Earth til aa maale avstander og utforske terreng i 3D.

**Nyttige datakilder:**
- Geonorge.no: Norges nasjonale katalog for geografiske data
- SSB kart: Statistisk sentralbyraas kartdata
- OpenStreetMap: Aapen kartdatabase laget av frivillige`,
    },
  
    {
      id: 'geo-1-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **GIS** (geografiske informasjonssystemer) organiserer og analyserer geografiske data i digitale kartlag
- Data kan vaere i **vektor**- (punkt, linje, polygon) eller **raster**-format (rutenett med piksler)
- GIS brukes til arealplanlegging, miljoeovervaaking, helse, krisesituasjoner og mange andre formaal
- **GPS** bruker satellitter til aa bestemme noyaktig posisjon
- Digitale kart som Google Maps og Norgeskart gjoer geografisk informasjon tilgjengelig for alle`,
    },
  ],
  exercises: [
    {
      id: 'geo-1-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva staar GIS for?',
      options: [
        { id: 'a', text: 'Geografiske informasjonssystemer', isCorrect: true },
        { id: 'b', text: 'Global informasjonstjeneste', isCorrect: false },
        { id: 'c', text: 'Generell informasjonsstatistikk', isCorrect: false },
        { id: 'd', text: 'Geodetisk informasjonssystem', isCorrect: false },
      ],
      solution: 'GIS staar for Geografiske informasjonssystemer - dataverktoy for aa samle, lagre, analysere og presentere geografisk informasjon.',
    },
    {
      id: 'geo-1-3-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva en bufferanalyse er, og gi et praktisk eksempel paa hvordan den kan brukes i arealplanlegging.',
      solution: 'En bufferanalyse oppretter en sone (buffer) med en bestemt avstand rundt et geografisk objekt. Eksempel: En kommune kan lage en 300-meters buffersone rundt en elv for aa identifisere alle bygninger som kan vaere utsatt for flomfare. Bufferanalysen viser automatisk hvilke eiendommer som ligger innenfor risikosonen.',
    },
    {
      id: 'geo-1-3-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er en overlay-analyse i GIS?',
      options: [
        { id: 'a', text: 'Legge flere kartlag oppaa hverandre for aa finne sammenhenger', isCorrect: true },
        { id: 'b', text: 'Lagre data midlertidig i minnet', isCorrect: false },
        { id: 'c', text: 'Fjerne feil fra datasett', isCorrect: false },
        { id: 'd', text: 'Konvertere bilder til kart', isCorrect: false },
      ],
      solution: 'En overlay-analyse kombinerer flere kartlag for aa finne omraader som oppfyller bestemte kriterier. For eksempel kan man kombinere jordtype, helning og nedboer for aa finne egnede jordbruksarealer.',
    },
    {
      id: 'geo-1-3-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Nevn minst fire praktiske bruksomraader for GIS i samfunnet, og forklar kort hva GIS brukes til i hvert tilfelle.',
      solution: '1) Kommuneplanlegging: Analysere arealbruk og lage reguleringsplaner. 2) Noedetjenester: Finne raskeste rute til ulykkessted. 3) Klimaforskning: Overvaake endringer i temperatur, isubredelse og vegetasjon over tid. 4) Transport og logistikk: Optimalisere kjoeresruter for vareleveranser. 5) Helse: Kartlegge smittespredning og planlegge tilgang til helsetjenester.',
    },
    {
      id: 'geo-1-3-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er forskjellen mellom vektor-data og raster-data i GIS?',
      options: [
        { id: 'a', text: 'Vektor bruker punkter, linjer og polygoner; raster bruker rutenett av celler', isCorrect: true },
        { id: 'b', text: 'Vektor er 3D og raster er 2D', isCorrect: false },
        { id: 'c', text: 'Vektor er analogt og raster er digitalt', isCorrect: false },
        { id: 'd', text: 'Det er ingen forskjell, begrepene betyr det samme', isCorrect: false },
      ],
      solution: 'Vektor-data representerer objekter som punkter (steder), linjer (veier) og polygoner (omraader), med tilhoerende egenskapstabell. Raster-data lagrer informasjon som et rutenett (grid) der hver celle har en verdi - typisk brukt for satellittbilder og hoeydemodeller.',
    },
  ],
};

// ============================================================================
// Kapittel 1.4: Fjernanalyse og satellittbilder
// ============================================================================

export const CHAPTER_GEOGRAFI_1_4: TextbookChapter = {
  id: 'geografi-1-1-4',
  courseId: 'geografi',
  chapterNumber: '1.4',
  title: 'Fjernanalyse og satellittbilder',
  description: 'Fjernanalyse (remote sensing), typer satellittbilder og bruksomraader.',
  estimatedMinutes: 20,
  competenceGoals: [
    'bruke kart og geografiske informasjonssystemer til aa utforske, analysere og presentere geografiske forhold',
    'vurdere bruk av satellittbilder og fjernanalyse i geografisk forskning',
  ],
  content: [
    {
      id: 'geo-1-4-intro',
      type: 'text',
      content: `# Fjernanalyse og satellittbilder

Fjernanalyse (remote sensing) er innsamling av informasjon om jordoverflaten **uten fysisk kontakt**. Satellitter og fly utstyrt med sensorer registrerer elektromagnetisk straaling reflektert eller sendt ut fra jordoverflaten.

## Grunnprinsippet

All materie sender ut eller reflekterer elektromagnetisk straaling. Ulike materialer har ulike **spektrale signaturer** - det vil si at de reflekterer og absorberer straaling ulikt i forskjellige boelgelengder.

### Slik fungerer fjernanalyse
1. En energikilde (solen eller en radar) belyser jordoverflaten
2. Straalingen samhandler med overflaten (reflekteres, absorberes, sendes gjennom)
3. En sensor (paa satellitt eller fly) registrerer den reflekterte straalingen
4. Data sendes til en mottakerstasjon og bearbeides
5. Analysert informasjon presenteres som kart eller bilder`,
    },
    {
      id: 'geo-1-4-def-fjernanalyse',
      type: 'definition',
      title: 'Fjernanalyse',
      content: 'Fjernanalyse (remote sensing) er teknologi for aa samle inn informasjon om jordoverflaten fra avstand, vanligvis ved hjelp av sensorer montert paa satellitter eller fly. Sensorene registrerer elektromagnetisk straaling i ulike boelgelengder for aa kartlegge og overvaake jordoverflaten.',
    },
    {
      id: 'geo-1-4-typer',
      type: 'text',
      content: `## Typer satellittbilder

### Optiske bilder
- Registrerer **synlig lys og naerinfrarodt**
- Ligner vanlige fotografier, men kan fange opp boelgelengder utenfor det synlige spekteret
- **Fordel**: Gir detaljerte, intuitive bilder
- **Ulempe**: Blokkeres av skyer
- **Bruk**: Kartlegging av vegetasjon, arealbruk, byutvikling
- **Eksempler**: Landsat, Sentinel-2

### Radarbilder (SAR)
- Sender ut og mottar **mikroboelger**
- Fungerer **gjennom skyer og i moerke**
- **Fordel**: Varuavhengig, doegnkontinuerlig
- **Ulempe**: Vanskelig aa tolke for utraente
- **Bruk**: Maale terrengbevegelser, istykkelse, overvaake skipstrafikk
- **Eksempler**: Sentinel-1, RADARSAT

### Termiske bilder
- Registrerer **varmestraaling (infraroed)**
- Viser temperaturforskjeller paa jordoverflaten
- **Fordel**: Kan oppdage varmeanormalier
- **Bruk**: Kartlegge havtemperatur, byvarmeoyer, vulkanaktivitet, skogbranner
- **Eksempler**: MODIS, Landsat termisk kanal`,
    },
    {
      id: 'geo-1-4-def-spektral',
      type: 'definition',
      title: 'Spektral signatur',
      content: 'En spektral signatur er det unike moensteret av hvordan et materiale reflekterer og absorberer elektromagnetisk straaling i ulike boelgelengder. Frisk vegetasjon reflekterer for eksempel sterkt i naerinfrarodt, mens vann absorberer det meste. Dette gjoer det mulig aa skille mellom ulike overflatetyper paa satellittbilder.',
    },
    {
      id: 'geo-1-4-bruksomraader',
      type: 'text',
      content: `## Bruksomraader for fjernanalyse

### Miljoovervaaking
- Overvaaking av avskoging (f.eks. i Amazonas)
- Kartlegging av issmelting i Arktis og Antarktis
- Spoere oljesoelgrupper paa havet
- Overvaake korallbleking

### Naturkatastrofer
- Tidlig varsling av toerke i landbruksomraader
- Kartlegging av flomomraader i sanntid
- Skadevurdering etter jordskjelv, orkan eller vulkanutbrudd
- Overvaaking av skogbranner

### Landbruk og ressurser
- Presisjonsjordbruk (maale plantehelse med NDVI)
- Kartlegge vannressurser og irrigasjon
- Overvaake fiskeriressurser

### Norske eksempler
- **NVE** bruker fjernanalyse for aa kartlegge flom- og skredfare
- **NIBIO** overvaaker skog, jordbruk og arealendringer med satellittdata
- **Norsk Romsenter** koordinerer norsk bruk av fjernanalysedata
- **Copernicus-programmet** (EU) gir gratis satellittdata som Norge bruker aktivt`,
    },
    {
      id: 'geo-1-4-ndvi',
      type: 'text',
      content: `## NDVI - et viktig verktoy

**NDVI (Normalized Difference Vegetation Index)** er et maal paa vegetasjonens tilstand. Det beregnes fra forholdet mellom rodt lys og naerinfrarodt lys:

- Frisk vegetasjon absorberer rodt lys (til fotosyntese) og reflekterer naerinfrarodt
- NDVI gir verdier fra -1 til +1
- Hoey NDVI (0,6-0,9): Tett, frisk vegetasjon
- Lav NDVI (0-0,2): Lite eller ingen vegetasjon (oerken, snoe, vann)
- Negativ NDVI: Vann

NDVI brukes til aa:
- Overvaake avlinger og plantehelse
- Kartlegge toerke og oekenspredning
- Studere vegetasjonsendringer over tid
- Maale effekten av klimaendringer paa okosystemer`,
    },
    {
      id: 'geo-1-4-example',
      type: 'example',
      title: 'Fjernanalyse i praksis: Issmelting i Arktis',
      problem: 'Hvordan brukes fjernanalyse til aa overvaake issmeltingen i Arktis?',
      solution: `**Overvaaking av arktisk is med fjernanalyse:**

1. **Radarsatellitter** (Sentinel-1) kartlegger isutbredelsen uavhengig av skydekke og moerke (viktig i den arktiske vinteren)

2. **Optiske satellitter** (MODIS, Sentinel-2) gir detaljerte bilder av isoverflaten om sommeren

3. **Altimetersatellitter** (CryoSat-2) maaler istykkelsen ved aa registrere avviket mellom isoverflaten og havoverflaten

4. **Termiske sensorer** registrerer temperaturen paa isoverflaten og havet

**Resultater:**
- Arktisk sommeris har minsket med ca. 13% per tiar siden 1979
- Satellittdata gjentekommer hvert faa dager, noe som gir en kontinuerlig tidsserie
- Dataene brukes i klimamodeller for aa forutsi fremtidig isutvikling

**Betydning:** Uten fjernanalyse ville det vaert umulig aa overvaake saa store og utilgjengelige omraader systematisk.`,
    },
    {
      id: 'geo-1-4-tip',
      type: 'tip',
      title: 'Utforsk satellittbilder selv',
      content: `**Gratis verktoy:**
- **Google Earth**: Se satellittbilder av hele verden, med tidslinjer som viser endringer
- **Sentinel Hub EO Browser** (apps.sentinel-hub.com): Bla i Sentinel-satellittdata, lag egne bilder
- **NASA Worldview** (worldview.earthdata.nasa.gov): Se daglige satellittbilder av hele kloden

**Oevelses-ideer:**
- Finn et omraade som har endret seg mye (nybygging, avskoging) og sammenlign bilder over tid
- Finn forskjellen paa et omraade med og uten skydekke
- Se etter isbreer og sammenlign stoerrelsen over flere aar`,
    },
  
    {
      id: 'geo-1-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Fjernanalyse** er innsamling av informasjon om jordoverflaten uten fysisk kontakt
- **Passive sensorer** registrerer reflektert sollys eller utsendtt varmestraaling
- **Aktive sensorer** (radar, lidar) sender ut egne signaler
- Satellittbilder brukes til overvaaking av skog, is, byer, jordbruk og naturkatastrofer
- Fjernanalyse er viktig for aa overvaake klimaendringer og miljoeendringer globalt`,
    },
  ],
  exercises: [
    {
      id: 'geo-1-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er fjernanalyse?',
      options: [
        { id: 'a', text: 'Innsamling av informasjon om jordoverflaten fra avstand, f.eks. med satellitter', isCorrect: true },
        { id: 'b', text: 'Analyse av prover tatt fra jordoverflaten i laboratorium', isCorrect: false },
        { id: 'c', text: 'Intervjuer med mennesker om geografiske forhold', isCorrect: false },
        { id: 'd', text: 'Maaling av avstand mellom to punkter paa et kart', isCorrect: false },
      ],
      solution: 'Fjernanalyse (remote sensing) er innsamling av informasjon om jordoverflaten uten fysisk kontakt, vanligvis ved hjelp av sensorer paa satellitter eller fly som registrerer elektromagnetisk straaling.',
    },
    {
      id: 'geo-1-4-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom optiske satellittbilder, radarbilder og termiske bilder. Nevn en fordel og en bruk for hver type.',
      solution: 'Optiske bilder registrerer synlig lys og naerinfrarodt (fordel: intuitive bilder; bruk: kartlegge vegetasjon). Radarbilder sender ut og mottar mikroboelger (fordel: fungerer gjennom skyer; bruk: maale terrengbevegelser). Termiske bilder registrerer varmestraaling (fordel: viser temperaturforskjeller; bruk: kartlegge byvarmeoyer og vulkanaktivitet).',
    },
    {
      id: 'geo-1-4-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken type satellittbilder kan se gjennom skyer og fungere i moerke?',
      options: [
        { id: 'a', text: 'Radarbilder', isCorrect: true },
        { id: 'b', text: 'Optiske bilder', isCorrect: false },
        { id: 'c', text: 'Termiske bilder', isCorrect: false },
        { id: 'd', text: 'Ultraviolette bilder', isCorrect: false },
      ],
      solution: 'Radarbilder (SAR) sender ut egne mikroboelger og registrerer refleksjonen. Mikroboelger passerer gjennom skyer og trenger ikke sollys, saa radar fungerer baade gjennom skydekke og i moerke.',
    },
    {
      id: 'geo-1-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er NDVI, og hvordan kan det brukes til aa overvaake vegetasjon og landbruk?',
      solution: 'NDVI (Normalized Difference Vegetation Index) er et maal paa vegetasjonens tilstand beregnet fra forholdet mellom rodt og naerinfrarodt lys. Frisk vegetasjon reflekterer mye naerinfrarodt og absorberer rodt lys, noe som gir hoey NDVI (0,6-0,9). I landbruket kan NDVI brukes til aa oppdage toerke eller plantesykdommer tidlig ved aa se omraader med lavere NDVI enn normalt.',
    },
    {
      id: 'geo-1-4-ex5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvorfor er fjernanalyse spesielt viktig for overvaaking av arktiske omraader?',
      options: [
        { id: 'a', text: 'Fordi omraadene er vanskelig tilgjengelige, store og har lang moerketid', isCorrect: true },
        { id: 'b', text: 'Fordi det ikke finnes noen mennesker der', isCorrect: false },
        { id: 'c', text: 'Fordi is reflekterer all straaling', isCorrect: false },
        { id: 'd', text: 'Fordi satellitter ikke fungerer over tropene', isCorrect: false },
      ],
      solution: 'Arktis er et enormt omraade som er svart vanskelig tilgjengelig, med lang moerketid og ekstremt klima. Fjernanalyse (spesielt radar) gjoer det mulig aa overvaake isutbredelse og -tykkelse systematisk og kontinuerlig, noe som ville vaert praktisk umulig med feltarbeid alene.',
    },
  ],
};

// ============================================================================
// Kapittel 1.5: Feltarbeid og geografiske metoder
// ============================================================================

export const CHAPTER_GEOGRAFI_1_5: TextbookChapter = {
  id: 'geografi-1-1-5',
  courseId: 'geografi',
  chapterNumber: '1.5',
  title: 'Feltarbeid og geografiske metoder',
  description: 'Feltarbeid i geografi, datainnsamling, observasjon og kvalitative og kvantitative metoder.',
  estimatedMinutes: 20,
  competenceGoals: [
    'planleggje og gjennomfoere geografisk feltarbeid og presentere funn',
    'bruke ulike metodar for aa samle inn og analysere geografisk informasjon',
  ],
  content: [
    {
      id: 'geo-1-5-intro',
      type: 'text',
      content: `# Feltarbeid og geografiske metoder

Feltarbeid er en hjoeernesten i geografifaget. Det betyr aa gaa **ut i felt** - altsaa ut i det virkelige landskapet - for aa observere, maale og samle inn data. Mens GIS og fjernanalyse gir oss oversikt fra avstand, gir feltarbeid **foerstehaandskunnskap** om et sted.

## Hvorfor feltarbeid?

Feltarbeid er viktig fordi:
- Det gir **direkte erfaring** med geografiske fenomener
- Noen ting kan bare observeres paa stedet (lukt, lyd, stemning)
- Det trener **vitenskapelig metode** i praksis
- Det kobler teori til virkelighet
- Det utvikler geografisk tenkemaate og observasjonsevne`,
    },
    {
      id: 'geo-1-5-def-feltarbeid',
      type: 'definition',
      title: 'Feltarbeid',
      content: 'Feltarbeid i geografi er systematisk innsamling av data og observasjoner utendoers, paa et bestemt sted. Det kan inneholde maaling, kartlegging, fotografering, intervjuer, telling og registrering av fenomener. Feltarbeid er en viktig del av geografisk metode fordi det gir foerstehaandskunnskap som ikke kan erstattes av andrehands kilder.',
    },
    {
      id: 'geo-1-5-planlegging',
      type: 'text',
      content: `## Planlegging av feltarbeid

Et godt feltarbeid krever grundig planlegging. Foelg disse trinnene:

### 1. Formuler problemstilling
Hva vil du undersoeke? En god problemstilling er:
- **Spesifikk**: Ikke for bred (\"alt om elva\"), men avgrenset (\"vannkvaliteten i Akerselva\")
- **Undersokbar**: Mulig aa besvare med data du kan samle inn
- **Geografisk**: Knyttet til sted og rom

### 2. Velg metode
- Hva slags data trenger du?
- Hvilke verktoy trenger du?
- Kvantitativ eller kvalitativ tiln aerming?

### 3. Lag en plan
- Tidsplan og rute
- Utstyrsliste
- Registreringsskjema
- Sikkerhetsvurdering

### 4. Gjennomfoer feltarbeidet
- Vaer systematisk og noeyaktig
- Dokumenter alt (bilder, notater, GPS-koordinater)
- Noter vaerforhold, tidspunkt og andre relevante forhold

### 5. Bearbeid og presenter
- Organiser dataene
- Analyser funn
- Presenter resultater med kart, grafer og tekst`,
    },
    {
      id: 'geo-1-5-datainnsamling',
      type: 'text',
      content: `## Metoder for datainnsamling

### Observasjon
- **Systematisk observasjon**: Registrere fenomener etter et forhaaldsbestemt skjema
- **Deltakende observasjon**: Vaere til stede i et miljoe over tid
- **Fotografering og filming**: Visuell dokumentasjon med GPS-merking

### Maaling
- **GPS**: Posisjonsbestemmelse av observasjonspunkter
- **Temperaturmaaling**: Luft, vann, jord
- **pH-maaling**: Vannkvalitet
- **Trafikkmaaling**: Telle kjoeretoey og fotgjengere
- **Stoeymaaling**: Desibel-maalinger

### Intervjuer og sporreundersoekelser
- **Strukturerte intervjuer**: Faste spoersmaal i fast rekkefoelge
- **Semi-strukturerte intervjuer**: Forberedte tema, men fleksibel samtale
- **Sporreundersoekelser**: Skriftlige spoersmaal til mange respondenter

### Kartlegging
- Tegne kart over omraader i felt
- Markere observasjoner paa kart
- Bruke GPS til aa logge ruter og punkter`,
    },
    {
      id: 'geo-1-5-def-metoder',
      type: 'definition',
      title: 'Kvantitativ og kvalitativ metode',
      content: `**Kvantitativ metode:** Innsamling av data som kan uttrykkes i tall og analyseres statistisk. Eksempler: temperaturmaaling, trafikktellingen, befolkningsstatistikk. Gir noyaktige, sammenlignbare resultater.

**Kvalitativ metode:** Innsamling av data som beskriver kvaliteter, erfaringer og meninger. Eksempler: intervjuer, observasjon, fotografier. Gir dypere forstaelse av fenomener.

**I praksis:** De fleste geografiske undersoekelser bruker en kombinasjon av begge metoder. For eksempel kan man maale luftkvalitet kvantitativt og intervjue innbyggere om hvordan de opplever miljoeet kvalitativt.`,
    },
    {
      id: 'geo-1-5-utstyr',
      type: 'text',
      content: `## Utstyr for feltarbeid i geografi

### Grunnleggende utstyr
- Feltnotatbok og blyant (fungerer i regn med riktig papir)
- Kart over omradet (papirkart som backup)
- Kompass
- GPS eller smarttelefon med kart-app
- Kamera (eller smarttelefon)
- Maalebaard

### Spesialisert utstyr
- pH-maaler (vannkvalitet)
- Termometer (temperaturmaaling)
- Vindmaaler (anemometer)
- Turbidimeter (maal for vannets klarhet)
- Jordboer (jordprofil)
- Dekningsgradramme (vegetasjonsanalyse)

### Digitale verktoy
- Kart-apper med GPS-logging (f.eks. Avenza Maps)
- ArcGIS Field Maps eller QField (GIS i felt)
- Google Forms (sporreundersoekelser)
- Droner (flybilder og 3D-modeller)`,
    },
    {
      id: 'geo-1-5-example',
      type: 'example',
      title: 'Feltarbeid: Undersoeke et vassdrag',
      problem: 'Du skal undersoeke vannkvaliteten i en lokal elv. Beskriv hvordan du ville planlagt og gjennomfoert feltarbeidet.',
      solution: `**Feltarbeid: Vannkvalitet i en lokal elv**

**Problemstilling:** Hvordan varierer vannkvaliteten langs elva, og hvilke faktorer pavirker den?

**Metode:**
1. Velg 5-6 maalepunkter langs elva (oppstroms, i sentrum, nedstroms fra industri, etc.)
2. Ved hvert punkt, maal:
   - pH (surhetsgrad)
   - Temperatur
   - Turbiditet (klarhet)
   - Observere bunnforhold og dyreliv

**Gjennomfoering:**
- Bruk GPS til aa logge noyaktig posisjon for hvert maalepunkt
- Maal til samme tid paa dagen (for sammenligning)
- Ta bilder og noter omgivelsene (bebyggelse, jordbruk, naturomraader)
- Registrer vaerforhold

**Analyse:**
- Sett opp resultatene i tabell og graf
- Marker maalepunktene paa et kart med farger (groenn = god, roed = daarlig)
- Sammenlign med kjente kilder til forurensning

**Konklusjon:** Diskuter hva som pavirker vannkvaliteten og foreslaa tiltak.`,
    },
    {
      id: 'geo-1-5-tip',
      type: 'tip',
      title: 'Tips for vellykket feltarbeid',
      content: `**Foer feltarbeidet:**
- Sjekk vaermeldingen og kle deg etter forholdene
- Lad batterier og ha backup (papirkart, ekstra batteri)
- Lag et registreringsskjema paa forhaand
- Informer noen om hvor du skal

**Under feltarbeidet:**
- Vaer systematisk - foelg planen
- Skriv ned alt, ogsaa ting som virker uvesentlige
- Ta mange bilder med GPS-merking
- Merk preever og noter noeyaktig

**Etter feltarbeidet:**
- Organiser data saa raskt som mulig mens du husker detaljene
- Lag rene tabeller, grafer og kart
- Vurder feilkilder og begrensninger`,
    },
  
    {
      id: 'geo-1-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Feltarbeid** gir foerstehaandskunnskap gjennom systematisk observasjon og datainnsamling
- Vanlige metoder inkluderer **kartlegging**, **maaling**, **observasjon**, **intervju** og **telling**
- God planlegging med klare problemstillinger og metodevalg er avgjoerendes for vellykket feltarbeid
- Resultatene maa dokumenteres, analyseres og presenteres paa en oversiktlig maate
- Feltarbeid er en viktig del av kompetansemaalene i geografi`,
    },
  ],
  exercises: [
    {
      id: 'geo-1-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er feltarbeid i geografi?',
      options: [
        { id: 'a', text: 'Systematisk innsamling av data og observasjoner utendoers paa et bestemt sted', isCorrect: true },
        { id: 'b', text: 'Analyse av satellittbilder paa en datamaskin', isCorrect: false },
        { id: 'c', text: 'Lesing av laereboeker om geografi', isCorrect: false },
        { id: 'd', text: 'Tegning av kart paa papir i klasserommet', isCorrect: false },
      ],
      solution: 'Feltarbeid betyr aa gaa ut i det virkelige landskapet for aa observere, maale og samle inn data paa et bestemt sted. Det gir foerstehaandskunnskap som ikke kan erstattes av andre kilder.',
    },
    {
      id: 'geo-1-5-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom kvantitativ og kvalitativ metode i geografi. Gi et eksempel paa hver.',
      solution: 'Kvantitativ metode samler inn data som kan uttrykkes i tall (f.eks. temperaturmaaling, trafikktellingen). Kvalitativ metode samler inn data som beskriver kvaliteter og erfaringer (f.eks. intervjuer med beboere, observasjon av bymiljoe). I praksis bruker man ofte begge: Man kan for eksempel maale luftkvalitet kvantitativt og intervjue folk om hvordan de opplever miljoeet.',
    },
    {
      id: 'geo-1-5-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken rekkefoelge er riktig for planlegging av feltarbeid?',
      options: [
        { id: 'a', text: 'Problemstilling, metodevalg, plan, gjennomfoering, presentasjon', isCorrect: true },
        { id: 'b', text: 'Gjennomfoering, problemstilling, presentasjon, plan, metodevalg', isCorrect: false },
        { id: 'c', text: 'Metodevalg, gjennomfoering, problemstilling, plan, presentasjon', isCorrect: false },
        { id: 'd', text: 'Presentasjon, plan, gjennomfoering, metodevalg, problemstilling', isCorrect: false },
      ],
      solution: 'Riktig rekkefoelge: 1) Formuler problemstilling, 2) Velg metode, 3) Lag en plan, 4) Gjennomfoer feltarbeidet, 5) Bearbeid og presenter resultatene. Problemstillingen maa komme foerst fordi den styrer alle de andre valgene.',
    },
    {
      id: 'geo-1-5-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Du skal undersoeke forskjeller i temperatur mellom et parkdekke og en asfaltert plass i naerheten av skolen din. Beskriv kort hvordan du vil planlegge og gjennomfoere dette feltarbeidet.',
      solution: 'Problemstilling: Er temperaturen lavere i parken enn paa asfalten? Metode: Kvantitativ (temperaturmaaling). Plan: Velg 3 maalepunkter i parken og 3 paa asfalt, maal paa same tid midt paa dagen, registrer med GPS. Gjennomfoering: Maal lufttemperatur 1,5 m over bakken og bakketemperatur ved hvert punkt. Noter skygge/sol-forhold. Presentasjon: Lag tabell og diagram som sammenligner parktemperaturer med asfalttemperaturer. Forventet funn: Asfalt er varmere (byvarmeoey-effekt).',
    },
    {
      id: 'geo-1-5-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket av foelgende er et eksempel paa kvalitativ datainnsamling?',
      options: [
        { id: 'a', text: 'Intervjue beboere om hvordan de opplever naermiljoeet', isCorrect: true },
        { id: 'b', text: 'Maale temperaturen i en elv', isCorrect: false },
        { id: 'c', text: 'Telle antall biler som passerer et kryss', isCorrect: false },
        { id: 'd', text: 'Maale pH-verdien i et vann', isCorrect: false },
      ],
      solution: 'Intervjuer er kvalitativ datainnsamling fordi de gir beskrivende data om erfaringer, meninger og opplevelser - ikke tall. De tre andre alternativene er kvantitative fordi de gir numeriske data.',
    },
  ],
};

// ============================================================================
// Kapittel 1.6: Statistikk og datavisualisering
// ============================================================================

export const CHAPTER_GEOGRAFI_1_6: TextbookChapter = {
  id: 'geografi-1-1-6',
  courseId: 'geografi',
  chapterNumber: '1.6',
  title: 'Statistikk og datavisualisering',
  description: 'Statistiske metoder i geografi, diagramtyper, datavisualisering og kildekritikk.',
  estimatedMinutes: 20,
  competenceGoals: [
    'bruke statistiske kjelder og digitale verktoy til aa utforske geografiske forhold',
    'vurdere kjelder og informasjon kritisk i geografisk samanheng',
  ],
  content: [
    {
      id: 'geo-1-6-intro',
      type: 'text',
      content: `# Statistikk og datavisualisering

Geografi er et dataintensivt fag. For aa forstaa geografiske moenstre og prosesser trenger vi statistikk og gode maalter aa visualisere data paa. I dette kapittelet larer vi om statistiske grunnbegreper, diagramtyper og kildekritikk.

## Hvorfor statistikk i geografi?

Statistikk hjelper oss med aa:
- **Beskrive** geografiske fenomener med tall (f.eks. befolkningstetthet, nedbor)
- **Sammenligne** steder og omraader
- **Oppdage moenstre** og trender over tid
- **Teste paasstander** med data i stedet for synsing
- **Kommunisere** geografisk kunnskap presist`,
    },
    {
      id: 'geo-1-6-def-grunnbegreper',
      type: 'definition',
      title: 'Statistiske grunnbegreper',
      content: `**Gjennomsnitt (middelverdi):** Summen av alle verdier delt paa antall verdier. Gir et typisk tall, men paavirkes av ekstremt hoye eller lave verdier.

**Median:** Den midterste verdien naar alle verdier er sortert. Mindre pavirket av ekstremverdier enn gjennomsnittet.

**Variasjon og spredning:** Hvor mye verdiene avviker fra gjennomsnittet. Stor variasjon betyr store forskjeller.

**Prosent og promille:** Andel av en helhet. Brukes mye i geografi (f.eks. befolkningsvekst i prosent per aar).

**Indeks:** Et forholdstall der en referanseverdi settes til 100. Gjoer det lettere aa sammenligne endringer over tid.`,
    },
    {
      id: 'geo-1-6-diagrammer',
      type: 'text',
      content: `## Diagramtyper i geografi

### Stolpediagram (soylediagram)
- Viser **verdier for ulike kategorier**
- Lengden paa stolpene representerer verdien
- **Bruk**: Sammenligne verdier mellom land, regioner eller tidsperioder
- **Eksempel**: BNP per innbygger i ulike land

### Linjediagram
- Viser **endring over tid** (tidsserie)
- Punktene forbindes med linjer
- **Bruk**: Vise trender og utvikling
- **Eksempel**: Gjennomsnittlig temperatur i Oslo over 100 aar

### Sektordiagram (kakediagram)
- Viser **andeler av en helhet**
- Hele sirkelen = 100%
- **Bruk**: Vise fordeling
- **Eksempel**: Arealbruk i en kommune (skog, jordbruk, bebyggelse, vann)

### Befolkningspyramide
- Viser **aldersfordeling og kjoennsfordeling** i en befolkning
- Unge nederst, eldre oeverst
- **Bruk**: Analysere befolkningsstruktur og forutsi fremtidig utvikling

### Koropletkart (tematisk kart)
- Viser **statistiske data paa kart** med farger
- Morkere farge = hoeyere verdi
- **Bruk**: Vise geografisk fordeling av data
- **Eksempel**: Befolkningstetthet per kommune`,
    },
    {
      id: 'geo-1-6-visualisering',
      type: 'text',
      content: `## God datavisualisering

### Prinsipper for gode diagrammer
1. **Velg riktig diagramtype** for dataene og budskapet
2. **Bruk tydelige akser** med enheter og benevning
3. **Gi diagrammet en beskrivende tittel**
4. **Angi kilde** for dataene
5. **Unngaa forvrengning** - start y-aksen paa 0 (med mindre det er gode grunner til noe annet)
6. **Hold det enkelt** - ikke for mange kategorier eller detaljer

### Vanlige feil
- Avkuttet y-akse som overdriver forskjeller
- For mange kategorier saa diagrammet blir uleselig
- Manglende kilde eller enheter
- 3D-effekter som forvrenger proporsjonene
- Bruke sektordiagram med for mange sektorer

### Digitale verktoy for visualisering
- **Regneark** (Excel, Google Sheets): Grunnleggende diagrammer
- **Gapminder**: Interaktive tidsserier for global utvikling
- **Datawrapper**: Lag profesjonelle diagrammer og kart gratis
- **QGIS**: Lag tematiske kart (koropletkart)`,
    },
    {
      id: 'geo-1-6-def-kildekritikk',
      type: 'definition',
      title: 'Kildekritikk i geografi',
      content: `Kildekritikk er evnen til aa vurdere kvaliteten og paaliteligheten til informasjon. I geografi er kildekritikk viktig fordi vi bruker data fra mange ulike kilder.

**Vurder alltid:**
- **Hvem** staar bak informasjonen? (Offentlig etat, forsker, interesseorganisasjon, privat firma?)
- **Naar** ble dataene samlet inn? (Er de oppdaterte?)
- **Hvordan** ble dataene samlet inn? (Metode, utvalg, dekning)
- **Hvorfor** ble informasjonen publisert? (Formaal, mulig bias)
- **Er kilden foerstehaands eller andrehaands?** (Originale data eller gjengivelse?)`,
    },
    {
      id: 'geo-1-6-kilder',
      type: 'text',
      content: `## Viktige statistikkilder i geografi

### Norske kilder
- **SSB (Statistisk sentralbyraa)**: Norges viktigste statistikkprodusent. Befolkning, okonomi, areal, miljoe.
- **Kartverket**: Kart og geografiske data for Norge
- **Miljodirektoratet**: Miljoe- og klimadata
- **NVE**: Data om vassdrag, flom og energi

### Internasjonale kilder
- **FN (United Nations)**: Befolkningsdata, baerekraftsdata, utviklingsdata
- **Verdensbanken**: Okonomisk statistikk for alle land
- **WHO**: Helse- og sykdomsstatistikk
- **NASA/ESA**: Satellittdata og klimadata
- **Gapminder**: Visualisering av global utvikling

### Kritisk bruk av statistikk
Statistikk kan vaere misvisende hvis den brukes ukritisk:
- **Gjennomsnitt kan skjule forskjeller** (f.eks. gjennomsnittsinntekt i et land med stor ulikhet)
- **Utvalg kan vaere skjevt** (hvem er spurt, hvem er utelatt?)
- **Maaletidspunkt kan pavirke** (en dag med ekstremt vaer er ikke representativ for klimaet)
- **Korrelasjon er ikke aarsak** (at to ting samvarierer betyr ikke at den ene foraarsaker den andre)`,
    },
    {
      id: 'geo-1-6-example',
      type: 'example',
      title: 'Tolke og vurdere statistikk',
      problem: 'Et nyhetsoppslag sier: \"Gjennomsnittsinntekten i kommune A er 600 000 kr, mens den i kommune B er 400 000 kr. Derfor har innbyggerne i kommune A det mye bedre.\" Vurder denne paasstanden kritisk.',
      solution: `**Kritisk vurdering:**

1. **Gjennomsnitt kan vaere misvisende:**
   - Hvis kommune A har noen faa svart rike innbyggere, trekker de gjennomsnittet opp
   - Medianen ville gitt et mer representativt bilde av den \"typiske\" innbyggeren

2. **Levekostnader varierer:**
   - Boligprisene i kommune A kan vaere mye hoeyere
   - Hoeyere inntekt betyr ikke noedvendigvis mer kjopekraft

3. **\"Ha det bedre\" er mer enn inntekt:**
   - Livskvalitet avhenger ogsaa av helse, trygghet, natur, sosiale relasjoner
   - Kommune B kan ha bedre helsetjenester, kortere reisevei, finere natur

4. **Data fra naar?**
   - Hvor ferske er tallene?
   - Har det skjedd store endringer nylig?

**Konklusjon:** Paastanden er for enkel. En skal vaere forsiktig med aa trekke store konklusjoner fra ett enkelt statistisk maal. Flere indikatorer og kontekst er noedevendig for aa sammenligne levekaar.`,
    },
    {
      id: 'geo-1-6-tip',
      type: 'tip',
      title: 'Tips for statistikk og kildekritikk',
      content: `**Til eksamen:**
- Oev paa aa lese og tolke ulike diagramtyper
- Kunne forklare forskjellen mellom gjennomsnitt og median
- Vis at du kan vurdere kilder kritisk (hvem, naar, hvordan, hvorfor)

**Praktisk oeving:**
- Gaa inn paa ssb.no og finn statistikk om din kommune
- Bruk Gapminder (gapminder.org) til aa utforske global utvikling
- Lag et diagram i Excel/Google Sheets basert paa data du finner
- Sammenlign to nyhetsartikler som bruker statistikk - hvem presenterer dataene mest balansert?`,
    },
  
    {
      id: 'geo-1-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Statistikk hjelper oss med aa beskrive, sammenligne og oppdage moenstre i geografiske data
- Viktige begreper er **gjennomsnitt**, **median**, **variasjon** og **indeks**
- Ulike diagramtyper egner seg for ulike formaal: linjediagram for trender, stolpediagram for sammenligninger, sektordiagram for andeler
- **Kildekritikk** er viktig - vurder hvem som staar bak, naar data ble samlet, metode og formaal
- SSB, Verdensbanken og FN er viktige statistikkilder i geografi`,
    },
  ],
  exercises: [
    {
      id: 'geo-1-6-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken diagramtype er best egnet til aa vise endring over tid?',
      options: [
        { id: 'a', text: 'Linjediagram', isCorrect: true },
        { id: 'b', text: 'Sektordiagram', isCorrect: false },
        { id: 'c', text: 'Koropletkart', isCorrect: false },
        { id: 'd', text: 'Befolkningspyramide', isCorrect: false },
      ],
      solution: 'Linjediagram (tidsserier) er best egnet til aa vise endring over tid fordi x-aksen viser tid og y-aksen viser verdien, og linjen gjoer det lett aa se trender og endringer.',
    },
    {
      id: 'geo-1-6-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom gjennomsnitt og median. Gi et eksempel paa naar medianen gir et bedre bilde enn gjennomsnittet.',
      solution: 'Gjennomsnitt er summen av alle verdier delt paa antall. Median er den midterste verdien naar alle er sortert. Eksempel: Inntekt i et nabolag der de fleste tjener 400-500 000 kr, men en person tjener 10 millioner. Gjennomsnittet blir kanskje 700 000 kr (misvisende hoyt), mens medianen forblir ca. 450 000 kr (representativt for de fleste).',
    },
    {
      id: 'geo-1-6-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva boer du alltid vurdere naar du bruker statistikk fra en kilde?',
      options: [
        { id: 'a', text: 'Hvem som staar bak, naar dataene ble samlet, metode og formaal', isCorrect: true },
        { id: 'b', text: 'Bare om tallene ser rimelige ut', isCorrect: false },
        { id: 'c', text: 'Bare om kilden er paa norsk', isCorrect: false },
        { id: 'd', text: 'Bare om kilden har mange foelgere paa sosiale medier', isCorrect: false },
      ],
      solution: 'Kildekritikk innebarer aa vurdere: Hvem staar bak informasjonen? Naar ble dataene samlet inn (er de oppdaterte)? Hvordan ble de samlet (metode)? Hvorfor ble de publisert (formaal, mulig bias)? Dette gir et helhetlig bilde av kildens paalitelighet.',
    },
    {
      id: 'geo-1-6-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En avis skriver: \"Antall sykkelulykker har oeekt med 30% i byer med nye sykkelveier. Derfor gjoer sykkelveier trafikken farligere.\" Vurder denne paastanden kildekritisk.',
      solution: 'Paastanden har flere svakheter: 1) Korrelasjon er ikke aarsak - kanskje flere sykler nettopp paa grunn av sykkelveiene, og okningen i ulykker skyldes at det er flere syklister totalt. 2) Man maa se paa ulykker per syklist, ikke absolutte tall. 3) Hvem staar bak statistikken (en bilorganisasjon kan ha en agenda)? 4) Hvilken tidsperiode? 5) Hva slags ulykker telles (alvorlige vs. smaa)? En grundigere analyse ville kanskje vist at risikoen per syklist faktisk har gaaett ned.',
    },
    {
      id: 'geo-1-6-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken norsk institusjon er den viktigste kilden for statistikk om befolkning, okonomi og samfunn?',
      options: [
        { id: 'a', text: 'Statistisk sentralbyraa (SSB)', isCorrect: true },
        { id: 'b', text: 'Kartverket', isCorrect: false },
        { id: 'c', text: 'Norsk Romsenter', isCorrect: false },
        { id: 'd', text: 'Meteorologisk institutt', isCorrect: false },
      ],
      solution: 'Statistisk sentralbyraa (SSB) er Norges viktigste statistikkprodusent og produserer offisiell statistikk om befolkning, okonomi, arbeidsliv, utdanning, helse, miljoe og mange andre omraader.',
    },
  ],
};

// ============================================================================
// Samle alle kapitler i Seksjon 1: Geografiens verktoy
// ============================================================================

export const GEOGRAFI_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_GEOGRAFI_1_1,
  CHAPTER_GEOGRAFI_1_2,
  CHAPTER_GEOGRAFI_1_3,
  CHAPTER_GEOGRAFI_1_4,
  CHAPTER_GEOGRAFI_1_5,
  CHAPTER_GEOGRAFI_1_6,
];

export function getGeografiDel1Chapter(chapterId: string): TextbookChapter | undefined {
  return GEOGRAFI_DEL1_CHAPTERS.find(chapter => chapter.id === chapterId);
}
