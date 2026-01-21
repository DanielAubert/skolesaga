/**
 * Fysikk 1 - Kapittel 1.1: Fysikkens metoder
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_FYS1_1_1: TextbookChapter = {
  id: 'fys1-1-1',
  courseId: 'fys1',
  chapterNumber: '1.1',
  title: 'Fysikkens metoder',
  description: 'Lær om naturvitenskapelig metode, hypotesetesting, eksperimentdesign og usikkerhetsanalyse.',
  estimatedMinutes: 60,
  competenceGoals: [
    'beskrive naturvitenskapelig metode og hypotesetesting',
    'planlegge og gjennomføre systematiske eksperimenter',
    'analysere måleusikkerhet og bruke signifikante siffer',
    'evaluere gyldigheten av eksperimentelle resultater',
  ],
  content: [
    {
      id: 'fys1-1-1-intro',
      type: 'text',
      content: `# Fysikkens metoder

**Fysikk** er læren om naturens grunnleggende lover og sammenhenger. For å forstå naturen bruker fysikere en systematisk tilnærming kalt **naturvitenskapelig metode**.

## Hva er naturvitenskap?

Naturvitenskap er kunnskapen vi får ved å:
1. **Observere** naturen systematisk
2. **Eksperimentere** for å teste våre ideer
3. **Lage modeller** som forklarer våre observasjoner
4. **Forutsi** hva som vil skje i nye situasjoner

**Fysikk** skiller seg fra andre vitenskaper ved:
- **Kvantitativ tilnærming:** Vi måler alt vi kan og bruker matematikk
- **Universelle lover:** Fysikkens lover gjelder overalt i universet
- **Eksperimentell testing:** Alt må testes eksperimentelt
- **Matematisk presisjon:** Vi uttrykker sammenhenger som eksakte formler

## Naturvitenskapelig metode

Den naturvitenskapelige metoden er ikke en lineær oppskrift, men en syklisk prosess av:

**1. Observasjon**
- Legg merke til et fenomen i naturen
- Eksempel: "Epler faller nedover fra trær"

**2. Spørsmål**
- Still spørsmål om hvorfor eller hvordan
- Eksempel: "Hvorfor faller epler nedover og ikke oppover?"

**3. Hypotese**
- Foreslå en mulig forklaring (en kvalifisert gjetning)
- En god hypotese er **testbar** og **falsifiserbar**
- Eksempel: "Det finnes en kraft som trekker alle objekter mot jordens sentrum"

**4. Prediksjon**
- Hva vil skje hvis hypotesen er riktig?
- Eksempel: "Hvis hypotesen er riktig, vil alle objekter falle med samme akselerasjon"

**5. Eksperiment**
- Design et eksperiment for å teste prediksjonen
- Samle data systematisk
- Kontroller variabler

**6. Analyse**
- Analyser dataene
- Sammenlign med prediksjon
- Beregn usikkerhet

**7. Konklusjon**
- Støtter dataene hypotesen?
- Hvis ja: Hypotesen overlever (men er ikke "bevist")
- Hvis nei: Hypotesen må revideres eller forkastes

**8. Kommunikasjon**
- Publiser resultatene
- Andre forskere må kunne gjenta eksperimentet
- Peer review (fagfellevurdering)

**Syklisk prosess:**
- Nye eksperimenter fører til nye spørsmål
- Hypoteser revideres kontinuerlig
- Vitenskapelig kunnskap er alltid tentativ (midlertidig)`,
    },
    {
      id: 'fys1-1-1-def-hypotese',
      type: 'definition',
      title: 'Hypotese',
      content: 'En testbar og falsifiserbar forklaring på et naturlig fenomen. En god hypotese skal kunne testes eksperimentelt og må kunne motbevises hvis den er feil.',
    },
    {
      id: 'fys1-1-1-def-teori',
      type: 'definition',
      title: 'Vitenskapelig teori',
      content: 'En omfattende forklaring på et sett av fenomener som er støttet av mange eksperimenter og observasjoner over lang tid. Eksempler: Newtons mekanikk, elektromagnetisk teori, termodynamikk. I vitenskap er en "teori" ikke bare en gjetning, men den høyeste formen for sikker kunnskap.',
    },
    {
      id: 'fys1-1-1-def-lov',
      type: 'definition',
      title: 'Naturlov',
      content: 'En matematisk beskrivelse av et konsistent mønster i naturen, basert på gjentatte eksperimenter. Eksempel: Newtons 2. lov $F = ma$. En lov beskriver "hva" som skjer, mens en teori forklarer "hvorfor".',
    },
    {
      id: 'fys1-1-1-variabler',
      type: 'text',
      content: `# Variabler i eksperimenter

I fysikkeksperimenter jobber vi med forskjellige typer variabler:

## Uavhengig variabel

**Definisjon:** Variabelen du **bevisst endrer** i eksperimentet.

**Eksempel:**
- Undersøker tyngdekraftens virkning på fallende objekter
- Uavhengig variabel: Massen til objektet
- Du velger ulike objekter med forskjellig masse

**Notasjon:** Vanligvis plottes på x-aksen i en graf

## Avhengig variabel

**Definisjon:** Variabelen du **måler** som respons på endringen.

**Eksempel:**
- Undersøker tyngdekraftens virkning
- Avhengig variabel: Falltiden
- Du måler hvor lang tid det tar før objektet treffer bakken

**Notasjon:** Vanligvis plottes på y-aksen i en graf

## Kontrollvariabler

**Definisjon:** Variabler som **holdes konstante** for å sikre et rettferdig eksperiment.

**Eksempel:**
- Undersøker tyngdekraftens virkning
- Kontrollvariabler:
  - Fallhøyden (samme for alle objekter)
  - Luftmotstanden (slipp fra vakuum eller bruk kompakte objekter)
  - Måleapparatet (samme tidtaker)
  - Miljøet (samme temperatur, samme sted)

**Hvorfor viktig?**
- Hvis flere variabler endres samtidig, vet du ikke hva som forårsaket endringen
- Eksempel: Hvis du endrer både masse og fallhøyde, kan du ikke vite om forskjellen i falltid skyldes massen eller høyden

## Eksperimentell design

**Prinsipp:** Endre én variabel om gangen

**God praksis:**
1. **Identifiser alle variabler**
2. **Velg én uavhengig variabel**
3. **Hold alle andre konstante**
4. **Mål avhengig variabel nøyaktig**
5. **Gjenta målingen flere ganger**`,
    },
    {
      id: 'fys1-1-1-ex-galileo',
      type: 'example',
      title: 'Galileos falleksperimenter',
      problem: 'Galileo Galilei (1564-1642) ønsket å undersøke om tunge objekter faller raskere enn lette objekter, slik Aristoteles hadde hevdet. Hvordan kunne han teste dette?',
      solution: `**Aristoteles påstand (ca. 350 f.Kr.):**
- Tunge objekter faller raskere enn lette objekter
- Fallhastigheten er proporsjonal med vekten

**Galileos hypotese:**
- Alle objekter faller med samme akselerasjon (i vakuum)
- Luftmotstanden, ikke massen, forklarer forskjeller

**Galileos eksperiment:**

**Uavhengig variabel:** Massen til kuler
**Avhengig variabel:** Falltiden
**Kontrollvariabler:** Fallhøyden (samme for alle kuler)

**Utfordring:** Objekter faller for raskt til å måle tiden nøyaktig med datidens teknologi

**Løsning:** Galileo brukte **skråplan** for å "forsinke" fallet
- Kuler ruller nedover et skråplan
- Bevegelsen er langsommere enn fritt fall
- Lettere å måle tiden

**Observasjoner:**
1. **Like kuler startet samtidig:** Ankom bunnen samtidig
2. **Kuler med ulik masse:** Nesten lik falltid (små forskjeller pga. luftmotstand)
3. **Jo brattere skråplanet:** Jo raskere rullet kulene (høyere akselerasjon)

**Galileos genistrøk:**
- Han *ekstrapolerte* til 90° vinkel (loddrett fall)
- Konkluderte: I fritt fall (uten luft) ville alle objekter falle likt

**Konklusjon:**
- Aristoteles tok feil
- Alle objekter akselererer likt i tyngdefeltet (uavhengig av masse)
- Forskjeller skyldes luftmotstand

**Moderne bekreftelse:**
- Apollo 15 (1971): Astronaut David Scott slapp en hammer og en fjær på Månen (ingen atmosfære)
- Begge traff bakken samtidig!

**Betydning:**
Dette var revolusjonerende! Det viste at:
1. Eksperimenter trumfer autoritet (Aristoteles)
2. Matematikk kan beskrive naturen presist
3. Vitenskapelig metode fungerer`,
    },
    {
      id: 'fys1-1-1-maling',
      type: 'text',
      content: `# Måling og usikkerhet

Alle fysiske målinger har **usikkerhet** (eller måleusikkerhet). Ingen måling er perfekt.

## Årsaker til måleusikkerhet

**1. Instrumentusikkerhet**
- Begrenset oppløsning på måleinstrumentet
- Eksempel: Linjal med mm-inndeling kan ikke måle mer presist enn ±0.5 mm

**2. Avlesningsusikkerhet**
- Mennesker leser av instrumenter litt forskjellig
- Eksempel: Parallaksefeil (ser på målebåndet fra feil vinkel)

**3. Tilfeldige variasjoner**
- Små variasjoner i eksperimentelle forhold
- Eksempel: Luftstrømmer påvirker pendelbevegelse

**4. Systematiske feil**
- Konsistente avvik i samme retning
- Eksempel: Tidtakeren går 0.1 s for sent
- Vanskelig å oppdage, men kan elimineres ved kalibrering

## Presisjon vs. Nøyaktighet

**Presisjon (reproducerbarhet):**
- Hvor godt samsvarer gjentatte målinger?
- Høy presisjon: Små variasjoner mellom målinger
- Lav presisjon: Store variasjoner mellom målinger

**Nøyaktighet:**
- Hvor nær er målingen den sanne verdien?
- Høy nøyaktighet: Målingen er nær sann verdi
- Lav nøyaktighet: Målingen er langt fra sann verdi

**Fire scenarioer:**

1. **Høy nøyaktighet og høy presisjon:** Ideelt!
2. **Høy presisjon, lav nøyaktighet:** Systematisk feil
3. **Lav presisjon, høy nøyaktighet:** Tilfeldige feil
4. **Lav presisjon og lav nøyaktighet:** Dårlig eksperiment

**Skyteskive-analogi:**
- Presisjon = Hvor tett ligger pilene sammen?
- Nøyaktighet = Hvor nær blink ligger pilene?

## Rapportering av usikkerhet

**Format:** målt verdi ± usikkerhet

**Eksempel:**
$L = 12.3 \\pm 0.2 \\text{ cm}$

Dette betyr:
- Lengden er målt til 12.3 cm
- Usikkerheten er ±0.2 cm
- Den sanne verdien ligger sannsynligvis mellom 12.1 cm og 12.5 cm

## Absolutt vs. Relativ usikkerhet

**Absolutt usikkerhet:**
- Usikkerheten i samme enhet som målingen
- Eksempel: ±0.2 cm

**Relativ usikkerhet:**
- Usikkerheten som prosent eller brøk av målingen
- Eksempel: $\\frac{0.2}{12.3} \\approx 0.016 = 1.6\\%$

**Formel:**
$$\\text{Relativ usikkerhet} = \\frac{\\text{Absolutt usikkerhet}}{\\text{Målt verdi}}$$

## Usikkerhet i beregninger

**Addisjon og subtraksjon:**
Addér absolutte usikkerheter

**Eksempel:**
- $L_1 = 10.0 \\pm 0.2 \\text{ cm}$
- $L_2 = 5.5 \\pm 0.1 \\text{ cm}$
- $L_{tot} = L_1 + L_2 = 15.5 \\pm 0.3 \\text{ cm}$

**Multiplikasjon og divisjon:**
Addér relative usikkerheter

**Eksempel:**
- $L = 10.0 \\pm 0.2 \\text{ cm}$ (relativ usikkerhet: 2%)
- $B = 5.0 \\pm 0.1 \\text{ cm}$ (relativ usikkerhet: 2%)
- $A = L \\times B = 50 \\pm 2 \\text{ cm}^2$ (relativ usikkerhet: 2% + 2% = 4%)

**Potenser:**
Multipliser relativ usikkerhet med eksponenten

**Eksempel:**
- $r = 2.0 \\pm 0.1 \\text{ cm}$ (relativ usikkerhet: 5%)
- $A = \\pi r^2 = 12.6 \\text{ cm}^2$ (relativ usikkerhet: 2 × 5% = 10%)
- $A = 12.6 \\pm 1.3 \\text{ cm}^2$`,
    },
    {
      id: 'fys1-1-1-signifikante',
      type: 'text',
      content: `# Signifikante siffer

**Signifikante siffer** er antall meningsfulle sifre i et tall. De indikerer presisjonen i en måling.

## Regler for signifikante siffer

**1. Alle ikke-null siffer er signifikante**
- 123 har 3 signifikante siffer
- 1.23 har 3 signifikante siffer

**2. Nuller mellom ikke-null siffer er signifikante**
- 101 har 3 signifikante siffer
- 1.02 har 3 signifikante siffer

**3. Ledende nuller er IKKE signifikante**
- 0.0123 har 3 signifikante siffer
- 0.00012 har 2 signifikante siffer

**4. Etterfølgende nuller etter desimaltegn ER signifikante**
- 1.200 har 4 signifikante siffer
- 12.30 har 4 signifikante siffer

**5. Etterfølgende nuller i hele tall er tvetydige**
- 1200 kan ha 2, 3 eller 4 signifikante siffer
- Bruk vitenskapelig notasjon for klarhet:
  - $1.2 \\times 10^3$ har 2 signifikante siffer
  - $1.20 \\times 10^3$ har 3 signifikante siffer

## Avrunding ved beregninger

**Multiplikasjon og divisjon:**
Resultatet skal ha like mange signifikante siffer som faktoren med færrest

**Eksempel:**
- $12.3 \\times 4.5 = 55.35 \\rightarrow 55$ (2 signifikante siffer)
- $10.0 / 3.0 = 3.333... \\rightarrow 3.3$ (2 signifikante siffer)

**Addisjon og subtraksjon:**
Resultatet skal ha like mange desimaler som tallet med færrest desimaler

**Eksempel:**
- $12.1 + 0.035 = 12.135 \\rightarrow 12.1$ (1 desimal)
- $100 - 0.5 = 99.5 \\rightarrow 100$ (ingen desimaler)

## Hvorfor er dette viktig?

**1. Ærlig rapportering:**
- Du kan ikke påstå høyere presisjon enn du faktisk har
- Eksempel: Hvis du måler med linjal (mm-presisjon), kan du ikke rapportere 12.3456 cm

**2. Unngå falsk nøyaktighet:**
- Kalkulatoren viser ofte mange desimaler, men de er ikke alle meningsfulle
- Eksempel: $\\pi r^2$ med $r = 2.1$ cm gir $13.854...$ cm², men du skal rapportere 14 cm² (2 signifikante siffer)

**3. Konsistens:**
- Alle forskere bruker samme konvensjoner
- Gjør vitenskapelig kommunikasjon enklere`,
    },
    {
      id: 'fys1-1-1-ex-usikkerhet',
      type: 'example',
      title: 'Måling av pendellengde',
      problem: 'Du måler lengden på en pendel for å beregne tyngdeakselerasjonen. Du måler lengden til pendeltråden med en linjal som har mm-inndeling. Du får følgende avlesninger over 5 forsøk: 98.2 cm, 98.4 cm, 98.3 cm, 98.5 cm, 98.2 cm. Hva er den beste estimatet for lengden og usikkerheten?',
      solution: `**Steg 1: Beregn gjennomsnittet**

$$\\bar{L} = \\frac{98.2 + 98.4 + 98.3 + 98.5 + 98.2}{5} = \\frac{491.6}{5} = 98.32 \\text{ cm}$$

**Steg 2: Vurder instrumentusikkerhet**

Linjalen har mm-inndeling, så minste avlesning er 1 mm = 0.1 cm.
Estimert avlesningsusikkerhet: ±0.05 cm (halve minste inndeling).

**Steg 3: Beregn standardavvik (spredningsmål)**

$$s = \\sqrt{\\frac{\\sum(L_i - \\bar{L})^2}{n-1}}$$

Avvik fra gjennomsnittet:
- $98.2 - 98.32 = -0.12$
- $98.4 - 98.32 = 0.08$
- $98.3 - 98.32 = -0.02$
- $98.5 - 98.32 = 0.18$
- $98.2 - 98.32 = -0.12$

Kvadrerte avvik:
- $(-0.12)^2 = 0.0144$
- $(0.08)^2 = 0.0064$
- $(-0.02)^2 = 0.0004$
- $(0.18)^2 = 0.0324$
- $(-0.12)^2 = 0.0144$

Sum = 0.068

$$s = \\sqrt{\\frac{0.068}{4}} = \\sqrt{0.017} = 0.13 \\text{ cm}$$

**Steg 4: Standardfeil (usikkerhet i gjennomsnittet)**

$$SE = \\frac{s}{\\sqrt{n}} = \\frac{0.13}{\\sqrt{5}} = 0.058 \\approx 0.06 \\text{ cm}$$

**Steg 5: Total usikkerhet**

Den totale usikkerheten er den største av:
- Instrumentusikkerhet: ±0.05 cm
- Standardfeil: ±0.06 cm

Vi bruker ±0.1 cm som et konservativt estimat.

**Steg 6: Rapportering**

Vi runder gjennomsnittet til samme presisjon som usikkerheten:

$$L = 98.3 \\pm 0.1 \\text{ cm}$$

**Signifikante siffer:** 3 signifikante siffer (98.3)

**Relativ usikkerhet:** $\\frac{0.1}{98.3} = 0.001 = 0.1\\%$ (meget god presisjon!)`,
    },
    {
      id: 'fys1-1-1-graf',
      type: 'text',
      content: `# Grafisk fremstilling av data

Grafer er kraftige verktøy for å visualisere og analysere eksperimentelle data.

## Hvorfor bruke grafer?

1. **Visualisering:** Se mønstre og trender umiddelbart
2. **Analyse:** Finn sammenhenger mellom variabler
3. **Kommunikasjon:** Del resultater effektivt
4. **Prediksjon:** Ekstrapolér til ukjente verdier

## Viktige prinsipper

**1. Aksetitler**
- Alltid inkluder enhet: "Tid (s)", "Avstand (m)"
- Bruk beskrivende navn

**2. Akseinndelinger**
- Velg passende skala
- Ikke start nødvendigvis ved null (men vurder om det er meningsfullt)
- Jevnt fordelte merker

**3. Datapunkter**
- Bruk tydelige symboler (●, ■, ▲)
- Inkluder usikkerhetsstolper hvis mulig

**4. Linjer**
- Trekk **beste tilpasning** (best fit), ikke koble punkter direkte
- Linjen trenger ikke gå gjennom alle punkter

**5. Tittel**
- Beskrivende tittel: "Avstand som funksjon av tid for fritt fall"

## Lineær regresjon

Mange fysiske sammenhenger er lineære:
$$y = ax + b$$

**Fremgangsmåte:**
1. Plott data (x på horisontal akse, y på vertikal)
2. Trekk en rett linje som passer best
3. Bestem stigningstall $a$ og y-skjæring $b$

**Stigningstall:**
$$a = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}$$

Velg to punkter på linjen (ikke nødvendigvis datapunkter!)

**Betydning:**
- Stigningstallet har fysisk betydning
- Eksempel: I $v = at + v_0$ er stigningstallet akselerasjonen $a$

## Linearisering

Mange sammenhenger er ikke lineære, men kan lineariseres.

**Eksempel: Kvadratisk sammenheng**

$$s = \\frac{1}{2}at^2$$

Plott $s$ mot $t^2$:
$$s = \\frac{1}{2}a \\cdot t^2$$

Dette er en lineær sammenheng med stigningstall $\\frac{1}{2}a$.`,
    },
    {
      id: 'fys1-1-1-note-kvalitet',
      type: 'note',
      title: 'Kvalitetssikring av eksperimenter',
      content: `**God eksperimentell praksis:**

1. **Gjenta målinger:** Gjør flere forsøk og ta gjennomsnittet
2. **Blind testing:** Hvis mulig, ikke vet hva du "bør" få
3. **Kontrolleksperimenter:** Test uten den aktive faktoren
4. **Kalibrer instrumenter:** Sjekk at måleinstrumentene er nøyaktige
5. **Dokumentér alt:** Skriv ned metode, observasjoner, og rå data
6. **Vær skeptisk:** Spør alltid "Kan det være en annen forklaring?"

**Røde flagg (tegn på dårlig eksperiment):**
- Kun én måling
- Ingen usikkerhetsvurdering
- Resultatene er "for gode" (perfekt samsvar med teori)
- Manglende kontroll av variabler`,
    },
    {
      id: 'fys1-1-1-warning-systematisk',
      type: 'warning',
      title: 'Systematiske feil',
      content: `Systematiske feil er konsistente avvik som påvirker alle målinger likt. De er **vanskelige å oppdage** fordi gjentatte målinger vil gi samme resultatet.

**Eksempler:**
- Tidtaker går konsekvent 0.1 s for sakte
- Linjal er strukket (alle lengder måles for lange)
- Nullpunktsfeil (instrumentet viser ikke null når det skal)

**Hvordan oppdage:**
- Sammenlign med kjent standard
- Bruk forskjellige instrumenter
- La andre gjenta eksperimentet

**Hvordan redusere:**
- Kalibrer instrumenter regelmessig
- Bruk korrekte målemetoder
- Vær bevisst på mulige feilkilder`,
    },
  ],
  exercises: [
    {
      id: 'fys1-1-1-ex-1',
      number: '1',
      type: 'classic',
      difficulty: 'lett',
      task: 'Hva er forskjellen mellom en hypotese og en teori i fysikk? Gi eksempler.',
      solution: `**Hypotese:**

**Definisjon:**
- En testbar forklaring på et fenomen
- En kvalifisert gjetning som kan testes eksperimentelt
- Kan være feil og må da revideres

**Kjennetegn:**
- **Testbar:** Kan undersøkes ved eksperimenter
- **Falsifiserbar:** Kan motbevises hvis feil
- **Spesifikk:** Relatert til et konkret fenomen

**Eksempler:**
- "Tunge objekter faller raskere enn lette objekter" (Aristoteles hypotese - senere motbevist)
- "Lys har konstant hastighet i vakuum" (hypotese før testing)

**Teori:**

**Definisjon:**
- En omfattende forklaring på et sett av fenomener
- Støttet av mange eksperimenter over lang tid
- Den høyeste formen for sikker kunnskap i vitenskap

**Kjennetegn:**
- **Veletablert:** Testet i mange sammenhenger
- **Bred:** Forklarer mange relaterte fenomener
- **Prediktiv:** Forutsier nye fenomener
- **Revidérbar:** Kan forbedres, men sjelden forkastes helt

**Eksempler:**
- **Newtons mekanikk:** Forklarer bevegelse av objekter (fra epler til planeter)
- **Elektromagnetisk teori:** Forklarer elektrisitet, magnetisme, og lys
- **Relativitetsteorien:** Forklarer tid, rom, og tyngdekraft
- **Kvantemekanikk:** Forklarer atomer og subatomære partikler

**Sammenligning:**

| Egenskap | Hypotese | Teori |
|----------|----------|-------|
| Omfang | Smalt, spesifikt | Bredt, omfattende |
| Støtte | Liten eller ingen data | Stor datamengde |
| Status | Tentativ, uprøvd | Veletablert, testet |
| Eksempel | "Lys er en bølge" (før testing) | Newtons mekanikk |

**Viktig misforståelse:**
I dagligtale betyr "teori" ofte en gjetning ("Det er bare en teori!"). I vitenskap er en teori det mest sikre vi har - en teori er en hypotese som har overlevd omfattende testing.

**Utvikling:**
Observasjon → Hypotese → Testing → (hvis støttet av mange eksperimenter) → Teori

**Eksempel på utviklingen:**
1. **Observasjon:** Objekter faller nedover
2. **Hypotese:** Det finnes en kraft som trekker objekter mot jordens sentrum
3. **Testing:** Galileos falleksperimenter, Newtons eple, etc.
4. **Teori:** Newtons gravitasjonsteori (forklarer fall, planetbevegelse, tidevann)`,
      hints: ['Tenk på omfang og datamengde', 'Hypotese = gjetning, Teori = veletablert'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-1-1-ex-2',
      number: '2',
      type: 'classic',
      difficulty: 'lett',
      task: 'Du skal undersøke hvordan temperaturen påvirker hvor raskt is smelter. Identifiser den uavhengige variabelen, avhengige variabelen, og minst tre kontrollvariabler.',
      solution: `**Forskningsspørsmål:**
Hvordan påvirker temperaturen hvor raskt is smelter?

**Uavhengig variabel (det du endrer):**
**Temperaturen i rommet**

Du velger bevisst forskjellige temperaturer, for eksempel:
- 0°C
- 5°C
- 10°C
- 15°C
- 20°C

**Avhengig variabel (det du måler):**
**Tiden det tar for isen å smelte** (eller mengden smeltet is per tidsenhet)

Du måler for eksempel:
- Tid til hele isklumpen er smeltet
- Eller: Volum smeltet vann etter 10 minutter

**Kontrollvariabler (holdes konstante):**

**1. Massen/volumet av is:**
- Samme mengde is i alle forsøk (f.eks. 100 g)
- Hvis du bruker mer is, tar det lengre tid å smelte

**2. Overflatearealet av isen:**
- Samme form på isklumpene (f.eks. kuber med 2×2×2 cm)
- Større overflate gir raskere smelting

**3. Luftfuktigheten:**
- Samme luftfuktighet (hvis mulig)
- Høy fuktighet kan påvirke smeltehastigheten

**4. Luftsirkulasjon:**
- Samme vindforhold (f.eks. ingen vifte)
- Vind øker smeltehastigheten

**5. Type beholder:**
- Samme type glass eller skål
- Materialet kan påvirke varmeoverføring

**6. Starttemperaturen på isen:**
- Isen skal ha samme starttemperatur (f.eks. -18°C fra fryser)

**Eksperimentell oppsett:**

1. Frys like mengder vann til isklumper
2. Plasser rom ved forskjellige temperaturer (eller bruk forskjellige rom)
3. Ta isklumpen ut av fryseren og legg i beholder
4. Mål tiden til isen er helt smeltet
5. Gjenta 3 ganger for hver temperatur (for å redusere tilfeldige feil)

**Forventet resultat:**
Høyere temperatur → Raskere smelting

**Grafisk fremstilling:**
Plot tid til smelting (y-aksen) mot romtemperatur (x-aksen).
Forventet: Negativ sammenheng (høyere temperatur = kortere tid).`,
      hints: ['Hva endrer du?', 'Hva måler du?', 'Hva må være likt?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-1-1-ex-3',
      number: '3',
      type: 'classic',
      difficulty: 'lett',
      task: 'En elev måler lengden på et bord med en linjal og får 152.3 cm. Linjalen har cm-inndeling. Er målingen rapportert med korrekt antall signifikante siffer? Begrunn svaret.',
      solution: `**Svar: Nei, målingen er rapportert med for mange signifikante siffer.**

**Analyse:**

**Instrumentets presisjon:**
- Linjalen har **cm-inndeling** (ikke mm)
- Minste avlesbare enhet: 1 cm
- Avlesningsusikkerhet: ±0.5 cm (halve minste inndeling)

**Rapportert måling:**
- 152.3 cm har **4 signifikante siffer**
- Desimalen (.3) indikerer presisjon til 0.1 cm (mm-nivå)

**Problemet:**
- Du kan ikke måle mer presist enn instrumentet tillater
- En linjal med cm-inndeling kan ikke gi mm-presisjon
- Rapportering av 152.3 cm er **falsk nøyaktighet**

**Korrekt rapportering:**

**Alternativ 1: Uten usikkerhet**
$L = 152 \\text{ cm}$ (3 signifikante siffer)

Dette indikerer at du har målt til nærmeste cm.

**Alternativ 2: Med usikkerhet**
$L = 152 \\pm 1 \\text{ cm}$

Dette viser eksplisitt at du ikke vet desimalen.

**Generell regel:**
**Du kan bare rapportere så mange siffer som instrumentet tillater.**

**Eksempler:**

**Linjal med mm-inndeling:**
- Kan måle til ±0.5 mm = ±0.05 cm
- Rapportér: 152.3 cm (mulig) eller 152.35 cm (hvis du estimerer halve mm)

**Linjal med cm-inndeling:**
- Kan måle til ±0.5 cm
- Rapportér: 152 cm (korrekt)

**Digital linjal med mm-display:**
- Kan måle til ±1 mm = ±0.1 cm
- Rapportér: 152.3 cm (korrekt)

**Merkelapp:**
Vær ærlig om instrumentets begrensninger!`,
      hints: ['Hva er minste inndeling på linjalen?', 'Kan du måle desimaler med cm-inndeling?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-1-1-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'medium',
      task: 'En bil kjører en strekning på $s = 245 \\pm 3$ m på tiden $t = 18.5 \\pm 0.2$ s. Beregn gjennomsnittshastigheten med riktig antall signifikante siffer og usikkerhet.',
      solution: `**Gitt:**
- Strekning: $s = 245 \\pm 3$ m
- Tid: $t = 18.5 \\pm 0.2$ s

**Formel:**
$$v = \\frac{s}{t}$$

**Steg 1: Beregn gjennomsnittshastigheten**

$$v = \\frac{245 \\text{ m}}{18.5 \\text{ s}} = 13.243... \\text{ m/s}$$

Kalkulatoren gir mange desimaler, men vi må avrunde korrekt.

**Steg 2: Beregn relative usikkerheter**

**Relativ usikkerhet i strekning:**
$$\\frac{\\Delta s}{s} = \\frac{3}{245} = 0.0122 = 1.22\\%$$

**Relativ usikkerhet i tid:**
$$\\frac{\\Delta t}{t} = \\frac{0.2}{18.5} = 0.0108 = 1.08\\%$$

**Steg 3: Beregn relativ usikkerhet i hastighet**

For divisjon adderes relative usikkerheter:
$$\\frac{\\Delta v}{v} = \\frac{\\Delta s}{s} + \\frac{\\Delta t}{t} = 0.0122 + 0.0108 = 0.023 = 2.3\\%$$

**Steg 4: Beregn absolutt usikkerhet i hastighet**

$$\\Delta v = v \\times \\frac{\\Delta v}{v} = 13.243 \\times 0.023 = 0.305 \\text{ m/s}$$

Avrund til én signifikant siffer (konvensjon for usikkerhet):
$$\\Delta v \\approx 0.3 \\text{ m/s}$$

**Steg 5: Avrund hastigheten til samme presisjon som usikkerheten**

Usikkerheten er ±0.3 m/s (en desimal), så hastigheten skal også ha én desimal:
$$v = 13.2 \\text{ m/s}$$

**Sluttresultat:**
$$v = 13.2 \\pm 0.3 \\text{ m/s}$$

**Signifikante siffer:**
- Hastigheten har **3 signifikante siffer** (13.2)
- Dette stemmer med dataene (s har 3, t har 3)

**Sjekk:**
- Relativ usikkerhet: $\\frac{0.3}{13.2} = 0.023 = 2.3\\%$ ✓

**Alternativ metode (maksimal og minimal verdi):**

**Maksimal hastighet:**
$$v_{max} = \\frac{s + \\Delta s}{t - \\Delta t} = \\frac{248}{18.3} = 13.55 \\text{ m/s}$$

**Minimal hastighet:**
$$v_{min} = \\frac{s - \\Delta s}{t + \\Delta t} = \\frac{242}{18.7} = 12.94 \\text{ m/s}$$

**Gjennomsnitt:**
$$v = \\frac{13.55 + 12.94}{2} = 13.25 \\text{ m/s} \\approx 13.2 \\text{ m/s}$$

**Usikkerhet:**
$$\\Delta v = \\frac{13.55 - 12.94}{2} = 0.305 \\text{ m/s} \\approx 0.3 \\text{ m/s}$$

Samme resultat! ✓`,
      hints: ['Bruk v = s/t', 'Addér relative usikkerheter ved divisjon', 'Avrund til riktig presisjon'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-1-1-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Du har gjort følgende målinger av diameteren til en kule: 2.34 cm, 2.31 cm, 2.36 cm, 2.33 cm, 2.35 cm. Beregn gjennomsnitt, standardavvik, og rapportér resultatet med usikkerhet.',
      solution: `**Målinger:**
$d_1 = 2.34$ cm
$d_2 = 2.31$ cm
$d_3 = 2.36$ cm
$d_4 = 2.33$ cm
$d_5 = 2.35$ cm

**Steg 1: Beregn gjennomsnittet**

$$\\bar{d} = \\frac{d_1 + d_2 + d_3 + d_4 + d_5}{5}$$

$$\\bar{d} = \\frac{2.34 + 2.31 + 2.36 + 2.33 + 2.35}{5} = \\frac{11.69}{5} = 2.338 \\text{ cm}$$

**Steg 2: Beregn avvikene fra gjennomsnittet**

$$\\Delta d_i = d_i - \\bar{d}$$

| Måling | $d_i$ (cm) | Avvik $\\Delta d_i$ (cm) | $(\\Delta d_i)^2$ (cm²) |
|--------|------------|-------------------------|------------------------|
| 1 | 2.34 | 2.34 - 2.338 = 0.002 | 0.000004 |
| 2 | 2.31 | 2.31 - 2.338 = -0.028 | 0.000784 |
| 3 | 2.36 | 2.36 - 2.338 = 0.022 | 0.000484 |
| 4 | 2.33 | 2.33 - 2.338 = -0.008 | 0.000064 |
| 5 | 2.35 | 2.35 - 2.338 = 0.012 | 0.000144 |

Sum av kvadrerte avvik: $\\sum (\\Delta d_i)^2 = 0.001480$

**Steg 3: Beregn standardavviket**

$$s = \\sqrt{\\frac{\\sum (\\Delta d_i)^2}{n-1}}$$

$$s = \\sqrt{\\frac{0.001480}{5-1}} = \\sqrt{\\frac{0.001480}{4}} = \\sqrt{0.000370} = 0.0192 \\text{ cm}$$

**Steg 4: Beregn standardfeilen (usikkerhet i gjennomsnittet)**

$$SE = \\frac{s}{\\sqrt{n}} = \\frac{0.0192}{\\sqrt{5}} = \\frac{0.0192}{2.236} = 0.0086 \\text{ cm}$$

**Steg 5: Avrund og rapportér**

Standardfeilen er 0.0086 cm. Vi runder til **0.01 cm** (én signifikant siffer i usikkerheten).

Gjennomsnittet skal rundes til samme presisjon:
$$\\bar{d} = 2.338 \\text{ cm} \\rightarrow 2.34 \\text{ cm}$$

**Sluttresultat:**
$$d = 2.34 \\pm 0.01 \\text{ cm}$$

**Tolkning:**
- Gjennomsnittsdiameteren er 2.34 cm
- Usikkerheten (standardfeil) er ±0.01 cm
- Den sanne diameteren ligger sannsynligvis mellom 2.33 cm og 2.35 cm

**Relativ usikkerhet:**
$$\\frac{\\Delta d}{d} = \\frac{0.01}{2.34} = 0.0043 = 0.43\\%$$

Dette er meget god presisjon (mindre enn 0.5%)!

**Merknader:**
- Standardavviket (0.0192 cm) viser spredningen i målingene
- Standardfeilen (0.0086 cm) viser usikkerheten i gjennomsnittet
- Jo flere målinger, desto mindre standardfeil: $SE \\propto \\frac{1}{\\sqrt{n}}$`,
      hints: ['Beregn gjennomsnitt først', 'Finn avvik fra gjennomsnittet', 'Bruk standardavviksformelen'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-1-1-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom systematiske feil og tilfeldige feil. Gi eksempler på hver type og beskriv hvordan de påvirker presisjon og nøyaktighet.',
      solution: `**TILFELDIGE FEIL (Random Errors)**

**Definisjon:**
Feil som varierer på en uforutsigbar måte fra måling til måling.

**Årsaker:**
- Små, ukontrollerbare variasjoner i eksperimentelle forhold
- Menneskelig variasjon i avlesning
- Elektrisk støy i elektroniske instrumenter
- Vibrasjoner
- Temperatursvingninger

**Eksempler:**

1. **Reaksjonstid ved manuell tidtaking:**
   - Du starter og stopper stoppeklokken manuelt
   - Reaksjonstiden varierer fra forsøk til forsøk (0.15 s, 0.18 s, 0.20 s, osv.)
   - Noen ganger for tidlig, noen ganger for sent

2. **Parallaksefeil:**
   - Du leser av en linjal fra litt forskjellige vinkler
   - Avlesningen varierer litt

3. **Elektrisk støy:**
   - Et voltmeter viser 1.53 V, 1.51 V, 1.52 V, 1.54 V i raske målinger

**Kjennetegn:**
- **Symmetriske:** Like sannsynlig over og under sann verdi
- **Uforutsigbare:** Kan ikke forutsi neste avvik
- **Reduseres ved gjentatt måling:** Gjennomsnittet nærmer seg sann verdi

**Påvirkning:**
- **Reduserer presisjon** (større spredning i data)
- **Påvirker ikke nøyaktighet** (hvis du tar gjennomsnittet)

**Hvordan håndtere:**
- **Gjenta målinger mange ganger** og beregn gjennomsnittet
- Bruk statistikk (standardavvik, standardfeil)
- Jo flere målinger, desto mindre usikkerhet: $SE = \\frac{s}{\\sqrt{n}}$

---

**SYSTEMATISKE FEIL (Systematic Errors)**

**Definisjon:**
Feil som konsekvent skyver målingene i samme retning (alltid for høy eller alltid for lav).

**Årsaker:**
- Ukalibrerte instrumenter
- Feil målemetode
- Miljøforhold
- Observatørfeil (f.eks. alltid lese for høyt)

**Eksempler:**

1. **Ukalibrert stoppeklokke:**
   - Klokken går 0.1 s for sakte per måling
   - Alle målinger blir 0.1 s for høye
   - Konstant feil

2. **Nullpunktsfeil:**
   - En vekt viser 2 g når den er tom (skulle vise 0 g)
   - Alle målinger blir 2 g for høye

3. **Strukket linjal:**
   - Linjalen er varmet opp og utvidet
   - Alle lengdemålinger blir for lange

4. **Konstant reaksjonstid:**
   - En observatør stopper alltid klokken 0.15 s for sent (ikke varierende)

**Kjennetegn:**
- **Konsistente:** Samme avvik hver gang
- **Ensrettet:** Alltid for høy eller alltid for lav
- **Reduseres IKKE ved gjentatt måling:** Gjennomsnittet er fortsatt feil

**Påvirkning:**
- **Reduserer nøyaktighet** (langt fra sann verdi)
- **Påvirker ikke presisjon** (målingene kan være meget like hverandre)

**Hvordan håndtere:**
- **Kalibrer instrumenter** mot kjente standarder
- **Bruk korrekte målemetoder**
- **Identifiser mulige feilkilder** før eksperimentet
- **La andre gjenta eksperimentet** med andre instrumenter
- **Korrigér for kjente feil** (f.eks. trekk fra nullpunktsfeil)

---

**SAMMENLIGNING:**

| Egenskap | Tilfeldige feil | Systematiske feil |
|----------|-----------------|-------------------|
| Retning | Begge retninger (symmetrisk) | Én retning (ensrettet) |
| Variasjon | Varierer fra måling til måling | Konstant |
| Presisjon | Reduserer | Påvirker ikke |
| Nøyaktighet | Påvirker ikke (med gjennomsnitt) | Reduserer |
| Reduseres ved gjentatt måling | Ja | Nei |
| Oppdagelse | Lett (se spredning) | Vanskelig |
| Løsning | Gjenta mange ganger | Kalibrer, forbedre metode |

**VISUELLE EKSEMPLER (Skyteskive-analogi):**

**1. Høy presisjon, høy nøyaktighet:**
- Piler tett sammen nær blink
- Små tilfeldige feil, ingen systematiske feil
- **Ideelt!**

**2. Lav presisjon, høy nøyaktighet:**
- Piler spredt, men sentrert rundt blink
- Store tilfeldige feil, ingen systematiske feil
- **Gjennomsnitt riktig**

**3. Høy presisjon, lav nøyaktighet:**
- Piler tett sammen, men langt fra blink
- Små tilfeldige feil, stor systematisk feil
- **Konsistent feil**

**4. Lav presisjon, lav nøyaktighet:**
- Piler spredt og langt fra blink
- Store tilfeldige feil og systematisk feil
- **Dårlig eksperiment**

**PRAKTISK EKSEMPEL: Måling av tyngdeakselerasjon**

**Scenario:** Du måler tiden for et fallende objekt.

**Tilfeldige feil:**
- Reaksjonstiden varierer: 0.45 s, 0.48 s, 0.46 s, 0.47 s
- Gjennomsnittet er nær sann verdi: 0.465 s

**Systematiske feil:**
- Stoppeklokken starter 0.05 s for sent (alltid)
- Alle målinger er 0.05 s for korte
- Gjennomsnittet er fortsatt feil

**Resultat:**
- Tilfeldige feil gir spredning, men riktig gjennomsnitt
- Systematiske feil gir feil gjennomsnitt`,
      hints: ['Tenk på varierende vs. konstant', 'Tenk på presisjon vs. nøyaktighet'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-1-1-ex-7',
      number: '7',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En elev måler tiden det tar for en ball å falle fra forskjellige høyder. Resultatene er: Fra 1.0 m: 0.45 s, fra 2.0 m: 0.64 s, fra 3.0 m: 0.78 s, fra 4.0 m: 0.90 s, fra 5.0 m: 1.01 s. Teorien sier at $h = \\frac{1}{2}gt^2$. Bruk grafisk metode til å beregne tyngdeakselerasjonen $g$ med usikkerhet.',
      solution: `**Gitt:**

| Høyde $h$ (m) | Tid $t$ (s) |
|---------------|-------------|
| 1.0 | 0.45 |
| 2.0 | 0.64 |
| 3.0 | 0.78 |
| 4.0 | 0.90 |
| 5.0 | 1.01 |

**Teoretisk sammenheng:**
$$h = \\frac{1}{2}gt^2$$

**Steg 1: Linearisering**

For å bruke lineær regresjon, omformer vi til en lineær sammenheng.

Løs for $h$ som funksjon av $t^2$:
$$h = \\frac{1}{2}g \\cdot t^2$$

Dette er på formen $y = ax$ med:
- $y = h$
- $x = t^2$
- $a = \\frac{1}{2}g$ (stigningstall)
- Ingen konstantledd ($b = 0$)

**Steg 2: Beregn $t^2$ for hver måling**

| Høyde $h$ (m) | Tid $t$ (s) | $t^2$ (s²) |
|---------------|-------------|------------|
| 1.0 | 0.45 | 0.2025 |
| 2.0 | 0.64 | 0.4096 |
| 3.0 | 0.78 | 0.6084 |
| 4.0 | 0.90 | 0.8100 |
| 5.0 | 1.01 | 1.0201 |

**Steg 3: Plot $h$ mot $t^2$**

Plott høyde (y-aksen) mot $t^2$ (x-aksen).
Dataene skal ligge på en rett linje som går gjennom origo.

**Steg 4: Beregn stigningstall (minste kvadraters metode)**

For en linje gjennom origo ($h = a \\cdot t^2$):

$$a = \\frac{\\sum h_i t_i^2}{\\sum t_i^4}$$

**Beregninger:**

| $h$ (m) | $t^2$ (s²) | $h \\cdot t^2$ (m·s²) | $t^4$ (s⁴) |
|---------|------------|---------------------|-----------|
| 1.0 | 0.2025 | 0.2025 | 0.0410 |
| 2.0 | 0.4096 | 0.8192 | 0.1678 |
| 3.0 | 0.6084 | 1.8252 | 0.3702 |
| 4.0 | 0.8100 | 3.2400 | 0.6561 |
| 5.0 | 1.0201 | 5.1005 | 1.0406 |

$$\\sum h_i t_i^2 = 11.1874$$
$$\\sum t_i^4 = 2.2757$$

$$a = \\frac{11.1874}{2.2757} = 4.915 \\text{ m/s}^2$$

**Steg 5: Beregn tyngdeakselerasjonen**

Siden $a = \\frac{1}{2}g$:

$$g = 2a = 2 \\times 4.915 = 9.83 \\text{ m/s}^2$$

**Steg 6: Vurder usikkerhet**

**Metode 1: Residualer (avvik fra linjen)**

For hver måling, beregn forventet $h$ og residualen:

$$h_{\\text{beregnet}} = a \\cdot t^2 = 4.915 \\cdot t^2$$

| $h_{\\text{målt}}$ (m) | $h_{\\text{beregnet}}$ (m) | Residual (m) | Residual² (m²) |
|---------------------|-------------------------|--------------|----------------|
| 1.0 | 4.915 × 0.2025 = 0.995 | 0.005 | 0.000025 |
| 2.0 | 4.915 × 0.4096 = 2.013 | -0.013 | 0.000169 |
| 3.0 | 4.915 × 0.6084 = 2.990 | 0.010 | 0.000100 |
| 4.0 | 4.915 × 0.8100 = 3.981 | 0.019 | 0.000361 |
| 5.0 | 4.915 × 1.0201 = 5.014 | -0.014 | 0.000196 |

$$\\sum (\\text{Residual})^2 = 0.000851$$

**Standardfeil i stigningstall:**

$$\\sigma_a = \\sqrt{\\frac{\\sum (\\text{Residual})^2}{(n-1) \\sum t_i^4}}$$

$$\\sigma_a = \\sqrt{\\frac{0.000851}{4 \\times 2.2757}} = \\sqrt{\\frac{0.000851}{9.103}} = \\sqrt{0.0000935} = 0.0097 \\text{ m/s}^2$$

**Usikkerhet i $g$:**

$$\\sigma_g = 2 \\sigma_a = 2 \\times 0.0097 = 0.019 \\text{ m/s}^2$$

Avrund til én signifikant siffer: $\\sigma_g \\approx 0.02$ m/s²

**Steg 7: Sluttresultat**

$$g = 9.83 \\pm 0.02 \\text{ m/s}^2$$

**Vurdering:**

**Referanseverdi:** $g = 9.81$ m/s² (standard)

**Vårt resultat:** $g = 9.83 \\pm 0.02$ m/s²

**Avvik:** $9.83 - 9.81 = 0.02$ m/s²

Avviket er innenfor usikkerheten (±0.02), så resultatet er **konsistent** med referanseverdien.

**Mulige feilkilder:**
- Luftmotstand (ikke neglisjerbar for høye høyder)
- Reaksjonstid ved tidtaking
- Måleusikkerhet i høyde
- Systematisk feil i stoppeklokke

**Forbedringer:**
- Bruk elektronisk tidtaker (lyssensor)
- Gjør eksperimentet i vakuum
- Flere målinger per høyde
- Større høyder for mindre relativ usikkerhet`,
      hints: ['Linearisér: plott h mot t²', 'Finn stigningstallet', 'g = 2a'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-1-1-ex-8',
      number: '8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Design et eksperiment for å teste om en ball fra forskjellig høyde treffer bakken med forskjellig hastighet. Beskriv hypotese, variabler, utstyr, metode, forventet resultat, og mulige feilkilder.',
      solution: `**EKSPERIMENTDESIGN: Fallhastighet som funksjon av høyde**

---

**1. FORSKNINGSSPØRSMÅL:**
Hvordan påvirker fallhøyden hastigheten en ball har når den treffer bakken?

---

**2. HYPOTESE:**

**Hypotese:** Fallhastigheten øker med økende fallhøyde.

**Teoretisk grunnlag:**
Fra kinematikk (energibevaring):
$$v^2 = v_0^2 + 2gh$$

Hvis ballen slippes fra hvile ($v_0 = 0$):
$$v = \\sqrt{2gh}$$

**Prediksjon:**
- Fallhastigheten er proporsjonal med kvadratroten av høyden
- Dobbel høyde → 1.4× hastighet
- Firedobbel høyde → 2× hastighet

---

**3. VARIABLER:**

**Uavhengig variabel:**
Fallhøyden $h$ (m)
- Verdier: 0.5 m, 1.0 m, 1.5 m, 2.0 m, 2.5 m

**Avhengig variabel:**
Hastigheten $v$ (m/s) når ballen treffer bakken

**Kontrollvariabler:**
1. **Ballen:** Samme ball (samme masse, størrelse, form)
2. **Starttilstand:** Slippes fra hvile (ikke kastes)
3. **Miljø:** Samme rom (temperatur, lufttrykk)
4. **Målemetode:** Samme hastighetsmåler
5. **Bakkeoverflate:** Samme flate

---

**4. UTSTYR:**

**Hovedutstyr:**
- Ball (f.eks. tennisball)
- Målebånd eller linjal (for høydemåling)
- Hastighetsmåler (flere alternativer):
  - **Alternativ A:** Lysbom med tidtaker (måler tid over kjent distanse)
  - **Alternativ B:** Kamera med høy bildefrekvens (analysér video)
  - **Alternativ C:** Hastighetsmåler-sensor (ultralyd eller laser)
  - **Alternativ D:** Smartphone med tilhørende app (Phyphox)

**Støtteutstyr:**
- Stativ eller veggmontering for å sikre loddrett fall
- Slippmekanisme (f.eks. elektromagnet eller klemme)
- Datamaskin for dataanalyse

---

**5. METODE:**

**Oppsett:**
1. Monter hastighetsmåleren rett over bakken (f.eks. 2 cm over)
2. Monter slippmekanismen på ønsket høyde
3. Mål høyden fra bunnen av ballen (ved slipp) til bakken

**Prosedyre:**
1. Still inn fallhøyde $h_1 = 0.5$ m
2. Plasser ballen i slippmekanismen (sørg for at den er i hvile)
3. Slipp ballen
4. Mål hastigheten rett før ballen treffer bakken
5. Registrér målingen
6. Gjenta 5 ganger for samme høyde (reduserer tilfeldige feil)
7. Beregn gjennomsnittshastighet og standardavvik
8. Øk høyden til $h_2 = 1.0$ m
9. Gjenta trinn 2-7
10. Fortsett for alle høyder

**Datainnsamling:**
Lag en tabell:

| Høyde $h$ (m) | Forsøk 1 (m/s) | Forsøk 2 (m/s) | Forsøk 3 (m/s) | Forsøk 4 (m/s) | Forsøk 5 (m/s) | Gjennomsnitt $\\bar{v}$ (m/s) | Std.avvik $s$ (m/s) |
|---------------|----------------|----------------|----------------|----------------|----------------|---------------------------|------------------|
| 0.5 | | | | | | | |
| 1.0 | | | | | | | |
| 1.5 | | | | | | | |
| 2.0 | | | | | | | |
| 2.5 | | | | | | | |

---

**6. ANALYSE:**

**A) Grafisk fremstilling:**

**Graf 1: $v$ mot $h$**
- Plott hastighet (y-aksen) mot høyde (x-aksen)
- Forventet form: Ikke-lineær (kvadratrot)

**Graf 2: $v^2$ mot $h$ (linearisert)**
- Plott $v^2$ (y-aksen) mot høyde (x-aksen)
- Forventet: Lineær sammenheng med stigningstall $2g$

**B) Beregn tyngdeakselerasjon:**

Fra $v^2 = 2gh$:
$$g = \\frac{v^2}{2h}$$

For hver høyde, beregn $g$ og finn gjennomsnittet.

**Alternativt:** Bruk lineær regresjon på $v^2$ vs. $h$:
- Stigningstall $a = 2g$
- $g = \\frac{a}{2}$

**C) Sammenlign med teoretisk verdi:**
- Referanseverdi: $g = 9.81$ m/s²
- Beregn prosentvis avvik: $\\frac{|g_{\\text{målt}} - g_{\\text{teori}}|}{g_{\\text{teori}}} \\times 100\\%$

---

**7. FORVENTET RESULTAT:**

**Teoretiske verdier:**

| Høyde $h$ (m) | Hastighet $v = \\sqrt{2gh}$ (m/s) |
|---------------|--------------------------------|
| 0.5 | $\\sqrt{2 \\times 9.81 \\times 0.5} = 3.13$ |
| 1.0 | $\\sqrt{2 \\times 9.81 \\times 1.0} = 4.43$ |
| 1.5 | $\\sqrt{2 \\times 9.81 \\times 1.5} = 5.42$ |
| 2.0 | $\\sqrt{2 \\times 9.81 \\times 2.0} = 6.26$ |
| 2.5 | $\\sqrt{2 \\times 9.81 \\times 2.5} = 7.00$ |

**Graf:** $v^2$ vs. $h$ skal gi rett linje med stigningstall $\\approx 19.6$ m/s².

---

**8. MULIGE FEILKILDER:**

**A) Luftmotstand:**
- **Effekt:** Reduserer hastigheten (spesielt ved høye høyder)
- **Løsning:** Bruk tung, kompakt ball (metallkule bedre enn tennisball)

**B) Reaksjonstid:**
- **Effekt:** Hastighetsmåleren kan ha forsinkelse
- **Løsning:** Bruk elektronisk sensor (ikke manuell avlesning)

**C) Måling av høyde:**
- **Effekt:** Unøyaktig høydemåling påvirker $g$-beregningen
- **Løsning:** Mål fra ballens bunnsenter til bakken

**D) Rotasjon:**
- **Effekt:** Ball kan rotere under fall, påvirker luftmotstand
- **Løsning:** Slipp ballen uten rotasjon (bruk elektromagnet)

**E) Horisontal bevegelse:**
- **Effekt:** Ballen faller ikke helt loddrett
- **Løsning:** Bruk stativ og slippmekanisme

**F) Instrumentusikkerhet:**
- **Effekt:** Hastighetsmåleren har begrenset presisjon
- **Løsning:** Bruk kalibrert instrument, gjenta målinger

**G) Systematisk feil i hastighetsmåler:**
- **Effekt:** Konsistent avvik i alle målinger
- **Løsning:** Kalibrer mot kjent hastighet

---

**9. KONKLUSJON:**

**Hvis hypotesen er riktig:**
- $v$ øker med $h$
- $v^2$ er lineært proporsjonal med $h$
- Stigningstallet gir $g \\approx 9.81$ m/s²

**Hvis hypotesen er feil:**
- Data passer ikke modellen
- Revider hypotesen (kanskje luftmotstand er betydelig)

---

**10. UTVIDELSER:**

**A) Test forskjellige baller:**
- Ulik masse, størrelse, form
- Undersøk luftmotstandens effekt

**B) Bruk videoanalyse:**
- Film fallet med høyhastighetskamera
- Analysér bevegelsen punkt for punkt

**C) Gjør eksperimentet i vakuum:**
- Eliminér luftmotstand helt
- Sammenlign med resultat i luft`,
      hints: ['Tenk systematisk gjennom alle trinn', 'Husk kontrollvariabler', 'Planlegg for usikkerhet'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};
