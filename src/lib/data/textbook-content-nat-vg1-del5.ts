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
