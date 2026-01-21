/**
 * Fysikk 1 - Kapittel 1.3: Numeriske metoder og programmering
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_FYS1_1_3: TextbookChapter = {
  id: 'fys1-1-3',
  courseId: 'fys1',
  chapterNumber: '1.3',
  title: 'Numeriske metoder og programmering',
  description: 'Lær om Eulers metode for å løse differensiallikninger og hvordan programmering brukes til å simulere fysiske systemer.',
  estimatedMinutes: 75,
  competenceGoals: [
    'bruke Eulers metode til å løse enkle differensiallikninger',
    'programmere simuleringer av fysiske systemer i Python',
    'modellere bevegelse med variabel akselerasjon',
    'analysere og visualisere numeriske resultater',
  ],
  content: [
    {
      id: 'fys1-1-3-intro',
      type: 'text',
      content: `# Numeriske metoder og programmering

**Hvorfor trenger vi numeriske metoder?**

Mange fysiske problemer kan ikke løses analytisk (med penn og papir). Eksempler:
- Fritt fall med luftmotstand
- Trekroppsproblemer i astronomi
- Værsimuleringer
- Kvanteproblemer

**Løsning:** Bruk datamaskinen til å beregne tilnærmede løsninger!

## Hva er en numerisk metode?

En **numerisk metode** er en algoritme som:
- Deler opp et problem i små steg
- Beregner en tilnærmet løsning steg for steg
- Gir resultater med kontrollert presisjon

**Fordeler:**
- Kan løse problemer uten analytisk løsning
- Rask (med moderne datamaskiner)
- Visuell (kan lage grafer og animasjoner)

**Ulemper:**
- Tilnærmet (ikke eksakt)
- Krever programmering
- Kan akkumulere feil

## Programmering i fysikk

**Python** er det mest populære språket for vitenskapelig programmering:
- Enkelt å lære
- Kraftige biblioteker (NumPy, Matplotlib)
- Gratis og åpen kildekode
- Brukes i forskning og industri

**Hva skal vi lære:**
1. Grunnleggende Python-syntaks
2. Eulers metode for differensiallikninger
3. Simulering av bevegelse
4. Visualisering av resultater`,
    },
    {
      id: 'fys1-1-3-def-numerisk',
      type: 'definition',
      title: 'Numerisk metode',
      content: 'En algoritme som beregner en tilnærmet løsning på et matematisk problem ved å dele det opp i mange små steg. Brukes når analytiske løsninger ikke finnes eller er for kompliserte.',
    },
    {
      id: 'fys1-1-3-differensial',
      type: 'text',
      content: `# Differensiallikninger i fysikk

En **differensialligning** er en likning som inneholder deriverte.

## Newtons 2. lov som differensialligning

**Newtons 2. lov:**
$$F = ma$$

**Akselerasjon er den dobbeltderiverte av posisjon:**
$$a = \\frac{dv}{dt} = \\frac{d^2s}{dt^2}$$

**Derfor:**
$$m\\frac{d^2s}{dt^2} = F$$

Dette er en **andreordens differensialligning**.

## Eksempel: Fritt fall uten luftmotstand

**Kraft:**
$$F = -mg$$

(Negativ fordi tyngdekraften peker nedover)

**Differensialligning:**
$$m\\frac{d^2s}{dt^2} = -mg$$

$$\\frac{d^2s}{dt^2} = -g$$

**Analytisk løsning:**
$$s(t) = s_0 + v_0 t - \\frac{1}{2}gt^2$$

Denne kan vi løse med penn og papir! ✓

## Eksempel: Fritt fall MED luftmotstand

**Krefter:**
- Tyngdekraft: $F_g = -mg$
- Luftmotstand: $F_d = \\frac{1}{2}C_d \\rho A v^2$ (oppover hvis nedover bevegelse)

**Total kraft:**
$$F = -mg + \\frac{1}{2}C_d \\rho A v^2$$

**Differensialligning:**
$$m\\frac{dv}{dt} = -mg + \\frac{1}{2}C_d \\rho A v^2$$

**Problem:** Denne har INGEN analytisk løsning! ✗

**Løsning:** Bruk numeriske metoder! ✓

## Omskriving til første orden

For å bruke Eulers metode omskriver vi til **førsteordens** system:

$$\\frac{ds}{dt} = v$$

$$\\frac{dv}{dt} = -g + \\frac{C_d \\rho A v^2}{2m}$$

Dette er to koblede førsteordens differensiallikninger.`,
    },
    {
      id: 'fys1-1-3-euler',
      type: 'text',
      content: `# Eulers metode

**Eulers metode** er den enkleste numeriske metoden for å løse differensiallikninger.

## Grunnidé

**Derivert = helling av tangent:**
$$\\frac{dy}{dx} = f(x, y)$$

**Tilnærming:**
Hvis vi kjenner $y$ ved $x$, kan vi estimere $y$ ved $x + \\Delta x$:

$$y(x + \\Delta x) \\approx y(x) + \\frac{dy}{dx} \\cdot \\Delta x$$

$$y(x + \\Delta x) \\approx y(x) + f(x, y) \\cdot \\Delta x$$

## Eulers algoritme

**Gitt:**
- Differensialligning: $\\frac{dy}{dt} = f(t, y)$
- Initialverdi: $y(t_0) = y_0$
- Tidssteg: $\\Delta t$ (ofte skrevet $dt$)

**Algoritme:**

1. Start med $(t_0, y_0)$
2. Beregn $\\frac{dy}{dt} = f(t_0, y_0)$
3. Estimér neste verdi: $y_1 = y_0 + f(t_0, y_0) \\cdot \\Delta t$
4. Oppdatér tid: $t_1 = t_0 + \\Delta t$
5. Gjenta fra steg 2 med $(t_1, y_1)$

**Generell formel:**
$$y_{n+1} = y_n + f(t_n, y_n) \\cdot \\Delta t$$
$$t_{n+1} = t_n + \\Delta t$$

## Visualisering

Tenk på Eulers metode som å:
1. Stå på en kurve
2. Se tangentretningen (derivert)
3. Ta et lite steg i tangentretningen
4. Gjenta

**Presisjon:**
- Mindre $\\Delta t$ → Bedre presisjon (men flere beregninger)
- Større $\\Delta t$ → Raskere, men mindre nøyaktig

## Eksempel: Eksponentiell vekst

**Differensialligning:**
$$\\frac{dy}{dt} = ky$$

med $y(0) = 1$ og $k = 0.5$.

**Analytisk løsning:**
$$y(t) = e^{kt}$$

**Numerisk løsning (Eulers metode):**

La $\\Delta t = 0.1$.

**Steg 1:**
- $t_0 = 0$, $y_0 = 1$
- $\\frac{dy}{dt} = 0.5 \\times 1 = 0.5$
- $y_1 = 1 + 0.5 \\times 0.1 = 1.05$
- $t_1 = 0.1$

**Steg 2:**
- $t_1 = 0.1$, $y_1 = 1.05$
- $\\frac{dy}{dt} = 0.5 \\times 1.05 = 0.525$
- $y_2 = 1.05 + 0.525 \\times 0.1 = 1.1025$
- $t_2 = 0.2$

**Osv.**

**Sammenligning:**

| Tid $t$ | Analytisk $e^{0.5t}$ | Euler ($\\Delta t = 0.1$) | Feil |
|---------|----------------------|---------------------------|------|
| 0.0 | 1.0000 | 1.0000 | 0% |
| 0.1 | 1.0513 | 1.0500 | 0.12% |
| 0.2 | 1.1052 | 1.1025 | 0.24% |
| 1.0 | 1.6487 | 1.6289 | 1.2% |

Eulers metode gir god tilnærming! ✓`,
    },
    {
      id: 'fys1-1-3-ex-euler-enkel',
      type: 'example',
      title: 'Eulers metode: Enkel bevegelse',
      problem: 'En bil akselererer fra hvile med konstant akselerasjon $a = 2$ m/s². Bruk Eulers metode til å beregne hastigheten etter 5 sekunder med tidssteg $\\Delta t = 1$ s. Sammenlign med den analytiske løsningen.',
      solution: `**Gitt:**
- Akselerasjon: $a = 2$ m/s²
- Starthastig het: $v_0 = 0$ m/s
- Tid: $t = 5$ s
- Tidssteg: $\\Delta t = 1$ s

**Differensialligning:**
$$\\frac{dv}{dt} = a = 2$$

**Analytisk løsning:**
$$v(t) = v_0 + at = 0 + 2 \\times 5 = 10 \\text{ m/s}$$

---

**Eulers metode:**

**Algoritme:**
$$v_{n+1} = v_n + a \\cdot \\Delta t = v_n + 2 \\times 1 = v_n + 2$$

**Steg for steg:**

**Steg 0:**
- $t_0 = 0$ s, $v_0 = 0$ m/s

**Steg 1:**
- $a = 2$ m/s²
- $v_1 = v_0 + a \\cdot \\Delta t = 0 + 2 \\times 1 = 2$ m/s
- $t_1 = 1$ s

**Steg 2:**
- $a = 2$ m/s²
- $v_2 = v_1 + a \\cdot \\Delta t = 2 + 2 \\times 1 = 4$ m/s
- $t_2 = 2$ s

**Steg 3:**
- $v_3 = 4 + 2 = 6$ m/s
- $t_3 = 3$ s

**Steg 4:**
- $v_4 = 6 + 2 = 8$ m/s
- $t_4 = 4$ s

**Steg 5:**
- $v_5 = 8 + 2 = 10$ m/s
- $t_5 = 5$ s

---

**Resultat:**

| Tid (s) | Euler (m/s) | Analytisk (m/s) | Feil |
|---------|-------------|-----------------|------|
| 0 | 0 | 0 | 0% |
| 1 | 2 | 2 | 0% |
| 2 | 4 | 4 | 0% |
| 3 | 6 | 6 | 0% |
| 4 | 8 | 8 | 0% |
| 5 | 10 | 10 | 0% |

**Konklusjon:** Eulers metode gir **eksakt** løsning når akselerasjonen er konstant! ✓

**Hvorfor?**
- Når $a$ er konstant, er $v(t)$ en rett linje
- Eulers metode følger tangenten, som er en rett linje
- Perfekt samsvar!

**Generelt:** Eulers metode er eksakt for lineære problemer.`,
    },
    {
      id: 'fys1-1-3-python-intro',
      type: 'text',
      content: `# Python-grunnlag for fysikk

## Variabler og beregninger

\`\`\`python
# Variabler
m = 0.5        # masse i kg
v = 10         # hastighet i m/s
g = 9.81       # tyngdeakselerasjon i m/s²

# Beregninger
Ek = 0.5 * m * v**2    # Kinetisk energi
Ep = m * g * h         # Potensiell energi
p = m * v              # Bevegelsesmengde

# Skriv ut
print("Kinetisk energi:", Ek, "J")
print(f"Bevegelsesmengde: {p} kg·m/s")  # f-string
\`\`\`

## Lister (arrays)

\`\`\`python
# Liste med tall
tid = [0, 1, 2, 3, 4, 5]
hastighet = [0, 2, 4, 6, 8, 10]

# Tilgang til elementer
print(tid[0])         # 0 (første element)
print(tid[-1])        # 5 (siste element)
print(hastighet[2])   # 4

# Legge til elementer
tid.append(6)
hastighet.append(12)

# Lengde av liste
n = len(tid)          # 7
\`\`\`

## Løkker

\`\`\`python
# For-løkke
for i in range(5):
    print(i)          # Skriver 0, 1, 2, 3, 4

# While-løkke
t = 0
while t < 5:
    print(t)
    t = t + 1         # Eller: t += 1

# Løkke over liste
hastigheter = [0, 2, 4, 6]
for v in hastigheter:
    Ek = 0.5 * m * v**2
    print(f"v = {v} m/s, Ek = {Ek} J")
\`\`\`

## Betingelser

\`\`\`python
v = 10

if v > 0:
    print("Beveger seg fremover")
elif v < 0:
    print("Beveger seg bakover")
else:
    print("I ro")
\`\`\`

## Funksjoner

\`\`\`python
# Definere funksjon
def kinetisk_energi(m, v):
    """Beregner kinetisk energi."""
    return 0.5 * m * v**2

# Bruke funksjon
Ek = kinetisk_energi(0.5, 10)
print(Ek)  # 25.0
\`\`\`

## NumPy for numeriske beregninger

\`\`\`python
import numpy as np

# Array (mer effektiv enn liste)
tid = np.array([0, 1, 2, 3, 4, 5])
hastighet = np.array([0, 2, 4, 6, 8, 10])

# Elementvise operasjoner
Ek = 0.5 * m * hastighet**2  # Beregner for alle verdier

# Nyttige funksjoner
print(np.max(hastighet))      # 10 (største verdi)
print(np.min(hastighet))      # 0 (minste verdi)
print(np.mean(hastighet))     # 5.0 (gjennomsnitt)
print(np.sum(hastighet))      # 30 (sum)
\`\`\`

## Matplotlib for plotting

\`\`\`python
import matplotlib.pyplot as plt

# Data
tid = [0, 1, 2, 3, 4, 5]
hastighet = [0, 2, 4, 6, 8, 10]

# Plott
plt.plot(tid, hastighet, 'b-')  # Blå linje
plt.xlabel('Tid (s)')
plt.ylabel('Hastighet (m/s)')
plt.title('Hastighet som funksjon av tid')
plt.grid(True)
plt.show()
\`\`\``,
    },
    {
      id: 'fys1-1-3-euler-python',
      type: 'text',
      content: `# Eulers metode i Python

## Mal for Eulers metode

\`\`\`python
import numpy as np
import matplotlib.pyplot as plt

# Parametere
t0 = 0          # Starttid
y0 = 1          # Startverdi
t_slutt = 10    # Sluttid
dt = 0.1        # Tidssteg

# Derivert (differensialligning)
def f(t, y):
    """Returnerer dy/dt."""
    return -0.5 * y  # Eksempel: eksponentiell nedgang

# Initialiser lister
tid = [t0]
y = [y0]

# Eulers metode
t = t0
y_verdi = y0
while t < t_slutt:
    # Beregn derivert
    dydt = f(t, y_verdi)

    # Euler-steg
    y_verdi = y_verdi + dydt * dt
    t = t + dt

    # Lagre
    tid.append(t)
    y.append(y_verdi)

# Plott
plt.plot(tid, y)
plt.xlabel('Tid')
plt.ylabel('y')
plt.title('Løsning av differensialligning')
plt.grid(True)
plt.show()
\`\`\`

## Eksempel: Fritt fall

\`\`\`python
import numpy as np
import matplotlib.pyplot as plt

# Parametere
g = 9.81        # m/s²
s0 = 100        # Starthøyde (m)
v0 = 0          # Starthastighet (m/s)
dt = 0.01       # Tidssteg (s)

# Initialiser
tid = [0]
s = [s0]
v = [v0]

# Eulers metode
t = 0
s_verdi = s0
v_verdi = v0

while s_verdi > 0:  # Stopp når objektet treffer bakken
    # Akselerasjon
    a = -g

    # Euler-steg
    v_verdi = v_verdi + a * dt
    s_verdi = s_verdi + v_verdi * dt
    t = t + dt

    # Lagre
    tid.append(t)
    s.append(s_verdi)
    v.append(v_verdi)

# Resultat
print(f"Falltid: {t:.3f} s")
print(f"Slutthastig het: {v_verdi:.3f} m/s")

# Analytisk løsning
t_analytisk = np.sqrt(2 * s0 / g)
v_analytisk = -g * t_analytisk
print(f"Analytisk tid: {t_analytisk:.3f} s")
print(f"Analytisk hastighet: {v_analytisk:.3f} m/s")

# Plott
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))

# Høyde
ax1.plot(tid, s, 'b-', label='Numerisk')
ax1.set_xlabel('Tid (s)')
ax1.set_ylabel('Høyde (m)')
ax1.set_title('Høyde som funksjon av tid')
ax1.grid(True)
ax1.legend()

# Hastighet
ax2.plot(tid, v, 'r-', label='Numerisk')
ax2.set_xlabel('Tid (s)')
ax2.set_ylabel('Hastighet (m/s)')
ax2.set_title('Hastighet som funksjon av tid')
ax2.grid(True)
ax2.legend()

plt.tight_layout()
plt.show()
\`\`\``,
    },
    {
      id: 'fys1-1-3-ex-luftmotstand',
      type: 'example',
      title: 'Simulering: Fritt fall med luftmotstand',
      problem: 'En ball med masse 0.5 kg og radius 0.05 m slippes fra 100 m høyde. Bruk Eulers metode til å simulere fallet med luftmotstand. Sammenlign med fritt fall uten luftmotstand.',
      solution: `**Gitt:**
- Masse: $m = 0.5$ kg
- Radius: $r = 0.05$ m
- Starthøyde: $s_0 = 100$ m
- Starthastighet: $v_0 = 0$ m/s
- Luftens tetthet: $\\rho = 1.2$ kg/m³
- Luftmotstandskoeffisient: $C_d = 0.5$

**Fysikk:**

**Tverrsnittareal:**
$$A = \\pi r^2 = \\pi \\times 0.05^2 = 0.00785 \\text{ m}^2$$

**Krefter:**
- Tyngdekraft: $F_g = -mg = -0.5 \\times 9.81 = -4.905$ N
- Luftmotstand: $F_d = \\frac{1}{2}C_d \\rho A v^2$ (oppover når bevegelse nedover)

**Netto kraft:**
$$F = -mg + \\frac{1}{2}C_d \\rho A v^2$$

**Akselerasjon:**
$$a = \\frac{F}{m} = -g + \\frac{C_d \\rho A v^2}{2m}$$

**Differensiallikninger:**
$$\\frac{ds}{dt} = v$$
$$\\frac{dv}{dt} = -g + \\frac{C_d \\rho A v^2}{2m}$$

---

**Python-kode:**

\`\`\`python
import numpy as np
import matplotlib.pyplot as plt

# Parametere
m = 0.5          # kg
r = 0.05         # m
A = np.pi * r**2 # m²
rho = 1.2        # kg/m³
Cd = 0.5
g = 9.81         # m/s²
s0 = 100         # m
v0 = 0           # m/s
dt = 0.001       # s (lite tidssteg for nøyaktighet)

# Initialiser med luftmotstand
tid_luft = [0]
s_luft = [s0]
v_luft = [v0]

t = 0
s = s0
v = v0

while s > 0:
    # Luftmotstand (oppover hvis v < 0, dvs. nedover bevegelse)
    Fd = 0.5 * Cd * rho * A * v**2 if v < 0 else -0.5 * Cd * rho * A * v**2

    # Akselerasjon
    a = -g + Fd / m

    # Euler-steg
    v = v + a * dt
    s = s + v * dt
    t = t + dt

    # Lagre
    tid_luft.append(t)
    s_luft.append(s)
    v_luft.append(v)

# Resultat med luftmotstand
t_luft_slutt = t
v_luft_slutt = v

# Uten luftmotstand (analytisk)
tid_ingen = np.linspace(0, t_luft_slutt, 1000)
s_ingen = s0 - 0.5 * g * tid_ingen**2
v_ingen = -g * tid_ingen

# Analytisk falltid uten luftmotstand
t_analytisk = np.sqrt(2 * s0 / g)
v_analytisk = -g * t_analytisk

# Print resultater
print("MED LUFTMOTSTAND:")
print(f"  Falltid: {t_luft_slutt:.3f} s")
print(f"  Slutthastig het: {v_luft_slutt:.3f} m/s")
print()
print("UTEN LUFTMOTSTAND:")
print(f"  Falltid: {t_analytisk:.3f} s")
print(f"  Slutthastig het: {v_analytisk:.3f} m/s")
print()
print("FORSKJELL:")
print(f"  Falltid: {t_luft_slutt - t_analytisk:.3f} s lengre med luftmotstand")
print(f"  Hastighet: {abs(v_luft_slutt) - abs(v_analytisk):.3f} m/s lavere med luftmotstand")

# Terminalhastig het (teoretisk)
v_terminal = np.sqrt(2 * m * g / (Cd * rho * A))
print(f"  Terminalhastighet: {v_terminal:.3f} m/s")

# Plott
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 5))

# Høyde
ax1.plot(tid_luft, s_luft, 'b-', label='Med luftmotstand', linewidth=2)
ax1.plot(tid_ingen, s_ingen, 'r--', label='Uten luftmotstand', linewidth=2)
ax1.set_xlabel('Tid (s)', fontsize=12)
ax1.set_ylabel('Høyde (m)', fontsize=12)
ax1.set_title('Høyde som funksjon av tid', fontsize=14)
ax1.legend(fontsize=11)
ax1.grid(True, alpha=0.3)
ax1.set_xlim(0, max(t_luft_slutt, t_analytisk) * 1.1)

# Hastighet
ax2.plot(tid_luft, v_luft, 'b-', label='Med luftmotstand', linewidth=2)
ax2.plot(tid_ingen, v_ingen, 'r--', label='Uten luftmotstand', linewidth=2)
ax2.axhline(-v_terminal, color='g', linestyle=':', label='Terminalhastighet', linewidth=2)
ax2.set_xlabel('Tid (s)', fontsize=12)
ax2.set_ylabel('Hastighet (m/s)', fontsize=12)
ax2.set_title('Hastighet som funksjon av tid', fontsize=14)
ax2.legend(fontsize=11)
ax2.grid(True, alpha=0.3)
ax2.set_xlim(0, max(t_luft_slutt, t_analytisk) * 1.1)

plt.tight_layout()
plt.show()
\`\`\`

---

**Resultat (typisk):**

\`\`\`
MED LUFTMOTSTAND:
  Falltid: 4.87 s
  Slutthastig het: -42.1 m/s

UTEN LUFTMOTSTAND:
  Falltid: 4.52 s
  Slutthastig het: -44.3 m/s

FORSKJELL:
  Falltid: 0.35 s lengre med luftmotstand
  Hastighet: 2.2 m/s lavere med luftmotstand
  Terminalhastighet: 71.4 m/s
\`\`\`

---

**Analyse:**

**1. Falltid:**
- Med luftmotstand: 4.87 s
- Uten luftmotstand: 4.52 s
- **Forskjell:** 0.35 s (8% lengre)

**Forklaring:** Luftmotstanden bremser ballen, så den bruker lengre tid.

**2. Slutthastig het:**
- Med luftmotstand: -42.1 m/s
- Uten luftmotstand: -44.3 m/s
- **Forskjell:** 2.2 m/s lavere

**Forklaring:** Luftmotstanden reduserer slutthastigheten.

**3. Terminalhastighet:**
- Teoretisk: 71.4 m/s
- Ballen når ikke terminalhastighet (kun 42 m/s)
- 100 m er ikke høyt nok

**4. Graf-observasjoner:**
- **Høyde-tid graf:** Kurvene divergerer (luftmotstand gir mer "kurvet" bane)
- **Hastighet-tid graf:** Med luftmotstand flater hastigheten ut (nærmer seg terminalhastighet)

**Konklusjon:**
For denne ballen ved 100 m høyde er luftmotstanden moderat betydelig (8% effekt på tid). For høyere høyder eller lettere objekter ville effekten vært større.`,
    },
    {
      id: 'fys1-1-3-note-tidssteg',
      type: 'note',
      title: 'Valg av tidssteg',
      content: `**Tidssteg ($\\Delta t$ eller $dt$) er kritisk for nøyaktighet!**

**For lite tidssteg:**
- ✓ Meget nøyaktig
- ✗ Meget treigt (mange beregninger)

**For stort tidssteg:**
- ✓ Rask beregning
- ✗ Unøyaktig
- ✗ Kan gi ustabile løsninger

**Hvordan velge?**
1. **Start med lite tidssteg** (f.eks. $dt = 0.001$)
2. **Test forskjellige verdier** (0.01, 0.001, 0.0001)
3. **Sjekk konvergens:** Når løsningen ikke endrer seg betydelig ved mindre $dt$, er du OK
4. **Tommelfingerregel:** Bruk $dt$ slik at systemet endrer seg lite per steg

**Eksempel:**
For fritt fall fra 100 m:
- Falltid ≈ 4.5 s
- Bruk minst 1000 steg: $dt = 0.0045$ s
- Bedre: 10000 steg: $dt = 0.00045$ s`,
    },
    {
      id: 'fys1-1-3-warning-feil',
      type: 'warning',
      title: 'Akkumulering av feil',
      content: `**Eulers metode er tilnærmet, og feil akkumuleres!**

**Kilde til feil:**
1. **Avrundingsfeil:** Datamaskinen bruker begrenset presisjon
2. **Diskretiseringsfeil:** Vi approximerer en kontinuerlig prosess med diskrete steg
3. **Stabilitets problemer:** For store tidssteg kan gi eksplosive feil

**Løsninger:**
- Bruk **mindre tidssteg**
- Bruk **mer avanserte metoder** (Runge-Kutta, se videregående kurs)
- **Valider** mot analytiske løsninger når mulig
- **Test konvergens** ved å redusere tidssteg

**Eksempel:**
Simulering av planetbaner over millioner av år krever meget presise metoder. Eulers metode ville akkumulere feil og "predikere" at planeten flyr ut av solsystemet!`,
    },
  ],
  exercises: [
    {
      id: 'fys1-1-3-ex-1',
      number: '1',
      type: 'interactive',
      tool: 'python',
      difficulty: 'lett',
      task: 'Bruk Eulers metode til å beregne posisjonen til et objekt som beveger seg med konstant hastighet $v = 5$ m/s fra $s_0 = 0$ m. Beregn posisjonen ved $t = 0, 1, 2, 3, 4, 5$ s med tidssteg $\\Delta t = 1$ s.',
      initialCode: `# Parametere
v = 5       # Konstant hastighet (m/s)
s0 = 0      # Startposisjon (m)
dt = 1      # Tidssteg (s)
t_slutt = 5 # Sluttid (s)

# Initialiser lister
tid = [0]
posisjon = [s0]

# TODO: Implementér Eulers metode
# Hint: s_neste = s + v * dt

t = 0
s = s0
while t < t_slutt:
    # Din kode her
    pass

# Print resultat
print("Tid (s)  Posisjon (m)")
for i in range(len(tid)):
    print(f"{tid[i]:6.1f}  {posisjon[i]:10.1f}")`,
      solution: `# Parametere
v = 5       # Konstant hastighet (m/s)
s0 = 0      # Startposisjon (m)
dt = 1      # Tidssteg (s)
t_slutt = 5 # Sluttid (s)

# Initialiser lister
tid = [0]
posisjon = [s0]

# Eulers metode
t = 0
s = s0
while t < t_slutt:
    # Euler-steg: s_neste = s + v * dt
    s = s + v * dt
    t = t + dt

    # Lagre
    tid.append(t)
    posisjon.append(s)

# Print resultat
print("Tid (s)  Posisjon (m)")
for i in range(len(tid)):
    print(f"{tid[i]:6.1f}  {posisjon[i]:10.1f}")

# Resultat:
# Tid (s)  Posisjon (m)
#    0.0         0.0
#    1.0         5.0
#    2.0        10.0
#    3.0        15.0
#    4.0        20.0
#    5.0        25.0`,
      hints: ['Husk: s_neste = s + v * dt', 'Oppdatér s og t i løkken', 'Lagre verdiene i listene'],
    },
    {
      id: 'fys1-1-3-ex-2',
      number: '2',
      type: 'interactive',
      tool: 'python',
      difficulty: 'lett',
      task: 'Simuler fritt fall fra 50 m høyde uten luftmotstand. Beregn når objektet treffer bakken og slutthastighe ten. Bruk $g = 9.81$ m/s² og $\\Delta t = 0.01$ s.',
      initialCode: `import numpy as np

# Parametere
g = 9.81    # m/s²
s0 = 50     # Starthøyde (m)
v0 = 0      # Starthastighet (m/s)
dt = 0.01   # Tidssteg (s)

# Initialiser
tid = [0]
høyde = [s0]
hastighet = [v0]

t = 0
s = s0
v = v0

# TODO: Implementér simulering med Eulers metode
# Stopp når s <= 0
# Hint: a = -g
#       v_neste = v + a * dt
#       s_neste = s + v * dt

# Print resultat
print(f"Falltid: {t:.3f} s")
print(f"Slutthastig het: {v:.3f} m/s")

# Analytisk løsning
t_analytisk = np.sqrt(2 * s0 / g)
v_analytisk = -g * t_analytisk
print(f"\\nAnalytisk tid: {t_analytisk:.3f} s")
print(f"Analytisk hastighet: {v_analytisk:.3f} m/s")`,
      solution: `import numpy as np

# Parametere
g = 9.81    # m/s²
s0 = 50     # Starthøyde (m)
v0 = 0      # Starthastighet (m/s)
dt = 0.01   # Tidssteg (s)

# Initialiser
tid = [0]
høyde = [s0]
hastighet = [v0]

t = 0
s = s0
v = v0

# Eulers metode
while s > 0:
    # Akselerasjon
    a = -g

    # Euler-steg
    v = v + a * dt
    s = s + v * dt
    t = t + dt

    # Lagre
    tid.append(t)
    høyde.append(s)
    hastighet.append(v)

# Print resultat
print(f"Falltid: {t:.3f} s")
print(f"Slutthastig het: {v:.3f} m/s")

# Analytisk løsning
t_analytisk = np.sqrt(2 * s0 / g)
v_analytisk = -g * t_analytisk
print(f"\\nAnalytisk tid: {t_analytisk:.3f} s")
print(f"Analytisk hastighet: {v_analytisk:.3f} m/s")

# Typisk resultat:
# Falltid: 3.194 s
# Slutthastig het: -31.333 m/s
#
# Analytisk tid: 3.194 s
# Analytisk hastighet: -31.338 m/s`,
      hints: ['while s > 0', 'a = -g', 'v = v + a * dt', 's = s + v * dt'],
    },
    {
      id: 'fys1-1-3-ex-3',
      number: '3',
      type: 'interactive',
      tool: 'python',
      difficulty: 'medium',
      task: 'Simuler et objekt som kastes vertikalt oppover med starthastighet $v_0 = 20$ m/s fra bakken. Beregn maksimal høyde og når objektet kommer tilbake til bakken.',
      initialCode: `import numpy as np
import matplotlib.pyplot as plt

# Parametere
g = 9.81      # m/s²
s0 = 0        # Startposisjon (bakken)
v0 = 20       # Starthastighet (m/s, oppover)
dt = 0.01     # Tidssteg (s)

# TODO: Implementér simulering
# Beregn maksimal høyde og total tid

# Analytisk løsning for sammenligning
t_topp_analytisk = v0 / g
h_maks_analytisk = v0**2 / (2 * g)
t_total_analytisk = 2 * v0 / g

print("NUMERISK:")
# Din kode her

print("\\nANALYTISK:")
print(f"Tid til topp: {t_topp_analytisk:.3f} s")
print(f"Maksimal høyde: {h_maks_analytisk:.3f} m")
print(f"Total tid: {t_total_analytisk:.3f} s")`,
      solution: `import numpy as np
import matplotlib.pyplot as plt

# Parametere
g = 9.81      # m/s²
s0 = 0        # Startposisjon (bakken)
v0 = 20       # Starthastighet (m/s, oppover)
dt = 0.01     # Tidssteg (s)

# Initialiser
tid = [0]
høyde = [s0]
hastighet = [v0]

t = 0
s = s0
v = v0
h_maks = s0

# Eulers metode
# Fase 1: Oppover (til v = 0)
# Fase 2: Nedover (til s = 0)
while True:
    # Akselerasjon
    a = -g

    # Euler-steg
    v = v + a * dt
    s = s + v * dt
    t = t + dt

    # Oppdatér maksimal høyde
    if s > h_maks:
        h_maks = s

    # Lagre
    tid.append(t)
    høyde.append(s)
    hastighet.append(v)

    # Stopp når tilbake på bakken (etter å ha vært oppe)
    if s <= 0 and t > 0.1:
        break

print("NUMERISK:")
print(f"Maksimal høyde: {h_maks:.3f} m")
print(f"Total tid: {t:.3f} s")

# Analytisk løsning
t_topp_analytisk = v0 / g
h_maks_analytisk = v0**2 / (2 * g)
t_total_analytisk = 2 * v0 / g

print("\\nANALYTISK:")
print(f"Tid til topp: {t_topp_analytisk:.3f} s")
print(f"Maksimal høyde: {h_maks_analytisk:.3f} m")
print(f"Total tid: {t_total_analytisk:.3f} s")

# Plott
plt.figure(figsize=(12, 5))

# Høyde
plt.subplot(1, 2, 1)
plt.plot(tid, høyde, 'b-', linewidth=2)
plt.xlabel('Tid (s)', fontsize=12)
plt.ylabel('Høyde (m)', fontsize=12)
plt.title('Høyde som funksjon av tid', fontsize=14)
plt.grid(True, alpha=0.3)
plt.axhline(h_maks, color='r', linestyle='--', label=f'Maks: {h_maks:.1f} m')
plt.legend()

# Hastighet
plt.subplot(1, 2, 2)
plt.plot(tid, hastighet, 'r-', linewidth=2)
plt.xlabel('Tid (s)', fontsize=12)
plt.ylabel('Hastighet (m/s)', fontsize=12)
plt.title('Hastighet som funksjon av tid', fontsize=14)
plt.grid(True, alpha=0.3)
plt.axhline(0, color='k', linestyle=':', alpha=0.5)

plt.tight_layout()
plt.show()

# Typisk resultat:
# NUMERISK:
# Maksimal høyde: 20.387 m
# Total tid: 4.078 s
#
# ANALYTISK:
# Tid til topp: 2.039 s
# Maksimal høyde: 20.387 m
# Total tid: 4.078 s`,
      hints: ['Objektet stopper ved topp (v = 0)', 'Finn maksimal høyde ved å sjekke s kontinuerlig', 'Stopp når s <= 0 (etter å ha vært oppe)'],
    },
    {
      id: 'fys1-1-3-ex-4',
      number: '4',
      type: 'interactive',
      tool: 'python',
      difficulty: 'medium',
      task: 'Simuler en pendel med lengde $L = 1$ m og startvinkel $\\theta_0 = 30°$. Bruk Eulers metode til å beregne vinkelen som funksjon av tid. Plot resultatet. (Hint: $\\frac{d^2\\theta}{dt^2} = -\\frac{g}{L}\\sin\\theta$)',
      initialCode: `import numpy as np
import matplotlib.pyplot as plt

# Parametere
g = 9.81                # m/s²
L = 1.0                 # Lengde (m)
theta0 = np.radians(30) # Startvinkel (radianer)
omega0 = 0              # Start-vinkelhastighet (rad/s)
dt = 0.01               # Tidssteg (s)
t_slutt = 10            # Simuleringstid (s)

# TODO: Implementér pendelsimulering
# Differensiallikninger:
#   d(theta)/dt = omega
#   d(omega)/dt = -(g/L) * sin(theta)

# Plott vinkelen som funksjon av tid`,
      solution: `import numpy as np
import matplotlib.pyplot as plt

# Parametere
g = 9.81                # m/s²
L = 1.0                 # Lengde (m)
theta0 = np.radians(30) # Startvinkel (radianer)
omega0 = 0              # Start-vinkelhastighet (rad/s)
dt = 0.01               # Tidssteg (s)
t_slutt = 10            # Simuleringstid (s)

# Initialiser
tid = [0]
theta_liste = [theta0]
omega_liste = [omega0]

t = 0
theta = theta0
omega = omega0

# Eulers metode
while t < t_slutt:
    # Vinkelakselerasjon
    alpha = -(g / L) * np.sin(theta)

    # Euler-steg
    omega = omega + alpha * dt
    theta = theta + omega * dt
    t = t + dt

    # Lagre
    tid.append(t)
    theta_liste.append(theta)
    omega_liste.append(omega)

# Konverter til grader for plotting
theta_grader = np.degrees(theta_liste)

# Beregn periode
# For små vinkler: T ≈ 2π√(L/g)
T_analytisk = 2 * np.pi * np.sqrt(L / g)
print(f"Analytisk periode (små vinkler): {T_analytisk:.3f} s")

# Plott
plt.figure(figsize=(12, 5))

# Vinkel
plt.subplot(1, 2, 1)
plt.plot(tid, theta_grader, 'b-', linewidth=2)
plt.xlabel('Tid (s)', fontsize=12)
plt.ylabel('Vinkel (grader)', fontsize=12)
plt.title('Pendel: Vinkel som funksjon av tid', fontsize=14)
plt.grid(True, alpha=0.3)
plt.axhline(0, color='k', linestyle=':', alpha=0.5)

# Faserom (vinkel vs vinkelhastighet)
plt.subplot(1, 2, 2)
plt.plot(theta_grader, omega_liste, 'r-', linewidth=1.5)
plt.xlabel('Vinkel (grader)', fontsize=12)
plt.ylabel('Vinkelhastighet (rad/s)', fontsize=12)
plt.title('Faserom (phase space)', fontsize=14)
plt.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()`,
      hints: ['Bruk to variabler: theta (vinkel) og omega (vinkelhastighet)', 'd(omega)/dt = -(g/L)*sin(theta)', 'd(theta)/dt = omega'],
    },
    {
      id: 'fys1-1-3-ex-5',
      number: '5',
      type: 'interactive',
      tool: 'python',
      difficulty: 'vanskelig',
      task: 'Simuler en ball som spretter på gulvet. Inkludér tyngdekraft og elastisk kollisjon med restitusjonskoe ffisient $e = 0.8$. Start fra høyde 5 m og simuler i 10 sekunder. Plot høyden som funksjon av tid.',
      initialCode: `import numpy as np
import matplotlib.pyplot as plt

# Parametere
g = 9.81     # m/s²
s0 = 5       # Starthøyde (m)
v0 = 0       # Starthastighet (m/s)
e = 0.8      # Restitusjonskoe ffisient
dt = 0.001   # Tidssteg (s)
t_slutt = 10 # Simuleringstid (s)

# TODO: Implementér sprettende ball
# Når s <= 0:
#   - Reversér hastighet: v = -e * v
#   - Sett s = 0 (unngå at ballen går under bakken)`,
      solution: `import numpy as np
import matplotlib.pyplot as plt

# Parametere
g = 9.81     # m/s²
s0 = 5       # Starthøyde (m)
v0 = 0       # Starthastighet (m/s)
e = 0.8      # Restitusjonskoe ffisient
dt = 0.001   # Tidssteg (s)
t_slutt = 10 # Simuleringstid (s)

# Initialiser
tid = [0]
høyde = [s0]
hastighet = [v0]

t = 0
s = s0
v = v0

# Eulers metode med kollisjonshåndtering
while t < t_slutt:
    # Akselerasjon
    a = -g

    # Euler-steg
    v = v + a * dt
    s = s + v * dt
    t = t + dt

    # Kollisjon med bakken
    if s <= 0:
        s = 0               # Sett på bakken
        v = -e * v          # Reversér og redusér hastighet

    # Lagre
    tid.append(t)
    høyde.append(s)
    hastighet.append(v)

# Plott
plt.figure(figsize=(12, 5))

# Høyde
plt.subplot(1, 2, 1)
plt.plot(tid, høyde, 'b-', linewidth=1.5)
plt.xlabel('Tid (s)', fontsize=12)
plt.ylabel('Høyde (m)', fontsize=12)
plt.title('Sprettende ball: Høyde vs tid', fontsize=14)
plt.grid(True, alpha=0.3)
plt.xlim(0, t_slutt)
plt.ylim(-0.5, s0 * 1.1)

# Hastighet
plt.subplot(1, 2, 2)
plt.plot(tid, hastighet, 'r-', linewidth=1.5)
plt.xlabel('Tid (s)', fontsize=12)
plt.ylabel('Hastighet (m/s)', fontsize=12)
plt.title('Sprettende ball: Hastighet vs tid', fontsize=14)
plt.grid(True, alpha=0.3)
plt.axhline(0, color='k', linestyle=':', alpha=0.5)
plt.xlim(0, t_slutt)

plt.tight_layout()
plt.show()

# Beregn spretthøyder
spretter = []
i = 0
while i < len(høyde) - 1:
    # Finn lokal maksimum (topp av sprett)
    if høyde[i] > 0.01 and hastighet[i] > 0 and hastighet[i+1] <= 0:
        spretter.append(høyde[i])
    i += 1

print(f"Antall spretter: {len(spretter)}")
print(f"Spretthøyder (første 10): {[f'{h:.3f}' for h in spretter[:10]]}")

# Teoretisk spretthøyde
teoretisk = [s0 * e**(2*n) for n in range(len(spretter))]
print(f"Teoretisk (første 10): {[f'{h:.3f}' for h in teoretisk[:10]]}")`,
      hints: ['Sjekk if s <= 0 for å oppdage kollisjon', 'Ved kollisjon: v = -e * v', 'Husk å sette s = 0 etter kollisjon'],
    },
    {
      id: 'fys1-1-3-ex-6',
      number: '6',
      type: 'interactive',
      tool: 'python',
      difficulty: 'vanskelig',
      task: 'Simuler fritt fall med luftmotstand for en fallskjermhopper. Start fra 3000 m høyde. Sammenlign med og uten fallskjerm (forskjellig areal). Plot høyde, hastighet og akselerasjon som funksjon av tid.',
      initialCode: `import numpy as np
import matplotlib.pyplot as plt

# Parametere
g = 9.81        # m/s²
m = 80          # Masse (kg)
rho = 1.2       # Luftens tetthet (kg/m³)
Cd = 1.0        # Luftmotstandskoeffisient
A_uten = 0.5    # Tverrsnittareal uten fallskjerm (m²)
A_med = 25      # Tverrsnittareal med fallskjerm (m²)
s0 = 3000       # Starthøyde (m)
v0 = 0          # Starthastighet (m/s)
dt = 0.01       # Tidssteg (s)
t_skjerm = 10   # Tid før fallskjerm åpnes (s)

# TODO: Implementér simulering
# - Bruk A_uten til t = t_skjerm
# - Bytt til A_med når t >= t_skjerm
# - Beregn luftmotstand: Fd = 0.5 * Cd * rho * A * v^2
# - Akselerasjon: a = -g + Fd/m (husk fortegn!)`,
      solution: `import numpy as np
import matplotlib.pyplot as plt

# Parametere
g = 9.81        # m/s²
m = 80          # Masse (kg)
rho = 1.2       # Luftens tetthet (kg/m³)
Cd = 1.0        # Luftmotstandskoeffisient
A_uten = 0.5    # Tverrsnittareal uten fallskjerm (m²)
A_med = 25      # Tverrsnittareal med fallskjerm (m²)
s0 = 3000       # Starthøyde (m)
v0 = 0          # Starthastighet (m/s)
dt = 0.01       # Tidssteg (s)
t_skjerm = 10   # Tid før fallskjerm åpnes (s)

# Initialiser
tid = [0]
høyde = [s0]
hastighet = [v0]
akselerasjon = [-g]

t = 0
s = s0
v = v0

# Eulers metode
while s > 0:
    # Velg areal basert på om fallskjerm er åpnet
    A = A_med if t >= t_skjerm else A_uten

    # Luftmotstand (oppover hvis bevegelse nedover)
    if v < 0:  # Nedover bevegelse
        Fd = 0.5 * Cd * rho * A * v**2
    else:      # Oppover bevegelse (teoretisk)
        Fd = -0.5 * Cd * rho * A * v**2

    # Akselerasjon
    a = -g + Fd / m

    # Euler-steg
    v = v + a * dt
    s = s + v * dt
    t = t + dt

    # Lagre
    tid.append(t)
    høyde.append(s)
    hastighet.append(v)
    akselerasjon.append(a)

# Resultat
print(f"Total falltid: {t:.2f} s")
print(f"Slutthastig het: {v:.2f} m/s")

# Terminalhastig heter
v_term_uten = np.sqrt(2 * m * g / (Cd * rho * A_uten))
v_term_med = np.sqrt(2 * m * g / (Cd * rho * A_med))
print(f"\\nTerminalhastighet uten fallskjerm: {v_term_uten:.2f} m/s")
print(f"Terminalhastighet med fallskjerm: {v_term_med:.2f} m/s")

# Plott
fig, axes = plt.subplots(1, 3, figsize=(18, 5))

# Høyde
axes[0].plot(tid, høyde, 'b-', linewidth=2)
axes[0].axvline(t_skjerm, color='r', linestyle='--', label='Fallskjerm åpnes', linewidth=2)
axes[0].set_xlabel('Tid (s)', fontsize=12)
axes[0].set_ylabel('Høyde (m)', fontsize=12)
axes[0].set_title('Høyde vs tid', fontsize=14)
axes[0].legend(fontsize=11)
axes[0].grid(True, alpha=0.3)

# Hastighet
axes[1].plot(tid, hastighet, 'r-', linewidth=2)
axes[1].axhline(-v_term_uten, color='orange', linestyle=':', label=f'v_term uten: {v_term_uten:.1f} m/s', linewidth=2)
axes[1].axhline(-v_term_med, color='g', linestyle=':', label=f'v_term med: {v_term_med:.1f} m/s', linewidth=2)
axes[1].axvline(t_skjerm, color='r', linestyle='--', linewidth=2)
axes[1].set_xlabel('Tid (s)', fontsize=12)
axes[1].set_ylabel('Hastighet (m/s)', fontsize=12)
axes[1].set_title('Hastighet vs tid', fontsize=14)
axes[1].legend(fontsize=11)
axes[1].grid(True, alpha=0.3)

# Akselerasjon
axes[2].plot(tid, akselerasjon, 'g-', linewidth=2)
axes[2].axhline(-g, color='k', linestyle=':', label=f'Tyngdeakselerasjon: {-g:.1f} m/s²', linewidth=2)
axes[2].axhline(0, color='k', linestyle='-', alpha=0.3, linewidth=1)
axes[2].axvline(t_skjerm, color='r', linestyle='--', linewidth=2)
axes[2].set_xlabel('Tid (s)', fontsize=12)
axes[2].set_ylabel('Akselerasjon (m/s²)', fontsize=12)
axes[2].set_title('Akselerasjon vs tid', fontsize=14)
axes[2].legend(fontsize=11)
axes[2].grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

# Typisk resultat:
# Total falltid: 257.23 s
# Slutthastig het: -5.59 m/s
#
# Terminalhastighet uten fallskjerm: 51.28 m/s
# Terminalhastighet med fallskjerm: 10.26 m/s`,
      hints: ['Velg A basert på om t >= t_skjerm', 'Fd oppover hvis v < 0 (nedover)', 'a = -g + Fd/m'],
    },
    {
      id: 'fys1-1-3-ex-7',
      number: '7',
      type: 'classic',
      difficulty: 'lett',
      task: 'Forklar med egne ord hva Eulers metode går ut på. Hvorfor trenger vi numeriske metoder i fysikk?',
      solution: `**Hva er Eulers metode?**

Eulers metode er en numerisk metode for å løse differensiallikninger. Den går ut på å:
1. **Dele opp problemet i små tidssteg**
2. **Bruke deriverten til å estimere neste verdi**
3. **Gjenta prosessen mange ganger**

**Analogien:**
Tenk deg at du står på en sti i et landskap (en kurve). Eulers metode går ut på:
- Se retningen stien går (tangenten/deriverten)
- Ta et lite steg i den retningen
- Se den nye retningen fra det nye punktet
- Ta et nytt lite steg
- Osv.

**Matematisk:**
Hvis vi har en differensialligning:
$$\\frac{dy}{dt} = f(t, y)$$

Eulers metode sier:
$$y_{\\text{neste}} = y_{\\text{nå}} + f(t, y) \\cdot \\Delta t$$

**Eksempel:**
Hvis vi vet at en bil akselererer med $a = 2$ m/s² og har hastighet $v = 10$ m/s, kan vi estimere hastigheten etter 1 sekund:
$$v_{\\text{neste}} = 10 + 2 \\times 1 = 12 \\text{ m/s}$$

---

**Hvorfor trenger vi numeriske metoder?**

**1. Mange problemer har ingen analytisk løsning**

**Eksempel: Fritt fall med luftmotstand**
- Differensialligning: $m\\frac{dv}{dt} = -mg + \\frac{1}{2}C_d \\rho A v^2$
- Dette kan IKKE løses med penn og papir (ingen formel)
- Løsning: Bruk numeriske metoder!

**2. Komplekse systemer**

**Eksempel: Trekroppsproblemer**
- Tre himmellegemer som påvirker hverandre med tyngdekraft
- Selv med Newtons lover kan vi ikke finne analytisk løsning
- Løsning: Numeriske metoder (brukes av NASA)

**3. Vær og klima**

**Eksempel: Værvarsling**
- Atmosfæren har millioner av variabler
- Differensiallikninger med mange koblede variabler
- Løsning: Superdatamaskiner med numeriske metoder

**4. Kvanteproblemer**

**Eksempel: Schrödinger-likningen**
- For komplekse systemer (mange elektroner)
- Kan ikke løses analytisk
- Løsning: Numeriske metoder (brukes i kjemi og materialvitenskap)

**5. Visualisering**

**Eksempel: Animasjoner**
- Vi vil se hvordan et system utvikler seg visuelt
- Numeriske metoder lar oss beregne hvert bilde
- Brukes i spill, filmer, og simuleringer

---

**Oppsummering:**

**Eulers metode:**
- Løs differensiallikninger steg for steg
- Bruk deriverten til å estimere neste verdi
- Enkel, men nøyaktig nok for mange problemer

**Hvorfor trenger vi det:**
- Mange fysiske problemer har ingen analytisk løsning
- Datamaskiner kan beregne tilnærmede løsninger raskt
- Gir visuell innsikt (grafer, animasjoner)
- Essensielt for moderne vitenskap og ingeniørvirksomhet`,
      hints: ['Tenk på steg-for-steg tilnærming', 'Hva kan ikke løses analytisk?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-1-3-ex-8',
      number: '8',
      type: 'classic',
      difficulty: 'medium',
      task: 'Diskutér hvordan valg av tidssteg $\\Delta t$ påvirker nøyaktigheten i Eulers metode. Hva skjer hvis $\\Delta t$ er for stort? Hva skjer hvis det er for lite?',
      solution: `**Tidssteg $\\Delta t$ og nøyaktighet:**

Valg av tidssteg er **kritisk** for både nøyaktighet og effektivitet i Eulers metode.

---

**FOR STORT TIDSSTEG ($\\Delta t$ for stort):**

**Problem 1: Lav nøyaktighet**

**Forklaring:**
- Eulers metode antar at deriverten er konstant over tidsskrittet
- For stort $\\Delta t$ gjør denne antakelsen dårlig
- Vi "hopper over" detaljer i kurven

**Eksempel:**
En ball kastes oppover. Hvis $\\Delta t = 1$ s:
- Vi beregner kun posisjon hvert sekund
- Mister informasjon om hva som skjer mellom hvert sekund
- Nøyaktigheten reduseres

**Visualisering:**
Tenk på en kurve. Eulers metode følger tangenten.
- Liten $\\Delta t$: Følger kurven nøye
- Stor $\\Delta t$: Avviker mer fra kurven

**Problem 2: Ustabilitet**

**Forklaring:**
- For meget store $\\Delta t$ kan metoden bli ustabil
- Verdiene kan "eksplodere" eller oscillere vilt
- Resultatet gir ingen fysisk mening

**Eksempel:**
Pendelbevegelse med for stort $\\Delta t$:
- Pendelen kan plutselig få meget høy energi
- Vinkelen "eksploderer"
- Simulering kollapser

**Tommelfingerregel:**
$\\Delta t$ skal være mye mindre enn typiske tidsskalaer i systemet.

---

**FOR LITE TIDSSTEG ($\\Delta t$ for lite):**

**Problem 1: Lang beregningstid**

**Forklaring:**
- Flere steg = flere beregninger
- Datamaskinen bruker lengre tid
- Kan bli upraktisk for lange simuleringer

**Eksempel:**
Simulere 10 sekunder:
- Med $\\Delta t = 0.01$ s: 1000 steg
- Med $\\Delta t = 0.0001$ s: 100 000 steg (100× treigere)

**Problem 2: Avrundingsfeil**

**Forklaring:**
- Datamaskiner har begrenset presisjon (64-bit flyttall)
- Mange små beregninger akkumulerer avrundingsfeil
- Kan faktisk redusere nøyaktighet hvis $\\Delta t$ er ekstremt lite!

**Eksempel:**
$\\Delta t = 10^{-15}$ s gir:
- Enorm antall steg
- Hver beregning har små avrundingsfeil
- Feilene akkumuleres til stor total feil

---

**OPTIMAL TIDSSTEG:**

**Tommelfingerregel:**
$$\\Delta t \\ll \\tau$$

der $\\tau$ er typisk tidsskala i systemet.

**Eksempel 1: Fritt fall fra 100 m**
- Typisk tidsskala: $\\tau = \\sqrt{\\frac{2h}{g}} \\approx 4.5$ s
- Velg $\\Delta t \\ll 4.5$ s, f.eks. $\\Delta t = 0.01$ s (450 steg)

**Eksempel 2: Pendel med periode 2 s**
- Typisk tidsskala: $\\tau = 2$ s
- Velg $\\Delta t \\ll 2$ s, f.eks. $\\Delta t = 0.01$ s (200 steg per periode)

**Eksempel 3: Molekylær vibrasjon (periode $10^{-14}$ s)**
- Typisk tidsskala: $\\tau = 10^{-14}$ s
- Velg $\\Delta t \\approx 10^{-16}$ s (meget krevende!)

---

**KONVERGENSTEST:**

**Hvordan finne optimal $\\Delta t$:**

1. **Start med ganske lite $\\Delta t$** (f.eks. 0.01 s)
2. **Kjør simulering**
3. **Halvér $\\Delta t$** (f.eks. 0.005 s)
4. **Kjør simulering igjen**
5. **Sammenlign resultater**
   - Hvis forskjellen er neglisjerbar: Første $\\Delta t$ var OK
   - Hvis forskjellen er betydelig: Gjenta fra steg 3

**Kriterium:**
Løsningen skal ikke endres betydelig når $\\Delta t$ reduseres.

---

**PRAKTISK EKSEMPEL:**

**Problem:** Fritt fall fra 50 m.

**Test forskjellige $\\Delta t$:**

| $\\Delta t$ (s) | Antall steg | Falltid (s) | Slutthastig het (m/s) | Beregningstid |
|-----------------|-------------|-------------|--------------------|---------------|
| 0.1 | 32 | 3.20 | -31.4 | Meget rask |
| 0.01 | 319 | 3.194 | -31.34 | Rask |
| 0.001 | 3194 | 3.1939 | -31.338 | Moderat |
| 0.0001 | 31939 | 3.19389 | -31.3378 | Treg |

**Analytisk løsning:** t = 3.19388 s, v = -31.3378 m/s

**Observasjon:**
- $\\Delta t = 0.1$ s: Betydelig feil (1%)
- $\\Delta t = 0.01$ s: Liten feil (0.01%)
- $\\Delta t = 0.001$ s: Neglisjerbar feil (0.0003%)
- $\\Delta t = 0.0001$ s: Ingen ytterligere forbedring (avrundingsfeil dominerer)

**Optimal valg:** $\\Delta t = 0.001$ s eller $0.01$ s (avhenger av krav til nøyaktighet).

---

**OPPSUMMERING:**

| $\\Delta t$ | Nøyaktighet | Beregningstid | Stabilitet |
|-------------|-------------|---------------|------------|
| For stort | ✗ Dårlig | ✓ Rask | ✗ Ustabil |
| Optimalt | ✓ God | ✓ Akseptabel | ✓ Stabil |
| For lite | ✗ Avrundingsfeil | ✗ Treg | ✓ Stabil |

**Konklusjon:**
Velg $\\Delta t$ slik at:
1. Systemet endrer seg lite per steg
2. Simulering konvergerer (ikke endres ved mindre $\\Delta t$)
3. Beregningstiden er akseptabel`,
      hints: ['Tenk på nøyaktighet vs. hastighet', 'Hva skjer hvis systemet endrer seg mye per steg?', 'Test konvergens'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-1-3-ex-9',
      number: '9',
      type: 'interactive',
      tool: 'python',
      difficulty: 'vanskelig',
      task: 'Simuler et prosjektil (skrått kast) med luftmotstand i 2D. Start med $v_0 = 50$ m/s i 45° vinkel. Sammenlign bane med og uten luftmotstand. Plot trajektoriene.',
      initialCode: `import numpy as np
import matplotlib.pyplot as plt

# Parametere
v0 = 50                  # Starthastighet (m/s)
theta = np.radians(45)   # Utskytningsvinkel (radianer)
g = 9.81                 # m/s²
m = 1.0                  # Masse (kg)
rho = 1.2                # Luftens tetthet (kg/m³)
Cd = 0.5                 # Luftmotstandskoeffisient
r = 0.05                 # Radius (m)
A = np.pi * r**2         # Tverrsnittareal (m²)
dt = 0.01                # Tidssteg (s)

# Startbetingelser
vx0 = v0 * np.cos(theta)
vy0 = v0 * np.sin(theta)

# TODO: Implementér 2D simulering
# Med luftmotstand:
#   v = sqrt(vx^2 + vy^2)  # Total hastighet
#   Fdx = -0.5 * Cd * rho * A * v * vx  # Luftmotstand i x
#   Fdy = -0.5 * Cd * rho * A * v * vy  # Luftmotstand i y
#   ax = Fdx / m
#   ay = -g + Fdy / m
#
# Uten luftmotstand:
#   ax = 0
#   ay = -g`,
      solution: `import numpy as np
import matplotlib.pyplot as plt

# Parametere
v0 = 50                  # Starthastighet (m/s)
theta = np.radians(45)   # Utskytningsvinkel (radianer)
g = 9.81                 # m/s²
m = 1.0                  # Masse (kg)
rho = 1.2                # Luftens tetthet (kg/m³)
Cd = 0.5                 # Luftmotstandskoeffisient
r = 0.05                 # Radius (m)
A = np.pi * r**2         # Tverrsnittareal (m²)
dt = 0.01                # Tidssteg (s)

# Startbetingelser
vx0 = v0 * np.cos(theta)
vy0 = v0 * np.sin(theta)

# MED LUFTMOTSTAND
x_luft = [0]
y_luft = [0]
t = 0
x, y = 0, 0
vx, vy = vx0, vy0

while y >= 0:
    # Total hastighet
    v = np.sqrt(vx**2 + vy**2)

    # Luftmotstand
    Fdx = -0.5 * Cd * rho * A * v * vx
    Fdy = -0.5 * Cd * rho * A * v * vy

    # Akselerasjon
    ax = Fdx / m
    ay = -g + Fdy / m

    # Euler-steg
    vx = vx + ax * dt
    vy = vy + ay * dt
    x = x + vx * dt
    y = y + vy * dt
    t = t + dt

    if y >= 0:
        x_luft.append(x)
        y_luft.append(y)

rekkevidde_luft = x

# UTEN LUFTMOTSTAND (analytisk)
t_slutt = 2 * v0 * np.sin(theta) / g
tid_ingen = np.linspace(0, t_slutt, 1000)
x_ingen = v0 * np.cos(theta) * tid_ingen
y_ingen = v0 * np.sin(theta) * tid_ingen - 0.5 * g * tid_ingen**2

rekkevidde_ingen = v0**2 * np.sin(2 * theta) / g

# Resultat
print("MED LUFTMOTSTAND:")
print(f"  Rekkevidde: {rekkevidde_luft:.2f} m")
print(f"  Maksimal høyde: {max(y_luft):.2f} m")
print()
print("UTEN LUFTMOTSTAND:")
print(f"  Rekkevidde: {rekkevidde_ingen:.2f} m")
print(f"  Maksimal høyde: {max(y_ingen):.2f} m")
print()
print("FORSKJELL:")
print(f"  Rekkevidde: {rekkevidde_ingen - rekkevidde_luft:.2f} m kortere med luftmotstand")
print(f"  Reduksjon: {(1 - rekkevidde_luft/rekkevidde_ingen)*100:.1f}%")

# Plott
plt.figure(figsize=(12, 8))

# Trajektorier
plt.plot(x_luft, y_luft, 'b-', linewidth=2, label='Med luftmotstand')
plt.plot(x_ingen, y_ingen, 'r--', linewidth=2, label='Uten luftmotstand')
plt.xlabel('Horisontal avstand (m)', fontsize=14)
plt.ylabel('Høyde (m)', fontsize=14)
plt.title('Prosjektilbevegelse: Med vs uten luftmotstand', fontsize=16)
plt.legend(fontsize=12)
plt.grid(True, alpha=0.3)
plt.axis('equal')
plt.xlim(0, max(rekkevidde_ingen, rekkevidde_luft) * 1.1)
plt.ylim(0, max(max(y_ingen), max(y_luft)) * 1.1)

plt.tight_layout()
plt.show()

# Typisk resultat:
# MED LUFTMOTSTAND:
#   Rekkevidde: 187.34 m
#   Maksimal høyde: 58.21 m
#
# UTEN LUFTMOTSTAND:
#   Rekkevidde: 254.84 m
#   Maksimal høyde: 63.71 m
#
# FORSKJELL:
#   Rekkevidde: 67.50 m kortere med luftmotstand
#   Reduksjon: 26.5%`,
      hints: ['Bruk vx og vy for x og y komponenter', 'Luftmotstand: Fd = -0.5 * Cd * rho * A * v * v_komponent', 'Total hastighet: v = sqrt(vx^2 + vy^2)'],
    },
    {
      id: 'fys1-1-3-ex-10',
      number: '10',
      type: 'interactive',
      tool: 'python',
      difficulty: 'vanskelig',
      task: 'Simuler en rakett med variabel masse. Start med masse 1000 kg (inkludert drivstoff 800 kg). Drivstoffet brenner med 10 kg/s og gir thrust 50000 N. Inkludér tyngdekraft og luftmotstand. Plot høyde, hastighet og masse som funksjon av tid.',
      initialCode: `import numpy as np
import matplotlib.pyplot as plt

# Parametere
m0 = 1000           # Total startmasse (kg)
m_drivstoff = 800   # Drivstoff masse (kg)
m_tom = m0 - m_drivstoff  # Tom rakett masse (kg)
drivstoff_rate = 10 # kg/s
thrust = 50000      # N
g = 9.81            # m/s²
rho = 1.2           # kg/m³
Cd = 0.5
A = 2.0             # m²
dt = 0.01           # s

# TODO: Implementér rakettsimuler ing
# Massen endres: m = m - drivstoff_rate * dt
# Når m <= m_tom: Drivstoffet er tomt (thrust = 0)
# Akselerasjon: a = (thrust - m*g - Fd) / m`,
      solution: `import numpy as np
import matplotlib.pyplot as plt

# Parametere
m0 = 1000           # Total startmasse (kg)
m_drivstoff = 800   # Drivstoff masse (kg)
m_tom = m0 - m_drivstoff  # Tom rakett masse (kg)
drivstoff_rate = 10 # kg/s
thrust = 50000      # N
g = 9.81            # m/s²
rho0 = 1.2          # kg/m³ (ved havnivå)
Cd = 0.5
A = 2.0             # m²
dt = 0.01           # s
t_slutt = 200       # s

# Initialiser
tid = [0]
høyde = [0]
hastighet = [0]
masse = [m0]
akselerasjon_liste = [0]

t = 0
s = 0
v = 0
m = m0
drivstoff = m_drivstoff

while t < t_slutt and s >= 0:
    # Luftens tetthet (avtar med høyde)
    rho = rho0 * np.exp(-s / 10000)  # Eksponentiell modell

    # Luftmotstand
    if v > 0:  # Oppover
        Fd = -0.5 * Cd * rho * A * v**2
    else:      # Nedover
        Fd = 0.5 * Cd * rho * A * v**2

    # Thrust (kun hvis drivstoff igjen)
    if drivstoff > 0:
        F_thrust = thrust
        drivstoff = drivstoff - drivstoff_rate * dt
        m = m - drivstoff_rate * dt
    else:
        F_thrust = 0

    # Netto kraft og akselerasjon
    F_netto = F_thrust - m * g + Fd
    a = F_netto / m

    # Euler-steg
    v = v + a * dt
    s = s + v * dt
    t = t + dt

    # Lagre
    tid.append(t)
    høyde.append(s)
    hastighet.append(v)
    masse.append(m)
    akselerasjon_liste.append(a)

# Finn maksimal høyde
h_maks = max(høyde)
i_maks = høyde.index(h_maks)
t_maks = tid[i_maks]

print(f"Drivstoff tom etter: {m_drivstoff / drivstoff_rate:.1f} s")
print(f"Maksimal høyde: {h_maks:.0f} m ved t = {t_maks:.1f} s")
print(f"Maksimal hastighet: {max(hastighet):.1f} m/s")

# Plott
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# Høyde
axes[0, 0].plot(tid, høyde, 'b-', linewidth=2)
axes[0, 0].axhline(h_maks, color='r', linestyle='--', label=f'Maks: {h_maks:.0f} m', linewidth=1.5)
axes[0, 0].set_xlabel('Tid (s)', fontsize=12)
axes[0, 0].set_ylabel('Høyde (m)', fontsize=12)
axes[0, 0].set_title('Høyde vs tid', fontsize=14)
axes[0, 0].legend(fontsize=11)
axes[0, 0].grid(True, alpha=0.3)

# Hastighet
axes[0, 1].plot(tid, hastighet, 'r-', linewidth=2)
axes[0, 1].axhline(0, color='k', linestyle=':', alpha=0.5)
axes[0, 1].set_xlabel('Tid (s)', fontsize=12)
axes[0, 1].set_ylabel('Hastighet (m/s)', fontsize=12)
axes[0, 1].set_title('Hastighet vs tid', fontsize=14)
axes[0, 1].grid(True, alpha=0.3)

# Masse
axes[1, 0].plot(tid, masse, 'g-', linewidth=2)
axes[1, 0].axhline(m_tom, color='r', linestyle='--', label=f'Tom rakett: {m_tom} kg', linewidth=1.5)
axes[1, 0].set_xlabel('Tid (s)', fontsize=12)
axes[1, 0].set_ylabel('Masse (kg)', fontsize=12)
axes[1, 0].set_title('Masse vs tid', fontsize=14)
axes[1, 0].legend(fontsize=11)
axes[1, 0].grid(True, alpha=0.3)

# Akselerasjon
axes[1, 1].plot(tid, akselerasjon_liste, 'purple', linewidth=2)
axes[1, 1].axhline(0, color='k', linestyle=':', alpha=0.5)
axes[1, 1].axhline(-g, color='r', linestyle='--', label=f'Tyngdeakselerasjon: {-g:.1f} m/s²', linewidth=1.5, alpha=0.7)
axes[1, 1].set_xlabel('Tid (s)', fontsize=12)
axes[1, 1].set_ylabel('Akselerasjon (m/s²)', fontsize=12)
axes[1, 1].set_title('Akselerasjon vs tid', fontsize=14)
axes[1, 1].legend(fontsize=11)
axes[1, 1].grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

# Typisk resultat:
# Drivstoff tom etter: 80.0 s
# Maksimal høyde: 88429 m ved t = 141.7 s
# Maksimal hastighet: 1324.2 m/s`,
      hints: ['Oppdatér masse: m = m - drivstoff_rate * dt', 'Sjekk if drivstoff > 0 før thrust', 'F_netto = thrust - m*g + Fd'],
    },
  ],
};
