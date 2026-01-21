/**
 * Naturfag VG1 - Kapittel 3.1: Cellen - livets byggestein
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_NAT_VG1_3_1: TextbookChapter = {
  id: 'nat-vg1-3-1',
  courseId: 'nat-vg1',
  chapterNumber: '3.1',
  title: 'Cellen - livets byggestein',
  description: 'Lær om cellens oppbygging, forskjellen mellom prokaryoter og eukaryoter, celleorganeller og celledeling.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive cellens struktur og funksjon',
    'forklare forskjellen mellom prokaryote og eukaryote celler',
    'beskrive viktige celleorganeller og deres funksjoner',
    'forklare mitose og celledeling',
  ],
  content: [
    {
      id: 'nat-vg1-3-1-intro',
      type: 'text',
      content: `# Cellen - livets minste enhet

Alle levende organismer er bygd opp av celler. Noen organismer, som bakterier, består av bare én celle. Andre, som mennesker, består av billioner av celler som samarbeider.

**Celleteorien** er en av de viktigste teoriene i biologien:

1. Alle levende organismer består av én eller flere celler
2. Cellen er livets grunnleggende enhet
3. Alle celler kommer fra andre celler (ved celledeling)

Selv om det finnes mange forskjellige typer celler, deler de noen grunnleggende egenskaper:
- De har en **cellememb ran** som skiller cellen fra omgivelsene
- De inneholder **DNA** (arvemateriale)
- De kan utføre **stoffskifte** (kjemiske reaksjoner)
- De kan **reprodusere** seg (dele seg)`,
    },
    {
      id: 'nat-vg1-3-1-def-celle',
      type: 'definition',
      title: 'Celle',
      content: 'Den minste enheten i en levende organisme som kan utføre alle livets funksjoner: stoffskifte, vekst, reproduksjon og respons på omgivelsene.',
    },
    {
      id: 'nat-vg1-3-1-prokaryoter',
      type: 'text',
      content: `# Prokaryote celler

**Prokaryoter** er enkle, encellete organismer uten cellekjerne. Bakterier og arkeer er prokaryoter.

## Kjennetegn ved prokaryote celler:

**1. Ingen cellekjerne**
- DNA-et flyter fritt i cytoplasmaet (ikke omgitt av membran)
- DNA-et er sirkulært (en ringformet kromosom)

**2. Små og enkle**
- Typisk 1-10 μm i diameter
- Færre organeller enn eukaryote celler

**3. Cellevegg**
- De fleste prokaryoter har en cellevegg av peptidoglykan
- Gir cellen form og beskyttelse

**4. Ribosomer**
- Små ribosomer som produserer proteiner
- Flyter fritt i cytoplasmaet

**5. Andre strukturer**
- **Flagell:** Piskeliknende struktur for bevegelse
- **Pili:** Hårlignende utvekster for feste
- **Plasmider:** Små, ekstra DNA-molekyler`,
    },
    {
      id: 'nat-vg1-3-1-eukaryoter',
      type: 'text',
      content: `# Eukaryote celler

**Eukaryoter** er organismer med celler som har cellekjerne. Dyr, planter, sopp og protister er eukaryoter.

## Kjennetegn ved eukaryote celler:

**1. Cellekjerne**
- DNA-et er pakket i kromosomer inne i cellekjernen
- Kjernen er omgitt av en dobbel membran (kjernemembran)
- Inneholder nukleolus (hvor ribosomer lages)

**2. Større og mer komplekse**
- Typisk 10-100 μm i diameter
- Mange membranomsluttede organeller

**3. Organeller**
Eukaryote celler har mange spesialiserte strukturer (organeller) med spesifikke funksjoner:

- **Mitokondrier:** Energiproduksjon (celleånding)
- **Endoplasmatisk retikulum (ER):** Protein- og lipidproduksjon
- **Golgiapparatet:** Modifisering og pakking av proteiner
- **Lysosomer:** Nedbrytning av avfallsstoffer
- **Ribosomer:** Proteinsyntese
- **Cytoskjelett:** Gir cellen struktur

**4. Planteceller har i tillegg:**
- **Cellevegg:** Av cellulose, gir støtte
- **Kloroplaster:** Fotosyntese (grønne planteceller)
- **Vakuoler:** Store væskefylte rom for lagring`,
    },
    {
      id: 'nat-vg1-3-1-comparison',
      type: 'example',
      title: 'Sammenligning: Prokaryoter vs. Eukaryoter',
      problem: 'Hva er de viktigste forskjellene mellom prokaryote og eukaryote celler?',
      solution: `**Prokaryote celler (bakterier):**

✓ Ingen cellekjerne (DNA flyter fritt)
✓ Små (1-10 μm)
✓ Enkle
✓ Sirkulært DNA
✓ Små ribosomer
✓ Få organeller
✓ Cellevegg av peptidoglykan

**Eukaryote celler (dyr, planter, sopp):**

✓ Cellekjerne (DNA i kjerne)
✓ Store (10-100 μm)
✓ Komplekse
✓ Lineære kromosomer
✓ Store ribosomer
✓ Mange membranomsluttede organeller
✓ Cellevegg av cellulose (kun planter)

**Likheter:**

✓ Begge har DNA
✓ Begge har cellememb ran
✓ Begge har ribosomer
✓ Begge utfører stoffskifte`,
    },
    {
      id: 'nat-vg1-3-1-organeller',
      type: 'text',
      content: `# Viktige celleorganeller

## Cellemembranen
**Funksjon:** Regulerer hva som kommer inn og ut av cellen

- Består av et dobbelt lag av lipider (fettstoffer)
- **Selektivt permeabel:** Slipper noen stoffer gjennom, men ikke andre
- Proteiner i membranen fungerer som kanaler, pumper og reseptorer

## Cellekjernen
**Funksjon:** Lagrer DNA og styrer cellens aktiviteter

- Inneholder cellens genetiske informasjon (DNA)
- DNA-et er pakket i kromosomer
- Styrer proteinsyntese ved å sende beskjeder (mRNA) ut til ribosomene

## Mitokondrier
**Funksjon:** Energiproduksjon (celleånding)

- Omdanner næringsstoffer (glukose) til ATP (cellegås energimolekyl)
- Har egen dobbel membran
- Har sitt eget DNA (arvet fra mor)
- Kalles "cellens kraftverk"

**Celleånding (forenklet):**
$$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{energi (ATP)}$$

## Kloroplaster (kun planteceller)
**Funksjon:** Fotosyntese

- Omdanner lys, CO₂ og vann til glukose og oksygen
- Inneholder klorofyll (grønt pigment)
- Har dobbel membran og eget DNA

**Fotosyntese (forenklet):**
$$6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{lysenergi} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$$

## Ribosomer
**Funksjon:** Proteinsyntese

- Leser mRNA (kopi av DNA) og bygger proteiner
- Finnes fritt i cytoplasma eller festet til ER
- Består av RNA og proteiner

## Endoplasmatisk retikulum (ER)
**Funksjon:** Produksjon og transport av proteiner og lipider

- **Ru ER:** Har ribosomer, produserer proteiner
- **Glatt ER:** Ingen ribosomer, produserer lipider

## Golgiapparatet
**Funksjon:** Modifisering, pakking og transport av proteiner

- Mottar proteiner fra ER
- Modifiserer og pakker dem i vesikler
- Sender dem til riktig sted i cellen eller ut av cellen

## Lysosomer
**Funksjon:** Nedbrytning og resirkulering

- Inneholder fordøyelsesenzymer
- Bryter ned avfallsstoffer, gamle organeller og bakterier
- "Cellens rengjøringssystem"

## Vakuoler (spesielt i planteceller)
**Funksjon:** Lagring og opprettholdelse av celletrykk

- Store i planteceller (kan fylle 90% av cellen)
- Lagrer vann, næringsstoffer og avfallsstoffer
- Skaper trykk (turgor) som holder plantecellen stiv`,
    },
    {
      id: 'nat-vg1-3-1-transport',
      type: 'text',
      content: `# Transport over cellemembranen

Stoffer må bevege seg inn og ut av cellen. Det finnes to hovedtyper transport:

## Passiv transport
Krever **ingen energi** (ATP). Stoffer beveger seg fra høy til lav konsentrasjon.

**1. Diffusjon**
- Stoffer sprer seg fra område med høy konsentrasjon til lav konsentrasjon
- Eksempel: Oksygen diffunderer inn i cellen, CO₂ diffunderer ut

**2. Osmose**
- Diffusjon av **vann** gjennom en selektivt permeabel membran
- Vann beveger seg fra område med lav konsentrasjon av løst stoff til høy konsentrasjon
- Viktig for vannbalanse i cellen

**3. Facilitert diffusjon**
- Stoffer beveger seg gjennom proteinkanaler i membranen
- Fortsatt fra høy til lav konsentrasjon (ingen energi)
- Eksempel: Glukose inn i cellen

## Aktiv transport
Krever **energi** (ATP). Stoffer pumpes mot konsentrasjonsgradienten (fra lav til høy konsentrasjon).

**Eksempel: Natrium-kalium-pumpen**
- Pumper Na⁺ ut av cellen og K⁺ inn i cellen
- Bruker ATP som energikilde
- Viktig for nervesignaler

## Endocytose og eksocytose

**Endocytose:** Cellemembranen folder seg inn og omslutter stoffer utenfor cellen
- Brukes til å ta opp store molekyler eller partikler

**Eksocytose:** Vesikler fra Golgiapparatet smelter sammen med cellemembranen og slipper ut innholdet
- Brukes til å skille ut hormoner, enzymer, etc.`,
    },
    {
      id: 'nat-vg1-3-1-mitose',
      type: 'text',
      content: `# Celledeling - Mitose

Celler deler seg for at organismer skal vokse, reparere skader og erstatte gamle celler.

**Mitose** er prosessen hvor en celle deler seg i to identiske datterceller.

## Celleside syklus

Cellens liv består av to hoveddeler:

**1. Interfase** (vekst og forberedelse)
- **G1-fase:** Cellen vokser
- **S-fase:** DNA kopieres (replikasjon)
- **G2-fase:** Cellen forbereder seg til deling

**2. Mitose** (selve delingen)
- **Profase:** Kromosomene kondenserer (blir synlige)
- **Metafase:** Kromosomene stiller seg opp på midten
- **Anafase:** Kromosomene trekkes fra hverandre
- **Telofase:** To nye kjerner dannes

**3. Cytokinese** (deling av cytoplasma)
- Cellemembranen klemmes sammen
- To separate celler dannes

## Fasene i mitose (detaljert)

**Profase:**
- DNA kondenserer til kromosomer (X-formede strukturer)
- Hvert kromosom består av to søsterkromatider (identiske kopier)
- Kjernemembr anen brytes ned
- Spindeltråder dannes

**Metafase:**
- Kromosomene stiller seg opp langs cellens ekvator
- Spindeltråder fester seg til sentromerene (midten av kromosomene)

**Anafase:**
- Søsterkromatidene trekkes fra hverandre til hver sin pol
- Cellen blir lang og smal

**Telofase:**
- Kromosomene dekondenserer (blir usynlige igjen)
- Kjernemembran dannes rundt hver gruppe kromosomer
- To identiske kjerner

**Cytokinese:**
- Cellemembranen klemmes sammen på midten
- Danner to separate datterceller
- Hver dattercelle har identisk DNA som modercellen

## Hvorfor er mitose viktig?

1. **Vekst:** Kroppen vokser ved at celler deler seg
2. **Reparasjon:** Skadede celler erstattes
3. **Fornyelse:** Gamle celler erstattes med nye
4. **Aseksuell reproduksjon:** Noen organismer (f.eks. bakterier) formerer seg ved celledeling`,
    },
    {
      id: 'nat-vg1-3-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er de tre delene av celleteorien?',
        solution: 'De tre delene av celleteorien er:\n\n1. **Alle levende organismer består av én eller flere celler** - Både encellete (bakterier) og flercellete (dyr, planter) organismer er bygd opp av celler.\n\n2. **Cellen er livets grunnleggende enhet** - Cellen er den minste enheten som kan utføre alle livets funksjoner (stoffskifte, vekst, reproduksjon).\n\n3. **Alle celler kommer fra andre celler** - Nye celler dannes ved at eksisterende celler deler seg (celledeling). Celler oppstår ikke spontant.',
        hints: ['Tenk på hva alle levende ting har til felles', 'Hvordan oppstår nye celler?'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-3-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er hovedforskjellene mellom prokaryote og eukaryote celler? Nevn minst tre forskjeller.',
        solution: '**Hovedforskjeller mellom prokaryote og eukaryote celler:**\n\n1. **Cellekjerne:**\n   - Prokaryoter: Ingen cellekjerne, DNA flyter fritt i cytoplasmaet\n   - Eukaryoter: Har cellekjerne med DNA pakket i kromosomer\n\n2. **Størrelse:**\n   - Prokaryoter: Små (1-10 μm)\n   - Eukaryoter: Store (10-100 μm)\n\n3. **Organeller:**\n   - Prokaryoter: Få organeller, ingen membranomsluttede organeller\n   - Eukaryoter: Mange membranomsluttede organeller (mitokondrier, ER, Golgi, etc.)\n\n4. **DNA-struktur:**\n   - Prokaryoter: Sirkulært DNA\n   - Eukaryoter: Lineære kromosomer\n\n5. **Kompleksitet:**\n   - Prokaryoter: Enkle celler\n   - Eukaryoter: Komplekse celler med spesialiserte strukturer\n\n**Eksempler:**\n- Prokaryoter: Bakterier, arkeer\n- Eukaryoter: Dyr, planter, sopp, protister',
        hints: ['Tenk på cellekjerne', 'Tenk på størrelse og kompleksitet', 'Hvilke organismer er prokaryoter vs. eukaryoter?'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-3-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar funksjonen til følgende celleorganeller: a) Mitokondrier, b) Kloroplaster, c) Ribosomer, d) Cellekjerne',
        solution: '**a) Mitokondrier:**\nFunksjon: Energiproduksjon gjennom celleånding.\n- Omdanner næringsstoffer (spesielt glukose) og oksygen til ATP (cellegås energimolekyl)\n- Kalles "cellens kraftverk"\n- Finnes i alle eukaryote celler\n\n**b) Kloroplaster:**\nFunksjon: Fotosyntese (kun i planteceller).\n- Omdanner lys, CO₂ og vann til glukose og oksygen\n- Inneholder klorofyll (grønt pigment som fanger opp lys)\n- Gir planter energi og oksygen\n\n**c) Ribosomer:**\nFunksjon: Proteinsyntese (produksjon av proteiner).\n- Leser instruksjoner fra mRNA (kopi av DNA)\n- Bygger proteiner ved å sette sammen aminosyrer\n- Finnes både fritt i cytoplasma og festet til ER\n\n**d) Cellekjerne:**\nFunksjon: Lagring av DNA og styring av cellens aktiviteter.\n- Inneholder cellens genetiske informasjon (DNA)\n- Styrer hvilke proteiner cellen skal lage\n- Beskytter DNA-et fra skade\n- Kalles "cellens kontrollsenter"',
        hints: ['Mitokondrier = energi', 'Kloroplaster = fotosyntese', 'Ribosomer = proteiner', 'Cellekjerne = DNA'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-3-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva er forskjellen mellom diffusjon og aktiv transport? Gi eksempler på hver.',
        solution: '**Diffusjon (passiv transport):**\n\n**Egenskaper:**\n- Krever INGEN energi (ATP)\n- Stoffer beveger seg fra HØY til LAV konsentrasjon\n- Følger konsentrasjonsgradienten\n- Skjer spontant\n\n**Eksempler:**\n- Oksygen (O₂) diffunderer inn i cellen fra blodet\n- Karbondioksid (CO₂) diffunderer ut av cellen\n- Osmose: Vann diffunderer gjennom cellemembranen\n- Duftstoffer sprer seg i luften\n\n**Aktiv transport:**\n\n**Egenskaper:**\n- Krever ENERGI (ATP)\n- Stoffer pumpes fra LAV til HØY konsentrasjon\n- Mot konsentrasjonsgradienten\n- Krever spesielle transportproteiner (pumper)\n\n**Eksempler:**\n- Natrium-kalium-pumpen: Pumper Na⁺ ut og K⁺ inn (viktig for nervesignaler)\n- Opptak av næringsstoffer i tarmceller (selv når konsentrasjonen er lav i tarmen)\n- Opptak av mineraler i planterøtter\n\n**Sammenligning:**\n- Diffusjon er som å rulle ned en bakke (ingen energi)\n- Aktiv transport er som å sykle opp en bakke (krever energi)',
        hints: ['Tenk på energibehov', 'Hvilken retning beveger stoffene seg?', 'Følger eller mot konsentrasjonsgradienten?'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-3-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv de fire fasene i mitose. Hva skjer i hver fase?',
        solution: '**De fire fasene i mitose:**\n\n**1. Profase** (forberedelse)\n- DNA kondenserer og blir synlig som kromosomer (X-formede strukturer)\n- Hvert kromosom består av to søsterkromatider (identiske kopier festet sammen)\n- Kjernemembr anen brytes ned og forsvinner\n- Spindeltråder begynner å dannes fra sentromer (strukturer ved cellens poler)\n\n**2. Metafase** (midt-fase)\n- Kromosomene stiller seg opp langs cellens ekvator (midtlinje)\n- Spindeltråder fester seg til sentromerene (midtpunktet på kromosomene)\n- Kromosomene er maksimalt kondensert og lett synlige\n- "Sjekkpunkt": Cellen sjekker at alt er klart før videre deling\n\n**3. Anafase** (fra hverandre-fase)\n- Søsterkromatidene trekkes fra hverandre av spindeltrådene\n- Én kromatid til hver pol av cellen\n- Cellen blir lang og smal\n- Dette sikrer at begge dattercellene får identisk DNA\n\n**4. Telofase** (slutt-fase)\n- Kromosomene dekondenserer (blir usynlige igjen)\n- Ny kjernemembran dannes rundt hver gruppe kromosomer\n- To identiske cellekjerner er nå dannet\n- Spindeltrådene brytes ned\n\n**Cytokinese** (følger etter mitose):\n- Cellemembranen klemmes sammen på midten\n- Danner to separate datterceller med identisk DNA',
        hints: ['Profase = forberedelse', 'Metafase = midt', 'Anafase = fra hverandre', 'Telofase = slutt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-3-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'En plantecelle plasseres i rent vann. Forklar hva som skjer med cellen og hvorfor.',
        solution: '**Hva skjer:**\n\nNår en plantecelle plasseres i rent vann, vil vann strømme inn i cellen gjennom **osmose**. Cellen vil svelle opp, men ikke sprekke.\n\n**Forklaring:**\n\n**1. Osmose:**\n- Vann beveger seg fra område med lav konsentrasjon av løste stoffer (rent vann) til område med høy konsentrasjon (inne i cellen)\n- Cellemembranen er selektivt permeabel (slipper vann gjennom, men ikke større molekyler)\n- Vann diffunderer derfor inn i cellen\n\n**2. Plantecellen sveller:**\n- Vakuolen (stor væskefylt struktur i plantecellen) fylles med vann\n- Cellemembranen presses mot celleveggen\n- Dette skaper **turgortrykk** (trykk fra innsiden)\n\n**3. Celleveggen beskytter:**\n- Celleveggen (av cellulose) er stiv og sterk\n- Den hindrer cellen i å sprekke\n- Cellen blir **turgid** (stiv og fast)\n\n**4. Likevekt:**\n- Etter hvert balanseres trykket fra vann som strømmer inn med mottrykket fra celleveggen\n- Cellen når en likevektstilstand\n\n**Sammenligning med dyrecelle:**\nEn dyrecelle i rent vann ville **sprekke** fordi den mangler cellevegg. Vann ville fortsette å strømme inn til cellen sprakk.\n\n**Praktisk betydning:**\nTurgortrykk er viktig for at planter skal stå oppreist. Når planter visner (mangler vann), mister cellene turgortrykk.',
        hints: ['Tenk på osmose', 'Hva har planteceller som dyreceller ikke har?', 'Hva skjer med turgortrykk?'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-3-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Mitokondrier har sitt eget DNA og dobbel membran. Hva kan dette fortelle oss om hvordan mitokondrier oppstod? (Hint: Endosymbioseteorien)',
        solution: '**Endosymbioseteorien:**\n\nMitokondrier har sitt eget DNA og dobbel membran fordi de opprinnelig var **frie bakterier** som ble "slukt" av en større celle for omtrent 1,5 milliarder år siden.\n\n**Bevis for endosymbioseteorien:**\n\n**1. Eget DNA:**\n- Mitokondrier har sirkulært DNA (som bakterier)\n- Dette DNA-et er forskjellig fra cellekjernens DNA\n- Mitokondrielt DNA arves kun fra mor (som hos bakterier)\n\n**2. Dobbel membran:**\n- Den indre membranen kom fra den opprinnelige bakterien\n- Den ytre membranen kom fra vertscellens cellememb ran da den "slukte" bakterien\n\n**3. Egne ribosomer:**\n- Mitokondrier har egne ribosomer som ligner bakterieribosomer (ikke eukaryote ribosomer)\n- De kan produsere noen av sine egne proteiner\n\n**4. Deling:**\n- Mitokondrier deler seg uavhengig av cellen (som bakterier)\n- De kan ikke lages fra bunnen av - nye mitokondrier kommer kun fra eksisterende mitokondrier\n\n**5. Størrelse:**\n- Mitokondrier er omtrent samme størrelse som bakterier\n\n**Hvordan skjedde det:**\n\n1. En stor prokaryot celle "slukte" en mindre bakterie (gjennom endocytose)\n2. I stedet for å fordøye bakterien, levde de i symbiose\n3. Bakterien produserte energi (ATP) til vertscellen\n4. Vertscellen ga bakterien beskyttelse og næring\n5. Over tid ble bakterien en permanent del av cellen - et mitokondrion\n\n**Det samme gjelder kloroplaster:**\nKloroplaster i planteceller har også eget DNA og dobbel membran. De oppstod på samme måte, fra cyanobakterier (bakterier som kan fotosyntese).\n\n**Betydning:**\nEndosymbioseteorien forklarer hvordan komplekse eukaryote celler oppstod fra enklere prokaryote celler. Dette var en av de viktigste hendelsene i livets evolusjon.',
        hints: ['Hva har bakterier og mitokondrier til felles?', 'Hvorfor dobbel membran?', 'Tenk på symbiose'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-3-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Kreftceller deler seg ukontrollert. Forklar hva som kan ha gått galt med celledelingsprosessen, og hvorfor dette er farlig.',
        solution: '**Hva er kreft:**\n\nKreft oppstår når celler deler seg ukontrollert og danner svulster. Normal celledeling er nøye regulert, men kreftceller har mistet denne kontrollen.\n\n**Hva har gått galt:**\n\n**1. Mutasjoner i DNA:**\n- Endringer (mutasjoner) i gener som kontrollerer celledeling\n- Spesielt viktig: Mutasjoner i **proto-onkogener** (gener som fremmer celledeling) og **tumorsuppressorgener** (gener som bremser celledeling)\n\n**2. Tap av sjekkpunkter:**\n- Normale celler har "sjekkpunkter" under cellesyklusen som sjekker at alt er OK før deling\n- Kreftceller ignorerer disse sjekkpunktene\n- De deler seg selv når DNA er skadet\n\n**3. Ignorerer stoppignaler:**\n- Normale celler slutter å dele seg når de mottar signaler om å stoppe\n- Kreftceller ignorerer disse signalene\n\n**4. Unngår celledød (apoptose):**\n- Skadede celler skal normalt "begå selvmord" (programmert celledød)\n- Kreftceller har deaktivert denne mekanismen\n- De fortsetter å leve og dele seg selv når de er skadede\n\n**5. Uendelig deling:**\n- Normale celler kan kun dele seg et begrenset antall ganger (Hayflick-grensen)\n- Kreftceller reaktiverer **telomerase** (et enzym) som gjør at de kan dele seg i det uendelige\n\n**Hvorfor er dette farlig:**\n\n**1. Svulstdannelse:**\n- Ukontrollert deling danner klumper av celler (svulster)\n- Svulster kan presse på omkringliggende organer\n\n**2. Ødelegger normalt vev:**\n- Kreftceller invaderer og ødelegger friskt vev\n- Organer slutter å fungere normalt\n\n**3. Konkurrerer om ressurser:**\n- Kreftceller bruker næring og oksygen som friske celler trenger\n- De kan danne sine egne blodårer (angiogenese) for å få mer ressurser\n\n**4. Metastase (spredning):**\n- Kreftceller kan løsne fra svulsten\n- De sprer seg via blodbanen eller lymfesystemet til andre deler av kroppen\n- Danner nye svulster (metastaser) i andre organer\n\n**5. Livstruende:**\n- Når kreftceller sprer seg til vitale organer (hjerne, lunger, lever), kan de forårsake organsvikt\n- Dette kan være dødelig\n\n**Forebygging og behandling:**\n\n**Forebygging:**\n- Unngå kjente kreftfremkallende stoffer (røyk, stråling, visse kjemikalier)\n- Sunn livsstil reduserer risiko\n\n**Behandling:**\n- Kirurgi: Fjerne svulster\n- Strålebehandling: Drepe kreftceller med stråling\n- Cellegift (kjemoterapi): Stoffe som dreper raskt delende celler\n- Immunterapi: Hjelpe kroppens eget immunforsvar\n- Målrettet terapi: Angripe spesifikke mutasjoner i kreftcellene',
        hints: ['Hva kontrollerer normal celledeling?', 'Hva skjer når denne kontrollen mistes?', 'Hvorfor er metastase farlig?'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-3-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En forsker studerer to typer celler under mikroskop. Celle A har cellevegg, kloroplaster og en stor vakuol. Celle B har mange mitokondrier, men ingen cellevegg eller kloroplaster. Hvilken type organismer kommer cellene fra? Begrunn svaret.',
        solution: '**Celle A: Plantecelle**\n\nDenne cellen kommer fra en **plante**.\n\n**Begrunnelse:**\n\n1. **Cellevegg:**\n   - Planteceller har cellevegg av cellulose\n   - Dyreceller har IKKE cellevegg\n   - Dette alene forteller oss at det ikke er en dyrecelle\n\n2. **Kloroplaster:**\n   - Kloroplaster finnes kun i grønne planteceller\n   - Brukes til fotosyntese (produksjon av glukose fra lys)\n   - Dyreceller kan IKKE fotosyntese\n\n3. **Stor vakuol:**\n   - Planteceller har store vakuoler (kan fylle 90% av cellen)\n   - Brukes til lagring av vann og næringsstoffer\n   - Dyreceller har små eller ingen vakuoler\n\n**Celle B: Dyrecelle**\n\nDenne cellen kommer fra et **dyr** (kan også være sopp eller protist).\n\n**Begrunnelse:**\n\n1. **Mange mitokondrier:**\n   - Alle eukaryote celler (både plante og dyr) har mitokondrier\n   - Mange mitokondrier tyder på høyt energibehov\n   - Dette kan være en muskelcelle, nervecelle, eller annen aktiv celle\n\n2. **Ingen cellevegg:**\n   - Dyreceller har KUN cellememb ran, ikke cellevegg\n   - Dette utelukker plantecelle\n\n3. **Ingen kloroplaster:**\n   - Dyr kan ikke fotosyntese\n   - De må få energi fra mat (heterotrofe)\n   - Dette utelukker plantecelle\n\n**Sammendrag:**\n\n| Egenskap | Celle A | Celle B |\n|----------|---------|----------|\n| Cellevegg | Ja | Nei |\n| Kloroplaster | Ja | Nei |\n| Stor vakuol | Ja | Nei |\n| Mitokondrier | Ja (ikke nevnt, men har) | Ja (mange) |\n| **Type** | **Plantecelle** | **Dyrecelle** |\n\n**Mulige eksempler:**\n- Celle A: Bladcelle, rotcelle\n- Celle B: Muskelcelle, levercelle, nervecelle',
        hints: ['Hvilke strukturer er unike for planteceller?', 'Hvilke strukturer mangler dyreceller?', 'Hva forteller kloroplaster oss?'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};
