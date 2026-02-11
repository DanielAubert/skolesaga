/**
 * Økonomi og driftsledelse VG3 - Del 3: Produksjon og logistikk
 * Kapittel 3.1-3.5
 *
 * Dekker LK20 kompetansemål:
 * - planlegge og gjennomføre produksjon av varer og tjenester
 * - vurdere og bruke ulike metoder for lagerstyring og innkjøp
 * - analysere verdikjeden og vurdere logistikkløsninger
 * - gjøre rede for lean-prinsipper og kontinuerlig forbedring
 * - drøfte sammenhengen mellom produksjon, logistikk og lønnsomhet
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1: Produksjonsplanlegging
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_3_1: TextbookChapter = {
  id: 'okonomi-drift-3-1',
  courseId: 'okonomi-drift',
  chapterNumber: '3.1',
  title: 'Produksjonsplanlegging',
  description: 'Lær om kapasitetsplanlegging, gjennomløpstid og flaskehalser i produksjonen. Du får innsikt i hvordan bedrifter planlegger og styrer produksjonen for å utnytte ressursene best mulig.',
  estimatedMinutes: 45,
  competenceGoals: ['planlegge og gjennomføre produksjon av varer og tjenester'],
  content: [
    {
      id: 'od-3-1-intro',
      type: 'text',
      content: `## Hva er produksjonsplanlegging?

Produksjonsplanlegging handler om å bestemme hva som skal produseres, hvor mye, når og med hvilke ressurser. God planlegging er avgjørende for å levere riktig kvalitet til riktig tid, uten unødvendig ressursbruk.

I dette kapittelet skal du lære:
- Hva kapasitet er og hvordan den beregnes
- Hva gjennomløpstid betyr i en produksjonsprosess
- Hvordan flaskehalser oppstår og hvordan de kan håndteres
- Forskjellen mellom ulike produksjonsmetoder`,
    },
    {
      id: 'od-3-1-def-1',
      type: 'definition',
      title: 'Produksjonsplanlegging',
      content: `**Produksjonsplanlegging** er prosessen med å bestemme hva som skal produseres, i hvilke mengder, til hvilken tid og med hvilke ressurser. Målet er å sikre at bedriften kan møte etterspørselen på en kostnadseffektiv måte.`,
    },
    {
      id: 'od-3-1-text-1',
      type: 'text',
      content: `### Produksjonsmetoder

Bedrifter kan organisere produksjonen på ulike måter, avhengig av produkttype, volum og kundekrav:

**Ordreproduksjon (make-to-order)**
- Produksjonen starter først når kunden bestiller
- Skreddersydd til kundens behov
- Lengre leveringstid, men lite lagerkostnader
- Eksempel: Spesialtilpassede møbler, bryllupskaker

**Lagerproduksjon (make-to-stock)**
- Produserer til lager basert på prognoser
- Standardiserte produkter
- Kort leveringstid, men risiko for overproduksjon
- Eksempel: Dagligvarer, klær i standardstørrelser

**Serieproduksjon**
- Produserer et visst antall av ett produkt før man bytter til et annet
- Balanse mellom fleksibilitet og effektivitet
- Eksempel: Bakeri som baker ulike brødtyper i serier

**Kontinuerlig produksjon**
- Produksjonen går døgnet rundt uten avbrudd
- Svært standardiserte produkter i store volum
- Eksempel: Oljraffinering, papirproduksjon`,
    },
    {
      id: 'od-3-1-def-2',
      type: 'definition',
      title: 'Kapasitet',
      content: `**Kapasitet** er den maksimale mengden produkter eller tjenester en bedrift kan produsere i en gitt tidsperiode med tilgjengelige ressurser. Vi skiller mellom **teoretisk kapasitet** (maks under ideelle forhold) og **praktisk kapasitet** (maks når vi tar hensyn til vedlikehold, pauser og andre realistiske begrensninger).`,
    },
    {
      id: 'od-3-1-text-2',
      type: 'text',
      content: `### Kapasitetsberegning

Kapasitetsutnyttelse viser hvor stor andel av den tilgjengelige kapasiteten som faktisk brukes:

$$\\text{Kapasitetsutnyttelse} = \\frac{\\text{Faktisk produksjon}}{\\text{Maksimal kapasitet}} \\times 100\\%$$

En kapasitetsutnyttelse på 100 % høres ideelt ut, men i praksis bør bedriften ha noe ledig kapasitet for å:
- Håndtere uventet etterspørsel
- Gjennomføre vedlikehold
- Takle fravær og uforutsette hendelser

En kapasitetsutnyttelse på **80-90 %** regnes ofte som optimalt for de fleste bedrifter.`,
    },
    {
      id: 'od-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Kapasitetsutnyttelse',
      problem: 'En møbelfabrikk kan maksimalt produsere 200 stoler per uke. Forrige uke produserte de 160 stoler. Beregn kapasitetsutnyttelsen.',
      solution: `**Løsning:**

$$\\text{Kapasitetsutnyttelse} = \\frac{160}{200} \\times 100\\% = 80\\%$$

Fabrikken utnytter 80 % av kapasiteten, noe som gir rom for å ta imot ekstra bestillinger eller gjennomføre vedlikehold.`,
    },
    {
      id: 'od-3-1-def-3',
      type: 'definition',
      title: 'Gjennomløpstid',
      content: `**Gjennomløpstid** er den totale tiden det tar fra en produksjonsordre starter til det ferdige produktet er klart. Den inkluderer bearbeidingstid, ventetid, transporttid og eventuell inspeksjonstid. Kortere gjennomløpstid gir raskere levering og lavere kapitalbinding.`,
    },
    {
      id: 'od-3-1-text-3',
      type: 'text',
      content: `### Gjennomløpstid i praksis

Gjennomløpstiden består av flere elementer:

| Tidselement | Beskrivelse | Eksempel |
|------------|-------------|----------|
| **Bearbeidingstid** | Tid brukt på selve produksjonen | Saging, montering, maling |
| **Ventetid** | Tid produktet venter mellom operasjoner | Kø foran neste maskin |
| **Transporttid** | Tid for å flytte mellom stasjoner | Fra saging til montering |
| **Inspeksjonstid** | Tid for kvalitetskontroll | Sjekk av mål og finish |

I mange bedrifter utgjør bearbeidingstiden bare **5-10 %** av den totale gjennomløpstiden. Resten er ventetid og transport. Det betyr at det finnes store muligheter for forbedring ved å redusere ventetiden.`,
    },
    {
      id: 'od-3-1-def-4',
      type: 'definition',
      title: 'Flaskehals',
      content: `En **flaskehals** er det steget i produksjonsprosessen som har lavest kapasitet og dermed begrenser den totale produksjonen. Uansett hvor raskt de andre stegene arbeider, kan den samlede produksjonen aldri gå raskere enn flaskehalsen.`,
    },
    {
      id: 'od-3-1-text-4',
      type: 'text',
      content: `### Flaskehalsanalyse

Å identifisere og håndtere flaskehalser er sentralt i produksjonsplanlegging:

**Kjennetegn på en flaskehals:**
- Arbeid hoper seg opp foran dette steget
- Etterfølgende steg har ledig kapasitet
- Små forsinkelser her gir store forsinkelser totalt

**Strategier for å håndtere flaskehalser:**
1. **Øke kapasiteten** - investere i mer utstyr eller flere ansatte
2. **Redusere nedetid** - bedre vedlikehold, færre omstillinger
3. **Flytte arbeid** - overføre oppgaver til andre steg med ledig kapasitet
4. **Outsource** - sette ut flaskehalsarbeidet til underleverandører
5. **Endre produktdesign** - forenkle operasjonen i flaskehalsen`,
    },
    {
      id: 'od-3-1-example-2',
      type: 'example',
      title: 'Eksempel: Identifisering av flaskehals',
      problem: 'En sjokoladefabrikk har tre produksjonssteg: Blanding (100 kg/time), Støping (60 kg/time) og Pakking (90 kg/time). Hvor er flaskehalsen, og hva er fabrikkens totale kapasitet?',
      solution: `**Løsning:**

Kapasiteten til hvert steg:
- Blanding: 100 kg/time
- Støping: **60 kg/time** (lavest)
- Pakking: 90 kg/time

**Flaskehalsen er støping** med 60 kg/time. Fabrikkens totale kapasitet kan aldri overstige 60 kg/time, uansett hvor raskt de andre stegene jobber.

For å øke total produksjon må bedriften enten investere i mer støpekapasitet, effektivisere støpeprosessen, eller finne måter å omgå flaskehalsen på.`,
    },
    {
      id: 'od-3-1-tip-1',
      type: 'tip',
      title: 'Viktig om flaskehalser',
      content: `Husk at flaskehalsen kan flytte seg. Hvis du øker kapasiteten i støpingen fra 60 til 120 kg/time, blir pakking (90 kg/time) den nye flaskehalsen. Forbedring er en kontinuerlig prosess der du alltid jobber med den svakeste lenken i kjeden.`,
    },
    {
      id: 'od-3-1-text-5',
      type: 'text',
      content: `### Produksjonsplanens elementer

En god produksjonsplan inneholder:

**1. Etterspørselsprognose**
- Hvor mye forventer vi å selge?
- Sesongvariasjoner og trender
- Kundeavtaler og bestillinger

**2. Kapasitetsplan**
- Har vi nok kapasitet til å møte etterspørselen?
- Behov for overtid, skiftarbeid eller nye investeringer
- Vedlikeholdsplaner

**3. Materialplan**
- Hvilke råvarer og komponenter trengs?
- Når må de bestilles?
- Hvem er leverandørene?

**4. Tidsplan**
- Når skal de ulike ordrene produseres?
- Prioritering mellom ordrer
- Leveringsfrister`,
    },
    {
      id: 'od-3-1-text-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Produksjonsplanlegging** handler om å bestemme hva, hvor mye, når og med hvilke ressurser
- **Kapasitet** er maks produksjon i en gitt periode; praktisk kapasitet er lavere enn teoretisk
- **Gjennomløpstid** er total tid fra ordrestart til ferdig produkt
- **Flaskehalser** begrenser den totale produksjonen og må identifiseres og håndteres

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Kapasitetsutnyttelse | Andel av maks kapasitet som brukes |
| Gjennomløpstid | Total tid gjennom produksjonsprosessen |
| Flaskehals | Steget med lavest kapasitet |
| Ordreproduksjon | Produksjon etter kundebestilling |
| Lagerproduksjon | Produksjon til lager basert på prognoser |`,
    },
    // ========== OPPGAVER ==========
    {
      id: 'od-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'od-3-1-ex-1',
        number: '3.1.1',
        type: 'multiple-choice',
        task: 'Hva er en flaskehals i produksjonssammenheng?',
        options: [
          { id: 'a', text: 'Det steget i prosessen som har høyest kapasitet', isCorrect: false },
          { id: 'b', text: 'Det steget i prosessen som har lavest kapasitet og begrenser total produksjon', isCorrect: true },
          { id: 'c', text: 'Et steg der det oppstår kvalitetsproblemer', isCorrect: false },
          { id: 'd', text: 'Det siste steget i produksjonsprosessen', isCorrect: false },
        ],
        solution: 'En flaskehals er det steget med lavest kapasitet. Det begrenser hele produksjonslinjen fordi de øvrige stegene ikke kan produsere mer enn det flaskehalsen klarer å behandle.',
      },
    },
    {
      id: 'od-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'od-3-1-ex-2',
        number: '3.1.2',
        type: 'classic',
        task: 'En elektronikkfabrikk kan maksimalt produsere 500 enheter per dag. Mandag ble det produsert 425 enheter. Beregn kapasitetsutnyttelsen og vurder om den er tilfredsstillende.',
        hints: ['Bruk formelen: Kapasitetsutnyttelse = (Faktisk produksjon / Maks kapasitet) x 100 %'],
        solution: 'Kapasitetsutnyttelse = (425 / 500) x 100 % = 85 %. Dette er en god kapasitetsutnyttelse. Den ligger i det optimale området (80-90 %), som gir rom for å håndtere uventet etterspørsel, vedlikehold og uforutsette hendelser, uten at for mye kapasitet står ubrukt.',
      },
    },
    {
      id: 'od-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'od-3-1-ex-3',
        number: '3.1.3',
        type: 'classic',
        task: 'Forklar forskjellen mellom ordreproduksjon og lagerproduksjon. Gi ett eksempel på en bedrift som passer til hver metode.',
        solution: 'Ordreproduksjon betyr at produksjonen ikke starter før kunden har bestilt. Det passer for skreddersydde produkter som spesialmøbler, bryllupskaker eller skreddersydde dresser. Fordelene er lite lager og tilpasning til kunden, men leveringstiden blir lengre. Lagerproduksjon betyr at man produserer til lager basert på prognoser. Det passer for standardiserte produkter med stabil etterspørsel, som melk, brød eller bøker. Fordelene er kort leveringstid, men det er risiko for overproduksjon og høye lagerkostnader.',
      },
    },
    {
      id: 'od-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'od-3-1-ex-4',
        number: '3.1.4',
        type: 'classic',
        task: 'En produksjonslinje har fire steg med følgende kapasiteter: Kutting (80 enheter/time), Sveising (50 enheter/time), Lakkering (70 enheter/time), Montering (90 enheter/time).',
        subTasks: [
          {
            label: 'a',
            task: 'Identifiser flaskehalsen i produksjonslinjen.',
            solution: 'Flaskehalsen er sveising med 50 enheter/time, som er det steget med lavest kapasitet.',
          },
          {
            label: 'b',
            task: 'Hva er den totale produksjonskapasiteten per time?',
            solution: 'Den totale produksjonskapasiteten er begrenset av flaskehalsen, altså 50 enheter/time.',
          },
          {
            label: 'c',
            task: 'Foreslå to tiltak for å øke den totale kapasiteten.',
            solution: 'Tiltak kan være: 1) Investere i en ekstra sveisemaskin for å øke kapasiteten i flaskehalsen. 2) Innføre overtid eller ekstra skift på sveisestasjonen. Andre muligheter: outsource sveisearbeid, forenkle sveiseoperasjonen gjennom produktdesignendring, eller bedre vedlikehold for å redusere nedetid på sveisemaskinen.',
          },
        ],
        solution: 'Flaskehalsen er sveising (50 enh/time). Total kapasitet er 50 enh/time. Tiltak: investere i ekstra sveisemaskin, innføre overtid på sveisestasjonen.',
      },
    },
    {
      id: 'od-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'od-3-1-ex-5',
        number: '3.1.5',
        type: 'classic',
        task: 'Gjennomløpstiden for et produkt er 5 dager totalt. Bearbeidingstiden er 4 timer, ventetiden er 3,5 dager, transporttiden er 1 dag og inspeksjonstiden er 2 timer. Beregn hvor stor andel av gjennomløpstiden som er verdiskapende bearbeidingstid, og forklar hva dette forteller oss.',
        hints: ['Regn om alt til timer: 5 dager = 40 timer (8-timers dag)'],
        solution: 'Totalt: 5 dager = 40 timer. Bearbeidingstid = 4 timer. Andel verdiskapende tid = (4/40) x 100 % = 10 %. Bare 10 % av gjennomløpstiden brukes til faktisk verdiskapende arbeid. De resterende 90 % er venting, transport og inspeksjon. Dette viser et stort forbedringspotensial. Ved å redusere ventetid (f.eks. bedre produksjonsflyt) og transporttid (bedre layout) kan gjennomløpstiden kuttes betraktelig.',
      },
    },
    {
      id: 'od-3-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'od-3-1-ex-6',
        number: '3.1.6',
        type: 'classic',
        task: 'Du er produksjonsleder på en møbelfabrikk. Etterspørselen øker med 30 % neste kvartal. Lag en kort produksjonsplan som forklarer hvordan du vil møte den økte etterspørselen. Vurder kapasitet, materialer og tidsplan.',
        hints: ['Tenk på alle elementene i en produksjonsplan: etterspørselsprognose, kapasitetsplan, materialplan og tidsplan'],
        solution: 'En mulig produksjonsplan: Etterspørselsprognose: 30 % økning betyr at vi trenger å øke fra f.eks. 200 til 260 stoler per uke. Kapasitetsplan: Vurdere om nåværende kapasitet er tilstrekkelig, eventuelt innføre overtid, ekstravakter eller kveldsskift. Hvis økningen er varig, kan investering i nytt utstyr vurderes. Materialplan: Øke innkjøp av råvarer med 30 %. Kontakte leverandører tidlig for å sikre leveranser. Eventuelt bygge opp et sikkerhetslager av kritiske materialer. Tidsplan: Starte opptrappingen gradvis 2-3 uker før det nye kvartalet. Prioritere bestselgende produkter først. Sørge for at leveringsfrister overholdes.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.2: Lagerstyring
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_3_2: TextbookChapter = {
  id: 'okonomi-drift-3-2',
  courseId: 'okonomi-drift',
  chapterNumber: '3.2',
  title: 'Lagerstyring',
  description: 'Lær om økonomisk ordrekvantum (EOQ), sikkerhetslager og Just-in-Time (JIT). Du får innsikt i hvordan bedrifter balanserer lagerkostnader mot leveringsevne.',
  estimatedMinutes: 50,
  competenceGoals: ['vurdere og bruke ulike metoder for lagerstyring og innkjøp'],
  content: [
    {
      id: 'od-3-2-intro',
      type: 'text',
      content: `## Hvorfor er lagerstyring viktig?

Lager koster penger -- men å gå tom for varer koster enda mer. God lagerstyring handler om å finne balansen mellom å ha nok varer tilgjengelig for kundene og å ikke binde opp unødvendig mye kapital.

I dette kapittelet skal du lære:
- Ulike typer lagerkostnader
- Hvordan beregne økonomisk ordrekvantum (EOQ)
- Hva sikkerhetslager er og hvorfor det trengs
- Prinsippene bak Just-in-Time (JIT)`,
    },
    {
      id: 'od-3-2-def-1',
      type: 'definition',
      title: 'Lagerstyring',
      content: `**Lagerstyring** er planlegging og kontroll av varebeholdningen for å sikre at riktig mengde varer er tilgjengelig til riktig tid, med lavest mulig totalkostnad. Det omfatter beslutninger om bestillingsmengde, bestillingstidspunkt og sikkerhetslager.`,
    },
    {
      id: 'od-3-2-text-1',
      type: 'text',
      content: `### Lagerkostnader

Å holde varer på lager medfører flere typer kostnader:

**Lagerholdskostnader (H)**
- Kapitalbinding (renter på pengene bundet i varelager)
- Lagerlokaler (leie, oppvarming, forsikring)
- Svinn og ukurans (varer som går ut på dato eller blir umoderne)
- Håndtering (mottak, plukking, telling)
- Typisk 15-30 % av vareverdien per år

**Bestillingskostnader (S)**
- Administrasjon (ordrebehandling, fakturamottak)
- Transport og frakt
- Varemottak og kontroll
- Faste kostnader per bestilling, uavhengig av mengde

**Mangel- eller tomlagerkostnader**
- Tapt salg og fortjeneste
- Misfornøyde kunder som velger konkurrenter
- Forsinkelser i produksjonen
- Hastordrer med ekstra fraktkostnader`,
    },
    {
      id: 'od-3-2-def-2',
      type: 'definition',
      title: 'Økonomisk ordrekvantum (EOQ)',
      content: `**Økonomisk ordrekvantum** (EOQ, Economic Order Quantity) er den bestillingsmengden som minimerer de totale lagerkostnadene (summen av bestillingskostnader og lagerholdskostnader). Formelen er:

$$EOQ = \\sqrt{\\frac{2 \\cdot D \\cdot S}{H}}$$

der $D$ = årlig etterspørsel (antall enheter), $S$ = bestillingskostnad per ordre, og $H$ = lagerholdskostnad per enhet per år.`,
    },
    {
      id: 'od-3-2-text-2',
      type: 'text',
      content: `### Forstå EOQ-formelen

EOQ balanserer to motstridende kostnader:

**Bestiller du sjelden (store ordrer):**
- Lave bestillingskostnader (færre ordrer)
- Høye lagerholdskostnader (mye på lager)

**Bestiller du ofte (små ordrer):**
- Høye bestillingskostnader (mange ordrer)
- Lave lagerholdskostnader (lite på lager)

EOQ finner det optimale punktet der summen av disse kostnadene er lavest.

Den totale årlige lagerkostnaden kan beregnes som:

$$\\text{Totalkostnad} = \\frac{D}{Q} \\cdot S + \\frac{Q}{2} \\cdot H$$

der $Q$ er bestillingsmengden, $\\frac{D}{Q}$ er antall bestillinger per år, og $\\frac{Q}{2}$ er gjennomsnittlig lagerbeholdning.`,
    },
    {
      id: 'od-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Beregning av EOQ',
      problem: 'En butikk selger 10 000 enheter av et produkt per år. Bestillingskostnaden er 500 kr per ordre. Lagerholdskostnaden er 20 kr per enhet per år. Beregn EOQ og antall bestillinger per år.',
      solution: `**Løsning:**

Gitt: $D = 10\\,000$, $S = 500$ kr, $H = 20$ kr

$$EOQ = \\sqrt{\\frac{2 \\cdot 10\\,000 \\cdot 500}{20}} = \\sqrt{\\frac{10\\,000\\,000}{20}} = \\sqrt{500\\,000} \\approx 707 \\text{ enheter}$$

Antall bestillinger per år:

$$\\frac{D}{EOQ} = \\frac{10\\,000}{707} \\approx 14,1 \\text{ bestillinger}$$

Det vil si ca. 14 bestillinger per år, altså omtrent én bestilling hver 26. dag.

Total årlig lagerkostnad:

$$\\frac{10\\,000}{707} \\cdot 500 + \\frac{707}{2} \\cdot 20 = 7\\,070 + 7\\,070 = 14\\,140 \\text{ kr}$$

Merk at bestillingskostnadene og lagerholdskostnadene er tilnærmet like store ved EOQ -- dette er alltid tilfellet.`,
    },
    {
      id: 'od-3-2-def-3',
      type: 'definition',
      title: 'Sikkerhetslager',
      content: `**Sikkerhetslager** er en ekstra lagerbeholdning utover det forventede forbruket i bestillingsperioden. Det fungerer som en buffer mot usikkerhet i etterspørsel og leveringstid, slik at bedriften unngår tomt lager selv om etterspørselen er høyere enn forventet eller leverandøren er forsinket.`,
    },
    {
      id: 'od-3-2-text-3',
      type: 'text',
      content: `### Faktorer som påvirker sikkerhetslageret

Størrelsen på sikkerhetslageret avhenger av:

**Usikkerhet i etterspørselen**
- Stor variasjon i salg krever større sikkerhetslager
- Stabil, forutsigbar etterspørsel krever mindre

**Usikkerhet i leveringstid**
- Upålitelige leverandører krever større buffer
- Korte og stabile leveringstider gir mindre behov

**Ønsket servicenivå**
- Servicenivå på 95 % betyr at man aksepterer tomt lager i 5 % av tilfellene
- Høyere servicenivå krever mer sikkerhetslager
- Svært høyt servicenivå (99 %+) er dyrt

**Bestillingspunkt (reorder point)**
Bestillingspunktet er lagernivået der en ny bestilling skal legges inn:

$$\\text{Bestillingspunkt} = \\text{Forbruk per dag} \\times \\text{Leveringstid (dager)} + \\text{Sikkerhetslager}$$`,
    },
    {
      id: 'od-3-2-example-2',
      type: 'example',
      title: 'Eksempel: Bestillingspunkt med sikkerhetslager',
      problem: 'En bedrift bruker 50 enheter per dag. Leveringstiden er 6 dager. Sikkerhetslageret er satt til 100 enheter. Hva er bestillingspunktet?',
      solution: `**Løsning:**

$$\\text{Bestillingspunkt} = 50 \\times 6 + 100 = 300 + 100 = 400 \\text{ enheter}$$

Når lageret synker til 400 enheter, må bedriften legge inn en ny bestilling. De 300 enhetene dekker det normale forbruket i leveringstiden, og de 100 ekstra enhetene er en buffer mot usikkerhet.`,
    },
    {
      id: 'od-3-2-def-4',
      type: 'definition',
      title: 'Just-in-Time (JIT)',
      content: `**Just-in-Time (JIT)** er en lagerstrategi der varer og materialer leveres nøyaktig når de trengs i produksjonen, ikke før og ikke etter. Målet er å eliminere lager og tilhørende kostnader. JIT krever tett samarbeid med pålitelige leverandører og svært god planlegging.`,
    },
    {
      id: 'od-3-2-text-4',
      type: 'text',
      content: `### Just-in-Time: Fordeler og utfordringer

**Fordeler med JIT:**
- Minimale lagerkostnader
- Lite kapitalbinding
- Redusert svinn og ukurans
- Tvinger frem kvalitetsforbedring
- Avdekker problemer raskt

**Utfordringer med JIT:**
- Sårbart for forstyrrelser i forsyningskjeden
- Krever svært pålitelige leverandører
- Lite rom for feil eller forsinkelser
- Kan gi problemer ved plutselig etterspørselsøkning
- Krever god kommunikasjon og IT-systemer

**JIT i praksis:**
Toyota er mest kjent for JIT-produksjon. Bildelene leveres til fabrikken bare timer før de trengs på samlebåndet. Dette krever ekstrem presisjon og pålitelighet fra leverandørene.

Under pandemien i 2020 fikk mange JIT-bedrifter problemer da forsyningskjedene ble forstyrret. Dette har ført til at mange bedrifter nå har økt sine sikkerhetslagre igjen.`,
    },
    {
      id: 'od-3-2-tip-1',
      type: 'tip',
      title: 'ABC-analyse',
      content: `Ikke alle varer trenger like mye oppmerksomhet. ABC-analysen deler varene inn etter verdi:
- **A-varer** (ca. 20 % av varene, 80 % av verdien): Tett oppfølging, nøyaktig prognostisering
- **B-varer** (ca. 30 % av varene, 15 % av verdien): Moderat oppfølging
- **C-varer** (ca. 50 % av varene, 5 % av verdien): Enkel oppfølging, store bestillinger

Dette følger Pareto-prinsippet (80/20-regelen).`,
    },
    {
      id: 'od-3-2-text-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Lagerkostnader** består av lagerholdskostnader, bestillingskostnader og mangelkostnader
- **EOQ** finner den bestillingsmengden som minimerer totalkostnadene
- **Sikkerhetslager** beskytter mot usikkerhet i etterspørsel og leveringstid
- **JIT** eliminerer lager, men krever pålitelige leverandører og god planlegging

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| EOQ | Optimal bestillingsmengde som minimerer totalkostnad |
| Sikkerhetslager | Buffer mot usikkerhet |
| Bestillingspunkt | Lagernivå der ny bestilling utløses |
| JIT | Levering nøyaktig når det trengs |
| ABC-analyse | Klassifisering av varer etter verdi |`,
    },
    // ========== OPPGAVER ==========
    {
      id: 'od-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'od-3-2-ex-1',
        number: '3.2.1',
        type: 'multiple-choice',
        task: 'Hva skjer med EOQ dersom bestillingskostnaden dobles?',
        options: [
          { id: 'a', text: 'EOQ dobles', isCorrect: false },
          { id: 'b', text: 'EOQ halveres', isCorrect: false },
          { id: 'c', text: 'EOQ øker med ca. 41 %', isCorrect: true },
          { id: 'd', text: 'EOQ forblir uendret', isCorrect: false },
        ],
        hints: ['Husk at S er under kvadratroten i EOQ-formelen'],
        solution: 'EOQ = sqrt(2DS/H). Hvis S dobles, blir ny EOQ = sqrt(2D(2S)/H) = sqrt(2) x gammel EOQ. Sqrt(2) ≈ 1,41, altså en økning på ca. 41 %. Bestillingsmengden øker, men ikke like mye som kostnadsøkningen, fordi S står under et kvadratrottegn.',
      },
    },
    {
      id: 'od-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'od-3-2-ex-2',
        number: '3.2.2',
        type: 'classic',
        task: 'En nettbutikk selger 5 000 enheter av et produkt per år. Bestillingskostnaden er 300 kr per ordre. Lagerholdskostnaden er 15 kr per enhet per år.',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn EOQ.',
            solution: 'EOQ = sqrt((2 x 5000 x 300) / 15) = sqrt(200 000) ≈ 447 enheter.',
          },
          {
            label: 'b',
            task: 'Hvor mange bestillinger bør nettbutikken legge inn per år?',
            solution: 'Antall bestillinger = 5000 / 447 ≈ 11,2 bestillinger, altså ca. 11-12 bestillinger per år.',
          },
          {
            label: 'c',
            task: 'Beregn den totale årlige lagerkostnaden ved EOQ.',
            solution: 'Totalkostnad = (5000/447) x 300 + (447/2) x 15 = 3356 + 3353 = 6709 kr. Merk at bestillingskostnadene og lagerholdskostnadene er tilnærmet like store.',
          },
        ],
        solution: 'EOQ ≈ 447 enheter, ca. 11-12 bestillinger per år, total lagerkostnad ca. 6 709 kr.',
      },
    },
    {
      id: 'od-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'od-3-2-ex-3',
        number: '3.2.3',
        type: 'classic',
        task: 'En bedrift har et daglig forbruk på 80 enheter. Leveringstiden er 5 dager, og sikkerhetslageret er satt til 150 enheter. Beregn bestillingspunktet og forklar hva som skjer dersom leverandøren blir 2 dager forsinket.',
        solution: 'Bestillingspunkt = (80 x 5) + 150 = 400 + 150 = 550 enheter. Ved 2 dagers forsinkelse trengs 80 x 2 = 160 ekstra enheter. Sikkerhetslageret dekker 150 av disse, så bedriften mangler 10 enheter. Det betyr at sikkerhetslageret nesten er tilstrekkelig, men ikke helt. Bedriften bør vurdere å øke sikkerhetslageret til minst 160 enheter for å tåle forsinkelser på opptil 2 dager.',
      },
    },
    {
      id: 'od-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'od-3-2-ex-4',
        number: '3.2.4',
        type: 'classic',
        task: 'Drøft fordeler og ulemper med Just-in-Time (JIT) sammenlignet med tradisjonell lagerstyring med sikkerhetslager. Bruk gjerne eksempler.',
        solution: 'JIT gir lavere lagerkostnader, mindre kapitalbinding og mindre svinn. Det tvinger også frem kvalitetsforbedringer fordi det ikke er buffer til å skjule problemer. Ulempen er høy sårbarhet -- forsinkelser hos leverandører, naturkatastrofer eller pandemier kan stoppe produksjonen umiddelbart. Tradisjonell lagerstyring med sikkerhetslager gir trygghet og fleksibilitet, men koster mer i lagring og kapitalbinding. Eksempel: Toyota (JIT) opplevde produksjonsstopp etter jordskjelvet i Japan 2011, mens konkurrenter med større lager kunne fortsette lenger. En mellomløsning kan være JIT for standardvarer med pålitelige leverandører, og sikkerhetslager for kritiske komponenter med lang leveringstid.',
      },
    },
    {
      id: 'od-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'od-3-2-ex-5',
        number: '3.2.5',
        type: 'multiple-choice',
        task: 'I en ABC-analyse utgjør A-varene typisk:',
        options: [
          { id: 'a', text: '80 % av varene og 20 % av verdien', isCorrect: false },
          { id: 'b', text: '20 % av varene og 80 % av verdien', isCorrect: true },
          { id: 'c', text: '50 % av varene og 50 % av verdien', isCorrect: false },
          { id: 'd', text: '30 % av varene og 15 % av verdien', isCorrect: false },
        ],
        solution: 'A-varer utgjør typisk ca. 20 % av antall varer, men står for ca. 80 % av den totale lagerverdien. Dette følger Pareto-prinsippet (80/20-regelen). Disse varene krever tett oppfølging og nøyaktig prognostisering.',
      },
    },
    {
      id: 'od-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'od-3-2-ex-6',
        number: '3.2.6',
        type: 'classic',
        task: 'En bedrift har tre produktgrupper på lager. Gruppe 1: 100 varer til total verdi 800 000 kr. Gruppe 2: 300 varer til total verdi 150 000 kr. Gruppe 3: 600 varer til total verdi 50 000 kr. Klassifiser gruppene som A, B eller C, og forklar hvilken lagerstyringsstrategi som passer for hver.',
        hints: ['Beregn andelen av totalt antall varer og total verdi for hver gruppe'],
        solution: 'Totalt: 1 000 varer, 1 000 000 kr. Gruppe 1: 10 % av varene, 80 % av verdien = A-varer. Disse bør ha tett oppfølging, nøyaktig prognose og hyppig kontroll. Gruppe 2: 30 % av varene, 15 % av verdien = B-varer. Moderat oppfølging med periodisk kontroll. Gruppe 3: 60 % av varene, 5 % av verdien = C-varer. Enkel oppfølging, gjerne store bestillinger for å spare administrasjonskostnader. Det lønner seg ikke å bruke mye tid og ressurser på å optimalisere C-varer.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.3: Innkjøp og leverandørstyring
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_3_3: TextbookChapter = {
  id: 'okonomi-drift-3-3',
  courseId: 'okonomi-drift',
  chapterNumber: '3.3',
  title: 'Innkjøp og leverandørstyring',
  description: 'Lær om innkjøpsstrategier, leverandørvurdering og forhandlinger. Du får innsikt i hvordan bedrifter velger leverandører og bygger gode innkjøpsrelasjoner.',
  estimatedMinutes: 45,
  competenceGoals: ['vurdere og bruke ulike metoder for lagerstyring og innkjøp'],
  content: [
    {
      id: 'od-3-3-intro',
      type: 'text',
      content: `## Innkjøpets betydning

Innkjøpskostnadene utgjør ofte 50-70 % av en bedrifts totale kostnader. Det betyr at selv små besparelser på innkjøp kan gi store utslag på bunnlinjen. God innkjøpsstyring handler ikke bare om å forhandle ned prisen, men om å sikre riktig kvalitet, leveranse og samarbeid.

I dette kapittelet skal du lære:
- Hva en innkjøpsstrategi innebærer
- Hvordan vurdere og velge leverandører
- Ulike innkjøpsmetoder og -modeller
- Betydningen av gode leverandørrelasjoner`,
    },
    {
      id: 'od-3-3-def-1',
      type: 'definition',
      title: 'Innkjøp',
      content: `**Innkjøp** er alle aktiviteter knyttet til å anskaffe varer, materialer og tjenester som bedriften trenger. Det omfatter behovsidentifisering, leverandørsøk, forhandling, bestilling, mottak og oppfølging.`,
    },
    {
      id: 'od-3-3-text-1',
      type: 'text',
      content: `### Innkjøpsprosessen

En systematisk innkjøpsprosess inneholder følgende steg:

**1. Behovsidentifisering**
- Hva trenger vi?
- Hvilken mengde og kvalitet?
- Når trengs det?

**2. Leverandørsøk og -vurdering**
- Hvem kan levere det vi trenger?
- Hvilke leverandører finnes i markedet?
- Kvalifisering og forhåndssjekk

**3. Forespørsel og tilbudsinnhenting**
- Sende ut forespørsler (RFQ/RFP)
- Innhente og sammenligne tilbud
- Vurdere pris, kvalitet og betingelser

**4. Forhandling og avtaleinngåelse**
- Forhandle pris, leveringsbetingelser, garanti
- Inngå avtale eller rammeavtale
- Kontraktsutforming

**5. Ordrebehandling og oppfølging**
- Legge inn bestillinger
- Følge opp leveranser
- Varemottak og kontroll

**6. Evaluering**
- Vurdere leverandørens ytelse
- Gi tilbakemelding
- Forbedre prosessen`,
    },
    {
      id: 'od-3-3-def-2',
      type: 'definition',
      title: 'Leverandørvurdering',
      content: `**Leverandørvurdering** er en systematisk evaluering av potensielle og eksisterende leverandører basert på definerte kriterier. Typiske kriterier er pris, kvalitet, leveringspresisjon, fleksibilitet, økonomisk stabilitet og bærekraft.`,
    },
    {
      id: 'od-3-3-text-2',
      type: 'text',
      content: `### Kriterier for leverandørvurdering

Bedrifter bruker gjerne en poengmodell for å vurdere leverandører:

| Kriterium | Vekt | Beskrivelse |
|-----------|------|-------------|
| **Pris** | 30 % | Innkjøpspris, betalingsbetingelser, rabatter |
| **Kvalitet** | 25 % | Produktkvalitet, sertifiseringer, reklamasjonsrate |
| **Leveringspresisjon** | 20 % | Overholdelse av leveringsfrister |
| **Fleksibilitet** | 10 % | Evne til å håndtere endringer og hasteordrer |
| **Service** | 10 % | Kundeservice, teknisk støtte, tilgjengelighet |
| **Bærekraft** | 5 % | Miljøsertifiseringer, etisk produksjon |

Leverandøren får poeng fra 1-5 på hvert kriterium, og totalscoren beregnes ved å multiplisere poeng med vekt.`,
    },
    {
      id: 'od-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Leverandørvurdering med poengmodell',
      problem: 'En bedrift vurderer to leverandører. Leverandør A har pris 4, kvalitet 5, levering 3. Leverandør B har pris 3, kvalitet 4, levering 5. Vektene er pris 40 %, kvalitet 35 %, levering 25 %. Hvem scorer best?',
      solution: `**Løsning:**

**Leverandør A:**
- Pris: $4 \\times 0,40 = 1,60$
- Kvalitet: $5 \\times 0,35 = 1,75$
- Levering: $3 \\times 0,25 = 0,75$
- **Total: 4,10**

**Leverandør B:**
- Pris: $3 \\times 0,40 = 1,20$
- Kvalitet: $4 \\times 0,35 = 1,40$
- Levering: $5 \\times 0,25 = 1,25$
- **Total: 3,85**

Leverandør A scorer høyest (4,10 mot 3,85) og bør foretrekkes basert på den vektede vurderingen. Leverandør A vinner på pris og kvalitet, mens leverandør B er bedre på levering.`,
    },
    {
      id: 'od-3-3-text-3',
      type: 'text',
      content: `### Innkjøpsstrategier

**Single sourcing (én leverandør)**
- Alt kjøpes fra én leverandør
- Fordeler: Bedre forhandlingsposisjon, lavere administrasjon, tettere samarbeid
- Ulemper: Høy avhengighet, sårbar ved leveringsproblemer

**Multiple sourcing (flere leverandører)**
- Fordeler innkjøpene mellom flere leverandører
- Fordeler: Redusert risiko, priskonkurranse, fleksibilitet
- Ulemper: Mer administrasjon, vanskelig å bygge dype relasjoner

**Dual sourcing (to leverandører)**
- Kompromiss mellom single og multiple sourcing
- Hovedleverandør (70-80 %) og reserveleverandør (20-30 %)
- Balanserer risiko og effektivitet

**Partnerskap/strategisk samarbeid**
- Langsiktig, tett samarbeid med nøkkelleverandører
- Informasjonsdeling, felles utvikling, gjensidig avhengighet
- Passer for kritiske råvarer og komponenter`,
    },
    {
      id: 'od-3-3-text-4',
      type: 'text',
      content: `### Forhandlingsteknikk ved innkjøp

Gode innkjøpere behersker forhandlingskunsten:

**Forberedelse**
- Kjenn ditt behov og dine alternativer
- Undersøk markedspriser og leverandørens situasjon
- Sett klare mål og grenser

**BATNA (Best Alternative To a Negotiated Agreement)**
- Hva er ditt beste alternativ hvis forhandlingen mislykkes?
- Jo bedre BATNA, jo sterkere forhandlingsposisjon
- Aldri aksepter en avtale som er dårligere enn ditt beste alternativ

**Totalkostandsanalyse (TCO)**
- Ikke bare se på innkjøpsprisen
- Inkluder frakt, lagring, kvalitetskostnader, vedlikehold
- Det billigste tilbudet er ikke alltid det rimeligste totalt sett`,
    },
    {
      id: 'od-3-3-def-3',
      type: 'definition',
      title: 'Totalkostnad (TCO)',
      content: `**Total Cost of Ownership (TCO)** er den totale kostnaden knyttet til et innkjøp gjennom hele levetiden. Det inkluderer innkjøpspris, frakt, lagring, installasjon, vedlikehold, opplæring, driftskostnader og eventuell avhending. TCO gir et mer helhetlig bilde enn bare innkjøpsprisen.`,
    },
    {
      id: 'od-3-3-tip-1',
      type: 'tip',
      title: 'Rammeavtaler',
      content: `En rammeavtale er en langsiktig avtale med en leverandør om pris og betingelser for gjentatte kjøp. Fordelen er forutsigbarhet for begge parter, mindre forhandlingsarbeid per bestilling og ofte bedre priser. Mange offentlige virksomheter er pålagt å bruke rammeavtaler etter lov om offentlige anskaffelser.`,
    },
    {
      id: 'od-3-3-text-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Innkjøpskostnadene** utgjør ofte 50-70 % av totalkostnadene
- **Leverandørvurdering** bør gjøres systematisk med vektede kriterier
- **Innkjøpsstrategier** varierer fra single sourcing til multiple sourcing
- **TCO** gir et mer helhetlig bilde enn bare innkjøpspris

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Leverandørvurdering | Systematisk evaluering av leverandører |
| Single sourcing | Kjøpe fra én leverandør |
| Multiple sourcing | Fordele innkjøp mellom flere leverandører |
| TCO | Total eierskapskostnad over hele levetiden |
| Rammeavtale | Langsiktig avtale om pris og betingelser |`,
    },
    // ========== OPPGAVER ==========
    {
      id: 'od-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'od-3-3-ex-1',
        number: '3.3.1',
        type: 'multiple-choice',
        task: 'Hva er den største fordelen med single sourcing?',
        options: [
          { id: 'a', text: 'Lavere risiko ved leveringsproblemer', isCorrect: false },
          { id: 'b', text: 'Tettere samarbeid og bedre forhandlingsposisjon', isCorrect: true },
          { id: 'c', text: 'Mer priskonkurranse mellom leverandører', isCorrect: false },
          { id: 'd', text: 'Større fleksibilitet ved endringer', isCorrect: false },
        ],
        solution: 'Single sourcing gir tettere samarbeid fordi leverandøren er sikret alt volumet. Dette skaper bedre forhandlingsposisjon og lavere administrasjon. Ulempen er høyere risiko ved leveringsproblemer, da man ikke har alternative leverandører klare.',
      },
    },
    {
      id: 'od-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'od-3-3-ex-2',
        number: '3.3.2',
        type: 'classic',
        task: 'Du skal vurdere tre leverandører for innkjøp av kontorrekvisita. Vurder dem med poengmodellen og følgende vekter: Pris 35 %, Kvalitet 30 %, Leveringspresisjon 20 %, Service 15 %.',
        subTasks: [
          {
            label: 'a',
            task: 'Leverandør X: Pris 5, Kvalitet 3, Levering 4, Service 3. Beregn totalscoren.',
            solution: 'Leverandør X: (5 x 0,35) + (3 x 0,30) + (4 x 0,20) + (3 x 0,15) = 1,75 + 0,90 + 0,80 + 0,45 = 3,90.',
          },
          {
            label: 'b',
            task: 'Leverandør Y: Pris 3, Kvalitet 5, Levering 4, Service 4. Beregn totalscoren.',
            solution: 'Leverandør Y: (3 x 0,35) + (5 x 0,30) + (4 x 0,20) + (4 x 0,15) = 1,05 + 1,50 + 0,80 + 0,60 = 3,95.',
          },
          {
            label: 'c',
            task: 'Leverandør Z: Pris 4, Kvalitet 4, Levering 5, Service 5. Beregn totalscoren.',
            solution: 'Leverandør Z: (4 x 0,35) + (4 x 0,30) + (5 x 0,20) + (5 x 0,15) = 1,40 + 1,20 + 1,00 + 0,75 = 4,35.',
          },
          {
            label: 'd',
            task: 'Hvilken leverandør bør velges, og hvorfor?',
            solution: 'Leverandør Z bør velges med høyest totalscore (4,35). Selv om Z ikke er billigst eller har best kvalitet, scorer Z jevnt høyt på alle kriterier og best på leveringspresisjon og service. Det gir et helhetlig godt samarbeid.',
          },
        ],
        solution: 'X: 3,90, Y: 3,95, Z: 4,35. Leverandør Z anbefales med jevnt høye scorer.',
      },
    },
    {
      id: 'od-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'od-3-3-ex-3',
        number: '3.3.3',
        type: 'classic',
        task: 'Forklar forskjellen mellom innkjøpspris og totalkostnad (TCO). Gi et eksempel der det billigste tilbudet ikke har lavest TCO.',
        solution: 'Innkjøpsprisen er bare det man betaler for selve produktet. TCO inkluderer alle kostnader over produktets levetid: frakt, installasjon, opplæring, vedlikehold, driftskostnader og avhending. Eksempel: Bedrift A kjøper en billig printer til 2 000 kr, mens bedrift B kjøper en dyrere modell til 5 000 kr. Men den billige printeren har dyre blekkpatroner (1 000 kr vs 300 kr), kortere levetid (2 år vs 5 år) og høyere strømforbruk. Over 5 år blir TCO for den billige printeren kanskje 17 000 kr, mens den dyrere modellen koster 11 000 kr totalt.',
      },
    },
    {
      id: 'od-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'od-3-3-ex-4',
        number: '3.3.4',
        type: 'classic',
        task: 'En bedrift bruker i dag single sourcing for en kritisk komponent. Leverandøren har nylig hatt kvalitetsproblemer og leveringsforsinkelser. Drøft om bedriften bør endre innkjøpsstrategi, og i så fall til hva.',
        hints: ['Vurder fordeler og ulemper med ulike strategier opp mot bedriftens situasjon'],
        solution: 'Bedriften bør vurdere å gå over til dual sourcing. Med en hovedleverandør (70-80 %) og en reserveleverandør (20-30 %) reduseres risikoen for leveringsproblemer uten å miste alle fordelene ved tette leverandørrelasjoner. Å gå rett til multiple sourcing kan gi for mye administrasjon. Bedriften bør først ha en dialog med nåværende leverandør om kvalitets- og leveringsproblemene -- kanskje kan man finne løsninger sammen. Parallelt bør man kvalifisere en alternativ leverandør. Et gradvis skifte fra single til dual sourcing gir bedriften tid til å bygge opp kompetanse og relasjon med den nye leverandøren.',
      },
    },
    {
      id: 'od-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'od-3-3-ex-5',
        number: '3.3.5',
        type: 'multiple-choice',
        task: 'Hva er BATNA i en forhandlingssituasjon?',
        options: [
          { id: 'a', text: 'Det beste tilbudet du har mottatt fra konkurrenten', isCorrect: false },
          { id: 'b', text: 'Det beste alternativet du har dersom forhandlingen mislykkes', isCorrect: true },
          { id: 'c', text: 'Det laveste beløpet du er villig til å betale', isCorrect: false },
          { id: 'd', text: 'Den beste avtalen du kan oppnå i forhandlingen', isCorrect: false },
        ],
        solution: 'BATNA (Best Alternative To a Negotiated Agreement) er ditt beste alternativ hvis forhandlingen ikke fører frem. For eksempel: Hvis du forhandler med leverandør A og har et godt tilbud fra leverandør B, er tilbudet fra B din BATNA. Jo bedre BATNA du har, jo sterkere er din forhandlingsposisjon.',
      },
    },
    {
      id: 'od-3-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'od-3-3-ex-6',
        number: '3.3.6',
        type: 'classic',
        task: 'Du er innkjøpsansvarlig for en restaurant. Beskriv hvilke kriterier du ville lagt mest vekt på ved valg av leverandør for ferske råvarer (frukt og grønt), og forklar hvorfor.',
        solution: 'For ferske råvarer til en restaurant ville jeg vektlagt: 1) Kvalitet/ferskhet (høyest vekt, ca. 35 %): Ferske råvarer er selve grunnlaget for maten. Dårlig kvalitet ødelegger rettene og omdømmet. 2) Leveringspresisjon (ca. 25 %): Restauranten trenger varer hver dag til riktig tidspunkt. Forsinkelser kan bety at retter ikke kan serveres. 3) Fleksibilitet (ca. 20 %): Etterspørselen varierer med sesong og antall gjester. Leverandøren må kunne justere bestillinger raskt. 4) Pris (ca. 15 %): Viktig for lønnsomheten, men ikke like viktig som kvalitet. 5) Bærekraft (ca. 5 %): Lokale og økologiske råvarer kan være et konkurransefortrinn. Pris er nedprioritert fordi gjestene betaler for kvalitet, og dårlige råvarer kan ødelegge restaurantens rykte.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.4: Logistikk og verdikjeden
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_3_4: TextbookChapter = {
  id: 'okonomi-drift-3-4',
  courseId: 'okonomi-drift',
  chapterNumber: '3.4',
  title: 'Logistikk og verdikjeden',
  description: 'Lær om supply chain management, distribusjonskanaler og verdikjedeanalyse. Du får innsikt i hvordan bedrifter organiserer flyten av varer, informasjon og penger fra råvare til sluttkunde.',
  estimatedMinutes: 45,
  competenceGoals: ['analysere verdikjeden og vurdere logistikkløsninger'],
  content: [
    {
      id: 'od-3-4-intro',
      type: 'text',
      content: `## Logistikk -- mer enn bare transport

Logistikk handler om hele flyten fra råvare til ferdig produkt hos kunden. Det inkluderer planlegging, gjennomføring og kontroll av transport, lagring, informasjonsflyt og alle aktivitetene som binder produksjonen sammen med markedet.

I dette kapittelet skal du lære:
- Hva logistikk og supply chain management innebærer
- Hvordan verdikjeden er bygget opp
- Ulike distribusjonskanaler og strategier
- Betydningen av informasjonsflyt i forsyningskjeden`,
    },
    {
      id: 'od-3-4-def-1',
      type: 'definition',
      title: 'Logistikk',
      content: `**Logistikk** er planlegging, gjennomføring og kontroll av den effektive flyten av varer, tjenester og informasjon fra opprinnelsespunkt til forbrukspunkt, for å møte kundens krav. Det handler om å levere riktig produkt, i riktig mengde, til riktig sted, til riktig tid og til riktig kostnad.`,
    },
    {
      id: 'od-3-4-def-2',
      type: 'definition',
      title: 'Supply Chain Management (SCM)',
      content: `**Supply Chain Management (SCM)** er styringen av hele forsyningskjeden fra råvareleverandør til sluttkunde. Det omfatter koordinering mellom alle leddene i kjeden: leverandører, produsenter, distributører, grossister, detaljister og kunder. Målet er å optimalisere den samlede kjeden, ikke bare enkeltleddene.`,
    },
    {
      id: 'od-3-4-text-1',
      type: 'text',
      content: `### Verdikjeden (Porters verdikjede)

Michael Porter utviklet verdikjedemodellen som viser hvordan bedrifter skaper verdi gjennom sine aktiviteter:

**Primæraktiviteter** (direkte verdiskapende):

| Aktivitet | Beskrivelse | Eksempel |
|-----------|-------------|----------|
| **Inngående logistikk** | Mottak, lagring og distribusjon av innsatsfaktorer | Varemottak, råvarelager |
| **Produksjon** | Omdanning av innsatsfaktorer til ferdig produkt | Montering, bearbeiding |
| **Utgående logistikk** | Lagring og distribusjon av ferdige produkter | Ferdigvarelager, forsendelse |
| **Markedsføring og salg** | Aktiviteter som skal få kunden til å kjøpe | Reklame, prissetting |
| **Service** | Aktiviteter som opprettholder produktets verdi | Garanti, kundeservice |

**Støtteaktiviteter** (indirekte verdiskapende):
- Innkjøp
- Teknologiutvikling
- Personalledelse (HR)
- Infrastruktur (ledelse, økonomi, juridisk)`,
    },
    {
      id: 'od-3-4-text-2',
      type: 'text',
      content: `### Forsyningskjeden i praksis

En typisk forsyningskjede for et konsumprodukt:

**Råvareleverandør** → **Komponentprodusent** → **Ferdigvareprodusent** → **Grossist** → **Detaljist** → **Sluttkunde**

I hvert ledd tilføres verdi, men også kostnader. Utfordringen er å minimere kostnadene uten å redusere verdien for sluttkunden.

**Informasjonsflyten** går i begge retninger:
- Fremover: Ordrebekreftelser, leveringsinformasjon, sporingsdata
- Bakover: Kundebehov, etterspørselsprognoser, bestillinger

**Bullwhip-effekten** er et kjent fenomen der små variasjoner i etterspørselen hos sluttkunden forsterkes oppover i forsyningskjeden. En økning på 10 % i kundesalg kan føre til at råvareleverandøren opplever en økning på 50-100 %. Årsaker er forsinkelser i informasjon, store partistørrelser og manglende kommunikasjon.`,
    },
    {
      id: 'od-3-4-def-3',
      type: 'definition',
      title: 'Bullwhip-effekten',
      content: `**Bullwhip-effekten** (piskeeffekten) er fenomenet der små variasjoner i sluttkundens etterspørsel forsterkes og forstørres oppover i forsyningskjeden. Hvert ledd i kjeden overreagerer på endringer og bestiller mer enn nødvendig, noe som skaper store svingninger i produksjon og lagernivåer.`,
    },
    {
      id: 'od-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Bullwhip-effekten',
      problem: 'En dagligvarebutikk opplever at salget av hånddesinfeksjon øker med 20 % én uke. Forklar hva som kan skje oppover i forsyningskjeden.',
      solution: `**Løsning:**

Butikken øker bestillingen med 30 % for å bygge litt ekstra lager (buffer).

Grossisten ser økt etterspørsel fra flere butikker og øker sin bestilling med 50 %.

Produsenten ser den kraftige økningen fra grossisten og bestiller 80 % mer råvarer.

Råvareleverandøren øker produksjonen med 100 % for å sikre leveranser.

Resultatet er at en 20 % økning i sluttetterspørselen har blitt til en 100 % økning hos råvareleverandøren. Når etterspørselen normaliseres, sitter alle leddene igjen med for mye lager.

**Mottiltak:** Dele salgsdata direkte med alle ledd, bruke mindre bestillingspartier, og koordinere prognoser i hele kjeden.`,
    },
    {
      id: 'od-3-4-text-3',
      type: 'text',
      content: `### Distribusjonskanaler

Bedrifter kan velge ulike veier for å nå kundene:

**Direkte distribusjon**
- Selger direkte til sluttkunden
- Eksempler: Nettbutikk, fabrikkundsalg, eget utsalg
- Fordeler: Full kontroll, høyere margin, direkte kundekontakt
- Ulemper: Krever mer ressurser, begrenset rekkevidde

**Indirekte distribusjon**
- Bruker mellomledd som grossister og detaljister
- Eksempler: Dagligvarebutikker, elektrokjeder
- Fordeler: Bred distribusjon, etablert kundebase
- Ulemper: Lavere margin, mindre kontroll

**Flerkanaldistribusjon (omnichannel)**
- Bruker flere kanaler samtidig
- Eksempler: Både nettbutikk og fysisk butikk
- Fordeler: Når flere kunder, fleksibilitet
- Ulemper: Kompleks å administrere, risiko for kanalkonflikt`,
    },
    {
      id: 'od-3-4-text-4',
      type: 'text',
      content: `### Transportøkonomi

Valg av transportmiddel avhenger av flere faktorer:

| Transportmiddel | Hastighet | Kostnad | Kapasitet | Passer for |
|-----------------|-----------|---------|-----------|------------|
| **Lastebil** | Middels | Middels | Middels | De fleste varer, fleksibel |
| **Tog** | Middels | Lav | Stor | Tunge, store volum |
| **Skip** | Lav | Svært lav | Svært stor | Bulkvarer, interkontinentalt |
| **Fly** | Svært høy | Svært høy | Liten | Verdifulle, tidskritiske varer |
| **Rørledning** | Middels | Svært lav | Stor | Gass, olje, vann |

**Valget avhenger av:**
- Varens verdi og vekt
- Leveringsfristen
- Avstand og tilgjengelighet
- Miljøhensyn og reguleringer`,
    },
    {
      id: 'od-3-4-tip-1',
      type: 'tip',
      title: 'Grønn logistikk',
      content: `Stadig flere bedrifter fokuserer på bærekraftig logistikk. Tiltak inkluderer optimal ruteplanlegging, samkjøring av transport, overgang til elektriske kjøretøy, kortere forsyningskjeder med lokale leverandører, og emballasjeoptimalisering. EU har innført krav om rapportering av klimaavtrykk i forsyningskjeden (CSRD-direktivet).`,
    },
    {
      id: 'od-3-4-text-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Logistikk** handler om flyten av varer, tjenester og informasjon
- **Supply Chain Management** koordinerer hele forsyningskjeden
- **Verdikjeden** viser hvordan verdi skapes gjennom bedriftens aktiviteter
- **Bullwhip-effekten** forsterker etterspørselsvariasjoner oppover i kjeden
- **Distribusjonskanaler** kan være direkte, indirekte eller flerkanal

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| SCM | Styring av hele forsyningskjeden |
| Verdikjede | Porters modell for verdiskapende aktiviteter |
| Bullwhip-effekten | Forsterking av etterspørselsvariasjoner |
| Omnichannel | Distribusjon gjennom flere kanaler |
| Grønn logistikk | Bærekraftig planlegging av varetransport |`,
    },
    // ========== OPPGAVER ==========
    {
      id: 'od-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'od-3-4-ex-1',
        number: '3.4.1',
        type: 'multiple-choice',
        task: 'Hvilken av følgende er IKKE en primæraktivitet i Porters verdikjede?',
        options: [
          { id: 'a', text: 'Inngående logistikk', isCorrect: false },
          { id: 'b', text: 'Produksjon', isCorrect: false },
          { id: 'c', text: 'Personalledelse (HR)', isCorrect: true },
          { id: 'd', text: 'Markedsføring og salg', isCorrect: false },
        ],
        solution: 'Personalledelse (HR) er en støtteaktivitet, ikke en primæraktivitet. Primæraktivitetene er: inngående logistikk, produksjon, utgående logistikk, markedsføring og salg, og service. Støtteaktivitetene (innkjøp, teknologiutvikling, HR og infrastruktur) støtter opp under primæraktivitetene.',
      },
    },
    {
      id: 'od-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'od-3-4-ex-2',
        number: '3.4.2',
        type: 'classic',
        task: 'Forklar bullwhip-effekten med et eget eksempel. Foreslå minst to tiltak for å redusere den.',
        solution: 'Eksempel: En bilforhandler selger 5 % flere SUV-er en måned. Importøren øker bestillingen med 15 %. Bilfabrikken øker produksjonsplanen med 30 %. Underdekksleverandøren øker kapasiteten med 50 %. Når etterspørselen normaliseres, har fabrikken overprodusert og underdekksleverandøren har investert i unødvendig kapasitet. Tiltak: 1) Dele sanntids salgsdata med alle ledd i kjeden slik at alle baserer seg på faktisk sluttetterspørsel. 2) Bestille i mindre, hyppigere partier for å unngå store svingninger. 3) Samarbeide om felles etterspørselsprognoser gjennom hele forsyningskjeden. 4) Unngå kampanjer og prissvingninger som skaper kunstige topper.',
      },
    },
    {
      id: 'od-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'od-3-4-ex-3',
        number: '3.4.3',
        type: 'classic',
        task: 'En norsk produsent av laksefôr skal levere til oppdrettsanlegg langs hele norskekysten. Vurder hvilke(t) transportmiddel som er mest hensiktsmessig, og begrunn svaret.',
        solution: 'Lastebil er mest hensiktsmessig for laksefôr langs norskekysten. Begrunnelse: Laksefôr er relativt tungt og voluminøst, men ikke ekstremt verdifullt per kg. Oppdrettsanleggene ligger spredt langs kysten, ofte på steder uten jernbane eller havn for store skip. Lastebil gir fleksibilitet til å levere direkte til hvert anlegg. Alternativt kan kombinasjonen skip + lastebil brukes: Skip for transport av store partier mellom regioner (f.eks. fra fabrikk til regionslager), og deretter lastebil for siste ledd til anlegget. Fly er for dyrt, tog er begrenset av infrastruktur langs kysten. Miljøhensyn taler for å utnytte sjøveien der det er mulig, da skip har lavere utslipp per tonnkilometer.',
      },
    },
    {
      id: 'od-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'od-3-4-ex-4',
        number: '3.4.4',
        type: 'classic',
        task: 'Lag en forenklet verdikjedeanalyse for en kafé. Beskriv de fem primæraktivitetene og vurder hvor kaféen kan skape mest merverdi for kunden.',
        solution: 'Inngående logistikk: Innkjøp og mottak av kaffebønner, melk, bakervarer, emballasje. Lagring av råvarer i kjølerom og tørlager. Produksjon: Maling av kaffe, tilberedning av drikker, baking/anretning av mat, servering. Utgående logistikk: Servering til kunden i lokalet, takeaway-ordrer, eventuell levering via app. Markedsføring og salg: Sosiale medier, skilting, menydesign, kundeservice i disk, lojalitetsprogram. Service: Oppfølging av kundeklager, stamkunderabatter, tilpasning av allergener. Størst merverdi skapes trolig i produksjon (kvaliteten på kaffen og maten) og service (kundeopplevelsen, atmosfæren). En kafé skiller seg ut på smaksopplevelsen og stemningen, ikke på logistikk. Investering i barista-opplæring og hyggelige lokaler gir mest igjen.',
      },
    },
    {
      id: 'od-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'od-3-4-ex-5',
        number: '3.4.5',
        type: 'classic',
        task: 'Forklar forskjellen mellom direkte og indirekte distribusjon. Gi et eksempel på en bedrift som har endret distribusjonsstrategi de siste årene, og drøft fordeler og ulemper med endringen.',
        hints: ['Tenk på bedrifter som har startet med nettbutikk i tillegg til, eller i stedet for, tradisjonelle butikker'],
        solution: 'Direkte distribusjon betyr å selge rett til sluttkunden uten mellomledd. Indirekte distribusjon bruker mellomledd som grossister og detaljister. Eksempel: Nike har de siste årene kuttet mange detaljist-partnerskap og satser mer på egne butikker og nike.com (Direct-to-Consumer/DTC). Fordeler: Høyere margin per solgte enhet, full kontroll over merkevareopplevelsen, direkte kundekontakt og verdifulle data om kundeatferd. Ulemper: Krever store investeringer i egne butikker og netthandelsplattform, mister bred tilgjengelighet gjennom sportsbutikker, og noen kunder foretrekker å se og prøve i fysisk butikk. Nike har senere justert strategien og åpnet for noen detaljist-partnerskap igjen, noe som viser at balansen mellom direkte og indirekte distribusjon er krevende.',
      },
    },
    {
      id: 'od-3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'od-3-4-ex-6',
        number: '3.4.6',
        type: 'multiple-choice',
        task: 'Hva er den viktigste årsaken til bullwhip-effekten?',
        options: [
          { id: 'a', text: 'Høye transportkostnader', isCorrect: false },
          { id: 'b', text: 'Mangelfull informasjonsdeling mellom leddene i kjeden', isCorrect: true },
          { id: 'c', text: 'For mange leverandører', isCorrect: false },
          { id: 'd', text: 'For lave lagernivåer', isCorrect: false },
        ],
        solution: 'Den viktigste årsaken til bullwhip-effekten er mangelfull informasjonsdeling. Når hvert ledd kun ser sin egen bestillingshistorikk og ikke den faktiske sluttetterspørselen, overreagerer de på endringer. Løsningen er å dele sanntids salgsdata gjennom hele kjeden slik at alle beslutninger baseres på reell kundeetterspørsel.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.5: Lean produksjon
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_3_5: TextbookChapter = {
  id: 'okonomi-drift-3-5',
  courseId: 'okonomi-drift',
  chapterNumber: '3.5',
  title: 'Lean produksjon',
  description: 'Lær om lean-prinsipper, de åtte formene for sløsing (muda), kaizen og kanban. Du får innsikt i hvordan bedrifter kan produsere mer effektivt ved å eliminere alt som ikke skaper verdi for kunden.',
  estimatedMinutes: 50,
  competenceGoals: ['gjøre rede for lean-prinsipper og kontinuerlig forbedring'],
  content: [
    {
      id: 'od-3-5-intro',
      type: 'text',
      content: `## Hva er lean?

Lean er en produksjonsfilosofi som handler om å skape mest mulig verdi for kunden med minst mulig ressursbruk. Ideen stammer fra Toyota Production System (TPS) som ble utviklet i Japan etter andre verdenskrig, da Toyota hadde begrensede ressurser og måtte finne kreative løsninger.

I dette kapittelet skal du lære:
- De fem lean-prinsippene
- De åtte formene for sløsing (muda)
- Kaizen -- filosofien om kontinuerlig forbedring
- Kanban -- visuell styring av produksjonen
- Hvordan lean brukes i praksis`,
    },
    {
      id: 'od-3-5-def-1',
      type: 'definition',
      title: 'Lean produksjon',
      content: `**Lean produksjon** er en systematisk tilnærming til å identifisere og eliminere sløsing (muda) gjennom kontinuerlig forbedring. Målet er å gjøre mer med mindre: mindre tid, mindre lager, mindre plass, færre feil og mindre arbeidsinnsats -- samtidig som man leverer det kunden vil ha.`,
    },
    {
      id: 'od-3-5-text-1',
      type: 'text',
      content: `### De fem lean-prinsippene

**1. Definer verdi**
- Verdi defineres av kunden, ikke av bedriften
- Hva er kunden villig til å betale for?
- Alt annet er potensielt sløsing

**2. Kartlegg verdistrømmen**
- Identifiser alle stegene fra råvare til ferdig produkt
- Skill mellom verdiskapende og ikke-verdiskapende aktiviteter
- Bruk verdistrømsanalyse (Value Stream Mapping)

**3. Skap flyt**
- La produktet flyte jevnt gjennom prosessen
- Unngå stopp, kø og ventetid
- Reduser partistørrelser for jevnere produksjon

**4. Innfør pull-prinsippet**
- Produser bare det som etterspørres
- La kundens behov styre produksjonen
- Unngå overproduksjon

**5. Søk perfeksjon**
- Kontinuerlig forbedring (kaizen)
- Aldri vær fornøyd med status quo
- Involver alle ansatte i forbedringsarbeidet`,
    },
    {
      id: 'od-3-5-def-2',
      type: 'definition',
      title: 'Muda (sløsing)',
      content: `**Muda** er det japanske ordet for sløsing. I lean-sammenheng betyr det enhver aktivitet som bruker ressurser uten å skape verdi for kunden. Toyota identifiserte opprinnelig syv former for sløsing, og en åttende er senere lagt til.`,
    },
    {
      id: 'od-3-5-text-2',
      type: 'text',
      content: `### De åtte formene for sløsing (TIMWOODS)

Et nyttig huskeord er **TIMWOODS**:

| Nr | Sløsing | Forklaring | Eksempel |
|----|---------|------------|----------|
| **T** | Transport | Unødvendig flytting av materialer | Råvarer som fraktes mellom fjerne lagre |
| **I** | Inventory (lager) | Mer lager enn nødvendig | Overfylte lagerhyller, ukurante varer |
| **M** | Motion (bevegelse) | Unødvendig bevegelse av mennesker | Hente verktøy fra annet rom |
| **W** | Waiting (venting) | Tid brukt på å vente | Vente på maskin, materiale eller godkjenning |
| **O** | Overproduction | Produsere mer enn etterspurt | Produsere 1000 når man trenger 500 |
| **O** | Over-processing | Gjøre mer enn kunden krever | Polere en overflate som ikke synes |
| **D** | Defects (feil) | Produkter som ikke holder mål | Kasserte enheter, reklamasjoner |
| **S** | Skills (ubrukt kompetanse) | Ansattes evner som ikke utnyttes | Erfarne ansatte som gjør rutinearbeid |

**Overproduksjon** anses som den verste formen for sløsing fordi den fører til de fleste andre formene: mer lager, mer transport, mer venting og flere feil.`,
    },
    {
      id: 'od-3-5-example-1',
      type: 'example',
      title: 'Eksempel: Identifisering av muda på et bakeri',
      problem: 'Et bakeri opplever at de kaster mye brød ved stengetid, ansatte går mye frem og tilbake mellom ulike rom, og bestselgeren er ofte utsolgt midt på dagen. Identifiser sløsingsformene.',
      solution: `**Løsning:**

1. **Overproduksjon**: Bakeriet baker for mye av noen brødtyper som ender som svinn.

2. **Lager (Inventory)**: Overflødig brød som kastes er unødvendig lagerbinding.

3. **Bevegelse (Motion)**: Ansatte som går mellom ulike rom bruker tid på ikke-verdiskapende bevegelse. Layouten bør optimaliseres.

4. **Defects**: Brød som kastes er i praksis en "feil" i planleggingen.

5. **Venting (Waiting)**: Kunder som ikke får kjøpt bestselgeren venter forgjeves, eller velger en konkurrent.

**Tiltak**: Bedre salgsprognoser basert på historiske data, omorganisere bakerilokalet for bedre flyt, og bake bestselgeren i mindre partier gjennom dagen (pull-prinsippet).`,
    },
    {
      id: 'od-3-5-def-3',
      type: 'definition',
      title: 'Kaizen',
      content: `**Kaizen** (japansk: "forandring til det bedre") er filosofien om kontinuerlig, gradvise forbedringer. I stedet for store, radikale endringer, handler kaizen om at alle ansatte bidrar med mange små forbedringer hver dag. Over tid gir dette betydelige resultater.`,
    },
    {
      id: 'od-3-5-text-3',
      type: 'text',
      content: `### Kaizen i praksis

**Kaizen-prosessen (PDCA-syklusen):**

1. **Plan (Planlegge)**: Identifiser et problem og foreslå en løsning
2. **Do (Gjennomføre)**: Test løsningen i liten skala
3. **Check (Kontrollere)**: Mål resultatene og sammenlign med målet
4. **Act (Korrigere)**: Standardiser løsningen hvis den fungerer, ellers prøv noe nytt

**Forutsetninger for vellykket kaizen:**
- Ledelsen støtter og oppmuntrer forbedringsforslag
- Alle ansatte involveres, uansett nivå
- Fokus på prosessforbedring, ikke skylddeling
- Små, raske forbedringer fremfor store prosjekter
- Standardisering av vellykkede endringer

**Gemba walk**: Ledere går jevnlig ut i produksjonen (gemba = "det virkelige stedet") for å observere, lytte og forstå. Ideen er at problemene best forstås der de oppstår, ikke fra et kontor.`,
    },
    {
      id: 'od-3-5-def-4',
      type: 'definition',
      title: 'Kanban',
      content: `**Kanban** (japansk: "visuelt kort") er et visuelt styringssystem som regulerer flyten av materialer og produksjon. Et kanban-kort signaliserer at neste steg i prosessen trenger påfyll, og utløser produksjon eller levering. Det er et pull-basert system som hindrer overproduksjon.`,
    },
    {
      id: 'od-3-5-text-4',
      type: 'text',
      content: `### Kanban -- visuell styring

**Slik fungerer kanban:**

1. Hvert produkt eller komponent har et kanban-kort
2. Når en enhet brukes fra lageret, frigis kanban-kortet
3. Kortet sendes tilbake til forrige steg som signal om å produsere/levere en ny enhet
4. Ingen produksjon skjer uten et kanban-signal

**Kanban-tavle** brukes ofte for prosjektstyring:

| Å gjøre | Under arbeid | Ferdig |
|---------|-------------|--------|
| Oppgave A | Oppgave B | Oppgave C |
| Oppgave D | | Oppgave E |
| | | |

**WIP-grense** (Work In Progress): Et sentralt prinsipp er å begrense hvor mange oppgaver som kan være under arbeid samtidig. Flere samtidige oppgaver gir mer kontekstbytte, flere feil og lengre gjennomløpstid.

**Digitale kanban-verktøy:** Trello, Jira og Monday.com er populære digitale verktøy som bygger på kanban-prinsippene.`,
    },
    {
      id: 'od-3-5-text-5',
      type: 'text',
      content: `### Andre lean-verktøy

**5S -- Arbeidsplassorganisering:**
1. **Sortere (Seiri)**: Fjern alt som ikke trengs
2. **Systematisere (Seiton)**: Alt har sin faste plass
3. **Skinne (Seiso)**: Hold arbeidsplassen ren
4. **Standardisere (Seiketsu)**: Lag rutiner for de tre første S-ene
5. **Sikre (Shitsuke)**: Oppretthold disiplin over tid

**Poka-yoke (feilsikring):**
- Design systemer slik at feil ikke kan oppstå
- Eksempel: USB-kontakter som bare kan settes inn på én måte
- Eksempel: Skjema som krever alle felt utfylt før innsending

**Andon (signal):**
- Visuelt eller auditivt varslingssystem
- Arbeidere kan stoppe produksjonslinjen ved problemer
- "Stop the line" -- kvalitet foran kvantitet`,
    },
    {
      id: 'od-3-5-tip-1',
      type: 'tip',
      title: 'Lean utenfor produksjon',
      content: `Lean-prinsippene brukes i dag langt utenfor industrien. Lean i helsevesenet reduserer ventetid for pasienter. Lean i offentlig forvaltning forenkler søknadsprosesser. Lean startup bruker prinsipper som MVP (Minimum Viable Product) og raske iterasjoner for å utvikle nye produkter og tjenester.`,
    },
    {
      id: 'od-3-5-text-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Lean** handler om å skape mest mulig verdi med minst mulig sløsing
- De **fem lean-prinsippene** er: definer verdi, kartlegg verdistrømmen, skap flyt, innfør pull, og søk perfeksjon
- **Muda** (TIMWOODS) beskriver åtte former for sløsing
- **Kaizen** er filosofien om kontinuerlige, små forbedringer
- **Kanban** er et visuelt pull-system som hindrer overproduksjon
- **5S**, **poka-yoke** og **andon** er praktiske lean-verktøy

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Lean | Produksjonsfilosofi som eliminerer sløsing |
| Muda | Sløsing -- aktiviteter som ikke skaper verdi |
| Kaizen | Kontinuerlig forbedring gjennom små steg |
| Kanban | Visuelt pull-system for produksjonsstyring |
| PDCA | Plan-Do-Check-Act-syklusen for forbedring |
| 5S | System for arbeidsplassorganisering |`,
    },
    // ========== OPPGAVER ==========
    {
      id: 'od-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'od-3-5-ex-1',
        number: '3.5.1',
        type: 'multiple-choice',
        task: 'Hvilken form for sløsing regnes som den verste i lean-tenkning?',
        options: [
          { id: 'a', text: 'Defects (feil)', isCorrect: false },
          { id: 'b', text: 'Waiting (venting)', isCorrect: false },
          { id: 'c', text: 'Overproduction (overproduksjon)', isCorrect: true },
          { id: 'd', text: 'Transport', isCorrect: false },
        ],
        solution: 'Overproduksjon regnes som den verste formen for sløsing fordi den fører til de fleste andre formene. Når du produserer for mye, trenger du mer lagerplass (inventory), mer transport, produktene kan stå og vente (waiting), og sjansen for feil (defects) øker.',
      },
    },
    {
      id: 'od-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'od-3-5-ex-2',
        number: '3.5.2',
        type: 'classic',
        task: 'Forklar de fem lean-prinsippene med dine egne ord. Bruk en pizzarestaurant som eksempel for hvert prinsipp.',
        solution: '1) Definer verdi: For kunden er verdien en god pizza, levert raskt, til rett pris. Alt annet (ventetid, feil på bestilling) er ikke-verdi. 2) Kartlegg verdistrømmen: Gå gjennom alle steg fra bestilling til servering -- ordremottak, deigforberedelse, topping, steking, servering. Finn steg som ikke tilfører verdi. 3) Skap flyt: Organiser kjøkkenet slik at pizzaen flyter jevnt gjennom prosessen uten stopp. Sørg for at ingredienser er lett tilgjengelige. 4) Innfør pull: Lag pizza etter bestilling, ikke på forhånd (unntatt kanskje bestselgere i rushtiden). 5) Søk perfeksjon: Spør kontinuerlig hvordan prosessen kan forbedres -- raskere ovn, bedre layout, mer effektiv ordremottak.',
      },
    },
    {
      id: 'od-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'od-3-5-ex-3',
        number: '3.5.3',
        type: 'classic',
        task: 'Besøk (virkelig eller tenkt) en butikk, kafé eller arbeidsplass. Identifiser minst fire av de åtte formene for sløsing (TIMWOODS) og foreslå konkrete tiltak for å redusere dem.',
        hints: ['Bruk forkortelsen TIMWOODS: Transport, Inventory, Motion, Waiting, Overproduction, Over-processing, Defects, Skills'],
        solution: 'Eksempel fra en kafé: Transport: Melk oppbevares i et kjølerom i bakrommet. Tiltak: Sett et lite kjøleskap under disken. Motion: Barista må gå tre steg til siden for å hente kopper. Tiltak: Flytt koppene rett ved kaffemaskinen. Waiting: Kunder venter 10 minutter i kø i rushtiden. Tiltak: Innfør forhåndsbestilling via app. Overproduction: Det lages for mange kanelboller som kastes ved stengetid. Tiltak: Bak i mindre partier gjennom dagen basert på salgsdata. Defects: Noen drikker lages feil og må kastes. Tiltak: Tydeligere ordresystem med skjerm for barista. Skills: En ansatt med barista-erfaring gjør bare oppvask. Tiltak: La den ansatte bruke sin kompetanse bak maskinen.',
      },
    },
    {
      id: 'od-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'od-3-5-ex-4',
        number: '3.5.4',
        type: 'classic',
        task: 'Forklar hva kaizen og PDCA-syklusen er. Gi et eksempel på hvordan en bedrift kan bruke PDCA til å forbedre en konkret prosess.',
        solution: 'Kaizen betyr kontinuerlig forbedring gjennom små, gradvise steg. PDCA (Plan-Do-Check-Act) er metoden for å gjennomføre forbedringer systematisk. Eksempel: En nettbutikk opplever mange feilsendinger. Plan: Analysere årsaker -- oppdager at plukklisten er uoversiktlig. Foreslår nytt format med strekkodeskanning. Do: Tester det nye systemet på ett av tre lagerområder i to uker. Check: Måler feilprosenten -- ned fra 3 % til 0,5 % i testområdet. Act: Innfører systemet på hele lageret, lager rutine for det nye systemet, og ser etter neste forbedringsmulighet. Nøkkelen er at dette aldri stopper -- etter at én forbedring er standardisert, starter man på neste PDCA-syklus.',
      },
    },
    {
      id: 'od-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'od-3-5-ex-5',
        number: '3.5.5',
        type: 'multiple-choice',
        task: 'Hva er formålet med en WIP-grense i kanban?',
        options: [
          { id: 'a', text: 'Å sørge for at alle ansatte har nok å gjøre', isCorrect: false },
          { id: 'b', text: 'Å begrense antall oppgaver under arbeid for å øke fokus og redusere gjennomløpstid', isCorrect: true },
          { id: 'c', text: 'Å sikre at ingen oppgaver blir glemt', isCorrect: false },
          { id: 'd', text: 'Å registrere hvor mange oppgaver som er fullført', isCorrect: false },
        ],
        solution: 'WIP-grensen (Work In Progress) begrenser antall oppgaver som kan være under arbeid samtidig. Dette øker fokus, reduserer kontekstbytte mellom oppgaver, avdekker flaskehalser raskt og korter ned gjennomløpstiden. Forskning viser at multitasking reduserer produktiviteten, og WIP-grensen tvinger teamet til å fullføre oppgaver før de starter nye.',
      },
    },
    {
      id: 'od-3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'od-3-5-ex-6',
        number: '3.5.6',
        type: 'classic',
        task: 'Drøft fordeler og utfordringer med å innføre lean i en norsk bedrift. Hva kan gjøre det vanskelig, og hva skal til for å lykkes?',
        hints: ['Tenk på kulturelle faktorer, ledelsens rolle og ansattes involvering'],
        solution: 'Fordeler: Reduserte kostnader gjennom eliminering av sløsing, bedre kvalitet gjennom fokus på feil og forbedring, kortere gjennomløpstid, økt kundetilfredshet og mer engasjerte ansatte som bidrar til forbedringer. Utfordringer: Kulturendring krever tid -- mange ansatte og ledere er vant til tradisjonelle metoder. Lean krever langsiktig forpliktelse fra toppledelsen, og mange gir opp for tidlig. Det kan oppstå motstand hvis ansatte frykter at effektivisering betyr færre arbeidsplasser. Suksessfaktorer: 1) Ledelsen må gå foran som gode eksempler (gemba walk). 2) Involvere ansatte fra starten -- de som gjør jobben vet best hvor sløsingen er. 3) Starte med små, synlige forbedringer som motiverer. 4) Kommunisere tydelig at lean handler om å forbedre prosesser, ikke kutte ansatte. 5) Feire og anerkjenne forbedringer. Norsk arbeidskultur med flat struktur og medbestemmelse passer godt for lean fordi det oppmuntrer til at alle bidrar med ideer.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const OKONOMI_DRIFT_DEL3_CHAPTERS = [
  CHAPTER_OKONOMI_DRIFT_3_1,
  CHAPTER_OKONOMI_DRIFT_3_2,
  CHAPTER_OKONOMI_DRIFT_3_3,
  CHAPTER_OKONOMI_DRIFT_3_4,
  CHAPTER_OKONOMI_DRIFT_3_5,
];
