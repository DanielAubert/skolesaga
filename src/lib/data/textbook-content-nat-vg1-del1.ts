/**
 * Tekstbok innhold for Naturfag VG1 DEL 1
 * Seksjon 1: Naturvitenskapens tenkemåte (1.1-1.5)
 * Seksjon 2: Bølger, stråling og radioaktivitet (2.1-2.7)
 *
 * Dekker LK20 kompetansemål for NAT01-04.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// SEKSJON 1: Naturvitenskapens tenkemåte
// ============================================================================

export const CHAPTER_NAT_VG1_1_1: TextbookChapter = {
  id: 'nat-vg1-1-1',
  courseId: 'nat-vg1',
  chapterNumber: '1.1',
  title: 'Den naturvitenskapelige metoden',
  description: 'Lær om hvordan naturvitenskapen bygger kunnskap gjennom observasjoner, hypoteser, eksperimenter og konklusjoner.',
  estimatedMinutes: 90,
  competenceGoals: ['utforske en selvvalgt naturfaglig problemstilling, presentere funn og argumentere for valg av metoder'],
  content: [
    {
      id: 'nat-vg1-1-1-intro',
      type: 'text',
      content: `## Hva er naturvitenskap?

Har du noen gang lurt på hvorfor himmelen er blå, hvorfor is flyter på vann, eller hvordan en vaksine virker? Mennesker har alltid stilt spørsmål om naturen rundt seg. Det som skiller naturvitenskap fra andre måter å forstå verden på, er **metoden** vi bruker for å finne svar.

Naturvitenskap handler om å forstå naturen gjennom systematiske undersøkelser. I motsetning til synsing, tradisjon eller tro, bygger naturvitenskapen på observasjoner og eksperimenter som kan **gjentas og etterprøves** av andre. Dette kalles **reproduserbarhet** og er grunnleggende for all vitenskap.

**I dette kapittelet skal du lære:**
- Hva som kjennetegner den naturvitenskapelige metoden
- Hvordan man formulerer gode hypoteser og problemstillinger
- Forskjellen mellom uavhengige, avhengige og kontrollvariabler
- Hvordan man planlegger og gjennomfører et systematisk eksperiment
- Betydningen av kontrollgrupper og gjentakelser

**Den naturvitenskapelige metoden** er en systematisk fremgangsmåte som sikrer at kunnskapen vi bygger er pålitelig og etterprøvbar. Metoden har utviklet seg over flere hundre år og er i dag grunnlaget for all moderne forskning.`,
    },
    {
      id: 'nat-vg1-1-1-def-1',
      type: 'definition',
      title: 'Stegene i den naturvitenskapelige metoden',
      content: `Den naturvitenskapelige metoden følger en systematisk prosess:

**1. Observasjon**
Alt starter med å legge merke til noe i naturen. En observasjon kan være kvalitativ (beskrivende) eller kvantitativ (målbar).
- *Kvalitativ:* "Plantene i vinduet er høyere enn de i skyggen"
- *Kvantitativ:* "Plantene i vinduet er 15 cm høyere etter 4 uker"

**2. Problemstilling**
Formuler et presist spørsmål basert på observasjonen. En god problemstilling er:
- Spesifikk og avgrenset
- Mulig å undersøke
- Relevant og interessant

**3. Hypotese**
En hypotese er en testbar påstand som foreslår en forklaring. Den bør:
- Være formulert som en påstand (ikke et spørsmål)
- Kunne testes med et eksperiment
- Kunne motbevises (falsifiserbar)

**4. Eksperiment**
Design et forsøk for å teste hypotesen. Et godt eksperiment:
- Tester kun én variabel om gangen
- Har en kontrollgruppe
- Gjentas flere ganger for pålitelighet

**5. Datainnsamling og analyse**
Samle inn data systematisk og analyser resultatene. Se etter mønstre og sammenhenger.

**6. Konklusjon**
Vurder om resultatene støtter eller motbeviser hypotesen. En god konklusjon:
- Refererer tilbake til hypotesen
- Er basert på dataene
- Diskuterer usikkerheter og feilkilder`,
    },
    {
      id: 'nat-vg1-1-1-def-2',
      type: 'definition',
      title: 'Variabler i eksperimenter',
      content: `I et eksperiment må vi kontrollere variablene nøye for å kunne trekke sikre konklusjoner.

**Uavhengig variabel (det vi endrer)**
Dette er faktoren vi med vilje endrer for å se hvilken effekt den har. Vi kaller den også "testvariabelen".
- Det er det vi vil undersøke effekten av
- I et godt eksperiment endrer vi bare én uavhengig variabel

**Avhengig variabel (det vi måler)**
Dette er resultatet eller effekten vi måler. Den "avhenger" av den uavhengige variabelen.
- Det er det vi observerer og registrerer
- Må kunne måles eller observeres objektivt

**Kontrollvariabler (det vi holder konstant)**
Alt annet som kan påvirke resultatet må holdes likt i alle forsøksgruppene.
- Sikrer at vi tester det vi tror vi tester
- Jo flere kontrollvariabler vi identifiserer, jo mer pålitelig blir eksperimentet

**Eksempel - teste lyseffekt på plantevekst:**
- *Uavhengig variabel:* Mengde lys (f.eks. 4, 8, 12 timer daglig)
- *Avhengig variabel:* Plantens høyde etter 4 uker
- *Kontrollvariabler:* Vannmengde, temperatur, jordtype, planteart, pottstørrelse, gjødsel

**Kontrollgruppe:**
En gruppe som ikke utsettes for den faktoren vi tester. Denne gir et referansepunkt å sammenligne med.`,
    },
    {
      id: 'nat-vg1-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Undersøkelse av løsningshastighet',
      problem: 'En elev observerer at sukker ser ut til å løse seg raskere i te enn i kaldt vann. Hun vil undersøke dette nærmere. Hvordan kan hun designe et eksperiment for å teste om vanntemperaturen påvirker hvor raskt sukker løser seg?',
      solution: `**Observasjon:** Sukker ser ut til å løse seg raskere i varm te enn i kaldt vann.

**Problemstilling:** Hvordan påvirker vanntemperaturen løsningshastigheten til sukker?

**Hypotese:** Sukker løser seg raskere i varmere vann fordi høyere temperatur gir molekylene mer energi til å bryte bindingene i sukkerkrystallene.

**Eksperimentdesign:**

*Utstyr:*
- 9 like glass
- Termometer
- Stoppeklokke
- Vekt
- 9 like store sukkerbiter (eller 9 × 5 g sukker)
- Vann ved ulike temperaturer

*Variabler:*
- Uavhengig: Vanntemperatur (5°C, 20°C, 40°C)
- Avhengig: Tid til sukkeret er fullstendig oppløst
- Kontroll: Vannmengde (200 mL), sukkermengde, omrøring (ingen), glastype

*Fremgangsmåte:*
1. Mål opp 200 mL vann i hvert glass
2. Juster temperaturen til 5°C, 20°C og 40°C (3 glass av hver)
3. Tilsett én sukkerbit til hvert glass samtidig som du starter klokken
4. Registrer tiden når sukkeret er fullstendig oppløst
5. Gjenta 3 ganger for hver temperatur (derfor 9 glass totalt)

**Resultater:**
| Temperatur | Forsøk 1 | Forsøk 2 | Forsøk 3 | Gjennomsnitt |
|------------|----------|----------|----------|--------------|
| 5°C        | 295 s    | 282 s    | 287 s    | 288 s        |
| 20°C       | 152 s    | 145 s    | 147 s    | 148 s        |
| 40°C       | 58 s     | 63 s     | 62 s     | 61 s         |

**Analyse:**
Ved å øke temperaturen fra 5°C til 40°C, reduseres løsningstiden fra 288 s til 61 s. Dette er nesten 5 ganger raskere. Resultatene viser en klar sammenheng mellom temperatur og løsningshastighet.

**Konklusjon:**
Resultatene støtter hypotesen. Sukker løser seg betydelig raskere i varmere vann. Ved 40°C løser sukkeret seg nesten 5 ganger raskere enn ved 5°C. Dette skyldes at vannmolekylene beveger seg raskere ved høyere temperatur og dermed bryter sukkerkrystallene raskere.

**Mulige feilkilder:**
- Sukkerkornene kan ha vært litt ulike i størrelse
- Temperaturen kan ha endret seg under forsøket
- Vanskelig å avgjøre nøyaktig når sukkeret er helt oppløst`,
    },
    {
      id: 'nat-vg1-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identifiser variablene i dette eksperimentet: "En elev undersøker om plantevekst påvirkes av musikk. Hun dyrker to like planter, den ene med klassisk musikk, den andre i stillhet, og måler høyden etter 4 uker."',
        subTasks: [
          { label: 'a', task: 'Hva er den uavhengige variabelen?', solution: 'Musikk (med/uten klassisk musikk). Dette er faktoren eleven bevisst endrer mellom de to gruppene.' },
          { label: 'b', task: 'Hva er den avhengige variabelen?', solution: 'Plantens høyde etter 4 uker. Dette er det eleven måler for å se effekten av musikken.' },
          { label: 'c', task: 'Nevn minst tre kontrollvariabler', solution: 'Lys (mengde og type), vannmengde, temperatur, jordtype, plantetype/art, pottstørrelse, gjødsel, luftfuktighet, startpunkt (like store planter i starten).' },
          { label: 'd', task: 'Hva er svakheten med å bare bruke én plante i hver gruppe?', solution: 'Med bare én plante i hver gruppe kan vi ikke vite om forskjellen skyldes musikken eller tilfeldige variasjoner mellom individuelle planter. Vi bør ha flere planter i hver gruppe og beregne gjennomsnitt.' },
        ],
        solution: 'Uavhengig variabel: musikk. Avhengig variabel: plantehøyde. Kontrollvariabler: lys, vann, temperatur, jordtype m.m. Svakheten er at man trenger flere planter for å få pålitelige resultater.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Du observerer at brødskiver mugner raskere i kjøkkenskapet enn i kjøleskapet. Formuler en problemstilling og en testbar hypotese basert på denne observasjonen.',
        hints: ['Tenk på hva som er forskjellig mellom de to stedene', 'Formuler hypotesen som en påstand som kan testes'],
        solution: `**Problemstilling:** "Hvordan påvirker temperatur veksthastigheten til muggsopp på brød?"

**Hypotese:** "Muggsopp vokser raskere ved romtemperatur (ca. 20°C) enn ved kjøleskaptemperatur (ca. 4°C)."

Merk: Hypotesen er testbar fordi vi kan plassere like brødskiver ved ulike temperaturer og måle hvor raskt mugg utvikler seg. Den er også falsifiserbar - hvis muggen vokser like raskt eller raskere i kjøleskapet, er hypotesen motbevist.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-1-def-3',
      type: 'definition',
      title: 'Kontrollgrupper og gjentakelser',
      content: `**Kontrollgruppe**
En kontrollgruppe er en gruppe som ikke utsettes for den faktoren vi tester. Den gir et referansepunkt å sammenligne med.

*Eksempel:* Hvis du tester om et nytt gjødsel øker plantevekst:
- Testgruppe: Planter som får det nye gjødselet
- Kontrollgruppe: Planter som ikke får gjødsel (eller får standard gjødsel)

Uten kontrollgruppe kan du ikke vite om effekten skyldes gjødselet eller andre faktorer.

**Placeboeffekt**
I medisinske forsøk brukes ofte placebo (virkningsløs behandling) fordi troen på at man får behandling kan gi effekt i seg selv. Kontrollgruppen får placebo for å kunne skille reell effekt fra placeboeffekt.

**Gjentakelser (replikasjoner)**
Et enkelt forsøk kan gi tilfeldige resultater. Ved å gjenta forsøket flere ganger kan vi:
- Beregne gjennomsnitt som er mer pålitelig
- Identifisere avvikende målinger (uteliggere)
- Beregne usikkerhet/standardavvik
- Øke tilliten til konklusjonen

*Tommelfingerregel:* Gjenta minst 3 ganger, helst 5 eller flere.

**Blindforsøk**
- *Enkeltblind:* Forsøkspersonene vet ikke om de er i test- eller kontrollgruppen
- *Dobbeltblind:* Hverken forsøkspersonene eller forskerne vet hvem som er i hvilken gruppe

Blindforsøk reduserer risikoen for at forventninger påvirker resultatene.`,
    },
    {
      id: 'nat-vg1-1-1-example-2',
      type: 'example',
      title: 'Eksempel: Viktigheten av kontrollgruppe',
      problem: 'En produsent hevder at et nytt energidrikk-tilskudd forbedrer prestasjonen i 100-meterløp. De viser til en studie der 10 løpere tok tilskuddet i 4 uker og forbedret tidene sine med gjennomsnittlig 0,3 sekunder. Er dette bevis for at tilskuddet virker?',
      solution: `**Analyse av studien:**

Studien har flere svakheter som gjør at vi ikke kan konkludere med at tilskuddet virker:

**1. Manglende kontrollgruppe**
Uten en kontrollgruppe som ikke tok tilskuddet, vet vi ikke om forbedringen skyldes:
- Tilskuddet
- Naturlig forbedring gjennom trening
- Motivasjonseffekt av å delta i en studie
- Placeboeffekt (troen på at tilskuddet virker)

**2. Løsning - bedre studiedesign:**
- 20 løpere deles tilfeldig i to grupper
- Testgruppe (10 løpere): Får det virkelige tilskuddet
- Kontrollgruppe (10 løpere): Får placebo (ser likt ut, men uten virkestoff)
- Verken løperne eller de som måler tidene vet hvem som får hva (dobbeltblind)
- Alle trener likt i 4 uker
- Sammenlign forbedringen mellom gruppene

**3. Statistisk signifikans**
Selv med kontrollgruppe må vi sjekke om forskjellen er statistisk signifikant - altså om den er stor nok til at den sannsynligvis ikke skyldes tilfeldigheter.

**Konklusjon:**
Den opprinnelige studien er utilstrekkelig som bevis. Uten kontrollgruppe kan vi ikke trekke noen sikre konklusjoner om tilskuddets effekt.`,
    },
    {
      id: 'nat-vg1-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Vurder følgende hypoteser. Er de testbare og falsifiserbare? Begrunn svaret.',
        subTasks: [
          { label: 'a', task: '"Planter vokser bedre når de får kjærlighet"', solution: 'Ikke testbar/falsifiserbar i sin nåværende form. "Kjærlighet" er ikke målbart eller presist definert. Må omformuleres, f.eks.: "Planter som snakkes til daglig vokser høyere enn planter som ikke snakkes til."' },
          { label: 'b', task: '"Saltvann fryser ved lavere temperatur enn ferskvann"', solution: 'Testbar og falsifiserbar. Vi kan enkelt måle frysepunktet til saltvann og ferskvann og sammenligne. Hvis saltvann fryser ved samme eller høyere temperatur, er hypotesen falsifisert.' },
          { label: 'c', task: '"Det finnes usynlige vesener som påvirker eksperimenter uten at det kan måles"', solution: 'Ikke falsifiserbar. Hvis effekten per definisjon ikke kan måles, kan hypotesen aldri testes eller motbevises. Dette er ikke en vitenskapelig hypotese.' },
        ],
        solution: 'a) Ikke testbar - må omformuleres med målbare termer. b) Testbar og god hypotese. c) Ikke falsifiserbar - ikke vitenskapelig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Du vil undersøke om koffein påvirker reaksjonstiden. Design et eksperiment med kontrollgruppe.',
        subTasks: [
          { label: 'a', task: 'Formuler en hypotese', solution: 'Hypotese: "Personer som inntar koffein har kortere reaksjonstid enn personer som ikke inntar koffein."' },
          { label: 'b', task: 'Beskriv testgruppen og kontrollgruppen', solution: 'Testgruppe: Deltakere som drikker kaffe med koffein. Kontrollgruppe: Deltakere som drikker koffeinfri kaffe (placebo) som smaker likt.' },
          { label: 'c', task: 'Identifiser minst fire kontrollvariabler', solution: 'Mengde kaffe (f.eks. 2 dl), tidspunkt på dagen, søvn natten før, alder på deltakere, måltid før testen, type reaksjonstest, ventetid etter inntak før test.' },
          { label: 'd', task: 'Forklar hvorfor placebo (koffeinfri kaffe) er viktig', solution: 'Placebo er viktig fordi selve opplevelsen av å drikke kaffe og forventningen om å bli mer opplagt kan påvirke reaksjonstiden (placeboeffekt). Med placebo kan vi skille den reelle koffeineffekten fra forventningseffekten.' },
        ],
        solution: 'Et godt eksperiment med hypotese, test- og kontrollgruppe med placebo, og kontrollerte variabler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-1-text-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Nøkkelbegreper:**
- **Den naturvitenskapelige metoden:** Systematisk fremgangsmåte: observasjon, problemstilling, hypotese, eksperiment, analyse, konklusjon
- **Hypotese:** En testbar påstand som kan støttes eller forkastes gjennom eksperimenter
- **Uavhengig variabel:** Faktoren vi endrer med vilje
- **Avhengig variabel:** Det vi måler (resultatet)
- **Kontrollvariabler:** Alt som holdes konstant
- **Kontrollgruppe:** Gruppe som ikke utsettes for testvariabelen, brukes som referanse
- **Reproduserbarhet:** Andre skal kunne gjenta forsøket og få samme resultat
- **Falsifiserbarhet:** En hypotese må kunne motbevises for å være vitenskapelig

**Det viktigste å huske:**
1. En god hypotese er testbar og kan motbevises
2. Et godt eksperiment tester bare én variabel om gangen
3. Kontrollgrupper og gjentakelser gir pålitelige resultater
4. Vitenskap er en prosess - konklusjoner kan revideres med ny kunnskap`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-1-ex-5',
        number: '5',
        type: 'classic',
        task: `En forsker publiserer en studie som viser at barn som spiser frokost gjør det bedre på skolen. Hun har sammenlignet karakterene til 500 barn som spiser frokost med 500 barn som ikke spiser frokost.

a) Er dette bevis for at frokost gjør barn flinkere?
b) Hvilke andre faktorer kan forklare sammenhengen?
c) Hvordan ville du designet en bedre studie?`,
        hints: ['Tenk på forskjellen mellom korrelasjon og kausalitet', 'Hva annet kan være forskjellig mellom familier der barn spiser/ikke spiser frokost?'],
        solution: `a) **Nei, dette er ikke bevis for at frokost GJØR barn flinkere.** Studien viser en korrelasjon (sammenheng), men ikke kausalitet (årsakssammenheng).

b) **Andre faktorer som kan forklare sammenhengen:**
- Familier der barn spiser frokost kan ha mer struktur og rutiner generelt
- Disse familiene kan ha høyere inntekt og mer ressurser til leksehjelp
- Foreldrene kan være mer involvert i barnas utdanning
- Barna kan ha bedre søvnvaner
- Familiene kan ha sunnere livsstil generelt

c) **Bedre studiedesign:**
- Tilfeldig dele elever i to grupper (randomisert kontrollert studie)
- Én gruppe får gratis frokost på skolen, én gruppe får ikke
- Følge begge gruppene over tid og sammenligne faglige resultater
- Kontrollere for andre faktorer (sosioøkonomisk bakgrunn, etc.)
- Bruke blindvurdering av karakterer

Merk: Korrelasjon ≠ kausalitet!`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Planlegg et fullstendig eksperiment for å teste følgende påstand: "Planter vokser raskere i jord tilsatt kaffegrut enn i vanlig jord."',
        subTasks: [
          { label: 'a', task: 'Skriv en testbar hypotese', solution: 'Hypotese: "Bønneplanter som dyrkes i jord tilsatt 10% kaffegrut blir høyere etter 4 uker enn planter dyrket i ren blomsterjord."' },
          { label: 'b', task: 'List opp nødvendig utstyr', solution: '12 like potter, blomsterjord, kaffegrut, 12 bønnefrø fra samme pose, målebeger, linjal, vann, merkelapper, notatblokk.' },
          { label: 'c', task: 'Beskriv fremgangsmåten steg for steg', solution: '1) Bland jord med 10% kaffegrut til 6 potter (testgruppe). 2) Fyll 6 potter med ren jord (kontrollgruppe). 3) Plant ett frø i hver potte, like dypt. 4) Plasser alle potter på samme sted med likt lys. 5) Vann alle likt (50 mL daglig). 6) Mål plantehøyden hver uke i 4 uker. 7) Beregn gjennomsnittshøyde for hver gruppe.' },
          { label: 'd', task: 'Identifiser alle variabler', solution: 'Uavhengig: Jordtype (med/uten kaffegrut). Avhengig: Plantehøyde etter 4 uker. Kontroll: Pottstørrelse, jordmengde, lysforhold, vannmengde, frøtype, såedybde, temperatur, luftfuktighet.' },
          { label: 'e', task: 'Forklar hvorfor du trenger flere planter i hver gruppe', solution: 'Individuelle planter kan variere tilfeldig i veksthastighet pga. genetiske forskjeller eller ujevnheter i frøkvalitet. Med flere planter kan vi beregne gjennomsnitt som gir mer pålitelige resultater, og vi kan identifisere avvikende målinger. 6 planter i hver gruppe er et minimum for å kunne trekke meningsfulle konklusjoner.' },
        ],
        solution: 'Et fullstendig eksperimentdesign med hypotese, utstyr, fremgangsmåte, variabler og begrunnelse for gjentakelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Den naturvitenskapelige metoden**: En systematisk fremgangsmåte med stegene observasjon, problemstilling, hypotese, eksperiment, datainnsamling/analyse og konklusjon
- **Variabler**: Uavhengig variabel (det vi endrer), avhengig variabel (det vi måler) og kontrollvariabler (det vi holder konstant)
- **Hypoteser**: Testbare og falsifiserbare påstander som kan støttes eller forkastes gjennom eksperimenter
- **Kontrollgrupper og gjentakelser**: Nødvendig for å sikre at resultatene er pålitelige og ikke skyldes tilfeldigheter
- **Blindforsøk og placebo**: Metoder for å redusere forventningseffekter i forsøk

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Reproduserbarhet | At andre kan gjenta forsøket og få samme resultat |
| Falsifiserbarhet | At en hypotese må kunne motbevises for å være vitenskapelig |
| Kontrollgruppe | Gruppe som ikke utsettes for testvariabelen, brukes som referansepunkt |
| Placeboeffekt | Effekt forårsaket av troen på at man får behandling |
| Dobbeltblind | Hverken forsøksperson eller forsker vet hvem som er i hvilken gruppe |`
    },
    {
      id: 'nat-vg1-1-1-kilder',
      type: 'text',
      content: `### Kilder og videre lesning

- Utdanningsdirektoratet (udir.no) – Læreplan i naturfag (NAT01-04), kompetansemål for VG1
- Hannisdal, M. et al. (2021). *Kosmos – Naturfag VG1*. Fagbokforlaget.
- Heskestad, P. A. et al. (2020). *Tellus 11 – Naturfag VG1*. Cappelen Damm.
- Naturfag.no – Nasjonalt senter for naturfag i opplæringen: «Den naturvitenskapelige metoden»
- Viten.no – Nettressurs for naturfag, undervisningsopplegg om vitenskapelig metode`
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_1_2: TextbookChapter = {
  id: 'nat-vg1-1-2',
  courseId: 'nat-vg1',
  chapterNumber: '1.2',
  title: 'Hypoteser, modeller og teorier',
  description: 'Forstå forskjellen mellom hypoteser, modeller og teorier, og hvordan de utvikles i naturvitenskapen.',
  estimatedMinutes: 75,
  competenceGoals: ['drøfte hvordan utvikling av naturvitenskapelige hypoteser, modeller og teorier bidrar til at vi kan forstå og forklare verden'],
  content: [
    {
      id: 'nat-vg1-1-2-intro',
      type: 'text',
      content: `## Fra hypotese til teori

Hvordan går vi fra en enkel ide til sikker kunnskap? I naturvitenskapen bruker vi begrepene **hypotese**, **modell** og **teori** for å beskrive ulike nivåer av vitenskapelig kunnskap. Disse begrepene har presise betydninger som ofte er forskjellige fra hvordan de brukes i dagligtale.

Når en forsker får en ide om hvordan noe fungerer, starter det som en hypotese. Gjennom testing og utvikling kan dette bli til en modell som beskriver fenomenet. Hvis modellen holder stand for mange uavhengige tester over lang tid, kan den utvikle seg til en teori.

**I dette kapittelet skal du lære:**
- Forskjellen mellom hypotese, modell og teori
- Hvordan vitenskapelig kunnskap utvikles over tid
- Styrker og begrensninger ved vitenskapelige modeller
- Hvorfor teorier er den sterkeste formen for vitenskapelig kunnskap
- Eksempler på viktige modeller og teorier i naturvitenskapen`,
    },
    {
      id: 'nat-vg1-1-2-def-1',
      type: 'definition',
      title: 'Hypotese',
      content: `**Hypotese - en testbar påstand**

En hypotese er en foreløpig forklaring på et observert fenomen. Den er et utgangspunkt for vitenskapelig undersøkelse.

**Kjennetegn på en god hypotese:**
- **Testbar:** Kan undersøkes gjennom eksperimenter eller observasjoner
- **Falsifiserbar:** Det må være mulig å motbevise den
- **Spesifikk:** Presist formulert, ikke vag
- **Basert på kunnskap:** Bygger på eksisterende observasjoner eller teori

**Eksempler på hypoteser:**
- "Plantevekst øker med mengden sollys opptil 12 timer daglig"
- "Eddik dreper flere bakterier enn såpevann"
- "Fugler med lengre nebb kan nå dypere ned i blomster"

**Hva skjer med en hypotese?**
Gjennom eksperimenter kan en hypotese bli:
- **Støttet:** Resultatene er i tråd med hypotesen (men den er ikke "bevist")
- **Forkastet:** Resultatene motsier hypotesen
- **Revidert:** Justert basert på nye funn

Selv om en hypotese støttes av mange eksperimenter, blir den aldri endelig bevist. Den kan alltid bli utfordret av nye observasjoner.`,
    },
    {
      id: 'nat-vg1-1-2-def-2',
      type: 'definition',
      title: 'Modell',
      content: `**Modell - en forenklet representasjon**

En modell er en forenklet fremstilling av virkeligheten som hjelper oss å forstå, forklare og forutsi fenomener. Modeller kan være fysiske, matematiske eller konseptuelle.

**Typer modeller:**

**1. Fysiske modeller**
- Tredimensjonale representasjoner
- Eksempler: Globus (jordmodell), DNA-modell, molekylmodeller
- Brukes for visualisering og demonstrasjon

**2. Matematiske modeller**
- Bruker ligninger og formler
- Eksempler: Klimamodeller, populasjonsmodeller, fysikkformler
- Kan brukes til å gjøre kvantitative forutsigelser

**3. Konseptuelle modeller**
- Ideer og diagrammer som forklarer sammenhenger
- Eksempler: Næringskjeder, cellesyklus, vannets kretsløp
- Hjelper oss å forstå komplekse systemer

**Eksempler på viktige modeller i naturvitenskap:**
- **Bohrs atommodell:** Elektroner i baner rundt kjernen
- **Dobbeltheliks-modellen:** DNA-strukturen
- **Klimamodeller:** Forutsier temperatur og værforhold
- **Periodesystemet:** Organiserer grunnstoffene etter egenskaper`,
    },
    {
      id: 'nat-vg1-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Utviklingen av atommodeller',
      problem: 'Hvordan har vår forståelse av atomet utviklet seg gjennom historien, og hva forteller dette oss om hvordan vitenskapelige modeller utvikles?',
      solution: `**Utviklingen av atommodeller viser hvordan vitenskap bygger på og forbedrer tidligere kunnskap:**

**1. Daltons modell (ca. 1803)**
- Atomer som små, massive, udelelige kuler
- Styrke: Forklarte kjemiske reaksjoner og masseforhold
- Begrensning: Visste ikke om indre struktur

**2. Thomsons "rosinbolle"-modell (1897)**
- Oppdaget elektronet
- Elektroner spredt i en positiv "masse" som rosiner i en bolle
- Styrke: Forklarte at atomer inneholder ladede partikler
- Begrensning: Kunne ikke forklare Rutherfords eksperimenter

**3. Rutherfords modell (1911)**
- Skjøt alfapartikler mot gullfolie
- Oppdaget at atomet har en liten, tett, positiv kjerne
- Elektroner i "baner" rundt kjernen
- Begrensning: Kunne ikke forklare hvorfor elektroner ikke spiraler inn i kjernen

**4. Bohrs modell (1913)**
- Elektroner i bestemte energinivåer (skall)
- Forklarte atomspektre (fargene atomer sender ut)
- Begrensning: Fungerte bare for hydrogen

**5. Kvantemekanisk modell (1920-tallet)**
- Elektroner som sannsynlighetsskyer (orbitaler)
- Nåværende modell, men fortsatt en forenkling

**Lærdom:**
Hver modell var "riktig" i sin tid og forklarte tilgjengelige observasjoner. Nye oppdagelser krevde nye, mer presise modeller. Vitenskapelig kunnskap er ikke statisk, men utvikles kontinuerlig.`,
    },
    {
      id: 'nat-vg1-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Klassifiser følgende som hypotese, modell eller teori:',
        subTasks: [
          { label: 'a', task: 'Klimamodeller som brukes til å forutsi temperaturøkning', solution: 'Modell - det er en matematisk representasjon som simulerer klimasystemet for å gjøre forutsigelser.' },
          { label: 'b', task: 'Darwins evolusjonsteori', solution: 'Teori - den er støttet av enorme mengder bevis fra genetikk, paleontologi, biologi og andre felt over 150+ år.' },
          { label: 'c', task: '"Bakterier i jorda kan bryte ned plast"', solution: 'Hypotese - det er en testbar påstand som må undersøkes gjennom eksperimenter.' },
          { label: 'd', task: 'Periodesystemet', solution: 'Modell - det er en organisert fremstilling av grunnstoffene basert på deres egenskaper.' },
          { label: 'e', task: 'Celleteorien (alle levende organismer består av celler)', solution: 'Teori - den er bekreftet gjennom utallige observasjoner og er et fundament i biologien.' },
        ],
        solution: 'a) Modell, b) Teori, c) Hypotese, d) Modell, e) Teori',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom hvordan ordet "teori" brukes i dagligtale og i vitenskapelig sammenheng.',
        hints: ['Tenk på uttrykk som "det er bare en teori"', 'Hva kreves for at noe skal bli en vitenskapelig teori?'],
        solution: `**I dagligtale:**
"Teori" brukes ofte om en ide, gjetning eller spekulasjon. Uttrykket "det er bare en teori" antyder at noe er usikkert eller ubekreftet.

**I vitenskapelig sammenheng:**
En teori er den sterkeste formen for vitenskapelig kunnskap. Den er:
- Støttet av mange uavhengige bevis og eksperimenter
- Testet og bekreftet gjentatte ganger
- Akseptert av det vitenskapelige samfunnet
- Kan forklare og forutsi fenomener

Eksempler som gravitasjonsteorien og evolusjonsteorien er ikke "bare gjetninger" - de er veletablert kunnskap med overveldende bevismateriale.

Misforståelsen kan føre til at folk avviser veldokumentert vitenskap ved å si "det er jo bare en teori".`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-2-def-3',
      type: 'definition',
      title: 'Teori - den sterkeste vitenskapelige kunnskapen',
      content: `**Teori - veletablert forklaring**

En vitenskapelig teori er en omfattende forklaring på naturlige fenomener som er støttet av store mengder bevis fra mange uavhengige kilder.

**Kjennetegn på en vitenskapelig teori:**
- Støttet av mange uavhengige observasjoner og eksperimenter
- Kan forklare et bredt spekter av fenomener
- Har forutsigelseskraft - kan forutsi nye observasjoner
- Er akseptert av det store flertall av eksperter på feltet
- Har stått imot forsøk på å falsifisere den

**Eksempler på vitenskapelige teorier:**
| Teori | Forklarer |
|-------|-----------|
| Evolusjonsteori | Hvordan arter utvikler seg over tid |
| Relativitetsteori | Forholdet mellom rom, tid og gravitasjon |
| Celleteorien | At alle levende ting består av celler |
| Kimteorien | At mange sykdommer forårsakes av mikroorganismer |
| Platetektonikk | Hvordan jordoverflaten endres over tid |

**Kan en teori være feil?**
Teorier kan revideres hvis ny informasjon krever det, men de forkastes sjelden helt. Vanligvis utvides eller raffineres de. For eksempel utvidet Einsteins relativitetsteori Newtons gravitasjonsteori - den erstattet den ikke fullstendig for hverdagsfysikk.`,
    },
    {
      id: 'nat-vg1-1-2-def-4',
      type: 'definition',
      title: 'Modellers styrker og begrensninger',
      content: `**Hvorfor bruker vi modeller?**

Modeller er uunnværlige verktøy i naturvitenskapen fordi de:
- **Forenkler kompleksitet:** Gjør det mulig å fokusere på det viktigste
- **Visualiserer det usynlige:** Atomer, celler, klimasystemer
- **Muliggjør testing:** Kan teste ideer uten virkelige eksperimenter
- **Hjelper med forutsigelser:** Klimamodeller, epidemimodeller
- **Letter kommunikasjon:** Enklere å forklare til andre

**Begrensninger ved modeller:**

**1. Forenkling**
Modeller utelater detaljer. En globus viser ikke trær eller hus.

**2. Basert på antagelser**
Hvis antagelsene er feil, blir resultatene feil.

**3. Må oppdateres**
Ny kunnskap kan gjøre modeller utdaterte.

**4. Kan misforstås**
Modeller kan gi feil inntrykk av virkeligheten.

**Eksempel - Bohrs atommodell:**
| Styrker | Begrensninger |
|---------|---------------|
| Forklarer atomspektre | Fungerer best for hydrogen |
| Visualiserer energinivåer | Elektroner oppfører seg ikke som planeter |
| Enkel å forstå | Gir ikke fullstendig bilde av kvantemekanikk |

**Viktig innsikt:**
Alle modeller er "feil" i den forstand at de er forenklinger. Men mange modeller er nyttige. Kunsten er å velge riktig modell for formålet.`,
    },
    {
      id: 'nat-vg1-1-2-example-2',
      type: 'example',
      title: 'Eksempel: Klimamodeller - styrker og begrensninger',
      problem: 'Klimamodeller brukes til å forutsi fremtidige temperaturer og værforhold. Hvilke styrker og begrensninger har disse modellene?',
      solution: `**Hva er en klimamodell?**
En klimamodell er et komplekst datasystem som simulerer jordens klimasystem ved å bruke fysiske lover for atmosfære, hav, is og land.

**Styrker ved klimamodeller:**

1. **Basert på veletablert fysikk**
   - Bruker kjente lover for stråling, varme og bevegelse
   - Ikke gjetninger, men fysiske beregninger

2. **Testes mot historiske data**
   - Modellene kan reprodusere tidligere klimaendringer
   - "Bakovertest" øker tilliten til fremtidige forutsigelser

3. **Mange uavhengige modeller gir lignende resultater**
   - Over 40 forskjellige modeller fra hele verden
   - Konsistente resultater styrker påliteligheten

4. **Kan teste ulike scenarier**
   - Hva skjer ved ulike utslippsnivåer?
   - Hjelper politikere ta informerte beslutninger

**Begrensninger:**

1. **Forenklinger**
   - Kan ikke inkludere alle detaljer (skyer er vanskelige)
   - Må bruke "gjennomsnitt" over store områder

2. **Usikkerhet i fremtidige utslipp**
   - Avhenger av menneskelige valg vi ikke kan forutsi
   - Bruker derfor ulike utslippsscenarier

3. **Noen prosesser er vanskelige å modellere**
   - Tippepunkter (brå endringer) er usikre
   - Skyers effekt på klimaet

4. **Beregningskraft**
   - Mer detaljerte modeller krever enorm datakraft

**Konklusjon:**
Til tross for begrensninger er klimamodeller det beste verktøyet vi har for å forstå fremtidige klimaendringer. Usikkerheten handler mest om *hvor mye* det blir varmt, ikke *om* det blir varmt.`,
    },
    {
      id: 'nat-vg1-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar styrker og begrensninger ved en globus som modell for jorden.',
        subTasks: [
          { label: 'a', task: 'Nevn tre styrker ved en globus som modell', solution: '1) Viser jordens sfæriske form korrekt. 2) Viser riktige størrelsesforhold mellom kontinenter. 3) Viser hvordan kontinentene ligger i forhold til hverandre. Bonus: Kan vise rotasjon, årstider, dag/natt.' },
          { label: 'b', task: 'Nevn tre begrensninger ved en globus som modell', solution: '1) Viser ikke detaljer som fjell, byer eller veier. 2) Kan ikke vises flatt (upraktisk å ha med seg). 3) Viser ikke jordens indre struktur. 4) Skala gjør at man ikke kan se små land tydelig.' },
          { label: 'c', task: 'Når ville du brukt en globus i stedet for et flatt kart?', solution: 'Når du vil vise: riktige størrelsesforhold (flate kart forvrenger), korteste flyverruter (storsirkler), eller forklare dag/natt og årstider. Flate kart er bedre for navigasjon og detaljkart.' },
        ],
        solution: 'Globuser er gode for å vise jordens form og størrelsesforhold, men dårlige for detaljer og portabilitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'En ny studie foreslår at en bestemt plante kan brukes til å behandle hodepine. Hvordan vil denne påstanden utvikle seg fra hypotese til eventuelt teori?',
        hints: ['Tenk på hvilke steg som kreves', 'Hva må til for at det medisinske samfunnet skal akseptere dette?'],
        solution: `**Steg fra hypotese mot teori:**

**1. Hypotese**
"Ekstrakt fra plante X lindrer hodepine."

**2. Innledende testing**
- Laboratorietester: Identifisere aktive stoffer
- Celletester: Hvordan påvirker stoffene celler?
- Dyreforsøk: Er det trygt?

**3. Modellutvikling**
- Forstå virkningsmekanismen (hvordan virker det?)
- Matematisk modell for dosering

**4. Kliniske studier**
- Fase 1: Sikkerhet i små grupper
- Fase 2: Virkning og dosering
- Fase 3: Store, dobbeltblinde studier med placebo

**5. Reproduksjon**
- Andre forskere må bekrefte resultatene
- Studier i ulike land og populasjoner

**6. Teori (eventuelt)**
Hvis mekanismen forstås fullt ut og hundrevis av studier bekrefter effekten over mange år, kan dette bli del av etablert medisinsk kunnskap.

Merk: De fleste påstander når aldri teori-stadiet. Mange hypoteser forkastes underveis.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-2-text-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Nøkkelbegreper:**

| Begrep | Definisjon | Eksempel |
|--------|------------|----------|
| **Hypotese** | Testbar påstand | "Varmt vann løser sukker raskere" |
| **Modell** | Forenklet representasjon | Bohrs atommodell, klimamodeller |
| **Teori** | Veletablert, omfattende forklaring | Evolusjonsteori, relativitetsteori |

**Hierarkiet:**
- Hypotese: Startpunkt, kan testes
- Modell: Verktøy for forståelse og forutsigelse
- Teori: Høyeste nivå av vitenskapelig kunnskap

**Modellers styrker:**
- Forenkler kompleksitet
- Muliggjør forutsigelser
- Visualiserer det usynlige

**Modellers begrensninger:**
- Er alltid forenklinger
- Basert på antagelser som kan være feil
- Må oppdateres med ny kunnskap

**Det viktigste å huske:**
- I vitenskapen er "teori" ikke en gjetning, men den sterkeste kunnskapen vi har
- Alle modeller er forenklinger, men mange er nyttige
- Vitenskapelig kunnskap utvikles kontinuerlig - ingen sannhet er endelig`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-2-ex-5',
        number: '5',
        type: 'classic',
        task: `Noen hevder at "evolusjonsteorien er bare en teori, så vi kan ikke være sikre på at den stemmer."

a) Forklar hvorfor dette argumentet er basert på en misforståelse.
b) Hva slags bevis støtter evolusjonsteorien?
c) Hva skulle til for at evolusjonsteorien ble forkastet?`,
        solution: `a) **Misforståelsen:**
Argumentet blander dagligtalens "teori" (gjetning) med vitenskapens "teori" (veletablert kunnskap). I vitenskapen er en teori det sterkeste kunnskapsnivået, støttet av enorme mengder bevis. Å si "bare en teori" er som å si at gravitasjonsteorien "bare" er en teori.

b) **Bevis for evolusjonsteorien:**
- **Fossiler:** Viser gradvis endring av arter over tid
- **DNA:** Genetiske likheter viser slektskap mellom arter
- **Anatomiske likheter:** Samme beinstruktur i menneskearm, flaggermusvinge, hvalfinne
- **Direkte observasjoner:** Bakterier som utvikler antibiotikaresistens, endringer i fuglearter
- **Biogeografi:** Fordelingen av arter på øyer og kontinenter
- **Embryologi:** Likheter i fosterutvikling

c) **Hva skulle til for å forkaste den:**
- Fossilfunn av moderne dyr i veldig gamle lag (f.eks. kanin i prekambrium)
- DNA-bevis som viser at liknende arter ikke er beslektet
- En alternativ mekanisme som forklarer alle observasjonene bedre

Slike funn er aldri gjort. Evolusjonsteorien har tvert imot blitt styrket av hver nye oppdagelse.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Velg en vitenskapelig modell du kjenner (f.eks. næringskjede, vannets kretsløp, eller solsystemmodell). Analyser denne modellen.',
        subTasks: [
          { label: 'a', task: 'Hva viser modellen?', solution: 'Varierer etter valgt modell. Eksempel for næringskjede: Viser hvordan energi og næringsstoffer overføres fra ett trofisk nivå til neste (produsenter → konsumenter → nedbrytere).' },
          { label: 'b', task: 'Hvilken type modell er det (fysisk, matematisk, konseptuell)?', solution: 'Næringskjede er en konseptuell modell - den viser sammenhenger og relasjoner mellom organismer.' },
          { label: 'c', task: 'Nevn minst to styrker ved modellen', solution: 'Eksempel for næringskjede: 1) Viser tydelig hvordan energi flyter gjennom økosystemet. 2) Enkel å forstå, god for undervisning. 3) Kan forutsi effekter av endringer (hva skjer hvis en art forsvinner?).' },
          { label: 'd', task: 'Nevn minst to begrensninger ved modellen', solution: 'Eksempel for næringskjede: 1) Viser ikke kompleksiteten i næringsnett (de fleste dyr spiser flere ting). 2) Viser ikke mengder eller energitap. 3) Tar ikke hensyn til sesongvariasjoner eller geografiske forskjeller.' },
          { label: 'e', task: 'Hvordan kunne modellen forbedres?', solution: 'Eksempel: Bruke næringsnett i stedet for kjede for å vise kompleksitet. Legge til energipyramide for å vise energitap. Inkludere tallverdier for populasjonsstørrelser.' },
        ],
        solution: 'En god analyse identifiserer modellens formål, type, styrker, begrensninger og forbedringsmuligheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Hypotese**: En testbar og falsifiserbar påstand som er utgangspunkt for vitenskapelig undersøkelse
- **Modell**: En forenklet representasjon av virkeligheten som hjelper oss å forstå, forklare og forutsi fenomener (fysisk, matematisk eller konseptuell)
- **Teori**: Den sterkeste formen for vitenskapelig kunnskap, støttet av mange uavhengige bevis over lang tid
- **Modellers styrker og begrensninger**: Alle modeller er forenklinger, men mange er nyttige verktøy
- **Vitenskapelig utvikling**: Kunnskap utvikles kontinuerlig gjennom testing, revisjon og forbedring

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Hypotese | Testbar påstand som kan støttes eller forkastes |
| Modell | Forenklet fremstilling av virkeligheten |
| Teori | Veletablert vitenskapelig forklaring med omfattende bevismateriale |
| Fysisk modell | Tredimensjonal representasjon (f.eks. globus, molekylmodell) |
| Matematisk modell | Bruker ligninger og formler (f.eks. klimamodeller) |
| Konseptuell modell | Diagrammer og ideer som viser sammenhenger (f.eks. næringskjeder) |`
    },
    {
      id: 'nat-vg1-1-2-kilder',
      type: 'text',
      content: `### Kilder og videre lesning

- Utdanningsdirektoratet (udir.no) – Læreplan i naturfag (NAT01-04), kompetansemål for VG1
- Hannisdal, M. et al. (2021). *Kosmos – Naturfag VG1*. Fagbokforlaget.
- Heskestad, P. A. et al. (2020). *Tellus 11 – Naturfag VG1*. Cappelen Damm.
- Naturfag.no – «Modeller i naturfag» og «Vitenskapelig tenkemåte»
- Store norske leksikon (snl.no) – «Vitenskapsteori» og «Naturvitenskapelig metode»`
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_1_3: TextbookChapter = {
  id: 'nat-vg1-1-3',
  courseId: 'nat-vg1',
  chapterNumber: '1.3',
  title: 'Vitenskapelig kommunikasjon',
  description: 'Lær å presentere naturfaglige funn og argumentere for valg av metoder.',
  estimatedMinutes: 70,
  competenceGoals: ['utforske en selvvalgt naturfaglig problemstilling, presentere funn og argumentere for valg av metoder'],
  content: [
    {
      id: 'nat-vg1-1-3-intro',
      type: 'text',
      content: `## Hvorfor er kommunikasjon viktig i vitenskap?

Tenk deg at en forsker gjør en fantastisk oppdagelse, men aldri forteller noen om den. Oppdagelsen ville vært meningsløs! Vitenskapelig kunnskap har liten verdi hvis den ikke deles med andre.

Kommunikasjon er en grunnpilar i vitenskapen fordi:
- **Andre kan etterprøve:** Når vi beskriver nøyaktig hva vi har gjort, kan andre gjenta forsøket
- **Kunnskap bygges videre:** Nye forskere kan bruke andres funn som utgangspunkt
- **Feil oppdages:** Fagfellevurdering hjelper med å finne svakheter
- **Samfunnet nyter godt:** Viktige funn må kommuniseres til beslutningstakere og allmennheten

**I dette kapittelet skal du lære:**
- Strukturen i en vitenskapelig rapport (IMRaD)
- Hvordan presentere data i tabeller og grafer
- Hvordan argumentere for metodevalg
- Forskjellen mellom primær- og sekundærkilder
- Hvordan vurdere troverdigheten til kilder`,
    },
    {
      id: 'nat-vg1-1-3-def-1',
      type: 'definition',
      title: 'IMRaD - strukturen i vitenskapelige rapporter',
      content: `**IMRaD-strukturen** brukes i de fleste vitenskapelige rapporter og artikler:

**I - Introduksjon (Innledning)**
- Bakgrunn: Hvorfor er dette temaet viktig?
- Hva vet vi allerede om dette?
- Problemstilling: Hva vil vi finne ut?
- Hypotese: Hva tror vi svaret er?

*Tips:* Gå fra det generelle til det spesifikke. Start bredt og spiss til mot din problemstilling.

**M - Metode (Materialer og metoder)**
- Hvilket utstyr og materialer ble brukt?
- Fremgangsmåte steg for steg
- Hvilke variabler ble kontrollert?
- Detaljert nok til at andre kan gjenta forsøket

*Tips:* Skriv i fortid, passiv form ("det ble målt") eller aktiv form ("vi målte").

**R - Resultater**
- Presentasjon av data (tabeller, grafer, tall)
- Beskriv hva du fant, men ikke tolk det ennå
- Inkluder all relevant data, også uventede resultater
- Bruk figurer og tabeller med tydelige forklaringer

*Tips:* "Resultatene viser at..." ikke "Resultatene beviser at..."

**a - Analyse/Diskusjon**
- Hva betyr resultatene?
- Støtter de hypotesen?
- Hva kan forklare uventede resultater?
- Feilkilder og usikkerheter
- Sammenligning med andres forskning
- Forslag til forbedringer

**D - Konklusjon**
- Kort svar på problemstillingen
- Basert på resultatene, hva kan vi konkludere?
- Eventuelt: Hva bør undersøkes videre?`,
    },
    {
      id: 'nat-vg1-1-3-example-1',
      type: 'example',
      title: 'Eksempel: En strukturert rapport',
      problem: 'Hvordan ser en god vitenskapelig rapport ut? La oss se på et eksempel om saltvanns effekt på plantespiring.',
      solution: `**Tittel:** Effekten av saltholdighet på spiringen av karsfrø

**Introduksjon:**
Saltholdighet i jord er et økende problem i landbruket på grunn av klimaendringer og overforbruk av irrigasjonsvann. Høy saltholdighet kan hemme plantevekst gjennom osmotisk stress. Vi ønsket å undersøke hvordan saltkonsentrasjonen påvirker spiringen av karsfrø (Lepidium sativum).

*Problemstilling:* Hvordan påvirker ulike saltkonsentrasjoner spiringsprosenten hos karsfrø?

*Hypotese:* Spiringsprosenten vil synke med økende saltkonsentrasjon fordi salt gjør det vanskeligere for frøene å ta opp vann.

**Metode:**
*Utstyr:* 5 petriskåler, filterpapir, karsfrø (100 stk), vekt, målesylinder, NaCl, destillert vann.

*Fremgangsmåte:*
1. Lagde saltløsninger: 0%, 0,5%, 1%, 2% og 4% NaCl
2. Plasserte fuktet filterpapir i hver skål
3. La 20 frø i hver skål med lik avstand
4. Tilsatte 5 mL av respektiv løsning
5. Dekket skålene og plasserte dem ved 20°C, uten lys
6. Talte spirte frø etter 72 timer

*Variabler:*
- Uavhengig: Saltkonsentrasjon
- Avhengig: Spiringsprosent
- Kontroll: Temperatur, vannmengde, frøtype, lysmengde

**Resultater:**
| Saltkonsentrasjon | Antall spirte (av 20) | Spiringsprosent |
|-------------------|----------------------|-----------------|
| 0% (kontroll)     | 18                   | 90%             |
| 0,5%              | 16                   | 80%             |
| 1%                | 11                   | 55%             |
| 2%                | 4                    | 20%             |
| 4%                | 0                    | 0%              |

**Diskusjon:**
Resultatene viser en tydelig negativ sammenheng mellom saltkonsentrasjon og spiringsprosent. Ved 4% salt spirte ingen frø, mens kontrollgruppen viste 90% spiring.

Hypotesen støttes av resultatene. Den lave spiringen ved høy saltholdighet skyldes sannsynligvis at salt reduserer vannpotensialet, slik at frøene ikke klarer å ta opp nok vann til å aktivere spiringsprosessen.

*Feilkilder:*
- Frøene kan ha hatt ulik kvalitet
- Temperaturen kan ha variert noe
- Kun én gjentakelse per konsentrasjon

*Forbedringsforslag:*
- Gjenta med flere frø og flere replikasjoner
- Teste flere saltkonsentrasjoner mellom 1% og 2%
- Måle hvor lang tid spiringen tar, ikke bare om det spirer

**Konklusjon:**
Saltkonsentrasjonen har en betydelig negativ effekt på spiringen av karsfrø. Ved 2% salt spirte bare 20% av frøene, og ved 4% spirte ingen. Dette støtter hypotesen om at salt hemmer plantespiring.`,
    },
    {
      id: 'nat-vg1-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'En rapport inneholder følgende avsnitt. Plasser dem i riktig rekkefølge (IMRaD):\n\nA: "Vi brukte 3 planter av samme art, plantet i like potter med samme jord..."\nB: "Planter som fikk mest lys vokste i gjennomsnitt 4 cm mer enn kontrollgruppen..."\nC: "Resultatene støtter hypotesen om at lys påvirker vekst. En mulig forklaring er..."\nD: "Tidligere forskning har vist at lys er viktig for fotosyntese. Vi ønsker å undersøke..."',
        solution: `Riktig rekkefølge: **D, A, B, C**

- **D - Introduksjon:** "Tidligere forskning har vist..." gir bakgrunn og introduserer problemstillingen
- **A - Metode:** "Vi brukte 3 planter..." beskriver utstyr og fremgangsmåte
- **B - Resultater:** "Planter som fikk mest lys vokste..." presenterer data uten tolkning
- **C - Diskusjon:** "Resultatene støtter hypotesen... En mulig forklaring er..." tolker resultatene`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er feil med følgende setninger, og hvilken del av rapporten hører de hjemme i?',
        subTasks: [
          { label: 'a', task: '"Resultatene beviser at hypotesen er riktig."', solution: 'Feil: Vi sier aldri "beviser" i vitenskap. Skriv heller "støtter". Hører hjemme i: Diskusjon.' },
          { label: 'b', task: '"Vi målte temperaturen fordi det var en god ide."', solution: 'Feil: Gir ingen faglig begrunnelse. Skriv heller "Vi målte temperaturen fordi det er en viktig kontrollvariabel som påvirker reaksjonshastigheten." Hører hjemme i: Metode.' },
          { label: 'c', task: '"Plantene vokste dårlig, noe som viser at de ikke fikk nok lys."', solution: 'Feil: Blander resultat og tolkning. Resultatdelen bør kun si "Plantene vokste X cm." Tolkningen (at det skyldes lys) hører hjemme i Diskusjon.' },
        ],
        solution: 'a) "beviser" bør være "støtter" (Diskusjon). b) Må ha faglig begrunnelse (Metode). c) Blander resultat og tolkning (Resultat vs. Diskusjon).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-3-def-2',
      type: 'definition',
      title: 'Presentasjon av data - tabeller og grafer',
      content: `God presentasjon av data gjør det lettere for leseren å forstå resultatene.

**Tabeller:**
- Bruk når du har mange nøyaktige verdier
- Rader og kolonner med tydelige overskrifter
- Inkluder enheter i overskriftene
- Sorter data logisk (f.eks. kronologisk eller etter størrelse)

**Grafer:**
Velg riktig graftype:

| Type | Bruksområde |
|------|-------------|
| **Linjediagram** | Vise endring over tid eller kontinuerlige data |
| **Stolpediagram** | Sammenligne kategorier |
| **Sektordiagram** | Vise deler av en helhet (prosenter) |
| **Punktdiagram (scatter)** | Vise sammenheng mellom to variabler |

**Krav til en god graf:**
- Tydelig tittel som forklarer hva grafen viser
- Akser med riktige navn og enheter
- Passende skala som ikke forvrenger data
- Forklaring (legend) hvis flere dataserier
- Kildehenvisning hvis data er fra andre

**Vanlige feil:**
- Starte y-aksen ved en annen verdi enn 0 (kan overdrive forskjeller)
- Bruke 3D-effekter som gjør det vanskelig å lese
- Manglende enheter eller aksetitler`,
    },
    {
      id: 'nat-vg1-1-3-example-2',
      type: 'example',
      title: 'Eksempel: Velge riktig graftype',
      problem: 'Hvilken graftype bør brukes for følgende datasett?',
      solution: `**Datasett 1:** Temperatur målt hver time i et døgn
→ **Linjediagram** - viser endring over tid, kontinuerlige data

**Datasett 2:** Antall elever som foretrekker ulike frokosttyper
→ **Stolpediagram** - sammenligner kategorier (frokosttyper)

**Datasett 3:** Fordelingen av budsjettet til en organisasjon
→ **Sektordiagram (kakediagram)** - viser deler av en helhet

**Datasett 4:** Sammenhengen mellom studietimer og karakterer hos 30 elever
→ **Punktdiagram (scatter)** - viser sammenheng mellom to variabler

**Datasett 5:** Befolkningsvekst i Norge fra 1900 til 2020
→ **Linjediagram** - viser endring over tid

**Datasett 6:** CO2-utslipp fra ulike sektorer (transport, industri, husholdning)
→ **Stolpediagram** for sammenligning eller **sektordiagram** for andeler`,
    },
    {
      id: 'nat-vg1-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilken graftype vil du bruke for å presentere følgende data? Begrunn svaret.',
        subTasks: [
          { label: 'a', task: 'Pulsfrekvens målt hvert 5. minutt under trening', solution: 'Linjediagram - viser endring over tid, og vi ønsker å se trenden i pulsutviklingen.' },
          { label: 'b', task: 'Antall fugler av ulike arter observert i en hage', solution: 'Stolpediagram - sammenligner antall i ulike kategorier (fuglearter).' },
          { label: 'c', task: 'Sammenheng mellom kroppstemperatur og stoffskifte hos 20 forsøksdyr', solution: 'Punktdiagram (scatter) - viser om det er en sammenheng mellom to kontinuerlige variabler.' },
          { label: 'd', task: 'Energiforbruk fordelt på ulike kilder i et land', solution: 'Sektordiagram - viser andeler av en helhet, eller stolpediagram for sammenligning.' },
        ],
        solution: 'a) Linje (tid), b) Stolpe (kategorier), c) Punkt (sammenheng), d) Sektor eller stolpe (andeler/sammenligning).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-3-def-3',
      type: 'definition',
      title: 'Kilder og kildekritikk',
      content: `**Primærkilder og sekundærkilder:**

**Primærkilder:**
- Originale, førstehånds kilder
- Eksempler: Vitenskapelige artikler med originalforskning, observasjoner, eksperimenter
- Mest pålitelige, men kan være vanskelige å forstå

**Sekundærkilder:**
- Tolker eller oppsummerer primærkilder
- Eksempler: Lærebøker, avisartikler, dokumentarer
- Lettere tilgjengelige, men kan inneholde forenklinger eller feiltolkninger

**Kildekritikk - vurder kilden:**

1. **Hvem står bak?**
   - Er det en anerkjent institusjon, forsker eller organisasjon?
   - Har de kompetanse på feltet?
   - Kan de ha interessekonflikter?

2. **Når ble det publisert?**
   - Er informasjonen oppdatert?
   - Har det skjedd nye oppdagelser siden?

3. **Hvordan er informasjonen dokumentert?**
   - Finnes det kildehenvisninger?
   - Er påstandene støttet av data?

4. **Hva er formålet?**
   - Informere? Selge? Overbevise?
   - Er fremstillingen balansert?

5. **Samsvarer det med andre kilder?**
   - Sier andre pålitelige kilder det samme?
   - Hvis noe virker overraskende, sjekk flere kilder`,
    },
    {
      id: 'nat-vg1-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Vurder påliteligheten til disse kildene for en oppgave om klimaendringer:',
        subTasks: [
          { label: 'a', task: 'En artikkel i tidsskriftet Nature skrevet av klimaforskere', solution: 'Svært pålitelig. Nature er et av verdens mest prestisjetunge vitenskapelige tidsskrifter med streng fagfellevurdering. Primærkilde.' },
          { label: 'b', task: 'Et blogginnlegg av en person uten vitenskapelig bakgrunn', solution: 'Lav pålitelighet. Ingen kompetansebevis, ingen fagfellevurdering, mulig bias. Må verifiseres mot andre kilder.' },
          { label: 'c', task: 'En rapport fra FNs klimapanel (IPCC)', solution: 'Svært pålitelig. IPCC oppsummerer tusenvis av studier, gjennomgås av hundrevis av eksperter, representerer vitenskapelig konsensus. Sekundærkilde av høy kvalitet.' },
          { label: 'd', task: 'En artikkel sponset av et oljeselskap', solution: 'Potensiell interessekonflikt. Oljeselskaper kan ha økonomiske motiver for å tone ned klimabekymringer. Informasjonen kan være riktig, men må verifiseres mot uavhengige kilder.' },
        ],
        solution: 'a) Høy (fagfellevurdert), b) Lav (ingen kvalitetskontroll), c) Høy (konsensusrapport), d) Mulig interessekonflikt (verifiser uavhengig).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-3-text-oppsummering',
      type: 'text',
      content: `## Oppsummering

**IMRaD-strukturen:**
- **I - Introduksjon:** Bakgrunn, problemstilling, hypotese
- **M - Metode:** Utstyr, fremgangsmåte, variabler
- **R - Resultater:** Data presentert i tabeller/grafer
- **a - Analyse/Diskusjon:** Tolkning, feilkilder, forbedringer
- **D - Konklusjon:** Kort svar på problemstillingen

**Presentasjon av data:**
- Tabeller for nøyaktige verdier
- Linjediagram for endring over tid
- Stolpediagram for kategorier
- Sektordiagram for andeler
- Punktdiagram for sammenhenger

**Kildekritikk:**
- Vurder hvem som står bak, når det er publisert, dokumentasjon, formål
- Primærkilder > sekundærkilder
- Fagfellevurderte kilder > ikke-vurderte

**Det viktigste å huske:**
1. Skriv detaljert nok til at andre kan gjenta forsøket
2. Skill mellom resultater (hva du fant) og diskusjon (hva det betyr)
3. Bruk "støtter", ikke "beviser"
4. Vær kritisk til kilder - sjekk hvem, når, hvorfor`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-3-ex-5',
        number: '5',
        type: 'classic',
        task: `Du har gjennomført et forsøk der du testet hvordan ulike pH-verdier påvirker enzymaktivitet. Her er dataene dine:

pH 2: 5% aktivitet
pH 4: 45% aktivitet
pH 6: 95% aktivitet
pH 7: 100% aktivitet
pH 8: 90% aktivitet
pH 10: 30% aktivitet
pH 12: 2% aktivitet

a) Hvilken graftype vil du bruke?
b) Lag en kort metodebeskrivelse for forsøket
c) Skriv en diskusjon basert på resultatene`,
        hints: ['Tenk på hva dataene viser - endring over en kontinuerlig variabel', 'Enzymer har ofte en optimal pH'],
        solution: `a) **Graftype:** Linjediagram eller punktdiagram
- pH er en kontinuerlig variabel
- Vi ønsker å se trenden og finne optimum
- Linjediagram viser tydelig kurveformen

b) **Metodebeskrivelse (eksempel):**
"Enzymaktivitet ble målt ved syv ulike pH-verdier (2, 4, 6, 7, 8, 10, 12). For hver pH-verdi ble 1 mL enzymløsning tilsatt 5 mL substratløsning med riktig pH, justert med buffer. Blandingen ble inkubert ved 37°C i 5 minutter. Produktmengden ble målt med spektrofotometer ved 540 nm. Aktiviteten ble beregnet som prosent av maksimal aktivitet. Forsøket ble gjentatt tre ganger for hver pH-verdi."

c) **Diskusjon (eksempel):**
"Resultatene viser at enzymet har maksimal aktivitet ved pH 7 (nøytral pH). Aktiviteten synker kraftig ved både sure (pH 2-4) og basiske (pH 10-12) forhold.

Dette stemmer med teori om at enzymer har en optimal pH der deres tredimensjonale struktur er mest stabil. Ved ekstreme pH-verdier denatureres enzymet - hydrogenionkonsentrasjonen endrer enzymets form slik at substratet ikke lenger passer i det aktive setet.

Resultatet er relevant for forståelsen av fordøyelsesenzymer - mageenzymer fungerer best i surt miljø (pH 2), mens tarmenzymer fungerer best ved nøytral pH.

En feilkilde kan være at temperaturkontroll ikke var perfekt. For å forbedre forsøket kunne vi testet flere pH-verdier rundt optimum (f.eks. pH 6,5 og 7,5) for å finne det eksakte optimum."`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Du skal skrive en rapport om et forsøk der du undersøkte om vann med ulik temperatur (5°C, 20°C, 35°C, 50°C) påvirker hvor raskt salt løser seg. Skriv de fire hoveddelene av rapporten (kort versjon).',
        subTasks: [
          { label: 'a', task: 'Skriv introduksjonen (3-4 setninger med problemstilling og hypotese)', solution: 'Løselighet er viktig i mange kjemiske prosesser. Temperaturen påvirker hvor raskt molekyler beveger seg, noe som kan påvirke løsningshastigheten. Problemstilling: Hvordan påvirker vanntemperaturen hvor raskt salt (NaCl) løser seg? Hypotese: Salt løser seg raskere i varmere vann fordi høyere temperatur gir molekylene mer kinetisk energi.' },
          { label: 'b', task: 'Skriv metodebeskrivelsen (utstyr og fremgangsmåte)', solution: 'Utstyr: 4 begerglass, termometer, vekt, stoppeklokke, NaCl, magnetrører (valgfritt). Fremgangsmåte: 1) Mål opp 100 mL vann i hvert glass. 2) Juster temperaturen til 5°C, 20°C, 35°C og 50°C. 3) Tilsett 5 g salt til hvert glass samtidig som du starter klokken. 4) Rør forsiktig og mål tiden til saltet er fullstendig oppløst. 5) Gjenta 3 ganger for hver temperatur.' },
          { label: 'c', task: 'Presenter mulige resultater i en tabell', solution: 'Temperatur | Tid (gjennomsnitt)\n5°C | 180 s\n20°C | 95 s\n35°C | 52 s\n50°C | 28 s' },
          { label: 'd', task: 'Skriv diskusjon og konklusjon', solution: 'Diskusjon: Resultatene viser at salt løser seg betydelig raskere ved høyere temperatur. Ved 50°C tok det bare 28 sekunder sammenlignet med 180 sekunder ved 5°C - over 6 ganger raskere. Dette støtter hypotesen. Forklaringen er at høyere temperatur gir vannmolekylene mer energi, slik at de beveger seg raskere og kolliderer oftere med saltkrystallene. Feilkilder: Vanskelig å vite nøyaktig når saltet er helt oppløst, temperaturen kan ha endret seg under forsøket. Konklusjon: Vanntemperaturen har stor effekt på løsningshastigheten til salt. Høyere temperatur gir raskere oppløsning.' },
        ],
        solution: 'En komplett rapport med alle fire hoveddeler som følger IMRaD-strukturen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **IMRaD-strukturen**: Den standardiserte oppbygningen av vitenskapelige rapporter med Introduksjon, Metode, Resultater, Analyse/Diskusjon og Konklusjon
- **Presentasjon av data**: Valg av riktig graftype (linjediagram, stolpediagram, sektordiagram, punktdiagram) for ulike typer data
- **Argumentere for metodevalg**: Hvordan beskrive og begrunne valg av utstyr, variabler og fremgangsmåte
- **Kildekritikk**: Vurdere troverdigheten til kilder basert på hvem, når, hvordan, hva og samsvar med andre kilder
- **Primær- og sekundærkilder**: Skille mellom originalforskning og tolkninger/oppsummeringer

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| IMRaD | Introduksjon, Metode, Resultater, Analyse, Diskusjon/Konklusjon |
| Primærkilde | Original, førstehånds kilde (f.eks. vitenskapelig artikkel) |
| Sekundærkilde | Tolker eller oppsummerer primærkilder (f.eks. lærebok) |
| Fagfellevurdering | Kvalitetskontroll der andre eksperter vurderer forskning |
| Kildekritikk | Systematisk vurdering av en kildes troverdighet og relevans |`
    },
    {
      id: 'nat-vg1-1-3-kilder',
      type: 'text',
      content: `### Kilder og videre lesning

- Utdanningsdirektoratet (udir.no) – Læreplan i naturfag (NAT01-04), kompetansemål for VG1
- Hannisdal, M. et al. (2021). *Kosmos – Naturfag VG1*. Fagbokforlaget.
- Heskestad, P. A. et al. (2020). *Tellus 11 – Naturfag VG1*. Cappelen Damm.
- Naturfag.no – «Rapportskriving i naturfag» og «Presentasjon av data»
- Viten.no – Undervisningsressurser om vitenskapelig kommunikasjon og kildekritikk`
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_1_4: TextbookChapter = {
  id: 'nat-vg1-1-4',
  courseId: 'nat-vg1',
  chapterNumber: '1.4',
  title: 'Risikovurdering og HMS',
  description: 'Lær om sikkerhet i laboratoriet, risikovurdering og forsvarlig håndtering av avfall.',
  estimatedMinutes: 65,
  competenceGoals: ['risikovurdere egne forsøk og håndtere avfallet fra disse på en forsvarlig måte'],
  content: [
    {
      id: 'nat-vg1-1-4-intro',
      type: 'text',
      content: `## Sikkerhet i naturfag - hvorfor det er viktig

Laboratoriearbeid er en spennende del av naturfag, men det innebærer også potensielle farer. Hvert år skjer det uhell på skolelaboratorier som kunne vært unngått med bedre planlegging og forsiktighet.

**HMS** (Helse, Miljø og Sikkerhet) handler om å jobbe trygt og ansvarlig. Som elev har du ansvar for din egen og andres sikkerhet i laboratoriet.

**I dette kapittelet skal du lære:**
- Grunnleggende sikkerhetsregler i laboratoriet
- Hvordan lese og forstå faresymboler (GHS)
- Hvordan gjennomføre en risikovurdering
- Riktig bruk av verneutstyr
- Forsvarlig håndtering av kjemisk avfall
- Hva du gjør ved uhell og ulykker

**Grunnleggende sikkerhetsregler:**
1. Bruk alltid påbudt verneutstyr
2. Les sikkerhetsdatablad (SDS) før du bruker kjemikalier
3. Vit hvor nødutstyr (øyedusj, brannteppe, førstehjelpsskrin) befinner seg
4. Aldri smak på eller lukt direkte på kjemikalier
5. Spis eller drikk aldri i laboratoriet
6. Meld fra til lærer umiddelbart ved uhell
7. Rydd alltid opp etter deg`,
    },
    {
      id: 'nat-vg1-1-4-def-1',
      type: 'definition',
      title: 'GHS-faresymboler',
      content: `**GHS (Globally Harmonized System)** er et internasjonalt system for merking av kjemikalier. Faresymbolene er røde ruter med hvit bakgrunn.

**De ni faresymbolene:**

| Symbol | Navn | Betydning | Eksempler |
|--------|------|-----------|-----------|
| 🔥 | **Brannfarlig** | Kan antennes lett | Etanol, aceton, bensin |
| 💀 | **Akutt giftig** | Livstruende ved svelging/innånding | Metanol, cyanid |
| ⚗️ | **Etsende** | Kan gi alvorlige etseskader | Saltsyre, natriumhydroksid |
| ⚠️ | **Irriterende/helsefarlig** | Kan irritere hud/øyne | Mange rengjøringsmidler |
| ☠️ | **Helsefare** | Kan forårsake kreft, mutasjoner | Formaldehyd, asbest |
| 🌊 | **Miljøfare** | Skadelig for vannmiljø | Tungmetaller, oljeprodukter |
| 🔥 | **Oksiderende** | Kan forsterke brann | Hydrogenperoksid, kaliumpermanganat |
| 💨 | **Gass under trykk** | Kan eksplodere ved oppvarming | Gassflasker |
| 💥 | **Eksplosiv** | Kan eksplodere ved støt/varme | Sprengstoff, fyrverkeri |

**Viktig å huske:**
- Ett kjemikalie kan ha flere faresymboler
- Les alltid sikkerhetsdatabladet for fullstendig informasjon
- Samme stoff kan ha ulik fareklasse avhengig av konsentrasjon`,
    },
    {
      id: 'nat-vg1-1-4-def-2',
      type: 'definition',
      title: 'Sikkerhetsdatablad (SDS)',
      content: `**Sikkerhetsdatablad (SDS)** er et dokument som gir detaljert informasjon om et kjemikalie.

**De viktigste delene av et SDS:**

**Del 1-3: Identifikasjon og fareidentifikasjon**
- Kjemikaliets navn og bruksområde
- Faresymboler og faresetninger
- Førstehjelptiltak

**Del 4-6: Førstehjelp og tiltak**
- Hva gjør du ved innånding, svelging, hudkontakt?
- Brannslokningsmidler
- Tiltak ved utslipp

**Del 7-8: Håndtering og personlig verneutstyr**
- Hvordan håndtere og lagre trygt
- Hvilke hansker, briller, masker som trengs
- Grenseverdier for eksponering

**Del 9-11: Fysiske og kjemiske egenskaper**
- Kokepunkt, smeltepunkt, løselighet
- Stabilitet og reaktivitet
- Helseinformasjon (kort- og langtidseffekter)

**Del 12-16: Miljø, avfall, transport**
- Miljøfare og nedbrytbarhet
- Avfallshåndtering
- Transportforskrifter

**Hvor finner du SDS?**
- På emballasjen (QR-kode)
- Hos leverandøren
- Databaser som EcoOnline eller STOFFKARTOTEK`,
    },
    {
      id: 'nat-vg1-1-4-example-1',
      type: 'example',
      title: 'Eksempel: Lese et sikkerhetsdatablad',
      problem: 'Du skal bruke saltsyre (HCl) i et forsøk. Hva bør du se etter i sikkerhetsdatabladet?',
      solution: `**Viktig informasjon fra SDS for saltsyre:**

**Fareidentifikasjon:**
- Faresymbol: Etsende (kan gi alvorlige etseskader)
- H-setninger: H314 - Gir alvorlige etseskader på hud og øyne
- H335 - Kan forårsake irritasjon av luftveiene

**Førstehjelp:**
- *Innånding:* Flytt til frisk luft, søk legehjelp
- *Hudkontakt:* Skyll umiddelbart med mye vann i minst 15 minutter
- *Øyekontakt:* Skyll med vann i minst 15 minutter, søk legehjelp umiddelbart
- *Svelging:* Skyll munnen, drikk vann, IKKE fremkall brekninger, søk legehjelp

**Verneutstyr:**
- Vernebriller (tette)
- Kjemikaliebestandige hansker (nitril)
- Labfrakk
- Arbeid i avtrekksskap ved konsentrert syre

**Håndtering:**
- Unngå innånding av damper
- Tilsett ALLTID syre til vann, aldri omvendt (kan sprute)
- Hold unna metaller (utvikler hydrogengass)

**Avfall:**
- Nøytraliser med base før avhending
- Lever som spesialavfall, ikke hell i vasken`,
    },
    {
      id: 'nat-vg1-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Lag en risikovurdering for følgende forsøk: "Undersøke pH i ulike husholdningsprodukter (eddik, såpe, sitronjuice, oppvaskmiddel) med pH-papir"',
        subTasks: [
          { label: 'a', task: 'Identifiser minst tre potensielle farer', solution: '1) Søl av væsker på hud eller i øyne. 2) Allergiske reaksjoner på såpe eller rengjøringsmidler. 3) Irritasjon ved kontakt med sterke syrer (eddik) eller baser (såpe) i øynene. 4) Glatte gulv ved søl.' },
          { label: 'b', task: 'Vurder risikoen (sannsynlighet og alvorlighet)', solution: 'Sannsynlighet for søl: Middels. Alvorlighet: Lav til middels (irritasjon, ikke alvorlig skade). Total risiko: Lav til middels - forsøket er relativt trygt, men noen forholdsregler er nødvendige.' },
          { label: 'c', task: 'Foreslå forebyggende tiltak og verneutstyr', solution: 'Verneutstyr: Vernebriller (viktig!), eventuelt hansker. Tiltak: Arbeid rolig, unngå å søle, ha papirhåndklær klare, vit hvor øyedusj er.' },
          { label: 'd', task: 'Hvordan skal avfallet håndteres?', solution: 'Husholdningsprodukter i små mengder kan skylles i vask med mye vann. Dette er hverdagsprodukter som allerede havner i avløpet hjemme.' },
        ],
        solution: 'En komplett risikovurdering med fareidentifikasjon, risikovurdering, forebygging og avfallsplan.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Koble faresymbolet til riktig beskrivelse:',
        subTasks: [
          { label: 'a', task: 'Etsende (korrosjonsymbol)', solution: 'Kan gi alvorlige etseskader på hud og øyne. Eksempler: sterke syrer og baser.' },
          { label: 'b', task: 'Brannfarlig (flamme)', solution: 'Kan lett antennes av gnist, varme eller åpen flamme. Eksempler: etanol, aceton.' },
          { label: 'c', task: 'Miljøfare (død fisk og tre)', solution: 'Skadelig for vannlevende organismer. Skal ikke slippes ut i avløp. Eksempler: tungmetaller, oljeprodukter.' },
          { label: 'd', task: 'Oksiderende (flamme over sirkel)', solution: 'Kan forårsake eller forsterke brann ved å avgi oksygen. Må holdes unna brennbare stoffer.' },
        ],
        solution: 'a) Etseskader, b) Lett antennelig, c) Skadelig for vannmiljø, d) Kan forsterke brann.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-4-def-3',
      type: 'definition',
      title: 'Risikovurdering - systematisk tilnærming',
      content: `**Risikovurdering** er en systematisk gjennomgang av potensielle farer før et forsøk.

**Risiko = Sannsynlighet x Konsekvens**

**Trinn 1: Identifiser farene**
- Hvilke kjemikalier brukes? (sjekk SDS)
- Brukes varme, elektrisitet, trykk?
- Er det fare for knusing, kutt, søl?
- Kan det dannes farlige gasser eller reaksjoner?

**Trinn 2: Vurder hvem som kan bli skadet**
- Deg selv
- Medelever
- Lærer
- Miljøet

**Trinn 3: Vurder risikoen**

| Sannsynlighet | Konsekvens | Risiko |
|---------------|------------|--------|
| Lav | Lav | Akseptabel |
| Lav | Høy | Moderat - tiltak nødvendig |
| Høy | Lav | Moderat - tiltak nødvendig |
| Høy | Høy | Uakseptabel - må reduseres |

**Trinn 4: Planlegg tiltak**
- Kan faren fjernes helt? (erstatt med tryggere stoff)
- Kan faren reduseres? (bruk mindre mengder)
- Verneutstyr som siste forsvarslinje

**Trinn 5: Planlegg for uhell**
- Hva gjør du hvis noe søles?
- Hva gjør du hvis noen får det på seg?
- Hvor er nødutstyret?

**Trinn 6: Dokumenter og kommuniser**
- Skriv ned risikovurderingen
- Del med alle som deltar i forsøket`,
    },
    {
      id: 'nat-vg1-1-4-example-2',
      type: 'example',
      title: 'Eksempel: Fullstendig risikovurdering',
      problem: 'Lag en risikovurdering for et forsøk der du skal varme opp vann med bunsenbrenneren og måle temperaturen.',
      solution: `**Forsøk:** Måle kokepunktet til vann

**Trinn 1: Identifiser farene**
| Fare | Kilde |
|------|-------|
| Brannskade | Bunsenbrenneren, varmt utstyr, kokende vann |
| Brann | Åpen flamme nær brennbare materialer |
| Sprut | Kokende vann kan sprute |
| Knusing | Begerglass kan gå i stykker ved rask temperaturendring |

**Trinn 2: Hvem kan bli skadet?**
- Eleven som utfører forsøket
- Medelever i nærheten
- Lærer

**Trinn 3: Vurder risikoen**
| Fare | Sannsynlighet | Konsekvens | Risiko |
|------|---------------|------------|--------|
| Brannskade fra flamme | Lav | Middels | Moderat |
| Brannskade fra vann | Middels | Middels | Moderat |
| Brann | Lav | Høy | Moderat |
| Knusing | Lav | Lav | Lav |

**Trinn 4: Forebyggende tiltak**
- Bruk vernebriller hele tiden
- Ha langt hår bundet tilbake
- Fjern brennbare materialer fra arbeidsområdet
- Bruk gripetang til varme gjenstander
- Pek aldri reagensrør mot noen
- Unngå rask avkjøling av varmt glass
- Ha brannteppe tilgjengelig

**Trinn 5: Ved uhell**
- Brannskade: Kjøl med kaldt vann i 20 minutter, varsle lærer
- Brann: Bruk brannteppe, varsle lærer
- Knust glass: Ikke ta opp med hendene, bruk kost og feiebrett

**Trinn 6: Nødutstyr**
- Øyedusj: Ved vasken
- Brannteppe: Ved døren
- Førstehjelpsskrin: I skapet

**Konklusjon:** Forsøket kan gjennomføres trygt med disse tiltakene.`,
    },
    {
      id: 'nat-vg1-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er feil i disse situasjonene, og hva bør gjøres i stedet?',
        subTasks: [
          { label: 'a', task: 'En elev lukter på en ukjent kjemikalie ved å holde flasken rett under nesen', solution: 'Feil: Kan inhalere giftige eller irriterende damper. Riktig: Bruk vifteteknikk - hold flasken på avstand og vifte forsiktig damper mot nesen med hånden.' },
          { label: 'b', task: 'En elev heller vann i konsentrert svovelsyre for å fortynne den', solution: 'Feil: Ekstremt farlig! Reaksjonen frigjør mye varme, vannet kan koke og sprute syre over alt. Riktig: Tilsett ALLTID syre til vann ("Do as you oughta, add acid to water").' },
          { label: 'c', task: 'En elev tar av vernebrillene fordi de dugger', solution: 'Feil: Øyeskader er blant de mest alvorlige laboratorieulykkene. Riktig: Be om antidugmiddel, ta en pause til brillene klarner, eller arbeid saktere.' },
          { label: 'd', task: 'Etter forsøket helles resten av en sølvnitratløsning i vasken', solution: 'Feil: Sølvnitrat er miljøfarlig (tungmetall) og skal ikke i avløpet. Riktig: Samle i merkede avfallsbeholdere for spesialavfall.' },
        ],
        solution: 'a) Bruk vifteteknikk. b) Syre til vann, aldri omvendt. c) Ikke ta av vernebriller. d) Lever som spesialavfall.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-4-def-4',
      type: 'definition',
      title: 'Avfallshåndtering',
      content: `**Riktig avfallshåndtering** beskytter både mennesker og miljø.

**Avfallskategorier i laboratoriet:**

**1. Ufarlig avfall (kan kastes/skylles)**
- Vann og ufarlige saltløsninger i små mengder
- Nøytraliserte syrer/baser (pH 6-8)
- Organiske stoffer som sukker, stivelse

**2. Kjemisk avfall (spesialbeholdere)**
- Syrer og baser (egne beholdere, ikke bland!)
- Organiske løsemidler (etanol, aceton)
- Tungmetaller (bly, kvikksølv, sølv)
- Oksiderende stoffer

**3. Biologisk avfall**
- Bakteriekulturer (autoklaveres først)
- Biologisk materiale

**Hovedregler for avfallshåndtering:**
1. **Aldri bland** ulike kjemikalier i samme avfallsbeholder
2. **Merk** alle avfallsbeholdere tydelig
3. **Nøytraliser** syrer og baser før avhending hvis mulig
4. **Spør** lærer hvis du er usikker
5. **Minimer** avfall ved å bruke bare nødvendige mengder

**Vanlige feil:**
- Helle syrer og baser i samme beholder (kan gi voldsom reaksjon)
- Helle organiske løsemidler i vasken (brannfare, miljøskade)
- Kaste skarpe gjenstander i vanlig søppel`,
    },
    {
      id: 'nat-vg1-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan skal følgende avfall håndteres?',
        subTasks: [
          { label: 'a', task: 'Rest av fortynnet saltsyre (HCl) etter et forsøk', solution: 'Nøytraliser med natriumhydrogenkarbonat (natron) til pH er ca. 7, deretter kan det skylles i vasken med mye vann. Alternativt: samle i beholder for sure løsninger.' },
          { label: 'b', task: 'Begerglass som har gått i stykker', solution: 'Samle opp forsiktig med kost og feiebrett (aldri med hendene). Kast i egen beholder for skarpt avfall eller pakk inn i papir før kasting i vanlig søppel.' },
          { label: 'c', task: 'Løsning med kobberioner etter elektrolyse', solution: 'Kobber er et tungmetall. Samle i merket beholder for tungmetaller/spesialavfall. Skal IKKE skylles i vasken.' },
          { label: 'd', task: 'Etanol som ble til overs etter desinfisering', solution: 'Etanol er brannfarlig. Samle i beholder for brannfarlige væsker, eller la det fordampe i avtrekksskap. Ikke hell store mengder i vasken.' },
        ],
        solution: 'a) Nøytraliser og skyll. b) Skarpt avfall. c) Spesialavfall (tungmetall). d) Brannfarlig avfall eller fordamp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-4-text-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Grunnleggende sikkerhetsregler:**
- Bruk alltid påbudt verneutstyr
- Les sikkerhetsdatablad (SDS) før bruk av kjemikalier
- Vit hvor nødutstyret er
- Meld fra til lærer ved uhell

**GHS-faresymboler:**
- Røde ruter med hvit bakgrunn
- 9 ulike symboler (brannfarlig, etsende, giftig, etc.)
- Ett stoff kan ha flere symboler

**Risikovurdering:**
1. Identifiser farene
2. Vurder hvem som kan skades
3. Vurder risiko (sannsynlighet x konsekvens)
4. Planlegg forebyggende tiltak
5. Planlegg for uhell
6. Dokumenter

**Avfallshåndtering:**
- Ufarlig avfall kan skylles/kastes
- Kjemisk avfall i merkede beholdere
- Aldri bland ulike kjemikalier
- Spør lærer hvis usikker

**Det viktigste å huske:**
- Sikkerhet kommer alltid først
- Planlegg før du starter
- Vær forberedt på uhell
- Ta ansvar for deg selv og andre`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-4-ex-5',
        number: '5',
        type: 'classic',
        task: `Du skal gjennomføre et forsøk der du skal lage en fortynnet løsning av saltsyre (HCl) og deretter nøytralisere den med natriumhydroksid (NaOH). Begge kjemikaliene har faresymbolet "etsende".

Lag en fullstendig risikovurdering for dette forsøket.`,
        hints: ['Tenk på alle trinn i forsøket', 'Hva skjer ved blanding av syre og base?', 'Husk "syre til vann"-regelen'],
        solution: `**Risikovurdering: Nøytralisering av saltsyre med natriumhydroksid**

**Fareidentifikasjon:**
- Saltsyre (HCl): Etsende, kan gi alvorlige skader på hud og øyne, avgir irriterende damper
- Natriumhydroksid (NaOH): Etsende, kan gi alvorlige skader på hud og øyne
- Nøytraliseringsreaksjonen frigjør varme (eksotermisk)
- Begge er farlige ved svelging

**Risikovurdering:**
| Fare | Sannsynlighet | Konsekvens | Tiltak |
|------|---------------|------------|--------|
| Søl på hud | Middels | Høy (etseskade) | Vernebriller, hansker, forsiktighet |
| Søl i øyne | Lav | Svært høy | Tette vernebriller |
| Innånding av damp | Lav | Middels | Arbeid i avtrekk |
| Varme ved nøytralisering | Middels | Lav-middels | Tilsett sakte, bruk varmebestandig glass |

**Verneutstyr:**
- Tette vernebriller (PÅBUDT)
- Kjemikaliebestandige hansker (nitril)
- Labfrakk
- Arbeid i avtrekksskap

**Fremgangsmåte (sikker):**
1. Tilsett SYRE til VANN ved fortynning (aldri omvendt)
2. Tilsett base sakte til syren under omrøring
3. Sjekk pH underveis med pH-papir
4. Stopp når pH er nøytral (ca. 7)

**Ved uhell:**
- Hudkontakt: Skyll med mye vann i 15+ minutter
- Øyekontakt: Skyll med øyedusj i minst 15 minutter, søk lege
- Søl: Nøytraliser med natron, tørk opp

**Avfall:**
Nøytralisert løsning (pH 6-8) kan skylles i vasken med mye vann.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'En elev planlegger et forsøk hjemme for å teste hvilket rengjøringsmiddel som fjerner kalkbelegg best. Hun vil bruke eddik, sitronsyre og et kalkfjerningsmiddel fra butikken.',
        subTasks: [
          { label: 'a', task: 'Hvilke farer kan være involvert i dette forsøket?', solution: 'Farer: 1) Kalkfjerningsmidler kan inneholde sterke syrer (saltsyre). 2) Eddik og sitronsyre er milde syrer men kan irritere øyne. 3) Aldri bland ulike rengjøringsmidler - kan danne giftige gasser. 4) Fare for søl og sprut.' },
          { label: 'b', task: 'Hvilke forholdsregler bør hun ta?', solution: 'Forholdsregler: 1) Les etiketten på alle produkter. 2) Bruk vernebriller. 3) Arbeid i godt ventilert rom. 4) Bruk hansker. 5) Test bare ett produkt om gangen. 6) ALDRI bland produkter. 7) Ha vann tilgjengelig for skylling.' },
          { label: 'c', task: 'Hvorfor er det viktig å aldri blande ulike rengjøringsmidler?', solution: 'Blandinger kan gi farlige reaksjoner: 1) Klorholdig middel + syre = klorgass (giftig). 2) Ammoniakk + klor = kloramindamp (giftig). 3) Ulike syrer kan gi uforutsigbare reaksjoner. Mange dødsfall skyldes slik blanding.' },
          { label: 'd', task: 'Skriv en kort sikkerhetsinstruks hun kan følge', solution: 'Sikkerhetsinstruks: 1) Les alle etiketter først. 2) Bruk vernebriller og hansker. 3) Åpne vindu for ventilasjon. 4) Test bare ett produkt om gangen. 5) Skyll med vann ved søl. 6) Aldri bland produkter. 7) Vask hendene grundig etterpå.' },
        ],
        solution: 'En fullstendig sikkerhetsvurdering for hjemmeforsøk med fokus på å aldri blande produkter og bruke verneutstyr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **HMS i laboratoriet**: Grunnleggende sikkerhetsregler som å bruke verneutstyr, lese sikkerhetsdatablad og kjenne til nødutstyr
- **GHS-faresymboler**: De ni internasjonale symbolene for merking av kjemikalier (brannfarlig, etsende, giftig, miljøfarlig m.fl.)
- **Sikkerhetsdatablad (SDS)**: Dokumenter med detaljert informasjon om kjemikalier, fareidentifikasjon, verneutstyr og avfallshåndtering
- **Risikovurdering**: Systematisk identifisering av farer, vurdering av sannsynlighet og konsekvens, og planlegging av tiltak
- **Avfallshåndtering**: Riktig sortering og håndtering av ufarlig, kjemisk og biologisk avfall

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| HMS | Helse, Miljø og Sikkerhet |
| GHS | Globally Harmonized System – internasjonalt merkesystem for kjemikalier |
| SDS | Sikkerhetsdatablad – informasjon om kjemikaliers farer og håndtering |
| Risikovurdering | Systematisk gjennomgang: Risiko = Sannsynlighet x Konsekvens |
| Kontrollgruppe | Kjemisk avfall som syrer, baser, løsemidler og tungmetaller krever spesialhåndtering |`
    },
    {
      id: 'nat-vg1-1-4-kilder',
      type: 'text',
      content: `### Kilder og videre lesning

- Utdanningsdirektoratet (udir.no) – Læreplan i naturfag (NAT01-04), kompetansemål for VG1
- Hannisdal, M. et al. (2021). *Kosmos – Naturfag VG1*. Fagbokforlaget.
- Arbeidstilsynet (arbeidstilsynet.no) – Forskrift om utførelse av arbeid, bruk og håndtering av kjemikalier
- EcoOnline (ecoonline.no) – Sikkerhetsdatablad og stoffkartotek for norske skoler
- Naturfag.no – «Sikkerhet i naturfagundervisningen» og «Risikovurdering i skolen»`
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_1_5: TextbookChapter = {
  id: 'nat-vg1-1-5',
  courseId: 'nat-vg1',
  chapterNumber: '1.5',
  title: 'Programmering og modellering',
  description: 'Bruk programmering til å modellere og utforske naturfaglige fenomener.',
  estimatedMinutes: 80,
  competenceGoals: ['vurdere og lage programmer som modellerer naturfaglige fenomener'],
  content: [
    {
      id: 'nat-vg1-1-5-intro',
      type: 'text',
      content: `## Programmering i naturfag - et kraftig verktøy

Moderne naturvitenskap er uløselig knyttet til datamaskiner og programmering. Fra å forutsi vær til å simulere klimaendringer, fra å analysere DNA-sekvenser til å modellere pandemier - programmering gjør det mulig å utforske fenomener som ville vært umulige å studere på andre måter.

**Hvorfor programmering i naturfag?**
- **Beregninger:** Gjør tusenvis av beregninger på sekunder
- **Visualisering:** Lag grafer og animasjoner av data
- **Simulering:** Test "hva hvis"-scenarier uten virkelige eksperimenter
- **Automatisering:** Repeter analyser med ulike verdier
- **Modellering:** Bygg matematiske modeller av naturfenomener

**I dette kapittelet skal du lære:**
- Grunnleggende programmering i Python
- Hvordan bruke variabler, løkker og betingelser
- Hvordan lage enkle naturvitenskapelige modeller
- Hvordan visualisere data med grafer
- Kritisk vurdering av programmodeller`,
    },
    {
      id: 'nat-vg1-1-5-def-1',
      type: 'definition',
      title: 'Grunnleggende Python - variabler og beregninger',
      content: `**Variabler** er "bokser" som lagrer verdier.

\`\`\`python
# Variabler med ulike datatyper
masse = 5.0          # Desimaltall (float)
antall = 10          # Heltall (int)
navn = "Natrium"     # Tekst (string)
er_metall = True     # Sann/usann (boolean)

# Beregninger
avstand = 100        # meter
tid = 10             # sekunder
fart = avstand / tid # beregning
print(f"Farten er {fart} m/s")  # Utskrift: Farten er 10.0 m/s
\`\`\`

**Matematiske operatorer:**
| Operator | Betydning | Eksempel |
|----------|-----------|----------|
| + | Addisjon | 5 + 3 = 8 |
| - | Subtraksjon | 5 - 3 = 2 |
| * | Multiplikasjon | 5 * 3 = 15 |
| / | Divisjon | 5 / 2 = 2.5 |
| ** | Potens | 5 ** 2 = 25 |
| // | Heltallsdivisjon | 5 // 2 = 2 |
| % | Rest (modulo) | 5 % 2 = 1 |

**Nyttige funksjoner:**
\`\`\`python
import math
math.sqrt(16)    # Kvadratrot: 4.0
math.pi          # Pi: 3.14159...
abs(-5)          # Absoluttverdi: 5
round(3.7)       # Avrunding: 4
\`\`\``,
    },
    {
      id: 'nat-vg1-1-5-example-1',
      type: 'example',
      title: 'Eksempel: Beregne energi og bølgelengde',
      problem: 'Lag et program som beregner energien til en foton gitt bølgelengden, og omvendt.',
      solution: `**Formelen:** E = h · f = h · c / λ

Der:
- E = energi (Joule)
- h = Plancks konstant (6.626 × 10⁻³⁴ J·s)
- c = lyshastigheten (3 × 10⁸ m/s)
- λ = bølgelengde (meter)

\`\`\`python
# Konstanter
h = 6.626e-34  # Plancks konstant (J·s)
c = 3e8        # Lyshastighet (m/s)

# Funksjon for å beregne energi fra bølgelengde
def energi_fra_bolgelengde(bolgelengde):
    """Beregner fotonenergi gitt bølgelengde i meter"""
    return h * c / bolgelengde

# Funksjon for å beregne bølgelengde fra energi
def bolgelengde_fra_energi(energi):
    """Beregner bølgelengde gitt fotonenergi i Joule"""
    return h * c / energi

# Test med synlig lys (grønt, ca. 550 nm)
bolgelengde = 550e-9  # 550 nm i meter
energi = energi_fra_bolgelengde(bolgelengde)
print(f"Bølgelengde: {bolgelengde*1e9} nm")
print(f"Energi: {energi:.3e} J")
print(f"Energi: {energi * 6.242e18:.2f} eV")  # Konverter til elektronvolt

# Resultat:
# Bølgelengde: 550.0 nm
# Energi: 3.614e-19 J
# Energi: 2.26 eV
\`\`\`

**Forklaring:** Grønt lys med bølgelengde 550 nm har en fotonenergi på ca. 2.26 eV.`,
    },
    {
      id: 'nat-vg1-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Skriv et program som beregner fart (v), gitt avstand (s) og tid (t). Test programmet med s = 150 m og t = 12 s.',
        hints: ['Formelen er v = s / t', 'Bruk variabler for s og t, beregn v'],
        solution: `\`\`\`python
# Beregne fart
avstand = 150  # meter
tid = 12       # sekunder

fart = avstand / tid

print(f"Avstand: {avstand} m")
print(f"Tid: {tid} s")
print(f"Fart: {fart:.2f} m/s")
\`\`\`

**Resultat:** Fart = 150 / 12 = 12.5 m/s`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-5-def-2',
      type: 'definition',
      title: 'Løkker - gjenta kode mange ganger',
      content: `**For-løkke** - når du vet hvor mange ganger:

\`\`\`python
# Tell fra 1 til 5
for i in range(1, 6):
    print(f"Telling: {i}")

# Summere tall
total = 0
for tall in [10, 20, 30, 40]:
    total = total + tall
print(f"Sum: {total}")  # 100
\`\`\`

**While-løkke** - når du ikke vet hvor mange ganger:

\`\`\`python
# Halvering til under 1
verdi = 100
antall = 0
while verdi >= 1:
    print(f"Steg {antall}: {verdi}")
    verdi = verdi / 2
    antall = antall + 1
print(f"Antall halveringer: {antall}")
\`\`\`

**range()-funksjonen:**
\`\`\`python
range(5)        # 0, 1, 2, 3, 4
range(1, 6)     # 1, 2, 3, 4, 5
range(0, 10, 2) # 0, 2, 4, 6, 8 (steg 2)
\`\`\`

**Lister - samle mange verdier:**
\`\`\`python
temperaturer = [18, 20, 22, 19, 21]
print(temperaturer[0])    # Første element: 18
print(len(temperaturer))  # Antall elementer: 5
temperaturer.append(23)   # Legg til element
\`\`\``,
    },
    {
      id: 'nat-vg1-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Skriv et program som beregner gjennomsnittlig temperatur fra en liste med målinger: [18.5, 19.2, 20.1, 18.8, 19.5]',
        hints: ['Sum = 0, løp gjennom listen og legg til hver verdi', 'Gjennomsnitt = sum / antall'],
        solution: `\`\`\`python
temperaturer = [18.5, 19.2, 20.1, 18.8, 19.5]

# Metode 1: Med løkke
total = 0
for temp in temperaturer:
    total = total + temp
gjennomsnitt = total / len(temperaturer)
print(f"Gjennomsnitt: {gjennomsnitt:.2f}°C")

# Metode 2: Med innebygd funksjon
gjennomsnitt = sum(temperaturer) / len(temperaturer)
print(f"Gjennomsnitt: {gjennomsnitt:.2f}°C")
\`\`\`

**Resultat:** Gjennomsnitt = (18.5 + 19.2 + 20.1 + 18.8 + 19.5) / 5 = 19.22°C`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-5-def-3',
      type: 'definition',
      title: 'Betingelser - ta valg i koden',
      content: `**If-setninger** lar programmet ta beslutninger:

\`\`\`python
temperatur = 25

if temperatur > 30:
    print("Varmt!")
elif temperatur > 20:
    print("Behagelig")
elif temperatur > 10:
    print("Kjølig")
else:
    print("Kaldt!")
\`\`\`

**Sammenligningsoperatorer:**
| Operator | Betydning |
|----------|-----------|
| == | Er lik |
| != | Er ikke lik |
| > | Større enn |
| < | Mindre enn |
| >= | Større enn eller lik |
| <= | Mindre enn eller lik |

**Kombinere betingelser:**
\`\`\`python
alder = 16
har_billett = True

if alder >= 15 and har_billett:
    print("Velkommen til filmen!")
elif alder < 15:
    print("Du er for ung.")
else:
    print("Du trenger billett.")
\`\`\`

| Operator | Betydning |
|----------|-----------|
| and | Begge må være sanne |
| or | Minst én må være sann |
| not | Snur sann til usann |`,
    },
    {
      id: 'nat-vg1-1-5-example-2',
      type: 'example',
      title: 'Eksempel: Modellere radioaktiv nedbrytning',
      problem: 'Lag et program som simulerer radioaktiv nedbrytning med halveringstid på 10 år, og plotter resultatet.',
      solution: `\`\`\`python
import matplotlib.pyplot as plt

# Startbetingelser
N0 = 1000           # Startmengde (antall atomer)
halveringstid = 10  # År

# Lister for å lagre data til plotting
tider = []
mengder = []

# Simuler i 50 år
for tid in range(51):
    # Formel: N = N0 * 0.5^(t/halveringstid)
    mengde = N0 * (0.5 ** (tid / halveringstid))
    tider.append(tid)
    mengder.append(mengde)

    # Skriv ut for hvert 10. år
    if tid % 10 == 0:
        print(f"År {tid}: {mengde:.1f} atomer ({mengde/N0*100:.1f}%)")

# Plot resultatet
plt.figure(figsize=(10, 6))
plt.plot(tider, mengder, 'b-', linewidth=2)
plt.axhline(y=500, color='r', linestyle='--', label='50% (1 halveringstid)')
plt.axhline(y=250, color='g', linestyle='--', label='25% (2 halveringstider)')
plt.xlabel('Tid (år)', fontsize=12)
plt.ylabel('Antall atomer', fontsize=12)
plt.title('Radioaktiv nedbrytning', fontsize=14)
plt.legend()
plt.grid(True)
plt.show()
\`\`\`

**Utskrift:**
\`\`\`
År 0: 1000.0 atomer (100.0%)
År 10: 500.0 atomer (50.0%)
År 20: 250.0 atomer (25.0%)
År 30: 125.0 atomer (12.5%)
År 40: 62.5 atomer (6.2%)
År 50: 31.2 atomer (3.1%)
\`\`\`

**Forklaring:** Mengden halveres hver 10. år. Etter 5 halveringstider (50 år) er bare 3.1% igjen.`,
    },
    {
      id: 'nat-vg1-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Modifiser programmet for radioaktiv nedbrytning til å finne ut hvor mange år det tar før bare 1% av stoffet er igjen. (Start med 1000 enheter, halveringstid 10 år)',
        hints: ['Bruk en while-løkke som fortsetter så lenge mengde > 10', '1% av 1000 = 10'],
        solution: `\`\`\`python
N0 = 1000
halveringstid = 10
mengde = N0
tid = 0

# Fortsett til mengden er under 1%
while mengde > N0 * 0.01:
    tid = tid + 1
    mengde = N0 * (0.5 ** (tid / halveringstid))

print(f"Etter {tid} år er mengden {mengde:.2f} ({mengde/N0*100:.2f}%)")
print(f"Det tar ca. {tid} år før bare 1% er igjen.")
\`\`\`

**Svar:** Det tar ca. 66-67 år (6.6-6.7 halveringstider) før bare 1% er igjen.

Matematisk: 0.01 = 0.5^n, der n = antall halveringstider
log(0.01) / log(0.5) = 6.64 halveringstider
6.64 × 10 år = 66.4 år`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-5-def-4',
      type: 'definition',
      title: 'Visualisering med matplotlib',
      content: `**Matplotlib** er et bibliotek for å lage grafer og diagrammer.

\`\`\`python
import matplotlib.pyplot as plt

# Data
x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]

# Linjediagram
plt.plot(x, y, 'b-', label='Lineær sammenheng')
plt.xlabel('X-verdier')
plt.ylabel('Y-verdier')
plt.title('Enkel graf')
plt.legend()
plt.grid(True)
plt.show()
\`\`\`

**Formatstrenger for utseende:**
| Kode | Betydning |
|------|-----------|
| 'b-' | Blå linje |
| 'r--' | Rød stiplet |
| 'go' | Grønne sirkler |
| 'k^' | Svarte trekanter |
| 'b-o' | Blå linje med sirkler |

**Flere nyttige funksjoner:**
\`\`\`python
plt.figure(figsize=(10, 6))  # Størrelse på figur
plt.subplot(1, 2, 1)         # Flere grafer ved siden av hverandre
plt.scatter(x, y)            # Punktdiagram
plt.bar(x, y)                # Stolpediagram
plt.savefig('graf.png')      # Lagre som bilde
\`\`\``,
    },
    {
      id: 'nat-vg1-1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag et program som simulerer eksponentiell befolkningsvekst med 2% årlig vekst. Start med 1000 individer og simuler 50 år. Plot resultatet.',
        hints: ['Formel: befolkning_neste = befolkning * (1 + vekstrate)', 'Bruk en løkke og lagre verdiene i lister'],
        solution: `\`\`\`python
import matplotlib.pyplot as plt

# Startbetingelser
befolkning = 1000
vekstrate = 0.02  # 2% årlig vekst

# Lister for data
aar = []
befolkninger = []

# Simuler 50 år
for t in range(51):
    aar.append(t)
    befolkninger.append(befolkning)

    if t % 10 == 0:
        print(f"År {t}: {befolkning:.0f} individer")

    befolkning = befolkning * (1 + vekstrate)

# Plot
plt.figure(figsize=(10, 6))
plt.plot(aar, befolkninger, 'g-', linewidth=2)
plt.xlabel('År')
plt.ylabel('Befolkning')
plt.title('Eksponentiell befolkningsvekst (2% per år)')
plt.grid(True)
plt.show()
\`\`\`

**Utskrift:**
\`\`\`
År 0: 1000 individer
År 10: 1219 individer
År 20: 1486 individer
År 30: 1811 individer
År 40: 2208 individer
År 50: 2692 individer
\`\`\`

Befolkningen nesten tredobles på 50 år med 2% årlig vekst!`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-5-text-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Grunnleggende Python:**
- **Variabler:** Lagrer verdier (tall, tekst, lister)
- **Operatorer:** +, -, *, /, ** (potens)
- **Print:** Skriv ut resultater

**Løkker:**
- **for:** Når du vet antall gjentakelser
- **while:** Når du ikke vet antall gjentakelser
- **Lister:** Samle mange verdier

**Betingelser:**
- **if/elif/else:** Ta beslutninger i koden
- **Sammenligninger:** ==, !=, >, <, >=, <=
- **Logiske:** and, or, not

**Visualisering med matplotlib:**
- plt.plot() for linjediagram
- plt.xlabel(), plt.ylabel(), plt.title() for tekst
- plt.grid(), plt.legend(), plt.show()

**Modellering i naturfag:**
- Radioaktiv nedbrytning: N = N₀ · 0.5^(t/t½)
- Eksponentiell vekst: N = N₀ · (1+r)^t
- Fotonenergi: E = h·c/λ

**Det viktigste å huske:**
- Programmering automatiserer beregninger
- Modeller er forenklinger - vurder alltid begrensninger
- Visualisering gjør data lettere å forstå`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-5-ex-5',
        number: '5',
        type: 'classic',
        task: `Lag et program som simulerer en rovdyr-byttedyr-modell (Lotka-Volterra).

Startbetingelser:
- Byttedyr (kaniner): 100
- Rovdyr (rever): 20
- Reproduksjonsrate kaniner: 0.1 per måned
- Dødsrate kaniner pga. rever: 0.01 per møte
- Dødsrate rever (uten mat): 0.1 per måned
- Reproduksjonsrate rever (med mat): 0.005 per fanget kanin

Simuler 100 måneder og plot begge populasjonene.`,
        hints: ['Kaniner øker naturlig, minsker ved jakt', 'Rever minsker naturlig, øker ved mat', 'Møter = kaniner × rever'],
        solution: `\`\`\`python
import matplotlib.pyplot as plt

# Startbetingelser
kaniner = 100
rever = 20

# Rater
kanin_repro = 0.1      # Reproduksjonsrate kaniner
kanin_dod = 0.01       # Dødsrate per møte med rev
rev_dod = 0.1          # Naturlig dødsrate rever
rev_repro = 0.005      # Reproduksjonsrate per fanget kanin

# Lister for plotting
tid = []
kanin_pop = []
rev_pop = []

# Simuler 100 måneder
for t in range(101):
    tid.append(t)
    kanin_pop.append(kaniner)
    rev_pop.append(rever)

    # Beregn endringer
    moter = kaniner * rever
    d_kaniner = kaniner * kanin_repro - moter * kanin_dod
    d_rever = moter * rev_repro - rever * rev_dod

    # Oppdater populasjoner
    kaniner = max(0, kaniner + d_kaniner)  # Ikke negative
    rever = max(0, rever + d_rever)

# Plot
plt.figure(figsize=(12, 6))
plt.plot(tid, kanin_pop, 'b-', label='Kaniner (byttedyr)')
plt.plot(tid, rev_pop, 'r-', label='Rever (rovdyr)')
plt.xlabel('Tid (måneder)')
plt.ylabel('Populasjon')
plt.title('Rovdyr-byttedyr-modell (Lotka-Volterra)')
plt.legend()
plt.grid(True)
plt.show()
\`\`\`

**Forventet resultat:** Populasjonene svinger syklisk - når det er mange kaniner, øker revene. Når revene øker, minker kaninene, som fører til at revene minsker, osv.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-5-ex-6',
        number: '6',
        type: 'classic',
        task: `Vurder følgende programmodell kritisk:

\`\`\`python
# Modell for å forutsi karakterer basert på studietimer
studietimer = 10
karakter = studietimer * 0.5 + 1
print(f"Forventet karakter: {karakter}")
\`\`\`

a) Hva forutsier modellen for 10 timers studier?
b) Hva er begrensningene med denne modellen?
c) Hvordan kunne modellen forbedres?`,
        solution: `a) **Forutsigelse:**
- karakter = 10 * 0.5 + 1 = 6
- Modellen forutsier karakter 6 for 10 timers studier.

b) **Begrensninger:**
1. **Lineær sammenheng:** Antar at mer studering alltid gir bedre karakter, men det er en øvre grense (karakter 6).
2. **Ingen øvre grense:** Med 20 timer får du karakter 11, som er umulig.
3. **Overforenklet:** Tar ikke hensyn til:
   - Kvalitet på studiene (effektivitet)
   - Forkunnskaper
   - Vanskelighetsgrad på faget
   - Dagsform på eksamen
   - Søvn og helse
4. **Ingen variasjon:** To personer som studerer like mye vil få ulik karakter.

c) **Forbedringer:**
\`\`\`python
import random

def beregn_karakter(studietimer, forkunnskaper=3, vanskelighet=1):
    base_karakter = min(6, studietimer * 0.3 + forkunnskaper * 0.5)
    tilfeldig_faktor = random.uniform(-0.5, 0.5)
    karakter = base_karakter + tilfeldig_faktor - vanskelighet * 0.2
    return max(1, min(6, round(karakter)))
\`\`\`

Forbedringer:
- Øvre grense på 6
- Inkluderer forkunnskaper
- Tar hensyn til vanskelighetsgrad
- Legger til tilfeldig variasjon (dagsform)
- Avrunder til hele karakterer`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Programmering i naturfag**: Hvordan Python brukes som verktøy for beregninger, visualisering og modellering av naturfaglige fenomener
- **Grunnleggende Python**: Variabler, matematiske operatorer, print-funksjonen og nyttige importerte funksjoner
- **Løkker og lister**: For-løkker, while-løkker og lister for å gjenta beregninger og samle data
- **Betingelser**: If/elif/else-setninger for å ta beslutninger i programmet
- **Visualisering med matplotlib**: Lage grafer og diagrammer for å presentere data
- **Modellering**: Simulere naturvitenskapelige fenomener som radioaktiv nedbrytning og befolkningsvekst

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Variabel | En «boks» som lagrer verdier (tall, tekst, lister) |
| For-løkke | Gjenta kode et bestemt antall ganger |
| While-løkke | Gjenta kode så lenge en betingelse er sann |
| Matplotlib | Python-bibliotek for å lage grafer og diagrammer |
| Modellering | Bruke programkode til å simulere naturfaglige fenomener |`
    },
    {
      id: 'nat-vg1-1-5-kilder',
      type: 'text',
      content: `### Kilder og videre lesning

- Utdanningsdirektoratet (udir.no) – Læreplan i naturfag (NAT01-04), kompetansemål om programmering og modellering
- Hannisdal, M. et al. (2021). *Kosmos – Naturfag VG1*. Fagbokforlaget.
- Heskestad, P. A. et al. (2020). *Tellus 11 – Naturfag VG1*. Cappelen Damm.
- Python.org – Offisiell dokumentasjon for Python-programmeringsspråket
- Matplotlib.org – Dokumentasjon for matplotlib-biblioteket
- Naturfag.no – «Programmering i naturfag» – undervisningsressurser og eksempler`
    },
  ],
  exercises: [],
};

// ============================================================================
// SEKSJON 2: Bølger, stråling og radioaktivitet
// ============================================================================

export const CHAPTER_NAT_VG1_2_1: TextbookChapter = {
  id: 'nat-vg1-2-1',
  courseId: 'nat-vg1',
  chapterNumber: '2.1',
  title: 'Bølger og bølgefenomener',
  description: 'Utforsk grunnleggende bølgeegenskaper som bølgelengde, frekvens og amplitude.',
  estimatedMinutes: 75,
  competenceGoals: ['utforske og beskrive noen sentrale bølgefenomener'],
  content: [
    {
      id: 'nat-vg1-2-1-intro',
      type: 'text',
      content: `## Hva er en bølge?

Se for deg at du kaster en stein i et stille vann. Ringer sprer seg utover fra stedet steinen traff. Disse ringene er bølger - de transporterer energi utover, men vannet selv flyttes ikke med bølgen. En kork som flyter på vannet ville bare ha gått opp og ned, ikke fulgt bølgen utover.

**En bølge er en forstyrrelse som forplanter seg gjennom et medium eller gjennom rommet.** Det viktigste kjennetegnet er at bølger overfører **energi** uten å flytte **materie** permanent.

**I dette kapittelet skal du lære:**
- Hva som kjennetegner bølger
- Forskjellen mellom tverrbølger og lengdebølger
- Bølgeegenskaper: bølgelengde, frekvens, amplitude og hastighet
- Sammenhengen v = f · λ
- Bølgefenomener som refleksjon, brytning og interferens`,
    },
    {
      id: 'nat-vg1-2-1-def-1',
      type: 'definition',
      title: 'Typer bølger',
      content: `**1. Tverrbølger (transversale bølger)**
Svingningene er **vinkelrett** på bevegelsesretningen.

*Eksempler:*
- Bølger på en vannoverflate
- Bølger på et tau
- Elektromagnetiske bølger (lys, radio)
- Jordskorpen ved jordskjelv (S-bølger)

**2. Lengdebølger (longitudinale bølger)**
Svingningene er **parallelle** med bevegelsesretningen.

*Eksempler:*
- Lydbølger i luft
- Trykkbølger
- Fjærbølger (komprimer en fjær og slipp)
- Jordskjelvbølger (P-bølger)

**Mekaniske vs. elektromagnetiske bølger:**

| Mekaniske bølger | Elektromagnetiske bølger |
|------------------|--------------------------|
| Trenger et medium (luft, vann, fast stoff) | Kan bevege seg i vakuum |
| Lyd, vannbølger, jordskjelv | Lys, radio, røntgen |
| Hastighet avhenger av mediet | Alle har c = 3×10⁸ m/s i vakuum |`,
    },
    {
      id: 'nat-vg1-2-1-def-2',
      type: 'definition',
      title: 'Bølgeegenskaper',
      content: `**Bølgelengde (λ - lambda)**
Avstanden mellom to påfølgende bølgetopper (eller bunner).
- Måles i meter (m)
- For lys: ofte i nanometer (nm) = 10⁻⁹ m

**Frekvens (f)**
Antall komplette svingninger per sekund.
- Måles i Hertz (Hz) = svingninger/sekund
- 1 kHz = 1000 Hz
- 1 MHz = 1 000 000 Hz

**Periode (T)**
Tiden for én komplett svingning.
- Måles i sekunder (s)
- T = 1/f

**Amplitude (A)**
Maksimal utslag fra likevektsposisjonen.
- Bestemmer bølgens intensitet/styrke
- For lyd: høyere amplitude = sterkere lyd
- For lys: høyere amplitude = sterkere lys

**Bølgehastighet (v)**
Hvor langt bølgen beveger seg per tidsenhet.
- Måles i m/s
- Avhenger av mediet (for mekaniske bølger)

**Den viktigste sammenhengen:**
$$v = f \\cdot \\lambda$$

Bølgehastighet = frekvens × bølgelengde

Denne formelen gjelder for ALLE typer bølger!`,
    },
    {
      id: 'nat-vg1-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Beregne bølgelengde for radiobølger',
      problem: 'En radiosender sender på frekvensen 100 MHz (NRK P1). Hva er bølgelengden når radiobølger beveger seg med lysets hastighet (3·10⁸ m/s)?',
      solution: `**Gitt:**
- f = 100 MHz = 100 · 10⁶ Hz = 1 · 10⁸ Hz
- v = c = 3 · 10⁸ m/s

**Søkt:** Bølgelengde (λ)

**Løsning:**
Vi bruker formelen v = f · λ og løser for λ:

$$\\lambda = \\frac{v}{f} = \\frac{3 \\cdot 10^8 \\text{ m/s}}{1 \\cdot 10^8 \\text{ Hz}} = 3 \\text{ m}$$

**Svar:** Bølgelengden er 3 meter.

**Kommentar:** FM-radiobølger har bølgelengder på noen meter. Derfor kalles de noen ganger "meterbølger". Dette er også grunnen til at FM-antenner er relativt store.`,
    },
    {
      id: 'nat-vg1-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Lyd beveger seg med 340 m/s i luft. Beregn bølgelengden til en tone på 440 Hz (kammertone A).',
        hints: ['Bruk formelen v = f · λ', 'Løs for λ: λ = v/f'],
        solution: `**Gitt:** v = 340 m/s, f = 440 Hz

**Løsning:**
λ = v/f = 340 m/s / 440 Hz = 0,773 m

**Svar:** Bølgelengden er ca. 0,77 m (77 cm).

Dette betyr at avstanden mellom to trykktopper i lydbølgen er ca. 77 cm.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Rødt lys har bølgelengde 700 nm. Beregn frekvensen til rødt lys. (Lyshastigheten er 3·10⁸ m/s)',
        hints: ['Omregn nanometer til meter: 1 nm = 10⁻⁹ m', 'f = v/λ'],
        solution: `**Gitt:** λ = 700 nm = 700 · 10⁻⁹ m = 7 · 10⁻⁷ m, v = 3 · 10⁸ m/s

**Løsning:**
f = v/λ = (3 · 10⁸ m/s) / (7 · 10⁻⁷ m) = 4,29 · 10¹⁴ Hz

**Svar:** Frekvensen til rødt lys er ca. 4,3 · 10¹⁴ Hz (430 THz).

Dette er en ekstremt høy frekvens - 430 billioner svingninger per sekund!`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-1-def-3',
      type: 'definition',
      title: 'Bølgefenomener',
      content: `**Refleksjon**
Bølgen kastes tilbake når den treffer en hindring.
- Innfallsvinkel = refleksjonsvinkel
- Eksempel: Ekko, speil

**Brytning (refraksjon)**
Bølgen endrer retning når den går fra ett medium til et annet.
- Skjer fordi hastigheten endrer seg
- Eksempel: Sugerør i vannglass ser "knekt" ut

**Interferens**
To bølger møtes og forsterker eller svekker hverandre.
- Konstruktiv interferens: Bølgene forsterker hverandre (topp møter topp)
- Destruktiv interferens: Bølgene utslukker hverandre (topp møter bunn)
- Eksempel: Støyreduserende hodetelefoner

**Diffraksjon (bøyning)**
Bølger bøyer seg rundt hindringer eller gjennom åpninger.
- Mest tydelig når åpningen er på størrelse med bølgelengden
- Eksempel: Du kan høre lyd rundt et hjørne

**Stående bølger**
Bølger som ser ut til å stå stille.
- Oppstår når to like bølger beveger seg i motsatt retning
- Eksempel: Gitarstreng, orgelpipe`,
    },
    {
      id: 'nat-vg1-2-1-example-2',
      type: 'example',
      title: 'Eksempel: Interferens i praksis',
      problem: 'Hvordan fungerer støyreduserende hodetelefoner?',
      solution: `**Prinsipp: Destruktiv interferens**

Støyreduserende hodetelefoner bruker prinsippet om destruktiv interferens for å redusere uønsket lyd.

**Hvordan det fungerer:**

1. **Mikrofoner** på utsiden av hodetelefonene fanger opp omgivelsesstøy

2. **Prosessering:** Elektronikken analyserer lydbølgene

3. **Motsatt bølge:** Høyttalerne lager en lydbølge som er nøyaktig motsatt av støyen:
   - Der originalstøyen har en topp, lager hodetelefonene en bunn
   - Der originalstøyen har en bunn, lager hodetelefonene en topp

4. **Destruktiv interferens:** De to bølgene møtes og utslukker hverandre

**Resultat:** Du hører (nesten) stillhet i stedet for støy.

**Begrensninger:**
- Fungerer best for jevn, lavfrekvent støy (motorlyd, flykabin)
- Fungerer dårligere for plutselige, høyfrekvente lyder (snakking)
- Kan aldri bli 100% perfekt på grunn av forsinkelse i elektronikken`,
    },
    {
      id: 'nat-vg1-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar forskjellen mellom tverrbølger og lengdebølger med egne ord, og gi et eksempel på hver.',
        solution: `**Tverrbølger:**
Partiklene i mediet svinger vinkelrett på (på tvers av) bølgens bevegelsesretning. Tenk på en bølge på et tau - du rister tauet opp og ned, men bølgen beveger seg bortover tauet.
*Eksempel:* Bølger på vann, lys, bølger på et tau.

**Lengdebølger:**
Partiklene i mediet svinger i samme retning som bølgen beveger seg. Det dannes områder med høyt trykk (kompresjon) og lavt trykk (rarefaksjon).
*Eksempel:* Lydbølger - luftmolekylene presses sammen og spres ut i bølgens retning.

**Illustrasjon:**
- Tverrbølge: ∿∿∿∿∿ (opp-ned bevegelse)
- Lengdebølge: ||||  ||  ||||  ||  |||| (tett-spredt-tett)`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'En bølge har frekvens 50 Hz og bølgelengde 4 m. Beregn bølgehastigheten og perioden.',
        subTasks: [
          { label: 'a', task: 'Beregn bølgehastigheten', solution: 'v = f · λ = 50 Hz · 4 m = 200 m/s' },
          { label: 'b', task: 'Beregn perioden', solution: 'T = 1/f = 1/50 Hz = 0,02 s = 20 ms' },
        ],
        solution: 'a) v = 200 m/s, b) T = 0,02 s',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-1-text-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Hva er en bølge?**
En forstyrrelse som forplanter seg og overfører energi uten å flytte materie permanent.

**Typer bølger:**
- **Tverrbølger:** Svingninger vinkelrett på bevegelsesretningen (lys, vannbølger)
- **Lengdebølger:** Svingninger parallelt med bevegelsesretningen (lyd)

**Bølgeegenskaper:**
| Egenskap | Symbol | Enhet | Betydning |
|----------|--------|-------|-----------|
| Bølgelengde | λ | m | Avstand mellom to topper |
| Frekvens | f | Hz | Svingninger per sekund |
| Periode | T | s | Tid for én svingning |
| Amplitude | A | m | Maksimalt utslag |
| Hastighet | v | m/s | Hvor raskt bølgen beveger seg |

**Viktige sammenhenger:**
- v = f · λ (bølgeformelen)
- T = 1/f (periode og frekvens)

**Bølgefenomener:**
- Refleksjon, brytning, interferens, diffraksjon, stående bølger`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-1-ex-5',
        number: '5',
        type: 'classic',
        task: `Mennesker kan høre lyder med frekvenser mellom 20 Hz og 20 000 Hz. Lydhastigheten i luft er 340 m/s.

a) Beregn bølgelengden til den dypeste tonen mennesker kan høre (20 Hz).
b) Beregn bølgelengden til den lyseste tonen mennesker kan høre (20 000 Hz).
c) Hvorfor er det lettere å høre basslyder rundt et hjørne enn diskanttoner?`,
        hints: ['Bruk λ = v/f for begge beregningene', 'Tenk på diffraksjon - bølger bøyer seg rundt hindringer'],
        solution: `a) **Dypeste tone (20 Hz):**
λ = v/f = 340 m/s / 20 Hz = **17 meter**

b) **Lyseste tone (20 000 Hz):**
λ = v/f = 340 m/s / 20 000 Hz = **0,017 m = 1,7 cm**

c) **Hvorfor basslyder høres rundt hjørner:**
Diffraksjon (bøyning av bølger) er mest effektiv når bølgelengden er på størrelse med eller større enn hindringen.

- Basslyder har lang bølgelengde (opptil 17 m), så de bøyer seg lett rundt vegger og hjørner
- Diskanttoner har kort bølgelengde (ned til 1,7 cm), så de reflekteres i stedet for å bøye seg

Derfor er bass "allestedsnærværende" mens diskant er mer retningsbestemt.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-1-ex-6',
        number: '6',
        type: 'classic',
        task: `Et ekkolodd på en båt sender ut lydbølger ned mot havbunnen. Lyden bruker 0,4 sekunder på å gå ned og komme tilbake. Lydhastigheten i sjøvann er ca. 1500 m/s.

a) Hvor dypt er havet?
b) Ekkoloddet bruker frekvens 50 kHz. Beregn bølgelengden.
c) Hvorfor bruker ekkolodd høyere frekvens enn menneskelig hørsel?`,
        solution: `a) **Dybde:**
Lyden går ned OG opp, så den tilbakelagte distansen er 2 × dybden.

Total distanse = hastighet × tid = 1500 m/s × 0,4 s = 600 m
Dybde = 600 m / 2 = **300 meter**

b) **Bølgelengde:**
f = 50 kHz = 50 000 Hz
λ = v/f = 1500 m/s / 50 000 Hz = **0,03 m = 3 cm**

c) **Hvorfor høy frekvens?**
Høyere frekvens gir:
1. **Bedre oppløsning:** Kortere bølgelengde kan "se" mindre detaljer på bunnen
2. **Mindre diffraksjon:** Lyden sprer seg mindre, gir mer fokusert stråle
3. **Bedre refleksjon:** Korte bølger reflekteres bedre fra små objekter

Ulempe: Høyere frekvens absorberes raskere, så rekkevidden blir kortere. For dyphav brukes lavere frekvens.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Hva en bølge er**: En forstyrrelse som forplanter seg og overfører energi uten å flytte materie permanent
- **Typer bølger**: Tverrbølger (svingninger vinkelrett på bevegelsesretningen) og lengdebølger (svingninger parallelt)
- **Bølgeegenskaper**: Bølgelengde (λ), frekvens (f), periode (T), amplitude (A) og hastighet (v)
- **Bølgeformelen**: v = f · λ – den viktigste sammenhengen for alle bølger
- **Bølgefenomener**: Refleksjon, brytning, interferens (konstruktiv og destruktiv), diffraksjon og stående bølger

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Bølgelengde (λ) | Avstanden mellom to påfølgende bølgetopper, måles i meter |
| Frekvens (f) | Antall svingninger per sekund, måles i Hertz (Hz) |
| Amplitude (A) | Maksimalt utslag fra likevektsposisjonen |
| Interferens | Når to bølger møtes og forsterker eller svekker hverandre |
| Diffraksjon | Bølger som bøyer seg rundt hindringer eller gjennom åpninger |
| Mekaniske bølger | Trenger et medium (lyd, vannbølger) |`
    },
    {
      id: 'nat-vg1-2-1-kilder',
      type: 'text',
      content: `### Kilder og videre lesning

- Store norske leksikon (snl.no) – «Bølger», «Bølgelengde», «Interferens» og «Diffraksjon»
- Hannisdal, M. et al. (2021). *Kosmos – Naturfag VG1*. Fagbokforlaget.
- Heskestad, P. A. et al. (2020). *Tellus 11 – Naturfag VG1*. Cappelen Damm.
- NTNU – Institutt for fysikk: Undervisningsressurser om bølgefysikk
- Naturfag.no – «Bølger og bølgefenomener» – undervisningsopplegg for VG1`
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_2_2: TextbookChapter = {
  id: 'nat-vg1-2-2',
  courseId: 'nat-vg1',
  chapterNumber: '2.2',
  title: 'Lydbølger og akustikk',
  description: 'Lær om lyd som bølgefenomen, lydhastighet og akustiske fenomener.',
  estimatedMinutes: 70,
  competenceGoals: ['utforske og beskrive noen sentrale bølgefenomener'],
  content: [
    {
      id: 'nat-vg1-2-2-intro',
      type: 'text',
      content: `## Lyd - trykkbølger i luft

Vi lever omgitt av lyder - fra fuglene om morgenen til trafikken utenfor vinduet. Men hva er egentlig lyd? Hvorfor kan vi høre noen lyder og ikke andre? Og hvorfor kan du ikke høre noen rope i verdensrommet?

**Lyd er mekaniske lengdebølger** som forplanter seg gjennom et medium. I motsetning til lys, som er elektromagnetisk stråling, trenger lyd et materielt medium for å bevege seg - luft, vann, eller fast stoff.

**I dette kapittelet skal du lære:**
- Hvordan lyd oppstår og forplanter seg
- Sammenhengen mellom frekvens og tonehøyde
- Hvordan lydstyrke måles i desibel
- Lydhastighet i ulike medier
- Akustiske fenomener som ekko og resonans
- Hva ultralyd og infralyd er`,
    },
    {
      id: 'nat-vg1-2-2-def-1',
      type: 'definition',
      title: 'Hvordan lyd oppstår og forplanter seg',
      content: `**Lydkilden vibrerer**
Når et objekt vibrerer (f.eks. en gitarstreng, stemmebåndene dine, eller en høyttaler), presser det mot luftmolekylene rundt seg.

**Trykkbølger dannes**
- Når objektet beveger seg utover, presses luftmolekylene sammen (kompresjon = høyt trykk)
- Når objektet beveger seg innover, spres molekylene (rarefaksjon = lavt trykk)
- Disse trykksonene forplanter seg utover som en bølge

**Øret oppfatter trykkendringer**
- Trommehinnen i øret vibrerer med trykkendringene
- Signalene sendes til hjernen som tolker dem som lyd

**Viktig:** Lyd kan IKKE forplante seg i vakuum!
- I verdensrommet er det ingen luftmolekyler
- Derfor: Ingen kan høre deg rope i verdensrommet (filmer som viser eksplosjoner i rommet med lyd er fysisk feil!)

**Lyd som lengdebølge:**
Lyd er en lengdebølge fordi luftmolekylene svinger frem og tilbake i samme retning som bølgen beveger seg - de presses sammen og spres ut langs bølgens retning.`,
    },
    {
      id: 'nat-vg1-2-2-def-2',
      type: 'definition',
      title: 'Lydegenskaper - frekvens, styrke og klang',
      content: `**1. Tonehøyde - bestemmes av frekvensen**

| Frekvens | Oppfattelse | Eksempel |
|----------|-------------|----------|
| Lav (20-200 Hz) | Dyp tone (bass) | Kontrabass, torden |
| Middels (200-2000 Hz) | Vanlige toner | Tale, de fleste instrumenter |
| Høy (2000-20000 Hz) | Lys tone (diskant) | Fløyte, fuglekvitter |

Mennesker hører normalt 20 Hz - 20 000 Hz. Hørselen svekkes med alderen, spesielt for høye frekvenser.

**2. Lydstyrke - bestemmes av amplituden**

Måles i **desibel (dB)** - en logaritmisk skala:

| Lydnivå | Eksempel | Virkning |
|---------|----------|----------|
| 0 dB | Høreterskelen | Stillhet |
| 30 dB | Stille rom | Behagelig |
| 60 dB | Normal samtale | OK |
| 85 dB | Tung trafikk | Risiko ved langvarig eksponering |
| 100 dB | Konsert | Hørselskade mulig |
| 120 dB | Fly tar av | Smerte |
| 140 dB | Skudd | Umiddelbar skade |

**OBS:** Hver 10 dB økning oppleves som dobling av lydstyrken!

**3. Klangfarge (timbre)**
- Gjør at vi kan skille instrumenter som spiller samme tone
- Bestemmes av overtoner (frekvenser som er multipla av grunntonen)
- En fiolin og en fløyte på samme tone høres forskjellig ut pga. ulike overtoner`,
    },
    {
      id: 'nat-vg1-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Beregne avstand til lynet',
      problem: 'Du ser et lyn og hører tordenen 4,5 sekunder senere. Hvor langt unna var lynet?',
      solution: `**Analyse:**
Lys beveger seg med ca. 300 000 km/s - så raskt at vi ser lynet nesten umiddelbart.
Lyd beveger seg med ca. 343 m/s i luft ved 20°C.

**Gitt:**
- Tid mellom lyn og torden: t = 4,5 s
- Lydhastighet: v = 343 m/s

**Løsning:**
Avstanden = hastighet × tid
s = v × t = 343 m/s × 4,5 s = **1544 m ≈ 1,5 km**

**Tommelfingerregel:**
Del antall sekunder på 3 for å få avstanden i kilometer.
4,5 s / 3 ≈ 1,5 km

**Hvorfor fungerer dette?**
343 m/s ≈ 1/3 km per sekund = ca. 1 km per 3 sekunder`,
    },
    {
      id: 'nat-vg1-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Du ser et lyn og hører tordenen 3 sekunder senere. Hvor langt unna var lynet? (Lydhastighet i luft: 343 m/s)',
        hints: ['Lyset kommer nesten umiddelbart', 'Avstanden = hastighet × tid'],
        solution: `**Gitt:** t = 3 s, v = 343 m/s

**Løsning:**
Avstand = v × t = 343 m/s × 3 s = 1029 m

**Svar:** Lynet var ca. **1 km** unna.

Tommelfingerregel: 3 sekunder ÷ 3 = 1 km`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvorfor en person som står på jernbaneskinnen kan høre et tog komme lenge før en person som står ved siden av skinnen.',
        hints: ['Tenk på lydhastighet i ulike medier', 'Lyd forplanter seg raskere i faste stoffer'],
        solution: `**Forklaring:**
Lyd beveger seg mye raskere i faste stoffer enn i luft:
- Lydhastighet i stål: ca. 5960 m/s
- Lydhastighet i luft: ca. 343 m/s

Lyden fra toget forplanter seg gjennom skinnene ca. 17 ganger raskere enn gjennom luften.

Derfor vil en person med øret mot skinnen høre toget lenge før lyden gjennom luften når dem.

**Historisk bruk:**
I gamle westernfilmer legger folk øret mot jernbanesporet for å høre om et tog nærmer seg - dette er faktisk god fysikk!

**Advarsel:** Gjør aldri dette i virkeligheten - det er livsfarlig å oppholde seg på jernbanespor!`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-2-def-3',
      type: 'definition',
      title: 'Lydhastighet i ulike medier',
      content: `Lydhastigheten avhenger av mediets egenskaper:

**I gasser:**
| Medium | Hastighet | Kommentar |
|--------|-----------|-----------|
| Luft (0°C) | 331 m/s | |
| Luft (20°C) | 343 m/s | +0,6 m/s per °C |
| Luft (30°C) | 349 m/s | |
| Helium | 970 m/s | Derfor blir stemmen lys! |
| Karbondioksid | 259 m/s | Dyp stemme |

**I væsker:**
| Medium | Hastighet |
|--------|-----------|
| Ferskvann (20°C) | 1480 m/s |
| Sjøvann | 1530 m/s |

**I faste stoffer:**
| Medium | Hastighet |
|--------|-----------|
| Glass | 5640 m/s |
| Stål | 5960 m/s |
| Aluminium | 6320 m/s |
| Tre (langs fiber) | 3000-5000 m/s |

**Hvorfor forskjellene?**
- Faste stoffer: Molekylene sitter tett og er sterkt bundet - vibrasjoner overføres effektivt
- Væsker: Molekylene er tett, men mindre bundet
- Gasser: Molekylene er langt fra hverandre og beveger seg tilfeldig

**Temperatureffekt:**
Høyere temperatur = molekylene beveger seg raskere = lyden forplanter seg raskere`,
    },
    {
      id: 'nat-vg1-2-2-example-2',
      type: 'example',
      title: 'Eksempel: Heliumstemme',
      problem: 'Hvorfor høres stemmen lys ut når man puster inn helium?',
      solution: `**Forklaring:**

Lydhastigheten i helium (970 m/s) er nesten tre ganger høyere enn i luft (343 m/s).

**Hva skjer med stemmen?**

Stemmebåndene vibrerer med samme frekvens som vanlig, men resonansforholdene i munn- og halshulen endres.

Sammenhengen v = f · λ gjelder fortsatt:

- I helium har lyden høyere hastighet (v øker)
- For at lyden skal "passe" i resonanshulen, må bølgelengden bli lengre
- Men kroppen forsterker best de frekvensene der bølgelengden passer hulrommene
- Resultatet: Overtonene forskyves oppover, og stemmen høres lysere ut

**Er det farlig?**
Helium i seg selv er ufarlig (det er en edelgass), men:
- Ved gjentatt innånding kan man få oksygenmangel
- Aldri pust direkte fra en trykktank - kan skade lungene

**Morsomt faktum:**
Innånding av svovelheksafluorid (SF₆), som har lav lydhastighet, gir dyp "monsterstemme".`,
    },
    {
      id: 'nat-vg1-2-2-def-4',
      type: 'definition',
      title: 'Ultralyd og infralyd',
      content: `**Hørbart område for mennesker:** 20 Hz - 20 000 Hz

**Infralyd (under 20 Hz)**
- For dype toner til at mennesker kan høre
- Elefanter kommuniserer med infralyd (kan høres km unna)
- Jordskjelv produserer infralyd
- Kan føles som vibrasjoner i kroppen
- Brukes i noen høyttalersystemer for ekstra bass

**Ultralyd (over 20 000 Hz)**
- For lyse toner til at mennesker kan høre
- Flaggermus bruker ultralyd (ekkolokalisering) opptil 100 000 Hz
- Delfiner: opptil 150 000 Hz
- Hunder kan høre opptil ca. 40 000 Hz

**Bruksområder for ultralyd:**
| Anvendelse | Frekvens | Formål |
|------------|----------|--------|
| Medisinsk ultralyd | 2-18 MHz | Se foster, indre organer |
| Ekkolodd | 20-200 kHz | Måle dybde, finne fisk |
| Rengjøring | 20-40 kHz | Løsne smuss (ultralydvasker) |
| Sveising | 20-40 kHz | Smelte plast sammen |

**Hvorfor kan vi ikke høre ultralyd?**
Ørets strukturer (trommehinne, bein, hår i sneglehuset) er ikke i stand til å vibrere raskt nok til å registrere så høye frekvenser.`,
    },
    {
      id: 'nat-vg1-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'En flaggermus sender ut ultralyd med frekvens 50 kHz for å finne insekter. Lydhastigheten i luft er 340 m/s.',
        subTasks: [
          { label: 'a', task: 'Beregn bølgelengden til ultralyden', solution: 'λ = v/f = 340 m/s / 50 000 Hz = 0,0068 m = 6,8 mm' },
          { label: 'b', task: 'Hvorfor er kort bølgelengde viktig for flaggermusen?', solution: 'Kort bølgelengde gir bedre oppløsning - flaggermusen kan oppdage små objekter (insekter) fordi lyden reflekteres fra objekter som er større enn bølgelengden. Med λ = 6,8 mm kan den oppdage insekter på noen millimeter.' },
        ],
        solution: 'a) λ = 6,8 mm. b) Kort bølgelengde gir høy oppløsning for å oppdage små insekter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Et ekko kommer tilbake 0,5 sekunder etter at du har ropt. Hvor langt unna er veggen/fjellet? (Lydhastighet: 340 m/s)',
        hints: ['Lyden går frem OG tilbake', 'Total distanse = 2 × avstand til reflekterende flate'],
        solution: `**Gitt:** Total tid = 0,5 s, v = 340 m/s

**Viktig:** Lyden går frem til veggen OG tilbake til deg.

**Løsning:**
Total distanse = v × t = 340 m/s × 0,5 s = 170 m
Avstand til veggen = 170 m / 2 = **85 meter**

**Hvorfor deler vi på 2?**
Fordi lyden reiser dobbel distanse - til veggen og tilbake.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-2-text-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Hva er lyd?**
Mekaniske lengdebølger (trykkbølger) som trenger et medium for å forplante seg.

**Lydegenskaper:**
| Egenskap | Bestemmes av | Måles i |
|----------|--------------|---------|
| Tonehøyde | Frekvens | Hz |
| Lydstyrke | Amplitude | dB (desibel) |
| Klangfarge | Overtoner | - |

**Hørbart område:** 20 Hz - 20 000 Hz
- Under 20 Hz: Infralyd
- Over 20 000 Hz: Ultralyd

**Lydhastighet:**
- Luft (20°C): 343 m/s
- Vann: 1480 m/s
- Stål: 5960 m/s
- Raskere i faste stoffer enn i gasser

**Viktige formler:**
- v = f · λ
- Avstand til lyn: s = 343 × t (m)
- Ekko: avstand = (v × t) / 2`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-2-ex-5',
        number: '5',
        type: 'classic',
        task: `Lydforurensning er et økende problem. Grensen for langvarig eksponering på arbeidsplasser er 85 dB.

a) Nevn tre helseeffekter av langvarig støyeksponering.
b) En konsert har lydnivå 105 dB. Hvor mange ganger sterkere oppleves denne lyden sammenlignet med 85 dB? (Hint: Hver 10 dB er dobling av opplevd lydstyrke)
c) Foreslå tre tiltak for å beskytte hørselen.`,
        solution: `a) **Helseeffekter av langvarig støyeksponering:**
1. Permanent hørselstap (skade på hårcellene i det indre øret)
2. Tinnitus (øresus/piping)
3. Søvnforstyrrelser og stress
4. Økt blodtrykk og hjerte-kar-sykdom
5. Konsentrasjonsvansker

b) **Hvor mye sterkere er 105 dB enn 85 dB?**
Forskjell: 105 - 85 = 20 dB
Hver 10 dB = dobling av opplevd lydstyrke
20 dB = 2 × 2 = **4 ganger sterkere opplevd lyd**

(Merk: Faktisk lydintensitet øker 100 ganger ved 20 dB!)

c) **Tiltak for å beskytte hørselen:**
1. Bruke hørselsvern/ørepropper på konserter og bråkete arbeidsplasser
2. Begrense tiden med høretelefoner på høyt volum
3. Ta pauser fra støy
4. Holde avstand til lydkilder (f.eks. høyttalere)
5. Velge støyreduserende hodetelefoner
6. Sjekke lydnivåinnstillinger på telefon/musikkspiller`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-2-ex-6',
        number: '6',
        type: 'classic',
        task: `Ved medisinsk ultralyd brukes frekvenser på 2-18 MHz for å ta bilder av indre organer og fostre.

a) Beregn bølgelengden i vev (som har omtrent samme lydhastighet som vann: 1540 m/s) for ultralyd på 5 MHz.
b) Hvorfor brukes høyere frekvens for å se detaljer nær overflaten og lavere frekvens for dypere strukturer?
c) Forklar hvorfor ultralyd er tryggere enn røntgen for å se på fostre.`,
        solution: `a) **Bølgelengde ved 5 MHz:**
f = 5 MHz = 5 × 10⁶ Hz
v = 1540 m/s

λ = v/f = 1540 / (5 × 10⁶) = 3,08 × 10⁻⁴ m = **0,31 mm**

b) **Hvorfor ulike frekvenser for ulike dybder:**

**Høy frekvens (10-18 MHz):**
- Kort bølgelengde = høy oppløsning (ser små detaljer)
- MEN: Absorberes raskt av vev, rekker ikke dypt

**Lav frekvens (2-5 MHz):**
- Lang bølgelengde = lavere oppløsning
- MEN: Penetrerer dypere inn i kroppen

Kompromiss: Velg frekvens basert på hva du skal undersøke.

c) **Hvorfor ultralyd er tryggere enn røntgen:**
1. **Ultralyd er ikke ioniserende stråling** - det er bare lydbølger som reflekteres
2. **Røntgen er ioniserende** - kan skade DNA og øke kreftrisiko
3. Ved de intensitetene som brukes medisinsk, har ultralyd ingen kjente skadelige effekter
4. Røntgenstråling akkumuleres over livet, ultralyd gjør ikke det

Derfor brukes ultralyd rutinemessig for å overvåke svangerskap, mens røntgen unngås hos gravide.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Lyd som lengdebølge**: Mekaniske trykkbølger som forplanter seg gjennom et medium – kan ikke bevege seg i vakuum
- **Lydegenskaper**: Tonehøyde bestemmes av frekvens, lydstyrke av amplitude (målt i desibel), og klangfarge av overtoner
- **Lydhastighet**: Varierer med mediet – raskere i faste stoffer (stål: 5960 m/s) enn i luft (343 m/s)
- **Hørbart område**: 20 Hz – 20 000 Hz for mennesker; infralyd under 20 Hz og ultralyd over 20 000 Hz
- **Støy og helse**: Langvarig eksponering over 85 dB kan gi permanent hørselsskade

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Desibel (dB) | Logaritmisk enhet for lydstyrke; +10 dB oppleves som dobling |
| Infralyd | Lyd med frekvens under 20 Hz (uhørbar for mennesker) |
| Ultralyd | Lyd med frekvens over 20 000 Hz (brukes medisinsk, ekkolodd) |
| Ekko | Refleksjon av lyd fra en overflate |
| Klangfarge | Bestemt av overtoner – gjør at instrumenter høres forskjellig ut |
| Kompresjon | Område med høyt trykk i en lydbølge |`
    },
    {
      id: 'nat-vg1-2-2-kilder',
      type: 'text',
      content: `### Kilder og videre lesning

- Store norske leksikon (snl.no) – «Lyd», «Lydhastighet», «Desibel» og «Ultralyd»
- Hannisdal, M. et al. (2021). *Kosmos – Naturfag VG1*. Fagbokforlaget.
- Heskestad, P. A. et al. (2020). *Tellus 11 – Naturfag VG1*. Cappelen Damm.
- Arbeidstilsynet (arbeidstilsynet.no) – «Støy på arbeidsplassen» og grenseverdier for støyeksponering
- NTNU – Institutt for fysikk: Akustikk og lydbølger – undervisningsressurser`
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_2_3: TextbookChapter = {
  id: 'nat-vg1-2-3',
  courseId: 'nat-vg1',
  chapterNumber: '2.3',
  title: 'Det elektromagnetiske spekteret',
  description: 'Utforsk de ulike typene elektromagnetisk stråling fra radiobølger til gammastråling.',
  estimatedMinutes: 80,
  competenceGoals: ['utforske og beskrive elektromagnetisk og ioniserende stråling, og vurdere informasjon om stråling og helseeffekter'],
  content: [
    {
      id: 'nat-vg1-2-3-intro',
      type: 'text',
      content: `## Elektromagnetisk stråling - mer enn bare lys

Vi mennesker kan bare se en liten del av all stråling som omgir oss. Det vi kaller "lys" er bare et smalt bånd i et enormt spekter av elektromagnetisk stråling. Fra radiobølgene som bringer deg musikk, til røntgenstrålene som avslører beinbrudd - alt er egentlig samme type fenomen, bare med ulike egenskaper.

**Elektromagnetisk (EM) stråling** er bølger bestående av oscillerende elektriske og magnetiske felt som forplanter seg gjennom rommet. I motsetning til lyd trenger EM-stråling ikke noe medium - den kan bevege seg gjennom vakuum.

**I dette kapittelet skal du lære:**
- Hva elektromagnetisk stråling er
- De ulike delene av det elektromagnetiske spekteret
- Sammenhengen mellom frekvens, bølgelengde og energi
- Forskjellen mellom ioniserende og ikke-ioniserende stråling
- Bruksområder og effekter av ulike typer stråling`,
    },
    {
      id: 'nat-vg1-2-3-def-1',
      type: 'definition',
      title: 'Egenskaper ved elektromagnetisk stråling',
      content: `**Alle typer EM-stråling har dette til felles:**

1. **Samme hastighet i vakuum**
   c = 299 792 458 m/s ≈ 3 · 10⁸ m/s (lysets hastighet)

2. **Bølge-partikkel-dualitet**
   EM-stråling oppfører seg både som bølger og som partikler (fotoner)

3. **Trenger ikke medium**
   Kan bevege seg gjennom tomt rom (vakuum)

4. **Bærer energi**
   Energien til et foton: E = h · f
   (h = Plancks konstant = 6,626 × 10⁻³⁴ J·s)

**Det som skiller de ulike typene:**

| Egenskap | Sammenheng |
|----------|------------|
| Bølgelengde (λ) | Lang → Kort |
| Frekvens (f) | Lav → Høy |
| Energi (E) | Lav → Høy |

**Bølgeformelen:** c = f · λ

Siden c er konstant:
- Høyere frekvens → kortere bølgelengde
- Kortere bølgelengde → høyere energi`,
    },
    {
      id: 'nat-vg1-2-3-def-2',
      type: 'definition',
      title: 'Det elektromagnetiske spekteret',
      content: `**Fra lang bølgelengde (lav energi) til kort bølgelengde (høy energi):**

| Type | Bølgelengde | Frekvens | Kilde/bruk |
|------|-------------|----------|------------|
| **Radiobølger** | km - cm | kHz - GHz | Radio, TV, mobil, WiFi |
| **Mikrobølger** | cm - mm | GHz | Mikrobølgeovn, radar, 5G |
| **Infrarød (IR)** | mm - 700 nm | THz | Varme, fjernkontroller, nattssyn |
| **Synlig lys** | 700-400 nm | ~10¹⁴ Hz | Det vi ser! |
| **Ultrafiolett (UV)** | 400-10 nm | ~10¹⁵ Hz | Solbrenthet, desinfeksjon |
| **Røntgen** | 10-0,01 nm | ~10¹⁸ Hz | Medisinsk bildetaking |
| **Gammastråling** | < 0,01 nm | > 10¹⁹ Hz | Radioaktivt henfall, kreftbehandling |

**Huskeregel:** "Randi Mikset Inferno (med) Synlig UV-filter, Røntget Gammelt"
(Radio, Mikro, Infrarød, Synlig, UV, Røntgen, Gamma)

**Ioniserende vs. ikke-ioniserende:**
- **Ikke-ioniserende:** Radio, mikro, IR, synlig lys (lav del av UV)
- **Ioniserende:** UV-C, røntgen, gamma - har nok energi til å slå løs elektroner fra atomer`,
    },
    {
      id: 'nat-vg1-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Beregne fotonenergi',
      problem: 'Beregn energien til et foton med bølgelengde 550 nm (grønt lys). Sammenlign med energien til et røntgenfoton med bølgelengde 0,1 nm.',
      solution: `**Formel:** E = h · f = h · c / λ

Der:
- h = 6,626 × 10⁻³⁴ J·s (Plancks konstant)
- c = 3 × 10⁸ m/s (lyshastigheten)

**Grønt lys (λ = 550 nm = 5,5 × 10⁻⁷ m):**

E = (6,626 × 10⁻³⁴ × 3 × 10⁸) / (5,5 × 10⁻⁷)
E = **3,6 × 10⁻¹⁹ J** ≈ 2,3 eV

**Røntgen (λ = 0,1 nm = 1 × 10⁻¹⁰ m):**

E = (6,626 × 10⁻³⁴ × 3 × 10⁸) / (1 × 10⁻¹⁰)
E = **2,0 × 10⁻¹⁵ J** ≈ 12 400 eV

**Sammenligning:**
Røntgenfotonets energi / Grønt lysfotons energi = 12 400 / 2,3 ≈ **5400 ganger sterkere**

Dette forklarer hvorfor røntgen kan skade celler og grønt lys ikke kan!`,
    },
    {
      id: 'nat-vg1-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Ranger følgende fra lavest til høyest energi: røntgen, synlig lys, mikrobølger, UV-stråling, radiobølger, gammastråling',
        solution: `**Fra lavest til høyest energi:**

Radiobølger < mikrobølger < synlig lys < UV-stråling < røntgen < gammastråling

**Huskeregel:** Følg spekteret fra lang til kort bølgelengde - kortere bølgelengde = høyere energi.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'En mobiltelefon opererer på frekvensen 1800 MHz. Beregn bølgelengden til denne strålingen. Hvilken type EM-stråling er dette?',
        hints: ['Bruk λ = c/f', 'c = 3 × 10⁸ m/s', '1 MHz = 10⁶ Hz'],
        solution: `**Gitt:**
f = 1800 MHz = 1800 × 10⁶ Hz = 1,8 × 10⁹ Hz
c = 3 × 10⁸ m/s

**Løsning:**
λ = c/f = (3 × 10⁸) / (1,8 × 10⁹) = 0,167 m = **16,7 cm**

**Type stråling:**
Med bølgelengde på ca. 17 cm er dette i grenseområdet mellom **radiobølger og mikrobølger**.

Mobilstråling klassifiseres ofte som mikrobølger/radiofrekvent stråling.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-3-def-3',
      type: 'definition',
      title: 'Synlig lys - det vi kan se',
      content: `Det synlige spekteret utgjør bare en liten del av EM-spekteret (400-700 nm):

**Fargene i regnbuen:**
| Farge | Bølgelengde | Energi | Huskeregel |
|-------|-------------|--------|------------|
| Rødt | 620-700 nm | Lavest | |
| Oransje | 590-620 nm | | |
| Gult | 570-590 nm | | |
| Grønt | 495-570 nm | | |
| Blått | 450-495 nm | | |
| Fiolett | 380-450 nm | Høyest | |

**Huskeregel (engelsk):** "ROY G BIV" - Red, Orange, Yellow, Green, Blue, Indigo, Violet

**Hvitt lys:**
En blanding av alle synlige bølgelengder. Når hvitt lys passerer gjennom et prisme, splittes det opp i regnbuens farger fordi ulike bølgelengder brytes ulikt.

**Svart:**
Fravær av synlig lys - ingen fotoner når øyet.

**Hvorfor ser vi farger?**
- Objekter absorberer noen bølgelengder og reflekterer andre
- Et rødt eple absorberer blått og grønt, reflekterer rødt
- Et hvitt objekt reflekterer alle farger
- Et svart objekt absorberer alle farger`,
    },
    {
      id: 'nat-vg1-2-3-def-4',
      type: 'definition',
      title: 'Infrarød stråling - varmestråling',
      content: `**Infrarød (IR) stråling** har bølgelengder mellom synlig rødt lys og mikrobølger (700 nm - 1 mm).

**Deles ofte i:**
- Nær-infrarød (NIR): 700-1400 nm
- Midt-infrarød (MIR): 1400-3000 nm
- Fjern-infrarød (FIR): 3000 nm - 1 mm

**Kilder til IR:**
- Alle varme objekter sender ut IR
- Jo varmere, jo mer IR og kortere bølgelengde
- Menneskekroppen: ca. 10 μm (37°C)
- Solen: mye NIR

**Bruksområder:**
| Anvendelse | Hvordan |
|------------|---------|
| Fjernkontroller | NIR-dioder sender signaler |
| Varmekameraer | Detekterer IR fra varme objekter |
| Nattsyn | Militært/jakt - ser varme dyr/mennesker |
| Infrarød oppvarming | Terrasse-varmere |
| Kommunikasjon | Fiberoptikk bruker ofte NIR |

**Helseeffekt:**
IR gir varmefølelse, men høy intensitet kan gi brannskader. Ikke ioniserende.`,
    },
    {
      id: 'nat-vg1-2-3-example-2',
      type: 'example',
      title: 'Eksempel: Hvorfor er himmelen blå og solnedganger røde?',
      problem: 'Forklar hvorfor himmelen er blå på dagtid og hvorfor solnedganger ofte er røde/oransje.',
      solution: `**Fenomenet: Rayleigh-spredning**

Når sollys treffer atmosfæren, spres det av luftmolekylene. Graden av spredning avhenger av bølgelengden.

**Spredning ∝ 1/λ⁴**

Kortere bølgelengder (blått lys) spres mye mer enn lange bølgelengder (rødt lys).

**På dagtid:**
- Blått lys spres i alle retninger i atmosfæren
- Når du ser opp, ser du spredt blått lys fra alle kanter
- Derfor er himmelen blå

**Ved solnedgang:**
- Sollyset må gjennom mye mer atmosfære (lengre vei på skrå)
- Nesten alt blått lys spres bort før det når deg
- Bare rødt og oransje lys kommer frem
- Derfor ser solnedganger røde ut

**Hvorfor ikke fiolett?**
Fiolett lys spres enda mer enn blått, men:
1. Solen sender ut mindre fiolett lys
2. Øynene våre er mer sensitive for blått
3. Noe fiolett absorberes høyt i atmosfæren`,
    },
    {
      id: 'nat-vg1-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar forskjellen mellom ioniserende og ikke-ioniserende stråling, og gi eksempler på hver.',
        solution: `**Ikke-ioniserende stråling:**
- Har IKKE nok energi til å slå løs elektroner fra atomer
- Kan ikke direkte skade DNA
- Kan likevel gi varmeeffekter ved høy intensitet
- *Eksempler:* Radiobølger, mikrobølger, infrarød, synlig lys, UV-A

**Ioniserende stråling:**
- Har NOK energi til å slå løs elektroner fra atomer (ionisering)
- Kan skade DNA og øke kreftrisiko
- Fotonenergi typisk over ca. 10 eV
- *Eksempler:* UV-C, røntgen, gammastråling

**Grensen:**
UV-stråling er på grensen. UV-A og UV-B er på grensen til ioniserende, mens UV-C (under 280 nm) er klart ioniserende.

**Viktig:**
Ikke-ioniserende betyr ikke "ufarlig" - mikrobølger kan varme opp vev, og høy UV kan gi solbrenthet. Men de gir ikke direkte DNA-skade på samme måte som ioniserende stråling.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Koble riktig type EM-stråling til bruksområdet:',
        subTasks: [
          { label: 'a', task: 'Mikrobølgeovn varmer opp mat', solution: 'Mikrobølger - får vannmolekyler til å vibrere raskt, som varmer opp maten.' },
          { label: 'b', task: 'Sykehus tar bilde av brukket bein', solution: 'Røntgenstråling - penetrerer bløtvev men absorberes av bein, gir skyggebilde.' },
          { label: 'c', task: 'Soldater ser fiender om natten', solution: 'Infrarød - varmekameraer detekterer kroppsvarmens IR-stråling.' },
          { label: 'd', task: 'Sterilisering av medisinsk utstyr', solution: 'Gamma eller UV-C - dreper bakterier ved å skade deres DNA.' },
        ],
        solution: 'a) Mikrobølger, b) Røntgen, c) Infrarød, d) Gamma/UV-C',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-3-text-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Elektromagnetisk stråling:**
- Bølger av elektriske og magnetiske felt
- Beveger seg med lyshastigheten c = 3 × 10⁸ m/s
- Trenger ikke medium (kan bevege seg i vakuum)
- Energi øker med frekvens: E = h · f

**Det elektromagnetiske spekteret (fra lav til høy energi):**
Radio → Mikrobølger → Infrarød → Synlig lys → UV → Røntgen → Gamma

**Synlig lys (400-700 nm):**
Rødt (700 nm) → Oransje → Gult → Grønt → Blått → Fiolett (400 nm)

**Ioniserende vs. ikke-ioniserende:**
- Ikke-ioniserende: Radio, mikro, IR, synlig, UV-A (kan ikke slå løs elektroner)
- Ioniserende: UV-C, røntgen, gamma (kan skade DNA)

**Viktige formler:**
- c = f · λ (bølgeformel)
- E = h · f (fotonenergi)
- λ = c/f (bølgelengde fra frekvens)`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-3-ex-5',
        number: '5',
        type: 'classic',
        task: `Sammenlign disse tre typene stråling ved å fylle ut tabellen:

a) Radiobølger (FM 100 MHz)
b) Synlig lys (grønt, 550 nm)
c) Røntgen (0,1 nm)

For hver: beregn bølgelengde ELLER frekvens (den du ikke har), og angi om strålingen er ioniserende.`,
        hints: ['Bruk c = f · λ der c = 3 × 10⁸ m/s', 'Konverter alle enheter til meter og Hz'],
        solution: `**a) FM Radio (f = 100 MHz):**
λ = c/f = (3 × 10⁸) / (100 × 10⁶) = **3 m**
Ioniserende: **Nei**

**b) Grønt lys (λ = 550 nm = 5,5 × 10⁻⁷ m):**
f = c/λ = (3 × 10⁸) / (5,5 × 10⁻⁷) = **5,5 × 10¹⁴ Hz** (550 THz)
Ioniserende: **Nei**

**c) Røntgen (λ = 0,1 nm = 1 × 10⁻¹⁰ m):**
f = c/λ = (3 × 10⁸) / (1 × 10⁻¹⁰) = **3 × 10¹⁸ Hz** (3 EHz)
Ioniserende: **Ja**

| Type | Bølgelengde | Frekvens | Ioniserende? |
|------|-------------|----------|--------------|
| FM Radio | 3 m | 100 MHz | Nei |
| Grønt lys | 550 nm | 550 THz | Nei |
| Røntgen | 0,1 nm | 3 × 10¹⁸ Hz | Ja |`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-3-ex-6',
        number: '6',
        type: 'classic',
        task: `Det finnes mange myter om stråling fra mobiltelefoner, WiFi og 5G. Bruk kunnskapen din om EM-stråling til å vurdere følgende påstander:

a) "5G bruker høyere frekvenser enn 4G, og er derfor farligere."
b) "Mikrobølgeovner bruker samme type stråling som mobiltelefoner."
c) "Mobilstråling kan forårsake kreft fordi det er stråling."

Vurder om påstandene er sanne eller usanne, og begrunn svaret.`,
        solution: `**a) "5G bruker høyere frekvenser, derfor farligere"**
**Delvis sant, men misvisende.**

5G bruker frekvenser fra 600 MHz til 39 GHz (og potensielt høyere). Høyere frekvens = høyere fotonenergi, MEN:
- Selv 39 GHz er fortsatt i mikrobølgeområdet
- Energien er fortsatt millioner av ganger lavere enn ioniserende stråling
- Høyere frekvens absorberes mer i huden (penetrerer MINDRE)
- Grenseverdiene er satt med god sikkerhetsmargin

**Konklusjon:** Ikke farligere i vitenskapelig forstand.

**b) "Mikrobølgeovner bruker samme type stråling som mobiler"**
**Sant!**

Begge bruker mikrobølger (EM-stråling):
- Mikrobølgeovn: 2,45 GHz
- Mobil/WiFi: 2,4 GHz (WiFi), 800-2600 MHz (mobil)

Forskjellen er EFFEKTEN:
- Mikrobølgeovn: ~1000 W (innelukket, reflekterende vegger)
- Mobil: ~0,5-2 W (spres i alle retninger)

Ovnen er sikker fordi den er skjermet. Mobilen er trygg fordi effekten er lav.

**c) "Mobilstråling kan gi kreft fordi det er stråling"**
**Usant - basert på misforståelse.**

"Stråling" er et vidt begrep. Ikke all stråling er farlig:
- Synlig lys er stråling - vi ser med den hver dag
- Varme er infrarød stråling
- Radio er stråling

For å forårsake kreft må stråling være **ioniserende** - ha nok energi til å skade DNA. Mobilstråling er:
- Ikke-ioniserende
- Har fotonenergi ca. 10 millioner ganger lavere enn UV
- Omfattende forskning har ikke funnet sammenheng med kreft

WHO klassifiserer mobilstråling som "mulig kreftfremkallende" (gruppe 2B), samme kategori som syltet grønnsaker og kaffe. Dette betyr "ikke nok bevis til å utelukke", ikke "farlig".`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Elektromagnetisk stråling**: Bølger av oscillerende elektriske og magnetiske felt som beveger seg med lyshastigheten (c = 3 × 10⁸ m/s)
- **Det elektromagnetiske spekteret**: Fra radiobølger (lav energi) via mikrobølger, infrarød, synlig lys, UV til røntgen og gammastråling (høy energi)
- **Synlig lys**: Det smale båndet 400–700 nm som øynene våre kan oppfatte, fra fiolett (kort bølgelengde) til rødt (lang bølgelengde)
- **Ioniserende vs. ikke-ioniserende stråling**: Ioniserende stråling (UV-C, røntgen, gamma) har nok energi til å skade DNA
- **Sammenhengen energi og bølgelengde**: E = h · f – kortere bølgelengde betyr høyere frekvens og høyere energi

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Elektromagnetisk stråling | Bølger av elektriske og magnetiske felt som kan bevege seg i vakuum |
| Ioniserende stråling | Stråling med nok energi til å slå løs elektroner fra atomer |
| Foton | Partikkelen som bærer elektromagnetisk stråling |
| Bølge-partikkel-dualitet | EM-stråling oppfører seg både som bølger og partikler |
| Rayleigh-spredning | Lysavhengig spredning i atmosfæren – årsaken til blå himmel |`
    },
    {
      id: 'nat-vg1-2-3-kilder',
      type: 'text',
      content: `### Kilder og videre lesning

- Store norske leksikon (snl.no) – «Elektromagnetisk stråling», «Synlig lys» og «Ioniserende stråling»
- Direktoratet for strålevern og atomsikkerhet, DSA (dsa.no) – «Hva er stråling?» og «Ikke-ioniserende stråling»
- Hannisdal, M. et al. (2021). *Kosmos – Naturfag VG1*. Fagbokforlaget.
- Heskestad, P. A. et al. (2020). *Tellus 11 – Naturfag VG1*. Cappelen Damm.
- WHO (who.int) – «Electromagnetic fields and public health» – faktaark om mobilstråling og helse`
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_2_4: TextbookChapter = {
  id: 'nat-vg1-2-4',
  courseId: 'nat-vg1',
  chapterNumber: '2.4',
  title: 'Radioaktivitet og kjerneforandringer',
  description: 'Lær om radioaktiv stråling, kjerneforandringer og de tre strålingstypene alfa, beta og gamma.',
  estimatedMinutes: 80,
  competenceGoals: ['utforske og beskrive elektromagnetisk og ioniserende stråling, og vurdere informasjon om stråling og helseeffekter'],
  content: [
    {
      id: 'nat-vg1-2-4-intro',
      type: 'text',
      content: `## Radioaktivitet - når atomkjerner forandrer seg

I 1896 oppdaget Henri Becquerel ved en tilfeldighet at uranmineraler sendte ut en mystisk "stråling" som kunne sverte fotografiske plater. Marie Curie videreførte forskningen og oppdaget grunnstoffene polonium og radium. For dette arbeidet fikk hun to nobelpriser - en av historiens mest bemerkelsesverdige vitenskapelige bragder.

**Radioaktivitet** er prosessen der ustabile atomkjerner sender ut partikler eller energi for å bli mer stabile. Dette kalles også **radioaktiv nedbryting** eller **radioaktivt henfall**.

**I dette kapittelet skal du lære:**
- Hva som gjør noen atomkjerner ustabile
- De tre hovedtypene radioaktiv stråling (alfa, beta, gamma)
- Hvordan kjernen forandres ved radioaktiv nedbryting
- Hva isotoper er
- Hvordan skrive og balansere kjernereaksjoner`,
    },
    {
      id: 'nat-vg1-2-4-def-1',
      type: 'definition',
      title: 'Atomkjernen og stabilitet',
      content: `**Atomkjernen består av:**
- **Protoner (p):** Positivt ladet, bestemmer atomnummeret (Z)
- **Nøytroner (n):** Nøytral, bidrar til massetallet
- **Nukleoner:** Samlebetegnelse for protoner og nøytroner

**Massetall (A)** = antall protoner + antall nøytroner
**Atomnummer (Z)** = antall protoner = bestemmer grunnstoffet

**Notasjon:** ᴬzX (f.eks. ²³⁸₉₂U for uran-238)

**Hva holder kjernen sammen?**
Den **sterke kjernekraften** binder nukleonene sammen. Denne kraften er sterkere enn den elektriske frastøtingen mellom protonene, men virker bare over svært korte avstander.

**Hvorfor er noen kjerner ustabile?**
1. **For mange nøytroner:** Ubalanse mellom protoner og nøytroner
2. **For få nøytroner:** Ikke nok "lim" mellom protonene
3. **For stor kjerne:** Alle grunnstoffer med atomnummer over 82 (bly) er ustabile
4. **Overskuddsenergi:** Kjernen er i en "eksitert" tilstand

**Stabil vs. ustabil:**
- Lette kjerner (Z < 20): Stabile med omtrent like mange p og n
- Tunge kjerner: Trenger flere nøytroner for stabilitet
- Veldig tunge kjerner (Z > 82): Alltid ustabile`,
    },
    {
      id: 'nat-vg1-2-4-def-2',
      type: 'definition',
      title: 'Isotoper',
      content: `**Isotoper** er varianter av samme grunnstoff med ulikt antall nøytroner.

- Samme antall protoner (samme grunnstoff, samme kjemiske egenskaper)
- Ulikt antall nøytroner (ulik masse, kan ha ulik stabilitet)

**Eksempel - karbonisotoper:**
| Isotop | Protoner | Nøytroner | Stabil? | Forekomst |
|--------|----------|-----------|---------|-----------|
| C-12 | 6 | 6 | Ja | 98,9% |
| C-13 | 6 | 7 | Ja | 1,1% |
| C-14 | 6 | 8 | Nei | Spor |

**Eksempel - uranisotoper:**
| Isotop | Protoner | Nøytroner | Halveringstid |
|--------|----------|-----------|---------------|
| U-234 | 92 | 142 | 245 000 år |
| U-235 | 92 | 143 | 704 mill. år (fissil) |
| U-238 | 92 | 146 | 4,5 mrd. år |

**Radioisotoper:** Ustabile isotoper som sender ut stråling.

**Viktig:** Isotoper av samme grunnstoff har nesten identiske kjemiske egenskaper, men kan ha svært ulike kjernefysiske egenskaper.`,
    },
    {
      id: 'nat-vg1-2-4-def-3',
      type: 'definition',
      title: 'Alfastråling (α)',
      content: `**Hva er en alfapartikkel?**
En alfapartikkel er en heliumkjerne: 2 protoner + 2 nøytroner
Skrives: ⁴₂He eller ⁴₂α

**Kjennetegn:**
- Relativt stor og tung partikkel
- Ladning: +2
- Høy ioniseringsevne (river løs mange elektroner langs banen)
- Kort rekkevidde (noen cm i luft)
- Stoppes av papir, hud, eller noen cm luft

**Ved alfanedbryting:**
- Atomnummeret synker med 2 (mister 2 protoner)
- Massetallet synker med 4 (mister 2 p + 2 n)
- Grunnstoffet endres!

**Eksempel - uran-238:**
²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He

Uran (Z=92) blir til thorium (Z=90)

**Fare:**
- Utvendig: Relativt ufarlig (stoppes av huden)
- Innvendig: SVÆRT farlig hvis innåndet eller svelget
  - Alfapartiklenes høye ioniseringsevne gir stor lokal skade
  - Radon i boliger er en stor helserisiko`,
    },
    {
      id: 'nat-vg1-2-4-def-4',
      type: 'definition',
      title: 'Betastråling (β)',
      content: `**Hva er betastråling?**
Ved beta-minus-nedbryting (vanligst) omdannes et nøytron til et proton, og et elektron sendes ut.

n → p + e⁻ + antinøytrino

**Kjennetegn:**
- Elektron (eller positron ved β⁺)
- Ladning: -1 (eller +1 for positron)
- Middels ioniseringsevne
- Rekkevidde: noen meter i luft
- Stoppes av aluminiumsfolie, tynn plast, noen mm tre

**Ved beta-minus-nedbryting:**
- Atomnummeret øker med 1 (får ett proton til)
- Massetallet er uendret (en n blir en p)
- Grunnstoffet endres!

**Eksempel - karbon-14:**
¹⁴₆C → ¹⁴₇N + e⁻ + antinøytrino

Karbon (Z=6) blir til nitrogen (Z=7)

**Beta-pluss (positronemisjion):**
Sjeldnere - et proton blir til et nøytron + et positron
p → n + e⁺ + nøytrino
Atomnummeret synker med 1

**Fare:**
- Kan trenge gjennom huden og skade dypere vev
- Farlig både utvendig og innvendig`,
    },
    {
      id: 'nat-vg1-2-4-def-5',
      type: 'definition',
      title: 'Gammastråling (γ)',
      content: `**Hva er gammastråling?**
Gammastråling er høyenergetisk elektromagnetisk stråling (fotoner) som sendes ut når en kjerne går fra en eksitert tilstand til en lavere energitilstand.

**Kjennetegn:**
- Elektromagnetisk stråling (som lys, men mye høyere energi)
- Ingen masse, ingen ladning
- Lav ioniseringsevne per lengdeenhet (fordi den ikke interagerer så ofte)
- Svært lang rekkevidde
- Krever tykk bly eller betong for effektiv skjerming

**Ved gammastråling:**
- Atomnummeret er UENDRET
- Massetallet er UENDRET
- Grunnstoffet forblir det samme
- Kjernen mister bare energi

Gammastråling følger ofte etter alfa- eller betanedbryting, når den nye kjernen har overskuddsenergi.

**Eksempel:**
⁶⁰₂₇Co → ⁶⁰₂₈Ni + e⁻ + γ

Kobolt-60 sender ut et betapartikkel og blir til nikkel-60, etterfulgt av gammastråling.

**Fare:**
- Kan trenge dypt inn i kroppen
- Gir stråledose til indre organer
- Krever skjerming med tunge materialer`,
    },
    {
      id: 'nat-vg1-2-4-example-1',
      type: 'example',
      title: 'Eksempel: Balansere en kjernereaksjon',
      problem: 'Thorium-234 (Z=90) sender ut en betapartikkel. Hvilket grunnstoff dannes? Skriv den balanserte reaksjonen.',
      solution: `**Gitt:**
- Thorium-234: ²³⁴₉₀Th
- Beta-minus-nedbryting: et nøytron blir til proton + elektron

**Ved β⁻-nedbryting:**
- Atomnummer øker med 1: 90 + 1 = 91
- Massetall er uendret: 234

**Finne grunnstoffet:**
Grunnstoff med Z = 91 er **protaktinium (Pa)**

**Balansert reaksjon:**
²³⁴₉₀Th → ²³⁴₉₁Pa + ⁰₋₁e + antinøytrino

**Kontroll:**
- Massetall: 234 = 234 + 0 ✓
- Atomnummer: 90 = 91 + (-1) ✓

**Svar:** Thorium-234 blir til protaktinium-234 ved beta-minus-nedbryting.`,
    },
    {
      id: 'nat-vg1-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva som skjer med atomnummeret og massetallet ved alfanedbryting og betanedbryting.',
        hints: ['En alfapartikkel har 2 protoner og 2 nøytroner', 'Ved betanedbryting omdannes et nøytron til et proton'],
        solution: `**Alfanedbryting:**
- En alfapartikkel (⁴₂He) sendes ut
- Atomnummer synker med 2 (mister 2 protoner)
- Massetall synker med 4 (mister 2p + 2n)
- Grunnstoffet endres til et som står 2 plasser til venstre i periodesystemet

**Betanedbryting (β⁻):**
- Et nøytron omdannes til proton + elektron
- Elektronet sendes ut
- Atomnummer øker med 1 (får ett proton til)
- Massetall er uendret (totalt antall nukleoner er likt)
- Grunnstoffet endres til et som står 1 plass til høyre i periodesystemet`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Radon-222 (atomnummer 86) sender ut en alfapartikkel. Hvilket grunnstoff dannes, og hva er massetallet? Skriv den balanserte reaksjonen.',
        solution: `**Gitt:** ²²²₈₆Rn sender ut α-partikkel

**Ved α-nedbryting:**
- Atomnummer: 86 - 2 = 84
- Massetall: 222 - 4 = 218

**Grunnstoff med Z = 84:** Polonium (Po)

**Balansert reaksjon:**
²²²₈₆Rn → ²¹⁸₈₄Po + ⁴₂He

**Svar:** Det dannes polonium-218.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-4-def-6',
      type: 'definition',
      title: 'Sammenligning av strålingstypene',
      content: `| Egenskap | Alfa (α) | Beta (β⁻) | Gamma (γ) |
|----------|----------|-----------|-----------|
| **Partikkel** | ⁴₂He-kjerne | Elektron | Foton |
| **Ladning** | +2 | -1 | 0 |
| **Masse** | 4 u (tung) | 0,0005 u (lett) | 0 |
| **Hastighet** | ~5% av c | Opptil 99% av c | c (lyshastighet) |
| **Rekkevidde i luft** | Noen cm | Noen meter | Svært lang |
| **Stoppes av** | Papir, hud | Aluminium, plast | Tykk bly, betong |
| **Ioniseringsevne** | Høy | Middels | Lav |
| **Endring i Z** | -2 | +1 | 0 |
| **Endring i A** | -4 | 0 | 0 |

**Huskeregel for skjerming:**
- **A**lfa stoppes av **A**rk (papir)
- **B**eta stoppes av **B**oksen (aluminium/plast)
- **G**amma stoppes av **G**rav (tykk bly/betong)`,
    },
    {
      id: 'nat-vg1-2-4-example-2',
      type: 'example',
      title: 'Eksempel: Urans nedbrytningskjede',
      problem: 'Uran-238 brytes ned gjennom en lang kjede av alfanedbryting og betanedbryting før det til slutt blir stabilt bly-206. Hva skjer i de første tre trinnene?',
      solution: `**Uran-238 nedbrytningskjede (begynnelsen):**

**Trinn 1: Uran-238 (α-nedbryting)**
²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He
Uran-238 → Thorium-234 + alfapartikkel
(t½ = 4,5 milliarder år)

**Trinn 2: Thorium-234 (β-nedbryting)**
²³⁴₉₀Th → ²³⁴₉₁Pa + e⁻
Thorium-234 → Protaktinium-234 + betapartikkel
(t½ = 24 dager)

**Trinn 3: Protaktinium-234 (β-nedbryting)**
²³⁴₉₁Pa → ²³⁴₉₂U + e⁻
Protaktinium-234 → Uran-234 + betapartikkel
(t½ = 1,2 minutter)

**Hele kjeden:**
²³⁸U → ²³⁴Th → ²³⁴Pa → ²³⁴U → ²³⁰Th → ... → ²⁰⁶Pb (stabil)

Kjeden inneholder 14 trinn og tar milliarder av år. Ett av mellomproduktene er radon-222, som er en gass og dermed en helserisiko i boliger.`,
    },
    {
      id: 'nat-vg1-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilken type stråling (alfa, beta eller gamma) ville du brukt skjerming mot i følgende situasjoner? Begrunn svaret.',
        subTasks: [
          { label: 'a', task: 'Arbeide med en sterk gammakilde på et sykehus', solution: 'Gamma krever tykk bly eller betong. Sykehus bruker blyforede vegger, blyforkler, og holder avstand. Gamma trenger gjennom det meste annet.' },
          { label: 'b', task: 'Beskytte huden mot en betakilde', solution: 'Tynn aluminium, plast eller tettvevd klær er tilstrekkelig for beta. Tykkelsen avhenger av betapartiklenes energi.' },
          { label: 'c', task: 'Forhindre innånding av radon (alfastråler)', solution: 'Mot alfa trengs ingen skjerming for huden. Problemet er innånding. Tiltak: god ventilasjon, tetting av sprekker i kjellergulv, radonsug under huset.' },
        ],
        solution: 'a) Tykk bly/betong for gamma. b) Aluminium/plast for beta. c) Ventilasjon/tetting mot radon (alfastråler innvendig).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Jod-131 (Z=53) brukes i medisinsk behandling av skjoldbruskkjertelen. Den sender ut betastråling. Skriv den balanserte reaksjonen og finn produktet.',
        hints: ['Ved β⁻-nedbryting øker atomnummeret med 1', 'Massetallet er uendret', 'Finn grunnstoff med Z=54'],
        solution: `**Gitt:** ¹³¹₅₃I sender ut β⁻

**Ved β⁻-nedbryting:**
- Atomnummer: 53 + 1 = 54
- Massetall: 131 (uendret)

**Grunnstoff med Z = 54:** Xenon (Xe)

**Balansert reaksjon:**
¹³¹₅₃I → ¹³¹₅₄Xe + ⁰₋₁e + antinøytrino

**Svar:** Jod-131 omdannes til xenon-131 ved betanedbryting.

**Medisinsk bruk:** Jod-131 samles i skjoldbruskkjertelen, og betastrålingen ødelegger overaktive eller kreftceller lokalt.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-4-text-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Radioaktivitet:**
Spontan utsendelse av stråling fra ustabile atomkjerner for å bli mer stabile.

**Isotoper:**
Varianter av samme grunnstoff med ulikt antall nøytroner.

**De tre strålingstypene:**
| Type | Hva er det? | Z-endring | A-endring | Skjerming |
|------|-------------|-----------|-----------|-----------|
| Alfa (α) | Heliumkjerne | -2 | -4 | Papir, hud |
| Beta (β⁻) | Elektron | +1 | 0 | Aluminium |
| Gamma (γ) | Foton | 0 | 0 | Bly, betong |

**Kjernereaksjoner må være balansert:**
- Sum av atomnumre må være lik på begge sider
- Sum av massetall må være lik på begge sider

**Nedbrytningskjeder:**
Mange radioaktive isotoper brytes ned gjennom flere trinn før de når stabilitet.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-2-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-4-ex-5',
        number: '5',
        type: 'classic',
        task: `Americium-241 brukes i røykvarslere. Den sender ut alfastråling.

a) Skriv den balanserte kjernereaksjonen (Americium har Z=95)
b) Hvorfor er det trygt å ha en alfakilde i hjemmet?
c) Hva bør man gjøre når man kaster en gammel røykvarsler?`,
        solution: `a) **Balansert reaksjon:**
²⁴¹₉₅Am → ²³⁷₉₃Np + ⁴₂He

Americium-241 → Neptunium-237 + alfapartikkel

b) **Hvorfor det er trygt:**
- Alfastråling stoppes av noen cm luft og av hudens ytre lag
- Alfakilden er forseglet inne i en metallkapsel
- Mengden er svært liten (ca. 0,3 mikrogram)
- Du får mer stråling fra naturlig bakgrunnsstråling
- Strålingen brukes bare til å ionisere luften - når røykpartikler kommer inn, forstyrres ioniseringen og alarmen går

c) **Ved kassering:**
- IKKE kast i vanlig søppel
- Lever på gjenvinningsstasjon eller returordning
- Americium er et radioaktivt tungmetall som må håndteres som spesialavfall
- Noen kommuner har egne innsamlinger for røykvarslere`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-4-ex-6',
        number: '6',
        type: 'classic',
        task: `Polonium-210 er et svært giftig radioaktivt stoff som har vært brukt i noen berømte forgiftningssaker.

a) Polonium-210 (Z=84) sender ut alfastråling. Skriv reaksjonen.
b) Forklar hvorfor polonium er så farlig når det kommer inn i kroppen, men relativt ufarlig utenfra.
c) Hvorfor er polonium vanskelig å oppdage ved vanlig stråledeteksjon?`,
        solution: `a) **Balansert reaksjon:**
²¹⁰₈₄Po → ²⁰⁶₈₂Pb + ⁴₂He

Polonium-210 → Bly-206 (stabil) + alfapartikkel

b) **Hvorfor farlig innvendig, ufarlig utvendig:**

**Utvendig:**
- Alfastråling stoppes av hudens ytre, døde hudlag
- Rekkevidde i luft er bare noen cm
- Vil ikke nå levende celler

**Innvendig (svelging, innånding, injeksjon):**
- Alfapartikler har SVÆRT høy ioniseringsevne
- Når de når levende celler, gjør de massiv skade på kort avstand
- All energien deponeres i nærliggende vev
- 1 mikrogram polonium er en dødelig dose
- Nyrene, beinmargen og milten skades mest

c) **Vanskelig å oppdage:**
- Alfastråling kan ikke trenge gjennom kroppen og ut
- Vanlige Geiger-tellere registrerer ikke alfa fra innsiden
- Krever spesialiserte urintester eller blodprøver
- Polonium har nesten ingen gammastråling som kunne detekteres utenfra

Dette gjør polonium til et "perfekt" giftstoff - det er dødelig i minimale doser og vanskelig å oppdage.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Radioaktivitet**: Ustabile atomkjerner sender ut stråling (alfa, beta, gamma) for å bli mer stabile
- **Isotoper**: Varianter av samme grunnstoff med ulikt antall nøytroner og dermed ulik stabilitet
- **Alfastråling (α)**: Heliumkjerne (2p + 2n) – kort rekkevidde, høy ioniseringsevne, stoppes av papir/hud
- **Betastråling (β)**: Elektron fra nøytron-til-proton-omdanning – middels rekkevidde, stoppes av aluminium
- **Gammastråling (γ)**: Høyenergetisk foton – lang rekkevidde, krever bly/betong for skjerming
- **Kjernereaksjoner**: Må balanseres med hensyn til atomnummer og massetall

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Isotop | Variant av et grunnstoff med ulikt antall nøytroner |
| Alfapartikkel | Heliumkjerne (⁴₂He) sendt ut ved alfanedbryting |
| Betapartikkel | Elektron sendt ut når et nøytron omdannes til proton |
| Gammastråling | Elektromagnetisk stråling med svært høy energi |
| Massetall (A) | Antall protoner + nøytroner i kjernen |
| Atomnummer (Z) | Antall protoner – bestemmer grunnstoffet |`
    },
    {
      id: 'nat-vg1-2-4-kilder',
      type: 'text',
      content: `### Kilder og videre lesning

- Direktoratet for strålevern og atomsikkerhet, DSA (dsa.no) – «Radioaktivitet» og «Typer ioniserende stråling»
- Store norske leksikon (snl.no) – «Radioaktivitet», «Alfastråling», «Betastråling» og «Gammastråling»
- Hannisdal, M. et al. (2021). *Kosmos – Naturfag VG1*. Fagbokforlaget.
- Heskestad, P. A. et al. (2020). *Tellus 11 – Naturfag VG1*. Cappelen Damm.
- Naturfag.no – «Radioaktivitet og stråling» – undervisningsressurser`
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_2_5: TextbookChapter = {
  id: 'nat-vg1-2-5',
  courseId: 'nat-vg1',
  chapterNumber: '2.5',
  title: 'Halveringstid og stråledoser',
  description: 'Forstå halveringstid, beregn reststoff og lær om stråledoser og måleenheter.',
  estimatedMinutes: 80,
  competenceGoals: ['utforske og beskrive elektromagnetisk og ioniserende stråling, og vurdere informasjon om stråling og helseeffekter'],
  content: [
    {
      id: 'nat-vg1-2-5-intro',
      type: 'text',
      content: `## Halveringstid - radioaktiv klokke

Radioaktive stoffer brytes ned over tid, men på en forutsigbar måte. Vi kan ikke si når et enkelt atom vil bryte ned - det er helt tilfeldig - men vi kan si nøyaktig hvor lang tid det tar før halvparten av en stor mengde atomer har brutt ned. Denne tiden kalles **halveringstid**.

Halveringstid er så pålitelig at den brukes som en "klokke" for å datere alt fra arkeologiske funn til jordens alder!

**I dette kapittelet skal du lære:**
- Hva halveringstid betyr og hvordan den fungerer
- Hvordan beregne gjenstående mengde etter en viss tid
- Måleenheter for radioaktivitet og stråledose
- Forskjellen mellom aktivitet, absorbert dose og ekvivalent dose
- Hvordan karbondatering fungerer`,
    },
    {
      id: 'nat-vg1-2-5-def-1',
      type: 'definition',
      title: 'Halveringstid',
      content: `**Halveringstid (t½)** er tiden det tar før halvparten av atomene i et radioaktivt stoff har brutt ned.

**Viktige egenskaper:**
- Halveringstiden er **konstant** for hver isotop
- Den kan **ikke påvirkes** av temperatur, trykk, kjemiske reaksjoner eller andre ytre forhold
- Den er en **statistisk** egenskap - gjelder for store mengder atomer

**Variasjonen er enorm:**
| Isotop | Halveringstid | Kommentar |
|--------|---------------|-----------|
| Polonium-214 | 0,00016 sekunder | Svært kortlivet |
| Radon-222 | 3,8 dager | Gass i boliger |
| Jod-131 | 8 dager | Medisinsk bruk |
| Kobolt-60 | 5,3 år | Strålebehandling |
| Cesium-137 | 30 år | Tsjernobyl/Fukushima |
| Karbon-14 | 5730 år | Datering |
| Uran-238 | 4,5 milliarder år | Jordas alder |

**Hva skjer med stoffet?**
Etter 1 halveringstid: 50% igjen
Etter 2 halveringstider: 25% igjen
Etter 3 halveringstider: 12,5% igjen
Etter n halveringstider: (1/2)ⁿ × 100% igjen`,
    },
    {
      id: 'nat-vg1-2-5-def-2',
      type: 'definition',
      title: 'Matematiske beregninger med halveringstid',
      content: `**Grunnformel:**
$$N = N_0 \\cdot \\left(\\frac{1}{2}\\right)^{n}$$

Der:
- N₀ = startmengde (antall atomer eller masse)
- N = gjenstående mengde
- n = antall halveringstider = t / t½

**Alternativ formel (med kontinuerlig tid):**
$$N = N_0 \\cdot \\left(\\frac{1}{2}\\right)^{t/t_{1/2}}$$

**Finne antall halveringstider:**
$$n = \\frac{t}{t_{1/2}}$$

**Finne tid fra gjenstående mengde:**
Hvis du vet N/N₀, finn n slik at (1/2)ⁿ = N/N₀
Deretter: t = n × t½

**Tabell for rask referanse:**
| Halveringstider (n) | Gjenstående |
|---------------------|-------------|
| 0 | 100% |
| 1 | 50% |
| 2 | 25% |
| 3 | 12,5% |
| 4 | 6,25% |
| 5 | 3,125% |
| 10 | 0,098% |`,
    },
    {
      id: 'nat-vg1-2-5-example-1',
      type: 'example',
      title: 'Eksempel: Beregning med halveringstid',
      problem: 'Et sykehus har 200 mg jod-131 (t½ = 8 dager). Hvor mye er igjen etter 32 dager?',
      solution: `**Gitt:**
- N₀ = 200 mg
- t½ = 8 dager
- t = 32 dager

**Trinn 1: Finn antall halveringstider**
n = t / t½ = 32 / 8 = 4 halveringstider

**Trinn 2: Beregn gjenstående mengde**

*Metode 1 - Halvering steg for steg:*
200 mg → 100 mg → 50 mg → 25 mg → 12,5 mg

*Metode 2 - Med formel:*
N = N₀ · (1/2)ⁿ = 200 · (1/2)⁴ = 200 · 1/16 = 200/16 = **12,5 mg**

**Svar:** Etter 32 dager er det 12,5 mg jod-131 igjen.

**Kontroll:** 12,5/200 = 0,0625 = 6,25% = (1/2)⁴ ✓`,
    },
    {
      id: 'nat-vg1-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Cesium-137 har halveringstid på 30 år. Etter Tsjernobyl-ulykken i 1986 ble store områder forurenset. Hvor stor andel av det opprinnelige cesium-137 er igjen i 2046?',
        hints: ['Beregn antall halveringstider fra 1986 til 2046', 'Bruk formelen N = N₀ · (1/2)^n'],
        solution: `**Gitt:** t½ = 30 år, t = 2046 - 1986 = 60 år

**Antall halveringstider:**
n = 60 / 30 = 2

**Gjenstående andel:**
(1/2)² = 1/4 = 0,25 = **25%**

**Svar:** I 2046 er 25% av det opprinnelige cesium-137 igjen.

**Kommentar:** Selv etter 60 år er en fjerdedel av cesiumet fortsatt der. Det vil ta ytterligere 30 år (til 2076) før det er nede i 12,5%. Cesium-137 er et langvarig forurensningsproblem.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Et arkeologisk funn inneholder 12,5% av den opprinnelige mengden karbon-14. Halveringstiden for C-14 er 5730 år. Hvor gammelt er funnet?',
        hints: ['Hvor mange halveringstider trengs for å komme fra 100% til 12,5%?', '100% → 50% → 25% → 12,5%'],
        solution: `**Gitt:** N/N₀ = 12,5% = 0,125, t½ = 5730 år

**Finn antall halveringstider:**
100% → 50% → 25% → 12,5%
Det er 3 halveringstider.

**Eller med matematikk:**
(1/2)ⁿ = 0,125
(1/2)ⁿ = 1/8 = (1/2)³
n = 3

**Beregn alderen:**
t = n × t½ = 3 × 5730 = **17 190 år**

**Svar:** Funnet er ca. 17 200 år gammelt.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-5-def-3',
      type: 'definition',
      title: 'Måleenheter for radioaktivitet og stråledose',
      content: `**1. Aktivitet - Becquerel (Bq)**
Måler hvor "aktiv" en radioaktiv kilde er.
- 1 Bq = 1 nedbryting per sekund
- Gammel enhet: Curie (Ci), 1 Ci = 3,7 × 10¹⁰ Bq

*Eksempel:* En røykvarsler inneholder ca. 30 000 Bq Am-241

**2. Absorbert dose - Gray (Gy)**
Måler hvor mye energi som absorberes per kg vev.
- 1 Gy = 1 Joule per kg
- Gammel enhet: rad, 1 Gy = 100 rad

*Eksempel:* 1 Gy til hele kroppen gir strålesyke

**3. Ekvivalent dose - Sievert (Sv)**
Tar hensyn til stråletype og biologisk virkning.
- Inkluderer en "vektingsfaktor" for stråletype
- Gammel enhet: rem, 1 Sv = 100 rem

**Vektingsfaktorer:**
| Stråletype | Faktor |
|------------|--------|
| Gamma, røntgen, beta | 1 |
| Protoner | 2 |
| Nøytroner | 5-20 |
| Alfa | 20 |

Ekvivalent dose (Sv) = Absorbert dose (Gy) × vektingsfaktor

*Eksempel:* 1 Gy gamma = 1 Sv, men 1 Gy alfa = 20 Sv!`,
    },
    {
      id: 'nat-vg1-2-5-def-4',
      type: 'definition',
      title: 'Typiske stråledoser',
      content: `**Sammenligning av stråledoser:**

| Kilde | Dose | Kommentar |
|-------|------|-----------|
| Bananspiseren (1 banan) | 0,0001 mSv | Kalium-40 i bananer |
| Røntgen av brystet | 0,1 mSv | Medisinsk undersøkelse |
| Flytur Oslo-New York | 0,05-0,1 mSv | Kosmisk stråling i høyden |
| Naturlig bakgrunn (Norge) | ~3 mSv/år | Radon, kosmisk, mat |
| CT-skanning (hodet) | 2 mSv | |
| CT-skanning (magen) | 10 mSv | |
| Grense for arbeidstakere | 20 mSv/år | Lovfestet grense |
| Akutt strålesyke | 1000 mSv | Kvalme, hodepine |
| 50% dødelighet | 4000 mSv | Uten behandling |
| Tsjernobyl-arbeidere (noen) | 6000+ mSv | Dødelig |

**Perspektiv:**
- Vi får alle ca. 3 mSv/år fra naturlig bakgrunnsstråling
- En CT-skanning tilsvarer 3 års bakgrunnsstråling
- Medisinsk stråling er nesten alltid verdt risikoen fordi nytten er større`,
    },
    {
      id: 'nat-vg1-2-5-example-2',
      type: 'example',
      title: 'Eksempel: Karbondatering',
      problem: 'Forklar hvordan karbondatering fungerer, og beregn alderen til en trekasse som har 40% av den opprinnelige mengden C-14.',
      solution: `**Prinsippet bak karbondatering:**

1. **I atmosfæren:** Kosmisk stråling danner C-14 fra nitrogen
2. **I levende organismer:** Planter tar opp CO₂ (inkludert C-14). Dyr spiser planter. Alle levende ting har samme C-14-nivå som atmosfæren.
3. **Når organismen dør:** Opptaket stopper, og C-14 begynner å bryte ned med t½ = 5730 år
4. **Måling:** Ved å måle hvor mye C-14 som er igjen, kan vi beregne når organismen døde

**Beregning for trekassen (40% C-14 igjen):**

**Gitt:** N/N₀ = 0,40, t½ = 5730 år

**Metode:**
(1/2)ⁿ = 0,40

Ta logaritmen:
n × log(0,5) = log(0,40)
n = log(0,40) / log(0,5)
n = -0,398 / (-0,301)
n = **1,32 halveringstider**

**Alder:**
t = n × t½ = 1,32 × 5730 = **7564 år**

**Svar:** Trekassen er ca. 7600 år gammel.

**Begrensninger:**
- Fungerer bare for organisk materiale
- Maksimal alder: ca. 50 000 år (da er det for lite C-14 igjen)
- Forutsetter at C-14-nivået i atmosfæren har vært stabilt`,
    },
    {
      id: 'nat-vg1-2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'En pasient får tilført en radioaktiv markør med aktivitet 100 MBq (megabecquerel) for en medisinsk undersøkelse. Halveringstiden er 6 timer. Hva er aktiviteten etter 24 timer?',
        hints: ['Finn antall halveringstider i 24 timer', 'Aktiviteten halveres på samme måte som mengden'],
        solution: `**Gitt:** A₀ = 100 MBq, t½ = 6 timer, t = 24 timer

**Antall halveringstider:**
n = 24 / 6 = 4

**Aktivitet etter 24 timer:**
A = A₀ × (1/2)⁴ = 100 × (1/16) = **6,25 MBq**

**Svar:** Etter 24 timer er aktiviteten 6,25 MBq, bare 6,25% av startaktiviteten.

Dette er en fordel med kortlivede isotoper i medisin - de forsvinner raskt fra kroppen!`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'En person jobber med en radioaktiv kilde og mottar 0,5 mGy gammastråling og 0,1 mGy alfastråling. Beregn den totale ekvivalente dosen i mSv.',
        hints: ['Gammastråling har vektingsfaktor 1', 'Alfastråling har vektingsfaktor 20', 'Ekvivalent dose = absorbert dose × vektingsfaktor'],
        solution: `**Gitt:**
- Gamma: 0,5 mGy
- Alfa: 0,1 mGy

**Vektingsfaktorer:**
- Gamma: 1
- Alfa: 20

**Ekvivalent dose fra gamma:**
0,5 mGy × 1 = 0,5 mSv

**Ekvivalent dose fra alfa:**
0,1 mGy × 20 = 2,0 mSv

**Total ekvivalent dose:**
0,5 + 2,0 = **2,5 mSv**

**Svar:** Total ekvivalent dose er 2,5 mSv.

**Kommentar:** Selv om det var 5 ganger mer gamma enn alfa (0,5 vs 0,1 mGy), bidrar alfaen med 4 ganger mer ekvivalent dose (2,0 vs 0,5 mSv) fordi alfapartikler er så mye mer skadelige per energienhet.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-5-text-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Halveringstid (t½):**
- Tiden det tar før halvparten av atomene har brutt ned
- Konstant for hver isotop, kan ikke påvirkes
- Varierer fra brøkdeler av sekunder til milliarder av år

**Formel for gjenstående mengde:**
N = N₀ × (1/2)ⁿ der n = t/t½

**Måleenheter:**
| Enhet | Måler | Definisjon |
|-------|-------|------------|
| Becquerel (Bq) | Aktivitet | Nedbrytninger per sekund |
| Gray (Gy) | Absorbert dose | Joule per kg |
| Sievert (Sv) | Ekvivalent dose | Gy × vektingsfaktor |

**Vektingsfaktorer:**
- Gamma, beta: 1
- Alfa: 20

**Karbondatering:**
- Bruker C-14 med t½ = 5730 år
- Fungerer for organisk materiale opptil ~50 000 år`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-2-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-5-ex-5',
        number: '5',
        type: 'classic',
        task: `Ved kjernekraftulykken i Fukushima i 2011 ble store mengder radioaktivt jod-131 (t½ = 8 dager) og cesium-137 (t½ = 30 år) sluppet ut.

a) Hvor mange prosent av jod-131 var igjen etter 80 dager?
b) Hvor mange prosent av cesium-137 var igjen i 2021 (10 år senere)?
c) Forklar hvorfor jod-131 utgjør en akutt trussel mens cesium-137 er et langsiktig problem.`,
        solution: `a) **Jod-131 etter 80 dager:**
n = 80 / 8 = 10 halveringstider
Gjenstående: (1/2)¹⁰ = 1/1024 = **0,098% ≈ 0,1%**

b) **Cesium-137 etter 10 år:**
n = 10 / 30 = 0,333 halveringstider
Gjenstående: (1/2)^0,333 = 0,794 = **79,4%**

c) **Hvorfor ulike trusler:**

**Jod-131 - akutt trussel:**
- Kort halveringstid → svært høy aktivitet
- Samles i skjoldbruskkjertelen → konsentrert stråling til sårbart organ
- Etter 80 dager: Nesten borte → kortsiktig fare
- Tiltak: Jodtabletter blokkerer opptak i kjertelen

**Cesium-137 - langsiktig problem:**
- Lang halveringstid → moderat aktivitet, men varer lenge
- Etter 10 år er fortsatt 79% igjen
- Sprer seg i miljøet og tas opp i næringskjeden
- Forurenser jord i generasjoner
- Tiltak: Evakuering, jordbearbeiding, matvarekontroll`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-5-ex-6',
        number: '6',
        type: 'classic',
        task: `Ismannen "Ötzi" ble funnet i Alpene i 1991. Målinger viste at han hadde 53% av den opprinnelige mengden C-14.

a) Beregn alderen til Ötzi (t½ for C-14 = 5730 år)
b) I hvilken tidsperiode levde Ötzi?
c) Hvorfor kan ikke karbondatering brukes på bergarter og fossiler som er millioner av år gamle?`,
        hints: ['Bruk formelen (1/2)ⁿ = 0,53 og løs for n', 'Bruk logaritmer eller prøv deg frem'],
        solution: `a) **Beregn alderen:**
(1/2)ⁿ = 0,53

Ta logaritmen:
n × log(0,5) = log(0,53)
n = log(0,53) / log(0,5)
n = -0,276 / (-0,301)
n = 0,92 halveringstider

Alder: t = 0,92 × 5730 = **5272 år**

Ötzi er ca. **5300 år gammel**.

b) **Tidsperiode:**
2025 - 5300 ≈ år 3275 f.Kr.

Dette er slutten av **steinalderen / begynnelsen av kobberalderen** (den kalkolitiske perioden). Ötzi bar faktisk med seg en kobberøks, noe som bekrefter dette.

c) **Hvorfor C-14 ikke fungerer for gamle fossiler:**
- Halveringstiden er "bare" 5730 år
- Etter ~50 000 år er det så lite C-14 igjen at det ikke kan måles pålitelig
- Etter 10 halveringstider (57 300 år) er bare 0,1% igjen
- For fossiler som er millioner av år gamle brukes andre isotoper:
  - Uran-bly (t½ = 4,5 mrd år)
  - Kalium-argon (t½ = 1,25 mrd år)`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Halveringstid (t½)**: Tiden det tar før halvparten av atomene i et radioaktivt stoff har brutt ned – konstant og upåvirkelig
- **Beregninger med halveringstid**: N = N₀ · (1/2)^n der n = t/t½ – brukes for å finne gjenstående mengde
- **Måleenheter**: Becquerel (Bq) for aktivitet, Gray (Gy) for absorbert dose, og Sievert (Sv) for ekvivalent dose
- **Vektingsfaktorer**: Alfa har faktor 20, beta/gamma har faktor 1 – alfastråling er mest skadelig per energienhet
- **Karbondatering**: Bruker C-14 (t½ = 5730 år) til å bestemme alderen på organisk materiale opptil ca. 50 000 år

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Halveringstid (t½) | Tiden det tar før halvparten av atomene har brutt ned |
| Becquerel (Bq) | Enhet for aktivitet – nedbrytninger per sekund |
| Gray (Gy) | Enhet for absorbert dose – joule per kg |
| Sievert (Sv) | Enhet for ekvivalent dose – tar hensyn til stråletype |
| Karbondatering | Dateringsmetode basert på nedbrytning av C-14 |
| Vektingsfaktor | Korreksjon for ulike stråletypers biologiske virkning |`
    },
    {
      id: 'nat-vg1-2-5-kilder',
      type: 'text',
      content: `### Kilder og videre lesning

- Direktoratet for strålevern og atomsikkerhet, DSA (dsa.no) – «Stråledoser og enheter» og «Naturlig stråling i Norge»
- Store norske leksikon (snl.no) – «Halveringstid», «Karbondatering» og «Stråledose»
- Hannisdal, M. et al. (2021). *Kosmos – Naturfag VG1*. Fagbokforlaget.
- Heskestad, P. A. et al. (2020). *Tellus 11 – Naturfag VG1*. Cappelen Damm.
- IAEA (iaea.org) – International Atomic Energy Agency: Ressurser om radioaktivitet og strålemåling`
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_2_6: TextbookChapter = {
  id: 'nat-vg1-2-6',
  courseId: 'nat-vg1',
  chapterNumber: '2.6',
  title: 'Stråling, helse og strålevern',
  description: 'Vurder helseeffekter av ulike typer stråling og lær om strålevern og beskyttelsestiltak.',
  estimatedMinutes: 75,
  competenceGoals: ['utforske og beskrive elektromagnetisk og ioniserende stråling, og vurdere informasjon om stråling og helseeffekter'],
  content: [
    {
      id: 'nat-vg1-2-6-intro',
      type: 'text',
      content: `## Stråling og helse - fra fakta til frykt

Ordet "stråling" kan skape frykt, men det er viktig å forstå at stråling er et vidt begrep. Sollyset som varmer oss er stråling. Radiobølgene som bringer oss musikk er stråling. Varmen fra en peis er stråling. Ikke all stråling er farlig.

Det som avgjør om stråling er skadelig, er **type stråling**, **dose**, og **eksponeringstid**. I dette kapittelet skal vi se på hvordan ulike typer stråling påvirker kroppen, og hvordan vi kan beskytte oss.

**I dette kapittelet skal du lære:**
- Hvordan ioniserende stråling skader celler og DNA
- ALARA-prinsippet og de tre pilarene for strålevern
- Radon i boliger - Norges skjulte helserisiko
- UV-stråling og hudkreft
- Medisinsk bruk av stråling
- Hvordan vurdere risiko og informasjon om stråling kritisk`,
    },
    {
      id: 'nat-vg1-2-6-def-1',
      type: 'definition',
      title: 'Hvordan ioniserende stråling skader',
      content: `**Ioniserende stråling** (UV-C, røntgen, gamma, alfa, beta) har nok energi til å slå løs elektroner fra atomer - den ioniserer.

**Skademekanismer:**

**1. Direkte DNA-skade**
- Strålingen treffer DNA-molekylet direkte
- Bryter bindinger og skaper mutasjoner
- Kan føre til celledød eller ukontrollert celledeling (kreft)

**2. Indirekte skade via frie radikaler**
- Strålingen treffer vannmolekyler i cellen
- Danner reaktive frie radikaler (OH•)
- Disse skader DNA, proteiner og cellemembraner

**Hva skjer med cellen?**
| Dose | Effekt |
|------|--------|
| Svært lav | Cellen reparerer skaden |
| Lav | Noen celler dør, de fleste overlever |
| Moderat | Mange celler dør, noen muterer |
| Høy | Massiv celledød, vevsskade |

**Deterministiske vs. stokastiske effekter:**
- **Deterministiske:** Garantert ved høy dose (kvalme, hårtap, strålesyke)
- **Stokastiske:** Økt sannsynlighet (kreft) - usikkert om det skjer`,
    },
    {
      id: 'nat-vg1-2-6-def-2',
      type: 'definition',
      title: 'Strålevern og ALARA-prinsippet',
      content: `**ALARA-prinsippet:** As Low As Reasonably Achievable
Hold stråledosen så lav som praktisk mulig, med tanke på økonomiske og samfunnsmessige faktorer.

**De tre pilarene for strålevern:**

**1. TID - Reduser eksponeringstiden**
- Kortere tid = lavere dose
- Dose = doserate × tid
- Planlegg arbeidet effektivt, øv på forhånd

**2. AVSTAND - Øk avstanden til kilden**
- Dosen synker med kvadratet av avstanden
- Dobler du avstanden, får du 1/4 av dosen
- Bruk fjernhåndtering, manipulatorer

**Avstandsformelen:**
$$D_2 = D_1 \\cdot \\left(\\frac{r_1}{r_2}\\right)^2$$

**3. SKJERMING - Blokkér strålingen**
| Stråletype | Skjerming |
|------------|-----------|
| Alfa | Papir, hud, luft |
| Beta | Aluminium, plast, glass |
| Gamma/røntgen | Bly, betong, stål |
| Nøytroner | Vann, plast (hydrogenrik) |

**I tillegg:**
- Bruk personlig verneutstyr
- Overvåk dosen med dosimeter
- Følg prosedyrer og grenseverdier`,
    },
    {
      id: 'nat-vg1-2-6-example-1',
      type: 'example',
      title: 'Eksempel: Beregning med avstandsformelen',
      problem: 'Ved 1 meter fra en gammakilde er doseraten 100 μSv/t. Hva er doseraten ved 3 meter?',
      solution: `**Gitt:**
- D₁ = 100 μSv/t ved r₁ = 1 m
- r₂ = 3 m

**Avstandsformelen:**
$$D_2 = D_1 \\cdot \\left(\\frac{r_1}{r_2}\\right)^2$$

**Beregning:**
$$D_2 = 100 \\cdot \\left(\\frac{1}{3}\\right)^2 = 100 \\cdot \\frac{1}{9} = 11,1 \\text{ μSv/t}$$

**Svar:** Ved 3 meter er doseraten ca. **11 μSv/t**.

**Kommentar:** Ved å tredoble avstanden, reduseres dosen til 1/9 (≈ 11%). Avstand er et svært effektivt tiltak!`,
    },
    {
      id: 'nat-vg1-2-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Vurder disse påstandene - er de korrekte eller myter? Begrunn svaret.',
        subTasks: [
          { label: 'a', task: '"Mobilstråling forårsaker kreft"', solution: 'Ikke bekreftet av forskning. Mobilstråling er ikke-ioniserende (mikrobølger) og har ikke nok energi til å skade DNA direkte. Omfattende forskning over flere tiår har ikke funnet sikker sammenheng med kreft. WHO klassifiserer det som "mulig kreftfremkallende" (gruppe 2B), samme kategori som kaffe - som betyr "vi kan ikke utelukke det", ikke "det er farlig".' },
          { label: 'b', task: '"Radon i boliger er den nest største årsaken til lungekreft etter røyking"', solution: 'Korrekt. Radon er en radioaktiv gass (alfastråler) som siver inn fra grunnen. I Norge forårsaker radon ca. 300 lungekreftdødsfall årlig. Risikoen er spesielt høy for røykere som også utsettes for radon.' },
          { label: 'c', task: '"All stråling er farlig"', solution: 'Myte. Synlig lys er stråling, men ufarlig ved normale nivåer. Infrarød (varme) er stråling. Radiobølger omgir oss konstant. Det som avgjør er type stråling (ioniserende vs. ikke-ioniserende), dose og eksponeringstid.' },
        ],
        solution: 'Det er viktig å basere seg på vitenskapelig dokumentasjon, ikke frykt eller følelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-6-def-3',
      type: 'definition',
      title: 'Radon i boliger - en norsk utfordring',
      content: `**Hva er radon?**
Radon-222 er en radioaktiv edelgass som dannes ved nedbrytning av uran i berggrunnen. Den siver opp gjennom sprekker og inn i bygninger.

**Hvorfor er radon farlig?**
- Gassen er usynlig og luktfri
- Når du puster inn radon, kan det avgi alfastråling inne i lungene
- Radon brytes ned til radioaktive "døtre" (polonium) som fester seg i lungene
- Alfastråling skader lungecellene direkte
- Øker risikoen for lungekreft

**Tall for Norge:**
- Ca. 300 lungekreftdødsfall årlig pga. radon
- Nest største årsak til lungekreft etter røyking
- Risikoen er 25× høyere for røykere som utsettes for radon
- Ca. 9% av norske boliger har radon over tiltaksgrensen

**Grenseverdier:**
| Nivå | Anbefaling |
|------|------------|
| Under 100 Bq/m³ | Akseptabelt |
| 100-200 Bq/m³ | Enkle tiltak anbefalt |
| Over 200 Bq/m³ | Tiltak nødvendig |

**Tiltak:**
- Mål radon (spormåler over 2 måneder)
- Bedre ventilasjon i kjeller
- Tette sprekker i grunnmur
- Installere radonsug/radonbrønn`,
    },
    {
      id: 'nat-vg1-2-6-def-4',
      type: 'definition',
      title: 'UV-stråling og helse',
      content: `**UV-stråling fra solen deles i tre typer:**

**UV-A (315-400 nm) - "Aldringsstråling"**
- Trenger dypest i huden (dermis)
- Forårsaker aldring, rynker, pigmentflekker
- Bidrar til hudkreft
- Til stede hele året, trenger gjennom glass
- Solarium bruker hovedsakelig UV-A

**UV-B (280-315 nm) - "Brennestråling"**
- Trenger inn i overhuden (epidermis)
- Forårsaker solbrenthet
- Hovedårsak til hudkreft
- Nødvendig for vitamin D-produksjon
- Sterkest midt på dagen, stoppet av glass

**UV-C (100-280 nm)**
- Svært energirik, ville vært dødelig
- Absorberes helt av ozonlaget
- Brukes kunstig til desinfeksjon

**Solbeskyttelse:**
| Tiltak | Effekt |
|--------|--------|
| SPF 15 | Blokkerer 93% UV-B |
| SPF 30 | Blokkerer 97% UV-B |
| SPF 50 | Blokkerer 98% UV-B |
| Klær | Blokkerer det meste |
| Solbriller | Beskytter øynene |
| Unngå sol 10-15 | Sterkest UV-stråling |

**Hudkreftrisiko:**
- Solbrenthet i barndommen øker risikoen betydelig
- Lys hudtype = høyere risiko
- Føflekker bør sjekkes regelmessig`,
    },
    {
      id: 'nat-vg1-2-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Ved 2 meter fra en radioaktiv kilde er doseraten 50 μSv/t. Du må arbeide med kilden i 30 minutter.',
        subTasks: [
          { label: 'a', task: 'Beregn dosen du får ved 2 meters avstand', solution: 'Dose = doserate × tid = 50 μSv/t × 0,5 t = 25 μSv' },
          { label: 'b', task: 'Hva blir dosen hvis du øker avstanden til 4 meter?', solution: 'D₂ = D₁ × (r₁/r₂)² = 50 × (2/4)² = 50 × 0,25 = 12,5 μSv/t. Dose = 12,5 × 0,5 = 6,25 μSv' },
          { label: 'c', task: 'Foreslå to andre tiltak for å redusere dosen', solution: '1) Redusere tiden - planlegg og øv på forhånd. 2) Bruke skjerming - f.eks. blyhansker eller blyskjerm mellom deg og kilden.' },
        ],
        solution: 'a) 25 μSv, b) 6,25 μSv, c) Kortere tid, skjerming, fjernhåndtering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-6-def-5',
      type: 'definition',
      title: 'Medisinsk bruk av stråling',
      content: `**Diagnostikk (se inn i kroppen):**

| Metode | Stråletype | Dose | Bruksområde |
|--------|------------|------|-------------|
| Røntgen | Røntgenstråling | 0,1 mSv | Beinbrudd, lunger, tenner |
| CT | Røntgenstråling | 2-20 mSv | Detaljerte 3D-bilder |
| PET | Positroner (β⁺) | 5-10 mSv | Kreft, hjerneaktivitet |
| MR | Radiobølger + magnetfelt | 0 | Bløtvev (ikke ioniserende!) |
| Ultralyd | Lydbølger | 0 | Foster, indre organer (ikke stråling) |

**Behandling:**

**Strålebehandling av kreft:**
- Høye doser rettet mot svulsten
- Dreper kreftceller (som er mer strålingsfølsomme)
- Minimerer skade på friskt vev ved å stråle fra flere vinkler
- Planlegges nøye med CT-bilder

**Radioaktive markører:**
- Jod-131 for skjoldbruskkjertelkreft
- Samles i kjertelen og ødelegger kreftceller innenfra

**Nytte vs. risiko:**
Medisinsk stråling brukes fordi nytten (korrekt diagnose, liv reddes) er MYE større enn den lille økte kreftrisikoen fra strålingen. Én CT-skanning tilsvarer ca. 3 års bakgrunnsstråling.`,
    },
    {
      id: 'nat-vg1-2-6-example-2',
      type: 'example',
      title: 'Eksempel: Vurdere strålerisiko',
      problem: 'En person er bekymret for strålingen fra en CT-skanning. Hvordan kan du forklare risikoen i perspektiv?',
      solution: `**CT-skanning av magen: ca. 10 mSv**

**Sette det i perspektiv:**

**Sammenligning med naturlig stråling:**
- Årlig bakgrunnsstråling i Norge: ~3 mSv
- CT-skanningen tilsvarer ca. 3 års bakgrunnsstråling

**Beregnet økt kreftrisiko:**
- Ved 10 mSv: Økt livstidsrisiko for kreft ca. 0,05% (1 av 2000)
- Til sammenligning: Normal livstidsrisiko for kreft er ca. 40%

**Nytte-risiko-vurdering:**
- CT kan avdekke alvorlig sykdom (f.eks. blindtarmbetennelse, indre blødning)
- Ubehandlet kan disse være dødelige
- Risikoen for å dø av uoppdaget sykdom >> risikoen fra strålingen

**Riktig respons:**
1. Legen vurderer at nytten er større enn risikoen
2. Stråledosen optimaliseres (ALARA)
3. CT tas bare når nødvendig (ikke "for sikkerhets skyld")
4. Risikoen er reell, men liten og akseptabel

**Konklusjon:** CT-skanningen er trygg i den forstand at nytten langt overgår risikoen. Bekymringen er forståelig, men ikke proporsjonal med den faktiske faren.`,
    },
    {
      id: 'nat-vg1-2-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar de tre pilarene for strålevern (tid, avstand, skjerming) og gi et praktisk eksempel på hvert.',
        solution: `**1. TID - Reduser eksponeringstiden**
*Prinsipp:* Jo kortere tid du er eksponert, jo lavere dose.
*Eksempel:* En røntgensykepleier som tar mange bilder daglig, roterer arbeidsoppgaver med kolleger for å begrense tiden ved røntgenapparatet.

**2. AVSTAND - Øk avstanden til kilden**
*Prinsipp:* Dosen synker med kvadratet av avstanden. Dobler du avstanden, får du bare 1/4 av dosen.
*Eksempel:* Ved strålebehandling av kreft forlater personalet rommet og styrer apparatet fra et annet rom. Ved å øke avstanden fra 1 m til 5 m, reduseres dosen med 96%.

**3. SKJERMING - Blokkér strålingen**
*Prinsipp:* Materialer mellom deg og kilden absorberer strålingen.
*Eksempel:* Røntgenpersonell bruker blyforkle, og pasienter får blyplate over deler av kroppen som ikke skal avbildes. Veggene i røntgenrom er blykledde.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'En familie vil kjøpe hus i et område kjent for høye radonnivåer. Hvilke tiltak vil du anbefale dem?',
        solution: `**Før kjøp:**
1. Be om radonmåling fra selger (gjort over minst 2 måneder vinterstid)
2. Sjekk kommunens radonkart
3. Hvis ingen måling finnes, gjør en egen måling før kjøp

**Hvis radon er over 100 Bq/m³:**
1. **Bedre ventilasjon:** Øk luftsirkulasjonen i kjeller/underetasje
2. **Tette sprekker:** Fuger rundt rør, kabler og i grunnmur
3. **Radonmembran:** Plastduk under gulv
4. **Radonbrønn:** Sug ut radon fra grunnen under huset

**Hvis radon er over 200 Bq/m³:**
- Tiltak er nødvendig før innflytting
- Radonsug er mest effektivt
- Kan redusere nivåene med 50-90%

**Løpende:**
- Luft regelmessig, spesielt i kjeller
- Ikke sov i uventilerte kjellerrom
- Gjenta måling etter tiltak og ved endringer i huset

**Kostnad:** Tiltak koster fra noen tusen til 50 000 kr, avhengig av omfang.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-6-text-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Hvordan ioniserende stråling skader:**
- Bryter DNA direkte eller via frie radikaler
- Kan føre til celledød eller mutasjoner (kreft)

**ALARA-prinsippet:** Hold dosen så lav som mulig

**Tre pilarer for strålevern:**
1. **Tid:** Reduser eksponeringstiden
2. **Avstand:** Øk avstanden (dose ∝ 1/r²)
3. **Skjerming:** Bruk materialer som stopper strålingen

**Radon i Norge:**
- 300 lungekreftdødsfall årlig
- Tiltaksgrense: 200 Bq/m³
- Tiltak: Ventilasjon, tetting, radonsug

**UV-stråling:**
- UV-A: Aldring, UV-B: Solbrenthet/hudkreft
- Beskyttelse: Solkrem, klær, unngå middag

**Medisinsk stråling:**
- Nytte > risiko i nesten alle tilfeller
- Dose optimaliseres (ALARA)`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-2-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-6-ex-5',
        number: '5',
        type: 'classic',
        task: `En avis skriver: "Sjokk! Banan inneholder radioaktivitet - likevel spiser vi dem!"

a) Forklar hvorfor bananer er radioaktive.
b) Beregn hvor mange bananer du måtte spise for å få samme stråledose som én røntgenundersøkelse av brystet (0,1 mSv). Én banan gir ca. 0,0001 mSv.
c) Skriv et kort svar til avisen som setter risikoen i perspektiv.`,
        solution: `a) **Hvorfor bananer er radioaktive:**
Bananer inneholder mye kalium, og ca. 0,012% av naturlig kalium er isotopen kalium-40 (K-40), som er radioaktiv med halveringstid 1,25 milliarder år. K-40 sender ut beta- og gammastråling. Én banan inneholder ca. 15 Bq K-40.

b) **Antall bananer for å tilsvare én røntgen:**
Røntgen av brystet: 0,1 mSv
Per banan: 0,0001 mSv (0,1 μSv)

Antall bananer = 0,1 mSv / 0,0001 mSv = **1000 bananer**

c) **Svar til avisen:**
"Ja, bananer inneholder naturlig radioaktivitet - som nesten alt annet vi spiser og drikker. Karbonet i kroppen din inneholder radioaktivt karbon-14. Kaliumet i musklene dine sender ut stråling akkurat nå.

For å få samme stråledose som én enkel røntgenundersøkelse, måtte du spise 1000 bananer på kort tid. Kroppen din regulerer dessuten kaliuminnholdet - spiser du ekstra kalium, skilles det ut.

All mat inneholder spormengder av naturlig radioaktivitet. Det har det gjort i milliarder av år. Å være redd for bananer på grunn av stråling er som å være redd for vann fordi man kan drukne i det."`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-6-ex-6',
        number: '6',
        type: 'classic',
        task: `En strålearbeider får følgende årlige doser fra ulike kilder:
- Bakgrunnsstråling: 3 mSv
- Arbeidsrelatert eksponering: 8 mSv
- CT-skanning av ryggen: 10 mSv
- To flyturer Oslo-Tokyo: 0,2 mSv

a) Beregn total årlig dose
b) Er dette innenfor grenseverdien for yrkeseksponering (20 mSv/år)?
c) Hvilke tiltak kan redusere den arbeidsrelaterte dosen?`,
        solution: `a) **Total årlig dose:**
- Bakgrunn: 3 mSv
- Arbeid: 8 mSv
- CT: 10 mSv
- Flyturer: 0,2 mSv
- **Total: 21,2 mSv**

b) **Vurdering mot grenseverdi:**
Grenseverdien på 20 mSv/år gjelder for *yrkeseksponering*, altså arbeidsrelatert dose.
- Arbeidsrelatert: 8 mSv → **Innenfor grensen** (8 < 20)
- Bakgrunn og medisinsk regnes ikke med i yrkesdosen

Imidlertid: Total dose på 21+ mSv er høyere enn gjennomsnittsbefolkningen. CT-skanningen bør bare tas hvis medisinsk nødvendig.

c) **Tiltak for å redusere arbeidsrelatert dose:**
1. **Tid:** Effektivisere arbeidet, rotere oppgaver med kolleger
2. **Avstand:** Bruke fjernhåndteringsverktøy, holde større avstand
3. **Skjerming:** Forbedre skjerming, bruke blyforkle/blyplater
4. **Planlegging:** Øve på prosedyrer før stråleeksponering
5. **Overvåking:** Bruke personlig dosimeter, analysere hvilke oppgaver som gir mest dose
6. **Teknologi:** Oppgradere utstyr til lavdose-alternativer`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Ioniserende stråling og celleskade**: Stråling kan skade DNA direkte eller indirekte via frie radikaler, noe som kan føre til celledød eller kreft
- **ALARA-prinsippet**: Hold stråledosen så lav som praktisk mulig (As Low As Reasonably Achievable)
- **Tre pilarer for strålevern**: Tid (reduser eksponering), avstand (dose synker med 1/r²) og skjerming (materialer som stopper stråling)
- **Radon i boliger**: Norges nest største årsak til lungekreft etter røyking, med tiltaksgrense på 200 Bq/m³
- **UV-stråling og hudkreft**: UV-A forårsaker aldring, UV-B forårsaker solbrenthet og hudkreft
- **Medisinsk stråling**: Nytten av diagnostikk og behandling overgår nesten alltid risikoen

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| ALARA | As Low As Reasonably Achievable – grunnprinsipp for strålevern |
| Deterministisk effekt | Garantert effekt over en terskelverdi (f.eks. strålesyke) |
| Stokastisk effekt | Økt sannsynlighet for skade (f.eks. kreft), usikkert om den inntreffer |
| Radon | Radioaktiv edelgass som siver inn i bygninger fra berggrunnen |
| UV-indeks | Mål på styrken til UV-stråling fra solen |
| Frie radikaler | Reaktive molekyler som dannes ved strålingens ionisering av vann |`
    },
    {
      id: 'nat-vg1-2-6-kilder',
      type: 'text',
      content: `### Kilder og videre lesning

- Direktoratet for strålevern og atomsikkerhet, DSA (dsa.no) – «Radon i boliger», «UV-stråling» og «Medisinsk strålebruk»
- WHO (who.int) – «Ionizing radiation, health effects and protective measures» og «Radon and health»
- Kreftregisteret (kreftregisteret.no) – «Hudkreft i Norge» og «Stråling og kreftrisiko»
- Store norske leksikon (snl.no) – «Strålevern», «Radon» og «UV-stråling»
- Hannisdal, M. et al. (2021). *Kosmos – Naturfag VG1*. Fagbokforlaget.`
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_2_7: TextbookChapter = {
  id: 'nat-vg1-2-7',
  courseId: 'nat-vg1',
  chapterNumber: '2.7',
  title: 'Trådløs kommunikasjon',
  description: 'Forstå hovedprinsippene for trådløs kommunikasjon og anvendelser.',
  estimatedMinutes: 75,
  competenceGoals: ['forklare hovedprinsippene for trådløs kommunikasjon og gi eksempler på hva slik teknologi brukes til'],
  content: [
    {
      id: 'nat-vg1-2-7-intro',
      type: 'text',
      content: `## Trådløs kommunikasjon - en usynlig revolusjon

Hver dag bruker du trådløs kommunikasjon uten å tenke over det. Når du sender en melding, strømmer musikk, sjekker værmeldingen eller bruker GPS - alt dette avhenger av usynlige elektromagnetiske bølger som fyller luften rundt deg.

Trådløs kommunikasjon er kanskje den viktigste teknologiske utviklingen i vår tid. Den har forandret måten vi arbeider, kommuniserer, underholder oss og navigerer i verden.

**I dette kapittelet skal du lære:**
- Grunnprinsippene for trådløs kommunikasjon
- Hvordan informasjon kodes på radiobølger (modulasjon)
- Ulike trådløse teknologier (WiFi, mobilnett, Bluetooth, GPS)
- Hvordan 5G fungerer og hva det muliggjør
- Sammenhengen mellom frekvens, rekkevidde og kapasitet`,
    },
    {
      id: 'nat-vg1-2-7-def-1',
      type: 'definition',
      title: 'Grunnprinsipp for trådløs kommunikasjon',
      content: `**Trådløs kommunikasjon** bruker elektromagnetiske bølger til å overføre informasjon uten fysiske kabler.

**De fire hovedtrinnene:**

**1. Koding (digitalisering)**
- Informasjon (lyd, tekst, video) konverteres til digitale signaler
- Binær kode: 1-ere og 0-ere
- Eksempel: "A" = 01000001 i ASCII

**2. Modulasjon**
- Digitale signaler "legges oppå" en bærebølge
- Bærebølgen er en høyfrekvent radiobølge
- Informasjonen endrer bølgens amplitude, frekvens eller fase

**3. Sending og mottak**
- Sender: Antenne stråler ut modulert signal
- Signalet spres gjennom luften
- Mottaker: Antenne fanger opp signalet

**4. Demodulasjon og dekoding**
- Mottakeren "henter ut" informasjonen fra bærebølgen
- Digitale signaler konverteres tilbake til lyd, bilde, tekst

**Analogi:** Tenk på bærebølgen som en lastebil og informasjonen som lasten. Lastebilen (bærebølgen) transporterer lasten (informasjonen) fra A til B.`,
    },
    {
      id: 'nat-vg1-2-7-def-2',
      type: 'definition',
      title: 'Modulasjonsmetoder',
      content: `**Modulasjon** er teknikken for å "legge" informasjon på en bærebølge.

**1. Amplitudemodulasjon (AM)**
- Informasjonen endrer bølgens amplitude (styrke)
- Brukes i AM-radio
- Enkel, men sårbar for støy

**2. Frekvensmodulasjon (FM)**
- Informasjonen endrer bølgens frekvens
- Brukes i FM-radio
- Bedre lydkvalitet enn AM

**3. Fasemodulasjon (PM)**
- Informasjonen endrer bølgens fase
- Brukes i digital kommunikasjon

**Digitale modulasjonsmetoder:**
Moderne systemer (WiFi, 4G, 5G) bruker avanserte metoder som kombinerer amplitude og fase:

| Metode | Bits per symbol | Bruk |
|--------|-----------------|------|
| QPSK | 2 | Grunnleggende 4G |
| 16-QAM | 4 | WiFi, 4G |
| 64-QAM | 6 | Høyhastighets WiFi |
| 256-QAM | 8 | 5G, WiFi 6 |

Jo flere bits per symbol, jo høyere datahastighet - men også høyere krav til signalkvalitet.`,
    },
    {
      id: 'nat-vg1-2-7-example-1',
      type: 'example',
      title: 'Eksempel: Beregne bølgelengde og antennelengde',
      problem: 'WiFi bruker frekvensen 2,4 GHz. Beregn bølgelengden og forklar hvorfor WiFi-antenner er så små.',
      solution: `**Gitt:**
f = 2,4 GHz = 2,4 × 10⁹ Hz
c = 3 × 10⁸ m/s

**Beregning:**
λ = c/f = (3 × 10⁸) / (2,4 × 10⁹) = 0,125 m = **12,5 cm**

**Antennelengde:**
For optimal sending/mottak bør antennen være ca. 1/4 av bølgelengden:
Antennelengde = λ/4 = 12,5/4 = **3,1 cm**

**Forklaring:**
Derfor er WiFi-antenner (og mobilantenner) små - bare noen centimeter. FM-radioantenner må være mye større fordi FM bruker ca. 100 MHz, som gir bølgelengde på 3 meter.

**Sammenhengen:**
| Teknologi | Frekvens | Bølgelengde | Antenne |
|-----------|----------|-------------|---------|
| FM-radio | 100 MHz | 3 m | ~75 cm |
| Mobil 4G | 800 MHz | 37 cm | ~9 cm |
| WiFi | 2,4 GHz | 12,5 cm | ~3 cm |
| 5G mmWave | 28 GHz | 1,1 cm | ~3 mm |`,
    },
    {
      id: 'nat-vg1-2-7-def-3',
      type: 'definition',
      title: 'Trådløse teknologier - oversikt',
      content: `**Mobilnett:**
| Generasjon | Frekvenser | Hastighet | Kjennetegn |
|------------|------------|-----------|------------|
| 2G (GSM) | 900/1800 MHz | 14 kbps | SMS, tale |
| 3G | 900/2100 MHz | 2 Mbps | Mobilt internett |
| 4G/LTE | 700-2600 MHz | 100 Mbps | Streaming, apper |
| 5G | 700 MHz - 39 GHz | 1-10 Gbps | IoT, VR, selvkjørende |

**WiFi (WLAN):**
- 2,4 GHz: Lengre rekkevidde, mer interferens
- 5 GHz: Kortere rekkevidde, raskere, mindre interferens
- WiFi 6E: 6 GHz - enda flere kanaler
- Rekkevidde: 30-100 m innendørs

**Bluetooth:**
- 2,4 GHz
- Kort rekkevidde: 10-100 m
- Lavt strømforbruk
- Bruksområder: Hodetelefoner, høyttalere, smartklokker

**GPS (Global Positioning System):**
- Mottar signaler fra 24+ satellitter
- Frekvens: 1,2-1,6 GHz
- Beregner posisjon fra tidsforsinkelse til minst 4 satellitter
- Nøyaktighet: 3-5 meter (sivil bruk)`,
    },
    {
      id: 'nat-vg1-2-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hvorfor 5G-nett som bruker høye frekvenser (millimeterbølger) krever flere basestasjoner enn 4G.',
        hints: ['Tenk på sammenhengen mellom frekvens og rekkevidde', 'Hva skjer når bølger møter hindringer?'],
        solution: `**Forklaring:**

**1. Kortere rekkevidde:**
Høyere frekvenser (kortere bølgelengder) har kortere rekkevidde i fri luft fordi:
- Signalet svekkes raskere med avstanden
- Atmosfæren absorberer mer av signalet

**2. Dårligere gjennomtrengning:**
Millimeterbølger:
- Blokkeres lettere av bygninger, vegger, trær
- Absorberes av regn og fuktighet
- Kan blokkeres av en hånd foran telefonen!

**3. Mindre diffraksjon:**
- Korte bølgelengder bøyer seg mindre rundt hindringer
- 4G-signaler kan "bøye" rundt bygninger, 5G mmWave kan det ikke

**Konsekvens:**
- 5G mmWave krever basestasjoner med noen hundre meters mellomrom
- 4G kan dekke flere kilometer per basestasjon
- 5G brukes derfor primært i bysentre og innendørs

**Løsning i praksis:**
5G bruker OGSÅ lavere frekvenser (700 MHz) for bred dekning, og millimeterbølger for høy kapasitet i tette områder.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beregn bølgelengden for følgende trådløse teknologier:',
        subTasks: [
          { label: 'a', task: 'FM-radio ved 100 MHz', solution: 'λ = c/f = (3×10⁸)/(100×10⁶) = 3 m' },
          { label: 'b', task: 'Bluetooth ved 2,4 GHz', solution: 'λ = c/f = (3×10⁸)/(2,4×10⁹) = 0,125 m = 12,5 cm' },
          { label: 'c', task: '5G millimeterbølger ved 28 GHz', solution: 'λ = c/f = (3×10⁸)/(28×10⁹) = 0,0107 m = 10,7 mm' },
        ],
        hints: ['Bruk λ = c/f der c = 3 × 10⁸ m/s'],
        solution: 'a) 3 m, b) 12,5 cm, c) 10,7 mm. Merk hvordan høyere frekvens gir kortere bølgelengde!',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-7-def-4',
      type: 'definition',
      title: 'Hvordan GPS fungerer',
      content: `**GPS (Global Positioning System)** bruker satellitter til å bestemme posisjon på jorden.

**Systemet:**
- 24-32 satellitter i bane rundt jorden
- Hver satellitt sender ut signal med nøyaktig tidspunkt
- Satellittene har atomklokker med nanosekund-presisjon

**Posisjonering med tidsmåling:**

1. **Mottakeren registrerer signaler fra flere satellitter**
2. **Beregner avstand til hver satellitt:**
   - Avstand = lyshastighet × tidsforsinkelse
   - Eksempel: 0,07 s forsinkelse = 0,07 × 300 000 km/s = 21 000 km

3. **Trilaterasjon:**
   - Med 3 satellitter kan posisjonen beregnes (2D)
   - Med 4+ satellitter får man 3D-posisjon og nøyaktig tid

**Nøyaktighet:**
- Sivil GPS: 3-5 meter
- Med korrigeringer (EGNOS, RTK): Under 1 meter
- Militær GPS: Under 1 meter

**Feilkilder:**
- Atmosfærisk forsinkelse (ionosfæren)
- Satellittbaneunøyaktigheter
- Refleksjoner fra bygninger (multipath)
- Dårlig geometri (alle satellitter i samme retning)

**Andre systemer:**
- GLONASS (Russland)
- Galileo (EU)
- BeiDou (Kina)
Moderne telefoner bruker flere systemer samtidig for bedre nøyaktighet.`,
    },
    {
      id: 'nat-vg1-2-7-def-5',
      type: 'definition',
      title: '5G - den femte generasjonen',
      content: `**Hva er nytt med 5G?**

**1. Høyere hastighet**
- Teoretisk: Opptil 10 Gbit/s
- Praktisk: 100-500 Mbit/s (fortsatt 10× raskere enn 4G)
- Last ned en film på sekunder

**2. Lavere forsinkelse (latency)**
- 4G: 30-50 ms
- 5G: 1-10 ms
- Kritisk for sanntidsapplikasjoner

**3. Flere enheter**
- Opptil 1 million enheter per km²
- Muliggjør Internet of Things (IoT)

**Tre frekvensbånd:**

| Bånd | Frekvens | Egenskaper |
|------|----------|------------|
| Lav | 600-900 MHz | God dekning, moderat hastighet |
| Midt | 2,5-4 GHz | Balanse mellom dekning og hastighet |
| Høy (mmWave) | 24-39 GHz | Svært høy hastighet, kort rekkevidde |

**Mulige anvendelser:**
- **Selvkjørende biler:** Lav latency for sanntids-kommunikasjon
- **Fjernstyrt kirurgi:** Kirurg i Oslo opererer pasient i Tromsø
- **VR/AR:** Trådløs virtual reality uten forsinkelse
- **Smarte byer:** Sensorer overalt (trafikk, forurensning, søppel)
- **Industri 4.0:** Roboter og maskiner kommuniserer trådløst`,
    },
    {
      id: 'nat-vg1-2-7-example-2',
      type: 'example',
      title: 'Eksempel: GPS-beregning',
      problem: 'En GPS-mottaker registrerer at signalet fra en satellitt bruker 0,072 sekunder på å nå den. Hvor langt unna er satellitten?',
      solution: `**Gitt:**
- Tidsforsinkelse: t = 0,072 s
- Signalhastighet: c = 3 × 10⁸ m/s (lyshastigheten)

**Beregning:**
Avstand = hastighet × tid
s = c × t = 3 × 10⁸ m/s × 0,072 s
s = 2,16 × 10⁷ m = **21 600 km**

**Forklaring:**
GPS-satellitter går i bane ca. 20 200 km over jordoverflaten. Signalet bruker ca. 0,067-0,085 sekunder på å nå mottakeren, avhengig av satellittens posisjon.

**Hvorfor presisjon er viktig:**
Lyset beveger seg ca. 30 cm per nanosekund. En feil på bare 10 nanosekunder i tidsmålingen gir en posisjonsfeil på 3 meter. Derfor har GPS-satellitter atomklokker!`,
    },
    {
      id: 'nat-vg1-2-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hvorfor du ofte har bedre WiFi-dekning med 2,4 GHz enn med 5 GHz, men lavere hastighet.',
        hints: ['Tenk på bølgelengde og hindringer', 'Hva skjer med høyfrekvente bølger når de møter vegger?'],
        solution: `**2,4 GHz vs. 5 GHz WiFi:**

**2,4 GHz (lengre bølgelengde ~12,5 cm):**
*Fordeler:*
- Lengre rekkevidde (bølgene bøyer seg bedre rundt hindringer)
- Bedre gjennomtrengning av vegger
- Når flere rom i huset

*Ulemper:*
- Lavere hastighet (færre kanaler, smalere båndbredde)
- Mer interferens (mikrobølgeovner, Bluetooth, naboens WiFi)

**5 GHz (kortere bølgelengde ~6 cm):**
*Fordeler:*
- Høyere hastighet (flere og bredere kanaler)
- Mindre interferens (færre enheter på 5 GHz)

*Ulemper:*
- Kortere rekkevidde
- Absorberes mer av vegger, møbler, mennesker
- Dårligere dekning i store hus

**Når bruke hva?**
- 2,4 GHz: IoT-enheter, enheter langt fra ruteren
- 5 GHz: Streaming, gaming, enheter nær ruteren

**Moderne rutere:** Dual-band/tri-band rutere tilbyr begge frekvenser, og enheter velger automatisk den beste.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'En GPS-mottaker må ha signal fra minst 4 satellitter for å gi nøyaktig 3D-posisjon. Forklar hvorfor.',
        hints: ['Tenk på hva hver satellitt bidrar med', 'Hva er ukjent i ligningene?'],
        solution: `**Hvorfor 4 satellitter?**

**Ukjente variabler:**
1. X-koordinat (lengdegrad)
2. Y-koordinat (breddegrad)
3. Z-koordinat (høyde)
4. **Tidsfeil i mottakerens klokke**

**Problemet med mottakerens klokke:**
GPS-satellitter har atomklokker verdt millioner av kroner. Telefonen din har en billig kvartskrystallklokke som kan avvike med flere mikrosekunder. Denne feilen gir metervis av posisjonsfeil.

**Løsningen:**
Med 4 satellitter kan GPS-mottakeren løse et ligningssystem med 4 ukjente:
- 3 romlige koordinater
- 1 tidskorreksjon

**Med færre satellitter:**
- 3 satellitter: 2D-posisjon (antar havnivå), dårligere nøyaktighet
- 2 satellitter: Kan gi omtrentlig posisjon langs en linje
- 1 satellitt: Kan bare gi avstand, ikke retning

**Med flere satellitter (5+):**
- Bedre nøyaktighet gjennom redundans
- Kan oppdage feil i enkeltsatellitter
- Geometrien forbedres

**Optimal geometri:**
Satellittene bør være spredt på himmelen, ikke alle i samme retning.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-7-text-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Grunnprinsipp for trådløs kommunikasjon:**
1. Digitalisering (koding til 1-ere og 0-ere)
2. Modulasjon (informasjon på bærebølge)
3. Sending via antenne
4. Mottak og demodulasjon

**Trådløse teknologier:**
| Teknologi | Frekvens | Rekkevidde | Bruk |
|-----------|----------|------------|------|
| WiFi | 2,4/5/6 GHz | 30-100 m | Internett |
| Bluetooth | 2,4 GHz | 10-100 m | Tilbehør |
| 4G | 700-2600 MHz | km | Mobil |
| 5G | 700 MHz-39 GHz | m-km | Alt |
| GPS | 1,2-1,6 GHz | - | Navigasjon |

**Sammenhengen frekvens-rekkevidde:**
- Høy frekvens → kort bølgelengde → kort rekkevidde, høy kapasitet
- Lav frekvens → lang bølgelengde → lang rekkevidde, lavere kapasitet

**GPS:** Trilaterasjon med 4+ satellitter gir 3D-posisjon og tidskorreksjon.

**5G:** Høyere hastighet, lavere latency, flere enheter - muliggjør IoT og sanntidsapplikasjoner.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-2-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-7-ex-5',
        number: '5',
        type: 'classic',
        task: `Et sykehus vurderer å bruke 5G til fjernstyrt kirurgi, der en kirurg i Oslo styrer en robot som opererer en pasient i Tromsø.

a) Beregn teoretisk minste forsinkelse pga. avstand (Oslo-Tromsø er ca. 1400 km i luftlinje, signal via fiber med ca. 2/3 av lyshastigheten).
b) Forklar hvorfor lav latency (forsinkelse) er kritisk for fjernstyrt kirurgi.
c) Hvilke andre faktorer kan påvirke forsinkelsen?`,
        solution: `a) **Beregning av minimal forsinkelse:**

Avstand: s = 1400 km = 1,4 × 10⁶ m
Signalhastighet i fiber: v = 2/3 × c = 2 × 10⁸ m/s

Tid = avstand / hastighet
t = (1,4 × 10⁶) / (2 × 10⁸) = 0,007 s = **7 ms**

Tur-retur (kirurg sender kommando, mottar video tilbake):
2 × 7 ms = **14 ms minimum**

b) **Hvorfor lav latency er kritisk:**

Ved kirurgi må kirurgen reagere på det som skjer i sanntid:
- Blødning må stoppes umiddelbart
- Bevegelser må være presise
- Høy forsinkelse kan føre til "overstyring" (kirurgen kompenserer for forsinket respons)

Menneskets reaksjonstid er ca. 200-300 ms. Med 14 ms forsinkelse er operasjonen nesten som å være i rommet.

Med 100+ ms forsinkelse (typisk for 4G) ville det føles som å operere "bakpå", noe som kan være farlig.

c) **Andre faktorer som påvirker forsinkelsen:**
1. **Prosessering:** Videokomprimeering/dekomprimeering
2. **Ruternoder:** Hvert hopp i nettverket legger til noen ms
3. **Trådløs del:** 5G-basestasjoner legger til 1-10 ms
4. **Serverbehandling:** Robotstyringsalgoritmer
5. **Jitter:** Variasjon i forsinkelse (kan være like problematisk som selve forsinkelsen)

Total realistisk forsinkelse: 20-50 ms, som fortsatt er akseptabelt for de fleste kirurgiske inngrep.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-7-ex-6',
        number: '6',
        type: 'classic',
        task: `Du skal planlegge WiFi-dekning for en stor bygning med tre etasjer.

a) Forklar hvorfor én ruter midt i bygningen sannsynligvis ikke gir god dekning overalt.
b) Foreslå en bedre løsning, og begrunn med fysiske prinsipper.
c) Hvilken WiFi-frekvens (2,4 GHz eller 5 GHz) ville du prioritert for enheter i rom langt fra ruteren? Begrunn.`,
        solution: `a) **Hvorfor én ruter ikke er nok:**

1. **Signal svekkes med avstanden:** Signalstyrken synker med kvadratet av avstanden
2. **Vegger og gulv absorberer:** Hver betongvegg/gulv kan redusere signalet med 10-20 dB
3. **Skyggeområder:** Heissjakter, trapperom og metallkonstruksjoner blokkerer
4. **Interferens:** Mikroovner, Bluetooth-enheter og naboens WiFi

Med 3 etasjer må signalet gjennom minst 2 betonggulv, noe som kan redusere signalet med 90%+.

b) **Bedre løsning:**

**Mesh-nettverk eller flere aksesspunkter:**
- Plasser én ruter/aksesspunkt per etasje
- Koble dem sammen med kabel (backhaul) for best ytelse
- Alternativt: Mesh-system som kommuniserer trådløst

**Plassering:**
- Sentralt på hver etasje
- Unngå metallskap og tykke vegger
- Ikke i hjørner (kaster bort signal ut av bygningen)

**Fysisk begrunnelse:**
Ved å ha flere aksesspunkter reduserer du maksimal avstand til enhver enhet, og signalet trenger gjennom færre hindringer.

c) **Frekvensvalg for fjerne enheter: 2,4 GHz**

**Begrunnelse:**
- 2,4 GHz har lengre bølgelengde (12,5 cm vs. 6 cm)
- Lengre bølgelengder bøyer seg bedre rundt hindringer (diffraksjon)
- Absorberes mindre av vegger og materialer
- Rekker lenger enn 5 GHz

**5 GHz** er bedre for enheter nær ruteren der man ønsker høy hastighet, mens **2,4 GHz** er bedre for dekning i vanskelige områder.

Mange moderne systemer veksler automatisk mellom frekvensene basert på signalkvalitet.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-7-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Grunnprinsipp for trådløs kommunikasjon**: Digitalisering, modulasjon, sending/mottak via antenne, og demodulasjon/dekoding
- **Modulasjonsmetoder**: AM (amplitude), FM (frekvens) og PM (fase) – samt avanserte digitale metoder som QAM
- **Trådløse teknologier**: WiFi, Bluetooth, mobilnett (2G–5G) og GPS – med ulike frekvenser, rekkevidder og bruksområder
- **Sammenhengen frekvens og rekkevidde**: Høy frekvens gir kort bølgelengde, kort rekkevidde, men høy kapasitet
- **GPS**: Bruker trilaterasjon med signaler fra 4+ satellitter for å beregne 3D-posisjon og korrigere tidsfeil
- **5G-teknologi**: Muliggjør høyere hastighet, lavere forsinkelse og mange flere enheter enn tidligere generasjoner

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Modulasjon | Teknikk for å «legge» informasjon på en bærebølge |
| Bærebølge | Høyfrekvent radiobølge som transporterer informasjonen |
| Trilaterasjon | Posisjonsbestemmelse basert på avstandsmåling til flere punkter |
| Latency | Forsinkelse i signaloverføring (viktig for sanntidsapplikasjoner) |
| Millimeterbølger | Bølger med bølgelengde på noen millimeter (brukt i 5G) |
| IoT | Internet of Things – trådløs kommunikasjon mellom gjenstander |`
    },
    {
      id: 'nat-vg1-2-7-kilder',
      type: 'text',
      content: `### Kilder og videre lesning

- Nasjonal kommunikasjonsmyndighet, NKOM (nkom.no) – «Frekvensforvaltning», «5G i Norge» og «Trådløs kommunikasjon»
- Store norske leksikon (snl.no) – «Radiokommunikasjon», «GPS» og «5G»
- Hannisdal, M. et al. (2021). *Kosmos – Naturfag VG1*. Fagbokforlaget.
- Heskestad, P. A. et al. (2020). *Tellus 11 – Naturfag VG1*. Cappelen Damm.
- ESA (esa.int) – European Space Agency: «How satellite navigation works» – om GPS og Galileo`
    },
  ],
  exercises: [],
};

// Export alle kapitler fra del 1
export const NAT_VG1_CHAPTERS_DEL1 = [
  CHAPTER_NAT_VG1_1_1,
  CHAPTER_NAT_VG1_1_2,
  CHAPTER_NAT_VG1_1_3,
  CHAPTER_NAT_VG1_1_4,
  CHAPTER_NAT_VG1_1_5,
  CHAPTER_NAT_VG1_2_1,
  CHAPTER_NAT_VG1_2_2,
  CHAPTER_NAT_VG1_2_3,
  CHAPTER_NAT_VG1_2_4,
  CHAPTER_NAT_VG1_2_5,
  CHAPTER_NAT_VG1_2_6,
  CHAPTER_NAT_VG1_2_7,
];
