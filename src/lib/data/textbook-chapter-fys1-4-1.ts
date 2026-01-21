/**
 * Fysikk 1 - Kapittel 4.1: Arbeid og kinetisk energi
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_FYS1_4_1: TextbookChapter = {
  id: 'fys1-4-1',
  courseId: 'fys1',
  chapterNumber: '4.1',
  title: 'Arbeid og kinetisk energi',
  description: 'Lær om arbeid, kinetisk energi, og sammenhengen mellom kraft, bevegelse og energi.',
  estimatedMinutes: 50,
  competenceGoals: [
    'definere og beregne arbeid utført av en kraft',
    'definere og beregne kinetisk energi',
    'bruke arbeid-energi-teoremet',
    'anvende enheten Joule',
  ],
  content: [
    {
      id: 'fys1-4-1-intro',
      type: 'text',
      content: `# Arbeid og kinetisk energi

I hverdagen bruker vi ordet "arbeid" om mange ting - å løfte en tung boks, å dytte en bil, å gå til skolen. Men i fysikk har arbeid en presis definisjon som kobler kraft og bevegelse.

**Nøkkelspørsmål:**
- Hva betyr det at en kraft utfører arbeid?
- Hva er sammenhengen mellom arbeid og energi?
- Hvorfor blir ting raskere når vi skyver på dem?

## Hva er arbeid?

**Intuitivt:** Arbeid er det som skjer når en kraft får noe til å bevege seg.

**Eksempler:**
- Du løfter en koffert → Kraften din utfører arbeid
- Du skyver på en vogn → Kraften din utfører arbeid
- Du holder en tung pose stille → **Ingen arbeid!** (ingen bevegelse)
- Du bærer en kasse vannrett → **Ingen arbeid fra løftekraften!** (kraft vinkelrett på bevegelse)

**Viktig:** For at en kraft skal utføre arbeid, må den få noe til å bevege seg i kraftens retning.`,
    },
    {
      id: 'fys1-4-1-def-arbeid',
      type: 'definition',
      title: 'Arbeid',
      content: 'Arbeid $W$ er produktet av kraften $F$, forflytningen $s$, og cosinus av vinkelen $\\theta$ mellom kraften og forflytningen:\n\n$$W = F \\cdot s \\cdot \\cos\\theta$$\n\n**Spesialtilfeller:**\n- Hvis kraft og bevegelse er i samme retning: $W = F \\cdot s$ (fordi $\\cos 0° = 1$)\n- Hvis kraft og bevegelse er vinkelrett: $W = 0$ (fordi $\\cos 90° = 0$)\n- Hvis kraft og bevegelse er motsatt rettet: $W = -F \\cdot s$ (fordi $\\cos 180° = -1$)\n\n**Enhet:** Joule (J) = Newton · meter (N·m) = kg·m²/s²',
    },
    {
      id: 'fys1-4-1-arbeid-forklaring',
      type: 'text',
      content: `## Forståelse av arbeidsformelen

### Hvorfor cosinus?

Når du skyver en vogn i en vinkel, er det kun **komponenten av kraften i bevegelsesretningen** som utfører arbeid.

**Eksempel:** Du skyver en gressgressklipper med en kraft på 100 N i en vinkel på 30° nedover.

- **Total kraft:** 100 N
- **Horisontal komponent:** $F_x = F \\cos 30° = 100 \\cdot 0.866 = 86.6$ N
- **Vertikal komponent:** $F_y = F \\sin 30° = 100 \\cdot 0.5 = 50$ N

Kun den horisontale komponenten (86.6 N) utfører arbeid for å flytte gressklipperen fremover. Den vertikale komponenten presser bare ned i bakken.

### Positivt vs. negativt arbeid

**Positivt arbeid ($W > 0$):**
- Kraften virker **i samme retning** som bevegelsen
- Objektet **får mer energi**
- Eksempel: Du skyver en vogn fremover → vognen blir raskere

**Negativt arbeid ($W < 0$):**
- Kraften virker **mot** bevegelsesretningen
- Objektet **mister energi**
- Eksempel: Friksjon bremser en vogn → vognen blir langsommere

**Null arbeid ($W = 0$):**
- Kraften er vinkelrett på bevegelsen
- Eksempel: Du bærer en boks vannrett → tyngdekraften utfører null arbeid

### Flere krefter

Hvis flere krefter virker på et objekt, finner vi **total arbeid** ved å summere arbeidet fra hver kraft:

$$W_{total} = W_1 + W_2 + W_3 + \\cdots$$

Alternativt kan vi finne nettokraften først, og deretter beregne arbeidet:

$$W_{total} = F_{netto} \\cdot s \\cdot \\cos\\theta$$`,
    },
    {
      id: 'fys1-4-1-ex-1',
      type: 'example',
      title: 'Eksempel: Arbeid ved å dra en kjelke',
      problem: 'Du drar en kjelke 20 m langs flat mark med en kraft på 50 N i en vinkel på 30° over horisontalplanet. Hvor stort arbeid utfører kraften din?',
      solution: `**Gitt:**
- Kraft: $F = 50$ N
- Forflytning: $s = 20$ m
- Vinkel: $\\theta = 30°$ over horisontalplanet

**Søkt:** Arbeid $W$

**Løsning:**

Kraften virker i en vinkel, så vi bruker formelen:

$$W = F \\cdot s \\cdot \\cos\\theta$$

Setter inn verdiene:

$$W = 50 \\text{ N} \\cdot 20 \\text{ m} \\cdot \\cos 30°$$

$$W = 50 \\cdot 20 \\cdot 0.866$$

$$W = 866 \\text{ J}$$

**Svar:** Kraften din utfører 866 J arbeid på kjelken.

**Tolkning:** Den horisontale komponenten av kraften din er $F_x = 50 \\cos 30° = 43.3$ N. Dette gir samme arbeid: $W = 43.3 \\cdot 20 = 866$ J.`,
    },
    {
      id: 'fys1-4-1-ex-2',
      type: 'example',
      title: 'Eksempel: Arbeid med flere krefter',
      problem: 'En kasse på 10 kg dras 5.0 m bortover et gulv med konstant hastighet. Kraften som drar er 30 N, og friksjonskraften er 30 N. Beregn:\na) Arbeidet utført av dragkraften\nb) Arbeidet utført av friksjonskraften\nc) Totalt arbeid',
      solution: `**Gitt:**
- Masse: $m = 10$ kg
- Forflytning: $s = 5.0$ m
- Dragkraft: $F_d = 30$ N (i bevegelsesretningen)
- Friksjonskraft: $F_f = 30$ N (mot bevegelsesretningen)
- Konstant hastighet (nettokraft = 0)

**a) Arbeid utført av dragkraften:**

Dragkraften virker i bevegelsesretningen ($\\theta = 0°$):

$$W_d = F_d \\cdot s \\cdot \\cos 0° = 30 \\cdot 5.0 \\cdot 1 = 150 \\text{ J}$$

**b) Arbeid utført av friksjonskraften:**

Friksjonskraften virker mot bevegelsesretningen ($\\theta = 180°$):

$$W_f = F_f \\cdot s \\cdot \\cos 180° = 30 \\cdot 5.0 \\cdot (-1) = -150 \\text{ J}$$

**c) Totalt arbeid:**

$$W_{total} = W_d + W_f = 150 + (-150) = 0 \\text{ J}$$

**Svar:**
a) Dragkraften utfører 150 J arbeid
b) Friksjonskraften utfører -150 J arbeid
c) Totalt arbeid er 0 J

**Tolkning:** Siden kassen beveger seg med konstant hastighet, endrer ikke kinetisk energi seg. Dette betyr at totalt arbeid må være null, noe som stemmer med resultatet vårt.`,
    },
    {
      id: 'fys1-4-1-kinetisk-energi',
      type: 'text',
      content: `# Kinetisk energi

**Energi** er evnen til å utføre arbeid. Et objekt i bevegelse har energi fordi det kan utføre arbeid når det bremses ned.

**Eksempel:** En bil i fart har kinetisk energi. Hvis den kolliderer med en vegg, utfører den arbeid på veggen (deformerer den).

## Hva er kinetisk energi?

**Kinetisk energi** er energien et objekt har på grunn av sin bevegelse.`,
    },
    {
      id: 'fys1-4-1-def-kinetisk',
      type: 'definition',
      title: 'Kinetisk energi',
      content: `Den kinetiske energien $E_k$ til et objekt med masse $m$ og fart $v$ er:

$$E_k = \\frac{1}{2}mv^2$$

**Enhet:** Joule (J) = kg·m²/s²

**Kjennetegn:**
- Avhenger av **masse** og **fart**
- Er alltid **positiv** (eller null)
- Øker kvadratisk med farten: Dobbel fart -> firedobbel energi`,
    },
    {
      id: 'fys1-4-1-kinetisk-forklaring',
      type: 'text',
      content: `## Tolkning av formelen

### Avhengighet av masse

Hvis massen dobles, dobles den kinetiske energien (ved samme fart).

**Eksempel:**
- Bil A: masse 1000 kg, fart 20 m/s → $E_k = \\frac{1}{2} \\cdot 1000 \\cdot 20^2 = 200\\,000$ J
- Bil B: masse 2000 kg, fart 20 m/s → $E_k = \\frac{1}{2} \\cdot 2000 \\cdot 20^2 = 400\\,000$ J

### Avhengighet av fart

Hvis farten dobles, firedobles den kinetiske energien!

**Eksempel:**
- Bil ved 20 m/s: $E_k = \\frac{1}{2} \\cdot 1000 \\cdot 20^2 = 200\\,000$ J
- Bil ved 40 m/s: $E_k = \\frac{1}{2} \\cdot 1000 \\cdot 40^2 = 800\\,000$ J

Dette er grunnen til at høyere fart er så mye farligere i trafikken: En bil som kjører dobbelt så fort har fire ganger så mye energi som må absorberes i en kollisjon!

### Hvorfor $\\frac{1}{2}$?

Faktoren $\\frac{1}{2}$ kommer fra integrasjon når vi utleder formelen fra Newtons andre lov. Den sikrer at arbeid-energi-teoremet fungerer (se neste seksjon).`,
    },
    {
      id: 'fys1-4-1-ex-3',
      type: 'example',
      title: 'Eksempel: Beregning av kinetisk energi',
      problem: 'En bil med masse 1200 kg kjører i 90 km/h. Beregn bilens kinetiske energi.',
      solution: `**Gitt:**
- Masse: $m = 1200$ kg
- Fart: $v = 90$ km/h

**Søkt:** Kinetisk energi $E_k$

**Løsning:**

Først konverterer vi farten til m/s:

$$v = 90 \\text{ km/h} = 90 \\cdot \\frac{1000}{3600} = 25 \\text{ m/s}$$

Deretter bruker vi formelen for kinetisk energi:

$$E_k = \\frac{1}{2}mv^2$$

$$E_k = \\frac{1}{2} \\cdot 1200 \\cdot 25^2$$

$$E_k = 600 \\cdot 625$$

$$E_k = 375\\,000 \\text{ J} = 375 \\text{ kJ}$$

**Svar:** Bilens kinetiske energi er 375 kJ.

**Tolkning:** Dette er en betydelig mengde energi. Hvis bilen må bremse ned fra denne farten, må bremsene absorbere 375 kJ energi (som omgjøres til varme).`,
    },
    {
      id: 'fys1-4-1-arbeid-energi-teorem',
      type: 'text',
      content: `# Arbeid-energi-teoremet

Det er en fundamental sammenheng mellom arbeid og kinetisk energi:

**Arbeid endrer kinetisk energi.**

Når du utfører arbeid på et objekt, endrer du dets kinetiske energi. Dette er kanskje den viktigste sammenhengen i dette kapittelet!`,
    },
    {
      id: 'fys1-4-1-def-arbeid-energi',
      type: 'theorem',
      title: 'Arbeid-energi-teoremet',
      content: 'Totalt arbeid utført på et objekt er lik endringen i objektets kinetiske energi:\n\n$$W_{total} = \\Delta E_k = E_{k,slutt} - E_{k,start}$$\n\neller\n\n$$W_{total} = \\frac{1}{2}mv_{slutt}^2 - \\frac{1}{2}mv_{start}^2$$\n\nDette teoremet gjelder alltid, uavhengig av kreftenes art.',
    },
    {
      id: 'fys1-4-1-arbeid-energi-forklaring',
      type: 'text',
      content: `## Tolkning av arbeid-energi-teoremet

**Positivt arbeid ($W > 0$):**
- Objektet får tilført energi
- Kinetisk energi **øker**
- Farten **øker**

**Negativt arbeid ($W < 0$):**
- Objektet mister energi
- Kinetisk energi **synker**
- Farten **synker**

**Null arbeid ($W = 0$):**
- Ingen energiendring
- Konstant fart

## Hvordan bruke teoremet

Arbeid-energi-teoremet er spesielt nyttig når:
1. Vi kjenner kraftene og vil finne sluttfarten
2. Vi kjenner fartene og vil finne kraften
3. Vi har mange krefter og vil unngå å beregne akselerasjon

**Fordel:** Vi trenger ikke bekymre oss om tid eller akselerasjon - bare krefter, avstander og farter!`,
    },
    {
      id: 'fys1-4-1-ex-4',
      type: 'example',
      title: 'Eksempel: Bruk av arbeid-energi-teoremet',
      problem: 'En kasse med masse 20 kg ligger i ro på et gulv. En konstant horisontal kraft på 50 N skyver kassen 4.0 m. Friksjonskraften er 20 N. Finn sluttfarten til kassen.',
      solution: `**Gitt:**
- Masse: $m = 20$ kg
- Dragkraft: $F_d = 50$ N
- Friksjonskraft: $F_f = 20$ N
- Forflytning: $s = 4.0$ m
- Startfart: $v_0 = 0$ m/s

**Søkt:** Sluttfart $v$

**Løsning:**

Vi bruker arbeid-energi-teoremet:

$$W_{total} = \\Delta E_k$$

**Steg 1:** Beregn totalt arbeid.

Arbeid fra dragkraft (positiv):
$$W_d = F_d \\cdot s = 50 \\cdot 4.0 = 200 \\text{ J}$$

Arbeid fra friksjonskraft (negativ):
$$W_f = -F_f \\cdot s = -20 \\cdot 4.0 = -80 \\text{ J}$$

Totalt arbeid:
$$W_{total} = W_d + W_f = 200 - 80 = 120 \\text{ J}$$

**Steg 2:** Beregn endring i kinetisk energi.

$$\\Delta E_k = \\frac{1}{2}mv^2 - \\frac{1}{2}mv_0^2 = \\frac{1}{2}mv^2 - 0 = \\frac{1}{2}mv^2$$

**Steg 3:** Bruk arbeid-energi-teoremet.

$$W_{total} = \\Delta E_k$$

$$120 = \\frac{1}{2} \\cdot 20 \\cdot v^2$$

$$120 = 10v^2$$

$$v^2 = 12$$

$$v = \\sqrt{12} = 3.46 \\text{ m/s}$$

**Svar:** Sluttfarten til kassen er 3.5 m/s.

**Alternativ metode (Newtons 2. lov):**

Nettokraft: $F_{netto} = 50 - 20 = 30$ N
Akselerasjon: $a = F/m = 30/20 = 1.5$ m/s²
Kinematikk: $v^2 = v_0^2 + 2as = 0 + 2 \\cdot 1.5 \\cdot 4.0 = 12$
$v = \\sqrt{12} = 3.46$ m/s ✓

Som vi ser, gir begge metodene samme svar!`,
    },
    {
      id: 'fys1-4-1-ex-5',
      type: 'example',
      title: 'Eksempel: Bremsing av bil',
      problem: 'En bil med masse 1500 kg kjører i 25 m/s når sjåføren bremser. Friksjonen mellom dekk og vei gir en bremsekraft på 9000 N. Hvor langt tar det før bilen stopper?',
      solution: `**Gitt:**
- Masse: $m = 1500$ kg
- Startfart: $v_0 = 25$ m/s
- Sluttfart: $v = 0$ m/s
- Bremsekraft: $F = 9000$ N (mot bevegelsen)

**Søkt:** Bremselengde $s$

**Løsning:**

Vi bruker arbeid-energi-teoremet:

$$W_{total} = \\Delta E_k$$

**Steg 1:** Beregn endring i kinetisk energi.

$$\\Delta E_k = \\frac{1}{2}mv^2 - \\frac{1}{2}mv_0^2$$

$$\\Delta E_k = 0 - \\frac{1}{2} \\cdot 1500 \\cdot 25^2$$

$$\\Delta E_k = -468\\,750 \\text{ J}$$

(Negativ fordi energien synker)

**Steg 2:** Beregn arbeid fra bremsekraft.

Bremsekraften virker mot bevegelsen ($\\theta = 180°$):

$$W = F \\cdot s \\cdot \\cos 180° = -F \\cdot s = -9000 \\cdot s$$

**Steg 3:** Bruk arbeid-energi-teoremet.

$$W_{total} = \\Delta E_k$$

$$-9000 \\cdot s = -468\\,750$$

$$s = \\frac{468\\,750}{9000} = 52.1 \\text{ m}$$

**Svar:** Bremselengden er 52 m.

**Tolkning:** Dette illustrerer hvorfor høy fart er farlig. Hvis bilen hadde kjørt dobbelt så fort (50 m/s), ville energien vært fire ganger så stor, og bremselengden ville vært fire ganger så lang (208 m)!`,
    },
    {
      id: 'fys1-4-1-enheten-joule',
      type: 'text',
      content: `# Enheten Joule

Både arbeid og energi måles i **Joule** (symbol: J), oppkalt etter den engelske fysikeren James Prescott Joule (1818-1889).

## Definisjon

$$1 \\text{ J} = 1 \\text{ N} \\cdot \\text{m} = 1 \\text{ kg} \\cdot \\text{m}^2/\\text{s}^2$$

**En Joule** er arbeidet utført når en kraft på 1 Newton flytter et objekt 1 meter i kraftens retning.

## Størrelsesorden

For å få en følelse av hvor mye 1 J er:

**Små energier:**
- 1 J ≈ energi for å løfte en eple 1 meter
- 1 J ≈ energi i et myggklaps
- 4.2 J = energi for å varme opp 1 g vann 1°C (1 kalori)

**Mellomstore energier:**
- 100 J ≈ energi for å løfte en person 1 meter
- 1 kJ (1000 J) ≈ kinetisk energi til en løpende person
- 1 MJ (1 million J) ≈ energi i 0.25 liter bensin

**Store energier:**
- 1 kWh (kilowatt-time) = 3.6 MJ = 3 600 000 J
- 1 GJ (gigajoule) = 1 milliard J ≈ energi i 30 liter bensin

## Energi i hverdagen

**Strømforbruk:**
En 100 W lyspære bruker 100 J energi per sekund.

**Mat:**
1 kcal (matkalori) = 4184 J ≈ 4.2 kJ

**Transport:**
En bil som kjører 10 km bruker ca. 30 MJ energi.`,
    },
    {
      id: 'fys1-4-1-oppsummering',
      type: 'note',
      title: 'Oppsummering',
      content: `**Arbeid:**
- $W = F \\cdot s \\cdot \\cos\\theta$
- Måler energioverføring
- Positivt arbeid: Objektet får energi
- Negativt arbeid: Objektet mister energi

**Kinetisk energi:**
- $E_k = \\frac{1}{2}mv^2$
- Energi på grunn av bevegelse
- Avhenger kvadratisk av farten

**Arbeid-energi-teoremet:**
- $W_{total} = \\Delta E_k$
- Total arbeid = endring i kinetisk energi
- Veldig nyttig for å løse oppgaver!

**Enhet:**
- Joule (J) = N·m = kg·m²/s²`,
    },
  ],
  exercises: [
    {
      id: 'fys1-4-1-ex-1',
      number: '1',
      type: 'classic',
      difficulty: 'lett',
      task: 'En kraft på 20 N skyver en kasse 5.0 m i kraftens retning. Hvor stort arbeid utføres?',
      solution: `**Gitt:**
- Kraft: $F = 20$ N
- Forflytning: $s = 5.0$ m
- Vinkel: $\\theta = 0°$ (kraft i bevegelsesretningen)

**Søkt:** Arbeid $W$

**Løsning:**

$$W = F \\cdot s \\cdot \\cos\\theta = 20 \\cdot 5.0 \\cdot \\cos 0° = 20 \\cdot 5.0 \\cdot 1 = 100 \\text{ J}$$

**Svar:** 100 J`,
      hints: ['Kraft og bevegelse i samme retning', 'Bruk $W = F \\cdot s$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-1-ex-2',
      number: '2',
      type: 'classic',
      difficulty: 'lett',
      task: 'En person løfter en sekk med masse 15 kg vertikalt 2.0 m. Hvor stort arbeid utfører personen? (g = 9.81 m/s²)',
      solution: `**Gitt:**
- Masse: $m = 15$ kg
- Høydeendring: $h = 2.0$ m
- Tyngdeakselerasjon: $g = 9.81$ m/s²

**Søkt:** Arbeid $W$

**Løsning:**

For å løfte sekken med konstant hastighet, må personen utøve en kraft lik tyngdekraften:

$$F = mg = 15 \\cdot 9.81 = 147.15 \\text{ N}$$

Arbeidet er:

$$W = F \\cdot s = 147.15 \\cdot 2.0 = 294.3 \\text{ J} \\approx 294 \\text{ J}$$

**Svar:** 294 J`,
      hints: ['Finn først kraften (tyngdekraften)', 'Arbeid = kraft × høyde'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-1-ex-3',
      number: '3',
      type: 'classic',
      difficulty: 'lett',
      task: 'Beregn den kinetiske energien til:\na) En fotball med masse 0.43 kg som beveger seg med fart 20 m/s\nb) En løpende person med masse 70 kg og fart 5.0 m/s',
      solution: `**a) Fotball:**

**Gitt:**
- Masse: $m = 0.43$ kg
- Fart: $v = 20$ m/s

**Løsning:**

$$E_k = \\frac{1}{2}mv^2 = \\frac{1}{2} \\cdot 0.43 \\cdot 20^2 = 0.215 \\cdot 400 = 86 \\text{ J}$$

**Svar:** 86 J

---

**b) Løpende person:**

**Gitt:**
- Masse: $m = 70$ kg
- Fart: $v = 5.0$ m/s

**Løsning:**

$$E_k = \\frac{1}{2}mv^2 = \\frac{1}{2} \\cdot 70 \\cdot 5.0^2 = 35 \\cdot 25 = 875 \\text{ J}$$

**Svar:** 875 J`,
      hints: ['Bruk $E_k = \\frac{1}{2}mv^2$', 'Husk å kvadrere farten'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-1-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'medium',
      task: 'En kasse med masse 25 kg dras 8.0 m bortover et gulv med en kraft på 60 N i en vinkel på 25° over horisontalplanet. Beregn arbeidet utført av kraften.',
      solution: `**Gitt:**
- Masse: $m = 25$ kg
- Kraft: $F = 60$ N
- Vinkel: $\\theta = 25°$ over horisontalplanet
- Forflytning: $s = 8.0$ m

**Søkt:** Arbeid $W$

**Løsning:**

$$W = F \\cdot s \\cdot \\cos\\theta$$

$$W = 60 \\cdot 8.0 \\cdot \\cos 25°$$

$$W = 480 \\cdot 0.906$$

$$W = 435 \\text{ J}$$

**Svar:** 435 J

**Alternativ:** Den horisontale komponenten av kraften er:
$$F_x = 60 \\cos 25° = 54.4 \\text{ N}$$

Arbeidet blir:
$$W = F_x \\cdot s = 54.4 \\cdot 8.0 = 435 \\text{ J}$$ ✓`,
      hints: ['Kraften virker i en vinkel', 'Bruk $W = F \\cdot s \\cdot \\cos\\theta$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-1-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'medium',
      task: 'En bil med masse 1200 kg øker farten fra 10 m/s til 25 m/s. Hvor stor er endringen i kinetisk energi?',
      solution: `**Gitt:**
- Masse: $m = 1200$ kg
- Startfart: $v_0 = 10$ m/s
- Sluttfart: $v = 25$ m/s

**Søkt:** Endring i kinetisk energi $\\Delta E_k$

**Løsning:**

$$\\Delta E_k = E_{k,slutt} - E_{k,start}$$

$$\\Delta E_k = \\frac{1}{2}mv^2 - \\frac{1}{2}mv_0^2$$

$$\\Delta E_k = \\frac{1}{2}m(v^2 - v_0^2)$$

$$\\Delta E_k = \\frac{1}{2} \\cdot 1200 \\cdot (25^2 - 10^2)$$

$$\\Delta E_k = 600 \\cdot (625 - 100)$$

$$\\Delta E_k = 600 \\cdot 525 = 315\\,000 \\text{ J} = 315 \\text{ kJ}$$

**Svar:** 315 kJ

**Tolkning:** Motoren må utføre 315 kJ arbeid på bilen for å øke farten fra 10 til 25 m/s.`,
      hints: ['Finn kinetisk energi før og etter', 'Trekk fra for å finne endringen'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-1-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'medium',
      task: 'En vogn med masse 50 kg står i ro på et plant underlag. En kraft på 100 N skyver vognen 6.0 m. Friksjonskraften er 30 N. Finn sluttfarten til vognen ved hjelp av arbeid-energi-teoremet.',
      solution: `**Gitt:**
- Masse: $m = 50$ kg
- Dragkraft: $F_d = 100$ N
- Friksjonskraft: $F_f = 30$ N
- Forflytning: $s = 6.0$ m
- Startfart: $v_0 = 0$ m/s

**Søkt:** Sluttfart $v$

**Løsning:**

**Steg 1:** Beregn totalt arbeid.

Arbeid fra dragkraft:
$$W_d = F_d \\cdot s = 100 \\cdot 6.0 = 600 \\text{ J}$$

Arbeid fra friksjonskraft (negativt):
$$W_f = -F_f \\cdot s = -30 \\cdot 6.0 = -180 \\text{ J}$$

Totalt arbeid:
$$W_{total} = W_d + W_f = 600 - 180 = 420 \\text{ J}$$

**Steg 2:** Bruk arbeid-energi-teoremet.

$$W_{total} = \\Delta E_k = \\frac{1}{2}mv^2 - \\frac{1}{2}mv_0^2$$

$$420 = \\frac{1}{2} \\cdot 50 \\cdot v^2 - 0$$

$$420 = 25v^2$$

$$v^2 = \\frac{420}{25} = 16.8$$

$$v = \\sqrt{16.8} = 4.1 \\text{ m/s}$$

**Svar:** Sluttfarten er 4.1 m/s.`,
      hints: ['Beregn arbeid fra hver kraft', 'Total arbeid = endring i kinetisk energi'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-1-ex-7',
      number: '7',
      type: 'classic',
      difficulty: 'medium',
      task: 'En bil med masse 1500 kg kjører i 30 m/s. Bremsekraften er 7500 N. Hvor lang blir bremselengden?',
      solution: `**Gitt:**
- Masse: $m = 1500$ kg
- Startfart: $v_0 = 30$ m/s
- Sluttfart: $v = 0$ m/s
- Bremsekraft: $F = 7500$ N

**Søkt:** Bremselengde $s$

**Løsning:**

**Steg 1:** Beregn endring i kinetisk energi.

$$\\Delta E_k = \\frac{1}{2}mv^2 - \\frac{1}{2}mv_0^2 = 0 - \\frac{1}{2} \\cdot 1500 \\cdot 30^2$$

$$\\Delta E_k = -\\frac{1}{2} \\cdot 1500 \\cdot 900 = -675\\,000 \\text{ J}$$

**Steg 2:** Arbeid fra bremsekraft.

$$W = -F \\cdot s = -7500 \\cdot s$$

(Negativt fordi kraften virker mot bevegelsen)

**Steg 3:** Bruk arbeid-energi-teoremet.

$$W_{total} = \\Delta E_k$$

$$-7500 \\cdot s = -675\\,000$$

$$s = \\frac{675\\,000}{7500} = 90 \\text{ m}$$

**Svar:** Bremselengden er 90 m.`,
      hints: ['Kinetisk energi synker til null', 'Bremsekraft utfører negativt arbeid'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-1-ex-8',
      number: '8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Du bærer en kasse med masse 10 kg vannrett 20 m mens du går med konstant fart. Hvor stort arbeid utfører:\na) Løftekraften din?\nb) Tyngdekraften?\nc) Total arbeid?',
      solution: `**Gitt:**
- Masse: $m = 10$ kg
- Horisontal forflytning: $s = 20$ m
- Vertikal forflytning: $h = 0$ m (konstant høyde)

**a) Arbeid utført av løftekraften:**

Løftekraften er vertikal (oppover), men forflytningen er horisontal.

Vinkelen mellom kraft og forflytning: $\\theta = 90°$

$$W_{løft} = F \\cdot s \\cdot \\cos 90° = F \\cdot s \\cdot 0 = 0 \\text{ J}$$

**Svar a):** 0 J

**b) Arbeid utført av tyngdekraften:**

Tyngdekraften er vertikal (nedover), men forflytningen er horisontal.

Vinkelen mellom kraft og forflytning: $\\theta = 90°$

$$W_{tyngde} = F \\cdot s \\cdot \\cos 90° = 0 \\text{ J}$$

**Svar b):** 0 J

**c) Total arbeid:**

$$W_{total} = W_{løft} + W_{tyngde} = 0 + 0 = 0 \\text{ J}$$

**Svar c):** 0 J

**Tolkning:**

Selv om du må bruke muskelkraft for å holde kassen oppe, utfører du **ikke fysisk arbeid** i fysikkens forstand fordi det ikke er noen forflytning i kraftens retning.

Tyngdekraften er vinkelrett på bevegelsen, så den utfører heller ikke arbeid.

Siden totalt arbeid er null, endrer ikke kinetisk energi seg - noe som stemmer fordi du går med konstant fart!

**Merk:** Musklene dine gjør likevel "fysiologisk arbeid" fordi de må opprettholde spenning, men dette er ikke det samme som fysisk arbeid.`,
      hints: ['Tenk på retningen til kreftene', 'Hva er vinkelen mellom kraft og bevegelse?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-1-ex-9',
      number: '9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En kasse med masse 40 kg sklir nedover et plant skråplan med vinkel 20° over horisontalplanet. Lengden av skråplanet er 10 m. Friksjonskraften er 50 N. Finn sluttfarten til kassen hvis den starter fra ro. (g = 9.81 m/s²)',
      solution: `**Gitt:**
- Masse: $m = 40$ kg
- Vinkel: $\\alpha = 20°$
- Lengde av skråplan: $s = 10$ m
- Friksjonskraft: $F_f = 50$ N
- Startfart: $v_0 = 0$ m/s
- $g = 9.81$ m/s²

**Søkt:** Sluttfart $v$

**Løsning:**

**Steg 1:** Finn kraften langs skråplanet.

Tyngdekraft: $F_g = mg = 40 \\cdot 9.81 = 392.4$ N

Komponent langs skråplan (nedover):
$$F_{parallell} = F_g \\sin\\alpha = 392.4 \\sin 20° = 392.4 \\cdot 0.342 = 134.2 \\text{ N}$$

**Steg 2:** Beregn arbeid fra hver kraft.

Arbeid fra gravitasjon (positiv, i bevegelsesretningen):
$$W_g = F_{parallell} \\cdot s = 134.2 \\cdot 10 = 1342 \\text{ J}$$

Arbeid fra friksjon (negativ, mot bevegelsen):
$$W_f = -F_f \\cdot s = -50 \\cdot 10 = -500 \\text{ J}$$

Totalt arbeid:
$$W_{total} = W_g + W_f = 1342 - 500 = 842 \\text{ J}$$

**Steg 3:** Bruk arbeid-energi-teoremet.

$$W_{total} = \\Delta E_k = \\frac{1}{2}mv^2 - 0$$

$$842 = \\frac{1}{2} \\cdot 40 \\cdot v^2$$

$$842 = 20v^2$$

$$v^2 = \\frac{842}{20} = 42.1$$

$$v = \\sqrt{42.1} = 6.5 \\text{ m/s}$$

**Svar:** Sluttfarten er 6.5 m/s.

**Tolkning:** Gravitasjonen utfører positivt arbeid (øker farten), mens friksjon utfører negativt arbeid (reduserer farten). Netto arbeid er positivt, så kassen får kinetisk energi.`,
      hints: ['Finn komponenten av tyngdekraften langs skråplanet', 'To krefter utfører arbeid: gravitasjon og friksjon'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-1-ex-10',
      number: '10',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Sammenlign bremselengden for en bil som kjører i 50 km/h og 100 km/h, gitt at bremsekraften er den samme i begge tilfeller.',
      solution: `**Gitt:**
- Fart 1: $v_1 = 50$ km/h = 13.9 m/s
- Fart 2: $v_2 = 100$ km/h = 27.8 m/s
- Samme bremsekraft $F$ i begge tilfeller

**Søkt:** Forholdet mellom bremselengdene

**Løsning:**

Fra arbeid-energi-teoremet:

$$W = \\Delta E_k$$

$$-F \\cdot s = 0 - \\frac{1}{2}mv^2$$

$$F \\cdot s = \\frac{1}{2}mv^2$$

$$s = \\frac{mv^2}{2F}$$

**For fart 1:**

$$s_1 = \\frac{m v_1^2}{2F}$$

**For fart 2:**

$$s_2 = \\frac{m v_2^2}{2F}$$

**Forholdet:**

$$\\frac{s_2}{s_1} = \\frac{m v_2^2 / 2F}{m v_1^2 / 2F} = \\frac{v_2^2}{v_1^2}$$

$$\\frac{s_2}{s_1} = \\frac{(27.8)^2}{(13.9)^2} = \\frac{772.84}{193.21} = 4.0$$

**Svar:** Bremselengden ved 100 km/h er **4 ganger så lang** som ved 50 km/h.

**Generell regel:**

Hvis farten dobles, blir bremselengden firedoblet!

Dette er fordi kinetisk energi er proporsjonal med $v^2$.

**Talleksempel:**

Hvis bremselengden ved 50 km/h er 10 m, blir bremselengden ved 100 km/h 40 m.

**Trafikksikkerhet:**

Dette viser hvorfor høy fart er så farlig:
- Dobbel fart → firedobbel kinetisk energi
- Firedobbel energi → firedobbel bremselengde
- Mye mindre tid til å reagere!`,
      hints: ['Bruk arbeid-energi-teoremet for begge tilfellene', 'Bremselengde er proporsjonal med $v^2$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};
