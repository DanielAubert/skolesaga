/**
 * Naturfag VG1 - Kapittel 4.1: Kroppens celler og vev
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_NAT_VG1_4_1: TextbookChapter = {
  id: 'nat-vg1-4-1',
  courseId: 'nat-vg1',
  chapterNumber: '4.1',
  title: 'Kroppens celler og vev',
  description: 'Lær om kroppens byggesteiner, ulike celletyper, vev, organer og homeostase.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive oppbygningen av celler og vev i menneskekroppen',
    'forklare begrepet homeostase og kroppens regulering',
    'beskrive ulike vevstyper og deres funksjoner',
    'forklare hvordan celler spesialiseres til ulike funksjoner',
  ],
  content: [
    {
      id: 'nat-vg1-4-1-intro',
      type: 'text',
      content: `# Kroppens celler og vev

Menneskekroppen består av omtrent 37 billioner celler. Disse cellene er organisert i et hierarki:

**Celler → Vev → Organer → Organsystemer → Organisme**

Hver celle har en spesialisert funksjon, og celler med lignende funksjoner samarbeider i vev. Vevene danner organer, som samarbeider i organsystemer.

## Fra befruktning til spesialiserte celler

Alle kroppens celler starter fra én celle - den befruktede eggcellen. Gjennom celledeling og **spesialisering** (differensiering) utvikles over 200 ulike celletyper:

- **Nerveceller** - sender signaler
- **Muskelceller** - bevegelse
- **Blodceller** - transport av oksygen
- **Hudceller** - beskyttelse
- **Benceller** - støtte

Alle disse cellene har samme DNA, men ulike gener er aktivert i ulike celletyper. Dette gjør at cellene får forskjellige former og funksjoner.`,
    },
    {
      id: 'nat-vg1-4-1-def-vev',
      type: 'definition',
      title: 'Vev',
      content: 'Et vev er en gruppe av celler med lignende struktur og funksjon som samarbeider for å utføre en bestemt oppgave i kroppen.',
    },
    {
      id: 'nat-vg1-4-1-vevstyper',
      type: 'text',
      content: `# De fire hovedtypene vev

Menneskekroppen har fire hovedtyper vev:

## 1. Epitelvev (dekkvev)

**Funksjon:** Dekker kroppens overflate og indre organer. Beskyttelse, sekresjon og opptak.

**Egenskaper:**
- Celler tett pakket sammen
- Ingen blodårer (får næring ved diffusjon)
- Fornyes kontinuerlig

**Eksempler:**
- **Hud (epidermis):** Beskytter mot skader og mikrober
- **Tarmslimhinne:** Tar opp næringsstoffer
- **Lungeblærer:** Gassutveksling (O₂ og CO₂)
- **Kjertelvev:** Produserer hormoner og enzymer (f.eks. spyttkjertler, bukspyttkjertel)

## 2. Bindevev

**Funksjon:** Støtte, beskyttelse, forbinder andre vev. Transport (blod).

**Egenskaper:**
- Celler spredt i en **ekstracellulær matriks** (stoff mellom cellene)
- Inneholder proteiner som kollagen (styrke) og elastin (elastisitet)
- Godt forsynt med blodårer (unntatt brusk)

**Eksempler:**
- **Løst bindevev:** Fyller rom mellom organer
- **Fett (adipose vev):** Energilagring, isolasjon
- **Brusk:** Støtte, finnes i ledd, øre, nese
- **Ben:** Hardt bindevev, støtter kroppen
- **Blod:** Flytende bindevev, transport av oksygen, næring og avfallsstoffer
- **Sener:** Forbinder muskler til ben
- **Ligamenter:** Forbinder ben til hverandre

## 3. Muskelvev

**Funksjon:** Bevegelse (sammentrekning og avslapning).

**Tre typer muskelvev:**

**a) Skjelettmuskulatur (tverrstripet, vilkårlig)**
- Festet til skjelettet
- Styres bevisst (frivillig kontroll)
- Rask sammentrekning
- Blir trøtt (krever hvile)
- Eksempel: Biceps, quadriceps

**b) Glatt muskulatur (glatt, ufrivillig)**
- Finnes i indre organer
- Styres av det autonome nervesystemet (ubevisst)
- Langsom, langvarig sammentrekning
- Blir ikke trøtt
- Eksempel: Mage, tarm, blodårer, urinblære

**c) Hjertemuskulatur (tverrstripet, ufrivillig)**
- Finnes kun i hjertet
- Styres automatisk (egen rytme)
- Kan jobbe hele livet uten å bli trøtt
- Spesielle forbindelser mellom celler (gap junctions) for synkron sammentrekning

## 4. Nervevev

**Funksjon:** Mottak, behandling og overføring av signaler.

**To hovedtyper celler:**

**a) Nerveceller (nevroner)**
- Sender elektriske signaler
- Består av cellekropp, dendritter (mottar signaler) og akson (sender signaler)
- Kan være opptil 1 meter lange

**b) Gliaceller (støtteceller)**
- 10 ganger flere enn nerveceller
- Støtter og beskytter nerveceller
- Produserer myelinskjeden (isolasjon rundt aksoner)
- Fjerner avfallsstoffer
- Regulerer ionebalanse`,
    },
    {
      id: 'nat-vg1-4-1-ex-vevstyper',
      type: 'example',
      title: 'Eksempel: Vevstyper i hjertet',
      problem: 'Hjertet består av flere vevstyper. Identifiser hvilke vevstyper som finnes og deres funksjoner.',
      solution: `**Vev i hjertet:**

**1. Hjertemuskulatur (muskelvev)**
- **Funksjon:** Pumper blod gjennom sammentrekning
- Spesialisert tverrstripet muskulatur
- Arbeider automatisk og uavbrutt hele livet

**2. Epitelvev**
- **Endokard:** Glatt indre belegg i hjertekamrene
- **Funksjon:** Reduserer friksjon, forhindrer blodpropp

**3. Bindevev**
- **Hjerteklaffer:** Sikrer riktig retning på blodstrømmen
- **Aorta og blodårer:** Transporterer blod
- **Bindevevssepta:** Skiller høyre og venstre side

**4. Nervevev**
- **Sinusknuten:** Pacemaker som styrer hjerterytmen
- **Nerveceller:** Koordinerer sammentrekningen av hjertekamrene
- **Funksjon:** Regulerer hjertefrekvens

**Samarbeid:**
Alle vevstypene samarbeider slik at hjertet kan pumpe blod effektivt til hele kroppen.`,
    },
    {
      id: 'nat-vg1-4-1-homeostase',
      type: 'text',
      content: `# Homeostase - kroppens indre balanse

**Homeostase** er kroppens evne til å opprettholde et stabilt indre miljø til tross for endringer i omgivelsene.

## Hva reguleres?

Kroppen holder konstant:

1. **Kroppstemperatur:** ~37°C
2. **Blodsukkernivå:** 4-6 mmol/L
3. **pH i blodet:** 7.35-7.45
4. **Vannbalanse:** Riktig mengde vann og salter
5. **Oksygennivå:** Nok O₂ til cellene
6. **Blodtrykk:** Stabilt trykk i blodårene

## Hvordan fungerer homeostase?

Homeostase fungerer som en **termostat** - den bruker **negativ tilbakekobling** (negative feedback):

**Negativ tilbakekobling:**

1. **Sensorielle celler** oppdager avvik fra normalverdien (f.eks. for høy temperatur)
2. **Kontrollsenter** (ofte i hjernen) mottar informasjonen
3. **Effektorer** (f.eks. svettekjertler) aktiveres for å motvirke avviket
4. Når normalverdien er gjenopprettet, stopper responsen

## Eksempel: Regulering av kroppstemperatur

### Når du blir for varm:

**Sensor:** Temperaturreseptorer i huden og blodet registrerer høy temperatur

**Kontrollsenter:** Hypothalamus i hjernen

**Responser (effektorer):**
- **Svetting:** Svettekjertler skiller ut svette, som fordamper og kjøler ned kroppen
- **Utvidelse av blodårer (vasodilatasjon):** Mer blod nær huden, varme avgis til omgivelsene
- **Redusert muskelaktivitet:** Du blir treg og inaktiv for å produsere mindre varme

### Når du blir for kald:

**Sensor:** Temperaturreseptorer registrerer lav temperatur

**Kontrollsenter:** Hypothalamus

**Responser:**
- **Skjelving:** Musklene trekker seg raskt sammen og produserer varme
- **Innsnevring av blodårer (vasokonstriksjon):** Mindre blod nær huden, bevarer varme
- **Piloerektion ("gåsehud"):** Hår reiser seg (effektivt hos pelsede dyr, mindre hos mennesker)
- **Økt stoffskifte:** Frigjøring av hormoner som øker energiforbruk`,
    },
    {
      id: 'nat-vg1-4-1-def-homeostase',
      type: 'definition',
      title: 'Homeostase',
      content: 'Kroppens evne til å opprettholde et stabilt indre miljø (f.eks. konstant temperatur, blodsukkernivå, pH) ved hjelp av reguleringsmekanismer som negativ tilbakekobling.',
    },
    {
      id: 'nat-vg1-4-1-blodsukker',
      type: 'text',
      content: `# Regulering av blodsukkernivå

Blodsukker (glukose) er kroppens viktigste energikilde. Nivået må holdes stabilt mellom 4-6 mmol/L.

## Hormoner som regulerer blodsukker

**1. Insulin (senker blodsukkeret)**
- Produseres i bukspyttkjertelen (pankreas) av β-celler
- Frigjøres når blodsukkeret er **for høyt** (f.eks. etter et måltid)
- **Effekt:**
  - Øker opptak av glukose i celler (spesielt muskler og fett)
  - Stimulerer lagring av glukose som glykogen i lever og muskler
  - Reduserer glukoseproduksjon i leveren

**2. Glukagon (hever blodsukkeret)**
- Produseres i bukspyttkjertelen av α-celler
- Frigjøres når blodsukkeret er **for lavt** (f.eks. mellom måltider, om natten)
- **Effekt:**
  - Bryter ned glykogen til glukose i leveren (glykogenolyse)
  - Stimulerer produksjon av ny glukose (glukoneogenese)
  - Frigjør glukose til blodet

## Negativ tilbakekobling

**For høyt blodsukker:**
Høyt blodsukker → Bukspyttkjertelen frigjør insulin → Glukose tas opp av celler → Blodsukker synker → Mindre insulin frigjøres

**For lavt blodsukker:**
Lavt blodsukker → Bukspyttkjertelen frigjør glukagon → Lever frigjør glukose → Blodsukker stiger → Mindre glukagon frigjøres

## Diabetes

**Diabetes type 1:**
- Bukspyttkjertelen produserer lite eller ingen insulin
- Ofte starter i ung alder
- Behandling: Insulininjeksjoner

**Diabetes type 2:**
- Cellene responderer dårlig på insulin (insulinresistens)
- Ofte relatert til overvekt og inaktivitet
- Behandling: Kosthold, trening, medisiner

**Konsekvenser av ubehandlet diabetes:**
- For høyt blodsukker skader blodårer, nerver, nyrer og øyne
- For lavt blodsukker (hypoglykemi) kan føre til besvimelse`,
    },
    {
      id: 'nat-vg1-4-1-note-feedback',
      type: 'note',
      title: 'Positiv tilbakekobling',
      content: `I noen tilfeller bruker kroppen **positiv tilbakekobling** i stedet for negativ. Da **forsterker** responsen det opprinnelige signalet i stedet for å motvirke det.

**Eksempel: Fødsel**
- Babyen presser på livmorhalsen
- Signaler til hypothalamus
- Hypothalamus frigjør oksytocin
- Oksytocin forårsaker sterkere rier
- Sterkere rier presser mer på livmorhalsen
- Mer oksytocin frigjøres
- **Prosessen fortsetter til babyen er født**

Dette er sjeldnere enn negativ tilbakekobling, men viktig i spesifikke situasjoner.`,
    },
  ],
  exercises: [
    {
      id: 'nat-vg1-4-1-ex-1',
      number: '1',
      type: 'classic',
      difficulty: 'lett',
      task: 'Hva er de fire hovedtypene vev i menneskekroppen? Gi ett eksempel på hvert.',
      solution: `**De fire hovedtypene vev:**

**1. Epitelvev (dekkvev)**
- **Funksjon:** Dekker og beskytter kroppen
- **Eksempel:** Hud (epidermis), tarmslimhinne, lungeblærer

**2. Bindevev**
- **Funksjon:** Støtte, forbinder andre vev
- **Eksempel:** Ben, brusk, blod, sener, fett

**3. Muskelvev**
- **Funksjon:** Bevegelse (sammentrekning)
- **Eksempel:** Skjelettmuskulatur, glatt muskulatur, hjertemuskulatur

**4. Nervevev**
- **Funksjon:** Kommunikasjon (sender signaler)
- **Eksempel:** Nerveceller (nevroner) i hjernen, ryggmargen og nervetråder`,
      hints: ['Tenk på overflater, støtte, bevegelse og signaler'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-4-1-ex-2',
      number: '2',
      type: 'classic',
      difficulty: 'lett',
      task: 'Hva er forskjellen mellom skjelettmuskulatur, glatt muskulatur og hjertemuskulatur?',
      solution: `**De tre typene muskelvev:**

**1. Skjelettmuskulatur**
- **Utseende:** Tverrstripet (stripete mønster)
- **Kontroll:** Frivillig (bevisst styring)
- **Funksjon:** Beveger skjelettet
- **Egenskaper:**
  - Rask sammentrekning
  - Blir trøtt (trenger hvile)
- **Eksempel:** Biceps, quadriceps, ansiktsmuskler

**2. Glatt muskulatur**
- **Utseende:** Glatt (ingen striper)
- **Kontroll:** Ufrivillig (ubevisst styring)
- **Funksjon:** Beveger indre organer
- **Egenskaper:**
  - Langsom sammentrekning
  - Blir ikke trøtt
- **Eksempel:** Mage, tarm, blodårer, urinblære

**3. Hjertemuskulatur**
- **Utseende:** Tverrstripet
- **Kontroll:** Ufrivillig (automatisk rytme)
- **Funksjon:** Pumper blod
- **Egenskaper:**
  - Arbeider kontinuerlig hele livet
  - Spesielle forbindelser mellom celler (gap junctions)
- **Finnes:** Kun i hjertet`,
      hints: ['Tenk på frivillig vs. ufrivillig kontroll', 'Hvilke muskler styrer du bevisst?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-4-1-ex-3',
      number: '3',
      type: 'classic',
      difficulty: 'lett',
      task: 'Hva er homeostase? Gi tre eksempler på hva kroppen regulerer for å opprettholde homeostase.',
      solution: `**Homeostase:**

Homeostase er kroppens evne til å opprettholde et **stabilt indre miljø** til tross for endringer i omgivelsene.

**Tre eksempler på hva kroppen regulerer:**

**1. Kroppstemperatur**
- **Normalverdi:** ~37°C
- **Hvordan:** Svetting ved høy temperatur, skjelving ved lav temperatur
- **Kontrollsenter:** Hypothalamus i hjernen

**2. Blodsukkernivå**
- **Normalverdi:** 4-6 mmol/L
- **Hvordan:** Insulin senker, glukagon hever
- **Kontrollsenter:** Bukspyttkjertelen

**3. pH i blodet**
- **Normalverdi:** 7.35-7.45
- **Hvordan:** Lungene regulerer CO₂, nyrene regulerer syre-base balanse
- **Kontrollsenter:** Respirasjonssenter i hjernen, nyrer

**Andre eksempler:**
- Vannbalanse
- Oksygennivå
- Blodtrykk
- Saltnivå (elektrolytter)`,
      hints: ['Hva holder kroppen konstant?', 'Temperatur er et godt eksempel'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-4-1-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvordan kroppen regulerer kroppstemperaturen når du trener hardt og blir varm.',
      solution: `**Regulering av kroppstemperatur under trening:**

**Situasjon:** Du trener hardt, musklene produserer mye varme, kroppstemperaturen øker.

**Sensor:**
- Temperaturreseptorer i huden og blodet registrerer at temperaturen er for høy (over 37°C)

**Kontrollsenter:**
- Hypothalamus i hjernen mottar signalene og aktiverer nedkjølingsmekanismer

**Responser (effektorer):**

**1. Svetting**
- Svettekjertlene i huden skiller ut svette
- Svette fordamper fra huden
- Fordampning krever energi, som tas fra kroppen
- **Resultat:** Kroppen kjøles ned

**2. Vasodilatasjon (utvidelse av blodårer)**
- Blodårene i huden utvider seg
- Mer blod strømmer nær hudoverflaten
- Varme avgis til omgivelsene (konveksjon og stråling)
- **Resultat:** Du blir rød i ansiktet

**3. Økt pustehastighet**
- Raskere pust avgir mer varme og fukt
- Bidrar til nedkjøling

**Negativ tilbakekobling:**
- Når temperaturen synker mot 37°C, reduseres svetting og vasodilatasjon
- Systemet opprettholder balansen

**Hvorfor viktig:**
For høy temperatur (over 40-41°C) kan skade proteiner og celler, og er livstruende.`,
      hints: ['Hva skjer med huden når du er varm?', 'Hvorfor svetter du?', 'Negativ tilbakekobling'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-4-1-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er forskjellen mellom insulin og glukagon? Hvordan samarbeider de for å regulere blodsukkernivået?',
      solution: `**Insulin vs. Glukagon:**

**Insulin:**
- **Produseres av:** β-celler i bukspyttkjertelen
- **Frigjøres når:** Blodsukkeret er FOR HØYT (f.eks. etter måltid)
- **Effekt:** SENKER blodsukkeret
- **Hvordan:**
  - Øker opptak av glukose i celler (muskler, fett)
  - Stimulerer lagring av glukose som glykogen (i lever og muskler)
  - Reduserer produksjon av ny glukose i leveren

**Glukagon:**
- **Produseres av:** α-celler i bukspyttkjertelen
- **Frigjøres når:** Blodsukkeret er FOR LAVT (f.eks. mellom måltider)
- **Effekt:** HEVER blodsukkeret
- **Hvordan:**
  - Bryter ned glykogen til glukose i leveren
  - Stimulerer produksjon av ny glukose
  - Frigjør glukose til blodet

**Samarbeid (negativ tilbakekobling):**

**Etter måltid:**
1. Blodsukker stiger → Insulin frigjøres
2. Insulin senker blodsukker → Mindre insulin frigjøres
3. Blodsukker når normalverdi (4-6 mmol/L)

**Mellom måltider:**
1. Blodsukker synker → Glukagon frigjøres
2. Glukagon hever blodsukker → Mindre glukagon frigjøres
3. Blodsukker når normalverdi

**Analogi:**
- Insulin = Brems (senker blodsukker)
- Glukagon = Gass (hever blodsukker)
- Sammen holder de blodsukkeret stabilt

**Konsekvenser ved svikt:**
- **Diabetes type 1:** For lite insulin → Høyt blodsukker
- **Diabetes type 2:** Cellene responderer dårlig på insulin → Høyt blodsukker`,
      hints: ['Hvilken senker og hvilken hever blodsukker?', 'Når frigjøres hver av dem?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-4-1-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvordan bindevev skiller seg fra epitelvev når det gjelder oppbygging og funksjon.',
      solution: `**Sammenligning: Bindevev vs. Epitelvev**

**Epitelvev:**

**Oppbygging:**
- Celler er **tett pakket** sammen
- Lite eller ingen ekstracellulært materiale
- **Ingen blodårer** (får næring ved diffusjon)
- Ofte ordnet i lag eller sheet

**Funksjon:**
- Dekker og beskytter kroppens overflate
- Dekker indre organer
- Sekresjon (kjertler)
- Absorpsjon (tarm)

**Eksempler:**
- Hud (epidermis)
- Tarmslimhinne
- Lungeblærer
- Kjertelvev

**Bindevev:**

**Oppbygging:**
- Celler er **spredt** i en ekstracellulær matriks
- **Mye ekstracellulært materiale** (kollagen, elastin, etc.)
- Godt forsynt med **blodårer** (unntakt brusk)
- Varierende tetthet og styrke

**Funksjon:**
- Støtter andre vev og organer
- Forbinder strukturer
- Transport (blod)
- Lagring (fett)
- Beskyttelse (ben)

**Eksempler:**
- Ben, brusk
- Blod
- Fett (adipose vev)
- Sener, ligamenter

**Hovedforskjeller:**

| Egenskap | Epitelvev | Bindevev |
|----------|-----------|----------|
| Celletetthet | Tett | Spredt |
| Ekstracellulært materiale | Lite | Mye |
| Blodårer | Nei | Ja (unntakt brusk) |
| Hovedfunksjon | Dekking, beskyttelse | Støtte, forbindelse |

**Samarbeid:**
Epitelvev ligger ofte oppå bindevev. Eksempel: Hud består av epidermis (epitelvev) over dermis (bindevev).`,
      hints: ['Tenk på celletetthet', 'Hva er mellom cellene?', 'Blodårer?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-4-1-ex-7',
      number: '7',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hva som skjer i kroppen hvis du ikke spiser på mange timer (f.eks. over natten). Hvordan opprettholder kroppen stabilt blodsukkernivå?',
      solution: `**Opprettholdelse av blodsukker under faste:**

**Situasjon:** Du spiser middag kl. 19:00 og frokost kl. 08:00 neste dag (13 timer uten mat).

**Fase 1: Kort tid etter måltid (0-4 timer)**

**Umiddelbart etter måltidet:**
- Blodsukker stiger
- Bukspyttkjertelen frigjør insulin
- Glukose tas opp av celler
- Overskudd av glukose lagres som **glykogen** i lever (ca. 100g) og muskler (ca. 400g)

**Fase 2: Mellom måltider (4-12 timer)**

**Når blodsukkeret begynner å synke:**

**1. Glukagon frigjøres**
- α-celler i bukspyttkjertelen registrerer lavt blodsukker
- Glukagon frigjøres til blodet

**2. Glykogenolyse (nedbrytning av glykogen)**
- Glukagon stimulerer leveren til å bryte ned glykogen
- Glykogen → Glukose
- Glukose frigjøres til blodet
- **Dette holder blodsukkeret stabilt om natten**

**Fase 3: Langvarig faste (>12 timer)**

**Når glykogenlagrene er tomme:**

**1. Glukoneogenese (produksjon av ny glukose)**
- Leveren produserer glukose fra andre kilder:
  - Aminosyrer (fra proteiner)
  - Glyserol (fra fett)
  - Laktat (fra muskler)
- Prosessen styres av glukagon og kortisol

**2. Ketogenese (produksjon av ketonlegemer)**
- Leveren bryter ned fett til ketonlegemer
- Ketonlegemer kan brukes som alternativ energikilde for hjernen
- Dette skjer ved lengre faste eller sult

**3. Lipolyse (nedbrytning av fett)**
- Fettvev bryter ned lagret fett til fettsyrer
- Fettsyrer frigjøres til blodet
- Brukes som energi av muskler og andre vev (ikke hjernen)

**Hormoner involvert:**

- **Glukagon:** Frigjøres hele tiden under faste, stimulerer glukoseproduksjon
- **Kortisol:** Stresshormon som øker ved langvarig faste, stimulerer glukoneogenese
- **Veksthormon:** Bidrar til å bevare muskelmasse under faste
- **Insulin:** Lavt nivå under faste

**Prioritering:**

1. **Hjerne:** Må ha konstant tilgang på glukose eller ketonlegemer (bruker ~120g glukose/dag)
2. **Røde blodceller:** Kan kun bruke glukose
3. **Muskler og andre vev:** Kan bruke fett og ketonlegemer

**Negativ tilbakekobling:**
- Når glukose frigjøres og blodsukker stiger → Mindre glukagon frigjøres
- Systemet holder blodsukker mellom 4-6 mmol/L selv om du ikke spiser

**Hva skjer ved svikt:**
- **Diabetes:** Kroppen kan ikke regulere blodsukker normalt
- **Hypoglykemi:** Farlig lavt blodsukker, kan føre til besvimelse
- **Ketoacidose:** Farlig høyt nivå av ketonlegemer (ved diabetes type 1)`,
      hints: ['Hva er glykogen og hvor lagres det?', 'Hvilke hormoner er involvert?', 'Hva skjer når glykogenlagrene er tomme?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-4-1-ex-8',
      number: '8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Hva er forskjellen mellom negativ og positiv tilbakekobling? Gi eksempler på hver. Hvorfor er negativ tilbakekobling mest vanlig i kroppen?',
      solution: `**Negativ vs. Positiv tilbakekobling:**

**Negativ tilbakekobling:**

**Prinsipp:**
- Responsen **motvirker** det opprinnelige signalet
- Bringer systemet **tilbake til normalverdi**
- Som en termostat: Når det blir for varmt, slås oppvarmingen av

**Eksempler:**

**1. Kroppstemperatur:**
- For høy temperatur → Svetting → Temperatur synker → Mindre svetting
- For lav temperatur → Skjelving → Temperatur stiger → Mindre skjelving

**2. Blodsukkernivå:**
- Høyt blodsukker → Insulin frigjøres → Blodsukker synker → Mindre insulin
- Lavt blodsukker → Glukagon frigjøres → Blodsukker stiger → Mindre glukagon

**3. Blodtrykk:**
- Høyt blodtrykk → Hjertet senker pumpehastighet → Blodtrykk synker

**Positiv tilbakekobling:**

**Prinsipp:**
- Responsen **forsterker** det opprinnelige signalet
- Systemet **akselererer** prosessen
- Fortsetter til prosessen er fullført
- Som en snøball som ruller nedover en bakke og blir større

**Eksempler:**

**1. Fødsel:**
- Baby presser på livmorhalsen
- Hypothalamus frigjør oksytocin
- Oksytocin → Sterkere rier
- Sterkere rier → Mer press på livmorhalsen
- Mer oksytocin frigjøres
- **Syklusen fortsetter til babyen er født**

**2. Blodpropp:**
- Skade på blodåre
- Blodplater fester seg
- Blodplater frigjør kjemiske signaler
- Flere blodplater trekkes til
- Mer kjemiske signaler frigjøres
- **Syklusen fortsetter til såret er tettet**

**3. Aksjonspotensialet (nervesignal):**
- Natrium-kanaler åpnes
- Na⁺ strømmer inn
- Mer depolarisering
- Flere Na⁺-kanaler åpnes
- **Raskt signal sendes langs nerven**

**Sammenligning:**

| Egenskap | Negativ tilbakekobling | Positiv tilbakekobling |
|----------|------------------------|------------------------|
| Effekt | Motvirker signal | Forsterker signal |
| Mål | Opprettholde stabilitet | Fullføre en prosess |
| Hyppighet | Meget vanlig | Sjelden |
| Sluttresultat | Likevekt (homeostase) | Fullført hendelse |

**Hvorfor er negativ tilbakekobling mest vanlig?**

**1. Stabilitet:**
- Kroppen trenger stabile forhold for å fungere
- Temperatur, pH, blodsukker må holdes konstant
- Negativ tilbakekobling opprettholder homeostase

**2. Overlevelse:**
- Uten regulering ville kroppen svinge mellom ekstremer
- For høy/lav temperatur = død
- For høyt/lavt blodsukker = besvimelse/død

**3. Energieffektivitet:**
- Kroppen sparer energi ved å holde ting stabilt
- Positiv tilbakekobling krever mye energi og kan løpe løpsk

**4. Kontroll:**
- Negativ tilbakekobling er selvregulerende (automatisk stop)
- Positiv tilbakekobling er vanskelig å stoppe (trenger ekstern signal)

**Når brukes positiv tilbakekobling:**
- Kun når kroppen trenger å **fullføre en spesifikk prosess raskt**
- Fødsel: Baby må ut
- Blodpropp: Blødning må stoppes
- Nervesignal: Signal må sendes raskt

**Fare ved positiv tilbakekobling:**
- Kan løpe løpsk (ukontrollert)
- Eksempel: Feberfantasi (for høy feber kan føre til mer oppvarming)
- Derfor er det sjeldent og brukes kun når nødvendig`,
      hints: ['Hva skjer med signalet: motvirkes eller forsterkes?', 'Hva er målet: stabilitet eller fullføring?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-4-1-ex-9',
      number: '9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En pasient har en sykdom som ødelegger β-cellene i bukspyttkjertelen. Hvilke konsekvenser får dette for regulering av blodsukkernivået? Hvordan kan denne tilstanden behandles?',
      solution: `**Sykdom: Diabetes type 1**

**Hva skjer:**
β-cellene i bukspyttkjertelen produserer **insulin**. Hvis disse cellene ødelegges (ofte av kroppens eget immunforsvar), kan ikke kroppen produsere insulin.

**Konsekvenser for blodsukkernivået:**

**1. Etter måltid:**

**Normalt:**
- Blodsukker stiger → Insulin frigjøres → Celler tar opp glukose → Blodsukker synker til normal

**Uten β-celler (ingen insulin):**
- Blodsukker stiger → INGEN insulin frigjøres
- Celler kan ikke ta opp glukose effektivt
- **Blodsukker forblir høyt (hyperglykemi)**

**2. Mellom måltider:**

**Normalt:**
- Blodsukker synker → Glukagon frigjøres → Lever frigjør glukose → Blodsukker stiger

**Uten β-celler:**
- Glukagon fungerer fortsatt (α-cellene er intakte)
- Lever frigjør glukose
- **Men uten insulin kan ikke cellene ta opp glukosen**
- Blodsukker fortsetter å være høyt

**3. Langvarig effekt:**

**Kort sikt (timer-dager):**
- Kronisk høyt blodsukker (10-20+ mmol/L)
- Glukose i urinen (kidneys kan ikke filtrere alt)
- Hyppig vannlating (for å kvitte seg med glukose)
- Tørste (tap av vann)
- Vekttap (cellene får ikke energi fra glukose)
- Tretthet (celler mangler energi)

**Lang sikt (år):**
- **Kardiovaskulære problemer:** Høyt blodsukker skader blodårer, øker risiko for hjerteinfarkt og hjerneslag
- **Nerveskader (nevropati):** Høyt blodsukker skader nerver, fører til nummenhet, smerte
- **Nyreskader (nefropati):** Nyrene kan svikte
- **Øyeskader (retinopati):** Kan føre til blindhet
- **Fotproblemer:** Dårlig blodsirkulasjon og nerveskader kan føre til infeksjoner og amputasjoner

**Ketoacidose (akutt, livstruende):**
- Uten insulin begynner kroppen å bryte ned fett i stedet for glukose
- Produserer ketonlegemer (sure stoffer)
- Blodet blir for surt (pH synker)
- Symptomer: Kvalme, oppkast, forvirring, besvimelse
- Krever akutt medisinsk behandling

**Hvordan behandles diabetes type 1:**

**1. Insulinbehandling (essensielt)**

**Typer insulin:**
- **Hurtigvirkende insulin:** Tas til måltider, virker raskt (10-15 min)
- **Langtidsvirkende insulin:** Tas 1-2 ganger daglig, gir konstant insulinnivå
- **Kombinasjon:** De fleste bruker både hurtig- og langtidsvirkende

**Administrering:**
- **Insulinpenn:** Injeksjon under huden (vanligst)
- **Insulinpumpe:** Bærbar pumpe som gir kontinuerlig insulin
- **Ikke tabletter:** Insulin brytes ned i mage-tarmkanalen (må injiseres)

**2. Blodsukkermåling**

- **Fingerprikktest:** Måler blodsukker flere ganger daglig
- **Kontinuerlig glukosemåling (CGM):** Sensor under huden som måler kontinuerlig
- **Mål:** Hold blodsukker mellom 4-10 mmol/L

**3. Kosthold**

- **Telle karbohydrater:** Anslå hvor mye insulin som trengs til hvert måltid
- **Regelmessige måltider:** Unngå store svingninger
- **Sunnere valg:** Hele korn, grønnsaker, lite sukker

**4. Fysisk aktivitet**

- Trening senker blodsukker (muskler tar opp glukose)
- Viktig å justere insulin og karbohydrater før/etter trening
- Reduserer risiko for komplikasjoner

**5. Regelmessige kontroller**

- **HbA1c-test:** Måler gjennomsnittlig blodsukker over 2-3 måneder
- Mål: HbA1c < 7% (53 mmol/mol)
- Kontroller hos endokrinolog, øyelege, fotterapeut

**Fremtidig behandling:**

- **Bukspyttkjerteltransplantasjon:** Transplantere ny bukspyttkjertel eller kun β-celler
- **Stamcellebehandling:** Erstatte ødelagte β-celler med stamceller
- **Kunstig bukspyttkjertel:** System som måler blodsukker og gir insulin automatisk (delvis tilgjengelig)

**Prognose:**
Med god behandling kan personer med diabetes type 1 leve et langt og sunt liv. Nøkkelen er god blodsukkerregulering og regelmessige kontroller.`,
      hints: ['Hva er β-cellenes funksjon?', 'Hva skjer uten insulin?', 'Hvilken type diabetes er dette?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};
