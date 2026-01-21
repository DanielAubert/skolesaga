/**
 * Naturfag VG1 - Kapittel 5.4: Bærekraftig utvikling
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_NAT_VG1_5_4: TextbookChapter = {
  id: 'nat-vg1-5-4',
  courseId: 'nat-vg1',
  chapterNumber: '5.4',
  title: 'Bærekraftig utvikling',
  description: 'Lær om FNs bærekraftsmål, sirkulær økonomi, grønn teknologi og hvordan vi kan skape en bærekraftig fremtid.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forklare begrepet bærekraftig utvikling',
    'beskrive FNs bærekraftsmål og deres betydning',
    'forklare prinsippene for sirkulær økonomi',
    'vurdere eksempler på grønn teknologi',
    'diskutere tiltak for en bærekraftig fremtid',
  ],
  content: [
    {
      id: 'nat-vg1-5-4-intro',
      type: 'text',
      content: `# Bærekraftig utvikling

Menneskeheten står overfor store utfordringer:
- Klimaendringer
- Forurensning
- Tap av artsmangfold
- Fattigdom og ulikhet
- Overforbruk av ressurser

**Bærekraftig utvikling** handler om å løse disse utfordringene på en måte som sikrer at fremtidige generasjoner også kan dekke sine behov.

Vi må balansere tre dimensjoner:
1. **Økonomi:** Økonomisk vekst og velstand
2. **Miljø:** Bevare naturen og klimaet
3. **Samfunn:** Sosial rettferdighet og likestilling

Hvis vi bare fokuserer på økonomi, ødelegger vi miljøet. Hvis vi bare fokuserer på miljø, kan det gå ut over velstand og utvikling. Vi må finne en balanse.`,
    },
    {
      id: 'nat-vg1-5-4-def-barekraft',
      type: 'definition',
      title: 'Bærekraftig utvikling',
      content: 'Utvikling som møter dagens behov uten å ødelegge mulighetene for fremtidige generasjoner til å møte sine behov. Det innebærer å balansere økonomisk vekst, miljøvern og sosial rettferdighet.',
    },
    {
      id: 'nat-vg1-5-4-fns-mal',
      type: 'text',
      content: `# FNs bærekraftsmål

I 2015 vedtok FNs medlemsland **17 bærekraftsmål** (Sustainable Development Goals - SDGs) som skal nås innen 2030.

Målene dekker alt fra fattigdom og sult til klimatiltak og livet i havet.

## De 17 målene:

**Mål 1: Utrydde fattigdom**
- Ingen skal leve i ekstrem fattigdom
- Sosial beskyttelse for alle

**Mål 2: Utrydde sult**
- Alle skal ha nok mat
- Bærekraftig matproduksjon

**Mål 3: God helse**
- Alle skal ha tilgang til helsetjenester
- Redusere dødelighet

**Mål 4: God utdanning**
- Alle skal ha tilgang til kvalitetsutdanning
- Livslang læring

**Mål 5: Likestilling**
- Likestilling mellom kjønn
- Slutt på diskriminering

**Mål 6: Rent vann og gode sanitærforhold**
- Alle skal ha tilgang til rent vann
- Bedre hygiene

**Mål 7: Ren energi for alle**
- Tilgang til fornybar energi
- Energieffektivisering

**Mål 8: Anstendig arbeid og økonomisk vekst**
- Skape jobber
- Bærekraftig økonomisk vekst

**Mål 9: Innovasjon og infrastruktur**
- Bygg motstandsdyktig infrastruktur
- Fremme innovasjon

**Mål 10: Mindre ulikhet**
- Redusere ulikhet mellom og innen land
- Inkludering

**Mål 11: Bærekraftige byer og samfunn**
- Trygge, inkluderende og bærekraftige byer
- Bedre byplanlegging

**Mål 12: Ansvarlig forbruk og produksjon**
- Bærekraftig bruk av ressurser
- Redusere avfall

**Mål 13: Stoppe klimaendringene**
- Bekjempe klimaendringer
- Tilpasning til klimaendringer

**Mål 14: Livet i havet**
- Bevare hav og marine ressurser
- Bærekraftig bruk av havet

**Mål 15: Livet på land**
- Beskytte økosystemer
- Stoppe tap av artsmangfold

**Mål 16: Fred og rettferdighet**
- Fredelige og inkluderende samfunn
- Tilgang til rettferdighet

**Mål 17: Samarbeid for å nå målene**
- Globalt partnerskap
- Samarbeid mellom land, organisasjoner, bedrifter

---

## Sammenheng mellom målene

Målene er **sammenkoblet**. For eksempel:
- Ren energi (mål 7) → Stoppe klimaendringer (mål 13)
- God utdanning (mål 4) → Anstendig arbeid (mål 8)
- Rent vann (mål 6) → God helse (mål 3)

Vi må jobbe med **alle** målene samtidig.

---

## Status

**Fremgang:** Noe fremgang på noen mål (utdanning, helse)

**Utfordringer:**
- Mange mål er **ikke på rett spor**
- COVID-19 satte tilbake fremgangen
- Klimamålene krever raskere handling

**Betydning for Norge:**
- Norge har forpliktet seg til målene
- Må bidra hjemme og internasjonalt
- Redusere utslipp, støtte utviklingsland`,
    },
    {
      id: 'nat-vg1-5-4-sirkular',
      type: 'text',
      content: `# Sirkulær økonomi

Dagens økonomi er ofte **lineær**:
1. Ta ressurser fra naturen
2. Lag produkter
3. Bruk produktene
4. Kast som avfall

**Problem:** Ressurser tar slutt, avfall hoper seg opp.

---

## Hva er sirkulær økonomi?

**Sirkulær økonomi** er et system hvor ressurser **gjenbrukes** i stedet for å kastes.

**Mål:** Holde materialer og produkter i bruk lengst mulig, minimere avfall.

**Prinsippene:**

### 1. Design for lang levetid
- Produkter skal være holdbare
- Lett å reparere
- Laget av materialer som kan resirkuleres

### 2. Bruk lengre (Reduce, Reuse)
- **Reduce:** Kjøp mindre, bruk mindre
- **Reuse:** Bruk produkter flere ganger
- Kjøp brukt, reparer, del med andre

### 3. Resirkulering (Recycle)
- Når produktet ikke kan brukes lenger, resirkuler materialene
- Lag nye produkter av gamle materialer
- Minimalt avfall

### 4. Fornybare ressurser
- Bruk fornybare materialer (tre, bomull) i stedet for ikke-fornybare (plast, metall)
- Bærekraftig produksjon

### 5. Gjenvinning av biologiske materialer
- Organisk avfall (matavfall) komposteres
- Blir til jord som brukes i landbruket
- Kretsløp i naturen

---

## Eksempler på sirkulær økonomi

### 1. Klær
**Lineær:** Kjøp → Bruk kort tid → Kast

**Sirkulær:**
- Kjøp kvalitetsklær som varer lenger
- Reparer klær (sy hull, bytt knapper)
- Kjøp brukt (second-hand)
- Donere eller selge klær du ikke bruker
- Resirkulere tekstiler til nye produkter

**Eksempel:** H&M, Patagonia tilbyr reparasjon og innsamling av gamle klær

---

### 2. Elektronikk
**Lineær:** Kjøp ny mobil hvert år → Kast gammel

**Sirkulær:**
- Bruk mobil lenger (4-5 år i stedet for 1-2)
- Reparer i stedet for å kjøpe ny
- Kjøp refurbished (renovert) elektronikk
- Lever inn gammel elektronikk til resirkulering (returnere til butikk)

**Eksempel:** Fairphone (mobil designet for reparasjon), Apple tar imot gamle enheter

---

### 3. Mat
**Lineær:** Produser → Spis → Kast matavfall

**Sirkulær:**
- Kjøp kun det du trenger (planlegg måltider)
- Bruk rester (lag nye retter)
- Komposter matavfall (blir til jord)
- Reduser matsøppel

**Eksempel:** Too Good To Go (redder mat fra restauranter), kompostering

---

### 4. Emballasje
**Lineær:** Engangs emballasje → Kast

**Sirkulær:**
- Gjenbruksemballasje (glass, bokser)
- Panteordning (flasker, bokser)
- Unngå unødvendig emballasje
- Bruk poser flere ganger

---

## Fordeler med sirkulær økonomi

**Miljø:**
- Mindre avfall
- Mindre forurensning
- Mindre utslipp av klimagasser
- Bevarer naturressurser

**Økonomi:**
- Sparer penger (kjøpe mindre, bruk lenger)
- Skaper nye jobber (reparasjon, gjenvinning)
- Mindre avhengighet av importerte råvarer

**Samfunn:**
- Reduserer miljøbelastning
- Mer bærekraftig fremtid`,
    },
    {
      id: 'nat-vg1-5-4-gronn-teknologi',
      type: 'text',
      content: `# Grønn teknologi

**Grønn teknologi** er teknologi som reduserer miljøpåvirkning og bidrar til bærekraftig utvikling.

## Eksempler på grønn teknologi

### 1. Fornybar energi

**Solceller:**
- Omdanner sollys til strøm
- Installeres på tak (desentralisert)
- Stadig billigere og mer effektive

**Vindturbiner:**
- Produserer ren energi fra vind
- Havvind (Norge satser stort)

**Vannkraft:**
- Norges hovedkilde til strøm
- Pumpekraftverk (lagrer energi)

**Batterier og energilagring:**
- Lagrer overskuddsstrøm fra sol og vind
- Jevner ut produksjon
- Elbilbatterier kan brukes som lager (Vehicle-to-Grid)

---

### 2. Elektrisk transport

**Elbiler:**
- Ingen lokale utslipp
- Kan lades med fornybar strøm (Norge)
- Norge: Verdensledende (~90% av nybilsalget)

**Elbusser, el-ferger, el-fly:**
- Elektrifisering av all transport
- Norge: Verdens første elektriske ferger

**Hydrogenbiler:**
- Bruker hydrogen som drivstoff
- Produserer kun vann
- Egnet for tungtrafikk (lastebiler, skip)

**Deling av transport:**
- Bildelings ordninger (reduserer antall biler)
- Elsykler, elsparkesykler

---

### 3. Karbonfangst og lagring (CCS)

**Prinsipp:**
- Fange CO₂ fra utslipp (kraftverk, industri)
- Komprimere CO₂
- Lagre under bakken (geologiske formasjoner)

**Fordeler:**
- Fjerner CO₂ fra atmosfæren
- Kan brukes på eksisterende industri (sement, stål)

**Ulemper:**
- Dyrt
- Energikrevende
- Fortsatt under utvikling

**Norge:** Langskip-prosjektet (CCS fra Norcem sementfabrikk)

---

### 4. Grønn hydrogen

**Hva:** Hydrogen produsert med fornybar energi

**Prosess:**
- Elektrolyse: Bruk strøm til å spalte vann (H₂O) i hydrogen (H₂) og oksygen (O₂)
- Hvis strømmen kommer fra sol/vind/vann, er hydrogenet "grønt"

**Bruk:**
- Drivstoff for biler, lastebiler, skip, fly
- Lagring av energi
- Industri (stålproduksjon)

**Fordeler:**
- Produserer kun vann ved forbrenning
- Kan lagres og transporteres

**Utfordring:** Dyrt, krever mye energi

---

### 5. Smart teknologi

**Smarte strømnett:**
- Balanserer produksjon og forbruk
- Dynamisk prising (bruk strøm når det er billig/overskudd)
- Reduserer energispill

**Smart hjem:**
- Automatisk styring av lys, varme
- Reduserer energiforbruk

**Presisjonsjordbruk:**
- Bruk av sensorer, droner, AI
- Optimal bruk av vann, gjødsel
- Reduserer avfall og forurensning

---

### 6. Biotekn ologi

**Biodrivstoff:**
- Drivstoff fra planter (etanol, biodiesel)
- Kan være mer bærekraftig (ikke fra mat)
- Andre generasjon: Alger, avfall

**Bioplast:**
- Plast laget av planter (mais, sukkerrør)
- Kan være bionedbrytbar
- Må være bærekraftig produsert (ikke konkurrere med mat)

**Genmodifiserte planter:**
- Tørkeresistente avlinger
- Høyere avling (mindre landbruk)
- Kontroversiell (GMO-debatt)

---

### 7. Gjenvinningsteknologi

**Avansert sortering:**
- Roboter og AI sorterer avfall
- Bedre resirkulering

**Kjemisk resirkulering:**
- Bryte ned plast til grunnstoffene
- Lage ny plast av høy kvalitet

**Urban mining:**
- "Gruve" elektronikk for verdifulle metaller
- Gjenvinne gull, kobber, lithium fra gamle mobiler`,
    },
    {
      id: 'nat-vg1-5-4-individuelt',
      type: 'text',
      content: `# Hva kan du gjøre?

Bærekraftig utvikling krever endring på **alle nivåer**: individ, bedrifter, og politikk.

## Individuelt nivå

### 1. Reduser forbruk
- Kjøp mindre, bruk lenger
- Velg kvalitet over kvantitet
- Tenk: "Trenger jeg dette?"

### 2. Gjenbruk
- Kjøp brukt (second-hand)
- Reparer i stedet for å kaste
- Donere eller selge ting du ikke bruker

### 3. Resirkuler
- Kast avfall i riktige containere
- Pant flasker og bokser
- Kompostere matavfall

### 4. Spis bærekraftig
- Mindre kjøtt (spesielt storfe)
- Mer grønnsaker, belgfrukter
- Kjøp lokalt produsert mat (mindre transport)
- Reduser matsøppel

### 5. Velg grønn transport
- Sykle, gå, kollektivtransport
- Elbil (når du må kjøre)
- Fly mindre (spesielt korte distanser)

### 6. Spare energi
- Skru av lys
- Kortere dusjer
- Senke temperaturen hjemme
- Bruk energieffektive apparater

### 7. Velg bærekraftige produkter
- Miljømerker (Svanemerket, Fairtrade, Ø-merket)
- Unngå engangsplast
- Produkter laget av resirkulerte materialer

### 8. Engasjer deg
- Lær mer om bærekraft
- Spre kunnskap
- Delta i klimaaksjoner
- Krev handling fra politikere og bedrifter

---

## Bedriftsnivå

**Bedrifter må:**
- Redusere klimagassutslipp
- Bærekraftig produksjon (sirkulær økonomi)
- Ansvarlig bruk av ressurser
- Transparens (vise hva de gjør)
- Grønn innovasjon

**Eksempler:**
- Patagonia (reparasjon, gjenbruk)
- Interface (teppeprodusent, 100% resirkulert)
- Tesla (elektrifisering av transport)

---

## Politisk nivå

**Politikere må:**
- Vedta strengere klimamål
- Karbonprising (gjøre forurensning dyrt)
- Subsidier til fornybar energi
- Forbud mot skadelige produkter (engangsplast)
- Støtte grønn innovasjon
- Internasjonalt samarbeid (Paris-avtalen)

---

## Samarbeid er nøkkelen

**Ingen kan løse klimakrisen alene.**

Vi trenger:
- Individer som endrer livsstil
- Bedrifter som innoverer
- Politikere som lager gode lover
- Internasjonalt samarbeid

**Du kan gjøre en forskjell!** Små endringer fra mange mennesker skaper stor effekt.`,
    },
    {
      id: 'nat-vg1-5-4-note',
      type: 'note',
      title: 'Grønnvasking',
      content: `**Grønnvasking** (greenwashing) er når bedrifter påstår å være mer miljøvennlige enn de faktisk er.

**Eksempler:**
- Markedsføre ett "grønt" produkt mens resten er skadelig
- Bruke vage begreper som "naturlig" eller "øko" uten dokumentasjon
- Fokusere på små miljøtiltak mens man ignorerer store problemer

**Vær kritisk:**
- Les om bedriftens totale miljøpåvirkning
- Se etter dokumentasjon (sertifiseringer)
- Ikke stol blindt på markedsføring`,
    },
    {
      id: 'nat-vg1-5-4-tip',
      type: 'tip',
      title: 'De 5 R-ene for bærekraft',
      content: `**1. Refuse (nekt):** Si nei til ting du ikke trenger (plastposer, reklame)

**2. Reduce (reduser):** Kjøp mindre, bruk mindre

**3. Reuse (gjenbruk):** Bruk ting mange ganger

**4. Repair (reparer):** Fiks i stedet for å kaste

**5. Recycle (resirkuler):** Resirkuler når du ikke kan bruke mer

**Merk:** Rekkefølgen er viktig! Resirkulering er bedre enn å kaste, men det er BEDRE å gjenbruke og reparere.`,
    },
  ],
  exercises: [
    {
      id: 'nat-vg1-5-4-ex-1',
      number: '1',
      type: 'classic',
      difficulty: 'lett',
      task: 'Hva er bærekraftig utvikling? Forklar de tre dimensjonene (økonomi, miljø, samfunn).',
      solution: `**Bærekraftig utvikling:**

**Definisjon:** Utvikling som møter dagens behov uten å ødelegge mulighetene for fremtidige generasjoner til å møte sine behov.

**Enkelt forklart:** Vi skal kunne leve godt i dag, uten å ødelegge for barna og barnebarna våre.

---

**De tre dimensjonene:**

### **1. Økonomi (økonomisk bærekraft)**

**Hva:** Sikre økonomisk vekst og velstand

**Hvorfor viktig:**
- Mennesker trenger jobber og inntekt
- Bedrifter må være lønnsomme
- Land må ha økonomisk vekst

**Utfordring:** Hvordan skape vekst uten å ødelegge miljøet?

**Løsning:**
- Grønn økonomi (fornybar energi, grønn teknologi)
- Sirkulær økonomi (gjenbruk, resirkulering)
- Bærekraftige investeringer

**Eksempel:** Elektrifisering av transport skaper jobber og reduserer utslipp

---

### **2. Miljø (miljømessig bærekraft)**

**Hva:** Bevare naturen og klimaet for fremtiden

**Hvorfor viktig:**
- Vi er avhengig av naturen (mat, vann, luft)
- Må ikke bruke opp ressurser
- Klimaendringer truer livet på jorden

**Utfordring:** Hvordan bruke naturens ressurser uten å ødelegge dem?

**Løsning:**
- Redusere klimagassutslipp
- Bevare artsmangfold og økosystemer
- Fornybare ressurser i stedet for fossile
- Redusere forurensning og avfall

**Eksempel:** Bruke vannkraft i stedet for kull reduserer CO₂-utslipp

---

### **3. Samfunn (sosial bærekraft)**

**Hva:** Sikre rettferdighet, likestilling og gode levekår for alle

**Hvorfor viktig:**
- Alle mennesker har rett til et godt liv
- Fattigdom og ulikhet skaper konflikter
- Utdanning og helse er grunnleggende rettigheter

**Utfordring:** Hvordan fordele ressurser rettferdig?

**Løsning:**
- Bekjempe fattigdom
- Likestilling (kjønn, etnisitet, etc.)
- Tilgang til utdanning, helse, rent vann
- Inkludering og rettferdighet

**Eksempel:** Ren energi til fattige land forbedrer helse og økonomi

---

**Balanse mellom dimensjonene:**

**Problem:** Det er vanskelig å oppnå alt samtidig

**Eksempel på konflikt:**
- Økonomisk vekst (åpne gruver) vs. Miljø (ødelegger natur)
- Billig energi (kull) vs. Miljø (klimagassutslipp)

**Løsning:** Finne **balanse**

**Bærekraftig løsning:**
- Grønn teknologi som både skaper jobber OG reduserer utslipp
- Utdanning som gir mennesker kunnskap om miljø og økonomi
- Sirkulær økonomi som sparer ressurser og skaper arbeidsplasser

---

**Illustrasjon (Venn-diagram):**

Forestill deg tre ringer som overlapper:
- Ring 1: Økonomi
- Ring 2: Miljø
- Ring 3: Samfunn

**Bærekraftig utvikling** er der alle tre overlapper (midten)!

---

**Konklusjon:**

Bærekraftig utvikling krever at vi balanserer:
1. **Økonomi:** Velstand og vekst
2. **Miljø:** Bevare naturen
3. **Samfunn:** Rettferdighet og likestilling

Vi kan ikke ofre ett for å oppnå de andre. Vi må finne løsninger som fungerer for alle tre.`,
      hints: ['Tenk på økonomi, miljø og samfunn', 'Hvordan balansere disse?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-5-4-ex-2',
      number: '2',
      type: 'classic',
      difficulty: 'lett',
      task: 'Nevn fem av FNs 17 bærekraftsmål. Velg de du synes er viktigst og forklar hvorfor.',
      solution: `**Fem av FNs bærekraftsmål (velg selv hvilke du synes er viktigst):**

---

**Mål 13: Stoppe klimaendringene**

**Hva:** Bekjempe klimaendringer og tilpasse seg konsekvensene

**Hvorfor viktig:**
- Klimaendringer er den største trusselen mot menneskeheten
- Påvirker alle andre mål (mat, vann, helse, etc.)
- Må handle NÅ for å unngå katastrofale konsekvenser

**Tiltak:** Redusere CO₂-utslipp, fornybar energi, klimatilpasning

---

**Mål 1: Utrydde fattigdom**

**Hva:** Ingen skal leve i ekstrem fattigdom

**Hvorfor viktig:**
- 700 millioner lever i ekstrem fattigdom (< $1,90/dag)
- Fattigdom fører til sult, sykdom, mangel på utdanning
- Alle mennesker har rett til et verdig liv

**Tiltak:** Sosial beskyttelse, jobber, økonomisk vekst

---

**Mål 4: God utdanning**

**Hva:** Alle skal ha tilgang til kvalitetsutdanning

**Hvorfor viktig:**
- Utdanning er nøkkelen til utvikling
- Gir mennesker kunnskap og ferdigheter
- Reduserer fattigdom, forbedrer helse
- Bidrar til fred og likestilling

**Tiltak:** Gratis grunnskole, lærerutdanning, teknologi i undervisning

---

**Mål 7: Ren energi for alle**

**Hva:** Tilgang til fornybar og bærekraftig energi

**Hvorfor viktig:**
- 800 millioner mangler strøm
- Ren energi reduserer klimagassutslipp
- Energi er nødvendig for utvikling (skoler, sykehus, industri)

**Tiltak:** Utbygging av sol, vind, vann, energieffektivisering

---

**Mål 14: Livet i havet**

**Hva:** Bevare hav og marine ressurser

**Hvorfor viktig:**
- Havet produserer 50% av oksygenet vi puster
- 3 milliarder mennesker avhengig av havet for mat
- Plastforurensning, overfiske, havforsuring truer havet

**Tiltak:** Stoppe plastforurensning, bærekraftig fiske, marine verneområder

---

**Mitt valg av viktigste mål (eksempel):**

**1. Mål 13 (Stoppe klimaendringene)**
- Klimaendringer påvirker ALT (mat, vann, helse, økosystemer)
- Uten handling kan jorden bli ubeboelig for mange
- Haster mest

**2. Mål 4 (God utdanning)**
- Utdanning gir mennesker kunnskap til å løse problemer
- Utdannede mennesker kan bekjempe fattigdom, klimaendringer, sykdom
- Investering i fremtiden

**3. Mål 1 (Utrydde fattigdom)**
- Ingen skal sulte eller lide
- Grunnleggende menneskerettighet
- Fattigdom holder mennesker tilbake

---

**Sammenheng mellom målene:**

Målene er koblet sammen:
- Ren energi (7) → Stoppe klimaendringer (13)
- God utdanning (4) → Anstendig arbeid (8) → Utrydde fattigdom (1)
- Rent vann (6) → God helse (3)

Vi må jobbe med **alle** målene samtidig!

---

**Konklusjon:**

Alle 17 mål er viktige. Velg de du brenner for og engasjer deg!`,
      hints: ['Velg mål som engasjerer deg', 'Hvorfor er de viktige?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-5-4-ex-3',
      number: '3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom lineær økonomi og sirkulær økonomi. Gi ett konkret eksempel på hvordan et produkt kan gå fra lineær til sirkulær.',
      solution: `**Lineær økonomi vs. Sirkulær økonomi:**

---

## **Lineær økonomi**

**Modell:** "Ta - Lag - Kast"

**Hvordan fungerer det:**

1. **Ta ressurser** fra naturen (råvarer: metaller, olje, trær)
2. **Lag produkter** (fabrikker produserer varer)
3. **Bruk produktene** (forbrukere kjøper og bruker)
4. **Kast som avfall** (produkter kastes etter kort tid)

**Eksempel:** Kjøp en T-skjorte → Bruk noen måneder → Kast i søpla

---

**Problemer med lineær økonomi:**

**1. Ressurser tar slutt**
- Vi bruker mer enn jorden kan produsere
- Ikke-fornybare ressurser (metaller, olje) blir brukt opp

**2. Enormt avfall**
- Søppelfyllinger vokser
- Forurensning (plast i havet, giftig avfall)

**3. Klimagassutslipp**
- Produksjon krever energi (ofte fossilt)
- Transport av varer

**4. Miljøødeleggelse**
- Gruvedrift, avskoging
- Tap av artsmangfold

---

## **Sirkulær økonomi**

**Modell:** "Lag - Bruk - Gjenbruk - Resirkuler"

**Hvordan fungerer det:**

1. **Design for lang levetid** (produkter laget for å vare)
2. **Bruk lengst mulig** (reparere, dele, gjenbruke)
3. **Resirkuler materialer** (lage nye produkter av gamle)
4. **Minimal avfall** (alt holdes i kretsløp)

**Mål:** Ressurser går i **kretsløp** i stedet for å kastes

---

**Prinsipper:**

**1. Reduce (reduser):** Kjøp mindre
**2. Reuse (gjenbruk):** Bruk flere ganger
**3. Repair (reparer):** Fiks i stedet for å kaste
**4. Recycle (resirkuler):** Lag nye produkter av gamle materialer
**5. Rot (biologisk nedbrytning):** Kompostering av organisk avfall

---

## **Konkret eksempel: Mobiltelefon**

### **Lineær økonomi (slik det ofte er i dag):**

**1. Ta ressurser:**
- Metaller (gull, kobber, lithium) graves opp
- Plast lages av olje
- Glass lages av sand

**2. Lag mobiltelefon:**
- Fabrikk i Asia produserer mobil
- Bruker mye energi og ressurser

**3. Bruk (kort tid):**
- Forbruker kjøper mobil
- Bruker den i 1-2 år
- Kjøper ny når ny modell kommer

**4. Kast:**
- Gammel mobil kastes eller legges i en skuff
- Verdifulle materialer går tapt
- Kan havne på søppelfylling (giftig avfall)

**Problem:** Ressurser kastes, ny mobil krever nye ressurser

---

### **Sirkulær økonomi (slik det burde være):**

**1. Design for lang levetid:**
- Mobiltelefon designes for å vare 5-7 år (ikke 1-2 år)
- **Modulær design:** Lett å skifte batteri, skjerm, kamera
- Programvareoppdateringer i mange år

**Eksempel:** Fairphone (mobiltelefon designet for reparasjon)

---

**2. Bruk lenger:**
- Forbruker bruker mobil i 5-7 år
- Reparerer når noe går i stykker (bytt batteri, skjerm)
- Programvareoppdateringer gjør at den fungerer lenge

---

**3. Når mobilen ikke kan brukes lenger:**

**a) Gjenbruk:**
- Selge eller donere mobil til andre (second-hand)
- Renovere (refurbished) og selge som brukt

**b) Resirkulering:**
- Levere inn mobil til produsent eller elektronikkbutikk
- Fabrikk demonterer mobilen
- **Hente ut verdifulle metaller:** Gull, kobber, lithium (urban mining)
- **Resirkulere plast og glass**
- Materialene brukes til å lage **nye mobiltelefoner**

**c) Biologisk nedbrytbart:**
- Fremtidige mobiler kan lages av bioplast (nedbrytbart)

---

**Fordeler ved sirkulær modell:**

| Aspekt | Lineær | Sirkulær |
|--------|--------|----------|
| **Levetid** | 1-2 år | 5-7 år |
| **Avfall** | Høyt | Minimalt |
| **Ressursbruk** | Høyt (nye ressurser hele tiden) | Lavt (gjenbruk) |
| **Klima** | Høye utslipp (produksjon) | Lave utslipp |
| **Økonomi** | Kjøpe ny ofte (dyrt) | Bruke lenger (billigere) |

---

**Konklusjon:**

**Lineær økonomi:** Ta → Lag → Bruk → Kast (insustainabel)

**Sirkulær økonomi:** Design → Bruk lenge → Gjenbruk → Resirkuler (bærekraftig)

**Mobiltelefon-eksempel:**
- Lineær: Ny mobil hvert år, kast gammel
- Sirkulær: Bruk i 5-7 år, reparer, lever inn til resirkulering

**Fremtiden:** Vi må gå fra lineær til sirkulær økonomi for å bevare ressurser og redusere klimagassutslipp.`,
      hints: ['Tenk på hvordan produkter brukes i dag vs. hvordan de burde brukes', 'Hva skjer med produktet etter bruk?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-5-4-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv tre eksempler på grønn teknologi. Hvordan bidrar de til bærekraftig utvikling?',
      solution: `**Tre eksempler på grønn teknologi:**

---

## **1. Solceller (fotovoltaiske paneler)**

**Hva er det:**
- Paneler som omdanner sollys til elektrisk energi
- Installeres på tak, fasader, i solfelt

**Hvordan fungerer det:**
- Sollys treffer silisiumceller
- Fotoner (lyspartikler) frigjør elektroner
- Elektroner skaper elektrisk strøm

---

**Bidrag til bærekraftig utvikling:**

**Miljø:**
- **Ingen klimagassutslipp** under drift
- **Fornybar energi** (solen skinner hver dag)
- Reduserer avhengighet av fossile brensler

**Økonomi:**
- Lavere strømregning (produsere egen strøm)
- Skaper jobber (installasjon, vedlikehold)
- Prisene faller (stadig billigere teknologi)

**Samfunn:**
- **Desentralisert energi:** Alle kan installere solceller (ikke avhengig av stort kraftverk)
- Energitilgang til fattige områder (solcelledrevne lamper, vannpumper)
- Energiuavhengighet

**Utfordringer:**
- Ustabil produksjon (avhengig av sol)
- Krever energilagring (batterier)
- Produksjon av paneler bruker ressurser

**Status:** Vokser raskt globalt, spesielt i solrike land (Afrika, Asia, Australia)

---

## **2. Elektriske kjøretøy (elbiler, el-busser)**

**Hva er det:**
- Kjøretøy drevet av elektriske motorer i stedet for bensin/diesel motorer
- Batteri lagrer energi

**Hvordan fungerer det:**
- Batteri (lithium-ion) lagrer strøm
- Elektrisk motor omdanner strøm til bevegelse
- Regenerativ bremsing (henter energi tilbake ved bremsing)

---

**Bidrag til bærekraftig utvikling:**

**Miljø:**
- **Ingen lokale utslipp** (ingen eksos)
- Hvis ladet med **fornybar strøm** (vannkraft i Norge): Nesten utslippsfritt
- Reduserer luftforurensning i byer (bedre helse)

**Økonomi:**
- Lavere driftskostnader (strøm billigere enn bensin)
- Mindre vedlikehold (færre bevegelige deler)
- Norge: Avgiftsfritak gjør elbil konkurransedyktig

**Samfunn:**
- Bedre luftkvalitet (færre dødsfall fra luftforurensning)
- Støy reduseres (stille motorer)
- Skaper jobber (batteriproduksjon, lading)

**Utfordringer:**
- Batteriproduksjon krever ressurser (lithium, kobolt)
- Rekkevidde (bedres stadig)
- Ladeinfrastruktur (utbygges raskt)

**Status:** Norge er verdensledende (~90% av nybilsalget er elbil)

---

## **3. Karbonfangst og lagring (CCS - Carbon Capture and Storage)**

**Hva er det:**
- Teknologi som fanger CO₂ fra utslipp og lagrer det under bakken
- Hindrer CO₂ i å nå atmosfæren

**Hvordan fungerer det:**

**1. Fangst:**
- CO₂ fanges fra skorsteiner (kraftverk, sementfabrikker, stålverk)
- Kjemiske prosesser skiller CO₂ fra andre gasser

**2. Transport:**
- CO₂ komprimeres (gjøres til væske)
- Transporteres i rør eller skip

**3. Lagring:**
- CO₂ pumpes ned i geologiske formasjoner under havbunnen
- Lagres permanent (tusenvis av år)

---

**Bidrag til bærekraftig utvikling:**

**Miljø:**
- **Fjerner CO₂** fra atmosfæren
- Kan brukes på eksisterende industri (sement, stål) som er vanskelig å elektrifisere
- Potensial til å fjerne milliarder tonn CO₂

**Økonomi:**
- Gjør det mulig for industri å fortsette drift uten utslipp
- Skaper jobber (bygging av anlegg)

**Samfunn:**
- Bidrar til å nå klimamål (Paris-avtalen)
- Gir industri tid til å utvikle andre løsninger

**Utfordringer:**
- **Dyrt:** Koster mye å bygge og drifte
- **Energikrevende:** Bruker mye energi (reduserer effektivitet)
- **Sikkerhet:** Risiko for lekkasje (må overvåkes)
- **Ikke en permanent løsning:** Bedre å slutte å produsere CO₂

**Status:** Få anlegg i drift (Norge: Langskip-prosjektet fra Norcem sementfabrikk)

---

## **Sammenligning:**

| Teknologi | Miljøeffekt | Økonomi | Status |
|-----------|-------------|---------|--------|
| **Solceller** | Ren energi | Billigere | Vokser raskt |
| **Elbiler** | Ingen lokale utslipp | Konkurransedyktig | Norge leder |
| **CCS** | Fjerner CO₂ | Dyrt | Under utvikling |

---

**Konklusjon:**

Grønn teknologi bidrar til bærekraftig utvikling ved å:
1. **Redusere klimagassutslipp** (sol, elbil, CCS)
2. **Skape grønne jobber** (økonomi)
3. **Forbedre helse** (mindre forurensning)
4. **Sikre fremtidig energiforsyning** (fornybart)

Vi trenger **alle** disse teknologiene (og flere!) for å bekjempe klimakrisen.`,
      hints: ['Tenk på energi, transport, industri', 'Hvordan reduserer teknologien utslipp?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-5-4-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Diskuter: Hva er de største barrierene for bærekraftig utvikling? Foreslå konkrete tiltak for å overvinne disse barrierene.',
      solution: `**Barrierer for bærekraftig utvikling og tiltak:**

---

## **Barriere 1: Økonomiske interesser (kortsiktig profitt)**

**Problem:**
- Bedrifter og investorer fokuserer på **kortsiktig profitt** i stedet for langsiktig bærekraft
- Fossile brensler er fortsatt lønnsomme (subsidier, etablert infrastruktur)
- Grønn teknologi kan være dyrere (initialt)

**Eksempel:**
- Oljeselskaper tjener milliarder på fossilt brennstoff
- Lobbying mot klimatiltak

---

**Tiltak:**

**1. Karbonprising:**
- **Avgift på CO₂-utslipp** (gjør forurensning dyrt)
- Eksempel: Norge har CO₂-avgift på fossilt brennstoff
- Gjør fornybart mer konkurransedyktig

**2. Fjerne subsidier til fossilt:**
- Slutte å subsidiere olje, kull, gass ($ 500 milliarder globalt årlig!)
- Subsidiere fornybar energi i stedet

**3. Grønne investeringer:**
- Investere i grønn teknologi (sol, vind, hydrogen)
- ESG-kriterier (Environment, Social, Governance) for bedrifter
- Belønne bærekraftige bedrifter

**4. Krav til transparens:**
- Bedrifter må rapportere klimagassutslipp
- Forbrukere kan velge bærekraftige produkter

---

## **Barriere 2: Politisk vilje og uenighet**

**Problem:**
- **Mangel på politisk vilje** til å ta upopulære beslutninger
- **Uenighet mellom land:** Hvem skal betale? Hvem skal redusere?
- **Kortvarige politiske sykluser:** Politikere fokuserer på valg (4 år), ikke langsiktig bærekraft

**Eksempel:**
- USA trakk seg fra Paris-avtalen (2017-2021)
- Mange land møter ikke egne klimamål

---

**Tiltak:**

**1. Sterke internasjonale avtaler:**
- **Paris-avtalen:** Binde land til klimamål
- Straffe land som ikke følger opp
- FN må ha mer makt til å håndheve

**2. Klimarettferdighet:**
- **Rike land** (historisk ansvarlige) må betale mer
- Støtte fattige land i grønn omstilling
- Grønt klimafond ($ 100 milliarder årlig)

**3. Langsiktige planer:**
- Lovfeste klimamål (uavhengig av hvem som vinner valg)
- Eksempel: Norge har klimamålslov

**4. Folkeopinion:**
- Klimabevegelser (Fridays for Future) presser politikere
- Velgere må stemme på klimavennlige partier

---

## **Barriere 3: Mangel på kunnskap og bevissthet**

**Problem:**
- Mange mennesker **vet ikke** om klimakrisen eller undervurderer alvoret
- **Desinformasjon** (klimafornektelse, grønnvasking)
- **Apati:** "Hva hjelper det at jeg gjør noe?"

**Eksempel:**
- Noen tror fortsatt klimaendringer er naturlige (ikke menneskeskapte)
- Mange vet ikke hvordan leve bærekraftig

---

**Tiltak:**

**1. Utdanning:**
- **Klima og bærekraft i skolen** (fra barneskole)
- Lære om klimavitenskap, konsekvenser, tiltak
- FNs bærekraftsmål inn i pensum

**2. Kommunikasjon:**
- **Klarere kommunikasjon fra forskere og politikere**
- Bruke sosiale medier, dokumentarer (f.eks. "Our Planet")
- Vise konkrete konsekvenser (ikke bare tall)

**3. Bekjempe desinformasjon:**
- Faktasjekk, merke falske nyheter
- Motvirke klimafornektelse
- Transparens fra bedrifter (mot grønnvasking)

**4. Inspirere handling:**
- Vise at **individuelle handlinger har betydning**
- Feire suksesser (Norge: elbiler, vindkraft)
- Skape håp (ikke kun doom and gloom)

---

## **Barriere 4: Teknologiske begrensninger**

**Problem:**
- Noen teknologier er **ikke gode nok ennå**
- **Energilagring:** Batterier er dyre og har begrenset kapasitet
- **Grønn hydrogen:** Dyrt å produsere
- **Flytrafikk, tungtransport:** Vanskelig å elektrifisere

**Eksempel:**
- Lithium-ion-batterier har begrenset rekkevidde
- Fly kan ikke fly på batteri (for tungt)

---

**Tiltak:**

**1. Forskning og utvikling (R&D):**
- **Investere massivt i grønn teknologi**
- Utvikle bedre batterier (solid-state, lithium-sulfur)
- Hydrogen for fly og skip

**2. Skalering:**
- **Masseproduksjon gjør teknologi billigere**
- Eksempel: Solceller er 90% billigere nå enn i 2010

**3. Innovasjonsstøtte:**
- Subsidiere nye teknologier (karbonfangst, grønn hydrogen)
- Samarbeid mellom universiteter, bedrifter, myndigheter

**4. Bruke eksisterende teknologi:**
- Mye teknologi finnes allerede (sol, vind, elbil)
- **Deploy-deploy-deploy!** Ikke vente på perfekt teknologi

---

## **Barriere 5: Livsstil og forbruksmønstre**

**Problem:**
- **Høyt forbruk** i rike land (overforbruk)
- **Kjøtt, fly, bil:** Vanskelig å endre vaner
- **Kulturelle normer:** Status knyttet til forbruk (stor bil, ny mobil)

**Eksempel:**
- Nordmenn flyr mye (ferie)
- Mye kjøttforbruk (spesielt i Vesten)

---

**Tiltak:**

**1. Endre normer:**
- **Gjøre bærekraft "kult"** (ikke offer)
- Influencere, kjendiser som går foran
- Positive rollemodeller

**2. Gjøre bærekraft lett:**
- **Gode alternativer:** Elbil, vegetarmat, kollektivtransport
- Billigere bærekraftige valg (subsidier)
- Enklere å velge riktig (miljømerker)

**3. Nudging:**
- **Subtil påvirkning** til bedre valg
- Eksempel: Vegetarrett som standard (må velge aktivt kjøtt)
- Sykkelveier (gjøre sykling trygt og lett)

**4. Delingsøkonomi:**
- Dele biler, verktøy, klær
- Redusere eierskap

---

## **Barriere 6: Ulikhet (fattige land vs. rike land)**

**Problem:**
- **Fattige land** trenger økonomisk vekst, men mangler ressurser til grønn omstilling
- **Rike land** har historisk ansvar (har sluppet ut mest CO₂)
- **Klimarettferdighet:** Hvem skal betale?

**Eksempel:**
- Afrika har lavest utslipp, men rammes hardest av klimaendringer
- India og Kina vil vokse økonomisk (kan ikke gjøre det med kull?)

---

**Tiltak:**

**1. Klimafinansiering:**
- **Rike land må støtte fattige land** økonomisk
- Grønt klimafond ($ 100 milliarder årlig)
- Teknologioverføring (dele grønn teknologi)

**2. Rettferdig omstilling:**
- Fattige land skal ikke gjenta rike lands feil (fossilt)
- Hoppe direkte til fornybart (leapfrogging)

**3. Gjeldslette:**
- Ettergi gjeld til fattige land (frigjør penger til klima)

---

## **Konklusjon:**

**Største barrierer:**
1. Økonomiske interesser (profitt > bærekraft)
2. Politisk uenighet
3. Mangel på kunnskap
4. Teknologiske begrensninger
5. Livsstil/forbruk
6. Ulikhet

**Løsninger krever:**
- **Politikk:** Karbonprising, internasjonale avtaler
- **Økonomi:** Grønne investeringer, subsidier
- **Teknologi:** Forskning, skalering
- **Utdanning:** Kunnskap, bekjempe desinformasjon
- **Kultur:** Endre normer, gjøre bærekraft lett
- **Rettferdighet:** Støtte fattige land

**Konklusjon:** Barrierene er store, men **overkommelige**. Vi har teknologien og kunnskapen. Det som mangler er **politisk vilje** og **handling**.`,
      hints: ['Tenk på økonomi, politikk, teknologi, kultur', 'Hva hindrer oss i å handle?', 'Hvordan overvinne disse hindrene?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};
