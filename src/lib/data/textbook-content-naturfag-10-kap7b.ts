/**
 * Tekstbok kapitler for Naturfag 10 - Seksjon 7b: Seksuell og reproduktiv helse (7.4-7.5)
 *
 * LK20-kompetansemål: drøfte problemstillinger knyttet til seksuell og reproduktiv helse
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 7.4: Prevensjon og seksuelt overførbare infeksjoner
// ============================================================================

export const CHAPTER_NAT10_7_4: TextbookChapter = {
  id: 'naturfag-10-7-4',
  courseId: 'naturfag-10',
  chapterNumber: '7.4',
  title: 'Prevensjon og seksuelt overførbare infeksjoner',
  description: 'Lær om ulike prevensjonsmetoder, hvordan de virker, og om seksuelt overførbare infeksjoner (SOI) – hvordan de smitter, symptomer og behandling.',
  estimatedMinutes: 50,
  prerequisites: ['naturfag-10-7-2'],
  competenceGoals: [
    'kjenne til ulike prevensjonsmetoder og hvordan de virker',
    'forstå hva seksuelt overførbare infeksjoner (SOI) er og hvordan de smitter',
    'vite hvordan man kan beskytte seg mot uønsket graviditet og SOI',
    'kjenne til helsetjenester for ungdom knyttet til seksuell helse',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'nat10-7-4-intro',
      type: 'text',
      content: `## Prevensjon og seksuelt overførbare infeksjoner

Kunnskap om prevensjon og seksuelt overførbare infeksjoner (SOI) er viktig for å ta gode valg for egen helse. Prevensjon handler om å beskytte seg mot uønsket graviditet, mens kunnskap om SOI handler om å beskytte seg mot infeksjoner som kan smitte ved seksuell kontakt. Noen unge velger å vente med seksuell aktivitet, og det er også et helt gyldig valg.

I Norge har alle under 20 år rett til **gratis prevensjon** fra helsestasjon for ungdom eller fastlege. Det er et lavterskeltilbud som betyr at du ikke trenger henvisning, og taushetsplikten gjelder.

I dette kapitlet lærer du:
- Hvorfor prevensjon er viktig
- Ulike prevensjonsmetoder og hvordan de virker
- Hva dobbel beskyttelse betyr
- Hva seksuelt overførbare infeksjoner (SOI) er
- De vanligste SOI-ene i Norge
- Hvordan du kan beskytte deg
- Hvor du kan få hjelp og rådgivning`,
    },

    // ========================================================================
    // BLOKK 1: PREVENSJON
    // ========================================================================

    // ========== DEFINISJON: PREVENSJON ==========
    {
      id: 'nat10-7-4-def-prevensjon',
      type: 'definition',
      title: 'Prevensjon',
      content: 'Prevensjon er midler og metoder som brukes for å forhindre graviditet. Prevensjonsmetoder virker enten ved å hindre eggløsning, hindre sædceller i å nå egget, eller hindre et befruktet egg i å feste seg i livmoren. Prevensjonsmetoder deles inn i hormonelle metoder, barrieremetoder og langtidsvirkende metoder.',
    },

    // ========== DEFINISJON: BARRIEREMETODE ==========
    {
      id: 'nat10-7-4-def-barrieremetode',
      type: 'definition',
      title: 'Barrieremetode',
      content: 'En barrieremetode er en prevensjonsmetode som fysisk hindrer sædceller i å nå egget. Kondomet er den vanligste barrieremetoden. Barrieremetoder skiller seg fra hormonelle metoder ved at de ikke påvirker kroppens hormonsystem.',
    },

    // ========== DEFINISJON: HORMONELL PREVENSJON ==========
    {
      id: 'nat10-7-4-def-hormonell-prevensjon',
      type: 'definition',
      title: 'Hormonell prevensjon',
      content: 'Hormonell prevensjon er prevensjonsmetoder som bruker syntetiske (menneskeskapte) hormoner for å forhindre graviditet. De vanligste hormonene er østrogen og gestagen (syntetisk progesteron). Hormonell prevensjon virker hovedsakelig ved å hindre eggløsning, gjøre livmorslimhinnen tynnere og gjøre slimet i livmorhalsen tykkere slik at sædceller ikke kommer gjennom.',
    },

    // ========== HVORFOR BRUKE PREVENSJON? ==========
    {
      id: 'nat10-7-4-hvorfor-prevensjon',
      type: 'text',
      content: `## Hvorfor bruke prevensjon?

Prevensjon handler om å ta ansvar for egen kropp og helse. Det finnes flere gode grunner til å bruke prevensjon:

**Forebygge uønsket graviditet**
- Et svangerskap krever at man er klar for å bli forelder
- Det er viktig å kunne planlegge når man ønsker å få barn
- Ungdom som får barn svært tidlig, kan oppleve utfordringer med utdanning og økonomi

**Beskytte mot seksuelt overførbare infeksjoner**
- Kondom er den eneste prevensjonsmetoden som også beskytter mot SOI
- Mange SOI-er gir ingen symptomer i starten, men kan likevel gjøre skade

**Ta kontroll over egen kropp**
- Rett til å bestemme over egen kropp er en grunnleggende rettighet
- God kunnskap om prevensjon gjør det lettere å ta informerte valg
- Begge parter i et forhold har ansvar for å bruke prevensjon`,
    },

    // ========== PREVENSJONSMETODER ==========
    {
      id: 'nat10-7-4-metoder',
      type: 'text',
      content: `## Prevensjonsmetoder

Det finnes mange ulike prevensjonsmetoder. De kan deles inn i tre hovedgrupper:

### 1. Barrieremetoder

**Kondom (til penis)**
- En tynn gummihylse som rulles over penis før samleie
- **Effektivitet:** 98 % ved korrekt bruk (85 % ved typisk bruk)
- **Fordeler:** Den eneste metoden som beskytter mot både graviditet og SOI
- **Viktig:** Bruk nytt kondom hver gang, sjekk utløpsdato, oppbevar kjølig og tørt
- Fås kjøpt uten resept på apotek, butikker og bensinstasjoner
- Gratis på mange helsestasjoner for ungdom

**Femidom (kondom til vagina)**
- En tynn pose som settes inn i skjeden før samleie
- Beskytter også mot SOI, men er mindre vanlig i Norge

### 2. Hormonelle metoder

**P-piller (kombinasjonspiller)**
- Tabletter som inneholder østrogen og gestagen
- Tas daglig i 21 eller 28 dager
- **Effektivitet:** Over 99 % ved korrekt bruk
- **Slik virker det:** Hindrer eggløsning, gjør livmorslimhinnen tynnere og slimet i livmorhalsen tykkere
- **Mulige bivirkninger:** Hodepine, kvalme, humørsvingninger, blødningsforstyrrelser
- Krever resept fra lege eller helsesykepleier

**Minipiller (gestagenpiller)**
- Inneholder bare gestagen (ikke østrogen)
- Tas daglig uten pause
- Egner seg for dem som ikke tåler østrogen

**P-stav (hormonimplantat)**
- En liten plastpinne som settes inn under huden på overarmen
- Avgir gestagen i **3 år**
- **Effektivitet:** Over 99 %
- Settes inn og fjernes av lege eller jordmor
- Du trenger ikke huske å ta noe daglig

**Hormonspiral**
- En liten T-formet gjenstand som settes inn i livmoren
- Avgir gestagen lokalt
- Virker i **3–5 år** avhengig av type
- **Effektivitet:** Over 99 %
- Settes inn av lege eller jordmor

**P-sprøyte (hormoninjeksjon)**
- En sprøyte med gestagen som settes hver 12. uke
- **Effektivitet:** 94–99 % avhengig av hvor nøyaktig man er med tidspunktet
- Kan påvirke beintettheten ved langvarig bruk

**P-ring (vaginalring)**
- En myk plastring som settes inn i skjeden
- Avgir østrogen og gestagen i 3 uker, deretter 1 uke pause
- **Effektivitet:** Over 99 % ved korrekt bruk

**P-plaster**
- Et plaster som festes på huden og avgir hormoner
- Byttes ukentlig i 3 uker, deretter 1 uke pause

### 3. Ikke-hormonelle langtidsmetoder

**Kobberspiral**
- En T-formet gjenstand med kobbertråd som settes inn i livmoren
- Kobberet påvirker sædcellenes bevegelse og livmorslimhinnen
- **Ingen hormoner** – egner seg for dem som ikke ønsker hormonell prevensjon
- Virker i **5–10 år**
- **Effektivitet:** Over 99 %

### Nødprevensjon

**Angrepille (nødprevensjon)**
- Tas etter ubeskyttet samleie eller prevensjonssvikt
- Må tas så raskt som mulig – helst innen 12 timer, senest innen 72 timer (3 dager)
- Virker ved å utsette eller hemme eggløsning
- Er **ikke** en vanlig prevensjonsmetode – kun til nødbruk
- Fås uten resept på apotek (gratis for jenter under 20 år med resept)
- **Kobber-angrespiral:** Kan settes inn inntil 5 dager etter ubeskyttet samleie og er den mest effektive formen for nødprevensjon`,
    },

    // ========== EKSEMPEL: SAMMENLIGNING AV PREVENSJONSMETODER ==========
    {
      id: 'nat10-7-4-example-sammenligning',
      type: 'example',
      title: 'Sammenligning av prevensjonsmetoder',
      problem: 'Sammenlign de vanligste prevensjonsmetodene med tanke på effektivitet, varighet og beskyttelse mot SOI.',
      solution: `**Sammenligning:**

| Metode | Effektivitet | Varighet | Beskytter mot SOI? | Hormoner? |
|--------|-------------|----------|-------------------|-----------|
| **Kondom** | 98 % | Engangsbruk | Ja | Nei |
| **P-piller** | >99 % | Daglig | Nei | Ja |
| **P-stav** | >99 % | 3 år | Nei | Ja |
| **Hormonspiral** | >99 % | 3–5 år | Nei | Ja |
| **Kobberspiral** | >99 % | 5–10 år | Nei | Nei |
| **P-sprøyte** | 94–99 % | 12 uker | Nei | Ja |
| **Angrepille** | 85–95 % | Nødbruk | Nei | Ja |

**Viktig å merke seg:**
- Kondom er den **eneste** metoden som beskytter mot SOI
- Langtidsmetoder (spiral, p-stav) er mest effektive fordi de ikke avhenger av at du husker å ta noe daglig
- Ingen prevensjonsmetode gir 100 % sikkerhet
- Valg av metode avhenger av individuelle behov, helse og livssituasjon`,
    },

    // ========== DOBBEL BESKYTTELSE ==========
    {
      id: 'nat10-7-4-dobbel-beskyttelse',
      type: 'text',
      content: `## Dobbel beskyttelse

**Dobbel beskyttelse** betyr å bruke to prevensjonsmetoder samtidig – vanligvis en hormonell metode (som p-piller) og kondom.

### Hvorfor dobbel beskyttelse?

- Hormonelle metoder er svært effektive mot graviditet, men beskytter **ikke** mot SOI
- Kondom beskytter mot SOI, men er alene noe mindre effektivt mot graviditet
- Ved å kombinere de to får du god beskyttelse mot **både** graviditet og SOI

### Når er dobbel beskyttelse spesielt viktig?

- I nye forhold der man ikke har testet seg
- Når partneren har flere seksualpartnere
- Når man ikke kjenner partnerens SOI-status
- Generelt anbefalt for ungdom`,
    },

    // ========== DEFINISJON: DOBBEL BESKYTTELSE ==========
    {
      id: 'nat10-7-4-def-dobbel-beskyttelse',
      type: 'definition',
      title: 'Dobbel beskyttelse',
      content: 'Dobbel beskyttelse betyr å bruke kondom i tillegg til en annen prevensjonsmetode (som p-piller, hormonspiral eller p-stav). Kondomet beskytter mot seksuelt overførbare infeksjoner, mens den andre metoden gir ekstra sikkerhet mot graviditet.',
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE ==========
    {
      id: 'nat10-7-4-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-4-ex-1',
        number: '7.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken prevensjonsmetode er den eneste som beskytter mot både graviditet og seksuelt overførbare infeksjoner?',
        options: ['P-piller', 'Kondom', 'Hormonspiral', 'Kobberspiral'],
        answer: 1,
        solution: `**Riktig svar: Kondom**

**Forklaring:**
Kondomet er en barrieremetode som fysisk hindrer kontakt mellom slimhinner og kroppsvæsker. Det er den eneste prevensjonsmetoden som beskytter mot både graviditet og seksuelt overførbare infeksjoner. P-piller, hormonspiral og kobberspiral gir god beskyttelse mot graviditet, men ingen beskyttelse mot SOI.`,
      },
    },

    // ========== OPPGAVE 2: MULTIPLE CHOICE ==========
    {
      id: 'nat10-7-4-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-4-ex-2',
        number: '7.4.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr "dobbel beskyttelse"?',
        options: [
          'Å bruke to kondomer oppå hverandre',
          'Å bruke kondom sammen med en hormonell prevensjonsmetode',
          'Å ta dobbel dose p-piller',
          'Å bruke angrepille i tillegg til vanlig prevensjon',
        ],
        answer: 1,
        solution: `**Riktig svar: Å bruke kondom sammen med en hormonell prevensjonsmetode**

**Forklaring:**
Dobbel beskyttelse betyr å kombinere kondom med en annen prevensjonsmetode, for eksempel p-piller eller hormonspiral. Kondomet beskytter mot SOI, mens den hormonelle metoden gir ekstra sikkerhet mot graviditet. Å bruke to kondomer oppå hverandre frarådes fordi friksjonen kan føre til at kondomene ryker.`,
      },
    },

    // ========== OPPGAVE 3: KLASSISK ==========
    {
      id: 'nat10-7-4-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-4-ex-3',
        number: '7.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom hormonelle prevensjonsmetoder og barrieremetoder. Gi minst to eksempler på hver type.',
        solution: `**Eksempelsvar:**

**Barrieremetoder** skaper en fysisk hindring mellom sædceller og egg. De påvirker ikke kroppens hormonsystem.
- Eksempler: kondom og femidom
- Kondomet er en tynn gummihylse som fanger opp sædcellene
- Fordelen er at de også beskytter mot SOI

**Hormonelle metoder** bruker syntetiske hormoner (østrogen og/eller gestagen) for å forhindre graviditet. De virker ved å:
- Hindre eggløsning
- Gjøre livmorslimhinnen tynnere
- Gjøre slimet i livmorhalsen tykkere

- Eksempler: p-piller, p-stav, hormonspiral, p-sprøyte, p-ring og p-plaster
- Fordelene er høy effektivitet og at man ikke trenger å tenke på det i øyeblikket
- Ulempen er at de ikke beskytter mot SOI, og at noen kan oppleve bivirkninger`,
      },
    },

    // ========== HVOR FÅ HJELP ==========
    {
      id: 'nat10-7-4-hjelp-prevensjon',
      type: 'text',
      content: `## Hvor kan du få hjelp med prevensjon?

### Helsestasjon for ungdom
- Finnes i de fleste kommuner
- Gratis, uten timebestilling
- Kan gi råd om prevensjon, skrive ut resept og dele ut kondomer
- Helsesykepleier og lege har taushetsplikt

### Fastlege
- Kan skrive ut resept og gi råd om prevensjon
- Dekkes av frikort-ordningen

### Gratis prevensjon for unge
- I Norge har jenter og kvinner under 20 år rett til **gratis hormonell prevensjon** (p-piller, p-ring, p-plaster, p-stav, hormonspiral og p-sprøyte)
- Jenter 16–19 år får gratis prevensjon ved å vise legitimasjon på apotek med resept
- Angrepille er gratis for jenter under 20 år med resept
- Kondomer deles ut gratis på mange helsestasjoner for ungdom

### Apotek
- Kondomer kan kjøpes uten resept
- Angrepille selges uten resept (aldersgrense 16 år)`,
    },

    // ========================================================================
    // BLOKK 2: SEKSUELT OVERFØRBARE INFEKSJONER (SOI)
    // ========================================================================

    // ========== DEFINISJON: SOI ==========
    {
      id: 'nat10-7-4-def-soi',
      type: 'definition',
      title: 'Seksuelt overførbare infeksjoner (SOI)',
      content: 'Seksuelt overførbare infeksjoner (SOI) er infeksjoner som smitter fra person til person ved seksuell kontakt. De kan skyldes bakterier, virus eller parasitter. Noen SOI-er gir tydelige symptomer, mens andre kan være symptomfrie i lang tid. Ubehandlet kan SOI føre til alvorlige helseproblemer, inkludert infertilitet (ufrivillighet barnløshet). SOI kalles også kjønnssykdommer eller seksuelt overførbare sykdommer.',
    },

    // ========== HVORDAN SMITTER SOI? ==========
    {
      id: 'nat10-7-4-soi-smitte',
      type: 'text',
      content: `## Seksuelt overførbare infeksjoner (SOI)

### Hva er SOI?

Seksuelt overførbare infeksjoner er infeksjoner som smitter ved seksuell kontakt. De kan skyldes:
- **Bakterier** (f.eks. klamydia, gonoré, syfilis)
- **Virus** (f.eks. HPV, herpes, HIV)
- **Parasitter** (f.eks. filatlus, skabb)

### Hvordan smitter SOI?

SOI smitter gjennom kontakt mellom slimhinner og/eller kroppsvæsker:
- **Vaginalt samleie** (penis i skjede)
- **Analt samleie** (penis i endetarm)
- **Oralsex** (munn mot kjønnsorgan)
- **Direkte hudkontakt** med infisert område (gjelder noen SOI-er som herpes og HPV)

SOI smitter **ikke** gjennom:
- Klemmer, håndhilsing eller kinn-kyss
- Å dele toalett, dusj eller svømmebasseng
- Å dele klær, håndklær eller bestikk (med unntak av filatlus)

### Viktig å vite

- Mange SOI-er gir **ingen symptomer** i starten – man kan være smittet uten å vite det
- Man kan smitte andre selv om man ikke har symptomer
- De fleste SOI-er kan behandles eller kureres – jo tidligere, desto bedre
- Ubehandlede SOI-er kan føre til alvorlige komplikasjoner som infertilitet
- Det er ingen skam å bli smittet – det kan skje alle som er seksuelt aktive`,
    },

    // ========== DE VANLIGSTE SOI-ENE ==========
    {
      id: 'nat10-7-4-soi-oversikt',
      type: 'text',
      content: `## De vanligste seksuelt overførbare infeksjonene

### Klamydia
- **Type:** Bakterieinfeksjon (Chlamydia trachomatis)
- **Den vanligste SOI-en i Norge** – ca. 25 000 tilfeller rapporteres hvert år
- **Symptomer:** Ofte **ingen symptomer** (ca. 70 % av kvinner og 50 % av menn merker ingenting). Mulige symptomer er svie ved vannlating, utflod fra penis eller skjede, og smerter i nedre del av magen
- **Behandling:** Kureres enkelt med antibiotika
- **Komplikasjoner ved ubehandlet:** Kan føre til infertilitet (ufrivillig barnløshet), særlig hos kvinner, fordi infeksjonen kan skade egglederne
- **Testing:** Enkel urinprøve eller penselprøve

### Gonoré
- **Type:** Bakterieinfeksjon (Neisseria gonorrhoeae)
- **Økende problem** i Norge – antall tilfeller har økt de siste årene
- **Symptomer:** Gulaktig utflod fra penis eller skjede, svie ved vannlating. Kan også være symptomfri
- **Behandling:** Antibiotika, men **antibiotikaresistens** er et økende problem – noen stammer er vanskelige å behandle
- **Komplikasjoner:** Kan føre til infertilitet og leddbetennelse

### HPV (humant papillomavirus)
- **Type:** Virusinfeksjon – det finnes over 200 typer HPV
- **Svært vanlig** – de fleste som er seksuelt aktive blir smittet i løpet av livet
- **Symptomer:** De fleste merker ingenting. Noen typer gir **kjønnsvorter** (condylomer), andre typer kan gi **celleforandringer** som over tid kan utvikle seg til kreft
- **Behandling:** Ingen kur mot selve viruset – immunforsvaret bekjemper det oftest selv. Kjønnsvorter kan behandles
- **Vaksine:** HPV-vaksine tilbys alle i **7. klasse** gjennom barnevaksinasjonsprogrammet. Vaksinen beskytter mot de HPV-typene som oftest gir kreft og kjønnsvorter
- **Komplikasjoner:** Enkelte HPV-typer kan føre til livmorhalskreft, og sjeldnere til andre krefttyper

### Genital herpes
- **Type:** Virusinfeksjon (herpes simplex-virus, HSV-1 eller HSV-2)
- **Symptomer:** Smertefulle blemmer eller sår på kjønnsorganene eller rundt munnen. Kan komme tilbake i perioder (utbrudd)
- **Behandling:** **Ingen kur** – viruset forblir i kroppen. Antivirale legemidler kan redusere og forkorte utbrudd
- **Smitte:** Smitter lettest under utbrudd, men kan også smitte uten synlige sår

### HIV (humant immunsviktvirus)
- **Type:** Virusinfeksjon som angriper immunforsvaret
- **Symptomer:** De første ukene kan gi influensalignende symptomer. Deretter kan viruset ligge i kroppen i årevis uten symptomer. Ubehandlet svekker det immunforsvaret gradvis, noe som kan utvikle seg til AIDS
- **Behandling:** **Ingen kur**, men moderne HIV-medisin (antiretroviral behandling) gjør at de fleste med HIV lever et normalt og langt liv. Medisinen hindrer viruset i å formere seg
- **Viktig:** Personer med velbehandlet HIV og umålbart virusnivå smitter ikke videre seksuelt
- **Forebygging:** Kondom og PrEP (forebyggende medisin for personer med høy risiko)

### Syfilis
- **Type:** Bakterieinfeksjon (Treponema pallidum)
- **Symptomer:** Utvikler seg i stadier – først et smertefritt sår, deretter utslett, og i senere stadier alvorlige organskader
- **Behandling:** Kureres med antibiotika (penicillin), spesielt effektivt i tidlige stadier
- **Komplikasjoner:** Ubehandlet kan syfilis skade hjerne, hjerte og andre organer`,
    },

    // ========== EKSEMPEL: KLAMYDIA ==========
    {
      id: 'nat10-7-4-example-klamydia',
      type: 'example',
      title: 'Klamydia – den stille infeksjonen',
      problem: 'Hvorfor kalles klamydia ofte "den stille infeksjonen", og hvorfor er det viktig å teste seg?',
      solution: `**Klamydia kalles "den stille infeksjonen" fordi:**

- Ca. 70 % av smittede kvinner og 50 % av smittede menn har **ingen symptomer**
- Man kan altså bære på infeksjonen uten å vite det
- Man kan smitte andre uten å være klar over at man selv er smittet

**Hvorfor er testing viktig?**

1. **Forebygge komplikasjoner:** Ubehandlet klamydia kan føre til betennelse i egglederne hos kvinner, som kan gi arrvev og i verste fall infertilitet (ufrivillig barnløshet)
2. **Stoppe videre smitte:** Når du vet at du er smittet, kan du varsle partnere og unngå å smitte flere
3. **Enkel behandling:** Klamydia kureres med en kort antibiotikakur – jo raskere behandling, desto lavere risiko for komplikasjoner
4. **Enkel test:** Testen er bare en urinprøve – raskt og smertefritt

**Anbefaling:**
- Test deg hvis du har hatt ubeskyttet sex med en ny partner
- Test deg hvis en seksualpartner har fått påvist klamydia
- Helsestasjon for ungdom tilbyr gratis testing`,
    },

    // ========== OPPGAVE 4: MULTIPLE CHOICE ==========
    {
      id: 'nat10-7-4-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-4-ex-4',
        number: '7.4.4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av disse seksuelt overførbare infeksjonene er den vanligste i Norge?',
        options: ['Gonoré', 'HIV', 'Klamydia', 'Syfilis'],
        answer: 2,
        solution: `**Riktig svar: Klamydia**

**Forklaring:**
Klamydia er den klart vanligste seksuelt overførbare infeksjonen i Norge, med ca. 25 000 rapporterte tilfeller hvert år. Klamydia er en bakterieinfeksjon som ofte gir ingen symptomer, noe som gjør at mange ikke vet at de er smittet. Den kureres enkelt med antibiotika.`,
      },
    },

    // ========== OPPGAVE 5: MULTIPLE CHOICE ==========
    {
      id: 'nat10-7-4-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-4-ex-5',
        number: '7.4.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av følgende påstander om HPV er riktig?',
        options: [
          'HPV smitter bare gjennom blodkontakt',
          'HPV-vaksinen gis i barnevaksinasjonsprogrammet i 7. klasse',
          'HPV kureres enkelt med antibiotika',
          'HPV gir alltid synlige symptomer',
        ],
        answer: 1,
        solution: `**Riktig svar: HPV-vaksinen gis i barnevaksinasjonsprogrammet i 7. klasse**

**Forklaring:**
HPV-vaksinen tilbys alle elever i 7. klasse som en del av barnevaksinasjonsprogrammet. Vaksinen beskytter mot de HPV-typene som oftest fører til kreft og kjønnsvorter. HPV smitter ved hud- og slimhinnekontakt (ikke bare blod). HPV er et virus og kan ikke kureres med antibiotika. De fleste som er smittet med HPV merker ingenting.`,
      },
    },

    // ========== BESKYTTELSE MOT SOI ==========
    {
      id: 'nat10-7-4-beskyttelse',
      type: 'text',
      content: `## Hvordan beskytte seg mot SOI

### Kondom
- Den viktigste beskyttelsen mot SOI
- Bruk kondom ved alle former for seksuell kontakt med nye eller usikre partnere
- Bruk kondomet riktig: sjekk utløpsdato, åpne forsiktig, klem ut luft fra tuppen, rull på riktig vei

### Vaksinasjon
- HPV-vaksine beskytter mot de farligste HPV-typene
- Hepatitt B-vaksine finnes også (hepatitt B kan smitte seksuelt)

### Testing
- Test deg regelmessig hvis du er seksuelt aktiv med ulike partnere
- Test deg alltid etter ubeskyttet sex med ny partner
- Test deg hvis en partner har fått påvist en SOI
- Testing er gratis på helsestasjon for ungdom

### Kommunikasjon
- Snakk med partneren din om testing og beskyttelse
- Det kan føles vanskelig, men det er et tegn på respekt og omsorg

### Hva gjør du hvis du mistenker SOI?

1. **Ikke få panikk** – de fleste SOI-er kan behandles
2. **Ta kontakt med lege eller helsestasjon** – taushetsplikten gjelder
3. **Unngå seksuell kontakt** til du har fått svar på test og eventuelt fullført behandling
4. **Varsle seksualpartnere** slik at de også kan teste og behandle seg
5. **Fullfør behandlingen** – ta alle tabletter selv om symptomene forsvinner`,
    },

    // ========== OPPGAVE 6: KLASSISK ==========
    {
      id: 'nat10-7-4-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-4-ex-6',
        number: '7.4.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom SOI forårsaket av bakterier og SOI forårsaket av virus. Gi eksempler på hver gruppe og beskriv hva dette betyr for behandlingsmulighetene.',
        solution: `**Eksempelsvar:**

**Bakterielle SOI-er:**
- Eksempler: klamydia, gonoré og syfilis
- Bakterier er levende organismer som kan drepes med antibiotika
- Disse infeksjonene kan derfor **kureres** fullstendig med riktig behandling
- Det er viktig å behandle raskt for å unngå komplikasjoner
- Utfordring: Antibiotikaresistens, spesielt hos gonoré

**Virale SOI-er:**
- Eksempler: HPV, genital herpes og HIV
- Virus lever inne i cellene våre og kan ikke drepes med antibiotika
- Disse infeksjonene kan vanligvis **ikke kureres**, men kan behandles
- HPV: Immunforsvaret rydder oftest opp selv, men vaksine forebygger smitte
- Herpes: Antivirale legemidler kan dempe utbrudd, men viruset forblir i kroppen
- HIV: Antiretrovirale legemidler hindrer viruset i å formere seg, men kurerer ikke infeksjonen

**Hovedforskjellen:** Bakterielle SOI-er kan kureres med antibiotika, mens virale SOI-er som regel ikke kan kureres – bare behandles og kontrolleres. Derfor er forebygging (kondom, vaksine) ekstra viktig for virale SOI-er.`,
      },
    },

    // ========== OPPGAVE 7: MULTIPLE CHOICE ==========
    {
      id: 'nat10-7-4-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-4-ex-7',
        number: '7.4.7',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor er kondom spesielt viktig som prevensjon for ungdom?',
        options: [
          'Fordi kondom er billigere enn andre metoder',
          'Fordi kondom er den eneste metoden som beskytter mot både graviditet og SOI',
          'Fordi kondom ikke har noen bivirkninger',
          'Fordi kondom er den mest effektive metoden mot graviditet',
        ],
        answer: 1,
        solution: `**Riktig svar: Fordi kondom er den eneste metoden som beskytter mot både graviditet og SOI**

**Forklaring:**
Kondom er spesielt viktig for ungdom fordi det gir beskyttelse mot både uønsket graviditet og seksuelt overførbare infeksjoner. Ungdom har ofte nye seksualpartnere og vet kanskje ikke om partneren er smittet med en SOI. Selv om hormonelle metoder er mer effektive mot graviditet alene, gir de ingen beskyttelse mot SOI. Derfor anbefales dobbel beskyttelse – kondom i tillegg til en hormonell metode.`,
      },
    },

    // ========== OPPGAVE 8: KLASSISK ==========
    {
      id: 'nat10-7-4-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-4-ex-8',
        number: '7.4.8',
        type: 'classic',
        difficulty: 'medium',
        task: 'En venn forteller deg at hen har hatt ubeskyttet sex og er bekymret. Hva ville du rådet vennen din til å gjøre? Begrunn rådene dine med det du har lært i dette kapitlet.',
        solution: `**Eksempelsvar:**

Jeg ville gitt vennen min følgende råd:

**1. Ta kontakt med helsestasjon for ungdom eller fastlege**
- Det er gratis og de har taushetsplikt
- De kan gi god veiledning og ro ned bekymringene

**2. Teste seg for SOI**
- Spesielt klamydia, som er svært vanlig og ofte uten symptomer
- Noen tester kan tas med en gang, mens andre (som HIV-test) bør tas etter noen uker fordi det tar tid før antistoffer dannes

**3. Vurder nødprevensjon (angrepille)**
- Hvis det er risiko for uønsket graviditet
- Angrepille bør tas så raskt som mulig, helst innen 12 timer, senest innen 72 timer
- Fås på apotek uten resept, og er gratis med resept for jenter under 20 år

**4. Unngå ubeskyttet seksuell kontakt**
- Til man har fått testsvar og eventuelt fullført behandling
- For å unngå å smitte videre

**5. Ikke vær flau**
- Det er helt vanlig å søke hjelp
- Helsepersonell er vant til slike situasjoner
- Å oppsøke hjelp er ansvarlig og modent

**6. Lære av situasjonen**
- Skaffe seg prevensjon for fremtiden
- Ha kondomer tilgjengelig`,
      },
    },

    // ========== OPPGAVE 9: MULTIPLE CHOICE ==========
    {
      id: 'nat10-7-4-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-4-ex-9',
        number: '7.4.9',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken påstand om angrepillen er riktig?',
        options: [
          'Angrepillen bør brukes som vanlig prevensjon',
          'Angrepillen virker ved å avslutte et svangerskap',
          'Angrepillen bør tas så raskt som mulig etter ubeskyttet samleie, senest innen 72 timer',
          'Angrepillen beskytter mot seksuelt overførbare infeksjoner',
        ],
        answer: 2,
        solution: `**Riktig svar: Angrepillen bør tas så raskt som mulig etter ubeskyttet samleie, senest innen 72 timer**

**Forklaring:**
Angrepillen (nødprevensjon) virker ved å utsette eller hemme eggløsning. Den bør tas så tidlig som mulig etter ubeskyttet samleie for å ha best effekt – helst innen 12 timer, og senest innen 72 timer (3 dager). Den er ikke ment som vanlig prevensjon, den avslutter ikke et svangerskap (den forhindrer befruktning), og den beskytter ikke mot SOI.`,
      },
    },

    // ========== OPPGAVE 10: KLASSISK ==========
    {
      id: 'nat10-7-4-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-4-ex-10',
        number: '7.4.10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en oversikt over tre ulike prevensjonsmetoder som passer for ungdom. For hver metode skal du beskrive hvordan den virker, effektivitet, fordeler og ulemper.',
        solution: `**Eksempelsvar:**

**1. Kondom**
- **Hvordan det virker:** Barrieremetode – en tynn gummihylse som rulles over penis og fanger opp sædceller
- **Effektivitet:** 98 % ved korrekt bruk
- **Fordeler:** Beskytter mot både graviditet og SOI, fås uten resept, ingen bivirkninger, gratis på helsestasjon
- **Ulemper:** Må brukes riktig hver gang, kan ryke eller gli av, noe lavere effektivitet ved typisk bruk

**2. P-piller**
- **Hvordan de virker:** Inneholder hormoner (østrogen og gestagen) som hindrer eggløsning og gjør slimet i livmorhalsen tykkere
- **Effektivitet:** Over 99 % ved korrekt bruk
- **Fordeler:** Svært effektiv, kan gi lettere og mer regelmessig menstruasjon, gratis for jenter under 20 år
- **Ulemper:** Må tas daglig, beskytter ikke mot SOI, kan gi bivirkninger (hodepine, kvalme, humørsvingninger), krever resept

**3. P-stav**
- **Hvordan den virker:** En liten plastpinne settes inn under huden på overarmen og avgir gestagen som hindrer eggløsning
- **Effektivitet:** Over 99 %
- **Fordeler:** Virker i 3 år, trenger ikke huske daglig, svært effektiv, gratis for jenter under 20 år
- **Ulemper:** Må settes inn og fjernes av helsepersonell, beskytter ikke mot SOI, kan gi uregelmessig blødning`,
      },
    },

    // ========== OPPGAVE 11: MULTIPLE CHOICE ==========
    {
      id: 'nat10-7-4-ex-11-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-4-ex-11',
        number: '7.4.11',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor er antibiotikaresistens et problem i forbindelse med gonoré?',
        options: [
          'Fordi gonoré ikke kan smitte mellom mennesker',
          'Fordi gonoré er et virus som ikke kan behandles med antibiotika',
          'Fordi noen gonoré-bakterier har utviklet motstandskraft mot antibiotika og er vanskelige å behandle',
          'Fordi antibiotika alltid gir alvorlige bivirkninger',
        ],
        answer: 2,
        solution: `**Riktig svar: Fordi noen gonoré-bakterier har utviklet motstandskraft mot antibiotika og er vanskelige å behandle**

**Forklaring:**
Gonoré er en bakterieinfeksjon som tradisjonelt har vært enkel å behandle med antibiotika. Over tid har noen gonoré-bakterier utviklet antibiotikaresistens – det betyr at de vanlige antibiotikatypene ikke lenger virker. Dette er et alvorlig folkehelseproblem fordi det betyr at vi kan få gonoré-stammer som er nesten umulige å behandle. Det er derfor viktig å forebygge smitte med kondom og å fullføre eventuell behandling.`,
      },
    },

    // ========== OPPGAVE 12: KLASSISK ==========
    {
      id: 'nat10-7-4-ex-12-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-4-ex-12',
        number: '7.4.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I Norge har alle unge under 20 år rett til gratis prevensjon, og HPV-vaksine er en del av barnevaksinasjonsprogrammet. Drøft hvorfor samfunnet velger å tilby disse tjenestene gratis. Bruk argumenter knyttet til både individuell helse og folkehelse.',
        solution: `**Eksempelsvar:**

**Argumenter for gratis prevensjon til unge:**

**Individuell helse:**
- Fjerner økonomiske barrierer slik at alle unge har lik tilgang til prevensjon uavhengig av familieøkonomi
- Forebygger uønskede tenåringsgraviditeter som kan ha store konsekvenser for den enkeltes utdanning, økonomi og psykiske helse
- Gir unge mulighet til å ta ansvar for egen kropp og helse uten at prisen er et hinder

**Folkehelse:**
- Reduserer antall uønskede graviditeter og aborter i samfunnet
- Gratis tilgang øker bruken av prevensjon, som gir bedre seksuell helse i befolkningen
- Forebygging er billigere for samfunnet enn behandling av komplikasjoner

**Argumenter for HPV-vaksine i barnevaksinasjonsprogrammet:**

**Individuell helse:**
- Beskytter den enkelte mot HPV-typer som kan forårsake kreft og kjønnsvorter
- Vaksinen er mest effektiv når den gis før man blir seksuelt aktiv

**Folkehelse:**
- Når mange er vaksinert, oppnår man flokkimmunitet – viruset får færre muligheter til å spre seg
- Reduserer antall krefttilfeller i befolkningen over tid (spesielt livmorhalskreft)
- Sparer samfunnet for store kostnader til kreftbehandling

**Konklusjon:**
Gratis prevensjon og HPV-vaksine er investeringer i folkehelsen. De bygger på prinsippet om at forebygging er bedre og billigere enn behandling, og at god seksuell helse bør være tilgjengelig for alle uavhengig av økonomi.`,
        isInvestigation: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'nat10-7-4-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

### Prevensjon
- Prevensjon forhindrer uønsket graviditet
- **Barrieremetoder** (kondom) skaper fysisk hindring – den eneste metoden som også beskytter mot SOI
- **Hormonelle metoder** (p-piller, p-stav, hormonspiral, p-sprøyte) hindrer eggløsning og er svært effektive
- **Kobberspiral** er en langtidsmetode uten hormoner
- **Angrepille** er nødprevensjon som bør tas så raskt som mulig etter ubeskyttet sex
- **Dobbel beskyttelse** = kondom + hormonell metode gir best beskyttelse mot både graviditet og SOI
- I Norge er hormonell prevensjon gratis for jenter og kvinner under 20 år

### Seksuelt overførbare infeksjoner (SOI)
- SOI smitter ved seksuell kontakt gjennom slimhinner og kroppsvæsker
- **Bakterielle SOI-er** (klamydia, gonoré, syfilis) kan **kureres** med antibiotika
- **Virale SOI-er** (HPV, herpes, HIV) kan **ikke kureres**, men kan behandles og kontrolleres
- **Klamydia** er den vanligste SOI-en i Norge og er ofte uten symptomer
- **HPV-vaksine** gis i 7. klasse og beskytter mot de farligste HPV-typene
- **Kondom** er den viktigste beskyttelsen mot SOI
- Testing er gratis på helsestasjon for ungdom

### Hvor få hjelp
- Helsestasjon for ungdom – gratis, uten timebestilling, taushetsplikt
- Fastlege
- Apotek (kondomer og angrepille uten resept)`,
    },
  ],
  exercises: [], // Oppgavene er embedded i content
  keyTerms: [
    { term: 'Prevensjon', definition: 'Midler og metoder som brukes for å forhindre graviditet' },
    { term: 'Barrieremetode', definition: 'Prevensjonsmetode som fysisk hindrer sædceller i å nå egget, for eksempel kondom' },
    { term: 'Hormonell prevensjon', definition: 'Prevensjonsmetoder som bruker syntetiske hormoner (østrogen og/eller gestagen) for å hindre eggløsning' },
    { term: 'Kondom', definition: 'Tynn gummihylse som rulles over penis – den eneste prevensjonsmetoden som beskytter mot både graviditet og SOI' },
    { term: 'P-piller', definition: 'Tabletter med syntetiske hormoner som hindrer eggløsning, tas daglig' },
    { term: 'Hormonspiral', definition: 'T-formet gjenstand som settes inn i livmoren og avgir gestagen lokalt, virker 3–5 år' },
    { term: 'Kobberspiral', definition: 'T-formet gjenstand med kobbertråd som settes inn i livmoren, hormonfri prevensjon som virker 5–10 år' },
    { term: 'Angrepille', definition: 'Nødprevensjon som tas etter ubeskyttet samleie for å utsette eller hemme eggløsning, bør tas innen 72 timer' },
    { term: 'Dobbel beskyttelse', definition: 'Bruk av kondom sammen med en hormonell prevensjonsmetode for å beskytte mot både graviditet og SOI' },
    { term: 'SOI', definition: 'Seksuelt overførbare infeksjoner – infeksjoner som smitter fra person til person ved seksuell kontakt' },
    { term: 'Klamydia', definition: 'Den vanligste SOI-en i Norge, forårsaket av bakterien Chlamydia trachomatis, ofte uten symptomer, kureres med antibiotika' },
    { term: 'Gonoré', definition: 'Bakteriell SOI med økende antibiotikaresistens, kan gi utflod og svie ved vannlating' },
    { term: 'HPV', definition: 'Humant papillomavirus – svært vanlig virus som kan forårsake kjønnsvorter og celleforandringer som kan føre til kreft' },
    { term: 'Genital herpes', definition: 'Virusinfeksjon som gir smertefulle blemmer på kjønnsorganene, kan ikke kureres men kan behandles' },
    { term: 'HIV', definition: 'Humant immunsviktvirus – angriper immunforsvaret, kan ikke kureres men kan behandles effektivt med antiretrovirale legemidler' },
    { term: 'Syfilis', definition: 'Bakteriell SOI som utvikler seg i stadier, kureres med antibiotika (penicillin)' },
    { term: 'Antibiotikaresistens', definition: 'Når bakterier utvikler motstandskraft mot antibiotika slik at behandlingen ikke lenger virker' },
  ],
};

// ============================================================================
// KAPITTEL 7.5: Samtykke, grenser og seksuell helse
// ============================================================================

export const CHAPTER_NAT10_7_5: TextbookChapter = {
  id: 'naturfag-10-7-5',
  courseId: 'naturfag-10',
  chapterNumber: '7.5',
  title: 'Samtykke, grenser og seksuell helse',
  description: 'Forstå hva samtykke betyr i praksis, lær om grensesetting, sunne og usunne relasjoner, og hvor du kan få hjelp med seksuell helse.',
  estimatedMinutes: 40,
  competenceGoals: [
    'forstå hva samtykke betyr og hvordan det fungerer i praksis',
    'kjenne til egne rettigheter knyttet til kropp og seksualitet',
    'vite hvor man kan få hjelp og rådgivning om seksuell helse',
    'kunne reflektere over sunne og usunne relasjoner',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'nat10-7-5-intro',
      type: 'text',
      content: `## Samtykke, grenser og seksuell helse

Seksuell helse handler om mer enn å beskytte seg mot graviditet og infeksjoner. Det handler også om **samtykke**, **grenser**, **respekt** og **trygghet**. Alle mennesker har rett til å bestemme over egen kropp, og det er et grunnleggende prinsipp at all seksuell aktivitet skal bygge på frivillig samtykke.

I dette kapitlet lærer du:
- Hva samtykke er og hvordan det fungerer i praksis
- Hvordan sette og respektere grenser
- Hva som er seksuelle overgrep og tvang
- Forskjellen mellom sunne og usunne relasjoner
- Hva seksuell helse er i vid forstand
- Dine rettigheter knyttet til kropp og seksualitet
- Hvor du kan få hjelp hvis du trenger det`,
    },

    // ========================================================================
    // BLOKK 1: SAMTYKKE
    // ========================================================================

    // ========== DEFINISJON: SAMTYKKE ==========
    {
      id: 'nat10-7-5-def-samtykke',
      type: 'definition',
      title: 'Samtykke',
      content: 'Samtykke betyr at en person frivillig og aktivt sier ja til noe. I seksuell sammenheng betyr samtykke at alle involverte parter frivillig, entusiastisk og tydelig har gitt uttrykk for at de ønsker å delta. Samtykke må være informert (man forstår hva man sier ja til), spesifikt (det gjelder den konkrete handlingen), og kan trekkes tilbake når som helst.',
    },

    // ========== HVA ER SAMTYKKE? ==========
    {
      id: 'nat10-7-5-hva-er-samtykke',
      type: 'text',
      content: `## Hva er samtykke?

Samtykke er et **tydelig ja** – ikke fravær av nei. Det betyr at begge (eller alle) som er involvert, aktivt ønsker å delta.

### De fem kjennetegnene på samtykke

**1. Frivillig**
- Samtykke gis uten press, trusler eller tvang
- Man skal aldri føle seg presset til å gjøre noe man ikke vil
- Noen kan ikke gi frivillig samtykke hvis de er beruset, bevisstløse, sovende eller under press

**2. Entusiastisk**
- Ekte samtykke er entusiastisk – det er noe man faktisk ønsker
- Et motvillig "ja" eller et "greit da" etter mas er ikke ekte samtykke
- Begge parter bør føle seg komfortable og glade

**3. Informert**
- Man må forstå hva man sier ja til
- Man kan ikke samtykke til noe man ikke forstår eller er villedet om

**4. Spesifikt**
- Samtykke til én handling betyr ikke samtykke til alle handlinger
- At noen sier ja til å kysse, betyr ikke at de sier ja til mer enn det
- Samtykke må gis for hver ny handling

**5. Kan trekkes tilbake**
- Man har alltid rett til å ombestemme seg – uansett når
- Selv midt i en seksuell handling kan man si stopp
- Når noen sier stopp, skal den andre respektere det umiddelbart`,
    },

    // ========== SAMTYKKE I PRAKSIS ==========
    {
      id: 'nat10-7-5-samtykke-praksis',
      type: 'text',
      content: `## Samtykke i praksis

### Hva er et tydelig ja?

Et tydelig ja kan uttrykkes på mange måter:
- "Ja, det vil jeg"
- "Det har jeg lyst til"
- "Ja, fortsett"
- Entusiastisk kroppsspråk som viser at man er med

### Hva er IKKE samtykke?

- **Taushet** – å ikke si nei betyr ikke ja
- **Et "ja" under press** – hvis noen har mast, truet eller presset
- **Et "ja" i beruset tilstand** – en person som er sterkt beruset, kan ikke gi gyldig samtykke
- **Et "ja" fra en som sover** – en sovende eller bevisstløs person kan ikke samtykke
- **Tidligere samtykke** – at man sa ja forrige gang, betyr ikke ja denne gangen
- **Å være i et forhold** – å være kjæreste gir ingen automatisk rett til seksuell aktivitet

### Hvordan sjekke samtykke

Det trenger ikke å være vanskelig å sjekke om partneren er komfortabel:
- "Er dette greit for deg?"
- "Vil du at jeg skal fortsette?"
- "Trives du med dette?"
- Vær oppmerksom på kroppsspråk – trekker personen seg unna, virker anspent eller ukomfortabel?

### Norsk lov og samtykke

I Norge er den seksuelle lavalderen **16 år**. Det betyr at det er ulovlig for en voksen å ha seksuell omgang med noen under 16 år. Straffeloven sier også at all seksuell omgang skal bygge på frivillig samtykke. Å ha sex med noen som er bevisstløs, sover eller er sterkt beruset regnes som overgrep.`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE ==========
    {
      id: 'nat10-7-5-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-5-ex-1',
        number: '7.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av følgende situasjoner beskriver et gyldig samtykke?',
        options: [
          'En person sier "greit da" etter at partneren har mast gjentatte ganger',
          'En person er sterkt beruset og sier "ja"',
          'En person sier entusiastisk "ja, det vil jeg" uten å ha blitt presset',
          'En person sier ingenting og den andre tolker det som et ja',
        ],
        answer: 2,
        solution: `**Riktig svar: En person sier entusiastisk "ja, det vil jeg" uten å ha blitt presset**

**Forklaring:**
Gyldig samtykke er frivillig, entusiastisk og tydelig. Et "greit da" etter mas er ikke frivillig – det er et resultat av press. En sterkt beruset person kan ikke gi gyldig samtykke fordi de ikke er i stand til å ta en informert beslutning. Taushet er ikke samtykke – fravær av nei betyr ikke ja. Kun et aktivt, frivillig og entusiastisk ja er gyldig samtykke.`,
      },
    },

    // ========== OPPGAVE 2: KLASSISK ==========
    {
      id: 'nat10-7-5-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-5-ex-2',
        number: '7.5.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar de fem kjennetegnene på samtykke med egne ord. Gi et eksempel fra hverdagen (ikke nødvendigvis seksuelt) som illustrerer hvert kjennetegn.',
        solution: `**Eksempelsvar:**

**1. Frivillig** – Man velger selv uten press
- Eksempel: Noen spør om du vil bli med på kino. Du sier ja fordi du har lyst, ikke fordi de truer med å slutte å være vennen din.

**2. Entusiastisk** – Man ønsker det virkelig
- Eksempel: En venn foreslår å spille fotball, og du svarer "ja, det hadde vært gøy!" – ikke "whatever, det er det samme".

**3. Informert** – Man forstår hva man sier ja til
- Eksempel: Før du melder deg på et løp, får du vite hvor langt det er og hva det innebærer, slik at du vet hva du sier ja til.

**4. Spesifikt** – Samtykke gjelder den konkrete tingen
- Eksempel: At du sier ja til å låne bort boka di, betyr ikke at du sier ja til å låne bort telefonen din.

**5. Kan trekkes tilbake** – Man kan ombestemme seg
- Eksempel: Du har sagt ja til å hjelpe en venn med å flytte lørdag, men du blir syk. Da kan du si at du ikke kan likevel.`,
      },
    },

    // ========================================================================
    // BLOKK 2: GRENSER OG RELASJONER
    // ========================================================================

    // ========== DEFINISJON: GRENSESETTING ==========
    {
      id: 'nat10-7-5-def-grensesetting',
      type: 'definition',
      title: 'Grensesetting',
      content: 'Grensesetting handler om å kjenne sine egne grenser og kommunisere dem tydelig til andre. Alle har ulike grenser for hva de er komfortable med, og disse grensene kan endre seg over tid og fra situasjon til situasjon. Å sette grenser er en viktig del av å ta vare på seg selv, og andres grenser skal alltid respekteres.',
    },

    // ========== GRENSER ==========
    {
      id: 'nat10-7-5-grenser',
      type: 'text',
      content: `## Å sette og respektere grenser

### Hva er grenser?

Grenser er personlige regler for hva du er komfortabel med og hva du ikke er komfortabel med. Grenser handler om:
- Hva du vil og ikke vil gjøre
- Hva som føles riktig og trygt for deg
- Hva du trenger for å ha det bra

### Alle har rett til å sette grenser

- Det er **alltid** greit å si nei
- Du trenger ikke å forklare eller begrunne grensene dine
- Grensene dine kan endre seg – noe du var komfortabel med før, kan føles annerledes nå
- Ingen har rett til å presse deg forbi grensene dine

### Hvordan sette grenser

- **Kjenn deg selv:** Tenk gjennom hva du er komfortabel med på forhånd
- **Kommuniser tydelig:** Si tydelig fra om hva du vil og ikke vil
- **Stol på magefølelsen:** Hvis noe føles feil, er det greit å si stopp
- **Øv deg:** Det kan være vanskelig i starten, men det blir lettere med trening

### Hvordan respektere andres grenser

- **Lytt:** Når noen sier nei, respekter det umiddelbart
- **Ikke press:** Å mase, overtale eller spørre gjentatte ganger er ikke greit
- **Observer:** Vær oppmerksom på kroppsspråk og signaler
- **Spør:** Er du usikker, spør – det er et tegn på respekt`,
    },

    // ========== SEKSUELLE OVERGREP OG TVANG ==========
    {
      id: 'nat10-7-5-overgrep',
      type: 'text',
      content: `## Seksuelle overgrep og tvang

### Hva er seksuelle overgrep?

Seksuelle overgrep er all seksuell kontakt som skjer uten samtykke. Det inkluderer:
- Å tvinge noen til seksuell aktivitet med makt eller trusler
- Å ha seksuell kontakt med noen som sover, er bevisstløse eller sterkt beruset
- Å ha seksuell kontakt med noen under den seksuelle lavalderen (16 år)
- Seksuell trakassering – uønskede seksuelle kommentarer, bilder eller berøring

### Viktig å vite

- **Det er alltid overgriperens skyld** – aldri offeret sin
- Det spiller ingen rolle hva offeret hadde på seg, om de var beruset, eller om de var i et forhold med overgriperen
- Overgrep kan skje i alle typer relasjoner – også mellom kjærester, venner og familiemedlemmer
- Både gutter og jenter kan bli utsatt for overgrep

### Seksuell tvang

Seksuell tvang er når noen bruker press, manipulasjon eller maktforskjeller for å få noen til seksuell aktivitet:
- **Emosjonelt press:** "Hvis du virkelig elsker meg, gjør du det"
- **Skyldfølelse:** "Du har jo sagt ja før"
- **Trusler:** "Jeg slår opp hvis du ikke vil"
- **Manipulasjon:** Gjentatt mas til den andre gir etter
- **Maktmisbruk:** Å utnytte en posisjon (f.eks. eldre person, trener, lærer)

Alle disse formene for press er uakseptable og kan være straffbare.`,
    },

    // ========== DEFINISJON: SEKSUELL LAVALDER ==========
    {
      id: 'nat10-7-5-def-seksuell-lavalder',
      type: 'definition',
      title: 'Seksuell lavalder',
      content: 'Den seksuelle lavalderen i Norge er 16 år. Det betyr at det er ulovlig å ha seksuell omgang med noen under 16 år. Bestemmelsen er der for å beskytte barn og ungdom mot utnyttelse. Jevnaldrende ungdom som utforsker sammen (der begge er nær hverandre i alder), vurderes mildere av rettssystemet.',
    },

    // ========== OPPGAVE 3: MULTIPLE CHOICE ==========
    {
      id: 'nat10-7-5-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-5-ex-3',
        number: '7.5.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvem har skylden dersom et seksuelt overgrep skjer?',
        options: [
          'Den som var beruset',
          'Den som hadde utfordrende klær',
          'Det er alltid overgriperen som har skylden',
          'Den som gikk alene sent på kvelden',
        ],
        answer: 2,
        solution: `**Riktig svar: Det er alltid overgriperen som har skylden**

**Forklaring:**
Det er alltid og utelukkende overgriperen som har ansvaret for et overgrep. Det spiller ingen rolle hva offeret hadde på seg, om de var beruset, eller hvor de befant seg. Ingen har rett til å utsette andre for seksuell kontakt uten samtykke. Å skylde på offeret kalles "victim blaming" og er feil – det er overgriperen som har gjort noe galt.`,
      },
    },

    // ========== GRUPPEPRESS ==========
    {
      id: 'nat10-7-5-gruppepress',
      type: 'text',
      content: `## Gruppepress og påvirkning

### Hva er gruppepress?

Gruppepress (også kalt sosialt press) oppstår når du føler at du må gjøre noe for å passe inn i en gruppe, selv om du egentlig ikke vil. Innen seksualitet kan gruppepress handle om:

- Press til å ha sex fordi "alle andre gjør det"
- Press til å sende nakenbilder
- Press til å se på pornografi
- Press til å ha flere seksualpartnere
- Press til å gjøre ting man ikke er komfortabel med

### Hvordan motstå gruppepress

- **Vit hva du vil:** Det er lettere å si nei når du har tenkt gjennom dine egne grenser
- **Du bestemmer:** Ingen andres mening om når du "bør" ha sex er relevant – det er ditt valg
- **Finn trygge venner:** Gode venner respekterer valgene dine og presser deg ikke
- **Husk fakta:** Det er ikke sant at "alle gjør det" – mange ungdommer venter
- **Det er helt greit å vente:** Det finnes ingen riktig alder for å ha sex utover at man er klar

### Nakenbilder og digitale grenser

- Å sende nakenbilder (nudes) innebærer risiko – bilder kan deles videre uten ditt samtykke
- Det er **ulovlig** å dele nakenbilder av noen under 18 år – dette gjelder også bilder man har fått tilsendt
- Å presse noen til å sende nakenbilder er aldri greit
- Hvis et bilde av deg blir delt: det er ikke din skyld – kontakt Slettmeg.no for hjelp`,
    },

    // ========== OPPGAVE 4: KLASSISK ==========
    {
      id: 'nat10-7-5-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-5-ex-4',
        number: '7.5.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi tre eksempler på gruppepress knyttet til seksualitet blant ungdom, og forklar hvordan man kan motstå presset i hvert tilfelle.',
        solution: `**Eksempelsvar:**

**1. Press til å ha sex fordi "alle andre gjør det"**
- Gruppa snakker om seksuelle erfaringer, og noen føler seg presset til å gjøre det samme
- **Motstå presset:** Husk at det ikke er sant at alle gjør det – mange ungdommer venter. Det er ditt valg, og du bestemmer selv når (og om) du er klar. Gode venner respekterer dette

**2. Press til å sende nakenbilder**
- En kjæreste eller noen på nett ber om et nakenbilde og maser
- **Motstå presset:** Si tydelig nei. En person som virkelig bryr seg om deg, vil ikke presse deg. Nakenbilder kan deles videre og er vanskelige å få fjernet. Det er ulovlig å dele nakenbilder av noen under 18 år

**3. Press til å gjøre seksuelle handlinger man ikke er komfortabel med**
- En partner vil gjøre noe man har sett i pornografi, men den andre er usikker
- **Motstå presset:** Pornografi viser ikke virkelig sex – det er skuespill. Du har alltid rett til å si nei til noe som ikke føles riktig for deg. Kommuniser tydelig hva du er komfortabel med`,
      },
    },

    // ========== SUNNE OG USUNNE RELASJONER ==========
    {
      id: 'nat10-7-5-relasjoner',
      type: 'text',
      content: `## Sunne og usunne relasjoner

### Kjennetegn på en sunn relasjon

I en sunn relasjon er det:
- **Gjensidig respekt** – begge behandler hverandre med respekt
- **Tillit** – man stoler på hverandre
- **Ærlighet** – man er ærlige med hverandre
- **God kommunikasjon** – man snakker åpent om følelser, ønsker og grenser
- **Likeverd** – ingen bestemmer over den andre
- **Frihet** – begge har lov til å ha egne venner, interesser og meninger
- **Støtte** – man heier på hverandre og støtter hverandres mål
- **Trygghet** – man føler seg trygg, både fysisk og emosjonelt

### Varseltegn på en usunn relasjon

En relasjon kan være usunn hvis partneren:
- **Kontrollerer** – bestemmer hvem du får treffe, sjekker telefonen din, bestemmer hva du skal ha på deg
- **Isolerer** – prøver å holde deg borte fra venner og familie
- **Manipulerer** – bruker skyldfølelse, løgner eller trusler for å få viljen sin
- **Nedvurderer** – kaller deg stygge ting, kritiserer deg konstant, får deg til å tvile på deg selv
- **Har sjalusi som kontroll** – påstår at sjalusi er tegn på kjærlighet (det er det ikke)
- **Bruker press** – presser deg til seksuelle handlinger, rusmidler eller andre ting du ikke vil
- **Truer** – truer med å slå opp, skade seg selv eller andre

### Det er alltid lov å gå

- Hvis en relasjon gjør deg utrygg eller ulykkelig, har du rett til å forlate den
- Du trenger ikke en "god nok" grunn for å slå opp
- Søk hjelp hvis du opplever vold, trusler eller kontroll i en relasjon`,
    },

    // ========== OPPGAVE 5: MULTIPLE CHOICE ==========
    {
      id: 'nat10-7-5-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-5-ex-5',
        number: '7.5.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av følgende er et varseltegn på en usunn relasjon?',
        options: [
          'Partneren din støtter deg i å bruke tid med vennene dine',
          'Dere snakker åpent om ting dere er uenige om',
          'Partneren din sjekker telefonen din og bestemmer hvem du får treffe',
          'Dere respekterer hverandres grenser',
        ],
        answer: 2,
        solution: `**Riktig svar: Partneren din sjekker telefonen din og bestemmer hvem du får treffe**

**Forklaring:**
Å sjekke partnerens telefon og bestemme hvem hen får treffe er kontrollatferd og et tydelig varseltegn på en usunn relasjon. I en sunn relasjon har begge parter frihet til å ha egne venner, og man respekterer hverandres privatliv. De andre alternativene (støtte, åpen kommunikasjon og respekt for grenser) er kjennetegn på en sunn relasjon.`,
      },
    },

    // ========================================================================
    // BLOKK 3: SEKSUELL HELSE OG RETTIGHETER
    // ========================================================================

    // ========== DEFINISJON: SEKSUELL HELSE ==========
    {
      id: 'nat10-7-5-def-seksuell-helse',
      type: 'definition',
      title: 'Seksuell helse',
      content: 'Verdens helseorganisasjon (WHO) definerer seksuell helse som en tilstand av fysisk, emosjonelt, mentalt og sosialt velvære knyttet til seksualitet. Det handler ikke bare om fravær av sykdom, men om å ha en positiv og respektfull tilnærming til seksualitet og seksuelle relasjoner – samt muligheten til å ha trygge og lystbetonte seksuelle erfaringer, fri for tvang, diskriminering og vold.',
    },

    // ========== SEKSUELL HELSE ==========
    {
      id: 'nat10-7-5-seksuell-helse',
      type: 'text',
      content: `## Hva er seksuell helse?

Seksuell helse er et bredt begrep som handler om mer enn bare kropp og sykdom. Det inkluderer:

### Fysisk helse
- Beskyttelse mot SOI og uønsket graviditet
- Tilgang til prevensjon og helsetjenester
- Kunnskap om egen kropp

### Emosjonell helse
- Å føle seg trygg og respektert i seksuelle situasjoner
- Å ha positive følelser knyttet til egen kropp og seksualitet
- Å kunne sette grenser og si nei

### Mental helse
- Å ha realistiske forventninger (ikke basert på pornografi)
- Å ikke føle skam eller skyld over egen seksualitet
- Å vite at det er normalt med mange ulike følelser og ønsker

### Sosial helse
- Å ha trygge relasjoner basert på respekt
- Å ha noen å snakke med om seksualitet
- Å vite at mangfold er normalt – ulike legninger, identiteter og uttrykk`,
    },

    // ========== DINE RETTIGHETER ==========
    {
      id: 'nat10-7-5-rettigheter',
      type: 'text',
      content: `## Dine rettigheter

Som ung i Norge har du flere rettigheter knyttet til seksuell helse:

### Rett til informasjon
- Du har rett til alderstilpasset og korrekt informasjon om kropp, seksualitet, prevensjon og SOI
- Skolen har plikt til å gi seksualundervisning

### Rett til gratis prevensjon
- Jenter og kvinner under 20 år har rett til gratis hormonell prevensjon
- Kondomer deles ut gratis på helsestasjoner for ungdom

### Rett til helsehjelp
- Du kan oppsøke helsestasjon for ungdom uten foreldres samtykke
- Helsepersonell har taushetsplikt – de kan ikke fortelle foreldrene dine hva du snakker med dem om (med svært få unntak, f.eks. fare for liv)
- Du har rett til å teste deg for SOI og å få behandling

### Rett til privatliv
- Ingen har rett til å gå gjennom telefonen din eller private meldinger
- Du har rett til å bestemme hvem som vet hva om kroppen din og seksualiteten din

### Rett til å si nei
- Du har alltid rett til å si nei til seksuell kontakt – uansett situasjon
- Ingen kan kreve noe av kroppen din

### Rett til å være den du er
- Alle har rett til å leve ut sin seksuelle orientering og kjønnsidentitet uten diskriminering
- Det er normalt å være heterofil, homofil, bifil, skeiv, aseksuell eller å være usikker`,
    },

    // ========== OPPGAVE 6: MULTIPLE CHOICE ==========
    {
      id: 'nat10-7-5-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-5-ex-6',
        number: '7.5.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den seksuelle lavalderen i Norge?',
        options: ['14 år', '15 år', '16 år', '18 år'],
        answer: 2,
        solution: `**Riktig svar: 16 år**

**Forklaring:**
Den seksuelle lavalderen i Norge er 16 år. Det betyr at det er ulovlig for en voksen å ha seksuell omgang med noen under 16 år. Loven er der for å beskytte barn og unge mot utnyttelse. For jevnaldrende ungdom som utforsker sammen og er nære i alder, vurderer rettssystemet situasjonen mildere.`,
      },
    },

    // ========== HVOR FÅ HJELP ==========
    {
      id: 'nat10-7-5-hjelp',
      type: 'text',
      content: `## Hvor kan du få hjelp?

Hvis du har spørsmål om seksualitet, opplever noe vanskelig, eller trenger noen å snakke med, finnes det flere steder du kan henvende deg:

### Helsestasjon for ungdom
- Finnes i de fleste kommuner i Norge
- Gratis, uten timebestilling
- Helsesykepleier og ofte lege tilgjengelig
- Kan hjelpe med prevensjon, testing, samtaler om seksualitet og psykisk helse
- Taushetsplikt

### Fastlege
- Kan hjelpe med prevensjon, testing og behandling
- Taushetsplikt

### Sex og samfunn (sexogsamfunn.no)
- Norges største senter for seksuell og reproduktiv helse
- Klinikk i Oslo med drop-in
- God nettside med informasjon og chat-tjeneste

### Ung.no
- Offentlig informasjonskanal for ungdom
- Kan stille anonyme spørsmål og få svar fra fagfolk
- Mye god informasjon om kropp, seksualitet, rettigheter og følelser

### Ved overgrep eller vold

- **Incest- og voldtektstelefonen:** 800 57 000 (gratis, døgnåpen)
- **Kors på halsen (Røde Kors):** 800 33 321 – samtale- og chattetjeneste for barn og unge
- **Alarmtelefonen for barn og unge:** 116 111 (gratis, døgnåpen)
- **Politiet:** 02800 (ikke nødnummer) eller 112 ved akutt fare

### Noen å snakke med

- **Mental Helse Ungdom:** Hjelpetelefon og chattetjeneste
- **Kirkens SOS:** 22 40 00 40 – døgnåpen samtaletjeneste
- En voksen du stoler på – lærer, helsesykepleier, forelder, trener eller annen trygg voksen`,
    },

    // ========== VIKTIGHETEN AV KOMMUNIKASJON ==========
    {
      id: 'nat10-7-5-kommunikasjon',
      type: 'text',
      content: `## Snakk om det – viktigheten av kommunikasjon

God kommunikasjon er grunnlaget for gode relasjoner og god seksuell helse. Det kan føles vanskelig eller flaut å snakke om seksualitet, men det er en viktig ferdighet.

### Hvorfor er det viktig å snakke om det?

- **Trygghet:** Å snakke om grenser og ønsker skaper trygghet for begge parter
- **Samtykke:** Kommunikasjon er nødvendig for å sikre at begge ønsker det samme
- **Forebygging:** Å snakke om prevensjon og testing forebygger uønsket graviditet og SOI
- **Hjelp:** Hvis du opplever noe vanskelig, er det viktig å snakke med noen du stoler på

### Tips for å snakke om vanskelige temaer

- **Velg riktig tidspunkt:** Ikke midt i en situasjon, men på et rolig tidspunkt
- **Bruk jeg-setninger:** "Jeg føler..." i stedet for "Du gjør..."
- **Vær ærlig:** Det er bedre å være ærlig enn å late som
- **Lytt aktivt:** Gi den andre rom til å fortelle sin side
- **Det er lov å være nervøs:** De fleste synes det er litt vanskelig – det er helt normalt

### Husk

- Du er ikke alene om å ha spørsmål om seksualitet
- Det finnes ingen dumme spørsmål
- Å be om hjelp er et tegn på styrke, ikke svakhet
- Alle fortjener å ha det trygt og godt`,
    },

    // ========== OPPGAVE 7: KLASSISK ==========
    {
      id: 'nat10-7-5-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-5-ex-7',
        number: '7.5.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar med egne ord hva Verdens helseorganisasjon (WHO) mener med "seksuell helse". Hvorfor handler seksuell helse om mer enn bare å unngå sykdom?',
        solution: `**Eksempelsvar:**

WHO definerer seksuell helse som en tilstand av fysisk, emosjonelt, mentalt og sosialt velvære knyttet til seksualitet. Det handler altså om **mye mer** enn bare å unngå sykdom og infeksjoner.

Seksuell helse inkluderer:

**Fysisk helse:** Å beskytte seg mot SOI og uønsket graviditet, og å ha tilgang til helsetjenester og prevensjon.

**Emosjonell helse:** Å føle seg trygg, respektert og komfortabel i seksuelle situasjoner. Å ha positive følelser knyttet til egen kropp og seksualitet.

**Mental helse:** Å ha realistiske forventninger, ikke føle skam over egen seksualitet, og forstå at mangfold er normalt.

**Sosial helse:** Å ha trygge relasjoner basert på gjensidig respekt og god kommunikasjon.

Grunnen til at seksuell helse handler om mer enn å unngå sykdom, er at seksualitet er en naturlig del av det å være menneske. For å ha god seksuell helse må man føle seg fri til å uttrykke seg selv, ha trygge relasjoner, og vite at man har rettigheter og tilgang til hjelp når man trenger det. Det handler om å ha det bra – ikke bare om å unngå det som er dårlig.`,
      },
    },

    // ========== OPPGAVE 8: KLASSISK ==========
    {
      id: 'nat10-7-5-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-5-ex-8',
        number: '7.5.8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv forskjellen mellom en sunn og en usunn relasjon. Bruk minst tre kjennetegn for hver type relasjon og forklar hvorfor det er viktig å kjenne igjen varseltegnene.',
        solution: `**Eksempelsvar:**

**Sunn relasjon:**
1. **Gjensidig respekt** – begge behandler hverandre med verdighet og respekterer hverandres meninger og grenser
2. **Tillit og frihet** – man stoler på hverandre og har lov til å ha egne venner, interesser og privatliv
3. **God kommunikasjon** – man snakker åpent og ærlig om følelser, ønsker og bekymringer, og lytter til hverandre

**Usunn relasjon:**
1. **Kontroll** – den ene partneren bestemmer over den andre, sjekker telefonen, bestemmer hvem hen får treffe eller hva hen skal ha på seg
2. **Manipulasjon** – den ene bruker skyldfølelse, trusler eller løgner for å få viljen sin, for eksempel "hvis du elsket meg, ville du..."
3. **Nedvurdering** – den ene kritiserer, håner eller kaller den andre stygge ting, noe som bryter ned selvfølelsen over tid

**Hvorfor er det viktig å kjenne igjen varseltegnene?**
- Usunne relasjoner utvikler seg ofte gradvis, og det kan være vanskelig å se mønsteret når man er midt i det
- Å kjenne igjen varseltegnene gjør at man kan handle tidlig – enten ved å ta det opp med partneren eller ved å forlate relasjonen
- Kontrollatferd og manipulasjon kan eskalere til psykisk eller fysisk vold over tid
- Man fortjener å ha det trygt og godt i en relasjon, og kunnskap om varseltegn gjør det lettere å ta vare på seg selv`,
      },
    },

    // ========== OPPGAVE 9: MULTIPLE CHOICE ==========
    {
      id: 'nat10-7-5-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-5-ex-9',
        number: '7.5.9',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En venn forteller at partneren ofte sjekker telefonen deres, bestemmer hvem de får henge med, og sier "det er fordi jeg elsker deg så mye". Hva er dette et eksempel på?',
        options: [
          'En sunn relasjon med mye kjærlighet',
          'Normal sjalusi som er et tegn på omsorg',
          'Kontrollatferd som er et varseltegn på en usunn relasjon',
          'Noe alle par gjør',
        ],
        answer: 2,
        solution: `**Riktig svar: Kontrollatferd som er et varseltegn på en usunn relasjon**

**Forklaring:**
Å sjekke partnerens telefon og bestemme hvem de får treffe er kontrollatferd – et tydelig varseltegn på en usunn relasjon. At partneren sier "det er fordi jeg elsker deg" er manipulasjon – ekte kjærlighet handler om tillit og frihet, ikke kontroll. Sjalusi er ikke et tegn på kjærlighet, men kan være et tegn på utrygghet eller kontrollbehov. I en sunn relasjon stoler man på hverandre og respekterer hverandres privatliv og frihet.`,
      },
    },

    // ========== OPPGAVE 10: KLASSISK ==========
    {
      id: 'nat10-7-5-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-5-ex-10',
        number: '7.5.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvorfor kunnskap om samtykke, grenser og seksuell helse er viktig for ungdom. Bruk eksempler og reflekter over hvordan denne kunnskapen kan bidra til bedre relasjoner og tryggere valg.',
        solution: `**Eksempelsvar:**

Kunnskap om samtykke, grenser og seksuell helse er viktig for ungdom av flere grunner:

**1. Forebygging av overgrep og grenseoverskridelser**
Når ungdom forstår hva samtykke er og hvordan det fungerer, er det lettere å gjenkjenne situasjoner der grenser blir brutt. Kunnskap gjør det enklere å si nei, og det gjør at man forstår at man aldri har skyld i et overgrep.

**2. Tryggere relasjoner**
Ungdom som kjenner kjennetegnene på sunne og usunne relasjoner, er bedre rustet til å bygge trygge og respektfulle forhold. For eksempel kan man tidlig gjenkjenne kontrollatferd (som telefonsjekking eller isolering fra venner) og forstå at det ikke er normalt.

**3. Bedre kommunikasjon**
Å lære om samtykke og grenser gir verktøy for å kommunisere åpent om ønsker og grenser. Dette er nyttig i alle relasjoner – ikke bare romantiske. For eksempel kan en ungdom som har lært om grensesetting, lettere si fra i mange ulike situasjoner.

**4. Motstand mot press**
Mange ungdommer opplever gruppepress knyttet til seksualitet. Kunnskap om at det er helt normalt å vente, og at man aldri skylder noen noe, gjør det lettere å motstå press.

**5. Helsefremmende valg**
Å vite om rettigheter som gratis prevensjon og gratis testing, og å vite hvor man kan få hjelp, gjør det enklere å ta vare på egen helse.

**6. Respekt for mangfold**
Kunnskap om seksuell helse inkluderer forståelse for at mennesker er forskjellige – ulike legninger, identiteter og ønsker er alle normale. Dette bidrar til et mer inkluderende og trygt miljø.

**Konklusjon:**
Kunnskap om samtykke, grenser og seksuell helse gir ungdom verktøy til å ta gode valg, bygge trygge relasjoner, og beskytte seg selv og andre. Det handler ikke om å gjøre seksualitet vanskelig, men om å gjøre det trygt og respektfullt.`,
        isInvestigation: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'nat10-7-5-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

### Samtykke
- Samtykke er et **tydelig ja** – ikke fravær av nei
- De fem kjennetegnene: frivillig, entusiastisk, informert, spesifikt, kan trekkes tilbake
- Taushet, press, beruselse eller tidligere ja er **ikke** samtykke
- Den seksuelle lavalderen i Norge er **16 år**

### Grenser
- Alle har rett til å sette sine egne grenser
- Det er alltid greit å si nei – uten å måtte begrunne det
- Andres grenser skal alltid respekteres umiddelbart

### Seksuelle overgrep
- Seksuelle overgrep er all seksuell kontakt uten samtykke
- Det er **alltid** overgriperens skyld – aldri offeret sin
- Seksuell tvang inkluderer press, manipulasjon og maktmisbruk

### Relasjoner
- Sunne relasjoner kjennetegnes av respekt, tillit, kommunikasjon og frihet
- Usunne relasjoner kjennetegnes av kontroll, manipulasjon, isolering og nedvurdering
- Sjalusi er ikke kjærlighet – det er et varseltegn

### Seksuell helse
- Handler om fysisk, emosjonelt, mentalt og sosialt velvære knyttet til seksualitet
- Inkluderer rett til informasjon, helsehjelp, prevensjon og privatliv
- Alle fortjener å ha det trygt og godt

### Hvor få hjelp
- **Helsestasjon for ungdom** – gratis, uten timebestilling, taushetsplikt
- **Sex og samfunn** – sexogsamfunn.no
- **Ung.no** – informasjon og anonyme spørsmål
- **Incest- og voldtektstelefonen:** 800 57 000
- **Kors på halsen:** 800 33 321
- **Alarmtelefonen for barn og unge:** 116 111

### Avslutning

Med dette kapittelet har du fullført seksjon 7 om seksuell og reproduktiv helse. Gjennom seksjon 5, 6 og 7 har du lært om kroppens signalsystemer, teknologi, og hvordan du kan ta vare på deg selv og andre. Kunnskap om kroppen, helsen din og dine rettigheter er viktig -- bruk det til å ta gode valg for deg selv og vise respekt for andre.`,
    },
  ],
  exercises: [], // Oppgavene er embedded i content
  keyTerms: [
    { term: 'Samtykke', definition: 'Frivillig, entusiastisk og tydelig godkjenning av en handling – kan trekkes tilbake når som helst' },
    { term: 'Grensesetting', definition: 'Å kjenne og kommunisere sine egne grenser for hva man er komfortabel med' },
    { term: 'Seksuell lavalder', definition: 'Alderen da det er lovlig å ha seksuell omgang – i Norge 16 år' },
    { term: 'Seksuelle overgrep', definition: 'All seksuell kontakt som skjer uten samtykke' },
    { term: 'Seksuell tvang', definition: 'Bruk av press, manipulasjon eller maktforskjeller for å få noen til seksuell aktivitet' },
    { term: 'Gruppepress', definition: 'Sosialt press til å gjøre noe for å passe inn i en gruppe, selv om man egentlig ikke vil' },
    { term: 'Sunn relasjon', definition: 'Relasjon preget av gjensidig respekt, tillit, god kommunikasjon, likeverd og frihet' },
    { term: 'Usunn relasjon', definition: 'Relasjon preget av kontroll, manipulasjon, isolering, nedvurdering eller vold' },
    { term: 'Seksuell helse', definition: 'Ifølge WHO: en tilstand av fysisk, emosjonelt, mentalt og sosialt velvære knyttet til seksualitet' },
    { term: 'Victim blaming', definition: 'Å gi offeret skylden for overgrep basert på for eksempel klesvalg, oppførsel eller rusbruk – alltid feil' },
    { term: 'Kontrollatferd', definition: 'Handlinger der en person prøver å kontrollere en annen, for eksempel ved å sjekke telefon, bestemme vennekrets eller begrense frihet' },
  ],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const NATURFAG_10_KAP7B_CHAPTERS: TextbookChapter[] = [
  CHAPTER_NAT10_7_4,
  CHAPTER_NAT10_7_5,
];
