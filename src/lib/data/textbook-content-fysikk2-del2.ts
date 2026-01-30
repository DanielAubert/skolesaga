/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Fysikk 2 VG3 – Del 2
 *
 * Kapittel 5.3–5.6: Induksjon (fortsettelse)
 * Dekker LK20-kompetansemål for fysikk 2 (FYS02-02)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.3: Lenz' lov
// ============================================================================

export const CHAPTER_FYSIKK2_5_3: TextbookChapter = {
  id: 'fysikk2-5-3',
  courseId: 'fysikk2',
  chapterNumber: '5.3',
  title: 'Lenz\' lov',
  description: 'Lær om Lenz\' lov i detalj, hvordan du bestemmer retningen på indusert strøm, høyrehåndsregelen for induksjon, motstand mot fluksforandring, og sammenhengen med energibevaring.',
  estimatedMinutes: 55,
  prerequisites: ['fysikk2-5-2'],
  competenceGoals: [
    'forklare Lenz\' lov og dens fysiske grunnlag',
    'bestemme retningen på indusert strøm i ulike situasjoner',
    'anvende høyrehåndsregelen for induksjon',
    'forstå sammenhengen mellom Lenz\' lov og energibevaring',
    'analysere motstand mot fluksforandring i praktiske situasjoner',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'fys2-5-3-intro',
      type: 'text',
      content: `# Lenz' lov

I kapittel 5.1 lærte du Faradays lov, som forteller oss **hvor stor** den induserte EMF-en er. Men i mange situasjoner er det like viktig å vite **hvilken retning** den induserte strømmen går. Det er nettopp dette Lenz' lov handler om.

Heinrich Friedrich Emil Lenz (1804–1865) var en russisk fysiker av baltisk-tysk opprinnelse. I 1834 formulerte han loven som bærer hans navn, og som gir oss en elegant regel for å bestemme retningen på indusert strøm.

**I dette kapitlet lærer du:**
- Den fullstendige formuleringen av Lenz' lov
- Systematisk fremgangsmåte for å finne strømretning
- Høyrehåndsregelen for induksjon
- Hvorfor Lenz' lov er en konsekvens av energibevaring
- Praktiske anvendelser og eksempler`,
    },

    // ========== DEFINISJON: LENZ' LOV ==========
    {
      id: 'fys2-5-3-def-lenz',
      type: 'definition',
      title: 'Lenz\' lov',
      content: `**Lenz' lov:** Den induserte strømmen i en lukket krets går alltid i en slik retning at den **motvirker** den fluksendringen som forårsaket den.

Med andre ord: Det magnetfeltet som den induserte strømmen skaper, vil alltid motarbeide endringen i den opprinnelige magnetiske fluksen.

**Matematisk uttrykk:**

Minustegnet i Faradays lov representerer Lenz' lov:

$$\\varepsilon = -N\\frac{d\\Phi}{dt}$$

Minustegnet sier at den induserte EMF-en (og dermed strømmen) virker i en retning som motvirker fluksendringen.`,
    },

    // ========== SYSTEMATISK FREMGANGSMÅTE ==========
    {
      id: 'fys2-5-3-fremgangsmate',
      type: 'text',
      content: `## Systematisk fremgangsmåte for å bestemme strømretning

For å bruke Lenz' lov systematisk, følg disse stegene:

### Steg 1: Bestem retningen på det eksterne magnetfeltet

Tegn feltlinjene til det eksterne magnetfeltet gjennom sløyfen. Angi om feltet peker «inn i» eller «ut av» sløyfen.

### Steg 2: Bestem om fluksen øker eller minker

Spør deg selv: Blir det flere eller færre feltlinjer gjennom sløyfen?

- **Øker fluksen?** Det betyr at endringen $\\frac{d\\Phi}{dt} > 0$.
- **Minker fluksen?** Det betyr at $\\frac{d\\Phi}{dt} < 0$.

### Steg 3: Finn retningen på det induserte magnetfeltet

Lenz' lov sier:
- **Hvis fluksen øker:** Det induserte feltet peker **motsatt** av det eksterne feltet (for å motvirke økningen).
- **Hvis fluksen minker:** Det induserte feltet peker **samme vei** som det eksterne feltet (for å opprettholde fluksen).

### Steg 4: Bruk høyrehåndsregelen for å finne strømretningen

Når du vet hvilken retning det induserte feltet må peke, bruker du høyrehåndsregelen:
- Krul fingrene i strømretningen
- Tommelen peker i retningen av magnetfeltet som strømmen skaper

Alternativt: Pek tommelen i retningen av det induserte feltet, og fingrene viser strømretningen.`,
    },

    // ========== NOTE: HUSKEREGEL ==========
    {
      id: 'fys2-5-3-huskeregel',
      type: 'note',
      title: 'Huskeregel for Lenz\' lov',
      content: `**Tenk på naturen som «lat»:**

Naturen «liker ikke» endringer i magnetisk fluks og vil alltid prøve å motarbeide dem.

- **Fluks øker?** → Indusert strøm prøver å «bremse» økningen (lager felt som motvirker).
- **Fluks minker?** → Indusert strøm prøver å «opprettholde» fluksen (lager felt som støtter).

**Alternativ huskeregel:** «Hvis du prøver å skyve en magnet inn i en spole, vil spolen skyve tilbake.»

Dette er som et fysisk uttrykk for treghet – systemet motsetter seg endring.`,
    },

    // ========== HØYREHÅNDSREGELEN FOR INDUKSJON ==========
    {
      id: 'fys2-5-3-hoyrehand',
      type: 'text',
      content: `## Høyrehåndsregelen for induksjon

Høyrehåndsregelen er et kraftig verktøy for å finne strømretningen når du allerede vet hvilken retning det induserte magnetfeltet må ha.

### Bruk av høyrehåndsregelen

1. **Bestem retningen på det induserte B-feltet** (fra Lenz' lov).
2. **Pek høyre tommel** i retningen av det induserte $\\vec{B}$-feltet gjennom sløyfen.
3. **Fingrene krøller seg** i retningen strømmen må gå.

### Viktige konvensjoner

- **Sett fra forsiden av sløyfen:** Hvis strømmen går mot klokka, peker $\\vec{B}$ «mot deg» (ut av sløyfen).
- **Sett fra forsiden av sløyfen:** Hvis strømmen går med klokka, peker $\\vec{B}$ «fra deg» (inn i sløyfen).

### Eksempel: Nordpol nærmer seg

Hvis nordpolen til en magnet beveger seg mot en spole:
1. Det eksterne feltet peker inn i spolen (mot høyre, si).
2. Fluksen gjennom spolen **øker**.
3. Lenz' lov: Det induserte feltet peker **ut av** spolen (mot venstre) – det motvirker økningen.
4. Høyrehåndsregelen: Pek tommelen mot venstre → Fingrene viser at strømmen går **mot klokka** sett fra magnetsiden.

Resultatet er at spolen oppfører seg som en magnet med nordpolen rettet mot den innkommende magneten → **frastøtning** → motvirkning!`,
    },

    // ========== EKSEMPEL 1: MAGNET OG SPOLE ==========
    {
      id: 'fys2-5-3-eks1',
      type: 'example',
      title: 'Magnet som beveges inn og ut av en spole',
      problem: `En stavmagnet skyves inn i en spole med nordpolen først. Deretter trekkes magneten ut igjen.

a) Beskriv retningen på den induserte strømmen mens magneten skyves inn.
b) Beskriv retningen på den induserte strømmen mens magneten trekkes ut.
c) Hva skjer med strømmen hvis magneten holdes i ro inne i spolen?`,
      solution: `**a) Magneten skyves inn (nordpol først):**

1. **Eksternt felt:** Magnetfeltlinjene fra nordpolen peker inn i spolen.
2. **Fluksendring:** Fluksen gjennom spolen **øker** (magneten nærmer seg).
3. **Lenz' lov:** Det induserte feltet må peke **ut av spolen** (mot magneten) for å motvirke økningen.
4. **Strømretning:** Strømmen går slik at den lager en «nordpol» som peker mot magneten.

**Svar a):** Strømmen går mot klokka sett fra magnetsiden – spolen **frastøter** magneten.

---

**b) Magneten trekkes ut:**

1. **Fluksendring:** Fluksen gjennom spolen **minker** (magneten fjernes).
2. **Lenz' lov:** Det induserte feltet må peke **inn i spolen** (i samme retning som det opprinnelige feltet) for å prøve å opprettholde fluksen.
3. **Strømretning:** Strømmen snur retning og lager en «sørpol» mot magneten.

**Svar b):** Strømmen snur og går med klokka sett fra magnetsiden – spolen **tiltrekker** magneten.

---

**c) Magneten holdes i ro:**

Når magneten er i ro, er det **ingen endring** i magnetisk fluks:

$$\\frac{d\\Phi}{dt} = 0 \\implies \\varepsilon = 0$$

**Svar c):** Ingen strøm induseres. Det er endringen i fluks som skaper strøm, ikke fluksen i seg selv.`,
    },

    // ========== EKSEMPEL 2: SLØYFE I VARIABELT FELT ==========
    {
      id: 'fys2-5-3-eks2',
      type: 'example',
      title: 'Sirkulær sløyfe i variabelt felt',
      problem: `En sirkulær ledersløyfe ligger horisontalt på et bord. Et uniformt magnetfelt peker vertikalt **oppover** gjennom sløyfen.

Bestem retningen på den induserte strømmen (med eller mot klokka sett ovenfra) i følgende tilfeller:

a) Magnetfeltet øker i styrke.
b) Magnetfeltet minker i styrke.
c) Magnetfeltet holder konstant styrke, men sløyfen trekkes sammen slik at arealet minker.`,
      solution: `**a) Feltet øker (peker oppover):**

1. Fluksen **øker** (feltet peker opp og blir sterkere).
2. Lenz' lov: Det induserte feltet må peke **nedover** for å motvirke økningen.
3. Høyrehåndsregelen: For felt nedover, pek tommelen ned → fingrene krøller seg **med klokka** sett ovenfra.

**Svar a):** Strømmen går **med klokka** (sett ovenfra).

---

**b) Feltet minker (men peker fortsatt oppover):**

1. Fluksen **minker** (feltet peker opp men blir svakere).
2. Lenz' lov: Det induserte feltet må peke **oppover** for å opprettholde fluksen.
3. Høyrehåndsregelen: For felt oppover, pek tommelen opp → fingrene krøller seg **mot klokka** sett ovenfra.

**Svar b):** Strømmen går **mot klokka** (sett ovenfra).

---

**c) Arealet minker, feltet er konstant oppover:**

1. $\\Phi = BA\\cos\\theta$. Når $A$ minker mens $B$ er konstant, **minker fluksen**.
2. Lenz' lov: Det induserte feltet må peke **oppover** for å opprettholde fluksen.
3. Høyrehåndsregelen: Strømmen går **mot klokka** sett ovenfra.

**Svar c):** Strømmen går **mot klokka** (sett ovenfra) – samme som i b).`,
    },

    // ========== ENERGIBEVARING ==========
    {
      id: 'fys2-5-3-energibevaring',
      type: 'text',
      content: `## Lenz' lov og energibevaring

Lenz' lov er ikke bare en praktisk regel – den er en **fundamental konsekvens av energibevaring**.

### Tankeeksperiment: Hva om Lenz' lov ikke gjaldt?

Tenk deg at en magnet nærmer seg en spole, og at den induserte strømmen skapte et felt som **tiltrakk** magneten (i stedet for å frastøte den).

Da ville det skjedd:
1. Magneten akselererer mot spolen (tiltrekning).
2. Fluksen øker raskere → enda mer strøm induseres.
3. Mer strøm → enda sterkere tiltrekning.
4. Magneten akselererer mer og mer → uendelig energi!

Dette bryter med energibevaring! Altså **må** den induserte strømmen motvirke endringen.

### Energiregnskap

Når vi skyver en magnet inn i en spole:
- Vi må utføre **mekanisk arbeid** mot den frastøtende kraften.
- Dette arbeidet konverteres til **elektrisk energi** (indusert strøm).
- Den elektriske energien konverteres til **varme** i spolens motstand ($P = I^2R$).

$$W_{\\text{mekanisk}} = E_{\\text{elektrisk}} = Q_{\\text{varme}}$$

Energien er bevart!

### Formel for kraft på magnet

For en magnet som beveges mot en spole, er den bremsende kraften proporsjonal med hastigheten:

$$F_{\\text{brems}} \\propto v$$

Jo raskere du skyver magneten, desto raskere endres fluksen, desto større EMF, desto mer strøm, og desto sterkere frastøtning. Dette er grunnlaget for **elektromagnetisk bremsing**.`,
    },

    // ========== THEOREM: ENERGIBEVARING OG LENZ ==========
    {
      id: 'fys2-5-3-theorem-energi',
      type: 'theorem',
      title: 'Lenz\' lov som konsekvens av energibevaring',
      content: `Den induserte strømmen må alltid gå i en retning som **motvirker** fluksendringen, fordi den motsatte retningen ville generere energi fra ingenting, i strid med termodynamikkens første lov.

**Konsekvenser:**
- For å opprettholde en fluksendring (og dermed strømproduksjon) må det tilføres energi utenfra
- Den tilførte energien konverteres til elektrisk energi i kretsen
- Lenz' lov garanterer at $W_{\\text{tilført}} \\geq E_{\\text{elektrisk}}$

$$\\varepsilon = -N\\frac{d\\Phi}{dt}$$

Minustegnet er **essensielt** – det sikrer energibevaring i elektromagnetiske systemer.`,
    },

    // ========== EKSEMPEL 3: FALLENDE MAGNET ==========
    {
      id: 'fys2-5-3-eks3',
      type: 'example',
      title: 'Fallende magnet i kobberrør',
      problem: `En sylindrisk neodymmagnet slippes gjennom et vertikalt kobberrør. Magneten faller mye saktere enn i fritt fall.

a) Forklar hvorfor magneten bremses.
b) Hva skjer med den kinetiske energien magneten «mister»?
c) Hvis røret kuttes i lengderetningen (slik at det ikke danner en lukket sløyfe), hva skjer da?`,
      solution: `**a) Hvorfor bremses magneten:**

Når magneten faller gjennom kobberrøret:
1. Den magnetiske fluksen gjennom enhver tverrsnittsdel av røret endres kontinuerlig.
2. Ifølge Faradays lov induseres **virvelstrømmer** i kobberet.
3. Ifølge Lenz' lov skaper disse strømmene magnetfelt som **motvirker** bevegelsen.

**Konkret:**
- **Over magneten:** Fluksen minker → indusert felt prøver å tiltrekke magneten (bremser nedover)
- **Under magneten:** Fluksen øker → indusert felt prøver å frastøte magneten (bremser nedover)

Begge effektene bremser magneten!

**Svar a):** Virvelstrømmer i kobberet skaper magnetiske krefter som motvirker magnetens bevegelse.

---

**b) Energiomvandling:**

Den kinetiske energien magneten «mister» konverteres til:
- **Joulevarme** i kobberet ($P = I^2R$)
- Kobberrøret varmes opp!

**Svar b):** Energien omdannes til varme i kobberet gjennom virvelstrømmenes ohmske tap.

---

**c) Kuttet rør:**

Hvis røret kuttes i lengderetningen, kan virvelstrømmene ikke danne lukkede sløyfer. Uten lukket krets kan ingen strøm flyte, og dermed oppstår ingen bremsende kraft.

**Svar c):** Magneten faller i fritt fall – ingen bremsing. Dette demonstrerer at det er **strømmen** (ikke bare EMF-en) som skaper den bremsende kraften.`,
    },

    // ========== EKSEMPEL 4: KVANTITATIV BEREGNING ==========
    {
      id: 'fys2-5-3-eks4',
      type: 'example',
      title: 'Retning og størrelse av indusert strøm',
      problem: `En flat, rektangulær spole med 80 vindinger, areal $A = 0{,}040$ m$^2$ og motstand $R = 4{,}0$ $\\Omega$ ligger i et uniformt magnetfelt. Feltet er vinkelrett på spolen og endres fra $B_1 = 0{,}60$ T til $B_2 = 0{,}20$ T i løpet av $\\Delta t = 0{,}50$ s.

a) Bestem retningen til feltet og om fluksen øker eller minker.
b) Beregn den induserte EMF-en.
c) Beregn den induserte strømmen og angi retningen med Lenz' lov.
d) Hvor mye energi omsettes i spolen i dette tidsrommet?`,
      solution: `**a) Fluksendring:**

Feltet endres fra 0,60 T til 0,20 T, altså **minker** feltet.

Siden $\\Phi = BA\\cos\\theta$ og $B$ minker: **Fluksen minker**.

$$\\Delta\\Phi = A \\cdot \\Delta B = 0{,}040 \\cdot (0{,}20 - 0{,}60) = 0{,}040 \\cdot (-0{,}40) = -0{,}016 \\text{ Wb}$$

**Svar a):** Fluksen minker med 0,016 Wb.

---

**b) Indusert EMF:**

$$\\varepsilon = -N\\frac{\\Delta\\Phi}{\\Delta t} = -80 \\cdot \\frac{-0{,}016}{0{,}50} = 80 \\cdot 0{,}032 = 2{,}56 \\text{ V} \\approx 2{,}6 \\text{ V}$$

**Svar b):** $\\varepsilon \\approx 2{,}6$ V.

---

**c) Strøm og retning:**

$$I = \\frac{\\varepsilon}{R} = \\frac{2{,}56}{4{,}0} = 0{,}64 \\text{ A}$$

**Retning (Lenz' lov):** Fluksen minker, så den induserte strømmen må skape et felt i **samme retning** som det opprinnelige feltet for å motvirke nedgangen. Bruk høyrehåndsregelen for å finne den konkrete strømretningen i spolen.

**Svar c):** $I \\approx 0{,}64$ A. Strømmen går i den retningen som opprettholder det opprinnelige feltet.

---

**d) Energi:**

$$E = P \\cdot t = I^2 R \\cdot \\Delta t = (0{,}64)^2 \\cdot 4{,}0 \\cdot 0{,}50$$
$$E = 0{,}4096 \\cdot 4{,}0 \\cdot 0{,}50 = 0{,}82 \\text{ J}$$

Alternativt: $E = \\varepsilon \\cdot I \\cdot \\Delta t = 2{,}56 \\cdot 0{,}64 \\cdot 0{,}50 = 0{,}82$ J

**Svar d):** Det omsettes omtrent **0,82 J** varmeenergi i spolen.`,
    },

    // ========== MOTSTAND MOT FLUKSFORANDRING ==========
    {
      id: 'fys2-5-3-motstand',
      type: 'text',
      content: `## Motstand mot fluksforandring i praksis

Lenz' lov manifesterer seg på mange måter i dagliglivet og teknologien:

### Elektromagnetisk bremsing

I mange tog og fornøyelsesparker brukes **elektromagnetisk bremsing**:
- En metallplate beveger seg gjennom et magnetfelt
- Virvelstrømmer induseres i platen
- Lenz' lov: Strømmene skaper krefter som motvirker bevegelsen
- **Resultatet:** Bremsing uten mekanisk kontakt – ingen slitasje!

**Fordeler:**
- Ingen kontaktflater som slites
- Bremsekraften øker med hastigheten (naturlig sikkerhet)
- Støyfri bremsing

### Virvelstrømsdemping

I presisjonsinstrumenter brukes virvelstrømsdemping:
- Galvanometre har et metallfeste som demper nålens svingninger
- Analogvekter har en metallplate som beveger seg mellom magneter
- Lenz' lov sørger for rask demping av oscillasjoner

### Induksjonskomfyr (repetisjon)

- Vekselstrøm i spolen under glassplaten
- Raskt skiftende magnetfelt
- Virvelstrømmer i kjelen → oppvarming
- Ikke-magnetiske materialer (glass) påvirkes ikke

### Metalldetektorer

- En spole sender ut et vekslende magnetfelt
- Metallgjenstander får indusert virvelstrømmer
- Virvelstrømmene skaper sitt eget felt som påvirker detektoren
- Lenz' lov gjør at metallgjenstander «svarer» på det utsendte feltet`,
    },

    // ========== EKSEMPEL 5: ELEKTROMAGNETISK BREMS ==========
    {
      id: 'fys2-5-3-eks5',
      type: 'example',
      title: 'Elektromagnetisk bremsing av pendel',
      problem: `En aluminiumsplate henger som en pendel mellom polene til en kraftig elektromagnet. Forklar hva som skjer i hvert tilfelle:

a) Magneten er **av** – platen svinger fritt.
b) Magneten slås **på** – platen settes i sving.
c) Aluminiumsplaten erstattes av en plate med **spalter** (smale kutt).`,
      solution: `**a) Magnet av:**

Uten magnetfelt er det ingen indusert strøm. Platen svinger fritt med kun luftmotstand og friksjon i opphengspunktet som demping.

**Svar a):** Platen svinger fritt med langsom demping.

---

**b) Magnet på:**

1. Når platen svinger inn i magnetfeltet, endres fluksen gjennom platen.
2. Virvelstrømmer induseres i aluminiumet.
3. Lenz' lov: Virvelstrømmene skaper krefter som **motvirker** bevegelsen.
4. Platen bremses kraftig – den stopper nesten umiddelbart!

**Svar b):** Platen bremses raskt av elektromagnetiske krefter og stopper etter kort tid.

---

**c) Plate med spalter:**

Spaltene bryter opp de lukkede sløyfene som virvelstrømmene trenger:
- Strømmene kan ikke flyte i store sløyfer
- Den totale induserte strømmen blir mye mindre
- Dermed blir bremsekraften svakere

**Svar c):** Platen svinger lenger før den stopper. Spaltene reduserer virvelstrømmene og dermed den elektromagnetiske bremsingen.

**Viktig prinsipp:** Dette er samme grunn til at transformatorkjerner lamineres – tynne, isolerte plater reduserer virvelstrømmene og energitapet.`,
    },

    // ========== EKSEMPEL 6: SLØYFE TREKKES UT AV FELT ==========
    {
      id: 'fys2-5-3-eks6',
      type: 'example',
      title: 'Rektangulær sløyfe som trekkes ut av magnetfelt',
      problem: `En rektangulær ledersløyfe med bredde $w = 0{,}10$ m, lengde $l = 0{,}20$ m og motstand $R = 0{,}50$ $\\Omega$ befinner seg helt inne i et uniformt magnetfelt $B = 0{,}40$ T som peker inn i planet.

Sløyfen trekkes med konstant hastighet $v = 2{,}0$ m/s mot høyre, slik at den forlater feltet.

a) Mens sløyfen fortsatt er helt inne i feltet: Er det noen indusert EMF?
b) Mens sløyfen er delvis ute av feltet: Beregn den induserte EMF-en.
c) Bestem retningen på den induserte strømmen (med eller mot klokka).
d) Beregn kraften som trengs for å opprettholde konstant hastighet.`,
      solution: `**a) Helt inne i feltet:**

Når sløyfen er helt inne i et uniformt felt, er fluksen:
$$\\Phi = B \\cdot A = \\text{konstant}$$

Arealet inne i feltet endres ikke → ingen fluksendring → ingen EMF.

**Svar a):** $\\varepsilon = 0$. Ingen strøm induseres.

---

**b) Delvis ute av feltet:**

Når sløyfen er delvis ute, har den en lengde $x$ inne i feltet som minker med hastighet $v$:

Arealet inne i feltet: $A_{\\text{felt}} = w \\cdot x$, der $\\frac{dx}{dt} = -v$.

$$\\varepsilon = -B \\cdot w \\cdot \\frac{dx}{dt} = -B \\cdot w \\cdot (-v) = Bwv$$

$$\\varepsilon = 0{,}40 \\cdot 0{,}10 \\cdot 2{,}0 = 0{,}080 \\text{ V}$$

**Svar b):** $\\varepsilon = 0{,}080$ V = 80 mV.

---

**c) Strømretning:**

1. Feltet peker inn i planet.
2. Sløyfen trekkes ut → arealet i feltet minker → **fluksen minker**.
3. Lenz' lov: Den induserte strømmen må skape et felt **inn i planet** (samme som det eksterne) for å opprettholde fluksen.
4. Høyrehåndsregelen: For felt inn i planet → strømmen går **med klokka**.

$$I = \\frac{\\varepsilon}{R} = \\frac{0{,}080}{0{,}50} = 0{,}16 \\text{ A}$$

**Svar c):** Strømmen er 0,16 A og går **med klokka**.

---

**d) Kraft for konstant hastighet:**

Den strømbærende venstre kanten (som fortsatt er i feltet) opplever en magnetisk kraft:

$$F = BIw = 0{,}40 \\cdot 0{,}16 \\cdot 0{,}10 = 0{,}0064 \\text{ N}$$

Denne kraften peker mot venstre (Lenz' lov – motvirker bevegelsen). For å holde konstant hastighet trengs en like stor kraft mot høyre.

**Svar d):** $F = 0{,}0064$ N = 6,4 mN mot høyre.

**Sjekk med energi:**
$$P_{\\text{mek}} = Fv = 0{,}0064 \\cdot 2{,}0 = 0{,}0128 \\text{ W}$$
$$P_{\\text{el}} = I^2R = (0{,}16)^2 \\cdot 0{,}50 = 0{,}0128 \\text{ W}$$

Energien er bevart!`,
    },

    // ========== WARNING: VANLIGE FEIL ==========
    {
      id: 'fys2-5-3-warning',
      type: 'warning',
      title: 'Vanlige feil med Lenz\' lov',
      content: `**Feil 1: Forveksle felt og fluks**
Det er **endringen i fluks** (ikke feltstyrken) som bestemmer indusert EMF. Et sterkt, konstant felt gir ingen induksjon.

**Feil 2: Glemme at retningen snur**
Når en magnet først skyves inn og deretter trekkes ut, snur strømretningen. Mange glemmer å analysere hvert tilfelle separat.

**Feil 3: Tro at det induserte feltet opphever det eksterne**
Det induserte feltet **motvirker endringen**, men er vanligvis mye svakere enn det eksterne feltet. Det opphever ikke det eksterne feltet fullstendig.

**Feil 4: Glemme at det trengs en lukket krets**
EMF induseres uansett, men **strøm** kan bare flyte i en lukket krets. En åpen sløyfe har EMF men ingen strøm.`,
    },

    // ========== LENZ' LOV I SPOLER ==========
    {
      id: 'fys2-5-3-spoler',
      type: 'text',
      content: `## Lenz' lov i spoler med mange vindinger

For en spole med $N$ vindinger forsterkes den induserte EMF-en:

$$\\varepsilon = -N\\frac{d\\Phi}{dt}$$

### Hva betyr dette for Lenz' lov?

Flere vindinger gir:
- **Større indusert EMF** (proporsjonal med $N$)
- **Større indusert strøm** (hvis motstanden ikke øker like mye)
- **Sterkere indusert magnetfelt** (som motvirker endringen)

Men det induserte feltet kan aldri **fullstendig** motvirke endringen. Hvis det gjorde det, ville det ikke være noen fluksendring, og dermed ingen indusert strøm – en selvmotsigelse!

### Selvinduktans (forhåndsvisning)

Når strømmen i en spole endres, endres også det magnetiske feltet spolen selv skaper. Dette betyr at spolen induserer en EMF **i seg selv** – dette kalles **selvinduktans**. Vi kommer tilbake til dette i et senere kapittel.

Lenz' lov forteller oss at den selvinduserte EMF-en alltid motvirker strømendringen:
- Økende strøm → selvindusert EMF motvirker (bremser økningen)
- Minkende strøm → selvindusert EMF støtter (bremser nedgangen)`,
    },

    // ========== EKSEMPEL 7: STRØMSLØYFE OG ELEKTROMAGNET ==========
    {
      id: 'fys2-5-3-eks7',
      type: 'example',
      title: 'Ledersløyfe nær en elektromagnet',
      problem: `En sirkulær ledersløyfe med areal $A = 0{,}025$ m$^2$ og motstand $R = 2{,}0$ $\\Omega$ ligger parallelt med og nær en elektromagnet. Strømmen i elektromagneten økes jevnt slik at magnetfeltet gjennom sløyfen øker med en rate på $\\frac{dB}{dt} = 0{,}50$ T/s.

a) Beregn den induserte EMF-en i sløyfen.
b) Beregn den induserte strømmen.
c) Bestem retningen på strømmen med Lenz' lov.
d) Beregn den magnetiske fluksen skapt av den induserte strømmen og sammenlign med den eksterne fluksendringen.`,
      solution: `**a) Indusert EMF:**

Sløyfen har $N = 1$ vinding og feltet er vinkelrett:

$$\\varepsilon = -N \\cdot A \\cdot \\frac{dB}{dt} = -1 \\cdot 0{,}025 \\cdot 0{,}50 = -0{,}0125 \\text{ V}$$

Størrelsen: $|\\varepsilon| = 0{,}0125$ V = 12,5 mV

**Svar a):** $|\\varepsilon| = 12{,}5$ mV.

---

**b) Indusert strøm:**

$$I = \\frac{|\\varepsilon|}{R} = \\frac{0{,}0125}{2{,}0} = 0{,}00625 \\text{ A} = 6{,}25 \\text{ mA}$$

**Svar b):** $I = 6{,}3$ mA.

---

**c) Retning:**

Feltet øker (elektromagneten forsterkes). Lenz' lov: Den induserte strømmen skaper et felt som **motvirker økningen**, altså i **motsatt retning** av det eksterne feltet.

**Svar c):** Strømmen går slik at dens felt peker motsatt av det økende eksterne feltet.

---

**d) Sammenligning:**

Det induserte feltet i sentrum av sløyfen (med radius $r = \\sqrt{A/\\pi} \\approx 0{,}089$ m):

$$B_{\\text{indusert}} = \\frac{\\mu_0 I}{2r} = \\frac{4\\pi \\times 10^{-7} \\cdot 0{,}00625}{2 \\cdot 0{,}089} \\approx 4{,}4 \\times 10^{-8} \\text{ T}$$

Per sekund øker det eksterne feltet med 0,50 T, mens det induserte feltet er ca. $4{,}4 \\times 10^{-8}$ T – **millioner ganger svakere**!

**Svar d):** Det induserte feltet er ekstremt svakt sammenlignet med det eksterne. Det motvirker endringen, men kan langt fra oppheve den.`,
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'fys2-5-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Lenz' lov
Den induserte strømmen går alltid i en retning som **motvirker** den fluksendringen som forårsaket den.

### Systematisk fremgangsmåte
1. Finn retningen på det eksterne feltet
2. Bestem om fluksen øker eller minker
3. Det induserte feltet peker motsatt (øking) eller samme vei (nedgang) som det eksterne
4. Bruk høyrehåndsregelen for å finne strømretningen

### Energibevaring
- Lenz' lov er en konsekvens av energibevaring
- Det må tilføres energi for å opprettholde fluksendringen
- Mekanisk arbeid → elektrisk energi → varme

### Praktiske konsekvenser
- Elektromagnetisk bremsing
- Virvelstrømsdemping
- Laminering av transformatorkjerner
- Induksjonsoppvarming`,
    },
  ],

  // ============================================================================
  // OPPGAVER FOR KAPITTEL 5.3
  // ============================================================================
  exercises: [
    {
      id: 'fys2-5-3-ex1',
      number: '5.3.1',
      type: 'multiple-choice',
      difficulty: 'lett',
      topic: 'Lenz\' lov grunnleggende',
      task: `En magnet med sørpolen først trekkes **bort fra** en spole. Ifølge Lenz' lov, hva gjør den induserte strømmen?`,
      options: [
        { id: 'a', text: 'Skaper et felt som tiltrekker magneten', isCorrect: true, feedback: 'Korrekt! Fluksen minker, så strømmen prøver å opprettholde den ved å tiltrekke magneten.' },
        { id: 'b', text: 'Skaper et felt som frastøter magneten', isCorrect: false, feedback: 'Nei, dette ville forsterke fluksreduksjonen, ikke motvirke den.' },
        { id: 'c', text: 'Skaper et felt parallelt med magneten', isCorrect: false, feedback: 'Feltet er ikke parallelt – det må ha en bestemt retning for å motvirke endringen.' },
        { id: 'd', text: 'Induserer ingen strøm', isCorrect: false, feedback: 'Når magneten beveger seg, endres fluksen, og strøm induseres.' },
      ],
      hints: [
        'Når magneten fjernes, minker fluksen gjennom spolen.',
        'Lenz\' lov sier at strømmen motvirker endringen – hva betyr det når fluksen minker?',
      ],
      solution: `Når magneten trekkes bort, minker fluksen gjennom spolen. Lenz' lov sier at den induserte strømmen motvirker dette – altså prøver den å **opprettholde** fluksen. Det gjør den ved å skape et felt som **tiltrekker** magneten (prøver å «holde den tilbake»).`,
    },
    {
      id: 'fys2-5-3-ex2',
      number: '5.3.2',
      type: 'multiple-choice',
      difficulty: 'lett',
      topic: 'Retning av indusert strøm',
      task: `Et uniformt magnetfelt peker ut av en sirkulær sløyfe (mot deg). Feltet øker i styrke. Sett fra forsiden (mot deg), hvilken retning har den induserte strømmen?`,
      options: [
        { id: 'a', text: 'Med klokka', isCorrect: true, feedback: 'Korrekt! Fluksen ut av sløyfen øker, så det induserte feltet peker inn i sløyfen (fra deg). Det gir strøm med klokka.' },
        { id: 'b', text: 'Mot klokka', isCorrect: false, feedback: 'Det ville gi et felt ut av sløyfen, som forsterker økningen. Lenz\' lov sier motvirke!' },
        { id: 'c', text: 'Veksler retning', isCorrect: false, feedback: 'Så lenge feltet øker jevnt, har strømmen en bestemt retning.' },
        { id: 'd', text: 'Ingen strøm', isCorrect: false, feedback: 'Et skiftende felt induserer definitivt en strøm i en lukket sløyfe.' },
      ],
      hints: [
        'Feltet peker ut av sløyfen og øker.',
        'Det induserte feltet må peke inn i sløyfen for å motvirke økningen.',
      ],
      solution: `Feltet peker ut av sløyfen og øker → det induserte feltet må peke **inn i** sløyfen. Høyrehåndsregelen: For felt inn i sløyfen, pek tommelen fra deg → fingrene krøller seg **med klokka** sett fra forsiden.`,
    },
    {
      id: 'fys2-5-3-ex3',
      number: '5.3.3',
      type: 'classic',
      difficulty: 'lett',
      topic: 'Lenz\' lov og energibevaring',
      task: `Forklar med egne ord hvorfor Lenz' lov er en nødvendig konsekvens av energibevaring. Bruk eksempelet med en magnet som skyves inn i en spole.`,
      hints: [
        'Tenk på hva som ville skjedd hvis strømmen gikk «feil vei».',
        'Ville magneten akselerere eller bremse?',
        'Hva sier det om energi?',
      ],
      solution: `Hvis den induserte strømmen skapte et felt som **tiltrakk** magneten (i stedet for å frastøte), ville magneten akselerere inn i spolen. Raskere bevegelse gir raskere fluksendring, som gir mer strøm, som gir sterkere tiltrekning – en positiv tilbakekoblingssløyfe. Magneten ville akselerere uten grense, og det ville oppstå ubegrenset energi fra ingenting. Dette bryter med energibevaringsloven. Derfor **må** den induserte strømmen motvirke bevegelsen, slik at det kreves arbeid for å skyve magneten inn.`,
    },
    {
      id: 'fys2-5-3-ex4',
      number: '5.3.4',
      type: 'classic',
      difficulty: 'medium',
      topic: 'Retningsbestemmelse',
      task: `En kvadratisk ledersløyfe med side $s = 0{,}15$ m beveger seg mot høyre med hastighet $v = 3{,}0$ m/s. Den trer inn i et uniformt magnetfelt $B = 0{,}50$ T som peker inn i planet (fra deg). Magnetfeltregionen har bredde $d = 0{,}30$ m.

Bestem retningen på den induserte strømmen (med eller mot klokka) når:
a) Sløyfen er på vei **inn** i feltet.
b) Sløyfen er helt **inne** i feltet.
c) Sløyfen er på vei **ut** av feltet.`,
      hints: [
        'Tegn figuren: sløyfe som beveger seg mot høyre inn i et felt-region.',
        'Når sløyfen er delvis inne: øker eller minker arealet som er i feltet?',
        'Husk at $\\Phi = B \\cdot A_{\\text{inne i felt}}$.',
      ],
      solution: `**a) Inn i feltet:**

Arealet av sløyfen som er inne i feltet øker → fluksen **øker** (inn i planet).
Lenz' lov: Indusert felt peker **ut av planet** for å motvirke.
Høyrehåndsregelen: Strømmen går **mot klokka**.

**b) Helt inne i feltet:**

Hele sløyfen er i et uniformt felt → arealet i feltet endres ikke → $\\frac{d\\Phi}{dt} = 0$.
**Ingen indusert strøm.**

**c) Ut av feltet:**

Arealet i feltet minker → fluksen **minker** (inn i planet).
Lenz' lov: Indusert felt peker **inn i planet** for å opprettholde fluksen.
Høyrehåndsregelen: Strømmen går **med klokka**.`,
    },
    {
      id: 'fys2-5-3-ex5',
      number: '5.3.5',
      type: 'classic',
      difficulty: 'medium',
      topic: 'Beregning med Lenz\' lov',
      task: `En sirkulær spole med 60 vindinger, radius 8,0 cm og motstand 3,0 $\\Omega$ ligger vinkelrett på et magnetfelt som peker oppover. Feltet minker uniformt fra 0,70 T til 0,30 T i løpet av 0,80 s.

a) Beregn den induserte EMF-en.
b) Beregn den induserte strømmen.
c) Bestem retningen på strømmen sett ovenfra.
d) Beregn den totale ladningen som flyter gjennom spolen.`,
      hints: [
        'Areal: $A = \\pi r^2$.',
        'Ladning: $Q = I \\cdot \\Delta t$, eller $Q = \\frac{N \\cdot \\Delta\\Phi}{R}$.',
        'Feltet minker → hvilken retning har det induserte feltet?',
      ],
      solution: `**Gitt:**
- $N = 60$, $r = 0{,}080$ m, $R = 3{,}0$ $\\Omega$
- $B_i = 0{,}70$ T, $B_f = 0{,}30$ T, $\\Delta t = 0{,}80$ s

**a) EMF:**
$$A = \\pi (0{,}080)^2 = 0{,}02011 \\text{ m}^2$$
$$\\Delta\\Phi = A \\cdot \\Delta B = 0{,}02011 \\cdot (0{,}30 - 0{,}70) = -0{,}00804 \\text{ Wb}$$
$$\\varepsilon = -N\\frac{\\Delta\\Phi}{\\Delta t} = -60 \\cdot \\frac{-0{,}00804}{0{,}80} = 0{,}60 \\text{ V}$$

**Svar a):** $\\varepsilon = 0{,}60$ V.

**b) Strøm:**
$$I = \\frac{\\varepsilon}{R} = \\frac{0{,}60}{3{,}0} = 0{,}20 \\text{ A}$$

**Svar b):** $I = 0{,}20$ A.

**c) Retning:**
Feltet peker oppover og minker. Lenz' lov: Indusert felt peker **oppover** for å opprettholde. Sett ovenfra, høyrehåndsregelen: strøm **mot klokka**.

**Svar c):** Mot klokka sett ovenfra.

**d) Ladning:**
$$Q = I \\cdot \\Delta t = 0{,}20 \\cdot 0{,}80 = 0{,}16 \\text{ C}$$

Eller: $Q = \\frac{N \\cdot |\\Delta\\Phi|}{R} = \\frac{60 \\cdot 0{,}00804}{3{,}0} = 0{,}16$ C

**Svar d):** $Q = 0{,}16$ C.`,
    },
    {
      id: 'fys2-5-3-ex6',
      number: '5.3.6',
      type: 'classic',
      difficulty: 'medium',
      topic: 'Fallende magnet',
      task: `En stavmagnet slippes gjennom et vertikalt kobberrør. Magneten når en konstant hastighet (terminalhastighet) etter kort tid.

a) Forklar hvorfor magneten oppnår terminalhastighet.
b) Sammenhengen mellom kreftene ved terminalhastighet.
c) Hva skjer med magnetens potensielle energi?
d) Ville magneten falle raskere eller saktere i et rør av aluminium (lavere motstand enn kobber)?`,
      hints: [
        'Tyngdekraften trekker magneten nedover, den elektromagnetiske kraften bremser.',
        'Ved terminalhastighet er netto kraft null.',
        'Lavere motstand i røret betyr større virvelstrømmer.',
      ],
      solution: `**a) Terminalhastighet:**
Tyngdekraften trekker magneten nedover. Virvelstrømmer indusert i kobberet skaper en bremsende kraft oppover (Lenz' lov). Bremsekraften øker med hastigheten (raskere bevegelse → raskere fluksendring → mer strøm → sterkere brems). Når bremsekraften er lik tyngdekraften, akselererer magneten ikke lenger.

**b) Ved terminalhastighet:**
$$F_{\\text{tyngde}} = F_{\\text{brems}}$$
$$mg = F_{\\text{EM}}$$

**c) Energiomvandling:**
$E_{\\text{pot}} \\to$ Joulevarme i kobberet (gjennom virvelstrømmene).
$$mgh = \\int P_{\\text{varme}} \\, dt = \\int I^2 R \\, dt$$

**d) Aluminium har lavere motstand:**
Lavere motstand → større virvelstrømmer → sterkere bremsekraft. Magneten faller **saktere** i aluminium enn i kobber. (Aluminium har lavere resistivitet enn kobber, noe som er uvanlig, men i dette tilfellet er det total motstand for virvelstrømsløyfene som teller.)

Egentlig: Kobber har *lavere* resistivitet enn aluminium, men resonnementet gjelder – lavere motstand gir sterkere virvelstrømmer og saktere fall.`,
    },
    {
      id: 'fys2-5-3-ex7',
      number: '5.3.7',
      type: 'classic',
      difficulty: 'medium',
      topic: 'Sløyfe i felt',
      task: `En rektangulær sløyfe med bredde $w = 5{,}0$ cm, lengde $l = 10$ cm og motstand $R = 0{,}20$ $\\Omega$ trekkes med konstant hastighet $v = 1{,}5$ m/s ut av et uniformt magnetfelt $B = 0{,}80$ T.

a) Beregn den induserte EMF-en mens sløyfen forlater feltet.
b) Beregn strømmen og angi retningen.
c) Beregn den bremsende kraften på sløyfen.
d) Beregn effekten som må tilføres for å holde konstant hastighet.`,
      hints: [
        'EMF: $\\varepsilon = Bwv$ (bare den ene kanten er i feltet).',
        'Kraftbalanse: $F_{\\text{påført}} = F_{\\text{brems}} = BIw$.',
        'Effekt: $P = Fv$ eller $P = I^2R$.',
      ],
      solution: `**a) EMF:**
$$\\varepsilon = Bwv = 0{,}80 \\cdot 0{,}050 \\cdot 1{,}5 = 0{,}060 \\text{ V} = 60 \\text{ mV}$$

**b) Strøm:**
$$I = \\frac{\\varepsilon}{R} = \\frac{0{,}060}{0{,}20} = 0{,}30 \\text{ A}$$
Retning: Fluksen minker (inn i planet) → strømmen går **med klokka** for å opprettholde fluksen.

**c) Bremsekraft:**
$$F = BIw = 0{,}80 \\cdot 0{,}30 \\cdot 0{,}050 = 0{,}012 \\text{ N} = 12 \\text{ mN}$$

**d) Effekt:**
$$P = Fv = 0{,}012 \\cdot 1{,}5 = 0{,}018 \\text{ W} = 18 \\text{ mW}$$
Sjekk: $P = I^2R = (0{,}30)^2 \\cdot 0{,}20 = 0{,}018$ W. Stemmer!`,
    },
    {
      id: 'fys2-5-3-ex8',
      number: '5.3.8',
      type: 'classic',
      difficulty: 'vanskelig',
      topic: 'Lenz\' lov kvalitativ',
      task: `To konsentriske, sirkulære ledersløyfer ligger i samme plan. Den ytre sløyfen har en bryter og er koblet til et batteri. Beskriv hva som skjer med strømmen i den indre sløyfen i følgende tre tilfeller:

a) Bryteren sluttes (strøm starter i ytre sløyfe).
b) Strømmen i ytre sløyfe er stabil.
c) Bryteren brytes (strøm stoppes i ytre sløyfe).`,
      hints: [
        'Når strøm starter i ytre sløyfe, skaper den et magnetfelt gjennom den indre.',
        'Hva skjer med feltet når strømmen er konstant?',
        'Hva skjer med feltet når strømmen brytes?',
      ],
      solution: `**a) Bryteren sluttes:**
Strøm begynner å flyte i ytre sløyfe → magnetfelt gjennom indre sløyfe øker fra null.
Fluksen øker → Lenz' lov: Indusert strøm i indre sløyfe skaper et felt som **motvirker** økningen.
Resultatet: **Kortvarig strøm** i indre sløyfe, i **motsatt** retning av strømmen i ytre sløyfe.

**b) Stabil strøm:**
Konstant strøm → konstant magnetfelt → konstant fluks → $\\frac{d\\Phi}{dt} = 0$.
**Ingen indusert strøm** i indre sløyfe.

**c) Bryteren brytes:**
Strømmen i ytre sløyfe stopper → magnetfeltet forsvinner → fluksen minker.
Lenz' lov: Indusert strøm i indre sløyfe prøver å **opprettholde** fluksen.
Resultatet: **Kortvarig strøm** i indre sløyfe, i **samme** retning som den opprinnelige strømmen i ytre sløyfe.

**Merk:** Dette er nøyaktig slik en transformator fungerer – men med vekselstrøm som stadig endrer seg!`,
    },
    {
      id: 'fys2-5-3-ex9',
      number: '5.3.9',
      type: 'classic',
      difficulty: 'vanskelig',
      topic: 'Energiberegning',
      task: `En ledende stav med lengde $L = 0{,}30$ m og motstand $r = 0{,}10$ $\\Omega$ glir friksjonsløst langs to parallelle skinner som er forbundet med en ytre motstand $R = 0{,}50$ $\\Omega$. Systemet befinner seg i et uniformt magnetfelt $B = 0{,}60$ T vinkelrett på planet.

Staven skyves med en kraft slik at den har konstant hastighet $v = 4{,}0$ m/s.

a) Beregn den induserte EMF-en.
b) Beregn strømmen i kretsen (inkluder stavens motstand).
c) Beregn den påførte kraften.
d) Beregn effekten som dissiperes i den ytre motstanden.
e) Beregn effekten som dissiperes i staven.
f) Verifiser at summen av dissiperte effekter er lik den tilførte mekaniske effekten.`,
      hints: [
        'Total motstand i kretsen: $R_{\\text{tot}} = R + r$.',
        'Kraften må overvinne den magnetiske bremsekraften.',
        'Effekten i en motstand: $P = I^2 R$.',
      ],
      solution: `**a) EMF:**
$$\\varepsilon = BLv = 0{,}60 \\cdot 0{,}30 \\cdot 4{,}0 = 0{,}72 \\text{ V}$$

**b) Strøm:**
$$I = \\frac{\\varepsilon}{R + r} = \\frac{0{,}72}{0{,}50 + 0{,}10} = \\frac{0{,}72}{0{,}60} = 1{,}2 \\text{ A}$$

**c) Påført kraft:**
$$F = BIL = 0{,}60 \\cdot 1{,}2 \\cdot 0{,}30 = 0{,}216 \\text{ N} \\approx 0{,}22 \\text{ N}$$

**d) Effekt i ytre motstand:**
$$P_R = I^2 R = (1{,}2)^2 \\cdot 0{,}50 = 0{,}72 \\text{ W}$$

**e) Effekt i staven:**
$$P_r = I^2 r = (1{,}2)^2 \\cdot 0{,}10 = 0{,}144 \\text{ W}$$

**f) Verifisering:**
$$P_{\\text{mek}} = Fv = 0{,}216 \\cdot 4{,}0 = 0{,}864 \\text{ W}$$
$$P_R + P_r = 0{,}72 + 0{,}144 = 0{,}864 \\text{ W}$$

**Energien er bevart!** $P_{\\text{mek}} = P_R + P_r$.`,
    },
    {
      id: 'fys2-5-3-ex10',
      number: '5.3.10',
      type: 'classic',
      difficulty: 'vanskelig',
      topic: 'Avansert Lenz\' lov',
      task: `En superleder-ring (motstand $R = 0$) ligger i et eksternt magnetfelt som endres. Forklar hva som skjer med den magnetiske fluksen gjennom ringen, og hvorfor superledere er «perfekte diamagneter».

(Hint: Bruk sammenhengen $\\varepsilon = IR$ sammen med Faradays lov.)`,
      hints: [
        'I en superleder er $R = 0$. Hva betyr det for sammenhengen mellom EMF og strøm?',
        'Hvis $R = 0$, hva må EMF-en være for at strømmen skal være endelig?',
        'Hva sier det om $\\frac{d\\Phi}{dt}$?',
      ],
      solution: `I en superleder er $R = 0$.

Fra Ohms lov: $\\varepsilon = IR$. For endelig strøm $I$ og $R = 0$ må $\\varepsilon = 0$.

Fra Faradays lov:
$$\\varepsilon = -\\frac{d\\Phi}{dt} = 0$$

Dette betyr at $\\frac{d\\Phi}{dt} = 0$, altså **fluksen gjennom ringen er konstant**!

**Konsekvenser:**
- Hvis et eksternt felt forsøker å endre fluksen, induseres en strøm som **eksakt** kompenserer endringen.
- Den totale fluksen gjennom ringen endres aldri.
- Hvis ringen starter uten fluks ($\\Phi = 0$), vil den aldri tillate fluks gjennom seg → den er en **perfekt diamagnet**.

Dette er Meissner-effekten: Superledere utelukker magnetfelt fullstendig. Lenz' lov i perfeksjon!

**Viktig:** I vanlige ledere ($R > 0$) dempes den induserte strømmen, og fluksen kan gradvis endres. Bare i superledere er kompensasjonen perfekt.`,
    },
  ],
};


// ============================================================================
// Kapittel 5.4: Generatorer og motorer
// ============================================================================

export const CHAPTER_FYSIKK2_5_4: TextbookChapter = {
  id: 'fysikk2-5-4',
  courseId: 'fysikk2',
  chapterNumber: '5.4',
  title: 'Generatorer og motorer',
  description: 'Lær om AC-generatorer, rotasjon av spoler i magnetfelt, sinusformet EMF, frekvens og amplitude, RMS-verdier, DC-motorer og tilbake-EMF.',
  estimatedMinutes: 65,
  prerequisites: ['fysikk2-5-3', 'fysikk2-4-4'],
  competenceGoals: [
    'forklare prinsippet bak en vekselstrømgenerator',
    'utlede uttrykket for sinusformet EMF fra en roterende spole',
    'beregne toppverdi, effektivverdi og frekvens for generert spenning',
    'forklare forskjellen mellom AC- og DC-generatorer',
    'beskrive hvordan en elektrisk motor fungerer',
    'forklare begrepet tilbake-EMF (back-EMF) i motorer',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'fys2-5-4-intro',
      type: 'text',
      content: `# Generatorer og motorer

Faradays oppdagelse av elektromagnetisk induksjon la grunnlaget for to av de viktigste maskinene i moderne sivilisasjon: **generatorer** og **motorer**.

- En **generator** konverterer mekanisk energi til elektrisk energi.
- En **motor** konverterer elektrisk energi til mekanisk energi.

Disse to maskinene er i prinsippet den **samme** maskinen, bare brukt i motsatt retning. Begge utnytter samspillet mellom magnetfelt og strømbærende ledere.

**I dette kapitlet lærer du:**
- Hvordan en AC-generator produserer sinusformet spenning
- Matematisk beskrivelse av generert EMF
- RMS-verdier (effektivverdier) og hvorfor vi bruker dem
- Hvordan DC-motorer fungerer
- Tilbake-EMF og dens betydning for motorer`,
    },

    // ========== AC-GENERATOR PRINSIPP ==========
    {
      id: 'fys2-5-4-ac-generator',
      type: 'text',
      content: `## AC-generatorens oppbygging og prinsipp

En enkel AC-generator (vekselstrømgenerator) består av:
- **Rotor:** En spole som roterer rundt en akse vinkelrett på magnetfeltet
- **Stator:** Permanentmagneter eller elektromagneter som skaper et konstant magnetfelt
- **Sleperinger:** To metallringer festet til spolens ender som roterer med spolen
- **Karbonbørster:** Stasjonære kontakter som overfører strøm fra sleperingene til den ytre kretsen

### Virkemåte

Når spolen roterer i magnetfeltet:
1. Den magnetiske fluksen gjennom spolen endres kontinuerlig.
2. Ifølge Faradays lov induseres en EMF.
3. EMF-en varierer sinusformet med tiden.
4. Resultatet er **vekselstrøm** (AC) i den ytre kretsen.

### Hvorfor sinusformet?

Fluksen gjennom den roterende spolen er:
$$\\Phi(t) = NBA\\cos(\\omega t)$$

Der $\\omega t$ er vinkelen spolen har rotert. Når vi deriverer dette (Faradays lov), får vi en sinusfunksjon:
$$\\varepsilon(t) = NBA\\omega\\sin(\\omega t)$$

Sinusformen er en direkte konsekvens av at spolen roterer med konstant vinkelhastighet i et uniformt felt.`,
    },

    // ========== UTLEDNING AV EMF ==========
    {
      id: 'fys2-5-4-utledning',
      type: 'text',
      content: `## Utledning av generatorformelen

La oss utlede formelen for den induserte spenningen steg for steg.

### Steg 1: Magnetisk fluks

For en spole med $N$ vindinger, areal $A$, som roterer i et uniformt felt $B$ med vinkelfrekvens $\\omega$:

Vinkelen mellom spolens normalvektor $\\hat{n}$ og feltet $\\vec{B}$ ved tid $t$ er:
$$\\theta(t) = \\omega t$$

(Vi antar at spolen starter med $\\hat{n}$ parallell med $\\vec{B}$ ved $t = 0$.)

Magnetisk fluks gjennom spolen:
$$\\Phi(t) = NBA\\cos(\\omega t)$$

### Steg 2: Faradays lov

$$\\varepsilon = -\\frac{d\\Phi}{dt} = -\\frac{d}{dt}\\left[NBA\\cos(\\omega t)\\right]$$

### Steg 3: Derivasjon

$$\\varepsilon = -NBA \\cdot (-\\omega)\\sin(\\omega t) = NBA\\omega\\sin(\\omega t)$$

### Steg 4: Definere toppverdien

Vi definerer **toppverdien** (amplituden) av EMF-en:
$$\\varepsilon_0 = NBA\\omega$$

Dermed:
$$\\boxed{\\varepsilon(t) = \\varepsilon_0 \\sin(\\omega t)}$$

### Fysisk tolkning av ulike posisjoner

| Vinkel $\\theta$ | Fluks $\\Phi$ | $\\frac{d\\Phi}{dt}$ | EMF $\\varepsilon$ |
|:---:|:---:|:---:|:---:|
| $0°$ | Maksimal | $0$ | $0$ |
| $90°$ | $0$ | Maksimal (negativ) | $\\varepsilon_0$ (maks) |
| $180°$ | Maksimal (negativ) | $0$ | $0$ |
| $270°$ | $0$ | Maksimal (positiv) | $-\\varepsilon_0$ (min) |`,
    },

    // ========== FORMEL: GENERERT EMF ==========
    {
      id: 'fys2-5-4-formel-emf',
      type: 'formula',
      title: 'Generert EMF fra AC-generator',
      latex: `\\varepsilon(t) = \\varepsilon_0 \\sin(\\omega t) = NBA\\omega \\sin(\\omega t)`,
      description: `Der $N$ er antall vindinger, $B$ er magnetfeltstyrken [T], $A$ er spolens areal [m$^2$], $\\omega = 2\\pi f$ er vinkelfrekvensen [rad/s], og $f$ er rotasjonsfrekvensen [Hz]. Toppverdien er $\\varepsilon_0 = NBA\\omega$.`,
    },

    // ========== FREKVENS OG PERIODE ==========
    {
      id: 'fys2-5-4-frekvens',
      type: 'text',
      content: `## Frekvens, periode og vinkelfrekvens

Den genererte spenningen er periodisk med:

### Sammenhenger

$$\\omega = 2\\pi f = \\frac{2\\pi}{T}$$

Der:
- $\\omega$ = vinkelfrekvens [rad/s]
- $f$ = frekvens [Hz] = antall omdreininger per sekund
- $T$ = periode [s] = tid for én full omdreining

### Norsk strømnett

I Norge og resten av Europa:
- **Frekvens:** $f = 50$ Hz
- **Periode:** $T = \\frac{1}{50} = 0{,}020$ s = 20 ms
- **Vinkelfrekvens:** $\\omega = 2\\pi \\cdot 50 = 314$ rad/s

I USA og deler av Asia:
- **Frekvens:** $f = 60$ Hz

### Hva bestemmer frekvensen?

Frekvensen bestemmes av **rotasjonshastigheten** til generatoren:
- I et vannkraftverk: Turbinens turtall
- I et varmekraftverk: Dampens turtall
- I en vindturbin: Vindens hastighet (via girkasse)

For å opprettholde stabil nettfrekvens (50 Hz) må alle generatorer i strømnettet rotere synkront.`,
    },

    // ========== EKSEMPEL 1: ENKEL GENERATOR ==========
    {
      id: 'fys2-5-4-eks1',
      type: 'example',
      title: 'Beregning av generert spenning',
      problem: `En AC-generator har en spole med $N = 500$ vindinger og areal $A = 0{,}040$ m$^2$. Spolen roterer med frekvens $f = 50$ Hz i et magnetfelt $B = 0{,}30$ T.

a) Beregn vinkelfrekvensen.
b) Beregn toppverdien av den genererte spenningen.
c) Skriv uttrykket for den genererte spenningen som funksjon av tid.
d) Beregn spenningen ved $t = 2{,}5$ ms.`,
      solution: `**a) Vinkelfrekvens:**
$$\\omega = 2\\pi f = 2\\pi \\cdot 50 = 314 \\text{ rad/s}$$

**Svar a):** $\\omega = 314$ rad/s.

---

**b) Toppverdi:**
$$\\varepsilon_0 = NBA\\omega = 500 \\cdot 0{,}30 \\cdot 0{,}040 \\cdot 314$$
$$\\varepsilon_0 = 500 \\cdot 0{,}30 \\cdot 0{,}040 \\cdot 314 = 1884 \\text{ V} \\approx 1{,}9 \\text{ kV}$$

**Svar b):** $\\varepsilon_0 \\approx 1{,}9$ kV.

---

**c) Uttrykk for spenning:**
$$\\varepsilon(t) = 1884 \\sin(314t) \\text{ V}$$

Der $t$ er i sekunder.

**Svar c):** $\\varepsilon(t) = 1{,}9 \\cdot 10^3 \\sin(314t)$ V.

---

**d) Spenning ved $t = 2{,}5$ ms:**
$$\\varepsilon(0{,}0025) = 1884 \\sin(314 \\cdot 0{,}0025)$$
$$= 1884 \\sin(0{,}785) = 1884 \\cdot 0{,}707 = 1332 \\text{ V}$$

**Svar d):** $\\varepsilon \\approx 1{,}3$ kV.

**Merk:** $\\omega t = 314 \\cdot 0{,}0025 = 0{,}785 \\text{ rad} = 45°$, og $\\sin(45°) = \\frac{\\sqrt{2}}{2} \\approx 0{,}707$.`,
    },

    // ========== RMS-VERDIER ==========
    {
      id: 'fys2-5-4-rms',
      type: 'text',
      content: `## Effektivverdi (RMS)

Siden AC-spenning og -strøm varierer mellom positive og negative verdier, trenger vi en meningsfull «gjennomsnittlig» verdi. Det vanlige gjennomsnittet av $\\sin(\\omega t)$ over en hel periode er null – det hjelper ikke!

### Problemet

Effekt i en motstand: $P = I^2R$. Selv om strømmen veksler fortegn, er $I^2$ alltid positiv. Gjennomsnittlig effekt er derfor **ikke null**.

### RMS – Root Mean Square

**Effektivverdien** (RMS-verdien) er definert slik at den gir korrekt gjennomsnittlig effekt:

$$P_{\\text{gj.snitt}} = I_{\\text{rms}}^2 \\cdot R$$

For en sinusformet strøm $I(t) = I_0 \\sin(\\omega t)$:

$$I_{\\text{rms}} = \\sqrt{\\langle I^2 \\rangle} = \\sqrt{\\frac{1}{T}\\int_0^T I_0^2 \\sin^2(\\omega t) \\, dt}$$

Siden gjennomsnittet av $\\sin^2$ over en hel periode er $\\frac{1}{2}$:

$$I_{\\text{rms}} = \\sqrt{\\frac{I_0^2}{2}} = \\frac{I_0}{\\sqrt{2}}$$

### Tilsvarende for spenning

$$V_{\\text{rms}} = \\frac{V_0}{\\sqrt{2}} \\approx 0{,}707 \\cdot V_0$$`,
    },

    // ========== FORMEL: RMS ==========
    {
      id: 'fys2-5-4-formel-rms',
      type: 'formula',
      title: 'Effektivverdier (RMS)',
      latex: `V_{\\text{rms}} = \\frac{V_0}{\\sqrt{2}}, \\quad I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}}, \\quad P_{\\text{gj.snitt}} = V_{\\text{rms}} \\cdot I_{\\text{rms}}`,
      description: `Der $V_0$ og $I_0$ er toppverdiene (amplitudene). Effektivverdien er alltid $\\frac{1}{\\sqrt{2}} \\approx 0{,}707$ ganger toppverdien for sinusformede størrelser. Gjennomsnittlig effekt beregnes med effektivverdier akkurat som med DC.`,
    },

    // ========== NOTE: NORSK NETTSPENNING ==========
    {
      id: 'fys2-5-4-note-nett',
      type: 'note',
      title: 'Norsk nettspenning',
      content: `Når vi sier at nettspenningen i Norge er **230 V**, mener vi effektivverdien:

$$V_{\\text{rms}} = 230 \\text{ V}$$

Toppverdien er:
$$V_0 = V_{\\text{rms}} \\cdot \\sqrt{2} = 230 \\cdot 1{,}414 = 325 \\text{ V}$$

Spenningen i stikkontakten varierer altså mellom $+325$ V og $-325$ V, 50 ganger per sekund!

Det fullstendige uttrykket for norsk nettspenning:
$$V(t) = 325 \\sin(314t) \\text{ V}$$`,
    },

    // ========== EKSEMPEL 2: RMS-BEREGNING ==========
    {
      id: 'fys2-5-4-eks2',
      type: 'example',
      title: 'RMS-verdier og effekt',
      problem: `En AC-generator leverer en spenning med toppverdi $V_0 = 170$ V og frekvens 60 Hz til en motstand $R = 100$ $\\Omega$.

a) Beregn effektivverdien av spenningen.
b) Beregn effektivverdien av strømmen.
c) Beregn gjennomsnittlig effekt i motstanden.
d) Skriv uttrykket for øyeblikkelig effekt $P(t)$ og finn maksimal effekt.`,
      solution: `**a) Effektivverdi av spenning:**
$$V_{\\text{rms}} = \\frac{V_0}{\\sqrt{2}} = \\frac{170}{\\sqrt{2}} = \\frac{170}{1{,}414} = 120 \\text{ V}$$

**Svar a):** $V_{\\text{rms}} = 120$ V.

---

**b) Effektivverdi av strøm:**
$$I_{\\text{rms}} = \\frac{V_{\\text{rms}}}{R} = \\frac{120}{100} = 1{,}2 \\text{ A}$$

Eller: $I_0 = \\frac{V_0}{R} = \\frac{170}{100} = 1{,}7$ A, så $I_{\\text{rms}} = \\frac{1{,}7}{\\sqrt{2}} = 1{,}2$ A.

**Svar b):** $I_{\\text{rms}} = 1{,}2$ A.

---

**c) Gjennomsnittlig effekt:**
$$P_{\\text{gj}} = V_{\\text{rms}} \\cdot I_{\\text{rms}} = 120 \\cdot 1{,}2 = 144 \\text{ W}$$

Eller: $P_{\\text{gj}} = I_{\\text{rms}}^2 R = (1{,}2)^2 \\cdot 100 = 144$ W.

Eller: $P_{\\text{gj}} = \\frac{V_{\\text{rms}}^2}{R} = \\frac{(120)^2}{100} = 144$ W.

**Svar c):** $P_{\\text{gj}} = 144$ W.

---

**d) Øyeblikkelig effekt:**
$$P(t) = V(t) \\cdot I(t) = V_0 I_0 \\sin^2(\\omega t) = \\frac{V_0^2}{R}\\sin^2(\\omega t)$$
$$P(t) = \\frac{(170)^2}{100}\\sin^2(120\\pi t) = 289\\sin^2(120\\pi t) \\text{ W}$$

Maksimal effekt: $P_{\\text{maks}} = \\frac{V_0^2}{R} = \\frac{(170)^2}{100} = 289$ W.

**Svar d):** $P_{\\text{maks}} = 289$ W = $2 \\cdot P_{\\text{gj}}$.`,
    },

    // ========== DC-GENERATOR ==========
    {
      id: 'fys2-5-4-dc-generator',
      type: 'text',
      content: `## DC-generator og kommutator

En **DC-generator** (likestrømsgenerator) leverer strøm som alltid går i samme retning. Den bruker en **kommutator** i stedet for sleperinger.

### Kommutatorens funksjon

En kommutator er en splittet ring:
- Ringen er delt i to halvdeler, isolert fra hverandre
- Hver halvdel er koblet til en ende av spolen
- Børstene berører alltid den halvdelen som gir positiv spenning

### Virkemåte

1. Spolen roterer i magnetfeltet → sinusformet EMF
2. Hver gang spenningen skifter polaritet (ved $\\theta = 0°, 180°, ...$), bytter kommutatoren kontakten
3. Resultatet: **Pulserende DC** – spenningen varierer, men holder seg positiv

### Pulserende DC vs. ren DC

Utgangen fra en enkel DC-generator er $|\\varepsilon_0 \\sin(\\omega t)|$ – den ser ut som «bølger» som bare er positive.

For å få jevnere DC:
- Bruk **flere spoler** (plassert med ulike vinkler)
- Bruk **glattingskretser** (kondensatorer)
- Moderne DC-forsyninger bruker ofte AC-generatorer med **likerettere**`,
    },

    // ========== ELEKTRISK MOTOR ==========
    {
      id: 'fys2-5-4-motor',
      type: 'text',
      content: `## Den elektriske motoren

En motor er i prinsippet en «generator i revers» – den konverterer elektrisk energi til mekanisk energi.

### DC-motor

En enkel DC-motor har samme oppbygging som en DC-generator:
- En strømbærende spole i et magnetfelt
- Magnetisk kraft på strømmen skaper et dreiemoment
- Kommutatoren sørger for at dreiemomentet alltid virker i samme retning

### Dreiemoment

For en rektangulær spole med $N$ vindinger, strøm $I$, areal $A$ i et felt $B$:

$$\\tau = NIAB\\sin\\theta$$

Der $\\theta$ er vinkelen mellom spolens normalvektor og feltet. Maksimalt dreiemoment når $\\theta = 90°$:

$$\\tau_{\\text{maks}} = NIAB$$

### Sammenhengen mellom motor og generator

| Egenskap | Generator | Motor |
|:---|:---|:---|
| Input | Mekanisk energi | Elektrisk energi |
| Output | Elektrisk energi | Mekanisk energi |
| Prinsipp | Induksjon (Faradays lov) | Kraft på strøm i felt |
| Rotasjon | Drives av turbin o.l. | Drives av strøm |`,
    },

    // ========== TILBAKE-EMF ==========
    {
      id: 'fys2-5-4-tilbake-emf',
      type: 'text',
      content: `## Tilbake-EMF (Back-EMF) i motorer

Når en motor spinner, fungerer den **samtidig som en generator**! Den roterende spolen induserer en EMF som virker **mot** den pålagte spenningen. Denne kalles **tilbake-EMF** (back-EMF).

### Hvorfor oppstår tilbake-EMF?

1. Motoren drives av en ekstern spenning $V$.
2. Strøm flyter gjennom spolen → spolen roterer.
3. Den roterende spolen er i et magnetfelt → EMF induseres (Faradays lov).
4. Ifølge Lenz' lov motvirker denne EMF-en den ytre spenningen.

### Kretsligning for motor

$$V = \\varepsilon_{\\text{tilbake}} + IR$$

Der:
- $V$ = pålagt spenning (fra strømforsyning)
- $\\varepsilon_{\\text{tilbake}}$ = tilbake-EMF (proporsjonal med rotasjonshastigheten)
- $I$ = strøm gjennom motoren
- $R$ = spolens motstand

### Konsekvenser

**Ved oppstart ($\\omega = 0$):**
$$\\varepsilon_{\\text{tilbake}} = 0 \\implies I = \\frac{V}{R}$$
Strømmen er **veldig stor**! Motoren trekker mye strøm ved oppstart.

**Ved full hastighet:**
$$\\varepsilon_{\\text{tilbake}} \\approx V \\implies I \\approx \\frac{V - \\varepsilon_{\\text{tilbake}}}{R} \\approx \\text{liten}$$
Strømmen er **liten** når motoren spinner fritt.

**Under belastning:**
Motoren bremses → $\\omega$ synker → $\\varepsilon_{\\text{tilbake}}$ synker → $I$ øker → mer dreiemoment → motoren kompenserer.

Tilbake-EMF fungerer som en **automatisk regulering** av motorstrømmen!`,
    },

    // ========== FORMEL: TILBAKE-EMF ==========
    {
      id: 'fys2-5-4-formel-backemf',
      type: 'formula',
      title: 'Tilbake-EMF i motor',
      latex: `V = \\varepsilon_{\\text{tilbake}} + IR, \\quad \\varepsilon_{\\text{tilbake}} = NBA\\omega`,
      description: `Strømmen gjennom motoren er $I = \\frac{V - \\varepsilon_{\\text{tilbake}}}{R}$. Ved oppstart er $\\varepsilon_{\\text{tilbake}} = 0$ og strømmen er maksimal ($I = V/R$). Ved full hastighet er $\\varepsilon_{\\text{tilbake}} \\approx V$ og strømmen er minimal.`,
    },

    // ========== EKSEMPEL 3: TILBAKE-EMF ==========
    {
      id: 'fys2-5-4-eks3',
      type: 'example',
      title: 'Tilbake-EMF i en DC-motor',
      problem: `En DC-motor har spolens motstand $R = 2{,}0$ $\\Omega$ og drives med spenning $V = 24$ V.

a) Beregn strømmen ved oppstart (motoren står stille).
b) Ved full hastighet er tilbake-EMF-en 20 V. Beregn strømmen.
c) Beregn den mekaniske effekten motoren leverer ved full hastighet.
d) Beregn virkningsgraden til motoren ved full hastighet.`,
      solution: `**a) Ved oppstart ($\\varepsilon_{\\text{tilbake}} = 0$):**
$$I_{\\text{start}} = \\frac{V}{R} = \\frac{24}{2{,}0} = 12 \\text{ A}$$

**Svar a):** $I_{\\text{start}} = 12$ A. (Dette er mye! Derfor brukes ofte motstartsmotstander.)

---

**b) Ved full hastighet ($\\varepsilon_{\\text{tilbake}} = 20$ V):**
$$I = \\frac{V - \\varepsilon_{\\text{tilbake}}}{R} = \\frac{24 - 20}{2{,}0} = \\frac{4{,}0}{2{,}0} = 2{,}0 \\text{ A}$$

**Svar b):** $I = 2{,}0$ A.

---

**c) Mekanisk effekt:**

Total tilført effekt: $P_{\\text{tot}} = VI = 24 \\cdot 2{,}0 = 48$ W

Varmetap i motstanden: $P_{\\text{varme}} = I^2R = (2{,}0)^2 \\cdot 2{,}0 = 8{,}0$ W

Mekanisk effekt:
$$P_{\\text{mek}} = P_{\\text{tot}} - P_{\\text{varme}} = 48 - 8{,}0 = 40 \\text{ W}$$

Alternativt: $P_{\\text{mek}} = \\varepsilon_{\\text{tilbake}} \\cdot I = 20 \\cdot 2{,}0 = 40$ W

**Svar c):** $P_{\\text{mek}} = 40$ W.

---

**d) Virkningsgrad:**
$$\\eta = \\frac{P_{\\text{mek}}}{P_{\\text{tot}}} = \\frac{40}{48} = 0{,}833 = 83{,}3\\%$$

Eller: $\\eta = \\frac{\\varepsilon_{\\text{tilbake}}}{V} = \\frac{20}{24} = 83{,}3\\%$

**Svar d):** $\\eta \\approx 83\\%$.`,
    },

    // ========== EKSEMPEL 4: GENERATOR DESIGN ==========
    {
      id: 'fys2-5-4-eks4',
      type: 'example',
      title: 'Design av en generator',
      problem: `Du skal designe en AC-generator som skal levere en effektivspenning på 230 V med frekvens 50 Hz. Magnetfeltstyrken er $B = 0{,}50$ T og spolens areal er $A = 0{,}020$ m$^2$.

a) Beregn toppverdien av spenningen.
b) Beregn vinkelfrekvensen.
c) Hvor mange vindinger trenger spolen?`,
      solution: `**a) Toppverdi:**
$$V_0 = V_{\\text{rms}} \\cdot \\sqrt{2} = 230 \\cdot \\sqrt{2} = 325 \\text{ V}$$

**Svar a):** $V_0 = 325$ V.

---

**b) Vinkelfrekvens:**
$$\\omega = 2\\pi f = 2\\pi \\cdot 50 = 314 \\text{ rad/s}$$

**Svar b):** $\\omega = 314$ rad/s.

---

**c) Antall vindinger:**

Fra $\\varepsilon_0 = NBA\\omega$:
$$N = \\frac{\\varepsilon_0}{BA\\omega} = \\frac{325}{0{,}50 \\cdot 0{,}020 \\cdot 314}$$
$$N = \\frac{325}{3{,}14} = 103{,}5$$

Siden $N$ må være et heltall:

**Svar c):** $N = 104$ vindinger.

(Med 104 vindinger blir $\\varepsilon_0 = 104 \\cdot 0{,}50 \\cdot 0{,}020 \\cdot 314 = 326{,}6$ V, som gir $V_{\\text{rms}} = 231$ V – tett nok!)`,
    },

    // ========== REGENERATIV BREMSING ==========
    {
      id: 'fys2-5-4-regenerativ',
      type: 'text',
      content: `## Regenerativ bremsing

I elbiler og hybridbiler brukes **regenerativ bremsing** – en elegant utnyttelse av motor/generator-dualiteten.

### Prinsipp

Under normal kjøring: Motoren bruker elektrisk energi → mekanisk bevegelse.

Under bremsing: Motoren kjøres «baklengs» og fungerer som generator:
1. Hjulenes rotasjon driver motoren (nå en generator)
2. Generator produserer elektrisk energi
3. Energien lades tilbake i batteriet
4. Lenz' lov sørger for bremsekraft

### Energibesparelse

Tradisjonelle bremser konverterer kinetisk energi til **varme** (bortkastet).

Regenerativ bremsing konverterer kinetisk energi til **elektrisk energi** (lagres i batteri).

Typisk kan 60–70 % av den kinetiske energien gjenvinnes, noe som øker rekkevidden til en elbil med 15–25 %.

### Beregning av gjenvunnet energi

$$E_{\\text{kinetisk}} = \\frac{1}{2}mv^2$$

Med virkningsgrad $\\eta$ for regenerativ bremsing:
$$E_{\\text{gjenvunnet}} = \\eta \\cdot \\frac{1}{2}mv^2$$`,
    },

    // ========== EKSEMPEL 5: REGENERATIV BREMSING ==========
    {
      id: 'fys2-5-4-eks5',
      type: 'example',
      title: 'Regenerativ bremsing i elbil',
      problem: `En elbil med masse $m = 1800$ kg kjører i 80 km/h og bremser ned til 30 km/h med regenerativ bremsing. Virkningsgraden for energigjenvinningen er $\\eta = 0{,}65$.

a) Beregn den kinetiske energien som «frigjøres» ved bremsingen.
b) Beregn energien som lagres i batteriet.
c) Hvis batteriet har kapasitet 60 kWh, hvilken prosentandel av batterikapasiteten er dette?`,
      solution: `**a) Frigjort kinetisk energi:**

Konverter hastigheter: $80 \\text{ km/h} = 22{,}2$ m/s, $30 \\text{ km/h} = 8{,}33$ m/s.

$$\\Delta E_k = \\frac{1}{2}m(v_1^2 - v_2^2) = \\frac{1}{2} \\cdot 1800 \\cdot (22{,}2^2 - 8{,}33^2)$$
$$= 900 \\cdot (493 - 69{,}4) = 900 \\cdot 423{,}6 = 381\\,200 \\text{ J}$$
$$\\approx 381 \\text{ kJ}$$

**Svar a):** $\\Delta E_k \\approx 381$ kJ.

---

**b) Gjenvunnet energi:**
$$E_{\\text{gjenvunnet}} = \\eta \\cdot \\Delta E_k = 0{,}65 \\cdot 381 = 248 \\text{ kJ}$$

**Svar b):** $E_{\\text{gjenvunnet}} \\approx 248$ kJ $= 0{,}069$ kWh.

---

**c) Prosentandel:**
$$\\frac{E_{\\text{gjenvunnet}}}{E_{\\text{batteri}}} = \\frac{0{,}069}{60} = 0{,}00115 = 0{,}115\\%$$

**Svar c):** Ca. $0{,}12\\%$ av batterikapasiteten.

**Merknad:** Én enkelt bremsing gir lite energi. Men over mange bremsinger (bykjøring!) akkumuleres det betydelig – typisk 15–25 % lengre rekkevidde.`,
    },

    // ========== WARNING ==========
    {
      id: 'fys2-5-4-warning',
      type: 'warning',
      title: 'Vanlige feil med generatorer og motorer',
      content: `**Feil 1: Forveksle toppverdi og effektivverdi**
Når man oppgir «230 V» i Norge, er dette $V_{\\text{rms}}$, ikke $V_0$. Toppverdien er $325$ V!

**Feil 2: Glemme $\\sqrt{2}$-faktoren**
$V_{\\text{rms}} = \\frac{V_0}{\\sqrt{2}}$, IKKE $V_{\\text{rms}} = \\frac{V_0}{2}$. Halvering gir gjennomsnittlig absoluttverdi, ikke RMS.

**Feil 3: Forveksle frekvens og vinkelfrekvens**
$f = 50$ Hz, men $\\omega = 2\\pi f = 314$ rad/s. Bruk $\\omega$ i sinusfunksjonen!

**Feil 4: Blande motor og generator**
En motor trekker strøm og leverer mekanisk arbeid. En generator drives mekanisk og leverer strøm. Ikke forveksle retningene!`,
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'fys2-5-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

### AC-generator
$$\\varepsilon(t) = \\varepsilon_0 \\sin(\\omega t) = NBA\\omega\\sin(\\omega t)$$

### RMS-verdier
$$V_{\\text{rms}} = \\frac{V_0}{\\sqrt{2}}, \\quad I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}}, \\quad P_{\\text{gj}} = V_{\\text{rms}} \\cdot I_{\\text{rms}}$$

### Norsk nettspenning
- $V_{\\text{rms}} = 230$ V, $V_0 = 325$ V, $f = 50$ Hz

### DC-motor med tilbake-EMF
$$V = \\varepsilon_{\\text{tilbake}} + IR$$
$$P_{\\text{mek}} = \\varepsilon_{\\text{tilbake}} \\cdot I, \\quad \\eta = \\frac{\\varepsilon_{\\text{tilbake}}}{V}$$

### Regenerativ bremsing
- Motor brukes som generator ved bremsing
- Kinetisk energi → elektrisk energi → batteri
- Typisk 60–70 % virkningsgrad`,
    },
  ],

  // ============================================================================
  // OPPGAVER FOR KAPITTEL 5.4
  // ============================================================================
  exercises: [
    {
      id: 'fys2-5-4-ex1',
      number: '5.4.1',
      type: 'multiple-choice',
      difficulty: 'lett',
      topic: 'Generatorprinsipp',
      task: `Hva er hovedprinsippet bak en elektrisk generator?`,
      options: [
        { id: 'a', text: 'Elektrisk energi konverteres til varme', isCorrect: false, feedback: 'Det beskriver en varmeovn, ikke en generator.' },
        { id: 'b', text: 'Mekanisk energi konverteres til elektrisk energi via elektromagnetisk induksjon', isCorrect: true, feedback: 'Korrekt! En generator roterer en spole i et magnetfelt, og Faradays lov gir indusert spenning.' },
        { id: 'c', text: 'Kjemisk energi konverteres til elektrisk energi', isCorrect: false, feedback: 'Det beskriver et batteri, ikke en generator.' },
        { id: 'd', text: 'Elektrisk energi konverteres til mekanisk energi', isCorrect: false, feedback: 'Det beskriver en motor, ikke en generator.' },
      ],
      hints: ['Tenk på hva som driver en generator – en turbin, for eksempel.'],
      solution: `En generator konverterer mekanisk energi (f.eks. fra en turbin) til elektrisk energi ved at en spole roterer i et magnetfelt, og Faradays lov gir en indusert spenning.`,
    },
    {
      id: 'fys2-5-4-ex2',
      number: '5.4.2',
      type: 'multiple-choice',
      difficulty: 'lett',
      topic: 'RMS-verdi',
      task: `Norsk nettspenning oppgis som 230 V. Hva er toppverdien av spenningen?`,
      options: [
        { id: 'a', text: '115 V', isCorrect: false, feedback: 'Du delte på 2, men RMS-faktoren er $\\sqrt{2}$, ikke 2.' },
        { id: 'b', text: '230 V', isCorrect: false, feedback: '230 V er effektivverdien, ikke toppverdien.' },
        { id: 'c', text: '325 V', isCorrect: true, feedback: 'Korrekt! $V_0 = V_{\\text{rms}} \\cdot \\sqrt{2} = 230 \\cdot 1{,}414 = 325$ V.' },
        { id: 'd', text: '460 V', isCorrect: false, feedback: 'Du doblet verdien, men sammenhengen er $V_0 = V_{\\text{rms}} \\cdot \\sqrt{2}$.' },
      ],
      hints: ['$V_0 = V_{\\text{rms}} \\cdot \\sqrt{2}$'],
      solution: `$V_0 = V_{\\text{rms}} \\cdot \\sqrt{2} = 230 \\cdot 1{,}414 = 325$ V. Spenningen i stikkontakten veksler mellom +325 V og -325 V.`,
    },
    {
      id: 'fys2-5-4-ex3',
      number: '5.4.3',
      type: 'classic',
      difficulty: 'lett',
      topic: 'Frekvens og periode',
      task: `Nettspenningen i Norge har frekvens 50 Hz.

a) Beregn perioden.
b) Beregn vinkelfrekvensen.
c) Skriv det fullstendige uttrykket for $V(t)$ med tall.`,
      hints: [
        '$T = 1/f$.',
        '$\\omega = 2\\pi f$.',
        'Bruk $V_0 = 325$ V.',
      ],
      solution: `**a)** $T = \\frac{1}{f} = \\frac{1}{50} = 0{,}020$ s = 20 ms.

**b)** $\\omega = 2\\pi f = 2\\pi \\cdot 50 = 314$ rad/s.

**c)** $V(t) = 325 \\sin(314t)$ V.`,
    },
    {
      id: 'fys2-5-4-ex4',
      number: '5.4.4',
      type: 'classic',
      difficulty: 'medium',
      topic: 'Generatorberegning',
      task: `En AC-generator har en spole med 300 vindinger og areal $0{,}060$ m$^2$. Spolen roterer med 3000 omdreininger per minutt i et magnetfelt på 0,25 T.

a) Beregn rotasjonsfrekvensen i Hz.
b) Beregn vinkelfrekvensen.
c) Beregn toppverdien av den genererte spenningen.
d) Beregn effektivverdien av spenningen.`,
      hints: [
        'Omregning: $f = \\frac{\\text{rpm}}{60}$.',
        '$\\varepsilon_0 = NBA\\omega$.',
        '$V_{\\text{rms}} = V_0 / \\sqrt{2}$.',
      ],
      solution: `**a) Frekvens:**
$$f = \\frac{3000}{60} = 50 \\text{ Hz}$$

**b) Vinkelfrekvens:**
$$\\omega = 2\\pi \\cdot 50 = 314 \\text{ rad/s}$$

**c) Toppverdi:**
$$\\varepsilon_0 = NBA\\omega = 300 \\cdot 0{,}25 \\cdot 0{,}060 \\cdot 314 = 1413 \\text{ V} \\approx 1{,}4 \\text{ kV}$$

**d) Effektivverdi:**
$$V_{\\text{rms}} = \\frac{\\varepsilon_0}{\\sqrt{2}} = \\frac{1413}{1{,}414} = 999 \\text{ V} \\approx 1{,}0 \\text{ kV}$$`,
      subTasks: [
        { label: 'a', task: 'Rotasjonsfrekvens i Hz', answer: 50, multipleChoiceOptions: ['50 Hz', '500 Hz', '3000 Hz', '5 Hz'] },
        { label: 'b', task: 'Vinkelfrekvens', answer: 314, multipleChoiceOptions: ['314 rad/s', '100 rad/s', '3000 rad/s', '50 rad/s'] },
        { label: 'c', task: 'Toppverdi', answer: 1413, multipleChoiceOptions: ['1413 V', '141 V', '14130 V', '283 V'] },
        { label: 'd', task: 'Effektivverdi', answer: 999, multipleChoiceOptions: ['999 V', '707 V', '1413 V', '500 V'] },
      ],
    },
    {
      id: 'fys2-5-4-ex5',
      number: '5.4.5',
      type: 'classic',
      difficulty: 'medium',
      topic: 'Effekt og RMS',
      task: `En vekselstrømskilde leverer spenning $V(t) = 340\\sin(100\\pi t)$ V til en motstand $R = 200$ $\\Omega$.

a) Finn toppverdien, effektivverdien og frekvensen.
b) Beregn toppverdien og effektivverdien av strømmen.
c) Beregn gjennomsnittlig effekt og maksimal øyeblikkelig effekt.`,
      hints: [
        'Les av $V_0$ og $\\omega$ fra uttrykket.',
        '$f = \\omega / (2\\pi)$.',
        '$P_{\\text{maks}} = 2 \\cdot P_{\\text{gj}}$ for sinusformet.',
      ],
      solution: `**a)**
- $V_0 = 340$ V
- $V_{\\text{rms}} = 340/\\sqrt{2} = 240$ V
- $\\omega = 100\\pi = 314$ rad/s → $f = 50$ Hz

**b)**
- $I_0 = V_0/R = 340/200 = 1{,}70$ A
- $I_{\\text{rms}} = 1{,}70/\\sqrt{2} = 1{,}20$ A

**c)**
- $P_{\\text{gj}} = V_{\\text{rms}} \\cdot I_{\\text{rms}} = 240 \\cdot 1{,}20 = 289$ W
- $P_{\\text{maks}} = V_0 \\cdot I_0 = 340 \\cdot 1{,}70 = 578$ W $= 2 P_{\\text{gj}}$`,
    },
    {
      id: 'fys2-5-4-ex6',
      number: '5.4.6',
      type: 'classic',
      difficulty: 'medium',
      topic: 'Tilbake-EMF',
      task: `En DC-motor med spolens motstand $R = 5{,}0$ $\\Omega$ drives med $V = 120$ V.

a) Beregn strømmen ved oppstart.
b) Når motoren spinner med full hastighet, er strømmen 4,0 A. Beregn tilbake-EMF-en.
c) Beregn mekanisk effekt og virkningsgrad ved full hastighet.`,
      hints: [
        'Ved oppstart: $\\varepsilon_{\\text{tilbake}} = 0$.',
        '$V = \\varepsilon_{\\text{tilbake}} + IR$.',
        '$P_{\\text{mek}} = \\varepsilon_{\\text{tilbake}} \\cdot I$.',
      ],
      solution: `**a) Oppstartsstrøm:**
$$I_{\\text{start}} = \\frac{V}{R} = \\frac{120}{5{,}0} = 24 \\text{ A}$$

**b) Tilbake-EMF:**
$$\\varepsilon_{\\text{tilbake}} = V - IR = 120 - 4{,}0 \\cdot 5{,}0 = 120 - 20 = 100 \\text{ V}$$

**c) Effekt og virkningsgrad:**
$P_{\\text{tot}} = VI = 120 \\cdot 4{,}0 = 480$ W
$P_{\\text{varme}} = I^2R = 16 \\cdot 5{,}0 = 80$ W
$P_{\\text{mek}} = P_{\\text{tot}} - P_{\\text{varme}} = 400$ W

Eller: $P_{\\text{mek}} = \\varepsilon_{\\text{tilbake}} \\cdot I = 100 \\cdot 4{,}0 = 400$ W.

$\\eta = 400/480 = 83\\%$.`,
      subTasks: [
        { label: 'a', task: 'Oppstartsstrøm', answer: 24, multipleChoiceOptions: ['24 A', '2,4 A', '120 A', '12 A'] },
        { label: 'b', task: 'Tilbake-EMF', answer: 100, multipleChoiceOptions: ['100 V', '120 V', '20 V', '80 V'] },
        { label: 'c', task: 'Mekanisk effekt', answer: 400, multipleChoiceOptions: ['400 W', '480 W', '80 W', '100 W'] },
      ],
    },
    {
      id: 'fys2-5-4-ex7',
      number: '5.4.7',
      type: 'classic',
      difficulty: 'medium',
      topic: 'Generator med belastning',
      task: `En AC-generator med $\\varepsilon_0 = 170$ V, $f = 50$ Hz og intern motstand $r = 1{,}0$ $\\Omega$ kobles til en ytre motstand $R = 16$ $\\Omega$.

a) Beregn toppverdien og effektivverdien av strømmen.
b) Beregn effekten som leveres til den ytre motstanden.
c) Beregn effekten som tapes i den interne motstanden.
d) Beregn generatorens virkningsgrad.`,
      hints: [
        'Total motstand i kretsen: $R_{\\text{tot}} = R + r$.',
        'Effektivverdi av strøm: $I_{\\text{rms}} = I_0/\\sqrt{2}$.',
        '$\\eta = P_R / P_{\\text{tot}}$.',
      ],
      solution: `**a) Strøm:**
$I_0 = \\frac{\\varepsilon_0}{R + r} = \\frac{170}{16 + 1{,}0} = 10{,}0$ A
$I_{\\text{rms}} = 10{,}0/\\sqrt{2} = 7{,}07$ A

**b) Effekt til ytre motstand:**
$P_R = I_{\\text{rms}}^2 \\cdot R = (7{,}07)^2 \\cdot 16 = 800$ W

**c) Effekttap:**
$P_r = I_{\\text{rms}}^2 \\cdot r = (7{,}07)^2 \\cdot 1{,}0 = 50$ W

**d) Virkningsgrad:**
$P_{\\text{tot}} = P_R + P_r = 800 + 50 = 850$ W
$\\eta = \\frac{P_R}{P_{\\text{tot}}} = \\frac{800}{850} = 94\\%$`,
    },
    {
      id: 'fys2-5-4-ex8',
      number: '5.4.8',
      type: 'classic',
      difficulty: 'vanskelig',
      topic: 'Generator design',
      task: `Du skal designe en AC-generator som leverer 12 V effektivspenning med frekvens 50 Hz. Du har tilgjengelig et magnetfelt på 0,40 T og trådrammen har areal $0{,}010$ m$^2$.

a) Beregn nødvendig toppverdi.
b) Beregn nødvendig antall vindinger.
c) Hvis du dobler magnetfeltstyrken og halverer antall vindinger, hva skjer med spenningen?
d) Hvordan kan du øke den genererte spenningen uten å endre spolen eller magnetfeltet?`,
      hints: [
        '$V_0 = V_{\\text{rms}} \\cdot \\sqrt{2}$.',
        '$N = V_0 / (BA\\omega)$.',
        'Hva annet kan justeres enn $N$, $B$ og $A$?',
      ],
      solution: `**a)** $V_0 = 12 \\cdot \\sqrt{2} = 17{,}0$ V

**b)** $\\omega = 2\\pi \\cdot 50 = 314$ rad/s
$N = \\frac{17{,}0}{0{,}40 \\cdot 0{,}010 \\cdot 314} = \\frac{17{,}0}{1{,}256} = 13{,}5 \\to N = 14$ vindinger.

**c)** $\\varepsilon_0 = NBA\\omega$. Doble $B$ og halvere $N$: $\\varepsilon_0' = (N/2)(2B)A\\omega = NBA\\omega = \\varepsilon_0$.
Spenningen er **uendret**!

**d)** Øke rotasjonshastigheten $\\omega$ (altså $f$). $\\varepsilon_0 \\propto \\omega$, så dobling av frekvensen dobler spenningen. Alternativt: øke arealet $A$.`,
    },
    {
      id: 'fys2-5-4-ex9',
      number: '5.4.9',
      type: 'classic',
      difficulty: 'vanskelig',
      topic: 'Regenerativ bremsing',
      task: `En elbil med masse 2000 kg kjører i 90 km/h og bremser til stillstand utelukkende med regenerativ bremsing. Virkningsgraden for gjenvinning er 60 %. Motorens indre motstand er 0,50 $\\Omega$ og tilbake-EMF ved 90 km/h er 300 V.

a) Beregn bilens kinetiske energi ved 90 km/h.
b) Beregn energien som gjøres tilgjengelig for batteriet.
c) Beregn strømmen i motoren/generatoren ved 90 km/h (bruk tilbake-EMF).
d) Beregn den gjennomsnittlige bremsekraften.`,
      hints: [
        '$E_k = \\frac{1}{2}mv^2$.',
        'Konverter km/h til m/s: del på 3,6.',
        'Effekt: $P = \\varepsilon_{\\text{tilbake}} \\cdot I$.',
        'Gjennomsnittlig kraft: $F_{\\text{gj}} = E/s$ eller bruk arbeid-energi-teoremet.',
      ],
      solution: `**a) Kinetisk energi:**
$v = 90/3{,}6 = 25$ m/s
$E_k = \\frac{1}{2} \\cdot 2000 \\cdot 25^2 = 625\\,000$ J = 625 kJ

**b) Gjenvunnet energi:**
$E_{\\text{batteri}} = 0{,}60 \\cdot 625 = 375$ kJ

**c) Strøm ved 90 km/h:**
Generatoreffekt: $P_{\\text{gen}} = \\varepsilon_{\\text{tilbake}} \\cdot I$ og $P_{\\text{varme}} = I^2 \\cdot r$

Den mekaniske effekten som generatoren mottar:
$P_{\\text{mek}} = \\varepsilon_{\\text{tilbake}} \\cdot I + I^2 r$

Men vi vet at $\\varepsilon_{\\text{tilbake}} = 300$ V og $r = 0{,}50$ $\\Omega$.

For å finne strømmen: $P_{\\text{batteri}} = \\varepsilon_{\\text{tilbake}} \\cdot I = 300I$.

Total bremseffekt ved 90 km/h: $P_{\\text{brems}} = F_{\\text{brems}} \\cdot v$.

Vi kan bruke gjennomsnittsverdier: $E_{\\text{batteri}} = 375$ kJ over bremsetiden. Uten mer info om hastighetsprofilen, estimerer vi strømmen ved $v = 25$ m/s:

Tilbake-EMF $\\varepsilon \\propto v$, så ved 25 m/s er $\\varepsilon = 300$ V.
$P = \\varepsilon I = 300I$, og $P_{\\text{mek}} = 300I + 0{,}50 I^2$.

Med virkningsgrad 60 %: $\\eta = \\frac{300I}{300I + 0{,}50 I^2} = 0{,}60$.
Denne ligningen gir: $300I = 0{,}60(300I + 0{,}50I^2)$
$300I = 180I + 0{,}30I^2$
$120I = 0{,}30I^2$
$I = 400$ A (ved maks hastighet).

**d) Gjennomsnittlig bremsekraft:**
$F_{\\text{gj}} \\cdot \\bar{v} \\cdot t = E_k$ og med $\\bar{v} = v/2 = 12{,}5$ m/s:
$F_{\\text{gj}} = \\frac{E_k}{\\frac{1}{2}v \\cdot t}$

Alternativt: $F_{\\text{gj}} = \\frac{E_k}{s}$ der $s$ er bremsestrekningen.
Med jevnt avtagende hastighet: $s = \\frac{v}{2} \\cdot t$.

Enklere: Bruk arbeid-energi: $F_{\\text{gj}} \\cdot s = E_k$.
Med bremsetid $t$: $s = \\bar{v} \\cdot t = 12{,}5t$ og $E_k = 625$ kJ.
$F_{\\text{gj}} = \\frac{\\Delta p}{t} = \\frac{mv}{t} = \\frac{2000 \\cdot 25}{t} = \\frac{50\\,000}{t}$ N.

Uten kjent bremsetid kan vi angi: $F_{\\text{gj}} \\cdot s = 625\\,000$ J, der $s$ er bremsestrekningen.

For eksempel med $t = 10$ s: $F_{\\text{gj}} = 5000$ N, $s = 125$ m.`,
    },
    {
      id: 'fys2-5-4-ex10',
      number: '5.4.10',
      type: 'classic',
      difficulty: 'vanskelig',
      topic: 'Motor under belastning',
      task: `En DC-motor ($R = 3{,}0$ $\\Omega$) drives med 36 V. Ubelastet trekker den 0,50 A.

a) Beregn tilbake-EMF-en når motoren er ubelastet.
b) Motoren belastes slik at den trekker 6,0 A. Beregn ny tilbake-EMF.
c) Beregn mekanisk effekt levert til belastningen.
d) Forklar kvalitativt hvorfor motoren trekker mer strøm under belastning.`,
      hints: [
        '$\\varepsilon_{\\text{tilbake}} = V - IR$.',
        'Belastning bremser motoren → lavere $\\omega$ → lavere $\\varepsilon_{\\text{tilbake}}$.',
      ],
      solution: `**a) Ubelastet:**
$\\varepsilon_{\\text{tilbake}} = V - IR = 36 - 0{,}50 \\cdot 3{,}0 = 36 - 1{,}5 = 34{,}5$ V

**b) Belastet ($I = 6{,}0$ A):**
$\\varepsilon_{\\text{tilbake}} = 36 - 6{,}0 \\cdot 3{,}0 = 36 - 18 = 18$ V

**c) Mekanisk effekt:**
$P_{\\text{mek}} = \\varepsilon_{\\text{tilbake}} \\cdot I = 18 \\cdot 6{,}0 = 108$ W

Sjekk: $P_{\\text{tot}} = 36 \\cdot 6{,}0 = 216$ W, $P_{\\text{varme}} = 36 \\cdot 3{,}0 = 108$ W, $P_{\\text{mek}} = 216 - 108 = 108$ W.

**d) Forklaring:**
Under belastning bremses motoren → rotasjonshastigheten synker → tilbake-EMF-en synker → spenningsforskjellen $V - \\varepsilon_{\\text{tilbake}}$ over motstanden øker → strømmen øker. Den økte strømmen gir mer dreiemoment for å håndtere belastningen. Dette er en automatisk tilbakekoblingssløyfe.`,
    },
  ],
};


// ============================================================================
// Kapittel 5.5: Transformatorer
// ============================================================================

export const CHAPTER_FYSIKK2_5_5: TextbookChapter = {
  id: 'fysikk2-5-5',
  courseId: 'fysikk2',
  chapterNumber: '5.5',
  title: 'Transformatorer',
  description: 'Lær om transformatorprinsippet, primær- og sekundærspole, omsettingsforholdet, ideelle og reelle transformatorer, effekttap og strømtransformering.',
  estimatedMinutes: 60,
  prerequisites: ['fysikk2-5-2'],
  competenceGoals: [
    'forklare oppbygningen og virkemåten til en transformator',
    'utlede og anvende transformatorligningene for spenning og strøm',
    'beregne omsettingsforhold for oppover- og nedovertransformatorer',
    'forstå sammenhengen mellom effektbevaring og strøm/spenning-forholdet',
    'analysere reelle transformatorer med effekttap',
    'forklare transformatorens rolle i kraftoverføring',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'fys2-5-5-intro',
      type: 'text',
      content: `# Transformatorer

**Transformatoren** er en av de viktigste oppfinnelsene fra elektrisitetens tidsalder. Uten transformatorer ville det vært umulig å overføre elektrisk energi over store avstander effektivt. Hele det moderne strømnettet er avhengig av transformatorer.

En transformator gjør en tilsynelatende enkel ting: den endrer spenningsnivået på vekselstrøm. Men konsekvensene er enorme.

**I dette kapitlet lærer du:**
- Transformatorens oppbygging og virkemåte
- Spenningsforholdet $V_s/V_p = N_s/N_p$
- Strømforholdet $I_s/I_p = N_p/N_s$
- Effektbevaring i ideelle transformatorer
- Tap i reelle transformatorer
- Hvorfor høyspent overføring er nødvendig`,
    },

    // ========== OPPBYGGING ==========
    {
      id: 'fys2-5-5-oppbygging',
      type: 'text',
      content: `## Oppbygging av en transformator

En transformator består av to spoler som deler en felles magnetisk kjerne:

### Komponenter

- **Primærspole** ($N_p$ vindinger): Koblet til inngangskilden (vekselstrøm)
- **Sekundærspole** ($N_s$ vindinger): Koblet til belastningen (forbrukeren)
- **Jernkjerne**: Leder magnetisk fluks mellom spolene med minimal lekkasje

### Virkemåte (steg for steg)

1. **Vekselstrøm** i primærspolen skaper et **oscillerende magnetfelt**.
2. Jernkjernen leder magnetfeltet effektivt til sekundærspolen.
3. Den **tidsvarierende magnetiske fluksen** gjennom sekundærspolen induserer en EMF (Faradays lov).
4. Sekundærspolen leverer spenning til den ytre kretsen.

### Viktig

- Transformatoren fungerer **bare med vekselstrøm** (AC). Likestrøm (DC) gir konstant fluks → ingen induksjon.
- Det er **ingen elektrisk forbindelse** mellom primær- og sekundærsiden. Energien overføres via magnetfeltet.
- Jernkjernen er **laminert** (tynne, isolerte plater) for å redusere virvelstrømmer.`,
    },

    // ========== UTLEDNING AV SPENNINGSFORHOLD ==========
    {
      id: 'fys2-5-5-utledning',
      type: 'text',
      content: `## Utledning av transformatorligningen

### Ideell transformator

Vi antar:
- Ingen flukslekkasje (all fluks $\\Phi$ fra primærspolen passerer gjennom sekundærspolen)
- Ingen motstand i viklingene
- Ingen virvelstrøm- eller hysterestap i kjernen

### Steg 1: Fluks i primærspolen

Vekselstrøm i primærspolen skaper en tidsvarierende fluks $\\Phi(t)$ i kjernen.

### Steg 2: EMF i primærspolen

Faradays lov for primærspolen:
$$V_p = N_p \\frac{d\\Phi}{dt}$$

(Vi bruker $V_p$ for den påtrykte spenningen som er lik den induserte EMF-en i ideell transformator.)

### Steg 3: EMF i sekundærspolen

Samme fluks passerer gjennom sekundærspolen:
$$V_s = N_s \\frac{d\\Phi}{dt}$$

### Steg 4: Spenningsforholdet

Vi deler de to ligningene:
$$\\frac{V_s}{V_p} = \\frac{N_s \\frac{d\\Phi}{dt}}{N_p \\frac{d\\Phi}{dt}} = \\frac{N_s}{N_p}$$

Dette gir oss **transformatorligningen for spenning:**

$$\\boxed{\\frac{V_s}{V_p} = \\frac{N_s}{N_p}}$$`,
    },

    // ========== DEFINISJON: OMSETTINGSFORHOLD ==========
    {
      id: 'fys2-5-5-def-omsetting',
      type: 'definition',
      title: 'Omsettingsforholdet',
      content: `**Omsettingsforholdet** $n$ til en transformator er forholdet mellom antall vindinger i sekundær- og primærspolen:

$$n = \\frac{N_s}{N_p} = \\frac{V_s}{V_p}$$

- **Oppover-transformator** (step-up): $n > 1$ → $V_s > V_p$ (spenningen øker)
- **Nedover-transformator** (step-down): $n < 1$ → $V_s < V_p$ (spenningen synker)
- **1:1 transformator** (isolasjonstransformator): $n = 1$ → $V_s = V_p$

**Eksempler:**
- Kraftverkets oppover-transformator: $n = 100$ (fra 6 kV til 600 kV)
- Husstandens nedover-transformator: $n = 0{,}01$ (fra 22 kV til 230 V)
- Telefonlader: $n \\approx 0{,}02$ (fra 230 V til ca. 5 V)`,
    },

    // ========== FORMEL: TRANSFORMATORLIGNINGENE ==========
    {
      id: 'fys2-5-5-formel-trafo',
      type: 'formula',
      title: 'Transformatorligningene',
      latex: `\\frac{V_s}{V_p} = \\frac{N_s}{N_p}, \\quad \\frac{I_s}{I_p} = \\frac{N_p}{N_s}, \\quad V_p I_p = V_s I_s`,
      description: `For en ideell transformator er effekten inn lik effekten ut. Når spenningen øker (oppover-transformator), synker strømmen tilsvarende – og omvendt. $V_p, I_p$ er primærspenning og -strøm, $V_s, I_s$ er sekundærspenning og -strøm.`,
    },

    // ========== STRØMTRANSFORMERING ==========
    {
      id: 'fys2-5-5-strom',
      type: 'text',
      content: `## Strømtransformering og effektbevaring

### Effektbevaring i ideell transformator

I en ideell transformator er det **ingen energitap**. All effekt som går inn på primærsiden, kommer ut på sekundærsiden:

$$P_p = P_s$$
$$V_p I_p = V_s I_s$$

### Utledning av strømforholdet

Fra effektbevaring:
$$V_p I_p = V_s I_s$$

Kombinert med spenningsforholdet $V_s = \\frac{N_s}{N_p} V_p$:

$$V_p I_p = \\frac{N_s}{N_p} V_p \\cdot I_s$$

$$I_p = \\frac{N_s}{N_p} I_s$$

$$\\boxed{\\frac{I_s}{I_p} = \\frac{N_p}{N_s}}$$

### Viktig konsekvens

Strømforholdet er **omvendt** av spenningsforholdet:
- **Oppover-transformator** ($V_s > V_p$): Strømmen **synker** ($I_s < I_p$)
- **Nedover-transformator** ($V_s < V_p$): Strømmen **øker** ($I_s > I_p$)

Du kan ikke få noe gratis! Økt spenning gir redusert strøm (og omvendt), slik at effekten bevares.`,
    },

    // ========== EKSEMPEL 1: ENKEL TRANSFORMATOR ==========
    {
      id: 'fys2-5-5-eks1',
      type: 'example',
      title: 'Oppover-transformator',
      problem: `En transformator har 200 vindinger i primærspolen og 1000 vindinger i sekundærspolen. Primærsiden kobles til nettspenning (230 V, 50 Hz). Sekundærsiden belastes med en motstand som trekker 0,50 A.

a) Beregn omsettingsforholdet.
b) Beregn sekundærspenningen.
c) Beregn primærstrømmen (anta ideell transformator).
d) Beregn effekten som overføres.`,
      solution: `**a) Omsettingsforhold:**
$$n = \\frac{N_s}{N_p} = \\frac{1000}{200} = 5{,}0$$

Dette er en **oppover-transformator** ($n > 1$).

**Svar a):** $n = 5{,}0$.

---

**b) Sekundærspenning:**
$$V_s = n \\cdot V_p = 5{,}0 \\cdot 230 = 1150 \\text{ V} \\approx 1{,}2 \\text{ kV}$$

**Svar b):** $V_s = 1150$ V.

---

**c) Primærstrøm:**
$$I_p = \\frac{N_s}{N_p} \\cdot I_s = 5{,}0 \\cdot 0{,}50 = 2{,}5 \\text{ A}$$

Eller fra effektbevaring: $I_p = \\frac{V_s I_s}{V_p} = \\frac{1150 \\cdot 0{,}50}{230} = 2{,}5$ A.

**Svar c):** $I_p = 2{,}5$ A.

---

**d) Effekt:**
$$P = V_p I_p = 230 \\cdot 2{,}5 = 575 \\text{ W}$$

Sjekk: $P = V_s I_s = 1150 \\cdot 0{,}50 = 575$ W. Stemmer!

**Svar d):** $P = 575$ W.`,
    },

    // ========== EKSEMPEL 2: TELEFONLADER ==========
    {
      id: 'fys2-5-5-eks2',
      type: 'example',
      title: 'Telefonlader (nedover-transformator)',
      problem: `En telefonlader har en transformator som konverterer 230 V nettspenning til 5,0 V for lading av telefonen. Telefonen lades med en strøm på 2,0 A.

a) Beregn omsettingsforholdet.
b) Beregn strømmen i primærspolen (ideell transformator).
c) Hvis primærspolen har 460 vindinger, hvor mange vindinger har sekundærspolen?
d) Beregn ladeeffekten.`,
      solution: `**a) Omsettingsforhold:**
$$n = \\frac{V_s}{V_p} = \\frac{5{,}0}{230} = 0{,}0217$$

**Svar a):** $n \\approx 0{,}022$. (Nedover-transformator.)

---

**b) Primærstrøm:**
$$I_p = \\frac{V_s I_s}{V_p} = \\frac{5{,}0 \\cdot 2{,}0}{230} = 0{,}043 \\text{ A} = 43 \\text{ mA}$$

**Svar b):** $I_p = 43$ mA. (Mye lavere enn sekundærstrømmen, som forventet for en nedover-transformator.)

---

**c) Sekundærvindinger:**
$$N_s = n \\cdot N_p = 0{,}0217 \\cdot 460 = 10$$

**Svar c):** $N_s = 10$ vindinger.

---

**d) Ladeeffekt:**
$$P = V_s I_s = 5{,}0 \\cdot 2{,}0 = 10 \\text{ W}$$

**Svar d):** $P = 10$ W.`,
    },

    // ========== REELLE TRANSFORMATORER ==========
    {
      id: 'fys2-5-5-reell',
      type: 'text',
      content: `## Reelle transformatorer og tap

I virkeligheten er ingen transformator perfekt. Det finnes flere kilder til energitap:

### 1. Ohmske tap (kobbertap)

Spolene har motstand → $P_{\\text{Cu}} = I^2R$

Varme utvikles i ledningene, spesielt ved høye strømmer.

**Tiltak:** Bruk tykk ledning med lav motstand.

### 2. Virvelstrømstap (jerntap)

Endring i magnetfelt induserer virvelstrømmer i jernkjernen → oppvarming.

**Tiltak:** Laminert kjerne (tynne, isolerte jernplater begrenser virvelstrømsløyfene).

### 3. Hysteresetap

Jernets magnetisering «henger etter» det eksterne feltet. Energi tapes til ommagnetisering for hver AC-syklus.

**Tiltak:** Bruk bløtt jern med smal hystereseløkke.

### 4. Flukslekkasje

Ikke all magnetisk fluks fra primærspolen treffer sekundærspolen.

**Tiltak:** Lukket kjerne (toroidform) som leder fluksen effektivt.

### Virkningsgrad

$$\\eta = \\frac{P_{\\text{ut}}}{P_{\\text{inn}}} = \\frac{V_s I_s}{V_p I_p}$$

Moderne krafttransformatorer oppnår virkningsgrader på **97–99,5 %**.`,
    },

    // ========== FORMEL: REELL TRANSFORMATOR ==========
    {
      id: 'fys2-5-5-formel-reell',
      type: 'formula',
      title: 'Reell transformator med virkningsgrad',
      latex: `\\eta = \\frac{P_s}{P_p} = \\frac{V_s I_s}{V_p I_p}`,
      description: `Virkningsgraden $\\eta$ er forholdet mellom utgangseffekt og inngangseffekt. For en ideell transformator er $\\eta = 1$ (100 %). For reelle transformatorer er $\\eta < 1$ på grunn av kobbertap, jerntap og flukslekkasje.`,
    },

    // ========== EKSEMPEL 3: REELL TRANSFORMATOR ==========
    {
      id: 'fys2-5-5-eks3',
      type: 'example',
      title: 'Reell transformator med tap',
      problem: `En transformator med 400 primærvindinger og 2000 sekundærvindinger kobles til en 230 V AC-kilde. Sekundærsiden belastes med 0,80 A. Transformatorens virkningsgrad er 90 %.

a) Beregn sekundærspenningen (ideelt).
b) Beregn den faktiske utgangseffekten.
c) Beregn inngangseffekten som kreves.
d) Beregn primærstrømmen.
e) Beregn effekttapet.`,
      solution: `**a) Ideell sekundærspenning:**
$$V_s = \\frac{N_s}{N_p} V_p = \\frac{2000}{400} \\cdot 230 = 5 \\cdot 230 = 1150 \\text{ V}$$

**Svar a):** $V_s = 1150$ V.

---

**b) Faktisk utgangseffekt:**
$$P_s = V_s I_s = 1150 \\cdot 0{,}80 = 920 \\text{ W}$$

**Svar b):** $P_s = 920$ W.

---

**c) Inngangseffekt:**
$$P_p = \\frac{P_s}{\\eta} = \\frac{920}{0{,}90} = 1022 \\text{ W}$$

**Svar c):** $P_p \\approx 1{,}0$ kW.

---

**d) Primærstrøm:**
$$I_p = \\frac{P_p}{V_p} = \\frac{1022}{230} = 4{,}4 \\text{ A}$$

Merk: For en ideell transformator ville $I_p = \\frac{N_s}{N_p} I_s = 5 \\cdot 0{,}80 = 4{,}0$ A. Den ekstra strømmen kompenserer for tapene.

**Svar d):** $I_p = 4{,}4$ A.

---

**e) Effekttap:**
$$P_{\\text{tap}} = P_p - P_s = 1022 - 920 = 102 \\text{ W}$$

**Svar e):** $P_{\\text{tap}} \\approx 100$ W (omdannes til varme).`,
    },

    // ========== KRAFTOVERFØRING ==========
    {
      id: 'fys2-5-5-kraftoverforing',
      type: 'text',
      content: `## Transformatorer og kraftoverføring

Den viktigste anvendelsen av transformatorer er i **kraftoverføring** – transport av elektrisk energi fra kraftverk til forbrukere.

### Problemet: Energitap i ledninger

Overføringsledninger har motstand $R$. Strøm gjennom motstanden gir tap:

$$P_{\\text{tap}} = I^2 R$$

For å overføre en gitt effekt $P = V \\cdot I$:
- **Lav spenning, høy strøm:** Store tap ($I^2 R$)
- **Høy spenning, lav strøm:** Små tap!

### Løsningen: Høyspenningsoverføring

Ved å bruke transformatorer kan vi:
1. **Øke spenningen** (og senke strømmen) ved kraftverket
2. Overføre med **lav strøm** → lite tap
3. **Senke spenningen** (og øke strømmen) ved forbrukeren

### Norsk strømnett (typisk)

| Trinn | Spenning | Forklaring |
|:---|:---|:---|
| Kraftverk | 6–20 kV | Generert spenning |
| Sentralnett | 132–420 kV | Langdistanse overføring |
| Regionalnett | 33–132 kV | Distribusjon til byer |
| Distribusjonsnett | 11–22 kV | Lokalt nett |
| Forbruker | 230/400 V | I stikkontakten |

Hvert trinn bruker en transformator!`,
    },

    // ========== EKSEMPEL 4: KRAFTOVERFØRING ==========
    {
      id: 'fys2-5-5-eks4',
      type: 'example',
      title: 'Effekttap i overføringsledning',
      problem: `Et kraftverk produserer 10 MW (10 000 kW) effekt. Kraften skal overføres via en ledning med total motstand $R = 10$ $\\Omega$.

Sammenlign effekttapet i to tilfeller:
a) Overføring ved 10 kV.
b) Overføring ved 400 kV.
c) Beregn prosentandel tapt effekt i hvert tilfelle.`,
      solution: `**a) Overføring ved 10 kV:**

Strøm: $I = \\frac{P}{V} = \\frac{10 \\times 10^6}{10 \\times 10^3} = 1000$ A

Effekttap:
$$P_{\\text{tap}} = I^2 R = (1000)^2 \\cdot 10 = 10\\,000\\,000 \\text{ W} = 10 \\text{ MW}$$

**Svar a):** Tapet er **10 MW** – like mye som produsert! Alt går tapt til varme!

---

**b) Overføring ved 400 kV:**

Strøm: $I = \\frac{P}{V} = \\frac{10 \\times 10^6}{400 \\times 10^3} = 25$ A

Effekttap:
$$P_{\\text{tap}} = I^2 R = (25)^2 \\cdot 10 = 6250 \\text{ W} = 6{,}25 \\text{ kW}$$

**Svar b):** Tapet er **6,25 kW**.

---

**c) Prosentandel:**

Ved 10 kV: $\\frac{10\\,000}{10\\,000} \\times 100\\% = 100\\%$ (!)

Ved 400 kV: $\\frac{6{,}25}{10\\,000} \\times 100\\% = 0{,}0625\\%$

**Svar c):**
- 10 kV: **100 % tap** – ubrukelig!
- 400 kV: **0,06 % tap** – svært effektivt!

**Konklusjon:** Ved å øke spenningen 40 ganger (fra 10 kV til 400 kV), reduseres tapet med en faktor $40^2 = 1600$.

Generelt: $P_{\\text{tap}} \\propto \\frac{1}{V^2}$ – tapet minker med **kvadratet** av spenningen.`,
    },

    // ========== THEOREM: TAPETS AVHENGIGHET ==========
    {
      id: 'fys2-5-5-theorem-tap',
      type: 'theorem',
      title: 'Effekttap i kraftoverføring',
      content: `For en gitt overført effekt $P$ og ledningsmotstand $R$, er effekttapet:

$$P_{\\text{tap}} = I^2 R = \\frac{P^2}{V^2} \\cdot R$$

Tapet er **omvendt proporsjonalt med kvadratet av spenningen:**

$$P_{\\text{tap}} \\propto \\frac{1}{V^2}$$

Dobling av spenningen gir **fire ganger** så lite tap. Dette er den fundamentale grunnen til at vi bruker høyspent overføring.`,
    },

    // ========== NOTE: PRAKTISK BETYDNING ==========
    {
      id: 'fys2-5-5-note-praktisk',
      type: 'note',
      title: 'Hvorfor bruker vi AC og ikke DC?',
      content: `Nikola Tesla vs. Thomas Edison – «strømkrigen» rundt 1890.

**Edison** ville bruke likestrøm (DC), men DC kan ikke enkelt transformeres til høyere spenning.

**Tesla** argumenterte for vekselstrøm (AC), fordi:
- AC kan enkelt transformeres (oppover/nedover)
- Høyspennings-AC gir effektiv langdistanseoverføring
- AC-generatorer er enklere å bygge

Tesla vant, og hele verden bruker i dag AC-baserte strømnett.

**Moderne unntak:** HVDC (High Voltage Direct Current) brukes for svært lange undersjøiske kabler (som mellom Norge og England), fordi DC har lavere tap i kabler over svært lang avstand.`,
    },

    // ========== WARNING: VANLIGE FEIL ==========
    {
      id: 'fys2-5-5-warning',
      type: 'warning',
      title: 'Vanlige feil med transformatorer',
      content: `**Feil 1: Tro at transformatoren «skaper» energi**
En oppover-transformator øker spenningen, men senker strømmen tilsvarende. Effekten er (ideelt) uendret.

**Feil 2: Forveksle spennings- og strømforholdet**
Spenning: $V_s/V_p = N_s/N_p$. Strøm: $I_s/I_p = N_p/N_s$ (omvendt!).

**Feil 3: Bruke transformator med DC**
Transformatorer fungerer **bare** med AC. Konstant DC gir konstant fluks → ingen induksjon → ingen utgangspenning.

**Feil 4: Glemme at tap er proporsjonalt med $I^2$**
$P_{\\text{tap}} = I^2R$. Det er strømmen i **andre** potens som bestemmer tapet. Dobling av strømmen gir firdobling av tapet.`,
    },

    // ========== EKSEMPEL 5: DESIGN AV TRANSFORMATOR ==========
    {
      id: 'fys2-5-5-eks5',
      type: 'example',
      title: 'Design av transformator for sveiseapparat',
      problem: `Et sveiseapparat trenger 60 A ved 25 V for å fungere. Du skal designe en transformator som kobles til 230 V nettspenning.

a) Beregn omsettingsforholdet.
b) Hvis primærspolen har 920 vindinger, beregn antall sekundærvindinger.
c) Beregn primærstrømmen (ideell transformator).
d) Beregn primærstrømmen hvis virkningsgraden er 85 %.`,
      solution: `**a) Omsettingsforhold:**
$$n = \\frac{V_s}{V_p} = \\frac{25}{230} = 0{,}109$$

**Svar a):** $n \\approx 0{,}11$ (nedover-transformator).

---

**b) Sekundærvindinger:**
$$N_s = n \\cdot N_p = 0{,}109 \\cdot 920 = 100$$

**Svar b):** $N_s = 100$ vindinger.

---

**c) Primærstrøm (ideell):**
$$I_p = \\frac{V_s I_s}{V_p} = \\frac{25 \\cdot 60}{230} = 6{,}5 \\text{ A}$$

**Svar c):** $I_p = 6{,}5$ A.

---

**d) Primærstrøm med tap:**
$$P_s = V_s I_s = 25 \\cdot 60 = 1500 \\text{ W}$$
$$P_p = \\frac{P_s}{\\eta} = \\frac{1500}{0{,}85} = 1765 \\text{ W}$$
$$I_p = \\frac{P_p}{V_p} = \\frac{1765}{230} = 7{,}7 \\text{ A}$$

**Svar d):** $I_p = 7{,}7$ A (høyere enn ideell pga. tap).`,
    },

    // ========== EKSEMPEL 6: FLERTRINNS TRANSFORMERING ==========
    {
      id: 'fys2-5-5-eks6',
      type: 'example',
      title: 'Flertrinns transformering i strømnettet',
      problem: `Et vannkraftverk genererer spenning $V_1 = 11$ kV. Strømmen overføres via tre transformatortrinn:

- Trinn 1: Oppover til 132 kV (sentralnett)
- Trinn 2: Nedover til 22 kV (distribusjonsnett)
- Trinn 3: Nedover til 230 V (forbruker)

a) Beregn omsettingsforholdet for hvert trinn.
b) Beregn det totale omsettingsforholdet fra kraftverk til forbruker.
c) Hvis kraftverket leverer 50 MW, og total virkningsgrad gjennom alle trinn er 95 %, hvor mye effekt når forbrukerne?`,
      solution: `**a) Omsettingsforhold per trinn:**

Trinn 1: $n_1 = \\frac{132}{11} = 12$ (oppover)
Trinn 2: $n_2 = \\frac{22}{132} = 0{,}167$ (nedover)
Trinn 3: $n_3 = \\frac{0{,}230}{22} = 0{,}01045$ (nedover)

**Svar a):** $n_1 = 12$, $n_2 = 0{,}17$, $n_3 = 0{,}010$.

---

**b) Totalt omsettingsforhold:**
$$n_{\\text{tot}} = n_1 \\cdot n_2 \\cdot n_3 = 12 \\cdot 0{,}167 \\cdot 0{,}01045 = 0{,}02094$$

Sjekk: $\\frac{V_{\\text{ut}}}{V_{\\text{inn}}} = \\frac{230}{11\\,000} = 0{,}02091$. Stemmer!

**Svar b):** $n_{\\text{tot}} \\approx 0{,}021$.

---

**c) Effekt til forbrukerne:**
$$P_{\\text{ut}} = \\eta \\cdot P_{\\text{inn}} = 0{,}95 \\cdot 50 = 47{,}5 \\text{ MW}$$

Tap: $50 - 47{,}5 = 2{,}5$ MW.

**Svar c):** $P_{\\text{ut}} = 47{,}5$ MW. 2,5 MW tapes som varme i transformatorer og ledninger.`,
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'fys2-5-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Transformatorligningene (ideell)
$$\\frac{V_s}{V_p} = \\frac{N_s}{N_p}, \\quad \\frac{I_s}{I_p} = \\frac{N_p}{N_s}, \\quad V_p I_p = V_s I_s$$

### Typer
- **Oppover** ($N_s > N_p$): Øker spenning, senker strøm
- **Nedover** ($N_s < N_p$): Senker spenning, øker strøm

### Reelle transformatorer
$$\\eta = \\frac{P_s}{P_p} = \\frac{V_s I_s}{V_p I_p}$$
Tap: kobbertap ($I^2R$), virvelstrøm, hysterese, flukslekkasje.

### Kraftoverføring
$$P_{\\text{tap}} = I^2R = \\frac{P^2 R}{V^2}$$
Høyspenningsoverføring reduserer tapet drastisk: dobling av $V$ gir firdobling av reduksjon i tap.

### Fungerer bare med AC
Transformatorer krever tidsvarierende fluks → bare vekselstrøm.`,
    },
  ],

  // ============================================================================
  // OPPGAVER FOR KAPITTEL 5.5
  // ============================================================================
  exercises: [
    {
      id: 'fys2-5-5-ex1',
      number: '5.5.1',
      type: 'multiple-choice',
      difficulty: 'lett',
      topic: 'Transformatortype',
      task: `En transformator har 100 vindinger i primærspolen og 500 i sekundærspolen. Hva slags transformator er dette?`,
      options: [
        { id: 'a', text: 'Oppover-transformator (step-up)', isCorrect: true, feedback: 'Korrekt! $N_s > N_p$ gir $V_s > V_p$ – spenningen øker.' },
        { id: 'b', text: 'Nedover-transformator (step-down)', isCorrect: false, feedback: 'Nei, $N_s > N_p$ betyr at spenningen øker.' },
        { id: 'c', text: 'Isolasjonstransformator', isCorrect: false, feedback: 'Det ville kreve $N_s = N_p$.' },
        { id: 'd', text: 'Kan ikke avgjøres uten å vite spenningen', isCorrect: false, feedback: 'Omsettingsforholdet $N_s/N_p$ forteller oss typen.' },
      ],
      hints: ['Sammenlign $N_s$ og $N_p$. Hva betyr det for spenningen?'],
      solution: `$N_s = 500 > N_p = 100$, så $V_s/V_p = 500/100 = 5$. Spenningen femdobles → oppover-transformator.`,
    },
    {
      id: 'fys2-5-5-ex2',
      number: '5.5.2',
      type: 'multiple-choice',
      difficulty: 'lett',
      topic: 'Transformator og DC',
      task: `Hvorfor fungerer ikke en transformator med likestrøm (DC)?`,
      options: [
        { id: 'a', text: 'DC har for lav spenning', isCorrect: false, feedback: 'Spenningsnivået er ikke problemet.' },
        { id: 'b', text: 'DC gir konstant fluks som ikke induserer EMF i sekundærspolen', isCorrect: true, feedback: 'Korrekt! Faradays lov krever endring i fluks for å indusere EMF.' },
        { id: 'c', text: 'DC ødelegger jernkjernen', isCorrect: false, feedback: 'Jernkjernen tåler DC, men det gir ikke induksjon.' },
        { id: 'd', text: 'DC kan ikke flyte gjennom spoler', isCorrect: false, feedback: 'DC flyter fint gjennom spoler (som bare er ledninger).' },
      ],
      hints: ['Tenk på Faradays lov: hva kreves for å indusere spenning?'],
      solution: `Faradays lov: $\\varepsilon = -N \\frac{d\\Phi}{dt}$. Med DC er strømmen (og dermed $\\Phi$) konstant, så $\\frac{d\\Phi}{dt} = 0$ og $\\varepsilon = 0$. Ingen indusert spenning i sekundærspolen.`,
    },
    {
      id: 'fys2-5-5-ex3',
      number: '5.5.3',
      type: 'classic',
      difficulty: 'lett',
      topic: 'Omsettingsforhold',
      task: `En transformator har $N_p = 800$ og $N_s = 40$.

a) Beregn omsettingsforholdet.
b) Er dette en oppover- eller nedover-transformator?
c) Hvis primærspenningen er 230 V, hva er sekundærspenningen?`,
      hints: ['$n = N_s / N_p$', '$V_s = n \\cdot V_p$'],
      solution: `**a)** $n = N_s/N_p = 40/800 = 0{,}050$.

**b)** $n < 1$ → **nedover-transformator**.

**c)** $V_s = n \\cdot V_p = 0{,}050 \\cdot 230 = 11{,}5$ V.`,
    },
    {
      id: 'fys2-5-5-ex4',
      number: '5.5.4',
      type: 'classic',
      difficulty: 'medium',
      topic: 'Spenning og strøm',
      task: `En ideell transformator med $N_p = 200$ og $N_s = 1200$ kobles til 230 V AC. Sekundærsiden er koblet til en motstand som trekker 0,25 A.

a) Beregn sekundærspenningen.
b) Beregn primærstrømmen.
c) Beregn effekten som overføres.
d) Beregn motstanden til belastningen.`,
      hints: [
        '$V_s/V_p = N_s/N_p$.',
        'Effektbevaring: $V_p I_p = V_s I_s$.',
        '$R = V_s / I_s$.',
      ],
      solution: `**a)** $V_s = \\frac{N_s}{N_p} V_p = \\frac{1200}{200} \\cdot 230 = 6 \\cdot 230 = 1380$ V.

**b)** $I_p = \\frac{N_s}{N_p} I_s = 6 \\cdot 0{,}25 = 1{,}5$ A.

**c)** $P = V_s I_s = 1380 \\cdot 0{,}25 = 345$ W. Sjekk: $V_p I_p = 230 \\cdot 1{,}5 = 345$ W.

**d)** $R = V_s / I_s = 1380 / 0{,}25 = 5520$ $\\Omega$.`,
      subTasks: [
        { label: 'a', task: 'Sekundærspenning', answer: 1380, multipleChoiceOptions: ['1380 V', '230 V', '38 V', '690 V'] },
        { label: 'b', task: 'Primærstrøm', answer: 1.5, multipleChoiceOptions: ['1,5 A', '0,25 A', '0,042 A', '6,0 A'] },
        { label: 'c', task: 'Overført effekt', answer: 345, multipleChoiceOptions: ['345 W', '575 W', '58 W', '1380 W'] },
        { label: 'd', task: 'Belastningens motstand', answer: 5520, multipleChoiceOptions: ['5520 ohm', '920 ohm', '552 ohm', '1380 ohm'] },
      ],
    },
    {
      id: 'fys2-5-5-ex5',
      number: '5.5.5',
      type: 'classic',
      difficulty: 'medium',
      topic: 'Reell transformator',
      task: `En transformator med omsettingsforhold $n = 10$ (oppover) har virkningsgrad $\\eta = 92\\%$. Primærspenningen er 230 V og primærstrømmen er 5,0 A.

a) Beregn inngangseffekten.
b) Beregn utgangseffekten.
c) Beregn effekttapet.
d) Beregn sekundærspenningen (ideelt).
e) Beregn sekundærstrømmen.`,
      hints: [
        '$P_{\\text{inn}} = V_p I_p$.',
        '$P_{\\text{ut}} = \\eta \\cdot P_{\\text{inn}}$.',
        '$I_s = P_{\\text{ut}} / V_s$.',
      ],
      solution: `**a)** $P_{\\text{inn}} = V_p I_p = 230 \\cdot 5{,}0 = 1150$ W.

**b)** $P_{\\text{ut}} = \\eta \\cdot P_{\\text{inn}} = 0{,}92 \\cdot 1150 = 1058$ W.

**c)** $P_{\\text{tap}} = 1150 - 1058 = 92$ W.

**d)** $V_s = n \\cdot V_p = 10 \\cdot 230 = 2300$ V.

**e)** $I_s = P_{\\text{ut}} / V_s = 1058 / 2300 = 0{,}46$ A.

Sjekk ideelt: $I_s = I_p / n = 5{,}0/10 = 0{,}50$ A. Den faktiske strømmen er lavere pga. tap.`,
    },
    {
      id: 'fys2-5-5-ex6',
      number: '5.5.6',
      type: 'classic',
      difficulty: 'medium',
      topic: 'Kraftoverføring',
      task: `Et kraftverk leverer 5,0 MW over en ledning med motstand $R = 20$ $\\Omega$.

a) Beregn strømmen og effekttapet ved overføring med 50 kV.
b) Beregn strømmen og effekttapet ved overføring med 200 kV.
c) Hvor mange ganger reduseres tapet når spenningen firedobles?`,
      hints: [
        '$I = P / V$.',
        '$P_{\\text{tap}} = I^2 R$.',
        'Tenk på sammenhengen $P_{\\text{tap}} \\propto 1/V^2$.',
      ],
      solution: `**a) 50 kV:**
$I = \\frac{5{,}0 \\times 10^6}{50 \\times 10^3} = 100$ A.
$P_{\\text{tap}} = I^2 R = (100)^2 \\cdot 20 = 200\\,000$ W = 200 kW.
Prosentandel: $200/5000 \\times 100\\% = 4{,}0\\%$.

**b) 200 kV:**
$I = \\frac{5{,}0 \\times 10^6}{200 \\times 10^3} = 25$ A.
$P_{\\text{tap}} = (25)^2 \\cdot 20 = 12\\,500$ W = 12,5 kW.
Prosentandel: $12{,}5/5000 \\times 100\\% = 0{,}25\\%$.

**c)** $200/12{,}5 = 16$ ganger reduksjon. Spenningen firedobles → tapet reduseres med $4^2 = 16$.`,
      subTasks: [
        { label: 'a', task: 'Effekttap ved 50 kV', answer: 200, multipleChoiceOptions: ['200 kW', '20 kW', '2000 kW', '50 kW'] },
        { label: 'b', task: 'Effekttap ved 200 kV', answer: 12.5, multipleChoiceOptions: ['12,5 kW', '125 kW', '1,25 kW', '50 kW'] },
        { label: 'c', task: 'Reduksjonsfaktor', answer: 16, multipleChoiceOptions: ['16 ganger', '4 ganger', '8 ganger', '2 ganger'] },
      ],
    },
    {
      id: 'fys2-5-5-ex7',
      number: '5.5.7',
      type: 'classic',
      difficulty: 'medium',
      topic: 'Transformatordesign',
      task: `Du skal designe en nedover-transformator som gir 12 V fra 230 V nettspenning, med en belastning som trekker opptil 3,0 A. Primærspolen har 460 vindinger.

a) Beregn antall sekundærvindinger.
b) Beregn primærstrømmen ved full belastning (ideell).
c) Beregn maksimal utgangseffekt.
d) Hvilken minimumstykkelse må primærledningen ha hvis den tåler 1,0 A per 0,1 mm$^2$ tverrsnitt?`,
      hints: [
        '$N_s = (V_s/V_p) \\cdot N_p$.',
        'Effektbevaring gir $I_p$.',
        'Tverrsnitt = strøm / strømtetthet.',
      ],
      solution: `**a)** $N_s = \\frac{V_s}{V_p} N_p = \\frac{12}{230} \\cdot 460 = 24$ vindinger.

**b)** $I_p = \\frac{V_s I_s}{V_p} = \\frac{12 \\cdot 3{,}0}{230} = 0{,}157$ A $\\approx 0{,}16$ A.

**c)** $P_{\\text{maks}} = V_s I_s = 12 \\cdot 3{,}0 = 36$ W.

**d)** Primærstrøm er 0,16 A. Med 1,0 A per 0,1 mm²:
$A = \\frac{0{,}16}{1{,}0} \\cdot 0{,}1 = 0{,}016$ mm².
Svært tynn ledning er tilstrekkelig for primærsiden (lav strøm). Sekundærsiden med 3,0 A trenger $0{,}30$ mm².`,
    },
    {
      id: 'fys2-5-5-ex8',
      number: '5.5.8',
      type: 'classic',
      difficulty: 'vanskelig',
      topic: 'Komplett kraftoverføringssystem',
      task: `Et vannkraftverk genererer 20 MW ved 11 kV. Strømmen overføres over 100 km med ledningsresistans $R = 15$ $\\Omega$ (total tur-retur). Ved forbrukeren trengs 230 V.

a) Kraftverket bruker en oppover-transformator til 300 kV. Beregn strømmen i ledningen.
b) Beregn effekttapet i ledningen.
c) Beregn prosentandelen effekt som tapes.
d) Hvor mye effekt når forbrukerne? (Anta 100 % transformatorvirkningsgrad.)
e) Hva ville effekttapet vært uten oppover-transformator (ved 11 kV)?`,
      hints: [
        '$I = P/V$.',
        '$P_{\\text{tap}} = I^2 R$.',
        'Sammenlign tap ved 300 kV og 11 kV.',
      ],
      solution: `**a) Strøm ved 300 kV:**
$I = \\frac{P}{V} = \\frac{20 \\times 10^6}{300 \\times 10^3} = 66{,}7$ A.

**b) Effekttap:**
$P_{\\text{tap}} = I^2 R = (66{,}7)^2 \\cdot 15 = 66\\,700$ W $\\approx 67$ kW.

**c) Prosentandel:**
$\\frac{67}{20\\,000} \\times 100\\% = 0{,}33\\%$.

**d) Effekt til forbrukere:**
$P_{\\text{forbruker}} = 20\\,000 - 67 = 19\\,933$ kW $\\approx 19{,}9$ MW.

**e) Uten transformator (11 kV):**
$I = \\frac{20 \\times 10^6}{11 \\times 10^3} = 1818$ A.
$P_{\\text{tap}} = (1818)^2 \\cdot 15 = 49{,}6 \\times 10^6$ W $= 49{,}6$ MW.

Dette er **mer enn kraftverket produserer** – umulig! Uten transformator kan man ikke overføre 20 MW over 100 km med denne ledningen.

**Forholdet:** $\\frac{49{,}6 \\text{ MW}}{67 \\text{ kW}} = 740$ ganger mer tap uten transformator.`,
    },
    {
      id: 'fys2-5-5-ex9',
      number: '5.5.9',
      type: 'classic',
      difficulty: 'vanskelig',
      topic: 'Optimal overføringsspenning',
      task: `Et kraftverk leverer $P = 100$ MW over en ledning med motstand $R = 5{,}0$ $\\Omega$. Kravet er at maksimalt 1 % av effekten skal tapes i ledningen.

a) Beregn det maksimale effekttapet.
b) Beregn den maksimale strømmen i ledningen.
c) Beregn den minimale overføringsspenningen.
d) Beregn omsettingsforholdet hvis kraftverket genererer ved 22 kV.`,
      hints: [
        '$P_{\\text{tap,maks}} = 0{,}01 \\cdot P$.',
        '$I_{\\text{maks}} = \\sqrt{P_{\\text{tap}} / R}$.',
        '$V_{\\text{min}} = P / I_{\\text{maks}}$.',
      ],
      solution: `**a)** $P_{\\text{tap,maks}} = 0{,}01 \\cdot 100 \\times 10^6 = 1{,}0 \\times 10^6$ W = 1,0 MW.

**b)** $I_{\\text{maks}} = \\sqrt{\\frac{P_{\\text{tap}}}{R}} = \\sqrt{\\frac{1{,}0 \\times 10^6}{5{,}0}} = \\sqrt{200\\,000} = 447$ A.

**c)** $V_{\\text{min}} = \\frac{P}{I_{\\text{maks}}} = \\frac{100 \\times 10^6}{447} = 224\\,000$ V = 224 kV.

**d)** $n = \\frac{V_{\\text{overføring}}}{V_{\\text{kraftverk}}} = \\frac{224}{22} = 10{,}2$.

Trenger en oppover-transformator med $n \\geq 10{,}2$, f.eks. $N_p = 100$, $N_s = 1020$.`,
    },
    {
      id: 'fys2-5-5-ex10',
      number: '5.5.10',
      type: 'classic',
      difficulty: 'vanskelig',
      topic: 'Sammensatt problem',
      task: `En transformator med $N_p = 500$ og $N_s = 2500$ er tilkoblet 230 V. Spolens motstand er $r_p = 0{,}50$ $\\Omega$ (primær) og $r_s = 5{,}0$ $\\Omega$ (sekundær). Belastningen er $R_L = 2000$ $\\Omega$.

a) Beregn sekundærspenningen (ideelt).
b) Beregn sekundærstrømmen.
c) Beregn spenningsfallet over sekundærspolens motstand.
d) Beregn den faktiske spenningen over belastningen.
e) Beregn transformatorens virkningsgrad.`,
      hints: [
        'Ideell: $V_s = (N_s/N_p) V_p$.',
        '$I_s = V_s / (R_L + r_s)$ (seriekrets).',
        'Spenning over belastning: $V_L = I_s \\cdot R_L$.',
        'Husk å inkludere kobbertap i begge spoler.',
      ],
      solution: `**a)** $V_s = \\frac{2500}{500} \\cdot 230 = 5 \\cdot 230 = 1150$ V.

**b)** $I_s = \\frac{V_s}{R_L + r_s} = \\frac{1150}{2000 + 5{,}0} = \\frac{1150}{2005} = 0{,}5737$ A.

**c)** Spenningsfall i $r_s$: $\\Delta V_s = I_s \\cdot r_s = 0{,}574 \\cdot 5{,}0 = 2{,}87$ V.

**d)** $V_L = I_s \\cdot R_L = 0{,}574 \\cdot 2000 = 1147$ V.
(Eller: $V_L = V_s - \\Delta V_s = 1150 - 2{,}87 = 1147$ V.)

**e)** Utgangseffekt: $P_{\\text{ut}} = V_L \\cdot I_s = 1147 \\cdot 0{,}574 = 658$ W.
Primærstrøm (ideelt): $I_p = \\frac{N_s}{N_p} I_s = 5 \\cdot 0{,}574 = 2{,}87$ A.
Primært kobbertap: $P_{r_p} = I_p^2 r_p = (2{,}87)^2 \\cdot 0{,}50 = 4{,}1$ W.
Sekundært kobbertap: $P_{r_s} = I_s^2 r_s = (0{,}574)^2 \\cdot 5{,}0 = 1{,}6$ W.
Total inngangseffekt: $P_{\\text{inn}} = P_{\\text{ut}} + P_{r_p} + P_{r_s} = 658 + 4{,}1 + 1{,}6 = 664$ W.
$\\eta = \\frac{658}{664} = 99{,}1\\%$.`,
    },
  ],
};


// ============================================================================
// Kapittel 5.6: Induksjon i bærekraftig energiproduksjon
// ============================================================================

export const CHAPTER_FYSIKK2_5_6: TextbookChapter = {
  id: 'fysikk2-5-6',
  courseId: 'fysikk2',
  chapterNumber: '5.6',
  title: 'Induksjon i bærekraftig energiproduksjon',
  description: 'Lær om hvordan elektromagnetisk induksjon brukes i vindkraft, vannkraft, bølgekraft og kraftoverføring, med fokus på Norges rolle og bærekraftige energiløsninger.',
  estimatedMinutes: 50,
  prerequisites: ['fysikk2-5-4', 'fysikk2-5-5'],
  competenceGoals: [
    'forklare hvordan generatorer brukes i ulike fornybare energikilder',
    'beregne effekt og energiproduksjon fra vindturbiner og vannkraftverk',
    'forklare hvorfor høyspent overføring er nødvendig for bærekraftig energi',
    'analysere energitap i kraftoverføringssystemer',
    'vurdere fysikkens rolle i overgangen til fornybar energi',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'fys2-5-6-intro',
      type: 'text',
      content: `# Induksjon i bærekraftig energiproduksjon

Alt vi har lært om elektromagnetisk induksjon – Faradays lov, generatorer, transformatorer – er ikke bare teori. Disse prinsippene utgjør selve grunnmuren i moderne energiproduksjon og -distribusjon.

I dette kapitlet skal vi se på hvordan fysikken vi har lært anvendes i **bærekraftig energiproduksjon**, med spesielt fokus på Norges situasjon.

**I dette kapitlet lærer du:**
- Hvordan vindturbiner konverterer vindenergi til elektrisk energi
- Hvordan vannkraftverk utnytter potensiell energi
- Bølgekraft og andre fornybare kilder
- Kraftoverføring over lange avstander
- Energitap i ledninger og hvordan minimere dem
- Norges rolle som fornybarnasjon`,
    },

    // ========== VANNKRAFT ==========
    {
      id: 'fys2-5-6-vannkraft',
      type: 'text',
      content: `## Vannkraft – Norges energiryggrad

Norge er verdens sjette største vannkraftprodusent og får over **90 %** av sin elektrisitet fra vannkraft. La oss forstå fysikken bak.

### Prinsipp

1. Vann lagrer **potensiell energi** i magasiner (dammer) høyt over kraftverket.
2. Vannet ledes gjennom rør (**trykksjakter**) nedover til turbinene.
3. Potensiell energi konverteres til **kinetisk energi** i vannet.
4. Vannet driver en **turbin** som roterer.
5. Turbinen er koblet til en **generator** (roterende spole i magnetfelt).
6. Generatoren produserer **vekselstrøm** via elektromagnetisk induksjon.

### Energikjeden

$$E_{\\text{potensiell}} \\to E_{\\text{kinetisk}} \\to E_{\\text{mekanisk (turbin)}} \\to E_{\\text{elektrisk (generator)}}$$

### Effekt fra vannkraft

Effekten som er tilgjengelig fra fallende vann:

$$P = \\rho g h Q$$

Der:
- $\\rho = 1000$ kg/m$^3$ (vannets tetthet)
- $g = 9{,}81$ m/s$^2$
- $h$ = fallhøyde [m]
- $Q$ = volumstrøm [m$^3$/s]

Med virkningsgrad $\\eta$ (typisk 85–95 % for store anlegg):

$$P_{\\text{el}} = \\eta \\cdot \\rho g h Q$$

### Norske vannkraftverk

- **Tonstad** (Rogaland): 960 MW, fallhøyde 600 m
- **Kvilldal** (Rogaland): 1240 MW, Norges største
- **Sima** (Hordaland): 500 MW, fallhøyde over 1000 m`,
    },

    // ========== FORMEL: VANNKRAFT ==========
    {
      id: 'fys2-5-6-formel-vann',
      type: 'formula',
      title: 'Effekt fra vannkraftverk',
      latex: `P_{\\text{el}} = \\eta \\cdot \\rho g h Q`,
      description: `Der $\\eta$ er virkningsgraden (0,85–0,95), $\\rho = 1000$ kg/m$^3$ er vannets tetthet, $g = 9{,}81$ m/s$^2$, $h$ er fallhøyden [m], og $Q$ er volumstrømmen [m$^3$/s].`,
    },

    // ========== EKSEMPEL 1: VANNKRAFTVERK ==========
    {
      id: 'fys2-5-6-eks1',
      type: 'example',
      title: 'Beregning av vannkrafteffekt',
      problem: `Et vannkraftverk har fallhøyde $h = 500$ m og volumstrøm $Q = 30$ m$^3$/s. Virkningsgraden fra vann til elektrisitet er $\\eta = 0{,}90$.

a) Beregn den tilgjengelige effekten fra vannet.
b) Beregn den elektriske utgangseffekten.
c) Generatoren produserer spenning ved 11 kV. Beregn strømmen generatoren leverer.
d) Beregn vannmengden som brukes per time (i tonn).`,
      solution: `**a) Tilgjengelig effekt:**
$$P_{\\text{vann}} = \\rho g h Q = 1000 \\cdot 9{,}81 \\cdot 500 \\cdot 30$$
$$= 1000 \\cdot 9{,}81 \\cdot 15\\,000 = 147{,}2 \\times 10^6 \\text{ W} = 147 \\text{ MW}$$

**Svar a):** $P_{\\text{vann}} = 147$ MW.

---

**b) Elektrisk utgangseffekt:**
$$P_{\\text{el}} = \\eta \\cdot P_{\\text{vann}} = 0{,}90 \\cdot 147 = 132 \\text{ MW}$$

**Svar b):** $P_{\\text{el}} = 132$ MW.

---

**c) Strøm ved 11 kV:**
$$I = \\frac{P_{\\text{el}}}{V} = \\frac{132 \\times 10^6}{11 \\times 10^3} = 12\\,000 \\text{ A} = 12 \\text{ kA}$$

**Svar c):** $I = 12$ kA. (Denne enorme strømmen transformeres opp til høyspent for overføring.)

---

**d) Vannmengde per time:**
$$\\dot{m} = \\rho Q = 1000 \\cdot 30 = 30\\,000 \\text{ kg/s} = 30 \\text{ tonn/s}$$
$$m_{\\text{time}} = 30 \\cdot 3600 = 108\\,000 \\text{ tonn}$$

**Svar d):** 108 000 tonn vann per time – et enormt volum!`,
    },

    // ========== VINDKRAFT ==========
    {
      id: 'fys2-5-6-vindkraft',
      type: 'text',
      content: `## Vindkraft – voksende energikilde

Vindkraft er verdens raskest voksende energikilde. Norge har stor vindkraftproduksjon, spesielt langs kysten og til havs.

### Prinsipp

1. **Vinden** har kinetisk energi.
2. Vindturbinens **blader** fanger opp deler av denne energien.
3. Bladene driver en **rotor** som roterer.
4. Rotoren er koblet til en **generator** (ofte via en girkasse).
5. Generatoren produserer **vekselstrøm** via elektromagnetisk induksjon.

### Kinetisk energi i vind

Luften som passerer gjennom turbinens sveipeareal $A$ per tidsenhet:

$$\\dot{m} = \\rho_{\\text{luft}} \\cdot A \\cdot v$$

Kinetisk energi per tidsenhet (tilgjengelig effekt):

$$P_{\\text{vind}} = \\frac{1}{2}\\dot{m}v^2 = \\frac{1}{2}\\rho A v^3$$

### Betz' grense

Ikke all energi kan utvinnes. **Betz' lov** sier at maksimalt **59,3 %** av vindens kinetiske energi kan fanges:

$$P_{\\text{maks}} = \\frac{16}{27} \\cdot \\frac{1}{2}\\rho A v^3 \\approx 0{,}593 \\cdot P_{\\text{vind}}$$

Moderne turbiner oppnår typisk 35–45 % av vindens energi (med tap).

### Viktige observasjoner

- Effekten er proporsjonal med $v^3$: **dobling av vindstyrken gir 8 ganger mer effekt!**
- Effekten er proporsjonal med $A = \\pi r^2$: større rotordiameter gir mer effekt.
- Derfor bygges vindturbiner stadig **større** og plasseres der det **blåser mest**.`,
    },

    // ========== FORMEL: VINDKRAFT ==========
    {
      id: 'fys2-5-6-formel-vind',
      type: 'formula',
      title: 'Tilgjengelig effekt fra vind',
      latex: `P_{\\text{vind}} = \\frac{1}{2}\\rho A v^3, \\quad P_{\\text{turbin}} = C_p \\cdot \\frac{1}{2}\\rho A v^3`,
      description: `Der $\\rho \\approx 1{,}225$ kg/m$^3$ (luftens tetthet ved havnivå), $A = \\pi r^2$ er rotorens sveipeareal [m$^2$], $v$ er vindhastigheten [m/s], og $C_p \\leq 0{,}593$ er effektkoeffisienten (Betz' grense).`,
    },

    // ========== EKSEMPEL 2: VINDTURBIN ==========
    {
      id: 'fys2-5-6-eks2',
      type: 'example',
      title: 'Effekt fra en vindturbin',
      problem: `En moderne havvindturbin har rotordiameter 150 m og effektkoeffisient $C_p = 0{,}42$. Luftens tetthet er $\\rho = 1{,}225$ kg/m$^3$.

a) Beregn rotorens sveipeareal.
b) Beregn tilgjengelig vindeffekt ved vindhastighet $v = 12$ m/s.
c) Beregn turbinens elektriske effekt.
d) Beregn effekten ved $v = 6$ m/s og sammenlign med c).
e) Hvor mange husstander (gjennomsnittlig forbruk 16 000 kWh/år) kan denne turbinen forsyne ved 12 m/s?`,
      solution: `**a) Sveipeareal:**
$$A = \\pi r^2 = \\pi \\cdot 75^2 = 17\\,671 \\text{ m}^2$$

**Svar a):** $A \\approx 17\\,700$ m$^2$.

---

**b) Vindeffekt ved 12 m/s:**
$$P_{\\text{vind}} = \\frac{1}{2}\\rho A v^3 = \\frac{1}{2} \\cdot 1{,}225 \\cdot 17\\,671 \\cdot 12^3$$
$$= \\frac{1}{2} \\cdot 1{,}225 \\cdot 17\\,671 \\cdot 1728 = 18{,}70 \\times 10^6 \\text{ W} = 18{,}7 \\text{ MW}$$

**Svar b):** $P_{\\text{vind}} \\approx 18{,}7$ MW.

---

**c) Elektrisk effekt:**
$$P_{\\text{el}} = C_p \\cdot P_{\\text{vind}} = 0{,}42 \\cdot 18{,}7 = 7{,}85 \\text{ MW}$$

**Svar c):** $P_{\\text{el}} \\approx 7{,}9$ MW.

---

**d) Effekt ved 6 m/s:**
$$P_{\\text{el}} = C_p \\cdot \\frac{1}{2}\\rho A v^3 = 0{,}42 \\cdot \\frac{1}{2} \\cdot 1{,}225 \\cdot 17\\,671 \\cdot 6^3$$
$$= 0{,}42 \\cdot \\frac{1}{2} \\cdot 1{,}225 \\cdot 17\\,671 \\cdot 216 = 0{,}98 \\text{ MW}$$

Halvering av vindhastigheten gir: $\\frac{0{,}98}{7{,}85} = \\frac{1}{8}$ av effekten!

**Svar d):** $P_{\\text{el}} \\approx 0{,}98$ MW – **åtte ganger** mindre enn ved 12 m/s (pga. $v^3$).

---

**e) Husstander:**
Effekt ved 12 m/s: 7,85 MW = 7850 kW.
Energi per år (antar konstant vind – urealistisk): $7850 \\cdot 8760 = 68{,}8 \\times 10^6$ kWh.
Realistisk kapasitetsfaktor for havvind: ca. 45 %, altså $0{,}45 \\cdot 68{,}8 = 30{,}9 \\times 10^6$ kWh.
Antall husstander: $\\frac{30{,}9 \\times 10^6}{16\\,000} \\approx 1930$.

**Svar e):** Ca. **1900 husstander** (med realistisk kapasitetsfaktor).`,
    },

    // ========== BØLGEKRAFT ==========
    {
      id: 'fys2-5-6-bolgekraft',
      type: 'text',
      content: `## Andre fornybare energikilder med induksjon

### Bølgekraft

Bølger inneholder enorm energi. Flere teknologier er under utvikling:

**Oscillerende vannsøyle (OWC):**
- Bølger presser luft inn og ut av et kammer
- Luftstrømmen driver en turbin (Wells-turbin)
- Turbinen driver en generator

**Punktabsorberer:**
- En bøye som beveger seg opp og ned med bølgene
- Bevegelsen driver en lineær generator (magnet beveger seg gjennom spole)
- Direkte bruk av Faradays lov!

**Overtopping:**
- Bølger skyller over en rampe og samles i et reservoar
- Vannet ledes gjennom en turbin tilbake til havet
- Ligner prinsippet for vannkraft

### Tidevannskraft

Tidevannet skaper vannstrømmer som kan drive undersjøiske turbiner – som «vindturbiner under vann».

### Geotermisk energi

I geotermiske kraftverk brukes varme fra jordens indre til å lage damp som driver turbiner og generatorer. Island er ledende innen geotermisk energi.

### Felles prinsipp

Uansett energikilde er det siste trinnet alltid det samme:

$$\\text{Mekanisk rotasjon} \\xrightarrow{\\text{Generator}} \\text{Elektrisk energi (induksjon)}$$`,
    },

    // ========== KRAFTOVERFØRING OG TAP ==========
    {
      id: 'fys2-5-6-kraftoverforing',
      type: 'text',
      content: `## Kraftoverføring – fra kraftverk til stikkontakt

Fornybare energikilder er ofte plassert langt fra forbrukerne:
- Vannkraftverk i fjellene
- Vindparker langs kysten eller til havs
- Solkraftverk i ørkenområder (internasjonalt)

Effektiv kraftoverføring over lange avstander er avgjørende.

### Energitap i ledninger

Overføringsledninger har motstand $R$. Når strøm $I$ flyter, tapes effekt:

$$P_{\\text{tap}} = I^2 R$$

For en ledning med resistivitet $\\rho_l$, lengde $l$ og tverrsnitt $A_l$:

$$R = \\rho_l \\frac{2l}{A_l}$$

(Faktor 2 fordi strømmen må gå fram og tilbake.)

### Minimering av tap

Fra $P_{\\text{tap}} = \\frac{P^2 R}{V^2}$:

1. **Øk spenningen** ($V$): Viktigst! Dobling av $V$ gir 4× mindre tap.
2. **Reduser motstanden** ($R$): Bruk tykkere ledere eller bedre ledermateriell (aluminium i stedet for kobber for vektbesparelse).
3. **Reduser avstanden** ($l$): Ikke alltid mulig.

### Spenningsnivåer i Norge

| Netttype | Spenning | Funksjon |
|:---|:---|:---|
| Sentralnett | 300–420 kV | Lange avstander |
| Regionalnett | 33–132 kV | Distribusjon |
| Lokalnett | 11–22 kV | Byer og tettsteder |
| Lavspentnett | 230/400 V | Til forbrukere |`,
    },

    // ========== EKSEMPEL 3: VINDPARK TIL BY ==========
    {
      id: 'fys2-5-6-eks3',
      type: 'example',
      title: 'Kraftoverføring fra vindpark',
      problem: `En vindpark produserer 200 MW som skal overføres 80 km til en by. Overføringsledningene har motstand 0,10 $\\Omega$/km (per leder, to ledere total).

a) Beregn total ledningsmotstand.
b) Beregn effekttapet ved overføring med 132 kV.
c) Beregn effekttapet ved overføring med 420 kV.
d) Hvor mye effekt sparer man per år ved å bruke 420 kV i stedet for 132 kV?`,
      solution: `**a) Total motstand:**
$$R = 2 \\cdot 0{,}10 \\cdot 80 = 16 \\text{ } \\Omega$$

(Faktor 2 for to ledere – strøm går frem og tilbake.)

**Svar a):** $R = 16$ $\\Omega$.

---

**b) Tap ved 132 kV:**
$$I = \\frac{P}{V} = \\frac{200 \\times 10^6}{132 \\times 10^3} = 1515 \\text{ A}$$
$$P_{\\text{tap}} = I^2 R = (1515)^2 \\cdot 16 = 36{,}7 \\times 10^6 \\text{ W} = 36{,}7 \\text{ MW}$$

Prosentandel: $36{,}7/200 \\times 100\\% = 18{,}4\\%$.

**Svar b):** $P_{\\text{tap}} = 36{,}7$ MW (18,4 % tap).

---

**c) Tap ved 420 kV:**
$$I = \\frac{200 \\times 10^6}{420 \\times 10^3} = 476 \\text{ A}$$
$$P_{\\text{tap}} = (476)^2 \\cdot 16 = 3{,}63 \\times 10^6 \\text{ W} = 3{,}63 \\text{ MW}$$

Prosentandel: $3{,}63/200 \\times 100\\% = 1{,}8\\%$.

**Svar c):** $P_{\\text{tap}} = 3{,}6$ MW (1,8 % tap).

---

**d) Spart effekt og energi:**
$$\\Delta P = 36{,}7 - 3{,}63 = 33{,}1 \\text{ MW}$$

Energi spart per år (antar 8760 timer):
$$\\Delta E = 33{,}1 \\times 10^3 \\cdot 8760 = 290 \\times 10^6 \\text{ kWh} = 290 \\text{ GWh}$$

Med strømpris 1 kr/kWh: **290 millioner kroner spart per år!**

**Svar d):** Ca. 33 MW spart, tilsvarende ca. 290 GWh/år.`,
    },

    // ========== NORGES ENERGISYSTEM ==========
    {
      id: 'fys2-5-6-norge',
      type: 'text',
      content: `## Norges energisystem – fysikk i praksis

Norge har en unik posisjon i verden når det gjelder fornybar energi.

### Fakta om norsk energi

- **Vannkraft:** Ca. 90 % av produksjonen, ca. 1700 vannkraftverk
- **Vindkraft:** Voksende raskt, spesielt havvind
- **Total kapasitet:** Ca. 40 000 MW installert effekt
- **Produksjon:** Ca. 155 TWh/år
- **Forbruk:** Ca. 135 TWh/år (netto eksportør)

### Utenlandskabler

Norge har kraftkabler til:
- **Sverige** og **Danmark** (AC-kabler)
- **Nederland** (NorNed, HVDC, 580 km)
- **Tyskland** (NordLink, HVDC, 623 km)
- **Storbritannia** (North Sea Link, HVDC, 720 km)

Disse kablene bruker **HVDC** (High Voltage Direct Current) fordi:
- Lavere tap over svært lange avstander i kabler
- Ingen reaktive tap (som er et problem med AC i kabler)
- Kan koble sammen systemer med ulik frekvens

### Pumpekraftverk – Norges «batteri»

Noen norske kraftverk kan kjøres i revers:
1. Når strømprisene er lave (mye vind i Europa): **Pump vann oppover** til magasinet
2. Når prisene er høye: **Produser strøm** fra det oppmagasinerte vannet

Motoren/generatoren brukes i begge retninger – samme maskin!

### Miljøhensyn

Fornybar energi har også utfordringer:
- **Vannkraft:** Inngrep i vassdrag, påvirker fisk og natur
- **Vindkraft:** Visuell påvirkning, fugler, støy
- **Kraftlinjer:** Inngrep i natur, elektromagnetisk stråling`,
    },

    // ========== EKSEMPEL 4: HVDC-KABEL ==========
    {
      id: 'fys2-5-6-eks4',
      type: 'example',
      title: 'HVDC-kabel mellom Norge og England',
      problem: `North Sea Link er en 720 km lang undersjøisk HVDC-kabel mellom Norge og England med kapasitet 1400 MW. Kabelen opererer ved 525 kV DC, og total ledningsmotstand er ca. 30 $\\Omega$.

a) Beregn strømmen i kabelen ved full kapasitet.
b) Beregn effekttapet i kabelen.
c) Beregn prosentandelen som tapes.
d) Sammenlign med tapet dersom overføringen skjedde ved 132 kV.`,
      solution: `**a) Strøm:**
$$I = \\frac{P}{V} = \\frac{1400 \\times 10^6}{525 \\times 10^3} = 2667 \\text{ A}$$

**Svar a):** $I \\approx 2700$ A.

---

**b) Effekttap:**
$$P_{\\text{tap}} = I^2 R = (2667)^2 \\cdot 30 = 213 \\times 10^6 \\text{ W} = 213 \\text{ MW}$$

**Svar b):** $P_{\\text{tap}} \\approx 213$ MW.

---

**c) Prosentandel:**
$$\\frac{213}{1400} \\times 100\\% = 15{,}2\\%$$

**Svar c):** Ca. 15 % tap. (Høyt, men akseptabelt for 720 km.)

---

**d) Ved 132 kV:**
$$I = \\frac{1400 \\times 10^6}{132 \\times 10^3} = 10\\,606 \\text{ A}$$
$$P_{\\text{tap}} = (10\\,606)^2 \\cdot 30 = 3374 \\text{ MW}$$

Det er **mer enn dobbelt** så mye som overført effekt – fullstendig umulig!

Forholdet: $(525/132)^2 \\approx 15{,}8$. Tapet ved 132 kV er ca. **16 ganger** høyere.

**Svar d):** Ved 132 kV ville tapet vært 3374 MW, som er mer enn den overførte effekten. Høyspent er absolutt nødvendig!`,
    },

    // ========== FREMTIDENS ENERGI ==========
    {
      id: 'fys2-5-6-fremtid',
      type: 'text',
      content: `## Fremtidens energisystem

Overgangen til fornybar energi stiller nye krav til fysikk og teknologi:

### Utfordringer

1. **Variabel produksjon:** Vind og sol er ikke konstante. Nettet må balanseres.
2. **Lagring:** Batterier, pumpekraft, hydrogen – alle krever energiomforming.
3. **Distribusjon:** Fornybare kilder er spredt – krever mer overføring.
4. **Effektivitet:** Hvert ledd i energikjeden har tap.

### Nye teknologier

**Superleder-kabler:** Materialer med null motstand ($R = 0$) ved lave temperaturer:
$$P_{\\text{tap}} = I^2 R = I^2 \\cdot 0 = 0$$
Null tap! Men avkjøling til kryogene temperaturer krever energi.

**Havvind:** Flytende vindturbiner (Equinor/Hywind) i dypt vann – Norge er verdensledende.

**Solceller:** Direkte konvertering av lys til strøm (fotoelektrisk effekt – ikke induksjon!) som supplement.

**Smart nett:** Intelligent styring av produksjon og forbruk for optimal utnyttelse.

### Fysikkens rolle

Alle disse teknologiene bygger på de fysiske prinsippene vi har lært:
- **Generatorer** i alle typer kraftverk (Faradays lov)
- **Transformatorer** for effektiv overføring
- **Motorer** for pumpekraft og elbiler
- **Lenz' lov** for regenerativ bremsing
- **Energibevaring** som grunnprinsipp for alt`,
    },

    // ========== NOTE: ENERGIEFFEKTIVITET ==========
    {
      id: 'fys2-5-6-note-effektivitet',
      type: 'note',
      title: 'Energiregnskap for strømnettet',
      content: `Tenk deg hele energikjeden fra kraftverk til stikkontakt:

| Steg | Virkningsgrad |
|:---|:---|
| Turbin | 90–95 % |
| Generator | 95–99 % |
| Oppover-transformator | 99+ % |
| Overføring (ledning) | 95–99 % |
| Nedover-transformator (×2) | 99+ % (×2) |
| **Total** | **ca. 85–90 %** |

Det betyr at av 100 MW produsert i kraftverket, når ca. 85–90 MW forbrukeren. Resten er tap (hovedsakelig varme).

Hvert prosentpoeng forbedring i virkningsgrad betyr enorme besparelser i energi og penger på nasjonalt nivå.`,
    },

    // ========== EKSEMPEL 5: KOMPLETT ENERGISYSTEM ==========
    {
      id: 'fys2-5-6-eks5',
      type: 'example',
      title: 'Komplett energiregnskap',
      problem: `Et vannkraftverk produserer 500 MW. Energien overføres 200 km til en stor by.

Virkningsgrader:
- Generator: 97 %
- Oppover-transformator: 99 %
- Overføring (ledningsmotstand gir 3 % tap): 97 %
- Nedover-transformator 1 (til regionalnett): 99 %
- Nedover-transformator 2 (til forbruker): 99 %

a) Beregn effekten som når forbrukerne.
b) Beregn total virkningsgrad.
c) Beregn det totale effekttapet.
d) Hvor mange tonn CO$_2$ spares per år sammenlignet med et gasskraftverk (som slipper ut 400 g CO$_2$ per kWh)?`,
      solution: `**a) Effekt til forbrukere:**
$$P_{\\text{ut}} = 500 \\cdot 0{,}97 \\cdot 0{,}99 \\cdot 0{,}97 \\cdot 0{,}99 \\cdot 0{,}99$$
$$= 500 \\cdot 0{,}9127 = 456 \\text{ MW}$$

**Svar a):** $P_{\\text{ut}} \\approx 456$ MW.

---

**b) Total virkningsgrad:**
$$\\eta_{\\text{tot}} = 0{,}97 \\cdot 0{,}99 \\cdot 0{,}97 \\cdot 0{,}99 \\cdot 0{,}99 = 0{,}913 = 91{,}3\\%$$

**Svar b):** $\\eta_{\\text{tot}} \\approx 91\\%$.

---

**c) Totalt effekttap:**
$$P_{\\text{tap}} = 500 - 456 = 44 \\text{ MW}$$

**Svar c):** $P_{\\text{tap}} = 44$ MW (fordelt på generator, transformatorer og ledning).

---

**d) CO$_2$-besparelse:**
Årlig energiproduksjon: $P \\cdot t = 500 \\times 10^3 \\cdot 8760 = 4{,}38 \\times 10^9$ kWh = 4380 GWh.

CO$_2$ fra gasskraftverk: $4{,}38 \\times 10^9 \\cdot 0{,}400 = 1{,}75 \\times 10^9$ kg = **1,75 millioner tonn CO$_2$**.

Vannkraft har tilnærmet null utslipp under drift.

**Svar d):** Ca. **1,8 millioner tonn CO$_2$** spares per år.`,
    },

    // ========== WARNING ==========
    {
      id: 'fys2-5-6-warning',
      type: 'warning',
      title: 'Vanlige feil i energiberegninger',
      content: `**Feil 1: Glemme at $P_{\\text{tap}} \\propto I^2$, ikke $I$**
Dobling av strømmen gir firdobling av tapet. Mange antar lineær sammenheng.

**Feil 2: Bruke feil enheter**
Effekt i MW, energi i MWh eller GWh. Pass på konverteringer!

**Feil 3: Forveksle effekt og energi**
$P$ = effekt (MW) er det som leveres i øyeblikket. $E = P \\cdot t$ (MWh) er total energi over tid.

**Feil 4: Anta 100 % kapasitetsfaktor**
En vindturbin med 10 MW merkeeffekt produserer IKKE 10 MW hele tiden. Typisk kapasitetsfaktor: 25–45 %.

**Feil 5: Glemme $v^3$-avhengigheten for vind**
Vindeffekt er proporsjonal med $v^3$, ikke $v$. Halv vindstyrke gir 1/8 av effekten.`,
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'fys2-5-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Vannkraft
$$P_{\\text{el}} = \\eta \\rho g h Q$$
Norge: 90 % av produksjonen, over 1700 kraftverk.

### Vindkraft
$$P_{\\text{vind}} = \\frac{1}{2}\\rho A v^3, \\quad P_{\\text{turbin}} = C_p \\cdot P_{\\text{vind}}$$
Betz' grense: $C_p \\leq 59{,}3\\%$. Effekt $\\propto v^3$.

### Kraftoverføring
$$P_{\\text{tap}} = I^2 R = \\frac{P^2 R}{V^2}$$
Høyspenningsoverføring er essensielt. Norsk sentralnett: 300–420 kV.

### Alle kraftverk bruker induksjon
Generator (Faradays lov) → Transformator (oppover) → Ledning → Transformator (nedover) → Forbruker.

### Norges rolle
- Verdensledende på vannkraft
- Voksende havvind
- HVDC-kabler til Europa
- Pumpekraft som «batteri» for Europa`,
    },
  ],

  // ============================================================================
  // OPPGAVER FOR KAPITTEL 5.6
  // ============================================================================
  exercises: [
    {
      id: 'fys2-5-6-ex1',
      number: '5.6.1',
      type: 'multiple-choice',
      difficulty: 'lett',
      topic: 'Fornybar energi og induksjon',
      task: `Hva er fellesnevneren for vannkraft, vindkraft og bølgekraft når det gjelder å produsere elektrisitet?`,
      options: [
        { id: 'a', text: 'De bruker alle solenergi direkte', isCorrect: false, feedback: 'Solceller bruker solenergi direkte, men ikke vannkraft, vind og bølger.' },
        { id: 'b', text: 'De bruker alle en generator basert på elektromagnetisk induksjon', isCorrect: true, feedback: 'Korrekt! Uansett energikilde er det siste trinnet alltid en generator som bruker Faradays lov.' },
        { id: 'c', text: 'De har alle lik virkningsgrad', isCorrect: false, feedback: 'Virkningsgraden varierer mye mellom ulike teknologier.' },
        { id: 'd', text: 'De trenger ikke transformatorer', isCorrect: false, feedback: 'Alle trenger transformatorer for overføring.' },
      ],
      hints: ['Tenk på det siste trinnet i energikjeden for alle disse kildene.'],
      solution: `Vannkraft, vindkraft og bølgekraft konverterer alle mekanisk energi (rotasjon) til elektrisk energi via en generator. Generatoren utnytter elektromagnetisk induksjon (Faradays lov). Selv om energikildene er forskjellige, er det siste trinnet alltid det samme.`,
    },
    {
      id: 'fys2-5-6-ex2',
      number: '5.6.2',
      type: 'multiple-choice',
      difficulty: 'lett',
      topic: 'Vindkraft og vindstyrke',
      task: `Vindstyrken øker fra 5 m/s til 10 m/s. Hvor mange ganger øker den tilgjengelige vindeffekten?`,
      options: [
        { id: 'a', text: '2 ganger', isCorrect: false, feedback: 'Det ville stemme hvis effekten var proporsjonal med $v$, men den er proporsjonal med $v^3$.' },
        { id: 'b', text: '4 ganger', isCorrect: false, feedback: 'Det ville stemme med $v^2$.' },
        { id: 'c', text: '8 ganger', isCorrect: true, feedback: 'Korrekt! $P \\propto v^3$, så dobling gir $2^3 = 8$ ganger mer effekt.' },
        { id: 'd', text: '16 ganger', isCorrect: false, feedback: 'Det ville stemme med $v^4$.' },
      ],
      hints: ['$P_{\\text{vind}} \\propto v^3$. Hva er $(10/5)^3$?'],
      solution: `$P \\propto v^3$. Forholdet: $(10/5)^3 = 2^3 = 8$. Effekten åttedobles ved dobling av vindhastigheten.`,
    },
    {
      id: 'fys2-5-6-ex3',
      number: '5.6.3',
      type: 'classic',
      difficulty: 'lett',
      topic: 'Vannkraft grunnleggende',
      task: `Et lite vannkraftverk har fallhøyde 80 m og volumstrøm 5,0 m$^3$/s. Virkningsgraden er 88 %.

a) Beregn den tilgjengelige effekten fra vannet.
b) Beregn den elektriske utgangseffekten.
c) Hvor mye energi produseres per døgn (i kWh)?`,
      hints: [
        '$P = \\rho g h Q$, med $\\rho = 1000$ kg/m$^3$.',
        '$E = P \\cdot t$, konverter til kWh.',
      ],
      solution: `**a)** $P_{\\text{vann}} = \\rho g h Q = 1000 \\cdot 9{,}81 \\cdot 80 \\cdot 5{,}0 = 3{,}92 \\times 10^6$ W = 3,92 MW.

**b)** $P_{\\text{el}} = 0{,}88 \\cdot 3{,}92 = 3{,}45$ MW.

**c)** $E = P \\cdot t = 3450 \\text{ kW} \\cdot 24 \\text{ h} = 82\\,800$ kWh $\\approx 83$ MWh per døgn.`,
    },
    {
      id: 'fys2-5-6-ex4',
      number: '5.6.4',
      type: 'classic',
      difficulty: 'medium',
      topic: 'Vindturbin beregning',
      task: `En vindturbin har rotordiameter 100 m. Luftens tetthet er $\\rho = 1{,}225$ kg/m$^3$, og turbinens effektkoeffisient er $C_p = 0{,}38$.

a) Beregn rotorens sveipeareal.
b) Beregn turbinens effekt ved 8 m/s.
c) Beregn turbinens effekt ved 14 m/s.
d) Beregn forholdet mellom effekten i b) og c). Forklar resultatet.`,
      hints: [
        '$A = \\pi r^2$.',
        '$P = C_p \\cdot \\frac{1}{2}\\rho A v^3$.',
        'Forholdet mellom effektene avhenger av $v^3$.',
      ],
      solution: `**a)** $A = \\pi \\cdot 50^2 = 7854$ m$^2$.

**b) Ved 8 m/s:**
$P = 0{,}38 \\cdot \\frac{1}{2} \\cdot 1{,}225 \\cdot 7854 \\cdot 8^3 = 0{,}38 \\cdot 0{,}5 \\cdot 1{,}225 \\cdot 7854 \\cdot 512$
$= 0{,}38 \\cdot 2{,}464 \\times 10^6 = 936$ kW $\\approx 0{,}94$ MW.

**c) Ved 14 m/s:**
$P = 0{,}38 \\cdot 0{,}5 \\cdot 1{,}225 \\cdot 7854 \\cdot 14^3 = 0{,}38 \\cdot 1{,}321 \\times 10^7 = 5{,}02$ MW.

**d)** Forholdet: $5{,}02 / 0{,}936 = 5{,}36$. Forventet: $(14/8)^3 = 1{,}75^3 = 5{,}36$. Stemmer!

Effekten er proporsjonal med $v^3$, så selv en moderat økning i vindstyrke gir stor økning i effekt.`,
      subTasks: [
        { label: 'a', task: 'Sveipeareal', answer: 7854, multipleChoiceOptions: ['7854 m2', '3927 m2', '15708 m2', '31416 m2'] },
        { label: 'b', task: 'Effekt ved 8 m/s', answer: 936, multipleChoiceOptions: ['936 kW', '94 kW', '9360 kW', '468 kW'] },
        { label: 'c', task: 'Effekt ved 14 m/s', answer: 5020, multipleChoiceOptions: ['5020 kW', '1640 kW', '2870 kW', '502 kW'] },
      ],
    },
    {
      id: 'fys2-5-6-ex5',
      number: '5.6.5',
      type: 'classic',
      difficulty: 'medium',
      topic: 'Energitap i ledning',
      task: `Et vindkraftverk produserer 50 MW som skal overføres 60 km. Ledningsmotstanden er 0,080 $\\Omega$/km per leder (to ledere totalt).

a) Beregn total ledningsmotstand.
b) Beregn effekttapet ved 132 kV overføring.
c) Beregn effekttapet ved 300 kV overføring.
d) Beregn den prosentvise besparelsen i tap ved å bruke 300 kV.`,
      hints: [
        '$R = 2 \\cdot r \\cdot l$ (tur-retur).',
        '$P_{\\text{tap}} = (P/V)^2 \\cdot R$.',
      ],
      solution: `**a)** $R = 2 \\cdot 0{,}080 \\cdot 60 = 9{,}6$ $\\Omega$.

**b) Ved 132 kV:**
$I = 50 \\times 10^6 / (132 \\times 10^3) = 379$ A.
$P_{\\text{tap}} = (379)^2 \\cdot 9{,}6 = 1{,}38 \\times 10^6$ W = 1,38 MW (2,8 %).

**c) Ved 300 kV:**
$I = 50 \\times 10^6 / (300 \\times 10^3) = 167$ A.
$P_{\\text{tap}} = (167)^2 \\cdot 9{,}6 = 267\\,000$ W = 0,27 MW (0,53 %).

**d)** Besparelse: $1{,}38 - 0{,}27 = 1{,}11$ MW.
Prosentvis: $(1{,}11/1{,}38) \\times 100\\% = 80\\%$ reduksjon i tap.
Forventet: $(300/132)^2 \\approx 5{,}2$ → tapet reduseres med faktor 5,2.`,
      subTasks: [
        { label: 'a', task: 'Total motstand', answer: 9.6, multipleChoiceOptions: ['9,6 ohm', '4,8 ohm', '19,2 ohm', '0,96 ohm'] },
        { label: 'b', task: 'Tap ved 132 kV', answer: 1.38, multipleChoiceOptions: ['1,38 MW', '13,8 MW', '0,138 MW', '3,8 MW'] },
        { label: 'c', task: 'Tap ved 300 kV', answer: 0.27, multipleChoiceOptions: ['0,27 MW', '2,7 MW', '0,027 MW', '0,54 MW'] },
      ],
    },
    {
      id: 'fys2-5-6-ex6',
      number: '5.6.6',
      type: 'classic',
      difficulty: 'medium',
      topic: 'Norsk energimiks',
      task: `Norge produserer ca. 155 TWh elektrisitet per år, hvorav 90 % er vannkraft og 8 % er vindkraft.

a) Beregn energiproduksjonen fra vannkraft i TWh.
b) Beregn energiproduksjonen fra vindkraft i TWh.
c) Beregn gjennomsnittlig effekt fra vannkraft gjennom året.
d) Hvis gjennomsnittlig norsk husstand bruker 16 000 kWh/år, hvor mange husstander dekker vannkraften?`,
      hints: [
        'TWh = $10^{12}$ Wh = $10^9$ kWh.',
        'Gjennomsnittlig effekt: $P = E/t$, der $t = 8760$ timer per år.',
      ],
      solution: `**a)** $E_{\\text{vann}} = 0{,}90 \\cdot 155 = 139{,}5$ TWh.

**b)** $E_{\\text{vind}} = 0{,}08 \\cdot 155 = 12{,}4$ TWh.

**c)** $P_{\\text{gj}} = \\frac{E}{t} = \\frac{139{,}5 \\times 10^{12}}{8760 \\times 3600} = \\frac{139{,}5 \\times 10^{12}}{3{,}154 \\times 10^7} = 4{,}42 \\times 10^6$ W.
Eller enklere: $P = \\frac{139{,}5 \\times 10^6 \\text{ MWh}}{8760 \\text{ h}} = 15\\,920$ MW $\\approx 16$ GW.

**d)** Husstander: $\\frac{139{,}5 \\times 10^9}{16\\,000} = 8{,}72 \\times 10^6 \\approx 8{,}7$ millioner.

Norge har ca. 2,5 millioner husstander, så vannkraften dekker langt mer enn husstandsforbruket (industri bruker mye).`,
    },
    {
      id: 'fys2-5-6-ex7',
      number: '5.6.7',
      type: 'classic',
      difficulty: 'medium',
      topic: 'Pumpekraftverk',
      task: `Et pumpekraftverk pumper vann 400 m opp til et reservoar når strømprisene er lave, og produserer strøm når prisene er høye. Pumpen har effekt 100 MW.

a) Hvor mye vann (i m$^3$) pumpes opp per time?
b) Virkningsgraden for pumping er 85 % og for produksjon 90 %. Beregn total tur-retur virkningsgrad.
c) Hvis strømprisen er 0,30 kr/kWh ved pumping og 1,50 kr/kWh ved produksjon, er dette lønnsomt?`,
      hints: [
        'Effekt for pumping: $P = \\rho g h Q / \\eta_{\\text{pumpe}}$.',
        'Tur-retur: $\\eta_{\\text{total}} = \\eta_{\\text{pumpe}} \\cdot \\eta_{\\text{produksjon}}$.',
      ],
      solution: `**a) Volumstrøm ved pumping:**
$P_{\\text{pumpe}} = \\frac{\\rho g h Q}{\\eta}$, så $Q = \\frac{P \\cdot \\eta}{\\rho g h}$

Nei, pumpeeffekten er elektrisk input: $P_{\\text{el}} = 100$ MW.
Nyttig mekanisk effekt: $P_{\\text{mek}} = \\eta \\cdot P_{\\text{el}} = 0{,}85 \\cdot 100 = 85$ MW.
$P_{\\text{mek}} = \\rho g h Q$:
$Q = \\frac{85 \\times 10^6}{1000 \\cdot 9{,}81 \\cdot 400} = \\frac{85 \\times 10^6}{3{,}924 \\times 10^6} = 21{,}7$ m$^3$/s.

Per time: $21{,}7 \\cdot 3600 = 78\\,000$ m$^3$/time.

**b)** $\\eta_{\\text{total}} = 0{,}85 \\cdot 0{,}90 = 0{,}765 = 76{,}5\\%$.

**c) Lønnsomhet:**
For 1 kWh pumpet: Kostnad $= 1 \\cdot 0{,}30 = 0{,}30$ kr.
Energi tilbake: $0{,}765$ kWh.
Inntekt: $0{,}765 \\cdot 1{,}50 = 1{,}15$ kr.
Fortjeneste: $1{,}15 - 0{,}30 = 0{,}85$ kr per kWh pumpet.

**Ja, det er lønnsomt** – prisforskjellen mer enn kompenserer for energitapet.`,
    },
    {
      id: 'fys2-5-6-ex8',
      number: '5.6.8',
      type: 'classic',
      difficulty: 'vanskelig',
      topic: 'Komplett vindpark',
      task: `En vindpark består av 30 turbiner, hver med rotordiameter 120 m og effektkoeffisient $C_p = 0{,}40$. Parkens kapasitetsfaktor er 35 % (dvs. gjennomsnittlig produksjon er 35 % av maks).

a) Beregn maks effekt per turbin ved vindhastighet 13 m/s.
b) Beregn vindparkens totale makseffekt.
c) Beregn gjennomsnittlig effekt med kapasitetsfaktor.
d) Beregn årlig energiproduksjon i GWh.
e) Hvis overføringsspenningen er 132 kV og ledningsmotstand er 12 $\\Omega$, beregn det gjennomsnittlige effekttapet.`,
      hints: [
        '$A = \\pi r^2$.',
        'Kapasitetsfaktor: $P_{\\text{gj}} = CF \\cdot P_{\\text{maks}}$.',
        'Årlig energi: $E = P_{\\text{gj}} \\cdot 8760$ timer.',
      ],
      solution: `**a) Maks effekt per turbin:**
$A = \\pi \\cdot 60^2 = 11\\,310$ m$^2$.
$P = 0{,}40 \\cdot \\frac{1}{2} \\cdot 1{,}225 \\cdot 11\\,310 \\cdot 13^3$
$= 0{,}40 \\cdot 0{,}5 \\cdot 1{,}225 \\cdot 11\\,310 \\cdot 2197 = 6{,}08 \\times 10^6$ W = 6,08 MW.

**b) Parkens maks:**
$P_{\\text{park}} = 30 \\cdot 6{,}08 = 182$ MW.

**c) Gjennomsnittlig effekt:**
$P_{\\text{gj}} = 0{,}35 \\cdot 182 = 63{,}8$ MW.

**d) Årlig energi:**
$E = 63{,}8 \\times 10^3 \\cdot 8760 = 559 \\times 10^6$ kWh = 559 GWh.

**e) Effekttap (gjennomsnittlig):**
$I = \\frac{P_{\\text{gj}}}{V} = \\frac{63{,}8 \\times 10^6}{132 \\times 10^3} = 483$ A.
$P_{\\text{tap}} = I^2 R = (483)^2 \\cdot 12 = 2{,}80 \\times 10^6$ W = 2,8 MW.
Prosentandel: $2{,}8/63{,}8 = 4{,}4\\%$.`,
    },
    {
      id: 'fys2-5-6-ex9',
      number: '5.6.9',
      type: 'classic',
      difficulty: 'vanskelig',
      topic: 'HVDC vs. AC overføring',
      task: `En 500 km lang oversjøisk kabel skal overføre 1000 MW. Kabelmotstand: 0,050 $\\Omega$/km per leder (to ledere).

Sammenlign to alternativer:
a) AC ved 400 kV: Beregn strøm og effekttap.
b) HVDC ved 600 kV: Beregn strøm og effekttap.
c) Beregn energitapet per år (i GWh) for begge alternativer.
d) Hvis strømprisen er 0,80 kr/kWh, beregn den årlige verdien av spart energi ved å velge HVDC.`,
      hints: [
        '$R_{\\text{tot}} = 2 \\cdot 0{,}050 \\cdot 500$.',
        'Årlig energitap: $E_{\\text{tap}} = P_{\\text{tap}} \\cdot 8760$ timer.',
      ],
      solution: `$R_{\\text{tot}} = 2 \\cdot 0{,}050 \\cdot 500 = 50$ $\\Omega$.

**a) AC ved 400 kV:**
$I = 1000 \\times 10^6 / (400 \\times 10^3) = 2500$ A.
$P_{\\text{tap}} = (2500)^2 \\cdot 50 = 312{,}5$ MW.
Prosentandel: 31,3 %.

**b) HVDC ved 600 kV:**
$I = 1000 \\times 10^6 / (600 \\times 10^3) = 1667$ A.
$P_{\\text{tap}} = (1667)^2 \\cdot 50 = 138{,}9$ MW.
Prosentandel: 13,9 %.

**c) Årlig energitap:**
AC: $312{,}5 \\times 10^3 \\cdot 8760 = 2{,}74 \\times 10^9$ kWh = 2737 GWh.
HVDC: $138{,}9 \\times 10^3 \\cdot 8760 = 1{,}217 \\times 10^9$ kWh = 1217 GWh.

**d) Spart energi og verdi:**
$\\Delta E = 2737 - 1217 = 1520$ GWh.
Verdi: $1520 \\times 10^6 \\cdot 0{,}80 = 1{,}22 \\times 10^9$ kr $\\approx$ **1,2 milliarder kroner per år**.

(I praksis har HVDC også andre tap i konverterstasjonene, men nettobesparelsen er fortsatt enorm.)`,
    },
    {
      id: 'fys2-5-6-ex10',
      number: '5.6.10',
      type: 'classic',
      difficulty: 'vanskelig',
      topic: 'Bærekraft og fysikk',
      task: `Norge planlegger å bygge ut havvind med kapasitet 30 GW innen 2040.

a) Anta kapasitetsfaktor 42 %. Beregn gjennomsnittlig produksjon.
b) Beregn årlig energiproduksjon i TWh.
c) Sammenlign med Norges nåværende totale produksjon (155 TWh).
d) Hvor mange store vindturbiner (merkeeffekt 15 MW) trengs for å nå 30 GW?
e) Hvis gjennomsnittlig rotordiameter er 250 m, og turbinene plasseres med 10 rotordiametere avstand, hvilket areal (i km$^2$) trengs?`,
      hints: [
        'GW = $10^9$ W, TWh = $10^{12}$ Wh.',
        'Antall turbiner: $N = P_{\\text{total}}/P_{\\text{per turbin}}$.',
        'Avstand mellom turbiner: $d = 10 \\cdot D$.',
      ],
      solution: `**a)** $P_{\\text{gj}} = CF \\cdot P_{\\text{installert}} = 0{,}42 \\cdot 30 = 12{,}6$ GW.

**b)** $E = 12{,}6 \\times 10^6 \\cdot 8760 = 110 \\times 10^9$ kWh = **110 TWh**.

**c)** 110/155 = 71 %. Havvind kan potensielt produsere nesten like mye som hele dagens norske produksjon!

**d)** $N = 30\\,000/15 = 2000$ turbiner.

**e)** Avstand mellom turbiner: $d = 10 \\cdot 250 = 2500$ m = 2,5 km.
Areal per turbin (kvadratisk gitter): $(2{,}5)^2 = 6{,}25$ km$^2$.
Totalt areal: $2000 \\cdot 6{,}25 = 12\\,500$ km$^2$.

For sammenligning: Nordsjøens norske sektor er ca. 140 000 km$^2$.
Andel: $12\\,500/140\\,000 \\approx 9\\%$.

**Svar e):** Ca. 12 500 km$^2$ – ca. 9 % av norsk sokkel i Nordsjøen.`,
    },
  ],
};


// ============================================================================
// Eksport av alle kapitler i del 2
// ============================================================================

export const FYSIKK2_CHAPTERS_DEL2: Record<string, TextbookChapter> = {
  'fysikk2-5-3': CHAPTER_FYSIKK2_5_3,
  'fysikk2-5-4': CHAPTER_FYSIKK2_5_4,
  'fysikk2-5-5': CHAPTER_FYSIKK2_5_5,
  'fysikk2-5-6': CHAPTER_FYSIKK2_5_6,
};
