/* eslint-disable */
// @ts-nocheck
/**
 * Elektro og datateknologi VG1 - Kapittel 6: Automasjon og styring (nye delkapitler)
 *
 * Dekker: 6.2, 6.3, 6.5, 6.6, 6.7
 * Temaer: Aktuatorer, reguleringsteknikk, industriell automasjon,
 *         feilsøking og vedlikehold, smarthus og bygningsautomasjon
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 6.2: Aktuatorer og pådragsorganer
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_6_2: TextbookChapter = {
  id: 'elektro-data-vg1-6-2',
  courseId: 'elektro-data-vg1',
  chapterNumber: '6.2',
  title: 'Aktuatorer og pådragsorganer',
  description: 'Servomotorer, steppermotorer, magnetventiler, pneumatiske aktuatorer og H-bro for motorstyring.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare virkemåten til ulike aktuatorer',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-6-2-intro',
      type: 'text',
      content: `## Aktuatorer og pådragsorganer

I et automatisert system er **aktuatorer** komponentene som utfører fysiske handlinger – de omsetter elektriske styresignaler til bevegelse, kraft eller posisjon. Uten aktuatorer ville et styresystem bare kunne observere, men aldri handle. Aktuatorer er «musklene» i et automatisert system, mens sensorer er «sansene».

I dette kapittelet skal du lære:
- Hvordan servomotorer styres med PWM-signaler
- Hvordan steppermotorer gir presis posisjonering i diskrete steg
- Hva magnetventiler og pneumatiske aktuatorer brukes til
- Hvordan en H-bro styrer retning og hastighet på en DC-motor`,
    },

    // BLOKK 1: Servomotorer
    {
      id: 'elektro-data-vg1-6-2-def-1',
      type: 'definition',
      title: 'Servomotorer',
      content: `En **servomotor** er en motor med innebygd tilbakekobling som styrer vinkelposisjon, hastighet eller dreiemoment.

**Virkemåte:**
- Motoren mottar et **PWM-signal** (Pulse Width Modulation) fra styreenheten
- En innebygd potensiometer-sensor måler motorens faktiske posisjon
- En reguleringskrets sammenligner ønsket og faktisk posisjon, og justerer motoren

**PWM-styring av vinkelposisjon:**
- Pulsbredde 1 ms → 0° (venstre ytterstilling)
- Pulsbredde 1,5 ms → 90° (midtstilling)
- Pulsbredde 2 ms → 180° (høyre ytterstilling)
- Signalperiode: typisk 20 ms (50 Hz)

**Bruksområder:**
- Robotarmer og gripere
- Styreflater i droner og modellfly
- Kameragimbal (stabilisering)
- Ventilstyring i industrianlegg`,
    },

    // BLOKK 2: Steppermotorer
    {
      id: 'elektro-data-vg1-6-2-def-2',
      type: 'definition',
      title: 'Steppermotorer',
      content: `En **steppermotor** roterer i nøyaktige, diskrete steg – typisk 1,8° per steg (200 steg per omdreining).

**Virkemåte:**
- Motoren har flere spolpar (faser) som aktiveres i rekkefølge
- Hver pulsimpuls fra styringen gir nøyaktig ett steg
- Rotasjonsvinkel = antall pulser × stegvinkel
- Ingen tilbakekobling nødvendig for posisjonering (åpen sløyfe)

**Typer steppermotorer:**
- **Unipolar:** Enklere styring, bruker halvparten av spoleviklingene om gangen
- **Bipolar:** Mer dreiemoment, krever H-bro-driver for å veksle strømretning

**Driftsmodi:**
- **Full steg:** Én fase om gangen, grovest posisjonering
- **Halvsteg:** Veksler mellom én og to faser, dobbelt så mange steg
- **Mikrosteg:** Deler hvert steg i mindre inkrementer (1/16, 1/32 steg)

**Bruksområder:**
- 3D-printere (X, Y, Z-akser)
- CNC-maskiner
- Presise posisjoneringsbord
- Teleskopstyring`,
    },
    {
      id: 'elektro-data-vg1-6-2-example-1',
      type: 'example',
      title: 'Beregne rotasjon fra steg',
      problem: 'En steppermotor har stegvinkel 1,8°. Den mottar 500 pulsimpulser. Hvor mange hele omdreininger gjør motoren, og hva er restvinkelen?',
      solution: `**Steg 1:** Total rotasjonsvinkel:
Vinkel = antall pulser × stegvinkel = 500 × 1,8° = 900°

**Steg 2:** Antall hele omdreininger:
900° / 360° = 2,5 omdreininger

**Steg 3:** Hele omdreininger og restvinkel:
2 hele omdreininger (720°)
Restvinkel = 900° − 720° = **180°**

Motoren gjør 2 hele omdreininger og stopper ved 180° (en halv omdreining til).`,
    },
    {
      id: 'elektro-data-vg1-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva bestemmer vinkelposisjonen til en servomotor?',
        options: [
          { id: 'a', text: 'Spenningsnivået på styresignalet', correct: false },
          { id: 'b', text: 'Pulsbredden (duty cycle) på PWM-signalet', correct: true },
          { id: 'c', text: 'Frekvensen på PWM-signalet', correct: false },
          { id: 'd', text: 'Strømstyrken gjennom motoren', correct: false },
        ],
        solution: 'Vinkelposisjonen til en servomotor bestemmes av pulsbredden på PWM-signalet. En pulsbredde på 1 ms gir 0°, 1,5 ms gir 90°, og 2 ms gir 180°. Frekvensen er typisk fast på 50 Hz.',
      },
    },

    // BLOKK 3: Magnetventiler og pneumatikk
    {
      id: 'elektro-data-vg1-6-2-def-3',
      type: 'definition',
      title: 'Magnetventiler og pneumatiske aktuatorer',
      content: `**Magnetventil (solenoidventil):**
En ventil som åpnes eller lukkes ved hjelp av en elektromagnet (solenoid).
- **Normalt lukket (NC):** Ventilen er lukket uten signal, åpner ved strøm
- **Normalt åpen (NO):** Ventilen er åpen uten signal, lukker ved strøm
- Brukes for: vannforsyning, trykkluft, gass, hydraulikk
- Styres med digitalt signal (på/av) fra PLS eller mikrokontroller

**Pneumatiske aktuatorer:**
Bruker trykkluft (4–8 bar) til å skape lineær eller roterende bevegelse.
- **Enkeltvirkende sylinder:** Trykkluft skyver stempelet ut, fjær trekker det tilbake
- **Dobbeltvirkende sylinder:** Trykkluft på begge sider – kan skyve og trekke med kraft
- **Roterende aktuator:** Omdanner trykkluft til rotasjon (typisk 90° eller 180°)

**Fordeler med pneumatikk:**
- Rask responstid
- Enkel og robust konstruksjon
- Egnet for eksplosjonsfarllige miljøer (ingen gnister)
- Stor kraft i kompakt design`,
    },
    {
      id: 'elektro-data-vg1-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom en enkeltvirkende og en dobbeltvirkende pneumatisk sylinder?',
        options: [
          { id: 'a', text: 'Enkeltvirkende bruker olje, dobbeltvirkende bruker luft', correct: false },
          { id: 'b', text: 'Enkeltvirkende har trykkluft på én side og fjærretur, dobbeltvirkende har trykkluft på begge sider', correct: true },
          { id: 'c', text: 'Enkeltvirkende er raskere enn dobbeltvirkende', correct: false },
          { id: 'd', text: 'Dobbeltvirkende kan bare brukes horisontalt', correct: false },
        ],
        solution: 'En enkeltvirkende sylinder bruker trykkluft til å skyve stempelet i én retning, mens en fjær trekker det tilbake. En dobbeltvirkende sylinder har trykkluft på begge sider av stempelet og kan utøve kraft i begge retninger.',
      },
    },

    // BLOKK 4: H-bro
    {
      id: 'elektro-data-vg1-6-2-def-4',
      type: 'definition',
      title: 'H-bro for motorstyring',
      content: `En **H-bro** er en elektronisk krets som lar deg styre både retning og hastighet på en DC-motor.

**Oppbygging:**
Kretsen består av fire brytere (transistorer) arrangert i en H-form:
- S1 og S4 lukket → strøm flyter én vei → motoren roterer forover
- S2 og S3 lukket → strøm flyter motsatt vei → motoren roterer bakover
- S1 og S3 lukket → kortslutning (må unngås!)
- Alle åpne → motoren er frikoblet

**Hastighetsregulering med PWM:**
Ved å slå transistorene av og på raskt (PWM), kan gjennomsnittsspenningen over motoren justeres:
- 100 % duty cycle → full hastighet
- 50 % duty cycle → halv hastighet
- 0 % duty cycle → motor stanset

**Vanlige H-bro-kretser:**
- L298N: Populær drivermodul for hobby og undervisning
- L293D: Enklere variant med innebygde beskyttelsesdioder
- BTS7960: Høystrøms H-bro for sterkere motorer`,
    },
    {
      id: 'elektro-data-vg1-6-2-example-2',
      type: 'example',
      title: 'H-bro med PWM',
      problem: 'Du bruker en H-bro med L298N-modul til å styre en 12 V DC-motor. PWM-signalet har duty cycle 75 %. Hva er gjennomsnittsspenningen over motoren, og hvilken retning roterer den når S1 og S4 er aktive?',
      solution: `**Steg 1:** Gjennomsnittsspenning med PWM:
V_snitt = V_forsyning × duty cycle = 12 V × 0,75 = **9 V**

**Steg 2:** Rotasjonsretning:
Når S1 og S4 er lukket, flyter strømmen fra venstre til høyre gjennom motoren → motoren roterer **forover** (den ene definerte retningen).

Motoren kjører altså forover med en gjennomsnittsspenning på 9 V, som gir ca. 75 % av full hastighet.`,
    },
    {
      id: 'elektro-data-vg1-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor det er viktig å aldri slå på S1 og S3 (eller S2 og S4) samtidig i en H-bro. Hva skjer elektrisk, og hvilke konsekvenser kan det ha?',
        solution: 'Hvis S1 og S3 (begge på samme side av H-broen) er lukket samtidig, oppstår det kortslutning direkte fra positiv til negativ forsyning gjennom transistorene. Dette gir svært høy strøm som kan ødelegge transistorene, overopphete kretsen, og i verste fall forårsake brann. For å forhindre dette brukes «dead time» – en kort forsinkelse mellom å slå av en transistor og slå på den motsatte. Mange H-bro-drivere har innebygd beskyttelse mot dette, kalt «shoot-through protection».',
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-6-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om de viktigste aktuatorene i automatiserte systemer:

- **Servomotorer** styres med PWM-pulsbredde (1–2 ms) for presis vinkelposisjonering
- **Steppermotorer** roterer i diskrete steg (typisk 1,8°/steg) og gir høy presisjon uten tilbakekobling
- **Magnetventiler** åpner/lukker væske- eller gassstrømmer med elektrisk signal (NC eller NO)
- **Pneumatiske aktuatorer** bruker trykkluft til kraftig lineær eller roterende bevegelse
- **H-bro** lar deg styre retning og hastighet på en DC-motor med fire transistorer og PWM`,
    },

    // SAMLEOPPGAVER
    {
      id: 'elektro-data-vg1-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En 3D-printer bruker steppermotorer med stegvinkel 1,8° og mikrosteg på 1/16. Hvor mange mikrosteg trengs for å flytte skrivehodet nøyaktig 3 hele omdreininger?',
        solution: 'Med mikrosteg 1/16 deles hvert fullsteg i 16 deler. Antall fullsteg per omdreining: 360° / 1,8° = 200 steg. Antall mikrosteg per omdreining: 200 × 16 = 3200 mikrosteg. For 3 omdreininger: 3 × 3200 = 9600 mikrosteg. Det trengs 9600 mikrosteg for 3 hele omdreininger.',
      },
    },
    {
      id: 'elektro-data-vg1-6-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken aktuator passer best for å åpne og lukke en vannventil i et automatisk vanningsanlegg?',
        options: [
          { id: 'a', text: 'Steppermotor', correct: false },
          { id: 'b', text: 'DC-motor med H-bro', correct: false },
          { id: 'c', text: 'Magnetventil (solenoidventil)', correct: true },
          { id: 'd', text: 'Pneumatisk sylinder', correct: false },
        ],
        solution: 'En magnetventil er best egnet for enkel åpen/lukket-styring av vannstrøm. Den aktiveres med et digitalt signal, er enkel å styre fra en mikrokontroller, og er designet for å håndtere væskestrøm. Steppermotorer og DC-motorer brukes til rotasjon/posisjonering, og pneumatikk krever trykkluftforsyning.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Servomotor', definition: 'Motor med innebygd tilbakekobling som styrer vinkelposisjon via PWM-signal.' },
    { term: 'Steppermotor', definition: 'Motor som roterer i nøyaktige diskrete steg, typisk 1,8° per steg.' },
    { term: 'PWM', definition: 'Pulse Width Modulation – teknikk der pulsbredden bestemmer styresignalets verdi.' },
    { term: 'Magnetventil', definition: 'Ventil som åpnes eller lukkes av en elektromagnet.' },
    { term: 'Pneumatisk aktuator', definition: 'Aktuator som bruker trykkluft til å skape bevegelse.' },
    { term: 'H-bro', definition: 'Elektronisk krets med fire brytere som styrer retning og hastighet på en DC-motor.' },
  ],
};

// ============================================================================
// Kapittel 6.3: Reguleringsteknikk
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_6_3: TextbookChapter = {
  id: 'elektro-data-vg1-6-3',
  courseId: 'elektro-data-vg1',
  chapterNumber: '6.3',
  title: 'Reguleringsteknikk',
  description: 'Åpen og lukket regulering, tilbakekobling, P-, I-, D- og PID-regulering for prosesstyring.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forklare grunnleggende prinsipper for reguleringsteknikk',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-6-3-intro',
      type: 'text',
      content: `## Reguleringsteknikk

Reguleringsteknikk handler om å styre en prosess slik at en målt verdi (prosessvariabel) holdes så nær et ønsket nivå (settpunkt) som mulig. Tenk på en termostat som holder temperaturen stabil – den måler romtemperaturen, sammenligner med ønsket temperatur, og slår varmen av eller på. Det er regulering i sin enkleste form.

I industrien brukes avanserte reguleringsmetoder for å styre temperatur, trykk, nivå, hastighet og mange andre størrelser med høy presisjon.

I dette kapittelet skal du lære:
- Forskjellen mellom åpen og lukket regulering
- Begrepene settpunkt, prosessvariabel og reguleringsavvik
- Hva P-, I- og D-regulering er og hvordan de fungerer
- Hvordan PID-regulering kombinerer alle tre for optimal styring`,
    },

    // BLOKK 1: Åpen vs lukket regulering
    {
      id: 'elektro-data-vg1-6-3-def-1',
      type: 'definition',
      title: 'Åpen og lukket regulering',
      content: `**Åpen regulering (styring):**
- Styresignalet er forhåndsbestemt – systemet sjekker ikke resultatet
- Eksempel: En brødrister med timer – den varmer i satt tid uansett om brødet er ferdig
- Enkel å implementere, men klarer ikke å kompensere for forstyrrelser

**Lukket regulering (tilbakekoblet regulering):**
- Systemet måler resultatet og justerer pådrag basert på målingen
- En **tilbakekoblingssløyfe** sammenligner ønsket verdi med faktisk verdi
- Eksempel: Romtermostat – måler temperaturen og justerer varmen kontinuerlig

**Nøkkelbegreper:**
- **Settpunkt (SP):** Ønsket verdi (f.eks. 22 °C)
- **Prosessvariabel (PV):** Målt verdi (f.eks. faktisk romtemperatur)
- **Reguleringsavvik (e):** Differansen mellom settpunkt og prosessvariabel: **e = SP − PV**
- **Pådrag (u):** Styresignalet som sendes til aktuatoren (f.eks. varmeeffekt)
- **Forstyrrelse:** Eksterne påvirkninger som påvirker prosessen (f.eks. åpent vindu)`,
    },
    {
      id: 'elektro-data-vg1-6-3-example-1',
      type: 'example',
      title: 'Reguleringsavvik i et varmesystem',
      problem: 'Et rom skal holdes på 22 °C (settpunkt). Temperatursensoren viser 19 °C. Hva er reguleringsavviket? Hva bør regulatoren gjøre?',
      solution: `**Steg 1:** Beregn reguleringsavviket:
e = SP − PV = 22 °C − 19 °C = **3 °C**

**Steg 2:** Regulatorens respons:
Avviket er positivt (3 °C), som betyr at rommet er kaldere enn ønsket. Regulatoren bør øke pådraget – altså gi mer varme til ovnen for å heve temperaturen mot settpunktet.

Når temperaturen stiger mot 22 °C, blir avviket mindre, og regulatoren reduserer pådraget gradvis.`,
    },
    {
      id: 'elektro-data-vg1-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken type regulering bruker en brødrister med fast tid?',
        options: [
          { id: 'a', text: 'Lukket regulering med tilbakekobling', correct: false },
          { id: 'b', text: 'PID-regulering', correct: false },
          { id: 'c', text: 'Åpen regulering (styring) uten tilbakekobling', correct: true },
          { id: 'd', text: 'Proporsjonal regulering', correct: false },
        ],
        solution: 'En brødrister med fast tid er et eksempel på åpen regulering (styring). Den slår på varmen i en forhåndsbestemt tid uten å måle om brødet faktisk er ferdig. Det er ingen tilbakekobling fra prosessen.',
      },
    },

    // BLOKK 2: P-, I- og D-regulering
    {
      id: 'elektro-data-vg1-6-3-def-2',
      type: 'definition',
      title: 'P-regulering (proporsjonal)',
      content: `**P-regulering** gir et pådrag som er proporsjonalt med reguleringsavviket.

**Formel:** u = Kp × e

- **Kp** = proporsjonal forsterkning (regulatorparameter)
- **e** = reguleringsavvik (SP − PV)

**Egenskaper:**
- Stor avvik → stort pådrag → rask korreksjon
- Liten avvik → lite pådrag → langsom korreksjon
- **Stasjonært avvik:** P-regulering når aldri helt til settpunktet alene. Det gjenstår alltid et lite avvik fordi pådraget blir for lite til å kompensere fullt ut.

**Eksempel:** Hvis Kp = 5 og avviket er 2 °C:
u = 5 × 2 = 10 (enheter pådrag)

Høy Kp gir rask respons, men kan gi svingninger (oscillasjoner) hvis den er for høy.`,
    },
    {
      id: 'elektro-data-vg1-6-3-def-3',
      type: 'definition',
      title: 'I-regulering (integral) og D-regulering (derivat)',
      content: `**I-regulering (integral):**
Gir pådrag basert på **summen av avviket over tid** (integralet).

- Fjerner stasjonært avvik – selv et lite vedvarende avvik bygger opp I-leddet over tid
- Kan gi treg respons og oversving hvis brukt alene
- Jo lenger avviket varer, jo større blir I-bidraget

**D-regulering (derivat):**
Gir pådrag basert på **endringstakten** til avviket (derivert).

- Reagerer på hvor raskt avviket endres, ikke størrelsen
- Virker som en «bremse» – demper svingninger og oversving
- Gir ingen respons ved konstant avvik
- Kan forsterke støy i målesignalet

**Huskeregel:**
- **P** ser på nåtiden: «Hvor stort er avviket nå?»
- **I** ser på fortiden: «Hvor lenge har avviket vart?»
- **D** ser på fremtiden: «Hvor raskt endrer avviket seg?»`,
    },
    {
      id: 'elektro-data-vg1-6-3-example-2',
      type: 'example',
      title: 'PID-regulering av vanntemperatur',
      problem: 'En PID-regulator styrer temperaturen i en tank. Settpunktet er 60 °C. Forklar hva som skjer når noen tapper kaldt vann og temperaturen plutselig faller til 50 °C.',
      solution: `**P-leddet** reagerer umiddelbart:
Avviket e = 60 − 50 = 10 °C. P-leddet gir et kraftig pådrag proporsjonalt med avviket for å øke varmen raskt.

**D-leddet** reagerer på den raske endringen:
Temperaturen falt raskt, noe som gir et stort negativt derivat. D-leddet gir et ekstra stort pådrag for å kompensere for den brå endringen, utover det P-leddet gir.

**I-leddet** bygger opp over tid:
Så lenge temperaturen er under 60 °C, akkumulerer I-leddet. Det sørger for at de siste gradene mot settpunktet også nås, og fjerner det stasjonære avviket.

**Resultat:** Temperaturen stiger raskt tilbake mot 60 °C med minimal oversving takket være D-leddets dempende effekt.`,
    },
    {
      id: 'elektro-data-vg1-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er hovedproblemet med å bruke ren P-regulering alene?',
        options: [
          { id: 'a', text: 'Den reagerer for raskt på forstyrrelser', correct: false },
          { id: 'b', text: 'Den gir alltid et stasjonært avvik – prosessvariabelen når aldri helt settpunktet', correct: true },
          { id: 'c', text: 'Den kan bare brukes for temperaturstyring', correct: false },
          { id: 'd', text: 'Den krever alltid en D-regulator i tillegg', correct: false },
        ],
        solution: 'P-regulering gir et pådrag som er proporsjonalt med avviket. Når avviket er lite, blir pådraget så lite at det ikke er nok til å nå settpunktet. Det gjenstår alltid et stasjonært avvik. I-leddet trengs for å fjerne dette avviket.',
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-6-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært grunnleggende reguleringsteknikk:

- **Åpen regulering** har ingen tilbakekobling – styresignalet er forhåndsbestemt
- **Lukket regulering** bruker tilbakekobling for å korrigere avvik kontinuerlig
- **Reguleringsavvik** (e) = settpunkt (SP) − prosessvariabel (PV)
- **P-regulering** gir pådrag proporsjonalt med avviket, men har stasjonært avvik
- **I-regulering** fjerner stasjonært avvik ved å summere avviket over tid
- **D-regulering** demper svingninger ved å reagere på endringstakten
- **PID-regulering** kombinerer alle tre for rask, presis og stabil styring`,
    },

    // SAMLEOPPGAVER
    {
      id: 'elektro-data-vg1-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tegn et blokkskjema for en lukket reguleringssløyfe for temperaturstyring av et rom. Inkluder: settpunkt, regulator, pådragsorgan (ovn), prosess (rommet), sensor (termometer) og tilbakekoblingsbane. Forklar med egne ord hva som skjer i hvert blokk.',
        solution: 'Blokkskjemaet skal ha følgende elementer i rekkefølge: Settpunkt (22 °C) → Sammenligner (beregner avviket e = SP − PV) → Regulator (beregner pådrag basert på avviket) → Pådragsorgan/ovn (varmer rommet med gitt effekt) → Prosess/rommet (temperaturen endrer seg) → Sensor/termometer (måler faktisk temperatur PV) → Tilbakekoblingsbane tilbake til sammenligeren. Sammenligeren trekker den målte temperaturen fra settpunktet. Hvis avviket er positivt (for kaldt), øker regulatoren varmen. Hvis avviket er negativt (for varmt), reduseres varmen.',
      },
    },
    {
      id: 'elektro-data-vg1-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket PID-ledd demper svingninger og oversving i et reguleringssystem?',
        options: [
          { id: 'a', text: 'P-leddet (proporsjonalt)', correct: false },
          { id: 'b', text: 'I-leddet (integral)', correct: false },
          { id: 'c', text: 'D-leddet (derivat)', correct: true },
          { id: 'd', text: 'Alle tre leddene bidrar like mye', correct: false },
        ],
        solution: 'D-leddet (derivat) reagerer på hvor raskt avviket endres. Når prosessvariabelen nærmer seg settpunktet raskt, «bremser» D-leddet pådraget for å forhindre at systemet skyter over målet (oversving). D-leddet virker som en dempning.',
      },
    },
    {
      id: 'elektro-data-vg1-6-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En P-regulator med Kp = 4 styrer vannivået i en tank. Settpunktet er 80 cm. Sensoren måler 65 cm. Beregn reguleringsavviket og pådraget. Forklar deretter hva som ville skjedd om vi la til I-regulering.',
        solution: 'Reguleringsavvik: e = SP − PV = 80 − 65 = 15 cm. Pådrag: u = Kp × e = 4 × 15 = 60 (enheter). P-regulatoren vil øke vannivået, men stopper med et stasjonært avvik fordi pådraget minker etter hvert som nivået nærmer seg 80 cm. Med I-regulering i tillegg ville I-leddet summere opp avviket over tid. Selv om avviket blir lite (f.eks. 2 cm fra settpunktet), vil I-leddet fortsette å øke pådraget sakte men sikkert til avviket er nøyaktig null. I-regulering fjerner altså det stasjonære avviket som P-regulering alene ikke klarer.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Settpunkt (SP)', definition: 'Ønsket verdi i et reguleringssystem.' },
    { term: 'Prosessvariabel (PV)', definition: 'Målt verdi fra prosessen.' },
    { term: 'Reguleringsavvik', definition: 'Differansen mellom settpunkt og prosessvariabel (e = SP − PV).' },
    { term: 'P-regulering', definition: 'Pådrag proporsjonalt med avviket. Gir rask respons, men stasjonært avvik.' },
    { term: 'I-regulering', definition: 'Pådrag basert på summen av avvik over tid. Fjerner stasjonært avvik.' },
    { term: 'D-regulering', definition: 'Pådrag basert på endringstakten til avviket. Demper svingninger.' },
    { term: 'PID-regulering', definition: 'Kombinerer P, I og D for optimal styring med rask respons og presisjon.' },
  ],
};

// ============================================================================
// Kapittel 6.5: Industriell automasjon
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_6_5: TextbookChapter = {
  id: 'elektro-data-vg1-6-5',
  courseId: 'elektro-data-vg1',
  chapterNumber: '6.5',
  title: 'Industriell automasjon',
  description: 'Produksjonsautomasjon, industriroboter, prosessindustri, SCADA-systemer og HMI-operatørpaneler.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare oppbygning og funksjon av automatiserte systemer i industrien',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-6-5-intro',
      type: 'text',
      content: `## Industriell automasjon

Industriell automasjon har revolusjonert produksjonen i hele verden. Fra bilfabrikker med hundrevis av roboter til oljeplattformer med avanserte kontrollsystemer – automasjon øker effektiviteten, kvaliteten og sikkerheten. Norge er et foregangsland innen prosessautomasjon, spesielt i olje- og gassindustrien, akvakultur og metallproduksjon.

I dette kapittelet skal du lære:
- Hvordan automatisert produksjon fungerer med transportbånd og roboter
- Ulike typer industriroboter og deres bruksområder
- Forskjellen mellom prosessindustri og diskret produksjon
- Hva SCADA-systemer og HMI-paneler gjør`,
    },

    // BLOKK 1: Produksjonsautomasjon
    {
      id: 'elektro-data-vg1-6-5-def-1',
      type: 'definition',
      title: 'Produksjonsautomasjon',
      content: `**Produksjonsautomasjon** betyr at maskiner og styresystemer utfører produksjonsoppgaver med lite eller ingen manuell innsats.

**Hovedkomponenter i en automatisert produksjonslinje:**
- **Transportbånd:** Frakter emner mellom arbeidsstasjoner
- **Roboter:** Utfører sveising, montering, maling, pakking
- **PLS (Programmerbar Logisk Styring):** Hjernen i systemet – styrer sekvenser og logikk
- **Sensorer:** Detekterer posisjoner, nivåer, temperaturer og kvalitetsavvik
- **Aktuatorer:** Utfører fysiske handlinger basert på PLS-kommandoer

**Fordeler med produksjonsautomasjon:**
- Økt produksjonshastighet og kapasitet
- Jevnere kvalitet (mindre menneskelig variasjon)
- Redusert risiko for arbeidsulykker
- Lavere driftskostnader over tid
- Kan kjøre 24/7 uten pauser

**Ulemper:**
- Høy investeringskostnad
- Krever kompetent vedlikeholdspersonell
- Mindre fleksibelt ved produktendringer
- Kan føre til tap av arbeidsplasser`,
    },
    {
      id: 'elektro-data-vg1-6-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er PLS (Programmerbar Logisk Styring) i et automatisert system?',
        options: [
          { id: 'a', text: 'En type sensor som måler temperatur', correct: false },
          { id: 'b', text: 'Styreenheten som kontrollerer sekvenser og logikk i systemet', correct: true },
          { id: 'c', text: 'En type industrirobot for sveising', correct: false },
          { id: 'd', text: 'Et transportbånd med variabel hastighet', correct: false },
        ],
        solution: 'PLS (Programmerbar Logisk Styring) er «hjernen» i et automatisert system. Den leser inn signaler fra sensorer, behandler dem etter et programmert logikkprogram, og sender styresignaler til aktuatorer. PLS-en erstatter tradisjonelle relékretser med programmerbar logikk.',
      },
    },

    // BLOKK 2: Industriroboter
    {
      id: 'elektro-data-vg1-6-5-def-2',
      type: 'definition',
      title: 'Industriroboter',
      content: `En **industrirobot** er en programmerbar, flerakse maskin som kan utføre varierte oppgaver automatisk.

**Vanlige robottyper:**
- **Artikulert robot (leddrobot):** 4–7 rotasjonsledd, mest fleksibel, ligner en menneskelig arm. Brukes til sveising, maling, montering.
- **SCARA-robot:** 2 rotasjonsledd i horisontalplanet + vertikal akse. Rask, presis, egnet for plukk-og-plasser og montering av elektronikk.
- **Deltarobot:** Tre parallelle armer festet i taket. Ekstremt rask, brukes til sortering og pakking av lett gods.
- **Kartesisk robot (portalrobot):** Beveger seg langs X, Y, Z-akser. Enkel styring, brukes til CNC-maskiner og 3D-printere.
- **Cobot (samarbeidsrobot):** Designet for å jobbe trygt side om side med mennesker. Lavere kraft og hastighet, innebygde kraftsensorer.

**Spesifikasjoner:**
- **Rekkevidde:** Hvor langt roboten når (typisk 0,5–3 m)
- **Nyttelast:** Hvor mye den kan løfte (0,5 kg til over 1000 kg)
- **Repeterbarhet:** Hvor nøyaktig den gjentar samme bevegelse (typisk ±0,02–0,1 mm)
- **Frihetsgrader (DOF):** Antall uavhengige bevegelsesretninger`,
    },
    {
      id: 'elektro-data-vg1-6-5-example-1',
      type: 'example',
      title: 'Velge riktig robottype',
      problem: 'En sjokoladefabrikk trenger en robot til å sortere og plassere sjokolader i esker med høy hastighet (120 stykk per minutt). Sjokoladene veier ca. 20 gram. Hvilken robottype egner seg best, og hvorfor?',
      solution: `**Best egnet: Deltarobot**

**Begrunnelse:**
- Deltaroboten er den raskeste robottypen for plukk-og-plasser-oppgaver
- Den er montert i taket og har tre parallelle armer som gir høy hastighet og presisjon
- Sjokoladene er lette (20 g), godt innenfor deltarobotens nyttelast (typisk 0,5–6 kg)
- 120 stk/min = 2 stk/sekund, noe som krever syklustider under 0,5 sekunder – deltaroboter kan oppnå dette
- Brukes mye i matindustri for sortering, pakking og plukking

**Alternativer som er mindre egnet:**
- SCARA: Rask, men ikke like rask som delta for denne typen oppgave
- Artikulert robot: For treg for 120 stk/min
- Kartesisk: For treg og mindre fleksibel i bevegelsesmønster`,
    },
    {
      id: 'elektro-data-vg1-6-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom prosessindustri og diskret produksjon. Gi to eksempler på hver type.',
        solution: 'Prosessindustri: Produserer varer gjennom kontinuerlige eller batchvise kjemiske/fysiske prosesser. Produktet kan vanligvis ikke demonteres tilbake til råvarer. Eksempler: (1) Oljeraffineri – råolje omdannes til bensin, diesel og andre produkter gjennom destillasjon. (2) Aluminiumsverk – bauksitt smeltes til aluminium i en kontinuerlig prosess. Diskret produksjon: Produserer tellbare, identifiserbare enkeltprodukter gjennom montering av komponenter. Produktet kan demonteres. Eksempler: (1) Bilfabrikk – biler monteres fra tusenvis av deler på en produksjonslinje. (2) Elektronikkfabrikk – kretskort og telefoner monteres fra komponenter.',
      },
    },

    // BLOKK 3: SCADA og HMI
    {
      id: 'elektro-data-vg1-6-5-def-3',
      type: 'definition',
      title: 'SCADA-systemer og HMI',
      content: `**SCADA (Supervisory Control And Data Acquisition):**
Et overordnet datasystem for overvåkning og styring av industrielle prosesser.

**Oppbygning:**
- **Feltinstrumenter:** Sensorer og aktuatorer ute i anlegget
- **PLS/RTU:** Lokale styreenheter som leser sensorer og styrer aktuatorer
- **Kommunikasjonsnettverk:** Binder sammen PLS-er med SCADA-serveren (Modbus, Profinet, Ethernet)
- **SCADA-server:** Samler inn data, lagrer historikk, kjører alarmer
- **Operatørstasjon:** PC med HMI-programvare der operatøren overvåker og styrer

**Funksjoner:**
- Sanntids visualisering av prosessen
- Alarmhåndtering (varsler ved avvik)
- Trendlogging (historiske data)
- Fjernstyring av ventiler, pumper og motorer
- Rapportgenerering

**HMI (Human-Machine Interface):**
Et operatørpanel eller skjerm som gir operatøren visuell oversikt over prosessen.
- Viser prosessbilder med dynamiske verdier
- Knapper for manuell styring
- Alarmvisning og kvittering
- Kan være dedikert berøringsskjerm (panelmontert) eller PC-basert`,
    },
    {
      id: 'elektro-data-vg1-6-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er hovedoppgaven til et SCADA-system?',
        options: [
          { id: 'a', text: 'Å programmere PLS-er med ny logikk', correct: false },
          { id: 'b', text: 'Å overvåke, samle inn data fra og gi fjernstyring av industrielle prosesser', correct: true },
          { id: 'c', text: 'Å designe nye robotprogrammer', correct: false },
          { id: 'd', text: 'Å erstatte alle PLS-er med en sentral datamaskin', correct: false },
        ],
        solution: 'SCADA (Supervisory Control And Data Acquisition) er et overordnet system for overvåkning og styring. Det samler inn data fra PLS-er og sensorer, viser dem til operatøren i sanntid, håndterer alarmer, logger historikk og gir mulighet for fjernstyring. SCADA erstatter ikke PLS-ene, men kommuniserer med dem.',
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-6-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om industriell automasjon:

- **Produksjonsautomasjon** bruker transportbånd, roboter og PLS for effektiv produksjon
- **Industriroboter** finnes i mange typer: artikulert, SCARA, delta, kartesisk og cobot
- **Prosessindustri** (olje, aluminium) vs. **diskret produksjon** (biler, elektronikk)
- **SCADA** overvåker og styrer industrielle anlegg via datainnsamling og fjerntilgang
- **HMI** gir operatøren visuell oversikt og styringsmuligheter gjennom berøringsskjermer`,
    },

    // SAMLEOPPGAVER
    {
      id: 'elektro-data-vg1-6-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En norsk lakseslakteri skal automatiseres. Beskriv hvilke typer sensorer, aktuatorer og roboter du ville brukt, og forklar hvordan et SCADA-system kunne overvåke hele prosessen.',
        solution: 'Sensorer: Vekt/vektsensorer for å sortere fisk etter størrelse, kameraer med bildegjenkjenning for kvalitetskontroll, temperatursensorer for å overvåke kjølekjeden, nivåsensorer for vanntanker. Aktuatorer: Transportbånd med variabel hastighet, pneumatiske skyveporter for sortering, vakuumpumper for pakking. Roboter: Deltaroboter for rask sortering og plassering, artikulerte roboter for pakking i kasser, SCARA-robot for etikettering. SCADA: Samler data fra alle PLS-er i anlegget, viser prosessbilder med produksjonstall, temperaturer og maskinstatus. Alarmering ved kjølebruddd, maskinsvikt eller kvalitetsavvik. Historisk logging av produksjonsvolum, temperaturlogg for mattilsynet, og rapportering for sporbarhet.',
      },
    },
    {
      id: 'elektro-data-vg1-6-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-5-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en cobot?',
        options: [
          { id: 'a', text: 'En robot som kun brukes til sveising', correct: false },
          { id: 'b', text: 'En samarbeidsrobot designet for å jobbe trygt side om side med mennesker', correct: true },
          { id: 'c', text: 'En robot som kontrollerer andre roboter', correct: false },
          { id: 'd', text: 'En robot som drives av trykkluft', correct: false },
        ],
        solution: 'En cobot (samarbeidsrobot) er designet for å jobbe trygt sammen med mennesker uten beskyttelsesgjerder. Den har innebygde kraftsensorer, lavere hastighet og begrenset kraft for å unngå skade. Coboten stopper automatisk ved kontakt med en person.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'PLS', definition: 'Programmerbar Logisk Styring – styreenheten som kontrollerer sekvenser og logikk.' },
    { term: 'Artikulert robot', definition: 'Flerleddet robot som ligner en arm, mest fleksible typen.' },
    { term: 'SCARA-robot', definition: 'Robot med horisontale rotasjonsledd, rask og presis for plukk-og-plasser.' },
    { term: 'Deltarobot', definition: 'Parallellkinematisk robot montert i tak, ekstremt rask for sortering.' },
    { term: 'Cobot', definition: 'Samarbeidsrobot som kan jobbe trygt side om side med mennesker.' },
    { term: 'SCADA', definition: 'Supervisory Control And Data Acquisition – overvåknings- og styresystem for industri.' },
    { term: 'HMI', definition: 'Human-Machine Interface – operatørpanel for visuell oversikt og styring.' },
  ],
};

// ============================================================================
// Kapittel 6.6: Feilsøking og systematisk vedlikehold
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_6_6: TextbookChapter = {
  id: 'elektro-data-vg1-6-6',
  courseId: 'elektro-data-vg1',
  chapterNumber: '6.6',
  title: 'Feilsøking og systematisk vedlikehold',
  description: 'Feilsøkingsmetodikk, halveringsmetoden, multimeterbruk, signalsporing og forebyggende vedlikehold.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utføre systematisk feilsøking i elektriske anlegg og automatiserte systemer',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-6-6-intro',
      type: 'text',
      content: `## Feilsøking og systematisk vedlikehold

Feil i elektriske anlegg og automatiserte systemer er uunngåelig. Det som skiller en dyktig fagperson fra en nybegynner, er evnen til å finne feilen raskt og systematisk – i stedet for å gjette tilfeldig. Systematisk feilsøking sparer tid, reduserer nedetid og forhindrer at man bytter fungerende komponenter.

Vedlikehold er like viktig: det er bedre å forebygge feil enn å reparere dem. Et godt vedlikeholdsprogram øker levetiden til utstyr og reduserer uplanlagt stans.

I dette kapittelet skal du lære:
- Systematisk feilsøkingsmetodikk med halveringsmetoden
- Hvordan du bruker multimeter for å diagnostisere feil
- Signalsporing i kretser fra inngang til utgang
- Forskjellen mellom forebyggende og korrigerende vedlikehold`,
    },

    // BLOKK 1: Feilsøkingsmetodikk
    {
      id: 'elektro-data-vg1-6-6-def-1',
      type: 'definition',
      title: 'Systematisk feilsøking',
      content: `**Grunnleggende feilsøkingsprosess:**

**1. Symptombeskrivelse:**
- Hva virker ikke? Hva er observert?
- Når oppsto feilen? Er det et mønster?
- Har noe blitt endret nylig?

**2. Visuell inspeksjon:**
- Se etter: løse kabler, brent lukt, skadede komponenter, utløste sikringer
- Sjekk indikatorlamper og feilmeldinger på utstyr/HMI
- Kontroller at alle koblinger sitter fast

**3. Halveringsmetoden:**
- Del systemet i to halvdeler
- Test i midten – er signalet korrekt der?
- Hvis ja: feilen er i siste halvdel. Hvis nei: feilen er i første halvdel
- Del den feilbærende halvdelen i to igjen, og gjenta
- Reduserer antall tester drastisk (logaritmisk)

**4. Måling og testing:**
- Bruk multimeter, oscilloskop eller andre instrumenter
- Mål spenning, strøm, motstand og kontinuitet
- Sammenlign målte verdier med forventede verdier

**5. Isolering og reparasjon:**
- Isoler den defekte komponenten
- Bytt eller reparer
- Test at systemet fungerer etter reparasjon`,
    },
    {
      id: 'elektro-data-vg1-6-6-example-1',
      type: 'example',
      title: 'Halveringsmetoden i praksis',
      problem: 'Et automatisert transportbånd med 8 seksjoner (A–H) har stoppet. PLS-en sender styresignal, men båndet beveger seg ikke. Bruk halveringsmetoden til å finne feilen.',
      solution: `**Steg 1:** Del systemet i to – test mellom seksjon D og E.
Mål om styresignalet kommer frem til seksjon D.
→ Resultat: Signal er ok ved D.

**Steg 2:** Feilen er i seksjon E–H. Del denne halvdelen – test mellom F og G.
→ Resultat: Signal mangler ved G.

**Steg 3:** Feilen er i seksjon E–F. Test ved E.
→ Resultat: Signal er ok ved E, men mangler ved F.

**Steg 4:** Feilen er i seksjon F. Undersøk kabelforbindelse og komponenter i seksjon F.
→ Resultat: Løs kabelsko på motordriver i seksjon F.

Med halveringsmetoden fant vi feilen på **3 tester** i stedet for å sjekke alle 8 seksjoner (opptil 8 tester med lineær søking).`,
    },
    {
      id: 'elektro-data-vg1-6-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er det første steget i systematisk feilsøking?',
        options: [
          { id: 'a', text: 'Bytte alle mistenkte komponenter', correct: false },
          { id: 'b', text: 'Symptombeskrivelse – hva virker ikke, og når oppsto feilen?', correct: true },
          { id: 'c', text: 'Måle spenning i hele kretsen', correct: false },
          { id: 'd', text: 'Slå av og på strømmen for å se om feilen forsvinner', correct: false },
        ],
        solution: 'Det første steget er alltid å beskrive symptomet grundig: Hva virker ikke? Når skjedde det? Har noe blitt endret? Dette gir viktige ledetråder som smalner inn mulige feilkilder før du begynner å måle.',
      },
    },

    // BLOKK 2: Multimeterbruk
    {
      id: 'elektro-data-vg1-6-6-def-2',
      type: 'definition',
      title: 'Multimeter – det viktigste feilsøkingsverktøyet',
      content: `Et **multimeter** kan måle spenning, strøm, motstand og kontinuitet – de fire grunnleggende målingene for feilsøking.

**Spenningsmåling (V):**
- Kobles **parallelt** over komponenten/punktet du vil måle
- Brukes for å sjekke om spenning er til stede (forsyningsspenning, signalnivåer)
- DC for batterier og elektronikk, AC for nettspenning
- Forventet verdi: 230 V AC i stikkontakt, 24 V DC for PLS I/O, 5 V/3,3 V for mikrokontrollere

**Strømmåling (A):**
- Kobles **i serie** – kretsen må brytes og multimeteret settes inn i strømveien
- Brukes for å sjekke om forventet strøm flyter
- OBS: Feil innkobling (parallelt) kan ødelegge multimeteret

**Motstandsmåling (Ω):**
- Kobles over komponenten **uten spenning** (kretsen må være frakoblet)
- Brukes for å sjekke motstandsverdier, påvise kortslutning (0 Ω) eller brudd (∞ Ω)

**Kontinuitetstest (pip-test):**
- En hurtigtest for å sjekke om en leder er hel
- Multimeteret piper hvis motstanden er under ca. 30 Ω
- Perfekt for å sjekke kabler, sikringer og koblingspunkter`,
    },
    {
      id: 'elektro-data-vg1-6-6-example-2',
      type: 'example',
      title: 'Feilsøke en lampe som ikke lyser',
      problem: 'En lampe i et automatisert belysningssystem lyser ikke. PLS-utgangen skal gi 24 V DC til et relé som styrer lampen. Beskriv en systematisk feilsøking med multimeter.',
      solution: `**Steg 1:** Visuell inspeksjon – sjekk at lampen ikke er åpenbart ødelagt (brent filament, løs kontakt).

**Steg 2:** Mål spenning på PLS-utgangen:
- Sett multimeter på DC volt, mål mellom PLS-utgang og 0 V
- Forventet: 24 V når utgangen er aktiv
- Resultat: 24 V → PLS er ok. Feilen er videre i kretsen.

**Steg 3:** Mål spenning over reléspolen:
- Forventet: 24 V
- Resultat: 0 V → Signal kommer ikke frem. Sjekk kabelen mellom PLS og relé.

**Steg 4:** Kontinuitetstest på kabelen (slå av strømmen først):
- Resultat: Ingen kontinuitet (ingen pip) → Kabelbrudd funnet.

**Konklusjon:** Kabelen mellom PLS-utgang og relé er brutt. Bytt eller reparer kabelen.`,
    },
    {
      id: 'elektro-data-vg1-6-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-6-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvordan kobles et multimeter for å måle strøm gjennom en komponent?',
        options: [
          { id: 'a', text: 'Parallelt over komponenten', correct: false },
          { id: 'b', text: 'I serie – kretsen brytes og multimeteret settes inn i strømveien', correct: true },
          { id: 'c', text: 'Det kobles bare til den ene siden av komponenten', correct: false },
          { id: 'd', text: 'Det spiller ingen rolle hvordan det kobles', correct: false },
        ],
        solution: 'For strømmåling må multimeteret kobles i serie med komponenten. Kretsen brytes på ett punkt, og multimeteret settes inn slik at all strøm flyter gjennom det. Kobles det parallelt (som ved spenningsmåling), kan det oppstå kortslutning som ødelegger multimeteret.',
      },
    },

    // BLOKK 3: Signalsporing og vedlikehold
    {
      id: 'elektro-data-vg1-6-6-def-3',
      type: 'definition',
      title: 'Signalsporing og vedlikeholdsstrategier',
      content: `**Signalsporing:**
En metode der du følger signalet gjennom kretsen fra inngang til utgang for å finne hvor det forsvinner eller forvrenges.

**Fremgangsmåte:**
1. Start ved signalkilden (sensor, PLS-utgang, strømforsyning)
2. Mål signalet ved hvert koblingspunkt nedstrøms
3. Når signalet plutselig mangler eller er feil mellom to punkter, er feilen lokalisert
4. Undersøk komponenter og kabler i dette segmentet

**Forebyggende vedlikehold:**
- Planlagte inspeksjoner og kontroller etter faste intervaller
- Bytte slitedeler før de svikter (filtre, remmer, lagre)
- Termografering for å oppdage varme punkter i elektriske koblinger
- Vibrasjonsanalyse på motorer og lagre
- Rengjøring av ventilasjonsåpninger og kjøleelementer

**Korrigerende vedlikehold:**
- Reparasjon eller utbytting etter at feil har oppstått
- Uplanlagt og ofte dyrere enn forebyggende vedlikehold
- Kan føre til produksjonsstans og følgeskader

**Vedlikeholdslogg:**
Alle hendelser bør dokumenteres: dato, feilbeskrivelse, årsak, utført tiltak og hvem som utførte det. Dette gir historikk for å oppdage gjentakende feil.`,
    },
    {
      id: 'elektro-data-vg1-6-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom forebyggende og korrigerende vedlikehold. Gi to eksempler på forebyggende vedlikehold og forklar hvorfor det er mer kostnadseffektivt i lengden.',
        solution: 'Forebyggende vedlikehold: Planlagte tiltak som utføres for å forhindre feil før de oppstår. Eksempler: (1) Bytte filter i ventilasjonsanlegg hver 3. måned for å sikre luftkvalitet og hindre overoppheting. (2) Smøre lagre i motorer hver 6. måned for å forhindre slitasje og havari. Korrigerende vedlikehold: Reparasjon som utføres etter at en feil allerede har oppstått. Forebyggende vedlikehold er mer kostnadseffektivt fordi: Uplanlagt stans kan koste svært mye i tapt produksjon. En ødelagt motor koster mer å bytte enn å smøre regelmessig. Følgeskader kan gjøre reparasjonen mye dyrere (f.eks. ødelagt lager som ødelegger akselen). Planlagt vedlikehold kan utføres på gunstige tidspunkter med tilgjengelige deler.',
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-6-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om feilsøking og vedlikehold:

- **Systematisk feilsøking** følger stegene: symptom → visuell inspeksjon → måling → isolering → reparasjon
- **Halveringsmetoden** halverer søkeområdet for hver test – effektivt for systemer med mange komponenter
- **Multimeteret** måler spenning (parallelt), strøm (serie), motstand (uten spenning) og kontinuitet
- **Signalsporing** følger signalet gjennom kretsen til det forsvinner
- **Forebyggende vedlikehold** er planlagt og forhindrer feil – billigere enn å reparere etter stans
- **Vedlikeholdslogg** dokumenterer alle hendelser for å oppdage mønstre`,
    },

    // SAMLEOPPGAVER
    {
      id: 'elektro-data-vg1-6-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-6-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor skal man alltid slå av spenningen før man måler motstand med multimeter?',
        options: [
          { id: 'a', text: 'Fordi multimeteret bruker egen spenningskilde for motstandsmåling', correct: true },
          { id: 'b', text: 'Fordi det er enklere å lese av verdien', correct: false },
          { id: 'c', text: 'Det er egentlig ikke nødvendig å slå av spenningen', correct: false },
          { id: 'd', text: 'Fordi motstanden endrer seg med temperaturen', correct: false },
        ],
        solution: 'Ved motstandsmåling sender multimeteret en liten kjent strøm gjennom komponenten og beregner motstanden. Hvis det allerede er spenning i kretsen, vil denne forstyrre målingen og gi feil resultat. I tillegg kan spenningen skade multimeteret. Derfor må kretsen alltid være spenningsløs ved motstandsmåling.',
      },
    },
    {
      id: 'elektro-data-vg1-6-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et automatisert pakkemaskin-system har 12 stasjoner i serie (stasjon 1–12). Produktet stopper opp ved stasjon 7, men sensoren ved stasjon 7 viser at den fungerer normalt. Bruk halveringsmetoden og forklar steg for steg hvordan du ville funnet feilen.',
        solution: 'Steg 1: Problemet meldes ved stasjon 7, men sensoren der er ok. Det betyr at feilen kan ligge i kommunikasjonen mellom stasjonene, aktuatoren ved stasjon 7, eller styresignalet fra PLS. Steg 2: Sjekk om PLS sender signal til stasjon 7s aktuator (skyvearm/transportmekanisme). Mål 24 V DC på PLS-utgangen for stasjon 7. Steg 3: Hvis PLS-utgangen er ok, følg signalet mot aktuatoren. Mål halvveis – ved reléet eller motordriveren. Steg 4: Hvis spenning er ok ved driveren, sjekk aktuatoren direkte. Steg 5: Hvis spenning mangler ved driveren, sjekk kabelen mellom PLS og driver. Bruk kontinuitetstest. Gjennom halveringsmetoden smalner vi inn feilområdet til enten: kabelen mellom PLS og aktuator, reléet/driveren, eller selve aktuatoren (ikke sensoren som allerede er verifisert ok).',
      },
    },
    {
      id: 'elektro-data-vg1-6-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-6-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva brukes kontinuitetstesten (pip-testen) på multimeteret til?',
        options: [
          { id: 'a', text: 'Å måle nøyaktig motstandsverdi i en krets', correct: false },
          { id: 'b', text: 'Å sjekke raskt om en leder er hel (ikke brutt)', correct: true },
          { id: 'c', text: 'Å måle AC-spenning i stikkontakter', correct: false },
          { id: 'd', text: 'Å teste om en sikring tåler mer strøm', correct: false },
        ],
        solution: 'Kontinuitetstesten sender en liten strøm gjennom lederen. Hvis motstanden er under ca. 30 Ω (lederen er hel), piper multimeteret. Det er en rask og enkel test for å sjekke om kabler, sikringer og koblinger er intakte.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Halveringsmetoden', definition: 'Feilsøkingsmetode der man deler systemet i to og tester midtpunktet for å halvere søkeområdet.' },
    { term: 'Visuell inspeksjon', definition: 'Førstehåndsvurdering av synlige feil som løse kabler, brent lukt eller utløste sikringer.' },
    { term: 'Multimeter', definition: 'Måleinstrument for spenning, strøm, motstand og kontinuitet.' },
    { term: 'Signalsporing', definition: 'Følge et signal gjennom kretsen fra inngang til utgang for å finne feilsted.' },
    { term: 'Forebyggende vedlikehold', definition: 'Planlagte tiltak for å forhindre feil før de oppstår.' },
    { term: 'Korrigerende vedlikehold', definition: 'Reparasjon etter at en feil har oppstått.' },
  ],
};

// ============================================================================
// Kapittel 6.7: Smarthus og bygningsautomasjon
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_6_7: TextbookChapter = {
  id: 'elektro-data-vg1-6-7',
  courseId: 'elektro-data-vg1',
  chapterNumber: '6.7',
  title: 'Smarthus og bygningsautomasjon',
  description: 'Smarthus-teknologi, kommunikasjonsprotokoller (KNX, Z-Wave, Zigbee), lys- og varmestyring, BMS og energisparing.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare prinsipper og teknologier for smarthus og bygningsautomasjon',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-6-7-intro',
      type: 'text',
      content: `## Smarthus og bygningsautomasjon

Et smarthus bruker sensorer, aktuatorer og kommunikasjonsnettverk til å automatisere funksjoner som belysning, oppvarming, sikkerhet og energistyring. Fra enkle apper som styrer lys med mobilen, til store bygningsautomasjonssystemer i næringsbygg – prinsippene er de samme.

Bygningsautomasjon er et raskt voksende fagfelt i Norge, drevet av krav til energieffektivisering, komfort og sikkerhet. Som elektrofagarbeider vil du sannsynligvis jobbe med smarthus-teknologi.

I dette kapittelet skal du lære:
- Grunnleggende prinsipper for smarthus
- De viktigste kommunikasjonsprotokollene: KNX, Z-Wave og Zigbee
- Hvordan lys- og varmestyring automatiseres
- Hva bygningsautomasjon (BMS) er
- Hvordan automasjon bidrar til energisparing`,
    },

    // BLOKK 1: Smarthus-konseptet og protokoller
    {
      id: 'elektro-data-vg1-6-7-def-1',
      type: 'definition',
      title: 'Smarthus-konseptet',
      content: `Et **smarthus** er en bolig der tekniske systemer er koblet sammen og kan styres automatisk eller via en sentral enhet.

**Grunnleggende oppbygging:**
- **Sensorer:** Måler temperatur, bevegelse, lys, fuktighet, dør/vindu-status
- **Aktuatorer:** Dimmere, releer, motoriserte ventiler, persiennemotorer
- **Sentralenhet (hub/gateway):** Koordinerer kommunikasjonen mellom enheter
- **Brukergrensesnitt:** App, veggpanel, stemme-assistent

**Typiske smarthus-funksjoner:**
- **Lysstyring:** Dimming, tidsstyring, bevegelsesstyrt, scenekontroll
- **Varmestyring:** Romsoner med individuelle settpunkt, nattsenking, fraværsstyring
- **Sikkerhet:** Alarmsystem, kameraovervåkning, røyk- og vannlekkasjedeteksjon
- **Energimonitorering:** Sanntids strømforbruk, solcelleproduksjon, optimalisering
- **Solavskjerming:** Automatisk persiennestyring basert på solposisjon og temperatur`,
    },
    {
      id: 'elektro-data-vg1-6-7-def-2',
      type: 'definition',
      title: 'Kommunikasjonsprotokoller',
      content: `For at smarthus-enheter skal snakke sammen, trenger de en felles **kommunikasjonsprotokoll**.

**KNX (kabelbasert):**
- Internasjonal standard (ISO 14543) for bygningsautomasjon
- Dedikert buss-kabel (grønn, 2-leder) i tillegg til strømkablene
- Svært pålitelig – ikke påvirket av trådløs interferens
- Desentralisert: Enhetene kommuniserer direkte uten sentral server
- Brukes i næringsbygg og dyrere boliger
- Krever sertifisert installatør

**Z-Wave (trådløs):**
- Trådløs protokoll med lav effekt, frekvens 868 MHz (Europa)
- Mesh-nettverk: Enheter videresender signaler til hverandre
- Rekkevidde: ca. 30 m innendørs per hopp, opptil 4 hopp
- Maks 232 enheter per nettverk
- Populær for ettermontering i eksisterende boliger

**Zigbee (trådløs):**
- Trådløs protokoll, frekvens 2,4 GHz (samme som Wi-Fi)
- Mesh-nettverk med opptil 65 000 enheter
- Lavt strømforbruk – batteridrevne sensorer kan vare i år
- Brukes av Philips Hue, IKEA DIRIGERA, Amazon Echo
- Kan få interferens fra Wi-Fi-nettverk`,
    },
    {
      id: 'elektro-data-vg1-6-7-example-1',
      type: 'example',
      title: 'Velge riktig protokoll',
      problem: 'En familie vil gjøre huset sitt smartere. De ønsker å styre lys, varme og persienner. Huset er 15 år gammelt og har ikke smarthus-kabler. Budsjettet er begrenset. Hvilken protokoll anbefaler du, og hvorfor?',
      solution: `**Anbefaling: Z-Wave eller Zigbee (trådløs løsning)**

**Begrunnelse:**
- Huset er eksisterende, så det er dyrt og upraktisk å legge nye kabler for KNX
- Trådløse løsninger kan etterinstalleres uten å bryte opp vegger
- Budsjettet er begrenset – trådløse enheter er rimeligere enn KNX

**Z-Wave vs. Zigbee:**
- Z-Wave: Færre interferensproblemer (868 MHz), godt utvalg av enheter
- Zigbee: Flere enheter tilgjengelig (IKEA, Philips), billigere innstegsmodeller

**Konkret oppsett:**
- Sentralenhet (hub) som støtter valgt protokoll
- Trådløse dimmere eller smarte lyspærer for lysstyring
- Trådløse termostatventiler på radiatorene for sonevis varmestyring
- Trådløse persiennemotorer eller smarte kontrollere

KNX ville vært bedre for nybygg eller totalrenovering, der kablene kan legges under bygging.`,
    },
    {
      id: 'elektro-data-vg1-6-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-7-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken smarthus-protokoll bruker dedikert buss-kabel og er en internasjonal standard for bygningsautomasjon?',
        options: [
          { id: 'a', text: 'Z-Wave', correct: false },
          { id: 'b', text: 'Zigbee', correct: false },
          { id: 'c', text: 'KNX', correct: true },
          { id: 'd', text: 'Bluetooth', correct: false },
        ],
        solution: 'KNX er en internasjonal standard (ISO 14543) som bruker dedikert grønn buss-kabel for kommunikasjon. Det er den mest pålitelige protokollen for bygningsautomasjon og brukes mye i næringsbygg og større boliger.',
      },
    },

    // BLOKK 2: Lys- og varmestyring
    {
      id: 'elektro-data-vg1-6-7-def-3',
      type: 'definition',
      title: 'Lysstyring og varmestyring',
      content: `**Automatisk lysstyring:**
- **Bevegelsessensorer:** Slår lys på ved bevegelse, av etter inaktivitet
- **Dagslyskompensering:** Dimmer kunstig lys basert på innkommende dagslys
- **Tidsstyring:** Lys følger klokke eller soloppgang/nedgang
- **Scenekontroll:** Forhåndsdefinerte lysinnstillinger (f.eks. «Middag», «Film», «Natt»)
- **DALI (Digital Addressable Lighting Interface):** Industristandard for profesjonell lysstyring, tillater individuell adressering av hver armatur

**Automatisk varmestyring:**
- **Soneregulering:** Hvert rom har egen termostat og settpunkt
- **Nattsenking:** Temperaturen senkes automatisk om natten (f.eks. fra 22 °C til 18 °C)
- **Fraværsmodus:** Senker temperaturen når ingen er hjemme (basert på bevegelse, GPS eller kalender)
- **Vindu-sensor:** Slår av varmen automatisk når et vindu åpnes
- **Værdata-integrasjon:** Justerer oppvarming basert på værmelding

**Energibesparelse med lysstyring:** 30–50 % reduksjon i lysenergi
**Energibesparelse med varmestyring:** 15–30 % reduksjon i varmeenergi`,
    },
    {
      id: 'elektro-data-vg1-6-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-7-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er dagslyskompensering i et automatisk lysstyringssystem?',
        options: [
          { id: 'a', text: 'At lyset alltid står på full styrke uansett dagslys', correct: false },
          { id: 'b', text: 'At kunstig lys dimmes ned når det er mye dagslys, og opp når det er mørkt', correct: true },
          { id: 'c', text: 'At lyset bare brukes på dagtid', correct: false },
          { id: 'd', text: 'At lyset endrer farge etter tid på døgnet', correct: false },
        ],
        solution: 'Dagslyskompensering betyr at systemet måler innkommende dagslys med en lyssensor og automatisk justerer det kunstige lyset. Når det er mye dagslys, dimmes det kunstige lyset ned. Når det blir mørkt ute, økes det kunstige lyset. Dette sparer energi og gir jevnt lysnivå.',
      },
    },

    // BLOKK 3: BMS og energisparing
    {
      id: 'elektro-data-vg1-6-7-def-4',
      type: 'definition',
      title: 'Bygningsautomasjon (BMS) og energisparing',
      content: `**BMS (Building Management System):**
Et sentralt styresystem for alle tekniske installasjoner i et næringsbygg.

**BMS styrer typisk:**
- Ventilasjon og klimaanlegg (HVAC)
- Belysning i fellesarealer og kontorer
- Oppvarming og kjøling
- Adgangskontroll og sikkerhetssystemer
- Brannalarmanlegg
- Heiser og rulletrapper
- Energimåling og -optimalisering

**Energisparing med automasjon:**
- **Behovsstyrt ventilasjon:** Ventilerer kun rom som er i bruk (basert på CO₂-nivå eller bevegelse)
- **Optimal start/stopp:** Starter oppvarming/ventilasjon akkurat tidsnok slik at bygget er klart ved arbeidsdagens start
- **Lastbalansering:** Unngår å kjøre alle energikrevende systemer samtidig (effekttopper)
- **Frikjøling:** Bruker kjølig uteluft til kjøling i stedet for kompresor når det er kaldt nok ute
- **Energirapportering:** Identifiserer avvik og mulige besparelser

**Typisk energibesparelse med BMS:** 20–40 % sammenlignet med manuelt styrte bygg.`,
    },
    {
      id: 'elektro-data-vg1-6-7-example-2',
      type: 'example',
      title: 'Energisparing i kontorbygg',
      problem: 'Et kontorbygg bruker 500 000 kWh/år på oppvarming, ventilasjon og belysning. Et BMS-system med behovsstyrt ventilasjon, dagslyskompensering og optimal start/stopp installeres. Besparelsen anslås til 30 %. Hva spares årlig i kWh og kroner (strømpris 1,20 kr/kWh)?',
      solution: `**Steg 1:** Besparelse i kWh:
Spart = 500 000 × 0,30 = **150 000 kWh**

**Steg 2:** Besparelse i kroner:
Spart = 150 000 × 1,20 = **180 000 kr/år**

**Steg 3:** Nytt forbruk:
500 000 − 150 000 = **350 000 kWh/år**

Et BMS-system med intelligent styring sparer bygget 150 000 kWh og 180 000 kr hvert år. Over 10 år blir det 1,8 millioner kroner spart.`,
    },
    {
      id: 'elektro-data-vg1-6-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-7-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvordan behovsstyrt ventilasjon fungerer i et kontorbygg, og hvorfor det sparer energi sammenlignet med ventilasjon som kjører med fast hastighet hele dagen.',
        solution: 'Behovsstyrt ventilasjon bruker sensorer (CO₂-sensor, bevegelsessensor eller bookingsystem) til å oppdage om et rom er i bruk og hvor mange personer som er til stede. Når rommet er tomt, reduseres ventilasjonen til minimum (eller slås helt av). Når rommet er fullt, økes ventilasjonen for å sikre god luftkvalitet. Energibesparelse: Et kontor med fast ventilasjon bruker like mye energi i et tomt møterom som i et fullt. Med behovsstyring ventileres bare rom som trenger det, og mengden justeres etter antall personer. Typisk er bare 40–60 % av rommene i et kontorbygg i bruk samtidig, så potensialet for besparelse er stort – ofte 30–50 % av ventilasjonsenergien.',
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-6-7-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om smarthus og bygningsautomasjon:

- **Smarthus** kobler sensorer, aktuatorer og sentralenhet for automatisk styring av lys, varme og sikkerhet
- **KNX** er kabelbasert, svært pålitelig og brukes i næringsbygg og nybygg
- **Z-Wave** (868 MHz) og **Zigbee** (2,4 GHz) er trådløse mesh-protokoller for ettermontering
- **Lysstyring** med bevegelsessensorer og dagslyskompensering sparer 30–50 % lysenergi
- **Varmestyring** med soner, nattsenking og fraværsmodus sparer 15–30 % varmeenergi
- **BMS** (Building Management System) styrer alle tekniske systemer i næringsbygg sentralt
- Bygningsautomasjon gir typisk 20–40 % energibesparelse sammenlignet med manuelle systemer`,
    },

    // SAMLEOPPGAVER
    {
      id: 'elektro-data-vg1-6-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-7-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign KNX, Z-Wave og Zigbee som protokoller for et nytt kontorbygg med 50 rom. Vurder pålitelighet, kostnader, skalerbarhet og egnethet. Hvilken protokoll vil du anbefale, og hvorfor?',
        solution: 'KNX: Pålitelighet: Svært høy – kabelbasert, ingen trådløs interferens. Kostnad: Høy installasjonskostnad (krever ekstra kabling og sertifisert installatør), men lave driftskostnader. Skalerbarhet: Utmerket – støtter tusenvis av enheter, enkel å utvide med nye kabler. Egnethet: Best for nybygg der kabelen kan legges under bygging. Z-Wave: Pålitelighet: God, men kan ha rekkeviddeproblemer i store bygg. Kostnad: Rimeligere enheter, ingen kabling. Skalerbarhet: Begrenset til 232 enheter per nettverk – for lite for 50 rom med mange enheter. Zigbee: Pålitelighet: Middels – kan få interferens fra Wi-Fi i kontorbygg. Kostnad: Rimelig. Skalerbarhet: God (65 000 enheter), men interferensproblemer øker med mange enheter. Anbefaling: KNX for et nytt kontorbygg med 50 rom. Grunnen er at det er nybygg (kabling er rimelig under bygging), man trenger pålitelighet i næringsbygg, skalerbarheten er god nok for fremtidige utvidelser, og trådløs interferens i et stort kontorbygg med mye Wi-Fi kan gi problemer for Z-Wave/Zigbee.',
      },
    },
    {
      id: 'elektro-data-vg1-6-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-7-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er «mesh-nettverk» i sammenheng med Z-Wave og Zigbee?',
        options: [
          { id: 'a', text: 'At alle enheter er koblet direkte til en sentral hub med kabel', correct: false },
          { id: 'b', text: 'At enheter kan videresende signaler til hverandre, slik at rekkevidden utvides', correct: true },
          { id: 'c', text: 'At bare én enhet kan kommunisere om gangen', correct: false },
          { id: 'd', text: 'At enhetene bruker mobilnettet for kommunikasjon', correct: false },
        ],
        solution: 'I et mesh-nettverk kan enhetene fungere som «repeatere» som videresender signaler til andre enheter. Hvis en sensor ikke når sentralenheten direkte, kan signalet hoppe via mellomliggende enheter. Dette utvider rekkevidden og øker påliteligheten – hvis én enhet svikter, finner signalet en alternativ rute.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Smarthus', definition: 'Bolig der tekniske systemer er koblet sammen og kan styres automatisk.' },
    { term: 'KNX', definition: 'Internasjonal kabelbasert standard for bygningsautomasjon (ISO 14543).' },
    { term: 'Z-Wave', definition: 'Trådløs smarthus-protokoll på 868 MHz med mesh-nettverk.' },
    { term: 'Zigbee', definition: 'Trådløs smarthus-protokoll på 2,4 GHz med mesh-nettverk og lavt strømforbruk.' },
    { term: 'BMS', definition: 'Building Management System – sentralt styresystem for tekniske installasjoner i bygg.' },
    { term: 'Mesh-nettverk', definition: 'Nettverk der enheter videresender signaler til hverandre for utvidet rekkevidde.' },
    { term: 'Dagslyskompensering', definition: 'Automatisk justering av kunstig lys basert på innkommende dagslys.' },
  ],
};

// ============================================================================
// Eksportarray
// ============================================================================

export const CHAPTERS_ELEKTRO_DATA_VG1_KAP6_NY = [
  CHAPTER_ELEKTRO_DATA_VG1_6_2,
  CHAPTER_ELEKTRO_DATA_VG1_6_3,
  CHAPTER_ELEKTRO_DATA_VG1_6_5,
  CHAPTER_ELEKTRO_DATA_VG1_6_6,
  CHAPTER_ELEKTRO_DATA_VG1_6_7,
];
