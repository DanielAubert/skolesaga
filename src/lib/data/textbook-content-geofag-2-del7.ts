/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Geofag 2 VG3 - Del 7: Energi og ressurser
 *
 * Dekker LK20-kompetansemaal for geofag 2 (GEO02-01):
 * "drofte barekraftig utnytting av energiressurser fra hav og atmosfaere globalt og nasjonalt"
 *
 * Kapittel 7.1-7.5: Fossile energikilder, havenergi, atmosfaerisk energi,
 * Norges energiressurser og barekraftig ressursforvaltning
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Fossile energikilder
// ============================================================================

export const CHAPTER_GEOFAG_2_7_1: TextbookChapter = {
  id: 'geofag-2-7-1',
  courseId: 'geofag-2',
  chapterNumber: '7.1',
  title: 'Fossile energikilder',
  description: 'Dannelse av olje, gass og kull, petroleumsgeologi, CO2-utslipp og gjenvaerende reserver.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drofte barekraftig utnytting av energiressurser fra hav og atmosfaere globalt og nasjonalt',
    'gjoere rede for dannelse og forekomst av fossile energikilder',
    'forklare sammenhengen mellom fossilt brensel og klimagassutslipp',
  ],
  content: [
    {
      id: 'geo2-7-1-intro',
      type: 'text',
      content: `# Fossile energikilder

Fossile energikilder har vaert grunnlaget for den industrielle utviklingen de siste 200 aarene. Olje, gass og kull er dannet fra organisk materiale over millioner av aar, og inneholder enorme mengder lagret solenergi. I dag staar fossile brensler for omtrent 80 % av verdens energiforbruk, men forbrenningen frigoer store mengder CO2 som forsterker drivhuseffekten.

## Hva er fossile energikilder?

Fossile energikilder er energibaerere som er dannet av rester etter planter og dyr over geologiske tidsperioder. De tre viktigste er:
- **Olje** (petroleum): Flytende hydrokarbon
- **Naturgass**: Gassformig hydrokarbon (hovedsakelig metan)
- **Kull**: Fast hydrokarbon med hoyt karboninnhold

Felles for alle er at de inneholder karbon og hydrogen som frigoer energi ved forbrenning.`,
    },
    {
      id: 'geo2-7-1-def-fossil',
      type: 'definition',
      title: 'Fossilt brensel',
      content: 'Fossilt brensel er energibaerere dannet av organisk materiale (plante- og dyrerester) som har vaert utsatt for hoyt trykk og temperatur i jordskorpen over millioner av aar. Energien stammer opprinnelig fra solen gjennom fotosyntesen. De tre hovedtypene er olje, naturgass og kull.',
    },
    {
      id: 'geo2-7-1-dannelse-olje',
      type: 'text',
      content: `## Dannelse av olje og gass

Olje og gass dannes i en prosess som tar millioner av aar:

### 1. Avsetning av organisk materiale
Plankton, alger og andre marine organismer dor og synker til havbunnen. I omraader med lite oksygen brytes de ikke helt ned, men blandes med sedimenter.

### 2. Begraving og modning
Etter hvert som nye sedimentlag avsettes, oeker trykket og temperaturen. Det organiske materialet omdannes foerst til **kerogen** (en fast organisk forbindelse).

### 3. Oljegenerering
Naar temperaturen naar 60-120 grader C (oljevinduet), brytes kerogenet ned til flytende hydrokarboner (olje). Ved hoeyere temperaturer (over 150 grader C) dannes naturgass.

### 4. Migrasjon og akkumulering
Oljen og gassen er lettere enn vann og vandrer oppover gjennom poroese bergarter. Dersom de mooter en tett, ugjennomtrengelig bergart (takbergart), samles de i geologiske feller.

### Petroleumssystemet
Et komplett petroleumssystem krever:
- **Kildebergart**: Bergart rik paa organisk materiale
- **Reservoarbergart**: Poroes bergart der olje/gass samles
- **Takbergart**: Tett bergart som hindrer videre migrasjon
- **Geologisk felle**: Struktur som samler olje/gass (f.eks. antiklinal, forkastning)`,
    },
    {
      id: 'geo2-7-1-def-petroleumssystem',
      type: 'definition',
      title: 'Petroleumssystem',
      content: 'Et petroleumssystem er samspillet mellom kildebergart (som genererer olje/gass), reservoarbergart (som lagrer olje/gass), takbergart (som forsegler reservoaret) og en geologisk felle (som samler hydrokarbonene). Alle komponentene maa vaere til stede, og tidspunktet for dannelse og migrasjon maa stemme.',
    },
    {
      id: 'geo2-7-1-example-nordsjoen',
      type: 'example',
      title: 'Petroleumssystemet i Nordsjoen',
      problem: 'Beskriv de viktigste komponentene i petroleumssystemet paa norsk kontinentalsokkel.',
      solution: `**Kildebergart:** Kimmeridge-skiferen (oevre jura, ca. 150 millioner aar gammel) er den viktigste kildebergarten i Nordsjoen. Den er rik paa organisk materiale fra marint plankton.

**Reservoarbergart:** Sandstein fra jura- og krittperioden utgoer de viktigste reservoarbergartene. Disse har god porositet (15-30 %) og permeabilitet.

**Takbergart:** Leire og skifer fra kritt- og tertiaarperioden fungerer som forseglende lag over reservoarene.

**Geologiske feller:** De vanligste fellene paa norsk sokkel er:
- Roterte forkastningsblokker (f.eks. Statfjord-feltet)
- Saltdomer (f.eks. omraader i soerlige Nordsjoeen)
- Stratigrafiske feller (f.eks. Balder-feltet)

Oljen har migrert fra dype kildebergarter opp til grunnere reservoarer gjennom forkastninger og poroese lag.`,
    },
    {
      id: 'geo2-7-1-kull',
      type: 'text',
      content: `## Kull

Kull dannes paa en annen maate enn olje og gass. Det oppstaar fra landplanter som ble begravet i myr- og sumpmiljoeer.

### Dannelsesprosessen
1. **Torv**: Doedt plantemateriale samles i myrer med lite oksygen
2. **Brunkull (lignitt)**: Etter begraving og moderat kompaksjon
3. **Steinkull (bituminoest kull)**: Hoeyere trykk og temperatur
4. **Antrasitt**: Hoeyeste kvalitet, mest karbonrikt (over 90 % karbon)

### Egenskaper
- Kull er den mest karbonintensive fossile energikilden
- Forbrenning av kull slipper ut ca. dobbelt saa mye CO2 per energienhet som naturgass
- Kull inneholder ogsaa svovel, tungmetaller og andre forurensninger

### Globale reserver
Verdens kullreserver er langt stoerre enn olje- og gassreservene. De stoerste reservene finnes i USA, Russland, Kina, India og Australia. Kull staar fortsatt for ca. 27 % av verdens energiproduksjon.`,
    },
    {
      id: 'geo2-7-1-def-karboninnhold',
      type: 'definition',
      title: 'Karboninnhold og energitetthet',
      content: 'Energitettheten til fossile brensler avhenger av karboninnholdet. Antrasitt har hoeyest karboninnhold (over 90 %) og energitetthet. Naturgass har lavest CO2-utslipp per energienhet fordi hydrogen utgoer en stoerre andel av molekylet. Kull har hoeyest CO2-utslipp per energienhet.',
    },
    {
      id: 'geo2-7-1-co2-utslipp',
      type: 'text',
      content: `## CO2-utslipp og klimapaavirkninger

Forbrenning av fossile brensler frigoer karbondioksid (CO2) som har vaert lagret i jordskorpen i millioner av aar. Dette oeker konsentrasjonen av drivhusgasser i atmosfaeren.

### Utslipp per energienhet
- **Kull**: Ca. 94 g CO2/MJ
- **Olje**: Ca. 73 g CO2/MJ
- **Naturgass**: Ca. 56 g CO2/MJ

### Konsekvenser
Forbrenning av fossile brensler er hovedaarsaken til menneskeskapte klimaendringer. Siden den industrielle revolusjonen har CO2-konsentrasjonen i atmosfaeren oekt fra ca. 280 ppm til over 420 ppm.

### Karbonbudsjettet
For aa begrense global oppvarming til 1.5 grader C, kan verden slippe ut et begrenset karbonbudsjett. Mye av de kjente reservene av fossile brensler maa bli liggende i bakken for aa naa klimamaalene.`,
    },
    {
      id: 'geo2-7-1-example-reserver',
      type: 'example',
      title: 'Fossile reserver og levetid',
      problem: 'Forklar hva som menes med R/P-forholdet, og vurder gyldigheten av dette maalet.',
      solution: `**R/P-forholdet** (reserves-to-production ratio) beregnes som:

R/P = Paavist reserve / Aarlig produksjon

Dette gir et estimat paa hvor mange aar reservene varer med naavierende produksjonstakt.

**Globale estimater (ca. 2023):**
- Olje: R/P ≈ 50 aar
- Naturgass: R/P ≈ 50 aar
- Kull: R/P ≈ 130 aar

**Begrensninger ved R/P-forholdet:**
- Nye reserver oppdages og teknologi gjor nye forekomster loennsomme
- Produksjonstakten endrer seg over tid
- Prisen paavirker hva som regnes som oekonomisk utvinnbart
- Tar ikke hensyn til klimamaal og politiske beslutninger
- Ukonvensjonelle ressurser (skiferolje, oljesand) endrer bildet

R/P er derfor et oeyeblikksbilde, ikke en presis spaadom.`,
    },
    {
      id: 'geo2-7-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

Fossile energikilder (olje, gass og kull) er dannet av organisk materiale over millioner av aar. Olje og gass dannes i marine miljoeer gjennom begraving, modning og migrasjon, mens kull dannes fra landplanter i myrmiljoeer. Et komplett petroleumssystem krever kildebergart, reservoarbergart, takbergart og en geologisk felle. Forbrenning av fossile brensler er hovedaarsaken til oekningen i atmosfaerisk CO2 og klimaendringer. Kull har hoeyest CO2-utslipp per energienhet, mens naturgass har lavest. For aa naa klimamaalene maa mye av de gjenvaerende fossile reservene bli liggende i bakken.`,
    },
  ],
  exercises: [
    {
      id: 'geo2-7-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken temperatur maa til for at kerogen skal omdannes til olje?',
      options: [
        { id: 'a', text: '60-120 grader C', isCorrect: true },
        { id: 'b', text: '0-30 grader C', isCorrect: false },
        { id: 'c', text: '200-400 grader C', isCorrect: false },
        { id: 'd', text: 'Over 500 grader C', isCorrect: false },
      ],
      solution: 'Kerogen omdannes til olje i det saakalt oljevinduet, som ligger mellom ca. 60 og 120 grader C. Ved hoeyere temperaturer (over 150 grader C) dannes naturgass i stedet.',
    },
    {
      id: 'geo2-7-1-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken bergartstype fungerer som takbergart i et petroleumssystem?',
      options: [
        { id: 'a', text: 'Tett, ugjennomtrengelig bergart som leire eller skifer', isCorrect: true },
        { id: 'b', text: 'Poroes sandstein', isCorrect: false },
        { id: 'c', text: 'Organisk rik kildebergart', isCorrect: false },
        { id: 'd', text: 'Vulkansk basalt', isCorrect: false },
      ],
      solution: 'Takbergarten maa vaere tett og ugjennomtrengelig for aa hindre olje og gass fra aa migrere videre oppover. Leire og skifer er vanlige takbergarter fordi de har svart lav permeabilitet.',
    },
    {
      id: 'geo2-7-1-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv de fire hovedelementene i et petroleumssystem og forklar hvorfor alle maa vaere til stede for at olje skal kunne utvinnes.',
      solution: 'De fire hovedelementene er: 1) Kildebergart - organisk rik bergart der olje genereres ved hoey temperatur. 2) Reservoarbergart - poroes bergart (f.eks. sandstein) der olje/gass samles i porerommet. 3) Takbergart - tett bergart (f.eks. skifer) som hindrer oljen fra aa migrere videre. 4) Geologisk felle - en struktur (f.eks. antiklinal eller forkastning) som samler hydrokarbonene. Uten kildebergart dannes ingen olje. Uten reservoarbergart er det ingen plass aa lagre den. Uten takbergart lekker oljen ut. Uten geologisk felle spres oljen utover i stedet for aa samles.',
    },
    {
      id: 'geo2-7-1-ex4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket fossilt brensel slipper ut mest CO2 per energienhet?',
      options: [
        { id: 'a', text: 'Kull', isCorrect: true },
        { id: 'b', text: 'Olje', isCorrect: false },
        { id: 'c', text: 'Naturgass', isCorrect: false },
        { id: 'd', text: 'Alle slipper ut like mye', isCorrect: false },
      ],
      solution: 'Kull slipper ut ca. 94 g CO2/MJ, olje ca. 73 g CO2/MJ og naturgass ca. 56 g CO2/MJ. Kull har hoeyest utslipp fordi det har hoeyest andel karbon i forhold til hydrogen. Naturgass (CH4) har lavest fordi hydrogen utgoer en stoerre del av energien.',
    },
    {
      id: 'geo2-7-1-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom hvordan kull og olje dannes.',
      solution: 'Kull dannes fra landplanter som samles i myrer og sumper med lite oksygen. Plantematerialet gjennomgaar stadiene torv, brunkull, steinkull og antrasitt etter hvert som trykk og temperatur oeker. Olje dannes derimot fra marint organisk materiale (plankton og alger) som synker til havbunnen og begraves i sedimenter. Det organiske materialet omdannes foerst til kerogen, og deretter til olje ved temperaturer mellom 60 og 120 grader C. Hovedforskjellen er altsaa utgangsmaterialet (landplanter vs. marint plankton) og dannelsesmiljoeet (myr vs. havbunn).',
    },
    {
      id: 'geo2-7-1-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Droeft sammenhengen mellom karbonbudsjettet og utnyttelsen av fossile reserver. Hvorfor er det problematisk at det finnes store gjenvaerende reserver?',
      solution: 'Karbonbudsjettet er den totale mengden CO2 verden kan slippe ut og fortsatt begrense oppvarmingen til 1.5 eller 2 grader C. Problemet er at de kjente reservene av fossile brensler inneholder langt mer karbon enn karbonbudsjettet tillater. Dersom all kjent olje, gass og kull brennes, vil oppvarmingen langt overstige Parisavtalens maal. Dette betyr at store mengder fossile reserver maa forbli i bakken som saakalt stranded assets. For land som Norge, som har stor olje- og gasssektor, reiser dette sporsmaalet om investeringer i ny leting er forenlig med klimamaalene. Det er ogsaa et fordelingssporsmaaal: hvilke land skal faa utvinne sine reserver, og hvem maa la dem ligge?',
    },
  ],
};

// ============================================================================
// Kapittel 7.2: Havenergi
// ============================================================================

export const CHAPTER_GEOFAG_2_7_2: TextbookChapter = {
  id: 'geofag-2-7-2',
  courseId: 'geofag-2',
  chapterNumber: '7.2',
  title: 'Havenergi',
  description: 'Havvind, tidevannsenergi, boelgekraft, havtermisk energi og norsk havbasert energiproduksjon.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drofte barekraftig utnytting av energiressurser fra hav og atmosfaere globalt og nasjonalt',
    'gjoere rede for ulike former for havbasert energi og deres potensial',
    'vurdere fordeler og ulemper ved havenergi',
  ],
  content: [
    {
      id: 'geo2-7-2-intro',
      type: 'text',
      content: `# Havenergi

Havet er en enorm energikilde som kan utnyttes paa flere maater. Vind over havet, tidevann, boelger og temperaturforskjeller i vannet representerer store mengder fornybar energi. Med oekende behov for aa erstatte fossile brensler har interessen for havbasert energi vokst kraftig.

## Typer havenergi

Energi fra havet kan utnyttes gjennom:
- **Havvind** (offshore vindkraft): Vindturbiner plassert til havs
- **Tidevannsenergi**: Utnytter hoeydeforskjellen mellom flo og fjare
- **Boelgekraft**: Hoester energi fra havboelger
- **Havtermisk energi (OTEC)**: Utnytter temperaturforskjeller i havet
- **Havstroemenergi**: Utnytter energien i havstroemmer

Av disse er havvind den klart mest modne teknologien og den med stoerst kommersielt potensial.`,
    },
    {
      id: 'geo2-7-2-def-havvind',
      type: 'definition',
      title: 'Havvind (offshore vindkraft)',
      content: 'Havvind er vindkraft produsert av turbiner plassert til havs, enten paa faste fundamenter i grunt farvann (bunnfast) eller paa flytende plattformer i dypere farvann (flytende havvind). Havvind gir jevnere og sterkere vind enn landbasert vindkraft fordi det er mindre friksjon over havoverflaten.',
    },
    {
      id: 'geo2-7-2-havvind-tekst',
      type: 'text',
      content: `## Havvind

Havvind er den mest utviklede formen for havbasert energi og vokser raskt globalt.

### Bunnfast havvind
- Turbinene staar paa faste fundamenter forankret i havbunnen
- Egner seg for vanndyp opp til ca. 50-60 meter
- Vel utproevd teknologi, stoerst i Nordsjoeen (Storbritannia, Danmark, Tyskland)
- Stoerste vindpark: Dogger Bank (UK) med over 3.6 GW kapasitet

### Flytende havvind
- Turbinene er montert paa flytende strukturer forankret til havbunnen
- Kan plasseres paa mye dypere vann (100-1000 meter)
- Aapner opp enorme havomraader for vindkraft
- Norge er verdensledende med Hywind-konseptet (Equinor)
- Hywind Tampen forsyner olje- og gassplattformer med stroemm

### Fordeler med havvind
- Sterkere og jevnere vindforhold enn paa land
- Mindre visuell paavirkningpaaa naermiljoeet
- Store tilgjengelige arealer
- Kan kombineres med annen havbruk

### Utfordringer
- Hoeyere investeringskostnader enn landvind
- Krevende vedlikehold i toeffe vaerforhold
- Paavirkningpaaa marin fauna (fugler, sjoopdyr)
- Nettilknytning og kraftoverfoering til land`,
    },
    {
      id: 'geo2-7-2-example-havvind',
      type: 'example',
      title: 'Norsk havvind - Utsira Nord og Soerlige Nordsjoeen II',
      problem: 'Beskriv de to omraadene Norge har aapnet for havvindutbygging og forklar hvorfor de er valgt.',
      solution: `**Utsira Nord:**
- Ligger vest for Haugesund, utenfor Utsira
- Vanndyp: 200-300 meter (krever flytende havvind)
- Areal: Ca. 1000 km²
- Planlagt kapasitet: 1500 MW
- Valgt fordi: Gode vindforhold, relativt naer land, Norges kompetanse paa flytende teknologi

**Soerlige Nordsjoeen II:**
- Ligger soer i Nordsjoen, naer grensen til Danmark
- Vanndyp: 50-70 meter (bunnfast havvind mulig)
- Areal: Ca. 2591 km²
- Planlagt kapasitet: opp til 3000 MW
- Valgt fordi: Grunt farvann, naerhet til europeisk kraftmarked, mulighet for krafteksport

Begge omraadene har sterke og jevne vindforhold og er valgt etter grundige konsekvensutredninger som har vurdert paavirkningpaaa miljoe, sjofart og fiskeri.`,
    },
    {
      id: 'geo2-7-2-tidevann',
      type: 'text',
      content: `## Tidevannsenergi

Tidevann skyldes gravitasjonskraften fra maanen og solen. Hoeydeforskjellen mellom flo og fjare representerer potensiell energi som kan utnyttes.

### Typer tidevannskraftverk

**Tidevannsbarrierer:**
- Demning bygges paa tvers av en bukt eller munning
- Vann stroemmer gjennom turbiner naar tidevannet stiger og synker
- La Rance i Frankrike (240 MW) har vaert i drift siden 1966
- Store miljoepaavirkning paa oekosystemet i bukten

**Tidevannsstroemturbiner:**
- Undervanns-turbiner plasseres i omraader med sterke tidevannsstroemmer
- Minner om vindturbiner under vann
- Mindre miljoepaavirkning enn barrierer
- MeyGen i Skottland er verdens stoerste anlegg

### Potensial i Norge
Norge har relativt moderate tidevannsforskjeller (1-3 meter) sammenlignet med steder som Bay of Fundy (16 meter). Enkelte sund og straumer har likevel sterke stroemmer som kan utnyttes, for eksempel Saltstraumen i Nordland.`,
    },
    {
      id: 'geo2-7-2-def-tidevann',
      type: 'definition',
      title: 'Tidevannsenergi',
      content: 'Tidevannsenergi er energi som hentes fra tidevannsbevegelserene, det vil si den regelmessige stigningen og synkingen av havnivaaet foraarsaket av gravitasjonskraften fra maanen og solen. Energien kan utnyttes gjennom barrierer (demninger) eller stroemturbiner plassert i omraader med sterke tidevannsstroemmer.',
    },
    {
      id: 'geo2-7-2-boelger',
      type: 'text',
      content: `## Boelgekraft

Havboelger inneholder store mengder kinetisk energi som kan konverteres til elektrisitet.

### Hvordan oppstaar boelger?
Boelger dannes naar vind blaser over havoverflaten. Energien overfoeres fra vind til vann gjennom friksjon. Jo lenger strekningen vinden blaser over (fetch), jo stoerre boelger.

### Teknologier for boelgekraft
- **Punktabsorbenter**: Boeyersom beveger seg opp og ned med boelgene
- **Overtopping-systemer**: Boelger skyller over en rampe og driver turbiner
- **Oscillerende vannsoeyle**: Boelger presser luft gjennom en turbin
- **Slangeformede systemer**: Flytende roer som boyes av boelgene

### Utfordringer
- Utsatt for ekstremvaer som kan oedelegge utstyr
- Vanskelig aa bygge robust nok for de stoerste stormene
- Lav energitetthet sammenlignet med havvind
- Mange konsepter er fortsatt paa forskningsstadiet

### Norsk forskning
Norge har lang erfaring med boelgeenergi. Selskapet Ocean Power har testet punktabsorbere, og forskningsinstitusjoner som SINTEF og NTNU jobber med aa forbedre teknologien.`,
    },
    {
      id: 'geo2-7-2-otec',
      type: 'text',
      content: `## Havtermisk energi (OTEC)

OTEC (Ocean Thermal Energy Conversion) utnytter temperaturforskjellen mellom varmt overflatevann og kaldt dypvann til aa produsere stroemm.

### Virkemaate
1. Varmt overflatevann (25-30 grader C) fordamper et arbeidsstoff (f.eks. ammoniakk)
2. Dampen driver en turbin
3. Kaldt dypvann (4-5 grader C) kondenserer dampen
4. Prosessen gjentas i en lukket syklus

### Forutsetninger
- Krever minst 20 grader C temperaturforskjell
- Fungerer best i tropiske farvann
- Kaldt dypvann maa pumpes opp fra 800-1000 meters dyp

### Begrensninger
- Lav virkningsgrad (ca. 3-5 %)
- Svart hoye investeringskostnader
- Kun aktuelt i tropiske strok
- Ikke relevant for Norge paa grunn av for liten temperaturforskjell`,
    },
    {
      id: 'geo2-7-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

Havet tilbyr flere former for fornybar energi. Havvind er den mest modne og kommersielt levedyktige teknologien, med bunnfast og flytende loesninger. Norge satser paa flytende havvind og har aapnet omraadene Utsira Nord og Soerlige Nordsjoeen II. Tidevannsenergi utnytter gravitasjonskraften fra maanen og solen, mens boelgekraft hoester kinetisk energi fra havboelger. Havtermisk energi (OTEC) utnytter temperaturforskjeller, men er kun aktuelt i tropiske strok. Felles for alle er at de representerer fornybare energikilder med betydelig potensial, men ogsaa teknologiske og oekonomiske utfordringer.`,
    },
  ],
  exercises: [
    {
      id: 'geo2-7-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er den stoerste fordelen med havvind sammenlignet med landbasert vindkraft?',
      options: [
        { id: 'a', text: 'Sterkere og jevnere vindforhold', isCorrect: true },
        { id: 'b', text: 'Lavere investeringskostnader', isCorrect: false },
        { id: 'c', text: 'Enklere vedlikehold', isCorrect: false },
        { id: 'd', text: 'Ingen paavirkningpaaa dyreliv', isCorrect: false },
      ],
      solution: 'Havvind gir sterkere og jevnere vind fordi det er mindre friksjon over havoverflaten enn over land. Det er ingen bygninger, skog eller terreng som bremser vinden. Derimot er investeringskostnadene hoeyere og vedlikeholdet mer krevende til havs.',
    },
    {
      id: 'geo2-7-2-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er hovedforskjellen mellom bunnfast og flytende havvind?',
      options: [
        { id: 'a', text: 'Bunnfast staar paa faste fundamenter i grunt farvann, flytende bruker forankrede plattformer i dypt farvann', isCorrect: true },
        { id: 'b', text: 'Bunnfast produserer mer energi enn flytende', isCorrect: false },
        { id: 'c', text: 'Flytende havvind er billigere enn bunnfast', isCorrect: false },
        { id: 'd', text: 'Det er ingen forskjell, bare ulike navn', isCorrect: false },
      ],
      solution: 'Bunnfast havvind bruker faste fundamenter forankret i havbunnen og egner seg for vanndyp opp til 50-60 meter. Flytende havvind bruker flytende strukturer med forankring og kan plasseres paa dyp fra 100 til over 1000 meter. Flytende teknologi aapner opp langt stoerre havomraader for vindkraft.',
    },
    {
      id: 'geo2-7-2-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvordan tidevannsenergi kan utnyttes, og beskriv de to hovedtypene tidevannskraftverk.',
      solution: 'Tidevannsenergi utnytter hoeydeforskjellen og stroemmen som oppstaar ved flo og fjare. De to hovedtypene er: 1) Tidevannsbarrierer, der en demning bygges paa tvers av en bukt. Vann stroemmer gjennom turbiner naar tidevannet stiger og synker. Eksempel: La Rance i Frankrike. 2) Tidevannsstroemturbiner, som er undervanns-turbiner plassert i omraader med sterke tidevannsstroemmer, lignende vindturbiner under vann. Eksempel: MeyGen i Skottland. Barrierer gir mest energi, men har stoerre miljoepaavirkning. Stroemturbiner er mer skonsomme, men produserer mindre energi.',
    },
    {
      id: 'geo2-7-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor OTEC (havtermisk energi) ikke er relevant for Norge.',
      solution: 'OTEC krever en temperaturforskjell paa minst 20 grader C mellom overflatevann og dypvann. I tropiske farvann er overflatetemperaturen 25-30 grader C, mens dypvannet er 4-5 grader C, noe som gir tilstrekkelig temperaturforskjell. I Norge er overflatetemperaturen sjelden over 15-18 grader C om sommeren, og langt lavere resten av aaret. Forskjellen til dypvannet blir dermed altfor liten til at OTEC kan fungere effektivt. OTEC har ogsaa generelt lav virkningsgrad (3-5 %) og svart hoye investeringskostnader.',
    },
    {
      id: 'geo2-7-2-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er Hywind?',
      options: [
        { id: 'a', text: 'Et norsk konsept for flytende havvindturbiner utviklet av Equinor', isCorrect: true },
        { id: 'b', text: 'Et tidevannskraftverk i Nordland', isCorrect: false },
        { id: 'c', text: 'En type boelgekraftteknologi', isCorrect: false },
        { id: 'd', text: 'Et dansk vindkraftselskap', isCorrect: false },
      ],
      solution: 'Hywind er et konsept for flytende havvindturbiner utviklet av det norske selskapet Equinor. Hywind Scotland var verdens foerste flytende vindpark (2017), og Hywind Tampen leverer straum til olje- og gassplattformer i Nordsjoeen. Teknologien er banebrytende fordi den gjor det mulig aa plassere vindturbiner paa dypt vann.',
    },
    {
      id: 'geo2-7-2-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Droeft fordeler og ulemper ved havvind som energikilde for Norge. Inkluder baade tekniske, oekonomiske og miljoerelaterte perspektiver.',
      solution: 'Fordeler: Norge har lange kystlinjer med sterke og jevne vindforhold, spesielt i Nordsjoeen. Flytende havvind passer godt for dype norske farvann. Havvind gir fornybar energi uten direkte CO2-utslipp. Norsk offshorekompetanse fra olje- og gassindustrien kan overfoeres til havvind. Havvind kan skape nye arbeidsplasser i kystsamfunn. Ulemper: Hoye investeringskostnader, spesielt for flytende havvind. Krevende vedlikehold i toeffe vaerforhold. Visuell paavirkningfor kystsamfunn. Paavirkningpaaa sjofugl, sjoopdyr og fiskeri. Stoeypaavirkningunder installasjon. Behov for store mengder kritiske mineraler i turbinene. Kraftoverfoering til land krever lange, kostbare sjokablar. Konklusjon: Havvind representerer en viktig del av energiomstillingen, men kostnadene maa ned og miljoepaavirkningen maa handteres.',
    },
    {
      id: 'geo2-7-2-ex7',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva bestemmer stoerrelsen paa havboelger?',
      options: [
        { id: 'a', text: 'Vindstyrke, vindvarighet og fetch (strekningen vinden blaser over)', isCorrect: true },
        { id: 'b', text: 'Kun tidevannet og maanens gravitasjon', isCorrect: false },
        { id: 'c', text: 'Temperaturen i vannet', isCorrect: false },
        { id: 'd', text: 'Havdybden alene', isCorrect: false },
      ],
      solution: 'Boelgestoerrelsen bestemmes av tre faktorer: vindstyrken (sterkere vind gir stoerre boelger), vindvarigheten (hvor lenge vinden blaser) og fetch (strekningen vinden blaser over uten hindringer). Lengre fetch gir stoerre boelger, noe som forklarer hvorfor kysten mot Atlanterhavet faar stoerre boelger enn beskyttede fjorder.',
    },
  ],
};

// ============================================================================
// Kapittel 7.3: Atmosfaerisk energi
// ============================================================================

export const CHAPTER_GEOFAG_2_7_3: TextbookChapter = {
  id: 'geofag-2-7-3',
  courseId: 'geofag-2',
  chapterNumber: '7.3',
  title: 'Atmosfaerisk energi',
  description: 'Landbasert vindkraft, solenergi og grunnleggende om geotermisk energi.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drofte barekraftig utnytting av energiressurser fra hav og atmosfaere globalt og nasjonalt',
    'gjoere rede for hvordan energi fra sol og vind kan utnyttes',
    'vurdere potensialet for atmosfaeriske energikilder i Norge og globalt',
  ],
  content: [
    {
      id: 'geo2-7-3-intro',
      type: 'text',
      content: `# Atmosfaerisk energi

Atmosfaeren er full av energi i form av vind, solstraaling og temperaturforskjeller. Disse energikildene er fornybare og tilgjengelige over hele kloden, men de varierer med breddegrad, aarstid og vaerforhold. Utfordringen er aa fange opp, konvertere og lagre denne energien effektivt.

## Energi i atmosfaeren

Solen driver nesten alle energiprosesser i atmosfaeren:
- **Vind** oppstaar paa grunn av ulik oppvarming av jordoverflaten
- **Solstraaling** kan fanges direkte av solceller og solfangere
- **Vannkraft** er indirekte solenergi (fordampning og nedbor)
- **Bioenergi** er lagret solenergi gjennom fotosyntesen

Vi ser her naermere paa landbasert vindkraft, solenergi og geotermisk energi.`,
    },
    {
      id: 'geo2-7-3-vindkraft',
      type: 'text',
      content: `## Vindkraft paa land

Vindkraft er en av de raskest voksende energikildene i verden. Moderne vindturbiner konverterer kinetisk energi i vinden til elektrisitet.

### Hvordan fungerer en vindturbin?
1. Vinden faar rotorbladene til aa rotere
2. Rotasjonen overfoeres til en generator via en girkasse (eller direktedrift)
3. Generatoren produserer vekselstroem
4. En transformer oeker spenningen for overfoering til stroemnettet

### Effekt og kapasitet
Effekten en vindturbin kan produsere avhenger av:
- **Vindstyrken**: Effekten oeker med tredjepotensen av vindhastigheten (dobbel vind = 8 ganger saa mye energi)
- **Rotordiameteren**: Stoerre rotor fanger mer vind
- **Navshoeyden**: Hoeyere plassering gir sterkere vind

### Kapasitetsfaktor
En vindturbin produserer sjelden paa full kapasitet. Kapasitetsfaktoren angir gjennomsnittlig produksjon i forhold til maksimal kapasitet:
- Landbasert vindkraft: Ca. 25-35 %
- Havvind: Ca. 40-55 %

### Vindkraft i Norge
Norge har utbygd betydelig vindkraft paa land, spesielt i Troenderlag, Rogaland og Nordland. I 2023 produserte landbasert vindkraft ca. 15 TWh, noe som tilsvarer ca. 10 % av Norges totale kraftproduksjon.`,
    },
    {
      id: 'geo2-7-3-def-kapasitetsfaktor',
      type: 'definition',
      title: 'Kapasitetsfaktor',
      content: 'Kapasitetsfaktoren er forholdet mellom faktisk energiproduksjon over en periode og den teoretisk maksimale produksjonen dersom anlegget gikk paa full kapasitet hele tiden. For vindkraft paa land er kapasitetsfaktoren typisk 25-35 %, fordi vinden varierer og turbinen ikke alltid produserer paa maks.',
    },
    {
      id: 'geo2-7-3-example-vindeffekt',
      type: 'example',
      title: 'Vindeffektens avhengighet av vindhastighet',
      problem: 'En vindturbin produserer 500 kW ved vindhastighet 8 m/s. Hvor mye effekt vil den teoretisk produsere ved 12 m/s?',
      solution: `Effekten fra vind oeker med tredjepotensen av vindhastigheten:

P er proporsjonal med v³

Forholdet mellom effektene:
P₂/P₁ = (v₂/v₁)³ = (12/8)³ = (1.5)³ = 3.375

P₂ = 500 kW x 3.375 = **1688 kW** (ca. 1.7 MW)

En oekning i vindhastighet fra 8 til 12 m/s (50 % oekning) gir altsaa en oekning i effekt paa nesten 238 %. Dette viser hvorfor det er saa viktig aa plassere vindturbiner paa steder med hoey gjennomsnittlig vindhastighet.

Merk: I praksis har turbinen en maksimal effekt den kan levere, og den vil regulere ned ved hoye vindhastigheter.`,
    },
    {
      id: 'geo2-7-3-solenergi',
      type: 'text',
      content: `## Solenergi

Solen leverer enorme mengder energi til jorden. Paa en time mottar jordoverflaten mer solenergi enn hele verdens aarlige energiforbruk.

### Solceller (fotovoltaisk)
Solceller konverterer solstraaling direkte til elektrisitet gjennom den fotovoltaiske effekten.

**Virkemaate:**
1. Sollys treffer solcellen (vanligvis silisium)
2. Fotoner slaar loes elektroner i halvledermaterialet
3. Et elektrisk felt i cellen driver elektronene i en bestemt retning
4. Stroemmen kan brukes direkte eller mates inn paa nettet

**Virkningsgrad:**
- Standard silisiumceller: 18-22 %
- Hoeyeffektive celler (laboratorium): Opptil 47 %
- Prisene har falt med over 90 % siden 2010

### Solfangere (termisk)
Solfangere bruker solstraaling til aa varme opp vann eller luft.
- Brukes til oppvarming av tappevann og rom
- Vanligere i soerlige land, men ogsaa aktuelt i Norge
- Konsentrert solkraft (CSP) bruker speil til aa fokusere solstaalingen

### Solenergi i Norge
Norge har lavere solinnstraaling enn Mellom-Europa og Middelhavet, men:
- Lange sommerdager kompenserer delvis for lav solvinkel
- Lave temperaturer oeker virkningsgraden til solceller
- Solenergi vokser raskt i Norge, baade paa hustak og som bakkemonterte anlegg
- Solceller passer godt sammen med vannkraft (sol om sommeren, vann om vinteren)`,
    },
    {
      id: 'geo2-7-3-def-fotovoltaisk',
      type: 'definition',
      title: 'Fotovoltaisk effekt',
      content: 'Den fotovoltaiske effekten er fenomenet der lys (fotoner) skaper elektrisk spenning i et halvledermateriale. Naar fotoner med tilstrekkelig energi treffer en solcelle av silisium, slaar de loes elektroner som skaper en elektrisk stroem. Dette er grunnlaget for all solcellebasert stromproduksjon.',
    },
    {
      id: 'geo2-7-3-geotermisk',
      type: 'text',
      content: `## Geotermisk energi

Geotermisk energi er varme fra jordens indre. Denne varmen stammer fra radioaktiv nedbrytning i jordskorpen og restvarme fra jordens dannelse.

### Grunnleggende geotermisk energi
- Temperaturen oeker med ca. 25-30 grader C per kilometer ned i jordskorpen (den geotermiske gradienten)
- Paa vulkansk aktive omraader kan gradienten vaere mye hoeyere
- Island utnytter geotermisk energi i stor skala (varme kilder, geysirer)

### Typer geotermisk utnyttelse

**Hoeytemperatur (over 150 grader C):**
- Dampkraftverk med geotermisk damp
- Krever vulkanske omraader eller dype broenner
- Island, Indonesia, USA er stoerst

**Lavtemperatur (under 150 grader C):**
- Fjernvarme og veksthusdrift
- Kan utnyttes paa flere steder

**Grunn geotermisk energi (varmepumpe):**
- Utnytter stabil temperatur 5-15 grader C i bakken
- Varmepumper trekker ut varme om vinteren og avkjoeler om sommeren
- Vanlig i norske boliger og bygg

### Geotermisk energi i Norge
Norge har ikke vulkansk aktivitet, men:
- Varmepumper med bergvarme er svart utbredt
- NTNU forsker paa dype geotermiske broenner (3-5 km)
- Potensialet for dyp geotermisk energi er usikkert i norsk bergrunn`,
    },
    {
      id: 'geo2-7-3-example-sol-vs-vind',
      type: 'example',
      title: 'Sammenligning av sol og vind i Norge',
      problem: 'Sammenlign egenskapene til solenergi og vindkraft som energikilder i Norge.',
      solution: `**Solenergi i Norge:**
- Soerligste deler mottar ca. 800-1000 kWh/m² per aar
- Nordligste deler mottar ca. 600-700 kWh/m² per aar (men med lange sommerdager)
- Mest produksjon fra april til september
- Nesten ingen produksjon i moerkeste vintermånedene (november-januar)
- Passer godt paa hustak og naeringsbygg

**Vindkraft i Norge:**
- Gode vindressurser, spesielt langs kysten og paa fjellplataaer
- Kapasitetsfaktor ca. 30-35 % paa land
- Produserer mest om vinteren naar vinden er sterkest
- Krever store arealer og gir naturinngrep

**Komplementaritet:**
Sol og vind utfyller hverandre godt i Norge. Sol produserer mest om sommeren, vind mest om vinteren. Sammen med vannkraft gir dette et robust kraftsystem. Vannkraften kan fungere som batteri og produsere naar sol og vind er lave.`,
    },
    {
      id: 'geo2-7-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

Atmosfaerisk energi omfatter vindkraft, solenergi og geotermisk energi. Vindkraftens effekt oeker med tredjepotensen av vindhastigheten, og kapasitetsfaktoren for landvind er 25-35 %. Solceller konverterer sollys til strom gjennom den fotovoltaiske effekten, og prisene har falt drastisk. Geotermisk energi utnytter varme fra jordens indre, fra varmepumper i bakken til dampkraftverk i vulkanske omraader. I Norge er vindkraft og vannkraft dominerende fornybare kilder, mens solenergi vokser raskt. Varmepumper er utbredt. De ulike kildene utfyller hverandre gjennom aarstidene og bidrar til et robust energisystem.`,
    },
  ],
  exercises: [
    {
      id: 'geo2-7-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvordan endres effekten fra en vindturbin naar vindhastigheten dobles?',
      options: [
        { id: 'a', text: 'Den oeker med 8 ganger (tredjepotensen)', isCorrect: true },
        { id: 'b', text: 'Den dobles', isCorrect: false },
        { id: 'c', text: 'Den firedobles', isCorrect: false },
        { id: 'd', text: 'Den forblir uendret', isCorrect: false },
      ],
      solution: 'Effekten fra vind er proporsjonal med tredjepotensen av vindhastigheten (P er proporsjonal med v³). Naar vindhastigheten dobles, oeker effekten med 2³ = 8 ganger. Derfor er det saa viktig med gode vindforhold for loennsomheten til vindkraft.',
    },
    {
      id: 'geo2-7-3-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er en typisk kapasitetsfaktor for landbasert vindkraft?',
      options: [
        { id: 'a', text: 'Ca. 25-35 %', isCorrect: true },
        { id: 'b', text: 'Ca. 80-90 %', isCorrect: false },
        { id: 'c', text: 'Ca. 5-10 %', isCorrect: false },
        { id: 'd', text: 'Ca. 60-70 %', isCorrect: false },
      ],
      solution: 'Landbasert vindkraft har en kapasitetsfaktor paa ca. 25-35 %. Dette betyr at en vindturbin paa 3 MW i gjennomsnitt produserer 0.75-1.05 MW. Kapasitetsfaktoren er under 100 % fordi vinden varierer, og turbinen produserer ikke alltid paa maksimal kapasitet. Til sammenligning har havvind 40-55 % og kjernekraft ca. 90 %.',
    },
    {
      id: 'geo2-7-3-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar den fotovoltaiske effekten og hvordan solceller produserer elektrisitet.',
      solution: 'Den fotovoltaiske effekten er prosessen der sollys konverteres direkte til elektrisitet. Solcellen er laget av halvledermateriale, vanligvis silisium. Naar fotoner (lyspartikler) med tilstrekkelig energi treffer cellen, slaar de loes elektroner fra silisiumatomene. Et innebygd elektrisk felt i solcellen (skapt av to lag med ulikt dopet silisium) driver de frigjorte elektronene i en bestemt retning, noe som skaper en elektrisk stroem. Denne likestroemmen omdannes til vekselstroem av en vekselretter foer den mates inn paa stroemnettet.',
    },
    {
      id: 'geo2-7-3-ex4',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er den geotermiske gradienten?',
      options: [
        { id: 'a', text: 'Temperaturoekningen nedover i jordskorpen, ca. 25-30 grader C per km', isCorrect: true },
        { id: 'b', text: 'Trykkoekningen i atmosfaeren', isCorrect: false },
        { id: 'c', text: 'Temperaturfallet med hoeyden i atmosfaeren', isCorrect: false },
        { id: 'd', text: 'Hastigheten til geotermalvann', isCorrect: false },
      ],
      solution: 'Den geotermiske gradienten beskriver hvordan temperaturen oeker naar man gaar dypere ned i jordskorpen. Gjennomsnittet er ca. 25-30 grader C per kilometer, men verdien varierer. I vulkanske omraader kan den vaere mye hoeyere, mens den er lavere i gamle, stabile bergarter som i Norge.',
    },
    {
      id: 'geo2-7-3-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor sol og vind utfyller hverandre godt som energikilder i Norge.',
      solution: 'Sol og vind har ulike sesongprofiler i Norge. Solenergi produserer mest fra april til september, med topp i juni-juli, og nesten ingenting i moerkeste vintermånedene. Vindkraft produserer mest om vinteren naar lavtrykkene er sterkest, og minst om sommeren naar vindforholdene er roligere. Denne komplementariteten betyr at totalpproduksjonen fra sol og vind er jevnere gjennom aaret enn hver kilde alene. Kombinert med vannkraft, som kan reguleres opp og ned etter behov, faar Norge et svart robust kraftsystem med jevn krafttilgang hele aaret.',
    },
    {
      id: 'geo2-7-3-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Droeft fordeler og utfordringer ved stoerstilt utbygging av vindkraft paa land i Norge.',
      solution: 'Fordeler: Norge har gode vindressurser, spesielt langs kysten og paa fjellplataaer. Vindkraft er en fornybar, utslippsfri energikilde som bidrar til aa erstatte fossil energi. Teknologien er moden og kostnadene har falt kraftig. Utbygging kan gi lokale inntekter og arbeidsplasser. Utfordringer: Store naturinngrep med veier, fundamenter og kraftlinjer i urort natur. Paavirkningpaaa fugle- og dyreliv, spesielt rovfugl. Stoeyplager for naermiljoe. Visuell forurensning i fjell- og kystlandskap. Lokale konflikter med reindrift, friluftsliv og turisme. Behovet for aa balansere klimamaal mot naturvern. Etter omfattende lokale protester har tempoet i norsk landvindutbygging gaat ned, og fokuset har dreid mot havvind.',
    },
  ],
};

// ============================================================================
// Kapittel 7.4: Norges energiressurser
// ============================================================================

export const CHAPTER_GEOFAG_2_7_4: TextbookChapter = {
  id: 'geofag-2-7-4',
  courseId: 'geofag-2',
  chapterNumber: '7.4',
  title: 'Norges energiressurser',
  description: 'Vannkraft, petroleumssektoren, energiomstillingen og den norske kontinentalsokkelen.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drofte barekraftig utnytting av energiressurser fra hav og atmosfaere globalt og nasjonalt',
    'gjoere rede for Norges viktigste energiressurser og deres betydning',
    'vurdere Norges rolle i energiomstillingen',
  ],
  content: [
    {
      id: 'geo2-7-4-intro',
      type: 'text',
      content: `# Norges energiressurser

Norge er i en unik energisituasjon. Vi har rikelige mengder av baade fornybare og fossile energiressurser. Vannkraften dekker nesten all innenlands stromproduksjon, samtidig som olje- og gasseksporten gjor Norge til en av verdens stoerste energieksportoerer. Denne doble rollen skaper baade muligheter og dilemmaer i energiomstillingen.

## Norges energimiks

Norges energisystem er preget av:
- **Vannkraft**: Ca. 88 % av stromproduksjonen
- **Vindkraft**: Ca. 10 % av stromproduksjonen (og voksende)
- **Petroleum**: Enorm eksportnaering, men nesten ikke brukt til innenlands strom
- **Termisk kraft**: Svart lite gasskraft og kullkraft (kun Svalbard)

Denne sammensetningen gjor at norsk stromproduksjon er blant de reneste i verden.`,
    },
    {
      id: 'geo2-7-4-vannkraft',
      type: 'text',
      content: `## Vannkraft

Vannkraft er ryggraden i det norske kraftsystemet og har vaert det i over hundre aar.

### Naturgrunnlaget
Norges unike topografi og klima gjor landet ideelt for vannkraft:
- **Nedbor**: Mye nedbor, spesielt paa Vestlandet (1000-3000 mm/aar)
- **Hoeydeforskjeller**: Bratte fjell og dalforer gir stort fallhoyde
- **Breeer og snoemagsiner**: Naturlig lagring av vann
- **Innsjøer**: Mange naturlige vannmagasiner

### Typer vannkraftverk
**Magasinkraftverk:**
- Lagrer vann i store demninger
- Kan regulere produksjonen etter behov
- Eksempel: Blaasjoe-magasinet (Aurland/Laerdal)

**Elvekraftverk:**
- Bruker vannfoeringen i elver uten stoor lagring
- Produserer mest om vaaren og sommeren
- Mindre fleksible enn magasinkraftverk

**Pumpekraftverk:**
- Pumper vann opp i magasin naar stroemmen er billig
- Produserer naar prisen er hoey
- Fungerer som et stort batteri

### Noekkeltall
- Norge har ca. 1750 vannkraftverk
- Total installert kapasitet: Ca. 33 GW
- Normal aarsproduksjon: Ca. 137 TWh
- Utgjoor ca. 88 % av norsk stromproduksjon`,
    },
    {
      id: 'geo2-7-4-def-magasinkraft',
      type: 'definition',
      title: 'Magasinkraftverk',
      content: 'Et magasinkraftverk lagrer vann i et reservoar (magasin) bak en demning. Vannet ledes gjennom roergater ned til turbiner som driver generatorer. Fordelen er at produksjonen kan reguleres etter behov - vannet kan lagres naar ettersporselen er lav og slippes gjennom naar behovet er stort. Norge har mange store magasinkraftverk som gir fleksibilitet i kraftsystemet.',
    },
    {
      id: 'geo2-7-4-example-vannkraft',
      type: 'example',
      title: 'Vannkraft som Europas groenne batteri',
      problem: 'Forklar hvordan norsk vannkraft kan fungere som et batteri for Europa.',
      solution: `Norsk vannkraft med magasinkapasitet kan lagre energi paa en maate som andre fornybare kilder ikke kan. Slik fungerer konseptet:

**Naar det er overskudd i Europa:**
- Naar sol og vind produserer mye i Tyskland og andre land, faller stroemprisen
- Norge kan importere billig straum gjennom mellomlandsforbindelser (kabler)
- Norske vannkraftverk reduserer produksjonen og sparer vann i magasinene

**Naar det er underskudd i Europa:**
- Paa vindstille netter med lite sol oeker stroemprisen
- Norge oeker vannkraftproduksjonen og eksporterer straum
- Magasinene toemmes delvis

**Mellomlandsforbindelser:**
- NordLink til Tyskland (1400 MW)
- North Sea Link til Storbritannia (1400 MW)
- Kablene gjor det mulig aa utveksle store mengder kraft

**Utfordringer:**
- Begrenset magasinkapasitet - kan ikke lagre uendelig
- Hoye stroempriser i Norge naar eksportkapasiteten oeker
- Politisk debatt om avveining mellom eksport og lave innenlandspriser`,
    },
    {
      id: 'geo2-7-4-petroleum',
      type: 'text',
      content: `## Petroleumssektoren

Norsk petroleumsvirksomhet har siden 1970-tallet vaert landets viktigste naering og har skapt enorm velstand.

### Den norske kontinentalsokkelen
Petroleumsressursene finnes paa den norske kontinentalsokkelen, fordelt paa tre hovedomraader:
- **Nordsjoen**: Det eldste og stoerste omraadet, med felt som Johan Sverdrup, Ekofisk og Troll
- **Norskehavet**: Ormen Lange, Norne, Aasta Hansteen
- **Barentshavet**: Snohvit, Goliat, Johan Castberg

### Noekkeltall (ca. 2023)
- Norge er Europas stoerste gassprodusent
- Ca. 4 millioner fat oljeekvivalenter per dag
- Sektoren staar for ca. 40 % av eksportinntektene
- Ca. 200 000 sysselsatte direkte og indirekte
- Statens pensjonsfond utland (Oljefondet) har ca. 15 000 milliarder kroner

### Petroleumspolitikk
Norsk petroleumspolitikk bygger paa:
- Statlig eierskap og kontroll (Equinor, Petoro)
- Skattesystem som sikrer fellesskapet en stor andel av inntektene
- Oljefondet som sparer rikdommen for fremtidige generasjoner
- Strenge sikkerhet- og miljoekrav`,
    },
    {
      id: 'geo2-7-4-energiomstilling',
      type: 'text',
      content: `## Energiomstillingen

Norge staar overfor en omfattende energiomstilling der fossil energi maa fases ut og erstattes med fornybar energi.

### Elektrifisering
En hovedstrategi er aa elektrifisere sektorer som i dag bruker fossilt brensel:
- **Transport**: Elbiler, elektriske ferjer, tog
- **Industri**: Erstatte gass og olje med strom
- **Olje- og gassplattformer**: Strom fra land eller havvind
- **Bygg og oppvarming**: Varmepumper i stedet for oljefyr

### Nye naeringer
Energiomstillingen skaper nye naeringer:
- **Havvind**: Overfoering av offshorekompetanse
- **Hydrogen**: Produksjon av groent hydrogen fra fornybar kraft
- **Batterier og energilagring**: Voksende industri
- **Karbonfangst og -lagring (CCS)**: Lagre CO2 i geologiske formasjoner under havbunnen
- **Kritiske mineraler**: Mulig utvinning av havbunnsmineraler

### Dilemmaer
- Kan Norge baade vaere klimaforkjemper og storstilt olje- og gassprodusent?
- Hvordan sikre arbeidsplasser naar petroleumssektoren fases ned?
- Hvem skal betale for den storstilte omstillingen?
- Konflikter mellom naturvern og utbygging av fornybar energi`,
    },
    {
      id: 'geo2-7-4-def-energiomstilling',
      type: 'definition',
      title: 'Energiomstilling (energitransisjon)',
      content: 'Energiomstillingen er overgangen fra et energisystem basert paa fossile brensler til et system basert paa fornybare energikilder. For Norge innebarer dette elektrifisering av transport, industri og oppvarming, utbygging av havvind og sol, og gradvis nedtrapping av petroleumssektoren. Oljefondet og offshorekompetansen gir Norge gode forutsetninger for omstillingen.',
    },
    {
      id: 'geo2-7-4-example-elektrifisering',
      type: 'example',
      title: 'Elektrifisering av norsk sokkel',
      problem: 'Forklar hva elektrifisering av sokkelen innebarer og droeft fordeler og ulemper.',
      solution: `**Hva er elektrifisering av sokkelen?**
Olje- og gassplattformer bruker i dag gassturbiner til aa produsere egen straum. Elektrifisering betyr aa erstatte disse med strom fra land (via sjokabel) eller fra havvind.

**Fordeler:**
- Reduserer CO2-utslipp fra norsk sokkel med opptil 50 %
- Norsk sokkel staar for ca. 25 % av norske utslipp
- Gjor norsk olje og gass "renere" sammenlignet med konkurrentene
- Oeker ettersporselen etter fornybar kraft

**Ulemper:**
- Svart kostbart (hundrevis av milliarder kroner)
- Oeker stroemforbruket i Norge med 10-15 TWh
- Kan presse opp stroemprisen for norske forbrukere
- Forlenger levetiden til oljefelt i stedet for aa fase dem ut
- Gassturbinene produserer ogsaa varme som brukes paa plattformen

**Konklusjon:**
Elektrifisering er et klimatiltak, men det er omdiskutert om det er den mest effektive bruken av fornybar kraft. Kraften kunne ogsaa brukes til aa erstatte fossil energi i andre sektorer.`,
    },
    {
      id: 'geo2-7-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

Norge har en unik energisituasjon med rikelige vannkraftressurser og en stor petroleumssektor. Vannkraften dekker ca. 88 % av stromproduksjonen og gir et av verdens reneste kraftsystemer. Magasinkraftverk gjor det mulig aa regulere produksjonen og fungere som batteri for Europa. Petroleumssektoren er viktig for norsk oekonomi, men maa gradvis fases ned i takt med energiomstillingen. Elektrifisering av transport, industri og sokkelen er sentrale strategier. Nye naeringer som havvind, hydrogen og karbonfangst skal erstatte petroleumsinntektene. Norge staar overfor vanskelige avveininger mellom oekonomiske interesser, klimamaal og naturvern.`,
    },
  ],
  exercises: [
    {
      id: 'geo2-7-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor stor andel av norsk stromproduksjon kommer fra vannkraft?',
      options: [
        { id: 'a', text: 'Ca. 88 %', isCorrect: true },
        { id: 'b', text: 'Ca. 50 %', isCorrect: false },
        { id: 'c', text: 'Ca. 30 %', isCorrect: false },
        { id: 'd', text: 'Ca. 95 %', isCorrect: false },
      ],
      solution: 'Vannkraft staar for ca. 88 % av norsk stromproduksjon. Vindkraft staar for ca. 10 % og er voksende. Resten kommer fra termisk kraft og andre kilder. Norge har et av verdens reneste kraftsystemer takket vaere vannkraften.',
    },
    {
      id: 'geo2-7-4-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er hovedfordelen med magasinkraftverk sammenlignet med elvekraftverk?',
      options: [
        { id: 'a', text: 'Produksjonen kan reguleres etter behov ved aa lagre vann', isCorrect: true },
        { id: 'b', text: 'De produserer mer energi totalt', isCorrect: false },
        { id: 'c', text: 'De har lavere investeringskostnader', isCorrect: false },
        { id: 'd', text: 'De paavirkere miljoeet mindre', isCorrect: false },
      ],
      solution: 'Magasinkraftverk kan lagre vann i reservoaret og velge naar de produserer stroemm. Dette gir stor fleksibilitet - de kan spare vann naar prisen er lav og produsere naar ettersporselen og prisen er hoey. Elvekraftverk er avhengige av vannfoeringen i elven og kan ikke lagre vann i samme grad.',
    },
    {
      id: 'geo2-7-4-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv de tre hovedomraadene paa norsk kontinentalsokkel og nevn minst ett viktig felt fra hvert omraade.',
      solution: 'De tre hovedomraadene er: 1) Nordsjoen - det eldste og stoerste omraadet med felt som Johan Sverdrup (Norges stoerste oljefelt), Ekofisk (det foerste feltet, paabegynt i 1971) og Troll (Norges stoerste gassfelt). 2) Norskehavet - med felt som Ormen Lange (viktig gassfelt), Norne og Aasta Hansteen. 3) Barentshavet - det nyeste omraadet med felt som Snohvit (Norges foerste LNG-anlegg), Goliat og Johan Castberg. Nordsjoen er mest utbygd, mens Barentshavet er minst utforsket og mest kontroversielt paa grunn av naerhet til saarbare arktiske omraader.',
    },
    {
      id: 'geo2-7-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva som menes med at norsk vannkraft kan fungere som et batteri for Europa.',
      solution: 'Norsk magasinkraft kan lagre energi ved aa holde igjen vann i reservoarene naar det er overskudd av billig sol- og vindkraft i Europa, og produsere naar det er underskudd. Mellomlandsforbindelser som NordLink (til Tyskland) og North Sea Link (til Storbritannia) gjor dette mulig. Naar sol og vind produserer mye, importerer Norge billig straum og sparer vann. Naar det er vindstille og mørkt, eksporterer Norge vannkraft. Slik balanserer norsk vannkraft variasjonene i europeisk fornybar kraftproduksjon.',
    },
    {
      id: 'geo2-7-4-ex5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er hensikten med Statens pensjonsfond utland (Oljefondet)?',
      options: [
        { id: 'a', text: 'Aa spare petroleumsinntekter for fremtidige generasjoner og unngaa overoppheting av norsk oekonomi', isCorrect: true },
        { id: 'b', text: 'Aa finansiere utbygging av nye oljefelt', isCorrect: false },
        { id: 'c', text: 'Aa gi direkte utbetalinger til alle nordmenn', isCorrect: false },
        { id: 'd', text: 'Aa investere utelukkende i fornybar energi', isCorrect: false },
      ],
      solution: 'Oljefondet (Statens pensjonsfond utland) ble opprettet for aa forvalte Norges petroleumsinntekter langsiktig. Formaaletene er aa spare for fremtidige generasjoner (naar oljen tar slutt) og aa unngaa at for mye oljepenger brukes i norsk oekonomi (som ville skapt inflasjon og svaekket andre naeringer, saakalt hollandsk syke). Fondet investerer i aksjer, obligasjoner og eiendom globalt.',
    },
    {
      id: 'geo2-7-4-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Droeft Norges doble rolle som klimanasjon og petroleumsprodusent. Er det mulig aa vaere baade klimaforkjemper og stor olje- og gassprodusent?',
      solution: 'Norge presenterer seg som en ambisioes klimanasjon med hoye klimamaal, karbonnoeytralitet-ambisjon og stor satsing paa elbiler og fornybar energi. Samtidig er Norge Europas stoerste gassprodusent og en betydelig oljeprodusent, med planer om nye letelisenser. Argumenter for at dette er forenlig: Norsk gass erstatter kull i Europa og gir lavere utslipp. Norge bruker inntektene til groen omstilling. Norsk produksjon har lavere utslipp per fat enn mange konkurrenter. Argumenter mot: All fossil energi bidrar til CO2-utslipp uavhengig av opprinnelse. Ny leting er uforenlig med 1.5-gradersmaaletett. Norge tjener paa aa forsinke den globale omstillingen. Det er vanskelig aa be andre land om kutt naar man selv produserer stadig mer. Konklusjon: Det er et genuint dilemma uten enkle svar, og det er viktig aa forstaa baade oekonomiske og klimarelaterte perspektiver.',
    },
  ],
};

// ============================================================================
// Kapittel 7.5: Barekraftig ressursforvaltning
// ============================================================================

export const CHAPTER_GEOFAG_2_7_5: TextbookChapter = {
  id: 'geofag-2-7-5',
  courseId: 'geofag-2',
  chapterNumber: '7.5',
  title: 'Barekraftig ressursforvaltning',
  description: 'Barekraft, sirkulaer oekonomi, mineralressurser, kritiske mineraler og fremtidens energimiks.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drofte barekraftig utnytting av energiressurser fra hav og atmosfaere globalt og nasjonalt',
    'vurdere barekraftig bruk og forvaltning av energi- og mineralressurser',
    'drofte fremtidens energimiks og veien mot et lavutslippssamfunn',
  ],
  content: [
    {
      id: 'geo2-7-5-intro',
      type: 'text',
      content: `# Barekraftig ressursforvaltning

Overgangen til et lavutslippssamfunn krever ikke bare nye energikilder, men ogsaa en ny maate aa tenke om ressursbruk paa. Barekraftig forvaltning handler om aa dekke dagens behov uten aa oedelegge mulighetene for fremtidige generasjoner. Dette gjelder baade energiressurser og de mineralene vi trenger til den groenne teknologien.

## Hva er bærekraft?

FNs Brundtland-kommisjon definerte barekraftig utvikling i 1987 som utvikling som tilfredsstiller behovene til dagens generasjon uten aa oedelegge mulighetene for fremtidige generasjoner til aa tilfredsstille sine behov.

Barekraft har tre dimensjoner:
- **Oekologisk**: Bevare naturmiljoeet og oekosystemene
- **Oekonomisk**: Sikre langsiktig oekonomisk levedyktighet
- **Sosial**: Sikre rettferdighet, helse og velferd for alle`,
    },
    {
      id: 'geo2-7-5-def-barekraft',
      type: 'definition',
      title: 'Barekraftig utvikling',
      content: 'Barekraftig utvikling er utvikling som tilfredsstiller behovene til dagens generasjon uten aa oedelegge mulighetene for fremtidige generasjoner. Begrepet ble definert av Brundtland-kommisjonen i 1987 og omfatter tre dimensjoner: oekologisk, oekonomisk og sosial barekraft. Alle tre maa ivaretas for at utviklingen skal vaere reelt barekraftig.',
    },
    {
      id: 'geo2-7-5-sirkulaer',
      type: 'text',
      content: `## Sirkulaer oekonomi

Den tradisjonelle oekonomien foelger en lineaer modell: ta ut ressurser, produser, bruk og kast. Sirkulaer oekonomi bryter med dette moensteret.

### Prinsipper for sirkulaer oekonomi
1. **Design for holdbarhet**: Produkter lages for aa vare lenger
2. **Gjenbruk og reparasjon**: Forlenge levetiden til produkter
3. **Materialgjenvinning**: Resirkulere materialer til nye produkter
4. **Reduser avfall**: Minimere mengden avfall som oppstaar
5. **Del og leie**: Bruk av produkter i stedet for eierskap

### Sirkulaer oekonomi og energi
Sirkulaer oekonomi er viktig for energisektoren:
- **Vindturbiner**: Resirkulering av rotorblad (glassfiberkompositt) er en stor utfordring
- **Solceller**: Gjenvinning av silisium, soelv og andre materialer
- **Batterier**: Gjenvinning av litium, kobolt og nikkel fra elbilbatterier
- **Olje- og gassinfrastruktur**: Gjenbruk og avvikling av plattformer

### EU og sirkulaer oekonomi
EU har vedtatt en ambisioes handlingsplan for sirkulaer oekonomi som paavirker Norge gjennom EOES-avtalen. Maal inkluderer oekt resirkulering, redusert avfall og krav om oeko-design.`,
    },
    {
      id: 'geo2-7-5-def-sirkulaer',
      type: 'definition',
      title: 'Sirkulaer oekonomi',
      content: 'Sirkulaer oekonomi er et oekonomisk system der produkter og materialer holdes i bruk saa lenge som mulig gjennom gjenbruk, reparasjon, oppgradering og materialgjenvinning. Maaletett er aa minimere avfall og uttak av nye ressurser. Det staar i motsetning til lineaer oekonomi (ta-bruk-kast).',
    },
    {
      id: 'geo2-7-5-example-batterigjenvinning',
      type: 'example',
      title: 'Batterigjenvinning - fra elbil til nytt batteri',
      problem: 'Beskriv prosessen for gjenvinning av elbilbatterier og forklar hvorfor dette er viktig for barekraftig ressursforvaltning.',
      solution: `**Gjenvinningsprosessen:**

1. **Innsamling**: Brukte elbilbatterier samles inn naar de har mistet ca. 20-30 % av kapasiteten
2. **Andre liv**: Mange batterier kan brukes til stasjonaer energilagring (f.eks. i bygg)
3. **Demontering**: Batteripakkene demonteres i moduler og celler
4. **Mekanisk prosessering**: Cellene knuses og sorteres
5. **Hydrometallurgisk behandling**: Kjemiske prosesser skiller ut verdifulle metaller
6. **Gjenbruk av materialer**: Litium, kobolt, nikkel og mangan brukes i nye batterier

**Hvorfor dette er viktig:**
- Reduserer behovet for gruvedrift etter nye materialer
- Kobolt utvinnes ofte under tvilsomme arbeidsforhold i Kongo
- Litiumutvinning krever store mengder vann i toerre omraader
- Gjenvinning reduserer CO2-utslippet fra batteriproduksjon
- Norge har faat selskaper som Hydrovolt som spesialiserer seg paa batterigjenvinning
- EU krever oekende andel gjenvunnet materiale i nye batterier`,
    },
    {
      id: 'geo2-7-5-mineraler',
      type: 'text',
      content: `## Mineralressurser og kritiske mineraler

Det groenne skiftet krever enorme mengder mineraler og metaller som maa utvinnes fra jordskorpen.

### Kritiske mineraler for energiomstillingen
- **Litium**: Batterier (elbiler, energilagring)
- **Kobolt**: Batterier og legeringer
- **Nikkel**: Batterier og rustfritt staal
- **Sjeldne jordarter (REE)**: Permanentmagneter i vindturbiner og elbilmotorer
- **Kobber**: Elektriske ledninger, kabler, generatorer
- **Silisium**: Solceller og halvledere
- **Grafitt**: Batterianoder

### Geopolitiske utfordringer
- Kina dominerer produksjonen av sjeldne jordarter (ca. 60 %) og prosessering (ca. 90 %)
- Kongo staar for ca. 70 % av verdens koboltproduksjon
- Litium utvinnes hovedsakelig i Australia, Chile og Argentina
- Denne konsentrasjonen skaper forsyningsrisiko og geopolitisk saarbarhet

### Havbunnsmineraler
Dyphavet inneholder store mengder mineraler i:
- **Manganknoller**: Paa havbunnen i dyphavsslettene
- **Polymetalliske sulfider**: Ved hydrotermale skorsteiner
- **Koboltrik skorpe**: Paa undersjoeiske fjell

Norge har store omraader med slike forekomster og har aapnet for konsekvensutredning av havbunnsutvinning. Dette er svart kontroversielt paa grunn av ukjent paavirkningpaaa dyehavsmiljoeet.`,
    },
    {
      id: 'geo2-7-5-def-kritiske-mineraler',
      type: 'definition',
      title: 'Kritiske mineraler',
      content: 'Kritiske mineraler er mineraler og metaller som er nødvendige for moderne teknologi og det groenne skiftet, men der forsyningen er usikker paa grunn av geologisk knapphet, geografisk konsentrasjon eller geopolitiske forhold. Eksempler inkluderer litium, kobolt, sjeldne jordarter og grafitt. EU og andre har laget lister over mineraler de anser som kritiske.',
    },
    {
      id: 'geo2-7-5-energimiks',
      type: 'text',
      content: `## Fremtidens energimiks

For aa naa klimamaalene maa verdens energimiks endres dramatisk. Det internasjonale energibyraaet (IEA) har skissert scenarier for veien mot netto null utslipp i 2050.

### Noekkelelementer i fremtidens energisystem
- **Sol og vind**: Vil dominere stromproduksjonen globalt
- **Energilagring**: Batterier, hydrogen, pumpekraft
- **Elektrifisering**: Strom erstatter fossilt brensel i transport, industri og oppvarming
- **Hydrogen**: Groen hydrogen som energibaerer for tunge sektorer
- **Karbonfangst (CCS)**: For industri der utslipp er vanskelig aa unngaa
- **Kjernekraft**: Ny interesse i flere land (SMR - smaa modulaere reaktorer)
- **Bioenergi**: Begrenset rolle, konflikter med matproduksjon og arealbruk

### Norges rolle
Norge kan bidra til den globale energiomstillingen gjennom:
- Eksport av fornybar kraft (havvind, vannkraft)
- Groen hydrogenproduksjon
- CCS-lagring under havbunnen (Northern Lights-prosjektet)
- Kompetanseoverfoering fra olje- og gassindustrien
- Eksempel som et land med naesten helfornybart kraftsystem

### Utfordringer
- Stoerrelsen paa omstillingen er enorm - hele verdens energisystem maa endres
- Mineraltilgangen kan bli en flaskehals
- Fattige land trenger oekt energitilgang, ikke bare renere energi
- Fordelingssporsmaael: Hvem betaler for omstillingen?`,
    },
    {
      id: 'geo2-7-5-example-nordlys',
      type: 'example',
      title: 'Northern Lights - CCS i Norge',
      problem: 'Forklar hva Northern Lights-prosjektet er og hvordan det bidrar til barekraftig ressursforvaltning.',
      solution: `**Northern Lights** er verdens foerste storskala prosjekt for kommersiell CO2-transport og -lagring.

**Slik fungerer det:**
1. CO2 fanges fra industrianlegg i Europa (f.eks. sementfabrikker, avfallsforbrenning)
2. CO2-en komprimeres til flytende form
3. Skipstransport til mottaksanlegg i Oeyygarden ved Bergen
4. CO2-en pumpes gjennom roerledning til et geologisk lager ca. 2600 meter under havbunnen
5. CO2-en lagres permanent i poroes sandstein forseglet av tette bergartslag

**Partnerskap:** Equinor, Shell og TotalEnergies

**Kapasitet:** Fase 1 kan lagre 1.5 millioner tonn CO2 per aar, med mulighet for utvidelse til 5 millioner tonn

**Betydning for barekraft:**
- Gjor det mulig aa kutte utslipp fra industri der det er svart vanskelig aa eliminere CO2 helt
- Utnytter Norges geologiske kompetanse og infrastruktur fra petroleumssektoren
- Skaper en ny naering basert paa eksisterende kompetanse
- Kan bidra til aa naa Europas klimamaal

**Kritikk:**
- Dyrt og energikrevende
- Risiko for at det forsinker reelle utslippskutt
- Ukjent langsiktig sikkerhet for lagring`,
    },
    {
      id: 'geo2-7-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

Barekraftig ressursforvaltning handler om aa balansere energibehov med miljoehensyn og rettferdighet mellom generasjoner. Sirkulaer oekonomi er et sentralt prinsipp for aa redusere ressursbruk og avfall. Det groenne skiftet krever store mengder kritiske mineraler som litium, kobolt og sjeldne jordarter, noe som skaper nye geopolitiske utfordringer og miljoesporsmaaal. Fremtidens energimiks vil domineres av sol, vind og elektrifisering, med hydrogen, CCS og lagringsteknologi som viktige supplementer. Norge har gode forutsetninger for aa bidra til den globale energiomstillingen gjennom vannkraft, havvind, CCS og kompetanseoverfoering. Den stoerste utfordringen er stoerrelsen paa omstillingen og behovet for rettferdig fordeling av kostnadene.`,
    },
  ],
  exercises: [
    {
      id: 'geo2-7-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvem definerte barekraftig utvikling i 1987?',
      options: [
        { id: 'a', text: 'Brundtland-kommisjonen', isCorrect: true },
        { id: 'b', text: 'FNs generalforsamling', isCorrect: false },
        { id: 'c', text: 'IPCC (klimapanelet)', isCorrect: false },
        { id: 'd', text: 'Verdensbanken', isCorrect: false },
      ],
      solution: 'Brundtland-kommisjonen (Verdenskommisjonen for miljoe og utvikling), ledet av Gro Harlem Brundtland, la frem rapporten Vaar felles fremtid i 1987. Der ble barekraftig utvikling definert som utvikling som tilfredsstiller behovene til dagens generasjon uten aa oedelegge mulighetene for fremtidige generasjoner.',
    },
    {
      id: 'geo2-7-5-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er hovedforskjellen mellom lineaer og sirkulaer oekonomi?',
      options: [
        { id: 'a', text: 'Lineaer oekonomi foelger ta-bruk-kast, sirkulaer oekonomi holder materialer i omloep', isCorrect: true },
        { id: 'b', text: 'Lineaer oekonomi er dyrere enn sirkulaer', isCorrect: false },
        { id: 'c', text: 'Sirkulaer oekonomi bruker kun fornybare materialer', isCorrect: false },
        { id: 'd', text: 'Det er ingen reell forskjell, bare ulike begreper', isCorrect: false },
      ],
      solution: 'I lineaer oekonomi folger ressurser en rettlinjet vei: utvinning, produksjon, bruk og avfall. I sirkulaer oekonomi holdes produkter og materialer i bruk saa lenge som mulig gjennom gjenbruk, reparasjon, oppgradering og gjenvinning. Maalet er aa minimere avfall og uttak av nye ressurser, noe som er mer barekraftig.',
    },
    {
      id: 'geo2-7-5-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Nevn fire kritiske mineraler for energiomstillingen og forklar hva de brukes til.',
      solution: 'Fire kritiske mineraler er: 1) Litium - brukes i batterier for elbiler og energilagring. Utvinnes hovedsakelig i Australia, Chile og Argentina. 2) Kobolt - brukes i batterikjemi og legeringer. Ca. 70 % utvinnes i Kongo, ofte under problematiske arbeidsforhold. 3) Sjeldne jordarter (REE) - brukes i permanentmagneter i vindturbiner og elbilmotorer. Kina dominerer produksjonen med ca. 60 %. 4) Kobber - brukes i elektriske ledninger, kabler og generatorer. Essensielt for all elektrifisering. Felles for disse er at forsyningen er konsentrert i faa land, noe som skaper saarbarhet.',
    },
    {
      id: 'geo2-7-5-ex4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er Northern Lights-prosjektet?',
      options: [
        { id: 'a', text: 'Et prosjekt for transport og geologisk lagring av CO2 under havbunnen utenfor Norge', isCorrect: true },
        { id: 'b', text: 'Et havvindprosjekt i Barentshavet', isCorrect: false },
        { id: 'c', text: 'Et program for utvinning av havbunnsmineraler', isCorrect: false },
        { id: 'd', text: 'Et hydrogenprosjekt i Nord-Norge', isCorrect: false },
      ],
      solution: 'Northern Lights er verdens foerste storskala prosjekt for kommersiell CO2-transport og -lagring (CCS). CO2 fanges fra industrianlegg i Europa, transporteres med skip til Oeyygarden ved Bergen, og pumpes ned i geologiske formasjoner ca. 2600 meter under havbunnen for permanent lagring. Prosjektet er et samarbeid mellom Equinor, Shell og TotalEnergies.',
    },
    {
      id: 'geo2-7-5-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor utvinning av havbunnsmineraler er kontroversielt.',
      solution: 'Utvinning av havbunnsmineraler er kontroversielt av flere grunner: 1) Ukjent miljoepaavirkning - dyphavsoekosystemene er lite utforsket, og vi vet lite om langtidskonsekvensene av gruvedrift. 2) Unik fauna - hydrotermale skorsteiner huser unike livsformer som ikke finnes andre steder. 3) Sedimentspredning - gruvedrift kan virvle opp sedimenter som legger seg over store omraader og kveler liv paa havbunnen. 4) Irreversible skader - dyphavsoekosystemer vokser svart sakte, og skader kan ta hundrevis av aar aa reparere. 5) Alternativer - bedre gjenvinning og sirkulaer oekonomi kan redusere behovet. Paa den andre siden argumenteres det for at mineralene trengs for det groenne skiftet, og at alternativene (landbasert gruvedrift) ogsaa har store miljoekostnader.',
    },
    {
      id: 'geo2-7-5-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Droeft hvordan Norge kan bidra til den globale energiomstillingen. Inkluder baade muligheter og utfordringer.',
      solution: 'Muligheter: Norge har et nesten helfornybart kraftsystem basert paa vannkraft som kan vaere et forbilde. Norsk offshorekompetanse kan overfoeres til havvind, og landet har aapnet store omraader for havvindutbygging. Groen hydrogenproduksjon fra fornybar kraft kan eksporteres. CCS-prosjektet Northern Lights kan lagre CO2 fra europeisk industri. Oljefondet gir oekonomisk handlefrihet. Norsk naturforvaltning og teknologisk kompetanse er verdifull. Utfordringer: Norge er fortsatt en stor olje- og gassprodusent, noe som skaper troverdighetsprobler. Energiomstillingen krever enorme investeringer. Konflikter mellom utbygging av fornybar energi og naturvern. Tap av arbeidsplasser i petroleumssektoren maa handteres. Oekningen i stroomforbruk fra elektrifisering krever stor ny kraftproduksjon. Fordelingssporsmaael - hvem betaler for omstillingen - maa loeses rettferdig baade nasjonalt og internasjonalt.',
    },
    {
      id: 'geo2-7-5-ex7',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilke tre dimensjoner har barekraftig utvikling?',
      options: [
        { id: 'a', text: 'Oekologisk, oekonomisk og sosial', isCorrect: true },
        { id: 'b', text: 'Teknologisk, politisk og kulturell', isCorrect: false },
        { id: 'c', text: 'Lokal, nasjonal og global', isCorrect: false },
        { id: 'd', text: 'Fortid, naatid og fremtid', isCorrect: false },
      ],
      solution: 'Barekraftig utvikling har tre dimensjoner: oekologisk (bevare naturmiljoeet), oekonomisk (sikre langsiktig oekonomisk levedyktighet) og sosial (sikre rettferdighet, helse og velferd). Alle tre maa ivaretas samtidig for at utviklingen skal vaere reelt barekraftig. Man kan ikke ofre miljoeet for oekonomisk vekst, eller sosial rettferdighet for miljoehensyn.',
    },
    {
      id: 'geo2-7-5-ex8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Vurder om sirkulaer oekonomi alene kan loese utfordringene knyttet til kritiske mineraler for energiomstillingen.',
      solution: 'Sirkulaer oekonomi kan redusere, men neppe loese, mineralutfordringen alene. Paa den positive siden kan oekt gjenvinning av batterier, solceller og vindturbiner tilfoere verdifulle materialer tilbake til produksjonskjeden. Bedre produktdesign kan oeke levetiden og redusere materialbruken. Gjenbruk av elbilbatterier til stasjonaer lagring forlenger nytten. Imidlertid er det flere begrensninger: Ettersporselen etter mineraler vokser saa raskt at gjenvinning ikke kan dekke behovet paa kort sikt. Det tar 10-15 aar foer de foerste store mengdene elbilbatterier er klare for gjenvinning. Gjenvinningsprosessene er energikrevende og klarer ikke aa gjenvinnne 100 % av materialene. Noen materialer degraderes ved gjenvinning. Konklusjon: Sirkulaer oekonomi er nødvendig og viktig, men det trengs ogsaa ny gruvedrift, utvikling av alternative materialer (f.eks. natriumionbatterier i stedet for litium) og redusert forbruk for aa loese utfordringen helhetlig.',
    },
  ],
};

// ============================================================================
// Samle alle Del 7-kapitler
// ============================================================================

export const GEOFAG_2_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_GEOFAG_2_7_1, CHAPTER_GEOFAG_2_7_2, CHAPTER_GEOFAG_2_7_3, CHAPTER_GEOFAG_2_7_4, CHAPTER_GEOFAG_2_7_5,
];

export function getGeofag2Del7Chapter(chapterId: string): TextbookChapter | undefined {
  return GEOFAG_2_DEL7_CHAPTERS.find(chapter => chapter.id === chapterId);
}
