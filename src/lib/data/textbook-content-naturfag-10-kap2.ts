/**
 * Tekstbok kapitler for Naturfag 10 - Seksjon 2: Kjemi (2.1-2.6)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Atomer og grunnstoffer
// LK20: Bruke atommodeller og periodesystemet til å gjøre rede for grunnstoffer
// ============================================================================

export const CHAPTER_NAT10_2_1: TextbookChapter = {
  id: 'naturfag-10-2-1',
  courseId: 'naturfag-10',
  chapterNumber: '2.1',
  title: 'Atomer og grunnstoffer',
  description: 'Lær om atomets oppbygning med protoner, nøytroner og elektroner.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke atommodeller og periodesystemet til å gjøre rede for grunnstoffer og kjemiske bindinger',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'nat10-2-1-intro',
      type: 'text',
      content: `## Atomer og grunnstoffer

Alt rundt deg – bordet du sitter ved, luften du puster, vannet du drikker, og til og med kroppen din – er bygd opp av små partikler kalt **atomer**.

Atomer er så utrolig små at du ikke kan se dem med det blotte øye, ikke engang med et vanlig mikroskop. Men selv om de er mikroskopiske, er de grunnlaget for all materie i universet.

I dette kapitlet lærer du:
- Hva et atom er og hvordan det er bygd opp
- Forskjellen mellom protoner, nøytroner og elektroner
- Hva grunnstoffer er
- Hvordan atomer av samme grunnstoff kan være forskjellige (isotoper)
- Hvordan elektroner er organisert i skall rundt atomkjernen`,
    },

    // ========== HVA ER ET ATOM? ==========
    {
      id: 'nat10-2-1-hva-er-atom',
      type: 'text',
      content: `## Hva er et atom?

Et **atom** er den minste enheten av et grunnstoff som fortsatt har egenskapene til det grunnstoffet.

### Hvor små er atomer?

Atomer er **utrolig små**. For å gi deg en ide:
- Det er omtrent **100 millioner** atomer på rad i bare 1 cm
- Et hårstråt er omtrent **1 million** atomer tykt
- Hvis du forstørret et eple til jordens størrelse, ville atomene i eplet være på størrelse med det opprinnelige eplet

### Atomets oppdagelse

Ideen om atomer er gammel:
- **400 f.Kr.:** Den greske filosofen Demokrit foreslo at materie består av små, udelelige partikler han kalte "atomos" (gresk for "udelelig")
- **1803:** John Dalton presenterte den første vitenskapelige atomteorien
- **1897:** J.J. Thomson oppdaget elektroner
- **1911:** Ernest Rutherford oppdaget atomkjernen
- **1913:** Niels Bohr utviklet en modell med elektroner i baner rundt kjernen

I dag vet vi mye mer om atomer, men grunnideen er den samme: atomer er de minste byggesteinene i materie.`,
    },

    // ========== DEFINISJON: ATOM ==========
    {
      id: 'nat10-2-1-def-atom',
      type: 'definition',
      title: 'Atom',
      content: `Et **atom** er den minste enheten av et grunnstoff som beholder alle kjemiske egenskapene til det grunnstoffet.

Et atom består av:
- En **kjerne** (proton + nøytron) i sentrum
- En **elektronsky** (elektroner) som beveger seg rundt kjernen

Atomer er de grunnleggende byggesteinene i all materie.`,
    },

    // ========== ATOMETS OPPBYGNING ==========
    {
      id: 'nat10-2-1-oppbygning',
      type: 'text',
      content: `## Atomets oppbygning

Et atom består av tre typer partikler:

### 1. Protoner (p⁺)
- **Ladning:** Positiv (+1)
- **Plassering:** I atomkjernen (sentrum av atomet)
- **Masse:** ca. 1 atommasseenhet (u)
- **Betydning:** Antall protoner bestemmer hvilket grunnstoff atomet er

### 2. Nøytroner (n⁰)
- **Ladning:** Nøytral (0)
- **Plassering:** I atomkjernen (sammen med protonene)
- **Masse:** ca. 1 atommasseenhet (u)
- **Betydning:** Bidrar til atomets masse og stabilitet

### 3. Elektroner (e⁻)
- **Ladning:** Negativ (-1)
- **Plassering:** I elektronskyen rundt kjernen
- **Masse:** ca. 0,0005 u (nesten masseløs sammenlignet med protoner/nøytroner)
- **Betydning:** Deltar i kjemiske reaksjoner

### Atomkjerne vs. elektronsky

**Atomkjernen:**
- Inneholder protoner og nøytroner
- Svært liten, men inneholder nesten all massen til atomet
- Positivt ladet (pga. protonene)

**Elektronskyen:**
- Inneholder elektronene som beveger seg rundt kjernen
- Tar opp nesten hele volumet til atomet
- Negativt ladet (pga. elektronene)

### Atomets størrelse

Hvis atomkjernen var på størrelse med en ert (ca. 1 cm i diameter), ville hele atomet (elektronskyen inkludert) være på størrelse med et fotballstadion! Det betyr at atomet for det meste består av **tomt rom**.`,
    },

    // ========== DEFINISJON: PROTON, NØYTRON, ELEKTRON ==========
    {
      id: 'nat10-2-1-def-partikler',
      type: 'definition',
      title: 'Subatomære partikler',
      content: `**Proton (p⁺):**
Positivt ladet partikkel i atomkjernen. Antall protoner = atomnummer.

**Nøytron (n⁰):**
Nøytral partikkel i atomkjernen. Bidrar til atomets masse.

**Elektron (e⁻):**
Negativt ladet partikkel som beveger seg rundt atomkjernen i elektronskyen.

**Sammenligning:**

| Partikkel | Ladning | Masse (u) | Plassering |
|-----------|---------|-----------|------------|
| Proton    | +1      | ~1        | Kjerne     |
| Nøytron   | 0       | ~1        | Kjerne     |
| Elektron  | -1      | ~0,0005   | Elektronsky |`,
    },

    // ========== ATOMNUMMER OG MASSETALL ==========
    {
      id: 'nat10-2-1-atomnummer-massetall',
      type: 'text',
      content: `## Atomnummer og massetall

To viktige tall beskriver et atom:

### Atomnummer (Z)

**Atomnummeret** er antall **protoner** i atomkjernen.

- Hvert grunnstoff har et unikt atomnummer
- Atomnummeret bestemmer hvilket grunnstoff det er
- I et nøytralt atom: antall protoner = antall elektroner

**Eksempler:**
- Hydrogen (H): Z = 1 (1 proton)
- Karbon (C): Z = 6 (6 protoner)
- Oksygen (O): Z = 8 (8 protoner)
- Jern (Fe): Z = 26 (26 protoner)

### Massetall (A)

**Massetallet** er summen av **protoner** og **nøytroner** i kjernen.

- Massetall (A) = protoner + nøytroner
- Elektronene bidrar nesten ingenting til massen
- Massetallet er omtrent lik atomets masse i atommasseenheter (u)

**Eksempel:**
Et karbonatom med 6 protoner og 6 nøytroner:
- Massetall A = 6 + 6 = 12

### Beregning av partikler

Hvis du kjenner atomnummer og massetall, kan du finne antall nøytroner:

**Nøytroner = Massetall - Atomnummer**

eller

**n = A - Z**

**Eksempel:**
Oksygen-16 (¹⁶O):
- Atomnummer Z = 8 (oksygen har alltid 8 protoner)
- Massetall A = 16
- Nøytroner = 16 - 8 = 8

### Notasjon

Atomer skrives ofte slik:

**ᴬ/ᴢX**

hvor:
- A = massetall (øverst)
- Z = atomnummer (nederst)
- X = grunnstofsymbol

**Eksempel:** ¹²/₆C

betyr: Karbonatom med massetall 12 og atomnummer 6.`,
    },

    // ========== DEFINISJON: ATOMNUMMER OG MASSETALL ==========
    {
      id: 'nat10-2-1-def-nummer',
      type: 'definition',
      title: 'Atomnummer og massetall',
      content: `**Atomnummer (Z):**
Antall protoner i atomkjernen. Bestemmer hvilket grunnstoff det er.

**Massetall (A):**
Summen av protoner og nøytroner i atomkjernen.

**Formler:**
- Z = antall protoner
- A = protoner + nøytroner
- Nøytroner = A - Z

**Notasjon:** ᴬ/ᴢX (eksempel: ¹²/₆C)`,
    },

    // ========== EKSEMPEL: BEREGNING AV PARTIKLER ==========
    {
      id: 'nat10-2-1-ex-beregning',
      type: 'example',
      title: 'Eksempel: Beregning av subatomære partikler',
      problem: `Et natriumatom (Na) har atomnummer 11 og massetall 23.

a) Hvor mange protoner har atomet?
b) Hvor mange nøytroner har atomet?
c) Hvor mange elektroner har et nøytralt natriumatom?`,
      solution: `**a) Protoner:**

Atomnummer Z = 11

Atomnummeret forteller oss antall protoner.

**Svar:** Atomet har **11 protoner**.

---

**b) Nøytroner:**

Massetall A = 23
Atomnummer Z = 11

Nøytroner = A - Z = 23 - 11 = 12

**Svar:** Atomet har **12 nøytroner**.

---

**c) Elektroner:**

I et **nøytralt atom** er antall elektroner = antall protoner.

Siden atomet har 11 protoner, må det ha 11 elektroner for å være nøytralt (positiv ladning fra protoner = negativ ladning fra elektroner).

**Svar:** Et nøytralt natriumatom har **11 elektroner**.

---

**Oppsummering for ²³Na:**
- 11 protoner (p⁺)
- 12 nøytroner (n⁰)
- 11 elektroner (e⁻) (hvis nøytralt)`,
    },

    // ========== GRUNNSTOFFER ==========
    {
      id: 'nat10-2-1-grunnstoffer',
      type: 'text',
      content: `## Grunnstoffer

Et **grunnstoff** er et stoff som bare består av én type atomer (atomer med samme antall protoner).

### Kjennetegn på grunnstoffer

- Alle atomer i et grunnstoff har **samme atomnummer** (samme antall protoner)
- Grunnstoffer kan **ikke brytes ned** til enklere stoffer ved kjemiske reaksjoner
- Det finnes **118 kjente grunnstoffer** (92 naturlige + 26 kunstige)
- Hvert grunnstoff har et **unikt symbol** (1-2 bokstaver)

### Eksempler på grunnstoffer

**Metaller:**
- Jern (Fe) - atomnummer 26
- Gull (Au) - atomnummer 79
- Kobber (Cu) - atomnummer 29

**Ikke-metaller:**
- Oksygen (O) - atomnummer 8
- Karbon (C) - atomnummer 6
- Klor (Cl) - atomnummer 17

**Edelgasser:**
- Helium (He) - atomnummer 2
- Neon (Ne) - atomnummer 10
- Argon (Ar) - atomnummer 18

### Periodesystemet

Alle grunnstoffer er organisert i **periodesystemet** basert på atomnummer og kjemiske egenskaper. Periodesystemet er et av de viktigste verktøyene i kjemi!

Du vil lære mer om periodesystemet i neste kapittel.`,
    },

    // ========== DEFINISJON: GRUNNSTOFF ==========
    {
      id: 'nat10-2-1-def-grunnstoff',
      type: 'definition',
      title: 'Grunnstoff',
      content: `Et **grunnstoff** er et stoff som består av atomer med samme atomnummer (samme antall protoner).

Grunnstoffer:
- Kan ikke brytes ned til enklere stoffer ved kjemiske reaksjoner
- Har unike kjemiske og fysiske egenskaper
- Representeres med et kjemisk symbol (f.eks. H, O, C, Fe)

**Eksempler:**
- Hydrogen (H), Oksygen (O), Karbon (C), Jern (Fe), Gull (Au)`,
    },

    // ========== ISOTOPER ==========
    {
      id: 'nat10-2-1-isotoper',
      type: 'text',
      content: `## Isotoper

Alle atomer av samme grunnstoff har samme antall protoner, men de kan ha **forskjellig antall nøytroner**. Slike varianter av samme grunnstoff kalles **isotoper**.

### Hva er isotoper?

**Isotoper** er atomer av samme grunnstoff (samme atomnummer Z) som har forskjellig antall nøytroner (og dermed forskjellig massetall A).

**Eksempel: Karbon har tre naturlige isotoper:**

**1. Karbon-12 (¹²C):**
- 6 protoner
- 6 nøytroner
- Massetall: 12
- Vanligste isotopen (~99%)

**2. Karbon-13 (¹³C):**
- 6 protoner
- 7 nøytroner
- Massetall: 13
- Sjelden (~1%)

**3. Karbon-14 (¹⁴C):**
- 6 protoner
- 8 nøytroner
- Massetall: 14
- Svært sjelden, radioaktiv
- Brukes til karbondatering av fossiler

Alle tre er **karbon** fordi de har 6 protoner, men de har forskjellig masse fordi de har ulikt antall nøytroner.

### Kjemiske egenskaper

Isotoper av samme grunnstoff har **like kjemiske egenskaper** fordi kjemiske reaksjoner bestemmes av antall elektroner (og dermed protoner), ikke nøytroner.

**Eksempel:**
- ¹²C og ¹³C reagerer likt i kjemiske reaksjoner
- Begge brenner til CO₂
- Begge kan danne diamant eller grafitt

### Fysiske egenskaper

Isotoper har **forskjellige fysiske egenskaper** fordi de har ulik masse.

**Eksempel:**
- ¹³C er tyngre enn ¹²C
- Hydrogen-2 (deuterium) lager "tungt vann" (D₂O) som koker ved høyere temperatur enn vanlig vann (H₂O)

### Hvorfor er isotoper viktige?

**1. Karbondatering:**
¹⁴C brukes til å bestemme alderen på fossiler og arkeologiske funn.

**2. Medisinsk bruk:**
Radioaktive isotoper brukes i stråleterapi mot kreft og i medisinsk avbildning (PET-scan).

**3. Vitenskapelig forskning:**
Isotoper brukes som sporere i biologiske og kjemiske studier.`,
    },

    // ========== DEFINISJON: ISOTOPER ==========
    {
      id: 'nat10-2-1-def-isotoper',
      type: 'definition',
      title: 'Isotoper',
      content: `**Isotoper** er atomer av samme grunnstoff (samme atomnummer) som har forskjellig antall nøytroner (og dermed forskjellig massetall).

**Egenskaper:**
- Samme antall protoner (samme Z)
- Forskjellig antall nøytroner
- Forskjellig massetall (A)
- Like kjemiske egenskaper
- Forskjellige fysiske egenskaper

**Eksempel:**
- ¹²C: 6p, 6n (massetall 12)
- ¹³C: 6p, 7n (massetall 13)
- ¹⁴C: 6p, 8n (massetall 14)`,
    },

    // ========== EKSEMPEL: ISOTOPER ==========
    {
      id: 'nat10-2-1-ex-isotoper',
      type: 'example',
      title: 'Eksempel: Sammenligning av isotoper',
      problem: `Hydrogen har tre isotoper:

**Hydrogen-1 (protium):** ¹H
**Hydrogen-2 (deuterium):** ²H eller D
**Hydrogen-3 (tritium):** ³H eller T

a) Hvor mange protoner, nøytroner og elektroner har hver isotop?
b) Hvorfor er alle tre isotoper fortsatt hydrogen?
c) Hvilken isotop er lettest? Hvilken er tyngst?`,
      solution: `**a) Protoner, nøytroner og elektroner:**

Alle hydrogenisotoper har atomnummer Z = 1 (hydrogen har alltid 1 proton).

**Hydrogen-1 (¹H):**
- Protoner: 1
- Nøytroner: A - Z = 1 - 1 = 0
- Elektroner: 1 (nøytralt atom)

**Hydrogen-2 (²H eller D):**
- Protoner: 1
- Nøytroner: A - Z = 2 - 1 = 1
- Elektroner: 1 (nøytralt atom)

**Hydrogen-3 (³H eller T):**
- Protoner: 1
- Nøytroner: A - Z = 3 - 1 = 2
- Elektroner: 1 (nøytralt atom)

---

**b) Hvorfor er alle tre isotoper hydrogen?**

Et grunnstoff defineres av **antall protoner** (atomnummeret Z).

Alle tre isotoper har **1 proton**, derfor er de alle **hydrogen**.

Det som varierer er antall **nøytroner**, men det endrer ikke hvilket grunnstoff det er – bare massen.

---

**c) Lettest og tyngst isotop:**

Massetallet (A) = protoner + nøytroner

- **¹H:** A = 1 (lettest)
- **²H:** A = 2
- **³H:** A = 3 (tyngst)

**Svar:**
- **Lettest:** Hydrogen-1 (¹H) med massetall 1
- **Tyngst:** Hydrogen-3 (³H) med massetall 3

---

**Interessant fakta:**
- Hydrogen-1 er den vanligste isotopen (~99.98%)
- Hydrogen-2 (deuterium) brukes i atomreaktorer
- Hydrogen-3 (tritium) er radioaktiv og brukes i fusjonsforskning`,
    },

    // ========== ELEKTRONSKAL ==========
    {
      id: 'nat10-2-1-elektronskal',
      type: 'text',
      content: `## Elektronskal

Elektronene i et atom er ikke tilfeldig plassert rundt kjernen. De er organisert i **elektronskal** (også kalt energinivåer eller skall).

### Hva er elektronskal?

Elektronskal er områder rundt atomkjernen der elektroner befinner seg. Du kan tenke på dem som "baner" eller "lag" rundt kjernen.

Skallene har navn:
- **K-skall** (innerst, nærmest kjernen)
- **L-skall**
- **M-skall**
- **N-skall**
- osv.

### Regler for elektronskal

**1. Elektronene fyller opp skallene fra innerst til ytterst**

Først fylles K-skallet, deretter L-skallet, så M-skallet, osv.

**2. Hvert skall kan romme et bestemt antall elektroner**

Maksimalt antall elektroner i hvert skall:

| Skall | Maks elektroner |
|-------|-----------------|
| K     | 2               |
| L     | 8               |
| M     | 18*             |
| N     | 32*             |

*For 10. klasse holder det å huske at M kan ha maks 8 elektroner for de første 20 grunnstoffene.

**3. Det ytterste skallet er viktigst for kjemiske egenskaper**

Elektronene i det ytterste skallet kalles **valenselektroner**, og de bestemmer hvordan atomet reagerer kjemisk.

### Elektronkonfigurasjon

**Elektronkonfigurasjon** beskriver hvordan elektronene er fordelt i skallene.

**Eksempler:**

**Hydrogen (H) - 1 elektron:**
- K: 1

**Helium (He) - 2 elektroner:**
- K: 2 (fullt K-skall)

**Karbon (C) - 6 elektroner:**
- K: 2
- L: 4

**Oksygen (O) - 8 elektroner:**
- K: 2
- L: 6

**Natrium (Na) - 11 elektroner:**
- K: 2
- L: 8
- M: 1

**Argon (Ar) - 18 elektroner:**
- K: 2
- L: 8
- M: 8 (fullt M-skall for de første 20 grunnstoffene)

### Hvordan finne elektronkonfigurasjon?

**Steg 1:** Finn antall elektroner (= atomnummer Z for nøytrale atomer)

**Steg 2:** Fyll K-skallet først (maks 2 elektroner)

**Steg 3:** Fyll L-skallet (maks 8 elektroner)

**Steg 4:** Fyll M-skallet (maks 8 elektroner for de første 20 grunnstoffene)

**Eksempel: Klor (Cl), Z = 17**

Klor har 17 elektroner.

- K-skall: 2 elektroner (fullt)
- L-skall: 8 elektroner (fullt)
- M-skall: 17 - 2 - 8 = 7 elektroner

Elektronkonfigurasjon: K=2, L=8, M=7`,
    },

    // ========== DEFINISJON: ELEKTRONSKAL ==========
    {
      id: 'nat10-2-1-def-elektronskal',
      type: 'definition',
      title: 'Elektronskal',
      content: `**Elektronskal** (eller energinivåer) er områder rundt atomkjernen der elektroner befinner seg.

**Skallnavn:**
K (innerst), L, M, N, osv.

**Maksimalt antall elektroner per skall:**
- K-skall: maks 2
- L-skall: maks 8
- M-skall: maks 18 (eller 8 for de første 20 grunnstoffene)

**Opprykk:**
Elektroner fyller først det innerste skallet, deretter neste skall, osv.

**Elektronkonfigurasjon:**
Beskrivelse av hvordan elektroner er fordelt i skallene.
Eksempel: Oksygen (O) har konfigurasjon K=2, L=6.`,
    },

    // ========== VALENSELEKTRONER ==========
    {
      id: 'nat10-2-1-valenselektroner',
      type: 'text',
      content: `## Valenselektroner

De elektronene som befinner seg i det **ytterste elektronskallet** kalles **valenselektroner**.

### Hvorfor er valenselektroner viktige?

Valenselektroner er **svært viktige** fordi de bestemmer:
- Hvordan atomet reagerer kjemisk
- Hvilke bindinger atomet kan danne
- Hvilke stoffer atomet kan kombineres med

Elektroner i de indre skallene (f.eks. K- og L-skall) deltar vanligvis **ikke** i kjemiske reaksjoner. Det er valenselektronene som "jobber" når atomer reagerer med hverandre.

### Eksempler på valenselektroner

**Natrium (Na) - Z = 11:**
- Elektronkonfigurasjon: K=2, L=8, M=1
- **Valenselektroner: 1** (i M-skallet)

Natrium har **1 valenselektron**. Denne ene elektronen er lett å miste, derfor reagerer natrium lett med andre stoffer (f.eks. klor).

**Klor (Cl) - Z = 17:**
- Elektronkonfigurasjon: K=2, L=8, M=7
- **Valenselektroner: 7** (i M-skallet)

Klor har **7 valenselektroner**. Det "ønsker" seg én elektron til for å få fullt ytterste skall (8), derfor reagerer klor lett med stoffer som natrium.

**Oksygen (O) - Z = 8:**
- Elektronkonfigurasjon: K=2, L=6
- **Valenselektroner: 6** (i L-skallet)

Oksygen har **6 valenselektroner**. Det "ønsker" seg to ekstra elektroner for å få fullt L-skall (8).

**Neon (Ne) - Z = 10:**
- Elektronkonfigurasjon: K=2, L=8
- **Valenselektroner: 8** (i L-skallet)

Neon har **8 valenselektroner** – et fullt ytterste skall! Derfor er neon veldig stabilt og reagerer nesten ikke med andre stoffer (det er en edelgass).

### Oktettregelen

Atomer "ønsker" å ha **8 elektroner i ytterste skall** (eller 2 for K-skallet). Dette kalles **oktettregelen**.

Atomer oppnår full oktett ved å:
- **Avgi** elektroner (f.eks. natrium)
- **Ta opp** elektroner (f.eks. klor)
- **Dele** elektroner med andre atomer (f.eks. hydrogen i H₂)

Du vil lære mer om dette når dere tar kjemiske bindinger senere!`,
    },

    // ========== DEFINISJON: VALENSELEKTRONER ==========
    {
      id: 'nat10-2-1-def-valenselektroner',
      type: 'definition',
      title: 'Valenselektroner',
      content: `**Valenselektroner** er elektronene i det ytterste elektronskallet i et atom.

**Betydning:**
- Bestemmer atomets kjemiske egenskaper
- Deltar i kjemiske reaksjoner og bindinger
- Forklarer hvorfor noen stoffer er reaktive og andre stabile

**Oktettregelen:**
Atomer "ønsker" 8 elektroner i ytterste skall (eller 2 for K-skallet).

**Eksempler:**
- Natrium (Na): K=2, L=8, M=1 → 1 valenselektron
- Klor (Cl): K=2, L=8, M=7 → 7 valenselektroner
- Neon (Ne): K=2, L=8 → 8 valenselektroner (fullt skall, stabilt)`,
    },

    // ========== EKSEMPEL: ELEKTRONKONFIGURASJON ==========
    {
      id: 'nat10-2-1-ex-elektronkonfigurasjon',
      type: 'example',
      title: 'Eksempel: Finne elektronkonfigurasjon og valenselektroner',
      problem: `Svovel (S) har atomnummer 16.

a) Hvor mange elektroner har et nøytralt svovelatom?
b) Skriv elektronkonfigurasjonen til svovel (fordeling i K-, L- og M-skall).
c) Hvor mange valenselektroner har svovel?
d) Hvor mange elektroner trenger svovel for å få fullt ytterste skall?`,
      solution: `**a) Antall elektroner:**

I et **nøytralt atom** er antall elektroner = antall protoner = atomnummer Z.

Z = 16, derfor har svovel **16 elektroner**.

---

**b) Elektronkonfigurasjon:**

Vi fyller skallene fra innerst til ytterst:

**K-skall (maks 2):**
2 elektroner

Gjenstående: 16 - 2 = 14 elektroner

**L-skall (maks 8):**
8 elektroner

Gjenstående: 14 - 8 = 6 elektroner

**M-skall:**
6 elektroner

**Elektronkonfigurasjon:**
**K=2, L=8, M=6**

---

**c) Valenselektroner:**

Valenselektroner = elektroner i ytterste skall = M-skallet.

Svovel har **6 valenselektroner**.

---

**d) Elektroner til fullt ytterste skall:**

Ytterste skall (M) kan ha maks 8 elektroner (oktettregelen).

Svovel har 6, derfor trenger den:

8 - 6 = **2 elektroner**

For å få fullt ytterste skall trenger svovel **2 ekstra elektroner**.

Dette forklarer hvorfor svovel ofte danner bindinger der den "tar opp" eller deler 2 elektroner (f.eks. i H₂S, der svovel binder seg til 2 hydrogenatomer).`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE - ATOMETS OPPBYGNING ==========
    {
      id: 'nat10-2-1-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-1-ex-1',
        number: '2.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor befinner de fleste av atomets masse seg?',
        options: [
          { id: 'a', text: 'I elektronskyen', isCorrect: false },
          { id: 'b', text: 'I atomkjernen', isCorrect: true },
          { id: 'c', text: 'I det ytterste elektronskallet', isCorrect: false },
          { id: 'd', text: 'Jevnt fordelt i hele atomet', isCorrect: false },
        ],
        solution: `**Riktig svar: I atomkjernen**

Forklaring:

Atomkjernen inneholder **protoner** og **nøytroner**, som hver har masse ca. 1 atommasseenhet (u).

Elektronene har masse bare ca. 0,0005 u – nesten masseløse sammenlignet med protoner og nøytroner.

Selv om elektronskyen tar opp nesten hele volumet til atomet, inneholder kjernen **nesten all massen** (over 99,9%).

**Analogi:**
Hvis atomet var et fotballstadion, ville kjernen være på størrelse med en ert i midten – men denne erten ville inneholde nesten all vekten!`,
      },
    },

    // ========== OPPGAVE 2: MULTIPLE CHOICE - ATOMNUMMER ==========
    {
      id: 'nat10-2-1-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-1-ex-2',
        number: '2.1.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva bestemmer hvilket grunnstoff et atom er?',
        options: [
          { id: 'a', text: 'Antall nøytroner', isCorrect: false },
          { id: 'b', text: 'Antall elektroner', isCorrect: false },
          { id: 'c', text: 'Antall protoner', isCorrect: true },
          { id: 'd', text: 'Massetallet', isCorrect: false },
        ],
        solution: `**Riktig svar: Antall protoner**

Forklaring:

**Atomnummeret (Z)** = antall protoner, og dette bestemmer hvilket grunnstoff det er.

- Alle hydrogenatomer har 1 proton (Z=1)
- Alle karbonatomer har 6 protoner (Z=6)
- Alle oksygenatomer har 8 protoner (Z=8)

**Hvorfor ikke de andre alternativene?**

**Antall nøytroner:**
Dette varierer mellom isotoper, men grunnstoffet forblir det samme.
Eksempel: ¹²C og ¹³C har ulikt antall nøytroner, men begge er karbon.

**Antall elektroner:**
Dette kan endres (hvis atomet blir et ion), men grunnstoffet forblir det samme.
Eksempel: Na har 11 protoner, enten det er nøytralt (11 elektroner) eller et ion (10 elektroner).

**Massetall:**
Dette varierer mellom isotoper.

**Konklusjon:**
Det er **antall protoner** som definerer grunnstoffet!`,
      },
    },

    // ========== OPPGAVE 3: MULTIPLE CHOICE - VALENSELEKTRONER ==========
    {
      id: 'nat10-2-1-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-1-ex-3',
        number: '2.1.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kalles elektronene i det ytterste skallet av et atom?',
        options: [
          { id: 'a', text: 'Kjerneelektroner', isCorrect: false },
          { id: 'b', text: 'Valenselektroner', isCorrect: true },
          { id: 'c', text: 'Frie elektroner', isCorrect: false },
          { id: 'd', text: 'Isotoper', isCorrect: false },
        ],
        solution: `**Riktig svar: Valenselektroner**

Forklaring:

Elektronene i det **ytterste elektronskallet** kalles **valenselektroner**.

Disse elektronene er viktige fordi de:
- Bestemmer atomets kjemiske egenskaper
- Deltar i kjemiske bindinger
- Forklarer hvordan atomer reagerer med hverandre

**Hvorfor ikke de andre alternativene?**

**Kjerneelektroner:**
Dette ville vært elektroner i atomkjernen, men elektroner befinner seg i elektronskyen, ikke i kjernen.

**Frie elektroner:**
Dette er elektroner som har blitt løsrevet fra atomet (f.eks. i metaller), ikke et begrep for elektroner i ytterste skall.

**Isotoper:**
Dette er atomer med ulikt antall nøytroner, ikke et begrep for elektroner.

**Eksempel:**
Natrium (Na) har elektronkonfigurasjon K=2, L=8, M=1.
Det ytterste skallet (M) har **1 valenselektron**.`,
      },
    },

    // ========== OPPGAVE 4: KLASSISK - ATOMSTRUKTUR ==========
    {
      id: 'nat10-2-1-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-1-ex-4',
        number: '2.1.4',
        type: 'classic',
        difficulty: 'medium',
        task: `Et aluminiumatom (Al) har atomnummer 13.

a) Hvor mange protoner har atomet?
b) Hvor mange elektroner har et nøytralt aluminiumatom?
c) Skriv elektronkonfigurasjonen til aluminium (fordeling i K-, L- og M-skall).
d) Hvor mange valenselektroner har aluminium?`,
        multipleChoiceOptions: [
          '13 protoner, 13 elektroner, K=2 L=8 M=3, 3 valenselektroner',
          '13 protoner, 13 elektroner, K=2 L=8 M=3, 8 valenselektroner',
          '13 protoner, 14 elektroner, K=2 L=8 M=3, 3 valenselektroner',
          '13 protoner, 13 elektroner, K=2 L=11, 11 valenselektroner',
        ],
        solution: `**a) Protoner:**

Atomnummer Z = 13

Atomnummeret forteller oss antall protoner.

**Svar:** Aluminium har **13 protoner**.

---

**b) Elektroner:**

I et **nøytralt atom** er antall elektroner = antall protoner.

**Svar:** Et nøytralt aluminiumatom har **13 elektroner**.

---

**c) Elektronkonfigurasjon:**

Vi fyller skallene fra innerst til ytterst:

**K-skall (maks 2):**
2 elektroner

Gjenstående: 13 - 2 = 11 elektroner

**L-skall (maks 8):**
8 elektroner

Gjenstående: 11 - 8 = 3 elektroner

**M-skall:**
3 elektroner

**Elektronkonfigurasjon:**
**K=2, L=8, M=3**

---

**d) Valenselektroner:**

Valenselektroner = elektroner i ytterste skall = M-skallet.

Aluminium har **3 valenselektroner**.

Dette forklarer hvorfor aluminium ofte danner Al³⁺-ioner (avgir 3 elektroner for å få fullt L-skall som ytterste skall).`,
      },
    },

    // ========== OPPGAVE 5: KLASSISK - ISOTOPER ==========
    {
      id: 'nat10-2-1-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-1-ex-5',
        number: '2.1.5',
        type: 'classic',
        difficulty: 'medium',
        task: `Klor har to vanlige isotoper:
- Klor-35 (³⁵Cl)
- Klor-37 (³⁷Cl)

Atomnummeret til klor er 17.

a) Hvor mange protoner har hver isotop?
b) Hvor mange nøytroner har hver isotop?
c) Hvorfor er begge isotoper fortsatt klor?
d) Vil de to isotopene ha like kjemiske egenskaper? Forklar.`,
        multipleChoiceOptions: [
          'a) Begge 17 protoner; b) ³⁵Cl: 18, ³⁷Cl: 20; c) Samme antall protoner; d) Ja, samme valenselektroner',
          'a) ³⁵Cl: 35, ³⁷Cl: 37; b) Begge 17; c) Samme massetall; d) Nei, ulik masse',
          'a) Begge 17 protoner; b) Begge 18; c) Samme antall protoner; d) Ja, samme valenselektroner',
          'a) Begge 17 protoner; b) ³⁵Cl: 18, ³⁷Cl: 20; c) Samme antall nøytroner; d) Nei, ulikt antall nøytroner',
        ],
        solution: `**a) Protoner:**

Atomnummeret Z = 17 for klor.

Alle kloratomer har **17 protoner**, uansett hvilken isotop.

**Svar:**
- ³⁵Cl: **17 protoner**
- ³⁷Cl: **17 protoner**

---

**b) Nøytroner:**

Nøytroner = Massetall (A) - Atomnummer (Z)

**Klor-35:**
Nøytroner = 35 - 17 = **18 nøytroner**

**Klor-37:**
Nøytroner = 37 - 17 = **20 nøytroner**

**Svar:**
- ³⁵Cl: **18 nøytroner**
- ³⁷Cl: **20 nøytroner**

---

**c) Hvorfor er begge isotoper klor?**

Et grunnstoff defineres av **antall protoner** (atomnummeret).

Begge isotoper har **17 protoner**, derfor er begge **klor**.

Det som varierer er antall **nøytroner**, men det endrer ikke hvilket grunnstoff det er – bare massen.

---

**d) Kjemiske egenskaper:**

**Ja**, de to isotopene har **like kjemiske egenskaper**.

**Forklaring:**

Kjemiske egenskaper bestemmes av antall **elektroner** (og dermed antall **protoner**), ikke antall nøytroner.

Begge isotoper har:
- 17 protoner
- 17 elektroner (nøytrale atomer)
- Elektronkonfigurasjon: K=2, L=8, M=7
- 7 valenselektroner

Derfor reagerer de likt kjemisk:
- Begge danner Cl₂-gass
- Begge reagerer med natrium til NaCl (bordsalt)
- Begge er grønnlige gasser

**Fysiske egenskaper:**

De har **forskjellige fysiske egenskaper** fordi de har ulik masse:
- ³⁷Cl er tyngre enn ³⁵Cl
- Dette kan påvirke f.eks. diffusjonshastighet`,
      },
    },

    // ========== OPPGAVE 6: BEREGNING - MASSETALL OG PARTIKLER ==========
    {
      id: 'nat10-2-1-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-1-ex-6',
        number: '2.1.6',
        type: 'classic',
        difficulty: 'medium',
        task: `En nøytral atom har 19 protoner og 20 nøytroner.

a) Hva er atomnummeret?
b) Hva er massetallet?
c) Hvilket grunnstoff er dette?
d) Hvor mange elektroner har atomet?`,
        multipleChoiceOptions: [
          'a) Z = 19; b) A = 39; c) Kalium (K); d) 19 elektroner',
          'a) Z = 20; b) A = 39; c) Kalsium (Ca); d) 20 elektroner',
          'a) Z = 19; b) A = 20; c) Kalium (K); d) 19 elektroner',
          'a) Z = 39; b) A = 19; c) Kalium (K); d) 39 elektroner',
        ],
        solution: `**a) Atomnummer:**

Atomnummer (Z) = antall protoner

**Svar:** Z = **19**

---

**b) Massetall:**

Massetall (A) = protoner + nøytroner

A = 19 + 20 = 39

**Svar:** A = **39**

---

**c) Grunnstoff:**

Atomnummeret Z = 19 bestemmer hvilket grunnstoff det er.

Ved å se i periodesystemet finner vi at grunnstoffet med atomnummer 19 er:

**Kalium (K)**

(Eller du kan huske: H(1), He(2), Li(3), Be(4), B(5), C(6), N(7), O(8), F(9), Ne(10), Na(11), Mg(12), Al(13), Si(14), P(15), S(16), Cl(17), Ar(18), **K(19)**)

---

**d) Elektroner:**

I et **nøytralt atom** er antall elektroner = antall protoner.

**Svar:** Atomet har **19 elektroner**.

---

**Oppsummering:**

Dette er et **kaliumatom (³⁹K)** med:
- 19 protoner
- 20 nøytroner
- 19 elektroner (nøytralt atom)
- Atomnummer Z = 19
- Massetall A = 39`,
      },
    },

    // ========== OPPGAVE 7: BEREGNING - NØYTRONER ==========
    {
      id: 'nat10-2-1-exercise-7',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-1-ex-7',
        number: '2.1.7',
        type: 'classic',
        difficulty: 'medium',
        task: `Fyll ut tabellen:

| Grunnstoff | Symbol | Atomnummer (Z) | Massetall (A) | Protoner | Nøytroner | Elektroner |
|------------|--------|----------------|---------------|----------|-----------|------------|
| Nitrogen   | N      | 7              | 14            | ?        | ?         | ?          |
| Fluor      | F      | ?              | 19            | 9        | ?         | ?          |
| Magnesium  | Mg     | ?              | 24            | ?        | 12        | ?          |

Anta at alle atomer er nøytrale.`,
        multipleChoiceOptions: [
          'N: 7p, 7n, 7e; F: Z=9, 10n, 9e; Mg: Z=12, 12p, 12e',
          'N: 7p, 7n, 14e; F: Z=9, 10n, 9e; Mg: Z=12, 12p, 12e',
          'N: 7p, 14n, 7e; F: Z=9, 10n, 9e; Mg: Z=12, 12p, 12e',
          'N: 7p, 7n, 7e; F: Z=10, 9n, 10e; Mg: Z=12, 12p, 24e',
        ],
        solution: `**Formler å huske:**
- Z = antall protoner
- A = protoner + nøytroner
- Nøytroner = A - Z
- I nøytrale atomer: elektroner = protoner = Z

---

**Rad 1: Nitrogen (N)**

Gitt: Z = 7, A = 14

- **Protoner:** Z = 7
- **Nøytroner:** A - Z = 14 - 7 = 7
- **Elektroner:** Z = 7 (nøytralt atom)

---

**Rad 2: Fluor (F)**

Gitt: A = 19, Protoner = 9

- **Atomnummer Z:** = antall protoner = 9
- **Nøytroner:** A - Z = 19 - 9 = 10
- **Elektroner:** Z = 9 (nøytralt atom)

---

**Rad 3: Magnesium (Mg)**

Gitt: A = 24, Nøytroner = 12

- **Protoner:** A - Nøytroner = 24 - 12 = 12
- **Atomnummer Z:** = antall protoner = 12
- **Elektroner:** Z = 12 (nøytralt atom)

---

**Fullstendig tabell:**

| Grunnstoff | Symbol | Atomnummer (Z) | Massetall (A) | Protoner | Nøytroner | Elektroner |
|------------|--------|----------------|---------------|----------|-----------|------------|
| Nitrogen   | N      | 7              | 14            | **7**    | **7**     | **7**      |
| Fluor      | F      | **9**          | 19            | 9        | **10**    | **9**      |
| Magnesium  | Mg     | **12**         | 24            | **12**   | 12        | **12**     |`,
      },
    },

    // ========== OPPGAVE 8: KLASSISK - ELEKTRONKONFIGURASJON ==========
    {
      id: 'nat10-2-1-exercise-8',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-1-ex-8',
        number: '2.1.8',
        type: 'classic',
        difficulty: 'medium',
        task: `Fosfor (P) har atomnummer 15.

a) Skriv elektronkonfigurasjonen til fosfor (fordeling i K-, L- og M-skall).
b) Hvor mange valenselektroner har fosfor?
c) Hvor mange elektroner trenger fosfor for å få fullt ytterste skall?
d) Forklar hvorfor fosfor kan danne forbindelsen PH₃ (fosfin).`,
        multipleChoiceOptions: [
          'a) K=2, L=8, M=5; b) 5 valenselektroner; c) Trenger 3 elektroner; d) P deler 3 elektronpar med 3 H-atomer',
          'a) K=2, L=8, M=5; b) 8 valenselektroner; c) Trenger 3 elektroner; d) P deler 3 elektronpar med 3 H-atomer',
          'a) K=2, L=5, M=8; b) 5 valenselektroner; c) Trenger 5 elektroner; d) P avgir 5 elektroner',
          'a) K=2, L=8, M=5; b) 5 valenselektroner; c) Trenger 5 elektroner; d) P danner ionebinding',
        ],
        solution: `**a) Elektronkonfigurasjon:**

Fosfor har atomnummer Z = 15, derfor 15 elektroner.

Vi fyller skallene fra innerst til ytterst:

**K-skall (maks 2):**
2 elektroner

Gjenstående: 15 - 2 = 13 elektroner

**L-skall (maks 8):**
8 elektroner

Gjenstående: 13 - 8 = 5 elektroner

**M-skall:**
5 elektroner

**Elektronkonfigurasjon:**
**K=2, L=8, M=5**

---

**b) Valenselektroner:**

Valenselektroner = elektroner i ytterste skall = M-skallet.

Fosfor har **5 valenselektroner**.

---

**c) Elektroner til fullt ytterste skall:**

Ytterste skall (M) kan ha maks 8 elektroner (oktettregelen).

Fosfor har 5, derfor trenger den:

8 - 5 = **3 elektroner**

For å få fullt ytterste skall trenger fosfor **3 ekstra elektroner**.

---

**d) Hvorfor PH₃?**

Fosfor trenger **3 ekstra elektroner** for å få fullt ytterste skall.

Hydrogen (H) har 1 valenselektron og "ønsker" å dele 1 elektron for å få fullt K-skall (2 elektroner).

I PH₃:
- Fosfor deler elektroner med **3 hydrogenatomer**
- Hvert H-atom bidrar med 1 elektron til deling
- Fosfor får dermed 3 ekstra elektroner (delt) → totalt 8 i ytterste skall
- Hvert H-atom får 2 elektroner (delt) → fullt K-skall

**P** + 3**H** → **PH₃**

Dette er et eksempel på **kovalent binding** der atomer deler elektroner.

Fosfor kan også danne PCl₃, PF₃ osv. av samme grunn – den trenger 3 ekstra elektroner.`,
      },
    },

    // ========== OPPGAVE 9: KLASSISK - SAMMENLIGNING ==========
    {
      id: 'nat10-2-1-exercise-9',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-1-ex-9',
        number: '2.1.9',
        type: 'classic',
        difficulty: 'medium',
        task: `Se på disse to atomer:

**Atom A:** Neon (Ne), Z = 10
**Atom B:** Natrium (Na), Z = 11

a) Skriv elektronkonfigurasjonen til begge atomer.
b) Hvor mange valenselektroner har hvert atom?
c) Hvilken av de to atomer er mest stabil? Forklar.
d) Hvorfor reagerer natrium lett med andre stoffer, mens neon nesten ikke reagerer i det hele tatt?`,
        multipleChoiceOptions: [
          'a) Ne: K=2 L=8, Na: K=2 L=8 M=1; b) Ne: 8, Na: 1; c) Ne (fullt skall); d) Na vil avgi 1 elektron, Ne har fullt skall',
          'a) Ne: K=2 L=8, Na: K=2 L=9; b) Ne: 8, Na: 9; c) Na (flere elektroner); d) Na har flere elektroner enn Ne',
          'a) Ne: K=2 L=8, Na: K=2 L=8 M=1; b) Ne: 0, Na: 1; c) Ne (fullt skall); d) Na vil avgi 1 elektron, Ne har fullt skall',
          'a) Ne: K=10, Na: K=11; b) Ne: 10, Na: 11; c) Na (flere protoner); d) Na har flere protoner',
        ],
        solution: `**a) Elektronkonfigurasjon:**

**Neon (Ne), Z = 10:**
10 elektroner totalt.

- K-skall: 2 elektroner
- L-skall: 10 - 2 = 8 elektroner

**Elektronkonfigurasjon:** K=2, L=8

---

**Natrium (Na), Z = 11:**
11 elektroner totalt.

- K-skall: 2 elektroner
- L-skall: 8 elektroner
- M-skall: 11 - 2 - 8 = 1 elektron

**Elektronkonfigurasjon:** K=2, L=8, M=1

---

**b) Valenselektroner:**

**Neon:** Ytterste skall (L) har **8 valenselektroner**.

**Natrium:** Ytterste skall (M) har **1 valenselektron**.

---

**c) Mest stabil atom:**

**Neon** er mest stabil.

**Forklaring:**

Neon har **fullt ytterste skall** (L-skallet har 8 elektroner – maks for L).

Atomer med fullt ytterste skall er **svært stabile** og trenger ikke å reagere med andre atomer for å oppnå oktett.

Natrium har bare **1 elektron i ytterste skall**, langt fra oktett (8). Det er derfor **ustabilt** og reaktivt.

---

**d) Hvorfor reagerer natrium lett, mens neon ikke gjør det?**

**Neon:**
- Har **fullt ytterste skall** (8 elektroner i L)
- Trenger ikke flere elektroner
- Trenger ikke å avgi elektroner
- Derfor reagerer neon **nesten ikke** med andre stoffer

Neon er en **edelgass** – en gruppe grunnstoffer som er kjent for å være ekstremt stabile og ikke-reaktive.

**Natrium:**
- Har **1 elektron i ytterste skall** (M)
- For å oppnå oktett kan den enten:
  - Ta opp 7 elektroner (vanskelig)
  - Avgi 1 elektron (lett!) → blir Na⁺-ion med L som ytterste skall (fullt)

Natrium avgir lett sin ene valenselektron, derfor reagerer den lett med andre stoffer (f.eks. klor for å danne NaCl).

**Konklusjon:**

Natrium er **reaktiv** fordi den lett avgir 1 elektron for å få fullt ytterste skall.

Neon er **ikke-reaktiv** fordi den allerede har fullt ytterste skall.

Dette forklarer hvorfor edelgasser (He, Ne, Ar, osv.) er stabile, mens alkalimetaller (Li, Na, K, osv.) er svært reaktive!`,
      },
    },

    // ========== EKSTRA EKSEMPEL: BESTEMME ANTALL SUBATOMÆRE PARTIKLER ==========
    {
      id: 'nat10-2-1-example-extra-1',
      type: 'example',
      title: 'Eksempel: Bestemme antall subatomære partikler i jern',
      problem: `Jern (Fe) har atomnummer 26 og massetall 56.

a) Hvor mange protoner har et jernatom?
b) Hvor mange nøytroner har et jernatom?
c) Hvor mange elektroner har et nøytralt jernatom?
d) Skriv elektronkonfigurasjonen til jern (fordeling i K-, L-, M- og N-skall).`,
      solution: `**a) Protoner:**

Atomnummer Z = 26

Atomnummeret er alltid lik antall protoner.

**Svar:** Jern har **26 protoner**.

---

**b) Nøytroner:**

Nøytroner = Massetall - Atomnummer = A - Z

Nøytroner = 56 - 26 = 30

**Svar:** Jern har **30 nøytroner**.

---

**c) Elektroner:**

I et **nøytralt atom** er antall elektroner = antall protoner.

**Svar:** Et nøytralt jernatom har **26 elektroner**.

---

**d) Elektronkonfigurasjon:**

Vi fyller skallene fra innerst til ytterst:

**K-skall (maks 2):** 2 elektroner
Gjenstående: 26 - 2 = 24

**L-skall (maks 8):** 8 elektroner
Gjenstående: 24 - 8 = 16

**M-skall (maks 18):** 16 elektroner? Nei, for de første 20 grunnstoffene legger vi maks 8 i M-skallet, men jern har Z=26, så M-skallet kan ha opptil 18.

For jern: M-skall tar 14 elektroner
Gjenstående: 16 - 14 = 2

**N-skall:** 2 elektroner

**Elektronkonfigurasjon:** K=2, L=8, M=14, N=2

**Merk:** I videregående kjemi lærer du at elektronkonfigurasjonen til jern er mer komplisert (med underskall), men for 10. klasse holder det med denne forenklingen.`,
    },

    // ========== EKSTRA EKSEMPEL: ELEKTRONKONFIGURASJON OG KJEMISKE EGENSKAPER ==========
    {
      id: 'nat10-2-1-example-extra-2',
      type: 'example',
      title: 'Eksempel: Fra elektronkonfigurasjon til kjemiske egenskaper',
      problem: `Kalsium (Ca) har atomnummer 20.

a) Skriv elektronkonfigurasjonen til kalsium.
b) Hvor mange valenselektroner har kalsium?
c) Vil kalsium helst avgi eller ta opp elektroner for å oppnå edelgass-konfigurasjon?
d) Hvilket ion danner kalsium, og hva blir ladningen?`,
      solution: `**a) Elektronkonfigurasjon:**

Kalsium har 20 elektroner.

K-skall: 2
L-skall: 8
M-skall: 8
N-skall: 2

**Elektronkonfigurasjon:** K=2, L=8, M=8, N=2

---

**b) Valenselektroner:**

Valenselektroner = elektroner i ytterste skall = N-skallet.

Kalsium har **2 valenselektroner**.

---

**c) Avgi eller ta opp elektroner?**

Kalsium har bare **2 elektroner i ytterste skall**. Det er mye lettere å **avgi 2 elektroner** enn å ta opp 6 elektroner for å få fullt N-skall.

Når kalsium avgir 2 elektroner, blir M-skallet det ytterste skallet med 8 elektroner (fullt!). Da har kalsium edelgass-konfigurasjonen til **argon (Ar)**: K=2, L=8, M=8.

**Svar:** Kalsium vil helst **avgi 2 elektroner**.

---

**d) Ion og ladning:**

Når kalsium avgir 2 elektroner:
- Starter med 20 protoner (+) og 20 elektroner (-)
- Mister 2 elektroner
- Har nå 20 protoner (+) og 18 elektroner (-)
- Netto ladning: 20 - 18 = +2

**Svar:** Kalsium danner **Ca²⁺** (kalsiumion med ladning +2).

Dette forklarer hvorfor kalsium ofte finnes i forbindelser som CaCl₂ (kalsiumklorid), CaCO₃ (kalsiumkarbonat/kalkstein) og CaO (kalsiumoksid).`,
    },

    // ========== EKSTRA OPPGAVE: MULTIPLE CHOICE - NØYTRONER ==========
    {
      id: 'nat10-2-1-oppg-extra-1',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-1-oppg-extra-1',
        number: '2.1.11',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Et atom har atomnummer 15 og massetall 31. Hvor mange nøytroner har det?',
        options: [
          { id: 'a', text: '15', isCorrect: false },
          { id: 'b', text: '16', isCorrect: true },
          { id: 'c', text: '31', isCorrect: false },
          { id: 'd', text: '46', isCorrect: false },
        ],
        solution: `**Riktig svar: 16 nøytroner**

Nøytroner = Massetall - Atomnummer = A - Z

Nøytroner = 31 - 15 = **16**

**Vanlige feil:**
- 15: Det er antall protoner (atomnummeret), ikke nøytroner
- 31: Det er massetallet (protoner + nøytroner), ikke bare nøytroner
- 46: Det er summen av massetall og atomnummer, ikke noe meningsfullt

**Grunnstoffet** med atomnummer 15 er fosfor (P).`,
      },
    },

    // ========== EKSTRA OPPGAVE: KLASSISK - IDENTIFISERE GRUNNSTOFF ==========
    {
      id: 'nat10-2-1-oppg-extra-2',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-1-oppg-extra-2',
        number: '2.1.12',
        type: 'classic',
        difficulty: 'medium',
        task: `Et ukjent atom har følgende egenskaper:
- Det har 12 protoner
- Det har 12 nøytroner
- Det er et nøytralt atom

a) Hva er atomnummeret?
b) Hva er massetallet?
c) Hvilket grunnstoff er dette? (Bruk periodesystemet)
d) Skriv elektronkonfigurasjonen.
e) Hvor mange valenselektroner har det?`,
        solution: `**a) Atomnummer:**

Z = antall protoner = **12**

---

**b) Massetall:**

A = protoner + nøytroner = 12 + 12 = **24**

---

**c) Grunnstoff:**

Atomnummer 12 = **Magnesium (Mg)**

---

**d) Elektronkonfigurasjon:**

12 elektroner (nøytralt atom, så elektroner = protoner):

K-skall: 2
L-skall: 8
M-skall: 2

**Elektronkonfigurasjon:** K=2, L=8, M=2

---

**e) Valenselektroner:**

Ytterste skall (M) har **2 valenselektroner**.

Magnesium er et metall i gruppe 2, og alle grunnstoffer i gruppe 2 har 2 valenselektroner.`,
      },
    },

    // ========== EKSTRA OPPGAVE: KLASSISK - ISOTOPER OG GJENNOMSNITTLIG ATOMMASSE ==========
    {
      id: 'nat10-2-1-oppg-extra-3',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-1-oppg-extra-3',
        number: '2.1.13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Bor (B) har atomnummer 5 og finnes som to naturlige isotoper:
- Bor-10 (¹⁰B): Utgjør ca. 20% av alle boratomer
- Bor-11 (¹¹B): Utgjør ca. 80% av alle boratomer

a) Hvor mange protoner, nøytroner og elektroner har hver isotop?
b) Hvorfor har begge isotopene like kjemiske egenskaper?
c) Den gjennomsnittlige atommassen til bor er 10,8 u. Forklar hvorfor dette tallet er nærmere 11 enn 10.`,
        solution: `**a) Partikler i hver isotop:**

**Bor-10 (¹⁰B):**
- Protoner: 5 (atomnummer = 5)
- Nøytroner: A - Z = 10 - 5 = 5
- Elektroner: 5 (nøytralt atom)

**Bor-11 (¹¹B):**
- Protoner: 5 (atomnummer = 5)
- Nøytroner: A - Z = 11 - 5 = 6
- Elektroner: 5 (nøytralt atom)

---

**b) Like kjemiske egenskaper:**

Begge isotopene har **5 protoner** og dermed **5 elektroner** i nøytral tilstand.

Elektronkonfigurasjon for begge: K=2, L=3

Kjemiske egenskaper bestemmes av **valenselektronene** (3 i L-skallet), og disse er identiske for begge isotopene. Forskjellen i nøytroner påvirker bare massen, ikke kjemien.

---

**c) Gjennomsnittlig atommasse:**

Den gjennomsnittlige atommassen er et **vektet gjennomsnitt** basert på hvor mye av hver isotop som finnes:

Gjennomsnitt = (20% × 10) + (80% × 11)
= (0,20 × 10) + (0,80 × 11)
= 2,0 + 8,8
= **10,8 u**

Siden det er **mye mer Bor-11 (80%)** enn Bor-10 (20%), trekkes gjennomsnittet **nærmere 11** enn 10.

Dette er grunnen til at atommassen i periodesystemet sjelden er et helt tall – den reflekterer blandingen av naturlige isotoper.`,
      },
    },

    // ========== EKSTRA OPPGAVE: MULTIPLE CHOICE - ELEKTRONSKAL ==========
    {
      id: 'nat10-2-1-oppg-extra-4',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-1-oppg-extra-4',
        number: '2.1.14',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er maksimalt antall elektroner som kan befinne seg i K-skallet?',
        options: [
          { id: 'a', text: '1', isCorrect: false },
          { id: 'b', text: '2', isCorrect: true },
          { id: 'c', text: '8', isCorrect: false },
          { id: 'd', text: '18', isCorrect: false },
        ],
        solution: `**Riktig svar: 2 elektroner**

K-skallet er det innerste elektronskallet og kan maksimalt romme **2 elektroner**.

**Oversikt over elektronskall:**
- K-skall: maks 2 elektroner
- L-skall: maks 8 elektroner
- M-skall: maks 18 elektroner (eller 8 for de første 20 grunnstoffene)

**Eksempler:**
- Hydrogen (H): K=1 (1 av maks 2)
- Helium (He): K=2 (fullt K-skall!)
- Litium (Li): K=2, L=1 (K-skallet er fullt, neste elektron går til L)`,
      },
    },

    // ========== EKSTRA OPPGAVE: KLASSISK - ATOM SOM HAR MISTET ELEKTRON ==========
    {
      id: 'nat10-2-1-oppg-extra-5',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-1-oppg-extra-5',
        number: '2.1.15',
        type: 'classic',
        difficulty: 'medium',
        task: `Litium (Li) har atomnummer 3 og massetall 7.

a) Hvor mange protoner, nøytroner og elektroner har et nøytralt litiumatom?
b) Skriv elektronkonfigurasjonen til litium.
c) Hvor mange valenselektroner har litium?
d) Hvis litium mister sitt valenselektron og danner Li⁺, hvor mange elektroner har ionet da? Hva er elektronkonfigurasjonen?`,
        solution: `**a) Partikler:**

- Protoner: Z = 3
- Nøytroner: A - Z = 7 - 3 = 4
- Elektroner: 3 (nøytralt atom, elektroner = protoner)

---

**b) Elektronkonfigurasjon:**

3 elektroner:
K-skall: 2
L-skall: 1

**Elektronkonfigurasjon:** K=2, L=1

---

**c) Valenselektroner:**

Ytterste skall (L) har **1 valenselektron**.

---

**d) Li⁺-ionet:**

Litium har 3 elektroner. Når det mister 1 elektron:
3 - 1 = **2 elektroner**

Elektronkonfigurasjon for Li⁺: **K=2**

Dette er den samme elektronkonfigurasjonen som **helium (He)**, en edelgass. Dermed har Li⁺ fullt ytterste skall og er svært stabilt.

**Merk:** Li⁺ har fortsatt 3 protoner (det er fortsatt litium!), men bare 2 elektroner. Derfor er netto ladning +1.`,
      },
    },

    // ========== EKSTRA OPPGAVE: MULTIPLE CHOICE - GRUNNSTOFFER VS FORBINDELSER ==========
    {
      id: 'nat10-2-1-oppg-extra-6',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-1-oppg-extra-6',
        number: '2.1.16',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av disse er et grunnstoff?',
        options: [
          { id: 'a', text: 'Vann (H₂O)', isCorrect: false },
          { id: 'b', text: 'Karbondioksid (CO₂)', isCorrect: false },
          { id: 'c', text: 'Jern (Fe)', isCorrect: true },
          { id: 'd', text: 'Bordsalt (NaCl)', isCorrect: false },
        ],
        solution: `**Riktig svar: Jern (Fe)**

Et **grunnstoff** består av bare én type atomer. Jern (Fe) består kun av jernatomer.

**Hvorfor de andre er feil:**

- **Vann (H₂O):** Består av hydrogen- og oksygenatomer = en **forbindelse** (to ulike grunnstoffer)
- **Karbondioksid (CO₂):** Består av karbon- og oksygenatomer = en **forbindelse**
- **Bordsalt (NaCl):** Består av natrium- og kloratomer = en **forbindelse**

**Huskeregel:**
- Grunnstoff: bare én type atom (Fe, O₂, H₂, Au)
- Forbindelse: to eller flere typer atomer (H₂O, CO₂, NaCl)`,
      },
    },

    // ========== OPPGAVE 10: VANSKELIG - ELEKTRONKONFIGURASJON OG KJEMI ==========
    {
      id: 'nat10-2-1-exercise-10',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-1-ex-10',
        number: '2.1.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Se på disse fire grunnstoffer:

**A:** Atomnummer 9 (Fluor, F)
**B:** Atomnummer 10 (Neon, Ne)
**C:** Atomnummer 11 (Natrium, Na)
**D:** Atomnummer 17 (Klor, Cl)

a) Skriv elektronkonfigurasjonen til hvert grunnstoff.
b) Hvilket grunnstoff er mest stabilt? Hvorfor?
c) Hvilket grunnstoff vil lettest **avgi** en elektron? Hvorfor?
d) Hvilket grunnstoff vil lettest **ta opp** en elektron? Hvorfor?
e) Forklar hvorfor natrium (Na) og klor (Cl) reagerer lett med hverandre og danner bordsalt (NaCl).`,
        multipleChoiceOptions: [
          'a) F:K=2,L=7; Ne:K=2,L=8; Na:K=2,L=8,M=1; Cl:K=2,L=8,M=7; b) Ne; c) Na; d) F eller Cl; e) Na avgir 1e til Cl, begge får fullt skall',
          'a) F:K=2,L=7; Ne:K=2,L=8; Na:K=2,L=8,M=1; Cl:K=2,L=8,M=7; b) Na; c) F; d) Ne; e) Na og Cl deler elektroner',
          'a) F:K=9; Ne:K=10; Na:K=11; Cl:K=17; b) Cl; c) Ne; d) Na; e) Na tar opp elektroner fra Cl',
          'a) F:K=2,L=7; Ne:K=2,L=8; Na:K=2,L=8,M=1; Cl:K=2,L=8,M=7; b) Ne; c) Cl; d) Na; e) Cl avgir 1e til Na',
        ],
        solution: `**a) Elektronkonfigurasjon:**

**A: Fluor (F), Z = 9**
9 elektroner: K=2, L=7

**B: Neon (Ne), Z = 10**
10 elektroner: K=2, L=8

**C: Natrium (Na), Z = 11**
11 elektroner: K=2, L=8, M=1

**D: Klor (Cl), Z = 17**
17 elektroner: K=2, L=8, M=7

---

**b) Mest stabilt grunnstoff:**

**Neon (B)** er mest stabilt.

**Forklaring:**

Neon har **fullt ytterste skall** (L=8).

Atomer med fullt ytterste skall (edelgasser) er ekstremt stabile fordi de allerede har oppnådd oktett – de trenger ikke å reagere med andre atomer.

---

**c) Lettest å avgi en elektron:**

**Natrium (C)** vil lettest avgi en elektron.

**Forklaring:**

Natrium har **1 valenselektron** (M=1).

Ved å **avgi denne ene elektronen**, får natrium:
- L-skallet som ytterste skall (fullt med 8 elektroner)
- Elektronkonfigurasjon som neon (stabil edelgass-konfigurasjon)

Reaksjon:
Na → Na⁺ + e⁻

Natrium blir et **positivt ion (Na⁺)** med konfigurasjon K=2, L=8 (som neon).

Dette er lett fordi det bare krever å miste 1 elektron.

---

**d) Lettest å ta opp en elektron:**

**Fluor (A)** vil lettest ta opp en elektron.

**Forklaring:**

Fluor har **7 valenselektroner** (L=7).

Den trenger bare **1 elektron til** for å få fullt L-skall (8 elektroner).

Ved å **ta opp 1 elektron**, får fluor:
- Fullt ytterste skall (L=8)
- Elektronkonfigurasjon som neon (stabil edelgass-konfigurasjon)

Reaksjon:
F + e⁻ → F⁻

Fluor blir et **negativt ion (F⁻)** med konfigurasjon K=2, L=8 (som neon).

**Merk:** Klor (D) har også 7 valenselektroner (M=7) og tar også lett opp 1 elektron, men fluor er **litt mer reaktiv** fordi L-skallet er nærmere kjernen enn M-skallet.

---

**e) Hvorfor reagerer Na og Cl lett med hverandre?**

**Natrium (Na):**
- Konfigurasjon: K=2, L=8, M=1
- Ønsker å **avgi** 1 elektron for å få fullt L-skall

**Klor (Cl):**
- Konfigurasjon: K=2, L=8, M=7
- Ønsker å **ta opp** 1 elektron for å få fullt M-skall (8)

**Perfekt match!**

Natrium avgir 1 elektron, og klor tar opp 1 elektron:

**Na → Na⁺ + e⁻** (natrium mister 1 elektron)
**Cl + e⁻ → Cl⁻** (klor får 1 elektron)

Etter reaksjonen:
- **Na⁺:** Konfigurasjon K=2, L=8 (fullt, stabilt)
- **Cl⁻:** Konfigurasjon K=2, L=8, M=8 (fullt, stabilt)

De to ionene (Na⁺ og Cl⁻) tiltrekker hverandre fordi de har motsatt ladning (positiv og negativ).

Dette danner en **ionebinding**, og resultatet er **natriumklorid (NaCl)** – bordsalt!

**Na + Cl → NaCl**

**Konklusjon:**

Natrium og klor reagerer lett fordi:
1. Natrium lett avgir 1 elektron
2. Klor lett tar opp 1 elektron
3. Begge oppnår stabil edelgass-konfigurasjon
4. De motsatt ladede ionene tiltrekker hverandre

Dette er et klassisk eksempel på **ionebinding**!`,
      },
    },
  ],
  exercises: [], // Oppgavene er embedded i content
};

// ============================================================================
// Kapittel 2.2: Periodesystemet
// LK20: Bruke periodesystemet til å forklare egenskaper til atomer og molekyler
// ============================================================================

export const CHAPTER_NAT10_2_2: TextbookChapter = {
  id: 'naturfag-10-2-2',
  courseId: 'naturfag-10',
  chapterNumber: '2.2',
  title: 'Periodesystemet',
  description: 'Forstå hvordan periodesystemet er organisert og hva det forteller oss om grunnstoffene.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke periodesystemet til å forklare egenskaper til atomer og molekyler',
    'forklare hvordan grunnstoffene er organisert i periodesystemet',
    'gjenkjenne trender og mønstre i periodesystemet',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'nat10-2-2-intro',
      type: 'text',
      content: `## Periodesystemet – grunnstoffenes kart

Periodesystemet er som et verdenskart over alle grunnstoffene som finnes. Alt i universet er laget av disse grunnstoffene – fra oksygenet du puster inn, til jernet i blodet ditt, til gullet i en ring.

Periodesystemet er ikke bare en tabell. Det er et organisert system som forteller oss masse om hvert grunnstoff bare ved å se på hvor det er plassert.

I dette kapittelet skal vi lære:
- Hvordan periodesystemet er bygd opp
- Hvordan vi finner informasjon om grunnstoffene
- Hvilke mønstre og trender som finnes
- Hvorfor noen grunnstoff oppfører seg likt`,
    },

    // ========== HISTORIEN ==========
    {
      id: 'nat10-2-2-historie',
      type: 'text',
      content: `## Historien bak periodesystemet

### Dmitri Mendelejev – systemets far

I 1869 satt en russisk kjemiker ved navn **Dmitri Mendelejev** og forsøkte å organisere de 63 kjente grunnstoffene. Han la merke til at når han ordnet grunnstoffene etter økende atommasse, dukket det opp **mønstre** i egenskapene deres.

Mendelejev gjorde noe genialt: Han la grunnstoffene i **rader** (perioder), slik at grunnstoff med like egenskaper kom under hverandre i **kolonner** (grupper).

### Mendelejevs store forutsigelse

Det mest utrolige? Mendelejev så **tomme plasser** i tabellen sin. Han sa: "Her mangler det grunnstoff vi ikke har oppdaget ennå!" Han forutsa til og med egenskapene til disse ukjente grunnstoffene.

**Og han hadde rett!**

Senere ble grunnstoff som gallium, skandium og germanium oppdaget – akkurat der Mendelejev hadde forutsagt, med akkurat de egenskapene han hadde beskrevet.

### Moderne periodesystem

I dag vet vi at det ikke er **atommassen** som bestemmer rekkefølgen, men **atomnummeret** (antall protoner). Det moderne periodesystemet har 118 grunnstoff, og forskere leter fortsatt etter flere!`,
    },

    // ========== DEFINISJON: PERIODESYSTEMET ==========
    {
      id: 'nat10-2-2-def-periodesystemet',
      type: 'definition',
      title: 'Periodesystemet',
      content: `**Periodesystemet** er en tabell som organiserer alle kjente grunnstoff etter økende atomnummer (antall protoner).

Grunnstoff med like egenskaper står i samme kolonne (gruppe), og rader (perioder) viser hvor mange elektronskall atomene har.`,
    },

    // ========== ORGANISERING ==========
    {
      id: 'nat10-2-2-organisering',
      type: 'text',
      content: `## Slik er periodesystemet organisert

### Perioder (horisontale rader)

**Periode 1:** 2 grunnstoff (hydrogen og helium)
**Periode 2:** 8 grunnstoff (litium til neon)
**Periode 3:** 8 grunnstoff (natrium til argon)
**...og så videre**

**Hva forteller perioden oss?**
Periodenummeret viser hvor mange **elektronskall** atomet har.

- Hydrogen (periode 1) har **1 elektronskall**
- Karbon (periode 2) har **2 elektronskall**
- Natrium (periode 3) har **3 elektronskall**

### Grupper (vertikale kolonner)

Det finnes **18 grupper** i periodesystemet (nummerert 1–18).

**Hva forteller gruppen oss?**
Grunnstoff i samme gruppe har:
- Like egenskaper (reagerer på lignende måter)
- Samme antall **valenselektroner** (elektroner i ytterste skall)

**Eksempel:**
Alle grunnstoffene i gruppe 1 (litium, natrium, kalium...) har **1 valenselektron**, og de reagerer alle kraftig med vann.`,
    },

    // ========== ATOMNUMMER OG PLASSERING ==========
    {
      id: 'nat10-2-2-atomnummer',
      type: 'text',
      content: `## Atomnummer og plassering

Hvert grunnstoff har et unikt **atomnummer**.

**Atomnummer = antall protoner i atomkjernen**

Grunnstoffene er ordnet etter økende atomnummer fra venstre mot høyre, ovenfra og ned.

**Eksempler:**
- **Hydrogen (H):** Atomnummer 1 → 1 proton
- **Helium (He):** Atomnummer 2 → 2 protoner
- **Karbon (C):** Atomnummer 6 → 6 protoner
- **Jern (Fe):** Atomnummer 26 → 26 protoner
- **Gull (Au):** Atomnummer 79 → 79 protoner

### Hva finner vi i hver rute?

Hver rute i periodesystemet inneholder viktig informasjon:

**1. Grunnstoffets symbol** (f.eks. O for oksygen)
**2. Atomnummer** (f.eks. 8 for oksygen)
**3. Grunnstoffets navn** (oksygen)
**4. Atommasse** (f.eks. 16.00 for oksygen)

Noen periodesystemer viser også elektronkonfigurasjon og andre egenskaper.`,
    },

    // ========== GRUPPER MED SPESIELLE NAVN ==========
    {
      id: 'nat10-2-2-spesielle-grupper',
      type: 'text',
      content: `## Grupper med spesielle navn

Noen grupper i periodesystemet har egne navn fordi grunnstoffene der har spesielle egenskaper:

### Gruppe 1: Alkalimetaller
**Grunnstoff:** Litium (Li), Natrium (Na), Kalium (K), Rubidium (Rb), Cesium (Cs), Francium (Fr)

**Egenskaper:**
- Myke metaller (kan skjæres med kniv)
- Reagerer **kraftig** med vann
- 1 valenselektron
- Lagres i olje fordi de reagerer lett med luft

**Eksempel:** Natrium reagerer eksplosivt med vann!

### Gruppe 2: Jordalkalimetaller
**Grunnstoff:** Beryllium (Be), Magnesium (Mg), Kalsium (Ca), Strontium (Sr), Barium (Ba), Radium (Ra)

**Egenskaper:**
- Litt hardere enn alkalimetaller
- Reagerer med vann, men mindre kraftig
- 2 valenselektroner

**Eksempel:** Kalsium er viktig for sterke knokler!

### Gruppe 17: Halogener
**Grunnstoff:** Fluor (F), Klor (Cl), Brom (Br), Jod (I), Astat (At)

**Egenskaper:**
- Svært **reaktive** ikke-metaller
- Giftige i ren form
- 7 valenselektroner
- Lager **salter** når de reagerer med metaller (f.eks. natriumklorid = bordsalt)

**Eksempel:** Klor brukes til å rense vann i svømmebasseng.

### Gruppe 18: Edelgasser
**Grunnstoff:** Helium (He), Neon (Ne), Argon (Ar), Krypton (Kr), Xenon (Xe), Radon (Rn)

**Egenskaper:**
- Svært **ureaktive** (inerte) – reagerer nesten ikke med noe
- Fargeløse gasser
- Fullt ytterste elektronskall (stabile)

**Eksempel:** Helium brukes i ballonger fordi det ikke reagerer og er lettere enn luft.`,
    },

    // ========== DEFINISJON: VALENSELEKTRONER ==========
    {
      id: 'nat10-2-2-def-valenselektroner',
      type: 'definition',
      title: 'Valenselektroner',
      content: `**Valenselektroner** er elektronene i det ytterste elektronskallet til et atom.

Antall valenselektroner bestemmer hvordan et grunnstoff reagerer kjemisk.

**Eksempler:**
- Natrium (gruppe 1) har **1 valenselektron**
- Oksygen (gruppe 16) har **6 valenselektroner**
- Neon (gruppe 18) har **8 valenselektroner** (fullt skall)`,
    },

    // ========== METALLER, IKKE-METALLER, HALVMETALLER ==========
    {
      id: 'nat10-2-2-metaller',
      type: 'text',
      content: `## Metaller, ikke-metaller og halvmetaller

Periodesystemet kan deles inn i tre hovedkategorier:

### Metaller (venstre og midten)
**Plassering:** Venstre side og sentrum av periodesystemet

**Egenskaper:**
- Glinsende overflate
- Leder elektrisitet og varme godt
- Er formbare (kan hamres til tynne plater)
- Er duktile (kan trekkes ut til tynne tråder)
- Høyt smeltepunkt (med noen unntak)

**Eksempler:** Jern, kobber, gull, aluminium, natrium

### Ikke-metaller (høyre side)
**Plassering:** Høyre side av periodesystemet

**Egenskaper:**
- Matte (ikke glinsende)
- Leder **ikke** elektrisitet eller varme (med unntak av karbon i grafittform)
- Sprø og skjøre i fast form
- Lavere smeltepunkt enn metaller

**Eksempler:** Oksygen, karbon, nitrogen, svovel, klor

### Halvmetaller (langs "trappetrinnet")
**Plassering:** Langs en diagonal linje mellom metaller og ikke-metaller

**Egenskaper:**
- Har egenskaper fra **både** metaller og ikke-metaller
- Leder elektrisitet **noe** (men ikke like godt som metaller)
- Brukes i elektronikk (f.eks. silisium i databrikker)

**Eksempler:** Silisium (Si), Germanium (Ge), Arsen (As)

Det finnes en "trappetrinnslinje" i periodesystemet som skiller metaller fra ikke-metaller. Halvmetallene ligger langs denne linjen.`,
    },

    // ========== TRENDER I PERIODESYSTEMET ==========
    {
      id: 'nat10-2-2-trender',
      type: 'text',
      content: `## Trender i periodesystemet

Periodesystemet viser **mønstre** (trender) i egenskapene til grunnstoffene.

### 1. Atomstørrelse

**Nedover i en gruppe:** Atomene blir **større**
- Flere elektronskall legges til
- Eksempel: Litium er mindre enn natrium, som er mindre enn kalium

**Bortover i en periode (mot høyre):** Atomene blir **mindre**
- Flere protoner trekker elektronene nærmere kjernen
- Eksempel: Natrium er større enn magnesium, som er større enn klor

### 2. Reaktivitet

**Metaller (gruppe 1–2):**
- Mer reaktive **nedover** i gruppen
- Cesium er mer reaktivt enn natrium

**Ikke-metaller (gruppe 17):**
- Mer reaktive **oppover** i gruppen
- Fluor er mer reaktivt enn jod

**Edelgasser (gruppe 18):**
- Nesten ikke reaktive i det hele tatt (fullt elektronskall)

### 3. Elektronegativitet (forenklet)

**Elektronegativitet** er et mål på hvor sterkt et atom trekker til seg elektroner.

**Høyest elektronegativitet:**
- Fluor (øverst til høyre)

**Lavest elektronegativitet:**
- Francium (nederst til venstre)

**Trend:**
- Øker **mot høyre** i en periode
- Øker **oppover** i en gruppe`,
    },

    // ========== NOTE: HVORFOR ER DETTE VIKTIG? ==========
    {
      id: 'nat10-2-2-note-viktig',
      type: 'note',
      title: 'Hvorfor er periodesystemet viktig?',
      content: `Periodesystemet er et av de viktigste verktøyene i kjemi fordi det lar oss:

- **Forutsi** hvordan grunnstoff vil reagere
- **Forstå** hvorfor visse grunnstoff ligner hverandre
- **Finne** egenskaper til grunnstoff uten å måtte slå opp alt
- **Organisere** kunnskap om 118 grunnstoff på en oversiktlig måte

Mendelejevs ide om å organisere grunnstoffene har gjort kjemi mye enklere å forstå!`,
    },

    // ========== EKSEMPEL: FINNE INFORMASJON ==========
    {
      id: 'nat10-2-2-ex-finne-info',
      type: 'example',
      title: 'Eksempel: Finne informasjon om et grunnstoff',
      problem: `Bruk periodesystemet til å finne følgende informasjon om **klor (Cl)**:

a) Hva er atomnummeret?
b) Hvilken gruppe tilhører det?
c) Hvilken periode tilhører det?
d) Er det et metall, ikke-metall eller halvmetall?
e) Hvor mange valenselektroner har det?`,
      solution: `**a) Atomnummer:**
Klor har **atomnummer 17** (17 protoner).

**b) Gruppe:**
Klor tilhører **gruppe 17** (halogenene).

**c) Periode:**
Klor tilhører **periode 3** (har 3 elektronskall).

**d) Metall, ikke-metall eller halvmetall?**
Klor er et **ikke-metall** (ligger på høyre side av periodesystemet).

**e) Valenselektroner:**
Som alle grunnstoff i gruppe 17 har klor **7 valenselektroner**.

Dette betyr at klor mangler bare **1 elektron** for å få fullt ytterste skall, derfor er det veldig reaktivt!`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE (LETT) ==========
    {
      id: 'nat10-2-2-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-2-ex-1',
        number: '2.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva forteller atomnummeret til et grunnstoff oss?',
        options: [
          {
            id: 'a',
            text: 'Antall protoner i atomkjernen',
            isCorrect: true,
            feedback: 'Riktig! Atomnummeret er alltid lik antall protoner.',
          },
          {
            id: 'b',
            text: 'Antall nøytroner i atomkjernen',
            isCorrect: false,
            feedback: 'Feil. Antall nøytroner kan variere (isotoper), men atomnummeret er alltid antall protoner.',
          },
          {
            id: 'c',
            text: 'Atommassen til grunnstoffet',
            isCorrect: false,
            feedback: 'Feil. Atommassen er summen av protoner og nøytroner, ikke bare atomnummeret.',
          },
          {
            id: 'd',
            text: 'Hvor reaktivt grunnstoffet er',
            isCorrect: false,
            feedback: 'Feil. Reaktiviteten avhenger av elektronkonfigurasjonen, ikke bare atomnummeret.',
          },
        ],
        solution: 'Atomnummeret er alltid lik antall protoner i atomkjernen. Dette er det som definerer hvilket grunnstoff det er.',
      },
    },

    // ========== OPPGAVE 2: MULTIPLE CHOICE (LETT) ==========
    {
      id: 'nat10-2-2-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-2-ex-2',
        number: '2.2.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken gruppe i periodesystemet inneholder edelgasser?',
        options: [
          {
            id: 'a',
            text: 'Gruppe 1',
            isCorrect: false,
            feedback: 'Feil. Gruppe 1 inneholder alkalimetaller.',
          },
          {
            id: 'b',
            text: 'Gruppe 17',
            isCorrect: false,
            feedback: 'Feil. Gruppe 17 inneholder halogener.',
          },
          {
            id: 'c',
            text: 'Gruppe 18',
            isCorrect: true,
            feedback: 'Riktig! Edelgassene befinner seg i gruppe 18 og er svært ureaktive.',
          },
          {
            id: 'd',
            text: 'Gruppe 2',
            isCorrect: false,
            feedback: 'Feil. Gruppe 2 inneholder jordalkalimetaller.',
          },
        ],
        solution: 'Edelgassene befinner seg i gruppe 18. De er svært ureaktive fordi de har fullt ytterste elektronskall.',
      },
    },

    // ========== OPPGAVE 3: MULTIPLE CHOICE (LETT) ==========
    {
      id: 'nat10-2-2-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-2-ex-3',
        number: '2.2.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva viser periodenummeret til et grunnstoff?',
        options: [
          {
            id: 'a',
            text: 'Antall protoner i kjernen',
            isCorrect: false,
            feedback: 'Feil. Det er atomnummeret som viser antall protoner.',
          },
          {
            id: 'b',
            text: 'Antall valenselektroner',
            isCorrect: false,
            feedback: 'Feil. Gruppenummeret (for hovedgruppene) viser antall valenselektroner.',
          },
          {
            id: 'c',
            text: 'Antall elektronskall',
            isCorrect: true,
            feedback: 'Riktig! Periodenummeret viser hvor mange elektronskall atomet har.',
          },
          {
            id: 'd',
            text: 'Atommassen',
            isCorrect: false,
            feedback: 'Feil. Atommassen vises som et eget tall for hvert grunnstoff.',
          },
        ],
        solution: 'Periodenummeret viser antall elektronskall. For eksempel har alle grunnstoff i periode 3 tre elektronskall.',
      },
    },

    // ========== OPPGAVE 4: KLASSISK (MEDIUM) ==========
    {
      id: 'nat10-2-2-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-2-ex-4',
        number: '2.2.4',
        type: 'classic',
        difficulty: 'medium',
        task: `Bruk periodesystemet til å finne følgende informasjon om **oksygen (O)**:

a) Hva er atomnummeret?
b) Hvilken gruppe tilhører det?
c) Hvilken periode tilhører det?
d) Hvor mange valenselektroner har det?
e) Er det et metall eller ikke-metall?`,
        multipleChoiceOptions: [
          'Z=8, gruppe 16, periode 2, 6 valenselektroner, ikke-metall',
          'Z=8, gruppe 8, periode 2, 8 valenselektroner, metall',
          'Z=16, gruppe 8, periode 3, 6 valenselektroner, ikke-metall',
          'Z=8, gruppe 16, periode 1, 2 valenselektroner, halvmetall',
        ],
        solution: `**a) Atomnummer:**
Oksygen har **atomnummer 8** (8 protoner).

**b) Gruppe:**
Oksygen tilhører **gruppe 16**.

**c) Periode:**
Oksygen tilhører **periode 2** (har 2 elektronskall).

**d) Valenselektroner:**
Oksygen har **6 valenselektroner** (gruppe 16 har 6 valenselektroner).

**e) Metall eller ikke-metall:**
Oksygen er et **ikke-metall** (ligger på høyre side av periodesystemet).

Oksygen mangler 2 elektroner for å få fullt ytterste skall, derfor reagerer det lett med andre grunnstoff for å få tak i disse elektronene.`,
      },
    },

    // ========== OPPGAVE 5: KLASSISK (MEDIUM) ==========
    {
      id: 'nat10-2-2-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-2-ex-5',
        number: '2.2.5',
        type: 'classic',
        difficulty: 'medium',
        task: `Se på disse tre grunnstoffene: **natrium (Na)**, **magnesium (Mg)** og **aluminium (Al)**.

a) Hvilken periode tilhører alle tre?
b) Hvilket grunnstoff har størst atomnummer?
c) Hvilket grunnstoff har flest valenselektroner?
d) Forklar hvorfor atomstørrelsen **avtar** fra natrium til aluminium.`,
        multipleChoiceOptions: [
          'Periode 3; Al har størst Z; Al har flest valenselektroner; flere protoner trekker elektronene nærmere',
          'Periode 3; Na har størst Z; Na har flest valenselektroner; færre protoner gir større atom',
          'Periode 2; Al har størst Z; Mg har flest valenselektroner; atomstørrelsen øker mot høyre',
          'Periode 3; Alle har samme Z; Alle har like mange valenselektroner; atomstørrelsen er lik',
        ],
        solution: `**a) Periode:**
Alle tre tilhører **periode 3** (de har 3 elektronskall).

**b) Størst atomnummer:**
**Aluminium (Al)** har størst atomnummer (13), deretter magnesium (12), deretter natrium (11).

**c) Flest valenselektroner:**
**Aluminium** har **3 valenselektroner** (gruppe 13).
Magnesium har 2 valenselektroner (gruppe 2).
Natrium har 1 valenselektron (gruppe 1).

**d) Hvorfor avtar atomstørrelsen?**

Når vi beveger oss **mot høyre** i en periode:
- Atomnummeret **øker** (flere protoner i kjernen)
- Elektronene legges til i **samme** elektronskall (ikke nye skall)
- Flere protoner gir **sterkere tiltrekning** av elektronene
- Dette trekker elektronene **nærmere kjernen**
- Derfor blir atomet **mindre**

Selv om alle har 3 elektronskall, trekker aluminiums 13 protoner elektronene nærmere kjernen enn natriums 11 protoner.`,
      },
    },

    // ========== OPPGAVE 6: KLASSISK (MEDIUM) ==========
    {
      id: 'nat10-2-2-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-2-ex-6',
        number: '2.2.6',
        type: 'classic',
        difficulty: 'medium',
        task: `Alkalimetaller (gruppe 1) reagerer med vann og danner hydrogen-gass og en base.

a) Nevn tre alkalimetaller.
b) Forklar hvorfor reaktiviteten **øker** nedover i gruppen (f.eks. cesium er mer reaktivt enn litium).
c) Hvorfor er alkalimetaller aldri funnet i ren form i naturen?`,
        multipleChoiceOptions: [
          'Li, Na, K; reaktiviteten øker nedover fordi valenselektronet er lenger fra kjernen; reagerer med luft og vann',
          'Fe, Cu, Ag; reaktiviteten avtar nedover fordi atomene blir større; stabile i ren form',
          'Li, Na, K; reaktiviteten avtar nedover fordi flere elektronskall beskytter; finnes ren i naturen',
          'He, Ne, Ar; reaktiviteten øker oppover fordi de har færre skall; reagerer med alt',
        ],
        solution: `**a) Tre alkalimetaller:**
- Litium (Li)
- Natrium (Na)
- Kalium (K)

(Andre: Rubidium, Cesium, Francium)

**b) Hvorfor øker reaktiviteten nedover?**

Alkalimetaller har **1 valenselektron** som de gjerne vil kvitte seg med for å få fullt skall.

Nedover i gruppen:
- Atomene blir **større** (flere elektronskall)
- Valenselektronet er **lenger unna** kjernen
- Det er **svakere tiltrekning** mellom kjernen og valenselektronet
- Derfor er det **lettere** å miste valenselektronet
- Derfor øker **reaktiviteten**

Cesium har valenselektronet sitt **mye lenger** fra kjernen enn litium, derfor er det mye lettere for cesium å gi fra seg elektronet og reagere.

**c) Hvorfor aldri i ren form i naturen?**

Alkalimetaller er **så reaktive** at de reagerer umiddelbart med:
- Oksygen i luften
- Vann (fuktighet)
- Andre stoffer

De finnes derfor bare som **forbindelser** (salter) i naturen, aldri som rene metaller.

For å oppbevare rene alkalimetaller i laboratoriet, må de lagres i **olje** for å hindre kontakt med luft og fuktighet.`,
      },
    },

    // ========== OPPGAVE 7: KLASSISK (VANSKELIG) ==========
    {
      id: 'nat10-2-2-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-2-ex-7',
        number: '2.2.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Mendelejev forutsa eksistensen av et ukjent grunnstoff han kalte "eka-silisium" basert på en tom plass i periodesystemet sitt.

Han forutsa at dette grunnstoffet ville:
- Ha atommasse rundt 72
- Være et gråaktig metall
- Ha tetthet rundt 5.5 g/cm³
- Danne oksid med formel XO₂

Senere ble **germanium (Ge)** oppdaget med nesten identiske egenskaper.

a) Forklar hvordan Mendelejev kunne forutsi egenskapene til et ukjent grunnstoff.
b) Hvilken gruppe tilhører germanium i det moderne periodesystemet?
c) Hvorfor var Mendelejevs periodesystem en revolusjon for kjemien?`,
        multipleChoiceOptions: [
          'Så på egenskapene til nabogrunnstoffer og interpolerte; Ge er i gruppe 14; kunne forutsi ukjente grunnstoffer',
          'Gjettet tilfeldig; Ge er i gruppe 18; var bare en teori uten praktisk betydning',
          'Brukte atomnummer; Ge er i gruppe 1; organiserte bare de kjente grunnstoffene',
          'Baserte seg på farger; Ge er i gruppe 14; ble aldri akseptert av andre forskere',
        ],
        solution: `**a) Hvordan kunne Mendelejev forutsi egenskaper?**

Mendelejev organiserte grunnstoffene etter økende atommasse og egenskaper. Han la merke til **mønstre**:
- Grunnstoff i samme kolonne hadde like egenskaper
- Egenskaper endret seg gradvis nedover i en gruppe

**Metode:**
1. Mendelejev så en tom plass mellom silisium (Si) og tinn (Sn)
2. Han så på egenskapene til grunnstoffene **over** og **under** den tomme plassen
3. Han antok at det ukjente grunnstoffet ville ha egenskaper **midt i mellom**
4. For eksempel:
   - Silisium (over): tetthet 2.3 g/cm³
   - Tinn (under): tetthet 7.3 g/cm³
   - Germanium (mellom): ca. 5.5 g/cm³ ← nøyaktig forutsagt!

Dette viser **periodisiteten** i egenskapene.

**b) Hvilken gruppe tilhører germanium?**

Germanium tilhører **gruppe 14** (samme som silisium og tinn).

I det moderne periodesystemet er grunnstoffene organisert etter **atomnummer** (ikke atommasse), men mønstrene er de samme.

**c) Hvorfor var dette en revolusjon?**

Mendelejevs periodesystem var revolusjonerende fordi:

1. **Organisering:** Det brakte orden i kaoset av 63 kjente grunnstoff
2. **Forutsigelser:** Det kunne forutsi egenskaper til ukjente grunnstoff – noe som var helt nytt i vitenskapen
3. **Bevis på periodisitet:** Det viste at naturen følger mønstre og lover
4. **Verktøy:** Det ga kjemikere et kraftig verktøy for å forstå og forutsi kjemiske reaksjoner
5. **Veiledning for forskning:** Det viste forskere hvor de skulle lete etter nye grunnstoff

Da Mendelejevs forutsigelser viste seg å stemme (med germanium, gallium, skandium), ble periodesystemet allment akseptert.

**I dag** er periodesystemet fundamentet for all kjemi – det er et av de viktigste verktøyene i naturvitenskapen!`,
      },
    },

    // ========== EKSTRA EKSEMPEL: FORUTSI EGENSKAPER FRA POSISJON ==========
    {
      id: 'nat10-2-2-example-extra-1',
      type: 'example',
      title: 'Eksempel: Forutsi egenskaper fra plassering i periodesystemet',
      problem: `Kalium (K) befinner seg i periode 4, gruppe 1.

a) Hvor mange elektronskall har kalium?
b) Hvor mange valenselektroner har kalium?
c) Er kalium et metall eller ikke-metall?
d) Forutsi: Vil kalium reagere kraftig eller svakt med vann? Sammenlikn med natrium (Na, periode 3, gruppe 1).`,
      solution: `**a) Elektronskall:**

Periodenummeret forteller antall elektronskall.

Kalium er i **periode 4**, derfor har det **4 elektronskall** (K, L, M, N).

---

**b) Valenselektroner:**

Gruppenummeret (for hovedgruppene) forteller antall valenselektroner.

Kalium er i **gruppe 1**, derfor har det **1 valenselektron**.

---

**c) Metall eller ikke-metall:**

Kalium er i **gruppe 1** (alkalimetaller) på venstre side av periodesystemet.

**Svar:** Kalium er et **metall**.

---

**d) Reaksjon med vann:**

Alle alkalimetaller (gruppe 1) reagerer med vann. Reaktiviteten **øker nedover** i gruppen fordi valenselektronet er lenger fra kjernen og lettere å miste.

- Natrium (Na) er i periode 3 → reagerer kraftig med vann
- Kalium (K) er i periode 4 → en periode lenger ned

**Forutsigelse:** Kalium reagerer **kraftigere** med vann enn natrium!

**Og det stemmer:** Kalium reagerer eksplosivt med vann, mens natrium reagerer kraftig, men litt mindre voldsomt.

Dette viser styrken til periodesystemet – vi kan forutsi egenskaper basert på plassering!`,
    },

    // ========== EKSTRA EKSEMPEL: IDENTIFISERE GRUPPETRENDER ==========
    {
      id: 'nat10-2-2-example-extra-2',
      type: 'example',
      title: 'Eksempel: Trender i halogengruppen (gruppe 17)',
      problem: `Halogenene er grunnstoffene i gruppe 17: Fluor (F), Klor (Cl), Brom (Br) og Jod (I).

a) Hvor mange valenselektroner har halogenene?
b) I hvilken tilstand (fast, flytende, gass) er hvert halogen ved romtemperatur?
   - Fluor og klor er gasser
   - Brom er flytende
   - Jod er fast
c) Hva forteller dette oss om trenden i kokepunkt nedover i gruppen?
d) Hvilken halogen er mest reaktiv? Hvorfor?`,
      solution: `**a) Valenselektroner:**

Alle halogenene er i gruppe 17 og har **7 valenselektroner**.

De trenger alle bare **1 elektron** for å oppnå fullt ytterste skall (oktett).

---

**b) Tilstand ved romtemperatur:**

- **Fluor (F₂):** Gass (lysegul)
- **Klor (Cl₂):** Gass (grønngul)
- **Brom (Br₂):** Flytende (rødbrunt)
- **Jod (I₂):** Fast stoff (mørklilla)

---

**c) Trend i kokepunkt:**

Vi ser at tilstanden endres fra gass → flytende → fast nedover i gruppen.

Dette betyr at **kokepunktet øker nedover** i gruppen:

- Fluor koker ved -188°C
- Klor koker ved -34°C
- Brom koker ved 59°C
- Jod koker ved 184°C

**Forklaring:** Nedover i gruppen blir atomene **større** og **tyngre**. Tyngre molekyler har sterkere tiltrekningskrefter mellom seg, noe som krever mer energi (høyere temperatur) for å bryte dem løs.

---

**d) Mest reaktivt halogen:**

**Fluor (F)** er det mest reaktive halogenet.

**Forklaring:**

Reaktiviteten i halogengruppen **avtar nedover** (motsatt av alkalimetallene!).

- Fluor har ytterste skall **nærmest kjernen** (bare 2 skall)
- Kjernen tiltrekker det ekstra elektronet **sterkere**
- Derfor er fluor mest ivrig etter å ta opp et elektron
- Jod har ytterste skall lenger fra kjernen → svakere tiltrekningskraft → mindre reaktivt

**Sammendrag:**
Fluor > Klor > Brom > Jod (reaktivitet)`,
    },

    // ========== EKSTRA EKSEMPEL: SAMMENLIGNE GRUNNSTOFFER I SAMME PERIODE ==========
    {
      id: 'nat10-2-2-example-extra-3',
      type: 'example',
      title: 'Eksempel: Sammenligne grunnstoffer i periode 3',
      problem: `Se på de første grunnstoffene i periode 3:

| Grunnstoff | Na | Mg | Al | Si | P | S | Cl | Ar |
|---|---|---|---|---|---|---|---|---|
| Gruppe | 1 | 2 | 13 | 14 | 15 | 16 | 17 | 18 |

a) Hvor mange valenselektroner har natrium (Na), silisium (Si) og klor (Cl)?
b) Hvilke av disse er metaller, ikke-metaller og halvmetaller?
c) Hvilket grunnstoff i denne perioden er mest reaktivt av metallene?
d) Hvilket grunnstoff er minst reaktivt? Hvorfor?`,
      solution: `**a) Valenselektroner:**

- **Natrium (Na), gruppe 1:** 1 valenselektron
- **Silisium (Si), gruppe 14:** 4 valenselektroner
- **Klor (Cl), gruppe 17:** 7 valenselektroner

**Huskeregel:** For hovedgruppene (1, 2, 13-18): valenselektroner = siste siffer i gruppenummeret.

---

**b) Metaller, ikke-metaller og halvmetaller:**

**Metaller:** Na (natrium), Mg (magnesium), Al (aluminium)
- Ligger til venstre i periodesystemet

**Halvmetall:** Si (silisium)
- Ligger langs trappetrinnslinja
- Brukes i elektronikk (databrikker)

**Ikke-metaller:** P (fosfor), S (svovel), Cl (klor), Ar (argon)
- Ligger til høyre i periodesystemet

---

**c) Mest reaktivt metall i periode 3:**

**Natrium (Na)** er det mest reaktive metallet i periode 3.

**Forklaring:** Natrium har bare 1 valenselektron og avgir dette lett. Magnesium har 2 og aluminium har 3 valenselektroner, som er vanskeligere å avgi. Jo færre valenselektroner et metall har, jo lettere reagerer det.

---

**d) Minst reaktivt grunnstoff:**

**Argon (Ar)** er minst reaktivt.

**Forklaring:** Argon er en **edelgass** (gruppe 18) med fullt ytterste skall (8 valenselektroner). Det trenger verken å avgi eller ta opp elektroner, så det reagerer nesten ikke med noe.`,
    },

    // ========== EKSTRA OPPGAVE: MULTIPLE CHOICE - GRUPPE OG VALENSELEKTRONER ==========
    {
      id: 'nat10-2-2-oppg-extra-1',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-2-oppg-extra-1',
        number: '2.2.9',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Et grunnstoff befinner seg i gruppe 2 i periodesystemet. Hvor mange valenselektroner har det?',
        options: [
          { id: 'a', text: '1', isCorrect: false },
          { id: 'b', text: '2', isCorrect: true },
          { id: 'c', text: '8', isCorrect: false },
          { id: 'd', text: '18', isCorrect: false },
        ],
        solution: `**Riktig svar: 2 valenselektroner**

For hovedgruppene i periodesystemet gjelder: gruppenummeret forteller antall valenselektroner.

Gruppe 2 (jordalkalimetallene) har **2 valenselektroner**.

**Eksempler:** Beryllium (Be), Magnesium (Mg), Kalsium (Ca) – alle har 2 valenselektroner.`,
      },
    },

    // ========== EKSTRA OPPGAVE: MULTIPLE CHOICE - METALLER OG IKKE-METALLER ==========
    {
      id: 'nat10-2-2-oppg-extra-2',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-2-oppg-extra-2',
        number: '2.2.10',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket av disse grunnstoffene er et ikke-metall?',
        options: [
          { id: 'a', text: 'Natrium (Na)', isCorrect: false },
          { id: 'b', text: 'Jern (Fe)', isCorrect: false },
          { id: 'c', text: 'Svovel (S)', isCorrect: true },
          { id: 'd', text: 'Aluminium (Al)', isCorrect: false },
        ],
        solution: `**Riktig svar: Svovel (S)**

Svovel er et **ikke-metall** som befinner seg i gruppe 16, på høyre side av periodesystemet.

**De andre er metaller:**
- Natrium (Na): Alkalimetall, gruppe 1
- Jern (Fe): Overgangsmetall, midten av periodesystemet
- Aluminium (Al): Metall, gruppe 13

**Huskeregel:** Ikke-metaller befinner seg til høyre i periodesystemet (gruppe 14-18, pluss hydrogen).`,
      },
    },

    // ========== EKSTRA OPPGAVE: KLASSISK - TREND I REAKTIVITET ==========
    {
      id: 'nat10-2-2-oppg-extra-3',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-2-oppg-extra-3',
        number: '2.2.11',
        type: 'classic',
        difficulty: 'medium',
        task: `Litium (Li), natrium (Na) og kalium (K) er alle alkalimetaller i gruppe 1.

a) Hvor mange valenselektroner har hvert av disse grunnstoffene?
b) I hvilken periode befinner hvert grunnstoff seg?
c) Ordne grunnstoffene etter økende reaktivitet med vann.
d) Forklar hvorfor reaktiviteten øker nedover i gruppe 1.`,
        solution: `**a) Valenselektroner:**

Alle tre er i gruppe 1 og har **1 valenselektron** hver.

---

**b) Periode:**

- Litium (Li): **Periode 2** (2 elektronskall)
- Natrium (Na): **Periode 3** (3 elektronskall)
- Kalium (K): **Periode 4** (4 elektronskall)

---

**c) Økende reaktivitet:**

**Li < Na < K** (litium er minst reaktiv, kalium er mest reaktiv)

---

**d) Forklaring:**

Alle tre ønsker å **avgi 1 valenselektron** for å få fullt ytterste skall.

Nedover i gruppen:
- Atomene blir **større** (flere elektronskall)
- Valenselektronet er **lenger fra kjernen**
- Tiltrekningskraften mellom kjernen og valenselektronet er **svakere**
- Det er **lettere** å miste valenselektronet

**Kalium** har valenselektronet i 4. skall (langt fra kjernen) → lett å miste → mest reaktiv.

**Litium** har valenselektronet i 2. skall (nær kjernen) → vanskeligere å miste → minst reaktiv.`,
      },
    },

    // ========== EKSTRA OPPGAVE: KLASSISK - PLASSERE UKJENT GRUNNSTOFF ==========
    {
      id: 'nat10-2-2-oppg-extra-4',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-2-oppg-extra-4',
        number: '2.2.12',
        type: 'classic',
        difficulty: 'medium',
        task: `Et ukjent grunnstoff X har følgende egenskaper:
- Det er en giftig gass med sterk lukt
- Det er svært reaktivt
- Det har 7 valenselektroner
- Det befinner seg i periode 2

a) Hvilken gruppe tilhører grunnstoff X?
b) Identifiser grunnstoff X (navn og symbol).
c) Hva slags ion danner X når det reagerer med et metall?
d) Skriv formelen for forbindelsen som dannes når X reagerer med natrium (Na).`,
        solution: `**a) Gruppe:**

7 valenselektroner → **Gruppe 17** (halogenene)

---

**b) Identifisering:**

Gruppe 17, periode 2 → **Fluor (F)**

Fluor er den mest reaktive av alle halogenene og er en svært giftig gass.

---

**c) Ion:**

Fluor har 7 valenselektroner og trenger **1 elektron** for å få fullt ytterste skall.

Når fluor tar opp 1 elektron, danner det **F⁻** (fluoridion) med ladning -1.

F + e⁻ → F⁻

---

**d) Formel med natrium:**

Natrium (Na) avgir 1 elektron → Na⁺
Fluor (F) tar opp 1 elektron → F⁻

Forholdet er 1:1 (1 elektron avgitt = 1 elektron tatt opp)

**Formel: NaF** (natriumfluorid)

NaF brukes i tannkrem for å styrke tannemaljen!`,
      },
    },

    // ========== EKSTRA OPPGAVE: KLASSISK - ELEKTRONEGATIVITET ==========
    {
      id: 'nat10-2-2-oppg-extra-5',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-2-oppg-extra-5',
        number: '2.2.13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Elektronegativitet beskriver hvor sterkt et atom trekker til seg elektroner.

Se på disse grunnstoffene og deres elektronegativitet:
- Natrium (Na): 0,9
- Magnesium (Mg): 1,3
- Klor (Cl): 3,2
- Fluor (F): 4,0
- Oksygen (O): 3,4

a) Hvilket grunnstoff har høyest elektronegativitet?
b) Beskriv trenden i elektronegativitet bortover i en periode (fra venstre til høyre).
c) Forklar hvorfor fluor har høyere elektronegativitet enn klor (begge er i gruppe 17).
d) Hva tror du skjer med elektronene i en binding mellom Na og Cl? Hvem tiltrekker dem mest?`,
        solution: `**a) Høyest elektronegativitet:**

**Fluor (F)** med elektronegativitet 4,0 er det mest elektronegative grunnstoffet.

Fluor trekker til seg elektroner sterkere enn noe annet grunnstoff i periodesystemet.

---

**b) Trend bortover i en periode:**

Elektronegativiteten **øker** fra venstre til høyre i en periode.

I periode 3: Na (0,9) < Mg (1,3) < ... < Cl (3,2)

**Forklaring:** Bortover i perioden øker antall protoner i kjernen, mens elektronene legges til i **samme skall**. Flere protoner trekker elektronene sterkere → høyere elektronegativitet.

---

**c) Fluor vs. klor:**

Fluor (4,0) > Klor (3,2)

Begge er i gruppe 17 med 7 valenselektroner, men:

- Fluor har ytterste skall i **L-skallet** (nært kjernen)
- Klor har ytterste skall i **M-skallet** (lenger fra kjernen)

Jo **nærmere kjernen**, jo sterkere tiltrekning → fluor trekker elektroner sterkere.

**Generell trend:** Elektronegativiteten **øker oppover** i en gruppe.

---

**d) Binding mellom Na og Cl:**

Na har elektronegativitet 0,9 og Cl har 3,2.

**Stor forskjell** (3,2 - 0,9 = 2,3) betyr at klor trekker elektronene **mye sterkere** enn natrium.

Resultatet er at elektronet fra natrium **overføres helt** til klor:

Na → Na⁺ + e⁻
Cl + e⁻ → Cl⁻

Dette danner en **ionebinding**. Klor "vinner" elektronet fullstendig fordi den har mye høyere elektronegativitet.

**Huskeregel:** Stor forskjell i elektronegativitet → ionebinding. Liten forskjell → kovalent binding.`,
      },
    },

    // ========== EKSTRA OPPGAVE: MULTIPLE CHOICE - HALVMETALLER ==========
    {
      id: 'nat10-2-2-oppg-extra-6',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-2-oppg-extra-6',
        number: '2.2.14',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Silisium (Si) brukes i databrikker og solceller. Hva slags grunnstoff er silisium?',
        options: [
          { id: 'a', text: 'Metall', isCorrect: false },
          { id: 'b', text: 'Ikke-metall', isCorrect: false },
          { id: 'c', text: 'Halvmetall', isCorrect: true },
          { id: 'd', text: 'Edelgass', isCorrect: false },
        ],
        solution: `**Riktig svar: Halvmetall**

Silisium (Si) er et **halvmetall** (også kalt metalloid).

**Egenskaper:**
- Ligger langs "trappetrinnslinja" i periodesystemet mellom metaller og ikke-metaller
- Leder elektrisitet **delvis** (halvleder)
- Har egenskaper fra både metaller og ikke-metaller

**Hvorfor er dette viktig?**

Silisiums halvledende egenskaper gjør det perfekt for:
- **Databrikker** (prosessorer i datamaskiner og telefoner)
- **Solceller** (omdanner sollys til elektrisitet)
- **Transistorer** (byggesteinene i elektronikk)

Andre halvmetaller: Germanium (Ge), Arsen (As), Bor (B)`,
      },
    },

    // ========== OPPGAVE 8: KLASSISK (VANSKELIG) ==========
    {
      id: 'nat10-2-2-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-2-ex-8',
        number: '2.2.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Du har tre ukjente grunnstoff A, B og C. Du vet følgende:

**Grunnstoff A:**
- Sølvaktig metall
- Reagerer kraftig med vann
- Har 1 valenselektron
- Befinner seg i periode 3

**Grunnstoff B:**
- Gul-grønn giftig gass
- Meget reaktiv
- Har 7 valenselektroner
- Befinner seg i periode 3

**Grunnstoff C:**
- Fargeløs, ureaktiv gass
- Reagerer nesten ikke med noe
- Befinner seg i periode 3

a) Identifiser de tre grunnstoffene (navn og symbol).
b) Forklar hvorfor grunnstoff A og B reagerer kraftig med hverandre.
c) Hva slags forbindelse dannes når A og B reagerer? Hva er formelen?`,
        multipleChoiceOptions: [
          'A=Natrium (Na), B=Klor (Cl), C=Argon (Ar); Na gir e⁻ til Cl; danner NaCl',
          'A=Magnesium (Mg), B=Oksygen (O), C=Neon (Ne); Mg tar e⁻ fra O; danner MgO₂',
          'A=Kalium (K), B=Fluor (F), C=Helium (He); K og F deler elektroner; danner KF₂',
          'A=Aluminium (Al), B=Svovel (S), C=Argon (Ar); Al tar e⁻ fra S; danner AlS',
        ],
        solution: `**a) Identifisering av grunnstoffene:**

**Grunnstoff A: Natrium (Na)**
- Periode 3, gruppe 1 (1 valenselektron)
- Alkalimetall (reagerer kraftig med vann)

**Grunnstoff B: Klor (Cl)**
- Periode 3, gruppe 17 (7 valenselektroner)
- Halogen (gul-grønn giftig gass, meget reaktiv)

**Grunnstoff C: Argon (Ar)**
- Periode 3, gruppe 18
- Edelgass (fargeløs, ureaktiv)

**b) Hvorfor reagerer natrium og klor kraftig?**

**Natrium (Na):**
- Har **1 valenselektron**
- Ønsker å **gi bort** dette elektronet for å få fullt skall (som neon)
- Da blir det positivt ladet (Na⁺-ion)

**Klor (Cl):**
- Har **7 valenselektroner**
- Ønsker å **ta opp** 1 elektron for å få fullt skall (som argon)
- Da blir det negativt ladet (Cl⁻-ion)

**Perfekt match!**
Natrium gir fra seg 1 elektron, klor tar opp 1 elektron.
- Begge får fullt ytterste skall
- Oppositt ladede ioner tiltrekkes sterkt
- Dette frigjør masse energi → kraftig reaksjon!

**c) Forbindelse og formel:**

**Forbindelse:** Natriumklorid (bordsalt)

**Formel:** NaCl

Dette er en **ionisk forbindelse** (salt) dannet av:
- Na⁺ (natrium-ion, positivt ladet)
- Cl⁻ (klorid-ion, negativt ladet)

Forholdet er 1:1 fordi natrium gir 1 elektron og klor tar opp 1 elektron.

**Interessant:**
Natrium (eksplosivt metall) + Klor (giftig gass) = Natriumklorid (ufarlig bordsalt)!

Dette viser hvordan grunnstoff kan endre egenskaper fullstendig når de danner forbindelser.`,
      },
    },
  ],
  exercises: [], // Oppgavene er embedded i content
};

// ============================================================================
// Kapittel 2.3: Kjemiske bindinger
// LK20: Forklare bindinger mellom atomer
// ============================================================================

export const CHAPTER_NAT10_2_3: TextbookChapter = {
  id: 'naturfag-10-2-3',
  courseId: 'naturfag-10',
  chapterNumber: '2.3',
  title: 'Kjemiske bindinger',
  description: 'Forstå hvordan atomer binder seg sammen til molekyler og forbindelser.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare bindinger mellom atomer og hvordan de påvirker stoffenes egenskaper',
    'bruke periodesystemet til å forklare hvorfor og hvordan atomer danner forbindelser',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'nat10-2-3-intro',
      type: 'text',
      content: `## Kjemiske bindinger

Vi har lært om atomer og periodesystemet. Men atomer eksisterer sjelden alene i naturen – de bindes sammen med andre atomer og danner **molekyler** og **forbindelser**.

Men hvorfor skjer dette? Hvorfor danner atomer bindinger?

I dette kapitlet lærer du:
- Hvorfor atomer danner bindinger (oktettregelen)
- De tre hovedtypene av kjemiske bindinger
- Hvordan bindingstype påvirker stoffers egenskaper
- Hvordan skrive kjemiske formler`,
    },

    // ========== HVORFOR DANNER ATOMER BINDINGER? ==========
    {
      id: 'nat10-2-3-hvorfor-bindinger',
      type: 'text',
      content: `## Hvorfor danner atomer bindinger?

Atomer "ønsker" å oppnå en **stabil elektronkonfigurasjon**. Den mest stabile konfigurasjonen er å ha **fullt ytterste skall**, akkurat som edelgassene (gruppe 18).

### Edelgasser er stabile

Edelgassene (helium, neon, argon, osv.) er svært stabile og reagerer nesten aldri med andre atomer. Hvorfor?

- **Helium (He):** 2 elektroner (fullt første skall)
- **Neon (Ne):** 10 elektroner (2 i første skall, 8 i andre skall – fullt!)
- **Argon (Ar):** 18 elektroner (2-8-8 – fullt ytterste skall!)

Alle andre atomer "ønsker" å bli som edelgassene ved å fylle opp ytterste skall. Dette kan de gjøre på tre måter:

1. **Gi bort elektroner** (metaller)
2. **Ta opp elektroner** (ikke-metaller)
3. **Dele elektroner** (ikke-metaller med ikke-metaller)`,
    },

    // ========== DEFINISJON: OKTETTREGELEN ==========
    {
      id: 'nat10-2-3-def-oktettregelen',
      type: 'definition',
      title: 'Oktettregelen',
      content: `**Oktettregelen** sier at atomer "streber" etter å få **8 elektroner** i ytterste skall (eller 2 for hydrogen og helium).

Dette gjør dem stabile, akkurat som edelgassene.

**Eksempel:** Oksygen har 6 elektroner i ytterste skall. For å få 8, må det enten ta opp 2 elektroner eller dele elektroner med andre atomer.`,
    },

    // ========== IONEBINDING ==========
    {
      id: 'nat10-2-3-ionebinding',
      type: 'text',
      content: `## Ionebinding – elektronoverføring

Når et **metall** møter et **ikke-metall**, skjer det en **overføring av elektroner**.

### Hvordan fungerer det?

**Eksempel: Natrium + Klor → Natriumklorid (bordsalt)**

- **Natrium (Na):** 11 elektroner (2-8-1)
  - "Ønsker" å bli kvitt 1 elektron i ytterste skall
  - Blir til **Na⁺** (positivt ladet ion, eller **kation**)

- **Klor (Cl):** 17 elektroner (2-8-7)
  - "Ønsker" 1 elektron til for å få 8 i ytterste skall
  - Blir til **Cl⁻** (negativt ladet ion, eller **anion**)

Når natrium gir sitt elektron til klor, oppnår begge fullt ytterste skall!

### Ionebinding = tiltrekningskraft

Når Na⁺ (positiv) og Cl⁻ (negativ) dannes, tiltrekker de hverandre (fordi motsatte ladninger tiltrekker hverandre). Denne tiltrekningskraften er **ionebindingen**.`,
    },

    // ========== DEFINISJON: IONER ==========
    {
      id: 'nat10-2-3-def-ioner',
      type: 'definition',
      title: 'Ioner',
      content: `**Ion:** Et atom som har fått eller mistet elektroner, og derfor har blitt elektrisk ladet.

- **Kation:** Positivt ladet ion (har mistet elektroner). Dannes av metaller.
  - Eksempel: Na⁺, Mg²⁺, Al³⁺

- **Anion:** Negativt ladet ion (har tatt opp elektroner). Dannes av ikke-metaller.
  - Eksempel: Cl⁻, O²⁻, N³⁻`,
    },

    // ========== EKSEMPEL: IONEBINDING ==========
    {
      id: 'nat10-2-3-ex-ionebinding',
      type: 'example',
      title: 'Eksempel: Magnesiumoksid (MgO)',
      problem: `Magnesium (Mg) har 12 elektroner (2-8-2).
Oksygen (O) har 8 elektroner (2-6).

Hvordan dannes ionebinding mellom Mg og O?`,
      solution: `**Steg 1: Magnesium gir fra seg 2 elektroner**

Mg har 2 elektroner i ytterste skall. For å få fullt skall (8), må det gi fra seg 2 elektroner.

Mg → Mg²⁺ + 2e⁻

Nå har Mg²⁺ elektronkonfigurasjon 2-8 (fullt ytterste skall!)

**Steg 2: Oksygen tar opp 2 elektroner**

O har 6 elektroner i ytterste skall. For å få 8, må det ta opp 2 elektroner.

O + 2e⁻ → O²⁻

Nå har O²⁻ elektronkonfigurasjon 2-8 (fullt ytterste skall!)

**Steg 3: Ionebinding dannes**

Mg²⁺ (positiv) og O²⁻ (negativ) tiltrekker hverandre og danner **MgO** (magnesiumoksid).

**Kjemisk formel:** MgO`,
    },

    // ========== KOVALENT BINDING ==========
    {
      id: 'nat10-2-3-kovalent-binding',
      type: 'text',
      content: `## Kovalent binding – deling av elektroner

Når to **ikke-metaller** møtes, er ingen av dem villige til å gi fra seg elektroner. I stedet **deler** de elektroner.

### Hvordan fungerer det?

**Eksempel: Hydrogen + Hydrogen → Hydrogenmolekyl (H₂)**

- **Hydrogen (H):** 1 elektron
  - "Ønsker" 2 elektroner i ytterste skall (som helium)

Når to hydrogenatomer møtes, deler de elektronene sine. De har nå **2 elektroner til felles** (et **elektronpar**), og begge atomene "føler" at de har 2 elektroner i ytterste skall.

Dette felles elektronparet er **kovalent binding**.

### Enkelt-, dobbelt- og trippelbinding

Atomer kan dele **ett, to eller tre elektronpar**:

- **Enkeltbinding:** 1 elektronpar deles (H₂, Cl₂)
- **Dobbeltbinding:** 2 elektronpar deles (O₂, CO₂)
- **Trippelbinding:** 3 elektronpar deles (N₂)

**Eksempel: Oksygen (O₂)**

Hvert oksygenatom har 6 elektroner i ytterste skall. De "ønsker" 8.

Hvis to oksygenatomer deler **2 elektronpar** (dobbeltbinding), oppnår begge 8 elektroner i ytterste skall.

**Kjemisk formel:** O₂ (eller O=O med dobbeltbinding)`,
    },

    // ========== DEFINISJON: MOLEKYL ==========
    {
      id: 'nat10-2-3-def-molekyl',
      type: 'definition',
      title: 'Molekyl',
      content: `**Molekyl:** To eller flere atomer som er bundet sammen med kovalente bindinger.

**Eksempler:**
- H₂ (hydrogenmolekyl) – 2 hydrogenatomer
- H₂O (vannmolekyl) – 2 hydrogen og 1 oksygen
- CO₂ (karbondioksidmolekyl) – 1 karbon og 2 oksygen
- C₆H₁₂O₆ (glukose) – 6 karbon, 12 hydrogen, 6 oksygen`,
    },

    // ========== EKSEMPEL: KOVALENT BINDING ==========
    {
      id: 'nat10-2-3-ex-kovalent',
      type: 'example',
      title: 'Eksempel: Vann (H₂O)',
      problem: `Hydrogen (H) har 1 elektron.
Oksygen (O) har 6 elektroner i ytterste skall.

Hvordan dannes vann (H₂O) gjennom kovalente bindinger?`,
      solution: `**Steg 1: Oksygen trenger 2 elektroner**

Oksygen har 6 elektroner i ytterste skall. For å få 8, trenger det 2 elektroner til.

**Steg 2: Hydrogen trenger 1 elektron**

Hydrogen har 1 elektron. For å få 2 (fullt første skall), trenger det 1 elektron til.

**Steg 3: Deling av elektroner**

Oksygen deler **1 elektron** med det første hydrogenatomet → 1 kovalent binding

Oksygen deler **1 elektron** med det andre hydrogenatomet → 1 kovalent binding

**Resultat:**
- Oksygen har nå 8 elektroner i ytterste skall (6 egne + 2 delte)
- Hvert hydrogen har 2 elektroner (1 eget + 1 delt)

**Kjemisk formel:** H₂O

**Visualisering:**

\`\`\`
    H
    |
    O
    |
    H
\`\`\`

Dette er **vannmolekylet** – et av de viktigste molekylene på jorden!`,
    },

    // ========== METALLBINDING ==========
    {
      id: 'nat10-2-3-metallbinding',
      type: 'text',
      content: `## Metallbinding – elektronsky

I metaller er atomene ordnet i et fast **gitter** (en regelmessig struktur). Elektronene i ytterste skall er **løse** og kan bevege seg fritt mellom atomene.

### Elektronsky-modellen

Vi kan tenke på metallbindingen som:

- **Positive metallioner** (atomkjerner med indre elektroner)
- **En sky av frie elektroner** som holder ionene sammen

Disse frie elektronene gjør at metaller:

- **Leder elektrisk strøm** (elektronene kan bevege seg)
- **Leder varme** (elektronene overfører energi)
- **Er formbare** (atomene kan gli forbi hverandre uten at bindingene brytes)`,
    },

    // ========== DEFINISJON: METALLBINDING ==========
    {
      id: 'nat10-2-3-def-metallbinding',
      type: 'definition',
      title: 'Metallbinding',
      content: `**Metallbinding:** Bindingen mellom metallatomer i et metallgitter, der frie elektroner holder positive metallioner sammen.

**Kjennetegn:**
- Frie elektroner (elektronsky)
- Gir metaller deres spesielle egenskaper (ledningsevne, formbarhet)`,
    },

    // ========== SAMMENLIGNING AV BINDINGSTYPER ==========
    {
      id: 'nat10-2-3-sammenligning',
      type: 'text',
      content: `## Sammenligning av bindingstyper

| Bindingstype | Mellom | Hva skjer | Eksempel | Egenskaper |
|--------------|--------|-----------|----------|------------|
| **Ionebinding** | Metall + Ikke-metall | Elektronoverføring | NaCl, MgO | Høyt smeltepunkt, sprø, leder strøm i oppløsning |
| **Kovalent binding** | Ikke-metall + Ikke-metall | Elektronpar deles | H₂O, CO₂, H₂ | Lavere smeltepunkt, leder ikke strøm |
| **Metallbinding** | Metall + Metall | Elektronsky | Fe, Cu, Al | Leder strøm og varme, formbar |

### Hvordan bestemme bindingstype?

**1. Er begge atomene metaller?**
→ **Metallbinding**

**2. Er det ett metall og ett ikke-metall?**
→ **Ionebinding**

**3. Er begge atomene ikke-metaller?**
→ **Kovalent binding**`,
    },

    // ========== KJEMISKE FORMLER ==========
    {
      id: 'nat10-2-3-formler',
      type: 'text',
      content: `## Molekyler og kjemiske formler

En **kjemisk formel** viser:
- **Hvilke atomer** molekylet inneholder
- **Hvor mange** av hvert atom

### Eksempler

- **H₂O:** 2 hydrogen, 1 oksygen (vann)
- **CO₂:** 1 karbon, 2 oksygen (karbondioksid)
- **C₆H₁₂O₆:** 6 karbon, 12 hydrogen, 6 oksygen (glukose/sukker)
- **NaCl:** 1 natrium, 1 klor (bordsalt)

### Hvordan lese formler

Tallet **etter** symbolet viser antall atomer av det elementet.

- H₂O → H₂ (2 hydrogen) + O (1 oksygen)
- CO₂ → C (1 karbon) + O₂ (2 oksygen)

Hvis det ikke er noe tall, er det **1 atom** av det elementet.`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE - OKTETTREGELEN ==========
    {
      id: 'nat10-2-3-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-3-ex-1',
        number: '2.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva sier oktettregelen?',
        options: [
          {
            id: 'a',
            text: 'Atomer ønsker å ha 8 protoner i kjernen',
            isCorrect: false,
            feedback: 'Feil. Oktettregelen handler om elektroner, ikke protoner.',
          },
          {
            id: 'b',
            text: 'Atomer ønsker å ha 8 elektroner i ytterste skall',
            isCorrect: true,
            feedback: 'Riktig! Oktettregelen sier at atomer streber etter å få 8 elektroner i ytterste skall for å bli stabile.',
          },
          {
            id: 'c',
            text: 'Atomer kan bare danne 8 bindinger',
            isCorrect: false,
            feedback: 'Feil. Oktettregelen handler om antall elektroner i ytterste skall, ikke antall bindinger.',
          },
          {
            id: 'd',
            text: 'Det finnes 8 typer atomer',
            isCorrect: false,
            feedback: 'Feil. Det finnes mange flere enn 8 typer atomer (118+ elementer i periodesystemet).',
          },
        ],
        solution: 'Alternativ B er riktig. Oktettregelen sier at atomer ønsker å ha 8 elektroner i ytterste skall for å bli stabile som edelgassene.',
      },
    },

    // ========== OPPGAVE 2: MULTIPLE CHOICE - IONER ==========
    {
      id: 'nat10-2-3-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-3-ex-2',
        number: '2.3.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er et kation?',
        options: [
          {
            id: 'a',
            text: 'Et negativt ladet ion',
            isCorrect: false,
            feedback: 'Feil. Et negativt ladet ion kalles et anion.',
          },
          {
            id: 'b',
            text: 'Et positivt ladet ion',
            isCorrect: true,
            feedback: 'Riktig! Et kation er et positivt ladet ion som har mistet elektroner.',
          },
          {
            id: 'c',
            text: 'Et nøytralt atom',
            isCorrect: false,
            feedback: 'Feil. Et kation er ladet (ikke nøytralt) fordi det har mistet elektroner.',
          },
          {
            id: 'd',
            text: 'Et molekyl',
            isCorrect: false,
            feedback: 'Feil. Et kation er et enkelt ladet atom, ikke et molekyl.',
          },
        ],
        solution: 'Alternativ B er riktig. Kation = positivt ladet ion (dannes når et atom mister elektroner).',
      },
    },

    // ========== OPPGAVE 3: MULTIPLE CHOICE - BINDINGSTYPER ==========
    {
      id: 'nat10-2-3-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-3-ex-3',
        number: '2.3.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken type binding dannes mellom to ikke-metaller?',
        options: [
          {
            id: 'a',
            text: 'Ionebinding',
            isCorrect: false,
            feedback: 'Feil. Ionebinding dannes mellom metall og ikke-metall.',
          },
          {
            id: 'b',
            text: 'Kovalent binding',
            isCorrect: true,
            feedback: 'Riktig! Når to ikke-metaller møtes, deler de elektroner og danner kovalente bindinger.',
          },
          {
            id: 'c',
            text: 'Metallbinding',
            isCorrect: false,
            feedback: 'Feil. Metallbinding dannes mellom metallatomer.',
          },
          {
            id: 'd',
            text: 'Hydrogenbinding',
            isCorrect: false,
            feedback: 'Feil. Hydrogenbinding er en svak tiltrekningskraft mellom molekyler, ikke innad i molekyler.',
          },
        ],
        solution: 'Alternativ B er riktig. Ikke-metaller deler elektroner og danner kovalente bindinger.',
      },
    },

    // ========== OPPGAVE 4: BESTEM BINDINGSTYPE - NATRIUMKLORID ==========
    {
      id: 'nat10-2-3-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-3-ex-4',
        number: '2.3.4',
        type: 'classic',
        difficulty: 'medium',
        task: `Natriumklorid (NaCl) består av natrium (Na) og klor (Cl).

Natrium er et metall i gruppe 1.
Klor er et ikke-metall i gruppe 17.

a) Hvilken type binding dannes mellom Na og Cl?
b) Beskriv hva som skjer med elektronene når bindingen dannes.`,
        multipleChoiceOptions: [
          'Ionebinding; Na gir 1 elektron til Cl, danner Na⁺ og Cl⁻',
          'Kovalent binding; Na og Cl deler 1 elektronpar',
          'Metallbinding; elektroner flyter fritt mellom Na og Cl',
          'Hydrogenbinding; Na og Cl tiltrekkes av hydrogenatomer',
        ],
        solution: `**a) Bindingstype:**

**Ionebinding**

**Forklaring:** Natrium er et metall, klor er et ikke-metall. Når metall møter ikke-metall, dannes ionebinding.

**b) Hva skjer med elektronene:**

**Natrium (Na):**
- Har 11 elektroner (2-8-1)
- Gir fra seg 1 elektron fra ytterste skall
- Blir til **Na⁺** (kation)
- Har nå 10 elektroner (2-8) – fullt ytterste skall!

**Klor (Cl):**
- Har 17 elektroner (2-8-7)
- Tar opp 1 elektron
- Blir til **Cl⁻** (anion)
- Har nå 18 elektroner (2-8-8) – fullt ytterste skall!

**Resultat:**
Elektronet overføres fra natrium til klor. De to ionene (Na⁺ og Cl⁻) tiltrekker hverandre og danner **natriumklorid (bordsalt)**.`,
      },
    },

    // ========== OPPGAVE 5: BESTEM BINDINGSTYPE - OKSYGEN ==========
    {
      id: 'nat10-2-3-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-3-ex-5',
        number: '2.3.5',
        type: 'classic',
        difficulty: 'medium',
        task: `Oksygengass (O₂) består av to oksygenatomer bundet sammen.

Oksygen er et ikke-metall med 6 elektroner i ytterste skall.

a) Hvilken type binding dannes mellom de to oksygenatomene?
b) Hvor mange elektronpar deles? (Enkelt-, dobbelt- eller trippelbinding?)`,
        multipleChoiceOptions: [
          'Kovalent binding; dobbeltbinding (2 elektronpar deles)',
          'Ionebinding; enkeltbinding (1 elektron overføres)',
          'Metallbinding; ingen elektroner deles',
          'Kovalent binding; trippelbinding (3 elektronpar deles)',
        ],
        solution: `**a) Bindingstype:**

**Kovalent binding**

**Forklaring:** Begge atomene er ikke-metaller. Når to ikke-metaller møtes, deler de elektroner og danner kovalente bindinger.

**b) Antall elektronpar:**

**Dobbeltbinding** (2 elektronpar deles)

**Forklaring:**
- Hvert oksygenatom har **6 elektroner** i ytterste skall
- For å få **8 elektroner** (oktettregelen), trenger hver **2 elektroner til**
- De to oksygenatomene deler derfor **2 elektronpar** (4 elektroner totalt)
- Dette kalles en **dobbeltbinding**

**Kjemisk formel:** O=O eller O₂

**Visualisering:**

\`\`\`
O = O
\`\`\`

Hver strek (=) representerer ett elektronpar. Dobbeltstreken viser at det er to elektronpar (dobbeltbinding).`,
      },
    },

    // ========== OPPGAVE 6: BESTEM BINDINGSTYPE - JERN ==========
    {
      id: 'nat10-2-3-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-3-ex-6',
        number: '2.3.6',
        type: 'classic',
        difficulty: 'medium',
        task: `Jern (Fe) er et metall som brukes i alt fra biler til bygninger.

a) Hvilken type binding holder jernatomer sammen i et stykke jern?
b) Forklar hvorfor jern kan lede elektrisk strøm.`,
        multipleChoiceOptions: [
          'Metallbinding; frie elektroner kan bevege seg og lede strøm',
          'Ionebinding; ionene leder strøm når de er faste',
          'Kovalent binding; delte elektroner leder strøm',
          'Metallbinding; ionene beveger seg og leder strøm',
        ],
        solution: `**a) Bindingstype:**

**Metallbinding**

**Forklaring:** Jern er et metall. Når metallatomer binder seg sammen, dannes metallbinding.

**b) Hvorfor leder jern strøm:**

Metallbindingen skaper en **sky av frie elektroner** som kan bevege seg mellom atomene.

**Elektronsky-modellen:**
- Jernatomer i gitteret er **positive ioner** (atomkjerner med indre elektroner)
- Elektroner i ytterste skall er **løse** og beveger seg fritt
- Disse frie elektronene holder ionene sammen

**Når vi kobler jern til en strømkrets:**
- De frie elektronene kan bevege seg gjennom metallet
- Dette er elektrisk strøm!

**Derfor:**
Jern (og alle andre metaller) leder strøm fordi de har frie elektroner som kan bevege seg.`,
      },
    },

    // ========== OPPGAVE 7: BESTEM BINDINGSTYPE - KALSIUMOKSID ==========
    {
      id: 'nat10-2-3-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-3-ex-7',
        number: '2.3.7',
        type: 'classic',
        difficulty: 'medium',
        task: `Kalsiumoksid (CaO) dannes når kalsium (Ca) reagerer med oksygen (O).

Kalsium er et metall i gruppe 2 med 20 elektroner (2-8-8-2).
Oksygen er et ikke-metall i gruppe 16 med 8 elektroner (2-6).

a) Hvilken type binding dannes?
b) Beskriv hva som skjer med elektronene.
c) Skriv ionene som dannes.`,
        multipleChoiceOptions: [
          'Ionebinding; Ca gir 2 e⁻ til O; danner Ca²⁺ og O²⁻',
          'Kovalent binding; Ca og O deler 2 elektronpar; ingen ioner dannes',
          'Metallbinding; Ca og O deler frie elektroner; danner CaO',
          'Ionebinding; O gir 2 e⁻ til Ca; danner Ca²⁻ og O²⁺',
        ],
        solution: `**a) Bindingstype:**

**Ionebinding**

**Forklaring:** Kalsium er et metall, oksygen er et ikke-metall. Metall + ikke-metall = ionebinding.

**b) Hva skjer med elektronene:**

**Kalsium (Ca):**
- Har 20 elektroner (2-8-8-2)
- Har 2 elektroner i ytterste skall
- Gir fra seg **2 elektroner**
- Blir til **Ca²⁺** (kation med +2 ladning)
- Har nå 18 elektroner (2-8-8) – fullt ytterste skall!

**Oksygen (O):**
- Har 8 elektroner (2-6)
- Har 6 elektroner i ytterste skall
- Tar opp **2 elektroner**
- Blir til **O²⁻** (anion med -2 ladning)
- Har nå 10 elektroner (2-8) – fullt ytterste skall!

**c) Ionene som dannes:**

- **Ca²⁺** (kalsiumion)
- **O²⁻** (oksidion)

Disse tiltrekker hverandre og danner **CaO** (kalsiumoksid).`,
      },
    },

    // ========== OPPGAVE 8: LEWIS-STRUKTUR - KLOR ==========
    {
      id: 'nat10-2-3-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-3-ex-8',
        number: '2.3.8',
        type: 'classic',
        difficulty: 'medium',
        task: `Klorgass (Cl₂) består av to kloratomer bundet sammen.

Klor har 17 elektroner (2-8-7).

a) Hvor mange elektroner har klor i ytterste skall?
b) Hvor mange elektroner trenger klor for å oppfylle oktettregelen?
c) Tegn en forenklet Lewis-struktur som viser hvordan de to kloratomene deler elektroner.`,
        multipleChoiceOptions: [
          '7 elektroner i ytterste skall; trenger 1 elektron; Cl-Cl med enkeltbinding',
          '8 elektroner i ytterste skall; trenger 0 elektroner; ingen binding',
          '7 elektroner i ytterste skall; trenger 2 elektroner; Cl=Cl med dobbeltbinding',
          '17 elektroner i ytterste skall; trenger 1 elektron; Cl-Cl med ionebinding',
        ],
        solution: `**a) Elektroner i ytterste skall:**

**7 elektroner**

Klor har elektronkonfigurasjon 2-8-7, så det er 7 elektroner i ytterste (tredje) skall.

**b) Elektroner som trengs:**

**1 elektron**

Klor trenger 1 elektron til for å få 8 i ytterste skall (oktettregelen).

**c) Lewis-struktur:**

\`\`\`
:Cl—Cl:
\`\`\`

eller mer detaljert:

\`\`\`
  :Cl  :  :Cl:
   |
   —
\`\`\`

**Forklaring:**
- Hver **: (prikk)** representerer et elektron
- **—** (streken) representerer et delt elektronpar (2 elektroner)
- Hvert kloratom deler **1 elektronpar** (2 elektroner)
- Dette er en **enkeltbinding**
- Begge kloratomene har nå 8 elektroner rundt seg (6 udelete + 2 delte)

**Kjemisk formel:** Cl₂`,
      },
    },

    // ========== OPPGAVE 9: LEWIS-STRUKTUR - KARBONDIOKSID ==========
    {
      id: 'nat10-2-3-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-3-ex-9',
        number: '2.3.9',
        type: 'classic',
        difficulty: 'medium',
        task: `Karbondioksid (CO₂) består av 1 karbonatom og 2 oksygenatomer.

Karbon har 6 elektroner (2-4).
Oksygen har 8 elektroner (2-6).

a) Hvor mange elektroner har karbon i ytterste skall?
b) Hvor mange elektroner har oksygen i ytterste skall?
c) Tegn en forenklet struktur som viser bindingene i CO₂.`,
        multipleChoiceOptions: [
          'C: 4 e⁻, O: 6 e⁻; O=C=O med to dobbeltbindinger',
          'C: 6 e⁻, O: 8 e⁻; O-C-O med to enkeltbindinger',
          'C: 4 e⁻, O: 6 e⁻; O-C-O med ionebindinger',
          'C: 2 e⁻, O: 6 e⁻; O≡C≡O med to trippelbindinger',
        ],
        solution: `**a) Karbon:**

**4 elektroner** i ytterste skall (2-4)

**b) Oksygen:**

**6 elektroner** i ytterste skall (2-6)

**c) Struktur for CO₂:**

\`\`\`
O = C = O
\`\`\`

**Forklaring:**

**Karbon (C):**
- Har 4 elektroner i ytterste skall
- Trenger 4 elektroner til for å få 8
- Deler **2 elektronpar** med hvert oksygenatom
- Totalt 4 elektronpar = 8 elektroner rundt karbon ✓

**Oksygen (O):**
- Har 6 elektroner i ytterste skall
- Trenger 2 elektroner til for å få 8
- Deler **2 elektronpar** med karbon
- Totalt 8 elektroner rundt hvert oksygen ✓

**Bindinger:**
- Mellom C og O: **Dobbeltbindinger** (=)
- Totalt 2 dobbeltbindinger i CO₂

**Kjemisk formel:** CO₂ (karbondioksid – den gassen vi puster ut)`,
      },
    },

    // ========== EKSTRA EKSEMPEL: TEGNE LEWIS-STRUKTUR FOR AMMONIAKK ==========
    {
      id: 'nat10-2-3-example-extra-1',
      type: 'example',
      title: 'Eksempel: Lewis-struktur for ammoniakk (NH₃)',
      problem: `Nitrogen (N) har 5 valenselektroner.
Hydrogen (H) har 1 valenselektron.

a) Hvor mange elektroner trenger nitrogen for å oppfylle oktettregelen?
b) Tegn Lewis-strukturen for ammoniakk (NH₃).
c) Hvor mange bindingspar og frie elektronpar har nitrogen i NH₃?`,
      solution: `**a) Elektroner nitrogen trenger:**

Nitrogen har 5 valenselektroner og trenger 8 for å oppfylle oktettregelen.

8 - 5 = **3 elektroner**

---

**b) Lewis-struktur for NH₃:**

\`\`\`
       H
       |
  H — N :
       |
       H
\`\`\`

**Forklaring:**

1. Nitrogen deler 1 elektronpar med hvert av de 3 hydrogenatomene
2. Hvert H bidrar med 1 elektron, N bidrar med 1 elektron per binding
3. N har nå: 3 delte par + 1 fritt par = 8 elektroner rundt seg
4. Hvert H har: 1 delt par = 2 elektroner (fullt K-skall)

---

**c) Bindingspar og frie elektronpar:**

**Bindingspar:** 3 (N-H, N-H, N-H)
- 3 kovalente enkeltbindinger

**Frie elektronpar (ensomme par):** 1
- Nitrogen har 1 fritt elektronpar som ikke deles med noe annet atom

**Totalt rundt nitrogen:**
- 3 bindingspar + 1 fritt par = 4 elektronpar = 8 elektroner

Oktettregelen er oppfylt!

**Merk:** Det frie elektronparet gir ammoniakk en **pyramideform** (ikke flat), og gjør at ammoniakk kan fungere som en **base** (det frie paret kan ta opp et H⁺).`,
    },

    // ========== EKSTRA EKSEMPEL: FORUTSI BINDINGSTYPE FRA ELEKTRONEGATIVITET ==========
    {
      id: 'nat10-2-3-example-extra-2',
      type: 'example',
      title: 'Eksempel: Forutsi bindingstype',
      problem: `Bestem hvilken type binding som dannes mellom atomene i følgende forbindelser:

a) Kaliumklorid (KCl) – kalium er et metall, klor er et ikke-metall
b) Klorgass (Cl₂) – to kloratomer
c) Kobber (Cu) – rent kobbermetall
d) Karbondioksid (CO₂) – karbon og oksygen er begge ikke-metaller`,
      solution: `**a) Kaliumklorid (KCl):**

**Ionebinding**

Kalium (K) er et **metall** og klor (Cl) er et **ikke-metall**.
Metall + ikke-metall → ionebinding.

K avgir 1 elektron → K⁺
Cl tar opp 1 elektron → Cl⁻

---

**b) Klorgass (Cl₂):**

**Kovalent binding**

Begge atomene er **ikke-metaller** (klor + klor).
Ikke-metall + ikke-metall → kovalent binding.

De to kloratomene deler 1 elektronpar (enkeltbinding).

---

**c) Kobber (Cu):**

**Metallbinding**

Kobber er et **metall** som binder seg til andre kobberatomer.
Metall + metall → metallbinding.

Frie elektroner flyter mellom positive kobberioner.

---

**d) Karbondioksid (CO₂):**

**Kovalent binding**

Karbon (C) og oksygen (O) er begge **ikke-metaller**.
Ikke-metall + ikke-metall → kovalent binding.

Karbon deler 2 elektronpar med hvert oksygenatom (dobbeltbindinger).

---

**Oppsummering:**

| Forbindelse | Atomtyper | Bindingstype |
|---|---|---|
| KCl | Metall + ikke-metall | Ionebinding |
| Cl₂ | Ikke-metall + ikke-metall | Kovalent binding |
| Cu | Metall + metall | Metallbinding |
| CO₂ | Ikke-metall + ikke-metall | Kovalent binding |

**Huskeregel:**
- Metall + ikke-metall → ionebinding
- Ikke-metall + ikke-metall → kovalent binding
- Metall + metall → metallbinding`,
    },

    // ========== EKSTRA OPPGAVE: MULTIPLE CHOICE - IONEBINDING ==========
    {
      id: 'nat10-2-3-oppg-extra-1',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-3-oppg-extra-1',
        number: '2.3.11',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva skjer med elektronene i en ionebinding?',
        options: [
          { id: 'a', text: 'Elektronene deles likt mellom atomene', isCorrect: false },
          { id: 'b', text: 'Elektronene overføres fra et atom til et annet', isCorrect: true },
          { id: 'c', text: 'Elektronene beveger seg fritt mellom alle atomene', isCorrect: false },
          { id: 'd', text: 'Elektronene forsvinner', isCorrect: false },
        ],
        solution: `**Riktig svar: Elektronene overføres fra et atom til et annet**

I en ionebinding:
1. **Metallatomer** avgir elektroner og blir positive ioner (kationer)
2. **Ikke-metallatomer** tar opp elektroner og blir negative ioner (anioner)
3. De motsatt ladede ionene tiltrekker hverandre

**Eksempel:** Na → Na⁺ + e⁻ (natrium avgir 1 elektron)
Cl + e⁻ → Cl⁻ (klor tar opp 1 elektron)

De andre alternativene beskriver:
- a) Kovalent binding (deling av elektroner)
- c) Metallbinding (elektronsky)
- d) Bryter loven om bevaring av materie`,
      },
    },

    // ========== EKSTRA OPPGAVE: KLASSISK - LEWIS-STRUKTUR FOR HF ==========
    {
      id: 'nat10-2-3-oppg-extra-2',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-3-oppg-extra-2',
        number: '2.3.12',
        type: 'classic',
        difficulty: 'medium',
        task: `Hydrogenfluorid (HF) er en forbindelse av hydrogen (H) og fluor (F).

a) Er H og F metaller eller ikke-metaller?
b) Hvilken type binding dannes mellom H og F?
c) Hvor mange valenselektroner har fluor?
d) Tegn en forenklet Lewis-struktur for HF.
e) Hvor mange bindingspar og frie elektronpar har fluor i HF?`,
        solution: `**a) Metall eller ikke-metall:**

- Hydrogen (H): **Ikke-metall**
- Fluor (F): **Ikke-metall**

---

**b) Bindingstype:**

Ikke-metall + ikke-metall → **Kovalent binding**

H og F deler elektroner for å oppfylle oktettregelen.

---

**c) Valenselektroner for fluor:**

Fluor har atomnummer 9, elektronkonfigurasjon K=2, L=7.

**7 valenselektroner**

---

**d) Lewis-struktur:**

\`\`\`
H — F :
\`\`\`

- En strek (—) representerer ett delt elektronpar (bindingspar)
- Prikkene (:) representerer frie elektronpar på fluor

---

**e) Bindingspar og frie par:**

**Bindingspar:** 1 (H-F enkeltbinding)
**Frie elektronpar på fluor:** 3

Totalt rundt fluor: 1 bindingspar + 3 frie par = 4 par = 8 elektroner
Hydrogen har: 1 bindingspar = 2 elektroner (fullt K-skall)

Begge atomer oppfyller oktettregelen (eller duettregelen for H).`,
      },
    },

    // ========== EKSTRA OPPGAVE: KLASSISK - KALSIUMKLORID ==========
    {
      id: 'nat10-2-3-oppg-extra-3',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-3-oppg-extra-3',
        number: '2.3.13',
        type: 'classic',
        difficulty: 'medium',
        task: `Kalsiumklorid (CaCl₂) dannes når kalsium (Ca) reagerer med klor (Cl).

Kalsium er et metall i gruppe 2 med 2 valenselektroner.
Klor er et ikke-metall i gruppe 17 med 7 valenselektroner.

a) Hvilken type binding dannes?
b) Hvilket ion danner kalsium? Hvilken ladning?
c) Hvilket ion danner klor? Hvilken ladning?
d) Hvorfor er formelen CaCl₂ og ikke CaCl?`,
        solution: `**a) Bindingstype:**

**Ionebinding** (metall + ikke-metall)

---

**b) Kalsiumion:**

Kalsium har 2 valenselektroner og avgir begge for å få fullt ytterste skall.

Ca → Ca²⁺ + 2e⁻

**Ladning: +2**

---

**c) Klorion:**

Klor har 7 valenselektroner og trenger 1 til for å få fullt skall.

Cl + e⁻ → Cl⁻

**Ladning: -1**

---

**d) Hvorfor CaCl₂?**

Kalsium avgir **2 elektroner**, men hvert kloratom tar bare opp **1 elektron**.

Derfor trengs det **2 kloratomer** for å ta opp de 2 elektronene fra kalsium:

Ca → Ca²⁺ + 2e⁻
Cl + e⁻ → Cl⁻  (x2)

**Balanse:** Ladningen må gå opp:
- Ca²⁺: ladning +2
- 2 × Cl⁻: ladning 2 × (-1) = -2
- Totalt: +2 + (-2) = 0 (nøytralt)

Derfor er formelen **CaCl₂**, ikke CaCl.`,
      },
    },

    // ========== EKSTRA OPPGAVE: MULTIPLE CHOICE - ENKELT- VS DOBBELTBINDING ==========
    {
      id: 'nat10-2-3-oppg-extra-4',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-3-oppg-extra-4',
        number: '2.3.14',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Nitrogengass (N₂) har en trippelbinding mellom de to nitrogenatomene. Hvor mange elektronpar deles i en trippelbinding?',
        options: [
          { id: 'a', text: '1 elektronpar', isCorrect: false },
          { id: 'b', text: '2 elektronpar', isCorrect: false },
          { id: 'c', text: '3 elektronpar', isCorrect: true },
          { id: 'd', text: '6 elektronpar', isCorrect: false },
        ],
        solution: `**Riktig svar: 3 elektronpar**

- **Enkeltbinding:** 1 delt elektronpar (2 elektroner)
- **Dobbeltbinding:** 2 delte elektronpar (4 elektroner)
- **Trippelbinding:** 3 delte elektronpar (6 elektroner)

**For N₂:**
Nitrogen har 5 valenselektroner og trenger 3 til for å oppnå oktett (8).

De to nitrogenatomene deler 3 elektronpar (trippelbinding):

N ≡ N

Hvert nitrogen har nå 8 elektroner rundt seg:
- 3 bindingspar (6 elektroner) delt med det andre N
- 1 fritt elektronpar (2 elektroner)

Trippelbindingen gjør at N₂ er svært stabilt og vanskelig å bryte opp. Derfor er nitrogengass i luften ganske ureaktiv.`,
      },
    },

    // ========== EKSTRA OPPGAVE: KLASSISK - EGENSKAPER OG BINDINGSTYPE ==========
    {
      id: 'nat10-2-3-oppg-extra-5',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-3-oppg-extra-5',
        number: '2.3.15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Du har fire stoffer med følgende egenskaper:

**Stoff A:** Fast stoff, høyt smeltepunkt, leder strøm i vandig løsning, sprøtt
**Stoff B:** Gass ved romtemperatur, leder ikke strøm, lavt smeltepunkt
**Stoff C:** Fast stoff, leder strøm, formbart, glinsende overflate
**Stoff D:** Fast stoff, leder ikke strøm, løser seg i vann

a) Bestem bindingstypen for hvert stoff.
b) Gi et eksempel på hvert stoff.
c) Forklar hvorfor stoff C leder strøm, men stoff A bare leder strøm i vandig løsning.`,
        solution: `**a) Bindingstyper:**

**Stoff A:** Ionebinding
- Høyt smeltepunkt + leder strøm i løsning + sprøtt = typisk ioneforbindelse

**Stoff B:** Kovalent binding
- Gass + lavt smeltepunkt + leder ikke strøm = typisk kovalent forbindelse

**Stoff C:** Metallbinding
- Leder strøm + formbart + glinsende = typisk metall

**Stoff D:** Kovalent binding
- Leder ikke strøm + løser seg i vann = typisk molekylær forbindelse

---

**b) Eksempler:**

- **Stoff A:** Natriumklorid (NaCl/bordsalt)
- **Stoff B:** Karbondioksid (CO₂) eller oksygengass (O₂)
- **Stoff C:** Kobber (Cu) eller jern (Fe)
- **Stoff D:** Sukker (C₁₂H₂₂O₁₁)

---

**c) Strømledning:**

**Stoff C (metall):**
Metallbindingen gir **frie elektroner** som kan bevege seg gjennom metallet. Disse frie elektronene er alltid tilgjengelige, uansett om metallet er fast eller flytende. Derfor leder metaller strøm **i alle tilstander**.

**Stoff A (ioneforbindelse):**
I **fast form** er ionene (f.eks. Na⁺ og Cl⁻) fastlåst i et krystallgitter. De kan ikke bevege seg, så stoffet leder **ikke** strøm.

I **vandig løsning** brytes krystallgitteret opp av vannmolekylene. Ionene blir frie og kan bevege seg → de transporterer ladning → stoffet **leder strøm**.

**Nøkkelforskjell:**
- Metaller: Frie **elektroner** leder strøm (alltid)
- Ioneforbindelser: Frie **ioner** leder strøm (bare i oppløsning eller smeltet)`,
      },
    },

    // ========== EKSTRA OPPGAVE: MULTIPLE CHOICE - MOLEKYLFORMEL ==========
    {
      id: 'nat10-2-3-oppg-extra-6',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-3-oppg-extra-6',
        number: '2.3.16',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva forteller formelen H₂SO₄ oss om svovelsyre?',
        options: [
          { id: 'a', text: 'Den inneholder 2 hydrogen, 1 svovel og 4 oksygen', isCorrect: true },
          { id: 'b', text: 'Den inneholder 2 hydrogen, 1 svovel og 1 oksygen', isCorrect: false },
          { id: 'c', text: 'Den inneholder 2 hydrogen, 4 svovel og 1 oksygen', isCorrect: false },
          { id: 'd', text: 'Den inneholder 7 atomer av et ukjent stoff', isCorrect: false },
        ],
        solution: `**Riktig svar: 2 hydrogen, 1 svovel og 4 oksygen**

I formelen H₂SO₄:
- **H₂:** 2 hydrogenatomer
- **S:** 1 svovelatom (ingen tall betyr 1)
- **O₄:** 4 oksygenatomer

**Totalt:** 7 atomer i hvert molekyl av svovelsyre

**Huskeregel:** Tallet etter symbolet (indeksen) viser antall atomer av det grunnstoffet. Ingen tall betyr 1.`,
      },
    },

    // ========== OPPGAVE 10: EGENSKAPER UT FRA BINDINGSTYPE ==========
    {
      id: 'nat10-2-3-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-3-ex-10',
        number: '2.3.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Du har tre stoffer:
- **Stoff A:** Natriumklorid (NaCl) – ionebinding
- **Stoff B:** Vann (H₂O) – kovalent binding
- **Stoff C:** Kobber (Cu) – metallbinding

a) Hvilket stoff leder elektrisk strøm i fast form?
b) Hvilket stoff har lavest smeltepunkt?
c) Forklar hvorfor ioneforbindelser som NaCl leder strøm når de løses i vann, men ikke i fast form.`,
        multipleChoiceOptions: [
          'Cu leder strøm i fast form; H₂O har lavest smeltepunkt; NaCl-ioner må være frie for å lede',
          'NaCl leder strøm i fast form; Cu har lavest smeltepunkt; ionene beveger seg i krystallet',
          'Alle leder strøm i fast form; NaCl har lavest smeltepunkt; elektroner flyter i alle',
          'H₂O leder strøm i fast form; NaCl har lavest smeltepunkt; vann deler seg i ioner',
        ],
        solution: `**a) Hvilket stoff leder strøm i fast form:**

**Stoff C – Kobber (Cu)**

**Forklaring:**
Metallbindingen gir frie elektroner som kan bevege seg gjennom metallet. Derfor leder kobber (og alle metaller) strøm i fast form.

- Stoff A (NaCl): Leder IKKE strøm i fast form (ionene er fastlåst)
- Stoff B (H₂O): Leder IKKE strøm (ingen frie elektroner eller ioner)
- Stoff C (Cu): Leder strøm (frie elektroner)

**b) Hvilket stoff har lavest smeltepunkt:**

**Stoff B – Vann (H₂O)**

**Forklaring:**
Kovalente bindinger innad i molekylet er sterke, men tiltrekningskraften **mellom** molekylene er svakere. Derfor har stoffer med kovalente bindinger lavere smeltepunkt.

- Stoff A (NaCl): Høyt smeltepunkt (~800°C) – sterke ionebindinger
- Stoff B (H₂O): Lavt smeltepunkt (0°C) – svake krefter mellom molekyler
- Stoff C (Cu): Høyt smeltepunkt (~1085°C) – sterke metallbindinger

**c) Hvorfor leder NaCl strøm i oppløsning, men ikke i fast form:**

**I fast form:**
- Ionene (Na⁺ og Cl⁻) er fastlåst i et krystallgitter
- De kan ikke bevege seg
- Ingen ladningsbærere kan bevege seg → leder IKKE strøm

**I oppløsning (i vann):**
- Vannmolekyler bryter opp krystallgitteret
- Ionene (Na⁺ og Cl⁻) løsner og kan bevege seg fritt i vannet
- Positive og negative ioner kan bevege seg → leder strøm!

**Konklusjon:**
For at ioneforbindelser skal lede strøm, må ionene være **frie til å bevege seg**. Dette skjer når de er løst i vann eller smeltet.`,
      },
    },
  ],
  exercises: [], // Oppgavene er embedded i content
};

// ============================================================================
// KAPITTEL 2.4: Kjemiske reaksjoner
// ============================================================================

export const CHAPTER_NAT10_2_4: TextbookChapter = {
  id: 'naturfag-10-2-4',
  courseId: 'naturfag-10',
  chapterNumber: '2.4',
  title: 'Kjemiske reaksjoner',
  description: 'Lær om kjemiske reaksjoner, reaksjonslikninger og energi i reaksjoner.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forklare hva en kjemisk reaksjon er og hvordan den skiller seg fra fysiske endringer',
    'skrive enkle reaksjonslikninger med reaktanter og produkter',
    'gjenkjenne tegn på at en kjemisk reaksjon har funnet sted',
    'forklare hva som menes med forbrenning, oksidasjon og reduksjon',
    'beskrive forskjellen mellom eksotherme og endotherme reaksjoner',
    'forklare faktorer som påvirker reaksjonshastigheten',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'nat10-2-4-intro',
      type: 'text',
      content: `## Kjemiske reaksjoner

Vi har lært om atomer, molekyler og kjemiske bindinger. Men kjemi handler ikke bare om hvordan stoffene er bygd opp – det handler også om hvordan stoffene **endres** og danner **nye stoffer**.

Når du baker kake, når du tenner et stearinlys, når du puster – da skjer det **kjemiske reaksjoner**.

I dette kapitlet lærer du:
- Hva som kjennetegner en kjemisk reaksjon
- Hvordan vi skriver reaksjonslikninger
- Forskjellige typer reaksjoner
- Hva som påvirker hvor raskt reaksjoner skjer`,
    },

    // ========== HVA ER EN KJEMISK REAKSJON? ==========
    {
      id: 'nat10-2-4-hva-er-reaksjon',
      type: 'text',
      content: `## Hva er en kjemisk reaksjon?

En **kjemisk reaksjon** er en prosess der stoffene endres, og det dannes **nye stoffer** med andre egenskaper.

### Fysiske vs. kjemiske endringer

Det er viktig å skille mellom **fysiske endringer** og **kjemiske endringer**:

**Fysiske endringer** (ingen nye stoffer):
- Is smelter til vann
- Vann fordamper til damp
- Sukker løses opp i vann
- Papir rives i biter

I alle disse eksemplene er stoffet fortsatt det samme – bare formen eller tilstanden endres.

**Kjemiske endringer** (nye stoffer dannes):
- Ved forbrenner
- Jern ruster
- Mat fordøyes
- Elektrolyse av vann

I disse eksemplene dannes det **nye stoffer** med helt andre egenskaper enn de opprinnelige stoffene.`,
    },

    // ========== DEFINISJON: KJEMISK REAKSJON ==========
    {
      id: 'nat10-2-4-def-reaksjon',
      type: 'definition',
      title: 'Kjemisk reaksjon',
      content: `**Kjemisk reaksjon:** En prosess der kjemiske bindinger brytes og nye bindinger dannes, slik at det oppstår nye stoffer med andre egenskaper.

**Nøkkelord:**
- Kjemiske bindinger brytes og dannes
- Nye stoffer med nye egenskaper
- Kan ikke reverseres ved enkle fysiske metoder`,
    },

    // ========== REAKTANTER OG PRODUKTER ==========
    {
      id: 'nat10-2-4-reaktanter-produkter',
      type: 'text',
      content: `## Reaktanter og produkter

I en kjemisk reaksjon har vi:

**Reaktanter:** Stoffene vi starter med (før reaksjonen)

**Produkter:** Stoffene som dannes (etter reaksjonen)

Vi kan skrive dette som en **reaksjonslikning**:

**Reaktanter → Produkter**

Pilen (→) betyr "reagerer til" eller "gir".

### Eksempel: Forbrenning av hydrogen

Når hydrogen reagerer med oksygen, dannes vann:

**Hydrogen + Oksygen → Vann**

Eller med kjemiske formler:

**2H₂ + O₂ → 2H₂O**

- **Reaktanter:** Hydrogen (H₂) og oksygen (O₂)
- **Produkter:** Vann (H₂O)`,
    },

    // ========== DEFINISJON: REAKTANTER OG PRODUKTER ==========
    {
      id: 'nat10-2-4-def-reaktanter-produkter',
      type: 'definition',
      title: 'Reaktanter og produkter',
      content: `**Reaktanter:** Stoffene som reagerer (står til venstre i reaksjonslikningen, før pilen →)

**Produkter:** Stoffene som dannes (står til høyre i reaksjonslikningen, etter pilen →)

**Reaksjonslikning:** En måte å beskrive en kjemisk reaksjon på ved å bruke kjemiske formler.`,
    },

    // ========== TEGN PÅ KJEMISK REAKSJON ==========
    {
      id: 'nat10-2-4-tegn-reaksjon',
      type: 'text',
      content: `## Tegn på at en kjemisk reaksjon skjer

Hvordan vet vi at det har skjedd en kjemisk reaksjon? Det er fire vanlige tegn:

### 1. Fargeendring

Når stoffet endrer farge, har det gjerne skjedd en kjemisk reaksjon.

**Eksempel:** Jern som ruster endres fra grått til rødbrunt.

### 2. Gassutvikling

Når det bobler eller dannes gass, skjer det ofte en kjemisk reaksjon.

**Eksempel:** Når du blander natron og eddik, bobler det (CO₂-gass dannes).

### 3. Temperaturendring

En kjemisk reaksjon kan frigjøre eller ta opp varme.

**Eksempel:** Når ved brenner, frigjøres det varme. Når is smelter på hånden din, tas det opp varme.

### 4. Bunnfall (presipitat)

Når to oppløsninger blandes, kan det dannes et fast stoff som legger seg i bunnen.

**Eksempel:** Når du blander sølvnitrat og natriumklorid, dannes det et hvitt bunnfall av sølvklorid.`,
    },

    // ========== EKSEMPEL: TEGN PÅ REAKSJON ==========
    {
      id: 'nat10-2-4-ex-tegn',
      type: 'example',
      title: 'Eksempel: Natron + Eddik',
      problem: `Når du blander natron (natriumhydrogenkarbonat, NaHCO₃) og eddik (eddiksyre, CH₃COOH), skjer det en reaksjon.

Hvilke tegn på kjemisk reaksjon kan du observere?`,
      solution: `**Observasjoner:**

1. **Gassutvikling:** Det bobler kraftig! Gassen som dannes er karbondioksid (CO₂).

2. **Temperaturendring:** Blandingen blir litt kaldere (reaksjonen tar opp varme fra omgivelsene).

**Reaksjonslikning:**

NaHCO₃ + CH₃COOH → CH₃COONa + H₂O + CO₂↑

- **Reaktanter:** Natron og eddik
- **Produkter:** Natriumacetat, vann og karbondioksid (gass)

Pilen ↑ viser at CO₂ er en gass som går ut av løsningen.

**Konklusjon:**

Dette er definitivt en kjemisk reaksjon – det dannes nye stoffer (CO₂, vann, natriumacetat), og vi kan observere gassutvikling og temperaturendring.`,
    },

    // ========== OPPGAVE 1: FYSISK ELLER KJEMISK ==========
    {
      id: 'nat10-2-4-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-4-ex-1',
        number: '2.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `Hvilken av disse prosessene er en **kjemisk reaksjon**?`,
        options: [
          'Vann som fryser til is',
          'Papir som klippes i biter',
          'Vedkubber som brenner',
          'Salt som løses opp i vann',
        ],
        answer: 'Vedkubber som brenner',
        solution: `**Riktig svar: Vedkubber som brenner**

**Forklaring:**

**Kjemisk reaksjon:**
- **Vedkubber som brenner:** Nye stoffer dannes (CO₂, H₂O, aske). Dette er en kjemisk reaksjon.

**Fysiske endringer:**
- **Vann som fryser til is:** Vann er fortsatt H₂O, bare i fast form.
- **Papir som klippes i biter:** Papiret er fortsatt papir, bare i mindre biter.
- **Salt som løses opp i vann:** Saltet er fortsatt NaCl, bare spredt i vannet.

**Tegn på kjemisk reaksjon ved forbrenning:**
- Fargeendring (ved blir til aske)
- Gassutvikling (røyk)
- Temperaturendring (varme og lys)
- Nye stoffer dannes`,
      },
    },

    // ========== REAKSJONSLIKNINGER ==========
    {
      id: 'nat10-2-4-reaksjonslikninger',
      type: 'text',
      content: `## Reaksjonslikninger

En **reaksjonslikning** beskriver en kjemisk reaksjon ved å bruke kjemiske formler.

### Hvordan skrive en reaksjonslikning

**Steg 1:** Identifiser reaktanter og produkter

**Steg 2:** Skriv kjemiske formler

**Steg 3:** Sett tallkoeffisienter for å balansere likningen

### Eksempel: Forbrenning av metan (naturgass)

Metan (CH₄) reagerer med oksygen (O₂) og danner karbondioksid (CO₂) og vann (H₂O).

**Ubalansert:** CH₄ + O₂ → CO₂ + H₂O

**Balansert:** CH₄ + 2O₂ → CO₂ + 2H₂O

**Forklaring:**
- Venstre side: 1 C, 4 H, 4 O
- Høyre side: 1 C, 4 H, 4 O
- Likningen er balansert! ✓`,
    },

    // ========== DEFINISJON: REAKSJONSLIKNING ==========
    {
      id: 'nat10-2-4-def-reaksjonslikning',
      type: 'definition',
      title: 'Reaksjonslikning',
      content: `**Reaksjonslikning:** En beskrivelse av en kjemisk reaksjon ved hjelp av kjemiske formler.

**Tallkoeffisient:** Tallet foran en kjemisk formel som viser hvor mange enheter av stoffet som er med i reaksjonen.

**Balansering:** Å sette riktige tallkoeffisienter slik at antall atomer av hvert grunnstoff er likt på begge sider av pilen.

**Eksempel:** 2H₂ + O₂ → 2H₂O

Tallkoeffisienten 2 foran H₂ betyr at 2 hydrogenmolekyler reagerer.`,
    },

    // ========== OPPGAVE 2: IDENTIFISERE REAKTANTER OG PRODUKTER ==========
    {
      id: 'nat10-2-4-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-4-ex-2',
        number: '2.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: `Se på denne reaksjonslikningen:

**2Mg + O₂ → 2MgO**

Dette er forbrenning av magnesium i oksygen.

a) Hva er reaktantene i denne reaksjonen?
b) Hva er produktet?
c) Hvor mange magnesiumatomer reagerer?`,
        multipleChoiceOptions: [
          'Reaktanter: Mg og O₂; Produkt: MgO; 2 magnesiumatomer reagerer',
          'Reaktanter: MgO; Produkt: Mg og O₂; 1 magnesiumatom reagerer',
          'Reaktanter: Mg og O; Produkt: MgO₂; 2 magnesiumatomer reagerer',
          'Reaktanter: Mg; Produkt: O₂ og MgO; 4 magnesiumatomer reagerer',
        ],
        solution: `**a) Reaktanter:**

**Magnesium (Mg) og oksygen (O₂)**

Reaktantene er stoffene til venstre for pilen (→).

**b) Produkt:**

**Magnesiumoksid (MgO)**

Produktet er stoffet til høyre for pilen (→).

**c) Antall magnesiumatomer:**

**2 magnesiumatomer**

Tallkoeffisienten 2 foran Mg betyr at 2 Mg-atomer reagerer.

**Fullstendig forklaring:**

2Mg + O₂ → 2MgO

- **Reaktanter:** 2 magnesiumatomer + 1 oksygenmolekyl (O₂)
- **Produkter:** 2 enheter av magnesiumoksid (MgO)

**Balansering:**
- Venstre side: 2 Mg, 2 O
- Høyre side: 2 Mg, 2 O
- Balansert! ✓`,
      },
    },

    // ========== OPPGAVE 3: KJEMISKE FORMLER ==========
    {
      id: 'nat10-2-4-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-4-ex-3',
        number: '2.4.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `Når kull (karbon, C) brenner i oksygen (O₂), dannes karbondioksid (CO₂).

Hvilken reaksjonslikning beskriver denne reaksjonen?`,
        options: [
          'C + O₂ → CO',
          'C + O₂ → CO₂',
          '2C + O₂ → 2CO',
          'C + O → CO₂',
        ],
        answer: 'C + O₂ → CO₂',
        solution: `**Riktig svar: C + O₂ → CO₂**

**Forklaring:**

Når karbon brenner fullstendig i oksygen, dannes karbondioksid (CO₂).

**Reaksjonslikning:**

C + O₂ → CO₂

**Balansering:**
- Venstre side: 1 C, 2 O
- Høyre side: 1 C, 2 O
- Balansert! ✓

**Hvorfor ikke de andre svarene?**

- **C + O₂ → CO:** Dette gir karbonmonoksid (CO), ikke karbondioksid (CO₂). Dette skjer ved ufullstendig forbrenning.
- **2C + O₂ → 2CO:** Dette er riktig balansert for karbonmonoksid, men oppgaven sier at det dannes karbondioksid.
- **C + O → CO₂:** Oksygen eksisterer ikke som enkeltatomet O i naturen, bare som O₂.`,
      },
    },

    // ========== FORBRENNING ==========
    {
      id: 'nat10-2-4-forbrenning',
      type: 'text',
      content: `## Forbrenning – reaksjon med oksygen

**Forbrenning** er en kjemisk reaksjon der et stoff reagerer med **oksygen (O₂)** og avgir **varme og lys**.

### Kjennetegn på forbrenning:

- Stoffet reagerer med oksygen
- Det avgis varme (eksotherm reaksjon)
- Ofte avgis lys (flammer)
- Det dannes ofte CO₂ og H₂O

### Eksempler på forbrenning:

**1. Forbrenning av ved:**

Ved består hovedsakelig av cellulose, som inneholder karbon (C) og hydrogen (H).

Forenklet: C + O₂ → CO₂ + H₂O + varme

**2. Forbrenning av bensin:**

Bensin består av hydrokarboner (CₓHᵧ).

Eksempel: 2C₈H₁₈ + 25O₂ → 16CO₂ + 18H₂O + varme

**3. Forbrenning av naturgass:**

CH₄ + 2O₂ → CO₂ + 2H₂O + varme`,
    },

    // ========== DEFINISJON: FORBRENNING ==========
    {
      id: 'nat10-2-4-def-forbrenning',
      type: 'definition',
      title: 'Forbrenning',
      content: `**Forbrenning:** En kjemisk reaksjon der et stoff reagerer med oksygen og avgir varme og lys.

**Fullstendig forbrenning:** Når det er nok oksygen tilgjengelig. Produkter: CO₂ og H₂O.

**Ufullstendig forbrenning:** Når det er for lite oksygen. Produkter: CO (karbonmonoksid) og sot (karbon).

**Viktig:** Ufullstendig forbrenning kan være farlig fordi CO (karbonmonoksid) er giftig!`,
    },

    // ========== OPPGAVE 4: FORBRENNING ==========
    {
      id: 'nat10-2-4-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-4-ex-4',
        number: '2.4.4',
        type: 'classic',
        difficulty: 'medium',
        task: `Propan (C₃H₈) er gassen som brukes i campinggassbeholdere.

Når propan brenner fullstendig i oksygen, dannes karbondioksid (CO₂) og vann (H₂O).

a) Skriv en reaksjonslikning (ubalansert) for forbrenningen av propan.
b) Hvilke stoffer er reaktantene?
c) Hvilke stoffer er produktene?`,
        multipleChoiceOptions: [
          'C₃H₈ + O₂ → CO₂ + H₂O; Reaktanter: propan og oksygen; Produkter: CO₂ og H₂O',
          'C₃H₈ → CO₂ + H₂O + O₂; Reaktanter: propan; Produkter: CO₂, H₂O og oksygen',
          'CO₂ + H₂O → C₃H₈ + O₂; Reaktanter: CO₂ og H₂O; Produkter: propan og oksygen',
          'C₃H₈ + CO₂ → H₂O + O₂; Reaktanter: propan og CO₂; Produkter: H₂O og oksygen',
        ],
        solution: `**a) Reaksjonslikning (ubalansert):**

**C₃H₈ + O₂ → CO₂ + H₂O**

(Den balanserte versjonen er: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O, men det er ikke nødvendig å balansere på dette nivået.)

**b) Reaktanter:**

**Propan (C₃H₈) og oksygen (O₂)**

Reaktantene er stoffene til venstre for pilen (→).

**c) Produkter:**

**Karbondioksid (CO₂) og vann (H₂O)**

Produktene er stoffene til høyre for pilen (→).

**Fullstendig forklaring:**

Dette er en **forbrenningsreaksjon** fordi:
- Stoffet (propan) reagerer med oksygen
- Det dannes CO₂ og H₂O
- Det frigjøres varme og lys

Denne reaksjonen skjer når du koker mat på campingkjøkkenet!`,
      },
    },

    // ========== OKSIDASJON OG REDUKSJON ==========
    {
      id: 'nat10-2-4-oksidasjon-reduksjon',
      type: 'text',
      content: `## Oksidasjon og reduksjon

**Oksidasjon** og **reduksjon** er to typer kjemiske reaksjoner som ofte skjer samtidig.

### Oksidasjon

**Oksidasjon** skjer når et stoff tar opp oksygen eller avgir elektroner.

**Eksempler:**
- Jern ruster (Fe + O₂ → Fe₂O₃)
- Epler som brunes i lufta
- Forbrenning av ved

### Reduksjon

**Reduksjon** skjer når et stoff avgir oksygen eller tar opp elektroner.

**Eksempel:**
- Utvinning av jern fra jernmalm

**Hva betyr navnene?**
- **Oksidasjon:** Opprinnelig "reaksjon med oksygen", men definisjonen er utvidet til å inkludere elektronoverføring.
- **Reduksjon:** Stoffet "reduseres" (blir mindre oksidert).`,
    },

    // ========== DEFINISJON: OKSIDASJON ==========
    {
      id: 'nat10-2-4-def-oksidasjon',
      type: 'definition',
      title: 'Oksidasjon og reduksjon',
      content: `**Oksidasjon:** En kjemisk reaksjon der et stoff tar opp oksygen eller avgir elektroner.

**Reduksjon:** En kjemisk reaksjon der et stoff avgir oksygen eller tar opp elektroner.

**Enkel huskeregel:**
- **Oksidasjon** = tar **opp** oksygen
- **Reduksjon** = avgir oksygen (stoffet "reduseres")`,
    },

    // ========== OPPGAVE 5: OKSIDASJON ==========
    {
      id: 'nat10-2-4-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-4-ex-5',
        number: '2.4.5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `Når jern (Fe) ruster, reagerer det med oksygen (O₂) i lufta og danner jernoksid (Fe₂O₃).

Hva kalles denne typen reaksjon?`,
        options: [
          'Forbrenning',
          'Reduksjon',
          'Oksidasjon',
          'Fordampning',
        ],
        answer: 'Oksidasjon',
        solution: `**Riktig svar: Oksidasjon**

**Forklaring:**

Når jern ruster, tar det opp oksygen fra lufta:

4Fe + 3O₂ → 2Fe₂O₃

Jern (Fe) tar opp oksygen (O₂) og danner jernoksid (Fe₂O₃).

Dette er **oksidasjon** fordi jern tar opp oksygen.

**Hvorfor ikke de andre svarene?**

- **Forbrenning:** Rusting er en form for oksidasjon, men det avgis ikke varme og lys (det skjer langsomt over tid).
- **Reduksjon:** Det motsatte av oksidasjon (stoffet avgir oksygen).
- **Fordampning:** En fysisk endring, ikke en kjemisk reaksjon.

**Interessant:**
Rusting er faktisk en langsom oksidasjon som skjer over tid, mens forbrenning er en rask oksidasjon som avgir varme og lys!`,
      },
    },

    // ========== OPPGAVE 6: IDENTIFISERE REAKSJONSTYPER ==========
    {
      id: 'nat10-2-4-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-4-ex-6',
        number: '2.4.6',
        type: 'classic',
        difficulty: 'medium',
        task: `Identifiser hvilken type reaksjon som skjer i hvert tilfelle:

a) En spiker av jern blir liggende ute i regnet og utvikler et rødbrunt belegg.
b) Du tenner et stearinlys, og det brenner med en gul flamme.
c) Du blander natron og eddik, og det bobler kraftig.`,
        multipleChoiceOptions: [
          'a) Oksidasjon, b) Forbrenning, c) Syre-base-reaksjon',
          'a) Forbrenning, b) Oksidasjon, c) Forbrenning',
          'a) Syre-base-reaksjon, b) Oksidasjon, c) Forbrenning',
          'a) Reduksjon, b) Syre-base-reaksjon, c) Oksidasjon',
        ],
        solution: `**a) Spiker som ruster:**

**Reaksjonstype: Oksidasjon**

Jernet (Fe) reagerer med oksygen (O₂) og vann (H₂O) i lufta og danner jernoksid (rust, Fe₂O₃).

**Tegn på reaksjon:** Fargeendring (fra grått til rødbrunt)

**b) Stearinlys som brenner:**

**Reaksjonstype: Forbrenning**

Stearin (parafin, CₙH₂ₙ₊₂) reagerer med oksygen (O₂) og danner karbondioksid (CO₂) og vann (H₂O). Det avgis varme og lys.

**Tegn på reaksjon:** Varme, lys, gassutvikling (CO₂ og H₂O-damp)

**c) Natron + eddik:**

**Reaksjonstype: Syre-base-reaksjon (med gassutvikling)**

Natron (NaHCO₃) reagerer med eddik (CH₃COOH) og danner karbondioksid (CO₂), vann (H₂O) og natriumacetat.

**Tegn på reaksjon:** Gassutvikling (bobling), temperaturendring

**Sammendrag:**

- **a)** Oksidasjon (langsom)
- **b)** Forbrenning (rask oksidasjon)
- **c)** Syre-base-reaksjon`,
      },
    },

    // ========== EKSOTHERME OG ENDOTHERME REAKSJONER ==========
    {
      id: 'nat10-2-4-eksotherm-endotherm',
      type: 'text',
      content: `## Eksotherme og endotherme reaksjoner

Alle kjemiske reaksjoner involverer **energi**. Noen reaksjoner frigjør energi, andre tar opp energi.

### Eksotherme reaksjoner

**Eksotherme reaksjoner** frigjør energi (varme) til omgivelsene.

**Kjennetegn:**
- Temperaturen øker
- Varme avgis til omgivelsene

**Eksempler:**
- Forbrenning (ved, bensin, naturgass)
- Rusting av jern
- Respirasjonen i kroppen vår

**Eksempel:** Når ved brenner, frigjøres det mye varme. Derfor blir det varmt rundt bålet.

### Endotherme reaksjoner

**Endotherme reaksjoner** tar opp energi (varme) fra omgivelsene.

**Kjennetegn:**
- Temperaturen synker
- Varme tas opp fra omgivelsene

**Eksempler:**
- Fotosyntese (planter tar opp sollys)
- Fordampning av vann
- Noen kjemiske kuldeposer

**Eksempel:** Når du blander visse kjemikalier i en kuldepose, tar reaksjonen opp varme fra omgivelsene, og posen blir kald.`,
    },

    // ========== DEFINISJON: EKSOTHERM OG ENDOTHERM ==========
    {
      id: 'nat10-2-4-def-eksotherm-endotherm',
      type: 'definition',
      title: 'Eksotherme og endotherme reaksjoner',
      content: `**Eksotherm reaksjon:** En kjemisk reaksjon som frigjør energi (varme) til omgivelsene.
- Temperaturen **øker**
- Eksempel: Forbrenning

**Endotherm reaksjon:** En kjemisk reaksjon som tar opp energi (varme) fra omgivelsene.
- Temperaturen **synker**
- Eksempel: Fotosyntese

**Huskeregel:**
- **Ekso-** = ut (energi går **ut**)
- **Endo-** = inn (energi går **inn**)`,
    },

    // ========== OPPGAVE 7: REAKSJONSHASTIGHET INTRO ==========
    {
      id: 'nat10-2-4-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-4-ex-7',
        number: '2.4.7',
        type: 'classic',
        difficulty: 'medium',
        task: `Du utfører tre forsøk med en eksotherm reaksjon:

**Forsøk A:** Du blander stoffene ved romtemperatur (20°C). Reaksjonen tar 5 minutter.

**Forsøk B:** Du varmer opp stoffene til 40°C før du blander dem. Reaksjonen tar 2 minutter.

**Forsøk C:** Du kjøler ned stoffene til 5°C før du blander dem. Reaksjonen tar 15 minutter.

a) Hva kan du konkludere om sammenhengen mellom temperatur og reaksjonshastighet?
b) Forklar hvorfor temperaturen påvirker reaksjonshastigheten.`,
        multipleChoiceOptions: [
          'Høyere temperatur gir raskere reaksjon; molekylene beveger seg raskere og kolliderer oftere',
          'Høyere temperatur gir tregere reaksjon; molekylene beveger seg så raskt at de ikke treffer hverandre',
          'Temperaturen påvirker ikke reaksjonshastigheten; alle reaksjoner tar like lang tid',
          'Lavere temperatur gir raskere reaksjon; molekylene er mer konsentrerte',
        ],
        solution: `**a) Konklusjon:**

**Jo høyere temperatur, desto raskere går reaksjonen.**

**Sammenheng:**
- 40°C → 2 minutter (raskest)
- 20°C → 5 minutter (middels)
- 5°C → 15 minutter (tregest)

**b) Forklaring:**

Når temperaturen øker, beveger **molekylene seg raskere**.

**Høy temperatur:**
- Molekylene beveger seg raskt
- De kolliderer oftere
- Flere kollisjoner → raskere reaksjon ✓

**Lav temperatur:**
- Molekylene beveger seg sakte
- De kolliderer sjeldnere
- Færre kollisjoner → tregere reaksjon

**Praktiske eksempler:**
- Mat i kjøleskapet holder seg lenger fordi reaksjonene (nedbryting) går **saktere** ved lav temperatur.
- Mat på komfyren blir ferdig raskere fordi reaksjonene (koking) går **raskere** ved høy temperatur.

**Konklusjon:**
Temperatur er en av de viktigste faktorene som påvirker reaksjonshastigheten!`,
      },
    },

    // ========== REAKSJONSHASTIGHET ==========
    {
      id: 'nat10-2-4-reaksjonshastighet',
      type: 'text',
      content: `## Reaksjonshastighet

**Reaksjonshastighet** forteller oss hvor raskt en kjemisk reaksjon skjer.

Noen reaksjoner går raskt (forbrenning av hydrogen), andre går sakte (rusting av jern).

### Faktorer som påvirker reaksjonshastigheten:

#### 1. Temperatur

**Jo høyere temperatur, desto raskere reaksjon.**

Når temperaturen øker, beveger molekylene seg raskere og kolliderer oftere.

**Eksempel:** Mat som ligger i romtemperatur råtner raskere enn mat i kjøleskapet.

#### 2. Konsentrasjon

**Jo høyere konsentrasjon, desto raskere reaksjon.**

Når det er flere molekyler per volum, kolliderer de oftere.

**Eksempel:** Sterk syre reagerer raskere enn fortynnet syre.

#### 3. Overflateareal

**Jo større overflateareal, desto raskere reaksjon.**

Når stoffet er delt opp i mindre biter, er det flere steder hvor reaksjonen kan skje.

**Eksempel:** Treflis brenner raskere enn en hel trestokk. Pulverisert sukker løses opp raskere enn sukkerbiter.

#### 4. Katalysator

En **katalysator** er et stoff som øker reaksjonshastigheten uten å bli brukt opp selv.

**Eksempel:** Enzymer i kroppen vår er katalysatorer som gjør at matfordøyelsen går raskt nok.`,
    },

    // ========== DEFINISJON: REAKSJONSHASTIGHET ==========
    {
      id: 'nat10-2-4-def-reaksjonshastighet',
      type: 'definition',
      title: 'Reaksjonshastighet',
      content: `**Reaksjonshastighet:** Et mål på hvor raskt en kjemisk reaksjon skjer.

**Faktorer som øker reaksjonshastigheten:**
1. **Høyere temperatur** → molekylene beveger seg raskere
2. **Høyere konsentrasjon** → flere molekyler per volum
3. **Større overflateareal** → flere steder hvor reaksjonen kan skje
4. **Katalysator** → senker energibarrieren for reaksjonen

**Katalysator:** Et stoff som øker reaksjonshastigheten uten å bli brukt opp selv.`,
    },

    // ========== OPPGAVE 8: REAKSJONSHASTIGHET ==========
    {
      id: 'nat10-2-4-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-4-ex-8',
        number: '2.4.8',
        type: 'classic',
        difficulty: 'medium',
        task: `Du skal løse opp to like store sukkerbiter i vann.

**Forsøk A:** Du legger sukkerbiten hel i kaldt vann.
**Forsøk B:** Du knuser sukkerbiten til pulver og legger den i varmt vann.

a) I hvilket forsøk vil sukkeret løse seg opp raskest?
b) Nevn to faktorer som gjør at sukkeret løser seg opp raskere i forsøk B.`,
        multipleChoiceOptions: [
          'Forsøk B raskest; større overflateareal (knust) og høyere temperatur (varmt)',
          'Forsøk A raskest; hel sukkerbit holder på varmen bedre',
          'Like raskt; sukker løser seg alltid like fort',
          'Forsøk B raskest; kaldt vann løser opp sukker bedre',
        ],
        solution: `**a) Raskest oppløsning:**

**Forsøk B** (knust sukker i varmt vann)

**b) To faktorer som øker reaksjonshastigheten:**

**1. Større overflateareal:**

Når sukkerbiten knuses til pulver, øker overflatearealet enormt.

- Hel sukkerbit: Bare overflaten er i kontakt med vannet
- Pulverisert sukker: Mange små partikler, mye større totalt overflateareal

**Resultat:** Vannet kan angripe sukkeret fra mange flere steder samtidig → raskere oppløsning

**2. Høyere temperatur:**

Varmt vann gir raskere oppløsning enn kaldt vann.

- Varmt vann: Vannmolekylene beveger seg raskt og kolliderer oftere med sukkerpartiklene
- Kaldt vann: Vannmolekylene beveger seg sakte og kolliderer sjeldnere

**Resultat:** Flere kollisjoner → raskere oppløsning

**Sammendrag:**

Forsøk B er raskere fordi:
1. **Overflateareal** (knust til pulver)
2. **Temperatur** (varmt vann)

Begge faktorer øker reaksjonshastigheten!`,
      },
    },

    // ========== OPPGAVE 9: ENERGI I REAKSJONER ==========
    {
      id: 'nat10-2-4-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-4-ex-9',
        number: '2.4.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Du har to reaksjoner:

**Reaksjon A:** Når du brenner ved, frigjøres det mye varme og lys.

**Reaksjon B:** Når planter gjennomfører fotosyntese, tas det opp energi fra sollyset.

a) Hvilken reaksjon er eksotherm, og hvilken er endotherm?
b) Skriv reaksjonslikninger for begge reaksjonene (forenklet).
c) Forklar hva som skjer med energien i hver reaksjon.`,
        multipleChoiceOptions: [
          'a) A: eksotherm, B: endotherm; b) Forbrenning frigjør energi, fotosyntese tar opp energi; c) Kjemisk energi → varme (A), lysenergi → kjemisk energi (B)',
          'a) A: endotherm, B: eksotherm; b) Forbrenning tar opp energi; c) Varme → kjemisk energi i begge',
          'a) Begge eksotherme; b) Begge frigjør energi; c) Ingen energiendring',
          'a) A: eksotherm, B: endotherm; b) Begge like ligninger; c) Energi forsvinner',
        ],
        solution: `**a) Eksotherm og endotherm:**

**Reaksjon A (forbrenning av ved): Eksotherm**
- Frigjør varme og lys til omgivelsene

**Reaksjon B (fotosyntese): Endotherm**
- Tar opp energi (sollys) fra omgivelsene

**b) Reaksjonslikninger:**

**Reaksjon A (forbrenning):**

C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + **energi**

(Ved består av cellulose, som kan forenkles til glukose, C₆H₁₂O₆)

**Reaksjon B (fotosyntese):**

6CO₂ + 6H₂O + **energi** → C₆H₁₂O₆ + 6O₂

**c) Hva skjer med energien:**

**Reaksjon A (eksotherm):**

Når bindingene i cellulose og oksygen brytes, og nye bindinger dannes i CO₂ og H₂O, frigjøres det mer energi enn det som kreves for å bryte de opprinnelige bindingene.

**Resultat:** Overskuddsenergien frigjøres som **varme og lys** → derfor blir det varmt rundt bålet!

**Reaksjon B (endotherm):**

For å bryte bindingene i CO₂ og H₂O, og danne nye bindinger i glukose (C₆H₁₂O₆) og oksygen (O₂), kreves det energi.

**Resultat:** Planten tar opp **energi fra sollyset** og lagrer den i glukose. Denne energien frigjøres senere når vi spiser planten eller når planten brytes ned.

**Interessant sammenheng:**

Legg merke til at fotosyntese og forbrenning er **motsatte reaksjoner**!

- Fotosyntese: CO₂ + H₂O + energi → C₆H₁₂O₆ + O₂
- Forbrenning: C₆H₁₂O₆ + O₂ → CO₂ + H₂O + energi

Planter lagrer solenergi i glukose, og vi frigjør denne energien når vi forbrenner ved eller fordøyer mat!`,
      },
    },

    // ========== EKSTRA EKSEMPEL: IDENTIFISERE REAKSJONSTYPER ==========
    {
      id: 'nat10-2-4-example-extra-1',
      type: 'example',
      title: 'Eksempel: Identifisere ulike reaksjonstyper',
      problem: `Klassifiser følgende reaksjoner som forbrenning, oksidasjon, syre-base-reaksjon, eller annet:

a) 2Fe + 3Cl₂ → 2FeCl₃
b) CH₄ + 2O₂ → CO₂ + 2H₂O (med flamme)
c) HCl + NaOH → NaCl + H₂O
d) 4Fe + 3O₂ → 2Fe₂O₃ (langsom prosess uten flamme)`,
      solution: `**a) 2Fe + 3Cl₂ → 2FeCl₃**

**Type:** Syntesereaksjon (to stoffer danner ett nytt stoff)

Jern reagerer med klor og danner jernklorid. Dette er også en **redoksreaksjon** (elektronoverføring), men det er ikke forbrenning fordi det ikke involverer oksygen og flamme.

---

**b) CH₄ + 2O₂ → CO₂ + 2H₂O**

**Type:** Forbrenning

**Kjennetegn:**
- Reagerer med **oksygen (O₂)**
- Avgir **varme og lys** (flamme)
- Produktene er **CO₂ og H₂O** (typisk for fullstendig forbrenning av hydrokarboner)

Metan (naturgass) brenner – dette er det som skjer på gasskomfyren!

---

**c) HCl + NaOH → NaCl + H₂O**

**Type:** Syre-base-reaksjon (nøytralisering)

**Kjennetegn:**
- **Syre** (HCl) + **base** (NaOH) → **salt** (NaCl) + **vann** (H₂O)
- H⁺ fra syren + OH⁻ fra basen → H₂O

---

**d) 4Fe + 3O₂ → 2Fe₂O₃**

**Type:** Oksidasjon (rusting)

**Kjennetegn:**
- Jern tar opp **oksygen**
- Skjer **langsomt** over tid (ikke forbrenning)
- Ingen flamme, men det er fortsatt en reaksjon med oksygen
- Produktet er **jernoksid** (rust)

**Forskjell fra forbrenning:** Rusting er en **langsom** oksidasjon, mens forbrenning er en **rask** oksidasjon med flamme.`,
    },

    // ========== EKSTRA EKSEMPEL: SKRIVE ORDLIKNINGER ==========
    {
      id: 'nat10-2-4-example-extra-2',
      type: 'example',
      title: 'Eksempel: Skrive ordlikninger og kjemiske likninger',
      problem: `Skriv både ordlikning og kjemisk likning for følgende reaksjoner:

a) Natrium reagerer med vann og danner natriumhydroksid og hydrogengass.
b) Sink reagerer med saltsyre og danner sinkklorid og hydrogengass.`,
      solution: `**a) Natrium + vann:**

**Ordlikning:**
Natrium + Vann → Natriumhydroksid + Hydrogen

**Kjemisk likning (ubalansert):**
Na + H₂O → NaOH + H₂

**Kjemisk likning (balansert):**
2Na + 2H₂O → 2NaOH + H₂

**Sjekk:**
- Venstre: 2 Na, 4 H, 2 O
- Høyre: 2 Na, 4 H, 2 O ✓

**Tegn på reaksjon:** Bobling (H₂-gass), varme, natrium smelter og spinner på vannoverflaten.

---

**b) Sink + saltsyre:**

**Ordlikning:**
Sink + Saltsyre → Sinkklorid + Hydrogen

**Kjemisk likning (ubalansert):**
Zn + HCl → ZnCl₂ + H₂

**Kjemisk likning (balansert):**
Zn + 2HCl → ZnCl₂ + H₂

**Sjekk:**
- Venstre: 1 Zn, 2 H, 2 Cl
- Høyre: 1 Zn, 2 H, 2 Cl ✓

**Tegn på reaksjon:** Bobling (H₂-gass dannes), sinken løses opp gradvis.`,
    },

    // ========== EKSTRA OPPGAVE: MULTIPLE CHOICE - TEGN PÅ REAKSJON ==========
    {
      id: 'nat10-2-4-oppg-extra-1',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-4-oppg-extra-1',
        number: '2.4.11',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av disse er IKKE et tegn på at en kjemisk reaksjon har skjedd?',
        options: [
          { id: 'a', text: 'Fargeendring', isCorrect: false },
          { id: 'b', text: 'Gassutvikling (bobling)', isCorrect: false },
          { id: 'c', text: 'Endring i form (klipping, knusing)', isCorrect: true },
          { id: 'd', text: 'Temperaturendring', isCorrect: false },
        ],
        solution: `**Riktig svar: Endring i form (klipping, knusing)**

Klipping og knusing er **fysiske endringer**, ikke kjemiske reaksjoner. Stoffet forblir det samme – bare formen endres.

**Tegn på kjemisk reaksjon:**
1. Fargeendring (nye stoffer med annen farge)
2. Gassutvikling (nye gasser dannes)
3. Temperaturendring (energi frigjøres eller tas opp)
4. Bunnfall (nye faste stoffer dannes i løsning)

**Eksempel:** Når du klipper papir i biter, er det fysisk. Når du brenner papir, er det kjemisk (nye stoffer som CO₂ og H₂O dannes).`,
      },
    },

    // ========== EKSTRA OPPGAVE: KLASSISK - ORDLIKNINGER ==========
    {
      id: 'nat10-2-4-oppg-extra-2',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-4-oppg-extra-2',
        number: '2.4.12',
        type: 'classic',
        difficulty: 'medium',
        task: `Skriv ordlikninger for følgende reaksjoner:

a) Magnesium brenner i oksygen og danner magnesiumoksid.
b) Kalsiumkarbonat (kalkstein) reagerer med saltsyre og danner kalsiumklorid, vann og karbondioksid.
c) Planter gjennomfører fotosyntese: karbondioksid og vann omdannes til glukose og oksygen ved hjelp av sollys.`,
        solution: `**a) Forbrenning av magnesium:**

**Ordlikning:**
Magnesium + Oksygen → Magnesiumoksid

**Kjemisk formel:** 2Mg + O₂ → 2MgO

---

**b) Kalkstein + saltsyre:**

**Ordlikning:**
Kalsiumkarbonat + Saltsyre → Kalsiumklorid + Vann + Karbondioksid

**Kjemisk formel:** CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂

Dette er en vanlig reaksjon. Den skjer for eksempel når sur nedbør løser opp kalkstein i naturen.

---

**c) Fotosyntese:**

**Ordlikning:**
Karbondioksid + Vann + Sollys → Glukose + Oksygen

**Kjemisk formel:** 6CO₂ + 6H₂O + energi → C₆H₁₂O₆ + 6O₂

Fotosyntesen er en **endotherm** reaksjon – den tar opp energi fra sollyset.`,
      },
    },

    // ========== EKSTRA OPPGAVE: MULTIPLE CHOICE - EKSOTHERM/ENDOTHERM ==========
    {
      id: 'nat10-2-4-oppg-extra-3',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-4-oppg-extra-3',
        number: '2.4.13',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av disse er en endotherm reaksjon?',
        options: [
          { id: 'a', text: 'Forbrenning av ved', isCorrect: false },
          { id: 'b', text: 'Fotosyntese', isCorrect: true },
          { id: 'c', text: 'Rusting av jern', isCorrect: false },
          { id: 'd', text: 'Dynamitteksplosjon', isCorrect: false },
        ],
        solution: `**Riktig svar: Fotosyntese**

**Endotherm reaksjon** = tar opp energi fra omgivelsene.

Fotosyntese tar opp energi fra **sollyset** for å omdanne CO₂ og H₂O til glukose og O₂.

6CO₂ + 6H₂O + **energi** → C₆H₁₂O₆ + 6O₂

**De andre er eksotherme** (frigjør energi):
- Forbrenning av ved → frigjør varme og lys
- Rusting av jern → frigjør litt varme (langsomt)
- Dynamitteksplosjon → frigjør mye energi raskt

**Huskeregel:**
- Endo = inn (energi går inn i reaksjonen)
- Ekso = ut (energi går ut av reaksjonen)`,
      },
    },

    // ========== EKSTRA OPPGAVE: KLASSISK - KATALYSATOR ==========
    {
      id: 'nat10-2-4-oppg-extra-4',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-4-oppg-extra-4',
        number: '2.4.14',
        type: 'classic',
        difficulty: 'medium',
        task: `I et forsøk studerer du nedbrytingen av hydrogenperoksid (H₂O₂) til vann og oksygengass:

2H₂O₂ → 2H₂O + O₂

Du gjør to forsøk:
- **Forsøk A:** Hydrogenperoksid alene (uten tilsetning)
- **Forsøk B:** Hydrogenperoksid + litt mangansdioksid (MnO₂)

I forsøk B bobler det mye raskere, og MnO₂ er uendret etter reaksjonen.

a) Hva kalles MnO₂ i denne sammenhengen?
b) Hva betyr det at MnO₂ er "uendret etter reaksjonen"?
c) Nevn et annet eksempel på en katalysator fra hverdagen.`,
        solution: `**a) Hva kalles MnO₂:**

**Katalysator**

MnO₂ er en **katalysator** i denne reaksjonen. Den øker reaksjonshastigheten uten å bli brukt opp selv.

---

**b) "Uendret etter reaksjonen":**

En katalysator deltar i reaksjonen, men gjenvinnes. Etter reaksjonen har du like mye MnO₂ som du startet med.

Det betyr at katalysatoren:
- Ikke forbrukes
- Kan brukes om igjen
- Endrer bare **hastigheten**, ikke produktene

---

**c) Eksempel fra hverdagen:**

**Enzymer** i kroppen er biologiske katalysatorer!

- **Amylase** i spyttet bryter ned stivelse til sukker
- **Pepsin** i magesaften bryter ned proteiner
- **Lipase** bryter ned fett

Uten enzymer ville fordøyelsen tatt **hundrevis av år** i stedet for timer!

Andre eksempler:
- Katalysator i bilens eksosanlegg (renser avgasser)
- Gjær i brødbaking (enzymene i gjæren er katalysatorer)`,
      },
    },

    // ========== EKSTRA OPPGAVE: KLASSISK - UFULLSTENDIG FORBRENNING ==========
    {
      id: 'nat10-2-4-oppg-extra-5',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-4-oppg-extra-5',
        number: '2.4.15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Forbrenning av metan (CH₄) kan skje på to måter:

**Fullstendig forbrenning:** CH₄ + 2O₂ → CO₂ + 2H₂O
**Ufullstendig forbrenning:** 2CH₄ + 3O₂ → 2CO + 4H₂O

a) Hva er forskjellen mellom fullstendig og ufullstendig forbrenning?
b) Hvorfor er ufullstendig forbrenning farlig?
c) Gi et hverdagseksempel der ufullstendig forbrenning kan skje.
d) Hvordan kan man sikre at forbrenningen er fullstendig?`,
        solution: `**a) Forskjellen:**

**Fullstendig forbrenning:**
- Det er **nok oksygen** tilgjengelig
- Produkter: **CO₂** (karbondioksid) og H₂O
- All karbon omdannes til CO₂

**Ufullstendig forbrenning:**
- Det er **for lite oksygen** tilgjengelig
- Produkter: **CO** (karbonmonoksid) og/eller sot (C) og H₂O
- Ikke all karbon omdannes fullstendig

---

**b) Hvorfor farlig:**

**Karbonmonoksid (CO) er svært giftig!**

- CO er en fargeløs og luktfri gass
- Du kan ikke se eller lukte den
- CO binder seg til hemoglobin i blodet (sterkere enn oksygen)
- Blodet kan ikke transportere oksygen → kvelning
- Kan være dødelig i lukkede rom

---

**c) Hverdagseksempel:**

- **Gasspeis eller gassovn** med dårlig ventilasjon
- **Bilmotor** i lukket garasje
- **Parafinkamin** i dårlig ventilert rom
- **Grill** med kull innendørs

Alle disse kan produsere CO ved ufullstendig forbrenning.

---

**d) Sikre fullstendig forbrenning:**

- Sørg for **god tilgang på luft/oksygen**
- **God ventilasjon** i rommet
- Regelmessig **service** på forbrenningsovner og gasskaminer
- Installere **CO-alarm** (karbonmonoksidalarm)
- Aldri bruk grill eller forbrenningsapparater innendørs uten ventilasjon`,
      },
    },

    // ========== EKSTRA OPPGAVE: MULTIPLE CHOICE - REAKSJONSHASTIGHET ==========
    {
      id: 'nat10-2-4-oppg-extra-6',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-4-oppg-extra-6',
        number: '2.4.16',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken faktor øker IKKE reaksjonshastigheten?',
        options: [
          { id: 'a', text: 'Øke temperaturen', isCorrect: false },
          { id: 'b', text: 'Øke konsentrasjonen av reaktantene', isCorrect: false },
          { id: 'c', text: 'Minske overflatearealet på et fast stoff', isCorrect: true },
          { id: 'd', text: 'Tilsette en katalysator', isCorrect: false },
        ],
        solution: `**Riktig svar: Minske overflatearealet på et fast stoff**

Å **minske** overflatearealet gjør reaksjonen **tregere**, ikke raskere.

**Forklaring:** Med mindre overflateareal er det færre steder hvor reaktantene kan komme i kontakt, noe som gir færre kollisjoner og dermed saktere reaksjon.

**Faktorer som øker reaksjonshastigheten:**
1. **Øke temperaturen** → molekyler beveger seg raskere → flere kollisjoner
2. **Øke konsentrasjonen** → flere molekyler per volum → flere kollisjoner
3. **Øke overflatearealet** (f.eks. knuse til pulver) → flere kontaktpunkter
4. **Tilsette katalysator** → senker energibarrieren

**Eksempel:** En sukkerbite løser seg saktere i vann enn pulverisert sukker, fordi sukkerbiten har **mindre overflateareal**.`,
      },
    },

    // ========== OPPGAVE 10: SAMMENDRAG ==========
    {
      id: 'nat10-2-4-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-4-ex-10',
        number: '2.4.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Du gjennomfører et forsøk der du blander saltsyre (HCl) og magnesium (Mg).

Observasjoner:
- Det bobler kraftig (hydrogengass, H₂, dannes)
- Magnesiumstykket blir mindre og mindre
- Blandingen blir varm

a) Er dette en kjemisk reaksjon eller en fysisk endring? Begrunn svaret.
b) Skriv en reaksjonslikning for reaksjonen (ubalansert).
c) Er reaksjonen eksotherm eller endotherm? Hvordan vet du det?
d) Nevn tre måter du kan øke reaksjonshastigheten på.`,
        multipleChoiceOptions: [
          'a) Kjemisk reaksjon (nye stoffer dannes); b) Mg + HCl → MgCl₂ + H₂; c) Eksotherm (blir varm); d) Høyere temp, mer overflate, høyere konsentrasjon',
          'a) Fysisk endring (bare tilstandsendring); b) Mg → Mg²⁺; c) Endotherm; d) Lavere temperatur, større biter',
          'a) Kjemisk reaksjon; b) Mg + HCl → Mg + H₂; c) Eksotherm; d) Lavere temperatur, mindre syre',
          'a) Fysisk endring; b) Mg + H₂O → MgO; c) Ingen temperaturendring; d) Tilsett katalysator kun',
        ],
        solution: `**a) Kjemisk reaksjon eller fysisk endring:**

**Dette er en kjemisk reaksjon.**

**Begrunnelse:**

Det dannes **nye stoffer**:
- Magnesium (Mg) forsvinner
- Hydrogengass (H₂) dannes
- Magnesiumklorid (MgCl₂) dannes

**Tegn på kjemisk reaksjon:**
- Gassutvikling (H₂ bobler ut)
- Temperaturendring (blir varm)
- Stoffet endres (magnesium forsvinner)

**b) Reaksjonslikning (ubalansert):**

**Mg + HCl → MgCl₂ + H₂**

(Den balanserte versjonen er: Mg + 2HCl → MgCl₂ + H₂)

**Forklaring:**
- **Reaktanter:** Magnesium (Mg) og saltsyre (HCl)
- **Produkter:** Magnesiumklorid (MgCl₂) og hydrogengass (H₂)

**c) Eksotherm eller endotherm:**

**Eksotherm reaksjon**

**Hvordan vet vi det?**

Blandingen blir **varm**. Dette betyr at reaksjonen frigjør energi (varme) til omgivelsene.

**Eksotherm:** Energi frigjøres → temperaturen øker ✓

**d) Tre måter å øke reaksjonshastigheten:**

**1. Øke temperaturen:**

Varm opp saltsyren før du tilsetter magnesium.

**Effekt:** Molekylene beveger seg raskere → flere kollisjoner → raskere reaksjon

**2. Øke konsentrasjonen av saltsyre:**

Bruk sterkere saltsyre (høyere konsentrasjon av HCl).

**Effekt:** Flere HCl-molekyler per volum → flere kollisjoner → raskere reaksjon

**3. Øke overflatearealet på magnesium:**

Bruk magnesiumstrimler eller magnesiumstøv i stedet for en stor bit.

**Effekt:** Større overflateareal → flere steder hvor reaksjonen kan skje → raskere reaksjon

**Sammendrag:**

Dette er en klassisk kjemisk reaksjon der et metall (Mg) reagerer med en syre (HCl) og danner salt (MgCl₂) og hydrogengass (H₂). Reaksjonen er eksotherm, og reaksjonshastigheten kan økes ved å manipulere temperatur, konsentrasjon eller overflateareal.`,
      },
    },
  ],
  exercises: [], // Oppgavene er embedded i content
};

// ============================================================================
// KAPITTEL 2.5: MASSEBEVARING OG BALANSERING
// ============================================================================

export const CHAPTER_NAT10_2_5: TextbookChapter = {
  id: 'naturfag-10-2-5',
  courseId: 'naturfag-10',
  chapterNumber: '2.5',
  title: 'Massebevaring og balansering',
  description: 'Forstå loven om massebevaring og lær å balansere reaksjonslikninger.',
  estimatedMinutes: 40,
  competenceGoals: [
    'forklare loven om massebevaring og hva den betyr for kjemiske reaksjoner',
    'balansere enkle og mer komplekse reaksjonslikninger',
    'beregne masser før og etter kjemiske reaksjoner',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'nat10-2-5-intro',
      type: 'text',
      content: `## Massebevaring og balansering

Når noe brenner, forsvinner det. Eller gjør det det?

Når et stearinlys brenner, blir det mindre og mindre. Til slutt er det borte. Men hvor ble vokset?

Det kan virke som at masse forsvinner i en kjemisk reaksjon, men det stemmer ikke. Massen blir bare omdannet til andre stoffer.

Dette er **loven om massebevaring** – en av de viktigste lovene i kjemien.

I dette kapittelet lærer du:
- Loven om massebevaring
- Hvorfor atomer ikke forsvinner
- Hvordan balansere reaksjonslikninger
- Vanlige feil å unngå`,
    },

    // ========== LOVEN OM MASSEBEVARING ==========
    {
      id: 'nat10-2-5-massebevaring',
      type: 'text',
      content: `## Loven om massebevaring

### Antoine Lavoisier – kjemiens far

På slutten av 1700-tallet gjorde den franske kjemikeren **Antoine Lavoisier** en viktig oppdagelse.

Han veide stoffer nøye før og etter kjemiske reaksjoner. Uansett hvilken reaksjon han studerte, fant han alltid det samme:

**Massen før reaksjonen = Massen etter reaksjonen**

### Hva skjer med stearinlyset?

Når et stearinlys brenner:
- **Før reaksjonen:** Voks + Oksygen (fra luften)
- **Etter reaksjonen:** Karbondioksid (CO₂) + Vanndamp (H₂O)

Vokset forsvinner ikke – det omdannes til gasser som forsvinner opp i luften!

Hvis vi kunne samle opp alle gassene og veie dem, ville total masse være nøyaktig den samme som før.`,
    },

    // ========== DEFINISJON: LOVEN OM MASSEBEVARING ==========
    {
      id: 'nat10-2-5-def-massebevaring',
      type: 'definition',
      title: 'Loven om massebevaring',
      content: `**Loven om massebevaring** (også kalt Lavoisiers lov):

> I en kjemisk reaksjon forsvinner ikke masse, og ny masse skapes ikke. Total masse før reaksjonen er lik total masse etter reaksjonen.

**Formel:**
\`\`\`
Masse (reaktanter) = Masse (produkter)
\`\`\`

**Eksempel:**
Hvis 12 g karbon reagerer med 32 g oksygen, får vi 44 g karbondioksid.

12 g + 32 g = 44 g ✓`,
    },

    // ========== ATOMER FORSVINNER IKKE ==========
    {
      id: 'nat10-2-5-atomer',
      type: 'text',
      content: `## Atomer forsvinner ikke

### Hvorfor bevares masse?

Fordi **atomer ikke forsvinner eller dannes** i vanlige kjemiske reaksjoner.

De bare **omorganiseres**.

**Eksempel: Hydrogenreaksjon**

Hydrogen + Oksygen → Vann

\`\`\`
2 H₂ + O₂ → 2 H₂O
\`\`\`

**Før reaksjonen:**
- 4 hydrogenatomer (i 2 H₂-molekyler)
- 2 oksygenatomer (i 1 O₂-molekyl)

**Etter reaksjonen:**
- 4 hydrogenatomer (i 2 H₂O-molekyler)
- 2 oksygenatomer (i 2 H₂O-molekyler)

**Antall atomer er nøyaktig likt før og etter!**

Atomene har bare byttet bindingspartner. Ingen atomer har forsvunnet eller dukket opp.`,
    },

    // ========== HVORFOR BALANSERE? ==========
    {
      id: 'nat10-2-5-hvorfor-balansere',
      type: 'text',
      content: `## Hvorfor balansere reaksjonslikninger?

Siden atomer ikke forsvinner eller dannes, må vi ha **like mange atomer av hvert grunnstoff** på begge sider av reaksjonslikningen.

### Ubalansert likning

\`\`\`
H₂ + O₂ → H₂O  ❌
\`\`\`

**Venstre side:**
- 2 H-atomer
- 2 O-atomer

**Høyre side:**
- 2 H-atomer
- 1 O-atom

**Problem:** Vi har 2 oksygenatomer til venstre, men bare 1 til høyre. Dette bryter loven om massebevaring!

### Balansert likning

\`\`\`
2 H₂ + O₂ → 2 H₂O  ✓
\`\`\`

**Venstre side:**
- 4 H-atomer
- 2 O-atomer

**Høyre side:**
- 4 H-atomer
- 2 O-atomer

**Perfekt balansert!** Nå stemmer det.`,
    },

    // ========== DEFINISJON: KOEFFISIENTER ==========
    {
      id: 'nat10-2-5-def-koeffisienter',
      type: 'definition',
      title: 'Koeffisienter',
      content: `**Koeffisienter** er tallene vi skriver foran kjemiske formler for å balansere reaksjonslikninger.

**Eksempel:**
\`\`\`
2 H₂ + O₂ → 2 H₂O
\`\`\`

- **2** foran H₂ er en koeffisient
- **2** foran H₂O er en koeffisient
- Hvis det ikke står noe tall, er koeffisienten **1** (underforstått)

**Viktig:**
- Koeffisienter ganger hele molekylet/formelen
- **2 H₂O** betyr 2 vannmolekyler (totalt 4 H-atomer og 2 O-atomer)`,
    },

    // ========== TRINNVIS BALANSERING ==========
    {
      id: 'nat10-2-5-metode',
      type: 'text',
      content: `## Trinnvis balansering – metode

### Trinn 1: Skriv opp den ubalanserte likningen

Skriv reaktantene til venstre og produktene til høyre, adskilt av en pil.

**Eksempel:**
\`\`\`
CH₄ + O₂ → CO₂ + H₂O  (ubalansert)
\`\`\`

### Trinn 2: Tell antall atomer av hvert grunnstoff

**Venstre side:**
- C: 1
- H: 4
- O: 2

**Høyre side:**
- C: 1
- H: 2
- O: 3 (2 i CO₂ + 1 i H₂O)

### Trinn 3: Balanser ett grunnstoff av gangen

Start med grunnstoffet som forekommer i færrest forbindelser.

**Karbon (C):** Allerede balansert (1 på begge sider) ✓

**Hydrogen (H):** 4 til venstre, 2 til høyre
- Sett koeffisient **2** foran H₂O

\`\`\`
CH₄ + O₂ → CO₂ + 2 H₂O
\`\`\`

**Oksygen (O):** 2 til venstre, 4 til høyre (2 i CO₂ + 2 i 2 H₂O)
- Sett koeffisient **2** foran O₂

\`\`\`
CH₄ + 2 O₂ → CO₂ + 2 H₂O
\`\`\`

### Trinn 4: Sjekk at alt stemmer

**Venstre side:**
- C: 1
- H: 4
- O: 4

**Høyre side:**
- C: 1
- H: 4
- O: 4

**Balansert!** ✓`,
    },

    // ========== OPPGAVE 1: MASSEBEVARING - MULTIPLE CHOICE ==========
    {
      id: 'nat10-2-5-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-5-ex-1',
        number: '2.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `Loven om massebevaring sier at:

a) Masse kan forsvinne i en kjemisk reaksjon
b) Total masse før en reaksjon er lik total masse etter reaksjonen
c) Nye atomer skapes i en kjemisk reaksjon
d) Masse alltid øker i en kjemisk reaksjon`,
        options: [
          'Masse kan forsvinne i en kjemisk reaksjon',
          'Total masse før en reaksjon er lik total masse etter reaksjonen',
          'Nye atomer skapes i en kjemisk reaksjon',
          'Masse alltid øker i en kjemisk reaksjon',
        ],
        answer: 1,
        solution: `**Riktig svar: b) Total masse før en reaksjon er lik total masse etter reaksjonen**

**Forklaring:**

Loven om massebevaring (Lavoisiers lov) sier at masse verken forsvinner eller skapes i en kjemisk reaksjon.

**Hvorfor de andre er feil:**

a) **Feil:** Masse kan IKKE forsvinne. Den kan bare omdannes til andre stoffer.

c) **Feil:** Nye atomer skapes IKKE i vanlige kjemiske reaksjoner. Atomene bare omorganiseres.

d) **Feil:** Masse øker ikke og minker ikke – den forblir konstant.

**Eksempel:**
Hvis 12 g karbon reagerer med 32 g oksygen, får vi 44 g karbondioksid.
12 + 32 = 44 ✓`,
      },
    },

    // ========== OPPGAVE 2: ATOMER I REAKSJONER - MULTIPLE CHOICE ==========
    {
      id: 'nat10-2-5-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-5-ex-2',
        number: '2.5.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `Hva skjer med atomer i en kjemisk reaksjon?

a) De forsvinner
b) De deles i mindre deler
c) De omorganiseres til nye forbindelser
d) De smelter sammen til større atomer`,
        options: [
          'De forsvinner',
          'De deles i mindre deler',
          'De omorganiseres til nye forbindelser',
          'De smelter sammen til større atomer',
        ],
        answer: 2,
        solution: `**Riktig svar: c) De omorganiseres til nye forbindelser**

**Forklaring:**

I en kjemisk reaksjon **omorganiseres** atomene. De bryter gamle bindinger og danner nye bindinger med andre atomer.

**Antall atomer før = Antall atomer etter**

**Eksempel: Hydrogengass + oksygengass → vann**

\`\`\`
2 H₂ + O₂ → 2 H₂O
\`\`\`

**Før reaksjonen:**
- 4 hydrogenatomer
- 2 oksygenatomer

**Etter reaksjonen:**
- 4 hydrogenatomer (nå i vannmolekyler)
- 2 oksygenatomer (nå i vannmolekyler)

Atomene har bare byttet bindingspartner!

**Hvorfor de andre er feil:**

a) **Feil:** Atomer forsvinner ikke i vanlige kjemiske reaksjoner.

b) **Feil:** Atomer deles ikke i kjemiske reaksjoner (det skjer i kjernereaksjoner).

d) **Feil:** Atomer smelter ikke sammen i vanlige kjemiske reaksjoner.`,
      },
    },

    // ========== BALANSERING - ENKEL 1 ==========
    {
      id: 'nat10-2-5-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-5-ex-3',
        number: '2.5.3',
        type: 'classic',
        difficulty: 'lett',
        task: `Balanser følgende reaksjonslikning:

\`\`\`
N₂ + H₂ → NH₃
\`\`\`

(Ammoniakksyntese – viktig for gjødsel)`,
        multipleChoiceOptions: [
          'N₂ + 3H₂ → 2NH₃',
          'N₂ + H₂ → NH₃',
          '2N₂ + 3H₂ → 2NH₃',
          'N₂ + 2H₂ → 2NH₃',
        ],
        solution: `**Balansert likning:**

\`\`\`
N₂ + 3 H₂ → 2 NH₃
\`\`\`

**Fremgangsmåte:**

**1) Tell atomer i ubalansert likning:**

Venstre side:
- N: 2
- H: 2

Høyre side:
- N: 1
- H: 3

**2) Balanser nitrogen:**

Sett koeffisient **2** foran NH₃:

\`\`\`
N₂ + H₂ → 2 NH₃
\`\`\`

Nå har vi:
- Venstre: N = 2, H = 2
- Høyre: N = 2, H = 6

**3) Balanser hydrogen:**

Sett koeffisient **3** foran H₂:

\`\`\`
N₂ + 3 H₂ → 2 NH₃
\`\`\`

**4) Kontrollsjekk:**

Venstre side:
- N: 2
- H: 6

Høyre side:
- N: 2 (i 2 NH₃)
- H: 6 (i 2 NH₃)

**Balansert!** ✓`,
      },
    },

    // ========== BALANSERING - ENKEL 2 ==========
    {
      id: 'nat10-2-5-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-5-ex-4',
        number: '2.5.4',
        type: 'classic',
        difficulty: 'lett',
        task: `Balanser følgende reaksjonslikning:

\`\`\`
Al + O₂ → Al₂O₃
\`\`\`

(Aluminium reagerer med oksygen)`,
        multipleChoiceOptions: [
          '4Al + 3O₂ → 2Al₂O₃',
          '2Al + 3O₂ → Al₂O₃',
          'Al + O₂ → Al₂O₃',
          '4Al + 2O₂ → 2Al₂O₃',
        ],
        solution: `**Balansert likning:**

\`\`\`
4 Al + 3 O₂ → 2 Al₂O₃
\`\`\`

**Fremgangsmåte:**

**1) Tell atomer i ubalansert likning:**

Venstre side:
- Al: 1
- O: 2

Høyre side:
- Al: 2
- O: 3

**2) Balanser aluminium:**

Sett koeffisient **2** foran Al:

\`\`\`
2 Al + O₂ → Al₂O₃
\`\`\`

Nå: Venstre Al = 2, Høyre Al = 2 ✓

**3) Balanser oksygen:**

Dette blir litt vanskeligere. Vi har 2 O til venstre og 3 O til høyre.

**Triks:** Finn felles multiplum for 2 og 3 → **6**

- Sett koeffisient **3** foran O₂ (gir 6 O-atomer)
- Sett koeffisient **2** foran Al₂O₃ (gir 6 O-atomer)

\`\`\`
2 Al + 3 O₂ → 2 Al₂O₃
\`\`\`

**4) Juster aluminium igjen:**

Nå har vi 4 Al til høyre (i 2 Al₂O₃), så vi må ha 4 Al til venstre:

\`\`\`
4 Al + 3 O₂ → 2 Al₂O₃
\`\`\`

**5) Kontrollsjekk:**

Venstre side:
- Al: 4
- O: 6

Høyre side:
- Al: 4 (i 2 Al₂O₃)
- O: 6 (i 2 Al₂O₃)

**Balansert!** ✓`,
      },
    },

    // ========== BALANSERING - MEDIUM 1 ==========
    {
      id: 'nat10-2-5-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-5-ex-5',
        number: '2.5.5',
        type: 'classic',
        difficulty: 'medium',
        task: `Balanser følgende reaksjonslikning:

\`\`\`
C₃H₈ + O₂ → CO₂ + H₂O
\`\`\`

(Forbrenning av propan – brukes i griller)`,
        multipleChoiceOptions: [
          'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O',
          'C₃H₈ + O₂ → CO₂ + H₂O',
          'C₃H₈ + 3O₂ → 3CO₂ + 4H₂O',
          'C₃H₈ + 5O₂ → 3CO₂ + 2H₂O',
        ],
        solution: `**Balansert likning:**

\`\`\`
C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O
\`\`\`

**Fremgangsmåte:**

**1) Tell atomer i ubalansert likning:**

Venstre side:
- C: 3
- H: 8
- O: 2

Høyre side:
- C: 1
- H: 2
- O: 3 (2 i CO₂ + 1 i H₂O)

**2) Balanser karbon:**

Sett koeffisient **3** foran CO₂:

\`\`\`
C₃H₈ + O₂ → 3 CO₂ + H₂O
\`\`\`

**3) Balanser hydrogen:**

Sett koeffisient **4** foran H₂O:

\`\`\`
C₃H₈ + O₂ → 3 CO₂ + 4 H₂O
\`\`\`

Nå har vi:
- C: 3 (begge sider) ✓
- H: 8 (begge sider) ✓
- O: 2 til venstre, 10 til høyre (6 i 3 CO₂ + 4 i 4 H₂O)

**4) Balanser oksygen:**

Vi trenger 10 O-atomer til venstre. Siden O₂ har 2 O-atomer, trenger vi:

10 ÷ 2 = 5

Sett koeffisient **5** foran O₂:

\`\`\`
C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O
\`\`\`

**5) Kontrollsjekk:**

Venstre side:
- C: 3
- H: 8
- O: 10

Høyre side:
- C: 3
- H: 8
- O: 10 (6 + 4)

**Balansert!** ✓`,
      },
    },

    // ========== BALANSERING - MEDIUM 2 ==========
    {
      id: 'nat10-2-5-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-5-ex-6',
        number: '2.5.6',
        type: 'classic',
        difficulty: 'medium',
        task: `Balanser følgende reaksjonslikning:

\`\`\`
Fe₂O₃ + C → Fe + CO₂
\`\`\`

(Utvinning av jern fra jernmalm – viktig industriell prosess)`,
        multipleChoiceOptions: [
          '2Fe₂O₃ + 3C → 4Fe + 3CO₂',
          'Fe₂O₃ + C → Fe + CO₂',
          'Fe₂O₃ + 3C → 2Fe + 3CO₂',
          '2Fe₂O₃ + 2C → 4Fe + 2CO₂',
        ],
        solution: `**Balansert likning:**

\`\`\`
2 Fe₂O₃ + 3 C → 4 Fe + 3 CO₂
\`\`\`

**Fremgangsmåte:**

**1) Tell atomer i ubalansert likning:**

Venstre side:
- Fe: 2
- O: 3
- C: 1

Høyre side:
- Fe: 1
- C: 1
- O: 2

**2) Balanser jern:**

Sett koeffisient **2** foran Fe:

\`\`\`
Fe₂O₃ + C → 2 Fe + CO₂
\`\`\`

**3) Balanser oksygen:**

Vi har 3 O til venstre. For å få 3 O til høyre i form av CO₂, blir det vanskelig siden CO₂ har 2 O.

**Triks:** Bruk koeffisient **2** foran Fe₂O₃ (gir 6 O) og **3** foran CO₂ (gir 6 O):

\`\`\`
2 Fe₂O₃ + C → 2 Fe + 3 CO₂
\`\`\`

**4) Juster karbon:**

Nå har vi 3 C til høyre (i 3 CO₂), så vi må ha 3 C til venstre:

\`\`\`
2 Fe₂O₃ + 3 C → 2 Fe + 3 CO₂
\`\`\`

**5) Juster jern igjen:**

Nå har vi 4 Fe til venstre (i 2 Fe₂O₃), så vi må ha 4 Fe til høyre:

\`\`\`
2 Fe₂O₃ + 3 C → 4 Fe + 3 CO₂
\`\`\`

**6) Kontrollsjekk:**

Venstre side:
- Fe: 4 (i 2 Fe₂O₃)
- O: 6 (i 2 Fe₂O₃)
- C: 3

Høyre side:
- Fe: 4
- C: 3 (i 3 CO₂)
- O: 6 (i 3 CO₂)

**Balansert!** ✓`,
      },
    },

    // ========== VANLIGE FEIL ==========
    {
      id: 'nat10-2-5-vanlige-feil',
      type: 'text',
      content: `## Vanlige feil å unngå

### Feil 1: Endre indeksene

**FEIL:** ❌
\`\`\`
H₂ + O₂ → H₂O₂  (endret indeks i H₂O)
\`\`\`

**RIKTIG:** ✓
\`\`\`
2 H₂ + O₂ → 2 H₂O  (brukte koeffisienter)
\`\`\`

**Hvorfor feil?**
Hvis du endrer indeksene (tallene i formelen), endrer du stoffet!
- H₂O er **vann**
- H₂O₂ er **hydrogenperoksid** (helt annet stoff)

**Regel:** ALDRI endre indekser – kun koeffisienter!

### Feil 2: Glemme å balansere alle grunnstoff

Du må balansere **alle** grunnstoffene, ikke bare noen av dem.

### Feil 3: Ikke sjekke svaret til slutt

Alltid tell atomene på begge sider til slutt for å være sikker!

### Feil 4: Bruke desimaler eller brøker

Bruk **hele tall** som koeffisienter.

**FEIL:** ❌
\`\`\`
C₃H₈ + 2.5 O₂ → 3 CO₂ + 2 H₂O
\`\`\`

Hvis du får desimaler, gang alle koeffisientene med 2:

**RIKTIG:** ✓
\`\`\`
2 C₃H₈ + 5 O₂ → 6 CO₂ + 4 H₂O
\`\`\``,
    },

    // ========== BALANSERING - MEDIUM 3 ==========
    {
      id: 'nat10-2-5-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-5-ex-7',
        number: '2.5.7',
        type: 'classic',
        difficulty: 'medium',
        task: `Balanser følgende reaksjonslikning:

\`\`\`
Ca(OH)₂ + HCl → CaCl₂ + H₂O
\`\`\`

(Nøytralisering av kalsiumhydroksid med saltsyre)`,
        multipleChoiceOptions: [
          'Ca(OH)₂ + 2HCl → CaCl₂ + 2H₂O',
          'Ca(OH)₂ + HCl → CaCl₂ + H₂O',
          'Ca(OH)₂ + 2HCl → CaCl₂ + H₂O',
          '2Ca(OH)₂ + 2HCl → 2CaCl₂ + 2H₂O',
        ],
        solution: `**Balansert likning:**

\`\`\`
Ca(OH)₂ + 2 HCl → CaCl₂ + 2 H₂O
\`\`\`

**Fremgangsmåte:**

**1) Tell atomer i ubalansert likning:**

Venstre side:
- Ca: 1
- O: 2
- H: 3 (2 i OH₂ + 1 i HCl)
- Cl: 1

Høyre side:
- Ca: 1
- Cl: 2
- H: 2
- O: 1

**2) Balanser klor:**

Vi har 1 Cl til venstre og 2 Cl til høyre. Sett koeffisient **2** foran HCl:

\`\`\`
Ca(OH)₂ + 2 HCl → CaCl₂ + H₂O
\`\`\`

**3) Tell på nytt:**

Venstre side:
- Ca: 1
- O: 2
- H: 4 (2 i Ca(OH)₂ + 2 i 2 HCl)
- Cl: 2

Høyre side:
- Ca: 1
- Cl: 2
- H: 2
- O: 1

**4) Balanser hydrogen og oksygen:**

Vi har 4 H og 2 O til venstre, men 2 H og 1 O til høyre.

Sett koeffisient **2** foran H₂O:

\`\`\`
Ca(OH)₂ + 2 HCl → CaCl₂ + 2 H₂O
\`\`\`

**5) Kontrollsjekk:**

Venstre side:
- Ca: 1
- O: 2
- H: 4
- Cl: 2

Høyre side:
- Ca: 1
- Cl: 2
- H: 4 (i 2 H₂O)
- O: 2 (i 2 H₂O)

**Balansert!** ✓`,
      },
    },

    // ========== BALANSERING - MEDIUM 4 ==========
    {
      id: 'nat10-2-5-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-5-ex-8',
        number: '2.5.8',
        type: 'classic',
        difficulty: 'medium',
        task: `Balanser følgende reaksjonslikning:

\`\`\`
C₂H₅OH + O₂ → CO₂ + H₂O
\`\`\`

(Forbrenning av etanol – alkohol)`,
        multipleChoiceOptions: [
          'C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O',
          'C₂H₅OH + O₂ → CO₂ + H₂O',
          'C₂H₅OH + 2O₂ → 2CO₂ + 3H₂O',
          'C₂H₅OH + 3O₂ → 2CO₂ + 2H₂O',
        ],
        solution: `**Balansert likning:**

\`\`\`
C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O
\`\`\`

**Fremgangsmåte:**

**1) Tell atomer i ubalansert likning:**

Venstre side:
- C: 2
- H: 6 (5 + 1 i OH)
- O: 3 (1 i C₂H₅OH + 2 i O₂)

Høyre side:
- C: 1
- H: 2
- O: 3 (2 i CO₂ + 1 i H₂O)

**2) Balanser karbon:**

Sett koeffisient **2** foran CO₂:

\`\`\`
C₂H₅OH + O₂ → 2 CO₂ + H₂O
\`\`\`

**3) Balanser hydrogen:**

Vi har 6 H til venstre. Sett koeffisient **3** foran H₂O:

\`\`\`
C₂H₅OH + O₂ → 2 CO₂ + 3 H₂O
\`\`\`

**4) Tell oksygen på høyre side:**

- I 2 CO₂: 4 O-atomer
- I 3 H₂O: 3 O-atomer
- Totalt: 7 O-atomer

**5) Balanser oksygen på venstre side:**

Vi har allerede 1 O i C₂H₅OH, så vi trenger 6 O til fra O₂.

6 ÷ 2 = 3

Sett koeffisient **3** foran O₂:

\`\`\`
C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O
\`\`\`

**6) Kontrollsjekk:**

Venstre side:
- C: 2
- H: 6
- O: 7 (1 i C₂H₅OH + 6 i 3 O₂)

Høyre side:
- C: 2 (i 2 CO₂)
- H: 6 (i 3 H₂O)
- O: 7 (4 i 2 CO₂ + 3 i 3 H₂O)

**Balansert!** ✓`,
      },
    },

    // ========== BEREGNING MED MASSER 1 ==========
    {
      id: 'nat10-2-5-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-5-ex-9',
        number: '2.5.9',
        type: 'classic',
        difficulty: 'medium',
        task: `Magnesium brenner i luft og danner magnesiumoksid:

\`\`\`
2 Mg + O₂ → 2 MgO
\`\`\`

En elev brenner 12 g magnesium.

a) Hvor mange gram oksygen reagerer med magnesiumet?
b) Hvor mange gram magnesiumoksid dannes?

(Molar masse: Mg = 24 g/mol, O = 16 g/mol)`,
        multipleChoiceOptions: [
          'a) 8 g oksygen, b) 20 g magnesiumoksid',
          'a) 16 g oksygen, b) 28 g magnesiumoksid',
          'a) 8 g oksygen, b) 12 g magnesiumoksid',
          'a) 4 g oksygen, b) 16 g magnesiumoksid',
        ],
        solution: `**a) Masse oksygen:**

**8 g oksygen**

**b) Masse magnesiumoksid:**

**20 g magnesiumoksid**

**Løsning:**

**Metode 1: Bruk loven om massebevaring (enklest)**

Ifølge loven om massebevaring:

\`\`\`
Masse (Mg) + Masse (O₂) = Masse (MgO)
\`\`\`

Vi vet:
- Masse Mg = 12 g
- Masse MgO = ?
- Masse O₂ = ?

**Finn først molforhold:**

\`\`\`
2 Mg + O₂ → 2 MgO
\`\`\`

**Steg 1: Finn mol Mg**

\`\`\`
n(Mg) = 12 g ÷ 24 g/mol = 0,5 mol
\`\`\`

**Steg 2: Finn mol O₂**

Fra likningen: 2 mol Mg reagerer med 1 mol O₂

\`\`\`
n(O₂) = 0,5 mol Mg × (1 mol O₂ / 2 mol Mg) = 0,25 mol O₂
\`\`\`

**Steg 3: Finn masse O₂**

\`\`\`
m(O₂) = 0,25 mol × 32 g/mol = 8 g
\`\`\`

**Steg 4: Finn total masse MgO**

\`\`\`
m(MgO) = m(Mg) + m(O₂) = 12 g + 8 g = 20 g
\`\`\`

**Svar:**
a) 8 g oksygen
b) 20 g magnesiumoksid

**Sjekk:** Total masse før (12 + 8 = 20 g) = Total masse etter (20 g) ✓`,
      },
    },

    // ========== BEREGNING MED MASSER 2 ==========
    {
      id: 'nat10-2-5-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-5-ex-10',
        number: '2.5.10',
        type: 'classic',
        difficulty: 'medium',
        task: `Ved fotosyntese produserer planter glukose (C₆H₁₂O₆) og oksygen fra karbondioksid og vann:

\`\`\`
6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂
\`\`\`

En plante bruker 264 g karbondioksid i fotosyntesen.

a) Hvor mye glukose produseres?
b) Hvor mye oksygen frigis?

(Molar masse: CO₂ = 44 g/mol, C₆H₁₂O₆ = 180 g/mol, O₂ = 32 g/mol, H₂O = 18 g/mol)`,
        multipleChoiceOptions: [
          'a) 180 g glukose, b) 192 g oksygen',
          'a) 264 g glukose, b) 192 g oksygen',
          'a) 180 g glukose, b) 264 g oksygen',
          'a) 90 g glukose, b) 96 g oksygen',
        ],
        solution: `**a) Masse glukose:**

**180 g glukose**

**b) Masse oksygen:**

**192 g oksygen**

**Løsning:**

**Steg 1: Finn mol CO₂**

\`\`\`
n(CO₂) = 264 g ÷ 44 g/mol = 6 mol
\`\`\`

**Steg 2: Bruk molforholdet fra likningen**

\`\`\`
6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂
\`\`\`

Fra likningen:
- 6 mol CO₂ gir 1 mol C₆H₁₂O₆
- 6 mol CO₂ gir 6 mol O₂

**Steg 3: Finn mol glukose**

\`\`\`
n(C₆H₁₂O₆) = 6 mol CO₂ × (1 mol C₆H₁₂O₆ / 6 mol CO₂) = 1 mol
\`\`\`

**Steg 4: Finn masse glukose**

\`\`\`
m(C₆H₁₂O₆) = 1 mol × 180 g/mol = 180 g
\`\`\`

**Steg 5: Finn mol oksygen**

\`\`\`
n(O₂) = 6 mol CO₂ × (6 mol O₂ / 6 mol CO₂) = 6 mol
\`\`\`

**Steg 6: Finn masse oksygen**

\`\`\`
m(O₂) = 6 mol × 32 g/mol = 192 g
\`\`\`

**Svar:**
a) 180 g glukose
b) 192 g oksygen

**Sjekk med massebevaring:**

Vi trenger også å finne masse vann brukt:

\`\`\`
n(H₂O) = 6 mol
m(H₂O) = 6 mol × 18 g/mol = 108 g
\`\`\`

Total masse før: 264 g (CO₂) + 108 g (H₂O) = 372 g
Total masse etter: 180 g (glukose) + 192 g (O₂) = 372 g ✓`,
      },
    },

    // ========== VANSKELIG BALANSERING 1 ==========
    {
      id: 'nat10-2-5-ex-11-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-5-ex-11',
        number: '2.5.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Balanser følgende reaksjonslikning og skriv fullstendig balansert likning:

\`\`\`
K₂Cr₂O₇ + HCl → KCl + CrCl₃ + H₂O + Cl₂
\`\`\`

(Dette er en mer kompleks reaksjon med flere produkter)`,
        multipleChoiceOptions: [
          'K₂Cr₂O₇ + 14HCl → 2KCl + 2CrCl₃ + 7H₂O + 3Cl₂',
          'K₂Cr₂O₇ + 7HCl → 2KCl + 2CrCl₃ + 7H₂O + Cl₂',
          'K₂Cr₂O₇ + 14HCl → KCl + CrCl₃ + 7H₂O + 3Cl₂',
          'K₂Cr₂O₇ + 12HCl → 2KCl + 2CrCl₃ + 6H₂O + 2Cl₂',
        ],
        solution: `**Balansert likning:**

\`\`\`
K₂Cr₂O₇ + 14 HCl → 2 KCl + 2 CrCl₃ + 7 H₂O + 3 Cl₂
\`\`\`

**Fremgangsmåte:**

Denne er komplisert! Vi må være systematiske.

**Steg 1: Tell atomer i ubalansert likning:**

Venstre:
- K: 2
- Cr: 2
- O: 7
- H: 1
- Cl: 1

Høyre:
- K: 1
- Cl: 1 + 3 + 2 = 6
- Cr: 1
- H: 2
- O: 1

**Steg 2: Balanser kalium (K)**

Sett koeffisient **2** foran KCl:

\`\`\`
K₂Cr₂O₇ + HCl → 2 KCl + CrCl₃ + H₂O + Cl₂
\`\`\`

**Steg 3: Balanser krom (Cr)**

Sett koeffisient **2** foran CrCl₃:

\`\`\`
K₂Cr₂O₇ + HCl → 2 KCl + 2 CrCl₃ + H₂O + Cl₂
\`\`\`

**Steg 4: Balanser oksygen (O)**

Vi har 7 O til venstre, så vi trenger 7 H₂O:

Sett koeffisient **7** foran H₂O:

\`\`\`
K₂Cr₂O₇ + HCl → 2 KCl + 2 CrCl₃ + 7 H₂O + Cl₂
\`\`\`

**Steg 5: Balanser hydrogen (H)**

Vi har 7 H₂O = 14 H til høyre, så vi trenger 14 HCl til venstre:

\`\`\`
K₂Cr₂O₇ + 14 HCl → 2 KCl + 2 CrCl₃ + 7 H₂O + Cl₂
\`\`\`

**Steg 6: Balanser klor (Cl)**

Venstre: 14 Cl (i 14 HCl)

Høyre:
- I 2 KCl: 2 Cl
- I 2 CrCl₃: 6 Cl
- I Cl₂: 2 Cl per molekyl

Totalt til høyre: 2 + 6 + 2x = 14
8 + 2x = 14
2x = 6
x = 3

Sett koeffisient **3** foran Cl₂:

\`\`\`
K₂Cr₂O₇ + 14 HCl → 2 KCl + 2 CrCl₃ + 7 H₂O + 3 Cl₂
\`\`\`

**Steg 7: Kontrollsjekk:**

Venstre side:
- K: 2
- Cr: 2
- O: 7
- H: 14
- Cl: 14

Høyre side:
- K: 2
- Cr: 2
- Cl: 2 + 6 + 6 = 14
- H: 14
- O: 7

**Balansert!** ✓`,
      },
    },

    // ========== VANSKELIG BALANSERING 2 ==========
    {
      id: 'nat10-2-5-ex-12-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-5-ex-12',
        number: '2.5.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Balanser følgende reaksjonslikning:

\`\`\`
C₄H₁₀ + O₂ → CO₂ + H₂O
\`\`\`

Deretter:

a) Hvor mange mol oksygen trengs for å forbrenne 2 mol butan (C₄H₁₀)?
b) Hvis 58 g butan forbrenner fullstendig, hvor mange liter karbondioksid dannes ved standardforhold? (1 mol gass = 24 L ved standardforhold, molar masse C₄H₁₀ = 58 g/mol)`,
        multipleChoiceOptions: [
          '2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O; a) 13 mol O₂, b) 96 L CO₂',
          'C₄H₁₀ + 6O₂ → 4CO₂ + 5H₂O; a) 12 mol O₂, b) 96 L CO₂',
          '2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O; a) 13 mol O₂, b) 48 L CO₂',
          'C₄H₁₀ + 7O₂ → 4CO₂ + 5H₂O; a) 14 mol O₂, b) 96 L CO₂',
        ],
        solution: `**Balansert likning:**

\`\`\`
2 C₄H₁₀ + 13 O₂ → 8 CO₂ + 10 H₂O
\`\`\`

**Balansering:**

**Steg 1:** Balanser karbon:
- 4 C til venstre → sett 4 foran CO₂

\`\`\`
C₄H₁₀ + O₂ → 4 CO₂ + H₂O
\`\`\`

**Steg 2:** Balanser hydrogen:
- 10 H til venstre → sett 5 foran H₂O

\`\`\`
C₄H₁₀ + O₂ → 4 CO₂ + 5 H₂O
\`\`\`

**Steg 3:** Tell oksygen til høyre:
- I 4 CO₂: 8 O
- I 5 H₂O: 5 O
- Totalt: 13 O

Vi trenger 13 O-atomer, men O₂ kommer i par. 13/2 = 6,5

Sett koeffisient **6,5** foran O₂ (midlertidig):

\`\`\`
C₄H₁₀ + 6,5 O₂ → 4 CO₂ + 5 H₂O
\`\`\`

**Steg 4:** Fjern desimaler ved å gange alt med 2:

\`\`\`
2 C₄H₁₀ + 13 O₂ → 8 CO₂ + 10 H₂O
\`\`\`

**Svar på oppgavene:**

**a) Mol oksygen for 2 mol butan:**

Fra balansert likning: 2 mol C₄H₁₀ reagerer med 13 mol O₂

Svar: **13 mol oksygen**

**b) Volum CO₂ fra 58 g butan:**

**Steg 1: Finn mol butan:**

\`\`\`
n(C₄H₁₀) = 58 g ÷ 58 g/mol = 1 mol
\`\`\`

**Steg 2: Finn mol CO₂:**

Fra likningen: 2 mol C₄H₁₀ gir 8 mol CO₂

Molforhold: 1 mol C₄H₁₀ gir 4 mol CO₂

\`\`\`
n(CO₂) = 1 mol × 4 = 4 mol
\`\`\`

**Steg 3: Finn volum CO₂:**

\`\`\`
V(CO₂) = 4 mol × 24 L/mol = 96 L
\`\`\`

**Svar:**
a) 13 mol oksygen
b) 96 liter karbondioksid`,
      },
    },

    // ========== EKSTRA EKSEMPEL: BALANSERE EN FORBRENNINGSREAKSJON ==========
    {
      id: 'nat10-2-5-example-extra-1',
      type: 'example',
      title: 'Eksempel: Balansere forbrenning av etyn (acetylen)',
      problem: `Etyn (C₂H₂) er gassen som brukes i sveising (acetylenbranner). Når den brenner fullstendig, dannes karbondioksid og vann.

Balanser reaksjonslikningen:

\`\`\`
C₂H₂ + O₂ → CO₂ + H₂O
\`\`\``,
      solution: `**Balansert likning:**

\`\`\`
2 C₂H₂ + 5 O₂ → 4 CO₂ + 2 H₂O
\`\`\`

**Fremgangsmåte:**

**Steg 1: Tell atomer (ubalansert)**

Venstre: C=2, H=2, O=2
Høyre: C=1, H=2, O=3

**Steg 2: Balanser karbon**
Sett 2 foran CO₂:
C₂H₂ + O₂ → 2CO₂ + H₂O

**Steg 3: Sjekk hydrogen**
H: 2 til venstre, 2 til høyre ✓

**Steg 4: Balanser oksygen**
Høyre: 4 (i 2CO₂) + 1 (i H₂O) = 5 O-atomer
Venstre: O₂ → trenger 5/2 = 2,5 O₂

\`\`\`
C₂H₂ + 2,5 O₂ → 2 CO₂ + H₂O
\`\`\`

**Steg 5: Fjern desimaler (gang med 2)**

\`\`\`
2 C₂H₂ + 5 O₂ → 4 CO₂ + 2 H₂O
\`\`\`

**Kontrollsjekk:**

Venstre: C=4, H=4, O=10
Høyre: C=4, H=4, O=10 (8 i 4CO₂ + 2 i 2H₂O)

**Balansert!** ✓`,
    },

    // ========== EKSTRA EKSEMPEL: STØKIOMETRI - MASSEBEREGNING ==========
    {
      id: 'nat10-2-5-example-extra-2',
      type: 'example',
      title: 'Eksempel: Beregne masse av produkter',
      problem: `Jern reagerer med svovel og danner jernsulfid:

\`\`\`
Fe + S → FeS
\`\`\`

Hvis du har 28 g jern og nok svovel:

a) Hvor mange gram svovel reagerer?
b) Hvor mange gram jernsulfid dannes?

(Molar masse: Fe = 56 g/mol, S = 32 g/mol)`,
      solution: `**a) Masse svovel:**

**Steg 1: Finn mol jern**
n(Fe) = 28 g ÷ 56 g/mol = 0,5 mol

**Steg 2: Bruk molforholdet**
Fra likningen: 1 mol Fe reagerer med 1 mol S (forholdet er 1:1)

n(S) = 0,5 mol

**Steg 3: Finn masse svovel**
m(S) = 0,5 mol × 32 g/mol = **16 g svovel**

---

**b) Masse jernsulfid:**

**Metode 1: Bruk loven om massebevaring**

m(FeS) = m(Fe) + m(S) = 28 g + 16 g = **44 g jernsulfid**

**Metode 2: Beregn med molarmasse**

Molar masse FeS = 56 + 32 = 88 g/mol
n(FeS) = 0,5 mol
m(FeS) = 0,5 × 88 = **44 g** ✓

**Sjekk med massebevaring:**
Før: 28 g + 16 g = 44 g
Etter: 44 g
44 = 44 ✓`,
    },

    // ========== EKSTRA EKSEMPEL: BALANSERE MED FLERE GRUNNSTOFF ==========
    {
      id: 'nat10-2-5-example-extra-3',
      type: 'example',
      title: 'Eksempel: Balansere reaksjon med natriumhydroksid og svovelsyre',
      problem: `Balanser reaksjonslikningen:

\`\`\`
NaOH + H₂SO₄ → Na₂SO₄ + H₂O
\`\`\`

(Nøytralisering av natriumhydroksid med svovelsyre)`,
      solution: `**Balansert likning:**

\`\`\`
2 NaOH + H₂SO₄ → Na₂SO₄ + 2 H₂O
\`\`\`

**Fremgangsmåte:**

**Steg 1: Tell atomer (ubalansert)**

Venstre: Na=1, O=1+4=5, H=1+2=3, S=1
Høyre: Na=2, S=1, O=4+1=5, H=2

**Steg 2: Balanser natrium**
Sett 2 foran NaOH:

\`\`\`
2 NaOH + H₂SO₄ → Na₂SO₄ + H₂O
\`\`\`

**Steg 3: Tell på nytt**

Venstre: Na=2, O=2+4=6, H=2+2=4, S=1
Høyre: Na=2, S=1, O=4+1=5, H=2

**Steg 4: Balanser hydrogen og oksygen**
Sett 2 foran H₂O:

\`\`\`
2 NaOH + H₂SO₄ → Na₂SO₄ + 2 H₂O
\`\`\`

**Kontrollsjekk:**

Venstre: Na=2, O=6 (2+4), H=4 (2+2), S=1
Høyre: Na=2, S=1, O=6 (4+2), H=4 (i 2H₂O)

**Balansert!** ✓

**Merk:** Svovelsyre (H₂SO₄) er en toprotisk syre, som betyr at hvert molekyl kan gi fra seg 2 H⁺-ioner. Derfor trengs det 2 NaOH (som gir 2 OH⁻) for å nøytralisere 1 H₂SO₄.`,
    },

    // ========== EKSTRA OPPGAVE: MULTIPLE CHOICE - KOEFFISIENTER ==========
    {
      id: 'nat10-2-5-oppg-extra-1',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-5-oppg-extra-1',
        number: '2.5.13',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'I reaksjonslikningen 2H₂ + O₂ → 2H₂O, hva betyr tallet 2 foran H₂O?',
        options: [
          { id: 'a', text: 'Det er 2 oksygenatomer i hvert vannmolekyl', isCorrect: false },
          { id: 'b', text: 'Det dannes 2 vannmolekyler', isCorrect: true },
          { id: 'c', text: 'Vannet har dobbelt så stor masse', isCorrect: false },
          { id: 'd', text: 'Det er 2 hydrogenatomer i vann', isCorrect: false },
        ],
        solution: `**Riktig svar: Det dannes 2 vannmolekyler**

Tallet foran en kjemisk formel (koeffisienten) forteller hvor mange molekyler/enheter som deltar i reaksjonen.

**2H₂O** betyr 2 vannmolekyler.

**Viktig forskjell:**
- **2** foran H₂O (koeffisient): betyr 2 molekyler
- **2** som indeks i H₂O: betyr 2 hydrogenatomer per molekyl

**I likningen 2H₂ + O₂ → 2H₂O:**
- 2 hydrogenmolekyler + 1 oksygenmolekyl → 2 vannmolekyler
- Totalt: 4 H-atomer + 2 O-atomer → 4 H-atomer + 2 O-atomer ✓`,
      },
    },

    // ========== EKSTRA OPPGAVE: KLASSISK - ENKEL BALANSERING ==========
    {
      id: 'nat10-2-5-oppg-extra-2',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-5-oppg-extra-2',
        number: '2.5.14',
        type: 'classic',
        difficulty: 'lett',
        task: `Balanser følgende reaksjonslikninger:

a) Na + Cl₂ → NaCl
b) Mg + O₂ → MgO
c) H₂ + Cl₂ → HCl`,
        solution: `**a) Na + Cl₂ → NaCl**

Tell: Venstre: Na=1, Cl=2 | Høyre: Na=1, Cl=1

Cl er ubalansert. Sett 2 foran NaCl:
Na + Cl₂ → 2NaCl

Nå: Na=1 til venstre, Na=2 til høyre. Sett 2 foran Na:

**2Na + Cl₂ → 2NaCl** ✓
(Na=2, Cl=2 på begge sider)

---

**b) Mg + O₂ → MgO**

Tell: Venstre: Mg=1, O=2 | Høyre: Mg=1, O=1

Sett 2 foran MgO:
Mg + O₂ → 2MgO

Nå: Mg=1 til venstre, Mg=2 til høyre. Sett 2 foran Mg:

**2Mg + O₂ → 2MgO** ✓
(Mg=2, O=2 på begge sider)

---

**c) H₂ + Cl₂ → HCl**

Tell: Venstre: H=2, Cl=2 | Høyre: H=1, Cl=1

Sett 2 foran HCl:

**H₂ + Cl₂ → 2HCl** ✓
(H=2, Cl=2 på begge sider)`,
      },
    },

    // ========== EKSTRA OPPGAVE: KLASSISK - MASSEBEREGNING ==========
    {
      id: 'nat10-2-5-oppg-extra-3',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-5-oppg-extra-3',
        number: '2.5.15',
        type: 'classic',
        difficulty: 'medium',
        task: `Ved forbrenning av karbon dannes karbondioksid:

C + O₂ → CO₂

Hvis 6 g karbon forbrenner fullstendig:

a) Hvor mange mol karbon er 6 g?
b) Hvor mange mol CO₂ dannes?
c) Hvor mange gram CO₂ dannes?
d) Bruk loven om massebevaring til å finne hvor mange gram oksygen som reagerer.

(Molar masse: C = 12 g/mol, O₂ = 32 g/mol, CO₂ = 44 g/mol)`,
        solution: `**a) Mol karbon:**

n(C) = m/M = 6 g ÷ 12 g/mol = **0,5 mol**

---

**b) Mol CO₂:**

Fra likningen: 1 mol C gir 1 mol CO₂ (forholdet er 1:1)

n(CO₂) = 0,5 mol

**Svar: 0,5 mol CO₂**

---

**c) Masse CO₂:**

m(CO₂) = n × M = 0,5 mol × 44 g/mol = **22 g CO₂**

---

**d) Masse oksygen (med massebevaring):**

Loven om massebevaring:
m(C) + m(O₂) = m(CO₂)

6 g + m(O₂) = 22 g

m(O₂) = 22 - 6 = **16 g oksygen**

**Sjekk:** 0,5 mol O₂ × 32 g/mol = 16 g ✓`,
      },
    },

    // ========== EKSTRA OPPGAVE: MULTIPLE CHOICE - VANLIGE FEIL ==========
    {
      id: 'nat10-2-5-oppg-extra-4',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-5-oppg-extra-4',
        number: '2.5.16',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er FEIL å gjøre når man balanserer en reaksjonslikning?',
        options: [
          { id: 'a', text: 'Sette koeffisienter foran formlene', isCorrect: false },
          { id: 'b', text: 'Endre indeksene (tallene inni formlene)', isCorrect: true },
          { id: 'c', text: 'Telle atomer på begge sider', isCorrect: false },
          { id: 'd', text: 'Sjekke svaret til slutt', isCorrect: false },
        ],
        solution: `**Riktig svar: Endre indeksene (tallene inni formlene)**

Indeksene i en kjemisk formel beskriver **hvilke stoffer** vi har. Hvis du endrer indeksene, endrer du stoffet!

**Eksempel:**
- H₂O er **vann** → trygt å drikke
- H₂O₂ er **hydrogenperoksid** → farlig å drikke!

Hvis du endrer indeksen fra O til O₂, har du endret stoffet fullstendig.

**Regel:** ALDRI endre indekser – bare bruk koeffisienter (tall FORAN formlene).

**Riktig:** 2H₂O (2 vannmolekyler)
**Feil:** H₂O₂ (et helt annet stoff)`,
      },
    },

    // ========== EKSTRA OPPGAVE: KLASSISK - KOMPLEKS BALANSERING ==========
    {
      id: 'nat10-2-5-oppg-extra-5',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-5-oppg-extra-5',
        number: '2.5.17',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Balanser følgende reaksjonslikning:

\`\`\`
Fe₃O₄ + H₂ → Fe + H₂O
\`\`\`

(Reduksjon av jernoksid med hydrogen)`,
        solution: `**Balansert likning:**

\`\`\`
Fe₃O₄ + 4 H₂ → 3 Fe + 4 H₂O
\`\`\`

**Fremgangsmåte:**

**Steg 1: Tell atomer (ubalansert)**
Venstre: Fe=3, O=4, H=2
Høyre: Fe=1, H=2, O=1

**Steg 2: Balanser jern**
Sett 3 foran Fe:
Fe₃O₄ + H₂ → 3Fe + H₂O

**Steg 3: Balanser oksygen**
Sett 4 foran H₂O:
Fe₃O₄ + H₂ → 3Fe + 4H₂O

**Steg 4: Balanser hydrogen**
Høyre: 4 × 2 = 8 H-atomer. Trenger 8 H til venstre.
Sett 4 foran H₂:
Fe₃O₄ + 4H₂ → 3Fe + 4H₂O

**Kontrollsjekk:**
Venstre: Fe=3, O=4, H=8
Høyre: Fe=3, O=4, H=8

**Balansert!** ✓`,
      },
    },

    // ========== EKSTRA OPPGAVE: KLASSISK - MASSEBEREGNING MED FOTOSYNTESE ==========
    {
      id: 'nat10-2-5-oppg-extra-6',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-5-oppg-extra-6',
        number: '2.5.18',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Forbrenning av etanol (alkohol):

C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O

Hvis 46 g etanol forbrenner fullstendig:

a) Hvor mange mol etanol er dette? (Molar masse C₂H₅OH = 46 g/mol)
b) Hvor mange mol CO₂ dannes?
c) Hvor mange gram CO₂ dannes? (Molar masse CO₂ = 44 g/mol)
d) Hvor mange gram vann dannes? (Molar masse H₂O = 18 g/mol)
e) Sjekk svaret med loven om massebevaring.`,
        solution: `**a) Mol etanol:**

n(C₂H₅OH) = 46 g ÷ 46 g/mol = **1 mol**

---

**b) Mol CO₂:**

Fra likningen: 1 mol C₂H₅OH gir 2 mol CO₂

n(CO₂) = 1 × 2 = **2 mol**

---

**c) Masse CO₂:**

m(CO₂) = 2 mol × 44 g/mol = **88 g**

---

**d) Masse H₂O:**

Fra likningen: 1 mol C₂H₅OH gir 3 mol H₂O

n(H₂O) = 1 × 3 = 3 mol
m(H₂O) = 3 mol × 18 g/mol = **54 g**

---

**e) Sjekk med massebevaring:**

Masse oksygen brukt:
n(O₂) = 1 × 3 = 3 mol
m(O₂) = 3 × 32 = 96 g

**Total masse før:**
m(C₂H₅OH) + m(O₂) = 46 + 96 = **142 g**

**Total masse etter:**
m(CO₂) + m(H₂O) = 88 + 54 = **142 g**

142 = 142 ✓ **Massebevaring bekreftet!**`,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'nat10-2-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Viktigste punkter

**Loven om massebevaring:**
- Total masse før reaksjon = Total masse etter reaksjon
- Atomer forsvinner ikke – de omorganiseres
- Oppdaget av Antoine Lavoisier

**Balansering av reaksjonslikninger:**
- Like mange atomer av hvert grunnstoff på begge sider
- Bruk koeffisienter (tall foran formler)
- ALDRI endre indekser (tall i formler)

**Fremgangsmåte:**
1. Skriv ubalansert likning
2. Tell atomer av hvert grunnstoff
3. Balanser ett grunnstoff om gangen
4. Bruk koeffisienter
5. Sjekk at alt stemmer

**Vanlige feil:**
- Endre indekser (ALDRI gjør dette!)
- Glemme å balansere alle grunnstoff
- Bruke desimaler (bruk hele tall)
- Ikke sjekke svaret

### Neste steg

Nå som du kan balansere reaksjonslikninger, er du klar til å:
- Beregne mengder i kjemiske reaksjoner (støkiometri)
- Forstå energiendringer i reaksjoner
- Analysere kjemiske prosesser i naturen og industrien

Øv deg på å balansere flere reaksjoner – det blir lettere med trening!`,
    },
  ],
  exercises: [], // Oppgavene er embedded i content
};

// ============================================================================
// KAPITTEL 2.6: Syrer og baser
// ============================================================================

export const CHAPTER_NAT10_2_6: TextbookChapter = {
  id: 'naturfag-10-2-6',
  courseId: 'naturfag-10',
  chapterNumber: '2.6',
  title: 'Syrer og baser',
  description: 'Lær om syrer, baser, pH-skalaen og nøytraliseringsreaksjoner.',
  estimatedMinutes: 35,
  competenceGoals: [
    'forklare hvordan noen stoffer kan endre egenskapene til andre stoffer og gi eksempler på hvordan dette kan utnyttes',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'nat10-2-6-intro',
      type: 'text',
      content: `## Syrer og baser

Sitron smaker surt. Såpe føles glatt og såpete. Noen stoffer kan endre fargene på indikatorer. Hva har alle disse til felles?

De er eksempler på **syrer** og **baser** – to viktige grupper av stoffer som spiller en stor rolle både i naturen og i hverdagen vår.

I dette kapitlet lærer du:
- Hva syrer og baser er
- pH-skalaen og hvordan den måler surhet
- Indikatorer som viser om noe er surt eller basisk
- Nøytraliseringsreaksjoner
- Syrer og baser i hverdagen og i kroppen`,
    },

    // ========== HVA ER EN SYRE? ==========
    {
      id: 'nat10-2-6-syrer',
      type: 'text',
      content: `## Hva er en syre?

En **syre** er et stoff som kan gi fra seg **hydrogenioner (H⁺)** når det løses i vann.

### Egenskaper ved syrer

**Kjemiske egenskaper:**
- Gir fra seg H⁺-ioner i vandig løsning
- Reagerer med baser og danner salt + vann (nøytralisering)
- Reagerer med metaller og danner hydrogen (H₂-gass)

**Fysiske egenskaper:**
- **Sur smak** (sitronsyre i sitron, eddiksyre i eddik)
- Farger lakmuspapir **rødt**
- pH **under 7**
- Kan være etsende (sterke syrer som saltsyre og svovelsyre)

### Vanlige syrer

**Svake syrer (tryggere):**
- **Sitronsyre (C₆H₈O₇):** I sitrusfrukter
- **Eddiksyre (CH₃COOH):** I eddik
- **Karbonsyre (H₂CO₃):** I brus

**Sterke syrer (farlige, etsende):**
- **Saltsyre (HCl):** I magesekken og i rengjøring
- **Svovelsyre (H₂SO₄):** I bilbatterier
- **Salpetersyre (HNO₃):** I industrien`,
    },

    // ========== DEFINISJON: SYRE ==========
    {
      id: 'nat10-2-6-def-syre',
      type: 'definition',
      title: 'Syre',
      content: `**Syre:** Et stoff som gir fra seg hydrogenioner (H⁺) når det løses i vann.

**Egenskaper:**
- Sur smak
- pH < 7
- Farger lakmus rødt
- Reagerer med metaller og baser

**Eksempler:**
- Sitronsyre (sitron), Eddiksyre (eddik), Saltsyre (HCl), Svovelsyre (H₂SO₄)`,
    },

    // ========== HVA ER EN BASE? ==========
    {
      id: 'nat10-2-6-baser',
      type: 'text',
      content: `## Hva er en base?

En **base** er et stoff som kan ta opp **hydrogenioner (H⁺)** når det løses i vann.

### Egenskaper ved baser

**Kjemiske egenskaper:**
- Tar opp H⁺-ioner i vandig løsning
- Reagerer med syrer og danner salt + vann (nøytralisering)
- Mange baser inneholder hydroxidioner (OH⁻)

**Fysiske egenskaper:**
- **Såpelignende, glatt følelse** (såpe er basisk)
- Farger lakmuspapir **blått**
- pH **over 7**
- Kan være etsende (sterke baser som natriumhydroksid)

### Vanlige baser

**Svake baser:**
- **Ammoniakk (NH₃):** I rengjøringsmidler
- **Bakepulver (natriumhydrogenkarbonat, NaHCO₃):** I baking

**Sterke baser (farlige, etsende):**
- **Natriumhydroksid (NaOH):** Lut, brukes i såpeproduksjon og avløpsrens
- **Kalsiumhydroksid (Ca(OH)₂):** I mørtel og kalkstein

### Base vs. Basisk løsning

- **Base:** Stoffet selv (f.eks. NaOH)
- **Basisk løsning:** En løsning som inneholder en base (f.eks. såpevann)`,
    },

    // ========== DEFINISJON: BASE ==========
    {
      id: 'nat10-2-6-def-base',
      type: 'definition',
      title: 'Base',
      content: `**Base:** Et stoff som tar opp hydrogenioner (H⁺) når det løses i vann.

**Egenskaper:**
- Såpelignende, glatt følelse
- pH > 7
- Farger lakmus blått
- Reagerer med syrer (nøytralisering)

**Eksempler:**
- Natriumhydroksid (NaOH/lut), Ammoniakk (NH₃), Bakepulver (NaHCO₃)`,
    },

    // ========== PH-SKALAEN ==========
    {
      id: 'nat10-2-6-ph-skalaen',
      type: 'text',
      content: `## pH-skalaen

pH-skalaen er et måleinstrument for å beskrive hvor sur eller basisk en løsning er.

### Hva er pH?

**pH** står for "potentia hydrogenii" (hydrogenionkonsentrasjon).

pH-skalaen går fra **0 til 14**:

- **pH < 7:** Sur løsning (mange H⁺-ioner)
- **pH = 7:** Nøytral løsning (rent vann)
- **pH > 7:** Basisk løsning (få H⁺-ioner)

### pH-skalaen i detalj

| pH | Type | Eksempler |
|----|------|-----------|
| 0-2 | Sterkt sur | Batterietsyre, magesaft |
| 3-4 | Sur | Sitronsaft, eddik, brus |
| 5-6 | Svakt sur | Kaffe, regn |
| 7 | Nøytral | Rent vann |
| 8-9 | Svakt basisk | Såpevann, bakepulverløsning |
| 10-11 | Basisk | Ammoniakk |
| 12-14 | Sterkt basisk | Lut, avløpsrens |

### Hvor kommer pH-verdiene fra?

pH måler **konsentrasjonen av H⁺-ioner** i løsningen:

- **Lav pH (0-6):** Mange H⁺-ioner = sur
- **pH 7:** Like mange H⁺ og OH⁻-ioner = nøytral
- **Høy pH (8-14):** Få H⁺-ioner, mange OH⁻-ioner = basisk

### Hvorfor er pH viktig?

- **Kroppen:** Blodet har pH ~7.4 (litt basisk). Hvis pH endres mye, kan det være farlig.
- **Naturen:** Fisk trenger riktig pH i vannet (vanligvis 6-8).
- **Jordsmonn:** Planter vokser best ved bestemt pH.
- **Maten:** pH påvirker smak og holdbarheten.`,
    },

    // ========== DEFINISJON: PH ==========
    {
      id: 'nat10-2-6-def-ph',
      type: 'definition',
      title: 'pH-skalaen',
      content: `**pH:** Et tall fra 0 til 14 som angir hvor sur eller basisk en løsning er.

**pH-skalaen:**
- **pH 0-6:** Sur (mange H⁺-ioner)
- **pH 7:** Nøytral (like mange H⁺ og OH⁻)
- **pH 8-14:** Basisk (få H⁺-ioner)

**Huskeregel:**
- **L**av pH = su**r** (pH under 7)
- **H**øy pH = **b**asisk (pH over 7)`,
    },

    // ========== INDIKATORER ==========
    {
      id: 'nat10-2-6-indikatorer',
      type: 'text',
      content: `## Indikatorer

En **indikator** er et stoff som skifter farge avhengig av om løsningen er sur eller basisk.

### Lakmus

**Lakmuspapir** er den vanligste indikatoren:

- **Rødt lakmus:** Blir **blått** i basisk løsning
- **Blått lakmus:** Blir **rødt** i sur løsning
- **Nøytral løsning:** Ingen fargeendring

**Huskeregel:**
- "Surt gjør blått til rødt"
- "Basisk gjør rødt til blått"

### BTB (Bromtymolblått)

BTB skifter farge mellom gult, grønt og blått:

- **Gult:** Sur (pH < 6)
- **Grønt:** Nøytral (pH ~7)
- **Blått:** Basisk (pH > 8)

### Universalindikator

Universalindikator viser mange farger for forskjellige pH-verdier:

| pH | Farge |
|----|-------|
| 0-3 | Rød |
| 4-5 | Oransje |
| 6 | Gul |
| 7 | Grønn |
| 8-9 | Blå |
| 10-14 | Fiolett |

### Naturlige indikatorer

Noen planter inneholder naturlige indikatorer:

- **Rødkål:** Blir rød i syre, blå/grønn i base
- **Blåbær:** Endrer farge
- **Rødløk:** Kan brukes som indikator`,
    },

    // ========== DEFINISJON: INDIKATOR ==========
    {
      id: 'nat10-2-6-def-indikator',
      type: 'definition',
      title: 'Indikator',
      content: `**Indikator:** Et stoff som skifter farge avhengig av pH i løsningen.

**Vanlige indikatorer:**

**Lakmus:**
- Rødt lakmus → blått i base
- Blått lakmus → rødt i syre

**BTB (Bromtymolblått):**
- Gult (sur), Grønt (nøytral), Blått (basisk)

**Universalindikator:**
- Viser mange farger for ulike pH-verdier (rød → oransje → gul → grønn → blå → fiolett)`,
    },

    // ========== NØYTRALISERING ==========
    {
      id: 'nat10-2-6-noytralisering',
      type: 'text',
      content: `## Nøytralisering

Når en syre og en base blandes, reagerer de med hverandre og danner **salt** og **vann**. Dette kalles en **nøytraliseringsreaksjon**.

### Hva er nøytralisering?

**Nøytralisering:** En reaksjon der syre + base → salt + vann

### Den generelle reaksjonen

**Syre + Base → Salt + Vann**

eller med kjemiske formler:

**H⁺ (fra syre) + OH⁻ (fra base) → H₂O (vann)**

### Eksempel: Saltsyre + Natriumhydroksid

**HCl + NaOH → NaCl + H₂O**

- **HCl** (saltsyre) = syre
- **NaOH** (natriumhydroksid/lut) = base
- **NaCl** (natriumklorid/bordsalt) = salt
- **H₂O** (vann) = vann

### Hva skjer under nøytralisering?

1. **Syren gir fra seg H⁺-ioner**
2. **Basen gir fra seg OH⁻-ioner** (eller tar opp H⁺)
3. **H⁺ og OH⁻ reagerer og danner vann (H₂O)**
4. De resterende ionene danner **salt**

### pH under nøytralisering

Når syre og base blandes i riktige mengder:
- pH starter surt (< 7) eller basisk (> 7)
- pH beveger seg mot **7 (nøytral)**
- Hvis like mye syre og base: pH = 7

### Praktiske anvendelser av nøytralisering

**Helsørge:**
- Svelgetabletter (basiske) nøytraliserer magesyre (sur)

**Landbruk:**
- Kalking av sur jord (base nøytraliserer syre i jorda)

**Miljø:**
- Nøytralisering av sure utslipp

**Førstehjelp:**
- Nøytralisere kjemiske brannskader (obs: krever kunnskap!)`,
    },

    // ========== DEFINISJON: NØYTRALISERING ==========
    {
      id: 'nat10-2-6-def-noytralisering',
      type: 'definition',
      title: 'Nøytralisering',
      content: `**Nøytralisering:** En kjemisk reaksjon der en syre og en base reagerer og danner salt og vann.

**Generell ligning:**

Syre + Base → Salt + Vann

eller:

H⁺ + OH⁻ → H₂O

**Eksempel:**

HCl + NaOH → NaCl + H₂O

(Saltsyre + Lut → Bordsalt + Vann)

**Resultat:**
pH går mot 7 (nøytral) når riktige mengder blandes.`,
    },

    // ========== SYRER OG BASER I HVERDAGEN ==========
    {
      id: 'nat10-2-6-hverdagen',
      type: 'text',
      content: `## Syrer og baser i hverdagen

Syrer og baser finnes overalt rundt oss – i mat, rengjøringsmidler, naturen og i kroppen vår.

### Mat og drikke

**Sure matvarer:**
- **Sitrusfrukter** (sitron, appelsin): sitronsyre
- **Eddik:** eddiksyre
- **Brus:** karbonsyre og sitronsyre
- **Yoghurt:** melkesyre
- **Epler:** eplsyre

**Basiske matvarer:**
- **Egg (eggehvite):** svakt basisk
- **Bakepulver:** natriumhydrogenkarbonat (base)

### Kroppen

**Magesyren:**
- pH ~1.5-2 (svært sur!)
- Består av saltsyre (HCl)
- Dreper bakterier i maten
- Hjelper med fordøyelsen

**Blod:**
- pH ~7.4 (litt basisk)
- Må holdes konstant – avvik kan være farlig!

**Spytt:**
- pH ~6.5-7.5
- Litt basisk for å beskytte tennene mot syre

### Rengjøringsmidler

**Sure rengjøringsmidler:**
- **Kalkfjerner:** Fjerner kalk (basisk) med syre
- **Toalettrengjøring:** Ofte sur

**Basiske rengjøringsmidler:**
- **Såpe:** Basisk, pH ~9-10
- **Avløpsrens:** Sterkt basisk (lut)
- **Ovnsrengjøring:** Sterkt basisk

### Naturen

**Regn:**
- Naturlig regn: pH ~5.6 (litt sur pga. CO₂ i lufta)
- **Sur nedbør:** pH < 5 (forurensning fra svovel- og nitrogenoksider)

**Hav:**
- pH ~8.1 (litt basisk)
- pH synker pga. CO₂-opptak (havforsuring)

**Jord:**
- Varierer fra sur til basisk
- Påvirker hvilke planter som vokser`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE - SYRE ==========
    {
      id: 'nat10-2-6-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-6-ex-1',
        number: '2.6.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er kjennetegnet på en syre?',
        options: [
          {
            id: 'a',
            text: 'Gir fra seg H⁺-ioner i vann',
            isCorrect: true,
            feedback: 'Riktig! En syre er et stoff som gir fra seg hydrogenioner (H⁺) når det løses i vann.',
          },
          {
            id: 'b',
            text: 'Tar opp H⁺-ioner i vann',
            isCorrect: false,
            feedback: 'Feil. Dette er kjennetegnet på en base, ikke en syre.',
          },
          {
            id: 'c',
            text: 'Har pH over 7',
            isCorrect: false,
            feedback: 'Feil. Syrer har pH under 7. pH over 7 er basisk.',
          },
          {
            id: 'd',
            text: 'Farger lakmus blått',
            isCorrect: false,
            feedback: 'Feil. Syrer farger blått lakmus rødt. Baser farger lakmus blått.',
          },
        ],
        solution: 'Alternativ A er riktig. Syrer gir fra seg H⁺-ioner, har pH under 7, og farger lakmus rødt.',
      },
    },

    // ========== OPPGAVE 2: MULTIPLE CHOICE - PH ==========
    {
      id: 'nat10-2-6-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-6-ex-2',
        number: '2.6.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'En løsning har pH 10. Hva slags løsning er dette?',
        options: [
          {
            id: 'a',
            text: 'Sur',
            isCorrect: false,
            feedback: 'Feil. Sure løsninger har pH under 7.',
          },
          {
            id: 'b',
            text: 'Nøytral',
            isCorrect: false,
            feedback: 'Feil. Nøytrale løsninger har pH = 7.',
          },
          {
            id: 'c',
            text: 'Basisk',
            isCorrect: true,
            feedback: 'Riktig! pH over 7 betyr at løsningen er basisk. pH 10 er basisk.',
          },
          {
            id: 'd',
            text: 'Kan ikke avgjøres',
            isCorrect: false,
            feedback: 'Feil. pH-verdien forteller oss tydelig at løsningen er basisk (pH > 7).',
          },
        ],
        solution: 'Alternativ C er riktig. pH over 7 er basisk. pH 10 er en basisk løsning.',
      },
    },

    // ========== OPPGAVE 3: MULTIPLE CHOICE - LAKMUS ==========
    {
      id: 'nat10-2-6-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-6-ex-3',
        number: '2.6.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Du dypper blått lakmuspapir i en løsning, og det blir rødt. Hva sier dette om løsningen?',
        options: [
          {
            id: 'a',
            text: 'Løsningen er sur',
            isCorrect: true,
            feedback: 'Riktig! Blått lakmus blir rødt i sur løsning.',
          },
          {
            id: 'b',
            text: 'Løsningen er basisk',
            isCorrect: false,
            feedback: 'Feil. I basisk løsning ville rødt lakmus bli blått, ikke omvendt.',
          },
          {
            id: 'c',
            text: 'Løsningen er nøytral',
            isCorrect: false,
            feedback: 'Feil. I nøytral løsning ville lakmusen ikke skifte farge.',
          },
          {
            id: 'd',
            text: 'Løsningen inneholder salt',
            isCorrect: false,
            feedback: 'Feil. Fargeendringen viser at løsningen er sur, ikke om den inneholder salt.',
          },
        ],
        solution: 'Alternativ A er riktig. Blått lakmus → rødt = sur løsning. Huskeregel: "Surt gjør blått til rødt".',
      },
    },

    // ========== OPPGAVE 4: IDENTIFISER SYRER OG BASER ==========
    {
      id: 'nat10-2-6-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-6-ex-4',
        number: '2.6.4',
        type: 'classic',
        difficulty: 'medium',
        task: `Du har følgende stoffer:
- Sitron (pH 2)
- Såpevann (pH 9)
- Rent vann (pH 7)
- Eddik (pH 3)
- Ammoniakk (pH 11)

a) Hvilke stoffer er syrer?
b) Hvilke stoffer er baser?
c) Hvilket stoff er nøytralt?
d) Hvilket stoff er mest basisk?`,
        multipleChoiceOptions: [
          'a) Sitron, eddik; b) Såpevann, ammoniakk; c) Rent vann; d) Ammoniakk',
          'a) Sitron, eddik; b) Såpevann, ammoniakk; c) Rent vann; d) Såpevann',
          'a) Sitron, eddik, rent vann; b) Såpevann, ammoniakk; c) Ingen; d) Ammoniakk',
          'a) Sitron; b) Ammoniakk; c) Eddik, rent vann; d) Såpevann',
        ],
        solution: `**a) Syrer (pH < 7):**

- **Sitron (pH 2)** – sur
- **Eddik (pH 3)** – sur

**Forklaring:** Syrer har pH under 7.

---

**b) Baser (pH > 7):**

- **Såpevann (pH 9)** – basisk
- **Ammoniakk (pH 11)** – basisk

**Forklaring:** Baser har pH over 7.

---

**c) Nøytralt stoff (pH = 7):**

- **Rent vann (pH 7)** – nøytral

**Forklaring:** Nøytrale stoffer har pH = 7.

---

**d) Mest basisk:**

- **Ammoniakk (pH 11)**

**Forklaring:** Jo høyere pH over 7, jo mer basisk. pH 11 er høyere enn pH 9, så ammoniakk er mest basisk.

---

**Oppsummering:**

| Stoff | pH | Type |
|-------|----|----- |
| Sitron | 2 | Syre (sterk) |
| Eddik | 3 | Syre |
| Rent vann | 7 | Nøytral |
| Såpevann | 9 | Base |
| Ammoniakk | 11 | Base (sterk) |`,
      },
    },

    // ========== OPPGAVE 5: PH-ENDRINGER ==========
    {
      id: 'nat10-2-6-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-6-ex-5',
        number: '2.6.5',
        type: 'classic',
        difficulty: 'medium',
        task: `Du har en løsning med pH 3.

a) Er løsningen sur, basisk eller nøytral?
b) Hva skjer med pH hvis du tilsetter litt base?
c) Hva må pH bli for at løsningen skal være nøytral?
d) Hvis du tilsetter mer syre i stedet, hvordan endres pH?`,
        multipleChoiceOptions: [
          'a) Sur; b) pH øker; c) pH = 7; d) pH synker',
          'a) Basisk; b) pH synker; c) pH = 7; d) pH øker',
          'a) Sur; b) pH synker; c) pH = 0; d) pH øker',
          'a) Nøytral; b) pH øker; c) pH = 7; d) pH synker',
        ],
        solution: `**a) Type løsning:**

**Sur**

**Forklaring:** pH 3 er under 7, så løsningen er sur.

---

**b) Hva skjer ved tilsetning av base:**

**pH øker (går mot 7 eller høyere)**

**Forklaring:**
- Basen nøytraliserer syren
- H⁺-ioner fra syren reagerer med OH⁻-ioner fra basen
- Færre H⁺-ioner → pH øker
- Løsningen blir mindre sur

---

**c) pH for nøytral løsning:**

**pH = 7**

**Forklaring:** Nøytrale løsninger har pH = 7.

For å oppnå dette må du tilsette nok base til at alle overskytende H⁺-ioner fra syren er nøytralisert.

---

**d) Ved tilsetning av mer syre:**

**pH synker (går mot 0)**

**Forklaring:**
- Mer syre = flere H⁺-ioner
- Jo flere H⁺-ioner, jo lavere pH
- Løsningen blir surere
- pH kan gå fra 3 mot 2, 1, eller lavere

---

**Oppsummering:**

- **Tilsett base:** pH øker (mot 7 og høyere)
- **Tilsett syre:** pH synker (mot 0)
- **Nøytral:** pH = 7`,
      },
    },

    // ========== OPPGAVE 6: NØYTRALISERING ==========
    {
      id: 'nat10-2-6-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-6-ex-6',
        number: '2.6.6',
        type: 'classic',
        difficulty: 'medium',
        task: `Du blander saltsyre (HCl) med natriumhydroksid (NaOH).

Kjemisk ligning: HCl + NaOH → NaCl + H₂O

a) Hva kalles denne typen reaksjon?
b) Hva er produktene (hva dannes)?
c) Hvis du starter med pH 2 (sur) og tilsetter nok base, hva blir pH?
d) Hva brukes denne typen reaksjon til i hverdagen?`,
        multipleChoiceOptions: [
          'a) Nøytralisering; b) NaCl + H₂O; c) pH = 7; d) Svelgetabletter, kalking av jord',
          'a) Oksidasjon; b) NaCl + H₂O; c) pH = 7; d) Svelgetabletter, kalking av jord',
          'a) Nøytralisering; b) Na + Cl₂; c) pH = 14; d) Batterier',
          'a) Nøytralisering; b) NaCl + H₂O; c) pH = 0; d) Maling, liming',
        ],
        solution: `**a) Type reaksjon:**

**Nøytralisering** (eller nøytraliseringsreaksjon)

**Forklaring:** Når en syre (HCl) reagerer med en base (NaOH), kalles det nøytralisering.

---

**b) Produktene:**

**NaCl (natriumklorid/bordsalt) + H₂O (vann)**

**Forklaring:**
- **NaCl** er et salt (dannes fra Na⁺ og Cl⁻)
- **H₂O** er vann (dannes fra H⁺ og OH⁻)

**Generell regel:**
Syre + Base → Salt + Vann

---

**c) Sluttlig pH:**

**pH = 7 (nøytral)**

**Forklaring:**
- Starter med pH 2 (sur, mange H⁺-ioner)
- Tilsetter base (OH⁻-ioner)
- H⁺ + OH⁻ → H₂O
- Når like mye syre og base er blandet, er alle H⁺ og OH⁻ brukt opp
- Løsningen blir nøytral: pH = 7

---

**d) Anvendelser i hverdagen:**

**Eksempler:**

1. **Helsørge:**
   - Svelgetabletter (basiske) nøytraliserer overskudd av magesyre

2. **Landbruk:**
   - Kalking av sur jord (base nøytraliserer syre i jorda)

3. **Akvarier:**
   - Justere pH i vannet for at fisk skal trives

4. **Industri:**
   - Nøytralisere sure avfallsstoffer før utslipp

5. **Førstehjelp:**
   - Ved kjemiske brannskader (krever kunnskap!)

---

**Oppsummering:**

Nøytralisering: HCl + NaOH → NaCl + H₂O
- Syre + Base → Salt + Vann
- pH går mot 7`,
      },
    },

    // ========== OPPGAVE 7: INDIKATORER I PRAKSIS ==========
    {
      id: 'nat10-2-6-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-6-ex-7',
        number: '2.6.7',
        type: 'classic',
        difficulty: 'medium',
        task: `Du har tre ukjente løsninger (A, B og C) og skal finne ut om de er sure, basiske eller nøytrale.

Du bruker blått lakmuspapir:
- Løsning A: Lakmusen blir rød
- Løsning B: Lakmusen forblir blå
- Løsning C: Lakmusen forblir blå

Så bruker du rødt lakmuspapir:
- Løsning A: Lakmusen forblir rød
- Løsning B: Lakmusen blir blå
- Løsning C: Lakmusen forblir rød

a) Hvilken løsning er sur?
b) Hvilken løsning er basisk?
c) Hvilken løsning er nøytral?
d) Forklar hvordan lakmuspapir hjelper deg å identifisere syrer og baser.`,
        multipleChoiceOptions: [
          'a) A; b) B; c) C; d) Blått lakmus blir rødt i syre, rødt lakmus blir blått i base',
          'a) B; b) A; c) C; d) Blått lakmus blir rødt i syre, rødt lakmus blir blått i base',
          'a) A; b) C; c) B; d) Begge lakmus-typer endrer farge i syrer',
          'a) C; b) B; c) A; d) Rødt lakmus blir rødt i syre',
        ],
        solution: `**a) Sur løsning:**

**Løsning A**

**Forklaring:**
- Blått lakmus → rød (kjennetegn på syre!)
- Rødt lakmus → forblir rød (ingen endring)
- Konklusjon: Løsning A er sur

---

**b) Basisk løsning:**

**Løsning B**

**Forklaring:**
- Blått lakmus → forblir blå (ingen endring)
- Rødt lakmus → blå (kjennetegn på base!)
- Konklusjon: Løsning B er basisk

---

**c) Nøytral løsning:**

**Løsning C**

**Forklaring:**
- Blått lakmus → forblir blå (ingen endring)
- Rødt lakmus → forblir rød (ingen endring)
- Ingen fargeendring i noen av lakmustestene
- Konklusjon: Løsning C er nøytral

---

**d) Hvordan lakmus identifiserer syrer og baser:**

**Lakmus skifter farge i sure og basiske løsninger:**

**Blått lakmus:**
- Blir **rødt** i **sur** løsning
- Forblir blått i basisk eller nøytral løsning
- **Brukes til å teste for syrer**

**Rødt lakmus:**
- Blir **blått** i **basisk** løsning
- Forblir rødt i sur eller nøytral løsning
- **Brukes til å teste for baser**

**Huskeregel:**
- "Surt gjør blått til rødt"
- "Basisk gjør rødt til blått"

**For å være sikker:** Bruk både blått og rødt lakmus!

---

**Oppsummering:**

| Løsning | Blått lakmus | Rødt lakmus | Type |
|---------|--------------|-------------|------|
| A | Blå → Rød | Rød → Rød | Sur |
| B | Blå → Blå | Rød → Blå | Basisk |
| C | Blå → Blå | Rød → Rød | Nøytral |`,
      },
    },

    // ========== OPPGAVE 8: PRAKTISK ANVENDELSE ==========
    {
      id: 'nat10-2-6-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-6-ex-8',
        number: '2.6.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En bonde har oppdaget at jorden på åkeren hans er for sur (pH 5). Dette gjør at plantene ikke vokser bra.

a) Hvorfor er det et problem at jorden er for sur?
b) Hva kan bonden gjøre for å fikse problemet?
c) Forklar hva som skjer kjemisk når bonden løser problemet.
d) Hvis bonden bruker kalk (kalsiumhydroksid, Ca(OH)₂), skriv en forenklet ligning for hva som skjer.`,
        multipleChoiceOptions: [
          'a) Næringsstoffer utilgjengelige, giftige stoffer løses; b) Kalking; c) Nøytralisering; d) Ca(OH)₂ + 2H⁺ → Ca²⁺ + 2H₂O',
          'a) Plantene får for mye vann; b) Drenering; c) Fordamping; d) H₂O → H₂ + O₂',
          'a) Næringsstoffer utilgjengelige; b) Gjødsling med syre; c) Oksidasjon; d) CaO + H₂O → Ca(OH)₂',
          'a) For høy pH; b) Tilsette syre; c) Reduksjon; d) Ca(OH)₂ → CaO + H₂O',
        ],
        solution: `**a) Hvorfor er sur jord et problem:**

**Årsaker:**

1. **Næringsstoffer blir utilgjengelige:**
   - Viktige næringsstoffer (nitrogen, fosfor, kalium) låses i jorda ved lav pH
   - Plantene kan ikke ta dem opp

2. **Giftige stoffer løses ut:**
   - Aluminium (Al) blir løselig ved lav pH
   - Aluminium er giftig for plantene

3. **Mikroorganismer påvirkes:**
   - Nyttige bakterier i jorda trives dårlig i sur jord
   - Nedbryting av organisk materiale går saktere

4. **Plantevekst hemmes:**
   - Røtter vokser dårligere
   - Planter blir mindre og gir lavere avling

---

**b) Løsning:**

**Kalking** (tilsetning av kalk eller andre basiske stoffer)

**Bonden kan:**
- Tilsette **kalk (CaCO₃)** eller **kalsiumhydroksid (Ca(OH)₂)**
- Tilsette **dolomitt** (inneholder kalsium og magnesium)
- Tilsette **trekull** (svakt basisk)

**Resultat:**
- pH øker (går mot 6-7)
- Jorden blir mindre sur
- Plantene kan vokse bedre

---

**c) Hva skjer kjemisk:**

**Nøytralisering av syre i jorda:**

Jorda inneholder H⁺-ioner (fra sure forbindelser). Når basen tilsettes:

1. **Basen (Ca(OH)₂) løses i jordvann**
   - Ca(OH)₂ → Ca²⁺ + 2OH⁻

2. **OH⁻-ioner reagerer med H⁺-ioner i jorda**
   - H⁺ + OH⁻ → H₂O

3. **H⁺-ioner fjernes fra jorda**
   - Færre H⁺-ioner = høyere pH
   - Jorda blir mindre sur (pH øker)

4. **Nøytraliseringsreaksjon:**
   - Syre + Base → Salt + Vann

---

**d) Kjemisk ligning med kalk:**

**Forenklet:**

Ca(OH)₂ + 2H⁺ → Ca²⁺ + 2H₂O

eller hvis jorda inneholder en syre (f.eks. H₂SO₄):

**Ca(OH)₂ + H₂SO₄ → CaSO₄ + 2H₂O**

**Forklaring:**
- **Ca(OH)₂** (kalsiumhydroksid) er basen
- **H₂SO₄** (svovelsyre) er syren i jorda
- **CaSO₄** (kalsiumsulfat) er saltet som dannes
- **2H₂O** (vann) dannes

**Generell reaksjon:**

Base + Syre → Salt + Vann

Dette er en **nøytraliseringsreaksjon**.

---

**Oppsummering:**

- **Problem:** Sur jord (pH 5) → planter vokser dårlig
- **Løsning:** Kalking (tilsette base)
- **Kjemi:** Nøytralisering (H⁺ + OH⁻ → H₂O)
- **Resultat:** pH øker mot 6-7, plantene vokser bedre

Dette er et praktisk eksempel på hvordan nøytralisering brukes i landbruket!`,
      },
    },

    // ========== EKSTRA EKSEMPEL: PH OG KONSENTRASJON ==========
    {
      id: 'nat10-2-6-example-extra-1',
      type: 'example',
      title: 'Eksempel: Forstå pH-skalaen og surhet',
      problem: `Du har tre løsninger:
- Løsning A: pH 2
- Løsning B: pH 4
- Løsning C: pH 6

a) Hvilken løsning er mest sur?
b) Hvor mange ganger surere er løsning A enn løsning B?
c) Hva skjer med pH hvis du fortynner løsning A med mye vann?`,
      solution: `**a) Mest sur:**

**Løsning A (pH 2)** er mest sur.

Jo **lavere pH**, jo **surere** er løsningen.

---

**b) Hvor mange ganger surere:**

pH-skalaen er **logaritmisk**. For hvert steg i pH er forskjellen **10 ganger**.

- Fra pH 4 til pH 3: 10 ganger surere
- Fra pH 3 til pH 2: 10 ganger surere
- Totalt fra pH 4 til pH 2: 10 × 10 = **100 ganger surere**

**Svar:** Løsning A er **100 ganger surere** enn løsning B!

---

**c) Fortynning med vann:**

Når du fortynner en sur løsning med vann:
- Konsentrasjonen av H⁺-ioner **synker**
- pH **øker** (beveger seg mot 7)
- Kan nærme seg pH 7 (nøytral) med nok vann
- Kan aldri bli over pH 7 bare ved fortynning`,
    },

    // ========== EKSTRA EKSEMPEL: NØYTRALISERINGSREAKSJON ==========
    {
      id: 'nat10-2-6-example-extra-2',
      type: 'example',
      title: 'Eksempel: Nøytraliseringsreaksjon med svovelsyre',
      problem: `Svovelsyre (H₂SO₄) reagerer med kaliumhydroksid (KOH) i en nøytraliseringsreaksjon.

a) Skriv den balanserte reaksjonslikningen.
b) Hva er produktene?
c) Hvorfor trengs det 2 mol KOH for hvert mol H₂SO₄?`,
      solution: `**a) Balansert reaksjonslikning:**

H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O

---

**b) Produktene:**

- **K₂SO₄** (kaliumsulfat) – et salt
- **H₂O** (vann)

Generell regel: Syre + Base → Salt + Vann

---

**c) Hvorfor 2 mol KOH?**

Svovelsyre (H₂SO₄) er en **toprotisk syre** – hvert molekyl gir fra seg **2 H⁺-ioner**:

H₂SO₄ → 2H⁺ + SO₄²⁻

KOH gir fra seg **1 OH⁻-ion** per molekyl:

KOH → K⁺ + OH⁻

For å nøytralisere begge H⁺: 2H⁺ + 2OH⁻ → 2H₂O

Derfor trengs **2 mol KOH** per mol H₂SO₄.`,
    },

    // ========== EKSTRA EKSEMPEL: SYRER OG BASER I KROPPEN ==========
    {
      id: 'nat10-2-6-example-extra-3',
      type: 'example',
      title: 'Eksempel: pH i kroppen – hvorfor er det viktig?',
      problem: `Blodet har pH ca. 7,4. Magesaften har pH ca. 1,5.

a) Er blodet surt, nøytralt eller basisk?
b) Er magesaften surt, nøytralt eller basisk?
c) Hvor mange ganger surere er magesaften enn blodet?
d) Hvorfor er det viktig at blodets pH holdes konstant?`,
      solution: `**a) Blodet:**

pH 7,4 er over 7, derfor er blodet **svakt basisk**.

---

**b) Magesaften:**

pH 1,5 er langt under 7, derfor er magesaften **sterkt sur**. Den inneholder saltsyre (HCl).

---

**c) Hvor mye surere:**

Forskjellen: 7,4 - 1,5 = ca. 6 pH-enheter

For hvert pH-steg: 10 ganger surere

10⁶ = **ca. 1 000 000 ganger surere!**

---

**d) Hvorfor konstant blod-pH er viktig:**

Blodet **må** holde pH mellom 7,35 og 7,45:

**Acidose (pH < 7,35):** Enzymer fungerer dårlig, hjertet slår uregelmessig, kan føre til koma.

**Alkalose (pH > 7,45):** Muskelkramper, svimmelhet, kan være livstruende.

**Kroppen regulerer pH med:**
- Buffersystemer i blodet
- Lungene (regulerer CO₂)
- Nyrene (skiller ut overskudd av syre/base)`,
    },

    // ========== EKSTRA OPPGAVE: MULTIPLE CHOICE - NØYTRALISERING ==========
    {
      id: 'nat10-2-6-oppg-extra-1',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-6-oppg-extra-1',
        number: '2.6.9',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva dannes alltid i en nøytraliseringsreaksjon?',
        options: [
          { id: 'a', text: 'Hydrogen og oksygen', isCorrect: false },
          { id: 'b', text: 'Salt og vann', isCorrect: true },
          { id: 'c', text: 'Karbondioksid og vann', isCorrect: false },
          { id: 'd', text: 'Bare vann', isCorrect: false },
        ],
        solution: `**Riktig svar: Salt og vann**

Syre + Base → Salt + Vann

H⁺ (fra syre) + OH⁻ (fra base) → H₂O

De øvrige ionene danner saltet.

Eksempler:
- HCl + NaOH → NaCl + H₂O
- H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O`,
      },
    },

    // ========== EKSTRA OPPGAVE: MULTIPLE CHOICE - STERK VS SVAK SYRE ==========
    {
      id: 'nat10-2-6-oppg-extra-2',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-6-oppg-extra-2',
        number: '2.6.10',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av disse syrene er en sterk syre?',
        options: [
          { id: 'a', text: 'Sitronsyre (i sitron)', isCorrect: false },
          { id: 'b', text: 'Eddiksyre (i eddik)', isCorrect: false },
          { id: 'c', text: 'Saltsyre (HCl)', isCorrect: true },
          { id: 'd', text: 'Karbonsyre (i brus)', isCorrect: false },
        ],
        solution: `**Riktig svar: Saltsyre (HCl)**

**Sterke syrer** gir fra seg nesten alle H⁺-ioner i vann: HCl, H₂SO₄, HNO₃

**Svake syrer** gir bare fra seg noen H⁺-ioner: Sitronsyre, Eddiksyre, Karbonsyre

"Sterk/svak" handler om spalting i vann, ikke konsentrasjon.`,
      },
    },

    // ========== EKSTRA OPPGAVE: KLASSISK - PH-VERDIER ==========
    {
      id: 'nat10-2-6-oppg-extra-3',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-6-oppg-extra-3',
        number: '2.6.11',
        type: 'classic',
        difficulty: 'medium',
        task: `Plasser disse stoffene i rekkefølge fra mest surt til mest basisk:

- Blod (pH 7,4)
- Magesaft (pH 1,5)
- Rent vann (pH 7)
- Ammoniakk (pH 11)
- Sitronsaft (pH 2,5)
- Såpevann (pH 9)`,
        solution: `**Rekkefølge fra mest sur til mest basisk:**

1. Magesaft (pH 1,5) – sterkt sur
2. Sitronsaft (pH 2,5) – sur
3. Rent vann (pH 7) – nøytral
4. Blod (pH 7,4) – svakt basisk
5. Såpevann (pH 9) – basisk
6. Ammoniakk (pH 11) – sterkt basisk

**Sure (pH < 7):** Magesaft, Sitronsaft
**Nøytral (pH = 7):** Rent vann
**Basiske (pH > 7):** Blod, Såpevann, Ammoniakk`,
      },
    },

    // ========== EKSTRA OPPGAVE: KLASSISK - SYRE + METALL ==========
    {
      id: 'nat10-2-6-oppg-extra-4',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-6-oppg-extra-4',
        number: '2.6.12',
        type: 'classic',
        difficulty: 'medium',
        task: `Når sink (Zn) reagerer med saltsyre (HCl), dannes sinkklorid (ZnCl₂) og hydrogengass (H₂).

a) Skriv den balanserte reaksjonslikningen.
b) Hva observerer du under reaksjonen?
c) Hvordan kan du teste om gassen er hydrogen?`,
        solution: `**a) Balansert likning:**

Zn + 2HCl → ZnCl₂ + H₂

Sjekk: Zn=1, H=2, Cl=2 på begge sider ✓

---

**b) Observasjoner:**
- Bobling (H₂-gass dannes)
- Sinken løses opp gradvis
- Temperaturen øker (eksotherm)

---

**c) Teste for hydrogen – Knallgassprøven:**

1. Samle opp gassen i et prøverør (åpningen ned)
2. Hold brennende fyrstikk mot åpningen
3. Hydrogen gir et karakteristisk **"pop"** (knall)

Reaksjon: 2H₂ + O₂ → 2H₂O`,
      },
    },

    // ========== EKSTRA OPPGAVE: KLASSISK - NØYTRALISERINGSLIKNINGER ==========
    {
      id: 'nat10-2-6-oppg-extra-5',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-6-oppg-extra-5',
        number: '2.6.13',
        type: 'classic',
        difficulty: 'medium',
        task: `Skriv balanserte reaksjonslikninger for disse nøytraliseringsreaksjonene, og navngi saltet:

a) Saltsyre (HCl) + Natriumhydroksid (NaOH)
b) Svovelsyre (H₂SO₄) + Natriumhydroksid (NaOH)
c) Salpetersyre (HNO₃) + Kaliumhydroksid (KOH)`,
        solution: `**a) HCl + NaOH → NaCl + H₂O**

Salt: **Natriumklorid** (bordsalt)

---

**b) H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O**

Salt: **Natriumsulfat**

Merk: 2 NaOH trengs fordi H₂SO₄ avgir 2 H⁺.

---

**c) HNO₃ + KOH → KNO₃ + H₂O**

Salt: **Kaliumnitrat**`,
      },
    },

    // ========== EKSTRA OPPGAVE: MULTIPLE CHOICE - BTB ==========
    {
      id: 'nat10-2-6-oppg-extra-6',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-6-oppg-extra-6',
        number: '2.6.14',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Du tilsetter BTB til en løsning, og den blir grønn. Hva forteller dette?',
        options: [
          { id: 'a', text: 'Løsningen er sur', isCorrect: false },
          { id: 'b', text: 'Løsningen er nøytral (pH ca. 7)', isCorrect: true },
          { id: 'c', text: 'Løsningen er basisk', isCorrect: false },
          { id: 'd', text: 'BTB fungerer ikke her', isCorrect: false },
        ],
        solution: `**Riktig svar: Nøytral (pH ca. 7)**

BTB-farger:
- **Gul:** Sur (pH < 6)
- **Grønn:** Nøytral (pH ca. 7)
- **Blå:** Basisk (pH > 8)

Grønn = nøytral løsning.`,
      },
    },

    // ========== EKSTRA OPPGAVE: KLASSISK - SUR NEDBØR ==========
    {
      id: 'nat10-2-6-oppg-extra-7',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-6-oppg-extra-7',
        number: '2.6.15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Sur nedbør er et miljøproblem.

a) Hva er normalt pH for naturlig regn, og hvorfor er det litt surt?
b) Nevn to gasser som forårsaker sur nedbør.
c) Hvilke skader kan sur nedbør forårsake?
d) Hvordan kan man motvirke effektene i innsjøer?`,
        solution: `**a) Naturlig regn: pH ca. 5,6**

Litt surt fordi CO₂ i lufta løser seg og danner karbonsyre:
CO₂ + H₂O → H₂CO₃

---

**b) Gasser som gir sur nedbør:**

1. **SO₂ (svoveldioksid):** Fra forbrenning av kull/olje → danner svovelsyre
2. **NOₓ (nitrogenoksider):** Fra biltrafikk/industri → danner salpetersyre

---

**c) Skader:**
- Fisk dør i sure innsjøer
- Skog svekkes (næringsstoffer vaskes ut)
- Bygninger av kalkstein ødelegges
- Giftige metaller frigjøres i jorda

---

**d) Motvirke i innsjøer:**

**Kalking:** Tilsette kalk (CaCO₃) eller Ca(OH)₂ for å nøytralisere syren og heve pH mot 6-7.

Langsiktig: Redusere utslipp av SO₂ og NOₓ.`,
      },
    },

    // ========== EKSTRA OPPGAVE: KLASSISK - HAVFORSURING ==========
    {
      id: 'nat10-2-6-oppg-extra-8',
      type: 'exercise',
      exercise: {
        id: 'nat10-2-6-oppg-extra-8',
        number: '2.6.16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Havforsuring: Havets pH har sunket fra ca. 8,2 til 8,1 siden 1800-tallet.

a) Er havet surt eller basisk?
b) Forklar sammenhengen mellom CO₂ i atmosfæren og havets pH.
c) Hvorfor er en endring på 0,1 pH-enhet alvorlig?
d) Hvordan påvirkes korallrev av havforsuring?`,
        solution: `**a) Havet er basisk** (pH 8,1 > 7).

---

**b) CO₂ og havets pH:**

CO₂ fra fossile brensler → atmosfæren → havet absorberer 25-30%

CO₂ + H₂O → H₂CO₃ (karbonsyre)
H₂CO₃ → H⁺ + HCO₃⁻

Flere H⁺-ioner → lavere pH.

---

**c) Hvorfor 0,1 er alvorlig:**

pH-skalaen er logaritmisk. 0,1 enhet = ca. **26% økning** i H⁺-konsentrasjon. For organismer tilpasset over millioner av år er dette en enorm endring på bare 200 år.

---

**d) Korallrev:**

- Koraller bygger skjelett av CaCO₃ (kalsiumkarbonat)
- Surere vann gjør det vanskeligere å danne CaCO₃
- Eksisterende skjelett kan løse seg opp
- Fører til korallbleking og død
- Korallrev er hjem for 25% av marine arter

Havforsuring er en av de mest alvorlige konsekvensene av økte CO₂-utslipp.`,
      },
    },
  ],
  exercises: [], // Oppgavene er embedded i content
};