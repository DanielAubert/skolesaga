/**
 * Norsk VG2 - Del 4: Kapittel 4.1-4.4
 * Språkhistorie
 */

import type { TextbookChapter } from '@/lib/types/textbook';
import {
  TEKST_VG2_KONGESPEILET,
  TEKST_VG2_ABSALON_BEYER,
  TEKST_VG2_PARALLELLE_BIBELTEKSTAR,
  TEKST_VG2_AASEN_PROEVER,
  TEKST_VG2_VINJE_FERDAMINNI,
} from './textbook-content-norsk-vg2-tekster';

// ============================================================================
// KAPITTEL 4.1: Fra norrønt til moderne norsk
// ============================================================================

export const CHAPTER_NORSK_VG2_4_1: TextbookChapter = {
  id: 'norsk-vg2-4-1',
  courseId: 'norsk-vg2',
  chapterNumber: '4.1',
  title: 'Fra norrønt til moderne norsk',
  description: 'Utforsk hvordan norsk språk har utviklet seg fra norrøn tid til i dag.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke fagspråk til å beskrive særtrekk ved norsk sammenlignet med norrønt',
    'gjøre rede for historisk bakgrunn for språksituasjonen i Norge',
  ],
  content: [
    {
      id: 'norsk-vg2-4-1-intro',
      type: 'text',
      content: `## Norsk språkhistorie - de store linjene

Norsk språk har gjennomgått store endringer fra norrøn tid til i dag. Forståelsen av denne utviklingen er nøkkelen til å forstå hvorfor vi har to skriftspråk, mange dialekter, og en komplisert språkpolitisk historie.

**Periodene**

*Urnordisk (ca. 200-700):* Det eldste stadiet vi kjenner gjennom runeinnskrifter.

*Norrønt (ca. 700-1350):* Vikingtid og tidlig middelalder. Sagaer og eddadikt ble skrevet.

*Mellomnorsk (ca. 1350-1525):* Perioden etter svartedauden. Stor språklig endring.

*Dansketiden (ca. 1525-1814):* Dansk var offisielt skriftspråk.

*Moderne norsk (fra 1814):* Utvikling av to norske skriftspråk.

**De viktigste endringene**

Fra norrønt til moderne norsk skjedde store endringer:
- Kasussystemet forsvant nesten helt
- Verbsystemet ble forenklet
- Mange lydendringer
- Stor påvirkning fra lavtysk
- Dansk skriftspråk erstattet norsk

**Svartedauden som vendepunkt**

Svartedauden (1349-50) tok livet av kanskje halvparten av befolkningen. Dette fikk store språklige konsekvenser:
- Den gamle overklassen ble desimert
- Skrivetradisjonen ble brutt
- Dansk ble dominerende skriftspråk
- Dialektene utviklet seg fritt`,
    },
    {
      id: 'norsk-vg2-4-1-def-1',
      type: 'definition',
      title: 'Språkhistoriske perioder',
      content: `**Urnordisk (ca. 200-700):** Eldste kjente stadium, runer.

**Norrønt (ca. 700-1350):** Vikingtid, sagalitteratur.

**Mellomnorsk (ca. 1350-1525):** Etter svartedauden, stor endring.

**Dansketiden (ca. 1525-1814):** Dansk skriftspråk.

**Moderne norsk (fra 1814):** Bokmål og nynorsk utvikles.

**Viktige endringer:**
- Kasus forsvinner
- Endelser faller bort
- Lavtysk påvirkning
- Dansk skriftspråk`,
    },
    {
      id: 'norsk-vg2-4-1-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Kongespeilet (utdrag, ca. 1250)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-4-1-primaertekst-1-text',
          type: 'text',
          content: `${TEKST_VG2_KONGESPEILET}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv hovedtrekkene i norsk språkhistorie.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke hovedperioder deler vi norsk språkhistorie inn i?',
            solution: 'Urnordisk, norrønt, mellomnorsk, dansketiden, moderne norsk.',
          },
          {
            label: 'b',
            task: 'Hvorfor var svartedauden viktig for språkutviklingen?',
            solution: 'Den desimerte overklassen, brøt skrivetradisjonen, og åpnet for dansk dominans.',
          },
        ],
        solution: 'Norsk språkhistorie viser store endringer gjennom tusen år.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken periode i norsk språkhistorie strekker seg fra ca. 700 til ca. 1350?',
        options: [
          'Urnordisk',
          'Norrønt',
          'Mellomnorsk',
          'Dansketiden',
        ],
        answer: 1,
        solution: 'Norrønt er perioden fra ca. 700 til ca. 1350. Dette var vikingtiden og tidlig middelalder, da sagaer og eddadikt ble skrevet.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva var en av de viktigste konsekvensene av svartedauden for norsk språk?',
        options: [
          'Norrønt ble offisielt skriftspråk',
          'Skrivetradisjonen ble brutt og dansk ble dominerende',
          'Dialektene forsvant',
          'Norsk ble påvirket av svensk',
        ],
        answer: 1,
        solution: 'Svartedauden desimerte den norske overklassen og brøt den gamle skrivetradisjonen. Det åpnet for at dansk overtok som skriftspråk.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'List opp tre viktige endringer som skjedde fra norrønt til moderne norsk.',
        hints: ['Tenk på grammatikk, lyd og påvirkning fra andre språk.'],
        solution: 'Tre viktige endringer: (1) Kasussystemet forsvant nesten helt, (2) verbsystemet ble forenklet, og (3) lavtysk påvirkning ga mange nye låneord. I tillegg kom store lydendringer og overgang til dansk skriftspråk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les utdraget fra Kongespeilet. Pek på trekk i teksten som viser at dette er en eldre form for norsk. Hva er likt og hva er ulikt moderne norsk?',
        hints: [
          'Se på ordvalg, setningsoppbygging og formuleringer.',
          'Sammenlign med hvordan du selv ville skrevet det samme innholdet i dag.',
        ],
        solution: 'Kongespeilet er oversatt til en mer tilgjengelig form, men viser likevel trekk fra mellomalderens norsk: høytidelig stil, dialogform med formelt tiltale (far/sønn), og et ordforråd som delvis skiller seg fra moderne norsk. Setningsoppbyggingen er mer kompleks enn dagens uformelle norsk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som menes med at norrønt hadde et kasussystem. Gi eksempler på hvordan moderne norsk har mistet dette.',
        hints: ['Kasus viser ordets funksjon i setningen gjennom endelser.'],
        solution: 'Norrønt hadde fire kasus: nominativ, akkusativ, dativ og genitiv. Ordene fikk ulike endelser avhengig av funksjonen i setningen. For eksempel het det "maðr" (mann, nominativ) og "mann" (akkusativ). I moderne norsk bruker vi i stedet ordrekkefølge og preposisjoner for å vise funksjonen. Vi sier "mannen ga boka til gutten" i stedet for å bruke kasusendelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lavtysk hadde stor innflytelse på norsk i middelalderen. Gjør rede for hvorfor denne påvirkningen var så sterk, og gi fem eksempler på lavtyske lånord vi fortsatt bruker.',
        hints: [
          'Hanseatene drev handel langs norskekysten.',
          'Tenk på ord for handel, håndverk og dagligliv.',
        ],
        solution: 'Hansaforbundet dominerte handelen i Nordsjøområdet, og tyske kjøpmenn var sterkt til stede i norske byer, særlig Bergen (Bryggen). Lavtysk var handelens språk. Eksempler på lånord: "betale" (betalen), "flink" (flink), "snekker" (snecker), "plass" (plats), "handel" (handel). Påvirkningen var så sterk fordi den kom gjennom daglig kontakt i handel og håndverk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft påstanden: "Svartedauden var den viktigste enkelthendelsen i norsk språkhistorie." Bruk eksempler fra pensum.',
        hints: [
          'Vurder hva som hadde skjedd uten svartedauden.',
          'Kunne dansketiden fått samme virkning uten pesten?',
          'Tenk også på andre viktige hendelser som reformasjonen.',
        ],
        solution: 'Argumenter for: Svartedauden brøt skrivetradisjonen, desimerte overklassen, og åpnet for dansk dominans. Uten pesten kunne norsk skriftspråk ha overlevd. Argumenter mot: Kalmarunionen og reformasjonen ville uansett ha styrket dansk innflytelse. Svensk greide å beholde sitt skriftspråk tross unioner. Konklusjonen bør nyansere og vise at det var et samspill av faktorer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-1-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign utviklingen av norsk og islandsk etter vikingtiden. Begge språkene stammer fra norrønt, men har utviklet seg svært ulikt. Forklar hvorfor.',
        hints: [
          'Island var isolert, Norge var i union med Danmark.',
          'Tenk på geografisk isolasjon, politiske forhold og skrifttradisjon.',
        ],
        solution: 'Islandsk har beholdt mye av den norrøne grammatikken, inkludert kasussystemet, fordi Island var geografisk isolert og hadde en ubrutt skrifttradisjon. Norge ble derimot sterkt påvirket av dansk gjennom unionstiden, lavtysk gjennom handelen, og mistet sin skrivetradisjon etter svartedauden. Resultatet er at en islending i dag kan lese sagaene i original, mens en nordmann trenger oversettelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-1-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst (300-400 ord) der du forklarer norsk språkhistorie for en utenlandsk venn som lurer på hvorfor Norge har to skriftspråk.',
        hints: [
          'Start med norrønt som felles utgangspunkt.',
          'Forklar svartedaudens rolle og dansketiden.',
          'Avslutt med Aasen og Knudsen.',
        ],
        solution: 'Teksten bør forklare norrønt som utgangspunkt, svartedauden som vendepunkt, dansketiden som forklaring på at norsk mistet sitt skriftspråk, og de to strategiene for å gjenopprette norsk (Aasens landsmål og Knudsens fornorsking av dansk) som forklaring på at Norge i dag har to skriftspråk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-1-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'lett',
        task: 'Lag en tidslinje over norsk språkhistorie med de viktigste periodene og hendelsene.',
        hints: ['Bruk periodene fra definisjonsblokken. Legg inn minst to viktige hendelser per periode.'],
        solution: 'Tidslinjen bør inneholde: Urnordisk (200-700, runeinnskrifter), Norrønt (700-1350, sagalitteratur, vikingferder), Mellomnorsk (1350-1525, svartedauden 1349-50, Kalmarunionen 1397), Dansketiden (1525-1814, reformasjonen 1536, all skrift på dansk), Moderne norsk (fra 1814, Ivar Aasen, Knud Knudsen, rettskrivingsreformer).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.2: Dansk-norsk og fornorskning
// ============================================================================

export const CHAPTER_NORSK_VG2_4_2: TextbookChapter = {
  id: 'norsk-vg2-4-2',
  courseId: 'norsk-vg2',
  chapterNumber: '4.2',
  title: 'Dansk-norsk og fornorskning',
  description: 'Utforsk hvordan dansketiden påvirket norsk og hvordan fornorskingen skjedde.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjøre rede for historisk bakgrunn for språksituasjonen i Norge',
    'bruke fagspråk til å beskrive særtrekk ved norsk sammenlignet med dansk',
  ],
  content: [
    {
      id: 'norsk-vg2-4-2-intro',
      type: 'text',
      content: `## Dansketiden og språket - 400 år som formet norsk

I nesten 400 år (1397-1814) var Norge i union med Danmark. I denne perioden ble dansk det eneste skriftspråket i Norge, mens dialektene levde videre som talespråk. Fornorskingen av skriftspråket etter 1814 er en av de mest omtalte prosessene i norsk språkhistorie.

**Hvordan dansk ble Norges skriftspråk**

Prosessen skjedde gradvis:

*Kalmarunionen (1397):* Norge, Sverige og Danmark forenes. Dansk blir felles administrasjonsspråk.

*Reformasjonen (1536):* Den danske Bibelen og dansk kirkespråk innføres. Norge blir en dansk provins.

*Skolegang og litteratur:* All utdanning og alt trykt materiale er på dansk.

*Embetsverket:* Alle offentlige dokumenter skrives på dansk av danske eller danskutdannede embetsmenn.

**Hva skjedde med norsk?**

Norsk forsvant som skriftspråk, men levde videre som talespråk:

*Dialektene:* Bønder og arbeidsfolk fortsatte å snakke sine dialekter. Disse var direkte arvtakere fra norrønt/mellomnorsk.

*Dannet dagligtale:* I byene utviklet overklassen et talespråk basert på dansk, men med norsk uttale og noen norske ord.

*Ingen norsk standard:* Det fantes ingen "norsk" å falle tilbake på - bare dansk og lokale dialekter.

**Fornorskingen etter 1814**

Etter at Norge ble selvstendig i 1814, begynte to parallelle prosesser:

*Ivar Aasens vei (landsmål):*
Aasen bygde et nytt skriftspråk fra bunnen, basert på dialektene. Dette ble landsmål (nynorsk).

*Knud Knudsens vei (riksmål):*
Knudsen og andre ville fornorske dansken innenfra - bytte ut danske ord og former med norske. Dette ble riksmål (bokmål).

**Eksempler på fornorsking**

Dansk form -> Bokmål i dag:
- "Bog" -> "Bok"
- "Gade" -> "Gate"
- "Brød" -> "Brød" (samme)
- "mig, dig, sig" -> "meg, deg, seg"
- "have" -> "ha"
- "skrive" (med bløt d) -> "skrive" (med hard d)

Noen danske former er beholdt:
- "Sprog" (dansk) vs. "språk" (norsk form, innført gradvis)

**"Dannet dagligtale" som norm**

Knud Knudsens hovedidé var at skriftspråket skulle gjenspeile "den dannede dagligtale" - slik de utdannede i byene snakket. Dette var et kontroversielt valg:

- Det favoriserte bybefolkningen
- Det holdt på mange danske trekk
- Men det var praktisk - folk måtte ikke lære noe helt nytt

**Fornorskingsreformene**

Gjennom flere rettskrivingsreformer ble bokmål gradvis fornorsket:

*1907:* Obligatorisk harde konsonanter (p, t, k for b, d, g)
*1917:* Mange norske former innført som valgfrie
*1938:* Radikal reform med mange "folkelige" former
*1959, 1981, 2005:* Justeringer og liberaliseringer

**Resultatet**

Bokmål i dag er et særegent språk - verken dansk eller norrønt, men noe midt imellom. Det bærer spor av 400 års danskestyre, men også av 200 års fornorsking.

Nynorsk har holdt seg nærmere dialektene og norrønt, men har også gjennomgått endringer og tilnærminger til bokmål.`,
    },
    {
      id: 'norsk-vg2-4-2-def-1',
      type: 'definition',
      title: 'Dansketiden og fornorsking - begreper',
      content: `**Dansketiden:** Perioden 1397-1814 da Norge var i union med Danmark og dansk var skriftspråk.

**Dannet dagligtale:** Talemålet til utdannede mennesker i byene - dansk med norsk uttale.

**Fornorsking:** Prosessen med å gjøre skriftspråket mer norsk, enten ved å bytte ut danske former (bokmål) eller bygge nytt fra dialektene (nynorsk).

**Eksempler på lydlige forskjeller dansk/norsk:**
- Danske bløte konsonanter (b, d, g) -> norske harde (p, t, k)
- Dansk "stød" finnes ikke i norsk
- Dansk "æ" -> norsk "e" i mange ord

**Viktige reformer:**
- 1907: Harde konsonanter obligatoriske
- 1917: Mange valgfrie norske former
- 1938: Radikal fornorsking
- 1959, 1981, 2005: Justeringer`,
    },
    {
      id: 'norsk-vg2-4-2-example-1',
      type: 'example',
      title: 'Eksempel: Tekstutvikling fra dansk til bokmål',
      problem: `Sammenlign disse versjonene av samme setning:

**Dansk (ca. 1800):**
"Jeg veed ikke hvad jeg skal gjøre med denne Bog."

**Riksmål 1907:**
"Jeg vet ikke hvad jeg skal gjøre med denne Bok."

**Bokmål 1938:**
"Jeg veit ikke hva jeg skal gjøre med denne boka."

**Bokmål i dag:**
"Jeg vet ikke hva jeg skal gjøre med denne boka/boken."

Analyser hvilke endringer som er gjort og hvorfor.`,
      solution: `**Analyse av endringene:**

**"veed" -> "vet":**
Dansk hadde dobbel vokal, norsk har enkel. "vet" speiler norsk uttale.

**"hvad" -> "hva":**
Stumme d-er fjernes. Vi uttaler ikke d-en.

**"gjøre" -> "gjøre":**
Denne formen er lik. Noen danske former beholdes.

**"Bog" -> "Bok" -> "boka/boken":**
- Bløt g -> hard k (uttalen i Norge)
- Stor forbokstav -> liten (norsk praksis)
- "boken" er tradisjonell form, "boka" er folkelig form innført i 1938

**"veed" -> "vet" -> "veit":**
"veit" er den folkelige formen, tillatt fra 1938 men ikke lenger eneform.

**Hva viser dette?**
1. Fornorskingen handlet mye om å speile norsk uttale
2. Reformene ga ofte valgfrihet mellom tradisjonelle og folkelige former
3. Dagens bokmål er et kompromiss med mange valgmuligheter
4. Endringene skjedde gradvis over 200 år`,
    },
    {
      id: 'norsk-vg2-4-2-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Absalon Pederssøn Beyer - Dagbok (ca. 1560-70)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-4-2-primaertekst-1-text',
          type: 'text',
          content: `${TEKST_VG2_ABSALON_BEYER}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvordan dansk ble Norges skriftspråk.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke faktorer førte til at dansk erstattet norsk som skriftspråk?',
            solution: 'Kalmarunionen med dansk administrasjon, reformasjonen med dansk bibel og kirkespråk, danske embetsmenn, all utdanning og trykk på dansk.',
          },
          {
            label: 'b',
            task: 'Hva skjedde med det norske talespråket i dansketiden?',
            solution: 'Dialektene levde videre blant folk flest. Overklassen i byene utviklet "dannet dagligtale" - dansk med norsk uttale. Ingen norsk standard fantes.',
          },
          {
            label: 'c',
            task: 'Hva var forskjellen på Aasens og Knudsens fornorskingsstrategier?',
            solution: 'Aasen bygde nytt språk fra dialektene (nynorsk). Knudsen ville fornorske dansken gradvis innenfra (bokmål).',
          },
        ],
        solution: 'Dansketiden skapte den særegne norske språksituasjonen vi fortsatt lever med.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Studer fornorskingen av bokmål.',
        subTasks: [
          {
            label: 'a',
            task: 'Gi tre eksempler på ord der bokmål har erstattet danske former med norske.',
            solution: 'Eksempler: veed->vet, gade->gate, bog->bok, mig->meg, have->ha, sprog->språk.',
          },
          {
            label: 'b',
            task: 'Hva menes med "harde" og "bløte" konsonanter?',
            solution: 'Harde: p, t, k. Bløte: b, d, g. Dansk har ofte bløte konsonanter der norsk har harde (f.eks. "gab" vs. "gap").',
          },
          {
            label: 'c',
            task: 'Hvorfor er bokmål verken helt dansk eller helt norsk?',
            solution: 'Bokmål er fornorsket dansk - det beholder mye dansk struktur og ordforråd, men har fått norske lydtrekk og noen norske former. Det er et kompromiss.',
          },
        ],
        solution: 'Bokmål er et unikt språk formet av 400 års danskestyre og 200 års fornorsking.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva var Knud Knudsens hovedidé for å utvikle et norsk skriftspråk?',
        options: [
          'Bygge et helt nytt språk basert på dialektene',
          'Fornorske det danske skriftspråket innenfra, basert på "dannet dagligtale"',
          'Gjeninnføre norrønt som skriftspråk',
          'Bruke svensk som modell for et norsk skriftspråk',
        ],
        answer: 1,
        solution: 'Knud Knudsen ville fornorske det eksisterende dansk-norske skriftspråket gradvis, basert på hvordan de utdannede i byene snakket ("dannet dagligtale"). Denne strategien førte til det vi i dag kaller bokmål.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken reform innførte obligatorisk bruk av harde konsonanter (p, t, k) i bokmål?',
        options: [
          'Reformen i 1885',
          'Reformen i 1907',
          'Reformen i 1917',
          'Reformen i 1938',
        ],
        answer: 1,
        solution: 'Rettskrivingsreformen i 1907 innførte obligatorisk bruk av harde konsonanter i stedet for de danske bløte konsonantene. For eksempel ble "gab" til "gap" og "Bog" til "Bok".',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar kort hva som menes med "dannet dagligtale" og hvem som brukte dette begrepet.',
        hints: ['Tenk på hvem som brukte dette språket og hvordan det skilte seg fra dialektene.'],
        solution: '"Dannet dagligtale" var begrepet Knud Knudsen brukte for å beskrive talemålet til utdannede mennesker i byene. Det var et dansk-norsk blandingsspråk: dansk i grunnstrukturen, men med norsk uttale og noen norske ord. Knudsen mente dette burde være grunnlaget for det norske skriftspråket.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les utdraget fra Absalon Pederssøn Beyers dagbok. Hvilke trekk i teksten viser at den er skrevet i en tid da dansk og norsk var blandet? Pek på konkrete eksempler.',
        hints: [
          'Se på ordformer, setningsstruktur og stavemåter.',
          'Er det noen ord som virker mer danske enn norske, eller omvendt?',
        ],
        solution: 'Beyers dagbok viser et blandingsspråk der dansk skrifttradisjon møter norsk virkelighet. Danske trekk: stavemåter som "Ildebrand", "Oedelaeggelse", høytidelig stil. Teksten er skrevet av en bergenser på dansk, men handler om norske forhold. Det viser hvordan nordmenn måtte bruke et fremmed skriftspråk for å beskrive sin egen hverdag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign reformene i 1907 og 1938. Hva var hensikten med hver reform, og hvordan ble de mottatt?',
        hints: [
          'Reformen i 1907 handlet mest om lydtrekk, 1938 gikk lenger.',
          'Tenk på hvem som støttet og hvem som var imot.',
        ],
        solution: 'Reformen i 1907 innførte harde konsonanter og noen norske former, og var relativt lite kontroversiell. Reformen i 1938 var langt mer radikal: den innførte mange folkelige former (a-endelser i hunkjønn, diftong osv.) og hadde som mål å nærme bokmål og nynorsk til hverandre (samnorskpolitikken). 1938-reformen møtte sterk motstand, særlig fra konservative bokmålsbrukere, og deler av den ble rullet tilbake i senere reformer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-2-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft fordeler og ulemper ved de to fornorskingsstrategiene (Aasens og Knudsens). Hvilken strategi mener du var mest vellykket, og hvorfor?',
        hints: [
          'Tenk på praktiske og prinsipielle hensyn.',
          'Hvem ble inkludert og ekskludert av de to strategiene?',
          'Vurder resultatet i dag.',
        ],
        solution: 'Aasens strategi: Fordel - bygde et genuint norsk språk basert på folkets eget mål. Ulempe - krevde at folk lærte noe helt nytt, favoriserte bygdekultur. Knudsens strategi: Fordel - praktisk, bygde på eksisterende skrifttradisjon. Ulempe - beholdt mange danske trekk, favoriserte byene. I dag bruker flertallet bokmål (Knudsens linje), men nynorsk (Aasens linje) har en viktig kulturell posisjon og er likestilt i loven.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-2-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Reformasjonen i 1536 innførte den danske Bibelen i Norge. Skriv et essay (400-500 ord) om hvordan dette ene grepet fikk vidtrekkende konsekvenser for norsk språk.',
        hints: [
          'Bibelen var den viktigste boka de fleste hadde tilgang til.',
          'Kirken var sentral i utdanning.',
          'Tenk på paralleller til andre land (f.eks. Martin Luthers bibel og tysk).',
        ],
        solution: 'Essayet bør drøfte: Bibelen som kulturbærende bok, kirkens rolle i utdanning og kulturformidling, hvordan et religiøst skriftspråk påvirker all annen skrift, sammenligning med hvordan Luthers bibel formet tysk, og de langsiktige konsekvensene for norsk identitet og språkbevissthet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-2-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn en kort tekst skrevet på dansk (f.eks. en avisartikkel eller blogginnlegg) og "fornorsk" den til bokmål. Forklar endringene du gjør.',
        hints: [
          'Se etter bløte konsonanter, danske ord og stavemåter.',
          'Bruk eksemplene fra kapittelet som modell.',
        ],
        solution: 'Besvarelsen bør vise at eleven kan identifisere danske trekk (bløte konsonanter, danske ord, stavemåter) og erstatte dem med norske former. Forklaringen bør vise forståelse for de systematiske forskjellene mellom dansk og bokmål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-2-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'lett',
        task: 'Lag en oversikt over de viktigste rettskrivingsreformene i bokmålets historie. Nevn årstall og hva som var hovedendringen i hver reform.',
        hints: ['Bruk informasjonen fra kapittelet.'],
        solution: '1907: Obligatorisk harde konsonanter (p, t, k for b, d, g). 1917: Mange norske former innført som valgfrie. 1938: Radikal reform med folkelige former (a-endelser, diftonger). 1959: Læreboknormalen strammet inn. 1981: Liberalisering, flere valgmuligheter. 2005: Videre justeringer og fjerning av noen radikale former.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.3: Sammenligning - norsk, svensk, dansk
// ============================================================================

export const CHAPTER_NORSK_VG2_4_3: TextbookChapter = {
  id: 'norsk-vg2-4-3',
  courseId: 'norsk-vg2',
  chapterNumber: '4.3',
  title: 'Sammenligning - norsk, svensk, dansk',
  description: 'Utforsk likhetene og forskjellene mellom de skandinaviske språkene.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke fagspråk til å beskrive særtrekk ved norsk sammenlignet med svensk, dansk og norrønt',
    'gjøre rede for historisk bakgrunn for språksituasjonen i Norge',
  ],
  content: [
    {
      id: 'norsk-vg2-4-3-intro',
      type: 'text',
      content: `## De skandinaviske språkene - søsken med ulike personligheter

Norsk, svensk og dansk stammer alle fra norrønt og er så nært beslektet at vi ofte kan forstå hverandre. Likevel har de utviklet seg i ulike retninger. Å kjenne forskjellene og likhetene mellom de skandinaviske språkene gir innsikt i vår egen språkhistorie.

**Felles opphav**

Alle tre språkene stammer fra urnordisk og norrønt. I vikingtiden (ca. 800-1050) var forskjellene mellom nordboernes språk små - en nordmann og en danske kunne forstå hverandre uten problemer.

Gradvis utviklet østnordisk (dansk, svensk) og vestnordisk (norsk, islandsk, færøysk) seg i ulike retninger. Etter middelalderen forsterket nasjonale grenser og ulik historie forskjellene ytterligere.

**Norsk i dag**

Norge har en unik språksituasjon:

- To offisielle skriftspråk (bokmål og nynorsk)
- Stor dialekttoleranse i offentligheten
- Bokmål ligger nær dansk i struktur, men har norske lydtrekk
- Nynorsk ligger nærmere norrønt og islandsk

**Svensk**

Svensk er det skandinaviske språket med flest morsmålstalere (ca. 10 millioner).

*Kjennetegn:*
- Spesiell tonelagsmelodi ("melodisk aksent")
- Mange ordforrådsforskjeller fra dansk/norsk
- En skriftspråksstandard (rikssvenska)
- Uttalemessig nærmere norsk enn dansk

**Dansk**

Dansk var lenge det kulturelt dominerende språket i Skandinavia.

*Kjennetegn:*
- Redusert uttale - mange lyder "svelges"
- Stød (glottal lukkelyd) finnes ikke i norsk/svensk
- Tett på bokmål i skrift, men ulikt i uttale
- Mange skandinaver synes dansk er vanskelig å forstå muntlig

**Likheter**

De skandinaviske språkene har mye til felles:

*Ordforråd:*
Det grunnleggende ordforrådet er likt: hus, mann, kvinne, barn, gå, komme, etc.

*Grammatikk:*
- To kjønn (felleskjønn + nøytrum) eller tre kjønn
- Etterstilt artikkel (huset, mannen)
- Lignende setningsstruktur (SVO)
- Lignende verbsystem

*Gjensidig forståelighet:*
Med litt trening kan skandinaver forstå hverandre, særlig i skrift.

**Forskjeller**

*Lydlige forskjeller:*
- Dansk har bløte konsonanter og stød
- Norsk og svensk har tonelag (ordmelodi)
- Svensk har spesiell vokal (u-lyd)
- Dansk uttale er "lukket", svensk mer "melodisk"

*Ordforråd som skiller:*
| Norsk | Svensk | Dansk |
|-------|--------|-------|
| morsom | rolig | sjov |
| rask | snabb | hurtig |
| annerledes | annorlunda | anderledes |
| ganske | ganska | ret |

*Grammatiske forskjeller:*
- Norsk/dansk: to kjønn i bokmål, tre i nynorsk
- Svensk: to kjønn (en-ord, ett-ord)
- Ulike ord for "ikke": norsk "ikke", svensk "inte", dansk "ikke"

**Inter-skandinavisk kommunikasjon**

Skandinaver kan ofte forstå hverandre, men det varierer:

- Nordmenn forstår dansk og svensk best (eksponering for begge)
- Svensker forstår norsk bra, dansk dårligere
- Dansker har oftest størst problemer

Grunner til at nordmenn forstår best:
1. Bokmål ligner dansk i skrift
2. Norsk uttale ligner svensk
3. Vi er vant til to målformer og dialektvariasjon

**Skandinavisk språkfellesskap**

De nordiske landene samarbeider om å bevare den gjensidige forståeligheten. Man kan bruke sitt eget språk i offisielle nordiske sammenhenger. Men engelsk tar over som felles språk blant yngre generasjoner.`,
    },
    {
      id: 'norsk-vg2-4-3-def-1',
      type: 'definition',
      title: 'Skandinaviske språkforskjeller',
      content: `**Lydlige forskjeller:**

**Tonelag:** Norsk og svensk har to toner som skiller ord (bønder/bønner). Dansk har ikke.

**Stød:** Dansk har en "glottal lukkelyd" som norsk/svensk mangler.

**Bløte/harde konsonanter:** Dansk har bløte (b, d, g), norsk ofte harde (p, t, k).

**Ordforråd - eksempler:**
| Norsk | Svensk | Dansk | Betydning |
|-------|--------|-------|-----------|
| morsom | rolig | sjov | funny |
| hyggelig | trevlig | hyggelig | nice |
| ganske | ganska | ret | quite |
| aldri | aldrig | aldrig | never |

**Grammatikk:**
- Etterstilt artikkel i alle tre (huset, huset, huset)
- Norsk/nynorsk har tre kjønn, bokmål/dansk/svensk har to
- Ulik verbøyning i presens: norsk "snakker", svensk "pratar", dansk "taler"`,
    },
    {
      id: 'norsk-vg2-4-3-example-1',
      type: 'example',
      title: 'Eksempel: Samme tekst på tre språk',
      problem: `Les teksten på norsk, svensk og dansk:

**Norsk (bokmål):**
"Det var en gang en mann som bodde i en liten hytte ved sjøen. Hver morgen gikk han ut for å fiske."

**Svensk:**
"Det var en gång en man som bodde i en liten stuga vid sjön. Varje morgon gick han ut för att fiska."

**Dansk:**
"Der var engang en mand som boede i en lille hytte ved søen. Hver morgen gik han ud for at fiske."

Analyser likhetene og forskjellene.`,
      solution: `**Analyse:**

**Fullstendig like ord:**
- en, som, i, han, for

**Nesten like ord (ortografisk variasjon):**
- mann/man/mand (norsk, svensk, dansk)
- bodde/bodde/boede
- liten/liten/lille
- morgen/morgon/morgen
- gikk/gick/gik
- fiske/fiska/fiske

**Helt ulike ord:**
- gang/gång/gang (samme opprinnelse, ulik staving)
- hytte/stuga/hytte (svensk har annet ord)
- sjøen/sjön/søen (ulik vokal)
- hver/varje/hver (svensk skiller seg ut)

**Grammatiske forskjeller:**
- Bestemt form: sjøen/sjön/søen (uttale ulik)
- "at fiske" (dansk) vs. "å fiske" (norsk) vs. "att fiska" (svensk)

**Hovedobservasjoner:**

1. *Norsk og dansk er nærmest i skrift* - bokmålet er fornorsket dansk

2. *Norsk og svensk er nærmest i uttale* - de deler tonelag og har lignende lydstruktur

3. *Grunnvokabularet er svært likt* - alle skandinaver kan følge teksten

4. *Småord og grammatiske markører varierer* - "varje" vs "hver", verbendelser, artikler

**Konklusjon:**
Skandinavene kan lese hverandres tekster med litt øvelse. Norsk har en mellomposisjon: skriftlig nær dansk, lydlig nær svensk.`,
    },
    {
      id: 'norsk-vg2-4-3-tip-1',
      type: 'tip',
      title: 'Tips for å forstå svensk og dansk',
      content: `**Slik forstår du de andre skandinaviske språkene bedre:**

**For dansk:**
- Vær forberedt på at uttalen er annerledes enn skriftbildet
- Lytt til tempoet - danske slår ofte lyder sammen
- Kjenn igjen ordforrådet fra bokmål
- Stødet høres ut som en liten pause midt i ordet

**For svensk:**
- Lytt til melodien - svensk har tydelig "syngende" toneleie
- "U" uttales ofte annerledes enn på norsk
- Mange ord er like, men med annen staving
- Endelsen "-er" blir ofte "-ar" (snakker -> pratar)

**Generelle tips:**
- Les skandinaviske aviser og bøker
- Se svenske og danske filmer/serier
- Besøk nabolandene og snakk med folk
- Ikke vær redd for å spørre om du ikke forstår
- Bruk ditt eget språk tydelig og sakte

**Falske venner - ord som ser like ut men betyr noe annet:**
- Norsk "rar" = svensk "rar" (=kjær), men dansk "rar" (=merkelig)
- "Rolig" betyr "morsom" på svensk, "calm" på norsk
- "Frokost" er tidlig på norsk/dansk, sen på svensk`,
    },
    {
      id: 'norsk-vg2-4-3-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Fadervår på tre skandinaviske språk',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-4-3-primaertekst-1-text',
          type: 'text',
          content: `${TEKST_VG2_PARALLELLE_BIBELTEKSTAR}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign de skandinaviske språkene.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva har norsk, svensk og dansk til felles?',
            solution: 'Felles opphav fra norrønt, likt grunnvokabular, lignende grammatikk (etterstilt artikkel, SVO-rekkefølge, lignende verbsystem), gjensidig forståelighet.',
          },
          {
            label: 'b',
            task: 'Hva er de viktigste lydlige forskjellene mellom språkene?',
            solution: 'Dansk har stød og bløte konsonanter, norsk/svensk har tonelag. Dansk uttale er mer "lukket", svensk mer melodisk. Norsk har flest dialektvariasjoner.',
          },
          {
            label: 'c',
            task: 'Hvorfor forstår nordmenn ofte svensk og dansk bedre enn svensker og dansker forstår hverandre?',
            solution: 'Bokmål ligner dansk i skrift, norsk uttale ligner svensk. Nordmenn er vant til to målformer og stor dialektvariasjon, så de er mer fleksible.',
          },
        ],
        solution: 'De skandinaviske språkene er nært beslektet, men har utviklet ulike særtrekk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Arbeid med ordforråd.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn fem norske ord og oppgi tilsvarende på svensk og dansk. Kommenter likhetene/forskjellene.',
            solution: 'Eksempel: snakke-prata-tale, morsom-rolig-sjov, ganske-ganska-ret, hyggelig-trevlig-hyggelig, annerledes-annorlunda-anderledes. Noen er like, andre helt ulike.',
          },
          {
            label: 'b',
            task: 'Hva er "falske venner" mellom skandinaviske språk? Gi eksempler.',
            solution: 'Ord som ser like ut men betyr noe annet: "rolig" (no: calm, sv: morsom), "rar" (varierende betydning), "frokost" (ulikt tidspunkt).',
          },
        ],
        solution: 'Kunnskap om ordforrådsforskjeller gjør inter-skandinavisk kommunikasjon lettere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er tonelag?',
        options: [
          'Et fenomen der ordmelodien skiller ord med ulik betydning, som finnes i norsk og svensk',
          'Et dansk fenomen der en pause midt i ordet skiller betydninger',
          'En spesiell uttale av vokaler som bare finnes i dansk',
          'En felles skandinavisk betoning som alle tre språkene deler',
        ],
        answer: 0,
        solution: 'Tonelag (ordmelodi) finnes i norsk og svensk, men ikke i dansk. Det betyr at ulik tonegang kan skille ord som ellers skrives likt, for eksempel "bønder" (flertall av bonde) og "bønner" (flertall av bønne).',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket av de skandinaviske språkene oppfattes vanligvis som vanskeligst å forstå muntlig for de andre?',
        options: [
          'Norsk',
          'Svensk',
          'Dansk',
          'Alle er like vanskelige',
        ],
        answer: 2,
        solution: 'Dansk oppfattes som vanskeligst å forstå muntlig, fordi dansk uttale er svært redusert - mange lyder "svelges". Dansk har også stød, som norsk og svensk mangler. Undersøkelser viser at dansker selv har størst problemer med å forstå de andre skandinaviske språkene.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-4-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Lag en tabell med minst åtte ord som er ulike på norsk, svensk og dansk. Bruk eksemplene fra kapittelet og finn minst tre nye selv.',
        hints: ['Bruk en ordbok eller nett om du trenger hjelp.'],
        solution: 'Tabellen bør inneholde eksempler fra teksten (morsom/rolig/sjov, rask/snabb/hurtig, ganske/ganska/ret osv.) pluss egne funn. Andre muligheter: rar/rar/rar (ulikt betydning), frokost/frukost/morgenmad, leke/leka/lege, kjøkken/kök/køkken.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les Fadervår-teksten på alle fire varianter (bokmål, svensk, dansk, nynorsk). Pek på konkrete likheter og forskjeller mellom de fire versjonene.',
        hints: [
          'Sammenlign ord for ord der det er mulig.',
          'Legg merke til hvilke to varianter som ligner mest.',
        ],
        solution: 'Analyse bør inkludere: Bokmål og dansk er nærmest i ordvalg og struktur (f.eks. "du som er i himmelen"), men nynorsk har noen formuleringer som ligger nærmere svensk (f.eks. "Lat" vs. "La"). Svensk har tydelige egne former som "Helgat varde", "Tillkomme". Alle fire er gjenkjennelige som samme tekst, noe som viser det felles opphavet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som menes med at norsk har en "mellomposisjon" blant de skandinaviske språkene. Bruk konkrete eksempler.',
        hints: [
          'Tenk på forholdet til dansk i skrift og svensk i uttale.',
          'Hva betyr det at nordmenn er vant til dialektvariasjon?',
        ],
        solution: 'Norsk har en mellomposisjon fordi bokmål ligner dansk i skrift (fornorsket dansk), mens norsk uttale ligner mer på svensk (tonelag, harde konsonanter). I tillegg er nordmenn vant til to skriftspråk og mange dialekter, noe som gir større språklig fleksibilitet. Eksempler: "huset" skrives likt på alle tre, men uttales mer likt på norsk og svensk (med tonelag). Bokmål "bok" ligner dansk "bog" i opprinnelse, men uttalen er norsk/svensk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-3-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft påstanden: "Engelsk er i ferd med å erstatte skandinavisk som felles kommunikasjonsspråk i Norden." Er dette en positiv eller negativ utvikling?',
        hints: [
          'Tenk på praktiske og kulturelle konsekvenser.',
          'Hva mister vi, og hva vinner vi?',
          'Finnes det måter å bevare det skandinaviske språkfellesskapet på?',
        ],
        solution: 'Drøftingen bør ta opp: Argumenter for at engelsk tar over (globalisering, mediepåvirkning, ungdom velger engelsk). Konsekvenser av dette (tap av kulturfellesskap, domenetap for skandinavisk). Motargumenter (engelsk gjør det lettere å kommunisere med hele verden, skandinavisk forståelighet er uansett begrenset). Balanserte tiltak (bevare nabospråksundervisning, bruke eget språk i nordiske sammenhenger).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-3-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn en kort svensk eller dansk tekst (nyhetssak, blogg eller lignende) og oversett den til norsk. Kommenter hvilke endringer du må gjøre og hvilke deler som er like.',
        hints: [
          'Bruk en nettavis fra Sverige eller Danmark.',
          'Legg merke til hvilke ord som er identiske, nesten like og helt ulike.',
        ],
        solution: 'Besvarelsen bør inneholde originalteksten, oversettelsen og en kommentar som viser forståelse for systematiske forskjeller (ordforråd, grammatikk, ortografi). Eleven bør kunne peke på at grunnstrukturen ofte er svært lik, mens enkeltord og uttrykksmåter varierer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-3-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I vikingtiden snakket skandinavene tilnærmet samme språk. Gjør rede for hvorfor og hvordan de skandinaviske språkene har utviklet seg i ulike retninger siden da.',
        hints: [
          'Tenk på politiske grenser, nasjonalstater, og kulturell utvikling.',
          'Hva betyr det at østnordisk og vestnordisk skilte lag?',
        ],
        solution: 'Utviklingen skyldes flere faktorer: (1) Politisk: nasjonale grenser begrenset kontakt, (2) Geografisk: fjell og hav skapte isolasjon, (3) Kulturelt: ulike kulturelle impulser (dansk påvirket av tysk, svensk mer selvstendig, norsk under dansk styre), (4) Lingvistisk: naturlige lydendringer gikk i ulike retninger (stød i dansk, tonelag i norsk/svensk). Østnordisk (dansk/svensk) skilte seg tidlig fra vestnordisk (norsk/islandsk). Norsk endte i en mellomposisjon grunnet dansk skrifttradisjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-3-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar hva "falske venner" er, og gi tre eksempler på falske venner mellom skandinaviske språk.',
        hints: ['Se på tipsboksen i kapittelet.'],
        solution: 'Falske venner er ord som ser like ut på ulike språk men har ulik betydning. Eksempler: (1) "rolig" betyr "calm" på norsk men "morsom" på svensk. (2) "rar" kan bety "merkelig" på norsk og "kjær" på svensk. (3) "frokost" er morgenmåltid på norsk/dansk men "lunsj" på svensk (de sier "frukost" om morgenmåltid).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.4: Språksituasjonen i Norge i dag
// ============================================================================

export const CHAPTER_NORSK_VG2_4_4: TextbookChapter = {
  id: 'norsk-vg2-4-4',
  courseId: 'norsk-vg2',
  chapterNumber: '4.4',
  title: 'Språksituasjonen i Norge i dag',
  description: 'Utforsk dagens norske språksituasjon med bokmål, nynorsk, dialekter og minoritetsspråk.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for historisk bakgrunn for språksituasjonen i Norge',
    'reflektere over språklige varianter i Norge og holdninger til dem',
  ],
  content: [
    {
      id: 'norsk-vg2-4-4-intro',
      type: 'text',
      content: `## Norsk i dag - et språklig mangfold

Norge har en unik og kompleks språksituasjon som er resultat av vår historie. To skriftspråk, mange dialekter, og økende flerspråklighet preger dagens Norge. I dette kapittelet ser vi på status quo og aktuelle debatter.

**De to skriftspråkene**

*Bokmål:*
- Hovedmål for ca. 87% av elevene
- Dominerer i medier, næringsliv og storbyene
- Stor valgfrihet mellom konservative og radikale former
- Ligger nær dansk i struktur, men har norske lydtrekk

*Nynorsk:*
- Hovedmål for ca. 12% av elevene
- Sterkest på Vestlandet og i dalstrøkene
- Obligatorisk sidemål for alle
- Ligger nærmere dialektene og norrønt

*Statusforskjell:*
Selv om språkene er formelt likestilte, har bokmål i praksis høyere status i mange sammenhenger. Nynorskbrukere opplever ofte å måtte forsvare sitt språkvalg.

**Dialektene**

Norge har usedvanlig stor toleranse for dialektbruk i offentligheten:

- Dialekter brukes i radio, TV og politikk
- Ingen krav om standarduttale i de fleste yrker
- Dialektene er sterke identitetsmarkører
- Dialektbruk i skrift (sosiale medier) er vanlig

*Dialekttrussel?*
Noen frykter at dialektene svekkes av økt mobilitet og medier. Andre mener de bare endrer seg, ikke forsvinner.

**Flerspråklighet**

Norge er i dag et flerkulturelt samfunn:

- Ca. 20% av befolkningen har innvandrerbakgrunn
- Mange barn vokser opp med flere språk
- Samisk er urfolksspråk med offisiell status
- Kvensk, romani og norsk tegnspråk har særskilt vern

**Språkpolitiske debatter**

Flere debatter preger dagens språknorge:

*Sidemålsdebatt:*
- Skal sidemål være obligatorisk?
- Bør det være en karakter eller to?
- Hvordan sikre reell kompetanse i begge målformer?

*Nynorsk under press:*
- Synkende andel nynorskbrukere
- Medienes bokmålsdominans
- Målbyte ved overgang til videregående

*Engelsk i akademia og næringsliv:*
- Økende bruk av engelsk i høyere utdanning
- Frykten for "domenetap" - at norsk mister bruksområder
- Debatt om språkkrav i universiteter

*Samisk:*
- Revitalisering av samiske språk
- Samiske rettigheter og synlighet
- Utfordringer med små brukermiljøer

**Språkloven (2021)**

I 2021 fikk Norge en ny språklov som fastslår:

- Norsk er nasjonalspråk
- Bokmål og nynorsk er likeverdige
- Det offentlige har ansvar for å styrke nynorsk
- Samisk er urfolksspråk
- Norsk tegnspråk anerkjennes

Loven markerer et skifte fra "samnorskpolitikk" til "toskriftsspråkspolitikk" - begge språk skal bevares og styrkes, ikke smeltes sammen.

**Fremtiden**

Hvordan vil norsk se ut om 50 år? Noen tendenser:

- Økt globalisering og engelskpåvirkning
- Ny teknologi (AI, sosiale medier) endrer språkbruk
- Mulig konsolidering av dialektene i regiolekter
- Nynorskens skjebne er usikker
- Flerspråklighet blir normalen for mange`,
    },
    {
      id: 'norsk-vg2-4-4-def-1',
      type: 'definition',
      title: 'Språksituasjonen - begreper',
      content: `**Hovedmål:** Skriftspråket eleven har som sitt primære (bokmål eller nynorsk).

**Sidemål:** Det andre skriftspråket, som er obligatorisk å lære.

**Dialekt:** Lokal eller regional talemålsvarietet.

**Sosiolekt:** Språklig variasjon knyttet til sosiale grupper.

**Regiolekt:** Regional standardvarietet som erstatter lokale dialekter.

**Domenetap:** Når et språk mister bruksområder (f.eks. norsk i akademia).

**Språkskifte:** Når individer eller grupper bytter fra ett språk til et annet.

**Revitalisering:** Arbeid for å styrke truede språk.

**Språkloven (2021):** Norges lov om språk, som fastslår norsk som nasjonalspråk og likestiller bokmål og nynorsk.`,
    },
    {
      id: 'norsk-vg2-4-4-example-1',
      type: 'example',
      title: 'Eksempel: Språkdebatt i dag',
      problem: `Les disse synspunktene fra dagens språkdebatt:

**For obligatorisk sidemål:**
"Alle norske elever bør kunne begge skriftspråkene. Det handler om demokrati og kulturforståelse."

**Mot obligatorisk sidemål:**
"Sidemål er bortkastet tid for de fleste. La elevene selv velge hva de vil lære."

Analyser argumentasjonen på begge sider.`,
      solution: `**Analyse:**

**For-argumentet:**

*Verdier:* Demokrati, kulturfellesskap, kunnskap

*Logikk:* Premiss: Begge språk er del av norsk kultur. Konklusjon: Alle bør kunne dem.

*Styrke:* Appellerer til fellesskapsverdier og likeverd mellom målformer.

*Svakhet:* Sier ikke noe om praktisk gjennomføring eller kostnad/nytte.

**Mot-argumentet:**

*Verdier:* Valgfrihet, effektivitet, individuell nytte

*Logikk:* Premiss: Mange har ikke bruk for sidemål. Konklusjon: Det bør være frivillig.

*Styrke:* Appellerer til individuell frihet og praktiske hensyn.

*Svakhet:* Overser fellesskapsdimensjonen og risikoen for at nynorsk marginaliseres ytterligere.

**Hva debatten handler om:**

Kjernen er konflikt mellom:
- Kollektive vs. individuelle verdier
- Kulturell arv vs. praktisk nytte
- Likestilling mellom målformene vs. markedets logikk

**Viktige spørsmål:**
- Er sidemålsopplæringen effektiv nok?
- Finnes det alternativer til tvang?
- Hva skjer med nynorsk om sidemål fjernes?
- Hvordan balansere individets og fellesskapets interesser?`,
    },
    {
      id: 'norsk-vg2-4-4-tip-1',
      type: 'tip',
      title: 'Tips for å forstå språkpolitiske debatter',
      content: `**Slik analyserer du språkdebatter:**

**1. Identifiser verdiene:**
- Hva er viktigst for denne siden? Frihet? Likhet? Tradisjon? Effektivitet?

**2. Se på argumentstrukturen:**
- Hva er premissene?
- Følger konklusjonen logisk?
- Er det skjulte antakelser?

**3. Vurder konsekvensene:**
- Hva skjer hvis dette synet vinner frem?
- Hvem vinner, hvem taper?

**4. Se etter følelser og retorikk:**
- Brukes ladede ord?
- Appelleres det til frykt eller nostalgi?

**5. Plasser i kontekst:**
- Hvem sier dette?
- Hvilke interesser har de?
- Hvilken tradisjon tilhører de?

**6. Finn egne standpunkter:**
- Hva mener du selv?
- Kan du begrunne det?
- Er du åpen for motargumenter?`,
    },
    {
      id: 'norsk-vg2-4-4-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Ivar Aasen - Prøver af Landsmaalet (1853)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-4-4-primaertekst-1-text',
          type: 'text',
          content: `${TEKST_VG2_AASEN_PROEVER}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-4-4-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: Aasmund Olavsson Vinje - Ferdaminni (1861)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-4-4-primaertekst-2-text',
          type: 'text',
          content: `${TEKST_VG2_VINJE_FERDAMINNI}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv dagens norske språksituasjon.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan fordeler bruken av bokmål og nynorsk seg i dag?',
            solution: 'Ca. 87% har bokmål som hovedmål, ca. 12% nynorsk. Bokmål dominerer i medier og storbyene, nynorsk sterkest på Vestlandet og i dalstrøkene.',
          },
          {
            label: 'b',
            task: 'Hva kjennetegner den norske dialektsituasjonen?',
            solution: 'Norge har stor dialekttoleranse. Dialekter brukes i offentligheten, medier og politikk. Det er ingen krav om standarduttale i de fleste yrker.',
          },
          {
            label: 'c',
            task: 'Hvilke andre språk har offisiell status i Norge?',
            solution: 'Samisk er urfolksspråk med offisiell status. Kvensk, romani og norsk tegnspråk har særskilt vern. Norge har mange innvandrerspråk.',
          },
        ],
        solution: 'Norge har en kompleks språksituasjon med to skriftspråk, mange dialekter og økende flerspråklighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft språkpolitiske spørsmål.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er argumentene for og mot obligatorisk sidemål i skolen?',
            solution: 'For: Kulturforståelse, demokrati, likestilling. Mot: Tvang, tidsbruk, manglende praktisk nytte for mange.',
          },
          {
            label: 'b',
            task: 'Hva menes med "domenetap", og hvorfor er det bekymringsfullt?',
            solution: 'Domenetap = at et språk mister bruksområder (f.eks. til engelsk). Bekymringsfullt fordi det kan svekke språkets status og føre til gradvis utfasing.',
          },
          {
            label: 'c',
            task: 'Ta stilling: Bør sidemål være obligatorisk? Begrunn.',
            solution: 'Egenvurdering. Svar bør inneholde: klart standpunkt, begrunnelse, vurdering av motargumenter.',
          },
        ],
        solution: 'Språkpolitikk handler om verdivalg og balanse mellom ulike hensyn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva fastslår språkloven av 2021 om bokmål og nynorsk?',
        options: [
          'Bokmål skal ha forrang som nasjonalspråk',
          'Nynorsk skal gradvis fases ut',
          'Bokmål og nynorsk er likeverdige, og det offentlige har ansvar for å styrke nynorsk',
          'Begge språkene skal smeltes sammen til ett felles norsk',
        ],
        answer: 2,
        solution: 'Språkloven av 2021 fastslår at bokmål og nynorsk er likeverdige, og at det offentlige har et særlig ansvar for å styrke nynorsk som det minst brukte av de to. Loven markerer et skifte fra samnorskpolitikk til toskriftsspråkspolitikk.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-4-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr "domenetap" i språkpolitisk sammenheng?',
        options: [
          'At et språk mister ord fra sitt ordforråd',
          'At et språk mister bruksområder til et annet språk (f.eks. engelsk)',
          'At en dialekt forsvinner helt',
          'At et språk får flere grammatiske feil blant talerne',
        ],
        answer: 1,
        solution: 'Domenetap betyr at et språk mister bruksområder til et annet språk. Et eksempel er at engelsk i økende grad brukes i høyere utdanning og næringsliv i Norge, slik at norsk mister sin plass på disse områdene.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-4-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar kort hva som menes med begrepene "hovedmål", "sidemål" og "regiolekt".',
        hints: ['Bruk definisjonsboksen i kapittelet.'],
        solution: 'Hovedmål er det skriftspråket (bokmål eller nynorsk) eleven har som sitt primære. Sidemål er det andre skriftspråket, som alle elever må lære. Regiolekt er en regional standardvarietet av talespråket som erstatter mer lokale dialekter, for eksempel "bergensk" som standardvarietet for Bergensområdet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvorfor er Norge unikt i Skandinavia når det gjelder dialektbruk i offentligheten? Gi eksempler.',
        hints: ['Tenk på TV, radio, politikk og sosiale medier.'],
        solution: 'Norge skiller seg ut ved at det ikke finnes noe krav om standarduttale i de fleste yrker. Dialekter brukes av politikere på Stortinget, av NRK-programledere, av lærere og i sosiale medier. I Sverige og Danmark er standarduttale langt vanligere i formelle sammenhenger. Denne toleransen skyldes delvis at Norge aldri hadde et hoffliv som skapte en standarduttale, og delvis den sterke dialektbevisstheten knyttet til nasjonsbyggingen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les Ivar Aasens tekst "Prøver af Landsmaalet". Hva argumenterer Aasen for, og hvordan bygger han argumentasjonen sin?',
        hints: [
          'Se på hans hovedpåstand og begrunnelse.',
          'Hva svarer han på innvendinger?',
        ],
        solution: 'Aasen argumenterer for å skape et norsk skriftspråk basert på dialektene. Han begrunner dette med at dialektene har mange felles trekk som kan legges til grunn for en felles norm. Han svarer på innvendingen om at dialektene er for ulike ved å peke på likhetene. Han understreker at forslaget er et utgangspunkt, ikke et ferdig produkt. Argumentasjonen er saklig og vitenskapelig, typisk for Aasen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-4-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les utdraget fra Vinjes "Ferdaminni". Vinje skriver at "Sanningi hev mange Sidor". Forklar hvordan han bruker fjellmetaforen til å bygge opp dette poenget, og drøft om dette er relevant for språkdebatten.',
        hints: [
          'Hva ser du når du står nede og ser opp, vs. oppe og ser ned?',
          'Hva betyr dette overført til meningsutveksling?',
        ],
        solution: 'Vinje bruker fjellmetaforen for å vise at perspektivet påvirker hva vi ser: fra dalen ser fjellene store ut, men fra toppen er dalen liten. Han overfører dette til menneskelig forståelse generelt - vi ser ulikt avhengig av hvor vi står. For språkdebatten er dette relevant fordi bokmåls- og nynorskbrukere, by og bygd, ser språksituasjonen ulikt fra sine posisjoner. Vinjes poeng er at vi ikke bør dømme for hardt de som ser annerledes enn oss selv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-4-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-4-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør rede for utfordringene samisk språk står overfor i dag, og forklar hva revitalisering innebærer.',
        hints: [
          'Tenk på antall brukere, geografisk spredning og historisk bakgrunn.',
          'Hva gjøres for å styrke samiske språk?',
        ],
        solution: 'Samisk står overfor utfordringer som: få brukere (særlig for sørsamisk og lulesamisk), fornorskingspolitikkens langvarige skadevirkninger, små brukermiljøer, mangel på lærere og læremidler. Revitalisering innebærer å styrke truede språk gjennom tiltak som språkopplæring (språkbad, voksenopplæring), synliggjøring i offentligheten, digitale ressurser, og lovfestede rettigheter. Sametinget og språkloven av 2021 er viktige for dette arbeidet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-4-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-4-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et debattinnlegg (400-500 ord) der du tar stilling til ett av disse spørsmålene: (a) Bør sidemål være obligatorisk? (b) Bør universiteter undervise på norsk eller engelsk? (c) Er dialektene truet?',
        hints: [
          'Velg ett spørsmål og ta et tydelig standpunkt.',
          'Bruk fakta fra kapittelet som støtte.',
          'Husk å drøfte motargumenter.',
        ],
        solution: 'Debattinnlegget bør ha: tydelig standpunkt, saklig begrunnelse med fakta fra pensum, drøfting av motargumenter, god struktur og passende bruk av retoriske virkemidler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-4-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-4-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tenk deg at du skal holde en presentasjon for utvekslingselever om den norske språksituasjonen. Lag en disposisjon med hovedpunkter og underoverskrifter. Hvilke ting ville du trukket frem som mest overraskende for utlendinger?',
        hints: [
          'Tenk på hva som er unikt for Norge sammenlignet med andre land.',
          'To skriftspråk, dialekttoleranse og flerspråklighet er sentrale temaer.',
        ],
        solution: 'Disposisjonen bør dekke: (1) To offisielle skriftspråk - historisk bakgrunn og dagens situasjon, (2) Dialekttoleranse i offentligheten - at politikere snakker dialekt på TV, (3) Sidemålsordningen - alle må lære begge skriftspråk, (4) Samisk og andre minoritetsspråk. Overraskende for utlendinger: at et lite land har to skriftspråk, at det ikke finnes en standarduttale, at dialekt er akseptert i formelle sammenhenger, og at det er debatt om noe så grunnleggende som skriftspråket.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// SAMLET EKSPORT
// ============================================================================

export const NORSK_VG2_CHAPTERS_DEL4: TextbookChapter[] = [
  CHAPTER_NORSK_VG2_4_1,
  CHAPTER_NORSK_VG2_4_2,
  CHAPTER_NORSK_VG2_4_3,
  CHAPTER_NORSK_VG2_4_4,
];
