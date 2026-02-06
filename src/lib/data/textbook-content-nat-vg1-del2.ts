/**
 * Tekstbok innhold for Naturfag VG1 DEL 2
 * Seksjon 3: Universet (3.1-3.4)
 * Seksjon 4: Kjemi – stoffer og bindinger (4.1-4.5)
 *
 * Dekker LK20 kompetansemål for NAT01-04.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// SEKSJON 3: Universet
// ============================================================================

export const CHAPTER_NAT_VG1_3_1: TextbookChapter = {
  id: 'nat-vg1-3-1',
  courseId: 'nat-vg1',
  chapterNumber: '3.1',
  title: 'Big bang og universets opprinnelse',
  description: 'Lær om big bang-teorien og hvordan universet oppsto og utviklet seg.',
  estimatedMinutes: 75,
  competenceGoals: ['beskrive big bang-teorien om hvordan universet har oppstått og utviklet seg, og gjøre rede for observasjoner som støtter denne teorien'],
  content: [
    {
      id: 'nat-vg1-3-1-intro',
      type: 'text',
      content: `## Big bang - universets fødsel

Har du noen gang sett opp på nattehimmelen og lurt på hvor alt kommer fra? Stjernene, galaksene, ja selv rommet du står i - alt hadde en begynnelse. For ca. **13,8 milliarder år siden** oppsto universet i det vi kaller **big bang**. Dette var ikke en eksplosjon i rommet, men en eksplosjon AV rommet selv - en subtil men avgjørende forskjell.

**Hva skjedde egentlig?**
I begynnelsen var all materie og energi konsentrert i et ekstremt lite, varmt og tett punkt - så lite at det er umulig å forestille seg. Så begynte rommet selv å utvide seg raskt. Tenk deg en ballong som blåses opp: punkter på ballongens overflate beveger seg fra hverandre ikke fordi de reiser gjennom rommet, men fordi selve overflaten utvider seg.

**Læringsmål for dette kapittelet:**
- Forklare hva big bang var og hva det ikke var
- Beskrive tidslinjen fra big bang til i dag
- Forstå universets sammensetning
- Gjøre rede for hvordan grunnstoffene ble dannet`,
    },
    {
      id: 'nat-vg1-3-1-def-1',
      type: 'definition',
      title: 'Hva er big bang-teorien?',
      content: `**Big bang-teorien** er den vitenskapelige forklaringen på universets opprinnelse og utvikling. Den sier at universet startet fra en tilstand med ekstremt høy tetthet og temperatur, og har utvidet seg siden.

**Viktige punkter:**
- Big bang var IKKE en eksplosjon i et eksisterende rom
- Rommet og tiden OPPSTO med big bang
- Det fantes ingen "før" big bang (tiden startet da)
- Det fantes ingen "utenfor" der eksplosjonen skjedde
- Universet ekspanderer fortsatt i dag

**Singulariteten:**
Det opprinnelige punktet kalles en singularitet - et sted der våre vanlige fysikklover bryter sammen. Vi kan beskrive hva som skjedde fra 10⁻⁴³ sekunder (Planck-tiden) etter big bang, men ikke selve øyeblikket.

**Hvem oppdaget dette?**
Den belgiske presten og fysikeren Georges Lemaître foreslo teorien i 1927. Han kalte det "det kosmiske egget" eller "uratomet". Astronomen Edwin Hubble bekreftet at universet utvider seg i 1929.`,
    },
    {
      id: 'nat-vg1-3-1-ex-1',
      type: 'example',
      title: 'Ballonganalogien',
      content: `**Problem:** Hvordan kan vi forstå at rommet selv utvider seg?

**Analogi med en ballong:**
Tenk deg en ballong med prikker tegnet på overflaten. Når du blåser opp ballongen:
- Alle prikkene beveger seg fra hverandre
- Ingen prikk er i "sentrum" - alle ser ut til å være sentrum fra sitt eget perspektiv
- Prikkene beveger seg ikke på overflaten, men overflaten selv vokser

**Slik er universet:**
- Galaksene er som prikkene
- De beveger seg ikke gjennom rommet, men rommet mellom dem vokser
- Det finnes intet sentrum - fra enhver galakse ser det ut som om alle andre beveger seg bort
- Jo lenger unna en galakse er, jo raskere ser den ut til å bevege seg bort (fordi mer rom utvider seg mellom oss)

**Konklusjon:** Big bang skjedde ikke på et bestemt sted - den skjedde OVERALT samtidig, fordi hele rommet var det lille punktet.`,
    },
    {
      id: 'nat-vg1-3-1-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-1-exercise-1',
        number: '1',
        type: 'classic',
        task: 'Forklar med egne ord hva big bang var og hva det IKKE var.',
        hints: ['Big bang var ikke en eksplosjon i rommet', 'Tenk på at rommet selv ble til', 'Bruk gjerne ballonganalogien'],
        solution: `Big bang var ikke en eksplosjon i rommet, men starten på selve rommet og tiden. All materie, energi og rommet selv oppsto fra et ekstremt lite punkt og begynte å utvide seg. Det var ingen "utenfor" før big bang fordi rommet ikke eksisterte. Det var heller ingen "før" fordi tiden startet med big bang. Det er som en ballong som blåses opp - prikkene på ballongen beveger seg fra hverandre fordi overflaten vokser, ikke fordi de reiser på overflaten.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-3-1-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-1-exercise-2',
        number: '2',
        type: 'classic',
        task: 'En venn sier: "Big bang må ha skjedd et bestemt sted, for eksplosjoner skjer jo på et sted!" Hvordan vil du forklare hvorfor dette er feil?',
        hints: ['Tenk på ballonganalogien', 'Hvor på ballongens overflate skjer utvidelsen?'],
        solution: `Dette er feil fordi big bang ikke var en vanlig eksplosjon. I en vanlig eksplosjon spres materiale ut i et eksisterende rom fra et sentrum. I big bang oppsto selve rommet. Det fantes ikke noe "utenfor" der eksplosjonen kunne skje. Big bang skjedde overalt samtidig - hvert punkt i universet var det opprinnelige punktet. Det er som å spørre hvor på ballongens overflate utvidelsen skjer - svaret er overalt samtidig.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-3-1-def-2',
      type: 'definition',
      title: 'Tidslinje etter big bang',
      content: `**De første øyeblikkene - en utrolig reise:**

**10⁻⁴³ sekunder - Planck-tiden:**
Den tidligste tiden vi kan beskrive med fysikk. Universet er ufattelig lite, varmt (10³² °C) og tett. Alle de fire naturkreftene er forent.

**10⁻³⁶ sekunder - Inflasjon:**
Universet utvider seg eksponentielt raskt - fra mindre enn et atom til større enn en galakse på et øyeblikk! Dette forklarer hvorfor universet er så "flatt" og ensartet.

**10⁻⁶ sekunder - Kvarker danner partikler:**
Temperaturen synker nok til at kvarker kan kombineres til protoner og nøytroner.

**3 minutter - Nukleosyntese:**
Protoner og nøytroner fusjonerer til atomkjerner. Universet lager hydrogen (75%), helium (25%) og spor av litium. Ingen tyngre grunnstoffer ennå!

**380 000 år - Rekombinasjon:**
Temperaturen synker til ca. 3000 K. Elektroner binder seg til kjerner og danner nøytrale atomer. Universet blir gjennomsiktig - fotoner kan reise fritt. Dette lyset ser vi i dag som kosmisk bakgrunnsstråling.

**200 millioner år - De første stjernene:**
Gass samles av gravitasjon, blir tett og varm nok til å starte fusjon. De første stjernene tennes i mørket.

**400 millioner år - De første galaksene:**
Stjerner samles i grupper og danner de første galaksene.

**9 milliarder år - Solsystemet dannes:**
Vår sol og planetene dannes fra en sky av gass og støv.

**13,8 milliarder år - I dag:**
Du leser dette på en planet som kretser rundt en stjerne i en galakse med 200-400 milliarder stjerner, i et univers med 200 milliarder galakser.`,
    },
    {
      id: 'nat-vg1-3-1-ex-2',
      type: 'example',
      title: 'Å forstå de utrolige tallene',
      content: `**Problem:** Hvordan kan vi forestille oss 13,8 milliarder år?

**Løsning - Kosmisk kalender:**
La oss komprimere universets historie til ett år, der big bang skjer 1. januar kl. 00:00:

- **1. januar 00:00** - Big bang
- **14. januar** - De første stjernene tennes
- **15. mars** - Melkeveien dannes
- **31. august** - Solsystemet dannes
- **21. september** - Liv oppstår på jorda
- **17. desember** - Komplekst liv i havet
- **25. desember** - Dinosaurene dukker opp
- **30. desember** - Dinosaurene dør ut
- **31. desember 23:52** - Menneskets forfedre går oppreist
- **31. desember 23:59:46** - Hele menneskehetens skrevne historie

**Konklusjon:** Hele menneskehetens historie er bare de siste 14 sekundene av det kosmiske året! Dette viser hvor utrolig gammelt universet er.`,
    },
    {
      id: 'nat-vg1-3-1-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-1-exercise-3',
        number: '3',
        type: 'classic',
        task: 'Sett hendelsene i riktig rekkefølge fra tidligst til senest: a) De første stjernene tennes, b) Nukleosyntese (hydrogen og helium dannes), c) Universet blir gjennomsiktig, d) Kvarker danner protoner og nøytroner.',
        solution: `Riktig rekkefølge: d) Kvarker danner protoner og nøytroner (10⁻⁶ s), b) Nukleosyntese (3 min), c) Universet blir gjennomsiktig (380 000 år), a) De første stjernene tennes (200 mill. år).`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-3-1-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-1-exercise-4',
        number: '4',
        type: 'classic',
        task: 'Bruk den kosmiske kalenderen. Hvis big bang skjedde 1. januar og vi er 31. desember, omtrent når på året dannet solsystemet vårt seg?',
        hints: ['Solsystemet er ca. 4,6 milliarder år gammelt', 'Universet er 13,8 milliarder år', 'Regn ut brøkdelen'],
        solution: `Solsystemet dannet seg for ca. 4,6 milliarder år siden. Det er 13,8 - 4,6 = 9,2 milliarder år etter big bang. 9,2/13,8 ≈ 0,67 = 67% av året. 67% av 365 dager ≈ 244 dager. Dag 244 er rundt 31. august - 1. september. Så solsystemet dannet seg rundt slutten av august på den kosmiske kalenderen.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-3-1-def-3',
      type: 'definition',
      title: 'Universets sammensetning',
      content: `**Hva består universet av?**

Overraskende nok er det meste av universet usynlig for oss:

**Vanlig materie: ~5%**
Dette er alt vi kan se og føle - atomer, stjerner, planeter, gass, støv, deg og meg. Selv om dette virker som mye, utgjør det bare en liten brøkdel av universet.

**Mørk materie: ~27%**
Vi vet ikke hva dette er! Vi ser bare gravitasjonseffekten:
- Galakser roterer for fort til at synlig materie kan holde dem sammen
- Galaksehoper inneholder mer masse enn vi kan se
- Lys bøyes av usynlig masse (gravitasjonslinser)

Mørk materie sender ikke ut lys, absorberer ikke lys, og reagerer ikke med vanlig materie bortsett fra gjennom gravitasjon.

**Mørk energi: ~68%**
Enda mer mystisk! Mørk energi driver universets akselererende utvidelse. Oppdaget i 1998 da astronomer fant at fjerne supernovaer var svakere enn forventet - universet utvider seg raskere og raskere.

**Grunnstoffene fra big bang:**
Big bang produserte bare de letteste grunnstoffene:
- Hydrogen: ~75%
- Helium: ~25%
- Litium: spor

Alle tyngre grunnstoffer (karbon, oksygen, jern, gull...) ble dannet senere i stjerner!`,
    },
    {
      id: 'nat-vg1-3-1-ex-3',
      type: 'example',
      title: 'Hvordan vet vi at mørk materie finnes?',
      content: `**Problem:** Hvordan kan vi vite at noe finnes hvis vi ikke kan se det?

**Bevis 1 - Galaksers rotasjon:**
Stjerner i utkanten av galakser beveger seg like fort som stjerner nærmere sentrum. Ifølge gravitasjonslovene burde de bevege seg saktere (som planeter langt fra solen). Den eneste forklaringen er at det finnes mer masse enn vi kan se.

**Bevis 2 - Gravitasjonslinser:**
Lys fra fjerne galakser bøyes når det passerer nær galaksehoper. Bøyningen er sterkere enn den synlige massen kan forklare.

**Bevis 3 - Kosmisk bakgrunnsstråling:**
Mønstrene i bakgrunnsstrålingen passer bare med modeller som inkluderer mørk materie.

**Konklusjon:** Vi kan ikke se mørk materie direkte, men vi kan måle dens gravitasjonseffekter. Det er som å se vinden - du ser ikke luften, men du ser bladene som beveger seg.`,
    },
    {
      id: 'nat-vg1-3-1-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-1-exercise-5',
        number: '5',
        type: 'classic',
        task: 'Forklar forskjellen mellom mørk materie og mørk energi.',
        hints: ['Tenk på hva hver av dem gjør', 'Hvilken holder ting sammen? Hvilken driver dem fra hverandre?'],
        solution: `Mørk materie og mørk energi er to helt forskjellige ting:

**Mørk materie:**
- Utgjør ca. 27% av universet
- Har gravitasjon som vanlig materie
- Holder galakser og galaksehoper sammen
- Trekker ting mot hverandre

**Mørk energi:**
- Utgjør ca. 68% av universet
- Driver universets akselererende utvidelse
- Dytter ting fra hverandre
- Virker på kosmisk skala

Kort sagt: Mørk materie bremser universets utvidelse (gravitasjon), mens mørk energi akselererer den.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-3-1-summary',
      type: 'text',
      content: `## Oppsummering

**Nøkkelbegreper du skal kunne:**

- **Big bang:** Universets begynnelse for 13,8 milliarder år siden - ikke en eksplosjon i rommet, men starten på rommet og tiden selv
- **Singularitet:** Det opprinnelige punktet med uendelig tetthet
- **Inflasjon:** Den ekstremt raske utvidelsen i universets første brøkdel av et sekund
- **Nukleosyntese:** Dannelsen av hydrogen og helium i de første minuttene
- **Rekombinasjon:** Når elektroner bandt seg til kjerner og universet ble gjennomsiktig
- **Mørk materie:** Usynlig materie som vi bare kan oppdage gjennom gravitasjon (~27%)
- **Mørk energi:** Mystisk energi som driver universets akselererende utvidelse (~68%)

**Viktige tall:**
- Universets alder: 13,8 milliarder år
- Vanlig materie: 5%
- Mørk materie: 27%
- Mørk energi: 68%
- Hydrogen fra big bang: 75%
- Helium fra big bang: 25%`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-3-1-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-1-exercise-6',
        number: '6',
        type: 'classic',
        task: 'Lag en tidslinje som viser de fem viktigste hendelsene fra big bang til i dag. Forklar kort hvorfor hver hendelse var viktig.',
        hints: ['Velg hendelser som var avgjørende for universets utvikling', 'Tenk på hva som måtte skje for at vi skulle eksistere'],
        solution: `Eksempel på tidslinje:

1. **Big bang (0 s):** Rommet, tiden og all energi oppstår. Uten dette hadde ingenting eksistert.

2. **Nukleosyntese (3 min):** Hydrogen og helium dannes. Dette er råmaterialet for stjerner.

3. **Rekombinasjon (380 000 år):** Atomer dannes og universet blir gjennomsiktig. Lyset kan reise fritt, og gravitasjonen kan begynne å samle materie.

4. **De første stjernene (200 mill. år):** Stjerner begynner å lage tyngre grunnstoffer. Uten stjerner hadde vi ikke hatt karbon, oksygen eller jern.

5. **Solsystemet dannes (9,2 mrd. år):** Jorda dannes med de grunnstoffene stjerner har laget, og forholdene blir riktige for liv.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-3-1-exercise-7',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-1-exercise-7',
        number: '7',
        type: 'classic',
        task: 'Hvorfor sier vi at "vi er stjernestøv"? Forklar sammenhengen mellom big bang, stjerner og atomene i kroppen din.',
        solution: `Big bang produserte bare hydrogen og helium - de to letteste grunnstoffene. Alle tyngre grunnstoffer (karbon, oksygen, nitrogen, jern osv.) ble dannet inne i stjerner gjennom fusjon.

Når massive stjerner dør i supernovaeksplosjoner, spres disse grunnstoffene ut i rommet. Nye stjerner og planeter - inkludert jorda - dannes fra dette materialet.

Kroppen din inneholder:
- Karbon (i alle organiske molekyler) - laget i stjerner
- Oksygen (du puster det) - laget i stjerner
- Jern (i blodet) - laget i massive stjerner
- Kalsium (i skjelettet) - laget i stjerner

Bare hydrogenet (i vannet i kroppen) kommer direkte fra big bang. Alt annet er bokstavelig talt stjernestøv - atomer som ble smidd i hjertet av døende stjerner for milliarder av år siden.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_3_2: TextbookChapter = {
  id: 'nat-vg1-3-2',
  courseId: 'nat-vg1',
  chapterNumber: '3.2',
  title: 'Stjerner og deres livssyklus',
  description: 'Utforsk hvordan stjerner dannes, lever og dør.',
  estimatedMinutes: 75,
  competenceGoals: ['beskrive big bang-teorien om hvordan universet har oppstått og utviklet seg'],
  content: [
    {
      id: 'nat-vg1-3-2-intro',
      type: 'text',
      content: `## Stjernenes liv

Når du ser opp på nattehimmelen, ser du tusenvis av stjerner. Hver eneste en er en gigantisk kule av glødende gass der kjernefysiske reaksjoner frigjør enorme mengder energi. Vår sol er en helt gjennomsnittlig stjerne - verken spesielt stor eller liten, varm eller kald.

**Hva er en stjerne?**
En stjerne er et objekt der gravitasjonen presser materie så hardt sammen at kjernen blir varm nok til å starte **fusjon** - sammenslåing av lette atomkjerner til tyngre. Denne prosessen frigjør enorme mengder energi som lys og varme.

**Læringsmål for dette kapittelet:**
- Forklare hvordan stjerner dannes fra gasskyer
- Beskrive de ulike fasene i en stjernes liv
- Forstå hvordan stjernens masse bestemmer dens skjebne
- Forklare hvordan grunnstoffer dannes i stjerner`,
    },
    {
      id: 'nat-vg1-3-2-def-1',
      type: 'definition',
      title: 'Hva er fusjon?',
      content: `**Kjernefusjon** er prosessen der lette atomkjerner slås sammen til tyngre kjerner og frigjør energi.

**Hvorfor frigjøres energi?**
Når to lette kjerner fusjonerer, veier produktet litt mindre enn de opprinnelige kjernene. Denne "manglende" massen omdannes til energi ifølge Einsteins berømte formel:

**E = mc²**

Der c (lysets hastighet) er et enormt tall, så selv en liten masseforskjell gir enorme mengder energi.

**Hydrogenfusjon i solen:**
4 hydrogenkjerner (protoner) → 1 heliumkjerne + energi

Solen fusjonerer ca. 620 millioner tonn hydrogen per sekund! Den mister 4 millioner tonn masse som stråles ut som energi.

**Hvorfor skjer fusjon bare i stjerner?**
Fusjon krever:
- Ekstremt høy temperatur (>10 millioner °C)
- Høyt trykk (for å presse kjernene tett nok sammen)
- Stor masse (for å holde på materien med gravitasjon)

Bare i stjernekjerner er forholdene riktige.`,
    },
    {
      id: 'nat-vg1-3-2-ex-1',
      type: 'example',
      title: 'Solens energiproduksjon',
      content: `**Problem:** Hvor mye energi produserer solen per sekund?

**Gitt informasjon:**
- Solen mister 4 millioner tonn masse per sekund gjennom fusjon
- E = mc² der c = 3 × 10⁸ m/s

**Løsning:**
m = 4 × 10⁹ kg (4 millioner tonn)
c = 3 × 10⁸ m/s

E = mc² = 4 × 10⁹ × (3 × 10⁸)²
E = 4 × 10⁹ × 9 × 10¹⁶
E = 3,6 × 10²⁶ joule per sekund (watt)

**Perspektiv:**
Dette tilsvarer 100 milliarder atombomber per sekund! Solen har gjort dette i 4,6 milliarder år og vil fortsette i ca. 5 milliarder år til.`,
    },
    {
      id: 'nat-vg1-3-2-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-2-exercise-1',
        number: '1',
        type: 'classic',
        task: 'Forklar med egne ord hva fusjon er og hvorfor det bare skjer i stjernekjerner.',
        hints: ['Tenk på hva som kreves for at atomkjerner skal smelte sammen', 'Hvorfor er temperatur og trykk viktig?'],
        solution: `Fusjon er prosessen der lette atomkjerner slås sammen til tyngre kjerner. Dette krever ekstremt høy temperatur (over 10 millioner grader) og høyt trykk. Atomkjerner har positiv ladning og frastøter hverandre. For å overvinne denne frastøtningen må kjernene bevege seg ekstremt fort (høy temperatur) og presses tett sammen (høyt trykk). Bare i stjernekjerner, der gravitasjonen komprimerer enorme mengder gass, er forholdene riktige for fusjon.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-3-2-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-2-exercise-2',
        number: '2',
        type: 'classic',
        task: 'Solen mister 4 millioner tonn masse per sekund. Hvorfor blir den ikke merkbart mindre?',
        hints: ['Hvor mye veier solen totalt?', 'Beregn hvor stor andel dette er'],
        solution: `Solens masse er ca. 2 × 10³⁰ kg. Massetapet er 4 × 10⁹ kg per sekund. På ett år (ca. 3 × 10⁷ sekunder) mister solen ca. 1,2 × 10¹⁷ kg. Dette høres mye ut, men er bare 6 × 10⁻¹⁴ (0,000000000006%) av solens masse per år. Selv over 5 milliarder år vil solen bare miste ca. 0,03% av massen sin. Solen er rett og slett så enormt stor at massetapet er ubetydelig.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-3-2-def-2',
      type: 'definition',
      title: 'Stjernens fødsel - fra gasssky til protostjerne',
      content: `**Trinn 1: Gasskyen (nebula)**
Rommet mellom stjernene inneholder tynne skyer av gass og støv, hovedsakelig hydrogen og helium. Disse skyene kan være lysår i diameter.

**Trinn 2: Kollaps**
Noe utløser at skyen begynner å trekke seg sammen under egen gravitasjon:
- Sjokkbølger fra nærliggende supernovaer
- Gravitasjonspåvirkning fra passerende stjerner
- Tetthetsvariasjoner i skyen

**Trinn 3: Fragmentering**
Skyen deler seg i mindre klumper. Hver klump kan bli en stjerne.

**Trinn 4: Protostjerne**
Gassen i midten blir tettere og varmere. En protostjerne dannes - den er varm, men fusjon har ikke startet ennå.

**Trinn 5: Tenning**
Når kjernetemperaturen når ca. 10 millioner °C, starter hydrogenfusjon. En stjerne er født!

**Tidsskala:** Denne prosessen tar typisk 10-100 millioner år, avhengig av massen.`,
    },
    {
      id: 'nat-vg1-3-2-ex-2',
      type: 'example',
      title: 'Ørnetåken - en stjernefødselsregion',
      content: `**Ørnetåken (M16)** er et berømt eksempel på en region der stjerner dannes aktivt.

**Fakta om Ørnetåken:**
- Avstand: ca. 7000 lysår fra jorda
- Inneholder "Skapelsens søyler" - gigantiske gass-søyler der nye stjerner dannes
- Søylene er opptil 5 lysår høye
- Tett gass beskyttes av omgivende gass mens den kollapser

**Hva vi observerer:**
- Lyse, varme unge stjerner som nylig har tent
- Mørke områder der gass er for tett til at lys slipper gjennom
- Protostjerner som ennå ikke har startet fusjon
- Stråling fra unge stjerner som "spiser" bort gasskyen

**Konklusjon:** Ved å studere slike regioner kan vi se stjernedannelse i aksjon og forstå hvordan vår egen sol en gang ble til.`,
    },
    {
      id: 'nat-vg1-3-2-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-2-exercise-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv de fem trinnene i stjernedannelse, fra gasssky til ferdig stjerne.',
        solution: `1. **Gasssky:** Rommet inneholder tynne skyer av hydrogen og helium.

2. **Kollaps:** Noe (f.eks. en supernova) får skyen til å begynne å trekke seg sammen under egen gravitasjon.

3. **Fragmentering:** Skyen deler seg i mindre klumper som hver kan bli en stjerne.

4. **Protostjerne:** Sentrum av klumpen blir tett og varm, men fusjon har ikke startet.

5. **Tenning:** Når kjernetemperaturen når 10 millioner grader, starter hydrogenfusjon og en stjerne er født.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-3-2-def-3',
      type: 'definition',
      title: 'Stjernens livsfaser',
      content: `**1. Hovedserien (det meste av livet)**
- Stabil fase der hydrogen fusjonerer til helium i kjernen
- Varer det meste av stjernens liv (90%)
- Solen har vært på hovedserien i 4,6 milliarder år
- Likevekt mellom gravitasjon (innover) og strålingstrykk (utover)

**2. Rød kjempe/superkjempe**
- Hydrogen i kjernen brukt opp
- Kjernen trekker seg sammen og blir varmere
- Helium begynner å fusjonere til karbon
- Ytre lag utvider seg og kjøles ned (rød farge)
- Stjernens radius kan øke 100-1000 ganger

**3. Døden (avhenger av masse)**

*Små stjerner (< 8 solmasser):*
- Ytre lag blåses av som planetarisk tåke
- Kjernen blir en hvit dverg (kompakt, liten)
- Hvit dverg kjøles gradvis ned til svart dverg

*Store stjerner (> 8 solmasser):*
- Fusjon fortsetter til jern
- Kjernen kollapser katastrofalt
- Supernova-eksplosjon
- Etterlater nøytronstjerne eller svart hull`,
    },
    {
      id: 'nat-vg1-3-2-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-2-exercise-4',
        number: '4',
        type: 'classic',
        task: 'En stjerne har 10 ganger solens masse. Vil den leve lenger eller kortere enn solen? Forklar.',
        hints: ['Massive stjerner har mer drivstoff, men...', 'Tenk på energiproduksjon og forbruk', 'Energiproduksjonen øker med massen opphøyd i ca. 3,5'],
        solution: `Kortere! Selv om en stjerne med 10 solmasser har 10 ganger mer drivstoff, bruker den det mye raskere. Energiproduksjonen øker med massen opphøyd i ca. 3,5, så en stjerne med 10 solmasser produserer 10^3,5 ≈ 3000 ganger mer energi per sekund. Den bruker opp drivstoffet ca. 300 ganger raskere. Solen lever ca. 10 milliarder år på hovedserien, mens en stjerne med 10 solmasser lever kanskje bare 30 millioner år - 300 ganger kortere.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-3-2-def-4',
      type: 'definition',
      title: 'Nukleosyntese - grunnstoffenes fødested',
      content: `**Hva lages i stjerner?**

Stjerner er universets "kjemiske fabrikker" som lager nye grunnstoffer gjennom fusjon:

**Hydrogenfusjon → Helium** (alle stjerner på hovedserien)
4 H → He + energi

**Heliumfusjon → Karbon** (røde kjemper)
3 He → C + energi
(Trippel-alfa-prosessen)

**Videre fusjon i massive stjerner:**
C → O → Ne → Mg → Si → Fe

**Hvorfor stopper det ved jern?**
Jern har den mest stabile kjernen. Fusjon til tyngre grunnstoffer krever energi i stedet for å frigjøre den.

**Grunnstoffer tyngre enn jern:**
Dannes i supernovaeksplosjoner! Den enorme energien i eksplosjonen driver fusjon til gull, uran og andre tunge elementer.

**Vi er stjernestøv:**
Karbonet i cellene dine, oksygenet du puster, jernet i blodet, kalsiumet i skjelettet - alt ble laget inne i stjerner som døde før solen ble født.`,
    },
    {
      id: 'nat-vg1-3-2-ex-3',
      type: 'example',
      title: 'Hvor kommer atomene i kroppen fra?',
      content: `**Problem:** Hvor ble atomene i kroppen din dannet?

**Løsning - opprinnelsen til hvert grunnstoff:**

**Hydrogen (10% av kroppen):**
- Fra big bang
- Det eneste grunnstoffet som IKKE kom fra stjerner

**Oksygen (65% av kroppen):**
- Laget i massive stjerner
- Spredt ut i supernovaeksplosjoner

**Karbon (18% av kroppen):**
- Laget i røde kjemper (heliumfusjon)
- Grunnlaget for alt organisk liv

**Nitrogen (3% av kroppen):**
- Laget i massive stjerner

**Kalsium, fosfor, kalium (bein, tenner, nerversystem):**
- Laget i massive stjerner

**Jern (i blodet):**
- Laget i kjernene til de mest massive stjernene
- Siste trinn før supernova

**Konklusjon:** Du er bokstavelig talt laget av stjernestøv. Atomene i kroppen din er milliarder av år gamle og har en gang vært inne i stjernekjerner.`,
    },
    {
      id: 'nat-vg1-3-2-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-2-exercise-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hvorfor grunnstoffer tyngre enn jern bare kan dannes i supernovaer.',
        hints: ['Tenk på energi i fusjon', 'Hva er spesielt med jern?'],
        solution: `Jern har den mest stabile atomkjernen av alle grunnstoffer. For alle grunnstoffer lettere enn jern frigjør fusjon energi - kjernen etter fusjon er mer stabil. Men for å fusjonere jern til tyngre grunnstoffer må man tilføre energi - prosessen er endoterm.

I en vanlig stjernekjerne er det ikke nok energi til dette. Men i det korte øyeblikket en supernova eksploderer, frigjøres så mye energi at fusjon til tunge grunnstoffer (gull, uran, osv.) blir mulig. Derfor er disse grunnstoffene så sjeldne - de dannes bare i supernovaeksplosjoner.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-3-2-summary',
      type: 'text',
      content: `## Oppsummering

**Nøkkelbegreper du skal kunne:**

- **Fusjon:** Sammenslåing av lette atomkjerner til tyngre, frigjør energi
- **Protostjerne:** Tidlig fase før fusjon har startet
- **Hovedserien:** Stabil fase med hydrogenfusjon (90% av stjernens liv)
- **Rød kjempe:** Stjerne som har brukt opp hydrogen, utvider seg
- **Hvit dverg:** Kompakt rest etter liten stjernes død
- **Supernova:** Eksplosiv død av massiv stjerne
- **Nøytronstjerne/svart hull:** Rester etter supernova
- **Nukleosyntese:** Dannelse av grunnstoffer i stjerner

**Viktige sammenhenger:**
- Masse bestemmer levetid: Stor masse = kort liv
- Masse bestemmer skjebne: Liten → hvit dverg, stor → supernova
- Alle grunnstoffer tyngre enn hydrogen/helium kommer fra stjerner
- Grunnstoffer tyngre enn jern dannes i supernovaer`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-3-2-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-2-exercise-6',
        number: '6',
        type: 'classic',
        task: 'Tegn og beskriv livssyklusen til en stjerne med omtrent solens masse, fra gasssky til sluttstadium.',
        hints: ['Start med gasskyen', 'Inkluder alle hovedfasene', 'Hva blir sluttresultatet?'],
        solution: `Livssyklus for en solliknende stjerne:

1. **Gasssky/Nebula:** Hydrogen- og heliumsky i rommet
   ↓ (gravitasjonskollaps over millioner av år)
2. **Protostjerne:** Varm, kompakt gasskule, ingen fusjon ennå
   ↓ (kjernen når 10 mill. °C)
3. **Hovedserien:** Stabil stjerne med hydrogenfusjon, varer ca. 10 mrd. år
   ↓ (hydrogen i kjernen brukt opp)
4. **Rød kjempe:** Heliumfusjon starter, ytre lag utvider seg enormt
   ↓ (ytre lag blåses av)
5. **Planetarisk tåke + hvit dverg:** Vakker gassboble med kompakt kjerne i midten
   ↓ (kjøles ned over milliarder av år)
6. **Svart dverg:** Kald, mørk rest (universet er ikke gammelt nok til at noen finnes ennå)`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-3-2-exercise-7',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-2-exercise-7',
        number: '7',
        type: 'classic',
        task: 'Sammenlign skjebnen til en stjerne med 1 solmasse og en stjerne med 20 solmasser. Lag en tabell som viser likheter og forskjeller.',
        solution: `| Egenskap | 1 solmasse | 20 solmasser |
|----------|------------|--------------|
| Levetid på hovedserien | Ca. 10 mrd. år | Ca. 10 mill. år |
| Kjempefase | Rød kjempe | Rød superkjempe |
| Størrelse som kjempe | ~100 × solens radius | ~1000 × solens radius |
| Tyngste grunnstoff laget | Karbon, oksygen | Opp til jern |
| Død | Rolig, ytre lag blåses av | Voldsom supernova |
| Sluttprodukt | Hvit dverg | Nøytronstjerne eller svart hull |
| Bidrag til universet | Karbon, oksygen spredt | Alle grunnstoffer opp til uran spredt |`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_3_3: TextbookChapter = {
  id: 'nat-vg1-3-3',
  courseId: 'nat-vg1',
  chapterNumber: '3.3',
  title: 'Galakser og universets struktur',
  description: 'Lær om galakser, galaksehoper og universets storskalastruktur.',
  estimatedMinutes: 70,
  competenceGoals: ['beskrive big bang-teorien om hvordan universet har oppstått og utviklet seg'],
  content: [
    {
      id: 'nat-vg1-3-3-intro',
      type: 'text',
      content: `## Galakser - stjernebyer i rommet

Når du ser opp på en klar, mørk nattehimmel langt fra byens lys, kan du se et svakt lysende bånd som strekker seg over himmelen. Dette er **Melkeveien** - vår egen galakse sett fra innsiden. Men Melkeveien er bare én av anslagsvis **200 milliarder galakser** i det observerbare universet!

**Hva er en galakse?**
En galakse er en enorm samling av stjerner, gass, støv og mørk materie holdt sammen av gravitasjon. Galakser er som "øyer" av materie i det enorme, nesten tomme rommet mellom dem.

**Vår galakse - Melkeveien:**
- Ca. 200-400 milliarder stjerner
- Diameter: ~100 000 lysår
- Spiralformet med flere armer
- Solen ligger 26 000 lysår fra sentrum
- Det tar solen ca. 230 millioner år å gå én gang rundt galaksen

**Læringsmål for dette kapittelet:**
- Beskrive de ulike typene galakser
- Forstå universets hierarkiske struktur
- Beherske avstandsmål i universet
- Forklare hva det kosmiske vevet er`,
    },
    {
      id: 'nat-vg1-3-3-def-1',
      type: 'definition',
      title: 'Lysår - universets meterstokk',
      content: `**Hva er et lysår?**
Et lysår er avstanden lys reiser på ett år. Det er en avstandsenhet, ikke en tidsenhet!

**Lysets hastighet:**
c = 299 792 km/s ≈ 300 000 km/s

**Beregning av ett lysår:**
1 lysår = lysets hastighet × tid på ett år
= 300 000 km/s × 60 × 60 × 24 × 365 s
= 9,46 × 10¹² km
≈ **9,5 billioner kilometer**

**Hvorfor bruker vi lysår?**
Vanlige enheter blir upraktiske:
- Avstand til nærmeste stjerne: 40 000 000 000 000 km
- Eller enkelt: 4,2 lysår

**Andre avstander i lysår:**
- Jorden til månen: 1,3 lyssekunder
- Jorden til solen: 8,3 lysminutter
- Til nærmeste stjerne (Proxima Centauri): 4,2 lysår
- Melkeveiens diameter: 100 000 lysår
- Til Andromeda-galaksen: 2,5 millioner lysår`,
    },
    {
      id: 'nat-vg1-3-3-ex-1',
      type: 'example',
      title: 'Beregne avstander med lysår',
      content: `**Problem:** Lys beveger seg med 300 000 km/s. Hvor lang tid tar det lyset å reise fra solen til jorda (avstand: 150 millioner km)?

**Løsning:**
Tid = avstand / hastighet
Tid = 150 000 000 km / 300 000 km/s
Tid = 500 sekunder
Tid = 8 minutter og 20 sekunder

**Konsekvens:** Når du ser på solen, ser du den slik den var for 8 minutter siden! Hvis solen plutselig slukket, ville vi ikke vite det før om 8 minutter.

**Utvidelse - å se bakover i tid:**
Jo lenger bort vi ser, jo lenger tilbake i tid ser vi:
- Månens lys er 1,3 sekunder gammelt
- Jupiters lys er ca. 35-50 minutter gammelt
- Lyset fra Proxima Centauri er 4,2 år gammelt
- Lyset fra Andromeda er 2,5 millioner år gammelt

Når vi ser på Andromeda, ser vi den slik den var da menneskets forfedre nettopp hadde begynt å gå oppreist!`,
    },
    {
      id: 'nat-vg1-3-3-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-3-exercise-1',
        number: '1',
        type: 'classic',
        task: 'Lys beveger seg med 300 000 km/s. Hvor lang tid tar det lyset å reise fra solen til jorda (avstand: 150 millioner km)?',
        solution: `Tid = avstand / hastighet = 150 000 000 km / 300 000 km/s = 500 sekunder ≈ 8,3 minutter

Lyset fra solen bruker altså ca. 8 minutter og 20 sekunder på å nå oss.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-3-3-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-3-exercise-2',
        number: '2',
        type: 'classic',
        task: 'Proxima Centauri er den nærmeste stjernen til solen, 4,2 lysår unna. Hvor mange kilometer er dette?',
        hints: ['1 lysår = 9,5 × 10¹² km', 'Multipliser antall lysår med kilometer per lysår'],
        solution: `Avstand = 4,2 lysår × 9,5 × 10¹² km/lysår = 4,0 × 10¹³ km = 40 billioner kilometer

Dette er så langt at selv med vår raskeste romsonde (ca. 60 000 km/t) ville reisen ta over 70 000 år!`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-3-3-def-2',
      type: 'definition',
      title: 'Galaksetyper',
      content: `Galakser kommer i flere hovedformer, klassifisert etter utseende:

**Spiralgalakser (ca. 70% av alle galakser):**
- Flate skiver med spiralarmer som vinder seg utover
- Sentral bule (bulge) med eldre stjerner
- Aktiv stjernedannelse i armene (blå, unge stjerner)
- Inneholder mye gass og støv
- Eksempel: Melkeveien, Andromeda (M31)
- Diameter: 50 000 - 200 000 lysår

**Elliptiske galakser (ca. 20%):**
- Kuleformede til avlange (elliptiske)
- Hovedsakelig gamle, røde stjerner
- Lite gass og støv = lite stjernedannelse
- Fra dvergelliptiske til gigantiske (større enn spiralgalakser)
- Dannet trolig fra galaksekollisjoner

**Irregulære galakser (ca. 10%):**
- Ingen bestemt form eller struktur
- Ofte forstyrret av gravitasjonen fra nærliggende galakser
- Aktiv stjernedannelse
- Eksempel: De magellanske skyene (synlige fra sørlige halvkule)

**Linseformede galakser (S0):**
- Mellomform mellom spiral og elliptisk
- Skive uten tydelige spiralarmer
- Lite gass og støv`,
    },
    {
      id: 'nat-vg1-3-3-ex-2',
      type: 'example',
      title: 'Melkeveien sett utenfra',
      content: `**Problem:** Hvordan ville Melkeveien se ut hvis vi kunne se den utenfra?

**Beskrivelse:**
Melkeveien er en **stavspiralgalakse** - en spiralgalakse med en sentral "stav" av stjerner.

**Sett ovenfra:**
- Fire hovedarmer som vinder seg utover fra sentrum
- Sentral stav som strekker seg gjennom kjernen
- Solen ligger i en mindre arm kalt Orion-armen
- Armene inneholder unge, blå stjerner og rosa stjernefødselsregioner
- Mellom armene: hovedsakelig eldre, gule stjerner

**Sett fra siden:**
- Tynn skive, ca. 1000 lysår tykk
- Sentral bule (bulge) som stikker ut på begge sider
- Omgitt av en sfærisk halo av eldre stjerner og kulehoper

**Dimensjoner:**
- Diameter: ca. 100 000 lysår
- Tykkelse av skiven: ca. 1000 lysår
- Sentral bule: ca. 10 000 lysår i diameter

**Solen:**
- 26 000 lysår fra sentrum
- Bruker 230 millioner år på én omdreining
- Har fullført ca. 20 omdreninger siden den ble dannet`,
    },
    {
      id: 'nat-vg1-3-3-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-3-exercise-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv de tre hovedtypene galakser og gi et eksempel på hver.',
        solution: `**Spiralgalakser:**
- Flate skiver med spiralarmer
- Aktiv stjernedannelse i armene
- Inneholder mye gass og støv
- Eksempel: Melkeveien, Andromeda

**Elliptiske galakser:**
- Kule- eller ellipseformede
- Gamle, røde stjerner dominerer
- Lite gass og støv, lite stjernedannelse
- Eksempel: M87 i Virgohopen

**Irregulære galakser:**
- Ingen bestemt form
- Ofte påvirket av andre galakser
- Varierende stjernedannelse
- Eksempel: Den store magellanske sky`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-3-3-def-3',
      type: 'definition',
      title: 'Universets storskalastruktur',
      content: `Universet har en hierarkisk struktur der mindre enheter bygger opp større:

**1. Stjerner**
Individuelle stjerner, ofte i systemer med flere stjerner.

**2. Galakser**
Milliarder av stjerner samlet. Diameter: tusenvis til hundretusenvis av lysår.

**3. Galaksegrupper**
Små samlinger av galakser (3-50 stk) holdt sammen av gravitasjon.
- Den lokale gruppen: Melkeveien, Andromeda, ca. 80 mindre galakser
- Diameter: 5-10 millioner lysår

**4. Galaksehoper**
Hundrevis til tusenvis av galakser.
- Virgohopen: ca. 1500 galakser, 65 millioner lysår unna
- Diameter: 10-30 millioner lysår

**5. Superhoper**
Samlinger av galaksehoper.
- Laniakea (vår superhop): ca. 100 000 galakser
- Diameter: 500 millioner lysår

**6. Filamenter og det kosmiske vevet**
Superhopene danner lange filamenter (tråder) med enorme tomrom mellom.
Ligner et svamplignende nettverk.`,
    },
    {
      id: 'nat-vg1-3-3-ex-3',
      type: 'example',
      title: 'Det kosmiske vevet',
      content: `**Problem:** Hvordan er galaksene fordelt i universet?

**Beskrivelse:**
Galaksene er IKKE jevnt fordelt i rommet. De danner et nettverk som ligner et tredimensjonalt edderkoppnett eller svamp.

**Strukturen:**
- **Filamenter:** Lange tråder av galakser som strekker seg hundrevis av millioner lysår
- **Knuter:** Der filamenter møtes, finner vi de største galaksehopene
- **Voids (tomrom):** Enorme, nesten tomme regioner mellom filamentene
  - Typisk diameter: 100-300 millioner lysår
  - Ikke helt tomme, men inneholder svært få galakser

**Hvordan vet vi dette?**
Store kartleggingsprosjekter har målt posisjoner og avstander til millioner av galakser:
- Sloan Digital Sky Survey (SDSS)
- 2dF Galaxy Redshift Survey

**Opprinnelse:**
Denne strukturen stammer fra små tetthetsvariasjoner i det tidlige universet. Områder med litt mer materie tiltrakk mer materie over tid og ble til filamenter, mens områder med mindre materie ble til tomrom.`,
    },
    {
      id: 'nat-vg1-3-3-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-3-exercise-4',
        number: '4',
        type: 'classic',
        task: 'Sett disse strukturene i rekkefølge fra minst til størst: galaksehop, stjerne, galakse, galaksegruppe, superhop.',
        solution: `Fra minst til størst:

1. **Stjerne** - f.eks. solen (diameter: 1,4 mill. km)
2. **Galakse** - f.eks. Melkeveien (100 000 lysår)
3. **Galaksegruppe** - f.eks. Den lokale gruppen (5-10 mill. lysår)
4. **Galaksehop** - f.eks. Virgohopen (10-30 mill. lysår)
5. **Superhop** - f.eks. Laniakea (500 mill. lysår)`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-3-3-summary',
      type: 'text',
      content: `## Oppsummering

**Nøkkelbegreper du skal kunne:**

- **Lysår:** Avstanden lys reiser på ett år (~9,5 billioner km)
- **Galakse:** Samling av milliarder stjerner, gass, støv og mørk materie
- **Spiralgalakse:** Flat skive med spiralarmer, aktiv stjernedannelse
- **Elliptisk galakse:** Kuleformet, gamle stjerner, lite stjernedannelse
- **Irregulær galakse:** Ingen bestemt form
- **Galaksegruppe:** 3-50 galakser sammen
- **Galaksehop:** Hundrevis til tusenvis av galakser
- **Superhop:** Samling av galaksehoper
- **Kosmisk vev:** Nettverksstrukturen av filamenter og tomrom

**Viktige tall:**
- Melkeveiens diameter: 100 000 lysår
- Antall stjerner i Melkeveien: 200-400 milliarder
- Solens avstand fra sentrum: 26 000 lysår
- Antall galakser i observerbart univers: ~200 milliarder
- Avstand til Andromeda: 2,5 millioner lysår`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-3-3-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-3-exercise-5',
        number: '5',
        type: 'classic',
        task: 'Andromeda-galaksen er 2,5 millioner lysår unna. Når vi ser på den med teleskop i dag, hvor gammelt er lyset vi ser? Hva skjedde på jorda da dette lyset startet reisen?',
        hints: ['Lyset bruker 2,5 millioner år på reisen', 'Tenk på menneskets utvikling'],
        solution: `Lyset vi ser fra Andromeda i dag er 2,5 millioner år gammelt. Det startet reisen sin da våre forfedre Homo habilis nettopp hadde begynt å bruke enkle steinredskaper i Afrika. Dinosaurene var allerede utryddet for 63 millioner år siden, men moderne mennesker (Homo sapiens) eksisterte ikke ennå - de dukket opp for ca. 300 000 år siden.

Dette illustrerer et fascinerende poeng: Når vi ser ut i rommet, ser vi bakover i tid. Jo lenger bort vi ser, jo lenger tilbake i tid ser vi.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-3-3-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-3-exercise-6',
        number: '6',
        type: 'classic',
        task: 'Forklar hvorfor vi sier at universet har en "kosmisk vev"-struktur. Beskriv hva filamenter og tomrom er.',
        solution: `Universet har en struktur som ligner et tredimensjonalt nettverk eller svamp, kalt det "kosmiske vevet":

**Filamenter:**
- Lange "tråder" av galakser og mørk materie
- Strekker seg over hundrevis av millioner lysår
- Inneholder galakser, galaksegrupper og galaksehoper
- Der flere filamenter møtes, finner vi de største konsentrasjonene av galakser

**Tomrom (voids):**
- Enorme, nesten tomme regioner mellom filamentene
- Typisk diameter: 100-300 millioner lysår
- Inneholder svært få galakser (men ikke helt tomme)

**Opprinnelse:**
Strukturen kommer fra små tetthetsvariasjoner like etter big bang. Områder med litt mer materie tiltrakk mer materie over tid (gravitasjon), mens områder med mindre materie ble mer og mer tomme.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_3_4: TextbookChapter = {
  id: 'nat-vg1-3-4',
  courseId: 'nat-vg1',
  chapterNumber: '3.4',
  title: 'Observasjoner som støtter big bang',
  description: 'Gjør rede for de viktigste observasjonene som støtter big bang-teorien.',
  estimatedMinutes: 75,
  competenceGoals: ['beskrive big bang-teorien om hvordan universet har oppstått og utviklet seg, og gjøre rede for observasjoner som støtter denne teorien'],
  content: [
    {
      id: 'nat-vg1-3-4-intro',
      type: 'text',
      content: `## Bevisene for big bang

Big bang er ikke bare en idé eller filosofisk spekulasjon - det er en **vitenskapelig teori** støttet av mange uavhengige observasjoner. En god vitenskapelig teori gjør forutsigelser som kan testes, og big bang-teorien har bestått alle tester med glans.

**Hva gjør en teori vitenskapelig?**
- Den kan testes med observasjoner
- Den gjør forutsigelser
- Den kan i prinsippet motbevises
- Uavhengige observasjoner peker i samme retning

**De tre hovedbevisene for big bang:**
1. Universets utvidelse (Hubbles oppdagelse)
2. Kosmisk bakgrunnsstråling
3. Grunnstoffenes forekomst

**Læringsmål for dette kapittelet:**
- Forklare rødforskyvning og Hubbles lov
- Beskrive kosmisk bakgrunnsstråling og dens betydning
- Forklare hvordan grunnstoffenes forekomst støtter big bang
- Forstå hva som gjør big bang til en vitenskapelig teori`,
    },
    {
      id: 'nat-vg1-3-4-def-1',
      type: 'definition',
      title: 'Bevis 1: Universets utvidelse',
      content: `**Hubbles oppdagelse (1929):**
Den amerikanske astronomen Edwin Hubble oppdaget noe oppsiktsvekkende: Fjerne galakser beveger seg bort fra oss, og jo lenger unna de er, jo raskere beveger de seg bort!

**Rødforskyvning - hva er det?**
Når en lyskilde beveger seg bort fra oss, strekkes lysbølgene til lengre bølgelengder (som lyd fra en ambulanse som kjører bort fra deg blir dypere). Lengre bølgelengder betyr rødere lys.

For galakser er det ikke bare bevegelse gjennom rommet - selve rommet mellom oss og galaksen utvider seg og strekker lyset.

**Hubbles lov:**
v = H₀ × d

- v = hastigheten galaksen beveger seg bort (km/s)
- d = avstanden til galaksen
- H₀ = Hubble-konstanten (~70 km/s per megaparsec)

**Hva betyr dette?**
En galakse dobbelt så langt unna beveger seg dobbelt så fort bort. Trippelt så langt = trippelt så fort. Dette betyr at rommet selv utvider seg jevnt overalt.

**Konsekvensen:**
Hvis vi "spoler filmen tilbake", var universet mindre og tettere i fortiden. Langt nok tilbake var alt samlet i ett punkt - big bang!`,
    },
    {
      id: 'nat-vg1-3-4-ex-1',
      type: 'example',
      title: 'Å forstå rødforskyvning med Doppler-effekten',
      content: `**Problem:** Hvordan kan vi forklare rødforskyvning med hverdagseksempler?

**Doppler-effekten - lyd:**
Tenk på en ambulanse som kjører forbi:
- Når den kommer mot deg: Lydbølgene komprimeres → høyere tone
- Når den kjører bort: Lydbølgene strekkes → lavere tone

**Doppler-effekten - lys:**
Det samme skjer med lys:
- Lyskilde beveger seg mot oss: Kortere bølgelengder → blåforskyvning
- Lyskilde beveger seg fra oss: Lengre bølgelengder → rødforskyvning

**Kosmologisk rødforskyvning:**
For fjerne galakser er det enda mer dramatisk. Det er ikke bare galaksen som beveger seg - selve rommet mellom oss utvider seg og strekker lyset!

Jo lenger lyset reiser, jo mer strekkes det. Derfor: Jo fjernere galakse, jo større rødforskyvning.

**Måling:**
Vi måler rødforskyvning ved å se på spektrallinjer - lys fra spesifikke grunnstoffer i galaksen. Linjene forskyves mot rødt sammenlignet med labmålinger.`,
    },
    {
      id: 'nat-vg1-3-4-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-4-exercise-1',
        number: '1',
        type: 'classic',
        task: 'Forklar med egne ord hvordan rødforskyvningen av galakselys støtter big bang-teorien.',
        hints: ['Tenk på hva rødforskyvning betyr', 'Hva betyr det at alle galakser beveger seg bort fra oss?', 'Hva betyr det at fjernere galakser beveger seg raskere?'],
        solution: `Rødforskyvning viser at lyset fra fjerne galakser har blitt strukket til lengre (rødere) bølgelengder. Dette skjer fordi rommet mellom oss og galaksene utvider seg.

Hubble oppdaget at jo lenger unna en galakse er, jo mer rødforskjøvet er lyset, og jo raskere beveger den seg bort. Dette betyr at universet utvider seg jevnt i alle retninger.

Hvis vi "spoler tilbake", må universet ha vært mindre og tettere i fortiden. Jo lenger tilbake vi går, jo mindre og tettere. For ca. 13,8 milliarder år siden må alt ha vært samlet i ett punkt - dette var big bang.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-3-4-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-4-exercise-2',
        number: '2',
        type: 'classic',
        task: 'En galakse har en rødforskyvning som tilsvarer en hastighet på 7000 km/s bort fra oss. Bruk Hubbles lov (H₀ = 70 km/s per Mpc) til å finne avstanden til galaksen. (1 Mpc = 3,26 millioner lysår)',
        hints: ['Hubbles lov: v = H₀ × d', 'Løs for d', 'Omregn til lysår'],
        solution: `Hubbles lov: v = H₀ × d

Løser for d:
d = v / H₀ = 7000 km/s / 70 km/s/Mpc = 100 Mpc

Omregning til lysår:
100 Mpc × 3,26 mill. lysår/Mpc = 326 millioner lysår

Galaksen er ca. 326 millioner lysår unna.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-3-4-def-2',
      type: 'definition',
      title: 'Bevis 2: Kosmisk bakgrunnsstråling (CMB)',
      content: `**Hva er kosmisk bakgrunnsstråling?**
Mikrobølgestråling som kommer fra alle retninger i rommet med en temperatur på nøyaktig 2,725 K (-270,4°C). Det er det eldste lyset i universet!

**Opprinnelsen - 380 000 år etter big bang:**
I de første 380 000 årene var universet så varmt at elektroner ikke kunne binde seg til atomkjerner. Universet var et tett plasma som lys ikke kunne trenge gjennom - det var ugjennomsiktig som tett tåke.

Da temperaturen sank til ca. 3000 K, kunne elektroner endelig binde seg til kjerner og danne nøytrale atomer. Plutselig kunne lyset bevege seg fritt - universet ble gjennomsiktig!

**Hvor er dette lyset nå?**
Det opprinnelige lyset hadde en temperatur på ca. 3000 K (oransje-rødt). Men rommet har utvidet seg ca. 1100 ganger siden da, og strekket lyset til mikrobølger med temperatur 2,7 K.

**Oppdagelsen (1965):**
Arno Penzias og Robert Wilson oppdaget dette tilfeldig mens de testet en radiomottaker. De trodde først det var støy fra dueekskrementer i antennen! De fikk Nobelprisen i 1978.

**Betydning:**
CMB er direkte observasjon av det tidlige universet - et "babybilde" av kosmos da det var bare 380 000 år gammelt.`,
    },
    {
      id: 'nat-vg1-3-4-ex-2',
      type: 'example',
      title: 'Variasjoner i bakgrunnsstrålingen',
      content: `**Problem:** Hva kan vi lære av små variasjoner i CMB?

**Observasjon:**
CMB er ekstremt jevn - temperaturen er 2,725 K i alle retninger. Men satellitter (COBE, WMAP, Planck) har oppdaget EKSTREMT små variasjoner: ca. ±0,00003 K (30 mikrokelviner).

**Hva betyr variasjonene?**
De representerer områder som var litt tettere eller litt tynnere enn gjennomsnittet:
- Litt varmere = litt mindre tett
- Litt kaldere = litt tettere

**Hvorfor er dette viktig?**
Disse små tetthetsforskjellene er "frøene" til all struktur i universet:
- Tettere områder tiltrakk mer materie med gravitasjon
- Over milliarder av år ble de til galakser og galaksehoper
- Mindre tette områder ble til tomrommene mellom

**Mønsteret bekrefter big bang:**
Størrelsen og fordelingen av variasjonene stemmer nøyaktig med hva big bang-teorien forutsier. De gir oss også informasjon om:
- Universets alder
- Mengden mørk materie
- Mengden mørk energi
- Universets geometri`,
    },
    {
      id: 'nat-vg1-3-4-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-4-exercise-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hvorfor CMB kalles et "babybilde" av universet, og hvorfor vi ser det som mikrobølger i dag.',
        hints: ['Når ble universet gjennomsiktig?', 'Hva har skjedd med lyset siden da?', 'Hvordan påvirker universets utvidelse lysets bølgelengde?'],
        solution: `CMB kalles et "babybilde" fordi det viser universet slik det så ut da det var bare 380 000 år gammelt - et "spedbarn" kosmisk sett.

Før dette var universet så varmt at elektroner ikke kunne binde seg til atomkjerner. Lyset kolliderte konstant med frie elektroner og kunne ikke bevege seg langt - universet var ugjennomsiktig. Da universet kjølte seg ned, dannet atomer seg og lyset kunne endelig bevege seg fritt.

Vi ser det som mikrobølger (ikke synlig lys) fordi universets utvidelse har strukket lyset. Opprinnelig var lyset oransje-rødt (ca. 3000 K). Rommet har utvidet seg ca. 1100 ganger, og strekket bølgelengden tilsvarende - fra synlig lys til mikrobølger (ca. 2,7 K).`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-3-4-def-3',
      type: 'definition',
      title: 'Bevis 3: Grunnstoffenes forekomst',
      content: `**Big bang-nukleosyntese - en forutsigelse:**
Big bang-teorien gjør en presis forutsigelse om hvilke grunnstoffer som skulle dannes i de første minuttene:
- Hydrogen: ca. 75% (etter masse)
- Helium-4: ca. 25%
- Deuterium (tungt hydrogen): spor
- Helium-3: spor
- Litium-7: spor

**Ingen tyngre grunnstoffer!**
Big bang var ikke varmt og tett lenge nok til å lage karbon, oksygen, jern eller noe annet. Disse kommer fra stjerner.

**Observasjonene bekrefter:**
Når vi måler grunnstoffenes forekomst i:
- De eldste stjernene
- Intergalaktisk gass
- Fjerne gasskyerå

...finner vi nøyaktig den fordelingen big bang forutsier!

**Spesielt viktig - deuterium:**
Deuterium (hydrogen med ett ekstra nøytron) er "skjørt" - det ødelegges i stjerner. Mengden vi observerer i dag kan bare forklares hvis det ble laget i big bang.

**Metallisitet i stjerner:**
Gamle stjerner (dannet tidlig) har nesten bare hydrogen og helium.
Unge stjerner har mer karbon, oksygen, jern - fordi tidligere generasjoner av stjerner har "beriket" gassen.`,
    },
    {
      id: 'nat-vg1-3-4-ex-3',
      type: 'example',
      title: 'Metallisitet - å spore grunnstoffenes historie',
      content: `**Problem:** Hvordan kan vi bruke stjernenes sammensetning til å bekrefte big bang?

**Definisjon:**
I astronomien kalles alle grunnstoffer tyngre enn helium for "metaller" (selv om kjemikere ville protestere!). Metallisitet er andelen av slike grunnstoffer i en stjerne.

**Hva vi observerer:**

**Befolkning III (første generasjon):**
- De aller første stjernene (ingen observert ennå)
- Kun hydrogen og helium fra big bang
- Metallisitet: ~0

**Befolkning II (gamle stjerner):**
- Observeres i galaktiske haloer og kulehoper
- Svært lav metallisitet (1/100 til 1/1000 av solens)
- Dannet av gass beriket av få tidligere supernovaer

**Befolkning I (unge stjerner):**
- Inkluderer solen
- Høyere metallisitet
- Dannet av gass beriket av mange generasjoner supernovaer

**Konklusjon:**
Mønsteret viser at tunge grunnstoffer bygges opp over tid i stjerner, akkurat som big bang-teorien forutsier. De første stjernene hadde bare hydrogen og helium fra big bang.`,
    },
    {
      id: 'nat-vg1-3-4-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-4-exercise-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hvorfor big bang bare kunne lage hydrogen, helium og spor av litium - ikke tyngre grunnstoffer.',
        hints: ['Tenk på hva som kreves for fusjon', 'Hvor lenge var universet varmt nok?', 'Hva skjer med tettheten når universet utvider seg?'],
        solution: `Big bang-nukleosyntese varte bare i noen minutter (fra ca. 10 sekunder til 20 minutter etter big bang). I denne perioden var temperaturen høy nok for fusjon.

For å lage helium trenger man bare å slå sammen hydrogen (enkle kjerner). Men for å lage karbon og tyngre grunnstoffer må man slå sammen tre heliumkjerner samtidig (trippel-alfa-prosessen), noe som krever HØYERE temperatur og tetthet.

Problemet: Universet utvidet seg og kjølte seg ned for raskt. Innen temperaturen var riktig for å lage karbon, var tettheten allerede for lav - kjernene kolliderte for sjelden.

I stjerner fungerer det fordi gravitasjonen holder materien samlet i milliarder av år, noe som gir nok tid og tetthet for tyngre grunnstoffer.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-3-4-summary',
      type: 'text',
      content: `## Oppsummering

**De tre hovedbevisene for big bang:**

**1. Universets utvidelse (Hubbles lov)**
- Fjerne galakser beveger seg bort fra oss
- Jo fjernere, jo raskere (v = H₀ × d)
- Lyset rødforskyes fordi rommet utvider seg
- "Spol tilbake" → alt samlet for 13,8 mrd. år siden

**2. Kosmisk bakgrunnsstråling (CMB)**
- Mikrobølgestråling fra alle retninger, 2,7 K
- Frigjort 380 000 år etter big bang
- "Babybilde" av universet
- Små variasjoner er frø til galakser

**3. Grunnstoffenes forekomst**
- Big bang forutsier: 75% H, 25% He, spor av Li
- Dette er nøyaktig hva vi observerer i gammelt materiale
- Tyngre grunnstoffer kommer fra stjerner

**Nøkkelbegreper:**
- **Rødforskyvning:** Lysets bølgelengde strekkes når rommet utvider seg
- **Hubbles lov:** v = H₀ × d
- **CMB:** Kosmisk mikrobølgebakgrunn, 2,7 K
- **Rekombinasjon:** Da atomer dannet seg, 380 000 år etter big bang
- **Big bang-nukleosyntese:** Dannelse av lette grunnstoffer i første minutter`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-3-4-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-4-exercise-5',
        number: '5',
        type: 'classic',
        task: 'Lag en tabell som oppsummerer de tre hovedbevisene for big bang. Inkluder: Hva observeres, hvem/når oppdaget, og hvordan det støtter big bang.',
        solution: `| Bevis | Hva observeres | Oppdaget | Hvordan det støtter big bang |
|-------|---------------|----------|------------------------------|
| Universets utvidelse | Rødforskyvning av galakselys; fjernere = raskere | Hubble, 1929 | Viser at universet utvider seg; "spol tilbake" = alt samlet |
| Kosmisk bakgrunnsstråling | Mikrobølger fra alle retninger, 2,7 K | Penzias & Wilson, 1965 | Reststråling fra da universet ble gjennomsiktig, 380 000 år etter big bang |
| Grunnstoffenes forekomst | 75% H, 25% He i gammelt materiale | Bekreftet gjennom flere studier | Stemmer perfekt med big bang-nukleosyntese-beregninger |`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-3-4-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-4-exercise-6',
        number: '6',
        type: 'classic',
        task: 'En skeptiker sier: "Big bang er bare en teori, ikke bevist." Forklar hvorfor dette argumentet viser misforståelse av hva en vitenskapelig teori er, og gi eksempler på hvordan big bang har blitt testet.',
        hints: ['Hva er forskjellen på hverdagsbetydningen og vitenskapelig betydning av "teori"?', 'Hvilke forutsigelser har big bang gjort som har blitt bekreftet?'],
        solution: `I dagligtale betyr "teori" ofte en gjetning eller spekulasjon. I vitenskap betyr "teori" noe helt annet: En velprøvd forklaring støttet av omfattende bevis.

Big bang-teorien er en av de best testede teoriene i vitenskap:

1. **Forutsigelse bekreftet - CMB:** Teorien forutsa at det skulle finnes stråling med bestemt temperatur fra tidlig univers. COBE, WMAP og Planck-satellittene bekreftet dette med utrolig presisjon.

2. **Forutsigelse bekreftet - grunnstoffforekomst:** Teorien forutsa nøyaktig hvor mye hydrogen, helium og litium som skulle finnes. Observasjoner bekrefter dette.

3. **Forutsigelse bekreftet - universets alder:** Uavhengige metoder (CMB, stjernealder, Hubbles lov) gir samme svar: ca. 13,8 milliarder år.

4. **Falsifiserbar:** Hvis vi fant for eksempel en stjerne eldre enn 13,8 milliarder år, ville det motbevise teorien.

Big bang er like godt bekreftet som evolusjonsteorien eller gravitasjonsteorien - alle er "bare teorier", men støttet av overveldende bevis.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// SEKSJON 4: Kjemi - stoffer og bindinger
// ============================================================================

export const CHAPTER_NAT_VG1_4_1: TextbookChapter = {
  id: 'nat-vg1-4-1',
  courseId: 'nat-vg1',
  chapterNumber: '4.1',
  title: 'Atomets oppbygning',
  description: 'Repeter og utdyp kunnskap om atomets bestanddeler og elektronkonfigurasjon.',
  estimatedMinutes: 70,
  competenceGoals: ['utforske og gjøre rede for sammenhenger mellom kjemiske bindinger og egenskaper til ulike stoffer'],
  content: [
    {
      id: 'nat-vg1-4-1-intro',
      type: 'text',
      content: `## Atomet - materiens byggestein

Alt rundt deg - luften du puster, vannet du drikker, mobilen i hånden din, ja selv kroppen din - er bygget opp av **atomer**. Atomer er utrolig små: det går ca. 10 millioner atomer på bredden av et menneskehår!

**Hva er et atom?**
Et atom er den minste enheten av et grunnstoff som beholder grunnstoffets kjemiske egenskaper. Atomet består av en liten, tung kjerne omgitt av lette elektroner.

**Atomets bestanddeler:**
- **Protoner** (p⁺): Positivt ladet, masse ≈ 1 u, i kjernen
- **Nøytroner** (n): Nøytralt ladet, masse ≈ 1 u, i kjernen
- **Elektroner** (e⁻): Negativt ladet, masse ≈ 1/1836 u, rundt kjernen

**Størrelsesforhold:**
Hvis atomkjernen var på størrelse med en ert, ville elektronskyen strekke seg ut til ca. 100 meter! Atomet er altså nesten helt tomt rom.

**Læringsmål for dette kapittelet:**
- Forklare atomets oppbygning med protoner, nøytroner og elektroner
- Forstå hva atomnummer og massetall forteller oss
- Beskrive hvordan elektroner er ordnet i skall
- Forklare betydningen av valenselektroner`,
    },
    {
      id: 'nat-vg1-4-1-def-1',
      type: 'definition',
      title: 'Atomnummer og massetall',
      content: `**Atomnummer (Z):**
Antall protoner i kjernen. Dette bestemmer hvilket grunnstoff atomet er - det er grunnstoffets "identitetsnummer".

- Hydrogen (H): Z = 1 (1 proton)
- Karbon (C): Z = 6 (6 protoner)
- Nitrogen (N): Z = 7 (7 protoner)
- Oksygen (O): Z = 8 (8 protoner)
- Natrium (Na): Z = 11 (11 protoner)
- Klor (Cl): Z = 17 (17 protoner)

**Elektrisk nøytralt atom:**
I et nøytralt atom er antall elektroner lik antall protoner. Et oksygenatom har 8 protoner og 8 elektroner.

**Massetall (A):**
Summen av protoner og nøytroner i kjernen.

**A = Z + N**

Der N er antall nøytroner.

Eksempel: Karbon-12 har:
- Z = 6 (6 protoner)
- N = 6 (6 nøytroner)
- A = 6 + 6 = 12

**Notasjon:**
Atomer skrives som ¹²₆C der 12 er massetall (oppe) og 6 er atomnummer (nede).`,
    },
    {
      id: 'nat-vg1-4-1-ex-1',
      type: 'example',
      title: 'Finne antall partikler i et atom',
      content: `**Problem:** Et atom av jern har symbolet ⁵⁶₂₆Fe. Hvor mange protoner, nøytroner og elektroner har det?

**Gitt:**
- Kjemisk symbol: Fe (jern)
- Massetall A = 56
- Atomnummer Z = 26

**Løsning:**

**Protoner:**
Atomnummer = antall protoner
Antall protoner = 26

**Elektroner:**
I et nøytralt atom: elektroner = protoner
Antall elektroner = 26

**Nøytroner:**
A = Z + N
56 = 26 + N
N = 56 - 26 = 30

**Svar:** Jernatomet har 26 protoner, 26 elektroner og 30 nøytroner.`,
    },
    {
      id: 'nat-vg1-4-1-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-1-exercise-1',
        number: '1',
        type: 'classic',
        task: 'Oksygen har atomnummer 8 og massetall 16. Hvor mange protoner, nøytroner og elektroner har et nøytralt oksygenatom?',
        hints: ['Atomnummer = antall protoner', 'I nøytralt atom: elektroner = protoner', 'Massetall = protoner + nøytroner'],
        solution: `Atomnummer Z = 8
Massetall A = 16

Protoner = Z = 8
Elektroner = 8 (nøytralt atom)
Nøytroner = A - Z = 16 - 8 = 8

Svar: 8 protoner, 8 elektroner og 8 nøytroner.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-4-1-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-1-exercise-2',
        number: '2',
        type: 'classic',
        task: 'Et atom har 12 protoner, 12 nøytroner og 12 elektroner. a) Hvilket grunnstoff er det? b) Hva er massetallet?',
        hints: ['Slå opp atomnummer 12 i periodesystemet', 'Massetall = protoner + nøytroner'],
        solution: `a) Atomnummer = antall protoner = 12
Slår opp i periodesystemet: Grunnstoff nr. 12 er magnesium (Mg)

b) Massetall A = protoner + nøytroner = 12 + 12 = 24

Svar: Det er magnesium-24 (²⁴Mg)`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-4-1-def-2',
      type: 'definition',
      title: 'Isotoper',
      content: `**Hva er isotoper?**
Isotoper er atomer av samme grunnstoff (samme antall protoner) men med ulikt antall nøytroner. De har derfor ulikt massetall.

**Eksempel - karbons isotoper:**
- **Karbon-12 (¹²C):** 6 protoner + 6 nøytroner (stabil, vanligst)
- **Karbon-13 (¹³C):** 6 protoner + 7 nøytroner (stabil, sjelden)
- **Karbon-14 (¹⁴C):** 6 protoner + 8 nøytroner (radioaktiv)

Alle tre er karbon fordi de har 6 protoner. De har nesten identiske kjemiske egenskaper.

**Eksempel - hydrogens isotoper:**
- **Protium (¹H):** 1 proton, 0 nøytroner (99,98% av alt hydrogen)
- **Deuterium (²H):** 1 proton, 1 nøytron (tungt hydrogen)
- **Tritium (³H):** 1 proton, 2 nøytroner (radioaktivt)

**Bruksområder:**
- **Karbon-14 datering:** Radioaktiv isotop brukes til å datere organisk materiale
- **Medisin:** Radioaktive isotoper brukes til å spore stoffer i kroppen
- **Energi:** Uran-235 brukes i kjernekraftverk`,
    },
    {
      id: 'nat-vg1-4-1-ex-2',
      type: 'example',
      title: 'Karbon-14-datering',
      content: `**Problem:** Hvordan kan karbon-14 brukes til å bestemme alderen på arkeologiske funn?

**Bakgrunn:**
Levende organismer tar opp karbon fra omgivelsene. En liten andel av dette er radioaktiv karbon-14, som dannes i atmosfæren. Når organismen dør, slutter den å ta opp nytt karbon.

**Prinsippet:**
- Karbon-14 brytes ned med en halveringstid på 5730 år
- Halveringstid betyr at halvparten av atomene brytes ned i løpet av denne tiden
- Ved å måle hvor mye karbon-14 som er igjen, kan vi beregne hvor lenge siden organismen døde

**Eksempel:**
Et trestykke fra en arkeologisk utgravning har bare 25% av den opprinnelige mengden karbon-14.

- Etter 1 halveringstid: 50% igjen
- Etter 2 halveringstider: 25% igjen

2 halveringstider = 2 × 5730 år = 11 460 år

Treet er ca. 11 500 år gammelt.`,
    },
    {
      id: 'nat-vg1-4-1-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-1-exercise-3',
        number: '3',
        type: 'classic',
        task: 'Klor har to stabile isotoper: Klor-35 og Klor-37. Begge har 17 protoner. Hvor mange nøytroner har hver isotop?',
        solution: `For klor-35:
Nøytroner = massetall - atomnummer = 35 - 17 = 18 nøytroner

For klor-37:
Nøytroner = massetall - atomnummer = 37 - 17 = 20 nøytroner

Svar: Klor-35 har 18 nøytroner, klor-37 har 20 nøytroner.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-4-1-def-3',
      type: 'definition',
      title: 'Elektronskall og elektronkonfigurasjon',
      content: `**Elektronskall:**
Elektronene befinner seg ikke tilfeldig rundt kjernen, men er ordnet i bestemte skall (energinivåer).

**Skall og deres kapasitet:**
| Skall | Navn | Maks elektroner | Formel |
|-------|------|-----------------|--------|
| 1 | K | 2 | 2×1² |
| 2 | L | 8 | 2×2² |
| 3 | M | 18 | 2×3² |
| 4 | N | 32 | 2×4² |

**Fylles innenfra og ut:**
Elektroner fyller skallene fra innerst til ytterst:
1. Først fylles K-skallet (maks 2)
2. Deretter L-skallet (maks 8)
3. Så M-skallet, osv.

**Elektronkonfigurasjon:**
Vi skriver antall elektroner i hvert skall adskilt med komma:
- Hydrogen (1 e⁻): 1
- Karbon (6 e⁻): 2, 4
- Oksygen (8 e⁻): 2, 6
- Natrium (11 e⁻): 2, 8, 1
- Klor (17 e⁻): 2, 8, 7
- Argon (18 e⁻): 2, 8, 8
- Kalsium (20 e⁻): 2, 8, 8, 2

**Valenselektroner:**
Elektronene i ytterste skall kalles valenselektroner. Disse bestemmer atomets kjemiske egenskaper og hvordan det binder seg til andre atomer.`,
    },
    {
      id: 'nat-vg1-4-1-ex-3',
      type: 'example',
      title: 'Tegne skallmodell',
      content: `**Problem:** Tegn skallmodellen for natrium (Na, Z = 11).

**Steg 1: Bestem antall elektroner**
Natrium har atomnummer 11, så et nøytralt atom har 11 elektroner.

**Steg 2: Fyll skallene**
- K-skallet (innerst): 2 elektroner (fullt)
- L-skallet: 8 elektroner (fullt)
- M-skallet: 1 elektron (11 - 2 - 8 = 1)

**Steg 3: Skriv elektronkonfigurasjonen**
Na: 2, 8, 1

**Steg 4: Tegn**
Tegn en kjerne i midten (11p⁺, 12n).
Tegn tre konsentriske sirkler (skall).
Plasser 2 elektroner på innerste, 8 på neste, 1 på ytterste.

**Valenselektroner:** 1
Dette forklarer hvorfor natrium lett gir fra seg ett elektron og danner Na⁺-ioner.`,
    },
    {
      id: 'nat-vg1-4-1-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-1-exercise-4',
        number: '4',
        type: 'classic',
        task: 'Skriv elektronkonfigurasjonen for: a) Nitrogen (Z=7), b) Magnesium (Z=12), c) Svovel (Z=16)',
        hints: ['Husk at K-skallet tar maks 2, L-skallet tar maks 8', 'Fyll skallene innenfra'],
        solution: `a) Nitrogen (7 elektroner):
K-skall: 2 (fullt)
L-skall: 5
Elektronkonfigurasjon: 2, 5

b) Magnesium (12 elektroner):
K-skall: 2 (fullt)
L-skall: 8 (fullt)
M-skall: 2
Elektronkonfigurasjon: 2, 8, 2

c) Svovel (16 elektroner):
K-skall: 2 (fullt)
L-skall: 8 (fullt)
M-skall: 6
Elektronkonfigurasjon: 2, 8, 6`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-4-1-def-4',
      type: 'definition',
      title: 'Edelgasskonfigurasjon - det stabile målet',
      content: `**Edelgassene:**
Gruppe 18 i periodesystemet inneholder edelgassene: Helium (He), Neon (Ne), Argon (Ar), osv.

**Deres elektronkonfigurasjoner:**
- Helium: 2 (fullt K-skall)
- Neon: 2, 8 (fulle K og L-skall)
- Argon: 2, 8, 8 (fulle K, L og ytre M-skall)

**Hvorfor er edelgasser spesielle?**
De har fulle ytterste skall (8 elektroner, eller 2 for helium). Dette gjør dem ekstremt stabile - de reagerer nesten ikke med andre stoffer.

**Oktetregelen:**
Atomer "ønsker" å oppnå edelgasskonfigurasjon - 8 elektroner i ytterste skall (eller 2 for de minste atomene). De gjør dette ved å:
- Gi fra seg elektroner (metaller)
- Ta opp elektroner (ikke-metaller)
- Dele elektroner (kovalent binding)

**Eksempler:**
- Natrium (2, 8, 1) gir fra seg 1 elektron → Na⁺ (2, 8) - som neon!
- Klor (2, 8, 7) tar opp 1 elektron → Cl⁻ (2, 8, 8) - som argon!`,
    },
    {
      id: 'nat-vg1-4-1-summary',
      type: 'text',
      content: `## Oppsummering

**Atomets bestanddeler:**
- Protoner (p⁺): Positive, i kjernen, bestemmer grunnstoffet
- Nøytroner (n): Nøytrale, i kjernen, påvirker massen
- Elektroner (e⁻): Negative, rundt kjernen, bestemmer kjemiske egenskaper

**Viktige begreper:**
- **Atomnummer (Z):** Antall protoner, grunnstoffets identitet
- **Massetall (A):** Protoner + nøytroner
- **Isotoper:** Samme grunnstoff, ulikt antall nøytroner
- **Elektronkonfigurasjon:** Fordelingen av elektroner i skall
- **Valenselektroner:** Elektroner i ytterste skall
- **Edelgasskonfigurasjon:** Fullt ytterste skall (stabil)

**Skallkapasitet:**
- K: 2 elektroner
- L: 8 elektroner
- M: 18 elektroner (men ofte 8 i ytterste)

**Formler:**
- A = Z + N (massetall = atomnummer + nøytroner)
- Nøytralt atom: elektroner = protoner`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-4-1-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-1-exercise-5',
        number: '5',
        type: 'classic',
        task: 'Fyll ut tabellen for følgende atomer:\n\n| Atom | Protoner | Nøytroner | Elektroner | Elektronkonfigurasjon |\n|------|----------|-----------|------------|----------------------|\n| ¹⁹F | | | | |\n| ²³Na | | | | |\n| ³²S | | | | |',
        hints: ['Atomnummer = protoner', 'Massetall - atomnummer = nøytroner', 'Fluor Z=9, Na Z=11, S Z=16'],
        solution: `| Atom | Protoner | Nøytroner | Elektroner | Elektronkonfigurasjon |
|------|----------|-----------|------------|----------------------|
| ¹⁹F | 9 | 10 | 9 | 2, 7 |
| ²³Na | 11 | 12 | 11 | 2, 8, 1 |
| ³²S | 16 | 16 | 16 | 2, 8, 6 |

Forklaring:
- Fluor: Z=9 (9p), A=19 → N=10, elektronkonfigurasjon 2,7
- Natrium: Z=11 (11p), A=23 → N=12, elektronkonfigurasjon 2,8,1
- Svovel: Z=16 (16p), A=32 → N=16, elektronkonfigurasjon 2,8,6`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-4-1-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-1-exercise-6',
        number: '6',
        type: 'classic',
        task: 'Forklar hvorfor edelgassene er så lite reaktive, og bruk dette til å forklare hvorfor natrium og klor reagerer så lett med hverandre.',
        hints: ['Se på elektronkonfigurasjonen til edelgassene', 'Hva mangler Na og Cl for å bli som edelgasser?', 'Hvordan kan de hjelpe hverandre?'],
        solution: `Edelgassene (He, Ne, Ar osv.) er lite reaktive fordi de har fulle ytterste elektronskall. Neon har 2, 8 og argon har 2, 8, 8. Denne konfigurasjonen er svært stabil.

Natrium har elektronkonfigurasjon 2, 8, 1. Det har ett elektron "for mye" sammenlignet med neon. Ved å gi fra seg dette elektronet blir det Na⁺ med konfigurasjon 2, 8 - som neon.

Klor har elektronkonfigurasjon 2, 8, 7. Det mangler ett elektron for å bli som argon. Ved å ta opp ett elektron blir det Cl⁻ med konfigurasjon 2, 8, 8 - som argon.

Natrium og klor reagerer lett fordi de kan "hjelpe hverandre": Natrium gir sitt ekstra elektron til klor, og begge får edelgasskonfigurasjon. Dette danner ionebindingen i NaCl (bordsalt).`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_4_2: TextbookChapter = {
  id: 'nat-vg1-4-2',
  courseId: 'nat-vg1',
  chapterNumber: '4.2',
  title: 'Periodesystemet',
  description: 'Forstå periodesystemets oppbygning og hvordan det forklarer grunnstoffenes egenskaper.',
  estimatedMinutes: 70,
  competenceGoals: ['utforske og gjøre rede for sammenhenger mellom kjemiske bindinger og egenskaper til ulike stoffer'],
  content: [
    {
      id: 'nat-vg1-4-2-intro',
      type: 'text',
      content: `## Periodesystemet - kjemiens ordensystem

Periodesystemet er kanskje det viktigste verktøyet i kjemi. Det ordner alle de 118 kjente grunnstoffene på en logisk måte som avslører mønstre i deres egenskaper.

**Historien:**
Den russiske kjemikeren Dmitrij Mendelejev laget den første versjonen i 1869. Han ordnet grunnstoffene etter økende atommasse og la merke til at egenskapene gjentok seg periodisk - derav navnet "periodesystemet".

**Genialiteten:**
Mendelejev lot hull stå i tabellen og forutsa egenskapene til grunnstoffer som ikke var oppdaget ennå. Da disse ble funnet, stemte forutsigelsene forbløffende godt!

**Moderne organisering:**
I dag ordnes grunnstoffene etter **atomnummer** (antall protoner), ikke atommasse. Elementer med lignende egenskaper havner i samme **gruppe** (kolonne).

**Læringsmål for dette kapittelet:**
- Forstå strukturen i periodesystemet (perioder og grupper)
- Forklare sammenhengen mellom posisjon og elektronkonfigurasjon
- Beskrive trender i egenskaper (atomradius, ioniseringsenergi, elektronegativitet)
- Identifisere metaller, ikke-metaller og halvmetaller`,
    },
    {
      id: 'nat-vg1-4-2-def-1',
      type: 'definition',
      title: 'Perioder og grupper',
      content: `**Perioder (vannrette rader):**
Det er 7 perioder i periodesystemet.

- Periode 1: H, He (2 grunnstoffer)
- Periode 2: Li til Ne (8 grunnstoffer)
- Periode 3: Na til Ar (8 grunnstoffer)
- Periode 4-5: 18 grunnstoffer hver
- Periode 6-7: 32 grunnstoffer hver

**Viktig:** Periodenummer = antall elektronskall
- Periode 2: 2 skall (K, L)
- Periode 3: 3 skall (K, L, M)

**Grupper (loddrette kolonner):**
Det er 18 grupper. Elementer i samme gruppe har lignende egenskaper fordi de har samme antall valenselektroner.

**Viktige grupper:**
| Gruppe | Navn | Valenselektroner | Eksempler |
|--------|------|------------------|-----------|
| 1 | Alkalimetaller | 1 | Li, Na, K, Rb |
| 2 | Jordalkalimetaller | 2 | Be, Mg, Ca, Sr |
| 17 | Halogener | 7 | F, Cl, Br, I |
| 18 | Edelgasser | 8 (eller 2) | He, Ne, Ar, Kr |

**For hovedgruppene (1, 2, 13-18):**
Gruppenummer = antall valenselektroner (med unntak av helium)`,
    },
    {
      id: 'nat-vg1-4-2-ex-1',
      type: 'example',
      title: 'Bruke periodesystemet til å finne elektronkonfigurasjon',
      content: `**Problem:** Bruk periodesystemet til å bestemme elektronkonfigurasjonen til svovel (S).

**Steg 1: Finn svovel i periodesystemet**
Svovel er i periode 3, gruppe 16.

**Steg 2: Tolk informasjonen**
- Periode 3 → 3 elektronskall
- Gruppe 16 → 6 valenselektroner

**Steg 3: Bygg elektronkonfigurasjonen**
- Skall 1 (K): 2 elektroner (fullt)
- Skall 2 (L): 8 elektroner (fullt)
- Skall 3 (M): 6 elektroner (valenselektronene)

**Svar:** Svovel har elektronkonfigurasjon 2, 8, 6

**Sjekk:** 2 + 8 + 6 = 16 = atomnummeret til svovel ✓

**Generell regel:**
For hovedgruppe-elementer kan du raskt finne elektronkonfigurasjonen fra posisjonen i periodesystemet!`,
    },
    {
      id: 'nat-vg1-4-2-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-2-exercise-1',
        number: '1',
        type: 'classic',
        task: 'Bruk periodesystemet til å finne elektronkonfigurasjonen til: a) Fosfor (P), b) Argon (Ar), c) Kalium (K)',
        hints: ['Finn perioden (= antall skall) og gruppen (= valenselektroner)', 'Fyll skallene innenfra'],
        solution: `a) Fosfor (P): Periode 3, gruppe 15
- 3 skall, 5 valenselektroner
- Konfigurasjon: 2, 8, 5

b) Argon (Ar): Periode 3, gruppe 18
- 3 skall, 8 valenselektroner
- Konfigurasjon: 2, 8, 8

c) Kalium (K): Periode 4, gruppe 1
- 4 skall, 1 valenselektron
- Konfigurasjon: 2, 8, 8, 1`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-4-2-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-2-exercise-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvorfor natrium (Na) og kalium (K) har lignende kjemiske egenskaper.',
        hints: ['Hvor i periodesystemet er de?', 'Hva har de til felles?'],
        solution: `Natrium og kalium er begge i gruppe 1 (alkalimetaller):
- Na har elektronkonfigurasjon 2, 8, 1 (1 valenselektron)
- K har elektronkonfigurasjon 2, 8, 8, 1 (1 valenselektron)

Begge har 1 valenselektron som de lett gir fra seg for å oppnå edelgasskonfigurasjon. De danner begge +1-ioner (Na⁺, K⁺).

Derfor har de lignende kjemiske egenskaper:
- Begge reagerer heftig med vann og danner hydrogen
- Begge reagerer med klor og danner salter (NaCl, KCl)
- Begge er myke metaller med lavt smeltepunkt`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-4-2-def-2',
      type: 'definition',
      title: 'Metaller, ikke-metaller og halvmetaller',
      content: `Periodesystemet kan deles inn i tre hovedkategorier:

**Metaller (ca. 80% av grunnstoffene):**
Befinner seg til venstre og i midten av periodesystemet.
- Gode ledere av varme og elektrisitet
- Glinsende overflate
- Formbare (kan hamres og trekkes)
- Danner positive ioner (kationer)
- Eksempler: Na, Fe, Cu, Au, Al

**Ikke-metaller:**
Befinner seg til høyre i periodesystemet.
- Dårlige ledere (isolatorer)
- Ofte gasser eller sprø faste stoffer
- Danner negative ioner (anioner) eller deler elektroner
- Eksempler: C, N, O, F, Cl, S

**Halvmetaller (metalloider):**
Langs "trappen" mellom metaller og ikke-metaller.
- Egenskaper mellom metall og ikke-metall
- Viktige som halvledere i elektronikk
- Eksempler: Si, Ge, As, B

**Hydrogen:**
Spesiell - plasseres øverst i gruppe 1, men er en ikke-metall.`,
    },
    {
      id: 'nat-vg1-4-2-ex-2',
      type: 'example',
      title: 'Gjenkjenne metall eller ikke-metall',
      content: `**Problem:** Klassifiser følgende grunnstoffer som metall, ikke-metall eller halvmetall, og forklar hvorfor: Brom (Br), Aluminium (Al), Silisium (Si), Gull (Au)

**Løsning:**

**Brom (Br) - Ikke-metall:**
- Plassert i gruppe 17 (halogener), til høyre i periodesystemet
- Væske ved romtemperatur, dårlig leder
- Danner negative ioner (Br⁻)

**Aluminium (Al) - Metall:**
- Plassert i gruppe 13, til venstre for trappen
- God leder, glinsende, formbar
- Danner positive ioner (Al³⁺)

**Silisium (Si) - Halvmetall:**
- Plassert langs trappen i periode 3
- Halvleder - ledningsevnen ligger mellom metall og ikke-metall
- Brukes i databrikker og solceller

**Gull (Au) - Metall:**
- Overgangsmetall, til venstre i periodesystemet
- Utmerket leder, glinsende, svært formbar
- Danner positive ioner`,
    },
    {
      id: 'nat-vg1-4-2-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-2-exercise-3',
        number: '3',
        type: 'classic',
        task: 'Klassifiser følgende grunnstoffer som metall, ikke-metall eller halvmetall: a) Oksygen (O), b) Jern (Fe), c) Germanium (Ge), d) Neon (Ne)',
        solution: `a) Oksygen (O) - Ikke-metall
- Gruppe 16, til høyre i periodesystemet
- Gass, dårlig leder, danner O²⁻-ioner

b) Jern (Fe) - Metall
- Overgangsmetall i periode 4
- God leder, magnetisk, formbar

c) Germanium (Ge) - Halvmetall
- Langs trappen i periode 4
- Halvleder, brukes i elektronikk

d) Neon (Ne) - Ikke-metall
- Edelgass i gruppe 18
- Gass, reagerer ikke, brukes i lysrør`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-4-2-def-3',
      type: 'definition',
      title: 'Periodetrender',
      content: `Flere egenskaper viser systematiske trender i periodesystemet:

**1. Atomradius (atomets størrelse):**
- **Øker NEDOVER i en gruppe:** Flere elektronskall gjør atomet større
- **Minker BORTOVER i en periode:** Flere protoner trekker elektronene nærmere kjernen

Størst: Francium (Fr) nederst til venstre
Minst: Helium (He) øverst til høyre

**2. Ioniseringsenergi:**
Energien som trengs for å fjerne et elektron.
- **Øker BORTOVER i perioden:** Sterkere kjerneladning holder elektronene fastere
- **Minker NEDOVER i gruppen:** Valenselektronene er lenger fra kjernen

Høyest: Helium (He)
Lavest: Francium (Fr)

**3. Elektronegativitet:**
Evnen til å tiltrekke seg elektroner i en binding.
- **Øker BORTOVER i perioden**
- **Minker NEDOVER i gruppen**

Høyest: Fluor (F) = 4,0
Lavest: Francium (Fr) ≈ 0,7

**Huske-regel:**
Disse tre trendene går alle i samme retning: Mot øvre høyre hjørne øker elektronegativitet og ioniseringsenergi, mens atomradius minker.`,
    },
    {
      id: 'nat-vg1-4-2-ex-3',
      type: 'example',
      title: 'Sammenligne atomradius',
      content: `**Problem:** Ordne disse atomene etter økende atomradius: Na, Mg, K, Ca

**Analyse:**
- Na: Periode 3, gruppe 1
- Mg: Periode 3, gruppe 2
- K: Periode 4, gruppe 1
- Ca: Periode 4, gruppe 2

**Anvende trendene:**

**Bortover i periode (minker):**
- Na > Mg (begge periode 3, Na til venstre)
- K > Ca (begge periode 4, K til venstre)

**Nedover i gruppe (øker):**
- K > Na (begge gruppe 1, K lenger ned)
- Ca > Mg (begge gruppe 2, Ca lenger ned)

**Kombinerer:**
Minst: Mg (periode 3, høyest til høyre)
Nest minst: Na (periode 3, litt til venstre)
Nest størst: Ca (periode 4, til høyre)
Størst: K (periode 4, til venstre)

**Svar:** Mg < Na < Ca < K`,
    },
    {
      id: 'nat-vg1-4-2-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-2-exercise-4',
        number: '4',
        type: 'classic',
        task: 'a) Ordne atomene Li, Na, K etter økende ioniseringsenergi. b) Forklar trenden.',
        hints: ['Alle tre er i gruppe 1', 'Hva skjer med ioniseringsenergien nedover i en gruppe?'],
        solution: `a) Ordnet etter økende ioniseringsenergi: K < Na < Li

b) Forklaring:
Alle tre er i gruppe 1 (alkalimetaller) og har 1 valenselektron. Ioniseringsenergien minker nedover i gruppen fordi:

- Li har 2 skall - valenselektronet er nær kjernen
- Na har 3 skall - valenselektronet er lenger fra kjernen
- K har 4 skall - valenselektronet er enda lenger fra kjernen

Jo lenger fra kjernen, jo svakere holdes elektronet, og jo mindre energi trengs for å fjerne det. Derfor er det lettest å fjerne elektronet fra K og vanskeligst fra Li.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-4-2-summary',
      type: 'text',
      content: `## Oppsummering

**Periodesystemets struktur:**
- **Perioder** (rader): Angir antall elektronskall
- **Grupper** (kolonner): Angir antall valenselektroner (hovedgrupper)

**Viktige grupper:**
- Gruppe 1: Alkalimetaller (1 valenselektron)
- Gruppe 2: Jordalkalimetaller (2 valenselektroner)
- Gruppe 17: Halogener (7 valenselektroner)
- Gruppe 18: Edelgasser (8 valenselektroner)

**Klassifisering:**
- **Metaller:** Venstre side, gode ledere, danner kationer
- **Ikke-metaller:** Høyre side, dårlige ledere, danner anioner
- **Halvmetaller:** Langs trappen, halvledere

**Periodetrender:**
| Egenskap | Bortover → | Nedover ↓ |
|----------|------------|-----------|
| Atomradius | Minker | Øker |
| Ioniseringsenergi | Øker | Minker |
| Elektronegativitet | Øker | Minker |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-4-2-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-2-exercise-5',
        number: '5',
        type: 'classic',
        task: 'Et ukjent grunnstoff X har elektronkonfigurasjon 2, 8, 7. Bruk periodesystemet til å svare: a) Hvilket grunnstoff er det? b) Er det metall eller ikke-metall? c) Hvilket ion vil det sannsynligvis danne? d) Hvilken kjent forbindelse danner det med natrium?',
        hints: ['Tell antall skall og valenselektroner', 'Finn riktig periode og gruppe'],
        solution: `a) Elektronkonfigurasjon 2, 8, 7:
- 3 skall → periode 3
- 7 valenselektroner → gruppe 17
- Dette er klor (Cl)

b) Klor er en ikke-metall (til høyre i periodesystemet, halogen)

c) Klor har 7 valenselektroner og vil ta opp 1 elektron for å få 8 (edelgasskonfigurasjon). Det danner Cl⁻-ioner.

d) Med natrium danner klor natriumklorid (NaCl) - vanlig bordsalt. Na⁺ og Cl⁻ holder sammen med ionebinding.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-4-2-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-2-exercise-6',
        number: '6',
        type: 'classic',
        task: 'Forklar hvorfor oksygen og svovel har lignende kjemiske egenskaper, men også noen forskjeller. Bruk periodesystemet i forklaringen.',
        hints: ['Hvilken gruppe er de i?', 'Hvilken periode?', 'Hvordan påvirker antall skall egenskapene?'],
        solution: `**Likheter:**
Oksygen (O) og svovel (S) er begge i gruppe 16 og har 6 valenselektroner:
- O: 2, 6 (2 skall, 6 valenselektroner)
- S: 2, 8, 6 (3 skall, 6 valenselektroner)

Begge vil ta opp 2 elektroner for å få 8 valenselektroner:
- Begge danner 2⁻-ioner (O²⁻, S²⁻)
- Begge danner kovalente bindinger med 2 elektroner fra andre atomer
- Begge danner forbindelser med samme formel (H₂O, H₂S)

**Forskjeller (på grunn av ulik periode):**
- Svovel er større (3 skall vs 2 skall)
- Svovel er mindre elektronegativt
- Svovel har lavere ioniseringsenergi
- Svovelforbindelser er ofte mer reaktive

**Konkret eksempel:**
H₂O (vann) er livsnødvendig, mens H₂S (hydrogensulfid) er giftig med råtten egglukt. Selv om formlene er like, gir ulik atomstørrelse og bindingsstyrke helt ulike egenskaper.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_4_3: TextbookChapter = {
  id: 'nat-vg1-4-3',
  courseId: 'nat-vg1',
  chapterNumber: '4.3',
  title: 'Ionebinding',
  description: 'Lær om hvordan ionebindinger dannes og egenskapene til ioneforbindelser.',
  estimatedMinutes: 70,
  competenceGoals: ['utforske og gjøre rede for sammenhenger mellom kjemiske bindinger og egenskaper til ulike stoffer'],
  content: [
    {
      id: 'nat-vg1-4-3-intro',
      type: 'text',
      content: `## Ionebinding - overføring av elektroner

Har du noen gang lurt på hvorfor salt løser seg i vann, men har så høyt smeltepunkt at det brukes til å lage keramikk? Svaret ligger i en spesiell type kjemisk binding kalt **ionebinding**.

**Hva er ionebinding?**
Ionebinding oppstår når atomer **overfører elektroner** til hverandre. Ett atom gir fra seg elektroner, et annet tar imot. Dette skjer typisk mellom metaller og ikke-metaller.

**Hvordan dannes ioner?**
- **Metaller** (gruppe 1, 2, 3) har få valenselektroner som de lett gir fra seg
  → Danner **positive ioner (kationer)**: Na⁺, Mg²⁺, Al³⁺
- **Ikke-metaller** (gruppe 15, 16, 17) mangler få elektroner for å fylle skallet
  → Tar opp elektroner og danner **negative ioner (anioner)**: Cl⁻, O²⁻, N³⁻

**Læringsmål for dette kapittelet:**
- Forklare hvordan ionebindinger dannes
- Beskrive ionegitteret og dets struktur
- Forklare sammenhengen mellom ionebinding og stoffegenskaper
- Forutsi formlene til ioneforbindelser`,
    },
    {
      id: 'nat-vg1-4-3-def-1',
      type: 'definition',
      title: 'Dannelse av ioner',
      content: `**Kationer (positive ioner):**
Metaller gir fra seg valenselektroner for å oppnå edelgasskonfigurasjon.

| Atom | Konfigurasjon | Gir fra seg | Ion | Ny konfigurasjon |
|------|---------------|-------------|-----|------------------|
| Na | 2, 8, 1 | 1 e⁻ | Na⁺ | 2, 8 (som Ne) |
| Mg | 2, 8, 2 | 2 e⁻ | Mg²⁺ | 2, 8 (som Ne) |
| Al | 2, 8, 3 | 3 e⁻ | Al³⁺ | 2, 8 (som Ne) |
| K | 2,8,8,1 | 1 e⁻ | K⁺ | 2, 8, 8 (som Ar) |
| Ca | 2,8,8,2 | 2 e⁻ | Ca²⁺ | 2, 8, 8 (som Ar) |

**Anioner (negative ioner):**
Ikke-metaller tar opp elektroner for å fylle ytterste skall.

| Atom | Konfigurasjon | Tar opp | Ion | Ny konfigurasjon |
|------|---------------|---------|-----|------------------|
| F | 2, 7 | 1 e⁻ | F⁻ | 2, 8 (som Ne) |
| Cl | 2, 8, 7 | 1 e⁻ | Cl⁻ | 2, 8, 8 (som Ar) |
| O | 2, 6 | 2 e⁻ | O²⁻ | 2, 8 (som Ne) |
| S | 2, 8, 6 | 2 e⁻ | S²⁻ | 2, 8, 8 (som Ar) |
| N | 2, 5 | 3 e⁻ | N³⁻ | 2, 8 (som Ne) |`,
    },
    {
      id: 'nat-vg1-4-3-ex-1',
      type: 'example',
      title: 'Dannelse av natriumklorid (NaCl)',
      content: `**Problem:** Beskriv steg for steg hvordan NaCl dannes fra Na og Cl.

**Steg 1: Utgangspunktet**
- Natrium (Na): 2, 8, 1 (1 valenselektron)
- Klor (Cl): 2, 8, 7 (7 valenselektroner)

**Steg 2: Elektronoverføring**
Natrium gir fra seg sitt ene valenselektron til klor:
- Na → Na⁺ + e⁻
- Cl + e⁻ → Cl⁻

**Steg 3: Edelgasskonfigurasjon**
- Na⁺: 2, 8 (som neon - stabilt!)
- Cl⁻: 2, 8, 8 (som argon - stabilt!)

**Steg 4: Elektrostatisk tiltrekning**
Na⁺ (positiv) og Cl⁻ (negativ) tiltrekker hverandre. Denne tiltrekningen er ionebindingen.

**Steg 5: Ionegitter**
Mange Na⁺ og Cl⁻ ordner seg i et tredimensjonalt mønster der hvert ion er omgitt av 6 ioner med motsatt ladning. Dette er ionegitteret.

**Formelforholdet:**
1 Na⁺ : 1 Cl⁻ → Formel: NaCl`,
    },
    {
      id: 'nat-vg1-4-3-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-3-exercise-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv hvordan ionebindingen i magnesiumoksid (MgO) dannes. Inkluder elektronkonfigurasjoner før og etter.',
        hints: ['Mg er i gruppe 2, O er i gruppe 16', 'Hvor mange elektroner gir Mg fra seg? Hvor mange tar O opp?'],
        solution: `Utgangspunkt:
- Magnesium (Mg): 2, 8, 2 (2 valenselektroner)
- Oksygen (O): 2, 6 (6 valenselektroner)

Elektronoverføring:
Magnesium gir fra seg 2 elektroner til oksygen:
- Mg → Mg²⁺ + 2e⁻
- O + 2e⁻ → O²⁻

Etter overføringen:
- Mg²⁺: 2, 8 (som neon)
- O²⁻: 2, 8 (som neon)

Begge har oppnådd edelgasskonfigurasjon. De positive Mg²⁺-ionene og negative O²⁻-ionene tiltrekker hverandre og danner ionegitteret.

Formelforhold: 1 Mg²⁺ : 1 O²⁻ → Formel: MgO`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-4-3-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-3-exercise-2',
        number: '2',
        type: 'classic',
        task: 'Bestem formlene til ioneforbindelsene: a) Kalsiumklorid (Ca²⁺ og Cl⁻), b) Aluminiumoksid (Al³⁺ og O²⁻)',
        hints: ['Summen av ladningene må bli null', 'Hvor mange anioner trengs for å balansere kationene?'],
        solution: `a) Kalsiumklorid:
- Ca²⁺ har ladning +2
- Cl⁻ har ladning -1
- For å balansere: 1 × (+2) + 2 × (-1) = 0
- Formel: CaCl₂

b) Aluminiumoksid:
- Al³⁺ har ladning +3
- O²⁻ har ladning -2
- For å balansere: 2 × (+3) + 3 × (-2) = +6 - 6 = 0
- Formel: Al₂O₃`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-4-3-def-2',
      type: 'definition',
      title: 'Ionegitteret',
      content: `**Hva er et ionegitter?**
Ioneforbindelser danner ikke molekyler! I stedet ordner ionene seg i et tredimensjonalt, regelmessig mønster kalt et **ionegitter** eller **krystallgitter**.

**Strukturen i NaCl-gitteret:**
- Hvert Na⁺-ion er omgitt av 6 Cl⁻-ioner
- Hvert Cl⁻-ion er omgitt av 6 Na⁺-ioner
- Mønsteret gjentas i alle retninger
- Det finnes ingen "NaCl-molekyler" - bare et kontinuerlig gitter

**Elektrostatisk tiltrekning:**
Bindingen skyldes tiltrekningen mellom motsatte ladninger. Denne kraften virker i alle retninger, noe som gir den sterke tredimensjonale strukturen.

**Gitterenergi:**
Energien som frigjøres når gassformige ioner danner fast ionegitter. Høy gitterenergi = sterk binding = høyt smeltepunkt.

Faktorer som påvirker gitterenergi:
- Høyere ladning → sterkere tiltrekning → høyere gitterenergi
- Mindre ioner → ionene kommer nærmere → høyere gitterenergi

MgO (Mg²⁺, O²⁻) har mye høyere smeltepunkt enn NaCl (Na⁺, Cl⁻) pga. høyere ladning.`,
    },
    {
      id: 'nat-vg1-4-3-ex-2',
      type: 'example',
      title: 'Sammenligne smeltepunkter',
      content: `**Problem:** Forklar hvorfor MgO har smeltepunkt 2852°C mens NaCl har smeltepunkt 801°C.

**Analyse:**

**NaCl:**
- Ioner: Na⁺ (ladning +1) og Cl⁻ (ladning -1)
- Relativt store ioner
- Moderat elektrostatisk tiltrekning

**MgO:**
- Ioner: Mg²⁺ (ladning +2) og O²⁻ (ladning -2)
- Mindre ioner enn Na⁺ og Cl⁻
- Mye sterkere elektrostatisk tiltrekning

**Forklaring:**
Elektrostatisk kraft avhenger av ladning og avstand:
F ∝ (ladning₁ × ladning₂) / avstand²

MgO har:
1. Dobbelt så høy ladning på begge ionene → 4 ganger sterkere tiltrekning
2. Mindre ioneavstand → enda sterkere tiltrekning

**Konklusjon:**
Den mye sterkere tiltrekningen i MgO krever mer energi å overvinne, så smeltepunktet er mye høyere.`,
    },
    {
      id: 'nat-vg1-4-3-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-3-exercise-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hvorfor fast natriumklorid ikke leder strøm, men smeltet eller løst NaCl gjør det.',
        hints: ['Hva kreves for elektrisk ledning?', 'Kan ionene bevege seg i fast stoff?'],
        solution: `Elektrisk ledning krever at ladede partikler kan bevege seg fritt.

**I fast NaCl:**
- Ionene (Na⁺ og Cl⁻) sitter fast i gitterstrukturene sine
- De kan vibrere litt, men ikke flytte seg
- Ingen bevegelige ladningsbærere → leder IKKE strøm

**I smeltet NaCl:**
- Gitteret er brutt ned
- Ionene kan bevege seg fritt som en væske
- Na⁺ beveger seg mot negativ pol, Cl⁻ mot positiv pol
- Bevegelige ladningsbærere → LEDER strøm

**I vannløsning av NaCl:**
- Vannmolekyler omgir ionene og trekker dem ut av gitteret
- Ionene beveger seg fritt i løsningen
- Bevegelige ladningsbærere → LEDER strøm`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-4-3-def-3',
      type: 'definition',
      title: 'Egenskaper til ioneforbindelser',
      content: `Ioneforbindelser har karakteristiske egenskaper som kan forklares ut fra ionegitteret:

**1. Høyt smeltepunkt og kokepunkt:**
- Sterk elektrostatisk tiltrekning mellom ionene
- Krever mye energi å bryte opp gitteret
- NaCl: 801°C, MgO: 2852°C

**2. Harde, men sprø:**
- Gitteret er stivt og motstandsdyktig mot riper
- Men hvis gitteret forskyves, kommer like ladninger ved siden av hverandre
- Frastøtning → gitteret sprekker

**3. Leder strøm når smeltet eller løst (elektrolytt):**
- I fast form: Ionene er fastlåst → ingen ledning
- Smeltet/løst: Ionene beveger seg fritt → leder strøm

**4. Ofte løselig i vann:**
- Polare vannmolekyler tiltrekker ionene
- Vann omgir ionene og trekker dem ut av gitteret
- Kalles hydratisering

**5. Krystallinske:**
- Det regelmessige gitteret gir krystaller med rette kanter og flater
- Karakteristiske krystallformer for ulike forbindelser`,
    },
    {
      id: 'nat-vg1-4-3-ex-3',
      type: 'example',
      title: 'Hvorfor er ioneforbindelser sprø?',
      content: `**Problem:** Forklar hvorfor NaCl-krystaller sprekker når man slår på dem, i stedet for å bøye seg som metaller.

**Gitterstrukturen:**
I NaCl-gitteret er hvert Na⁺ omgitt av Cl⁻, og omvendt. Ionene holdes på plass av elektrostatisk tiltrekning mellom motsatte ladninger.

**Hva skjer ved slag?**
Når man slår på krystallen, forskyves ett lag av ioner i forhold til et annet.

**Konsekvensen:**
Etter forskyvningen havner:
- Na⁺ ved siden av Na⁺ (frastøtning!)
- Cl⁻ ved siden av Cl⁻ (frastøtning!)

Like ladninger frastøter hverandre kraftig. Denne frastøtningen splitter gitteret, og krystallen sprekker.

**Sammenligning med metaller:**
I metaller kan atomene gli over hverandre uten at det oppstår frastøtning (elektronsjøen holder alt sammen). Derfor er metaller formbare mens ioneforbindelser er sprø.`,
    },
    {
      id: 'nat-vg1-4-3-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-3-exercise-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor løser NaCl seg lett i vann, men ikke i olje?',
        hints: ['Tenk på vannmolekylenes egenskaper', 'Hva er forskjellen på vann og olje?', 'Hva er hydratisering?'],
        solution: `NaCl løser seg i vann fordi vann er et polart løsemiddel:

**Vannmolekyler er polare:**
- Oksygensiden er delvis negativ (δ-)
- Hydrogensidene er delvis positive (δ+)

**Hydratisering:**
- Oksygensiden av vann tiltrekkes av Na⁺
- Hydrogensiden tiltrekkes av Cl⁻
- Vannmolekylene omgir ionene og trekker dem ut av gitteret
- Ionene blir "kledd" med vannmolekyler

**Olje er upolar:**
- Oljemolekyler har ikke ladningsfordeling
- De kan ikke tiltrekke ionene
- Kan ikke bryte opp ionegitteret
- NaCl løser seg ikke

**Tommelfingerregel:** "Like løser like"
- Polare stoffer løses i polare løsemidler
- Upolare stoffer løses i upolare løsemidler`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-4-3-summary',
      type: 'text',
      content: `## Oppsummering

**Ionebinding:**
- Dannes ved overføring av elektroner mellom metaller og ikke-metaller
- Metaller gir fra seg elektroner → positive kationer
- Ikke-metaller tar opp elektroner → negative anioner
- Begge oppnår edelgasskonfigurasjon

**Ionegitteret:**
- Ioner ordnet i regelmessig 3D-mønster
- Hvert ion omgitt av ioner med motsatt ladning
- Holdes sammen av elektrostatisk tiltrekning
- Ingen individuelle molekyler

**Egenskaper til ioneforbindelser:**
| Egenskap | Forklaring |
|----------|------------|
| Høyt smeltepunkt | Sterk tiltrekning mellom ioner |
| Sprø | Forskyvning gir frastøtning |
| Leder strøm (smeltet/løst) | Ioner kan bevege seg |
| Ofte vannløselig | Polare vannmolekyler hydratiserer ioner |
| Krystallinske | Regelmessig gitterstruktur |

**Formler:**
- Summen av ladninger må bli null
- Eksempel: Ca²⁺ + 2Cl⁻ → CaCl₂`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-4-3-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-3-exercise-5',
        number: '5',
        type: 'classic',
        task: 'Du har tre ukjente hvite pulvere: sukker, natriumklorid og melfin sand. Forklar hvordan du med et enkelt eksperiment kan identifisere natriumkloridet.',
        hints: ['Tenk på ioneforbindelsers spesielle egenskaper', 'Hva skjer når du løser dem i vann?'],
        solution: `Løs litt av hvert pulver i vann og test om løsningen leder strøm:

**Testen:**
Lag løsninger av hvert pulver i vann. Dypp to elektroder koblet til en lampe i hver løsning.

**Resultatene:**
- **Natriumklorid (NaCl):** Løser seg og leder strøm - lampen lyser! (Ioneforbindelse)
- **Sukker:** Løser seg, men leder IKKE strøm (molekylært stoff, ingen ioner)
- **Sand (SiO₂):** Løser seg ikke, leder ikke strøm

**Konklusjon:**
Det pulveret som løser seg i vann OG får lampen til å lyse, er natriumklorid. Ioneforbindelser leder strøm når de er løst fordi ionene kan bevege seg fritt.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-4-3-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-3-exercise-6',
        number: '6',
        type: 'classic',
        task: 'Lag en tabell som sammenligner disse tre ioneforbindelsene: NaCl, CaO og AlN. Inkluder: elektronkonfigurasjon før/etter, ionladninger, formel, og forutsi relativt smeltepunkt.',
        hints: ['Bruk periodesystemet for å finne elektronkonfigurasjoner', 'Høyere ladning = høyere smeltepunkt'],
        solution: `| | NaCl | CaO | AlN |
|------|------|-----|-----|
| **Metall** | Na (2,8,1) | Ca (2,8,8,2) | Al (2,8,3) |
| **Ikke-metall** | Cl (2,8,7) | O (2,6) | N (2,5) |
| **Kation** | Na⁺ (2,8) | Ca²⁺ (2,8,8) | Al³⁺ (2,8) |
| **Anion** | Cl⁻ (2,8,8) | O²⁻ (2,8) | N³⁻ (2,8) |
| **Formel** | NaCl | CaO | AlN |
| **Ladninger** | +1 og -1 | +2 og -2 | +3 og -3 |
| **Relativt smeltepunkt** | Lavest | Middels | Høyest |

**Forklaring:**
Smeltepunktet øker med ionladningen fordi elektrostatisk tiltrekning er sterkere mellom høyere ladede ioner. AlN (3+ og 3-) har mye sterkere binding enn NaCl (1+ og 1-).

Faktiske smeltepunkter: NaCl 801°C, CaO 2572°C, AlN 2200°C (sublimerer)`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_4_4: TextbookChapter = {
  id: 'nat-vg1-4-4',
  courseId: 'nat-vg1',
  chapterNumber: '4.4',
  title: 'Kovalent binding',
  description: 'Forstå kovalent binding, elektronparbinding og molekylstruktur.',
  estimatedMinutes: 75,
  competenceGoals: ['utforske og gjøre rede for sammenhenger mellom kjemiske bindinger og egenskaper til ulike stoffer'],
  content: [
    {
      id: 'nat-vg1-4-4-intro',
      type: 'text',
      content: `## Kovalent binding - deling av elektroner

Vann, sukkermolekyler, DNA, plast, og alle organiske forbindelser i kroppen din har én ting til felles: de holdes sammen av **kovalente bindinger**. Dette er den vanligste bindingstypen i naturen!

**Hva er kovalent binding?**
Kovalent binding oppstår når atomer **deler elektroner** med hverandre. I motsetning til ionebinding (der elektroner overføres), "eier" begge atomene elektronparet sammen.

**Når oppstår kovalent binding?**
- Typisk mellom ikke-metaller
- Når atomene har lik eller lignende elektronegativitet
- Når elektronoverføring ikke er energetisk gunstig

**Hvorfor deling?**
Ved å dele elektroner kan begge atomene oppnå edelgasskonfigurasjon i sitt ytterste skall. Det delte elektronparet "telles" for begge atomene!

**Læringsmål for dette kapittelet:**
- Forklare hvordan kovalente bindinger dannes
- Tegne Lewis-strukturer for enkle molekyler
- Skille mellom enkelt-, dobbelt- og trippelbindinger
- Forstå forskjellen mellom polare og upolare bindinger`,
    },
    {
      id: 'nat-vg1-4-4-def-1',
      type: 'definition',
      title: 'Dannelse av kovalent binding',
      content: `**Eksempel: Hydrogenmolekylet (H₂)**

Hvert hydrogenatom har 1 valenselektron, men trenger 2 for å fylle K-skallet (som helium).

**Løsningen:** To hydrogenatomer deler sine elektroner:
- H• + •H → H:H eller H-H

Nå "ser" hvert hydrogenatom 2 elektroner og har edelgasskonfigurasjon!

**Bindende elektronpar:**
Elektronparet som deles mellom atomene kalles et **bindende elektronpar**. Det holder atomene sammen fordi begge kjernene tiltrekker det samme elektronparet.

**Frie elektronpar (ensomme par):**
Elektronpar som IKKE deles, men tilhører bare ett atom. De påvirker molekylets form.

**Eksempel med frie elektronpar - Vann (H₂O):**
- Oksygen: 2, 6 (6 valenselektroner)
- 2 elektroner deles med 2 H-atomer (2 bindende par)
- 4 elektroner er frie elektronpar (2 frie par)
- Totalt rundt O: 2 + 2 + 4 = 8 (edelgasskonfigurasjon!)`,
    },
    {
      id: 'nat-vg1-4-4-ex-1',
      type: 'example',
      title: 'Tegne Lewis-struktur for vann (H₂O)',
      content: `**Problem:** Tegn Lewis-strukturen for vann.

**Steg 1: Tell valenselektroner**
- O: 6 valenselektroner
- H: 1 valenselektron × 2 = 2
- Totalt: 6 + 2 = 8 valenselektroner

**Steg 2: Velg sentralatom**
Oksygen er sentralatomet (har flest bindingsmuligheter).

**Steg 3: Tegn enkeltbindinger til H-atomene**
O forbindes med to H med enkeltbindinger.
H-O-H (bruker 4 elektroner)

**Steg 4: Fordel resterende elektroner**
8 - 4 = 4 elektroner igjen.
Disse plasseres som 2 frie elektronpar på oksygen.

**Resultat:**
    ..
H-O-H

Der de to prikkparene (..) representerer frie elektronpar.

**Sjekk oktettregel:**
- O: 2 bindinger × 2 + 2 frie par × 2 = 8 elektroner ✓
- H: 1 binding × 2 = 2 elektroner ✓ (duettregel for H)`,
    },
    {
      id: 'nat-vg1-4-4-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-4-exercise-1',
        number: '1',
        type: 'classic',
        task: 'Tegn Lewis-strukturen for ammoniakk (NH₃). Nitrogen har 5 valenselektroner og hydrogen har 1.',
        hints: ['Nitrogen er sentralatomet', 'Tell totalt antall valenselektroner', 'Nitrogen trenger 8 elektroner rundt seg'],
        solution: `Totalt valenselektroner: N(5) + 3×H(1) = 8

Lewis-struktur:
      H
      |
  H-N:
      |
      H

Eller tegnet med prikker:
      H
      |
  H-N-H
    :

- N har 3 bindende elektronpar (til H-atomene)
- N har 1 fritt elektronpar
- Totalt rundt N: 3×2 + 2 = 8 elektroner ✓
- Hvert H har 2 elektroner (duettregelen) ✓`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-4-4-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-4-exercise-2',
        number: '2',
        type: 'classic',
        task: 'Tegn Lewis-strukturen for metan (CH₄). Karbon har 4 valenselektroner.',
        hints: ['Karbon er sentralatomet', 'Karbon kan danne 4 bindinger'],
        solution: `Totalt valenselektroner: C(4) + 4×H(1) = 8

Lewis-struktur:
      H
      |
  H-C-H
      |
      H

- C har 4 bindende elektronpar (til H-atomene)
- C har 0 frie elektronpar
- Totalt rundt C: 4×2 = 8 elektroner ✓
- Hvert H har 2 elektroner ✓

Metan er et symmetrisk molekyl uten frie elektronpar på sentralatomet, så det har tetraederform i 3D.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-4-4-def-2',
      type: 'definition',
      title: 'Enkelt-, dobbelt- og trippelbindinger',
      content: `Atomer kan dele mer enn ett elektronpar:

**Enkeltbinding (σ-binding):**
- Deling av 1 elektronpar (2 elektroner)
- Tegnes med én strek: C-C, C-H, O-H
- Atomene kan rotere rundt bindingen
- Eksempler: H₂, H₂O, CH₄, C₂H₆ (etan)

**Dobbeltbinding (σ + π):**
- Deling av 2 elektronpar (4 elektroner)
- Tegnes med to streker: C=C, C=O, O=O
- Ingen fri rotasjon
- Sterkere og kortere enn enkeltbinding
- Eksempler: O₂, CO₂, C₂H₄ (eten)

**Trippelbinding (σ + 2π):**
- Deling av 3 elektronpar (6 elektroner)
- Tegnes med tre streker: N≡N, C≡C
- Sterkest og kortest
- Eksempler: N₂, C₂H₂ (etyn)

**Bindingsstyrke og lengde:**
| Bindingstype | Styrke | Lengde |
|--------------|--------|--------|
| Enkel | Svakest | Lengst |
| Dobbel | Middels | Middels |
| Trippel | Sterkest | Kortest |`,
    },
    {
      id: 'nat-vg1-4-4-ex-2',
      type: 'example',
      title: 'Lewis-struktur med dobbeltbinding - CO₂',
      content: `**Problem:** Tegn Lewis-strukturen for karbondioksid (CO₂).

**Steg 1: Tell valenselektroner**
- C: 4 valenselektroner
- O: 6 valenselektroner × 2 = 12
- Totalt: 4 + 12 = 16 valenselektroner

**Steg 2: Skjelett**
Karbon i midten, oksygen på hver side: O-C-O

**Steg 3: Prøv enkeltbindinger først**
O-C-O bruker 4 elektroner. 12 igjen.
Fordel på O: 6 på hver → O har 8, men C har bare 4!

**Steg 4: Bruk dobbeltbindinger**
O=C=O

Nå:
- Hver O-C binding deler 4 elektroner
- Hver O har i tillegg 2 frie par (4 elektroner)
- C: 4 + 4 = 8 ✓
- Hver O: 4 + 4 = 8 ✓

**Lewis-struktur:**
:O=C=O:

**Molekylets form:** Lineært (180°) fordi det ikke er frie elektronpar på karbon.`,
    },
    {
      id: 'nat-vg1-4-4-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-4-exercise-3',
        number: '3',
        type: 'classic',
        task: 'Tegn Lewis-strukturen for nitrogengass (N₂). Hvert nitrogen har 5 valenselektroner.',
        hints: ['Totalt 10 valenselektroner', 'Hvert N trenger 8 elektroner', 'Du trenger en trippelbinding'],
        solution: `Totalt valenselektroner: 2 × N(5) = 10

Prøver enkeltbinding: N-N (2 elektroner)
Gjenstår 8 elektroner, 4 på hver N.
Sjekk: Hver N har 2 + 4 = 6 elektroner. Ikke nok!

Prøver dobbeltbinding: N=N (4 elektroner)
Gjenstår 6 elektroner, 3 på hver N.
Sjekk: Hver N har 4 + 3 = 7 elektroner. Fortsatt ikke nok!

Trippelbinding: N≡N (6 elektroner)
Gjenstår 4 elektroner, 2 på hver N (1 fritt par hver).
Sjekk: Hver N har 6 + 2 = 8 elektroner ✓

**Lewis-struktur:** :N≡N:

Dette forklarer hvorfor N₂ er så stabilt - trippelbindingen er svært sterk!`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-4-4-def-3',
      type: 'definition',
      title: 'Polare og upolare kovalente bindinger',
      content: `**Elektronegativitet** bestemmer hvordan elektronene fordeles i en binding:

**Upolar kovalent binding:**
- Elektronene deles LIKT mellom atomene
- Oppstår når atomene har lik elektronegativitet
- Eksempler: H-H, Cl-Cl, O=O, N≡N
- Alle bindinger mellom like atomer er upolare

**Polar kovalent binding:**
- Elektronene deles ULIKT
- Det mest elektronegative atomet trekker elektronene mot seg
- Gir delvis ladningsforskjell (δ+ og δ-)
- Eksempler: H-Cl, O-H, N-H, C-O

**Elektronegativitetsskala (Pauling):**
- F: 4,0 (høyest)
- O: 3,5
- N: 3,0
- Cl: 3,0
- C: 2,5
- H: 2,1
- Na: 0,9 (lav)

**Tommelfingerregler:**
- Forskjell < 0,5: Upolar kovalent
- Forskjell 0,5-1,7: Polar kovalent
- Forskjell > 1,7: Ionebinding`,
    },
    {
      id: 'nat-vg1-4-4-ex-3',
      type: 'example',
      title: 'Polare bindinger i vann',
      content: `**Problem:** Forklar hvorfor vann er et polart molekyl.

**Analyse av O-H-bindingen:**
- Elektronegativitet O: 3,5
- Elektronegativitet H: 2,1
- Forskjell: 3,5 - 2,1 = 1,4 → Polar kovalent binding

**Hva skjer i bindingen:**
Oksygen trekker elektronparet mot seg. Dette gir:
- Oksygen en delvis negativ ladning (δ-)
- Hydrogen en delvis positiv ladning (δ+)

**Vannmolekylets form:**
Vann er vinklet (ca. 104,5°) på grunn av de to frie elektronparene på oksygen.

**Resultat:**
    δ-
     O
    / \\
  δ+H   Hδ+

Vannmolekylet har en "positiv side" (H-ene) og en "negativ side" (O). Dette gjør vann til et polart molekyl med en **dipol**.

**Konsekvenser:**
- Vann kan løse ioneforbindelser og polare stoffer
- Hydrogenbindinger mellom vannmolekyler
- Høyt kokepunkt for en så liten molekyl`,
    },
    {
      id: 'nat-vg1-4-4-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-4-exercise-4',
        number: '4',
        type: 'classic',
        task: 'Avgjør om følgende bindinger er upolare, polare kovalente, eller ioniske: a) C-H, b) Na-Cl, c) O-H, d) Cl-Cl, e) C-O',
        hints: ['Bruk elektronegativitetstabellen', 'Forskjell < 0,5: upolar, 0,5-1,7: polar kovalent, > 1,7: ionisk'],
        solution: `a) C-H: EN(C) = 2,5, EN(H) = 2,1
Forskjell = 0,4 → Upolar kovalent (eller svakt polar)

b) Na-Cl: EN(Na) = 0,9, EN(Cl) = 3,0
Forskjell = 2,1 → Ionisk

c) O-H: EN(O) = 3,5, EN(H) = 2,1
Forskjell = 1,4 → Polar kovalent

d) Cl-Cl: Samme atom
Forskjell = 0 → Upolar kovalent

e) C-O: EN(C) = 2,5, EN(O) = 3,5
Forskjell = 1,0 → Polar kovalent`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-4-4-def-4',
      type: 'definition',
      title: 'Egenskaper til kovalente forbindelser',
      content: `Kovalente forbindelser (molekylære stoffer) har typiske egenskaper:

**1. Lavt smelte- og kokepunkt:**
- Molekylene holdes sammen av svake intermolekylære krefter
- Ikke selve bindingene som brytes ved smelting
- Eksempel: Vann koker ved 100°C, metan ved -161°C

**2. Leder IKKE strøm:**
- Ingen frie ioner eller elektroner
- Verken fast eller flytende form leder strøm
- Unntak: Noen stoffer som ioniserer i vann (syrer)

**3. Varierende løselighet:**
- Polare molekyler løses i polare løsemidler (vann)
- Upolare molekyler løses i upolare løsemidler (olje, bensin)
- "Like løser like"

**4. Myke (som faste stoffer):**
- Svake krefter mellom molekylene
- Lett å skille molekylene

**5. Former diskrete molekyler:**
- I motsetning til ionegitter
- H₂O, CO₂, CH₄ er individuelle molekyler`,
    },
    {
      id: 'nat-vg1-4-4-summary',
      type: 'text',
      content: `## Oppsummering

**Kovalent binding:**
- Atomer deler elektronpar
- Typisk mellom ikke-metaller
- Begge atomene oppnår edelgasskonfigurasjon

**Lewis-strukturer:**
- Vis alle valenselektroner
- Bindende par mellom atomer
- Frie par på atomene
- Oktettregel: 8 elektroner rundt hvert atom (2 for H)

**Bindingstyper:**
| Type | Elektronpar | Styrke | Eksempler |
|------|-------------|--------|-----------|
| Enkelt | 1 | Svak | C-C, H-O |
| Dobbel | 2 | Middels | O=O, C=O |
| Trippel | 3 | Sterk | N≡N, C≡C |

**Polaritet:**
- Upolar: Like atomer eller lik elektronegativitet
- Polar: Ulikt elektronegativitet, δ+ og δ-
- Ionisk: Stor elektronegativitetsforskjell (>1,7)

**Egenskaper til molekylære stoffer:**
- Lavt smelte-/kokepunkt
- Leder ikke strøm
- "Like løser like"`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-4-4-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-4-exercise-5',
        number: '5',
        type: 'classic',
        task: 'Tegn Lewis-strukturene og forutsi om molekylene er polare eller upolare: a) HCl, b) CCl₄ (tetraederform), c) H₂S',
        hints: ['Tegn Lewis-strukturen først', 'Se på molekylets form', 'Er ladningsfordelingen symmetrisk?'],
        solution: `a) HCl:
Lewis: H-Cl: (Cl har 3 frie par)
Polar binding (EN-forskjell = 0,9)
Lineært molekyl, asymmetrisk → Polart molekyl

b) CCl₄:
Lewis: Cl-C-Cl med 4 Cl rundt C i tetraederform
Alle C-Cl bindinger er polare
MEN: Symmetrisk tetraeder → dipolene kansellerer
→ Upolart molekyl

c) H₂S:
Lewis: H-S-H med 2 frie par på S
S-H bindinger er polare
Vinklet form (som vann)
→ Polart molekyl

Nøkkel: Både binding og molekylform bestemmer polaritet!`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-4-4-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-4-exercise-6',
        number: '6',
        type: 'classic',
        task: 'Sammenlign ionebinding og kovalent binding. Lag en tabell som viser: mellom hvilke atomtyper de dannes, hvordan elektroner fordeles, typiske egenskaper til stoffene, og gi et eksempel på hver.',
        solution: `| Egenskap | Ionebinding | Kovalent binding |
|----------|-------------|------------------|
| **Mellom** | Metall + ikke-metall | Ikke-metall + ikke-metall |
| **Elektroner** | Overføres | Deles |
| **Struktur** | Ionegitter (3D) | Diskrete molekyler |
| **Smeltepunkt** | Høyt (f.eks. 801°C) | Lavt (f.eks. -161°C til 100°C) |
| **Ledningsevne** | Ja (smeltet/løst) | Nei |
| **Løselighet** | Ofte i vann | Avhenger av polaritet |
| **Hardhet** | Hard, men sprø | Myk eller gass |
| **Eksempel** | NaCl (salt) | H₂O (vann), CH₄ (metan) |

Hovedforskjellen er at ioneforbindelser danner utstrakte gitterstrukturer med sterke bindinger i alle retninger, mens kovalente forbindelser danner individuelle molekyler med sterke bindinger innad, men svake krefter mellom molekylene.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_4_5: TextbookChapter = {
  id: 'nat-vg1-4-5',
  courseId: 'nat-vg1',
  chapterNumber: '4.5',
  title: 'Metallbinding og stoffers egenskaper',
  description: 'Lær om metallbinding og sammenhengen mellom bindingstype og stoffegenskaper.',
  estimatedMinutes: 70,
  competenceGoals: ['utforske og gjøre rede for sammenhenger mellom kjemiske bindinger og egenskaper til ulike stoffer'],
  content: [
    {
      id: 'nat-vg1-4-5-intro',
      type: 'text',
      content: `## Metallbinding - elektroner i fellesskap

Metaller omgir oss overalt - fra jernkonstruksjoner i bygninger til kobberledninger i veggen og gull i smykker. De har unike egenskaper som gjør dem uunnværlige i moderne teknologi. Men hva er det som gir metaller disse spesielle egenskapene?

**Hva er metallbinding?**
I metaller deles valenselektronene av **alle atomene** i metallet. Elektronene "tilhører" ikke enkeltatomene lenger, men beveger seg fritt gjennom hele metallstykket som et "elektronsjø" eller "elektrongass".

**Metallbindingsmodellen:**
- Positive metallioner (atomkjerner minus valenselektroner) i et ordnet gitter
- Valenselektronene beveger seg fritt mellom ionene
- Elektrostatisk tiltrekning mellom positive ioner og negative elektronsjø holder metallet sammen

**Læringsmål for dette kapittelet:**
- Forklare metallbindingsmodellen med elektronsjø
- Forstå hvordan metallbinding forklarer metallers egenskaper
- Sammenligne alle tre bindingstyper
- Forutsi stoffegenskaper basert på bindingstype`,
    },
    {
      id: 'nat-vg1-4-5-def-1',
      type: 'definition',
      title: 'Elektronsjø-modellen',
      content: `**Modellen:**
Tenk deg et metallstykke som en ordnet struktur av positive ioner "svømmende" i et sjø av delokaliserte (fritt bevegelige) elektroner.

**Eksempel - Natrium (Na):**
- Hvert Na-atom har 1 valenselektron
- I fast natrium: Na⁺-ioner i gitter + frie elektroner
- Valenselektronene tilhører ikke lenger enkeltatomene

**Eksempel - Magnesium (Mg):**
- Hvert Mg-atom har 2 valenselektroner
- Mg²⁺-ioner + dobbelt så mange frie elektroner per atom
- Sterkere metallbinding (flere elektroner i sjøet)

**Bindingsstyrke:**
Metallbindingen er sterkere når:
- Flere valenselektroner (større elektronsjø)
- Mindre ionradius (ionene kommer nærmere elektronene)
- Høyere ioneladning

**Eksempel på trend:**
Na < Mg < Al i bindingsstyrke
- Na⁺ med 1 e⁻ per atom
- Mg²⁺ med 2 e⁻ per atom
- Al³⁺ med 3 e⁻ per atom

Dette forklarer smeltepunktene: Na (98°C) < Mg (650°C) < Al (660°C)`,
    },
    {
      id: 'nat-vg1-4-5-ex-1',
      type: 'example',
      title: 'Hvorfor leder metaller strøm?',
      content: `**Problem:** Forklar hvorfor kobbertråd brukes i elektriske ledninger.

**Metallbindingen i kobber:**
- Cu-atomer gir fra seg valenselektroner
- Cu⁺ eller Cu²⁺ ioner i et ordnet gitter
- Frie elektroner beveger seg gjennom metallet

**Hva skjer ved strømledning:**
1. En spenningskilde kobles til kobbertråden
2. Den skaper et elektrisk felt gjennom tråden
3. De frie elektronene begynner å bevege seg i feltet
4. Elektronene "dytter" hverandre gjennom metallet
5. Dette er elektrisk strøm!

**Hvorfor kobber spesielt?**
- Kobber har mange frie elektroner
- Lav motstand mot elektronenes bevegelse
- God leder (bare sølv er bedre)
- Relativt billig og formbart

**Sammenligning:**
- Metaller: Frie elektroner → leder strøm alltid
- Ioneforbindelser: Fastlåste ioner → leder bare smeltet/løst
- Kovalente stoffer: Ingen frie ladninger → leder ikke`,
    },
    {
      id: 'nat-vg1-4-5-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-5-exercise-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hvorfor metaller er gode varmeledere.',
        hints: ['Tenk på de frie elektronene', 'Hva skjer med elektroner når de varmes opp?', 'Hvordan overføres energien?'],
        solution: `Metaller er gode varmeledere på grunn av de frie elektronene:

1. Når én ende av et metallstykke varmes opp, får elektronene der mer kinetisk energi (beveger seg raskere).

2. Disse raske elektronene kolliderer med andre elektroner og metallioner.

3. Ved kollisjonene overføres energi til nabopartiklene.

4. De frie elektronene kan bevege seg raskt gjennom hele metallet og sprer varmen effektivt.

5. I tillegg vibrerer metallionene og overfører energi til naboer.

Sammenligning:
- I ikke-metaller må energien overføres fra atom til atom gjennom bindingene - mye langsommere prosess.
- Metallers frie elektroner er som "energikurerer" som raskt transporterer varme gjennom materialet.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-4-5-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-5-exercise-2',
        number: '2',
        type: 'classic',
        task: 'Natrium (Na), magnesium (Mg) og aluminium (Al) har smeltepunkter på henholdsvis 98°C, 650°C og 660°C. Forklar trenden med utgangspunkt i metallbindingen.',
        hints: ['Hvor mange valenselektroner har hvert metall?', 'Hvordan påvirker dette elektronsjøet?', 'Tenk på ladningen til ionene'],
        solution: `Trenden i smeltepunkter: Na (98°C) < Mg (650°C) < Al (660°C)

Forklaring:
- Na: 1 valenselektron → Na⁺-ioner + tynt elektronsjø
- Mg: 2 valenselektroner → Mg²⁺-ioner + tettere elektronsjø
- Al: 3 valenselektroner → Al³⁺-ioner + tettest elektronsjø

Sterkere metallbinding når:
1. Flere elektroner i sjøet (3 > 2 > 1)
2. Høyere ladning på ionene (3+ > 2+ > 1+)
3. Mindre ioner (Al³⁺ < Mg²⁺ < Na⁺)

Alle tre faktorene gjør at Al har sterkest metallbinding, deretter Mg, og Na har svakest. Sterkere binding = høyere smeltepunkt fordi det kreves mer energi å frigjøre ionene fra elektronsjøet.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-4-5-def-2',
      type: 'definition',
      title: 'Metallers egenskaper forklart',
      content: `Alle typiske metallegenskaper kan forklares med elektronsjø-modellen:

**1. Elektrisk ledningsevne:**
- Frie elektroner kan bevege seg under påvirkning av spenning
- Elektroner transporterer ladning gjennom metallet

**2. Varmeledningsevne:**
- Frie elektroner transporterer kinetisk energi
- Rask spredning av varme gjennom materialet

**3. Metallglans:**
- Frie elektroner absorberer og re-emitterer lys
- Gir den karakteristiske blanke, reflekterende overflaten

**4. Formbarhet (duktilitet og malleabilitet):**
- Kan trekkes til tråder (duktil) og hamres til plater (malleabel)
- Metallioner kan gli over hverandre uten at bindingen brytes
- Elektronsjøet "følger med" og holder alt sammen

**5. Høyt smeltepunkt (varierer):**
- Sterk elektrostatisk tiltrekning mellom ioner og elektroner
- Varierer med antall valenselektroner og ionstørrelse

**6. Faste ved romtemperatur:**
- Unntatt: Kvikksølv (Hg), flytende ned til -39°C
- De fleste metaller har smeltepunkt godt over 100°C`,
    },
    {
      id: 'nat-vg1-4-5-ex-2',
      type: 'example',
      title: 'Hvorfor er metaller formbare mens ioneforbindelser er sprø?',
      content: `**Problem:** Sammenlign hva som skjer når man slår på et metallstykke versus en ionekrystall.

**I metaller:**
1. Kraften fra slaget forskyver et lag av metallioner
2. Ionene glir over til nye posisjoner
3. Elektronsjøet "flyter" med og tilpasser seg
4. Tiltrekningen mellom ioner og elektroner opprettholdes
5. Metallet bøyes eller flates ut - men bryter ikke

**I ioneforbindelser (f.eks. NaCl):**
1. Kraften fra slaget forskyver et lag av ioner
2. Nå havner Na⁺ ved siden av Na⁺, og Cl⁻ ved siden av Cl⁻
3. Like ladninger frastøter hverandre kraftig
4. Frastøtningen splitter gitteret
5. Krystallen knekker!

**Illustrasjon av forskjellen:**

Metall: [+][+][+]    →   [+][+][+]   (Glir, elektronsjøet følger med)
        [e⁻][e⁻][e⁻]      [e⁻][e⁻][e⁻]

Ionegitter: [+][-][+]  →  [+][+][-]  (KRASJ! Like ladninger møtes)
            [-][+][-]      [-][-][+]`,
    },
    {
      id: 'nat-vg1-4-5-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-5-exercise-3',
        number: '3',
        type: 'classic',
        task: 'Gull kan hamres ut til bladgull som er bare noen få atomer tykt. Forklar denne ekstreme formbarheten med metallbinding.',
        hints: ['Tenk på hva som skjer når atomlagene forskyves', 'Hvorfor bryter ikke bindingene?'],
        solution: `Gull er ekstremt formbart (det mest formbare av alle metaller) på grunn av metallbindingen:

1. **Elektronsjøet:** Gullatomer deler sine valenselektroner i et felles elektronsjø. Au⁺-ionene "svømmer" i dette sjøet.

2. **Ved hamring:** Når man slår på gullet, forskyves lag av Au⁺-ioner i forhold til hverandre.

3. **Elektronsjøet tilpasser seg:** De frie elektronene er ikke bundet til bestemte posisjoner. De "flyter" med og fyller hele det nye volumet.

4. **Bindingen opprettholdes:** Tiltrekningen mellom positive Au⁺-ioner og negative elektroner fortsetter å holde metallet sammen, uansett form.

5. **Ingen frastøtning:** I motsetning til ioneforbindelser kommer aldri like ladninger ved siden av hverandre.

Resultatet: Gull kan hamres ut til ekstremt tynne flak (bladgull) uten å bryte. Ett gram gull kan dekke nesten 1 m²!`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-4-5-def-3',
      type: 'definition',
      title: 'Sammenligning av alle tre bindingstyper',
      content: `| Egenskap | Ionebinding | Kovalent binding | Metallbinding |
|----------|-------------|------------------|---------------|
| **Mellom** | Metall + ikke-metall | Ikke-metaller | Metaller |
| **Elektroner** | Overføres | Deles i par | Felles sjø |
| **Struktur** | Ionegitter | Molekyler | Metallgitter |
| **Smeltepunkt** | Høyt | Lavt-middels | Varierer (oftest høyt) |
| **Kokepunkt** | Svært høyt | Lavt | Svært høyt |
| **Ledningsevne fast** | Nei | Nei | Ja |
| **Ledningsevne smeltet** | Ja | Nei | Ja |
| **Hardhet** | Hard, sprø | Myk eller gass | Hard, formbar |
| **Løselighet i vann** | Ofte ja | Avhenger av polaritet | Nei |
| **Eksempler** | NaCl, MgO, CaF₂ | H₂O, CO₂, CH₄ | Fe, Cu, Al, Au |

**Huske-tips:**
- **Ionebinding:** "Gi og ta" - elektroner overføres
- **Kovalent:** "Deling er bra" - elektroner deles i par
- **Metall:** "Alle for én" - elektroner deles av alle`,
    },
    {
      id: 'nat-vg1-4-5-ex-3',
      type: 'example',
      title: 'Bestemme bindingstype fra egenskaper',
      content: `**Problem:** Et ukjent stoff har følgende egenskaper:
- Smeltepunkt: 1535°C
- Leder strøm som fast stoff
- Glinsende
- Kan trekkes til tråd

Hvilken bindingstype har stoffet?

**Analyse:**

**Høyt smeltepunkt (1535°C):**
- Utelukker IKKE noen bindingstype direkte
- Ioneforbindelser og metaller har ofte høye smeltepunkter

**Leder strøm som fast stoff:**
- Ioneforbindelser: NEI (leder bare smeltet/løst)
- Kovalente stoffer: NEI
- Metaller: JA ✓

**Glinsende:**
- Typisk for metaller ✓

**Kan trekkes til tråd (duktil):**
- Ioneforbindelser: NEI (sprø)
- Kovalente stoffer: NEI
- Metaller: JA ✓

**Konklusjon:** Stoffet er et metall med metallbinding.

Med smeltepunkt 1535°C er det sannsynligvis jern (Fe)!`,
    },
    {
      id: 'nat-vg1-4-5-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-5-exercise-4',
        number: '4',
        type: 'classic',
        task: 'Identifiser bindingstypen og forutsi egenskapene for: a) MgO, b) CO₂, c) Fe',
        hints: ['Se på hvilke atomtyper som inngår', 'Bruk tabellen for bindingstyper'],
        solution: `a) MgO (Magnesiumoksid):
- Mg er metall, O er ikke-metall → Ionebinding
- Egenskaper: Høyt smeltepunkt (2852°C), løselig i vann, leder strøm når smeltet/løst, hard men sprø, krystallinsk

b) CO₂ (Karbondioksid):
- C og O er begge ikke-metaller → Kovalent binding
- Egenskaper: Lavt smeltepunkt (-78°C sublimerer), gass ved romtemperatur, leder ikke strøm, løselig i vann (danner kullsyre)

c) Fe (Jern):
- Rent grunnstoff, metall → Metallbinding
- Egenskaper: Høyt smeltepunkt (1535°C), leder strøm alltid, glinsende, formbart, magnetisk, løses ikke i vann`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-4-5-summary',
      type: 'text',
      content: `## Oppsummering

**Metallbinding:**
- Valenselektroner deles av ALLE atomer (elektronsjø)
- Positive metallioner i gitter, omgitt av frie elektroner
- Elektrostatisk tiltrekning holder metallet sammen

**Metallers egenskaper forklart:**
| Egenskap | Forklaring |
|----------|------------|
| Leder strøm | Frie elektroner beveger seg |
| Leder varme | Elektroner transporterer energi |
| Glinsende | Elektroner absorberer/re-emitterer lys |
| Formbar | Ioner glir, elektronsjøet følger med |
| Høyt smeltepunkt | Sterk tiltrekning ion-elektron |

**De tre bindingstypene:**
- **Ionebinding:** Elektronoverføring, høyt smeltepunkt, sprø
- **Kovalent:** Elektrondeling, lavt smeltepunkt, molekyler
- **Metall:** Elektronsjø, leder strøm, formbar

**Gjenkjenne bindingstype:**
1. Se på atomtypene som inngår
2. Observer egenskapene (ledningsevne, smeltepunkt, hardhet)
3. Bruk sammenligningstabell`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-4-5-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-5-exercise-5',
        number: '5',
        type: 'classic',
        task: 'Du har tre ukjente faste stoffer. Du gjør følgende observasjoner:\n- Stoff A: Leder strøm, kan bøyes\n- Stoff B: Leder ikke strøm, men løsningen i vann leder strøm\n- Stoff C: Leder ikke strøm, løses ikke i vann\n\nIdentifiser bindingstypen for hvert stoff.',
        hints: ['Hvilken bindingstype leder strøm som fast stoff?', 'Hvilken bindingstype leder strøm bare i løsning?', 'Hvilken bindingstype er uløselig og leder aldri?'],
        solution: `Stoff A: METALLBINDING
- Leder strøm som fast stoff → Må være metall
- Kan bøyes → Bekrefter formbarhet typisk for metaller
- Eksempel: Kobber, jern, aluminium

Stoff B: IONEBINDING
- Leder ikke strøm som fast stoff → Kan være ione- eller kovalent
- Løsningen leder strøm → Ioner frigjøres i vann → Ioneforbindelse
- Eksempel: NaCl, KBr, CaCl₂

Stoff C: KOVALENT BINDING
- Leder ikke strøm → Ikke metall
- Løses ikke i vann → Trolig upolar kovalent forbindelse
- Eksempel: Parafin, plast, svovel (S₈)`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-4-5-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-5-exercise-6',
        number: '6',
        type: 'classic',
        task: 'Oppsummer hele kapittelet om bindinger ved å fylle ut en tabell som sammenligner ionebinding, kovalent binding og metallbinding med hensyn til: a) Hvilke atomtyper, b) Hva som skjer med elektronene, c) Struktur, d) Tre typiske egenskaper, e) Et eksempel.',
        solution: `| | Ionebinding | Kovalent binding | Metallbinding |
|---|-------------|------------------|---------------|
| **a) Atomtyper** | Metall + ikke-metall | Ikke-metall + ikke-metall | Metall + metall |
| **b) Elektroner** | Overføres fra metall til ikke-metall | Deles i par mellom atomer | Deles i felles elektronsjø |
| **c) Struktur** | 3D ionegitter, ingen molekyler | Diskrete molekyler | Metallgitter med elektronsjø |
| **d) Egenskap 1** | Høyt smeltepunkt | Lavt smeltepunkt | Leder strøm (fast) |
| **d) Egenskap 2** | Sprø | Myk/gass | Formbar |
| **d) Egenskap 3** | Leder strøm smeltet/løst | Leder ikke strøm | Glinsende |
| **e) Eksempel** | NaCl (salt) | H₂O (vann) | Cu (kobber) |

**Hovedforskjell i én setning:**
- Ionebinding: Elektroner flyttes permanent
- Kovalent: Elektroner deles mellom to atomer
- Metall: Elektroner deles mellom ALLE atomer`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// Export alle kapitler fra del 2
export const NAT_VG1_CHAPTERS_DEL2 = [
  CHAPTER_NAT_VG1_3_1,
  CHAPTER_NAT_VG1_3_2,
  CHAPTER_NAT_VG1_3_3,
  CHAPTER_NAT_VG1_3_4,
  CHAPTER_NAT_VG1_4_1,
  CHAPTER_NAT_VG1_4_2,
  CHAPTER_NAT_VG1_4_3,
  CHAPTER_NAT_VG1_4_4,
  CHAPTER_NAT_VG1_4_5,
];
