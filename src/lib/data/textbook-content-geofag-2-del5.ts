/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Geofag 2 VG3 - Del 5: Paleoklima og klimaendringer
 *
 * 5 underkapitler som dekker LK20-kompetansemaal for geofag 2 (GEO02-01):
 * - forklare paleoklimatisk forskning og dens bidrag til aa kunne si noe om fremtidige klimaendringer
 * - drofte konsekvenser av klimaendringer for individ, samfunn og oekosystemer, og vurdere baerekraftige loesninger for tilpasning
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1: Paleoklimatologi – metoder og kilder
// ============================================================================

export const CHAPTER_GEOFAG_2_5_1: TextbookChapter = {
  id: 'geofag-2-5-1',
  courseId: 'geofag-2',
  chapterNumber: '5.1',
  title: 'Paleoklimatologi – metoder og kilder',
  description: 'Iskjerner, sedimentkjerner, treringer, pollenanalyse og isotopanalyse (delta-18O).',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare paleoklimatisk forskning og dens bidrag til aa kunne si noe om fremtidige klimaendringer',
    'drofte konsekvenser av klimaendringer for individ, samfunn og oekosystemer, og vurdere baerekraftige loesninger for tilpasning',
  ],
  content: [
    {
      id: 'geo2-5-1-intro',
      type: 'text',
      content: `# Paleoklimatologi – metoder og kilder

Paleoklimatologi er studiet av klimaet i fortiden. Ved aa forstaa hvordan klimaet har endret seg gjennom jordas historie, kan vi bedre forutsi hvordan klimaet vil endre seg i fremtiden. Forskere bruker en rekke indirekte metoder — saakalt **proxydata** — for aa rekonstruere fortidens klima.

## Hvorfor studere fortidens klima?

- Vi har kun direkte maalinger av temperatur og nedbor fra de siste 150–200 aarene
- For aa forstaa naturlige klimavariasjoner maa vi se lengre tilbake
- Paleoklimatiske data gir oss en «fasit» for aa teste klimamodellene
- Historien viser at klimaet kan endre seg dramatisk — baade gradvis og braat`,
    },
    {
      id: 'geo2-5-1-def-paleo',
      type: 'definition',
      title: 'Paleoklimatologi',
      content: 'Paleoklimatologi er vitenskapen om fortidens klima. Forskere bruker indirekte bevis (proxydata) fra naturlige arkiver som iskjerner, sedimenter, treringer og fossiler for aa rekonstruere klimaforhold fra foer den instrumentelle maaleperioden.',
    },
    {
      id: 'geo2-5-1-def-proxy',
      type: 'definition',
      title: 'Proxydata',
      content: 'Proxydata er indirekte maal paa klimaforhold i fortiden. I stedet for direkte maalinger av temperatur eller nedbor, bruker vi fysiske, kjemiske eller biologiske spor som gjenspeiler klimaforholdene da de ble dannet. Eksempler er isotopforhold i is, treringbredder og pollensammensetning i sedimenter.',
    },
    {
      id: 'geo2-5-1-iskjerner',
      type: 'text',
      content: `## Iskjerner

Iskjerner er det kanskje viktigste verktoeyet i paleoklimatologien. Ved aa bore dypt ned i innlandsisen paa Groenland og i Antarktis, henter forskere opp sylindriske proever av is som kan vaere hundretusener av aar gamle.

### Hva iskjerner forteller oss

- **Temperatur**: Forholdet mellom tunge ($^{18}$O) og lette ($^{16}$O) oksygenisotoper i isen gjenspeiler temperaturen da snoen falt
- **Atmosfaerens sammensetning**: Luftbobler fanget i isen inneholder prover av fortidens atmosfaere — inkludert CO$_2$- og CH$_4$-konsentrasjoner
- **Vulkanutbrudd**: Lag med vulkansk aske og syre (sulfat) markerer store utbrudd
- **Vindstyrke og stovtransport**: Mengden stov i isen viser om det var torrere og mer vindfullt

### Viktige iskjerneprosjekter

- **Vostok** (Antarktis): 420 000 aar tilbake
- **EPICA Dome C** (Antarktis): 800 000 aar tilbake — den lengste sammenhengende klimahistorien fra is
- **GRIP/GISP2** (Groenland): Ca. 100 000 aar, men med hoyere opplosning`,
    },
    {
      id: 'geo2-5-1-def-isotop',
      type: 'definition',
      title: 'Oksygenisotopanalyse (delta-18O)',
      content: 'Delta-18O ($\\delta^{18}$O) er forholdet mellom de tunge ($^{18}$O) og lette ($^{16}$O) oksygenisotopene i en prove, sammenlignet med en standard. I iskjerner indikerer lavere delta-18O-verdier kaldere temperaturer, fordi tungt vann fordamper i mindre grad ved lave temperaturer. I havbunnsedimenter er sammenhengen motsatt: hoyere delta-18O betyr kaldere perioder med mer is paa land.',
    },
    {
      id: 'geo2-5-1-example-iskjerne',
      type: 'example',
      title: 'Tolkning av delta-18O i iskjerner',
      problem: 'En forsker analyserer en iskjerne fra Antarktis og finner at delta-18O-verdiene synker markant i et bestemt lag. Hva kan dette fortelle om klimaet da dette laget ble dannet?',
      solution: `**Tolkning:**

1. **Lavere delta-18O betyr kaldere klima**: Naar global temperatur synker, fordamper mindre tungt vann ($^{18}$O) fra havet
2. Nedboren som faller over iskappene inneholder derfor en storre andel lett oksygen ($^{16}$O)
3. Isen som dannes faar lavere delta-18O-verdier

**Konklusjon**: Et markant fall i delta-18O i iskjernen indikerer at klimaet ble betydelig kaldere — trolig en istid eller en kald fase innenfor en istid (en stadial).

**Tilleggsinfo**: Forskeren kan ogsaa sjekke CO$_2$-konsentrasjonen i luftbobler i samme lag. Under istider var CO$_2$ typisk rundt 180 ppm, mot 280 ppm i mellomistider.`,
    },
    {
      id: 'geo2-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er proxydata i paleoklimatologien?',
        options: [
          { id: 'a', text: 'Direkte maalinger av temperatur fra vaerstasjoner', isCorrect: false },
          { id: 'b', text: 'Indirekte maal paa fortidens klima fra naturlige arkiver', isCorrect: true },
          { id: 'c', text: 'Satellittmaalinger av jordas overflatetemperatur', isCorrect: false },
          { id: 'd', text: 'Prognoser fra klimamodeller', isCorrect: false },
        ],
        solution: 'Proxydata er indirekte maal paa klimaforhold i fortiden. De hentes fra naturlige arkiver som iskjerner, sedimenter, treringer og fossiler, og gjenspeiler klimaforholdene da de ble dannet.',
      },
    },
    {
      id: 'geo2-5-1-sediment',
      type: 'text',
      content: `## Sedimentkjerner

Sedimenter paa havbunnen og i innsjøer bygger seg opp lag for lag over tid. Ved aa bore ut kjerner av disse sedimentene faar forskere tilgang til informasjon om klimaet gjennom millioner av aar.

### Havbunnsedimenter

- **Foraminifera**: Smaa kalkskallorganismer som lever i havet. Forholdet mellom $^{18}$O og $^{16}$O i skallene gjenspeiler havtemperatur og ismengde
- **Sedimenttype**: Grovt materiale (sand, grus) transportert av isfjell viser perioder med oekt isbreaktivitet
- **Artssammensetning**: Ulike arter av foraminifera og diatomeer trives ved ulike temperaturer

### Innsjøsedimenter

- **Varv**: Aarlige lag i innsjøsedimenter — lyse sommerlag og moerke vinterlag
- **Pollenanalyse**: Pollen bevares godt i sedimenter og viser vegetasjonshistorien
- **Organisk innhold**: Forteller om produktivitet og naeringstilfoersel`,
    },
    {
      id: 'geo2-5-1-def-foraminifera',
      type: 'definition',
      title: 'Foraminifera',
      content: 'Foraminifera (foraminiferer) er encellete organismer med kalkskall som lever i havet. De er viktige i paleoklimatologien fordi isotopsammensetningen i skallene gjenspeiler havtemperaturen og ismengden paa jorda da de levde. Fossile foraminiferer finnes i havbunnsedimenter og kan dateres noyaktig.',
    },
    {
      id: 'geo2-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor er delta-18O-verdier i havbunnsedimenter hoyere under istider?',
        options: [
          { id: 'a', text: 'Fordi havvannet blir saltere og tyngre', isCorrect: false },
          { id: 'b', text: 'Fordi lett vann bundet i iskapper gjor at havet faar relativt mer tungt oksygen', isCorrect: true },
          { id: 'c', text: 'Fordi vulkanutbrudd tilforer tungt oksygen til havet', isCorrect: false },
          { id: 'd', text: 'Fordi foraminiferene endrer skallsammensetning i kaldt vann', isCorrect: false },
        ],
        solution: 'Under istider er store mengder lett vann ($^{16}$O) bundet i iskapper paa land. Havet faar derfor en relativt storre andel tungt oksygen ($^{18}$O). Foraminifera som bygger skall av havvannet, faar dermed hoyere delta-18O-verdier under istider.',
      },
    },
    {
      id: 'geo2-5-1-treringer',
      type: 'text',
      content: `## Treringer (dendrokronologi)

Treringer gir aarlig opplosning paa klimadata og kan strekke seg tusenvis av aar tilbake.

### Prinsippet

- Treer danner en ny vekstring hvert aar
- **Brede ringer** = gode vekstforhold (varmt, nok nedbor)
- **Smale ringer** = daarlige vekstforhold (kaldt, tort)
- Ved aa overlappe ringmonstre fra levende og dode treer, kan man bygge kronologier tusenvis av aar tilbake

### Fordeler

- **Aarlig opplosning**: Hvert aar kan identifiseres noyaktig
- **Datering**: Treringer kan brukes til aa datere andre klimaarkiver
- **Regional informasjon**: Viser lokale klimaforhold

### Begrensninger

- Fungerer best i omraader der ett klimaelement begrenser veksten (f.eks. temperatur ved tregrensen)
- Treer lever vanligvis bare noen hundre til et par tusen aar
- Kan paavirkes av andre faktorer enn klima (insektangrep, brann)`,
    },
    {
      id: 'geo2-5-1-def-dendro',
      type: 'definition',
      title: 'Dendrokronologi',
      content: 'Dendrokronologi er vitenskapen om aa datere og tolke treringer. Hvert aar danner treet en ny vekstring, og ringenes bredde gjenspeiler vekstforholdene det aaret. Ved aa sammenkoble ringmonstre fra mange treer kan forskere bygge sammenhengende kronologier som strekker seg tusenvis av aar tilbake.',
    },
    {
      id: 'geo2-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvordan forskere kan bruke treringer til aa rekonstruere temperaturer fra foer den instrumentelle maaleperioden. Nevn baade fordeler og begrensninger med metoden.',
        hints: ['Tenk paa hva som bestemmer bredden paa en trering, og hvordan man kan strekke kronologien lengre tilbake enn et enkelt tres levetid.'],
        solution: 'Forskere maaler bredden paa treringene, der brede ringer indikerer gode vekstforhold (varmt, nok nedbor) og smale ringer daarlige forhold. Ved aa sammenkoble ringmonstre fra levende treer med fossile treer (overlappende monstre) kan kronologien strekkes tusenvis av aar tilbake. Fordeler: aarlig opplosning, noyaktig datering, regional informasjon. Begrensninger: virker best der ett klimaelement begrenser veksten, treer lever begrenset tid, og andre faktorer enn klima kan paavirke ringbredden (insekter, brann, jordsmonn).',
      },
    },
    {
      id: 'geo2-5-1-pollen',
      type: 'text',
      content: `## Pollenanalyse

Pollenanalyse (palynologi) er en kraftig metode for aa rekonstruere vegetasjonshistorie og dermed klimaendringer.

### Prinsippet

- Planter produserer store mengder pollen som spres med vind og vann
- Pollenets ytre vegg (exin) er ekstremt motstandsdyktig og bevares i tusenvis av aar
- Ulike plantearter har karakteristisk pollenform
- Ved aa telle og identifisere pollen i sedimentlag kan man rekonstruere vegetasjonen

### Hva pollen forteller om klima

- **Varmekjaer skog** (eik, lind, alm) → varme perioder
- **Barskog** (gran, furu) → kjoligere klima
- **Dvergbusker og gress** → kaldt, arktisk klima
- **Endringer i pollensammensetningen** gjenspeiler klimaendringer over tid

### Eksempel fra Norge

Pollendiagrammer fra norske myrer og innsjøer viser tydelig:
- Tundra-vegetasjon etter siste istid (ca. 10 000 aar siden)
- Innvandring av bjork, furu, og deretter varmekjaere treslag
- «Klimaoptimum» for 5 000–8 000 aar siden med eik og lind langt nord
- Gradvis avkjoeling og tilbakegang for varmekjaere arter`,
    },
    {
      id: 'geo2-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Dersom et pollendiagram fra en norsk myr viser en plutselig oekning i andelen eik- og lindepollen, hva indikerer dette?',
        options: [
          { id: 'a', text: 'At klimaet ble kaldere', isCorrect: false },
          { id: 'b', text: 'At klimaet ble varmere', isCorrect: true },
          { id: 'c', text: 'At et vulkanutbrudd oedsla skogen', isCorrect: false },
          { id: 'd', text: 'At mennesker begynte aa dyrke jorda', isCorrect: false },
        ],
        solution: 'Eik og lind er varmekjaere treslag som krever relativt hoye sommertemperaturer. En oekning i andelen pollen fra disse artene indikerer at klimaet ble varmere — varmt nok til at disse treslagne kunne etablere seg i omraadet.',
      },
    },
    {
      id: 'geo2-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign iskjerner og havbunnsedimenter som paleoklimatiske kilder. Diskuter tidsspenn, opplosning og hvilken type informasjon de gir.',
        solution: 'Iskjerner (opptil 800 000 aar, EPICA Dome C) gir aarlig til ti-aarlig opplosning naer toppen, men lavere opplosning dypere ned. De gir direkte maalinger av atmosfaerens sammensetning (CO2, CH4 fra luftbobler), temperatur (delta-18O i is), vulkansk aktivitet og stov. Havbunnsedimenter kan strekke seg millioner av aar tilbake, men har lavere tidsopplosning (hundre- til tusenaarsskala). De gir informasjon om havtemperatur og global ismengde (delta-18O i foraminifera-skall), havstromsmonstre og biologisk produktivitet. Iskjerner er best for aa studere atmosfaeren og raske klimaendringer, mens havbunnsedimenter gir det lengste perspektivet paa jordas klimahistorie.',
      },
    },
    {
      id: 'geo2-5-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken iskjerne gir den lengste sammenhengende klimahistorien?',
        options: [
          { id: 'a', text: 'GRIP fra Groenland (100 000 aar)', isCorrect: false },
          { id: 'b', text: 'Vostok fra Antarktis (420 000 aar)', isCorrect: false },
          { id: 'c', text: 'EPICA Dome C fra Antarktis (800 000 aar)', isCorrect: true },
          { id: 'd', text: 'GISP2 fra Groenland (250 000 aar)', isCorrect: false },
        ],
        solution: 'EPICA Dome C-iskjernen fra Antarktis gir den lengste sammenhengende klimahistorien fra is, med data som strekker seg ca. 800 000 aar tilbake. Den viser aatte glasiale-interglasiale sykluser og sammenhengen mellom temperatur og drivhusgasser.',
      },
    },
    {
      id: 'geo2-5-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

Paleoklimatologien bruker en rekke metoder for aa rekonstruere fortidens klima:

| Metode | Tidsspenn | Opplosning | Hovedinformasjon |
|--------|-----------|------------|------------------|
| Iskjerner | 800 000 aar | Aarlig–tiaarlig | Temperatur, CO$_2$, vulkaner |
| Havbunnsedimenter | Millioner av aar | 100–1000 aar | Havtemp, ismengde |
| Treringer | Tusenvis av aar | Aarlig | Temperatur, nedbor |
| Pollenanalyse | Titusener av aar | 10–100 aar | Vegetasjon, klima |

Isotopanalyse ($\\delta^{18}$O) er en noekkelmetode som brukes i baade iskjerner og havbunnsedimenter, men tolkes ulikt avhengig av mediet. Sammen gir disse metodene et detaljert bilde av jordas klimahistorie og naturlige klimavariasjoner.`,
    },
    {
      id: 'geo2-5-1-samle-1',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-1-samle-1',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du er forsker og skal planlegge et prosjekt for aa rekonstruere klimaet i Skandinavia de siste 15 000 aarene. Hvilke paleoklimatiske metoder ville du brukt, og hvorfor? Begrunn valgene dine.',
        solution: 'Et slikt prosjekt ville kombinere flere metoder: (1) Pollenanalyse fra myrer og innsjøer for aa rekonstruere vegetasjonshistorien aarlig til tiaarlig, noe som er mulig for hele perioden. (2) Treringer (dendrokronologi) for de siste 5 000–8 000 aarene med aarlig opplosning. (3) Innsjøsedimenter med varv-telling for noyaktig kronologi og informasjon om erosjon og produktivitet. (4) Eventuelt breeisdata fra norske breer for de siste tusen aarene. Iskjerner fra Groenland (GRIP/NGRIP) gir atmosfaerisk kontekst. Havbunnsedimenter fra norskekysten kan supplere med informasjon om havtemperatur. Multi-proxy-tilnaerming gir mest palitelig rekonstruksjon fordi svakhetene i en metode kompenseres av styrkene i en annen.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.2: Klimahistorie
// ============================================================================

export const CHAPTER_GEOFAG_2_5_2: TextbookChapter = {
  id: 'geofag-2-5-2',
  courseId: 'geofag-2',
  chapterNumber: '5.2',
  title: 'Klimahistorie',
  description: 'Snoeballjorda, varme perioder, istider, kvartaere glasiasjoner og holocen.',
  estimatedMinutes: 22,
  competenceGoals: [
    'forklare paleoklimatisk forskning og dens bidrag til aa kunne si noe om fremtidige klimaendringer',
    'drofte konsekvenser av klimaendringer for individ, samfunn og oekosystemer, og vurdere baerekraftige loesninger for tilpasning',
  ],
  content: [
    {
      id: 'geo2-5-2-intro',
      type: 'text',
      content: `# Klimahistorie

Jordas klima har gjennomgaatt dramatiske endringer gjennom 4,6 milliarder aar. Fra perioder der hele planeten var dekket av is («snoeballjorda»), til tider med tropisk klima paa polene. Denne historien gir oss viktig kontekst for aa forstaa dagens klimaendringer.

## De store trekkene

Jordas klimahistorie preges av:
- **Langsiktige sykluser** drevet av platetektonikk og solens utvikling
- **Mellomlangsiktige sykluser** drevet av endringer i jordas bane (Milankovitch-sykluser)
- **Kortsiktige variasjoner** drevet av vulkanutbrudd, havstromendringer og tilbakekoblingsmekanismer`,
    },
    {
      id: 'geo2-5-2-def-istid',
      type: 'definition',
      title: 'Istid og mellomistid',
      content: 'En istid (glasial) er en lang periode med lavere temperaturer og utbredte iskapper paa land. En mellomistid (interglasial) er en varmere periode mellom istidene. Vi lever naa i en mellomistid kalt holocen, som startet for ca. 11 700 aar siden. De siste 2,6 millioner aarene (kvartiertiden) har vaert preget av regelmessig veksling mellom istider og mellomistider.',
    },
    {
      id: 'geo2-5-2-snoeball',
      type: 'text',
      content: `## Snoeballjorda (ca. 720–635 millioner aar siden)

«Snoeballjorda» (Snowball Earth) er betegnelsen paa perioder i jordas eldste historie der hele eller nesten hele planeten var dekket av is.

### Bevis

- **Glasiale avsetninger nær ekvator**: Morenemateriale funnet i bergarter som laa naer ekvator
- **Banded iron formations**: Jernrike sedimenter som bare dannes i oksygenfattig vann — under isen
- **«Cap carbonates»**: Tykke karbonatsedimenter avsatt rett over de glasiale avsetningene — dannet ved rask oppvarming

### Hvorfor skjedde det?

- Lavt CO$_2$-nivaa (oekt forvitring bandt karbon)
- Positiv tilbakekobling: Mer is → hoyere albedo → mer avkjoeling → mer is
- Solen var 6% svakere enn i dag

### Hvordan tok det slutt?

- Vulkaner fortsatte aa slippe ut CO$_2$ under isen
- Uten forvitring ble CO$_2$ ikke fjernet fra atmosfaeren
- Gradvis bygget CO$_2$ seg opp til ekstremt hoye nivaaer
- Drivhuseffekten smeltet til slutt isen — og verden gikk fra iskald til ekstremt varm paa geologisk kort tid`,
    },
    {
      id: 'geo2-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva var den viktigste tilbakekoblingsmekanismen som forsterket avkjoelingen under snoeballjorda?',
        options: [
          { id: 'a', text: 'Oekt vulkansk aktivitet som blokkerte sollys', isCorrect: false },
          { id: 'b', text: 'Is-albedo-tilbakekoblingen: mer is reflekterte mer sollys', isCorrect: true },
          { id: 'c', text: 'Havstrommene stoppet opp og fordelte ikke varmen', isCorrect: false },
          { id: 'd', text: 'Vegetasjonen dode og tok opp mer CO2', isCorrect: false },
        ],
        solution: 'Is-albedo-tilbakekoblingen var den viktigste forsterkende mekanismen: Naar mer is dannes, oekes jordas albedo (refleksjonsevne). Mer sollys reflekteres tilbake til verdensrommet, temperaturen synker ytterligere, og enda mer is dannes. Denne positive tilbakekoblingen kan drive systemet mot en global nedising.',
      },
    },
    {
      id: 'geo2-5-2-varme',
      type: 'text',
      content: `## Varme perioder i jordas historie

Gjennom det meste av jordas historie har klimaet faktisk vaert varmere enn i dag — uten permanente iskapper paa polene.

### Kritt-tiden (145–66 millioner aar siden)

- Gjennomsnittlig temperatur ca. **10°C varmere** enn i dag
- Ingen permanente iskapper
- Havnivaaet var opptil **200 meter hoyere** enn naa
- Tropisk vegetasjon langt mot polene
- CO$_2$-nivaaet var 4–8 ganger hoyere enn forindustrielt

### Eocen klimaoptimum (ca. 50 millioner aar siden)

- Den varmeste perioden i de siste 65 millioner aarene
- Krokodiller levde paa Svalbard
- Palmer vokste i Antarktis
- PETM (Paleocen-Eocen Termisk Maksimum) for 56 millioner aar siden: en rask oppvarming paa ca. 5°C som ligner paa det vi ser i dag — men mye langsommere

### Midtre miocen (ca. 15 millioner aar siden)

- Siste periode med generelt varmt klima
- Gradvis avkjoeling etter dette, drevet av:
  - Dannelsen av Himalaya (oekt forvitring → CO$_2$-reduksjon)
  - Aapningen av Drake Passage (Antarktis ble isolert av sirkulaer havstrom)`,
    },
    {
      id: 'geo2-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor PETM (Paleocen-Eocen Termisk Maksimum) for 56 millioner aar siden er relevant for aa forstaa dagens klimaendringer.',
        hints: ['Tenk paa likheter i mekanisme og hastighet.'],
        solution: 'PETM var en rask frigjoring av store mengder karbon (trolig fra metanhydrater paa havbunnen) som foerte til ca. 5°C global oppvarming. Hendelsen er relevant fordi: (1) Den viser konsekvensene av rask karbonfrigjoring — havforsuring, masseutryddelse i dyphavet, endrede nedbormonstre. (2) Den gir en «naturlig analog» for dagens utslipp, selv om dagens karbonfrigjoring skjer 10 ganger raskere enn under PETM. (3) Det tok jorden ca. 200 000 aar aa absorbere karbonet og gjenopprette normalt klima — noe som viser at konsekvensene av CO2-utslipp varer lenge.',
      },
    },
    {
      id: 'geo2-5-2-kvartaer',
      type: 'text',
      content: `## Kvartiertiden og istidene (2,6 millioner aar – naa)

De siste 2,6 millioner aarene har vaert preget av regelmessig veksling mellom istider og mellomistider — drevet av Milankovitch-sykluser.

### Milankovitch-sykluser

Tre sykliske endringer i jordas bane paavirker fordelingen av solenergi:

1. **Eksentrisitet** (~100 000 aar): Jordas bane varierer mellom naer-sirkulaer og mer elliptisk
2. **Aksehelling** (~41 000 aar): Jordas aksehelling varierer mellom 22,1° og 24,5° (naa: 23,4°)
3. **Presesjon** (~26 000 aar): Jordaksen roterer som en snurrebass

### Istidene

- De siste 800 000 aarene har det vaert ca. **8 store istider**, hver med ca. 100 000 aars mellomrom
- Istidene varte typisk 80 000–90 000 aar, mellomistidene 10 000–20 000 aar
- Under siste istid (Weichsel) var store deler av Nord-Europa dekket av is opptil 3 km tykk
- Havnivaaet var ca. **120 meter lavere** enn i dag
- Global middeltemperatur var ca. **5°C lavere** enn i dag

### Sammenhengen mellom temperatur og CO$_2$

Iskjernedata (EPICA Dome C) viser en slaaende korrelasjon mellom temperatur og CO$_2$ gjennom 800 000 aar:
- Istider: CO$_2$ ca. **180 ppm**
- Mellomistider: CO$_2$ ca. **280 ppm**
- I dag: CO$_2$ over **420 ppm** — langt utenfor det naturlige variasjonsomraadet`,
    },
    {
      id: 'geo2-5-2-def-milankovitch',
      type: 'definition',
      title: 'Milankovitch-sykluser',
      content: 'Milankovitch-sykluser er periodiske endringer i jordas bane rundt solen som paavirker fordelingen av solenergi paa jordas overflate. De tre syklusene — eksentrisitet (ca. 100 000 aar), aksehelling (ca. 41 000 aar) og presesjon (ca. 26 000 aar) — er drivkraften bak vekslingen mellom istider og mellomistider i kvartiertiden.',
    },
    {
      id: 'geo2-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor mye lavere var havnivaaet under siste istids maksimum?',
        options: [
          { id: 'a', text: 'Ca. 10 meter', isCorrect: false },
          { id: 'b', text: 'Ca. 40 meter', isCorrect: false },
          { id: 'c', text: 'Ca. 120 meter', isCorrect: true },
          { id: 'd', text: 'Ca. 300 meter', isCorrect: false },
        ],
        solution: 'Under siste istids maksimum (ca. 20 000 aar siden) var havnivaaet ca. 120 meter lavere enn i dag. Store mengder vann var bundet i iskapper paa land, spesielt over Nord-Amerika (Laurentide-iskappen) og Nord-Europa (den Skandinaviske iskappen).',
      },
    },
    {
      id: 'geo2-5-2-holocen',
      type: 'text',
      content: `## Holocen (11 700 aar – naa)

Holocen er den naavaerende mellomistiden, og det er i denne perioden sivilisasjoner har utviklet seg.

### Klimautviklingen i holocen

- **Tidlig holocen (11 700–8 000 aar)**: Rask oppvarming etter istiden, isbreer smeltet, havnivaaet steg raskt
- **Holocent klimaoptimum (8 000–5 000 aar)**: Den varmeste perioden, ca. 1–2°C varmere enn forindustriell tid i Skandinavia. Tregrensen laa 300–400 m hoyere enn i dag
- **Gradvis avkjoeling (5 000–200 aar)**: Langsom nedkjoeling, isbreer rykket fram igjen
- **Lille istid (ca. 1300–1850)**: Den kaldeste perioden i holocen, isbreer naadde sitt maksimum, daarlige avlinger i Europa
- **Moderne oppvarming (1850–naa)**: Rask temperaturoekning, spesielt etter 1970

### Klimavariasjoner innenfor holocen

Selv innenfor denne relativt stabile perioden har det vaert merkbare endringer:
- **Middelalderens varmeperiode** (ca. 900–1300): Nordboerne koloniserte Groenland
- **Lille istid** (ca. 1300–1850): Temaelven froes til, avlingssvikt, hungersnod
- **8,2 ka-hendelsen**: En plutselig kuldeperiode for 8 200 aar siden, foraarsaket av en stor ferskvannspuls fra en isdemmet innsjoe i Nord-Amerika`,
    },
    {
      id: 'geo2-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva forarsaket 8,2 ka-hendelsen — en plutselig kuldeperiode for 8 200 aar siden?',
        options: [
          { id: 'a', text: 'Et stort vulkanutbrudd som blokkerte sollys', isCorrect: false },
          { id: 'b', text: 'En meteoritt som traff jorden', isCorrect: false },
          { id: 'c', text: 'En stor ferskvannspuls som forstyrret havstrommene i Nord-Atlanteren', isCorrect: true },
          { id: 'd', text: 'Endringer i jordas bane rundt solen', isCorrect: false },
        ],
        solution: '8,2 ka-hendelsen ble forarsaket av en stor ferskvannspuls fra isdemmede innsjøer i Nord-Amerika (Lake Agassiz) som plutselig tomte seg i Nord-Atlanteren. Ferskvannet forstyrret den termohaline sirkulasjonen (Golfstrommen), noe som foerte til rask avkjoeling rundt Nord-Atlanteren i ca. 150 aar.',
      },
    },
    {
      id: 'geo2-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar sammenhengen mellom Milankovitch-sykluser og istider. Hvorfor er ikke endringar i solinnstraaling alene nok til aa forklare de store temperaturendringene?',
        solution: 'Milankovitch-syklusene (eksentrisitet, aksehelling og presesjon) endrer fordelingen av solenergi paa jordas overflate, spesielt paa hoye breddegrader om sommeren. Naar sommersolen er svak paa nordlige breddegrader, smelter ikke vintersnoen, og iskapper begynner aa vokse. Men endringene i total solinnstraaling er smaa (under 1%), saa tilbakekoblingsmekanismer maa forsterke effekten: (1) is-albedo-tilbakekobling (mer is reflekterer mer sollys), (2) CO2 og metan frigjoeres i mindre grad fra kalde hav og frosset jord, noe som forsterker avkjoelingen, og (3) endringer i havstromsmonstre. Det er samspillet mellom Milankovitch-sykluser og tilbakekoblinger som skaper de store klimasvingningene.',
      },
    },
    {
      id: 'geo2-5-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

Jordas klimahistorie viser at:

- Klimaet har variert dramatisk — fra «snoeballjord» til isfrie poler
- Langsiktige endringer drives av platetektonikk og CO$_2$-syklusen
- Istidssyklusene de siste 2,6 millioner aarene drives av Milankovitch-sykluser forsterket av tilbakekoblinger
- CO$_2$ og temperatur har fulgt hverandre tett gjennom 800 000 aar
- Dagens CO$_2$-nivaa (over 420 ppm) er langt utenfor det naturlige variasjonsomraadet de siste 800 000 aarene
- Selv smaa klimaendringer (f.eks. lille istid, 8,2 ka-hendelsen) har hatt store konsekvenser for samfunn`,
    },
    {
      id: 'geo2-5-2-samle-1',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-2-samle-1',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Noen hevder at «klimaet alltid har endret seg, saa dagens oppvarming er naturlig». Bruk kunnskap fra dette kapittelet til aa gi et vitenskapelig begrunnet svar paa denne paaatanden.',
        solution: 'Det er riktig at klimaet alltid har endret seg, men dette argumentet overser viktige poenger: (1) Naturlige klimaendringer har kjente aarsaker — Milankovitch-sykluser, platetektonikk, vulkanutbrudd — og ingen av disse kan forklare oppvarmingen de siste 50 aarene. (2) Hastigheten paa dagens endring er uvanlig: CO2 har oekt fra 280 til over 420 ppm paa 170 aar, noe som er minst 10 ganger raskere enn noen naturlig endring de siste 800 000 aarene. (3) Retningen er feil: Milankovitch-syklusene peker mot gradvis avkjoeling, ikke oppvarming. (4) Paleoklimatiske data viser at CO2 og temperatur haenger tett sammen — saa det er godt vitenskapelig grunnlag for at oekt CO2 foerer til oppvarming. Konklusjonen er at klimaet har endret seg naturlig, men dagens endring er menneskeskapt og uvanlig rask.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.3: Konsekvenser av klimaendringer
// ============================================================================

export const CHAPTER_GEOFAG_2_5_3: TextbookChapter = {
  id: 'geofag-2-5-3',
  courseId: 'geofag-2',
  chapterNumber: '5.3',
  title: 'Konsekvenser av klimaendringer',
  description: 'Havnivaasstigning, ekstremvaer, oekosystemendringer, arktisk forsterkning og havforsuring.',
  estimatedMinutes: 22,
  competenceGoals: [
    'drofte konsekvenser av klimaendringer for individ, samfunn og oekosystemer, og vurdere baerekraftige loesninger for tilpasning',
    'forklare paleoklimatisk forskning og dens bidrag til aa kunne si noe om fremtidige klimaendringer',
  ],
  content: [
    {
      id: 'geo2-5-3-intro',
      type: 'text',
      content: `# Konsekvenser av klimaendringer

Global oppvarming forer til en rekke konsekvenser for naturen, samfunnet og enkeltmennesker. Disse konsekvensene er allerede observerbare og vil forsterkes i tiaarene fremover. I dette kapittelet ser vi paa de viktigste konsekvensene og samspillet mellom dem.

## Noekkeltall

- Global middeltemperatur har oekt med ca. **1,2°C** siden forindustriell tid
- CO$_2$-konsentrasjonen er over **420 ppm** — hoyere enn paa minst 800 000 aar
- Havnivaaet stiger naa med ca. **3,7 mm per aar** (akselererende)
- Arktisk sjois har mistet ca. **40%** av sommerarealet siden 1979`,
    },
    {
      id: 'geo2-5-3-havnivaa',
      type: 'text',
      content: `## Havnivaastigning

Havnivaaet stiger av to hovedgrunner:

### 1. Termisk ekspansjon
- Varmere vann tar storre plass (termisk ekspansjon)
- Hittil den viktigste faktoren — ansvarlig for ca. halvparten av stigningen
- Virker langsomt men vedvarende — havet fortsetter aa utvide seg i hundrevis av aar etter at temperaturen stabiliseres

### 2. Smelting av landis
- **Groenlands iskappe**: Mister ca. 270 milliarder tonn is per aar — nok til 0,7 mm havnivaastigning aarlig
- **Antarktis**: Mister ca. 150 milliarder tonn per aar, men oeker
- **Smabreer og iskapper**: Bidrar betydelig, men har begrenset totalt volum

### Konsekvenser av havnivaastigning

- **Kysterodering**: Strandsoner trekker seg tilbake
- **Oversvommelser**: Lavtliggende omraader rammes oftere
- **Saltvannsinntrenging**: Grunnvannsressurser forringes
- **Befolkningsforflytning**: Over 1 milliard mennesker bor i lavtliggende kystomraader
- **Oey-stater truet**: Tuvalu, Marshalloyene, Maldivene risikerer aa bli ubeboelige`,
    },
    {
      id: 'geo2-5-3-def-termisk',
      type: 'definition',
      title: 'Termisk ekspansjon',
      content: 'Termisk ekspansjon er fenomenet der vann utvider seg naar det varmes opp. Varmt vann er mindre tett enn kaldt vann (over 4°C), og tar derfor storre plass. Naar havet absorberer varme fra atmosfaeren, bidrar termisk ekspansjon til havnivaastigning — selv uten smelting av is.',
    },
    {
      id: 'geo2-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er de to hovedaarsakene til havnivaastigning?',
        options: [
          { id: 'a', text: 'Termisk ekspansjon og smelting av landis', isCorrect: true },
          { id: 'b', text: 'Smelting av sjois og oekt nedbor', isCorrect: false },
          { id: 'c', text: 'Tektonisk heving og vulkanisme', isCorrect: false },
          { id: 'd', text: 'Tidevannkrefter og vindendringer', isCorrect: false },
        ],
        solution: 'Havnivaaet stiger paa grunn av to hovedfaktorer: (1) termisk ekspansjon — varmere vann tar storre plass, og (2) smelting av landis — Groenland, Antarktis og smabreer. Smelting av sjois bidrar ikke til havnivaastigning fordi isen allerede flyter i vannet (Arkimedes prinsipp).',
      },
    },
    {
      id: 'geo2-5-3-arktisk',
      type: 'text',
      content: `## Arktisk forsterkning

Arktis varmes opp 2–4 ganger raskere enn det globale gjennomsnittet. Dette fenomenet kalles **arktisk forsterkning** (Arctic amplification).

### Aarsaker

1. **Is-albedo-tilbakekobling**: Naar sjois smelter, erstattes den hvite overflaten av moerkt hav som absorberer mer solenergi → mer oppvarming → mer smelting
2. **Endret atmosfaerisk transport**: Varmere havluft gir oerrere skyer som isolerer varmen
3. **Tynnere is**: Tynnere is smelter lettere og fryser saktere om hoesten

### Konsekvenser

- **Sjoisreduksjon**: Sommerisen i Arktis kan forsvinne helt innen 2050
- **Permafrost tiner**: Frigjoer metan (CH$_4$) — en kraftig drivhusgass
- **Isbjorn og seler**: Mister leveomraader og jaktterreng
- **Nordvest- og nordostpassasjen**: Aapnes for skipstrafikk
- **Oerrere Jotunheimen**: Norske fjellomraader mister permafrost og isbreer`,
    },
    {
      id: 'geo2-5-3-def-arktisk',
      type: 'definition',
      title: 'Arktisk forsterkning',
      content: 'Arktisk forsterkning (Arctic amplification) er fenomenet der Arktis varmes opp 2–4 ganger raskere enn det globale gjennomsnittet. Hovedaarsaken er is-albedo-tilbakekoblingen: naar sjois og snoe smelter, erstattes den hvite, reflekterende overflaten av moerkt hav eller land som absorberer mer solenergi, noe som forsterker oppvarmingen ytterligere.',
    },
    {
      id: 'geo2-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-2-ex-2b',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor er tining av permafrost en truende tilbakekoblingsmekanisme i klimasystemet?',
        options: [
          { id: 'a', text: 'Fordi det frigjoer store mengder metan som forsterker drivhuseffekten', isCorrect: true },
          { id: 'b', text: 'Fordi det oeker albedoen i Arktis', isCorrect: false },
          { id: 'c', text: 'Fordi det forer til oekt vulkansk aktivitet', isCorrect: false },
          { id: 'd', text: 'Fordi det absorberer mer CO2 fra atmosfaeren', isCorrect: false },
        ],
        solution: 'Permafrost inneholder enorme mengder organisk materiale (karbon) som har vaert frosset i tusenvis av aar. Naar permafrosten tiner, brytes det organiske materialet ned av mikroorganismer, og det frigjoeres metan (CH4) og CO2. Metan er en 80 ganger sterkere drivhusgass enn CO2 paa 20-aarsbasis. Denne frigjoringen forsterker oppvarmingen, som forer til mer tining — en positiv tilbakekobling.',
      },
    },
    {
      id: 'geo2-5-3-ekstremvaer',
      type: 'text',
      content: `## Ekstremvaer

Et varmere klima forer til endringer i hyppigheten og intensiteten av ekstremvaerhendelser.

### Hetetbolger

- Varme ekstremer blir hyppigere og mer intense
- Heteboelgen i Europa 2003 foerte til over 70 000 ekstra doedsfall
- Heteboelger i India og Pakistan truer millioner av mennesker

### Nedborsendringer

- **Varmere luft holder mer fuktighet** (7% mer per grad oppvarming — Clausius-Clapeyron)
- Kraftig nedbor blir vanligere → oekt flomfare
- Samtidig blir torkeperioder mer intense i noen omraader

### Tropiske sykloner

- Sterkere sykloner (kategori 4–5) blir vanligere
- Varmere havoverflate gir mer energi til stormene
- Nedbormengdene i sykloner oeker kraftig

### Norge

- Mer intens nedbor, spesielt paa Vestlandet og i Nord-Norge
- Oekt fare for flom, jordskred og snoskred
- Varmere vintre med mer regn og mindre sno i lavlandet
- Sterkere stormer langs kysten`,
    },
    {
      id: 'geo2-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor et varmere klima baade kan fore til mer flom og mer torke — tilsynelatende motsatte konsekvenser.',
        hints: ['Tenk paa Clausius-Clapeyron-sammenhengen og hvordan nedbormonstre endrer seg.'],
        solution: 'Et varmere klima gjor at atmosfaeren kan holde mer fuktighet (ca. 7% mer per grad, Clausius-Clapeyron). Naar det saa regner, faller det mer nedbor paa kortere tid — kraftigere regnskyll og oekt flomfare. Samtidig oeker fordampingen fra jorda og vegetasjonen. I perioder mellom nedborepisoder torker jorda raskere ut. I tillegg endres nedborsmonstrene: noen omraader faar mer nedbor mens andre faar mindre. Resultatet er et «vaatere og torrere» klima — mer intense nedborepisoder avbrutt av lengre torreperioder. Begge ekstremer forsterkes.',
      },
    },
    {
      id: 'geo2-5-3-oekosystem',
      type: 'text',
      content: `## Oekosystemendringer

Klimaendringer paavirker oekosystemer paa mange maater:

### Artsforskyvning

- Arter flytter seg mot polene og oppover i hoeyden
- Norske fuglearter trekker lengre nord
- Tregrensen kryper oppover i fjellet
- Marine arter (f.eks. makrell) dukker opp lengre nord enn foer

### Korallrev

- **Korallbleking**: Varmt vann gjor at koraller stoeter ut symbiontalgene sine
- Great Barrier Reef har opplevd gjentatte masseblikingshendelser
- Korallrev er «regnskogene i havet» — hjemsted for 25% av alle marine arter

### Havforsuring

- Havet absorberer ca. **30%** av CO$_2$-utslippene
- CO$_2$ reagerer med vann og danner karbonsyre: CO$_2$ + H$_2$O → H$_2$CO$_3$
- pH i overflatevannet har sunket med **0,1 enhet** siden forindustriell tid (30% surere)
- Trussel mot kalkdannende organismer: koraller, muslinger, snegler, plankton

### Fenologiske endringer

- Vaaren kommer tidligere (blomstring, trekk, egglegging)
- Misforhold mellom arter: insektene klekkes foer fuglene trekker tilbake
- Vekstsesong forlenges — men ogsaa risiko for sen frost etter tidlig knoppskyting`,
    },
    {
      id: 'geo2-5-3-def-havforsuring',
      type: 'definition',
      title: 'Havforsuring',
      content: 'Havforsuring er prosessen der havets pH synker som foelge av opptak av CO$_2$ fra atmosfaeren. CO$_2$ reagerer med sjovann og danner karbonsyre (H$_2$CO$_3$), som reduserer konsentrasjonen av karbonat-ioner (CO$_3^{2-}$). Dette gjor det vanskeligere for organismer som koraller, muslinger og kalkholdige plankton aa bygge skall og skjeletter av kalsiumkarbonat.',
    },
    {
      id: 'geo2-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor er havforsuring en trussel mot korallrev?',
        options: [
          { id: 'a', text: 'Fordi surere vann gjor det vanskeligere for koraller aa bygge kalkskjeletter', isCorrect: true },
          { id: 'b', text: 'Fordi surere vann dreper fiskene som lever paa revet', isCorrect: false },
          { id: 'c', text: 'Fordi surere vann oeker temperaturene i havet', isCorrect: false },
          { id: 'd', text: 'Fordi surere vann oeker havstrommenes styrke', isCorrect: false },
        ],
        solution: 'Havforsuring reduserer mengden karbonat-ioner (CO3 2-) i sjovannet. Koraller bygger skjelettene sine av kalsiumkarbonat (CaCO3), og trenger karbonat-ioner til dette. Naar pH synker, blir det vanskeligere aa danne og opprettholde kalkstrukturer. I tillegg kan eksisterende kalkstrukturer begynne aa loeses opp dersom vannet blir undermettet paa kalsiumkarbonat.',
      },
    },
    {
      id: 'geo2-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjor rede for minst tre positive tilbakekoblingsmekanismer som kan forsterke den globale oppvarmingen. Forklar hvordan de virker.',
        solution: 'Tre viktige positive tilbakekoblinger: (1) Is-albedo-tilbakekobling: Oppvarming smelter is og sno, som erstattes av moerkere overflate (hav/land) som absorberer mer solenergi, noe som gir mer oppvarming. (2) Vanndamp-tilbakekobling: Varmere luft holder mer vanndamp, som er en drivhusgass. Mer vanndamp gir sterkere drivhuseffekt og ytterligere oppvarming. (3) Permafrost-tilbakekobling: Oppvarming tiner permafrost som frigjoer metan og CO2 fra nedbryting av organisk materiale. Disse drivhusgassene forsterker oppvarmingen, som tiner mer permafrost. Andre mulige svar inkluderer: skogbrann-tilbakekobling (varmere klima gir mer skogbrann som frigjoer CO2) og redusert CO2-opptak i varmere hav.',
      },
    },
    {
      id: 'geo2-5-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

Konsekvensene av klimaendringer er mangfoldige og sammenhengende:

- **Havnivaastigning** truer kystsamfunn over hele verden — drevet av termisk ekspansjon og issmelting
- **Arktisk forsterkning** gjor at polområdene varmes opp 2–4 ganger raskere enn gjennomsnittet
- **Ekstremvaer** blir hyppigere og mer intenst — heteboelger, kraftig nedbor, sterke sykloner
- **Oekosystemer** endres raskt — artsforskyvning, korallbleking, fenologiske forstyrrelser
- **Havforsuring** truer kalkdannende organismer og marine næringskjeder

Mange av disse konsekvensene forsterker hverandre gjennom tilbakekoblingsmekanismer, noe som gjor det kritisk aa begrense oppvarmingen.`,
    },
    {
      id: 'geo2-5-3-samle-1',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-3-samle-1',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg et bestemt land eller en region (f.eks. Bangladesh, Arktis, Sahel-beltet eller norskekysten) og droeft hvordan klimaendringene vil paavirke dette omraadet. Ta med konsekvenser for natur, samfunn og enkeltmennesker.',
        solution: 'Eksempel — Bangladesh: Natur: Bangladesh er et lavtliggende delta (store deler under 5 meter over havet). Havnivaastigning paa 1 meter kan oversvomme 17% av landet. Sykloner i Bengalbukta blir sterkere. Elveflom fra Himalaya (smelting + oekt nedbor) forverres. Samfunn: Over 160 millioner innbyggere — et av verdens tettest befolkede land. Landbruk (ris) trues av oversvommelse og saltvannsinntrenging. Infrastruktur (veier, broer, bosetninger) er saarbar. Klimaflyktninger: Millioner kan bli fordrevet. Enkeltmennesker: Tap av hjem og levebroed, helseutfordringer (vannaarne sykdommer, underernæring), psykisk belastning. Kvinner og fattige rammes hardest. Konklusjon: Bangladesh illustrerer klimaurettferdighet — landet har minimale utslipp, men bærer enorme konsekvenser.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.4: Klimatilpasning
// ============================================================================

export const CHAPTER_GEOFAG_2_5_4: TextbookChapter = {
  id: 'geofag-2-5-4',
  courseId: 'geofag-2',
  chapterNumber: '5.4',
  title: 'Klimatilpasning',
  description: 'Tilpasningsstrategier, saarbarhet, resiliens, infrastruktur og Norges tilpasning.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drofte konsekvenser av klimaendringer for individ, samfunn og oekosystemer, og vurdere baerekraftige loesninger for tilpasning',
  ],
  content: [
    {
      id: 'geo2-5-4-intro',
      type: 'text',
      content: `# Klimatilpasning

Selv om vi klarer aa begrense utslippene, vil klimaet fortsette aa endre seg i tiaar fremover paa grunn av allerede utsluppte drivhusgasser. Klimatilpasning handler om aa tilpasse samfunnet og naturen til de endringene som allerede er uunngaaelige.

## Tilpasning vs. utslippsreduksjon

- **Utslippsreduksjon (mitigasjon)**: Redusere mengden drivhusgasser — angriper aarsaken
- **Klimatilpasning (adaptasjon)**: Tilpasse seg konsekvensene — reduserer skadevirkningene

Begge er noedvendige: Utslippsreduksjon for aa begrense omfanget av endringene, og tilpasning for aa haandtere de endringene som allerede er uunngaaelige.`,
    },
    {
      id: 'geo2-5-4-def-tilpasning',
      type: 'definition',
      title: 'Klimatilpasning',
      content: 'Klimatilpasning (adaptasjon) er tiltak og prosesser for aa tilpasse samfunnet, infrastrukturen og oekosystemene til naavaerende og fremtidige klimaendringer. Maalet er aa redusere saarbarhet og utnytte eventuelle muligheter som klimaendringene medforer.',
    },
    {
      id: 'geo2-5-4-def-saarbarhet',
      type: 'definition',
      title: 'Saarbarhet og resiliens',
      content: 'Saarbarhet er graden av et systems mottakelighet for, og manglende evne til aa haandtere, negative virkninger av klimaendringer. Resiliens er et systems evne til aa absorbere forstyrrelser og likevel opprettholde sine grunnleggende funksjoner. Et samfunn med hoey resiliens og lav saarbarhet er bedre rustet for klimaendringer.',
    },
    {
      id: 'geo2-5-4-strategier',
      type: 'text',
      content: `## Tilpasningsstrategier

### 1. Fysisk beskyttelse
- **Flomvern**: Diker, flomvoller, fordroyningsanlegg
- **Kystbeskyttelse**: Bolgjebrytere, strandnæring, tilbaketrekning fra kysten
- **Infrastrukturstyrking**: Dimensjonere roer og kummer for storre vannmengder

### 2. Naturbaserte loesninger
- **Vaatmarker**: Naturlige svamper som absorberer flomvann
- **Mangroveskog**: Beskytter kyster mot stormflo og erosjon
- **Groenne tak og overflatevann**: Reduserer avrenning i byer
- **Skog og vegetasjonssoner**: Stabiliserer jordpartikler mot skred

### 3. Samfunnsplanlegging
- **Arealplanlegging**: Unngaa bygging i flomutsatte omraader
- **Varslingssystemer**: Bedre varsling av ekstremvaer
- **Forsikringsordninger**: Fordele risiko og gi incentiver til forebygging
- **Helseberedskap**: Heteboelgeplaner, vektorkontroll

### 4. Kunnskapstilpasning
- **Klimaprojeksjoner**: Bruke lokal klimamodelering for planlegging
- **Kompetansebygging**: Utdanne fagfolk i klimatilpasning
- **Overvaakning**: Kartlegge saarbare omraader og folge endringer`,
    },
    {
      id: 'geo2-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom klimatilpasning og utslippsreduksjon?',
        options: [
          { id: 'a', text: 'Klimatilpasning handler om aa tilpasse seg konsekvensene, utslippsreduksjon om aa redusere aarsaken', isCorrect: true },
          { id: 'b', text: 'De betyr det samme', isCorrect: false },
          { id: 'c', text: 'Klimatilpasning handler om aa redusere CO2, utslippsreduksjon om aa bygge flomvern', isCorrect: false },
          { id: 'd', text: 'Klimatilpasning er kun for fattige land, utslippsreduksjon for rike land', isCorrect: false },
        ],
        solution: 'Klimatilpasning (adaptasjon) handler om aa tilpasse samfunnet til de klimaendringene som allerede skjer eller er uunngaaelige, f.eks. aa bygge flomvern. Utslippsreduksjon (mitigasjon) handler om aa redusere utslippene av drivhusgasser for aa begrense omfanget av fremtidige endringer. Begge er noedvendige og utfyller hverandre.',
      },
    },
    {
      id: 'geo2-5-4-norge',
      type: 'text',
      content: `## Norges klimatilpasning

Norge er et rikt land med god infrastruktur, men staar likevel overfor betydelige klimautfordringer.

### Utfordringer i Norge

- **Mer intens nedbor**: Oekt fare for flom, overvannsproblemet i byer, jordskred
- **Havnivaastigning**: Truer lavtliggende kystomraader og havner
- **Permafrost-tining**: Ustabil grunn i fjellomraader, foraendret skredrisiko
- **Mildere vintre**: Mer regn, mindre sno — utfordringer for transport og vinteridretter
- **Endrede vekstforhold**: Nye skadeinsekter og plantsykdommer

### Norske tilpasningstiltak

**Overvannshåndtering i byer**
- Kommuner dimensjonerer naa roer og kummer for oekt nedbor
- «Trespaarsregelen»: Overvann haandteres i tre trinn — infiltrasjon, fordroyning, trygge flomveier
- Groenne tak, permeable flater og fordroyningsbasseng

**Naturfarehaandtering**
- NVE (Norges vassdrags- og energidirektorat) kartlegger flaum- og skredutsatte omraader
- Kommuner plikter aa ta hensyn til klimaendringer i arealplaner
- Varslingssystemer for flom, skred og stormflo

**Kyst og infrastruktur**
- Nybygg i kystomraader maa ta hoyere havnivaa med i beregningene
- Veier og jernbane dimensjoneres for storre vassfoering
- Fiskerinaeringen tilpasser seg nye artsfordelinger

**Landbruk**
- Ny sorter tilpasset lengre vekstsesong
- Oekt draenering for aa haandtere mer nedbor
- Muligheter: Lengre vekstsesong og nye vekster som kan dyrkes lengre nord`,
    },
    {
      id: 'geo2-5-4-example-kommune',
      type: 'example',
      title: 'Klimatilpasning i en norsk kystkommune',
      problem: 'En kystkommune i Vestland skal revidere arealplanen sin. Kommunen opplever allerede oekt oversvommelser, mer jordskred og stormflohendelser. Hvordan bor kommunen tenke rundt klimatilpasning?',
      solution: `**Analyse og tiltak:**

1. **Kartlegging**: Bruk NVEs faresonekart for flom og skred, oppdatert med klimaprojeksjoner for 2100
2. **Arealplanlegging**: Unngaa ny bebyggelse i flomutsatte og skredutsatte omraader. Sett byggeforbud i risikosoner
3. **Overvannshåndtering**: Krev overvannsplan for alle nye utbyggingsomraader. Innfoer groenne tak, permeable flater og fordroyningsbasseng
4. **Kystbeskyttelse**: Beregne fremtidig stormflonivaa med klimapaalegg. Sett minstekrav til kote for nybygg
5. **Beredskap**: Oppgradere varslingssystemer. Lage evakueringsplaner for saarbare omraader
6. **Naturbaserte loesninger**: Bevare vaatmarker og vegetasjon som naturlige buffere

**Nokkelprinsipper**: Foer-var-prinsippet, fleksibel planlegging, og robuste loesninger som taalermer enn foerventet endring.`,
    },
    {
      id: 'geo2-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva «naturbaserte loesninger» betyr i klimatilpasning, og gi to konkrete eksempler.',
        solution: 'Naturbaserte loesninger bruker naturlige prosesser og oekosystemer for aa haandtere klimautfordringer, i stedet for rent tekniske loesninger. Eksempel 1: Vaatmarker (myrer, sumper) fungerer som naturlige svamper som absorberer store mengder vann under flom, og slipper det sakte ut etterpaa. Aa bevare og restaurere vaatmarker er billigere og mer barekraftig enn aa bygge store betongdammer. Eksempel 2: Mangroveskog langs tropiske kyster gir naturlig beskyttelse mot stormflo og boelgeerosjon, samtidig som den lagrer karbon og gir leveomraader for fisk og krepsdyr. Naturbaserte loesninger gir ofte tilleggsgevinster: biologisk mangfold, karbonlagring og rekreasjon.',
      },
    },
    {
      id: 'geo2-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva innebærer «trespaarsregelen» for overvannshåndtering i norske byer?',
        options: [
          { id: 'a', text: 'Overvann haandteres i tre trinn: infiltrasjon, fordroyning og trygge flomveier', isCorrect: true },
          { id: 'b', text: 'Kommuner maa spare tre prosent av budsjettet til flomtiltak', isCorrect: false },
          { id: 'c', text: 'Avrenning maa reduseres med tre prosent per aar', isCorrect: false },
          { id: 'd', text: 'Tre ulike etater maa godkjenne overvannsplaner', isCorrect: false },
        ],
        solution: 'Trespaarsregelen innebærer at overvann haandteres i tre trinn: (1) Infiltrasjon — la vannet trenge ned i bakken der det faller (permeable flater, gronne tak). (2) Fordroyning — forsinke vannet i bassenger, dammer og groenne arealer. (3) Trygge flomveier — lede vannet trygt naar det overstiger kapasiteten i de to forste trinnene, uten at det gjor skade.',
      },
    },
    {
      id: 'geo2-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken norsk etat har hovedansvaret for aa kartlegge flom- og skredutsatte omraader?',
        options: [
          { id: 'a', text: 'Meteorologisk institutt', isCorrect: false },
          { id: 'b', text: 'NVE (Norges vassdrags- og energidirektorat)', isCorrect: true },
          { id: 'c', text: 'Miljodirektoratet', isCorrect: false },
          { id: 'd', text: 'Statens vegvesen', isCorrect: false },
        ],
        solution: 'NVE (Norges vassdrags- og energidirektorat) har hovedansvaret for aa kartlegge flomutsatte og skredutsatte omraader i Norge. NVE utarbeider faresonekart som kommunene er pliktige til aa bruke i sin arealplanlegging.',
      },
    },
    {
      id: 'geo2-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Diskuter hvorfor fattige land er mer saarbare for klimaendringer enn rike land, og hvordan dette stiller krav til internasjonal klimatilpasning.',
        solution: 'Fattige land er mer saarbare av flere grunner: (1) Oekonomisk saarbarhet — mange er avhengige av klimafølsomt landbruk og fiske, med lite rom for aa haandtere daarlige aar. (2) Infrastruktur — mangelfull infrastruktur (veier, boliger, vann/avlop) taaaler mindre paakenning. (3) Institusjonell kapasitet — svakere statlige institusjoner for varsling, beredskap og gjenoppbygging. (4) Beliggenhet — mange fattige land ligger i tropene, der virkningene er sterst (heteboelger, sykloner, torke). (5) Helse — begrenset helsevesen gjor befolkningen mer saarbar for klimarelaterte sykdommer. Internasjonalt krever dette: (a) Klimafinansiering fra rike til fattige land (GCF-fondet). (b) Teknologioverforing for tilpasning. (c) Tap-og-skade-mekanismer for irreversible konsekvenser. (d) Klimarettferdighet — de som har bidratt minst til problemet, bærer ofte storst byrde.',
      },
    },
    {
      id: 'geo2-5-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- Klimatilpasning er noedvendig i tillegg til utslippsreduksjon — mange endringer er allerede uunngaaelige
- Strategier inkluderer fysisk beskyttelse, naturbaserte loesninger, samfunnsplanlegging og kunnskapstilpasning
- Saarbarhet og resiliens er noekkelbegreper: Et samfunns evne til aa haandtere klimaendringer avhenger av oekonomiske, institusjonelle og geografiske faktorer
- Norge tilpasser seg gjennom oekt overvannshåndtering, faresonekartlegging, strengere arealplanlegging og beredskap
- Internasjonal klimatilpasning krever solidaritet: Fattige land er mest saarbare, men har minst ressurser til aa tilpasse seg`,
    },
    {
      id: 'geo2-5-4-samle-1',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-4-samle-1',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Din kommune skal utarbeide en klimatilpasningsplan. Skriv et notat (ca. 200 ord) der du foreslaar de tre viktigste tiltakene kommunen bor prioritere. Begrunn valgene dine ut fra lokale forhold og tilgjengelig kunnskap.',
        solution: 'Eksempelsvar for en innlandsk kommune: Tiltak 1: Overvannshåndtering — Kommunen maa oppdatere VA-systemet for oekt nedborsintensitet og innfore trespaarsregelen i alle nye utbyggingsomraader. Gronne tak og permeable flater bor bli standard. Tiltak 2: Arealplanlegging — Oppdatere arealplanen basert paa NVEs faresonekart med klimapaalegg for 2100. Innfore byggeforbud i omraader med forhoyat flom- og skredrisiko. Bevare naturlige flomsletter og vaatmarker. Tiltak 3: Beredskapsplan — Utvikle en helhetlig beredskapsplan for ekstremvaerhendelser med varslingssystemer, evakueringsrutiner og oevelser. Begrunnelse: Disse tiltakene dekker de tre viktigste dimensjonene — fysisk infrastruktur, forebyggende planlegging og krisehåndtering. De er kostnadseffektive fordi de integrerer klimahensyn i eksisterende prosesser og unngaar fremtidige skader.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.5: Klimapolitikk og bærekraft
// ============================================================================

export const CHAPTER_GEOFAG_2_5_5: TextbookChapter = {
  id: 'geofag-2-5-5',
  courseId: 'geofag-2',
  chapterNumber: '5.5',
  title: 'Klimapolitikk og bærekraft',
  description: 'Parisavtalen, IPCC, utslippsreduksjon, karbonfangst og klimarettferdighet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drofte konsekvenser av klimaendringer for individ, samfunn og oekosystemer, og vurdere baerekraftige loesninger for tilpasning',
  ],
  content: [
    {
      id: 'geo2-5-5-intro',
      type: 'text',
      content: `# Klimapolitikk og bærekraft

Klimaproblemet er globalt — utslipp fra ett land paavirker hele planeten. Derfor kreves internasjonalt samarbeid. I dette kapittelet ser vi paa det vitenskapelige grunnlaget, de politiske rammeverkene og teknologiske loesninger for aa haandtere klimaendringene.

## Togradersmålet og 1,5-gradersmålet

Verdens land har blitt enige om aa begrense den globale oppvarmingen til:
- **Godt under 2°C** over forindustrielt nivaa
- Helst **1,5°C** for aa unngaa de verste konsekvensene

For aa naa 1,5°C-maalet maa globale utslipp halveres innen 2030 og naa netto null innen 2050.`,
    },
    {
      id: 'geo2-5-5-ipcc',
      type: 'text',
      content: `## IPCC — det vitenskapelige grunnlaget

**FNs klimapanel (IPCC)** er det viktigste vitenskapelige organet for klimasporsmaalet.

### Hva er IPCC?

- Grunnlagt i 1988 av FN
- Gjennomgaar og sammenfatter all tilgjengelig klimaforskning
- Utgir hovedrapporter ca. hvert 6.–7. aar
- Hundrevis av forskere fra hele verden bidrar
- Mottok Nobels fredspris i 2007 (sammen med Al Gore)

### IPCC-rapportenes struktur

- **Arbeidsgruppe I**: Det fysiske vitenskapelige grunnlaget (temperatur, hav, is)
- **Arbeidsgruppe II**: Konsekvenser, tilpasning og saarbarhet
- **Arbeidsgruppe III**: Tiltak for aa begrense klimaendringer (mitigasjon)
- **Synteserapport**: Sammenfatter alle tre gruppenes funn

### Hovedkonklusjoner (AR6, 2021–2023)

- Oppvarmingen er **utvetydig menneskeskapt**
- Hvert tidels grad oppvarming gir merkbare konsekvenser
- Det er fortsatt mulig aa begrense oppvarmingen til 1,5°C, men vinduet lukkes raskt
- Utslippene maa naa topp foer 2025 og deretter falle raskt`,
    },
    {
      id: 'geo2-5-5-def-ipcc',
      type: 'definition',
      title: 'IPCC (FNs klimapanel)',
      content: 'IPCC (Intergovernmental Panel on Climate Change) er et mellomstatlig organ under FN som sammenstiller og vurderer vitenskapelig forskning om klimaendringer. IPCC driver ikke egen forskning, men gjennomgaar og oppsummerer publisert forskning for aa gi beslutningstakere et oppdatert kunnskapsgrunnlag.',
    },
    {
      id: 'geo2-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er IPCCs hovedoppgave?',
        options: [
          { id: 'a', text: 'Aa drive klimaforskning ved egne laboratorier', isCorrect: false },
          { id: 'b', text: 'Aa sammenstille og vurdere publisert klimaforskning for beslutningstakere', isCorrect: true },
          { id: 'c', text: 'Aa forhandle klimaavtaler mellom land', isCorrect: false },
          { id: 'd', text: 'Aa kontrollere at land overholder utslippsmaail', isCorrect: false },
        ],
        solution: 'IPCCs hovedoppgave er aa sammenstille og vurdere all tilgjengelig vitenskapelig forskning om klimaendringer, og presentere dette for beslutningstakere paa en politisk noeytral maate. IPCC driver ikke egen forskning, men gjennomgaar tusenvis av publiserte studier.',
      },
    },
    {
      id: 'geo2-5-5-paris',
      type: 'text',
      content: `## Parisavtalen (2015)

Parisavtalen er den viktigste internasjonale klimaavtalen og ble vedtatt paa klimatoppmøtet COP21 i Paris.

### Hovedpunkter

- **Temperaturmaal**: Begrense oppvarmingen til godt under 2°C, helst 1,5°C
- **Nasjonale bidrag (NDC)**: Hvert land fastsetter egne utslippsmaal — og skal skjerpe dem hvert femte aar
- **Klimafinansiering**: Rike land skal bidra med minst 100 milliarder USD aarlig til fattige land
- **Transparent rapportering**: Alle land maa rapportere utslipp og fremgang
- **Tap og skade**: Anerkjenner at noen konsekvenser ikke kan tilpasses bort

### Styrker

- Universell deltakelse — nesten alle verdens land har signert
- Fleksibelt rammeverk som tillater nasjonal tilpasning
- Innebygd mekanisme for aa skjerpe ambisjonene over tid

### Svakheter

- Frivillige nasjonale bidrag — ingen sanksjonsmekanisme
- Naaavaerende loefter er ikke nok til aa naa 1,5°C-maalet
- Rike lands finansieringsloefter er ikke fullt innfridd
- Mangler konkret mekanisme for aa gjennomfore utslippskutt`,
    },
    {
      id: 'geo2-5-5-def-paris',
      type: 'definition',
      title: 'Parisavtalen',
      content: 'Parisavtalen er en internasjonal klimaavtale vedtatt i 2015 paa FNs klimatoppmoete COP21. Avtalen forplikter alle land til aa sette nasjonale utslippsmaal (NDC) og skjerpe dem hvert femte aar, med det overordnede maalet aa begrense global oppvarming til godt under 2°C, helst 1,5°C, over forindustrielt nivaa.',
    },
    {
      id: 'geo2-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er en vesentlig svakhet ved Parisavtalen?',
        options: [
          { id: 'a', text: 'Bare rike land har signert avtalen', isCorrect: false },
          { id: 'b', text: 'De nasjonale bidragene er frivillige og det finnes ingen sanksjoner', isCorrect: true },
          { id: 'c', text: 'Avtalen setter ikke noe temperaturmaal', isCorrect: false },
          { id: 'd', text: 'Avtalen gjelder kun i fem aar', isCorrect: false },
        ],
        solution: 'En vesentlig svakhet ved Parisavtalen er at de nasjonale bidragene (NDC) er frivillige. Det finnes ingen sanksjonsmekanisme for land som ikke naar maalene sine. Selv om landene er forpliktet til aa rapportere og skjerpe ambisjonene hvert femte aar, er de faktiske utslippsmaallene selvpaalagt. I tillegg er summen av naaavaerende nasjonale loefter ikke tilstrekkelig til aa naa 1,5°C-maalet.',
      },
    },
    {
      id: 'geo2-5-5-utslippsreduksjon',
      type: 'text',
      content: `## Loesninger for utslippsreduksjon

### Energiomstilling

Den viktigste utslippskilden er forbrenning av fossile brensler. Loesningen er aa gaa over til fornybare energikilder:

- **Solenergi**: Prisen har falt over 90% paa 15 aar — naa den billigste energiformen mange steder
- **Vindkraft**: Stor utbygging baade paa land og til havs
- **Vannkraft**: Norge faar allerede 90% av strommen fra vannkraft
- **Kjernekraft**: Lav-utslipp, men kontroversielt pga. avfall og sikkerhet
- **Hydrogen**: Kan produseres fra fornybar energi og brukes i transport og industri

### Transport

- **Elektrifisering**: Elbiler, elferjer, elektriske tog
- **Kollektivtransport**: Reduserer utslipp per person
- **Biodrivstoff**: Kan erstatte noe fossilt drivstoff
- **Flyreiser**: Vanskeligst aa erstatte — karbonnoeytralt drivstoff under utvikling

### Industri og landbruk

- Elektrifisering av industrielle prosesser
- Karbonfangst fra industriutslipp
- Redusert matsvinn
- Endret kosthold — mindre roedt kjoett, mer plantebasert`,
    },
    {
      id: 'geo2-5-5-ccs',
      type: 'text',
      content: `## Karbonfangst og -lagring (CCS)

CCS (Carbon Capture and Storage) er teknologi for aa fange CO$_2$ fra utslippskilder eller direkte fra luften, og lagre det permanent.

### Tre trinn

1. **Fangst**: CO$_2$ skilles ut fra avgass (industrianlegg, kraftverk) eller direkte fra luft (DAC — Direct Air Capture)
2. **Transport**: CO$_2$ transporteres via roerledning eller skip
3. **Lagring**: CO$_2$ injiseres i geologiske formasjoner under havbunnen — poroes sandstein med tett takbergart

### Norges rolle

- **Northern Lights-prosjektet**: Verdens foerste kommersielle CO$_2$-lager under Nordsjoen
- **Longship**: Norsk CCS-prosjekt som skal fange CO$_2$ fra sement- og avfallsindustri
- Norsk erfaring med CO$_2$-injeksjon fra Sleipner-feltet siden 1996

### Utfordringer

- **Kostbart**: Fangst og lagring er dyrt — krever stotte
- **Energikrevende**: Fangstprosessen bruker energi
- **Skalering**: Maa skaleres enormt for aa gjore forskjell
- **Moralsk hasard**: Fare for at CCS brukes som unnskyldning for aa fortsette utslipp

### Negative utslipp

For aa naa 1,5°C-maalet maa vi trolig ogsaa fjerne CO$_2$ fra atmosfaeren:
- **Skogplanting**: Treer binder CO$_2$ — men arealkrevende
- **BECCS**: Bioenergi med karbonfangst — brenner biomasse og fanger CO$_2$
- **DAC**: Direct Air Capture — fanger CO$_2$ direkte fra lufta
- **Havstimuler**: Tilsette naeringstoff for aa oeke algvekst (kontroversielt)`,
    },
    {
      id: 'geo2-5-5-def-ccs',
      type: 'definition',
      title: 'CCS (Carbon Capture and Storage)',
      content: 'CCS (karbonfangst og -lagring) er teknologi for aa fange CO$_2$-utslipp fra industrielle prosesser eller kraftverk, transportere det og lagre det permanent i geologiske formasjoner under bakken eller havbunnen. Norges Northern Lights-prosjekt er verdens foerste kommersielle CO$_2$-lager.',
    },
    {
      id: 'geo2-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar de tre trinnene i CCS-teknologi og forklar Norges rolle i utviklingen av denne teknologien.',
        hints: ['Tenk paa fangst, transport og lagring — og spesifikke norske prosjekter.'],
        solution: 'CCS bestaar av tre trinn: (1) Fangst — CO2 skilles ut fra avgasser ved industrianlegg eller kraftverk, eventuelt fanges direkte fra lufta (DAC). (2) Transport — CO2 transporteres via roerledning eller skip til lagringsstedet. (3) Lagring — CO2 injiseres i poroes sandstein under tett takbergart paa havbunnen, der det lagres permanent. Norges rolle: Norge er en pioner innen CCS. Sleipner-feltet har injisert CO2 i sandstein under Nordsjoen siden 1996. Northern Lights-prosjektet er verdens foerste kommersielle CO2-lager, mens Longship-prosjektet skal fange CO2 fra norsk sement- og avfallsindustri. Norges erfaring med olje- og gasssektoren gir unik geologisk kompetanse for CO2-lagring.',
      },
    },
    {
      id: 'geo2-5-5-klimarettferdighet',
      type: 'text',
      content: `## Klimarettferdighet

Klimaendringene rammer ikke alle likt. Klimarettferdighet handler om den urettferdige fordelingen av aarsaker og konsekvenser.

### Historisk ansvar

- Rike industriland har sluppet ut mesteparten av historiske CO$_2$-utslipp
- **USA og Europa** staar for ca. 50% av kumulative utslipp
- Mange fattige land har bidratt minimalt til problemet

### Ulik saarbarhet

- Fattige land har minst ressurser til tilpasning
- Laavtliggende oey-stater trues av havnivaastigning de ikke har forarasaket
- Torke i Sahel og Afrikas horn rammer befolkninger med minst ansvar

### Klimarettferdighet innebærer

- **Rike land maa kutte mest og foerst** (differensiert ansvar)
- **Klimafinansiering**: Overforing av midler til saarbare land
- **Tap og skade**: Kompensasjon for irreversible klimakonsekvenser
- **Teknologioverforing**: Dele groen teknologi med utviklingsland
- **Stemme til de mest saarbare**: Smaa oey-stater og urfolk maa hoeres

### Norges posisjon

- Norges rikdom er delvis basert paa olje og gass — stort historisk ansvar
- Bidrar til klimafinansiering, men er ogsaa stor eksportoer av fossil energi
- Debatt: Er det moralsk forsvarlig aa fortsette petroleumsvirksomhet?`,
    },
    {
      id: 'geo2-5-5-def-klimarettferdighet',
      type: 'definition',
      title: 'Klimarettferdighet',
      content: 'Klimarettferdighet er et begrep som belyser det urettferdige forholdet mellom hvem som foraarsaker klimaendringene (rike industriland) og hvem som rammes hardest (fattige land, urfolk, fremtidige generasjoner). Prinsippet innebærer at de som har bidratt mest til problemet, ogsaa har storst ansvar for aa loese det og kompensere de som rammes.',
    },
    {
      id: 'geo2-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-5-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva innebærer prinsippet om differensiert ansvar i klimapolitikken?',
        options: [
          { id: 'a', text: 'At alle land skal kutte like mye', isCorrect: false },
          { id: 'b', text: 'At land med stoerst historiske utslipp har stoerst ansvar for aa kutte', isCorrect: true },
          { id: 'c', text: 'At kun de fattigste landene maa kutte utslipp', isCorrect: false },
          { id: 'd', text: 'At hvert land bestemmer helt selv uten internasjonalt samarbeid', isCorrect: false },
        ],
        solution: 'Prinsippet om differensiert ansvar (common but differentiated responsibilities) innebærer at rike industriland som historisk har staaatt for de stoerste utslippene, maa ta stoerst ansvar for aa kutte utslipp og finansiere tilpasning i saarbare land. Prinsippet anerkjenner at alle land har ansvar, men at byrden maa fordeles etter historisk bidrag og oekonomisk evne.',
      },
    },
    {
      id: 'geo2-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Droeft Norges rolle i det globale klimasporsmaalet. Bruk argumenter baade for og mot Norges petroleumsvirksomhet i lys av klimarettferdighet og bærekraft.',
        solution: 'Argumenter for fortsatt petroleumsvirksomhet: Norges olje og gass produseres med lavere utslipp enn i mange andre land. Inntektene finansierer groen teknologi og klimatiltak. Naturgass erstatter kull i Europa og gir netto utslippsreduksjon. Oljefondet gir oekonomisk trygghet for groen omstilling. Argumenter mot: Norges rikdom er bygget paa fossil energi — stort historisk ansvar. Aa produsere og eksportere fossilt brensel er i strid med klimamaallene. Forbrenning av norsk eksportert olje og gass gir ca. 500 millioner tonn CO2 per aar — ti ganger Norges egne utslipp. Klimarettferdighet krever at rike land gaar foran. Investering i fossil infrastruktur laaser oss fast i hoye utslipp. Konklusjon: Dilemmaet illustrerer spenningen mellom nasjonal okonomi og globalt ansvar. En baerekraftig losning krever en planlagt nedtrapping med tilsvarende opptrapping av fornybar energi og CCS-teknologi.',
      },
    },
    {
      id: 'geo2-5-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- **IPCC** gir det vitenskapelige grunnlaget: Oppvarmingen er utvetydig menneskeskapt, og vi maa handle raskt
- **Parisavtalen** setter rammen: Godt under 2°C, helst 1,5°C — men naaavaerende loefter er utilstrekkelige
- **Utslippsreduksjon** krever energiomstilling, elektrifisering og endret adferd
- **CCS** kan bidra, men er ikke en erstatning for utslippskutt — Norge er en pioner med Northern Lights
- **Klimarettferdighet** er sentralt: De som har bidratt minst, rammes hardest — rike land maa ta stoerst ansvar
- **Bærekraft** krever baade utslippsreduksjon og klimatilpasning — og solidaritet mellom rike og fattige land`,
    },
    {
      id: 'geo2-5-5-samle-1',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-5-samle-1',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du skal holde en presentasjon for klassen om Parisavtalen. Lag en disposisjon som dekker: (a) hva avtalen inneholder, (b) styrker og svakheter, og (c) din vurdering av om avtalen er tilstrekkelig for aa loese klimaproblemet.',
        solution: 'Disposisjon: (a) Innhold: Temperaturmaalet (godt under 2°C, helst 1,5°C). NDC — nasjonale bidrag som skjerpes hvert femte aar. Klimafinansiering fra rike til fattige land. Transparent rapportering og global statusgjennomgang. Anerkjennelse av tap og skade. (b) Styrker: Universell deltakelse (nesten alle land). Fleksibelt rammeverk tilpasset ulike land. Innebygd mekanisme for oekning av ambisjoner. Svakheter: Frivillige maal uten sanksjoner. Naaavaerende loefter gir 2,4–2,8°C oppvarming. Klimafinansiering utilstrekkelig. Ingen mekanisme for aa tvinge gjennomfoering. (c) Vurdering: Parisavtalen er et historisk gjennombrudd som rammeverk, men utilstrekkelig alene. Den trenger: sterkere NDC-er, sanksjonsmekanismer, oekt finansiering og supplement fra nasjonale lovverk og markdsmekanismer (karbonprising). Avtalen er noedvendig, men ikke tilstrekkelig for aa loese klimaproblemet.',
      },
    },
    {
      id: 'geo2-5-5-samle-2',
      type: 'exercise',
      exercise: {
        id: 'geo2-5-5-samle-2',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket norsk CCS-prosjekt regnes som verdens foerste kommersielle CO2-lager?',
        options: [
          { id: 'a', text: 'Sleipner', isCorrect: false },
          { id: 'b', text: 'Northern Lights', isCorrect: true },
          { id: 'c', text: 'Longship', isCorrect: false },
          { id: 'd', text: 'Snohvit', isCorrect: false },
        ],
        solution: 'Northern Lights-prosjektet regnes som verdens foerste kommersielle CO2-lager. Det tar imot CO2 fra industrielle kilder (ogsaa fra andre land) og lagrer det i geologiske formasjoner under Nordsjoen. Sleipner var foerst ute med CO2-injeksjon (fra 1996), men Northern Lights er det foerste prosjektet med en aapen, kommersiell forretningsmodell.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Samle alle kapitler fra Del 5
// ============================================================================

export const GEOFAG_2_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_GEOFAG_2_5_1,
  CHAPTER_GEOFAG_2_5_2,
  CHAPTER_GEOFAG_2_5_3,
  CHAPTER_GEOFAG_2_5_4,
  CHAPTER_GEOFAG_2_5_5,
];

export function getGeofag2Del5Chapter(chapterId: string): TextbookChapter | undefined {
  return GEOFAG_2_DEL5_CHAPTERS.find(chapter => chapter.id === chapterId);
}
