/* eslint-disable */
// @ts-nocheck
/**
 * Elektro og datateknologi VG1 - Tekstbokinnhold Del 5
 *
 * Dekker kapittel 33-48: Elektromotorer og drivsystemer, EMC og støy,
 * Batteriteknologi, Elbiler og ladeinfrastruktur, Karriereveier, Etikk og bærekraft,
 * Sluttprosjekt, m.m.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 33: Elektromotorer og drivsystemer
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_33: TextbookChapter = {
  id: 'elektro-data-vg1-33',
  courseId: 'elektro-data-vg1',
  chapterNumber: '33',
  title: 'Elektromotorer og drivsystemer',
  description: 'DC-motorer, AC-motorer, steppermotorer og frekvensomformere.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forstå virkemåten til ulike motortyper',
    'forklare motorstyringsmetoder',
    'dimensjonere enkle drivsystemer',
  ],
  sections: [
    {
      title: 'DC-motorer',
      content: `## DC-motorer

**Virkemåte:**
DC-motorer bruker magnetiske krefter mellom permanentmagneter (stator) og elektromagneter (rotor) for å skape rotasjon.

**Oppbygning:**
- Stator: Permanentmagneter eller elektromagneter (feltvikling)
- Rotor (armatur): Spoler som roterer
- Kommutator: Mekanisk strømbryter som skifter strømretning
- Børster: Overfører strøm til kommutator

**Fordeler:**
- Enkel hastighetskontroll (spenningsvariasjon)
- Høyt startmoment
- Lett å reversere (bytt polaritet)

**Ulemper:**
- Børster slites og lager gnister
- Krever vedlikehold
- Begrenset hastighet pga. kommutator

**Hastighetsregulering:**
- Spenning: n ∝ U
- PWM: Pulsbreddemodulasjon (mest vanlig)

**Momentkarakteristikk:**
Høyt moment ved lav hastighet, synker ved høyere hastighet.

**Bruksområder:**
- Leker og hobbyelektronikk
- Batteridrevne verktøy
- Små roboter
- Enkle transportbånd`,
    },
    {
      title: 'Børsteløse DC-motorer (BLDC)',
      content: `## Børsteløse DC-motorer (BLDC)

**Virkemåte:**
BLDC har permanentmagneter på rotor og spoler på stator. Elektronikk erstatter kommutator og børster.

**Oppbygning:**
- Stator: Spoler (3-fase)
- Rotor: Permanentmagneter
- Hallsensorer eller sensorløs deteksjon for posisjon
- Elektronisk controller

**Fordeler:**
- Ingen børsteslitasje - lang levetid
- Høy virkningsgrad (85-95%)
- Lav støy
- Høy effekttetthet
- Mindre vedlikehold

**Ulemper:**
- Krever elektronisk styring
- Dyrere enn børstede DC-motorer

**Styring:**
Controller leser posisjonen og aktiverer riktige spoler i sekvens for å opprettholde rotasjon.

**Bruksområder:**
- Droner og modellfly
- Elbiler og elsykler
- PC-vifter og harddisker
- Elektroverktøy
- Industrimotorer`,
    },
    {
      title: 'AC-motorer',
      content: `## AC-motorer

**Asynkronmotor (induksjonsmotor)**
Mest brukte motortype i industrien.

**Virkemåte:**
- Stator: 3-fase vikling skaper roterende magnetfelt
- Rotor: "Ekornbur" med kortsluttede staver
- Roterende felt induserer strøm i rotor
- Strøm i magnetfelt → kraft → rotasjon

**Slip:**
Rotoren følger ikke helt med magnetfeltet:
slip = (ns - n) / ns × 100%
Typisk slip: 2-5%

**Fordeler:**
- Svært robust og pålitelig
- Billig
- Minimalt vedlikehold
- Høy virkningsgrad

**Synkronmotor**
Rotoren roterer synkront med magnetfeltet.
- Permanentmagnet eller elektromagnet rotor
- Brukes i presisjonsapplikasjoner

**Bruksområder:**
- Industripumper og vifter
- Kompressorer
- Transportbånd
- Elektriske kjøretøy (moderne)`,
    },
    {
      title: 'Steppermotorer og servomotorer',
      content: `## Steppermotorer og servomotorer

**Steppermotor**
Roterer i diskrete steg (typisk 1.8° = 200 steg/omdreining).

**Fordeler:**
- Presis posisjonering uten feedback
- Holder posisjon når stoppet
- Enkel styring med pulssekvenser

**Ulemper:**
- Lavt moment ved høy hastighet
- Kan miste steg ved overbelastning
- Vibrerer/resonans ved visse hastigheter

**Bruksområder:**
- 3D-printere
- CNC-maskiner (hobby)
- Robotarmer
- Kameraer

**Servomotor**
Motor med integrert feedback (encoder).

**Oppbygning:**
- Motor (ofte BLDC eller AC)
- Encoder for posisjonstilbakemelding
- Servo-driver for closed-loop kontroll

**Fordeler:**
- Høy presisjon
- Høyt moment over bredt hastighetsområde
- Selvkorrigerende (closed-loop)
- Dynamisk respons

**Bruksområder:**
- Industriroboter
- CNC-maskiner (profesjonell)
- Automatiseringssystemer

**Frekvensomformer (VFD)**
Variable Frequency Drive - styrer AC-motorer.
- Varierer frekvens og spenning
- Myk start (unngår høy startstrøm)
- Energibesparelse (pumper, vifter)
- Presis hastighetskontroll`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-33-ex-1',
      type: 'classic',
      task: 'Hva er forskjellen mellom en børstet DC-motor og en børsteløs DC-motor (BLDC)?',
      solution: 'Børstet DC: Har kommutator og børster for å skifte strømretning, mekaniske deler slites, krever vedlikehold, enkel styring. BLDC: Elektronisk styring erstatter børster/kommutator, permanentmagneter på rotor, spoler på stator, lang levetid, høy virkningsgrad, krever elektronisk controller.',
    },
    {
      id: 'elektro-data-vg1-33-ex-2',
      type: 'classic',
      task: 'Forklar hva "slip" betyr for en asynkronmotor.',
      solution: 'Slip er forskjellen mellom magnetfeltets rotasjonshastighet (synkronhastighet ns) og rotorens faktiske hastighet (n). Slip = (ns - n) / ns × 100%. Asynkronmotorer MÅ ha slip for å fungere - det er hastighetsforskjellen som induserer strøm i rotoren. Typisk slip er 2-5%. Ved null slip ville det ikke vært indusert strøm og dermed ikke noe moment.',
    },
    {
      id: 'elektro-data-vg1-33-ex-3',
      type: 'classic',
      task: 'En steppermotor har 200 steg per omdreining. Hvor mange grader roterer den per steg?',
      solution: '360° / 200 steg = 1.8° per steg. Dette er standard for de fleste steppermotorer. For høyere presisjon kan mikro-stepping brukes, f.eks. 1/16 mikro-stepping gir 3200 "steg" per omdreining (0.1125° per mikro-steg).',
    },
    {
      id: 'elektro-data-vg1-33-ex-4',
      type: 'classic',
      task: 'Hva gjør en frekvensomformer (VFD) og hvorfor brukes den?',
      solution: 'En frekvensomformer (Variable Frequency Drive) styrer hastigheten til en AC-motor ved å variere frekvensen og spenningen til motoren. Fordeler: 1) Presis hastighetskontroll, 2) Myk start (unngår høy startstrøm), 3) Energibesparelse (redusert hastighet på pumper/vifter sparer mye energi), 4) Redusert mekanisk slitasje.',
    },
    {
      id: 'elektro-data-vg1-33-ex-5',
      type: 'classic',
      task: 'Når ville du velge en servomotor fremfor en steppermotor?',
      solution: 'Velg servomotor når: 1) Høy presisjon er kritisk og steg-tap ikke kan aksepteres, 2) Høyt moment trengs ved høye hastigheter, 3) Belastningen varierer mye, 4) Dynamisk respons er viktig. Velg steppermotor når: Lavere krav til presisjon, enklere system, lavere kostnad, belastning er forutsigbar, og posisjonsholding uten strøm (stepper holder seg).',
    },
    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-33-ex-6',
      type: 'classic',
      task: 'Velg motortype for følgende applikasjoner og begrunn: a) Drone, b) Industriell transportbånd, c) 3D-printer, d) Elbil.',
      solution: 'a) Drone: BLDC-motor. Høy effekttetthet (lett vekt), lang levetid, høy virkningsgrad, presis hastighetskontroll via ESC.\n\nb) Industrielt transportbånd: Asynkronmotor (AC) med VFD. Robust, billig, lite vedlikehold, VFD gir myk start og energibesparelse.\n\nc) 3D-printer: Steppermotor. Presis posisjonering uten feedback, enkel styring, holder posisjon, kostnadseffektiv for hobby.\n\nd) Elbil: BLDC eller permanent-magnet synkronmotor. Høy virkningsgrad (90%+), regenerativ bremsing, kompakt, høyt moment fra stillestående.',
    },
    {
      id: 'elektro-data-vg1-33-ex-7',
      type: 'classic',
      task: 'En pumpe drives av en 5.5 kW asynkronmotor. Ved full hastighet (50 Hz) er effektforbruket 5.5 kW. Ved halv hastighet (25 Hz) reduseres effekten med kuben av hastighetsforholdet. Beregn effektforbruket ved 25 Hz.',
      solution: 'For pumper og vifter gjelder affinitetslovene:\nEffekt ∝ (n/n₀)³\n\nVed halv hastighet (25/50 = 0.5):\nP = P₀ × (0.5)³ = 5.5 kW × 0.125 = 0.6875 kW ≈ 690 W\n\nEffektforbruket reduseres til under 1 kW! Dette viser den enorme energibesparelsen ved å bruke frekvensomformer på pumper og vifter i stedet for spjeld/ventiler.',
    },
  ],
  keyTerms: [
    { term: 'DC-motor', definition: 'Motor som drives av likestrøm, med børster og kommutator.' },
    { term: 'BLDC', definition: 'Børsteløs DC-motor med elektronisk kommutasjon.' },
    { term: 'Asynkronmotor', definition: 'AC-motor der rotoren ikke følger magnetfeltet synkront.' },
    { term: 'Steppermotor', definition: 'Motor som roterer i diskrete steg for presis posisjonering.' },
    { term: 'Servomotor', definition: 'Motor med integrert feedback for closed-loop kontroll.' },
    { term: 'VFD', definition: 'Variable Frequency Drive - frekvensomformer for AC-motorhastighet.' },
  ],
};

// ============================================================================
// Kapittel 34: Batteriteknologi og energilagring
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_34: TextbookChapter = {
  id: 'elektro-data-vg1-34',
  courseId: 'elektro-data-vg1',
  chapterNumber: '34',
  title: 'Batteriteknologi og energilagring',
  description: 'Batterityper, lading, sikkerhet og anvendelser.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå ulike batteriteknologier',
    'forklare lading og batterivedlikehold',
    'kjenne til sikkerhetshensyn',
  ],
  sections: [
    {
      title: 'Batterigrunning',
      content: `## Batterigrunning

**Hva er et batteri?**
Et batteri konverterer kjemisk energi til elektrisk energi gjennom elektrokjemiske reaksjoner.

**Oppbygning:**
- Anode (negativ elektrode)
- Katode (positiv elektrode)
- Elektrolytt (leder ioner)
- Separator (hindrer kortslutning)

**Viktige begreper:**

**Kapasitet (Ah eller mAh)**
Hvor mye ladning batteriet kan lagre.
Et 2000mAh batteri kan levere 2000mA i 1 time, eller 200mA i 10 timer.

**Nominell spenning (V)**
Typisk driftsspenning for batteriet.

**Energitetthet (Wh/kg)**
Energi per vektsenhet. Høyere = lettere for samme kapasitet.

**C-rate**
Lade/utladehastighet relativt til kapasitet.
1C = fullt utladet på 1 time
2C = fullt utladet på 30 minutter

**Sykluser**
Antall fulle lade/utlade-sykluser før betydelig kapasitetstap.

**Selvutlading**
Gradvis kapasitetstap når batteriet ikke brukes.`,
    },
    {
      title: 'Batterityper',
      content: `## Batterityper

**Blyakkumulator (PbA)**
- Nominell spenning: 2V/celle (12V = 6 celler)
- Energitetthet: 30-50 Wh/kg
- Fordeler: Billig, robust, høy strømkapasitet
- Ulemper: Tung, vedlikehold, begrenset sykluser
- Bruk: Bilbatterier, UPS, solcelleanlegg

**Nikkel-metallhydrid (NiMH)**
- Nominell spenning: 1.2V/celle
- Energitetthet: 60-120 Wh/kg
- Fordeler: Ingen minneeffekt, miljøvennlig
- Ulemper: Høy selvutlading
- Bruk: Oppladbare AA/AAA, eldre hybridbiler

**Litium-ion (Li-ion)**
- Nominell spenning: 3.6-3.7V/celle
- Energitetthet: 150-250 Wh/kg
- Fordeler: Høy energitetthet, lav selvutlading, mange sykluser
- Ulemper: Krever beskyttelseskrets (BMS), brannfare ved skade
- Bruk: Mobiler, laptops, elbiler, powerbanks

**Litium-jernfosfat (LiFePO4/LFP)**
- Nominell spenning: 3.2V/celle
- Energitetthet: 90-160 Wh/kg
- Fordeler: Svært sikker, lang levetid (2000+ sykluser), termisk stabil
- Ulemper: Lavere energitetthet enn Li-ion
- Bruk: Elbiler (Tesla, BYD), stasjonært lagring, marinebatterier`,
    },
    {
      title: 'Lading og BMS',
      content: `## Lading og BMS

**Lademetoder for Li-ion:**

**CC/CV (Constant Current / Constant Voltage)**
Standard ladeprofil:
1. CC-fase: Lad med konstant strøm til spenning når maks (4.2V)
2. CV-fase: Hold konstant spenning, strøm synker
3. Avslutning: Når strøm synker under terskel (C/20)

**Hurtiglading**
Høyere strøm i CC-fasen (opptil 2-3C).
- Genererer mer varme
- Kan redusere levetid
- Stopper ofte ved 80% SoC

**BMS (Battery Management System)**
Elektronisk system som overvåker og beskytter batteriet:

**Funksjoner:**
- Overvåker cellespenninger
- Balanserer celler (utjevner spenningsforskjeller)
- Beskytter mot overladning (>4.2V)
- Beskytter mot overdyp utlading (<2.5V)
- Temperaturovervåking
- Strømbegrensning
- Kommunikasjon (SoC, status)

**SoC (State of Charge)**
Hvor mye kapasitet som gjenstår (%).

**SoH (State of Health)**
Batteritilstand sammenlignet med nytt batteri (%).
Etter mange sykluser degraderer SoH.

**Balansering**
Celler i serie kan få ulik ladning over tid.
BMS balanserer ved å utlade høye celler eller overføre energi.`,
    },
    {
      title: 'Batterisikkerhet',
      content: `## Batterisikkerhet

**Faremomenter ved Li-ion:**

**Termisk rusning (Thermal Runaway)**
Ved skade, overladning eller høy temperatur kan batteriet entre en ukontrollert reaksjon:
- Temperatur øker → reaksjon akselererer → enda høyere temperatur
- Kan føre til brann eller eksplosjon
- Svært vanskelig å slokke

**Årsaker til skade:**
- Mekanisk skade (punktering, klem)
- Overladning (>4.2V)
- Overdyp utlading (<2V)
- Høy temperatur (>60°C)
- Kortslutning (ekstern eller intern)

**Sikkerhetstiltak:**

**I design:**
- BMS med alle beskyttelsesfunksjoner
- Fysisk beskyttelse (robust hus)
- Sikringer
- Temperaturovervåking
- Gasslipp (vent) ved trykk

**Ved bruk:**
- Bruk kun godkjent lader
- Ikke la i direkte sol
- Ikke lad skadet batteri
- Oppbevar ved romtemperatur
- Ikke bruk etter fall/støt

**Ved brann:**
- Evakuer umiddelbart
- Li-ion brann er svært vanskelig å slokke
- Store mengder vann for kjøling
- Ikke bruk pulverapparat
- Profesjonell håndtering`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-34-ex-1',
      type: 'classic',
      task: 'Et batteri har kapasitet 5000 mAh. Hvor lenge kan det drive en enhet som trekker 250 mA?',
      solution: 'Tid = Kapasitet / Strøm = 5000 mAh / 250 mA = 20 timer.\nDette er teoretisk maksimum. I praksis litt kortere pga. effektivitetstap.',
    },
    {
      id: 'elektro-data-vg1-34-ex-2',
      type: 'classic',
      task: 'Forklar hva C-rate betyr og hva 2C utlading innebærer for et 3000 mAh batteri.',
      solution: 'C-rate er lade/utladehastighet relativt til kapasitet. 1C = kapasiteten utladet på 1 time. For 3000 mAh batteri: 1C = 3000 mA = 3A. 2C = 2 × 3A = 6A utladestrøm, og batteriet tømmes på 30 minutter. Høyere C-rate gir mer varme og kan redusere levetid.',
    },
    {
      id: 'elektro-data-vg1-34-ex-3',
      type: 'classic',
      task: 'Hva er de viktigste funksjonene til et BMS (Battery Management System)?',
      solution: 'BMS-funksjoner:\n1. Overvåke cellespenninger (forhindre over/underladning)\n2. Balansere celler (utjevne spenningsforskjeller)\n3. Temperaturovervåking og beskyttelse\n4. Strømbegrensning ved overbelastning\n5. Beregne SoC (gjenværende kapasitet)\n6. Kommunisere status til bruker/system\n7. Koble fra ved farlige tilstander',
    },
    {
      id: 'elektro-data-vg1-34-ex-4',
      type: 'classic',
      task: 'Sammenlign Li-ion og LiFePO4 batterier med hensyn til sikkerhet, levetid og energitetthet.',
      solution: 'Li-ion (NMC/NCA):\n- Energitetthet: Høy (150-250 Wh/kg)\n- Sikkerhet: Moderat, kan entre termisk rusning\n- Levetid: 500-1000 sykluser\n\nLiFePO4:\n- Energitetthet: Lavere (90-160 Wh/kg)\n- Sikkerhet: Svært høy, termisk stabil\n- Levetid: 2000-5000 sykluser\n\nValg: Li-ion for maksimal rekkevidde/lett vekt, LiFePO4 for sikkerhet og lang levetid (stasjonært, marine).',
    },
    {
      id: 'elektro-data-vg1-34-ex-5',
      type: 'classic',
      task: 'Hva er termisk rusning og hvordan kan det forhindres?',
      solution: 'Termisk rusning: Ukontrollert kjemisk reaksjon der temperatur øker → akselererer reaksjon → enda høyere temperatur. Kan føre til brann/eksplosjon.\n\nForhindring:\n- BMS med overladnings- og temperaturvern\n- Fysisk beskyttelse mot skade\n- Bruk kun godkjent lader\n- Ikke utsett for høy temperatur\n- Termisk styring (kjøling i elbiler)\n- Kvalitetsceller fra anerkjent produsent',
    },
    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-34-ex-6',
      type: 'classic',
      task: 'Dimensjoner en batteripakke for en elsykkel: Krav: 500 Wh, 36V system, rimelig vekt og kostnad. Foreslå cellevalg, antall celler og konfigrasjon.',
      solution: 'Cellevalg: 18650 Li-ion celler (f.eks. Samsung 35E: 3.6V, 3500mAh)\n\nKonfigurasjon for 36V:\n10 celler i serie: 10 × 3.6V = 36V (nominelt)\n\nKapasitet:\n500 Wh / 36V = 13.9 Ah\n13900 mAh / 3500 mAh = 4 parallelt\n\nTotal: 10S4P = 40 celler\n- Kapasitet: 10 × 3.5Ah = 14 Ah\n- Energi: 36V × 14Ah = 504 Wh\n- Vekt: 40 × 50g = 2 kg (bare celler)\n\nTillegg: BMS (10S), hus, kabler → ca. 2.5-3 kg totalt.\nKostnad: 40 celler × 50 kr + BMS/hus = ca. 2500-3000 kr',
    },
    {
      id: 'elektro-data-vg1-34-ex-7',
      type: 'classic',
      task: 'Forklar hvorfor hurtiglading av elbiler ofte stopper ved 80% SoC og blir tregere mot slutten.',
      solution: 'Ved høy SoC (ladningsnivå) må ladespenningen nærme seg maks cellspenning (4.2V). CC/CV-profilen betyr:\n\n1. 0-80% (CC-fase): Lader med høy konstant strøm så lenge spenningen ikke overstiger maks.\n\n2. 80-100% (CV-fase): Spenningen når maks, så strømmen må reduseres gradvis for å unngå overladning.\n\nI tillegg:\n- Høy strøm ved høy SoC øker risiko for litiumplating\n- Batteritemperatur øker, BMS reduserer strøm\n- Cellebalansering tar tid\n\nDerfor: Rask opp til 80%, tregt videre. For lange turer er det ofte smartere å lade til 80% og fortsette.',
    },
  ],
  keyTerms: [
    { term: 'Kapasitet (Ah)', definition: 'Mål på hvor mye ladning et batteri kan lagre.' },
    { term: 'C-rate', definition: 'Lade/utladehastighet relativt til batteriets kapasitet.' },
    { term: 'BMS', definition: 'Battery Management System - overvåker og beskytter batteriet.' },
    { term: 'SoC', definition: 'State of Charge - gjenværende ladningsnivå i prosent.' },
    { term: 'Termisk rusning', definition: 'Ukontrollert varmeutvikling som kan føre til brann.' },
    { term: 'LiFePO4', definition: 'Litium-jernfosfat - sikker batteriteknologi med lang levetid.' },
  ],
};

// ============================================================================
// Kapittel 35: Elbiler og ladeinfrastruktur
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_35: TextbookChapter = {
  id: 'elektro-data-vg1-35',
  courseId: 'elektro-data-vg1',
  chapterNumber: '35',
  title: 'Elbiler og ladeinfrastruktur',
  description: 'Elbilteknologi, ladetyper, ladestandarder og infrastruktur.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå elbilens oppbygning og komponenter',
    'kjenne til ladetyper og standarder',
    'forklare ladeinfrastruktur og dimensjonering',
  ],
  sections: [
    {
      title: 'Elbilens oppbygning',
      content: `## Elbilens oppbygning

**Hovedkomponenter:**

**Batteripakke**
Lagrer energien som driver bilen.
- Typisk 40-100 kWh kapasitet
- Li-ion eller LFP celler
- BMS for overvåking og beskyttelse
- Termisk styring (kjøling/oppvarming)
- Plassert i gulvet for lav tyngdepunkt

**Elektromotor**
Konverterer elektrisk energi til mekanisk kraft.
- Permanentmagnet synkronmotor (PMSM) vanligst
- Induksjonsmotor (Tesla Model S/X)
- 100-400 kW typisk effekt
- Regenerativ bremsing

**Inverter**
Konverterer DC fra batteri til AC for motor.
- Styrer motorhastighet og moment
- Muliggjør regenerativ bremsing

**Ombordlader (OBC)**
Konverterer AC fra stikkontakt til DC for batteri.
- Typisk 7-22 kW (AC-lading)
- Innebygget i bilen

**DC-DC omformer**
Konverterer høyspenning (400V) til 12V for hjelpeutstyr.

**Termisk styringssystem**
Opprettholder optimal temperatur:
- Batterikjøling/oppvarming
- Motor- og inverterkjøling
- Kupévarme (varmepumpe)`,
    },
    {
      title: 'AC- vs DC-lading',
      content: `## AC- vs DC-lading

**AC-lading (hjemmelading, destinasjonslading)**
Vekselstrøm leveres til bilens ombordlader som konverterer til DC.

**Typer:**
- Modus 1: Vanlig stikkontakt (2.3 kW, IKKE anbefalt)
- Modus 2: Stikkontakt med ICCB-boks (3.7-7.4 kW)
- Modus 3: Dedikert ladestasjon (7.4-22 kW)

**Kontakttyper (AC):**
- Type 2 (Mennekes): Europeisk standard, 3-fase
- Type 1 (J1772): Amerikansk, 1-fase

**Fordeler AC:**
- Billigere infrastruktur
- Passer for langvarig parkering
- Enklere installasjon

**DC-lading (hurtiglading)**
Likestrøm mates direkte til batteriet, bypasser ombordlader.

**Kontakttyper (DC):**
- CCS2 (Combined Charging System): Europeisk/global standard, opptil 350 kW
- CHAdeMO: Japansk standard, opptil 150 kW
- Tesla Supercharger: Proprietært (Tesla åpner nå)

**Fordeler DC:**
- Svært rask lading (20-80% på 20-30 min)
- Nødvendig for langdistanse

**Ulemper DC:**
- Dyr infrastruktur
- Høyt effektbehov fra nettet
- Større slitasje på batteri ved hyppig bruk`,
    },
    {
      title: 'Ladeinfrastruktur i praksis',
      content: `## Ladeinfrastruktur i praksis

**Hjemmelading**
De fleste elbileiere lader hjemme om natten.

**Løsninger:**
- Dedikert ladeboks (Easee, Zaptec, Wallbox)
- 7.4 kW (1-fase 32A) eller 22 kW (3-fase 32A)
- Smartfunksjoner: App-styring, tidsplanlegging, lastfordeling

**Installasjon:**
- Krever elektriker
- Må ha tilstrekkelig kapasitet i sikringsskap
- Ofte ny kurs fra hovedtavle
- Jordfeilbryter Type A eller B

**Kostnader:**
- Ladeboks: 5000-15000 kr
- Installasjon: 5000-15000 kr

**Borettslag/sameie:**
- Utfordring: Mange biler, begrenset strømkapasitet
- Løsning: Lastbalansering (deler tilgjengelig effekt)
- Fellesanlegg med måling per bruker

**Offentlig lading:**
- Destinasjonslading (hoteller, kjøpesentre): AC 7-22 kW
- Hurtigladere langs veier: DC 50-350 kW
- Betalingsløsninger: App, RFID, kontaktløst kort

**Dimensjoneringseksempel:**
50 kWh batteri, lader fra 20% til 80%:
- Energibehov: 60% × 50 kWh = 30 kWh
- 7.4 kW lader: 30 / 7.4 = 4 timer
- 11 kW lader: 30 / 11 = 2.7 timer
- 150 kW hurtiglader: 30 / 150 = 12 min (teoretisk)`,
    },
    {
      title: 'Fremtidens teknologi',
      content: `## Fremtidens teknologi

**Vehicle-to-Grid (V2G)**
Elbilen som strømlager for nettet.
- Lade når strømprisen er lav
- Levere tilbake når prisen er høy
- Balansere fornybar produksjon
- Krever toveis lader og smartfunksjoner

**Trådløs lading (induktiv)**
Ladeplater i bakken, mottaker under bilen.
- Praktisk (ingen kabel)
- Lavere effektivitet (88-92%)
- Høyere kostnad
- Begrenset til 11-22 kW foreløpig

**Megawatt-lading (MCS)**
For tunge kjøretøy (lastebiler, busser).
- Opptil 3.75 MW effekt!
- Ny kontaktstandard
- Nødvendig for elektrisk godstransport

**Batteribytte (Battery Swap)**
Bytt tomt batteri med fullt på 5 minutter.
- NIO i Kina satser på dette
- Standardisering utfordrende
- Alternativ til hurtiglading

**Solid-state batterier**
Erstatter flytende elektrolytt med fast materiale.
- Høyere energitetthet (500+ Wh/kg)
- Sikrere
- Raskere lading
- Kommer kanskje rundt 2025-2030`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-35-ex-1',
      type: 'classic',
      task: 'Forklar forskjellen mellom AC-lading og DC-lading av elbil.',
      solution: 'AC-lading: Vekselstrøm fra nettet mates til bilens ombordlader som konverterer til DC for batteriet. Begrenset av ombordladers kapasitet (typisk 7-22 kW). Brukes hjemme og på destinasjoner.\n\nDC-lading: Likestrøm mates direkte til batteriet fra ekstern lader, bypasser ombordlader. Mye høyere effekt mulig (50-350 kW). Brukes for hurtiglading langs veier.',
    },
    {
      id: 'elektro-data-vg1-35-ex-2',
      type: 'classic',
      task: 'En elbil med 75 kWh batteri har 15% gjenværende ladning. Hvor lang tid tar det å lade til 80% med en 11 kW hjemmelader?',
      solution: 'Energibehov: (80% - 15%) × 75 kWh = 65% × 75 = 48.75 kWh\nLadetid: 48.75 kWh / 11 kW = 4.43 timer ≈ 4 timer og 26 minutter.\n\nMed tap og avrunding i praksis: ca. 4.5-5 timer.',
    },
    {
      id: 'elektro-data-vg1-35-ex-3',
      type: 'classic',
      task: 'Hva er CCS2 og hvorfor er det viktig?',
      solution: 'CCS2 (Combined Charging System) er europeisk og global standard for DC-hurtiglading. Den kombinerer Type 2 AC-kontakt med ekstra DC-pinner i bunn. Viktig fordi: 1) Standardisering - én kontakt for alle biler i Europa, 2) Høy effekt opptil 350 kW, 3) Kommunikasjon mellom bil og lader (Plug & Charge), 4) Fremtidskompatibel. Alle nye elbiler i Europa har CCS2.',
    },
    {
      id: 'elektro-data-vg1-35-ex-4',
      type: 'classic',
      task: 'Hva er lastbalansering og hvorfor er det nødvendig i borettslag?',
      solution: 'Lastbalansering fordeler tilgjengelig strømkapasitet dynamisk mellom flere elbilladere. I borettslag har man begrenset hovedsikring (f.eks. 200A). Uten lastbalansering ville få biler som lader samtidig overbelaste anlegget. Med lastbalansering: Systemet måler total belastning og reduserer ladeeffekt per bil når mange lader. Alle får lading, men saktere ved høy belastning. Noen systemer prioriterer basert på SoC eller tidsplaner.',
    },
    {
      id: 'elektro-data-vg1-35-ex-5',
      type: 'classic',
      task: 'Hva er Vehicle-to-Grid (V2G) og hvilke fordeler har det?',
      solution: 'V2G lar elbilen levere strøm tilbake til nettet. Fordeler:\n1) Inntekt: Få betalt for å levere strøm ved høy pris\n2) Nettbalanse: Hjelp nettet ved etterspørselstopper\n3) Integrere fornybar: Lagre overskuddsproduksjon fra sol/vind\n4) Backup: Strøm til huset ved nettutfall\n5) Utnyttelse: Bilen står parkert 90%+ av tiden uansett\n\nKrever: Toveis lader, smartsystem, avtale med nettselskap.',
    },
    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-35-ex-6',
      type: 'classic',
      task: 'Planlegg ladeinfrastruktur for et borettslag med 20 parkeringsplasser og 200A hovedsikring. Anta at 80% vil ha elbil om 5 år.',
      solution: 'Forutsetninger:\n- 16 ladestasjoner trengs (80% av 20)\n- 200A × 230V = 46 kW tilgjengelig total\n- Annet forbruk i bygget: ca. 10-15 kW\n- Tilgjengelig for lading: ca. 30-35 kW\n\nLøsning:\nLastbalansert system (f.eks. Easee, Zaptec)\n- 16 × 7.4 kW ladere (maks kapasitet)\n- Lastbalansering deler 30 kW\n- Gjennomsnitt per bil: 30/16 = 1.9 kW (når alle lader)\n- Nattlading: Hvis 8 biler lader: 30/8 = 3.75 kW hver\n\nKostnad:\n- 16 ladere × 8000 kr = 128 000 kr\n- Installasjon og infrastruktur: 100 000 kr\n- Totalt: ca. 230 000 kr\n- Per plass: ca. 14 400 kr\n\nVurder: Oppgradering av hovedsikring om nødvendig.',
    },
    {
      id: 'elektro-data-vg1-35-ex-7',
      type: 'classic',
      task: 'Beregn tidsbesparelsen ved å bruke 150 kW DC-hurtiglader vs 11 kW AC-lader for å lade en elbil fra 10% til 80% med 60 kWh batteri.',
      solution: 'Energibehov: (80% - 10%) × 60 kWh = 42 kWh\n\n11 kW AC-lader:\nTid = 42 kWh / 11 kW = 3.82 timer = 3 timer 49 minutter\n\n150 kW DC-hurtiglader:\nReell ladeeffekt er ikke konstant 150 kW:\n- 10-50%: ~120 kW gjennomsnitt\n- 50-80%: ~80 kW gjennomsnitt\n\nEnkelforenklet (gjennomsnitt 100 kW):\nTid = 42 kWh / 100 kW = 0.42 timer = 25 minutter\n\nTidsbesparelse: 3:49 - 0:25 = ca. 3 timer 24 minutter\n\nPraktisk: DC-lader er 8-9× raskere i dette scenariet, kritisk for langtur men unødvendig for hjemmelading.',
    },
  ],
  keyTerms: [
    { term: 'CCS2', definition: 'Combined Charging System - europeisk standard for DC-hurtiglading.' },
    { term: 'Type 2', definition: 'Standard kontakt for AC-lading i Europa (Mennekes).' },
    { term: 'Ombordlader', definition: 'Bilens innebygde lader som konverterer AC til DC.' },
    { term: 'Regenerativ bremsing', definition: 'Gjenvinning av kinetisk energi til batteri ved bremsing.' },
    { term: 'Lastbalansering', definition: 'Fordeling av strømkapasitet mellom flere ladere.' },
    { term: 'V2G', definition: 'Vehicle-to-Grid - elbilen leverer strøm tilbake til nettet.' },
  ],
};

// ============================================================================
// Kapittel 36: EMC og støy
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_36: TextbookChapter = {
  id: 'elektro-data-vg1-36',
  courseId: 'elektro-data-vg1',
  chapterNumber: '36',
  title: 'EMC og støy',
  description: 'Elektromagnetisk kompatibilitet, støykilder og tiltak.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå elektromagnetisk støy og EMC',
    'identifisere støykilder',
    'implementere tiltak for støyreduksjon',
  ],
  sections: [
    {
      title: 'Hva er EMC?',
      content: `## Hva er EMC?

**EMC = Elektromagnetisk Kompatibilitet**
Evnen til elektrisk utstyr til å:
1. Fungere tilfredsstillende i sitt elektromagnetiske miljø
2. Ikke forårsake uakseptable forstyrrelser for annet utstyr

**EMI (Electromagnetic Interference)**
Elektromagnetisk interferens - støy som forstyrrer utstyr.

**Kilder til EMI:**
- Elektriske motorer og drev
- Svitsjer og releer
- Databehandlingsutstyr
- Radiosenderen
- Lynavledere
- Statisk elektrisitet

**Koblingsmekanismer:**

**Ledningsbundet (Conducted)**
Støy som spres via kabler og ledninger.

**Strålt (Radiated)**
Støy som spres som radiobølger gjennom luften.

**Kapasitiv kobling**
Elektrisk felt kobler signaler mellom ledere.

**Induktiv kobling**
Magnetfelt kobler signaler mellom ledere (transformatoreffekt).

**Lovkrav:**
CE-merking krever at produkter oppfyller EMC-direktivet:
- Emission: Ikke forårsake for mye støy
- Immunity: Tåle rimelige støynivåer`,
    },
    {
      title: 'Støytyper og symptomer',
      content: `## Støytyper og symptomer

**Typer støy:**

**Kontinuerlig støy**
Vedvarende forstyrrelser:
- Svitsjete strømforsyninger
- Frekvensomformere
- Datautstyr

**Impulsstøy**
Korte, kraftige pulser:
- Relekontakter
- Lynutladninger
- Motorstyringer

**Transienter**
Raske spenningstopper:
- Innkobling av induktive laster
- Elektrostatisk utladning (ESD)
- Lynnedslag

**Symptomer på EMI-problemer:**

**Digitale systemer:**
- Feilaktige målinger
- Programkrasj
- Kommunikasjonsfeil
- Tilfeldige resetter

**Analoge systemer:**
- Støy på signaler
- Feil avlesninger
- Ustabil regulering

**Audio/Video:**
- Summing og knatring
- Striper på skjerm
- Interferensmønstre

**Feilsøking av EMI:**
- Oppstår problemet til bestemte tider?
- Korrelerer det med spesifikke hendelser? (Motor start, lynnedslag)
- Forsvinner problemet med utstyr frakoblet?
- Hjelper det å flytte/skifte kabler?`,
    },
    {
      title: 'Tiltak mot støy',
      content: `## Tiltak mot støy

**Skjerming**
Metall-kapsling rundt følsomt eller støyende utstyr.
- Faradays bur-effekt
- Hulldimensjon < λ/20 av høyeste frekvens
- Jordet skjerm

**Filtrering**
EMI-filtre på strømforsyning og signalkabler.
- Lavpassfiltre fjerner høyfrekvent støy
- Common-mode og differential-mode filtre
- Ferrittkjerner rundt kabler

**Jording**
God jording leder støy bort.
- Stjernepunkt for analoge kretser
- Skilleplan mellom digital og analog
- Lav impedans jord (kort, bred)

**Kabling**
- Skill kraft og signal/data
- Bruk skjermede kabler
- Tvunnet parkabel for differensielle signaler
- Kryss kabler i 90° vinkel

**Layout (PCB):**
- Jordplan
- Korte signalveier
- Dekobling-kondensatorer nær IC-er
- Kritiske signaler vekk fra kanter

**Komponentvalg:**
- Lavstøy komponenter
- Riktig dimensjonerte snubbere
- Ferritperler på datalinjer
- TVS-dioder for transientbeskyttelse`,
    },
    {
      title: 'Praktiske eksempler',
      content: `## Praktiske eksempler

**Eksempel 1: Støy fra frekvensomformer**
Problem: PLS får feilsignaler når VFD starter motor.

Årsak: VFD skaper høyfrekvent støy som kobler seg til PLS-innganger.

Løsninger:
- Skjermede motorkabler, skjerm jordet i begge ender
- EMI-filter på VFD-inngang
- Skill VFD-kabler fra signalkabler
- Ferrittkjerner på PLS-kabler

**Eksempel 2: Støy i analogt målesignal**
Problem: 4-20mA signal fra temperatursensor svinger.

Årsak: Induktiv kobling fra nærliggende kraftkabel.

Løsninger:
- Bruk skjermet kabel (skjerm jordet i én ende)
- Øk avstand til kraftkabel
- Legg signalkabel i metallrør
- Bruk differensiell inngang på mottaker

**Eksempel 3: ESD-problemer**
Problem: Berøringsskjerm krasjer ved tørt vær.

Årsak: Elektrostatisk utladning fra brukere.

Løsninger:
- ESD-beskyttelsesdioder på alle I/O
- Antistatisk gulvbelegg
- Fuktighet > 40%
- Jordet metallramme rundt skjerm

**Måling av EMI:**
- Spektrumanalysator for frekvensanalyse
- Oscilloskop for transienter
- Nærfeltsoner for lokalisering
- EMI-testlab for CE-godkjenning`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-36-ex-1',
      type: 'classic',
      task: 'Hva betyr EMC og hva er forskjellen mellom emission og immunity?',
      solution: 'EMC = Elektromagnetisk Kompatibilitet. Emission: Hvor mye støy utstyret sender ut - må være under grenseverdier for ikke å forstyrre annet utstyr. Immunity: Hvor mye støy utstyret tåler - må tåle rimelige støynivåer uten feilfunksjon. Begge krav må oppfylles for CE-merking.',
    },
    {
      id: 'elektro-data-vg1-36-ex-2',
      type: 'classic',
      task: 'Nevn fire ulike koblingsmekanismer for elektromagnetisk støy.',
      solution: '1. Ledningsbundet (conducted): Støy spres via kabler og ledere\n2. Strålt (radiated): Støy spres som radiobølger gjennom luften\n3. Kapasitiv kobling: Elektrisk felt kobler mellom ledere\n4. Induktiv kobling: Magnetfelt kobler mellom ledere (som transformator)\n\nHver mekanisme krever ulike mottiltak.',
    },
    {
      id: 'elektro-data-vg1-36-ex-3',
      type: 'classic',
      task: 'Hvordan hjelper en ferrittkjerne mot støy på en kabel?',
      solution: 'En ferrittkjerne rundt en kabel fungerer som et lavpassfilter for høyfrekvent støy. Ferritt-materialet har høy permeabilitet og absorberer høyfrekvent energi som varme. Common-mode støy (samme retning i begge ledere) dempes effektivt, mens nyttesignalet (differential-mode) påvirkes minimalt. Plasseres nær støykilden eller ved inngang til følsomt utstyr.',
    },
    {
      id: 'elektro-data-vg1-36-ex-4',
      type: 'classic',
      task: 'Hvorfor bør signal/datakabler og kraftkabler holdes adskilt?',
      solution: 'Kraftkabler bærer høy strøm som skaper sterke magnetfelt. Disse feltene kan indusere støy i nærliggende signalkabler (induktiv kobling). Kapasitiv kobling kan også overføre transienter. Ved å holde avstand (eller krysse i 90°) reduseres koblingen betydelig. Tommelregel: Minst 30 cm mellom kraft og signal, eller bruk kabelkanal/rør.',
    },
    {
      id: 'elektro-data-vg1-36-ex-5',
      type: 'classic',
      task: 'Hva er ESD og hvordan kan elektronikk beskyttes mot det?',
      solution: 'ESD (Electrostatic Discharge) er utladning av statisk elektrisitet, ofte tusenvis av volt på mikrosekunder. Kan ødelegge eller forstyrre elektronikk.\n\nBeskyttelse:\n- TVS/ESD-dioder på I/O-porter\n- Antistatisk arbeidsplass (armbånd, matte)\n- Jordet metallkapsling\n- Høyere luftfuktighet\n- Antistatisk gulvbelegg\n- PCB-design med god jording',
    },
    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-36-ex-6',
      type: 'classic',
      task: 'Du installerer et følsomt målesystem i et rom med frekvensomformer og elektriske motorer. Beskriv tiltak for å minimere EMI-problemer.',
      solution: 'Tiltak mot EMI i industrielt miljø:\n\n1. Kabling:\n- Skjermede kabler for målesignaler\n- Minimum 30 cm mellom kraft og signal\n- Bruk metallrør/kabelkanal\n- Kryss kabler i 90° når nødvendig\n\n2. Frekvensomformer:\n- EMI-filter på inngangen\n- Skjermet motorkabel\n- Jord skjerm i begge ender\n\n3. Målesystem:\n- Differensielle innganger\n- Ferrittkjerner på kablinger\n- Jordet metallskap\n- Optisk isolasjon for digital kommunikasjon\n\n4. Jording:\n- Felles jordpunkt for målesystem\n- Lav impedans jordleder\n- Separat jord for analog og digital\n\n5. Generelt:\n- Dekobling på strømforsyning\n- Overvåk signalets kvalitet etter installasjon',
    },
    {
      id: 'elektro-data-vg1-36-ex-7',
      type: 'classic',
      task: 'Et 4-20 mA analogt signal fra en sensor 50 meter unna viser 10% avvik og ustabilitet. Feilsøk og foreslå løsninger.',
      solution: 'Feilsøking:\n1. Skjer problemet til bestemte tider? → Korrelerer med annen aktivitet\n2. Mål signalet ved sensor og ved mottaker → Lokaliserer problemet\n3. Frakoble andre utstyr → Identifiser støykilde\n4. Bytt til annen kabelrute → Sjekk kapasitiv/induktiv kobling\n\nSannsynlige årsaker:\n- Paralell kraftkabel induserer støy\n- Lang kabel plukker opp strålt støy\n- Dårlig skjermingsforbindelse\n- Jordløkke\n\nLøsninger:\n1. Bruk skjermet tvunnet parkabel (skjerm jordet i én ende)\n2. Øk avstand til kraftkabler\n3. Legg i metallrør\n4. Bruk isolert signalomformer for å bryte jordløkke\n5. EMI-filter ved mottaker\n6. Bytt til digital kommunikasjon (4-20 mA med HART eller Modbus)',
    },
  ],
  keyTerms: [
    { term: 'EMC', definition: 'Elektromagnetisk Kompatibilitet - utstyrs evne til å fungere uten å forstyrre.' },
    { term: 'EMI', definition: 'Elektromagnetisk Interferens - støy som forstyrrer elektronikk.' },
    { term: 'Skjerming', definition: 'Metallkapsling som hindrer elektromagnetisk stråling inn/ut.' },
    { term: 'ESD', definition: 'Electrostatic Discharge - utladning av statisk elektrisitet.' },
    { term: 'Common-mode støy', definition: 'Støy med samme retning i begge ledere relativt til jord.' },
    { term: 'Ferrittkjerne', definition: 'Magnetisk kjerne som demper høyfrekvent støy på kabler.' },
  ],
};

// ============================================================================
// Kapittel 37-48: Kortere kapitler for å fylle ut til 48 totalt
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_37: TextbookChapter = {
  id: 'elektro-data-vg1-37',
  courseId: 'elektro-data-vg1',
  chapterNumber: '37',
  title: 'Måleinstrumenter og kallibrering',
  description: 'Avansert bruk av måleinstrumenter og kalibreringsrutiner.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke oscilloskop og avanserte instrumenter',
    'forstå kalibrering og måleusikkerhet',
  ],
  sections: [
    {
      title: 'Oscilloskop',
      content: `## Oscilloskop

Oscilloskopet visualiserer elektriske signaler over tid.

**Grunnleggende innstillinger:**
- Vertikal: Volt per divisjon (sensitivitet)
- Horisontal: Tid per divisjon
- Trigger: Hva som starter visningen

**Viktige målinger:**
- Amplitude (topp-til-topp, RMS)
- Periode og frekvens
- Stigetid og falltid
- Duty cycle
- Fase mellom signaler

**Tips:**
- Start med Auto-skala
- Juster trigger for stabil visning
- Bruk kursorer for presise målinger
- Lagre skjermbilder til dokumentasjon`,
    },
    {
      title: 'Kalibrering',
      content: `## Kalibrering

Kalibrering sikrer at måleinstrumenter gir nøyaktige resultater.

**Hvorfor kalibrere:**
- Instrumenter drifter over tid
- Temperaturdrift
- Komponentaldring
- Kvalitetssikring

**Sporbarhet:**
Kalibrering spores tilbake til nasjonale standarder.
Instrument → Referanse → Lab → Nasjonalt → Internasjonalt

**Måleusikkerhet:**
Ingen måling er perfekt. Usikkerhet angis:
- Måleverdi ± usikkerhet
- Eksempel: 5.00V ± 0.02V

**Kalibrerings-intervaller:**
- Multimeter: 1-2 år
- Oscilloskop: 1 år
- Temperaturinstrumenter: 6-12 mnd
- Avhenger av bruk og krav`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-37-ex-1',
      type: 'classic',
      task: 'Et oscilloskop viser et signal som dekker 4 divisjoner vertikalt og 2 divisjoner horisontalt (halv periode). Skalaen er 2V/div og 1ms/div. Beregn amplitude og frekvens.',
      solution: 'Amplitude (topp-til-topp): 4 div × 2V/div = 8 Vpp\nHalv periode: 2 div × 1ms/div = 2 ms\nHel periode: 4 ms\nFrekvens: f = 1/T = 1/0.004s = 250 Hz',
    },
    {
      id: 'elektro-data-vg1-37-ex-2',
      type: 'classic',
      task: 'Hva betyr det at et multimeter er kalibrert med sporbarhet til nasjonale standarder?',
      solution: 'Sporbarhet betyr at kalibreringsresultatene kan følges tilbake via en ubrutt kjede til internasjonale standarder. Ditt multimeter ble kalibrert mot en referanse som igjen var kalibrert mot en mer nøyaktig referanse, osv. opp til nasjonale laboratorier som oppbevarer primærstandarder. Dette sikrer at målinger over hele verden er sammenlignbare.',
    },
    {
      id: 'elektro-data-vg1-37-ex-3',
      type: 'classic',
      task: 'Et temperaturinstrument har måleusikkerhet ±0.5°C. Du måler 25.0°C. Hva er det reelle temperaturområdet?',
      solution: 'Den reelle temperaturen ligger mellom 25.0 - 0.5 = 24.5°C og 25.0 + 0.5 = 25.5°C med en gitt konfidens (typisk 95%). Måleusikkerheten tar hensyn til instrumentnøyaktighet, kalibrering, miljøforhold og andre feilkilder.',
    },
    {
      id: 'elektro-data-vg1-37-ex-4',
      type: 'classic',
      task: 'Hva er trigger-funksjonen på et oscilloskop og hvorfor er den viktig?',
      solution: 'Trigger bestemmer når oscilloskopet starter å tegne signalet. Uten trigger vil bildet "rulle" og være ustabilt. Trigger stopper opptegningen til signalet passerer et valgt nivå (triggernivå) med valgt retning (stigende/fallende). Dette synkroniserer visningen med signalet og gir et stabilt bilde. Vanlige triggerkilder: intern kanal, ekstern signal, eller linjenettet.',
    },
    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-37-ex-5',
      type: 'classic',
      task: 'Du skal verifisere en 5V strømforsyning. Beskriv måleoppsett med oscilloskop for å sjekke DC-nivå, ripple og støy.',
      solution: 'Måleoppsett:\n\n1. DC-nivå:\n- Koble probe til utgangen (jord til GND)\n- DC-kobling, 2V/div\n- Avles: Skal vise 5V ±5% = 4.75-5.25V\n\n2. Ripple:\n- AC-kobling for å fjerne DC-offset\n- Øk sensitivitet: 20mV/div eller 50mV/div\n- Tidbase: 2-5 ms/div for 50/100 Hz ripple\n- Mål topp-til-topp: Skal være <100mV (typisk)\n\n3. Støy:\n- Behold AC-kobling\n- Øk tidsbase: 10-50 µs/div for høyfrekvent støy\n- Bruk 20 MHz båndbreddebegrensning\n- Mål støynivå\n\n4. Dokumenter:\n- Skjermbilde med målinger\n- Sammenlign med spesifikasjon',
    },
    {
      id: 'elektro-data-vg1-37-ex-6',
      type: 'classic',
      task: 'Lag en sjekkliste for årlig kalibreringskontroll av et digitalt multimeter.',
      solution: 'Kalibreringssjekkliste - Multimeter:\n\n1. Visuell inspeksjon:\n□ Ingen fysiske skader\n□ Prober og ledninger OK\n□ Display lesbart\n□ Batterinivå OK\n\n2. Funksjonskontroll:\n□ Alle brytere og knapper fungerer\n□ Automatisk områdevalg OK\n□ Hold-funksjon OK\n\n3. Nullpunkt:\n□ DC Volt: 0.00V med probes kortsluttet\n□ Ohm: OL ved åpen, ~0Ω ved kortslutning\n□ AC Volt: 0.00V\n\n4. Nøyaktighetstest (mot referanse):\n□ DC 1V, 10V, 100V (±0.5%?)\n□ AC 1V, 10V RMS\n□ Motstand 100Ω, 1kΩ, 10kΩ\n\n5. Dokumentasjon:\n□ Resultat innenfor spesifikasjon?\n□ Signert av kontrollør\n□ Neste kalibreringsdato satt',
    },
  ],
  keyTerms: [
    { term: 'Oscilloskop', definition: 'Instrument som visualiserer elektriske signaler over tid.' },
    { term: 'Trigger', definition: 'Funksjon som synkroniserer oscilloskopets visning med signalet.' },
    { term: 'Kalibrering', definition: 'Justering/verifisering av instrumentets nøyaktighet.' },
    { term: 'Sporbarhet', definition: 'Kjedej av kalibreringer tilbake til nasjonale standarder.' },
    { term: 'Måleusikkerhet', definition: 'Anslått feilmargin i en måling.' },
  ],
};

// Kort avslutningskapittel - oppsummering og veien videre

export const CHAPTER_ELEKTRO_DATA_VG1_38: TextbookChapter = {
  id: 'elektro-data-vg1-38',
  courseId: 'elektro-data-vg1',
  chapterNumber: '38',
  title: 'Oppsummering og veien videre',
  description: 'Oppsummering av hovedtemaer og forberedelse til VG2.',
  estimatedMinutes: 40,
  competenceGoals: [
    'oppsummere hovedtemaer fra VG1',
    'forberede seg til valg av VG2-retning',
  ],
  sections: [
    {
      title: 'Hovedtemaer i Elektro og datateknologi VG1',
      content: `## Hovedtemaer i Elektro og datateknologi VG1

Gjennom dette året har du lært grunnleggende ferdigheter innen:

**Elektronikk og kretser**
- Ohms lov og kretsberegninger
- Serie- og parallellkobling
- Passive og aktive komponenter

**Digital elektronikk**
- Tallsystemer og logiske porter
- Boolsk algebra
- Flip-flops og tellere

**Programmering**
- Python og Arduino
- Variabler, løkker, funksjoner
- Objektorientert programmering

**Nettverk og kommunikasjon**
- OSI-modellen og TCP/IP
- IP-adressering og VLAN
- Nettverkssikkerhet

**Energi og installasjoner**
- Fornybar energi
- Elektriske installasjoner
- Solceller og varmepumper

**Automasjon og styring**
- Sensorer og aktuatorer
- PLS-programmering
- Industriell automasjon

**HMS og sikkerhet**
- Elsikkerhet og forskrifter
- Feilsøking
- Dokumentasjon`,
    },
    {
      title: 'Veien til VG2',
      content: `## Veien til VG2

Elektro og datateknologi har flere spesialiserings-retninger på VG2:

**Automatisering**
- PLS og styringssystemer
- Industriroboter
- Prosessautomasjon
- Industriell IT

**Dataelektronikk**
- Elektronikkproduksjon
- Reparasjon og feilsøking
- Testing og kvalitetssikring

**Elenergi**
- Elektriske installasjoner
- Fornybar energi
- Kraftdistribusjon

**Elektronikk og nettverkssystemer**
- Datanett og servere
- Sikkerhetssystemer
- Telekommunikasjon

**Tips for VG2:**
- Velg retning basert på interesse
- Snakk med rådgiver og faglærere
- Besøk bedrifter
- Les om jobbmuligheter

**Forberedelse:**
- Gjennomgå kompetansemålene
- Frisk opp grunnleggende teori
- Praktiser programmering
- Bli kjent med verktøy og instrumenter`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-38-ex-1',
      type: 'classic',
      task: 'Velg tre temaer fra VG1 som du synes var mest interessante og forklar hvorfor.',
      solution: 'Individuelt svar. Eksempel: 1) Programmering - kreativ problemløsning, se konkrete resultater. 2) Automasjon - spennende å se fysiske ting styres av kode. 3) Nettverkssikkerhet - viktig og relevant i dagens samfunn. Refleksjon over egne interesser hjelper med valg av VG2-retning.',
    },
    {
      id: 'elektro-data-vg1-38-ex-2',
      type: 'classic',
      task: 'Hvilken VG2-retning passer best for deg? Begrunn valget.',
      solution: 'Individuelt svar. Vurder: Hva er du interessert i? Hva er du flink til? Hvilke jobbmuligheter finnes? Liker du praktisk arbeid, programmering, eller begge? Har du besøkt bedrifter eller snakket med fagfolk? Det er lurt å velge noe du brenner for - motivasjon er viktig for læring og karriere.',
    },
    {
      id: 'elektro-data-vg1-38-ex-3',
      type: 'classic',
      task: 'Lag en liste over fem ting du vil lære mer om på VG2.',
      solution: 'Eksempler:\n1. Avansert PLS-programmering\n2. Nettverksdesign og konfigurering\n3. Elektronisk kretsdesign\n4. Robotprogrammering\n5. Fornybar energiteknologi\n\nLag din egen liste basert på hva du synes er spennende og relevant for din valgte retning.',
    },
    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-38-ex-4',
      type: 'classic',
      task: 'Reflekter over VG1-året: Hva har du lært? Hva vil du jobbe mer med? Hvordan har synet ditt på elektro- og datateknologi endret seg?',
      solution: 'Personlig refleksjon. Vurder:\n- Nye ferdigheter (lodding, programmering, feilsøking)\n- Teoretisk forståelse (elektrisitet, nettverk, automasjon)\n- Praktiske prosjekter\n- Hva var utfordrende?\n- Hva var overraskende interessant?\n- Hvordan påvirker dette yrkesvalget ditt?\n\nDenne refleksjonen er verdifull for videre læring og motivasjon.',
    },
    {
      id: 'elektro-data-vg1-38-ex-5',
      type: 'classic',
      task: 'Planlegg et sommerprojekt som kombinerer flere temaer fra VG1.',
      solution: 'Eksempel prosjektforslag:\n\n"Automatisk vekstlys for planter"\n\nKombinerer:\n- Programmering (Arduino)\n- Sensorer (lyssensor, jordfuktighet)\n- Aktuatorer (relé, LED-stripe)\n- Elektronikk (koble krets)\n- Dokumentasjon (rapport)\n\nPlan:\n1. Design krets og program\n2. Bestill komponenter\n3. Bygg og test\n4. Juster og forbedre\n5. Dokumenter med bilder og kode\n\nSlikt prosjekt viser kompetanse til fremtidige arbeidsgivere og er morsomt å gjøre!',
    },
  ],
  keyTerms: [
    { term: 'VG2 Automatisering', definition: 'Spesialisering i styringssystemer og industriautomasjon.' },
    { term: 'VG2 Dataelektronikk', definition: 'Spesialisering i elektronikkproduksjon og reparasjon.' },
    { term: 'VG2 Elenergi', definition: 'Spesialisering i elektriske installasjoner og kraftdistribusjon.' },
    { term: 'Fagbrev', definition: 'Formell yrkeskompetanse etter VG2 og læretid.' },
  ],
};

// ============================================================================
// Eksporter alle kapitler fra del 5
// ============================================================================

export const CHAPTERS_ELEKTRO_DATA_VG1_PART5 = [
  CHAPTER_ELEKTRO_DATA_VG1_33,
  CHAPTER_ELEKTRO_DATA_VG1_34,
  CHAPTER_ELEKTRO_DATA_VG1_35,
  CHAPTER_ELEKTRO_DATA_VG1_36,
  CHAPTER_ELEKTRO_DATA_VG1_37,
  CHAPTER_ELEKTRO_DATA_VG1_38,
];
