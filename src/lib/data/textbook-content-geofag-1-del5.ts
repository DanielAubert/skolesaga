/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Geofag 1 VG2 - Del 5: Forvitring og erosjon
 *
 * Utvidet innhold med 4 underkapitler som dekker LK20-kompetansemaal for geofag 1 (GEO01-01)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1: Fysisk forvitring
// ============================================================================

export const CHAPTER_GEOFAG_1_5_1: TextbookChapter = {
  id: 'geofag-1-5-1',
  courseId: 'geofag-1',
  chapterNumber: '5.1',
  title: 'Fysisk forvitring',
  description: 'Frostsprengning, temperaturforvitring, trykkavlastning og saltsprengning.',
  estimatedMinutes: 20,
  competenceGoals: [
    'beskrive fysisk forvitring og dens hovedtyper',
    'forklare hvordan frostsprengning bryter ned bergarter',
    'gjoere rede for temperaturforvitring og trykkavlastning',
    'vurdere hvilke forvitringstyper som er viktigst i ulike klimasoner',
  ],
  content: [
    {
      id: 'geo1-5-1-intro',
      type: 'text',
      content: `# Fysisk forvitring

Fysisk forvitring, ogsaa kalt mekanisk forvitring, er nedbrytning av bergarter uten at den kjemiske sammensetningen endres. Bergarten brytes opp i mindre biter, men mineralene forblir de samme.

## Hovedpoenget

Ved fysisk forvitring oeker overflatarealet til bergarten. Dette gjoer at kjemisk forvitring kan virke mer effektivt etterpaa. Fysisk og kjemisk forvitring virker derfor ofte sammen.

## Forutsetninger for fysisk forvitring

- **Sprekker** i bergarten der vann kan trenge inn
- **Temperaturvariasjoner** som skaper spenninger
- **Krystallvekst** av is eller salt i porer og sprekker`,
    },
    {
      id: 'geo1-5-1-def-fysisk',
      type: 'definition',
      title: 'Fysisk forvitring',
      content: 'Fysisk (mekanisk) forvitring er nedbrytning av bergarter gjennom fysiske prosesser som ikke endrer den kjemiske sammensetningen. Bergarten brytes opp i mindre fragmenter med samme mineralogi som opphavsmaterialet.',
    },
    {
      id: 'geo1-5-1-frost',
      type: 'text',
      content: `## Frostsprengning

Frostsprengning er den viktigste forvitringstypen i Norge og andre omraader med mange fryse-tine-sykluser.

### Hvordan det skjer

1. Vann trenger inn i sprekker i bergarten
2. Naar vannet fryser, utvider det seg med ca. **9%**
3. Utvidelsen skaper et enormt trykk (opptil 200 MPa)
4. Trykket sprenger bergarten fra innsiden
5. Sprekkene utvides, mer vann kommer inn
6. Prosessen gjentas og forsterkes

### Optimale forhold

- Temperaturer rundt **frysepunktet** (mange fryse-tine-sykluser)
- **Poroese** bergarter med mange sprekker
- Tilgang paa **vann**
- Bergarter med eksisterende **svakhetsoner**

### Resultater

- **Urer** (steinblokker) ved foten av bratte fjellsider
- **Steinsprang** i fjellet
- **Blokkmark** i hoeyefjellet
- Avrunding av skarpe kanter over tid`,
    },
    {
      id: 'geo1-5-1-def-frost',
      type: 'definition',
      title: 'Frostsprengning',
      content: 'Frostsprengning oppstaar naar vann fryser i sprekker i bergarter. Vann utvider seg 9% naar det fryser til is, og dette skaper et trykk som kan sprenge bergarten. Prosessen er mest aktiv i omraader med mange fryse-tine-sykluser.',
    },
    {
      id: 'geo1-5-1-temperatur',
      type: 'text',
      content: `## Temperaturforvitring

Temperaturforvitring oppstaar naar bergarter varmes opp og kjoeles ned gjentatte ganger.

### Mekanismer

**Differensiell utvidelse**
- Ulike mineraler utvider seg ulikt ved oppvarming
- Dette skaper spenninger mellom mineralkornene
- Over tid loesner mineralene fra hverandre

**Skallforvitring (eksfoliasjon)**
- Overflaten varmes mer enn dypere lag
- Ytre lag utvider seg mer enn indre
- Tynne skall flasser av fra overflaten
- Vanlig paa granitt og andre massive bergarter

### Hvor er det viktigst?

- **Oerkener** med store daglige temperatursvingninger
- **Hoeyfjell** med sterk solinnstraaling
- Omraader med **moerke bergarter** som absorberer varme`,
    },
    {
      id: 'geo1-5-1-def-skall',
      type: 'definition',
      title: 'Skallforvitring',
      content: 'Skallforvitring (eksfoliasjon) er en type temperaturforvitring der tynne skall av bergart flasser av fra overflaten. Det skyldes at ytterste lag utvider og trekker seg sammen mer enn dypere lag ved temperaturendringer.',
    },
    {
      id: 'geo1-5-1-trykkavlastning',
      type: 'text',
      content: `## Trykkavlastning

Trykkavlastning er en spesiell form for fysisk forvitring som paavirker dypbergarter.

### Prosessen

1. Dypbergarter (f.eks. granitt) dannes under enormt trykk
2. Erosjon fjerner overliggende lag over millioner av aar
3. Trykket reduseres, og bergarten ekspanderer
4. Ekspansjonen skaper horisontale sprekker parallelt med overflaten
5. Sprekkene kalles **trykkavlastningssprekker**

### Resultater

- **Kuppelfjell** (eksfoliasjonskopler)
- Horisontale sprekksystemer
- Letter tilgang for andre forvitringsprosesser

### Eksempler

- **Half Dome** i Yosemite, USA
- **Sukkertoppsfjellet** i Rio de Janeiro
- Mange norske fjelltopper med avrundede former`,
    },
    {
      id: 'geo1-5-1-def-trykkavlastning',
      type: 'definition',
      title: 'Trykkavlastning',
      content: 'Trykkavlastning oppstaar naar bergarter som ble dannet under hoeyt trykk, eksponeres ved overflaten etter erosjon av overliggende lag. Bergarten ekspanderer og utvikler horisontale sprekker parallelt med overflaten.',
    },
    {
      id: 'geo1-5-1-salt',
      type: 'text',
      content: `## Saltsprengning

Saltsprengning er en viktig forvitringstype i toerre og kystnaere omraader.

### Hvordan det virker

1. Saltvann trenger inn i bergartens porer og sprekker
2. Vannet fordamper og saltmineraler krystalliserer
3. Krystallveksten skaper trykk mot bergarten
4. Gjentatte sykluser bryter ned bergarten

### Typer salter

- **Natriumklorid** (vanlig salt) fra hav
- **Gips** fra grunnvann
- **Diverse sulfater og karbonater**

### Hvor forekommer det?

- **Oerkener** med hoey fordamping
- **Kystomraader** med saltsproeyt
- **Veier** der man bruker veisalt om vinteren
- Bygninger og monumenter i byer`,
    },
    {
      id: 'geo1-5-1-example',
      type: 'example',
      title: 'Forvitring i norsk fjell',
      problem: 'Forklar hvorfor det er saa mye ur (losblokker) ved foten av bratte fjellsider i Norge.',
      solution: `**Dannelsen av ur i norske fjell:**

1. **Klima**: Norge har mange fryse-tine-sykluser, spesielt vaar og hoest
2. **Topografi**: Bratte fjellsider gir eksponert berg
3. **Sprekker**: Fjellsidene har mange svakhetssoner og sprekker
4. **Prosessen**:
   - Vann trenger inn i sprekker
   - Fryser om natten, tiner om dagen
   - Gjentatte sykluser sprenger loes blokker
   - Blokkene faller ned og danner ur

5. **Steinsprang**: Frostsprengning er hovedaarsaken til steinsprang i norske fjell

**Konklusjon**: Kombinasjonen av mange fryse-tine-sykluser og bratt terreng gjoer frostsprengning til den dominerende forvitringstypen i norske fjellomraader.`,
    },
  ],
  exercises: [
    {
      id: 'geo1-5-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor mye utvider vann seg naar det fryser?',
      options: [
        { id: 'a', text: 'Ca. 9%', isCorrect: true },
        { id: 'b', text: 'Ca. 2%', isCorrect: false },
        { id: 'c', text: 'Ca. 25%', isCorrect: false },
        { id: 'd', text: 'Ca. 50%', isCorrect: false },
      ],
      solution: 'Vann utvider seg med ca. 9% naar det fryser. Dette er nok til aa skape et enormt trykk i stengte sprekker og sprenge bergarten.',
    },
    {
      id: 'geo1-5-1-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor frostsprengning er mest effektiv i omraader med mange fryse-tine-sykluser, ikke i omraader som er konstant kalde.',
      solution: 'Frostsprengning krever at vann foerst trenger inn i sprekker (flytende fase), deretter fryser og utvider seg (sprengning), og saa tiner igjen slik at mer vann kan komme inn. I konstant kalde omraader (permafrost) forblir isen frossen og hindrer nye sykluser. Omraader med mange fryse-tine-sykluser (vaar/hoest i Norge) gir mange gjentakelser av prosessen.',
    },
    {
      id: 'geo1-5-1-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er skallforvitring (eksfoliasjon)?',
      options: [
        { id: 'a', text: 'Tynne skall flasser av fra bergoverflaten', isCorrect: true },
        { id: 'b', text: 'Salt krystalliserer i bergartens porer', isCorrect: false },
        { id: 'c', text: 'Roetter sprenger sprekker i berg', isCorrect: false },
        { id: 'd', text: 'Is sprenger bergarten fra innsiden', isCorrect: false },
      ],
      solution: 'Skallforvitring er naar tynne skall flasser av fra bergoverflaten fordi ytterste lag utvider og trekker seg sammen mer enn dypere lag ved temperaturendringer.',
    },
    {
      id: 'geo1-5-1-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar prosessen trykkavlastning og gi et eksempel paa en landform som dannes.',
      solution: 'Trykkavlastning oppstaar naar dypbergarter (f.eks. granitt) som ble dannet under hoeyt trykk, eksponeres ved overflaten etter erosjon av overliggende lag. Naar trykket reduseres, ekspanderer bergarten og utvikler horisontale sprekker parallelt med overflaten. Dette kan danne kuppelfjell (eksfoliasjonskopler) som Half Dome i Yosemite eller Sukkertoppsfjellet i Rio de Janeiro.',
    },
  ],
};

// ============================================================================
// Kapittel 5.2: Kjemisk forvitring
// ============================================================================

export const CHAPTER_GEOFAG_1_5_2: TextbookChapter = {
  id: 'geofag-1-5-2',
  courseId: 'geofag-1',
  chapterNumber: '5.2',
  title: 'Kjemisk forvitring',
  description: 'Opploesning, hydrolyse, oksidasjon og karstdannelse.',
  estimatedMinutes: 20,
  competenceGoals: [
    'beskrive kjemisk forvitring og dens hovedtyper',
    'forklare hvordan vann og syrer bryter ned bergarter kjemisk',
    'gjoere rede for karstprosesser og karstlandskap',
    'vurdere faktorer som paavirker hastigheten av kjemisk forvitring',
  ],
  content: [
    {
      id: 'geo1-5-2-intro',
      type: 'text',
      content: `# Kjemisk forvitring

Kjemisk forvitring bryter ned bergarter ved at mineraler reagerer med vann, syrer eller oksygen. I motsetning til fysisk forvitring endres den **kjemiske sammensetningen** - nye mineraler dannes.

## Hovedpoenget

Kjemisk forvitring omdanner harde, krystallinske mineraler til mykere materialer (ofte leirmineraler). Dette er grunnlaget for dannelse av jordsmonn.

## Viktige faktorer

- **Temperatur**: Kjemiske reaksjoner gaar raskere i varme
- **Fuktighet**: Vann er noedvendig for de fleste reaksjoner
- **Bergartens sammensetning**: Noen mineraler forvitrer lettere
- **Vegetasjon**: Planter produserer syrer som oeker forvitringen`,
    },
    {
      id: 'geo1-5-2-def-kjemisk',
      type: 'definition',
      title: 'Kjemisk forvitring',
      content: 'Kjemisk forvitring er nedbrytning av bergarter gjennom kjemiske reaksjoner med vann, syrer eller gasser. Prosessen endrer mineralenes kjemiske sammensetning og danner nye mineraler, ofte leirmineraler og loeste ioner.',
    },
    {
      id: 'geo1-5-2-opplosning',
      type: 'text',
      content: `## Opploesning

Opploesning er den enkleste formen for kjemisk forvitring - mineraler loeses rett opp i vann.

### Kalkstein og opploesning

Kalkstein (CaCO3) loeses i surt vann:

**CaCO3 + H2O + CO2 -> Ca(HCO3)2** (loeselig)

- Karbondioksid i luften loeses i regnvann
- Danner svak karbonsyre (H2CO3)
- Syren reagerer med kalkstein
- Produktet (kalsiumbikarbonat) er loeselig

### Andre loeselige mineraler

- **Steinsalt** (NaCl) - loeses lett i vann
- **Gips** (CaSO4) - loeses relativt lett
- **Kalkstein** (CaCO3) - loeses i surt vann

### Betydning

Opploesning er aarsaken til:
- Huledannelse i kalkstein
- Karstlandskap
- Hardt vann (kalsiumioner)`,
    },
    {
      id: 'geo1-5-2-def-opplosning',
      type: 'definition',
      title: 'Opploesning',
      content: 'Opploesning er en type kjemisk forvitring der mineraler loeses direkte i vann. Kalkstein loeses i surt vann (karbonsyre), mens mineraler som steinsalt loeses i rent vann.',
    },
    {
      id: 'geo1-5-2-hydrolyse',
      type: 'text',
      content: `## Hydrolyse

Hydrolyse er den viktigste formen for kjemisk forvitring og paavirker de vanligste bergartsdannende mineralene.

### Prosessen

Ved hydrolyse reagerer mineraler med vann og hydroniumioner (H+):

**Feltspat + vann -> leirmineraler + loeste ioner**

### Eksempel: Kalifeltspat

2KAlSi3O8 + 2H+ + 9H2O -> Al2Si2O5(OH)4 + 4H4SiO4 + 2K+

- **Kalifeltspat** (vanlig mineral i granitt) brytes ned
- **Kaolinitt** (leirmineral) dannes
- **Kiselsyre** og **kaliumioner** loeses i vannet

### Resultater

- Granitt forvitrer til grus (kvarts) og leire
- Silikatmineraler omdannes til leirmineraler
- Loeslige ioner transporteres til havet`,
    },
    {
      id: 'geo1-5-2-def-hydrolyse',
      type: 'definition',
      title: 'Hydrolyse',
      content: 'Hydrolyse er en kjemisk reaksjon der mineraler reagerer med vann og hydroniumioner. Silikatmineraler (som feltspat) brytes ned og danner leirmineraler. Dette er den viktigste kjemiske forvitringstypen for de fleste bergarter.',
    },
    {
      id: 'geo1-5-2-oksidasjon',
      type: 'text',
      content: `## Oksidasjon

Oksidasjon er kjemisk forvitring der mineraler reagerer med oksygen.

### Jernoksidasjon (rusting)

Det vanligste eksemplet er oksidasjon av jernholdige mineraler:

**4Fe2+ + 3O2 + 6H2O -> 4FeOOH** (rust)

### Kjennetegn

- Gir **roedbrune** og **oransje** farger
- Paavirker jernholdige mineraler (pyritt, magnetitt, biotitt)
- Svekker bergartens struktur
- Synes tydelig i forvitringsskorpen

### Eksempler

- **Rustflekker** paa granitt og gneis
- **Roedfarget** forvitringsjord i tropene
- **Ayers Rock** i Australia (roedfarget av jernoksider)`,
    },
    {
      id: 'geo1-5-2-def-oksidasjon',
      type: 'definition',
      title: 'Oksidasjon',
      content: 'Oksidasjon er en kjemisk reaksjon der mineraler reagerer med oksygen. Jernholdige mineraler ruster og gir karakteristiske roedbrune farger.',
    },
    {
      id: 'geo1-5-2-karst',
      type: 'text',
      content: `## Karst og karstlandskap

Karst er et spesielt landskap som dannes ved kjemisk opploesning av kalkstein og andre loeselige bergarter.

### Karstprosessen

1. CO2 fra luft/jord loeses i vann -> karbonsyre
2. Karbonsyren loeser opp kalkstein langs sprekker
3. Sprekkene utvides til grotter og hulrom
4. Store underjordiske systemer utvikles

### Karstformer

**Overflateformer:**
- **Doliner**: Runde groper i terrenget
- **Karrenfield**: Riller og furer i bar kalkstein
- **Uvalaer**: Sammenslatte doliner
- **Poljer**: Store, flate karstbassenger

**Underjordiske former:**
- **Grotter** og grottesystemer
- **Stalaktitter** (henger fra taket)
- **Stalagmitter** (vokser fra gulvet)
- **Underjordiske elver**

### Karstomraader i Norge

- **Nordland** har Norges stoerste karstomraader
- Groenligrotta og Svartisen-omraadet
- Mo i Rana-regionen`,
    },
    {
      id: 'geo1-5-2-def-karst',
      type: 'definition',
      title: 'Karst',
      content: 'Karst er et landskap dannet ved opploesning av loeselige bergarter, saerlig kalkstein. Kjennetegnes av doliner, grotter, underjordiske elver og mangel paa overflatevann. Navnet kommer fra Karst-regionen i Slovenia.',
    },
    {
      id: 'geo1-5-2-example',
      type: 'example',
      title: 'Forvitring av granitt',
      problem: 'Beskriv hvordan granitt forvitrer kjemisk, og hvilke produkter som dannes.',
      solution: `**Kjemisk forvitring av granitt:**

Granitt bestaar av tre hovedmineraler: kvarts, feltspat og glimmer.

**1. Feltspat (60% av granitten)**
- Hydrolyse bryter ned feltspat
- Produkter: Leirmineraler (kaolinitt) + loeste ioner (K+, Na+, Ca2+)
- Loeslige ioner transporteres bort med vann

**2. Glimmer (biotitt, muskovitt)**
- Biotitt oksiderer (jernholdig) -> rust
- Muskovitt hydrolyser -> leirmineraler
- Biotitt forvitrer raskere enn muskovitt

**3. Kvarts (30% av granitten)**
- Naesten uforvitrelig
- Blir liggende igjen som sandkorn

**Sluttprodukt:**
- Kvartssand + leirmineraler = grusen/jorda vi finner paa forvitret granitt`,
    },
  ],
  exercises: [
    {
      id: 'geo1-5-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken kjemisk forvitringstype bryter ned feltspat?',
      options: [
        { id: 'a', text: 'Hydrolyse', isCorrect: true },
        { id: 'b', text: 'Oksidasjon', isCorrect: false },
        { id: 'c', text: 'Opploesning', isCorrect: false },
        { id: 'd', text: 'Karbonatforvitring', isCorrect: false },
      ],
      solution: 'Hydrolyse er hovedprosessen som bryter ned feltspat. Feltspat reagerer med vann og hydroniumioner og danner leirmineraler og loeslige ioner.',
    },
    {
      id: 'geo1-5-2-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvordan kalkstein loeses opp og hvorfor dette skaper grotter.',
      solution: 'CO2 fra luften loeses i regnvann og danner svak karbonsyre. Denne syren reagerer med kalkstein (CaCO3) og danner loeselig kalsiumbikarbonat. Reaksjonen: CaCO3 + H2O + CO2 -> Ca(HCO3)2. Vannet finner vei langs sprekker i kalksteinen. Over tid utvides sprekkene til grotter og grottesystemer naar mer og mer kalkstein loeses bort.',
    },
    {
      id: 'geo1-5-2-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva gir den roedbrune fargen i forvitret bergart?',
      options: [
        { id: 'a', text: 'Jernoksider (rust)', isCorrect: true },
        { id: 'b', text: 'Leirmineraler', isCorrect: false },
        { id: 'c', text: 'Kvarts', isCorrect: false },
        { id: 'd', text: 'Kalkstein', isCorrect: false },
      ],
      solution: 'Roedbrune farger i forvitret bergart skyldes jernoksider dannet ved oksidasjon av jernholdige mineraler. Jern-II oksideres til jern-III som gir rustfargen.',
    },
    {
      id: 'geo1-5-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er karst, og nevn tre karakteristiske karstformer.',
      solution: 'Karst er et landskap dannet ved kjemisk opploesning av loeselige bergarter, saerlig kalkstein. Tre karakteristiske former: 1) Doliner - runde groper i overflaten. 2) Grotter - underjordiske hulrom. 3) Stalaktitter/stalagmitter - dryppsteinsdannelser i grotter. Andre eksempler: karrenfield, uvalaer, poljer, underjordiske elver.',
    },
    {
      id: 'geo1-5-2-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket mineral er mest motstandsdyktig mot kjemisk forvitring?',
      options: [
        { id: 'a', text: 'Kvarts', isCorrect: true },
        { id: 'b', text: 'Olivin', isCorrect: false },
        { id: 'c', text: 'Feltspat', isCorrect: false },
        { id: 'd', text: 'Biotitt', isCorrect: false },
      ],
      solution: 'Kvarts (SiO2) er svaert motstandsdyktig mot kjemisk forvitring fordi det har sterke Si-O-bindinger og ingen svake punkter. Olivin og pyroksen forvitrer mye raskere.',
    },
  ],
};

// ============================================================================
// Kapittel 5.3: Biologisk forvitring
// ============================================================================

export const CHAPTER_GEOFAG_1_5_3: TextbookChapter = {
  id: 'geofag-1-5-3',
  courseId: 'geofag-1',
  chapterNumber: '5.3',
  title: 'Biologisk forvitring',
  description: 'Rotsprengning, organismer og samspill mellom biologi og geologi.',
  estimatedMinutes: 18,
  competenceGoals: [
    'beskrive biologisk forvitring og dens hovedtyper',
    'forklare hvordan planter og dyr bryter ned bergarter',
    'gjoere rede for samspillet mellom biologisk, fysisk og kjemisk forvitring',
    'vurdere betydningen av biologisk forvitring for jordsmonndannelse',
  ],
  content: [
    {
      id: 'geo1-5-3-intro',
      type: 'text',
      content: `# Biologisk forvitring

Biologisk forvitring er nedbrytning av bergarter foraarsaket av levende organismer. Denne forvitringstypen kan vaere baade fysisk (mekanisk) og kjemisk, avhengig av hvordan organismene paavirker bergarten.

## Hovedpoenget

Biologisk forvitring er ofte undervurdert, men spiller en viktig rolle i jordsmonndannelse og i det geologiske kretsloepet. Organismer kan baade sprenge bergarter fysisk og bryte dem ned kjemisk.

## Typer biologisk forvitring

- **Mekanisk biologisk forvitring**: Fysisk sprengning av roetter og gravende dyr
- **Kjemisk biologisk forvitring**: Syrer fra organismer loeser opp mineraler`,
    },
    {
      id: 'geo1-5-3-def-biologisk',
      type: 'definition',
      title: 'Biologisk forvitring',
      content: 'Biologisk forvitring er nedbrytning av bergarter foraarsaket av levende organismer. Det inkluderer baade mekaniske prosesser (som rotsprengning) og kjemiske prosesser (som syreproduksjon fra lav og bakterier).',
    },
    {
      id: 'geo1-5-3-rotsprengning',
      type: 'text',
      content: `## Rotsprengning

Rotsprengning er den mest synlige formen for biologisk forvitring.

### Hvordan det skjer

1. Plantefroe spirer i en sprekk i bergarten
2. Roettene vokser nedover og utover
3. Etter hvert som roettene tykner, utvider de sprekkene
4. Trykket fra voksende roetter kan vaere betydelig
5. Over tid kan store steinblokker sprenges

### Kraftig rotsprengning

- Traer kan utoeye trykk paa flere hundre kPa
- Store traer kan sprenge steinblokker paa flere tonn
- Prosessen tar aar til tiaar

### Eksempler

- **Angkor Wat** i Kambodsja: Kapoktraer har vokst inn i tempelruinene
- **Fortauer og veier**: Traeroetter sprenger asfalt og betong
- **Fjellsprekker**: Bjoerrk og furu vokser i bergsprekker i norske fjell`,
    },
    {
      id: 'geo1-5-3-def-rotsprengning',
      type: 'definition',
      title: 'Rotsprengning',
      content: 'Rotsprengning er mekanisk biologisk forvitring der plantereoetter vokser inn i sprekker i bergarten og utvider dem. Over tid kan dette sprenge store steinblokker.',
    },
    {
      id: 'geo1-5-3-dyr',
      type: 'text',
      content: `## Gravende dyr

Mange dyr bidrar til forvitring gjennom sin gravevirksomhet.

### Mekaniske effekter

- **Jordormer**: Blander og lufter jord, eksponerer ny bergart
- **Gnagere**: Muldvarper, jordekorner graver ganger
- **Insekter**: Maur og termitter flytter store mengder jord
- **Stoerrre pattedyr**: Grevlinger, rev graver hi

### Effekter paa forvitring

- Ny bergoverflate eksponeres for vaer og vind
- Organisk materiale blandes inn i jord
- Oekt vanninfiltrering langs gangene
- Jordstrukturen endres

### Mengder materiale

- En enkelt muldvarp kan flytte opp til 20 kg jord per dag
- Maur kan bringe betydelige mengder finmateriale til overflaten
- Jordormer kan bearbeide hele det oeverste jordlaget over tid`,
    },
    {
      id: 'geo1-5-3-lav',
      type: 'text',
      content: `## Lav og mikroorganismer

Lav og mikroorganismer er pionerorganismer som koloniserer bar bergart.

### Lav

- Symbiose mellom sopp og alge/cyanobakterie
- Kan vokse paa naesten alle bergoverflater
- Produserer **lavsyrer** som loeser mineraler
- Trenger inn i mikroskopiske sprekker
- Foerste organismer paa ny bergart

### Bakterier og sopp

- Produserer organiske syrer
- Bryter ned mineraler for aa faa naering
- Spesielt viktige i jordsmonn
- Akselererer kjemisk forvitring betydelig

### Prosessen

1. Lav koloniserer bar bergoverflate
2. Lavsyrer loeser mineraler - skaper tynn jordlomme
3. Moser og smaa planter kan etablere seg
4. Mer organisk materiale - mer jord
5. Stoerre planter kan vokse - mer rotforvitring`,
    },
    {
      id: 'geo1-5-3-def-lav',
      type: 'definition',
      title: 'Lavsyrer',
      content: 'Lavsyrer er organiske syrer produsert av lav. De loeser mineraler i bergoverflaten, noe som gir laven tilgang til naering og samtidig forvitrer bergarten. Dette er kjemisk biologisk forvitring.',
    },
    {
      id: 'geo1-5-3-mennesker',
      type: 'text',
      content: `## Menneskelig paavirkning

Mennesker er ogsaa en biologisk agent som paavirker forvitring.

### Direkte effekter

- **Gruvedrift**: Eksponerer enorme mengder ny bergart
- **Byggevirksomhet**: Sprenger og knuser berg
- **Jordbruk**: Ploying eksponerer jord for forvitring
- **Veier og tunneler**: Aapner nye bergoverflater

### Indirekte effekter

- **Sur nedbor**: Industriutslipp oeker kjemisk forvitring
- **Klimaendringer**: Paavirker forvitringsrater
- **Arealendringer**: Fjerning av vegetasjon endrer forvitringsmoenster

### Stoerrelsesorden

- Mennesker flytter mer materiale enn alle naturlige prosesser til sammen
- Gruvedrift produserer milliarder tonn avfall aarlig
- Byggebransjen bruker enorme mengder knust stein`,
    },
    {
      id: 'geo1-5-3-samspill',
      type: 'text',
      content: `## Samspill mellom forvitringstyper

I virkeligheten virker biologisk, fysisk og kjemisk forvitring ofte sammen.

### Eksempel: Jordsmonndannelse

1. **Fysisk forvitring** bryter ned bergart til mindre biter
2. **Lav** (biologisk) koloniserer overflaten
3. **Lavsyrer** (kjemisk biologisk) loeser mineraler
4. **Planter** etablerer seg (biologisk)
5. **Roetter** utvider sprekker (fysisk biologisk)
6. **Organisk materiale** brytes ned (biologisk/kjemisk)
7. **Jordsmonn** utvikles gradvis

### Forsterkende effekter

- Fysisk forvitring oeker overflatearealet -> mer kjemisk forvitring
- Biologisk aktivitet produserer syrer -> mer kjemisk forvitring
- Mer jord -> mer vegetasjon -> mer biologisk forvitring
- Positiv tilbakekobling akselererer hele prosessen`,
    },
    {
      id: 'geo1-5-3-example',
      type: 'example',
      title: 'Pionersuksesjon paa lava',
      problem: 'Beskriv hvordan biologisk forvitring bidrar til aa omdanne fersk lava til fruktbar jord.',
      solution: `**Fra lava til jord - biologisk forvitring i aksjon:**

**Fase 1: Kolonisering (0-50 aar)**
- Lav er foerste organismer paa avkjoelt lava
- Lavsyrer begynner aa loese mineraler
- Mikroskopiske lommer av "jord" dannes
- Cyanobakterier fikserer nitrogen

**Fase 2: Pionerplanter (50-200 aar)**
- Moser etablerer seg i lavkoloniene
- Smaaa bregner og graes finner fotfeste
- Roetter begynner aa utvide sprekker
- Organisk materiale akkumuleres

**Fase 3: Busker og traer (200-1000 aar)**
- Busker som laerk og vier etablerer seg
- Traeroetter driver aktiv rotsprengning
- Lav fortsetter paa nye overflater
- Jordlaget tykner betydelig

**Fase 4: Moden jord (1000+ aar)**
- Frodig vegetasjon dekker omraadet
- Dyp jord med rik humus
- Aktivt dyreliv bidrar til jordblanding
- Syklusen fortsetter

**Eksempel**: Hawaii og Island viser denne suksesjonen tydelig.`,
    },
  ],
  exercises: [
    {
      id: 'geo1-5-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er rotsprengning?',
      options: [
        { id: 'a', text: 'Planteroetter som vokser inn i sprekker og utvider dem', isCorrect: true },
        { id: 'b', text: 'Roetter som produserer syrer', isCorrect: false },
        { id: 'c', text: 'Frostsprengning i rotsonen', isCorrect: false },
        { id: 'd', text: 'Roetter som absorberer vann fra bergart', isCorrect: false },
      ],
      solution: 'Rotsprengning er mekanisk biologisk forvitring der planteroetter vokser inn i sprekker i bergarten og fysisk utvider dem. Over tid kan dette sprenge store steinblokker.',
    },
    {
      id: 'geo1-5-3-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvordan lav bidrar til forvitring av bar bergart.',
      solution: 'Lav koloniserer bar bergoverflate og produserer lavsyrer (organiske syrer). Disse syrene loeser mineraler i bergoverflaten - dette er kjemisk biologisk forvitring. Lav kan ogsaa trenge fysisk inn i mikroskopiske sprekker. Dette skaper tynne jordlommer der andre planter kan etablere seg. Lav er derfor viktige pionerorganismer i jordsmonndannelse.',
    },
    {
      id: 'geo1-5-3-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken organisme er typisk foerst til aa kolonisere bar bergart?',
      options: [
        { id: 'a', text: 'Lav', isCorrect: true },
        { id: 'b', text: 'Graes', isCorrect: false },
        { id: 'c', text: 'Busker', isCorrect: false },
        { id: 'd', text: 'Traer', isCorrect: false },
      ],
      solution: 'Lav er pionerorganismer som kan kolonisere naesten alle bergoverflater. De trenger ikke jord, bare fuktighet og sollys. Lavsyrer begynner aa loese mineraler og skaper grunnlag for andre planter.',
    },
    {
      id: 'geo1-5-3-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gi tre eksempler paa hvordan dyr bidrar til biologisk forvitring.',
      solution: '1) Jordormer blander og lufter jord, eksponerer ny bergart for forvitring og oeker vanninfiltrering. 2) Gravende pattedyr (muldvarper, grevlinger) lager ganger som eksponerer ny bergoverflate. 3) Maur og termitter flytter store mengder jord og bringer finmateriale til overflaten. Alle disse aktivitetene oeker kontakten mellom bergart og forvitringsfaktorer.',
    },
    {
      id: 'geo1-5-3-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar samspillet mellom fysisk, kjemisk og biologisk forvitring i dannelsen av jordsmonn.',
      solution: 'Jordsmonndannelse krever samspill mellom alle forvitringstyper: 1) Fysisk forvitring (frost, temperatur) bryter ned bergart til mindre biter og oeker overflatearealet. 2) Lav koloniserer og starter kjemisk biologisk forvitring med lavsyrer. 3) Planter etablerer seg og driver rotsprengning (mekanisk biologisk). 4) Organisk materiale brytes ned av bakterier og sopp, som produserer syrer (kjemisk biologisk). 5) Gravende dyr blander jorda. Hver prosess forsterker de andre i en positiv tilbakekobling.',
    },
  ],
};

// ============================================================================
// Kapittel 5.4: Erosjon og sedimenttransport
// ============================================================================

export const CHAPTER_GEOFAG_1_5_4: TextbookChapter = {
  id: 'geofag-1-5-4',
  courseId: 'geofag-1',
  chapterNumber: '5.4',
  title: 'Erosjon og sedimenttransport',
  description: 'Erosjonsagenser, transportmekanismer og avsetning av sedimenter.',
  estimatedMinutes: 25,
  competenceGoals: [
    'beskrive erosjon og skille det fra forvitring',
    'forklare hvordan vann, is, vind og gravitasjon eroderer og transporterer materiale',
    'gjoere rede for ulike transportmekanismer og avsetningsformer',
    'vurdere faktorer som styrer erosjon, transport og avsetning',
  ],
  content: [
    {
      id: 'geo1-5-4-intro',
      type: 'text',
      content: `# Erosjon og sedimenttransport

Mens forvitring bryter ned bergarter paa stedet, handler **erosjon** om aa fjerne og transportere det loese materialet. Erosjon og transport er tett koblet - uten transport ville forvitringsprodukter bare hope seg opp.

## Erosjon vs. forvitring

| Forvitring | Erosjon |
|------------|---------|
| Bryter ned bergarter | Fjerner loest materiale |
| Skjer paa stedet | Inneb rer bevegelse |
| Fysisk eller kjemisk | Utfoeres av agenser |

## Erosjonsagenser

- **Rennende vann** (elver)
- **Is** (isbreer)
- **Vind**
- **Gravitasjon** (skred)
- **Boelger** (kystnaert)`,
    },
    {
      id: 'geo1-5-4-def-erosjon',
      type: 'definition',
      title: 'Erosjon',
      content: 'Erosjon er prosessen der forvitret materiale fjernes og transporteres bort fra opphavsstedet. Erosjonsagenser inkluderer rennende vann, isbreer, vind, gravitasjon og boelger.',
    },
    {
      id: 'geo1-5-4-vann',
      type: 'text',
      content: `## Erosjon av rennende vann

Rennende vann er den viktigste erosjonsagensen globalt og former det meste av landskapet.

### Erosjonsmekanismer

**Hydraulisk erosjon**
- Vannets kraft river loes partikler
- Viktigst i flom og sterk stroem
- Undergraver elvebredder

**Abrasjon (slipning)**
- Partikler i vannet sliper bunnen
- Som sandpapir mot fjellet
- Danner jettegryter og kloefter

**Kavitasjon**
- Luftbobler kollapser og skaper sjokkboelger
- Viktig ved fosser og sterk turbulens

**Opploesning**
- Kjemisk erosjon av loeselige bergarter
- Viktig i kalksteinsomraader

### Faktorer som styrer elve-erosjon

- **Vannfoering**: Mer vann = mer erosjon
- **Hastighet**: v^2 gir 4x mer erosjonsevne
- **Gradient**: Brattere = raskere stroem
- **Bergart**: Myk = raskere erosjon
- **Sedimentlast**: Mer sand/grus = mer abrasjon`,
    },
    {
      id: 'geo1-5-4-def-abrasjon',
      type: 'definition',
      title: 'Abrasjon',
      content: 'Abrasjon er mekanisk slitasje der partikler transportert av vann, is eller vind sliper mot berggrunn eller andre partikler. Resultatet er avrunding av partikler og utgraving av underlaget.',
    },
    {
      id: 'geo1-5-4-is',
      type: 'text',
      content: `## Glasial erosjon (is)

Isbreer er ekstremt effektive erosjonsagenser som har formet det norske landskapet.

### Erosjonsmekanismer

**Plukking (quarrying)**
- Is fryser fast i bergsprekker
- Naar isbreen beveger seg, rives blokker loes
- Gir ujevn, taggete overflate paa le-siden

**Abrasjon (slipning)**
- Steiner frosset fast i isen sliper bunnen
- Gir glatte, polerte flater (slipte sva)
- Etterlater skuringsstriper

**Knusing**
- Vekten av isen knuser underliggende berg
- Produserer finmateriale (bremel)

### Glasiale landformer fra erosjon

- **U-daler**: Brede daler med bratte sider
- **Fjorder**: Drukne U-daler
- **Botner**: Sirkelformede nisjer
- **Tinder og egger**: Skarpe topper mellom botner
- **Rundsva**: Avrundede bergknauser`,
    },
    {
      id: 'geo1-5-4-vind-grav',
      type: 'text',
      content: `## Eolisk erosjon (vind) og massebevegelse

### Vinderosjon

Vind er en viktig erosjonsagens i toerre omraader.

**Deflasjon**
- Vinden blaaser bort loese partikler
- Etterlater grovere materiale (oerkenbrostein)

**Sandblasting**
- Sandkorn slipes mot bergoverflater
- Danner vindslipte steiner (ventifakter)

### Massebevegelse (gravitasjon)

Gravitasjon driver materiale nedover skraaninger.

**Steinsprang og steinskred**
- Fritt fall og raskt bevegelse av stein
- Utloest av frostsprengning

**Jordskred**
- Vannmettet jord glir ut
- Utloest av kraftig regn

**Leirskred (kvikkleireskred)**
- Marin leire mister styrke
- Kan vaere katastrofalt (Rissa-skredet)

**Solifluksjon**
- Sakte kryping av vannmettet jord
- Vanlig i arktiske omraader`,
    },
    {
      id: 'geo1-5-4-def-massebevegelse',
      type: 'definition',
      title: 'Massebevegelse',
      content: 'Massebevegelse er forflytning av jord og bergmasser nedover en skraaning under paavirkning av gravitasjon. Inkluderer steinsprang, skred, utglidninger og sakte kryping.',
    },
    {
      id: 'geo1-5-4-transport',
      type: 'text',
      content: `## Transportmekanismer

Naar materiale er loesrevet, kan det transporteres paa ulike maater.

### Transport i vann

**Loest last (dissolved load)**
- Ioner loest i vannet
- Usynlig, men kan vaere betydelig
- Kalsium, natrium, silika

**Suspendert last**
- Finkornig materiale holdes svevende
- Leire, silt, fin sand
- Gir farget vann (breelver)

**Bunnlast**
- Grovt materiale langs bunnen
- Rulling, glidning, saltasjon
- Sand, grus, stein

### Transport av vind

- **Suspensjon**: Stoev kan transporteres tusenvis av km
- **Saltasjon**: Sand hopper langs bakken
- **Kryping**: Grove korn skyves av salterende korn

### Transport av is

- Is kan transportere **alle stoerrelser** materiale
- Fra fineste leire til hus-store blokker
- Materiale fryses fast i isen`,
    },
    {
      id: 'geo1-5-4-def-saltasjon',
      type: 'definition',
      title: 'Saltasjon',
      content: 'Saltasjon er en transportmekanisme der partikler (saerlig sand) hopper langs overflaten. Korn loeftes av vann eller vind, faller ned og sparker opp nye korn.',
    },
    {
      id: 'geo1-5-4-avsetning',
      type: 'text',
      content: `## Avsetning og sedimentasjon

Naar erosjonsagensen mister energi, avsettes det transporterte materialet.

### Avsetning skjer naar:

- Vannhastigheten avtar
- Vinden stilner
- Isen smelter
- Helningen flater ut

### Fluviale avsetninger (elver)

- **Elvesletter**: Flate omraader langs elven
- **Elvevifter**: Der bratt dal moeter flat slette
- **Delta**: Der elv moeter innsjoe eller hav

### Glasiale avsetninger

- **Morene**: Usortert materiale fra is
- **Eskere**: Langstrakte rygger av grus
- **Drumlin**: Stroelinjede hauger

### Sortering

Elver og vind sorterer sedimenter etter stoerrelse:
- Grovt materiale avsettes foerst
- Finere materiale transporteres lengre
- Morene er usortert (is sorterer ikke)`,
    },
    {
      id: 'geo1-5-4-example',
      type: 'example',
      title: 'Erosjon i en norsk elv',
      problem: 'Beskriv hvordan en norsk elv eroderer og transporterer materiale fra fjell til fjord.',
      solution: `**Elvens erosjon og transport:**

**Oevre loep (fjellet):**
- Bratt gradient -> hoey vannhastighet
- Aktiv erosjon av bunnen (vertikal nedskaering)
- Danner V-dal og kloefter
- Transporterer grov bunnlast (stein, grus)

**Midtre loep:**
- Moderat gradient
- Balanse mellom erosjon og avsetning
- Lateral erosjon -> elveslynger begynner
- Suspendert last dominerer

**Nedre loep (mot fjorden):**
- Lav gradient -> lav hastighet
- Avsetning dominerer
- Deltadannelse ved utloepet
- Fineste materiale avsettes sist

**Flom:**
- Oekt vannfoering -> oekt erosjonsevne
- Kan flytte store blokker
- Omformer elveleiet
- Avsetter materiale paa flomsletter

**Konklusjon**: Elven sorterer materialet - grovt i fjellet, fint ved fjorden.`,
    },
  ],
  exercises: [
    {
      id: 'geo1-5-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er hovedforskjellen mellom forvitring og erosjon?',
      options: [
        { id: 'a', text: 'Forvitring skjer paa stedet, erosjon inneb rer transport', isCorrect: true },
        { id: 'b', text: 'Forvitring er raskere enn erosjon', isCorrect: false },
        { id: 'c', text: 'Forvitring skjer bare i fjell, erosjon skjer overalt', isCorrect: false },
        { id: 'd', text: 'Forvitring er kjemisk, erosjon er fysisk', isCorrect: false },
      ],
      solution: 'Forvitring bryter ned bergarter paa stedet uten bevegelse. Erosjon inneb rer at det loese materialet fjernes og transporteres bort av vann, is, vind eller gravitasjon.',
    },
    {
      id: 'geo1-5-4-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom plukking og abrasjon ved glasial erosjon.',
      solution: 'Plukking (quarrying) skjer naar is fryser fast i sprekker i bergarten. Naar isbreen beveger seg, rives blokker loes. Dette gir ujevn overflate og er mest aktivt paa le-siden av bergknauser. Abrasjon (slipning) skjer naar steiner frosset inn i isen sliper mot bergrunnen. Dette gir glatte, polerte flater og skuringsstriper.',
    },
    {
      id: 'geo1-5-4-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken transportmekanisme beskriver sand som hopper langs bakken?',
      options: [
        { id: 'a', text: 'Saltasjon', isCorrect: true },
        { id: 'b', text: 'Suspensjon', isCorrect: false },
        { id: 'c', text: 'Rulling', isCorrect: false },
        { id: 'd', text: 'Deflasjon', isCorrect: false },
      ],
      solution: 'Saltasjon er transportmekanismen der partikler (saerlig sand) hopper langs overflaten. Korn loeftes av vind eller vann, faller ned og sparker opp nye korn.',
    },
    {
      id: 'geo1-5-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Nevn tre typer massebevegelse og beskriv kort hver av dem.',
      solution: '1) Steinsprang - fritt fall av enkeltblokker fra bratte fjellsider, ofte utloest av frostsprengning. 2) Jordskred - vannmettet jord som glir ut, vanlig langs veiskjaeringer ved kraftig regn. 3) Kvikkleireskred - marin leire som plutselig mister styrken og flyter ut, kan vaere katastrofalt. Andre eksempler: steinskred, solifluksjon.',
    },
    {
      id: 'geo1-5-4-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken erosjonsagens er viktigst globalt?',
      options: [
        { id: 'a', text: 'Rennende vann', isCorrect: true },
        { id: 'b', text: 'Is', isCorrect: false },
        { id: 'c', text: 'Vind', isCorrect: false },
        { id: 'd', text: 'Gravitasjon', isCorrect: false },
      ],
      solution: 'Rennende vann er den viktigste erosjonsagensen globalt. Elver eroderer, transporterer og avsetter enorme mengder materiale hvert aar og har formet det meste av jordens landskap.',
    },
  ],
};

// ============================================================================
// Samle alle kapitler fra Del 5
// ============================================================================

export const GEOFAG_1_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_GEOFAG_1_5_1,
  CHAPTER_GEOFAG_1_5_2,
  CHAPTER_GEOFAG_1_5_3,
  CHAPTER_GEOFAG_1_5_4,
];

export function getGeofag1Del5Chapter(chapterId: string): TextbookChapter | undefined {
  return GEOFAG_1_DEL5_CHAPTERS.find(chapter => chapter.id === chapterId);
}
