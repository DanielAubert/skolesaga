/**
 * Naturfag VG1 - Kapittel 5.3: Forurensning og miljøproblemer
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_NAT_VG1_5_3: TextbookChapter = {
  id: 'nat-vg1-5-3',
  courseId: 'nat-vg1',
  chapterNumber: '5.3',
  title: 'Forurensning og miljøproblemer',
  description: 'Lær om luftforurensning, vannforurensning, plastforurensning, forsuring og andre miljøproblemer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive ulike typer forurensning og deres kilder',
    'forklare hvordan forurensning påvirker mennesker og miljø',
    'vurdere tiltak for å redusere forurensning',
    'forklare plastforurensningens omfang og konsekvenser',
    'beskrive forsuring av hav og nedbør',
  ],
  content: [
    {
      id: 'nat-vg1-5-3-intro',
      type: 'text',
      content: `# Forurensning og miljøproblemer

Forurensning er utslipp av skadelige stoffer til luft, vann eller jord som skader mennesker, dyr, planter og økosystemer.

**Menneskelig aktivitet** er hovedkilden til forurensning:
- Industri
- Transport
- Landbruk
- Husholdninger

**Konsekvenser:**
- Helseproblemer (kreft, luftveissykdommer)
- Død av dyr og planter
- Forgiftning av økosystemer
- Økonomiske tap

I dette kapittelet ser vi på:
- Luftforurensning
- Vannforurensning
- Plastforurensning
- Forsuring
- Tiltak mot forurensning`,
    },
    {
      id: 'nat-vg1-5-3-def-forurensning',
      type: 'definition',
      title: 'Forurensning',
      content: 'Tilførsel av stoffer eller energi til miljøet som har skadelige effekter på mennesker, dyr, planter eller økosystemer. Forurensning kan være kjemisk (stoffer), biologisk (bakterier) eller fysisk (støy, lys, stråling).',
    },
    {
      id: 'nat-vg1-5-3-luftforurensning',
      type: 'text',
      content: `# Luftforurensning

Luftforurensning er utslipp av skadelige gasser og partikler til atmosfæren.

## Hovedkilder til luftforurensning

**1. Transport (biler, fly, skip)**
- Forbrenning av bensin og diesel
- Slipper ut NOₓ, PM, CO, VOC

**2. Industri og energiproduksjon**
- Kullkraftverk, fabrikker, raffinerier
- Slipper ut SO₂, NOₓ, PM, CO₂

**3. Oppvarming av bygninger**
- Vedfyring, oljefyring
- Slipper ut PM (sot), CO, VOC

**4. Landbruk**
- Ammoniakk (NH₃) fra gjødsel
- Metan (CH₄) fra husdyr

---

## Viktige luftforurensende stoffer

### 1. Partikler (PM - Particulate Matter)

**Hva:** Små partikler av sot, støv, metaller

**Typer:**
- **PM10:** Partikler < 10 μm (tusendels millimeter)
- **PM2.5:** Partikler < 2,5 μm (mye farligere)

**Kilder:**
- Bileksos (spesielt diesel)
- Vedfyring
- Industri
- Slitasje av dekk og bremser

**Helseeffekter:**
- Trenger inn i lungene
- PM2.5 trenger inn i blodet
- Luftveissykdommer (astma, KOLS)
- Hjerte- og karsykdommer
- Kreft
- Premature dødsfall

**Tall:** 7 millioner mennesker dør årlig av luftforurensning (WHO)

---

### 2. Nitrogenoksider (NOₓ)

**Hva:** NO (nitrogenmonoksid) og NO₂ (nitrogendioksid)

**Kilder:**
- Bileksos (spesielt diesel)
- Kraftverk
- Industri

**Dannelse:** Ved høye temperaturer reagerer nitrogen (N₂) og oksygen (O₂):
$$\\text{N}_2 + \\text{O}_2 \\rightarrow 2\\text{NO}$$
$$2\\text{NO} + \\text{O}_2 \\rightarrow 2\\text{NO}_2$$

**Effekter:**
- Irriterer luftveiene
- Bidrar til sur nedbør
- Danner **ozon** (O₃) nær bakken (giftig)
- Bidrar til **smog**

---

### 3. Svoveldioksid (SO₂)

**Kilder:**
- Kullkraftverk (kull inneholder svovel)
- Industri (smelting av metaller)
- Skip (tungolje)

**Dannelse:** Svovel i brensel oksideres:
$$\\text{S} + \\text{O}_2 \\rightarrow \\text{SO}_2$$

**Effekter:**
- Irriterer luftveiene
- Bidrar til **sur nedbør** (omdannes til svovelsyre H₂SO₄)
- Skader planter og bygninger

**Tiltak:** Svovel fjernes fra drivstoff (lavsvoveldiesel)

---

### 4. Karbonmonoksid (CO)

**Kilder:**
- Ufullstendig forbrenning (biler, vedfyring)

**Helseeffekter:**
- Giftig! (binder seg til hemoglobin i blodet)
- Reduserer oksygentransport
- Kan være dødelig i høye konsentrasjoner

**Forebygging:** God ventilasjon, korrekt forbrenning

---

### 5. Flyktige organiske forbindelser (VOC)

**Hva:** Organiske gasser (benzen, toluen, formaldehyd)

**Kilder:**
- Bensin (fordamping)
- Maling, løsemidler
- Industri

**Effekter:**
- Kreftfremkallende (spesielt benzen)
- Bidrar til ozon-dannelse (smog)

---

## Smog

**Hva:** Tett, synlig luftforurensning

**Fotokjemisk smog:**
- Dannes når NOₓ og VOC reagerer i sollys
- Produserer ozon (O₃) nær bakken
- Irriterer øyne og luftveier
- Vanlig i byer med mye sol og trafikk (Los Angeles, Beijing)

**Vintertåkesmog:**
- Sot og partikler samles i kald luft
- Historisk problem (London 1952: 4000 døde)
- Mindre vanlig i dag pga. renere energi

---

## Tiltak mot luftforurensning

**1. Renere transport**
- Elbiler, el-busser
- Bedre kollektivtransport
- Sykkelveier, gange

**2. Ren energi**
- Fase ut kull og olje
- Bruk fornybar energi

**3. Bedre forbrenning**
- Moderne ovner (bedre forbrenning av ved)
- Forbud mot gammel vedfyring

**4. Utslippskrav**
- Katalysator i biler (reduserer NOₓ, CO)
- Partikkelfilter (diesel)
- Utslippsgrenser for fabrikker

**5. Bybeplantning**
- Trær filtrerer partikler
- Grønne arealer reduserer forurensning`,
    },
    {
      id: 'nat-vg1-5-3-vannforurensning',
      type: 'text',
      content: `# Vannforurensning

Vannforurensning er tilførsel av skadelige stoffer til elver, innsjøer og hav.

## Kilder til vannforurensning

### 1. Punktkilder (konsentrerte utslipp)

**Kloakk og avløpsvann:**
- Husholdninger, byer
- Inneholder bakterier, virus, næringsstoffer
- Krever renseanlegg

**Industri:**
- Kjemikalier, tungmetaller, varmt vann
- Må renses før utslipp

**Landbruk:**
- Gjødsel og kjemikalier fra gårder
- Renner ut i elver

---

### 2. Diffuse kilder (spredte utslipp)

**Overflateavrenning:**
- Regn vasker forurensning fra jord, veier, byer
- Olje, partikler, salt, tungmetaller

**Landbruk:**
- Gjødsel og plantevernmidler fra åkrer
- Vanskelig å kontrollere

---

## Typer vannforurensning

### 1. Næringsstoffer (eutrofiering)

**Hva:** Overgjødsling av vann

**Kilder:**
- Gjødsel fra landbruk (nitrogen, fosfor)
- Kloakk (fosfor fra vaskemidler)

**Prosess:**

**1. Tilførsel av næringsstoffer**
- Nitrogen (N) og fosfor (P) renner ut i vann

**2. Algeoppblomstring**
- Alger vokser raskt (mye næring)
- Grønt, grumsete vann

**3. Algene dør**
- Alger synker til bunns

**4. Nedbrytning**
- Bakterier bryter ned alger
- Bruker oksygen (O₂)

**5. Oksygenmangel**
- Fisk og andre dyr dør
- "Dødt" vann

**Eksempler:**
- Norske innsjøer (noen er overgjødslet)
- Østersjøen (stort problem)

**Tiltak:**
- Redusere gjødselbruk
- Renseanlegg (fjerne fosfor)
- Buffersoner (vegetasjon mellom åker og vann)

---

### 2. Kjemikalier og tungmetaller

**Kilder:**
- Industri (gruvedrift, produksjon)
- Avfall (elektronikk, batterier)

**Eksempler:**
- **Kvikksølv (Hg):** Giftig, samler seg i fisk
- **Bly (Pb):** Giftig, skader nervesystemet
- **Kadmium (Cd):** Kreftfremkallende

**Effekter:**
- Forgifter dyr og planter
- Bioakkumulering (oppkonsentreres i næringskjeden)
- Mennesker blir syke ved å spise forurenset fisk

**Tiltak:**
- Strengere reguleringer
- Rense industriavløp
- Gjenvinning av farlig avfall

---

### 3. Mikroplast

**Hva:** Små plastpartikler < 5 mm

**Kilder:**
- Nedbrytning av større plastgjenstander
- Klesfibre (syntetiske tekstiler)
- Kosmetikk (mikroperler)
- Bildekk (slitasje)

**Omfang:**
- Finnes i havet, innsjøer, elver, drikkevann
- Også i mat (fisk, salt, øl)

**Effekter:**
- Dyr spiser mikroplast (tror det er mat)
- Kjemikalier fra plast frigis i kroppen
- Kan blokkere fordøyelsessystemet
- Langsiktige helseeffekter ukjent

**Tiltak:**
- Redusere plastbruk
- Bedre filtrering i renseanlegg
- Forbud mot mikroperler

---

### 4. Bakterier og virus

**Kilder:**
- Kloakk (dårlige eller ingen renseanlegg)
- Dyregjødsel

**Effekter:**
- Sykdommer (kolera, hepatitt, mage-tarm)
- Stenging av badestrender

**Tiltak:**
- Renseanlegg (UV-lys dreper bakterier)
- Klorinering av drikkevann

---

### 5. Varmt vann (termisk forurensning)

**Kilder:**
- Kraftverk (kjøling)
- Industri

**Effekter:**
- Varmt vann holder mindre oksygen
- Fisk og andre dyr lider
- Endrer økosystemet

---

## Tiltak mot vannforurensning

**1. Renseanlegg**
- Mekanisk rensing (filtrering)
- Biologisk rensing (bakterier bryter ned organisk materiale)
- Kjemisk rensing (fjerne fosfor, tungmetaller)

**2. Redusere utslipp**
- Mindre bruk av gjødsel og plantevernmidler
- Strengere krav til industri
- Bedre håndtering av avfall

**3. Buffersoner**
- Vegetasjon langs elver og innsjøer
- Filtrerer næringsstoffer og partikler

**4. Resirkulering**
- Gjenvinning av farlig avfall
- Redusere plastbruk`,
    },
    {
      id: 'nat-vg1-5-3-plast',
      type: 'text',
      content: `# Plastforurensning

Plast er et av vår tids største miljøproblemer. Vi produserer over **400 millioner tonn plast årlig**, og mye havner i naturen.

## Hvorfor er plast et problem?

**1. Ikke-bionedbrytbart**
- Plast brytes IKKE ned biologisk
- Kan ligge i naturen i **hundrevis til tusenvis av år**
- Blir bare til mindre og mindre biter (mikroplast)

**2. Produseres av olje**
- Plastproduksjon bruker fossilt brennstoff
- Bidrar til klimagassutslipp

**3. Engangsbruk**
- Mye plast brukes bare én gang (emballasje, poser)
- Kastes etter kort tid

---

## Plastforurensning i havet

**Omfang:**
- **8-12 millioner tonn plast** havner i havet hvert år
- **150 millioner tonn** plast i havet allerede
- Innen 2050: Mer plast enn fisk (vekt) i havet

**Kilder:**
- Søppel fra land (80%)
- Fiskeredskaper (nett, liner)
- Skip

**"Søppeltepper" i havet:**
- **Great Pacific Garbage Patch:** Område større enn Frankrike!
- Havstrømmer samler plast
- Flyter under overflaten

---

## Konsekvenser av plastforurensning

### For dyr

**Havdyr:**
- Spiser plast (tror det er mat)
- Blokkerer fordøyelsessystemet → dør av sult
- Vikler seg inn i plastposer, nett → drukner

**Fugler:**
- Albatrosser fôrer unger med plast
- Unger dør av sult

**Tall:** Over 1 million sjøfugler og 100 000 marine pattedyr dør årlig av plast

---

### For mennesker

**Mikroplast i mat:**
- Fisk spiser mikroplast
- Vi spiser fisken
- Gjennomsnittlig: 5 gram plast per uke (et kredittkort!)

**Kjemikalier:**
- Plast inneholder tilsetningsstoffer (ftalater, BPA)
- Kan virke hormonforstyrende
- Helseeffekter under forskning

---

## Typer plast og resirkulering

**Vanlige plasttyper:**
- **PET (1):** Vannflasker (lett å resirkulere)
- **HDPE (2):** Melkekartonger (lett å resirkulere)
- **PVC (3):** Rør (vanskelig å resirkulere)
- **LDPE (4):** Plastposer (kan resirkuleres)
- **PP (5):** Matbokser (kan resirkuleres)
- **PS (6):** Polystyren, flamingo (vanskelig)

**Utfordring:**
- Kun **9% av all plast** er resirkulert globalt
- Mye plast brennes eller havner på søppelfyllinger
- Nedbrytning til mikroplast

---

## Tiltak mot plastforurensning

### Individuelt

**1. Redusere plastbruk (reduce)**
- Bruk gjenbruksposer i butikken
- Velg produkter uten unødvendig emballasje
- Unngå engangsplast (sugerør, bestikk, kopper)

**2. Gjenbruk (reuse)**
- Bruk produkter flere ganger
- Kjøp brukt

**3. Resirkulere (recycle)**
- Kast plast i riktig beholder
- Pant flasker og bokser

---

### Samfunnsnivå

**1. Forbud mot engangsplast**
- EU: Forbud mot engangsbestikk, sugerør, q-tips
- Norge: Forbud mot mikroperler i kosmetikk

**2. Produsentansvar**
- Produsenter må ta ansvar for avfall
- Panteordning

**3. Bedre avfallshåndtering**
- Bedre innsamling (spesielt utviklingsland)
- Moderne gjenvinningsanlegg

**4. Alternativer til plast**
- Bioplast (laget av planter)
- Papir, bambus, glass
- Merk: Må være bærekraftig produsert

**5. Opprydding**
- The Ocean Cleanup (fjerner plast fra havet)
- Strandrydding
- Filtre i elver (stopper plast før det når havet)

---

## Sirkulær økonomi for plast

**Mål:** Holde plast i kretsløp, unngå at det havner i naturen

**Prinsipper:**
1. **Design:** Produkter designes for gjenbruk og resirkulering
2. **Bruk:** Bruk lengst mulig
3. **Innsamling:** All plast samles inn
4. **Resirkulering:** Plast omdannes til nye produkter
5. **Minimal lekkasje:** Ingenting havner i naturen`,
    },
    {
      id: 'nat-vg1-5-3-forsuring',
      type: 'text',
      content: `# Forsuring

## Sur nedbør

**Hva:** Nedbør (regn, snø) med lavere pH enn normalt

**Normal pH:** ~5,6 (svakt sur pga. CO₂ i luft)

**Sur nedbør:** pH < 5,6 (ofte pH 4-5)

---

**Årsaker:**

**1. Svoveldioksid (SO₂)**
- Fra forbrenning av kull og olje (inneholder svovel)
- Reagerer med vann i atmosfæren:
$$\\text{SO}_2 + \\text{H}_2\\text{O} \\rightarrow \\text{H}_2\\text{SO}_3 \\text{ (syrlig svovel)}$$
$$\\text{H}_2\\text{SO}_3 + \\frac{1}{2}\\text{O}_2 \\rightarrow \\text{H}_2\\text{SO}_4 \\text{ (svovelsyre)}$$

**2. Nitrogenoksider (NOₓ)**
- Fra bileksos og kraftverk
- Reagerer med vann:
$$2\\text{NO}_2 + \\text{H}_2\\text{O} \\rightarrow \\text{HNO}_3 + \\text{HNO}_2 \\text{ (salpetersyre)}$$

**Resultat:** Syre faller som nedbør

---

**Effekter:**

**På skog:**
- Skader blader og bartrær
- Utvasker næringsstoffer fra jord
- Frigjør giftig aluminium (skader røtter)
- Tresykdommer og død

**På innsjøer:**
- pH synker
- Fisk dør (spesielt ørret og laks)
- Mange norske innsjøer ble forsuret (1970-80-tallet)

**På bygninger:**
- Sur nedbør løser opp kalkstein, marmor
- Historiske bygninger og statuer skades

---

**Tiltak:**

**1. Redusere utslipp**
- Fjerne svovel fra drivstoff (lavsvoveldiesel)
- Røykgassrensing på kraftverk
- Katalysatorer i biler (reduserer NOₓ)

**2. Kalke innsjøer**
- Tilsette kalk (CaCO₃) nøytraliserer syre
- Midlertidig løsning (må gjentas)
- Norge: Kalker fortsatt mange innsjøer

**Suksess:** Sur nedbør i Norge er redusert med 70% siden 1980!

---

## Havforsuring

**Hva:** Havet blir surere pga. CO₂-opptak

**Prosess:**

**1. CO₂ løses i havet**
- Ca. 25% av menneskeskapt CO₂ tas opp av havet
- Dette er positivt (mindre CO₂ i atmosfæren)

**2. Kjemisk reaksjon**
$$\\text{CO}_2 + \\text{H}_2\\text{O} \\rightarrow \\text{H}_2\\text{CO}_3 \\text{ (karbonsyre)}$$
$$\\text{H}_2\\text{CO}_3 \\rightarrow \\text{H}^+ + \\text{HCO}_3^-$$

**3. pH synker**
- Flere hydrogenioner (H⁺) = surere
- pH har sunket fra 8,2 til 8,1 siden førindustriell tid
- Høres lite ut, men pH er logaritmisk (30% økning i surhet!)

---

**Effekter:**

**1. Korallrev**
- Koraller bygger skjelett av kalsiumkarbonat (CaCO₃)
- Surt vann løser opp kalsiumkarbonat
- Koraller vokser saktere, blir svakere
- Korallbleking og død
- 50% av korallrev kan dø innen 2050

**2. Skjelldyr**
- Muslinger, østers, snegler, krepsdyr
- Vanskeligere å danne skall
- Larver dør

**3. Næringskjeden**
- Plankton (grunnlaget for havets næringskjede) påvirkes
- Kan kollapse hele økosystemer

**4. Fiskerier**
- Færre fisk pga. påvirkning på næringskjeden
- Økonomiske tap

---

**Tiltak:**

**Eneste løsning:** Redusere CO₂-utslipp globalt

- Fase ut fossile brensler
- Overgang til fornybar energi

**Merk:** Det tar hundrevis år før havet gjenoppretter pH, selv om vi stopper utslipp nå.`,
    },
    {
      id: 'nat-vg1-5-3-note',
      type: 'note',
      title: 'Forurensning og helse',
      content: `**Forurensning er en av de største truslene mot folkehelsen:**

**Luftforurensning:**
- 7 millioner dødsfall årlig (WHO)
- Luftveissykdommer, kreft, hjerte- og karsykdommer

**Vannforurensning:**
- 2 millioner dødsfall årlig (spesielt barn i utviklingsland)
- Diaré, kolera, hepatitt

**Kjemikalier:**
- Kreft, hormonf orstyrrelser, nevrologiske skader

**De fattigste rammes hardest** - de har ofte dårligere tilgang til rent vann og luft.`,
    },
  ],
  exercises: [
    {
      id: 'nat-vg1-5-3-ex-1',
      number: '1',
      type: 'classic',
      difficulty: 'lett',
      task: 'Hva er forskjellen mellom punktkilder og diffuse kilder til forurensning? Gi ett eksempel på hver.',
      solution: `**Punktkilder:**

**Definisjon:** Forurensning som kommer fra en **konsentrert, identifiserbar kilde**.

**Egenskaper:**
- Lett å lokalisere
- Lett å kontrollere og regulere
- Utslipp fra et bestemt sted

**Eksempler:**
- **Fabrikk:** Utslipp av kjemikalier fra en skorstein eller avløpsrør
- Renseanlegg (kloakk)
- Oljeplattform

**Tiltak:** Rensing av utslipp, strenge reguleringer, bøter

---

**Diffuse kilder:**

**Definisjon:** Forurensning som kommer fra **mange spredte kilder** over et stort område.

**Egenskaper:**
- Vanskelig å lokalisere
- Vanskelig å kontrollere
- Utslipp fra mange steder samtidig

**Eksempler:**
- **Landbruk:** Gjødsel og plantevernmidler fra mange gårder renner ut i elver
- Biltrafikk (utslipp fra tusenvis av biler)
- Overflateavrenning (regn vasker forurensning fra veier, parkeringsplasser)

**Tiltak:** Generelle tiltak (redusere gjødselbruk, bedre kollektivtransport, buffersoner)

---

**Sammenligning:**

| Type | Punktkilde | Diffus kilde |
|------|-----------|--------------|
| **Kilde** | Én identifiserbar | Mange spredte |
| **Eksempel** | Fabrikk | Landbruk |
| **Kontroll** | Lett | Vanskelig |
| **Tiltak** | Rensing av utslipp | Generelle tiltak |

---

**Konklusjon:** Punktkilder er lettere å håndtere fordi man vet hvor forurensningen kommer fra. Diffuse kilder krever bredere tiltak.`,
      hints: ['Tenk på om forurensningen kommer fra ett sted eller mange steder'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-5-3-ex-2',
      number: '2',
      type: 'classic',
      difficulty: 'lett',
      task: 'Forklar prosessen som fører til eutrofiering (overgjødsling) av innsjøer. Hva er konsekvensene?',
      solution: `**Eutrofiering (overgjødsling av innsjøer):**

---

**Prosessen:**

**1. Tilførsel av næringsstoffer**
- **Nitrogen (N)** og **fosfor (P)** renner ut i innsjøen
- Kilder: Gjødsel fra landbruk, kloakk fra husholdninger

**2. Algeoppblomstring**
- Algene får mye næring og vokser raskt
- Massiv vekst av alger (oppblomstring)
- Vannet blir grønt og grumsete

**3. Algene dør**
- Etter en tid dør algene
- Synker til bunns av innsjøen

**4. Nedbrytning**
- Bakterier bryter ned døde alger
- Bakteriene bruker **oksygen (O₂)** i nedbrytningsprosessen

**5. Oksygenmangel**
- Oksygenet i vannet brukes opp
- Fisk og andre vannlevende dyr får ikke nok oksygen
- **Fisk og andre organismer dør**
- Bunnen av innsjøen blir "død" (ingen liv)

---

**Illustrasjon:**
$$\\text{Næringsstoffer} \\rightarrow \\text{Algeoppblomstring} \\rightarrow \\text{Alger dør} \\rightarrow \\text{Nedbrytning} \\rightarrow \\text{Oksygenmangel} \\rightarrow \\text{Død}$$

---

**Konsekvenser:**

**For økosystemet:**
- Fisk dør (oksygenmangel)
- Artsmangfoldet reduseres drastisk
- Innsjøen blir "død" (lite liv)
- Lukt av råtne alger

**For mennesker:**
- Kan ikke bade (bakterier, giftige alger)
- Fiske ikke mulig
- Dårlig drikkevann (må renses)
- Tap av rekreasjonsverdi

**For økonomi:**
- Fiskerier rammes
- Turisme reduseres
- Kostbar opprydding (kalking, mudring)

---

**Tiltak:**

**Forebygging:**
- Redusere bruk av kunstgjødsel i landbruket
- Renseanlegg fjerner fosfor fra kloakk
- Buffersoner (vegetasjon mellom åker og innsjø filtrerer næringsstoffer)

**Reparasjon:**
- Mudring (fjerne sedimenter med næringsstoffer)
- Oksygenering (pumpe oksygen til bunnen)
- Stoppe tilførsel av næringsstoffer

---

**Eksempler:**
- Mjøsa (Norge) var kraftig overgjødslet på 1970-tallet, men er bedre nå
- Østersjøen har store problemer med eutrofiering`,
      hints: ['Tenk på hva som skjer når det er for mye næring i vannet', 'Hva gjør bakterier når de bryter ned alger?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-5-3-ex-3',
      number: '3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv tre konsekvenser av plastforurensning i havet. Hvordan påvirker det både dyr og mennesker?',
      solution: `**Tre konsekvenser av plastforurensning i havet:**

---

**1. Dyr spiser plast og dør**

**Hva skjer:**
- Marine dyr (fisk, skilpadder, fugler, hvaler) spiser plastbiter
- De **tror plast er mat** (ser ut som maneter, fisk, etc.)
- Plast samles i magesekken

**Konsekvenser for dyret:**
- **Blokkering av fordøyelsessystemet:** Plast kan ikke fordøyes
- Dyret føler seg mett (magen er full), men får ingen næring
- **Dør av sult** selv om magen er full
- Kan også kveles eller skades internt

**Eksempler:**
- Albatrosser fôrer unger med plast (tror det er fisk)
- Havskil padder spiser plastposer (ser ut som maneter)
- Kaskelottval funnet død med 30 kg plast i magen

**Tall:** Over 1 million sjøfugler og 100 000 marine pattedyr dør årlig av plastforurensning

---

**2. Mikroplast i næringskjeden**

**Hva er mikroplast:**
- Små plastpartikler < 5 mm
- Kommer fra nedbrytning av større plast eller direkte kilder (kosmetikk, klesfibre)

**Hva skjer:**

**1. Plankton spiser mikroplast**
- Små organismer (plankton) filtrerer vann og får i seg mikroplast

**2. Fisk spiser plankton**
- Mikroplast akkumuleres i fisken

**3. Større fisk spiser mindre fisk**
- **Bioakkumulering:** Konsentrasjonen øker oppover i næringskjeden

**4. Mennesker spiser fisk**
- Vi får i oss mikroplast

**Konsekvenser for dyr:**
- Kjemikalier fra plast frigis i kroppen
- Kan være giftige, hormonforstyrr ende
- Påvirker reproduksjon og overlevelse

**Konsekvenser for mennesker:**
- Vi spiser i gjennomsnitt **5 gram mikroplast per uke** (tilsvarer et kredittkort!)
- Finnes i fisk, skjell, salt, drikkevann, øl
- Helseeffekter ikke fullt kjent, men bekymringsfullt
- Kjemikalier fra plast kan være hormonforstyrrende eller kreftfremkallende

---

**3. Ødeleggelse av habitater**

**Fiskenett ("spøkelsesfiske"):**
- Tapte eller kasserte fiskenett driver rundt i havet
- Fanger fisk, sjøfugl, sel, delfiner, schildpadder
- Dyrene dør av sult, kveles eller drukner
- Nettene fortsetter å "fiske" i mange år

**Korallrev:**
- Plast dekker koraller
- Blokkerer sollys (koraller trenger lys til fotosyntese)
- Skader koraller fysisk
- Øker risiko for sykdom med 20 ganger

**Strender:**
- Plast skyller opp på strender
- Ødelegger habitater for krabber, fugler, skilpadder (legger egg på stranden)

---

**Konsekvenser for økosystemet:**

- Artene som dør av plast er viktige for økosystemet
- Næringskjeden påvirkes
- Redusert biologisk mangfold

**Konsekvenser for økonomi:**

- **Fiskerier:** Færre fisk, mikroplast i fisk (vil folk kjøpe?)
- **Turisme:** Strender fulle av søppel
- **Oppryddingskostnader:** Milliarder kroner årlig

---

**Konklusjon:**

Plastforurensning i havet:
1. **Dreper dyr** (spiser plast, vikler seg inn)
2. **Forgifter næringskjeden** (mikroplast)
3. **Ødelegger habitater** (koraller, strender)

**Løsning:** Drastisk redusere plastbruk, bedre avfallshåndtering, opprydding.`,
      hints: ['Tenk på hva som skjer når dyr spiser plast', 'Hva er mikroplast?', 'Hvordan påvirker plast næringskjeden?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-5-3-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvordan sur nedbør dannes. Hvilke stoffer er involvert, og hvilke effekter har sur nedbør på skog og innsjøer?',
      solution: `**Hvordan sur nedbør dannes:**

---

**Defin isjon:**
Sur nedbør er nedbør (regn, snø, tåke) med lavere pH enn normalt (pH < 5,6).

---

**Dannelse:**

**1. Utslipp av forurensende gasser**

To hovedgasser er ansvarlige:

**a) Svoveldioksid (SO₂)**
- **Kilde:** Forbrenning av kull og olje (inneholder svovel)
- Kullkraftverk, industri, skip (tungolje)

**b) Nitrogenoksider (NOₓ)**
- **Kilde:** Bileksos, kraftverk
- Dannes ved høye temperaturer: N₂ + O₂ → NOₓ

---

**2. Kjemiske reaksjoner i atmosfæren**

**Svoveldioksid (SO₂) → Svovelsyre (H₂SO₄):**
$$\\text{SO}_2 + \\text{H}_2\\text{O} \\rightarrow \\text{H}_2\\text{SO}_3 \\text{ (syrlig svovel)}$$
$$\\text{H}_2\\text{SO}_3 + \\frac{1}{2}\\text{O}_2 \\rightarrow \\text{H}_2\\text{SO}_4 \\text{ (svovelsyre)}$$

**Nitrogendioksid (NO₂) → Salpetersyre (HNO₃):**
$$2\\text{NO}_2 + \\text{H}_2\\text{O} \\rightarrow \\text{HNO}_3 + \\text{HNO}_2 \\text{ (salpetersyre)}$$

---

**3. Nedbør**
- Syre blandes med vanndamp i skyene
- Faller som sur nedbør (regn, snø)
- pH typisk 4-5 (normalt ~5,6)

---

**Effekter på skog:**

**1. Direkte skade på blader/bartrær**
- Syre etserskader blader
- Klorofyll brytes ned
- Gule, døde blader
- Redusert fotosyntese

**2. Utvasking av næringsstoffer**
- Syre i jord løser opp næringsstoffer (kalsium, magnesium, kalium)
- Næringsstoffer vaskes ut
- Trær får mangelsykdommer

**3. Frigjøring av giftig aluminium**
- Surt vann løser opp aluminium i jord
- Aluminium skader røtter
- Trær kan ikke ta opp vann og næring
- Tresykdommer og død

**4. Økt sykdomsfølsomhet**
- Svakere trær blir lettere angrepet av sopp, insekter, sykdommer

**Resultat:** Skog dør, spesielt i områder med sur jord (granitt)

---

**Effekter på innsjøer:**

**1. pH synker**
- Surt vann renner fra jord til innsjøer
- pH kan synke til 4-5 (meget surt)

**2. Fisk dør**
- Fisk tåler ikke lavt pH
- **Ørret og laks er spesielt følsomme** (dør ved pH < 5,5)
- Gjelleproblemer (ionbalanse forstyrres)
- Reproduksjon svikter (egg dør)

**3. Frigjøring av aluminium**
- Surt vann løser opp aluminium fra sedimenter
- Aluminium er giftig for fisk
- Skader gjeller

**4. Tap av artsmangfold**
- Når fisk dør, dør også fugler (ørn, hegre) som spiser fisk
- Insekter og bunndyr påvirkes
- Hele økosystemet kollapser

**Resultat:** "Døde" innsjøer (klart vann, men ingen liv)

---

**Eksempler:**

**Norge (1970-80-tallet):**
- 1/3 av norske innsjøer ble forsuret
- Tusenvis av innsjøer mistet fisk
- Spesielt Sørlandet (granitten gir sur jord)

**Effekt på bygninger:**
- Marmor og kalkstein løses opp
- Statuer, kirker, historiske bygninger skades

---

**Tiltak:**

**1. Redusere utslipp**
- **Fjerne svovel fra drivstoff** (lavsvoveldiesel, lav-svovel kull)
- **Røykgassrensing** på kraftverk (skrubbere fjerner SO₂)
- **Katalysatorer** i biler (reduserer NOₓ)

**2. Kalke innsjøer og skog**
- Tilsette kalk (CaCO₃) nøytraliserer syre
- Midlertidig løsning (må gjentas regelmessig)
- Norge kalker fortsatt mange innsjøer

---

**Suksess:**
- Sur nedbør i Norge er **redusert med 70% siden 1980**
- Takket være internasjonale avtaler (redusere SO₂ og NOₓ)
- Mange innsjøer har fått tilbake fisk

---

**Konklusjon:**
Sur nedbør dannes fra SO₂ og NOₓ som reagerer med vann i atmosfæren. Det skader skog (utvasker næring, frigjør aluminium) og dreper fisk i innsjøer.`,
      hints: ['Tenk på SO₂ og NOₓ', 'Hva skjer når disse gassene møter vann?', 'Hvordan påvirker syre skog og innsjøer?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-5-3-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Sammenlign havforsuring og sur nedbør. Hva er likhetene og forskjellene? Forklar hvorfor havforsuring er et større problem på lang sikt.',
      solution: `**Sammenligning: Havforsuring vs. Sur nedbør**

---

## **Likheter:**

**1. Begge skyldes menneskelig aktivitet**
- Sur nedbør: SO₂ og NOₓ fra forbrenning
- Havforsuring: CO₂ fra forbrenning av fossilt brennstoff

**2. pH synker**
- Begge gjør miljøet surere
- Skader økosystemer

**3. Påvirker vannlevende organismer**
- Sur nedbør: Dreper fisk i innsjøer
- Havforsuring: Skader koraller og skjelldyr

**4. Global problemstilling**
- Krever internasjonalt samarbeid
- Påvirker mange land

---

## **Forskjeller:**

| Aspekt | **Sur nedbør** | **Havforsuring** |
|--------|----------------|------------------|
| **Årsaksstoff** | SO₂ og NOₓ | CO₂ |
| **Miljø** | Innsjøer, skog, jord | Hav og osean |
| **pH-endring** | Lokal (noen innsjøer mer enn andre) | Global (hele havet påvirkes) |
| **Skala** | Regional (nedvind fra utslipp) | Global (CO₂ sprer seg overalt) |
| **Reversibilitet** | Relativt raskt (år-tiår) | Meget langsomt (hundrevis-tusenvis år) |
| **Tiltak** | Redusere SO₂/NOₓ, kalking | KUN redusere CO₂ (ingen quick-fix) |
| **Status** | Mye bedre (70% reduksjon) | Forverres (30% surere siden 1850) |

---

## **Hvorfor er havforsuring et større problem på lang sikt?**

---

**1. Global skala**

**Sur nedbør:**
- Regionalt problem (områder nedvind fra utslipp)
- Noen innsjøer påvirkes, andre ikke

**Havforsuring:**
- **Globalt problem:** CO₂ sprer seg i hele atmosfæren
- Hele verdenshavet påvirkes
- Ingen steder er trygge

---

**2. Meget langsom reversering**

**Sur nedbør:**
- Når vi reduserer SO₂ og NOₓ, bedres situasjonen på **år til tiår**
- Innsjøer kan kalkes (nøytralisere syre)
- Norge: 70% reduksjon i sur nedbør siden 1980

**Havforsuring:**
- Havet har **meget stor masse** (1,3 milliarder km³)
- CO₂ som er tatt opp må fjernes biologisk eller geologisk
- Tar **hundrevis til tusenvis av år** før pH normaliseres
- **Selv om vi stopper utslipp NÅ, fortsetter havet å være surt i århundrer**

---

**3. Ingen "quick fix"**

**Sur nedbør:**
- **Kalking:** Kan nøytralisere syre i innsjøer og skog
- Midlertidig løsning, men hjelper
- Teknologi: Røykgassrensing fjerner SO₂ effektivt

**Havforsuring:**
- **Ingen prakti sk måte å kalke havet** (for stort, for dyrt, kan skade økosystemet)
- Eneste løsning: **Stoppe CO₂-utslipp** (men effekten vises først etter århundrer)
- Ingen rask løsning

---

**4. Alvorlige konsekvenser for globale økosystemer**

**Sur nedbør:**
- Skader skog og innsjøer regionalt
- Alvorlig, men begrenset omfang

**Havforsuring:**
- **Korallrev:** 50% kan dø innen 2050
- **Skjelldyr:** Muslinger, østers, snegler, krepsdyr kan ikke danne skall
- **Plankton:** Grunnlaget for havets næringskjede påvirkes
- **Kollaps av marine økosystemer:** Kan ramme milliarder mennesker (fiske, mat)

---

**5. Kombinert med global oppvarming**

**Havforsuring:**
- **Dobbelttreff:** Havet blir både varmere OG surere
- Koraller rammes av **bleking** (pga. varme) og **svakere skjelett** (pga. surhet)
- Kombinasjonen er **dødelig**

**Sur nedbør:**
- Ikke direkte koblet til global oppvarming

---

**6. Irreversible tippepunkter**

**Havforsuring:**
- Risiko for å passere **tippepunkter** hvor økosystemer kollapser permanent
- Eksempel: Korallrev dør → habitater forsvinner → fisk forsvinner → fiskerier kollapser
- Kan **ikke** gjenopprettes raskt

**Sur nedbør:**
- Økosystemer kan hente seg relativt raskt når sur nedbør reduseres

---

## **Konklusjon:**

**Likheter:**
- Begge skyldes menneskelig aktivitet
- Begge senker pH og skader økosystemer

**Forskjeller:**
- Sur nedbør er regionalt, havforsuring er globalt
- Sur nedbør kan reverseres på tiår, havforsuring tar århundrer

**Hvorfor havforsuring er større problem:**
1. **Global skala** (hele havet)
2. **Meget langsom reversering** (hundrevis-tusenvis år)
3. **Ingen quick-fix** (kan ikke kalke havet)
4. **Alvorlige konsekvenser** (koraller, skjelldyr, plankton)
5. **Kombinert med oppvarming** (dobbelttreff)
6. **Risiko for irreversible tippepunkter**

**Løsning:** Drastisk og umiddelbar reduksjon av CO₂-utslipp globalt.`,
      hints: ['Hva er årsakene til hver type forsuring?', 'Hvordan lang tid tar det å reversere?', 'Hvilken skala påvirkes?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};
