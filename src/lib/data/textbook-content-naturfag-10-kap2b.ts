/**
 * Tekstbok kapitler for Naturfag 10 - Seksjon 2B: Organisk kjemi (2.7-2.8)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.7: Organisk kjemi I – Hydrokarboner og fossile brensler
// LK20: utforske kjemiske reaksjoner, forklare massebevaring og gjøre rede
//        for betydningen av noen forbrenningsreaksjoner
// ============================================================================

export const CHAPTER_NAT10_2_7: TextbookChapter = {
  id: 'naturfag-10-2-7',
  courseId: 'naturfag-10',
  chapterNumber: '2.7',
  title: 'Organisk kjemi I – Hydrokarboner og fossile brensler',
  description: 'Lær om organisk kjemi, hydrokarboner (alkaner, alkener og alkyner), fossile brensler og forbrenningsreaksjoner.',
  estimatedMinutes: 60,
  competenceGoals: [
    'utforske kjemiske reaksjoner, forklare massebevaring og gjøre rede for betydningen av noen forbrenningsreaksjoner',
  ],
  content: [
    // ========================================================================
    // BLOKK 1: HVA ER ORGANISK KJEMI?
    // ========================================================================

    // ========== INTRODUKSJON ==========
    {
      id: 'nat10-2-7-intro',
      type: 'text',
      content: `## Organisk kjemi – kjemien til livet

Har du noen gang lurt på hva plast, bensin, mat og klærne dine har til felles? Alle disse stoffene inneholder **karbon** og tilhører et enormt felt innen kjemien som kalles **organisk kjemi**.

Organisk kjemi handler om kjemiske forbindelser som inneholder grunnstoffet karbon (C). Karbon er et helt spesielt grunnstoff fordi det kan danne lange kjeder og ringer med seg selv og med andre atomer – noe nesten ingen andre grunnstoffer kan gjøre like godt.

I dette kapitlet skal du lære om:
- Hva organisk kjemi er og hvorfor karbon er så spesielt
- De enkleste organiske forbindelsene: **hydrokarboner**
- Forskjellen mellom **mettede** og **umettede** hydrokarboner
- Hvordan **fossile brensler** har blitt dannet og brukes
- Hva som skjer under **forbrenning** av hydrokarboner`,
    },

    // ========== DEFINISJON: ORGANISK KJEMI ==========
    {
      id: 'nat10-2-7-def-organisk-kjemi',
      type: 'definition',
      title: 'Organisk kjemi',
      content: `**Organisk kjemi** er den delen av kjemien som handler om kjemiske forbindelser som inneholder grunnstoffet **karbon** (C).

De fleste organiske forbindelser inneholder også **hydrogen** (H), og mange inneholder i tillegg **oksygen** (O), **nitrogen** (N), **svovel** (S) eller andre grunnstoffer.

**Unntak:** Noen karbonforbindelser regnes som uorganiske:
- Karbondioksid (CO₂)
- Karbonmonoksid (CO)
- Karbonater (f.eks. CaCO₃)
- Karbider (f.eks. SiC)

**Historisk bakgrunn:** Navnet «organisk» kommer av at man opprinnelig trodde at disse stoffene bare kunne lages av levende organismer. I 1828 klarte Friedrich Wöhler å lage urea (et organisk stoff) fra uorganiske stoffer i laboratoriet, og denne myten ble knust.`,
    },

    // ========== TEKST: KARBON SOM GRUNNSTOFF ==========
    {
      id: 'nat10-2-7-karbon-grunnstoff',
      type: 'text',
      content: `## Karbon – et helt spesielt grunnstoff

Karbon (C) har atomnummer 6 og har **4 valenselektroner**. Dette betyr at hvert karbonatom kan danne **4 kovalente bindinger** med andre atomer.

### Hvorfor er 4 bindinger så viktig?

Tenk deg at karbon er som en Lego-kloss med fire knotter. Den kan koble seg til fire andre klosser på én gang! Dette gjør at karbon kan:

1. **Danne lange kjeder:** Karbonatomer kan binde seg til hverandre i kjeder med hundrevis eller tusenvis av atomer.

2. **Danne forgreinede kjeder:** Kjedene kan ha sidegrener.

3. **Danne ringer:** Karbonatomer kan binde seg sammen i ring-strukturer.

4. **Danne enkelt-, dobbelt- og trippelbindinger:** Karbon kan dele 1, 2 eller 3 elektronpar med et annet atom.

### Karbon i naturen

Karbon finnes overalt:
- I **kroppen din** – proteiner, DNA, fett, karbohydrater
- I **planter** – cellulose, stivelse, klorofyll
- I **maten** du spiser
- I **fossile brensler** – olje, gass, kull
- I **plast** og **syntetiske materialer**

Det finnes over **10 millioner** kjente organiske forbindelser – langt flere enn alle uorganiske forbindelser til sammen! Alt dette takket være karbonets unike evne til å binde seg på mange forskjellige måter.

### Organisk vs. uorganisk

| Egenskap | Organiske stoffer | Uorganiske stoffer |
|----------|-------------------|---------------------|
| Inneholder | Alltid karbon (C) | Ikke nødvendigvis karbon |
| Eksempler | Metan, etanol, glukose | Vann, NaCl, jernoksid |
| Smeltepunkt | Ofte lavt | Ofte høyt |
| Brennbart | Ofte brennbart | Sjelden brennbart |
| Løselighet i vann | Ofte lite løselig | Ofte løselig |`,
    },

    // ========== EKSEMPEL: ORGANISK VS. UORGANISK ==========
    {
      id: 'nat10-2-7-ex-organisk-uorganisk',
      type: 'example',
      title: 'Eksempel: Organiske og uorganiske stoffer',
      problem: `Hvilke av disse stoffene er organiske, og hvilke er uorganiske?

a) Sukker (C₁₂H₂₂O₁₁)
b) Bordsalt (NaCl)
c) Metan (CH₄)
d) Vann (H₂O)
e) Etanol (C₂H₅OH)
f) Karbondioksid (CO₂)`,
      solution: `**Organiske stoffer:**

- **a) Sukker (C₁₂H₂₂O₁₁)** – Organisk. Inneholder karbon bundet til hydrogen og oksygen. Finnes i levende organismer.
- **c) Metan (CH₄)** – Organisk. Et hydrokarbon (karbon + hydrogen). Finnes i naturgass.
- **e) Etanol (C₂H₅OH)** – Organisk. Inneholder karbon bundet til hydrogen og oksygen. Alkohol.

**Uorganiske stoffer:**

- **b) Bordsalt (NaCl)** – Uorganisk. Inneholder ikke karbon.
- **d) Vann (H₂O)** – Uorganisk. Inneholder ikke karbon.
- **f) Karbondioksid (CO₂)** – Uorganisk. Selv om den inneholder karbon, regnes CO₂ som uorganisk fordi det er en enkel karbonforbindelse uten C–H-bindinger.

**Huskeregel:** De fleste stoffer med karbon bundet til hydrogen (C–H-bindinger) er organiske. Stoffer uten karbon, eller enkle karbonforbindelser som CO₂ og CaCO₃, er uorganiske.`,
    },

    // ========== OPPGAVE 1: MC – ORGANISK KJEMI ==========
    {
      id: 'nat10-2-7-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-7-oppg-1',
        number: '2.7.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva mener vi med organisk kjemi?',
        options: [
          { id: 'a', text: 'Kjemi som handler om forbindelser som inneholder karbon', isCorrect: true },
          { id: 'b', text: 'Kjemi som bare handler om stoffer fra levende organismer', isCorrect: false },
          { id: 'c', text: 'Kjemi som handler om metalliske grunnstoffer', isCorrect: false },
          { id: 'd', text: 'Kjemi som handler om syrer og baser', isCorrect: false },
        ],
        solution: `**Riktig svar: Kjemi som handler om forbindelser som inneholder karbon**

Organisk kjemi er studiet av kjemiske forbindelser som inneholder karbon (C). Opprinnelig trodde man at organiske stoffer bare kunne dannes i levende organismer, men dette ble motbevist i 1828 da Wöhler syntetiserte urea i laboratoriet.

I dag vet vi at organiske forbindelser kan lages både i naturen og i laboratoriet. Det som definerer dem er at de inneholder karbon, vanligvis bundet til hydrogen og ofte også oksygen, nitrogen eller andre grunnstoffer.`,
      },
    },

    // ========== OPPGAVE 2: KLASSISK – IDENTIFISER ORGANISKE STOFFER ==========
    {
      id: 'nat10-2-7-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-7-oppg-2',
        number: '2.7.2',
        type: 'classic',
        difficulty: 'lett',
        task: `Avgjør om hvert av disse stoffene er organisk eller uorganisk. Begrunn svaret ditt.

a) Propan (C₃H₈)
b) Svovelsyre (H₂SO₄)
c) Eddiksyre (CH₃COOH)
d) Jernoksid (Fe₂O₃)
e) Glukose (C₆H₁₂O₆)`,
        multipleChoiceOptions: [
          'a) Organisk, b) Uorganisk, c) Organisk, d) Uorganisk, e) Organisk',
          'a) Uorganisk, b) Uorganisk, c) Organisk, d) Uorganisk, e) Organisk',
          'a) Organisk, b) Organisk, c) Organisk, d) Uorganisk, e) Organisk',
          'a) Organisk, b) Uorganisk, c) Uorganisk, d) Uorganisk, e) Organisk',
        ],
        solution: `**a) Propan (C₃H₈) – Organisk**
Inneholder karbon bundet til hydrogen. Det er et hydrokarbon og en typisk organisk forbindelse. Brukes som gassbrensel.

**b) Svovelsyre (H₂SO₄) – Uorganisk**
Inneholder ikke karbon. Det er en uorganisk syre som består av hydrogen, svovel og oksygen.

**c) Eddiksyre (CH₃COOH) – Organisk**
Inneholder karbon bundet til hydrogen og oksygen. Det er en organisk syre som finnes i eddik.

**d) Jernoksid (Fe₂O₃) – Uorganisk**
Inneholder ikke karbon. Det er en uorganisk forbindelse av jern og oksygen (rust).

**e) Glukose (C₆H₁₂O₆) – Organisk**
Inneholder karbon bundet til hydrogen og oksygen. Det er et sukker som brukes som energikilde i kroppen.

**Huskeregel:** Se etter C–H-bindinger i molekylformelen. Stoffer med karbon bundet til hydrogen er nesten alltid organiske.`,
      },
    },

    // ========================================================================
    // BLOKK 2: ALKANER (METTEDE HYDROKARBONER)
    // ========================================================================

    // ========== DEFINISJON: HYDROKARBON OG ALKAN ==========
    {
      id: 'nat10-2-7-def-alkan',
      type: 'definition',
      title: 'Hydrokarbon og alkan',
      content: `**Hydrokarbon:**
En kjemisk forbindelse som bare inneholder grunnstoffene **karbon** (C) og **hydrogen** (H).

**Alkan (mettet hydrokarbon):**
Et hydrokarbon der alle bindingene mellom karbonatomene er **enkeltbindinger** (C–C). Alkanene er «mettede» fordi hvert karbonatom er bundet til så mange hydrogenatomer som mulig.

**Generell formel for alkaner:**
CₙH₂ₙ₊₂

der n = antall karbonatomer.

**Eksempel:** Metan (CH₄) har n = 1, og formelen gir: C₁H₂₍₁₎₊₂ = CH₄ ✓`,
    },

    // ========== TEKST: HOMOLOG REKKE ==========
    {
      id: 'nat10-2-7-homolog-rekke',
      type: 'text',
      content: `## Alkanene – den homologe rekken

Alkanene danner en **homolog rekke** – en serie forbindelser der hvert neste ledd har én ekstra CH₂-gruppe. Det betyr at formelen øker regelmessig.

### De åtte første alkanene

| Navn | Molekylformel | Antall C | Antall H | Kokepunkt (°C) | Fase (romtemp.) |
|------|---------------|----------|----------|-----------------|------------------|
| Metan | CH₄ | 1 | 4 | −162 | Gass |
| Etan | C₂H₆ | 2 | 6 | −89 | Gass |
| Propan | C₃H₈ | 3 | 8 | −42 | Gass |
| Butan | C₄H₁₀ | 4 | 10 | −1 | Gass |
| Pentan | C₅H₁₂ | 5 | 12 | 36 | Væske |
| Heksan | C₆H₁₄ | 6 | 14 | 69 | Væske |
| Heptan | C₇H₁₆ | 7 | 16 | 98 | Væske |
| Oktan | C₈H₁₈ | 8 | 18 | 126 | Væske |

### Navnsetting

Legg merke til mønsteret i navnene:
- **met-** = 1 karbon
- **et-** = 2 karbon
- **prop-** = 3 karbon
- **but-** = 4 karbon
- **pent-** = 5 karbon
- **heks-** = 6 karbon
- **hept-** = 7 karbon
- **okt-** = 8 karbon

Endelsen **-an** forteller at det er et alkan (bare enkeltbindinger).

### Huskeregel

«**M**amma **E**r **P**å **B**unn – **P**appa **H**ar **H**øy **O**ppvask»

Første bokstav i hvert ord gir deg rekkefølgen: Metan, Etan, Propan, Butan, Pentan, Heksan, Heptan, Oktan.

### Molekylformel vs. strukturformel

**Molekylformel** viser bare hvilke atomer molekylet inneholder og hvor mange av hvert:
- Propan: C₃H₈

**Strukturformel** viser hvordan atomene er bundet til hverandre:

Propan:

\`\`\`
    H H H
    | | |
H — C — C — C — H
    | | |
    H H H
\`\`\`

I strukturformelen ser du at:
- Hvert C-atom har 4 bindinger (4 streker)
- Hvert H-atom har 1 binding (1 strek)
- Karbonatomene er koblet i en kjede`,
    },

    // ========== EKSEMPEL: STRUKTURFORMEL FOR PROPAN ==========
    {
      id: 'nat10-2-7-ex-strukturformel',
      type: 'example',
      title: 'Eksempel: Tegne strukturformel for propan',
      problem: `Propan har molekylformelen C₃H₈.

a) Tegn strukturformelen til propan.
b) Bekreft at formelen C₃H₈ stemmer med den generelle formelen CₙH₂ₙ₊₂.
c) Hvor mange bindinger har hvert karbonatom?`,
      solution: `**a) Strukturformel for propan:**

Steg 1: Tegn karbonkjeden (3 C-atomer i rekke):

\`\`\`
C — C — C
\`\`\`

Steg 2: Fyll på med hydrogen slik at hvert C har 4 bindinger:

\`\`\`
    H H H
    | | |
H — C — C — C — H
    | | |
    H H H
\`\`\`

Det midterste karbonatomet er bundet til 2 andre karbonatomer og 2 hydrogen.
De to ytterste karbonatomene er bundet til 1 karbonatom og 3 hydrogen.

---

**b) Kontroll med generell formel:**

CₙH₂ₙ₊₂ der n = 3:

H = 2 × 3 + 2 = 8

Formelen gir C₃H₈ ✓ Stemmer!

---

**c) Bindinger per karbonatom:**

Hvert karbonatom har **4 bindinger** – dette gjelder alltid for karbon i organiske forbindelser.

- Ytterste C: 1 binding til C + 3 bindinger til H = 4 bindinger ✓
- Midterste C: 2 bindinger til C + 2 bindinger til H = 4 bindinger ✓`,
    },

    // ========== OPPGAVE 3: MC – ALKANER ==========
    {
      id: 'nat10-2-7-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-7-oppg-3',
        number: '2.7.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den generelle formelen for alkaner?',
        options: [
          { id: 'a', text: 'CₙH₂ₙ', isCorrect: false },
          { id: 'b', text: 'CₙH₂ₙ₊₂', isCorrect: true },
          { id: 'c', text: 'CₙH₂ₙ₋₂', isCorrect: false },
          { id: 'd', text: 'CₙHₙ', isCorrect: false },
        ],
        solution: `**Riktig svar: CₙH₂ₙ₊₂**

Alkaner er mettede hydrokarboner med bare enkeltbindinger. Den generelle formelen er CₙH₂ₙ₊₂.

La oss sjekke med noen eksempler:
- Metan: n = 1 → C₁H₄ = CH₄ ✓
- Etan: n = 2 → C₂H₆ ✓
- Propan: n = 3 → C₃H₈ ✓
- Butan: n = 4 → C₄H₁₀ ✓

De andre formlene tilhører andre typer hydrokarboner:
- CₙH₂ₙ er den generelle formelen for **alkener** (med én dobbeltbinding)
- CₙH₂ₙ₋₂ er den generelle formelen for **alkyner** (med én trippelbinding)`,
      },
    },

    // ========== OPPGAVE 4: KLASSISK – NAVNGI ALKANER ==========
    {
      id: 'nat10-2-7-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-7-oppg-4',
        number: '2.7.4',
        type: 'classic',
        difficulty: 'lett',
        task: `Navngi disse alkanene ut fra molekylformelen:

a) CH₄
b) C₂H₆
c) C₅H₁₂
d) C₈H₁₈

Bekreft i hvert tilfelle at formelen stemmer med CₙH₂ₙ₊₂.`,
        multipleChoiceOptions: [
          'a) Metan, b) Etan, c) Pentan, d) Oktan',
          'a) Metan, b) Etan, c) Heksan, d) Oktan',
          'a) Metan, b) Etan, c) Pentan, d) Heptan',
          'a) Metanol, b) Etanol, c) Pentanol, d) Oktanol',
        ],
        solution: `**a) CH₄ – Metan**
n = 1 karbon. Kontroll: CₙH₂ₙ₊₂ = C₁H₂₍₁₎₊₂ = CH₄ ✓

**b) C₂H₆ – Etan**
n = 2 karbon. Kontroll: C₂H₂₍₂₎₊₂ = C₂H₆ ✓

**c) C₅H₁₂ – Pentan**
n = 5 karbon (pent- = 5). Kontroll: C₅H₂₍₅₎₊₂ = C₅H₁₂ ✓

**d) C₈H₁₈ – Oktan**
n = 8 karbon (okt- = 8). Kontroll: C₈H₂₍₈₎₊₂ = C₈H₁₈ ✓

**Navneprefikser å huske:**
met- (1), et- (2), prop- (3), but- (4), pent- (5), heks- (6), hept- (7), okt- (8)

Endelsen **-an** betyr at det er et alkan med bare enkeltbindinger.`,
      },
    },

    // ========================================================================
    // BLOKK 3: ALKENER OG ALKYNER (UMETTEDE HYDROKARBONER)
    // ========================================================================

    // ========== DEFINISJON: ALKEN OG ALKYN ==========
    {
      id: 'nat10-2-7-def-alken-alkyn',
      type: 'definition',
      title: 'Alken, alkyn og umettede hydrokarboner',
      content: `**Umettet hydrokarbon:**
Et hydrokarbon som inneholder minst én **dobbeltbinding** (C=C) eller **trippelbinding** (C≡C) mellom karbonatomene. Kalles «umettet» fordi det er mulig å legge til flere hydrogenatomer.

**Alken:**
Et umettet hydrokarbon med minst én **dobbeltbinding** (C=C).
Generell formel: **CₙH₂ₙ** (for alkener med én dobbeltbinding)
Navneending: **-en**

**Alkyn:**
Et umettet hydrokarbon med minst én **trippelbinding** (C≡C).
Generell formel: **CₙH₂ₙ₋₂** (for alkyner med én trippelbinding)
Navneending: **-yn**

**Dobbeltbinding:** To karbonatomer deler **2 elektronpar** (4 elektroner).
**Trippelbinding:** To karbonatomer deler **3 elektronpar** (6 elektroner).`,
    },

    // ========== TEKST: ALKENER OG ALKYNER ==========
    {
      id: 'nat10-2-7-alkener-alkyner',
      type: 'text',
      content: `## Umettede hydrokarboner – alkener og alkyner

Mens alkanene bare har enkeltbindinger, finnes det hydrokarboner med **dobbeltbindinger** og **trippelbindinger**. Disse kalles **umettede** fordi de kan reagere med hydrogen og «mettes».

### Alkener (dobbeltbinding C=C)

De enkleste alkenene:

| Navn | Molekylformel | Strukturformel (forenklet) |
|------|---------------|---------------------------|
| Eten (etylen) | C₂H₄ | H₂C=CH₂ |
| Propen (propylen) | C₃H₆ | CH₃–CH=CH₂ |
| Buten | C₄H₈ | CH₃–CH₂–CH=CH₂ |

**Eten (C₂H₄)** er det enkleste alkenet. Det er en fargeløs gass som brukes til å lage plast (polyeten). Eten produseres også naturlig av frukt og får frukt til å modne!

### Alkyner (trippelbinding C≡C)

De enkleste alkynene:

| Navn | Molekylformel | Strukturformel (forenklet) |
|------|---------------|---------------------------|
| Etyn (acetylen) | C₂H₂ | HC≡CH |
| Propyn | C₃H₄ | CH₃–C≡CH |

**Etyn (C₂H₂)** er det enkleste alkynet. Det er kjent som acetylen og brukes i sveising (acetylenflammen kan nå over 3000 °C!).

### Forskjellen mellom mettede og umettede hydrokarboner

| Egenskap | Mettede (alkaner) | Umettede (alkener/alkyner) |
|----------|-------------------|-----------------------------|
| Bindinger | Bare enkeltbindinger | Dobbelt- eller trippelbindinger |
| Formel | CₙH₂ₙ₊₂ | CₙH₂ₙ (alkener) / CₙH₂ₙ₋₂ (alkyner) |
| Ending | -an | -en / -yn |
| Reaktivitet | Mindre reaktive | Mer reaktive |
| Kan «mettes»? | Nei (allerede mettet) | Ja (kan addere hydrogen) |

### Hvorfor er umettede mer reaktive?

Dobbelt- og trippelbindinger inneholder **ekstra elektronpar** som er lettere tilgjengelige for kjemiske reaksjoner. Når en alken reagerer med hydrogen (H₂), brytes dobbeltbindingen og hydrogenet legges til – da blir det en alkan:

**Eten + hydrogen → etan:**
C₂H₄ + H₂ → C₂H₆

Denne typen reaksjon kalles en **addisjonsreaksjon**.`,
    },

    // ========== EKSEMPEL: ETAN VS. ETEN ==========
    {
      id: 'nat10-2-7-ex-etan-eten',
      type: 'example',
      title: 'Eksempel: Sammenlign etan og eten',
      problem: `Etan (C₂H₆) er et alkan, og eten (C₂H₄) er et alken. Begge har 2 karbonatomer.

a) Tegn strukturformelen til etan og eten.
b) Hva er forskjellen mellom de to molekylene?
c) Hvilket molekyl er mest reaktivt? Forklar hvorfor.
d) Hva skjer hvis eten reagerer med hydrogen (H₂)?`,
      solution: `**a) Strukturformler:**

**Etan (C₂H₆) – alkan:**
\`\`\`
    H H
    | |
H — C — C — H
    | |
    H H
\`\`\`
Enkeltbinding mellom karbonatomene (C–C).

**Eten (C₂H₄) – alken:**
\`\`\`
    H   H
     \\ /
      C = C
     / \\
    H   H
\`\`\`
Dobbeltbinding mellom karbonatomene (C=C).

---

**b) Forskjeller:**

| | Etan | Eten |
|---|---|---|
| Formel | C₂H₆ | C₂H₄ |
| Binding mellom C | Enkeltbinding (C–C) | Dobbeltbinding (C=C) |
| Type | Alkan (mettet) | Alken (umettet) |
| Antall H | 6 | 4 |
| Ending | -an | -en |

Eten har **2 færre hydrogenatomer** enn etan fordi dobbeltbindingen «bruker opp» plassene som ellers ville hatt hydrogen.

---

**c) Reaktivitet:**

**Eten er mest reaktivt.**

Dobbeltbindingen (C=C) gjør eten mer reaktiv fordi:
- Dobbeltbindingen inneholder et ekstra elektronpar som er lettere tilgjengelig for reaksjoner
- Bindingen kan brytes, og nye atomer kan kobles på (addisjonsreaksjon)

Etan har bare stabile enkeltbindinger og reagerer sjeldnere.

---

**d) Eten + hydrogen:**

Dobbeltbindingen brytes, og hvert karbonatom binder seg til et ekstra hydrogenatom:

**C₂H₄ + H₂ → C₂H₆**

Eten (alken) + hydrogen → etan (alkan)

Dette er en **addisjonsreaksjon** – hydrogen «legges til» dobbeltbindingen. Produktet er et mettet hydrokarbon.`,
    },

    // ========== OPPGAVE 5: MC – METTET VS. UMETTET ==========
    {
      id: 'nat10-2-7-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-7-oppg-5',
        number: '2.7.5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner et umettet hydrokarbon?',
        options: [
          { id: 'a', text: 'Det har bare enkeltbindinger mellom karbonatomene', isCorrect: false },
          { id: 'b', text: 'Det har minst én dobbeltbinding eller trippelbinding mellom karbonatomene', isCorrect: true },
          { id: 'c', text: 'Det inneholder oksygen i tillegg til karbon og hydrogen', isCorrect: false },
          { id: 'd', text: 'Det har alltid flere enn 8 karbonatomer', isCorrect: false },
        ],
        solution: `**Riktig svar: Det har minst én dobbeltbinding eller trippelbinding mellom karbonatomene**

Et **umettet** hydrokarbon inneholder dobbeltbindinger (C=C) eller trippelbindinger (C≡C). Navnet «umettet» betyr at det er mulig å legge til flere hydrogenatomer ved å bryte disse bindingene.

- **Alkener** har minst én dobbeltbinding (C=C), f.eks. eten C₂H₄
- **Alkyner** har minst én trippelbinding (C≡C), f.eks. etyn C₂H₂

Til sammenligning er **mettede** hydrokarboner (alkaner) «fulle» av hydrogen og har bare enkeltbindinger.`,
      },
    },

    // ========== OPPGAVE 6: KLASSISK – TEGN STRUKTURFORMLER ==========
    {
      id: 'nat10-2-7-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-7-oppg-6',
        number: '2.7.6',
        type: 'classic',
        difficulty: 'medium',
        task: `a) Tegn strukturformelen til eten (C₂H₄). Marker dobbeltbindingen tydelig.
b) Tegn strukturformelen til etyn (C₂H₂). Marker trippelbindingen tydelig.
c) Bruk de generelle formlene for alkaner (CₙH₂ₙ₊₂), alkener (CₙH₂ₙ) og alkyner (CₙH₂ₙ₋₂) til å finne molekylformelen til et alkan, alken og alkyn med 4 karbonatomer.`,
        multipleChoiceOptions: [
          'c) Butan C₄H₁₀, buten C₄H₈, butyn C₄H₆',
          'c) Butan C₄H₈, buten C₄H₆, butyn C₄H₄',
          'c) Butan C₄H₁₀, buten C₄H₁₀, butyn C₄H₈',
          'c) Butan C₄H₁₂, buten C₄H₁₀, butyn C₄H₈',
        ],
        solution: `**a) Strukturformel for eten (C₂H₄):**

\`\`\`
    H   H
     \\ /
      C = C
     / \\
    H   H
\`\`\`

Dobbeltbindingen (=) mellom de to karbonatomene betyr at de deler 2 elektronpar. Hvert karbonatom har fortsatt 4 bindinger totalt: 2 til hydrogen og 2 i dobbeltbindingen.

---

**b) Strukturformel for etyn (C₂H₂):**

\`\`\`
H — C ≡ C — H
\`\`\`

Trippelbindingen (≡) betyr at de to karbonatomene deler 3 elektronpar. Hvert karbonatom har 4 bindinger: 1 til hydrogen og 3 i trippelbindingen.

---

**c) Forbindelser med 4 karbonatomer (n = 4):**

**Alkan (CₙH₂ₙ₊₂):**
C₄H₂₍₄₎₊₂ = C₄H₁₀ → **Butan**

**Alken (CₙH₂ₙ):**
C₄H₂₍₄₎ = C₄H₈ → **Buten**

**Alkyn (CₙH₂ₙ₋₂):**
C₄H₂₍₄₎₋₂ = C₄H₆ → **Butyn**

Merk at alkenet har 2 færre hydrogen enn alkanet, og alkynet har 4 færre hydrogen enn alkanet. Dette skyldes dobbelt- og trippelbindingene.`,
      },
    },

    // ========================================================================
    // BLOKK 4: EGENSKAPER OG KOKEPUNKT
    // ========================================================================

    // ========== TEKST: EGENSKAPER OG KOKEPUNKT ==========
    {
      id: 'nat10-2-7-egenskaper-kokepunkt',
      type: 'text',
      content: `## Egenskaper og kokepunkt hos hydrokarboner

Hydrokarboner har noen felles egenskaper som henger sammen med deres molekylstruktur.

### Intermolekylære krefter

Mellom hydrokarbonmolekyler virker det svake tiltrekningskrefter kalt **Van der Waals-krefter** (også kalt London-krefter). Disse kreftene oppstår fordi elektronene i molekylene beveger seg og skaper midlertidige ladningsforskjeller.

**Viktig regel:** Jo **større** molekylet er (jo lengre karbonkjede), desto **sterkere** er Van der Waals-kreftene.

### Kokepunkt

Kokepunktet til et hydrokarbon avhenger av hvor sterke de intermolekylære kreftene er:

- **Korte kjeder** (1–4 C) → svake krefter → **lavt kokepunkt** → **gass** ved romtemperatur
- **Middels kjeder** (5–17 C) → middels krefter → **middels kokepunkt** → **væske** ved romtemperatur
- **Lange kjeder** (18+ C) → sterke krefter → **høyt kokepunkt** → **fast stoff** ved romtemperatur

### Eksempler på kokepunkt

| Alkan | Formel | Antall C | Kokepunkt (°C) | Fase |
|-------|--------|----------|-----------------|------|
| Metan | CH₄ | 1 | −162 | Gass |
| Etan | C₂H₆ | 2 | −89 | Gass |
| Propan | C₃H₈ | 3 | −42 | Gass |
| Butan | C₄H₁₀ | 4 | −1 | Gass |
| Pentan | C₅H₁₂ | 5 | 36 | Væske |
| Oktan | C₈H₁₈ | 8 | 126 | Væske |
| Dekan | C₁₀H₂₂ | 10 | 174 | Væske |
| Eikosan | C₂₀H₄₂ | 20 | 343 | Fast stoff |

### Løselighet

Hydrokarboner er **upolare** molekyler. Derfor:

- **Lite løselige i vann** (vann er polart – «likt løser likt»)
- **Godt løselige i andre upolare stoffer** (f.eks. andre hydrokarboner, fett, olje)

Dette er grunnen til at olje og vann ikke blander seg! Olje er et hydrokarbon, og vann er polart – de er for forskjellige til å løse seg i hverandre.

### Tetthet

De fleste hydrokarboner er **lettere enn vann** (tetthet < 1,0 g/cm³). Derfor flyter olje på vann.`,
    },

    // ========== EKSEMPEL: METAN VS. OKTAN ==========
    {
      id: 'nat10-2-7-ex-metan-oktan',
      type: 'example',
      title: 'Eksempel: Hvorfor er metan en gass, men oktan en væske?',
      problem: `Metan (CH₄) er en gass ved romtemperatur, mens oktan (C₈H₁₈) er en væske.

a) Forklar hvorfor metan har lavere kokepunkt enn oktan.
b) Hva slags krefter virker mellom hydrokarbonmolekyler?
c) Hva har størrelsen på molekylet å si for disse kreftene?`,
      solution: `**a) Forklaring:**

Metan (CH₄) har kokepunkt −162 °C, mens oktan (C₈H₁₈) har kokepunkt 126 °C.

Kokepunktet bestemmes av hvor sterke de **intermolekylære kreftene** er – altså kreftene mellom molekylene. Jo sterkere krefter, desto mer energi (høyere temperatur) trengs for å skille molekylene fra hverandre og gjøre stoffet til gass.

**Metan** er et lite molekyl med bare 1 karbonatom og 4 hydrogenatomer. De intermolekylære kreftene er **svake**, så det kreves lite energi for å gjøre metan til gass.

**Oktan** er et mye større molekyl med 8 karbonatomer og 18 hydrogenatomer. De intermolekylære kreftene er **mye sterkere**, så det kreves mer energi for å gjøre oktan til gass.

---

**b) Intermolekylære krefter:**

Mellom hydrokarbonmolekyler virker **Van der Waals-krefter** (London-krefter). Dette er svake, midlertidige tiltrekningskrefter som oppstår fordi elektronene i molekylene stadig beveger seg og skaper øyeblikkelige ladningsforskjeller.

---

**c) Størrelse og krefter:**

Jo **større** molekylet er:
- Desto **flere elektroner** har det
- Desto **større kontaktflate** har det med nabomolekylene
- Desto **sterkere** blir Van der Waals-kreftene

Oktan (26 atomer) har mye større kontaktflate enn metan (5 atomer), og derfor sterkere intermolekylære krefter. Dette gir høyere kokepunkt og gjør at oktan er væske ved romtemperatur.`,
    },

    // ========== OPPGAVE 7: KLASSISK – RANGER ETTER KOKEPUNKT ==========
    {
      id: 'nat10-2-7-exercise-7',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-7-oppg-7',
        number: '2.7.7',
        type: 'classic',
        difficulty: 'medium',
        task: `Ranger disse alkanene etter kokepunkt, fra lavest til høyest. Forklar hvorfor rekkefølgen blir slik.

Heksan (C₆H₁₄), Etan (C₂H₆), Butan (C₄H₁₀), Metan (CH₄), Pentan (C₅H₁₂)`,
        multipleChoiceOptions: [
          'Metan < Etan < Butan < Pentan < Heksan',
          'Etan < Metan < Butan < Pentan < Heksan',
          'Metan < Etan < Pentan < Butan < Heksan',
          'Heksan < Pentan < Butan < Etan < Metan',
        ],
        solution: `**Rekkefølge fra lavest til høyest kokepunkt:**

**Metan (CH₄)** < **Etan (C₂H₆)** < **Butan (C₄H₁₀)** < **Pentan (C₅H₁₂)** < **Heksan (C₆H₁₄)**

Med kokepunkter:
1. Metan: −162 °C (1 karbon)
2. Etan: −89 °C (2 karbon)
3. Butan: −1 °C (4 karbon)
4. Pentan: 36 °C (5 karbon)
5. Heksan: 69 °C (6 karbon)

**Forklaring:**

Kokepunktet øker med **kjedelivet** (antall karbonatomer) fordi:

1. Lengre kjeder har **flere elektroner** og **større kontaktflate** mellom molekylene.
2. Dette gir **sterkere Van der Waals-krefter** mellom molekylene.
3. Sterkere krefter betyr at det trengs **mer energi** (høyere temperatur) for å gjøre stoffet til gass.

**Merk:** Metan, etan og butan er gasser ved romtemperatur (kokepunkt under 20 °C), mens pentan og heksan er væsker.`,
      },
    },

    // ========================================================================
    // BLOKK 5: FOSSILE BRENSLER
    // ========================================================================

    // ========== DEFINISJON: FOSSILE BRENSLER ==========
    {
      id: 'nat10-2-7-def-fossile-brensler',
      type: 'definition',
      title: 'Fossile brensler',
      content: `**Fossile brensler** er energirike stoffer som er dannet av rester av planter og dyr som levde for millioner av år siden. Gjennom langvarig trykk og varme i jordskorpen er disse restene omdannet til karbonholdige brensler.

De tre viktigste fossile brenslene er:
- **Naturgass** – hovedsakelig metan (CH₄)
- **Råolje (petroleum)** – blanding av mange forskjellige hydrokarboner
- **Kull** – fast karbon med varierende innhold av hydrogen og andre grunnstoffer

Fossile brensler er **ikke-fornybare** energikilder – de tar millioner av år å danne og brukes opp mye raskere enn de produseres.`,
    },

    // ========== TEKST: FOSSILE BRENSLER ==========
    {
      id: 'nat10-2-7-fossile-brensler',
      type: 'text',
      content: `## Fossile brensler

Fossile brensler er verdens viktigste energikilde og dekker i dag omtrent **80 %** av verdens energibehov. Men de har også store ulemper.

### Hvordan ble fossile brensler dannet?

**For 300–400 millioner år siden:**
1. Planter og alger vokste i hav og på land
2. Når de døde, ble restene dekket av sand og leire
3. Over millioner av år ble lagene presset dypere ned i jordskorpen
4. Høyt trykk og temperatur omdannet de organiske restene til hydrokarboner
5. Resultatet ble naturgass, olje eller kull, avhengig av forholdene

### Naturgass

- Hovedsakelig **metan** (CH₄), med litt etan, propan og butan
- Finnes i lommer i berggrunn, ofte sammen med olje
- Brenner rent og gir **mindre CO₂** per energienhet enn olje og kull
- Norge er en stor produsent av naturgass fra Nordsjøen

### Råolje (petroleum)

Råolje er en kompleks blanding av hundrevis av forskjellige hydrokarboner med ulik kjedelivet. For å skille disse stoffene fra hverandre bruker man **destillasjon**.

### Destillasjon av råolje

I et **destillasjonstårn** (raffineri) varmes råoljen opp, og de ulike komponentene skilles ved sine forskjellige kokepunkter:

| Produkt | Kjedelivet (ca.) | Kokepunkt (°C) | Bruksområde |
|---------|-------------------|-----------------|-------------|
| Gass (metan, etan, propan) | C₁–C₄ | Under 30 | Oppvarming, matlaging |
| Bensin | C₅–C₁₂ | 30–180 | Bilbrensel |
| Parafin/Flydrivstoff | C₁₂–C₁₅ | 180–260 | Flybensin, fyring |
| Diesel | C₁₅–C₂₀ | 260–340 | Lastebiler, busser |
| Smøreolje | C₂₀–C₃₅ | 340–500 | Smøremiddel |
| Asfalt/Bitumen | C₃₅+ | Over 500 | Veibygging |

**Prinsippet:** Stoffer med **korte kjeder** (lavt kokepunkt) stiger opp og samles øverst i tårnet. Stoffer med **lange kjeder** (høyt kokepunkt) forblir nederst.

### Kull

- Dannet av landplanter som ble begravet for millioner av år siden
- Inneholder mest **karbon**, men også hydrogen, oksygen, svovel og nitrogen
- Tre typer: **brunkull** (minst karbon), **steinkull**, **antrasitt** (mest karbon)
- Gir **mest CO₂** per energienhet av de fossile brenslene
- Brukes mest til kraftproduksjon (kull-kraftverk)`,
    },

    // ========== EKSEMPEL: DESTILLASJON AV RÅOLJE ==========
    {
      id: 'nat10-2-7-ex-destillasjon',
      type: 'example',
      title: 'Eksempel: Destillasjon av råolje',
      problem: `I et destillasjonstårn varmes råolje opp og separeres i ulike fraksjoner basert på kokepunkt.

a) Forklar kort prinsippet bak destillasjon av råolje.
b) Hvilken fraksjon har lavest kokepunkt, og hvor samles den i tårnet?
c) Hvilken fraksjon har høyest kokepunkt, og hvor befinner den seg i tårnet?
d) Hvorfor har bensin lavere kokepunkt enn diesel?`,
      solution: `**a) Prinsippet:**

Råolje er en blanding av mange hydrokarboner med ulike kokepunkter. I destillasjonstårnet:

1. Råoljen varmes opp til ca. 400 °C slik at det meste fordamper
2. Dampene stiger oppover i tårnet
3. Tårnet er **varmest nederst** og **kaldest øverst**
4. Stoffer med **høyt kokepunkt** kondenserer (blir væske) langt nede i tårnet
5. Stoffer med **lavt kokepunkt** stiger høyere opp før de kondenserer

Slik skilles de ulike produktene fra hverandre basert på kokepunkt.

---

**b) Lavest kokepunkt:**

**Gass** (metan, etan, propan, butan) har lavest kokepunkt (under 30 °C).

Gassene samles **øverst** i tårnet fordi de ikke kondenserer – de er allerede gasser ved de temperaturene som finnes i tårnet.

---

**c) Høyest kokepunkt:**

**Asfalt/bitumen** har høyest kokepunkt (over 500 °C).

Asfalt befinner seg **nederst** i tårnet fordi den har så høyt kokepunkt at den nesten ikke fordamper. Den hentes ut som en tykk, seig masse i bunnen.

---

**d) Bensin vs. diesel:**

Bensin (C₅–C₁₂) har **kortere karbonkjeder** enn diesel (C₁₅–C₂₀).

Kortere kjeder → færre elektroner → svakere Van der Waals-krefter → lavere kokepunkt.

Bensin koker ved 30–180 °C, mens diesel koker ved 260–340 °C.`,
    },

    // ========== OPPGAVE 8: MC – FOSSILE BRENSLER ==========
    {
      id: 'nat10-2-7-exercise-8',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-7-oppg-8',
        number: '2.7.8',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken påstand om fossile brensler er riktig?',
        options: [
          { id: 'a', text: 'Fossile brensler er fornybare energikilder', isCorrect: false },
          { id: 'b', text: 'Fossile brensler er dannet av rester av planter og dyr over millioner av år', isCorrect: true },
          { id: 'c', text: 'Naturgass består hovedsakelig av oktan', isCorrect: false },
          { id: 'd', text: 'Kull gir mindre CO₂ enn naturgass per energienhet', isCorrect: false },
        ],
        solution: `**Riktig svar: Fossile brensler er dannet av rester av planter og dyr over millioner av år**

Forklaring av alternativene:

**a) Feil:** Fossile brensler er **ikke-fornybare**. De tar millioner av år å danne og kan ikke erstattes i menneskelig tidsskala.

**b) Riktig:** Fossile brensler (olje, gass, kull) er dannet av organisk materiale som ble begravd og utsatt for høyt trykk og temperatur over geologiske tidsperioder.

**c) Feil:** Naturgass består hovedsakelig av **metan** (CH₄), ikke oktan.

**d) Feil:** Kull gir **mest** CO₂ per energienhet av de fossile brenslene. Naturgass gir minst.`,
      },
    },

    // ========== OPPGAVE 9: KLASSISK – FORDELER OG ULEMPER ==========
    {
      id: 'nat10-2-7-exercise-9',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-7-oppg-9',
        number: '2.7.9',
        type: 'classic',
        difficulty: 'medium',
        task: `Drøft fordeler og ulemper med fossile brensler. Skriv minst to fordeler og to ulemper. Forklar også kort hvorfor mange mener vi bør redusere bruken av fossile brensler.`,
        multipleChoiceOptions: [
          'Fordeler: Høy energitetthet og godt utbygd infrastruktur. Ulemper: CO₂-utslipp og ikke-fornybar ressurs.',
          'Fordeler: Fornybar energi og lave kostnader. Ulemper: Vanskelig å transportere og lite energi.',
          'Fordeler: Ingen CO₂-utslipp og lett tilgjengelig. Ulemper: Dyrt og krever mye plass.',
          'Fordeler: Miljøvennlig og fornybar. Ulemper: Lav energitetthet og ustabil.',
        ],
        solution: `**Fordeler med fossile brensler:**

1. **Høy energitetthet:** Fossile brensler inneholder mye energi per kilo. En liter bensin inneholder nok energi til å drive en bil i over 10 km.

2. **Godt utbygd infrastruktur:** Vi har bygd opp et enormt system av kraftverk, rørledninger, raffinerier og bensinstasjoner for fossile brensler. Alt fungerer og er lett tilgjengelig.

3. **Rimelig og pålitelig:** Fossile brensler leverer stabil energi uavhengig av vær og vind, og er relativt rimelige å utvinne mange steder.

4. **Lett å lagre og transportere:** Olje og gass kan lagres i tanker og fraktes over store avstander.

---

**Ulemper med fossile brensler:**

1. **CO₂-utslipp og klimaendringer:** Forbrenning av fossile brensler frigjør CO₂, som er en drivhusgass. Økt CO₂ i atmosfæren fører til global oppvarming og klimaendringer.

2. **Ikke-fornybar ressurs:** Fossile brensler tar millioner av år å danne. Vi bruker dem opp mye raskere enn de produseres. En dag vil de gå tomme.

3. **Luftforurensning:** Forbrenning kan gi sot, nitrogenoksider (NOₓ) og svoveldioksid (SO₂), som skader helse og miljø.

4. **Oljeutslipp:** Ulykker med oljetankere og oljeplattformer kan ødelegge marine økosystemer.

---

**Hvorfor redusere bruken?**

Mange mener vi bør redusere bruken fordi CO₂-utslipp fra fossile brensler er hovedårsaken til menneskeskapte klimaendringer. Parisavtalen fra 2015 forplikter verdens land til å begrense global oppvarming til 1,5–2 °C, og dette krever en overgang til fornybare energikilder som sol, vind og vannkraft.`,
      },
    },

    // ========================================================================
    // BLOKK 6: FORBRENNINGSREAKSJONER
    // ========================================================================

    // ========== DEFINISJON: FORBRENNING ==========
    {
      id: 'nat10-2-7-def-forbrenning',
      type: 'definition',
      title: 'Fullstendig og ufullstendig forbrenning',
      content: `**Forbrenning** er en kjemisk reaksjon der et stoff reagerer med oksygen (O₂) og frigjør energi i form av varme og lys.

**Fullstendig forbrenning:**
Skjer når det er **nok oksygen** tilgjengelig. Produktene er:
- **Karbondioksid** (CO₂)
- **Vann** (H₂O)

Generell reaksjon: Hydrokarbon + O₂ → CO₂ + H₂O + energi

**Ufullstendig forbrenning:**
Skjer når det er **for lite oksygen**. Produktene kan inkludere:
- **Karbonmonoksid** (CO) – giftig gass!
- **Sot** (rent karbon, C)
- **Vann** (H₂O)

Generell reaksjon: Hydrokarbon + lite O₂ → CO og/eller C + H₂O + energi

**Viktig:** Karbonmonoksid (CO) er en fargeløs og luktfri gass som er svært giftig. Ufullstendig forbrenning i dårlig ventilerte rom (f.eks. fra en gasspeis eller vedovn) kan være livsfarlig!`,
    },

    // ========== TEKST: FORBRENNING ==========
    {
      id: 'nat10-2-7-forbrenning',
      type: 'text',
      content: `## Forbrenningsreaksjoner

Forbrenning av hydrokarboner er den viktigste energikilden i verden. Biler, kraftverk, flyplasser og oppvarming av hus – alt drives av forbrenning.

### Fullstendig forbrenning

Når et hydrokarbon brenner med **rikelig tilgang på oksygen**, er produktene alltid **karbondioksid (CO₂)** og **vann (H₂O)**.

**Eksempler:**

**Metan (naturgass):**
CH₄ + 2O₂ → CO₂ + 2H₂O

**Propan (grillegass):**
C₃H₈ + 5O₂ → 3CO₂ + 4H₂O

**Oktan (bensin):**
2C₈H₁₈ + 25O₂ → 16CO₂ + 18H₂O

### Ufullstendig forbrenning

Når det er **for lite oksygen**, får vi ufullstendig forbrenning. Da dannes det **karbonmonoksid** (CO) og/eller **sot** (C) i stedet for CO₂.

**Metan med lite oksygen:**
2CH₄ + 3O₂ → 2CO + 4H₂O (gir karbonmonoksid)
CH₄ + O₂ → C + 2H₂O (gir sot)

**Tegn på ufullstendig forbrenning:**
- **Gul eller oransje flamme** (fullstendig forbrenning gir blå flamme)
- **Svart røyk/sot**
- **Lukt** (karbonmonoksid lukter ikke, men andre biprodukter kan lukte)

### Hvorfor er CO farlig?

Karbonmonoksid (CO) er farlig fordi:
- Den binder seg til hemoglobin i blodet **200 ganger sterkere** enn oksygen
- Den blokkerer oksygentransporten i kroppen
- Symptomene (hodepine, svimmelhet) ligner influensa og kan oversees
- I høye konsentrasjoner kan den være **dødelig**

### Balansering av forbrenningslikninger

For å balansere en forbrenningslikning, sørg for at det er **like mange atomer av hvert grunnstoff** på begge sider av pilen. Dette kalles **loven om massebevaring** – atomer kan ikke forsvinne eller oppstå i en kjemisk reaksjon.

**Steg for å balansere:**
1. Skriv ubalansert likning med riktige formler
2. Balanser karbon (C) først
3. Balanser hydrogen (H) deretter
4. Balanser oksygen (O) til slutt

### Energi fra forbrenning

Forbrenning er en **eksoterm** reaksjon – den frigir energi. Energien vi bruker fra fossile brensler kommer opprinnelig fra **solen**:

1. Planter fanget solenergi gjennom fotosyntese for millioner av år siden
2. Energien ble lagret i karbon-hydrogenbindinger i plante- og dyrerester
3. Når vi brenner fossile brensler, frigjør vi denne lagrede solenergien

**Fotosyntese:** CO₂ + H₂O + solenergi → C₆H₁₂O₆ + O₂
**Forbrenning:** C₆H₁₂O₆ + O₂ → CO₂ + H₂O + energi

Forbrenning er altså **det motsatte av fotosyntese**!`,
    },

    // ========== EKSEMPEL: BALANSERE FORBRENNING AV METAN ==========
    {
      id: 'nat10-2-7-ex-balansere',
      type: 'example',
      title: 'Eksempel: Balansere forbrenningslikningen for metan',
      problem: `Metan (CH₄) brenner i oksygen (O₂) og danner karbondioksid (CO₂) og vann (H₂O).

a) Skriv opp den ubalanserte reaksjonslikningen.
b) Balanser likningen steg for steg.
c) Vis at antall atomer av hvert grunnstoff er likt på begge sider.`,
      solution: `**a) Ubalansert likning:**

CH₄ + O₂ → CO₂ + H₂O

---

**b) Balansering steg for steg:**

**Steg 1: Tell atomer på begge sider (ubalansert)**

| Atom | Venstre side | Høyre side |
|------|-------------|------------|
| C | 1 | 1 |
| H | 4 | 2 |
| O | 2 | 3 |

Karbon er balansert, men hydrogen og oksygen er ikke det.

**Steg 2: Balanser hydrogen**

Vi har 4 H på venstre side og bare 2 på høyre side (i H₂O).

Sett koeffisient **2** foran H₂O:

CH₄ + O₂ → CO₂ + **2**H₂O

Nå: H venstre = 4, H høyre = 2 × 2 = 4 ✓

**Steg 3: Balanser oksygen**

Oksygen på høyre side: CO₂ har 2 O, og 2H₂O har 2 O = totalt **4 O**.
Oksygen på venstre side: O₂ har 2 O.

Sett koeffisient **2** foran O₂:

CH₄ + **2**O₂ → CO₂ + 2H₂O

Nå: O venstre = 2 × 2 = 4, O høyre = 2 + 2 = 4 ✓

**Balansert likning:**

**CH₄ + 2O₂ → CO₂ + 2H₂O**

---

**c) Kontroll – tell alle atomer:**

| Atom | Venstre side | Høyre side | Balansert? |
|------|-------------|------------|------------|
| C | 1 | 1 | ✓ |
| H | 4 | 2 × 2 = 4 | ✓ |
| O | 2 × 2 = 4 | 2 + 2 = 4 | ✓ |

Alle atomer er balansert! Loven om massebevaring er oppfylt – ingen atomer har forsvunnet eller oppstått.`,
    },

    // ========== OPPGAVE 10: KLASSISK – BALANSER FORBRENNING ==========
    {
      id: 'nat10-2-7-exercise-10',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-7-oppg-10',
        number: '2.7.10',
        type: 'classic',
        difficulty: 'medium',
        task: `Balanser disse forbrenningslikningene:

a) C₂H₆ + O₂ → CO₂ + H₂O (forbrenning av etan)
b) C₃H₈ + O₂ → CO₂ + H₂O (forbrenning av propan)
c) C₄H₁₀ + O₂ → CO₂ + H₂O (forbrenning av butan)

Vis tellinger av atomer på begge sider for å bekrefte at likningene er balansert.`,
        multipleChoiceOptions: [
          'a) 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O, b) C₃H₈ + 5O₂ → 3CO₂ + 4H₂O, c) 2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O',
          'a) C₂H₆ + 3O₂ → 2CO₂ + 3H₂O, b) C₃H₈ + 4O₂ → 3CO₂ + 4H₂O, c) C₄H₁₀ + 6O₂ → 4CO₂ + 5H₂O',
          'a) 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O, b) C₃H₈ + 5O₂ → 3CO₂ + 4H₂O, c) C₄H₁₀ + 6O₂ → 4CO₂ + 5H₂O',
          'a) C₂H₆ + 4O₂ → 2CO₂ + 3H₂O, b) C₃H₈ + 5O₂ → 3CO₂ + 4H₂O, c) 2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O',
        ],
        solution: `**a) Forbrenning av etan (C₂H₆):**

Ubalansert: C₂H₆ + O₂ → CO₂ + H₂O

**Steg 1:** Balanser C: 2 C på venstre → sett 2 foran CO₂
C₂H₆ + O₂ → **2**CO₂ + H₂O

**Steg 2:** Balanser H: 6 H på venstre → sett 3 foran H₂O
C₂H₆ + O₂ → 2CO₂ + **3**H₂O

**Steg 3:** Balanser O: Høyre: 2×2 + 3×1 = 7 O. Venstre trenger 7/2 O₂.
For å unngå brøker: gang hele likningen med 2:

**2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O**

Kontroll: C: 4=4 ✓, H: 12=12 ✓, O: 14=14 ✓

---

**b) Forbrenning av propan (C₃H₈):**

Ubalansert: C₃H₈ + O₂ → CO₂ + H₂O

**Steg 1:** Balanser C: 3 C → sett 3 foran CO₂
**Steg 2:** Balanser H: 8 H → sett 4 foran H₂O
**Steg 3:** Balanser O: Høyre: 3×2 + 4×1 = 10 O → sett 5 foran O₂

**C₃H₈ + 5O₂ → 3CO₂ + 4H₂O**

Kontroll: C: 3=3 ✓, H: 8=8 ✓, O: 10=10 ✓

---

**c) Forbrenning av butan (C₄H₁₀):**

Ubalansert: C₄H₁₀ + O₂ → CO₂ + H₂O

**Steg 1:** Balanser C: 4 C → sett 4 foran CO₂
**Steg 2:** Balanser H: 10 H → sett 5 foran H₂O
**Steg 3:** Balanser O: Høyre: 4×2 + 5×1 = 13 O → trenger 13/2 O₂
Gang med 2:

**2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O**

Kontroll: C: 8=8 ✓, H: 20=20 ✓, O: 26=26 ✓`,
      },
    },

    // ========== OPPGAVE 11: MC – FORBRENNING ==========
    {
      id: 'nat10-2-7-exercise-11',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-7-oppg-11',
        number: '2.7.11',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er produktene ved fullstendig forbrenning av et hydrokarbon?',
        options: [
          { id: 'a', text: 'Karbonmonoksid (CO) og vann (H₂O)', isCorrect: false },
          { id: 'b', text: 'Karbondioksid (CO₂) og vann (H₂O)', isCorrect: true },
          { id: 'c', text: 'Karbon (C) og hydrogen (H₂)', isCorrect: false },
          { id: 'd', text: 'Karbondioksid (CO₂) og hydrogen (H₂)', isCorrect: false },
        ],
        solution: `**Riktig svar: Karbondioksid (CO₂) og vann (H₂O)**

Ved **fullstendig** forbrenning reagerer et hydrokarbon med rikelig oksygen (O₂), og produktene er alltid:
- **CO₂** (karbondioksid) – fra karbonatomene
- **H₂O** (vann) – fra hydrogenatomene

Eksempel med metan: CH₄ + 2O₂ → CO₂ + 2H₂O

**Karbonmonoksid (CO)** og **sot (C)** dannes bare ved **ufullstendig** forbrenning, altså når det er for lite oksygen tilgjengelig.`,
      },
    },

    // ========================================================================
    // OPPSUMMERING
    // ========================================================================
    {
      id: 'nat10-2-7-oppsummering',
      type: 'text',
      title: 'Oppsummering – Organisk kjemi I',
      content: `## Oppsummering

### Hovedpunkter

**Organisk kjemi** handler om karbonforbindelser. Karbon har 4 valenselektroner og kan danne 4 bindinger, noe som gjør det mulig å lage svært mange ulike molekyler.

### Hydrokarboner – oversikt

| Type | Binding | Generell formel | Ending | Eksempler |
|------|---------|-----------------|--------|-----------|
| Alkan | Enkeltbinding (C–C) | CₙH₂ₙ₊₂ | -an | Metan, etan, propan |
| Alken | Dobbeltbinding (C=C) | CₙH₂ₙ | -en | Eten, propen |
| Alkyn | Trippelbinding (C≡C) | CₙH₂ₙ₋₂ | -yn | Etyn, propyn |

### De 8 første alkanene

Metan (CH₄), etan (C₂H₆), propan (C₃H₈), butan (C₄H₁₀), pentan (C₅H₁₂), heksan (C₆H₁₄), heptan (C₇H₁₆), oktan (C₈H₁₈).

### Egenskaper

- **Kokepunkt** øker med kjedelivet (sterkere Van der Waals-krefter)
- Korte kjeder = gass, middels kjeder = væske, lange kjeder = fast stoff
- Hydrokarboner er upolare og lite løselige i vann

### Fossile brensler

- Dannet av organiske rester over millioner av år
- Naturgass (metan), råolje (blanding), kull (fast karbon)
- Ikke-fornybare energikilder
- Råolje separeres ved destillasjon etter kokepunkt

### Forbrenning

| Type | Oksygentilgang | Produkter |
|------|----------------|-----------|
| Fullstendig | Nok O₂ | CO₂ + H₂O |
| Ufullstendig | For lite O₂ | CO og/eller C + H₂O |

Loven om massebevaring: like mange atomer av hvert grunnstoff på begge sider av reaksjonspilen.`,
    },

    // ========================================================================
    // SAMLEOPPGAVER
    // ========================================================================

    // ========== OPPGAVE 12: FORBRENNING OG MASSEBEVARING ==========
    {
      id: 'nat10-2-7-exercise-12',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-7-oppg-12',
        number: '2.7.12',
        type: 'classic',
        difficulty: 'medium',
        task: `Propan (C₃H₈) brukes som grillegass.

a) Skriv den balanserte likningen for fullstendig forbrenning av propan.
b) Hvor mange molekyler O₂ trengs for å brenne ett molekyl propan?
c) Forklar hva som menes med massebevaring i denne reaksjonen.
d) Hva ville skjedd hvis grillen hadde for lite lufttilførsel?`,
        multipleChoiceOptions: [
          'a) C₃H₈ + 5O₂ → 3CO₂ + 4H₂O, b) 5, c) Like mange atomer på begge sider, d) Ufullstendig forbrenning med CO/sot',
          'a) C₃H₈ + 3O₂ → 3CO₂ + 4H₂O, b) 3, c) Massen øker, d) Fullstendig forbrenning',
          'a) C₃H₈ + 5O₂ → 3CO₂ + 4H₂O, b) 5, c) Massen forsvinner, d) Ingenting skjer',
          'a) C₃H₈ + 4O₂ → 3CO₂ + 3H₂O, b) 4, c) Like mange atomer, d) Mer energi frigjøres',
        ],
        solution: `**a) Balansert likning:**

**C₃H₈ + 5O₂ → 3CO₂ + 4H₂O**

Kontroll:
- C: 3 = 3 ✓
- H: 8 = 8 ✓
- O: 10 = 6 + 4 = 10 ✓

---

**b) Antall O₂-molekyler:**

Det trengs **5 molekyler O₂** for å brenne ett molekyl propan (koeffisienten foran O₂ er 5).

---

**c) Massebevaring:**

**Loven om massebevaring** sier at masse verken kan oppstå eller forsvinne i en kjemisk reaksjon. Alle atomene som finnes på venstre side av pilen, finnes også på høyre side – de er bare omorganisert i nye forbindelser.

I denne reaksjonen:
- 3 C-atomer på begge sider
- 8 H-atomer på begge sider
- 10 O-atomer på begge sider

Den totale massen av reaktantene (propan + oksygen) er **lik** den totale massen av produktene (CO₂ + vann).

---

**d) For lite lufttilførsel:**

Hvis grillen hadde for lite oksygen, ville det blitt **ufullstendig forbrenning**. Da dannes:
- **Karbonmonoksid (CO)** – en giftig, fargeløs og luktfri gass
- **Sot (C)** – svarte karbonpartikler

Tegn på ufullstendig forbrenning:
- Gul/oransje flamme (i stedet for blå)
- Svart røyk
- Lukt

Dette er farlig, spesielt innendørs, fordi CO kan føre til karbonmonoksidforgiftning.`,
      },
    },

    // ========== OPPGAVE 13: SAMMENLIGN ALKANER ==========
    {
      id: 'nat10-2-7-exercise-13',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-7-oppg-13',
        number: '2.7.13',
        type: 'classic',
        difficulty: 'medium',
        task: `Metan (CH₄) og oktan (C₈H₁₈) er begge alkaner.

a) Vis at begge passer den generelle formelen for alkaner (CₙH₂ₙ₊₂).
b) Forklar hvorfor metan er gass mens oktan er væske ved romtemperatur.
c) Skriv balansert forbrenningslikning for begge.
d) Hvilken av dem er mest brukt som drivstoff i biler? Hvorfor tror du det?`,
        multipleChoiceOptions: [
          'a) CH₄: n=1, H=4 ✓; C₈H₁₈: n=8, H=18 ✓. b) Van der Waals-krefter. c) CH₄+2O₂→CO₂+2H₂O og 2C₈H₁₈+25O₂→16CO₂+18H₂O. d) Oktan (bensin), fordi den er væske.',
          'a) Begge har bare enkeltbindinger. b) Ulik masse. c) CH₄+O₂→CO₂+H₂O. d) Metan, fordi den er billigst.',
          'a) Begge inneholder C og H. b) Kokepunkt. c) CH₄+2O₂→CO₂+2H₂O. d) Begge brukes like mye.',
          'a) CH₄: n=1, H=4 ✓; C₈H₁₈: n=8, H=18 ✓. b) Ulik tetthet. c) CH₄+2O₂→CO₂+2H₂O. d) Metan, fordi den gir mer energi.',
        ],
        solution: `**a) Generell formel CₙH₂ₙ₊₂:**

**Metan (CH₄):** n = 1
H = 2(1) + 2 = 4 → CH₄ ✓

**Oktan (C₈H₁₈):** n = 8
H = 2(8) + 2 = 18 → C₈H₁₈ ✓

Begge passer formelen!

---

**b) Fase ved romtemperatur:**

**Metan er gass** (kokepunkt −162 °C) fordi den har en kort karbonkjede (1 C-atom). De intermolekylære Van der Waals-kreftene er svake, så lite energi trengs for å holde molekylene fra hverandre.

**Oktan er væske** (kokepunkt 126 °C) fordi den har en lang karbonkjede (8 C-atomer). Større molekyler gir sterkere Van der Waals-krefter og høyere kokepunkt.

---

**c) Balanserte forbrenningslikninger:**

**Metan:**
CH₄ + 2O₂ → CO₂ + 2H₂O

**Oktan:**
2C₈H₁₈ + 25O₂ → 16CO₂ + 18H₂O

---

**d) Mest brukt som bildrivstoff:**

**Oktan** (og andre hydrokarboner i bensin) er mest brukt som drivstoff i biler. Grunnen er at oktan er **væske** ved romtemperatur, noe som gjør den:
- Lett å lagre i en bensintank
- Lett å transportere og pumpe
- Trygg å håndtere (ikke eksplosiv gass)

Metan (naturgass) brukes også som drivstoff i noen kjøretøy, men må komprimeres til høyt trykk i spesielle tanker fordi den er gass – dette er mer tungvint og krever spesialutstyr.`,
      },
    },

    // ========== OPPGAVE 14: DRØFT FOSSILE BRENSLER OG KLIMA ==========
    {
      id: 'nat10-2-7-exercise-14',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-7-oppg-14',
        number: '2.7.14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Norge er en av verdens største produsenter av olje og gass.

a) Forklar sammenhengen mellom forbrenning av fossile brensler og drivhuseffekten.
b) Naturgass (metan) gir mindre CO₂ per energienhet enn kull. Betyr det at naturgass er «miljøvennlig»? Begrunn svaret.
c) Hvilke alternativer finnes til fossile brensler som energikilde? Nevn minst tre.
d) Drøft dilemmaet: Norge tjener mye penger på olje og gass, men verden trenger å kutte CO₂-utslipp. Hva bør Norge gjøre?`,
        solution: `**a) Forbrenning og drivhuseffekten:**

Ved forbrenning av fossile brensler frigjøres **karbondioksid (CO₂)** til atmosfæren. CO₂ er en **drivhusgass** – den slipper gjennom sollys, men fanger opp varmestråling fra jordoverflaten. Mer CO₂ i atmosfæren betyr at mer varme holdes tilbake, og **gjennomsnittstemperaturen på jorda stiger**.

Forbrenning: CₙH₂ₙ₊₂ + O₂ → **CO₂** + H₂O

Siden den industrielle revolusjonen har CO₂-nivået i atmosfæren økt fra ca. 280 ppm til over 420 ppm, hovedsakelig på grunn av forbrenning av fossile brensler.

---

**b) Er naturgass miljøvennlig?**

**Nei, naturgass er ikke miljøvennlig**, selv om den gir **mindre CO₂ per energienhet** enn kull og olje.

Grunner:
1. Forbrenning av naturgass gir fortsatt **betydelige CO₂-utslipp**
2. Metan (CH₄) er selv en kraftig drivhusgass – **80 ganger sterkere** enn CO₂ over 20 år. Lekkasjer under utvinning og transport er et stort problem.
3. Det er riktigere å si at naturgass er **mindre forurensende** enn kull, men den er langt fra klimanøytral.

---

**c) Alternativer til fossile brensler:**

1. **Solenergi** – solceller og solvarmeanlegg
2. **Vindkraft** – vindturbiner på land og til havs
3. **Vannkraft** – utnytter fallende vann (Norges viktigste energikilde)
4. **Bioenergi** – brensel fra planter og biologisk avfall
5. **Kjernekraft** – energi fra spalting av uranatomer
6. **Geotermisk energi** – varme fra jordas indre
7. **Bølgekraft og tidevannskraft** – fra havet

---

**d) Drøfting av Norges dilemma:**

**Argumenter for å fortsette:**
- Olje og gass gir store inntekter som finansierer velferd, utdanning og helse
- Norsk gass kan erstatte kull i Europa og gi lavere utslipp
- Plutselig stopp kan skade økonomien og koste arbeidsplasser

**Argumenter for å trappe ned:**
- Klimavitenskapen er klar: vi må kutte utslipp drastisk
- Norge har et ansvar som rik nasjon og stor produsent
- Oljefondet kan finansiere overgang til fornybar energi
- Nye arbeidsplasser kan skapes i grønn industri

**Mulig løsning:**
En gradvis, planlagt nedtrapping av olje- og gassproduksjon, kombinert med store investeringer i fornybar energi og grønn teknologi. Norge kan bruke sin kompetanse fra oljeindustrien til å lede an i den grønne omstillingen.`,
      },
    },

    // ========== OPPGAVE 15: FORSØK/PROSJEKTOPPGAVE ==========
    {
      id: 'nat10-2-7-exercise-15',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-7-oppg-15',
        number: '2.7.15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `**Prosjektoppgave: Undersøk forbrenning**

Design et forsøk der du undersøker forskjellen mellom fullstendig og ufullstendig forbrenning av et stearinlys.

a) Formuler en hypotese om hva som skjer når et stearinlys brenner med begrenset lufttilgang.

b) Beskriv fremgangsmåten for forsøket. Du kan bruke et stearinlys og et glass/beger for å begrense lufttilgangen. Hva vil du observere?

c) Forklar observasjonene dine ved hjelp av kjemien bak fullstendig og ufullstendig forbrenning.

d) Skriv balanserte reaksjonslikninger for forbrenning av et forenklet stearin-molekyl. Bruk C₂₅H₅₂ som formel for stearin.

e) Vurder feilkilder i forsøket og foreslå forbedringer.`,
        solution: `**a) Hypotese:**

«Hvis vi begrenser lufttilgangen til et stearinlys, vil flammen endre farge fra gul/hvit til mer oransje, det vil dannes synlig sot (svarte partikler), og lyset vil til slutt slukke når oksygenet er brukt opp.»

---

**b) Fremgangsmåte:**

**Utstyr:** Stearinlys, fyrstikker, glassbeger (stort og lite), hvit tallerken

**Forsøk 1 – Fullstendig forbrenning:**
1. Tenn stearinlyset og la det brenne fritt
2. Observer flammen (farge, størrelse)
3. Hold den hvite tallerkenen over flammen (langt nok unna) – sjekk om det avsettes sot

**Forsøk 2 – Ufullstendig forbrenning:**
1. Tenn stearinlyset
2. Sett et glassbeger forsiktig over lyset
3. Observer hva som skjer med flammen (farge, størrelse, røyk)
4. Observer om det avsettes sot på innsiden av glasset
5. Observer når lyset slukner

**Observasjoner:**
- Med fri luft: Stabil flamme, mest gul med blå bunn, lite sot
- Med begrenset luft: Flammen flakker, blir mer oransje, mer sot på glasset, lyset slukner etter en stund

---

**c) Forklaring:**

**Med fri luft (fullstendig forbrenning):**
Stearinet reagerer med nok O₂, og produktene er hovedsakelig CO₂ og H₂O. Flammen er stabil.

**Med begrenset luft (ufullstendig forbrenning):**
Når glasset dekker lyset, begrenses O₂-tilgangen. Uten nok oksygen skjer ufullstendig forbrenning:
- Det dannes **karbonmonoksid (CO)** og **sot (C)** i stedet for CO₂
- Soten er synlig som svarte avleiringer på glasset
- Flammen endrer farge fordi glødende sotpartikler gir oransje/gult lys
- Til slutt er alt oksygenet brukt opp, og flammen slukner

---

**d) Balanserte likninger for C₂₅H₅₂:**

**Fullstendig forbrenning:**
C₂₅H₅₂ + 38O₂ → 25CO₂ + 26H₂O

Kontroll: C: 25=25 ✓, H: 52=52 ✓, O: 76=50+26=76 ✓

**Ufullstendig forbrenning (med CO):**
2C₂₅H₅₂ + 51O₂ → 50CO + 52H₂O

---

**e) Feilkilder og forbedringer:**

**Feilkilder:**
- Glasset kan ha ulik størrelse → ulik mengde oksygen
- Stearinlyset kan ha ulik størrelse → ulik forbrenningshastighet
- Trekk i rommet kan påvirke flammen
- Vanskelig å observere CO (usynlig gass)

**Forbedringer:**
- Bruk flere glass av ulik størrelse for å sammenligne
- Mål tiden til lyset slukner
- Gjenta forsøket flere ganger
- Bruk en CO-detektor for å måle karbonmonoksid`,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Organisk kjemi', definition: 'Den delen av kjemien som handler om karbonforbindelser' },
    { term: 'Hydrokarbon', definition: 'Forbindelse som bare inneholder karbon (C) og hydrogen (H)' },
    { term: 'Alkan', definition: 'Mettet hydrokarbon med bare enkeltbindinger, generell formel CₙH₂ₙ₊₂' },
    { term: 'Alken', definition: 'Umettet hydrokarbon med minst en dobbeltbinding, generell formel CₙH₂ₙ' },
    { term: 'Alkyn', definition: 'Umettet hydrokarbon med minst en trippelbinding, generell formel CₙH₂ₙ₋₂' },
    { term: 'Mettet hydrokarbon', definition: 'Hydrokarbon der alle C–C-bindinger er enkeltbindinger' },
    { term: 'Umettet hydrokarbon', definition: 'Hydrokarbon med dobbelt- eller trippelbindinger mellom karbonatomer' },
    { term: 'Homolog rekke', definition: 'Serie forbindelser der hvert neste ledd har en ekstra CH₂-gruppe' },
    { term: 'Strukturformel', definition: 'Formel som viser hvordan atomene er bundet til hverandre' },
    { term: 'Van der Waals-krefter', definition: 'Svake intermolekylære krefter mellom upolare molekyler' },
    { term: 'Fossile brensler', definition: 'Energirike stoffer dannet av organiske rester over millioner av år (olje, gass, kull)' },
    { term: 'Destillasjon', definition: 'Separasjonsmetode som skiller stoffer basert på ulike kokepunkter' },
    { term: 'Fullstendig forbrenning', definition: 'Forbrenning med nok oksygen, gir CO₂ og H₂O' },
    { term: 'Ufullstendig forbrenning', definition: 'Forbrenning med for lite oksygen, gir CO og/eller sot (C)' },
    { term: 'Massebevaring', definition: 'Prinsippet om at masse ikke kan oppstå eller forsvinne i en kjemisk reaksjon' },
  ],
};

// ============================================================================
// Kapittel 2.8: Organisk kjemi II – Alkoholer, syrer og andre organiske
//               forbindelser
// LK20: utforske kjemiske reaksjoner, forklare massebevaring og gjøre rede
//        for betydningen av noen forbrenningsreaksjoner
// ============================================================================

export const CHAPTER_NAT10_2_8: TextbookChapter = {
  id: 'naturfag-10-2-8',
  courseId: 'naturfag-10',
  chapterNumber: '2.8',
  title: 'Organisk kjemi II – Alkoholer, syrer og andre organiske forbindelser',
  description: 'Lær om funksjonelle grupper, alkoholer, karboksylsyrer, estere, karbohydrater, fett, proteiner og polymerer.',
  estimatedMinutes: 60,
  competenceGoals: [
    'utforske kjemiske reaksjoner, forklare massebevaring og gjøre rede for betydningen av noen forbrenningsreaksjoner',
  ],
  content: [
    // ========================================================================
    // BLOKK 1: FUNKSJONELLE GRUPPER
    // ========================================================================

    // ========== INTRODUKSJON ==========
    {
      id: 'nat10-2-8-intro',
      type: 'text',
      content: `## Fra hydrokarboner til nyttige stoffer

I forrige kapittel lærte du om hydrokarboner – forbindelser som bare inneholder karbon og hydrogen. Men de fleste organiske stoffene vi møter i hverdagen inneholder også **andre atomer**, spesielt oksygen (O) og nitrogen (N).

Tenk på noen stoffer du kjenner:
- **Etanol** i desinfeksjonsmiddel – inneholder en OH-gruppe
- **Eddiksyre** i eddik – inneholder en COOH-gruppe
- **Sukker** i mat – inneholder flere OH-grupper
- **Plast** i emballasje – lange kjeder av karbonmolekyler

Alle disse stoffene har noe til felles: de har en eller flere **funksjonelle grupper** som gir dem sine spesielle egenskaper.

I dette kapitlet lærer du om:
- Hva funksjonelle grupper er og hvorfor de er viktige
- **Alkoholer** (med -OH-gruppen)
- **Karboksylsyrer** (med -COOH-gruppen)
- **Estere** (dannet fra alkohol + syre)
- **Karbohydrater**, **fett** og **proteiner** – biologisk viktige organiske stoffer
- **Polymerer** – lange kjedemolekyler som plast`,
    },

    // ========== DEFINISJON: FUNKSJONELL GRUPPE ==========
    {
      id: 'nat10-2-8-def-funksjonell-gruppe',
      type: 'definition',
      title: 'Funksjonell gruppe',
      content: `En **funksjonell gruppe** er en bestemt gruppe atomer i et organisk molekyl som gir molekylet sine karakteristiske kjemiske egenskaper.

Funksjonelle grupper er som «etiketter» på et molekyl – de forteller deg hva slags stoff det er og hvordan det reagerer.

**Viktige funksjonelle grupper i dette kapitlet:**

| Funksjonell gruppe | Navn | Formel | Stoffklasse |
|---------------------|------|--------|-------------|
| Hydroksylgruppe | -OH | R–OH | Alkoholer |
| Karboksylgruppe | -COOH | R–COOH | Karboksylsyrer |
| Estergruppe | -COO- | R–COO–R' | Estere |

*R representerer resten av karbonkjeden.*

Når vi bytter ut en hydroksylgruppe (-OH) med en karboksylgruppe (-COOH) på et molekyl, endres egenskapene fullstendig – stoffet går fra å være en alkohol til å bli en syre!`,
    },

    // ========== TEKST: FUNKSJONELLE GRUPPER ==========
    {
      id: 'nat10-2-8-funksjonelle-grupper',
      type: 'text',
      content: `## Hvordan funksjonelle grupper endrer egenskapene

Tenk deg at du starter med et enkelt hydrokarbon som etan (C₂H₆). Etan er en fargeløs, luktfri gass som nesten ikke reagerer med noe.

Men hvis du bytter ut ett av hydrogenatomene med ulike funksjonelle grupper, får du helt forskjellige stoffer:

### Fra etan til tre ulike stoffer

**Etan (C₂H₆)** → Hydrokarbongass, kokepunkt −89 °C

**Etanol (C₂H₅OH)** → Alkohol, væske, kokepunkt 78 °C
- Byttet ut ett H med -OH (hydroksylgruppe)
- Blandbar med vann, brukes i desinfeksjon og drikke

**Etansyre/eddiksyre (CH₃COOH)** → Karboksylsyre, væske, kokepunkt 118 °C
- Har -COOH (karboksylgruppe) i enden
- Sur smak, brukes i eddik

**Etylacetat (CH₃COOCH₂CH₃)** → Ester, væske med fruktig lukt
- Dannet fra eddiksyre + etanol
- Brukes som løsemiddel og aroma

### Navnsetting med funksjonelle grupper

Navnet på organiske forbindelser med funksjonelle grupper følger et system:

1. **Stamnavnet** forteller om karbonkjedens lengde (met-, et-, prop-, but-, osv.)
2. **Endingen** forteller om den funksjonelle gruppen:
   - **-ol** for alkoholer (metanol, etanol, propanol)
   - **-syre** for karboksylsyrer (metansyre, etansyre)
   - **-ester** for estere`,
    },

    // ========== EKSEMPEL: SAMMENLIGN ETAN OG ETANOL ==========
    {
      id: 'nat10-2-8-ex-etan-etanol',
      type: 'example',
      title: 'Eksempel: Sammenlign etan og etanol',
      problem: `Etan (C₂H₆) og etanol (C₂H₅OH) har begge 2 karbonatomer.

a) Hva er forskjellen mellom de to molekylene?
b) Forklar hvorfor etan er en gass (kokepunkt −89 °C) mens etanol er en væske (kokepunkt 78 °C).
c) Hvorfor er etanol blandbar med vann, mens etan ikke er det?`,
      solution: `**a) Forskjellen:**

**Etan (C₂H₆):**
\`\`\`
    H H
    | |
H — C — C — H
    | |
    H H
\`\`\`
Et rent hydrokarbon – bare karbon og hydrogen. Ingen funksjonell gruppe.

**Etanol (C₂H₅OH):**
\`\`\`
    H H
    | |
H — C — C — O — H
    | |
    H H
\`\`\`
Har en **hydroksylgruppe (-OH)** bundet til karbonkjeden. Denne OH-gruppen er en funksjonell gruppe som gjør etanol til en alkohol.

---

**b) Kokepunkt:**

Etan har bare svake **Van der Waals-krefter** mellom molekylene → lavt kokepunkt (−89 °C) → gass.

Etanol har i tillegg **hydrogenbindinger** mellom OH-gruppene på nabomolekylene. Hydrogenbindinger er mye sterkere enn Van der Waals-krefter → høyere kokepunkt (78 °C) → væske.

**Hydrogenbindinger** oppstår fordi:
- O-atomet i OH-gruppen er sterkt elektronegativt
- Det tiltrekker H-atomet på nabomolekylets OH-gruppe
- Disse O–H···O-bindingene er sterke intermolekylære krefter

---

**c) Løselighet i vann:**

**Etanol** er blandbar med vann fordi OH-gruppen kan danne **hydrogenbindinger** med vannmolekylene. OH-gruppen er **polar** – den liker vann.

**Etan** er **upolart** og har ingen OH-grupper. Vann er polart. Ifølge regelen «likt løser likt» kan upolare stoffer ikke løse seg i polare stoffer. Derfor er etan ikke løselig i vann.`,
    },

    // ========== OPPGAVE 1: MC – FUNKSJONELLE GRUPPER ==========
    {
      id: 'nat10-2-8-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-8-oppg-1',
        number: '2.8.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en funksjonell gruppe?',
        options: [
          { id: 'a', text: 'Et helt karbonmolekyl', isCorrect: false },
          { id: 'b', text: 'En bestemt gruppe atomer i et organisk molekyl som gir det sine spesielle egenskaper', isCorrect: true },
          { id: 'c', text: 'Et annet navn for en kovalent binding', isCorrect: false },
          { id: 'd', text: 'En blanding av to grunnstoffer', isCorrect: false },
        ],
        solution: `**Riktig svar: En bestemt gruppe atomer i et organisk molekyl som gir det sine spesielle egenskaper**

En funksjonell gruppe er som en «etikett» på et organisk molekyl. Den bestemmer hvilken stoffklasse molekylet tilhører og hvordan det reagerer kjemisk.

Eksempler:
- **-OH** (hydroksylgruppe) → stoffet er en **alkohol**
- **-COOH** (karboksylgruppe) → stoffet er en **karboksylsyre**

Selve karbonkjeden er «skjelettet», mens den funksjonelle gruppen gir stoffet sin identitet.`,
      },
    },

    // ========== OPPGAVE 2: KLASSISK – FUNKSJONELLE GRUPPER ==========
    {
      id: 'nat10-2-8-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-8-oppg-2',
        number: '2.8.2',
        type: 'classic',
        difficulty: 'lett',
        task: `Se på disse molekylformlene og avgjør hvilken stoffklasse hvert stoff tilhører (alkan, alkohol eller karboksylsyre). Forklar svaret.

a) CH₃OH
b) C₃H₈
c) CH₃COOH
d) C₂H₅OH
e) C₄H₁₀`,
        multipleChoiceOptions: [
          'a) Alkohol, b) Alkan, c) Karboksylsyre, d) Alkohol, e) Alkan',
          'a) Karboksylsyre, b) Alkan, c) Alkohol, d) Alkohol, e) Alkan',
          'a) Alkohol, b) Alkohol, c) Karboksylsyre, d) Alkan, e) Alkan',
          'a) Alkan, b) Alkan, c) Karboksylsyre, d) Alkohol, e) Alkohol',
        ],
        solution: `**a) CH₃OH – Alkohol (metanol)**
Inneholder en **-OH-gruppe** (hydroksylgruppe). Endingen -OH forteller oss at dette er en alkohol.

**b) C₃H₈ – Alkan (propan)**
Inneholder bare karbon og hydrogen. Passer formelen CₙH₂ₙ₊₂ (n=3: 2×3+2=8 ✓). Ingen funksjonell gruppe.

**c) CH₃COOH – Karboksylsyre (eddiksyre/etansyre)**
Inneholder en **-COOH-gruppe** (karboksylgruppe). Dette gjør stoffet til en karboksylsyre.

**d) C₂H₅OH – Alkohol (etanol)**
Inneholder en **-OH-gruppe**. Alkohol med 2 karbonatomer.

**e) C₄H₁₀ – Alkan (butan)**
Bare karbon og hydrogen. CₙH₂ₙ₊₂ med n=4: 2×4+2=10 ✓. Ingen funksjonell gruppe.

**Tips:** Se etter -OH (alkohol) eller -COOH (syre) i formelen. Hvis det bare er C og H i forholdet CₙH₂ₙ₊₂, er det et alkan.`,
      },
    },

    // ========================================================================
    // BLOKK 2: ALKOHOLER
    // ========================================================================

    // ========== DEFINISJON: ALKOHOL ==========
    {
      id: 'nat10-2-8-def-alkohol',
      type: 'definition',
      title: 'Alkohol og hydroksylgruppen',
      content: `**Alkohol:**
En organisk forbindelse der ett eller flere hydrogenatomer i et hydrokarbon er byttet ut med en **hydroksylgruppe (-OH)**.

**Hydroksylgruppe (-OH):**
Den funksjonelle gruppen som kjennetegner alkoholer. Består av ett oksygenatom bundet til ett hydrogenatom (-O-H).

**Generell formel:** R-OH (der R er en karbonkjede)

**Navnsetting:** Stamnavnet (met-, et-, prop-, but-) + endingen **-ol**
- Metanol: CH₃OH (1 karbon)
- Etanol: C₂H₅OH (2 karbon)
- Propanol: C₃H₇OH (3 karbon)

**Viktig:** OH-gruppen i alkoholer er **ikke** det samme som OH⁻-ionet i baser! Alkoholer er ikke basiske.`,
    },

    // ========== TEKST: ALKOHOLER ==========
    {
      id: 'nat10-2-8-alkoholer',
      type: 'text',
      content: `## Alkoholer – stoffer med hydroksylgruppe

Alkoholer er organiske forbindelser med en **-OH-gruppe** (hydroksylgruppe). De er blant de mest brukte organiske forbindelsene i hverdagen.

### De vanligste alkoholene

**Metanol (CH₃OH) – «tresprit»**
- Det enkleste alkoholet (1 karbon)
- Fargeløs væske med svak lukt
- **Svært giftig!** Kan forårsake blindhet og død ved inntak
- Brukes som løsemiddel og brensel
- Finnes i vindusvaskemiddel

**Etanol (C₂H₅OH) – «alkohol»**
- Det nest enkleste alkoholet (2 karbon)
- Fargeløs væske med karakteristisk lukt
- Det alkoholet som finnes i øl, vin og brennevin
- Brukes som desinfeksjonsmiddel (håndsprit)
- Kan brukes som biodrivstoff
- Kokepunkt: 78 °C

**Propanol (C₃H₇OH)**
- 3 karbonatomer
- Brukes som løsemiddel
- Finnes i noen rengjøringsprodukter

**Glyserol (C₃H₈O₃)**
- Har **3 OH-grupper** på 3 karbonatomer
- Tykk, sirupaktig væske
- Brukes i hudkrem, såpe og matvarer
- Er en viktig del av fettmolekyler

### Egenskaper

Alkoholer har noen spesielle egenskaper sammenlignet med hydrokarboner:

**1. Høyere kokepunkt**
Alkoholer har høyere kokepunkt enn hydrokarboner med tilsvarende størrelse fordi OH-gruppen danner **hydrogenbindinger** mellom molekylene.

Sammenligning:
| Stoff | Formel | Kokepunkt |
|-------|--------|-----------|
| Etan (alkan) | C₂H₆ | −89 °C |
| Etanol (alkohol) | C₂H₅OH | +78 °C |

Forskjellen er enorm – 167 °C! Alt skyldes OH-gruppens evne til å danne hydrogenbindinger.

**2. Løselighet i vann**
Små alkoholer (metanol, etanol, propanol) er **godt løselige i vann** fordi OH-gruppen kan danne hydrogenbindinger med vannmolekylene.

Større alkoholer (med lange karbonkjeder) er **mindre løselige** fordi den upolare karbonkjeden dominerer.

**3. Brennbarhet**
Alkoholer er brennbare og kan brukes som brensel:
C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O + energi`,
    },

    // ========== EKSEMPEL: ETANOL OG VANN ==========
    {
      id: 'nat10-2-8-ex-etanol-heksan',
      type: 'example',
      title: 'Eksempel: Hvorfor er etanol blandbar med vann mens heksan ikke er det?',
      problem: `Etanol (C₂H₅OH) kan blandes med vann i alle forhold, men heksan (C₆H₁₄) og vann blander seg ikke.

a) Forklar hvorfor etanol er blandbar med vann.
b) Forklar hvorfor heksan ikke er blandbar med vann.
c) Hva tror du skjer med løseligheten i vann dersom alkoholkjeden blir lengre, for eksempel heksanol (C₆H₁₃OH)?`,
      solution: `**a) Etanol i vann:**

Etanol er blandbar med vann fordi **OH-gruppen** i etanol kan danne **hydrogenbindinger** med vannmolekyler.

Vann er polart (har positive og negative ladningssentre), og OH-gruppen i etanol er også polar. Når etanol blandes med vann, danner OH-gruppen hydrogenbindinger med vann:

Etanol–OH ··· H–O–H (hydrogenbinding)

Disse bindingene erstatter vann-vann-bindingene som brytes, slik at blandingen er stabil. Dessuten er karbonkjeden i etanol kort (bare 2 C-atomer), så den upolare delen er liten.

---

**b) Heksan i vann:**

Heksan (C₆H₁₄) er et **upolart** hydrokarbon uten funksjonelle grupper. Det har ingen OH-gruppe og kan ikke danne hydrogenbindinger med vann.

Regelen «**likt løser likt**» betyr:
- Polare stoffer løser seg i polare løsemidler (vann)
- Upolare stoffer løser seg i upolare løsemidler

Heksan er upolart, vann er polart → de blander seg ikke. Heksan flyter oppå vannet (lavere tetthet).

---

**c) Heksanol:**

**Heksanol (C₆H₁₃OH)** har en OH-gruppe (som etanol), men karbonkjeden er mye lengre (6 C-atomer).

Den lange, upolare karbonkjeden dominerer over den lille, polare OH-gruppen. Resultatet er at heksanol er **lite løselig i vann** – bare ca. 6 g per liter.

**Regel for alkoholer og løselighet:**
- Korte karbonkjeder (1–3 C): Godt løselig i vann
- Middels karbonkjeder (4–5 C): Delvis løselig
- Lange karbonkjeder (6+ C): Lite løselig

Jo lengre den upolare karbonkjeden er, desto mer ligner alkoholen på et hydrokarbon og desto mindre løselig er den i vann.`,
    },

    // ========== OPPGAVE 3: MC – ALKOHOLER ==========
    {
      id: 'nat10-2-8-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-8-oppg-3',
        number: '2.8.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvorfor har etanol (kokepunkt 78 °C) mye høyere kokepunkt enn etan (kokepunkt −89 °C)?',
        options: [
          { id: 'a', text: 'Fordi etanol har flere karbonatomer', isCorrect: false },
          { id: 'b', text: 'Fordi OH-gruppen i etanol danner hydrogenbindinger mellom molekylene', isCorrect: true },
          { id: 'c', text: 'Fordi etanol er tyngre enn etan', isCorrect: false },
          { id: 'd', text: 'Fordi etanol inneholder oksygen som er et tungt atom', isCorrect: false },
        ],
        solution: `**Riktig svar: Fordi OH-gruppen i etanol danner hydrogenbindinger mellom molekylene**

**Hydrogenbindinger** er relativt sterke intermolekylære krefter som oppstår mellom molekyler med O–H-bindinger. I etanol kan OH-gruppen på ett molekyl danne hydrogenbindinger med OH-gruppen på nabomolekylet.

Disse hydrogenbindingene er mye sterkere enn de svake Van der Waals-kreftene som virker mellom etan-molekyler.

Sterkere intermolekylære krefter → mer energi trengs for å skille molekylene → høyere kokepunkt.

Det er altså **ikke** den ekstra massen fra oksygenatomet som er avgjørende, men **hydrogenbindingene** som OH-gruppen gir opphav til.`,
      },
    },

    // ========== OPPGAVE 4: KLASSISK – NAVNGI ALKOHOLER ==========
    {
      id: 'nat10-2-8-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-8-oppg-4',
        number: '2.8.4',
        type: 'classic',
        difficulty: 'lett',
        task: `a) Navngi disse alkoholene:
   - CH₃OH
   - C₂H₅OH
   - C₃H₇OH

b) Skriv molekylformelen til butanol (alkohol med 4 karbonatomer).

c) Ranger metanol, etanol og propanol etter kokepunkt fra lavest til høyest. Forklar mønsteret.`,
        multipleChoiceOptions: [
          'a) Metanol, etanol, propanol. b) C₄H₉OH. c) Metanol < etanol < propanol (lengre kjede = sterkere krefter).',
          'a) Metanol, etanol, propanol. b) C₄H₁₀OH. c) Propanol < etanol < metanol.',
          'a) Metan, etan, propan. b) C₄H₉OH. c) Metanol < etanol < propanol.',
          'a) Metanol, etanol, propanol. b) C₄H₈OH. c) Alle har likt kokepunkt.',
        ],
        solution: `**a) Navngi alkoholene:**

- **CH₃OH** → **Metanol** (met- = 1 karbon + -ol = alkohol)
- **C₂H₅OH** → **Etanol** (et- = 2 karbon + -ol)
- **C₃H₇OH** → **Propanol** (prop- = 3 karbon + -ol)

---

**b) Butanol:**

But- = 4 karbon. Alkohol med 4 C trenger:
- 4 karbonatomer
- 9 hydrogenatomer (fra butankjeden C₄H₁₀ minus ett H som erstattes av OH)
- 1 OH-gruppe

**Molekylformel: C₄H₉OH** (kan også skrives C₄H₁₀O)

---

**c) Rangering etter kokepunkt:**

**Metanol (65 °C) < Etanol (78 °C) < Propanol (97 °C)**

**Forklaring:**
Alle tre har OH-grupper og danner hydrogenbindinger. Men i tillegg har de Van der Waals-krefter mellom karbonkjedene.

Jo **lengre karbonkjeden** er:
- Desto **flere elektroner** og **større kontaktflate**
- Desto **sterkere Van der Waals-krefter**
- Desto **høyere kokepunkt**

Dette er det samme mønsteret som for alkaner – kokepunktet øker med molekylstørrelsen.`,
      },
    },

    // ========================================================================
    // BLOKK 3: KARBOKSYLSYRER
    // ========================================================================

    // ========== DEFINISJON: KARBOKSYLSYRE ==========
    {
      id: 'nat10-2-8-def-karboksylsyre',
      type: 'definition',
      title: 'Karboksylsyre og karboksylgruppen',
      content: `**Karboksylsyre:**
En organisk forbindelse som inneholder en **karboksylgruppe (-COOH)**.

**Karboksylgruppe (-COOH):**
En funksjonell gruppe som består av et karbonylatom (C=O) bundet til en hydroksylgruppe (O-H). Denne gruppen kan avgi et H⁺-ion, og det er dette som gjør stoffet surt.

**Generell formel:** R–COOH

**Navnsetting:**
- Systematisk: Stamnavnet + **-syre** (metansyre, etansyre, propansyre)
- Trivialnavnene brukes ofte: maursyre, eddiksyre, smørsyre

| Systematisk navn | Trivialnavn | Formel | Karbonatomer |
|------------------|-------------|--------|--------------|
| Metansyre | Maursyre | HCOOH | 1 |
| Etansyre | Eddiksyre | CH₃COOH | 2 |
| Propansyre | Propionsyre | C₂H₅COOH | 3 |
| Butansyre | Smørsyre | C₃H₇COOH | 4 |`,
    },

    // ========== TEKST: KARBOKSYLSYRER ==========
    {
      id: 'nat10-2-8-karboksylsyrer',
      type: 'text',
      content: `## Karboksylsyrer – organiske syrer

Karboksylsyrer er organiske forbindelser med en **-COOH-gruppe**. De er **svake syrer** – de avgir H⁺-ioner i vann, men ikke like effektivt som sterke syrer som HCl.

### Vanlige karboksylsyrer

**Maursyre (metansyre, HCOOH)**
- Den enkleste karboksylsyren (1 karbonatom)
- Finnes i maurstikk (derav navnet!)
- Brukes i konserveringsmidler og garving av lær
- Svir på huden

**Eddiksyre (etansyre, CH₃COOH)**
- Den mest kjente karboksylsyren (2 karbonatomer)
- 5–8 % eddiksyre i husholdningseddik
- Brukes i matlaging, konservering og rengjøring
- Sur smak og skarp lukt

**Smørsyre (butansyre, C₃H₇COOH)**
- 4 karbonatomer
- Dannes når smør harskner (derav navnet!)
- Svært ubehagelig lukt (harskt, oppkast-aktig)
- Finnes i svette og ost

**Sitronsyre (C₆H₈O₇)**
- Finnes naturlig i sitroner, appelsiner og andre sitrusfrukter
- Har 3 karboksylgrupper
- Brukes som smakstilsetning og konserveringsmiddel
- Gjør sitrusfrukter sure

### Egenskaper

**1. Sure egenskaper:**
Karboksylsyrer er svake syrer. I vann avgir -COOH-gruppen et H⁺-ion:

CH₃COOH ⇌ CH₃COO⁻ + H⁺

- De har pH under 7
- De reagerer med baser (nøytralisering)
- De reagerer med metaller og gir hydrogengass

**2. Reagerer med baser:**
Karboksylsyre + base → salt + vann (nøytralisering)

Eddiksyre + natriumhydroksid → natriumacetat + vann:
CH₃COOH + NaOH → CH₃COONa + H₂O

**3. Høye kokepunkter:**
Karboksylsyrer har enda høyere kokepunkt enn alkoholer fordi -COOH-gruppen kan danne ekstra sterke hydrogenbindinger.

Eddiksyre: 118 °C (vs. etanol: 78 °C)`,
    },

    // ========== EKSEMPEL: NØYTRALISERING ==========
    {
      id: 'nat10-2-8-ex-noeytralisering',
      type: 'example',
      title: 'Eksempel: Nøytralisering av eddiksyre med natronlut',
      problem: `Eddiksyre (CH₃COOH) reagerer med natriumhydroksid (NaOH, natronlut).

a) Skriv den balanserte reaksjonslikningen.
b) Hva slags type reaksjon er dette?
c) Hva er produktene, og hvilke egenskaper har de?
d) Hvis du blander like mengder eddiksyre og NaOH, hva blir pH-en omtrent?`,
      solution: `**a) Balansert reaksjonslikning:**

**CH₃COOH + NaOH → CH₃COONa + H₂O**

Eddiksyre + Natriumhydroksid → Natriumacetat + Vann

Likningen er allerede balansert:
- C: 2 = 2 ✓
- H: 4 + 1 = 1 + 2×1 + 2×1... La oss telle nøyere:
  - Venstre: 4H (i CH₃COOH) + 1H (i NaOH) = 5H (men 1O i OH)
  - Totalt: C₂H₄O₂ + NaOH → C₂H₃O₂Na + H₂O ✓

---

**b) Type reaksjon:**

Dette er en **nøytraliseringsreaksjon** – en syre reagerer med en base og danner salt og vann.

Generelt: **Syre + Base → Salt + Vann**

---

**c) Produkter:**

**Natriumacetat (CH₃COONa):**
- Et **salt** (ioneforbindelse)
- Hvitt, fast stoff som er løselig i vann
- Nøytral til svakt basisk i løsning
- Brukes i matlaging (f.eks. i salt-og-eddikchips)

**Vann (H₂O):**
- Dannet fra H⁺ (fra syren) og OH⁻ (fra basen)
- Nøytralt

---

**d) pH ved like mengder:**

Hvis man blander **like mengder** (like antall mol) eddiksyre og NaOH, vil all syren og basen reagere med hverandre. Løsningen inneholder da bare natriumacetat og vann.

pH-en vil bli **omtrent 7–8** (svakt basisk). Den er ikke nøyaktig 7 fordi natriumacetat er saltet av en svak syre og sterk base, som gir en svakt basisk løsning.`,
    },

    // ========== OPPGAVE 5: MC – KARBOKSYLSYRER ==========
    {
      id: 'nat10-2-8-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-8-oppg-5',
        number: '2.8.5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken funksjonell gruppe kjennetegner karboksylsyrer?',
        options: [
          { id: 'a', text: '-OH (hydroksylgruppe)', isCorrect: false },
          { id: 'b', text: '-COOH (karboksylgruppe)', isCorrect: true },
          { id: 'c', text: '-NH₂ (aminogruppe)', isCorrect: false },
          { id: 'd', text: '-CHO (aldehydgruppe)', isCorrect: false },
        ],
        solution: `**Riktig svar: -COOH (karboksylgruppe)**

Karboksylsyrer kjennetegnes av **karboksylgruppen (-COOH)**, som inneholder:
- Et karbonatom dobbeltbundet til et oksygen (C=O)
- Samme karbonatom bundet til en OH-gruppe (O-H)

Det er H-atomet i -COOH som kan avgis som H⁺, noe som gjør stoffet surt.

De andre alternativene:
- -OH er hydroksylgruppen som finnes i **alkoholer**
- -NH₂ er aminogruppen som finnes i **aminosyrer** og **aminer**
- -CHO er aldehydgruppen som finnes i **aldehyder**`,
      },
    },

    // ========== OPPGAVE 6: KLASSISK – KARBOKSYLSYRER I HVERDAGEN ==========
    {
      id: 'nat10-2-8-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-8-oppg-6',
        number: '2.8.6',
        type: 'classic',
        difficulty: 'medium',
        task: `a) Nevn tre karboksylsyrer du finner i hverdagen, og forklar hvor de finnes.
b) Skriv molekylformelen og det systematiske navnet til eddiksyre.
c) Eddiksyre er en svak syre. Hva betyr det? Skriv likningen for hva som skjer når eddiksyre løses i vann.
d) Hva skjer når eddiksyre blandes med natron (natriumhydrogenkarbonat, NaHCO₃)? Beskriv observasjonen og skriv reaksjonslikningen.`,
        multipleChoiceOptions: [
          'a) Eddiksyre (eddik), sitronsyre (sitron), maursyre (maurbitt). b) CH₃COOH, etansyre. c) Avgir lite H⁺. d) Bobler av CO₂.',
          'a) Saltsyre (mage), svovelsyre (batteri), eddiksyre (eddik). b) C₂H₄O₂, etansyre. c) Avgir alt H⁺. d) Ingenting skjer.',
          'a) Eddiksyre, sitronsyre, smørsyre. b) CH₃COOH, metansyre. c) Avgir alt H⁺. d) Eksplosjonsfare.',
          'a) Eddiksyre, sitronsyre, maursyre. b) HCOOH, etansyre. c) Avgir lite H⁺. d) Bobler av H₂.',
        ],
        solution: `**a) Tre karboksylsyrer i hverdagen:**

1. **Eddiksyre (etansyre, CH₃COOH):** Finnes i husholdningseddik (ca. 5 %). Brukes i matlaging, salatdressinger og konservering. Den sure smaken i eddik kommer fra eddiksyre.

2. **Sitronsyre (C₆H₈O₇):** Finnes naturlig i sitrusfrukter (sitroner, appelsiner, lime). Brukes som smakstilsetning i brus og godteri, og som konserveringsmiddel i mat.

3. **Maursyre (metansyre, HCOOH):** Finnes i maurstikk og brennesle. Det er dette stoffet som gjør at maurbitt og brennesle svir.

---

**b) Eddiksyre:**

**Molekylformel:** CH₃COOH (eller C₂H₄O₂)
**Systematisk navn:** Etansyre (et- = 2 karbon + -syre)

---

**c) Eddiksyre som svak syre:**

En **svak syre** avgir bare **en liten del** av sine H⁺-ioner til vannet. De fleste eddiksyremolekylene forblir hele (uioniserte).

**Likning:**
CH₃COOH ⇌ CH₃COO⁻ + H⁺

Dobbeltpilen (⇌) viser at reaksjonen er en **likevekt** – den går begge veier. Bare ca. 1 % av eddiksyremolekylene avgir H⁺.

Til sammenligning avgir sterke syrer som HCl nesten alle sine H⁺-ioner.

---

**d) Eddiksyre + natron (NaHCO₃):**

**Observasjon:** Det **bobler** og **bruser** kraftig!

**Reaksjonslikning:**
CH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂↑

Boblene er **karbondioksid (CO₂)** som dannes i reaksjonen. Denne reaksjonen er den samme som skjer i «vulkan»-eksperimentet med eddik og natron!

Produktene er natriumacetat (salt), vann og CO₂-gass.`,
      },
    },

    // ========================================================================
    // BLOKK 4: ESTERE
    // ========================================================================

    // ========== DEFINISJON: ESTER ==========
    {
      id: 'nat10-2-8-def-ester',
      type: 'definition',
      title: 'Ester og esterifisering',
      content: `**Ester:**
En organisk forbindelse som dannes når en **alkohol** reagerer med en **karboksylsyre**. Estere inneholder gruppen **-COO-** (estergruppe).

**Esterifisering:**
Den kjemiske reaksjonen der en alkohol og en karboksylsyre reagerer og danner en ester og vann.

**Generell reaksjon:**
Karboksylsyre + Alkohol ⇌ Ester + Vann

R–COOH + R'–OH ⇌ R–COO–R' + H₂O

*R og R' representerer karbonkjeder (kan være like eller ulike).*

**Egenskaper:**
- Mange estere har **behagelig, fruktig lukt**
- De er ofte ansvarlige for lukten og smaken til frukt
- Brukes som aromastoffer i matvarer, parfyme og kosmetikk`,
    },

    // ========== TEKST: ESTERE ==========
    {
      id: 'nat10-2-8-estere',
      type: 'text',
      content: `## Estere – organiske lukt- og smaksstoffer

Estere er en viktig klasse organiske forbindelser som dannes når en **alkohol** reagerer med en **karboksylsyre**. Mange av de behagelige luktene og smakene vi forbinder med frukt, skyldes estere.

### Hvordan dannes en ester?

**Esterifisering** er reaksjonen mellom en alkohol og en karboksylsyre:

**Eddiksyre + Etanol → Etylacetat + Vann**
CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O

I denne reaksjonen:
- OH-gruppen fra syren og H fra alkoholen fjernes og danner vann
- Alkohol og syre kobles sammen via en estergruppe (-COO-)
- Reaksjonen er reversibel (⇌) og trenger ofte en katalysator (f.eks. svovelsyre)

### Estere i hverdagen – lukter og smaker

Mange frukter får sin karakteristiske lukt fra estere:

| Ester | Dannet fra | Lukt/smak |
|-------|------------|-----------|
| Etylacetat | Eddiksyre + etanol | Lim, neglelakkfjerner |
| Etylbutanoat | Smørsyre + etanol | Ananas |
| Pentylacetat | Eddiksyre + pentanol | Banan |
| Oktylacetat | Eddiksyre + oktanol | Appelsin |
| Pentylbutanoat | Smørsyre + pentanol | Aprikos |
| Metylbutanoat | Smørsyre + metanol | Eple |

**Merk:** Det er fascinerende at **smørsyre** (som lukter forferdelig!) kan reagere med en alkohol og gi en ester som lukter **ananas** eller **aprikos**!

### Bruk av estere

- **Aromastoffer:** Tilsettes mat og drikke for å gi fruktsmak
- **Parfyme:** Mange parfymer inneholder estere
- **Løsemidler:** Etylacetat brukes i neglelakkfjerner og lim
- **Legemidler:** Aspirin (acetylsalisylsyre) er en ester
- **Plast:** Polyester er en polymer laget av estere

### Hydrolyse – det motsatte av esterifisering

Estere kan også brytes ned tilbake til alkohol og syre ved reaksjon med vann. Denne reaksjonen kalles **hydrolyse**:

Ester + Vann → Karboksylsyre + Alkohol

Hydrolyse av fett i kroppen er viktig for fordøyelsen!`,
    },

    // ========== EKSEMPEL: LAG EN ESTER ==========
    {
      id: 'nat10-2-8-ex-ester',
      type: 'example',
      title: 'Eksempel: Lag en ester fra etanol og eddiksyre',
      problem: `Etanol (C₂H₅OH) reagerer med eddiksyre (CH₃COOH) i nærvær av en katalysator.

a) Skriv den balanserte reaksjonslikningen.
b) Hva heter esterproduktet?
c) Hvilke egenskaper har produktet?
d) Hva fjernes fra reaktantene for å danne vann?`,
      solution: `**a) Balansert reaksjonslikning:**

**CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O**

Eddiksyre + Etanol ⇌ Etylacetat + Vann

---

**b) Esterens navn:**

Produktet heter **etylacetat** (eller etyl-etanoat i systematisk navnsetting).

Navneregelen for estere:
- Første del: fra alkoholen (et**yl** fra etanol)
- Andre del: fra syren (acet**at** fra eddiksyre/etansyre)

---

**c) Egenskaper:**

Etylacetat er:
- En fargeløs væske
- Har en **karakteristisk, fruktig lukt** (ligner litt på pæredråper)
- Kokepunkt: 77 °C
- Lite løselig i vann
- Mye brukt som **løsemiddel** (neglelakkfjerner, lim, maling)

---

**d) Vanndannelse:**

I esterifiseringen fjernes:
- **OH-gruppen** fra karboksylsyren (CH₃CO**OH**)
- **H-atomet** fra alkoholens OH-gruppe (C₂H₅O**H**)

Disse kombineres til **H₂O** (vann):

\`\`\`
CH₃CO-[OH] + [H]-OC₂H₅ → CH₃COOC₂H₅ + H₂O
       ↑           ↑
   fra syren   fra alkoholen → danner vann
\`\`\`

Resten av syren og alkoholen kobles sammen via den nye esterbindingen (-COO-).`,
    },

    // ========== OPPGAVE 7: KLASSISK – ESTERE ==========
    {
      id: 'nat10-2-8-exercise-7',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-8-oppg-7',
        number: '2.8.7',
        type: 'classic',
        difficulty: 'medium',
        task: `a) Skriv den generelle reaksjonslikningen for esterifisering.
b) Hvilken alkohol og hvilken syre trengs for å lage pentylacetat (som lukter banan)?
c) Smørsyre (butansyre, C₃H₇COOH) lukter forferdelig, men estere av smørsyre lukter frukt. Forklar hvorfor egenskapene endres så mye.
d) Forklar kort hva hydrolyse av en ester er.`,
        multipleChoiceOptions: [
          'a) Syre + Alkohol ⇌ Ester + Vann. b) Pentanol + eddiksyre. c) Den funksjonelle gruppen endres. d) Ester + vann → syre + alkohol.',
          'a) Syre + Base → Salt + Vann. b) Pentan + eddiksyre. c) Massen endres. d) Ester → syre.',
          'a) Syre + Alkohol → Ester + CO₂. b) Pentanol + smørsyre. c) Nye atomer legges til. d) Ester + O₂ → syre + alkohol.',
          'a) Syre + Alkohol ⇌ Ester + Vann. b) Pentanol + eddiksyre. c) pH endres. d) Ester spaltes i syre og vann.',
        ],
        solution: `**a) Generell reaksjonslikning:**

**Karboksylsyre + Alkohol ⇌ Ester + Vann**
R–COOH + R'–OH ⇌ R–COO–R' + H₂O

Dobbeltpilen (⇌) viser at reaksjonen er reversibel – den kan gå begge veier.

---

**b) Pentylacetat:**

Pentylacetat (bananlukt) dannes fra:
- **Pentanol** (C₅H₁₁OH) – alkoholen (pentyl- = 5 karbon)
- **Eddiksyre** (CH₃COOH) – karboksylsyren (acetat = fra eddiksyre)

CH₃COOH + C₅H₁₁OH ⇌ CH₃COOC₅H₁₁ + H₂O

---

**c) Hvorfor endres egenskapene:**

Når smørsyre reagerer med en alkohol, endres den **funksjonelle gruppen** fullstendig. -COOH-gruppen i smørsyre (som gir den vonde lukten) omdannes til en -COO-estergruppe.

Den nye estergruppen har helt andre egenskaper enn karboksylgruppen:
- Estere er mindre polare
- Estere kan ikke danne like sterke hydrogenbindinger
- Estere har helt annen lukt (ofte fruktig og behagelig)

Det er den funksjonelle gruppen som bestemmer egenskapene – endres den, endres egenskapene dramatisk.

---

**d) Hydrolyse:**

**Hydrolyse** er det motsatte av esterifisering. En ester reagerer med vann og spaltes tilbake til karboksylsyre og alkohol:

**Ester + Vann → Karboksylsyre + Alkohol**
R–COO–R' + H₂O → R–COOH + R'–OH

Hydrolyse av estere er viktig i kroppen – for eksempel brytes fett (som er estere) ned ved hydrolyse under fordøyelsen.`,
      },
    },

    // ========== OPPGAVE 8: MC – ESTERE ==========
    {
      id: 'nat10-2-8-exercise-8',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-8-oppg-8',
        number: '2.8.8',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva dannes når en karboksylsyre reagerer med en alkohol?',
        options: [
          { id: 'a', text: 'Et salt og vann', isCorrect: false },
          { id: 'b', text: 'En ester og vann', isCorrect: true },
          { id: 'c', text: 'Et alkan og karbondioksid', isCorrect: false },
          { id: 'd', text: 'En base og hydrogen', isCorrect: false },
        ],
        solution: `**Riktig svar: En ester og vann**

Reaksjonen mellom en karboksylsyre og en alkohol kalles **esterifisering**:

Karboksylsyre + Alkohol ⇌ **Ester** + **Vann**

Eksempel:
CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O

**Merk forskjellen:**
- Syre + **Base** → Salt + Vann (nøytralisering)
- Syre + **Alkohol** → Ester + Vann (esterifisering)

Begge gir vann, men den andre produktet er forskjellig (salt vs. ester).`,
      },
    },

    // ========================================================================
    // BLOKK 5: KARBOHYDRATER
    // ========================================================================

    // ========== DEFINISJON: KARBOHYDRATER ==========
    {
      id: 'nat10-2-8-def-karbohydrater',
      type: 'definition',
      title: 'Karbohydrater',
      content: `**Karbohydrater** er organiske forbindelser som inneholder karbon (C), hydrogen (H) og oksygen (O), vanligvis i forholdet 1:2:1.

Generell formel: **Cₙ(H₂O)ₙ** (derav navnet «karbo-hydrat» = karbon + vann)

**Tre hovedgrupper:**

**Monosakkarider (enkle sukkerarter):**
- De enkleste karbohydratene, kan ikke brytes ned videre
- Eksempler: glukose (druesukker, C₆H₁₂O₆), fruktose (fruktsukker)

**Disakkarider (doble sukkerarter):**
- To monosakkarider bundet sammen
- Eksempler: sukrose (vanlig sukker), laktose (melkesukker), maltose (maltsukker)

**Polysakkarider (sammensatte sukkerarter):**
- Mange monosakkarider bundet sammen i lange kjeder
- Eksempler: stivelse (energilager i planter), glykogen (energilager i dyr), cellulose (plantefiber)`,
    },

    // ========== TEKST: KARBOHYDRATER ==========
    {
      id: 'nat10-2-8-karbohydrater',
      type: 'text',
      content: `## Karbohydrater – kroppens viktigste energikilde

Karbohydrater er en av de viktigste gruppene av biologiske molekyler. De er kroppens **foretrukne energikilde** og finnes i mat som brød, ris, pasta, frukt, grønnsaker og søtsaker.

### Monosakkarider

**Glukose (druesukker, C₆H₁₂O₆)**
- Det viktigste monosakkaridet
- Kroppens «drivstoff» – cellene bruker glukose til å produsere energi
- Finnes i frukt, honning og blod (blodsukker)
- Produseres av planter gjennom fotosyntese:
  6CO₂ + 6H₂O + solenergi → C₆H₁₂O₆ + 6O₂

**Fruktose (fruktsukker, C₆H₁₂O₆)**
- Har **samme molekylformel** som glukose, men atomene er ordnet annerledes
- Smaken er søtere enn glukose
- Finnes i frukt og honning

### Disakkarider

**Sukrose (vanlig sukker, C₁₂H₂₂O₁₁)**
- Dannet av glukose + fruktose bundet sammen
- Det hvite sukkeret vi bruker i matlaging
- Utvinnes fra sukkerrør eller sukkerbeter

**Laktose (melkesukker)**
- Dannet av glukose + galaktose
- Finnes naturlig i melk
- Noen mennesker mangler enzymet laktase og er laktoseintolerante

### Polysakkarider

**Stivelse:**
- Energilager i planter (i poteter, ris, korn)
- Lange kjeder av glukose-enheter
- Brytes ned til glukose i fordøyelsen

**Glykogen:**
- Energilager i dyr (i lever og muskler)
- Også lange kjeder av glukose
- Når kroppen trenger energi, brytes glykogen ned til glukose

**Cellulose:**
- Hovedkomponent i **planteceller** (cellevegger)
- Også lange kjeder av glukose, men med annen binding
- Mennesker kan **ikke** fordøye cellulose (vi mangler enzymet)
- Cellulose er «fiber» i mat – viktig for fordøyelsen selv om vi ikke tar opp næring fra den

### Karbohydrater som energikilde

Når kroppen forbrenner glukose, frigjøres energi:

**C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energi** (celleånding)

Dette er det **motsatte av fotosyntese**!

Planter lager glukose fra CO₂ og H₂O med solenergi (fotosyntese), og kroppen vår bryter ned glukose og frigjør energien igjen (celleånding).`,
    },

    // ========== EKSEMPEL: NEDBRYTING AV STIVELSE ==========
    {
      id: 'nat10-2-8-ex-stivelse',
      type: 'example',
      title: 'Eksempel: Hvordan bryter kroppen ned stivelse',
      problem: `Stivelse er et polysakkarid som finnes i brød, poteter og ris.

a) Hva er stivelse bygd opp av?
b) Hva skjer med stivelse i fordøyelsen? Beskriv prosessen.
c) Skriv den forenklede reaksjonslikningen for forbrenning av glukose i cellene.
d) Hvorfor kan vi fordøye stivelse men ikke cellulose?`,
      solution: `**a) Oppbygning:**

Stivelse er et **polysakkarid** – det er bygd opp av mange hundre eller tusen **glukose-enheter** (C₆H₁₂O₆) som er bundet sammen i en lang kjede.

Vi kan tenke på stivelse som en lang «perlekjede» der hver «perle» er et glukosemolekyl.

---

**b) Fordøyelsen av stivelse:**

**1. I munnen:**
- Spyttet inneholder enzymet **amylase** (spyttamylase)
- Amylase begynner å bryte ned stivelse til mindre biter (maltose og andre fragmenter)
- Dette er grunnen til at brød smaker søtere jo lenger du tygger!

**2. I magesekken:**
- Magesyren stopper amylase-aktiviteten midlertidig
- Magesyren bidrar til å bryte ned maten mekanisk

**3. I tynntarmen:**
- Bukspyttkjertelen sender **pankreas-amylase** til tynntarmen
- Stivelsen brytes videre ned til **maltose** (disakkarid)
- Enzymet **maltase** bryter maltose ned til **glukose** (monosakkarid)

**4. Opptak:**
- Glukose tas opp gjennom tarmveggen og inn i blodet
- Blodet transporterer glukosen til cellene i kroppen
- I cellene brukes glukosen til energiproduksjon

---

**c) Forbrenning av glukose (celleånding):**

**C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energi**

Glukose + Oksygen → Karbondioksid + Vann + Energi

Denne energien brukes til alt kroppen gjør: bevegelse, tenking, oppvarming, vekst.

---

**d) Stivelse vs. cellulose:**

Både stivelse og cellulose er polysakkarider bygd opp av glukose – men bindingene mellom glukoseenhetene er **forskjellige**.

- **Stivelse** har **alfa-bindinger** (α-bindinger) som enzymet amylase kan bryte ned
- **Cellulose** har **beta-bindinger** (β-bindinger) som mennesker **ikke har enzym** til å bryte

Noen dyr, som kuer og termitter, har bakterier i tarmen som kan bryte ned cellulose. Mennesker kan det ikke, men cellulose fungerer som viktig **fiber** som hjelper fordøyelsen.`,
    },

    // ========== OPPGAVE 9: MC – KARBOHYDRATER ==========
    {
      id: 'nat10-2-8-exercise-9',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-8-oppg-9',
        number: '2.8.9',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket av disse er et polysakkarid?',
        options: [
          { id: 'a', text: 'Glukose', isCorrect: false },
          { id: 'b', text: 'Sukrose', isCorrect: false },
          { id: 'c', text: 'Stivelse', isCorrect: true },
          { id: 'd', text: 'Fruktose', isCorrect: false },
        ],
        solution: `**Riktig svar: Stivelse**

**Stivelse** er et polysakkarid – en lang kjede av mange hundre glukose-enheter bundet sammen. Den finnes som energilager i planter (poteter, ris, korn).

De andre alternativene:
- **Glukose** og **fruktose** er **monosakkarider** (enkle sukkerarter med bare én sukkerenhet)
- **Sukrose** (vanlig sukker) er et **disakkarid** (to monosakkarider – glukose og fruktose – bundet sammen)

**Huskeregel:**
- Mono = én enhet
- Di = to enheter
- Poly = mange enheter`,
      },
    },

    // ========== OPPGAVE 10: KLASSISK – KARBOHYDRATER ==========
    {
      id: 'nat10-2-8-exercise-10',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-8-oppg-10',
        number: '2.8.10',
        type: 'classic',
        difficulty: 'medium',
        task: `a) Forklar forskjellen mellom monosakkarider, disakkarider og polysakkarider. Gi ett eksempel på hvert.

b) Fotosyntese og celleånding er «motsatte» prosesser. Skriv reaksjonslikningene for begge og forklar sammenhengen.

c) Du har spist en brødskive med stivelse. Beskriv veien fra stivelse i brødet til energi i muskelcellene dine.`,
        multipleChoiceOptions: [
          'a) Mono: glukose (1 enhet), di: sukrose (2 enheter), poly: stivelse (mange enheter). b) Fotosyntese: CO₂+H₂O→C₆H₁₂O₆+O₂, Celleånding: C₆H₁₂O₆+O₂→CO₂+H₂O.',
          'a) Mono: stivelse, di: glukose, poly: sukrose. b) Begge gir CO₂.',
          'a) Mono: sukrose, di: glukose, poly: stivelse. b) Fotosyntese bruker O₂, celleånding bruker CO₂.',
          'a) Mono: glukose, di: sukrose, poly: stivelse. b) Fotosyntese og celleånding har samme likning.',
        ],
        solution: `**a) Tre grupper karbohydrater:**

**Monosakkarider** (enkle sukkerarter):
- Inneholder bare **én sukkerenhet**
- Kan ikke brytes ned til enklere sukkerarter
- Eksempel: **Glukose** (C₆H₁₂O₆) – druesukker, kroppens viktigste energikilde

**Disakkarider** (doble sukkerarter):
- Inneholder **to monosakkarider** bundet sammen
- Kan brytes ned til to monosakkarider
- Eksempel: **Sukrose** (C₁₂H₂₂O₁₁) – vanlig bordsukker, laget av glukose + fruktose

**Polysakkarider** (sammensatte sukkerarter):
- Inneholder **mange** (hundrevis til tusenvis) monosakkarider bundet i kjeder
- Eksempel: **Stivelse** – energilager i planter, lange kjeder av glukose

---

**b) Fotosyntese og celleånding:**

**Fotosyntese** (i planter):
6CO₂ + 6H₂O + **solenergi** → C₆H₁₂O₆ + 6O₂

Planter tar opp CO₂ og H₂O, bruker solenergi, og lager glukose og O₂.

**Celleånding** (i alle levende celler):
C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + **energi**

Celler bryter ned glukose med O₂ og frigjør energi, CO₂ og H₂O.

**Sammenheng:** De er **motsatte** prosesser! Reaktantene i den ene er produktene i den andre. Planter lagrer solenergi i glukose, og alle levende organismer frigjør denne energien gjennom celleånding.

---

**c) Fra brødstivelse til muskelenergi:**

1. **Munnen:** Amylase i spyttet begynner å bryte ned stivelse til maltose
2. **Tynntarmen:** Enzymer bryter maltose ned til glukose
3. **Tarmveggen:** Glukose tas opp i blodet
4. **Blodet:** Glukose transporteres til muskelcellene
5. **Muskelcellene:** Glukose + O₂ → CO₂ + H₂O + **energi** (celleånding)
6. **Energien** brukes til muskelsammentrekking (bevegelse)
7. **CO₂** transporteres med blodet til lungene og pustes ut
8. **H₂O** brukes i kroppen eller skilles ut`,
      },
    },

    // ========================================================================
    // BLOKK 6: FETT OG PROTEINER
    // ========================================================================

    // ========== TEKST: FETT OG PROTEINER ==========
    {
      id: 'nat10-2-8-fett-proteiner',
      type: 'text',
      content: `## Fett og proteiner – biologisk viktige molekyler

I tillegg til karbohydrater er **fett** og **proteiner** essensielle organiske stoffer for alle levende organismer.

### Fett (lipider)

Fett er **estere** av glyserol og fettsyrer. Et fettmolekyl består av:
- **1 glyserol-molekyl** (en alkohol med 3 OH-grupper)
- **3 fettsyrer** (lange karboksylsyrer)

De tre fettsyrene er bundet til glyserol gjennom **esterbindinger**.

**Mettede og umettede fettsyrer:**

| Type | Bindinger | Eksempel | Kilde | Fase |
|------|-----------|----------|-------|------|
| Mettet | Bare enkeltbindinger | Palmitinsyre, stearinsyre | Smør, kjøtt, ost | Fast (romtemp.) |
| Umettet | Minst én dobbeltbinding | Oljesyre, linolsyre | Olivenolje, fiskeolje | Flytende (romtemp.) |

**Funksjoner i kroppen:**
- **Energilager** – fett inneholder dobbelt så mye energi per gram som karbohydrater
- **Isolasjon** – underhudsfett holder oss varme
- **Beskyttelse** – fett rundt organer virker som støtputer
- **Byggemateriale** – cellemembraner er bygd opp av lipider

### Proteiner

Proteiner er lange kjeder av **aminosyrer** bundet sammen med **peptidbindinger**.

**Aminosyrer:**
- Det finnes 20 forskjellige aminosyrer
- Hver aminosyre har en **aminogruppe (-NH₂)** og en **karboksylgruppe (-COOH)**
- Rekkefølgen av aminosyrene bestemmer proteinets egenskaper
- DNA-et ditt inneholder oppskriften på alle proteinene kroppen din trenger

**Funksjoner i kroppen:**
- **Enzymer** – katalyserer kjemiske reaksjoner (f.eks. amylase som bryter ned stivelse)
- **Byggemateriale** – muskler, hud, hår, negler
- **Transport** – hemoglobin frakter oksygen i blodet
- **Antistoffer** – immunforsvaret bruker proteiner til å bekjempe infeksjoner
- **Hormoner** – insulin regulerer blodsukkeret

### De tre makronæringsstoffene

| Næringsstoff | Byggesteiner | Energi per gram | Eksempler i mat |
|-------------|-------------|-----------------|-----------------|
| Karbohydrater | Monosakkarider | 17 kJ/g | Brød, ris, frukt |
| Fett | Glyserol + fettsyrer | 38 kJ/g | Smør, olje, nøtter |
| Proteiner | Aminosyrer | 17 kJ/g | Kjøtt, fisk, egg, bønner |

Fett gir altså **mer enn dobbelt** så mye energi per gram som karbohydrater og proteiner!`,
    },

    // ========== OPPGAVE 11: MC – BIOLOGISKE MAKROMOLEKYLER ==========
    {
      id: 'nat10-2-8-exercise-11',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-8-oppg-11',
        number: '2.8.11',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er proteiner bygd opp av?',
        options: [
          { id: 'a', text: 'Glukose-enheter', isCorrect: false },
          { id: 'b', text: 'Fettsyrer og glyserol', isCorrect: false },
          { id: 'c', text: 'Aminosyrer', isCorrect: true },
          { id: 'd', text: 'Nukleotider', isCorrect: false },
        ],
        solution: `**Riktig svar: Aminosyrer**

Proteiner er bygd opp av **aminosyrer** som er bundet sammen i lange kjeder med peptidbindinger.

- Det finnes **20 forskjellige aminosyrer** som kan kombineres i uendelig mange rekkefølger
- Rekkefølgen av aminosyrene bestemmer proteinets 3D-struktur og funksjon
- Kroppen trenger proteiner til muskler, enzymer, antistoffer og mye mer

De andre alternativene:
- **Glukose-enheter** bygger opp karbohydrater (stivelse, cellulose)
- **Fettsyrer og glyserol** bygger opp fett
- **Nukleotider** bygger opp DNA og RNA`,
      },
    },

    // ========================================================================
    // BLOKK 7: POLYMERER
    // ========================================================================

    // ========== DEFINISJON: POLYMER ==========
    {
      id: 'nat10-2-8-def-polymer',
      type: 'definition',
      title: 'Polymer, monomer og polymerisering',
      content: `**Polymer:**
Et stort molekyl (makromolekyl) som er bygd opp av mange like eller lignende små enheter som er bundet sammen i en lang kjede.

Ordet «polymer» kommer fra gresk: **poly** = mange, **mer** = del.

**Monomer:**
De små enhetene (byggesteinene) som polymerene er bygd opp av.

**Polymerisering:**
Den kjemiske prosessen der mange monomerer kobles sammen til en polymer.

**Typer polymerer:**
- **Syntetiske polymerer** (menneskeskapt): plast, nylon, polyester
- **Naturlige polymerer** (fra naturen): cellulose, stivelse, proteiner, DNA

**Eksempel:** Polyeten (plastpose) er en polymer av monomeren eten (C₂H₄).
Mange tusen eten-molekyler kobles sammen: n CH₂=CH₂ → –(CH₂–CH₂)ₙ–`,
    },

    // ========== TEKST: POLYMERER ==========
    {
      id: 'nat10-2-8-polymerer',
      type: 'text',
      content: `## Polymerer – fra plast til DNA

Polymerer er overalt rundt deg – i plastposen, T-skjorta, mobilen, og til og med i kroppen din. De er store molekyler bygd opp av mange små, gjentatte enheter.

### Syntetiske polymerer (plast)

De viktigste syntetiske polymerene er laget av hydrokarboner fra råolje:

**Polyeten (PE):**
- Monomer: **eten** (C₂H₄)
- Den vanligste plasten i verden
- Brukes i plastposer, flasker, rør, emballasje
- Finnes som LDPE (myk) og HDPE (hard)

**Polypropen (PP):**
- Monomer: **propen** (C₃H₆)
- Hardere og mer varmebestandig enn polyeten
- Brukes i matbokser, bilinteriør, tau

**Polyvinylklorid (PVC):**
- Monomer: **vinylklorid** (C₂H₃Cl)
- Inneholder klor i tillegg til karbon og hydrogen
- Brukes i rør, gulvbelegg, vindusrammer

**Polystyren (PS):**
- Monomer: **styren** (C₈H₈)
- Kan skummes til isopor
- Brukes i engangskopper, emballasje, isolasjon

**Polyester (PET):**
- Brukes i plastflasker og klær
- En ester-polymer

### Naturlige polymerer

| Polymer | Monomer | Finnes i |
|---------|---------|----------|
| Cellulose | Glukose | Planteceller, tre, papir |
| Stivelse | Glukose | Poteter, ris, korn |
| Proteiner | Aminosyrer | Muskler, hår, enzymer |
| DNA | Nukleotider | Cellekjernen (arvematerialet) |
| Naturgummi | Isopren | Gummitrær |

### Polymerisering – hvordan plast lages

**Addisjonspolymerisering** – monomerer med dobbeltbinding kobles direkte sammen:

Eten → Polyeten:
\`\`\`
  H H     H H     H H           H H H H H H
  | |     | |     | |           | | | | | |
  C = C + C = C + C = C → ... — C—C—C—C—C—C — ...
  | |     | |     | |           | | | | | |
  H H     H H     H H           H H H H H H
\`\`\`

Dobbeltbindingene brytes, og karbonatomene kobles i en lang kjede.

### Miljøproblemer med plast

Plast har revolusjonert hverdagen vår, men skaper store miljøproblemer:

**1. Plast brytes ikke ned naturlig:**
De fleste syntetiske polymerer er **ikke biologisk nedbrytbare**. En plastpose kan ligge i naturen i **hundrevis av år** uten å brytes ned.

**2. Mikroplast:**
Plast brytes gradvis ned til bittesmå biter kalt **mikroplast** (< 5 mm). Mikroplast finnes nå i havet, i jord, i drikkevannet og til og med i blodet vårt.

**3. Marin forsøpling:**
Millioner tonn plast havner i havet hvert år. Sjøfugler, fisk og havdyr kan forveksle plast med mat, og plastforurensning truer marine økosystemer.

**4. CO₂-utslipp:**
Produksjon av plast krever fossile brensler, og forbrenning av plastavfall gir CO₂-utslipp.

### Løsninger

- **Resirkulering:** Samle inn og gjenbruke plast (returpunkter, pant)
- **Redusere forbruk:** Bruke mindre engangsplast
- **Bioplast:** Plast laget av fornybare råstoffer (f.eks. mais-stivelse)
- **Biologisk nedbrytbar plast:** Plast som kan brytes ned av mikroorganismer
- **Rydding:** Strandrydding, havopprydding`,
    },

    // ========== EKSEMPEL: FRA ETEN TIL POLYETEN ==========
    {
      id: 'nat10-2-8-ex-polyeten',
      type: 'example',
      title: 'Eksempel: Fra eten til polyeten',
      problem: `Polyeten er verdens mest produserte plast. Den lages av monomeren eten (C₂H₄).

a) Tegn strukturformelen til eten og marker dobbeltbindingen.
b) Forklar kort hvordan mange eten-molekyler kobles sammen til polyeten.
c) Hva skjer med dobbeltbindingen i eten under polymeriseringen?
d) Skriv den forenklede polymeriserings-reaksjonen.`,
      solution: `**a) Strukturformel for eten:**

\`\`\`
    H   H
     \\ /
      C = C
     / \\
    H   H
\`\`\`

Dobbeltbindingen (=) mellom de to karbonatomene er markert. Hvert karbon har 4 bindinger: 2 til hydrogen og 2 i dobbeltbindingen.

---

**b) Kobling til polyeten:**

Under polymerisering skjer dette:

1. **Dobbeltbindingen i eten brytes** (den ene av de to bindingene åpnes)
2. Hvert eten-molekyl får nå en «ledig» binding på hver side
3. Disse ledige bindingene kobler seg til **nabomolekylene**
4. Prosessen gjentas tusenvis av ganger
5. Resultatet er en **lang kjede** av karbonatomer med hydrogen på sidene

---

**c) Dobbeltbindingen:**

Dobbeltbindingen (C=C) i eten **brytes delvis**:
- Én av de to bindingene brytes
- Den andre forblir intakt (som enkeltbinding C–C)
- Den brutte bindingen brukes til å koble seg til nabomonomeren

Resultatet er at polyeten bare har **enkeltbindinger** (C–C) – det er et mettet polymer.

---

**d) Forenklet polymeriseringsreaksjon:**

**n C₂H₄ → –(C₂H₄)ₙ–**

eller mer detaljert:

**n CH₂=CH₂ → –(CH₂–CH₂)ₙ–**

der n er antall monomere (typisk flere tusen til flere hundre tusen).

\`\`\`
Mange eten-molekyler:

H₂C=CH₂ + H₂C=CH₂ + H₂C=CH₂ + ...

       ↓ polymerisering

...—CH₂—CH₂—CH₂—CH₂—CH₂—CH₂—...
         polyeten
\`\`\``,
    },

    // ========== OPPGAVE 12: KLASSISK – POLYMERER OG MILJØ ==========
    {
      id: 'nat10-2-8-exercise-12',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-8-oppg-12',
        number: '2.8.12',
        type: 'classic',
        difficulty: 'medium',
        task: `a) Forklar forskjellen mellom en monomer og en polymer. Gi ett eksempel.
b) Nevn minst to syntetiske og to naturlige polymerer.
c) Drøft miljøproblemer knyttet til plastforurensning. Hva er mikroplast?
d) Foreslå minst tre tiltak som kan redusere plastforurensning.`,
        multipleChoiceOptions: [
          'a) Monomer=liten byggestein, polymer=lang kjede av monomere. b) Syntetiske: polyeten, PVC. Naturlige: cellulose, proteiner.',
          'a) Monomer=stor kjede, polymer=liten byggestein. b) Syntetiske: cellulose, stivelse. Naturlige: polyeten, PVC.',
          'a) Monomer=liten byggestein, polymer=lang kjede. b) Syntetiske: polyeten, cellulose. Naturlige: PVC, nylon.',
          'a) Monomer og polymer er det samme. b) Alle er syntetiske.',
        ],
        solution: `**a) Monomer vs. polymer:**

En **monomer** er en liten byggestein – et enkelt molekyl som kan kobles sammen med mange like molekyler.

En **polymer** er den lange kjeden som dannes når mange monomere kobles sammen.

**Eksempel:**
- Monomer: **Eten** (C₂H₄) – et lite molekyl med dobbeltbinding
- Polymer: **Polyeten** (–CH₂–CH₂–)ₙ – en lang kjede av tusenvis av eten-enheter

Forholdet er som perler (monomere) på en snor (polymer).

---

**b) Syntetiske og naturlige polymerer:**

**Syntetiske (menneskeskapt):**
1. **Polyeten (PE)** – plastposer, flasker
2. **Polyvinylklorid (PVC)** – rør, vindusrammer
3. (Bonus: Nylon, polystyren, polyester)

**Naturlige:**
1. **Cellulose** – planteceller, papir, tre
2. **Proteiner** – muskler, enzymer, hår
3. (Bonus: Stivelse, DNA, naturgummi)

---

**c) Miljøproblemer og mikroplast:**

**Plastforurensning er et alvorlig miljøproblem fordi:**
- Syntetisk plast er **ikke biologisk nedbrytbar** – den forsvinner ikke naturlig
- Plast hoper seg opp i naturen, spesielt i havet
- Sjøfugler og marine dyr spiser plast og kan dø
- Store plastøyer har dannet seg i verdenshavene

**Mikroplast** er bittesmå plastpartikler (< 5 mm) som dannes når større plastgjenstander brytes ned mekanisk av vær, vind og bølger. Mikroplast:
- Finnes nå overalt: i havet, i jord, i luft, i drikkevann
- Er funnet i fisker, skjell og andre sjødyr vi spiser
- Er oppdaget i menneskelig blod og morkake
- Kan inneholde og frakte miljøgifter

---

**d) Tiltak mot plastforurensning:**

1. **Resirkulering:** Kildesortere plast og levere til gjenvinning. Gjenvinning reduserer behovet for ny plastproduksjon.

2. **Redusere engangsplast:** Bruke handlenett i stedet for plastposer, gjenbrukbare flasker, unngå unødvendig emballasje.

3. **Pante- og returordninger:** Norge har et av verdens beste pantesystemer for plastflasker – dette bør utvides.

4. **Strandrydding og opprydding:** Rydde plast fra strender og naturområder.

5. **Utvikle bioplast:** Forske på plast laget av fornybare kilder som kan brytes ned naturlig.

6. **Lovgivning:** Forbud mot engangsplast (som sugerør, bestikk) og avgifter på plastprodukter.`,
      },
    },

    // ========================================================================
    // OPPSUMMERING
    // ========================================================================
    {
      id: 'nat10-2-8-oppsummering',
      type: 'text',
      title: 'Oppsummering – Organisk kjemi II',
      content: `## Oppsummering

### Funksjonelle grupper

En funksjonell gruppe er en bestemt gruppe atomer som gir et organisk molekyl sine spesielle egenskaper.

| Stoffklasse | Funksjonell gruppe | Ending | Eksempel |
|-------------|-------------------|--------|----------|
| Alkohol | -OH (hydroksyl) | -ol | Etanol (C₂H₅OH) |
| Karboksylsyre | -COOH (karboksyl) | -syre | Eddiksyre (CH₃COOH) |
| Ester | -COO- (ester) | - | Etylacetat (CH₃COOC₂H₅) |

### Alkoholer
- Inneholder -OH-gruppe
- Høyere kokepunkt enn alkaner (hydrogenbindinger)
- Små alkoholer er løselige i vann
- Metanol er giftig! Etanol brukes i desinfeksjon.

### Karboksylsyrer
- Inneholder -COOH-gruppe
- Svake syrer (avgir H⁺)
- Reagerer med baser (nøytralisering)
- Eddiksyre finnes i eddik, sitronsyre i sitrusfrukter

### Estere
- Dannes fra alkohol + karboksylsyre → ester + vann
- Mange har fruktig lukt
- Fett er estere av glyserol og fettsyrer

### Biologiske makromolekyler

| Makromolekyl | Byggesteiner | Funksjon |
|-------------|-------------|----------|
| Karbohydrater | Monosakkarider (glukose) | Energikilde |
| Fett | Glyserol + fettsyrer | Energilager, isolasjon |
| Proteiner | Aminosyrer | Enzymer, muskler, antistoffer |

### Polymerer
- Polymer = lang kjede av mange monomere
- Syntetiske: polyeten, PVC, polystyren (plast)
- Naturlige: cellulose, stivelse, proteiner, DNA
- Plastforurensning og mikroplast er store miljøutfordringer`,
    },

    // ========================================================================
    // SAMLEOPPGAVER
    // ========================================================================

    // ========== OPPGAVE 13: IDENTIFISER FUNKSJONELLE GRUPPER ==========
    {
      id: 'nat10-2-8-exercise-13',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-8-oppg-13',
        number: '2.8.13',
        type: 'classic',
        difficulty: 'medium',
        task: `Identifiser den funksjonelle gruppen og stoffklassen for hvert av disse stoffene:

a) CH₃CH₂OH
b) CH₃COOH
c) CH₃COOCH₃
d) C₃H₈
e) CH₃CH₂CH₂OH
f) HCOOH`,
        multipleChoiceOptions: [
          'a) -OH, alkohol; b) -COOH, karboksylsyre; c) -COO-, ester; d) ingen, alkan; e) -OH, alkohol; f) -COOH, karboksylsyre',
          'a) -COOH, syre; b) -OH, alkohol; c) -COO-, ester; d) -OH, alkohol; e) -COOH, syre; f) -OH, alkohol',
          'a) -OH, alkohol; b) -COOH, karboksylsyre; c) -OH, alkohol; d) ingen, alkan; e) -COOH, syre; f) -COO-, ester',
          'a) -OH, alkohol; b) -COOH, karboksylsyre; c) -COO-, ester; d) ingen, alken; e) -OH, alkohol; f) -COOH, karboksylsyre',
        ],
        solution: `**a) CH₃CH₂OH – Etanol**
- Funksjonell gruppe: **-OH** (hydroksylgruppe)
- Stoffklasse: **Alkohol**
- Systematisk navn: Etanol (et- = 2 C + -ol)

**b) CH₃COOH – Eddiksyre**
- Funksjonell gruppe: **-COOH** (karboksylgruppe)
- Stoffklasse: **Karboksylsyre**
- Systematisk navn: Etansyre

**c) CH₃COOCH₃ – Metylacetat**
- Funksjonell gruppe: **-COO-** (estergruppe)
- Stoffklasse: **Ester**
- Dannet fra eddiksyre + metanol

**d) C₃H₈ – Propan**
- Funksjonell gruppe: **Ingen** (bare C og H)
- Stoffklasse: **Alkan** (mettet hydrokarbon)
- Passer CₙH₂ₙ₊₂: C₃H₈ ✓

**e) CH₃CH₂CH₂OH – Propanol**
- Funksjonell gruppe: **-OH** (hydroksylgruppe)
- Stoffklasse: **Alkohol**
- Systematisk navn: Propanol (prop- = 3 C + -ol)

**f) HCOOH – Maursyre**
- Funksjonell gruppe: **-COOH** (karboksylgruppe)
- Stoffklasse: **Karboksylsyre**
- Systematisk navn: Metansyre (met- = 1 C + -syre)`,
      },
    },

    // ========== OPPGAVE 14: ORGANISK KJEMI I HVERDAGEN ==========
    {
      id: 'nat10-2-8-exercise-14',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-8-oppg-14',
        number: '2.8.14',
        type: 'classic',
        difficulty: 'medium',
        task: `Organisk kjemi er overalt i hverdagen. Forklar hvilke organiske stoffer som er involvert i disse situasjonene:

a) Du bruker håndsprit (desinfeksjon) etter at du har tatt bussen.
b) Du heller eddik på salaten.
c) Du lukter på en moden banan.
d) Du spiser en brødskive med smør til frokost.
e) Du bruker en plastflaske til å drikke vann.`,
        multipleChoiceOptions: [
          'a) Etanol (alkohol), b) Eddiksyre (karboksylsyre), c) Pentylacetat (ester), d) Stivelse og fett, e) Polyeten (polymer)',
          'a) Metanol, b) Sitronsyre, c) Metan, d) Glukose, e) PVC',
          'a) Etanol, b) Maursyre, c) Glukose, d) Proteiner, e) Polystyren',
          'a) Propanol, b) Eddiksyre, c) Pentylacetat, d) Cellulose, e) Nylon',
        ],
        solution: `**a) Håndsprit – Etanol (alkohol, C₂H₅OH)**

Håndsprit inneholder ca. 60–80 % **etanol** (eller isopropanol). Etanol er en alkohol med -OH-gruppen. Den dreper bakterier og virus ved å denaturere (ødelegge) proteinene deres.

**b) Eddik – Eddiksyre (karboksylsyre, CH₃COOH)**

Husholdningseddik inneholder 5–8 % **eddiksyre** (etansyre). Eddiksyre er en karboksylsyre med -COOH-gruppen. Den sure smaken og den skarpe lukten skyldes denne syren.

**c) Moden banan – Pentylacetat (ester)**

Den karakteristiske banansmellen kommer hovedsakelig fra esteren **pentylacetat** (CH₃COOC₅H₁₁). Denne esteren dannes naturlig i bananen etter hvert som den modnes. Estere er ansvarlige for mange av fruktduftene vi kjenner.

**d) Brødskive med smør – Stivelse, karbohydrater og fett**

- **Brødet** inneholder **stivelse** (et polysakkarid av glukose) – kroppens viktigste energikilde
- **Smøret** inneholder **fett** (estere av glyserol og fettsyrer) – både mettede og umettede fettsyrer
- Brødet inneholder også proteiner (fra melet)

I fordøyelsen brytes stivelse ned til glukose og fett ned til glyserol og fettsyrer.

**e) Plastflaske – PET/Polyeten (polymer)**

Plastflasker er vanligvis laget av **PET** (polyetylentereftalat) eller **polyeten** (PE). Disse er syntetiske polymerer laget av monomere som opprinnelig kommer fra råolje. PET er en kondensasjonspolymer, mens polyeten er en addisjonspolymer av eten.`,
      },
    },

    // ========== OPPGAVE 15: DRØFT PLAST OG MILJØ ==========
    {
      id: 'nat10-2-8-exercise-15',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-8-oppg-15',
        number: '2.8.15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `**Drøftingsoppgave: Plast – velsignelse eller forbannelse?**

Plast har gjort livet enklere på mange måter, men skaper også alvorlige miljøproblemer.

a) Beskriv minst tre måter plast gjør hverdagen bedre.
b) Beskriv minst tre alvorlige miljøproblemer forårsaket av plast.
c) Forklar den kjemiske grunnen til at plast ikke brytes ned i naturen.
d) Vurder om vi bør forby all engangsplast. Drøft argumenter for og mot.
e) Foreslå en realistisk plan for hvordan samfunnet kan redusere plastforurensning.`,
        solution: `**a) Fordeler med plast:**

1. **Matbevaring:** Plastemballasje beskytter mat mot bakterier og forurensning, forlenger holdbarheten og reduserer matsvinn. Uten plast ville mye mer mat bli kastet.

2. **Medisin og helse:** Engangssprøyter, blodposer, sterile hansker, proteser og medisinsk utstyr av plast har revolusjonert helsevesenet og redder liv daglig.

3. **Lett og billig materiale:** Plast er lettere enn metall og glass, noe som reduserer transportkostnader og drivstofforbruk. En plastflaske veier mye mindre enn en glassflaske.

4. **Byggematerialer:** PVC-rør, isolasjon og vindusrammer er holdbare, rimelige og vedlikeholdsfrie.

5. **Sikkerhet:** Hjelmer, bilbelter og sikkerhetsutstyr inneholder plast.

---

**b) Miljøproblemer:**

1. **Ikke biologisk nedbrytbar:** De fleste syntetiske polymerer brytes ikke ned av mikroorganismer. Plast i naturen kan ligge der i hundrevis av år og hope seg opp.

2. **Mikroplast:** Plast fragmenteres til bittesmå partikler (< 5 mm) som spres overalt – i havet, jorda, lufta, drikkevannet og i levende organismer. Helseeffektene er ennå ikke fullt forstått.

3. **Marin forsøpling:** Ca. 8 millioner tonn plast havner i havet hvert år. Sjødyr forveksler plast med mat, fisker får plastbiter i magen, og sjøfugler vikles inn i plastsøppel.

4. **Klimagassutslipp:** Plastproduksjon krever fossile brensler, og hele livssyklusen (produksjon, transport, avfallshåndtering) gir CO₂-utslipp.

---

**c) Kjemisk forklaring:**

Syntetiske polymerer som polyeten har svært **sterke kovalente C–C-bindinger** og **C–H-bindinger** i karbonkjeden. Disse bindingene er:
- For sterke til å brytes ned av de fleste bakterier og sopp
- Stabile mot vann, sollys og temperaturforandringer
- Har ingen naturlige enzymer som kan spalte dem

I naturen har det utviklet seg enzymer som bryter ned naturlige polymerer (f.eks. cellulase bryter ned cellulose). Men syntetiske polymerer som polyeten har bare eksistert i ca. 100 år – altfor kort tid for at naturen har utviklet enzymer til å bryte dem ned.

---

**d) Forbud mot engangsplast – for og mot:**

**For forbud:**
- Engangsplast brukes bare i minutter men forurenser i hundrevis av år
- Alternativer finnes (papirsugerør, gjenbrukbare poser, metalltallerkner)
- EU har allerede forbudt flere engangsplastprodukter med gode resultater
- Forbud sender et tydelig signal om at forurensning er uakseptabelt

**Mot forbud:**
- Engangsplast i helsevesenet er nødvendig av hygienehensyn
- Noen alternativer har faktisk **større** klimaavtrykk (f.eks. bomullsposer)
- Forbud kan ramme fattige som har råd til billige plastprodukter
- Bedre å satse på gode gjenvinningssystemer enn totalt forbud

---

**e) Realistisk plan:**

1. **Kort sikt (1–2 år):** Forbud mot unødvendig engangsplast (sugerør, bestikk, q-tips). Utvide panteordninger. Informasjonskampanjer.

2. **Mellomlang sikt (3–5 år):** Investere i bedre gjenvinningsteknologi. Kreve at produsentene tar ansvar for plastavfall (utvidet produsentansvar). Støtte forskning på bioplast.

3. **Lang sikt (5–15 år):** Overgang til sirkulær økonomi der all plast gjenvinnes eller er biologisk nedbrytbar. Utvikle enzymer som kan bryte ned eksisterende plastforurensning. Internasjonale avtaler mot plastforurensning i havet.

Nøkkelen er en **kombinasjon** av tiltak: forby det verste, gjenvinne det nødvendige, og forske på bedre alternativer.`,
      },
    },

    // ========== OPPGAVE 16: FORSØK – ESTERDANNELSE ==========
    {
      id: 'nat10-2-8-exercise-16',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-8-oppg-16',
        number: '2.8.16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `**Forsøk: Esterdannelse – lag dine egne fruktlukter!**

I dette forsøket skal du lage estere og undersøke lukten deres.

**Utstyr:** Reagensrør, reagensrørholder, gassbrenner, kjemikalier (eddiksyre, smørsyre, etanol, pentanol), konsentrert svovelsyre (katalysator), vann.

a) Skriv den kjemiske reaksjonslikningen for dannelsen av etylacetat (fra eddiksyre og etanol).

b) Forklar rollen til svovelsyre i forsøket. Er den en reaktant eller en katalysator?

c) Forsøket gir en lukt av frukt. Forklar hvilken type organisk forbindelse som er ansvarlig for denne lukten.

d) Foreslå hvilken alkohol og syre du ville brukt for å lage en ester som lukter banan.

e) Sikkerhetsregler: Hvorfor er det viktig å jobbe forsiktig med svovelsyre? Nevn minst to sikkerhetsforanstaltninger.`,
        solution: `**a) Reaksjonslikning:**

**CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O**

Eddiksyre + Etanol ⇌ Etylacetat + Vann

(i nærvær av H₂SO₄ som katalysator)

---

**b) Svovelsyrens rolle:**

Svovelsyre (H₂SO₄) er en **katalysator** i dette forsøket – den **øker reaksjonshastigheten** uten selv å bli brukt opp.

Svovelsyre er IKKE en reaktant. Den:
- Gir H⁺-ioner som starter reaksjonen
- Fjerner vann fra likevekten (driver reaksjonen mot ester-siden)
- Finnes igjen i samme mengde etter reaksjonen

Uten katalysator ville esterifiseringen gå svært sakte ved romtemperatur.

---

**c) Fruktlukten:**

Fruktlukten skyldes **estere**. Estere er organiske forbindelser med gruppen -COO- som dannes fra reaksjonen mellom en karboksylsyre og en alkohol.

Mange estere har behagelig, fruktig lukt:
- Etylacetat lukter litt som pæredråper
- Pentylacetat lukter banan
- Etylbutanoat lukter ananas

Det er fascinerende at utgangsstoffene (f.eks. smørsyre, som lukter forferdelig) kan gi produkter med behagelig lukt!

---

**d) Bananlukt:**

For å lage **pentylacetat** (bananlukt) trenger du:
- **Eddiksyre** (CH₃COOH) – karboksylsyren
- **Pentanol** (C₅H₁₁OH) – alkoholen

Reaksjon:
CH₃COOH + C₅H₁₁OH → CH₃COOC₅H₁₁ + H₂O

Pentylacetat er den esteren som er mest ansvarlig for den karakteristiske bananlukten.

---

**e) Sikkerhetsregler med svovelsyre:**

Konsentrert svovelsyre er **svært etsende** og farlig. Viktige sikkerhetsforanstaltninger:

1. **Bruk vernebriller:** Svovelsyre kan forårsake alvorlig øyeskade. Vernebriller er obligatorisk!

2. **Bruk hansker:** Svovelsyre etser hud og gir brannskader.

3. **Arbeid i avtrekksskap:** Esterdamp og syredamp kan være irriterende for luftveiene.

4. **Hell syre i vann, aldri omvendt:** Når svovelsyre blandes med vann, utvikles mye varme. Hell alltid syren forsiktig i vannet, ikke omvendt (ellers kan det sprute).

5. **Ha vann tilgjengelig:** Hvis man søler, skyll umiddelbart med rikelig vann.

6. **Små mengder:** Bruk bare de mengdene læreren angir – konsentrert svovelsyre er svært sterk.`,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Funksjonell gruppe', definition: 'Bestemt gruppe atomer som gir et organisk molekyl sine karakteristiske egenskaper' },
    { term: 'Hydroksylgruppe (-OH)', definition: 'Den funksjonelle gruppen i alkoholer' },
    { term: 'Alkohol', definition: 'Organisk forbindelse med hydroksylgruppe (-OH), navneending -ol' },
    { term: 'Hydrogenbinding', definition: 'Relativt sterk intermolekylær kraft mellom molekyler med O-H- eller N-H-bindinger' },
    { term: 'Karboksylgruppe (-COOH)', definition: 'Den funksjonelle gruppen i karboksylsyrer' },
    { term: 'Karboksylsyre', definition: 'Organisk syre med karboksylgruppe (-COOH), navneending -syre' },
    { term: 'Ester', definition: 'Organisk forbindelse dannet fra reaksjon mellom alkohol og karboksylsyre' },
    { term: 'Esterifisering', definition: 'Reaksjon der alkohol + karboksylsyre danner ester + vann' },
    { term: 'Hydrolyse', definition: 'Spalting av en forbindelse ved reaksjon med vann (det motsatte av esterifisering)' },
    { term: 'Karbohydrater', definition: 'Organiske forbindelser med C, H og O, viktigste energikilde for kroppen' },
    { term: 'Monosakkarid', definition: 'Enkel sukkerart som ikke kan brytes ned videre (f.eks. glukose, fruktose)' },
    { term: 'Disakkarid', definition: 'Sukkerart bygd opp av to monosakkarider (f.eks. sukrose, laktose)' },
    { term: 'Polysakkarid', definition: 'Mange monosakkarider bundet sammen i kjeder (f.eks. stivelse, cellulose)' },
    { term: 'Fettsyre', definition: 'Lang karboksylsyre som er byggestein i fett, kan vaere mettet eller umettet' },
    { term: 'Protein', definition: 'Polymer av aminosyrer med peptidbindinger, viktig for enzymer, muskler og mye mer' },
    { term: 'Aminosyre', definition: 'Byggestein i proteiner, har aminogruppe (-NH₂) og karboksylgruppe (-COOH)' },
    { term: 'Polymer', definition: 'Stort molekyl bygd opp av mange like monomere bundet i en lang kjede' },
    { term: 'Monomer', definition: 'Liten byggestein som kobles sammen til en polymer' },
    { term: 'Polymerisering', definition: 'Kjemisk prosess der mange monomere kobles sammen til en polymer' },
    { term: 'Mikroplast', definition: 'Bittesmå plastpartikler (under 5 mm) som forurenser miljoeet' },
  ],
};

// ============================================================================
// Eksport
// ============================================================================

export const NATURFAG_10_KAP2B_CHAPTERS = [CHAPTER_NAT10_2_7, CHAPTER_NAT10_2_8];
