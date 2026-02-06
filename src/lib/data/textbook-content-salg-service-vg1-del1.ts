/**
 * Salg, service og reiseliv VG1 - Del 1: Salgsprosessen
 * Kapittel 1.1-1.7
 *
 * Dekker LK20 kompetansemål:
 * - selge et produkt og gjøre rede for salgsprosessen
 * - kjenne til og ta i bruk gjeldende regelverk for markedsføring og salg
 * - vurdere sentrale konkurransevirkemidler i sammenheng med profilen og lønnsomheten til virksomheter
 * - reflektere over ulike former for relasjonsbygging og forklare betydningen av nettverk
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Introduksjon til salgsprosessen
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_1_1: TextbookChapter = {
  id: 'salg-service-vg1-1-1',
  courseId: 'salg-service-vg1',
  chapterNumber: '1.1',
  title: 'Introduksjon til salgsprosessen',
  description: 'En innføring i hva salgsprosessen innebærer og hvilke steg den består av. Du lærer om de ulike fasene fra behovsavdekking til avslutning og oppfølging.',
  estimatedMinutes: 35,
  competenceGoals: ['selge et produkt og gjøre rede for salgsprosessen'],
  content: [
    {
      id: 'salg-service-vg1-1-1-intro',
      type: 'text',
      content: `## Hva er salgsprosessen?

Salgsprosessen er hjørnestenen i all varehandel og servicenæring. Enten du jobber i en skobutikk, på et hotell eller i en nettbutikk, følger et godt salg en strukturert prosess. Å forstå og mestre de ulike fasene gjør deg til en profesjonell selger som både skaper verdi for kunden og øker salget for bedriften.

I dette kapittelet skal du lære:
- Hva salgsprosessen innebærer
- De fem hovedfasene i et salg
- Hvorfor struktur er viktig for å lykkes med salg
- Forskjellen mellom produktfokusert og kundefokusert salg`,
    },
    {
      id: 'salg-service-vg1-1-1-def-1',
      type: 'definition',
      title: 'Salgsprosessen',
      content: `**Salgsprosessen** er en strukturert fremgangsmåte for å møte kunder, kartlegge behov, presentere løsninger og avslutte salget. Den består av flere definerte faser som bygger på hverandre, fra første kontakt til avslutning og oppfølging.`,
    },
    {
      id: 'salg-service-vg1-1-1-text-1',
      type: 'text',
      content: `### De fem fasene i salgsprosessen

**1. Forberedelse og åpning**
Den første fasen handler om å være klar til å møte kunden. God forberedelse inkluderer:
- Produktkunnskap: Kjenn varene eller tjenestene du selger
- Kunnskapsoppdatering: Vær oppdatert på kampanjer og tilbud
- Mental forberedelse: Vær motivert og positiv
- Første inntrykk: Møt kunden med blikkontakt, smil og hilsen

**2. Behovsavdekking**
I denne fasen handler det om å forstå hva kunden egentlig trenger. Du bruker:
- Åpne spørsmål for å få kunden til å fortelle
- Aktiv lytting for å fange opp signaler
- Oppsummering for å sikre at du har forstått riktig

**3. Produktpresentasjon**
Når du kjenner kundens behov, presenterer du løsninger:
- Match produkter til kundens behov
- Fremhev fordeler, ikke bare egenskaper
- Bruk produktdemonstrasjoner der det er mulig
- Tilpass presentasjonen til kundens kunnskapsnivå`,
    },
    {
      id: 'salg-service-vg1-1-1-text-2',
      type: 'text',
      content: `**4. Innvendingsbehandling**
Kunder har ofte spørsmål eller innvendinger. Dette er naturlig og ofte et tegn på interesse:
- Lytt til innvendingen uten å avbryte
- Bekreft at du forstår kundens bekymring
- Gi relevante svar og argumenter
- Se på innvendinger som muligheter til å gi mer informasjon

**5. Avslutning og oppfølging**
Den siste fasen handler om å fullføre salget:
- Oppsummer fordelene kunden får
- Still avsluttende spørsmål
- Gjennomfør betalingen profesjonelt
- Takk for handelen og inviter tilbake`,
    },
    {
      id: 'salg-service-vg1-1-1-tip-1',
      type: 'tip',
      title: 'Kundefokus vs. produktfokus',
      content: `Moderne salg handler om å løse kundens problem, ikke bare selge et produkt. En produktfokusert selger sier: "Denne jakken er vanntett og har mange lommer." En kundefokusert selger sier: "Du nevnte at du skal på fjelltur i høstferien. Denne jakken holder deg tørr i regnvær, og lommene gjør at du har hendene fri til turstaver."`,
    },
    {
      id: 'salg-service-vg1-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Salgsprosessen i praksis',
      problem: 'En kunde kommer inn i en sportsbutikk og ser på løpesko.',
      solution: `**Fase 1 - Åpning:** "Hei! Ser du etter løpesko? Velkommen - gi beskjed hvis du trenger hjelp."

**Fase 2 - Behovsavdekking:** "Hva slags løping driver du med? Løper du på asfalt eller i skog? Hvor ofte løper du?"

**Fase 3 - Produktpresentasjon:** "Basert på det du forteller, vil jeg anbefale denne modellen. Den har god demping for asfalt og passer til løpere som trener 3-4 ganger i uken."

**Fase 4 - Innvendingsbehandling:** Kunde: "Den er litt dyr." Selger: "Jeg forstår. Denne skoen har imidlertid teknologi som gir bedre demping og lengre holdbarhet, så du slipper å kjøpe nye sko like ofte."

**Fase 5 - Avslutning:** "Skal jeg finne størrelsen din så du kan prøve? ... Flott, denne passer deg godt! Skal jeg pakke dem inn?"`,
    },
    {
      id: 'salg-service-vg1-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-1-ex-1',
        number: '1.1.1',
        type: 'multiple-choice',
        task: 'Hva er riktig rekkefølge på fasene i salgsprosessen?',
        options: [
          { id: 'a', text: 'Presentasjon, åpning, behovsavdekking, avslutning, innvending', isCorrect: false },
          { id: 'b', text: 'Åpning, behovsavdekking, presentasjon, innvendingsbehandling, avslutning', isCorrect: true },
          { id: 'c', text: 'Behovsavdekking, åpning, avslutning, presentasjon, innvending', isCorrect: false },
          { id: 'd', text: 'Innvendingsbehandling, presentasjon, åpning, behovsavdekking, avslutning', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Salgsprosessen starter med åpning (møte kunden), deretter behovsavdekking (forstå hva kunden trenger), produktpresentasjon, innvendingsbehandling og til slutt avslutning.',
      },
    },
    {
      id: 'salg-service-vg1-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-1-ex-2',
        number: '1.1.2',
        type: 'classic',
        task: 'Forklar forskjellen mellom produktfokusert og kundefokusert salg med et eksempel.',
        hints: ['Tenk på hva selgeren fokuserer på i samtalen', 'Hvordan tilpasser en kundefokusert selger budskapet?'],
        solution: 'Produktfokusert salg handler om å fortelle om produktets egenskaper ("Denne TV-en har 4K-oppløsning og 55 tommer skjerm"). Kundefokusert salg handler om å koble produktet til kundens behov ("Du nevnte at du liker å se fotball med familien. Denne TV-en gir deg et stort, skarpt bilde så alle kan se detaljene i kampen fra sofaen").',
      },
    },
    {
      id: 'salg-service-vg1-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-1-ex-3',
        number: '1.1.3',
        type: 'classic',
        task: 'Hvorfor er behovsavdekking så viktig i salgsprosessen?',
        subTasks: [
          {
            label: 'a',
            task: 'Gi minst tre grunner til at behovsavdekking er viktig.',
            solution: '1) Du kan tilby riktig produkt til kunden, 2) Du unngår å kaste bort tid på feil produkter, 3) Kunden føler seg hørt og forstått, 4) Du kan gi bedre rådgivning, 5) Det øker sjansen for mersalg',
          },
        ],
        solution: 'Behovsavdekking er viktig fordi det lar selgeren forstå hva kunden egentlig trenger, noe som gjør det mulig å presentere riktige produkter, bygge tillit og øke kundetilfredsheten.',
      },
    },
    {
      id: 'salg-service-vg1-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-1-ex-4',
        number: '1.1.4',
        type: 'classic',
        task: 'Tenk deg at du jobber i en elektronikkbutikk. En kunde kommer inn og ser på mobiltelefoner.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv en passende åpningsreplikk.',
            solution: 'Eksempel: "Hei! Velkommen til oss. Ser du etter ny mobiltelefon? Gi gjerne beskjed hvis du vil ha litt hjelp til å finne riktig modell."',
          },
          {
            label: 'b',
            task: 'Skriv tre spørsmål du kan bruke i behovsavdekkingen.',
            solution: '1) "Hva bruker du telefonen mest til?" 2) "Er det noen funksjoner som er spesielt viktige for deg, som kamera eller batteri?" 3) "Hva slags budsjett har du sett for deg?"',
          },
        ],
        solution: 'En god åpning er vennlig og ikke påtrengende. Behovsavdekkende spørsmål bør være åpne og gi deg informasjon om kundens bruksmønster, preferanser og budsjett.',
      },
    },
    {
      id: 'salg-service-vg1-1-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Salgsprosessen** er en strukturert fremgangsmåte med fem faser
- **De fem fasene** er: åpning, behovsavdekking, produktpresentasjon, innvendingsbehandling og avslutning
- **Kundefokusert salg** handler om å løse kundens problem, ikke bare selge produkter
- **Forberedelse** er viktig for å kunne gi god service

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Salgsprosessen | Strukturert fremgangsmåte for salg |
| Behovsavdekking | Kartlegging av kundens behov |
| Kundefokusert salg | Salg som tar utgangspunkt i kundens behov |
| Innvendingsbehandling | Håndtering av kundens spørsmål og bekymringer |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.2: Kommunikasjon i salg
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_1_2: TextbookChapter = {
  id: 'salg-service-vg1-1-2',
  courseId: 'salg-service-vg1',
  chapterNumber: '1.2',
  title: 'Kommunikasjon i salg',
  description: 'Hvordan du kommuniserer effektivt med kunder gjennom verbale og nonverbale teknikker. Du lærer om aktiv lytting, åpne spørsmål og tilpasning av kommunikasjonsstil.',
  estimatedMinutes: 40,
  competenceGoals: ['selge et produkt og gjøre rede for salgsprosessen'],
  content: [
    {
      id: 'salg-service-vg1-1-2-intro',
      type: 'text',
      content: `## Kommunikasjon - nøkkelen til godt salg

God kommunikasjon er kanskje den viktigste ferdigheten en selger kan ha. Det handler ikke bare om hva du sier, men også hvordan du sier det, og ikke minst - hvordan du lytter. I dette kapittelet lærer du teknikker som gjør deg til en bedre kommunikator i salgssituasjoner.

I dette kapittelet skal du lære:
- Forskjellen mellom verbal og nonverbal kommunikasjon
- Hva aktiv lytting innebærer
- Hvordan bruke åpne og lukkede spørsmål
- Tilpasning av kommunikasjonsstil til ulike kunder`,
    },
    {
      id: 'salg-service-vg1-1-2-def-1',
      type: 'definition',
      title: 'Verbal og nonverbal kommunikasjon',
      content: `**Verbal kommunikasjon** er det vi sier med ord - både muntlig og skriftlig. **Nonverbal kommunikasjon** er alt det andre: kroppsspråk, ansiktsuttrykk, stemmebruk, øyekontakt og fysisk avstand. Forskning viser at det nonverbale ofte har større påvirkning enn ordene alene.`,
    },
    {
      id: 'salg-service-vg1-1-2-text-1',
      type: 'text',
      content: `### Kroppsspråk i kundemøtet

Kroppsspråket ditt sender signaler til kunden før du har sagt et ord. Her er viktige elementer:

**Åpent kroppsspråk:**
- Vend kroppen mot kunden
- Hold armene ved siden eller foran deg, ikke i kors
- Smil naturlig
- Ha jevnlig, men ikke stirrende, øyekontakt

**Stemmeleie og tonalitet:**
- Snakk i et rolig, men engasjert tempo
- Varier tonen for å holde oppmerksomheten
- Unngå monoton eller for rask tale
- Tilpass volum til situasjonen

**Fysisk avstand:**
- Respekter kundens personlige rom
- Ca. 1-1,5 meter er vanlig i Norge
- Noen kulturer foretrekker kortere eller lengre avstand`,
    },
    {
      id: 'salg-service-vg1-1-2-def-2',
      type: 'definition',
      title: 'Aktiv lytting',
      content: `**Aktiv lytting** betyr å være fullt til stede i samtalen og vise at du hører og forstår det kunden sier. Det innebærer å gi respons gjennom nikk, bekreftende ord ("mm", "ja", "jeg forstår"), stille oppfølgingsspørsmål og oppsummere det kunden har sagt.`,
    },
    {
      id: 'salg-service-vg1-1-2-text-2',
      type: 'text',
      content: `### Aktiv lytting i praksis

Aktiv lytting består av flere elementer:

**1. Vise oppmerksomhet**
- Se på kunden når de snakker
- Nikk og gi bekreftende lyder
- Legg bort forstyrrelser (telefon, etc.)

**2. Reflektere**
- Gjenta nøkkelord kunden bruker
- "Så du ser etter noe som er...?"
- Vis at du har fanget poenget

**3. Klargjøre**
- Still oppfølgingsspørsmål ved uklarheter
- "Kan du fortelle litt mer om...?"
- Unngå å anta for mye

**4. Oppsummere**
- "Hvis jeg har forstått deg riktig, så..."
- Bekrefter forståelse
- Gir kunden mulighet til å korrigere`,
    },
    {
      id: 'salg-service-vg1-1-2-text-3',
      type: 'text',
      content: `### Åpne og lukkede spørsmål

Måten du stiller spørsmål på påvirker hvilken informasjon du får:

**Åpne spørsmål** inviterer til utfyllende svar:
- Starter ofte med: hva, hvordan, hvorfor, fortell om
- "Hva skal du bruke produktet til?"
- "Hvordan har du løst dette tidligere?"
- "Fortell meg om hva du ser etter."

**Lukkede spørsmål** gir korte svar (ja/nei/et ord):
- "Har du prøvd dette før?"
- "Foretrekker du blå eller rød?"
- "Passer størrelse M?"

**Når bruker du hva?**
- Åpne spørsmål: I behovsavdekkingen for å få informasjon
- Lukkede spørsmål: Ved avslutning for å få bekreftelse`,
    },
    {
      id: 'salg-service-vg1-1-2-tip-1',
      type: 'tip',
      title: 'Speiling',
      content: `En effektiv teknikk er å "speile" kundens kroppsspråk og taletempo. Hvis kunden snakker rolig og behersket, gjør det samme. Hvis kunden er entusiastisk, kan du vise litt mer energi. Dette skaper ubevisst en følelse av å være på bølgelengde.`,
    },
    {
      id: 'salg-service-vg1-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Fra lukket til åpen samtale',
      problem: 'En selger i møbelbutikk har vanskeligheter med å få kunden i tale. Kunden svarer bare "ja" og "nei".',
      solution: `**Før (lukkede spørsmål):**
- "Ser du etter sofa?" - "Ja"
- "Liker du denne?" - "Nei"
- "Vil du ha noe i skinn?" - "Vet ikke"

**Etter (åpne spørsmål):**
- "Hva slags stue skal sofaen stå i?"
- "Fortell meg litt om hvordan dere bruker stuen - er det mest TV-titting, selskapelighet eller avslapping?"
- "Hva tenker du om materialer - har du noen preferanser eller ting du vil unngå?"

Resultatet: Kunden forteller at de har barn og katt, vil ha noe slitesterkt i jordfarger, og bruker stuen mest til film og spill med familien.`,
    },
    {
      id: 'salg-service-vg1-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-2-ex-1',
        number: '1.2.1',
        type: 'multiple-choice',
        task: 'Hvilken av disse er et åpent spørsmål?',
        options: [
          { id: 'a', text: '"Liker du blå farge?"', isCorrect: false },
          { id: 'b', text: '"Skal du ha denne?"', isCorrect: false },
          { id: 'c', text: '"Hvordan planlegger du å bruke produktet?"', isCorrect: true },
          { id: 'd', text: '"Er dette i riktig størrelse?"', isCorrect: false },
        ],
        solution: 'Svar C er riktig. Åpne spørsmål starter ofte med "hva", "hvordan", "hvorfor" og inviterer til utfyllende svar. De andre alternativene er lukkede spørsmål som kan besvares med ja/nei.',
      },
    },
    {
      id: 'salg-service-vg1-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-2-ex-2',
        number: '1.2.2',
        type: 'classic',
        task: 'Hva er aktiv lytting, og hvorfor er det viktig i salg?',
        hints: ['Tenk på hva som skiller aktiv lytting fra passiv lytting', 'Hvordan påvirker det kundens opplevelse?'],
        solution: 'Aktiv lytting betyr å være fullt til stede i samtalen, gi respons gjennom kroppsspråk og ord, stille oppfølgingsspørsmål og oppsummere. Det er viktig fordi det viser kunden at du bryr deg om deres behov, bygger tillit, og gir deg bedre informasjon til å finne riktig produkt.',
      },
    },
    {
      id: 'salg-service-vg1-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-2-ex-3',
        number: '1.2.3',
        type: 'classic',
        task: 'Gjør om disse lukkede spørsmålene til åpne spørsmål:',
        subTasks: [
          {
            label: 'a',
            task: '"Liker du denne buksen?"',
            solution: '"Hva synes du om passformen og stilen på denne buksen?" eller "Hvordan føles denne buksen sammenlignet med det du vanligvis bruker?"',
          },
          {
            label: 'b',
            task: '"Er prisen OK?"',
            solution: '"Hva tenker du om prisen i forhold til det du får?" eller "Hvilket prisleie hadde du sett for deg?"',
          },
          {
            label: 'c',
            task: '"Vil du ha denne?"',
            solution: '"Hva skal til for at denne passer for deg?" eller "Hvordan passer denne til det du leter etter?"',
          },
        ],
        solution: 'Åpne spørsmål gir mer informasjon og inviterer til samtale. De starter ofte med hva, hvordan, fortell om, etc.',
      },
    },
    {
      id: 'salg-service-vg1-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-2-ex-4',
        number: '1.2.4',
        type: 'classic',
        task: 'Beskriv tre eksempler på positivt kroppsspråk i en salgssituasjon.',
        solution: '1) Åpen kroppsholdning med armene ned eller foran, ikke i kors. 2) Jevnlig øyekontakt som viser at du er engasjert. 3) Et naturlig smil som signaliserer vennlighet. 4) Lene seg litt fremover for å vise interesse. 5) Nikke for å bekrefte at du lytter.',
      },
    },
    {
      id: 'salg-service-vg1-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-2-ex-5',
        number: '1.2.5',
        type: 'classic',
        task: 'Du merker at kunden virker travel og svarer kort. Hvordan tilpasser du kommunikasjonen?',
        solution: 'Til en travel kunde bør du: 1) Være effektiv og komme raskt til poenget. 2) Bruke færre åpne spørsmål og mer direkte. 3) Tilby korte, presise anbefalinger. 4) Respektere at de har begrenset tid. 5) Tilby å hjelpe dem raskt i kassen. Eksempel: "Jeg ser du har litt dårlig tid. Hvis du forteller meg kort hva du trenger, skal jeg finne det raskt for deg."',
      },
    },
    {
      id: 'salg-service-vg1-1-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Verbal kommunikasjon** er ord, **nonverbal** er kroppsspråk og stemme
- **Aktiv lytting** viser at du forstår og bryr deg om kunden
- **Åpne spørsmål** gir utfyllende svar, **lukkede** gir ja/nei
- **Tilpasning** av kommunikasjon til kundens stil øker suksessen

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Aktiv lytting | Fullt til stede, viser forståelse |
| Åpne spørsmål | Inviterer til utfyllende svar |
| Lukkede spørsmål | Gir korte svar (ja/nei) |
| Speiling | Tilpasse seg kundens kroppsspråk |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.3: Behovsavdekking og rådgivende salg
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_1_3: TextbookChapter = {
  id: 'salg-service-vg1-1-3',
  courseId: 'salg-service-vg1',
  chapterNumber: '1.3',
  title: 'Behovsavdekking og rådgivende salg',
  description: 'Du lærer å avdekke kundens behov gjennom gode spørsmål og kartlegging. Rådgivende salg handler om å finne den beste løsningen for kunden basert på deres ønsker og forutsetninger.',
  estimatedMinutes: 45,
  competenceGoals: ['selge et produkt og gjøre rede for salgsprosessen'],
  content: [
    {
      id: 'salg-service-vg1-1-3-intro',
      type: 'text',
      content: `## Fra selger til rådgiver

Moderne salg handler ikke om å "pushe" produkter på kunder, men om å hjelpe dem med å finne løsninger på sine behov. Rådgivende salg bygger på grundig behovsavdekking - jo bedre du forstår kundens situasjon, desto bedre kan du hjelpe dem.

I dette kapittelet skal du lære:
- Hvordan kartlegge kundens behov systematisk
- Forskjellen mellom uttalte og latente behov
- Teknikker for rådgivende salg
- Hvordan bygge tillit gjennom kompetanse`,
    },
    {
      id: 'salg-service-vg1-1-3-def-1',
      type: 'definition',
      title: 'Rådgivende salg',
      content: `**Rådgivende salg** er en salgsmetode der selgeren opptrer som en rådgiver som hjelper kunden med å finne den beste løsningen. Fokuset er på kundens behov, ikke på produktet eller provisjonen. Rådgivende salg bygger langsiktige kunderelasjoner og tillit.`,
    },
    {
      id: 'salg-service-vg1-1-3-text-1',
      type: 'text',
      content: `### Uttalte og latente behov

Kundenes behov kan deles i to kategorier:

**Uttalte behov** - det kunden sier eksplisitt:
- "Jeg trenger en ny vinterkåpe"
- "Vi leter etter et hotellrom til helgen"
- "Jeg vil ha en laptop til studier"

**Latente behov** - underliggende behov kunden kanskje ikke har tenkt på:
- Vinterkåpen må tåle norsk vinter (funksjonelt behov)
- Hotellrommet bør ha sent utsjekk (praktisk behov)
- Laptopen må være lett nok til å bære til forelesninger (bruksbehov)

En god selger avdekker både de uttalte og latente behovene.`,
    },
    {
      id: 'salg-service-vg1-1-3-text-2',
      type: 'text',
      content: `### SPIN-teknikken

SPIN er en klassisk teknikk for behovsavdekking:

**S - Situasjonsspørsmål**
Kartlegg kundens nåværende situasjon:
- "Hva bruker du i dag?"
- "Hvordan fungerer det?"
- "Hvem skal bruke produktet?"

**P - Problemspørsmål**
Avdekk utfordringer og problemer:
- "Hva er du mest misfornøyd med?"
- "Hva skulle du ønske fungerte bedre?"
- "Er det noe som mangler?"

**I - Implikasjonsspørsmål**
Utforsk konsekvensene av problemene:
- "Hvordan påvirker det hverdagen din?"
- "Hva koster det deg?"
- "Hva skjer hvis problemet fortsetter?"

**N - Nytteverdi-spørsmål**
Vis verdien av en løsning:
- "Hva ville det bety for deg om dette var løst?"
- "Hvordan ville det gjøre hverdagen enklere?"`,
    },
    {
      id: 'salg-service-vg1-1-3-tip-1',
      type: 'tip',
      title: 'Still oppfølgingsspørsmål',
      content: `Når kunden forteller noe interessant, grav dypere: "Fortell mer om det", "Hva mener du med...?", "Hvorfor er det viktig for deg?". Ofte ligger de viktigste behovene gjemt bak det første svaret.`,
    },
    {
      id: 'salg-service-vg1-1-3-example-1',
      type: 'example',
      title: 'Eksempel: SPIN i praksis',
      problem: 'En kunde kommer inn i en elektronikkbutikk og sier de trenger en ny TV.',
      solution: `**Situasjon:** "Hva slags TV har du nå, og hvor lenge har du hatt den?"
Svar: "En 42-tommer fra 2015, den fungerer egentlig OK."

**Problem:** "Hva er det som gjør at du vurderer ny TV nå?"
Svar: "Bildet er litt mørkt, og det er vanskelig å se hva som skjer i mørke scener i filmer."

**Implikasjon:** "Hvordan påvirker det filmopplevelsen for familien?"
Svar: "Vi ser faktisk færre filmer sammen fordi det er litt irriterende."

**Nytteverdi:** "Hvis du hadde en TV med bedre bildekvalitet i mørke scener, ville dere se mer film sammen?"
Svar: "Ja, absolutt! Det ville vært fint å ha filmkveld igjen."

**Resultat:** Selgeren vet nå at kunden trenger en TV med god kontrastgjengivelse (OLED/QLED), og at verdien handler om kvalitetstid med familien - ikke bare tekniske spesifikasjoner.`,
    },
    {
      id: 'salg-service-vg1-1-3-text-3',
      type: 'text',
      content: `### Bygge tillit som rådgiver

For å lykkes med rådgivende salg må kunden stole på deg:

**1. Vis kompetanse**
- Kjenn produktene godt
- Vær ærlig om det du ikke vet
- Del relevant kunnskap

**2. Vær ærlig**
- Anbefal ikke noe kunden ikke trenger
- Fortell om ulemper, ikke bare fordeler
- Innrøm hvis et annet sted har bedre tilbud

**3. Lytt mer enn du snakker**
- La kunden fortelle sin historie
- Ikke avbryt eller forhast deg
- Vis genuin interesse

**4. Tilpass rådene**
- Ikke gi samme råd til alle
- Ta hensyn til kundens budsjett
- Respekter kundens preferanser`,
    },
    {
      id: 'salg-service-vg1-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-3-ex-1',
        number: '1.3.1',
        type: 'multiple-choice',
        task: 'Hva står "I" for i SPIN-teknikken?',
        options: [
          { id: 'a', text: 'Introduksjonsspørsmål', isCorrect: false },
          { id: 'b', text: 'Informasjonsspørsmål', isCorrect: false },
          { id: 'c', text: 'Implikasjonsspørsmål', isCorrect: true },
          { id: 'd', text: 'Interessespørsmål', isCorrect: false },
        ],
        solution: 'I står for Implikasjonsspørsmål. Disse utforsker konsekvensene av kundens problemer og hjelper kunden å se verdien av en løsning.',
      },
    },
    {
      id: 'salg-service-vg1-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-3-ex-2',
        number: '1.3.2',
        type: 'classic',
        task: 'Forklar forskjellen mellom uttalte og latente behov med et eksempel.',
        hints: ['Hva sier kunden vs. hva trenger kunden egentlig?'],
        solution: 'Uttalte behov er det kunden eksplisitt ber om ("Jeg trenger nye løpesko"). Latente behov er underliggende behov kunden kanskje ikke har uttrykt (skoen må ha god støtte fordi kunden har plattfot, den må tåle terreng fordi de løper i skogen, den må være synlig fordi de løper på kvelden). God behovsavdekking avdekker begge.',
      },
    },
    {
      id: 'salg-service-vg1-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-3-ex-3',
        number: '1.3.3',
        type: 'classic',
        task: 'Du jobber i en sykkelbutikk. Lag fire spørsmål etter SPIN-modellen for en kunde som vil kjøpe sykkel.',
        subTasks: [
          {
            label: 'a',
            task: 'Situasjonsspørsmål',
            solution: '"Hva slags sykkel har du nå?" eller "Hva bruker du sykkelen til i dag?"',
          },
          {
            label: 'b',
            task: 'Problemspørsmål',
            solution: '"Hva fungerer ikke så bra med sykkelen din?" eller "Er det noe du savner?"',
          },
          {
            label: 'c',
            task: 'Implikasjonsspørsmål',
            solution: '"Hvordan påvirker det sykkelturene dine at den er for tung?" eller "Hva har det å si for motivasjonen din?"',
          },
          {
            label: 'd',
            task: 'Nytteverdispørsmål',
            solution: '"Hva ville en lettere sykkel bety for turene dine?" eller "Ville du sykle mer hvis du hadde en sykkel som passet bedre?"',
          },
        ],
        solution: 'SPIN-spørsmålene leder kunden gjennom en prosess der de selv innser verdien av en ny sykkel som løser deres spesifikke problemer.',
      },
    },
    {
      id: 'salg-service-vg1-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-3-ex-4',
        number: '1.3.4',
        type: 'classic',
        task: 'En kunde vil kjøpe den dyreste TV-en i butikken, men du innser at de ikke trenger alle funksjonene. Hva gjør en rådgivende selger?',
        solution: 'En rådgivende selger er ærlig og sier: "Denne TV-en er fantastisk, men basert på det du forteller om bruken din, tror jeg faktisk du ville vært like fornøyd med denne modellen som koster mindre. Den har alt du trenger, og du sparer 5000 kroner." Dette bygger tillit og øker sjansen for at kunden kommer tilbake og anbefaler butikken til andre.',
      },
    },
    {
      id: 'salg-service-vg1-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-3-ex-5',
        number: '1.3.5',
        type: 'classic',
        task: 'Hvorfor er det viktig å avdekke latente behov i tillegg til uttalte behov?',
        solution: 'Latente behov avgjør ofte om kunden blir fornøyd med kjøpet. En kunde som sier de trenger "en bærbar PC" har kanskje latente behov som batteritid (fordi de pendler), vekt (fordi de bærer den mye), eller tastaturkvalitet (fordi de skriver mye). Hvis selgeren ikke avdekker dette, kan kunden ende opp med en PC som teknisk sett oppfyller kravet, men som ikke passer livsstilen deres.',
      },
    },
    {
      id: 'salg-service-vg1-1-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Rådgivende salg** handler om å hjelpe kunden, ikke pushe produkter
- **Uttalte behov** er eksplisitte, **latente behov** er underliggende
- **SPIN-teknikken** er en systematisk metode for behovsavdekking
- **Tillit** bygges gjennom kompetanse, ærlighet og lytting

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Rådgivende salg | Selger som rådgiver, fokus på kundens behov |
| Latente behov | Underliggende behov kunden ikke har uttrykt |
| SPIN | Situasjon, Problem, Implikasjon, Nytteverdi |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.4: Innvendingsbehandling og avslutning
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_1_4: TextbookChapter = {
  id: 'salg-service-vg1-1-4',
  courseId: 'salg-service-vg1',
  chapterNumber: '1.4',
  title: 'Innvendingsbehandling og avslutning',
  description: 'Teknikker for å håndtere innvendinger fra kunder på en profesjonell måte. Du lærer ulike avslutningsstrategier og hvordan du sikrer at kunden er fornøyd med kjøpsbeslutningen.',
  estimatedMinutes: 40,
  competenceGoals: ['selge et produkt og gjøre rede for salgsprosessen'],
  content: [
    {
      id: 'salg-service-vg1-1-4-intro',
      type: 'text',
      content: `## Innvendinger - tegn på interesse

Når en kunde kommer med innvendinger, er det ofte et godt tegn. Det betyr at de er interessert nok til å vurdere kjøpet seriøst. En profesjonell selger ser på innvendinger som muligheter til å gi mer informasjon og hjelpe kunden ta en god beslutning.

I dette kapittelet skal du lære:
- Hvorfor innvendinger er positivt
- Vanlige typer innvendinger og hvordan møte dem
- Ulike avslutningsstrategier
- Hvordan avslutte salget profesjonelt`,
    },
    {
      id: 'salg-service-vg1-1-4-def-1',
      type: 'definition',
      title: 'Innvending',
      content: `En **innvending** er et spørsmål, en bekymring eller et motargument som kunden kommer med i løpet av salgsprosessen. Innvendinger handler ofte om pris, behov, timing eller tillit, og bør håndteres som muligheter til å gi mer informasjon.`,
    },
    {
      id: 'salg-service-vg1-1-4-text-1',
      type: 'text',
      content: `### Vanlige innvendinger

**1. Pris**
"Det er for dyrt" / "Jeg fant det billigere andre steder"
- Sjekk hva kunden sammenligner med
- Fremhev verdien, ikke bare prisen
- Vurder om du kan tilby noe ekstra

**2. Behov**
"Jeg trenger det egentlig ikke" / "Jeg må tenke på det"
- Gå tilbake til behovsavdekkingen
- Spør hva som gjør dem usikre
- Respekter om de genuint ikke trenger det

**3. Timing**
"Ikke akkurat nå" / "Kanskje senere"
- Finn ut hva som gjør timing dårlig
- Informer om tilbud som utløper
- Avtale oppfølging ved senere anledning

**4. Tillit**
"Jeg stoler ikke på denne merken" / "Jeg har hørt dårlige ting"
- Spør hva de har hørt
- Del egen erfaring og fakta
- Vis til garantier og returrett`,
    },
    {
      id: 'salg-service-vg1-1-4-text-2',
      type: 'text',
      content: `### Teknikk for innvendingsbehandling

**1. Lytt ferdig**
- Ikke avbryt kunden
- La dem fullføre tanken
- Vis at du tar dem seriøst

**2. Bekreft**
- "Jeg forstår at prisen er viktig for deg"
- "Det er et godt poeng"
- Vis at innvendingen er gyldig

**3. Utforsk**
- "Kan du fortelle meg mer om hva du tenker?"
- "Hva er det viktigste for deg når det gjelder pris?"
- Forstå hva som ligger bak innvendingen

**4. Svar**
- Gi relevant informasjon
- Koble svaret til kundens behov
- Vær ærlig, ikke manipulerende

**5. Sjekk**
- "Svarte det på bekymringen din?"
- "Er det noe annet du lurer på?"`,
    },
    {
      id: 'salg-service-vg1-1-4-example-1',
      type: 'example',
      title: 'Eksempel: Håndtering av prisinnvending',
      problem: 'Kunden sier: "1500 kroner for en hodetelefon? Det er altfor dyrt!"',
      solution: `**Lytt og bekreft:** "Jeg forstår - 1500 kroner er penger. Pris er viktig."

**Utforsk:** "Hva sammenligner du med? Har du sett på andre modeller?"

Kunden: "På nett fant jeg en til 400 kroner som ser lik ut."

**Svar:** "Det stemmer at det finnes billigere alternativer. Forskjellen er at denne har aktiv støydemping som fjerner bakgrunnsstøy fullstendig, batteriid på 30 timer, og 3 års garanti. Du nevnte at du skulle bruke dem på fly og tog - med aktiv støydemping hører du ikke motoren, bare musikken. De billige variantene har som regel passiv demping som ikke funker like bra i transport."

**Sjekk:** "Gir det mening når du tenker på hvordan du skal bruke dem?"

Kunden: "Ja, jeg skjønner. Jeg pendler mye, så det er kanskje verdt det."`,
    },
    {
      id: 'salg-service-vg1-1-4-text-3',
      type: 'text',
      content: `### Avslutningsstrategier

Når innvendingene er håndtert, er det tid for å avslutte salget:

**1. Direkte avslutning**
- "Skal jeg pakke den inn?"
- "Vil du ha denne?"
- Brukes når kunden er klar

**2. Valgavslutning**
- "Vil du ha den blå eller den svarte?"
- "Skal det være kontant eller kort?"
- Gir kunden kontroll over detaljer

**3. Oppsummeringsavslutning**
- "Så du får en jakke som holder deg varm og tørr på ski, i en farge du liker, innenfor budsjettet. Høres det bra ut?"
- Oppsummerer fordelene før du spør

**4. Neste-steg-avslutning**
- "Det neste steget er at vi finner størrelsen din"
- "Jeg setter den av til deg så du kan hente i morgen"
- Fokuserer på praktisk fremgang`,
    },
    {
      id: 'salg-service-vg1-1-4-tip-1',
      type: 'tip',
      title: 'Timing er viktig',
      content: `Ikke press avslutning for tidlig. Vent til kunden har fått svar på sine spørsmål og virker klar. Tegn på kjøpsklarhet inkluderer: spørsmål om detaljer (størrelse, farge, levering), kunden tar opp produktet og holder det, eller de sier ting som "den er fin" eller "den passer nok".`,
    },
    {
      id: 'salg-service-vg1-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-4-ex-1',
        number: '1.4.1',
        type: 'multiple-choice',
        task: 'Hvorfor er innvendinger ofte et godt tegn?',
        options: [
          { id: 'a', text: 'Fordi det viser at kunden ikke liker produktet', isCorrect: false },
          { id: 'b', text: 'Fordi det viser at kunden er interessert nok til å vurdere kjøpet', isCorrect: true },
          { id: 'c', text: 'Fordi det gir selgeren en pause', isCorrect: false },
          { id: 'd', text: 'Fordi det betyr at salget er tapt', isCorrect: false },
        ],
        solution: 'B er riktig. Når kunden kommer med innvendinger, viser det at de faktisk vurderer å kjøpe. En helt uinteressert kunde går bare videre uten å si noe.',
      },
    },
    {
      id: 'salg-service-vg1-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-4-ex-2',
        number: '1.4.2',
        type: 'classic',
        task: 'En kunde sier: "Jeg må tenke på det." Hva kan du gjøre for å forstå hva som ligger bak?',
        hints: ['Hvilke spørsmål kan avdekke den virkelige grunnen?'],
        solution: 'Still oppfølgingsspørsmål: "Selvfølgelig - er det noe spesielt du vil tenke over?" eller "Er det noe du er usikker på som jeg kan hjelpe med?" eller "Hva skal til for at dette blir riktig for deg?" Dette hjelper deg forstå om det handler om pris, behov, timing eller noe annet.',
      },
    },
    {
      id: 'salg-service-vg1-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-4-ex-3',
        number: '1.4.3',
        type: 'classic',
        task: 'Øv på å håndtere denne innvendingen: "Jeg kan kjøpe det billigere på nett."',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv en respons som bekrefter kundens bekymring.',
            solution: '"Det stemmer, netthandel kan ofte være rimeligere. Pris er viktig."',
          },
          {
            label: 'b',
            task: 'Skriv et utforskende spørsmål for å forstå mer.',
            solution: '"Hva er det viktigste for deg - laveste pris eller noe annet også, som service og rådgivning?"',
          },
          {
            label: 'c',
            task: 'Skriv et argument for verdien av å handle i butikk.',
            solution: '"Når du handler her, kan du prøve produktet først, du får personlig rådgivning, enkel bytte og retur uten porto, og hvis noe går galt kan du komme rett inn. For mange er den tryggheten verdt litt ekstra."',
          },
        ],
        solution: 'Nøkkelen er å ikke bli defensiv, men vise forståelse og deretter løfte frem verdien av det du tilbyr utover bare prisen.',
      },
    },
    {
      id: 'salg-service-vg1-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-4-ex-4',
        number: '1.4.4',
        type: 'classic',
        task: 'Gi et eksempel på hver av disse avslutningsstrategiene for salg av en vinterjacke:',
        subTasks: [
          {
            label: 'a',
            task: 'Direkte avslutning',
            solution: '"Skal jeg pakke den inn for deg?"',
          },
          {
            label: 'b',
            task: 'Valgavslutning',
            solution: '"Tar du den svarte eller den blå?"',
          },
          {
            label: 'c',
            task: 'Oppsummeringsavslutning',
            solution: '"Så du får en varm jakke som tåler norsk vinter, i riktig størrelse og en farge som passer garderoben. Er du fornøyd med det?"',
          },
        ],
        solution: 'Bruk avslutningsstrategien som passer til situasjonen og kundens signaler.',
      },
    },
    {
      id: 'salg-service-vg1-1-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Innvendinger** er ofte tegn på interesse, ikke avvisning
- **Vanlige innvendinger** handler om pris, behov, timing eller tillit
- **Behandlingsteknikk:** lytt, bekreft, utforsk, svar, sjekk
- **Avslutningsstrategier** inkluderer direkte, valg, oppsummering og neste steg

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Innvending | Kundens bekymring eller motargument |
| Direkte avslutning | Spørre rett ut om kunden vil kjøpe |
| Valgavslutning | Gi kunden valg mellom alternativer |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.5: Mersalg og kryssalg
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_1_5: TextbookChapter = {
  id: 'salg-service-vg1-1-5',
  courseId: 'salg-service-vg1',
  chapterNumber: '1.5',
  title: 'Mersalg og kryssalg',
  description: 'Du lærer forskjellen på mersalg og kryssalg, og hvordan disse teknikkene kan brukes for å øke omsetningen. Det handler om å gi kunden merverdi gjennom relevante tilleggsprodukter og oppgraderinger.',
  estimatedMinutes: 35,
  competenceGoals: [
    'selge et produkt og gjøre rede for salgsprosessen',
    'vurdere sentrale konkurransevirkemidler i sammenheng med profilen og lønnsomheten til virksomheter',
  ],
  content: [
    {
      id: 'salg-service-vg1-1-5-intro',
      type: 'text',
      content: `## Øke verdien av hvert salg

Mersalg og kryssalg er teknikker som gir verdi til både kunden og bedriften. Kunden får produkter som forbedrer opplevelsen eller løser tilleggsbehov, mens bedriften øker omsetningen. Nøkkelen er at det alltid skal være relevant for kunden.

I dette kapittelet skal du lære:
- Forskjellen mellom mersalg og kryssalg
- Når og hvordan du tilbyr tilleggsprodukter
- Hvordan skape merverdi uten å virke påtrengende
- Eksempler fra ulike bransjer`,
    },
    {
      id: 'salg-service-vg1-1-5-def-1',
      type: 'definition',
      title: 'Mersalg (upselling)',
      content: `**Mersalg** innebærer å tilby kunden en oppgradert eller dyrere versjon av produktet de allerede vurderer. Eksempel: Kunden vil ha en mobiltelefon med 128 GB lagring, men du foreslår 256 GB-versjonen fordi de sa de tar mye bilder og video.`,
    },
    {
      id: 'salg-service-vg1-1-5-def-2',
      type: 'definition',
      title: 'Kryssalg (cross-selling)',
      content: `**Kryssalg** innebærer å tilby tilleggsprodukter som utfyller hovedproduktet. Eksempel: Kunden kjøper en mobiltelefon, og du tilbyr et deksel, skjermbeskytter og lader.`,
    },
    {
      id: 'salg-service-vg1-1-5-text-1',
      type: 'text',
      content: `### Når passer mersalg?

Mersalg fungerer best når:

**1. Det løser et reelt behov**
- Kunden nevner at 128 GB er litt lite → foreslå 256 GB
- Kunden vil ha lang holdbarhet → foreslå premium-versjon
- Kunden trenger ekstra funksjoner → foreslå oppgradert modell

**2. Prisdifferansen er fornuftig**
- Små prishopp for stor verdiøkning
- "For 500 kroner mer får du..."
- Vis verdien i forhold til prisen

**3. Kunden har fleksibelt budsjett**
- Noen har et fast budsjett - respekter det
- Andre er åpne for å betale mer for bedre kvalitet
- Les kundens signaler`,
    },
    {
      id: 'salg-service-vg1-1-5-text-2',
      type: 'text',
      content: `### Når passer kryssalg?

Kryssalg bør tilbys når:

**1. Produktene hører naturlig sammen**
- Sko + impregneringsspray + sokker
- Laptop + veske + mus
- Sjampo + balsam + hårkur

**2. Det gir praktisk verdi**
- "Du slipper å komme tilbake for å hente dette"
- "Med dette får du alt du trenger"
- "Mange glemmer dette og angrer"

**3. Det er på tilbud**
- Kombinasjonsrabatter
- "Kjøp 3 betal for 2"
- Pakketilbud`,
    },
    {
      id: 'salg-service-vg1-1-5-example-1',
      type: 'example',
      title: 'Eksempel: Mersalg i klesbutikk',
      problem: 'En kunde prøver en jakke til 1200 kr og er fornøyd.',
      solution: `**Feil tilnærming:** "Vi har en dyrere jakke til 2000 kr også - vil du se på den?"

**Riktig tilnærming:** "Denne jakken er fin! Du nevnte at du bruker mye tid utendørs på vinteren. Vi har faktisk en versjon med dunfôr som holder deg varm ned til minus 20 grader. Den koster 800 kroner mer, men mange sier den er verdt det for de kalde dagene. Vil du prøve?"

Forskjellen: Den riktige tilnærmingen kobler oppgraderingen til kundens uttrykte behov og forklarer verdien.`,
    },
    {
      id: 'salg-service-vg1-1-5-example-2',
      type: 'example',
      title: 'Eksempel: Kryssalg i sportsbutikk',
      problem: 'En kunde kjøper nye løpesko.',
      solution: `**Etter at hovedkjøpet er avgjort:**

"Gratulerer med flotte sko! Før du går - har du gode løpesokker? Med feil sokker kan du få gnagsår selv med de beste skoene. Vi har sokker med ekstra demping og fukttransport som mange løpere sverger til."

Kunden: "Det hadde jeg ikke tenkt på."

"Og hvis du løper på kvelden, anbefaler jeg en refleksvest. Nå i høstmørket er det viktig å bli sett."

Resultatet: Kunden får produkter som forbedrer løpeopplevelsen, butikken øker salget.`,
    },
    {
      id: 'salg-service-vg1-1-5-warning-1',
      type: 'warning',
      title: 'Unngå å være påtrengende',
      content: `Mersalg og kryssalg skal føles som hjelp, ikke press. Hvis kunden sier nei, respekter det. Hvis du merker irritasjon, stopp. Et godt tips: Presenter maximum ett mersalg og 2-3 kryssalg-produkter. For mange tilbud føles som press.`,
    },
    {
      id: 'salg-service-vg1-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-5-ex-1',
        number: '1.5.1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom mersalg og kryssalg?',
        options: [
          { id: 'a', text: 'Mersalg er billigere, kryssalg er dyrere', isCorrect: false },
          { id: 'b', text: 'Mersalg er oppgradering av samme produkt, kryssalg er tilleggsprodukter', isCorrect: true },
          { id: 'c', text: 'Mersalg er for netthandel, kryssalg er for fysiske butikker', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
        ],
        solution: 'B er riktig. Mersalg handler om å tilby en bedre/dyrere versjon av produktet kunden vurderer. Kryssalg handler om å tilby produkter som utfyller hovedproduktet.',
      },
    },
    {
      id: 'salg-service-vg1-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-5-ex-2',
        number: '1.5.2',
        type: 'classic',
        task: 'Gi tre eksempler på kryssalg for hver av disse produktene:',
        subTasks: [
          {
            label: 'a',
            task: 'Mobiltelefon',
            solution: '1) Deksel/cover, 2) Skjermbeskytter, 3) Lader/powerbank, 4) Trådløse ørepropper',
          },
          {
            label: 'b',
            task: 'Sykkel',
            solution: '1) Hjelm, 2) Lys (for og bak), 3) Lås, 4) Drikkeflaske og holder',
          },
          {
            label: 'c',
            task: 'Dress',
            solution: '1) Skjorte, 2) Slips, 3) Dressko, 4) Belte',
          },
        ],
        solution: 'Gode kryssalg-produkter er naturlige tillegg som forbedrer bruken av hovedproduktet.',
      },
    },
    {
      id: 'salg-service-vg1-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-5-ex-3',
        number: '1.5.3',
        type: 'classic',
        task: 'Hvorfor bør mersalg og kryssalg alltid være basert på kundens behov?',
        hints: ['Hva skjer med tilliten hvis kunden føler seg presset?'],
        solution: 'Når mersalg og kryssalg er basert på kundens behov, oppleves det som hjelp og rådgivning, ikke salgspress. Kunden får produkter de faktisk har nytte av, blir fornøyd og kommer tilbake. Hvis man tilbyr ting kunden ikke trenger, mister de tilliten og kan angre på kjøpet.',
      },
    },
    {
      id: 'salg-service-vg1-1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-5-ex-4',
        number: '1.5.4',
        type: 'classic',
        task: 'En kunde skal kjøpe en laptop til 8000 kr til studier. Skriv et eksempel på et naturlig mersalg.',
        solution: '"Denne laptopen er bra for studier! Du nevnte at du skal ha mye med den å gjøre. Modellen med 16 GB RAM i stedet for 8 GB koster 1200 kr mer, men den vil være raskere når du har mange programmer åpne samtidig - som Teams, Word og nettleser. Mange studenter merker at 8 GB blir litt trangt etter hvert. Vil du se på den?"',
      },
    },
    {
      id: 'salg-service-vg1-1-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Mersalg** er å tilby oppgradert versjon av samme produkt
- **Kryssalg** er å tilby tilleggsprodukter som utfyller hovedproduktet
- **Fokus på verdi:** Tilbud må være relevant for kundens behov
- **Respekter grenser:** Ikke press, maksimum noen få forslag

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Mersalg/upselling | Oppgradere til bedre/dyrere produkt |
| Kryssalg/cross-selling | Tilby utfyllende tilleggsprodukter |
| Merverdi | Ekstra verdi kunden får utover hovedproduktet |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.6: Ettermarked og kundeoppfølging
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_1_6: TextbookChapter = {
  id: 'salg-service-vg1-1-6',
  courseId: 'salg-service-vg1',
  chapterNumber: '1.6',
  title: 'Ettermarked og kundeoppfølging',
  description: 'Betydningen av oppfølging etter salget og hvordan man bygger varige kunderelasjoner. Du lærer om systemer for kundeoppfølging og hvordan man sikrer gjenkjøp og lojale kunder.',
  estimatedMinutes: 35,
  competenceGoals: [
    'selge et produkt og gjøre rede for salgsprosessen',
    'reflektere over ulike former for relasjonsbygging og forklare betydningen av nettverk',
  ],
  content: [
    {
      id: 'salg-service-vg1-1-6-intro',
      type: 'text',
      content: `## Salget er bare begynnelsen

Det er mye billigere å beholde en eksisterende kunde enn å skaffe en ny. Derfor er det som skjer etter salget minst like viktig som selve salget. God kundeoppfølging skaper lojale kunder som kommer tilbake gang på gang - og anbefaler deg til andre.

I dette kapittelet skal du lære:
- Hvorfor ettermarked er viktig for lønnsomheten
- Ulike måter å følge opp kunder på
- Hvordan CRM-systemer fungerer
- Hvordan skape lojale kunder`,
    },
    {
      id: 'salg-service-vg1-1-6-def-1',
      type: 'definition',
      title: 'Ettermarked',
      content: `**Ettermarked** er alle aktiviteter som skjer etter at det opprinnelige salget er gjennomført. Dette inkluderer service, reservedeler, oppgraderinger, vedlikehold og ny-salg til eksisterende kunder. For mange bedrifter er ettermarkedet en viktig inntektskilde.`,
    },
    {
      id: 'salg-service-vg1-1-6-def-2',
      type: 'definition',
      title: 'CRM (Customer Relationship Management)',
      content: `**CRM** er systemer og strategier for å håndtere kundeforhold. Et CRM-system lagrer informasjon om kunder - kjøpshistorikk, preferanser, kontaktinformasjon - slik at bedriften kan gi personlig service og målrettet kommunikasjon.`,
    },
    {
      id: 'salg-service-vg1-1-6-text-1',
      type: 'text',
      content: `### Hvorfor kundeoppfølging lønner seg

**Kostnadseffektivt:**
- Det koster 5-7 ganger mer å skaffe en ny kunde enn å beholde en eksisterende
- Lojale kunder kjøper oftere og mer
- De er mindre prisfølsomme

**Muntlig markedsføring:**
- Fornøyde kunder anbefaler til venner og familie
- En anbefaling fra bekjent er mer verdt enn reklame
- Negative opplevelser spres også raskt

**Langsiktig relasjon:**
- Kunden stoler på deg og kommer tilbake
- Lettere å selge til noen som allerede kjenner deg
- Mulighet for oppgraderinger og nye produkter`,
    },
    {
      id: 'salg-service-vg1-1-6-text-2',
      type: 'text',
      content: `### Former for kundeoppfølging

**1. Direkte etter kjøp**
- Takke for handelen
- Spørre om de trenger hjelp til å komme i gang
- Informere om returrett og garanti
- Gi kontaktinformasjon ved spørsmål

**2. Kort tid etter (1-2 uker)**
- "Hvordan fungerer produktet?"
- "Er det noe du lurer på?"
- Fange opp eventuelle problemer tidlig

**3. Regelmessig**
- Nyhetsbrev med tips og tilbud
- Påminnelse om service/vedlikehold
- Informasjon om nye produkter
- Bursdagshilsen eller andre personlige meldinger

**4. Ved spesielle anledninger**
- Jubileum som kunde
- Sesongbaserte påminnelser
- Kampanjer til lojale kunder`,
    },
    {
      id: 'salg-service-vg1-1-6-text-3',
      type: 'text',
      content: `### CRM i praksis

Et CRM-system hjelper deg å:

**Huske kunden:**
- Tidligere kjøp
- Preferanser (størrelse, farge, merke)
- Eventuelle klager eller problemer
- Notater fra samtaler

**Kommunisere målrettet:**
- Sende relevante tilbud
- Unngå å tilby noe kunden nettopp har kjøpt
- Tilpasse kommunikasjon til kundens interesser

**Planlegge oppfølging:**
- Påminnelser om å kontakte kunder
- Automatiserte meldinger ved hendelser
- Oversikt over hvem som trenger oppfølging`,
    },
    {
      id: 'salg-service-vg1-1-6-example-1',
      type: 'example',
      title: 'Eksempel: God kundeoppfølging',
      problem: 'En kunde kjøper en dyr espressomaskin i en elektronikkbutikk.',
      solution: `**Ved kjøp:**
- Selgeren demonstrerer maskinen og gir tips
- Kunden får med seg veiledning og kontaktinfo

**Etter 1 uke:**
- SMS: "Hei! Håper du koser deg med espressomaskinen. Har du spørsmål eller trenger tips, er det bare å ta kontakt."

**Etter 3 måneder:**
- E-post: "Visste du at maskinen trenger avkalking regelmessig? Her er en enkel guide. Vi har også avkalkingsmiddel på tilbud denne uken."

**Etter 1 år:**
- "Gratulerer med 1-årsjubileum som kaffekunde! Som takk for at du handler hos oss, får du 20% på kaffebønner denne måneden."

**Resultat:** Kunden føler seg ivaretatt, kommer tilbake for forbruksvarer, og anbefaler butikken til kaffeinteresserte venner.`,
    },
    {
      id: 'salg-service-vg1-1-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-6-ex-1',
        number: '1.6.1',
        type: 'multiple-choice',
        task: 'Hva betyr CRM?',
        options: [
          { id: 'a', text: 'Customer Retail Management', isCorrect: false },
          { id: 'b', text: 'Customer Relationship Management', isCorrect: true },
          { id: 'c', text: 'Client Resource Management', isCorrect: false },
          { id: 'd', text: 'Consumer Relations Marketing', isCorrect: false },
        ],
        solution: 'CRM står for Customer Relationship Management - systemer og strategier for å håndtere kundeforhold.',
      },
    },
    {
      id: 'salg-service-vg1-1-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-6-ex-2',
        number: '1.6.2',
        type: 'classic',
        task: 'Hvorfor er det billigere å beholde en eksisterende kunde enn å skaffe en ny?',
        hints: ['Tenk på markedsføringskostnader og kundens kjennskap til deg'],
        solution: 'Nye kunder krever markedsføring, annonsering og tid til å bygge tillit. Eksisterende kunder kjenner allerede bedriften, stoler på den, og trenger bare en påminnelse eller et godt tilbud for å handle igjen. De vet hvordan produktene fungerer og trenger mindre veiledning.',
      },
    },
    {
      id: 'salg-service-vg1-1-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-6-ex-3',
        number: '1.6.3',
        type: 'classic',
        task: 'Du jobber i en sykkelbutikk. Lag en oppfølgingsplan for en kunde som har kjøpt en sykkel.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva gjør du ved salget?',
            solution: 'Demonstrerer sykkelen, forklarer vedlikehold, gir med service-brosjyre og kontaktinfo, registrerer kunden i systemet.',
          },
          {
            label: 'b',
            task: 'Oppfølging etter 2 uker?',
            solution: 'SMS/e-post: "Hvordan går det med sykkelen? Husk at første service er inkludert - du kan bestille time når det passer."',
          },
          {
            label: 'c',
            task: 'Sesongbasert oppfølging?',
            solution: 'Før vinteren: "Skal du sykle gjennom vinteren? Vi har piggdekk og lys. Husk også vinterstemvokset!" Før våren: "Tid for vårservice? Sørg for at sykkelen er klar til sesong!"',
          },
        ],
        solution: 'God oppfølging er relevant, hjelpsom og ikke for påtrengende. Den gir kunden verdi og påminner dem om at du finnes når de trenger noe.',
      },
    },
    {
      id: 'salg-service-vg1-1-6-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Ettermarked** er alt som skjer etter salget og er viktig for lønnsomhet
- **Kundeoppfølging** skaper lojale kunder som kommer tilbake
- **CRM-systemer** hjelper deg huske og kommunisere med kunder
- **Fornøyde kunder** anbefaler deg til andre (muntlig markedsføring)

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Ettermarked | Aktiviteter og salg etter opprinnelig kjøp |
| CRM | System for å håndtere kundeforhold |
| Kundelojalitet | Kunder som kommer tilbake gang på gang |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.7: Regelverk for salg
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_1_7: TextbookChapter = {
  id: 'salg-service-vg1-1-7',
  courseId: 'salg-service-vg1',
  chapterNumber: '1.7',
  title: 'Regelverk for salg',
  description: 'En gjennomgang av lover og regler som gjelder ved salg, inkludert angrerettloven, kjøpsloven og forbrukerkjøpsloven. Du lærer om rettigheter og plikter for både selger og kjøper.',
  estimatedMinutes: 45,
  competenceGoals: ['kjenne til og ta i bruk gjeldende regelverk for markedsføring og salg'],
  content: [
    {
      id: 'salg-service-vg1-1-7-intro',
      type: 'text',
      content: `## Lover som beskytter både kjøper og selger

Som selger må du kjenne til lovverket som regulerer salg. Disse lovene beskytter forbrukerne, men gir også selgeren klare rammer å jobbe innenfor. Å kjenne regelverket gir deg trygghet og profesjonalitet i jobben.

I dette kapittelet skal du lære:
- De viktigste lovene for varehandel
- Forbrukernes rettigheter
- Selgerens plikter og rettigheter
- Spesielle regler for netthandel`,
    },
    {
      id: 'salg-service-vg1-1-7-def-1',
      type: 'definition',
      title: 'Forbrukerkjøpsloven',
      content: `**Forbrukerkjøpsloven** regulerer kjøp av varer mellom en forbruker og en næringsdrivende. Den gir forbrukeren sterk beskyttelse, blant annet to års reklamasjonsrett og krav om at varen skal være i samsvar med avtalen.`,
    },
    {
      id: 'salg-service-vg1-1-7-text-1',
      type: 'text',
      content: `### Forbrukerkjøpsloven

**Gjelder når:**
- Kjøper er en privatperson (forbruker)
- Selger er en bedrift (næringsdrivende)
- Det er snakk om kjøp av varer

**Viktige rettigheter for kjøper:**

**1. Reklamasjonsrett (2 år)**
- Kunden kan klage på feil i minst 2 år
- 5 år for varer med lengre forventet levetid
- Selger må enten reparere, bytte eller gi pengene tilbake

**2. Varen skal være mangelfri**
- Varen skal fungere som forventet
- Den skal svare til beskrivelsen
- Den skal passe til formålet

**3. Bevisbyrde**
- De første 6 månedene antas feilen å ha eksistert ved kjøp
- Etter 6 måneder må kunden bevise dette`,
    },
    {
      id: 'salg-service-vg1-1-7-def-2',
      type: 'definition',
      title: 'Angrerettloven',
      content: `**Angrerettloven** gir forbrukere rett til å angre på kjøp ved fjernsalg (netthandel, telefonsalg) og salg utenfor fast utsalgssted. Angrefristen er 14 dager fra varen er mottatt.`,
    },
    {
      id: 'salg-service-vg1-1-7-text-2',
      type: 'text',
      content: `### Angrerettloven

**Gjelder ved:**
- Netthandel
- Telefonsalg
- Dørsalg
- Messer og stands (noen unntak)

**14 dagers angrefrist:**
- Kunden kan returnere varen uten grunn
- Fristen løper fra varen er mottatt
- Selger må informere om angrerett ved kjøp
- Manglende info kan gi ett års angrefrist

**Unntak - angrerett gjelder IKKE for:**
- Forseglede varer som er åpnet (hygiene, data)
- Skreddersydde/personlige varer
- Varer som forringes raskt (mat)
- Aviser, magasiner, billetter til arrangementer`,
    },
    {
      id: 'salg-service-vg1-1-7-text-3',
      type: 'text',
      content: `### Kjøpsloven

**Kjøpsloven** gjelder for kjøp mellom privatpersoner eller mellom bedrifter. Her har kjøper svakere beskyttelse enn i forbrukerkjøpsloven:

- Reklamasjonsfrister kan avtales
- "Kjøpt som den er" er mulig
- Bevisbyrde ligger hos kjøper

### Selgerens plikter

Som selger har du plikt til å:

**1. Gi korrekt informasjon**
- Ikke villede kunden
- Oppgi viktige egenskaper
- Informere om begrensninger

**2. Opplyse om priser**
- Totalpris inkludert avgifter
- Eventuelle tilleggskostnader
- Betalingsvilkår

**3. Behandle reklamasjoner**
- Ta imot klager innen fristen
- Gi tilbakemelding innen rimelig tid
- Tilby retting, omlevering eller refusjon`,
    },
    {
      id: 'salg-service-vg1-1-7-tip-1',
      type: 'tip',
      title: 'Forskjellen på garanti og reklamasjon',
      content: `Garanti er frivillig fra selger og kommer i tillegg til reklamasjonsretten. Hvis en butikk tilbyr "2 års garanti", kan det faktisk gi svakere beskyttelse enn reklamasjonsretten - fordi garantien ofte har flere unntak. Reklamasjonsretten etter forbrukerkjøpsloven er et minimum som ikke kan avtales bort.`,
    },
    {
      id: 'salg-service-vg1-1-7-example-1',
      type: 'example',
      title: 'Eksempel: Reklamasjon vs. angrefrist',
      problem: 'Hva er forskjellen på reklamasjon og angrerett?',
      solution: `**Reklamasjon:**
- Brukes når varen har feil eller mangel
- Gjelder i 2-5 år
- Kunden må vise at det er en feil
- Selger reparerer, bytter eller refunderer

**Eksempel:** Mobilen slutter å lade etter 8 måneder. Kunden reklamerer og får den reparert gratis.

**Angrerett:**
- Brukes når kunden ombestemmer seg
- Gjelder kun ved netthandel o.l.
- 14 dager fra mottak
- Kunden trenger ingen grunn

**Eksempel:** Kunden bestiller sko på nett, men de passer ikke til garderoben. Hun returnerer dem innen 14 dager og får pengene tilbake.`,
    },
    {
      id: 'salg-service-vg1-1-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-7-ex-1',
        number: '1.7.1',
        type: 'multiple-choice',
        task: 'Hvor lang er minimumsreklamasjonsfristen etter forbrukerkjøpsloven?',
        options: [
          { id: 'a', text: '14 dager', isCorrect: false },
          { id: 'b', text: '1 år', isCorrect: false },
          { id: 'c', text: '2 år', isCorrect: true },
          { id: 'd', text: '5 år', isCorrect: false },
        ],
        solution: 'Minimumsreklamasjonsfristen er 2 år. For varer med lengre forventet levetid (f.eks. hvitevarer, møbler) er fristen 5 år.',
      },
    },
    {
      id: 'salg-service-vg1-1-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-7-ex-2',
        number: '1.7.2',
        type: 'multiple-choice',
        task: 'Når gjelder angrerettloven?',
        options: [
          { id: 'a', text: 'Ved alle kjøp i butikk', isCorrect: false },
          { id: 'b', text: 'Ved netthandel, telefonsalg og dørsalg', isCorrect: true },
          { id: 'c', text: 'Bare ved kjøp over 1000 kroner', isCorrect: false },
          { id: 'd', text: 'Bare ved brukte varer', isCorrect: false },
        ],
        solution: 'Angrerettloven gjelder ved fjernsalg (netthandel, telefon) og salg utenfor fast utsalgssted (dørsalg, noen messer).',
      },
    },
    {
      id: 'salg-service-vg1-1-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-7-ex-3',
        number: '1.7.3',
        type: 'classic',
        task: 'En kunde kjøper en TV på nett og vil returnere den etter 10 dager fordi den ikke passer i stuen. Har kunden rett til dette?',
        hints: ['Tenk på angrerettloven og dens vilkår'],
        solution: 'Ja, kunden har rett til å returnere TV-en. Ved netthandel gjelder angrerettloven som gir 14 dagers angrefrist fra mottak. Kunden trenger ingen grunn for å angre. Kunden må selv betale returfrakt med mindre selger har opplyst om at de dekker det.',
      },
    },
    {
      id: 'salg-service-vg1-1-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-7-ex-4',
        number: '1.7.4',
        type: 'classic',
        task: 'Forklar forskjellen mellom garanti og reklamasjonsrett.',
        solution: 'Reklamasjonsrett er lovbestemt og gir forbrukere minimum 2 års rett til å klage på feil (5 år for varer med lengre levetid). Den kan ikke avtales bort. Garanti er frivillig fra selger og kommer i tillegg. Garantien kan ha egne vilkår og begrensninger, men den kan aldri gi svakere beskyttelse enn det loven gir.',
      },
    },
    {
      id: 'salg-service-vg1-1-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-7-ex-5',
        number: '1.7.5',
        type: 'classic',
        task: 'En kunde vil returnere undertøy kjøpt på nett, som de har prøvd. Må butikken ta det imot?',
        solution: 'Nei, dette er et unntak fra angrerettloven. Forseglede varer der forseglingen er brutt, og det ikke er mulig å returnere av hygieniske årsaker, er unntatt fra angrerett. Undertøy som er prøvd faller inn under dette unntaket.',
      },
    },
    {
      id: 'salg-service-vg1-1-7-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Forbrukerkjøpsloven** gir 2-5 års reklamasjonsrett på varer
- **Angrerettloven** gir 14 dagers angrefrist ved netthandel
- **Selgers plikter** inkluderer korrekt informasjon og reklamasjonshåndtering
- **Garanti** er frivillig og kommer i tillegg til lovbestemte rettigheter

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Reklamasjonsrett | Rett til å klage på feil (2-5 år) |
| Angrerett | Rett til å returnere uten grunn (14 dager) |
| Forbrukerkjøpsloven | Lov som beskytter forbrukere ved kjøp |
| Mangel | Feil eller svakhet ved varen |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const SALG_SERVICE_VG1_DEL1_CHAPTERS = [
  CHAPTER_SALG_SERVICE_VG1_1_1,
  CHAPTER_SALG_SERVICE_VG1_1_2,
  CHAPTER_SALG_SERVICE_VG1_1_3,
  CHAPTER_SALG_SERVICE_VG1_1_4,
  CHAPTER_SALG_SERVICE_VG1_1_5,
  CHAPTER_SALG_SERVICE_VG1_1_6,
  CHAPTER_SALG_SERVICE_VG1_1_7,
];
