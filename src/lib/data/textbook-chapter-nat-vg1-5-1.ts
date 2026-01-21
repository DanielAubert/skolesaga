/**
 * Naturfag VG1 - Kapittel 5.1: Energikilder og energibruk
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_NAT_VG1_5_1: TextbookChapter = {
  id: 'nat-vg1-5-1',
  courseId: 'nat-vg1',
  chapterNumber: '5.1',
  title: 'Energikilder og energibruk',
  description: 'Lær om fornybare og ikke-fornybare energikilder, energiomforming, energieffektivitet og bærekraftig energibruk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare forskjellen mellom fornybare og ikke-fornybare energikilder',
    'beskrive hvordan ulike energikilder produserer elektrisk energi',
    'forklare energiomforming og energibevaring',
    'vurdere fordeler og ulemper ved ulike energikilder',
    'beregne energieffektivitet og virkningsgrad',
  ],
  content: [
    {
      id: 'nat-vg1-5-1-intro',
      type: 'text',
      content: `# Energikilder og energibruk

Energi er grunnlaget for alt vi gjør. Vi bruker energi til å varme hus, drive biler, produsere mat og lage produkter. Men hvor kommer energien fra, og hvordan påvirker energibruken vår miljøet?

**Energi kan verken skapes eller ødelegges, bare omformes** (energibevaringsloven). Dette betyr at all energi vi bruker kommer fra en kilde og omdannes til andre former.

## Hvorfor er energikilder viktig?

1. **Samfunnets fundament:** Moderne samfunn er avhengig av energi
2. **Miljøpåvirkning:** Ulike energikilder har forskjellig påvirkning på miljøet
3. **Bærekraft:** Vi må velge energikilder som kan brukes på lang sikt
4. **Klimaendringer:** Mange energikilder frigjør klimagasser`,
    },
    {
      id: 'nat-vg1-5-1-def-energikilde',
      type: 'definition',
      title: 'Energikilde',
      content: 'En naturressurs eller prosess som kan omdannes til energi som kan brukes av mennesker. Energikilder deles i fornybare (kan fornyes naturlig) og ikke-fornybare (begrensede reserver).',
    },
    {
      id: 'nat-vg1-5-1-ikke-fornybar',
      type: 'text',
      content: `# Ikke-fornybare energikilder

**Ikke-fornybare energikilder** er ressurser som brukes opp raskere enn de dannes naturlig. Det tar millioner av år å danne disse ressursene.

## Fossile brensler

Fossile brensler ble dannet fra døde planter og dyr for millioner av år siden.

### 1. Kull
**Dannelse:** Planter som døde i sumper for 300-400 millioner år siden ble begravd under sedimenter. Høyt trykk og temperatur omdannet dem til kull.

**Bruk:**
- Strømproduksjon i kullkraftverk
- Stålproduksjon
- Varme

**Fordeler:**
- Billig og lett tilgjengelig
- Høy energitetthet
- Pålitelig energikilde

**Ulemper:**
- Frigjør mye CO₂ (klimagasser)
- Luftforurensning (sot, svoveldioksid, nitrogenoksider)
- Gruvedrift ødelegger landskap
- Helseproblemer for arbeidere

### 2. Olje (petroleum)
**Dannelse:** Mikroorganismer i havet døde og sank til bunns for millioner av år siden. Under høyt trykk og temperatur ble de omdannet til olje.

**Bruk:**
- Bensin og diesel til transport
- Oppvarming
- Råstoff til plast og kjemikalier

**Fordeler:**
- Høy energitetthet
- Lett å transportere og lagre
- Fleksibel bruk

**Ulemper:**
- Frigjør CO₂ ved forbrenning
- Oljesøl skader havmiljøet
- Begrenset tilgang
- Oljeutvinning kan skade miljøet

### 3. Naturgass
**Dannelse:** På samme måte som olje, men gass i stedet for væske.

**Bruk:**
- Strømproduksjon
- Oppvarming av boliger
- Matlaging

**Fordeler:**
- Frigjør mindre CO₂ enn kull og olje (per energienhet)
- Brenner renere (mindre luftforurensning)
- Fleksibel bruk

**Ulemper:**
- Frigjør fortsatt CO₂
- Metan (hovedkomponent) er en kraftig klimagass ved lekkasjer
- Ikke-fornybar
- Utvinning kan forårsake jordskjelv

## Kjernekraft (atomenergi)

**Prinsipp:** Energi frigjøres ved **fisjon** (splitting) av atomkjerner (vanligvis uran-235).

**Hvordan fungerer et kjernekraftverk:**
1. Uran-235 kjernen treffer en nøytron
2. Kjernen spaltes i to mindre kjerner
3. Frigjør store mengder energi og flere nøytroner
4. Nøytronene spalter flere urankjerner (kjedereaksjon)
5. Energien varmer opp vann til damp
6. Dampen driver en turbin som produserer strøm

**Fordeler:**
- Frigjør INGEN klimagasser under drift
- Produserer mye energi fra lite brennstoff
- Pålitelig energikilde (konstant produksjon)
- Liten påvirkning på luft og vann

**Ulemper:**
- Produserer **radioaktivt avfall** som må lagres sikkert i tusenvis av år
- Risiko for alvorlige ulykker (Tsjernobyl, Fukushima)
- Høye bygge- og nedbyggingskostnader
- Utvinning av uran er energikrevende
- Begrenset tilgang på uran`,
    },
    {
      id: 'nat-vg1-5-1-fornybar',
      type: 'text',
      content: `# Fornybare energikilder

**Fornybare energikilder** er ressurser som fornyes naturlig i et tempo som matcher eller overgår forbruket.

## 1. Vannkraft (hydrokraft)

**Prinsipp:** Potensiell energi fra vann i høyden omdannes til elektrisk energi.

**Hvordan fungerer et vannkraftverk:**
1. Vann samles i et magasin (dam)
2. Vann slippes ned gjennom rør
3. Faller vann driver en turbin
4. Turbinen driver en generator som produserer strøm
5. Vann slippes ut i elven nedenfor

**Energiomforming:**
$$\\text{Potensiell energi} \\rightarrow \\text{Kinetisk energi} \\rightarrow \\text{Elektrisk energi}$$

**Fordeler:**
- Produserer INGEN klimagasser
- Fornybar (regn fyller magasinene)
- Pålitelig og fleksibel (kan regulere produksjonen)
- Lang levetid (100+ år)
- Ren energi

**Ulemper:**
- Dambygging påvirker vassdrag og økosystemer
- Vandrer fisker kan få problemer (løses delvis med fisketrapper)
- Kan påvirke lokale samfunn (folk må flytte)
- Avhengig av nedbør (tørke reduserer produksjonen)

**Norge:** Over 95% av strømmen i Norge kommer fra vannkraft.

## 2. Vindkraft

**Prinsipp:** Kinetisk energi fra bevegelig luft (vind) omdannes til elektrisk energi.

**Hvordan fungerer en vindturbin:**
1. Vind treffer rotorbladene
2. Bladene roterer
3. Rotasjon driver en generator
4. Generator produserer strøm

**Energiomforming:**
$$\\text{Kinetisk energi (vind)} \\rightarrow \\text{Rotasjonsenergi} \\rightarrow \\text{Elektrisk energi}$$

**Fordeler:**
- Produserer INGEN klimagasser
- Fornybar (vinden stopper aldri)
- Kan plasseres på land eller til havs
- Lave driftskostnader

**Ulemper:**
- Ustabil produksjon (avhengig av vind)
- Støy og visuell påvirkning
- Kan drepe fugler og flaggermus
- Høye installasjons kostnader

## 3. Solenergi

**Prinsipp:** Energi fra sollys omdannes til elektrisk energi eller varme.

### Solcellepaneler (fotovoltaiske celler)
- Lys treffer silisiumceller
- Fotoner (lyspartikler) frigjør elektroner
- Elektroner skaper elektrisk strøm

### Solfangere (solvarme)
- Sollys varmer opp væske i paneler
- Varm væske brukes til oppvarming eller varmtvann

**Fordeler:**
- Produserer INGEN klimagasser
- Fornybar (solen skinner hver dag)
- Kan installeres på tak (desentralisert)
- Lave driftskostnader

**Ulemper:**
- Ustabil produksjon (avhengig av sollys og vær)
- Fungerer dårlig om natten og vinteren
- Produksjon av paneler krever energi og ressurser
- Krever stort areal for mye effekt

## 4. Bioenergi

**Prinsipp:** Energi lagret i organisk materiale (planter, trevirke, avfall) frigjøres ved forbrenning.

**Typer bioenergi:**
- **Biobrensler:** Ved, flis, pellets
- **Biogass:** Gass fra nedbrytning av organisk avfall
- **Biodrivstoff:** Etanol, biodiesel (fra planter)

**Fordeler:**
- Fornybar (planter vokser igjen)
- Kan bruke avfall
- CO₂-nøytral i teorien (planter tar opp CO₂ når de vokser)

**Ulemper:**
- Frigjør CO₂ ved forbrenning (men mindre netto enn fossilt)
- Kan konkurrere med matproduksjon
- Avskoging for bioenergi er ikke bærekraftig
- Luftforurensning ved forbrenning

## 5. Geotermisk energi

**Prinsipp:** Varme fra jordens indre brukes til oppvarming eller strømproduksjon.

**Hvordan fungerer det:**
- Vann pumpes ned i varme berglag
- Varmt vann/damp kommer opp
- Brukes til oppvarming eller å drive turbiner

**Fordeler:**
- Produserer INGEN klimagasser
- Stabil energikilde (ikke væravhengig)
- Kan brukes til både varme og strøm

**Ulemper:**
- Kun tilgjengelig i visse geografiske områder (vulkanske soner)
- Høye installasjons kostnader
- Risiko for induserte jordskjelv

## 6. Bølge- og tidevannsenergi

**Prinsipp:** Energi fra havbølger og tidevannsstrømmer omdannes til elektrisk energi.

**Fordeler:**
- Fornybar og forutsigbar (spesielt tidevann)
- Stort potensial (mye energi i havet)

**Ulemper:**
- Teknologien er fortsatt under utvikling
- Høye kostnader
- Kan påvirke marine økosystemer`,
    },
    {
      id: 'nat-vg1-5-1-comparison',
      type: 'example',
      title: 'Sammenligning: Fossil vs. Fornybar energi',
      problem: 'Sammenlign fossile brensler og fornybare energikilder. Hva er hovedforskjellene?',
      solution: `**Fossile brensler (kull, olje, naturgass):**

**Fordeler:**
- Høy energitetthet (mye energi per kg)
- Pålitelig og stabil produksjon
- Eksisterende infrastruktur
- Kan lagres enkelt

**Ulemper:**
- Frigjør CO₂ og andre klimagasser
- Ikke-fornybare (tar millioner år å danne)
- Luftforurensning
- Begrenset tilgang
- Miljøskader ved utvinning

---

**Fornybare energikilder (vann, vind, sol, etc.):**

**Fordeler:**
- Produserer lite eller ingen klimagasser
- Fornybare (naturlig fornyelse)
- Ubegrenset tilgang (sol, vind, vann)
- Ren energi

**Ulemper:**
- Ustabil produksjon (væravhengig)
- Høye installasjonskostnader
- Krever stort areal (spesielt sol og vind)
- Energilagring er utfordrende

---

**Konklusjon:**
Fremtidens energiforsyning må være **fornybar** for å bekjempe klimaendringer og sikre bærekraftig utvikling. Overgangen fra fossilt til fornybart krever investeringer i ny teknologi og infrastruktur.`,
    },
    {
      id: 'nat-vg1-5-1-omforming',
      type: 'text',
      content: `# Energiomforming og energibevaring

## Energibevaringsloven

**Energi kan verken skapes eller ødelegges, bare omformes fra en form til en annen.**

Dette er en av de viktigste lovene i fysikken. All energi som "forsvinner" omdannes til andre former - ofte varme.

## Energiformer

**Kinetisk energi:** Bevegelsesenergi (bil, vind, løpende vann)

**Potensiell energi:** Lagringsenergi pga. posisjon (vann i magasin, løftet gjenstand)

**Kjemisk energi:** Lagret i kjemiske bindinger (mat, bensin, batteri)

**Elektrisk energi:** Bevegelse av elektroner (strøm)

**Varmenergi (termisk energi):** Molekylers bevegelse (varme)

**Stråling:** Lys, infrarød stråling, etc.

**Kjerneenergi:** Lagret i atomkjerner (uran, plutonium)

## Eksempler på energiomforming

**Vannkraftverk:**
$$\\text{Potensiell energi} \\rightarrow \\text{Kinetisk energi} \\rightarrow \\text{Elektrisk energi}$$

**Bil:**
$$\\text{Kjemisk energi (bensin)} \\rightarrow \\text{Kinetisk energi} + \\text{Varme}$$

**Pære:**
$$\\text{Elektrisk energi} \\rightarrow \\text{Lys} + \\text{Varme}$$

**Solcelle:**
$$\\text{Lys} \\rightarrow \\text{Elektrisk energi}$$

**Mennesket:**
$$\\text{Kjemisk energi (mat)} \\rightarrow \\text{Kinetisk energi} + \\text{Varme}$$

## Energieffektivitet og virkningsgrad

Ikke all energi omdannes til den ønskede energiformen. Mye energi "går tapt" som varme.

**Virkningsgrad** er forholdet mellom nyttig energi ut og energi inn:

$$\\eta = \\frac{\\text{Nyttig energi ut}}{\\text{Energi inn}} \\times 100\\%$$

hvor $\\eta$ (eta) er virkningsgraden i prosent.

### Eksempler på virkningsgrad:

- **LED-pære:** ~90% (mye lys, lite varme)
- **Glødepære:** ~5% (lite lys, mye varme)
- **Elektrisk motor:** ~90%
- **Bensinmotor:** ~25-30% (mye energi går tapt som varme)
- **Dieselmotor:** ~35-40%
- **Vannkraftverk:** ~90%
- **Solcelle:** ~15-25%
- **Vindturbin:** ~40-50%

**Konklusjon:** Jo høyere virkningsgrad, desto mindre energi går tapt.`,
    },
    {
      id: 'nat-vg1-5-1-ex-virkningsgrad',
      type: 'example',
      title: 'Beregning av virkningsgrad',
      problem: 'En bensinmotor bruker 1000 kJ energi fra bensin. 300 kJ omdannes til bevegelse (kinetisk energi), resten blir varme. Hva er virkningsgraden?',
      solution: `**Gitt:**
- Energi inn = 1000 kJ
- Nyttig energi ut (bevegelse) = 300 kJ
- Energi tapt som varme = 1000 - 300 = 700 kJ

**Formel:**
$$\\eta = \\frac{\\text{Nyttig energi ut}}{\\text{Energi inn}} \\times 100\\%$$

**Løsning:**
$$\\eta = \\frac{300 \\text{ kJ}}{1000 \\text{ kJ}} \\times 100\\% = 0,30 \\times 100\\% = 30\\%$$

**Svar:** Virkningsgraden er 30%. Dette betyr at 30% av energien omdannes til bevegelse, mens 70% går tapt som varme.

**Tolkning:** Dette er typisk for bensinmotorer. Det er derfor biler blir varme når de kjører - mesteparten av energien fra bensinen blir til varme i stedet for bevegelse.`,
    },
    {
      id: 'nat-vg1-5-1-note-energisparing',
      type: 'note',
      title: 'Energisparing',
      content: `Å spare energi betyr å bruke mindre energi for samme nytte. Dette reduserer klimagassutslipp og sparer penger.

**Tiltak for å spare energi:**
- Bruk LED-pærer i stedet for glødepærer
- Isoler hus godt
- Skru av lys og elektronikk når ikke i bruk
- Bruk energieffektive apparater (A+++ merking)
- Sykle eller gå i stedet for å kjøre bil
- Ta kortere dusjer
- Senk temperatur en grad (sparer 5-7% energi)`,
    },
  ],
  exercises: [
    {
      id: 'nat-vg1-5-1-ex-1',
      number: '1',
      type: 'classic',
      difficulty: 'lett',
      task: 'Hva er forskjellen mellom fornybare og ikke-fornybare energikilder? Gi to eksempler på hver.',
      solution: `**Ikke-fornybare energikilder:**

**Definisjon:** Ressurser som brukes opp raskere enn de dannes naturlig. Det tar millioner av år å danne disse ressursene.

**Eksempler:**
1. **Kull** - Dannet fra planter for millioner av år siden
2. **Olje** - Dannet fra marine organismer for millioner av år siden
3. Andre: Naturgass, uran (kjernekraft)

**Egenskaper:**
- Begrensede reserver
- Vil en dag ta slutt
- Frigjør ofte klimagasser ved bruk

---

**Fornybare energikilder:**

**Definisjon:** Ressurser som fornyes naturlig i et tempo som matcher eller overgår forbruket.

**Eksempler:**
1. **Vannkraft** - Regn fyller magasinene kontinuerlig
2. **Solenergi** - Solen skinner hver dag
3. Andre: Vindkraft, bioenergi, geotermisk energi

**Egenskaper:**
- Ubegrensede eller raskt fornyelige
- Kan brukes på ubestemt tid
- Produserer lite eller ingen klimagasser

---

**Sammenligning:**
Fornybare energikilder er bærekraftige og bedre for miljøet, men kan være ustabile (avhengig av vær). Ikke-fornybare energikilder er pålitelige, men skader miljøet og vil ta slutt.`,
      hints: ['Tenk på hvor lang tid det tar å danne ressursen', 'Kan ressursen fornyes naturlig?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-5-1-ex-2',
      number: '2',
      type: 'classic',
      difficulty: 'lett',
      task: 'Beskriv hvordan et vannkraftverk produserer elektrisitet. Hvilke energiomforminger skjer?',
      solution: `**Hvordan et vannkraftverk fungerer:**

**1. Vannreservoar (dam):**
- Vann samles i et magasin bak en dam
- Vann har **potensiell energi** pga. høyden

**2. Rørgate:**
- Vann slippes ned gjennom store rør
- Potensiell energi omdannes til **kinetisk energi** (bevegelsesenergi)
- Jo høyere fall, desto mer energi

**3. Turbin:**
- Strømmende vann treffer turbinbladene
- Turbinen roterer
- Kinetisk energi omdannes til **rotasjonsenergi**

**4. Generator:**
- Turbinen driver en generator
- Generator omdanner rotasjonsenergi til **elektrisk energi**
- Elektromagneter skaper strøm

**5. Kraftlinjer:**
- Elektrisk energi sendes til forbrukere via kraftlinjer
- Vann slippes ut i elven nedenfor

---

**Energiomforminger:**

$$\\text{Potensiell energi} \\rightarrow \\text{Kinetisk energi} \\rightarrow \\text{Rotasjonsenergi} \\rightarrow \\text{Elektrisk energi}$$

---

**Fordeler:**
- Høy virkningsgrad (~90%)
- Ren og fornybar energi
- Pålitelig og fleksibel produksjon

**Norge:** Over 95% av norsk strøm kommer fra vannkraft, noe som gjør Norge til en av verdens mest fornybare energinasjon er.`,
      hints: ['Tenk på vannets bevegelse fra magasin til utløp', 'Hvilke energiformer er involvert?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-5-1-ex-3',
      number: '3',
      type: 'classic',
      difficulty: 'lett',
      task: 'Nevn tre fordeler og tre ulemper ved bruk av fossile brensler.',
      solution: `**Fordeler ved fossile brensler:**

**1. Høy energitetthet**
- Mye energi lagret i lite volum
- Enkelt å transportere og lagre
- Eksempel: 1 liter bensin inneholder mye energi

**2. Pålitelig og stabil energikilde**
- Produserer energi uavhengig av vær og tid på døgnet
- Kan produsere strøm når det trengs
- Ikke avhengig av sol eller vind

**3. Eksisterende infrastruktur**
- Mange kraftverk, biler og maskiner bruker fossilt brennstoff
- Billig å produsere (men miljøkostnader ikke inkludert)
- Velprøvd teknologi

---

**Ulemper ved fossile brensler:**

**1. Klimagassutslipp**
- Frigjør CO₂ ved forbrenning
- Hovedårsak til global oppvarming
- Bidrar til klimaendringer

**2. Ikke-fornybar**
- Tar millioner av år å danne
- Begrensede reserver
- Vil en dag ta slutt

**3. Luftforurensning og miljøskader**
- Frigjør sot, svoveldioksid, nitrogenoksider
- Oljesøl skader havmiljøet
- Gruvedrift ødelegger landskap
- Helseproblemer (luftveisplager, kreft)

---

**Konklusjon:**
Selv om fossile brensler har vært grunnlaget for industriell utvikling, må vi gå over til fornybare energikilder for å bekjempe klimaendringer og sikre bærekraftig utvikling.`,
      hints: ['Tenk på hvorfor vi har brukt fossilt brennstoff så lenge', 'Hva er problemene med fossile brensler?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-5-1-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'medium',
      task: 'En LED-pære bruker 10 W (watt) og produserer 9 W lys. En gammel glødepære bruker 60 W og produserer 3 W lys. Beregn virkningsgraden for begge pærer. Hvilken pære er mest energieffektiv?',
      solution: `**LED-pære:**

**Gitt:**
- Effekt inn = 10 W
- Nyttig effekt ut (lys) = 9 W

**Formel:**
$$\\eta = \\frac{\\text{Nyttig effekt ut}}{\\text{Effekt inn}} \\times 100\\%$$

**Løsning:**
$$\\eta_{\\text{LED}} = \\frac{9 \\text{ W}}{10 \\text{ W}} \\times 100\\% = 0,90 \\times 100\\% = 90\\%$$

---

**Glødepære:**

**Gitt:**
- Effekt inn = 60 W
- Nyttig effekt ut (lys) = 3 W

**Løsning:**
$$\\eta_{\\text{gløde}} = \\frac{3 \\text{ W}}{60 \\text{ W}} \\times 100\\% = 0,05 \\times 100\\% = 5\\%$$

---

**Sammenligning:**

| Pære | Effekt inn | Lys ut | Virkningsgrad | Varme tapt |
|------|-----------|--------|---------------|------------|
| LED | 10 W | 9 W | **90%** | 1 W |
| Glødepære | 60 W | 3 W | **5%** | 57 W |

---

**Konklusjon:**

1. **LED-pæren er mest energieffektiv** med 90% virkningsgrad
2. Glødepæren har bare 5% virkningsgrad - 95% av energien blir til varme!
3. LED-pæren produserer **3 ganger mer lys** (9 W vs. 3 W) mens den bruker **6 ganger mindre energi** (10 W vs. 60 W)

**Praktisk betydning:**
- LED sparer strøm og penger
- LED produserer lite varme (tryggere)
- LED varer mye lenger
- Derfor er glødepærer forbudt i mange land`,
      hints: ['Bruk formelen for virkningsgrad', 'Husk: Resten av energien blir til varme'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-5-1-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvordan vindkraft fungerer. Hvilke faktorer påvirker hvor mye energi en vindturbin kan produsere?',
      solution: `**Hvordan vindkraft fungerer:**

**1. Vind treffer rotorbladene:**
- Bevegelig luft (vind) har kinetisk energi
- Vinden treffer de store rotorbladene (typisk 40-80 m lange)
- Bladene er formet som fly vinger for å fange vind effektivt

**2. Rotasjon:**
- Rotorbladene roterer (typisk 10-20 omdreininger per minutt)
- Kinetisk energi fra vind omdannes til rotasjonsenergi

**3. Generator:**
- Rotasjon driver en generator inne i maskinhuset (gondolen)
- En girkasse øker rotasjonshastigheten
- Generator omdanner rotasjonsenergi til elektrisk energi

**4. Strømnett:**
- Elektrisk energi sendes til strømnettet
- Brukes av forbrukere

**Energiomforming:**
$$\\text{Kinetisk energi (vind)} \\rightarrow \\text{Rotasjonsenergi} \\rightarrow \\text{Elektrisk energi}$$

---

**Faktorer som påvirker energiproduksjon:**

**1. Vindhastighet (viktigste faktor)**
- Energi øker med **kuben** av vindhastigheten
- Dobbel vindhastighet gir **8 ganger** mer energi!
- Formel: $P \\propto v^3$ (effekt er proporsjonal med hastighet i tredje potens)
- Typisk: 3-25 m/s (10-90 km/t)

**2. Rotorblad-diameter**
- Større rotorblad fanger mer vind
- Areal = $\\pi r^2$ (øker med radius i kvadrat)
- Moderne turbiner: 80-120 m diameter

**3. Høyde**
- Høyere turbiner møter sterkere og mer stabil vind
- Mindre turbulens på høyden
- Typisk: 80-150 m tårnhøyde

**4. Plassering**
- Åpne områder med mye vind (kyst, hav, sletter)
- Unngå hindringer (skog, bygninger)
- Havvind: Sterkere og mer stabil enn landvind

**5. Virkningsgrad**
- Teoretisk maksimum: ~59% (Betz-grensen)
- Moderne turbiner: 40-50%
- Noe energi går tapt som friksjon og varme

---

**Fordeler og ulemper:**

**Fordeler:**
- Ren, fornybar energi
- Ingen klimagassutslipp

**Ulemper:**
- Ustabil produksjon (avhengig av vind)
- Støy og visuell påvirkning
- Kan drepe fugler

**Norge:** Økende satsing på havvind (mye plass og god vind).`,
      hints: ['Tenk på hvordan vind skaper rotasjon', 'Hva påvirker hvor mye vind turbinen fanger?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-5-1-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'medium',
      task: 'En elbil har et batteri som lagrer 60 kWh (kilowattimer) energi. Bilen kjører 300 km på full lading. Hvor mange kWh brukes per km? Sammenlign dette med en bensinbil som bruker 0,6 liter bensin per mil (10 km). (1 liter bensin ≈ 9 kWh)',
      solution: `**Elbil:**

**Gitt:**
- Batteri kapasitet = 60 kWh
- Rekkevidde = 300 km

**Forbruk per km:**
$$\\text{Forbruk} = \\frac{60 \\text{ kWh}}{300 \\text{ km}} = 0,2 \\text{ kWh/km}$$

---

**Bensinbil:**

**Gitt:**
- Forbruk = 0,6 liter/mil = 0,6 liter/10 km = 0,06 liter/km
- 1 liter bensin ≈ 9 kWh energi

**Energiforbruk per km:**
$$\\text{Energi} = 0,06 \\text{ liter/km} \\times 9 \\text{ kWh/liter} = 0,54 \\text{ kWh/km}$$

---

**Sammenligning:**

| Type | Energiforbruk per km | Forbruk relativ til elbil |
|------|---------------------|--------------------------|
| **Elbil** | 0,2 kWh/km | 1x (referanse) |
| **Bensinbil** | 0,54 kWh/km | 2,7x (mer enn dobbelt) |

---

**Konklusjon:**

1. **Elbilen bruker 2,7 ganger mindre energi** enn bensinbilen
2. Dette skyldes høyere virkningsgrad:
   - Elektrisk motor: ~90% virkningsgrad
   - Bensinmotor: ~25-30% virkningsgrad

**Hvorfor er elbil mer effektiv?**
- Bensinmotor taper mye energi som varme
- Elektrisk motor omdanner nesten all energi til bevegelse
- Elbil har regenerativ bremsing (henter energi tilbake)

**Miljø:**
- Hvis elbilen lades med **fornybar** strøm (vannkraft i Norge), er den nesten utslippsfri
- Bensinbil frigjør ~2,3 kg CO₂ per liter bensin
- For 300 km: Bensinbil frigjør 0,6 × 30 × 2,3 = **41,4 kg CO₂**

**Økonomi:**
- Elbil (Norge): 0,2 kWh × 300 km × 2 kr/kWh = **120 kr** for 300 km
- Bensinbil: 0,6 liter × 30 × 18 kr/liter = **324 kr** for 300 km
- **Elbil sparer 204 kr** (63% billigere)`,
      hints: ['Beregn forbruk per km for begge bilene', 'Husk å konvertere bensin til kWh', 'Sammenlign tallene'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-5-1-ex-7',
      number: '7',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Vurder fordeler og ulemper ved kjernekraft. Hvorfor er kjernekraft kontroversiell selv om den ikke frigjør klimagasser?',
      solution: `**Kjernekraft - en kontroversiell energikilde**

---

**Fordeler ved kjernekraft:**

**1. Ingen klimagassutslipp under drift**
- Produserer INGEN CO₂ eller andre klimagasser når reaktoren er i drift
- Kan bidra til å bekjempe klimaendringer
- Tilsvarende fornybar energi i klimaperspektiv

**2. Høy energitetthet**
- 1 kg uran-235 produserer like mye energi som ~2 000 000 kg kull
- Lite brennstoff gir mye energi
- Enkel transport og lagring av brennstoff

**3. Pålitelig og stabil energikilde**
- Produserer strøm kontinuerlig (ikke væravhengig)
- Høy kapasitetsfaktor (~90%)
- Kan dekke grunnlasten i strømnettet

**4. Liten påvirkning på luft og vann**
- Ingen luftforurensning (sot, SO₂, NOₓ)
- Lite landbruk (sammenlignet med sol og vind for samme energi)

**5. Lang levetid**
- Kraftverk kan operere i 40-60 år
- Gir stabil energiforsyning over lang tid

---

**Ulemper ved kjernekraft:**

**1. Radioaktivt avfall (hovedproblem)**
- Produserer avfall som er radioaktivt i **tusenvis av år**
- Må lagres sikkert i geologiske lagre
- Ingen endelig løsning på avfallsproblemet ennå
- Risiko for lekkasje og forurensning

**2. Risiko for alvorlige ulykker**
- Selv om sjeldne, kan ulykker være katastrofale
- Eksempler: **Tsjernobyl (1986)**, **Fukushima (2011)**
- Radioaktiv forurensning kan gjøre områder ubeboelige i generasjoner
- Mennesker dør og blir syke av stråling

**3. Høye kostnader**
- Svært dyre å bygge (milliarder kroner)
- Dyre å drifte og vedlikeholde
- Nedbygging og opprydding etter stenging er ekstremt dyrt
- Ofte budsjettoverskridelser

**4. Sikkerhet og terrorisme**
- Kjernekraftverk kan være mål for terrorangrep
- Risiko for spredning av kjernefysisk materiale til våpen
- Krever streng sikkerhet og kontroll

**5. Begrenset tilgang på uran**
- Uran er en ikke-fornybar ressurs
- Utvinning av uran er energikrevende og miljøskadelig
- Reserver kan ta slutt om 100-200 år (med dagens forbruk)

**6. Langvarig bygging**
- Tar ofte 10-20 år å bygge et kraftverk
- Forsinker overgangen til ren energi

---

**Hvorfor er kjernekraft kontroversiell?**

**Trusselen mot menneskeheten:**
- En alvorlig ulykke kan drepe tusenvis og gjøre områder ubeboelige
- Radioaktivt avfall er en byrde for fremtidige generasjoner

**Etikk:**
- Er det rettferdig å etterlate farlig avfall til barn og barnebarn?
- Kan vi garantere sikker lagring i tusenvis av år?

**Alternativer:**
- Fornybare energikilder (sol, vind, vann) har blitt mye billigere
- De har ikke samme risiko som kjernekraft
- Mange mener vi bør satse på fornybart i stedet

**Psykologisk:**
- Folk er mer redde for kjernekraft enn statistikken tilsier
- Selv om dødsfall per energienhet er lavere enn kull, er frykten større

---

**Konklusjon:**

Kjernekraft er et **vanskelig valg**:

**FOR:** Ren energi uten klimagasser, pålitelig produksjon

**IMOT:** Radioaktivt avfall, ulykkerisiko, høye kostnader

**Ulike syn:**
- **Noen mener:** Kjernekraft er nødvendig for å bekjempe klimaendringer raskt
- **Andre mener:** Risikoen er for stor, satse på fornybart i stedet

**Norge:** Har valgt å IKKE satse på kjernekraft pga. god tilgang på vannkraft og bekymringer for avfall og sikkerhet.

**Fremtiden:** Ny teknologi (f.eks. thoriumreaktorer, fusjon) kan løse noen av problemene, men er fortsatt under utvikling.`,
      hints: ['Tenk på både miljø, sikkerhet og økonomi', 'Hva er forskjellen på klimagasser og radioaktivt avfall?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-5-1-ex-8',
      number: '8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Norge får over 95% av strømmen fra vannkraft. Diskuter fordeler og utfordringer ved å være så avhengig av én energikilde. Hva skjer under tørkeperioder?',
      solution: `**Norge og vannkraft - en unik situasjon**

---

**Fordeler ved å basere seg på vannkraft:**

**1. Ren og fornybar energi**
- Nesten 100% utslippsfri strømproduksjon
- Norge har et av verdens reneste strømnett
- Bidrar til å bekjempe klimaendringer

**2. Stabil produksjon med fleksibilitet**
- Kan regulere produksjonen etter behov
- Magasiner lagrer vann for tørre perioder
- Rask oppstart og nedstenging

**3. Naturlige forutsetninger**
- Mye nedbør (2000+ mm/år i vestlandsfjord er)
- Høye fjell gir stort fallhøyde
- Mange vassdrag egnet for kraftproduksjon

**4. Lavprisområde (vanligvis)**
- Billig strøm sammenlignet med mange andre land
- Konkurransedyktig industri

**5. Eksportmuligheter**
- Kan eksportere strøm til Europa via kabler
- Inntekter til Norge

---

**Utfordringer ved å være avhengig av én energikilde:**

**1. Værrisiko (hovedproblem)**
- **Tørkeperioder:** Lite nedbør = lave magasiner = mindre produksjon
- **Tørre vintre:** Ekstra kritisk pga. høyt strømforbruk (oppvarming)
- Eksempel: Vinteren 2022-2023 hadde lave magasiner og høye priser

**2. Sesongvariasjoner**
- Mye nedbør om våren og høsten (snøsmelting)
- Mindre nedbør om vinteren (snø lagres)
- Ubalanse mellom produksjon og forbruk

**3. Sårbarheter**
- Tekniske problemer ved kraftverk kan gi store konsekvenser
- Sabotasje eller naturkatastrofer kan ramme forsyningen
- Mangel på reservekapasitet

**4. Strømprisvolatilitet**
- Prisstigning ved lav produksjon
- Høye priser rammer forbrukere og industri
- Politisk kontroversielt

**5. Miljøkonsekvenser**
- Demninger påvirker vassdrag og økosystemer
- Konflikter med naturvern, reindrift, friluftsliv

---

**Hva skjer under tørkeperioder?**

**Kort sikt (uker-måneder):**

**1. Magasinene tømmes**
- Norge har store vannmagasiner (~85 TWh kapasitet)
- Kan dekke forbruket noen måneder
- Men priset stiger når magasinnivået er lavt

**2. Import av strøm**
- Norge importerer strøm fra Danmark, Sverige, Tyskland, Nederland, Storbritannia
- Utenlandsk strøm kan være dyrere (ofte fra gass/kull)
- Øker klimagassutslipp indirekte

**3. Økt bruk av reservekraftverk**
- Gasskraftverk kan startes (f.eks. Kårstø)
- Produserer CO₂
- Brukes kun i nødsituasjoner

**4. Prisøkning**
- Strømprisen stiger dramatisk (fra 50 øre til 4-5 kr/kWh)
- Forbrukere sparer strøm
- Industri reduserer produksjonen

**5. Appeller om å spare strøm**
- Myndigheter ber folk spare energi
- Senke temperatur, kortere dusjer, skru av lys

**Lang sikt (år med lite nedbør):**

**1. Rasjonering (ekstremt sjeldent)**
- Tvungen begrensning av strømforbruk
- Sist brukt i Norge under krigen
- Svært lite sannsynlig med dagens infrastruktur

**2. Økonomiske konsekvenser**
- Høye strømpriser over lang tid
- Industri kan stanse produksjon
- Økonomisk krise

---

**Løsninger for å redusere risiko:**

**1. Diversifisering (flere energikilder)**
- **Vindkraft:** Økt satsing på land- og havvind
- **Solenergi:** Solceller på tak
- **Bioenergi:** Fra skog og avfall
- Mindre avhengighet av kun vannkraft

**2. Energilagring**
- **Batterier:** Lagre overskuddsstrøm
- **Hydrogenproduksjon:** Lage hydrogen med overskuddsstrøm
- Jevne ut produksjon og forbruk

**3. Energieffektivisering**
- Bedre isolering av bygg
- Energieffektive apparater
- Redusere totalt strømforbruk

**4. Smarte strømnett**
- Bedre styring av forbruk (unngå topper)
- Dynamisk prising (billig når mye produksjon)
- Fleksibelt forbruk (lade elbil når strøm er billig)

**5. Kabler til utlandet**
- Importere strøm når norsk produksjon er lav
- Eksportere når produksjon er høy
- Balansere det europeiske strømmarkedet

**6. Klimatilpasning**
- Forberede seg på endret nedbørsmønster pga. klimaendringer
- Kan få mer nedbør, men fordelt annerledes (mer flom, mindre snø)

---

**Konklusjon:**

**Fordeler:** Norge har svært ren og billig strøm fra vannkraft

**Risiko:** Avhengighet av nedbør gjør oss sårbare for tørke

**Fremtiden:** Kombinere vannkraft med vind, sol og energilagring for et mer robust og bærekraftig energisystem

**Klima:** Klimaendringer kan endre nedbørsmønsteret, noe som krever tilpasning`,
      hints: ['Tenk på hva som skjer når det er lite nedbør', 'Hvordan kan Norge redusere risikoen?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};
