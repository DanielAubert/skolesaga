/**
 * Tekstbok kapitler for Naturfag 10 - Seksjon 3: Fysikk og energi (3.1-3.6)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1: Energi og energiformer
// LK20: Beskrive energi i ulike former og energiomforminger
// ============================================================================

export const CHAPTER_NAT10_3_1: TextbookChapter = {
  id: 'naturfag-10-3-1',
  courseId: 'naturfag-10',
  chapterNumber: '3.1',
  title: 'Energi og energiformer',
  description: 'Lær om de ulike energiformene og hvordan energi måles.',
  estimatedMinutes: 40,
  competenceGoals: [
    'beskrive og gi eksempler på energi i ulike former og energiomforminger',
    'bruke energibegrepet til å beskrive og utforske naturfenomener',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'nat10-3-1-intro',
      type: 'text',
      content: `## Energi og energiformer

En ball som ruller nedover en bakke. En lyspære som lyser. En motor som driver en bil. Hva har alle disse til felles?

De alle handler om **energi** – en av de mest grunnleggende konseptene i naturfag. Energi er overalt rundt oss, men hva er det egentlig?

I dette kapitlet lærer du:
- Hva energi er
- Ulike energiformer (kinetisk, potensiell, kjemisk, elektrisk, strålings-, termisk)
- Hvordan energi måles
- Hvordan energi kan omformes fra en type til en annen`,
    },

    // ========== HVA ER ENERGI? ==========
    {
      id: 'nat10-3-1-hva-er-energi',
      type: 'text',
      content: `## Hva er energi?

**Energi** er evnen til å utføre arbeid eller forandre noe.

Det er vanskelig å gi en enkel definisjon av energi, men vi kan beskrive hva energi gjør:
- Energi får ting til å **bevege seg**
- Energi kan **varme** ting opp
- Energi kan **endre** ting (f.eks. få is til å smelte)
- Energi kan **skape lys** og lyd

### Energi kan ikke sees, men vi kan se effekten av den

Du kan ikke "se" energi, men du kan se hva energi gjør:
- En ball som beveger seg har energi
- Et batteri inneholder energi
- Solen sender energi til jorda i form av lys og varme
- Mat inneholder energi som kroppen din kan bruke

### Viktige egenskaper ved energi

1. **Energi kan ikke forvinne eller skapes** – den kan bare omformes (energibevaring)
2. **Energi finnes i mange former** – bevegelse, varme, lys, lyd, elektrisitet, osv.
3. **Energi måles i joule (J)** eller kilojoule (kJ)`,
    },

    // ========== DEFINISJON: ENERGI ==========
    {
      id: 'nat10-3-1-def-energi',
      type: 'definition',
      title: 'Energi',
      content: `**Energi** er evnen til å utføre arbeid eller forandre noe.

Energi kan ikke sees direkte, men vi kan observere effekten av energi når ting:
- Beveger seg
- Endrer temperatur
- Endrer form eller tilstand
- Sender ut lys eller lyd

Energi måles i **joule (J)** eller **kilojoule (kJ)**.

**Viktig prinsipp:** Energi kan ikke skapes eller ødelegges – bare omformes fra en type til en annen.`,
    },

    // ========== ENERGIFORMER ==========
    {
      id: 'nat10-3-1-energiformer',
      type: 'text',
      content: `## Energiformer

Energi finnes i mange forskjellige former. De viktigste energiformene er:

### 1. Kinetisk energi (bevegelsesenergi)

**Kinetisk energi** er energi som skyldes **bevegelse**.

- En bil som kjører har kinetisk energi
- En ball som kastes har kinetisk energi
- Vind har kinetisk energi
- Jo raskere noe beveger seg, jo mer kinetisk energi har det
- Jo tyngre noe er, jo mer kinetisk energi har det ved samme hastighet

**Formel:**

$$E_k = \\frac{1}{2}mv^2$$

hvor:
- $E_k$ = kinetisk energi (J)
- $m$ = masse (kg)
- $v$ = hastighet (m/s)

**Eksempel:**
- En bil på 1000 kg som kjører i 20 m/s (72 km/t):
- $E_k = \\frac{1}{2} \\cdot 1000 \\cdot 20^2 = 200\\,000$ J = 200 kJ

### 2. Potensiell energi (stillingsenergi)

**Potensiell energi** er lagret energi som skyldes **posisjon** eller **plassering**.

Det finnes to hovedtyper:

**a) Tyngdepotensiell energi**
- Energi som skyldes høyde over bakken
- En stein på toppen av et fjell har potensiell energi
- Jo høyere opp, jo mer potensiell energi

**Formel:**

$$E_p = mgh$$

hvor:
- $E_p$ = potensiell energi (J)
- $m$ = masse (kg)
- $g$ = tyngdeakselerasjon (9,8 m/s² på jorda)
- $h$ = høyde (m)

**Eksempel:**
- En stein på 2 kg som ligger 10 meter over bakken:
- $E_p = 2 \\cdot 9,8 \\cdot 10 = 196$ J

**b) Elastisk potensiell energi**
- Energi lagret i stramme eller sammentrykte ting
- En spent bue har elastisk energi
- En sammenpresset fjær har elastisk energi
- En strukket strikk har elastisk energi

### 3. Kjemisk energi

**Kjemisk energi** er energi lagret i **kjemiske bindinger** mellom atomer.

- Mat inneholder kjemisk energi (frigjøres når kroppen bryter ned maten)
- Bensin og diesel inneholder kjemisk energi (frigjøres ved forbrenning)
- Batterier inneholder kjemisk energi (frigjøres som elektrisk energi)
- Tre og kull inneholder kjemisk energi (frigjøres som varme når det brenner)

**Eksempel:**
Når du spiser et eple, tar kroppen opp kjemisk energi fra fruktsukkeret. Denne energien brukes til å holde kroppen varm og få musklene til å fungere.

### 4. Elektrisk energi

**Elektrisk energi** er energi som skyldes bevegelse av **elektriske ladninger** (elektroner).

- Strøm i ledninger er elektrisk energi
- Lynet inneholder elektrisk energi
- Elektriske apparater (TV, PC, lys) drives av elektrisk energi

### 5. Strålingsernergi (elektromagnetisk energi)

**Strålingsernergi** er energi som forplanter seg som **elektromagnetiske bølger**.

- Lys fra solen er strålingsernergi
- Mikrobølger, radiobølger, røntgenstråler er elektromagnetisk stråling
- Ultrafiolett stråling (UV) fra solen er strålingsernergi
- Infrarød stråling (varmestråling) er strålingsernergi

**Eksempel:**
Solen sender strålingsernergi til jorda. Solcellepaneler omformer denne energien til elektrisk energi.

### 6. Termisk energi (varmeenergi)

**Termisk energi** er energi som skyldes **bevegelse av partikler** (atomer og molekyler).

- Jo varmere noe er, jo mer beveger partiklene seg
- Jo mer partiklene beveger seg, jo mer termisk energi har stoffet
- Varmeenergi kan overføres fra varme til kalde ting

**Eksempel:**
Når du varmer opp vann på komfyren, tilføres termisk energi til vannet. Vannmolekylene beveger seg raskere og raskere, og temperaturen stiger.`,
    },

    // ========== DEFINISJON: KINETISK OG POTENSIELL ENERGI ==========
    {
      id: 'nat10-3-1-def-kinetisk-potensiell',
      type: 'definition',
      title: 'Kinetisk og potensiell energi',
      content: `**Kinetisk energi ($E_k$):**
Energi som skyldes bevegelse.

Formel: $E_k = \\frac{1}{2}mv^2$

Eksempel: En ball som ruller, en bil som kjører.

---

**Potensiell energi ($E_p$):**
Lagret energi som skyldes posisjon.

**Tyngdepotensiell energi:**
Formel: $E_p = mgh$

Eksempel: En stein på toppen av en bakke.

**Elastisk potensiell energi:**
Energi lagret i stramme eller sammentrykte ting.

Eksempel: En spent bue, en strukket strikk.`,
    },

    // ========== ENERGIENHETER ==========
    {
      id: 'nat10-3-1-enheter',
      type: 'text',
      content: `## Energienheter

Energi måles i **joule (J)**, oppkalt etter den britiske fysikeren James Prescott Joule.

### Hva er en joule?

**1 joule (1 J)** er energien som trengs for å løfte en masse på 100 gram (f.eks. et eple) 1 meter opp i lufta.

Det er ganske lite! Derfor bruker vi ofte større enheter:

| Enhet | Forkortelse | Verdi |
|-------|-------------|-------|
| Joule | J | 1 J |
| Kilojoule | kJ | 1000 J |
| Megajoule | MJ | 1 000 000 J |
| Gigajoule | GJ | 1 000 000 000 J |

### Energi i mat

På matpakker står det ofte energiinnholdet i **kilojoule (kJ)** eller **kilokalorier (kcal)**.

- 1 kalori (cal) = 4,18 joule (J)
- 1 kilokalori (kcal) = 4,18 kilojoule (kJ)

**Eksempel:**
En sjokoladeplate kan ha et energiinnhold på 2000 kJ (eller ca. 480 kcal).

### Energi i hverdagen

**Hvor mye energi er det i...**

- Et eple: ca. 200 kJ
- En bolle: ca. 1000 kJ
- En porsjon pasta: ca. 2500 kJ
- Å løfte en skolesekk (5 kg) opp 1 meter: ca. 50 J
- Å springe 1 km: ca. 300 kJ
- En lyspære (60 W) på i 1 time: 216 kJ`,
    },

    // ========== EKSEMPEL: ENERGIOMFORMINGER I HVERDAGEN ==========
    {
      id: 'nat10-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Identifisere energiomforminger i hverdagen',
      problem: `Beskriv energiomformingene som skjer når du lader mobiltelefonen din med en lader koblet til stikkontakten.`,
      solution: `**Energikjede: Stikkontakt → Ladet mobil**

**Trinn 1:** Elektrisk energi fra strømnettet (230 V) kommer inn i laderen.

**Trinn 2:** Laderen transformerer spenningen ned (fra 230 V til 5 V) og sender elektrisk energi til mobilen.

**Trinn 3:** I mobilens batteri omdannes elektrisk energi til **kjemisk energi** som lagres i batteriet.

**Energiomforminger:**
$$\\text{Elektrisk energi} \\rightarrow \\text{Elektrisk energi (lavere spenning)} \\rightarrow \\text{Kjemisk energi (batteri)}$$

**Energitap:**
- Laderen blir **varm** → noe energi tapes som termisk energi
- Batteriet blir **litt varmt** under lading → litt energi tapes

**Virkningsgrad:**
Typisk virkningsgrad for mobillading er ca. 80-85%. Det betyr at 15-20% av strømmen blir til varme i stedet for lagret energi i batteriet.

**I hverdagen merker du dette:** Laderen er varm etter å ha ladet mobilen. Denne varmen er "tapt" energi.`,
    },

    // ========== EKSEMPEL: BEREGNE KINETISK ENERGI ==========
    {
      id: 'nat10-3-1-example-2',
      type: 'example',
      title: 'Eksempel: Beregne kinetisk energi',
      problem: `En fotball med masse 0,45 kg sparkes med en hastighet på 20 m/s (ca. 72 km/t).

Beregn den kinetiske energien til fotballen.`,
      solution: `**Gitt:**
- Masse: m = 0,45 kg
- Hastighet: v = 20 m/s

**Formel:**
$$E_k = \\frac{1}{2}mv^2$$

**Utregning:**
$$E_k = \\frac{1}{2} \\cdot 0,45 \\cdot 20^2$$

$$E_k = \\frac{1}{2} \\cdot 0,45 \\cdot 400$$

$$E_k = 0,225 \\cdot 400$$

$$E_k = 90 \\text{ J}$$

**Svar:** Fotballen har **90 J** kinetisk energi.

**Tolkning:**
90 J er omtrent energien som trengs for å løfte en masse på 9 kg opp 1 meter. Det er nok energi til å gjøre vondt hvis ballen treffer deg!

**Viktig observasjon:** Kinetisk energi er proporsjonal med v². Hvis hastigheten dobles (til 40 m/s), firedobles energien til 360 J.`,
    },

    // ========== EKSEMPEL: ENERGIKJEDE ==========
    {
      id: 'nat10-3-1-example-3',
      type: 'example',
      title: 'Eksempel: Tegne en energikjede',
      problem: `Beskriv energikjeden for en elektrisk sykkel (elsykkel) fra stikkontakten til du sykler opp en bakke.`,
      solution: `**Energikjede for elsykkel:**

**1. Stikkontakt → Lader**
Elektrisk energi fra strømnettet.

**2. Lader → Batteri**
Elektrisk energi → Kjemisk energi (lagres i litium-ion-batteri)

**3. Batteri → Elektrisk motor**
Kjemisk energi → Elektrisk energi → Kinetisk energi (motor snurrer)

**4. Motor → Hjul**
Kinetisk energi (motor) → Kinetisk energi (sykkel beveger seg)

**5. Hjul → Bakke opp**
Kinetisk energi → Potensiell energi (du er høyere opp)

**Komplett energikjede:**

$$\\text{Elektrisk} \\rightarrow \\text{Kjemisk} \\rightarrow \\text{Elektrisk} \\rightarrow \\text{Kinetisk} \\rightarrow \\text{Potensiell}$$

**Energitap i hvert trinn:**
- Lading: ~10% tap (varme i lader)
- Batteri → Motor: ~5% tap (varme i ledninger)
- Motor: ~10% tap (friksjon, varme i motor)
- Sykkel: ~20% tap (friksjon mot veien, luftmotstand)

**Total virkningsgrad:** ca. 60-70% (veldig bra!)

**Din kropp bidrar også:** Du tramper med musklene → kjemisk energi i kroppen → kinetisk energi. Elsykkelen er et supplement.`,
    },

    // ========== EKSEMPEL: BEREGNE POTENSIELL ENERGI ==========
    {
      id: 'nat10-3-1-example-4',
      type: 'example',
      title: 'Eksempel: Sammenligne potensiell energi',
      problem: `To gjenstander ligger på et bord 1,5 meter over bakken:
- Gjenstand A: masse 2 kg
- Gjenstand B: masse 8 kg

a) Beregn den potensielle energien til hver gjenstand.
b) Hvilken gjenstand treffer bakken med størst hastighet hvis begge faller ned?`,
      solution: `**a) Potensiell energi:**

**Gjenstand A:**
$$E_p = mgh = 2 \\cdot 9,8 \\cdot 1,5 = 29,4 \\text{ J}$$

**Gjenstand B:**
$$E_p = mgh = 8 \\cdot 9,8 \\cdot 1,5 = 117,6 \\text{ J}$$

Gjenstand B har **4 ganger mer** potensiell energi.

---

**b) Hastighet ved bakken:**

Overraskende nok treffer begge gjenstandene bakken med **samme hastighet**!

**Forklaring med energibevaring:**

For gjenstand A:
$$E_p = E_k \\Rightarrow mgh = \\frac{1}{2}mv^2$$

Massen $m$ forkortes bort:
$$gh = \\frac{1}{2}v^2 \\Rightarrow v = \\sqrt{2gh}$$

$$v = \\sqrt{2 \\cdot 9,8 \\cdot 1,5} = \\sqrt{29,4} \\approx 5,42 \\text{ m/s}$$

Formelen avhenger IKKE av massen! Derfor faller alle gjenstander like raskt (uten luftmotstand).

**Svar:** Begge treffer bakken med **5,42 m/s**, men gjenstand B treffer med mer kinetisk energi (117,6 J vs. 29,4 J).`,
    },

    // ========== OPPGAVE 1: MULTIPLE-CHOICE - ENERGI ==========
    {
      id: 'nat10-3-1-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-1-ex-1',
        number: '3.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er energi?',
        options: [
          'Evnen til å utføre arbeid eller forandre noe',
          'En type stoff som finnes i mat',
          'Kraft som virker på en gjenstand',
          'Hastigheten til en bevegelse',
        ],
        answer: 0,
        solution: `**Riktig svar: Evnen til å utføre arbeid eller forandre noe**

**Forklaring:**

Energi er ikke et stoff eller en kraft, men en **egenskap** ved systemer som beskriver deres evne til å utføre arbeid eller forandre noe.

**Hvorfor de andre alternativene er feil:**

- "En type stoff som finnes i mat" – Mat inneholder kjemisk energi, men energi er ikke et stoff.
- "Kraft som virker på en gjenstand" – Kraft og energi er to forskjellige begreper. Kraft måles i newton (N), energi i joule (J).
- "Hastigheten til en bevegelse" – Hastighet måles i m/s, ikke energi. Men jo høyere hastighet, jo mer kinetisk energi.

**Definisjon:**

Energi = evnen til å utføre arbeid eller forandre noe.`,
      },
    },

    // ========== OPPGAVE 2: MULTIPLE-CHOICE - ENERGIFORMER ==========
    {
      id: 'nat10-3-1-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-1-ex-2',
        number: '3.1.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken type energi har en bil som kjører på motorveien?',
        options: [
          'Kinetisk energi',
          'Potensiell energi',
          'Kjemisk energi',
          'Elektrisk energi',
        ],
        answer: 0,
        solution: `**Riktig svar: Kinetisk energi**

**Forklaring:**

En bil som kjører har **kinetisk energi** (bevegelsesenergi) fordi den er i bevegelse.

**Analyse:**

- **Kinetisk energi:** Ja! Bilen beveger seg → den har kinetisk energi.
- **Potensiell energi:** Bare hvis bilen er høyt over bakken (f.eks. på en bro). På flat mark er potensiell energi neglisjerbar.
- **Kjemisk energi:** Bensinen i tanken har kjemisk energi, men spørsmålet handler om bilen som beveger seg, ikke bensinen.
- **Elektrisk energi:** Bare hvis det er en elbil, og selv da er det den kinetiske energien som er mest relevant når bilen kjører.

**Formel:**

Kinetisk energi: $E_k = \\frac{1}{2}mv^2$

hvor $m$ = masse (kg) og $v$ = hastighet (m/s).`,
      },
    },

    // ========== OPPGAVE 3: MULTIPLE-CHOICE - ENHETER ==========
    {
      id: 'nat10-3-1-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-1-ex-3',
        number: '3.1.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken enhet brukes til å måle energi?',
        options: [
          'Joule (J)',
          'Newton (N)',
          'Watt (W)',
          'Volt (V)',
        ],
        answer: 0,
        solution: `**Riktig svar: Joule (J)**

**Forklaring:**

Energi måles i **joule (J)**, oppkalt etter den britiske fysikeren James Prescott Joule.

**De andre enhetene:**

- **Newton (N):** Enhet for kraft, ikke energi.
- **Watt (W):** Enhet for effekt (energi per tid). 1 W = 1 J/s.
- **Volt (V):** Enhet for spenning (elektrisk potensialforskjell).

**Hva er 1 joule?**

1 joule (1 J) er energien som trengs for å løfte en masse på 100 gram (f.eks. et eple) 1 meter opp i lufta.

**Større enheter:**

- 1 kilojoule (kJ) = 1000 J
- 1 megajoule (MJ) = 1 000 000 J

**Eksempel:**

En sjokoladeplate kan ha et energiinnhold på ca. 2000 kJ.`,
      },
    },

    // ========== OPPGAVE 4: IDENTIFISERE ENERGIFORMER ==========
    {
      id: 'nat10-3-1-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-1-ex-4',
        number: '3.1.4',
        type: 'classic',
        difficulty: 'medium',
        task: `Identifiser hvilken energiform som er mest relevant i hver av disse situasjonene:

a) En stein ligger på toppen av en klippe.
b) Du spiser et eple.
c) En lyspære lyser.
d) En bil kjører i 80 km/t.
e) Du varmer opp mat i mikrobølgeovnen.`,
        multipleChoiceOptions: [
          'a) Potensiell, b) Kjemisk, c) Strålings-/lys, d) Kinetisk, e) Strålings-/mikrobølger',
          'a) Kinetisk, b) Termisk, c) Kjemisk, d) Potensiell, e) Elektrisk',
          'a) Kjemisk, b) Kinetisk, c) Potensiell, d) Termisk, e) Strålings-',
          'a) Termisk, b) Potensiell, c) Kinetisk, d) Strålings-, e) Kjemisk',
        ],
        solution: `**a) En stein ligger på toppen av en klippe:**

**Energiform:** **Potensiell energi** (tyngdepotensiell energi)

**Forklaring:**
Steinen har lagret energi på grunn av sin høyde over bakken. Hvis steinen faller ned, vil den potensielle energien omformes til kinetisk energi.

**Formel:** $E_p = mgh$

---

**b) Du spiser et eple:**

**Energiform:** **Kjemisk energi**

**Forklaring:**
Eplet inneholder kjemisk energi lagret i kjemiske bindinger (f.eks. i fruktsukker). Når kroppen bryter ned maten, frigjøres denne energien og brukes til å holde kroppen varm og få musklene til å fungere.

---

**c) En lyspære lyser:**

**Energiform:** **Strålingsernergi** (lys) og **termisk energi** (varme)

**Forklaring:**
Lyspæren sender ut strålingsernergi i form av synlig lys (og litt infrarød stråling som varme). Energien kommer fra elektrisk energi som omformes til lys og varme.

---

**d) En bil kjører i 80 km/t:**

**Energiform:** **Kinetisk energi**

**Forklaring:**
Bilen er i bevegelse og har derfor kinetisk energi (bevegelsesenergi). Jo raskere bilen kjører, jo mer kinetisk energi har den.

**Formel:** $E_k = \\frac{1}{2}mv^2$

---

**e) Du varmer opp mat i mikrobølgeovnen:**

**Energiform:** **Strålingsernergi** (mikrobølger) → **Termisk energi** (varme)

**Forklaring:**
Mikrobølgeovnen sender ut elektromagnetisk stråling (mikrobølger). Disse bølgene absorberes av vannmolekylene i maten, som begynner å vibrere raskere. Denne vibrasjonen er termisk energi – maten blir varmere.

**Oppsummering:**

- Strålingsernergi (mikrobølger) omformes til termisk energi (varme) i maten.`,
      },
    },

    // ========== OPPGAVE 5: IDENTIFISERE ENERGIFORMER 2 ==========
    {
      id: 'nat10-3-1-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-1-ex-5',
        number: '3.1.5',
        type: 'classic',
        difficulty: 'medium',
        task: `For hver av disse situasjonene, beskriv hvilke energiformer som er involvert:

a) En pendel svinger fram og tilbake.
b) Solen sender lys og varme til jorda.
c) Du skrur på en elektrisk radiator.`,
        multipleChoiceOptions: [
          'a) Kinetisk og potensiell, b) Strålingsernergi, c) Elektrisk til termisk',
          'a) Kun kinetisk, b) Kjemisk energi, c) Termisk til elektrisk',
          'a) Kun potensiell, b) Termisk energi, c) Kinetisk til potensiell',
          'a) Elektrisk og kjemisk, b) Potensiell energi, c) Kjemisk til termisk',
        ],
        solution: `**a) En pendel svinger fram og tilbake:**

**Energiformer:** **Kinetisk energi** og **potensiell energi**

**Forklaring:**

Når pendelen svinger, omformes energi mellom kinetisk og potensiell energi:

1. **I toppunktet (høyeste punkt):**
   - Pendelen står nesten stille → **lav kinetisk energi**
   - Pendelen er høyest oppe → **høy potensiell energi**

2. **I bunnpunktet (laveste punkt):**
   - Pendelen beveger seg raskest → **høy kinetisk energi**
   - Pendelen er lavest nede → **lav potensiell energi**

**Energiomforming:**

Potensiell energi ⇄ Kinetisk energi

Dette skjer kontinuerlig mens pendelen svinger.

---

**b) Solen sender lys og varme til jorda:**

**Energiform:** **Strålingsernergi** (elektromagnetisk stråling)

**Forklaring:**

Solen sender ut energi i form av elektromagnetisk stråling:

- **Synlig lys** (det vi ser)
- **Infrarød stråling** (varmestråling)
- **Ultrafiolett stråling** (UV-stråling)

Denne strålingen transporterer energi gjennom verdensrommet til jorda. Når strålingen treffer jorda, kan den:
- Omformes til **termisk energi** (varmer opp bakken og lufta)
- Omformes til **kjemisk energi** (fotosyntese i planter)
- Omformes til **elektrisk energi** (solceller)

---

**c) Du skrur på en elektrisk radiator:**

**Energiformer:** **Elektrisk energi** → **Termisk energi**

**Forklaring:**

Når du skrur på radiatoren:

1. **Elektrisk energi** fra stikkontakten strømmer til radiatoren.
2. I radiatoren varmes en vikling (motstand) opp.
3. **Elektrisk energi** omformes til **termisk energi** (varme).
4. Varmen spres til rommet (via konveksjon og varmestråling).

**Energiomforming:**

Elektrisk energi → Termisk energi

**Eksempel:**

En radiator på 1000 W (1 kW) omformer 1000 J elektrisk energi til termisk energi hvert sekund.`,
      },
    },

    // ========== OPPGAVE 6: IDENTIFISERE ENERGIFORMER 3 ==========
    {
      id: 'nat10-3-1-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-1-ex-6',
        number: '3.1.6',
        type: 'classic',
        difficulty: 'medium',
        task: `En skihopper står øverst i hoppbakken, hopper ut, og lander lengre nede.

Beskriv hvilke energiformer skidhopperen har i følgende faser:
a) Står stille øverst i bakken
b) Accelererer nedover bakken
c) Flyr gjennom lufta`,
        multipleChoiceOptions: [
          'a) Potensiell, b) Potensiell til kinetisk, c) Kinetisk og potensiell',
          'a) Kinetisk, b) Kinetisk til termisk, c) Kun potensiell',
          'a) Termisk, b) Kjemisk til kinetisk, c) Elektrisk og kjemisk',
          'a) Kjemisk, b) Potensiell til termisk, c) Kun kinetisk',
        ],
        solution: `**a) Står stille øverst i bakken:**

**Energiform:** **Potensiell energi**

**Forklaring:**

Skihopperen står stille høyt oppe i bakken. Hopperen har:
- **Høy potensiell energi** (tyngdepotensiell energi): $E_p = mgh$ (hvor $h$ er høyden)
- **Ingen kinetisk energi** (står stille, $v = 0$)

---

**b) Accelererer nedover bakken:**

**Energiformer:** **Potensiell energi** omformes til **kinetisk energi**

**Forklaring:**

Når skihopperen akselererer nedover bakken:
- **Potensiell energi minker** (høyden $h$ minker)
- **Kinetisk energi øker** (hastigheten $v$ øker)

**Energiomforming:**

Potensiell energi → Kinetisk energi

Tyngdekraften trekker hopperen nedover, og den potensielle energien omformes til kinetisk energi.

---

**c) Flyr gjennom lufta:**

**Energiformer:** **Kinetisk energi** og **potensiell energi**

**Forklaring:**

Når skihopperen flyr gjennom lufta:

1. **I starten av hoppet (rett etter avhoppet):**
   - **Høy kinetisk energi** (høy hastighet)
   - **Potensiell energi minker** (høyden $h$ minker)

2. **Under flukten:**
   - Noe av den kinetiske energien omformes til potensiell energi hvis hopperen stiger litt
   - Men generelt: potensiell energi → kinetisk energi (faller nedover)

3. **Ved landing:**
   - **Lav potensiell energi** (lav høyde)
   - **Høy kinetisk energi** (høy hastighet)

**Energiomforming:**

Hele veien: Potensiell energi → Kinetisk energi

(Noe energi går også tapt til friksjon med lufta og til varme.)

---

**Oppsummering:**

| Fase | Potensiell energi | Kinetisk energi |
|------|-------------------|-----------------|
| Øverst (stille) | Høy | Ingen |
| Akselererer | Minker | Øker |
| Flyr | Minker | Høy |
| Landing | Lav | Høy |

**Total energi er (omtrent) konstant** (energibevaring).`,
      },
    },

    // ========== OPPGAVE 7: BEREGNING - KINETISK ENERGI ==========
    {
      id: 'nat10-3-1-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-1-ex-7',
        number: '3.1.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En bil med masse 1200 kg kjører i 90 km/t (25 m/s).

a) Regn ut bilens kinetiske energi.
b) Hvis bilen bremser ned til 50 km/t (14 m/s), hvor mye kinetisk energi har den da?
c) Hvor mye energi har bilen mistet ved å bremse?

Bruk formelen: $E_k = \\frac{1}{2}mv^2$`,
        multipleChoiceOptions: [
          'a) 375 kJ, b) 117,6 kJ, c) 257,4 kJ',
          'a) 750 kJ, b) 235 kJ, c) 515 kJ',
          'a) 187,5 kJ, b) 58,8 kJ, c) 128,7 kJ',
          'a) 30 kJ, b) 16,8 kJ, c) 13,2 kJ',
        ],
        solution: `**a) Kinetisk energi ved 90 km/t (25 m/s):**

**Gitt:**
- Masse: $m = 1200$ kg
- Hastighet: $v = 25$ m/s

**Formel:**

$$E_k = \\frac{1}{2}mv^2$$

**Utregning:**

$$E_k = \\frac{1}{2} \\cdot 1200 \\cdot 25^2$$

$$E_k = \\frac{1}{2} \\cdot 1200 \\cdot 625$$

$$E_k = 600 \\cdot 625$$

$$E_k = 375\\,000 \\text{ J} = 375 \\text{ kJ}$$

**Svar:** Bilen har **375 kJ** kinetisk energi ved 90 km/t.

---

**b) Kinetisk energi ved 50 km/t (14 m/s):**

**Gitt:**
- Masse: $m = 1200$ kg
- Hastighet: $v = 14$ m/s

**Utregning:**

$$E_k = \\frac{1}{2} \\cdot 1200 \\cdot 14^2$$

$$E_k = \\frac{1}{2} \\cdot 1200 \\cdot 196$$

$$E_k = 600 \\cdot 196$$

$$E_k = 117\\,600 \\text{ J} = 117,6 \\text{ kJ}$$

**Svar:** Bilen har **117,6 kJ** kinetisk energi ved 50 km/t.

---

**c) Energi mistet ved bremsing:**

**Energi mistet = Energi før - Energi etter**

$$\\Delta E = 375 - 117,6 = 257,4 \\text{ kJ}$$

**Svar:** Bilen har mistet **257,4 kJ** kinetisk energi ved å bremse.

---

**Hva skjedde med energien?**

Energien forsvant ikke! Den ble omformet til:
- **Termisk energi** (varme) i bremsene
- **Lydenergi** (støy fra bremsene)
- **Litt friksjon** mot veien og lufta

Dette er et eksempel på **energiomforming**: Kinetisk energi → Termisk energi.

---

**Viktig observasjon:**

Legg merke til at når hastigheten nesten halveres (fra 25 til 14 m/s), så mer enn halveres ikke den kinetiske energien – den går ned med **ca. 69%**!

Dette er fordi kinetisk energi er proporsjonal med **hastigheten i andre potens** ($v^2$), ikke bare $v$.`,
      },
    },

    // ========== OPPGAVE 8: BEREGNING - POTENSIELL ENERGI ==========
    {
      id: 'nat10-3-1-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-1-ex-8',
        number: '3.1.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En stein med masse 5 kg løftes fra bakken opp til et bord som er 1,2 meter høyt.

a) Regn ut steinens potensielle energi når den ligger på bordet.
b) Hvis steinen faller ned fra bordet, hvor stor kinetisk energi har den like før den treffer bakken? (Anta ingen luftmotstand)
c) Hva er hastigheten til steinen like før den treffer bakken?

Bruk:
- $E_p = mgh$ (potensiell energi)
- $E_k = \\frac{1}{2}mv^2$ (kinetisk energi)
- $g = 9,8$ m/s²`,
        multipleChoiceOptions: [
          'a) 58,8 J, b) 58,8 J, c) 4,85 m/s',
          'a) 6 J, b) 6 J, c) 1,55 m/s',
          'a) 117,6 J, b) 117,6 J, c) 6,86 m/s',
          'a) 29,4 J, b) 29,4 J, c) 3,43 m/s',
        ],
        solution: `**a) Potensiell energi på bordet:**

**Gitt:**
- Masse: $m = 5$ kg
- Høyde: $h = 1,2$ m
- Tyngdeakselerasjon: $g = 9,8$ m/s²

**Formel:**

$$E_p = mgh$$

**Utregning:**

$$E_p = 5 \\cdot 9,8 \\cdot 1,2$$

$$E_p = 58,8 \\text{ J}$$

**Svar:** Steinen har **58,8 J** potensiell energi når den ligger på bordet.

---

**b) Kinetisk energi like før steinen treffer bakken:**

**Energibevaring:**

Når steinen faller, omformes den potensielle energien til kinetisk energi. Hvis vi antar ingen luftmotstand, er **total energi konstant**.

**Ved starten (på bordet):**
- Potensiell energi: $E_p = 58,8$ J
- Kinetisk energi: $E_k = 0$ J (står stille)

**Like før steinen treffer bakken:**
- Potensiell energi: $E_p = 0$ J (høyde = 0)
- Kinetisk energi: $E_k = ?$

**Energibevaring:**

$$E_{p,start} = E_{k,slutt}$$

$$E_k = 58,8 \\text{ J}$$

**Svar:** Steinen har **58,8 J** kinetisk energi like før den treffer bakken.

---

**c) Hastighet like før steinen treffer bakken:**

**Formel:**

$$E_k = \\frac{1}{2}mv^2$$

Løs for $v$:

$$v = \\sqrt{\\frac{2E_k}{m}}$$

**Utregning:**

$$v = \\sqrt{\\frac{2 \\cdot 58,8}{5}}$$

$$v = \\sqrt{\\frac{117,6}{5}}$$

$$v = \\sqrt{23,52}$$

$$v \\approx 4,85 \\text{ m/s}$$

**Svar:** Steinen har en hastighet på ca. **4,85 m/s** like før den treffer bakken.

---

**Oppsummering:**

1. **Potensiell energi på bordet:** 58,8 J
2. **Kinetisk energi ved bakken:** 58,8 J
3. **Hastighet ved bakken:** ca. 4,85 m/s

**Energiomforming:**

Potensiell energi → Kinetisk energi

Den totale energien er konstant (energibevaring)!

---

**Alternativ utregning av hastighet:**

Du kan også bruke kinematikk-formelen:

$$v^2 = 2gh$$

$$v = \\sqrt{2 \\cdot 9,8 \\cdot 1,2} = \\sqrt{23,52} \\approx 4,85 \\text{ m/s}$$

Samme svar!`,
      },
    },
    // ========== OPPGAVE EXTRA 1: ENERGIENHETER OMREGNING ==========
    {
      id: 'nat10-3-1-oppg-extra-1',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-1-oppg-extra-1',
        number: '3.1.9',
        type: 'classic',
        difficulty: 'lett',
        task: `Gjør om mellom energienheter:

a) 5000 J = ? kJ
b) 3,5 kJ = ? J
c) 2 MJ = ? kJ
d) Et eple har energiinnhold på 200 kJ. Hvor mange joule er det?`,
        solution: `**a)** 5000 J = 5000 / 1000 = **5 kJ**

**b)** 3,5 kJ = 3,5 × 1000 = **3500 J**

**c)** 2 MJ = 2 × 1000 = **2000 kJ** (= 2 000 000 J)

**d)** 200 kJ = 200 × 1000 = **200 000 J**

**Huskeregel:**
- 1 kJ = 1000 J (kilo = tusen)
- 1 MJ = 1000 kJ = 1 000 000 J (mega = million)
- 1 GJ = 1000 MJ = 1 000 000 000 J (giga = milliard)`,
      },
    },

    // ========== OPPGAVE EXTRA 2: KJEMISK ENERGI ==========
    {
      id: 'nat10-3-1-oppg-extra-2',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-1-oppg-extra-2',
        number: '3.1.10',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor lagres den kjemiske energien i mat?',
        options: [
          'I de kjemiske bindingene mellom atomene i molekylene',
          'I temperaturen til maten',
          'I tyngdekraften som virker på maten',
          'I bevegelsen til matmolekylene',
        ],
        answer: 0,
        solution: `**Riktig svar: I de kjemiske bindingene mellom atomene i molekylene**

**Forklaring:**

Kjemisk energi er lagret i **bindingene** mellom atomer. Når kroppen bryter ned matmolekylene (f.eks. sukker, fett, protein), brytes noen bindinger og nye dannes.

**Eksempel med sukker (glukose):**

$$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{energi}$$

Kroppen "brenner" sukker med oksygen og frigjør energi som brukes til:
- Holde kroppen varm (termisk energi)
- Bevege muskler (kinetisk energi)
- Sende nervesignaler (elektrisk energi)

**De andre alternativene:**
- Temperatur = termisk energi (ikke kjemisk)
- Tyngdekraft = potensiell energi (ikke kjemisk)
- Bevegelse av molekyler = termisk energi (ikke kjemisk)`,
      },
    },

    // ========== OPPGAVE EXTRA 3: KINETISK ENERGI SAMMENLIGNING ==========
    {
      id: 'nat10-3-1-oppg-extra-3',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-1-oppg-extra-3',
        number: '3.1.11',
        type: 'classic',
        difficulty: 'medium',
        task: `To biler kjører på motorveien:
- Bil A: masse 1000 kg, hastighet 30 m/s (108 km/t)
- Bil B: masse 2000 kg, hastighet 20 m/s (72 km/t)

a) Beregn kinetisk energi for begge bilene.
b) Hvilken bil har mest kinetisk energi?
c) Hva betyr dette for bremsestrekningene?`,
        solution: `**a) Kinetisk energi:**

**Bil A:**
$$E_k = \\frac{1}{2} \\cdot 1000 \\cdot 30^2 = \\frac{1}{2} \\cdot 1000 \\cdot 900 = 450\\,000 \\text{ J} = 450 \\text{ kJ}$$

**Bil B:**
$$E_k = \\frac{1}{2} \\cdot 2000 \\cdot 20^2 = \\frac{1}{2} \\cdot 2000 \\cdot 400 = 400\\,000 \\text{ J} = 400 \\text{ kJ}$$

---

**b) Mest kinetisk energi:**

**Bil A** har mest kinetisk energi (450 kJ vs. 400 kJ), til tross for at den er lettere!

---

**c) Betydning for bremsestrekning:**

Bilen med mest kinetisk energi trenger lengst bremsestrekning, fordi mer energi må omdannes til varme i bremsene.

**Bil A trenger lengre bremsestrekning** enn Bil B.

**Viktig lærdom:** Hastigheten er viktigere enn massen for kinetisk energi, fordi $v^2$ (hastigheten i andre potens) inngår i formelen. Å doble hastigheten firedobler den kinetiske energien!

**Trafikksikkerhet:** Derfor er fartsgrenser så viktige – litt høyere fart gir mye mer kinetisk energi og mye lenger bremsestrekning.`,
      },
    },

    // ========== OPPGAVE EXTRA 4: ENERGI I MAT ==========
    {
      id: 'nat10-3-1-oppg-extra-4',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-1-oppg-extra-4',
        number: '3.1.12',
        type: 'classic',
        difficulty: 'medium',
        task: `En elev spiser en sjokoladeplate som inneholder 2200 kJ energi. Hun vil brenne av denne energien ved å gå opp trapper.

Eleven har masse 50 kg, og hvert trinn i trappen er 20 cm (0,2 m) høyt.

a) Hvor stor potensiell energi får eleven for hvert trinn hun går opp? (Bruk g = 10 m/s²)
b) Hvor mange trinn må hun gå opp for å brenne av hele sjokoladeplaten?
c) Hvis hvert etasje har 15 trinn, hvor mange etasjer tilsvarer det?`,
        solution: `**a) Potensiell energi per trinn:**

$$E_p = mgh = 50 \\cdot 10 \\cdot 0,2 = 100 \\text{ J}$$

**Svar:** Hvert trinn gir 100 J potensiell energi.

---

**b) Antall trinn for å brenne av sjokoladeplaten:**

Total energi = 2200 kJ = 2 200 000 J

Antall trinn = 2 200 000 J / 100 J = **22 000 trinn!**

---

**c) Antall etasjer:**

Antall etasjer = 22 000 / 15 = **ca. 1467 etasjer**

---

**Tolkning:**
Det er nesten umulig å brenne av all energien i en sjokoladeplate bare ved å gå i trapper! 1467 etasjer tilsvarer ca. 4,5 km oppover – høyere enn mange fjell.

**Viktig:** I virkeligheten bruker kroppen energi med bare ca. 20-25% virkningsgrad for muskelarbeid. Resten blir varme. Så du trenger "bare" ca. 5000-6000 trinn i praksis.

**Lærdom:** Mat inneholder enormt mye kjemisk energi!`,
      },
    },

    // ========== OPPGAVE EXTRA 5: ELASTISK POTENSIELL ENERGI ==========
    {
      id: 'nat10-3-1-oppg-extra-5',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-1-oppg-extra-5',
        number: '3.1.13',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilke av følgende gjenstander har elastisk potensiell energi?',
        options: [
          'En spent buestreng og en sammenpresset fjær',
          'En ball som ligger på et bord',
          'En lyspære som lyser',
          'Et glass vann på et bord',
        ],
        answer: 0,
        solution: `**Riktig svar: En spent buestreng og en sammenpresset fjær**

**Forklaring:**

Elastisk potensiell energi er energi lagret i gjenstander som er strukket, bøyd, tvunnet eller sammenpresset.

**Eksempler på elastisk potensiell energi:**
- Spent buestreng → slipper pilen av gårde
- Sammenpresset fjær → spretter opp
- Strukket strikk → skyter av gårde
- Bøyd grein → spretter tilbake

**Hvorfor de andre er feil:**
- Ball på bord → har tyngdepotensiell energi (ikke elastisk)
- Lyspære → omdanner elektrisk til lys/varme (ikke lagret energi)
- Glass vann → har tyngdepotensiell energi (bordets høyde)

**Huskeregel:** Elastisk energi finnes i ting som er "spent" eller "tvunnet" og kan sprette tilbake.`,
      },
    },

    // ========== OPPGAVE EXTRA 6: ENERGI OMREGNING KCAL ==========
    {
      id: 'nat10-3-1-oppg-extra-6a',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-1-oppg-extra-6a',
        number: '3.1.14',
        type: 'classic',
        difficulty: 'medium',
        task: `På en müsliboks står det at 100 g müsli inneholder 1600 kJ (383 kcal).

a) Gjør om 1600 kJ til joule.
b) Vis at 1600 kJ ≈ 383 kcal ved å bruke omregningsfaktoren 1 kcal = 4,18 kJ.
c) Hvor høyt kunne du løfte en stein på 10 kg med energien fra 100 g müsli? (Bruk g = 10 m/s²)`,
        solution: `**a) 1600 kJ til joule:**

$$1600 \\text{ kJ} = 1600 \\times 1000 = 1\\,600\\,000 \\text{ J} = 1,6 \\text{ MJ}$$

---

**b) Omregning kJ til kcal:**

$$\\frac{1600 \\text{ kJ}}{4,18 \\text{ kJ/kcal}} = 382,8 \\text{ kcal} \\approx 383 \\text{ kcal}$$ ✓

---

**c) Løfte stein med müsli-energi:**

$$E_p = mgh \\Rightarrow h = \\frac{E_p}{mg}$$

$$h = \\frac{1\\,600\\,000 \\text{ J}}{10 \\text{ kg} \\times 10 \\text{ m/s}^2} = \\frac{1\\,600\\,000}{100} = 16\\,000 \\text{ m}$$

**Svar:** Energien i 100 g müsli kunne i teorien løfte en 10 kg stein **16 000 meter** – nesten dobbelt så høyt som Mount Everest!

**Tolkning:** Mat inneholder utrolig mye kjemisk energi. I praksis kan kroppen bare bruke 20-25% av energien til muskelarbeid (resten blir varme), men det ville fortsatt tilsvare 3000-4000 meter.`,
      },
    },

    // ========== OPPGAVE EXTRA 7: ENERGI I SPORT ==========
    {
      id: 'nat10-3-1-oppg-extra-7',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-1-oppg-extra-7',
        number: '3.1.15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En strekhopper (bungee-jumping) hopper fra en bro 50 meter over elven. Strekkhopperen har masse 70 kg. (Bruk g = 10 m/s²)

a) Beregn den potensielle energien i starten (øverst).
b) Halvveis ned (25 meter), hva er den potensielle og kinetiske energien? (Anta at strikken ikke er stram ennå)
c) Hva er hastigheten halvveis ned?
d) Beskriv energiomformingene gjennom hele hoppet (fra start til strikken strekker seg og drar deg tilbake).`,
        solution: `**a) Potensiell energi øverst:**

$$E_p = mgh = 70 \\cdot 10 \\cdot 50 = 35\\,000 \\text{ J} = 35 \\text{ kJ}$$

---

**b) Halvveis ned (h = 25 m):**

**Potensiell energi:**
$$E_p = mgh = 70 \\cdot 10 \\cdot 25 = 17\\,500 \\text{ J}$$

**Kinetisk energi (energibevaring):**
$$E_k = E_{p,start} - E_{p,nå} = 35\\,000 - 17\\,500 = 17\\,500 \\text{ J}$$

Halvparten er potensiell, halvparten er kinetisk.

---

**c) Hastighet halvveis ned:**

$$E_k = \\frac{1}{2}mv^2$$

$$17\\,500 = \\frac{1}{2} \\cdot 70 \\cdot v^2$$

$$v^2 = \\frac{2 \\cdot 17\\,500}{70} = 500$$

$$v = \\sqrt{500} \\approx 22,4 \\text{ m/s} \\approx 80 \\text{ km/t}$$

---

**d) Energiomforminger gjennom hoppet:**

**Fase 1: Fritt fall (strikken er slakk)**
- Potensiell energi → Kinetisk energi
- Hastigheten øker, høyden minker

**Fase 2: Strikken strekkes (bremsing)**
- Kinetisk energi → Elastisk potensiell energi (i strikken)
- Hastigheten avtar, strikken strekkes

**Fase 3: Laveste punkt**
- All energi er elastisk potensiell energi i strikken
- Hastighet = 0 (et øyeblikk)

**Fase 4: Strikken trekker deg opp**
- Elastisk potensiell energi → Kinetisk energi + Potensiell energi
- Du beveger deg oppover igjen

**Fase 5: Pendling**
- Energi veksler mellom kinetisk, potensiell og elastisk
- Litt energi tapes til varme (friksjon, luftmotstand) for hver pendling
- Til slutt stopper du i ro

**Komplett energikjede:**
Potensiell → Kinetisk → Elastisk → Kinetisk → Potensiell → ... → Varme (til slutt)`,
      },
    },

  ],
  exercises: [], // Oppgavene er embedded i content
};

// ============================================================================
// KAPITTEL 3.2: Energibevaring og kvalitet
// ============================================================================

export const CHAPTER_NAT10_3_2: TextbookChapter = {
  id: 'naturfag-10-3-2',
  courseId: 'naturfag-10',
  chapterNumber: '3.2',
  title: 'Energibevaring og kvalitet',
  description: 'Forstå energibevaring, energioverføring og virkningsgrad.',
  estimatedMinutes: 35,
  competenceGoals: [
    'forklare energibevaring og energioverføringer',
    'beregne virkningsgrad i energiomforminger',
    'drøfte energikvalitet og energisparing',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'nat10-3-2-intro',
      type: 'text',
      content: `## Energibevaring og kvalitet

Hva skjer med energien når du lader mobilen? Hvor blir det av energien når du sykler opp en bakke? Hvorfor blir lysepærer varme?

Dette handler om **energibevaring** – et av de viktigste prinsippene i fysikken. Energi kan ikke bare forsvinne eller dukke opp fra ingenting. Den kan bare **omdannes** fra én form til en annen.

I dette kapittelet lærer du:
- Energiprinsippet – energi kan ikke skapes eller ødelegges
- Hvordan energi overføres fra én form til en annen
- Energikjeder – å følge energien gjennom flere trinn
- Energikvalitet – nyttig vs. ikke-nyttig energi
- Virkningsgrad – hvor mye energi som blir nyttig
- Hvorfor energisparing er viktig`,
    },

    // ========== ENERGIPRINSIPPET ==========
    {
      id: 'nat10-3-2-energiprinsippet',
      type: 'text',
      content: `## Energiprinsippet

**Energi kan ikke skapes eller ødelegges, bare omdannes fra én form til en annen.**

Dette kalles **energibevaringsprinsippet** eller **termodynamikkens 1. lov**.

### Hva betyr det?

Den totale mengden energi i et **lukket system** er alltid den samme. Energi kan flytte seg, endre form, men den totale mengden forblir konstant.

**Eksempel: En ball som faller**

1. **Før:** Ballen ligger stille høyt oppe → har **potensiell energi**
2. **Under fall:** Potensiell energi → **bevegelsesenergi**
3. **Etter treff:** Bevegelsesenergi → **varme** og **lyd**

Energien forsvinner ikke – den bare **omdannes**.

### Lukket vs. åpent system

**Lukket system:**
Et system hvor ingen energi kommer inn eller ut. Den totale energien forblir konstant.

**Åpent system:**
Et system hvor energi kan komme inn eller ut (for eksempel en panne på varmen – energi tilføres fra komfyren).

I praksis er de fleste systemer **åpne**, men energiprinsippet gjelder fortsatt – vi må bare huske å ta med energi som kommer inn eller går ut.`,
    },

    // ========== DEFINISJON: ENERGIBEVARING ==========
    {
      id: 'nat10-3-2-def-energibevaring',
      type: 'definition',
      title: 'Energibevaring',
      content: `**Energibevaringsprinsippet:** Energi kan ikke skapes eller ødelegges, bare omdannes fra én form til en annen.

I et lukket system er den totale mengden energi konstant.

**Formel:**
E_inn = E_ut

Den totale energien inn i systemet = den totale energien ut av systemet (i forskjellige former).`,
    },

    // ========== ENERGIOVERFØRINGER ==========
    {
      id: 'nat10-3-2-energioverforinger',
      type: 'text',
      content: `## Energioverføringer

Energi kan overføres fra én form til en annen. Dette skjer hele tiden rundt oss.

### Vanlige energioverføringer

**1. Kjemisk energi → varme**
- Eksempel: Brenning av ved, mat som fordøyes

**2. Elektrisk energi → lys**
- Eksempel: Lyspære, skjerm

**3. Elektrisk energi → bevegelse**
- Eksempel: Elektrisk motor, vifte

**4. Bevegelsesenergi → elektrisk energi**
- Eksempel: Vindturbin, vannkraftverk

**5. Kjemisk energi → elektrisk energi**
- Eksempel: Batteri

**6. Sollys → kjemisk energi**
- Eksempel: Fotosyntese i planter

**7. Potensiell energi → bevegelsesenergi**
- Eksempel: Rutsjebane, fallende gjenstand

### Flere overføringer samtidig

Ofte skjer flere energioverføringer samtidig.

**Eksempel: Lyspære**
- Elektrisk energi → **lys** (det vi ønsker)
- Elektrisk energi → **varme** (ikke ønsket, men uunngåelig)

**Eksempel: Bilmotor**
- Kjemisk energi (bensin) → **bevegelse** (det vi ønsker)
- Kjemisk energi → **varme** (ikke ønsket)
- Kjemisk energi → **lyd** (ikke ønsket)`,
    },

    // ========== ENERGIKJEDER ==========
    {
      id: 'nat10-3-2-energikjeder',
      type: 'text',
      content: `## Energikjeder

En **energikjede** viser hvordan energi omdannes gjennom flere trinn.

### Eksempel 1: Fra sollys til bevegelse

**Sollys → plante → deg → sykkel**

1. **Sollys** → kjemisk energi i planten (fotosyntese)
2. **Planten** → kjemisk energi i maten (du spiser grønnsaker)
3. **Maten** → kjemisk energi i kroppen din (fordøyelse)
4. **Kroppen** → bevegelsesenergi (du tramper på sykkel)
5. **Sykkel** → bevegelsesenergi + varme

### Eksempel 2: Vannkraftverk

**Sol → vann → elektrisitet → lys**

1. **Sollys** varmer opp vann → fordamping
2. **Vanndamp** stiger → skyer
3. **Nedbør** → vann i høyden (potensiell energi)
4. **Vann faller** → bevegelsesenergi
5. **Turbiner** snurrer → bevegelsesenergi
6. **Generator** lager strøm → elektrisk energi
7. **Lyspære** lyser → lys (og varme)

### Energitap i hver overføring

I hver overføring **tapes** noe energi – vanligvis som **varme**.

**Eksempel:**
- Vannkraftverk: 90% virkningsgrad (10% tapes som varme og friksjon)
- Ledninger: 5-10% tapes som varme
- Lyspære: 95% tapes som varme (bare 5% blir lys!)

For hvert trinn blir det **mindre nyttig energi**.`,
    },

    // ========== ENERGIKVALITET ==========
    {
      id: 'nat10-3-2-energikvalitet',
      type: 'text',
      content: `## Energikvalitet

Ikke all energi er like **nyttig**. Vi snakker om **energikvalitet**.

### Høykvalitetsenergi (nyttig)

Energi som er **lett å omdanne** til andre energiformer.

**Eksempler:**
- **Elektrisk energi** – kan enkelt bli lys, bevegelse, varme
- **Kjemisk energi** (bensin, batteri) – kan bli bevegelse eller elektrisitet
- **Bevegelsesenergi** – kan bli elektrisitet (f.eks. vindturbin)

### Lavkvalitetsenergi (mindre nyttig)

Energi som er **vanskelig å omdanne** til andre former.

**Eksempel:**
- **Varme ved lav temperatur** (f.eks. varme i rommet) – vanskelig å bruke til noe annet

### Entropi – energiens "uorden"

I fysikken bruker vi begrepet **entropi** for å beskrive "energiens kvalitet".

**Høy entropi = lav kvalitet**
Energien er spredt og vanskelig å bruke (f.eks. varme i lufta).

**Lav entropi = høy kvalitet**
Energien er konsentrert og lett å bruke (f.eks. batteri, bensin).

**Termodynamikkens 2. lov:**
Entropien i universet øker alltid. Det betyr at **energikvaliteten synker** over tid.

**Praktisk betydning:**
Hver gang vi omdanner energi, blir noe av den til **lavkvalitets varmeenergi** som er vanskelig å bruke videre.

Det er derfor vi ikke kan lage en maskin med 100% virkningsgrad – noe energi blir alltid til "ubrukelig" varme.`,
    },

    // ========== VIRKNINGSGRAD ==========
    {
      id: 'nat10-3-2-virkningsgrad',
      type: 'text',
      content: `## Virkningsgrad

**Virkningsgrad** sier noe om hvor mye av energien som blir **nyttig**.

### Formel

**Virkningsgrad (η) = (Nyttig energi ut / Total energi inn) × 100%**

**η** = gresk bokstav "eta"

### Eksempel 1: Lyspære

En gammel glødelampe:
- **Energi inn:** 100 J elektrisk energi
- **Nyttig energi ut:** 5 J lys
- **Ikke-nyttig energi:** 95 J varme

**Virkningsgrad:**
η = (5 J / 100 J) × 100% = **5%**

Bare 5% av energien blir lys – resten blir varme!

### Eksempel 2: LED-pære

En LED-pære:
- **Energi inn:** 20 J elektrisk energi
- **Nyttig energi ut:** 18 J lys
- **Ikke-nyttig energi:** 2 J varme

**Virkningsgrad:**
η = (18 J / 20 J) × 100% = **90%**

LED er mye mer effektiv!

### Typiske virkningsgrader

**Høy virkningsgrad:**
- **Vannkraftverk:** 85-90%
- **Elektrisk motor:** 80-95%
- **LED-pære:** 80-90%

**Middels virkningsgrad:**
- **Solceller:** 15-25%
- **Bilmotor (bensin):** 25-30%
- **Vindturbin:** 35-45%

**Lav virkningsgrad:**
- **Glødelampe:** 5%
- **Kullkraftverk:** 35-40%

### Hvorfor ikke 100%?

Det er **umulig** å lage en maskin med 100% virkningsgrad, fordi:

1. **Friksjon** – bevegelige deler gnir mot hverandre → varme
2. **Luftmotstand** – bevegelse i luft/vann → varme
3. **Elektrisk motstand** – strøm i ledninger → varme
4. **Termodynamikkens 2. lov** – entropi øker alltid

Varme er ofte "energitap" fordi den spres til omgivelsene og blir vanskelig å bruke.`,
    },

    // ========== DEFINISJON: VIRKNINGSGRAD ==========
    {
      id: 'nat10-3-2-def-virkningsgrad',
      type: 'definition',
      title: 'Virkningsgrad',
      content: `**Virkningsgrad (η):** Et mål på hvor effektivt en energiomforming er.

**Formel:**
η = (Nyttig energi ut / Total energi inn) × 100%

**Enhet:** Prosent (%)

**Eksempel:**
En motor får 1000 J energi inn, men bare 750 J blir nyttig bevegelse.
η = (750 J / 1000 J) × 100% = 75%

**Tolkning:**
- η = 100% → perfekt effektiv (umulig i praksis)
- η = 50% → halvparten av energien blir nyttig
- η = 10% → mye energi tapes`,
    },

    // ========== EKSEMPEL: BEREGNE VIRKNINGSGRAD ==========
    {
      id: 'nat10-3-2-ex-virkningsgrad',
      type: 'example',
      title: 'Eksempel: Beregne virkningsgrad',
      problem: `En elektrisk vannkoker bruker 2000 J elektrisk energi til å varme opp vann. Vannet får tilført 1800 J varmeenergi. Resten tapes til omgivelsene.

Hva er virkningsgraden til vannkokeren?`,
      solution: `**Gitt:**
- Total energi inn (elektrisk): E_inn = 2000 J
- Nyttig energi ut (varme til vann): E_nyttig = 1800 J

**Formel:**
η = (E_nyttig / E_inn) × 100%

**Beregning:**
η = (1800 J / 2000 J) × 100%
η = 0,9 × 100%
η = 90%

**Svar:**
Virkningsgraden til vannkokeren er **90%**.

**Tolkning:**
90% av den elektriske energien blir varme i vannet (det vi ønsker). 10% (200 J) tapes til omgivelsene (luften rundt vannkokeren).

Dette er en god virkningsgrad!`,
    },

    // ========== ENERGISPARING ==========
    {
      id: 'nat10-3-2-energisparing',
      type: 'text',
      content: `## Energisparing

Selv om energi ikke kan ødelegges, er det viktig å **spare energi**. Hvorfor?

### Hvorfor spare energi?

**1. Energiproduksjon forurenser**
- Kullkraft, gasskraft → CO₂-utslipp → klimaendringer
- Selv fornybar energi (vindmøller, vannkraft) påvirker naturen

**2. Energi koster penger**
- Mindre energibruk = lavere strømregning

**3. Ressurser er begrensede**
- Olje, kull og gass er ikke fornybare
- Selv fornybare ressurser (f.eks. vann) er begrensede

**4. Lavere virkningsgrad = mer energi trengs**
- Hvis en lyspære bare er 5% effektiv, må vi produsere 20 ganger mer energi enn nødvendig

### Hvordan spare energi?

**1. Bruk mer effektive maskiner**
- Bytt glødelamper med LED (90% virkningsgrad vs. 5%)
- Kjøp energieffektive apparater (A-merket)

**2. Isoler bygninger**
- Mindre varmetap → mindre energi trengs til oppvarming

**3. Slå av lys og elektronikk**
- Lader, TV på standby osv. bruker fortsatt strøm

**4. Gjenbruk varme**
- Varmepumper bruker varme fra luften/bakken
- Varmegjenvinning fra ventilasjon

**5. Bruk fornybar energi**
- Sol, vind, vann → ingen CO₂-utslipp

### Energimerking

I Norge har elektriske apparater **energimerking** (A-G):

- **A (grønn):** Mest energieffektiv
- **G (rød):** Minst energieffektiv

Å velge A-merkede apparater kan spare mye energi (og penger) over tid.`,
    },

    // ========== EKSEMPEL: SANKEY-DIAGRAM ==========
    {
      id: 'nat10-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Tegne et Sankey-diagram',
      problem: `En bilmotor forbrenner bensin med 50 000 J energi. Av dette blir:
- 12 500 J nyttig bevegelse (kjøring)
- 30 000 J varme (avgasser og kjølesystem)
- 5 000 J friksjon i bevegelige deler
- 2 500 J lydenergi (motorstøy)

Beskriv hvordan dette ville sett ut i et Sankey-diagram, og beregn virkningsgraden.`,
      solution: `**Sankey-diagram (beskrivelse):**

Et Sankey-diagram er en pil-figur som viser energistrøm. Bredden på pilene er proporsjonal med energimengden.

Hovedpil inn (venstre): **50 000 J kjemisk energi (bensin)**

Piler ut (høyre):
→ **12 500 J** nyttig bevegelse (25%) – bredeste "nyttige" pil
→ **30 000 J** varme i avgasser/kjøling (60%) – bredeste pil (energitap)
→ **5 000 J** friksjon/varme (10%)
→ **2 500 J** lyd (5%) – tynneste pil

**Kontroll:** 12 500 + 30 000 + 5 000 + 2 500 = 50 000 J ✓

---

**Virkningsgrad:**

$$\\eta = \\frac{\\text{Nyttig energi}}{\\text{Total energi inn}} \\times 100\\%$$

$$\\eta = \\frac{12\\,500}{50\\,000} \\times 100\\% = 25\\%$$

**Tolkning:**
Bare 25% av bensinen blir til nyttig bevegelse. Hele 75% av energien "kastes bort" som varme, friksjon og lyd. Dette er typisk for forbrenningsmotorer.

**Sammenligning:** En elektrisk motor har η ≈ 90%, altså mye mer effektiv!`,
    },

    // ========== EKSEMPEL: ENERGIKVALITET ==========
    {
      id: 'nat10-3-2-example-2',
      type: 'example',
      title: 'Eksempel: Energikvalitet og degradering',
      problem: `Forklar hva som skjer med energikvaliteten gjennom følgende energikjede:

Kjemisk energi (bensin) → Kinetisk energi (bil) → Termisk energi (bremser) → Varme spredt i luften`,
      solution: `**Trinn 1: Kjemisk energi (bensin) – HØY kvalitet**

Bensinen inneholder konsentrert kjemisk energi. Den er:
- Lett å lagre og transportere
- Lett å omdanne til andre energiformer
- Energien er "samlet" på ett sted

**Trinn 2: Kinetisk energi (bil i bevegelse) – HØY kvalitet**

Bilens bevegelsesenergi er fortsatt nyttig:
- Kan brukes til å drive bilen
- Kan omdannes til elektrisk energi (regenerativ bremsing)
- Energien er "organisert" (alle deler beveger seg samme vei)

**Trinn 3: Termisk energi (varme bremser) – MIDDELS kvalitet**

Når du bremser, omdannes kinetisk energi til varme i bremsene:
- Bremseskivene kan bli 300-500°C varme
- Varmen er konsentrert (høy temperatur)
- Kan i teorien brukes til noe (men gjøres sjelden)

**Trinn 4: Varme spredt i luften – LAV kvalitet**

Varmen fra bremsene spres til den kalde luften:
- Temperaturen er lav (bare litt over lufttemperaturen)
- Varmen er spredt over et stort volum
- Praktisk umulig å samle og bruke igjen
- Entropien er høy

**Konklusjon:**

Med hvert trinn blir energien:
- Mer spredt og uordnet
- Vanskeligere å bruke til nyttig arbeid
- Kvaliteten synker

Dette er **termodynamikkens 2. lov** i praksis: Energi degraderes alltid mot lavkvalitets varme. Vi kan aldri "samle opp" all varmen og gjøre den nyttig igjen.`,
    },

    // ========== EKSEMPEL: BEREGNE TOTAL VIRKNINGSGRAD ==========
    {
      id: 'nat10-3-2-example-3',
      type: 'example',
      title: 'Eksempel: Total virkningsgrad i en energikjede',
      problem: `Et kullkraftverk har følgende virkningsgrader for hvert trinn:
- Forbrenning → damp: 90%
- Damp → turbin: 50%
- Turbin → generator: 95%
- Overføring (ledninger): 92%

Hva er den totale virkningsgraden?`,
      solution: `**Total virkningsgrad i en kjede:**

Når energi omdannes gjennom flere trinn, multipliserer vi virkningsgradene:

$$\\eta_{total} = \\eta_1 \\times \\eta_2 \\times \\eta_3 \\times \\eta_4$$

**Utregning:**

$$\\eta_{total} = 0,90 \\times 0,50 \\times 0,95 \\times 0,92$$

$$\\eta_{total} = 0,90 \\times 0,50 = 0,45$$

$$\\eta_{total} = 0,45 \\times 0,95 = 0,4275$$

$$\\eta_{total} = 0,4275 \\times 0,92 = 0,3933$$

$$\\eta_{total} \\approx 39\\%$$

**Svar:** Total virkningsgrad er ca. **39%**.

**Tolkning:**
Selv om hvert enkelt trinn har god virkningsgrad, blir den totale virkningsgraden lav fordi tapene akkumuleres.

Av 100 J kull-energi ender bare 39 J opp som nyttig elektrisitet hos forbrukeren!

**Viktig lærdom:**
Jo færre omformingstrinn, jo bedre total virkningsgrad. Derfor er solceller (1 trinn: lys → strøm) potensielt mer effektive enn kullkraftverk (mange trinn).`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE - ENERGIBEVARING ==========
    {
      id: 'nat10-3-2-oppg1',
      type: 'exercise',
      title: 'Oppgave 1: Energiprinsippet',
      difficulty: 'lett',
      problem: `Hva betyr energibevaringsprinsippet?

A) Energi forsvinner når den brukes
B) Energi kan ikke skapes eller ødelegges, bare omdannes
C) Energi kan skapes ved friksjon
D) Energi blir alltid til varme til slutt`,
      solution: `**Riktig svar: B**

**Forklaring:**

**Energibevaringsprinsippet** sier at energi ikke kan skapes eller ødelegges, bare **omdannes** fra én form til en annen.

**Hvorfor er de andre svarene feil?**

**A)** Energi forsvinner ikke – den omdannes bare til andre former (f.eks. varme).

**C)** Energi kan ikke skapes ved friksjon. Friksjon **omdanner** bevegelsesenergi til varme.

**D)** Mye energi blir til slutt varme (pga. termodynamikkens 2. lov), men ikke all energi er varme.

**Eksempel:**
En ball som faller:
- Før: Potensiell energi
- Under fall: Bevegelsesenergi
- Etter treff: Varme + lyd

Energien finnes fortsatt – bare i en annen form!`,
    },

    // ========== OPPGAVE 2: MULTIPLE CHOICE - VIRKNINGSGRAD ==========
    {
      id: 'nat10-3-2-oppg2',
      type: 'exercise',
      title: 'Oppgave 2: Virkningsgrad',
      difficulty: 'lett',
      problem: `En lyspære får tilført 100 J elektrisk energi. 90 J blir varme, og 10 J blir lys.

Hva er virkningsgraden?

A) 10%
B) 90%
C) 100%
D) 50%`,
      solution: `**Riktig svar: A) 10%**

**Forklaring:**

Virkningsgrad = (Nyttig energi ut / Total energi inn) × 100%

**Nyttig energi:** Lys = 10 J
**Total energi inn:** 100 J

η = (10 J / 100 J) × 100% = **10%**

**Tolkning:**
Bare 10% av energien blir **nyttig lys**. Resten (90%) blir **varme**, som er "energitap" for en lyspære.

Dette er typisk for gamle glødelamper – de er ikke særlig effektive!

LED-pærer har derimot 80-90% virkningsgrad.`,
    },

    // ========== OPPGAVE 3: ENERGIKJEDE - SOL TIL BEVEGELSE ==========
    {
      id: 'nat10-3-2-oppg3',
      type: 'exercise',
      title: 'Oppgave 3: Energikjede',
      difficulty: 'medium',
      problem: `Beskriv energikjeden fra sollys til at du løper.

Start: Sollys
Slutt: Bevegelsesenergi når du løper

Fyll inn de manglende trinnene.`,
      solution: `**Energikjede: Sollys → bevegelse**

1. **Sollys** → planter (fotosyntese)
   - Solenergi omdannes til **kjemisk energi** i planten

2. **Planter** → mat
   - Kjemisk energi lagres i frukt, grønnsaker, korn

3. **Mat** → kroppen din (fordøyelse)
   - Du spiser maten
   - Kjemisk energi i maten brytes ned i kroppen

4. **Kroppen** → muskler
   - Kjemisk energi omdannes til **bevegelsesenergi** i musklene

5. **Muskler** → løping
   - Bevegelsesenergi brukes til å bevege kroppen din

**Fullstendig kjede:**
**Sollys → kjemisk energi (planter) → kjemisk energi (mat) → kjemisk energi (kroppen) → bevegelsesenergi (løping)**

**Energitap:**
I hvert trinn tapes noe energi som **varme** (derfor blir du varm når du løper!).`,
    },

    // ========== OPPGAVE 4: ENERGIKJEDE - VANNKRAFT ==========
    {
      id: 'nat10-3-2-oppg4',
      type: 'exercise',
      title: 'Oppgave 4: Energikjede i vannkraftverk',
      difficulty: 'medium',
      problem: `Forklar energikjeden i et vannkraftverk.

Start: Vann høyt oppe i fjellet
Slutt: Lys i en lampe hjemme hos deg

Beskriv alle energiomdanningene som skjer.`,
      solution: `**Energikjede: Vannkraft → lys**

**1. Vann i høyden**
- Vann i et magasin/demning høyt oppe
- **Potensiell energi** (tyngdekraft)

**2. Vann faller**
- Vannet renner ned gjennom rør
- Potensiell energi → **bevegelsesenergi**

**3. Turbiner snurrer**
- Vannet treffer turbinbladene
- Bevegelsesenergi (vann) → **bevegelsesenergi (turbin)**

**4. Generator lager strøm**
- Turbinen driver en generator
- Bevegelsesenergi → **elektrisk energi**

**5. Strømmen transporteres**
- Elektrisk energi sendes gjennom kraftledninger
- Noe energi tapes som **varme** i ledningene

**6. Lyspære**
- Strømmen når lyspæren din
- Elektrisk energi → **lys** (og varme)

**Fullstendig kjede:**
**Potensiell energi → bevegelsesenergi (vann) → bevegelsesenergi (turbin) → elektrisk energi → lys (+ varme)**

**Virkningsgrad:**
Vannkraftverk har høy virkningsgrad (85-90%), så mye av den opprinnelige energien blir nyttig elektrisitet!`,
    },

    // ========== OPPGAVE 5: ENERGIKJEDE - SOLCELLER ==========
    {
      id: 'nat10-3-2-oppg5',
      type: 'exercise',
      title: 'Oppgave 5: Energikjede i solceller',
      difficulty: 'medium',
      problem: `Du lader mobilen din med en solcellelader.

Beskriv energikjeden fra sollys til ladet batteri i mobilen.`,
      solution: `**Energikjede: Sollys → ladet batteri**

**1. Sollys**
- Solen sender ut **lysenergi** (elektromagnetisk stråling)

**2. Solceller**
- Lysenergi treffer solcellene
- Lysenergi → **elektrisk energi**
- Virkningsgrad: 15-25% (mye energi tapes som varme!)

**3. Ladeledning**
- Elektrisk energi transporteres fra solcellene til mobilen
- Noe energi tapes som **varme** i ledningen

**4. Mobilbatteri**
- Elektrisk energi lagres i batteriet
- Elektrisk energi → **kjemisk energi** (oppladning av batteri)

**Fullstendig kjede:**
**Lysenergi (sol) → elektrisk energi (solceller) → elektrisk energi (ledning) → kjemisk energi (batteri)**

**Energitap:**
Mye energi tapes underveis:
- Solcellene: Bare 15-25% blir elektrisitet
- Ledning: 5-10% tapes som varme
- Batteri: 10-20% tapes ved lading

**Total virkningsgrad:**
Bare ca. 10-20% av solenergi ender opp som lagret energi i batteriet!`,
    },

    // ========== OPPGAVE 6: BEREGNING AV VIRKNINGSGRAD - MOTOR ==========
    {
      id: 'nat10-3-2-oppg6',
      type: 'exercise',
      title: 'Oppgave 6: Beregne virkningsgrad (motor)',
      difficulty: 'medium',
      problem: `En elektrisk motor får tilført 5000 J elektrisk energi. Motoren utfører 4000 J nyttig arbeid (bevegelsesenergi). Resten blir varme.

a) Hvor mye energi blir til varme?
b) Hva er virkningsgraden til motoren?`,
      solution: `**Gitt:**
- Total energi inn: E_inn = 5000 J
- Nyttig energi ut: E_nyttig = 4000 J

**a) Energi som blir til varme**

**Energibevaring:**
E_inn = E_nyttig + E_varme

E_varme = E_inn - E_nyttig
E_varme = 5000 J - 4000 J
E_varme = 1000 J

**Svar:** 1000 J blir til varme.

---

**b) Virkningsgrad**

**Formel:**
η = (E_nyttig / E_inn) × 100%

η = (4000 J / 5000 J) × 100%
η = 0,8 × 100%
η = 80%

**Svar:** Virkningsgraden er **80%**.

**Tolkning:**
80% av energien blir nyttig bevegelse, mens 20% (1000 J) tapes som varme. Dette er en god virkningsgrad for en elektrisk motor!`,
    },

    // ========== OPPGAVE 7: BEREGNING AV VIRKNINGSGRAD - BILMOTOR ==========
    {
      id: 'nat10-3-2-oppg7',
      type: 'exercise',
      title: 'Oppgave 7: Beregne virkningsgrad (bilmotor)',
      difficulty: 'medium',
      problem: `En bilmotor forbrenner bensin med en energiinnhold på 50 000 J. Motoren leverer 12 500 J nyttig bevegelsesenergi til hjulene.

a) Hva er virkningsgraden til bilmotoren?
b) Hvor mye energi tapes (blir varme og lyd)?
c) Hvorfor er virkningsgraden så lav?`,
      solution: `**Gitt:**
- Total energi inn (bensin): E_inn = 50 000 J
- Nyttig energi ut (bevegelse): E_nyttig = 12 500 J

**a) Virkningsgrad**

η = (E_nyttig / E_inn) × 100%
η = (12 500 J / 50 000 J) × 100%
η = 0,25 × 100%
η = 25%

**Svar:** Virkningsgraden er **25%**.

---

**b) Energitap**

E_tap = E_inn - E_nyttig
E_tap = 50 000 J - 12 500 J
E_tap = 37 500 J

**Svar:** 37 500 J tapes som varme, lyd og friksjon.

---

**c) Hvorfor er virkningsgraden så lav?**

Bilmotorer har lav virkningsgrad fordi:

**1. Varmetap**
- Mesteparten av energien fra forbrenningen blir **varme** i motoren og avgasser
- Derfor må biler ha kjølesystem!

**2. Friksjon**
- Bevegelige deler gnir mot hverandre → varme
- Hjul mot vei → varme

**3. Lydenergi**
- Motorstøy = energi som "forsvinner" som lyd

**4. Termodynamikkens lover**
- Det er fysisk umulig å omdanne all varmeenergi til bevegelse
- Noe energi må alltid tapes

**Sammenligning:**
- **Bensinmotor:** 25-30% virkningsgrad
- **Elektrisk motor:** 80-95% virkningsgrad

Derfor er elbiler mer energieffektive!`,
    },

    // ========== OPPGAVE 8: ENERGISPARING (VANSKELIG) ==========
    {
      id: 'nat10-3-2-oppg8',
      type: 'exercise',
      title: 'Oppgave 8: Energisparing i hjemmet',
      difficulty: 'vanskelig',
      problem: `En familie bruker 10 stk gamle glødelamper (60 W, 5% virkningsgrad) i 5 timer hver dag.

De vurderer å bytte til LED-pærer (8 W, 90% virkningsgrad) som gir samme mengde lys.

a) Hvor mye energi (i kWh) bruker glødelampene per dag?
b) Hvor mye energi ville LED-pærene brukt per dag?
c) Hvor mye energi sparer familien per dag ved å bytte?
d) Hvis strømprisen er 1,50 kr/kWh, hvor mye penger sparer de per år?
e) Forklar hvorfor LED gir samme lys med mindre effekt.`,
      solution: `**a) Energiforbruk med glødelamper**

**Gitt:**
- Antall lamper: 10 stk
- Effekt per lampe: 60 W
- Tid per dag: 5 timer

**Total effekt:**
P_total = 10 × 60 W = 600 W = 0,6 kW

**Energi per dag:**
E = P × t
E = 0,6 kW × 5 timer = 3 kWh

**Svar:** Glødelampene bruker **3 kWh per dag**.

---

**b) Energiforbruk med LED**

**Gitt:**
- Antall lamper: 10 stk
- Effekt per lampe: 8 W
- Tid per dag: 5 timer

**Total effekt:**
P_total = 10 × 8 W = 80 W = 0,08 kW

**Energi per dag:**
E = P × t
E = 0,08 kW × 5 timer = 0,4 kWh

**Svar:** LED-pærene bruker **0,4 kWh per dag**.

---

**c) Energisparing per dag**

E_spart = E_gløde - E_LED
E_spart = 3 kWh - 0,4 kWh = 2,6 kWh

**Svar:** Familien sparer **2,6 kWh per dag**.

---

**d) Pengesparing per år**

**Energi spart per år:**
E_år = 2,6 kWh/dag × 365 dager = 949 kWh/år

**Penger spart:**
Kostnad = 949 kWh × 1,50 kr/kWh = 1423,50 kr

**Svar:** Familien sparer ca. **1424 kr per år**.

---

**e) Hvorfor gir LED samme lys med mindre effekt?**

**Glødelampe:**
- Virkningsgrad: 5%
- 60 W inn → 3 W lys, 57 W varme
- Nyttig lys: 3 W

**LED:**
- Virkningsgrad: 90%
- 8 W inn → 7,2 W lys, 0,8 W varme
- Nyttig lys: 7,2 W

**Forklaring:**
LED er mye mer effektiv til å omdanne elektrisk energi til **lys** i stedet for **varme**.

For å få samme lysstyrke (3 W lys):
- Glødelampe trenger 60 W (5% av 60 W = 3 W)
- LED trenger bare ~4 W (90% av 4 W = 3,6 W ≈ 3 W)

**Konklusjon:**
LED "kaster bort" mye mindre energi som varme, derfor trengs det mindre strøm for samme lys.

Dette er et godt eksempel på hvorfor **energieffektivitet** er viktig!`,
    },

    // ========== OPPGAVE EXTRA 1: ENERGIOMFORMINGER I HVERDAGEN ==========
    {
      id: 'nat10-3-2-oppg-extra-1',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-2-oppg-extra-1',
        number: '3.2.9',
        type: 'classic',
        difficulty: 'lett',
        task: `Beskriv energiomformingene som skjer i følgende situasjoner:

a) Du slår på en lommelykt
b) Du koker vann på komfyren
c) En vindturbin produserer strøm`,
        solution: `**a) Lommelykt:**

Kjemisk energi (batteri) → Elektrisk energi (ledninger) → Lysenergi + Termisk energi (lyspæren)

Hovedomformingen: **Kjemisk → Elektrisk → Lys**

---

**b) Koking av vann på komfyren:**

Elektrisk energi (strømnettet) → Termisk energi (varmeelement) → Termisk energi (vannet varmes opp)

Hovedomformingen: **Elektrisk → Termisk**

(Noe energi tapes til oppvarming av luft, gryte osv.)

---

**c) Vindturbin:**

Kinetisk energi (vind) → Rotasjonsenergi (turbin) → Elektrisk energi (generator)

Hovedomformingen: **Kinetisk → Elektrisk**

(Noe energi tapes til friksjon i lager og varme i generatoren)

**Oppsummering:** I alle disse eksemplene gjelder energibevaringsprinsippet – energi forsvinner ikke, den bare omdannes.`,
      },
    },

    // ========== OPPGAVE EXTRA 2: VIRKNINGSGRAD SAMMENLIGNING ==========
    {
      id: 'nat10-3-2-oppg-extra-2',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-2-oppg-extra-2',
        number: '3.2.10',
        type: 'classic',
        difficulty: 'medium',
        task: `To ovner varmer opp et rom:
- Ovn A bruker 3000 J energi og leverer 2700 J varme til rommet.
- Ovn B bruker 2000 J energi og leverer 1900 J varme til rommet.

a) Beregn virkningsgraden for begge ovnene.
b) Hvilken ovn er mest effektiv?
c) Hvilken ovn leverer mest varme?`,
        solution: `**a) Virkningsgrad:**

**Ovn A:**
$$\\eta_A = \\frac{2700}{3000} \\times 100\\% = 90\\%$$

**Ovn B:**
$$\\eta_B = \\frac{1900}{2000} \\times 100\\% = 95\\%$$

---

**b) Mest effektiv:**

Ovn B er mest effektiv med **95%** virkningsgrad (vs. 90% for Ovn A).

---

**c) Mest varme:**

Ovn A leverer mest varme: **2700 J** (vs. 1900 J for Ovn B).

---

**Viktig poeng:**

Mest effektiv ≠ mest varme!

- Ovn B er mer **effektiv** (bruker energien bedre)
- Ovn A leverer mer **total varme** (fordi den bruker mer energi)

For å varme opp rommet raskest velger du Ovn A. For å spare energi velger du Ovn B.`,
      },
    },

    // ========== OPPGAVE EXTRA 3: ENERGIKJEDE ELBIL ==========
    {
      id: 'nat10-3-2-oppg-extra-3',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-2-oppg-extra-3',
        number: '3.2.11',
        type: 'classic',
        difficulty: 'medium',
        task: `Beskriv energikjeden for en elbil som lades med strøm fra et vannkraftverk.

Start: Vann i magasinet
Slutt: Bilen kjører

List opp alle energiomformingene og typisk virkningsgrad for hvert trinn.`,
        solution: `**Energikjede: Vannkraft → Elbil i bevegelse**

**1. Vann i magasinet → Turbin**
- Potensiell energi → Kinetisk energi → Rotasjonsenergi
- Virkningsgrad: ca. 90%

**2. Generator → Strømnett**
- Rotasjonsenergi → Elektrisk energi
- Inkludert tap i ledninger: ca. 90%

**3. Lading av batteri**
- Elektrisk energi → Kjemisk energi (batteri)
- Virkningsgrad: ca. 90%

**4. Batteri → Motor**
- Kjemisk energi → Elektrisk energi → Kinetisk energi
- Virkningsgrad: ca. 85%

---

**Total virkningsgrad:**
$$\\eta_{total} = 0,90 \\times 0,90 \\times 0,90 \\times 0,85 = 0,62 = 62\\%$$

---

**Sammenligning med bensinbil:**
Bensinbil: Raffinering (95%) × Motor (25%) = ca. 24%

**Elbil er over dobbelt så effektiv som en bensinbil!**

Det betyr at selv om vi tar hensyn til alle tap fra kraftverk til hjul, bruker elbilen bare halvparten så mye energi.`,
      },
    },

    // ========== OPPGAVE EXTRA 4: TERMODYNAMIKKENS 2. LOV ==========
    {
      id: 'nat10-3-2-oppg-extra-4',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-2-oppg-extra-4',
        number: '3.2.12',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva sier termodynamikkens 2. lov?',
        options: [
          'Energi kan ikke skapes eller ødelegges',
          'Energikvaliteten synker alltid over tid (entropien øker)',
          'Energi beveger seg fra kalde til varme objekter',
          'Temperaturen i universet er konstant',
        ],
        answer: 1,
        solution: `**Riktig svar: Energikvaliteten synker alltid over tid (entropien øker)**

**Forklaring:**

Termodynamikkens **1. lov** sier at energi bevares (kan ikke skapes/ødelegges).

Termodynamikkens **2. lov** sier at energikvaliteten alltid synker over tid. Entropien (uorden) i et lukket system øker alltid.

**Hva betyr det i praksis?**
- Varme strømmer alltid fra varmt til kaldt (aldri motsatt av seg selv)
- Ved hver energiomforming tapes noe energi som "ubrukelig" varme
- Vi kan aldri lage en maskin med 100% virkningsgrad
- Energien i universet blir stadig mer spredt og uordnet

**Eksempel:**
En kopp varm kaffe avkjøles over tid. Varmen spres til rommet. Du kan ikke samle tilbake varmen og gjøre kaffen varm igjen uten å tilføre ny energi.`,
      },
    },

    // ========== OPPGAVE EXTRA 5: VARMEPUMPE ==========
    {
      id: 'nat10-3-2-oppg-extra-5',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-2-oppg-extra-5',
        number: '3.2.13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En varmepumpe bruker 1000 J elektrisk energi og henter 2000 J varme fra uteluften. Totalt leverer den 3000 J varme til huset.

a) Hva er virkningsgraden (COP = nyttig varme / elektrisk energi)?
b) Hvorfor kan COP være over 100%? Er det brudd på energiloven?
c) Hvorfor er varmepumper mer effektive enn elektriske panelovner?`,
        solution: `**a) COP (Coefficient of Performance):**

$$COP = \\frac{\\text{Nyttig varme ut}}{\\text{Elektrisk energi inn}} = \\frac{3000 \\text{ J}}{1000 \\text{ J}} = 3,0$$

COP = 3,0 betyr at for hver 1 J strøm får du 3 J varme.

Det tilsvarer en "virkningsgrad" på **300%**!

---

**b) Er det brudd på energiloven?**

**Nei!** Det er ikke brudd på energibevaringsprinsippet fordi:

Energi inn = Energi ut:
- Elektrisk energi inn: 1000 J
- Varme hentet fra uteluft: 2000 J (dette er OGSÅ energi inn!)
- Total energi inn: 3000 J
- Varme levert til huset: 3000 J

Energibalanse: 1000 + 2000 = 3000 ✓

Varmepumpen "lager" ikke energi – den **flytter** varme fra uteluften til huset. Den bruker strøm til å drive denne prosessen.

---

**c) Hvorfor varmepumpe er bedre enn panelovn:**

**Panelovn:** 1000 J strøm → 1000 J varme (COP = 1,0)
**Varmepumpe:** 1000 J strøm → 3000 J varme (COP = 3,0)

Varmepumpen gir **3 ganger mer varme** for samme mengde strøm! Den er mer effektiv fordi den henter ekstra varme fra uteluften, i stedet for å bare omdanne strøm til varme.

**I praksis:** En god varmepumpe kan spare 50-75% av oppvarmingskostnadene sammenlignet med panelovner.`,
      },
    },

    // ========== OPPGAVE EXTRA 6: ENERGI I KAFFE ==========
    {
      id: 'nat10-3-2-oppg-extra-6a',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-2-oppg-extra-6a',
        number: '3.2.14',
        type: 'classic',
        difficulty: 'medium',
        task: `En vannkoker har effekt 2000 W og bruker 3 minutter på å koke 1 liter vann.

a) Hvor mye elektrisk energi bruker vannkokeren (i joule)?
b) Det trengs ca. 336 000 J for å varme 1 liter vann fra 20°C til 100°C. Hva er virkningsgraden til vannkokeren?
c) Hvor mye energi tapes til omgivelsene?`,
        solution: `**a) Elektrisk energi brukt:**

P = 2000 W, t = 3 min = 180 s

$$E = P \\times t = 2000 \\times 180 = 360\\,000 \\text{ J} = 360 \\text{ kJ}$$

---

**b) Virkningsgrad:**

Nyttig energi (varme til vann) = 336 000 J
Total energi inn = 360 000 J

$$\\eta = \\frac{336\\,000}{360\\,000} \\times 100\\% = 93,3\\%$$

**Svar:** Virkningsgraden er **93,3%** – svært bra!

---

**c) Energi tapt:**

$$E_{tap} = 360\\,000 - 336\\,000 = 24\\,000 \\text{ J} = 24 \\text{ kJ}$$

Denne energien varmer opp vannkokerens kropp og luften rundt. Du kan kjenne dette ved at vannkokeren er varm på utsiden.`,
      },
    },

    // ========== OPPGAVE EXTRA 7: ENERGIREGNSKAPET ==========
    {
      id: 'nat10-3-2-oppg-extra-7',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-2-oppg-extra-7',
        number: '3.2.15',
        type: 'classic',
        difficulty: 'medium',
        task: `En elektrisk motor på 500 W brukes i 2 minutter. Motoren har 80% virkningsgrad.

a) Hvor mye energi tilføres motoren totalt?
b) Hvor mye energi blir til nyttig arbeid?
c) Hvor mye energi tapes som varme?`,
        solution: `**a) Total energi tilført:**

P = 500 W, t = 2 min = 120 s

$$E_{inn} = P \\times t = 500 \\text{ W} \\times 120 \\text{ s} = 60\\,000 \\text{ J} = 60 \\text{ kJ}$$

---

**b) Nyttig arbeid (80% av total):**

$$E_{nyttig} = E_{inn} \\times \\eta = 60\\,000 \\times 0,80 = 48\\,000 \\text{ J} = 48 \\text{ kJ}$$

---

**c) Energi tapt som varme:**

$$E_{varme} = E_{inn} - E_{nyttig} = 60\\,000 - 48\\,000 = 12\\,000 \\text{ J} = 12 \\text{ kJ}$$

---

**Kontroll (energibevaring):**
E_inn = E_nyttig + E_varme
60 000 = 48 000 + 12 000 = 60 000 ✓

**Oppsummering:**
| | Energi | Andel |
|--|--------|-------|
| Total inn | 60 kJ | 100% |
| Nyttig arbeid | 48 kJ | 80% |
| Varmetap | 12 kJ | 20% |`,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'nat10-3-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Viktige begreper

**Energibevaringsprinsippet:**
Energi kan ikke skapes eller ødelegges, bare omdannes.

**Energioverføringer:**
Energi kan gå fra én form til en annen (f.eks. elektrisk → lys, kjemisk → bevegelse).

**Energikjeder:**
Viser hvordan energi omdannes gjennom flere trinn (f.eks. sol → plante → deg → bevegelse).

**Energikvalitet:**
Ikke all energi er like nyttig. Høykvalitetsenergi (elektrisk, kjemisk) er lett å omdanne. Lavkvalitetsenergi (varme ved lav temp.) er vanskeligere å bruke.

**Virkningsgrad:**
η = (Nyttig energi ut / Total energi inn) × 100%

**Energitap:**
I hver energiomforming tapes noe energi – vanligvis som varme.

### Hvorfor energisparing er viktig

1. **Miljø:** Energiproduksjon forurenser (CO₂, klimaendringer)
2. **Økonomi:** Energi koster penger
3. **Ressurser:** Ikke-fornybare ressurser (olje, kull) er begrensede
4. **Effektivitet:** Lav virkningsgrad = mer energi må produseres

### Neste steg

Nå som du forstår energibevaring og virkningsgrad, er du klar til å:
- Forstå varmeledning og temperaturendringer
- Utforske fornybar energi (sol, vind, vann)
- Lære om strømnettet og energiforsyning
- Vurdere miljøkonsekvenser av energibruk`,
    },
  ],
  exercises: [], // Oppgavene er embedded i content
};

// ============================================================================
// Kapittel 3.3: Elektrisitet og strømkretser
// LK20: Forklare hvordan energi kan overføres og omformes
// ============================================================================

export const CHAPTER_NAT10_3_3: TextbookChapter = {
  id: 'naturfag-10-3-3',
  courseId: 'naturfag-10',
  chapterNumber: '3.3',
  title: 'Elektrisitet og strømkretser',
  description: 'Lær om elektrisk strøm, spenning, motstand og strømkretser.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare hvordan energi kan overføres og omformes',
    'utforske og beskrive hvordan elektrisk energi produseres og distribueres',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'nat10-3-3-intro',
      type: 'text',
      content: `## Elektrisitet og strømkretser

Du slår på lyset. Du lader mobilen. Du spiller på datamaskinen. Alt dette krever **elektrisitet**.

Men hva er egentlig elektrisitet? Hvordan får vi strømmen til å gå gjennom ledningene? Og hvorfor blir ting varme når det går strøm gjennom dem?

I dette kapitlet lærer du:
- Hva elektrisitet er og hvordan den beveger seg
- De tre viktigste størrelsene: strøm, spenning og motstand
- Ohms lov – den viktigste sammenhengen i elektrisitet
- Hvordan strømkretser fungerer
- Serie- og parallellkobling
- Sikkerhet rundt elektrisitet`,
    },

    // ========== HVA ER ELEKTRISITET? ==========
    {
      id: 'nat10-3-3-hva-er-elektrisitet',
      type: 'text',
      content: `## Hva er elektrisitet?

**Elektrisitet** er bevegelse av **elektrisk ladning**.

### Elektroner og ladning

Alt stoff består av atomer. Atomene består av:
- **Protoner** (positive ladninger, i kjernen)
- **Nøytroner** (ingen ladning, i kjernen)
- **Elektroner** (negative ladninger, beveger seg rundt kjernen)

Normalt er et atom nøytralt – like mange protoner som elektroner.

Men **elektroner kan bevege seg** fra atom til atom. Når elektroner beveger seg gjennom en leder (som en kobbertråd), har vi **elektrisk strøm**.

### Strøm = bevegelse av elektroner

Tenk på elektrisk strøm som et elveleie:
- **Elveleiet** = ledningen (kobbertråd)
- **Vannet** = elektronene
- **Vannets bevegelse** = elektrisk strøm

Jo flere elektroner som beveger seg per sekund, jo sterkere er strømmen.`,
    },

    // ========== DEFINISJON: ELEKTRISITET ==========
    {
      id: 'nat10-3-3-def-elektrisitet',
      type: 'definition',
      title: 'Elektrisitet',
      content: `**Elektrisitet:** Bevegelse av elektrisk ladning (vanligvis elektroner) gjennom en leder.

**Viktige begreper:**
- **Elektron:** Negativt ladet partikkel som kan bevege seg
- **Leder:** Stoff som lar elektroner bevege seg lett (f.eks. metaller)
- **Isolator:** Stoff som stopper elektronenes bevegelse (f.eks. plast, gummi)`,
    },

    // ========== STRØM (I) ==========
    {
      id: 'nat10-3-3-strom',
      type: 'text',
      content: `## Strøm (I)

**Strøm** måler hvor mye elektrisk ladning som passerer et punkt per tidsenhet.

### Definisjon av strøm

**Strøm (I)** er mengden ladning (Q) som passerer per tid (t):

$$I = \\frac{Q}{t}$$

**Enhet:**
- **Ampere (A)**
- Oppkalt etter André-Marie Ampère

**Typiske strømstyrker:**
- Lommelykt: 0.5 A
- Mobiltelefon (lading): 1-2 A
- Hårtørker: 10 A
- Sikring i hus: 10-16 A

### Hva betyr høy strøm?

- **Høy strøm (mange ampere):** Mange elektroner beveger seg raskt
- **Lav strøm (få ampere):** Få elektroner beveger seg

**Viktig:** Selv lav strøm kan være farlig hvis den går gjennom kroppen!`,
    },

    // ========== DEFINISJON: STRØM ==========
    {
      id: 'nat10-3-3-def-strom',
      type: 'definition',
      title: 'Strøm (I)',
      content: `**Strøm (I):** Mengden elektrisk ladning som passerer et punkt per tidsenhet.

**Formel:**
$$I = \\frac{Q}{t}$$

**Enhet:** Ampere (A)

**Huskeregel:** Strøm er som "strømmen" i en elv – hvor mye som flyter forbi per sekund.`,
    },

    // ========== SPENNING (U) ==========
    {
      id: 'nat10-3-3-spenning',
      type: 'text',
      content: `## Spenning (U)

**Spenning** er "trykket" som driver elektronene gjennom ledningen.

### Hva er spenning?

Tenk på spenning som vanntrykket i et rør:
- **Høyt trykk** → vannet strømmer fort
- **Lavt trykk** → vannet strømmer sakte

På samme måte:
- **Høy spenning** → elektronene drives hardt
- **Lav spenning** → elektronene drives svakt

### Definisjon

**Spenning (U)** er energien per ladningsenhet:

$$U = \\frac{E}{Q}$$

**Enhet:**
- **Volt (V)**
- Oppkalt etter Alessandro Volta

**Typiske spenninger:**
- Batterier (AA): 1.5 V
- Mobiltelefon (batteri): 3.7 V
- USB-lader: 5 V
- Stikkontakt (Norge): 230 V
- Høyspentledninger: 22 000 - 420 000 V

### Spenningsforskjell

Spenning er alltid en **forskjell** mellom to punkter:
- Vi snakker om spenning **over** en komponent
- F.eks. "spenningen over lyspæren er 5 V"`,
    },

    // ========== DEFINISJON: SPENNING ==========
    {
      id: 'nat10-3-3-def-spenning',
      type: 'definition',
      title: 'Spenning (U)',
      content: `**Spenning (U):** "Trykket" som driver elektronene gjennom ledningen. Energien per ladningsenhet.

**Formel:**
$$U = \\frac{E}{Q}$$

**Enhet:** Volt (V)

**Huskeregel:** Spenning er som vanntrykket i en slange – jo høyere trykk, jo kraftigere strøm.`,
    },

    // ========== MOTSTAND (R) ==========
    {
      id: 'nat10-3-3-motstand',
      type: 'text',
      content: `## Motstand (R)

**Motstand** bremser elektronenes bevegelse.

### Hva er motstand?

Når elektronene beveger seg gjennom en leder, kolliderer de med atomene i materialet. Dette bremser elektronene.

Tenk på motstand som friksjon:
- **Lav motstand** = glatt overflate (lett å gli)
- **Høy motstand** = ru overflate (vanskelig å gli)

### Definisjon

**Motstand (R)** måler hvor mye en komponent bremser strømmen.

**Enhet:**
- **Ohm (Ω)** (gresk bokstav omega)
- Oppkalt etter Georg Ohm

**Typiske motstandsverdier:**
- Kobberledning: 0.001 Ω (veldig lav)
- Lyspære: 100-500 Ω
- Varmeelement: 10-50 Ω
- Isolator: Millioner av ohm

### Hva påvirker motstanden?

**1. Materiale:**
- Metaller: Lav motstand (gode ledere)
- Plast, gummi: Høy motstand (isolatorer)

**2. Lengde:**
- Lang ledning: Høy motstand
- Kort ledning: Lav motstand

**3. Tykkelse (tverrsnitt):**
- Tynn ledning: Høy motstand
- Tykk ledning: Lav motstand

**4. Temperatur:**
- Høyere temperatur: Høyere motstand (for metaller)`,
    },

    // ========== DEFINISJON: MOTSTAND ==========
    {
      id: 'nat10-3-3-def-motstand',
      type: 'definition',
      title: 'Motstand (R)',
      content: `**Motstand (R):** Måler hvor mye en komponent bremser den elektriske strømmen.

**Enhet:** Ohm (Ω)

**Huskeregel:** Motstand er som friksjon – jo høyere motstand, jo vanskeligere er det for strømmen å gå gjennom.

**Faktorer som påvirker:**
- Materiale, lengde, tykkelse, temperatur`,
    },

    // ========== OHMS LOV ==========
    {
      id: 'nat10-3-3-ohms-lov',
      type: 'text',
      content: `## Ohms lov

Den viktigste sammenhengen i elektrisitet!

### Ohms lov – formelen

$$U = R \\cdot I$$

**Der:**
- **U** = spenning (volt, V)
- **R** = motstand (ohm, Ω)
- **I** = strøm (ampere, A)

### Hva betyr Ohms lov?

**Spenning = Motstand × Strøm**

Ohms lov forteller oss:
- **Høyere spenning** → **mer strøm** (hvis motstanden er lik)
- **Høyere motstand** → **mindre strøm** (hvis spenningen er lik)

### Omskriving av formelen

Du kan skrive Ohms lov på tre måter:

**1. Finn spenningen:**
$$U = R \\cdot I$$

**2. Finn strømmen:**
$$I = \\frac{U}{R}$$

**3. Finn motstanden:**
$$R = \\frac{U}{I}$$

### Huskeregel (UIR-trekanten)

Tegn en trekant med U øverst, R og I nederst:

\`\`\`
    U
   ----
   R  I
\`\`\`

- For å finne **U**: Dekk til U → U = R × I
- For å finne **I**: Dekk til I → I = U / R
- For å finne **R**: Dekk til R → R = U / I`,
    },

    // ========== DEFINISJON: OHMS LOV ==========
    {
      id: 'nat10-3-3-def-ohms-lov',
      type: 'definition',
      title: 'Ohms lov',
      content: `**Ohms lov:** Sammenhengen mellom spenning, motstand og strøm.

**Formel:**
$$U = R \\cdot I$$

**Der:**
- U = spenning (V)
- R = motstand (Ω)
- I = strøm (A)

**Andre former:**
- $I = \\frac{U}{R}$
- $R = \\frac{U}{I}$`,
    },

    // ========== EKSEMPEL: OHMS LOV ==========
    {
      id: 'nat10-3-3-ex-ohms-lov',
      type: 'example',
      title: 'Eksempel: Bruke Ohms lov',
      problem: `En lyspære er koblet til en 12 V strømkilde. Motstanden i lyspæren er 6 Ω.

Hvor stor er strømmen som går gjennom lyspæren?`,
      solution: `**Gitt:**
- Spenning: U = 12 V
- Motstand: R = 6 Ω
- Strøm: I = ?

**Formel:**

Vi bruker Ohms lov for å finne strømmen:

$$I = \\frac{U}{R}$$

**Utregning:**

$$I = \\frac{12 \\text{ V}}{6 \\text{ Ω}} = 2 \\text{ A}$$

**Svar:**

Strømmen som går gjennom lyspæren er **2 A**.

**Kontroll:**

La oss sjekke med den vanlige formen av Ohms lov:

$$U = R \\cdot I = 6 \\text{ Ω} \\cdot 2 \\text{ A} = 12 \\text{ V}$$ ✓

Det stemmer!`,
    },

    // ========== STRØMKRETSER ==========
    {
      id: 'nat10-3-3-stromkretser',
      type: 'text',
      content: `## Strømkretser

En **strømkrets** er en lukket bane som strømmen kan gå gjennom.

### Deler av en strømkrets

En enkel strømkrets består av:

**1. Strømkilde:**
- Gir energi til elektronene
- Eksempler: Batteri, stikkontakt

**2. Leder:**
- Lar strømmen gå gjennom
- Eksempler: Kobberledninger

**3. Forbruker (komponent):**
- Bruker elektrisk energi
- Eksempler: Lyspære, motor, varmeelement

**4. Bryter:**
- Kan åpne eller lukke kretsen
- Slår strømmen av og på

### Lukket vs. åpen krets

**Lukket krets:**
- Bryteren er på (lukket)
- Strømmen kan gå hele veien rundt
- Lampen lyser

**Åpen krets:**
- Bryteren er av (åpen)
- Strømmen kan ikke gå gjennom
- Lampen lyser ikke

### Enkel strømkrets

\`\`\`
 Batteri (+) → Leder → Bryter → Lyspære → Leder → Batteri (-)
\`\`\`

Strømmen går fra pluss til minus (teknisk strømretning).

**Viktig:**
- Strømmen må ha en **lukket bane** for å gå
- Hvis det er et brudd i kretsen, stopper strømmen`,
    },

    // ========== DEFINISJON: STRØMKRETS ==========
    {
      id: 'nat10-3-3-def-stromkrets',
      type: 'definition',
      title: 'Strømkrets',
      content: `**Strømkrets:** En lukket bane som strømmen kan gå gjennom.

**Deler:**
- **Strømkilde:** Gir energi (batteri, stikkontakt)
- **Leder:** Leder strømmen (kobberledninger)
- **Forbruker:** Bruker energi (lyspære, motor)
- **Bryter:** Åpner/lukker kretsen

**Regel:** Strømmen krever en lukket bane!`,
    },

    // ========== SERIEKOBLING ==========
    {
      id: 'nat10-3-3-seriekobling',
      type: 'text',
      content: `## Seriekobling

**Seriekobling** betyr at komponentene er koblet på rekke – strømmen går gjennom én komponent om gangen.

### Hvordan ser det ut?

\`\`\`
Batteri → Lampe 1 → Lampe 2 → Lampe 3 → Batteri
\`\`\`

Alle komponenter er på samme "sti".

### Egenskaper ved seriekobling

**1. Strømmen er lik overalt:**

$$I_{total} = I_1 = I_2 = I_3$$

Den samme strømmen går gjennom alle komponenter.

**2. Spenningen fordeles:**

$$U_{total} = U_1 + U_2 + U_3$$

Spenningen fra batteriet fordeles på komponentene.

**3. Motstandene legges sammen:**

$$R_{total} = R_1 + R_2 + R_3$$

Total motstand = summen av alle motstandene.

### Fordeler og ulemper

**Fordeler:**
- Enkel å bygge
- Bruker få ledninger

**Ulemper:**
- Hvis én lampe ryker, slukker alle (ingen strøm kan gå gjennom)
- Lampene blir svakere jo flere du kobler til (spenningen deles)

**Eksempel:**
Gamle julelys brukte seriekobling – hvis én pære røyk, slukket hele lyset!`,
    },

    // ========== DEFINISJON: SERIEKOBLING ==========
    {
      id: 'nat10-3-3-def-seriekobling',
      type: 'definition',
      title: 'Seriekobling',
      content: `**Seriekobling:** Komponenter koblet på rekke, slik at strømmen går gjennom dem én etter én.

**Regler:**
- **Strøm:** $I_{total} = I_1 = I_2 = I_3$ (lik overalt)
- **Spenning:** $U_{total} = U_1 + U_2 + U_3$ (fordeles)
- **Motstand:** $R_{total} = R_1 + R_2 + R_3$ (summeres)

**Ulempe:** Hvis én komponent ryker, stopper alt.`,
    },

    // ========== PARALLELLKOBLING ==========
    {
      id: 'nat10-3-3-parallellkobling',
      type: 'text',
      content: `## Parallellkobling

**Parallellkobling** betyr at komponentene er koblet side om side – hver komponent har sin egen sti til batteriet.

### Hvordan ser det ut?

\`\`\`
        ┌→ Lampe 1 →┐
Batteri ├→ Lampe 2 →┤ Batteri
        └→ Lampe 3 →┘
\`\`\`

Hver komponent har sin egen "sti" fra + til -.

### Egenskaper ved parallellkobling

**1. Spenningen er lik overalt:**

$$U_{total} = U_1 = U_2 = U_3$$

Alle komponenter får samme spenning som batteriet.

**2. Strømmen deles:**

$$I_{total} = I_1 + I_2 + I_3$$

Total strøm = summen av strømmene gjennom hver komponent.

**3. Motstandene:**

$$\\frac{1}{R_{total}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}$$

Total motstand blir **lavere** enn den minste enkeltmotstanden.

### Fordeler og ulemper

**Fordeler:**
- Hvis én lampe ryker, fungerer de andre fortsatt (hver har sin egen sti)
- Alle komponenter får full spenning (like lyssterk)

**Ulemper:**
- Bruker mer ledninger
- Trekker mer strøm fra batteriet

**Eksempel:**
Hjemme er alle stikkontakter koblet parallelt – hvis én lyspære ryker, fungerer de andre fortsatt!`,
    },

    // ========== DEFINISJON: PARALLELLKOBLING ==========
    {
      id: 'nat10-3-3-def-parallellkobling',
      type: 'definition',
      title: 'Parallellkobling',
      content: `**Parallellkobling:** Komponenter koblet side om side, slik at hver komponent har sin egen sti.

**Regler:**
- **Spenning:** $U_{total} = U_1 = U_2 = U_3$ (lik overalt)
- **Strøm:** $I_{total} = I_1 + I_2 + I_3$ (deles)
- **Motstand:** $\\frac{1}{R_{total}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}$

**Fordel:** Hvis én komponent ryker, fungerer de andre.`,
    },

    // ========== SIKKERHET ==========
    {
      id: 'nat10-3-3-sikkerhet',
      type: 'text',
      content: `## Sikkerhet rundt elektrisitet

Elektrisitet er nyttig, men kan være **farlig**!

### Farer ved elektrisitet

**1. Elektrisk støt:**
- Strøm som går gjennom kroppen
- Kan gi muskelkramper, brannskader, hjertestans
- Selv små strømmer (50 mA) kan være dødelige

**2. Brann:**
- Overoppheting i ledninger
- Kortslutning
- Gnister

**3. Eksplosjon:**
- Gnister kan antenne gass eller damp
- Lysbuer fra høyspenning

### Sikring (sikkerhetssystem)

**Sikring** er en "svak lenke" i strømkretsen som brenner av hvis strømmen blir for høy.

**Hvordan fungerer det:**
1. For høy strøm → ledningen i sikringen blir varm
2. Ledningen smelter → kretsen åpnes
3. Strømmen stopper → brannen unngås

**Automatisk sikring (automatsikring):**
- Bryter automatisk hvis strømmen blir for høy
- Kan slås på igjen etter problemet er løst
- Brukes i moderne hus

**Typiske sikringer i hus:**
- 10 A – belysning
- 16 A – stikkontakter
- 20 A – komfyr, oppvaskmaskin

### Jording

**Jording** kobler metalldelene av elektriske apparater til jorda.

**Hvorfor?**
- Hvis det blir en feil i apparatet, går strømmen til jorda i stedet for gjennom deg
- Beskytter mot elektrisk støt

**Jordingskontakt:**
- Den tredje pinnen på stikkontakten
- Kobler metalldelene til jord

### Sikkerhetsregler

**Aldri:**
- Stikk fingrene i stikkontakten
- Bruk elektriske apparater med våte hender
- Bruk ødelagte ledninger eller apparater
- Åpne elektriske apparater uten kunnskap
- Rør ved høyspentledninger eller transformatorer

**Alltid:**
- Bruk apparater riktig
- Tørk av vann før du bruker elektrisitet
- Sjekk ledninger for skader
- Koble fra strømmen før reparasjon

**Hvis noen får støt:**
1. **Ikke rør personen!** (du kan få støt selv)
2. Slå av strømmen (på automatsikring eller trekk ut støpselet)
3. Ring 113
4. Start hjerte-lunge-redning hvis nødvendig`,
    },

    // ========== DEFINISJON: SIKRING ==========
    {
      id: 'nat10-3-3-def-sikring',
      type: 'definition',
      title: 'Sikring',
      content: `**Sikring:** En sikkerhetsenhet som bryter strømmen hvis den blir for høy.

**Hvordan det fungerer:**
- Sikringen inneholder en tynn ledning
- Hvis strømmen blir for høy, smelter ledningen
- Kretsen åpnes → strømmen stopper → brann unngås

**Typer:**
- **Gamle sikringer:** Må byttes etter de har gått
- **Automatsikring:** Kan slås på igjen`,
    },

    // ========== EKSEMPEL: SERIEKOBLING BEREGNING ==========
    {
      id: 'nat10-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Beregne verdier i seriekobling',
      problem: `Tre motstander er koblet i serie til et 15 V batteri:
- R₁ = 2 Ω
- R₂ = 3 Ω
- R₃ = 5 Ω

Finn total motstand, strøm og spenning over hver motstand.`,
      solution: `**1. Total motstand (seriekobling):**

$$R_{total} = R_1 + R_2 + R_3 = 2 + 3 + 5 = 10 \\text{ Ω}$$

---

**2. Strøm (lik overalt i serie):**

$$I = \\frac{U}{R_{total}} = \\frac{15 \\text{ V}}{10 \\text{ Ω}} = 1,5 \\text{ A}$$

---

**3. Spenning over hver motstand:**

$$U_1 = R_1 \\cdot I = 2 \\cdot 1,5 = 3 \\text{ V}$$

$$U_2 = R_2 \\cdot I = 3 \\cdot 1,5 = 4,5 \\text{ V}$$

$$U_3 = R_3 \\cdot I = 5 \\cdot 1,5 = 7,5 \\text{ V}$$

---

**Kontroll:**
$$U_1 + U_2 + U_3 = 3 + 4,5 + 7,5 = 15 \\text{ V}$$ ✓

**Oppsummering:**
| Komponent | Motstand | Strøm | Spenning |
|-----------|----------|-------|----------|
| R₁ | 2 Ω | 1,5 A | 3 V |
| R₂ | 3 Ω | 1,5 A | 4,5 V |
| R₃ | 5 Ω | 1,5 A | 7,5 V |
| **Total** | **10 Ω** | **1,5 A** | **15 V** |`,
    },

    // ========== EKSEMPEL: PARALLELLKOBLING BEREGNING ==========
    {
      id: 'nat10-3-3-example-2',
      type: 'example',
      title: 'Eksempel: Beregne verdier i parallellkobling',
      problem: `To motstander er koblet parallelt til et 12 V batteri:
- R₁ = 4 Ω
- R₂ = 12 Ω

Finn total motstand, strøm gjennom hver motstand, og total strøm.`,
      solution: `**1. Total motstand (parallellkobling):**

$$\\frac{1}{R_{total}} = \\frac{1}{R_1} + \\frac{1}{R_2} = \\frac{1}{4} + \\frac{1}{12} = \\frac{3}{12} + \\frac{1}{12} = \\frac{4}{12} = \\frac{1}{3}$$

$$R_{total} = 3 \\text{ Ω}$$

**Merk:** Total motstand (3 Ω) er lavere enn den minste enkeltmotstanden (4 Ω). Dette stemmer alltid for parallellkobling!

---

**2. Spenning (lik overalt i parallell):**

$$U_1 = U_2 = U_{total} = 12 \\text{ V}$$

---

**3. Strøm gjennom hver motstand:**

$$I_1 = \\frac{U}{R_1} = \\frac{12}{4} = 3 \\text{ A}$$

$$I_2 = \\frac{U}{R_2} = \\frac{12}{12} = 1 \\text{ A}$$

---

**4. Total strøm:**

$$I_{total} = I_1 + I_2 = 3 + 1 = 4 \\text{ A}$$

---

**Kontroll med total motstand:**
$$I_{total} = \\frac{U}{R_{total}} = \\frac{12}{3} = 4 \\text{ A}$$ ✓

**Oppsummering:**
- Mest strøm går gjennom den minste motstanden (R₁ = 4 Ω → 3 A)
- Minst strøm gjennom den største motstanden (R₂ = 12 Ω → 1 A)`,
    },

    // ========== EKSEMPEL: EFFEKT I STRØMKRETS ==========
    {
      id: 'nat10-3-3-example-3',
      type: 'example',
      title: 'Eksempel: Beregne effekt og energi',
      problem: `En elektrisk varmeovn er koblet til 230 V og trekker 10 A.

a) Hva er effekten til varmeovnen?
b) Hva er motstanden i varmeelementet?
c) Hvor mye energi bruker ovnen på 3 timer (i kWh)?
d) Hva koster det hvis strømprisen er 1,50 kr/kWh?`,
      solution: `**a) Effekt:**

$$P = U \\cdot I = 230 \\text{ V} \\cdot 10 \\text{ A} = 2300 \\text{ W} = 2,3 \\text{ kW}$$

---

**b) Motstand:**

$$R = \\frac{U}{I} = \\frac{230}{10} = 23 \\text{ Ω}$$

---

**c) Energi på 3 timer:**

$$E = P \\cdot t = 2,3 \\text{ kW} \\cdot 3 \\text{ h} = 6,9 \\text{ kWh}$$

---

**d) Kostnad:**

$$\\text{Kostnad} = 6,9 \\text{ kWh} \\cdot 1,50 \\text{ kr/kWh} = 10,35 \\text{ kr}$$

**Oppsummering:**
- Effekt: 2300 W (2,3 kW)
- Motstand: 23 Ω
- Energi på 3 timer: 6,9 kWh
- Kostnad: 10,35 kr

**Tips:** En varmeovn på 2300 W bruker mye strøm! Over en hel dag (24 timer) ville den kostet ca. 83 kr.`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE - STRØM ==========
    {
      id: 'nat10-3-3-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-3-ex-1',
        number: '3.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva måler strøm (I)?',
        options: [
          {
            id: 'a',
            text: 'Mengden ladning som passerer per tid',
            isCorrect: true,
            feedback: 'Riktig! Strøm (I) måler hvor mye elektrisk ladning som passerer et punkt per tidsenhet. Enhet: Ampere (A).',
          },
          {
            id: 'b',
            text: 'Trykket som driver strømmen',
            isCorrect: false,
            feedback: 'Feil. Dette er spenning (U), ikke strøm.',
          },
          {
            id: 'c',
            text: 'Motstanden mot strømmen',
            isCorrect: false,
            feedback: 'Feil. Dette er motstand (R), ikke strøm.',
          },
          {
            id: 'd',
            text: 'Energien i kretsen',
            isCorrect: false,
            feedback: 'Feil. Strøm måler ladning per tid, ikke energi.',
          },
        ],
        solution: 'Alternativ A er riktig. Strøm (I) = mengde ladning som passerer per tid. Enhet: Ampere (A).',
      },
    },

    // ========== OPPGAVE 2: MULTIPLE CHOICE - OHMS LOV ==========
    {
      id: 'nat10-3-3-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-3-ex-2',
        number: '3.3.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er Ohms lov?',
        options: [
          {
            id: 'a',
            text: 'U = R · I',
            isCorrect: true,
            feedback: 'Riktig! Ohms lov sier at spenning = motstand × strøm. U = R · I.',
          },
          {
            id: 'b',
            text: 'U = R + I',
            isCorrect: false,
            feedback: 'Feil. Størrelsene multipliseres, ikke adderes.',
          },
          {
            id: 'c',
            text: 'I = U · R',
            isCorrect: false,
            feedback: 'Feil. Riktig formel er I = U / R, ikke U · R.',
          },
          {
            id: 'd',
            text: 'R = U · I',
            isCorrect: false,
            feedback: 'Feil. Riktig formel er R = U / I, ikke U · I.',
          },
        ],
        solution: 'Alternativ A er riktig. Ohms lov: U = R · I. Spenning = Motstand × Strøm.',
      },
    },

    // ========== OPPGAVE 3: MULTIPLE CHOICE - SERIEKOBLING ==========
    {
      id: 'nat10-3-3-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-3-ex-3',
        number: '3.3.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva skjer i en seriekobling hvis én lyspære ryker?',
        options: [
          {
            id: 'a',
            text: 'Alle lampene slukker',
            isCorrect: true,
            feedback: 'Riktig! I seriekobling går strømmen gjennom alle komponenter. Hvis én ryker, brytes kretsen og alle slukker.',
          },
          {
            id: 'b',
            text: 'De andre lampene lyser videre',
            isCorrect: false,
            feedback: 'Feil. Dette gjelder parallellkobling, ikke seriekobling.',
          },
          {
            id: 'c',
            text: 'Lampene lyser sterkere',
            isCorrect: false,
            feedback: 'Feil. Når én lampe ryker i seriekobling, slukker alle.',
          },
          {
            id: 'd',
            text: 'Ingenting skjer',
            isCorrect: false,
            feedback: 'Feil. Når én komponent i seriekobling ryker, stopper strømmen.',
          },
        ],
        solution: 'Alternativ A er riktig. I seriekobling går strømmen gjennom alle komponenter på rekke. Hvis én ryker, brytes kretsen og alle slukker.',
      },
    },

    // ========== OPPGAVE 4: OHMS LOV - FINN STRØM ==========
    {
      id: 'nat10-3-3-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-3-ex-4',
        number: '3.3.4',
        type: 'classic',
        difficulty: 'medium',
        task: `En lyspære er koblet til en strømkilde på 9 V. Motstanden i lyspæren er 3 Ω.

a) Hvor stor er strømmen som går gjennom lyspæren?
b) Hva skjer med strømmen hvis spenningen økes til 18 V?`,
        multipleChoiceOptions: [
          'a) 3 A, b) Strømmen dobles til 6 A',
          'a) 27 A, b) Strømmen dobles til 54 A',
          'a) 0,33 A, b) Strømmen halveres til 0,17 A',
          'a) 12 A, b) Strømmen halveres til 6 A',
        ],
        solution: `**a) Finn strømmen:**

**Gitt:**
- Spenning: U = 9 V
- Motstand: R = 3 Ω
- Strøm: I = ?

**Formel:**

Vi bruker Ohms lov:

$$I = \\frac{U}{R}$$

**Utregning:**

$$I = \\frac{9 \\text{ V}}{3 \\text{ Ω}} = 3 \\text{ A}$$

**Svar:** Strømmen er **3 A**.

---

**b) Hva skjer hvis spenningen økes til 18 V:**

**Gitt:**
- Ny spenning: U = 18 V
- Motstand: R = 3 Ω (samme)
- Ny strøm: I = ?

**Utregning:**

$$I = \\frac{18 \\text{ V}}{3 \\text{ Ω}} = 6 \\text{ A}$$

**Svar:** Strømmen **dobles** til **6 A**.

**Forklaring:**
- Når spenningen dobles (fra 9 V til 18 V), dobles strømmen (fra 3 A til 6 A)
- Dette følger av Ohms lov: I = U / R
- Hvis U øker, øker I proporsjonalt (når R er konstant)`,
      },
    },

    // ========== OPPGAVE 5: OHMS LOV - FINN MOTSTAND ==========
    {
      id: 'nat10-3-3-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-3-ex-5',
        number: '3.3.5',
        type: 'classic',
        difficulty: 'medium',
        task: `En motor er koblet til en 12 V strømkilde. Det går en strøm på 4 A gjennom motoren.

a) Hvor stor er motstanden i motoren?
b) Hvis motstanden hadde vært 6 Ω i stedet, hvor stor ville strømmen vært?`,
        multipleChoiceOptions: [
          'a) 3 Ω, b) 2 A',
          'a) 48 Ω, b) 0,25 A',
          'a) 0,33 Ω, b) 36 A',
          'a) 8 Ω, b) 1,5 A',
        ],
        solution: `**a) Finn motstanden:**

**Gitt:**
- Spenning: U = 12 V
- Strøm: I = 4 A
- Motstand: R = ?

**Formel:**

Vi bruker Ohms lov:

$$R = \\frac{U}{I}$$

**Utregning:**

$$R = \\frac{12 \\text{ V}}{4 \\text{ A}} = 3 \\text{ Ω}$$

**Svar:** Motstanden er **3 Ω**.

---

**b) Hvis R = 6 Ω:**

**Gitt:**
- Spenning: U = 12 V (samme)
- Motstand: R = 6 Ω (ny)
- Strøm: I = ?

**Utregning:**

$$I = \\frac{U}{R} = \\frac{12 \\text{ V}}{6 \\text{ Ω}} = 2 \\text{ A}$$

**Svar:** Strømmen ville vært **2 A**.

**Forklaring:**
- Når motstanden dobles (fra 3 Ω til 6 Ω), halveres strømmen (fra 4 A til 2 A)
- Dette følger av Ohms lov: I = U / R
- Høyere motstand → mindre strøm (når U er konstant)`,
      },
    },

    // ========== OPPGAVE 6: OHMS LOV - FINN SPENNING ==========
    {
      id: 'nat10-3-3-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-3-ex-6',
        number: '3.3.6',
        type: 'classic',
        difficulty: 'medium',
        task: `Et varmeelement har motstand på 10 Ω. Det går en strøm på 5 A gjennom elementet.

a) Hvor stor spenning må strømkilden ha?
b) Hvis strømmen økes til 10 A, hva blir spenningen da?`,
        multipleChoiceOptions: [
          'a) 50 V, b) 100 V',
          'a) 2 V, b) 1 V',
          'a) 15 V, b) 20 V',
          'a) 0,5 V, b) 1 V',
        ],
        solution: `**a) Finn spenningen:**

**Gitt:**
- Motstand: R = 10 Ω
- Strøm: I = 5 A
- Spenning: U = ?

**Formel:**

Vi bruker Ohms lov:

$$U = R \\cdot I$$

**Utregning:**

$$U = 10 \\text{ Ω} \\cdot 5 \\text{ A} = 50 \\text{ V}$$

**Svar:** Spenningen må være **50 V**.

---

**b) Hvis I = 10 A:**

**Gitt:**
- Motstand: R = 10 Ω (samme)
- Strøm: I = 10 A (ny)
- Spenning: U = ?

**Utregning:**

$$U = R \\cdot I = 10 \\text{ Ω} \\cdot 10 \\text{ A} = 100 \\text{ V}$$

**Svar:** Spenningen blir **100 V**.

**Forklaring:**
- Når strømmen dobles (fra 5 A til 10 A), må spenningen også dobles (fra 50 V til 100 V)
- Dette følger av Ohms lov: U = R · I
- For å få mer strøm gjennom samme motstand, trenger vi høyere spenning`,
      },
    },

    // ========== OPPGAVE 7: OHMS LOV - KOMBINERT ==========
    {
      id: 'nat10-3-3-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-3-ex-7',
        number: '3.3.7',
        type: 'classic',
        difficulty: 'medium',
        task: `Du har en strømkrets med følgende verdier:
- Spenning: 24 V
- Strøm: 3 A

a) Finn motstanden i kretsen.
b) Hvis du bytter til en komponent med dobbelt så høy motstand, hva blir strømmen?
c) Hvilken spenning må du ha for å få 3 A gjennom den nye komponenten?`,
        multipleChoiceOptions: [
          'a) 8 Ω, b) 1,5 A, c) 48 V',
          'a) 72 Ω, b) 0,17 A, c) 432 V',
          'a) 0,125 Ω, b) 96 A, c) 0,75 V',
          'a) 21 Ω, b) 0,57 A, c) 126 V',
        ],
        solution: `**a) Finn motstanden:**

**Gitt:**
- Spenning: U = 24 V
- Strøm: I = 3 A
- Motstand: R = ?

**Formel:**

$$R = \\frac{U}{I}$$

**Utregning:**

$$R = \\frac{24 \\text{ V}}{3 \\text{ A}} = 8 \\text{ Ω}$$

**Svar:** Motstanden er **8 Ω**.

---

**b) Ny motstand (dobbelt):**

**Gitt:**
- Spenning: U = 24 V (samme)
- Ny motstand: R = 2 × 8 Ω = 16 Ω
- Strøm: I = ?

**Utregning:**

$$I = \\frac{U}{R} = \\frac{24 \\text{ V}}{16 \\text{ Ω}} = 1.5 \\text{ A}$$

**Svar:** Strømmen blir **1.5 A** (halvparten av original).

---

**c) Spenning for 3 A med ny motstand:**

**Gitt:**
- Motstand: R = 16 Ω
- Strøm: I = 3 A (ønsket)
- Spenning: U = ?

**Utregning:**

$$U = R \\cdot I = 16 \\text{ Ω} \\cdot 3 \\text{ A} = 48 \\text{ V}$$

**Svar:** Du må ha **48 V** (dobbelt så høy spenning).

**Oppsummering:**
- Original: 24 V, 8 Ω → 3 A
- Dobbel motstand: 24 V, 16 Ω → 1.5 A (halvparten)
- For 3 A med 16 Ω: 48 V, 16 Ω → 3 A`,
      },
    },

    // ========== OPPGAVE 8: OHMS LOV - PRAKTISK ==========
    {
      id: 'nat10-3-3-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-3-ex-8',
        number: '3.3.8',
        type: 'classic',
        difficulty: 'medium',
        task: `En mobiltelefon lades med en USB-lader som gir 5 V. Mobilen trekker 2 A under lading.

a) Hvor stor er motstanden i mobilens ladekomponent?
b) Hvor mye energi (effekt) bruker mobilen under lading? (Tips: Effekt P = U · I)
c) Hvis du lader mobilen i 2 timer, hvor mye energi (i Wh) brukes?`,
        multipleChoiceOptions: [
          'a) 2,5 Ω, b) 10 W, c) 20 Wh',
          'a) 10 Ω, b) 2,5 W, c) 5 Wh',
          'a) 0,4 Ω, b) 50 W, c) 100 Wh',
          'a) 7 Ω, b) 1,4 W, c) 2,8 Wh',
        ],
        solution: `**a) Finn motstanden:**

**Gitt:**
- Spenning: U = 5 V
- Strøm: I = 2 A
- Motstand: R = ?

**Formel:**

$$R = \\frac{U}{I}$$

**Utregning:**

$$R = \\frac{5 \\text{ V}}{2 \\text{ A}} = 2.5 \\text{ Ω}$$

**Svar:** Motstanden er **2.5 Ω**.

---

**b) Finn effekten:**

**Gitt:**
- Spenning: U = 5 V
- Strøm: I = 2 A
- Effekt: P = ?

**Formel:**

$$P = U \\cdot I$$

**Utregning:**

$$P = 5 \\text{ V} \\cdot 2 \\text{ A} = 10 \\text{ W}$$

**Svar:** Effekten er **10 W** (10 watt).

---

**c) Energi over 2 timer:**

**Gitt:**
- Effekt: P = 10 W
- Tid: t = 2 timer (h)
- Energi: E = ?

**Formel:**

$$E = P \\cdot t$$

**Utregning:**

$$E = 10 \\text{ W} \\cdot 2 \\text{ h} = 20 \\text{ Wh}$$

**Svar:** Energien er **20 Wh** (watt-timer).

**Forklaring:**
- Wh (watt-timer) er en energienhet
- 20 Wh = 0.02 kWh (kilowatt-timer)
- Dette er en veldig liten mengde energi (koster få øre på strømregningen)`,
      },
    },

    // ========== OPPGAVE 9: SERIEKOBLING ==========
    {
      id: 'nat10-3-3-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-3-ex-9',
        number: '3.3.9',
        type: 'classic',
        difficulty: 'medium',
        task: `Du har to motstander koblet i serie:
- R₁ = 4 Ω
- R₂ = 6 Ω

Kretsen er koblet til et 20 V batteri.

a) Hva er total motstand i kretsen?
b) Hvor stor er strømmen gjennom kretsen?
c) Hvor stor er spenningen over hver motstand?`,
        multipleChoiceOptions: [
          'a) 10 Ω, b) 2 A, c) U₁ = 8 V, U₂ = 12 V',
          'a) 24 Ω, b) 0,83 A, c) U₁ = 3,3 V, U₂ = 5 V',
          'a) 2,4 Ω, b) 8,3 A, c) U₁ = 33 V, U₂ = 50 V',
          'a) 10 Ω, b) 0,5 A, c) U₁ = 2 V, U₂ = 3 V',
        ],
        solution: `**a) Total motstand (seriekobling):**

**Gitt:**
- R₁ = 4 Ω
- R₂ = 6 Ω

**Formel (seriekobling):**

$$R_{total} = R_1 + R_2$$

**Utregning:**

$$R_{total} = 4 \\text{ Ω} + 6 \\text{ Ω} = 10 \\text{ Ω}$$

**Svar:** Total motstand er **10 Ω**.

---

**b) Finn strømmen:**

**Gitt:**
- Spenning: U = 20 V
- Total motstand: R = 10 Ω
- Strøm: I = ?

**Formel:**

$$I = \\frac{U}{R}$$

**Utregning:**

$$I = \\frac{20 \\text{ V}}{10 \\text{ Ω}} = 2 \\text{ A}$$

**Svar:** Strømmen er **2 A**.

**Viktig:** I seriekobling er strømmen lik overalt – 2 A går gjennom begge motstandene.

---

**c) Spenning over hver motstand:**

**For R₁:**

$$U_1 = R_1 \\cdot I = 4 \\text{ Ω} \\cdot 2 \\text{ A} = 8 \\text{ V}$$

**For R₂:**

$$U_2 = R_2 \\cdot I = 6 \\text{ Ω} \\cdot 2 \\text{ A} = 12 \\text{ V}$$

**Svar:**
- Spenning over R₁: **8 V**
- Spenning over R₂: **12 V**

**Kontroll:**

$$U_1 + U_2 = 8 \\text{ V} + 12 \\text{ V} = 20 \\text{ V}$$ ✓

Total spenning stemmer!

**Oppsummering (seriekobling):**
- Total motstand: 10 Ω (summeres)
- Strøm: 2 A (lik overalt)
- Spenninger: 8 V + 12 V = 20 V (fordeles)`,
      },
    },

    // ========== OPPGAVE 10: PARALLELLKOBLING ==========
    {
      id: 'nat10-3-3-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-3-ex-10',
        number: '3.3.10',
        type: 'classic',
        difficulty: 'medium',
        task: `Du har to identiske lyspærer koblet parallelt til et 12 V batteri. Hver lyspære har motstand 6 Ω.

a) Hvor stor er spenningen over hver lyspære?
b) Hvor stor er strømmen gjennom hver lyspære?
c) Hvor stor er total strøm fra batteriet?
d) Hva skjer hvis én lyspære ryker?`,
        multipleChoiceOptions: [
          'a) 12 V, b) 2 A, c) 4 A, d) Den andre lyser fortsatt',
          'a) 6 V, b) 1 A, c) 2 A, d) Begge slukker',
          'a) 24 V, b) 4 A, c) 8 A, d) Den andre lyser sterkere',
          'a) 12 V, b) 0,5 A, c) 1 A, d) Sikringen går',
        ],
        solution: `**a) Spenning over hver lyspære:**

**I parallellkobling:** Alle komponenter får samme spenning som batteriet.

**Svar:** Hver lyspære får **12 V**.

---

**b) Strøm gjennom hver lyspære:**

**Gitt:**
- Spenning: U = 12 V
- Motstand: R = 6 Ω
- Strøm: I = ?

**Formel:**

$$I = \\frac{U}{R}$$

**Utregning:**

$$I = \\frac{12 \\text{ V}}{6 \\text{ Ω}} = 2 \\text{ A}$$

**Svar:** Det går **2 A** gjennom hver lyspære.

---

**c) Total strøm fra batteriet:**

**I parallellkobling:** Total strøm = summen av strømmene.

**Formel:**

$$I_{total} = I_1 + I_2$$

**Utregning:**

$$I_{total} = 2 \\text{ A} + 2 \\text{ A} = 4 \\text{ A}$$

**Svar:** Total strøm fra batteriet er **4 A**.

---

**d) Hvis én lyspære ryker:**

**Svar:**
- Den andre lyspæren **fortsetter å lyse**
- Den fungerende lyspæren får fortsatt 12 V
- Strømmen gjennom den fungerende lyspæren er fortsatt 2 A
- Total strøm fra batteriet blir 2 A (halvparten)

**Forklaring:**
I parallellkobling har hver komponent sin egen sti til batteriet. Hvis én komponent ryker, kan strømmen fortsatt gå gjennom de andre.

**Oppsummering (parallellkobling):**
- Spenning: 12 V over hver lyspære (lik)
- Strøm: 2 A gjennom hver lyspære
- Total strøm: 4 A (summeres)
- Fordel: Hvis én ryker, fungerer de andre`,
      },
    },

    // ========== OPPGAVE 11: KOMPLEKS KRETS ==========
    {
      id: 'nat10-3-3-ex-11-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-3-ex-11',
        number: '3.3.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Du bygger en strømkrets med et 18 V batteri og tre motstander:
- R₁ = 2 Ω (i serie med resten)
- R₂ = 4 Ω (parallelt med R₃)
- R₃ = 4 Ω (parallelt med R₂)

Kretsen ser slik ut:
Batteri → R₁ → (R₂ parallelt med R₃) → Batteri

a) Hva er total motstand for R₂ og R₃ som er parallelle?
b) Hva er total motstand i hele kretsen?
c) Hvor stor er strømmen fra batteriet?
d) Hvor stor er spenningen over R₁?`,
        multipleChoiceOptions: [
          'a) 2 Ω, b) 4 Ω, c) 4,5 A, d) 9 V',
          'a) 8 Ω, b) 10 Ω, c) 1,8 A, d) 3,6 V',
          'a) 0,5 Ω, b) 2,5 Ω, c) 7,2 A, d) 14,4 V',
          'a) 4 Ω, b) 6 Ω, c) 3 A, d) 6 V',
        ],
        solution: `**a) Total motstand for R₂ og R₃ (parallellkobling):**

**Gitt:**
- R₂ = 4 Ω
- R₃ = 4 Ω

**Formel (parallellkobling):**

$$\\frac{1}{R_{parallell}} = \\frac{1}{R_2} + \\frac{1}{R_3}$$

**Utregning:**

$$\\frac{1}{R_{parallell}} = \\frac{1}{4 \\text{ Ω}} + \\frac{1}{4 \\text{ Ω}} = \\frac{2}{4} = \\frac{1}{2}$$

$$R_{parallell} = 2 \\text{ Ω}$$

**Svar:** R₂ og R₃ parallelt gir **2 Ω**.

**Tips:** Når to like motstander kobles parallelt, blir total motstand halvparten (4 Ω → 2 Ω).

---

**b) Total motstand i hele kretsen:**

**Gitt:**
- R₁ = 2 Ω (i serie)
- R₂||R₃ = 2 Ω (parallell-delen)

**Formel (seriekobling):**

$$R_{total} = R_1 + R_{parallell}$$

**Utregning:**

$$R_{total} = 2 \\text{ Ω} + 2 \\text{ Ω} = 4 \\text{ Ω}$$

**Svar:** Total motstand er **4 Ω**.

---

**c) Strøm fra batteriet:**

**Gitt:**
- Spenning: U = 18 V
- Total motstand: R = 4 Ω
- Strøm: I = ?

**Formel:**

$$I = \\frac{U}{R}$$

**Utregning:**

$$I = \\frac{18 \\text{ V}}{4 \\text{ Ω}} = 4.5 \\text{ A}$$

**Svar:** Strømmen fra batteriet er **4.5 A**.

---

**d) Spenning over R₁:**

**Gitt:**
- Motstand: R₁ = 2 Ω
- Strøm: I = 4.5 A (samme gjennom R₁)

**Formel:**

$$U_1 = R_1 \\cdot I$$

**Utregning:**

$$U_1 = 2 \\text{ Ω} \\cdot 4.5 \\text{ A} = 9 \\text{ V}$$

**Svar:** Spenningen over R₁ er **9 V**.

**Ekstra:**
Spenningen over parallell-delen er:

$$U_{parallell} = 18 \\text{ V} - 9 \\text{ V} = 9 \\text{ V}$$

Strømmen deler seg likt (fordi R₂ = R₃):
- Gjennom R₂: 2.25 A
- Gjennom R₃: 2.25 A
- Sum: 4.5 A ✓

**Oppsummering:**
- Parallell-motstand: 2 Ω
- Total motstand: 4 Ω
- Total strøm: 4.5 A
- Spenning over R₁: 9 V`,
      },
    },

    // ========== OPPGAVE 12: SIKKERHET OG SIKRING ==========
    {
      id: 'nat10-3-3-ex-12-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-3-ex-12',
        number: '3.3.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En stikkontakt i huset ditt har 230 V spenning og er sikret med en 16 A sikring.

a) Hvor stor er maksimal effekt (P = U · I) som kan brukes før sikringen går?
b) Du plugger inn følgende apparater samtidig:
   - Støvsuger: 1500 W
   - Kaffekann: 1000 W
   - Mikrobølgeovn: 800 W

   Vil sikringen gå? Vis utregning.

c) Hvis du plugger inn en varmevifter på 2000 W i tillegg, hva skjer?
d) Hvorfor er det viktig med sikringer?`,
        multipleChoiceOptions: [
          'a) 3680 W, b) Nei (3300 W er under grensen), c) Ja, sikringen går (5300 W), d) Beskytter mot brann',
          'a) 3680 W, b) Ja (3300 W er over grensen), c) Nei, d) Sparer strøm',
          'a) 14,4 W, b) Nei, c) Nei, d) Måler strømforbruk',
          'a) 246 W, b) Ja, c) Ja, d) Reduserer støy',
        ],
        solution: `**a) Maksimal effekt før sikringen går:**

**Gitt:**
- Spenning: U = 230 V
- Maks strøm: I = 16 A (sikring)
- Maksimal effekt: P = ?

**Formel:**

$$P = U \\cdot I$$

**Utregning:**

$$P = 230 \\text{ V} \\cdot 16 \\text{ A} = 3680 \\text{ W}$$

**Svar:** Maksimal effekt er **3680 W** (ca. 3.7 kW).

---

**b) Tre apparater samtidig:**

**Gitt:**
- Støvsuger: 1500 W
- Kaffekann: 1000 W
- Mikrobølgeovn: 800 W

**Total effekt:**

$$P_{total} = 1500 + 1000 + 800 = 3300 \\text{ W}$$

**Finn strømmen:**

$$I = \\frac{P}{U} = \\frac{3300 \\text{ W}}{230 \\text{ V}} \\approx 14.3 \\text{ A}$$

**Svar:**
- Total strøm: **14.3 A**
- Maks strøm: 16 A
- **Sikringen går IKKE** (14.3 A < 16 A)

Du er innenfor grensen, men det er tett på!

---

**c) Med varmevifter i tillegg:**

**Total effekt:**

$$P_{total} = 3300 + 2000 = 5300 \\text{ W}$$

**Finn strømmen:**

$$I = \\frac{P}{U} = \\frac{5300 \\text{ W}}{230 \\text{ V}} \\approx 23 \\text{ A}$$

**Svar:**
- Total strøm: **23 A**
- Maks strøm: 16 A
- **Sikringen GÅR!** (23 A > 16 A)

Sikringen bryter kretsen fordi strømmen er for høy.

---

**d) Hvorfor er sikringer viktige:**

**Sikringen beskytter mot:**

1. **Brann:**
   - For høy strøm → ledninger blir varme
   - Varm ledning → brannfare
   - Sikringen stopper strømmen før det blir farlig

2. **Skade på elektriske apparater:**
   - Beskytter mot overbelastning

3. **Kortslutning:**
   - Hvis ledninger kommer i kontakt
   - Enormt høy strøm → sikringen stopper det umiddelbart

**Svar:**
Sikringer er livsviktige for å forhindre brann og beskytte både mennesker og utstyr.

**Oppsummering:**
- Maks effekt: 3680 W (16 A)
- Tre apparater: 3300 W → OK (14.3 A)
- Fire apparater: 5300 W → Sikringen går! (23 A)
- Sikringer beskytter mot brann`,
      },
    },
    // ========== OPPGAVE EXTRA 1: LEDERE OG ISOLATORER ==========
    {
      id: 'nat10-3-3-oppg-extra-1',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-3-oppg-extra-1',
        number: '3.3.13',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilke av følgende materialer er gode ledere av elektrisitet?',
        options: [
          'Kobber og aluminium',
          'Tre og plast',
          'Glass og gummi',
          'Papir og bomull',
        ],
        answer: 0,
        solution: `**Riktig svar: Kobber og aluminium**

**Forklaring:**

**Gode ledere (lav motstand):**
- Kobber – brukes i de fleste elektriske ledninger
- Aluminium – brukes i kraftledninger (lettere enn kobber)
- Gull – brukes i elektronikk (kontakter)
- Sølv – den beste lederen, men dyr

**Isolatorer (høy motstand):**
- Plast – brukes som isolasjon rundt ledninger
- Gummi – brukes i hansker og beskyttelse
- Glass – brukes i isolatorer på kraftledninger
- Tre, papir, bomull – leder ikke strøm

**Hvorfor er metaller gode ledere?**
Metaller har "frie elektroner" som kan bevege seg lett mellom atomene. Isolatorer har elektroner som er tett bundet og ikke kan bevege seg fritt.`,
      },
    },

    // ========== OPPGAVE EXTRA 2: EFFEKT OG ENERGI ==========
    {
      id: 'nat10-3-3-oppg-extra-2',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-3-oppg-extra-2',
        number: '3.3.14',
        type: 'classic',
        difficulty: 'medium',
        task: `En familie har følgende elektriske apparater hjemme:
- TV: 100 W, brukes 4 timer/dag
- PC: 200 W, brukes 3 timer/dag
- Lys (LED): 40 W totalt, brukes 6 timer/dag

a) Beregn daglig energiforbruk for hvert apparat (i Wh).
b) Beregn totalt daglig energiforbruk (i kWh).
c) Hva koster strømmen for disse apparatene per måned (30 dager) hvis prisen er 1,20 kr/kWh?`,
        solution: `**a) Daglig energiforbruk per apparat:**

TV: E = P × t = 100 W × 4 h = **400 Wh**
PC: E = P × t = 200 W × 3 h = **600 Wh**
LED-lys: E = P × t = 40 W × 6 h = **240 Wh**

---

**b) Totalt daglig energiforbruk:**

E_total = 400 + 600 + 240 = **1240 Wh = 1,24 kWh per dag**

---

**c) Månedlig kostnad:**

Energi per måned = 1,24 kWh/dag × 30 dager = 37,2 kWh

Kostnad = 37,2 kWh × 1,20 kr/kWh = **44,64 kr per måned**

**Tolkning:**
Disse tre apparatene koster under 50 kr per måned. Det er relativt lite! De store strømforbrukerne i et hjem er oppvarming, varmtvann, komfyr og tørketrommel.`,
      },
    },

    // ========== OPPGAVE EXTRA 3: SAMMENLIGNE SERIE OG PARALLELL ==========
    {
      id: 'nat10-3-3-oppg-extra-3',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-3-oppg-extra-3',
        number: '3.3.15',
        type: 'classic',
        difficulty: 'medium',
        task: `Du har to lyspærer med motstand 10 Ω hver og et 20 V batteri.

a) Beregn strømmen hvis lyspærene kobles i serie.
b) Beregn strømmen hvis lyspærene kobles parallelt.
c) Hvilken kobling gir sterkest lys i hver lyspære? Forklar.`,
        solution: `**a) Seriekobling:**

Total motstand: R_total = 10 + 10 = 20 Ω

Strøm: I = U/R = 20 V / 20 Ω = **1 A**

Spenning over hver pære: U = R × I = 10 × 1 = **10 V**

---

**b) Parallellkobling:**

Total motstand: 1/R = 1/10 + 1/10 = 2/10 → R_total = 5 Ω

Total strøm: I_total = U/R = 20 V / 5 Ω = **4 A**

Strøm gjennom hver pære: I = U/R = 20/10 = **2 A** (hver)

Spenning over hver pære: **20 V** (lik batteriets spenning)

---

**c) Sterkest lys i parallellkobling:**

Effekt i serie: P = U × I = 10 V × 1 A = **10 W per pære**

Effekt parallelt: P = U × I = 20 V × 2 A = **40 W per pære**

**Parallellkobling gir 4 ganger sterkere lys!** Fordi hver pære får full spenning (20 V) i parallell, men bare halv spenning (10 V) i serie.

**Oppsummering:**
| Egenskap | Serie | Parallell |
|----------|-------|-----------|
| R_total | 20 Ω | 5 Ω |
| I_total | 1 A | 4 A |
| U per pære | 10 V | 20 V |
| P per pære | 10 W | 40 W |`,
      },
    },

    // ========== OPPGAVE EXTRA 4: KORTSLUTNING ==========
    {
      id: 'nat10-3-3-oppg-extra-4',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-3-oppg-extra-4',
        number: '3.3.16',
        type: 'classic',
        difficulty: 'medium',
        task: `En kortslutning oppstår når strømmen får en vei med svært lav motstand (f.eks. hvis to ledninger berører hverandre).

a) Hva skjer med strømmen ved en kortslutning ifølge Ohms lov?
b) Hvorfor er kortslutning farlig?
c) Hvordan beskytter en sikring mot kortslutning?`,
        solution: `**a) Strøm ved kortslutning (Ohms lov):**

Ved kortslutning er motstanden nesten null (R ≈ 0).

Ifølge Ohms lov: I = U/R

Hvis R er svært liten: I = 230 V / 0,01 Ω = **23 000 A!**

Strømmen blir ekstremt høy fordi det nesten ikke er noe som bremser elektronene.

---

**b) Hvorfor kortslutning er farlig:**

1. **Enorm varme** – Høy strøm i ledningene gir enorm varmeutvikling (P = I²R)
2. **Brannfare** – Ledningene kan bli så varme at de smelter og antennes
3. **Skade på utstyr** – Elektriske apparater kan ødelegges
4. **Lysbuer** – Ved veldig høy strøm kan det oppstå elektriske lysbuer (som lyn)
5. **Livsfare** – Hvis en person er i kontakt med kretsen

---

**c) Hvordan sikringen beskytter:**

1. Kortslutning oppstår → Strømmen stiger dramatisk
2. Sikringen registrerer den høye strømmen
3. Sikringens ledning smelter (eller automatsikringen slår av)
4. Kretsen åpnes → Strømmen stoppes
5. Brannen forhindres

**Tidsperspektiv:** En sikring reagerer på millisekunder – raskere enn du kan reagere!

**Derfor er sikringer livsviktige – de er den siste forsvarslinjen mot brann fra elektriske feil.**`,
      },
    },

    // ========== OPPGAVE EXTRA 5: STATISK ELEKTRISITET ==========
    {
      id: 'nat10-3-3-oppg-extra-5',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-3-oppg-extra-5',
        number: '3.3.17',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva forårsaker at du får støt når du tar i et dørhåndtak etter å ha gått på et syntetisk teppe?',
        options: [
          'Statisk elektrisitet – elektroner har hopet seg opp på kroppen din',
          'Dørhåndtaket er ladet av batterier i veggen',
          'Magneter i gulvet tiltrekker elektronene',
          'Varme fra friksjonen mot teppet lager elektrisitet',
        ],
        answer: 0,
        solution: `**Riktig svar: Statisk elektrisitet – elektroner har hopet seg opp på kroppen din**

**Forklaring:**

1. Når du går på et syntetisk teppe, gnir skoene mot teppet (friksjon)
2. Friksjonen overfører elektroner fra teppet til kroppen din
3. Du blir negativt ladet (for mange elektroner)
4. Når du tar i et ledende objekt (dørhåndtak av metall), hopper elektronene over
5. Denne "hoppingen" oppleves som et lite elektrisk støt

**Statisk elektrisitet** er elektrisk ladning som har hopet seg opp uten å strømme. Det er forskjellig fra vanlig strøm (dynamisk elektrisitet) som strømmer kontinuerlig.

**Andre eksempler på statisk elektrisitet:**
- Lyn (enormt utlading av statisk elektrisitet mellom sky og bakke)
- Hår som "reiser seg" når du tar av en genser
- Ballonger som klistrer seg til veggen etter å ha blitt gnidd`,
      },
    },

    // ========== OPPGAVE EXTRA 6: STRØM I HJEMMET ==========
    {
      id: 'nat10-3-3-oppg-extra-6',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-3-oppg-extra-6',
        number: '3.3.18',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `I Norge bruker vi 230 V vekselstrøm (AC) i stikkontaktene, mens mange andre land (f.eks. USA) bruker 120 V.

a) En hårtørker har effekt 2000 W og kobles til 230 V. Beregn strømmen.
b) Samme hårtørker (2000 W) kobles til 120 V i USA. Beregn strømmen.
c) Hvorfor er det en fordel å bruke 230 V i stedet for 120 V?`,
        solution: `**a) Strøm ved 230 V:**

P = U × I → I = P/U

$$I = \\frac{2000 \\text{ W}}{230 \\text{ V}} = 8,7 \\text{ A}$$

---

**b) Strøm ved 120 V:**

$$I = \\frac{2000 \\text{ W}}{120 \\text{ V}} = 16,7 \\text{ A}$$

---

**c) Fordelen med 230 V:**

Ved 230 V er strømmen **nesten halvparten** (8,7 A vs. 16,7 A) for samme effekt.

**Fordeler med lavere strøm:**

1. **Tynnere ledninger** – lavere strøm betyr at man kan bruke tynnere (og billigere) kobberledninger
2. **Mindre varmetap** – varmetap i ledninger er proporsjonal med I² (P_tap = I²R). Halv strøm gir bare 1/4 av varmetapet!
3. **Flere apparater per sikring** – med 16 A sikring kan man bruke 3680 W ved 230 V, men bare 1920 W ved 120 V

**Ulempe med 230 V:**
Høyere spenning er farligere ved elektrisk støt. 230 V kan gi dødelig støt lettere enn 120 V.

**Oppsummering:**
| Egenskap | Norge (230 V) | USA (120 V) |
|----------|--------------|-------------|
| Strøm for 2000 W | 8,7 A | 16,7 A |
| Ledningstykkelse | Tynnere | Tykkere |
| Varmetap | Lavere | Høyere |
| Støtfare | Høyere | Lavere |`,
      },
    },

    {
      id: 'nat10-3-3-oppg-extra-7',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-3-oppg-extra-7',
        number: '3.3.19',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En bolig har et elektrisk anlegg med hovedsikring på 40 A og 230 V nettspenning.

a) Beregn den maksimale totale effekten boligen kan bruke samtidig.
b) Forklar hva som skjer dersom den totale effekten overskrider denne grensen.
c) En familie bruker følgende apparater samtidig: komfyr (6000 W), vaskemaskin (2200 W), oppvaskmaskin (1800 W), varmtvannsbereder (3000 W) og tre varmeovner à 1500 W. Beregn total effekt og strøm. Vil hovedsikringen ryke?
d) Foreslå hvilke tiltak familien kan gjøre for å unngå at sikringen ryker.`,
        solution: `**a) Maksimal effekt:**

$$P_{maks} = U \\times I = 230 \\text{ V} \\times 40 \\text{ A} = 9200 \\text{ W} = 9,2 \\text{ kW}$$

---

**b) Hva skjer ved overbelastning?**

Når strømmen overstiger 40 A, vil hovedsikringen (automatsikringen) **slå ut**. Dette er en sikkerhetsmekanisme som beskytter mot:

- **Overoppheting av ledninger** – for mye strøm gir varme som kan forårsake brann
- **Brannfare** – uten sikring kan isolasjonen på ledningene smelte
- **Skade på apparater** – overstrøm kan ødelegge elektroniske komponenter

---

**c) Beregning av total effekt og strøm:**

| Apparat | Effekt |
|---------|--------|
| Komfyr | 6000 W |
| Vaskemaskin | 2200 W |
| Oppvaskmaskin | 1800 W |
| Varmtvannsbereder | 3000 W |
| 3 × varmeovn | 3 × 1500 = 4500 W |
| **Totalt** | **17 500 W** |

$$I = \\frac{P}{U} = \\frac{17500 \\text{ W}}{230 \\text{ V}} = 76,1 \\text{ A}$$

Strømmen (76,1 A) er **nesten dobbelt** så høy som hovedsikringen (40 A). **Ja, hovedsikringen vil ryke!**

---

**d) Tiltak for å unngå overbelastning:**

1. **Unngå å bruke alt samtidig** – kjør vaskemaskin og oppvaskmaskin på ulike tidspunkt
2. **Bruk tidsstyring** – still inn varmtvannsberederen til å varme om natten
3. **Senk varmeovnene** – sett termostat lavere eller slå av noen ovner når komfyren er i bruk
4. **Oppgrader anlegget** – installer høyere hovedsikring (63 A) med tykkere kabling (krever elektriker)`,
      },
    },

  ],
  exercises: [], // Oppgavene er embedded i content
};

// ============================================================================
// Kapittel 3.4: Bølger og stråling
// LK20: Forklare hvordan energi kan overføres og omformes
// ============================================================================

export const CHAPTER_NAT10_3_4: TextbookChapter = {
  id: 'naturfag-10-3-4',
  courseId: 'naturfag-10',
  chapterNumber: '3.4',
  title: 'Bølger og stråling',
  description: 'Lær om bølger, lyd, lys og elektromagnetisk stråling.',
  estimatedMinutes: 40,
  competenceGoals: [
    'forklare hvordan energi kan overføres og omformes',
    'beskrive ulike former for stråling og deres effekter',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'nat10-3-4-intro',
      type: 'text',
      content: `## Bølger og stråling

Du hører musikk fra høyttalere. Du ser farger med øynene. Du merker varme fra solen. Alt dette er eksempler på **bølger** og **stråling**.

Bølger er en av naturens mest grunnleggende måter å overføre energi på – uten at selve stoffet flytter seg!

I dette kapitlet lærer du:
- Hva en bølge er og hvordan den overfører energi
- Bølgeegenskaper: bølgelengde, frekvens, amplitude
- Lydbølger og hvordan lyd beveger seg
- Det elektromagnetiske spekteret
- Lys og farger
- Stråling og helse`,
    },

    // ========== HVA ER EN BØLGE? ==========
    {
      id: 'nat10-3-4-hva-er-bolge',
      type: 'text',
      content: `## Hva er en bølge?

En **bølge** er en forstyrrelse som beveger seg gjennom rom og tid, og som overfører **energi** uten å flytte masse.

### Tenk på en vannbølge

Hvis du kaster en stein i et vann:
- **Bølgene** sprer seg utover i ringer
- **Vannet** selv flytter seg ikke – det går bare opp og ned
- **Energien** fra steinen beveger seg utover med bølgene

Dette er essensen av en bølge: **energi beveger seg, men stoffet blir på plass**.

### To typer bølger

**1. Mekaniske bølger**
- Trenger et **medium** (et stoff) å bevege seg gjennom
- Eksempler: vannbølger, lydbølger, jordskjelv
- Kan ikke bevege seg i vakuum (tomt rom)

**2. Elektromagnetiske bølger**
- Trenger **ikke** et medium
- Kan bevege seg i vakuum
- Eksempler: lys, røntgenstråler, radiobølger`,
    },

    // ========== DEFINISJON: BØLGE ==========
    {
      id: 'nat10-3-4-def-bolge',
      type: 'definition',
      title: 'Bølge',
      content: `**Bølge:** En forstyrrelse som beveger seg gjennom rom og overfører energi uten å flytte masse.

**To hovedtyper:**
- **Mekaniske bølger:** Trenger medium (lyd, vann)
- **Elektromagnetiske bølger:** Trenger ikke medium (lys, radiobølger)

**Viktig prinsipp:**
Energi beveger seg med bølgen, men selve stoffet forblir stort sett på plass.`,
    },

    // ========== BØLGEEGENSKAPER ==========
    {
      id: 'nat10-3-4-bolgeegenskaper',
      type: 'text',
      content: `## Bølgeegenskaper

Alle bølger – enten det er lyd, lys eller vann – har tre viktige egenskaper:

### 1. Bølgelengde (λ)

**Bølgelengde** er avstanden mellom to påfølgende bølgetopper (eller bølgedaler).

- Symbol: **λ** (gresk bokstav lambda)
- Enhet: **meter (m)**, men også cm, mm, nm osv.

**Eksempler:**
- Radiobølger: 1 m – 100 km
- Synlig lys: 400 nm (fiolett) – 700 nm (rødt)
- Røntgenstråler: 0.01 nm – 10 nm

### 2. Frekvens (f)

**Frekvens** er antall bølger (svingninger) per sekund.

- Symbol: **f**
- Enhet: **hertz (Hz)** = svingninger per sekund

**Eksempler:**
- Dyp basstone: 50 Hz
- Høy pipetone: 4000 Hz
- FM-radio: 100 MHz (millioner Hz)
- Synlig lys: 400–750 THz (billioner Hz)

### 3. Amplitude (A)

**Amplitude** er bølgens høyde – hvor stor forstyrrelsene er.

- For lydbølger: **Amplituden bestemmer volumet** (høyt/lavt)
- For lysbølger: **Amplituden bestemmer lysstyrken** (sterkt/svakt lys)

### Sammenhengen mellom bølgelengde, frekvens og hastighet

Alle bølger følger denne sammenhengen:

$$v = f \\cdot \\lambda$$

**Hvor:**
- **v** = bølgens hastighet (m/s)
- **f** = frekvens (Hz)
- **λ** = bølgelengde (m)

**Husk:**
- Høy frekvens → kort bølgelengde
- Lav frekvens → lang bølgelengde`,
    },

    // ========== DEFINISJON: BØLGEEGENSKAPER ==========
    {
      id: 'nat10-3-4-def-bolgeegenskaper',
      type: 'definition',
      title: 'Bølgeegenskaper',
      content: `**Bølgelengde (λ):** Avstanden mellom to bølgetopper. Enhet: meter (m)

**Frekvens (f):** Antall bølger per sekund. Enhet: hertz (Hz)

**Amplitude (A):** Bølgens høyde. Bestemmer styrken (volum for lyd, lysstyrke for lys)

**Formel:**
$$v = f \\cdot \\lambda$$

Hvor v = hastighet, f = frekvens, λ = bølgelengde`,
    },

    // ========== EKSEMPEL: BEREGNE BØLGELENGDE ==========
    {
      id: 'nat10-3-4-ex-bolgelengde',
      type: 'example',
      title: 'Eksempel: Beregne bølgelengde',
      problem: `En lydbølge har frekvensen 500 Hz og beveger seg med hastigheten 340 m/s (lydens hastighet i luft).

Hva er bølgelengden?`,
      solution: `**Gitt:**
- Frekvens: f = 500 Hz
- Hastighet: v = 340 m/s

**Formel:**
$$v = f \\cdot \\lambda$$

**Løsning:**
Vi løser for λ:

$$\\lambda = \\frac{v}{f} = \\frac{340 \\text{ m/s}}{500 \\text{ Hz}} = 0.68 \\text{ m} = 68 \\text{ cm}$$

**Svar:**
Bølgelengden er 68 cm.

**Forklaring:**
Dette betyr at hver bølge er 68 cm lang. Jo høyere frekvens (flere bølger per sekund), desto kortere blir hver enkelt bølge.`,
    },

    // ========== LYDBØLGER ==========
    {
      id: 'nat10-3-4-lydbolger',
      type: 'text',
      content: `## Lydbølger

**Lyd** er **mekaniske bølger** som beveger seg gjennom luft, vann eller faste stoffer.

### Hvordan lyd fungerer

Når du snakker:
1. Stemmeleppene **vibrerer** (svinger)
2. Vibrasjonene lager **trykkbølger** i luften
3. Trykkbølgene beveger seg gjennom luften
4. Øret ditt oppfatter trykkbølgene som lyd

### Lyd trenger et medium

Lyd kan **ikke** bevege seg i vakuum (tomt rom).

**Hvorfor?**
Fordi lyd er trykkbølger i stoff. Hvis det ikke er noe stoff (vakuum), kan det ikke være trykkbølger.

**Eksempel:**
På månen er det vakuum. Hvis du roper til en venn 10 meter unna, vil vennen **ikke** høre deg – selv om du skriker så høyt du kan!

### Lydens hastighet i ulike medier

Lydens hastighet avhenger av stoffet den beveger seg gjennom:

| **Medium** | **Hastighet** |
|-----------|-------------|
| Luft (20°C) | 340 m/s |
| Vann | 1480 m/s |
| Stål | 5000 m/s |

**Hvorfor er lyd raskere i faste stoffer?**
Fordi molekylene er tettere pakket, slik at vibrasjonene kan "hoppe" raskere fra molekyl til molekyl.

### Tonehøyde og volum

**Tonehøyde** bestemmes av **frekvensen:**
- Høy frekvens = høy tone (f.eks. fløyte, kvinnestemme)
- Lav frekvens = lav tone (f.eks. bass, mannstemme)

**Volum** (høyt/lavt) bestemmes av **amplituden:**
- Stor amplitude = høyt volum
- Liten amplitude = lavt volum`,
    },

    // ========== DEFINISJON: LYD ==========
    {
      id: 'nat10-3-4-def-lyd',
      type: 'definition',
      title: 'Lyd',
      content: `**Lyd:** Mekaniske bølger (trykkbølger) som beveger seg gjennom et medium (luft, vann, faste stoffer).

**Viktige fakta:**
- Trenger et medium – kan ikke bevege seg i vakuum
- Hastighet i luft: ca. 340 m/s
- Høy frekvens = høy tone
- Stor amplitude = høyt volum`,
    },

    // ========== ELEKTROMAGNETISK STRÅLING ==========
    {
      id: 'nat10-3-4-em-straling',
      type: 'text',
      content: `## Elektromagnetisk stråling

**Elektromagnetisk stråling** er bølger av elektriske og magnetiske felt som beveger seg gjennom rommet.

### Hvordan elektromagnetiske bølger er annerledes

**Trenger ikke medium:**
- Kan bevege seg i vakuum (tomt rom)
- Dette er hvorfor lyset fra solen når oss gjennom verdensrommet

**Konstant hastighet i vakuum:**
- Alle elektromagnetiske bølger beveger seg med **lysets hastighet** i vakuum
- **c = 300 000 000 m/s = 3·10⁸ m/s**

### Elektromagnetiske bølger er lys

Ja, du leste riktig!

**Synlig lys** er bare én type elektromagnetisk stråling. Men det finnes mange andre typer som vi ikke kan se med øynene:

- Radiobølger
- Mikrobølger
- Infrarød stråling
- Synlig lys (det vi ser!)
- Ultrafiolett stråling
- Røntgenstråler
- Gammastråler

Alle disse er **samme type bølge** – elektromagnetisk stråling – men med forskjellig bølgelengde og frekvens.`,
    },

    // ========== DEFINISJON: ELEKTROMAGNETISK STRÅLING ==========
    {
      id: 'nat10-3-4-def-em-straling',
      type: 'definition',
      title: 'Elektromagnetisk stråling',
      content: `**Elektromagnetisk stråling:** Bølger av elektriske og magnetiske felt.

**Egenskaper:**
- Trenger **ikke** et medium
- Beveger seg med **lysets hastighet** i vakuum: c = 3·10⁸ m/s
- Inkluderer lys, radiobølger, røntgen, UV, IR, og mer

**Viktig:**
Alle elektromagnetiske bølger er samme type bølge, bare med ulik bølgelengde og frekvens.`,
    },

    // ========== DET ELEKTROMAGNETISKE SPEKTERET ==========
    {
      id: 'nat10-3-4-em-spekter',
      type: 'text',
      content: `## Det elektromagnetiske spekteret

Det **elektromagnetiske spekteret** er alle typene elektromagnetisk stråling, sortert etter bølgelengde (eller frekvens).

### Fra lang til kort bølgelengde:

**1. Radiobølger**
- **Bølgelengde:** 1 mm – 100 km
- **Bruk:** Radio, TV, mobil, WiFi
- **Farlig?** Nei, trygg ved normale nivåer

**2. Mikrobølger**
- **Bølgelengde:** 1 mm – 1 m
- **Bruk:** Mikrobølgeovn, radar, GPS
- **Farlig?** Kan varme opp vann (derfor virker mikrobølgeovnen)

**3. Infrarød stråling (IR)**
- **Bølgelengde:** 700 nm – 1 mm
- **Bruk:** Varmelamper, fjernkontroller, varmekameraer
- **Oppleves som:** Varme
- **Farlig?** Trygg, men kan gi brannsår ved høy styrke

**4. Synlig lys**
- **Bølgelengde:** 400 nm (fiolett) – 700 nm (rødt)
- **Det vi ser!** Dette er den eneste delen av spekteret øynene våre kan oppfatte
- **Farger:** Regnbuens farger
- **Farlig?** Trygg, men sterkt lys kan skade øynene

**5. Ultrafiolett stråling (UV)**
- **Bølgelengde:** 10 nm – 400 nm
- **Kilde:** Solen
- **Effekt:** Gjør huden brun (solbrenthet)
- **Farlig?** JA – kan gi hudkreft og øyeskader

**6. Røntgenstråler**
- **Bølgelengde:** 0.01 nm – 10 nm
- **Bruk:** Medisinsk billeddiagnostikk (røntgen)
- **Farlig?** JA – ioniserende stråling, kan skade DNA

**7. Gammastråler**
- **Bølgelengde:** < 0.01 nm
- **Kilde:** Radioaktivitet, kjernekraft, verdensrommet
- **Farlig?** JA – svært farlig, ioniserende stråling

### Husk:

**Jo kortere bølgelengde, jo høyere energi**

- Radiobølger: lav energi, trygg
- Synlig lys: middels energi, trygg
- UV, røntgen, gamma: høy energi, farlig`,
    },

    // ========== DEFINISJON: ELEKTROMAGNETISK SPEKTER ==========
    {
      id: 'nat10-3-4-def-em-spekter',
      type: 'definition',
      title: 'Det elektromagnetiske spekteret',
      content: `**Det elektromagnetiske spekteret:** Alle typer elektromagnetisk stråling, sortert etter bølgelengde.

**Fra lang til kort bølgelengde:**
1. Radiobølger (trygg)
2. Mikrobølger (trygg)
3. Infrarød (IR) – varme (trygg)
4. Synlig lys – det vi ser! (trygg)
5. Ultrafiolett (UV) – farlig
6. Røntgen – farlig
7. Gammastråler – svært farlig

**Husk:**
Kortere bølgelengde = høyere energi = farligere`,
    },

    // ========== LYS OG FARGER ==========
    {
      id: 'nat10-3-4-lys-farger',
      type: 'text',
      content: `## Lys og farger

**Lys** er elektromagnetisk stråling med bølgelengde mellom 400 nm (fiolett) og 700 nm (rødt).

### Regnbuens farger

Synlig lys består av alle regnbuens farger:

| **Farge** | **Bølgelengde** |
|----------|----------------|
| Fiolett | 400 nm |
| Blå | 450 nm |
| Grønn | 550 nm |
| Gul | 580 nm |
| Oransje | 600 nm |
| Rød | 700 nm |

**Hvitt lys** er en blanding av alle fargene.

### Lysbrytning

Når lys går fra ett medium (f.eks. luft) til et annet (f.eks. vann eller glass), endres hastigheten. Dette får lyset til å **bøye av** – dette kalles **lysbrytning**.

**Eksempel:**
- En sugerør i et glass vann ser "knekt" ut
- Regndråper bryter sollyset og lager regnbue

### Refleksjon

Når lys treffer en overflate, kan det **reflekteres** (sprette tilbake).

**Speil:**
Glatte overflater (som speil) reflekterer lyset jevnt, slik at vi ser et klart speilbilde.

**Matte overflater:**
Ru overflater sprer lyset i alle retninger.

### Hvorfor ser vi farger?

Gjenstander **absorberer** (suger opp) noen farger og **reflekterer** andre.

**Eksempel:**
- Et **rødt eple** absorberer alle farger unntatt rødt
- Rødt lys reflekteres tilbake til øynene våre
- Derfor ser vi eplet som rødt

**Svarte gjenstander:**
Absorberer alle farger (reflekterer nesten ingen)

**Hvite gjenstander:**
Reflekterer alle farger`,
    },

    // ========== DEFINISJON: LYSBRYTNING OG REFLEKSJON ==========
    {
      id: 'nat10-3-4-def-lysbrytning',
      type: 'definition',
      title: 'Lysbrytning og refleksjon',
      content: `**Lysbrytning:** Lys bøyer av når det går fra ett medium til et annet (f.eks. fra luft til vann).

**Refleksjon:** Lys spretter tilbake fra en overflate.

**Farger:**
Gjenstander reflekterer noen farger og absorberer andre. Fargene som reflekteres er det vi ser.

**Eksempel:**
Et rødt eple reflekterer rødt lys og absorberer andre farger.`,
    },

    // ========== STRÅLING OG HELSE ==========
    {
      id: 'nat10-3-4-straling-helse',
      type: 'text',
      content: `## Stråling og helse

Ikke all stråling er farlig, men noen typer kan skade kroppen vår.

### Ioniserende vs. ikke-ioniserende stråling

**Ikke-ioniserende stråling (trygg):**
- Har **ikke** nok energi til å skade DNA
- Inkluderer: radiobølger, mikrobølger, infrarødt, synlig lys
- Trygg ved normale nivåer

**Ioniserende stråling (farlig):**
- Har **høy nok energi** til å rive elektroner fra atomer
- Kan skade DNA og celler
- Kan gi kreft
- Inkluderer: UV-stråling, røntgen, gammastråler

### UV-stråling og solen

**UV-stråling fra solen:**
- Gir D-vitamin (bra i moderate mengder)
- Gir brun hud (solbrenthet)
- Kan gi hudkreft ved for mye eksponering
- Kan skade øynene

**Beskyttelse:**
- Bruk solkrem (SPF 15 eller høyere)
- Bruk solbriller med UV-beskyttelse
- Hold deg i skyggen mellom kl. 11 og 15 (når UV-strålingen er sterkest)

### Røntgenstråler

**Bruk:**
- Medisinsk diagnostikk (røntgen av brudd, tenner osv.)
- Sikkerhetssjekk på flyplasser

**Risiko:**
- Ioniserende stråling
- Små doser er OK (som hos tannlegen)
- Stor dosering over tid kan gi kreft

**Beskyttelse:**
- Bleiskjold brukes for å beskytte kroppen
- Gravide skal unngå røntgen

### Radioaktivitet og gammastråling

**Gammastråler** er den mest energirike (og farligste) typen stråling.

**Kilder:**
- Radioaktive stoffer (uran, plutonium)
- Kjernekraftverk
- Medisinsk behandling (kreftbehandling)
- Verdensrommet

**Risiko:**
- Svært farlig
- Kan drepe celler
- Kan gi strålingsyke og kreft

**Beskyttelse:**
- Avstand (hold deg unna kilder)
- Avskjerming (bly, betong)
- Tid (begrens eksponeringen)

### Oppsummering: Trygg vs. farlig stråling

**Trygg (ikke-ioniserende):**
- Radio, mikro, infrarød, synlig lys
- Kan brukes daglig uten risiko

**Farlig (ioniserende):**
- UV (solbrenthet, hudkreft)
- Røntgen (bruk bare ved behov)
- Gamma (svært farlig, unngå)`,
    },

    // ========== DEFINISJON: IONISERENDE STRÅLING ==========
    {
      id: 'nat10-3-4-def-ioniserende',
      type: 'definition',
      title: 'Ioniserende stråling',
      content: `**Ioniserende stråling:** Stråling med nok energi til å rive elektroner fra atomer og skade DNA.

**Typer:**
- UV-stråling (fra solen)
- Røntgenstråler
- Gammastråler

**Risiko:**
- Kan skade celler og DNA
- Kan gi kreft
- Kan gi strålingsyke

**Beskyttelse:**
- Avstand, avskjerming, begrens tid`,
    },

    // ========== EKSEMPEL: BEREGNE FREKVENS ==========
    {
      id: 'nat10-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Beregne frekvens fra bølgelengde',
      problem: `En radiostasjon sender med bølgelengde 3 meter. Radiobølger beveger seg med lysets hastighet (c = 3·10⁸ m/s).

Hva er frekvensen til radiosignalet?`,
      solution: `**Gitt:**
- Bølgelengde: λ = 3 m
- Hastighet: c = 3·10⁸ m/s

**Formel:**
$$c = f \\cdot \\lambda$$

**Løsning:**
Vi løser for f:

$$f = \\frac{c}{\\lambda} = \\frac{3 \\cdot 10^8 \\text{ m/s}}{3 \\text{ m}} = 1 \\cdot 10^8 \\text{ Hz} = 100 \\text{ MHz}$$

**Svar:**
Frekvensen er 100 MHz (megahertz).

**Tolkning:**
100 MHz er i FM-radiobåndet (88-108 MHz). Det betyr at radiobølgen svinger 100 millioner ganger per sekund!

**Huskeregel:** Jo kortere bølgelengde, jo høyere frekvens.`,
    },

    // ========== EKSEMPEL: LYDBØLGER I ULIKE MEDIER ==========
    {
      id: 'nat10-3-4-example-2',
      type: 'example',
      title: 'Eksempel: Lydens hastighet i ulike materialer',
      problem: `Du er under vann og hører en lyd. Lydens hastighet i vann er 1480 m/s. Lyden har frekvens 500 Hz.

a) Hva er bølgelengden til lyden under vann?
b) Hva ville bølgelengden vært i luft (hastighet 340 m/s) ved samme frekvens?
c) Hvorfor er bølgelengden forskjellig?`,
      solution: `**a) Bølgelengde under vann:**

$$\\lambda = \\frac{v}{f} = \\frac{1480 \\text{ m/s}}{500 \\text{ Hz}} = 2,96 \\text{ m}$$

**Svar:** Bølgelengden under vann er ca. **3,0 m**.

---

**b) Bølgelengde i luft:**

$$\\lambda = \\frac{v}{f} = \\frac{340 \\text{ m/s}}{500 \\text{ Hz}} = 0,68 \\text{ m}$$

**Svar:** Bølgelengden i luft er **0,68 m** (68 cm).

---

**c) Hvorfor forskjellen?**

Bølgelengden er forskjellig fordi lydens **hastighet** er forskjellig i ulike medier:

- I vann: v = 1480 m/s → λ = 3,0 m (lang bølgelengde)
- I luft: v = 340 m/s → λ = 0,68 m (kort bølgelengde)

**Frekvensen er den samme** (500 Hz) uansett medium. Det er hastigheten og bølgelengden som endres.

Formel: v = f · λ → Når v øker (ved konstant f), øker λ.`,
    },

    // ========== EKSEMPEL: ELEKTROMAGNETISK SPEKTER ==========
    {
      id: 'nat10-3-4-example-3',
      type: 'example',
      title: 'Eksempel: Sortere stråling etter energi',
      problem: `Sorter følgende typer elektromagnetisk stråling fra lavest til høyest energi:

Synlig lys, Gammastråler, Radiobølger, UV-stråling, Røntgen, Infrarød, Mikrobølger`,
      solution: `**Sortert fra lavest til høyest energi:**

1. **Radiobølger** (lavest energi, lengst bølgelengde)
2. **Mikrobølger**
3. **Infrarød stråling** (varmestråling)
4. **Synlig lys** (det vi kan se)
5. **UV-stråling** (ultrafiolett)
6. **Røntgenstråler**
7. **Gammastråler** (høyest energi, kortest bølgelengde)

**Huskeregel:**
Kortere bølgelengde → Høyere frekvens → Høyere energi

**Sammenheng med fare:**
- Nr. 1-4: Ikke-ioniserende (trygg ved normale nivåer)
- Nr. 5-7: Ioniserende (kan skade DNA, farlig)

**Formel for energi:**
$$E = h \\cdot f$$
hvor h = Plancks konstant og f = frekvens.
Høyere frekvens = høyere energi.`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE - BØLGER ==========
    {
      id: 'nat10-3-4-oppg1',
      type: 'exercise',
      title: 'Oppgave 1: Hva er en bølge?',
      interactiveType: 'multiple-choice',
      task: 'Hva er det korrekte om bølger?',
      options: [
        'Bølger flytter masse fra ett sted til et annet',
        'Bølger overfører energi uten å flytte masse',
        'Bølger kan bare bevege seg gjennom vann',
        'Bølger beveger seg alltid med lysets hastighet',
      ],
      answer: 1,
      explanation: `**Riktig svar: Bølger overfører energi uten å flytte masse**

Dette er essensen av hva en bølge er. Energi beveger seg, men selve stoffet (massen) forblir stort sett på plass.

**Eksempel:**
Når du kaster en stein i vann, beveger vannbølgene seg utover, men vannet selv flytter seg ikke – det går bare opp og ned.

**Feilene i de andre alternativene:**
- Bølger kan bevege seg gjennom mange medier (vann, luft, vakuum osv.)
- Bare elektromagnetiske bølger i vakuum beveger seg med lysets hastighet`,
    },

    // ========== OPPGAVE 2: MULTIPLE CHOICE - LYDBØLGER ==========
    {
      id: 'nat10-3-4-oppg2',
      type: 'exercise',
      title: 'Oppgave 2: Lydbølger',
      interactiveType: 'multiple-choice',
      task: 'Hvorfor kan vi ikke høre lyd i verdensrommet (vakuum)?',
      options: [
        'Fordi det er for kaldt i verdensrommet',
        'Fordi lyd er mekaniske bølger som trenger et medium',
        'Fordi lydhastighen er null i vakuum',
        'Fordi ørene våre ikke fungerer i verdensrommet',
      ],
      answer: 1,
      explanation: `**Riktig svar: Fordi lyd er mekaniske bølger som trenger et medium**

Lyd er trykkbølger som beveger seg gjennom et stoff (medium). I vakuum finnes det ingen luftmolekyler eller andre partikler, så det er ingenting som kan vibrere og lage trykkbølger.

**Derfor:**
- På jorden kan vi høre lyd fordi det er luft
- I verdensrommet er det vakuum (ingen luft)
- Ingen luft = ingen lydbølger = ingen lyd

**Eksempel:**
Astronauter på månen må bruke radio for å kommunisere, selv om de står ved siden av hverandre!`,
    },

    // ========== OPPGAVE 3: MULTIPLE CHOICE - EM SPEKTER ==========
    {
      id: 'nat10-3-4-oppg3',
      type: 'exercise',
      title: 'Oppgave 3: Elektromagnetisk spekter',
      interactiveType: 'multiple-choice',
      task: 'Hvilken type stråling har kortest bølgelengde?',
      options: [
        'Radiobølger',
        'Synlig lys',
        'Røntgenstråler',
        'Gammastråler',
      ],
      answer: 3,
      explanation: `**Riktig svar: Gammastråler**

Gammastråler har kortest bølgelengde av all elektromagnetisk stråling.

**Husk rekkefølgen (fra lang til kort bølgelengde):**
1. Radiobølger (lengst)
2. Mikrobølger
3. Infrarød (IR)
4. Synlig lys
5. Ultrafiolett (UV)
6. Røntgen
7. Gammastråler (kortest)

**Viktig sammenheng:**
Jo kortere bølgelengde, jo høyere energi og jo farligere strålingen.

Derfor er gammastråler den farligste typen stråling.`,
    },

    // ========== OPPGAVE 4: BEREGNE FREKVENS ==========
    {
      id: 'nat10-3-4-oppg4',
      type: 'exercise',
      title: 'Oppgave 4: Beregne frekvens',
      interactiveType: 'open-ended',
      task: `Rødt lys har bølgelengden 700 nm (nanometer). Lys beveger seg med hastigheten c = 3·10⁸ m/s.

Hva er frekvensen til rødt lys?

*Tips: Husk å gjøre om nanometer til meter! (1 nm = 10⁻⁹ m)*`,
      answer: `**Gitt:**
- Bølgelengde: λ = 700 nm = 700·10⁻⁹ m = 7·10⁻⁷ m
- Hastighet: c = 3·10⁸ m/s

**Formel:**
$$c = f \\cdot \\lambda$$

**Løsning:**
Vi løser for f:

$$f = \\frac{c}{\\lambda} = \\frac{3 \\cdot 10^8 \\text{ m/s}}{7 \\cdot 10^{-7} \\text{ m}}$$

$$f = \\frac{3}{7} \\cdot 10^{8-(-7)} = \\frac{3}{7} \\cdot 10^{15}$$

$$f \\approx 4.3 \\cdot 10^{14} \\text{ Hz} = 430 \\text{ THz}$$

**Svar:**
Frekvensen til rødt lys er ca. 4.3·10¹⁴ Hz (430 terahertz).

**Tolkning:**
Dette betyr at lysbølgen svinger 430 billioner ganger per sekund!`,
    },

    // ========== OPPGAVE 5: LYDHASTIGHET ==========
    {
      id: 'nat10-3-4-oppg5',
      type: 'exercise',
      title: 'Oppgave 5: Lydens hastighet',
      interactiveType: 'open-ended',
      task: `Du ser et lyn og teller til 3 sekunder før du hører tordenen.

Lydens hastighet i luft er 340 m/s.

Hvor langt unna deg var lynet?`,
      answer: `**Gitt:**
- Tid: t = 3 s
- Lydens hastighet: v = 340 m/s

**Formel:**
$$s = v \\cdot t$$

**Løsning:**
$$s = 340 \\text{ m/s} \\cdot 3 \\text{ s} = 1020 \\text{ m} \\approx 1 \\text{ km}$$

**Svar:**
Lynet var ca. 1 kilometer unna deg.

**Forklaring:**
Lyset fra lynet når deg umiddelbart (lys er ekstremt raskt), men lyden (tordenen) bruker ca. 3 sekunder på å komme fram.

**Tommelfingerregel:**
For hvert 3. sekund mellom lyn og torden, er lynet 1 km unna.`,
    },

    // ========== OPPGAVE 6: ELEKTROMAGNETISK SPEKTER ==========
    {
      id: 'nat10-3-4-oppg6',
      type: 'exercise',
      title: 'Oppgave 6: Hvilken stråling?',
      interactiveType: 'open-ended',
      task: `Match følgende bruksområder med riktig type stråling:

a) Fjernkontroll til TV-en
b) Kommunikasjon med mobiltelefon
c) Se farger
d) Solbrenthet
e) Røntgenbilde av et brudd

**Velg fra:**
Radiobølger, Infrarød stråling, Synlig lys, UV-stråling, Røntgenstråler`,
      answer: `**Svar:**

a) **Infrarød stråling** – Fjernkontroller bruker infrarøde LED-er til å sende signaler

b) **Radiobølger** – Mobiltelefoner bruker radiobølger for kommunikasjon

c) **Synlig lys** – Vi ser farger med det synlige lyset (400–700 nm)

d) **UV-stråling** – UV-stråling fra solen gir solbrenthet (og hudkreft)

e) **Røntgenstråler** – Brukes i medisinsk billeddiagnostikk

**Oppsummering:**
Alle disse er elektromagnetisk stråling, men med forskjellig bølgelengde og bruksområde.`,
    },

    // ========== OPPGAVE 7: STRÅLING OG HELSE (MEDIUM) ==========
    {
      id: 'nat10-3-4-oppg7',
      type: 'exercise',
      title: 'Oppgave 7: Stråling og helse',
      interactiveType: 'open-ended',
      task: `Forklar forskjellen mellom ioniserende og ikke-ioniserende stråling.

Gi to eksempler på hver type, og beskriv hvorfor ioniserende stråling er farligere.`,
      answer: `**Ikke-ioniserende stråling:**
- Har **ikke** nok energi til å rive elektroner fra atomer
- Kan **ikke** skade DNA direkte
- **Eksempler:** Radiobølger, mikrobølger, infrarød stråling, synlig lys
- **Trygg** ved normale nivåer

**Ioniserende stråling:**
- Har **høy nok energi** til å rive elektroner fra atomer
- Kan **skade DNA** og celler
- **Eksempler:** UV-stråling, røntgenstråler, gammastråler
- **Farlig** – kan gi kreft og celledød

**Hvorfor er ioniserende stråling farligere?**

Ioniserende stråling har så mye energi at den kan:
1. Bryte kjemiske bindinger i DNA
2. Forårsake mutasjoner (genetiske endringer)
3. Drepe celler
4. Gi kreft over tid

**Eksempel:**
- WiFi (radiobølger): Bruker vi hele dagen uten risiko
- Røntgen: Bruker vi bare ved behov, med beskyttelse

**Sammenheng:**
Jo kortere bølgelengde → jo høyere energi → jo farligere`,
    },

    // ========== OPPGAVE 8: UV-STRÅLING OG SOLBESKYTTELSE (VANSKELIG) ==========
    {
      id: 'nat10-3-4-oppg8',
      type: 'exercise',
      title: 'Oppgave 8: UV-stråling og solbeskyttelse',
      interactiveType: 'open-ended',
      task: `UV-indeksen er et mål på hvor sterk UV-strålingen fra solen er.

En sommerdag i Norge kan UV-indeksen være 6–7 (høy).

a) Forklar hvorfor UV-strålingen er sterkest mellom kl. 11 og 15.

b) Hvorfor er det viktig å beskytte seg mot UV-stråling, selv om kroppen trenger litt sol for å lage D-vitamin?

c) Nevn tre måter å beskytte seg mot for mye UV-stråling på.`,
      answer: `**a) Hvorfor er UV-strålingen sterkest mellom kl. 11 og 15?**

Mellom kl. 11 og 15 står solen **høyest på himmelen**.

**Dette betyr:**
- Sollyset går gjennom **mindre atmosfære**
- Mindre atmosfære = mindre filtrering av UV-stråling
- Derfor er UV-strålingen sterkere

**Illustrasjon:**
- Kl. 12 (høy sol): Korteste vei gjennom atmosfæren → Sterk UV
- Kl. 08 eller 18 (lav sol): Lengre vei gjennom atmosfæren → Svakere UV

**b) Hvorfor beskytte seg mot UV, selv om vi trenger D-vitamin?**

**D-vitamin er bra:**
- Kroppen lager D-vitamin når huden utsettes for UV-stråling
- Vi trenger D-vitamin for sterke bein og immunforsvar

**Men for mye UV er farlig:**
- UV-stråling kan skade DNA i hudceller
- Dette kan gi **hudkreft** (f.eks. melanom)
- UV kan også gi for tidlig aldring av huden og øyeskader

**Løsningen:**
- Vi trenger bare **10–15 minutter i solen** noen ganger i uka for nok D-vitamin
- Mer enn dette øker risikoen uten ekstra nytte

**c) Tre måter å beskytte seg:**

1. **Bruk solkrem (SPF 15 eller høyere)**
   - Påfør 20–30 minutter før soling
   - Sett på igjen hver 2. time (eller etter bading)

2. **Hold deg i skyggen mellom kl. 11 og 15**
   - Dette er når UV-strålingen er sterkest

3. **Bruk klær og solbriller med UV-beskyttelse**
   - Lys, tett vevd klær beskytter godt
   - Solbriller beskytter øynene mot UV-skader

**Ekstra beskyttelse:**
- Bruk caps eller hatt
- Unngå solarium (gir sterk UV-stråling)

**Oppsummering:**
Moderat soleksponering er bra, men for mye UV-stråling er farlig og kan gi hudkreft.`,
    },

    // ========== OPPGAVE EXTRA 1: BØLGEBEREGNING ==========
    {
      id: 'nat10-3-4-oppg-extra-1',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-4-oppg-extra-1',
        number: '3.4.9',
        type: 'classic',
        difficulty: 'medium',
        task: `En gitarstreng vibrerer med frekvens 440 Hz (tonen A). Lydens hastighet i luft er 340 m/s.

a) Beregn bølgelengden til lydbølgen.
b) Hvis gitaristen spiller en oktav høyere (dobbel frekvens, 880 Hz), hva blir bølgelengden?
c) Forklar sammenhengen mellom frekvens og tonehøyde.`,
        solution: `**a) Bølgelengde ved 440 Hz:**

$$\\lambda = \\frac{v}{f} = \\frac{340 \\text{ m/s}}{440 \\text{ Hz}} = 0,77 \\text{ m} = 77 \\text{ cm}$$

**Svar:** Bølgelengden er ca. 77 cm.

---

**b) Bølgelengde ved 880 Hz:**

$$\\lambda = \\frac{v}{f} = \\frac{340 \\text{ m/s}}{880 \\text{ Hz}} = 0,39 \\text{ m} = 39 \\text{ cm}$$

**Svar:** Bølgelengden halveres til ca. 39 cm.

---

**c) Sammenheng frekvens og tonehøyde:**

- Høy frekvens → høy tone (fløyte, pipetone)
- Lav frekvens → lav tone (bass, tromme)

Når frekvensen dobles (én oktav opp), halveres bølgelengden. Hastigheten er fortsatt den samme (340 m/s i luft).`,
      },
    },

    // ========== OPPGAVE EXTRA 2: LYDENS HASTIGHET ==========
    {
      id: 'nat10-3-4-oppg-extra-2',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-4-oppg-extra-2',
        number: '3.4.10',
        type: 'classic',
        difficulty: 'medium',
        task: `Du roper mot en fjellvegg og hører ekkoet etter 4 sekunder. Lydens hastighet er 340 m/s.

a) Hvor langt har lyden reist totalt (fram og tilbake)?
b) Hvor langt unna er fjellveggen?`,
        solution: `**a) Total avstand (fram og tilbake):**

$$s_{total} = v \\cdot t = 340 \\text{ m/s} \\cdot 4 \\text{ s} = 1360 \\text{ m}$$

**Svar:** Lyden har reist **1360 meter** totalt.

---

**b) Avstand til fjellveggen:**

Lyden går **fram til veggen og tilbake**. Derfor er avstanden til veggen halvparten av total avstand:

$$s = \\frac{s_{total}}{2} = \\frac{1360}{2} = 680 \\text{ m}$$

**Svar:** Fjellveggen er **680 meter** unna.

**Tips:** Ekko-formelen er:
$$s = \\frac{v \\cdot t}{2}$$

der s er avstand til objektet, v er lydens hastighet, og t er tiden fra du roper til du hører ekkoet.`,
      },
    },

    // ========== OPPGAVE EXTRA 3: BØLGELENGDE LYS ==========
    {
      id: 'nat10-3-4-oppg-extra-3',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-4-oppg-extra-3',
        number: '3.4.11',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken farge av synlig lys har lengst bølgelengde?',
        options: [
          'Fiolett (ca. 400 nm)',
          'Grønn (ca. 550 nm)',
          'Rød (ca. 700 nm)',
          'Blå (ca. 450 nm)',
        ],
        answer: 2,
        solution: `**Riktig svar: Rød (ca. 700 nm)**

**Synlig lys, sortert fra kort til lang bølgelengde:**

| Farge | Bølgelengde |
|-------|------------|
| Fiolett | 400 nm (kortest) |
| Blå | 450 nm |
| Grønn | 550 nm |
| Gul | 580 nm |
| Oransje | 600 nm |
| Rød | 700 nm (lengst) |

**Huskeregel:** Rødt lys har lengst bølgelengde og lavest frekvens av synlig lys. Fiolett har kortest bølgelengde og høyest frekvens.

**Utenfor synlig lys:**
- Lengre enn rødt → Infrarød (IR)
- Kortere enn fiolett → Ultrafiolett (UV)`,
      },
    },

    // ========== OPPGAVE EXTRA 4: MEKANISKE VS EM BØLGER ==========
    {
      id: 'nat10-3-4-oppg-extra-4',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-4-oppg-extra-4',
        number: '3.4.12',
        type: 'classic',
        difficulty: 'medium',
        task: `Avgjør om følgende bølger er mekaniske eller elektromagnetiske. Begrunn svarene dine.

a) Lydbølger
b) Røntgenstråler
c) Vannbølger
d) WiFi-signaler
e) Jordskjelvbølger`,
        solution: `**a) Lydbølger: MEKANISK**
Lydbølger er trykkbølger som trenger et medium (luft, vann, fast stoff). De kan ikke bevege seg i vakuum.

**b) Røntgenstråler: ELEKTROMAGNETISK**
Røntgenstråler er elektromagnetisk stråling med kort bølgelengde. De trenger ikke medium og beveger seg med lysets hastighet.

**c) Vannbølger: MEKANISK**
Vannbølger er forstyrrelser i vannoverflaten. De trenger vann (medium) for å eksistere.

**d) WiFi-signaler: ELEKTROMAGNETISK**
WiFi bruker radiobølger (ca. 2,4 GHz eller 5 GHz), som er elektromagnetisk stråling. De trenger ikke medium.

**e) Jordskjelvbølger: MEKANISK**
Jordskjelvbølger (seismiske bølger) beveger seg gjennom jordskorpen. De trenger et fast medium.

**Oppsummering:**
| Bølge | Type | Trenger medium? |
|-------|------|----------------|
| Lyd | Mekanisk | Ja |
| Røntgen | Elektromagnetisk | Nei |
| Vann | Mekanisk | Ja |
| WiFi | Elektromagnetisk | Nei |
| Jordskjelv | Mekanisk | Ja |`,
      },
    },

    // ========== OPPGAVE EXTRA 5: DOPPLER-EFFEKTEN ==========
    {
      id: 'nat10-3-4-oppg-extra-5',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-4-oppg-extra-5',
        number: '3.4.13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Har du lagt merke til at en ambulansesirene høres høyere (lysere tone) når den kjører mot deg, og lavere (dypere tone) når den kjører bort fra deg?

a) Hva heter dette fenomenet?
b) Forklar hvorfor tonen endres med egne ord.
c) Gjelder dette også for lys? Gi et eksempel.`,
        solution: `**a) Fenomenets navn:**

Dette kalles **Doppler-effekten**, oppkalt etter fysikeren Christian Doppler.

---

**b) Forklaring:**

Når ambulansen kjører mot deg:
- Lydbølgene "presses sammen" foran ambulansen
- Bølgelengden blir kortere
- Kortere bølgelengde = høyere frekvens = høyere tone

Når ambulansen kjører bort fra deg:
- Lydbølgene "strekkes ut" bak ambulansen
- Bølgelengden blir lengre
- Lengre bølgelengde = lavere frekvens = dypere tone

Selve sirenen endrer seg ikke – det er bare din opplevelse av lyden som endres!

---

**c) Gjelder det for lys?**

**Ja!** Doppler-effekten gjelder for alle bølger, inkludert lys:

- **Rødforskyvning:** Galakser som beveger seg bort fra oss ser rødere ut (lengre bølgelengde). Dette er beviset for at universet utvider seg!
- **Blåforskyvning:** Objekter som beveger seg mot oss ser blåere ut (kortere bølgelengde).

Astronomen Edwin Hubble brukte rødforskyvning til å oppdage at universet ekspanderer.`,
      },
    },

    // ========== OPPGAVE EXTRA 6: SOLKREM OG UV-STRÅLING ==========
    {
      id: 'nat10-3-4-oppg-extra-6',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-4-oppg-extra-6',
        number: '3.4.14',
        type: 'classic',
        difficulty: 'medium',
        task: `En solkrem har SPF 30 (Sun Protection Factor). Det betyr at den filtrerer bort ca. 97% av UV-B-strålingen.

a) Hvor mange prosent av UV-B slipper gjennom?
b) Hvis du normalt blir solbrent etter 10 minutter uten solkrem, hvor lenge kan du være i solen med SPF 30?
c) Hvorfor bør man smøre seg på nytt etter 2 timer, selv med høy SPF?`,
        solution: `**a) Prosent UV-B som slipper gjennom:**

100% - 97% = **3% av UV-B slipper gjennom**

---

**b) Tid i solen med SPF 30:**

SPF-tallet forteller hvor mange ganger lenger du kan være i solen:

Tid med solkrem = Normal tid × SPF = 10 min × 30 = **300 minutter = 5 timer**

**Men dette er teoretisk!** I praksis bør man smøre seg på nytt mye oftere.

---

**c) Hvorfor smøre på nytt etter 2 timer?**

1. **Solkremen slites av** – svette, friksjon fra klær og håndklær fjerner solkrem
2. **Bading/svømming** – vann vasker bort solkrem, selv "vannavvisende" typer
3. **Kjemisk nedbrytning** – UV-strålingen bryter ned de aktive stoffene i solkremen over tid
4. **For lite påført** – de fleste smører på seg for lite solkrem (bare halvparten av anbefalt mengde)

**Anbefaling:** Smør på nytt minst hver 2. time, og etter bading/svetting, uansett SPF-verdi.`,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'nat10-3-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Viktigste punkter

**Bølger:**
- Overfører energi uten å flytte masse
- Mekaniske bølger trenger medium (lyd)
- Elektromagnetiske bølger trenger ikke medium (lys)

**Bølgeegenskaper:**
- **Bølgelengde (λ):** Avstand mellom to bølgetopper
- **Frekvens (f):** Antall bølger per sekund (Hz)
- **Amplitude (A):** Bølgens høyde (styrke)
- **Formel:** v = f · λ

**Lydbølger:**
- Mekaniske trykkbølger
- Hastighet i luft: 340 m/s
- Høy frekvens = høy tone
- Stor amplitude = høyt volum

**Elektromagnetisk stråling:**
- Bølger av elektriske og magnetiske felt
- Beveger seg med lysets hastighet: c = 3·10⁸ m/s
- Trenger ikke medium

**Det elektromagnetiske spekteret (fra lang til kort bølgelengde):**
1. Radiobølger
2. Mikrobølger
3. Infrarød (IR) – varme
4. Synlig lys (400–700 nm)
5. Ultrafiolett (UV)
6. Røntgen
7. Gammastråler

**Stråling og helse:**
- **Ikke-ioniserende:** Trygg (radio, lys, IR)
- **Ioniserende:** Farlig (UV, røntgen, gamma)
- UV-stråling: Gir D-vitamin, men kan gi hudkreft
- Beskyttelse: Solkrem, skygge, klær

### Neste steg

Nå som du kan om bølger og stråling, er du klar til å:
- Forstå hvordan moderne teknologi (radio, mobil, WiFi) fungerer
- Beskrive farene ved ulike typer stråling
- Bruke bølgeformelen til å beregne bølgelengde og frekvens

Husk: Bølger er overalt – fra musikk til lys til mobilen din!`,
    },
  ],
  exercises: [], // Oppgavene er embedded i content
};

// ============================================================================
// Kapittel 3.5: Energiproduksjon og miljø
// LK20: Beskrive energikilder og deres påvirkning på miljøet
// ============================================================================

export const CHAPTER_NAT10_3_5: TextbookChapter = {
  id: 'naturfag-10-3-5',
  courseId: 'naturfag-10',
  chapterNumber: '3.5',
  title: 'Energiproduksjon og miljø',
  description: 'Utforsk ulike energikilder og deres påvirkning på miljøet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive ulike energikilder og hvordan de produserer energi',
    'drøfte fordeler og ulemper ved ulike energikilder',
    'vurdere energikildenes påvirkning på miljø og klima',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'nat10-3-5-intro',
      type: 'text',
      content: `## Energiproduksjon og miljø

Hver dag bruker vi enorme mengder energi – til å varme hus, kjøre biler, lade mobiler og mye mer. Men hvor kommer all denne energien fra? Og hva koster det miljøet?

I dette kapitlet lærer du:
- Hva som skiller fornybare og ikke-fornybare energikilder
- Hvordan ulike energikilder fungerer (fossile brennstoff, vannkraft, vindkraft, solenergi, kjernekraft)
- Fordeler og ulemper ved hver energikilde
- Hvordan energiproduksjon påvirker miljøet
- Hva som må til for en bærekraftig energiframtid`,
    },

    // ========== FORNYBARE VS. IKKE-FORNYBARE ==========
    {
      id: 'nat10-3-5-fornybare-vs-ikke',
      type: 'text',
      content: `## Fornybare vs. ikke-fornybare energikilder

Energikilder deles inn i to hovedgrupper:

### Ikke-fornybare energikilder

**Ikke-fornybare energikilder** er energikilder som brukes opp og ikke kan fornyes innen rimelig tid.

**Eksempler:**
- **Fossile brennstoff** (olje, gass, kull) – dannet over millioner av år
- **Kjernekraft** (uran) – begrenset tilgang på uran

**Egenskaper:**
- Tar millioner av år å danne
- Begrensede ressurser
- Vil før eller siden ta slutt
- Ofte store miljøkonsekvenser (CO₂-utslipp)

### Fornybare energikilder

**Fornybare energikilder** er energikilder som fornyer seg selv hele tiden eller innen kort tid.

**Eksempler:**
- **Vannkraft** – vann renner hele tiden
- **Vindkraft** – vinden blåser hele tiden
- **Solenergi** – solen skinner hver dag
- **Bioenergi** – planter vokser på kort tid
- **Geotermisk energi** – varme fra jordens indre

**Egenskaper:**
- Fornyes naturlig
- Uuttømmelige ressurser
- Mindre miljøpåvirkning (ingen direkte CO₂-utslipp)
- Men kan ha andre miljøkonsekvenser (f.eks. naturinngrep)`,
    },

    // ========== DEFINISJON: FORNYBAR ENERGI ==========
    {
      id: 'nat10-3-5-def-fornybar',
      type: 'definition',
      title: 'Fornybar energi',
      content: `**Fornybar energi** er energi fra kilder som fornyer seg selv naturlig og ikke brukes opp.

Eksempler: Solen, vind, vann, bioenergi, geotermisk energi.

**Ikke-fornybar energi** er energi fra kilder som brukes opp og tar svært lang tid å danne.

Eksempler: Fossile brennstoff (olje, gass, kull), kjernekraft (uran).`,
    },

    // ========== FOSSILE BRENNSTOFF ==========
    {
      id: 'nat10-3-5-fossile-brennstoff',
      type: 'text',
      content: `## Fossile brennstoff

Fossile brennstoff (olje, gass, kull) er de viktigste energikildene i verden i dag. De dekker over 80% av verdens energibehov.

### Hva er fossile brennstoff?

**Fossile brennstoff** er rester av planter og dyr som levde for millioner av år siden.

**Hvordan dannes de:**
1. Planter og dyr dør og synker til bunns av hav eller sumper
2. De dekkes av sedimenter (sand, leire)
3. Over millioner av år utsettes de for høyt trykk og temperatur
4. De omdannes til olje, gass eller kull

### Typer fossile brennstoff

**1. Olje (petroleum)**
- Flytende brennstoff
- Brukes til bensin, diesel, fyringsolje
- Norge er en stor oljeprodusent

**2. Naturgass**
- Gassformig brennstoff
- Brukes til oppvarming og elektrisitetsproduksjon
- "Renere" enn olje og kull (mindre CO₂ per energienhet)

**3. Kull**
- Fast brennstoff
- Brukes mye til elektrisitetsproduksjon i Asia
- Mest forurensende av de fossile brennstoffene

### Fordeler med fossile brennstoff

✓ **Høy energitetthet** – mye energi per volum
✓ **Pålitelig** – produserer energi uavhengig av vær
✓ **Enkel lagring** – kan lagres og transporteres
✓ **Etablert teknologi** – fungerer godt
✓ **Billig** (foreløpig)

### Ulemper med fossile brennstoff

✗ **Begrensede ressurser** – vil ta slutt
✗ **CO₂-utslipp** – hovedårsak til global oppvarming
✗ **Luftforurensning** – helseskadelig
✗ **Oljeutslipp** – ødelegger natur og dyreliv
✗ **Ikke-fornybart** – brukes opp

### Miljøpåvirkning

Når fossile brennstoff brennes, skjer en **forbrenningsreaksjon**:

**Forbrenning av kull (karbon):**

$$\\text{C} + \\text{O}_2 \\rightarrow \\text{CO}_2$$

**Forbrenning av naturgass (metan):**

$$\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$$

**Resultat:**
- CO₂ (karbondioksid) slippes ut i atmosfæren
- CO₂ er en **drivhusgass** som bidrar til global oppvarming
- Også andre forurensende gasser: SO₂, NOₓ

**Globale konsekvenser:**
- **Klimaendringer** – høyere temperaturer
- **Issmelting** – havnivået stiger
- **Ekstremvær** – mer tørke, flom, orkaner`,
    },

    // ========== VANNKRAFT ==========
    {
      id: 'nat10-3-5-vannkraft',
      type: 'text',
      content: `## Vannkraft

Vannkraft er Norges viktigste energikilde. Over 90% av Norges elektrisitet kommer fra vannkraft.

### Hvordan fungerer vannkraft?

**Prinsipp:** Vann fra høyder drives ned gjennom rør til turbiner som produserer elektrisitet.

**Trinn i vannkraftproduksjon:**

1. **Vann samles i et magasin** (demning)
   - Vann har høy potensiell energi (E_p = mgh)

2. **Vann renner ned gjennom rør** (inntak)
   - Potensiell energi → kinetisk energi

3. **Vann treffer turbinblader**
   - Kinetisk energi → rotasjonsenergi

4. **Turbinen driver en generator**
   - Rotasjonsenergi → elektrisk energi

5. **Vann renner ut i elv**

### Energiomforming

$$\\text{Potensiell energi} \\rightarrow \\text{Kinetisk energi} \\rightarrow \\text{Elektrisk energi}$$

### Norges vannkraftsituasjon

- **Over 1700 vannkraftverk** i Norge
- **Produserer ca. 95% av Norges elektrisitet**
- **Gir ren energi** – ingen CO₂-utslipp
- **Mulig takket være** – mye nedbør, fjell og daler

### Fordeler med vannkraft

✓ **Fornybar** – vann renner hele tiden (nedbør)
✓ **Ingen CO₂-utslipp** under drift
✓ **Pålitelig** – kan reguleres etter behov
✓ **Lang levetid** – kraftverk kan vare 100+ år
✓ **Energilagring** – magasiner lagrer energi (som potesiell energi i vann)

### Ulemper med vannkraft

✗ **Naturinngrep** – demninger endrer elveløp og landskap
✗ **Påvirker dyreliv** – fisken kan ikke vandre fritt
✗ **Lokale miljøproblemer** – tørrlagte elvestrekninger
✗ **Estetikk** – magasiner kan endre landskapet
✗ **Avhengig av nedbør** – tørke kan gi mindre produksjon

### Hvordan gjøres vannkraft mer miljøvennlig?

- **Fiskemerdere** – lar fisk passere
- **Minstevannføring** – sikrer vann i elven
- **Miljøtilpasning** – mindre inngrep`,
    },

    // ========== VINDKRAFT ==========
    {
      id: 'nat10-3-5-vindkraft',
      type: 'text',
      content: `## Vindkraft

Vindkraft er en raskt voksende energikilde i verden. Vinden driver turbiner som produserer elektrisitet.

### Hvordan fungerer vindkraft?

**Prinsipp:** Vind får rotorblader til å rotere, som driver en generator.

**Trinn i vindkraftproduksjon:**

1. **Vind treffer rotorblader**
   - Vindens kinetiske energi

2. **Rotorbladene roterer**
   - Kinetisk energi → rotasjonsenergi

3. **Rotor driver generator**
   - Rotasjonsenergi → elektrisk energi

### Energiomforming

$$\\text{Kinetisk energi (vind)} \\rightarrow \\text{Rotasjonsenergi} \\rightarrow \\text{Elektrisk energi}$$

### Typer vindkraft

**1. Landbasert vindkraft**
- Vindturbiner på land
- Billigere å bygge
- Visuell påvirkning på landskapet

**2. Havvind (offshore)**
- Vindturbiner til havs
- Sterkere og mer stabil vind
- Dyrere å bygge, men mer effektiv
- Mindre visuell påvirkning

### Fordeler med vindkraft

✓ **Fornybar** – vinden blåser hele tiden
✓ **Ingen CO₂-utslipp** under drift
✓ **Lave driftskostnader** – når først installert
✓ **Kan kombineres med annen bruk** – jordbruk under turbiner
✓ **Ingen brennstoff nødvendig**

### Ulemper med vindkraft

✗ **Ustabil produksjon** – avhengig av vind
✗ **Støy** – kan være plagsomt for naboer
✗ **Visuell påvirkning** – endrer landskapet
✗ **Fugle- og flaggermusdød** – kan kollidere med blader
✗ **Høye oppstartskostnader**

### Vindkraft i Norge

- **Økende utbygging** – særlig på Vestlandet
- **Kontroversielt** – bekymring for natur og rein
- **Havvindprosjekter** – flere planlagt`,
    },

    // ========== SOLENERGI ==========
    {
      id: 'nat10-3-5-solenergi',
      type: 'text',
      content: `## Solenergi

Solen sender enorme mengder energi til jorda hver dag. Solenergi er verdens raskest voksende energikilde.

### To hovedtyper solenergi

**1. Solceller (fotovoltaisk)**
- Omformer **sollys direkte til elektrisitet**
- Brukes på tak, i solcelleparker
- Basert på silisium

**Energiomforming:**

$$\\text{Lysenergi} \\rightarrow \\text{Elektrisk energi}$$

**2. Solfangere (solvarme)**
- Bruker solen til å **varme opp vann**
- Brukes til oppvarming av hus og varmtvann
- Enklere teknologi enn solceller

**Energiomforming:**

$$\\text{Lysenergi} \\rightarrow \\text{Termisk energi (varme)}$$

### Fordeler med solenergi

✓ **Fornybar** – solen skinner hver dag
✓ **Ingen CO₂-utslipp** under drift
✓ **Uuttømmelig** – solen vil skinne i milliarder av år
✓ **Kan installeres på tak** – ingen ekstra areal
✓ **Lave driftskostnader**
✓ **Stille** – ingen støy

### Ulemper med solenergi

✗ **Ustabil produksjon** – kun om dagen, avhengig av vær
✗ **Krever energilagring** – batterier dyrt
✗ **Lav intensitet i Norge** – mindre sol enn sørlige land
✗ **Høye oppstartskostnader**
✗ **Krever plass** – store solcelleparker

### Solenergi i Norge

- **Utfordrende** – lite sol, spesielt om vinteren
- **Økende bruk** – flere private hus med solceller
- **Kombinert med vannkraft** – kan utfylle hverandre`,
    },

    // ========== KJERNEKRAFT ==========
    {
      id: 'nat10-3-5-kjernekraft',
      type: 'text',
      content: `## Kjernekraft

Kjernekraft produserer energi gjennom **kjernefisjon** – splitting av atomkjerner. Det er en kontroversiell energikilde.

### Hvordan fungerer kjernekraft?

**Prinsipp:** Uranatomer splittes (fisjon), frigjør enorm energi som varme, som driver turbiner.

**Trinn i kjernekraftproduksjon:**

1. **Neutron treffer uranatom (U-235)**
2. **Uranatomet splittes** (fisjon)
3. **Frigjør enorm energi** (varme) + nye neutroner
4. **Kjedereaksjon** – nye neutroner splitter flere atomer
5. **Varmen koker vann** → damp
6. **Dampen driver turbiner** → elektrisitet

### Energiomforming

$$\\text{Kjerneenergi} \\rightarrow \\text{Termisk energi} \\rightarrow \\text{Kinetisk energi} \\rightarrow \\text{Elektrisk energi}$$

### Fordeler med kjernekraft

✓ **Ingen CO₂-utslipp** under drift
✓ **Svært høy energitetthet** – lite brennstoff gir mye energi
✓ **Pålitelig** – produserer energi uavhengig av vær
✓ **Lang driftstid** – kan gå kontinuerlig

### Ulemper med kjernekraft

✗ **Radioaktivt avfall** – farlig i tusenvis av år
✗ **Ulykkerisiko** – Tsjernobyl, Fukushima
✗ **Høye byggekostnader**
✗ **Nedrustning tar tid** – dyr og langvarig prosess
✗ **Begrenset uran** – ikke-fornybart
✗ **Sikkerhetsproblemer** – frykt for terrorangrep

### Kjernekraft i verden

- **Frankrike** – 70% av elektrisiteten fra kjernekraft
- **Norge** – ingen kjernekraftverk
- **Tyskland** – faseutfasing av kjernekraft

### Er kjernekraft fremtidens løsning?

**For:**
- Kan erstatte fossile brennstoff
- Ingen CO₂-utslipp

**Mot:**
- Avfallsproblemer
- Sikkerhetsrisiko`,
    },

    // ========== MILJØPÅVIRKNING ==========
    {
      id: 'nat10-3-5-miljopåvirkning',
      type: 'text',
      content: `## Miljøpåvirkning av energiproduksjon

Alle energikilder påvirker miljøet på en eller annen måte – men i svært ulik grad.

### CO₂-utslipp fra ulike energikilder

**Høye CO₂-utslipp (g CO₂ per kWh):**
- **Kull:** 820 g CO₂/kWh
- **Olje:** 650 g CO₂/kWh
- **Naturgass:** 490 g CO₂/kWh

**Lave CO₂-utslipp (g CO₂ per kWh):**
- **Solenergi:** 40 g CO₂/kWh (produksjon av paneler)
- **Vindkraft:** 11 g CO₂/kWh (produksjon av turbiner)
- **Vannkraft:** 24 g CO₂/kWh (bygging)
- **Kjernekraft:** 12 g CO₂/kWh (bygging og gruvedrift)

**Fornybare energikilder** har nesten ingen direkte CO₂-utslipp, men noe fra produksjon og installasjon av utstyr.

### Andre miljøpåvirkninger

**Fossile brennstoff:**
- Luftforurensning (SO₂, NOₓ, partikler)
- Global oppvarming (CO₂)
- Havforsuring (CO₂ løses i hav)
- Oljeutslipp (ødelegger dyreliv)

**Vannkraft:**
- Naturinngrep (demninger)
- Endret elveløp
- Påvirker fiskebestand

**Vindkraft:**
- Støy
- Visuell påvirkning
- Fugle- og flaggermusdød

**Solenergi:**
- Arealbruk (store solcelleparker)
- Produksjon av paneler (kjemikalier)

**Kjernekraft:**
- Radioaktivt avfall
- Ulykkerisiko
- Gruvedrift (uran)`,
    },

    // ========== ENERGIFRAMTIDEN ==========
    {
      id: 'nat10-3-5-energiframtiden',
      type: 'text',
      content: `## Energiframtiden

Verden står overfor en stor utfordring: Hvordan kan vi produsere nok energi til en voksende befolkning, og samtidig redusere klimagassutslipp?

### Hva må til for en bærekraftig energiframtid?

**1. Overgang til fornybar energi**
- Fase ut fossile brennstoff
- Bygg ut sol, vind, vannkraft

**2. Energieffektivisering**
- Bruk mindre energi
- Bedre isolasjon i hus
- Mer effektive apparater

**3. Energilagring**
- Batterier for sol- og vindkraft
- Hydrogenproduksjon (Power-to-X)

**4. Smartere nett**
- Digitale strømnett som balanserer produksjon og forbruk

**5. Elektrifisering**
- Elektriske biler
- Elektrisk oppvarming
- Elektrisk industri

### Energimiks – kombinasjon av kilder

**Ingen enkelt energikilde er perfekt.** Fremtidens energisystem vil trolig være en **miks av flere fornybare kilder:**

- **Vannkraft** – grunnlast (stabil produksjon)
- **Vindkraft** – når det blåser
- **Solenergi** – om dagen
- **Bioenergi** – backup
- **Batterier** – lagring

### Norges rolle

- **Vannkraftland** – eksporterer ren energi
- **Olje- og gassnasjon** – utfordring å fase ut
- **Grønn omstilling** – elektrifisering av transport og industri

### Din rolle

Hva kan **du** gjøre for en bærekraftig energiframtid?

- **Spar energi** – slå av lys, apparater
- **Gå, sykkel, kollektiv** – mindre bil
- **Kjøp bevisst** – velg energieffektive produkter
- **Del kunnskap** – del kunnskap om energi og klima med andre`,
    },

    // ========== EKSEMPEL: SAMMENLIGNE ENERGIKILDER ==========
    {
      id: 'nat10-3-5-example-1',
      type: 'example',
      title: 'Eksempel: Sammenligne energikilder',
      problem: `Lag en oversiktlig sammenligning av tre energikilder: vannkraft, vindkraft og kull. Vurder fornybarhet, CO₂-utslipp, pålitelighet og miljøpåvirkning.`,
      solution: `**Sammenligning av energikilder:**

| Egenskap | Vannkraft | Vindkraft | Kull |
|----------|-----------|-----------|------|
| **Fornybar?** | Ja | Ja | Nei |
| **CO₂-utslipp** | 24 g/kWh | 11 g/kWh | 820 g/kWh |
| **Pålitelighet** | Svært god (regulerbar) | Ustabil (avhengig av vind) | Svært god (kan kjøre hele tiden) |
| **Virkningsgrad** | 85-90% | 35-45% | 35-40% |
| **Naturinngrep** | Demninger, endret elveløp | Visuell, fugler/flaggermus | Gruvedrift, luftforurensning |
| **Levetid** | 100+ år | 20-30 år | 30-50 år |
| **Norsk relevans** | 95% av strømproduksjonen | Økende utbygging | Ikke brukt i Norge |

**Konklusjon:**
Vannkraft er den beste helhetlige løsningen for Norge: fornybar, regulerbar, lav CO₂ og lang levetid. Vindkraft er et godt supplement. Kull bør fases ut globalt.`,
    },

    // ========== EKSEMPEL: BEREGNE CO₂-UTSLIPP ==========
    {
      id: 'nat10-3-5-example-2',
      type: 'example',
      title: 'Eksempel: Beregne CO₂-utslipp fra energiproduksjon',
      problem: `Et kullkraftverk produserer 500 000 kWh energi per dag. Kullkraft slipper ut 820 g CO₂ per kWh.

a) Beregn daglige CO₂-utslipp i tonn.
b) Beregn årlige CO₂-utslipp i tonn.
c) Hvor mye CO₂ ville blitt spart hvis kullkraftverket ble erstattet med vindkraft (11 g CO₂/kWh)?`,
      solution: `**a) Daglige CO₂-utslipp:**

Daglig produksjon = 500 000 kWh
CO₂ per kWh = 820 g = 0,82 kg

Daglig CO₂ = 500 000 × 0,82 kg = 410 000 kg = **410 tonn CO₂ per dag**

---

**b) Årlige CO₂-utslipp:**

Årlig CO₂ = 410 tonn/dag × 365 dager = **149 650 tonn CO₂ per år**

Det er nesten 150 000 tonn CO₂!

---

**c) Besparelse med vindkraft:**

CO₂ fra vindkraft per dag = 500 000 × 0,011 kg = 5500 kg = 5,5 tonn/dag
CO₂ fra kull per dag = 410 tonn/dag

Daglig besparelse = 410 - 5,5 = **404,5 tonn CO₂ per dag**

Årlig besparelse = 404,5 × 365 = **147 643 tonn CO₂ per år**

**Konklusjon:** Ved å erstatte kullkraft med vindkraft spares nesten 150 000 tonn CO₂ per år. Det tilsvarer utslippene fra ca. 18 000 nordmenn!`,
    },

    // ========== EKSEMPEL: VIRKNINGSGRAD VANNKRAFTVERK ==========
    {
      id: 'nat10-3-5-example-3',
      type: 'example',
      title: 'Eksempel: Virkningsgrad i vannkraftverk',
      problem: `Et vannkraftverk har et magasin 300 meter over turbinene. Per sekund renner 200 kg vann ned. Kraftverket produserer 530 kW elektrisk effekt.

a) Beregn den potensielle energien per sekund (bruk g = 10 m/s²).
b) Beregn virkningsgraden til kraftverket.`,
      solution: `**a) Potensiell energi per sekund:**

E_p = mgh = 200 kg × 10 m/s² × 300 m = **600 000 J per sekund = 600 kW**

(Energi per sekund = effekt, altså 600 kW tilgjengelig effekt)

---

**b) Virkningsgrad:**

η = (Nyttig energi ut / Total energi inn) × 100%

η = (530 kW / 600 kW) × 100% = **88,3%**

**Tolkning:**
88,3% av vannets potensielle energi blir til nyttig elektrisitet. Resten (11,7%) tapes til friksjon i rør, turbiner og generator, samt varme.

**Sammenligning:**
- Vannkraft: 88% (svært høy)
- Vindkraft: 35-45%
- Kullkraft: 35-40%
- Solceller: 15-25%

Vannkraft er en av de mest effektive energikildene!`,
    },

    // ========== OPPGAVE 1: FORNYBARE VS. IKKE-FORNYBARE (LETT) ==========
    {
      id: 'nat10-3-5-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-5-ex-1',
        number: '3.5.1',
        type: 'exercise',
        difficulty: 'lett',
        task: 'Hvilke av disse energikildene er fornybare?',
        options: [
          { id: 'a', text: 'Vindkraft', isCorrect: true },
          { id: 'b', text: 'Kull', isCorrect: false },
          { id: 'c', text: 'Solenergi', isCorrect: true },
          { id: 'd', text: 'Olje', isCorrect: false },
        ],
        solution: `**Riktige svar: Vindkraft og Solenergi**

**Forklaring:**

**Fornybare energikilder** (fornyer seg naturlig):
- ✓ **Vindkraft** – vinden blåser hele tiden
- ✓ **Solenergi** – solen skinner hver dag

**Ikke-fornybare energikilder** (brukes opp):
- ✗ **Kull** – fossilt brennstoff, tar millioner år å danne
- ✗ **Olje** – fossilt brennstoff, tar millioner år å danne

**Husk:** Fornybare energikilder kan ikke "brukes opp" fordi de fornyer seg naturlig.`,
      },
    },

    // ========== OPPGAVE 2: VANNKRAFTPRODUKSJON (LETT) ==========
    {
      id: 'nat10-3-5-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-5-ex-2',
        number: '3.5.2',
        type: 'exercise',
        difficulty: 'lett',
        task: 'Hvordan produseres elektrisitet i et vannkraftverk?',
        options: [
          { id: 'a', text: 'Vann koker og lager damp som driver turbiner', isCorrect: false },
          { id: 'b', text: 'Vann renner ned og driver turbiner som produserer elektrisitet', isCorrect: true },
          { id: 'c', text: 'Vann blandes med kjemikalier som lager elektrisitet', isCorrect: false },
          { id: 'd', text: 'Vann fryses og varmes opp om og om igjen', isCorrect: false },
        ],
        solution: `**Riktig svar: Vann renner ned og driver turbiner som produserer elektrisitet**

**Forklaring:**

**Vannkraft fungerer slik:**

1. **Vann samles i et magasin** (demning)
   - Høy potensiell energi (E_p = mgh)

2. **Vann renner ned gjennom rør**
   - Potensiell energi → kinetisk energi

3. **Vann treffer turbinblader**
   - Kinetisk energi → rotasjonsenergi

4. **Turbinen driver en generator**
   - Rotasjonsenergi → elektrisk energi

**Energiomforming:**

$$\\text{Potensiell energi} \\rightarrow \\text{Kinetisk energi} \\rightarrow \\text{Elektrisk energi}$$

**Viktig:** Vannkraft bruker vannets bevegelsesenergi – IKKE damp som i kullkraftverk.`,
      },
    },

    // ========== OPPGAVE 3: CO₂-UTSLIPP (LETT) ==========
    {
      id: 'nat10-3-5-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-5-ex-3',
        number: '3.5.3',
        type: 'exercise',
        difficulty: 'lett',
        task: 'Hvilken energikilde slipper ut mest CO₂?',
        options: [
          { id: 'a', text: 'Vindkraft', isCorrect: false },
          { id: 'b', text: 'Kull', isCorrect: true },
          { id: 'c', text: 'Vannkraft', isCorrect: false },
          { id: 'd', text: 'Solenergi', isCorrect: false },
        ],
        solution: `**Riktig svar: Kull**

**Forklaring:**

**CO₂-utslipp fra ulike energikilder (g CO₂ per kWh):**

**Fossile brennstoff (høye utslipp):**
- **Kull:** 820 g CO₂/kWh (HØYEST)
- Olje: 650 g CO₂/kWh
- Naturgass: 490 g CO₂/kWh

**Fornybare energikilder (lave utslipp):**
- Solenergi: 40 g CO₂/kWh
- Vindkraft: 11 g CO₂/kWh
- Vannkraft: 24 g CO₂/kWh

**Hvorfor slipper kull ut så mye CO₂?**

Når kull brennes:

$$\\text{C} + \\text{O}_2 \\rightarrow \\text{CO}_2$$

Kull består nesten bare av karbon (C), og all karbonen blir til CO₂ ved forbrenning.

**Viktig:** Kull er den mest forurensende energikilden og hovedårsaken til global oppvarming.`,
      },
    },

    // ========== OPPGAVE 4: ENERGIKILDER (MEDIUM) ==========
    {
      id: 'nat10-3-5-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-5-ex-4',
        number: '3.5.4',
        type: 'classic',
        difficulty: 'medium',
        task: `Fyll ut tabellen og sammenlign tre energikilder:

| Energikilde | Fornybar? (Ja/Nei) | CO₂-utslipp (Høyt/Lavt/Ingen) | Én fordel | Én ulempe |
|-------------|-------------------|-------------------------------|-----------|-----------|
| Vindkraft   | ?                 | ?                             | ?         | ?         |
| Naturgass   | ?                 | ?                             | ?         | ?         |
| Solenergi   | ?                 | ?                             | ?         | ?         |`,
        multipleChoiceOptions: [
          'Vindkraft: Ja/Lavt, Naturgass: Nei/Høyt, Solenergi: Ja/Lavt',
          'Vindkraft: Nei/Høyt, Naturgass: Ja/Lavt, Solenergi: Nei/Høyt',
          'Vindkraft: Ja/Høyt, Naturgass: Nei/Lavt, Solenergi: Ja/Høyt',
          'Vindkraft: Nei/Lavt, Naturgass: Ja/Høyt, Solenergi: Nei/Lavt',
        ],
        solution: `**Utfylt tabell:**

| Energikilde | Fornybar? | CO₂-utslipp | Én fordel | Én ulempe |
|-------------|-----------|-------------|-----------|-----------|
| **Vindkraft** | Ja | Lavt (11 g/kWh) | Ingen CO₂-utslipp under drift | Ustabil produksjon (avhengig av vind) |
| **Naturgass** | Nei | Høyt (490 g/kWh) | Pålitelig produksjon | CO₂-utslipp, bidrar til global oppvarming |
| **Solenergi** | Ja | Lavt (40 g/kWh) | Uuttømmelig ressurs (solen) | Kun produksjon om dagen |

**Forklaring:**

**Vindkraft:**
- **Fornybar:** Vinden blåser hele tiden
- **CO₂:** Lavt (kun fra produksjon av turbiner)
- **Fordel:** Ren energi under drift
- **Ulempe:** Fungerer bare når det blåser

**Naturgass:**
- **Fornybar:** Nei (fossilt brennstoff)
- **CO₂:** Høyt (forbrenning frigjør CO₂)
- **Fordel:** Pålitelig, fungerer hele tiden
- **Ulempe:** Bidrar til klimaendringer

**Solenergi:**
- **Fornybar:** Ja (solen skinner hver dag)
- **CO₂:** Lavt (kun fra produksjon av paneler)
- **Fordel:** Solen er uuttømmelig
- **Ulempe:** Ingen produksjon om natten`,
      },
    },

    // ========== OPPGAVE 5: VANNKRAFTBEREGNING (MEDIUM) ==========
    {
      id: 'nat10-3-5-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-5-ex-5',
        number: '3.5.5',
        type: 'classic',
        difficulty: 'medium',
        task: `Et vannkraftverk har et magasin 200 meter over turbinene. Hvert sekund renner 500 kg vann ned til turbinene.

a) Hvor stor potensiell energi (E_p = mgh) har 500 kg vann i magasinet? (Bruk g = 10 m/s²)
b) Hvor mye energi produserer vannkraftverket per sekund (i joule)?
c) Hva er effekten til kraftverket (i watt)? (P = E/t, der t = 1 sekund)`,
        multipleChoiceOptions: [
          'a) 1 000 000 J (1 MJ), b) 1 000 000 J, c) 1 000 000 W (1 MW)',
          'a) 100 000 J, b) 100 000 J, c) 100 000 W',
          'a) 10 000 J, b) 10 000 J, c) 10 000 W',
          'a) 5 000 000 J, b) 5 000 000 J, c) 5 000 000 W',
        ],
        solution: `**a) Potensiell energi:**

**Gitt:**
- Masse: m = 500 kg
- Høyde: h = 200 m
- Tyngdeakselerasjon: g = 10 m/s²
- Potensiell energi: E_p = ?

**Formel:**

$$E_p = mgh$$

**Utregning:**

$$E_p = 500 \\text{ kg} \\cdot 10 \\text{ m/s}^2 \\cdot 200 \\text{ m}$$

$$E_p = 1\\,000\\,000 \\text{ J} = 1 \\text{ MJ}$$

**Svar:** 500 kg vann på 200 meters høyde har **1 000 000 J** (1 MJ) potensiell energi.

---

**b) Energi produsert per sekund:**

Hvis all potensiell energi omformes til elektrisk energi:

**Energi per sekund = 1 000 000 J**

(I virkeligheten ville noe energi gått tapt til friksjon og varme, men vi antar 100% virkningsgrad her.)

**Svar:** Kraftverket produserer **1 000 000 J** energi per sekund.

---

**c) Effekt:**

**Gitt:**
- Energi: E = 1 000 000 J
- Tid: t = 1 s
- Effekt: P = ?

**Formel:**

$$P = \\frac{E}{t}$$

**Utregning:**

$$P = \\frac{1\\,000\\,000 \\text{ J}}{1 \\text{ s}} = 1\\,000\\,000 \\text{ W}$$

**Svar:** Effekten til kraftverket er **1 000 000 W** = **1 MW** (megawatt).

**Oppsummering:**
- Potensiell energi: 1 000 000 J (1 MJ)
- Energi per sekund: 1 000 000 J
- Effekt: 1 000 000 W (1 MW)

**Forklaring:**
Vannkraften omformer vannets **potensiell energi** (fra høyde) til **elektrisk energi**. Jo høyere vann og jo mer vann, jo mer energi produseres.`,
      },
    },

    // ========== OPPGAVE 6: ENERGIOMFORMING (MEDIUM) ==========
    {
      id: 'nat10-3-5-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-5-ex-6',
        number: '3.5.6',
        type: 'classic',
        difficulty: 'medium',
        task: `Beskriv energiomformingene i følgende energikilder:

a) Vindkraft
b) Solceller
c) Kullkraftverk

Bruk denne formen: [Type energi] → [Type energi] → ... → Elektrisk energi`,
        multipleChoiceOptions: [
          'a) Kinetisk → Rotasjon → Elektrisk, b) Lys → Elektrisk, c) Kjemisk → Termisk → Kinetisk → Elektrisk',
          'a) Termisk → Elektrisk, b) Kjemisk → Lys → Elektrisk, c) Kinetisk → Elektrisk',
          'a) Potensiell → Kinetisk → Elektrisk, b) Termisk → Elektrisk, c) Lys → Kjemisk → Elektrisk',
          'a) Elektrisk → Kinetisk, b) Elektrisk → Lys, c) Elektrisk → Termisk',
        ],
        solution: `**a) Vindkraft:**

$$\\text{Kinetisk energi (vind)} \\rightarrow \\text{Rotasjonsenergi} \\rightarrow \\text{Elektrisk energi}$$

**Forklaring:**
1. **Vindens kinetiske energi** – luftpartikler i bevegelse
2. **Rotasjonsenergi** – rotorbladene spinner
3. **Elektrisk energi** – generatoren lager elektrisitet

---

**b) Solceller:**

$$\\text{Lysenergi} \\rightarrow \\text{Elektrisk energi}$$

**Forklaring:**
1. **Lysenergi** (fotoner fra solen)
2. **Elektrisk energi** – solceller omformer lys direkte til elektrisitet (fotovoltaisk effekt)

**Viktig:** Solceller har færre omformingstrinn enn andre kraftverk, men er mindre effektive (kun ca. 20% av lysenergi blir til elektrisitet).

---

**c) Kullkraftverk:**

$$\\text{Kjemisk energi} \\rightarrow \\text{Termisk energi} \\rightarrow \\text{Kinetisk energi} \\rightarrow \\text{Elektrisk energi}$$

**Forklaring:**
1. **Kjemisk energi** – lagret i kull
2. **Termisk energi** – kull brennes, lager varme
3. **Kinetisk energi** – varmen koker vann til damp, dampen beveger seg
4. **Elektrisk energi** – dampen driver turbiner som driver generatorer

**Viktig:** Kullkraftverk har mange omformingstrinn, og hvert trinn taper litt energi (virkningsgrad ca. 35-40%).

---

**Oppsummering:**

| Energikilde | Antall omforminger | Virkningsgrad |
|-------------|-------------------|---------------|
| Solceller | 1 (lys → elektrisitet) | 15-20% |
| Vindkraft | 2 (vind → rotasjon → elektrisitet) | 35-45% |
| Kullkraftverk | 3 (kjemisk → varme → bevegelse → elektrisitet) | 35-40% |

**Prinsipp:** Færre omformingstrinn gir ofte høyere virkningsgrad, men ikke alltid (solceller er mindre effektive selv med én omforming).`,
      },
    },

    // ========== OPPGAVE 7: FOSSILE BRENNSTOFF (MEDIUM) ==========
    {
      id: 'nat10-3-5-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-5-ex-7',
        number: '3.5.7',
        type: 'classic',
        difficulty: 'medium',
        task: `Naturgass (metan, CH₄) brennes i et kraftverk.

a) Skriv reaksjonslikningen for forbrenning av metan.
b) Hva skjer med CO₂ som dannes?
c) Hvorfor bidrar dette til global oppvarming?`,
        multipleChoiceOptions: [
          'a) CH₄ + 2O₂ → CO₂ + 2H₂O, b) CO₂ slippes ut i atmosfæren, c) CO₂ er en drivhusgass som fanger varmestråling',
          'a) CH₄ + O₂ → CO + H₂O, b) CO₂ forsvinner i verdensrommet, c) CO₂ reflekterer sollys tilbake',
          'a) CH₄ → C + 2H₂, b) CO₂ absorberes av planter, c) CO₂ blokkerer sollys',
          'a) CH₄ + 3O₂ → CO₂ + 3H₂O, b) CO₂ synker ned i havet, c) CO₂ øker oksygennivået',
        ],
        solution: `**a) Reaksjonslikning:**

**Forbrenning av metan (CH₄):**

$$\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$$

**Forklaring:**
- **Metan (CH₄)** reagerer med **oksygen (O₂)**
- Danner **karbondioksid (CO₂)** og **vann (H₂O)**
- Frigjør energi (varme)

**Verbalt:**
Metan + Oksygen → Karbondioksid + Vann

---

**b) Hva skjer med CO₂?**

**CO₂ slippes ut i atmosfæren:**

1. **Forbrenning** → CO₂ dannes
2. **Utslipp** → CO₂ slippes ut gjennom skorstein
3. **Atmosfæren** → CO₂ blandes med luft
4. **Langvarig** → CO₂ blir værende i atmosfæren i hundrevis av år

**Merk:** En del CO₂ løses også i havet (havforsuring), men det meste blir i atmosfæren.

---

**c) Hvorfor bidrar dette til global oppvarming?**

**CO₂ er en drivhusgass:**

**Drivhuseffekten:**
1. **Solen sender lys til jorda**
2. **Jorda varmes opp** og sender ut varmestråling
3. **CO₂ i atmosfæren fanger varmestrålingen** (som glass i et drivhus)
4. **Varmen blir værende** i atmosfæren
5. **Temperaturen øker** – global oppvarming

**Mer CO₂ → sterkere drivhuseffekt → høyere temperaturer**

**Konsekvenser:**
- **Issmelting** – isen på Grønland og Antarktis smelter
- **Havnivåstigning** – lav-liggende land oversvømmes
- **Ekstremvær** – mer tørke, flom, orkaner
- **Påvirker dyr og planter** – arter dør ut

**Svar:**
CO₂ fra forbrenning av naturgass bidrar til global oppvarming ved å forsterke drivhuseffekten.

**Oppsummering:**
- Forbrenning: CH₄ + 2O₂ → CO₂ + 2H₂O
- CO₂ slippes ut i atmosfæren
- CO₂ fanger varmestråling → global oppvarming`,
      },
    },

    // ========== OPPGAVE 8: MILJØPÅVIRKNING VINDKRAFT (MEDIUM) ==========
    {
      id: 'nat10-3-5-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-5-ex-8',
        number: '3.5.8',
        type: 'classic',
        difficulty: 'medium',
        task: `Vindkraft regnes som en fornybar og miljøvennlig energikilde.

a) Nevn to fordeler med vindkraft.
b) Nevn to miljøulemper med vindkraft.
c) Er vindkraft helt uten miljøpåvirkning? Forklar.`,
        multipleChoiceOptions: [
          'a) Ingen CO₂-utslipp, fornybar, b) Påvirker dyreliv, visuell landskapspåvirkning, c) Nei, men mye bedre enn fossil',
          'a) Høy energitetthet, stabil produksjon, b) Ingen ulemper, c) Ja, helt uten miljøpåvirkning',
          'a) Billig å bygge, lavt vedlikehold, b) Høy støy, mye avfall, c) Ja, null utslipp totalt',
          'a) Kan lagre energi, ingen arealbehov, b) Skader ozonlaget, forurenser grunnvann, c) Nei, verre enn kull',
        ],
        solution: `**a) To fordeler med vindkraft:**

**1. Ingen CO₂-utslipp under drift**
- Vindkraft produserer elektrisitet uten å brenne fossile brennstoff
- Bidrar ikke til global oppvarming (under drift)

**2. Fornybar energikilde**
- Vinden blåser hele tiden
- Kan ikke "brukes opp"
- Ingen brennstoff nødvendig

**Andre fordeler:**
- Lave driftskostnader
- Kan kombineres med annen bruk (f.eks. jordbruk under turbiner)

---

**b) To miljøulemper med vindkraft:**

**1. Påvirker dyreliv**
- Fugler og flaggermus kan kollidere med rotorblader
- Kan forstyrre fugletrekk
- Støy kan påvirke dyreliv i området

**2. Visuell påvirkning på landskapet**
- Vindturbiner endrer landskapet
- Kan oppleves som stygt
- Påvirker naturopplevelsen

**Andre ulemper:**
- Støy kan være plagsomt for naboer
- Kan påvirke reinsdrift (i samiske områder)

---

**c) Er vindkraft helt uten miljøpåvirkning?**

**Nei, vindkraft har også miljøpåvirkning – men mye mindre enn fossile brennstoff.**

**Miljøpåvirkning fra vindkraft:**

**Under drift:**
- Ingen CO₂-utslipp
- Men: støy, visuell påvirkning, dyreliv

**Livssyklus (produksjon og bygging):**
- Produksjon av turbiner krever energi (og lager litt CO₂)
- Betong til fundamenter
- Transport og installasjon
- Totalt: ca. 11 g CO₂/kWh

**Sammenligning:**
- **Vindkraft:** 11 g CO₂/kWh
- **Kull:** 820 g CO₂/kWh (75 ganger mer!)

**Konklusjon:**
Vindkraft er **langt mer miljøvennlig** enn fossile brennstoff, men ikke helt uten miljøpåvirkning.

**Viktig prinsipp:**
Ingen energikilde er perfekt. Vindkraft har ulemper (støy, visuell påvirkning, dyreliv), men fordelene (ingen CO₂, fornybar) veier tungt.

**Oppsummering:**
- Fordeler: Ingen CO₂, fornybar
- Ulemper: Dyreliv, visuell påvirkning
- Konklusjon: Ikke helt uten miljøpåvirkning, men mye bedre enn fossile brennstoff`,
      },
    },

    // ========== OPPGAVE 9: NORGES ENERGISITUASJON (MEDIUM) ==========
    {
      id: 'nat10-3-5-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-5-ex-9',
        number: '3.5.9',
        type: 'classic',
        difficulty: 'medium',
        task: `Norge er både en vannkraftnasjon og en olje- og gassnasjon.

a) Hvorfor er Norge et av verdens ledende land innen vannkraft?
b) Hva er utfordringen med at Norge både produserer ren energi (vannkraft) og fossile brennstoff (olje og gass)?
c) Hva kan Norge gjøre for å bli mer bærekraftig?`,
        multipleChoiceOptions: [
          'a) Mye nedbør, fjell og daler, b) Ren energi hjemme men eksporterer fossil, c) Fase ut olje, elektrifisering, fornybar',
          'a) Lange kyster, flat terreng, b) Importerer all energi, c) Bygge flere kullkraftverk',
          'a) Lite regn, mange elver, b) Bruker mest olje selv, c) Øke oljeproduksjonen',
          'a) Varmt klima, mye sol, b) Eksporterer vannkraft, importerer gass, c) Stoppe all energiproduksjon',
        ],
        solution: `**a) Hvorfor er Norge ledende innen vannkraft?**

**Norge har ideelle naturforhold for vannkraft:**

**1. Mye nedbør**
- Norge får enorme mengder regn og snø
- Gir mye vann til magasiner

**2. Fjell og daler**
- Høye fjell gir stor høydeforskjell
- Stor høyde = høy potensiell energi (E_p = mgh)
- Jo høyere fall, jo mer energi

**3. Egnede steder for demninger**
- Mange daler med naturlige "flaskehalser"
- Enkelt å bygge demninger

**Resultat:**
- Over 1700 vannkraftverk
- Ca. 95% av Norges elektrisitet fra vannkraft
- Eksporterer ren energi til Europa

---

**b) Utfordringen med Norge som både vannkraft- og oljenasjon:**

**Paradoks: Ren energi hjemme, fossil energi eksportert**

**Hjemme:**
- 95% ren elektrisitet (vannkraft)
- Lite CO₂-utslipp fra energiproduksjon

**Eksport:**
- Olje og gass til Europa
- Bidrar til CO₂-utslipp i andre land

**Dilemmaet:**

**Økonomisk:**
- Olje og gass gir enorme inntekter (Oljefondet)
- Finansierer velferdsstaten

**Klimamessig:**
- Norsk olje og gass brennes i utlandet
- Bidrar til global oppvarming
- Er Norge ansvarlig for utslippene?

**Etisk spørsmål:**
- Bør Norge fase ut olje og gass?
- Eller fortsette å tjene penger mens verden trenger energi?

---

**c) Hva kan Norge gjøre for å bli mer bærekraftig?**

**1. Fase ut olje og gass (gradvis)**
- Sette en sluttdato for oljeutvinning
- Satse på fornybar energi i stedet

**2. Elektrifisering**
- Elektriske ferger og skip (fjordene)
- Elektriske biler (allerede godt i gang)
- Elektrisk industri

**3. Utbygging av fornybar energi**
- Mer vindkraft (land og hav)
- Solenergi der det er mulig
- Eksportere ren energi til Europa

**4. Grønn industri**
- Bruke vannkraft til å produsere hydrogen (Power-to-X)
- Hydrogen kan erstatte fossile brennstoff

**5. Karbonfangst og -lagring (CCS)**
- Fange CO₂ fra industri og lagre det under havbunnen
- Kan redusere utslipp fra gjenværende fossile aktiviteter

**6. Energisparing**
- Bedre isolasjon i hus
- Mer effektive apparater
- Bevisstgjøring om energibruk

**Oppsummering:**
- Norge har ideelle forhold for vannkraft (nedbør, fjell)
- Utfordring: Tjener på fossil energi, men må kutte utslipp
- Løsning: Fase ut olje/gass, elektrifisering, grønn omstilling`,
      },
    },

    // ========== OPPGAVE 10: ENERGIVALG (VANSKELIG) ==========
    {
      id: 'nat10-3-5-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-5-ex-10',
        number: '3.5.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Et land ønsker å erstatte et stort kullkraftverk med fornybar energi. De vurderer tre alternativer:

**Alternativ 1: Vindkraft**
- Krever 200 vindturbiner
- Ustabil produksjon (kun når det blåser)
- Påvirker dyreliv og landskap

**Alternativ 2: Solenergi**
- Krever store solcelleparker
- Kun produksjon om dagen
- Landet har moderat solinnstråling

**Alternativ 3: Kjernekraft**
- Ett kraftverk
- Pålitelig produksjon
- Radioaktivt avfall og ulykkerisiko

a) Drøft fordeler og ulemper ved hvert alternativ.
b) Hvilket alternativ ville du anbefalt? Begrunn svaret ditt.
c) Foreslå en løsning som kombinerer flere energikilder.`,
        multipleChoiceOptions: [
          'Vindkraft: fornybar men ustabil. Sol: kun om dagen. Kjernekraft: pålitelig men radioaktivt avfall. Anbefaling: kombinasjon eller vind+lagring',
          'Alle tre er like gode. Anbefaling: velg den billigste. Kombinasjon er unødvendig',
          'Vindkraft: mest forurensende. Sol: fungerer best om natten. Kjernekraft: fornybar. Anbefaling: kun kjernekraft',
          'Vindkraft: krever olje. Sol: produserer CO₂. Kjernekraft: fornybar. Anbefaling: kull er bedre',
        ],
        solution: `**a) Fordeler og ulemper:**

---

### **Alternativ 1: Vindkraft**

**Fordeler:**
✓ **Fornybar energi** – vinden blåser hele tiden
✓ **Ingen CO₂-utslipp** under drift
✓ **Lave driftskostnader** etter installasjon
✓ **Kan kombineres med annen bruk** – jordbruk under turbiner

**Ulemper:**
✗ **Ustabil produksjon** – kun når det blåser
✗ **Krever energilagring** (batterier) – dyrt
✗ **Påvirker dyreliv** – fugler og flaggermus
✗ **Visuell påvirkning** – 200 turbiner endrer landskapet
✗ **Støy** – kan være plagsomt

**Vurdering:**
Vindkraft er fornybar og ren, men ustabil produksjon er et problem. Krever backup eller energilagring.

---

### **Alternativ 2: Solenergi**

**Fordeler:**
✓ **Fornybar energi** – solen skinner hver dag
✓ **Ingen CO₂-utslipp** under drift
✓ **Uuttømmelig ressurs**
✓ **Stille** – ingen støy

**Ulemper:**
✗ **Kun produksjon om dagen** – ingen energi om natten
✗ **Moderat solinnstråling** – ikke optimalt
✗ **Krever store arealer** – solcelleparker
✗ **Krever energilagring** – batterier for natten
✗ **Dyre oppstartskostnader**

**Vurdering:**
Solenergi er ren, men i et land med moderat sol er det ikke ideelt. Krever store investeringer i batterier.

---

### **Alternativ 3: Kjernekraft**

**Fordeler:**
✓ **Pålitelig produksjon** – fungerer døgnet rundt
✓ **Ingen CO₂-utslipp** under drift
✓ **Høy energitetthet** – ett kraftverk er nok
✓ **Kompakt** – krever lite areal

**Ulemper:**
✗ **Radioaktivt avfall** – farlig i tusenvis av år
✗ **Ulykkerisiko** – Tsjernobyl, Fukushima
✗ **Høye byggekostnader**
✗ **Lang byggetid** – 10-15 år
✗ **Ikke-fornybart** (uran)
✗ **Frykt i befolkningen** – vanskelig å få aksept

**Vurdering:**
Kjernekraft er pålitelig og CO₂-fri, men avfallsproblemer og sikkerhetsrisiko gjør det kontroversielt.

---

**b) Anbefaling:**

**Jeg ville anbefalt en kombinasjon av vindkraft og kjernekraft, eventuelt vindkraft alene med energilagring.**

**Begrunnelse:**

**Hvis målet er 100% fornybart:**
→ **Vindkraft + batterier/hydrogen-lagring**
- Fornybar energi
- Krever store investeringer i lagring
- Langsiktig bærekraftig

**Hvis målet er rask omstilling og pålitelighet:**
→ **Kjernekraft**
- Pålitelig produksjon
- Ingen CO₂-utslipp
- Men: avfallsproblemer

**Hvis målet er balanse:**
→ **Vindkraft + kjernekraft**
- Vindkraft når det blåser
- Kjernekraft som grunnlast
- Mindre behov for lagring

**Viktig:**
- **Solenergi** er ikke optimalt i land med moderat sol
- **Kjernekraft** krever samfunnsaksept (vanskelig)
- **Vindkraft** er mest realistisk, men krever lagring

**Min anbefaling:**
**Vindkraft + energilagring** – fornybar, bærekraftig, og teknologisk mulig.

---

**c) Kombinert løsning (energimiks):**

**Forslag: Hybrid energisystem**

**1. Vindkraft (60% av produksjon)**
- 200 vindturbiner
- Hovedkilde når det blåser

**2. Solenergi (20% av produksjon)**
- Solcelleparker + solceller på tak
- Utfyller vindkraft om dagen

**3. Energilagring (20% av kapasitet)**
- Batterier – lagrer overskudd fra vind/sol
- Hydrogen – Power-to-X for langtidslagring
- Brukes når vind/sol ikke produserer

**4. Backup (5% av kapasitet)**
- Biogass-kraftverk (fornybar)
- Kun når vind/sol og lagring ikke er nok

**Hvordan fungerer det:**

**Når det blåser (vind høy):**
- Vindkraft produserer elektrisitet
- Overskudd lagres i batterier/hydrogen

**Når det ikke blåser, men sol (dag):**
- Solenergi produserer elektrisitet
- Overskudd lagres

**Når verken vind eller sol (natt, vindstille):**
- Batterier/hydrogen frigjør lagret energi
- Backup (biogass) hvis nødvendig

**Fordeler med kombinert løsning:**

✓ **Stabil produksjon** – alltid nok energi
✓ **100% fornybar** – ingen fossile brennstoff
✓ **Redusert behov for lagring** – vind og sol utfyller hverandre
✓ **Fleksibel** – kan tilpasses vær og sesong

**Ulemper:**

✗ **Kompleks** – krever avansert styring
✗ **Dyr** – høye investeringer
✗ **Krever areal** – både vind, sol og lagring

**Konklusjon:**

**En kombinert energiløsning (energimiks) er den beste måten å sikre stabil, fornybar energiforsyning.**

Ingen enkelt energikilde er perfekt – men sammen kan de dekke behovet døgnet rundt, året rundt.

**Oppsummering:**
- Vindkraft: Fornybar, men ustabil
- Solenergi: Fornybar, men kun om dagen
- Kjernekraft: Pålitelig, men avfallsproblemer
- Anbefaling: Vindkraft + energilagring (eller kombinert system)
- Best løsning: Energimiks (vind + sol + lagring + backup)`,
      },
    },
    // ========== OPPGAVE EXTRA 1: ENERGITETTHET ==========
    {
      id: 'nat10-3-5-oppg-extra-1',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-5-oppg-extra-1',
        number: '3.5.11',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken energikilde har høyest energitetthet (mest energi per kg brennstoff)?',
        options: [
          'Kull',
          'Naturgass',
          'Kjernekraft (uran)',
          'Tre (bioenergi)',
        ],
        answer: 2,
        solution: `**Riktig svar: Kjernekraft (uran)**

**Forklaring:**
Uran har enormt høy energitetthet. 1 kg uran kan gi like mye energi som ca. 20 000 kg kull!

**Energitetthet (omtrentlig):**
- Tre: 15 MJ/kg
- Kull: 24 MJ/kg
- Naturgass: 55 MJ/kg
- Uran (kjernekraft): 80 000 000 MJ/kg (80 millioner!)

Dette er grunnen til at kjernekraftverk trenger svært lite brennstoff sammenlignet med kullkraftverk.`,
      },
    },

    // ========== OPPGAVE EXTRA 2: SOLCELLER BEREGNING ==========
    {
      id: 'nat10-3-5-oppg-extra-2',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-5-oppg-extra-2',
        number: '3.5.12',
        type: 'classic',
        difficulty: 'medium',
        task: `En familie installerer solceller på taket. Solcellene har et areal på 20 m² og en virkningsgrad på 20%. På en solrik dag i Norge mottar solcellene gjennomsnittlig 800 W/m² sollys i 6 timer.

a) Hvor mye solenergi treffer solcellene totalt per dag (i kWh)?
b) Hvor mye elektrisitet produserer solcellene per dag?
c) Hvis familien bruker 20 kWh strøm per dag, hvor stor andel dekker solcellene?`,
        solution: `**a) Total solenergi per dag:**

Effekt fra solen = 800 W/m² × 20 m² = 16 000 W = 16 kW

Energi per dag = 16 kW × 6 timer = **96 kWh**

---

**b) Elektrisitet produsert per dag:**

Virkningsgrad = 20% = 0,20

Elektrisitet = 96 kWh × 0,20 = **19,2 kWh per dag**

---

**c) Andel av familiens forbruk:**

Andel = (19,2 kWh / 20 kWh) × 100% = **96%**

**Tolkning:**
På en god solrik dag kan solcellene nesten dekke hele familiens strømbehov! Men husk at dette er en ideell sommerdag. Om vinteren i Norge er det mye mindre sol, og produksjonen kan være under 1 kWh/dag.

**Gjennomsnittlig årlig produksjon i Norge:**
Solceller i Sør-Norge produserer typisk ca. 150-200 kWh per m² per år.
20 m² × 175 kWh/m²/år = 3500 kWh/år (dekker ca. 48% av årsforbruk på 7300 kWh).`,
      },
    },

    // ========== OPPGAVE EXTRA 3: ENERGIMIKS ==========
    {
      id: 'nat10-3-5-oppg-extra-3',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-5-oppg-extra-3',
        number: '3.5.13',
        type: 'classic',
        difficulty: 'medium',
        task: `Forklar hvorfor et land bør bruke en kombinasjon av energikilder (energimiks) i stedet for å satse på bare én kilde. Gi eksempler.`,
        solution: `**Hvorfor energimiks er viktig:**

**1. Ingen energikilde er perfekt**
Alle energikilder har fordeler og ulemper. Ved å kombinere flere kilder kan vi utnytte fordelene og kompensere for ulempene.

**2. Forsyningssikkerhet**
Hvis landet bare bruker vindkraft og det er vindstille i en uke, mister vi all strøm. Med en miks kan andre kilder ta over.

**3. Eksempler på hvordan kilder utfyller hverandre:**

- **Vindkraft + Solenergi:** Vind blåser ofte mer om vinteren, sol skinner mer om sommeren. Sammen gir de jevnere produksjon.
- **Vannkraft + Vindkraft:** Vannkraft kan reguleres opp og ned raskt, og kompensere for ustabil vindkraft.
- **Kjernekraft + Fornybart:** Kjernekraft gir stabil grunnlast, fornybart varierer med været.

**4. Norges energimiks:**
- 95% vannkraft (regulerbar grunnlast)
- Økende vindkraft (supplement)
- Noe bioenergi og varmepumper

**Konklusjon:**
En god energimiks gir pålitelig, ren og rimelig energi. Nøkkelen er å kombinere regulerbare kilder (vannkraft) med variable kilder (vind, sol) og energilagring (batterier).`,
      },
    },

    // ========== OPPGAVE EXTRA 4: BIOENERGI ==========
    {
      id: 'nat10-3-5-oppg-extra-4',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-5-oppg-extra-4',
        number: '3.5.14',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvorfor regnes bioenergi (tre, biogass) som fornybar, selv om det slippes ut CO₂ ved forbrenning?',
        options: [
          'Fordi trær vokser opp igjen og tar opp like mye CO₂ som de slipper ut',
          'Fordi bioenergi ikke slipper ut CO₂',
          'Fordi CO₂ fra tre er annerledes enn CO₂ fra kull',
          'Fordi bioenergi bare brukes i små mengder',
        ],
        answer: 0,
        solution: `**Riktig svar: Fordi trær vokser opp igjen og tar opp like mye CO₂ som de slipper ut**

**Forklaring:**
Bioenergi er karbonnøytral i et kretsløpsperspektiv:

1. **Trær vokser** og tar opp CO₂ gjennom fotosyntese (20-100 år)
2. **Trær brennes** og slipper ut CO₂
3. **Nye trær plantes** og tar opp like mye CO₂

Det totale CO₂-nivået endres ikke over tid (forutsatt at nye trær plantes).

**Forskjellen fra fossile brennstoff:**
- Fossile brennstoff frigjør CO₂ som har vært lagret i millioner av år
- Denne CO₂-en er "ny" i kretsløpet og øker totalen

**Viktig forbehold:**
Bioenergi er bare karbonnøytralt hvis vi planter like mye skog som vi bruker!`,
      },
    },

    // ========== OPPGAVE EXTRA 5: GEOTERMISK ENERGI ==========
    {
      id: 'nat10-3-5-oppg-extra-5',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-5-oppg-extra-5',
        number: '3.5.15',
        type: 'classic',
        difficulty: 'medium',
        task: `Geotermisk energi bruker varme fra jordens indre. Island bruker geotermisk energi til oppvarming og elektrisitetsproduksjon.

a) Hvor kommer varmen fra i jordens indre?
b) Hvorfor er geotermisk energi mer tilgjengelig på Island enn i Norge?
c) Er geotermisk energi fornybar? Begrunn svaret.`,
        solution: `**a) Hvor kommer varmen fra?**

Varmen i jordens indre kommer fra:
1. **Radioaktiv nedbryting** – radioaktive stoffer (uran, thorium) i jordskorpen brytes ned og frigjør varme
2. **Restvarme fra jordas dannelse** – varme som ble til da jorda ble dannet for 4,5 milliarder år siden

Temperaturen øker med ca. 25-30°C per kilometer ned i jordskorpen.

---

**b) Hvorfor Island har mer tilgjengelig geotermisk energi:**

Island ligger på den **midtatlantiske ryggen** – grensen mellom to tektoniske plater. Her er:
- **Vulkansk aktivitet** – magma nær overflaten
- **Varme kilder og geysirer** – vann varmes opp naturlig
- **Kort avstand til varmen** – man trenger ikke bore dypt

Norge ligger midt på en tektonisk plate, langt fra plategrenser, så varmen er dypere nede og vanskeligere å nå.

---

**c) Er geotermisk energi fornybar?**

**Ja, geotermisk energi regnes som fornybar fordi:**
- Varmen fra jordens indre er praktisk talt uuttømmelig (varer i milliarder av år)
- Varmen fornyes kontinuerlig av radioaktiv nedbryting
- Ingen CO₂-utslipp under drift

**Forbehold:** Lokale geotermiske reservoarer kan kjøles ned ved overutnyttelse, men globalt er varmen uuttømmelig.`,
      },
    },

    // ========== OPPGAVE EXTRA 6: ENERGIFORBRUK I NORGE ==========
    {
      id: 'nat10-3-5-oppg-extra-6a',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-5-oppg-extra-6a',
        number: '3.5.16',
        type: 'classic',
        difficulty: 'medium',
        task: `Norges totale strømproduksjon er ca. 150 TWh per år. Av dette kommer ca. 95% fra vannkraft.

a) Beregn hvor mye strøm som kommer fra vannkraft (i TWh).
b) Gjør om svaret i a) til GWh og kWh.
c) Norge har ca. 5,5 millioner innbyggere. Beregn gjennomsnittlig strømforbruk per innbygger per år (i kWh).
d) Sammenlign dette med verdensgnomsnitt (ca. 3500 kWh/person/år).`,
        solution: `**a) Strøm fra vannkraft:**

$$150 \\text{ TWh} \\times 0,95 = 142,5 \\text{ TWh}$$

---

**b) Omregning:**

$$142,5 \\text{ TWh} = 142\\,500 \\text{ GWh} = 142\\,500\\,000\\,000 \\text{ kWh}$$

(Tera = 10¹², Giga = 10⁹, kilo = 10³)

---

**c) Forbruk per innbygger:**

$$\\frac{150\\,000\\,000\\,000 \\text{ kWh}}{5\\,500\\,000 \\text{ personer}} \\approx 27\\,273 \\text{ kWh/person/år}$$

**Svar:** Ca. **27 000 kWh per person per år**.

---

**d) Sammenligning:**

Norge: 27 000 kWh/person/år
Verdensgjennomsnitt: 3 500 kWh/person/år

Norge bruker ca. **7,7 ganger mer** strøm per person enn verdensgjenom snittet!

**Grunner:**
- Kaldt klima krever mye oppvarming
- Mye energikrevende industri (aluminium, silisium)
- Høy levestandard
- Billig vannkraft gjør strøm rimelig
- Elektrisk oppvarming er vanlig (i motsetning til gass/olje i andre land)`,
      },
    },

    // ========== OPPGAVE EXTRA 7: HYDROGEN SOM ENERGIBÆRER ==========
    {
      id: 'nat10-3-5-oppg-extra-7',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-5-oppg-extra-7',
        number: '3.5.17',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Hydrogen brukes som energibærer i fremtidens energisystem. Hydrogen kan produseres ved elektrolyse av vann:

2H₂O → 2H₂ + O₂ (krever elektrisk energi)

a) Hvorfor kalles hydrogen en energibærer og ikke en energikilde?
b) Forklar hvorfor det er viktig at elektrisiteten som brukes til å produsere hydrogen kommer fra fornybare kilder.
c) Nevn to bruksområder for hydrogen.`,
        solution: `**a) Energibærer vs. energikilde:**

Hydrogen er en **energibærer** fordi det ikke finnes fritt i naturen – det må produseres ved å bruke energi fra en annen kilde.

- **Energikilde:** Noe som finnes naturlig og kan gi energi (sol, vind, kull)
- **Energibærer:** Et stoff som lagrer energi fra en annen kilde (hydrogen, batterier)

Hydrogen er som et "batteri" – det lagrer energi som kan brukes senere.

---

**b) Hvorfor fornybar elektrisitet er viktig:**

Elektrolyse krever mye elektrisk energi. Hvis denne energien kommer fra kullkraft, blir det totale CO₂-utslippet høyt.

- **Grønn hydrogen:** Produsert med fornybar energi → Ingen CO₂-utslipp
- **Grå hydrogen:** Produsert med fossil energi → Høye CO₂-utslipp

For at hydrogen skal være klimavennlig, MÅ det produseres med fornybar energi. Norge har et fortrinn her med sin vannkraft!

---

**c) To bruksområder for hydrogen:**

1. **Transport:** Hydrogenbiler (brenselcellebiler) bruker hydrogen som drivstoff. Brenselcellen omdanner hydrogen til elektrisitet, og eneste utslipp er vanndamp (H₂O).

2. **Industri:** Hydrogen kan erstatte fossile brennstoff i industrielle prosesser som stålproduksjon og sementproduksjon, som i dag er store CO₂-utslippere.`,
      },
    },

  ],
  exercises: [], // Oppgavene er embedded i content
};

// ============================================================================
// Kapittel 3.6: Klima og drivhuseffekten
// LK20: Forklare drivhuseffekten og menneskeskapte klimaendringer
// ============================================================================

export const CHAPTER_NAT10_3_6: TextbookChapter = {
  id: 'naturfag-10-3-6',
  courseId: 'naturfag-10',
  chapterNumber: '3.6',
  title: 'Klima og drivhuseffekten',
  description: 'Forstå klimasystemet, drivhuseffekten og klimaendringer.',
  estimatedMinutes: 40,
  competenceGoals: [
    'forklare drivhuseffekten og menneskeskapte klimaendringer',
    'diskutere årsaker til og konsekvenser av klimaendringer',
    'vurdere tiltak for å redusere klimagassutslipp',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'nat10-3-6-intro',
      type: 'text',
      content: `## Klima og drivhuseffekten

Jordas klima endrer seg. Temperaturen stiger. Isen smelter. Hvorfor skjer dette?

Svaret ligger i **drivhuseffekten** – et naturlig fenomen som holder jorda varm nok til at vi kan leve her. Men menneskelig aktivitet har forsterket drivhuseffekten, og det gir oss store utfordringer.

I dette kapitlet lærer du:
- Forskjellen mellom vær og klima
- Hva drivhuseffekten er og hvorfor den er viktig
- Hvilke gasser som påvirker klimaet
- Hvordan menneskelig aktivitet endrer klimaet
- Konsekvenser av klimaendringer
- Hva vi kan gjøre for å begrense klimaendringene`,
    },

    // ========== VÆR VS. KLIMA ==========
    {
      id: 'nat10-3-6-vaer-vs-klima',
      type: 'text',
      content: `## Vær vs. klima

Det er viktig å forstå forskjellen mellom **vær** og **klima**.

### Vær
**Vær** er tilstanden i atmosfæren på et bestemt sted til en bestemt tid.

- Været kan endre seg raskt (fra time til time, dag til dag)
- Eksempler: "I dag er det 15°C og regn", "I morgen blir det sol"
- Værmeldingen forteller oss om været de neste dagene

### Klima
**Klima** er gjennomsnittet av været over en lang periode (vanligvis 30 år eller mer).

- Klimaet endrer seg sakte (over tiår og århundrer)
- Eksempler: "Oslo har kaldere vintre enn Bergen", "Sahara har et tørt klima"
- Klimadata viser trender over lang tid

### Analogi
- **Vær** er som humøret ditt akkurat nå (kan endre seg raskt)
- **Klima** er som personligheten din (endrer seg sakte over tid)

**Eksempel:**
- At det er kaldt én vinterdag, betyr ikke at klimaet blir kaldere
- Men hvis gjennomsnittlig vintertemperatur øker over 30 år, er det klimaendring`,
    },

    // ========== DEFINISJON: VÆR OG KLIMA ==========
    {
      id: 'nat10-3-6-def-vaer-klima',
      type: 'definition',
      title: 'Vær og klima',
      content: `**Vær:** Tilstanden i atmosfæren på et bestemt sted til en bestemt tid (kortsiktig).

**Klima:** Gjennomsnittlig vær over en lang periode, vanligvis 30 år eller mer (langsiktig).

**Huskeregel:**
- Vær = hva du skal ha på deg i dag
- Klima = hva slags klær du trenger i garderoben gjennom året`,
    },

    // ========== NATURLIG DRIVHUSEFFEKT ==========
    {
      id: 'nat10-3-6-naturlig-drivhuseffekt',
      type: 'text',
      content: `## Naturlig drivhuseffekt

**Drivhuseffekten** er en naturlig prosess som gjør livet på jorda mulig.

### Hvordan fungerer drivhuseffekten?

1. **Solen sender stråling til jorda**
   - Mesteparten av solstrålingen når jordoverflaten
   - Overflaten varmes opp

2. **Jorda sender ut varmestråling**
   - Den varme overflaten sender ut infrarød stråling (varmestråling) tilbake mot verdensrommet

3. **Drivhusgasser holder på varmen**
   - Visse gasser i atmosfæren absorberer (tar opp) varmestrålingen
   - Gassene sender strålingen tilbake til jordoverflaten
   - Resultatet: Jorda holder på mer varme

### Hvorfor er drivhuseffekten viktig?

Uten drivhuseffekten ville gjennomsnittlig temperatur på jorda være:
- **Med drivhuseffekt:** ca. +15°C (varmt nok til liv)
- **Uten drivhuseffekt:** ca. -18°C (for kaldt til liv som vi kjenner det)

Drivhuseffekten gjør altså at jorda er **33 grader varmere** enn den ellers ville vært!

### Drivhus-analogien

Navnet "drivhuseffekt" kommer fra et drivhus:
- Glasset i et drivhus slipper sollys inn
- Glasset holder varmen inne
- Temperaturen inne i drivhuset blir høyere enn utenfor

På samme måte fungerer drivhusgassene i atmosfæren som "glass" som holder varmen inne på jorda.`,
    },

    // ========== DEFINISJON: DRIVHUSEFFEKT ==========
    {
      id: 'nat10-3-6-def-drivhuseffekt',
      type: 'definition',
      title: 'Drivhuseffekten',
      content: `**Drivhuseffekten:** En naturlig prosess der drivhusgasser i atmosfæren absorberer varmestråling fra jordoverflaten og sender den tilbake, slik at jorda holder på mer varme.

**Resultatet:** Jorda blir ca. 33°C varmere enn den ellers ville vært.

**Uten drivhuseffekten** ville det vært for kaldt til liv som vi kjenner det.`,
    },

    // ========== DRIVHUSGASSER ==========
    {
      id: 'nat10-3-6-drivhusgasser',
      type: 'text',
      content: `## Drivhusgasser

Drivhusgasser er gasser i atmosfæren som bidrar til drivhuseffekten.

### De viktigste drivhusgassene

#### 1. Vanndamp (H₂O)
- Den mest betydningsfulle drivhusgassen naturlig
- Kommer fra fordampning av vann fra hav, innsjøer og planter
- Mengden vanndamp varierer mye fra sted til sted

#### 2. Karbondioksid (CO₂)
- Den viktigste menneskeskapte drivhusgassen
- Kommer fra:
  - Forbrenning av fossilt brensel (kull, olje, gass)
  - Avskoging (trær tar opp CO₂)
  - Naturlige prosesser (vulkaner, respirasjoner)
- Øker raskt på grunn av menneskelig aktivitet

#### 3. Metan (CH₄)
- 25-30 ganger sterkere drivhusgass enn CO₂ per molekyl
- Kommer fra:
  - Husdyr (drøvtyggere som kyr)
  - Risdyrking
  - Søppelfyllinger
  - Naturlige våtmarker
  - Utslipp fra olje- og gassproduksjon

#### 4. Lystgass (N₂O)
- Ca. 300 ganger sterkere enn CO₂
- Kommer fra:
  - Gjødsel i landbruket
  - Forbrenning av fossilt brensel
  - Industrielle prosesser

#### 5. Fluorholdige gasser (HFK, PFK, SF₆)
- Menneskeskapte gasser
- Ekstremt sterke drivhusgasser
- Brukes i kjølesystemer, klimaanlegg, industri
- Små mengder, men meget kraftige

### Hvor lenge blir drivhusgassene i atmosfæren?

- **CO₂:** 100-300 år (lang levetid!)
- **Metan:** ca. 12 år
- **Lystgass:** ca. 120 år
- **Fluorholdige gasser:** opptil tusenvis av år

Dette betyr at selv om vi slutter å slippe ut CO₂ i dag, vil den allerede utslåtte CO₂ fortsette å påvirke klimaet i hundrevis av år.`,
    },

    // ========== DEFINISJON: DRIVHUSGASSER ==========
    {
      id: 'nat10-3-6-def-drivhusgasser',
      type: 'definition',
      title: 'Drivhusgasser',
      content: `**Drivhusgasser:** Gasser i atmosfæren som absorberer varmestråling og bidrar til drivhuseffekten.

**De viktigste drivhusgassene:**
1. **Vanndamp (H₂O)** – mest naturlig
2. **Karbondioksid (CO₂)** – viktigst menneskeskapt
3. **Metan (CH₄)** – fra husdyr, søppel, våtmarker
4. **Lystgass (N₂O)** – fra gjødsel og industri
5. **Fluorholdige gasser** – fra kjølesystemer

**Viktig:** Alle disse gassene finnes naturlig, men menneskelig aktivitet har økt mengdene dramatisk.`,
    },

    // ========== EKSEMPEL: DRIVHUSEFFEKTENS MEKANISME ==========
    {
      id: 'nat10-3-6-example-1',
      type: 'example',
      title: 'Eksempel: Hvordan drivhuseffekten fungerer',
      problem: `Forklar trinn for trinn hva som skjer med solstrålingen fra den forlater solen til varmen holdes igjen i jordas atmosfære.`,
      solution: `**Trinn for trinn:**

**1. Solen sender ut kortbølget stråling**
Solen sender ut elektromagnetisk stråling, hovedsakelig synlig lys og UV-stråling. Denne strålingen har kort bølgelengde og høy energi.

**2. Strålingen når jordas atmosfære**
Ca. 30% av solstrålingen reflekteres tilbake til verdensrommet av skyer, is og lyse overflater (albedo-effekten). Ca. 70% absorberes av jordoverflaten.

**3. Jordoverflaten varmes opp**
Overflaten absorberer solstrålingen og varmes opp. Varmere overflate sender ut langbølget infrarød stråling (varmestråling) tilbake mot verdensrommet.

**4. Drivhusgassene absorberer varmestrålingen**
CO₂, vanndamp, metan og andre drivhusgasser i atmosfæren absorberer mye av den infrarøde strålingen.

**5. Strålingen sendes tilbake**
Drivhusgassene sender varmestrålingen i alle retninger – inkludert tilbake ned mot jordoverflaten.

**6. Jorda holdes varm**
Resultatet er at mer varme holdes igjen i atmosfæren, og jordas gjennomsnittstemperatur blir ca. 33°C varmere enn uten drivhuseffekten.

**Oppsummering:**
Kortbølget stråling inn → Overflaten varmes opp → Langbølget varmestråling ut → Drivhusgasser fanger varmen → Jorda holdes varm.`,
    },

    // ========== EKSEMPEL: ANALYSE AV TEMPERATURDATA ==========
    {
      id: 'nat10-3-6-example-2',
      type: 'example',
      title: 'Eksempel: Tolke temperaturdata',
      problem: `Her er gjennomsnittstemperaturer (avvik fra normalen 1850-1900) for noen utvalgte år:

| År | Avvik fra normalen |
|-----|-------------------|
| 1900 | -0,1°C |
| 1950 | +0,1°C |
| 1980 | +0,3°C |
| 2000 | +0,6°C |
| 2020 | +1,2°C |

a) Hva viser tallene?
b) Beregn temperaturøkningen fra 1900 til 2020.
c) Beregn gjennomsnittlig økning per tiår mellom 1980 og 2020.`,
      solution: `**a) Hva tallene viser:**

Tallene viser at jordas gjennomsnittstemperatur har økt jevnt siden 1900, med en akselererende økning de siste tiårene.

**b) Temperaturøkning fra 1900 til 2020:**

Økning = (+1,2°C) - (-0,1°C) = **1,3°C** over 120 år.

**c) Gjennomsnittlig økning per tiår mellom 1980 og 2020:**

Økning fra 1980 til 2020 = 1,2°C - 0,3°C = 0,9°C
Antall tiår = (2020 - 1980) / 10 = 4 tiår

Gjennomsnittlig økning per tiår = 0,9°C / 4 = **0,225°C per tiår**

**Tolkning:**
Temperaturen øker med omtrent 0,2°C per tiår, noe som er svært raskt i geologisk sammenheng. Denne økningen skyldes hovedsakelig økte utslipp av drivhusgasser.`,
    },

    // ========== EKSEMPEL: KARBONFOTAVTRYKK ==========
    {
      id: 'nat10-3-6-example-3',
      type: 'example',
      title: 'Eksempel: Beregne karbonfotavtrykk',
      problem: `En familie ønsker å beregne sitt karbonfotavtrykk for transport i ett år. De bruker:
- Bil (bensin): 15 000 km/år, forbruk 0,08 liter/km, utslipp 2,3 kg CO₂/liter
- Flyreise (tur-retur Oslo-London): 2 reiser/år, ca. 500 kg CO₂/reise

Beregn totale CO₂-utslipp fra transport.`,
      solution: `**Bilkjøring:**

Drivstofforbruk per år = 15 000 km × 0,08 liter/km = 1200 liter

CO₂-utslipp fra bil = 1200 liter × 2,3 kg CO₂/liter = **2760 kg CO₂**

---

**Flyreiser:**

CO₂-utslipp fra fly = 2 reiser × 500 kg CO₂/reise = **1000 kg CO₂**

---

**Totalt karbonfotavtrykk (transport):**

Totalt = 2760 + 1000 = **3760 kg CO₂** = **3,76 tonn CO₂**

---

**Sammenligning:**
Norges gjennomsnittlige utslipp per person er ca. 8 tonn CO₂ per år (totalt). Denne familiens transport alene står for ca. 3,76 tonn per person (hvis vi antar 2 familiemedlemmer reiser).

**Tiltak for å redusere:**
- Bytte til elbil: Reduserer bilutslipp med ca. 80%
- Ta tog i stedet for fly: Reduserer flyutslipp med ca. 90%
- Med elbil og tog: 2760 × 0,2 + 1000 × 0,1 = 552 + 100 = 652 kg CO₂ (83% reduksjon!)`,
    },

    // ========== OPPGAVE 1: VÆR VS KLIMA (MULTIPLE CHOICE) ==========
    {
      id: 'nat10-3-6-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-6-ex-1',
        number: '3.6.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom vær og klima?',
        options: [
          'Vær er kort sikt, klima er lang sikt',
          'Vær er varmt, klima er kaldt',
          'Vær er på dagen, klima er på natten',
          'Det er ingen forskjell',
        ],
        answer: 0,
        solution: `**Riktig svar:** Vær er kort sikt, klima er lang sikt

**Forklaring:**

- **Vær** beskriver tilstanden i atmosfæren akkurat nå eller i nær fremtid (timer, dager)
- **Klima** beskriver gjennomsnittlig vær over lang tid (30 år eller mer)

**Eksempel:**
- "I dag regner det" → vær
- "Oslo har fuktig klima om vinteren" → klima`,
      },
    },

    // ========== OPPGAVE 2: DRIVHUSEFFEKT (MULTIPLE CHOICE) ==========
    {
      id: 'nat10-3-6-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-6-ex-2',
        number: '3.6.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste effekten av den naturlige drivhuseffekten?',
        options: [
          'Den gjør jorda kaldere',
          'Den gjør jorda varmere',
          'Den beskytter mot asteroider',
          'Den produserer oksygen',
        ],
        answer: 1,
        solution: `**Riktig svar:** Den gjør jorda varmere

**Forklaring:**

Den naturlige drivhuseffekten gjør at jorda er ca. **33°C varmere** enn den ellers ville vært.

**Uten drivhuseffekten:**
- Gjennomsnittstemperatur: -18°C
- For kaldt til liv som vi kjenner det

**Med drivhuseffekten:**
- Gjennomsnittstemperatur: +15°C
- Varmt nok til liv

**Konklusjon:** Den naturlige drivhuseffekten er nødvendig for livet på jorda!`,
      },
    },

    // ========== FORSTERKET DRIVHUSEFFEKT ==========
    {
      id: 'nat10-3-6-forsterket-drivhuseffekt',
      type: 'text',
      content: `## Forsterket drivhuseffekt

Den naturlige drivhuseffekten er viktig for livet på jorda. Men menneskelig aktivitet har **forsterket** drivhuseffekten.

### Hva er forsterket drivhuseffekt?

**Forsterket drivhuseffekt** betyr at menneskelig aktivitet slipper ut store mengder ekstra drivhusgasser, som gjør at mer varme holdes igjen i atmosfæren.

Resultatet: **Global oppvarming** – jordas gjennomsnittstemperatur stiger.

### Hva forårsaker forsterket drivhuseffekt?

#### 1. Forbrenning av fossilt brensel
- **Kull, olje og naturgass** inneholder karbon som har vært lagret under bakken i millioner av år
- Når vi brenner fossilt brensel, slippes CO₂ ut i atmosfæren
- Brukes til:
  - Transport (biler, fly, skip)
  - Elektrisitetsproduksjon
  - Oppvarming av bygninger
  - Industriprosesser

#### 2. Avskoging
- Skog tar opp CO₂ gjennom fotosyntese
- Når vi hogger ned skog (spesielt regnskogen), reduseres jordas evne til å ta opp CO₂
- Når trærne brennes eller råtner, slippes CO₂ ut

#### 3. Landbruk
- **Husdyr** (kyr, sauer) produserer metan gjennom fordøyelsen
- **Risdyrking** i oversvømte felt produserer metan
- **Gjødsel** slipper ut lystgass (N₂O)

#### 4. Industri
- Sementproduksjon slipper ut store mengder CO₂
- Kjemisk industri produserer fluorholdige gasser
- Ulike industriprosesser brenner fossilt brensel

### Hvor mye har utslippene økt?

**CO₂-nivået i atmosfæren:**
- **Før industrialiseringen (1750):** 280 ppm (parts per million)
- **I dag (2024):** over 420 ppm
- **Økning:** Over 50% mer CO₂ enn før!

Dette er den høyeste CO₂-konsentrasjonen på minst 800 000 år.

### Global temperaturøkning

Siden industrialiseringen har global gjennomsnittstemperatur økt med ca. **1.2°C**.

Dette høres kanskje ikke mye ut, men selv små endringer i global temperatur har store konsekvenser.`,
    },

    // ========== DEFINISJON: FORSTERKET DRIVHUSEFFEKT ==========
    {
      id: 'nat10-3-6-def-forsterket-drivhuseffekt',
      type: 'definition',
      title: 'Forsterket drivhuseffekt',
      content: `**Forsterket drivhuseffekt:** Økning i drivhuseffekten på grunn av menneskeskapte utslipp av drivhusgasser.

**Årsaker:**
1. Forbrenning av fossilt brensel (kull, olje, gass)
2. Avskoging
3. Landbruk (husdyr, ris, gjødsel)
4. Industrielle prosesser

**Resultat:** Global oppvarming – jordas gjennomsnittstemperatur stiger.

**Fakta:** CO₂-nivået har økt fra 280 ppm (1750) til over 420 ppm (2024) – en økning på over 50%.`,
    },

    // ========== OPPGAVE 3: DRIVHUSGASSER (MULTIPLE CHOICE) ==========
    {
      id: 'nat10-3-6-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-6-ex-3',
        number: '3.6.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken drivhusgass er mest betydningsfull for menneskeskapte klimaendringer?',
        options: [
          'Vanndamp (H₂O)',
          'Karbondioksid (CO₂)',
          'Oksygen (O₂)',
          'Nitrogen (N₂)',
        ],
        answer: 1,
        solution: `**Riktig svar:** Karbondioksid (CO₂)

**Forklaring:**

Selv om vanndamp er den mest betydningsfulle **naturlige** drivhusgassen, er karbondioksid (CO₂) den viktigste **menneskeskapte** drivhusgassen.

**Hvorfor CO₂ er viktigst:**
1. Mengden CO₂ har økt dramatisk (over 50%) siden industrialiseringen
2. CO₂ blir værende i atmosfæren i hundrevis av år
3. Mesteparten kommer fra forbrenning av fossilt brensel

**Andre viktige menneskeskapte drivhusgasser:**
- Metan (CH₄) – fra husdyr og søppel
- Lystgass (N₂O) – fra gjødsel

**Merk:** Oksygen (O₂) og nitrogen (N₂) er IKKE drivhusgasser.`,
      },
    },

    // ========== KLIMAENDRINGER ==========
    {
      id: 'nat10-3-6-klimaendringer',
      type: 'text',
      content: `## Klimaendringer – observerte endringer

Klimaendringene er ikke bare teori – vi kan allerede observere tydelige endringer i klimasystemet.

### Observerte endringer

#### 1. Temperatur
- **Global temperatur** har økt med ca. 1.2°C siden 1850
- De siste 10 årene har vært de varmeste som er målt
- Økningen skjer raskere enn noen gang tidligere i menneskehetens historie

#### 2. Isbreene smelter
- **Isbreer på Grønland og Antarktis** smelter raskere
- **Fjellbreer** over hele verden krymper
- **Havis i Arktis** blir mindre og tynnere
- **Eksempel:** Mange norske breer har krympet betydelig siden 1900-tallet

#### 3. Havnivået stiger
- Havnivået har steget ca. **20 cm** siden 1900
- Stigningen skyldes:
  - Vann utvider seg når det varmes opp (termisk ekspansjon)
  - Isbreen på land smelter og renner ut i havet
- **Konsekvens:** Lavtliggende områder og øyer er truet

#### 4. Ekstremvær
- **Flere hetebølger** – lengre perioder med ekstremt høy temperatur
- **Mer intens nedbør** – kraftigere regnskyll og flom
- **Tørke** – lengre perioder uten nedbør i noen områder
- **Sterkere stormer** – orkaner og tropiske stormer blir kraftigere

#### 5. Endringer i økosystemer
- **Isbjørn** mister leveområde når havis smelter
- **Korallrev** bleker (dør) på grunn av varmere hav
- **Arter flytter nordover** – dyr og planter søker kjøligere områder
- **Endret vekstmønster** – vekstsesongen endres for planter

### Konsekvenser for samfunnet

#### 1. Matproduksjon
- Endrede vekstforhold for avlinger
- Tørke kan redusere avlinger
- Nye skadedyr og sykdommer sprer seg

#### 2. Vannforsyning
- Mindre snø og isbreen → mindre smeltevann om sommeren
- Påvirker vannkraftverk
- Problemer med drikkevann i tørke

#### 3. Helse
- Flere dødsfall under hetebølger
- Tropiske sykdommer sprer seg til nye områder
- Luftforurensning øker

#### 4. Migrasjon og konflikter
- Folk må flytte fra oversvømte kystområder
- Konflikter om vann og mat i tørkerammede områder

#### 5. Økonomiske kostnader
- Skader fra flom, storm og ekstremvær
- Kostnader for tilpasning (f.eks. flytting av infrastruktur)
- Tap av verdier (f.eks. eiendom, natur)`,
    },

    // ========== OPPGAVE 4: KONSEKVENSER AV KLIMAENDRINGER ==========
    {
      id: 'nat10-3-6-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-6-ex-4',
        number: '3.6.4',
        type: 'classic',
        difficulty: 'medium',
        task: `List opp tre observerte konsekvenser av klimaendringer og forklar hvorfor de skjer.`,
        multipleChoiceOptions: [
          '1) Isbreer smelter (høyere temp), 2) Havnivå stiger (termisk ekspansjon + issmelting), 3) Mer ekstremvær (varmere luft holder mer vanndamp)',
          '1) Havet fryser (kaldere vann), 2) Vulkanutbrudd øker, 3) Ozonlaget tykkner',
          '1) Mer snø på fjellet, 2) Lavere havnivå, 3) Mindre storm og flom',
          '1) Solen blir svakere, 2) Månen trekker seg tilbake, 3) Jorda spinner saktere',
        ],
        solution: `**Tre observerte konsekvenser av klimaendringer:**

**1. Isbreer smelter**

**Hvorfor:** Høyere temperaturer gjør at is smelter raskere enn den dannes. Isbreer på Grønland, Antarktis og i fjellområder krymper.

**Konsekvens:** Havnivået stiger, vannforsyning påvirkes (mindre smeltevann om sommeren).

**Eksempel:** Norske fjellbreer som Jostedalsbreen har krympet betydelig.

---

**2. Havnivået stiger**

**Hvorfor:**
- Vann utvider seg når det varmes opp (termisk ekspansjon)
- Is på land (Grønland, Antarktis) smelter og renner ut i havet

**Konsekvens:** Lavtliggende kystområder oversvømmes, øyer blir ubeboelige.

**Fakta:** Havnivået har steget ca. 20 cm siden 1900.

---

**3. Mer ekstremvær**

**Hvorfor:** Varmere luft kan holde mer vanndamp, noe som gir mer intens nedbør. Høyere temperaturer fører også til flere hetebølger.

**Konsekvens:** Flere flommer, tørke, hetebølger og kraftigere stormer.

**Eksempel:** Flere skred og flommer i Norge på grunn av intens nedbør.

---

**Andre konsekvenser:**
- Endringer i økosystemer (arter må flytte seg, korallrev bleker)
- Påvirkning av matproduksjon (tørke reduserer avlinger)
- Helseproblemer (flere dødsfall under hetebølger)`,
      },
    },

    // ========== OPPGAVE 5: ÅRSAKER TIL FORSTERKET DRIVHUSEFFEKT ==========
    {
      id: 'nat10-3-6-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-6-ex-5',
        number: '3.6.5',
        type: 'classic',
        difficulty: 'medium',
        task: `Forklar hvordan forbrenning av fossilt brensel bidrar til forsterket drivhuseffekt. Bruk begrepene CO₂, drivhusgass og global oppvarming i svaret ditt.`,
        multipleChoiceOptions: [
          'Fossilt brensel brennes → CO₂ slippes ut → CO₂ (drivhusgass) fanger varmestråling → forsterket drivhuseffekt → global oppvarming',
          'Fossilt brensel fordamper → O₂ dannes → oksygen varmer opp jorda → global oppvarming',
          'Fossilt brensel synker ned → metan frigjøres → metan kjøler ned atmosfæren → global nedkjøling',
          'Fossilt brensel absorberes → nitrogen frigjøres → nitrogen blokkerer sollys → global mørklegging',
        ],
        solution: `**Hvordan fossilt brensel bidrar til forsterket drivhuseffekt:**

**1. Hva er fossilt brensel?**

Fossilt brensel (kull, olje, naturgass) er rester av planter og dyr som levde for millioner av år siden. Karbonet fra disse organismene har vært lagret under bakken.

**2. Forbrenning slipper ut CO₂**

Når vi brenner fossilt brensel for å få energi (f.eks. i biler, kraftverk, fly), reagerer karbonet med oksygen:

**Karbon + Oksygen → Karbondioksid (CO₂)**

CO₂ slippes ut i atmosfæren.

**3. CO₂ er en drivhusgass**

CO₂ er en **drivhusgass** – den absorberer varmestråling fra jordoverflaten og sender den tilbake. Dette gjør at mer varme holdes igjen i atmosfæren.

**4. Mer CO₂ → Forsterket drivhuseffekt**

Siden industrialiseringen (ca. 1850) har CO₂-nivået i atmosfæren økt fra 280 ppm til over 420 ppm – en økning på over 50%.

Mer CO₂ → mer varmestråling holdes igjen → **forsterket drivhuseffekt**.

**5. Global oppvarming**

Forsterket drivhuseffekt fører til **global oppvarming** – jordas gjennomsnittstemperatur stiger.

Siden 1850 har temperaturen økt med ca. 1.2°C, og økningen fortsetter.

---

**Oppsummering:**

Fossilt brensel → Forbrenning → CO₂-utslipp → Mer drivhusgass i atmosfæren → Forsterket drivhuseffekt → Global oppvarming

**Konklusjon:** Forbrenning av fossilt brensel er den viktigste årsaken til menneskeskapte klimaendringer.`,
      },
    },

    // ========== TILBAKEKOBLINGSMEKANISMER ==========
    {
      id: 'nat10-3-6-tilbakekoblingsmekanismer',
      type: 'text',
      content: `## Tilbakekoblingsmekanismer

Klimasystemet har **tilbakekoblingsmekanismer** – prosesser som kan forsterke eller dempe klimaendringer.

### Positive tilbakekoblinger (forsterker endringen)

#### 1. Is-albedo-tilbakekobling
**Albedo** er et mål på hvor mye sollys en overflate reflekterer.

- **Is og snø** har høy albedo (reflekterer mye sollys)
- **Mørk jord og hav** har lav albedo (absorberer mye sollys)

**Hva skjer:**
1. Temperaturen stiger → Is smelter
2. Mindre is → Mer mørk overflate (jord, hav)
3. Mer sollys absorberes → Temperaturen stiger enda mer
4. Enda mer is smelter → ... (sirkelen fortsetter)

**Resultat:** Isens smelting forsterker oppvarmingen!

#### 2. Permafrost-tilbakekobling
**Permafrost** er jord som er frossen året rundt (finnes i Arktis).

**Hva skjer:**
1. Temperaturen stiger → Permafrosten tiner
2. Organisk materiale i jorden begynner å råtne
3. Råtneprosessen slipper ut CO₂ og metan
4. Mer drivhusgass → Temperaturen stiger enda mer
5. Mer permafrost tiner → ... (sirkelen fortsetter)

**Resultat:** Tining av permafrost forsterker oppvarmingen!

#### 3. Vanndamp-tilbakekobling
- Høyere temperatur → Mer fordampning → Mer vanndamp i atmosfæren
- Vanndamp er en drivhusgass → Mer oppvarming
- Mer oppvarming → Enda mer fordampning → ...

### Negative tilbakekoblinger (demper endringen)

#### 1. Mer plantevekst
- Mer CO₂ i atmosfæren kan gi økt plantevekst (planter trenger CO₂ for fotosyntese)
- Mer plantevekst tar opp mer CO₂ fra atmosfæren
- Dette demper noe av økningen i CO₂

Men: Dette er ikke nok til å kompensere for utslippene!

### Hvorfor er tilbakekoblinger viktig?

Tilbakekoblinger gjør klimasystemet **komplekst og vanskelig å forutsi**:

- Positive tilbakekoblinger gjør at små endringer kan gi store konsekvenser
- Risiko for **tipping points** (vendepunkter) – punkter hvor klimasystemet endres raskt og irreversibelt

**Eksempel på tipping point:**
Hvis Grønlands isbre smelter helt, vil den ikke kunne gjenoppbygges selv om temperaturen synker igjen.`,
    },

    // ========== DEFINISJON: TILBAKEKOBLINGSMEKANISMER ==========
    {
      id: 'nat10-3-6-def-tilbakekoblingsmekanismer',
      type: 'definition',
      title: 'Tilbakekoblingsmekanismer',
      content: `**Tilbakekoblingsmekanismer:** Prosesser i klimasystemet som enten forsterker eller demper klimaendringer.

**Positive tilbakekoblinger (forsterker):**
1. **Is-albedo:** Mindre is → Mer sollys absorberes → Mer oppvarming
2. **Permafrost:** Tining slipper ut CO₂ og metan → Mer oppvarming
3. **Vanndamp:** Høyere temp. → Mer vanndamp → Mer oppvarming

**Negative tilbakekoblinger (demper):**
1. **Plantevekst:** Mer CO₂ → Mer plantevekst → Mer CO₂ tas opp

**Viktig:** Positive tilbakekoblinger gjør klimaendringene vanskeligere å stoppe!`,
    },

    // ========== OPPGAVE 6: IS-ALBEDO-TILBAKEKOBLING ==========
    {
      id: 'nat10-3-6-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-6-ex-6',
        number: '3.6.6',
        type: 'classic',
        difficulty: 'medium',
        task: `Forklar is-albedo-tilbakekoblingen med egne ord. Hvorfor kalles den en "positiv" tilbakekobling?`,
        multipleChoiceOptions: [
          'Is smelter → mørk overflate absorberer mer sollys → mer oppvarming → mer issmelting. "Positiv" fordi den forsterker oppvarmingen',
          'Is smelter → hvit overflate reflekterer mer → avkjøling. "Positiv" fordi det er bra for klimaet',
          'Havet fryser → mer is reflekterer sollys → mer oppvarming. "Positiv" fordi isen vokser',
          'Snø faller → temperaturen synker → mer snø. "Positiv" fordi det blir mer snø',
        ],
        solution: `**Is-albedo-tilbakekoblingen:**

**Hva er albedo?**

Albedo er et mål på hvor mye sollys en overflate reflekterer:
- **Hvit is/snø:** Høy albedo (reflekterer mye sollys)
- **Mørk jord/hav:** Lav albedo (absorberer mye sollys)

**Hvordan fungerer tilbakekoblingen?**

1. **Temperaturen stiger** (f.eks. på grunn av økt CO₂)

2. **Is og snø smelter** (på Arktis, Grønland, fjellbreer)

3. **Mer mørk overflate eksponeres** (havet, jorda)

4. **Mer sollys absorberes** (fordi mørke overflater har lav albedo)

5. **Temperaturen stiger enda mer**

6. **Enda mer is smelter** → Tilbake til punkt 2 (sirkelen fortsetter)

**Hvorfor kalles den "positiv"?**

I klimavitenskap betyr:
- **Positiv tilbakekobling:** Forsterker den opprinnelige endringen
- **Negativ tilbakekobling:** Demper den opprinnelige endringen

Is-albedo-tilbakekoblingen er "positiv" fordi den **forsterker oppvarmingen**:
- Oppvarming → Is smelter → Mer oppvarming → Mer is smelter → ...

**Merk:** "Positiv" betyr IKKE at den er "bra" – tvert imot, den gjør problemet verre!

**Eksempel:**
Når havis i Arktis smelter, blottlegges mørkt hav som absorberer mye mer sollys enn hvit is. Dette gjør at Arktis varmes opp ekstra raskt – nesten dobbelt så raskt som resten av verden.

**Konklusjon:**
Is-albedo-tilbakekoblingen er en av grunnene til at klimaendringene er vanskelige å stoppe. Små endringer kan sette i gang en selvforsterkende prosess.`,
      },
    },

    // ========== OPPGAVE 7: PERMAFROST ==========
    {
      id: 'nat10-3-6-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-6-ex-7',
        number: '3.6.7',
        type: 'classic',
        difficulty: 'medium',
        task: `Permafrost er jord som er frossen året rundt. Forklar hvorfor tining av permafrost er et problem for klimaet.`,
        multipleChoiceOptions: [
          'Organisk materiale råtner og slipper ut CO₂ og metan (drivhusgasser). Dette forsterker oppvarmingen (positiv tilbakekobling)',
          'Permafrost absorberer varme og kjøler ned atmosfæren. Tining betyr mindre kjøling',
          'Permafrost inneholder oksygen som frigjøres. Mer oksygen gir mer forbrenning',
          'Permafrost blokkerer sollys. Tining gir mer sollys til bakken',
        ],
        solution: `**Hvorfor tining av permafrost er et problem for klimaet:**

**Hva er permafrost?**

Permafrost er jord som er frossen året rundt. Den finnes i Arktis (Nord-Norge, Sibir, Canada, Alaska).

Permafrosten inneholder **organisk materiale** (døde planter og dyr) som har vært frosset i tusenvis av år.

**Hva skjer når permafrosten tiner?**

**1. Organisk materiale begynner å råtne**

Når isen smelter, begynner bakterier å bryte ned det organiske materialet (råtne).

**2. Råtneprosessen slipper ut drivhusgasser**

Når organisk materiale brytes ned, slippes det ut:
- **CO₂** (karbondioksid) – hvis det er oksygen til stede
- **Metan (CH₄)** – hvis det IKKE er oksygen (f.eks. i våtmarker)

Metan er ca. 25-30 ganger sterkere drivhusgass enn CO₂!

**3. Positiv tilbakekobling**

Dette setter i gang en selvforsterkende prosess:

1. Temperatur stiger → Permafrost tiner
2. Organisk materiale råtner → CO₂ og metan slippes ut
3. Mer drivhusgass i atmosfæren → Temperaturen stiger enda mer
4. Mer permafrost tiner → Tilbake til punkt 2 (sirkelen fortsetter)

**Hvor mye karbon er lagret i permafrosten?**

Det er anslått at permafrosten inneholder ca. **1500 milliarder tonn karbon** – nesten dobbelt så mye som hele atmosfæren!

Hvis bare en liten del av dette karbonet slippes ut, vil det ha enorme konsekvenser for klimaet.

**Konklusjon:**

Tining av permafrost er et alvorlig problem fordi:
1. Det slipper ut store mengder drivhusgasser (CO₂ og metan)
2. Det skaper en positiv tilbakekobling som forsterker oppvarmingen
3. Det er vanskelig å stoppe prosessen når den først har startet

**Derfor er det ekstra viktig å begrense global oppvarming raskt!**`,
      },
    },

    // ========== KLIMATILTAK ==========
    {
      id: 'nat10-3-6-klimatiltak',
      type: 'text',
      content: `## Klimatiltak

For å begrense klimaendringene trenger vi **klimatiltak**. Det finnes to hovedtyper: utslippsreduksjoner og tilpasning.

### 1. Utslippsreduksjoner (mitigation)

Tiltak for å **redusere utslippene** av drivhusgasser.

#### Energi
- **Fornybar energi:** Bytte fra fossilt brensel til sol, vind, vann, bølger, geotermisk
- **Energieffektivisering:** Bruke mindre energi (bedre isolerte hus, LED-lys)
- **Elektrifisering:** Bytte til elbiler, elektriske ferger, elektriske fly
- **Redusere unødvendig bruk:** Slukke lys, kjøre mindre bil, fly mindre

#### Transport
- **Elbiler, el-busser, el-ferger**
- **Kollektivtransport, sykkel, gange**
- **Mer effektive fly og skip**
- **Mindre flyreiser** (bruk tog eller videokonferanse)

#### Landbruk
- **Mindre kjøtt og meieriprodukter** (produserer metan)
- **Mer plantebasert mat**
- **Effektiv gjødselbruk** (redusere lystgass)
- **Stoppe avskoging**

#### Industri
- **Effektive produksjonsprosesser**
- **Materialgjenvinning** (krever mindre energi enn ny produksjon)
- **Karbonfangst og -lagring (CCS):** Fange opp CO₂ fra utslipp og lagre det under bakken

#### Skog og natur
- **Plante skog** (tar opp CO₂)
- **Beskytte eksisterende skog** (spesielt regnskogen)
- **Gjenopprette våtmarker og myrer** (lagrer karbon)

### 2. Tilpasning (adaptation)

Tiltak for å **leve med klimaendringene** som allerede skjer.

#### Flom og havnivåstigning
- **Flomvern:** Voller, dammer
- **Bygge hus på høyere grunn**
- **Bedre drenering** i byer

#### Tørke og vannmangel
- **Vannlagring:** Dammer, reservoarer
- **Effektiv vannbruk** i landbruk og industri
- **Tørkeresistente avlinger**

#### Ekstremvær
- **Styrke bygninger** mot storm og ekstremvær
- **Bedre varslingssystemer**
- **Evakueringsplaner**

#### Helse
- **Kjølesystemer** i varme perioder
- **Forberede helsevesenet** på nye sykdommer og hetebølger

### Hvem har ansvar?

**Individer:**
- Velge fornybar energi
- Reise mindre med fly
- Spise mindre kjøtt
- Resirkulere og redusere forbruk

**Bedrifter:**
- Redusere utslipp i produksjonen
- Utvikle grønne teknologier
- Rapportere klimautslipp

**Politikere og myndigheter:**
- Innføre klimapolitikk (avgifter, forbud, støtteordninger)
- Investere i fornybar energi
- Beskytte natur og skog
- Internasjonalt samarbeid

### Parisavtalen

I 2015 ble alle verdens land enige om **Parisavtalen** – et internasjonalt klimaavtale med følgende mål:

- Holde global oppvarming **godt under 2°C** (helst 1.5°C) sammenlignet med før-industrielt nivå
- Alle land skal redusere utslipp
- Rike land skal hjelpe fattige land med klimatiltak

**Status:**
Vi er på god vei til å overskride 1.5°C-målet. Mange klimaforskere mener raskere utslippskutt er nødvendig for å nå målene.`,
    },

    // ========== OPPGAVE 8: UTSLIPPSREDUKSJONER ==========
    {
      id: 'nat10-3-6-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-6-ex-8',
        number: '3.6.8',
        type: 'classic',
        difficulty: 'medium',
        task: `List opp fem konkrete tiltak du selv kan gjøre for å redusere klimagassutslipp. Forklar hvordan hvert tiltak reduserer utslipp.`,
        multipleChoiceOptions: [
          '1) Mindre kjøtt (metan), 2) Kollektiv/sykle (mindre fossil), 3) Fly mindre (jetfuel), 4) Resirkulere (mindre produksjon), 5) Spare strøm (mindre kraftverk)',
          '1) Spise mer kjøtt, 2) Kjøre mer bil, 3) Fly oftere, 4) Kaste mer søppel, 5) Bruke mer strøm',
          '1) Drikke mer vann, 2) Sove lenger, 3) Se mer TV, 4) Bruke mer plast, 5) Pusse tennene oftere',
          '1) Flytte til by, 2) Kjøpe ny bil, 3) Bruke fly til jobb, 4) Kjøpe mer, 5) La lyset stå på',
        ],
        solution: `**Fem konkrete tiltak for å redusere klimagassutslipp:**

**1. Spise mindre kjøtt og meieriprodukter**

**Hvordan det reduserer utslipp:**
- Husdyr (spesielt storfe) produserer metan gjennom fordøyelsen
- Produksjon av kjøtt krever mye energi, vann og fôr
- Plantebasert mat har mye lavere klimautslipp

**Konkret:** Velg vegetarmat noen dager i uka, eller reduser porsjoner med kjøtt.

---

**2. Reise mer kollektivt, sykle eller gå**

**Hvordan det reduserer utslipp:**
- Biler (spesielt bensin/diesel) brenner fossilt brensel og slipper ut CO₂
- Kollektivtrafikk, sykkel og gåing gir mye lavere utslipp per person

**Konkret:** Sykle til skolen, ta bussen i stedet for å bli kjørt av foreldrene.

---

**3. Fly mindre**

**Hvordan det reduserer utslipp:**
- Fly brenner store mengder fossilt brensel (jet fuel)
- Én flyreise kan tilsvare flere måneders bilkjøring i utslipp

**Konkret:** Velg tog eller buss for kortere reiser, eller reis sjeldnere med fly.

---

**4. Redusere forbruk og resirkulere**

**Hvordan det reduserer utslipp:**
- Produksjon av nye produkter krever energi (ofte fra fossilt brensel)
- Resirkulering krever mindre energi enn å lage noe nytt
- Mindre forbruk = mindre produksjon = mindre utslipp

**Konkret:** Kjøp færre nye klær, reparer ting i stedet for å kjøpe nytt, resirkuleг plast og papir.

---

**5. Spare energi hjemme**

**Hvordan det reduserer utslipp:**
- Elektrisitet produseres ofte ved forbrenning av fossilt brensel (avhengig av land)
- Mindre energibruk = mindre CO₂-utslipp fra kraftproduksjon

**Konkret:** Slukk lys når du går ut av rommet, ta kortere dusj, skru ned varmen litt.

---

**Oppsummering:**

Selv små endringer kan ha betydning hvis mange gjør det:
- Mat: Mindre kjøtt
- Transport: Mer kollektiv, sykkel, gåing
- Flyreiser: Reis mindre med fly
- Forbruk: Kjøp mindre, reparer mer, resirkuler
- Energi: Spar strøm hjemme

**Viktig:** Individuelle tiltak er viktige, men politiske og strukturelle endringer er nødvendige for å løse klimakrisen.`,
      },
    },

    // ========== OPPGAVE 9: TILPASNING VS UTSLIPPSREDUKSJONER ==========
    {
      id: 'nat10-3-6-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-6-ex-9',
        number: '3.6.9',
        type: 'classic',
        difficulty: 'medium',
        task: `Forklar forskjellen mellom "utslippsreduksjoner" (mitigation) og "tilpasning" (adaptation). Gi eksempler på hvert.`,
        multipleChoiceOptions: [
          'Utslippsreduksjoner: Stoppe problemet (fornybar energi, elbiler). Tilpasning: Leve med endringene (flomvern, tørkeresistente avlinger)',
          'Utslippsreduksjoner: Leve med endringene. Tilpasning: Stoppe problemet',
          'Utslippsreduksjoner: Øke CO₂. Tilpasning: Flytte til månen',
          'Utslippsreduksjoner: Bruke mer kull. Tilpasning: Ignorere problemet',
        ],
        solution: `**Forskjellen mellom utslippsreduksjoner og tilpasning:**

---

### **Utslippsreduksjoner (mitigation)**

**Definisjon:** Tiltak for å **redusere utslippene** av drivhusgasser og dermed **begrense klimaendringene**.

**Mål:** Hindre at klimaendringene blir verre.

**Eksempler:**

1. **Bytte til fornybar energi**
   - Sol, vind, vann i stedet for kull, olje, gass
   - Reduserer CO₂-utslipp fra kraftproduksjon

2. **Elektrifisering av transport**
   - Elbiler, el-busser, el-ferger
   - Reduserer CO₂-utslipp fra transport

3. **Spise mindre kjøtt**
   - Reduserer metan-utslipp fra husdyr

4. **Plante skog**
   - Trær tar opp CO₂ fra atmosfæren

5. **Energieffektivisering**
   - Bedre isolerte hus, LED-lys
   - Reduserer energibruk

**Konklusjon:** Utslippsreduksjoner handler om å **stoppe problemet**.

---

### **Tilpasning (adaptation)**

**Definisjon:** Tiltak for å **leve med klimaendringene** som allerede skjer.

**Mål:** Beskytte samfunnet mot konsekvensene av klimaendringer.

**Eksempler:**

1. **Flomvern**
   - Bygge voller og dammer mot flom
   - Beskytte byer mot havnivåstigning

2. **Tørkeresistente avlinger**
   - Utvikle planter som tåler tørke
   - Sikre matproduksjon i tørre områder

3. **Kjølesystemer i varme**
   - Aircondition i bygninger
   - Beskytte mot hetebølger

4. **Styrke bygninger mot ekstremvær**
   - Bygge sterkere hus som tåler storm
   - Bedre varslingssystemer

5. **Flytting av infrastruktur**
   - Flytte veier og bygninger bort fra flomområder

**Konklusjon:** Tilpasning handler om å **håndtere konsekvensene** av klimaendringer.

---

### **Oppsummering av forskjellen:**

| **Utslippsreduksjoner** | **Tilpasning** |
|---|---|
| Redusere årsaken til klimaendringer | Håndtere konsekvensene av klimaendringer |
| Kutte utslipp av drivhusgasser | Beskytte samfunnet |
| Fornybar energi, elbiler, mindre kjøtt | Flomvern, tørkeresistente avlinger |
| Stopper problemet fra å bli verre | Hjelper oss å leve med endringene |

**Hvorfor trenger vi begge?**

- **Utslippsreduksjoner** er viktigst for å begrense klimaendringene på lang sikt
- **Tilpasning** er nødvendig fordi noen klimaendringer allerede skjer og vil fortsette

**Ideelt:** Sterke utslippsreduksjoner slik at vi trenger mindre tilpasning.`,
      },
    },

    // ========== OPPGAVE 10: KLIMAPOLITIKK (VANSKELIG DRØFTING) ==========
    {
      id: 'nat10-3-6-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-6-ex-10',
        number: '3.6.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Drøft følgende påstand: "Norge kan ikke gjøre noe med klimaendringene fordi vi er et lite land og slipper ut lite CO₂ sammenlignet med store land som USA og Kina."

Gi argumenter både for og mot påstanden, og konkluder med din egen mening.`,
        multipleChoiceOptions: [
          'For: Norges utslipp er små (0,1%). Mot: Norge er rikt, eksporterer fossil energi, kan drive innovasjon og være forbilde. Konklusjon: Norge har både ansvar og muligheter',
          'For: Norge bør øke utslippene. Mot: Norge bør slutte å eksistere. Konklusjon: Klimaet fikser seg selv',
          'For: Bare store land kan gjøre noe. Mot: Ingen kan gjøre noe. Konklusjon: Det er for sent',
          'For: Norge er for lite. Mot: Norge er for stort. Konklusjon: Ingenting betyr noe',
        ],
        solution: `**Drøfting: "Norge kan ikke gjøre noe fordi vi er et lite land"**

---

### **Argumenter FOR påstanden (Norge kan ikke gjøre noe):**

**1. Norges utslipp er små globalt**
- Norge står for ca. **0.1%** av globale CO₂-utslipp
- Selv om Norge kutt alle utslipp til null, ville det ha minimal effekt på globale utslipp
- Store land som USA, Kina og India slipper ut mye mer

**2. Kostnadene for Norge**
- Klimatiltak kan være dyre for Norge (f.eks. elektrifisering av olje- og gassplattformer)
- Økonomiske konsekvenser for norsk økonomi (olje- og gassindustri)

**3. Andre land gjør ikke nok**
- Hvis andre land ikke kutter utslipp, har ikke Norges innsats noen effekt

---

### **Argumenter MOT påstanden (Norge KAN og BØR gjøre noe):**

**1. Norge er blant verdens rikeste land**
- Vi har råd til å ta klimaansvar
- Vi har ressurser til å utvikle grønn teknologi

**2. Norges utslipp per innbygger er høye**
- Selv om totale utslipp er små, er utslipp **per person** høye
- Norge ligger på topp når det gjelder forbruk og levestandard

**3. Norge eksporterer fossilt brensel**
- Norge er en stor eksportør av olje og gass
- Selv om vi ikke brenner det selv, bidrar vi til at andre brenner det
- Vi har derfor et ansvar

**4. Innovasjon og teknologi**
- Norge kan utvikle grønn teknologi (f.eks. karbonfangst, fornybar energi)
- Denne teknologien kan eksporteres og hjelpe andre land

**5. Moralsk ansvar og forbilder**
- Hvis rike land ikke tar ansvar, hvorfor skal fattige land gjøre det?
- Norge kan være et **foregangsland** og inspirere andre
- Hvis alle land tenker "vi er for små til å gjøre noe", skjer det ingenting

**6. Historisk ansvar**
- Rike land (inkludert Norge) har bidratt mest til historiske utslipp
- Vi har bygget vår velstand delvis på fossilt brensel
- Vi har derfor et historisk ansvar

---

### **Min konklusjon:**

**Norge BØR ta klimaansvar, selv om vi er et lite land.**

**Grunner:**

1. **Rettferdighet:** Norge er et av verdens rikeste land. Vi har råd til å ta ansvar, og vi har bidratt til problemet (både gjennom egne utslipp og eksport av olje/gass).

2. **Foregangsland:** Hvis alle rike land tar ansvar, vil det ha stor effekt globalt. Norge kan vise at det er mulig å kutte utslipp uten å ødelegge økonomien.

3. **Teknologiutvikling:** Norge kan utvikle teknologi (karbonfangst, fornybar energi, elbiler) som andre land kan bruke. Dette kan ha stor effekt.

4. **Moralsk plikt:** Hvis vi ikke tar ansvar, har vi ingen rett til å forvente at andre gjør det.

**Men:**
- Norge alene kan ikke løse klimakrisen. **Internasjonalt samarbeid** er nødvendig.
- Vi må presse store land (USA, Kina, India) til å kutte utslipp.

**Oppsummering:**

"Vi er for små" er **ikke en god unnskyldning**. Hvis alle tenkte slik, ville ingen gjort noe. Norge bør ta ansvar, både fordi vi har råd til det, og fordi vi kan inspirere andre.

**Klimaendringene løses ikke av ett land alene, men hvert land må bidra.**`,
      },
    },

    // ========== OPPGAVE EXTRA 1: DRIVHUSGASSER IDENTIFISERE ==========
    {
      id: 'nat10-3-6-oppg-extra-1',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-6-oppg-extra-1',
        number: '3.6.11',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av følgende gasser er IKKE en drivhusgass?',
        options: [
          'Karbondioksid (CO₂)',
          'Metan (CH₄)',
          'Nitrogen (N₂)',
          'Lystgass (N₂O)',
        ],
        answer: 2,
        solution: `**Riktig svar: Nitrogen (N₂)**

**Forklaring:**
Nitrogen utgjør ca. 78% av atmosfæren, men er IKKE en drivhusgass. N₂-molekylet absorberer ikke infrarød stråling.

**Drivhusgasser er:**
- CO₂ (karbondioksid)
- CH₄ (metan)
- N₂O (lystgass)
- Vanndamp (H₂O)
- Fluorholdige gasser

**Ikke drivhusgasser:**
- N₂ (nitrogen) – 78% av atmosfæren
- O₂ (oksygen) – 21% av atmosfæren
- Argon (Ar) – ca. 1% av atmosfæren`,
      },
    },

    // ========== OPPGAVE EXTRA 2: CO₂-NIVÅ TOLKNING ==========
    {
      id: 'nat10-3-6-oppg-extra-2',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-6-oppg-extra-2',
        number: '3.6.12',
        type: 'classic',
        difficulty: 'medium',
        task: `CO₂-nivået i atmosfæren var 280 ppm i 1750 og er nå over 420 ppm.

a) Beregn den prosentvise økningen i CO₂-nivå.
b) Hva er hovedårsaken til denne økningen?
c) Hvorfor er økningen bekymringsfull selv om CO₂ bare utgjør 0,042% av atmosfæren?`,
        solution: `**a) Prosentvis økning:**

Økning = 420 - 280 = 140 ppm

Prosentvis økning = (140 / 280) × 100% = **50%**

CO₂-nivået har økt med 50% siden industrialiseringen.

---

**b) Hovedårsak:**

Hovedårsaken er **forbrenning av fossile brennstoff** (kull, olje, naturgass). Når vi brenner fossile brennstoff frigjøres karbon som har vært lagret under bakken i millioner av år, som CO₂ til atmosfæren.

Andre bidragende årsaker:
- Avskoging (frigjør CO₂, reduserer opptak)
- Sementproduksjon
- Landbruk

---

**c) Hvorfor er det bekymringsfullt?**

Selv om CO₂ bare utgjør 0,042% av atmosfæren, er den en svært effektiv drivhusgass:

1. **CO₂ absorberer infrarød stråling** – selv små mengder har stor effekt
2. **Lang levetid** – CO₂ blir i atmosfæren i 100-300 år
3. **50% økning er enorm** – dette er den høyeste konsentrasjonen på 800 000 år
4. **Liten endring, stor effekt** – global temperatur har allerede økt 1,2°C

Tenk på det som medisin: Selv en liten dose gift kan ha stor effekt!`,
      },
    },

    // ========== OPPGAVE EXTRA 3: KARBONKRETSLØPET ==========
    {
      id: 'nat10-3-6-oppg-extra-3',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-6-oppg-extra-3',
        number: '3.6.13',
        type: 'classic',
        difficulty: 'medium',
        task: `Beskriv hvordan karbon beveger seg mellom atmosfæren, planter, havet og fossile brennstoff. Forklar hvorfor forbrenning av fossile brennstoff forstyrrer denne balansen.`,
        solution: `**Karbonkretsløpet:**

**1. Atmosfæren → Planter (fotosyntese)**
Planter tar opp CO₂ fra luften gjennom fotosyntese:
CO₂ + H₂O + sollys → glukose + O₂

**2. Planter → Atmosfæren (respirasjon og forråtnelse)**
Når planter puster (cellerespirasjon) eller dør og råtner, frigjøres CO₂ tilbake.

**3. Atmosfæren → Havet (oppløsning)**
CO₂ løses i havoverflaten. Havet er et stort karbonlager.

**4. Havet → Atmosfæren (utgassing)**
Varmt vann holder mindre CO₂, og noe CO₂ slippes tilbake til atmosfæren.

**5. Fossile brennstoff (langtidslagring)**
Over millioner av år ble døde planter og dyr begravd og omdannet til kull, olje og gass. Karbonet ble lagret under bakken.

---

**Hvorfor forbrenning forstyrrer balansen:**

I det naturlige kretsløpet er det **balanse** – like mye CO₂ tas opp som slippes ut.

Når vi brenner fossile brennstoff, frigjøres karbon som har vært lagret i millioner av år, tilbake til atmosfæren **på bare noen tiår**. Dette er som å ta penger fra en langsiktig sparekonto og bruke dem alle på en gang.

Naturen kan ikke ta opp alt det ekstra CO₂ raskt nok, og derfor øker CO₂-nivået i atmosfæren.`,
      },
    },

    // ========== OPPGAVE EXTRA 4: METANS DRIVHUSEFFEKT ==========
    {
      id: 'nat10-3-6-oppg-extra-4',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-6-oppg-extra-4',
        number: '3.6.14',
        type: 'classic',
        difficulty: 'medium',
        task: `Metan (CH₄) er ca. 28 ganger sterkere som drivhusgass enn CO₂ per molekyl, men det er mye mindre metan i atmosfæren.

a) Nevn tre kilder til metanutslipp.
b) Hvorfor er metan likevel mindre bekymringsfull enn CO₂ på lang sikt?
c) Et norsk kubruk har 50 kyr. Hver ku slipper ut ca. 100 kg metan per år. Beregn den totale drivhuseffekten i CO₂-ekvivalenter.`,
        solution: `**a) Tre kilder til metanutslipp:**

1. **Husdyr (drøvtyggere)** – kyr, sauer og geiter produserer metan gjennom fordøyelsen (raping og promp)
2. **Søppelfyllinger** – organisk avfall som råtner uten oksygen produserer metan
3. **Olje- og gassproduksjon** – lekkasjer fra rørledninger og produksjonsanlegg

---

**b) Hvorfor metan er mindre bekymringsfull på lang sikt:**

Metan har kort **levetid i atmosfæren** – ca. 12 år, mens CO₂ varer i 100-300 år.

Det betyr at hvis vi slutter å slippe ut metan, vil nivåene synke relativt raskt. CO₂ derimot hoper seg opp over tid fordi det varer så mye lenger.

Men: Metan gir sterk oppvarming på kort sikt (20-årsperiode), så å kutte metanutslipp kan gi rask klimaeffekt.

---

**c) CO₂-ekvivalenter fra kubruket:**

Metanutslipp totalt = 50 kyr × 100 kg metan/ku = **5000 kg metan per år**

CO₂-ekvivalenter = 5000 kg × 28 = **140 000 kg CO₂-ekvivalenter** = **140 tonn CO₂-ekvivalenter**

**Tolkning:**
50 kyr gir like stor drivhuseffekt som 140 tonn CO₂ per år. Til sammenligning er gjennomsnittlig utslipp per nordmann ca. 8 tonn CO₂/år. Kubruket tilsvarer altså utslippene fra ca. 17-18 personer.`,
      },
    },

    // ========== OPPGAVE EXTRA 5: PARISAVTALEN ==========
    {
      id: 'nat10-3-6-oppg-extra-5',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-6-oppg-extra-5',
        number: '3.6.15',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er målet i Parisavtalen?',
        options: [
          'Holde global oppvarming godt under 2°C, helst 1,5°C',
          'Stoppe all bruk av fossil energi innen 2025',
          'Fjerne all CO₂ fra atmosfæren',
          'Bygge en skjerm rundt jorda som blokkerer sollys',
        ],
        answer: 0,
        solution: `**Riktig svar: Holde global oppvarming godt under 2°C, helst 1,5°C**

**Forklaring:**

Parisavtalen ble vedtatt i 2015 av nesten alle verdens land. Hovedmålet er å begrense global oppvarming til **godt under 2°C**, og helst **1,5°C**, sammenlignet med før-industrielt nivå.

**Viktige punkter:**
- Alle land skal sette egne utslippsmål
- Rike land skal hjelpe fattige land med klimatiltak
- Målene skal skjerpes hvert femte år
- Global temperatur har allerede økt med ca. 1,2°C

**Status:** Vi er på vei mot 2,5-3°C oppvarming med dagens politikk. Mye mer må gjøres!`,
      },
    },

    // ========== OPPGAVE EXTRA 6: TIPPING POINTS ==========
    {
      id: 'nat10-3-6-oppg-extra-6',
      type: 'exercise',
      exercise: {
        id: 'nat10-3-6-oppg-extra-6',
        number: '3.6.16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Forklar hva et "vippepunkt" (tipping point) er i klimasammenheng. Gi to eksempler på mulige vippepunkter og forklar hvorfor de er farlige.`,
        solution: `**Hva er et vippepunkt?**

Et vippepunkt (tipping point) er et punkt der en liten ytterligere endring fører til en stor, ofte irreversibel endring i klimasystemet. Når et vippepunkt er passert, kan prosessen ikke stoppes selv om vi slutter å slippe ut drivhusgasser.

**Eksempel 1: Smelting av Grønlands isbre**

Grønlands isbre inneholder nok is til å heve havnivået med ca. 7 meter. Hvis temperaturen stiger nok, starter en selvforsterkende prosess:
- Is smelter → Overflaten synker til lavere, varmere høyder
- Varmere luft ved lavere høyde → Mer smelting
- Prosessen akselererer og kan ikke stoppes

Hvis isbreen smelter helt, vil den ikke komme tilbake selv om temperaturen synker – fordi overflaten er for lav til å få ny is.

**Eksempel 2: Amazonas-regnskogen dør ut**

Regnskogen lager sitt eget klima gjennom fordampning (trærne frigjør vanndamp). Hvis for mye skog hugges eller tørken blir for sterk:
- Mindre skog → Mindre nedbør → Enda mer skog dør
- Regnskogen kan bli savanne (gressletter)
- Enormt mye CO₂ frigjøres fra trærne

**Hvorfor vippepunkter er farlige:**

1. **Irreversible** – kan ikke angres
2. **Selvforsterkende** – settes i gang av seg selv
3. **Kaskadering** – ett vippepunkt kan utløse andre
4. **Uforutsigbare** – vanskelig å vite nøyaktig når de inntreffer

**Konklusjon:** Vippepunkter er grunnen til at vi må handle raskt for å begrense oppvarmingen.`,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'nat10-3-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Viktige begreper

**Vær vs. klima:**
- **Vær:** Tilstand i atmosfæren nå (kortsiktig)
- **Klima:** Gjennomsnittlig vær over lang tid (30+ år)

**Drivhuseffekten:**
- Naturlig prosess som holder jorda varm
- Drivhusgasser absorberer varmestråling
- Gjør jorda ca. 33°C varmere enn den ellers ville vært

**Drivhusgasser:**
- Vanndamp (H₂O), karbondioksid (CO₂), metan (CH₄), lystgass (N₂O), fluorholdige gasser
- CO₂ er viktigst for menneskeskapte klimaendringer

**Forsterket drivhuseffekt:**
- Menneskelig aktivitet øker drivhusgassene
- Forbrenning av fossilt brensel er hovedårsaken
- Resulterer i global oppvarming

**Klimaendringer – observerte effekter:**
- Temperatur stiger (1.2°C siden 1850)
- Isbreer smelter
- Havnivået stiger
- Mer ekstremvær
- Endringer i økosystemer

**Tilbakekoblingsmekanismer:**
- **Positive:** Forsterker klimaendringer (is-albedo, permafrost, vanndamp)
- **Negative:** Demper klimaendringer (plantevekst)

**Klimatiltak:**
- **Utslippsreduksjoner (mitigation):** Redusere utslipp av drivhusgasser
  - Fornybar energi, elektrifisering, mindre kjøtt, plante skog
- **Tilpasning (adaptation):** Håndtere konsekvensene
  - Flomvern, tørkeresistente avlinger, kjølesystemer

**Parisavtalen:**
- Internasjonalt klimaavtale fra 2015
- Mål: Holde oppvarmingen godt under 2°C (helst 1.5°C)

### Nøkkelpunkter

1. **Drivhuseffekten er naturlig og nødvendig** – uten den ville jorda vært for kald til liv

2. **Menneskelig aktivitet forsterker drivhuseffekten** – hovedsakelig gjennom forbrenning av fossilt brensel

3. **Klimaendringene skjer raskt** – raskere enn noen gang i menneskehetens historie

4. **Vi ser allerede konsekvenser** – smelting av is, havnivåstigning, ekstremvær

5. **Tilbakekoblinger gjør problemet verre** – små endringer kan gi store konsekvenser

6. **Vi trenger både utslippsreduksjoner og tilpasning** – kutte utslipp og forberede oss på endringer

7. **Internasjonalt samarbeid er avgjørende** – klimaendringer er et globalt problem

### Hva kan du gjøre?

**Som individ:**
- Spis mindre kjøtt
- Reis mer kollektivt, sykle, gå
- Fly mindre
- Spar energi hjemme
- Reduser forbruk og resirkuler

**Som samfunnsborger:**
- Stem på politikere som tar klimaet på alvor
- Engasjer deg i klimabevegelsen
- Spre kunnskap om klimaendringer

### Neste steg

Nå som du forstår klimasystemet og drivhuseffekten, er du klar til å:
- Utforske konkrete klimatiltak i Norge
- Lære om fornybar energi i detalj
- Forstå sammenhenger mellom klima og økosystemer
- Vurdere etiske spørsmål knyttet til klimarettferdighet`,
    },
  ],
  exercises: [], // Oppgavene er embedded i content
};
