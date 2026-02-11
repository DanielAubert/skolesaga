/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Geofag 2 VG3 - Del 1: Jordsystemene
 *
 * Dekker LK20-kompetansemål for geofag 2 (GEO02-01):
 * «gjøre rede for vekselvirkninger mellom de ulike jordsystemene,
 *  og hvordan disse kan påvirke havet, atmosfæren og kryosfæren»
 *
 * Delkapitler 1.1–1.5
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Jordens sfærer og systemer
// ============================================================================

export const CHAPTER_GEOFAG_2_1_1: TextbookChapter = {
  id: 'geofag-2-1-1',
  courseId: 'geofag-2',
  chapterNumber: '1.1',
  title: 'Jordens sfærer og systemer',
  description:
    'Oversikt over jordens fem hovedsfærer og hvordan de utgjør et integrert system med energistrømmer og materialkretsløp.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for vekselvirkninger mellom de ulike jordsystemene, og hvordan disse kan påvirke havet, atmosfæren og kryosfæren',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'geo2-1-1-intro',
      type: 'text',
      content: `# Jordens sfærer og systemer

I Geofag 1 ble du introdusert for jordsystemet som helhet. I dette kapittelet går vi dypere inn i hvordan jordens fem hovedsfærer – **geosfæren**, **hydrosfæren**, **atmosfæren**, **biosfæren** og **kryosfæren** – er flettet sammen i et komplekst samspill.

Kompetansemålet for denne seksjonen er å kunne *gjøre rede for vekselvirkninger mellom de ulike jordsystemene, og hvordan disse kan påvirke havet, atmosfæren og kryosfæren*. For å forstå disse vekselvirkningene må vi først ha en solid oversikt over hva hver sfære inneholder, og hvordan energi og materie flyter mellom dem.

I dette kapittelet skal du lære om:
- De fem sfærene og hva som karakteriserer dem
- Begrepene reservoar, fluks og oppholdstid
- Energistrømmer fra sol og jordens indre
- Materialkretsløp som binder sfærene sammen`,
    },

    // ========== BLOKK 1: De fem sfærene ==========
    {
      id: 'geo2-1-1-def-1',
      type: 'definition',
      title: 'Jordens fem sfærer',
      content:
        '**Geosfæren** omfatter fast fjell, sedimenter og jordens indre (kjerne, mantel, skorpe). **Hydrosfæren** inkluderer alt vann i flytende form – hav, innsjøer, elver og grunnvann. **Atmosfæren** er gasskappe som omgir jorden. **Biosfæren** er summen av alle levende organismer og deres leveområder. **Kryosfæren** er den frosne delen av jordoverflaten – isbreer, innlandsis, sjøis, snødekke og permafrost.',
    },
    {
      id: 'geo2-1-1-text-sfaerer',
      type: 'text',
      content: `## Sfærene i detalj

### Geosfæren
Geosfæren strekker seg fra jordoverflaten helt ned til den indre kjernen, rundt 6 371 km under føttene våre. Den omfatter jordskorpen, mantelen og kjernen. Prosesser som platetektonikk, vulkanisme og forvitring foregår her, og de leverer mineraler og gasser til de andre sfærene.

### Hydrosfæren
Omtrent 71 % av jordoverflaten er dekket av vann. Havet inneholder ca. 96,5 % av alt vann på jorden. Resten finnes som ferskvann i isbreer, grunnvann, innsjøer og elver. Hydrosfæren er avgjørende for klimaregulering fordi vann har høy varmekapasitet og transporterer varme via havstrømmer.

### Atmosfæren
Atmosfæren er et tynt gasslag – 99 % av massen befinner seg under 30 km høyde. Den består hovedsakelig av nitrogen (78 %), oksygen (21 %) og argon (0,9 %), med små mengder karbondioksid, vanndamp og andre gasser. Atmosfæren beskytter mot UV-stråling, regulerer temperaturen via drivhuseffekten og transporterer fuktighet og energi.

### Biosfæren
Biosfæren finnes overalt der det er liv – fra dyphavets hydrotermale ventiler til øvre troposfære. Levende organismer påvirker de andre sfærene gjennom fotosyntese, respirasjon, forvitring og oppbygging av sedimenter (f.eks. kalkstein fra skall).

### Kryosfæren
Kryosfæren omfatter alt fryst vann: innlandsisen på Grønland og Antarktis, fjellbreer, sjøis i Arktis, sesongmessig snødekke og permafrost. Kryosfæren spiller en nøkkelrolle i klimasystemet gjennom **albedoeffekten** – is og snø reflekterer en stor andel av innkommende solstråling.`,
    },
    {
      id: 'geo2-1-1-example-1',
      type: 'example',
      title: 'Sfærene i samspill: Havets rolle',
      problem:
        'Forklar hvordan havet (hydrosfæren) samvirker med minst tre andre sfærer.',
      solution: `**Løsning:**

1. **Hydrosfæren–atmosfæren**: Havet tar opp og avgir varme og CO₂ til atmosfæren. Fordampning fra havoverflaten tilfører vanndamp som driver nedbør og værsystemer.

2. **Hydrosfæren–kryosfæren**: Varme havstrømmer smelter sjøis fra undersiden. Når sjøis smelter, tilføres ferskvann som endrer salinitet og kan påvirke havstrømmene.

3. **Hydrosfæren–biosfæren**: Havet er levested for et enormt biologisk mangfold. Fytoplankton i havet står for om lag halvparten av global fotosyntese, og trekker CO₂ ut av atmosfæren.

4. **Hydrosfæren–geosfæren**: Elver eroderer berggrunn og frakter sedimenter til havet. Havbunnsspredning tilfører mineraler og varme til havvannet via hydrotermale ventiler.`,
    },
    {
      id: 'geo2-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken sfære omfatter permafrost?',
        options: [
          { id: 'a', text: 'Geosfæren', isCorrect: false },
          { id: 'b', text: 'Hydrosfæren', isCorrect: false },
          { id: 'c', text: 'Kryosfæren', isCorrect: true },
          { id: 'd', text: 'Biosfæren', isCorrect: false },
        ],
        solution:
          'Permafrost er jord eller berg som har vært frosset i minst to sammenhengende år. Selv om den befinner seg i grunnen, klassifiseres den som en del av kryosfæren fordi det er den frosne tilstanden som er det avgjørende kriteriet.',
      },
    },
    {
      id: 'geo2-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Lag en tabell som viser de fem sfærene med én viktig egenskap og ett eksempel for hver.',
        hints: [
          'Bruk kolonnene: Sfære – Viktig egenskap – Eksempel.',
          'Tenk på hva som kjennetegner sfæren mest, for eksempel varmekapasitet for hydrosfæren.',
        ],
        solution:
          'Eksempel på tabell:\n\n| Sfære | Viktig egenskap | Eksempel |\n|---|---|---|\n| Geosfæren | Fast og delvis plastisk materiale | Fjellkjeder dannet av platetektonikk |\n| Hydrosfæren | Høy varmekapasitet | Golfstrømmen transporterer varme nordover |\n| Atmosfæren | Regulerer stråling | Ozonlaget absorberer UV-stråling |\n| Biosfæren | Fotosyntese og respirasjon | Fytoplankton binder CO₂ |\n| Kryosfæren | Høy albedo | Innlandsisen på Antarktis reflekterer sollys |',
      },
    },

    // ========== BLOKK 2: Reservoarer, fluks og oppholdstid ==========
    {
      id: 'geo2-1-1-def-2',
      type: 'definition',
      title: 'Reservoar, fluks og oppholdstid',
      content:
        'Et **reservoar** er et lager av materie eller energi innenfor jordsystemet (f.eks. havet som vannreservoar, atmosfæren som CO₂-reservoar). **Fluks** er mengden materie eller energi som overføres mellom reservoarer per tidsenhet (f.eks. tonn karbon per år). **Oppholdstid** er gjennomsnittlig tid et molekyl oppholder seg i et reservoar: oppholdstid = reservoarstørrelse / fluks.',
    },
    {
      id: 'geo2-1-1-example-2',
      type: 'example',
      title: 'Beregning av oppholdstid',
      problem:
        'Atmosfæren inneholder ca. 3 200 gigatonn (Gt) karbon som CO₂. Hvert år tilføres ca. 220 Gt C fra respirasjon, forbrenning og havutgassing, og omtrent like mye fjernes via fotosyntese og havopptak. Hva er den omtrentlige oppholdstiden for et CO₂-molekyl i atmosfæren?',
      solution: `**Løsning:**

Oppholdstid = reservoarstørrelse / fluks

Oppholdstid = 3 200 Gt C / 220 Gt C per år ≈ **14,5 år**

Det betyr at et gjennomsnittlig CO₂-molekyl oppholder seg i atmosfæren i ca. 15 år før det tas opp av havet, planter eller andre reservoarer. Merk at dette er gjennomsnittet – noen molekyler fjernes raskt, mens andre kan bli værende mye lenger.`,
    },
    {
      id: 'geo2-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Havet inneholder ca. 1 335 millioner km³ vann. Hvert år fordamper det ca. 505 000 km³ fra havoverflaten. Hva er omtrentlig oppholdstid for et vannmolekyl i havet?',
        options: [
          { id: 'a', text: 'Ca. 265 år', isCorrect: false },
          { id: 'b', text: 'Ca. 2 640 år', isCorrect: true },
          { id: 'c', text: 'Ca. 26 400 år', isCorrect: false },
          { id: 'd', text: 'Ca. 50 år', isCorrect: false },
        ],
        solution:
          'Oppholdstid = 1 335 000 000 km³ / 505 000 km³ per år ≈ 2 644 år. Et vannmolekyl oppholder seg altså i gjennomsnitt ca. 2 640 år i havet før det fordamper.',
      },
    },

    // ========== BLOKK 3: Energistrømmer og materialkretsløp ==========
    {
      id: 'geo2-1-1-text-energi',
      type: 'text',
      content: `## Energistrømmer i jordsystemet

Jordsystemet drives av to hovedenergikilder:

### Solenergi (ekstern)
Solen leverer ca. **1 361 W/m²** (solarkonstanten) til jordens tverrsnitt. Av denne energien:
- Reflekteres ca. 30 % tilbake til verdensrommet (albedo)
- Absorberes ca. 70 % av atmosfære, hav og landoverflater

Solenergien driver:
- Vannkretsløpet (fordampning, nedbør)
- Atmosfærisk sirkulasjon (vind)
- Havsirkulasjon (overflatestrømmer)
- Fotosyntese

### Jordens indre energi (intern)
Varmestrømmen fra jordens indre er ca. **0,087 W/m²** – mye svakere enn solenergien, men avgjørende for:
- Platetektonikk og kontinentaldrift
- Vulkanisme og geotermisk aktivitet
- Jordskjelv
- Dannelse av nye bergarter og mineraler

### Materialkretsløp
Materie resirkuleres kontinuerlig i jordsystemet gjennom store biogeokjemiske kretsløp:
- **Vannkretsløpet**: fordampning → nedbør → avrenning → havet → fordampning
- **Karbonkretsløpet**: atmosfære → fotosyntese → biomasse → nedbrytning/forbrenning → atmosfære
- **Bergartssyklusen**: magma → vulkanske bergarter → forvitring → sedimenter → sedimentære bergarter → metamorfose → smelting

Disse kretsløpene knytter sfærene sammen og sørger for at materie og energi sirkulerer i systemet.`,
    },
    {
      id: 'geo2-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hvorfor solenergien har mye større betydning for prosesser på jordoverflaten enn jordens indre varme, selv om begge er viktige energikilder.',
        hints: [
          'Sammenlign energimengdene (W/m²) fra solen og fra jordens indre.',
        ],
        solution:
          'Solarkonstanten er ca. 1 361 W/m², mens varmestrømmen fra jordens indre kun er ca. 0,087 W/m². Det betyr at solenergien er mer enn 15 000 ganger sterkere per flateenhet. Derfor dominerer solenergien prosesser som vær, klima, vannkretsløp og biologisk produksjon. Jordens indre varme er derimot avgjørende for langsomme geologiske prosesser som platetektonikk og vulkanisme, som foregår over mye lengre tidsskalaer.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'geo2-1-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- Jorden består av fem sfærer: geosfæren, hydrosfæren, atmosfæren, biosfæren og kryosfæren.
- Sfærene utveksler materie og energi kontinuerlig gjennom flukser mellom reservoarer.
- Oppholdstid beskriver hvor lenge materie i gjennomsnitt oppholder seg i et reservoar.
- Solenergien driver overflate- og atmosfæreprosesser, mens jordens indre energi driver geologiske prosesser.
- Store materialkretsløp (vann, karbon, bergarter) knytter alle sfærene sammen.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'geo2-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøfting: Velg ett av de store materialkretsløpene (vann, karbon eller bergarter) og beskriv hvordan det involverer minst fire av de fem sfærene. Bruk konkrete eksempler.',
        hints: [
          'Karbonkretsløpet er et godt valg – det involverer alle fem sfærene.',
          'Tenk på hvor karbon lagres, hvordan det flyttes, og hvilke prosesser som er involvert.',
        ],
        solution:
          'Eksempel med karbonkretsløpet:\n\n1. **Atmosfæren**: CO₂ i luften er utgangspunktet.\n2. **Biosfæren**: Planter tar opp CO₂ via fotosyntese og bygger biomasse. Dyr spiser planter og puster ut CO₂.\n3. **Hydrosfæren**: Havet løser store mengder CO₂. Fytoplankton binder karbon som synker til bunnen.\n4. **Geosfæren**: Dødt organisk materiale kan begraves og over millioner av år danne fossile brensler (kull, olje, gass). Kalkstein dannes fra kalsiumkarbonat.\n5. **Kryosfæren**: Permafrost inneholder store mengder frosset organisk materiale. Når permafrost tiner, frigjøres metan (CH₄) og CO₂.',
      },
    },
    {
      id: 'geo2-1-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Prosjektoppgave: Lag et flytskjema (på papir eller digitalt) som viser de fem sfærene og de viktigste fluksene mellom dem. Inkluder minst åtte piler med korte beskrivelser av hva som overføres.',
        hints: [
          'Plasser de fem sfærene som bokser og tegn piler mellom dem.',
          'Eksempler på flukser: fordampning (hydrosfære → atmosfære), forvitring (geosfære → hydrosfære), fotosyntese (atmosfære → biosfære).',
        ],
        solution:
          'Et godt flytskjema bør vise blant annet: fordampning og nedbør mellom hav og atmosfære, CO₂-utveksling mellom atmosfære og biosfære/hav, vulkanske gasser fra geosfære til atmosfære, sedimenttransport fra geosfære til hydrosfære, issmelting fra kryosfære til hydrosfære, organisk materiale fra biosfære til geosfære, og albedobidrag fra kryosfære som påvirker energibalansen i atmosfæren.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Geosfæren', definition: 'Jordens faste del: skorpe, mantel og kjerne.' },
    { term: 'Hydrosfæren', definition: 'Alt vann i flytende form på og under jordoverflaten.' },
    { term: 'Atmosfæren', definition: 'Gasskappen som omgir jorden.' },
    { term: 'Biosfæren', definition: 'Summen av alle levende organismer og deres leveområder.' },
    { term: 'Kryosfæren', definition: 'Den frosne delen av jordoverflaten – is, snø og permafrost.' },
    { term: 'Reservoar', definition: 'Et lager av materie eller energi i jordsystemet.' },
    { term: 'Fluks', definition: 'Mengde materie eller energi som overføres mellom reservoarer per tidsenhet.' },
    { term: 'Oppholdstid', definition: 'Gjennomsnittlig tid et stoff oppholder seg i et reservoar.' },
    { term: 'Albedo', definition: 'Andelen innkommende stråling som reflekteres fra en overflate.' },
  ],
};

// ============================================================================
// Kapittel 1.2: Geosfæren – berggrunn og indre prosesser
// ============================================================================

export const CHAPTER_GEOFAG_2_1_2: TextbookChapter = {
  id: 'geofag-2-1-2',
  courseId: 'geofag-2',
  chapterNumber: '1.2',
  title: 'Geosfæren – berggrunn og indre prosesser',
  description:
    'Jordens indre oppbygning, platetektonikk som driver av geologiske prosesser, og vulkanisme og jordskjelv.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for vekselvirkninger mellom de ulike jordsystemene, og hvordan disse kan påvirke havet, atmosfæren og kryosfæren',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'geo2-1-2-intro',
      type: 'text',
      content: `# Geosfæren – berggrunn og indre prosesser

Geosfæren er fundamentet som de andre sfærene hviler på. Prosessene i jordens indre – konveksjon i mantelen, platetektonikk, vulkanisme og jordskjelv – former jordoverflaten og påvirker atmosfæren, hydrosfæren og biosfæren på grunnleggende måter.

I dette kapittelet skal du lære om:
- Jordens lagdelte indre struktur
- Platetektonikk og platebevegelser
- Vulkanisme og gassutslipp til atmosfæren
- Jordskjelv og tsunamier
- Hvordan geosfæren påvirker de andre sfærene`,
    },

    // ========== BLOKK 1: Jordens indre struktur ==========
    {
      id: 'geo2-1-2-def-1',
      type: 'definition',
      title: 'Jordens lagdelte struktur',
      content:
        'Jorden har en lagdelt indre struktur: **Indre kjerne** – fast jern-nikkel-legering (ca. 5 150–6 371 km dyp). **Ytre kjerne** – flytende jern-nikkel (ca. 2 890–5 150 km). **Mantelen** – silikatbergarter som oppfører seg plastisk over geologiske tidsskalaer (ca. 35–2 890 km). **Skorpen** – det tynneste ytre laget, enten oseanisk (5–10 km, basaltisk) eller kontinental (30–70 km, granittisk).',
    },
    {
      id: 'geo2-1-2-text-struktur',
      type: 'text',
      content: `## Kjemisk og mekanisk inndeling

Jordens indre kan beskrives på to måter:

### Kjemisk inndeling (basert på sammensetning)
- **Skorpe**: Lett silikatrik bergart
- **Mantel**: Tyngre silikatbergarter (olivin, pyroksen)
- **Kjerne**: Jern-nikkel-legering

### Mekanisk inndeling (basert på fysiske egenskaper)
- **Litosfæren**: Skorpen + øverste del av mantelen – stiv og sprø (ca. 0–100 km)
- **Astenosfæren**: Delvis plastisk del av øvre mantel (ca. 100–250 km) – litosfæreplatene «flyter» på dette laget
- **Mesosfæren**: Nedre mantel (ca. 250–2 890 km) – fast, men kan flyte sakte
- **Ytre kjerne**: Flytende – genererer jordens magnetfelt via konveksjon
- **Indre kjerne**: Fast under ekstremt trykk

### Hvordan vet vi dette?

Vi kan ikke bore dypere enn ca. 12 km (Kola-borehullet i Russland). Kunnskapen om jordens indre kommer hovedsakelig fra **seismologi** – studiet av seismiske bølger fra jordskjelv. P-bølger (kompresjonssbølger) og S-bølger (skjærbølger) bremses, bøyes og reflekteres ved overganger mellom lag med ulik tetthet og sammensetning.

Viktige observasjoner:
- **S-bølger** stoppes av ytre kjerne → den må være flytende
- **P-bølger** bøyes ved kjerne-mantel-grensen → tetthetsendring
- **Mohorovičić-diskontinuiteten** (Moho) markerer grensen mellom skorpe og mantel`,
    },
    {
      id: 'geo2-1-2-example-1',
      type: 'example',
      title: 'Seismiske bølger avslører jordskjelvsstrukturen',
      problem:
        'Under et jordskjelv registrerer seismografer at S-bølger forsvinner i en sone på motsatt side av jorden i forhold til episenteret (skyggesonen). Hva forteller dette oss om jordens indre?',
      solution: `**Løsning:**

S-bølger er skjærbølger som bare kan forplante seg gjennom fast materiale. Når S-bølgene forsvinner i en bestemt sone (S-bølge-skyggesonen), betyr det at de har møtt et lag som er **flytende** og ikke kan overføre skjærkrefter.

Dette laget er den **ytre kjernen**, som består av flytende jern-nikkel-legering. S-bølgene stoppes når de treffer grensen mellom mantelen og ytre kjerne (ca. 2 890 km dyp).

Denne oppdagelsen, gjort av den danske seismologen Inge Lehmann, var avgjørende for å fastslå at jorden har en flytende ytre kjerne og en fast indre kjerne.`,
    },
    {
      id: 'geo2-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er litosfæren?',
        options: [
          { id: 'a', text: 'Jordens flytende ytre kjerne', isCorrect: false },
          { id: 'b', text: 'Skorpen og den øverste, stive delen av mantelen', isCorrect: true },
          { id: 'c', text: 'Den plastiske delen av øvre mantel', isCorrect: false },
          { id: 'd', text: 'Bare jordskorpen', isCorrect: false },
        ],
        solution:
          'Litosfæren omfatter hele skorpen pluss den øverste, stive delen av mantelen, ned til ca. 100 km dyp. Den er sprø og delt inn i tektoniske plater. Under litosfæren ligger astenosfæren, som er delvis plastisk og lar platene bevege seg.',
      },
    },

    // ========== BLOKK 2: Platetektonikk ==========
    {
      id: 'geo2-1-2-def-2',
      type: 'definition',
      title: 'Platetektonikk',
      content:
        'Platetektonikk er teorien om at jordens litosfære er delt inn i store og små plater som beveger seg i forhold til hverandre, drevet av konveksjonsstrømmer i mantelen. Platene kan bevege seg fra hverandre (divergens), mot hverandre (konvergens) eller gli langs hverandre (transform bevegelse). Bevegelseshastigheten er typisk 2–10 cm per år.',
    },
    {
      id: 'geo2-1-2-text-plater',
      type: 'text',
      content: `## Plategrenser og prosesser

### Divergente plategrenser (spredningsrygger)
- Plater beveger seg **fra hverandre**
- Ny oseanisk skorpe dannes ved vulkanisme
- Eksempel: Den midt-atlantiske ryggen, som deler Atlanterhavet
- Island ligger på en slik rygg og har aktiv vulkanisme

### Konvergente plategrenser
Tre typer kollisjoner:

**Oseanisk–oseanisk**: Én plate subdukteres under den andre → dyphavsgrop, øybue med vulkaner (f.eks. Japan)

**Oseanisk–kontinental**: Oseanisk plate dykker under kontinental plate → dyphavsgrop, foldefjell med vulkaner (f.eks. Andesfjellene)

**Kontinental–kontinental**: Ingen subdukteres → massiv fjellkjededannelse uten vulkanisme (f.eks. Himalaya)

### Transforme plategrenser
- Plater glir **langs hverandre** horisontalt
- Sterk seismisk aktivitet, men lite vulkanisme
- Eksempel: San Andreas-forkastningen i California

### Drivkraften: Mantelkonveksjon
Varme fra jordens indre driver konveksjonsstrømmer i mantelen. Varmt materiale stiger opp under midthavsryggene, sprer seg ut langs bunnen av litosfæren og synker ned igjen ved subduksjonssoner. Denne syklusen er hovedkraften bak platebevegelsene.`,
    },
    {
      id: 'geo2-1-2-example-2',
      type: 'example',
      title: 'Platetektonikkens påvirkning på andre sfærer',
      problem:
        'Beskriv hvordan subduktjon ved en konvergent plategrense kan påvirke atmosfæren og hydrosfæren.',
      solution: `**Løsning:**

**Påvirkning på atmosfæren:**
Ved subduktjon smelter den nedsynkende platen delvis, og magma stiger opp og danner vulkaner. Vulkanutbrudd sender store mengder gasser til atmosfæren:
- **CO₂** – bidrar til drivhuseffekten
- **SO₂** – danner sulfatpartikler som reflekterer sollys og kan kjøle klimaet midlertidig
- **Vanndamp** – drivhusgass
- **Aske** – kan påvirke luftfarten og redusere solinnstråling lokalt

**Påvirkning på hydrosfæren:**
- Tsunamier kan utløses av store undersjøiske jordskjelv langs subduksjonssoner
- Vulkansk aske og syreholdig nedbør kan påvirke vannkvaliteten i elver og innsjøer
- Hydrotermale ventiler langs subduksjonssonen tilfører mineraler og varme til havvannet`,
    },
    {
      id: 'geo2-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilken type plategrense finnes langs den midt-atlantiske ryggen?',
        options: [
          { id: 'a', text: 'Konvergent', isCorrect: false },
          { id: 'b', text: 'Transform', isCorrect: false },
          { id: 'c', text: 'Divergent', isCorrect: true },
          { id: 'd', text: 'Passiv', isCorrect: false },
        ],
        solution:
          'Den midt-atlantiske ryggen er en divergent plategrense der den nordamerikanske og den eurasiske platen (i nord) og den søramerikanske og den afrikanske platen (i sør) beveger seg fra hverandre. Ny oseanisk skorpe dannes kontinuerlig ved vulkanisme langs ryggen.',
      },
    },
    {
      id: 'geo2-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hvorfor Island har mye vulkansk aktivitet. Bruk begrepene divergent plategrense og mantelsøyle (hotspot) i svaret ditt.',
        hints: [
          'Island ligger der den midt-atlantiske ryggen krysser overflaten.',
          'I tillegg finnes det en mantelsøyle (hotspot) under Island som gir ekstra varmetilførsel.',
        ],
        solution:
          'Island ligger rett over den midt-atlantiske ryggen, en divergent plategrense der den nordamerikanske og den eurasiske platen beveger seg fra hverandre. Ny oseanisk skorpe dannes kontinuerlig, og magma trenger opp til overflaten. I tillegg ligger Island over en mantelsøyle (hotspot) – en oppstrømning av spesielt varmt mantelmateriale fra dypt i jorden. Kombinasjonen av divergent plategrense og hotspot gjør Island til et av verdens mest vulkansk aktive områder.',
      },
    },

    // ========== BLOKK 3: Vulkanisme og jordskjelv ==========
    {
      id: 'geo2-1-2-text-vulkan',
      type: 'text',
      content: `## Vulkanisme og jordskjelv

### Vulkanisme
Vulkanutbrudd er direkte uttrykk for geosfærens indre energi. De forekommer hovedsakelig langs plategrenser og over hotspots.

**Typer utbrudd:**
- **Effusive utbrudd**: Tynnflytende lava strømmer rolig ut (f.eks. Hawaii, Island). Basaltisk magma med lavt silikainnhold.
- **Eksplosive utbrudd**: Tyktflytende magma med mye gass eksploderer voldsomt (f.eks. Pinatubo 1991, Krakatoa 1883). Andesittisk eller rhyolittisk magma med høyt silikainnhold.

**Vulkanismens påvirkning på andre sfærer:**
- Atmosfæren: CO₂, SO₂, vanndamp, aske → klimaeffekter
- Hydrosfæren: Laharer, tsunamier, hydrotermale systemer
- Biosfæren: Ødeleggelse lokalt, men vulkansk jord er svært næringsrik
- Kryosfæren: Subglasiale utbrudd under isbreer (jökulhlaup på Island)

### Jordskjelv
Jordskjelv oppstår når spenninger langs forkastninger plutselig utløses. De er hyppigst langs plategrenser.

**Måleskala:**
- **Richterskalaen** (momentmagnitude): Logaritmisk skala der hvert trinn er ca. 32 ganger mer energi
- **Mercalliskalaen**: Måler opplevd intensitet og skader

**Jordskjelv og andre sfærer:**
- Undersjøiske jordskjelv kan utløse **tsunamier** (hydrosfæren)
- Skred utløst av jordskjelv kan demme opp elver (hydrosfæren)
- Jordskjelv kan forstyrre grunnvannsstrømmer`,
    },
    {
      id: 'geo2-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilket utbrudd er mest sannsynlig eksplosivt?',
        options: [
          { id: 'a', text: 'Utbrudd med basaltisk, tynnflytende lava på Hawaii', isCorrect: false },
          { id: 'b', text: 'Utbrudd med rhyolittisk, tyktflytende magma med mye gass', isCorrect: true },
          { id: 'c', text: 'Effusivt utbrudd langs en midthavsrygg', isCorrect: false },
          { id: 'd', text: 'Utbrudd i en riftdal der platene beveger seg fra hverandre', isCorrect: false },
        ],
        solution:
          'Eksplosive utbrudd skyldes magma med høyt silikainnhold (rhyolittisk eller andesittisk) som er tyktflytende. Gasser kan ikke slippe ut gradvis, og trykket bygger seg opp til magmaen eksploderer. Basaltisk magma er tynnflytende, slik at gasser slipper lettere ut, og utbruddene blir effusive.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'geo2-1-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- Jorden har en lagdelt indre struktur: skorpe, mantel, ytre kjerne og indre kjerne.
- Litosfæren (skorpe + øvre mantel) er delt i plater som beveger seg på den plastiske astenosfæren.
- Platebevegelsene drives av mantelkonveksjon og gir opphav til vulkanisme, jordskjelv og fjellkjeder.
- Vulkanisme sender gasser og partikler til atmosfæren og kan påvirke klima, havsirkulasjon og biosfæren.
- Jordskjelv langs plategrenser kan utløse tsunamier og skred som berører hydrosfæren og biosfæren.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'geo2-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøfting: Etter utbruddet av Pinatubo på Filippinene i 1991 sank den globale gjennomsnittstemperaturen med ca. 0,5 °C i 1–2 år. Forklar mekanismen bak denne avkjølingen, og diskuter hvordan dette illustrerer vekselvirkninger mellom geosfæren og atmosfæren.',
        hints: [
          'Tenk på hva slags partikler og gasser et eksplosivt utbrudd sender til stratosfæren.',
          'SO₂ reagerer med vann og danner sulfatpartikler som reflekterer sollys.',
        ],
        solution:
          'Pinatubo-utbruddet sendte ca. 20 millioner tonn SO₂ til stratosfæren. SO₂ reagerte med vanndamp og dannet en global kappe av sulfatpartikler (sulfataerosoler). Disse partiklene reflekterte innkommende solstråling tilbake til verdensrommet, slik at mindre energi nådde jordoverflaten. Resultatet var en midlertidig global avkjøling på ca. 0,5 °C. Dette er et tydelig eksempel på vekselvirkning mellom geosfæren (vulkanutbrudd) og atmosfæren (aerosoler endrer strålingsbalansen). Effekten varte i 1–2 år fordi sulfatpartiklene gradvis falt ned igjen.',
      },
    },
    {
      id: 'geo2-1-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Prosjektoppgave: Undersøk tsunamien i Det indiske hav i 2004. Beskriv den geologiske årsaken (geosfæren), hvordan bølgene spredte seg (hydrosfæren), og konsekvensene for kystsamfunn og økosystemer (biosfæren). Bruk minst tre kilder.',
        hints: [
          'Jordskjelvet hadde magnitude 9,1 og skyldtes subduktjon av den indiske platen under den burmesiske mikroplaten.',
          'Tsunamibølgene brukte timer på å krysse Det indiske hav.',
        ],
        solution:
          'Et jordskjelv med magnitude 9,1 utenfor Sumatra 26. desember 2004 skyldtes plutselig bevegelse langs en subduksjonssone. Havbunnen hevet seg flere meter over en strekning på ca. 1 200 km, noe som fortrengte enorme vannmasser. Tsunamibølger spredte seg over hele Det indiske hav med hastigheter opp mot 800 km/t. Bølgene rammet kystområder i 14 land og drepte over 230 000 mennesker. Økologisk ble korallrev, mangroveskoger og kysthabitater alvorlig skadet. Hendelsen førte til etableringen av et tsunami-varslingssystem i Det indiske hav.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Litosfæren', definition: 'Skorpen og den øverste, stive delen av mantelen – delt i tektoniske plater.' },
    { term: 'Astenosfæren', definition: 'Delvis plastisk lag i øvre mantel som platene beveger seg over.' },
    { term: 'Platetektonikk', definition: 'Teorien om at litosfæren er delt i plater som beveger seg.' },
    { term: 'Subduksjon', definition: 'Når en litosfæreplate synker ned under en annen ved en konvergent grense.' },
    { term: 'Divergent plategrense', definition: 'Grense der plater beveger seg fra hverandre og ny skorpe dannes.' },
    { term: 'Konvergent plategrense', definition: 'Grense der plater beveger seg mot hverandre – kan gi subduksjon eller fjellkjededannelse.' },
    { term: 'Mantelkonveksjon', definition: 'Sirkulasjon av varmt mantelmateriale som driver platetektonikken.' },
    { term: 'Seismiske bølger', definition: 'Energibølger fra jordskjelv som brukes til å kartlegge jordens indre.' },
  ],
};

// ============================================================================
// Kapittel 1.3: Hydrosfæren – vann i bevegelse
// ============================================================================

export const CHAPTER_GEOFAG_2_1_3: TextbookChapter = {
  id: 'geofag-2-1-3',
  courseId: 'geofag-2',
  chapterNumber: '1.3',
  title: 'Hydrosfæren – vann i bevegelse',
  description:
    'Vannkretsløpet i detalj, fordelingen av ferskvann og saltvann, grunnvann og akviferer, og elvers rolle i erosjon og sedimenttransport.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for vekselvirkninger mellom de ulike jordsystemene, og hvordan disse kan påvirke havet, atmosfæren og kryosfæren',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'geo2-1-3-intro',
      type: 'text',
      content: `# Hydrosfæren – vann i bevegelse

Vann er helt avgjørende for livet på jorden og for prosessene som former planeten vår. Hydrosfæren – alt vann i flytende form – er i konstant bevegelse gjennom vannkretsløpet og binder sammen alle de andre sfærene.

I dette kapittelet skal du lære om:
- Vannkretsløpet og dets delprosesser
- Fordelingen av ferskvann og saltvann
- Grunnvann, akviferer og vannforsyning
- Elver som formende kraft gjennom erosjon og sedimenttransport
- Havstrømmer og havets rolle i klimasystemet`,
    },

    // ========== BLOKK 1: Vannkretsløpet ==========
    {
      id: 'geo2-1-3-def-1',
      type: 'definition',
      title: 'Vannkretsløpet',
      content:
        'Vannkretsløpet (den hydrologiske syklusen) er den kontinuerlige sirkulasjonen av vann mellom hav, atmosfære, land og is. Prosessene omfatter **fordampning**, **transpirasjon** (fra planter), **kondensasjon**, **nedbør**, **avrenning**, **infiltrasjon** (nedsynking i grunnen) og **grunnvannsstrøm**. Solenergien er den primære drivkraften.',
    },
    {
      id: 'geo2-1-3-text-kretslop',
      type: 'text',
      content: `## Vannkretsløpets delprosesser

### Fordampning og transpirasjon
- **Fordampning**: Vann går fra flytende til gassform, hovedsakelig fra havoverflaten. Ca. 86 % av global fordampning skjer fra havet.
- **Transpirasjon**: Planter tar opp vann gjennom røttene og avgir vanndamp gjennom bladenes spalteåpninger. I et skogområde kan transpirasjon stå for en betydelig del av den totale fordampningen.
- **Evapotranspirasjon**: Samlebegrep for fordampning og transpirasjon fra et område.

### Kondensasjon og skydannelse
Når fuktig luft stiger og avkjøles, når vanndampen **metningspunktet** (duggpunktet) og kondenserer på partikler (kondensasjonskjerner) i atmosfæren. Dette danner skyer og tåke.

### Nedbør
Nedbør faller når skydråper eller iskrystaller blir tunge nok til å overvinne oppdriften i luften. Former: regn, snø, sludd, hagl.

### Avrenning og infiltrasjon
Vann som treffer bakken kan:
- **Renne av** overflaten (overflateavrenning) og samles i bekker og elver
- **Infiltrere** ned i grunnen og bli til jordvann og grunnvann
- **Fordampe** direkte fra overflaten

Forholdet mellom avrenning og infiltrasjon avhenger av jordsmonn, vegetasjon, helningsgrad og nedbørsintensitet.

### Vannbalanse
For et nedbørfelt gjelder:

**Nedbør = Avrenning + Fordampning + Endring i lagring**

Denne ligningen er grunnleggende i hydrologi og brukes til å forstå vanntilgangen i et område.`,
    },
    {
      id: 'geo2-1-3-example-1',
      type: 'example',
      title: 'Vannbalanse i et nedbørfelt',
      problem:
        'Et nedbørfelt i Sør-Norge mottar 1 200 mm nedbør per år. Avrenningen i elven ut av feltet er målt til 800 mm per år. Hva er den samlede fordampningen (evapotranspirasjonen) fra feltet, gitt at lagringen er stabil over tid?',
      solution: `**Løsning:**

Vi bruker vannbalanseligningen:

Nedbør = Avrenning + Fordampning + Endring i lagring

Med stabil lagring (endring = 0):

Fordampning = Nedbør – Avrenning = 1 200 mm – 800 mm = **400 mm per år**

Det betyr at ca. 33 % av nedbøren fordamper eller transpirerer, mens 67 % renner av som elvevann. Dette er typisk for et nedbørfelt med kjølig klima og mye nedbør, som vi finner i fjellområder i Norge.`,
    },
    {
      id: 'geo2-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste drivkraften bak vannkretsløpet?',
        options: [
          { id: 'a', text: 'Jordens rotasjon', isCorrect: false },
          { id: 'b', text: 'Gravitasjon alene', isCorrect: false },
          { id: 'c', text: 'Solenergien', isCorrect: true },
          { id: 'd', text: 'Månens tidevannkraft', isCorrect: false },
        ],
        solution:
          'Solenergien er den primære drivkraften bak vannkretsløpet. Den varmer opp havoverflaten og landområder, noe som driver fordampning. Gravitasjonen spiller også en viktig rolle ved å få nedbør til å falle ned og vann til å renne nedover, men uten solenergien ville det ikke vært fordampning.',
      },
    },
    {
      id: 'geo2-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Et nedbørfelt i Nord-Norge mottar 900 mm nedbør per år. Fordampningen er 250 mm per år. Hva er avrenningen, gitt stabil lagring?',
        hints: [
          'Bruk vannbalanseligningen: Nedbør = Avrenning + Fordampning + Endring i lagring.',
        ],
        solution:
          'Med stabil lagring: Avrenning = Nedbør – Fordampning = 900 mm – 250 mm = 650 mm per år. Ca. 72 % av nedbøren renner av som elvevann, noe som gjenspeiler det kjølige klimaet med lite fordampning.',
      },
    },

    // ========== BLOKK 2: Fordeling av vann ==========
    {
      id: 'geo2-1-3-def-2',
      type: 'definition',
      title: 'Grunnvann og akvifer',
      content:
        '**Grunnvann** er vann som fyller porer og sprekker i berg og jord under grunnvannsspeilet. En **akvifer** er et geologisk lag som inneholder og kan avgi nyttige mengder grunnvann (f.eks. sandstein, grus). **Grunnvannsspeilet** er den øvre grensen der porene er helt vannmettet. Grunnvann beveger seg sakte (meter til kilometer per år) og kan ha oppholdstider fra år til tusenvis av år.',
    },
    {
      id: 'geo2-1-3-text-fordeling',
      type: 'text',
      content: `## Fordelingen av vann på jorden

### Global vannfordeling
Jordens totale vannmengde er ca. **1,386 milliarder km³**. Fordelingen er svært skjev:

| Reservoar | Andel |
|---|---|
| Saltvannshavet | 96,5 % |
| Isbreer og innlandsis | 1,74 % |
| Grunnvann | 1,69 % |
| Overflatevann (innsjøer, elver, myrer) | 0,013 % |
| Atmosfæren | 0,001 % |
| Biosfæren | 0,0001 % |

Bare ca. **2,5 %** av vannet er ferskvann, og av dette er nesten 70 % bundet i isbreer og innlandsis. Tilgjengelig ferskvann for mennesker og økosystemer utgjør en svært liten del av det totale vannvolumet.

### Grunnvann – en skjult ressurs
Grunnvann er den største kilden til tilgjengelig ferskvann. Det dannes ved at nedbør infiltrerer gjennom jordlagene til det når grunnvannsspeilet.

**Akvifer-typer:**
- **Fri akvifer**: Grunnvannsspeilet er øverste grense – vannet er i kontakt med umettet sone over
- **Lukket akvifer** (artesisk): Vannet er innelukket mellom to tette lag – kan stå under trykk

**Sårbarhet:**
Grunnvann er sårbart for forurensning fordi renseprosessen er svært langsom. Overutnyttelse av akviferer kan føre til at grunnvannsspeilet synker permanent, noe som er et voksende problem i mange tørre regioner.

### Elver – landskapets formere
Elver er kraftige erosjonsagenter som former daler, transporterer sedimenter og bygger opp deltaer. Elvenes erosjonskraft avhenger av:
- Vannføring (vannmengde per tid)
- Strømhastighet
- Sedimentmengde (som virker som «sandpapir»)
- Berggrunnens hardhet`,
    },
    {
      id: 'geo2-1-3-example-2',
      type: 'example',
      title: 'Grunnvannets oppholdstid',
      problem:
        'En akvifer inneholder anslagsvis 500 millioner m³ vann. Hvert år infiltrerer 2 millioner m³ ny nedbør ned til akviferen, og like mye renner ut til en elv. Hva er oppholdstiden for vannet i akviferen?',
      solution: `**Løsning:**

Oppholdstid = reservoarstørrelse / fluks

Oppholdstid = 500 000 000 m³ / 2 000 000 m³ per år = **250 år**

Det betyr at vannet i gjennomsnitt oppholder seg i 250 år i akviferen. Forurensning som når grunnvannet, kan altså forbli der i hundrevis av år – dette er grunnen til at grunnvannsbeskyttelse er så viktig.`,
    },
    {
      id: 'geo2-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvor stor andel av jordens totale vannmengde er ferskvann?',
        options: [
          { id: 'a', text: 'Ca. 10 %', isCorrect: false },
          { id: 'b', text: 'Ca. 2,5 %', isCorrect: true },
          { id: 'c', text: 'Ca. 25 %', isCorrect: false },
          { id: 'd', text: 'Ca. 0,5 %', isCorrect: false },
        ],
        solution:
          'Bare ca. 2,5 % av jordens totale vannmengde er ferskvann. Av dette er nesten 70 % bundet i isbreer og innlandsis, slik at bare en svært liten andel er direkte tilgjengelig som drikke- og bruksvann.',
      },
    },

    // ========== BLOKK 3: Havstrømmer og klimaregulering ==========
    {
      id: 'geo2-1-3-text-havstromm',
      type: 'text',
      content: `## Havstrømmer og klimaregulering

### Overflatestrømmer
Overflatestrømmer drives av vind og påvirkes av jordens rotasjon (corioliseffekten). De transporterer varme fra tropene mot polene. Golfstrømmen og dens forlengelse, Den nordatlantiske strømmen, er et godt eksempel – den fører varmt vann fra Det karibiske hav nordøstover og gjør at Norge har et langt mildere klima enn breddegraden skulle tilsi.

### Den termohaline sirkulasjonen
Den globale havsirkulasjonen drives også av forskjeller i **temperatur** (thermo) og **saltinnhold** (halin):

1. I Nord-Atlanteren kjøles overflatevannet ned og blir saltere (fordi ferskvann fryser til sjøis)
2. Det kalde, salte vannet blir tungt og synker ned til dyphavet
3. Dypvannet sprer seg sørover gjennom Atlanterhavet og videre til Det indiske hav og Stillehavet
4. Etter århundrer stiger vannet opp igjen og returnerer som overflatestrøm

Denne «globale transportbåndet» er avgjørende for jordens klimaregulering. Endringer i tilførselen av ferskvann (f.eks. fra smeltende isbreer) kan potensielt svekke sirkulasjonen, med store konsekvenser for klimaet i Europa.

### Havets varmelagring
Havet har enorm varmekapasitet – det har absorbert over 90 % av den ekstra varmen som drivhuseffekten har tilført klimasystemet siden 1970. Denne varmelagringen demper oppvarmingen i atmosfæren, men fører til havnivåstigning gjennom termisk ekspansjon.`,
    },
    {
      id: 'geo2-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hva som menes med den termohaline sirkulasjonen, og beskriv hva som kan skje dersom store mengder ferskvann fra smeltende isbreer tilføres Nord-Atlanteren.',
        hints: [
          'Tenk på hva som driver nedsynkingen av vann i Nord-Atlanteren: kaldt, salt vann er tungt.',
          'Ferskvann er lettere enn saltvann – hva skjer med nedsynkingen?',
        ],
        solution:
          'Den termohaline sirkulasjonen er en global havsirkulasjon drevet av tetthetsforskjeller i vannet, som bestemmes av temperatur og saltinnhold. I Nord-Atlanteren synker kaldt, salt overflatenann ned til dyphavet og driver det «globale transportbåndet». Hvis store mengder ferskvann tilføres (f.eks. fra smeltende Grønlandsisen), blir overflatevannet lettere og synker ikke like lett. Dette kan svekke eller i verste fall stanse den termohaline sirkulasjonen, noe som ville gi kraftig avkjøling i Nordvest-Europa og forstyrrelser i nedbørsmønstre globalt.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'geo2-1-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- Vannkretsløpet drives av solenergien og sirkulerer vann mellom hav, atmosfære, land og is.
- Bare 2,5 % av jordens vann er ferskvann, og mesteparten er bundet i is.
- Grunnvann er den største kilden til tilgjengelig ferskvann, lagret i akviferer med lang oppholdstid.
- Elver eroderer og transporterer sedimenter, og former landskapet over tid.
- Havstrømmer (overflate og dype) transporterer varme og regulerer klimaet.
- Den termohaline sirkulasjonen er sårbar for endringer i ferskvanntilførsel fra smeltende isbreer.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'geo2-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøfting: Mange steder i verden er grunnvann i ferd med å bli overutnyttet. Velg en region (f.eks. California, Nord-India eller Midtøsten) og diskuter årsaker, konsekvenser og mulige tiltak. Knytt svaret til samspillet mellom hydrosfæren og de andre sfærene.',
        hints: [
          'Tenk på jordbruksvanning som den viktigste årsaken til overutnyttelse.',
          'Konsekvenser kan inkludere senkning av grunnvannsspeilet, jordinnsynkning og saltvannsinntrengning.',
        ],
        solution:
          'Eksempel med California: Intensivt jordbruk i Central Valley bruker store mengder grunnvann til vanning. Årsaker: langvarige tørkeperioder (atmosfæren), økt vanningsbehov og befolkningsvekst. Konsekvenser: grunnvannsspeilet har sunket dramatisk, noe som fører til jordinnsynkning (geosfæren), tørrlagte brønner, og potensielt saltvannsinntrengning i kystakviferer (hydrosfæren). Økosystemer knyttet til våtmarker og elver mister vann (biosfæren). Mulige tiltak: bedre vanningsmetoder, kunstig infiltrasjon, regulering av uttak, og gjenbruk av renset avløpsvann.',
      },
    },
    {
      id: 'geo2-1-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Prosjektoppgave: Golfstrømmen gjør at Norge har et mildere klima enn andre steder på samme breddegrad (f.eks. Labrador i Canada). Undersøk og beskriv mekanismen bak dette, og drøft hva som kan skje med Norges klima dersom Golfstrømmen svekkes betydelig.',
        hints: [
          'Sammenlign vintertemperaturer i Tromsø og Churchill (Canada) – begge rundt 69° N.',
          'Tenk på havets varmekapasitet og Den nordatlantiske strømmens rolle.',
        ],
        solution:
          'Golfstrømmen fører varmt overflatenann fra tropiske Atlanterhavet nordøstover. Varmen avgis til atmosfæren over Nord-Atlanteren, noe som gir Skandinavia, Storbritannia og Irland et mildere klima enn tilsvarende breddegrader i Nord-Amerika. Tromsø (69° N) har vintergjennomsnitt rundt –3 °C, mens Churchill i Canada (58° N, altså lenger sør) har –26 °C. En betydelig svekkelse av strømmen kunne gi kraftig temperaturfall i Norge, spesielt om vinteren, endrede nedbørsmønstre og konsekvenser for fiskeri og landbruk.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Vannkretsløpet', definition: 'Den kontinuerlige sirkulasjonen av vann mellom hav, atmosfære, land og is.' },
    { term: 'Evapotranspirasjon', definition: 'Samlet fordampning fra jord/vannoverflater og transpirasjon fra planter.' },
    { term: 'Grunnvann', definition: 'Vann som fyller porer og sprekker i berg og jord under grunnvannsspeilet.' },
    { term: 'Akvifer', definition: 'Geologisk lag som kan lagre og avgi nyttige mengder grunnvann.' },
    { term: 'Termohalin sirkulasjon', definition: 'Global dyphavssirkulasjon drevet av temperatur- og saltinnholdsforskjeller.' },
    { term: 'Avrenning', definition: 'Vann som renner over eller gjennom bakken til bekker, elver og innsjøer.' },
    { term: 'Infiltrasjon', definition: 'Nedsynkning av vann fra overflaten ned i jordlagene.' },
    { term: 'Vannbalanse', definition: 'Nedbør = avrenning + fordampning + endring i lagring – grunnligning i hydrologi.' },
  ],
};

// ============================================================================
// Kapittel 1.4: Atmosfæren – lufthavet
// ============================================================================

export const CHAPTER_GEOFAG_2_1_4: TextbookChapter = {
  id: 'geofag-2-1-4',
  courseId: 'geofag-2',
  chapterNumber: '1.4',
  title: 'Atmosfæren – lufthavet',
  description:
    'Atmosfærens sammensetning og lagdeling, de ulike lagene fra troposfæren til eksosfæren, og atmosfærens rolle i klimaregulering.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for vekselvirkninger mellom de ulike jordsystemene, og hvordan disse kan påvirke havet, atmosfæren og kryosfæren',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'geo2-1-4-intro',
      type: 'text',
      content: `# Atmosfæren – lufthavet

Atmosfæren er det tynne gasslaget som omgir jorden og strekker seg flere hundre kilometer ut i verdensrommet. Til tross for sin beskjedne masse – bare ca. en milliondel av jordens totale masse – er atmosfæren helt avgjørende for livet på jorden og for klimareguleringen.

I dette kapittelet skal du lære om:
- Atmosfærens kjemiske sammensetning
- De ulike atmosfæriske lagene og deres egenskaper
- Strålings- og energibalansen
- Drivhuseffekten og dens betydning
- Atmosfærens rolle i samspillet med andre sfærer`,
    },

    // ========== BLOKK 1: Sammensetning ==========
    {
      id: 'geo2-1-4-def-1',
      type: 'definition',
      title: 'Atmosfærens sammensetning',
      content:
        'Atmosfæren består hovedsakelig av **nitrogen** (N₂, 78,08 %), **oksygen** (O₂, 20,95 %) og **argon** (Ar, 0,93 %). I tillegg finnes **sporgasser** som karbondioksid (CO₂, ca. 0,042 %), metan (CH₄), lystgass (N₂O), ozon (O₃) og vanndamp (variabelt, 0–4 %). Selv om sporgassene utgjør en svært liten andel, har flere av dem stor betydning som **drivhusgasser**.',
    },
    {
      id: 'geo2-1-4-text-sammensetning',
      type: 'text',
      content: `## Gassenes rolle

### Nitrogen (N₂)
Nitrogen er den dominerende gassen, men er kjemisk svært stabil og reagerer lite i atmosfæren. Nitrogen er likevel essensiell for livet – den inngår i aminosyrer og DNA, og fikseres av visse bakterier til former planter kan ta opp (nitrogenkretsløpet).

### Oksygen (O₂)
Oksygen er nødvendig for respirasjon hos de fleste organismer. Atmosfærens oksygennivå er et resultat av milliarder av år med fotosyntese. Uten biosfæren ville det ikke vært fritt oksygen i atmosfæren.

### Karbondioksid (CO₂)
CO₂ utgjør bare ca. 0,042 % av atmosfæren (420 ppm i 2023), men er en svært viktig drivhusgass. Konsentrasjonen har økt med over 50 % siden den industrielle revolusjonen (fra ca. 280 ppm) på grunn av forbrenning av fossile brensler og avskoging.

### Vanndamp (H₂O)
Vanndamp er den viktigste drivhusgassen målt i total effekt, og den mest variable gassen i atmosfæren (0–4 %). Mengden styres hovedsakelig av temperatur – varmere luft kan holde mer vanndamp (Clausius–Clapeyrons relasjon). Vanndamp gir en kraftig **positiv tilbakekobling**: høyere temperatur → mer vanndamp → sterkere drivhuseffekt → enda høyere temperatur.

### Ozon (O₃)
Ozon finnes i to viktige sammenhenger:
- **Stratosfærisk ozon** (ozonlaget): Beskytter mot skadelig UV-stråling
- **Troposfærisk ozon**: En forurensningsgass som dannes ved fotokjemiske reaksjoner nær bakken`,
    },
    {
      id: 'geo2-1-4-example-1',
      type: 'example',
      title: 'CO₂-konsentrasjon gjennom historien',
      problem:
        'CO₂-konsentrasjonen i atmosfæren var ca. 280 ppm før den industrielle revolusjonen og er nå ca. 420 ppm. Beregn den prosentvise økningen, og forklar hvorfor en så liten konsentrasjonsendring kan ha stor klimaeffekt.',
      solution: `**Løsning:**

Prosentvis økning = ((420 – 280) / 280) × 100 % = (140 / 280) × 100 % = **50 %**

Selv om CO₂ bare utgjør 0,042 % av atmosfæren, har den stor klimaeffekt fordi:
1. CO₂ absorberer infrarød stråling (varmestråling) som jordoverflaten sender ut
2. Den absorberte energien sendes tilbake mot overflaten, noe som forsterker oppvarmingen
3. CO₂ har lang oppholdstid i atmosfæren (ca. 100–1 000 år for ulike karbonsykluser)
4. En 50 % økning i CO₂ endrer strålingsbalansen med ca. 2 W/m² – nok til å drive merkbar global oppvarming

Dessuten forsterkes effekten av tilbakekoblinger: mer CO₂ → varmere → mer vanndamp → enda varmere.`,
    },
    {
      id: 'geo2-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken gass er den mest variable i atmosfæren?',
        options: [
          { id: 'a', text: 'Nitrogen (N₂)', isCorrect: false },
          { id: 'b', text: 'Karbondioksid (CO₂)', isCorrect: false },
          { id: 'c', text: 'Vanndamp (H₂O)', isCorrect: true },
          { id: 'd', text: 'Oksygen (O₂)', isCorrect: false },
        ],
        solution:
          'Vanndamp er den mest variable gassen i atmosfæren – konsentrasjonen varierer fra nær 0 % i tørre ørkenområder og polare regioner til ca. 4 % i varme, fuktige tropiske områder. Variasjonen styres av temperatur og tilgang på vann.',
      },
    },

    // ========== BLOKK 2: Atmosfærens lag ==========
    {
      id: 'geo2-1-4-def-2',
      type: 'definition',
      title: 'Atmosfærens lag',
      content:
        'Atmosfæren deles inn i lag basert på temperaturprofilen: **Troposfæren** (0–12 km) – temperaturen synker med høyden, alt vær foregår her. **Stratosfæren** (12–50 km) – temperaturen stiger pga. ozonabsorpsjon av UV. **Mesosfæren** (50–85 km) – temperaturen synker igjen. **Termosfæren** (85–600 km) – temperaturen stiger kraftig. **Eksosfæren** (>600 km) – overgangen til verdensrommet. Grensene mellom lagene kalles -pauser (tropopause, stratopause, mesopause).',
    },
    {
      id: 'geo2-1-4-text-lag',
      type: 'text',
      content: `## De atmosfæriske lagene

### Troposfæren (0–12 km)
- Inneholder ca. **75 %** av atmosfærens masse og nesten all vanndamp
- Temperaturen faller med ca. **6,5 °C per km** (den adiabatiske temperaturgradient)
- Alt vær foregår her: skyer, nedbør, vind, stormer
- Kraftig vertikal blanding på grunn av konveksjon
- **Tropopausen** markerer toppen – her stopper temperaturens fall

### Stratosfæren (12–50 km)
- Temperaturen **stiger** med høyden fordi ozon (O₃) absorberer UV-stråling
- **Ozonlaget** har maksimal konsentrasjon rundt 20–25 km
- Svært stabil lagdeling (liten vertikal blanding) – derfor kan vulkansk aske og aerosoler bli værende her i måneder til år
- Fly krysser stratosfæren på lange flyvninger

### Mesosfæren (50–85 km)
- Temperaturen **synker** igjen – det kaldeste stedet i atmosfæren (ned mot –90 °C ved mesopausen)
- Meteorer brenner opp her (stjerneskudd)
- Nattlysende skyer kan dannes nær mesopausen

### Termosfæren (85–600 km)
- Temperaturen **stiger kraftig** (opp mot 1 500 °C) på grunn av absorpsjon av ekstrem UV-stråling
- Svært lav tetthet – «temperaturen» er et mål på molekylenes kinetiske energi, ikke opplevd varme
- Nordlys (aurora borealis) oppstår her
- Den internasjonale romstasjonen (ISS) kretser i dette laget

### Eksosfæren (>600 km)
- Gassene er så tynne at molekyler kan unnslippe til verdensrommet
- Gradvis overgang til det ytre rom`,
    },
    {
      id: 'geo2-1-4-example-2',
      type: 'example',
      title: 'Temperaturprofil i troposfæren',
      problem:
        'Temperaturen ved havnivå er 15 °C. Hva er den forventede temperaturen på toppen av et fjell som er 3 000 m høyt, gitt en gjennomsnittlig temperaturgradient på 6,5 °C per km?',
      solution: `**Løsning:**

Temperaturfall = høyde × gradient = 3,0 km × 6,5 °C/km = 19,5 °C

Temperatur på toppen = 15 °C – 19,5 °C = **–4,5 °C**

Dette forklarer hvorfor det er snø på høye fjell selv om sommeren – temperaturen synker jevnt med høyden i troposfæren. Merk at den faktiske temperaturen kan avvike fra dette gjennomsnittet avhengig av lokale forhold som sol, vind og fuktighet.`,
    },
    {
      id: 'geo2-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'I hvilket atmosfærisk lag finnes ozonlaget?',
        options: [
          { id: 'a', text: 'Troposfæren', isCorrect: false },
          { id: 'b', text: 'Stratosfæren', isCorrect: true },
          { id: 'c', text: 'Mesosfæren', isCorrect: false },
          { id: 'd', text: 'Termosfæren', isCorrect: false },
        ],
        solution:
          'Ozonlaget befinner seg i stratosfæren, med maksimal ozonkonsentrasjon rundt 20–25 km høyde. Ozon absorberer UV-stråling, noe som fører til at temperaturen stiger med høyden i stratosfæren – motsatt av troposfæren.',
      },
    },

    // ========== BLOKK 3: Drivhuseffekten og strålingsbalanse ==========
    {
      id: 'geo2-1-4-text-drivhus',
      type: 'text',
      content: `## Drivhuseffekten og strålingsbalansen

### Jordens strålingsbalanse
Jorden mottar korttbølget stråling (synlig lys) fra solen. Av denne strålingen:
- Ca. **30 %** reflekteres tilbake av skyer, atmosfæren og overflaten (albedo)
- Ca. **70 %** absorberes av atmosfæren og overflaten

Den oppvarmede jordoverflaten sender ut **langbølget** (infrarød) stråling. I likevekt er innkommende solstråling lik utgående stråling – dette er strålingsbalansen.

### Den naturlige drivhuseffekten
Uten drivhuseffekten ville jordens gjennomsnittstemperatur vært ca. **–18 °C** i stedet for nåværende +15 °C. Forskjellen på 33 °C skyldes drivhusgassene:

1. Jordoverflaten sender ut langbølget (infrarød) stråling
2. Drivhusgasser (H₂O, CO₂, CH₄, N₂O, O₃) absorberer deler av denne strålingen
3. Gassene sender stråling tilbake mot overflaten (motstrålering)
4. Overflaten varmes opp mer enn den ville gjort uten atmosfæren

### Den forsterkede drivhuseffekten
Menneskelig aktivitet har økt konsentrasjonen av drivhusgasser, spesielt CO₂ og CH₄. Dette forsterker drivhuseffekten og fører til global oppvarming. Hovedkilder:
- **CO₂**: Forbrenning av fossile brensler, avskoging
- **CH₄**: Landbruk (kveg, rismarker), fossil energi, permafrosttining
- **N₂O**: Gjødsel i jordbruket

### Tilbakekoblinger i klimasystemet
- **Is-albedo-tilbakekobling** (positiv): Smelting av is → lavere albedo → mer oppvarming → mer smelting
- **Vanndamp-tilbakekobling** (positiv): Varmere → mer vanndamp → sterkere drivhus → enda varmere
- **Sky-tilbakekobling** (kompleks): Skyer kan både reflektere sollys (kjølende) og fange varmestråling (oppvarmende) – nettoeffekten avhenger av skytype og høyde`,
    },
    {
      id: 'geo2-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar forskjellen mellom den naturlige drivhuseffekten og den forsterkede (menneskeskapte) drivhuseffekten. Hvorfor er den naturlige drivhuseffekten nødvendig for livet på jorden?',
        hints: [
          'Den naturlige drivhuseffekten har eksistert i milliarder av år.',
          'Uten den ville jorden vært 33 °C kaldere.',
        ],
        solution:
          'Den naturlige drivhuseffekten er det naturlige fenomenet der drivhusgasser (hovedsakelig vanndamp og CO₂) i atmosfæren absorberer langbølget stråling fra jordoverflaten og sender deler av den tilbake. Denne prosessen hever jordens temperatur fra ca. –18 °C til +15 °C, noe som gjør flytende vann og liv mulig. Den forsterkede drivhuseffekten skyldes at menneskelig aktivitet (spesielt forbrenning av fossile brensler) har økt konsentrasjonen av CO₂, CH₄ og andre drivhusgasser. Dette forsterker den naturlige prosessen og fører til uønsket global oppvarming.',
      },
    },
    {
      id: 'geo2-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva ville jordens gjennomsnittstemperatur vært uten drivhuseffekten?',
        options: [
          { id: 'a', text: 'Ca. 0 °C', isCorrect: false },
          { id: 'b', text: 'Ca. –18 °C', isCorrect: true },
          { id: 'c', text: 'Ca. –50 °C', isCorrect: false },
          { id: 'd', text: 'Ca. 15 °C (som nå)', isCorrect: false },
        ],
        solution:
          'Uten drivhuseffekten ville jordens gjennomsnittstemperatur vært ca. –18 °C. Den naturlige drivhuseffekten hever temperaturen med ca. 33 °C til dagens gjennomsnitt på +15 °C. Jorden ville vært en frossen planet uten denne effekten.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'geo2-1-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- Atmosfæren består hovedsakelig av nitrogen og oksygen, med viktige sporgasser som CO₂, vanndamp og ozon.
- Atmosfæren deles i lag basert på temperaturprofilen: troposfæren, stratosfæren, mesosfæren, termosfæren og eksosfæren.
- Alt vær foregår i troposfæren, mens ozonlaget befinner seg i stratosfæren.
- Den naturlige drivhuseffekten hever jordens temperatur med ca. 33 °C og er en forutsetning for livet.
- Menneskeskapte utslipp av drivhusgasser forsterker drivhuseffekten og driver global oppvarming.
- Tilbakekoblinger (is-albedo, vanndamp) kan forsterke oppvarmingen ytterligere.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'geo2-1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøfting: «Vanndamp er den viktigste drivhusgassen, men likevel fokuserer vi mest på CO₂.» Forklar hvorfor dette er logisk, og beskriv sammenhengen mellom CO₂ og vanndamp i klimasystemet.',
        hints: [
          'Vanndamp styres av temperatur – den er en tilbakekobling, ikke en driver.',
          'CO₂ har lang oppholdstid og akkumuleres i atmosfæren.',
        ],
        solution:
          'Vanndamp er den viktigste drivhusgassen målt i total effekt, men konsentrasjonen styres hovedsakelig av temperatur (jf. Clausius–Clapeyron). Mennesker kan ikke direkte kontrollere vanndampmengden – den justerer seg raskt etter temperaturen. CO₂ derimot tilføres direkte av menneskelig aktivitet (forbrenning av fossile brensler) og har lang oppholdstid (hundre til tusen år). Når CO₂ øker temperaturen, øker også vanndampmengden, som igjen forsterker oppvarmingen (positiv tilbakekobling). Dermed er CO₂ den viktigste «driveren» (forcing), mens vanndamp er den viktigste «forsterkeren» (feedback) i klimasystemet.',
      },
    },
    {
      id: 'geo2-1-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Prosjektoppgave: Ozonlaget ble truet av KFK-gasser (klorfluorkarboner) på 1980-tallet, noe som førte til Montreal-protokollen i 1987. Undersøk: (a) Hvordan bryter KFK-gasser ned ozon? (b) Hva er status for ozonlaget i dag? (c) Hva kan vi lære av Montreal-protokollen om internasjonalt miljøsamarbeid?',
        hints: [
          'KFK-gasser er svært stabile i troposfæren, men brytes ned av UV-stråling i stratosfæren.',
          'Kloratomer frigjøres og fungerer som katalysator – ett kloratom kan bryte ned tusenvis av ozonmolekyler.',
        ],
        solution:
          'KFK-gasser stiger til stratosfæren der UV-stråling spalter dem og frigjør kloratomer (Cl). Kloret reagerer med ozon (O₃) og bryter det ned til O₂ og ClO. ClO reagerer videre og frigjør kloret på nytt – kloret virker som katalysator og kan ødelegge tusenvis av ozonmolekyler. Montreal-protokollen (1987) forbød produksjon av KFK-gasser. Ozonlaget har vist tegn til bedring og forventes å være tilbake til 1980-nivå rundt midten av dette århundret. Montreal-protokollen regnes som det mest vellykkede internasjonale miljøsamarbeidet noensinne, og viser at det er mulig å løse globale miljøproblemer gjennom bindende internasjonale avtaler.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Troposfæren', definition: 'Atmosfærens nederste lag (0–12 km) der alt vær foregår.' },
    { term: 'Stratosfæren', definition: 'Atmosfærens andre lag (12–50 km) som inneholder ozonlaget.' },
    { term: 'Drivhuseffekten', definition: 'Atmosfærens evne til å absorbere og sende tilbake langbølget stråling, noe som varmer jordoverflaten.' },
    { term: 'Drivhusgasser', definition: 'Gasser som absorberer langbølget stråling: vanndamp, CO₂, CH₄, N₂O, O₃.' },
    { term: 'Albedo', definition: 'Andelen innkommende stråling som reflekteres – høy albedo betyr mye refleksjon.' },
    { term: 'Strålingsbalanse', definition: 'Likevekten mellom innkommende solstråling og utgående varmestråling.' },
    { term: 'Tropopause', definition: 'Grensen mellom troposfæren og stratosfæren.' },
    { term: 'Ozonlaget', definition: 'Lag med forhøyet ozonkonsentrasjon i stratosfæren som absorberer UV-stråling.' },
  ],
};

// ============================================================================
// Kapittel 1.5: Kryosfæren og biosfæren
// ============================================================================

export const CHAPTER_GEOFAG_2_1_5: TextbookChapter = {
  id: 'geofag-2-1-5',
  courseId: 'geofag-2',
  chapterNumber: '1.5',
  title: 'Kryosfæren og biosfæren',
  description:
    'Isbreer, innlandsis, sjøis og permafrost; biosfærens samspill med andre sfærer; karbonkretsløpet; og tilbakekoblingsmekanismer mellom sfærene.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for vekselvirkninger mellom de ulike jordsystemene, og hvordan disse kan påvirke havet, atmosfæren og kryosfæren',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'geo2-1-5-intro',
      type: 'text',
      content: `# Kryosfæren og biosfæren

I dette siste kapittelet om jordsystemene ser vi nærmere på de to sfærene som kanskje er mest sårbare for klimaendringer: **kryosfæren** (den frosne verden) og **biosfæren** (den levende verden). Begge disse sfærene spiller nøkkelroller i klimasystemet gjennom tilbakekoblingsmekanismer og biogeokjemiske kretsløp.

I dette kapittelet skal du lære om:
- Kryosfærens ulike komponenter: innlandsis, breer, sjøis, snø og permafrost
- Kryosfærens rolle i klimasystemet
- Biosfæren og fotosyntesens betydning
- Karbonkretsløpet som binder sfærene sammen
- Tilbakekoblinger mellom sfærene`,
    },

    // ========== BLOKK 1: Kryosfæren ==========
    {
      id: 'geo2-1-5-def-1',
      type: 'definition',
      title: 'Kryosfærens komponenter',
      content:
        'Kryosfæren omfatter: **Innlandsis** – massive isdekker som dekker store landområder (Grønland og Antarktis inneholder ca. 99 % av all landis). **Isbreer** – islegemer som beveger seg nedover under sin egen tyngde. **Sjøis** – fryst havvann som danner et isdekke over polhavene. **Sesongmessig snødekke** – snø som dekker landområder i vinterhalvåret. **Permafrost** – jord eller berg som har vært frosset i minst to sammenhengende år.',
    },
    {
      id: 'geo2-1-5-text-kryosfaeren',
      type: 'text',
      content: `## Kryosfærens komponenter i detalj

### Innlandsis
De to store innlandsisdekkene på Grønland og Antarktis inneholder nok is til å heve havnivået med ca. **65 meter** dersom all isen smeltet (Antarktis ca. 58 m, Grønland ca. 7 m). Begge isdekkene er i dag i negativ massebalanse – de mister mer is enn de får tilført via snøfall.

### Isbreer (dalbreer og platåbreer)
Det finnes over 200 000 isbreer utenfor innlandsisdekkene. De fleste av dem er i tilbaketrekning (retreat) på grunn av global oppvarming. I Norge har vi kjente breer som Jostedalsbreen, Svartisen og Folgefonna. Breene er viktige som vannreservoarer – de avgir smeltevann om sommeren og bidrar til vannforsyning og kraftproduksjon.

### Sjøis
**Arktisk sjøis** har minsket dramatisk de siste tiårene. September-minimumarealet har blitt redusert med ca. 40 % siden satellittmålingene startet i 1979. Sjøisen er tynnere og yngre enn før – flerårig is erstattes av sesongis.

**Antarktisk sjøis** har hatt en mer variabel utvikling, men viste rekordlave verdier i 2023.

Viktig forskjell: Smelting av sjøis hever **ikke** havnivået direkte (den flyter allerede i vannet), men smelting av landis (innlandsis og breer) **hever** havnivået.

### Permafrost
Permafrost dekker ca. 25 % av landoverflaten på den nordlige halvkule. Den inneholder enorme mengder organisk karbon – anslagsvis **1 500 gigatonn**, nesten dobbelt så mye som i hele atmosfæren. Når permafrost tiner, kan dette karbonet brytes ned av mikroorganismer og frigjøres som CO₂ og metan (CH₄).

### Kryosfærens rolle i klimasystemet
1. **Albedoeffekten**: Is og snø reflekterer 60–90 % av innkommende solstråling, mot bare 6–10 % for mørkt havvann
2. **Vannlagring**: Isbreene og innlandsisen inneholder ca. 69 % av jordens ferskvann
3. **Havnivåregulering**: Smelting av landis hever havnivået
4. **Karbonlagring**: Permafrost binder enorme mengder karbon`,
    },
    {
      id: 'geo2-1-5-example-1',
      type: 'example',
      title: 'Is-albedo-tilbakekoblingen',
      problem:
        'Forklar is-albedo-tilbakekoblingen steg for steg, og begrunn hvorfor den er en positiv tilbakekobling.',
      solution: `**Løsning:**

Is-albedo-tilbakekoblingen fungerer slik:

1. Global oppvarming fører til at **sjøis og snø smelter**
2. Mørke overflater (hav, jord) med **lav albedo** eksponeres
3. Mørke overflater absorberer **mer solstråling** enn is og snø
4. Økt absorpsjon fører til **mer oppvarming**
5. Mer oppvarming fører til **enda mer issmelting**
6. Prosessen forsterker seg selv → **positiv tilbakekobling**

Eksempel med tall:
- Is/snø reflekterer ca. 80 % av sollyset (albedo = 0,8)
- Åpent hav reflekterer ca. 6 % (albedo = 0,06)
- Når 1 km² is erstattes av åpent hav, absorberes ca. 74 % mer solenergi

Denne tilbakekoblingen er en av hovedårsakene til at Arktis varmes opp 2–3 ganger raskere enn det globale gjennomsnittet (arktisk forsterkning).`,
    },
    {
      id: 'geo2-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvorfor hever smelting av sjøis IKKE havnivået direkte?',
        options: [
          { id: 'a', text: 'Fordi sjøis inneholder salt som opptar mindre plass', isCorrect: false },
          { id: 'b', text: 'Fordi sjøis allerede flyter i havet og fortrenger sin egen masse i vann', isCorrect: true },
          { id: 'c', text: 'Fordi sjøis er for liten til å påvirke havnivået', isCorrect: false },
          { id: 'd', text: 'Fordi sjøis fordamper i stedet for å smelte', isCorrect: false },
        ],
        solution:
          'I henhold til Arkimedes prinsipp fortrenger et flytende objekt en vannmengde som veier like mye som objektet selv. Når sjøis smelter, fyller smeltevannet nøyaktig det volumet som isen fortrengte. Derfor endres ikke havnivået ved smelting av sjøis. Smelting av landis (innlandsis og breer) derimot tilfører nytt vann til havet og hever havnivået.',
      },
    },
    {
      id: 'geo2-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvorfor permafrosttining regnes som en «tikkende klimabombe». Bruk begrepene karbonlager, positiv tilbakekobling og metan i svaret.',
        hints: [
          'Permafrosten inneholder ca. 1 500 Gt karbon.',
          'Metan (CH₄) er en ca. 80 ganger sterkere drivhusgass enn CO₂ over en 20-årsperiode.',
        ],
        solution:
          'Permafrost inneholder anslagsvis 1 500 Gt organisk karbon, nesten dobbelt så mye som i hele atmosfæren. Når permafrosten tiner på grunn av global oppvarming, brytes det organiske materialet ned av mikroorganismer. Under oksygenrike forhold dannes CO₂, og under oksygenfattige forhold (f.eks. i våtmarker) dannes metan (CH₄). Metan er en svært kraftig drivhusgass – ca. 80 ganger sterkere enn CO₂ over 20 år. Frigjøring av disse gassene forsterker oppvarmingen, som igjen tiner mer permafrost – en klassisk positiv tilbakekobling. Prosessen er vanskelig å reversere og kan akselerere klimaendringene betydelig.',
      },
    },

    // ========== BLOKK 2: Biosfæren ==========
    {
      id: 'geo2-1-5-def-2',
      type: 'definition',
      title: 'Biosfæren',
      content:
        'Biosfæren er summen av alle levende organismer på jorden og de delene av de andre sfærene de lever i. Den strekker seg fra dyphavets hydrotermale ventiler (geosfæren/hydrosfæren) til øvre troposfæren (atmosfæren). Biosfæren påvirker de andre sfærene gjennom **fotosyntese**, **respirasjon**, **forvitring** (biologisk), **sedimentdannelse** og **påvirkning av atmosfærens sammensetning**.',
    },
    {
      id: 'geo2-1-5-text-biosfaeren',
      type: 'text',
      content: `## Biosfærens samspill med andre sfærer

### Biosfæren og atmosfæren
- **Fotosyntese**: Planter, alger og cyanobakterier tar opp CO₂ og frigjør O₂. Uten fotosyntese ville det ikke vært fritt oksygen i atmosfæren.
- **Respirasjon**: Organismer bruker O₂ og frigjør CO₂ – motsatt av fotosyntese
- **Metanproduksjon**: Metanogene bakterier i våtmarker, rismarker og drøvtyggeres mager produserer CH₄
- Nettoeffekten: biosfæren er en **netto karbonsluker** – den tar opp mer CO₂ enn den frigjør (for nå)

### Biosfæren og hydrosfæren
- Fytoplankton i havet står for ca. **50 %** av global fotosyntese
- **Biologisk pumpe**: Dødt organisk materiale synker til dyphavet og binder karbon over lang tid
- Korallrev bygger kalkstrukturer (CaCO₃) som binder karbon fra havvannet
- Vegetasjon langs elver og kyster stabiliserer jord og reduserer erosjon

### Biosfæren og geosfæren
- **Biologisk forvitring**: Planterøtter, lav og bakterier bryter ned bergarter og frigjør mineraler
- **Jordsmonndannelse**: Nedbrytning av organisk materiale danner humus og fruktbar jord
- Fossile brensler er resultatet av millioner av år med begravd biomasse

### Biosfæren og kryosfæren
- Vegetasjon i arktiske strøk (tundra) påvirker hvor mye snø og is som smelter
- Mørk vegetasjon har lavere albedo enn snødekke → trelinjen kryper nordover med oppvarmingen
- Alger på isbreer kan redusere isens albedo og akselerere smeltingen`,
    },
    {
      id: 'geo2-1-5-example-2',
      type: 'example',
      title: 'Fytoplankton og karbonkretsløpet',
      problem:
        'Forklar rollen til fytoplankton i havets karbonkretsløp, og beskriv hva som menes med «den biologiske pumpen».',
      solution: `**Løsning:**

Fytoplankton er mikroskopiske alger som lever i havets overflatelag. De utfører fotosyntese:

CO₂ + H₂O → organisk materiale + O₂

**Den biologiske pumpen** fungerer slik:
1. Fytoplankton tar opp oppløst CO₂ fra overflatevannet via fotosyntese
2. Fytoplankton spises av dyreplankton som produserer avføringspellets
3. Dødt plankton og pellets synker nedover i vannsøylen som «marin snø»
4. En del av dette organiske materialet når dyphavet der det lagres i lang tid
5. Karbonet fjernes dermed fra kontakt med atmosfæren i hundrevis til tusenvis av år

Den biologiske pumpen frakter anslagsvis **10–15 Gt karbon** per år fra overflaten til dyphavet. Uten denne prosessen ville atmosfærens CO₂-nivå vært betydelig høyere.`,
    },
    {
      id: 'geo2-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Omtrent hvor stor andel av global fotosyntese utføres av fytoplankton i havet?',
        options: [
          { id: 'a', text: 'Ca. 10 %', isCorrect: false },
          { id: 'b', text: 'Ca. 25 %', isCorrect: false },
          { id: 'c', text: 'Ca. 50 %', isCorrect: true },
          { id: 'd', text: 'Ca. 75 %', isCorrect: false },
        ],
        solution:
          'Fytoplankton i havet står for omtrent 50 % av all fotosyntese på jorden, til tross for at de utgjør en svært liten andel av den totale biomassen. De er helt avgjørende for oksygenproduksjonen og for å binde CO₂ i havet.',
      },
    },

    // ========== BLOKK 3: Karbonkretsløpet og tilbakekoblinger ==========
    {
      id: 'geo2-1-5-text-karbon',
      type: 'text',
      content: `## Karbonkretsløpet mellom sfærene

Karbon sirkulerer mellom alle fem sfærene i det som kalles **karbonkretsløpet**. Vi skiller mellom det **raske** og det **langsomme** karbonkretsløpet.

### Det raske karbonkretsløpet (år til årtier)
- **Fotosyntese**: CO₂ fra atmosfæren bindes i biomasse
- **Respirasjon og nedbrytning**: Organisk karbon frigjøres tilbake som CO₂
- **Havopptak**: CO₂ løses i overflatevannet
- **Havutgassing**: CO₂ frigis fra varmt havvann

Disse prosessene flytter ca. **200 Gt karbon** per år mellom atmosfære, hav og landbiomasse.

### Det langsomme karbonkretsløpet (millioner av år)
- **Forvitring av silikater**: Kjemisk forvitring bruker CO₂ og reduserer atmosfærens innhold
- **Kalksteindannelse**: Kalsiumkarbonat (CaCO₃) avsettes på havbunnen
- **Begravelse av organisk materiale**: Danner fossile brensler over millioner av år
- **Vulkanisme**: Frigjør CO₂ fra mantelen til atmosfæren

### Karbonreservoarer

| Reservoar | Karbon (Gt C) |
|---|---|
| Atmosfæren | ca. 870 |
| Hav (oppløst) | ca. 38 000 |
| Landvegetasjon | ca. 450 |
| Jordsmonn | ca. 2 400 |
| Permafrost | ca. 1 500 |
| Fossile brensler | ca. 4 000 |
| Kalkstein og sedimenter | > 60 000 000 |

## Tilbakekoblinger mellom sfærene

De viktigste tilbakekoblingene i klimasystemet involverer flere sfærer:

| Tilbakekobling | Type | Sfærer involvert |
|---|---|---|
| Is-albedo | Positiv | Kryosfære–atmosfære |
| Vanndamp | Positiv | Hydrosfære–atmosfære |
| Permafrost-karbon | Positiv | Kryosfære–atmosfære–biosfære |
| CO₂-forvitring | Negativ | Atmosfære–geosfære |
| Vegetasjonsopptak | Negativ (foreløpig) | Biosfære–atmosfære |

**Negativ tilbakekobling – naturlig termostat:**
Økt CO₂ → varmere klima → mer nedbør → mer kjemisk forvitring → mer CO₂ fjernes → demper oppvarmingen. Denne prosessen virker over millioner av år og fungerer som jordens langsiktige termostat.`,
    },
    {
      id: 'geo2-1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv forskjellen mellom det raske og det langsomme karbonkretsløpet. Gi to eksempler på prosesser i hvert.',
        hints: [
          'Det raske kretsløpet involverer biologiske prosesser og havkjemi.',
          'Det langsomme kretsløpet involverer geologiske prosesser som tar millioner av år.',
        ],
        solution:
          'Det raske karbonkretsløpet opererer over år til årtier og involverer biologiske og kjemiske prosesser: (1) fotosyntese (planter binder CO₂ fra atmosfæren) og (2) havopptak (CO₂ løses i overflatevannet). Det langsomme karbonkretsløpet opererer over millioner av år og involverer geologiske prosesser: (1) kjemisk forvitring av silikater som bruker CO₂ og fører til kalksteindannelse på havbunnen, og (2) vulkanisme som frigjør CO₂ lagret i mantelen tilbake til atmosfæren. Begge kretsløpene er viktige – det raske regulerer CO₂ på kort sikt, det langsomme fungerer som jordens termostat over geologisk tid.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'geo2-1-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- Kryosfæren omfatter innlandsis, breer, sjøis, snødekke og permafrost.
- Is-albedo-tilbakekoblingen gjør Arktis spesielt sårbar for oppvarming.
- Permafrosten inneholder enorme mengder karbon som kan frigjøres ved tining.
- Biosfæren påvirker alle andre sfærer gjennom fotosyntese, respirasjon og forvitring.
- Fytoplankton i havet er ansvarlig for ca. halvparten av global fotosyntese.
- Karbonkretsløpet har en rask (biologisk) og en langsom (geologisk) komponent.
- Tilbakekoblinger mellom sfærene kan forsterke (positiv) eller dempe (negativ) endringer i klimasystemet.
- Forståelsen av vekselvirkninger mellom sfærene er avgjørende for å forstå klimaendringene.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'geo2-1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøfting: Arktis varmes opp 2–3 ganger raskere enn det globale gjennomsnittet. Forklar minst tre mekanismer som bidrar til denne «arktiske forsterkningen», og beskriv hvilke sfærer som er involvert i hver mekanisme.',
        hints: [
          'Is-albedo-tilbakekoblingen er den viktigste mekanismen.',
          'Tenk også på permafrost, vanndamp og endringer i havsirkulasjonen.',
        ],
        solution:
          'Tre mekanismer bak arktisk forsterkning:\n\n1. **Is-albedo-tilbakekobling** (kryosfære–atmosfære): Smelting av sjøis og snø eksponerer mørke overflater som absorberer mer solstråling, noe som forsterker oppvarmingen lokalt.\n\n2. **Permafrost-karbon-tilbakekobling** (kryosfære–biosfære–atmosfære): Tining av permafrost frigjør CO₂ og CH₄ fra nedbrutt organisk materiale, som forsterker drivhuseffekten.\n\n3. **Vanndamp-tilbakekobling** (hydrosfære–atmosfære): Varmere luft holder mer vanndamp, som er en drivhusgass. I Arktis er luften normalt svært tørr, så en liten økning i vanndamp har relativt stor effekt.\n\nI tillegg bidrar endringer i havsirkulasjon og transport av varme fra lavere breddegrader via havstrømmer (hydrosfæren) til oppvarmingen.',
      },
    },
    {
      id: 'geo2-1-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Prosjektoppgave: Lag en oversikt over de viktigste tilbakekoblingene i klimasystemet. For hver tilbakekobling: (a) beskriv mekanismen, (b) angi om den er positiv eller negativ, (c) identifiser hvilke sfærer som er involvert, og (d) vurder hvor raskt den virker (dager, år, århundrer eller millioner av år).',
        hints: [
          'Inkluder minst fem tilbakekoblinger.',
          'Bruk tabellen i kapittelet som utgangspunkt, men forklar hver mekanisme i detalj.',
        ],
        solution:
          'Eksempel på fem tilbakekoblinger:\n\n1. **Is-albedo** – Positiv – Kryosfære/atmosfære – Virker over år til tiår. Mindre is → lavere albedo → mer absorbert stråling → mer smelting.\n\n2. **Vanndamp** – Positiv – Hydrosfære/atmosfære – Virker over dager til uker. Varmere → mer vanndamp → sterkere drivhuseffekt → enda varmere.\n\n3. **Permafrost-karbon** – Positiv – Kryosfære/biosfære/atmosfære – Virker over tiår til århundrer. Tining → CO₂/CH₄-frigjøring → mer oppvarming → mer tining.\n\n4. **CO₂-forvitring** – Negativ – Atmosfære/geosfære/hydrosfære – Virker over millioner av år. Mer CO₂ → varmere → mer forvitring → CO₂ fjernes.\n\n5. **Vegetasjonsopptak** – Negativ (foreløpig) – Biosfære/atmosfære – Virker over år til tiår. Mer CO₂ → bedre plantevekst → mer CO₂ bindes. Men denne effekten kan svekkes ved høye temperaturer og tørke.',
      },
    },
    {
      id: 'geo2-1-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'geo2-1-5-ex-7',
        number: '7',
        type: 'multiple-choice',
        task: 'Hvilken av følgende er en negativ tilbakekobling i klimasystemet?',
        options: [
          { id: 'a', text: 'Is-albedo-effekten', isCorrect: false },
          { id: 'b', text: 'Vanndamp-tilbakekoblingen', isCorrect: false },
          { id: 'c', text: 'Kjemisk forvitring av silikater som bruker CO₂', isCorrect: true },
          { id: 'd', text: 'Permafrosttining og metanfrigjøring', isCorrect: false },
        ],
        solution:
          'Kjemisk forvitring av silikatbergarter er en negativ tilbakekobling: Økt CO₂ → varmere → mer nedbør → mer forvitring som forbruker CO₂ → lavere CO₂-nivå → demper oppvarmingen. Denne prosessen virker over millioner av år og fungerer som jordens langsiktige termostat. De andre alternativene er alle positive tilbakekoblinger som forsterker oppvarmingen.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Innlandsis', definition: 'Massive isdekker som dekker store landområder, finnes på Grønland og Antarktis.' },
    { term: 'Sjøis', definition: 'Fryst havvann som danner isdekke over polhavene – smelting hever ikke havnivået direkte.' },
    { term: 'Permafrost', definition: 'Jord eller berg som har vært frosset i minst to sammenhengende år.' },
    { term: 'Albedoeffekten', definition: 'Is og snø reflekterer mye sollys – tap av is fører til økt absorpsjon.' },
    { term: 'Biologisk pumpe', definition: 'Transport av karbon fra havoverflaten til dyphavet via biologiske prosesser.' },
    { term: 'Karbonkretsløpet', definition: 'Sirkulasjon av karbon mellom atmosfære, hav, land, biosfære og geosfære.' },
    { term: 'Positiv tilbakekobling', definition: 'Mekanisme der en endring forsterker den opprinnelige endringen.' },
    { term: 'Negativ tilbakekobling', definition: 'Mekanisme der en endring demper den opprinnelige endringen – bidrar til stabilitet.' },
    { term: 'Arktisk forsterkning', definition: 'Fenomenet at Arktis varmes opp 2–3 ganger raskere enn det globale gjennomsnittet.' },
  ],
};

// ============================================================================
// Eksport av alle kapitler i seksjon 1
// ============================================================================

export const GEOFAG_2_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_GEOFAG_2_1_1,
  CHAPTER_GEOFAG_2_1_2,
  CHAPTER_GEOFAG_2_1_3,
  CHAPTER_GEOFAG_2_1_4,
  CHAPTER_GEOFAG_2_1_5,
];
