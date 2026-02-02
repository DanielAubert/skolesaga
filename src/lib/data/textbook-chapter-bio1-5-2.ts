/**
 * Biologi 1 - Kapittel 5.2: Stoffkretsløp og næringskjeder
 */
import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_BIO1_5_2: TextbookChapter = {
  id: 'bio1-5-2',
  courseId: 'biologi-1',
  chapterNumber: '5.2',
  title: 'Stoffkretsløp og næringskjeder',
  description:
    'Karbonkretsløpet, nitrogenkretsløpet, vannkretsløpet og fosforkretsløpet. Hvordan stoffer sirkulerer i naturen, og hvordan menneskelig aktivitet forstyrrer disse kretsløpene.',
  estimatedMinutes: 75,
  competenceGoals: [
    'gjøre rede for stoffkretsløp i økosystemer, inkludert karbonkretsløpet, nitrogenkretsløpet, vannkretsløpet og fosforkretsløpet',
    'forklare sammenhengen mellom energistrøm og stoffkretsløp i økosystemer',
    'beskrive hvordan menneskelig aktivitet påvirker stoffkretsløpene, med vekt på klimaendringer og eutrofiering',
    'drøfte konsekvensene av menneskelige inngrep i biogeokjemiske kretsløp',
    'forklare begrepene nitrogenfiksering, nitrifikasjon, denitrifikasjon og ammonifikasjon',
    'vurdere betydningen av næringsstoffer som begrensende faktor i økosystemer',
  ],
  content: [
    // =========================================================================
    // INTRODUKSJON
    // =========================================================================
    {
      id: 'bio1-5-2-intro',
      type: 'text',
      title: 'Energi strømmer, stoffer sirkulerer',
      content: `# Stoffkretsløp og næringskjeder

Alle levende organismer trenger energi og byggematerialer. Energien kommer opprinnelig fra solen og strømmer gjennom næringskjedene -- fra produsenter til konsumenter og videre til nedbrytere. Denne energien kan **ikke gjenbrukes**: den omdannes til varme og forsvinner ut i verdensrommet.

Stoffene derimot -- karbon, nitrogen, fosfor, vann og andre grunnstoffer -- forsvinner ikke. De **sirkulerer** mellom levende organismer og det abiotiske miljøet (atmosfæren, havet, jordsmonnet, berggrunn). Denne sirkulasjonen kaller vi **stoffkretsløp** eller **biogeokjemiske kretsløp**.

**Hovedprinsippene:**
- Energi strømmer i **én retning** (sol $\\rightarrow$ produsenter $\\rightarrow$ konsumenter $\\rightarrow$ varme)
- Stoffer sirkulerer i **lukkede kretsløp** mellom det levende (biotisk) og det ikke-levende (abiotisk)
- Hvert grunnstoff har sitt eget kretsløp med ulike reservoarer og prosesser
- Menneskelig aktivitet har kraftig forstyrret flere av disse kretsløpene

I dette kapittelet skal vi se nærmere på fire sentrale stoffkretsløp:
1. **Karbonkretsløpet** -- grunnlaget for alt organisk liv
2. **Nitrogenkretsløpet** -- essensielt for proteiner og DNA
3. **Vannkretsløpet** -- løsemiddelet som gjør livet mulig
4. **Fosforkretsløpet** -- nødvendig for energioverføring og arvestoff`,
    },

    // =========================================================================
    // DEFINISJON: STOFFKRETSLØP
    // =========================================================================
    {
      id: 'bio1-5-2-def-stoffkretslop',
      type: 'definition',
      title: 'Stoffkretsløp (biogeokjemisk kretsløp)',
      content:
        'Et **stoffkretsløp** er den kontinuerlige sirkulasjonen av et grunnstoff eller kjemisk forbindelse mellom levende organismer (biosfæren) og det abiotiske miljøet (atmosfæren, hydrosfæren, litosfæren). Stoffene skifter mellom ulike kjemiske forbindelser og fysiske tilstander, men den totale mengden av grunnstoffet forblir konstant. Prefikset *bio-* refererer til levende organismer, *geo-* til jorden, og *kjemisk* til de kjemiske reaksjonene som driver kretsløpet.',
    },

    // =========================================================================
    // KARBONKRETSLØPET
    // =========================================================================
    {
      id: 'bio1-5-2-karbon-intro',
      type: 'text',
      title: 'Karbonkretsløpet',
      content: `# Karbonkretsløpet

Karbon (C) er selve grunnstoffet for livet. Alle organiske molekyler -- karbohydrater, lipider, proteiner og nukleinsyrer -- inneholder karbon. Karbonkretsløpet beskriver hvordan karbon sirkulerer mellom atmosfæren, havet, jordsmonnet, levende organismer og fossile lagre.

## Fotosyntese: CO$_2$ tas opp

Karbonkretsløpet starter med **fotosyntesen**. Planter, alger og fotosyntetiserende bakterier tar opp karbondioksid (CO$_2$) fra atmosfæren og bruker solenergi til å bygge organiske molekyler:

$$6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{lysenergi}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$$

Gjennom fotosyntesen binder produsentene ca. **120 milliarder tonn karbon** fra atmosfæren hvert år. Karbonet lagres i plantemasse (biomasse) -- i blader, stammer, røtter og frø.

## Celleånding: CO$_2$ frigis

Alle levende organismer -- både planter, dyr og mikroorganismer -- bryter ned organiske molekyler gjennom **celleånding** (respirasjon):

$$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{energi (ATP)}$$

Ved celleånding frigis CO$_2$ tilbake til atmosfæren. Dette er den **omvendte prosessen** av fotosyntesen. Mesteparten av karbonet som tas opp i fotosyntesen, frigis igjen gjennom celleånding.

## Nedbrytning

Når organismer dør, brytes det organiske materialet ned av **nedbrytere** (dekomponenter) -- sopp og bakterier. Nedbrytningen er i prinsippet celleånding utført av mikroorganismene, og frigir CO$_2$ tilbake til atmosfæren. Nedbrytning er avgjørende for å resirkulere karbon og andre næringsstoffer tilbake til økosystemet.

Hastigheten på nedbrytningen avhenger av:
- **Temperatur** -- raskere i varmt klima
- **Fuktighet** -- trenger vann for mikrobielt liv
- **Oksygentilgang** -- aerob nedbrytning er raskere enn anaerob
- **Type organisk materiale** -- sukker brytes raskere ned enn cellulose og lignin`,
    },
    {
      id: 'bio1-5-2-def-karbonkretslop',
      type: 'definition',
      title: 'Karbonkretsløpet',
      content:
        'Karbonkretsløpet er den biogeokjemiske sirkulasjonen av karbon mellom atmosfæren (CO$_2$), biosfæren (levende organismer), hydrosfæren (havet), litosfæren (berggrunn og fossile avleiringer) og pedosfæren (jordsmonn). Karbonkretsløpet drives av fotosyntese, celleånding, nedbrytning, havets opptak, vulkansk aktivitet og forbrenning.',
    },
    {
      id: 'bio1-5-2-karbon-fossilt',
      type: 'text',
      title: 'Fossilt karbon og forbrenning',
      content: `## Dannelse av fossile brennstoffer

Ikke alt organisk materiale brytes ned fullstendig. Under visse forhold -- spesielt der det er **lite oksygen** -- kan dødt organisk materiale bli begravd under sedimenter. Over **millioner av år** omdannes dette materialet under høyt trykk og høy temperatur til:

- **Kull** -- fra landplanter (spesielt i sumper fra karbontiden, for 300--360 millioner år siden)
- **Olje og naturgass** -- fra marine alger og plankton (typisk 100--300 millioner år gammelt)
- **Torv** -- et tidlig stadium i dannelsen av kull (tusenvis av år)

Fossile brennstoffer er altså **lagret solenergi og karbon** fra fortiden. Karbonet har vært «tatt ut av kretsløpet» i hundrevis av millioner av år.

## Forbrenning av fossile brennstoffer

Når mennesker brenner kull, olje og naturgass, frigis det lagrede karbonet raskt tilbake som CO$_2$:

$$\\text{Fossilt brensel} + \\text{O}_2 \\rightarrow \\text{CO}_2 + \\text{H}_2\\text{O} + \\text{energi}$$

**Problemet:** Vi frigjør karbon som har vært lagret i millioner av år i løpet av bare noen tiår. Atmosfærens CO$_2$-konsentrasjon har økt fra ca. **280 ppm** (før industrialiseringen, ca. 1750) til over **420 ppm** i dag -- en økning på 50 %.

Menneskelig forbrenning av fossile brennstoffer frigjør ca. **9,5 milliarder tonn karbon** per år til atmosfæren.`,
    },
    {
      id: 'bio1-5-2-karbon-hav',
      type: 'text',
      title: 'Havet som karbonsluk',
      content: `## Havet som karbonsluk

Havet spiller en **sentral rolle** i karbonkretsløpet. Det er jordens største aktive karbonreservoar og absorberer ca. **25--30 %** av menneskeskapte CO$_2$-utslipp hvert år.

### Oppløsning av CO$_2$ i sjøvann

CO$_2$ fra atmosfæren løses i havoverflaten:

$$\\text{CO}_2(\\text{g}) \\rightleftharpoons \\text{CO}_2(\\text{aq})$$

I vann reagerer CO$_2$ med vann og danner karbonsyre, som igjen danner bikarbonat- og karbonationer:

$$\\text{CO}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_2\\text{CO}_3 \\rightleftharpoons \\text{H}^+ + \\text{HCO}_3^- \\rightleftharpoons 2\\text{H}^+ + \\text{CO}_3^{2-}$$

Dette kalles **karbonatsystemet** og fungerer som en buffer som regulerer havets pH. Men med økende CO$_2$-opptak forskyves likevekten slik at pH synker -- havet blir **surere**. Denne prosessen kalles **havforsuring**.

### Biologisk pumpe

Fytoplankton i havoverflaten driver fotosyntese og binder CO$_2$ i organisk materiale. Når disse organismene dør, synker de mot dyphavet og tar karbonet med seg. Denne prosessen kalles den **biologiske pumpen** og transporterer karbon fra overflaten til dypet.

### Konsekvenser av havforsuring

- Kalsiumkarbonat (CaCO$_3$) i skjell og korallrev løses lettere i surere vann
- Korallrev trues -- de vokser langsommere og bleker
- Skalldyr og plankton med kalkskall får vanskeligheter
- Hele marine næringskjeder kan påvirkes`,
    },
    {
      id: 'bio1-5-2-def-karbonreservoar',
      type: 'definition',
      title: 'Karbonreservoar',
      content:
        'Et **karbonreservoar** er et lager der karbon er bundet over kortere eller lengre tid. De viktigste karbonreservoarene er: **litosfæren** (berggrunn og fossile avleiringer: ca. 100 000 000 GtC), **dyphavet** (ca. 37 000 GtC), **jordsmonn** (ca. 1 500--2 400 GtC), **atmosfæren** (ca. 870 GtC), **overflatehavet** (ca. 900 GtC), og **levende biomasse** (ca. 550 GtC). GtC = gigatonn karbon = milliarder tonn karbon. Overføring av karbon mellom reservoarer kalles **fluks**.',
    },
    {
      id: 'bio1-5-2-karbon-forstyrrelse',
      type: 'text',
      title: 'Menneskelig forstyrrelse av karbonkretsløpet',
      content: `## Menneskelig forstyrrelse av karbonkretsløpet

Mennesket har på kort tid endret karbonkretsløpet dramatisk gjennom:

### 1. Forbrenning av fossile brennstoffer
- Frigjør ca. **36 milliarder tonn CO$_2$** per år (9,5 GtC)
- Hovedkilden til økt CO$_2$ i atmosfæren
- Energiproduksjon, transport, industri og oppvarming

### 2. Avskoging og arealbruksendringer
- Skog binder store mengder karbon
- Hogst og avskoging frigir lagret karbon
- Bidrar med ca. **4 milliarder tonn CO$_2$** per år
- Tropisk regnskog er spesielt viktig

### 3. Sementproduksjon
- Kalkstein (CaCO$_3$) varmes opp og frigir CO$_2$:
$$\\text{CaCO}_3 \\xrightarrow{\\text{varme}} \\text{CaO} + \\text{CO}_2$$
- Bidrar med ca. 8 % av globale CO$_2$-utslipp

### Konsekvensen: Forsterket drivhuseffekt

CO$_2$ er en drivhusgass som absorberer infrarød (varme)stråling fra jordoverflaten. Økt CO$_2$-konsentrasjon fører til:
- **Forsterket drivhuseffekt** -- mer varme holdes tilbake i atmosfæren
- **Global oppvarming** -- gjennomsnittstemperaturen stiger
- **Klimaendringer** -- endrede nedbørsmønstre, smelting av isbreer, stigende havnivå, mer ekstremvær

Karbonkretsløpet er i **ubalanse**: menneskene tilfører CO$_2$ til atmosfæren raskere enn naturlige prosesser (hav, fotosyntese) klarer å fjerne det.`,
    },
    {
      id: 'bio1-5-2-ex-karbonatom',
      type: 'example',
      title: 'Følg et karbonatom gjennom kretsløpet',
      content: `**Tenk deg et enkelt karbonatom (C) og følg dets reise gjennom karbonkretsløpet:**

**Steg 1 -- Atmosfæren:** Karboatomet er del av et CO$_2$-molekyl i atmosfæren.

**Steg 2 -- Fotosyntese:** En bjørk tar opp CO$_2$-molekylet gjennom spalteåpningene i bladene. Gjennom fotosyntesen bygges karbonet inn i et glukosemolekyl (C$_6$H$_{12}$O$_6$).

**Steg 3 -- Biomasse:** Glukosen brukes til å bygge cellulose i bjørkens stamme. Karboatomet er nå lagret i trevirket.

**Steg 4 -- Konsument:** En elg spiser bladene fra bjørka. Karboatomet overføres til elgens kropp og bygges inn i et proteinmolekyl.

**Steg 5 -- Celleånding:** Elgen bruker proteinet som energikilde. Gjennom celleånding brytes molekylet ned, og karboatomet frigis som CO$_2$ gjennom utpust.

**Steg 6 -- Havet:** CO$_2$-molekylet føres med vinden over havet og løses i havoverflaten. Det danner bikarbonat (HCO$_3^-$).

**Steg 7 -- Marin organisme:** En korall bruker karbonatione til å bygge kalkskall (CaCO$_3$). Korallen dør og synker til bunnen.

**Steg 8 -- Sediment:** Over millioner av år presses kalksteinen ned og blir til bergart (sedimentær bergart).

**Steg 9 -- Vulkanisme:** Kalksteinen smeltes dypt i jordskorpen, og CO$_2$ frigis gjennom et vulkanutbrudd tilbake til atmosfæren.

**Tidsramme:** Hele kretsløpet kan ta fra **minutter** (celleånding) til **hundrevis av millioner av år** (fossilt lagring og vulkanisme).`,
    },

    // =========================================================================
    // NITROGENKRETSLØPET
    // =========================================================================
    {
      id: 'bio1-5-2-nitrogen-intro',
      type: 'text',
      title: 'Nitrogenkretsløpet',
      content: `# Nitrogenkretsløpet

Nitrogen (N) er et essensielt grunnstoff for alt liv. Det inngår i aminosyrer (byggesteinene i proteiner), nukleotider (byggesteinene i DNA og RNA), og mange andre biologisk viktige molekyler.

## Nitrogen i atmosfæren

Atmosfæren inneholder **78 % nitrogengass (N$_2$)**. Til tross for denne enorme mengden er N$_2$ **utilgjengelig for de fleste organismer**. Årsaken er at de to nitrogenatomene er bundet sammen med en svært sterk **trippelbinding** (N$\\equiv$N), som krever mye energi å bryte.

For at nitrogen skal bli tilgjengelig for planter og dyr, må N$_2$ først omdannes til reaktive former som ammonium (NH$_4^+$) eller nitrat (NO$_3^-$). Denne prosessen og de påfølgende transformasjonene utgjør nitrogenkretsløpet.

## Nitrogenkretsløpets hovedprosesser

Nitrogenkretsløpet består av fem sentrale prosesser:

1. **Nitrogenfiksering** -- N$_2$ $\\rightarrow$ NH$_4^+$
2. **Nitrifikasjon** -- NH$_4^+$ $\\rightarrow$ NO$_2^-$ $\\rightarrow$ NO$_3^-$
3. **Assimilasjon** -- planter tar opp NO$_3^-$ og NH$_4^+$
4. **Ammonifikasjon** -- organisk N $\\rightarrow$ NH$_4^+$
5. **Denitrifikasjon** -- NO$_3^-$ $\\rightarrow$ N$_2$

La oss se på hver av disse i detalj.`,
    },
    {
      id: 'bio1-5-2-def-nitrogenfiksering',
      type: 'definition',
      title: 'Nitrogenfiksering',
      content:
        '**Nitrogenfiksering** er omdannelsen av atmosfærisk nitrogengass (N$_2$) til ammonium (NH$_4^+$) eller ammoniakk (NH$_3$). Biologisk nitrogenfiksering utføres av spesialiserte bakterier (diazotrofer) som har enzymet **nitrogenase**. De viktigste nitrogenfikserende bakteriene er *Rhizobium*-arter, som lever i symbiose med belgplanter (ert, kløver, bønne), og frittlevende cyanobakterier. Industriell nitrogenfiksering skjer gjennom **Haber-Bosch-prosessen**, som omdanner N$_2$ og H$_2$ til NH$_3$ under høyt trykk og temperatur.',
    },
    {
      id: 'bio1-5-2-nitrogen-prosesser',
      type: 'text',
      title: 'Prosessene i nitrogenkretsløpet',
      content: `## 1. Nitrogenfiksering

Nitrogenfiksering omdanner N$_2$ til biologisk tilgjengelig form:

$$\\text{N}_2 + 8\\text{H}^+ + 8\\text{e}^- + 16\\text{ATP} \\xrightarrow{\\text{nitrogenase}} 2\\text{NH}_3 + \\text{H}_2 + 16\\text{ADP}$$

**Biologisk fiksering:**
- **Symbiotiske bakterier:** *Rhizobium* lever i rotknollene til belgplanter (ert, kløver, lupin, bønne). Bakteriene fikser N$_2$ og gir planten ammonium, mens planten gir bakteriene karbohydrater. Denne symbiosen er svært effektiv.
- **Frittlevende bakterier:** *Azotobacter* og cyanobakterier (f.eks. *Anabaena*) fikser nitrogen uavhengig i jord og vann.
- Bidrar med ca. **100--200 millioner tonn** nitrogen per år globalt

**Industriell fiksering (Haber-Bosch-prosessen):**
$$\\text{N}_2 + 3\\text{H}_2 \\xrightarrow{\\text{høyt trykk, varme, katalysator}} 2\\text{NH}_3$$
- Utviklet i 1913 for å produsere kunstgjødsel
- Produserer ca. **150 millioner tonn** ammoniakk per år
- Krever enorme mengder energi (1--2 % av verdens energiforbruk)
- Har mer enn **doblet** den globale nitrogentilgangen

**Abiotisk fiksering:**
- Lyn kan spalte N$_2$ og danne nitrogenoksider (NO$_x$), som omdannes til nitrat i regn
- Bidrar med ca. 5--10 millioner tonn per år (lite sammenlignet med biologisk og industriell fiksering)

## 2. Nitrifikasjon

Etter nitrogenfiksering omdannes ammonium (NH$_4^+$) videre av **nitrifikasjonsbakterier** i to trinn:

**Trinn 1:** Ammonium til nitritt (utføres av *Nitrosomonas*):
$$\\text{NH}_4^+ \\xrightarrow{\\textit{Nitrosomonas}} \\text{NO}_2^-$$

**Trinn 2:** Nitritt til nitrat (utføres av *Nitrobacter*):
$$\\text{NO}_2^- \\xrightarrow{\\textit{Nitrobacter}} \\text{NO}_3^-$$

Nitrifikasjon er en **aerob prosess** (krever oksygen) og skjer i jord og vann. Nitrat (NO$_3^-$) er den formen planter lettest tar opp.

## 3. Assimilasjon

Planter absorberer nitrat (NO$_3^-$) og ammonium (NH$_4^+$) fra jordsmonnet gjennom røttene. Nitrogen bygges inn i **aminosyrer**, som videre brukes til å lage **proteiner**, **nukleinsyrer** (DNA, RNA) og andre nitrogenholdige forbindelser. Når dyr spiser planter, overføres nitrogen gjennom næringskjeden.

## 4. Ammonifikasjon

Når organismer dør eller produserer avfall (urin, avføring), bryter nedbrytere (sopp og bakterier) ned de organiske nitrogensforbindelsene og frigir ammonium (NH$_4^+$):

$$\\text{Organisk nitrogen} \\xrightarrow{\\text{nedbrytere}} \\text{NH}_4^+$$

Ammonium kan deretter gjennomgå nitrifikasjon eller tas direkte opp av planter.

## 5. Denitrifikasjon

Under **anaerobe forhold** (oksygenfritt miljø, f.eks. fuktig jord, sedimenter) omdanner **denitrifikasjonsbakterier** nitrat tilbake til nitrogengass:

$$\\text{NO}_3^- \\xrightarrow{\\text{denitrifikasjonsbakterier}} \\text{NO}_2^- \\rightarrow \\text{NO} \\rightarrow \\text{N}_2\\text{O} \\rightarrow \\text{N}_2$$

Denitrifikasjon **lukker kretsløpet** ved å returnere nitrogen til atmosfæren. Den er viktig for å forhindre opphopning av nitrat i jord og vann.`,
    },
    {
      id: 'bio1-5-2-def-nitrifikasjon',
      type: 'definition',
      title: 'Nitrifikasjon',
      content:
        '**Nitrifikasjon** er den mikrobielle oksidasjonen av ammonium (NH$_4^+$) til nitritt (NO$_2^-$) og videre til nitrat (NO$_3^-$). Prosessen utføres av nitrifikasjonsbakterier (*Nitrosomonas* og *Nitrobacter*) og krever oksygen (aerob prosess). Nitrifikasjon er viktig fordi nitrat (NO$_3^-$) er den formen av nitrogen som planter lettest tar opp fra jord.',
    },
    {
      id: 'bio1-5-2-def-denitrifikasjon',
      type: 'definition',
      title: 'Denitrifikasjon',
      content:
        '**Denitrifikasjon** er den mikrobielle reduksjonen av nitrat (NO$_3^-$) til nitrogengass (N$_2$) via nitritt (NO$_2^-$), nitrogenmonoksid (NO) og lystgass (N$_2$O). Prosessen skjer under anaerobe (oksygenfrie) forhold og utføres av denitrifikasjonsbakterier. Denitrifikasjon lukker nitrogenkretsløpet ved å returnere nitrogen til atmosfæren.',
    },
    {
      id: 'bio1-5-2-nitrogen-menneske',
      type: 'text',
      title: 'Menneskelig forstyrrelse av nitrogenkretsløpet',
      content: `## Menneskelig forstyrrelse av nitrogenkretsløpet

Mennesket har mer enn **doblet** den globale tilførselen av reaktivt nitrogen gjennom:

### 1. Kunstgjødsel (Haber-Bosch-prosessen)
- Ca. **150 millioner tonn** ammoniakk produseres industrielt hvert år
- Brukes som gjødsel i jordbruket for å øke matproduksjonen
- Har gjort det mulig å brødfø verdens befolkning, men med alvorlige bieffekter

### 2. Forbrenning av fossile brennstoffer
- Frigjør nitrogenoksider (NO$_x$) til atmosfæren
- Bidrar til luftforurensning og **sur nedbør**:
$$\\text{NO}_x + \\text{H}_2\\text{O} \\rightarrow \\text{HNO}_3 \\text{ (salpetersyre)}$$

### 3. Dyrking av belgplanter
- Økt dyrking av soya, erter og bønner øker biologisk nitrogenfiksering

### Konsekvenser

**Eutrofiering:** Overskudd av nitrogen (og fosfor) renner av fra jordbruksmark og havner i innsjøer, elver og kystområder. Dette fører til:
- **Algoppblomstring** -- kraftig vekst av alger
- **Oksygenmangel** -- når algene dør og brytes ned, brukes oksygenet i vannet
- **Døde soner** -- områder med så lite oksygen at fisk og bunndyr dør
- Tap av artsmangfold

**Sur nedbør:** Nitrogenoksider bidrar til sur nedbør, som skader skog, forsuerer innsjøer og ødelegger bygninger.

**Lystgass (N$_2$O):** Nitrogengjødsel frigjør lystgass, som er en kraftig drivhusgass (ca. 300 ganger sterkere enn CO$_2$) og bryter ned ozonlaget.`,
    },
    {
      id: 'bio1-5-2-def-eutrofiering',
      type: 'definition',
      title: 'Eutrofiering',
      content:
        '**Eutrofiering** (overgjødsling) er en prosess der et vannområde tilføres for mye næringsstoffer, spesielt nitrogen og fosfor. Dette fører til kraftig algevekst (algoppblomstring), som igjen fører til oksygenmangel når algene dør og brytes ned av bakterier. Resultatet kan bli **døde soner** der nesten alt dyreliv forsvinner. Eutrofiering kan være naturlig (langsom), men menneskelig aktivitet (gjødselavrenning, kloakkutslipp) har kraftig akselerert prosessen i mange vannområder.',
    },
    {
      id: 'bio1-5-2-ex-gjodsel',
      type: 'example',
      title: 'Hvordan gjødselavrenning skaper døde soner i fjorder',
      content: `**Situasjon:** En bonde ved Oslofjorden bruker store mengder nitrogengjødsel på åkrene sine om våren.

**Steg 1 -- Avrenning:** Kraftig regn vasker overskuddet av nitrat (NO$_3^-$) fra jordene og ut i en bekk som renner til fjorden.

**Steg 2 -- Algoppblomstring:** Det næringsrike vannet stimulerer eksplosiv vekst av planteplankton (alger) i fjorden. Vannet blir grønt og uklart.

**Steg 3 -- Algedød:** Etter kort tid dør de fleste algene fordi de skygger for hverandre og bruker opp næringsstoffene.

**Steg 4 -- Nedbrytning:** Bakterier bryter ned de døde algene. Nedbrytningen er aerob og forbruker store mengder oppløst oksygen i vannet.

**Steg 5 -- Oksygenmangel:** Oksygennivået i bunnvannet synker drastisk, ofte til under 2 mg/L (normalt er det 8--10 mg/L).

**Steg 6 -- Død sone:** Fisk, krabber, reker og bunndyr dør eller flykter. Området blir en «død sone» der bare anaerobe bakterier overlever. Disse kan produsere giftig hydrogensulfid (H$_2$S), som gir råtten-egg-lukt.

**Resultatet:** Oslofjorden og mange andre norske fjorder har store problemer med eutrofiering. Torskestammen i Oslofjorden har kollapset, og bunnområder er delvis livløse.

**Løsninger:** Redusert bruk av gjødsel, buffersoner med vegetasjon langs vassdrag, rensing av kloakk, og restaurering av våtmarker som naturlige filtre.`,
    },

    // =========================================================================
    // VANNKRETSLØPET
    // =========================================================================
    {
      id: 'bio1-5-2-vann',
      type: 'text',
      title: 'Vannkretsløpet',
      content: `# Vannkretsløpet

Vann (H$_2$O) er livets løsemiddel. Alle biokjemiske reaksjoner skjer i vandig miljø, og alle organismer er avhengige av vann. Vannkretsløpet (det hydrologiske kretsløpet) beskriver hvordan vann sirkulerer mellom atmosfæren, landjorden og havet.

## Prosessene i vannkretsløpet

### Fordampning (evaporasjon)
Solenergi varmer opp vann i hav, innsjøer, elver og fuktig jord. Vannet går over fra flytende form til vanndamp (gass) og stiger opp i atmosfæren. Ca. **86 %** av all fordampning skjer fra havoverflaten.

### Transpirasjon
Planter suger opp vann gjennom røttene og avgir vanndamp gjennom spalteåpningene i bladene. Denne prosessen kalles **transpirasjon**. Et stort tre kan transpirere **flere hundre liter** vann per dag. Samlet sett bidrar transpirasjon med en betydelig andel av vanndampen i atmosfæren over landområder.

Fordampning og transpirasjon kalles samlet **evapotranspirasjon**.

### Kondensasjon
Vanndamp stiger opp i atmosfæren, avkjøles, og kondenserer på støvpartikler til små vanndråper eller iskrystaller. Disse danner **skyer**.

### Nedbør (presipitasjon)
Når vanndråpene i skyene blir tunge nok, faller de som **nedbør** -- regn, snø, hagl eller sludd. Ca. **77 %** av nedbøren faller over havet og resten over land.

### Avrenning
Nedbør som treffer landjorden, kan:
- **Renne av** på overflaten (overflateavrenning) og samle seg i bekker, elver og innsjøer
- **Infiltrere** ned i jordsmonnet og bli til grunnvann
- **Lagres** som snø og is i isbreer

Avrenning transporterer vannet tilbake til havet, og kretsløpet er sluttet.

## Vannets betydning for livet

- **Løsemiddel:** Vann løser salter, gasser, næringsstoffer og andre stoffer som organismer trenger
- **Temperaturregulering:** Vannets høye varmekapasitet demper temperatursvingninger
- **Transport:** Vann transporterer næringsstoffer i jord, planter og dyr (blod)
- **Habitat:** Hav, innsjøer og elver er levesteder for utallige arter
- **Fotosyntese:** Vann er et nødvendig reaktant i fotosyntesen`,
    },

    // =========================================================================
    // FOSFORKRETSLØPET
    // =========================================================================
    {
      id: 'bio1-5-2-fosfor',
      type: 'text',
      title: 'Fosforkretsløpet',
      content: `# Fosforkretsløpet

Fosfor (P) er et essensielt grunnstoff som inngår i **DNA**, **RNA**, **ATP** (energimolekylet) og **fosfolipider** (cellemembranene). I motsetning til karbon og nitrogen har fosforkretsløpet **ingen gassformig fase** -- fosfor sirkulerer primært mellom berggrunn, jord, vann og levende organismer.

## Prosessene i fosforkretsløpet

### 1. Forvitring av bergarter
Fosfor finnes naturlig i mineralet **apatitt** i berggrunnen. Gjennom **forvitring** (kjemisk og mekanisk nedbrytning av bergarter) frigis fosfationer (PO$_4^{3-}$) til jordsmonnet og vannet. Denne prosessen er **svært langsom** (geologisk tidsskala).

### 2. Opptak av planter
Planter tar opp oppløst fosfat (PO$_4^{3-}$) gjennom røttene. Fosfor bygges inn i organiske molekyler (DNA, ATP, fosfolipider).

### 3. Gjennom næringskjeden
Dyr får fosfor ved å spise planter eller andre dyr. Fosfor inngår i bein, tenner, DNA og energistoffskiftet hos alle organismer.

### 4. Nedbrytning og tilbakeføring
Når organismer dør og brytes ned, frigjør nedbrytere fosfat tilbake til jordsmonnet. Dyrs avføring (guano fra sjøfugl er en kjent kilde) tilfører også fosfat.

### 5. Sedimentering
Fosfat som transporteres til havet med elver, kan sedimentere på havbunnen og over millioner av år danne nye fosforholdige bergarter. Dette er den **langsomme delen** av kretsløpet.

## Fosfor som begrensende faktor

Fordi forvitring er langsom og fosfor lett binder seg til jordpartikler, er fosfor ofte den **begrensende næringsfaktoren** i ferskvann. Det betyr at det er fosfor -- ikke nitrogen -- som oftest avgjør hvor mye planteplankton og alger som kan vokse i innsjøer.

I marine økosystemer kan nitrogen være begrensende i noen områder, men fosfor er kritisk i ferskvann.

## Menneskelig forstyrrelse

- **Fosforgjødsel:** Gruvedrift av fosfatbergarter for gjødsel tilfører mye ekstra fosfor til jordbruksland
- **Avrenning:** Fosfor fra gjødsel og kloakk renner ut i innsjøer og elver
- **Eutrofiering:** Selv små mengder ekstra fosfor kan utløse algeoppblomstring i ferskvann
- **Begrenset ressurs:** Verdens fosfatreserver er endelige -- noen estimater antyder at de kan tømmes innen 100--300 år`,
    },
    {
      id: 'bio1-5-2-ex-nitrogen-jordbruk',
      type: 'example',
      title: 'Nitrogenkretsløpet i jordbrukssammenheng',
      content: `**Situasjon:** En bonde i Trøndelag dyrker korn på et jorde og bruker både belgplanter i vekstskiftet og kunstgjødsel.

**Nitrogenfiksering i praksis:**
Bonden sår kløver (en belgplante) annethvert år. *Rhizobium*-bakterier i kløverens rotknoller fikserer N$_2$ fra luften og omdanner det til NH$_4^+$. Når kløveren pløyes ned, frigjøres nitrogen til jordsmonnet -- naturlig gjødsling!

**Kunstgjødsel:**
I kornåret tilsetter bonden NPK-gjødsel (nitrogen-fosfor-kalium). Nitrogenet er produsert med Haber-Bosch-prosessen og tilføres som ammoniumnitrat (NH$_4$NO$_3$).

**Nitrifikasjon i jordsmonnet:**
Ammonium (NH$_4^+$) fra både biologisk fiksering og gjødsel oksideres av *Nitrosomonas* til nitritt (NO$_2^-$), og videre av *Nitrobacter* til nitrat (NO$_3^-$).

**Assimilasjon:**
Kornplantene tar opp nitrat (NO$_3^-$) og ammonium (NH$_4^+$) gjennom røttene og bygger aminosyrer og proteiner. Kornet vi spiser, inneholder dette nitrogenet.

**Tap fra systemet:**
- **Avrenning:** Nitrat som ikke tas opp av plantene, vaskes ut med regnvann og ender i vassdrag (eutrofiering)
- **Denitrifikasjon:** I fuktige jordlag omdanner bakterier nitrat til N$_2$ som unnslipper til atmosfæren
- **Lystgass:** Noe nitrogen tapes som N$_2$O (drivhusgass)

**Konklusjon:** Jordbruket er sterkt avhengig av nitrogenkretsløpet, men menneskelig gjødsling tilfører langt mer nitrogen enn det naturlige kretsløpet.`,
    },

    // =========================================================================
    // BIOGEOKJEMISKE KRETSLØP OG MENNESKELIG PÅVIRKNING
    // =========================================================================
    {
      id: 'bio1-5-2-sammenheng',
      type: 'text',
      title: 'Biogeokjemiske kretsløp og menneskelig påvirkning',
      content: `# Biogeokjemiske kretsløp under press

De fire stoffkretsløpene -- karbon, nitrogen, vann og fosfor -- er tett sammenkoblet. Forstyrrelse av ett kretsløp påvirker de andre.

## Eutrofiering: nitrogen og fosfor i samspill

Eutrofiering illustrerer hvordan overskudd av **både** nitrogen og fosfor forstyrrer akvatiske økosystemer:

- I **ferskvann** er fosfor oftest den begrensende faktoren -- selv små tilskudd kan utløse algoppblomstring
- I **marine miljøer** kan nitrogen være begrensende
- Avrenning fra jordbruk tilfører begge næringsstoffene til vannmiljøet
- Resultatet er algoppblomstring, oksygenmangel og tap av biologisk mangfold

## Sur nedbør: nitrogen og svovel

Forbrenning av fossile brennstoffer frigjør nitrogenoksider (NO$_x$) og svoveldioksid (SO$_2$) til atmosfæren. Disse reagerer med vann og danner syre:

$$\\text{SO}_2 + \\text{H}_2\\text{O} \\rightarrow \\text{H}_2\\text{SO}_3 \\text{ (svovelsyrling)}$$
$$\\text{NO}_x + \\text{H}_2\\text{O} \\rightarrow \\text{HNO}_3 \\text{ (salpetersyre)}$$

Sur nedbør (pH under 5,6) kan:
- **Forsure innsjøer** -- dreper fisk og bunndyr
- **Skade skog** -- løser ut giftige metaller (aluminium) som ødelegger røtter
- **Forvitring** -- bryter ned bygninger og statuer

Norge var hardt rammet av sur nedbør fra 1960-tallet, med omfattende fiskedød i innsjøer på Sørlandet. Internasjonale avtaler om utslippsreduksjon har bedret situasjonen betraktelig.

## Klimaendringer: karbonkretsløpet i sentrum

Forstyrrelsen av karbonkretsløpet er den mest dramatiske:
- Forsterket drivhuseffekt fra økt CO$_2$ og andre klimagasser
- Endret vannkretsløp (mer fordampning, endrede nedbørsmønstre)
- Tining av permafrost frigjør både karbon og nitrogen
- Havforsuring truer marine økosystemer

## Næringsbegrensning i økosystemer

I ethvert økosystem finnes det en **begrensende faktor** -- det næringsstoffet som er minst tilgjengelig i forhold til organismenes behov. Dette styrer hvor mye biomasse som kan produseres.

- **Liebigs minimumslov:** Veksten begrenses av det næringsstoffet som er relativt minst tilgjengelig
- I ferskvann er fosfor oftest begrensende
- I havmiljø kan nitrogen, jern eller fosfor være begrensende, avhengig av region
- På land kan nitrogen, fosfor eller vann være begrensende

Forståelse av begrensende faktorer er viktig for å forutsi konsekvensene av forurensning og forvalte økosystemer bærekraftig.`,
    },
    {
      id: 'bio1-5-2-warning-kriser',
      type: 'warning',
      title: 'Planetære grenser',
      content: `Forskere har identifisert ni **planetære grenser** -- terskler som menneskeheten ikke bør overskride for å opprettholde et stabilt jordsystem. To av disse grensene er direkte knyttet til stoffkretsløpene og er allerede **kraftig overskredet**:

1. **Biogeokjemiske strømmer (nitrogen og fosfor):** Menneskelig tilførsel av reaktivt nitrogen og fosfor til biosfæren er langt over grenseverdien. Eutrofiering, døde soner og forurensning av grunnvann er konsekvensene.

2. **Klimaendringer (karbonkretsløpet):** CO$_2$-konsentrasjonen i atmosfæren er langt over det nivået som anses som trygt (350 ppm; nå over 420 ppm).

Disse overskridelsene er ikke bare miljøproblemer -- de truer grunnlaget for matproduksjon, vannforsyning og økosystemtjenester som menneskeheten er avhengig av.`,
    },
    {
      id: 'bio1-5-2-note-oppsummering',
      type: 'note',
      title: 'Oppsummering av stoffkretsløpene',
      content: `**Karbonkretsløpet:**
- Drives av fotosyntese (opptak) og celleånding/forbrenning (frigjøring)
- Reservoarer: atmosfære, hav, jord, biomasse, fossile avleiringer
- Forstyrrelse: fossile brennstoffer $\\rightarrow$ forsterket drivhuseffekt

**Nitrogenkretsløpet:**
- Prosesser: fiksering, nitrifikasjon, assimilasjon, ammonifikasjon, denitrifikasjon
- Bakterier er nøkkelaktører i alle ledd
- Forstyrrelse: kunstgjødsel $\\rightarrow$ eutrofiering, lystgass

**Vannkretsløpet:**
- Fordampning, transpirasjon, kondensasjon, nedbør, avrenning, infiltrasjon
- Drives av solenergi
- Forstyrrelse: klimaendringer endrer nedbørsmønstre

**Fosforkretsløpet:**
- Ingen gassfase -- langsomt geologisk kretsløp
- Forvitring $\\rightarrow$ jord $\\rightarrow$ planter $\\rightarrow$ dyr $\\rightarrow$ nedbrytning $\\rightarrow$ jord
- Forstyrrelse: gruvedrift og gjødsel $\\rightarrow$ eutrofiering i ferskvann`,
    },
  ],

  // ===========================================================================
  // OPPGAVER
  // ===========================================================================
  exercises: [
    {
      id: 'bio1-5-2-ex-1',
      number: '5.2.1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er forskjellen mellom energistrøm og stoffkretsløp i et økosystem?',
      options: [
        {
          id: 'a',
          text: 'Energi strømmer i én retning (sol til varme), mens stoffer sirkulerer i kretsløp mellom det biotiske og abiotiske miljøet.',
          isCorrect: true,
        },
        {
          id: 'b',
          text: 'Både energi og stoffer sirkulerer i lukkede kretsløp.',
          isCorrect: false,
        },
        {
          id: 'c',
          text: 'Energi sirkulerer i kretsløp, mens stoffer strømmer i én retning.',
          isCorrect: false,
        },
        {
          id: 'd',
          text: 'Det er ingen forskjell -- begge strømmer i én retning.',
          isCorrect: false,
        },
      ],
      solution:
        'Energi strømmer i én retning: fra solen via fotosyntese til produsenter, videre til konsumenter gjennom næringskjeden, og til slutt som varme ut i verdensrommet. Energi kan ikke gjenbrukes. Stoffer derimot -- karbon, nitrogen, fosfor, vann -- sirkulerer i lukkede kretsløp mellom levende organismer og det abiotiske miljøet. Stoffene kan gjenbrukes uendelig.',
      hints: [
        'Tenk på hva som skjer med energien i hvert ledd i næringskjeden.',
        'Hva skjer med karbonet i en organisme etter at den dør?',
      ],
    },
    {
      id: 'bio1-5-2-ex-2',
      number: '5.2.2',
      type: 'classic',
      difficulty: 'lett',
      task: 'Forklar kort de to hovedprosessene i karbonkretsløpet som involverer levende organismer: fotosyntese og celleånding. Skriv reaksjonslikningene.',
      solution: `**Fotosyntese** er prosessen der produsenter (planter, alger, cyanobakterier) bruker solenergi til å binde CO$_2$ og H$_2$O til organiske molekyler (glukose) og frigjør O$_2$:

$$6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{lysenergi}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$$

Fotosyntesen fjerner CO$_2$ fra atmosfæren og lagrer karbonet i biomasse.

**Celleånding** (respirasjon) er den omvendte prosessen. Alle levende organismer bryter ned organiske molekyler for å frigjøre energi (ATP), og frigir CO$_2$ og H$_2$O:

$$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{energi (ATP)}$$

Celleånding returnerer CO$_2$ til atmosfæren. Sammen holder fotosyntese og celleånding karbonkretsløpet i gang.`,
      hints: [
        'Fotosyntese tar opp CO$_2$, celleånding frigjør CO$_2$.',
        'Husk at fotosyntese krever lysenergi og produserer oksygen.',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'bio1-5-2-ex-3',
      number: '5.2.3',
      type: 'classic',
      difficulty: 'lett',
      task: 'Nevn de fem viktigste karbonreservoarene og ranger dem fra størst til minst.',
      solution: `De fem viktigste karbonreservoarene, fra størst til minst:

1. **Litosfæren** (berggrunn og fossile avleiringer): ca. 100 000 000 GtC -- det desidert største reservoaret, men karbonet er bundet i bergarter og sedimenter over geologisk tidsskala.

2. **Dyphavet**: ca. 37 000 GtC -- karbon løst som bikarbonat og karbonat i det dype havvannet.

3. **Jordsmonn (pedosfæren)**: ca. 1 500--2 400 GtC -- organisk materiale og humus i jordsmonnet.

4. **Overflatehavet**: ca. 900 GtC -- karbon løst i de øverste havlagene.

5. **Atmosfæren**: ca. 870 GtC -- hovedsakelig som CO$_2$-gass.

6. **Levende biomasse**: ca. 550 GtC -- karbon bundet i alle levende organismer.

(GtC = gigatonn karbon = milliarder tonn karbon)

Selv om atmosfæren er et relativt lite reservoar, er det svært viktig fordi endringer i atmosfærens CO$_2$-innhold har direkte effekt på klimaet.`,
      hints: [
        'Tenk på berggrunn, hav, jord, atmosfære og biomasse.',
        'Husk at berggrunnen er det suverent største reservoaret.',
      ],
      allowsUpload: true,
    },
    {
      id: 'bio1-5-2-ex-4',
      number: '5.2.4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvorfor er atmosfærisk nitrogen (N$_2$) utilgjengelig for de fleste organismer, og hvordan gjøres det tilgjengelig?',
      options: [
        {
          id: 'a',
          text: 'N$_2$ har en sterk trippelbinding som krever mye energi å bryte. Nitrogenfikserende bakterier (f.eks. Rhizobium) og Haber-Bosch-prosessen kan omdanne N$_2$ til NH$_3$/NH$_4^+$.',
          isCorrect: true,
        },
        {
          id: 'b',
          text: 'N$_2$ er giftig for planter. Nedbrytere fjerner giftigheten.',
          isCorrect: false,
        },
        {
          id: 'c',
          text: 'N$_2$ er for tungt til å tas opp av røtter. Vind sprer det i mindre biter.',
          isCorrect: false,
        },
        {
          id: 'd',
          text: 'N$_2$ er i gassform og kan ikke løses i vann. Regn gjør det tilgjengelig.',
          isCorrect: false,
        },
      ],
      solution:
        'De to nitrogenatomene i N$_2$ er bundet sammen med en trippelbinding (N$\\equiv$N), som er en av de sterkeste kjemiske bindingene i naturen. De fleste organismer mangler enzymet som trengs for å bryte denne bindingen. Kun **nitrogenfikserende bakterier** (diazotrofer) har enzymet **nitrogenase**, som kan spalte N$_2$ og omdanne det til ammonium (NH$_4^+$) eller ammoniakk (NH$_3$). De viktigste nitrogenfiksererne er *Rhizobium*-bakterier i symbiose med belgplanter, samt frittlevende cyanobakterier. Industrielt fikses nitrogen gjennom **Haber-Bosch-prosessen** (N$_2$ + 3H$_2$ $\\rightarrow$ 2NH$_3$).',
      hints: [
        'Tenk på bindingstypen mellom de to nitrogenatomene i N$_2$.',
        'Hva er spesielt med enzymet nitrogenase?',
      ],
    },
    {
      id: 'bio1-5-2-ex-5',
      number: '5.2.5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv de fem hovedprosessene i nitrogenkretsløpet. Nevn hvilke organismer som er involvert i hver prosess og angi de kjemiske formene nitrogen har i hvert trinn.',
      solution: `**De fem hovedprosessene i nitrogenkretsløpet:**

**1. Nitrogenfiksering** (N$_2$ $\\rightarrow$ NH$_4^+$ / NH$_3$)
- **Organismer:** Nitrogenfikserende bakterier (*Rhizobium* i symbiose med belgplanter, frittlevende *Azotobacter* og cyanobakterier)
- **Prosess:** Enzymet nitrogenase bryter trippelbindingen i N$_2$ og omdanner det til ammonium (NH$_4^+$)
- Industrielt: Haber-Bosch-prosessen

**2. Nitrifikasjon** (NH$_4^+$ $\\rightarrow$ NO$_2^-$ $\\rightarrow$ NO$_3^-$)
- **Organismer:** Nitrifikasjonsbakterier -- *Nitrosomonas* (NH$_4^+$ til NO$_2^-$) og *Nitrobacter* (NO$_2^-$ til NO$_3^-$)
- **Prosess:** Aerob oksidasjon av ammonium via nitritt til nitrat
- Krever oksygen

**3. Assimilasjon** (NO$_3^-$ / NH$_4^+$ $\\rightarrow$ organisk nitrogen)
- **Organismer:** Planter og alger
- **Prosess:** Opptak av nitrat og ammonium gjennom røttene og innbygging i aminosyrer, proteiner og nukleinsyrer

**4. Ammonifikasjon** (organisk nitrogen $\\rightarrow$ NH$_4^+$)
- **Organismer:** Nedbrytere (sopp og bakterier)
- **Prosess:** Nedbrytning av dødt organisk materiale og avfallsstoffer, som frigir ammonium tilbake til jordsmonnet

**5. Denitrifikasjon** (NO$_3^-$ $\\rightarrow$ N$_2$)
- **Organismer:** Denitrifikasjonsbakterier (f.eks. *Pseudomonas*)
- **Prosess:** Anaerob reduksjon av nitrat via nitritt, NO og N$_2$O til N$_2$-gass som returnerer til atmosfæren
- Skjer under oksygenfrie forhold (fuktig jord, sedimenter)`,
      hints: [
        'Husk: fiksering, nitrifikasjon, assimilasjon, ammonifikasjon, denitrifikasjon.',
        'Bakterier er sentrale i alle prosessene unntatt assimilasjon.',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'bio1-5-2-ex-6',
      number: '5.2.6',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvordan havet fungerer som karbonsluk. Beskriv både den fysiske og den biologiske mekanismen, og drøft konsekvensene av havforsuring.',
      solution: `**Havet som karbonsluk:**

Havet absorberer ca. **25--30 %** av menneskeskapte CO$_2$-utslipp, noe som gjør det til et enormt karbonsluk. Det finnes to hovedmekanismer:

**1. Fysisk opptak (løselighetspumpen):**
- CO$_2$ fra atmosfæren løses direkte i havoverflaten
- Kaldt vann løser mer CO$_2$ enn varmt vann (derfor er polare hav viktige karbonsluk)
- Løst CO$_2$ reagerer med vann og danner karbonatsystemet:
$$\\text{CO}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_2\\text{CO}_3 \\rightleftharpoons \\text{H}^+ + \\text{HCO}_3^- \\rightleftharpoons 2\\text{H}^+ + \\text{CO}_3^{2-}$$
- Dyphavssirkulasjon (termohalin sirkulasjon) fører karbonrikt overflatevann ned til dyphavet

**2. Biologisk pumpe:**
- Fytoplankton driver fotosyntese i overflatevannet og binder CO$_2$ i organisk materiale
- Når plankton dør, synker de og tar karbonet med seg mot dypet
- Noe sedimenterer på havbunnen og lagres over geologisk tid
- Dyr som spiser plankton, produserer avføring som også synker

**Konsekvenser av havforsuring:**
- Økt CO$_2$-opptak fører til at pH i havet synker (fra ca. 8,2 til ca. 8,1 siden industrialiseringen -- en 30 % økning i H$^+$-konsentrasjon)
- Kalsiumkarbonat (CaCO$_3$) i skjell, korallrev og plankton med kalkskall løses lettere
- Korallrev bleker og vokser langsommere
- Skalldyr (østers, muslinger) får tynnere skall
- Marine næringskjeder påvirkes fra bunn (plankton) og opp
- På lang sikt kan havets evne til å ta opp CO$_2$ reduseres`,
      hints: [
        'Tenk på to pumper: den fysiske (løselighet) og den biologiske (fytoplankton).',
        'Hva skjer med pH når mer CO$_2$ løses i vann?',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'bio1-5-2-ex-7',
      number: '5.2.7',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva skiller fosforkretsløpet fra de andre stoffkretsløpene?',
      options: [
        {
          id: 'a',
          text: 'Fosforkretsløpet har ingen gassfase -- fosfor sirkulerer bare mellom berggrunn, jord, vann og organismer.',
          isCorrect: true,
        },
        {
          id: 'b',
          text: 'Fosfor er det eneste grunnstoffet som ikke inngår i levende organismer.',
          isCorrect: false,
        },
        {
          id: 'c',
          text: 'Fosfor sirkulerer bare i havet, ikke på land.',
          isCorrect: false,
        },
        {
          id: 'd',
          text: 'Fosforkretsløpet drives av solenergi, mens de andre drives av varme fra jordens indre.',
          isCorrect: false,
        },
      ],
      solution:
        'I motsetning til karbon (CO$_2$ i atmosfæren), nitrogen (N$_2$ i atmosfæren) og vann (H$_2$O som vanndamp), har fosfor **ingen stabil gassform** under naturlige forhold. Fosfor sirkulerer derfor bare gjennom berggrunn, jord, vann og levende organismer -- et primært **geologisk kretsløp**. Dette gjør fosforkretsløpet mye langsommere, fordi frigjøring av fosfor fra berggrunn gjennom forvitring tar geologisk lang tid. Det gjør også fosfor til en spesielt begrensende næringsfaktor i mange økosystemer.',
      hints: [
        'Tenk på hvilken tilstand karbon, nitrogen og vann har i atmosfæren.',
        'Finnes det et fosforgass-molekyl som naturlig inngår i atmosfæren?',
      ],
    },
    {
      id: 'bio1-5-2-ex-8',
      number: '5.2.8',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar prosessen eutrofiering trinn for trinn. Beskriv hvordan overskudd av nitrogen og fosfor fra jordbruk kan føre til «døde soner» i havet.',
      solution: `**Eutrofiering -- trinn for trinn:**

**Trinn 1: Tilførsel av næringsstoffer**
Overskudd av nitrogen (NO$_3^-$) og fosfor (PO$_4^{3-}$) fra kunstgjødsel, husdyrgjødsel og kloakkutslipp vaskes ut med regn og avrenning fra jordbruksmark til bekker, elver og kystområder.

**Trinn 2: Algoppblomstring**
De ekstra næringsstoffene stimulerer kraftig vekst av planteplankton (alger) og eventuelt cyanobakterier. Vannet blir grønt, uklart og kan lukte vondt. Algene kan danne tykke lag på overflaten.

**Trinn 3: Lystap**
Algeblomstringen blokkerer sollys fra å nå dypere vannlag. Undervannsvegetasjon (ålegras, tang) dør fordi de ikke får nok lys til fotosyntese.

**Trinn 4: Algedød**
Algeblomstringen er kortvarig -- algene bruker opp næringsstoffene, skygger for hverandre, og store mengder alger dør.

**Trinn 5: Nedbrytning og oksygenforbruk**
Bakterier bryter ned de enorme mengdene døde alger. Denne nedbrytningen er aerob og forbruker store mengder oppløst oksygen i vannet.

**Trinn 6: Oksygenmangel (hypoksi)**
Oksygenkonsentrasjonen i bunnvannet synker dramatisk -- ofte til under 2 mg O$_2$/L (normalt 8--10 mg/L). Ved 0 mg/L snakker vi om anoksi (fullstendig oksygenmangel).

**Trinn 7: Død sone**
Fisk, krepsdyr, skjell og andre organismer dør eller flykter. Området blir en «død sone». Under anoksiske forhold kan bakterier produsere hydrogensulfid (H$_2$S), som er giftig og lukter råtne egg.

**Globalt omfang:**
Det finnes over **500 registrerte døde soner** i verden, inkludert Mexicogolfen, Østersjøen, Svartehavet og flere norske fjorder (f.eks. Oslofjorden). Arealet til disse sonene er økende.`,
      hints: [
        'Start med hvor næringsstoffene kommer fra og følg prosessen trinn for trinn.',
        'Hva skjer med oksygenet i vannet når store mengder alger dør og brytes ned?',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'bio1-5-2-ex-9',
      number: '5.2.9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Sammenlign karbonkretsløpet og nitrogenkretsløpet. Beskriv minst tre likheter og tre forskjeller mellom dem.',
      solution: `**Likheter mellom karbonkretsløpet og nitrogenkretsløpet:**

**1. Begge har en atmosfærisk komponent**
- Karbon: CO$_2$ i atmosfæren (ca. 0,04 %)
- Nitrogen: N$_2$ i atmosfæren (ca. 78 %)
- Begge grunnstoffene sirkulerer mellom atmosfæren, biosfæren, hydrosfæren og litosfæren

**2. Biologiske prosesser driver begge kretsløpene**
- Karbon: fotosyntese (opptak) og celleånding (frigjøring)
- Nitrogen: nitrogenfiksering (opptak) og denitrifikasjon (frigjøring)
- Nedbrytere spiller en nøkkelrolle i begge kretsløpene

**3. Begge er kraftig forstyrret av menneskelig aktivitet**
- Karbon: forbrenning av fossile brennstoffer har økt CO$_2$ med 50 %
- Nitrogen: Haber-Bosch-prosessen har mer enn doblet tilførselen av reaktivt nitrogen
- Begge forstyrrelsene har alvorlige miljøkonsekvenser (klimaendringer, eutrofiering)

---

**Forskjeller mellom karbonkretsløpet og nitrogenkretsløpet:**

**1. Tilgjengelighet av den atmosfæriske formen**
- CO$_2$ kan tas direkte opp av alle fotosyntiserende organismer
- N$_2$ er utilgjengelig for de fleste organismer pga. den sterke trippelbindingen -- kun spesialiserte bakterier kan fikse N$_2$

**2. Bakterienes rolle**
- Karbonkretsløpet: bakterier er viktige som nedbrytere, men planter driver hoveddelen gjennom fotosyntese
- Nitrogenkretsløpet: bakterier er helt sentrale i nesten alle prosesser (fiksering, nitrifikasjon, ammonifikasjon, denitrifikasjon)

**3. Kjemisk kompleksitet**
- Karbon skifter hovedsakelig mellom CO$_2$ (uorganisk) og organiske forbindelser (glukose, proteiner osv.)
- Nitrogen skifter mellom mange ulike kjemiske former: N$_2$, NH$_3$/NH$_4^+$, NO$_2^-$, NO$_3^-$, N$_2$O, organisk N -- hver med ulike egenskaper og roller

**4. Tidsramme for langsom komponent**
- Karbon: fossile brennstoffer dannes over hundrevis av millioner av år
- Nitrogen: det er ingen tilsvarende langsiktig geologisk lagring av nitrogen (kretsløpet er raskere i sin helhet)

**5. Hovedkonsekvens av menneskelig forstyrrelse**
- Karbon: global oppvarming og klimaendringer (forsterket drivhuseffekt)
- Nitrogen: eutrofiering av vannmiljøer og dannelse av døde soner`,
      hints: [
        'Tenk på hvor stoffene finnes, hvilke organismer som er involvert, og hva som skjer når mennesker forstyrrer kretsløpene.',
        'Hva er den viktigste forskjellen i hvordan atmosfærisk karbon og nitrogen tas opp?',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'bio1-5-2-ex-10',
      number: '5.2.10',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv vannkretsløpet. Inkluder prosessene fordampning, transpirasjon, kondensasjon, nedbør, avrenning og infiltrasjon. Forklar vannets betydning for levende organismer.',
      solution: `**Vannkretsløpet (det hydrologiske kretsløpet):**

**1. Fordampning (evaporasjon):**
Solenergi varmer opp vann i hav, innsjøer, elver og fuktig jord. Vannet går over fra flytende form til vanndamp (gass) og stiger opp i atmosfæren. Ca. 86 % av all fordampning skjer fra havoverflaten.

**2. Transpirasjon:**
Planter tar opp vann gjennom røttene og avgir vanndamp gjennom spalteåpningene i bladene. Et stort tre kan transpirere flere hundre liter vann per dag. Over landområder kan transpirasjon bidra med opptil 60 % av vanndampen i atmosfæren.

**3. Kondensasjon:**
Vanndamp stiger opp, avkjøles ved stigende høyde, og kondenserer til vanndråper eller iskrystaller rundt kondensasjonskjerner (støvpartikler). Resultatet er skyer og tåke.

**4. Nedbør (presipitasjon):**
Når vanndråpene/iskrystallene blir tunge nok, faller de som nedbør -- regn, snø, hagl eller sludd. Ca. 77 % faller over havet, 23 % over land.

**5. Avrenning:**
Nedbør på land renner som overflatevann i bekker og elver mot havet. Avrenning transporterer også løste stoffer (næringsstoffer, forurensning).

**6. Infiltrasjon:**
Noe vann siger ned gjennom jord og bergart og blir til grunnvann. Grunnvann kan lagres i lange perioder og tilføres langsomt til elver, innsjøer og hav.

---

**Vannets betydning for levende organismer:**
- **Løsemiddel:** Nesten alle biokjemiske reaksjoner skjer i vandig miljø. Vann løser salter, næringsstoffer og gasser.
- **Transport:** Blod (dyr) og plantesaft transporterer næringsstoffer og avfallsstoffer i vandige løsninger.
- **Temperaturregulering:** Vannets høye varmekapasitet demper temperatursvingninger i celler, organismer og økosystemer.
- **Fotosyntese:** Vann er et nødvendig reaktant: 6CO$_2$ + 6H$_2$O $\\rightarrow$ C$_6$H$_{12}$O$_6$ + 6O$_2$.
- **Habitat:** Hav, innsjøer og elver er levesteder for enorme mengder arter.
- **Strukturell støtte:** Vann i cellevakuoler gir turgortrykk som holder planteceller oppblåst.`,
      hints: [
        'Følg vannmolekylet fra havet via atmosfæren til land og tilbake.',
        'Tenk på vannets spesielle kjemiske egenskaper (løsemiddel, varmekapasitet).',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'bio1-5-2-ex-11',
      number: '5.2.11',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Liebigs minimumslov sier at veksten i et økosystem begrenses av det næringsstoffet som er relativt minst tilgjengelig. Hvilket næringsstoff er oftest begrensende i ferskvann?',
      options: [
        {
          id: 'a',
          text: 'Fosfor',
          isCorrect: true,
        },
        {
          id: 'b',
          text: 'Nitrogen',
          isCorrect: false,
        },
        {
          id: 'c',
          text: 'Karbon',
          isCorrect: false,
        },
        {
          id: 'd',
          text: 'Jern',
          isCorrect: false,
        },
      ],
      solution:
        'I ferskvann er **fosfor** oftest den begrensende næringsfaktoren. Dette skyldes at fosfor ikke har noen gassformig fase og tilføres svært langsomt gjennom forvitring av bergarter. Nitrogen er mer tilgjengelig fordi det kan fikseres fra atmosfæren av bakterier. Derfor kan selv små tilskudd av fosfor (f.eks. fra vaskemiddel eller gjødsel) utløse kraftig algevekst i innsjøer. I marine miljøer kan derimot nitrogen, jern eller fosfor være begrensende, avhengig av regionen.',
      hints: [
        'Tenk på hvilket grunnstoff som ikke har en gassfase i kretsløpet.',
        'Hva skjer i innsjøer når vaskemidler med fosfat slippes ut?',
      ],
    },
    {
      id: 'bio1-5-2-ex-12',
      number: '5.2.12',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft hvordan menneskelig aktivitet har forstyrret karbonkretsløpet, nitrogenkretsløpet og fosforkretsløpet. For hvert kretsløp: beskriv den viktigste menneskelige påvirkningen og den mest alvorlige konsekvensen.',
      solution: `**Menneskelig forstyrrelse av tre stoffkretsløp:**

---

**1. Karbonkretsløpet**

**Viktigste menneskelige påvirkning:** Forbrenning av fossile brennstoffer (kull, olje, naturgass) og avskoging.
- Vi frigjør ca. 36 milliarder tonn CO$_2$ per år fra fossile kilder
- Avskoging bidrar med ytterligere ca. 4 milliarder tonn CO$_2$ per år
- CO$_2$-konsentrasjonen har økt fra 280 ppm til over 420 ppm

**Mest alvorlige konsekvens:** Forsterket drivhuseffekt og global oppvarming.
- Gjennomsnittstemperaturen har økt med ca. 1,2 $^\\circ$C siden førindustriell tid
- Konsekvenser: stigende havnivå, mer ekstremvær, smelting av isbreer, havforsuring
- Truer matproduksjon, biologisk mangfold og menneskelig infrastruktur globalt

---

**2. Nitrogenkretsløpet**

**Viktigste menneskelige påvirkning:** Industriell nitrogenfiksering gjennom Haber-Bosch-prosessen.
- Ca. 150 millioner tonn ammoniakk produseres årlig som gjødsel
- Menneskelig aktivitet har mer enn doblet tilførselen av reaktivt nitrogen til biosfæren
- I tillegg frigjør forbrenning av fossile brennstoffer nitrogenoksider (NO$_x$)

**Mest alvorlige konsekvens:** Eutrofiering av vannmiljøer.
- Overskudd av nitrogen renner av fra jordbruksmark til vassdrag og kystområder
- Forårsaker algoppblomstring, oksygenmangel og døde soner
- Over 500 døde soner er registrert globalt
- I tillegg: lystgass (N$_2$O) som drivhusgass, sur nedbør fra NO$_x$

---

**3. Fosforkretsløpet**

**Viktigste menneskelige påvirkning:** Gruvedrift av fosfatbergarter for gjødsel og avrenning.
- Fosfat brytes og brukes som kunstgjødsel i enorme mengder
- Fosfat fra gjødsel, kloakk og vaskemidler renner ut i ferskvann
- Naturlig tilførsel gjennom forvitring er svært langsom, men menneskelig tilførsel er mange ganger høyere

**Mest alvorlige konsekvens:** Eutrofiering i ferskvann og begrensede fosforressurser.
- Fosfor er den begrensende faktoren i ferskvann -- selv små tilskudd utløser algoppblomstring
- Innsjøer, dammer og elver mister biologisk mangfold
- Fosfatreservene er endelige: risiko for «peak phosphorus» innen 100--300 år
- Uten fosfor kan vi ikke produsere nok mat til verdens befolkning

---

**Sammenheng mellom forstyrrelsene:**
De tre forstyrrelsene forsterker hverandre. Klimaendringer endrer nedbørsmønstre og øker avrenning, som forsterker eutrofiering. Eutrofiering i havet påvirker havets evne til å ta opp CO$_2$. Tining av permafrost (pga. klimaendringer) frigjør både karbon og nitrogen. Alle tre forstyrrelsene er knyttet til industrielt jordbruk og energiproduksjon, og løsningene henger sammen.`,
      hints: [
        'For hvert kretsløp: identifiser den viktigste menneskelige aktiviteten og koble den til konsekvenser.',
        'Tenk på forbrenning (karbon), gjødsel (nitrogen), gruvedrift (fosfor).',
        'Vurder om forstyrrelsene kan forsterke hverandre.',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'bio1-5-2-ex-13',
      number: '5.2.13',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En belgplante (f.eks. kløver) dyrkes i et jorde. Beskriv steg for steg hva som skjer med nitrogenet fra atmosfæren til det ender opp som protein i en ku som beiter på kløveren. Inkluder alle relevante prosesser og organismene som er involvert.',
      solution: `**Nitrogenet fra atmosfære til kuprotein -- steg for steg:**

**Steg 1: Nitrogenfiksering**
- Atmosfærisk N$_2$ (78 % av luften) er utilgjengelig for kløverplanten
- *Rhizobium*-bakterier lever i spesialiserte **rotknoller** på kløverens røtter
- Bakteriene har enzymet **nitrogenase** som bryter trippelbindingen i N$_2$:
$$\\text{N}_2 + 8\\text{H}^+ + 8\\text{e}^- + 16\\text{ATP} \\rightarrow 2\\text{NH}_3 + \\text{H}_2 + 16\\text{ADP}$$
- NH$_3$ (ammoniakk) omdannes raskt til NH$_4^+$ (ammonium)
- Dette er en **symbiose**: bakteriene gir planten nitrogen, planten gir bakteriene karbohydrater og et beskyttet miljø

**Steg 2: Assimilasjon i kløverplanten**
- Kløveren tar opp NH$_4^+$ direkte fra rotknollene
- I tillegg kan planten ta opp NO$_3^-$ fra jordsmonnet gjennom røttene (NO$_3^-$ dannes via nitrifikasjon av annet ammonium i jorda)
- Inne i plantecellene bygges nitrogen inn i **aminosyrer** gjennom en prosess der NH$_4^+$ kobles til organiske syrer (f.eks. glutaminsyre)
- Aminosyrene brukes til å lage **proteiner** som plantens celler trenger (enzymer, strukturproteiner, lagringsprotein i frø)

**Steg 3: Overføring til kua**
- Kua spiser kløveren og tar inn proteiner og andre nitrogenholdige forbindelser
- I kuens mage og tarm brytes plantens proteiner ned til **aminosyrer** av fordøyelsesenzymer (proteaser)
- Aminosyrene absorberes gjennom tarmveggen og fraktes med blodet til kroppens celler

**Steg 4: Proteinsyntese i kua**
- I kuens celler brukes aminosyrene til å bygge kuens egne **proteiner**:
  - Muskelproteiner (aktin, myosin) -- i kjøtt
  - Melkeproteiner (kasein) -- i melk
  - Enzymer, hormoner, antistoffer osv.
- DNA i kuens celler styrer rekkefølgen aminosyrene settes sammen i (translasjon)

**Oppsummering av involvert nitrogen-form:**
- Atmosfæren: N$_2$ (gass)
- Etter fiksering: NH$_4^+$ (ammonium)
- I planten: aminosyrer $\\rightarrow$ proteiner
- I kua: aminosyrer $\\rightarrow$ kuens proteiner

**Involerte organismer:**
- *Rhizobium*-bakterier (nitrogenfiksering)
- Kløverplante (assimilasjon, proteinsyntese)
- Ku (fordøyelse, proteinsyntese)`,
      hints: [
        'Start med N$_2$ i atmosfæren og tenk: fiksering $\\rightarrow$ assimilasjon $\\rightarrow$ næringskjede.',
        'Husk symbiosen mellom Rhizobium og belgplanter.',
        'Hva skjer med proteiner i kuens fordøyelsessystem?',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'bio1-5-2-ex-14',
      number: '5.2.14',
      type: 'classic',
      difficulty: 'lett',
      task: 'Tegn en enkel skisse av karbonkretsløpet som viser minst seks prosesser/reservoarer. Du kan bruke piler og korte forklaringer.',
      solution: `**En enkel skisse av karbonkretsløpet bør inneholde:**

**Reservoarer (bokser):**
1. Atmosfæren (CO$_2$)
2. Planter/produsenter (biomasse)
3. Dyr/konsumenter
4. Nedbrytere (sopp, bakterier)
5. Havet (oppløst CO$_2$, bikarbonat)
6. Fossile brennstoffer (kull, olje, gass)
7. Jordsmonn (organisk materiale)

**Prosesser (piler):**
- **Fotosyntese:** Atmosfære $\\rightarrow$ Planter (opptak av CO$_2$)
- **Celleånding (planter):** Planter $\\rightarrow$ Atmosfære (frigjøring av CO$_2$)
- **Spising:** Planter $\\rightarrow$ Dyr (karbon overføres i næringskjeden)
- **Celleånding (dyr):** Dyr $\\rightarrow$ Atmosfære (frigjøring av CO$_2$)
- **Død og nedbrytning:** Planter/Dyr $\\rightarrow$ Nedbrytere $\\rightarrow$ Atmosfære/Jordsmonn
- **Havets opptak:** Atmosfære $\\rightarrow$ Hav (CO$_2$ løses i sjøvann)
- **Havets frigivelse:** Hav $\\rightarrow$ Atmosfære (CO$_2$ avgis)
- **Fossil lagring:** Dødt materiale $\\rightarrow$ Fossile brennstoffer (over millioner av år)
- **Forbrenning:** Fossile brennstoffer $\\rightarrow$ Atmosfære (menneskelig forbrenning)

**Tips for skissen:**
- Plasser atmosfæren øverst
- Vis fotosyntese og celleånding som motstående piler mellom atmosfære og planter
- Vis næringskjeden horisontalt (planter $\\rightarrow$ dyr $\\rightarrow$ nedbrytere)
- Vis fossile brennstoffer nederst med en langsom pil ned (lagring) og en rask pil opp (forbrenning)
- Vis havet til siden med toveis pil til atmosfæren`,
      hints: [
        'Start med atmosfæren i midten/øverst og tegn piler for fotosyntese og celleånding.',
        'Husk å inkludere havet og fossile brennstoffer som reservoarer.',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'bio1-5-2-ex-15',
      number: '5.2.15',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hva som menes med «planetære grenser» knyttet til stoffkretsløp. Hvilke to grenser relatert til stoffkretsløpene er allerede overskredet, og hva kan konsekvensene bli hvis vi ikke endrer kurs?',
      solution: `**Planetære grenser:**

**Konseptet** ble introdusert av Johan Rockstrom og kolleger i 2009. De identifiserte ni globale miljøgrenser -- terskler som menneskeheten ikke bør overskride for å opprettholde en stabil og beboelig planet. Innenfor disse grensene har jorden et «trygt operasjonsrom» for menneskelig sivilisasjon.

---

**To overskredne grenser knyttet til stoffkretsløp:**

**1. Biogeokjemiske strømmer (nitrogen og fosfor)**

**Status:** Kraftig overskredet (verst av alle grenser)

**Nitrogen:**
- Grenseverdi: maks 62 millioner tonn N per år tilført fra industriell fiksering
- Faktisk tilførsel: ca. 150 millioner tonn per år (mer enn dobbelt over grensen)
- Årsak: Haber-Bosch-prosessen (kunstgjødsel) og forbrenning

**Fosfor:**
- Grenseverdi: maks 11 millioner tonn P per år tilført til havet
- Faktisk tilførsel: ca. 22 millioner tonn per år (dobbelt over grensen)
- Årsak: gruvedrift av fosfat, gjødselavrenning, kloakk

**Konsekvenser hvis vi ikke endrer kurs:**
- Økende eutrofiering av innsjøer, elver og kystområder globalt
- Flere og større «døde soner» i havet
- Kollaps av fiskestammer og marine økosystemer
- Forurensning av drikkevann med nitrat (helserisiko)
- Tap av biologisk mangfold i ferskvann og kystområder
- Økt utslipp av lystgass (N$_2$O), som forsterker klimaendringer og bryter ned ozonlaget

---

**2. Klimaendringer (karbonkretsløpet)**

**Status:** Overskredet

**Indikatorer:**
- Grenseverdi: CO$_2$-konsentrasjon under 350 ppm
- Faktisk verdi: over 420 ppm (og stigende med 2--3 ppm per år)
- Global temperaturøkning: ca. 1,2 $^\\circ$C over førindustrielt nivå

**Konsekvenser hvis vi ikke endrer kurs:**
- Global oppvarming på 3--5 $^\\circ$C innen 2100
- Dramatisk stigende havnivå (flere meter på sikt)
- Smelting av Grønlands og Antarktis' iskapper
- Hyppigere og kraftigere ekstremvær
- Havforsuring som truer marine økosystemer
- Tipping points: irreversibel issmelting, permafrost-frigjøring, skogdød
- Kollaps av korallrev (ved 2 $^\\circ$C oppvarming)
- Trussel mot global matproduksjon og vannforsyning
- Hundrevis av millioner klimaflyktninger

---

**Sammenhengen mellom grensene:**
De to grensene forsterker hverandre. Klimaendringer endrer nedbørsmønstre og øker avrenning av næringsstoffer. Eutrofiering i havet kan svekke havets evne til å ta opp CO$_2$. Tining av permafrost (pga. klimaendringer) frigjør både karbon og nitrogen. En «kaskadefeil» -- der overskridelse av én grense trigger overskridelse av andre -- er en reell risiko.

**Konklusjon:** Menneskeheten opererer utenfor det trygge operasjonsrommet for to av de viktigste stoffkretsløpene. Uten dramatiske endringer i energibruk, matproduksjon og forurensning risikerer vi irreversible endringer i jordsystemet.`,
      hints: [
        'Planetære grenser definerer et «trygt operasjonsrom» for menneskeheten.',
        'Tenk på nitrogen/fosfor (overgjødsling) og karbon (klimaendringer) som to separate, men sammenkoblede grenser.',
        'Hva skjer hvis vi passerer «tipping points»?',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
  keyTerms: [
    {
      term: 'Stoffkretsløp',
      definition:
        'Sirkulasjon av et grunnstoff mellom levende organismer og det abiotiske miljøet.',
    },
    {
      term: 'Karbonkretsløpet',
      definition:
        'Karbonets sirkulasjon mellom atmosfære, hav, jord, biomasse og fossile lagre.',
    },
    {
      term: 'Nitrogenfiksering',
      definition:
        'Omdanning av atmosfærisk N2 til biologisk tilgjengelig ammonium (NH4+) av nitrogenfikserende bakterier.',
    },
    {
      term: 'Nitrifikasjon',
      definition:
        'Bakteriell oksidasjon av ammonium (NH4+) til nitritt (NO2-) og videre til nitrat (NO3-).',
    },
    {
      term: 'Denitrifikasjon',
      definition:
        'Bakteriell reduksjon av nitrat (NO3-) til nitrogengass (N2) under anaerobe forhold.',
    },
    {
      term: 'Ammonifikasjon',
      definition:
        'Nedbrytning av organisk nitrogen til ammonium (NH4+) av sopp og bakterier.',
    },
    {
      term: 'Eutrofiering',
      definition:
        'Overgjødsling av vannområder med nitrogen og fosfor, som fører til algoppblomstring og oksygenmangel.',
    },
    {
      term: 'Karbonreservoar',
      definition:
        'Et lager der karbon er bundet over kortere eller lengre tid (atmosfære, hav, jord, fossile avleiringer, biomasse).',
    },
  ],
};
