/* eslint-disable */
// @ts-nocheck
/**
 * Teknologi- og industrifag VG1 - Del 3: Maskinering
 *
 * Kapittel 3.1-3.7: Maskinering og CNC
 * Dekker LK20 kompetansemål for maskinbearbeiding
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1: Dreiing og fresing
// ============================================================================

export const CHAPTER_TIF_VG1_3_1: TextbookChapter = {
  id: 'tif-vg1-3-1',
  courseId: 'tif-vg1',
  chapterNumber: '3.1',
  title: 'Dreiing og fresing',
  description: 'Grunnleggende prinsipper for dreiing og fresing som sponformende bearbeidingsmetoder.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare og anvende egnede håndverktøy, måleverktøy og maskiner for bearbeiding av materialer innenfor produksjon og tolke måleresultater i henhold til arbeidstegninger',
  ],
  sections: [
    {
      title: 'Sponformende bearbeiding',
      content: `## Sponformende bearbeiding

Sponformende bearbeiding er prosesser der materiale fjernes i form av spon ved hjelp av et skjærende verktøy. Dette er grunnlaget for moderne maskineringsteknologi.

**Hvorfor maskinering?**
- Oppnå nøyaktige dimensjoner (ned til tusendels mm)
- Skape komplekse geometrier
- Produsere glatte overflater
- Bearbeide harde materialer
- Fleksibel produksjon

**Grunnleggende skjæreprosess:**
Når et verktøy med definert geometri (skjærevinkel, friklaring) presses inn i arbeidsstykket med tilstrekkelig kraft, skjæres materialet av og danner spon.

**Spontyper:**
- Lamellspon: Korte, adskilte segmenter (sprø materialer)
- Flikspon: Lange, sammenhengende bånd (seige materialer)
- Elementspon: Delvis sammenhengende (mellomting)
- Smulespon: Fine, korte spon (støpejern)

**Skjæreparametere:**

**Skjærehastighet (vc):**
Hastigheten verktøyet beveger seg i forhold til materialet.
- Måles i m/min
- Avhenger av materiale og verktøy
- For høy: Verktøyslitasje, varme
- For lav: Dårlig overflatefinish

**Mating (f):**
Forflytning per omdreining (dreiing) eller per tann (fresing).
- Måles i mm/omdreining eller mm/tann
- Påvirker overflateruhet og produktivitet

**Skjæredybde (ap):**
Dybden verktøyet skjærer inn i materialet.
- Måles i mm
- Begrenses av maskinkapasitet og verktøystyrke`,
    },
    {
      title: 'Dreiebenken',
      content: `## Dreiebenken

Dreiebenken er en av de mest grunnleggende verkstedmaskinene, der arbeidsstykket roterer og verktøyet står stille eller beveger seg lineært.

**Hovedkomponenter:**

**Benkfot og benk:**
- Bærer alle andre komponenter
- Styreskinner for slede
- Stabil og vibrasjonsdempende

**Spindelstokk:**
- Inneholder hovedspindel og drivverk
- Holder chuck eller plansjibben
- Turtallsregulering

**Chuck (spennfutter):**
- 3-bakket: Selvsentrerende, rund materiale
- 4-bakket: Uavhengige baker, uregelmessig form
- Spennområde avhenger av chuckstørrelse

**Pinoldokk:**
- Motstående ende av benken
- Holder senterspiss for lange emner
- Kan ta bor og rømmer

**Slede og tverrslede:**
- Bærer verktøyholderen
- Langsgående og tverrgående bevegelse
- Skalainndelinger for nøyaktig innstilling

**Verktøyholder:**
- Fire-posisjons verktøypost vanligst
- Rask verktøybytte
- Stabil oppspennning

**Dreieoperasjoner:**

**Plandreining:**
- Skjærer endeflaten plan
- Verktøy beveger seg innover fra kant

**Lengdedreining:**
- Reduserer diameter langs emnet
- Verktøy beveger seg langs akselen

**Boring:**
- Lager hull i sentrum
- Bor i pinoldokken

**Sporstikking:**
- Lager smale spor
- Spesielt stikkstål`,
    },
    {
      title: 'Dreieparametere og teknikk',
      content: `## Dreieparametere og teknikk

**Beregning av skjærehastighet:**

Turtall n (rpm) beregnes fra ønsket skjærehastighet:

n = (vc × 1000) / (π × D)

Der:
- n = turtall (rpm)
- vc = skjærehastighet (m/min)
- D = arbeidsdiameter (mm)

**Anbefalte skjærehastigheter:**

| Material | HSS (m/min) | Hardmetall (m/min) |
|----------|-------------|-------------------|
| Lavkarbonstål | 25-35 | 150-250 |
| Rustfritt stål | 15-20 | 100-150 |
| Aluminium | 100-200 | 300-600 |
| Messing | 50-80 | 200-350 |

**Mating:**
Typisk 0,1-0,5 mm/omdr for grovbearbeiding
Typisk 0,05-0,15 mm/omdr for finbearbeiding

**Skjæredybde:**
- Grovbearbeiding: 2-5mm
- Finbearbeiding: 0,2-0,5mm

**Eksempel - Parameterberegning:**
Dreie Ø40mm lavkarbonstål med hardmetall.
- Velg vc = 200 m/min
- n = (200 × 1000) / (π × 40) = 1592 rpm
- Velg nærmeste tilgjengelige: 1600 rpm
- Mating: 0,2 mm/omdr for grovbearbeiding

**Praktiske tips:**
1. Start med lavere parametere, øk gradvis
2. Observer spon og lyd - jevn spon er bra
3. Bruk kjølevæske for bedre overflatefinish
4. Kontroller dimensjoner underveis
5. Fjern chuck-nøkkel før start!`,
    },
    {
      title: 'Fresemaskinen',
      content: `## Fresemaskinen

I fresemaskinen roterer verktøyet (fresa) mens arbeidsstykket holdes fast på bordet som kan bevege seg i flere akser.

**Fresemaskintyper:**

**Vertikalfres:**
- Spindel står vertikalt
- Mest allsidig type
- God for planfresing, slissing, boring
- Vanligst i verksteder

**Horisontalfres:**
- Spindel ligger horisontalt
- Kraftig materialsponning
- God for lange emner
- Kan bruke flere freses samtidig

**Universalfres:**
- Kombiner vertikal og horisontal
- Kan svinge spindelen
- Meget allsidig

**Fresing vs. dreiing:**

| Egenskap | Dreiing | Fresing |
|----------|---------|---------|
| Roterer | Emne | Verktøy |
| Geometri | Rotasjonssymmetrisk | Prismatisk |
| Kontinuitet | Kontinuerlig snitt | Avbrutt snitt |
| Flathet | Begrenset | Utmerket |

**Freseoperasjoner:**

**Planfresing:**
- Skaper plan overflate
- Store planfres med vendeskjær

**Omkretsfrasing:**
- Fresas omkrets skjærer
- For vertikale flater

**Slissing/sporfresing:**
- Lager spor og kanaler
- Slissfraser

**Lommefresing:**
- Utfresa hulrom
- Pinne- eller kulefres

**3D-fresing:**
- Komplekse former
- CNC med kulefres`,
    },
    {
      title: 'Freseparametere',
      content: `## Freseparametere

**Skjærehastighet for fresing:**

n = (vc × 1000) / (π × D)

Der D = fresediameter (mm)

**Matehastighet:**
vf = fz × z × n

Der:
- vf = matehastighet (mm/min)
- fz = mating per tann (mm)
- z = antall tenner
- n = turtall (rpm)

**Typiske matinger per tann:**

| Material | HSS fz (mm) | Hardmetall fz (mm) |
|----------|-------------|-------------------|
| Stål | 0,05-0,10 | 0,10-0,25 |
| Aluminium | 0,10-0,20 | 0,15-0,40 |
| Plast | 0,05-0,15 | 0,10-0,30 |

**Eksempel - Freseparametere:**
Planfrese Ø50mm med 5 tenner i aluminium (hardmetall).
- Skjærehastighet: vc = 400 m/min
- n = (400 × 1000) / (π × 50) = 2546 rpm
- Mating per tann: fz = 0,2 mm
- Matehastighet: vf = 0,2 × 5 × 2546 = 2546 mm/min

**Medløps- vs. motløpsfresing:**

**Motløpsfresing (konvensjonell):**
- Fresa roterer mot matebevinning
- Tann griper seg inn gradvis
- Mindre belastning på maskinen
- Bedre for eldre maskiner

**Medløpsfresing (climb):**
- Fresa roterer med matebevinning
- Tann starter med maksimal sponavtaking
- Bedre overflatefinish
- Krever spillfri maskin
- Foretrukket på CNC`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-3-1-ex-1',
      type: 'classic',
      task: 'Beregn turtall for dreiing av en Ø60mm stålaksel med hardmetallverktøy. Anbefalt skjærehastighet er 180 m/min.',
      solution: 'Bruker formelen: n = (vc × 1000) / (π × D)\nn = (180 × 1000) / (π × 60)\nn = 180000 / 188,5\nn = 955 rpm\n\nVelg nærmeste tilgjengelige turtall på maskinen, f.eks. 1000 rpm. Med 1000 rpm blir faktisk skjærehastighet: vc = (π × 60 × 1000) / 1000 = 188 m/min, som er akseptabelt.',
    },
    {
      id: 'tif-vg1-3-1-ex-2',
      type: 'multiple-choice',
      task: 'Hva er hovedforskjellen mellom dreiing og fresing?',
      options: [
        { id: 'a', text: 'Ved dreiing roterer emnet, ved fresing roterer verktøyet', isCorrect: true },
        { id: 'b', text: 'Dreiing gir bedre overflatefinish', isCorrect: false },
        { id: 'c', text: 'Fresing kan kun brukes på aluminium', isCorrect: false },
        { id: 'd', text: 'Dreiing er raskere enn fresing', isCorrect: false },
      ],
      solution: 'Ved dreiing roterer arbeidsstykket i chucken mens verktøyet (dreiestål) står stille eller beveger seg lineært. Ved fresing roterer verktøyet (fresa) mens arbeidsstykket holdes fast på bordet.',
    },
    {
      id: 'tif-vg1-3-1-ex-3',
      type: 'classic',
      task: 'Forklar forskjellen mellom medløps- og motløpsfresing, og når hver metode brukes.',
      solution: 'MOTLØPSFRESING: Fresa roterer mot matebevinningen. Tannen griper gradvis inn i materialet. Gir mer slitasje og varmeutvikling, men er tryggere på eldre maskiner med slark. MEDLØPSFRESING: Fresa roterer med matebevinningen. Tannen starter med maksimal sponavtaking. Gir bedre overflatefinish og mindre verktøyslitasje, men krever spillfri maskin. Motløps brukes på eldre konvensjonelle maskiner. Medløps (climb) er standard på moderne CNC.',
    },
    {
      id: 'tif-vg1-3-1-ex-4',
      type: 'multiple-choice',
      task: 'Hvilken type chuck brukes for å spenne et rundt arbeidsstykke sentrisk?',
      options: [
        { id: 'a', text: '3-bakket selvsentrerende chuck', isCorrect: true },
        { id: 'b', text: '4-bakket chuck', isCorrect: false },
        { id: 'c', text: 'Magnetisk chuck', isCorrect: false },
        { id: 'd', text: 'Vakuumchuck', isCorrect: false },
      ],
      solution: '3-bakket selvsentrerende chuck har tre baker som beveger seg samtidig og automatisk sentrerer runde emner. 4-bakket chuck har uavhengige baker og brukes for uregelmessige former der manuell sentrering kreves.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-3-1-ex-5',
      type: 'classic',
      task: 'Du skal dreie ned en Ø50mm stålaksel til Ø45mm på en lengde av 100mm. Beskriv fremgangsmåten inkludert parametervalg.',
      solution: 'Fremgangsmåte:\n1. OPPSPENNING: Spenn akselen i 3-bakket chuck, la 100mm + sikkerhetsmarginen stikke ut.\n2. VERKTØYVALG: Hardmetall-dreiestål for stål.\n3. PARAMETERE: vc = 180 m/min, n ≈ 1150 rpm (for Ø50mm), mating f = 0,2 mm/omdr.\n4. PLANDREIING: Drei endeplaten plan først.\n5. GROVBEARBEIDING: Skjæredybde 2mm per pass. Drei fra Ø50 → Ø48 → Ø46 (3 pass).\n6. FINBEARBEIDING: Skjæredybde 0,5mm, mating 0,1 mm/omdr til Ø45mm.\n7. KONTROLL: Mål med skyvelære underveis.\n8. BRUK KJØLEVÆSKE: For bedre overflate og lengre verktøylevetid.',
    },
    {
      id: 'tif-vg1-3-1-ex-6',
      type: 'classic',
      task: 'Beregn matehastighet (mm/min) for en planfres Ø80mm med 8 tenner, turtall 800 rpm, mating per tann 0,15mm.',
      solution: 'Bruker formelen: vf = fz × z × n\n\nDer:\n- fz = 0,15 mm (mating per tann)\n- z = 8 (antall tenner)\n- n = 800 rpm\n\nvf = 0,15 × 8 × 800 = 960 mm/min\n\nMatehastigheten blir 960 mm/min. Dette betyr at bordet beveger seg 960mm per minutt, og fresa tar av 0,15mm materiale per tann per rotasjon.',
    },
  ],
  keyTerms: [
    { term: 'Skjærehastighet', definition: 'Hastigheten verktøyet beveger seg i forhold til materialet (m/min).' },
    { term: 'Mating', definition: 'Forflytning per omdreining eller per tann.' },
    { term: 'Skjæredybde', definition: 'Dybden verktøyet skjærer inn i materialet.' },
    { term: 'Chuck', definition: 'Spennfutter som holder arbeidsstykket i dreiebenken.' },
    { term: 'Medløpsfresing', definition: 'Fresing der fresa roterer med matebevinningen.' },
    { term: 'Motløpsfresing', definition: 'Fresing der fresa roterer mot matebevinningen.' },
  ],
};

// ============================================================================
// Kapittel 3.2: Boring, saging og sliping
// ============================================================================

export const CHAPTER_TIF_VG1_3_2: TextbookChapter = {
  id: 'tif-vg1-3-2',
  courseId: 'tif-vg1',
  chapterNumber: '3.2',
  title: 'Boring, saging og sliping',
  description: 'Teknikker for boring, saging og sliping av ulike materialer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forklare og anvende egnede håndverktøy, måleverktøy og maskiner for bearbeiding av materialer innenfor produksjon og tolke måleresultater i henhold til arbeidstegninger',
  ],
  sections: [
    {
      title: 'Boring',
      content: `## Boring

Boring er å lage hull ved hjelp av et roterende bor som skjærer seg ned i materialet.

**Boremaskintyper:**

**Søylebormaskin:**
- Fastmontert på gulv eller benk
- Presis og stabil
- Turtallsvalg via reim eller elektronisk
- Standard i verksteder

**Radialbormaskin:**
- Arm kan svinges og flyttes
- For store og tunge emner
- Boret går til emnet

**Håndboremaskin:**
- Elektrisk eller batteridrevet
- Mobil bruk
- Mindre presisjon

**Spiralbor:**
Det vanligste borverktøyet med:
- Spissvinkel (typisk 118° for stål, 130° for aluminium)
- Spiralspor for sponavgang
- Skjærekanter

**Borematerialer:**
- HSS: Standard for de fleste materialer
- HSS-Co (koboltlegert): For rustfritt stål
- Hardmetall: For harde materialer, høy hastighet
- Hardmetallbelagt: God slitestyrke

**Boretips:**
1. Bruk senterbor eller senter-punch først
2. Velg riktig turtall (lavere for store bor)
3. Bruk kjølevæske på metall
4. Trekk opp for å bryte spon
5. Spenn emnet godt fast
6. La boret gjøre jobben - ikke for mye trykk`,
    },
    {
      title: 'Boreparametere',
      content: `## Boreparametere

**Skjærehastighet for boring:**

n = (vc × 1000) / (π × D)

**Anbefalte skjærehastigheter:**

| Material | HSS (m/min) | Hardmetall (m/min) |
|----------|-------------|-------------------|
| Lavkarbonstål | 20-30 | 60-100 |
| Rustfritt stål | 8-15 | 30-50 |
| Aluminium | 50-100 | 100-200 |
| Plast | 30-60 | 60-100 |

**Mating:**
Typisk 0,05-0,30 mm/omdr avhengig av borstørrelse:
- Små bor (< 5mm): 0,05-0,10 mm/omdr
- Mellomstore (5-12mm): 0,10-0,20 mm/omdr
- Store bor (> 12mm): 0,15-0,30 mm/omdr

**Eksempel - Boring Ø10mm i stål:**
- HSS-bor, vc = 25 m/min
- n = (25 × 1000) / (π × 10) = 796 rpm
- Velg 800 rpm
- Mating: 0,15 mm/omdr
- Bruk kjølevæske

**Forsinking og gjenging:**

**Forsinking:**
- Lager konisk fordypning for skruehoder
- 90° forsenker for metriske skruer

**Gjenging (tap):**
- Lager innvendige gjenger
- Kjernehulldiameter må være riktig
- M10 × 1,5: Kjernehull Ø8,5mm
- Bruk skjæreolje/pasta`,
    },
    {
      title: 'Saging',
      content: `## Saging

Saging brukes til å kappe materialer til ønsket lengde.

**Båndsag:**
Kontinuerlig sagblad som går i løkke over to hjul.

**Fordeler:**
- Kan sage alle materialer
- Lite materialsvinn (smalt snitt)
- Kan sage kurver (vertikal båndsag)
- Rolig drift

**Horisontal båndsag:**
- For kapping av stenger og profiler
- Ofte automatisk nedsending
- Kjølevæske for metall

**Vertikal båndsag:**
- Emnet føres mot bladet
- For kontursaging
- Mer manuell operasjon

**Bladvalg:**
- Tanndeling: 3-4 TPI for tykt, 14-24 TPI for tynt
- Bimetall-blad for stål
- Hardmetall-tippet for harde materialer

**Kappsag (rundsag):**
- Rask kapping
- Sirkulært sagblad
- Kaldsag (langsom) eller hurtigsag (gnister)

**Sagetips:**
1. Velg riktig blad for materiale
2. Korrekt spenning på båndsagblad
3. Riktig hastighet (lavere for hard materiale)
4. Bruk kjølevæske på metall
5. Sikre emnet mot bevegelse`,
    },
    {
      title: 'Sliping',
      content: `## Sliping

Sliping er finbearbeiding med abrasive (slipende) verktøy for å oppnå nøyaktige dimensjoner og fin overflate.

**Sliping kjennetegnes av:**
- Veldig høy skjærehastighet (20-60 m/s)
- Mange små skjæreegger (slipekorn)
- Liten sponavtaking per korn
- Meget fin overflatefinish (Ra 0,2-1,6 µm)

**Slipemaskintyper:**

**Plan slipemaskin:**
- Sliper flate overflater
- Magnetisk chuck holder emnet
- Vertikal eller horisontal spindel

**Rundslipenmaskin:**
- Sliper sylindriske flater
- Utvendig eller innvendig sliping
- Emnet roterer, skiven roterer

**Verktøysliper:**
- Sliping av skjæreverktøy
- Bor, fresere, dreiestål

**Benksliper:**
- Enkel, to skiver
- Grov og fin skive
- For avgrading og skjerping

**Slipeskiver:**
- Korn: Aluminiumoksid (for stål), silisiumkarbid (for støpejern, hardmetall)
- Kornstørrelse: 36-60 grov, 80-120 medium, 150-400 fin
- Binding: Keramisk, resinoid, metallbinding

**HMS ved sliping:**
- Slipeskiver kan sprekke - bruk alltid skjerm
- Vernebriller obligatorisk
- Støvmaske ved tørrsliping
- Ikke overstig maksimal hastighet`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-3-2-ex-1',
      type: 'classic',
      task: 'Beregn turtall for boring av Ø12mm hull i aluminium med HSS-bor. Anbefalt skjærehastighet er 60 m/min.',
      solution: 'Bruker formelen: n = (vc × 1000) / (π × D)\nn = (60 × 1000) / (π × 12)\nn = 60000 / 37,7\nn = 1592 rpm\n\nVelg nærmeste tilgjengelige turtall, f.eks. 1500 rpm. Bruk mating ca. 0,15 mm/omdr. Aluminium bør bores med høyere hastighet og god sponavgang for å unngå at spon klistrer seg fast.',
    },
    {
      id: 'tif-vg1-3-2-ex-2',
      type: 'multiple-choice',
      task: 'Hvorfor bruker man senterbor eller senter-punch før boring?',
      options: [
        { id: 'a', text: 'For å lage en styring som forhindrer at boret vandrer', isCorrect: true },
        { id: 'b', text: 'For å forvare materialet', isCorrect: false },
        { id: 'c', text: 'For å øke skjærehastigheten', isCorrect: false },
        { id: 'd', text: 'For å kjøle boret', isCorrect: false },
      ],
      solution: 'Senterbor eller senter-punch lager en liten fordypning som guider borspisssen. Uten dette kan spiralboret vandre sideveis ved oppstart, spesielt på glatte overflater, og hullet blir ikke i riktig posisjon.',
    },
    {
      id: 'tif-vg1-3-2-ex-3',
      type: 'classic',
      task: 'Du skal kappe 20mm rundstål med båndsag. Beskriv bladvalg og fremgangsmåte.',
      solution: 'BLADVALG: Bimetall-blad med 10-14 TPI (tanndeling) for Ø20mm stål. Grovere tanndeling (færre TPI) for tykkere materiale. FREMGANGSMÅTE: 1) Spenn stålet fast i skrustikken. 2) Velg riktig bladspenning. 3) Still inn sagehastighet for stål (ca. 50-80 m/min). 4) Slå på kjølevæske. 5) Start sagen og la bladet senke seg kontrollert. 6) Ikke press - la sagen gjøre jobben. 7) Støtt av kappet del når nesten gjennom.',
    },
    {
      id: 'tif-vg1-3-2-ex-4',
      type: 'multiple-choice',
      task: 'Hvilken slipeskivetype brukes for sliping av herdet stål?',
      options: [
        { id: 'a', text: 'Aluminiumoksid-skive', isCorrect: true },
        { id: 'b', text: 'Silisiumkarbid-skive', isCorrect: false },
        { id: 'c', text: 'Diamantskive', isCorrect: false },
        { id: 'd', text: 'Filtskive', isCorrect: false },
      ],
      solution: 'Aluminiumoksid (korund) er standard for sliping av alle typer stål, inkludert herdet stål. Silisiumkarbid brukes for støpejern og ikke-metalliske materialer. Diamant brukes for hardmetall og keramikk.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-3-2-ex-5',
      type: 'classic',
      task: 'Du skal bore og gjenge et M8-hull i en 15mm stålplate. Beskriv hele prosessen.',
      solution: 'PROSESS:\n1. MERKING: Merk senteret for hullet.\n2. SENTER-PUNCH: Slag med senter-punch for å lage styring.\n3. PILOTHULL: Bor Ø3mm pilothull for bedre styring.\n4. KJERNEHULL: Bor Ø6,8mm (kjernehull for M8). Turtall ca. 500 rpm, bruk kjølevæske.\n5. FORSINKING (valgfritt): 90° forsenker for skruehode.\n6. GJENGING: Bruk M8-tapp med skjærepasta. Start med fortapp, deretter mellomtapp, til slutt sluttapp. Vri 1/4-1/2 omgang tilbake for hver omgang fremover for å bryte spon.\n7. KONTROLL: Prøv med M8-bolt at gjengene er rene.',
    },
    {
      id: 'tif-vg1-3-2-ex-6',
      type: 'classic',
      task: 'Forklar forskjellen mellom grov- og finbearbeiding ved sliping, og hvordan parametervalg påvirker resultatet.',
      solution: 'GROVBEARBEIDING: Formål: Fjerne mye materiale raskt. Skive: Grovkornet (36-60). Parametere: Høyere skjæredybde (0,02-0,05mm), raskere mating. Resultat: Rask materialsponning, grovere overflate (Ra 1-3 µm). FINBEARBEIDING: Formål: Oppnå nøyaktig dimensjon og fin overflate. Skive: Finkornet (120-320). Parametere: Liten skjæredybde (0,005-0,01mm), langsom mating, flere lette pass. Resultat: Nøyaktig toleranse, fin overflate (Ra 0,2-0,8 µm). TID: Grovbearbeiding gjøres først til ca. 0,1mm over ferdigmål, deretter finbearbeiding til endelig dimensjon.',
    },
  ],
  keyTerms: [
    { term: 'Spiralbor', definition: 'Roterende verktøy med spiralspor for å lage hull.' },
    { term: 'Senterbor', definition: 'Kort, stivt bor for å lage styrehull før spiralboring.' },
    { term: 'Båndsag', definition: 'Sag med kontinuerlig blad som går i løkke.' },
    { term: 'Slipeskive', definition: 'Roterende skive med slipekorn for finbearbeiding.' },
    { term: 'Gjenging', definition: 'Skjæring av innvendige gjenger med tapp.' },
    { term: 'Forsinking', definition: 'Konisk utviding av hull for skruehodet.' },
  ],
};

// ============================================================================
// Kapittel 3.3: Måleteknikk og toleranser
// ============================================================================

export const CHAPTER_TIF_VG1_3_3: TextbookChapter = {
  id: 'tif-vg1-3-3',
  courseId: 'tif-vg1',
  chapterNumber: '3.3',
  title: 'Måleteknikk og toleranser',
  description: 'Bruk av måle- og kontrollverktøy som skyvelære, mikrometer og måleblokker.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare og anvende egnede håndverktøy, måleverktøy og maskiner for bearbeiding av materialer innenfor produksjon og tolke måleresultater i henhold til arbeidstegninger',
  ],
  sections: [
    {
      title: 'Grunnleggende måleteknikk',
      content: `## Grunnleggende måleteknikk

Nøyaktig måling er grunnlaget for kvalitet i produksjon. Uten presise målinger kan vi ikke vite om produktet er innenfor spesifikasjon.

**Måleprinsipper:**

**Direkte måling:**
Avlesing direkte på instrumentet (skyvelære, mikrometer).

**Sammenligningsmåling:**
Sammenligne med en referanse (måleblokker, kaliber).

**Måleusikkerhet:**
Alle målinger har usikkerhet. Faktorer:
- Instrumentets nøyaktighet
- Temperatur (ekspansjon)
- Målekraft
- Operatørens teknikk
- Overflatefinish

**Måletemperatur:**
Standard måletemperatur er 20°C. Ved avvik ekspanderer/krymper både emne og måleverktøy.

Ekspansjon ≈ materiale × lengde × temperaturendring

Stål: ca. 12 µm per meter per °C

**God målepraksis:**
1. Rengjør emne og måleverktøy
2. La emnet temperaturstabilisere
3. Bruk konsekvent målekraft
4. Mål flere ganger
5. Noter temperatur ved presisjonsmåling`,
    },
    {
      title: 'Skyvelære',
      content: `## Skyvelære

Skyvelære (caliper) er det mest brukte måleverktøyet i verkstedet.

**Typer:**
- Digital: Lettlest display, nullstilling
- Analog med nonius: Tradisjonell avlesning
- Urskive: Lettere avlesning enn nonius

**Måleområder:**
- Utvendige mål: Hovedkjevene
- Innvendige mål: De små kjevene (øverst)
- Dybde: Dybdestaven (baksiden)
- Trinn: Flat kant på baksiden

**Noniusprinsippet:**
Noniusskalaen har 20 inndelinger over 19mm på hovedskalaen. Forskjellen er 0,05mm per inndeling. Avlesning: Finn hvor en linje på nonius treffer en linje på hovedskala.

**Avlesning (digital):**
1. Nullstill med lukket kjeve
2. Plasser emnet mellom kjevene
3. Les av på displayet
4. Standard oppløsning: 0,01mm

**Målefeil å unngå:**
- Skjev plassering av emnet
- For hard klemming (bøyer emnet)
- Skitne kjever
- Avlesning i feil vinkel (parallakse)
- Slitt eller skadet verktøy

**Eksempel - Utvendig måling:**
Måle diameter på aksel:
1. Nullstill skyvelæren
2. Åpne kjevene mer enn akselen
3. Plasser akselen mellom hovedkjevene
4. Lukk forsiktig med lett trykk
5. Les av: 25,35mm`,
    },
    {
      title: 'Mikrometer',
      content: `## Mikrometer

Mikrometer gir høyere presisjon enn skyvelære (0,001mm mulig).

**Oppbygning:**
- Bøyle: U-formet ramme
- Ambolt: Fast måleflate
- Spindel: Bevegelig måleflate
- Trommel: Skrue med skala
- Tymbel: Fininnstilling
- Ratchet/friksjon: Sikrer konstant kraft

**Mikrometerskruen:**
Stigningen er 0,5mm per omgang. Trommelen er delt i 50, hver strek = 0,01mm.

**Avlesning:**
1. Les hele mm på hylsen
2. Les halve mm (under eller over linjen)
3. Les hundredeler på trommelen
4. Eksempel: 5mm + 0,5mm + 0,17mm = 5,67mm

**Typer mikrometer:**
- Utvendig mikrometer: Vanligst
- Innvendig mikrometer: For hull
- Dybdemikrometer: For dybder og trinn
- Trepeinnksmikrometer: For tre målepunkter (rundhet)

**Bruk av mikrometer:**
1. Rengjør måleflatene
2. Kontroller nullpunktet
3. Plasser emnet og skru til ratchet klikker
4. Les av
5. Ikke dra i emnet med mikrometer lukket

**Kalibrering:**
Kontroller jevnlig mot måleblokk eller kalibreringsring.`,
    },
    {
      title: 'Toleranser og pasninger',
      content: `## Toleranser og pasninger

**Toleranse:**
Tillatt avvik fra nominell dimensjon.

**Toleranseangivelse:**
25 +0,1/-0,05 betyr:
- Nominelt mål: 25mm
- Maksimum: 25,10mm
- Minimum: 24,95mm
- Toleranse: 0,15mm

**ISO-toleransesystem:**
Standardiserte toleranseklasser angitt med bokstav og tall.

**Bokstav:** Plasseringen av toleransefeltet
- Store bokstaver: Hull
- Små bokstaver: Aksler
- h/H: Øvre grense = nominelt mål

**Tall:** Toleransens størrelse (IT-grader)
- IT6: Fin (ca. 0,01-0,02mm for 25mm)
- IT7: Normal (ca. 0,02-0,03mm)
- IT8-IT9: Grov (ca. 0,03-0,05mm)

**Pasninger:**
Kombinasjonen av hull- og akseltoleranse bestemmer pasningen.

**Spillepassning (clearance):**
Hull alltid større enn aksel.
- H7/f6, H7/g6
- Deler kan bevege seg fritt
- For lager, skliveflater

**Overgangspassning (transition):**
Kan være lite spill eller lite press.
- H7/j6, H7/k6, H7/m6
- For posisjonsbestemming

**Presspassning (interference):**
Aksel alltid større enn hull.
- H7/p6, H7/s6
- Må presses eller krympes
- For permanente forbindelser

**Eksempel - H7/h6:**
Hull H7 på Ø25: +0,021/0 → 25,000 - 25,021mm
Aksel h6 på Ø25: 0/-0,013 → 24,987 - 25,000mm
Resultat: Alltid spill (min 0, maks 0,034mm)`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-3-3-ex-1',
      type: 'classic',
      task: 'En aksel er spesifisert til Ø30 +0/-0,05mm. Du måler 29,96mm. Er akselen godkjent?',
      solution: 'Spesifikasjon: Ø30 +0/-0,05mm\n- Maksimum: 30,00mm\n- Minimum: 30,00 - 0,05 = 29,95mm\n\nMålt verdi: 29,96mm\n\nSjekk: 29,95mm ≤ 29,96mm ≤ 30,00mm\n\nKonklusjon: JA, akselen er godkjent. Den er 0,01mm over minimumsmålet og 0,04mm under nominelt.',
    },
    {
      id: 'tif-vg1-3-3-ex-2',
      type: 'multiple-choice',
      task: 'Hva er oppløsningen på en standard digital skyvelære?',
      options: [
        { id: 'a', text: '0,01mm', isCorrect: true },
        { id: 'b', text: '0,001mm', isCorrect: false },
        { id: 'c', text: '0,1mm', isCorrect: false },
        { id: 'd', text: '1mm', isCorrect: false },
      ],
      solution: 'Standard digital skyvelære har oppløsning på 0,01mm (10 mikrometer). For høyere presisjon (0,001mm) kreves mikrometer eller spesialinstrumenter.',
    },
    {
      id: 'tif-vg1-3-3-ex-3',
      type: 'classic',
      task: 'Forklar forskjellen mellom spillepassning og presspassning, og gi et eksempel på bruk av hver.',
      solution: 'SPILLEPASSNING: Hull er alltid større enn aksel. Det er alltid luft (spill) mellom delene, som kan bevege seg i forhold til hverandre. Eksempel: Aksel i glidelager - akselen må kunne rotere fritt. PRESSPASSNING: Aksel er alltid større enn hull. Akselen må presses inn i hullet. Forbindelsen holder ved friksjon. Eksempel: Kulelager på aksel - lageret presses på akselen og sitter fast uten låsering.',
    },
    {
      id: 'tif-vg1-3-3-ex-4',
      type: 'multiple-choice',
      task: 'Hvilken pasning gir H7/p6?',
      options: [
        { id: 'a', text: 'Presspassning', isCorrect: true },
        { id: 'b', text: 'Spillepassning', isCorrect: false },
        { id: 'c', text: 'Overgangspassning', isCorrect: false },
        { id: 'd', text: 'Løs pasning', isCorrect: false },
      ],
      solution: 'H7/p6 er en presspassning. H7 er standard hull med toleranse opp fra nominell. p6 er aksel med toleranse helt over nominell (pluss). Akselen er alltid større enn hullet, så det må presses sammen.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-3-3-ex-5',
      type: 'classic',
      task: 'Du skal kontrollere om en batch aksler med toleranse Ø20h7 er innenfor spesifikasjon. Beskriv fremgangsmåte og toleransegrenser.',
      solution: 'TOLERANSEGRENSER for Ø20h7:\nh7 på Ø20 gir toleranse 0 til -0,021mm.\n- Maksimum: 20,000mm\n- Minimum: 19,979mm\n\nFREMGANGSMÅTE:\n1. Velg mikrometer 0-25mm (høyere presisjon enn skyvelære).\n2. Kalibreer mot Ø20 måleblokk eller kalibreringsring.\n3. Rengjør aksler og måleverktøy.\n4. Mål flere punkter på hver aksel (begge ender, midt).\n5. Noter målinger.\n6. GODKJENT: 19,979mm ≤ mål ≤ 20,000mm.\n7. For seriekontroll: Bruk toleransekaliber (go/no-go) for raskere sjekk.',
    },
    {
      id: 'tif-vg1-3-3-ex-6',
      type: 'classic',
      task: 'En tegning viser et hull med toleranse H7 og en aksel med toleranse g6, begge Ø25. Beregn spillområdet.',
      solution: 'Slår opp ISO-toleranser for Ø25:\n\nHULL H7:\n- Minimum: 25,000mm (nominelt + 0)\n- Maksimum: 25,021mm (nominelt + 0,021)\n\nAKSEL g6:\n- Minimum: 24,980mm (nominelt - 0,020)\n- Maksimum: 24,993mm (nominelt - 0,007)\n\nSPILLBEREGNING:\n- Minimum spill = Minste hull - Største aksel\n  = 25,000 - 24,993 = 0,007mm\n- Maksimum spill = Største hull - Minste aksel\n  = 25,021 - 24,980 = 0,041mm\n\nKONKLUSJON: Spill varierer fra 0,007 til 0,041mm. Dette er en løs spillepassning egnet for glidelagre.',
    },
  ],
  keyTerms: [
    { term: 'Skyvelære', definition: 'Måleverktøy for utvendige, innvendige mål og dybder.' },
    { term: 'Mikrometer', definition: 'Presisjonsverktøy med skruemekanisme, måler til 0,01 eller 0,001mm.' },
    { term: 'Toleranse', definition: 'Tillatt avvik fra nominell dimensjon.' },
    { term: 'Pasning', definition: 'Kombinasjonen av hull- og akseltoleranse.' },
    { term: 'ISO-toleranse', definition: 'Standardisert toleransesystem med bokstaver og tall.' },
    { term: 'Spillepassning', definition: 'Pasning der hull alltid er større enn aksel.' },
  ],
};

// ============================================================================
// Kapittel 3.4: Introduksjon til CNC-maskiner
// ============================================================================

export const CHAPTER_TIF_VG1_3_4: TextbookChapter = {
  id: 'tif-vg1-3-4',
  courseId: 'tif-vg1',
  chapterNumber: '3.4',
  title: 'Introduksjon til CNC-maskiner',
  description: 'Oppbygning og virkemåte for CNC-styrt dreiebenk og fresemaskin.',
  estimatedMinutes: 55,
  competenceGoals: [
    'anvende grunnleggende programmering av styringssystemer innenfor robotisering, automatisering og CNC',
  ],
  sections: [
    {
      title: 'Hva er CNC?',
      content: `## Hva er CNC?

CNC (Computer Numerical Control) er datastyrte maskiner som utfører bearbeiding automatisk basert på programmerte instruksjoner.

**Historisk utvikling:**
- 1950-tallet: NC (Numerical Control) med hullkort
- 1970-tallet: CNC med integrerte datamaskiner
- 1990-tallet: PC-baserte styringer
- I dag: Avanserte flerkanalsstyrninger, AI-assistanse

**Fordeler med CNC:**
- Høy repeterbarhet og nøyaktighet
- Rask produksjon av serier
- Komplekse geometrier mulig
- Redusert operatøravhengighet
- Dokumenterbar prosess

**Ulemper:**
- Høy investeringskostnad
- Krever programmering
- Rigging tar tid ved småserier
- Vedlikeholdskostnader

**CNC-maskintyper:**

**CNC-dreiebenk:**
- 2-akset (X, Z) eller med C-akse (spindelorientering)
- Dreid-frest mulig med drivne verktøy
- Revolververktøyveksler

**CNC-freser (bearbeidingssenter):**
- 3-akset (X, Y, Z) standard
- 4-akset med roterbar B-akse
- 5-akset med full orientering
- Automatisk verktøyveksler (ATC)

**CNC-dreiefressententer:**
- Kombinerer dreiing og fresing
- Komplette deler i én oppspennning
- Meget fleksibel`,
    },
    {
      title: 'Koordinatsystem og akser',
      content: `## Koordinatsystem og akser

CNC-maskiner arbeider i et kartesisk koordinatsystem med definerte akser.

**Hovedakser:**

**X-akse:**
- Horisontal, vinkelrett på spindel (fres)
- Radial retning (dreiebenk)

**Y-akse:**
- Horisontal, parallelt med front (fres)
- Ikke på standard dreiebenk (kun dreid-frest)

**Z-akse:**
- Parallelt med spindelen
- Positiv retning bort fra emnet

**Høyrehåndsregelen:**
Pekefinger = X, langfinger = Y, tommel = Z (positive retninger).

**Rotasjonsakser:**
- A-akse: Rotasjon rundt X
- B-akse: Rotasjon rundt Y (vanlig på 5-akset)
- C-akse: Rotasjon rundt Z (spindelorientering)

**Nullpunkter:**

**Maskinnullpunkt (M):**
- Fast punkt definert av maskinen
- Referanse for alle bevegelser
- Kalibrert ved produksjon

**Arbeidsnullpunkt (W):**
- Programmert nullpunkt i programmet
- Plasseres på emnet av operatør
- Typisk i hjørne eller senter av emnet

**G54-G59:**
Inntil 6 lagrede arbeidsnullpunkter.

**Eksempel - Nullpunkt på freseemne:**
Rektangulært emne 100×50×25mm:
- X0, Y0: Øvre venstre hjørne
- Z0: Toppen av emnet
- Alle koordinater i programmet refererer til dette`,
    },
    {
      title: 'Verktøy og oppspennning',
      content: `## Verktøy og oppspennning

**Verktøydata:**

Hver verktøy har geometri og korreksjoner lagret i styringen.

**Frese-verktøydata:**
- Lengdekoreksjon (Z)
- Radiuskoreksjon (for konturfreasing)
- Verktøynummer (T-nummer)

**Dreie-verktøydata:**
- X-koreksjon (radiell)
- Z-koreksjon (aksiell)
- Spissradius og orientering

**Verktøymåling:**
- Manuelt med kalibreringsstykke
- Automatisk med laserprobe
- Automatisk med berøringsprobe

**Oppspennningsutstyr:**

**For fresing:**
- Maskinskrustikke
- Spennklosser og T-spor
- Vakuumchuck for tynne plater
- Modularfikstur

**For dreiing:**
- 3-bakket chuck (standard)
- Spennhylse (collet) for høy presisjon
- Senter for lange emner
- Kjeftakkst

**Rigging og oppsett:**
1. Monter emne i fikstur
2. Finn arbeidsnullpunkt (touch-off)
3. Mål og registrer verktøy
4. Kjør program i simulering
5. Kjør første del med redusert hastighet
6. Kontrollmål
7. Juster om nødvendig`,
    },
    {
      title: 'Sikkerhet ved CNC',
      content: `## Sikkerhet ved CNC

CNC-maskiner er kraftige og kan forårsake alvorlige ulykker.

**Risikoer:**
- Kraftige bevegelser med høy hastighet
- Roterende spindel og verktøy
- Skarpe kanter og spon
- Klemfare ved verktøyskift og dørlukning
- Kjølevæske (halksikkerhet, irritasjon)

**Sikkerhetsfunksjoner:**

**Vernedør:**
- Maskinen stopper hvis døren åpnes
- Interlock-bryter
- ALDRI manipuler sikkerhetsbrytere

**Nødstopp:**
- Rød sopp-bryter
- Stopper all bevegelse umiddelbart
- Plassert flere steder

**Programstopp:**
- Feed hold: Pauser programmet
- Reset: Avbryter programmet

**Operatørregler:**

**Før kjøring:**
- Kontroller at emne er sikkert fastspent
- Sjekk at verktøy er festet
- Verifiser nullpunkt
- Simuler programmet først
- Lukk vernedør

**Under kjøring:**
- Følg med på prosessen
- Lytt etter unormale lyder
- Ikke stikk hendene inn i maskinen
- Ha hånden nær nødstopp

**Ved alarm:**
- Les alarmmelding
- Ikke blindt "reset"
- Forstå årsaken før du fortsetter
- Sjekk for kollisjoner

**Eksempel - Startprosedyre:**
1. Slå på maskin og styring
2. Kjør referansepunkt (homing)
3. Monter og spenn emne
4. Sett arbeidsnullpunkt
5. Last program
6. Sjekk verktøyliste
7. Kjør simulering (grafisk)
8. Lukk dør
9. Start i singel-blokk (en linje av gangen)
10. Når trygg, kjør kontinuerlig`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-3-4-ex-1',
      type: 'classic',
      task: 'Forklar forskjellen mellom maskinnullpunkt og arbeidsnullpunkt på en CNC-maskin.',
      solution: 'MASKINNULLPUNKT (M): Fast referansepunkt definert av maskinen, kalibrert ved produksjon. Alle maskinkoordinater refererer til dette. Maskinen kjører til dette punktet ved oppstart (homing). ARBEIDSNULLPUNKT (W): Programmørens valgte nullpunkt på emnet. Plasseres f.eks. i hjørnet av emnet. Alle koordinater i programmet refererer til dette. Operatøren setter arbeidsnullpunktet ved oppsett (touch-off). Forholdet mellom M og W lagres i offset-register (G54-G59).',
    },
    {
      id: 'tif-vg1-3-4-ex-2',
      type: 'multiple-choice',
      task: 'Hvilke akser har en standard 3-akset CNC-freser?',
      options: [
        { id: 'a', text: 'X, Y og Z', isCorrect: true },
        { id: 'b', text: 'X, Y og A', isCorrect: false },
        { id: 'c', text: 'A, B og C', isCorrect: false },
        { id: 'd', text: 'X, Z og C', isCorrect: false },
      ],
      solution: 'En standard 3-akset CNC-freser har lineærakser X (horisontal, side til side), Y (horisontal, frem-tilbake), og Z (vertikal, opp-ned). Rotasjonsaksene A, B, C finnes på 4- og 5-aksede maskiner.',
    },
    {
      id: 'tif-vg1-3-4-ex-3',
      type: 'classic',
      task: 'Beskriv prosedyren for å sette arbeidsnullpunkt på en CNC-freser.',
      solution: 'Prosedyre for touch-off:\n1. MONTER emnet i fikstur/skrustikke.\n2. VELG referanseverktøy (ofte pinnefresen i spindelen).\n3. X-NULLPUNKT: Kjør forsiktig mot venstre kant av emnet til lett kontakt. Sett X=0 (eller halvparten av verktøydiameter).\n4. Y-NULLPUNKT: Kjør mot forkant, sett Y=0.\n5. Z-NULLPUNKT: Senk verktøyet til toppen av emnet. Sett Z=0.\n6. LAGRE i G54 (eller annet offset-register).\n7. KONTROLLER ved å kjøre til X0 Y0 Z10 og visuelt verifisere.\n\nMerk: Mer nøyaktig med kantfinner eller probe.',
    },
    {
      id: 'tif-vg1-3-4-ex-4',
      type: 'multiple-choice',
      task: 'Hva skjer når vernedøren åpnes under CNC-kjøring?',
      options: [
        { id: 'a', text: 'Maskinen stopper automatisk av sikkerhetsgrunner', isCorrect: true },
        { id: 'b', text: 'Hastigheten reduseres automatisk', isCorrect: false },
        { id: 'c', text: 'Ingenting, operatøren kan jobbe videre', isCorrect: false },
        { id: 'd', text: 'Alarmen piper men maskinen fortsetter', isCorrect: false },
      ],
      solution: 'Vernedøren har en interlock-bryter som stopper maskinen når døren åpnes. Dette er en kritisk sikkerhetsfunksjon som hindrer kontakt med bevegelige deler. Maskinen kan ikke startes igjen før døren er lukket.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-3-4-ex-5',
      type: 'classic',
      task: 'Du skal rigge en CNC-freser for å produsere en serie på 50 deler. Beskriv riggeprosessen trinn for trinn.',
      solution: 'RIGGEPROSESS:\n1. PLANLEGGING: Gjennomgå tegning og program, velg verktøy, planlegg oppspennning.\n2. MASKINSTART: Slå på, kjør homing.\n3. VERKTØYOPPSETT: Monter alle verktøy i magasin, mål lengde og radius, registrer i verktøytabell.\n4. FIKSTURMONTERING: Monter skrustikke/fikstur på bord, rette inn.\n5. FØRSTE EMNE: Spenn inn, sett arbeidsnullpunkt (G54).\n6. PROGRAM: Last inn, kontroller verktøyliste matcher.\n7. SIMULERING: Kjør grafisk simulering.\n8. PRØVEKJØRING: Singel-blokk med redusert mating.\n9. KONTROLL: Mål første del, juster hvis nødvendig.\n10. SERIEPRODUKSJON: Kjør full hastighet, kontroller stikkprøver.\n11. DOKUMENTER: Loggfør parametere og eventuelle justeringer.',
    },
    {
      id: 'tif-vg1-3-4-ex-6',
      type: 'classic',
      task: 'Sammenlign fordeler og ulemper med CNC-maskinering versus konvensjonell maskinering.',
      solution: 'CNC-MASKINERING:\nFordeler:\n- Høy repeterbarhet (identiske deler)\n- Komplekse geometrier enkelt\n- Raskere produksjon i serier\n- Mindre operatøravhengig\n- Dokumenterbar prosess\n- Kan kjøre ubemannet\n\nUlemper:\n- Høy investeringskostnad\n- Krever programmering\n- Rigging tar tid for enkeltdeler\n- Krever vedlikehold av elektronikk\n\nKONVENSJONELL:\nFordeler:\n- Lavere startkostnad\n- Rask for enkle, enkeltdeler\n- Fleksibel for prototyper\n- Enklere opplæring\n\nUlemper:\n- Operatøravhengig kvalitet\n- Tregere i serier\n- Begrenset kompleksitet\n\nVALG: CNC for serier og komplekse deler. Konvensjonell for enkle enkeltdeler og prototyper.',
    },
  ],
  keyTerms: [
    { term: 'CNC', definition: 'Computer Numerical Control - datastyrte maskiner.' },
    { term: 'Maskinnullpunkt', definition: 'Fast referansepunkt definert av maskinen.' },
    { term: 'Arbeidsnullpunkt', definition: 'Programmørens valgte nullpunkt på emnet.' },
    { term: 'G54', definition: 'Offset-register for lagring av arbeidsnullpunkt.' },
    { term: 'Interlock', definition: 'Sikkerhetsbryter som stopper maskin ved åpen dør.' },
    { term: 'Touch-off', definition: 'Prosess for å sette arbeidsnullpunkt.' },
  ],
};

// ============================================================================
// Kapittel 3.5: CNC-programmering
// ============================================================================

export const CHAPTER_TIF_VG1_3_5: TextbookChapter = {
  id: 'tif-vg1-3-5',
  courseId: 'tif-vg1',
  chapterNumber: '3.5',
  title: 'CNC-programmering',
  description: 'Grunnleggende G-kode og M-kode programmering for CNC-maskiner.',
  estimatedMinutes: 60,
  competenceGoals: [
    'anvende grunnleggende programmering av styringssystemer innenfor robotisering, automatisering og CNC',
  ],
  sections: [
    {
      title: 'G-kode grunnleggende',
      content: `## G-kode grunnleggende

G-kode (også kalt RS-274) er et standardisert programmeringsspråk for CNC-maskiner.

**Programoppbygning:**
Et CNC-program består av nummererte linjer (blokker) med instruksjoner.

**Blokkformat:**
N10 G01 X50.0 Y25.0 F100

- N10: Blokknummer (valgfritt)
- G01: G-kode (type bevegelse)
- X50.0 Y25.0: Koordinater
- F100: Mating (feed rate)

**Vanlige G-koder (ISO):**

**Bevegelser:**
- G00: Hurtiggang (rapid) - raskeste bevegelse
- G01: Lineær interpolasjon (rett linje med mating)
- G02: Sirkelbue med klokken
- G03: Sirkelbue mot klokken

**Koordinatsystemer:**
- G54-G59: Arbeidsnullpunkt 1-6
- G90: Absolutte koordinater
- G91: Inkrementelle koordinater

**Plan for sirkler:**
- G17: XY-plan (standard for fresing)
- G18: XZ-plan
- G19: YZ-plan

**Kompensasjoner:**
- G40: Kanseller radiuskompensasjon
- G41: Radiuskompensasjon venstre
- G42: Radiuskompensasjon høyre
- G43: Lengdekompensasjon aktivert

**Eksempel - Enkel bevegelse:**
G00 X0 Y0 Z10    ; Hurtiggang til startpunkt
G01 Z-5 F100     ; Lineær ned i materiale
G01 X50 F200     ; Fres mot X50`,
    },
    {
      title: 'M-koder og flere funksjoner',
      content: `## M-koder og flere funksjoner

M-koder (miscellaneous) styrer maskinens hjelpefunksjoner.

**Vanlige M-koder:**
- M00: Programstopp
- M01: Valgfri stopp (med bryter)
- M02: Programslutt
- M03: Spindel på, med klokken
- M04: Spindel på, mot klokken
- M05: Spindel av
- M06: Verktøyskift
- M08: Kjølevæske på
- M09: Kjølevæske av
- M30: Programslutt og reset

**Spindelhastiget:**
S1500 - Sett 1500 rpm

**Mating:**
F200 - Sett mating 200 mm/min

**Verktøy:**
T01 M06 - Velg verktøy 1 og utfør bytte

**Eksempel - Komplett programstart:**
O0001              ; Programnummer
G21 G90 G54        ; Metrisk, absolutt, arbeidsnullpunkt 1
T01 M06            ; Verktøy 1
S2000 M03          ; 2000 rpm, med klokken
G43 H01            ; Lengdekompensasjon verktøy 1
M08                ; Kjølevæske på

**Sirkelprogrammering:**

**Metode 1 - Senterkoordianter (I, J, K):**
G02 X50 Y0 I25 J0
- Sirkler til X50, Y0
- Senter er I25, J0 relativt til startpunkt

**Metode 2 - Radius (R):**
G02 X50 Y0 R25
- Sirkler til X50, Y0 med radius 25mm`,
    },
    {
      title: 'Praktisk programmering',
      content: `## Praktisk programmering

**Programstruktur:**

**1. Oppstartblokk (sikkerhetslinje):**
G21 G90 G40 G80 G17

- G21: Metrisk
- G90: Absolutte koordinater
- G40: Ingen radiuskompensasjon
- G80: Kanseller sykluser
- G17: XY-plan

**2. Verktøyoppsett:**
T01 M06
S2000 M03
G43 H01

**3. Posisjonering:**
G00 X0 Y0 Z10

**4. Bearbeiding:**
G01 Z-5 F100
G01 X50 Y50 F200

**5. Avslutning:**
G00 Z50
M05 M09
M30

**Eksempel - Frese rektangulær lomme:**
O0002
G21 G90 G54
T01 M06              ; 10mm pinnefreser
S3000 M03
G43 H01
M08

G00 X5 Y5 Z10        ; Over startpunkt
G01 Z-3 F50          ; Ned til dybde
G01 Y45 F200         ; Fres opp
G01 X45              ; Fres høyre
G01 Y5               ; Fres ned
G01 X5               ; Fres venstre (lukker)

G00 Z50              ; Opp
M05 M09
M30`,
    },
    {
      title: 'Faste sykluser',
      content: `## Faste sykluser

Faste sykluser forenkler repeterende operasjoner.

**Boresykluser:**

**G81 - Enkel boring:**
G81 X10 Y10 Z-15 R2 F100
- Borehull på X10 Y10
- Dybde -15mm
- Returnivå R2
- Mating 100 mm/min

**G83 - Dypboring (peck):**
G83 X10 Y10 Z-30 R2 Q5 F80
- Q5: Boring 5mm av gangen
- Trekker ut for sponevakuering

**G73 - Høyhastighets peck:**
Som G83, men kortere utrekk

**G84 - Gjenging:**
G84 X10 Y10 Z-15 R2 F1.5
- F = stigning på gjenger
- Reverserer automatisk

**Kansellering:**
G80 kansellerer alle sykluser

**Flere hull i serie:**
G81 X10 Y10 Z-15 R2 F100
X20
X30
X40
G80

**Freseykluser (produsentavhengig):**
- Lommefreseykluser
- Konturfreseykluser
- Helixboring

**Eksempel - Boring av hullemønster:**
O0003
G21 G90 G54
T02 M06              ; Ø8mm bor
S1200 M03
G43 H02
M08

G00 X10 Y10 Z5
G81 Z-15 R2 F120     ; Aktiver syklus
X30                  ; Neste hull
X50                  ; Neste hull
Y30                  ; Neste rad
X30
X10
G80                  ; Kanseller syklus

G00 Z50
M05 M09
M30`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-3-5-ex-1',
      type: 'classic',
      task: 'Forklar forskjellen mellom G00 og G01.',
      solution: 'G00 (Hurtiggang/Rapid): Beveger maskinen med maksimal hastighet til angitt posisjon. Brukes for å posisjonere raskt når verktøyet er over emnet. Ingen mating angis - maskinen velger selv maksimal hastighet. G01 (Lineær interpolasjon): Beveger verktøyet i en rett linje med spesifisert mating (F-verdi). Brukes under bearbeiding. Matingshastigheten styres av F-koden. VIKTIG: G00 skal aldri brukes til å skjære materiale - kun posisjonering i fri luft.',
    },
    {
      id: 'tif-vg1-3-5-ex-2',
      type: 'multiple-choice',
      task: 'Hva gjør kommandoen M03?',
      options: [
        { id: 'a', text: 'Starter spindelen med klokken', isCorrect: true },
        { id: 'b', text: 'Stopper spindelen', isCorrect: false },
        { id: 'c', text: 'Bytter verktøy', isCorrect: false },
        { id: 'd', text: 'Slår på kjølevæske', isCorrect: false },
      ],
      solution: 'M03 starter spindelen med klokken (sett ovenfra på freser). M04 starter mot klokken. M05 stopper spindelen. Spindelen må være på før bearbeiding starter.',
    },
    {
      id: 'tif-vg1-3-5-ex-3',
      type: 'classic',
      task: 'Skriv et enkelt CNC-program for å bore tre hull på linje (X10, X30, X50, alle Y20) med dybde 12mm.',
      solution: 'O0004\nG21 G90 G54          ; Metrisk, absolutt, nullpunkt 1\nT01 M06              ; Bor\nS1000 M03            ; Spindel på\nG43 H01              ; Lengdekompensasjon\nM08                  ; Kjøling på\n\nG00 X10 Y20 Z5       ; Posisjon over første hull\nG81 Z-12 R2 F100     ; Boresyklus, dybde -12, retur 2\nX30                  ; Andre hull\nX50                  ; Tredje hull\nG80                  ; Kanseller syklus\n\nG00 Z50              ; Opp\nM05 M09              ; Stopp spindel og kjøling\nM30                  ; Programslutt',
    },
    {
      id: 'tif-vg1-3-5-ex-4',
      type: 'multiple-choice',
      task: 'Hva er forskjellen mellom G90 og G91?',
      options: [
        { id: 'a', text: 'G90 er absolutte koordinater, G91 er inkrementelle', isCorrect: true },
        { id: 'b', text: 'G90 er metrisk, G91 er tommer', isCorrect: false },
        { id: 'c', text: 'G90 er for dreiing, G91 er for fresing', isCorrect: false },
        { id: 'd', text: 'G90 aktiverer spindel, G91 stopper', isCorrect: false },
      ],
      solution: 'G90 (Absolutt): Alle koordinater refererer til arbeidsnullpunktet. X50 betyr 50mm fra nullpunkt. G91 (Inkrementell): Koordinater angir bevegelse fra nåværende posisjon. X50 betyr 50mm til høyre fra der verktøyet står nå. G90 er vanligst og tryggere.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-3-5-ex-5',
      type: 'classic',
      task: 'Skriv et CNC-program for å frese en rektangulær kontur (50×30mm) med startpunkt i X0, Y0.',
      solution: 'O0005\n; Frese rektangel 50x30mm, med klokken\nG21 G90 G54          ; Metrisk, absolutt\nT01 M06              ; 10mm pinnefreser\nS2000 M03            ; 2000 rpm\nG43 H01              ; Verktøykompensasjon\nM08                  ; Kjøling\n\nG00 X-10 Y-10 Z10    ; Utenfor emne\nG00 Z2               ; Ned nær overflate\nG01 Z-5 F100         ; Ned til dybde\n\n; Fres kontur med klokken\nG01 X0 Y0 F200       ; Til startpunkt\nG01 X50              ; Høyre\nG01 Y30              ; Opp\nG01 X0               ; Venstre\nG01 Y0               ; Ned til start\n\nG00 Z50              ; Opp\nM05 M09\nM30',
    },
    {
      id: 'tif-vg1-3-5-ex-6',
      type: 'classic',
      task: 'Forklar hva dypboresyklusen G83 gjør og hvorfor den brukes.',
      solution: 'G83 (Dypboring med peck): Syklusen borer i flere steg med full tilbaketrekking mellom hvert steg.\n\nFremgangsmåte:\n1. Hurtiggang til R-nivå (sikkerhetshøyde)\n2. Bor ned Q-dybde med mating F\n3. Trekk helt opp til R-nivå (hurtiggang)\n4. Hurtiggang ned til forrige bunnnivå\n5. Bor nye Q-dybde\n6. Gjenta til full dybde Z er nådd\n\nHvorfor: Ved dype hull (>3× bordiameter) må spon evakueres for å unngå: 1) Varmeutvikling, 2) Klemming av bor, 3) Borbrudd. Utrekking lar spon falle ut og kjølevæske komme til.\n\nEksempel: G83 X10 Y10 Z-30 R2 Q5 F80\nBorer til Z-30, 5mm av gangen.',
    },
  ],
  keyTerms: [
    { term: 'G-kode', definition: 'Kommandoer som styrer maskinbevegelser (G00, G01, etc.).' },
    { term: 'M-kode', definition: 'Kommandoer som styrer hjelpefunksjoner (M03, M08, etc.).' },
    { term: 'Faste sykluser', definition: 'Forhåndsprogrammerte sekvenser for vanlige operasjoner.' },
    { term: 'Hurtiggang', definition: 'G00 - raskeste bevegelse uten mating.' },
    { term: 'Lineær interpolasjon', definition: 'G01 - rett linje med kontrollert mating.' },
    { term: 'Peck boring', definition: 'G83 - dypboring med tilbaketrekking for sponevakuering.' },
  ],
};

// ============================================================================
// Kapittel 3.6: Dataassistert produksjon (DAP/CAM)
// ============================================================================

export const CHAPTER_TIF_VG1_3_6: TextbookChapter = {
  id: 'tif-vg1-3-6',
  courseId: 'tif-vg1',
  chapterNumber: '3.6',
  title: 'Dataassistert produksjon (DAP)',
  description: 'Bruk av CAM-programvare for å generere verktøybaner og CNC-programmer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke programmer for 2D- og 3D-dataassistert konstruksjon (DAK) og dataassistert produksjon (DAP) til grunnleggende tegning og dokumentasjon',
  ],
  sections: [
    {
      title: 'Fra CAD til CNC',
      content: `## Fra CAD til CNC

CAM (Computer Aided Manufacturing) er broen mellom design (CAD) og produksjon (CNC).

**Arbeidsflyten:**

1. **CAD-design:** Lag 3D-modell eller 2D-tegning
2. **Importer til CAM:** Overfør geometri
3. **Definer emne:** Råmaterialets størrelse
4. **Velg operasjoner:** Grovfresing, finising, boring
5. **Generer verktøybaner:** CAM beregner bevegelsene
6. **Simuler:** Visuell kontroll av prosessen
7. **Postprosesser:** Generer maskinspesifikk G-kode
8. **Overfør til maskin:** Via nettverk, USB eller DNC

**CAM-programvare:**

**Profesjonelle:**
- Mastercam: Industristandard
- Siemens NX CAM: Integrert CAD/CAM
- Hypermill: Avansert 5-akse
- Fusion 360: Cloud-basert, rimelig

**Enklere:**
- Fusion 360 (grunnleggende)
- SolidCAM (integrert i SolidWorks)
- VCarve (for tre og plast)

**Fordeler med CAM:**
- Automatisk beregning av verktøybaner
- Kollisjonssjekk i simulering
- Optimalisering av hastigheter
- Rask endring ved designendringer
- Dokumentasjon og repeterbarhet`,
    },
    {
      title: 'Freseoperasjoner i CAM',
      content: `## Freseoperasjoner i CAM

**Grovbearbeiding (Roughing):**

**2D Pocket:**
- Fresa ut hulrom (lommer)
- Flere nivåer med step-down
- Ulike strategier: Offset, spiral, trochoidal

**2D Contour:**
- Følger 2D-kontur
- For ytre eller indre vegger
- Med radiuskompensasjon

**3D Rough:**
- Fjerner materiale fra 3D-overflater
- Ofte adaptive strategier
- Maksimerer materialfjerning

**Finbearbeiding (Finishing):**

**2D Contour Finish:**
- Finmaskinering av vegger
- Lite materiale, høy presisjon

**3D Contour:**
- Følger 3D-overflate
- For skulpturerte flater

**Scallop/Pencil:**
- Finmaskinering av overgangsområder
- Finner og behandler små radier

**Parallell/Rasterfinish:**
- Parallelle baner over overflaten
- For store, åpne flater

**Strategivalg:**

| Geometri | Grov | Fin |
|----------|------|-----|
| Flat bunn | 2D Pocket | Facing/Contour |
| 3D-overflate | 3D Rough | Parallel/Scallop |
| Vertikale vegger | 2D Contour | 2D Contour Finish |
| Dype lommer | Adaptive | Step-down |`,
    },
    {
      title: 'Verktøybaner og parametere',
      content: `## Verktøybaner og parametere

**Verktøydefinisjon:**

I CAM defineres hvert verktøy med:
- Type: Pinnefreser, kulefres, planfres
- Diameter
- Lengde
- Antall skjær (tenner)
- Materiell (HSS, hardmetall)

**Skjæreparametere:**

CAM-programvare har ofte databaser med anbefalte verdier, men operatøren kan justere:

- Skjærehastighet (vc)
- Spindelturtall (rpm)
- Mating per tann (fz)
- Total mating (vf)
- Skjæredybde (ap)
- Steppen sideveis (ae)

**Verktøybanestrategier:**

**Konvensjonell (motløps):**
- Sikrere på eldre maskiner

**Climb (medløps):**
- Bedre finish, foretrukket på CNC

**Trochoidal/Adaptive:**
- Konstant verktøyinngrep
- Reduserer slitasje
- Raskere på moderne maskiner

**HSM (High Speed Machining):**
- Høye hastigheter, små skjæredybder
- Avrundede hjørner i baner
- Reduserer sjokklaster

**Sikkerhetshøyder:**
- Retract-nivå: Sikker høyde mellom operasjoner
- Clearance-nivå: Over fikstur og emne
- Rapid-nivå: Rask nedkjøring til nær emne`,
    },
    {
      title: 'Simulering og postprosessering',
      content: `## Simulering og postprosessering

**Simulering:**

Før G-kode genereres, verifiseres programmet visuelt.

**Verktøybanesimulering:**
- Viser verktøybevegelser
- Rask sjekk av logikk

**Materialfjerningssimulering:**
- Viser emnet bli maskinert
- Avslører utilstrekkelig materiafjerning
- Viser overflatekvalitet

**Kollisjonsdeteksjon:**
- Sjekker kollisjon med fikstur
- Sjekker kollisjon med emne
- Sjekker holder-kollisjon
- KRITISK for å unngå krasj!

**Postprosessering:**

CAM genererer nøytrale verktøybaner. Postprosessoren oversetter til maskinens G-kode-dialekt.

**Postprosessor velges for:**
- Maskinprodusent (Fanuc, Siemens, Heidenhain)
- Maskinmodell
- Styringversjon
- Spesielle funksjoner

**Vanlige postprosessorer:**
- Fanuc: De fleste japanske maskiner
- Siemens Sinumerik: Tyske maskiner
- Heidenhain: Høykvalitetsmaskiner
- HAAS: Amerikanske maskiner

**Overføring til maskin:**
- USB-minnepinne
- Nettverk (DNC)
- Direkte fra PC (RS-232)

**Eksempel - CAM-arbeidsflyt:**
1. Importer STEP-fil fra CAD
2. Definer emne: 100×50×30mm aluminium
3. Velg verktøy: Ø10mm pinnefres
4. Lag 2D Pocket: Dybde 15mm, stepdown 3mm
5. Simuler: Sjekk for feil
6. Postprosesser: Fanuc for Haas-fres
7. Overfør og kjør`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-3-6-ex-1',
      type: 'classic',
      task: 'Forklar arbeidsflyten fra CAD-modell til ferdig CNC-program.',
      solution: 'Arbeidsflyt CAD → CNC:\n1. CAD: Lag 3D-modell av delen i f.eks. SolidWorks, Fusion 360.\n2. Importer: Overfør geometri til CAM (ofte integrert eller via STEP/IGES).\n3. Emne: Definer råemnets størrelse og materiale.\n4. Oppsett: Plasser emnet, velg arbeidsnullpunkt, fikstur.\n5. Operasjoner: Legg til bearbeidingsoperasjoner (grov, finish, boring).\n6. Verktøy: Definer verktøy med dimensjoner og parametere.\n7. Generer baner: CAM beregner verktøybevegelser.\n8. Simuler: Visuell kontroll, kollisjonssjekk.\n9. Postprosesser: Generer maskinspesifikk G-kode.\n10. Overfør: Til maskin via nettverk/USB og kjør.',
    },
    {
      id: 'tif-vg1-3-6-ex-2',
      type: 'multiple-choice',
      task: 'Hva er funksjonen til en postprosessor?',
      options: [
        { id: 'a', text: 'Oversette CAM-data til maskinspesifikk G-kode', isCorrect: true },
        { id: 'b', text: 'Simulere bearbeidingen', isCorrect: false },
        { id: 'c', text: 'Importere CAD-filer', isCorrect: false },
        { id: 'd', text: 'Velge skjæreparametere', isCorrect: false },
      ],
      solution: 'Postprosessoren oversetter de generelle verktøybanene fra CAM til G-kode som er spesifikk for maskinens styring (Fanuc, Siemens, etc.). Ulike maskiner har ulike dialekter av G-kode, så riktig postprosessor er kritisk.',
    },
    {
      id: 'tif-vg1-3-6-ex-3',
      type: 'classic',
      task: 'Forklar forskjellen mellom grovbearbeiding og finbearbeiding i CAM, og hvilke strategier som brukes.',
      solution: 'GROVBEARBEIDING: Formål: Fjerne mye materiale raskt. Strategi: Stor skjæredybde, høy mating, etterlater 0,5-1mm til finish. Operasjoner: 2D Pocket (lommer), 3D Rough (3D-flater), Adaptive (konstant inngrep). Verktøy: Ofte større verktøy for effektivitet. FINBEARBEIDING: Formål: Oppnå endelig dimensjon og overflatekvalitet. Strategi: Liten skjæredybde, lavere mating, nøyaktig. Operasjoner: 2D Contour (vegger), Parallel (store flater), Scallop (detaljer). Verktøy: Ofte mindre verktøy for detaljer, kulefres for 3D.',
    },
    {
      id: 'tif-vg1-3-6-ex-4',
      type: 'multiple-choice',
      task: 'Hvorfor er simulering viktig før du kjører et CNC-program?',
      options: [
        { id: 'a', text: 'For å oppdage kollisjoner og programfeil før kjøring', isCorrect: true },
        { id: 'b', text: 'For å øke maskinens hastighet', isCorrect: false },
        { id: 'c', text: 'For å erstatte postprosessoren', isCorrect: false },
        { id: 'd', text: 'For å importere CAD-filer', isCorrect: false },
      ],
      solution: 'Simulering avslører: 1) Kollisjoner mellom verktøy/holder og emne/fikstur, 2) Luft-skjæring (verktøy treffer ikke materiale), 3) Utilstrekkelig materiafjerning, 4) Feil i verktøybaner. Å oppdage feil i simulering er mye billigere enn krasj på maskinen!',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-3-6-ex-5',
      type: 'classic',
      task: 'Du skal CAM-programmere en enkel del: En 50×50mm aluminiumsblokk med en 30×30mm lomme 10mm dyp. Beskriv oppsett og operasjoner.',
      solution: 'CAM-oppsett:\n\n1. EMNE: 50×50×20mm aluminium 6082.\n2. NULLPUNKT: Øvre venstre hjørne, Z på toppen.\n3. FIKSTUR: Maskinskrustikke.\n\nOPERASJONER:\n\n1. PLANFRESING (valgfritt): Planfres toppen for plan referanse.\n2. GROVLOMME: \n   - Verktøy: Ø10mm pinnefreser, 3 skjær\n   - Strategi: 2D Pocket, adaptive\n   - Dybde: 10mm, stepdown 3mm\n   - Etterlat 0,5mm til finish\n   - vc=300m/min, fz=0,1mm\n3. FINISHLOMME:\n   - Samme verktøy\n   - Strategi: 2D Contour + bunn\n   - 1 pass på vegger, 1 pass på bunn\n   - vc=400m/min, fz=0,05mm\n\n4. SIMULER og postprosesser for maskinen.',
    },
    {
      id: 'tif-vg1-3-6-ex-6',
      type: 'classic',
      task: 'Sammenlign manuell G-kode-programmering med CAM-programmering. Når foretrekkes hver metode?',
      solution: 'MANUELL G-KODE:\nFordeler: Full kontroll, ingen programvarekostnad, lærer G-kode godt, raskt for enkle deler.\nUlemper: Tidkrevende for komplekse deler, lett å gjøre feil, vanskelig 3D.\nBrukes når: Enkle 2D-geometrier, modifikasjoner av eksisterende program, læring.\n\nCAM-PROGRAMMERING:\nFordeler: Rask for komplekse deler, automatisk kollisjonsjekk, enkel endring ved designendring, 3D-overflater enkelt.\nUlemper: Programvarekostnad, læringskurve, overkill for enkle deler.\nBrukes når: 3D-geometrier, komplekse konturer, serier der tid spares, integrert CAD/CAM-flyt.\n\nTIPS: Lær begge! Forstå G-kode manuelt, bruk CAM for produksjon.',
    },
  ],
  keyTerms: [
    { term: 'CAM', definition: 'Computer Aided Manufacturing - programvare for CNC-programmering.' },
    { term: 'Postprosessor', definition: 'Oversetter CAM-data til maskinspesifikk G-kode.' },
    { term: 'Verktøybane', definition: 'Beregnet bevegelse for verktøyet gjennom materialet.' },
    { term: 'Grovbearbeiding', definition: 'Første fase der mye materiale fjernes raskt.' },
    { term: 'Finbearbeiding', definition: 'Siste fase for nøyaktig dimensjon og overflatefinish.' },
    { term: 'Adaptive', definition: 'Strategi med konstant verktøyinngrep for jevn belastning.' },
  ],
};

// ============================================================================
// Kapittel 3.7: Vedlikehold av maskiner og utstyr
// ============================================================================

export const CHAPTER_TIF_VG1_3_7: TextbookChapter = {
  id: 'tif-vg1-3-7',
  courseId: 'tif-vg1',
  chapterNumber: '3.7',
  title: 'Vedlikehold av maskiner og utstyr',
  description: 'Forebyggende og korrektivt vedlikehold av maskiner i verkstedet.',
  estimatedMinutes: 40,
  competenceGoals: [
    'planlegge, gjennomføre og dokumentere et praktisk arbeid innenfor produksjon og vedlikehold av maskiner og utstyr i samsvar med aktuelle standarder og prosedyrer',
  ],
  sections: [
    {
      title: 'Vedlikeholdstyper',
      content: `## Vedlikeholdstyper

Vedlikehold er alle aktiviteter som holder utstyr i operativ stand eller gjenoppretter denne standen.

**Forebyggende vedlikehold:**
Planlagte aktiviteter for å hindre feil før de oppstår.

- Regelmessig inspeksjon
- Smøring
- Rengjøring
- Bytte av slitedeler
- Kalibrering

**Fordeler:**
- Reduserer uplanlagt stans
- Forlenger levetid
- Sikrer kvalitet
- Økt sikkerhet
- Lavere totalkostnad

**Korrektivt vedlikehold:**
Reparasjon etter at feil har oppstått.

- Feilsøking
- Reparasjon
- Utskifting av deler

**Ulemper:**
- Uplanlagt produksjonsstans
- Ofte dyrere enn forebyggende
- Kan forårsake følgeskader

**Tilstandsbasert vedlikehold:**
Vedlikehold basert på målt tilstand.

- Vibrasjonsmåling
- Oljanalyse
- Temperaturovervåkning
- Slipmåling

**Vedlikeholds-hierarki:**
1. Operatørvedlikehold (daglig)
2. Forebyggende vedlikehold (periodisk)
3. Tilstandsbasert vedlikehold (ved behov)
4. Korrektivt vedlikehold (ved feil)`,
    },
    {
      title: 'Daglig vedlikehold',
      content: `## Daglig vedlikehold

Operatøren utfører daglig vedlikehold for å holde maskinen i god stand.

**Før oppstart:**
- Visuell inspeksjon
- Kontroller oljenivå
- Sjekk kjølevæskenivå
- Rengjør spon fra forrige dag
- Kontroller sikkerhetsutstyr

**Under drift:**
- Observer unormale lyder
- Kontroller temperaturer
- Observer vibrasjoner
- Sjekk for lekkasjer
- Overvåk overflatekvalitet

**Ved avslutning:**
- Fjern spon fra maskin
- Rengjør bord og styreskinner
- Tøm sponbeholder
- Smør eksponerte flater mot rust
- Etterfyll kjølevæske om nødvendig
- Rapporter avvik

**Sponhåndtering:**
- Bruk børste eller støvsuger
- Aldri blås med trykkluft (farlig + støv)
- Fjern spon fra styreskinner
- Tøm skråbadet regelmessig
- Sorter spon for gjenvinning

**Kjølevæske:**
- Sjekk konsentrasjon (refraktometer)
- Fjern olje som flyter på overflaten
- Etterfyll med riktig blanding
- Bytt fullstendig ved behov (lukt, bakterier)

**Sjekkliste daglig vedlikehold:**
☐ Visuell inspeksjon utført
☐ Oljenivå kontrollert
☐ Kjølevæske kontrollert
☐ Spon fjernet
☐ Flater rengjort og smurt
☐ Avvik rapportert`,
    },
    {
      title: 'Periodisk vedlikehold',
      content: `## Periodisk vedlikehold

Utføres med faste intervaller - ukentlig, månedlig, årlig.

**Ukentlig:**
- Grundig rengjøring
- Smøring av alle smørepunkter
- Kontroll av filtre
- Sjekk beltespenning
- Inspeksjon av kabler og slanger

**Månedlig:**
- Sjekk og etterfyll giroljer
- Kontroller hydraulikkolje
- Rengjør/bytt luftfiltre
- Inspiser verneutstyr
- Kontroller nødstoppfunksjon
- Sjekk belysning

**Halvårlig:**
- Spyle og skifte kjølevæske
- Grundig sjekk av styreskinner
- Kontroller spindellagre
- Sjekk elektriske koblinger
- Kalibrering av måleutstyr

**Årlig (stor service):**
- Komplett gjennomgang
- Bytte av slitedeler
- Geometrikontroll
- Laser-/kulestangmåling
- Firmware-oppdateringer
- Profesjonell service ved behov

**Smøreskjema:**
Maskinen har definerte smørepunkter:
- Styreskinner
- Kulesirkulasjon
- Lagre
- Tannstenger
- Gir

Bruk riktig smøremiddel - se maskinmanual!`,
    },
    {
      title: 'Feilsøking og dokumentasjon',
      content: `## Feilsøking og dokumentasjon

**Systematisk feilsøking:**

**Steg 1: Definer problemet**
- Hva skjer (symptom)?
- Når skjer det?
- Er det nytt eller gjentakende?

**Steg 2: Samle informasjon**
- Les alarmmeldinger
- Sjekk logg
- Spør operatør
- Observer maskinen

**Steg 3: Analyser årsaker**
- Lag liste over mulige årsaker
- Prioriter mest sannsynlige
- Bruk elimineringsmetoden

**Steg 4: Test og verifiser**
- Test én ting av gangen
- Dokumenter resultater
- Bekreft at problemet er løst

**Vanlige feil og årsaker:**

| Symptom | Mulige årsaker |
|---------|----------------|
| Unormal lyd | Slitte lagre, løs bolt, spon i styreskinner |
| Dårlig overflate | Slitt verktøy, feil parametere, vibrasjon |
| Dimensjonsfeil | Termisk drift, slitt skrue, feil offset |
| Alarm | Les meldingen, sjekk dokumentasjon |

**Dokumentasjon:**

**Vedlikeholdslogg:**
- Dato og klokkeslett
- Utført aktivitet
- Byttet deler
- Målinger
- Signatur

**Viktigheten av dokumentasjon:**
- Sporbarhet
- Lære av historikk
- Planlegge fremtidig vedlikehold
- Bevise at vedlikehold er utført
- Garantikrav

**Eksempel - Vedlikeholdsprotokoll:**
Dato: 15.01.2024
Maskin: CNC-fres Mazak VTC-300
Aktivitet: Månedlig vedlikehold
- Sjekket oljenivå (OK)
- Rengjort filtre
- Smurt X, Y, Z styreskinner
- Funnet slitasje på X-akse-belte, bestilt nytt
Utført av: Ola Nordmann`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-3-7-ex-1',
      type: 'classic',
      task: 'Forklar forskjellen mellom forebyggende og korrektivt vedlikehold, og diskuter fordeler og ulemper.',
      solution: 'FOREBYGGENDE: Planlagte aktiviteter før feil oppstår - inspeksjon, smøring, bytting av slitedeler. Fordeler: Reduserer uplanlagt stans, forlenger levetid, lavere totalkostnad, sikrere. Ulemper: Krever planlegging og ressurser, kan bytte deler som fortsatt fungerer. KORREKTIVT: Reparasjon etter at feil har oppstått. Fordeler: Ingen unødvendig jobbing, deler brukes til de feiler. Ulemper: Uplanlagt stans, ofte dyrere, kan gi følgeskader, produksjonstap. KONKLUSJON: Forebyggende er nesten alltid billigst totalt sett, men krever disiplin og planlegging.',
    },
    {
      id: 'tif-vg1-3-7-ex-2',
      type: 'multiple-choice',
      task: 'Når bør kjølevæsken i en CNC-maskin byttes fullstendig?',
      options: [
        { id: 'a', text: 'Når den lukter vondt eller har bakterievekst', isCorrect: true },
        { id: 'b', text: 'Hver dag etter arbeidsslutt', isCorrect: false },
        { id: 'c', text: 'Bare når maskinen er ny', isCorrect: false },
        { id: 'd', text: 'Aldri, bare etterfyll', isCorrect: false },
      ],
      solution: 'Kjølevæske skal byttes fullstendig når den viser tegn på bakterievekst (vond lukt, misfarging, slim). Bakterier bryter ned væsken og kan forårsake hudirritorsjoner og redusert kjøleeffekt. Normal utskiftning er ofte hver 3-6 måneder avhengig av bruk.',
    },
    {
      id: 'tif-vg1-3-7-ex-3',
      type: 'classic',
      task: 'Lag en sjekkliste for daglig vedlikehold av en CNC-dreiebenk.',
      solution: 'DAGLIG VEDLIKEHOLD CNC-DREIEBENK:\n\nFØR OPPSTART:\n☐ Visuell inspeksjon av maskin\n☐ Sjekk hydraulikkoljenivå\n☐ Sjekk kjølevæskenivå og tilstand\n☐ Kontroller at chuck er ren\n☐ Sjekk verktøy for slitasje\n☐ Test nødstopp\n\nUNDER DRIFT:\n☐ Lytt etter unormale lyder\n☐ Observer vibrasjonsnivå\n☐ Kontroller sponflyt\n☐ Overvåk temperatur\n\nVED AVSLUTNING:\n☐ Fjern spon fra chuck og styreskinner\n☐ Rengjør maskinbord\n☐ Tøm sponbeholder om nødvendig\n☐ Smør eksponerte blanke flater\n☐ Etterfyll kjølevæske\n☐ Rapporter eventuelle avvik',
    },
    {
      id: 'tif-vg1-3-7-ex-4',
      type: 'multiple-choice',
      task: 'Hvorfor bør man ikke bruke trykkluft for å blåse spon fra en maskin?',
      options: [
        { id: 'a', text: 'Spon kan fly i øynene og støv virvles opp', isCorrect: true },
        { id: 'b', text: 'Trykkluft er for dyrt', isCorrect: false },
        { id: 'c', text: 'Spon må resirkuleres', isCorrect: false },
        { id: 'd', text: 'Maskinen tåler ikke luft', isCorrect: false },
      ],
      solution: 'Trykkluft blåser spon og metallpartikler ukontrollert rundt - de kan treffe øyne eller hud og forårsake skade. I tillegg virvles metallstøv opp som kan pustes inn. Bruk børste, støvsuger eller kjølevæskespyling for sikker sponfjering.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-3-7-ex-5',
      type: 'classic',
      task: 'En CNC-freser lager plutselig dårlig overflatefinish på delene. Beskriv systematisk feilsøking.',
      solution: 'SYSTEMATISK FEILSØKING:\n\n1. DEFINER PROBLEMET:\n- Symptom: Dårlig overflatefinish\n- Når: Alltid, eller bare visse operasjoner?\n- Nylig endring: Nytt verktøy, nytt materiale, endrede parametere?\n\n2. SAMLE INFORMASJON:\n- Sjekk verktøytilstand (slitasje, skadet)\n- Sjekk skjæreparametere (hastighet, mating)\n- Observer vibrasjoner under kjøring\n- Kontroller oppspenning av emne\n- Sjekk spindellagre (lyd, temperatur)\n\n3. TEST MULIGE ÅRSAKER:\n- Bytt til nytt verktøy → Bedre? = Verktøyslitasje\n- Reduser mating → Bedre? = For aggressive parametere\n- Sjekk oppspenning → Løst = Vibrasjoner\n- Kjør forskjellige programer → Alltid dårlig = Maskinproblem\n\n4. LØSNING:\n- Rett opp funnet årsak\n- Dokumenter feilsøkingen\n- Oppdater vedlikeholdsrutiner om nødvendig',
    },
    {
      id: 'tif-vg1-3-7-ex-6',
      type: 'classic',
      task: 'Forklar hvorfor dokumentasjon av vedlikehold er viktig, og hva som bør dokumenteres.',
      solution: 'HVORFOR DOKUMENTERE:\n1. SPORBARHET: Vite hva som er gjort og når.\n2. HISTORIKK: Se mønstre, forutsi fremtidige behov.\n3. KVALITETSSIKRING: Bevise at vedlikehold er utført.\n4. GARANTI: Dokumentasjon kreves ofte for garantikrav.\n5. KUNNSKAPSOVERFØRING: Nye medarbeidere kan lære av historikk.\n6. KOSTNADSANALYSE: Forstå vedlikeholdskostnader.\n\nHVA DOKUMENTERES:\n- Dato og klokkeslett\n- Maskin/utstyr identifikasjon\n- Type vedlikehold (forebyggende/korrektivt)\n- Utførte aktiviteter\n- Byttede deler (med delenummer)\n- Målinger og observasjoner\n- Avvik funnet\n- Oppfølging som trengs\n- Hvem som utførte arbeidet\n- Tidsbruk',
    },
  ],
  keyTerms: [
    { term: 'Forebyggende vedlikehold', definition: 'Planlagte aktiviteter for å hindre feil før de oppstår.' },
    { term: 'Korrektivt vedlikehold', definition: 'Reparasjon etter at feil har oppstått.' },
    { term: 'Tilstandsbasert vedlikehold', definition: 'Vedlikehold basert på målt tilstand.' },
    { term: 'Smøring', definition: 'Påføring av smøremiddel for å redusere friksjon og slitasje.' },
    { term: 'Vedlikeholdslogg', definition: 'Dokumentasjon av utført vedlikehold.' },
    { term: 'Feilsøking', definition: 'Systematisk prosess for å finne årsak til feil.' },
  ],
};

// ============================================================================
// Eksport av del 3 kapitler
// ============================================================================

export const TIF_VG1_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TIF_VG1_3_1,
  CHAPTER_TIF_VG1_3_2,
  CHAPTER_TIF_VG1_3_3,
  CHAPTER_TIF_VG1_3_4,
  CHAPTER_TIF_VG1_3_5,
  CHAPTER_TIF_VG1_3_6,
  CHAPTER_TIF_VG1_3_7,
];
