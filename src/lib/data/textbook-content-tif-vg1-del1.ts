/* eslint-disable */
// @ts-nocheck
/**
 * Teknologi- og industrifag VG1 - Del 1: Materiallære
 *
 * Kapittel 1.1-1.7: Materiallære
 * Dekker LK20 kompetansemål for materialkunnskap
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Metaller og legeringer
// ============================================================================

export const CHAPTER_TIF_VG1_1_1: TextbookChapter = {
  id: 'tif-vg1-1-1',
  courseId: 'tif-vg1',
  chapterNumber: '1.1',
  title: 'Metaller og legeringer',
  description: 'Innføring i de vanligste metallene og legeringene som brukes i industrien.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive de spesifikke egenskapene ved ulike materialer og gjøre rede for hvordan de kan påvirke det ytre miljøet',
  ],
  sections: [
    {
      title: 'Introduksjon til metaller',
      content: `## Introduksjon til metaller

Metaller utgjør grunnlaget for moderne industriproduksjon. Fra enkle verktøy til avanserte maskiner - metaller er uunnværlige i teknologi- og industrifag.

**Hvorfor er metaller så viktige?**
- God styrke i forhold til vekt
- Kan formes og bearbeides på mange måter
- Leder varme og elektrisitet
- Kan resirkuleres uten tap av kvalitet
- Holdbare og langvarige

**Metallers atomstruktur:**
Metaller kjennetegnes av metallisk binding der elektroner beveger seg fritt mellom atomene. Dette gir metallene deres karakteristiske egenskaper som god ledningsevne og formbarhet.

**Krystallinsk struktur:**
Metaller har en ordnet, krystallinsk struktur der atomene er arrangert i et fast mønster. De vanligste krystallstrukturene er:
- Kubisk romsentrert (BCC) - jern ved romtemperatur
- Kubisk flatesentrert (FCC) - aluminium, kobber
- Heksagonal tetteste pakning (HCP) - sink, titan`,
    },
    {
      title: 'Jern og stål',
      content: `## Jern og stål

Jern er det mest brukte metallet i verden. Rent jern har begrenset anvendelse på grunn av lav hardhet, men ved tilsetting av karbon og andre legeringselementer får vi stål med utmerkede egenskaper.

**Ståltyper etter karboninnhold:**

**Lavkarbonstål (< 0,25% C)**
- Mykt og lett å bearbeide
- God sveisbarhet
- Brukes til konstruksjonsstål, plater, rør
- Eksempler: S235, S275, S355

**Middelkarbonstål (0,25-0,55% C)**
- Hardere og sterkere
- Kan herdes ved varmebehandling
- Brukes til aksler, tannhjul, bolter
- Eksempler: C45, C60

**Høykarbonstål (> 0,55% C)**
- Meget hardt etter herding
- Brukes til verktøy, kniver, fjærer
- Vanskelig å sveise
- Eksempler: C80, C100

**Eksempel - Valg av ståltype:**
En maskinfabrikk skal produsere en aksel som må tåle høye belastninger og slitasje. De velger C45 (0,45% karbon) fordi:
1. Kan herdes til ønsket hardhet
2. Har god seighet
3. Kan maskineres i bløt tilstand før herding`,
    },
    {
      title: 'Rustfritt stål',
      content: `## Rustfritt stål

Rustfritt stål er stål med minimum 10,5% krom. Kromet reagerer med oksygen og danner et tynt, usynlig beskyttelseslag på overflaten.

**Hovedtyper rustfritt stål:**

**Austenitisk rustfritt stål**
- Inneholder 18% krom og 8% nikkel (18/8)
- Ikke magnetisk
- Meget god korrosjonsmotstand
- Brukes i matindustri, kjemisk industri
- Eksempel: AISI 304 (18/8), AISI 316 (med molybden)

**Ferritisk rustfritt stål**
- Inneholder 12-18% krom, lite karbon
- Magnetisk
- Billigere enn austenitisk
- Brukes til bilavgassanlegg, kjøkkenutstyr
- Eksempel: AISI 430

**Martensitisk rustfritt stål**
- Inneholder 12-18% krom, høyere karbon
- Kan herdes
- Brukes til kniver, kirurgiske instrumenter
- Eksempel: AISI 420, AISI 440

**Eksempel - Hygienekrav:**
Et meieri trenger nye tanker for melkelagring. De velger AISI 316 fordi:
- Tåler melkesyre uten korrosjon
- Lett å rengjøre (glatt overflate)
- Godkjent for næringsmiddelkontakt
- Molybden gir ekstra beskyttelse`,
    },
    {
      title: 'Aluminium og legeringer',
      content: `## Aluminium og legeringer

Aluminium er verdens nest mest brukte metall etter stål. Det utvinnes fra bauksittmalm gjennom en energikrevende elektrolyseprosess.

**Egenskaper:**
- Tetthet: 2,7 g/cm³ (⅓ av stål)
- Smeltepunkt: 660°C
- God korrosjonsmotstand (oksidlag)
- Utmerket varme- og elektrisk ledningsevne
- Ikke magnetisk

**Vanlige aluminiumlegeringer:**

**1000-serien (rent aluminium)**
- 99% rent aluminium
- Meget god ledningsevne
- Brukes til elektriske ledere, folier

**2000-serien (Al-Cu)**
- Kobber som hovedlegeringselement
- Høy styrke
- Brukes i flyindustrien
- Eksempel: 2024

**5000-serien (Al-Mg)**
- Magnesium som hovedlegeringselement
- God korrosjonsmotstand
- Brukes til båter, tanker
- Eksempel: 5083

**6000-serien (Al-Mg-Si)**
- Magnesium og silisium
- God formbarhet, kan elokseres
- Brukes til profiler, vinduer
- Eksempel: 6060, 6082

**Eksempel - Lettmetalldel:**
En båtprodusent velger 5083-legering til skipsskrog fordi:
- Lett vekt gir lavere drivstofforbruk
- Tåler saltvannskorrosjon
- Kan sveises med MIG
- God styrke i sjøvann`,
    },
    {
      title: 'Kobber og kobberlegeringer',
      content: `## Kobber og kobberlegeringer

Kobber har vært brukt i over 10 000 år og er fortsatt et viktig industrimetall på grunn av sin unike kombinasjon av egenskaper.

**Egenskaper:**
- Tetthet: 8,96 g/cm³
- Smeltepunkt: 1085°C
- Best elektrisk ledningsevne av alle bruksmetaller
- Utmerket varmeledningsevne
- Antibakterielle egenskaper
- Karakteristisk rød-orange farge

**Rent kobber:**
- Cu-OF (oksygenfritt): For elektronikk
- Cu-ETP (elektrolytisk): For elektriske ledninger
- Cu-DHP (deoksidert): For rør og varmevekslere

**Messing (kobber + sink)**
- Inneholder 5-45% sink
- Gulaktig farge
- Lett å bearbeide (maskinering)
- God korrosjonsmotstand
- Brukes til ventiler, beslag, instrumenter
- Eksempel: Ms58, Ms63

**Bronse (kobber + tinn)**
- Inneholder 5-12% tinn
- Hardere enn messing
- Utmerket slitestyrke
- Brukes til lagre, tannhjul, propeller
- Eksempel: CuSn8, CuSn12

**Eksempel - Elektrisk installasjon:**
En elektriker velger Cu-ETP kobber til kabling fordi:
- Lavest motstand gir minst energitap
- Fleksibelt, lett å trekke i rør
- Kan loddes og klemmes
- Lang levetid uten vedlikehold`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-1-1-ex-1',
      type: 'multiple-choice',
      task: 'Hva er hovedforskjellen mellom lavkarbonstål og høykarbonstål?',
      options: [
        { id: 'a', text: 'Lavkarbonstål er mykt og sveisbart, høykarbonstål er hardt og kan herdes', isCorrect: true },
        { id: 'b', text: 'Høykarbonstål er lettere enn lavkarbonstål', isCorrect: false },
        { id: 'c', text: 'Lavkarbonstål brukes til verktøy, høykarbonstål til konstruksjoner', isCorrect: false },
        { id: 'd', text: 'Det er ingen vesentlig forskjell', isCorrect: false },
      ],
      solution: 'Lavkarbonstål (< 0,25% C) er mykt, duktilt og lett å sveise, brukes til konstruksjoner. Høykarbonstål (> 0,55% C) kan herdes til høy hardhet og brukes til verktøy og slitedeler.',
    },
    {
      id: 'tif-vg1-1-1-ex-2',
      type: 'classic',
      task: 'Forklar hvorfor rustfritt stål ikke ruster, og nevn to bruksområder der rustfritt stål er spesielt viktig.',
      solution: 'Rustfritt stål inneholder minimum 10,5% krom som danner et tynt, usynlig oksidlag (passivt lag) på overflaten. Dette laget beskytter mot korrosjon og reparerer seg selv hvis det skades. Viktige bruksområder: 1) Næringsmiddelindustri (hygienekrav, tåler rengjøring), 2) Medisinsk utstyr (steriliserbart, ikke-reaktivt med kroppen).',
    },
    {
      id: 'tif-vg1-1-1-ex-3',
      type: 'classic',
      task: 'En konstruktør skal velge materiale til en ramme som skal være lett, sterk og tåle korrosjon i fuktig miljø. Hvilket metall vil du anbefale, og hvorfor?',
      solution: 'Aluminium (f.eks. 6082-legering) anbefales fordi: 1) Lett vekt (⅓ av stål) gir en lettere konstruksjon, 2) Høy styrke i forhold til vekt, 3) Naturlig oksidlag gir god korrosjonsbeskyttelse i fuktig miljø, 4) Kan anodiseres for ekstra beskyttelse. Alternativt kan rustfritt stål velges hvis styrke er viktigere enn vekt.',
    },
    {
      id: 'tif-vg1-1-1-ex-4',
      type: 'multiple-choice',
      task: 'Hvilken egenskap gjør kobber spesielt egnet til elektriske ledninger?',
      options: [
        { id: 'a', text: 'Lav vekt', isCorrect: false },
        { id: 'b', text: 'Høy elektrisk ledningsevne', isCorrect: true },
        { id: 'c', text: 'Høy hardhet', isCorrect: false },
        { id: 'd', text: 'Magnetiske egenskaper', isCorrect: false },
      ],
      solution: 'Kobber har den nest høyeste elektriske ledningsevnen av alle grunnstoffer (etter sølv), noe som gir lavt energitap i elektriske kretser.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-1-1-ex-5',
      type: 'classic',
      task: 'Du jobber på et verksted og får i oppgave å velge materialer til tre ulike produkter: a) En kjøkkenvask, b) Elektriske kabler, c) En aksel til en transportør. Begrunn materialvalget for hvert produkt.',
      solution: 'a) Kjøkkenvask: Rustfritt stål AISI 304 velges fordi det tåler mat og vann, er lett å rengjøre, hygienisk og har lang levetid. b) Elektriske kabler: Kobber Cu-ETP velges på grunn av best elektrisk ledningsevne, fleksibilitet og mulighet for terminering. c) Aksel til transportør: Middelkarbonstål C45 velges fordi det kan herdes for slitestyrke, har god styrke og seighet, og kan maskineres til nøyaktige dimensjoner.',
    },
    {
      id: 'tif-vg1-1-1-ex-6',
      type: 'classic',
      task: 'Sammenlign aluminium og stål som konstruksjonsmaterialer. Lag en tabell med fordeler og ulemper for hvert materiale, og gi eksempler på når hvert materiale er best egnet.',
      solution: 'STÅL - Fordeler: Høy styrke, lav pris, lett å sveise, kan herdes. Ulemper: Tungt, ruster uten beskyttelse. Best egnet: Tunge konstruksjoner, maskinfundamenter, verktøy. ALUMINIUM - Fordeler: Lett (⅓ av stål), korrosjonsbestandig, god ledningsevne. Ulemper: Dyrere, lavere styrke, vanskeligere å sveise. Best egnet: Transport (fly, biler), marine miljø, elektriske komponenter.',
    },
  ],
  keyTerms: [
    { term: 'Legering', definition: 'Blanding av to eller flere metaller, eller metall med andre grunnstoffer.' },
    { term: 'Karbonstål', definition: 'Stål der karbon er hovedlegeringselementet, 0,02-2% karbon.' },
    { term: 'Rustfritt stål', definition: 'Stål med minimum 10,5% krom som gir korrosjonsmotstand.' },
    { term: 'Austenitisk', definition: 'Type rustfritt stål med 18% krom og 8% nikkel, ikke magnetisk.' },
    { term: 'Passivt lag', definition: 'Tynt oksidlag som beskytter rustfritt stål mot korrosjon.' },
    { term: 'Elektrisk ledningsevne', definition: 'Materialets evne til å lede elektrisk strøm.' },
  ],
};

// ============================================================================
// Kapittel 1.2: Plast og komposittmaterialer
// ============================================================================

export const CHAPTER_TIF_VG1_1_2: TextbookChapter = {
  id: 'tif-vg1-1-2',
  courseId: 'tif-vg1',
  chapterNumber: '1.2',
  title: 'Plast og komposittmaterialer',
  description: 'Oversikt over plasttyper og komposittmaterialer brukt i moderne industri.',
  estimatedMinutes: 40,
  competenceGoals: [
    'beskrive de spesifikke egenskapene ved ulike materialer og gjøre rede for hvordan de kan påvirke det ytre miljøet',
  ],
  sections: [
    {
      title: 'Introduksjon til plast',
      content: `## Introduksjon til plast

Plast er syntetiske materialer laget av polymerer - lange kjeder av molekyler. Navnet kommer fra gresk "plastikos" som betyr formbar.

**Hvorfor plast?**
- Lett vekt (0,9-2,3 g/cm³)
- Korrosjonsbestandig
- Elektrisk isolerende
- Lett å forme i masseproduksjon
- Kan ha mange ulike egenskaper

**Polymerkjemi:**
Plastmaterialer består av lange molekylkjeder (polymerer) bygget opp av mindre enheter (monomerer). Polymerisering er prosessen der monomerer kobles sammen.

**Eksempel:**
Polyetylen (PE) lages av etylen-monomerer:
n × CH₂=CH₂ → -(CH₂-CH₂)n-

**Miljøaspekter:**
Plast har betydelige miljøutfordringer:
- Lages hovedsakelig av fossile råstoffer
- Langsom nedbrytning i naturen
- Mikroplast i økosystemer
- Økende fokus på resirkulering og bioplast`,
    },
    {
      title: 'Termoplast',
      content: `## Termoplast

Termoplast kan smeltes og formes om gjentatte ganger. Molekylkjedene er ikke kjemisk bundet til hverandre.

**Vanlige termoplaster:**

**Polyetylen (PE)**
- Mest brukte plast i verden
- LDPE: Lav tetthet, fleksibel (poser, folier)
- HDPE: Høy tetthet, stivere (rør, beholdere)
- Motstandsdyktig mot kjemikalier
- Flyter på vann

**Polypropylen (PP)**
- Stivere enn PE
- Tåler høyere temperatur (opptil 100°C)
- Brukes til møbler, bilindustri, emballasje
- God slagfasthet

**Polyvinylklorid (PVC)**
- Kan være stiv eller myk (med mykner)
- Stiv PVC: Rør, vinduer, profiler
- Myk PVC: Kabler, gulvbelegg
- Brannhemmende (inneholder klor)

**Polykarbonat (PC)**
- Transparent og slagsikkert
- Brukes til beskyttelsesbriller, CD-er
- Tåler temperatur -40 til +120°C

**Eksempel - Materialvalg for rør:**
Et rørsystem for avløp velger PVC fordi:
- Korrosjonsbestandig
- Lett å montere (liming)
- Glatt innside (god flyt)
- Lavere vekt enn metall
- Rimelig pris`,
    },
    {
      title: 'Herdeoplast',
      content: `## Herdeoplast

Herdeoplast herdes permanent gjennom en kjemisk reaksjon. Molekylkjedene bindes sammen i et tredimensjonalt nettverk og kan ikke smeltes om.

**Vanlige herdeoplaster:**

**Epoksy**
- To-komponent system (harpiks + herder)
- Meget sterk adhesjon
- God kjemikaliebestandighet
- Brukes til lim, belegg, kompositter
- Viktig i elektronikkindustrien

**Polyester (umettet)**
- Billigere enn epoksy
- Brukes i glassfiberarmert plast
- Båter, tanker, karosserideler
- Herdes med katalysator

**Polyuretan (PU)**
- Kan være myk eller stiv
- Skum: Isolasjon, møbler
- Elastomer: Hjul, pakninger
- Belegg: Maling, lakk

**Fenolharpiks (bakelit)**
- Første syntetiske plast (1907)
- God varmebestandighet
- Elektrisk isolerende
- Brukes til elektriske brytere

**Eksempel - Kompositt båtbygging:**
En båtbygger velger polyester/glassfiberkompositt fordi:
- Lett å forme til skrogform
- Korrosjonsbestandig i sjøvann
- God styrke-til-vekt-forhold
- Kan repareres på stedet`,
    },
    {
      title: 'Komposittmaterialer',
      content: `## Komposittmaterialer

Kompositter er materialer sammensatt av to eller flere materialer med ulike egenskaper, der kombinasjonen gir bedre egenskaper enn materialene hver for seg.

**Oppbygning:**
- Matrise: Binder sammen og overfører last
- Forsterkning: Gir styrke og stivhet

**Glassfiberarmert plast (GRP/GFK)**
- Glassfibermatte i polyester- eller epoksymatrise
- God styrke til lav vekt
- Korrosjonsbestandig
- Brukes til båter, vindmøllevinger, tanker
- Relativt rimelig

**Karbonfiberarmert plast (CFRP)**
- Karbonfiber i epoksymatrise
- Ekstremt høy styrke og stivhet
- Meget lett (1,5-1,6 g/cm³)
- Brukes i fly, Formel 1, sykler
- Dyrt (5-10× glassfiberkompositt)

**Aramidfiber (Kevlar)**
- Høy strekkstyrke
- God slagmotstand
- Brukes til skuddsikre vester, hjelmer
- Kjemisk bestandig

**Sandwich-konstruksjoner**
- To stive hud-lag med lett kjerne
- Kjernen kan være skum eller honeycomb
- Meget stiv ved lav vekt
- Brukes i fly, båter, sportsutstyr

**Eksempel - Racersykkelramme:**
En karbonfiberramme velges fordi:
- Vekt under 1 kg for rammen
- Stivere enn stål eller aluminium
- Kan optimalisere fiberretning for belastning
- Absorberer vibrasjoner bedre`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-1-2-ex-1',
      type: 'multiple-choice',
      task: 'Hva er hovedforskjellen mellom termoplast og herdeoplast?',
      options: [
        { id: 'a', text: 'Termoplast kan smeltes om, herdeoplast herdes permanent', isCorrect: true },
        { id: 'b', text: 'Herdeoplast er alltid sterkere enn termoplast', isCorrect: false },
        { id: 'c', text: 'Termoplast lages av naturlige råstoffer', isCorrect: false },
        { id: 'd', text: 'Herdeoplast kan resirkuleres lettere', isCorrect: false },
      ],
      solution: 'Termoplast har lineære polymerkjeder som kan smeltes og formes om gjentatte ganger. Herdeoplast har kryssbundne polymerkjeder som dannes under herding og kan ikke smeltes om.',
    },
    {
      id: 'tif-vg1-1-2-ex-2',
      type: 'classic',
      task: 'Forklar hva en kompositt er, og gi to eksempler med bruksområder.',
      solution: 'En kompositt er et materiale sammensatt av to eller flere materialer med ulike egenskaper, der kombinasjonen gir bedre egenskaper enn materialene hver for seg. Eksempler: 1) Glassfiberarmert plast (GRP) - glassfibermatte i polyesterharpiks, brukes til båter og tanker. 2) Karbonfiberarmert plast (CFRP) - karbonfiber i epoksyharpiks, brukes i fly og sportsutstyr.',
    },
    {
      id: 'tif-vg1-1-2-ex-3',
      type: 'classic',
      task: 'En bedrift skal velge materiale til isolasjonskapper for elektrisk utstyr. Diskuter fordeler og ulemper med å bruke plast fremfor metall.',
      solution: 'Fordeler med plast: Elektrisk isolerende (sikkerhet), lett vekt (enklere håndtering), korrosjonsbestandig (lang levetid), billigere ved masseproduksjon, kan formes i komplekse former. Ulemper: Lavere varmebestandighet, kan degraderes av UV-lys, miljøutfordringer ved avhending, lavere mekanisk styrke. Plast er klart foretrukket for elektrisk isolasjon.',
    },
    {
      id: 'tif-vg1-1-2-ex-4',
      type: 'multiple-choice',
      task: 'Hvilket plastmateriale brukes typisk til avløpsrør?',
      options: [
        { id: 'a', text: 'PVC (polyvinylklorid)', isCorrect: true },
        { id: 'b', text: 'Polykarbonat', isCorrect: false },
        { id: 'c', text: 'Epoksy', isCorrect: false },
        { id: 'd', text: 'Kevlar', isCorrect: false },
      ],
      solution: 'PVC er standard materiale for avløpsrør på grunn av korrosjonsbestandighet, glatt innside, lett montering (liming), lav vekt og rimelig pris.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-1-2-ex-5',
      type: 'classic',
      task: 'Diskuter miljøutfordringene ved bruk av plast og foreslå tiltak for å redusere miljøbelastningen i industriproduksjon.',
      solution: 'Miljøutfordringer: 1) Fossile råstoffer, 2) Langsom nedbrytning (hundrevis av år), 3) Mikroplast i naturen, 4) Energikrevende produksjon. Tiltak: 1) Bruk resirkulert plast der mulig, 2) Design for resirkulering (ett plasttype per produkt), 3) Erstatt med bioplast der egnet, 4) Reduser materialbruk (tynnere vegger), 5) Unngå unødvendig plast, 6) Gode innsamlingsordninger.',
    },
    {
      id: 'tif-vg1-1-2-ex-6',
      type: 'classic',
      task: 'Sammenlign glassfiberkompositt og karbonfiberkompositt. Når vil du velge hvert materiale, og hvorfor?',
      solution: 'Glassfiberkompositt: Rimelig pris, god korrosjonsmotstand, enkel reparasjon. Velges for: Båtskrog, tanker, karosserideler der kostnader er viktig. Karbonfiberkompositt: Ekstremt høy styrke/stivhet, meget lett, dyr. Velges for: Fly, racing, høyytelsessportsutstyr der vekt og ytelse er kritisk og kostnader er underordnet. Regel: Velg karbonfiber kun når vektbesparelsen gir målbar fordel som rettferdiggjør den høye prisen.',
    },
  ],
  keyTerms: [
    { term: 'Polymer', definition: 'Lang molekylkjede bygget opp av gjentatte enheter (monomerer).' },
    { term: 'Termoplast', definition: 'Plast som kan smeltes og formes om gjentatte ganger.' },
    { term: 'Herdeoplast', definition: 'Plast som herdes permanent og ikke kan smeltes om.' },
    { term: 'Kompositt', definition: 'Materiale sammensatt av to eller flere materialer med ulike egenskaper.' },
    { term: 'Matrise', definition: 'Materialet som binder sammen forsterkningen i en kompositt.' },
    { term: 'GRP/GFK', definition: 'Glassfiberarmert plast - glassfibermatte i plastmatrise.' },
  ],
};

// ============================================================================
// Kapittel 1.3: Mekaniske egenskaper
// ============================================================================

export const CHAPTER_TIF_VG1_1_3: TextbookChapter = {
  id: 'tif-vg1-1-3',
  courseId: 'tif-vg1',
  chapterNumber: '1.3',
  title: 'Mekaniske egenskaper',
  description: 'Forståelse av materialers mekaniske egenskaper som strekkfasthet, hardhet og seighet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare og anvende egnede håndverktøy, måleverktøy og maskiner for bearbeiding av materialer innenfor produksjon og tolke måleresultater i henhold til arbeidstegninger',
  ],
  sections: [
    {
      title: 'Spenning og tøyning',
      content: `## Spenning og tøyning

For å forstå hvordan materialer oppfører seg under belastning, må vi kjenne begrepene spenning og tøyning.

**Spenning (σ)**
Spenning er kraft per areal, målt i MPa (megapascal) eller N/mm².

σ = F / A

Der:
- σ = spenning (MPa)
- F = kraft (N)
- A = tverrsnittsareal (mm²)

**Tøyning (ε)**
Tøyning er relativ forlengelse, angitt som desimaltall eller prosent.

ε = ΔL / L₀

Der:
- ε = tøyning
- ΔL = forlengelse (mm)
- L₀ = opprinnelig lengde (mm)

**Eksempel - Beregning av spenning:**
En stålstang med tverrsnittsareal 100 mm² belastes med 50 000 N.

σ = F / A = 50 000 N / 100 mm² = 500 MPa

Dette er innenfor strekkfastheten for vanlig stål (400-800 MPa).`,
    },
    {
      title: 'Strekkfasthet og flytegrense',
      content: `## Strekkfasthet og flytegrense

En strekkprøve gir informasjon om materialets mekaniske egenskaper.

**Spennings-tøyningsdiagram:**

**Elastisk område:**
Materialet går tilbake til opprinnelig form når lasten fjernes. Sammenheng mellom spenning og tøyning er lineær (Hookes lov).

**Flytegrense (Re eller Rp0,2)**
Spenningen der materialet begynner å deformeres permanent. For materialer uten tydelig flytegrense brukes Rp0,2 (0,2% plastisk tøyning).

**Plastisk område:**
Materialet deformeres permanent. Spenningen øker fortsatt, men mindre enn i elastisk område.

**Strekkfasthet (Rm)**
Maksimal spenning materialet tåler. Ved denne spenningen begynner innsnevring (necking).

**Brudd:**
Materialet bryter. Bruddspenningen er lavere enn strekkfastheten.

**Typiske verdier:**

| Material | Flytegrense (MPa) | Strekkfasthet (MPa) |
|----------|-------------------|---------------------|
| Lavkarbonstål | 250 | 400 |
| Høykarbonstål | 400 | 800 |
| Aluminium 6082 | 250 | 300 |
| Kobber | 70 | 220 |

**Eksempel - Dimensjonering:**
En bolt skal tåle 10 000 N uten permanent deformasjon. Med stål Re = 250 MPa og sikkerhetsfaktor 2:

Tillatt spenning = 250 / 2 = 125 MPa
A = F / σ = 10 000 / 125 = 80 mm²
Diameter = √(4A/π) = 10,1 mm

Vi velger M12 bolt.`,
    },
    {
      title: 'Hardhet og hardhetsmetoder',
      content: `## Hardhet og hardhetsmetoder

Hardhet er materialets motstand mot lokal plastisk deformasjon fra et hardere legeme.

**Brinell-metoden (HB)**
- En hardmetallkule presses inn med konstant kraft
- Inntrykkets diameter måles
- Brukes for myke til middels harde materialer
- Stort inntrykk, god for grove materialer

**Rockwell-metoden (HR)**
- En diamantkjegle eller kule presses inn
- Inntrykkets dybde måles direkte
- Rask metode, mye brukt i industrien
- Ulike skalaer: HRC (hard), HRB (myk)

**Vickers-metoden (HV)**
- Diamantpyramide med 136° vinkel
- Diagonalen på inntrykket måles
- Kan brukes for alle materialer
- Veldig nøyaktig, brukes ofte i laboratorier

**Typiske hardheter:**

| Material | Hardhet (HV) |
|----------|--------------|
| Bløtstål | 120-180 |
| Herdet verktøystål | 550-700 |
| Aluminium (myk) | 20-40 |
| Rustfritt stål | 170-230 |
| Hardmetall | 1500-2000 |

**Eksempel - Kvalitetskontroll:**
En verktøyprodusent spesifiserer hardhet 58-62 HRC for en verktøystålkomponent. Tre prøver gir:
- Prøve 1: 59 HRC (OK)
- Prøve 2: 61 HRC (OK)
- Prøve 3: 56 HRC (Underkjent - for myk)

Prøve 3 må herdes på nytt.`,
    },
    {
      title: 'Seighet og sprøhet',
      content: `## Seighet og sprøhet

**Seighet**
Seighet er materialets evne til å absorbere energi før brudd. Seige materialer gir varsel før de bryter (plastisk deformasjon).

**Slagseighet**
Måles med Charpy- eller Izod-prøve. En pendel slår mot en innskåret prøve, og absorbert energi måles.

**Faktorer som påvirker seighet:**
- Temperatur: Seigheten synker ved lav temperatur
- Materialkvalitet: Urenheter reduserer seighet
- Varmebehandling: Feil herding kan gi sprøhet
- Korning: Finkornet materiale er seigere

**Sprøhet**
Sprøe materialer bryter plutselig uten varsel. De absorberer lite energi før brudd.

**Eksempler på sprøe materialer:**
- Glass
- Keramikk
- Støpejern
- Herdet stål (overdreven herding)

**Duktilitet**
Duktilitet er materialets evne til å tøyes uten å bryte. Duktile materialer kan formes ved kaldbearbeiding.

**Mål på duktilitet:**
- Bruddelongering (%): Hvor mye materialet strekkes før brudd
- Arealkontaksjon (%): Innsnevring ved bruddet

**Eksempel - Materialvalg for sikkerhet:**
Til et fallsikringssystem velges seigt stål fordi:
- Gir varsel før brudd (synlig bøyning)
- Absorberer energi ved fall
- Tåler slag og støt
- Kan inspiseres for skader`,
    },
    {
      title: 'Elastisitet og elastisitetsmodul',
      content: `## Elastisitet og elastisitetsmodul

**Elastisitet**
Evnen til å gå tilbake til opprinnelig form etter belastning. I det elastiske området gjelder Hookes lov:

σ = E × ε

**Elastisitetsmodul (E-modul)**
Forholdet mellom spenning og tøyning i elastisk område. Måles i GPa.

E = σ / ε

**Typiske E-moduler:**

| Material | E-modul (GPa) |
|----------|---------------|
| Stål | 210 |
| Rustfritt stål | 200 |
| Aluminium | 70 |
| Kobber | 120 |
| Glass | 70 |
| CFRP | 150-300 |

**Betydning i praksis:**
- Høy E-modul = stivt materiale
- Lav E-modul = mykt/fleksibelt materiale
- Viktig for nedbøyningsberegninger

**Eksempel - Nedbøyning av bjelke:**
En bjelke dimensjoneres for maksimal nedbøyning. Aluminium (E = 70 GPa) vil bøye seg tre ganger så mye som stål (E = 210 GPa) ved samme geometri og last.

For å oppnå samme stivhet med aluminium må tverrsnittet økes, noe som delvis oppveier vektfordelen.`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-1-3-ex-1',
      type: 'classic',
      task: 'En stålstang med diameter 10 mm belastes med 25 000 N. Beregn spenningen og avgjør om stangen tåler belastningen uten permanent deformasjon (Re = 350 MPa).',
      solution: 'Areal: A = π × d²/4 = π × 10²/4 = 78,5 mm². Spenning: σ = F/A = 25000/78,5 = 318 MPa. Konklusjon: 318 MPa < 350 MPa (flytegrense), så stangen tåler belastningen uten permanent deformasjon.',
    },
    {
      id: 'tif-vg1-1-3-ex-2',
      type: 'multiple-choice',
      task: 'Hva viser flytegrensen (Re) for et materiale?',
      options: [
        { id: 'a', text: 'Spenningen der materialet begynner å deformeres permanent', isCorrect: true },
        { id: 'b', text: 'Maksimal spenning før brudd', isCorrect: false },
        { id: 'c', text: 'Materialets hardhet', isCorrect: false },
        { id: 'd', text: 'Materialets seighet', isCorrect: false },
      ],
      solution: 'Flytegrensen er spenningen der materialet begynner å deformeres plastisk (permanent). Under flytegrensen vil materialet gå tilbake til opprinnelig form.',
    },
    {
      id: 'tif-vg1-1-3-ex-3',
      type: 'classic',
      task: 'Forklar forskjellen mellom et seigt og et sprøtt materiale. Gi et eksempel på hvert og beskriv når hvert er egnet.',
      solution: 'Seigt materiale: Absorberer energi, deformeres før brudd, gir varsel. Eksempel: Konstruksjonsstål - egnet til bærende konstruksjoner fordi skader oppdages før brudd. Sprøtt materiale: Bryter plutselig uten varsel, liten energiabsorpsjon. Eksempel: Støpejern - egnet til maskinfundamenter der god vibrasjonsdempning er viktigere enn slag motstand.',
    },
    {
      id: 'tif-vg1-1-3-ex-4',
      type: 'multiple-choice',
      task: 'Hvilken hardhetsmåler gir raskest resultat i industriell kvalitetskontroll?',
      options: [
        { id: 'a', text: 'Rockwell', isCorrect: true },
        { id: 'b', text: 'Brinell', isCorrect: false },
        { id: 'c', text: 'Vickers', isCorrect: false },
        { id: 'd', text: 'Mohs', isCorrect: false },
      ],
      solution: 'Rockwell-metoden gir direkte avlesning av hardheten uten mikroskopering, noe som gjør den rask og egnet for produksjonskontroll.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-1-3-ex-5',
      type: 'classic',
      task: 'En konstruksjon skal lages i enten stål (E = 210 GPa) eller aluminium (E = 70 GPa). Diskuter hvordan materialvalget påvirker konstruksjonens stivhet og vekt, og forklar når hvert materiale kan være foretrukket.',
      solution: 'Stål har 3× høyere E-modul enn aluminium, så en stålkonstruksjon blir 3× stivere ved samme geometri. Aluminium veier 1/3 av stål per volum. For samme stivhet må aluminiumstverrsnittet økes, som øker vekten. Stål foretrukkes når: Stivhet er kritisk, plass er begrenset, kostnad er viktig. Aluminium foretrukkes når: Vekt er kritisk, korrosjon er problem, moderat stivhetskrav aksepteres.',
    },
    {
      id: 'tif-vg1-1-3-ex-6',
      type: 'classic',
      task: 'En batch med herdet verktøystål skal ha hardhet 58-62 HRC. Fem prøver måles til 59, 61, 63, 57, 60 HRC. Analyser resultatene og foreslå tiltak.',
      solution: 'Resultater: Prøve 1 (59 HRC) OK, Prøve 2 (61 HRC) OK, Prøve 3 (63 HRC) UNDERKJENT - for hard, Prøve 4 (57 HRC) UNDERKJENT - for myk, Prøve 5 (60 HRC) OK. 2 av 5 prøver (40%) utenfor toleranse indikerer ustabil prosess. Tiltak: 1) Kalibrere temperaturkontroll i herdeovn, 2) Sjekke kjølemedium og avkjølingsprosedyre, 3) Gjennomgå oppvarmingstid, 4) Øke prøvetaking inntil prosessen er stabil.',
    },
  ],
  keyTerms: [
    { term: 'Spenning', definition: 'Kraft per arealenhet, målt i MPa (N/mm²).' },
    { term: 'Tøyning', definition: 'Relativ forlengelse ved belastning.' },
    { term: 'Flytegrense', definition: 'Spenningen der permanent deformasjon begynner.' },
    { term: 'Strekkfasthet', definition: 'Maksimal spenning materialet tåler ved strekking.' },
    { term: 'E-modul', definition: 'Elastisitetsmodul - forholdet mellom spenning og tøyning.' },
    { term: 'Seighet', definition: 'Evnen til å absorbere energi før brudd.' },
  ],
};

// ============================================================================
// Kapittel 1.4: Kjemiske egenskaper og korrosjon
// ============================================================================

export const CHAPTER_TIF_VG1_1_4: TextbookChapter = {
  id: 'tif-vg1-1-4',
  courseId: 'tif-vg1',
  chapterNumber: '1.4',
  title: 'Kjemiske egenskaper og korrosjon',
  description: 'Innføring i kjemiske egenskaper hos materialer, med fokus på korrosjon og korrosjonsbeskyttelse.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forklare hvordan kjemiske forbindelser og egenskaper virker inn på bruk, gjenbruk og trygg oppbevaring av råstoffer og materialer',
  ],
  sections: [
    {
      title: 'Korrosjon - grunnleggende',
      content: `## Korrosjon - grunnleggende

Korrosjon er materialers nedbrytning gjennom kjemiske eller elektrokjemiske reaksjoner med omgivelsene. Det er en av de største utfordringene i industrien.

**Kostnader:**
Korrosjon koster globalt anslagsvis 2,5% av BNP - i Norge tilsvarer dette over 100 milliarder kroner årlig.

**Forutsetninger for korrosjon:**
1. Metall (anode)
2. Elektrolytt (vann med salter)
3. Oksygen (eller annen oksidant)
4. Elektrisk forbindelse

**Elektrokjemisk korrosjon:**
Korrosjon er en elektrokjemisk prosess med:
- Anodereaksjon (oksidasjon): Fe → Fe²⁺ + 2e⁻
- Katodereaksjon (reduksjon): O₂ + 2H₂O + 4e⁻ → 4OH⁻
- Rust dannes: Fe²⁺ + 2OH⁻ → Fe(OH)₂ → rust

**Faktorer som påvirker korrosjonshastighet:**
- Temperatur (høyere = raskere)
- Fuktighet
- Salter og forurensninger
- pH-verdi
- Oksygentilgang`,
    },
    {
      title: 'Korrosjonstyper',
      content: `## Korrosjonstyper

**Jevn korrosjon**
- Jevnt fordelt over hele overflaten
- Forutsigbar og kan kompenseres med tykkere materiale
- Eksempel: Rusting av ubeskyttet stål utendørs

**Galvanisk korrosjon**
- Oppstår når ulike metaller er i kontakt i elektrolytt
- Det "uedle" metallet korroderer
- Eksempel: Stålbolter i aluminiumskonstruksjon

**Galvanisk spenningsrekke:**
Uedle (korroderer) ← Magnesium - Sink - Aluminium - Stål - Bly - Kobber - Rustfritt stål → Edle (beskyttes)

**Gropkorrosjon (pitting)**
- Lokale, dype groper
- Farlig fordi skaden er skjult
- Vanlig på rustfritt stål i kloridmiljø

**Spaltkorrosjon**
- I trange spalter der oksygen mangles
- Under pakninger, i gjenger
- Vanskelig å unngå helt

**Spenningskorrosjon**
- Kombinasjon av strekkspennning og korrosivt miljø
- Kan gi plutselig brudd
- Kritisk i trykkbeholdere og rør

**Eksempel - Galvanisk korrosjon:**
En båteier monterte en messingsensor på aluminiumsskroget. Etter én sesong var aluminiumet rundt sensoren alvorlig korrodert. Årsak: Messing er edlere enn aluminium, og sjøvann fungerte som elektrolytt.`,
    },
    {
      title: 'Korrosjonsbeskyttelse',
      content: `## Korrosjonsbeskyttelse

**1. Materialvalg**
Velg korrosjonsbestandig materiale:
- Rustfritt stål (krom danner passivt lag)
- Aluminium (naturlig oksidlag)
- Plastmaterialer
- Kobber og kobberlegeringer

**2. Overflatebehandling**

**Maling og lakk**
- Skiller metallet fra miljøet
- Må vedlikeholdes
- Primer gir god adhesjon

**Galvanisering (varmforsinking)**
- Stål dyppes i smeltet sink
- Sink korroderer i stedet for stål
- Selvhelende ved små skader

**Eloksering (anodisering)**
- Elektrokjemisk oksidlag på aluminium
- Hardt og slitebestandig
- Kan farges

**Pulverlakkering**
- Tørr pulver påføres elektrostatisk
- Herdes i ovn
- Tykk, jevn overflate

**3. Katodisk beskyttelse**

**Offeranoder**
- Sink- eller magnesiumblokker festes til konstruksjonen
- Offeranoden korroderer i stedet
- Må byttes regelmessig
- Brukes på skip, rørledninger, tanker

**Påtrykt strøm**
- Elektrisk strøm tvinger metallet til å bli katode
- Mer komplekst system
- Brukes på store konstruksjoner

**Eksempel - Korrosjonsbeskyttelse av stålkonstruksjon:**
En stålbru over sjøvann beskyttes med:
1. Sandblåsing til Sa 2.5 standard
2. Sinkrik primer (katodisk beskyttelse)
3. Epoksy mellomstrøk
4. Polyuretan toppstrøk (UV-bestandig)
Total filmtykkelse: 280 µm`,
    },
    {
      title: 'Korrosjon og miljø',
      content: `## Korrosjon og miljø

**Korrosive miljøer:**

**Atmosfærisk korrosjon**
- Fuktighet og forurensning
- Verst: Industriområder, kystområder
- Klassifisering: C1 (mild) til C5 (ekstrem)

**Sjøvannskorrosjon**
- Saltinnhold øker ledningsevnen
- Biologisk begroing
- Erosjonskorrosjon fra strøm

**Kjemisk industri**
- Syrer og baser
- Høye temperaturer
- Spesielle materialer kreves

**Jord og betong**
- pH-variasjoner
- Bakterier kan produsere syre
- Strømningsvær kan forårsake korrosjon

**Forebygging gjennom design:**

**God design reduserer korrosjon:**
- Unngå vannlommer
- Sørg for god drenering
- Unngå kontakt mellom ulike metaller
- Tilgang for inspeksjon og vedlikehold
- Avrundede hjørner (bedre dekning)

**Eksempel - Korrosjonsklassifisering:**
Et verksted velger overflatebehandling basert på plassering:
- C2 (innendørs, oppvarmet): Standard maling
- C3 (by-/industriatmosfære): Galvanisering + maling
- C5-M (marine, offshore): Varmforsinking + epoksy + PU`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-1-4-ex-1',
      type: 'classic',
      task: 'Forklar prinsippet bak galvanisk korrosjon og beskriv hvordan du kan unngå det i praksis.',
      solution: 'Galvanisk korrosjon oppstår når to ulike metaller er i kontakt i en elektrolytt. Det uedle metallet (lavere i spenningsrekken) korroderer for å beskytte det edle. Forebygging: 1) Unngå kontakt mellom ulike metaller, 2) Bruk isolerende mellomlegg, 3) Velg metaller nær hverandre i spenningsrekken, 4) Mal eller isoler kontaktpunktet, 5) Bruk offeranoder av sink eller magnesium.',
    },
    {
      id: 'tif-vg1-1-4-ex-2',
      type: 'multiple-choice',
      task: 'Hva skjer ved galvanisering (varmforsinking) av stål?',
      options: [
        { id: 'a', text: 'Stålet dyppes i smeltet sink som gir katodisk beskyttelse', isCorrect: true },
        { id: 'b', text: 'Stålet males med spesialmaling', isCorrect: false },
        { id: 'c', text: 'Stålet varmebehandles for bedre korrosjonsmotstand', isCorrect: false },
        { id: 'd', text: 'Stålet krom-pletteres', isCorrect: false },
      ],
      solution: 'Ved varmforsinking dyppes rent stål i smeltet sink (ca. 450°C). Sinken binder seg til stålet og gir både barrierebeskyttelse og katodisk beskyttelse - sinken korroderer i stedet for stålet.',
    },
    {
      id: 'tif-vg1-1-4-ex-3',
      type: 'classic',
      task: 'En stålkonstruksjon skal plasseres i maritimt miljø (korrosjonsklasse C5-M). Beskriv et egnet korrosjonsbeskyttelsessystem.',
      solution: 'For C5-M (maritimt, ekstremt korrosivt) anbefales: 1) Overflatepreparering: Sandblåsing til Sa 2.5, 2) Sinkrik primer 60-80 µm (katodisk beskyttelse), 3) Epoksy mellomstrøk 2×100 µm (barriere), 4) Polyuretan toppstrøk 50-60 µm (UV-beskyttelse). Total tykkelse: 310-340 µm. Alternativt: Varmforsinking + duplex-system (maling over sink).',
    },
    {
      id: 'tif-vg1-1-4-ex-4',
      type: 'multiple-choice',
      task: 'Hvilken korrosjonstype er mest farlig fordi den er skjult og kan gi plutselig svikt?',
      options: [
        { id: 'a', text: 'Gropkorrosjon (pitting)', isCorrect: true },
        { id: 'b', text: 'Jevn korrosjon', isCorrect: false },
        { id: 'c', text: 'Atmosfærisk korrosjon', isCorrect: false },
        { id: 'd', text: 'Galvanisk korrosjon', isCorrect: false },
      ],
      solution: 'Gropkorrosjon (pitting) er farlig fordi den lager dype, lokale groper som er vanskelige å oppdage visuelt. Materialet kan se bra ut på overflaten mens det er nesten gjennomkorrodert lokalt.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-1-4-ex-5',
      type: 'classic',
      task: 'En maskinkonstruktør har tegnet en stålkonstruksjon med flere potensielle korrosjonsproblemer: vannlommer, kontakt mellom stål og aluminium, og trange spalter. Gi råd om designforbedringer.',
      solution: 'Designforbedringer: 1) Vannlommer: Tilsett dreneringshull, helle flater for avrenning, unngå horisontale profiler som samler vann. 2) Stål/aluminium-kontakt: Bruk isolerende mellomlegg av nylon eller EPDM, alternativt mal kontaktflatene, velg rustfritt stål bolter. 3) Spalter: Tett med fugemasse, velg konstruksjon uten spalter der mulig, eller sørg for god drenering og lufting.',
    },
    {
      id: 'tif-vg1-1-4-ex-6',
      type: 'classic',
      task: 'Sammenlign korrosjonsbeskyttelse med maling versus varmforsinking. Diskuter fordeler, ulemper og når hver metode er best egnet.',
      solution: 'MALING - Fordeler: Valgfri farge, kan appliseres på store konstruksjoner, enkel reperasjon. Ulemper: Krever regelmessig vedlikehold, skader må repareres raskt, preparering er kritisk. VARMFORSINKING - Fordeler: Lang levetid (50+ år), selvhelende ved små skader, dekker komplekse former. Ulemper: Størrelsesbegrenset av sinkbad, grå farge, kan ikke repareres på stedet. Maling best for: Store konstruksjoner, krav til farge/utseende, enkel vedlikeholdstilgang. Varmforsinking best for: Mindre komponenter, utilgjengelige områder, lang levetid viktigere enn utseende.',
    },
  ],
  keyTerms: [
    { term: 'Korrosjon', definition: 'Nedbrytning av materialer gjennom kjemiske eller elektrokjemiske reaksjoner.' },
    { term: 'Galvanisk korrosjon', definition: 'Korrosjon som oppstår når ulike metaller er i kontakt i elektrolytt.' },
    { term: 'Galvanisering', definition: 'Overflatebehandling der stål dyppes i smeltet sink.' },
    { term: 'Katodisk beskyttelse', definition: 'Beskyttelse der metallet tvinges til å bli katode og ikke korrodere.' },
    { term: 'Pitting', definition: 'Gropkorrosjon - lokale, dype korrosjonsgroper.' },
    { term: 'Passivt lag', definition: 'Tynt beskyttende oksidlag på f.eks. rustfritt stål eller aluminium.' },
  ],
};

// ============================================================================
// Kapittel 1.5: Varmebehandling av metaller
// ============================================================================

export const CHAPTER_TIF_VG1_1_5: TextbookChapter = {
  id: 'tif-vg1-1-5',
  courseId: 'tif-vg1',
  chapterNumber: '1.5',
  title: 'Varmebehandling av metaller',
  description: 'Grunnleggende prinsipper for varmebehandling som herding, anløping og normalisering.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjennomføre og gjøre rede for termiske, kjemiske og mekaniske sammenføyingsmetoder',
  ],
  sections: [
    {
      title: 'Grunnlag for varmebehandling',
      content: `## Grunnlag for varmebehandling

Varmebehandling er kontrollert oppvarming og avkjøling av metaller for å endre deres egenskaper uten å endre formen.

**Hvorfor varmebehandle?**
- Øke hardhet og slitestyrke
- Øke styrke
- Forbedre seighet
- Fjerne indre spenninger
- Forbedre bearbeidbarhet
- Endre kornstørrelse

**Fasediagrammet for jern-karbon:**
Ståls egenskaper avhenger av faser (krystallstrukturer):

**Ferritt (α-jern)**
- BCC-struktur (kubisk romsentrert)
- Mykt og duktilt
- Magnetisk
- Stabil under 727°C

**Austenitt (γ-jern)**
- FCC-struktur (kubisk flatesentrert)
- Kan løse mer karbon
- Ikke magnetisk
- Stabil over 727°C

**Martensitt**
- Dannes ved rask avkjøling fra austenitt
- Meget hardt og sprøtt
- Karakteristisk nålestruktur

**Kritiske temperaturer:**
- A1 (727°C): Austenitt-ferritt transformasjon
- A3: Avhenger av karboninnhold`,
    },
    {
      title: 'Herding av stål',
      content: `## Herding av stål

Herding øker stålets hardhet gjennom dannelse av martensitt.

**Prosessen:**
1. **Oppvarming** til austenitiseringstemperatur (50-80°C over A3)
2. **Holdetid** for gjennomvarming og karbonoppløsning
3. **Bråkjøling** (quenching) i vann, olje eller luft

**Herdbarhet:**
Avhenger av karboninnhold:
- Under 0,3% C: Kan ikke herdes nevneverdig
- 0,3-0,6% C: God herdbarhet
- Over 0,6% C: Meget god herdbarhet

**Kjølemedier:**
- Vann: Raskest, hardest, størst risiko for sprekker
- Olje: Mildere, mindre risiko
- Luft: Milest, for høylegerte stål

**Problemer ved herding:**
- Sprekker (for rask kjøling)
- Vridning/deformasjon
- Bløte flekker (urene overflater)
- Oksidasjon (avkarbonisering)

**Eksempel - Herding av meisel:**
En meisel av C80 stål herdes:
1. Varmes til 790°C (rød farge)
2. Holdes i 15 minutter
3. Bråkjøles i olje (roteres for jevn kjøling)
4. Hardhet: ca. 65 HRC

Meiselen er nå for hard og sprø - må anløpes.`,
    },
    {
      title: 'Anløping',
      content: `## Anløping

Etter herding er stålet for sprøtt for praktisk bruk. Anløping reduserer sprøheten ved å øke seigheten.

**Prosessen:**
1. Varme opp til anløpingstemperatur (150-650°C)
2. Holde i 1-2 timer
3. Kjøle ned (vanligvis i luft)

**Anløpingsfarger:**
Ved oppvarming dannes oksidlag med karakteristiske farger:
- 220°C: Lysegul
- 230°C: Strågul
- 240°C: Gull
- 260°C: Brun
- 280°C: Purpur
- 300°C: Blå
- 350°C: Lysegrå

**Anløpingstemperatur og egenskaper:**

| Temperatur | Hardhet (HRC) | Bruksområde |
|------------|---------------|-------------|
| 150-200°C | 60-65 | Skjæreverktøy |
| 200-300°C | 50-60 | Stempler, fjærer |
| 400-500°C | 40-50 | Konstruksjonsdetaljer |

**Eksempel - Anløping av meisel:**
Meiselen fra forrige eksempel anløpes:
1. Pusse spissen blank
2. Varme forsiktig fra skaftet
3. Stoppe når spissen blir mørk gul (ca. 250°C)
4. Kjøle i vann
5. Resultat: Hard spiss, seigere skaft`,
    },
    {
      title: 'Normalisering og gløding',
      content: `## Normalisering og gløding

**Normalisering:**
Formål: Utjevne kornstruktur etter støping, smiing eller sveising.

Prosess:
1. Varme til 30-50°C over A3
2. Holde kort
3. Kjøle i stillestående luft

Resultat:
- Finkornet, jevn struktur
- Forbedrede mekaniske egenskaper
- Fjerner spenninger etter kaldbearbeiding

**Mykgløding:**
Formål: Gjøre materialet mykt for bearbeiding.

Prosess:
1. Varme til rett under A1 (700-720°C)
2. Holde lenge (flere timer)
3. Kjøle sakte (i ovn)

Resultat: Mykt, lett å maskinere

**Spenningsavlastende gløding:**
Formål: Fjerne indre spenninger uten å endre struktur.

Prosess:
1. Varme til 550-650°C
2. Holde i 1-2 timer
3. Kjøle sakte

Bruk: Etter sveising, maskinering av store emner

**Rekrystallisasjonsgløding:**
Formål: Gjenopprette duktilitet etter kaldbearbeiding.

Prosess:
1. Varme over rekrystallisasjonstemperaturen
2. Nye, spenningsfrie korn dannes
3. Kjøle ned

**Eksempel - Spenningsavlastning etter sveising:**
Et sveiset stålrammeverk spenningsavlastes:
1. Varmes til 600°C (hele konstruksjonen)
2. Holdes i 1 time per 25mm tykkelse
3. Kjøles sakte i ovn (max 50°C/time)

Resultat: Redusert risiko for sprekker og vridning.`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-1-5-ex-1',
      type: 'classic',
      task: 'Forklar trinnene i herding av stål og beskriv hva som skjer i materialet på hvert trinn.',
      solution: '1) Oppvarming til austenitiseringstemperatur (over A3): Krystallstrukturen endres til austenitt (FCC) som kan løse mer karbon. 2) Holdetid: Sikrer at hele emnet er gjennomvarmet og karbonet er jevnt fordelt. 3) Bråkjøling: Rask avkjøling forhindrer normal transformasjon til ferritt - i stedet dannes martensitt som er meget hard men sprø.',
    },
    {
      id: 'tif-vg1-1-5-ex-2',
      type: 'multiple-choice',
      task: 'Hvorfor anløpes stål etter herding?',
      options: [
        { id: 'a', text: 'For å redusere sprøheten og øke seigheten', isCorrect: true },
        { id: 'b', text: 'For å øke hardheten ytterligere', isCorrect: false },
        { id: 'c', text: 'For å gjøre overflaten blank', isCorrect: false },
        { id: 'd', text: 'For å øke korrosjonsmotstanden', isCorrect: false },
      ],
      solution: 'Herdet stål er for sprøtt for praktisk bruk. Anløping (oppvarming til 150-650°C) reduserer indre spenninger og øker seigheten, men senker hardheten noe. Balansen mellom hardhet og seighet velges ut fra bruksområdet.',
    },
    {
      id: 'tif-vg1-1-5-ex-3',
      type: 'classic',
      task: 'En komponent av middelkarbonstål (C45) skal sveises. Forklar hvilken varmebehandling som bør utføres etter sveising og hvorfor.',
      solution: 'Spenningsavlastende gløding bør utføres etter sveising av C45. Prosess: Varme til 550-650°C, holde 1-2 timer, kjøle sakte. Hvorfor: Sveising skaper indre spenninger i varmepåvirket sone (HAZ) på grunn av rask lokal oppvarming og avkjøling. Disse spenningene kan føre til sprekker, deformasjon eller redusert utmattingsstyrke. Gløding eliminerer disse spenningene.',
    },
    {
      id: 'tif-vg1-1-5-ex-4',
      type: 'multiple-choice',
      task: 'Hva er formålet med normalisering?',
      options: [
        { id: 'a', text: 'Å utjevne kornstruktur og fjerne spenninger', isCorrect: true },
        { id: 'b', text: 'Å herde materialet', isCorrect: false },
        { id: 'c', text: 'Å gjøre materialet rustfritt', isCorrect: false },
        { id: 'd', text: 'Å øke karboninnholdet', isCorrect: false },
      ],
      solution: 'Normalisering utjevner kornstrukturen og fjerner indre spenninger etter støping, smiing, sveising eller kaldbearbeiding. Resultatet er finkornet, jevn struktur med forbedrede mekaniske egenskaper.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-1-5-ex-5',
      type: 'classic',
      task: 'En verkstedarbeider skal lage en meisel av verktøystål C80. Beskriv hele prosessen fra emne til ferdig, bruksklar meisel, inkludert varmebehandling.',
      solution: 'Prosess: 1) SMI meiselen til ønsket form i varmt tilstand. 2) NORMALISER for å utjevne strukturen: Varm til 820°C, kjøl i luft. 3) MASKINÉR til ferdig dimensjon mens materialet er mykt. 4) HERD spissen: Varm til 790°C, bråkjøl i olje. 5) ANLØP: Puss spissen blank, varm forsiktig fra skaftet, stopp ved gul farge på spissen (ca. 250°C), kjøl i vann. 6) SLIIP egg til ønsket vinkel. Resultat: Hard, slitebestandig spiss (55-60 HRC) med seigere skaft.',
    },
    {
      id: 'tif-vg1-1-5-ex-6',
      type: 'classic',
      task: 'Lag en oversikt over de fire hovedtypene varmebehandling (herding, anløping, normalisering, gløding) med formål, temperaturområde og typisk bruk.',
      solution: 'HERDING: Formål - Øke hardhet. Temperatur - Over A3 (780-850°C), bråkjøling. Bruk - Verktøy, slitedeler. ANLØPING: Formål - Redusere sprøhet etter herding. Temperatur - 150-650°C. Bruk - Alltid etter herding, temperatur velges etter ønsket hardhet/seighet. NORMALISERING: Formål - Utjevne kornstruktur. Temperatur - 30-50°C over A3, luftkjøling. Bruk - Etter smiing, sveising, støping. GLØDING: Formål - Myke materialet eller fjerne spenninger. Temperatur - 550-720°C, langsom kjøling. Bruk - Før maskinering, etter sveising, etter kaldbearbeiding.',
    },
  ],
  keyTerms: [
    { term: 'Austenitt', definition: 'Høytemperaturfase i stål med FCC-struktur, kan løse mer karbon.' },
    { term: 'Martensitt', definition: 'Hard, sprø fase dannet ved rask avkjøling fra austenitt.' },
    { term: 'Herding', definition: 'Varmebehandling som øker hardheten gjennom dannelse av martensitt.' },
    { term: 'Anløping', definition: 'Oppvarming etter herding for å redusere sprøhet.' },
    { term: 'Normalisering', definition: 'Varmebehandling for å utjevne kornstruktur.' },
    { term: 'Bråkjøling', definition: 'Rask avkjøling i vann eller olje ved herding.' },
  ],
};

// ============================================================================
// Kapittel 1.6: Materialvalg og bærekraft
// ============================================================================

export const CHAPTER_TIF_VG1_1_6: TextbookChapter = {
  id: 'tif-vg1-1-6',
  courseId: 'tif-vg1',
  chapterNumber: '1.6',
  title: 'Materialvalg og bærekraft',
  description: 'Kriterier for å velge riktig materiale basert på tekniske krav, økonomi og miljøhensyn.',
  estimatedMinutes: 40,
  competenceGoals: [
    'beskrive de spesifikke egenskapene ved ulike materialer og gjøre rede for hvordan de kan påvirke det ytre miljøet',
    'beskrive betydningen av bærekraftig utvikling av produkter og tjenester',
  ],
  sections: [
    {
      title: 'Materialvalgprosessen',
      content: `## Materialvalgprosessen

Å velge riktig materiale er en av de viktigste beslutningene i produktutvikling. Feil materialvalg kan føre til produktfeil, høye kostnader eller miljøproblemer.

**Kriterier for materialvalg:**

**Tekniske krav:**
- Mekaniske egenskaper (styrke, hardhet, seighet)
- Fysiske egenskaper (vekt, ledningsevne)
- Kjemiske egenskaper (korrosjonsmotstand)
- Formbarhet og bearbeidbarhet
- Temperaturbestandighet

**Økonomiske faktorer:**
- Materialkostnad
- Bearbeidingskostnad
- Levetid og vedlikeholdskostnad
- Tilgjengelighet

**Miljøfaktorer:**
- Råstoffutvinning
- Energiforbruk i produksjon
- Resirkulerbarhet
- Avfallshåndtering
- Livsløpsanalyse (LCA)

**Materialvalgmatrisen:**
En systematisk metode:
1. List opp krav (må-ha og bør-ha)
2. Vurder kandidatmaterialer mot kravene
3. Vekt kravene etter viktighet
4. Beregn samlet score
5. Velg best egnet materiale`,
    },
    {
      title: 'Livsløpsperspektiv',
      content: `## Livsløpsperspektiv

Et produkts miljøbelastning strekker seg fra "vugge til grav" - eller ideelt "vugge til vugge".

**Livsløpsfaser:**

**1. Råstoffutvinning**
- Gruvedrift, oljeutvinning
- Energiforbruk, landskapspåvirkning
- Eksempel: Aluminium krever store mengder elektrisitet

**2. Materialforedling**
- Smelting, raffinering
- Utslipp, avfall
- Eksempel: Stålverk med CO₂-utslipp

**3. Produksjon**
- Forming, bearbeiding, montering
- Energi, svinn, kjemikalier
- Eksempel: Sponproduksjon ved maskinering

**4. Bruksfase**
- Energiforbruk i drift
- Vedlikehold og reparasjon
- Utskifting av komponenter

**5. Avhending**
- Resirkulering
- Gjenbruk
- Deponi eller forbrenning

**Livsløpsanalyse (LCA):**
Systematisk metode for å kvantifisere miljøbelastning:
- Definere systemgrenser
- Kartlegge inn- og utgangstrømmer
- Vurdere miljøpåvirkning
- Tolke resultater

**Eksempel - Kaffekrus:**
Papirkopp vs. keramikkkopp:
- Papirkopp: Lav produksjonsenergi, men engangsbruk
- Keramikk: Høy produksjonsenergi, men 1000+ bruk
- Balansepoeng: ca. 50 bruk`,
    },
    {
      title: 'Sirkulær økonomi og resirkulering',
      content: `## Sirkulær økonomi og resirkulering

Sirkulær økonomi handler om å holde materialer i bruk lengst mulig, i motsetning til den lineære "ta-bruk-kast"-modellen.

**Prinsippene:**
1. **Design for lengst mulig levetid**
2. **Design for reparerbarhet**
3. **Design for resirkulering**
4. **Bruk resirkulerte materialer**

**Materialers resirkulerbarhet:**

**Metaller - Utmerket:**
- Aluminium: 95% resirkuleres, 95% energibesparelse
- Stål: 90% resirkuleres, 74% energibesparelse
- Kobber: Kan resirkuleres uendelig

**Plast - Varierende:**
- Termoplast: Kan smeltes om
- Herdeoplast: Vanskelig å resirkulere
- Blandinger: Utfordrende

**Kompositter - Utfordrende:**
- Vanskelig å skille materialer
- Ofte forbrenning med energiutnyttelse
- Ny teknologi under utvikling

**Resirkuleringskoder for plast:**
1. PET - Flasker, emballasje
2. HDPE - Flasker, rør
3. PVC - Rør, vinduer
4. LDPE - Poser, folier
5. PP - Emballasje, møbler
6. PS - Isopor, engangsbestikk
7. Andre plasttyper`,
    },
    {
      title: 'Bærekraftige materialvalg i praksis',
      content: `## Bærekraftige materialvalg i praksis

**EPD - Miljødeklarasjoner:**
Environmental Product Declaration er standardiserte dokumenter som viser produktets miljøavtrykk:
- CO₂-utslipp (kg CO₂-ekvivalenter)
- Energiforbruk
- Vannforbruk
- Avfallsmengder

**Strategier for bærekraftig materialvalg:**

**1. Materialeffektivisering**
- Optimalisere design for lavere materialforbruk
- Riktig dimensjonering (ikke overdimensjonering)
- Redusere svinn i produksjon

**2. Materialssubstitusjon**
- Erstatte med mer bærekraftige alternativer
- Eksempel: Biobasert plast i stedet for fossil
- Eksempel: Resirkulert stål i stedet for nytt

**3. Levetidsforlengelse**
- Bedre korrosjonsbeskyttelse
- Design for enkel reparasjon
- Modulær design for deleutskifting

**4. Lukke materialkretsløp**
- Tilrettelegge for gjenbruk
- Design for enkel demontering
- Merke materialer for sortering

**Eksempel - Bærekraftig produktdesign:**
Et maskinverksted redesigner en pumpeenhet:
- Før: Sveist stålkonstruksjon, vanskelig å reparere
- Etter: Boltet konstruksjon, standarddeler, enkel demontering

Resultat:
- 30% lengre levetid (enklere vedlikehold)
- 90% av materialene kan gjenbrukes
- Redusert total miljøbelastning`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-1-6-ex-1',
      type: 'classic',
      task: 'Forklar hva livsløpsanalyse (LCA) er og nevn de viktigste fasene i et produkts livsløp.',
      solution: 'Livsløpsanalyse (LCA) er en systematisk metode for å vurdere miljøbelastningen til et produkt gjennom hele dets levetid. De fem hovedfasene er: 1) Råstoffutvinning - gruvedrift, oljeutvinning, 2) Materialforedling - smelting, raffinering, 3) Produksjon - forming, bearbeiding, montering, 4) Bruksfase - drift, vedlikehold, 5) Avhending - resirkulering, gjenbruk eller deponi.',
    },
    {
      id: 'tif-vg1-1-6-ex-2',
      type: 'multiple-choice',
      task: 'Hvilket materiale er mest energieffektivt å resirkulere?',
      options: [
        { id: 'a', text: 'Aluminium (95% energibesparelse)', isCorrect: true },
        { id: 'b', text: 'Stål (74% energibesparelse)', isCorrect: false },
        { id: 'c', text: 'Plast (50% energibesparelse)', isCorrect: false },
        { id: 'd', text: 'Glass (30% energibesparelse)', isCorrect: false },
      ],
      solution: 'Resirkulering av aluminium sparer ca. 95% av energien som trengs for å lage nytt aluminium fra bauksitt. Dette skyldes den energikrevende elektrolyseprosessen for primæraluminium.',
    },
    {
      id: 'tif-vg1-1-6-ex-3',
      type: 'classic',
      task: 'En produktutvikler skal velge mellom stål og aluminium til en konstruksjon. Lag en enkel materialvalgmatrise med minst fire kriterier.',
      solution: 'Materialvalgmatrise (vekting 1-3, score 1-5):\n\nKriterium (Vekt) | Stål | Aluminium\n---|---|---\nStyrke (3) | 5 | 3\nVekt (2) | 2 | 5\nKostnad (2) | 5 | 2\nKorrosjon (1) | 2 | 4\n\nSamlet score:\nStål: 3×5 + 2×2 + 2×5 + 1×2 = 31\nAluminium: 3×3 + 2×5 + 2×2 + 1×4 = 27\n\nStål scorer høyest i dette eksempelet, men resultatet avhenger av vektingen som må tilpasses det spesifikke prosjektet.',
    },
    {
      id: 'tif-vg1-1-6-ex-4',
      type: 'multiple-choice',
      task: 'Hva er et hovedprinsipp i sirkulær økonomi?',
      options: [
        { id: 'a', text: 'Holde materialer i bruk lengst mulig', isCorrect: true },
        { id: 'b', text: 'Produsere mest mulig for lavest pris', isCorrect: false },
        { id: 'c', text: 'Alltid velge de billigste materialene', isCorrect: false },
        { id: 'd', text: 'Maksimere produksjonshastigheten', isCorrect: false },
      ],
      solution: 'Sirkulær økonomi handler om å holde materialer, produkter og komponenter i bruk lengst mulig gjennom design for levetid, reparerbarhet og resirkulering - i motsetning til den lineære "ta-bruk-kast"-modellen.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-1-6-ex-5',
      type: 'classic',
      task: 'Diskuter hvordan et maskinverksted kan gjøre sine produksjonsprosesser mer bærekraftige. Gi minst fem konkrete tiltak.',
      solution: 'Tiltak for bærekraftig produksjon: 1) MATERIALER: Bruk resirkulert stål og aluminium der mulig, ha gode rutiner for metallavfall til gjenvinning. 2) ENERGI: Optimaliser maskinparametere for lavere energiforbruk, slå av maskiner ved pauser. 3) KJØLEVÆSKE: Velg miljøvennlige alternativer, filtrer og gjenbruk. 4) DESIGN: Optimaliser konstruksjoner for lavere materialforbruk, design for demontering. 5) AVFALL: Sorter spon etter materialtype, returner til gjenvinning, reduser emballasje. 6) VERKTØY: Bruk belagte verktøy for lengre levetid, sliping fremfor kassering.',
    },
    {
      id: 'tif-vg1-1-6-ex-6',
      type: 'classic',
      task: 'En bedrift vurderer å bytte fra stålkomponenter til aluminiumskomponenter i sine produkter. Analyser fordeler og ulemper fra et bærekraftsperspektiv.',
      solution: 'FORDELER med aluminium: 1) Lettere vekt kan gi energibesparelser i transportfasen og bruksfasen (f.eks. kjøretøy). 2) Naturlig korrosjonsmotstand gir lengre levetid uten overflatebehandling. 3) Utmerket resirkulerbarhet med 95% energibesparelse. ULEMPER: 1) Høyere CO₂-utslipp i primærproduksjonen (elektrolyse). 2) Dyrere råstoff. 3) Krever mer materiale for samme styrke. KONKLUSJON: Aluminium kan være bærekraftig ved: lang brukstid, vektbesparelse gir energigevinst i bruk, høy resirkuleringsgrad. Stål er ofte bedre ved: korte produktlevetider, statiske konstruksjoner, kostnadsbegrensninger.',
    },
  ],
  keyTerms: [
    { term: 'LCA', definition: 'Livsløpsanalyse - systematisk vurdering av miljøbelastning gjennom produktets levetid.' },
    { term: 'Sirkulær økonomi', definition: 'Økonomisk modell som holder materialer i bruk lengst mulig.' },
    { term: 'EPD', definition: 'Environmental Product Declaration - standardisert miljødeklarasjon.' },
    { term: 'Materialvalgmatrise', definition: 'Systematisk verktøy for å sammenligne materialer mot definerte kriterier.' },
    { term: 'Resirkulering', definition: 'Prosess der avfallsmaterialer bearbeides til nye produkter.' },
  ],
};

// ============================================================================
// Kapittel 1.7: Oppbevaring og håndtering av materialer
// ============================================================================

export const CHAPTER_TIF_VG1_1_7: TextbookChapter = {
  id: 'tif-vg1-1-7',
  courseId: 'tif-vg1',
  chapterNumber: '1.7',
  title: 'Oppbevaring og håndtering av materialer',
  description: 'Sikker oppbevaring, merking og håndtering av råstoffer og kjemikalier i verksted og industri.',
  estimatedMinutes: 35,
  competenceGoals: [
    'anvende sikkerhetsdatablad og andre typer kjemikaliedokumentasjon og utføre risikoanalyse for kjemikalier som brukes på arbeidsplassen',
  ],
  sections: [
    {
      title: 'Materiallager og oppbevaring',
      content: `## Materiallager og oppbevaring

Riktig oppbevaring av materialer er viktig for kvalitet, sikkerhet og økonomi.

**Prinsipper for materiallager:**

**Organisering:**
- FIFO-prinsippet (First In, First Out)
- Tydelig merking av hyller og områder
- Lett tilgang til mye brukte materialer
- Separasjon av ulike materialtyper

**Metallager:**
- Tørt miljø (unngå korrosjon)
- Understøttet for å unngå bøying
- Korte lengder stående i stativer
- Plater stående eller liggende med mellomlegg
- Rust forebygges med olje eller VCI-papir

**Plastlager:**
- Beskyttet mot UV-lys
- Temperaturkontrollert
- Kan bli sprø ved lav temperatur
- Kan deformeres ved høy temperatur

**Trelager:**
- Tørt og ventilert
- Understøttet jevnt for å unngå vridning
- Beskyttet mot sol og nedbør
- Akklimatisering før bruk

**Eksempel - Metallager:**
Et verksted organiserer sitt metallager:
- Rundstål: Horisontale stativer, sortert etter diameter
- Flatstål: Stående i vertikale reoler
- Plater: Liggende med tresvillorer mellom
- Rester: Egen seksjon, merket og sortert`,
    },
    {
      title: 'Kjemikalier og sikkerhetsdatablad',
      content: `## Kjemikalier og sikkerhetsdatablad

I verkstedet brukes mange kjemikalier som krever sikker håndtering.

**Vanlige kjemikalier:**
- Kjølevæsker og skjæreoljer
- Løsemidler og rensemidler
- Maling og lakk
- Lim og herdere
- Sveisegasser

**Sikkerhetsdatablad (SDS):**
Alle kjemikalier skal ha sikkerhetsdatablad med 16 standardseksjoner:

1. Identifikasjon
2. Fareidentifikasjon
3. Sammensetning
4. Førstehjelpstiltak
5. Brannslokkingstiltak
6. Tiltak ved utilsiktet utslipp
7. Håndtering og lagring
8. Eksponeringskontroll/personlig verneutstyr
9. Fysiske og kjemiske egenskaper
10. Stabilitet og reaktivitet
11. Toksikologiske opplysninger
12. Miljøopplysninger
13. Avhending
14. Transportopplysninger
15. Regelverksmessige opplysninger
16. Andre opplysninger

**Farepiktogrammer (GHS):**
- Flamme: Brannfarlig
- Eksploderende bombe: Eksplosiv
- Flamme over sirkel: Oksiderende
- Gassflaske: Gass under trykk
- Etsende: Etsende
- Hodeskalle: Akutt giftig
- Utropstegn: Helsefare (mindre alvorlig)
- Helsefare: Alvorlig helsefare
- Miljøfare: Farlig for miljø`,
    },
    {
      title: 'Håndtering og transport',
      content: `## Håndtering og transport

Sikker håndtering av materialer beskytter både mennesker og materialer.

**Løfting og transport:**

**Manuell håndtering:**
- Vurder vekt før løfting
- Bruk riktig løfteteknikk (bøy i knær)
- Få hjelp ved tunge løft (> 25 kg)
- Bruk hjelpemidler (traller, jekker)

**Mekanisk håndtering:**
- Truck: Sertifikat påkrevd
- Traverskran: Opplæring påkrevd
- Vakuumløftere for plater
- Magneter for ferromagnetisk materiale

**Stropping og anhukking:**
- Velg riktig kapasitet på stropper
- Inspiser stropper før bruk
- Riktig løftepunkt og vinkel
- Aldri stå under hengende last

**Plater og profiler:**
- Bruk plateklemmer eller vakuum
- Støtt lange emner i begge ender
- Vær obs på vippepunkter
- Sikre last under transport

**Eksempel - Sikker flytting av stålplater:**
Prosedyre for å flytte 3×1,5m stålplate (200 kg):
1. Vurder: For tung for manuell håndtering
2. Velg: Traverskran med vakuumløfter
3. Kontroller: Løftekapasitet, vakuumtilstand
4. Feste: Sentrer vakuumkopper, aktiver vakuum
5. Løft: Sakte, litt over gulv først
6. Transport: Fører ser last hele veien
7. Senk: Kontrollert, på jevnt underlag
8. Frigjør: Først etter sikker plassering`,
    },
    {
      title: 'Avfallshåndtering',
      content: `## Avfallshåndtering

Riktig avfallshåndtering er lovpålagt og viktig for miljø og arbeidsmiljø.

**Sortering av verkstedsavfall:**

**Metallavfall:**
- Stålspon i egne beholdere
- Aluminiumsspon separat
- Kobberkablinger separat
- Fjern olje/kjølevæske før gjenvinning

**Plastavfall:**
- Sorter etter plasttype (1-7)
- Rengjør for matrester/olje
- Komposittavfall til forbrenning

**Kjemikalieavfall:**
- Farlig avfall behandles separat
- Bruk godkjente beholdere
- Merking med innhold
- Lever til godkjent mottak

**Filler og kluter:**
- Oljeholdige filler er brannfarlig
- Oppbevares i lukkede beholdere
- Selvantennelse kan skje!

**Elektronikkavfall:**
- Sorteres som EE-avfall
- Inneholder verdifulle metaller
- Kan inneholde farlige stoffer

**Dokumentasjon:**
- Loggfør farlig avfall
- Oppbevar kvitteringer fra mottak
- Årlig rapportering kan kreves

**Eksempel - Håndtering av spillolje:**
Ved motorbytte samles gammel olje:
1. Tappes i egnet beholder
2. Merkes "Spillolje"
3. Oppbevares i egnet skap
4. Leveres til godkjent mottak
5. Dokumenteres med mottak kvittering`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-1-7-ex-1',
      type: 'classic',
      task: 'Forklar hva et sikkerhetsdatablad (SDS) er og nevn fire viktige seksjoner du bør sjekke før du bruker et nytt kjemikalie.',
      solution: 'Et sikkerhetsdatablad (SDS) er et standardisert dokument med informasjon om et kjemisk produkts farer og sikker bruk. Fire viktige seksjoner: 1) Fareidentifikasjon - hvilke farer produktet utgjør, 2) Førstehjelpstiltak - hva du gjør ved uhell, 3) Håndtering og lagring - hvordan produktet brukes og oppbevares trygt, 4) Eksponeringskontroll/verneutstyr - hvilket verneutstyr som trengs.',
    },
    {
      id: 'tif-vg1-1-7-ex-2',
      type: 'multiple-choice',
      task: 'Hva betyr FIFO-prinsippet i materiallager?',
      options: [
        { id: 'a', text: 'First In, First Out - eldste materiale brukes først', isCorrect: true },
        { id: 'b', text: 'Fast Inventory, First Order - rask levering', isCorrect: false },
        { id: 'c', text: 'Flexible Input, Fixed Output - fleksibel lagring', isCorrect: false },
        { id: 'd', text: 'Final Inspection, First Order - kvalitetskontroll', isCorrect: false },
      ],
      solution: 'FIFO (First In, First Out) betyr at materialer som kom først inn på lager, skal brukes først. Dette sikrer at materialer ikke blir liggende for lenge og forfaller eller eldes.',
    },
    {
      id: 'tif-vg1-1-7-ex-3',
      type: 'classic',
      task: 'Beskriv hvordan du ville organisere et metallager for et lite maskinverksted med stålstenger, aluminiumsprofiler og stålplater.',
      solution: 'Metallager organisering: STÅLSTENGER: Horisontale stativer langs vegg, sortert etter diameter, merket med dimensjon og kvalitet, beskyttet mot fukt. ALUMINIUMSPROFILER: Stående i egne reoler (separat fra stål for å unngå galvanisk kontakt), sortert etter profiltype. STÅLPLATER: Liggende i platereol med tresvillorer mellom for lufting og enkel tilgang, sortert etter tykkelse. GENERELT: Gangbredde for truck/jekk, tydelig merking, FIFO-system med datoer, rester i egen seksjon.',
    },
    {
      id: 'tif-vg1-1-7-ex-4',
      type: 'multiple-choice',
      task: 'Hvilket farepiktogram indikerer at et stoff er brannfarlig?',
      options: [
        { id: 'a', text: 'Flamme', isCorrect: true },
        { id: 'b', text: 'Hodeskalle', isCorrect: false },
        { id: 'c', text: 'Utropstegn', isCorrect: false },
        { id: 'd', text: 'Etsende', isCorrect: false },
      ],
      solution: 'Flammesymbolet (svart flamme på oransje/rød bakgrunn) indikerer at stoffet er brannfarlig - det kan antenne lett og brenne.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-1-7-ex-5',
      type: 'classic',
      task: 'En lærling skal flytte en bunke stålplater (hver 2×1m, 50 kg) fra lager til maskin. Beskriv sikker fremgangsmåte og hvilket utstyr som bør brukes.',
      solution: 'Sikker fremgangsmåte: 1) VURDERING: 50 kg per plate er for tungt for manuell løfting, bruk mekanisk hjelpemiddel. 2) UTSTYR: Plateklemmer eller vakuumløfter på traverskran, alternativt platevogn med klemmer. 3) FORBEREDELSE: Sjekk at utstyr fungerer, rydd transportvei, avtal med andre i området. 4) LØFTING: Feste i balansepunkt, løft forsiktig, kontroller grep. 5) TRANSPORT: Holde lav høyde, sikt fri, varsle andre. 6) AVLASTING: Kontrollert nedsetting, sikre mot velting. 7) Aldri stå under hengende last!',
    },
    {
      id: 'tif-vg1-1-7-ex-6',
      type: 'classic',
      task: 'Et verksted har følgende avfall: stålspon i kjølevæske, tomme malingsspann, brukte oljefilter, plastfolie fra emballasje. Forklar hvordan hvert avfall skal håndteres.',
      solution: 'Avfallshåndtering: 1) STÅLSPON I KJØLEVÆSKE: La spon renne av i eget kar, gjenbruk kjølevæsken om mulig, lever tørr spon til metallgjenvinning. 2) TOMME MALINGSSPANN: Farlig avfall hvis rester av maling - lever til godkjent mottak for farlig avfall. Helt tomme og tørre kan noen steder gå som metallavfall. 3) BRUKTE OLJEFILTER: Farlig avfall - la renne av, oppbevar i tett beholder, lever til godkjent mottak. 4) PLASTFOLIE: Sortert plastavfall - samle rent, komprimér gjerne, lever til plastgjenvinning. Dokumenter farlig avfall med mengde og dato.',
    },
  ],
  keyTerms: [
    { term: 'SDS', definition: 'Sikkerhetsdatablad - standardisert dokumentasjon for kjemikalier.' },
    { term: 'FIFO', definition: 'First In, First Out - prinsipp for lagerrotasjon.' },
    { term: 'GHS', definition: 'Globalt harmonisert system for klassifisering og merking av kjemikalier.' },
    { term: 'Farepiktogram', definition: 'Standardisert symbol som viser type fare ved et kjemikalie.' },
    { term: 'Farlig avfall', definition: 'Avfall som krever spesiell håndtering på grunn av helse- eller miljøfare.' },
  ],
};

// ============================================================================
// Eksport av del 1 kapitler
// ============================================================================

export const TIF_VG1_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TIF_VG1_1_1,
  CHAPTER_TIF_VG1_1_2,
  CHAPTER_TIF_VG1_1_3,
  CHAPTER_TIF_VG1_1_4,
  CHAPTER_TIF_VG1_1_5,
  CHAPTER_TIF_VG1_1_6,
  CHAPTER_TIF_VG1_1_7,
];
