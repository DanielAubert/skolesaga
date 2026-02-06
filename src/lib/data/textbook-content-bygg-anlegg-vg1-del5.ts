/* eslint-disable */
// @ts-nocheck
/**
 * Bygg- og anleggsteknikk VG1 - Del 5 (Kapittel 31-38)
 * Dekker LK20 kompetansemål - utdypende temaer
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 31: Armering og armeringsteknikk
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_31: TextbookChapter = {
  id: 'bygg-anlegg-vg1-31',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '31',
  title: 'Armering og armeringsteknikk',
  description: 'Armering av betongkonstruksjoner, armeringstegninger og utførelse.',
  estimatedMinutes: 65,
  competenceGoals: [
    'forstå og arbeide etter tegninger og beskrivelser',
    'planlegge og bygge en konstruksjon',
  ],
  sections: [
    {
      title: 'Hvorfor armering',
      content: `## Hvorfor armering

Betong er sterkt i trykk men svakt i strekk. Armering tar opp strekkrefter.

**Betongens egenskaper:**
- Trykk: Meget sterk (25-50 MPa)
- Strekk: Svak (bare 2-4 MPa)
- Bøyning: Svak (kombinasjon av trykk og strekk)

**Armeringens funksjon:**
- Tar opp strekkrefter
- Hindrer sprekkdannelse
- Gir duktilitet (brudd varsles)
- Øker bøyestyrken dramatisk

**Hvor trengs armering:**
- Bjelker (strekk i underkant)
- Dekker (strekk i underkant og over støtter)
- Søyler (holde betongen sammen)
- Vegger (strekk ved jordtrykk)
- Fundamenter (sprekkbegrensning)

**Samvirke betong-armering:**
Betong og stål utvider seg likt ved temperaturendring. Betongen beskytter armeringen mot korrosjon. Armeringen må ha god heft til betongen.`,
    },
    {
      title: 'Armeringstyper',
      content: `## Armeringstyper

Ulike armeringstyper brukes til ulike formål.

**Kamstål (ribbejern):**
- Vanligst armeringsstål
- Ribber for god heft til betong
- Kvaliteter: B500NC (mest brukt)
- Flytegrense: 500 MPa

**Dimensjoner:**
- Ø8 mm: Bøyler, lette konstruksjoner
- Ø10-12 mm: Vanlig bærearmering
- Ø16-20 mm: Tyngre konstruksjoner
- Ø25-32 mm: Store bjelker, broer

**Armeringsnett:**
- Prefabrikkert nett av sveiste stenger
- Brukes i dekker, gulv, vegger
- Standard rutenett (150×150 mm vanlig)
- Kvalitet K500A-W

**Fiberarmering:**
- Stålfiber eller plastfiber
- Blandes i betongen
- Erstatter noe av tradisjonell armering
- Særlig i gulv og sprøytebetong

**Korrosjonsbeskyttelse:**
- Varmforsinket stål
- Rustfritt stål
- Epoksybelagt armering
Brukes i aggressive miljøer (kjemikalier, salt, sjøvann).`,
    },
    {
      title: 'Armeringstegninger',
      content: `## Armeringstegninger

Armeringstegninger viser armeringens plassering og dimensjon.

**Innhold i armeringstegninger:**
- Plantegning med armering sett ovenfra
- Snitttegninger som viser lagdeling
- Bøyelister med dimensjoner
- Materiallister med mengder

**Symboler og betegnelser:**

**Armeringsstenger:**
- Hel strek: Hovedarmering
- Stiplet: Armering bak/under
- Bøyle vist med lukket form

**Betegnelser:**
Ø12 c150: Diameter 12 mm, senteravstand 150 mm
5Ø16: 5 stenger diameter 16 mm

**Bøyelister:**
Viser hvordan hver stangtype skal bøyes:
- Stangmerke (bokstav/nummer)
- Dimensjon
- Antall
- Lengde og bøyemål
- Plassering

**Overdekning:**
Avstand fra armeringens ytterkant til betongoverflate:
- Innendørs: 25-30 mm
- Utendørs: 35-50 mm
- I jord/sjøvann: 50+ mm

**Heftelengder:**
Stenger må ha tilstrekkelig lengde inn i betongen for å forankre kreftene. Angis på tegning eller beregnes.`,
    },
    {
      title: 'Praktisk armeringsarbeid',
      content: `## Praktisk armeringsarbeid

Korrekt utførelse av armeringsarbeid er avgjørende for konstruksjonens styrke.

**Verktøy:**
- Armeringssaks
- Bøyebenk
- Bindetråd og bindekrok
- Armeringsrister
- Distanseholdere

**Kapping:**
- Kapp på angitt lengde pluss heftelengde
- Bruk armeringssaks eller vinkelsliper
- Merk stengene etter bøyelisten

**Bøying:**
- Følg bøyelistens angivelser
- Bøy i kulde - ikke varm opp stålet
- Minimum bøyeradius avhenger av dimensjon
- Bøyler: 90° eller 135° kroker

**Plassering:**

**1. Distanseholdere**
Plastbrikker, betongstoler eller stenger som sikrer riktig overdekning.

**2. Hovedarmering først**
Legg langsgående bærearmering.

**3. Bøyler/tverrarmering**
Monter rundt hovedarmeringen.

**4. Binding**
Bind armeringen sammen med bindetråd i hvert krysningspunkt langs kanter, annethvert i felt.

**5. Kontroll**
Sjekk overdekning, senteravstand og plassering mot tegning.

**Skjøting:**
- Overlapp: Beregnes, typisk 40-50 ganger diameter
- Sveising: Krever sertifisert sveiser
- Mekanisk skjøt: Spesialhylser`,
    },
    {
      title: 'Eksempel: Armering av søylefundament',
      content: `## Eksempel: Armering av søylefundament

**Oppgave:**
Armere et søylefundament 1×1×0,4 meter.

**Armeringstegning viser:**
- Bunnnett: Ø12 c150 begge retninger
- Startstenger for søyle: 4Ø16
- Overdekning: 50 mm

**Beregning av stenger:**

**Bunnnett x-retning:**
Bredde 1000 mm / 150 mm + 1 = 7 stenger
Lengde: 1000 - 2×50 = 900 mm

**Bunnnett y-retning:**
Samme som x-retning: 7 stenger à 900 mm

**Gjennomføring:**

**Steg 1: Forberedelse**
- Kontroller forskalingen
- Ha distanseholdere klare (50 mm)
- Kapp og merk alle stenger

**Steg 2: Distanseholdere**
Legg ut plastdistanser i bunn av forskalingen.

**Steg 3: Nedre nett**
- Legg 7 stenger i x-retning
- Legg 7 stenger i y-retning oppå
- Bind i alle krysningspunkter langs kant
- Bind annethvert i felt

**Steg 4: Startstenger for søyle**
- 4 stk Ø16, 800 mm over fundament
- Plasser i riktig posisjon for søylen
- Bind fast til bunnnettet
- Bruk avstandsholder for riktig posisjon

**Steg 5: Kontroll**
- Mål overdekning (50 mm)
- Sjekk senteravstand (150 mm)
- Sjekk startstengerens posisjon
- Ta foto for dokumentasjon`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-31-ex-1',
      task: 'Forklar hvorfor betong må armeres, og hva armeringens hovedfunksjon er.',
      solution: 'Betong er sterkt i trykk men svakt i strekk (bare ca. 1/10 av trykkstyrken). Armeringens hovedfunksjon er å ta opp strekkrefter som oppstår når konstruksjonen belastes. I tillegg hindrer armering sprekkdannelse, gir varsel før brudd (duktilitet), og øker bøyestyrken dramatisk.',
    },
    {
      id: 'bygg-anlegg-vg1-31-ex-2',
      task: 'Hva betyr betegnelsen Ø12 c150 på en armeringstegning?',
      solution: 'Ø12 c150 betyr armeringsstenger med diameter 12 mm plassert med senteravstand 150 mm mellom stengene. c står for "center" og angir avstanden fra midten av en stang til midten av neste.',
    },
    {
      id: 'bygg-anlegg-vg1-31-ex-3',
      task: 'Hva er overdekning, og hvorfor er det viktig?',
      solution: 'Overdekning er avstanden fra armeringens ytterkant til betongoverflaten. Det er viktig fordi betonglaget beskytter armeringen mot korrosjon (rust). For lite overdekning gjør at rust kan nå armeringen, som da utvider seg og sprekker betongen. Typisk 25-50 mm avhengig av eksponeringsforhold.',
    },
    {
      id: 'bygg-anlegg-vg1-31-ex-4',
      task: 'Beskriv rekkefølgen ved armering av et betongdekke.',
      solution: '1) Legg ut distanseholdere for å sikre overdekning. 2) Legg hovedarmering (nedre lag) i bæreretningen. 3) Legg tverrarmering (nedre lag) vinkelrett på hovedarmering. 4) Monter armeringsstoler for øvre armering. 5) Legg øvre armering (ved støtter/over søyler). 6) Bind armeringen sammen. 7) Kontroller mot tegning.',
    },
    {
      id: 'bygg-anlegg-vg1-31-ex-5',
      task: 'Nevn tre typer armeringsmaterialer og forklar kort når hver type brukes.',
      solution: '1) Kamstål (ribbejern) - mest brukt, til alle typer konstruksjoner, ribbene gir god heft. 2) Armeringsnett - prefabrikkert, brukes i dekker, gulv og vegger for å spare arbeidstid. 3) Fiberarmering - stål- eller plastfiber blandet i betongen, brukes i industrigulv og sprøytebetong for sprekkbegrensning.',
    },
    // --- Samleoppgaver ---
    {
      id: 'bygg-anlegg-vg1-31-ex-6',
      task: 'Et betongdekke på 4×5 meter skal armeres med bunnnett Ø10 c200 i begge retninger. Overdekning er 25 mm. Beregn antall stenger i hver retning og lengden på stengene.',
      solution: 'X-RETNING (4 m): Antall = 5000/200 + 1 = 26 stenger. Lengde = 4000 - 2×25 = 3950 mm. Y-RETNING (5 m): Antall = 4000/200 + 1 = 21 stenger. Lengde = 5000 - 2×25 = 4950 mm. TOTAL: 26 stenger à 3950 mm + 21 stenger à 4950 mm. Husk å bestille med tillegg for kapp og eventuell overlapping ved skjøt.',
    },
    {
      id: 'bygg-anlegg-vg1-31-ex-7',
      task: 'Du oppdager under kontroll at overdekningen på armeringen i en vegg er bare 15 mm i stedet for 35 mm som tegningen krever. Forklar konsekvensene og hva du ville gjort.',
      solution: 'KONSEKVENSER: For liten overdekning (15 mm vs 35 mm) gir dårlig beskyttelse mot korrosjon. Armeringen vil ruste, rust utvider og sprenger betongen. Veggen vil få kortere levetid og kan bli farlig. TILTAK: 1) Stopp støpearbeidet umiddelbart. 2) Registrer avviket skriftlig med foto. 3) Meld fra til arbeidsleder. 4) Armeringen må justeres - legg inn flere/større distanseholdere. 5) Kontroller på nytt og dokumenter at overdekningen nå er korrekt. 6) Først da kan støping fortsette.',
    },
  ],
  keyTerms: [
    { term: 'Armering', definition: 'Stålstenger i betong som tar opp strekkrefter.' },
    { term: 'Kamstål', definition: 'Armeringsstål med ribber for god heft til betongen.' },
    { term: 'Overdekning', definition: 'Betonglag som beskytter armeringen, måles til ytterkant av stål.' },
    { term: 'Bøyeliste', definition: 'Tegning som viser hvordan armeringsstenger skal bøyes.' },
    { term: 'Distanseholder', definition: 'Brikke som sikrer riktig overdekning mellom armering og forskaling.' },
    { term: 'Heftelengde', definition: 'Lengden armering må gå inn i betongen for å forankre krefter.' },
  ],
};

// ============================================================================
// Kapittel 32: Prefabrikkert betong
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_32: TextbookChapter = {
  id: 'bygg-anlegg-vg1-32',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '32',
  title: 'Prefabrikkert betong',
  description: 'Bruk av prefabrikkerte betongelementer i moderne bygging.',
  estimatedMinutes: 55,
  competenceGoals: [
    'planlegge og bygge en konstruksjon',
    'velge og bruke materialer med hensyn til bærekraft',
  ],
  sections: [
    {
      title: 'Hva er prefabrikkert betong',
      content: `## Hva er prefabrikkert betong

Prefabrikkerte betongelementer produseres på fabrikk og monteres på byggeplass.

**Forklaring:**
I stedet for å støpe betong på stedet (plasstøpt), produseres ferdige elementer i en fabrikk under kontrollerte forhold. Elementene transporteres til byggeplass og løftes på plass.

**Fordeler:**
- Raskere bygging (parallell produksjon)
- Bedre kvalitet (kontrollerte forhold)
- Mindre avhengig av vær
- Redusert støy og støv på byggeplass
- Færre folk på byggeplass
- Jevnere overflater

**Ulemper:**
- Krever stor kran
- Transportbegrensninger
- Mindre fleksibilitet i design
- Skjøter må tettes og behandles

**Typiske bruksområder:**
- Leilighetsbygg og kontorbygg
- Parkeringshus
- Industri- og lagerbygg
- Skoler og sykehus
- Broer og konstruksjoner`,
    },
    {
      title: 'Elementtyper',
      content: `## Elementtyper

Det finnes mange typer prefabrikkerte betongelementer.

**Hulldekker:**
- Hule plater for etasjeskiller
- Spenner langt (opptil 16 meter)
- Lette i forhold til styrke
- Standard bredde 1,2 meter
- Høyder: 200, 265, 320, 400 mm

**Veggelementer:**
- Bærende yttervegger
- Skillevegger
- Sandwichelementer (isolert)
- Fasadeelementer

**Søyler og bjelker:**
- Rektangulære søyler
- Bjelker med ulike profiler
- Konsoller for opplegg

**Trapper:**
- Hele trappeløp
- Repos og podester
- Ferdig støpt med rekkverk

**Fundamenter:**
- Punktfundamenter
- Stripefundamenter
- Kjellervegger

**Spesielle elementer:**
- Balkongplater
- Heissjakter
- TT-kassetter (dobbel-T profil)`,
    },
    {
      title: 'Transport og montering',
      content: `## Transport og montering

Transport og montering krever nøye planlegging.

**Transportplanlegging:**
- Elementenes vekt og størrelse
- Tilgjengelige veier
- Spesialtransport for store elementer
- Leveranserekkefølge

**Krankapasitet:**
- Beregn vekt av tyngste element
- Vurder løfteavstand
- Velg riktig krantype og størrelse
- Mobilkran eller tårnkran

**Løfteutstyr:**
- Innstøpte løfteanker i elementene
- Løfteklyper og traverskroker
- Stropper til spesielle elementer
- Kontroll av sertifikater

**Monteringsrekkefølge:**

**1. Fundamenter**
Settes på forberedt grunn, justeres i høyde.

**2. Kjellervegger**
Settes på fundamenter, avstives midlertidig.

**3. Bjelker og søyler**
Monteres i riktig posisjon, boltes/sveises.

**4. Dekker**
Løftes på plass, støttes om nødvendig.

**5. Vegger**
Settes lag for lag med dekker.

**Midlertidig avstivning:**
Elementene må avstives midlertid til skjøter er ferdig støpt og konstruksjonen er stabil.`,
    },
    {
      title: 'Skjøter og forbindelser',
      content: `## Skjøter og forbindelser

Forbindelsene mellom elementer er kritiske for konstruksjonens styrke.

**Typer forbindelser:**

**Våte skjøter:**
- Elementer plasseres med mellomrom
- Armering fra hvert element stikker ut
- Mellomrommet støpes med betong
- Gir kraftoverføring som plasstøpt

**Tørre skjøter:**
- Mekanisk forbindelse
- Bolter, sveising, innstøpte plater
- Raskere, mindre væravhengig
- Krever nøyaktig produksjon

**Typiske skjøter:**

**Søyle til fundament:**
Innstøpt hylse i fundament, armering fra søyle stikkes ned og støpes.

**Bjelke til søyle:**
Konsoll på søyle, bjelke legges oppå, våt skjøt eller boltes.

**Hulldekke til vegg:**
Dekke legges på vegg, spalte støpes med betong.

**Vegg til vegg:**
Vertikale utsparinger i veggende, armering stikkes inn, støpes.

**Fugetetting:**
- Horisontale fuger tettes med fugemasse
- Vertikal fuger i fasade må være regntette
- Elastisk fugemasse for bevegelser`,
    },
    {
      title: 'Eksempel: Montering av hulldekker',
      content: `## Eksempel: Montering av hulldekker

**Situasjon:**
Montere hulldekker på et boligbygg. Spennvidde 8 meter, dekkehøyde 265 mm.

**Forberedelse:**

**Sjekk opplegg:**
- Veger/bjelker må ha riktig kotehøyde
- Oppleggslengde minimum 75 mm
- Overflaten ren og plan

**Kranplanlegging:**
- Elementvekt ca. 3,5 tonn per element
- Løfteavstand planlegges
- Kran posisjonert sentralt

**Montering:**

**Steg 1: Motta element**
- Kontroller merking mot monteringsplan
- Sjekk for transportskader

**Steg 2: Løft**
- Fest løfteutstyr i innstøpte anker
- Løft forsiktig, hold element horisontalt

**Steg 3: Plasser**
- Senk på plass fra ene enden
- Kontroller oppleggslengde
- Skyv til riktig posisjon

**Steg 4: Neste element**
- Legg kant mot kant
- Fuge mellom elementer ca. 20 mm
- Fortsett til dekket er fullt

**Steg 5: Armering og støping**
- Legg fordelingsarmering over fuger
- Støp fuger og kantavstivning
- Påstøp med armering om tegning viser

**Sikkerhet:**
- Fallsikring ved arbeid på dekket
- Aldri under hengende last
- Midlertidig sikring av hull`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-32-ex-1',
      task: 'Nevn tre fordeler med prefabrikkert betong sammenlignet med plasstøpt betong.',
      solution: '1) Raskere bygging fordi produksjon på fabrikk og forberedelse på byggeplass kan skje parallelt. 2) Bedre kvalitet på grunn av kontrollerte forhold i fabrikk (temperatur, herding). 3) Mindre avhengig av vær - kan bygge om vinteren. Andre: Færre folk på byggeplass, mindre støy og støv, jevnere overflater.',
    },
    {
      id: 'bygg-anlegg-vg1-32-ex-2',
      task: 'Hva er hulldekker, og hva er fordelene med dem?',
      solution: 'Hulldekker er prefabrikkerte betongplater med langsgående hulrom for etasjeskiller. Fordeler: Lette i forhold til styrken (hullene reduserer vekt), kan spenne langt (opptil 16 meter), rask montering, gode lydegenskaper, hullene kan brukes til tekniske føringer.',
    },
    {
      id: 'bygg-anlegg-vg1-32-ex-3',
      task: 'Forklar forskjellen på våte og tørre skjøter mellom betongelementer.',
      solution: 'Våte skjøter: Elementer plasseres med mellomrom, utstikkende armering fra hvert element, mellomrommet støpes med betong - gir kraftoverføring som plasstøpt. Tørre skjøter: Mekanisk forbindelse med bolter, sveising eller innstøpte plater - raskere og mindre væravhengig, men krever nøyaktig produksjon.',
    },
    {
      id: 'bygg-anlegg-vg1-32-ex-4',
      task: 'Hvilke faktorer må vurderes ved kranplanlegging for montering av betongelementer?',
      solution: 'Faktorer å vurdere: 1) Vekt av tyngste element. 2) Løfteavstand/radius (hvor langt fra kranen). 3) Løftehøyde. 4) Kranens kapasitetskurve (løfteevne synker med avstand). 5) Tilgjengelig plass for kranoppstilling. 6) Grunnforhold der kranen skal stå. 7) Monteringsrekkefølge og kranposisjon gjennom prosjektet.',
    },
    {
      id: 'bygg-anlegg-vg1-32-ex-5',
      task: 'Hvorfor trengs midlertidig avstivning av betongelementer under montering?',
      solution: 'Midlertidig avstivning trengs fordi elementene ikke er stabilt forbundet før skjøtene er ferdig støpt og betongen har herdet. Uten avstivning kan elementene velte, forskyve seg eller kollapse. Avstivningen holder elementene i riktig posisjon mens permanente forbindelser etableres.',
    },
    // --- Samleoppgaver ---
    {
      id: 'bygg-anlegg-vg1-32-ex-6',
      task: 'Et dekke på 12×20 meter skal dekkes med hulldekker. Elementene er 1,2 meter brede. Beregn hvor mange elementer som trengs og beskriv monteringsrekkefølgen.',
      solution: 'BEREGNING: Bredde 12 m / 1,2 m per element = 10 elementer i bredden. Lengden 20 m er spennvidden (må sjekke om hulldekke kan spenne så langt - ellers må det ha mellomstøtte). TOTAL: 10 hulldekker. MONTERINGSREKKEFØLGE: 1) Start fra den ene kortveggen. 2) Løft første element på plass på bjelker/vegger. 3) Kontroller oppleggslengde og posisjon. 4) Fortsett med neste element, kant mot kant. 5) Legg alle 10 elementer. 6) Monter fordelingsarmering i fuger. 7) Støp fuger og eventuell påstøp. VIKTIG: Planlegg kranposisjon slik at alle elementer kan nås.',
    },
    {
      id: 'bygg-anlegg-vg1-32-ex-7',
      task: 'Sammenlign bruk av prefabrikkert betong og plasstøpt betong for et leilighetsbygg på 5 etasjer. Diskuter fordeler og ulemper med hver metode.',
      solution: 'PREFABRIKKERT: Fordeler - Raskere byggetid (parallell produksjon), god kvalitet, mindre væravhengig, renere byggeplass. Ulemper - Krever stor kran hele byggetiden, transportkostnader, mindre designfleksibilitet, synlige skjøter må behandles. PLASSTØPT: Fordeler - Full designfrihet, ingen transportbegrensninger, ingen synlige skjøter, kan tilpasses underveis. Ulemper - Langsommere (må vente på herding), væravhengig, mer forskaling og arbeid på plass, større bemanning. KONKLUSJON: For standardiserte leilighetsbygg er prefab ofte mest effektivt. For spesielle design eller vanskelig tilkomst kan plasstøpt være bedre.',
    },
  ],
  keyTerms: [
    { term: 'Prefabrikkert', definition: 'Produsert ferdig på fabrikk, transporteres til byggeplass.' },
    { term: 'Hulldekke', definition: 'Prefabrikkert betongplate med langsgående hulrom for etasjeskiller.' },
    { term: 'Våt skjøt', definition: 'Forbindelse mellom elementer der mellomrom støpes med betong.' },
    { term: 'Løfteanker', definition: 'Innstøpt festepunkt i element for løfting med kran.' },
    { term: 'Opplegg', definition: 'Området der et element hviler på underliggende konstruksjon.' },
    { term: 'Sandwichelement', definition: 'Veggelement med isolasjon mellom to lag betong.' },
  ],
};

// ============================================================================
// Kapittel 33: Trebjelkelag og etasjeskiller
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_33: TextbookChapter = {
  id: 'bygg-anlegg-vg1-33',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '33',
  title: 'Trebjelkelag og etasjeskiller',
  description: 'Konstruksjon av trebjelkelag og etasjeskillere i tre.',
  estimatedMinutes: 60,
  competenceGoals: [
    'planlegge og bygge en konstruksjon',
    'forstå og arbeide etter tegninger og beskrivelser',
  ],
  sections: [
    {
      title: 'Bjelkelagets oppbygning',
      content: `## Bjelkelagets oppbygning

Trebjelkelag bærer gulv og overfører last til vegger.

**Hovedkomponenter:**

**Svill/bunnsvill:**
Horisontal bjelke på toppen av veggen der bjelkene hviler.

**Bjelker:**
De bærende elementene som spenner mellom veggene. Dimensjon avhenger av spennvidde og belastning.

**Spikerslag:**
Tverrbord på oversiden av bjelkene for å hindre vridning og gi underlag for gulv.

**Himlingsbord:**
Kledning på undersiden (mot rommet under).

**Isolasjon:**
Fyller mellom bjelkene for lyd- og varmeisolering.

**Undergulv:**
Plate (spon, OSB) eller bord som legges oppå spikerslaget.

**Typiske bjelkedimensjoner:**
- Spenn 3 m: 48×198 mm c/c 60 cm
- Spenn 4 m: 48×223 mm c/c 60 cm
- Spenn 5 m: 48×248 mm eller 73×223 mm

**Bjelkeavstand:**
Normalt 60 cm (c/c 600) tilpasset platestørrelser.

**I-bjelker:**
Moderne bjelker med flens av tre og steg av plate:
- Lettere enn heltre
- Kan spenne lenger
- Lettere å føre rør gjennom`,
    },
    {
      title: 'Konstruksjonsprinsipper',
      content: `## Konstruksjonsprinsipper

Riktig konstruksjon gir godt bjelkelag med lang levetid.

**Opplegg:**
Bjelkene må ha tilstrekkelig opplegg på vegg/svill:
- Minimum 50 mm
- Normalt 75-100 mm
- Må ha god kontakt hele bredden

**Endevederlag:**
Bjelkens ende må beskyttes mot fukt:
- Impregner endeved
- Luftspalte mot mur
- Ikke innstøpt i betong

**Avstivning:**
Bjelkene må avstives mot vridning:
- Spikerslag på oversiden
- Skråstag ved høye bjelker
- Vindkryss i bjelkelaget

**Utsparinger:**
Hull for rør og kabler:
- Bare i midtre tredjedel av høyden
- Ikke nær opplegg
- Maks hull = 1/4 av bjelkehøyden

**Skjøting av bjelker:**
Bjelker bør ikke skjøtes over spenn. Hvis nødvendig:
- Skjøt over støtte
- Overlapp eller laskeplate
- Beregn styrke

**Lydisolasjon:**
Etasjeskiller mellom leiligheter krever god lydisolering:
- Tunge materialer (gips, betongpåstøp)
- Frakoblet himling (lydbroer)
- Lydisolasjonsstriper mot vegger`,
    },
    {
      title: 'Montering av bjelkelag',
      content: `## Montering av bjelkelag

Trinnvis gjennomgang av bjelkelagsmontering.

**Forberedelse:**
- Les tegninger nøye
- Beregn bjelkeplassering
- Marker posisjon på svill
- Kontroller at vegger er i vater

**Trinn 1: Randsonebjelke**
Monter først bjelker langs yttervegg:
- I vater langs hele lengden
- Festet til svill med vinkler eller skråspiker
- Markerer riktig høyde

**Trinn 2: Hovedbjelker**
Legg inn alle bjelker:
- Riktig senteravstand (c/c 600)
- Krone opp (naturlig bue oppover)
- Kontroller oppleggslengde

**Trinn 3: Feste**
Fest bjelkene til svill:
- Vinkelbeslag vanligst
- Skråspikring alternativ
- Minimum 2 festepunkter per side

**Trinn 4: Spikerslag**
Legg spikerslag på tvers:
- c/c 90 cm eller 120 cm
- Vinkelrett på bjelkene
- Spiker i hver bjelke

**Trinn 5: Isolasjon**
Legg isolasjon mellom bjelkene:
- Fyller hele hulrommet
- Ikke press for hardt
- Dampsperre mot varm side

**Trinn 6: Undergulv**
Legg sponplater eller OSB:
- Fuge mot vegger (5-10 mm)
- Skjøter over bjelker
- Lim og skru`,
    },
    {
      title: 'Etasjeskillere',
      content: `## Etasjeskillere

Etasjeskillere mellom etasjer har spesielle krav.

**Funksjoner:**
- Bære last fra etasjen over
- Lydisolasjon mellom etasjer
- Brannskille (i noen tilfeller)

**Lydkrav:**
TEK17 stiller krav til lydisolasjon mellom boliger:
- Luftlyd: Minimum 55 dB
- Trinnlyd: Maksimum 53 dB

**Tiltak for god lyd:**
- Tunge materialer øker luftlydisolasjon
- Myke sjikt demper trinnlyd
- Frakoblet himling stopper lydbroer

**Oppbygning (fra topp):**
1. Gulvbelegg (parkett, vinyl)
2. Undergulv (plate)
3. Trinnlyddempende matte
4. Spikerslag
5. Bjelker med isolasjon
6. Lydstriper mot vegg
7. Frakoblet himling på fjærprofil
8. Gipsplater (eventuelt dobbelt)

**Brannseksjonering:**
Etasjeskille som brannskille (REI60):
- Dobbel gipskledning
- Brannhemmende isolasjon
- Tette gjennomføringer
- Dokumentert oppbygning`,
    },
    {
      title: 'Eksempel: Bygge etasjeskille',
      content: `## Eksempel: Bygge etasjeskille

**Situasjon:**
Bygge etasjeskille mellom to leiligheter i et trehus. Spenn 4,5 meter.

**Krav:**
- Bæreevne for bolig
- Luftlyd: Min 55 dB
- Trinnlyd: Maks 53 dB

**Løsning:**

**Bjelkedimensjon:**
Spenn 4,5 m med bolignyttelast: 48×248 mm c/c 600

**Oppbygning (nedenfra):**
1. Gipsplater 2×13 mm på fjærprofil
2. 50 mm luftsjikt
3. Bjelker 48×248 med mineralull
4. Spikerslag
5. Sponplate 22 mm
6. Trinnlyddempende matte 5 mm
7. Parkett

**Gjennomføring:**

**Dag 1: Bjelker**
- Marker bjelkeplassering c/c 600
- Monter randsonebjelke i vater
- Legg alle hovedbjelker
- Fest med vinkelbeslag

**Dag 2: Spikerslag og isolasjon**
- Monter spikerslag c/c 900
- Legg lydstriper mot vegger
- Fyll isolasjon mellom bjelker

**Dag 3: Undergulv**
- Legg sponplater
- Fuge mot vegger
- Lim og skru

**Senere: Gulv og himling**
- Monter fjærprofil og gips nedenfra
- Legg trinnlydmatte og parkett

**Dokumentasjon:**
- Kontroller alle lag mot tegning
- Dokumenter oppbygning for FDV
- Lydisolasjon må være godkjent type`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-33-ex-1',
      task: 'Nevn de viktigste komponentene i et trebjelkelag fra topp til bunn.',
      solution: 'Fra topp til bunn: 1) Undergulv (sponplate/OSB). 2) Spikerslag (tverrbord). 3) Bjelker (bærende element). 4) Isolasjon (mellom bjelker). 5) Himlingsbord/gips (kledning under). I etasjeskillere kan det også være trinnlyddempende sjikt og frakoblet himling.',
    },
    {
      id: 'bygg-anlegg-vg1-33-ex-2',
      task: 'Hvor i bjelkens høyde er det tillatt å bore hull for rørgjennomføring, og hvorfor?',
      solution: 'Hull er bare tillatt i midtre tredjedel av bjelkehøyden, ikke nær oppleggene. Maks hullstørrelse er 1/4 av bjelkehøyden. Grunnen er at bøyespenninger er størst øverst og nederst i bjelken, mens midten er nær nøytralaksen der spenningene er minst. Hull nær opplegg svekker skjærkraften.',
    },
    {
      id: 'bygg-anlegg-vg1-33-ex-3',
      task: 'Hva menes med "krone opp" ved legging av trebjelker?',
      solution: 'Krone opp betyr at bjelkens naturlige bue (krumning) skal vende oppover. Alle trebjelker har en svak naturlig bue på grunn av tørking og vekstforhold. Når kronen er opp, vil belastningen rette ut buelken litt, og bjelken vil ikke henge nedover. Hvis kronen er ned, vil belastningen forsterke buen.',
    },
    {
      id: 'bygg-anlegg-vg1-33-ex-4',
      task: 'Hvilke tiltak kan gjøres for å oppnå god lydisolasjon i et etasjeskille?',
      solution: 'Tiltak for lydisolasjon: 1) Bruk tunge materialer som gips eller betongpåstøp (demper luftlyd). 2) Legg trinnlyddempende matte under gulv (demper trinnlyd). 3) Bruk frakoblet himling på fjærprofiler (hindrer lydbroer). 4) Monter lydstriper mot vegger (hindrer lydbro via vegg). 5) Fyll isolasjon helt mellom bjelkene.',
    },
    {
      id: 'bygg-anlegg-vg1-33-ex-5',
      task: 'Hva er fordelen med I-bjelker sammenlignet med heltre bjelker?',
      solution: 'I-bjelker er lettere enn heltre med samme styrke, kan spenne lenger, har jevn kvalitet (ingen kvist som svekker), det er lett å føre rør og kabler gjennom steget (platedelen), og de krymper/sveller mindre enn heltre. Ulempen er at de ikke tåler fukt like godt og må beskyttes under bygging.',
    },
    // --- Samleoppgaver ---
    {
      id: 'bygg-anlegg-vg1-33-ex-6',
      task: 'Et rom på 5×7 meter skal ha trebjelkelag. Bjelkene går i 5-meters retning. Med bjelkedimensjon 48×248 mm og c/c 600, beregn hvor mange bjelker som trengs og beskriv monteringsrekkefølgen.',
      solution: 'BEREGNING: Rombredde 7000 mm / c/c 600 = 11,67 → 12 mellomrom. Antall bjelker = 12 + 1 = 13 bjelker (inkludert randsoner). Bjelkelengde: 5000 mm + 2×75 mm opplegg = 5150 mm. MONTERINGSREKKEFØLGE: 1) Marker alle 13 posisjoner på begge sviller. 2) Monter de to randbjelkene først, sjekk at de er i vater. 3) Strekk snor for høydekontroll. 4) Legg inn de 11 mellombjelkene med krone opp. 5) Fest alle med vinkelbeslag (2 per side). 6) Monter spikerslag c/c 900. 7) Legg isolasjon. 8) Legg undergulv med skjøter over bjelker.',
    },
    {
      id: 'bygg-anlegg-vg1-33-ex-7',
      task: 'Du skal bygge etasjeskille mellom to leiligheter med krav til lydisolasjon. Tegn opp oppbygningen lagvis og forklar hvordan hvert lag bidrar til lydisolasjonen.',
      solution: 'OPPBYGNING (fra topp): 1) PARKETT - overflateLag, lite lydmessig funksjon. 2) TRINNLYDDEMPENDE MATTE (5mm) - absorberer trinnlyd før den går inn i konstruksjonen. 3) SPONPLATE 22mm - stivt underlag. 4) SPIKERSLAG - holder bjelkene og gir luftspalte. 5) BJELKER MED MINERALULL - massen og isolasjonen demper luftlyd. 6) LUFTSPALTE 50mm - ekstra lyddemping. 7) FJÆRPROFIL - vibrerer uten å overføre til gips, bryter lydbroer. 8) DOBBEL GIPS 2×13mm - tung masse demper luftlyd. TILLEGG: Lydstriper mot vegger hindrer at lyden går via veggene.',
    },
  ],
  keyTerms: [
    { term: 'Bjelkelag', definition: 'Bærende konstruksjon av bjelker for gulv eller etasjeskille.' },
    { term: 'Spikerslag', definition: 'Tverrbord på bjelker som hindrer vridning og gir underlag.' },
    { term: 'Etasjeskille', definition: 'Konstruksjonen mellom to etasjer, bærer last og isolerer lyd.' },
    { term: 'I-bjelke', definition: 'Lett trebjelke med flens av tre og steg av plate.' },
    { term: 'Fjærprofil', definition: 'Metallprofil for frakoblet himling som bryter lydbroer.' },
    { term: 'Trinnlyd', definition: 'Lyd fra skritt og slag som overføres gjennom konstruksjonen.' },
  ],
};

// ============================================================================
// Kapittel 34: Utvendig kledning
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_34: TextbookChapter = {
  id: 'bygg-anlegg-vg1-34',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '34',
  title: 'Utvendig kledning',
  description: 'Fasadematerialer, montering av kledning og vindsperre.',
  estimatedMinutes: 55,
  competenceGoals: [
    'velge og bruke materialer med hensyn til bærekraft og ulike byggetradisjoner',
    'planlegge og bygge en konstruksjon',
  ],
  sections: [
    {
      title: 'Kledningstyper',
      content: `## Kledningstyper

Utvendig kledning beskytter konstruksjonen og gir bygget karakter.

**Trekledning:**
Mest tradisjonelt i Norge.

**Stående panel:**
- Brett montert loddrett
- Overliggende dekklist
- God vannavrenning
- Tradisjonelt utseende

**Liggende panel:**
- Brett montert horisontalt
- Overlapp eller not/fjær
- Moderne eller tradisjonelt
- Krever god lufting bak

**Treslag:**
- Gran: Rimelig, må males/beises
- Furu: Tettere, bedre ute
- Lerk: Svært holdbart, ubehandlet
- Eik: Eksklusivt, meget holdbart

**Andre kledningsmaterialer:**

**Fibersement:**
- Eternit, Cembrit
- Brannfast, vedlikeholdsfritt
- Kan ligne tre eller være moderne

**Fasadeplater:**
- HPL-plater (høytrykkslaminat)
- Aluminiumsplater
- Stenplater

**Mur og puss:**
- Teglforblending
- Pusset fasade
- Steinpanel

**Metallkledning:**
- Stål eller aluminium
- Profilerte plater
- Kassetter`,
    },
    {
      title: 'Vindsperre og lufting',
      content: `## Vindsperre og lufting

Riktig oppbygning av fasaden sikrer lang holdbarhet.

**Vindsperre:**
Beskytter isolasjonen mot vind og regn innenfra.

**Typer:**
- Vindpapp (tradisjonell)
- Vindduk (pustende)
- Vindplater (gips eller fiber)

**Krav:**
- Tett mot vind
- Slipper ut fukt
- Dekker hele flaten
- Overlapp minimum 10 cm
- Tapes eller klemmes

**Lufting bak kledning:**
Mellom vindsperre og kledning skal det være luftspalte.

**Funksjon:**
- Luft sirkulerer bak kledningen
- Tørker ut eventuell fukt
- Temperaturutjevning
- Forlenget levetid for kledning

**Luftspalte:**
- Minimum 20 mm
- Åpninger nede og oppe
- Innsektsnett i åpninger
- Utlekting gir avstand

**Utlekting:**
Vertikale lekter (23×48 eller 36×48 mm) spikres på vindsperren. Kledningen festes til lektene.`,
    },
    {
      title: 'Montering av trekledning',
      content: `## Montering av trekledning

Riktig montering gir pen og holdbar fasade.

**Forberedelse:**
- Sjekk at vindsperre er hel og tett
- Utlekting montert og i lodd
- Beregn panelfordeling
- Start- og avslutningspunkter

**Stående kledning:**

**1. Vannbrett**
Monter vannbrett nederst med fall utover.

**2. Grunnbord**
Første rad med underkant på vannbrett.

**3. Dekklist**
Legges over skjøten mellom grunnbord.
Overlapper 15-20 mm på hver side.

**4. Videre oppover**
Fortsett til topp.
Avslutt med beslag under gesims.

**Liggende kledning:**

**1. Startlist**
Gir riktig vinkel på første brett.

**2. Første brett**
Legges med not opp.
Kontroller vater.

**3. Neste brett**
Fjær i not, hamre lett på plass.
Spiker/skru gjennom fjær (skjult).

**4. Fortsett oppover**
Bruk snor for rette linjer.
Forskyvede skjøter.

**Spikring:**
- Rustfrie spiker/skruer
- Forsenket hode
- Forkittning for maling`,
    },
    {
      title: 'Beslag og detaljer',
      content: `## Beslag og detaljer

Gode detaljer hindrer vanninntrenging.

**Viktige beslag:**

**Vannbord/vannbrett:**
- Nederst på veggen
- Fall utover minimum 15°
- Dryppnese i forkant
- Overlapper sokkel

**Vindusbeslag:**
- Over og under vindu
- Fall utover
- Endeoppbrett
- Tett mot karm

**Hjørnebeslag:**
- Utvendige hjørner
- Overlapper kledning
- Dryppnese

**Gesimskant:**
- Under takutstikk
- Beskytter toppen av vegg
- Ventilasjon for luftspalte

**Materialer:**
- Forsinket stål
- Aluminium
- Kobber (eksklusivt)
- Plastbelagt stål

**Prinsipp:**
- Vann skal renne av
- Overlapp nedenfra og opp
- Dryppnese hindrer kapillærkraft
- Fuger må være tette

**Fuging:**
- Elastisk fugemasse ved vinduer og dører
- Bunnfylling i dype fuger
- Primer på kledning ved behov
- Maleoverflatekvalitet`,
    },
    {
      title: 'Eksempel: Kle en gavlvegg',
      content: `## Eksempel: Kle en gavlvegg

**Situasjon:**
Montere stående panel på en gavlvegg 8×6 meter.

**Materialer:**
- Stående dobbelfals furu 22×148 mm
- Utlekter 23×48 mm
- Rustfrie skruer
- Vannbrett og hjørnebeslag

**Forberedelse:**

**Beregning:**
- Effektiv bredde per brett: ca. 130 mm
- 8000 / 130 = 62 grunnbord + dekklister
- Brettlengde 6000 mm + kapp

**Sjekk:**
- Vindsperre hel og tett
- Utlekter i lodd c/c 600
- Vannbrett montert

**Montering:**

**Steg 1: Hjørner først**
- Monter hjørnebord på begge sider
- Loddrett og i flukt

**Steg 2: Første grunnbord**
- Start ved et hjørne
- Underkant på vannbrett
- Loddrett kontroll

**Steg 3: Dekklist**
- Legg dekklist over skjøten
- Overlapp 15 mm på hver side
- Skru gjennom dekklist (synlig)

**Steg 4: Fortsett**
- Grunnbord – dekklist – grunnbord
- Kontroller loddrett for hver 5. brett
- Tilpass bredde ved andre hjørne

**Steg 5: Rundt vindu**
- Stopp kledning ved vindusåpning
- Monter vannbrett under vindu
- Kapp bord rundt vinduet
- Fug mot vinduskarm

**Steg 6: Avslutning**
- Monter gesimsbeslag øverst
- Sjekk at all lufting er åpen
- Grunne/mal snarest for beskyttelse`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-34-ex-1',
      task: 'Forklar forskjellen på stående og liggende panel, og nevn en fordel med hver type.',
      solution: 'Stående panel: Bord montert loddrett med dekklist over skjøtene. Fordel: God vannavrenning fordi vannet renner langs bordene. Liggende panel: Bord montert horisontalt med overlapp eller not/fjær. Fordel: Klassisk utseende, lettere å bytte enkeltbord.',
    },
    {
      id: 'bygg-anlegg-vg1-34-ex-2',
      task: 'Hvorfor er det viktig med luftspalte bak utvendig kledning?',
      solution: 'Luftspalten (min 20 mm) tillater luft å sirkulere bak kledningen. Dette tørker ut eventuell fukt som trenger inn, gir temperaturutjevning som reduserer bevegelser i kledningen, og forlenger kledningens levetid betydelig. Uten lufting kan fukt samle seg og føre til råte.',
    },
    {
      id: 'bygg-anlegg-vg1-34-ex-3',
      task: 'Hva er vindsperrens funksjon, og hvilke egenskaper må den ha?',
      solution: 'Vindsperren beskytter isolasjonen mot vind og inntrenging av regn/fukt utenfra. Den må være tett mot vind, men samtidig slippe ut fukt innenfra (være dampåpen/pustende). Den skal dekke hele flaten med minimum 10 cm overlapp, og festene/skjøtene må tapes eller klemmes for å være tette.',
    },
    {
      id: 'bygg-anlegg-vg1-34-ex-4',
      task: 'Beskriv funksjonen til vannbrett nederst på en vegg.',
      solution: 'Vannbrettet monteres nederst på veggen og har fall utover (minimum 15°). Det leder vann som renner ned fasaden bort fra veggen med en dryppnese i forkant som hindrer at vannet suges tilbake. Det overlapper sokkelen og beskytter overgangen mellom vegg og grunn mot vanninntrenging.',
    },
    {
      id: 'bygg-anlegg-vg1-34-ex-5',
      task: 'Hvorfor bør skruer og spiker til utvendig kledning være rustfrie?',
      solution: 'Vanlige stålskruer vil ruste i kontakt med fukt utendørs. Rust ekspanderer og kan sprekke treverket, samt skaper stygge rustflekker på overflaten. Rustfrie festemidler (syrefast stål eller varmforsinket) holder hele kledningens levetid uten å ødelegge utseende eller funksjon.',
    },
    // --- Samleoppgaver ---
    {
      id: 'bygg-anlegg-vg1-34-ex-6',
      task: 'En vegg på 10×3 meter skal kles med liggende panel med effektiv bredde 120 mm. Beregn hvor mange brett som trengs i høyden og total mengde bord.',
      solution: 'HØYDE: 3000 mm / 120 mm = 25 brett i høyden. LENGDE: Veggen er 10 meter = trenger 10 meter bord per rad. TOTAL: 25 rader × 10 m = 250 løpemeter bord. Med 10% påslag for kapp og svinn: 250 × 1,1 = 275 løpemeter. Hvis bord leveres i 4 m lengder: 275 / 4 = 69 bord. Avrundet opp med litt ekstra: ca. 75 bord.',
    },
    {
      id: 'bygg-anlegg-vg1-34-ex-7',
      task: 'Lag en komplett sjekkliste for montering av utvendig kledning, fra forberedelse til avslutning.',
      solution: 'SJEKKLISTE: FORBEREDELSE: [ ] Vindsperre hel og tett, alle skjøter tapet. [ ] Utlekting montert, i lodd, c/c 600. [ ] Luftåpninger nede og oppe med innsektsnett. [ ] Materialberegning utført, bord på plass. [ ] Vannbrett montert med fall og dryppnese. MONTERING: [ ] Hjørnebord montert først, i lodd. [ ] Første brett i vater ved stående, på vannbrett. [ ] Rustfrie festemidler brukt. [ ] Skjøter forskjøvet mellom rader. [ ] Loddrett/vater sjekkes jevnlig. [ ] Beslag ved vinduer med fall og endeoppbrett. [ ] Fuge mot vinduskarmer. AVSLUTNING: [ ] Gesimsbeslag montert. [ ] Alle luftåpninger åpne. [ ] Synlige hull kittet. [ ] Overflatebehandling (grunning/maling) utført.',
    },
  ],
  keyTerms: [
    { term: 'Vindsperre', definition: 'Duk eller plate som beskytter isolasjon mot vind og regn.' },
    { term: 'Luftspalte', definition: 'Mellomrom bak kledning for ventilasjon, minimum 20 mm.' },
    { term: 'Utlekting', definition: 'Vertikale lekter som gir avstand mellom vindsperre og kledning.' },
    { term: 'Vannbrett', definition: 'Beslag nederst på vegg som leder vann bort fra fasaden.' },
    { term: 'Dekklist', definition: 'Smal list som dekker skjøten mellom stående panelbord.' },
    { term: 'Dryppnese', definition: 'Fremspring på beslag som hindrer vann i å trekkes tilbake.' },
  ],
};

// ============================================================================
// Kapittel 35-38: Kortere kapitler for å nå målet
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_35: TextbookChapter = {
  id: 'bygg-anlegg-vg1-35',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '35',
  title: 'Trapper og rekkverk',
  description: 'Konstruksjon av innvendige trapper og rekkverk.',
  estimatedMinutes: 50,
  competenceGoals: ['planlegge og bygge en konstruksjon'],
  sections: [
    {
      title: 'Trappekonstruksjon',
      content: `## Trappekonstruksjon

Trapper må være sikre, komfortable og oppfylle krav.

**Begreper:**
- **Trinn:** Det horisontale vi tråkker på
- **Opptrinn:** Det vertikale mellom trinn
- **Vange:** Sidestykke som bærer trinnene
- **Repos:** Hvileplattform mellom etasjer

**Dimensjoneringskrav (TEK17):**
- Trinnbredde (inntrinn): 250-300 mm
- Trinnhøyde (opptrinn): 150-200 mm
- Formel: 2×opptrinn + inntrinn = 610-630 mm

**Trinnformel eksempel:**
Med opptrinn 180 mm: 2×180 + inntrinn = 620
Inntrinn = 620 - 360 = 260 mm

**Trappetyper:**
- Rettløpstrapp
- Svingt trapp (kvart- eller halvsvingstrapp)
- Vindeltrapp
- Prefabrikkert trapp`,
    },
    {
      title: 'Rekkverk og sikkerhet',
      content: `## Rekkverk og sikkerhet

Rekkverk hindrer fall og gir støtte.

**Krav:**
- Høyde minimum 900 mm (1000 mm over 1 etasje)
- Håndlist 800-900 mm høyde
- Åpninger maks 100 mm (barnekrav)
- Må tåle horisontalkraft 1,5 kN/m

**Rekkverkstyper:**
- Spiler (vertikale eller horisontale)
- Glass
- Nett/wire
- Plater

**Montering:**
- Rekkverk festes i vange eller på trinn
- Stolper forankres solid
- Håndlist kontinuerlig ved svinger
- Ingen skarpe kanter`,
    },
  ],
  exercises: [
    { id: 'bygg-anlegg-vg1-35-ex-1', task: 'Beregn inntrinnet når opptrinnet er 170 mm, ved bruk av trappformelen.', solution: 'Trappformelen: 2×opptrinn + inntrinn = 610-630 mm. Med opptrinn 170 mm: 2×170 + inntrinn = 620. Inntrinn = 620 - 340 = 280 mm.' },
    { id: 'bygg-anlegg-vg1-35-ex-2', task: 'Hva er minimumshøyden for rekkverk i en toetasjes bolig?', solution: 'Minimumshøyden er 1000 mm når fallhøyden er over en etasje. Ved lavere fallhøyder er kravet 900 mm.' },
    { id: 'bygg-anlegg-vg1-35-ex-3', task: 'Hvorfor er maksimal åpning i rekkverk 100 mm?', solution: 'Maksåpning 100 mm er for å hindre at små barn kan klatre gjennom eller sette hodet fast i rekkverket. Dette er et sikkerhetskrav for å beskytte barn.' },
    { id: 'bygg-anlegg-vg1-35-ex-4', task: 'Nevn tre typer trapper.', solution: 'Trappetyper: 1) Rettløpstrapp - går rett opp uten svinger. 2) Svingt trapp - kvart- eller halvsving. 3) Vindeltrapp - spiralformet rundt sentral søyle. 4) Prefabrikkert trapp - ferdiglaget på fabrikk.' },
    { id: 'bygg-anlegg-vg1-35-ex-5', task: 'Hva er forskjellen på inntrinn og opptrinn?', solution: 'Inntrinn er den horisontale dybden på trinnet (det vi tråkker på). Opptrinn er den vertikale høyden mellom trinn (stigningen per trinn).' },
    { id: 'bygg-anlegg-vg1-35-ex-6', task: 'En trapp skal gå opp 2,7 meter. Med opptrinn 180 mm, hvor mange trinn trengs?', solution: 'Antall trinn = Totalhøyde / Opptrinn = 2700 mm / 180 mm = 15 trinn. Kontroll: 15 × 180 = 2700 mm.' },
    { id: 'bygg-anlegg-vg1-35-ex-7', task: 'Forklar hvorfor håndlisten bør være kontinuerlig ved svinger i trappen.', solution: 'Kontinuerlig håndlist gir støtte gjennom hele trappeløpet uten at brukeren må slippe taket. Dette er spesielt viktig for eldre, barn og personer med nedsatt funksjonsevne. Brudd i håndlisten kan føre til tap av balanse og fall.' },
  ],
  keyTerms: [
    { term: 'Inntrinn', definition: 'Horisontal dybde på trappetrinnet.' },
    { term: 'Opptrinn', definition: 'Vertikal høyde mellom trinn.' },
    { term: 'Vange', definition: 'Sidestykke som bærer trappetrinnene.' },
    { term: 'Repos', definition: 'Hvileplattform mellom trappeløp.' },
  ],
};

export const CHAPTER_BYGG_ANLEGG_VG1_36: TextbookChapter = {
  id: 'bygg-anlegg-vg1-36',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '36',
  title: 'Fasadestillas',
  description: 'Oppbygging og sikkerhet ved bruk av fasadestillas.',
  estimatedMinutes: 45,
  competenceGoals: ['montere og bruke arbeidsplattformer opp til 5 meter og gjennomføre risikotiltak ved arbeid i høyden'],
  sections: [
    {
      title: 'Stillastyper og komponenter',
      content: `## Stillastyper og komponenter

**Systemstillas (rammestillas):**
- Prefabrikkerte rammer
- Raskt å sette opp
- Vanligst til 8-10 meter

**Komponenter:**
- Bunnramme med justerbare føtter
- Vertikale rammer
- Horisontale stag
- Diagonalstag (kryssavstivning)
- Plattformer/dekker
- Rekkverk (hånd-, kne-, fotlist)
- Utligger ved kant mot fasade

**Fundamentering:**
- Fast, jevn grunn
- Understøttelse på bløt grunn
- Justerbare føtter i vater`,
    },
    {
      title: 'Montering og sikkerhet',
      content: `## Montering og sikkerhet

**Monteringsrekkefølge:**
1. Plasser bunnrammer, juster til vater
2. Sett opp vertikale rammer
3. Monter horisontale stag
4. Monter diagonalstag/kryss
5. Legg plattformer
6. Monter rekkverk før bruk
7. Monter adkomst (stige)

**Sikkerhetskrav:**
- Rekkverk på alle sider (1 m høyde)
- Plattformer uten farlige åpninger
- Forankring til fasade over 4 meter
- Maks avstand til fasade 30 cm
- Adgangsstige inne i stillaset

**Kontroll:**
- Daglig visuell kontroll av bruker
- Ukentlig kontroll av kompetent person
- Etter uvær eller endringer`,
    },
  ],
  exercises: [
    { id: 'bygg-anlegg-vg1-36-ex-1', task: 'Nevn de viktigste komponentene i et systemstillas.', solution: 'Bunnramme med justerbare føtter, vertikale rammer, horisontale stag, diagonalstag for avstivning, plattformer/dekker, rekkverk (hånd-, kne- og fotlist), og adkomststige.' },
    { id: 'bygg-anlegg-vg1-36-ex-2', task: 'Når må et stillas forankres til fasaden?', solution: 'Stillas over 4 meter høyde må forankres til fasaden for å hindre at det velter eller beveger seg.' },
    { id: 'bygg-anlegg-vg1-36-ex-3', task: 'Hva er maksimal avstand mellom stillas og fasade?', solution: 'Maksimal avstand er 30 cm. Større avstand øker fallrisikoen mellom stillas og bygning.' },
    { id: 'bygg-anlegg-vg1-36-ex-4', task: 'Hvor ofte skal stillas kontrolleres, og av hvem?', solution: 'Daglig visuell kontroll av bruker. Ukentlig kontroll av kompetent person. Også etter uvær, endringer eller hendelser.' },
    { id: 'bygg-anlegg-vg1-36-ex-5', task: 'Hva er funksjonen til diagonalstag i et stillas?', solution: 'Diagonalstag (kryssavstivning) gjør stillaset stivt og stabilt. Uten diagonaler kan stillaset forskyve seg sideveis og kollapse.' },
    { id: 'bygg-anlegg-vg1-36-ex-6', task: 'Beskriv kravene til rekkverk på et stillas.', solution: 'Rekkverk skal monteres på alle sider med fallfare, være minimum 1 meter høyt, og bestå av håndlist (1 m), knelist (0,5 m) og fotlist (min 15 cm) for å hindre fall av personer og materialer.' },
    { id: 'bygg-anlegg-vg1-36-ex-7', task: 'Hva må du sjekke før du begynner å bruke et stillas som allerede står montert?', solution: 'Sjekk: At stillaset er montert av kompetent person, at kontrollmerke er gyldig, at rekkverk er på plass, at plattformer er hele og sikret, at forankring er intakt, at fundamentet er stabilt, og at stigen er sikker.' },
  ],
  keyTerms: [
    { term: 'Systemstillas', definition: 'Prefabrikkert stillas med standardrammer og komponenter.' },
    { term: 'Diagonalstag', definition: 'Skrå avstivning som gir stillas stivhet.' },
    { term: 'Forankring', definition: 'Feste av stillas til bygning for stabilitet.' },
  ],
};

export const CHAPTER_BYGG_ANLEGG_VG1_37: TextbookChapter = {
  id: 'bygg-anlegg-vg1-37',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '37',
  title: 'Sprøytebetong',
  description: 'Grunnleggende om sprøytebetong og anvendelser.',
  estimatedMinutes: 40,
  competenceGoals: ['planlegge og bygge en konstruksjon'],
  sections: [
    {
      title: 'Hva er sprøytebetong',
      content: `## Hva er sprøytebetong

Sprøytebetong er betong som sprøytes på med trykk.

**Anvendelser:**
- Bergsikring i tunneler
- Fjellskjæringer
- Svømmebassenger
- Reparasjon av betong
- Arkitektoniske former

**Metoder:**

**Tørrsprøyting:**
- Tørr blanding i slange
- Vann tilsettes ved munnstykke
- Rask å mobilisere
- Mye støv

**Våtsprøyting:**
- Ferdig blandet betong
- Pumpes og sprøytes
- Bedre arbeidsmiljø
- Jevnere kvalitet`,
    },
    {
      title: 'Fiberarmering',
      content: `## Fiberarmering

Sprøytebetong armeres ofte med fiber i stedet for stålnett.

**Fibertyper:**
- Stålfiber
- Syntetisk fiber (polypropylen)
- Glassfiber

**Fordeler med fiber:**
- Raskere påføring
- Tetter sprekker
- God bestandighet
- Erstatter noe tradisjonell armering

**Tykkelse:**
Typisk 50-150 mm avhengig av formål og påkjenning.`,
    },
  ],
  exercises: [
    { id: 'bygg-anlegg-vg1-37-ex-1', task: 'Nevn tre anvendelser for sprøytebetong.', solution: 'Anvendelser: 1) Bergsikring i tunneler, 2) Sikring av fjellskjæringer, 3) Bygging av svømmebassenger, 4) Reparasjon av skadet betong, 5) Arkitektoniske former.' },
    { id: 'bygg-anlegg-vg1-37-ex-2', task: 'Hva er forskjellen på tørr- og våtsprøyting?', solution: 'Tørrsprøyting: Tørr blanding transporteres i slangen, vann tilsettes først ved munnstykket - gir mye støv men rask mobilisering. Våtsprøyting: Ferdigblandet betong pumpes og sprøytes - gir bedre arbeidsmiljø og jevnere kvalitet.' },
    { id: 'bygg-anlegg-vg1-37-ex-3', task: 'Hvorfor brukes fiberarmering i sprøytebetong?', solution: 'Fiberarmering gir raskere påføring (slipper å montere nett), tetter sprekker, gir god bestandighet, og kan erstatte tradisjonell armering i mange tilfeller. Fibrene fordeles jevnt i betongen.' },
    { id: 'bygg-anlegg-vg1-37-ex-4', task: 'Nevn tre typer fiber som brukes i sprøytebetong.', solution: 'Fibertyper: Stålfiber, syntetisk fiber (polypropylen), og glassfiber.' },
    { id: 'bygg-anlegg-vg1-37-ex-5', task: 'Hva er typisk tykkelse på sprøytebetong?', solution: 'Typisk 50-150 mm avhengig av formål og påkjenning. Tunnelsikring kan være 50-100 mm, mens bærende konstruksjoner kan kreve mer.' },
    { id: 'bygg-anlegg-vg1-37-ex-6', task: 'Hvilken metode for sprøytebetong gir best arbeidsmiljø?', solution: 'Våtsprøyting gir best arbeidsmiljø fordi betongen er ferdig blandet og avgir mindre støv under påføring.' },
    { id: 'bygg-anlegg-vg1-37-ex-7', task: 'Hvorfor brukes sprøytebetong i tunneler?', solution: 'Sprøytebetong brukes i tunneler for bergsikring - den fester seg til fjelloverflaten og hindrer at løst fjell faller ned. Den kan påføres umiddelbart etter sprengning og gir rask sikring.' },
  ],
  keyTerms: [
    { term: 'Sprøytebetong', definition: 'Betong som påføres ved å sprøytes med trykk.' },
    { term: 'Fiberarmering', definition: 'Armering med fiber blandet i betongen i stedet for stålnett.' },
  ],
};

export const CHAPTER_BYGG_ANLEGG_VG1_38: TextbookChapter = {
  id: 'bygg-anlegg-vg1-38',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '38',
  title: 'Digital byggeplass',
  description: 'Digitale verktøy og teknologi i moderne bygging.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke digitale ressurser til å beregne, måle opp og merke etter beskrivelse og tegning'],
  sections: [
    {
      title: 'Digitale verktøy',
      content: `## Digitale verktøy

Byggeplassen blir stadig mer digital.

**BIM på byggeplass:**
- 3D-modeller på nettbrett
- Kollisjonskontroll før bygging
- Informasjon om alle bygningsdeler
- Oppdaterte tegninger alltid tilgjengelig

**Digital måling:**
- Laser for avstandsmåling
- GPS/GNSS for posisjonering
- Totalstasjon for utstikking
- Droner for dokumentasjon

**Digitale sjekklister:**
- Apper for kontroll og dokumentasjon
- Automatisk lagring
- Foto direkte i sjekklisten
- Avvikshåndtering digitalt`,
    },
    {
      title: 'Fremtidens byggeplass',
      content: `## Fremtidens byggeplass

Teknologien utvikler seg raskt.

**Automatisering:**
- 3D-printing av betong
- Roboter for muring og sveising
- Autonome maskiner

**Kommunikasjon:**
- Prosjekthotell for dokumenter
- Sanntidsoppdatering
- Videokonferanser på byggeplass

**Bærekraft:**
- Sporingssystemer for materialer
- Digitale klimaregnskap
- Optimalisert logistikk`,
    },
  ],
  exercises: [
    { id: 'bygg-anlegg-vg1-38-ex-1', task: 'Nevn tre digitale verktøy som brukes på moderne byggeplasser.', solution: 'Digitale verktøy: 1) BIM-modeller på nettbrett, 2) Laser/GPS for måling og utstikking, 3) Apper for sjekklister og dokumentasjon, 4) Droner for dokumentasjon og kartlegging.' },
    { id: 'bygg-anlegg-vg1-38-ex-2', task: 'Hva er fordelen med digitale sjekklister sammenlignet med papir?', solution: 'Fordeler: Automatisk lagring og backup, foto kan legges direkte inn, lett å dele og søke, avvikshåndtering kobles direkte til sjekkpunktet, alle har tilgang til oppdatert informasjon.' },
    { id: 'bygg-anlegg-vg1-38-ex-3', task: 'Hvordan brukes droner på byggeplasser?', solution: 'Droner brukes til: Fotografering for dokumentasjon og markedsføring, kartlegging og terrengmodellering, inspeksjon av tak og vanskelig tilgjengelige områder, følge fremdrift over tid.' },
    { id: 'bygg-anlegg-vg1-38-ex-4', task: 'Hva er et prosjekthotell?', solution: 'Et prosjekthotell er en digital plattform for deling av dokumenter i byggeprosjekter. Alle aktører har tilgang til tegninger, beskrivelser og dokumentasjon på ett sted, med versjonskontroll og tilgangsstyring.' },
    { id: 'bygg-anlegg-vg1-38-ex-5', task: 'Hvordan kan BIM brukes praktisk på byggeplass?', solution: 'BIM brukes ved at 3D-modellen vises på nettbrett på byggeplass, gir tilgang til all informasjon om bygningsdeler, kollisjonskontroll før bygging, og tegninger/detaljer er alltid oppdatert.' },
    { id: 'bygg-anlegg-vg1-38-ex-6', task: 'Nevn to eksempler på automatisering som kan komme i byggebransjen.', solution: 'Eksempler på automatisering: 1) 3D-printing av betongkonstruksjoner, 2) Roboter for muring, 3) Autonome (selvkjørende) anleggsmaskiner, 4) Roboter for sveising.' },
    { id: 'bygg-anlegg-vg1-38-ex-7', task: 'Hvordan kan digitale verktøy bidra til mer bærekraftig bygging?', solution: 'Digitale verktøy bidrar til bærekraft gjennom: Sporingssystemer som dokumenterer materialenes opprinnelse og miljøavtrykk, digitale klimaregnskap for bygget, optimalisert logistikk som reduserer transport, og BIM for bedre planlegging som reduserer svinn.' },
  ],
  keyTerms: [
    { term: 'BIM', definition: 'Building Information Modeling - digital 3D-modell med all bygningsinformasjon.' },
    { term: 'Prosjekthotell', definition: 'Digital plattform for deling av dokumenter i byggeprosjekt.' },
    { term: 'GPS/GNSS', definition: 'Satellittbasert posisjoneringssystem for presis plassering.' },
  ],
};

// ============================================================================
// Eksporter kapitler 31-38
// ============================================================================

export const CHAPTERS_BYGG_ANLEGG_VG1_PART5 = [
  CHAPTER_BYGG_ANLEGG_VG1_31,
  CHAPTER_BYGG_ANLEGG_VG1_32,
  CHAPTER_BYGG_ANLEGG_VG1_33,
  CHAPTER_BYGG_ANLEGG_VG1_34,
  CHAPTER_BYGG_ANLEGG_VG1_35,
  CHAPTER_BYGG_ANLEGG_VG1_36,
  CHAPTER_BYGG_ANLEGG_VG1_37,
  CHAPTER_BYGG_ANLEGG_VG1_38,
];
