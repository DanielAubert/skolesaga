/* eslint-disable */
// @ts-nocheck
/**
 * Elektro og datateknologi VG1 - Tekstbokinnhold Del 2
 *
 * Dekker kapittel 18-28: Signalbehandling, AD/DA-omforming, Avansert programmering,
 * Datastrukturer, Objektorientert programmering, etc.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 18: Signalbehandling og filtre (fullstendig versjon)
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_18_FULL: TextbookChapter = {
  id: 'elektro-data-vg1-18',
  courseId: 'elektro-data-vg1',
  chapterNumber: '18',
  title: 'Signalbehandling og filtre',
  description: 'Analoge og digitale filtre for signalbehandling, frekvensrespons og filterdesign.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forstå signalbehandling og filtre',
    'kjenne til grensefrekvens og filtertyper',
    'analysere frekvensrespons',
  ],
  sections: [
    {
      title: 'Introduksjon til signalbehandling',
      content: `## Introduksjon til signalbehandling

Signalbehandling handler om å manipulere elektriske signaler for å oppnå ønsket resultat. Vi kan forsterke, filtrere, konvertere og analysere signaler.

**Hva er et signal?**
Et signal er en varierende elektrisk spenning eller strøm som bærer informasjon:
- Lyd fra mikrofon: Spenning varierer med lydbølger
- Temperaturmåling: Spenning fra temperatursensor
- Digitale data: Sekvens av høye og lave spenninger

**Typer signaler:**

**Analoge signaler**
- Kontinuerlig variasjon i tid og verdi
- Kan ha uendelig mange verdier
- Eksempel: Lydbølger, temperatursensor

**Digitale signaler**
- Diskrete verdier (vanligvis 0 og 1)
- Samples med fast frekvens
- Eksempel: USB-data, digitalt audio

**Hvorfor signalbehandling?**
- Fjerne støy fra signaler
- Forsterke svake signaler
- Konvertere mellom analog og digital
- Komprimere og lagre informasjon`,
    },
    {
      title: 'Frekvens og spektrum',
      content: `## Frekvens og spektrum

**Frekvens**
Frekvens (f) måles i Hertz (Hz) og angir antall svingninger per sekund.
- Periode T = 1/f (tiden for én svingning)
- Høyere frekvens = raskere svingninger

**Eksempler på frekvenser:**
- Hørbar lyd: 20 Hz - 20 kHz
- Radiobølger FM: 88-108 MHz
- Wi-Fi: 2.4 GHz og 5 GHz
- Mikroprosessor klokke: 1-5 GHz

**Fourier-analyse**
Joseph Fourier viste at alle signaler kan dekomponeres i en sum av sinusbølger med forskjellige frekvenser. Dette kalles frekvensspektrum.

**Spektrum:**
Et frekvensspektrum viser hvilke frekvenser som finnes i et signal:
- X-akse: Frekvens (Hz)
- Y-akse: Amplitude eller effekt (dB)

**Eksempel:**
En ren sinustone har én frekvenstopp.
En firkantbølge har mange frekvenstopper (grunnfrekvens + harmoniske).

**Båndbredde**
Båndbredde er området av frekvenser et signal eller system bruker:
- Telefon: 300 Hz - 3400 Hz
- CD-kvalitet lyd: 20 Hz - 20 kHz
- USB 3.0: 5 Gbps båndbredde`,
    },
    {
      title: 'Passive filtre',
      content: `## Passive filtre

Passive filtre bruker bare motstander, kondensatorer og spoler - ingen aktive komponenter som transistorer eller op-amper.

**RC Lavpassfilter**
Slipper gjennom lave frekvenser, demper høye frekvenser.

Oppbygging: Motstand (R) i serie, kondensator (C) parallelt til jord.

**Grensefrekvens (cutoff frequency):**
fc = 1 / (2π × R × C)

Ved grensefrekvensen er signalet dempet med 3 dB (ca. 70% av opprinnelig amplitude).

**Eksempel:**
R = 10 kΩ, C = 100 nF
fc = 1 / (2π × 10000 × 0.0000001) = 159 Hz

Frekvenser over 159 Hz dempes gradvis.

**RC Høypassfilter**
Slipper gjennom høye frekvenser, demper lave frekvenser.

Oppbygging: Kondensator (C) i serie, motstand (R) parallelt til jord.

Samme formel for grensefrekvens: fc = 1 / (2π × R × C)

**Bruksområder:**
- Lavpassfilter: Fjerne støy, anti-aliasing før AD-konvertering
- Høypassfilter: Fjerne DC-offset, koble lyd mellom forsterkere`,
    },
    {
      title: 'Aktive filtre og filterordner',
      content: `## Aktive filtre og filterordner

**Aktive filtre**
Bruker operasjonsforsterkere (op-amp) i tillegg til passive komponenter:
- Kan forsterke signalet
- Bedre filteregenskaper
- Kan ha høy Q-faktor (skarpere filtrering)
- Krever strømforsyning

**Filterordner**
Filterorden bestemmer hvor bratt dempningen er etter grensefrekvensen:
- 1. orden: -20 dB per dekade (-6 dB per oktav)
- 2. orden: -40 dB per dekade
- 3. orden: -60 dB per dekade
- N-te orden: -20×N dB per dekade

**Høyere orden = brattere overgang, men mer kompleks krets**

**Filtertyper:**

**Butterworth**
- Flatest mulig passband (ingen ripple)
- Moderat bratthet
- Mest brukt for generelle formål

**Chebyshev**
- Brattere overgang enn Butterworth
- Ripple i passbandet
- Brukes når skarp cutoff er viktig

**Bessel**
- Beste faserespons (lineær fase)
- Brukes for pulssignaler
- Mild overgang

**Båndpass og båndstoppfilter**
- Båndpass: Slipper gjennom et frekvensområde
- Båndstoppfilter (notch): Blokkerer et frekvensområde
- Bygges ved å kombinere lavpass og høypass`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-18-ex-1',
      type: 'classic',
      task: 'Beregn grensefrekvensen for et RC lavpassfilter med R = 4.7 kΩ og C = 47 nF.',
      solution: 'fc = 1 / (2π × R × C) = 1 / (2π × 4700 × 47×10^-9) = 1 / (2π × 0.0002209) = 1 / 0.001388 = 720 Hz. Grensefrekvensen er cirka 720 Hz.',
    },
    {
      id: 'elektro-data-vg1-18-ex-2',
      type: 'classic',
      task: 'Hva er forskjellen mellom et lavpassfilter og et høypassfilter? Gi et praktisk eksempel på bruk av hver.',
      solution: 'Lavpassfilter slipper gjennom lave frekvenser og demper høye. Eksempel: Fjerne høyfrekvent støy fra en temperatursensormåling. Høypassfilter slipper gjennom høye frekvenser og demper lave. Eksempel: Fjerne DC-offset og rumble fra et lydsignal.',
    },
    {
      id: 'elektro-data-vg1-18-ex-3',
      type: 'classic',
      task: 'Et 2. ordens lavpassfilter har grensefrekvens på 1 kHz. Hvor mye er signalet dempet ved 10 kHz?',
      solution: '10 kHz er 1 dekade over grensefrekvensen. For 2. orden er dempningen -40 dB per dekade. Ved 10 kHz er signalet dempet med ca. 40 dB (1% av opprinnelig amplitude).',
    },
    {
      id: 'elektro-data-vg1-18-ex-4',
      type: 'classic',
      task: 'Forklar hva grensefrekvensen betyr for et filter.',
      solution: 'Grensefrekvensen (fc) er frekvensen der signalet er dempet med 3 dB (ca. 70.7% av opprinnelig amplitude). For lavpassfilter dempes frekvenser over fc, for høypassfilter dempes frekvenser under fc. Overgangen er gradvis, ikke brå.',
    },
    {
      id: 'elektro-data-vg1-18-ex-5',
      type: 'classic',
      task: 'Du skal designe et lavpassfilter med grensefrekvens 500 Hz. Du har en 10 nF kondensator. Hvilken motstandsverdi trenger du?',
      solution: 'fc = 1/(2πRC), så R = 1/(2π × fc × C) = 1/(2π × 500 × 10×10^-9) = 1/(31.4×10^-6) = 31.8 kΩ. Velg nærmeste standardverdi: 33 kΩ.',
    },
    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-18-ex-6',
      type: 'classic',
      task: 'Du har et lydsignal forurenset med høyfrekvent støy over 5 kHz. Design et passende filter med komponenter du har tilgjengelig (1 kΩ, 10 kΩ motstander og 10 nF, 100 nF kondensatorer).',
      solution: 'Bruk lavpassfilter med fc ≈ 5 kHz. Med R=10kΩ og C=10nF: fc = 1/(2π×10000×10^-8) ≈ 1.6 kHz (for lavt). Med R=1kΩ og C=10nF: fc ≈ 16 kHz (for høyt). Kombiner: R=10kΩ og prøv annen C. Eller serie/parallell. Best: R=1kΩ, C=33nF ville gitt 4.8 kHz. Med tilgjengelige: R=1kΩ, C=10nF+10nF parallell=20nF gir fc≈8kHz.',
    },
    {
      id: 'elektro-data-vg1-18-ex-7',
      type: 'classic',
      task: 'Sammenlign Butterworth, Chebyshev og Bessel filtre. Når brukes hver type?',
      solution: 'Butterworth: Flatest passband, moderat bratthet - brukes for generell signalbehandling der jevn respons er viktig. Chebyshev: Brattere overgang, men med ripple - brukes når skarp frekvensavskjæring er viktigere enn flat respons. Bessel: Lineær faserespons - brukes for pulssignaler og data der signalformen må bevares uten forvrengning.',
    },
  ],
  keyTerms: [
    { term: 'Frekvens', definition: 'Antall svingninger per sekund, målt i Hertz (Hz).' },
    { term: 'Grensefrekvens', definition: 'Frekvensen der et filter demper signalet med 3 dB.' },
    { term: 'Lavpassfilter', definition: 'Filter som slipper gjennom lave frekvenser og demper høye.' },
    { term: 'Høypassfilter', definition: 'Filter som slipper gjennom høye frekvenser og demper lave.' },
    { term: 'Filterorden', definition: 'Bestemmer bratthet på filterets dempning, høyere orden = brattere.' },
    { term: 'dB (desibel)', definition: 'Logaritmisk enhet for å uttrykke forhold mellom signalnivåer.' },
  ],
};

// ============================================================================
// Kapittel 19: AD- og DA-omforming
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_19: TextbookChapter = {
  id: 'elektro-data-vg1-19',
  courseId: 'elektro-data-vg1',
  chapterNumber: '19',
  title: 'AD- og DA-omforming',
  description: 'Konvertering mellom analoge og digitale signaler, oppløsning, samplingsfrekvens og aliasing.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå prinsippene for AD- og DA-konvertering',
    'beregne oppløsning og kvantiseringsfeil',
    'forklare Nyquist-teoremet og aliasing',
  ],
  sections: [
    {
      title: 'Hvorfor konvertere?',
      content: `## Hvorfor konvertere mellom analog og digital?

Den fysiske verden er analog - temperatur, lyd, lys varierer kontinuerlig. Datamaskiner arbeider digitalt - med diskrete verdier representert som tall. For å koble disse to verdenene sammen trenger vi konvertering.

**AD-konvertering (Analog-til-Digital)**
Konverterer kontinuerlige analoge signaler til diskrete digitale verdier.

Brukes når:
- Sensorer måler fysiske størrelser
- Lyd skal tas opp digitalt
- Video skal digitaliseres
- Instrumenter skal logge data

**DA-konvertering (Digital-til-Analog)**
Konverterer diskrete digitale verdier til kontinuerlige analoge signaler.

Brukes når:
- Digital lyd skal spilles av gjennom høyttalere
- Motorstyring med PWM-lignende signaler
- Grafikk skal vises på analog skjerm
- Signalgenerator skal lage bølgeformer`,
    },
    {
      title: 'AD-konvertering i detalj',
      content: `## AD-konvertering i detalj

AD-konvertering skjer i tre trinn:

**1. Sampling (prøvetaking)**
Signalet "samples" - verdien leses av med jevne mellomrom.
- Samplingsfrekvens (fs): Antall samples per sekund
- Samplingsperiode (Ts): Tid mellom samples, Ts = 1/fs

**2. Kvantisering**
Den samplede verdien rundes av til nærmeste tillatte nivå.
- Oppløsning (bits): Antall mulige nivåer = 2^n
- 8 bit = 256 nivåer
- 10 bit = 1024 nivåer (Arduino ADC)
- 16 bit = 65536 nivåer (CD-kvalitet)

**3. Koding**
Den kvantiserte verdien konverteres til binær kode.

**Eksempel: 10-bit ADC med 5V referanse**
- Oppløsning: 5V / 1024 = 4.88 mV per steg
- Inngang 2.5V → 2.5 / 0.00488 ≈ 512 (binært: 1000000000)
- Inngang 3.7V → 3.7 / 0.00488 ≈ 758 (binært: 1011110110)

**ADC-typer:**
- SAR (Successive Approximation): Vanlig, middels hastighet
- Flash: Svært rask, bruker mange komparatorer
- Sigma-Delta: Høy oppløsning, lavere hastighet`,
    },
    {
      title: 'Nyquist-teoremet og aliasing',
      content: `## Nyquist-teoremet og aliasing

**Nyquist-Shannon samplingsteoremet**
For å rekonstruere et signal nøyaktig, må samplingsfrekvensen være minst dobbelt så høy som høyeste frekvenskomponent i signalet:

fs ≥ 2 × fmax

Denne grensen kalles Nyquist-frekvensen (fN = fs/2).

**Eksempel:**
For å sample lyd opp til 20 kHz (maks hørbar frekvens):
fs ≥ 2 × 20 kHz = 40 kHz
CD bruker 44.1 kHz (litt margin)

**Aliasing**
Hvis signalet inneholder frekvenser over Nyquist-frekvensen, oppstår aliasing:
- Høye frekvenser "folder seg" ned og fremstår som lavere frekvenser
- Resulterer i forvrengning som ikke kan fjernes

**Eksempel på aliasing:**
Sample 15 kHz signal med fs = 20 kHz:
- Nyquist = 10 kHz
- 15 kHz > 10 kHz → aliasing!
- 15 kHz fremstår som 20 - 15 = 5 kHz

**Anti-aliasing filter**
For å unngå aliasing brukes et lavpassfilter FØR AD-konvertering:
- Cutoff-frekvens ved eller under Nyquist-frekvensen
- Fjerner alle frekvenskomponenter som kan forårsake aliasing`,
    },
    {
      title: 'DA-konvertering',
      content: `## DA-konvertering

DA-konvertering konverterer digitale verdier tilbake til analoge signaler.

**Prosessen:**
1. Digital verdi leses fra minne/register
2. Verdi konverteres til analog spenning/strøm
3. Utgangen holdes stabil til neste sample (sample-and-hold)
4. Eventuelt filtrert for å glatte trappetrinnseffekt

**DAC-oppløsning**
Samme prinsipp som ADC:
- n-bit DAC gir 2^n nivåer
- Oppløsning = Vref / 2^n

**Eksempel: 8-bit DAC med 5V referanse**
- 256 nivåer
- Oppløsning: 5V / 256 = 19.5 mV per steg
- Digital verdi 128 → 2.5V ut
- Digital verdi 255 → 4.98V ut

**DAC-typer:**
- R-2R ladder: Enkel, bruker motstander
- Vektede motstander: Bruker binært vektede motstander
- Sigma-Delta: Høy oppløsning, bruker oversampling
- PWM + filter: Enkel metode, bruker pulsbreddemodulasjon

**Rekonstruksjonsfilter**
Etter DAC brukes ofte et lavpassfilter for å:
- Glatte ut trappetrinnseffekten
- Fjerne høyfrekvente artefakter
- Gi et jevnere analogt signal`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-19-ex-1',
      type: 'classic',
      task: 'En 12-bit ADC har referansespenning på 3.3V. Hva er oppløsningen i mV per steg?',
      solution: '12-bit gir 2^12 = 4096 nivåer. Oppløsning = 3.3V / 4096 = 0.000806V = 0.806 mV per steg.',
    },
    {
      id: 'elektro-data-vg1-19-ex-2',
      type: 'classic',
      task: 'Hva er den minste samplingsfrekvensen som kan brukes for å sample lyd opp til 15 kHz uten aliasing?',
      solution: 'Ifølge Nyquist-teoremet må fs ≥ 2 × fmax = 2 × 15 kHz = 30 kHz. Minste samplingsfrekvens er 30 kHz.',
    },
    {
      id: 'elektro-data-vg1-19-ex-3',
      type: 'classic',
      task: 'Forklar hva aliasing er og hvordan det kan unngås.',
      solution: 'Aliasing oppstår når et signal samples med for lav frekvens, slik at høye frekvenser "folder seg" og fremstår som lavere frekvenser. Det unngås ved å: 1) Bruke tilstrekkelig høy samplingsfrekvens (minst 2× høyeste signalfrekvens), og 2) Bruke anti-aliasing filter før ADC for å fjerne frekvenser over Nyquist-grensen.',
    },
    {
      id: 'elektro-data-vg1-19-ex-4',
      type: 'classic',
      task: 'Arduino Uno har en 10-bit ADC med 5V referanse. Hvis analogRead() returnerer 750, hva er inngangsspenningen?',
      solution: 'Oppløsning = 5V / 1024 = 4.883 mV per steg. Spenning = 750 × 4.883 mV = 3662 mV = 3.66V.',
    },
    {
      id: 'elektro-data-vg1-19-ex-5',
      type: 'classic',
      task: 'En DAC brukes til å generere et sinussignal på 1 kHz. Hva er minimum oppdateringsfrekvens for DAC?',
      solution: 'For å rekonstruere et 1 kHz signal trengs minst 2 kHz oppdatering (Nyquist). I praksis brukes høyere frekvens for bedre kvalitet - typisk 10× eller mer. Minimum teoretisk: 2 kHz, praktisk anbefalt: 10-20 kHz eller høyere.',
    },
    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-19-ex-6',
      type: 'classic',
      task: 'Du skal digitalisere et audiosignal med frekvenser opp til 18 kHz for CD-kvalitet (16-bit). Spesifiser nødvendig samplingsfrekvens, ADC-oppløsning, og beskriv nødvendig anti-aliasing filter.',
      solution: 'Samplingsfrekvens: Minst 36 kHz (2×18), CD bruker 44.1 kHz som gir margin. ADC-oppløsning: 16-bit gir 65536 nivåer og dynamisk område på ca. 96 dB. Anti-aliasing filter: Lavpassfilter med grensefrekvens ca. 20 kHz, helst høy orden (4-8) for bratt cutoff før 22.05 kHz (Nyquist). Butterworth eller Chebyshev filter anbefales.',
    },
    {
      id: 'elektro-data-vg1-19-ex-7',
      type: 'classic',
      task: 'Sammenlign 8-bit og 16-bit ADC. Beregn kvantiseringsfeil (i prosent av full skala) for begge og diskuter når du ville velge hver.',
      solution: '8-bit: 256 nivåer, kvantiseringsfeil = 100%/256 = 0.39% av full skala. 16-bit: 65536 nivåer, kvantiseringsfeil = 100%/65536 = 0.0015% av full skala. Velg 8-bit: Enkle sensorer, temperatur, rask sampling, kostnadseffektivt. Velg 16-bit: Høykvalitets audio, presisjonsmålinger, vitenskapelige instrumenter der nøyaktighet er kritisk.',
    },
  ],
  keyTerms: [
    { term: 'ADC', definition: 'Analog-to-Digital Converter - konverterer analoge signaler til digitale verdier.' },
    { term: 'DAC', definition: 'Digital-to-Analog Converter - konverterer digitale verdier til analoge signaler.' },
    { term: 'Samplingsfrekvens', definition: 'Antall ganger per sekund et analogt signal samples.' },
    { term: 'Nyquist-frekvens', definition: 'Halvparten av samplingsfrekvensen, høyeste frekvens som kan representeres.' },
    { term: 'Aliasing', definition: 'Forvrengning som oppstår når signalfrekvenser over Nyquist samples.' },
    { term: 'Kvantisering', definition: 'Avrunding av samplet verdi til nærmeste tillatte nivå.' },
  ],
};

// ============================================================================
// Kapittel 20: Avansert programmering - Funksjoner og biblioteker
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_20: TextbookChapter = {
  id: 'elektro-data-vg1-20',
  courseId: 'elektro-data-vg1',
  chapterNumber: '20',
  title: 'Avansert programmering - Funksjoner og biblioteker',
  description: 'Strukturert programmering med funksjoner, parametre, returverdier og bruk av biblioteker.',
  estimatedMinutes: 60,
  competenceGoals: [
    'strukturere programmer med funksjoner',
    'forstå parametre og returverdier',
    'bruke eksterne biblioteker',
  ],
  sections: [
    {
      title: 'Hvorfor funksjoner?',
      content: `## Hvorfor funksjoner?

Funksjoner er byggesteiner i god programmering. De lar oss:

**Gjenbruke kode**
I stedet for å skrive samme kode flere ganger, definerer vi en funksjon og kaller den når vi trenger den.

**Organisere kode**
Store programmer deles opp i mindre, håndterbare deler. Hver funksjon har én oppgave.

**Abstrahere kompleksitet**
Vi kan bruke funksjoner uten å vite nøyaktig hvordan de fungerer internt.

**Forenkle testing og feilsøking**
Hver funksjon kan testes separat.

**Eksempel uten funksjoner:**
\`\`\`python
# Beregn areal av tre rektangler
areal1 = 5 * 3
areal2 = 7 * 4
areal3 = 10 * 2
\`\`\`

**Eksempel med funksjon:**
\`\`\`python
def beregn_areal(lengde, bredde):
    return lengde * bredde

areal1 = beregn_areal(5, 3)
areal2 = beregn_areal(7, 4)
areal3 = beregn_areal(10, 2)
\`\`\``,
    },
    {
      title: 'Definere og kalle funksjoner',
      content: `## Definere og kalle funksjoner

**Python syntaks:**
\`\`\`python
def funksjonsnavn(parameter1, parameter2):
    """Dokumentasjonsstreng (docstring)"""
    # Kode som utfører oppgaven
    return resultat
\`\`\`

**Eksempel:**
\`\`\`python
def celsius_til_fahrenheit(celsius):
    """Konverterer temperatur fra Celsius til Fahrenheit."""
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit

# Kalle funksjonen
temp_f = celsius_til_fahrenheit(20)
print(f"20°C er {temp_f}°F")  # Output: 20°C er 68.0°F
\`\`\`

**Funksjoner uten returverdi:**
\`\`\`python
def si_hei(navn):
    print(f"Hei, {navn}!")
    # Ingen return - returnerer None implisitt

si_hei("Ola")  # Output: Hei, Ola!
\`\`\`

**Funksjoner med flere returverdier:**
\`\`\`python
def del_med_rest(a, b):
    kvotient = a // b
    rest = a % b
    return kvotient, rest

k, r = del_med_rest(17, 5)
print(f"17 / 5 = {k} rest {r}")  # Output: 17 / 5 = 3 rest 2
\`\`\``,
    },
    {
      title: 'Parametre og argumenter',
      content: `## Parametre og argumenter

**Posisjonsargumenter:**
Argumenter matches med parametre basert på rekkefølge.
\`\`\`python
def sett_fart(motor, hastighet):
    print(f"Motor {motor} settes til {hastighet}%")

sett_fart(1, 75)  # Motor 1 settes til 75%
\`\`\`

**Navngitte argumenter (keyword arguments):**
Argumenter spesifiseres med parameternavn.
\`\`\`python
sett_fart(hastighet=50, motor=2)  # Motor 2 settes til 50%
\`\`\`

**Standardverdier:**
Parametre kan ha standardverdier som brukes hvis ikke annet oppgis.
\`\`\`python
def blink_led(antall=3, forsinkelse=500):
    for i in range(antall):
        led_on()
        delay(forsinkelse)
        led_off()
        delay(forsinkelse)

blink_led()           # Bruker standardverdier: 3 blink, 500ms
blink_led(5)          # 5 blink, 500ms
blink_led(2, 100)     # 2 blink, 100ms
\`\`\`

**Variabelt antall argumenter:**
\`\`\`python
def summer(*tall):
    """Summerer vilkårlig antall tall."""
    total = 0
    for t in tall:
        total += t
    return total

print(summer(1, 2, 3))        # 6
print(summer(10, 20, 30, 40)) # 100
\`\`\``,
    },
    {
      title: 'Biblioteker og moduler',
      content: `## Biblioteker og moduler

**Hva er et bibliotek/modul?**
En samling forhåndsskrevne funksjoner og klasser som kan importeres og brukes i ditt program.

**Importere hele modulen:**
\`\`\`python
import math

print(math.pi)           # 3.141592653589793
print(math.sqrt(16))     # 4.0
print(math.sin(math.pi/2)) # 1.0
\`\`\`

**Importere spesifikke funksjoner:**
\`\`\`python
from math import sqrt, pi

print(pi)        # 3.141592653589793
print(sqrt(25))  # 5.0
\`\`\`

**Importere med alias:**
\`\`\`python
import numpy as np
import matplotlib.pyplot as plt

data = np.array([1, 2, 3, 4, 5])
plt.plot(data)
\`\`\`

**Vanlige Python-biblioteker:**
- **math**: Matematiske funksjoner
- **random**: Tilfeldig tall generering
- **time**: Tids- og forsinkelse funksjoner
- **os**: Operativsystem-interaksjon
- **json**: JSON data håndtering
- **requests**: HTTP-forespørsler
- **numpy**: Numeriske beregninger
- **serial**: Seriell kommunikasjon (pySerial)

**Arduino biblioteker:**
Installeres via Library Manager i Arduino IDE.
\`\`\`cpp
#include <Servo.h>
#include <Wire.h>
#include <LiquidCrystal.h>

Servo myServo;
myServo.attach(9);
myServo.write(90);
\`\`\``,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-20-ex-1',
      type: 'classic',
      task: 'Skriv en Python-funksjon som beregner arealet av en sirkel gitt radius.',
      solution: 'import math\n\ndef sirkel_areal(radius):\n    """Beregner arealet av en sirkel."""\n    return math.pi * radius ** 2\n\n# Test\nprint(sirkel_areal(5))  # 78.54...',
    },
    {
      id: 'elektro-data-vg1-20-ex-2',
      type: 'classic',
      task: 'Skriv en funksjon som tar en temperaturliste og returnerer både minimum, maksimum og gjennomsnitt.',
      solution: 'def analyser_temperaturer(temps):\n    """Analyserer en liste med temperaturer."""\n    minimum = min(temps)\n    maksimum = max(temps)\n    gjennomsnitt = sum(temps) / len(temps)\n    return minimum, maksimum, gjennomsnitt\n\nmin_t, max_t, avg_t = analyser_temperaturer([18, 22, 25, 19, 21])\nprint(f"Min: {min_t}, Max: {max_t}, Avg: {avg_t}")',
    },
    {
      id: 'elektro-data-vg1-20-ex-3',
      type: 'classic',
      task: 'Hva er forskjellen mellom "import math" og "from math import sqrt"?',
      solution: '"import math" importerer hele modulen - du må bruke math.sqrt() for å kalle funksjoner. "from math import sqrt" importerer bare sqrt-funksjonen - du kan kalle den direkte som sqrt(). Den første holder navnerommet renere, den andre gir kortere kode for ofte brukte funksjoner.',
    },
    {
      id: 'elektro-data-vg1-20-ex-4',
      type: 'classic',
      task: 'Skriv en funksjon med standardverdier som beregner motstanden i en LED-krets: R = (Vforsyning - Vled) / Iled. La Vled ha standardverdi 2V og Iled ha standardverdi 20mA.',
      solution: 'def led_motstand(v_forsyning, v_led=2.0, i_led=0.020):\n    """Beregner motstand for LED-krets."""\n    r = (v_forsyning - v_led) / i_led\n    return r\n\nprint(led_motstand(5))       # 150 ohm (5V, standard LED)\nprint(led_motstand(9, 3.0))  # 300 ohm (9V, rød LED 3V)\nprint(led_motstand(12, 2.0, 0.010))  # 1000 ohm (12V, 2V, 10mA)',
    },
    {
      id: 'elektro-data-vg1-20-ex-5',
      type: 'classic',
      task: 'Forklar hva en "docstring" er og hvorfor den er nyttig.',
      solution: 'En docstring er en tekststreng i trippel anførselstegn som dokumenterer hva en funksjon, klasse eller modul gjør. Den plasseres rett etter definisjonen. Docstrings er nyttige fordi: 1) De gir dokumentasjon som andre (og du selv) kan lese, 2) De kan hentes opp med help()-funksjonen, 3) IDE-er viser dem som hint, 4) De gjør koden mer vedlikeholdbar.',
    },
    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-20-ex-6',
      type: 'classic',
      task: 'Design et sett med funksjoner for å styre en robot med to motorer. Lag funksjoner for: framover(hastighet, tid), bakover(hastighet, tid), sving_venstre(grader), sving_hoyre(grader), og stopp().',
      solution: 'def sett_motorer(venstre, hoyre):\n    """Intern hjelpefunksjon for å sette motorhastighet."""\n    # motor1.speed = venstre, motor2.speed = hoyre\n    pass\n\ndef framover(hastighet=50, tid=1.0):\n    """Kjør fremover med gitt hastighet i gitt tid."""\n    sett_motorer(hastighet, hastighet)\n    time.sleep(tid)\n    stopp()\n\ndef bakover(hastighet=50, tid=1.0):\n    """Kjør bakover med gitt hastighet i gitt tid."""\n    sett_motorer(-hastighet, -hastighet)\n    time.sleep(tid)\n    stopp()\n\ndef sving_venstre(grader=90):\n    """Sving venstre angitt antall grader."""\n    tid = grader / 90 * 0.5  # Kalibrer!\n    sett_motorer(-50, 50)\n    time.sleep(tid)\n    stopp()\n\ndef sving_hoyre(grader=90):\n    sett_motorer(50, -50)\n    time.sleep(grader / 90 * 0.5)\n    stopp()\n\ndef stopp():\n    sett_motorer(0, 0)',
    },
    {
      id: 'elektro-data-vg1-20-ex-7',
      type: 'classic',
      task: 'Lag en modul (bibliotek) for å arbeide med Ohms lov. Inkluder funksjoner for å beregne spenning, strøm og motstand, samt effekt.',
      solution: '# ohms_lov.py\n\ndef beregn_spenning(strom, motstand):\n    """U = I * R"""\n    return strom * motstand\n\ndef beregn_strom(spenning, motstand):\n    """I = U / R"""\n    return spenning / motstand\n\ndef beregn_motstand(spenning, strom):\n    """R = U / I"""\n    return spenning / strom\n\ndef beregn_effekt_ui(spenning, strom):\n    """P = U * I"""\n    return spenning * strom\n\ndef beregn_effekt_ri(motstand, strom):\n    """P = R * I^2"""\n    return motstand * strom ** 2\n\n# Bruk:\n# from ohms_lov import beregn_spenning\n# print(beregn_spenning(2, 100))  # 200V',
    },
  ],
  keyTerms: [
    { term: 'Funksjon', definition: 'Gjenbrukbar kodeblokk som utfører en spesifikk oppgave.' },
    { term: 'Parameter', definition: 'Variabel definert i funksjonsdefinisjonen som tar imot verdier.' },
    { term: 'Argument', definition: 'Verdi som sendes til en funksjon når den kalles.' },
    { term: 'Returverdi', definition: 'Verdi som funksjonen sender tilbake til kalleren.' },
    { term: 'Modul', definition: 'Fil med Python-kode som kan importeres og gjenbrukes.' },
    { term: 'Bibliotek', definition: 'Samling av moduler med relatert funksjonalitet.' },
  ],
};

// ============================================================================
// Kapittel 21: Datastrukturer og algoritmer
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_21: TextbookChapter = {
  id: 'elektro-data-vg1-21',
  courseId: 'elektro-data-vg1',
  chapterNumber: '21',
  title: 'Datastrukturer og algoritmer',
  description: 'Lister, arrays, ordbøker og grunnleggende algoritmer for søk og sortering.',
  estimatedMinutes: 65,
  competenceGoals: [
    'bruke datastrukturer effektivt',
    'implementere grunnleggende algoritmer',
    'forstå kompleksitet og effektivitet',
  ],
  sections: [
    {
      title: 'Lister og arrays',
      content: `## Lister og arrays

**Lister i Python**
En liste er en ordnet samling av elementer som kan endres (mutable).

\`\`\`python
# Opprette lister
sensorer = [23.5, 24.1, 22.8, 25.0]
navn = ["sensor1", "sensor2", "sensor3"]
blandet = [1, "tekst", 3.14, True]

# Tilgang til elementer (0-indeksert)
print(sensorer[0])   # 23.5 (første element)
print(sensorer[-1])  # 25.0 (siste element)

# Endre element
sensorer[1] = 24.5

# Legge til elementer
sensorer.append(26.0)     # Legger til på slutten
sensorer.insert(0, 22.0)  # Setter inn på posisjon 0

# Fjerne elementer
sensorer.remove(22.8)     # Fjerner første forekomst
siste = sensorer.pop()    # Fjerner og returnerer siste

# Lengde
print(len(sensorer))
\`\`\`

**Slicing (utsnitt)**
\`\`\`python
tall = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(tall[2:5])   # [2, 3, 4] (fra indeks 2 til 5-1)
print(tall[:3])    # [0, 1, 2] (fra start til 3-1)
print(tall[7:])    # [7, 8, 9] (fra 7 til slutt)
print(tall[::2])   # [0, 2, 4, 6, 8] (annethvert element)
\`\`\``,
    },
    {
      title: 'Ordbøker (dictionaries)',
      content: `## Ordbøker (dictionaries)

Ordbøker lagrer data som nøkkel-verdi par. Rask oppslag basert på nøkkel.

\`\`\`python
# Opprette ordbok
sensor_data = {
    "temperatur": 23.5,
    "fuktighet": 65,
    "trykk": 1013.25,
    "enhet": "celsius"
}

# Tilgang til verdier
print(sensor_data["temperatur"])  # 23.5
print(sensor_data.get("vind", 0)) # 0 (standardverdi hvis ikke funnet)

# Legge til / endre
sensor_data["vind"] = 5.2
sensor_data["temperatur"] = 24.0

# Sjekke om nøkkel finnes
if "fuktighet" in sensor_data:
    print("Fuktighet funnet!")

# Iterere
for nokkel, verdi in sensor_data.items():
    print(f"{nokkel}: {verdi}")

# Nøstede ordbøker
vaerstasjon = {
    "stasjon1": {"temp": 22, "fukt": 60},
    "stasjon2": {"temp": 25, "fukt": 55}
}
print(vaerstasjon["stasjon1"]["temp"])  # 22
\`\`\`

**Når bruke liste vs ordbok?**
- Liste: Ordnede elementer, numerisk indeks, iterering
- Ordbok: Nøkkel-oppslag, beskrivende nøkler, strukturerte data`,
    },
    {
      title: 'Søkealgoritmer',
      content: `## Søkealgoritmer

**Lineært søk**
Går gjennom listen element for element til vi finner det vi leter etter.

\`\`\`python
def lineart_sok(liste, verdi):
    for i, element in enumerate(liste):
        if element == verdi:
            return i  # Fant på posisjon i
    return -1  # Ikke funnet

tall = [5, 2, 8, 1, 9, 3]
pos = lineart_sok(tall, 8)  # Returnerer 2
\`\`\`

Kompleksitet: O(n) - i verste fall må vi sjekke alle n elementer.

**Binært søk**
Krever sortert liste. Halverer søkeområdet for hver iterasjon.

\`\`\`python
def binaert_sok(sortert_liste, verdi):
    lav = 0
    hoy = len(sortert_liste) - 1

    while lav <= hoy:
        midt = (lav + hoy) // 2
        if sortert_liste[midt] == verdi:
            return midt
        elif sortert_liste[midt] < verdi:
            lav = midt + 1
        else:
            hoy = midt - 1
    return -1

tall = [1, 2, 3, 5, 8, 9]  # MÅ være sortert!
pos = binaert_sok(tall, 5)  # Returnerer 3
\`\`\`

Kompleksitet: O(log n) - mye raskere for store lister!

**Sammenligning:**
- 1000 elementer: Lineært ~500 sammenligninger, binært ~10
- 1 000 000 elementer: Lineært ~500 000, binært ~20`,
    },
    {
      title: 'Sorteringsalgoritmer',
      content: `## Sorteringsalgoritmer

**Boblesortering (Bubble Sort)**
Sammenligner naboelementer og bytter hvis de er i feil rekkefølge. Gjenta til sortert.

\`\`\`python
def boblesortering(liste):
    n = len(liste)
    for i in range(n):
        for j in range(0, n-i-1):
            if liste[j] > liste[j+1]:
                liste[j], liste[j+1] = liste[j+1], liste[j]
    return liste

tall = [64, 34, 25, 12, 22, 11, 90]
sortert = boblesortering(tall.copy())
# [11, 12, 22, 25, 34, 64, 90]
\`\`\`

Kompleksitet: O(n²) - treg for store lister

**Innbygget sortering**
Python har effektiv innbygget sortering:

\`\`\`python
tall = [64, 34, 25, 12]

# sorted() returnerer ny sortert liste
sortert = sorted(tall)

# .sort() sorterer listen "in-place"
tall.sort()

# Sortere i synkende rekkefølge
tall.sort(reverse=True)

# Sortere etter egendefinert nøkkel
sensorer = [("A", 25), ("B", 18), ("C", 30)]
sensorer.sort(key=lambda x: x[1])  # Sorterer etter temperatur
# [('B', 18), ('A', 25), ('C', 30)]
\`\`\`

**Kompleksitet:**
- Boblesortering: O(n²)
- Python sort (Timsort): O(n log n)
- For 1000 elementer: Boble ~1 000 000 operasjoner, Timsort ~10 000`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-21-ex-1',
      type: 'classic',
      task: 'Skriv kode som finner gjennomsnittet av alle tall i en liste.',
      solution: 'def gjennomsnitt(tall):\n    if len(tall) == 0:\n        return 0\n    return sum(tall) / len(tall)\n\nmaalinger = [23.5, 24.1, 22.8, 25.0, 23.7]\nprint(gjennomsnitt(maalinger))  # 23.82',
    },
    {
      id: 'elektro-data-vg1-21-ex-2',
      type: 'classic',
      task: 'Lag en ordbok som representerer en sensor med feltene: id, type, verdi, enhet, tidspunkt. Skriv kode som skriver ut en formatert rapport.',
      solution: 'sensor = {\n    "id": "TEMP001",\n    "type": "temperatur",\n    "verdi": 23.5,\n    "enhet": "celsius",\n    "tidspunkt": "2024-01-15 14:30:00"\n}\n\nprint(f"Sensor: {sensor[\'id\']}")\nprint(f"Type: {sensor[\'type\']}")\nprint(f"Måling: {sensor[\'verdi\']} {sensor[\'enhet\']}")\nprint(f"Tid: {sensor[\'tidspunkt\']}")',
    },
    {
      id: 'elektro-data-vg1-21-ex-3',
      type: 'classic',
      task: 'Forklar forskjellen mellom lineært søk og binært søk. Når er binært søk bedre?',
      solution: 'Lineært søk sjekker hvert element fra start til slutt (O(n)). Binært søk halverer søkeområdet hver gang (O(log n)), men krever sortert liste. Binært søk er mye bedre for store, sorterte lister. For 1 million elementer: lineært trenger opptil 1 million sammenligninger, binært bare ca. 20.',
    },
    {
      id: 'elektro-data-vg1-21-ex-4',
      type: 'classic',
      task: 'Skriv en funksjon som finner det største og minste elementet i en liste uten å bruke innebygde funksjoner (min/max).',
      solution: 'def finn_min_max(liste):\n    if len(liste) == 0:\n        return None, None\n    \n    minimum = liste[0]\n    maksimum = liste[0]\n    \n    for element in liste:\n        if element < minimum:\n            minimum = element\n        if element > maksimum:\n            maksimum = element\n    \n    return minimum, maksimum\n\ntall = [5, 2, 8, 1, 9, 3]\nmin_val, max_val = finn_min_max(tall)\nprint(f"Min: {min_val}, Max: {max_val}")  # Min: 1, Max: 9',
    },
    {
      id: 'elektro-data-vg1-21-ex-5',
      type: 'classic',
      task: 'Hva betyr O(n) og O(n²) notasjon? Gi eksempler på algoritmer med hver kompleksitet.',
      solution: 'Big-O notasjon beskriver hvordan kjøretid vokser med input-størrelse. O(n): Lineær tid - dobler input dobler tid. Eksempel: Lineært søk, iterere gjennom liste. O(n²): Kvadratisk tid - dobler input firedobler tid. Eksempel: Boblesortering, nøstede løkker over samme data. O(n²) blir mye tregere enn O(n) for store datasett.',
    },
    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-21-ex-6',
      type: 'classic',
      task: 'Du har en liste med 1000 temperaturmålinger. Beskriv en algoritme som finner de 10 høyeste temperaturene og tidspunktene de ble målt.',
      solution: 'Løsning 1: Sorter hele listen synkende og ta de 10 første - O(n log n).\n\nLøsning 2 (mer effektiv): Bruk en "heap" med størrelse 10. Gå gjennom alle målinger én gang, behold de 10 største - O(n log 10) ≈ O(n).\n\nKode (løsning 1):\nmaalinger = [(tid1, temp1), (tid2, temp2), ...]\nsortert = sorted(maalinger, key=lambda x: x[1], reverse=True)\ntopp_10 = sortert[:10]\nfor tid, temp in topp_10:\n    print(f"{tid}: {temp}°C")',
    },
    {
      id: 'elektro-data-vg1-21-ex-7',
      type: 'classic',
      task: 'Design en datastruktur for å lagre data fra en værstasjon (temperatur, fuktighet, trykk, vindretning, vindhastighet) over 24 timer med målinger hvert 5. minutt. Beskriv hvordan du vil organisere dataene.',
      solution: 'Struktur med nøstede ordbøker og lister:\n\nvaerstasjon = {\n    "stasjon_id": "WS001",\n    "plassering": {"lat": 59.91, "lon": 10.75},\n    "maalinger": [\n        {\n            "tidspunkt": "2024-01-15 00:00",\n            "temperatur": 5.2,\n            "fuktighet": 78,\n            "trykk": 1013.5,\n            "vind_retning": 180,\n            "vind_hastighet": 3.5\n        },\n        # ... 288 målinger (24t × 12 per time)\n    ]\n}\n\nTilgang: vaerstasjon["maalinger"][144]["temperatur"] for måling kl 12:00.',
    },
  ],
  keyTerms: [
    { term: 'Liste', definition: 'Ordnet samling av elementer som kan endres, med numerisk indeks.' },
    { term: 'Ordbok', definition: 'Datastruktur med nøkkel-verdi par for rask oppslag.' },
    { term: 'Algoritme', definition: 'Steg-for-steg prosedyre for å løse et problem.' },
    { term: 'Kompleksitet', definition: 'Mål på hvor ressurskrevende en algoritme er (tid/minne).' },
    { term: 'O(n)', definition: 'Lineær tidskompleksitet - kjøretid vokser lineært med input.' },
    { term: 'Binært søk', definition: 'Søkealgoritme som halverer søkeområdet hver iterasjon.' },
  ],
};

// ============================================================================
// Kapittel 22: Objektorientert programmering
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_22: TextbookChapter = {
  id: 'elektro-data-vg1-22',
  courseId: 'elektro-data-vg1',
  chapterNumber: '22',
  title: 'Objektorientert programmering',
  description: 'Grunnleggende OOP-konsepter: klasser, objekter, metoder og arv.',
  estimatedMinutes: 70,
  competenceGoals: [
    'forstå objektorientert programmering',
    'definere og bruke klasser og objekter',
    'implementere metoder og attributter',
  ],
  sections: [
    {
      title: 'Hva er objektorientert programmering?',
      content: `## Hva er objektorientert programmering?

Objektorientert programmering (OOP) er en måte å strukturere kode ved å modellere "ting" fra den virkelige verden som objekter.

**Hvorfor OOP?**
- Bedre organisering av kode
- Lettere å gjenbruke kode
- Enklere å vedlikeholde store programmer
- Naturlig måte å tenke på problemer

**Grunnleggende begreper:**

**Klasse**
En "oppskrift" eller mal for å lage objekter. Definerer hvilke egenskaper (attributter) og handlinger (metoder) objektene skal ha.

**Objekt (instans)**
En konkret "ting" laget fra en klasse. Hvert objekt har sine egne verdier for attributtene.

**Eksempel fra virkeligheten:**
- Klasse: "Sensor" (generell oppskrift)
- Objekter: temperatursensor1, temperatursensor2, fuktighetssensor1

**Attributter**
Egenskaper/data som objektet har:
- sensor.verdi = 23.5
- sensor.type = "temperatur"
- sensor.enhet = "celsius"

**Metoder**
Handlinger objektet kan utføre:
- sensor.les()
- sensor.kalibrer()
- sensor.rapport()`,
    },
    {
      title: 'Definere klasser i Python',
      content: `## Definere klasser i Python

**Grunnleggende klassesyntaks:**
\`\`\`python
class Sensor:
    """En klasse som representerer en sensor."""

    def __init__(self, sensor_id, sensor_type):
        """Konstruktør - kjøres når objekt opprettes."""
        self.sensor_id = sensor_id
        self.sensor_type = sensor_type
        self.verdi = 0.0
        self.aktiv = True

    def les_verdi(self):
        """Leser og returnerer sensorverdien."""
        # I virkeligheten ville dette lese fra hardware
        return self.verdi

    def sett_verdi(self, ny_verdi):
        """Setter en ny verdi (for simulering)."""
        self.verdi = ny_verdi

    def __str__(self):
        """Returnerer tekstrepresentasjon."""
        return f"{self.sensor_type} ({self.sensor_id}): {self.verdi}"
\`\`\`

**Opprette objekter:**
\`\`\`python
# Lage sensor-objekter
temp_sensor = Sensor("T001", "temperatur")
fukt_sensor = Sensor("H001", "fuktighet")

# Bruke objektene
temp_sensor.sett_verdi(23.5)
fukt_sensor.sett_verdi(65)

print(temp_sensor.les_verdi())  # 23.5
print(fukt_sensor)  # fuktighet (H001): 65
\`\`\`

**self-parameteren:**
- Refererer til objektet selv
- Må være første parameter i alle metoder
- Brukes for å få tilgang til attributter og andre metoder`,
    },
    {
      title: 'Metoder og attributter',
      content: `## Metoder og attributter

**Instansattributter**
Tilhører hvert enkelt objekt.
\`\`\`python
class Motor:
    def __init__(self, pin):
        self.pin = pin          # Instansattributt
        self.hastighet = 0      # Instansattributt
\`\`\`

**Klasseattributter**
Deles mellom alle objekter av klassen.
\`\`\`python
class Motor:
    antall_motorer = 0  # Klasseattributt

    def __init__(self, pin):
        self.pin = pin
        Motor.antall_motorer += 1

m1 = Motor(5)
m2 = Motor(6)
print(Motor.antall_motorer)  # 2
\`\`\`

**Private attributter (konvensjon)**
Attributter som starter med _ eller __ er ment som "private".
\`\`\`python
class Konto:
    def __init__(self, saldo):
        self._saldo = saldo  # "Privat" - bruk med forsiktighet

    def ta_ut(self, belop):
        if belop <= self._saldo:
            self._saldo -= belop
            return True
        return False

    def vis_saldo(self):
        return self._saldo
\`\`\`

**Property-dekoratøren**
Kontrollert tilgang til attributter.
\`\`\`python
class Temperatur:
    def __init__(self, celsius):
        self._celsius = celsius

    @property
    def celsius(self):
        return self._celsius

    @celsius.setter
    def celsius(self, verdi):
        if verdi < -273.15:
            raise ValueError("Under absolutt null!")
        self._celsius = verdi

    @property
    def fahrenheit(self):
        return self._celsius * 9/5 + 32

t = Temperatur(20)
print(t.celsius)     # 20
print(t.fahrenheit)  # 68.0
t.celsius = 25       # Setter via property
\`\`\``,
    },
    {
      title: 'Arv og polymorfisme',
      content: `## Arv og polymorfisme

**Arv**
En klasse kan arve fra en annen og få alle dens egenskaper.

\`\`\`python
class Sensor:
    """Baseklasse for alle sensorer."""
    def __init__(self, sensor_id):
        self.sensor_id = sensor_id
        self.verdi = 0.0

    def les(self):
        return self.verdi

class TemperaturSensor(Sensor):
    """Arvende klasse - temperaturspesifikk."""
    def __init__(self, sensor_id, enhet="celsius"):
        super().__init__(sensor_id)  # Kall foreldres konstruktør
        self.enhet = enhet

    def les_formatert(self):
        return f"{self.verdi} °{'C' if self.enhet == 'celsius' else 'F'}"

class FuktighetsSensor(Sensor):
    """Arvende klasse - fuktighetsspesifikk."""
    def les_formatert(self):
        return f"{self.verdi} %RH"
\`\`\`

**super()**
Brukes for å kalle metoder fra foreldreklassen.

**Polymorfisme**
Objekter av forskjellige klasser kan behandles likt.
\`\`\`python
def les_alle_sensorer(sensorer):
    for sensor in sensorer:
        print(sensor.les_formatert())  # Fungerer for alle sensortyper!

temp = TemperaturSensor("T001")
fukt = FuktighetsSensor("H001")
temp.verdi = 23.5
fukt.verdi = 65

les_alle_sensorer([temp, fukt])
# 23.5 °C
# 65 %RH
\`\`\`

**Fordeler med arv:**
- Unngår kodeduplisering
- Logisk hierarki
- Lettere å utvide funksjonalitet`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-22-ex-1',
      type: 'classic',
      task: 'Definer en klasse LED med attributter pin og status (på/av), og metoder for slaa_paa(), slaa_av() og toggle().',
      solution: 'class LED:\n    def __init__(self, pin):\n        self.pin = pin\n        self.status = False  # Av som standard\n    \n    def slaa_paa(self):\n        self.status = True\n        # digitalWrite(self.pin, HIGH)\n    \n    def slaa_av(self):\n        self.status = False\n        # digitalWrite(self.pin, LOW)\n    \n    def toggle(self):\n        if self.status:\n            self.slaa_av()\n        else:\n            self.slaa_paa()\n\nled1 = LED(13)\nled1.slaa_paa()\nprint(led1.status)  # True',
    },
    {
      id: 'elektro-data-vg1-22-ex-2',
      type: 'classic',
      task: 'Hva er forskjellen mellom en klasse og et objekt?',
      solution: 'En klasse er en mal/oppskrift som definerer hvilke attributter og metoder objekter skal ha. Et objekt (instans) er en konkret forekomst av klassen med sine egne verdier. Eksempel: "Hund" er en klasse, "Fido" og "Rex" er objekter av klassen Hund. Klassen definerer at hunder har navn og alder, objektene har spesifikke verdier for disse.',
    },
    {
      id: 'elektro-data-vg1-22-ex-3',
      type: 'classic',
      task: 'Lag en klasse DCMotor med attributter for pin og hastighet (-100 til 100), og metoder for sett_hastighet(n), stopp(), og retning().',
      solution: 'class DCMotor:\n    def __init__(self, pin):\n        self.pin = pin\n        self._hastighet = 0\n    \n    def sett_hastighet(self, n):\n        if -100 <= n <= 100:\n            self._hastighet = n\n        else:\n            raise ValueError("Hastighet må være mellom -100 og 100")\n    \n    def stopp(self):\n        self._hastighet = 0\n    \n    def retning(self):\n        if self._hastighet > 0:\n            return "fremover"\n        elif self._hastighet < 0:\n            return "bakover"\n        return "stoppet"\n    \n    @property\n    def hastighet(self):\n        return abs(self._hastighet)',
    },
    {
      id: 'elektro-data-vg1-22-ex-4',
      type: 'classic',
      task: 'Forklar hva self betyr i Python-klasser.',
      solution: 'self er en referanse til det aktuelle objektet. Det må være første parameter i alle instansmetoder. Når du kaller objekt.metode(), sender Python automatisk objektet som self. Du bruker self.attributt for å få tilgang til objektets attributter og self.annen_metode() for å kalle andre metoder på samme objekt.',
    },
    {
      id: 'elektro-data-vg1-22-ex-5',
      type: 'classic',
      task: 'Hva gjør super().__init__() og når brukes det?',
      solution: 'super().__init__() kaller konstruktøren til foreldreklassen. Det brukes i arvede klasser for å sørge for at foreldreklassens initialisering også kjøres. Dette er viktig når foreldreklassen setter opp attributter som den arvede klassen trenger. Eksempel: Hvis Sensor har self.sensor_id, må TemperaturSensor kalle super().__init__(sensor_id) for å sette dette.',
    },
    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-22-ex-6',
      type: 'classic',
      task: 'Design et klassehierarki for et smarthus-system. Lag en baseklasse SmartEnhet og arvede klasser for SmartLys, SmartTermostat og SmartLaas. Inkluder relevante attributter og metoder.',
      solution: 'class SmartEnhet:\n    def __init__(self, enhet_id, rom):\n        self.enhet_id = enhet_id\n        self.rom = rom\n        self.status = "av"\n    \n    def slaa_paa(self):\n        self.status = "paa"\n    \n    def slaa_av(self):\n        self.status = "av"\n\nclass SmartLys(SmartEnhet):\n    def __init__(self, enhet_id, rom):\n        super().__init__(enhet_id, rom)\n        self.lysstyrke = 0\n    \n    def dimme(self, nivaa):\n        self.lysstyrke = max(0, min(100, nivaa))\n\nclass SmartTermostat(SmartEnhet):\n    def __init__(self, enhet_id, rom):\n        super().__init__(enhet_id, rom)\n        self.maaltemperatur = 20\n        self.naaverende_temp = 18\n    \n    def sett_temperatur(self, temp):\n        self.maaltemperatur = temp\n\nclass SmartLaas(SmartEnhet):\n    def __init__(self, enhet_id, rom):\n        super().__init__(enhet_id, rom)\n        self.laast = True\n    \n    def laas(self):\n        self.laast = True\n    \n    def laas_opp(self, kode):\n        if kode == "1234":\n            self.laast = False\n            return True\n        return False',
    },
    {
      id: 'elektro-data-vg1-22-ex-7',
      type: 'classic',
      task: 'Lag en klasse SensorLogg som holder styr på målinger over tid. Den skal kunne legge til målinger med tidsstempel, hente siste n målinger, beregne gjennomsnitt, og finne min/max.',
      solution: 'from datetime import datetime\n\nclass SensorLogg:\n    def __init__(self, sensor_id, maks_malinger=1000):\n        self.sensor_id = sensor_id\n        self.maks_malinger = maks_malinger\n        self._malinger = []  # [(tidspunkt, verdi), ...]\n    \n    def legg_til(self, verdi):\n        tidspunkt = datetime.now()\n        self._malinger.append((tidspunkt, verdi))\n        if len(self._malinger) > self.maks_malinger:\n            self._malinger.pop(0)\n    \n    def hent_siste(self, n=10):\n        return self._malinger[-n:]\n    \n    def gjennomsnitt(self):\n        if not self._malinger:\n            return None\n        verdier = [v for _, v in self._malinger]\n        return sum(verdier) / len(verdier)\n    \n    def minimum(self):\n        if not self._malinger:\n            return None\n        return min(v for _, v in self._malinger)\n    \n    def maksimum(self):\n        if not self._malinger:\n            return None\n        return max(v for _, v in self._malinger)\n    \n    @property\n    def antall_malinger(self):\n        return len(self._malinger)',
    },
  ],
  keyTerms: [
    { term: 'Klasse', definition: 'Mal eller oppskrift for å lage objekter med attributter og metoder.' },
    { term: 'Objekt', definition: 'Konkret forekomst av en klasse med egne verdier.' },
    { term: 'Attributt', definition: 'Data/egenskaper som tilhører et objekt.' },
    { term: 'Metode', definition: 'Funksjon som tilhører en klasse og opererer på objektets data.' },
    { term: 'Konstruktør', definition: '__init__-metoden som kjøres når et objekt opprettes.' },
    { term: 'Arv', definition: 'Mekanisme der en klasse kan arve attributter og metoder fra en annen.' },
  ],
};

// ============================================================================
// Eksporter alle kapitler fra del 2
// ============================================================================

export const CHAPTERS_ELEKTRO_DATA_VG1_PART2 = [
  CHAPTER_ELEKTRO_DATA_VG1_18_FULL,
  CHAPTER_ELEKTRO_DATA_VG1_19,
  CHAPTER_ELEKTRO_DATA_VG1_20,
  CHAPTER_ELEKTRO_DATA_VG1_21,
  CHAPTER_ELEKTRO_DATA_VG1_22,
];
