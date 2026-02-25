/**
 * Tekstbok kapitler for Naturfag 10 - Seksjon 6: Teknologi og forskning (6.1-6.5)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 6.1: Teknologiske systemer
// ============================================================================

export const CHAPTER_NAT10_6_1: TextbookChapter = {
  id: 'naturfag-10-6-1',
  courseId: 'naturfag-10',
  chapterNumber: '6.1',
  title: 'Teknologiske systemer',
  description: 'Forstå hvordan teknologiske systemer fungerer og kommuniserer.',
  estimatedMinutes: 35,
  competenceGoals: [
    'forklare hva et teknologisk system er',
    'beskrive input, prosess og output i teknologiske systemer',
    'forklare sender-mottaker-systemer og kommunikasjon',
    'gi eksempler på teknologiske systemer i hverdagen',
    'forklare hva Internet of Things (IoT) er',
    'beskrive utfordringer knyttet til sikkerhet og personvern',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'nat10-6-1-intro',
      type: 'text',
      content: `## Teknologiske systemer

Når du tar opp telefonen og spiller musikk, sender en melding eller bruker GPS – hvordan fungerer det egentlig? Alle disse er **teknologiske systemer** som jobber sammen for å løse oppgaver.

Teknologiske systemer er overalt rundt oss:
- Mobiltelefoner og smartklokker
- WiFi og trådløst internett
- GPS som viser veien
- Fjernkontroller til TV og lys
- Smarte hjem-enheter som snakker sammen

I dette kapitlet lærer du:
- Hva et teknologisk system er
- Hvordan systemer kommuniserer (sender-mottaker)
- Eksempler på teknologiske systemer
- Internet of Things (IoT) – når enheter snakker sammen
- Sikkerhet og personvern i teknologiske systemer`,
    },

    // ========== DEFINISJON: TEKNOLOGISK SYSTEM ==========
    {
      id: 'nat10-6-1-def-teknologisk-system',
      type: 'definition',
      title: 'Teknologisk system',
      content: 'Et teknologisk system er en samling av deler (komponenter) som jobber sammen for å utføre en bestemt oppgave. Systemet tar inn informasjon (input), behandler den (prosess), og gir et resultat (output). Eksempler er mobiltelefoner, datamaskiner, GPS-systemer og smarte hjem-enheter.',
    },

    // ========== DEFINISJON: INPUT OG OUTPUT ==========
    {
      id: 'nat10-6-1-def-input-output',
      type: 'definition',
      title: 'Input og output',
      content: 'Input (inndata) er informasjon, energi eller signaler som kommer inn i et teknologisk system. Output (utdata) er resultatet systemet produserer etter å ha behandlet inputen. Mellom input og output skjer en prosess der systemet bearbeider informasjonen. For eksempel: Når du trykker på en knapp (input), behandler systemet kommandoen (prosess), og TV-en bytter kanal (output).',
    },

    // ========== DEFINISJON: TILBAKEKOBLING ==========
    {
      id: 'nat10-6-1-def-tilbakekobling',
      type: 'definition',
      title: 'Tilbakekobling (feedback)',
      content: 'Tilbakekobling (feedback) er når output fra et system sendes tilbake som ny input, slik at systemet kan justere seg selv. Positiv tilbakekobling forsterker endringen (f.eks. en mikrofon som lager hvinelyd), mens negativ tilbakekobling motvirker endringen og skaper stabilitet (f.eks. en termostat som holder temperaturen stabil). De fleste reguleringsmekanismer i teknologi bruker negativ tilbakekobling.',
    },

    // ========== DEFINISJON: SYSTEMTENKNING ==========
    {
      id: 'nat10-6-1-def-systemtenkning',
      type: 'definition',
      title: 'Systemtenkning',
      content: 'Systemtenkning er en tilnærming der man ser på helheten i et system, i stedet for bare enkeltdelene. Man undersøker hvordan komponentene påvirker hverandre, og forstår at helheten ofte er mer enn summen av delene. Systemtenkning er viktig for å forstå komplekse teknologiske systemer der mange deler samarbeider.',
    },

    // ========== HVA ER ET TEKNOLOGISK SYSTEM? ==========
    {
      id: 'nat10-6-1-hva-er-system',
      type: 'text',
      content: `## Hva er et teknologisk system?

Et **teknologisk system** er en samling av deler som jobber sammen for å løse en oppgave.

### De tre hoveddelene

Alle teknologiske systemer består av tre hoveddeler:

**1. INPUT (inndata)**
- Informasjon eller signal som kommer inn i systemet
- Eksempel: Du trykker på en knapp på fjernkontrollen

**2. PROSESS (behandling)**
- Systemet behandler informasjonen
- Eksempel: Fjernkontrollen sender et signal til TV-en

**3. OUTPUT (utdata)**
- Resultatet av prosessen
- Eksempel: TV-en bytter kanal

### Eksempel: Mikrobølgeovn

- **Input:** Du stiller inn tid (3 minutter) og trykker start
- **Prosess:** Mikrobølgeovnen varmer opp maten med mikrobølger
- **Output:** Varm mat etter 3 minutter

### Systemtenkning

**Systemtenkning** betyr å se på hvordan delene i et system jobber sammen.

Et system er mer enn bare summen av delene:
- En mobiltelefon er ikke bare skjerm + batteri + kamera
- Alle delene må **kommunisere** og **samarbeide** for at telefonen skal fungere`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE ==========
    {
      id: 'nat10-6-1-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-1-ex-1',
        number: '6.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er de tre hoveddelene i et teknologisk system?',
        options: [
          {
            id: 'a',
            text: 'Input, prosess, output',
            isCorrect: true,
            feedback: 'Riktig! Alle teknologiske systemer består av input (inndata), prosess (behandling) og output (utdata).',
          },
          {
            id: 'b',
            text: 'Start, midt, slutt',
            isCorrect: false,
            feedback: 'Feil. Dette beskriver ikke de tekniske delene av et system.',
          },
          {
            id: 'c',
            text: 'Hardware, software, nettverk',
            isCorrect: false,
            feedback: 'Feil. Dette er komponenter i datasystemer, men ikke de grunnleggende delene i alle teknologiske systemer.',
          },
          {
            id: 'd',
            text: 'Sensor, motor, batteri',
            isCorrect: false,
            feedback: 'Feil. Dette er spesifikke komponenter, ikke de tre hoveddelene.',
          },
        ],
        solution: 'De tre hoveddelene er: **Input** (informasjon inn i systemet), **Prosess** (behandling av informasjonen), og **Output** (resultatet som kommer ut).',
      },
    },

    // ========== EKSEMPEL: TERMOSTAT SOM TILBAKEKOBLING ==========
    {
      id: 'nat10-6-1-example-termostat',
      type: 'example',
      title: 'Eksempel: Tilbakekobling i en termostat',
      problem: 'Forklar hvordan tilbakekobling fungerer i en termostat som holder romtemperaturen på 21°C.',
      solution: `**Løsning:**

En termostat bruker **negativ tilbakekobling** for å holde temperaturen stabil:

1. **Input:** Temperatursensoren måler romtemperaturen (f.eks. 19°C)
2. **Prosess:** Termostaten sammenligner målt temperatur med ønsket temperatur (21°C)
3. **Output:** Siden 19°C < 21°C, slår termostaten på varmen
4. **Tilbakekobling:** Når temperaturen stiger til 21°C, registrerer sensoren dette (output → ny input)
5. **Ny beslutning:** Termostaten slår av varmen fordi ønsket temperatur er nådd

Systemet regulerer seg selv hele tiden. Hvis temperaturen faller under 21°C, slås varmen på igjen. Hvis den stiger over, slås varmen av. Dette er et klassisk eksempel på negativ tilbakekobling.`,
    },

    // ========== EKSEMPEL: VASKEMASKIN SOM SYSTEM ==========
    {
      id: 'nat10-6-1-example-vaskemaskin',
      type: 'example',
      title: 'Eksempel: Vaskemaskin som teknologisk system',
      problem: 'Beskriv input, prosess og output i en vaskemaskin.',
      solution: `**Løsning:**

**Input:**
- Skitne klær legges i trommelen
- Vaskemiddel tilsettes
- Du velger vaskeprogram og temperatur (brukerinput)
- Vann strømmer inn

**Prosess:**
- Vaskemaskinen varmer opp vannet til valgt temperatur
- Trommelen roterer og agiterer klærne
- Vaskemiddelet løser opp smuss og flekker
- Vannet pumpes ut og nytt vann skyller klærne
- Sentrifugen spinner ut vannet

**Output:**
- Rene, nesten tørre klær

**Tilbakekobling:** Mange moderne vaskemaskiner har sensorer som måler vannets renhet. Hvis vannet fortsatt er skittent etter skylling, legger maskinen til en ekstra skyllerunde. Dette er tilbakekobling i praksis.`,
    },

    // ========== EKSEMPEL: ALARM SOM SYSTEM ==========
    {
      id: 'nat10-6-1-example-alarm',
      type: 'example',
      title: 'Eksempel: Brannalarmsystem',
      problem: 'Et kontor har et brannalarmsystem. Beskriv dette som et teknologisk system med input, prosess og output.',
      solution: `**Løsning:**

**Input:**
- Røyksensorer registrerer røykpartikler i luften
- Varmesensorer registrerer unormalt høye temperaturer

**Prosess:**
- Sentralenheten mottar signal fra sensorene
- Systemet analyserer om signalet skyldes ekte brann (unngå falsk alarm)
- Dersom røyk og varme overskrider terskelverdier, utløses alarmen

**Output:**
- Alarmsirener spiller høy lyd for å varsle alle i bygningen
- Nødlys lyser opp rømningsveier
- Signal sendes automatisk til brannvesenet
- Automatisk sprinkleranlegg kan aktiveres
- Ventilasjonen slås av for å unngå at røyken spres

Dette systemet har flere sensorer (input), en intelligent sentral (prosess) og flere ulike responser (output).`,
    },

    // ========== SENDER-MOTTAKER-SYSTEMER ==========
    {
      id: 'nat10-6-1-sender-mottaker',
      type: 'text',
      content: `## Sender-mottaker-systemer

Mange teknologiske systemer **kommuniserer** med hverandre. Da trenger vi en **sender** og en **mottaker**.

### Kommunikasjon mellom enheter

**Sender:**
- Den som sender informasjon
- Eksempel: Fjernkontroll, mobiltelefon

**Mottaker:**
- Den som mottar informasjon
- Eksempel: TV, høyttaler

**Signal:**
- Informasjonen som sendes mellom sender og mottaker
- Kan være: radiosignal, lyssignal, lydsignal

### Eksempel: Trådløs høyttaler

1. **Sender:** Mobiltelefonens Bluetooth sender musikk som signal
2. **Signal:** Radiosignal (Bluetooth) gjennom lufta
3. **Mottaker:** Høyttaleren mottar signalet og spiller musikken

### Koding og dekoding

For at mottakeren skal forstå signalet, må:
- **Senderen kode** informasjonen til et signal
- **Mottakeren dekode** signalet tilbake til informasjon

Dette er som å snakke samme språk!`,
    },

    // ========== OPPGAVE 2: MULTIPLE CHOICE ==========
    {
      id: 'nat10-6-1-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-1-ex-2',
        number: '6.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er et sender-mottaker-system?',
        options: [
          {
            id: 'a',
            text: 'Et system der to enheter kommuniserer med hverandre',
            isCorrect: true,
            feedback: 'Riktig! I et sender-mottaker-system sender en enhet informasjon som den andre enheten mottar.',
          },
          {
            id: 'b',
            text: 'Et system som bare sender informasjon',
            isCorrect: false,
            feedback: 'Feil. Et sender-mottaker-system krever både en sender OG en mottaker.',
          },
          {
            id: 'c',
            text: 'Et system som lagrer data',
            isCorrect: false,
            feedback: 'Feil. Dette beskriver et lagringssystem, ikke kommunikasjon mellom enheter.',
          },
          {
            id: 'd',
            text: 'Et system uten trådløs kommunikasjon',
            isCorrect: false,
            feedback: 'Feil. Sender-mottaker-systemer kan være både trådløse og kablede.',
          },
        ],
        solution: 'Et sender-mottaker-system er et kommunikasjonssystem der en enhet (sender) sender informasjon som en annen enhet (mottaker) mottar.',
      },
    },

    // ========== EKSEMPLER PÅ TEKNOLOGISKE SYSTEMER ==========
    {
      id: 'nat10-6-1-eksempler',
      type: 'text',
      content: `## Eksempler på teknologiske systemer

### 1. Mobiltelefoner

**Hva gjør systemet?**
- Ringer, sender meldinger, kobler til internett

**Hvordan fungerer det?**
- **Input:** Du trykker på skjermen eller snakker
- **Prosess:** Mobiltelefonen behandler signalet og sender det til basestasjoner
- **Output:** Samtale, melding eller internett-tilkobling

**Kommunikasjon:**
- Mobiltelefonen er både sender og mottaker
- Bruker radiosignal til å kommunisere med basestasjoner

### 2. Trådløst internett (WiFi)

**Hva gjør systemet?**
- Gir internett-tilgang uten kabler

**Hvordan fungerer det?**
- **Input:** Du ber om en nettside
- **Prosess:** Ruteren sender forespørselen via internett
- **Output:** Nettsiden vises på skjermen din

**Kommunikasjon:**
- Router (sender) sender radiosignal til enheten din (mottaker)
- To-veis kommunikasjon – både sender og mottar

### 3. GPS (Global Positioning System)

**Hva gjør systemet?**
- Finner din posisjon og viser veien

**Hvordan fungerer det?**
- **Input:** GPS-mottakeren din (telefon) mottar signal fra satellitter
- **Prosess:** Beregner din posisjon basert på signaler fra minst 4 satellitter
- **Output:** Viser din posisjon på kartet

**Kommunikasjon:**
- Satellitter (sender) sender kontinuerlig signal
- GPS-enheten (mottaker) mottar og beregner posisjon

### 4. Fjernstyring

**Hva gjør systemet?**
- Styrer TV, lys eller andre enheter på avstand

**Hvordan fungerer det?**
- **Input:** Du trykker på en knapp på fjernkontrollen
- **Prosess:** Fjernkontrollen sender et infrarødt lyssignal eller radiosignal
- **Output:** TV-en eller enheten reagerer (bytter kanal, skrur på/av lys)

**Kommunikasjon:**
- Fjernkontroll (sender) sender signal
- TV/enhet (mottaker) mottar og utfører kommando`,
    },

    // ========== OPPGAVE 3: IDENTIFISER SYSTEM ==========
    {
      id: 'nat10-6-1-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-1-ex-3',
        number: '6.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken teknologi bruker GPS for å finne din posisjon?',
        options: [
          {
            id: 'a',
            text: 'Signal fra satellitter i verdensrommet',
            isCorrect: true,
            feedback: 'Riktig! GPS-systemet bruker signaler fra minst 4 satellitter for å beregne din nøyaktige posisjon.',
          },
          {
            id: 'b',
            text: 'WiFi-signaler fra ruteren din',
            isCorrect: false,
            feedback: 'Feil. WiFi kan brukes til å forbedre posisjon innendørs, men GPS bruker satellitter.',
          },
          {
            id: 'c',
            text: 'Mobilnettverk fra basestasjoner',
            isCorrect: false,
            feedback: 'Feil. Mobilnettverk kan gi grov posisjon, men GPS er basert på satellitter.',
          },
          {
            id: 'd',
            text: 'Bluetooth-signaler fra andre enheter',
            isCorrect: false,
            feedback: 'Feil. Bluetooth brukes til kortdistanse kommunikasjon, ikke posisjonering.',
          },
        ],
        solution: 'GPS bruker signaler fra satellitter i bane rundt jorden. GPS-mottakeren din trenger signal fra minst 4 satellitter for å beregne din nøyaktige posisjon på jorden.',
      },
    },

    // ========== OPPGAVE 4: INPUT-PROSESS-OUTPUT ==========
    {
      id: 'nat10-6-1-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-1-ex-4',
        number: '6.4',
        type: 'exercise',
        difficulty: 'medium',
        task: 'En smartklokke måler hvor mange skritt du tar. Beskriv input, prosess og output for dette systemet.',
        solution: `**Input:**
- Bevegelsessensorer i smartklokken registrerer bevegelse
- Akselerometer måler bevegelse i ulike retninger

**Prosess:**
- Smartklokken analyserer bevegelsesmønsteret
- Algoritmer beregner om bevegelsen er et skritt
- Teller opp antall skritt

**Output:**
- Viser antall skritt på skjermen
- Viser tilbakelagt distanse
- Kan vise kalorier forbrent

Dette er et godt eksempel på et teknologisk system der sensorer (input) gir data som prosesseres og vises som nyttig informasjon (output).`,
      },
    },

    // ========== INTERNET OF THINGS (IoT) ==========
    {
      id: 'nat10-6-1-iot',
      type: 'text',
      content: `## Internet of Things (IoT)

**Internet of Things** (IoT) betyr "tingenes internett" – når fysiske gjenstander kobles til internett og kan kommunisere med hverandre.

### Hva er IoT?

IoT er teknologi der:
- Hverdagslige gjenstander er koblet til internett
- Enhetene kan samle inn data og sende den videre
- Enhetene kan styres og overvåkes via internett
- Enhetene kan kommunisere og samarbeide uten mennesker

### Eksempler på IoT

**1. Smarte hjem**
- Smart termostat justerer temperaturen automatisk
- Lys som skrur seg på når du kommer hjem
- Dørlås du kan låse opp med telefonen
- Kamera som varsler deg om bevegelse

**2. Smartklokker og fitness-trackere**
- Måler puls, skritt og søvn
- Sender data til telefonen din
- Varsler deg om meldinger og anrop

**3. Smartbyer**
- Gatbelysning som tilpasser seg trafikk
- Søppelbøtter som varsler når de er fulle
- Parkeringsplasser som viser ledige plasser

**4. Industriell IoT**
- Sensorer på maskiner som varsler om vedlikehold
- Overvåkning av produksjon i sanntid
- Automatiske bestillinger av materialer

### Hvordan fungerer IoT?

1. **Sensorer** samler inn data (temperatur, bevegelse, lys)
2. **Internett-tilkobling** sender data til en server
3. **Databehandling** analyserer dataene
4. **Handling** utføres basert på dataene (f.eks. justere temperatur)
5. **Brukergrensesnitt** viser informasjon til deg (app på telefon)

### Fordeler med IoT

- **Bekvemmelighet:** Styre enheter hvor som helst
- **Energisparing:** Automatisk tilpasning av lys og varme
- **Sikkerhet:** Overvåkning av hjem og eiendom
- **Helse:** Overvåking av treningsnivå og helse
- **Effektivitet:** Automatisering av rutineoppgaver`,
    },

    // ========== OPPGAVE 5: IoT-FORSTÅELSE ==========
    {
      id: 'nat10-6-1-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-1-ex-5',
        number: '6.5',
        type: 'exercise',
        difficulty: 'medium',
        task: 'Du har en smart termostat hjemme som justerer temperaturen automatisk. Forklar hvordan dette IoT-systemet fungerer ved å beskrive de ulike stegene.',
        solution: `**Hvordan en smart termostat fungerer (IoT-system):**

**1. Sensorer samler data:**
- Temperatursensor måler romtemperaturen
- Kan også ha sensor for luftfuktighet
- Bevegelsessensor registrerer om noen er hjemme

**2. Internett-tilkobling:**
- Termostaten er koblet til WiFi
- Sender temperaturdata til en server/sky-tjeneste
- Kan motta kommandoer fra telefonen din

**3. Databehandling:**
- Sammenligner romtemperatur med ønsket temperatur
- Analyserer værmelding fra internett
- Lærer dine vaner (når du er hjemme/borte)

**4. Handling:**
- Slår på/av varme for å nå ønsket temperatur
- Justerer temperaturen før du kommer hjem
- Senker temperaturen når alle er borte

**5. Brukergrensesnitt:**
- Du kan se temperaturen i en app
- Endre innstillinger fra telefonen
- Få oversikt over energiforbruk

Dette er et IoT-system fordi termostaten er koblet til internett, samler data, kommuniserer med andre enheter og kan styres via app.`,
      },
    },

    // ========== OPPGAVE 6: IoT-SCENARIER ==========
    {
      id: 'nat10-6-1-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-1-ex-6',
        number: '6.6',
        type: 'exercise',
        difficulty: 'medium',
        task: 'Gi tre eksempler på hvordan IoT kan brukes i en smartby for å gjøre byen mer effektiv eller miljøvennlig.',
        solution: `**Tre eksempler på IoT i en smartby:**

**1. Smart gatbelysning:**
- Sensorer registrerer når det er biler eller folk i området
- Lyset dimmes eller slås av når ingen er der
- **Fordel:** Sparer energi og reduserer lysforurensning

**2. Intelligente søppelbeholdere:**
- Sensorer måler hvor fulle søppelbeholderne er
- Sender signal til renovasjonsselskapet når de må tømmes
- **Fordel:** Tømmes kun når nødvendig, reduserer unødvendige turer og CO₂-utslipp

**3. Smart trafikkontroll:**
- Sensorer i veibanen registrerer trafikkmengde
- Trafikklys tilpasser grønn-tid basert på trafikken
- App viser ledige parkeringsplasser
- **Fordel:** Mindre kø, mindre forurensning, lettere å finne parkering

Andre gode eksempler:
- Sensorer som varsler om behov for vedlikehold av broer/veier
- Luftkvalitetssensorer som overvåker forurensning
- Smarte vanningssystemer i parker som tilpasser seg vær`,
      },
    },

    // ========== SIKKERHET I TEKNOLOGISKE SYSTEMER ==========
    {
      id: 'nat10-6-1-sikkerhet',
      type: 'text',
      content: `## Sikkerhet i teknologiske systemer

Når enheter er koblet til internett og kommuniserer, oppstår nye utfordringer med **sikkerhet** og **personvern**.

### Personvern

**Hva er personvern?**
- Retten til å bestemme hvem som skal ha tilgang til informasjon om deg
- Informasjon som navn, adresse, bilder, bevegelsesmønster

**Utfordringer med IoT og personvern:**

1. **Datainnsamling:**
   - Smartklokker samler helsedata
   - Smarte høyttalere lytter hele tiden
   - Apps på telefonen vet hvor du er

2. **Hvem har tilgang?**
   - Selskaper som lager enhetene
   - Tredjepart som kjøper dataene
   - Hackere som bryter seg inn

3. **Hva brukes dataene til?**
   - Målrettet reklame
   - Selge til andre selskaper
   - Overvåkning

### Hacking og cyberangrep

**Hva er hacking?**
- Å bryte seg inn i et datasystem uten tillatelse
- Kan stjele data, ødelegge systemer eller ta kontroll

**Sårbarheter i IoT:**

1. **Svake passord:**
   - Mange IoT-enheter har standardpassord (f.eks. "admin" / "1234")
   - Brukere endrer ikke passord

2. **Manglende oppdateringer:**
   - Eldre programvare har sikkerhetshull
   - Mange IoT-enheter oppdateres ikke automatisk

3. **Usikret kommunikasjon:**
   - Data sendes uten kryptering
   - Lett å avlytte kommunikasjon

### Hvordan beskytte seg?

**1. Sterke passord:**
- Bruk unike passord for hver enhet
- Minst 12 tegn med bokstaver, tall og tegn
- Bruk passordbehandler

**2. Oppdater regelmessig:**
- Hold programvare oppdatert
- Skru på automatiske oppdateringer
- Erstatt enheter som ikke får oppdateringer

**3. Sikker kommunikasjon:**
- Bruk kryptering (HTTPS, WPA2/WPA3)
- Ikke bruk offentlig WiFi for sensitive handlinger
- Bruk VPN hvis nødvendig

**4. Begrens datadeling:**
- Les personvernregler
- Skru av unødvendig datadeling
- Tenk over hvilke enheter du virkelig trenger

**5. Nettverk-sikkerhet:**
- Bruk sterk WiFi-kryptering
- Endre standard ruterpasord
- Bruk gjerne eget nettverk for IoT-enheter

### Etiske spørsmål

**Hvem eier dataene?**
- Dataene smartklokken din samler inn – hvem eier de?
- Skal selskapet kunne selge dataene dine?

**Overvåkning vs. sikkerhet:**
- Kameraer øker sikkerhet, men reduserer personvern
- Hvor går grensen?

**Ansvar ved feil:**
- Hvis en selvkjørende bil krasjer – hvem er ansvarlig?
- Hvem betaler hvis IoT-enheten din blir hacket?`,
    },

    // ========== OPPGAVE 7: SIKKERHETSRISIKO ==========
    {
      id: 'nat10-6-1-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-1-ex-7',
        number: '6.7',
        type: 'exercise',
        difficulty: 'vanskelig',
        task: 'En familie har installert smarte kameraer, smart dørlås og en smart høyttaler hjemme. Beskriv to sikkerhetsrisikoer ved disse IoT-enhetene og forklar hvordan familien kan beskytte seg mot dem.',
        solution: `**Sikkerhetsrisiko 1: Hacking av smart dørlås**

**Hva er risikoen?**
- Hvis smart dørlåsen har svak sikkerhet, kan hackere bryte seg inn
- De kan få tilgang til hjemmet fysisk ved å låse opp døren på avstand
- Eller de kan finne ut når familien er hjemmefra ved å se på låsemønsteret

**Hvordan beskytte seg:**
- Bruk sterkt og unikt passord for dørlås-appen
- Skru på to-faktor-autentisering hvis tilgjengelig
- Hold programvaren oppdatert
- Velg kjente merker med god sikkerhet
- Ha en mekanisk nøkkel som backup

**Sikkerhetsrisiko 2: Avlytting via smart høyttaler**

**Hva er risikoen?**
- Smart høyttaler lytter hele tiden etter stikkord ("Hei Google", "Alexa")
- Kan ved et uhell ta opp private samtaler
- Hackere kan potensielt få tilgang til mikrofonen
- Dataene som samles inn kan brukes til målrettet reklame

**Hvordan beskytte seg:**
- Bruk mikrofon av/på-knappen når høyttaleren ikke er i bruk
- Gå gjennom og slett opptak regelmessig
- Les personverninnstillingene og begrens datadeling
- Plasser høyttaleren et sted der den ikke fanger opp sensitive samtaler
- Bruk sterkt passord for kontoen

**Andre viktige tiltak:**
- Bruk sterkt WiFi-passord med WPA3-kryptering
- Ha et eget nettverk for IoT-enheter
- Sjekk hvem som har tilgang til enhetene (ikke del tilgang unødvendig)
- Les anmeldelser om sikkerhet før du kjøper IoT-enheter`,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'nat10-6-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Teknologiske systemer:**
- Består av input, prosess og output
- Deler jobber sammen for å løse oppgaver
- Systemtenkning: forstå hvordan delene samarbeider

**Sender-mottaker-systemer:**
- Kommunikasjon mellom enheter
- Sender koder informasjon til signal
- Mottaker dekoder signalet tilbake

**Eksempler:**
- Mobiltelefoner, WiFi, GPS, fjernkontroller
- Alle bruker sender-mottaker-kommunikasjon

**Internet of Things (IoT):**
- Fysiske gjenstander koblet til internett
- Samler data, kommuniserer og kan styres via app
- Eksempler: smarte hjem, smartklokker, smartbyer

**Sikkerhet og personvern:**
- IoT-enheter samler mye data om oss
- Risiko for hacking hvis ikke sikret godt nok
- Beskytt deg med: sterke passord, oppdateringer, kryptering

### Viktigste poeng

1. **Teknologiske systemer er overalt** – forstå input, prosess, output
2. **Kommunikasjon krever sender og mottaker** – de må "snakke samme språk"
3. **IoT gjør hverdagen enklere** – men krever bevissthet om sikkerhet
4. **Beskytt personvernet ditt** – tenk over hvilke data du deler

### Neste steg

Nå som du forstår teknologiske systemer, er du klar til å:
- Identifisere teknologiske systemer i hverdagen
- Forstå hvordan enheter kommuniserer
- Ta informerte valg om IoT-enheter
- Beskytte personvernet ditt i en digital verden`,
    },

    // ========== OPPGAVE 8: VURDER TEKNOLOGI ==========
    {
      id: 'nat10-6-1-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-1-ex-8',
        number: '6.8',
        type: 'exercise',
        difficulty: 'vanskelig',
        task: 'Du har mulighet til å kjøpe en smartklokke som måler puls, bevegelse, søvn og posisjon. Vurder fordeler og ulemper ved å bruke denne teknologien. Diskuter både funksjonalitet og personvern.',
        solution: `**Fordeler med smartklokke:**

**Funksjonalitet:**
- Motivasjon til fysisk aktivitet (teller skritt, kalorier)
- Overvåke helse (puls, søvnkvalitet)
- Motta varsler uten å ta opp telefonen
- GPS for å spore løpeturer og sykkelruter
- Enkel tilgang til informasjon og kontroll

**Helse og livsstil:**
- Kan oppdage unormal puls som indikerer helseproblemer
- Søvnanalyse hjelper å forbedre søvnkvalitet
- Påminnelser om å bevege seg
- Enklere å nå treningsmål

**Ulemper og personvernhensyn:**

**Personvern:**
- Samler detaljert data om deg 24/7 (helsedata, posisjon, bevegelsesmønster)
- Selskapet har tilgang til dataene dine
- Data kan selges til tredjepart (f.eks. forsikringsselskap, annonsører)
- Kan avsløre hvor du er til enhver tid (GPS-sporing)

**Sikkerhet:**
- Hvis klokken hackes, får hackere tilgang til sensitiv informasjon
- Bevegelsesmønster kan brukes til å finne ut når du er hjemmefra
- Helsedata kan misbrukes

**Avhengighet:**
- Kan bli for avhengig av teknologi for å "vite" om du er frisk
- Konstant fokus på tall kan skape stress
- Kan føle press til alltid å prestere

**Konklusjon:**
En smartklokke kan være nyttig for å fremme helse og aktivitet, MEN:
- Les personvernreglene nøye før du kjøper
- Begrens hvilke data som deles med selskapet
- Skru av unødvendige funksjoner (f.eks. konstant GPS-sporing)
- Tenk over om fordelene oppveier personvernrisikoen

**Viktigst:** Du må selv bestemme hva du er komfortabel med å dele av data om deg selv.`,
      },
    },
    // ========== EKSEMPEL: TILBAKEKOBLING I HVERDAGEN ==========
    {
      id: 'nat10-6-1-example-feedback-hverdagen',
      type: 'example',
      title: 'Eksempel: Tilbakekobling i hverdagsteknologi',
      problem: 'Gi tre eksempler på negativ tilbakekobling i hverdagslige teknologiske systemer, og forklar hvordan tilbakekoblingen fungerer i hvert tilfelle.',
      solution: `**Løsning:**

**1. Kjøleskapets termostat:**
- Temperatursensor måler temperaturen inne i kjøleskapet
- Hvis temperaturen stiger over 6°C → kompressoren slår på → kjøleskapet avkjøles
- Hvis temperaturen synker under 4°C → kompressoren slår av → strømsparing
- Output (temperatur) sendes tilbake som input (sensoravlesning)
- Resultat: Stabil temperatur mellom 4-6°C

**2. Lydkontroll i øretelefoner (støydemping):**
- Mikrofon registrerer støy fra omgivelsene (input)
- Prosessor lager et "motsignal" som nøytraliserer støyen (prosess)
- Høyttaleren spiller musikk + motsignal (output)
- Mikrofon sjekker om det fortsatt er støy (tilbakekobling)
- Systemet justerer kontinuerlig for å holde støyen borte

**3. Cruisekontroll i bilen:**
- Du setter ønsket hastighet til 80 km/t
- Hastighetssensor måler bilens faktiske hastighet (input)
- Hvis bilen sakker ned (oppover bakke) → systemet gir mer gass
- Hvis bilen akselererer (nedover bakke) → systemet reduserer gass
- Hastigheten holdes stabil på 80 km/t

Alle tre eksemplene bruker negativ tilbakekobling: Systemet motvirker avvik fra ønsket tilstand for å opprettholde stabilitet.`,
    },

    // ========== OPPGAVE 9: TILBAKEKOBLING ==========
    {
      id: 'nat10-6-1-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-1-ex-9',
        number: '6.9',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er tilbakekobling (feedback) i et teknologisk system?',
        options: [
          {
            id: 'a',
            text: 'Når output fra systemet sendes tilbake som ny input for å regulere systemet',
            isCorrect: true,
            feedback: 'Riktig! Tilbakekobling gjør at systemet kan justere seg selv basert på resultatet.',
          },
          {
            id: 'b',
            text: 'Når systemet mottar input fra brukeren',
            isCorrect: false,
            feedback: 'Feil. Brukerinput er vanlig input, ikke tilbakekobling.',
          },
          {
            id: 'c',
            text: 'Når systemet slår seg av automatisk',
            isCorrect: false,
            feedback: 'Feil. Automatisk avslåing kan være et resultat av tilbakekobling, men er ikke selve definisjonen.',
          },
          {
            id: 'd',
            text: 'Når to systemer er koblet sammen med en kabel',
            isCorrect: false,
            feedback: 'Feil. Tilbakekobling handler om informasjonsflyt, ikke fysisk tilkobling.',
          },
        ],
        solution: 'Tilbakekobling (feedback) betyr at output fra et system sendes tilbake som ny input. Dette gjør at systemet kan regulere seg selv. Et godt eksempel er en termostat: den måler temperaturen (output blir input) og justerer varmen deretter.',
      },
    },

    // ========== OPPGAVE 10: IDENTIFISER DELER ==========
    {
      id: 'nat10-6-1-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-1-ex-10',
        number: '6.10',
        type: 'exercise',
        difficulty: 'medium',
        task: 'En automatisk døråpner ved en butikk åpner døren når noen nærmer seg, og lukker den igjen etter noen sekunder. Beskriv input, prosess, output og tilbakekobling i dette systemet.',
        solution: `**Input:**
- Bevegelsessensor (IR-sensor) registrerer at en person nærmer seg døren
- Sensoren sender et elektrisk signal til kontrollenheten

**Prosess:**
- Kontrollenheten mottar signal fra bevegelsessensoren
- Den bestemmer at døren skal åpnes
- Etter en innstilt tid (f.eks. 5 sekunder) sjekker den om noen fortsatt er i sensorens felt

**Output:**
- Elektrisk motor åpner dørene
- Dørene holdes åpne i noen sekunder
- Dørene lukkes igjen

**Tilbakekobling:**
- Sensoren overvåker kontinuerlig om det er noen i døråpningen
- Hvis noen fortsatt står i døren, holdes den åpen (output → ny input)
- Først når sensoren ikke registrerer bevegelse, sendes signal om å lukke døren
- Sikkerhetssensor i dørkanten hindrer at døren lukkes på noen

Dette er et eksempel på negativ tilbakekobling der systemet justerer seg etter omgivelsene.`,
      },
    },

    // ========== OPPGAVE 11: POSITIVT VS NEGATIVT FEEDBACK ==========
    {
      id: 'nat10-6-1-ex-11-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-1-ex-11',
        number: '6.11',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er forskjellen mellom positiv og negativ tilbakekobling?',
        options: [
          {
            id: 'a',
            text: 'Positiv tilbakekobling forsterker endringen, negativ tilbakekobling motvirker endringen',
            isCorrect: true,
            feedback: 'Riktig! Positiv tilbakekobling gjør at endringer vokser, mens negativ tilbakekobling skaper stabilitet.',
          },
          {
            id: 'b',
            text: 'Positiv tilbakekobling er bra, negativ tilbakekobling er dårlig',
            isCorrect: false,
            feedback: 'Feil. Positiv og negativ refererer ikke til om det er bra eller dårlig, men til om endringen forsterkes eller motvirkes.',
          },
          {
            id: 'c',
            text: 'Positiv tilbakekobling brukes i teknologi, negativ tilbakekobling brukes i biologi',
            isCorrect: false,
            feedback: 'Feil. Begge typer finnes i både teknologi og biologi.',
          },
          {
            id: 'd',
            text: 'Det er ingen forskjell mellom dem',
            isCorrect: false,
            feedback: 'Feil. De har helt motsatt effekt på systemet.',
          },
        ],
        solution: '**Negativ tilbakekobling** motvirker endringer og skaper stabilitet (f.eks. termostat). **Positiv tilbakekobling** forsterker endringer (f.eks. en mikrofon for nær en høyttaler som lager hvinelyd). I teknologiske systemer brukes oftest negativ tilbakekobling for å opprettholde stabilitet.',
      },
    },

    // ========== OPPGAVE 12: DESIGN EGET SYSTEM ==========
    {
      id: 'nat10-6-1-ex-12-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-1-ex-12',
        number: '6.12',
        type: 'exercise',
        difficulty: 'vanskelig',
        task: 'Du skal designe et enkelt IoT-system for et klasserom som automatisk regulerer luftkvaliteten. Beskriv hvilke sensorer du trenger, hvordan systemet fungerer (input, prosess, output, tilbakekobling), og forklar hvorfor dette er nyttig.',
        solution: `**IoT-system for luftkvalitet i klasserom:**

**Sensorer (input):**
- CO₂-sensor: Måler konsentrasjonen av karbondioksid i luften
- Temperatursensor: Måler romtemperaturen
- Fuktighetssensor: Måler luftfuktigheten

**Prosess:**
- En mikrokontroller (f.eks. Arduino) leser data fra alle sensorene hvert minutt
- Dataene sendes til en skyserver via WiFi
- Algoritmen sammenligner verdiene med anbefalte grenseverdier:
  - CO₂ > 1000 ppm → Luft klasserommet
  - Temperatur > 24°C → Skru ned varmen
  - Fuktighet < 30% → Varsle om tørr luft

**Output:**
- Automatisk åpning av ventilasjon eller vinduer
- Varsel til lærerens telefon med melding om å lufte
- Dashboard på skjerm i klasserommet viser luftkvalitet i sanntid
- Fargeindikator: Grønn (god luft), gul (bør luftes snart), rød (luft nå!)

**Tilbakekobling:**
- Etter at vinduer er åpnet, fortsetter sensorene å måle
- Når CO₂-nivået synker under 800 ppm, sendes melding om at luften er god igjen
- Systemet lærer over tid når CO₂ pleier å stige (f.eks. ved start av undervisning)

**Hvorfor er dette nyttig?**
- Bedre konsentrasjon og læring for elevene
- Reduserer hodepine og tretthet
- Automatisk overvåking uten at noen trenger å tenke på det
- Data kan brukes til å forbedre ventilasjonssystemet i bygningen
- Sparer energi ved å kun ventilere når det er nødvendig`,
      },
    },

    // ========== OPPGAVE 13: KODING OG DEKODING ==========
    {
      id: 'nat10-6-1-ex-13a-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-1-ex-13a',
        number: '6.13a',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva koding og dekoding betyr i et sender-mottaker-system. Gi et eksempel fra hverdagen der informasjon kodes, sendes og dekodes.',
        solution: `**Koding og dekoding:**

**Koding** betyr å omforme informasjon til et signal som kan sendes. **Dekoding** betyr å omforme signalet tilbake til forståelig informasjon.

**Hverdagseksempel: Telefonsamtale**

1. **Koding (sender):**
   - Du snakker inn i mikrofonen (lydbølger)
   - Telefonen omformer lydbølgene til et digitalt signal (tallkode)
   - Signalet komprimeres for å bruke mindre data
   - Signalet sendes som radiosignal til en basestasjon

2. **Sending:**
   - Radiosignalet sendes fra din telefon til nærmeste basestasjon
   - Basestasjonen sender signalet videre gjennom nettverket
   - Signalet ankommer mottakerens basestasjon
   - Basestasjonen sender radiosignal til mottakerens telefon

3. **Dekoding (mottaker):**
   - Mottakerens telefon mottar radiosignalet
   - Det digitale signalet dekomprimeres
   - Signalet omformes tilbake til lydbølger
   - Høyttaleren spiller av lyden slik at mottakeren kan høre deg

**Analogi:**
Koding er som å oversette fra norsk til morsekode, og dekoding er som å oversette fra morsekode tilbake til norsk. Både sender og mottaker må "snakke samme språk" for at kommunikasjonen skal fungere.`,
      },
    },

    // ========== OPPGAVE 14: IoT-SIKKERHET ==========
    {
      id: 'nat10-6-1-ex-14-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-1-ex-14',
        number: '6.14',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av disse er den største sikkerhetsrisikoen ved IoT-enheter?',
        options: [
          {
            id: 'a',
            text: 'Standardpassord som ikke endres av brukeren',
            isCorrect: true,
            feedback: 'Riktig! Mange IoT-enheter leveres med standardpassord som "admin" eller "1234" som brukere ofte ikke endrer, noe som gjør dem enkle å hacke.',
          },
          {
            id: 'b',
            text: 'At enhetene bruker for mye strøm',
            isCorrect: false,
            feedback: 'Feil. Strømforbruk er et praktisk problem, men ikke en sikkerhetsrisiko.',
          },
          {
            id: 'c',
            text: 'At enhetene er for store',
            isCorrect: false,
            feedback: 'Feil. Fysisk størrelse har ingenting med sikkerhet å gjøre.',
          },
          {
            id: 'd',
            text: 'At WiFi-signalet er for svakt',
            isCorrect: false,
            feedback: 'Feil. Signalstyrke påvirker funksjonalitet, ikke sikkerhet direkte.',
          },
        ],
        solution: 'Standardpassord er den største sikkerhetsrisikoen fordi hackere kjenner til de vanligste standardpassordene og kan enkelt ta kontroll over enheter som ikke har fått endret passord. I 2016 tok Mirai-botnett kontroll over hundretusenvis av IoT-enheter med standardpassord og brukte dem til store nettangrep. Alltid endre standardpassord til et sterkt, unikt passord!',
      },
    },

    // ========== OPPGAVE 15: SMARTBY-SYSTEMER ==========
    {
      id: 'nat10-6-1-ex-15a-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-1-ex-15a',
        number: '6.15a',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En smartby bruker mange teknologiske systemer som kommuniserer med hverandre. Beskriv hvordan tre ulike smartby-systemer (trafikkstyring, avfallshåndtering og energi) kan samarbeide for å gjøre byen mer effektiv. Bruk begrepene input, prosess, output og tilbakekobling i forklaringen din.',
        solution: `**Tre samarbeidende smartby-systemer:**

**System 1: Smart trafikkstyring**

- **Input:** Sensorer i veibanen teller biler, kameraer registrerer trafikktetthet, GPS-data fra busser og biler
- **Prosess:** Sentralcomputer analyserer trafikkdata i sanntid
- **Output:** Trafikklys justerer grønntid, varselskilt oppdateres, navigasjonsapper foreslår alternative ruter
- **Tilbakekobling:** Etter endring av lysene måler sensorene om trafikken flyter bedre

**System 2: Smart avfallshåndtering**

- **Input:** Fyllsensorer i søppelbeholdere måler hvor fulle de er
- **Prosess:** Sentral server samler data fra alle beholdere, planlegger optimale tømmeruter
- **Output:** Renovasjonsbilene får optimaliserte ruter (tømmer bare beholdere som trenger det)
- **Tilbakekobling:** GPS i renovasjonsbilene bekrefter at beholdere er tømt, fyllsensoren nullstilles

**System 3: Smart energi**

- **Input:** Strømmålere i alle bygninger, værsensorer, solcelle-produksjonsdata
- **Prosess:** Energiselskapet analyserer forbruk vs. produksjon, forutsier behov
- **Output:** Justerer strømproduksjon, styrer smartbelysning, sender prisinfo til forbrukere
- **Tilbakekobling:** Strømmålere verifiserer at forbruket justeres som forventet

**Samarbeid mellom systemene:**

1. **Trafikk + Energi:**
   - Trafikksystemet vet når det er mange biler → Energisystemet dimmer gatelysene der det er færre biler
   - Trafikklys slår seg av om natten der det ikke er trafikk

2. **Avfall + Trafikk:**
   - Renovasjonsbilene unngår rushtidstrafikk (data fra trafikksystemet)
   - Trafikklys gir renovasjonsbiler prioritet i grønn bølge

3. **Alle tre:**
   - Alle systemer deler data via en felles plattform
   - Kommunen får dashboard med oversikt over alle systemer
   - Innbyggere kan se status via en app (bussruter, søppelhenting, strømpris)

**Resultat:** Byen sparer energi, reduserer utslipp, forbedrer trafikkflyt og gir bedre tjenester til innbyggerne.`,
      },
    },

    // ========== OPPGAVE 16: HVERDAGSSYSTEM ==========
    {
      id: 'nat10-6-1-ex-16-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-1-ex-16',
        number: '6.16',
        type: 'exercise',
        difficulty: 'lett',
        task: 'Velg en teknologisk enhet du bruker daglig (for eksempel en vaskemaskin, kaffemaskin, eller automatisk garasjeport). Beskriv denne som et teknologisk system med input, prosess og output.',
        solution: `**Eksempelsvar: Kaffemaskin**

**Input:**
- Du fyller på vann i tanken
- Du legger i kaffekapsel eller malt kaffe
- Du trykker på knappen for ønsket kaffetype (espresso, lungo, etc.)

**Prosess:**
- Maskinen varmer opp vannet til riktig temperatur (ca. 90-96°C)
- Pumpen presser varmt vann gjennom kaffegruten under høyt trykk
- Vannet trekker ut smaksstoffer, oljer og koffein fra kaffen
- Brukt grut samles opp i avfallsbeholder

**Output:**
- Ferdig kaffe i koppen din
- Signal (lys/lyd) som forteller at kaffen er klar

Mer avanserte kaffemaskiner har også tilbakekobling: temperatursensor sikrer at vannet holder riktig temperatur gjennom hele bryggeprosessen.`,
      },
    },

    // ========== EKSEMPEL: ROBOTSTØVSUGER ==========
    {
      id: 'nat10-6-1-example-robotstovsuger',
      type: 'example',
      title: 'Eksempel: Robotstøvsuger som teknologisk system',
      problem: 'En robotstøvsuger kjører rundt i et hus og støvsuger automatisk. Beskriv robotstøvsugeren som et teknologisk system med input, prosess, output og tilbakekobling. Hvilke sensorer bruker den?',
      solution: `**Løsning:**

**Input:**
- Infrarøde sensorer oppdager hindringer (møbler, vegger)
- Fallsensorer oppdager trapper og kanter
- Støvsensor måler mengden støv som suges opp
- Hjulrotasjonssensorer måler avstand kjørt
- Brukerinput via app eller knapper (start, stopp, tidspunkt)
- Ladestasjonens infrarøde signal (for å finne tilbake)

**Prosess:**
- Prosessoren lager et kart over rommet ved hjelp av sensordata
- Algoritmen beregner den mest effektive ruten for å dekke hele gulvet
- Motorer styrer hjulene og sugeenheten
- Programmet bestemmer sugekraft basert på støvnivå

**Output:**
- Rent gulv (hovedformålet)
- Bevegelse i beregnet mønster
- Lyd- og lyssignaler (ferdig, feil, lav battery)
- Statusrapport til app (rengjort areal, tid brukt)

**Tilbakekobling:**
1. **Hindring oppdaget:** Sensoren melder fra → prosessoren beregner ny rute → roboten snur
2. **Mye støv:** Støvsensoren måler høyt nivå → roboten øker sugekraften → sensoren sjekker om nivået synker
3. **Lavt batteri:** Batterisensoren melder fra → roboten navigerer tilbake til ladestasjonen → lading starter → sensoren sjekker batterinivå
4. **Kartoppdatering:** Hjulsensorene måler bevegelse → kartet oppdateres → ruten justeres

**Sensorer brukt:**
| Sensor | Type | Funksjon |
|--------|------|----------|
| Infrarød | Avstand | Oppdager hindringer |
| Fallsensor | Bevegelse | Forhindrer fall fra trapper |
| Støvsensor | Optisk | Måler støvmengde |
| Hjulencoder | Rotasjon | Måler avstand og posisjon |
| Batterisensor | Spenning | Overvåker batterinivå |
| Gyrosensor | Orientering | Holder styr på retning |`,
    },

    // ========== OPPGAVE 17: ROBOTSTØVSUGER ==========
    {
      id: 'nat10-6-1-ex-17-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-1-ex-17',
        number: '6.17',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En robotstøvsuger oppdager at den nærmer seg en trapp. Hva er riktig rekkefølge i tilbakekoblingssløyfen?',
        options: [
          { id: 'a', text: 'Roboten snur → Fallsensoren registrerer kanten → Prosessoren bestemmer ny retning', isCorrect: false, feedback: 'Feil rekkefølge. Sensoren må registrere faren før roboten kan reagere.' },
          { id: 'b', text: 'Fallsensoren registrerer kanten → Prosessoren bestemmer ny retning → Roboten snur', isCorrect: true, feedback: 'Riktig! Først registrerer sensoren (input), deretter behandler prosessoren informasjonen, og til slutt utføres handlingen (output).' },
          { id: 'c', text: 'Prosessoren bestemmer ny retning → Fallsensoren registrerer kanten → Roboten snur', isCorrect: false, feedback: 'Prosessoren kan ikke bestemme retning uten først å få informasjon fra sensoren.' },
          { id: 'd', text: 'Roboten snur → Prosessoren bestemmer ny retning → Fallsensoren registrerer kanten', isCorrect: false, feedback: 'Feil. Handlingen kan ikke skje før informasjonen er mottatt og behandlet.' },
        ],
        solution: 'I et teknologisk system følger tilbakekobling alltid mønsteret: **sensor registrerer** (input) → **prosessor behandler** (prosess) → **handling utføres** (output). Fallsensoren oppdager kanten, prosessoren beregner ny retning, og motorene snur roboten.',
      },
    },

    // ========== OPPGAVE 18: POSITIV VS. NEGATIV TILBAKEKOBLING ==========
    {
      id: 'nat10-6-1-ex-18-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-1-ex-18',
        number: '6.18',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar forskjellen mellom positiv og negativ tilbakekobling i teknologiske systemer. Gi minst ett eksempel på hver type. Hvorfor er negativ tilbakekobling mye vanligere i teknologiske systemer enn positiv tilbakekobling?',
        hints: ['Tenk på hva som skjer med systemet over tid ved hver type tilbakekobling.', 'Negativ tilbakekobling motvirker endringer, mens positiv tilbakekobling forsterker dem.'],
        solution: `**Negativ tilbakekobling** motvirker endringer og holder systemet stabilt. Outputen fra systemet påvirker inputen slik at avviket fra ønsket verdi reduseres.

**Eksempel:** Termostat i et oppvarmingssystem
- Temperaturen synker under 20°C → varmen slås PÅ
- Temperaturen stiger over 22°C → varmen slås AV
- Systemet holder seg stabilt rundt ønsket temperatur

**Positiv tilbakekobling** forsterker endringer. Outputen fra systemet påvirker inputen slik at avviket fra utgangspunktet øker.

**Eksempel:** Mikrofon foran høyttaler (akustisk tilbakekobling)
- Mikrofonen fanger opp lyd fra høyttaleren → lyden forsterkes → høyttaleren spiller den forsterkede lyden → mikrofonen fanger opp enda sterkere lyd → lyden blir sterkere og sterkere → hylende lyd (feedback)

**Hvorfor negativ tilbakekobling er vanligst:**

1. **Stabilitet:** De fleste teknologiske systemer er designet for å holde verdier stabile (temperatur, hastighet, trykk). Negativ tilbakekobling sørger for dette.
2. **Kontroll:** Med negativ tilbakekobling kan systemet korrigere seg selv. Positiv tilbakekobling fører til ukontrollert vekst.
3. **Sikkerhet:** Positiv tilbakekobling kan føre til farlige situasjoner (overoppheting, eksplosjon, etc.) hvis den ikke stoppes.
4. **Eksempel fra kjernekraft:** Positiv tilbakekobling i en kjernereaktor ville føre til ukontrollert kjedereaksjon. Derfor bruker reaktorer negativ tilbakekobling (kontrollstaver) for å holde reaksjonen stabil.

Positiv tilbakekobling brukes bevisst i noen systemer, for eksempel i oscillatorer (klokker, radiosendere) der man ønsker at et signal skal bygge seg opp.`,
      },
    },

    // ========== OPPGAVE 19: BLOKKDIAGRAM ==========
    {
      id: 'nat10-6-1-ex-19-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-1-ex-19',
        number: '6.19',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tegn et blokkdiagram (input → prosess → output med tilbakekobling) for en automatisk lysstyrkeregulering i en smarttelefon. Beskriv hva som skjer i hvert steg når du tar telefonen med deg fra et mørkt rom ut i solen.',
        hints: ['Tenk på hvilken sensor som brukes og hva som justeres.'],
        solution: `**Blokkdiagram for automatisk lysstyrkeregulering:**

\`\`\`
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   SENSOR     │───▶│  PROSESSOR   │───▶│   SKJERM     │
│ (lyssensor)  │    │  (beregner   │    │ (justerer    │
│              │    │   lysstyrke) │    │  lysstyrke)  │
└──────────────┘    └──────────────┘    └──────────────┘
       ▲                                       │
       │            TILBAKEKOBLING             │
       └───────────────────────────────────────┘
\`\`\`

**Hva skjer steg for steg (mørkt rom → sollys):**

1. **Input (sensor):** Lyssensoren på telefonen måler omgivelseslyset. I det mørke rommet registrerer den lavt lysnivå (f.eks. 10 lux).

2. **Prosess:** Prosessoren mottar verdien fra lyssensoren. Den beregner at skjermen bør ha lav lysstyrke (f.eks. 20%) for å spare batteri og ikke blende brukeren.

3. **Output (skjerm):** Skjermens bakgrunnsbelysning settes til 20%.

4. **Du går ut i solen:**

5. **Input (sensor):** Lyssensoren registrerer plutselig mye høyere lysnivå (f.eks. 50 000 lux i direkte sollys).

6. **Prosess:** Prosessoren beregner at skjermen må være mye lysere for å være lesbar i sollys (f.eks. 100%).

7. **Output (skjerm):** Skjermens bakgrunnsbelysning økes gradvis til 100%.

8. **Tilbakekobling:** Lyssensoren fortsetter å måle. Hvis du går i skyggen igjen, registrerer den lavere lysnivå, og prosessoren reduserer lysstyrken tilsvarende.

**Type tilbakekobling:** Negativ tilbakekobling – systemet motvirker endringer i lysforhold ved å justere skjermens lysstyrke motsatt av omgivelseslyset.`,
      },
    },
  ],
  exercises: [], // Oppgavene er embedded i content
};

// ============================================================================
// Kapittel 6.3: Programmering i naturfag
// LK20: Bruke digitale verktøy til datainnsamling, analyse og presentasjon
// ============================================================================

export const CHAPTER_NAT10_6_3: TextbookChapter = {
  id: 'naturfag-10-6-3',
  courseId: 'naturfag-10',
  chapterNumber: '6.3',
  title: 'Programmering i naturfag',
  description: 'Bruk programmering til å analysere data og simulere naturfenomener.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke digitale verktøy til datainnsamling, databehandling og presentasjon',
    'utforske og teste teknologiske systemer',
    'forstå grunnleggende programmeringskonsepter',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'nat10-6-3-intro',
      type: 'text',
      content: `## Programmering i naturfag

Tenk deg at du har målt temperaturen hver time i en uke. Skal du regne ut gjennomsnittet for hånd? Eller lage en graf med tusener av datapunkter? Det ville tatt evig tid!

Her kommer **programmering** inn i bildet. Med programmering kan du:
- Automatisere kjedelige beregninger
- Analysere store datasett på sekunder
- Visualisere resultater med fine grafer
- Simulere naturfenomener som er umulige å teste i virkeligheten

I dette kapitlet lærer du:
- Grunnleggende programmeringsbegreper
- Hvordan Python brukes i naturfag
- Dataanalyse med kode
- Visualisering av data
- Enkle simuleringer av naturprosesser`,
    },

    // ========== DEFINISJON: ALGORITME ==========
    {
      id: 'nat10-6-3-def-algoritme',
      type: 'definition',
      title: 'Algoritme',
      content: 'En algoritme er en steg-for-steg-oppskrift som beskriver nøyaktig hvordan en oppgave skal løses. Algoritmer er grunnlaget for all programmering. Et hverdagseksempel er en oppskrift for å bake en kake: den beskriver rekkefølgen av steg du må utføre for å nå resultatet. I programmering skrives algoritmene som kode som datamaskinen kan utføre.',
    },

    // ========== DEFINISJON: VARIABEL ==========
    {
      id: 'nat10-6-3-def-variabel',
      type: 'definition',
      title: 'Variabel',
      content: 'En variabel er et navngitt lagringssted i datamaskinen der du kan lagre en verdi. Verdien kan være et tall, tekst, en liste, eller sann/usann (boolsk verdi). Du kan tenke på en variabel som en merket boks som inneholder informasjon. Variabelen kan endres underveis i programmet. Eksempel: temperatur = 20 lagrer tallet 20 i variabelen kalt "temperatur".',
    },

    // ========== DEFINISJON: LØKKE ==========
    {
      id: 'nat10-6-3-def-lokke',
      type: 'definition',
      title: 'Løkke (loop)',
      content: 'En løkke er en programmeringsstruktur som gjentar en blokk med kode et bestemt antall ganger, eller så lenge en betingelse er oppfylt. En for-løkke brukes når du vet hvor mange ganger koden skal gjentas, mens en while-løkke brukes når du vil gjenta koden så lenge en betingelse er sann. Løkker er essensielle for å behandle store datasett effektivt.',
    },

    // ========== DEFINISJON: FUNKSJON ==========
    {
      id: 'nat10-6-3-def-funksjon',
      type: 'definition',
      title: 'Funksjon',
      content: 'En funksjon er en gjenbrukbar blokk med kode som utfører en bestemt oppgave. Du definerer funksjonen én gang, og kan deretter kalle (bruke) den mange ganger i programmet. Funksjoner tar ofte inn parametre (input) og returnerer et resultat (output). Eksempel: en funksjon celsius_til_fahrenheit(celsius) tar inn en temperatur i Celsius og returnerer verdien i Fahrenheit.',
    },

    // ========== HVORFOR PROGRAMMERING I NATURFAG? ==========
    {
      id: 'nat10-6-3-hvorfor',
      type: 'text',
      content: `## Hvorfor programmering i naturfag?

### 1. Automatisering
I stedet for å gjøre samme beregning 1000 ganger, lar du datamaskinen gjøre det for deg.

**Eksempel:** Du har målt vekten til 100 steiner. Med programmering kan du raskt:
- Finne gjennomsnittet
- Finne den tyngste og letteste steinen
- Sortere steinene etter vekt

### 2. Dataanalyse
Moderne naturfag handler om å samle og analysere data. Programmering lar deg:
- Lese data fra filer
- Finne mønstre i dataene
- Trekke konklusjoner basert på statistikk

**Eksempel:** Analysere klimadata for å se temperaturutvikling over tid.

### 3. Visualisering
Grafer og diagrammer gjør data lettere å forstå. Med programmering kan du:
- Lage linjediagrammer
- Lage søylediagrammer
- Lage spredningsplott

**Eksempel:** Visualisere hvordan plantevekst påvirkes av vannmengde.

### 4. Simulering
Noen eksperimenter er for farlige, dyre eller tidkrevende. Med simulering kan du:
- Modellere kjemiske reaksjoner
- Simulere bevegelse av planeter
- Teste hypoteser uten fysiske eksperimenter

**Eksempel:** Simulere hvordan en populasjon av kaniner utvikler seg over tid.`,
    },

    // ========== GRUNNLEGGENDE BEGREPER ==========
    {
      id: 'nat10-6-3-grunnleggende',
      type: 'text',
      content: `## Grunnleggende programmeringsbegreper

### 1. Variabler
En **variabel** er som en boks der du kan lagre informasjon.

\`\`\`python
# Lagre temperatur i en variabel
temperatur = 20
navn = "Oslo"
er_kaldt = False
\`\`\`

**Analogi:** Tenk på variabelen som en etikett på en boks. Boksen kan inneholde tall, tekst eller sann/usann-verdier.

### 2. Løkker
En **løkke** gjentar en handling flere ganger.

**For-løkke:** Gjenta et bestemt antall ganger
\`\`\`python
# Skriv ut temperatur for 5 dager
temperaturer = [18, 20, 22, 19, 21]
for temp in temperaturer:
    print(f"Temperaturen er {temp}°C")
\`\`\`

**While-løkke:** Gjenta så lenge en betingelse er sann
\`\`\`python
# Tell ned fra 10 til 0
tall = 10
while tall >= 0:
    print(tall)
    tall = tall - 1
\`\`\`

### 3. Betingelser (if-else)
En **betingelse** lar programmet ta beslutninger.

\`\`\`python
temperatur = 25

if temperatur > 30:
    print("Veldig varmt!")
elif temperatur > 20:
    print("Behagelig temperatur")
else:
    print("Kaldt")
\`\`\`

### 4. Funksjoner
En **funksjon** er en gjenbrukbar blokk med kode.

\`\`\`python
def celsius_til_fahrenheit(celsius):
    fahrenheit = celsius * 9/5 + 32
    return fahrenheit

# Bruk funksjonen
temp_f = celsius_til_fahrenheit(20)
print(f"20°C = {temp_f}°F")
\`\`\`

**Fordel:** Du trenger bare å skrive koden én gang, så kan du bruke den mange ganger!`,
    },

    // ========== PYTHON I NATURFAG ==========
    {
      id: 'nat10-6-3-python',
      type: 'text',
      content: `## Python i naturfag

**Python** er et populært programmeringsspråk som er lett å lære og kraftig nok til profesjonell forskning.

### Hvorfor Python?
- Lett å lese og skrive
- Mye brukt i vitenskapelig forskning
- Mange biblioteker for naturfag (NumPy, Matplotlib, Pandas)
- Gratis og åpen kildekode

### Eksempel: Beregne gjennomsnitt
\`\`\`python
# Temperaturer målt over en uke (°C)
temperaturer = [18, 20, 22, 19, 21, 23, 20]

# Beregn gjennomsnittet
gjennomsnitt = sum(temperaturer) / len(temperaturer)

print(f"Gjennomsnittstemperatur: {gjennomsnitt:.1f}°C")
# Output: Gjennomsnittstemperatur: 20.4°C
\`\`\`

### Eksempel: Finne høyeste og laveste verdi
\`\`\`python
# Finn høyeste og laveste temperatur
hogste = max(temperaturer)
laveste = min(temperaturer)

print(f"Høyeste: {hogste}°C")
print(f"Laveste: {laveste}°C")
# Output:
# Høyeste: 23°C
# Laveste: 18°C
\`\`\``,
    },

    // ========== DEFINISJON: BIBLIOTEK ==========
    {
      id: 'nat10-6-3-def-bibliotek',
      type: 'definition',
      title: 'Bibliotek (i programmering)',
      content: 'Et bibliotek (library) er en samling ferdig-skrevet kode som du kan bruke i dine egne programmer. I stedet for å skrive alt fra bunnen av, kan du importere et bibliotek som allerede har den funksjonaliteten du trenger. I Python er Matplotlib et bibliotek for å lage grafer, NumPy er et bibliotek for beregninger, og Pandas er et bibliotek for dataanalyse. Å bruke biblioteker er som å bruke ferdige byggesteiner i stedet for å lage alt selv.',
    },

    // ========== EKSEMPEL: ALGORITME FOR GJENNOMSNITT ==========
    {
      id: 'nat10-6-3-example-algoritme',
      type: 'example',
      title: 'Eksempel: Algoritme for å beregne gjennomsnitt',
      problem: 'Skriv en algoritme (steg-for-steg) for å beregne gjennomsnittstemperaturen fra en liste med temperaturer, og vis deretter Python-koden.',
      solution: `**Algoritme (steg-for-steg):**

1. Start med en liste med temperaturer
2. Legg sammen alle temperaturene (finn summen)
3. Tell hvor mange temperaturer det er
4. Del summen på antallet
5. Skriv ut resultatet

**Python-kode:**

\`\`\`python
# Steg 1: Liste med temperaturer
temperaturer = [18, 20, 22, 19, 21, 23, 20]

# Steg 2: Finn summen
total = sum(temperaturer)  # total = 143

# Steg 3: Tell antall
antall = len(temperaturer)  # antall = 7

# Steg 4: Beregn gjennomsnitt
gjennomsnitt = total / antall  # gjennomsnitt = 20.43

# Steg 5: Skriv ut
print(f"Gjennomsnitt: {gjennomsnitt:.1f}°C")
# Output: Gjennomsnitt: 20.4°C
\`\`\`

Legg merke til at hvert steg i algoritmen tilsvarer en linje i koden. Å skrive algoritmen først gjør det lettere å programmere!`,
    },

    // ========== EKSEMPEL: FOR-LØKKE TIL FILTRERING ==========
    {
      id: 'nat10-6-3-example-filter',
      type: 'example',
      title: 'Eksempel: Bruke løkke til å filtrere data',
      problem: 'Du har målt nedbør i mm for 10 dager: [0, 5, 12, 0, 3, 0, 8, 0, 15, 2]. Skriv Python-kode som finner alle dager med nedbør (mer enn 0 mm) og beregner gjennomsnittlig nedbørsmengde for regnværsdagene.',
      solution: `**Løsning:**

\`\`\`python
# Data: Nedbør i mm for 10 dager
nedbor = [0, 5, 12, 0, 3, 0, 8, 0, 15, 2]

# Finn dager med nedbør
regnvarsdager = []
for mm in nedbor:
    if mm > 0:
        regnvarsdager.append(mm)

# Beregn gjennomsnitt for regnværsdager
gjennomsnitt = sum(regnvarsdager) / len(regnvarsdager)

print(f"Antall regnværsdager: {len(regnvarsdager)}")
print(f"Gjennomsnittlig nedbør på regnværsdager: {gjennomsnitt:.1f} mm")

# Output:
# Antall regnværsdager: 6
# Gjennomsnittlig nedbør på regnværsdager: 7.5 mm
\`\`\`

**Forklaring:**
- Løkken går gjennom hver dag
- \`if mm > 0\` filtrerer ut dager uten nedbør
- \`append()\` legger til verdien i den nye listen
- Til slutt beregner vi gjennomsnittet bare for regnværsdagene`,
    },

    // ========== EKSEMPEL: FUNKSJON FOR BMI ==========
    {
      id: 'nat10-6-3-example-funksjon-bmi',
      type: 'example',
      title: 'Eksempel: Funksjon for å beregne BMI',
      problem: 'Skriv en Python-funksjon som beregner kroppsmasseindeks (BMI). Formelen er: BMI = vekt / (høyde)², der vekt er i kg og høyde er i meter.',
      solution: `**Løsning:**

\`\`\`python
def beregn_bmi(vekt_kg, hoyde_m):
    """Beregner BMI fra vekt (kg) og høyde (m)"""
    bmi = vekt_kg / (hoyde_m ** 2)
    return bmi

def bmi_kategori(bmi):
    """Returnerer BMI-kategori basert på verdi"""
    if bmi < 18.5:
        return "Undervekt"
    elif bmi < 25:
        return "Normalvekt"
    elif bmi < 30:
        return "Overvekt"
    else:
        return "Fedme"

# Test funksjonen
vekt = 70
hoyde = 1.75
bmi = beregn_bmi(vekt, hoyde)
kategori = bmi_kategori(bmi)

print(f"BMI: {bmi:.1f}")
print(f"Kategori: {kategori}")
# Output:
# BMI: 22.9
# Kategori: Normalvekt
\`\`\`

**Forklaring:**
- \`beregn_bmi()\` tar inn vekt og høyde som parametre og returnerer BMI
- \`bmi_kategori()\` bruker if-elif-else for å klassifisere BMI
- Funksjoner gjør koden ryddigere og gjenbrukbar`,
    },

    // ========== OPPGAVE 1: VARIABLER ==========
    {
      id: 'nat10-6-3-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-3-ex-1',
        number: '6.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en variabel i programmering?',
        options: [
          'En matematisk formel',
          'En boks der du kan lagre informasjon',
          'En type datamaskin',
          'En fil på datamaskinen',
        ],
        answer: 1,
        solution: `**Svar: En boks der du kan lagre informasjon**

En **variabel** er som en navngitt boks der du kan lagre verdier (tall, tekst, sann/usann). Du kan hente ut verdien senere eller endre den.

Eksempel:
\`\`\`python
temperatur = 20  # Lagrer tallet 20 i variabelen "temperatur"
navn = "Oslo"    # Lagrer teksten "Oslo" i variabelen "navn"
\`\`\``,
      },
    },

    // ========== OPPGAVE 2: LØKKER ==========
    {
      id: 'nat10-6-3-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-3-ex-2',
        number: '6.3.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva gjør en løkke i programmering?',
        options: [
          'Lagrer data',
          'Gjentar en handling flere ganger',
          'Sletter filer',
          'Lager grafer',
        ],
        answer: 1,
        solution: `**Svar: Gjentar en handling flere ganger**

En **løkke** (loop) er en programmeringsstruktur som gjentar en handling flere ganger.

Eksempel:
\`\`\`python
# Skriv ut tallene 1 til 5
for tall in [1, 2, 3, 4, 5]:
    print(tall)
\`\`\`

Dette er mye mer effektivt enn å skrive:
\`\`\`python
print(1)
print(2)
print(3)
print(4)
print(5)
\`\`\``,
      },
    },

    // ========== OPPGAVE 3: BETINGELSER ==========
    {
      id: 'nat10-6-3-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-3-ex-3',
        number: '6.3.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva vil følgende kode skrive ut?\n\n```python\ntemp = 15\nif temp > 20:\n    print("Varmt")\nelse:\n    print("Kaldt")\n```',
        options: [
          'Varmt',
          'Kaldt',
          '15',
          'Ingenting',
        ],
        answer: 1,
        solution: `**Svar: Kaldt**

La oss gå gjennom koden steg for steg:

1. \`temp = 15\` → Lagrer verdien 15 i variabelen temp
2. \`if temp > 20:\` → Er 15 større enn 20? **NEI**
3. Siden betingelsen er usann, hopper programmet til \`else:\`-blokken
4. \`print("Kaldt")\` → Skriver ut "Kaldt"

**Resultat:** Programmet skriver ut "Kaldt"`,
      },
    },

    // ========== DATAANALYSE MED KODE ==========
    {
      id: 'nat10-6-3-dataanalyse',
      type: 'text',
      content: `## Dataanalyse med kode

Programmering blir virkelig kraftig når du analyserer **store datasett**.

### Eksempel: Analyse av plantevekst

Du har målt høyden på planter som får ulik mengde vann:

\`\`\`python
# Data: [vann_ml, høyde_cm]
data = [
    [10, 5],
    [20, 8],
    [30, 12],
    [40, 15],
    [50, 18],
    [60, 20],
    [70, 19],
    [80, 18],
]

# Finn gjennomsnittlig høyde
hoyder = [punkt[1] for punkt in data]
gjennomsnitt = sum(hoyder) / len(hoyder)

print(f"Gjennomsnittlig høyde: {gjennomsnitt:.1f} cm")
# Output: Gjennomsnittlig høyde: 14.4 cm
\`\`\`

### Finn optimal vannmengde

\`\`\`python
# Finn datapunktet med høyest plante
beste_punkt = max(data, key=lambda punkt: punkt[1])
best_vann = beste_punkt[0]
best_hoyde = beste_punkt[1]

print(f"Optimal vannmengde: {best_vann} ml → høyde {best_hoyde} cm")
# Output: Optimal vannmengde: 60 ml → høyde 20 cm
\`\`\`

**Konklusjon:** Med kode kan vi raskt finne at 60 ml vann gir høyest plantevekst!`,
    },

    // ========== OPPGAVE 4: ENKEL KODE ==========
    {
      id: 'nat10-6-3-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-3-ex-4',
        number: '6.3.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en Python-funksjon som tar inn en temperatur i Celsius og returnerer temperaturen i Fahrenheit.\n\nFormelen er: F = C × 9/5 + 32',
        multipleChoiceOptions: [
          'def celsius_til_fahrenheit(celsius): return celsius * 9/5 + 32',
          'def celsius_til_fahrenheit(celsius): return celsius * 5/9 + 32',
          'def celsius_til_fahrenheit(celsius): return celsius + 32',
          'def celsius_til_fahrenheit(celsius): return (celsius - 32) * 5/9',
        ],
        solution: `**Løsning:**

\`\`\`python
def celsius_til_fahrenheit(celsius):
    fahrenheit = celsius * 9/5 + 32
    return fahrenheit

# Test funksjonen
print(celsius_til_fahrenheit(0))   # Output: 32.0
print(celsius_til_fahrenheit(20))  # Output: 68.0
print(celsius_til_fahrenheit(100)) # Output: 212.0
\`\`\`

**Forklaring:**

1. \`def celsius_til_fahrenheit(celsius):\` → Definerer en funksjon med én parameter
2. \`fahrenheit = celsius * 9/5 + 32\` → Beregner Fahrenheit fra Celsius
3. \`return fahrenheit\` → Returnerer resultatet

**Verifisering:**
- 0°C = 32°F ✓ (vannets frysepunkt)
- 100°C = 212°F ✓ (vannets kokepunkt)`,
      },
    },

    // ========== OPPGAVE 5: ANALYSERE LISTE ==========
    {
      id: 'nat10-6-3-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-3-ex-5',
        number: '6.3.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du har målt følgende temperaturer (°C): [18, 22, 20, 25, 19, 21, 23]\n\nSkriv Python-kode som:\na) Finner gjennomsnittstemperaturen\nb) Finner høyeste og laveste temperatur\nc) Teller hvor mange dager som hadde temperatur over 20°C',
        multipleChoiceOptions: [
          'a) 21.1°C, b) Høyeste: 25°C, Laveste: 18°C, c) 4 dager',
          'a) 20.0°C, b) Høyeste: 25°C, Laveste: 18°C, c) 3 dager',
          'a) 21.1°C, b) Høyeste: 23°C, Laveste: 19°C, c) 4 dager',
          'a) 148°C, b) Høyeste: 25°C, Laveste: 18°C, c) 7 dager',
        ],
        solution: `**Løsning:**

\`\`\`python
# Data
temperaturer = [18, 22, 20, 25, 19, 21, 23]

# a) Gjennomsnitt
gjennomsnitt = sum(temperaturer) / len(temperaturer)
print(f"Gjennomsnitt: {gjennomsnitt:.1f}°C")
# Output: Gjennomsnitt: 21.1°C

# b) Høyeste og laveste
hogste = max(temperaturer)
laveste = min(temperaturer)
print(f"Høyeste: {hogste}°C")
print(f"Laveste: {laveste}°C")
# Output:
# Høyeste: 25°C
# Laveste: 18°C

# c) Tell dager over 20°C
antall_varme_dager = 0
for temp in temperaturer:
    if temp > 20:
        antall_varme_dager = antall_varme_dager + 1

print(f"Dager over 20°C: {antall_varme_dager}")
# Output: Dager over 20°C: 4

# Alternativ (mer elegant):
antall_varme_dager = sum(1 for temp in temperaturer if temp > 20)
print(f"Dager over 20°C: {antall_varme_dager}")
\`\`\`

**Forklaring:**

**a)** \`sum(temperaturer)\` summerer alle verdiene, \`len(temperaturer)\` gir antall verdier (7)

**b)** \`max()\` og \`min()\` finner høyeste og laveste verdi

**c)** Løkken går gjennom alle temperaturer og teller opp hvis temperaturen er over 20°C`,
      },
    },

    // ========== OPPGAVE 6: FUNKSJON FOR FART ==========
    {
      id: 'nat10-6-3-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-3-ex-6',
        number: '6.3.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en Python-funksjon som beregner fart.\n\nFormelen er: fart = strekning / tid\n\nFunksjonen skal ta inn strekning (meter) og tid (sekunder), og returnere farten i m/s.',
        multipleChoiceOptions: [
          'def beregn_fart(strekning, tid): return strekning / tid',
          'def beregn_fart(strekning, tid): return tid / strekning',
          'def beregn_fart(strekning, tid): return strekning * tid',
          'def beregn_fart(strekning, tid): return strekning + tid',
        ],
        solution: `**Løsning:**

\`\`\`python
def beregn_fart(strekning, tid):
    fart = strekning / tid
    return fart

# Test funksjonen
print(beregn_fart(100, 10))  # Output: 10.0 m/s
print(beregn_fart(50, 5))    # Output: 10.0 m/s
print(beregn_fart(200, 20))  # Output: 10.0 m/s
\`\`\`

**Forbedret versjon med feilhåndtering:**

\`\`\`python
def beregn_fart(strekning, tid):
    if tid == 0:
        return "Feil: Tiden kan ikke være 0!"
    fart = strekning / tid
    return fart

# Test
print(beregn_fart(100, 10))  # Output: 10.0 m/s
print(beregn_fart(100, 0))   # Output: Feil: Tiden kan ikke være 0!
\`\`\`

**Forklaring:**

1. Funksjonen tar inn to parametre: \`strekning\` og \`tid\`
2. Den beregner fart ved å dele strekning på tid
3. Den forbedrede versjonen sjekker om tiden er 0 (for å unngå divisjon med null)`,
      },
    },

    // ========== VISUALISERING ==========
    {
      id: 'nat10-6-3-visualisering',
      type: 'text',
      content: `## Visualisering av data

Grafer gjør det lettere å se mønstre i data. I Python bruker vi biblioteket **Matplotlib**.

### Eksempel: Linjediagram av temperatur

\`\`\`python
import matplotlib.pyplot as plt

# Data
dager = [1, 2, 3, 4, 5, 6, 7]
temperaturer = [18, 20, 22, 19, 21, 23, 20]

# Lag linjediagram
plt.plot(dager, temperaturer, marker='o')
plt.xlabel('Dag')
plt.ylabel('Temperatur (°C)')
plt.title('Temperatur over en uke')
plt.grid(True)
plt.show()
\`\`\`

**Resultat:** En graf som viser hvordan temperaturen varierer over uken.

### Eksempel: Søylediagram

\`\`\`python
import matplotlib.pyplot as plt

# Data: Plantehøyder med ulik vannmengde
vann = [10, 20, 30, 40, 50, 60, 70, 80]
hoyder = [5, 8, 12, 15, 18, 20, 19, 18]

# Lag søylediagram
plt.bar(vann, hoyder, color='green')
plt.xlabel('Vann (ml)')
plt.ylabel('Høyde (cm)')
plt.title('Plantevekst vs. vannmengde')
plt.show()
\`\`\`

**Fordel:** Du ser tydelig at 60 ml vann gir best vekst!`,
    },

    // ========== OPPGAVE 7: VISUALISERING ==========
    {
      id: 'nat10-6-3-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-3-ex-7',
        number: '6.3.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du har målt høyden til en plante hver dag i 5 dager:\n- Dag 1: 2 cm\n- Dag 2: 4 cm\n- Dag 3: 7 cm\n- Dag 4: 11 cm\n- Dag 5: 16 cm\n\nSkriv Python-kode som lager et linjediagram av veksten.',
        multipleChoiceOptions: [
          "plt.plot([1,2,3,4,5], [2,4,7,11,16]) med økende linjediagram",
          "plt.bar([1,2,3,4,5], [2,4,7,11,16]) med søylediagram",
          "plt.scatter([1,2,3,4,5], [2,4,7,11,16]) med punktdiagram",
          "plt.pie([2,4,7,11,16]) med kakediagram",
        ],
        solution: `**Løsning:**

\`\`\`python
import matplotlib.pyplot as plt

# Data
dager = [1, 2, 3, 4, 5]
hoyder = [2, 4, 7, 11, 16]

# Lag linjediagram
plt.plot(dager, hoyder, marker='o', color='green', linewidth=2)
plt.xlabel('Dag')
plt.ylabel('Høyde (cm)')
plt.title('Plantevekst over 5 dager')
plt.grid(True, linestyle='--', alpha=0.7)
plt.show()
\`\`\`

**Forklaring:**

- \`plt.plot(dager, hoyder)\` → Lager linjediagram
- \`marker='o'\` → Viser punkter på linjen
- \`color='green'\` → Grønn farge (passende for planter!)
- \`plt.xlabel()\` og \`plt.ylabel()\` → Etiketter på aksene
- \`plt.title()\` → Tittel på grafen
- \`plt.grid(True)\` → Viser rutenett for lettere lesing
- \`plt.show()\` → Viser grafen

**Observasjon:** Grafen viser at planteveksten akselererer over tid!`,
      },
    },

    // ========== OPPGAVE 8: SØYLEDIAGRAM ==========
    {
      id: 'nat10-6-3-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-3-ex-8',
        number: '6.3.8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du teller antall ulike insekter i hagen:\n- Bier: 15\n- Maur: 42\n- Sommerfugler: 8\n- Biller: 23\n\nLag et søylediagram som viser fordelingen.',
        multipleChoiceOptions: [
          "plt.bar(['Bier','Maur','Sommerfugler','Biller'], [15,42,8,23])",
          "plt.plot(['Bier','Maur','Sommerfugler','Biller'], [15,42,8,23])",
          "plt.pie([15,42,8,23])",
          "plt.scatter([15,42,8,23], [1,2,3,4])",
        ],
        solution: `**Løsning:**

\`\`\`python
import matplotlib.pyplot as plt

# Data
insekter = ['Bier', 'Maur', 'Sommerfugler', 'Biller']
antall = [15, 42, 8, 23]

# Lag søylediagram
plt.bar(insekter, antall, color=['gold', 'brown', 'purple', 'black'])
plt.xlabel('Type insekt')
plt.ylabel('Antall')
plt.title('Insekter i hagen')
plt.show()
\`\`\`

**Forklaring:**

- \`plt.bar()\` → Lager søylediagram
- \`color=[...]\` → Ulike farger for hver søyle (valgfritt, men pent!)
- Listen \`insekter\` brukes som etiketter på x-aksen
- Listen \`antall\` bestemmer høyden på søylene

**Resultat:** Du ser tydelig at det er flest maur (42) og færrest sommerfugler (8) i hagen!`,
      },
    },

    // ========== ENKLE SIMULERINGER ==========
    {
      id: 'nat10-6-3-simuleringer',
      type: 'text',
      content: `## Enkle simuleringer

Med programmering kan vi **simulere** naturprosesser som er umulige eller upraktiske å teste i virkeligheten.

### Eksempel: Simulering av populasjonsvekst

La oss simulere hvordan en kaninpopulasjon vokser:

**Antakelser:**
- Starter med 10 kaniner
- Populasjonen dobler seg hvert år
- Simuler over 5 år

\`\`\`python
# Startpopulasjon
kaniner = 10
ar = 0

print(f"År {ar}: {kaniner} kaniner")

# Simuler 5 år
for ar in range(1, 6):
    kaniner = kaniner * 2
    print(f"År {ar}: {kaniner} kaniner")

# Output:
# År 0: 10 kaniner
# År 1: 20 kaniner
# År 2: 40 kaniner
# År 3: 80 kaniner
# År 4: 160 kaniner
# År 5: 320 kaniner
\`\`\`

**Observasjon:** Eksponentiell vekst! Populasjonen vokser ekstremt raskt.

### Eksempel: Simulering med begrensninger

I virkeligheten er det en grense for hvor mange kaniner miljøet kan støtte:

\`\`\`python
# Startpopulasjon
kaniner = 10
max_kaniner = 100  # Miljøet kan maks støtte 100 kaniner

for ar in range(1, 11):
    # Populasjonen vokser med 50% hvert år
    kaniner = kaniner * 1.5

    # Men kan ikke overstige miljøets kapasitet
    if kaniner > max_kaniner:
        kaniner = max_kaniner

    print(f"År {ar}: {kaniner:.0f} kaniner")
\`\`\`

**Resultat:** Populasjonen vokser til den når 100 kaniner, så stopper veksten.`,
    },

    // ========== OPPGAVE 9: DATAANALYSE PLANTEVEKST ==========
    {
      id: 'nat10-6-3-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-3-ex-9',
        number: '6.3.9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du har følgende data for plantevekst med ulik mengde gjødsel (gram) og høyde (cm):\n\n```python\ndata = [\n    [0, 5],\n    [5, 8],\n    [10, 12],\n    [15, 14],\n    [20, 15],\n    [25, 14],\n    [30, 12],\n]\n```\n\nSkriv kode som:\na) Finner optimal mengde gjødsel (som gir høyest plante)\nb) Beregner gjennomsnittlig plantehøyde\nc) Teller hvor mange planter som ble høyere enn 12 cm',
        multipleChoiceOptions: [
          'a) 20g gjødsel, b) 11.4 cm gjennomsnitt, c) 3 planter over 12 cm',
          'a) 15g gjødsel, b) 14.0 cm gjennomsnitt, c) 4 planter over 12 cm',
          'a) 25g gjødsel, b) 11.4 cm gjennomsnitt, c) 2 planter over 12 cm',
          'a) 10g gjødsel, b) 10.0 cm gjennomsnitt, c) 1 plante over 12 cm',
        ],
        solution: `**Løsning:**

\`\`\`python
data = [
    [0, 5],
    [5, 8],
    [10, 12],
    [15, 14],
    [20, 15],
    [25, 14],
    [30, 12],
]

# a) Finn optimal mengde gjødsel
beste_punkt = max(data, key=lambda punkt: punkt[1])
best_gjodsel = beste_punkt[0]
best_hoyde = beste_punkt[1]

print(f"a) Optimal gjødsel: {best_gjodsel} g → høyde {best_hoyde} cm")
# Output: Optimal gjødsel: 20 g → høyde 15 cm

# b) Gjennomsnittlig høyde
hoyder = [punkt[1] for punkt in data]
gjennomsnitt = sum(hoyder) / len(hoyder)

print(f"b) Gjennomsnittlig høyde: {gjennomsnitt:.1f} cm")
# Output: Gjennomsnittlig høyde: 11.4 cm

# c) Tell planter over 12 cm
antall_over_12 = 0
for punkt in data:
    hoyde = punkt[1]
    if hoyde > 12:
        antall_over_12 = antall_over_12 + 1

print(f"c) Planter over 12 cm: {antall_over_12}")
# Output: Planter over 12 cm: 3
\`\`\`

**Forklaring:**

**a)** \`max(data, key=lambda punkt: punkt[1])\` → Finner punktet med høyest verdi i andre kolonne (høyde)

**b)** \`[punkt[1] for punkt in data]\` → Henter ut alle høydene fra datasettet

**c)** Løkke som teller hvor mange planter som har høyde > 12 cm

**Konklusjon:** 20 gram gjødsel gir best resultat. Men merk at for mye gjødsel (30 g) faktisk reduserer veksten!`,
      },
    },

    // ========== OPPGAVE 10: ANALYSE TEMPERATURDATA ==========
    {
      id: 'nat10-6-3-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-3-ex-10',
        number: '6.3.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du har temperaturdata for to byer over en uke:\n\n```python\noslo = [18, 20, 22, 19, 21, 23, 20]\nbergen = [15, 16, 17, 16, 18, 19, 17]\n```\n\nSkriv kode som:\na) Finner gjennomsnitt for begge byene\nb) Finner hvilken by som hadde høyest temperatur\nc) Teller hvor mange dager Oslo var varmere enn Bergen\nd) Lager et linjediagram som sammenligner temperaturene',
        multipleChoiceOptions: [
          'a) Oslo: 20.4°C, Bergen: 16.9°C, b) Oslo 23°C, c) 7 dager Oslo varmere',
          'a) Oslo: 20.4°C, Bergen: 16.9°C, b) Bergen 19°C, c) 5 dager Oslo varmere',
          'a) Oslo: 143°C, Bergen: 118°C, b) Oslo 23°C, c) 3 dager Oslo varmere',
          'a) Oslo: 18.0°C, Bergen: 17.0°C, b) Oslo 22°C, c) 7 dager Oslo varmere',
        ],
        solution: `**Løsning:**

\`\`\`python
import matplotlib.pyplot as plt

# Data
oslo = [18, 20, 22, 19, 21, 23, 20]
bergen = [15, 16, 17, 16, 18, 19, 17]
dager = [1, 2, 3, 4, 5, 6, 7]

# a) Gjennomsnitt
gjennomsnitt_oslo = sum(oslo) / len(oslo)
gjennomsnitt_bergen = sum(bergen) / len(bergen)

print(f"a) Gjennomsnitt Oslo: {gjennomsnitt_oslo:.1f}°C")
print(f"   Gjennomsnitt Bergen: {gjennomsnitt_bergen:.1f}°C")
# Output:
# Gjennomsnitt Oslo: 20.4°C
# Gjennomsnitt Bergen: 16.9°C

# b) Høyeste temperatur
hogste_oslo = max(oslo)
hogste_bergen = max(bergen)

if hogste_oslo > hogste_bergen:
    print(f"b) Oslo hadde høyest temperatur: {hogste_oslo}°C")
else:
    print(f"b) Bergen hadde høyest temperatur: {hogste_bergen}°C")
# Output: Oslo hadde høyest temperatur: 23°C

# c) Tell dager Oslo var varmere
dager_varmere = 0
for i in range(len(oslo)):
    if oslo[i] > bergen[i]:
        dager_varmere = dager_varmere + 1

print(f"c) Oslo var varmere {dager_varmere} av 7 dager")
# Output: Oslo var varmere 7 av 7 dager

# d) Linjediagram
plt.plot(dager, oslo, marker='o', label='Oslo', color='red')
plt.plot(dager, bergen, marker='s', label='Bergen', color='blue')
plt.xlabel('Dag')
plt.ylabel('Temperatur (°C)')
plt.title('Temperatursammenligning: Oslo vs Bergen')
plt.legend()
plt.grid(True)
plt.show()
\`\`\`

**Forklaring:**

**a)** Beregner gjennomsnitt for hver by

**b)** Sammenligner høyeste temperatur med \`if\`-setning

**c)** Løkke som sammenligner temperaturene dag for dag

**d)** Lager to linjer i samme graf:
- \`label='Oslo'\` → Navn som vises i forklaringen
- \`plt.legend()\` → Viser forklaringsboksen
- Ulike farger og markører gjør det lett å skille byene

**Konklusjon:** Oslo er varmere enn Bergen alle dagene i denne uken!`,
      },
    },

    // ========== OPPGAVE 11: SIMULERING BAKTERIEVEKST ==========
    {
      id: 'nat10-6-3-ex-11-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-3-ex-11',
        number: '6.3.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bakterier deler seg (dobler antallet) hver 20. minutt.\n\nLag en simulering som:\na) Starter med 1 bakterie\nb) Simulerer vekst over 3 timer (180 minutter)\nc) Skriver ut antall bakterier hvert 20. minutt\nd) Lager et linjediagram av veksten',
        multipleChoiceOptions: [
          'Etter 3 timer: 512 bakterier (2^9 doblinger)',
          'Etter 3 timer: 180 bakterier (lineær vekst)',
          'Etter 3 timer: 1024 bakterier (2^10 doblinger)',
          'Etter 3 timer: 9 bakterier (9 doblinger × 1)',
        ],
        solution: `**Løsning:**

\`\`\`python
import matplotlib.pyplot as plt

# Startbetingelser
bakterier = 1
tid = 0
delingstid = 20  # Bakteriene dobler seg hver 20. minutt
total_tid = 180  # Simuler i 3 timer

# Lister for å lagre data til grafen
tider = [0]
antall = [1]

print(f"Tid: {tid} min → {bakterier} bakterie(r)")

# Simulering
while tid < total_tid:
    tid = tid + delingstid
    bakterier = bakterier * 2

    # Lagre data
    tider.append(tid)
    antall.append(bakterier)

    print(f"Tid: {tid} min → {bakterier} bakterie(r)")

# Output:
# Tid: 0 min → 1 bakterie(r)
# Tid: 20 min → 2 bakterie(r)
# Tid: 40 min → 4 bakterie(r)
# Tid: 60 min → 8 bakterie(r)
# Tid: 80 min → 16 bakterie(r)
# Tid: 100 min → 32 bakterie(r)
# Tid: 120 min → 64 bakterie(r)
# Tid: 140 min → 128 bakterie(r)
# Tid: 160 min → 256 bakterie(r)
# Tid: 180 min → 512 bakterie(r)

# Linjediagram
plt.plot(tider, antall, marker='o', color='purple', linewidth=2)
plt.xlabel('Tid (minutter)')
plt.ylabel('Antall bakterier')
plt.title('Bakterievekst over 3 timer')
plt.grid(True)
plt.show()
\`\`\`

**Forklaring:**

**Simuleringsløkke:**
- \`while tid < total_tid:\` → Gjentar til vi når 180 minutter
- \`tid = tid + delingstid\` → Øker tiden med 20 minutter
- \`bakterier = bakterier * 2\` → Dobler antall bakterier

**Datalagring:**
- \`tider.append(tid)\` → Legger til tid i listen
- \`antall.append(bakterier)\` → Legger til antall i listen
- Dette lar oss lage graf etterpå

**Resultat:**
- Etter 3 timer: **512 bakterier** fra kun 1 bakterie!
- Dette er eksponentiell vekst
- Grafen viser dramatisk økning (krummet kurve oppover)

**Observasjon:** Dette viser hvorfor bakterieinfeksjoner kan spre seg så raskt i kroppen!`,
      },
    },

    // ========== OPPGAVE 12: AVANSERT SIMULERING ==========
    {
      id: 'nat10-6-3-ex-12-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-3-ex-12',
        number: '6.3.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en simulering av en ball som kastes rett opp i luften.\n\nData:\n- Starthastighet: 20 m/s (oppover)\n- Tyngdeakselerasjon: 10 m/s² (nedover)\n- Tidssteg: 0.1 sekunder\n\nSimuler til ballen treffer bakken (høyde = 0) og finn:\na) Maksimal høyde\nb) Total tid i luften\nc) Lag et linjediagram av høyde over tid',
        multipleChoiceOptions: [
          'a) Maks høyde: 20 m, b) Total tid: 4 sekunder',
          'a) Maks høyde: 40 m, b) Total tid: 2 sekunder',
          'a) Maks høyde: 10 m, b) Total tid: 4 sekunder',
          'a) Maks høyde: 20 m, b) Total tid: 2 sekunder',
        ],
        solution: `**Løsning:**

\`\`\`python
import matplotlib.pyplot as plt

# Startbetingelser
hastighet = 20    # m/s oppover
hoyde = 0         # starter på bakken
g = 10            # tyngdeakselerasjon (m/s²)
dt = 0.1          # tidssteg (sekunder)
tid = 0

# Lister for data
tider = []
hoyder = []

# Simulering
while hoyde >= 0 or tid == 0:
    # Lagre data
    tider.append(tid)
    hoyder.append(hoyde)

    # Oppdater hastighet (reduseres av tyngdekraft)
    hastighet = hastighet - g * dt

    # Oppdater høyde
    hoyde = hoyde + hastighet * dt

    # Oppdater tid
    tid = tid + dt

# a) Finn maksimal høyde
max_hoyde = max(hoyder)
print(f"a) Maksimal høyde: {max_hoyde:.1f} m")
# Output: Maksimal høyde: 20.0 m

# b) Total tid i luften
total_tid = tider[-1]  # Siste element i listen
print(f"b) Total tid i luften: {total_tid:.1f} sekunder")
# Output: Total tid i luften: 4.0 sekunder

# c) Linjediagram
plt.plot(tider, hoyder, marker='o', markersize=3, color='blue', linewidth=2)
plt.xlabel('Tid (sekunder)')
plt.ylabel('Høyde (meter)')
plt.title('Ball kastet rett opp')
plt.grid(True)
plt.axhline(y=0, color='brown', linestyle='--', label='Bakken')
plt.legend()
plt.show()
\`\`\`

**Forklaring:**

**Fysikken:**
- Ballen starter med hastighet 20 m/s oppover
- Tyngdekraften reduserer hastigheten med 10 m/s hvert sekund
- Når hastigheten blir 0, er ballen på toppen
- Så øker hastigheten nedover til ballen treffer bakken

**Simuleringen:**
1. \`hastighet = hastighet - g * dt\` → Tyngdekraften reduserer hastigheten
2. \`hoyde = hoyde + hastighet * dt\` → Oppdater posisjon basert på hastighet
3. \`tid = tid + dt\` → Tid går fremover

**Resultat:**
- Maksimal høyde: **20 meter**
- Total tid: **4 sekunder** (2 sekunder opp, 2 sekunder ned)
- Grafen viser en symmetrisk parabel

**Verifisering med formel:**
- Maksimal høyde: h = v²/(2g) = 20²/(2×10) = 400/20 = 20 m ✓
- Tid til topp: t = v/g = 20/10 = 2 s → Total tid = 4 s ✓

Simuleringen stemmer med fysikkformlene!`,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'nat10-6-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Hva har vi lært?

**Hvorfor programmering i naturfag:**
- Automatisering av beregninger
- Dataanalyse av store datasett
- Visualisering med grafer
- Simulering av naturprosesser

**Grunnleggende begreper:**
- **Variabler** → Lagrer informasjon
- **Løkker** → Gjentar handlinger
- **Betingelser** → Tar beslutninger
- **Funksjoner** → Gjenbrukbar kode

**Python:**
- Populært språk i vitenskap
- Lett å lære
- Kraftige biblioteker (Matplotlib for grafer)

**Dataanalyse:**
- Beregne gjennomsnitt, max, min
- Finne mønstre i data
- Trekke konklusjoner

**Visualisering:**
- Linjediagrammer for utvikling over tid
- Søylediagrammer for sammenligning
- Grafer gjør data lettere å forstå

**Simuleringer:**
- Modellere naturprosesser
- Teste hypoteser
- Forstå komplekse systemer

### Viktigste poeng

1. **Programmering er et verktøy** – Det hjelper oss å jobbe smartere, ikke hardere
2. **Visualisering gir innsikt** – Grafer avslører mønstre som er vanskelige å se i rå data
3. **Simuleringer utforsker umuligheter** – Vi kan teste scenarier som er for farlige, dyre eller tidkrevende i virkeligheten

### Neste steg

Nå som du forstår grunnleggende programmering i naturfag, kan du:
- Analysere dine egne eksperimenter
- Lage imponerende grafer
- Simulere naturprosesser
- Utforske data på nye måter

Programmering åpner døren til moderne naturvitenskap!`,
    },
    // ========== EKSEMPEL: WHILE-LØKKE I NATURFAG ==========
    {
      id: 'nat10-6-3-example-while',
      type: 'example',
      title: 'Eksempel: While-løkke for å simulere radioaktiv halveringstid',
      problem: 'Du har 1000 atomer av et radioaktivt stoff med halveringstid 10 minutter. Skriv Python-kode som simulerer nedbrytningen til det er færre enn 10 atomer igjen.',
      solution: `**Løsning:**

\`\`\`python
# Startbetingelser
atomer = 1000
halveringstid = 10  # minutter
tid = 0

print(f"Tid: {tid} min → {atomer} atomer")

# Simuler med while-løkke
while atomer >= 10:
    tid = tid + halveringstid
    atomer = atomer / 2
    print(f"Tid: {tid} min → {atomer:.0f} atomer")

# Output:
# Tid: 0 min → 1000 atomer
# Tid: 10 min → 500 atomer
# Tid: 20 min → 250 atomer
# Tid: 30 min → 125 atomer
# Tid: 40 min → 63 atomer
# Tid: 50 min → 31 atomer
# Tid: 60 min → 16 atomer
# Tid: 70 min → 8 atomer (stopper fordi 8 < 10)
\`\`\`

**Forklaring:**
- \`while atomer >= 10:\` → Fortsett så lenge det er 10 eller flere atomer
- \`atomer = atomer / 2\` → Halvparten av atomene brytes ned hvert 10. minutt
- Etter 70 minutter (7 halveringstider) er det kun 8 atomer igjen

**Læringspoeng:**
- While-løkken er perfekt når vi ikke vet på forhånd hvor mange ganger vi skal gjenta
- Simuleringen viser eksponentiell nedbrytning - hvert tidssteg halveres antallet`,
    },

    // ========== OPPGAVE 13: FEILSØKING ==========
    {
      id: 'nat10-6-3-ex-13-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-3-ex-13',
        number: '6.3.13',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er feilen i denne koden?\n\n```python\ntemperaturer = [18, 20, 22, 19, 21]\ngjennomsnitt = sum(temperaturer) / len(temperaturer)\nprint(f"Gjennomsnittet er {gjenomsnitt}°C")\n```',
        options: [
          'Variabelnavnet er feilstavet i print-setningen (gjenomsnitt i stedet for gjennomsnitt)',
          'sum()-funksjonen fungerer ikke på lister',
          'f-strenger er ikke gyldig Python-syntaks',
          'len()-funksjonen gir feil resultat for denne listen',
        ],
        answer: 0,
        solution: `**Svar: Variabelnavnet er feilstavet i print-setningen**

I Python må variabelnavn skrives nøyaktig likt overalt. Koden definerer variabelen som \`gjennomsnitt\` (med dobbelt n), men i print-setningen brukes \`gjenomsnitt\` (med enkelt n).

**Feil:** \`gjenomsnitt\` (feil)
**Riktig:** \`gjennomsnitt\` (riktig)

**Rettet kode:**
\`\`\`python
temperaturer = [18, 20, 22, 19, 21]
gjennomsnitt = sum(temperaturer) / len(temperaturer)
print(f"Gjennomsnittet er {gjennomsnitt}°C")
\`\`\`

Denne typen feil er svært vanlig i programmering og kalles en **stavefeil** (typo). Python gir en \`NameError\` fordi variabelen \`gjenomsnitt\` aldri ble definert.`,
      },
    },

    // ========== OPPGAVE 14: LESE KODE ==========
    {
      id: 'nat10-6-3-ex-14-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-3-ex-14',
        number: '6.3.14',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva skriver denne koden ut?\n\n```python\ntall = [3, 7, 2, 9, 4]\nresultat = 0\nfor t in tall:\n    if t > 5:\n        resultat = resultat + t\nprint(resultat)\n```',
        options: [
          '25',
          '16',
          '9',
          '7',
        ],
        answer: 1,
        solution: `**Svar: 16**

La oss gå gjennom koden steg for steg:

1. \`tall = [3, 7, 2, 9, 4]\` → Liste med tall
2. \`resultat = 0\` → Startverdien er 0
3. Løkken går gjennom hvert tall:
   - t = 3: Er 3 > 5? NEI → resultat forblir 0
   - t = 7: Er 7 > 5? JA → resultat = 0 + 7 = 7
   - t = 2: Er 2 > 5? NEI → resultat forblir 7
   - t = 9: Er 9 > 5? JA → resultat = 7 + 9 = 16
   - t = 4: Er 4 > 5? NEI → resultat forblir 16
4. \`print(resultat)\` → Skriver ut 16

Koden summerer alle tall som er større enn 5. Tallene 7 og 9 oppfyller betingelsen, og 7 + 9 = 16.`,
      },
    },

    // ========== OPPGAVE 15: SKRIVE ENKEL KODE ==========
    {
      id: 'nat10-6-3-ex-15-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-3-ex-15',
        number: '6.3.15',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du har målt høyden til 8 elever i cm: [155, 162, 170, 148, 175, 160, 168, 158]\n\nSkriv Python-kode som:\na) Finner gjennomsnittshøyden\nb) Teller hvor mange som er over 165 cm\nc) Finner forskjellen mellom den høyeste og den laveste eleven',
        solution: `**Løsning:**

\`\`\`python
# Data
hoyder = [155, 162, 170, 148, 175, 160, 168, 158]

# a) Gjennomsnittshøyde
gjennomsnitt = sum(hoyder) / len(hoyder)
print(f"a) Gjennomsnittshøyde: {gjennomsnitt:.1f} cm")
# Output: Gjennomsnittshøyde: 162.0 cm

# b) Antall over 165 cm
antall_over_165 = 0
for h in hoyder:
    if h > 165:
        antall_over_165 += 1
print(f"b) Antall over 165 cm: {antall_over_165}")
# Output: Antall over 165 cm: 3

# c) Forskjell mellom høyeste og laveste
forskjell = max(hoyder) - min(hoyder)
print(f"c) Forskjell: {forskjell} cm ({max(hoyder)} - {min(hoyder)})")
# Output: Forskjell: 27 cm (175 - 148)
\`\`\`

**Forklaring:**
a) Sum = 1296, antall = 8, gjennomsnitt = 1296/8 = 162.0 cm
b) Elevene med 170, 175 og 168 cm er over 165 → 3 elever
c) Høyeste = 175, laveste = 148, forskjell = 175 - 148 = 27 cm`,
      },
    },

    // ========== OPPGAVE 16: KOMBINERE KONSEPTER ==========
    {
      id: 'nat10-6-3-ex-16-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-3-ex-16',
        number: '6.3.16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en Python-funksjon kalt analysere_data som tar inn en liste med tall og returnerer en ordbok (dictionary) med gjennomsnitt, høyeste verdi, laveste verdi og antall verdier. Test funksjonen med temperaturdata.',
        solution: `**Løsning:**

\`\`\`python
def analysere_data(verdier):
    """Analyserer en liste med tall og returnerer statistikk"""
    resultat = {
        "gjennomsnitt": sum(verdier) / len(verdier),
        "hogste": max(verdier),
        "laveste": min(verdier),
        "antall": len(verdier),
        "spenn": max(verdier) - min(verdier),
    }
    return resultat

# Test med temperaturdata
temperaturer = [18, 22, 20, 25, 19, 21, 23, 17, 24, 20]
statistikk = analysere_data(temperaturer)

print("Temperaturanalyse:")
print(f"  Gjennomsnitt: {statistikk['gjennomsnitt']:.1f}°C")
print(f"  Høyeste: {statistikk['hogste']}°C")
print(f"  Laveste: {statistikk['laveste']}°C")
print(f"  Antall målinger: {statistikk['antall']}")
print(f"  Temperaturspenn: {statistikk['spenn']}°C")

# Output:
# Temperaturanalyse:
#   Gjennomsnitt: 20.9°C
#   Høyeste: 25°C
#   Laveste: 17°C
#   Antall målinger: 10
#   Temperaturspenn: 8°C
\`\`\`

**Forklaring:**
- Funksjonen er **gjenbrukbar**: den fungerer for alle typer talldata
- En ordbok (dictionary) samler all statistikk på ett sted
- Funksjonen kan brukes for temperatur, nedbør, pH, eller andre data`,
      },
    },

    // ========== OPPGAVE 17: LISTE-OPERASJONER ==========
    {
      id: 'nat10-6-3-ex-17a-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-3-ex-17a',
        number: '6.3.17a',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva gjør denne koden?\n\n```python\ndata = [5, 12, 8, 3, 15, 7, 20, 1]\nfiltrert = []\nfor verdi in data:\n    if verdi >= 10:\n        filtrert.append(verdi)\nprint(filtrert)\n```',
        options: [
          '[12, 15, 20] - den filtrerer ut verdier som er 10 eller høyere',
          '[5, 8, 3, 7, 1] - den filtrerer ut verdier under 10',
          '[5, 12, 8, 3, 15, 7, 20, 1] - den kopierer hele listen',
          '[] - den lager en tom liste',
        ],
        answer: 0,
        solution: `**Svar: [12, 15, 20] - den filtrerer ut verdier som er 10 eller høyere**

La oss gå gjennom koden steg for steg:

1. \`data = [5, 12, 8, 3, 15, 7, 20, 1]\` → Opprinnelig liste
2. \`filtrert = []\` → Tom liste som skal fylles
3. Løkken går gjennom hvert element:
   - 5: Er 5 >= 10? NEI → hoppes over
   - 12: Er 12 >= 10? JA → legges til i filtrert
   - 8: Er 8 >= 10? NEI → hoppes over
   - 3: Er 3 >= 10? NEI → hoppes over
   - 15: Er 15 >= 10? JA → legges til i filtrert
   - 7: Er 7 >= 10? NEI → hoppes over
   - 20: Er 20 >= 10? JA → legges til i filtrert
   - 1: Er 1 >= 10? NEI → hoppes over
4. \`print(filtrert)\` → Skriver ut [12, 15, 20]

Denne teknikken med å gå gjennom en liste og velge ut elementer som oppfyller et vilkår kalles **filtrering** og er svært vanlig i dataanalyse.`,
      },
    },

    // ========== EKSEMPEL: DATAANALYSE AV VIRKELIG DATASETT ==========
    {
      id: 'nat10-6-3-example-virkelig-data',
      type: 'example',
      title: 'Eksempel: Analyse av virkelige temperaturdata med Python',
      problem: 'Du har temperaturdata for Oslo over 12 måneder. Skriv et komplett Python-program som analyserer dataene og lager en graf.',
      solution: `**Løsning:**

\`\`\`python
import matplotlib.pyplot as plt

# Virkelige gjennomsnittstemperaturer for Oslo (°C)
maneder = ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun',
           'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des']
temperaturer = [-4.3, -4.0, 0.2, 5.6, 11.3, 15.0,
                16.4, 15.2, 10.8, 6.3, 0.7, -3.1]

# Analyse
gjennomsnitt = sum(temperaturer) / len(temperaturer)
varmeste = max(temperaturer)
kaldeste = min(temperaturer)
varmeste_maned = maneder[temperaturer.index(varmeste)]
kaldeste_maned = maneder[temperaturer.index(kaldeste)]

# Beregn antall måneder under 0°C
frostmaneder = sum(1 for t in temperaturer if t < 0)

# Skriv ut analyse
print("=== Temperaturanalyse for Oslo ===")
print(f"Gjennomsnitt: {gjennomsnitt:.1f}°C")
print(f"Varmeste måned: {varmeste_maned} ({varmeste}°C)")
print(f"Kaldeste måned: {kaldeste_maned} ({kaldeste}°C)")
print(f"Antall frostmåneder: {frostmaneder}")
print(f"Temperaturspenn: {varmeste - kaldeste:.1f}°C")

# Lag graf
fig, ax = plt.subplots(figsize=(10, 6))
farger = ['blue' if t < 0 else 'red' for t in temperaturer]
ax.bar(maneder, temperaturer, color=farger)
ax.axhline(y=0, color='black', linestyle='-', linewidth=0.5)
ax.axhline(y=gjennomsnitt, color='green', linestyle='--',
           label=f'Gjennomsnitt ({gjennomsnitt:.1f}°C)')
ax.set_xlabel('Måned')
ax.set_ylabel('Temperatur (°C)')
ax.set_title('Gjennomsnittstemperatur i Oslo')
ax.legend()
ax.grid(axis='y', alpha=0.3)
plt.show()
\`\`\`

**Output:**
\`\`\`
=== Temperaturanalyse for Oslo ===
Gjennomsnitt: 5.8°C
Varmeste måned: Jul (16.4°C)
Kaldeste måned: Jan (-4.3°C)
Antall frostmåneder: 4
Temperaturspenn: 20.7°C
\`\`\`

**Forklaring:**
- Blå søyler viser måneder under 0°C, røde viser over 0°C
- Grønn stiplet linje viser årsgjennomsnitt
- Programmet kombinerer dataanalyse (beregninger) med visualisering (graf)
- Dette er typisk for hvordan forskere analyserer klimadata`,
    },

    // ========== OPPGAVE 18: SIMULERING MED TILFELDIG TALL ==========
    {
      id: 'nat10-6-3-ex-18-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-3-ex-18',
        number: '6.3.18',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du vil simulere 100 kast med en vanlig terning (1-6) og finne ut hvor mange ganger hvert tall kommer opp. Skriv Python-kode som gjennomfører simuleringen og viser resultatet.',
        solution: `**Løsning:**

\`\`\`python
import random

# Simuler 100 terningkast
antall_kast = 100
resultater = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}

for i in range(antall_kast):
    kast = random.randint(1, 6)
    resultater[kast] = resultater[kast] + 1

# Vis resultater
print(f"Resultater etter {antall_kast} kast:")
for tall, antall in resultater.items():
    prosent = antall / antall_kast * 100
    stolpe = "#" * antall
    print(f"  {tall}: {antall:3d} ganger ({prosent:.1f}%) {stolpe}")

# Forventet resultat: ca. 16-17 ganger per tall
# Eksempel output:
#   1:  18 ganger (18.0%) ##################
#   2:  14 ganger (14.0%) ##############
#   3:  17 ganger (17.0%) #################
#   4:  19 ganger (19.0%) ###################
#   5:  15 ganger (15.0%) ###############
#   6:  17 ganger (17.0%) #################
\`\`\`

**Forklaring:**
- \`random.randint(1, 6)\` gir et tilfeldig tall mellom 1 og 6
- Ordboken \`resultater\` teller opp hvert utfall
- Med 100 kast bør hvert tall komme opp ca. 16-17 ganger (100/6 ≈ 16,7)
- Men på grunn av tilfeldighet kan det variere

**Utvidelse:**
- Prøv med 10 000 kast - da blir fordelingen mye jevnere!
- Dette kalles "loven om store tall" i statistikk
- Jo flere kast, jo nærmere kommer vi den teoretiske sannsynligheten (1/6)`,
      },
    },

    // ========== OPPGAVE 19: ALGORITME I HVERDAGEN ==========
    {
      id: 'nat10-6-3-ex-19-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-3-ex-19',
        number: '6.3.19',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva er en algoritme? Forklar begrepet med et hverdagseksempel og et programmeringseksempel.',
        solution: `**Svar:**

En **algoritme** er en steg-for-steg-oppskrift som beskriver nøyaktig hvordan en oppgave skal løses.

**Hverdagseksempel: Lage en kopp te**
1. Fyll kjelen med vann
2. Sett kjelen på komfyren og kok vannet
3. Legg en tepose i koppen
4. Hell det kokende vannet over teposen
5. Vent 3-5 minutter
6. Ta ut teposen
7. Tilsett eventuelt sukker eller melk

Hvert steg er klart definert og rekkefølgen er viktig (du kan ikke helle vann før det er kokt).

**Programmeringseksempel: Finn det største tallet i en liste**
1. Start med å anta at det første tallet er det største
2. Gå gjennom hvert tall i listen
3. Hvis det nåværende tallet er større enn det antatt største, oppdater det største tallet
4. Når du har gått gjennom alle tallene, er det største funnet

\`\`\`python
def finn_storste(liste):
    storste = liste[0]        # Steg 1
    for tall in liste:         # Steg 2
        if tall > storste:     # Steg 3
            storste = tall
    return storste             # Steg 4

print(finn_storste([3, 7, 2, 9, 4]))  # Output: 9
\`\`\``,
      },
    },
  ],
  exercises: [], // Oppgavene er embedded i content
};

// ============================================================================
// KAPITTEL 6.2: Sensorer og målinger
// ============================================================================

export const CHAPTER_NAT10_6_2: TextbookChapter = {
  id: 'naturfag-10-6-2',
  courseId: 'naturfag-10',
  chapterNumber: '6.2',
  title: 'Sensorer og målinger',
  description: 'Lær om sensorer og hvordan de brukes til datainnsamling.',
  estimatedMinutes: 40,
  competenceGoals: [
    'forklare hva en sensor er og hvordan den fungerer',
    'kjenne til ulike typer sensorer og deres bruksområder',
    'beskrive hvordan sensorer brukes i hverdagen',
    'forklare hvordan data fra sensorer kan brukes i naturfagsforsøk',
    'bruke datalogger til å samle og analysere data',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'nat10-6-2-intro',
      type: 'text',
      content: `## Sensorer og målinger

Hvordan vet smarttelefonen din hvilken vei er opp? Hvordan kan en bil bremse automatisk hvis den oppdager en hindring? Hvordan måler vi temperatur, luftfuktighet eller luftkvalitet over tid?

Svaret er **sensorer** – små teknologiske verktøy som registrerer og måler fysiske og kjemiske egenskaper i omgivelsene.

I dette kapitlet lærer du:
- Hva en sensor er og hvordan den fungerer
- Ulike typer sensorer og deres bruksområder
- Hvordan sensorer brukes i hverdagen
- Hvordan datalogger samler data over tid
- Hvordan sensorer brukes i naturfagsforsøk`,
    },

    // ========== DEFINISJON: SENSOR ==========
    {
      id: 'nat10-6-2-def-sensor',
      type: 'definition',
      title: 'Sensor',
      content: 'En sensor er et instrument som registrerer (oppdager) en fysisk eller kjemisk egenskap i omgivelsene, måler størrelsen på denne egenskapen, og omformer informasjonen til et elektrisk signal som kan leses av et elektronisk system. Sensorer er grunnleggende byggesteiner i alle teknologiske systemer som samhandler med den fysiske verden.',
    },

    // ========== DEFINISJON: ANALOG OG DIGITAL ==========
    {
      id: 'nat10-6-2-def-analog-digital',
      type: 'definition',
      title: 'Analog og digital',
      content: 'Analog betyr at signalet varierer kontinuerlig og kan ha uendelig mange verdier (som kvikksølvet i et gammelt termometer). Digital betyr at signalet er omgjort til bestemte tallverdier (digitalisert). Moderne sensorer er som regel digitale, noe som gjør det enkelt å lagre, behandle og analysere dataene med datamaskiner.',
    },

    // ========== DEFINISJON: DATALOGGER ==========
    {
      id: 'nat10-6-2-def-datalogger',
      type: 'definition',
      title: 'Datalogger',
      content: 'En datalogger er et elektronisk system som automatisk samler inn data fra en eller flere sensorer over tid. Dataene lagres med tidsstempel og kan senere analyseres som grafer eller tabeller. Datalogger brukes i forsøk der man vil følge endringer over tid uten å måtte måle manuelt, for eksempel temperaturendring over et døgn eller pH-endring i en kjemisk reaksjon.',
    },

    // ========== DEFINISJON: KALIBRERING ==========
    {
      id: 'nat10-6-2-def-kalibrering',
      type: 'definition',
      title: 'Kalibrering',
      content: 'Kalibrering er prosessen med å justere en sensor eller et måleinstrument slik at det gir nøyaktige målinger. Man sammenligner sensorens avlesning med en kjent standardverdi og justerer deretter. For eksempel kalibreres en pH-sensor ved å senke den i løsninger med kjent pH (f.eks. pH 4 og pH 7). Regelmessig kalibrering er viktig for pålitelige måleresultater.',
    },

    // ========== HVA ER EN SENSOR? ==========
    {
      id: 'nat10-6-2-hva-sensor',
      type: 'text',
      content: `## Hva er en sensor?

### Definisjon

En **sensor** er et instrument som:
- **Registrerer** (oppdager) en fysisk eller kjemisk egenskap
- **Måler** størrelsen på denne egenskapen
- **Omformer** informasjonen til et signal (vanligvis elektrisk)

**Eksempel:**
En **temperatursensor** registrerer varme, måler temperaturen, og sender et elektrisk signal som kan vises som et tall (f.eks. 22°C).

### Fra analog til digital

**Analog måling:**
- Kontinuerlig signal (f.eks. kvikksølv i et gammelt termometer)
- Kan ha uendelig mange verdier

**Digital måling:**
- Signal omgjort til tall (digitalisert)
- Kan lett lagres, analyseres og vises på skjerm
- Moderne sensorer er digitale

**Eksempel:**
Gammelt termometer: Kvikksølvet stiger → du leser av på skala (analog)
Digital temperatursensor: Sensor registrerer varme → omformer til tall → viser 22,3°C på skjerm (digital)`,
    },

    // ========== OPPGAVE 1: HVA ER EN SENSOR? ==========
    {
      id: 'nat10-6-2-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-2-ex-1',
        number: '6.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en sensor?',
        options: [
          'En enhet som bare viser tall på en skjerm',
          'Et instrument som registrerer, måler og omformer en fysisk eller kjemisk egenskap',
          'En datamaskin som lagrer informasjon',
          'Et batteri som gir strøm til elektronikk',
        ],
        answer: 1,
        solution: `**Riktig svar:** Et instrument som registrerer, måler og omformer en fysisk eller kjemisk egenskap

**Forklaring:**

En sensor er et instrument som:
1. **Registrerer** (oppdager) en fysisk eller kjemisk egenskap i omgivelsene
2. **Måler** størrelsen på denne egenskapen
3. **Omformer** informasjonen til et signal (vanligvis elektrisk) som kan brukes videre

**Eksempler:**
- Temperatursensor: Registrerer varme → måler temperatur → sender elektrisk signal
- Lyssensor: Registrerer lys → måler lysstyrke → sender elektrisk signal

**Hvorfor de andre svarene er feil:**
- En skjerm viser bare informasjon, den måler ikke noe
- En datamaskin lagrer data, men sensoren samler inn dataene
- Et batteri gir strøm, men måler ikke egenskaper`,
      },
    },

    // ========== TYPER SENSORER ==========
    {
      id: 'nat10-6-2-typer-sensorer',
      type: 'text',
      content: `## Typer sensorer

Det finnes mange ulike typer sensorer, hver tilpasset å måle spesifikke egenskaper:

### 1. Temperatursensor

**Hva den måler:** Temperatur (varme/kulde)

**Hvordan den fungerer:**
- Bruker materialer som endrer egenskaper ved temperaturendring
- Vanlig type: Termistor (motstanden endres med temperaturen)

**Bruksområder:**
- Termometer (måle kroppstemperatur)
- Termostat (regulere romtemperatur)
- Kjøleskap og frysere
- Værstasjon
- Naturfagsforsøk (måle temperaturendring i reaksjoner)

**Eksempel:**
Når du koker vann, kan en temperatursensor måle når vannet når 100°C.

---

### 2. Lyssensor

**Hva den måler:** Lysstyrke (lux)

**Hvordan den fungerer:**
- Fotocelle: Når lys treffer sensoren, endres den elektriske motstanden

**Bruksområder:**
- Automatisk lys på gatelamper (slår på når det blir mørkt)
- Smarttelefon: Justerer skjermens lysstyrke
- Sikkerhetssystemer (registrerer bevegelse via lysendring)
- Naturfagsforsøk (måle lysstyrke under fotosyntese)

**Eksempel:**
Lyssensoren i telefonen din gjør skjermen lysere når du går ut i solen.

---

### 3. Trykksensor

**Hva den måler:** Trykk (kraft per areal)

**Hvordan den fungerer:**
- Trykkfølsomt materiale som endrer elektrisk signal ved påført trykk

**Bruksområder:**
- Værstasjon (måle lufttrykk)
- Bil (lufttrykk i dekk)
- Høydemåler (høyde bestemmes av lufttrykk)
- Smarttelefon (barometer)
- Naturfagsforsøk (måle gass produsert i reaksjoner)

**Eksempel:**
Værvarslingen bruker trykkdata til å forutsi vær: Høyt trykk = pent vær, lavt trykk = dårlig vær.

---

### 4. Bevegelsessensor

**Hva den måler:** Bevegelse eller akselerasjon

**Hvordan den fungerer:**
- Akselerometer: Måler endring i hastighet eller retning
- IR-sensor: Registrerer varme fra bevegelse

**Bruksområder:**
- Smarttelefon (rotere skjerm, telle skritt)
- Spill (Nintendo Wii-kontroller)
- Sikkerhetssystemer (registrere innbrudd)
- Bil (utløse kollisjonsputer)

**Eksempel:**
Når du snur telefonen, registrerer akselerometeret dette og roterer skjermen automatisk.

---

### 5. pH-sensor

**Hva den måler:** Surhet (pH-verdi)

**Hvordan den fungerer:**
- Måler konsentrasjonen av hydrogenioner (H⁺) i en løsning

**Bruksområder:**
- Naturfagsforsøk (måle pH i kjemiske reaksjoner)
- Akvarier (sikre riktig pH for fisk)
- Vannkvalitet (sjekke drikkevann)
- Jordbruk (sjekke jordens pH)

**Eksempel:**
pH-sensor kan måle at sitronsaft har pH 2 (sur), mens såpevann har pH 10 (basisk).

---

### 6. Fuktighetssensor

**Hva den måler:** Luftfuktighet (mengde vanndamp i luften)

**Hvordan den fungerer:**
- Måler endring i elektrisk motstand eller kapasitans ved fuktighet

**Bruksområder:**
- Værstasjon
- Drivhus (regulere vanning)
- Badeventilatorer (slå på ved høy fuktighet)
- Naturfagsforsøk (måle fuktighet ved fordamping)

**Eksempel:**
En fuktighetssensor i et drivhus kan automatisk slå på vanningsanlegget når luften blir for tørr.`,
    },

    // ========== EKSEMPEL: VELGE RIKTIG SENSOR ==========
    {
      id: 'nat10-6-2-example-velge-sensor',
      type: 'example',
      title: 'Eksempel: Velge riktig sensor til et forsøk',
      problem: 'Du skal undersøke hvordan temperaturen i en kopp med varmt vann endrer seg over 30 minutter. Hvilken sensor og utstyr trenger du, og hvordan setter du opp forsøket?',
      solution: `**Løsning:**

**Sensor:** Temperatursensor (termistor eller digitalt termometer)

**Utstyr:**
- Temperatursensor
- Datalogger (eller datamaskin med programvare)
- Kopp med varmt vann (f.eks. 80°C)
- Stativ for å holde sensoren

**Oppsett:**
1. Fyll koppen med varmt vann
2. Fest temperatursensoren i stativet slik at den er nedsenket i vannet
3. Koble sensoren til dataloggeren
4. Still inn dataloggeren til å måle hvert 30. sekund i 30 minutter
5. Start målingen

**Forventet resultat:**
Grafen vil vise en kurve som starter høyt (80°C) og gradvis synker mot romtemperatur. Avkjølingen er raskest i starten og avtar etter hvert (eksponentiell avkjøling ifølge Newtons avkjølingslov).`,
    },

    // ========== EKSEMPEL: ANALOG VS DIGITAL ==========
    {
      id: 'nat10-6-2-example-analog-digital',
      type: 'example',
      title: 'Eksempel: Analog vs. digital måling',
      problem: 'Forklar forskjellen mellom å måle temperatur med et gammelt kvikksølvtermometer (analogt) og en digital temperatursensor.',
      solution: `**Løsning:**

**Analogt kvikksølvtermometer:**
- Kvikksølvet utvider seg når temperaturen øker
- Du leser av verdien på en skala med øynene
- Resultatet er kontinuerlig (kvikksølvet kan stoppe mellom to streker)
- Nøyaktigheten avhenger av hvor godt du klarer å lese av
- Kan ikke kobles til en datalogger

**Digital temperatursensor:**
- En elektronisk komponent (termistor) endrer elektrisk motstand ved temperaturendring
- Motstanden omregnes til et eksakt tall av en mikroprosessor
- Resultatet vises som et nøyaktig tall (f.eks. 22,3°C)
- Samme nøyaktighet uavhengig av hvem som leser av
- Kan kobles til datalogger og lagre tusenvis av målinger

**Fordeler med digital:**
- Mer nøyaktig og konsistent
- Kan lagre og analysere data automatisk
- Kan kobles til datamaskiner for visualisering

**Fordeler med analog:**
- Enklere, krever ikke strøm
- Gir god oversikt over temperaturendring (du ser kvikksølvet flytte seg)`,
    },

    // ========== EKSEMPEL: KALIBRERE EN SENSOR ==========
    {
      id: 'nat10-6-2-example-kalibrering',
      type: 'example',
      title: 'Eksempel: Kalibrering av pH-sensor',
      problem: 'Før du bruker en pH-sensor i et forsøk, må den kalibreres. Forklar hvordan du kalibrerer en pH-sensor.',
      solution: `**Løsning:**

**Steg for å kalibrere en pH-sensor:**

1. **Klargjør bufferløsninger:**
   - Bufferløsning med pH 4,0 (sur)
   - Bufferløsning med pH 7,0 (nøytral)
   - Eventuelt bufferløsning med pH 10,0 (basisk)

2. **Første kalibreringspunkt (pH 7):**
   - Skyll sensoren med destillert vann
   - Senk sensoren ned i pH 7-bufferløsningen
   - Vent til avlesningen stabiliserer seg
   - Juster sensoren til den viser nøyaktig 7,0

3. **Andre kalibreringspunkt (pH 4):**
   - Skyll sensoren igjen med destillert vann
   - Senk sensoren i pH 4-bufferløsningen
   - Vent til avlesningen stabiliserer seg
   - Juster sensoren til den viser nøyaktig 4,0

4. **Verifiser:**
   - Skyll sensoren og test i pH 7-løsningen igjen
   - Avlesningen bør vise 7,0 (eller svært nær)

**Hvorfor er kalibrering viktig?**
- Uten kalibrering kan sensoren vise feil verdier
- Kalibrering sikrer at målingene er nøyaktige
- Bør gjøres før hvert forsøk og regelmessig ved lange forsøk`,
    },

    // ========== OPPGAVE 2: TEMPERATURSENSOR ==========
    {
      id: 'nat10-6-2-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-2-ex-2',
        number: '6.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvordan en temperatursensor kan brukes i et kjøleskap. Hva måler den, og hva skjer basert på målingene?',
        multipleChoiceOptions: [
          'Sensoren måler temperaturen og slår på kompressoren hvis det blir for varmt',
          'Sensoren måler luftfuktigheten og regulerer viften',
          'Sensoren teller antall ganger døren åpnes',
          'Sensoren måler vekten av maten inne i kjøleskapet',
        ],
        solution: `**Eksempelsvar:**

**Temperatursensor i kjøleskap:**

**Hva den måler:**
- Temperatursensoren måler lufttemperaturen inne i kjøleskapet

**Plassering:**
- Sensoren er plassert inne i kjøleskapet, ofte på baksiden eller i taket

**Hvordan den fungerer:**

1. **Måling:**
   - Sensoren registrerer kontinuerlig temperaturen inne i kjøleskapet

2. **Sammenligning:**
   - Målingen sammenlignes med ønsket temperatur (vanligvis 4-6°C)

3. **Handling:**
   - **Hvis temperaturen blir for høy** (f.eks. 8°C):
     → Sensoren sender signal til termostaten
     → Kompressoren slår på
     → Kjølevæsken sirkulerer og kjøler ned luften
     → Temperaturen synker

   - **Hvis temperaturen blir lav nok** (f.eks. 4°C):
     → Sensoren sender signal til termostaten
     → Kompressoren slår av
     → Kjøleskapet sparer energi

**Resultat:**
Temperaturen holdes stabil på riktig nivå (4-6°C), noe som:
- Holder maten frisk lengre
- Hindrer vekst av bakterier
- Sparer energi (kompressoren kjører bare når det er nødvendig)

**Konklusjon:**
Uten temperatursensor ville kjøleskapet enten bli for varmt (maten råtner) eller for kaldt (fryser maten og bruker for mye strøm).`,
      },
    },

    // ========== OPPGAVE 3: MATCH SENSOR TIL BRUKSOMRÅDE ==========
    {
      id: 'nat10-6-2-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-2-ex-3',
        number: '6.2.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken sensor brukes for å automatisk slå på gatelys når det blir mørkt?',
        options: [
          'Temperatursensor',
          'Lyssensor',
          'Trykksensor',
          'Bevegelsessensor',
        ],
        answer: 1,
        solution: `**Riktig svar:** Lyssensor

**Forklaring:**

En **lyssensor** (fotocelle) måler lysstyrken i omgivelsene og brukes til å automatisk slå på gatelys når det blir mørkt.

**Hvordan det fungerer:**

1. **Når det er lyst (dag):**
   - Lyssensoren registrerer høy lysstyrke
   - Gatelyset er slått av

2. **Når det blir mørkt (kveld/natt):**
   - Lyssensoren registrerer lav lysstyrke
   - Signal sendes til en bryter
   - Gatelyset slår seg automatisk på

3. **Når det blir lyst igjen (morgen):**
   - Lyssensoren registrerer høy lysstyrke igjen
   - Gatelyset slår seg automatisk av

**Fordeler:**
- Sparer energi (lyset er bare på når det trengs)
- Praktisk (slipper å slå på/av manuelt)
- Tilpasser seg årstider (automatisk tidspunkt basert på mørket)

**Andre eksempler på lyssensor:**
- Automatisk lys på biler (slår på ved mørke)
- Smarttelefon (justerer skjermlysstyrke)
- Bevegelsessensor med lys (slår på lys når noen kommer OG det er mørkt)`,
      },
    },

    // ========== OPPGAVE 4: pH-SENSOR ==========
    {
      id: 'nat10-6-2-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-2-ex-4',
        number: '6.2.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du skal måle pH i et akvarium. Forklar hvorfor det er viktig å ha riktig pH, og hva som kan skje hvis pH blir for lav eller for høy.',
        multipleChoiceOptions: [
          'pH bør være 6.5-8.0; for lav pH skader fiskenes gjeller, for høy pH gir ammoniakkforgiftning',
          'pH bør være 2.0-4.0; for lav pH gjør vannet for surt, for høy pH gjør det for basisk',
          'pH bør være 10-14; alle fisker trives best i basisk vann',
          'pH har ingen betydning for fiskenes helse i et akvarium',
        ],
        solution: `**Eksempelsvar:**

**Måling av pH i akvarium:**

**Hva pH måler:**
- pH måler surhet i vannet (pH-skalaen går fra 0-14)
- pH 7 = nøytralt
- pH < 7 = surt
- pH > 7 = basisk

**Riktig pH i akvarium:**

De fleste akvariumfisk trenger pH mellom **6,5 og 7,5** (nær nøytralt).

**Hvorfor riktig pH er viktig:**

Fisk og vannplanter er tilpasset en bestemt pH-verdi. Hvis pH endres for mye, kan det:
- Påvirke fiskens evne til å puste (oksygenopptak i gjellene)
- Stresse fiskene og svekke immunforsvaret
- Påvirke vannplantenes vekst
- Påvirke bakterier som bryter ned avfall i filteret

**Hva skjer hvis pH blir for lav (for surt)?**

- **pH < 6:**
  - Fiskene blir stresset
  - Gjellene kan ta skade
  - Fiskene kan få problemer med å puste
  - Økt risiko for sykdom

**Hva skjer hvis pH blir for høy (for basisk)?**

- **pH > 8:**
  - Giftighet av ammoniakk øker kraftig
  - Ammoniakk (NH₃) er svært giftig for fisk
  - Fiskene kan bli syke eller dø
  - Hud og gjeller kan ta skade

**Hvordan opprettholde riktig pH:**

1. **Måle regelmessig:**
   - Bruk pH-sensor eller pH-teststriper ukentlig

2. **Vannskifte:**
   - Skift 20-30% av vannet hver 1-2. uke
   - Bruk vann med riktig pH

3. **Justere ved behov:**
   - pH for lavt: Tilsett kalkstein eller spesialprodukter
   - pH for høyt: Tilsett tørvemose eller CO₂

**Konklusjon:**
pH-sensor er et viktig verktøy for å holde akvariet sunt og sørge for at fiskene lever i optimale forhold.`,
      },
    },

    // ========== DATALOGGER ==========
    {
      id: 'nat10-6-2-datalogger',
      type: 'text',
      content: `## Datalogger – Samle data over tid

### Hva er en datalogger?

En **datalogger** er et system som:
- Samler inn data fra sensorer
- Lagrer dataene over tid
- Kan vise dataene som grafer eller tabeller

**Forskjell fra enkle målinger:**
- **Enkel måling:** Måler én gang (f.eks. temperaturen akkurat nå)
- **Datalogger:** Måler kontinuerlig over tid (f.eks. temperaturen hver 10. minutt i 24 timer)

### Hvordan fungerer en datalogger?

**Komponenter:**

1. **Sensor(er):**
   - Måler den fysiske eller kjemiske egenskapen (f.eks. temperatur)

2. **Datalogger (enhet):**
   - Mottar signaler fra sensoren
   - Lagrer dataene med tidsstempel
   - Kan være en egen enhet eller en datamaskin/smarttelefon

3. **Programvare:**
   - Viser dataene som graf eller tabell
   - Kan eksportere data til Excel for videre analyse

**Eksempel: Måle temperatur i et rom over 24 timer**

1. **Oppsett:**
   - Koble temperatursensor til datalogger
   - Still inn: Mål temperaturen hvert 10. minutt

2. **Datainnsamling:**
   - Datalogger måler automatisk temperaturen hvert 10. minutt i 24 timer
   - Data lagres med tidsstempel

3. **Analyse:**
   - Data vises som graf: Tid på x-aksen, temperatur på y-aksen
   - Du ser: Når var det varmest? Når var det kaldest? Hvordan varierte temperaturen?

### Fordeler med datalogger

1. **Kontinuerlig måling:**
   - Du slipper å sitte ved siden av og måle manuelt

2. **Nøyaktig tidsstempel:**
   - Alle målinger er merket med nøyaktig tidspunkt

3. **Store datamengder:**
   - Kan samle tusenvis av målinger automatisk

4. **Visualisering:**
   - Data vises som graf → enklere å se mønstre og trender

5. **Bruk i forsøk:**
   - Perfekt for naturfagsforsøk der du vil følge endringer over tid

### Eksempler på bruk av datalogger

**1. Temperaturendring ved fordamping:**
- Sensor måler temperatur i en beholder med vann
- Datalogger registrerer temperaturfall når vannet fordamper
- Graf viser hvor raskt temperaturen synker

**2. pH-endring i en reaksjon:**
- pH-sensor måler pH i en løsning
- Tilsett en syre gradvis
- Datalogger viser hvordan pH endres over tid

**3. Lysstyrke gjennom døgnet:**
- Lyssensor plasseres utendørs
- Datalogger måler lysstyrke hvert 10. minutt i 24 timer
- Graf viser soloppgang, middag (mest lys), og solnedgang

**4. Luftkvalitet i et klasserom:**
- CO₂-sensor måler karbondioksid i luften
- Datalogger registrerer over en skoledag
- Graf viser: CO₂ øker når mange elever er i rommet, synker etter lufting`,
    },

    // ========== OPPGAVE 5: DATALOGGER ==========
    {
      id: 'nat10-6-2-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-2-ex-5',
        number: '6.2.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du skal bruke en datalogger med temperatursensor til å undersøke hvordan temperaturen i et klasserom endres gjennom en skoledag. Beskriv hvordan du setter opp forsøket, og hva du forventer å se i grafen.',
        multipleChoiceOptions: [
          'Temperaturen stiger når elever er til stede og synker i friminutt; grafen viser topper i undervisningstimer',
          'Temperaturen er konstant hele dagen fordi klasserom er godt isolert',
          'Temperaturen synker gradvis fra morgen til ettermiddag',
          'Temperaturen varierer tilfeldig uten mønster gjennom dagen',
        ],
        solution: `**Eksempelsvar:**

**Forsøk: Temperatur i klasserom gjennom en skoledag**

**Utstyr:**
- Datalogger
- Temperatursensor
- Datamaskin med programvare for å vise data

**Oppsett:**

1. **Plassering:**
   - Plasser temperatursensoren midt i klasserommet, omtrent 1,5 meter over gulvet
   - Unngå plassering nær vinduer, radiatorer eller luftekanaler (kan gi unøyaktige målinger)

2. **Innstillinger:**
   - Still inn datalogger til å måle temperaturen hvert **5. minutt**
   - Start målingen kl. 07:00 (før skoledagen starter)
   - Stopp målingen kl. 15:30 (etter skoledagen slutter)

3. **Varighet:**
   - Total måletid: 8,5 timer
   - Antall målinger: ca. 102 målinger (8,5 timer × 12 målinger per time)

**Gjennomføring:**

- Start datalogger kl. 07:00
- La datalogger kjøre automatisk gjennom hele skoledagen
- Ikke rør sensoren eller datalogger underveis
- Stopp datalogger kl. 15:30
- Eksporter data til graf

**Forventede resultater:**

**Graf: Temperatur (y-aksen) mot tid (x-aksen)**

**Forventet kurve:**

1. **Kl. 07:00-08:00 (før elevene kommer):**
   - Lav temperatur (f.eks. 18-19°C)
   - Rom har stått tomt natten over

2. **Kl. 08:00-09:00 (elevene ankommer):**
   - Temperatur stiger gradvis
   - Mange elever gir av kroppsvarm (hver person avgir ca. 100 W varme)

3. **Kl. 09:00-12:00 (undervisning pågår):**
   - Temperatur stabiliserer seg høyere (f.eks. 21-23°C)
   - Kan være små topper og daler:
     - **Topper:** Mange elever i rommet
     - **Daler:** Elever ute i friminutt, vindu/dør åpnes for lufting

4. **Kl. 12:00-13:00 (lunsj):**
   - Temperatur synker litt
   - Færre elever i rommet

5. **Kl. 13:00-15:00 (ettermiddagsundervisning):**
   - Temperatur stiger igjen når elever kommer tilbake

6. **Kl. 15:00-15:30 (elever drar hjem):**
   - Temperatur begynner å synke igjen

**Forklaring:**

- **Menneskekroppen avgir varme:** Hver elev avgir ca. 100 W varme → 25 elever = 2500 W varme!
- **Varme stiger:** Varm luft stiger, og temperaturen i rommet øker
- **Lufting:** Åpne vinduer/dører senker temperaturen raskt

**Konklusjon:**

Datalogger gjør det mulig å se hvordan menneskelig aktivitet påvirker romtemperatur over tid. Dette kan brukes til å optimalisere ventilasjon og energibruk i skolebygg.`,
      },
    },

    // ========== OPPGAVE 6: SENSORER I HVERDAGEN ==========
    {
      id: 'nat10-6-2-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-2-ex-6',
        number: '6.2.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Nevn tre sensorer som finnes i en smarttelefon. Forklar hva hver sensor måler og gi ett eksempel på hvordan den brukes.',
        multipleChoiceOptions: [
          'Akselerometer (bevegelse), GPS (posisjon), lysmåler (skjermlysstyrke)',
          'Temperatursensor (værvarsling), pH-sensor (vannkvalitet), vindmåler (hastighet)',
          'Radarsensor (avstand), lasersensor (måling), ultralyd (ekkolodd)',
          'Alle telefoner har bare én sensor: kameraet',
        ],
        solution: `**Eksempelsvar:**

**Tre sensorer i en smarttelefon:**

---

### 1. Akselerometer (bevegelsessensor)

**Hva den måler:**
- Akselerasjon (endring i hastighet)
- Retning og orientering

**Hvordan den fungerer:**
- Registrerer når telefonen beveger seg eller snur

**Eksempel på bruk:**

- **Rotere skjerm:**
  - Når du snur telefonen fra portrett til landskap, registrerer akselerometeret dette
  - Skjermen roterer automatisk

- **Skrittteller:**
  - Akselerometeret registrerer bevegelsesmønsteret når du går
  - Telefonen teller antall skritt

- **Spill:**
  - Styring i spill (f.eks. kjørespill der du vipper telefonen for å styre)

---

### 2. Lyssensor

**Hva den måler:**
- Lysstyrken i omgivelsene

**Hvordan den fungerer:**
- Fotocelle registrerer hvor mye lys som treffer sensoren

**Eksempel på bruk:**

- **Automatisk skjermlysstyrke:**
  - Når du er ute i solen, registrerer lyssensoren høy lysstyrke
  - Skjermen blir automatisk lysere (slik at du fortsatt kan se innholdet)
  - Når du er i mørke rom, blir skjermen mørkere (skåner øynene og sparer batteri)

---

### 3. GPS-sensor (posisjonssensor)

**Hva den måler:**
- Geografisk posisjon (lengdegrad og breddegrad)

**Hvordan den fungerer:**
- Mottar signaler fra satellitter i rommet
- Beregner nøyaktig posisjon basert på signalene

**Eksempel på bruk:**

- **Kart og navigasjon:**
  - Google Maps bruker GPS til å vise hvor du er
  - Får veibeskrivelse til destinasjon

- **Geotagging av bilder:**
  - Når du tar et bilde, lagres posisjonen der bildet ble tatt
  - Du kan senere se hvor bildet ble tatt på kart

- **Treningsapper:**
  - Strava/Runkeeper sporer løperuten din
  - Beregner distanse og hastighet

---

**Andre sensorer i smarttelefon:**

- **Gyroskop:** Måler rotasjon (brukes i VR og 360°-video)
- **Magnetometer (kompass):** Måler magnetfelt (brukes til å finne nord)
- **Barometer (trykksensor):** Måler lufttrykk (brukes til høydemåling)
- **Nærhetssensor:** Registrerer når du holder telefonen mot øret (slår av skjermen under samtale)
- **Fingeravtrykksensor:** Registrerer fingeravtrykk (brukes til låsing/autentisering)

**Konklusjon:**

Smarttelefoner inneholder mange avanserte sensorer som gjør at telefonen kan tilpasse seg omgivelsene og brukeren. Uten sensorer ville telefonen bare vært en skjerm med knapper!`,
      },
    },

    // ========== SENSORER I HVERDAGEN ==========
    {
      id: 'nat10-6-2-sensorer-hverdagen',
      type: 'text',
      content: `## Sensorer i hverdagen

Sensorer er overalt rundt oss – ofte uten at vi tenker over det! Her er noen eksempler:

### I hjemmet

**1. Kjøleskap og fryser:**
- **Sensor:** Temperatursensor
- **Funksjon:** Holder temperaturen stabil på riktig nivå

**2. Ovn:**
- **Sensor:** Temperatursensor
- **Funksjon:** Slår av varmen når riktig temperatur er nådd

**3. Røykvarsler:**
- **Sensor:** Røyksensor (optisk eller ioniserende)
- **Funksjon:** Registrerer røyk og varsler ved brann

**4. Smartklokke:**
- **Sensor:** Pulssensor, akselerometer
- **Funksjon:** Måler puls og teller skritt

**5. Robotstøvsuger:**
- **Sensor:** Avstandssensor, bevegelsessensor
- **Funksjon:** Unngår hindringer og navigerer i rommet

---

### I bilen

**1. Kollisjonsputer (airbag):**
- **Sensor:** Akselerometer (krasj-sensor)
- **Funksjon:** Utløser kollisjonspute ved plutselig retardasjon (krasjdeteksjon)

**2. ABS-bremser:**
- **Sensor:** Hastighetssensor på hjulene
- **Funksjon:** Forhindrer at hjulene låser seg ved hard bremsing

**3. Parkeringssensor:**
- **Sensor:** Ultralydsensor (sender ut lyd og måler ekko)
- **Funksjon:** Varsler om hindringer bak bilen når du rygger

**4. Motortemperatur:**
- **Sensor:** Temperatursensor i motor
- **Funksjon:** Varsler hvis motoren blir for varm

**5. Oksygensensor:**
- **Sensor:** Oksygensensor i eksosanlegget
- **Funksjon:** Optimaliserer forbrenningen i motoren (reduserer utslipp)

---

### I offentlige rom

**1. Automatiske dører:**
- **Sensor:** Bevegelsessensor (IR-sensor)
- **Funksjon:** Åpner døren når noen nærmer seg

**2. Toaletter med automatisk spyling:**
- **Sensor:** IR-sensor
- **Funksjon:** Registrerer når noen reiser seg og utløser spyling

**3. Gatelys:**
- **Sensor:** Lyssensor
- **Funksjon:** Slår på lys når det blir mørkt

**4. Værstasjon:**
- **Sensor:** Temperatursensor, trykksensor, fuktighetssensor, vindsensor
- **Funksjon:** Samler inn værdata for prognoser

---

### I naturen og miljøovervåking

**1. Vannkvalitet:**
- **Sensor:** pH-sensor, oksygensensor, temperatursensor
- **Funksjon:** Overvåker vannkvalitet i elver og innsjøer

**2. Luftkvalitet:**
- **Sensor:** CO₂-sensor, partikkelsensor
- **Funksjon:** Måler forurensning i byluft

**3. Jordskjelv:**
- **Sensor:** Seismometer (bevegelsessensor)
- **Funksjon:** Registrerer jordskjelv og tsunami-varsling`,
    },

    // ========== OPPGAVE 7: SENSOR I BIL ==========
    {
      id: 'nat10-6-2-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-2-ex-7',
        number: '6.2.7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken sensor brukes for å utløse kollisjonsputen (airbag) i en bil ved et sammenstøt?',
        options: [
          'Temperatursensor',
          'Lyssensor',
          'Akselerometer (krasj-sensor)',
          'pH-sensor',
        ],
        answer: 2,
        solution: `**Riktig svar:** Akselerometer (krasj-sensor)

**Forklaring:**

Et **akselerometer** (også kalt krasj-sensor) brukes til å utløse kollisjonsputen (airbag) i en bil ved et sammenstøt.

**Hvordan det fungerer:**

1. **Normal kjøring:**
   - Akselerometeret måler bilens bevegelse og akselerasjon
   - Ingen plutselige endringer → airbag forblir inaktiv

2. **Ved kollisjon:**
   - Bilen kolliderer med et objekt
   - Bilen bremser **ekstremt raskt** (plutselig retardasjon)
   - Akselerometeret registrerer den voldsomme retardasjonen

3. **Utløsing av airbag:**
   - Signal sendes til airbag-systemet
   - Airbag blåses opp på **millisekunder** (ca. 0,03 sekunder)
   - Airbag beskytter fører og passasjerer mot å slå hodet i rattet/dashbordet

**Terskelverdi:**

- Airbag utløses bare ved **kraftige** sammenstøt (f.eks. > 30 km/t frontkollisjoner)
- Ved små kollisjoner (f.eks. parkering) utløses den IKKE

**Plassering:**

- Akselerometre er plassert flere steder i bilen (front, sider, bak)
- Dette sikrer at airbag utløses kun ved riktig type kollisjon

**Andre sensorer i airbag-system:**

- **Trykksenorer:** Registrerer endring i lufttrykk i dørene (sidekollisjoner)
- **Beltestrammere:** Strammer setebeltene ved kollisjon (sammen med airbag)

**Konklusjon:**

Akselerometeret er en livsviktig sensor i moderne biler som har reddet utallige liv ved å utløse airbag i riktig øyeblikk.`,
      },
    },

    // ========== SENSORER I NATURFAGSFORSØK ==========
    {
      id: 'nat10-6-2-sensorer-naturfag',
      type: 'text',
      content: `## Sensorer i naturfagsforsøk

Sensorer er uvurderlige verktøy i naturfag. De lar oss:
- Måle nøyaktig
- Samle store mengder data
- Følge endringer over tid
- Visualisere resultater som grafer

### Eksempler på bruk av sensorer i naturfagsforsøk

---

### Forsøk 1: Temperaturendring ved oppløsning av salt

**Problemstilling:**
Hva skjer med temperaturen når du løser opp salt i vann?

**Hypotese:**
Temperaturen vil synke (endoterm reaksjon).

**Utstyr:**
- Temperatursensor + datalogger
- Beger med vann (100 ml)
- Salt (20 g)

**Fremgangsmåte:**

1. Plasser temperatursensor i vannet
2. Start datalogger (mål hvert 5. sekund)
3. Tilsett salt og rør om
4. Mål temperatur i 5 minutter

**Forventet resultat:**
- Graf viser at temperaturen synker når saltet løses opp
- Temperaturen stabiliserer seg på nytt nivå etter ca. 2-3 minutter

**Forklaring:**
- Oppløsning av salt (NaCl) i vann er en **endoterm reaksjon**
- Reaksjonen trekker til seg varme fra omgivelsene
- Derfor synker temperaturen

---

### Forsøk 2: pH-endring ved nøytralisering

**Problemstilling:**
Hvordan endres pH når du tilsetter base til en syre?

**Hypotese:**
pH vil øke gradvis når base tilsettes.

**Utstyr:**
- pH-sensor + datalogger
- Eddiksyre (syre)
- Natriumhydroksid (base)
- Pipette

**Fremgangsmåte:**

1. Plasser pH-sensor i eddiksyren
2. Start datalogger (mål kontinuerlig)
3. Tilsett base dråpevis med pipette
4. Rør forsiktig
5. Fortsett til pH når 10-11

**Forventet resultat:**
- Graf viser **S-kurve**:
  - Starter lavt (pH 3-4, sur)
  - Økende gradvis
  - Bratt økning rundt nøytralpunktet (pH 7)
  - Flater ut ved pH 10-11 (basisk)

**Forklaring:**
- Syre (H⁺) + base (OH⁻) → vann (H₂O)
- Når all syren er nøytralisert, stiger pH raskt
- Graf visualiserer nøytralisering tydelig

---

### Forsøk 3: Lysstyrke og fotosyntese

**Problemstilling:**
Hvordan påvirker lysstyrken fotosyntesehastigheten?

**Hypotese:**
Jo mer lys, jo raskere fotosyntese (opp til et visst punkt).

**Utstyr:**
- Lyssensor + datalogger
- Vannplanter i beger
- Lampe med dimmer
- Oksygensensor (måler O₂ produsert)

**Fremgangsmåte:**

1. Plasser vannplanter i beger med vann
2. Plasser lyssensor og oksygensensor i vannet
3. Start med lav lysstyrke (dimmet lampe)
4. Mål oksygenproduksjon i 10 minutter
5. Øk lysstyrken gradvis
6. Gjenta måling

**Forventet resultat:**
- Mer lys → mer fotosyntese → mer oksygen produsert
- Lysstyrken kan måles nøyaktig med lyssensor
- Graf viser sammenhengen mellom lys og oksygenproduksjon

---

### Forsøk 4: Luftkvalitet i klasserom

**Problemstilling:**
Hvordan påvirker antall elever CO₂-nivået i et klasserom?

**Hypotese:**
Flere elever → høyere CO₂-nivå.

**Utstyr:**
- CO₂-sensor + datalogger
- Klasserom

**Fremgangsmåte:**

1. Plasser CO₂-sensor midt i klasserommet
2. Start datalogger før skoledagen (kl. 07:00)
3. Mål CO₂-nivå hvert 5. minutt gjennom skoledagen
4. Stopp datalogger etter skoledagen (kl. 15:00)

**Forventet resultat:**
- Tomt klasserom: Lavt CO₂-nivå (ca. 400 ppm)
- Mange elever: Høyt CO₂-nivå (kan nå 1500-2000 ppm)
- Graf viser topper når elever er i rommet, daler når rommet er tomt

**Konklusjon:**
- Mennesker puster ut CO₂
- Dårlig ventilasjon gir høyt CO₂-nivå
- Høyt CO₂-nivå kan gi hodepine, tretthet og dårlig konsentrasjon
- Viktig å lufte klasserom regelmessig!`,
    },

    // ========== OPPGAVE 8: FORSØK MED SENSOR ==========
    {
      id: 'nat10-6-2-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-2-ex-8',
        number: '6.2.8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du skal undersøke hvordan temperaturen endres når is smelter. Beskriv hvordan du setter opp forsøket med temperatursensor og datalogger, og hva du forventer å se i grafen.',
        multipleChoiceOptions: [
          'Temperaturen holder seg på 0°C mens isen smelter, deretter stiger den gradvis',
          'Temperaturen synker under 0°C mens isen smelter, deretter stiger raskt',
          'Temperaturen stiger lineært fra -10°C til romtemperatur uten pause',
          'Temperaturen svinger opp og ned tilfeldig under smelteprosessen',
        ],
        solution: `**Eksempelsvar:**

**Forsøk: Temperaturendring når is smelter**

**Problemstilling:**
Hvordan endres temperaturen når is smelter til vann?

**Hypotese:**
Temperaturen forblir konstant (0°C) mens isen smelter, deretter stiger temperaturen når alt er vann.

**Utstyr:**
- Temperatursensor
- Datalogger
- Beger med knuste isbiter (ca. 100 g)
- Varmekilde (f.eks. Bunsenbrenne eller varmplate)
- Stativ for å holde sensoren

---

**Oppsett:**

1. **Plassering:**
   - Plasser knuste isbiter i et beger
   - Senk temperatursensoren ned i isen (midt i begeret)
   - Unngå at sensoren berører bunnen eller sidene av begeret

2. **Innstillinger:**
   - Still inn datalogger til å måle temperaturen hvert **5. sekund**
   - Start målingen før du begynner å varme opp

3. **Oppvarming:**
   - Plasser begeret på en varmplate (lav varme)
   - La isen smelte gradvis

4. **Varighet:**
   - Fortsett målingen til all is er smeltet og vannet begynner å bli varmt (f.eks. 30-40°C)

---

**Gjennomføring:**

1. Start datalogger
2. Begynn oppvarming
3. Ikke rør sensoren underveis
4. Stopp målingen når vannet har nådd ca. 40°C
5. Eksporter data til graf

---

**Forventede resultater:**

**Graf: Temperatur (y-aksen) mot tid (x-aksen)**

**Forventet kurve:**

**Fase 1: Is varmes opp (negativ temperatur → 0°C)**
- Starter ved f.eks. -10°C (hvis is kommer fra fryser)
- Temperaturen stiger gradvis til 0°C

**Fase 2: Smelting (temperatur konstant ved 0°C)**
- Temperaturen forblir **konstant** ved **0°C** i flere minutter
- Selv om vi tilsetter varme, stiger ikke temperaturen!
- Dette er fordi all varme brukes til å bryte bindingene mellom vannmolekylene (faseovergang)

**Fase 3: Vann varmes opp (0°C → høyere temperatur)**
- Når all is er smeltet, begynner temperaturen å stige igjen
- Temperaturen stiger jevnt (f.eks. til 40°C)

---

**Graf:**

\`\`\`
Temperatur (°C)
   40 |                        ___----
      |                   __---
      |              __---
   20 |         __---
      |    __---
    0 |-------------------  ← Konstant 0°C under smelting!
      |  /
  -10 |_/
      +--------------------------------> Tid
       Fase 1   Fase 2    Fase 3
       (is)   (smelting)  (vann)
\`\`\`

---

**Forklaring:**

**Hvorfor forblir temperaturen konstant under smelting?**

- Varme tilsettes kontinuerlig
- Under smelting brukes all varme til å bryte hydrogenbindinger mellom vannmolekylene
- Dette kalles **smeltevarme** (latent varme)
- Først når all is er smeltet, kan temperaturen stige igjen

**Fase 2 (konstant temperatur) kalles et "platå"**

---

**Konklusjon:**

Forsøket viser at under en **faseovergang** (fast → flytende) forblir temperaturen konstant. All tilført varme brukes til å endre fasen, ikke til å øke temperaturen.

Dette er også grunnen til at du kan bruke is til å holde drikkevarer kalde: Så lenge det er is igjen, vil temperaturen holde seg ved 0°C!`,
      },
    },

    // ========== OPPGAVE 9: ANALYSE AV GRAF ==========
    {
      id: 'nat10-6-2-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-2-ex-9',
        number: '6.2.9',
        type: 'classic',
        difficulty: 'medium',
        task: 'En elev brukte en CO₂-sensor til å måle CO₂-nivået i et klasserom over en skoledag. Grafen viser følgende: Kl. 08:00: 400 ppm, kl. 09:00: 800 ppm, kl. 10:00 (etter lufting): 450 ppm, kl. 11:00: 900 ppm. Forklar hva som skjer i rommet basert på disse målingene.',
        multipleChoiceOptions: [
          'CO₂ øker når elever puster, synker ved lufting; 400 ppm er utendørs normalverdi',
          'CO₂ synker når elever puster inn, øker ved lufting',
          'CO₂ er konstant hele dagen uansett antall personer',
          'CO₂ øker bare om natten når ingen er i rommet',
        ],
        solution: `**Eksempelsvar:**

**Analyse av CO₂-målinger i klasserom:**

**Målinger:**
- Kl. 08:00: 400 ppm
- Kl. 09:00: 800 ppm
- Kl. 10:00 (etter lufting): 450 ppm
- Kl. 11:00: 900 ppm

---

**Forklaring av målingene:**

### Kl. 08:00: 400 ppm (lavt nivå)

**Hva skjer:**
- Klasserommet har stått tomt natten over
- CO₂-nivået er tilbake til **normalt utendørsnivå** (ca. 400 ppm)

**Hvorfor:**
- Ingen mennesker i rommet → ingen CO₂ produseres
- Eventuell ventilasjon har skiftet ut luften med frisk utendørsluft

---

### Kl. 09:00: 800 ppm (høyere nivå)

**Hva skjer:**
- Elever og lærer har vært i rommet i 1 time
- CO₂-nivået har **fordoblet seg**

**Hvorfor:**
- Mennesker puster ut CO₂ ved celleånding
- 25 elever + 1 lærer = 26 personer
- Hver person puster ut ca. 200 ml CO₂ per minutt
- Hvis rommet ikke er ventilert, bygger CO₂ seg opp i luften

**Formel:**
CO₂ produsert = antall personer × tid × CO₂ per minutt

---

### Kl. 10:00: 450 ppm (rett etter lufting)

**Hva skjer:**
- Rommet er luftet (vindu/dør åpnet)
- CO₂-nivået har sunket tilbake til **nesten normalt** nivå

**Hvorfor:**
- Frisk utendørsluft (400 ppm) strømmer inn
- CO₂-rik luft (900 ppm) strømmer ut
- Luftskifte reduserer CO₂-nivået raskt

**Tid for lufting:**
- Selv 5-10 minutters lufting kan redusere CO₂ kraftig

---

### Kl. 11:00: 900 ppm (høyere enn tidligere)

**Hva skjer:**
- Elever har vært i rommet i 1 time til etter lufting
- CO₂-nivået har steget igjen

**Hvorfor:**
- Samme antall personer puster ut CO₂
- CO₂ bygger seg opp igjen i rommet

**Høyere enn kl. 09:00?**
- Ja, 900 ppm > 800 ppm
- Dette kan skyldes:
  - Mindre ventilasjon (kanskje vinduet ble lukket)
  - Mer fysisk aktivitet (elevene beveger seg mer → mer CO₂ produseres)

---

**Helsemessige konsekvenser:**

**400-600 ppm:**
- Normal utendørsluft
- God luftkvalitet

**600-1000 ppm:**
- Akseptabel luftkvalitet
- Enkelte kan føle seg litt trette

**1000-1500 ppm:**
- Dårlig luftkvalitet
- Tretthet, hodepine, dårlig konsentrasjon
- Anbefales lufting

**> 1500 ppm:**
- Meget dårlig luftkvalitet
- Sterk tretthet, svimmelhet
- Lufting nødvendig!

---

**Konklusjon:**

**Hva lærer vi av disse målingene?**

1. **CO₂ bygger seg opp** når mange mennesker er i et lukket rom
2. **Lufting virker!** Selv kort lufting reduserer CO₂ kraftig
3. **Regelmessig lufting er viktig** for god luftkvalitet og læring

**Anbefaling:**
- Luft klasserommet hver time i 5-10 minutter
- Hold CO₂-nivået under 1000 ppm
- Godt ventilerte klasserom gir bedre konsentrasjon og læring!`,
      },
    },

    // ========== OPPGAVE 10: PRAKTISK OPPGAVE ==========
    {
      id: 'nat10-6-2-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-2-ex-10',
        number: '6.2.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du skal designe et system som automatisk vanner planter i et drivhus. Systemet skal bruke sensorer til å bestemme når plantene trenger vann. Beskriv hvilke sensorer du vil bruke, hvordan systemet skal fungere, og hvorfor dette er bedre enn å vanne manuelt.',
        multipleChoiceOptions: [
          'Fuktighetsensor i jorda + automatisk vannpumpe; bedre fordi det gir nøyaktig vannmengde basert på behov',
          'Bare tidsstyrt vannpumpe uten sensorer er like effektivt',
          'Temperatursensor i luften bestemmer vannmengden',
          'Manuell vanning er alltid bedre enn automatiske systemer',
        ],
        solution: `**Eksempelsvar:**

**Automatisk vanningssystem for drivhus**

---

## Del 1: Valg av sensorer

**Sensorer som skal brukes:**

### 1. Fuktighetssensor i jord

**Hva den måler:**
- Fuktighet (vanninnhold) i jorden

**Hvordan den fungerer:**
- To elektroder stikkes ned i jorden
- Måler elektrisk ledningsevne (vått jord leder bedre enn tørr jord)

**Plassering:**
- Stikk sensor 5-10 cm ned i jorden ved plantens røtter
- Plasser én sensor per plantegruppe (eller én per plante hvis de har ulike vannbehov)

---

### 2. Temperatursensor

**Hva den måler:**
- Lufttemperatur i drivhuset

**Hvorfor:**
- Høyere temperatur → mer fordamping → plantene trenger mer vann
- Lavere temperatur → mindre fordamping → mindre vanning nødvendig

**Plassering:**
- Henges opp i midten av drivhuset, ca. 1,5 meter over bakken

---

### 3. Luftfuktighetssensor

**Hva den måler:**
- Luftfuktighet (mengde vanndamp i luften)

**Hvorfor:**
- Lav luftfuktighet → mer fordamping fra planter → mer vanning nødvendig
- Høy luftfuktighet → mindre fordamping → mindre vanning nødvendig

**Plassering:**
- Sammen med temperatursensor i midten av drivhuset

---

### 4. Lyssensor (valgfri)

**Hva den måler:**
- Lysstyrke

**Hvorfor:**
- Mer lys → mer fotosyntese → mer vann brukes
- Kan tilpasse vanningen etter hvor mye lys plantene får

**Plassering:**
- På taket eller veggen i drivhuset

---

## Del 2: Hvordan systemet fungerer

**Komponenter:**

1. **Sensorer** (fuktighetssensor, temperatursensor, luftfuktighetssensor)
2. **Mikrokontroller** (f.eks. Arduino eller Raspberry Pi)
3. **Vannpumpe** (pumper vann fra tank til plantene)
4. **Slange/dryppvanning** (fordeler vann til plantene)
5. **Strømforsyning** (batteri eller solcellepanel)
6. **Vanntank** (lagrer vann)

---

**Algoritme (programlogikk):**

\`\`\`
HENT data fra fuktighetssensor
HENT data fra temperatursensor
HENT data fra luftfuktighetssensor

HVIS fuktighetssensor viser "tørr jord" (f.eks. < 30% fuktighet):
    OG temperaturen er høy (f.eks. > 25°C)
    OG luftfuktigheten er lav (f.eks. < 50%)
DA:
    SLÅ PÅ vannpumpe i 30 sekunder
    VENT 10 minutter
    SJEKK fuktighetssensor igjen

ELLERS HVIS fuktighetssensor viser "fuktig jord" (> 60%):
    IKKE vann (unngå overvanning)

GJENTA hver 10. minutt
\`\`\`

---

**Steg-for-steg:**

1. **Måling:**
   - Mikrokontroller leser data fra sensorer hvert 10. minutt

2. **Analyse:**
   - Mikrokontroller sammenligner fuktighetsnivået med terskelverdi (f.eks. 30%)

3. **Beslutning:**
   - HVIS jordas fuktighet < 30% → Vann plantene
   - HVIS jordas fuktighet > 60% → IKKE vann (unngå overvanning)

4. **Handling:**
   - Mikrokontroller sender signal til vannpumpe
   - Vannpumpe pumper vann i 30 sekunder (kan justeres)
   - Vann fordeles via dryppvanning til plantene

5. **Tilbakemelding:**
   - Etter 10 minutter måles fuktighetsnivået igjen
   - Hvis fortsatt tørt → vann igjen
   - Hvis fuktig nok → stopp vanning

---

## Del 3: Fordeler med automatisk vanning

**Sammenlignet med manuell vanning:**

### Fordel 1: Presist vannbehov

**Manuell vanning:**
- Du gjetter når plantene trenger vann
- Risiko for overvanning (plantene råtner) eller undervanning (plantene visner)

**Automatisk system:**
- Sensoren måler **nøyaktig** hvor mye fuktighet som er i jorden
- Vannes kun når nødvendig → optimalt for plantene

---

### Fordel 2: Kontinuerlig overvåking

**Manuell vanning:**
- Du må huske å vanne regelmessig (kanskje 1-2 ganger per dag)
- Hvis du glemmer eller er borte, kan plantene tørke ut

**Automatisk system:**
- Systemet sjekker fuktighetsnivået **kontinuerlig** (hvert 10. minutt)
- Vannes automatisk når nødvendig → plantene får alltid nok vann

---

### Fordel 3: Tilpasset vanning basert på værforhold

**Manuell vanning:**
- Du vanner samme mengde hver gang, uavhengig av vær

**Automatisk system:**
- Temperatursensor og luftfuktighetssensor justerer vanningen:
  - **Varm, tørr dag:** Mer vanning (mer fordamping)
  - **Kjølig, fuktig dag:** Mindre vanning (mindre fordamping)
- Optimal vanning for plantenes behov

---

### Fordel 4: Sparer tid og arbeid

**Manuell vanning:**
- Du må fysisk vanne plantene hver dag
- Tidkrevende hvis du har mange planter

**Automatisk system:**
- Systemet vanner automatisk
- Du kan fokusere på andre oppgaver
- Sparer tid, spesielt i store drivhus

---

### Fordel 5: Sparer vann

**Manuell vanning:**
- Lett å vanne for mye → vann renner ut av potten eller jorda
- Sløsing med vann

**Automatisk system:**
- Sensoren sikrer at du bare vanner når nødvendig
- Dryppvanning fordeler vann jevnt → mindre sløsing
- Miljøvennlig og økonomisk

---

## Del 4: Forbedringer

**Ekstra funksjoner:**

1. **Datalogging:**
   - Lagre data fra sensorer over tid
   - Analysere vanningsmønster og optimalisere systemet

2. **Mobilvarsel:**
   - Send SMS/e-post hvis vanntanken er tom
   - Varsle hvis systemet oppdager feil (f.eks. sensor ødelagt)

3. **Solcellepanel:**
   - Grønn energi → systemet er selvforsynt

4. **Vannstandssensor:**
   - Måler vannivået i tanken
   - Varsler når tanken må fylles på

---

## Konklusjon

**Automatisk vanningssystem med sensorer:**

✅ Presist vannbehov basert på jordfuktighet
✅ Kontinuerlig overvåking
✅ Tilpasset vanning basert på temperatur og luftfuktighet
✅ Sparer tid og arbeid
✅ Sparer vann og er miljøvennlig
✅ Plantene vokser bedre og gir høyere avling

**Systemet er en praktisk anvendelse av sensorer, mikrokontrollere og automatisering – slik teknologi brukes i moderne landbruk!**`,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'nat10-6-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Hva har vi lært?

**Sensorer:**
- Registrerer, måler og omformer fysiske/kjemiske egenskaper
- Typer: Temperatursensor, lyssensor, trykksensor, bevegelsessensor, pH-sensor, fuktighetssensor

**Digitale målinger:**
- Analog → kontinuerlig signal
- Digital → tall som kan lagres og analyseres

**Datalogger:**
- Samler data fra sensorer over tid
- Visualiserer data som grafer
- Perfekt for forsøk der du vil følge endringer over tid

**Sensorer i hverdagen:**
- Smarttelefon, bil, hjem, offentlige rom
- Gjør hverdagen enklere, tryggere og mer energieffektiv

**Sensorer i naturfagsforsøk:**
- Nøyaktige målinger
- Kontinuerlig datainnsamling
- Visualisering av resultater

### Viktigste poeng

1. **Sensorer er overalt** – de gjør teknologien smart og responsiv
2. **Datalogger samler data over tid** – perfekt for forsøk og overvåking
3. **Sensorer gir nøyaktige målinger** – bedre enn manuell måling
4. **Visualisering hjelper oss å forstå** – grafer viser mønstre og trender

### Neste steg

Nå som du forstår sensorer og hvordan de brukes, er du klar til å:
- Bruke sensorer i praktiske naturfagsforsøk
- Designe egne systemer med sensorer
- Analysere data fra datalogger
- Forstå hvordan teknologien rundt deg fungerer`,
    },
    // ========== EKSEMPEL: SENSORDATA I FORSØK ==========
    {
      id: 'nat10-6-2-example-sensordata',
      type: 'example',
      title: 'Eksempel: Tolke sensordata fra et forsøk',
      problem: 'En elev bruker en temperatursensor med datalogger for å måle avkjøling av en kopp te. Etter 30 minutter ser dataene slik ut:\n\nMinutt 0: 85°C, Minutt 5: 72°C, Minutt 10: 63°C, Minutt 15: 56°C, Minutt 20: 50°C, Minutt 25: 46°C, Minutt 30: 42°C\n\nHva kan vi observere om avkjølingshastigheten?',
      solution: `**Løsning:**

**Beregning av temperaturfall per 5-minutters intervall:**

| Periode | Temperaturfall | Fall per minutt |
|---------|---------------|-----------------|
| 0-5 min | 85→72 = 13°C | 2,6°C/min |
| 5-10 min | 72→63 = 9°C | 1,8°C/min |
| 10-15 min | 63→56 = 7°C | 1,4°C/min |
| 15-20 min | 56→50 = 6°C | 1,2°C/min |
| 20-25 min | 50→46 = 4°C | 0,8°C/min |
| 25-30 min | 46→42 = 4°C | 0,8°C/min |

**Observasjoner:**
1. Avkjølingshastigheten er **størst i starten** (13°C de første 5 minuttene)
2. Hastigheten **avtar gradvis** (bare 4°C de siste 5 minuttene)
3. Dette skyldes at temperaturforskjellen mellom teen og rommet minker
4. Jo nærmere teen er romtemperatur, jo saktere avkjøles den

**Naturvitenskapelig forklaring:**
Dette er i tråd med **Newtons avkjølingslov**: Avkjølingshastigheten er proporsjonal med temperaturforskjellen mellom objektet og omgivelsene.

**Fordel med datalogger:**
Uten datalogger ville eleven måttet sitte og lese av termometeret hvert 5. minutt. Med datalogger ble alle 30 datapunktene samlet automatisk med nøyaktige tidsstempler!`,
    },

    // ========== OPPGAVE 11: ANALOG VS DIGITAL ==========
    {
      id: 'nat10-6-2-ex-11-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-2-ex-11',
        number: '6.2.11',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom en analog og en digital sensor?',
        options: [
          'En analog sensor gir et kontinuerlig signal, en digital sensor gir diskrete tallverdier',
          'En analog sensor er nyere teknologi enn en digital sensor',
          'En analog sensor bruker strøm, en digital sensor bruker batteri',
          'Det er ingen forskjell mellom analog og digital sensor',
        ],
        answer: 0,
        solution: `**Svar: En analog sensor gir et kontinuerlig signal, en digital sensor gir diskrete tallverdier**

**Analog sensor:**
- Gir et kontinuerlig signal (f.eks. kvikksølv i et termometer som stiger gradvis)
- Kan ha uendelig mange verdier
- Avlesningen er mer subjektiv (du leser av med øynene)

**Digital sensor:**
- Signalet omformes til bestemte tallverdier (diskrete verdier)
- Viser eksakte tall på en skjerm (f.eks. 22,3°C)
- Kan enkelt kobles til datamaskiner og datalogger
- Mer nøyaktig og konsistent avlesning`,
      },
    },

    // ========== OPPGAVE 12: KALIBRERING ==========
    {
      id: 'nat10-6-2-ex-12-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-2-ex-12',
        number: '6.2.12',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor er det viktig å kalibrere en sensor før bruk?',
        options: [
          'For å sikre at sensoren gir nøyaktige målinger ved å justere den mot kjente verdier',
          'For å gjøre sensoren vanntett',
          'For å forlenge batterilevetiden',
          'Kalibrering er ikke nødvendig for moderne sensorer',
        ],
        answer: 0,
        solution: `**Svar: For å sikre at sensoren gir nøyaktige målinger ved å justere den mot kjente verdier**

**Forklaring:**

Kalibrering betyr å justere sensoren slik at den viser riktige verdier. Over tid kan sensorer "drifte" og gi unøyaktige avlesninger.

**Eksempel med pH-sensor:**
- Uten kalibrering kan sensoren vise pH 6,5 når den egentlige verdien er pH 7,0
- Ved å kalibrere mot bufferløsninger med kjent pH, justerer du sensoren
- Etter kalibrering gir sensoren korrekte avlesninger

**Når bør man kalibrere?**
- Før hvert forsøk
- Regelmessig ved lange forsøk
- Hvis sensoren har ligget ubrukt lenge
- Hvis resultatene virker urimelige`,
      },
    },

    // ========== OPPGAVE 13: PLANLEGGE FORSØK ==========
    {
      id: 'nat10-6-2-ex-13-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-2-ex-13',
        number: '6.2.13',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du vil undersøke om fargen på en kopp (svart vs. hvit) påvirker hvor raskt varmt vann avkjøles. Beskriv hvordan du setter opp forsøket med temperatursensorer og datalogger.',
        solution: `**Forsøk: Avkjøling i svart vs. hvit kopp**

**Hypotese:** Vann i den svarte koppen avkjøles raskere fordi mørke overflater stråler ut mer varme.

**Utstyr:**
- 2 identiske kopper (en svart, en hvit)
- 2 temperatursensorer
- 1 datalogger med 2 kanaler
- Kokende vann
- Målesylinder (for lik vannmengde)

**Oppsett:**
1. Mål opp 200 ml kokende vann i hver kopp
2. Plasser en temperatursensor i hver kopp
3. Koble begge sensorene til dataloggeren
4. Still inn datalogger: mål hvert 30. sekund i 60 minutter
5. Start målingen samtidig

**Kontrollerte variabler:**
- Lik mengde vann (200 ml)
- Lik starttemperatur
- Lik romtemperatur
- Like kopper (bortsett fra fargen)

**Analyse:**
- Lag en graf med to linjer (svart kopp og hvit kopp)
- Sammenlign avkjølingshastigheten
- Sjekk om den svarte koppen faktisk avkjøles raskere

**Forventet resultat:**
Den svarte koppen vil avkjøles litt raskere fordi mørke overflater er bedre til å utstråle varmeenergi (infrarød stråling).`,
      },
    },

    // ========== OPPGAVE 14: SENSORER I MOBIL ==========
    {
      id: 'nat10-6-2-ex-14-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-2-ex-14',
        number: '6.2.14',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er en røykvarsler, og hvilken type sensor bruker den? Forklar hvordan den fungerer steg for steg.',
        solution: `**Røykvarsler:**

En røykvarsler er en sikkerhetsenhet som registrerer røyk i luften og gir alarm ved brannfare.

**Type sensor:** Optisk røyksensor (fotocelle)

**Steg-for-steg:**

1. **Normal tilstand:**
   - En LED sender ut et lysstråle inne i røykvarsleren
   - Lysstrålen treffer normalt ikke fotocellen (lyssensoren)
   - Ingen alarm

2. **Når røyk kommer inn:**
   - Røykpartikler slipper inn gjennom små åpninger
   - Røykpartiklene sprer lyset fra LED-en i ulike retninger
   - Noe av det spredte lyset treffer nå fotocellen

3. **Deteksjon:**
   - Fotocellen registrerer lyset som er spredt av røyken
   - Elektronikken i røykvarsleren tolker dette som "røyk oppdaget"

4. **Alarm:**
   - Sirenen slår på med høy lyd (minst 85 dB)
   - Varsler alle i boligen om potensiell brann

**Viktig:** Test røykvarsleren månedlig med testknappen, og skift batteri minst en gang i året!`,
      },
    },

    // ========== OPPGAVE 15: NØYAKTIGHET OG PRESISJON ==========
    {
      id: 'nat10-6-2-ex-15a-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-2-ex-15a',
        number: '6.2.15a',
        type: 'classic',
        difficulty: 'medium',
        task: 'En elev måler temperaturen i et rom fem ganger med to ulike termometre. Termometer A gir: 21,5 - 21,3 - 21,7 - 21,4 - 21,6°C. Termometer B gir: 20,1 - 22,3 - 19,8 - 23,0 - 20,3°C. Den faktiske temperaturen er 21,5°C.\n\na) Hvilket termometer er mest nøyaktig (nærmest sann verdi)?\nb) Hvilket termometer er mest presist (gir like verdier hver gang)?\nc) Hvilket termometer er best å bruke i et forsøk?',
        solution: `**Løsning:**

**a) Nøyaktighet (nærmest sann verdi):**

Termometer A: Gjennomsnitt = (21,5 + 21,3 + 21,7 + 21,4 + 21,6) / 5 = **21,5°C**
Termometer B: Gjennomsnitt = (20,1 + 22,3 + 19,8 + 23,0 + 20,3) / 5 = **21,1°C**

Termometer A er mest nøyaktig fordi gjennomsnittet (21,5°C) er identisk med den faktiske temperaturen.

**b) Presisjon (gir like verdier):**

Termometer A: Spenn = 21,7 - 21,3 = **0,4°C** (lite spenn → høy presisjon)
Termometer B: Spenn = 23,0 - 19,8 = **3,2°C** (stort spenn → lav presisjon)

Termometer A er mye mer presist fordi målingene varierer veldig lite.

**c) Hvilket er best?**

**Termometer A er klart best** fordi det er BÅDE nøyaktig OG presist.

Termometer B er verken nøyaktig nok (avvik på 0,4°C) eller presist (målinger varierer med 3,2°C).

**Viktige begreper:**
- **Nøyaktighet:** Hvor nær sann verdi vi måler (systematisk feil)
- **Presisjon:** Hvor like gjentatte målinger er (tilfeldig feil)
- Det beste instrumentet er BÅDE nøyaktig OG presist`,
      },
    },

    // ========== OPPGAVE 16: SENSORER OG MILJØ ==========
    {
      id: 'nat10-6-2-ex-16-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-2-ex-16',
        number: '6.2.16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En kommune ønsker å overvåke vannkvaliteten i en lokal elv. Hvilke sensorer bør de installere, og hva bør de måle? Forklar hvorfor hver måling er viktig for å vurdere vannkvaliteten.',
        solution: `**Sensoroppsett for vannkvalitetsovervåking:**

**1. Temperatursensor**
- **Måler:** Vanntemperatur
- **Hvorfor viktig:** Temperatur påvirker oksygeninnhold, biologisk aktivitet og fiskenes helse. Unormalt høy temperatur kan tyde på industrielt utslipp.

**2. pH-sensor**
- **Måler:** Vannets surhet (pH 0-14)
- **Hvorfor viktig:** De fleste fisk trives ved pH 6,5-8,5. Sur nedbør kan senke pH. Industriutslipp kan endre pH drastisk.

**3. Oksygensensor (løst oksygen)**
- **Måler:** Mengden oksygen oppløst i vannet (mg/L)
- **Hvorfor viktig:** Fisk og andre organismer trenger oksygen. Lavt oksygennivå (under 5 mg/L) er farlig for livet i elven. Organisk forurensning (kloakk) bruker opp oksygen.

**4. Turbiditetssensor**
- **Måler:** Vannets grumshet (mengden partikler)
- **Hvorfor viktig:** Grumsete vann kan skyldes erosjon, avrenning fra jordbruk eller utslipp. Partikler blokkerer lys og påvirker plantevekst og fotosyntes.

**5. Ledningsevnesensor (konduktivitet)**
- **Måler:** Vannets evne til å lede strøm (påvirkes av oppløste salter og mineraler)
- **Hvorfor viktig:** Høy ledningsevne kan tyde på forurensning (kjemikalier, salt fra veivedlikehold). Normal ferskvannsledning er 50-500 μS/cm.

**6. Nitrat/fosfatsensor**
- **Måler:** Næringssstoffer i vannet
- **Hvorfor viktig:** Høye nivåer tyder på gjødselavrenning fra jordbruk. For mye næringsstoffer fører til algeoppblomstring som kan drepe fisk (eutrofiering).

**Oppsett:**
- Sensorer kobles til en datalogger som sender data trådløst til kommunens server
- Måling hvert 15. minutt, 24 timer i døgnet
- Automatisk alarm hvis verdier overskrider grenseverdier
- Dashboard på nett der innbyggere kan se vannkvaliteten i sanntid

**Fordeler:**
- Kontinuerlig overvåking uten manuell prøvetaking
- Rask respons ved forurensning
- Langsiktige data for å spore trender
- Åpenhet overfor innbyggerne`,
      },
    },

    // ========== OPPGAVE 17: SENSORER OG BÆREKRAFT ==========
    {
      id: 'nat10-6-2-ex-17a-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-2-ex-17a',
        number: '6.2.17a',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvordan sensorer kan bidra til å redusere energiforbruk i en skolebygning. Gi minst tre konkrete eksempler på sensorer og hvordan de sparer energi.',
        solution: `**Sensorer for energisparing i en skolebygning:**

**1. Bevegelsessensorer for belysning:**
- **Sensor:** Passiv infrarød (PIR) bevegelsessensor
- **Plassering:** I klasserom, korridorer, toaletter
- **Funksjon:** Slår av lyset automatisk når ingen er i rommet
- **Energisparing:** Lyset er av i timer der rommet er tomt (friminutt, etter skoletid)
- **Estimert sparing:** 30-50% reduksjon i strømforbruk til belysning

**2. Lyssensorer for dagslystilpasning:**
- **Sensor:** Fotocelle (lyssensor)
- **Plassering:** Ved vinduene i klasserom
- **Funksjon:** Dimmer kunstig belysning når det er mye dagslys
- **Energisparing:** På solrike dager kan kunstlyset reduseres kraftig
- **Estimert sparing:** 20-40% reduksjon i belysningsenergi

**3. Temperatursensorer for smart oppvarming:**
- **Sensor:** Digital temperatursensor + utendørs værsensor
- **Plassering:** I hvert rom + utendørs
- **Funksjon:**
  - Reduserer temperaturen om natten og i helger (fra 21°C til 15°C)
  - Tilpasser oppvarming basert på utendørstemperatur
  - Registrerer om vinduer er åpne og slår av varmen
- **Energisparing:** 15-30% reduksjon i oppvarmingskostnader

**Tilleggseksempler:**
- CO₂-sensor styrer ventilasjon (ventilerer bare når det trengs)
- Vindussensor oppdager åpne vinduer og slår av varmen
- Strømmåler viser energiforbruk i sanntid på en skjerm i aulaen

**Total estimert besparelse:** En smartstyrt skole kan spare 30-50% energi sammenlignet med en uten sensorer.`,
      },
    },

    // ========== OPPGAVE 18: SAMMENLIGNE MÅLETEKNIKKER ==========
    {
      id: 'nat10-6-2-ex-18-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-2-ex-18',
        number: '6.2.18',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En elev gjør to forsøk for å måle pH i ulike løsninger:\n\nForsøk A: Bruker pH-papir (lakmuspapir) og sammenligner fargen med en fargekart.\nForsøk B: Bruker en digital pH-sensor koblet til en datalogger.\n\nSammenlign de to metodene. Hvilken metode er best egnet hvis du skal følge pH-endringer over tid i en kjemisk reaksjon? Begrunn svaret.',
        solution: `**Sammenligning av pH-papir og digital pH-sensor:**

**pH-papir (forsøk A):**
- Fordeler: Billig, enkelt, krever ikke strøm, bærbart
- Ulemper: Unøyaktig (avlesning avhenger av øyet), kan bare avleses til nærmeste hele pH-verdi, kan ikke brukes kontinuerlig, vanskelig å dokumentere nøyaktig
- Nøyaktighet: ca. ±0,5-1 pH-enhet

**Digital pH-sensor (forsøk B):**
- Fordeler: Nøyaktig (±0,01 pH), kan logge kontinuerlig, gir eksakte tallverdier, data kan lagres og analyseres som grafer
- Ulemper: Dyrere, krever strøm, må kalibreres, mer komplisert oppsett
- Nøyaktighet: ca. ±0,01-0,1 pH-enhet

**Hvilken metode er best for å følge pH-endringer over tid?**

**Digital pH-sensor (forsøk B) er klart best fordi:**

1. **Kontinuerlig måling:** Sensoren kan måle pH hvert sekund eller oftere, noe som er umulig med pH-papir
2. **Nøyaktighet:** Kan registrere små pH-endringer (f.eks. fra 4,52 til 4,58) som pH-papir ikke kan se
3. **Datalagring:** Alle målinger lagres med tidsstempel for senere analyse
4. **Visualisering:** Dataene kan vises som en graf som tydelig viser pH-endringen over tid
5. **Hands-free:** Du slipper å ta prøver manuelt under reaksjonen

**Konklusjon:** For engangsmålinger kan pH-papir være nok, men for å følge endringer over tid er en digital pH-sensor med datalogger mye bedre.`,
      },
    },
  ],
  exercises: [], // Oppgavene er embedded i content
};

// ============================================================================
// KAPITTEL 6.4: Simuleringer og modellering
// ============================================================================

export const CHAPTER_NAT10_6_4: TextbookChapter = {
  id: 'naturfag-10-6-4',
  courseId: 'naturfag-10',
  chapterNumber: '6.4',
  title: 'Simuleringer og modellering',
  description: 'Utforsk hvordan simuleringer brukes til å forstå og forutsi naturfenomener.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forklare hva en simulering er og hvordan den brukes i naturfag',
    'kjenne til ulike typer simuleringer og deres bruksområder',
    'beskrive fordeler og begrensninger ved simuleringer',
    'forstå hvordan datamodeller representerer virkelige systemer',
    'evaluere kvaliteten på simuleringer og modeller',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'nat10-6-4-intro',
      type: 'text',
      content: `## Simuleringer og modellering

Hvordan kan forskere forutsi været for neste uke? Hvordan tester ingeniører nye biler uten å krasje dem? Hvordan studerer klimaforskere Jordens fremtid?

Svaret er **simuleringer** – digitale modeller som etterlikner virkeligheten.

I dette kapitlet lærer du:
- Hva en simulering er og hvordan den fungerer
- Ulike typer simuleringer og deres bruksområder
- Fordeler med simuleringer
- Begrensninger ved simuleringer
- Hvordan lage enkle simuleringer selv`,
    },

    // ========== DEFINISJON: SIMULERING ==========
    {
      id: 'nat10-6-4-def-simulering',
      type: 'definition',
      title: 'Simulering',
      content: 'En simulering er en digital etterlikning av et virkelig system eller fenomen, utført ved hjelp av en datamaskin. Simuleringen bruker matematiske modeller og regler for å beregne hvordan systemet oppfører seg over tid. Simuleringer gjør det mulig å teste scenarioer som ville vært for farlige, dyre eller tidkrevende å utføre i virkeligheten.',
    },

    // ========== DEFINISJON: MODELL ==========
    {
      id: 'nat10-6-4-def-modell',
      type: 'definition',
      title: 'Modell (i naturfag)',
      content: 'En modell er en forenklet representasjon av virkeligheten som fokuserer på de viktigste egenskapene til et system. En modell utelater detaljer som ikke er nødvendige for formålet. Modeller kan være fysiske (som en globus), matematiske (som formler), eller digitale (som datasimuleringer). Ingen modell er perfekt, men gode modeller gir nyttig innsikt i hvordan virkelige systemer fungerer.',
    },

    // ========== DEFINISJON: VALIDERING ==========
    {
      id: 'nat10-6-4-def-validering',
      type: 'definition',
      title: 'Validering',
      content: 'Validering er prosessen med å sjekke om en modell eller simulering gir resultater som stemmer overens med virkeligheten. Man sammenligner simuleringens resultater med virkelige målinger eller observasjoner. En modell som er validert gir mer pålitelige resultater enn en uvalidert modell. Validering er et viktig steg i all vitenskapelig bruk av simuleringer.',
    },

    // ========== DEFINISJON: STARTBETINGELSER ==========
    {
      id: 'nat10-6-4-def-startbetingelser',
      type: 'definition',
      title: 'Startbetingelser (initialbetingelser)',
      content: 'Startbetingelser er de verdiene og forholdene som gjelder ved starten av en simulering. De beskriver tilstanden til systemet ved tidspunkt null. For eksempel: i en værsimulering er startbetingelsene dagens temperatur, lufttrykk, vind og fuktighet målt over hele kloden. Nøyaktige startbetingelser er avgjørende for pålitelige simuleringsresultater.',
    },

    // ========== HVA ER EN SIMULERING? ==========
    {
      id: 'nat10-6-4-hva-simulering',
      type: 'text',
      content: `## Hva er en simulering?

### Definisjon

En **simulering** er:
- En **etterlikning** av et virkelig system eller fenomen
- En **digital modell** som bruker datamaskiner til å beregne hvordan noe oppfører seg
- En måte å **teste scenarioer** uten å utføre dem i virkeligheten

**Analogi:** En simulering er som en avansert modellbil. En lekebil ligner på en ekte bil, men er enklere og mindre farlig å teste. På samme måte kan en datasimulering etterligne virkeligheten uten risiko eller store kostnader.

### Hva er en modell?

En **modell** er:
- En **forenklet** representasjon av virkeligheten
- Fokuserer på de **viktigste egenskapene**
- Utelater detaljer som ikke er nødvendige

**Eksempel:** En værmodell inkluderer temperatur, lufttrykk, vind og fuktighet – men ignorerer kanskje antall biler på veiene eller hvor mange mennesker som puster.

### Hvordan fungerer en simulering?

1. **Lage en modell** – Representere systemet med matematiske formler
2. **Sette startbetingelser** – Hva er situasjonen i utgangspunktet?
3. **La datamaskinen beregne** – Hva skjer neste sekund, neste time, neste år?
4. **Analysere resultatene** – Hva forteller simuleringen oss?

**Eksempel:** Værvarsling
1. **Modell:** Atmosfæren deles inn i bokser, hver med temperatur, trykk og vind
2. **Startbetingelser:** Dagens værdata fra stasjoner, satellitter og værballonger
3. **Beregning:** Datamaskinen beregner hvordan været endrer seg time for time
4. **Resultat:** Værvarsling for neste uke`,
    },

    // ========== OPPGAVE 1: HVA ER SIMULERING ==========
    {
      id: 'nat10-6-4-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-4-ex-1',
        number: '6.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en simulering?',
        options: [
          'En fysisk modell bygget av papp og lim',
          'En digital etterlikning av et virkelig system',
          'En måte å lagre data på',
          'Et program for å redigere bilder',
        ],
        answer: 1,
        solution: `**Svar: En digital etterlikning av et virkelig system**

En **simulering** er en digital modell som bruker datamaskiner til å etterligne hvordan et virkelig system eller fenomen oppfører seg.

**Eksempler:**
- **Værsimulering** – Etterlikner atmosfæren for å forutsi været
- **Flysimulatorer** – Etterlikner et fly for trening av piloter
- **Klimamodeller** – Etterlikner Jordens klimasystem

**Fordel:** Vi kan teste og utforske uten risiko, kostnader eller tidkrevende eksperimenter!`,
      },
    },

    // ========== OPPGAVE 2: MODELL VS VIRKELIGHET ==========
    {
      id: 'nat10-6-4-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-4-ex-2',
        number: '6.4.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr det at en modell er en "forenklet representasjon av virkeligheten"?',
        options: [
          'Modellen er alltid helt nøyaktig',
          'Modellen utelater detaljer som ikke er nødvendige',
          'Modellen er vanskeligere enn virkeligheten',
          'Modellen kan bare brukes én gang',
        ],
        answer: 1,
        solution: `**Svar: Modellen utelater detaljer som ikke er nødvendige**

En **modell** er en **forenklet** versjon av virkeligheten. Vi fokuserer på de viktigste egenskapene og ignorerer detaljer som ikke påvirker resultatet.

**Eksempel:** Værmodell
- **Inkluderer:** Temperatur, lufttrykk, vind, fuktighet, solinnstråling
- **Utelater:** Antall biler, fugler, mennesker, hus

**Hvorfor forenkle?**
- Gjør modellen **raskere** å beregne
- Gjør den **lettere** å forstå
- Fokuserer på det **viktigste**

**Men husk:** Fordi modellen er forenklet, er den aldri 100% nøyaktig!`,
      },
    },

    // ========== FORDELER MED SIMULERINGER ==========
    {
      id: 'nat10-6-4-fordeler',
      type: 'text',
      content: `## Fordeler med simuleringer

### 1. Teste uten risiko

Noen eksperimenter er for **farlige** å utføre i virkeligheten.

**Eksempler:**
- **Krasjtesting av biler** – I stedet for å ødelegge ekte biler, simulerer vi kollisjonen
- **Kjernekraftulykker** – Vi kan simulere hva som skjer uten å utsette mennesker for fare
- **Eksplosive kjemiske reaksjoner** – Simulering lar oss studere reaksjonen trygt

### 2. Utforske scenarioer

Simuleringer lar oss teste **"hva om"-spørsmål**.

**Eksempler:**
- **Hva om CO₂-utslippene dobles?** – Klimamodeller kan vise konsekvensene
- **Hva om vi bygger en demning her?** – Simulering viser påvirkning på vannstrømmen
- **Hva om vi endrer medisinens dose?** – Simulering kan forutsi effekten

### 3. Spare tid

Noen prosesser tar **lang tid** i virkeligheten, men kan simuleres på minutter.

**Eksempler:**
- **Evolusjon** – Kan ta millioner av år, men simuleres på minutter
- **Klimaendringer** – Simulere 100 år inn i fremtiden
- **Populasjonsvekst** – Simulere generasjoner av dyr eller planter

### 4. Spare penger

Simuleringer kan være **mye billigere** enn virkelige tester.

**Eksempler:**
- **Bygge en prototyp av en bro** – Koster millioner. Simulering koster nesten ingenting
- **Teste legemidler på dyr** – Dyrt og etisk problematisk. Simulering kan redusere behovet
- **Trening av piloter** – Flysimulatorer koster mye mindre enn å fly ekte fly

### 5. Forstå komplekse systemer

Simuleringer hjelper oss å **visualisere** og **forstå** kompliserte fenomener.

**Eksempler:**
- **Hvordan blod strømmer i hjertet** – Vanskelig å se i virkeligheten
- **Hvordan orkaner dannes** – Simulering viser prosessen steg for steg
- **Hvordan galakser kolliderer** – Kan ikke observeres i løpet av et menneskeliv`,
    },

    // ========== EKSEMPLER PÅ SIMULERINGER ==========
    {
      id: 'nat10-6-4-eksempler',
      type: 'text',
      content: `## Eksempler på simuleringer

### 1. Værvarsling

**Hva simuleres:** Atmosfæren og værforholdene
**Hvordan:** Jordens overflate deles inn i bokser (typisk 10x10 km). For hver boks beregnes temperatur, lufttrykk, vind og fuktighet
**Bruksområder:** Daglige værvarsler, varsel om ekstremvær (orkaner, tørke, flom)

**Utfordring:** Små feil i startbetingelsene kan føre til store feil i varselet (kaoseffekten). Derfor blir værvarsler mindre nøyaktige jo lengre frem i tid vi varsler.

### 2. Klimamodeller

**Hva simuleres:** Jordens klima over lang tid (10-100 år)
**Hvordan:** Inkluderer atmosfære, hav, is, jordsmonn, vegetasjon og CO₂-nivåer
**Bruksområder:** Forutsi fremtidig global oppvarming, havstigninger, endringer i nedbør

**Eksempel:** Klimamodeller viser at hvis vi fortsetter å slippe ut CO₂ som i dag, vil gjennomsnittstemperaturen øke med 2-4°C innen år 2100.

### 3. Trafikksimuleringer

**Hva simuleres:** Trafikk i byer og på veier
**Hvordan:** Modellerer biler, fotgjengere, trafikklys og veier
**Bruksområder:** Planlegge nye veier, optimalisere trafikklys, redusere køer

**Eksempel:** Før man bygger en ny vei, kan man simulere trafikken for å se om den vil løse problemet eller bare flytte køen til et annet sted.

### 4. Medisinske simuleringer

**Hva simuleres:** Kroppen, sykdommer, legemidler
**Hvordan:** Modellerer hvordan celler, organer og legemidler oppfører seg
**Bruksområder:** Utvikle nye medisiner, trene leger, planlegge operasjoner

**Eksempel:** Simulering av hjertet kan hjelpe leger å planlegge operasjoner ved å vise hvordan blodet strømmer gjennom hjertet.

### 5. Epidemimodeller

**Hva simuleres:** Spredning av sykdommer
**Hvordan:** Modellerer hvor mange som er smittet, immune og mottakelige
**Bruksområder:** Forutsi smittespredning, evaluere tiltak (vaksinasjon, karantene)

**Eksempel:** Under COVID-19-pandemien brukte forskere simuleringer for å forutsi hvor raskt viruset ville spre seg og hvilke tiltak som ville være mest effektive.

### 6. Astrofysiske simuleringer

**Hva simuleres:** Planeter, stjerner, galakser
**Hvordan:** Modellerer gravitasjon og bevegelse av himmellegemer
**Bruksområder:** Forstå hvordan solsystemer dannes, hvordan galakser kolliderer

**Eksempel:** Simulering viser at vår galakse (Melkeveien) og Andromedagalaksen vil kollidere om ca. 4 milliarder år.`,
    },

    // ========== EKSEMPEL: ENKEL POPULASJONSSIMULERING ==========
    {
      id: 'nat10-6-4-example-populasjon',
      type: 'example',
      title: 'Eksempel: Simulering av populasjonsvekst med bæreevne',
      problem: 'En innsjø har plass til maksimalt 500 fisk (bæreevne). Det er 50 fisk i starten, og populasjonen vokser med 20% per år. Simuler populasjonen over 20 år. Hva skjer?',
      solution: `**Løsning:**

\`\`\`python
# Startbetingelser
populasjon = 50
baereevne = 500
vekstrate = 0.20

# Simuler 20 år
for aar in range(21):
    print(f"År {aar}: {populasjon:.0f} fisk")

    # Logistisk vekst: veksten avtar når populasjonen nærmer seg bæreevne
    vekst = vekstrate * populasjon * (1 - populasjon / baereevne)
    populasjon = populasjon + vekst
\`\`\`

**Resultat (forkortet):**
- År 0: 50 fisk
- År 5: 117 fisk
- År 10: 244 fisk
- År 15: 411 fisk
- År 20: 482 fisk

**Observasjoner:**
- Populasjonen vokser raskt i starten (mye plass og mat)
- Veksten avtar gradvis når populasjonen nærmer seg bæreevne (500)
- Populasjonen stabiliserer seg nær bæreevnen

Denne modellen kalles **logistisk vekst** og er mer realistisk enn ubegrenset eksponentiell vekst.`,
    },

    // ========== EKSEMPEL: FLYSIMULATOR ==========
    {
      id: 'nat10-6-4-example-flysimulator',
      type: 'example',
      title: 'Eksempel: Flysimulator som simulering',
      problem: 'Forklar hvordan en flysimulator er et eksempel på en simulering. Hva er modellen, startbetingelsene, og hva kan simulatoren teste?',
      solution: `**Løsning:**

**Hva er en flysimulator?**
En flysimulator er et datasystem som etterlikner opplevelsen av å fly et ekte fly. Piloten sitter i en kopi av cockpiten med ekte instrumenter og skjermer.

**Modellen:**
- Flyets aerodynamikk (hvordan vinger, motor og vekt påvirker flyet)
- Værforhold (vind, turbulens, regn, is)
- Instrumenter og navigasjon
- Terreng (fjell, rullebaner, byer)
- Motorytelse og drivstofforbruk

**Startbetingelser:**
- Flytype (Boeing 737, Airbus A320, etc.)
- Vekt (passasjerer, drivstoff, last)
- Flyplass og rullebane
- Værforhold (klar himmel, tåke, storm)
- Tid på døgnet

**Hva kan testes?**
- Normal avgang og landing
- Nødprosedyrer (motorhavari, brann)
- Landing i vanskelige forhold (tåke, sidevind)
- Instrumentfeil
- Ukjente flyplasser

**Fordeler:**
- Trygt: Ingen fare for piloten
- Billig: Billigere enn å fly et ekte fly
- Gjentagbart: Kan øve samme situasjon mange ganger
- Kan simulere farlige scenarier som aldri burde skje i virkeligheten

**Begrensninger:**
- Kan aldri 100% gjenskape følelsen av å fly
- G-krefter er begrenset
- Modellen kan ha feil som gjør opplevelsen urealistisk`,
    },

    // ========== EKSEMPEL: KLIMA VS. VÆR ==========
    {
      id: 'nat10-6-4-example-klima-vaer',
      type: 'example',
      title: 'Eksempel: Forskjellen mellom værsimulering og klimasimulering',
      problem: 'Forklar forskjellen mellom en værsimulering og en klimasimulering. Hvorfor kan vi forutsi klimaet 50 år frem, men ikke været 2 uker frem?',
      solution: `**Løsning:**

**Værsimulering:**
- Forutsier **spesifikt vær** for de neste dagene
- Eksempel: "Det blir 18°C og sol i Oslo i morgen"
- Tidshorisont: 1-10 dager
- Krever nøyaktige startbetingelser (dagens vær)
- Kaotisk system: Små feil i startdata vokser raskt

**Klimasimulering:**
- Forutsier **gjennomsnittlige forhold** over lang tid
- Eksempel: "Gjennomsnittstemperaturen i Norge vil øke med 2°C innen 2070"
- Tidshorisont: 10-100+ år
- Fokuserer på trender og gjennomsnitt, ikke enkeltdager
- Drevet av kjente fysiske lover (drivhuseffekt, solinnstråling)

**Hvorfor kan vi forutsi klima, men ikke vær?**

Analogi: Tenk på en kopp med kokende vann.
- Du kan **ikke** forutsi nøyaktig hvilken boble som dukker opp neste sekund (= vær)
- Du **kan** forutsi at vannet koker ved 100°C og avgir damp (= klima)

Klima handler om gjennomsnitt og trender, som er mer forutsigbare enn enkeltdager. Været er kaotisk og uforutsigbart over lang tid, men klimaet følger fysiske lover som vi forstår godt.`,
    },

    // ========== OPPGAVE 3: FORDELER ==========
    {
      id: 'nat10-6-4-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-4-ex-3',
        number: '6.4.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av disse er IKKE en fordel med simuleringer?',
        options: [
          'Teste uten risiko',
          'Spare tid og penger',
          'Alltid 100% nøyaktig',
          'Utforske scenarioer',
        ],
        answer: 2,
        solution: `**Svar: Alltid 100% nøyaktig**

Dette er **IKKE** en fordel, fordi simuleringer **aldri** er 100% nøyaktige!

**Hvorfor ikke?**
- Modeller er **forenklinger** av virkeligheten
- Vi kan ikke inkludere **alle** detaljer
- Små feil i startbetingelsene kan gi store feil i resultatet
- Datamaskiner gjør **avrundingsfeil** i beregningene

**Fordeler med simuleringer:**
✅ Teste uten risiko
✅ Spare tid og penger
✅ Utforske scenarioer
✅ Forstå komplekse systemer

**Men husk:** Simuleringer er nyttige verktøy, men resultatene må alltid tolkes kritisk!`,
      },
    },

    // ========== OPPGAVE 4: VÆRVARSLING ==========
    {
      id: 'nat10-6-4-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-4-ex-4',
        number: '6.4.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor værvarsler blir mindre nøyaktige jo lengre frem i tid vi forsøker å varsle.',
        multipleChoiceOptions: [
          'Små feil i startdataene forsterkes over tid, og kaotiske systemer er vanskelige å forutsi langt frem',
          'Meteorologene bruker bare enklere modeller for langtidsvarsler',
          'Satellitter mister kontakten etter noen dager',
          'Været blir faktisk mer tilfeldig lengre frem i tid',
        ],
        solution: `**Svar:**

Værvarsler blir mindre nøyaktige over tid på grunn av **kaoseffekten** (også kalt sommerfugleffekten).

**Hovedårsaker:**

1. **Små feil forsterkes**
   - Atmosfæren er et **kaotisk system**
   - Små feil i startbetingelsene vokser raskt
   - En liten feil i temperatur i dag kan gi stor feil i værvarselet om en uke

2. **Ufullstendige målinger**
   - Vi kan ikke måle været **overalt** på kloden samtidig
   - Værstasjoner har **mellomrom**
   - Dette gir usikkerhet i startbetingelsene

3. **Modellen er forenklet**
   - Modellen inkluderer ikke **alle** detaljer
   - Små effekter kan likevel påvirke resultatet over tid

**Analogi:** Det er som å forutsi hvor en ball lander hvis du kaster den. Hvis du vet nøyaktig hastighet og retning, kan du forutsi det ganske nøyaktig. Men hvis det er litt usikkerhet i starten, blir det vanskeligere jo lengre ballen flyr.

**Konklusjon:** Værvarsler er ganske pålitelige for 1-3 dager, men blir usikre etter 5-7 dager.`,
      },
    },

    // ========== OPPGAVE 5: KLIMAMODELLER ==========
    {
      id: 'nat10-6-4-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-4-ex-5',
        number: '6.4.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Nevn tre faktorer som klimamodeller må inkludere for å forutsi fremtidig temperatur på Jorden.',
        multipleChoiceOptions: [
          'Drivhusgasser, havstrømmer og is/snødekke',
          'Bare CO2-utslipp er nødvendig for klimamodeller',
          'Vindstyrke, luftfuktighet og skydekke er de eneste faktorene',
          'Klimamodeller trenger ikke inkludere noen faktorer',
        ],
        solution: `**Svar:**

Klimamodeller må inkludere mange faktorer. Her er tre viktige:

1. **CO₂-nivåer i atmosfæren**
   - CO₂ er en drivhusgass som fanger varme
   - Høyere CO₂ → Høyere temperatur
   - Utslippene påvirker hvor mye CO₂ som er i luften

2. **Havet**
   - Havet absorberer varme og CO₂
   - Havstrømmer transporterer varme rundt på kloden
   - Havstemperaturen påvirker været og klimaet

3. **Is og snø (albedo)**
   - Is og snø reflekterer sollys tilbake til verdensrommet
   - Når is smelter → Mørkere overflate → Mer varme absorberes
   - Dette skaper en **forsterkning** av oppvarmingen

**Andre viktige faktorer:**
- **Solinnstråling** – Hvor mye energi Jorden får fra solen
- **Skyer** – Reflekterer sollys, men fanger også varme
- **Vegetasjon** – Tar opp CO₂ og påvirker fordampning
- **Vulkanutbrudd** – Sender partikler opp i atmosfæren som blokkerer sollys

**Alle disse faktorene samhandler**, noe som gjør klimamodeller svært komplekse!`,
      },
    },

    // ========== OPPGAVE 6: TRAFIKKSIMULERING ==========
    {
      id: 'nat10-6-4-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-4-ex-6',
        number: '6.4.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'En by ønsker å bygge en ny bro. Hvordan kan en trafikksimulering hjelpe planleggerne?',
        multipleChoiceOptions: [
          'Simuleringen kan vise køer, flaskehalser og optimal plassering før bygging starter',
          'Trafikksimulering er ikke nyttig for broplanlegging',
          'Simuleringen kan bare brukes etter at broen er bygget',
          'Alle broer fungerer likt uansett trafikkmengde',
        ],
        solution: `**Svar:**

En trafikksimulering kan hjelpe planleggerne på flere måter:

**1. Teste før man bygger**
- **Problemet:** Det er dyrt å bygge en bro som ikke fungerer
- **Løsningen:** Simuler trafikken med den nye broen først
- **Resultat:** Se om broen faktisk løser problemet før man bygger

**2. Sammenligne alternativer**
- **Spørsmål:** Skal broen bygges her eller der? Skal den ha 2 eller 4 felt?
- **Simulering:** Test ulike alternativer
- **Resultat:** Velg det beste alternativet basert på data, ikke gjetning

**3. Forutsi fremtidig trafikk**
- **Utfordring:** Trafikken vil øke i fremtiden
- **Simulering:** Test hvordan broen fungerer om 10-20 år
- **Resultat:** Bygg en bro som er stor nok for fremtiden

**4. Identifisere nye problemer**
- **Risiko:** Broen kan løse ett problem, men skape et nytt (f.eks. kø et annet sted)
- **Simulering:** Avdekk slike problemer før byggingen
- **Resultat:** Planlegg tiltak for å håndtere nye flaskehalser

**5. Optimalisere trafikklys**
- **Spørsmål:** Hvordan skal trafikklysene rundt broen styres?
- **Simulering:** Test ulike innstillinger
- **Resultat:** Minimer køer og reisetid

**Konklusjon:** Trafikksimulering sparer tid, penger og frustrasjon ved å teste løsninger før man bygger dem i virkeligheten!`,
      },
    },

    // ========== BEGRENSNINGER ==========
    {
      id: 'nat10-6-4-begrensninger',
      type: 'text',
      content: `## Begrensninger ved simuleringer

Selv om simuleringer er kraftige verktøy, har de også begrensninger.

### 1. Modeller er forenklinger

**Problem:** Virkeligheten er mer kompleks enn modellen
- Vi kan ikke inkludere **alle** detaljer
- Noen effekter er **ukjente** eller **vanskelige** å modellere
- Jo enklere modellen er, jo mindre nøyaktig er den

**Eksempel:** En klimamodell kan ikke inkludere **alle** skyer på kloden samtidig. I stedet gjør den antagelser om gjennomsnittlig skydekke.

### 2. Usikre startbetingelser

**Problem:** Vi vet ikke nøyaktig hvordan situasjonen er i utgangspunktet
- Målingene har **feil**
- Vi kan ikke måle **overalt** samtidig
- Små feil i starten kan gi store feil senere

**Eksempel:** I værvarsling kan en liten feil i temperaturmålingen i dag føre til feil værvarsling om noen dager.

### 3. Beregningskraft

**Problem:** Noen simuleringer krever **enorme** datamaskiner
- Jo mer detaljert modellen er, jo lengre tid tar beregningene
- Klimamodeller kan ta **uker** å kjøre på superdatamaskiner
- Dette begrenser hvor detaljerte simuleringene kan være

**Eksempel:** En værmodell som dekker hele kloden med 1 km oppløsning ville kreve så mye beregningskraft at det ville tatt år å fullføre.

### 4. Validering

**Problem:** Hvordan vet vi om simuleringen er nøyaktig?
- Vi må **sammenligne** med virkeligheten
- Men hvis vi simulerer fremtiden, kan vi ikke verifisere før det skjer
- Historiske data kan validere modellen, men fremtiden kan være annerledes

**Eksempel:** Klimamodeller kan testes mot historiske klimadata, men fremtidig klima kan påvirkes av faktorer vi ikke kjenner til ennå.

### 5. Menneskelige feil

**Problem:** Modellen er laget av mennesker, og mennesker gjør feil
- Feil i koden kan gi feil resultater
- Feil antagelser i modellen
- Feiltolkning av resultatene

**Eksempel:** I 1999 krasjet Mars Climate Orbiter fordi en del av programmet brukte engelske enheter (fot) mens en annen del brukte metriske enheter (meter). Dette er et eksempel på hvordan programmeringsfeil kan få store konsekvenser.`,
    },

    // ========== OPPGAVE 7: BEGRENSNINGER 1 ==========
    {
      id: 'nat10-6-4-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-4-ex-7',
        number: '6.4.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hvorfor er det umulig for en klimamodell å være 100% nøyaktig?',
        multipleChoiceOptions: [
          'Modeller er forenklinger, startdata har usikkerhet, og kaotiske systemer er fundamentalt uforutsigbare',
          'Klimamodeller er faktisk 100% nøyaktige',
          'Bare fordi datamaskiner ikke er raske nok ennå',
          'Fordi forskerne ikke prøver hardt nok',
        ],
        solution: `**Svar:**

Det er umulig for en klimamodell å være 100% nøyaktig av flere grunner:

**1. Modellen er forenklet**
- Klimasystemet er **enormt komplekst**
- Vi kan ikke inkludere **alle** detaljer (f.eks. hver sky, hver bølge i havet)
- Små effekter vi ignorerer kan likevel påvirke resultatet

**2. Usikre startbetingelser**
- Vi kan ikke måle temperatur, lufttrykk osv. **overalt** på kloden samtidig
- Målingene har **unøyaktigheter**
- Vi vet ikke nøyaktig hvor mye CO₂ som vil slippes ut i fremtiden

**3. Ukjente faktorer**
- Det kan være **ukjente** prosesser vi ikke forstår ennå
- Fremtidig teknologi kan endre CO₂-utslippene på måter vi ikke kan forutsi
- Uforutsette hendelser (store vulkanutbrudd, meteornedslag) kan påvirke klimaet

**4. Kaoseffekt**
- Klimasystemet er **kaotisk** – små endringer kan få store konsekvenser
- Dette gjør langvarige spådommer usikre

**5. Begrensninger i datakraft**
- Vi må forenkle modellen for at beregningene skal være mulige
- Høyere oppløsning ville krevd superdatamaskiner vi ikke har

**Konklusjon:** Klimamodeller er **nyttige** og gir oss **viktig informasjon**, men de vil aldri være perfekte. Derfor snakker forskere om **sannsynlige scenarier** i stedet for eksakte spådommer.`,
      },
    },

    // ========== OPPGAVE 8: BEGRENSNINGER 2 ==========
    {
      id: 'nat10-6-4-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-4-ex-8',
        number: '6.4.8',
        type: 'classic',
        difficulty: 'medium',
        task: 'En simulering av en ny vindturbin viser at den vil produsere mye energi. Hvilke spørsmål bør du stille for å vurdere om simuleringen er pålitelig?',
        multipleChoiceOptions: [
          'Hvilke vindforhold ble brukt? Er modellen validert mot virkelige turbiner? Hvilke forenklinger er gjort?',
          'Simuleringen er alltid korrekt, ingen spørsmål nødvendig',
          'Bare spør om prisen på turbinen',
          'Simuleringer av vindturbiner er alltid upålitelige',
        ],
        solution: `**Svar:**

For å vurdere om simuleringen er pålitelig, bør du stille disse spørsmålene:

**1. Hvilke forenklinger er gjort?**
- Hva har modellen inkludert og hva har den utelatt?
- Er forenklinger realistiske?

**2. Hvilke data er brukt?**
- Hvilke vinddata er brukt i simuleringen?
- Er vinddataene representative for stedet der turbinen skal plasseres?
- Er dataene hentet over lang nok tid (flere år)?

**3. Er modellen validert?**
- Har modellen blitt testet mot virkelige vindturbiner?
- Stemmer simuleringens resultater overens med målinger fra eksisterende turbiner?

**4. Hvilke antagelser er gjort?**
- Antas det at turbinen alltid fungerer perfekt?
- Er vedlikehold og nedetid inkludert?
- Hva med ekstremvær som kan skade turbinen?

**5. Hvem har laget simuleringen?**
- Er det et uavhengig forskningsinstitutt?
- Eller er det produsenten selv som har laget simuleringen? (interessekonflikt)

**6. Hva er usikkerheten?**
- Gir simuleringen et eksakt tall eller et spenn (f.eks. 500-700 MWh/år)?
- Hvor stor er usikkerheten?

**7. Hva med fremtiden?**
- Vil vindforholdene endre seg med klimaendringer?
- Blir turbinen mindre effektiv over tid?

**Konklusjon:** En simulering er bare så god som dataene, antagelsene og modellen den er basert på. Kritisk tenkning og validering er viktig!`,
      },
    },

    // ========== LAGE ENKLE SIMULERINGER ==========
    {
      id: 'nat10-6-4-lage-simuleringer',
      type: 'text',
      content: `## Lage enkle simuleringer

Du trenger ikke en superdatamaskin for å lage simuleringer! Med **regneark** eller **programmering** kan du lage dine egne enkle modeller.

### Eksempel 1: Populasjonsvekst i regneark

**Scenario:** En kanin-populasjon dobles hvert år. Du starter med 10 kaniner. Hvor mange er det etter 5 år?

**Lage modellen i Excel/Google Sheets:**

| År | Antall kaniner | Beregning |
|----|----------------|-----------|
| 0  | 10             | Startverdi |
| 1  | 20             | =10*2 |
| 2  | 40             | =20*2 |
| 3  | 80             | =40*2 |
| 4  | 160            | =80*2 |
| 5  | 320            | =160*2 |

**Resultat:** Etter 5 år er det **320 kaniner**.

**Utvid modellen:**
- Hva hvis 10% av kaninene dør hvert år?
- Hva hvis populasjonen ikke kan bli større enn 500 (begrenset mat)?

### Eksempel 2: Kasteberegning med Python

**Scenario:** Du kaster en ball med hastighet 20 m/s i 45° vinkel. Hvor langt flyr den?

\`\`\`python
import math

# Startbetingelser
v0 = 20  # m/s
vinkel = 45  # grader
g = 9.81  # m/s² (tyngdeakselerasjon)

# Regn om vinkel til radianer
vinkel_rad = math.radians(vinkel)

# Beregn kastlengde
kastlengde = (v0**2 * math.sin(2 * vinkel_rad)) / g

print(f"Kastlengde: {kastlengde:.1f} meter")
# Output: Kastlengde: 40.8 meter
\`\`\`

**Utvid simuleringen:**
- Hva hvis du endrer vinkelen?
- Hva hvis det er vind?
- Hva hvis ballen har luftmotstand?

### Eksempel 3: Smittespredning (enkel modell)

**Scenario:** En skole har 100 elever. 1 elev er syk. Hver syk elev smitter 2 andre hver dag. Hvor mange er syke etter 5 dager?

\`\`\`python
# Startbetingelser
totalt = 100
syke = 1
friske = totalt - syke
smitterate = 2  # Hver syk smitter 2 friske

# Simuler 5 dager
for dag in range(5):
    nye_syke = min(syke * smitterate, friske)  # Kan ikke smitte flere enn det er friske
    syke += nye_syke
    friske -= nye_syke
    print(f"Dag {dag+1}: {syke} syke, {friske} friske")

# Output:
# Dag 1: 3 syke, 97 friske
# Dag 2: 9 syke, 91 friske
# Dag 3: 27 syke, 73 friske
# Dag 4: 81 syke, 19 friske
# Dag 5: 100 syke, 0 friske
\`\`\`

**Hva lærer vi?**
- Smitte kan spre seg **eksponentielt** raskt!
- Dette er en **veldig forenklet** modell
- Virkelige epidemier er mer komplekse (immunitet, karantene, etc.)

### Tips for å lage egne simuleringer:

1. **Start enkelt** – Ikke prøv å modellere alt på en gang
2. **Definer klare regler** – Hva skal skje i hvert tidssteg?
3. **Test med kjente verdier** – Stemmer resultatene med det du forventer?
4. **Utvid gradvis** – Legg til flere detaljer etter hvert
5. **Vær kritisk** – Husk at modellen er forenklet!`,
    },

    // ========== OPPGAVE 9: ENKEL SIMULERING ==========
    {
      id: 'nat10-6-4-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-4-ex-9',
        number: '6.4.9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du har en bankkonto med 1000 kr. Hver måned setter du inn 200 kr, og kontoen gir 0,5% rente per måned. Hvor mye penger har du etter 12 måneder? Forklar hvordan du kan simulere dette i et regneark.',
        multipleChoiceOptions: [
          'Ca. 3447 kr etter 12 måneder; simuler med løkke som legger til 200 kr og 0.5% rente hver måned',
          'Ca. 3400 kr etter 12 måneder; bare legg sammen 1000 + 12*200',
          'Ca. 4000 kr etter 12 måneder; multipliser med 4',
          'Ca. 1500 kr etter 12 måneder; bare renten teller',
        ],
        solution: `**Svar:**

**Oppsett i regneark (Excel/Google Sheets):**

| Måned | Saldo start | Innskudd | Rente (0,5%) | Saldo slutt |
|-------|-------------|----------|--------------|-------------|
| 0     | 1000        | -        | -            | 1000        |
| 1     | 1000        | 200      | 6,00         | 1206,00     |
| 2     | 1206,00     | 200      | 7,03         | 1413,03     |
| 3     | 1413,03     | 200      | 8,07         | 1621,10     |
| ... | ... | ... | ... | ... |
| 12    | ...         | 200      | ...          | 3471,13     |

**Formler:**
- **Saldo start (måned n)** = Saldo slutt (måned n-1)
- **Rente** = (Saldo start + Innskudd) × 0,005
- **Saldo slutt** = Saldo start + Innskudd + Rente

**Eksempel for måned 1:**
- Saldo start: 1000 kr
- Innskudd: 200 kr
- Rente: (1000 + 200) × 0,005 = 6,00 kr
- Saldo slutt: 1000 + 200 + 6,00 = 1206,00 kr

**Svar etter 12 måneder: ca. 3471 kr**

**Viktig læring:**
- Rentes rente-effekten gjør at du får mer enn bare 1000 + 12×200 = 3400 kr
- Du får **ekstra** penger fordi renten også gir rente!

**Hvordan bygge dette i regneark:**
1. Lag kolonner for måned, saldo start, innskudd, rente og saldo slutt
2. Skriv formler i rad 2
3. Dra formelen ned til rad 13 (12 måneder)
4. Se hvordan pengene vokser!

**Utvid simuleringen:**
- Hva hvis du setter inn 300 kr hver måned?
- Hva hvis renten er 1% i stedet?
- Hva hvis du tar ut 100 kr hver måned?`,
      },
    },

    // ========== OPPGAVE 10: EVALUERE SIMULERING ==========
    {
      id: 'nat10-6-4-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-4-ex-10',
        number: '6.4.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En bilprodusent har simulert krasjtesting av en ny bil og hevder at bilen er svært sikker. Du er forbruker og skal vurdere påstanden. Hvilke spørsmål vil du stille om simuleringen, og hvorfor er disse spørsmålene viktige?',
        multipleChoiceOptions: [
          'Er simuleringen validert mot virkelige krasjtester? Hvilke scenarier ble testet? Er alle materialegenskaper korrekt modellert?',
          'Simuleringer erstatter alltid virkelige krasjtester',
          'Spør bare om fargen på bilen i simuleringen',
          'Krasjtestsimuleringer er alltid 100% nøyaktige',
        ],
        solution: `**Svar:**

Som kritisk forbruker bør du stille følgende spørsmål:

**1. Er simuleringen validert mot virkelige krasjtester?**
- **Hvorfor viktig:** En simulering som ikke stemmer overens med virkelige tester er upålitelig
- **Spørsmål:** Har dere kjørt virkelige krasjtester for å sjekke om simuleringen gir korrekte resultater?

**2. Hvilke typer ulykker er simulert?**
- **Hvorfor viktig:** En bil kan være sikker i frontkollisjon, men usikker ved sidekollisjon
- **Spørsmål:** Har dere simulert frontkollisjon, sidekollisjon, påkjørsel bakfra og velt?

**3. Hvilke hastigheter er testet?**
- **Hvorfor viktig:** En bil kan være sikker ved lav fart, men farlig ved høy fart
- **Spørsmål:** Hvilke hastigheter er brukt i simuleringen? Er det realistiske hastigheter?

**4. Hva med forskjellige kroppstyper?**
- **Hvorfor viktig:** Sikkerheten kan variere for barn, voksne, gravide, eldre
- **Spørsmål:** Er simuleringen gjort for ulike passasjerer (voksne, barn, ulike størrelser)?

**5. Er eksterne faktorer inkludert?**
- **Hvorfor viktig:** Kollisjon med lastebil er annerledes enn kollisjon med personbil
- **Spørsmål:** Hva slags kjøretøy har dere simulert kollisjon med?

**6. Hvem har utført simuleringen?**
- **Hvorfor viktig:** Produsenten har egeninteresse av å vise gode resultater
- **Spørsmål:** Er simuleringen gjort av uavhengige eksperter, eller av bilprodusenten selv?

**7. Er resultatene sammenlignet med uavhengige tester?**
- **Hvorfor viktig:** Uavhengige organisasjoner som Euro NCAP tester biler objektivt
- **Spørsmål:** Hva har Euro NCAP eller andre uavhengige organisasjoner funnet?

**8. Hva er forenklinger og begrensninger?**
- **Hvorfor viktig:** Alle modeller er forenklet – noen forenklinger kan skjule problemer
- **Spørsmål:** Hvilke forenklinger er gjort i modellen? Hva er ikke inkludert?

**9. Er usikkerheten rapportert?**
- **Hvorfor viktig:** Alle simuleringer har usikkerhet
- **Spørsmål:** Hva er feilmarginen i simuleringen?

**10. Finnes det publiserte data?**
- **Hvorfor viktig:** Transparens bygger tillit
- **Spørsmål:** Kan jeg se de fullstendige resultatene og metodene?

**Konklusjon:**
En simulering fra produsenten selv er et godt utgangspunkt, men du bør **ikke stole blindt** på den. Søk etter **uavhengige tester** (f.eks. Euro NCAP, IIHS) og **virkelige krasjtester** for å få et fullstendig bilde av bilens sikkerhet.

**Viktig læring:**
Simuleringer er nyttige, men må alltid tolkes kritisk – spesielt når de kommer fra aktører med egeninteresse!`,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'nat10-6-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Hva har vi lært?

**Simuleringer:**
- Digitale modeller som etterlikner virkeligheten
- Brukes til å forstå, forutsi og teste uten risiko
- Eksempler: Værvarsling, klimamodeller, trafikk, medisin, epidemier

**Fordeler:**
✅ Teste uten risiko
✅ Utforske scenarioer
✅ Spare tid og penger
✅ Forstå komplekse systemer

**Begrensninger:**
❌ Modeller er forenklinger
❌ Usikre startbetingelser
❌ Krevende beregninger
❌ Vanskelig å validere fremtidssimuleringer
❌ Menneskelige feil

**Lage egne simuleringer:**
- Regneark (Excel/Google Sheets)
- Programmering (Python)
- Start enkelt og utvid gradvis

### Viktigste poeng

1. **Simuleringer er kraftige verktøy** – De lar oss utforske det umulige, farlige og tidkrevende
2. **Aldri 100% nøyaktige** – Modeller er alltid forenklinger av virkeligheten
3. **Kritisk tenkning er viktig** – Spør alltid: Hvilke antagelser er gjort? Hva er utelatt? Er modellen validert?
4. **Du kan lage dine egne** – Enkle simuleringer krever bare et regneark eller litt kode

### Neste steg

Nå som du forstår simuleringer, kan du:
- Lage dine egne enkle simuleringer
- Vurdere simuleringer kritisk
- Forstå hvordan forskere bruker simuleringer til å forutsi fremtiden
- Bruke simuleringer til å teste hypoteser i naturfag`,
    },
    // ========== EKSEMPEL: MODELL AV SOLSYSTEMET ==========
    {
      id: 'nat10-6-4-example-solsystem',
      type: 'example',
      title: 'Eksempel: Forenklet modell av solsystemet',
      problem: 'Forklar hvorfor en fysisk modell av solsystemet (som en skoleplansje) og en datasimulering av solsystemet gir ulik type innsikt. Hva er fordelene og ulempene med hver type modell?',
      solution: `**Løsning:**

**Fysisk modell (skoleplansje/planetarium):**

Fordeler:
- Lett å se plasseringen av planetene i forhold til hverandre
- Visuelt forståelig - du kan peke og se
- God for å lære navnene og rekkefølgen på planetene
- Krever ingen teknologi

Ulemper:
- **Skala er helt feil:** Hvis Solen er en fotball, er Jorden en ert 25 meter unna. Pluto ville vært over 1 km unna! Ingen skoleplansje viser riktig avstand
- Kan ikke vise bevegelse over tid
- Kan ikke simulere hva som skjer hvis vi endrer noe (f.eks. fjerner Jupiter)
- Viser bare ett øyeblikk, ikke utvikling

**Datasimulering:**

Fordeler:
- **Riktige avstander og størrelser** (kan zoome inn og ut)
- Viser planetenes bevegelse over tid (baner, hastigheter)
- Kan "spole fremover" millioner av år
- Kan teste scenarioer: Hva skjer hvis en asteroid nærmer seg?
- Kan beregne nøyaktige posisjoner for navigasjon av romsonder

Ulemper:
- Krever datamaskin og programvare
- Modellen er fortsatt en forenkling (utelater f.eks. støv mellom planetene)
- Kan være vanskelig å forstå for nybegynnere
- Beregningsfeil kan akkumulere over lange tidsperioder

**Konklusjon:**
Begge modelltyper er nyttige, men for ulike formål. Fysiske modeller er gode for å introdusere begreper, mens simuleringer er nødvendige for nøyaktige beregninger og "hva-om"-eksperimenter.`,
    },

    // ========== EKSEMPEL: SMITTESPREDNING SIMULERING ==========
    {
      id: 'nat10-6-4-example-smitte',
      type: 'example',
      title: 'Eksempel: Simulering av smittespredning med og uten tiltak',
      problem: 'Sammenlign smittespredning med og uten karantensetiltak i en skole med 200 elever. Uten tiltak smitter hver syk person 3 nye per dag. Med karantene smitter hver syk person bare 1 ny per dag. Start med 1 syk person. Hva skjer etter 5 dager?',
      solution: `**Løsning:**

**Uten tiltak (smitterate = 3):**

| Dag | Nye syke | Totalt syke |
|-----|----------|-------------|
| 0   | -        | 1           |
| 1   | 3        | 4           |
| 2   | 12       | 16          |
| 3   | 48       | 64          |
| 4   | 136*     | 200         |
| 5   | -        | 200 (alle)  |

*Begrenset av skolens størrelse (200 elever)

**Med karantene (smitterate = 1):**

| Dag | Nye syke | Totalt syke |
|-----|----------|-------------|
| 0   | -        | 1           |
| 1   | 1        | 2           |
| 2   | 2        | 4           |
| 3   | 4        | 8           |
| 4   | 8        | 16          |
| 5   | 16       | 32          |

**Sammenligning etter 5 dager:**
- **Uten tiltak:** 200 syke (hele skolen!)
- **Med karantene:** 32 syke (16% av skolen)

**Hva lærer vi?**
- Smitteraten har enorm betydning for spredningshastigheten
- Å redusere smitteraten fra 3 til 1 kan forhindre en epidemi
- Små endringer i atferd (håndvask, holde avstand) gir stor effekt
- Dette er den samme logikken som ble brukt under COVID-19-pandemien

**Begrensninger i modellen:**
- Alle smitter like mye (urealistisk)
- Ingen inkubasjonstid
- Ingen immunitet etter sykdom
- Forenklet kontaktmønster`,
    },

    // ========== OPPGAVE 11: VALIDERING ==========
    {
      id: 'nat10-6-4-ex-11-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-4-ex-11',
        number: '6.4.11',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr det å validere en simulering?',
        options: [
          'Å sjekke om simuleringens resultater stemmer overens med virkeligheten',
          'Å gjøre simuleringen raskere',
          'Å dele simuleringen med andre forskere',
          'Å kjøre simuleringen flere ganger med samme data',
        ],
        answer: 0,
        solution: `**Svar: Å sjekke om simuleringens resultater stemmer overens med virkeligheten**

**Forklaring:**

Validering betyr å teste om modellen gir realistiske resultater ved å sammenligne med virkelige data.

**Eksempel:**
- En værsimulering kan valideres ved å sammenligne forutsigelsene med det været som faktisk inntraff
- En klimamodell kan valideres ved å "simulere fortiden" og se om resultatene stemmer med historiske klimadata

**Hvorfor er validering viktig?**
- Uten validering vet vi ikke om simuleringen gir meningsfulle resultater
- En uvalidert modell kan gi helt feil svar
- Validering bygger tillit til resultatene`,
      },
    },

    // ========== OPPGAVE 12: STARTBETINGELSER ==========
    {
      id: 'nat10-6-4-ex-12-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-4-ex-12',
        number: '6.4.12',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du skal simulere en ball som triller nedover en bakke. Hvilke startbetingelser trenger du for simuleringen? Nevn minst fire.',
        solution: `**Nødvendige startbetingelser:**

1. **Ballens startposisjon:** Hvor på bakken starter ballen? (meters fra toppen)

2. **Starthastighet:** Ligger ballen stille ved start, eller har den fått et dytt? (m/s)

3. **Bakkens helning:** Hvor bratt er bakken? (vinkel i grader)

4. **Ballens masse:** Hvor tung er ballen? (kg) Påvirker tregheten.

5. **Ballens radius:** Størrelsen på ballen påvirker rullemotstanden.

6. **Friksjon:** Hvor glatt er overflaten? (friskjonskoeffisient)

7. **Luftmotstand:** Er ballen stor nok til at luftmotstand spiller en rolle?

8. **Tyngdeakselerasjon:** g = 9,81 m/s² (konstant på jordens overflate)

**Forenklinger vi kan gjøre:**
- Ignorere luftmotstand (liten ball, lav hastighet)
- Anta jevn helning (ikke en ujevn bakke)
- Anta at ballen ruller uten å gli

Jo flere detaljer vi inkluderer, jo mer nøyaktig blir simuleringen, men den blir også mer komplisert å beregne.`,
      },
    },

    // ========== OPPGAVE 13: SAMMENLIGNE SIMULERINGER ==========
    {
      id: 'nat10-6-4-ex-13-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-4-ex-13',
        number: '6.4.13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En forsker bruker to ulike klimamodeller for å forutsi temperaturen i 2050. Modell A sier +2,5°C, modell B sier +3,8°C. Forklar hvorfor to modeller kan gi forskjellige resultater, og hvordan forskeren kan vurdere hvilken modell som er mest pålitelig.',
        solution: `**Hvorfor kan to modeller gi forskjellige resultater?**

1. **Ulike forenklinger:**
   - Modell A og B kan ha gjort forskjellige antagelser om f.eks. skyers påvirkning
   - Den ene kan inkludere mer detaljerte havmodeller enn den andre
   - Ulike måter å beregne tilbakekobling mellom atmosfære og hav

2. **Ulike startbetingelser:**
   - Modellene kan bruke litt forskjellige klimadata som utgangspunkt
   - Forskjellige måter å fylle inn data der målinger mangler

3. **Ulike utslippsscenarier:**
   - Modellene kan anta forskjellig fremtidig CO₂-utslipp
   - Ulike antakelser om politiske beslutninger og teknologiutvikling

4. **Ulik oppløsning:**
   - Modell A kan dele atmosfæren i 10x10 km ruter
   - Modell B kan bruke 50x50 km ruter
   - Finere oppløsning gir ofte mer nøyaktige resultater

**Hvordan vurdere pålitelighet?**

1. **Sammenligne med historiske data:**
   - Kjør begge modellene for fortiden (f.eks. 1950-2020)
   - Sjekk hvilken modell som best gjengir observert temperaturutvikling
   - Modellen som treffer best på fortiden, er trolig mest pålitelig for fremtiden

2. **Se på mange modeller:**
   - Forskere bruker ofte 20-30 modeller og tar gjennomsnittet
   - Gjennomsnittet er ofte bedre enn enkeltstående modeller

3. **Sjekk peer review:**
   - Er modellene publisert i anerkjente tidsskrifter?
   - Har andre forskere vurdert dem?

4. **Vurder usikkerhet:**
   - Gode modeller rapporterer usikkerhet (f.eks. 2,5°C ± 0,5°C)
   - Bred usikkerhet betyr at vi er mindre sikre

**Konklusjon:** Det er normalt at modeller gir forskjellige resultater. Forskere bruker mange modeller for å finne det mest sannsynlige resultatet.`,
      },
    },

    // ========== OPPGAVE 14: ENKEL REGNEARK-SIMULERING ==========
    {
      id: 'nat10-6-4-ex-14-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-4-ex-14',
        number: '6.4.14',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du har et glass med varmt vann (80°C) i et rom med temperatur 20°C. Vannet avkjøles med omtrent 10% av temperaturforskjellen hvert minutt. Simuler temperaturen for de første 10 minuttene. Hvilken temperatur har vannet etter 10 minutter?',
        solution: `**Løsning:**

**Modell:** Avkjøling = 10% av (vanntemperatur - romtemperatur) per minutt

| Minutt | Vanntemp | Romtemp | Differanse | Avkjøling (10%) | Ny temp |
|--------|----------|---------|------------|-----------------|---------|
| 0      | 80,0°C   | 20°C    | 60,0       | 6,0             | 74,0°C  |
| 1      | 74,0°C   | 20°C    | 54,0       | 5,4             | 68,6°C  |
| 2      | 68,6°C   | 20°C    | 48,6       | 4,9             | 63,7°C  |
| 3      | 63,7°C   | 20°C    | 43,7       | 4,4             | 59,3°C  |
| 4      | 59,3°C   | 20°C    | 39,3       | 3,9             | 55,4°C  |
| 5      | 55,4°C   | 20°C    | 35,4       | 3,5             | 51,9°C  |
| 6      | 51,9°C   | 20°C    | 31,9       | 3,2             | 48,7°C  |
| 7      | 48,7°C   | 20°C    | 28,7       | 2,9             | 45,8°C  |
| 8      | 45,8°C   | 20°C    | 25,8       | 2,6             | 43,2°C  |
| 9      | 43,2°C   | 20°C    | 23,2       | 2,3             | 40,9°C  |
| 10     | 40,9°C   | 20°C    | 20,9       | 2,1             | 38,8°C  |

**Svar:** Etter 10 minutter er vanntemperaturen ca. **38,8°C**

**Observasjoner:**
- Avkjølingen er raskest i starten (stor temperaturforskjell)
- Etter hvert som vannet nærmer seg romtemperatur, avtar avkjølingen
- Vannet vil aldri bli kaldere enn romtemperatur (20°C)
- Dette er en forenklet modell av Newtons avkjølingslov`,
      },
    },

    // ========== OPPGAVE 15: TYPER MODELLER ==========
    {
      id: 'nat10-6-4-ex-15a-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-4-ex-15a',
        number: '6.4.15a',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av disse er IKKE en type modell brukt i naturfag?',
        options: [
          'Fysisk modell (f.eks. en globus)',
          'Matematisk modell (f.eks. formler)',
          'Digital modell (f.eks. datasimulering)',
          'Emosjonell modell (f.eks. følelser)',
        ],
        answer: 3,
        solution: `**Svar: Emosjonell modell (f.eks. følelser)**

"Emosjonell modell" er ikke en type vitenskapelig modell brukt i naturfag.

**Typer modeller i naturfag:**

1. **Fysiske modeller:**
   - Konkrete objekter som representerer noe
   - Eksempler: Globus (jorden), DNA-modell, atommodell
   - Fordel: Lett å visualisere

2. **Matematiske modeller:**
   - Formler og ligninger som beskriver sammenhenger
   - Eksempel: F = ma (Newtons andre lov)
   - Fordel: Nøyaktige beregninger

3. **Digitale modeller (simuleringer):**
   - Dataprogrammer som etterlikner virkeligheten
   - Eksempel: Værsimulering, klimamodell
   - Fordel: Kan teste mange scenarioer raskt

4. **Konseptuelle modeller:**
   - Diagrammer og illustrasjoner som forklarer begreper
   - Eksempel: Næringskjede, cellesyklus-diagram
   - Fordel: Forenkler komplekse prosesser`,
      },
    },

    // ========== OPPGAVE 16: FORBEDRE EN MODELL ==========
    {
      id: 'nat10-6-4-ex-16a-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-4-ex-16a',
        number: '6.4.16a',
        type: 'classic',
        difficulty: 'medium',
        task: 'En enkel modell for populasjonsvekst sier at en kaninpopulasjon dobler seg hvert år. Modellen starter med 10 kaniner.\n\na) Beregn antall kaniner etter 5 år med denne enkle modellen.\nb) Nevn tre faktorer som gjør denne modellen urealistisk.\nc) Forklar hvordan du kan forbedre modellen ved å legge til en bæreevne på 200 kaniner.',
        solution: `**a) Enkel modell (dobling hvert år):**

| År | Kaniner |
|----|---------|
| 0  | 10      |
| 1  | 20      |
| 2  | 40      |
| 3  | 80      |
| 4  | 160     |
| 5  | 320     |

Etter 5 år: **320 kaniner** (ubegrenset eksponentiell vekst)

**b) Tre faktorer som gjør modellen urealistisk:**

1. **Begrenset mat:** I virkeligheten er det begrenset med mat og ressurser. Når populasjonen vokser, blir det konkurranse om maten.

2. **Rovdyr:** Kaniner har rovdyr (rev, ørn, ugle) som begrenser populasjonen.

3. **Sykdommer:** Tette populasjoner er mer utsatt for sykdomsutbrudd som kan drepe mange kaniner.

**c) Forbedret modell med bæreevne:**

Bæreevne (K) = 200 kaniner. Vekstraten reduseres når populasjonen nærmer seg bæreevnen:

Ny formel: vekst = vekstrate × populasjon × (1 - populasjon/bæreevne)

| År | Kaniner | Vekst |
|----|---------|-------|
| 0  | 10      | -     |
| 1  | 19      | 9,5   |
| 2  | 35      | 15,7  |
| 3  | 60      | 25,2  |
| 4  | 96      | 35,5  |
| 5  | 137     | 41,3  |

Med bæreevne stopper populasjonen ved ca. 200 i stedet for å vokse ubegrenset. Dette er **logistisk vekst** og er mye mer realistisk.`,
      },
    },

    // ========== OPPGAVE 17: REGNEARK-SIMULERING ==========
    {
      id: 'nat10-6-4-ex-17a-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-4-ex-17a',
        number: '6.4.17a',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du har et lån på 10 000 kr med 1% rente per måned. Du betaler 1000 kr per måned. Lag en regneark-simulering (tabell) som viser saldo, rente og betaling for de første 6 månedene. Hvor mange måneder tar det å betale ned lånet?',
        solution: `**Regneark-simulering:**

| Måned | Saldo start | Rente (1%) | Betaling | Saldo slutt |
|-------|-------------|------------|----------|-------------|
| 1     | 10 000      | 100        | 1 000    | 9 100       |
| 2     | 9 100       | 91         | 1 000    | 8 191       |
| 3     | 8 191       | 82         | 1 000    | 7 273       |
| 4     | 7 273       | 73         | 1 000    | 6 346       |
| 5     | 6 346       | 63         | 1 000    | 5 409       |
| 6     | 5 409       | 54         | 1 000    | 4 463       |
| 7     | 4 463       | 45         | 1 000    | 3 508       |
| 8     | 3 508       | 35         | 1 000    | 2 543       |
| 9     | 2 543       | 25         | 1 000    | 1 568       |
| 10    | 1 568       | 16         | 1 000    | 584         |
| 11    | 584         | 6          | 590      | 0           |

**Formler i regneark:**
- Rente = Saldo start × 0,01
- Saldo slutt = Saldo start + Rente - Betaling

**Svar:** Det tar **11 måneder** å betale ned lånet.

**Observasjoner:**
- Total betalt: 10 000 + 590 = 10 590 kr (590 kr i renter)
- Renten synker for hver måned fordi saldoen synker
- Siste betaling er bare 590 kr (resten av gjelden + siste rente)

**Læringspoeng:**
- Simuleringer i regneark er et kraftig verktøy for å forstå økonomi
- Du kan endre parametrene: Hva skjer med 2% rente? Eller 500 kr betaling?
- Formler i regneark er egentlig en form for programmering!`,
      },
    },

    // ========== OPPGAVE 18: EPIDEMISIMULERING ==========
    {
      id: 'nat10-6-4-ex-18-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-4-ex-18',
        number: '6.4.18',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En enkel epidemimodell sier at hver syk person smitter i gjennomsnitt 1,5 nye personer per dag. Etter 5 dager med sykdom blir man frisk og immun.\n\nHvis det starter med 1 syk person i en by med 10 000 innbyggere:\na) Hvor mange nye smittede er det etter dag 1, 2 og 3?\nb) Hvilke forenklinger gjør denne modellen?\nc) Hva kan vi gjøre for å gjøre modellen mer realistisk?',
        solution: `**a) Nye smittede:**

- Dag 0: 1 syk person
- Dag 1: 1 × 1,5 = 1,5 → ca. 2 nye smittede (totalt 3)
- Dag 2: 3 × 1,5 = 4,5 → ca. 5 nye smittede (totalt 8)
- Dag 3: 8 × 1,5 = 12 nye smittede (totalt 20)

Merk: Smitteraten avtar etter hvert fordi:
- Noen er allerede immune (har vært syke)
- Sjansen for å treffe en mottakelig person synker

**b) Forenklinger i modellen:**

1. Alle smitter like mye (i virkeligheten varierer dette)
2. Ingen tiltak (karantene, vaksinering)
3. Alle er like mottakelige for smitte
4. Ingen forsinkelse mellom smitte og symptomer (inkubasjonstid)
5. Alle blir friske etter nøyaktig 5 dager
6. Ingen dør av sykdommen
7. Alle personer møter like mange andre (i virkeligheten varierer kontaktmønsteret)

**c) Gjøre modellen mer realistisk:**

1. **Inkubasjonstid:** Legge til 2-3 dager der man er smittet men ikke syk
2. **Varierende smitterater:** Noen smitter mer enn andre (superspreders)
3. **Tiltak:** Modellere effekten av karantene, munnbind, vaksinering
4. **Aldersgrupper:** Ulike aldersgrupper har ulik kontaktrate og sårbarhet
5. **Geografisk spredning:** Folk i samme nabolag smitter hverandre mer
6. **Sesongvariasjoner:** Noen sykdommer sprer seg mer om vinteren
7. **Sykehuskapasitet:** Hva skjer hvis sykehusene blir overbelastet?

Denne oppgaven illustrerer hvordan alle modeller er forenklinger, men kan gjøres mer realistiske ved å legge til flere faktorer.`,
      },
    },

    // ========== EKSEMPEL: SIMULERING AV RADIOAKTIV NEDBRYTING ==========
    {
      id: 'nat10-6-4-example-radioaktiv',
      type: 'example',
      title: 'Eksempel: Simulering av radioaktiv nedbryting',
      problem: 'Karbon-14 har en halveringstid på 5730 år. En arkeolog finner en trebjelke som inneholder 25% av den opprinnelige mengden karbon-14. Bruk simulering til å beregne alderen til trebjelken.',
      solution: `**Løsning med simulering:**

Vi vet at etter hver halveringstid er mengden halvert:

| Tid (år) | Andel C-14 gjenstående |
|----------|----------------------|
| 0 | 100% |
| 5 730 | 50% |
| 11 460 | 25% |
| 17 190 | 12,5% |
| 22 920 | 6,25% |

**Svar:** Trebjelken har 25% C-14 igjen, noe som tilsvarer 2 halveringstider.

Alder = 2 × 5 730 år = **11 460 år**

**Python-simulering:**

\`\`\`python
halveringstid = 5730  # år
mengde = 100          # prosent
tid = 0               # år

while mengde > 25:
    mengde = mengde / 2
    tid = tid + halveringstid
    print(f"Etter {tid} år: {mengde}% gjenstår")

print(f"Trebjelken er ca. {tid} år gammel")
\`\`\`

**Output:**
\`\`\`
Etter 5730 år: 50.0% gjenstår
Etter 11460 år: 25.0% gjenstår
Trebjelken er ca. 11460 år gammel
\`\`\`

**Læringspoeng:**
- Radioaktiv nedbryting følger et eksponentielt mønster
- Halveringstiden er konstant uansett startmengde
- Simulering gjør det enkelt å beregne alder på gamle gjenstander
- C-14-metoden brukes i arkeologi for å datere organisk materiale opptil ca. 50 000 år`,
    },

    // ========== OPPGAVE 19: RADIOAKTIV NEDBRYTING ==========
    {
      id: 'nat10-6-4-ex-19-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-4-ex-19',
        number: '6.4.19',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En prøve av et radioaktivt stoff har halveringstid på 10 dager. Etter 30 dager, hvor stor andel av det opprinnelige stoffet er igjen?',
        options: [
          { id: 'a', text: '33%', isCorrect: false, feedback: 'Feil. Radioaktiv nedbryting er ikke lineær. Man deler ikke 100% på 3.' },
          { id: 'b', text: '25%', isCorrect: false, feedback: 'Nesten! Men 30 dager er 3 halveringstider, ikke 2.' },
          { id: 'c', text: '12,5%', isCorrect: true, feedback: 'Riktig! 3 halveringstider: 100% → 50% → 25% → 12,5%.' },
          { id: 'd', text: '6,25%', isCorrect: false, feedback: 'Det ville vært etter 4 halveringstider (40 dager).' },
        ],
        solution: 'Etter 30 dager har det gått 30/10 = 3 halveringstider. For hver halveringstid halveres mengden: 100% → 50% → 25% → 12,5%. Svaret er **12,5%**.',
      },
    },

    // ========== DEFINISJON: EKSPONENTIELL VEKST OG NEDBRYTING ==========
    {
      id: 'nat10-6-4-def-eksponentiell',
      type: 'definition',
      title: 'Eksponentiell vekst og nedbryting',
      content: `**Eksponentiell vekst** betyr at en mengde øker med en fast prosent per tidsenhet. Jo større mengden er, desto raskere øker den.

**Eksponentiell nedbryting** betyr at en mengde minker med en fast prosent per tidsenhet. Jo større mengden er, desto raskere minker den, men den når aldri helt null.

**Eksempler:**
- **Vekst:** Bakteriekoloni som dobler seg hver time: 1 → 2 → 4 → 8 → 16 → ...
- **Nedbryting:** Radioaktivt stoff med halveringstid: 100 → 50 → 25 → 12,5 → ...

**Matematisk formel:**
- Vekst: $N(t) = N_0 \\cdot 2^{t/T}$ (T = doblingstid)
- Nedbryting: $N(t) = N_0 \\cdot (1/2)^{t/T}$ (T = halveringstid)

Simuleringer er spesielt nyttige for å modellere eksponentielle prosesser fordi de kan bli svært store eller svært små.`,
    },

    // ========== OPPGAVE 20: BAKTERIEVEKST ==========
    {
      id: 'nat10-6-4-ex-20-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-4-ex-20',
        number: '6.4.20',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En bakteriekultur starter med 100 bakterier og dobler seg hver 20. minutt.\n\na) Lag en tabell som viser antall bakterier etter 0, 20, 40, 60, 80 og 100 minutter.\nb) Hvor mange bakterier er det etter 4 timer?\nc) Forklar hvorfor denne modellen ikke kan stemme i virkeligheten over lang tid. Hvilke faktorer vil begrense veksten?',
        hints: ['Dobling betyr at antallet ganges med 2 for hvert tidsintervall.', 'Etter 4 timer har det gått 4 × 60 / 20 = 12 doblingstider.'],
        solution: `**a) Tabell over bakterievekst:**

| Tid (min) | Antall bakterier |
|-----------|-----------------|
| 0 | 100 |
| 20 | 200 |
| 40 | 400 |
| 60 | 800 |
| 80 | 1 600 |
| 100 | 3 200 |

**b) Etter 4 timer:**

4 timer = 240 minutter
Antall doblinger = 240 / 20 = 12

Antall = 100 × 2^12 = 100 × 4096 = **409 600 bakterier**

**c) Begrensninger i virkeligheten:**

Eksponentiell vekst kan ikke fortsette uendelig fordi:

1. **Næringsbegrensning:** Bakteriene bruker opp næringsstoffene i omgivelsene
2. **Plass:** Det blir for trangt, og bakteriene konkurrerer om plassen
3. **Avfallsstoffer:** Bakteriene produserer avfallsstoffer som forgifter omgivelsene
4. **Temperatur:** Temperaturen kan endre seg
5. **Immunforsvar:** I en levende organisme vil immunforsvaret bekjempe bakteriene

I virkeligheten følger bakterieveksten en **S-kurve** (logistisk vekst):
- Først langsom vekst (få bakterier)
- Deretter rask eksponentiell vekst
- Til slutt flater veksten ut og stabiliserer seg på et bærekraftig nivå

Denne begrensningen kalles **bærekapasiteten** til miljøet.`,
      },
    },

    // ========== OPPGAVE 21: MODELLKRITIKK ==========
    {
      id: 'nat10-6-4-ex-21-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-4-ex-21',
        number: '6.4.21',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En værvarsling sier at det er 80% sjanse for regn i morgen. Det ble ikke regn.\n\na) Betyr dette at værvarslingen var feil? Begrunn svaret.\nb) Hvordan kan du vurdere om en værtjeneste lager gode varsler?\nc) Forklar forskjellen mellom en enkeltprognose og modellens totale nøyaktighet.',
        solution: `**a) Var værvarslingen feil?**

**Nei, ikke nødvendigvis.** 80% sjanse for regn betyr at i 10 av 10 lignende situasjoner vil det regne 8 ganger. De 2 resterende gangene vil det IKKE regne. Å si 80% og ikke få regn er som å kaste en terning og ikke få 6 – det er usannsynlig men ikke umulig.

En enkelt hendelse kan ikke bevise at en sannsynlighetsprognose er feil. Man må se på mange prognoser over tid.

**b) Hvordan vurdere en værtjenestes kvalitet:**

1. **Kalibrering:** Av alle gangene tjenesten sier 80% sjanse for regn, skal det faktisk regne ca. 80% av gangene
2. **Brier-score:** Et matematisk mål som sammenligner prognoser med faktisk vær over mange dager
3. **Sammenligning:** Sammenlign med andre værtjenester eller med "naiv prognose" (alltid gjette gårsdagens vær)
4. **Langsiktig track record:** Se på hundrevis av prognoser, ikke enkelttilfeller

**c) Enkeltprognose vs. total nøyaktighet:**

- **Enkeltprognose:** "Det er 80% sjanse for regn i morgen" – kan vi aldri verifisere som riktig/feil ut fra én dag
- **Total nøyaktighet:** "Av 100 dager der modellen sa 80% regnsjanse, regnet det 79 dager" – dette viser at modellen er godt kalibrert

**Analogi:** En pokersspiller som gjør riktige valg vil vinne over tid, selv om de taper enkelthender. Modellens kvalitet måles over mange prognoser, ikke enkelttilfeller.

Dette er et viktig poeng om modellering: **en god modell kan gi "feil" resultat i enkelttilfeller, men er riktig over mange tilfeller.**`,
      },
    },
  ],
  exercises: [], // Oppgavene er embedded i content
};

// ============================================================================
// Kapittel 6.5: Forskning og innovasjon
// LK20: Gi eksempler på dagsaktuell forskning og drøfte hvordan ny kunnskap genereres
// ============================================================================

export const CHAPTER_NAT10_6_5: TextbookChapter = {
  id: 'naturfag-10-6-5',
  courseId: 'naturfag-10',
  chapterNumber: '6.5',
  title: 'Forskning og innovasjon',
  description: 'Forstå hvordan ny kunnskap skapes og hvordan forskning påvirker samfunnet.',
  estimatedMinutes: 30,
  competenceGoals: [
    'gi eksempler på dagsaktuell forskning',
    'drøfte hvordan ny kunnskap genereres',
    'forklare forskjellen mellom grunnforskning og anvendt forskning',
    'beskrive forskningsprosessen fra idé til publisering',
    'forstå sammenhengen mellom forskning, innovasjon og samfunnsutvikling',
    'vurdere påliteligheten til ulike informasjonskilder',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'nat10-6-5-intro',
      type: 'text',
      content: `## Forskning og innovasjon

Hvordan vet vi at klimaet endrer seg? Hvordan lages nye vaksiner? Hvordan ble smarttelefonen til?

Svaret er **forskning** og **innovasjon** – to krefter som skaper ny kunnskap og løser problemer i samfunnet.

I dette kapitlet lærer du:
- Hva forskning er og hvordan forskere jobber
- Forskjellen mellom grunnforskning og anvendt forskning
- Hvordan forskning fører til innovasjon
- Eksempler på dagsaktuell forskning
- Hvordan du kan følge med på forskning og vurdere kilder`,
    },

    // ========== DEFINISJON: FORSKNING ==========
    {
      id: 'nat10-6-5-def-forskning',
      type: 'definition',
      title: 'Forskning',
      content: 'Forskning er systematisk og kritisk arbeid for å skape ny kunnskap om verden. Forskning kjennetegnes ved at den følger en planlagt metode, er transparent (åpen om metoder og resultater), og at resultatene kan etterprøves av andre. Forskningen bygger alltid på eksisterende kunnskap og følger etiske retningslinjer.',
    },

    // ========== DEFINISJON: INNOVASJON ==========
    {
      id: 'nat10-6-5-def-innovasjon',
      type: 'definition',
      title: 'Innovasjon',
      content: 'Innovasjon er prosessen med å omsette ny kunnskap eller ideer til praktiske produkter, tjenester eller løsninger som skaper verdi for samfunnet. Innovasjon bygger ofte på forskning, men krever også kreativitet, samarbeid og ressurser. Eksempler på innovasjon er utviklingen av smarttelefonen, mRNA-vaksiner og solcellepaneler.',
    },

    // ========== DEFINISJON: HYPOTESE ==========
    {
      id: 'nat10-6-5-def-hypotese',
      type: 'definition',
      title: 'Hypotese',
      content: 'En hypotese er en testbar påstand eller antakelse om hva svaret på et forskningsspørsmål kan være. Hypotesen formuleres før forsøket gjennomføres, og forsøket er designet for å teste om hypotesen stemmer eller ikke. En god hypotese er spesifikk, målbar og kan motbevises. Eksempel: "Planter som vannes med 50 ml vann daglig vokser høyere enn planter som vannes med 20 ml."',
    },

    // ========== DEFINISJON: FAGFELLEVURDERING ==========
    {
      id: 'nat10-6-5-def-fagfellevurdering',
      type: 'definition',
      title: 'Fagfellevurdering (peer review)',
      content: 'Fagfellevurdering er en kvalitetssikringsprosess der andre eksperter innenfor samme fagfelt vurderer en vitenskapelig artikkel før den publiseres. Fagfellene sjekker metodene, analysen og konklusjonene, og gir tilbakemelding til forfatterne. Artikler som har gjennomgått fagfellevurdering regnes som mer pålitelige enn artikler som ikke har det.',
    },

    // ========== HVA ER FORSKNING? ==========
    {
      id: 'nat10-6-5-hva-er-forskning',
      type: 'text',
      content: `## Hva er forskning?

**Forskning** er systematisk arbeid for å skape ny kunnskap.

### Kjennetegn ved forskning

1. **Systematisk**: Følger en planlagt metode
2. **Kritisk**: Stiller spørsmål og tester påstander
3. **Transparens**: Deler metoder og resultater med andre
4. **Gjentagbar**: Andre skal kunne gjøre samme forsøk
5. **Bygger på tidligere kunnskap**: Ingen starter fra scratch

### Hvorfor forsker vi?

**Nysgjerrighet:**
- Vi vil forstå verden bedre
- "Hvorfor er himmelen blå?"
- "Hvordan oppsto universet?"

**Løse problemer:**
- Finne kur mot sykdommer
- Utvikle fornybar energi
- Lage bedre teknologi

**Forbedre samfunnet:**
- Bedre helse
- Tryggere miljø
- Mer effektive løsninger`,
    },

    // ========== FORSKNINGSPROSESSEN ==========
    {
      id: 'nat10-6-5-forskningsprosessen',
      type: 'text',
      content: `## Forskningsprosessen

Forskning følger en prosess fra idé til publisering:

### 1. Idé og spørsmål
Forskeren lurer på noe: "Hvorfor skjer dette?"

**Eksempel:** "Hvorfor smelter isen på Grønland så raskt?"

### 2. Litteraturstudie
Les hva andre har forsket på tidligere. Hva vet vi allerede?

### 3. Hypotese
Lag en testbar påstand om hva du tror er svaret.

**Eksempel:** "Isen smelter raskere fordi havtemperaturen øker."

### 4. Planlegging
Designe forsøk eller undersøkelser for å teste hypotesen.

### 5. Datainnsamling
Gjennomføre forsøk, observasjoner eller målinger.

**Eksempel:** Måle havtemperatur og issmelting over flere år.

### 6. Analyse
Behandle og tolke dataene. Hva viser resultatene?

### 7. Konklusjon
Støtter dataene hypotesen? Hva har vi lært?

### 8. Publisering
Dele resultatene i vitenskapelige artikler.

### 9. Fagfellevurdering (peer review)
Andre forskere vurderer kvaliteten på forskningen før publisering.

### 10. Videre forskning
Ny kunnskap fører til nye spørsmål!`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE ==========
    {
      id: 'nat10-6-5-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-5-ex-1',
        number: '6.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskning?',
        options: [
          {
            id: 'a',
            text: 'Systematisk arbeid for å skape ny kunnskap',
            isCorrect: true,
            feedback: 'Riktig! Forskning er en systematisk prosess for å utvikle ny kunnskap gjennom undersøkelser, eksperimenter og analyser.',
          },
          {
            id: 'b',
            text: 'Å lese bøker om naturfag',
            isCorrect: false,
            feedback: 'Feil. Å lese eksisterende kunnskap er viktig, men forskning handler om å SKAPE ny kunnskap.',
          },
          {
            id: 'c',
            text: 'Å gjette svaret på et spørsmål',
            isCorrect: false,
            feedback: 'Feil. Forskning er systematisk og basert på bevis, ikke gjetting.',
          },
          {
            id: 'd',
            text: 'Å kopiere andres arbeid',
            isCorrect: false,
            feedback: 'Feil. Forskning bygger på tidligere arbeid, men skaper ny kunnskap. Å kopiere andres arbeid er plagiat.',
          },
        ],
        solution: 'Forskning er systematisk arbeid for å skape ny kunnskap. Det innebærer å stille spørsmål, teste hypoteser, samle data og trekke konklusjoner basert på bevis.',
      },
    },

    // ========== GRUNNFORSKNING VS. ANVENDT FORSKNING ==========
    {
      id: 'nat10-6-5-grunnforskning-anvendt',
      type: 'text',
      content: `## Grunnforskning vs. anvendt forskning

Det finnes to hovedtyper forskning:

### Grunnforskning (teoretisk forskning)

**Mål:** Forstå hvordan verden fungerer – uten umiddelbart praktisk mål

**Eksempler:**
- Studere sort materie i universet
- Utforske bakteriers genetikk
- Forstå hjernens hukommelsessystemer

**Hvorfor er det viktig?**
Grunnforskning gir oss dypere forståelse. Selv om den ikke har umiddelbar nytte, kan den senere føre til viktige oppdagelser.

**Eksempel:**
Einstein utviklet relativitetsteorien (grunnforskning). Mange år senere brukte vi denne kunnskapen til å lage GPS-systemer!

### Anvendt forskning (praktisk forskning)

**Mål:** Løse konkrete problemer eller utvikle nye produkter

**Eksempler:**
- Utvikle nye vaksiner
- Lage mer effektive solceller
- Finne metoder for å rense plast fra havet

**Hvorfor er det viktig?**
Anvendt forskning bruker kunnskap til å forbedre samfunnet direkte.

### Samspillet

Grunnforskning og anvendt forskning jobber sammen:
1. **Grunnforskning** gir oss kunnskap om hvordan ting fungerer
2. **Anvendt forskning** bruker denne kunnskapen til å løse problemer

**Eksempel:**
- Grunnforskning: Forstå hvordan immunforsvaret fungerer
- Anvendt forskning: Utvikle vaksiner basert på denne kunnskapen`,
    },

    // ========== OPPGAVE 2: MULTIPLE CHOICE ==========
    {
      id: 'nat10-6-5-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-5-ex-2',
        number: '6.5.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom grunnforskning og anvendt forskning?',
        options: [
          {
            id: 'a',
            text: 'Grunnforskning søker å forstå verden, anvendt forskning søker å løse konkrete problemer',
            isCorrect: true,
            feedback: 'Riktig! Grunnforskning handler om å utvikle kunnskap og forståelse, mens anvendt forskning bruker kunnskap til å løse praktiske problemer.',
          },
          {
            id: 'b',
            text: 'Grunnforskning er viktigere enn anvendt forskning',
            isCorrect: false,
            feedback: 'Feil. Begge typer forskning er viktige og utfyller hverandre.',
          },
          {
            id: 'c',
            text: 'Anvendt forskning er bare for private selskaper',
            isCorrect: false,
            feedback: 'Feil. Både universiteter, offentlige institusjoner og private selskaper driver med anvendt forskning.',
          },
          {
            id: 'd',
            text: 'Grunnforskning er enklere å gjennomføre',
            isCorrect: false,
            feedback: 'Feil. Begge typer forskning kan være like utfordrende, bare med forskjellige mål.',
          },
        ],
        solution: 'Grunnforskning søker å forstå verden og utvikle kunnskap uten nødvendigvis å ha et umiddelbart praktisk mål. Anvendt forskning bruker kunnskap til å løse konkrete problemer og utvikle nye produkter eller løsninger.',
      },
    },

    // ========== INNOVASJON ==========
    {
      id: 'nat10-6-5-innovasjon',
      type: 'text',
      content: `## Innovasjon

**Innovasjon** er når forskning fører til nye løsninger, produkter eller tjenester som forbedrer samfunnet.

### Fra forskning til innovasjon

**Forskning → Innovasjon → Samfunnsnytte**

**Eksempler:**

**1. Smarttelefoner**
- Forskning: Mikroelektronikk, trådløs kommunikasjon, berøringsskjermer
- Innovasjon: Kombinere teknologiene til en smarttelefon
- Samfunnsnytte: Kommunikasjon, informasjon, navigasjon i lommeformat

**2. mRNA-vaksiner**
- Forskning: Forstå hvordan mRNA fungerer i celler
- Innovasjon: Utvikle vaksiner basert på mRNA-teknologi
- Samfunnsnytte: Rask utvikling av COVID-19-vaksiner

**3. Solceller**
- Forskning: Fotoelektrisk effekt (hvordan lys blir til elektrisitet)
- Innovasjon: Lage effektive og billige solcellepaneler
- Samfunnsnytte: Fornybar energi til hjem og industri

### Hva kreves for innovasjon?

1. **Kunnskap** fra forskning
2. **Kreativitet** for å se nye muligheter
3. **Samarbeid** mellom forskere, ingeniører og næringsliv
4. **Ressurser** (penger, utstyr, tid)
5. **Vilje til å prøve** – og feile

### Innovasjon i Norge

Norge er god på innovasjon innen:
- **Fornybar energi** (vannkraft, vindkraft, havvind)
- **Havbruk** (oppdrett av laks)
- **Maritim teknologi** (skip, offshore)
- **Helseteknologi** (medisinsk utstyr)`,
    },

    // ========== EKSEMPEL: FRA GRUNNFORSKNING TIL PRODUKT ==========
    {
      id: 'nat10-6-5-example-gps',
      type: 'example',
      title: 'Eksempel: Fra relativitetsteori til GPS',
      problem: 'Forklar hvordan Einsteins relativitetsteori (grunnforskning fra 1905/1915) ble nødvendig for å lage GPS-systemet (anvendt teknologi fra 1970-tallet).',
      solution: `**Løsning:**

**Grunnforskning (1905-1915):**
- Einstein utviklet relativitetsteorien, som blant annet sier at:
  - Tid går litt saktere jo raskere du beveger deg (spesiell relativitetsteori)
  - Tid går litt raskere jo lenger unna en tung masse du er (generell relativitetsteori)
- På Einsteins tid hadde dette ingen praktisk nytte

**Anvendt forskning og innovasjon (1970-2000):**
- GPS-satellitter kretser rundt jorden i ca. 20 200 km høyde med hastighet 14 000 km/t
- Spesiell relativitet: Klokken i satellitten tikker ca. 7 mikrosekunder saktere per dag (på grunn av hastigheten)
- Generell relativitet: Klokken i satellitten tikker ca. 45 mikrosekunder raskere per dag (på grunn av svakere gravitasjon)
- Nettoresultat: Satellittklokken er 38 mikrosekunder raskere per dag

**Hvorfor er dette viktig?**
- GPS bruker nøyaktig tid til å beregne din posisjon
- 38 mikrosekunder feil per dag gir en posisjonsfeil på ca. 10 km per dag!
- Uten korreksjon for relativistiske effekter ville GPS vært ubrukelig

**Lærdom:**
Grunnforskning som virker "unyttig" kan vise seg å være helt avgjørende mange år senere. Einstein kunne ikke forestille seg GPS, men hans forskning gjør det mulig.`,
    },

    // ========== EKSEMPEL: FORSKNINGSPROSESSEN I PRAKSIS ==========
    {
      id: 'nat10-6-5-example-forskningsprosess',
      type: 'example',
      title: 'Eksempel: Forskningsprosessen - mRNA-vaksiner',
      problem: 'Beskriv hvordan forskningsprosessen førte til utviklingen av mRNA-vaksiner mot COVID-19.',
      solution: `**Løsning:**

**1. Grunnforskning (1960-2000):**
- Forskere studerte mRNA (budbringer-RNA) og hvordan det instruerer celler til å lage proteiner
- Katalin Karikó forsket i årevis på hvordan mRNA kunne brukes til medisinsk behandling
- Mange skeptikere trodde det aldri ville fungere

**2. Hypotese:**
"Hvis vi sprøyter inn syntetisk mRNA som koder for et virusprotein, vil kroppens celler lage proteinet, og immunforsvaret vil lære å gjenkjenne det."

**3. Eksperimenter og testing (2005-2019):**
- Karikó og Drew Weissman oppdaget hvordan man kunne modifisere mRNA for å unngå at immunforsvaret ødela det
- Tidlige forsøk på dyr viste lovende resultater
- BioNTech og Moderna utviklet mRNA-plattformer

**4. COVID-19 (2020):**
- Januar: COVID-19 virusets DNA-sekvens ble publisert
- Februar: mRNA-vaksiner ble designet på bare dager
- Mars-November: Kliniske studier på tusenvis av frivillige
- Desember: Vaksinen ble godkjent etter fagfellevurdering

**5. Publisering og fagfellevurdering:**
- Resultater publisert i New England Journal of Medicine
- Fagfeller vurderte data og metoder
- Over 95% effektivitet mot alvorlig sykdom

**6. Innovasjon og samfunnsnytte:**
- Milliarder av doser gitt globalt
- Millioner av liv reddet
- Karikó og Weissman fikk Nobelprisen i medisin 2023

**Lærdom:** 60 års grunnforskning la grunnlaget for en vaksine som ble utviklet på rekordtid.`,
    },

    // ========== EKSEMPEL: KILDEKRITIKK ==========
    {
      id: 'nat10-6-5-example-kildekritikk',
      type: 'example',
      title: 'Eksempel: Vurdere en nyhetssak om forskning',
      problem: 'Du leser en overskrift i en nettavis: "Ny studie: Sjokolade gjør deg smartere!" Hvordan vurderer du påliteligheten til denne påstanden?',
      solution: `**Løsning - Sjekkliste for kildekritikk:**

**1. Hvem står bak studien?**
- Er det forskere ved anerkjente universiteter?
- Er studien publisert i et fagfellevurdert tidsskrift?
- Ble studien finansiert av sjokoladeindustrien? (interessekonflikt)

**2. Hva viste studien egentlig?**
- Les selve artikkelen, ikke bare overskriften
- Kanskje studien viste en liten sammenheng, men overskriften overdriver
- Korrelasjon betyr ikke årsak-virkning (folk som spiser sjokolade KAN være smartere, uten at sjokoladen er årsaken)

**3. Hvor stor var studien?**
- Ble den gjort på 10 personer eller 10 000?
- Større studier gir mer pålitelige resultater
- Ble det brukt kontrollgruppe?

**4. Er resultatene gjentatt?**
- Har andre forskere funnet det samme?
- Én studie beviser ingenting alene
- Vitenskap krever at resultater kan gjentas

**5. Hva sier andre eksperter?**
- Kommenterer uavhengige forskere studien?
- Er de enige eller skeptiske?

**Vurdering av denne saken:**
Sannsynligvis er overskriften overdrevet. Kanskje studien fant at kakao inneholder stoffer som kan påvirke blodgjennomstrømning til hjernen, men det betyr ikke at "sjokolade gjør deg smartere". Avisoverskrifter forenkler ofte forskning for å få klikk.`,
    },

    // ========== OPPGAVE 3: FORSKNINGSPROSESSEN ==========
    {
      id: 'nat10-6-5-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-5-ex-3',
        number: '6.5.3',
        type: 'classic',
        difficulty: 'medium',
        task: `En forsker vil undersøke om planter vokser bedre med klassisk musikk.

Beskriv de første 5 stegene i forskningsprosessen for dette prosjektet.`,
        multipleChoiceOptions: [
          '1) Spørsmål, 2) Litteraturstudie, 3) Hypotese, 4) Planlegging av forsøk, 5) Datainnsamling',
          '1) Publisering, 2) Fagfellevurdering, 3) Konklusjon, 4) Analyse, 5) Datainnsamling',
          '1) Hypotese, 2) Konklusjon, 3) Publisering, 4) Spørsmål, 5) Analyse',
          '1) Datainnsamling, 2) Analyse, 3) Spørsmål, 4) Litteraturstudie, 5) Publisering',
        ],
        solution: `**Forskningsprosessen for planteforsøket:**

**1. Idé og spørsmål**
Forskeren lurer på: "Vokser planter bedre hvis de eksponeres for klassisk musikk?"

**2. Litteraturstudie**
Forskeren leser tidligere studier om:
- Hvordan planter reagerer på lyd
- Studier om musikk og plantevekst
- Hva som påvirker plantevekst generelt

**3. Hypotese**
Forskeren lager en testbar påstand:
"Planter som eksponeres for klassisk musikk 2 timer per dag vil vokse raskere enn planter uten musikk."

**4. Planlegging**
Forskeren designer forsøket:
- Bruke 20 like planter (samme art, størrelse)
- Gruppe A: 10 planter med klassisk musikk 2 timer/dag
- Gruppe B: 10 planter uten musikk (kontrollgruppe)
- Likt lys, vann, temperatur for begge grupper
- Måle vekst hver uke i 8 uker

**5. Datainnsamling**
Gjennomføre forsøket:
- Spille klassisk musikk for gruppe A
- Måle høyde og antall blad hver uke
- Notere eventuelle forskjeller
- Ta bilder for dokumentasjon

**Viktige prinsipper:**
- **Kontrollgruppe:** Gruppe B uten musikk for sammenligning
- **Kontrollere variabler:** Alt annet skal være likt
- **Gjentagbarhet:** Andre skal kunne gjøre samme forsøk`,
      },
    },

    // ========== DAGSAKTUELL FORSKNING ==========
    {
      id: 'nat10-6-5-dagsaktuell-forskning',
      type: 'text',
      content: `## Dagsaktuell forskning

La oss se på noen områder der forskningen er spesielt aktiv akkurat nå:

### 1. Klimaforskning

**Hva forskes det på?**
- Hvordan klimaet endrer seg
- Hvordan vi kan redusere klimagassutslipp
- Tilpasning til klimaendringer

**Eksempler:**
- Studere issmelting på Grønland og Antarktis
- Utvikle karbonfangst-teknologi
- Forstå ekstremvær og tørke

**Samfunnsrelevans:**
Klimaendringer påvirker alle. Forskningen hjelper oss å forstå utfordringene og finne løsninger.

### 2. Medisinsk forskning

**Hva forskes det på?**
- Nye behandlinger for sykdommer
- Vaksiner mot nye virus
- Personalisert medisin basert på DNA

**Eksempler:**
- mRNA-vaksiner (brukt mot COVID-19)
- Kreftbehandling med immunterapi
- Genredigering med CRISPR-teknologi

**Samfunnsrelevans:**
Bedre helse, lengre liv, færre som dør av sykdom.

### 3. Fornybar energi

**Hva forskes det på?**
- Mer effektive solceller og vindmøller
- Batteriteknologi for lagring av energi
- Hydrogen som drivstoff

**Eksempler:**
- Floating vindmøller på havet
- Batterier med lengre levetid
- Hydrogen-produksjon fra vann og elektrisitet

**Samfunnsrelevans:**
Kutte utslipp, bli uavhengige av fossile brensler.

### 4. Kunstig intelligens (AI)

**Hva forskes det på?**
- Maskiner som kan lære og tenke
- Bildegjenkjenning og språkforståelse
- AI i medisin, transport og utdanning

**Eksempler:**
- Selvkjørende biler
- AI som diagnostiserer sykdommer
- Språkmodeller (ChatGPT, Claude)

**Samfunnsrelevans:**
AI kan forbedre hverdagen, men krever etiske vurderinger.

### 5. Hav og marin biologi

**Hva forskes det på?**
- Plast i havet og mikroplast
- Hvordan hav og fjorder påvirkes av klimaendringer
- Nye arter og økosystemer på havbunnen

**Eksempler:**
- Utvikle materialer som brytes ned i naturen
- Studere korallrev og hvordan de påvirkes av varmere hav
- Kartlegge livet i havdypet

**Samfunnsrelevans:**
Havet dekker 70% av jorden og er viktig for klima, mat og biodiversitet.`,
    },

    // ========== OPPGAVE 4: DAGSAKTUELL FORSKNING ==========
    {
      id: 'nat10-6-5-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-5-ex-4',
        number: '6.5.4',
        type: 'classic',
        difficulty: 'medium',
        task: `Velg ett av områdene for dagsaktuell forskning (klima, medisin, fornybar energi, AI, eller hav).

a) Forklar kort hva som forskes på innen dette området.

b) Hvorfor er denne forskningen viktig for samfunnet?

c) Nevn ett eksempel på konkret forskning eller innovasjon innen dette området.`,
        multipleChoiceOptions: [
          'Fornybar energi: forskes på solceller, batterier; viktig for å kutte utslipp; eksempel: flytende vindmøller',
          'All forskning er like viktig, ingen forskjell mellom områdene',
          'Forskning har ingen praktisk nytte for samfunnet',
          'Bare medisinsk forskning er viktig, andre områder er unødvendige',
        ],
        solution: `**Eksempelsvar: Fornybar energi**

**a) Hva forskes det på?**
Det forskes på mer effektive måter å produsere og lagre fornybar energi:
- Mer effektive solceller som fanger mer sollys
- Bedre vindmøller som fungerer offshore (på havet)
- Batterier som kan lagre mer energi og vare lenger
- Hydrogen-teknologi for å lagre og transportere energi

**b) Hvorfor er forskningen viktig?**
Fornybar energi er viktig for samfunnet fordi:
- **Klima:** Vi må kutte klimagassutslipp fra fossile brensler (kull, olje, gass)
- **Bærekraft:** Sol, vind og vann er fornybare ressurser som ikke tar slutt
- **Uavhengighet:** Land kan produsere egen energi i stedet for å importere olje/gass
- **Økonomi:** Fornybar energi blir stadig billigere og skaper nye arbeidsplasser

**c) Konkret eksempel: Floating vindmøller**
Norge utvikler flytende vindmøller (Hywind) som kan plasseres langt til havs der vinden er sterkere. Dette gjør det mulig å utnytte vindkraft i land uten grunt hav, og åpner for mye mer vindkraftproduksjon globalt.

---

**Alternativt eksempelsvar: Medisinsk forskning**

**a) Hva forskes det på?**
Ny teknologi for å behandle sykdommer:
- mRNA-vaksiner som raskt kan tilpasses nye virus
- Immunterapi som får kroppens eget immunforsvar til å bekjempe kreft
- Genredigering (CRISPR) for å rette opp genetiske sykdommer

**b) Hvorfor er forskningen viktig?**
- **Redder liv:** Nye behandlinger kan kurere sykdommer som før var dødelige
- **Bedre helse:** Folk lever lenger og sunnere
- **Pandemiberedskap:** mRNA-vaksiner kan raskt utvikles mot nye virus
- **Personalisert behandling:** Medisin tilpasset hver persons genetikk

**c) Konkret eksempel: mRNA-vaksiner mot COVID-19**
Under pandemien utviklet forskere mRNA-vaksiner (Pfizer, Moderna) på rekordtid. Teknologien "lærer" kroppens celler å lage et protein fra viruset, slik at immunforsvaret kan kjenne det igjen. Dette reddet millioner av liv og viste hvor viktig medisinsk forskning er.`,
      },
    },

    // ========== FORSKNING OG SAMFUNN ==========
    {
      id: 'nat10-6-5-forskning-samfunn',
      type: 'text',
      content: `## Forskning og samfunn

Forskning påvirker samfunnet – og samfunnet påvirker forskningen.

### Etikk i forskning

Forskere må følge etiske regler:

**1. Gjøre ingen skade**
- Forsøk på mennesker må være trygge
- Dyreforsøk må minimere lidelse

**2. Informert samtykke**
- Folk som deltar i forsøk må vite hva de er med på
- De må kunne trekke seg når som helst

**3. Personvern**
- Data om folk må beskyttes
- Anonymitet der det er viktig

**4. Ærlighet**
- Ikke juks med data
- Del både positive og negative resultater
- Gi credit til andre forskere

**Eksempel på etisk dilemma:**
Genredigering kan kurere sykdommer – men bør vi endre menneskers DNA? Hva hvis teknologien misbrukes?

### Finansiering av forskning

Forskning koster penger. Hvem betaler?

**Offentlig forskning:**
- Finansiert av staten (Norges forskningsråd)
- Universiteter og forskningsinstitutter
- Mål: Kunnskap til samfunnet

**Privat forskning:**
- Finansiert av bedrifter
- Mål: Utvikle produkter og tjenester
- Eksempel: Legemiddelfirma utvikler ny medisin

**Utfordringer:**
- Hvis forskning finansieres av firmaer, kan resultatene påvirkes?
- Hvordan sikre uavhengig forskning?

### Formidling av forskning

Forskning må deles med samfunnet!

**Fagfellevurderte artikler:**
- Publisert i vitenskapelige tidsskrifter
- Vurdert av andre eksperter (peer review)
- Høy kvalitet, men vanskelig språk

**Populærformidling:**
- Forskere forklarer forskningen i aviser, podcaster, YouTube
- Gjør forskning tilgjengelig for alle

**Hvorfor er formidling viktig?**
- Folk kan ta informerte valg
- Bygge tillit til forskning
- Inspirere neste generasjon forskere`,
    },

    // ========== OPPGAVE 5: FORSKNINGSETIKK ==========
    {
      id: 'nat10-6-5-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-5-ex-5',
        number: '6.5.5',
        type: 'classic',
        difficulty: 'medium',
        task: `En forsker ønsker å teste en ny medisin mot diabetes. For å gjøre dette må forskeren gi medisinen til noen personer med diabetes.

a) Hvilke etiske hensyn må forskeren ta?

b) Hva betyr "informert samtykke" i denne sammenhengen?

c) Hvorfor er det viktig med en kontrollgruppe som får placebo (sukkerpille)?`,
        multipleChoiceOptions: [
          'a) Sikkerhet, informert samtykke, personvern; b) Deltakere må forstå risiko og gi frivillig samtykke; c) For å måle ekte effekt vs. placeboeffekt',
          'a) Ingen etiske hensyn er nødvendige; b) Samtykke er ikke viktig; c) Kontrollgruppe er unødvendig',
          'a) Bare kostnader teller; b) Deltakere trenger ikke vite noe; c) Alle bør få medisinen',
          'a) Forskeren bestemmer alt selv; b) Muntlig avtale er nok; c) Placebo er uetisk',
        ],
        solution: `**a) Etiske hensyn**

Forskeren må ta flere etiske hensyn:

1. **Sikkerhet:**
   - Medisinen må først testes grundig i laboratoriet
   - Starte med små doser og få deltakere
   - Nøye overvåking for bivirkninger

2. **Informert samtykke:**
   - Deltakerne må vite hva de er med på
   - Forstå potensielle risikoer og fordeler
   - Kunne trekke seg når som helst

3. **Personvern:**
   - Helseopplysninger må beskyttes
   - Anonymisere data

4. **Rettferdig fordeling:**
   - Hvem får den nye medisinen?
   - Sikre at sårbare grupper ikke utnyttes

5. **Tilgang til behandling:**
   - Hvis medisinen virker, skal deltakerne få fortsette å bruke den?

**b) Informert samtykke**

Informert samtykke betyr at deltakerne:

1. **Får full informasjon:**
   - Hva er formålet med studien?
   - Hva innebærer det å delta?
   - Hva er risiko og fordeler?
   - Hva er alternativer?

2. **Forstår informasjonen:**
   - Informasjon må gis på et forståelig språk
   - Mulighet til å stille spørsmål

3. **Frivillig samtykke:**
   - Ingen press eller tvang
   - Kan trekke seg når som helst uten konsekvenser

4. **Skriftlig bekreftelse:**
   - Deltakeren signerer samtykkeskjema

**c) Hvorfor kontrollgruppe med placebo?**

Kontrollgruppe med placebo er viktig av flere grunner:

1. **Placeboeffekt:**
   - Mange føler seg bedre bare fordi de tror de får behandling
   - Vi må vite om bedringen skyldes medisinen eller placeboeffekten

2. **Sammenligning:**
   - Vi trenger noe å sammenligne med
   - Kontrollgruppen viser hva som ville skjedd uten medisinen

3. **Sikre at medisinen faktisk virker:**
   - Hvis begge gruppene blir like mye bedre, virker ikke medisinen
   - Hvis medisingruppen blir mer bedre, virker den!

4. **Vitenskapelig standard:**
   - Dobbeltblind studie: Verken pasient eller lege vet hvem som får ekte medisin
   - Reduserer skjevheter

**Eksempel:**
- Gruppe A: 100 personer får ny diabetes-medisin
- Gruppe B: 100 personer får placebo (sukkerpille)
- Etter 6 måneder: Sammenlign blodsukker, bivirkninger, livskvalitet
- Hvis gruppe A har bedre blodsukker enn gruppe B, virker medisinen!

**Etisk dilemma:**
Er det riktig å gi noen placebo når de tror de får behandling? Dette må veies mot behovet for sikker og effektiv medisin.`,
      },
    },

    // ========== HVORDAN FØLGE MED PÅ FORSKNING ==========
    {
      id: 'nat10-6-5-folge-med-forskning',
      type: 'text',
      content: `## Hvordan følge med på forskning

Hvordan kan du selv følge med på ny forskning?

### Pålitelige kilder

**Vitenskapelige tidsskrifter:**
- Nature, Science, The Lancet (medisin)
- Peer-reviewed (fagfellevurdert)
- Høy kvalitet, men vanskelig språk

**Universiteter og forskningsinstitutter:**
- Nettsider som publiserer nyheter om forskning
- Eksempel: UiO.no, NTNU.no, Folkehelseinstituttet

**Forskning.no:**
- Norsk nettsted som formidler forskning
- Skrevet for allmennheten
- Gode kilder

**Vitenskapsjournalister:**
- Skriver om forskning i aviser og nettmedier
- NRK Viten, Aftenposten Viten, Forskning.no

**Podcaster og YouTube:**
- Mange forskere deler kunnskap på sosiale medier
- Eksempel: Abels tårn (matematikk), NRKs vitenskapspodcaster

### Kildekritikk

Ikke all informasjon er pålitelig! Vær kritisk:

**1. Hvem står bak?**
- Er det en anerkjent forsker eller institusjon?
- Eller en blogg uten dokumentasjon?

**2. Er det fagfellevurdert?**
- Peer-reviewed artikler er kvalitetssikret
- Upubliserte studier kan være usikre

**3. Er det balansert?**
- Presenteres både for og imot?
- Eller bare én side av saken?

**4. Er det primærkilde eller sekundærkilde?**
- Primærkilde: Den opprinnelige forskningsartikkelen
- Sekundærkilde: Noen som skriver om forskningen
- Primærkilder er mest pålitelige

**5. Er det økonomiske interesser?**
- Hvem finansierte forskningen?
- Kan resultatet påvirkes av dette?

**Eksempel på upålitelig kilde:**
- Blogginnlegg: "Ny studie beviser at sukkervann kurerer kreft!"
- Ingen link til den faktiske studien
- Ingen anerkjente forskere nevnt
- Reklamerer for et produkt

**Eksempel på pålitelig kilde:**
- Artikkel på Forskning.no: "Ny studie tyder på at solcelleeffektivitet kan økes"
- Link til peer-reviewed artikkel i Nature
- Intervju med flere uavhengige forskere
- Nyansert fremstilling av resultatene`,
    },

    // ========== OPPGAVE 6: ETIKK OG DRØFTING ==========
    {
      id: 'nat10-6-5-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-5-ex-6',
        number: '6.5.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Genredigering med CRISPR-teknologi gjør det mulig å endre DNA i levende organismer. Dette kan brukes til å:
- Kurere genetiske sykdommer
- Lage resistente avlinger som tåler tørke
- Men også potensielt endre på menneskelige egenskaper som høyde, intelligens, utseende

Drøft: Bør vi bruke genredigering på mennesker?

Diskuter både fordeler og ulemper, og ta stilling til hva DU mener.`,
        multipleChoiceOptions: [
          'Genredigering kan kurere sykdommer, men krever strenge etiske rammer, demokratisk kontroll og likhet i tilgang',
          'Genredigering bør brukes fritt uten restriksjoner',
          'Genredigering bør forbys fullstendig for all bruk',
          'Genredigering har ingen etiske problemer å diskutere',
        ],
        solution: `**Drøfting: Genredigering på mennesker**

**Fordeler med genredigering:**

1. **Kurere sykdommer:**
   - Genetiske sykdommer som cystisk fibrose, Huntingtons, muskeldystrofi kan potensielt kureres
   - Redde liv og redusere lidelse
   - Barn kan fødes friske i stedet for med alvorlig sykdom

2. **Forebygge arv av sykdommer:**
   - Hvis vi redigerer kjønnsceller, vil sykdommen ikke gå i arv til neste generasjon
   - Kan utrydde enkelte genetiske sykdommer helt

3. **Vitenskapelig fremskritt:**
   - Vi lærer mer om genetikk og hvordan kroppen fungerer
   - Kan føre til andre medisinske gjennombrudd

**Ulemper og risikoer:**

1. **Ukjente langtidseffekter:**
   - Vi vet ikke hva som skjer 20-30 år frem i tid
   - Endringer i DNA kan ha uforutsette konsekvenser
   - Hva om vi endrer noe som viser seg å være viktig senere?

2. **Etiske grenser:**
   - Hvis vi kan kurere sykdom, kan vi også "forbedre" mennesker
   - Hvem bestemmer hva som er "normalt" vs. "sykt"?
   - Kan føre til "designer-babyer" der foreldre velger egenskaper

3. **Ulikhet og diskriminering:**
   - Hvis behandlingen er dyr, får bare rike råd
   - Kan skape to klasser: Genetisk "forbedrede" og "vanlige"
   - Samfunnet kan diskriminere de som ikke er genredigert

4. **Menneskeverd:**
   - Er mennesker mindre verdt hvis de har genetiske avvik?
   - Hva med mangfold og aksept for forskjellighet?

5. **Misbruk:**
   - Hva hvis teknologien brukes av autoritære regimer?
   - Kan brukes til å "designe" befolkningen

**Hvor går grensen?**

De fleste er enige om:
✅ **OK:** Kurere alvorlige arvelige sykdommer hos embryo
✅ **OK:** Redigere kroppsceller hos voksne (f.eks. endre immunceller for å bekjempe kreft)

De fleste er UENIGE om:
❌ **IKKE OK:** Forbedre egenskaper som intelligens, høyde, utseende
❌ **IKKE OK:** Redigere kjønnsceller uten grundig testing og etisk diskusjon

**Min mening:**

Jeg mener vi BØR bruke genredigering til å kurere alvorlige sykdommer, MEN med strenge regler:

1. **Kun for medisinsk behandling:**
   - Behandle sykdommer, ikke "forbedre" mennesker
   - Klare definisjoner av hva som er sykdom

2. **Grundig testing:**
   - Mange års forskning før det brukes på mennesker
   - Sikre at det er trygt

3. **Demokratisk regulering:**
   - Lover som bestemmer hva som er lov og ikke lov
   - Internasjonalt samarbeid
   - Ikke overlate beslutningen til markedet eller enkeltpersoner

4. **Likhet:**
   - Behandlingen må være tilgjengelig for alle, ikke bare de rike
   - Offentlig finansiering av behandling

5. **Åpenhet og debatt:**
   - Samfunnet må diskutere etikken
   - Ikke bare forskere, men alle må kunne si sin mening

**Konklusjon:**

Genredigering er et kraftfullt verktøy som kan lindre mye lidelse. Men med stor makt følger stort ansvar. Vi må bruke teknologien klokt, med sterke etiske rammer og demokratisk kontroll.

---

**Tips til hvordan du skriver en god drøfting:**

1. **Presenter begge sider:** Vis at du forstår både fordeler og ulemper
2. **Bruk eksempler:** Konkrete tilfeller gjør argumentene tydeligere
3. **Ta stilling:** Ikke sitt på gjerdet – si hva DU mener
4. **Begrunnelse:** Forklar HVORFOR du mener det du mener
5. **Nyansert:** Verden er sjelden svart-hvitt – vis at du ser kompleksiteten`,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'nat10-6-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Viktigste poeng

1. **Forskning er systematisk arbeid for å skape ny kunnskap**
   - Følger en prosess: Spørsmål → Hypotese → Forsøk → Analyse → Konklusjon
   - Bygger på bevis og er gjentagbar

2. **Grunnforskning vs. anvendt forskning**
   - Grunnforskning: Forstå hvordan verden fungerer
   - Anvendt forskning: Løse konkrete problemer
   - Jobber sammen for å skape fremgang

3. **Innovasjon er når forskning blir til nye løsninger**
   - Forskning → Innovasjon → Samfunnsnytte
   - Eksempler: Smarttelefoner, vaksiner, solceller

4. **Dagsaktuell forskning påvirker samfunnet**
   - Klima, medisin, energi, AI, hav
   - Viktig å følge med og forstå

5. **Etikk i forskning er avgjørende**
   - Gjøre ingen skade
   - Informert samtykke
   - Personvern og ærlighet

6. **Kildekritikk er viktig**
   - Ikke all informasjon er pålitelig
   - Vær kritisk til kilder
   - Foretrekk fagfellevurderte artikler

### Neste steg

Nå som du forstår forskning og innovasjon, er du klar til å:
- Utforske **seksuell og reproduktiv helse** -- pubertet, reproduksjon, prevensjon og samtykke (seksjon 7)
- Følge med på ny forskning i media og vurdere påliteligheten til informasjon
- Diskutere etiske dilemmaer i forskning og samfunn`,
    },

    // ========== EKSEMPEL: VITENSKAPELIG METODE I PRAKSIS ==========
    {
      id: 'nat10-6-5-example-metode',
      type: 'example',
      title: 'Eksempel: Den vitenskapelige metoden - Ignaz Semmelweis',
      problem: 'I 1847 oppdaget legen Ignaz Semmelweis at barselfeber (en dødelig infeksjon hos nybakte mødre) kunne reduseres drastisk ved at leger vasket hendene. Forklar hvordan han brukte den vitenskapelige metoden.',
      solution: `**Løsning: Semmelweis og den vitenskapelige metoden**

**1. Observasjon og spørsmål:**
- Semmelweis observerte at dødeligheten var mye høyere på avdelingen der leger arbeidet (10%) enn på avdelingen der jordmødre arbeidet (4%)
- Spørsmål: Hvorfor dør flere kvinner på legeavdelingen?

**2. Hypotese:**
- Legene kom ofte direkte fra obduksjonsrom (likskjæring) til fødselssalen
- Hypotese: "Leger overfører 'likpartikler' fra obduksjonsrommet til fødende kvinner, som forårsaker barselfeber."

**3. Eksperiment:**
- Semmelweis innførte obligatorisk håndvask med kloroppløsning for alle leger før de gikk til fødeavdelingen
- Han sammenlignet dødeligheten før og etter innføringen

**4. Resultat:**
- Dødeligheten falt fra 10% til under 2% på legeavdelingen
- Resultatet støttet hypotesen sterkt

**5. Konklusjon:**
- Håndvask med desinfiserende middel reduserer smitte dramatisk
- Usynlige partikler på hendene kan overføre sykdom

**Tragisk vending:**
Til tross for overbevisende data ble Semmelweis avvist av det medisinske miljøet. Legene nektet å tro at de selv var årsaken til pasientenes død. Først mange år senere, da Louis Pasteur beviste at bakterier forårsaker sykdom, ble Semmelweis rehabilitert.

**Lærdom:**
- Vitenskapelig metode kan avdekke viktige sannheter
- Data og bevis bør veie tyngre enn tradisjon og meninger
- Selv gode forskere kan møte motstand fra etablerte autoriteter`,
    },

    // ========== OPPGAVE 7: GRUNNFORSKNING VS ANVENDT ==========
    {
      id: 'nat10-6-5-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-5-ex-7',
        number: '6.5.7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av disse er et eksempel på grunnforskning?',
        options: [
          {
            id: 'a',
            text: 'Studere sort materie i universet for å forstå universets struktur',
            isCorrect: true,
            feedback: 'Riktig! Grunnforskning handler om å forstå verden uten et umiddelbart praktisk mål.',
          },
          {
            id: 'b',
            text: 'Utvikle en ny vaksine mot influensa',
            isCorrect: false,
            feedback: 'Feil. Dette er anvendt forskning fordi det har et konkret praktisk mål (lage en vaksine).',
          },
          {
            id: 'c',
            text: 'Lage en mer energieffektiv solcelle',
            isCorrect: false,
            feedback: 'Feil. Dette er anvendt forskning fordi det handler om å forbedre et eksisterende produkt.',
          },
          {
            id: 'd',
            text: 'Teste en ny medisin på pasienter',
            isCorrect: false,
            feedback: 'Feil. Kliniske studier er en del av anvendt forskning med konkret medisinsk mål.',
          },
        ],
        solution: 'Grunnforskning handler om å forstå verden uten nødvendigvis å ha et umiddelbart praktisk mål. Å studere sort materie er et eksempel fordi målet er å forstå universets struktur, ikke å lage et produkt. De andre alternativene er alle eksempler på anvendt forskning med konkrete praktiske mål.',
      },
    },

    // ========== OPPGAVE 8: FAGFELLEVURDERING ==========
    {
      id: 'nat10-6-5-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-5-ex-8',
        number: '6.5.8',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er fagfellevurdering (peer review)?',
        options: [
          {
            id: 'a',
            text: 'Andre eksperter vurderer kvaliteten på forskningen før den publiseres',
            isCorrect: true,
            feedback: 'Riktig! Fagfellevurdering sikrer at forskning holder høy kvalitet ved at andre eksperter sjekker metoder, analyser og konklusjoner.',
          },
          {
            id: 'b',
            text: 'Forskeren vurderer sin egen forskning',
            isCorrect: false,
            feedback: 'Feil. Fagfellevurdering innebærer at ANDRE eksperter, ikke forskeren selv, vurderer arbeidet.',
          },
          {
            id: 'c',
            text: 'Studenter gir tilbakemelding på en oppgave',
            isCorrect: false,
            feedback: 'Feil. Fagfellevurdering er en vitenskapelig prosess utført av eksperter innenfor fagfeltet.',
          },
          {
            id: 'd',
            text: 'En avis skriver om forskningsresultater',
            isCorrect: false,
            feedback: 'Feil. Det er populærvitenskapelig formidling, ikke fagfellevurdering.',
          },
        ],
        solution: 'Fagfellevurdering (peer review) er en prosess der uavhengige eksperter innenfor det aktuelle fagfeltet gjennomgår og vurderer en vitenskapelig artikkel før den publiseres. Fagfellene sjekker om metodene er riktige, analysen er korrekt, og konklusjonene er berettigede. Denne prosessen er en av de viktigste kvalitetssikringsmekanismene i vitenskapen.',
      },
    },

    // ========== OPPGAVE 9: KILDEKRITIKK ==========
    {
      id: 'nat10-6-5-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-5-ex-9',
        number: '6.5.9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du finner to artikler om klimaendringer:\n\nKilde A: En artikkel på Forskning.no som refererer til en studie publisert i Nature, med intervjuer av tre uavhengige klimaforskere.\n\nKilde B: Et blogginnlegg av en anonym person som hevder at klimaendringer ikke er menneskeskapte, uten lenker til vitenskapelige kilder.\n\nVurder påliteligheten til begge kildene. Hvilken er mest pålitelig, og hvorfor?',
        solution: `**Vurdering av kilde A:**

**Pålitelighet: Høy**

Grunner:
1. **Forskning.no** er en anerkjent norsk nettside for forskningsformidling
2. Refererer til en studie publisert i **Nature** - et av verdens mest prestisjefylte vitenskapelige tidsskrifter
3. Studien er **fagfellevurdert** (peer reviewed)
4. **Tre uavhengige forskere** kommenterer - dette gir balanse og kvalitetssikring
5. Kilden er **transparent** om hvor informasjonen kommer fra

**Vurdering av kilde B:**

**Pålitelighet: Lav**

Grunner:
1. **Anonym** forfatter - vi vet ikke hvem som skriver
2. **Blogginnlegg** - ingen redaksjonell kvalitetskontroll
3. **Ingen vitenskapelige kilder** - påstandene er ikke dokumentert
4. Går mot det **vitenskapelige konsensus** (97% av klimaforskere er enige om menneskeskapte klimaendringer)
5. Mulige **skjulte motiver** (hvem tjener på å benekte klimaendringer?)

**Konklusjon:**

Kilde A er klart mest pålitelig fordi den:
- Bygger på fagfellevurdert forskning
- Er transparent om kilder
- Inkluderer uavhengige ekspertuttalelser
- Kommer fra en anerkjent formidlingskanal

**Viktig prinsipp:** I vitenskap er det ikke hvem som roper høyest som har rett, men hvem som har best dokumentasjon og metoder.`,
      },
    },

    // ========== OPPGAVE 10: INNOVASJON I NORGE ==========
    {
      id: 'nat10-6-5-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-5-ex-10',
        number: '6.5.10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Norge er kjent for innovasjon innen fornybar energi og havbruk. Velg ett av disse områdene og forklar:\na) Hvilken forskning ligger bak innovasjonen?\nb) Hva er innovasjonen (produktet/løsningen)?\nc) Hvordan gagner innovasjonen samfunnet?',
        solution: `**Eksempelsvar: Flytende havvind (fornybar energi)**

**a) Forskning bak innovasjonen:**
- Grunnforskning på vindkraft og aerodynamikk (1970-tallet)
- Forskning på flytestrukturer for offshore plattformer (norsk oljeindustri)
- Forskning på materialer som tåler salt sjøvann og bølger
- Studier av vindforhold til havs (mer vind enn på land)
- Utvikling av forankringssystemer som holder turbinene på plass

**b) Innovasjonen:**
- **Hywind** - verdens første flytende vindturbin (utviklet av norske Equinor)
- Turbinen flyter på havet i stedet for å stå fast på havbunnen
- Kan plasseres på dypt vann (over 60 meter) der vanlige turbiner ikke kan stå
- Hywind Scotland (2017) var verdens første flytende vindpark

**c) Samfunnsnytte:**
- **Mer fornybar energi:** Flytende vindturbiner åpner enorme havområder for vindkraft
- **Reduserte CO₂-utslipp:** Erstatter fossil energi
- **Arbeidsplasser:** Ny industri som kan erstatte olje- og gassindustrien
- **Eksport:** Norge kan eksportere teknologien til andre land
- **Bruke norsk kompetanse:** Bygger på erfaringen fra offshore olje og gass
- **Mindre visuell forurensning:** Turbinene kan plasseres langt til havs, usynlige fra land

**Lærdom:** Norges erfaring fra oljeindustrien kan omsettes til fornybar energi - et godt eksempel på hvordan forskning og kompetanse fra ett felt kan overføres til et annet.`,
      },
    },

    // ========== OPPGAVE 11: FORMULERE HYPOTESE ==========
    {
      id: 'nat10-6-5-ex-11-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-5-ex-11',
        number: '6.5.11',
        type: 'classic',
        difficulty: 'lett',
        task: 'Formuler en hypotese for hvert av disse forskningsspørsmålene. Husk at en hypotese skal være testbar og spesifikk.\n\na) "Påvirker mengden søvn elevenes prøveresultater?"\nb) "Vokser planter raskere med eller uten musikk?"\nc) "Er det renere luft i parken enn langs hovedveien?"',
        solution: `**a) Søvn og prøveresultater:**

Hypotese: "Elever som sover minst 8 timer natten før en prøve, scorer i gjennomsnitt høyere enn elever som sover mindre enn 6 timer."

- **Testbar:** Ja, vi kan måle søvn og prøveresultater
- **Spesifikk:** Ja, den angir konkrete timer og hva som måles

**b) Planter og musikk:**

Hypotese: "Planter som eksponeres for klassisk musikk 2 timer per dag i 4 uker, vokser gjennomsnittlig høyere enn planter som vokser i stillhet."

- **Testbar:** Ja, vi kan måle plantehøyde
- **Spesifikk:** Ja, den angir type musikk, varighet og målemetode

**c) Luftkvalitet:**

Hypotese: "Konsentrasjonen av NO₂ (nitrogendioksid) er minst 50% lavere i parken enn ved hovedveien målt på samme tidspunkt."

- **Testbar:** Ja, vi kan måle NO₂ begge steder
- **Spesifikk:** Ja, den angir hvilket stoff, hvor mye, og sammenligningssted

**Tips for gode hypoteser:**
- Vær spesifikk om hva du skal måle
- Angi retningen (høyere, lavere, raskere, etc.)
- Gjør det mulig å motbevise hypotesen (falsifiserbar)`,
      },
    },

    // ========== OPPGAVE 12: KONTROLLGRUPPE ==========
    {
      id: 'nat10-6-5-ex-12a-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-5-ex-12a',
        number: '6.5.12a',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor er det viktig å ha en kontrollgruppe i et forsøk?',
        options: [
          {
            id: 'a',
            text: 'For å ha noe å sammenligne resultatene med og sikre at endringene skyldes det vi tester',
            isCorrect: true,
            feedback: 'Riktig! Kontrollgruppen viser hva som ville skjedd uten behandlingen/endringen, slik at vi kan isolere effekten av det vi tester.',
          },
          {
            id: 'b',
            text: 'For å ha flere forsøkspersoner i studien',
            isCorrect: false,
            feedback: 'Feil. Kontrollgruppen handler ikke om antall, men om å ha en referanse å sammenligne med.',
          },
          {
            id: 'c',
            text: 'For å spare tid og penger på forsøket',
            isCorrect: false,
            feedback: 'Feil. Kontrollgruppen er faktisk en ekstra kostnad, men den er nødvendig for pålitelige resultater.',
          },
          {
            id: 'd',
            text: 'Kontrollgruppe er egentlig ikke nødvendig i gode forsøk',
            isCorrect: false,
            feedback: 'Feil. Kontrollgruppe er essensielt i de fleste forsøk for å kunne trekke gyldige konklusjoner.',
          },
        ],
        solution: `En **kontrollgruppe** er en gruppe som ikke mottar den behandlingen eller endringen du tester. Den fungerer som en referanse å sammenligne med.

**Eksempel:**
Du vil teste om en ny gjødsel gir bedre plantevekst.
- **Forsøksgruppe:** 10 planter med ny gjødsel
- **Kontrollgruppe:** 10 planter uten gjødsel (eller med vanlig gjødsel)

**Uten kontrollgruppe** vet du ikke om plantene vokste bra på grunn av gjødselen, eller på grunn av godt vær, god jord eller andre faktorer.

**Med kontrollgruppe** kan du sammenligne: Hvis forsøksgruppen vokser bedre enn kontrollgruppen, og alt annet er likt, kan du konkludere med at gjødselen er årsaken.`,
      },
    },

    // ========== OPPGAVE 13: KORRELASJON VS ÅRSAK ==========
    {
      id: 'nat10-6-5-ex-13-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-5-ex-13',
        number: '6.5.13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En studie viser at barn som spiser frokost ofte, har bedre skoleresultater enn barn som hopper over frokost. Noen aviser skriver: "Frokost gjør barn smartere!"\n\na) Er denne konklusjonen korrekt? Forklar forskjellen mellom korrelasjon og årsak-virkning.\nb) Gi minst to alternative forklaringer på sammenhengen.',
        solution: `**a) Er konklusjonen korrekt?**

**Nei, konklusjonen er ikke nødvendigvis korrekt.** Studien viser en **korrelasjon** (sammenheng) mellom frokost og skoleresultater, men det betyr ikke automatisk at frokost **forårsaker** bedre resultater.

**Korrelasjon vs. årsak-virkning:**
- **Korrelasjon:** To ting skjer sammen (frokost og gode resultater henger sammen)
- **Årsak-virkning (kausalitet):** Det ene forårsaker det andre (frokost fører til bedre resultater)

Korrelasjon beviser IKKE årsak-virkning! Det kan finnes andre forklaringer.

**b) Alternative forklaringer:**

1. **Familieforhold:**
   - Familier som prioriterer frokost, kan også prioritere lekser, søvn og skole generelt
   - Det er kanskje de gode hjemmeforholdene (ikke frokosten alene) som gir bedre resultater

2. **Økonomisk bakgrunn:**
   - Familier med god økonomi har råd til frokost og andre ressurser
   - De kan også ha råd til ekstraundervisning, bøker og rolige studieforhold
   - Økonomi kan være den egentlige årsaken til bedre skoleresultater

3. **Søvnmønster:**
   - Barn som spiser frokost, står kanskje opp tidsnok til å få god søvn
   - God søvn er viktig for læring og konsentrasjon
   - Søvn kan være den egentlige årsaken

4. **Selvseleksjon:**
   - Kanskje barn som allerede er motiverte for skolen, også er mer bevisste på å spise frokost
   - Motivasjonen (ikke frokosten) driver begge deler

**Lærdom:**
Vær forsiktig med å trekke årsak-virkning-konklusjoner fra korrelasjonsstudier. Aviser forenkler ofte forskning og presenterer korrelasjon som årsak. Kritisk tenkning er viktig!`,
      },
    },

    // ========== OPPGAVE 14: VURDERE FORSKNINGSRESULTATER ==========
    {
      id: 'nat10-6-5-ex-14a-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-5-ex-14a',
        number: '6.5.14a',
        type: 'classic',
        difficulty: 'medium',
        task: 'En forsker publiserer en studie som viser at en ny type solcelle er 5% mer effektiv enn eksisterende solceller. Studien er publisert i et fagfellevurdert tidsskrift, men er finansiert av selskapet som lager solcellene.\n\na) Hva er positivt med denne studien?\nb) Hva bør du være kritisk til?\nc) Hva kan gjøres for å øke tilliten til resultatene?',
        solution: `**a) Positivt med studien:**

1. **Fagfellevurdert:** Andre eksperter har vurdert metoder og resultater
2. **Publisert:** Transparent og tilgjengelig for alle å lese
3. **Konkret resultat:** 5% forbedring er et målbart og spesifikt resultat
4. **Potensiell nytte:** Bedre solceller kan bidra til mer fornybar energi

**b) Hva bør du være kritisk til:**

1. **Interessekonflikt:** Selskapet som lager solcellene finansierte studien
   - De har økonomisk interesse av positive resultater
   - Kan ha påvirket designet av studien (bevisst eller ubevisst)

2. **Testforhold:**
   - Ble solcellene testet under ideelle laboratorieforhold?
   - Fungerer de like bra utendørs over tid?

3. **Utvalg og statistikk:**
   - Hvor mange solceller ble testet?
   - Er 5% forbedring statistisk signifikant?

4. **Langtidshold:**
   - Beholder solcellene effektiviteten over mange år?
   - Er de like holdbare som eksisterende solceller?

**c) Hva kan øke tilliten:**

1. **Uavhengig replikering:** La et uavhengig laboratorium gjenta forsøket
2. **Langtidstesting:** Test solcellene over minst ett år under reelle forhold
3. **Tredjeparts finansiering:** Få støtte fra en uavhengig organisasjon
4. **Sammenligning:** Test mot solceller fra flere produsenter
5. **Åpne data:** Gjør all rå-data tilgjengelig for andre forskere

**Konklusjon:** Studien gir lovende resultater, men interessekonflikten gjør det ekstra viktig med uavhengig verifisering.`,
      },
    },

    // ========== OPPGAVE 15: FORSKNING OG BÆREKRAFT ==========
    {
      id: 'nat10-6-5-ex-15-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-5-ex-15',
        number: '6.5.15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'FNs bærekraftsmål nr. 7 handler om "ren energi til alle". Beskriv hvordan forskning og innovasjon kan bidra til å nå dette målet. Gi tre konkrete eksempler på forskning som er relevant.',
        solution: `**FNs bærekraftsmål 7: Ren energi til alle**

Forskning og innovasjon er avgjørende for å gjøre ren energi tilgjengelig, pålitelig og rimelig for alle mennesker i verden.

**Eksempel 1: Billige solceller for utviklingsland**

**Forskning:** Perovskitt-solceller
- Tradisjonelle silisium-solceller er dyre å produsere
- Forskere utvikler perovskitt-solceller som er billigere å lage
- Kan trykkes på tynne ark, nesten som aviser
- Potensialt 50-80% billigere enn dagens solceller

**Innovasjon:** Bærbare solcellepaneler for off-grid områder
- 1,2 milliarder mennesker mangler tilgang til elektrisitet
- Billige solceller + batterier kan gi strøm til lys og mobillading
- Erstatter dyre og forurensende dieselgeneratorer

**Samfunnsnytte:** Barn kan gjøre lekser etter mørket. Helsestasjoner får kjølekjeder for vaksiner. Mobilbanking gir tilgang til økonomi.

**Eksempel 2: Batterilagring av fornybar energi**

**Forskning:** Neste generasjons batterier
- Litium-ion-batterier er dyre og krever sjeldne mineraler
- Forskere utvikler natrium-ion-batterier (natrium er billig og vanlig)
- Forskning på jernluft-batterier og andre alternativer
- Mål: Batterier som er billige, sikre og miljøvennlige

**Innovasjon:** Storskalanettverksbatterier
- Lagrer solenergi om dagen for bruk om natten
- Utjevner forskjeller mellom produksjon og forbruk
- Gjør det mulig å ha 100% fornybar energiforsyning

**Samfunnsnytte:** Stabil strømforsyning selv når solen ikke skinner eller vinden ikke blåser.

**Eksempel 3: Havenergi**

**Forskning:** Bølgekraft og tidevannsenergi
- Havet inneholder enorme mengder energi i bølger og tidevann
- Forskere utvikler teknologi for å utnytte denne energien
- Norsk forskning på bølgekraftverk og tidevannsanlegg

**Innovasjon:** Flytende vindmøller + bølgekraft-kombinasjoner
- Kombinerer vindkraft og bølgekraft på samme plattform
- Dobbelt så mye energi fra samme areal
- Utnyttes i kystområder over hele verden

**Samfunnsnytte:** Kystnasjoner kan produsere store mengder ren energi fra havet.

**Konklusjon:**
Forskning gir oss ny kunnskap og teknologi, innovasjon omsetter dette til produkter og løsninger, og sammen gjør de det mulig å nå FNs bærekraftsmål om ren energi til alle.`,
      },
    },

    // ========== OPPGAVE 16: FORSKNING I HVERDAGEN ==========
    {
      id: 'nat10-6-5-ex-16-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-6-5-ex-16',
        number: '6.5.16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Kunstig intelligens (AI) brukes stadig mer i samfunnet - i helse, utdanning og arbeidsliv. Drøft fordeler og ulemper ved bruk av AI i skolen. Ta stilling til om AI bør brukes mer eller mindre i undervisningen, og begrunn svaret ditt.',
        solution: `**Drøfting: AI i skolen**

**Fordeler:**

1. **Tilpasset undervisning:**
   - AI kan tilpasse oppgaver til hver elevs nivå
   - Elever som sliter kan få enklere oppgaver, flinke elever kan utfordres mer
   - Umiddelbar tilbakemelding på oppgaver

2. **Effektiv læring:**
   - AI kan identifisere kunnskapshull hos eleven
   - Foreslå spesifikke emner å øve mer på
   - Tilgjengelig 24/7 (ikke bare i skoletiden)

3. **Avlaste læreren:**
   - AI kan rette enkle oppgaver automatisk
   - Læreren får mer tid til veiledning og personlig kontakt

4. **Nye muligheter:**
   - Oversettelse i sanntid for flerspråklige elever
   - Visualisering av komplekse begreper
   - Tilgang til enorme kunnskapsbaser

**Ulemper:**

1. **Juks og avhengighet:**
   - Elever kan la AI gjøre oppgavene for seg
   - Risiko for at elever ikke lærer å tenke selv
   - Vanskelig å skille elevens eget arbeid fra AI-generert

2. **Personvern:**
   - AI samler data om elevens prestasjoner og atferd
   - Hvem har tilgang til disse dataene?
   - Lagres de trygt?

3. **Ulikhet:**
   - Ikke alle skoler har like god tilgang til teknologi
   - Kan forsterke forskjeller mellom rike og fattige skoler

4. **Feil og skjevheter:**
   - AI kan gi feil svar og presentere dem overbevisende
   - AI kan ha skjevheter fra treningsdata
   - Kritisk tenkning hos eleven er avgjørende

5. **Sosiale ferdigheter:**
   - For mye skjermbruk kan redusere sosial interaksjon
   - Samarbeid og diskusjon med medelever er viktig

**Min mening:**

AI bør brukes som et **verktøy** i skolen, men ikke erstatte læreren eller elevens egen tenkning.

**Konkret forslag:**
- Bruk AI som hjelp ved oppgaveløsning, men krev at eleven forklarer løsningen
- Lær elever kildekritikk: AI kan ta feil, og man må sjekke svarene
- Forbud mot AI på prøver og eksamener (test hva eleven selv kan)
- Åpne diskusjoner om etikk og AI i samfunnet

AI er et kraftfullt verktøy som kan forbedre undervisningen, men det må brukes med bevissthet og klare regler.`,
      },
    },
  ],
  exercises: [], // Oppgavene er embedded i content
};
