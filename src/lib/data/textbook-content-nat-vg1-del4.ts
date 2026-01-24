/**
 * Tekstbok innhold for Naturfag VG1 DEL 4
 * Seksjon 7: Arv, evolusjon og bioteknologi (7.1-7.7)
 *
 * Dekker LK20 kompetansemål for NAT01-04.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// SEKSJON 7: Arv, evolusjon og bioteknologi
// ============================================================================

export const CHAPTER_NAT_VG1_7_1: TextbookChapter = {
  id: 'nat-vg1-7-1',
  courseId: 'nat-vg1',
  chapterNumber: '7.1',
  title: 'DNA - arvematerialet',
  description: 'Lær om DNA-molekylets struktur og funksjon.',
  estimatedMinutes: 55,
  competenceGoals: ['beskrive DNA og hvordan egenskaper arves'],
  content: [
    {
      id: 'nat-vg1-7-1-intro',
      type: 'text',
      content: `## Arv og DNA

**Arv** er overføring av egenskaper fra foreldre til avkom. Det som overføres, er genetisk informasjon lagret i **DNA** (deoksyribonukleinsyre).

**Hvor finnes DNA?**
- I cellekjernen til alle levende celler
- Organisert i strukturer kalt **kromosomer**
- Mennesker har 46 kromosomer (23 par)

DNA inneholder oppskriften på alle proteiner kroppen lager, og dermed indirekte oppskriften på hvordan kroppen bygges opp og fungerer.`,
    },
    {
      id: 'nat-vg1-7-1-def-1',
      type: 'definition',
      title: 'DNA-molekylets struktur',
      content: `**Dobbelheliks:** DNA har form som en vridd stige (dobbeltspiral)

**Byggesteiner - nukleotider:**
Hver nukleotid består av:
- Sukkermolekyl (deoksyribose)
- Fosfatgruppe
- Nitrogenbase (A, T, G eller C)

**De fire basene:**
- **A**denin - parer med Tymin
- **T**ymin - parer med Adenin
- **G**uanin - parer med Cytosin
- **C**ytosin - parer med Guanin

**Komplementær baseparing:**
A-T og G-C holder de to DNA-trådene sammen med hydrogenbindinger.`,
    },
    {
      id: 'nat-vg1-7-1-def-2',
      type: 'definition',
      title: 'Gener og genom',
      content: `**Gen:** Et avgrenset område på DNA som inneholder oppskriften på ett protein (eller RNA-molekyl)

**Genom:** Hele arvematerialet til en organisme. Menneskets genom består av ca. 20 000 gener.

**Kromosom:** En lang DNA-tråd pakket sammen med proteiner. Inneholder mange gener.

**Genotype:** En organismes genetiske sammensetning

**Fenotype:** De synlige egenskapene (utseende, egenskaper) - resultat av genotype + miljø`,
    },
    {
      id: 'nat-vg1-7-1-def-3',
      type: 'definition',
      title: 'DNA-replikasjon',
      content: `Før en celle deler seg, må DNA kopieres slik at begge dattercellene får et komplett sett.

**Steg i DNA-replikasjon:**
1. **Åpning:** Enzymet helikase åpner dobbelheliksen
2. **Kopiering:** DNA-polymerase leser av en tråd og bygger en komplementær tråd
3. **To kopier:** Hver nye DNA-molekyl har én gammel og én ny tråd (semikonservativ replikasjon)

**Nøyaktighet:** DNA-polymerase gjør svært få feil (ca. 1 per milliard basepar). Korrekturlesing og reparasjonssystemer retter opp de fleste feil.`,
    },
    {
      id: 'nat-vg1-7-1-example-1',
      type: 'example',
      title: 'Eksempel: Komplementær basesekvens',
      problem: 'Hvis den ene DNA-tråden har sekvensen 5\'-ATGCCGTA-3\', hva er sekvensen på den komplementære tråden?',
      solution: `**Løsning:**

Bruker baseparingsreglene: A-T og G-C

Original tråd: 5'-A T G C C G T A-3'
               |  |  |  |  |  |  |  |
Komplementær:  3'-T A C G G C A T-5'

**Svar:** Den komplementære tråden er 3'-TACGGCAT-5'
(eller skrevet fra 5' til 3': 5'-TACGGCAT-3' lest baklengs)

**Huskeregel:**
- A parer alltid med T (og omvendt)
- G parer alltid med C (og omvendt)`,
    },
    {
      id: 'nat-vg1-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv strukturen til DNA-molekylet.',
        solution: 'DNA er bygget opp som en dobbelheliks - to tråder som snor seg rundt hverandre. Hver tråd består av nukleotider, som igjen er bygget opp av et sukkermolekyl (deoksyribose), en fosfatgruppe og en nitrogenbase. Det finnes fire baser: adenin (A), tymin (T), guanin (G) og cytosin (C). De to trådene holdes sammen av hydrogenbindinger mellom basene: A parer med T, og G parer med C.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom gen, kromosom og genom.',
        solution: 'Et gen er et avgrenset område på DNA som inneholder oppskriften på ett protein. Et kromosom er en lang DNA-tråd pakket sammen med proteiner, og inneholder mange gener. Genomet er hele arvematerialet til en organisme, altså summen av alle genene fordelt på alle kromosomene. Mennesker har ca. 20 000 gener fordelt på 46 kromosomer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'En DNA-tråd har sekvensen GCATTAGC. Skriv den komplementære sekvensen.',
        solution: 'Ved å bruke baseparingsreglene (A-T og G-C): G parer med C, C parer med G, A parer med T, osv. Original: GCATTAGC. Komplementær: CGTAATCG.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_7_2: TextbookChapter = {
  id: 'nat-vg1-7-2',
  courseId: 'nat-vg1',
  chapterNumber: '7.2',
  title: 'Gener og proteinsyntese',
  description: 'Forstå hvordan genetisk informasjon omsettes til proteiner.',
  estimatedMinutes: 55,
  competenceGoals: ['beskrive DNA og hvordan egenskaper arves'],
  content: [
    {
      id: 'nat-vg1-7-2-intro',
      type: 'text',
      content: `## Fra DNA til protein

Gener inneholder informasjon, men det er **proteiner** som utfører det meste av arbeidet i cellen.

**Det sentrale dogme i molekylærbiologien:**
DNA → RNA → Protein

**To hovedsteg:**
1. **Transkripsjon:** DNA kopieres til mRNA (i cellekjernen)
2. **Translasjon:** mRNA leses av og oversettes til protein (ved ribosomene)

Tre baser i DNA/RNA kalles et **kodon** og koder for én aminosyre.`,
    },
    {
      id: 'nat-vg1-7-2-def-1',
      type: 'definition',
      title: 'Transkripsjon',
      content: `**Transkripsjon** = Å skrive om DNA-sekvensen til mRNA

**Steg:**
1. RNA-polymerase binder seg til starten av genet (promotor)
2. DNA-dobbelheliksen åpnes
3. RNA-polymerase leser av DNA og bygger en komplementær mRNA-tråd
4. mRNA forlater cellekjernen gjennom kjerneporer

**RNA vs DNA:**
- RNA har uracil (U) i stedet for tymin (T)
- RNA har ribose i stedet for deoksyribose
- RNA er enkelttrådet`,
    },
    {
      id: 'nat-vg1-7-2-def-2',
      type: 'definition',
      title: 'Den genetiske koden',
      content: `**Kodon:** Tre baser som koder for én aminosyre

Med 4 baser og 3 posisjoner: 4³ = 64 mulige kodoner

**Egenskaper ved den genetiske koden:**
- **Universal:** Samme kode i nesten alle organismer
- **Degenerert:** Flere kodoner kan kode for samme aminosyre
- **Startkodon:** AUG (koder også for metionin)
- **Stoppkodoner:** UAA, UAG, UGA (signaliserer slutten)

Eksempel: UUU = fenylalanin, GCA = alanin, AAA = lysin`,
    },
    {
      id: 'nat-vg1-7-2-def-3',
      type: 'definition',
      title: 'Translasjon',
      content: `**Translasjon** = Å oversette mRNA til protein ved ribosomer

**Komponenter:**
- **mRNA:** Bærer informasjonen fra DNA
- **tRNA:** Transporterer aminosyrer, har antikodon som matcher kodon
- **Ribosom:** "Fabrikken" som setter sammen aminosyrene

**Steg:**
1. mRNA bindes til ribosomet
2. tRNA med riktig antikodon bringer aminosyre
3. Aminosyrer kobles sammen med peptidbindinger
4. Ribosomet beveger seg langs mRNA
5. Stoppes ved stoppkodon
6. Ferdig proteinkjede frigjøres`,
    },
    {
      id: 'nat-vg1-7-2-example-1',
      type: 'example',
      title: 'Eksempel: Fra DNA til aminosyresekvens',
      problem: 'DNA-sekvensen TAC-GCA-AAA-ATT skal transkriberes og translateres. Hva blir aminosyresekvensen?',
      solution: `**Steg 1: Transkripsjon (DNA → mRNA)**
DNA:  TAC - GCA - AAA - ATT
      ↓     ↓     ↓     ↓
mRNA: AUG - CGU - UUU - UAA

(Husk: A↔U og G↔C i RNA)

**Steg 2: Translasjon (mRNA → protein)**
Bruk kodetabellen:
- AUG = Metionin (startkodon)
- CGU = Arginin
- UUU = Fenylalanin
- UAA = STOPP

**Svar:** Aminosyresekvensen blir Met-Arg-Phe (metionin-arginin-fenylalanin)`,
    },
    {
      id: 'nat-vg1-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom transkripsjon og translasjon.',
        solution: 'Transkripsjon er prosessen der DNA-sekvensen kopieres over til mRNA. Dette skjer i cellekjernen, og enzymet RNA-polymerase bygger mRNA-tråden. Translasjon er prosessen der mRNA-sekvensen oversettes til en aminosyresekvens (protein). Dette skjer ved ribosomene i cytoplasma, der tRNA bringer aminosyrer som kobles sammen basert på mRNA-kodonene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er et kodon, og hvorfor trenger vi tre baser for å kode for en aminosyre?',
        solution: 'Et kodon er en sekvens av tre nukleotidbaser i mRNA som koder for én bestemt aminosyre. Vi trenger tre baser fordi det finnes 20 ulike aminosyrer, men bare 4 ulike baser. Med bare én base kunne vi kode for 4 aminosyrer (4¹=4), med to baser 16 aminosyrer (4²=16). Først med tre baser får vi 64 muligheter (4³=64), nok til å dekke alle 20 aminosyrer pluss start- og stoppkodoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'mRNA-sekvensen er AUG-GGC-UCA-UGA. Bruk en kodetabell til å finne aminosyresekvensen.',
        solution: 'AUG = Metionin (start), GGC = Glycin, UCA = Serin, UGA = Stopp. Aminosyresekvensen blir derfor Met-Gly-Ser (metionin-glycin-serin).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_7_3: TextbookChapter = {
  id: 'nat-vg1-7-3',
  courseId: 'nat-vg1',
  chapterNumber: '7.3',
  title: 'Arv og variasjon',
  description: 'Lær om hvordan egenskaper arves og hvordan variasjon oppstår.',
  estimatedMinutes: 50,
  competenceGoals: ['beskrive DNA og hvordan egenskaper arves, og gjøre rede for hvordan arv er en forutsetning for evolusjon'],
  content: [
    {
      id: 'nat-vg1-7-3-intro',
      type: 'text',
      content: `## Hvordan arves egenskaper?

Ved seksuell formering får avkommet gener fra begge foreldrene. Dette gir genetisk variasjon.

**Mendels lover:**
Gregor Mendel oppdaget grunnleggende arveregler på 1800-tallet ved å studere erteplanter.

**Viktige begreper:**
- **Alleler:** Ulike varianter av samme gen
- **Homozygot:** To like alleler (AA eller aa)
- **Heterozygot:** To ulike alleler (Aa)
- **Dominant:** Allel som kommer til uttrykk selv i heterozygot tilstand (A)
- **Recessiv:** Allel som bare kommer til uttrykk i homozygot tilstand (a)`,
    },
    {
      id: 'nat-vg1-7-3-def-1',
      type: 'definition',
      title: 'Kilder til genetisk variasjon',
      content: `**1. Mutasjoner:**
Tilfeldige endringer i DNA-sekvensen
- Punktmutasjoner (én base endres)
- Delesjoner (baser fjernes)
- Insersjoner (baser legges til)
- Kan være nøytrale, skadelige eller fordelaktige

**2. Genetisk rekombinasjon:**
Ved meiose (dannelse av kjønnsceller) blandes gener fra mor og far
- Overkrysning mellom homologe kromosomer
- Tilfeldig fordeling av kromosomer

**3. Tilfeldig befruktning:**
Hvilken sædcelle som befrukter hvilken eggcelle er tilfeldig`,
    },
    {
      id: 'nat-vg1-7-3-def-2',
      type: 'definition',
      title: 'Mutasjoner',
      content: `**Typer mutasjoner:**

**Stille mutasjon:** Endringen gir samme aminosyre (pga. den degenererte koden)

**Missense-mutasjon:** Endringen gir en annen aminosyre

**Nonsense-mutasjon:** Endringen gir et stoppkodon → forkortet protein

**Frameshift-mutasjon:** Innsetting/fjerning av baser som ikke er delelig med 3 → hele leserammen forskyves

**Årsaker til mutasjoner:**
- Feil ved DNA-replikasjon
- Kjemiske stoffer (mutagener)
- Stråling (UV, radioaktivitet)`,
    },
    {
      id: 'nat-vg1-7-3-example-1',
      type: 'example',
      title: 'Eksempel: Krysning med Mendels lover',
      problem: 'En erteplante med gule erter (YY) krysses med en plante med grønne erter (yy). Gul farge er dominant. Hva blir fenotypen i F1-generasjonen og F2-generasjonen?',
      solution: `**F1-generasjon (YY × yy):**

Foreldrekryss:
     Y    Y
y   Yy   Yy
y   Yy   Yy

Alle F1-avkom blir **Yy** (heterozygote)
Fenotype: **100% gule erter** (Y er dominant)

**F2-generasjon (Yy × Yy):**

     Y    y
Y   YY   Yy
y   Yy   yy

Genotyper: 1 YY : 2 Yy : 1 yy
Fenotyper: **3 gule : 1 grønn** (75% gule, 25% grønne)

Dette er det klassiske 3:1-forholdet Mendel oppdaget.`,
    },
    {
      id: 'nat-vg1-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom genotype og fenotype.',
        solution: 'Genotype er organismens genetiske sammensetning - hvilke alleler den har for et gen (f.eks. Aa eller AA). Fenotype er de observerbare egenskapene som kommer til uttrykk (f.eks. brun øyefarge). Fenotypen er resultatet av genotypen pluss påvirkning fra miljøet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn tre kilder til genetisk variasjon og forklar kort hver av dem.',
        solution: '1) Mutasjoner: Tilfeldige endringer i DNA-sekvensen som kan gi nye alleler. 2) Genetisk rekombinasjon: Ved meiose blandes gener fra mor og far gjennom overkrysning og tilfeldig kromosomfordeling. 3) Tilfeldig befruktning: Hvilke kjønnsceller som møtes ved befruktning er tilfeldig, noe som gir nye genkombinasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hvorfor genetisk variasjon er viktig for evolusjon.',
        solution: 'Evolusjon krever variasjon i populasjonen som naturlig utvalg kan virke på. Uten genetisk variasjon ville alle individer vært like, og det ville ikke vært noe råmateriale for utvalg. Når miljøet endrer seg, er det de individene med de best tilpassede egenskapene som overlever og formerer seg. Genetisk variasjon sikrer at det alltid finnes individer med ulike egenskaper som kan være fordelaktige under nye forhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_7_4: TextbookChapter = {
  id: 'nat-vg1-7-4',
  courseId: 'nat-vg1',
  chapterNumber: '7.4',
  title: 'Evolusjon og naturlig utvalg',
  description: 'Forstå evolusjonsteoriens grunnprinsipper.',
  estimatedMinutes: 55,
  competenceGoals: ['gjøre rede for hvordan arv er en forutsetning for evolusjon'],
  content: [
    {
      id: 'nat-vg1-7-4-intro',
      type: 'text',
      content: `## Hva er evolusjon?

**Evolusjon** er endring i sammensetningen av gener i en populasjon over generasjoner.

**Charles Darwin (1859):**
I "Artenes opprinnelse" presenterte Darwin teorien om evolusjon ved naturlig utvalg.

**Darwins observasjoner:**
1. Individer i en populasjon varierer
2. Noen variasjoner er arvelige
3. Flere individer fødes enn som overlever
4. Individer med fordelaktige egenskaper overlever og formerer seg oftere

Dette fører til at fordelaktige egenskaper blir mer vanlige over tid.`,
    },
    {
      id: 'nat-vg1-7-4-def-1',
      type: 'definition',
      title: 'Naturlig utvalg',
      content: `**Naturlig utvalg** er prosessen der individer med egenskaper som gir bedre overlevelse og reproduksjon, etterlater seg flere avkom.

**Forutsetninger:**
1. **Variasjon:** Individer er forskjellige
2. **Arv:** Egenskapene kan arves
3. **Overlevelse:** Ikke alle overlever til reproduksjon
4. **Reproduksjon:** De best tilpassede får flere avkom

**Resultat:** Over tid endres egenskapene i populasjonen
- Fordelaktige egenskaper øker i frekvens
- Ufordelaktige egenskaper reduseres

**Viktig:** Naturlig utvalg virker på fenotyper, men det er genotypene som arves.`,
    },
    {
      id: 'nat-vg1-7-4-def-2',
      type: 'definition',
      title: 'Evolusjonære mekanismer',
      content: `**1. Naturlig utvalg:**
Seleksjon for egenskaper som øker overlevelse og reproduksjon

**2. Seksuelt utvalg:**
Seleksjon for egenskaper som øker sjansen for å få en partner (påfuglfjær, hjortevold)

**3. Genetisk drift:**
Tilfeldige endringer i genfrekvenser, spesielt viktig i små populasjoner

**4. Genflyt:**
Gener spres mellom populasjoner gjennom migrasjon

**5. Mutasjoner:**
Gir nye alleler som utvalg kan virke på`,
    },
    {
      id: 'nat-vg1-7-4-def-3',
      type: 'definition',
      title: 'Tilpasning og artsdannelse',
      content: `**Tilpasning:** En egenskap som øker en organismes evne til å overleve og formere seg i sitt miljø.

Eksempler:
- Kamelens pukkel (vannlagring i ørken)
- Isbjørnens hvite pels (kamuflasje)
- Kaktusens torner (beskyttelse, redusert vanntap)

**Artsdannelse:** Prosessen der én art splittes i to eller flere nye arter

**Forutsetninger:**
1. Geografisk eller reproduktiv isolasjon
2. Ulike seleksjonstrykk i ulike miljøer
3. Akkumulering av genetiske forskjeller
4. Over tid: Reproduktiv isolasjon → nye arter`,
    },
    {
      id: 'nat-vg1-7-4-example-1',
      type: 'example',
      title: 'Eksempel: Peppered moth (bjørkemåler)',
      problem: 'Forklar hvordan industrialiseringen i England førte til endring i fargene hos bjørkemålere.',
      solution: `**Bakgrunn:**
Bjørkemålere finnes i lys og mørk variant. Før industrialiseringen var den lyse varianten vanligst fordi den var godt kamuflert på lysfarget bjørkebark dekket av lav.

**Under industrialiseringen (1800-tallet):**
1. Sot fra fabrikker dekket trærne og drepte laven
2. Barken ble mørk
3. Lyse møll ble lett synlige for fugler → ble spist
4. Mørke møll var godt kamuflert → overlevde og formerte seg
5. Andelen mørke møll økte fra ~2% til over 90%

**Etter renere luft (1900-tallet):**
1. Luftforurensningen ble redusert
2. Lav vokste tilbake, barken ble lysere
3. Lyse møll ble igjen bedre kamuflert
4. Andelen lyse møll økte igjen

**Dette er evolusjon i aksjon:** Endring i genfrekvenser (mørk/lys) drevet av naturlig utvalg (fuglenes predasjon) som respons på miljøendringer.`,
    },
    {
      id: 'nat-vg1-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva naturlig utvalg er og hvilke forutsetninger som må være til stede.',
        solution: 'Naturlig utvalg er prosessen der individer med egenskaper som gir bedre overlevelse og reproduksjon, etterlater seg flere avkom. Forutsetninger: 1) Det må finnes variasjon i populasjonen. 2) Variasjonen må være arvelig. 3) Ikke alle individer overlever til reproduksjon (kamp om ressurser). 4) De best tilpassede individene får flere avkom som arver de fordelaktige egenskapene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Gi et eksempel på en tilpasning hos et dyr eller en plante, og forklar hvordan denne tilpasningen kan ha utviklet seg gjennom naturlig utvalg.',
        solution: 'Eksempel: Sjiraffens lange hals. Opprinnelig varierte halslengden i sjiraffpopulasjonen. I perioder med tørke, når mat var knapp, kunne sjiraffer med litt lengre hals nå blader høyere opp i trærne. Disse overlevde bedre og fikk flere avkom som arvet de lengre halsene. Over mange generasjoner ble lengre hals stadig vanligere, og den gjennomsnittlige halslengden økte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar forskjellen mellom naturlig utvalg og genetisk drift.',
        solution: 'Naturlig utvalg er en retningsbestemt prosess der egenskaper som øker overlevelse og reproduksjon blir vanligere. Genetisk drift er tilfeldige endringer i genfrekvenser som ikke skyldes seleksjon. Drift er spesielt viktig i små populasjoner, der tilfeldige hendelser kan føre til at alleler forsvinner eller blir dominerende uavhengig av om de er fordelaktige. Naturlig utvalg er forutsigbart (fordelaktige egenskaper øker), mens drift er tilfeldig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_7_5: TextbookChapter = {
  id: 'nat-vg1-7-5',
  courseId: 'nat-vg1',
  chapterNumber: '7.5',
  title: 'Klimaendringer og biologisk mangfold',
  description: 'Lær hvordan klimaendringer påvirker arter og økosystemer.',
  estimatedMinutes: 50,
  competenceGoals: ['gjøre rede for hvordan klimaendringer påvirker evolusjon, utbredelse av arter og biologisk mangfold'],
  content: [
    {
      id: 'nat-vg1-7-5-intro',
      type: 'text',
      content: `## Klimaendringer truer biologisk mangfold

Klimaendringene skjer så raskt at mange arter ikke rekker å tilpasse seg.

**Hvordan påvirkes arter?**
- Endrede temperatur- og nedbørsmønstre
- Endret tilgang på mat og vann
- Forstyrrelser i tidspunktet for livssyklusfaser
- Tap av leveområder
- Nye sykdommer og parasitter

**Truede økosystemer:**
- Korallrev (bleking)
- Arktis (issmelting)
- Fjellområder (arter presses oppover)
- Regnskog (tørke og branner)`,
    },
    {
      id: 'nat-vg1-7-5-def-1',
      type: 'definition',
      title: 'Fenologiske endringer',
      content: `**Fenologi:** Studiet av tidspunktet for biologiske hendelser i løpet av året.

**Eksempler på fenologiske endringer:**
- Trær springer ut tidligere om våren
- Fugler kommer tidligere fra trekkområdene
- Insekter klekker tidligere
- Blomstringstid forskyves

**Problem: Fenologisk mismatch**
Når ulike arter i et samspill reagerer ulikt på klimaendringer, kan dette føre til "mismatch":
- Insekter kan klekke før blomstringen → mangler mat
- Fugler kan ankomme etter at insektene har klekket → mangler mat til ungene
- Pollinating dyr er ikke til stede når planten blomstrer → redusert frøsetting`,
    },
    {
      id: 'nat-vg1-7-5-def-2',
      type: 'definition',
      title: 'Artsforskyvninger',
      content: `**Arter flytter seg:**
- Nordover (på den nordlige halvkule)
- Oppover i høyden (i fjellområder)
- Mot dypere, kjøligere vann (i havet)

**Hastighet:** Mange arter flytter seg 6-17 km nordover per tiår, eller 6-11 m oppover i høyden.

**Utfordringer:**
- Ikke alle arter kan flytte seg like raskt
- Fysiske barrierer (hav, fjell, byer)
- Leveområder finnes kanskje ikke
- Arter på fjelltopper har ingen steder å flytte

**Norske eksempler:**
- Sørlige arter som hjort og grevling sprer seg nordover
- Fjellrev taper terreng til rødrev
- Skoggrensen kryper oppover`,
    },
    {
      id: 'nat-vg1-7-5-def-3',
      type: 'definition',
      title: 'Utryddelse og evolusjon',
      content: `**Hastigheten på endringene:**
Dagens klimaendringer skjer 10-100 ganger raskere enn naturlige endringer i jordens historie.

**Truet biologisk mangfold:**
- Opp mot 1 million arter kan være truet av utryddelse
- 6. masseutryddelse er i gang
- Arter med spesialiserte krav er mest utsatt

**Evolusjonære responser:**
Noen arter kan tilpasse seg gjennom evolusjon:
- Forutsetter tilstrekkelig genetisk variasjon
- Krever nok tid for generasjonsskifter
- Eksempel: Noen sommerfugler får mørkere vinger (absorberer mer varme)

**Men:** De fleste arter endrer seg for sakte til å holde følge med klimaendringene.`,
    },
    {
      id: 'nat-vg1-7-5-example-1',
      type: 'example',
      title: 'Eksempel: Korallbleking',
      problem: 'Forklar hvorfor korallrev over hele verden dør som følge av klimaendringer.',
      solution: `**Koraller og zooxantheller:**
Koraller lever i symbiose med alger (zooxantheller) som bor i korallvevet. Algene produserer mat gjennom fotosyntese og gir korallene deres farger.

**Varmere hav:**
Når havtemperaturen stiger 1-2°C over normalen:
1. Korallene stresses og støter ut algene
2. Korallen mister fargen (bleking)
3. Uten alger mister korallen 90% av matforsyningen
4. Hvis varmen varer for lenge, dør korallen

**Konsekvenser:**
- Great Barrier Reef har opplevd alvorlig bleking i 2016, 2017, 2020, 2022
- Ca. 50% av verdens korallrev er allerede sterkt skadet
- Korallrev er hjem til 25% av alle marine arter
- Tap av rev truer matforsyning og kystbeskyttelse for millioner av mennesker

**Tilleggsbelastninger:**
- Havforsuring (CO₂ løses i havet → surt → koraller sliter med å bygge skall)
- Forurensning og overfiske`,
    },
    {
      id: 'nat-vg1-7-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva fenologisk mismatch er, og gi et eksempel.',
        solution: 'Fenologisk mismatch oppstår når klimaendringer fører til at tidspunktet for biologiske hendelser forskyves ulikt for ulike arter som er avhengige av hverandre. Eksempel: Eiker kan slå ut tidligere på grunn av varmere vår, noe som gjør at bladlarver klekker tidligere. Men kjøttmeiser som spiser larvene og mater ungene med dem, kommer kanskje ikke like tidlig tilbake fra trekkområdene. Da klekker ungene etter at det var flest larver, og ungene får mindre mat.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor er fjellarter spesielt utsatt for klimaendringer?',
        solution: 'Fjellarter er tilpasset kjølige forhold og finnes ofte på toppen av fjell. Når klimaet blir varmere, må de flytte seg oppover for å finne passende temperatur. Men det er begrenset hvor høyt de kan flytte - til slutt er de på toppen og har ingen steder å gå. I tillegg blir arealet mindre jo høyere opp man kommer. Artene presses inn i stadig mindre områder, noe som øker risikoen for utryddelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Diskuter hvorfor de fleste arter ikke vil rekke å tilpasse seg klimaendringene gjennom evolusjon.',
        solution: 'Evolusjon krever mange generasjoner for å gi betydelig endring. Arter med lang generasjonstid (som elefanter, hvaler, trær) får svært få generasjoner før klimaet har endret seg dramatisk. Dessuten skjer klimaendringene 10-100 ganger raskere enn naturlige endringer i fortiden. For at evolusjon skal skje, må det også finnes genetisk variasjon for de egenskapene som trengs, noe som ikke alltid er tilfelle. Til slutt: selv om noen få arter kan tilpasse seg, vil hele økosystemet deres forandres, inkludert mat og leveområder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_7_6: TextbookChapter = {
  id: 'nat-vg1-7-6',
  courseId: 'nat-vg1',
  chapterNumber: '7.6',
  title: 'Bioteknologi - metoder og anvendelser',
  description: 'Utforsk moderne bioteknologiske metoder og deres bruksområder.',
  estimatedMinutes: 55,
  competenceGoals: ['gi eksempler på bruk av bioteknologi'],
  content: [
    {
      id: 'nat-vg1-7-6-intro',
      type: 'text',
      content: `## Hva er bioteknologi?

**Bioteknologi** er bruk av levende organismer, celler eller biologiske molekyler for å utvikle produkter eller prosesser.

**Gammel bioteknologi:**
- Brygge øl og vin (gjær)
- Bake brød (gjær)
- Lage ost og yoghurt (bakterier)

**Moderne bioteknologi:**
- Genteknologi
- Kloning
- Stamcelleforskning
- Syntetisk biologi

Moderne bioteknologi bygger på kunnskap om DNA og gener.`,
    },
    {
      id: 'nat-vg1-7-6-def-1',
      type: 'definition',
      title: 'Genteknologiske verktøy',
      content: `**Restriksjonsenzymer:**
"Molekylære sakser" som kutter DNA på bestemte steder

**DNA-ligase:**
"Molekylær lim" som setter sammen DNA-biter

**PCR (polymerasekjedereaksjon):**
Kopierer små mengder DNA til millioner av kopier

**Gensekvensering:**
Leser av basesekvensen i DNA

**Gelelektroforese:**
Separerer DNA-fragmenter etter størrelse

**Vektorer:**
Bærere (plasmider, virus) som overfører gener til celler`,
    },
    {
      id: 'nat-vg1-7-6-def-2',
      type: 'definition',
      title: 'CRISPR-Cas9',
      content: `**CRISPR-Cas9** er et revolusjonerende genredigeringsverktøy.

**Hvordan virker det:**
1. Guide-RNA leder Cas9-proteinet til riktig sted i DNA
2. Cas9 kutter begge DNA-trådene
3. Cellen reparerer kuttet
4. Under reparasjonen kan gener slås av, endres eller nye gener settes inn

**Fordeler:**
- Billig og enkelt sammenlignet med eldre teknikker
- Veldig presist
- Kan brukes i de fleste organismer

**Nobelpris 2020:** Jennifer Doudna og Emmanuelle Charpentier`,
    },
    {
      id: 'nat-vg1-7-6-def-3',
      type: 'definition',
      title: 'Anvendelser av bioteknologi',
      content: `**Medisin:**
- Insulinproduksjon i bakterier
- Genterapi (korrigere gendefekter)
- Vaksiner
- Kreftbehandling

**Landbruk:**
- GMO - genmodifiserte organismer
- Tørketålende planter
- Insektresistente planter
- Økt næringsinnhold

**Industri:**
- Enzymer i vaskemidler
- Biodrivstoff
- Nedbrytbar plast

**Miljø:**
- Oljespisende bakterier
- Biologisk rensing av forurenset jord`,
    },
    {
      id: 'nat-vg1-7-6-example-1',
      type: 'example',
      title: 'Eksempel: Insulinproduksjon',
      problem: 'Forklar hvordan insulin produseres ved hjelp av genteknologi.',
      solution: `**Bakgrunn:**
Mennesker med type 1-diabetes trenger insulin. Tidligere ble insulin hentet fra grise- og kukjertler, men dette var dyrt og kunne gi allergiske reaksjoner.

**Genteknologisk insulinproduksjon:**

1. **Isolere genet:** Menneskets insulingen identifiseres og kopieres.

2. **Lage vektor:** Insulingenet settes inn i et plasmid (ringformet DNA fra bakterie) ved hjelp av restriksjonsenzymer og DNA-ligase.

3. **Transformasjon:** Plasmidet overføres til E. coli-bakterier.

4. **Dyrking:** Bakteriene dyrkes i store tanker. Hver gang de deler seg, kopieres plasmidet med insulingenet.

5. **Høsting:** Bakteriene produserer humant insulin, som renses og pakkes.

**Resultat:** Ubegrenset tilgang på identisk humant insulin, billigere og tryggere enn dyreinsylin.`,
    },
    {
      id: 'nat-vg1-7-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar kort hva CRISPR-Cas9 er og hvordan det virker.',
        solution: 'CRISPR-Cas9 er et genredigeringsverktøy. Det består av et guide-RNA som leder Cas9-proteinet til et bestemt sted i DNA-et. Cas9 fungerer som en "molekylær saks" som kutter begge DNA-trådene. Når cellen reparerer kuttet, kan man enten slå av et gen, endre det, eller sette inn nye sekvenser. Det er mer presist, enklere og billigere enn tidligere genredigeringsmetoder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Gi tre eksempler på hvordan bioteknologi brukes i medisin.',
        solution: 'Eksempler: 1) Produksjon av insulin i bakterier for diabetesbehandling. 2) Genterapi for å behandle arvelige sykdommer som cystisk fibrose eller sigdcelleanemi ved å korrigere eller erstatte defekte gener. 3) Produksjon av vaksiner, inkludert mRNA-vaksiner mot COVID-19. Andre muligheter: monoklonale antistoffer til kreftbehandling, veksthormoner, blodlevringsfaktorer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hva GMO er og gi eksempler på genmodifiserte organismer.',
        solution: 'GMO (genmodifisert organisme) er en organisme der DNA har blitt endret ved hjelp av genteknologi. Eksempler: 1) Bt-mais som har fått et gen fra jordbakterien Bacillus thuringiensis som gjør planten giftig for skadeinsekter. 2) Gylden ris som er modifisert til å produsere beta-karoten (vitamin A-forstadie). 3) Herbicidtolerante soyabønner som tåler sprøytemiddel. 4) Glofish - akvariefisk med gen fra maneter som gjør dem fluorescerende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_7_7: TextbookChapter = {
  id: 'nat-vg1-7-7',
  courseId: 'nat-vg1',
  chapterNumber: '7.7',
  title: 'Etikk i bioteknologi',
  description: 'Drøft etiske spørsmål knyttet til bruk av bioteknologi.',
  estimatedMinutes: 50,
  competenceGoals: ['drøfte etiske spørsmål knyttet til bioteknologi'],
  content: [
    {
      id: 'nat-vg1-7-7-intro',
      type: 'text',
      content: `## Etiske utfordringer

Med store muligheter følger store spørsmål. Bioteknologi reiser viktige etiske problemstillinger.

**Sentrale spørsmål:**
- Hvor går grensen for hva vi bør gjøre?
- Hvem skal bestemme?
- Hvem får tilgang til teknologien?
- Hva er konsekvensene på lang sikt?
- Hvordan veie nytte mot risiko?

**Etiske prinsipper:**
- **Autonomi:** Rett til selv å bestemme
- **Ikke skade:** Unngå å påføre skade
- **Gjøre godt:** Handle til beste for andre
- **Rettferdighet:** Lik tilgang og fordeling`,
    },
    {
      id: 'nat-vg1-7-7-def-1',
      type: 'definition',
      title: 'Genmodifiserte organismer (GMO)',
      content: `**Argumenter FOR GMO:**
- Kan øke matproduksjonen
- Kan redusere bruk av sprøytemidler
- Kan gi mer næringsrik mat
- Kan utvikle medisinsk nyttige planter

**Argumenter MOT GMO:**
- Usikkerhet om langsiktige helseeffekter
- Kan true biologisk mangfold
- Kan gi avhengighet av store selskaper
- Kan krysse med ville arter
- Etisk: Er det rett å "leke Gud"?

**Regulering:**
- Streng i Europa (føre-var-prinsippet)
- Mindre streng i USA
- Norge har egne regler (genteknologiloven)`,
    },
    {
      id: 'nat-vg1-7-7-def-2',
      type: 'definition',
      title: 'Genterapi og genredigering hos mennesker',
      content: `**Genterapi:** Behandle sykdom ved å korrigere eller erstatte defekte gener.

**Typer:**
- **Somatisk genterapi:** Endrer gener i kroppsceller. Endringene arves ikke. (Tillatt i visse tilfeller)
- **Kimbanegenterapi:** Endrer gener i kjønnsceller eller befruktede egg. Endringene arves. (Forbudt i de fleste land)

**Etiske spørsmål:**
- Behandling av sykdom vs. "forbedring" av mennesker
- Hvem definerer hva som er sykdom?
- Designer-babyer?
- Tilgang: Bare for de rike?
- Samtykke: Kan fremtidige generasjoner samtykke?

**CRISPR-babyer (2018):** Kinesisk forsker He Jiankui redigerte gener i tvillinger. Verdensomspennende fordømmelse - brudd på etiske retningslinjer.`,
    },
    {
      id: 'nat-vg1-7-7-def-3',
      type: 'definition',
      title: 'Stamceller og kloning',
      content: `**Stamceller:** Celler som kan utvikle seg til ulike celletyper.

**Typer:**
- Embryonale stamceller (fra befruktede egg)
- Adulte stamceller (fra voksne individer)
- Induserte pluripotente stamceller (iPSC) - omprogrammerte voksne celler

**Etiske spørsmål ved embryonale stamceller:**
- Krever ødeleggelse av embryoer
- Når starter menneskelivet?
- Kan embryoer skapes for forskning?

**Kloning:**
- Reproduktiv kloning (lage genetisk identisk individ) - forbudt hos mennesker
- Terapeutisk kloning (lage stamceller) - kontroversielt`,
    },
    {
      id: 'nat-vg1-7-7-example-1',
      type: 'example',
      title: 'Eksempel: Etisk drøfting av gylden ris',
      problem: 'Diskuter etiske aspekter ved gylden ris - en genmodifisert ristype som produserer vitamin A-forstadie.',
      solution: `**Bakgrunn:**
Vitamin A-mangel rammer millioner i utviklingsland. Kan føre til blindhet og død, spesielt hos barn. Gylden ris er utviklet for å motvirke dette.

**Argumenter FOR:**
1. **Gjøre godt:** Kan redde liv og forebygge blindhet
2. **Rettferdighet:** Gratis lisenser til fattige bønder
3. **Praktisk:** Integrert i eksisterende kosthold
4. **Trygg:** Grundig testet

**Argumenter MOT:**
1. **Løser ikke grunnproblemet:** Fattigdom og ensidig kosthold
2. **Avhengighet:** Skaper avhengighet av utenlandsk teknologi
3. **Utilsiktede konsekvenser:** Ukjente langsiktige effekter
4. **Kulturelle verdier:** Tradisjonelle sorter fortrenges

**Vurdering:**
Gylden ris kan være ett verktøy blant mange. Viktig å også arbeide med fattigdomsbekjempelse og kostvariasjon. Teknologien bør ikke erstatte, men supplere andre tiltak.`,
    },
    {
      id: 'nat-vg1-7-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom somatisk genterapi og kimbanegenterapi, og hvorfor de behandles ulikt etisk og juridisk.',
        solution: 'Somatisk genterapi endrer gener i vanlige kroppsceller (somatiske celler). Endringene påvirker bare individet selv og arves ikke. Kimbanegenterapi endrer gener i kjønnsceller eller befruktede egg, slik at endringene arves til fremtidige generasjoner. Somatisk genterapi behandles mer som tradisjonell medisinsk behandling, mens kimbaneterapi reiser større etiske bekymringer: fremtidige generasjoner kan ikke samtykke, langsiktige konsekvenser er ukjente, og det åpner for genetisk "forbedring" av mennesker. Derfor er kimbaneterapi forbudt i de fleste land.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Gi to argumenter for og to argumenter mot bruk av genmodifiserte avlinger.',
        solution: 'FOR: 1) Kan øke matproduksjonen og bidra til matsikkerhet ved å gi høyere avlinger eller tørketålende sorter. 2) Kan redusere bruken av sprøytemidler når planter har innebygd resistens mot skadedyr. MOT: 1) Ukjente langsiktige helseeffekter og økologiske konsekvenser - genene kan spre seg til ville slektninger. 2) Skaper avhengighet av store selskaper som eier patentene, og bønder må kjøpe nye frø hvert år.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Diskuter hvor grensen bør gå for genredigering av mennesker. Bør det være lov å bruke CRISPR til å kurere arvelige sykdommer? Hva med å forbedre egenskaper som intelligens eller atletiske evner?',
        solution: 'Mange mener det er en viktig forskjell mellom å behandle sykdom og å "forbedre" mennesker. Å kurere alvorlige arvelige sykdommer som Huntingtons eller sigdcelleanemi ses ofte som akseptabelt fordi det lindrer lidelse. Å forbedre egenskaper som intelligens eller atletisk evne er mer kontroversielt: Det kan skape ulikhet mellom de som har råd og ikke, det utfordrer ideen om at alle er like mye verdt, og det er usikkert hva konsekvensene blir. I tillegg: Hvem definerer hva som er en "forbedring"? Mange vil si at grensen bør gå ved behandling av klart definerte sykdommer, ikke kosmetiske eller ytelsesfremmende endringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Export av alle kapitler i DEL 4
// ============================================================================

export const NAT_VG1_CHAPTERS_DEL4: TextbookChapter[] = [
  // Seksjon 7: Arv, evolusjon og bioteknologi
  CHAPTER_NAT_VG1_7_1,
  CHAPTER_NAT_VG1_7_2,
  CHAPTER_NAT_VG1_7_3,
  CHAPTER_NAT_VG1_7_4,
  CHAPTER_NAT_VG1_7_5,
  CHAPTER_NAT_VG1_7_6,
  CHAPTER_NAT_VG1_7_7,
];
