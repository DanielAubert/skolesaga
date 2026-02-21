/**
 * Tekstbok innhold for Naturfag VG1 DEL 5 / Seksjon 9: Bioteknologi (9.1-9.5)
 *
 * Dekker LK20 kompetansemål for NAT01-04.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// SEKSJON 9: Bioteknologi
// ============================================================================

export const CHAPTER_NAT_VG1_9_1: TextbookChapter = {
  id: 'nat-vg1-9-1',
  courseId: 'nat-vg1',
  chapterNumber: '9.1',
  title: 'Genteknologiske metoder',
  description: 'Lær om de viktigste verktøyene og metodene i moderne bioteknologi.',
  estimatedMinutes: 55,
  competenceGoals: ['gi eksempler på bruk av bioteknologi og drøfte etiske spørsmål knyttet til bioteknologi'],
  content: [
    {
      id: 'nat-vg1-9-1-intro',
      type: 'text',
      content: `## Genteknologiske metoder – verktøykassen for fremtiden

Tenk deg at du kan redigere DNA like enkelt som du redigerer en tekst på datamaskinen. Hva om du kunne klippe ut et gen som forårsaker sykdom og erstatte det med et friskt gen? Dette høres ut som science fiction, men det er faktisk hva moderne bioteknologi kan gjøre.

Bioteknologi er et av de raskest voksende fagfeltene i verden, og det påvirker alt fra maten vi spiser til medisinene vi tar. For å forstå denne teknologien trenger vi å kjenne verktøyene – de molekylære saksene, kopimaskinene og avlesningsapparatene som gjør det mulig å arbeide med DNA på helt nye måter.

I dette kapittelet skal du lære:
- Hva bioteknologi er og hvordan det har utviklet seg fra gammel til moderne tid
- Hvordan restriksjonsenzymer og DNA-ligase fungerer som molekylære verktøy
- Hva PCR er og hvorfor metoden er revolusjonerende for DNA-kopiering
- Hvordan gelelektroforese og gensekvensering brukes til å analysere DNA
- Hvordan rekombinant DNA-teknologi brukes til å produsere medisiner som insulin`,
    },
    {
      id: 'nat-vg1-9-1-text-1',
      type: 'text',
      content: `## Hva er bioteknologi?

**Bioteknologi** er bruk av levende organismer eller biologiske prosesser for å lage produkter, løse problemer eller utvikle ny teknologi.

**Gammel bioteknologi** har menneskene brukt i tusenvis av år:
- Gjæring for å lage brød, øl og vin
- Ost- og yoghurtproduksjon med bakterier
- Avl av husdyr og plantesorter med ønskede egenskaper

**Moderne bioteknologi** bruker avanserte genteknologiske metoder for å endre arvematerialet direkte:
- Genmodifisering av organismer (GMO)
- Produksjon av medisiner med rekombinant DNA
- Genterapi for å behandle sykdommer
- CRISPR-genredigering

Overgangen fra gammel til moderne bioteknologi skjedde på 1970-tallet, da forskere lærte seg å klippe og lime DNA fra ulike organismer.`,
    },
    // Oppgave om gammel vs. moderne bioteknologi – tester text-1
    {
      id: 'nat-vg1-9-1-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-1-exercise-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom gammel og moderne bioteknologi. Gi minst to eksempler på hver.',
        solution: 'Gammel bioteknologi bruker levende organismer uten å endre arvematerialet direkte. Eksempler: gjæring for å lage brød og øl, og avl av husdyr for å få ønskede egenskaper. Moderne bioteknologi bruker genteknologiske metoder for å endre DNA direkte. Eksempler: innsetting av insulingenet i bakterier for å produsere insulin, og genmodifisering av planter for å gi motstandskraft mot skadedyr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-9-1-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-1-exercise-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva skjedde på 1970-tallet som markerte overgangen fra gammel til moderne bioteknologi?',
        options: [
          { id: 'a', text: 'Forskere oppdaget at bakterier kunne gjære sukker til alkohol', isCorrect: false },
          { id: 'b', text: 'Forskere lærte seg å klippe og lime DNA fra ulike organismer', isCorrect: true },
          { id: 'c', text: 'Det ble mulig å avle dyr med bedre egenskaper', isCorrect: false },
          { id: 'd', text: 'Mikroskopet ble oppfunnet slik at man kunne se celler', isCorrect: false },
        ],
        solution: 'Riktig svar er b. På 1970-tallet lærte forskere seg å bruke restriksjonsenzymer og DNA-ligase til å klippe ut gener fra én organisme og lime dem inn i en annen. Dette var starten på rekombinant DNA-teknologi og markerte overgangen fra tradisjonell bruk av organismer (gjæring, avl) til direkte manipulering av arvematerialet.',
      },
    },
    {
      id: 'nat-vg1-9-1-def-1',
      type: 'definition',
      title: 'Restriksjonsenzymer og DNA-ligase',
      content: `**Restriksjonsenzymer** er molekylære sakser som klipper DNA på bestemte steder.

- Finnes naturlig i bakterier som forsvar mot virus
- Gjenkjenner spesifikke DNA-sekvenser (vanligvis 4-8 basepar)
- Klipper DNA-tråden og lager enten butte ender eller klebrige ender (\"sticky ends\")
- **Klebrige ender** har utstikkende enkelttråder som kan binde seg til komplementære ender fra annet DNA

**DNA-ligase** er det molekylære limet:
- Kobler sammen DNA-fragmenter ved å lage kovalente bindinger mellom sukker- og fosfatgrupper
- Brukes til å sette inn nye gener i et DNA-molekyl
- Avgjørende for å bygge rekombinant DNA

Sammen gjør restriksjonsenzymer og DNA-ligase det mulig å klippe ut et gen fra en organisme og lime det inn i en annen.`,
    },
    // Oppgave om restriksjonsenzymer – tester def-1
    {
      id: 'nat-vg1-9-1-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-1-exercise-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva er funksjonen til restriksjonsenzymer i genteknologien?',
        options: [
          { id: 'a', text: 'De kopierer DNA-molekyler i stor skala', isCorrect: false },
          { id: 'b', text: 'De limer sammen DNA-fragmenter fra ulike organismer', isCorrect: false },
          { id: 'c', text: 'De klipper DNA på bestemte steder i sekvensen', isCorrect: true },
          { id: 'd', text: 'De oversetter DNA til proteiner i cellen', isCorrect: false },
        ],
        solution: 'Riktig svar er c. Restriksjonsenzymer er molekylære sakser som gjenkjenner spesifikke DNA-sekvenser og klipper DNA-tråden der. De kan lage enten butte ender eller klebrige ender. Alternativ b beskriver DNA-ligase, alternativ a beskriver PCR, og alternativ d beskriver ribosomer.',
      },
    },
    {
      id: 'nat-vg1-9-1-def-2',
      type: 'definition',
      title: 'PCR - Polymerasekjedereaksjon',
      content: `**PCR (Polymerase Chain Reaction)** er en metode for å lage millioner av kopier av et bestemt DNA-område.

**Steg i PCR (gjentas 25-35 ganger):**
1. **Denaturering (95 °C):** DNA-dobbelheliksen åpnes ved oppvarming
2. **Annealing (50-65 °C):** Korte primere (DNA-biter) binder seg til starten av DNA-området som skal kopieres
3. **Elongering (72 °C):** DNA-polymerase bygger nye DNA-tråder fra primerne

**Resultat:** Etter n sykluser har man $2^n$ kopier. Etter 30 sykluser: over 1 milliard kopier!

**Bruksområder:**
- Rettsmedisin (DNA-profilering)
- Diagnostikk (påvise virus og bakterier)
- Forskning
- Slektsforskning`,
    },
    // Oppgave om PCR – tester def-2
    {
      id: 'nat-vg1-9-1-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-1-exercise-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv de tre stegene i en PCR-syklus, og forklar hvorfor metoden gir en eksponentiell økning i antall DNA-kopier.',
        solution: 'De tre stegene i PCR er: 1) Denaturering ved 95 °C, der dobbelheliksen åpnes. 2) Annealing ved 50-65 °C, der primere binder seg til målsekvensen. 3) Elongering ved 72 °C, der DNA-polymerase kopierer DNA fra primerne. I hver syklus fordobles antall DNA-kopier fordi hver tråd fungerer som mal for en ny kopi. Etter n sykluser har man 2^n kopier. For eksempel gir 30 sykluser over 1 milliard kopier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-9-1-def-3',
      type: 'definition',
      title: 'Gelelektroforese og gensekvensering',
      content: `**Gelelektroforese** er en metode for å sortere DNA-fragmenter etter størrelse.

**Prinsipp:**
- DNA-fragmenter plasseres i en gel og utsettes for et elektrisk felt
- DNA er negativt ladet og vandrer mot den positive polen
- Små fragmenter beveger seg raskere enn store gjennom gelen
- Resultatet er et båndmønster der hvert bånd representerer fragmenter av en bestemt størrelse

**Gensekvensering** er å lese av rekkefølgen av basene (A, T, G, C) i et DNA-molekyl.
- Moderne sekvensering kan lese hele genomet til en organisme
- Har blitt dramatisk billigere: Humant genom kostet 3 milliarder dollar i 2003, men under 1000 dollar i dag
- Grunnlaget for persontilpasset medisin og DNA-analyser

**Vektorer og plasmider:**
- En **vektor** er et DNA-molekyl som kan frakte et fremmed gen inn i en celle
- **Plasmider** er små, sirkulære DNA-molekyler i bakterier som ofte brukes som vektorer
- Genet som skal overføres, settes inn i plasmidet med restriksjonsenzymer og DNA-ligase`,
    },
    // Oppgave om gelelektroforese og vektorer – tester def-3
    {
      id: 'nat-vg1-9-1-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-1-exercise-6',
        number: '6',
        type: 'classic',
        task: 'Forklar prinsippet bak gelelektroforese. Hvorfor vandrer DNA-fragmenter mot den positive polen, og hvorfor beveger små fragmenter seg raskere enn store?',
        solution: 'Gelelektroforese utnytter at DNA er negativt ladet på grunn av fosfatgruppene i DNA-ryggraden. Når DNA plasseres i en gel og utsettes for et elektrisk felt, vil de negativt ladede fragmentene trekkes mot den positive polen (anoden). Gelen fungerer som et nettverk av porer. Små fragmenter beveger seg lettere gjennom porene og vandrer derfor raskere enn store fragmenter, som bremses mer av gelstrukturen. Resultatet er at fragmentene sorteres etter størrelse, med de minste lengst fra startpunktet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-9-1-exercise-7',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-1-exercise-7',
        number: '7',
        type: 'multiple-choice',
        task: 'Et plasmid brukes som vektor i genteknologi. Hva er et plasmid?',
        options: [
          { id: 'a', text: 'Et enzym som klipper DNA på bestemte steder', isCorrect: false },
          { id: 'b', text: 'Et lite, sirkulært DNA-molekyl som finnes i bakterier', isCorrect: true },
          { id: 'c', text: 'En type virus som infiserer menneskeceller', isCorrect: false },
          { id: 'd', text: 'En metode for å sortere DNA-fragmenter etter størrelse', isCorrect: false },
        ],
        solution: 'Riktig svar er b. Et plasmid er et lite, sirkulært DNA-molekyl som finnes naturlig i bakterier, adskilt fra bakteriens hovedkromosom. Plasmider kan replikeres uavhengig og overføres mellom bakterier. I genteknologien brukes plasmider som vektorer – transportmolekyler som frakter fremmede gener inn i bakterieceller. Et gen settes inn i plasmidet med restriksjonsenzymer og DNA-ligase, og det rekombinante plasmidet overføres til bakterien.',
      },
    },
    {
      id: 'nat-vg1-9-1-example-1',
      type: 'example',
      title: 'Eksempel: Produksjon av insulin med rekombinant DNA',
      problem: 'Forklar trinn for trinn hvordan menneskelig insulin kan produseres ved hjelp av genteknologi.',
      solution: `**Bakgrunn:**
Før 1982 ble insulin til diabetespasienter hentet fra griser og kyr. Med genteknologi kan man nå produsere menneskelig insulin i bakterier.

**Fremgangsmåte:**

1. **Identifiser genet:** Finn insulingenet i menneskelig DNA
2. **Klipp ut genet:** Bruk restriksjonsenzymer til å klippe ut insulingenet
3. **Klipp opp plasmidet:** Bruk samme restriksjonsenzym til å åpne et bakterieplasmid
4. **Lim inn genet:** Bruk DNA-ligase til å sette insulingenet inn i plasmidet - dette gir rekombinant DNA
5. **Sett inn plasmidet:** Overfør det rekombinante plasmidet til *E. coli*-bakterier (transformasjon)
6. **Dyrk bakteriene:** Bakteriene deler seg og kopierer plasmidet, inkludert insulingenet
7. **Produksjon:** Bakteriene bruker insulingenet til å produsere menneskelig insulin
8. **Rensing:** Insulinet renses ut og brukes som medisin

**Fordeler:**
- Identisk med menneskelig insulin (færre allergiske reaksjoner)
- Kan produseres i store mengder
- Billigere enn å utvinne fra dyr
- Ingen etiske problemer knyttet til dyreslakting for insulin`,
    },
    // --- Oppsummering ---
    {
      id: 'nat-vg1-9-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Bioteknologi**: Bruk av levende organismer eller biologiske prosesser for å lage produkter, løse problemer eller utvikle ny teknologi – fra eldgammel gjæring til moderne genteknologi.
- **Restriksjonsenzymer og DNA-ligase**: Molekylære verktøy som henholdsvis klipper og limer DNA, og som gjør rekombinant DNA-teknologi mulig.
- **PCR**: En metode for å lage millioner av kopier av et bestemt DNA-område ved gjentatte sykluser av denaturering, annealing og elongering.
- **Gelelektroforese og gensekvensering**: Metoder for å sortere DNA-fragmenter etter størrelse og lese av basesekvensen i DNA.
- **Vektorer og plasmider**: DNA-molekyler som frakter fremmede gener inn i celler, sentralt i rekombinant DNA-teknologi.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Bioteknologi | Bruk av organismer eller biologiske prosesser til å lage produkter |
| Restriksjonsenzymer | Enzymer som klipper DNA på bestemte sekvenser |
| DNA-ligase | Enzym som limer sammen DNA-fragmenter |
| Rekombinant DNA | DNA satt sammen fra ulike kilder |
| PCR | Polymerasekjedereaksjon – kopierer DNA eksponentielt |
| Gelelektroforese | Metode for å sortere DNA-fragmenter etter størrelse |
| Gensekvensering | Avlesning av baserekkefølgen i DNA |
| Vektor | DNA-molekyl som frakter gener inn i celler |
| Plasmid | Sirkulært DNA-molekyl i bakterier, brukt som vektor |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-9-1-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-1-exercise-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv trinnene i produksjon av menneskelig insulin ved hjelp av rekombinant DNA-teknologi. Hvilken rolle spiller restriksjonsenzymer, DNA-ligase og plasmider i prosessen?',
        hints: ['Tenk på insulingenet som må klippes ut, et plasmid som må åpnes, og hvordan de settes sammen.'],
        solution: 'Trinnene er: 1) Insulingenet klippes ut av menneskelig DNA med restriksjonsenzymer. 2) Et bakterieplasmid åpnes med det samme restriksjonsenzymet, slik at man får kompatible klebrige ender. 3) DNA-ligase limer insulingenet inn i det åpne plasmidet og danner rekombinant DNA. 4) Det rekombinante plasmidet settes inn i E. coli-bakterier. 5) Bakteriene deler seg og produserer menneskelig insulin. Restriksjonsenzymer fungerer som sakser for å klippe DNA, DNA-ligase er limet som kobler sammen fragmentene, og plasmidet er vektoren som frakter genet inn i bakterien.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-9-1-exercise-8',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-1-exercise-8',
        number: '8',
        type: 'multiple-choice',
        task: 'Etter 20 sykluser med PCR, hvor mange kopier av DNA-målsekvensen har man teoretisk?',
        options: [
          { id: 'a', text: '20 kopier', isCorrect: false },
          { id: 'b', text: '400 kopier', isCorrect: false },
          { id: 'c', text: 'Ca. 1 million kopier', isCorrect: true },
          { id: 'd', text: 'Ca. 1 milliard kopier', isCorrect: false },
        ],
        solution: 'Riktig svar er c. I PCR fordobles antall DNA-kopier i hver syklus, så etter n sykluser har man 2^n kopier. Etter 20 sykluser: 2^20 = 1 048 576, altså omtrent 1 million kopier. Alternativ d (1 milliard) tilsvarer omtrent 2^30, altså 30 sykluser.',
      },
    },
    // --- Kilder ---
    {
      id: 'nat-vg1-9-1-kilder',
      type: 'text',
      content: `### Kilder og videre lesning

- Bioteknologirådet: «Hva er bioteknologi?» – bioteknologiradet.no
- Store norske leksikon: «Bioteknologi» – snl.no/bioteknologi
- Store norske leksikon: «Polymerasekjedereaksjon (PCR)» – snl.no/polymerasekjedereaksjon
- Naturfag.no: «Genteknologi» – naturfag.no
- NDLA: «Genteknologiske metoder» – ndla.no
- Alberts, B. et al.: *Molecular Biology of the Cell*, Garland Science`,
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_9_2: TextbookChapter = {
  id: 'nat-vg1-9-2',
  courseId: 'nat-vg1',
  chapterNumber: '9.2',
  title: 'CRISPR og genredigering',
  description: 'Forstå hvordan CRISPR-Cas9 fungerer og hvordan det brukes til å redigere DNA.',
  estimatedMinutes: 50,
  competenceGoals: ['gi eksempler på bruk av bioteknologi og drøfte etiske spørsmål knyttet til bioteknologi'],
  content: [
    {
      id: 'nat-vg1-9-2-intro',
      type: 'text',
      content: `## CRISPR og genredigering – livets egen tekstbehandler

Forestill deg at genomet er en bok med over tre milliarder bokstaver. Frem til nylig kunne vi bare legge til nye sider i boken, uten å vite nøyaktig hvor de havnet. Med CRISPR kan vi for første gang finne akkurat den setningen vi vil endre, og redigere den med kirurgisk presisjon.

CRISPR-teknologien har blitt kalt den viktigste biologiske oppdagelsen siden DNA-strukturen ble kartlagt i 1953. Den er så enkel og billig at den har demokratisert genteknologien og gjort den tilgjengelig for forskningslaboratorier over hele verden. Men med stor makt følger stort ansvar – og debatten om hvordan vi bør bruke CRISPR, er bare så vidt i gang.

I dette kapittelet skal du lære:
- Hva CRISPR-Cas9 er og hvordan systemet opprinnelig ble oppdaget i bakterier
- Hvordan guide-RNA og Cas9-proteinet samarbeider for å redigere DNA
- Forskjellen mellom knock-out og knock-in av gener
- Hvilke fordeler CRISPR har sammenlignet med eldre genteknologiske metoder
- Hva gendrivere er og hvilke muligheter og risikoer de innebærer`,
    },
    {
      id: 'nat-vg1-9-2-text-1',
      type: 'text',
      content: `## CRISPR - en revolusjon i genteknologien

**CRISPR** (Clustered Regularly Interspaced Short Palindromic Repeats) er et genredigeringsverktøy som har revolusjonert biologien siden det ble utviklet i 2012.

**Oppdagelseshistorie:**
- CRISPR-sekvenser ble først oppdaget i bakterier på 1980-tallet
- Forskere fant at bakterier bruker CRISPR som et immunforsvar mot virus
- I 2012 viste **Jennifer Doudna** (USA) og **Emmanuelle Charpentier** (Frankrike) at CRISPR-Cas9 kunne brukes til presis genredigering
- De to fikk **Nobelprisen i kjemi i 2020** for denne oppdagelsen

**Hvorfor er CRISPR så viktig?**
- Mye enklere, billigere og raskere enn eldre metoder
- Kan brukes i nesten alle organismer
- Svært presis - kan redigere enkeltbaser i genomet
- Har åpnet for muligheter som tidligere var umulige`,
    },
    {
      id: 'nat-vg1-9-2-def-1',
      type: 'definition',
      title: 'Hvordan CRISPR-Cas9 fungerer',
      content: `CRISPR-Cas9-systemet består av to hovedkomponenter:

**1. Guide-RNA (gRNA):**
- En kort RNA-sekvens (ca. 20 baser) som er komplementær til det stedet i DNA-et man vil redigere
- Fungerer som en GPS som finner riktig sted i genomet
- Kan designes for å treffe nesten hvilken som helst DNA-sekvens

**2. Cas9-proteinet:**
- Et enzym som fungerer som en molekylær saks
- Binder seg til guide-RNA-et og føres til riktig sted
- Klipper begge trådene i DNA-dobbelheliksen

**Prosessen:**
1. Forskeren designer et guide-RNA som matcher målsekvensen
2. Guide-RNA og Cas9 settes inn i cellen
3. Guide-RNA finner målsekvensen i DNA ved komplementær baseparing
4. Cas9 klipper begge DNA-trådene
5. Cellens egne reparasjonssystemer reparerer kuttet:
   - **Uten mal:** Genet blir ødelagt (knock-out)
   - **Med mal-DNA:** Et nytt gen eller en endring settes inn (knock-in)`,
    },
    // Oppgave om CRISPR-Cas9-komponentene – tester def-1
    {
      id: 'nat-vg1-9-2-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-2-exercise-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv de to hovedkomponentene i CRISPR-Cas9-systemet og forklar hvordan de samarbeider for å redigere DNA.',
        solution: 'De to hovedkomponentene er guide-RNA (gRNA) og Cas9-proteinet. Guide-RNA er en kort RNA-sekvens som er komplementær til den DNA-sekvensen man vil redigere. Det fungerer som en GPS som finner riktig sted i genomet. Cas9 er et enzym som fungerer som en molekylær saks. Cas9 binder seg til guide-RNA-et og føres til målsekvensen. Når guide-RNA binder seg til komplementært DNA, klipper Cas9 begge trådene i dobbelheliksen. Cellens reparasjonssystemer reparerer deretter kuttet, enten ved å ødelegge genet eller ved å sette inn en ny sekvens.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-9-2-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-2-exercise-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva skjer når Cas9 klipper DNA-et og cellen reparerer kuttet UTEN en mal-DNA-sekvens?',
        options: [
          { id: 'a', text: 'Et nytt gen settes inn på det klippede stedet (knock-in)', isCorrect: false },
          { id: 'b', text: 'DNA-et repareres perfekt og ingenting endres', isCorrect: false },
          { id: 'c', text: 'Genet blir ødelagt og mister sin funksjon (knock-out)', isCorrect: true },
          { id: 'd', text: 'Hele kromosomet brytes ned og cellen dør', isCorrect: false },
        ],
        solution: 'Riktig svar er c. Når Cas9 klipper begge DNA-trådene og cellen reparerer kuttet uten en mal, skjer reparasjonen ofte upresist. Det kan legges til eller fjernes noen baser, som gjør at genet ikke lenger kan leses riktig. Genet mister dermed sin funksjon – dette kalles knock-out. Dersom en mal-DNA-sekvens tilføres, kan cellen i stedet sette inn en ny sekvens (knock-in).',
      },
    },
    {
      id: 'nat-vg1-9-2-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-2-exercise-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hvilken komponent i CRISPR-Cas9-systemet fungerer som en «GPS» som finner riktig sted i genomet?',
        options: [
          { id: 'a', text: 'Cas9-proteinet', isCorrect: false },
          { id: 'b', text: 'DNA-polymerase', isCorrect: false },
          { id: 'c', text: 'Restriksjonsenzymet', isCorrect: false },
          { id: 'd', text: 'Guide-RNA (gRNA)', isCorrect: true },
        ],
        solution: 'Riktig svar er d. Guide-RNA er en kort RNA-sekvens (ca. 20 baser) som er komplementær til målsekvensen i DNA. Den leder Cas9-proteinet til riktig sted i genomet ved komplementær baseparing. Cas9 er selve saksen som klipper, men det er guide-RNA som bestemmer hvor klippingen skjer.',
      },
    },
    {
      id: 'nat-vg1-9-2-def-2',
      type: 'definition',
      title: 'Fordeler over eldre metoder',
      content: `**Sammenligning med eldre genteknologi:**

| Egenskap | Eldre metoder | CRISPR-Cas9 |
|----------|---------------|-------------|
| Presisjon | Lav - tilfeldig innsetting | Høy - treffer bestemt sted |
| Kostnad | Svært dyrt | Relativt billig |
| Tidsbruk | Måneder til år | Dager til uker |
| Kompleksitet | Krever spesialisert utstyr | Kan brukes i de fleste laboratorier |
| Universalitet | Begrenset til noen arter | Fungerer i nesten alle organismer |

**Begrensninger:**
- Av og til kan Cas9 klippe på feil sted (\"off-target\"-effekter)
- Reparasjon av kuttet er ikke alltid presis
- Leveranse inn i celler kan være utfordrende
- Etiske spørsmål om bruk på mennesker`,
    },
    // Oppgave om fordeler og begrensninger – tester def-2
    {
      id: 'nat-vg1-9-2-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-2-exercise-6',
        number: '6',
        type: 'classic',
        task: 'En forsker vil bruke CRISPR-Cas9 til å studere funksjonen til et bestemt gen i mus. Forklar hvordan forskeren kan bruke knock-out-teknikken, og nevn en mulig begrensning ved metoden.',
        solution: 'Forskeren designer et guide-RNA som er komplementært til sekvensen i genet som skal studeres. Guide-RNA og Cas9-protein settes inn i museceller (for eksempel embryonale celler). Cas9 klipper begge DNA-trådene i målgenet. Uten en reparasjonsmal vil cellens reparasjonsmekanisme introdusere feil (innsetting eller fjerning av baser), slik at genet mister sin funksjon (knock-out). Ved å studere musen uten dette genet kan forskeren finne ut hva genet gjør. En mulig begrensning er off-target-effekter: Cas9 kan av og til klippe på feil sted i genomet, noe som kan påvirke andre gener og gi misvisende resultater.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-9-2-def-3',
      type: 'definition',
      title: 'Bruksområder og gendrivere',
      content: `**Bruksområder for CRISPR:**
- **Medisin:** Behandle arvelige sykdommer som sigdcelleanemi, muskeldystrofi og visse former for blindhet
- **Landbruk:** Utvikle planter som tåler tørke, sykdom eller gir bedre avlinger
- **Forskning:** Studere genfunksjoner ved å slå av enkeltgener
- **Industri:** Utvikle mikroorganismer som produserer biodrivstoff eller kjemikalier

**Gendriver (gene drive):**
En gendriver er en teknikk der CRISPR brukes til å sikre at en genendring arves av nesten alle avkom - ikke bare halvparten som ved vanlig arv.

- Kan spre en egenskap gjennom en hel populasjon på få generasjoner
- Mulig bruk: Gjøre malariamygg ufruktbare for å bekjempe malaria
- Bekymring: Kan få uforutsette konsekvenser for økosystemer

**Genredigering vs. GMO:**
- **Genredigering:** Endrer organismens eget DNA (ingen fremmed DNA settes inn)
- **GMO:** Setter inn DNA fra en annen art
- Noen mener genredigerte organismer bør reguleres mildere enn tradisjonelle GMO-er`,
    },
    // Oppgave om gendrivere – tester def-3
    {
      id: 'nat-vg1-9-2-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-2-exercise-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva en gendriver er, og diskuter fordeler og mulige risikoer ved å bruke gendrivere til å bekjempe malaria.',
        solution: 'En gendriver er en teknikk der CRISPR brukes til å sikre at en genendring arves av nesten alle avkom, slik at endringen sprer seg gjennom hele populasjonen på få generasjoner. For malariabekjempelse kan man gjøre malariamygg ufruktbare eller resistente mot malariaparasitten. Fordeler: Kan potensielt utrydde malaria som dreper hundretusenvis hvert år, uten behov for sprøytemidler. Risikoer: Kan få uforutsette konsekvenser for økosystemer dersom en art forsvinner eller endres drastisk, effekten kan ikke lett reverseres, og teknologien kan misbrukes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummering ---
    {
      id: 'nat-vg1-9-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **CRISPR-Cas9**: Et revolusjonerende genredigeringsverktøy utviklet i 2012, basert på bakteriers naturlige immunforsvar mot virus.
- **Guide-RNA og Cas9**: De to hovedkomponentene i systemet – guide-RNA finner målsekvensen, mens Cas9 klipper DNA-et.
- **Knock-out og knock-in**: Cellen kan enten ødelegge et gen (knock-out) eller sette inn en ny sekvens (knock-in) etter at DNA-et er klippet.
- **Fordeler over eldre metoder**: CRISPR er billigere, raskere, mer presis og kan brukes i nesten alle organismer.
- **Gendrivere**: En teknikk for å spre genendringer gjennom hele populasjoner, med potensiale for blant annet malariabekjempelse.
- **Genredigering vs. GMO**: Genredigering endrer organismens eget DNA, mens GMO innebærer innsetting av fremmed DNA.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| CRISPR | Clustered Regularly Interspaced Short Palindromic Repeats – genredigeringsverktøy |
| Cas9 | Enzym som klipper DNA på et bestemt sted styrt av guide-RNA |
| Guide-RNA (gRNA) | Kort RNA-sekvens som leder Cas9 til målsekvensen i DNA |
| Knock-out | Ødellegging av et gen ved å kutte DNA uten reparasjonsmal |
| Knock-in | Innsetting av nytt DNA ved hjelp av en reparasjonsmal |
| Gendriver | Teknikk som sikrer at en genendring arves av nesten alle avkom |
| Off-target-effekt | Utilsiktet klipping av DNA på feil sted |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-9-2-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-2-exercise-3',
        number: '3',
        type: 'classic',
        task: 'Forklar forskjellen mellom genredigering og tradisjonell genmodifisering (GMO). Hvorfor mener noen at genredigerte organismer bør reguleres annerledes enn GMO?',
        solution: 'Ved tradisjonell genmodifisering settes et gen fra en annen art inn i en organisme, slik at organismen inneholder fremmed DNA. Ved genredigering (f.eks. med CRISPR) endres organismens eget DNA uten å tilføre DNA fra andre arter. Endringen kan være å slå av et gen eller gjøre en liten endring. Noen mener genredigerte organismer bør reguleres mildere fordi endringene ligner på det som kan skje ved naturlige mutasjoner eller tradisjonell avl, og det ikke finnes fremmed DNA i organismen. Andre mener at alle genetiske endringer bør reguleres strengt, uavhengig av metode.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-9-2-exercise-7',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-2-exercise-7',
        number: '7',
        type: 'classic',
        task: 'Jennifer Doudna og Emmanuelle Charpentier fikk Nobelprisen i kjemi i 2020 for utviklingen av CRISPR-Cas9. Forklar opprinnelsen til CRISPR-systemet i naturen, og beskriv hvordan forskere har tilpasset det til bruk som genredigeringsverktøy.',
        solution: 'CRISPR-systemet ble opprinnelig oppdaget som et immunforsvar i bakterier. Når en bakterie overlever en virusinfeksjon, lagrer den korte DNA-sekvenser fra viruset mellom gjentatte sekvenser (CRISPR-sekvensene) i sitt eget genom. Ved en ny infeksjon lager bakterien RNA-kopier av disse lagrede sekvensene, som leder Cas-proteiner til å gjenkjenne og kutte det invaderende virus-DNA. Forskere har tilpasset dette systemet ved å designe syntetiske guide-RNA som matcher en hvilken som helst ønsket DNA-sekvens, ikke bare virussekvenser. Sammen med Cas9-proteinet kan de dermed redigere DNA presist i alle typer celler og organismer, ikke bare i bakterier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Kilder ---
    {
      id: 'nat-vg1-9-2-kilder',
      type: 'text',
      content: `### Kilder og videre lesning

- Bioteknologirådet: «CRISPR» – bioteknologiradet.no/temaer/crispr
- Store norske leksikon: «CRISPR» – snl.no/CRISPR
- Nobelprize.org: «The Nobel Prize in Chemistry 2020» – nobelprize.org
- Doudna, J. A. & Sternberg, S. H.: *A Crack in Creation*, Houghton Mifflin Harcourt, 2017
- Nature Reviews Genetics: «CRISPR–Cas9 genome editing» – nature.com
- NDLA: «CRISPR – genredigering» – ndla.no`,
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_9_3: TextbookChapter = {
  id: 'nat-vg1-9-3',
  courseId: 'nat-vg1',
  chapterNumber: '9.3',
  title: 'Bioteknologi i medisin',
  description: 'Utforsk hvordan bioteknologi brukes til å utvikle medisiner, vaksiner og behandlinger.',
  estimatedMinutes: 50,
  competenceGoals: ['gi eksempler på bruk av bioteknologi og drøfte etiske spørsmål knyttet til bioteknologi'],
  content: [
    {
      id: 'nat-vg1-9-3-intro',
      type: 'text',
      content: `## Bioteknologi i medisin – fra laboratoriet til pasienten

Visste du at insulinet som millioner av diabetespasienter bruker hver dag, produseres av genmodifiserte bakterier? Eller at vaksinene som beskyttet verden mot COVID-19, ble laget ved hjelp av syntetisk mRNA? Medisinsk bioteknologi har revolusjonert helsevesenet og gir oss stadig nye muligheter til å behandle sykdommer som tidligere var uhelbredelige.

Fra rekombinante proteiner og mRNA-vaksiner til genterapi og stamceller – bioteknologien har gitt legene helt nye verktøy. Samtidig reiser de nye mulighetene viktige spørsmål om tilgang, kostnad og prioritering i helsevesenet.

I dette kapittelet skal du lære:
- Hva rekombinante proteiner er og hvordan de brukes som medisiner
- Hvordan mRNA-vaksiner virker og hvorfor de kunne utvikles så raskt
- Hva genterapi er og forskjellen mellom somatisk genterapi og kimbaneterapi
- Hvordan monoklonale antistoffer brukes i kreftbehandling
- Hva stamceller er og hvordan de kan brukes i medisin
- Hva persontilpasset medisin innebærer`,
    },
    {
      id: 'nat-vg1-9-3-text-1',
      type: 'text',
      content: `## Bioteknologi i medisinsk behandling

Medisinsk bioteknologi har forandret helsevesenet dramatisk. Fra produksjon av livsviktige medisiner til nye behandlingsformer mot kreft og arvelige sykdommer, bioteknologi er i dag sentral i moderne medisin.

**Hovedområder:**
- Produksjon av rekombinante proteiner (insulin, veksthormoner, blodkoagulasjonsfaktorer)
- Vaksiner (tradisjonelle og mRNA-baserte)
- Genterapi for arvelige sykdommer
- Monoklonale antistoffer mot kreft og autoimmune sykdommer
- Stamcelleforskning og regenerativ medisin
- Persontilpasset medisin basert på genetisk profil

Bioteknologi har gjort det mulig å behandle sykdommer som tidligere var uhelbredelige, og har gitt oss nye verktøy for å forstå sykdomsmekanismer på molekylært nivå.`,
    },
    {
      id: 'nat-vg1-9-3-def-1',
      type: 'definition',
      title: 'Rekombinante proteiner og mRNA-vaksiner',
      content: `**Rekombinante proteiner** er proteiner som produseres ved å sette et menneskelig gen inn i bakterier, gjærceller eller dyreceller.

**Eksempler:**
- **Insulin:** Produseres i *E. coli*-bakterier (fra 1982)
- **Veksthormon:** Produseres i bakterier (erstattet utvinning fra lik)
- **Koagulasjonsfaktorer:** For behandling av hemofili (blødersykdom)
- **Erytropoietin (EPO):** Stimulerer produksjonen av røde blodceller

**mRNA-vaksiner** er en ny type vaksine utviklet under COVID-19-pandemien:
- Inneholder mRNA som koder for et protein fra viruset (f.eks. piggproteinet til SARS-CoV-2)
- Kroppens celler leser mRNA-et og produserer virusproteinet
- Immunforsvaret gjenkjenner proteinet og lager antistoffer
- mRNA-et brytes raskt ned og endrer ikke DNA
- Kan utvikles raskt når virusets gensekvens er kjent
- Kan potensielt brukes mot kreft, influensa og andre sykdommer`,
    },
    // Oppgave om rekombinante proteiner – tester def-1
    {
      id: 'nat-vg1-9-3-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-3-exercise-1',
        number: '1',
        type: 'classic',
        task: 'Gi tre eksempler på rekombinante proteiner som brukes i medisin, og forklar hvordan de produseres.',
        solution: 'Tre eksempler er: 1) Insulin - genet for menneskelig insulin er satt inn i E. coli-bakterier som produserer insulinet. Brukes av diabetespasienter. 2) Veksthormon - produseres i bakterier og brukes til å behandle vekstforstyrrelser. 3) Koagulasjonsfaktorer - produseres i dyreceller og brukes til å behandle hemofili (blødersykdom). Produksjonen skjer ved at det menneskelige genet settes inn i en vertsorganisme (bakterie eller cellekultur) ved hjelp av rekombinant DNA-teknologi. Vertsorganismen leser genet og produserer det ønskede proteinet, som deretter renses og brukes som medisin.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-9-3-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-3-exercise-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er riktig om mRNA-vaksiner?',
        options: [
          { id: 'a', text: 'De inneholder levende, svekkede virus som gir immunitet', isCorrect: false },
          { id: 'b', text: 'De endrer mottakerens DNA permanent', isCorrect: false },
          { id: 'c', text: 'De inneholder mRNA som instruerer celler til å lage et virusprotein, slik at immunforsvaret lærer å gjenkjenne det', isCorrect: true },
          { id: 'd', text: 'De inneholder ferdiglagde antistoffer som bekjemper viruset direkte', isCorrect: false },
        ],
        solution: 'Riktig svar er c. mRNA-vaksiner inneholder syntetisk mRNA som koder for et protein fra viruset (for eksempel piggproteinet til SARS-CoV-2). Kroppens celler leser mRNA-et og produserer proteinet, som deretter gjenkjennes av immunforsvaret. mRNA-et brytes raskt ned og endrer ikke DNA (alternativ b er feil). Vaksinen inneholder ikke levende virus (alternativ a er feil) og ikke ferdige antistoffer (alternativ d er feil).',
      },
    },
    {
      id: 'nat-vg1-9-3-def-2',
      type: 'definition',
      title: 'Genterapi og monoklonale antistoffer',
      content: `**Genterapi** er behandling der man korrigerer eller erstatter defekte gener for å kurere sykdom.

**Somatisk genterapi:**
- Endrer gener i kroppsceller (ikke kjønnsceller)
- Endringene arves **ikke** til neste generasjon
- Brukes mot sykdommer som sigdcelleanemi, hemofili og visse former for blindhet
- En virusvektor brukes ofte til å frakte det friske genet inn i cellene

**Monoklonale antistoffer:**
- Antistoffer som er designet for å gjenkjenne ett spesifikt molekyl
- Produseres i laboratoriet fra identiske immunceller (kloner)
- Brukes i kreftbehandling: Binder seg til kreftceller og markerer dem for immunforsvaret
- Brukes mot autoimmune sykdommer som revmatoid artritt
- Eksempler: Herceptin (brystkreft), Keytruda (immunterapi)`,
    },
    // Oppgave om genterapi – tester def-2
    {
      id: 'nat-vg1-9-3-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-3-exercise-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hva somatisk genterapi er. Hvorfor er denne typen genterapi etisk enklere å forsvare enn kimbaneterapi?',
        solution: 'Somatisk genterapi er behandling der man korrigerer eller erstatter defekte gener i kroppsceller (ikke kjønnsceller). En virusvektor brukes ofte til å frakte det friske genet inn i pasientens celler. Endringene påvirker bare pasienten selv og arves ikke til neste generasjon. Dette gjør det etisk enklere å forsvare enn kimbaneterapi, der man endrer gener i kjønnsceller slik at endringene arves. Ved kimbaneterapi kan fremtidige generasjoner som ikke har samtykket bli påvirket, og eventuelle feil eller uventede konsekvenser vil også arves videre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-9-3-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-3-exercise-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Monoklonale antistoffer brukes i kreftbehandling. Hvordan virker de?',
        options: [
          { id: 'a', text: 'De dreper alle celler som deler seg raskt, inkludert friske celler', isCorrect: false },
          { id: 'b', text: 'De binder seg spesifikt til kreftceller og markerer dem for immunforsvaret', isCorrect: true },
          { id: 'c', text: 'De reparerer mutasjonene i kreftcellenes DNA slik at de blir normale igjen', isCorrect: false },
          { id: 'd', text: 'De hindrer alle celler i kroppen fra å dele seg', isCorrect: false },
        ],
        solution: 'Riktig svar er b. Monoklonale antistoffer er designet for å gjenkjenne ett spesifikt molekyl som finnes på overflaten av kreftceller. Når antistoffet binder seg til kreftcellen, markerer det cellen slik at immunforsvaret kan oppdage og angripe den. Dette er en mer målrettet behandling enn tradisjonell cellegift (alternativ a), som dreper alle celler som deler seg raskt.',
      },
    },
    {
      id: 'nat-vg1-9-3-def-3',
      type: 'definition',
      title: 'Stamceller og persontilpasset medisin',
      content: `**Stamceller** er celler som kan utvikle seg til mange ulike celletyper. De har potensial til å reparere skadet vev.

**Tre typer stamceller:**
1. **Embryonale stamceller:** Fra tidlige embryoer (blastocyststadiet). Kan bli alle celletyper (pluripotente).
2. **Adulte stamceller:** Finnes i voksne kropper (f.eks. benmarg). Kan bli noen celletyper.
3. **Induserte pluripotente stamceller (iPSC):** Vanlige kroppsceller som er omprogrammert til å oppføre seg som embryonale stamceller. Oppdaget av Shinya Yamanaka (Nobelpris 2012).

**Persontilpasset medisin (farmakogenomikk):**
- Bruk av genetisk informasjon til å tilpasse behandling til den enkelte pasient
- Gentesting avslører hvilke medisiner som virker best og hvilke som kan gi bivirkninger
- Kreftbehandling kan tilpasses basert på mutasjoner i svulsten
- Fostersdiagnostikk: Blodprøve fra mor kan avdekke kromosomfeil hos fosteret (NIPT-test)`,
    },
    // Oppgave om stamceller – tester def-3
    {
      id: 'nat-vg1-9-3-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-3-exercise-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom embryonale stamceller, adulte stamceller og induserte pluripotente stamceller (iPSC). Hvilke fordeler har iPSC sammenlignet med embryonale stamceller?',
        solution: 'Embryonale stamceller hentes fra tidlige embryoer og kan bli alle celletyper i kroppen (pluripotente). Adulte stamceller finnes i voksne kropper, for eksempel i benmarg, men kan bare bli noen få celletyper. Induserte pluripotente stamceller (iPSC) er vanlige kroppsceller som er omprogrammert til å oppføre seg som embryonale stamceller. Fordelene med iPSC er: 1) Man slipper å bruke embryoer, noe som unngår de etiske problemene knyttet til ødeleggelse av embryoer. 2) iPSC kan lages fra pasientens egne celler, slik at man unngår avstøtningsreaksjoner ved transplantasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-9-3-example-1',
      type: 'example',
      title: 'Eksempel: mRNA-vaksiner mot COVID-19',
      problem: 'Forklar hvordan mRNA-vaksinene mot COVID-19 virker, og hvorfor de kunne utvikles så raskt.',
      solution: `**Virkemåte:**
1. Vaksinen inneholder syntetisk mRNA som koder for piggproteinet til SARS-CoV-2
2. mRNA-et pakkes inn i små fettdråper (lipidnanopartikler) som beskytter det
3. Etter injeksjon tar kroppens celler opp lipidnanopartiklene
4. Cellene leser mRNA-et og produserer piggproteinet
5. Piggproteinet vises på cellens overflate
6. Immunforsvaret gjenkjenner piggproteinet som fremmed og lager antistoffer
7. Ved senere infeksjon husker immunforsvaret piggproteinet og reagerer raskt
8. mRNA-et brytes ned av kroppen i løpet av timer til dager

**Hvorfor raskt utviklet?**
- Gensekvensen til viruset ble delt internasjonalt i januar 2020
- mRNA-vaksiner krever ikke dyrking av virus - kun gensekvensen
- Produksjonsprosessen er raskere enn for tradisjonelle vaksiner
- Kliniske studier ble gjennomført parallelt med produksjonsoppstart
- Resultatet: Vaksiner ble godkjent under ett år etter pandemien startet`,
    },
    // --- Oppsummering ---
    {
      id: 'nat-vg1-9-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Rekombinante proteiner**: Medisiner som insulin, veksthormon og koagulasjonsfaktorer kan produseres av genmodifiserte bakterier eller celler.
- **mRNA-vaksiner**: En ny vaksineteknologi der syntetisk mRNA instruerer kroppens celler til å produsere et virusprotein, slik at immunforsvaret lærer å gjenkjenne viruset.
- **Genterapi**: Behandling der defekte gener korrigeres eller erstattes – somatisk genterapi påvirker bare pasienten selv.
- **Monoklonale antistoffer**: Spesialtilpassede antistoffer som brukes i kreft- og autoimmunbehandling.
- **Stamceller**: Celler med evne til å bli ulike celletyper – embryonale, adulte og induserte pluripotente stamceller (iPSC).
- **Persontilpasset medisin**: Bruk av genetisk informasjon til å skreddersy behandling for den enkelte pasient.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Rekombinante proteiner | Proteiner produsert av genmodifiserte organismer |
| mRNA-vaksine | Vaksine basert på syntetisk mRNA som koder for et virusprotein |
| Genterapi | Behandling der defekte gener korrigeres eller erstattes |
| Somatisk genterapi | Genterapi i kroppsceller – arves ikke |
| Monoklonale antistoffer | Laboratorieproduserte antistoffer rettet mot ett spesifikt molekyl |
| Stamceller | Celler som kan utvikle seg til mange ulike celletyper |
| iPSC | Omprogrammerte kroppsceller som ligner embryonale stamceller |
| Persontilpasset medisin | Behandling tilpasset pasientens genetiske profil |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-9-3-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-3-exercise-3',
        number: '3',
        type: 'classic',
        task: 'Hva er persontilpasset medisin? Forklar hvordan genetisk informasjon kan brukes til å velge riktig behandling for en pasient.',
        solution: 'Persontilpasset medisin (farmakogenomikk) er å bruke informasjon om en pasients gener til å velge den mest effektive behandlingen med færrest bivirkninger. For eksempel kan gentesting avsløre om en pasient har en genvariant som gjør at et bestemt legemiddel brytes ned for raskt eller for sakte i kroppen. I kreftbehandling kan man analysere mutasjonene i svulsten og velge medisiner som er rettet mot akkurat disse mutasjonene. Et eksempel er brystkreftmedisinen Herceptin, som bare virker på svulster med en bestemt genforandring (HER2-positiv). Dette sparer pasienten for unødvendige bivirkninger og gir bedre behandlingsresultater.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-9-3-exercise-7',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-3-exercise-7',
        number: '7',
        type: 'multiple-choice',
        task: 'Hvilken type stamceller unngår de etiske problemene knyttet til bruk av embryoer?',
        options: [
          { id: 'a', text: 'Embryonale stamceller fra blastocyster', isCorrect: false },
          { id: 'b', text: 'Adulte stamceller fra benmarg', isCorrect: false },
          { id: 'c', text: 'Induserte pluripotente stamceller (iPSC)', isCorrect: true },
          { id: 'd', text: 'Stamceller fra navlestrengsblod', isCorrect: false },
        ],
        solution: 'Riktig svar er c. Induserte pluripotente stamceller (iPSC) lages ved å omprogrammere vanlige kroppsceller til å oppføre seg som embryonale stamceller. Siden man bruker pasientens egne celler og ikke trenger å ødelegge embryoer, unngår man de etiske problemene knyttet til embryonale stamceller. iPSC ble oppdaget av Shinya Yamanaka, som fikk Nobelprisen i 2012 for dette.',
      },
    },
    {
      id: 'nat-vg1-9-3-exercise-8',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-3-exercise-8',
        number: '8',
        type: 'classic',
        task: 'Forklar hvordan persontilpasset medisin kan forbedre kreftbehandling sammenlignet med tradisjonell behandling.',
        solution: 'Ved tradisjonell kreftbehandling får alle pasienter med samme krefttype ofte den samme behandlingen. Med persontilpasset medisin analyseres mutasjonene i den enkelte pasientens svulst ved hjelp av gensekvensering. Basert på denne analysen kan legen velge medisiner som er rettet mot akkurat de mutasjonene som driver kreften. For eksempel virker brystkreftmedisinen Herceptin bare på svulster som er HER2-positive. Pasienter med andre genforandringer trenger andre medisiner. Dette gir bedre behandlingsresultater og færre unødvendige bivirkninger, fordi pasienten får den behandlingen som faktisk passer for deres spesifikke krefttype.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Kilder ---
    {
      id: 'nat-vg1-9-3-kilder',
      type: 'text',
      content: `### Kilder og videre lesning

- Folkehelseinstituttet (FHI): «mRNA-vaksiner» – fhi.no
- Bioteknologirådet: «Genterapi» – bioteknologiradet.no/temaer/genterapi
- Store norske leksikon: «Stamceller» – snl.no/stamcelle
- Store norske leksikon: «Monoklonale antistoffer» – snl.no/monoklonale_antistoffer
- Kreftforeningen: «Immunterapi» – kreftforeningen.no
- NDLA: «Bioteknologi i medisin» – ndla.no
- Nature Medicine: «The promise and challenge of therapeutic genome editing» – nature.com`,
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_9_4: TextbookChapter = {
  id: 'nat-vg1-9-4',
  courseId: 'nat-vg1',
  chapterNumber: '9.4',
  title: 'Bioteknologi i landbruk og industri',
  description: 'Lær om hvordan bioteknologi brukes til å forbedre matproduksjon og utvikle industrielle prosesser.',
  estimatedMinutes: 50,
  competenceGoals: ['gi eksempler på bruk av bioteknologi og drøfte etiske spørsmål knyttet til bioteknologi'],
  content: [
    {
      id: 'nat-vg1-9-4-intro',
      type: 'text',
      content: `## Bioteknologi i landbruk og industri – fra åker til fabrikk

Neste gang du vasker klær, tenk på dette: Vaskemiddelet ditt inneholder sannsynligvis enzymer produsert av genmodifiserte bakterier. Og maten du spiser? I mange land dyrkes genmodifiserte avlinger på enorme arealer for å brødfø en voksende verdensbefolkning.

Bioteknologi er ikke bare noe som foregår i medisinske laboratorier. Den påvirker hverdagen vår gjennom maten vi spiser, klærne vi vasker og miljøet vi lever i. Noen av de mest spennende bruksområdene handler om å lage bionedbrytbar plast, rense forurenset jord og produsere drivstoff fra planter i stedet for olje.

I dette kapittelet skal du lære:
- Forskjellen mellom tradisjonell avl, genmodifisering og genredigering av planter
- Hva GM-planter er og eksempler som Bt-mais, gylden ris og tørketolerante planter
- Hvordan enzymer og mikroorganismer brukes i industriell produksjon
- Hva bioremediering er og hvordan det kan brukes til å rense opp forurensning
- Hvordan bioteknologi kan bidra til en mer bærekraftig fremtid`,
    },
    {
      id: 'nat-vg1-9-4-text-1',
      type: 'text',
      content: `## Bioteknologi utenfor laboratoriet

Bioteknologi brukes ikke bare i medisin, men også i landbruk, matproduksjon og industri. Fra genmodifiserte avlinger som kan fø flere mennesker, til enzymer i vaskemiddel og bakterier som rydder opp etter oljeutslipp - bioteknologi er overalt.

**Tradisjonell foredling vs. genmodifisering:**
Mennesker har i tusenvis av år krysset planter og avlet dyr for å få ønskede egenskaper. Forskjellen med moderne genteknologi er at endringene gjøres raskere og mer presist.

- **Tradisjonell avl:** Velge ut individer med ønskede egenskaper og krysse dem over mange generasjoner. Tar lang tid, og man får med seg mange uønskede gener.
- **Genmodifisering (GMO):** Sette inn et bestemt gen direkte, enten fra samme eller en annen art. Raskt og presist, men reiser etiske og regulatoriske spørsmål.
- **Genredigering (CRISPR):** Endre organismens eget DNA uten å tilføre fremmed DNA. Ligner mer på naturlige mutasjoner.`,
    },
    // Oppgave om tradisjonell avl vs. GMO vs. genredigering – tester text-1
    {
      id: 'nat-vg1-9-4-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-4-exercise-1',
        number: '1',
        type: 'classic',
        task: 'Sammenlign tradisjonell avl, genmodifisering og genredigering som metoder for å forbedre planter. Nevn en fordel og en ulempe ved hver metode.',
        solution: 'Tradisjonell avl: Man krysser planter med ønskede egenskaper over mange generasjoner. Fordel: Naturlig og akseptert prosess med lang erfaring. Ulempe: Tar lang tid og er upresis - mange uønskede gener følger med. Genmodifisering (GMO): Man setter inn et bestemt gen fra en annen organisme. Fordel: Raskt og kan tilføre egenskaper som ikke finnes i arten naturlig. Ulempe: Reiser etiske bekymringer og er strengt regulert. Genredigering (CRISPR): Man endrer organismens eget DNA uten å tilføre fremmed DNA. Fordel: Svært presis og ligner naturlige mutasjoner. Ulempe: Relativt ny teknologi med ukjente langsiktige effekter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-9-4-def-1',
      type: 'definition',
      title: 'Genmodifiserte avlinger (GM-planter)',
      content: `**GM-planter** er planter der arvematerialet er endret med genteknologi for å gi dem nye egenskaper.

**Viktige eksempler:**

**Bt-planter:**
- Inneholder et gen fra bakterien *Bacillus thuringiensis*
- Produserer et protein som er giftig for visse skadeinsekter
- Reduserer behovet for kjemiske sprøytemidler
- Eksempler: Bt-mais, Bt-bomull

**Herbicidtolerante planter:**
- Tåler sprøytemidler som dreper ugress (f.eks. Roundup Ready-soya)
- Bonden kan sprøyte mot ugress uten å skade avlingen
- Kontroversielt: Kan føre til økt bruk av sprøytemidler og resistente ugress

**Gylden ris (Golden Rice):**
- Ris som er genmodifisert til å produsere betakaroten (forstadie til vitamin A)
- Kan motvirke vitamin A-mangel i utviklingsland
- Ca. 250 000 barn blir blinde hvert år på grunn av vitamin A-mangel

**Tørketolerante planter:**
- Planter som er modifisert for å tåle tørke og ugunstige forhold
- Viktig for matsikkerhet i en tid med klimaendringer`,
    },
    // Oppgave om GM-planter – tester def-1
    {
      id: 'nat-vg1-9-4-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-4-exercise-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er gylden ris (Golden Rice), og hvorfor ble den utviklet?',
        options: [
          { id: 'a', text: 'En ristype som er avlet frem for å gi større avlinger i tørre områder', isCorrect: false },
          { id: 'b', text: 'En genmodifisert ris som produserer betakaroten for å motvirke vitamin A-mangel', isCorrect: true },
          { id: 'c', text: 'En naturlig risvariant med gul farge som tåler herbicider', isCorrect: false },
          { id: 'd', text: 'En ris som er genmodifisert til å produsere insektgift mot skadedyr', isCorrect: false },
        ],
        solution: 'Riktig svar er b. Gylden ris er genmodifisert til å produsere betakaroten, som er et forstadie til vitamin A. Den ble utviklet for å motvirke vitamin A-mangel, som er et alvorlig helseproblem i mange utviklingsland. Ca. 250 000 barn blir blinde hvert år på grunn av vitamin A-mangel. Alternativ d beskriver Bt-planter, ikke gylden ris.',
      },
    },
    {
      id: 'nat-vg1-9-4-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-4-exercise-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hvordan Bt-planter virker. Hvorfor er Bt-toksinet ufarlig for mennesker, men dødelig for visse insekter?',
        solution: 'Bt-planter inneholder et gen fra jordbakterien Bacillus thuringiensis som koder for Bt-toksinet (Cry-proteinet). Planten produserer dette toksinet i bladene og stengelen. Når et skadeinsekt spiser planten, aktiveres toksinet i insektets tarm. Toksinet lager hull i tarmveggen, og insektet dør. Bt-toksinet er ufarlig for mennesker fordi det krever basisk pH for å aktiveres. I insektenes tarm er pH svært basisk, mens menneskers magesyre er sterkt sur. I sur pH brytes toksinet ned uten å aktiveres. Dessuten mangler mennesker de spesifikke reseptorene i tarmveggen som toksinet binder seg til hos insekter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-9-4-def-2',
      type: 'definition',
      title: 'Industriell bioteknologi',
      content: `**Industriell bioteknologi** bruker enzymer og mikroorganismer til å produsere varer og materialer.

**Enzymer i hverdagen:**
- **Vaskemidler:** Proteaser bryter ned proteiner (blod, gress), lipaser bryter ned fett, amylaser bryter ned stivelse
- **Matproduksjon:** Enzymer brukes i osteproduksjon (rennet/chymosin), juice-klaring (pektinase) og bakervarer
- Enzymene produseres ofte med genmodifiserte mikroorganismer

**Biodrivstoff:**
- Bioetanol lages fra sukker eller stivelse ved gjæring med gjærceller
- Andre generasjon: Enzymer bryter ned cellulose fra planterester til sukker
- Alger kan genmodifiseres til å produsere olje for biodiesel

**Bionedbrytbar plast:**
- PLA (polymelkesyre) lages fra maisstivelse ved hjelp av bakterier
- PHA (polyhydroksyalkanoater) produseres direkte av bakterier
- Brytes ned i naturen, i motsetning til vanlig plast

**Fermentering:**
- Bruk av mikroorganismer til å omdanne råstoffer til nyttige produkter
- Eksempler: produksjon av antibiotika, vitaminer, aminosyrer og organiske syrer`,
    },
    // Oppgave om bionedbrytbar plast – tester def-2
    {
      id: 'nat-vg1-9-4-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-4-exercise-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hvordan kan bioteknologi bidra til å løse plastproblemet?',
        options: [
          { id: 'a', text: 'Ved å utvikle bakterier som spiser all plast i havet på kort tid', isCorrect: false },
          { id: 'b', text: 'Ved å lage bionedbrytbar plast fra fornybare ressurser ved hjelp av bakterier', isCorrect: true },
          { id: 'c', text: 'Ved å genmodifisere mennesker slik at plast ikke er skadelig for oss', isCorrect: false },
          { id: 'd', text: 'Ved å lage plast som er enda sterkere og varer for alltid', isCorrect: false },
        ],
        solution: 'Riktig svar er b. Bioteknologi kan bidra til å løse plastproblemet ved å lage bionedbrytbar plast. PLA (polymelkesyre) lages fra maisstivelse ved hjelp av bakterier, og PHA (polyhydroksyalkanoater) produseres direkte av bakterier. Disse plastypene brytes ned i naturen, i motsetning til vanlig plast som kan ta hundrevis av år å brytes ned.',
      },
    },
    // Oppgave om enzymer i industri – tester def-2
    {
      id: 'nat-vg1-9-4-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-4-exercise-2',
        number: '2',
        type: 'classic',
        task: 'Gi tre eksempler på hvordan enzymer fra genmodifiserte organismer brukes i industri eller hverdagen.',
        solution: '1) Proteaser i vaskemidler: Enzymer som bryter ned proteinflekker som blod og gress ved lave temperaturer, noe som sparer energi. 2) Chymosin i osteproduksjon: Enzymet som får melk til å koagulere, produsert av genmodifiserte gjærceller i stedet for å utvinnes fra kalvemager. 3) Amylaser i brødbaking: Enzymer som bryter ned stivelse og forbedrer brødets konsistens og holdbarhet. Alle disse enzymene produseres i stor skala av genmodifiserte mikroorganismer som bakterier eller gjærceller.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-9-4-def-3',
      type: 'definition',
      title: 'Bioremediering',
      content: `**Bioremediering** er bruk av levende organismer til å rense opp forurensning i miljøet.

**Oljenedbrytende bakterier:**
- Noen bakterier kan bruke hydrokarboner i olje som energikilde
- Brukes etter oljeutslipp for å bryte ned olje i havet og på land
- Kan forsterkes ved å tilføre næringsstoffer (nitrogen, fosfor) som stimulerer bakterievekst
- Under Deepwater Horizon-ulykken i 2010 spilte naturlige oljeetende bakterier en viktig rolle

**Andre bruksområder:**
- Tungmetaller: Noen planter og bakterier kan ta opp og konsentrere tungmetaller fra forurenset jord
- Pesticider: Mikroorganismer kan bryte ned plantevernmidler
- Kloakkbehandling: Bakterier bryter ned organisk materiale i avløpsvann

**Fordeler med bioremediering:**
- Miljøvennlig alternativ til kjemisk opprensing
- Kan brukes der andre metoder er for kostbare
- Bryter ned forurensning til ufarlige stoffer`,
    },
    {
      id: 'nat-vg1-9-4-example-1',
      type: 'example',
      title: 'Eksempel: Bt-mais - fra bakterie til avling',
      problem: 'Forklar hvordan Bt-mais er laget og hvorfor den er nyttig for bønder.',
      solution: `**Hva er Bt-mais?**
Bt-mais er en genmodifisert maistype som inneholder et gen fra jordbakterien *Bacillus thuringiensis*.

**Hvordan den er laget:**
1. Genet for Bt-toksin (Cry-proteinet) isoleres fra *B. thuringiensis*
2. Genet settes inn i maiscellenes DNA ved hjelp av en genkanon eller *Agrobacterium*-vektor
3. De transformerte cellene dyrkes opp til hele planter
4. Plantene testes og velges ut over flere generasjoner

**Hvordan den virker:**
- Maisplanten produserer Bt-toksinet i bladene og stengelen
- Når et skadeinsekt (f.eks. maisboreren) spiser planten, aktiveres toksinet i insektets tarm
- Toksinet lager hull i tarmveggen, og insektet dør
- Toksinet er ufarlig for mennesker, fugler og de fleste andre dyr fordi det krever basisk pH for å aktiveres

**Fordeler:**
- Reduserer bruk av kjemiske insektmidler med opptil 80 %
- Gir høyere avlinger på grunn av mindre skadedyrangrep
- Mindre eksponering av bønder for farlige sprøytemidler`,
    },
    // --- Oppsummering ---
    {
      id: 'nat-vg1-9-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Tradisjonell foredling vs. genmodifisering vs. genredigering**: Tre ulike tilnærminger for å forbedre organismer, med ulik grad av presisjon, tidsbruk og regulering.
- **GM-planter**: Genmodifiserte planter som Bt-mais, herbicidtolerante planter, gylden ris og tørketolerante sorter bidrar til økt matproduksjon og ernæring.
- **Industriell bioteknologi**: Enzymer og mikroorganismer brukes til å produsere alt fra vaskemidler og ost til biodrivstoff og bionedbrytbar plast.
- **Bioremediering**: Bruk av levende organismer til å rense opp forurensning, for eksempel oljenedbrytende bakterier etter oljeutslipp.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| GM-plante | Plante der arvematerialet er endret med genteknologi |
| Bt-plante | GM-plante med gen fra Bacillus thuringiensis som gir insektresistens |
| Gylden ris | GM-ris som produserer betakaroten (vitamin A-forstadie) |
| Industriell bioteknologi | Bruk av enzymer og mikroorganismer i industriell produksjon |
| Bioremediering | Bruk av levende organismer til å rense opp forurensning |
| Fermentering | Mikroorganismer omdanner råstoffer til nyttige produkter |
| Bionedbrytbar plast | Plast produsert av mikroorganismer som brytes ned i naturen |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-9-4-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-4-exercise-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hva bioremediering er, og beskriv hvordan bakterier kan brukes til å rense opp etter et oljeutslipp.',
        solution: 'Bioremediering er bruk av levende organismer til å rydde opp forurensning i miljøet. Ved oljeutslipp brukes oljenedbrytende bakterier som kan bruke hydrokarbonene i oljen som energikilde. Bakteriene bryter ned oljen til ufarlige stoffer som karbondioksid og vann. For å stimulere denne prosessen kan man tilføre næringsstoffer som nitrogen og fosfor, slik at bakteriepopulasjonen vokser raskere. Bioremediering er et miljøvennlig alternativ til kjemisk opprensing fordi den bruker naturlige prosesser og ikke tilfører nye kjemikalier til miljøet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-9-4-exercise-7',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-4-exercise-7',
        number: '7',
        type: 'classic',
        task: 'Diskuter fordeler og ulemper ved bruk av herbicidtolerante GM-planter (for eksempel Roundup Ready-soya). Vurder konsekvenser for bonden, miljøet og forbrukeren.',
        solution: 'Fordeler for bonden: Enklere ugressbekjempelse – kan sprøyte hele åkeren med ett herbicid uten å skade avlingen, noe som sparer tid og arbeid. Kan gi høyere avlinger. Fordeler for miljøet: Kan i noen tilfeller redusere totalt herbicidforbruk. Ulemper for miljøet: Kan føre til økt bruk av ett enkelt herbicid (glyfosat), noe som kan selektere for resistente ugress (superugress). Herbicidresistens kan overføres til ville planter gjennom pollinering. Ulemper for bonden: Avhengighet av ett selskap som selger både frø og herbicid, høyere kostnader. For forbrukeren: Bekymring for herbicidrester i maten, selv om godkjente GM-planter er vurdert som trygge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-9-4-exercise-8',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-4-exercise-8',
        number: '8',
        type: 'multiple-choice',
        task: 'Hva brukes bioremediering til?',
        options: [
          { id: 'a', text: 'Produksjon av biodrivstoff fra alger', isCorrect: false },
          { id: 'b', text: 'Fremstilling av enzymer til vaskemidler', isCorrect: false },
          { id: 'c', text: 'Opprensing av forurensning i miljøet ved hjelp av levende organismer', isCorrect: true },
          { id: 'd', text: 'Genmodifisering av planter for å tåle tørke', isCorrect: false },
        ],
        solution: 'Riktig svar er c. Bioremediering er bruk av levende organismer, som bakterier og planter, til å rense opp forurensning i miljøet. Eksempler inkluderer oljenedbrytende bakterier som bryter ned oljesøl, planter som tar opp tungmetaller fra forurenset jord, og mikroorganismer som bryter ned pesticider. Det er et miljøvennlig alternativ til kjemisk opprensing.',
      },
    },
    // --- Kilder ---
    {
      id: 'nat-vg1-9-4-kilder',
      type: 'text',
      content: `### Kilder og videre lesning

- Bioteknologirådet: «Genmodifisert mat» – bioteknologiradet.no/temaer/genmodifisert-mat
- Store norske leksikon: «Genmodifiserte organismer» – snl.no/genmodifiserte_organismer
- Mattilsynet: «Genmodifisert mat og fôr (GMO)» – mattilsynet.no
- Golden Rice Project – goldenrice.org
- Miljødirektoratet: «Genmodifiserte organismer» – miljodirektoratet.no
- NDLA: «Bioteknologi i landbruk og industri» – ndla.no
- Science: «Biodegradation of oil spills» – science.org`,
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_9_5: TextbookChapter = {
  id: 'nat-vg1-9-5',
  courseId: 'nat-vg1',
  chapterNumber: '9.5',
  title: 'Etiske spørsmål i bioteknologi',
  description: 'Drøft etiske dilemmaer knyttet til bruk av bioteknologi i medisin, landbruk og forskning.',
  estimatedMinutes: 50,
  competenceGoals: ['gi eksempler på bruk av bioteknologi og drøfte etiske spørsmål knyttet til bioteknologi'],
  content: [
    {
      id: 'nat-vg1-9-5-intro',
      type: 'text',
      content: `## Etiske spørsmål i bioteknologi – makt, ansvar og fremtiden

I 2018 sjokkerte den kinesiske forskeren He Jiankui verden da han annonserte at han hadde redigert genene til to tvillingjenter. Forskersamfunnet reagerte med fordømmelse, og He ble dømt til fengsel. Men hendelsen tvang oss alle til å stille et grunnleggende spørsmål: Bare fordi vi *kan* endre genene våre, betyr det at vi *bør* gjøre det?

Bioteknologi gir oss muligheter som var utenkelige for bare noen tiår siden. Vi kan kurere arvelige sykdommer, lage mat som redder millioner fra sult, og rense opp forurensning med levende organismer. Men teknologien reiser også vanskelige spørsmål om rettferdighet, sikkerhet og hva det vil si å være menneske.

I dette kapittelet skal du lære:
- Hvilke fire etiske prinsipper som brukes i bioetiske vurderinger
- Hvordan føre-var-prinsippet brukes i GMO-debatten
- Hva som skiller somatisk genterapi fra kimbaneterapi – og hvorfor det er etisk viktig
- Hva debatten om designer-babyer handler om
- Hvordan den norske bioteknologiloven regulerer bioteknologi
- Å drøfte etiske dilemmaer ved hjelp av argumenter og prinsipper`,
    },
    {
      id: 'nat-vg1-9-5-text-1',
      type: 'text',
      content: `## Etikk og bioteknologi

Bioteknologi gir oss enorme muligheter, men reiser også vanskelige spørsmål. Hvor langt bør vi gå? Hvem bestemmer? Og hva er konsekvensene for fremtidige generasjoner?

Etikk handler om å reflektere over hva som er rett og galt, og å begrunne valgene vi tar. Innen bioteknologi er det sjelden enkle svar - vi må veie ulike hensyn mot hverandre.

**Hvorfor er etikk viktig i bioteknologi?**
- Teknologien utvikles raskere enn lovverket
- Endringer kan være irreversible (spesielt ved kimbaneterapi og gendrivere)
- Konsekvensene kan ramme fremtidige generasjoner
- Fordelingen av fordeler og risikoer er ujevn
- Det finnes genuint ulike syn basert på verdier, kultur og religion`,
    },
    {
      id: 'nat-vg1-9-5-def-1',
      type: 'definition',
      title: 'Etiske prinsipper',
      content: `Fire grunnleggende etiske prinsipper brukes ofte i bioetiske vurderinger:

**1. Autonomi (selvbestemmelse):**
- Rett til å ta egne valg om egen kropp og helse
- Krav om informert samtykke
- Rett til å vite - og til å ikke vite - om genetisk informasjon

**2. Ikke skade (non-maleficence):**
- Plikt til å unngå å påføre skade
- Forsiktighet ved ny teknologi med ukjente konsekvenser
- Inkluderer skade på natur og økosystemer

**3. Gjøre godt (beneficence):**
- Plikt til å handle til det beste for andre
- Bruke teknologien til å lindre lidelse og forbedre liv
- Vurdere hvem som har nytte av teknologien

**4. Rettferdighet:**
- Lik tilgang til behandling og teknologi
- Rettferdig fordeling av fordeler og byrder
- Globalt perspektiv: Rike vs. fattige land`,
    },
    // Oppgave om de fire etiske prinsippene – tester def-1
    {
      id: 'nat-vg1-9-5-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-5-exercise-1',
        number: '1',
        type: 'classic',
        task: 'Gjør rede for de fire etiske prinsippene (autonomi, ikke skade, gjøre godt, rettferdighet) og gi et eksempel på hvordan hvert prinsipp er relevant i bioteknologi.',
        solution: '1) Autonomi (selvbestemmelse): Rett til å ta egne valg. Eksempel: En person bør selv bestemme om de vil ta en gentest som kan avsløre risiko for arvelige sykdommer. 2) Ikke skade: Plikt til å unngå å påføre skade. Eksempel: Man bør være forsiktig med å slippe genmodifiserte organismer ut i naturen fordi det kan ha uforutsette konsekvenser for økosystemer. 3) Gjøre godt: Handle til det beste for andre. Eksempel: Utvikling av gylden ris for å forebygge vitamin A-mangel i utviklingsland. 4) Rettferdighet: Lik tilgang og rettferdig fordeling. Eksempel: Dyre genterapier bør gjøres tilgjengelige for alle, ikke bare de rike.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-9-5-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-5-exercise-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilket etisk prinsipp handler om at alle skal ha lik tilgang til behandling og teknologi?',
        options: [
          { id: 'a', text: 'Autonomi', isCorrect: false },
          { id: 'b', text: 'Ikke skade', isCorrect: false },
          { id: 'c', text: 'Gjøre godt', isCorrect: false },
          { id: 'd', text: 'Rettferdighet', isCorrect: true },
        ],
        solution: 'Riktig svar er d. Rettferdighetsprinsippet handler om lik tilgang til behandling og teknologi, rettferdig fordeling av fordeler og byrder, og et globalt perspektiv der man vurderer forskjeller mellom rike og fattige land. Autonomi handler om selvbestemmelse, ikke skade handler om å unngå å påføre skade, og gjøre godt handler om å handle til det beste for andre.',
      },
    },
    {
      id: 'nat-vg1-9-5-def-2',
      type: 'definition',
      title: 'GMO-etikk og føre-var-prinsippet',
      content: `**Etiske spørsmål ved GMO:**

**Argumenter for GMO:**
- Kan bidra til å løse matvarekriser og ernæringsproblemer
- Reduserer bruk av sprøytemidler og miljøbelastning
- Kan gi mer næringsrik mat (f.eks. gylden ris)
- Vitenskapelig konsensus: Godkjente GMO-er er trygge å spise

**Argumenter mot GMO:**
- Langsiktige helseeffekter er ikke fullstendig kjent
- Kan true biologisk mangfold (spredning av transgener)
- Skaper avhengighet av store selskaper (patentering av frø)
- Kulturelle og religiøse innvendinger: Er det rett å endre naturen?

**Føre-var-prinsippet:**
- Når det er vitenskapelig usikkerhet om mulige skadevirkninger, bør man være forsiktig
- Bevisbyrden ligger hos den som vil innføre teknologien
- Brukes som grunnlag for EUs strenge GMO-regulering
- Kritikere mener det kan hindre viktig teknologisk utvikling

**Norsk regulering:**
- Genteknologiloven krever vurdering av: helse, miljø, bærekraft og samfunnsnytte
- Strengere enn de fleste andre land
- Ingen GM-planter er godkjent for dyrking i Norge`,
    },
    // Oppgave om føre-var-prinsippet – tester def-2
    {
      id: 'nat-vg1-9-5-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-5-exercise-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva føre-var-prinsippet innebærer, og diskuter om det bør brukes strengt på genmodifiserte matvarer. Gi argumenter for og mot.',
        solution: 'Føre-var-prinsippet sier at når det er vitenskapelig usikkerhet om mulige skadevirkninger, bør man være forsiktig og ikke innføre teknologien før den er bevist trygg. For streng bruk: Vi vet ikke nok om langsiktige effekter av GMO på helse og miljø, genspredning til ville arter kan være irreversibelt, og det er bedre å være forsiktig enn å oppdage skader for sent. Mot streng bruk: Vitenskapelig konsensus sier at godkjente GMO-er er trygge å spise, for streng bruk av prinsippet kan hindre utvikling av avlinger som kan redde liv (f.eks. gylden ris), og all matproduksjon innebærer en viss risiko.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-9-5-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-5-exercise-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Den norske genteknologiloven krever at genmodifiserte organismer vurderes etter flere kriterier. Hvilket av følgende er IKKE et av disse kriteriene?',
        options: [
          { id: 'a', text: 'Helse og miljø', isCorrect: false },
          { id: 'b', text: 'Bærekraft og samfunnsnytte', isCorrect: false },
          { id: 'c', text: 'Økonomisk fortjeneste for produsenten', isCorrect: true },
          { id: 'd', text: 'Miljøpåvirkning', isCorrect: false },
        ],
        solution: 'Riktig svar er c. Den norske genteknologiloven krever at genmodifiserte organismer vurderes ut fra helse, miljø, bærekraft og samfunnsnytte. Økonomisk fortjeneste for produsenten er ikke et kriterium i loven. Norge har en av verdens strengeste GMO-lovgivninger, og ingen GM-planter er godkjent for dyrking i Norge.',
      },
    },
    {
      id: 'nat-vg1-9-5-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-5-exercise-6',
        number: '6',
        type: 'classic',
        task: 'Gylden ris kan redde hundretusenvis av barn fra blindhet, men motstandere av GMO er skeptiske til å godkjenne den. Drøft dette dilemmaet ved å bruke minst to av de fire etiske prinsippene.',
        solution: 'Gjøre godt: Gylden ris kan forebygge vitamin A-mangel og hindre blindhet hos opptil 250 000 barn årlig. Å holde tilbake en teknologi som kan redde liv, kan stride mot plikten til å gjøre godt. Ikke skade: Motstandere mener vi ikke vet nok om langsiktige helseeffekter av GMO og at vi bør bruke føre-var-prinsippet for å unngå skade. Rettferdighet: Er det rettferdig at barn i fattige land lider fordi rike land er skeptiske til GMO? Samtidig: Er det rettferdig å bruke fattige som «testkaniner» for ny teknologi? Autonomi: Bønder og forbrukere bør ha rett til å velge om de vil dyrke og spise GMO. Dette er et genuint dilemma der ulike etiske prinsipper kan trekke i ulike retninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-9-5-def-3',
      type: 'definition',
      title: 'Etikk rundt genterapi, designer-babyer og kloning',
      content: `**Somatisk genterapi vs. kimbaneterapi:**
- **Somatisk:** Endrer gener i kroppsceller. Påvirker kun pasienten. Akseptert av de fleste.
- **Kimbaneterapi:** Endrer gener som arves. Påvirker fremtidige generasjoner som ikke kan samtykke. Forbudt i de fleste land.

**Designer-babyer:**
- Å velge eller endre egenskaper hos barn (utseende, intelligens, sportsevne)
- Skiller seg fra medisinsk behandling: forbedring vs. kurering av sykdom
- Kan forsterke sosiale forskjeller: Bare de rike får \"perfekte\" barn?
- Reduserer menneskelig mangfold og definerer noen egenskaper som bedre enn andre

**CRISPR-babyer (He Jiankui, 2018):**
- Kinesisk forsker redigerte genene til tvillingjenter for å gjøre dem resistente mot HIV
- Handlet uten godkjenning og i strid med internasjonale retningslinjer
- Verdensomspennende fordømmelse fra forskersamfunnet
- He Jiankui ble dømt til tre års fengsel
- Hendelsen startet viktig debatt om regulering av genredigering

**Stamceller og kloning:**
- Bruk av embryonale stamceller krever ødeleggelse av embryoer
- Sentralt spørsmål: Når begynner menneskelivet?
- iPSC-teknologien kan delvis omgå denne problemstillingen
- Reproduktiv kloning (lage genetisk identiske mennesker) er forbudt globalt
- Terapeutisk kloning for å lage stamceller er kontroversielt

**Patentering av liv:**
- Skal selskaper kunne patentere gener, organismer eller genteknologiske metoder?
- Kan hemme forskning og begrense tilgang til viktige behandlinger
- Balanse mellom å belønne innovasjon og sikre allmenn tilgang`,
    },
    // Oppgave om designer-babyer og kimbaneterapi – tester def-3
    {
      id: 'nat-vg1-9-5-exercise-7',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-5-exercise-7',
        number: '7',
        type: 'multiple-choice',
        task: 'Hva er den viktigste etiske forskjellen mellom somatisk genterapi og kimbaneterapi?',
        options: [
          { id: 'a', text: 'Somatisk genterapi er dyrere enn kimbaneterapi', isCorrect: false },
          { id: 'b', text: 'Kimbaneterapi endrer gener som arves til fremtidige generasjoner som ikke har samtykket', isCorrect: true },
          { id: 'c', text: 'Somatisk genterapi bruker CRISPR, mens kimbaneterapi bruker eldre metoder', isCorrect: false },
          { id: 'd', text: 'Kimbaneterapi kan bare brukes på planter, ikke mennesker', isCorrect: false },
        ],
        solution: 'Riktig svar er b. Den viktigste etiske forskjellen er at kimbaneterapi endrer gener i kjønnscellene, slik at endringene arves til alle fremtidige generasjoner. Disse menneskene har ikke kunnet samtykke til endringene. Ved somatisk genterapi endres bare genene i pasientens kroppsceller, og endringene arves ikke. Dette gjør somatisk genterapi etisk enklere å forsvare.',
      },
    },
    {
      id: 'nat-vg1-9-5-exercise-8',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-5-exercise-8',
        number: '8',
        type: 'classic',
        task: 'Diskuter begrepet «designer-babyer». Hva er forskjellen mellom å bruke genteknologi til å kurere en alvorlig sykdom hos et ufødt barn og å bruke den til å velge barnets øyefarge eller intelligens?',
        solution: 'Å bruke genteknologi til å kurere en alvorlig arvelig sykdom (for eksempel sigdcelleanemi eller cystisk fibrose) handler om å fjerne lidelse og gi barnet et friskere liv. De fleste vil si dette er etisk forsvarlig, fordi det er behandling av sykdom. Å velge egenskaper som øyefarge, intelligens eller sportsevne er derimot forbedring (enhancement) – ikke behandling. Dette er etisk problematisk av flere grunner: 1) Det kan forsterke sosiale forskjeller dersom bare rike familier har tilgang. 2) Det reduserer menneskelig mangfold ved å definere noen egenskaper som bedre enn andre. 3) Barnet kan ikke samtykke til valgene foreldrene gjør. 4) Grensen mellom behandling og forbedring er vanskelig å trekke. Hvem bestemmer hva som er en «sykdom» og hva som er «normal variasjon»?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-9-5-text-2',
      type: 'text',
      content: `## Bioteknologiloven i Norge

Norges lov om bioteknologi regulerer mange av disse områdene:
- **Fosterdiagnostikk:** Regler for genetisk testing av fostre
- **Assistert befruktning:** Regulerer prøverørsbehandling og eggdonasjon
- **Genterapi:** Kun somatisk genterapi er tillatt
- **Genetiske undersøkelser:** Forbud mot bruk av gentest i forsikring og arbeidsliv
- **Kloning:** Reproduktiv kloning er forbudt
- **Forskning på embryoer:** Strenge regler for forskning på befruktede egg

Loven revideres jevnlig for å holde tritt med den teknologiske utviklingen. I 2020 ble loven endret til å tillate blant annet eggdonasjon og tidlig ultralyd.

Det er viktig å delta i den demokratiske debatten om bioteknologi, fordi beslutningene som tas i dag, kan få store konsekvenser for fremtiden.`,
    },
    {
      id: 'nat-vg1-9-5-example-1',
      type: 'example',
      title: 'Eksempel: Etisk drøfting av genterapi mot sigdcelleanemi',
      problem: 'En ny CRISPR-basert genterapi kan kurere sigdcelleanemi ved å redigere pasientens egne stamceller. Drøft de etiske sidene ved denne behandlingen ved hjelp av de fire etiske prinsippene.',
      solution: `**Autonomi:**
Pasienten velger selv om de vil gjennomgå behandlingen etter å ha fått informasjon om fordeler og risikoer. Informert samtykke er ivaretatt. For barn må foresatte ta avgjørelsen.

**Ikke skade:**
Behandlingen innebærer risiko: cellegiftbehandling for å fjerne gamle stamceller, mulighet for off-target-effekter med CRISPR, og ukjente langsiktige konsekvenser. Disse risikoene må veies mot skaden av å leve med sykdommen.

**Gjøre godt:**
Sigdcelleanemi er en alvorlig sykdom som gir smertekriser, organskader og forkortet levetid. En kur kan dramatisk forbedre livskvaliteten. Behandlingen er somatisk, så endringene arves ikke.

**Rettferdighet:**
Behandlingen er svært kostbar. Hvem får tilgang? Sigdcelleanemi rammer særlig mennesker med afrikansk bakgrunn. Blir behandlingen tilgjengelig i landene der sykdommen er mest utbredt? Rettferdig fordeling av helseressurser er en sentral utfordring.

**Konklusjon:**
De fleste vil si at somatisk genterapi mot en alvorlig arvelig sykdom er etisk forsvarlig, forutsatt informert samtykke og akseptabel risiko. Den største utfordringen er rettferdig tilgang globalt.`,
    },
    // --- Oppsummering ---
    {
      id: 'nat-vg1-9-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Etikk i bioteknologi**: Bioteknologi reiser vanskelige spørsmål om hva som er rett og galt, fordi teknologien utvikles raskere enn lovverket og konsekvensene kan være irreversible.
- **Fire etiske prinsipper**: Autonomi (selvbestemmelse), ikke skade, gjøre godt og rettferdighet er grunnleggende prinsipper i bioetiske vurderinger.
- **GMO-etikk og føre-var-prinsippet**: Det finnes gode argumenter for og mot genmodifisert mat, og føre-var-prinsippet brukes for å håndtere vitenskapelig usikkerhet.
- **Genterapi og kimbaneterapi**: Somatisk genterapi er akseptert, mens kimbaneterapi som endrer arvematerialet er forbudt i de fleste land.
- **Designer-babyer og CRISPR-babyer**: He Jiankui-saken i 2018 viste farene ved uregulert bruk av genredigering på mennesker.
- **Bioteknologiloven**: Norsk lovgivning regulerer fosterdiagnostikk, genterapi, genetiske undersøkelser, kloning og forskning på embryoer.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Bioetikk | Etiske vurderinger knyttet til bioteknologi og medisin |
| Autonomi | Retten til selvbestemmelse og informert samtykke |
| Føre-var-prinsippet | Forsiktighet ved vitenskapelig usikkerhet om mulige skadevirkninger |
| Somatisk genterapi | Genterapi i kroppsceller – arves ikke til neste generasjon |
| Kimbaneterapi | Genterapi i kjønnsceller – arves til fremtidige generasjoner |
| Designer-baby | Å velge eller endre egenskaper hos ufødte barn |
| Genteknologiloven | Norsk lov som regulerer bruk av bioteknologi |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-9-5-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-9-5-exercise-3',
        number: '3',
        type: 'classic',
        task: 'He Jiankui redigerte genene til tvillingjenter i 2018 for å gjøre dem resistente mot HIV. Diskuter hvorfor dette ble fordømt av forskersamfunnet. Bruk de etiske prinsippene i svaret ditt.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke etiske prinsipper brøt He Jiankui?',
            solution: 'Autonomi: Barna kunne ikke samtykke, og foreldrene var sannsynligvis ikke tilstrekkelig informert om risikoene. Ikke skade: Kimbaneterapi med CRISPR var ikke tilstrekkelig testet, og off-target-effekter kan ramme barna og deres fremtidige avkom. Rettferdighet: Det fantes allerede effektive metoder for å forhindre HIV-smitte fra foreldre til barn.',
          },
          {
            label: 'b',
            task: 'Hvorfor er kimbaneterapi mer etisk problematisk enn somatisk genterapi?',
            solution: 'Kimbaneterapi endrer genene i kjønnscellene, slik at endringene arves av alle fremtidige generasjoner. Disse fremtidige menneskene kan ikke samtykke til endringene. Langsiktige konsekvenser er ukjente, og eventuelle feil vil også arves. Somatisk genterapi påvirker bare pasienten selv og arves ikke, noe som gjør den mindre risikabel og etisk enklere å forsvare.',
          },
        ],
        solution: 'He Jiankui brøt flere etiske prinsipper: Autonomi - barna og muligens foreldrene kunne ikke gi informert samtykke til en eksperimentell prosedyre. Ikke skade - kimbaneterapi med CRISPR var ikke tilstrekkelig testet, og risikoen for off-target-effekter var betydelig. Gjøre godt - det fantes allerede effektive måter å forhindre HIV-smitte. Rettferdighet - han satte seg over internasjonale retningslinjer som gjelder for alle forskere. Kimbaneterapi er mer etisk problematisk enn somatisk genterapi fordi endringene arves til fremtidige generasjoner som ikke kan samtykke, og eventuelle feil eller skader vil også arves.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Kilder ---
    {
      id: 'nat-vg1-9-5-kilder',
      type: 'text',
      content: `### Kilder og videre lesning

- Bioteknologirådet: «Etikk og bioteknologi» – bioteknologiradet.no
- Store norske leksikon: «Bioetikk» – snl.no/bioetikk
- Lovdata: «Lov om bioteknologi (bioteknologiloven)» – lovdata.no
- Bioteknologirådet: «Genteknologiloven» – bioteknologiradet.no/temaer/genteknologiloven
- Nature: «CRISPR-baby scientist sentenced to three years in prison» – nature.com
- Nuffield Council on Bioethics: «Genome editing: an ethical review» – nuffieldbioethics.org
- NDLA: «Etikk og bioteknologi» – ndla.no`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Export av alle kapitler i DEL 5
// ============================================================================

export const NAT_VG1_CHAPTERS_DEL5: TextbookChapter[] = [
  // Seksjon 9: Bioteknologi
  CHAPTER_NAT_VG1_9_1,
  CHAPTER_NAT_VG1_9_2,
  CHAPTER_NAT_VG1_9_3,
  CHAPTER_NAT_VG1_9_4,
  CHAPTER_NAT_VG1_9_5,
];
