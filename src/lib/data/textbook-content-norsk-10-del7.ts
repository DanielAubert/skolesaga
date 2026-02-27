/**
 * Tekstbok innhold for Norsk 10. klasse - Del 7 (Kapittel 9.1-9.6)
 *
 * Følger LK20 læreplan for norsk ungdomstrinn.
 * Del 7 dekker sammensatte tekster og digitale medier: multimodale tekster,
 * filmanalyse, tegneserier, digital fortelling, adaptasjon og gaming.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 9.1: Multimodale tekster — Teori og analyse
// LK20: Lese, analysere og tolke sammensatte tekster og vurdere hvordan
//        ulike modaliteter spiller sammen
// ============================================================================

export const CHAPTER_NORSK_10_9_1: TextbookChapter = {
  id: 'norsk-10-9-1',
  courseId: 'norsk-10',
  chapterNumber: '9.1',
  title: 'Multimodale tekster — Teori og analyse',
  description: 'Lær om multimodalitet som teoretisk rammeverk, ulike semiotiske ressurser, koherens i sammensatte tekster og hvordan du gjennomfører en systematisk multimodal analyse.',
  estimatedMinutes: 80,
  competenceGoals: [
    'lese og analysere sammensatte tekster og vurdere hvordan ulike modaliteter spiller sammen',
    'bruke fagspråk til å beskrive samspillet mellom ulike uttrykksmåter i sammensatte tekster',
    'reflektere kritisk over hvordan sammensatte tekster påvirker mottakeren',
  ],
  keyTerms: [
    { term: 'Multimodalitet', definition: 'Bruk av flere semiotiske modaliteter (uttrykksmåter) samtidig for å skape mening i en tekst' },
    { term: 'Semiotisk ressurs', definition: 'Ethvert middel som brukes til å kommunisere mening — tekst, bilde, lyd, farge, typografi, layout, gester' },
    { term: 'Koherens', definition: 'Den indre sammenhengen i en tekst — at alle delene henger logisk og estetisk sammen' },
    { term: 'Affordans', definition: 'Hva en bestemt modalitet egner seg til å uttrykke — dens muligheter og begrensninger' },
    { term: 'Visuell grammatikk', definition: 'Systemet for hvordan bilder skaper mening gjennom komposisjon, farger, vinkler og avstand' },
    { term: 'Intersemiotisk relasjon', definition: 'Forholdet mellom ulike modaliteter i en tekst — hvordan de samarbeider, utfyller eller motsier hverandre' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-9-1-intro',
      type: 'text',
      content: `## Multimodale tekster — Teori og analyse

Du lever i en verden der rene tekster nesten ikke finnes lenger. Tenk etter: Når åpnet du sist en bok som bare inneholdt svart tekst på hvit bakgrunn, uten bilder, uten farger, uten noen form for grafisk design? Selv denne læreboken du leser nå, bruker overskrifter i ulike størrelser, farget bakgrunn på definisjoner, ikoner ved siden av oppgaver og en bestemt layout som hjelper deg å navigere i innholdet.

Vi kommuniserer med hverandre gjennom et komplekst samspill av uttrykksmåter hele tiden. Når du sender en melding til en venn, bruker du ikke bare ord — du velger emojier, GIF-er, sticker, bilder, kanskje en stemmebeskjed eller en video. Hvert valg du tar, endrer meningen. Et «ok» med punktum kommuniserer noe helt annet enn et «ok» med utropstegn og en tommel opp. Det er multimodalitet i praksis.

I dette kapittelet skal du gå dypere inn i teorien bak multimodale tekster. Du har kanskje allerede lært om modaliteter og samspill mellom dem. Nå skal du lære det **teoretiske rammeverket** som forskere bruker for å analysere sammensatte tekster systematisk. Du skal forstå begreper som semiotiske ressurser, affordans, visuell grammatikk og intersemiotiske relasjoner — og du skal bruke dem til å gjennomføre egne analyser.

I dette kapittelet skal du lære å:
- Forstå **multimodalitet** som teoretisk rammeverk
- Bruke begreper som **semiotisk ressurs**, **affordans** og **koherens**
- Gjennomføre en **systematisk multimodal analyse** av ulike tekster
- Forstå **visuell grammatikk** og hvordan bilder skaper mening`,
    },

    // ========== DEFINISJON: SEMIOTISKE RESSURSER ==========
    {
      id: 'norsk-10-9-1-def-1',
      type: 'definition',
      title: 'Semiotiske ressurser og modaliteter',
      content: `**Semiotikk** er læren om tegn og tegnssystemer — altså hvordan vi skaper og tolker mening. Alt som kommuniserer noe, er et «tegn» i semiotisk forstand.

En **semiotisk ressurs** er ethvert middel vi bruker for å kommunisere mening. Det kan være:
- **Verbaltekst:** Ord, setninger, tekststykker — det skriftlige språket
- **Bilde:** Fotografier, illustrasjoner, diagrammer, logoer, ikoner
- **Lyd:** Tale, musikk, lydeffekter, stillhet
- **Bevegelse:** Video, animasjon, gester, kroppsspråk
- **Farge:** Fargevalg som skaper stemning, identitet og assosiasjoner
- **Typografi:** Skrifttype, skriftstørrelse, fet/kursiv, linjeavstand
- **Layout:** Plasseringen av elementer på en side eller et skjermbilde
- **Materialitet:** Papirkvalitet, skjermoppløsning, fysisk form

En **modalitet** er en overordnet kategori av semiotiske ressurser. For eksempel er «visuell modalitet» en kategori som rommer både bilder, farger, typografi og layout.

**Viktig:** Semiotiske ressurser er ikke nøytrale. Hvert valg kommuniserer noe. Å velge fonten Comic Sans i stedet for Times New Roman er ikke bare et estetisk valg — det endrer hvordan mottakeren oppfatter avsenderens seriøsitet og troverdighet.`,
    },

    // ========== EKSEMPEL: SEMIOTISKE RESSURSER I EN AVISFORSIDE ==========
    {
      id: 'norsk-10-9-1-ex-avis',
      type: 'example',
      title: 'Eksempel: Semiotiske ressurser i en avisforside',
      problem: `Tenk deg forsiden av VG en vanlig nyhetsdag. Identifiser alle semiotiske ressursene som brukes.`,
      solution: `**Semiotiske ressurser på en typisk VG-forside:**

1. **Verbaltekst:** Overskrifter i ulike størrelser, ingresser, bildetekster, VG-logoen
2. **Bilde:** Hovedbilde (ofte stort og dramatisk), mindre bilder til andre saker, portrettbilder
3. **Farge:** Rød bakgrunn på logoen (VGs kjennemerke), røde og gule stikktitler for å fange oppmerksomhet, fargeforskjeller som skiller saker fra hverandre
4. **Typografi:** Stor, fet font på hovedoverskriften signaliserer viktighet. Mindre font på mindre saker viser hierarki. VGs karakteristiske skrifttype skaper gjenkjennelighet.
5. **Layout:** Hovedsaken dominerer forsiden (størst bilde, størst overskrift). Saker er plassert i et hierarki der de viktigste er øverst og størst. Fargeblokker deler inn ulike saker.
6. **Ikoner/grafikk:** Piler, rammer, «PLUSS»-merking for betalingsinnhold
7. **Materialitet (digital):** Responsivt design som tilpasser seg skjermstørrelse, klikkbare elementer, animerte overganger

**Samspill:** Alle ressursene jobber sammen for å skape et hierarki: Hva er viktigst? Hva bør du lese først? Det store bildet og den fete overskriften roper «SE HER!», mens den røde fargen og den stramme layouten signaliserer at dette er en seriøs (men også dramatiserende) nyhetskilde.`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE SEMIOTISKE RESSURSER ==========
    {
      id: 'norsk-10-9-1-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-1-ex-1',
        number: '9.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr begrepet «semiotisk ressurs» i analysen av multimodale tekster?',
        options: [
          {
            id: 'a',
            text: 'En sjanger som blander flere språk i samme tekst',
            isCorrect: false,
            feedback: 'Feil. Semiotisk ressurs handler ikke om flerspråklighet, men om alle midler som brukes for å kommunisere mening.',
          },
          {
            id: 'b',
            text: 'Ethvert middel som brukes for å kommunisere mening — tekst, bilde, lyd, farge, layout og lignende',
            isCorrect: true,
            feedback: 'Riktig! En semiotisk ressurs er alt som kan brukes til å skape mening. Ord, bilder, farger, lyder og layout er alle semiotiske ressurser.',
          },
          {
            id: 'c',
            text: 'Et digitalt verktøy for å lage sammensatte tekster, som Canva eller PowerPoint',
            isCorrect: false,
            feedback: 'Feil. Canva og PowerPoint er programvare, ikke semiotiske ressurser. Ressursene er selve uttrykksmåtene — som tekst, bilde og farge.',
          },
          {
            id: 'd',
            text: 'En skjult symbolsk mening som bare eksperter kan forstå',
            isCorrect: false,
            feedback: 'Feil. Semiotiske ressurser er ikke skjulte. De er synlige og hørbare midler vi alle bruker og tolker daglig.',
          },
        ],
        solution: 'Alternativ B er riktig. En semiotisk ressurs er ethvert middel for å kommunisere mening — fra ord til farger til layout.',
      },
    },

    // ========== AFFORDANS ==========
    {
      id: 'norsk-10-9-1-affordans',
      type: 'text',
      content: `## Affordans — hva kan hver modalitet?

Et sentralt begrep i multimodal teori er **affordans**. Affordans handler om hva en bestemt modalitet **egner seg til** og hva den **ikke kan gjøre**. Hver modalitet har sine styrker og begrensninger.

### Eksempler på affordans

**Verbaltekst har høy affordans for:**
- Abstrakte begreper og argumentasjon
- Presise beskrivelser og nyanser
- Tidsrekkefølge og logiske sammenhenger
- Indre tanker og følelser

**Verbaltekst har lav affordans for:**
- Romlige relasjoner (hvordan ting ser ut i forhold til hverandre)
- Umiddelbar emosjonell påvirkning
- Samtidighet (å vise flere ting som skjer på én gang)

**Bilde har høy affordans for:**
- Romlige relasjoner og utseende
- Umiddelbar emosjonell virkning
- Å vise flere elementer samtidig
- Å skape stemning gjennom farger og komposisjon

**Bilde har lav affordans for:**
- Abstrakte begreper (vanskelig å «vise» demokrati eller kjærlighet direkte)
- Tidsforløp (et stillbilde fanger bare ett øyeblikk)
- Logisk argumentasjon

**Lyd/musikk har høy affordans for:**
- Emosjonell påvirkning (musikk kan endre stemningen på et sekund)
- Å skape atmosfære og stemning
- Tidsmessig utvikling (musikk utfolder seg over tid)

**Lyd/musikk har lav affordans for:**
- Presise beskrivelser av utseende
- Logisk argumentasjon
- Romlige relasjoner

### Hvorfor affordans er viktig

Forståelsen av affordans forklarer hvorfor vi bruker sammensatte tekster. Ingen enkelt modalitet kan gjøre alt. Tekst er god til å argumentere, men dårlig til å vise. Bilder er gode til å vise, men dårlige til å argumentere. Musikk er god til å berøre, men dårlig til å forklare. Derfor kombinerer vi dem — for å utnytte styrkene til hver modalitet.

Når du analyserer en multimodal tekst, er et godt spørsmål: **Hvorfor valgte avsenderen akkurat denne modaliteten til akkurat denne delen av budskapet?** Svaret handler ofte om affordans.`,
    },

    // ========== DEFINISJON: AFFORDANS ==========
    {
      id: 'norsk-10-9-1-def-2',
      type: 'definition',
      title: 'Affordans',
      content: `**Affordans** (fra engelsk «affordance») betyr en modalitets muligheter og begrensninger — hva den egner seg til å uttrykke, og hva den ikke kan uttrykke like godt.

Begrepet stammer fra den australske forskeren Gunther Kress, en av grunnleggerne av multimodal teori. Han argumenterer for at valget av modalitet aldri er tilfeldig: Avsenderen velger den modaliteten som **best kan uttrykke** det de vil si.

**Eksempler:**
- En lege bruker et **røntgenbilde** (visuell modalitet) for å vise bruddet i beinet ditt — fordi tekst alene ikke kan formidle den romlige informasjonen like presist.
- En dikter bruker **ord** for å beskrive en følelse av sorg — fordi et bilde ikke kan fange de indre tankene og nyansene like godt.
- En filmskaper bruker **musikk** for å skape spenning — fordi lyd påvirker følelsene mer umiddelbart enn tekst.

**Konsekvens for analyse:** Når du analyserer en multimodal tekst, bør du vurdere: Hva bidrar denne modaliteten med som de andre ikke kan? Hva ville gått tapt hvis vi fjernet den?`,
    },

    // ========== OPPGAVE 2: AFFORDANS-ANALYSE ==========
    {
      id: 'norsk-10-9-1-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-1-ex-2',
        number: '9.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vurder affordansen til ulike modaliteter i disse situasjonene. Hvilken modalitet egner seg best, og hvorfor?',
        subTasks: [
          {
            label: 'a',
            task: 'Du skal forklare hvordan en vulkan fungerer til en 10-åring.',
            solution: 'Animasjon/video har høyest affordans her. En animasjon kan vise prosessen over tid: magma som stiger, trykk som bygger seg opp, og utbruddet. Verbaltekst alene ville gjort det abstrakt, og et stillbilde kan ikke vise bevegelsen og tidsforløpet. Animasjonen kombinerer visuell og temporal affordans.',
            multipleChoiceOptions: ['Animasjon/video', 'Bare verbaltekst', 'Bare stillbilde', 'Bare lyd'],
          },
          {
            label: 'b',
            task: 'Du skal overbevise noen om at klimaendringene er ekte.',
            solution: 'Kombinasjon av graf/diagram (visuell modalitet) og verbaltekst har høyest affordans. Grafer kan vise temperaturutvikling over tid — visuelt overbevisende. Verbaltekst kan forklare dataene, sette dem i kontekst og argumentere logisk. Ingen av modalitetene alene er like overbevisende som kombinasjonen.',
            multipleChoiceOptions: ['Kombinasjon av graf/diagram og verbaltekst', 'Bare musikk', 'Bare et fotografi', 'Bare et tall'],
          },
          {
            label: 'c',
            task: 'Du skal formidle følelsen av å stå alene på en tom strand ved solnedgang.',
            solution: 'Fotografi eller film kombinert med musikk har høyest affordans. Fotografiet kan fange det visuelle — den tomme stranden, lyset, personen som en liten silhuett. Musikken kan formidle den emosjonelle dimensjonen — stillheten, melankolien, freden. Verbaltekst ville krevd mange ord for å oppnå det samme, og selv da ville den ikke truffet like umiddelbart.',
            multipleChoiceOptions: ['Fotografi/film med musikk', 'Bare verbaltekst', 'Bare en graf', 'Bare en tegning'],
          },
        ],
        solution: 'a) Animasjon/video, b) Graf/diagram + verbaltekst, c) Fotografi/film + musikk. Poenget er at ulike budskap krever ulike modaliteter — og de beste løsningene kombinerer ofte flere.',
      },
    },

    // ========== VISUELL GRAMMATIKK ==========
    {
      id: 'norsk-10-9-1-visuell-grammatikk',
      type: 'text',
      content: `## Visuell grammatikk — slik «leser» du bilder

De australske forskerne Gunther Kress og Theo van Leeuwen utviklet et system for å analysere bilder, kalt **visuell grammatikk**. Akkurat som verbalspråket har grammatikk (subjekt, verbal, objekt), har bilder et system for hvordan de skaper mening.

### Tre hoveddimensjoner

**1. Representasjon — hva viser bildet?**

- **Narrative bilder:** Viser en handling eller prosess. Noen gjør noe. Det er bevegelse, retning, interaksjon.
  - *Eksempel:* Et bilde av en sprinter som krysser mållinjen — vi ser handling og retning.
- **Konseptuelle bilder:** Viser noe statisk — en tilstand, en klassifisering, en struktur.
  - *Eksempel:* Et organisasjonskart som viser hvem som er sjef for hvem — ingen handling, bare struktur.

**2. Interaksjon — forholdet mellom bildet og betrakteren**

- **Kontakt:** Ser personen på bildet rett inn i kameraet? I så fall skaper bildet en **krav**-relasjon (bildet «krever» noe av deg — oppmerksomhet, empati, handling). Hvis personen ser bort, er det et **tilbud** — bildet tilbyr seg til din betraktning uten å kreve noe.
- **Avstand:** Nærbilder skaper intimitet og følelsesmessig nærhet. Halvtotale bilder skaper sosial distanse. Totale bilder skaper upersonlig distanse.
- **Vinkel:** Frontalt perspektiv skaper likhet og identifikasjon. Skrå vinkel skaper distanse. Fugleperspektiv gir betrakteren makt. Froskeperspektiv gir det avbildede objektet makt.

**3. Komposisjon — hvordan er bildet organisert?**

- **Informasjonsverdi:** I vestlige kulturer er venstre side «kjent» (given) og høyre side «nytt» (new). Toppen er «ideell» og bunnen er «reell».
- **Framtredenhet (salience):** Det som er størst, skarpest, mest fargerikt eller mest sentralt, tiltrekker seg mest oppmerksomhet.
- **Innramming:** Linjer, fargeblokker og tomrom kan koble elementer sammen (tilhørighet) eller skille dem fra hverandre (adskillelse).

### Hvordan bruke visuell grammatikk

Visuell grammatikk er ikke et rigid system der alt alltid betyr det samme. Det er et **analyseverktøy** som gir deg et fagspråk for å beskrive det du ser. I stedet for å si «bildet er fint», kan du si: «Nærbildet med direkte blikk-kontakt skaper en krav-relasjon som gjør at vi føler empati med personen.»`,
    },

    // ========== DEFINISJON: VISUELL GRAMMATIKK ==========
    {
      id: 'norsk-10-9-1-def-3',
      type: 'definition',
      title: 'Visuell grammatikk (Kress og van Leeuwen)',
      content: `**Visuell grammatikk** er et analysesystem utviklet av Gunther Kress og Theo van Leeuwen for å forstå hvordan bilder skaper mening. Systemet har tre hoveddimensjoner:

**1. Representasjon:** Hva viser bildet?
- Narrativ (handling, prosess) eller konseptuell (tilstand, struktur)

**2. Interaksjon:** Hvordan forholder bildet seg til betrakteren?
- **Kontakt:** Krav (blikk mot kamera) vs. tilbud (blikk bort)
- **Avstand:** Nærbilde (intimt) → halvtotalt (sosialt) → totalt (upersonlig)
- **Vinkel:** Frontal (likhet), skrå (distanse), ovenfra (betrakterens makt), nedenfra (det avbildedes makt)

**3. Komposisjon:** Hvordan er bildet organisert?
- **Informasjonsverdi:** Venstre = kjent, høyre = nytt, topp = ideell, bunn = reell
- **Framtredenhet:** Det mest iøynefallende elementet tiltrekker oppmerksomheten først
- **Innramming:** Linjer og tomrom kobler sammen eller skiller fra hverandre

Systemet gir deg **fagspråk** for å analysere bilder presist, i stedet for å basere analysen bare på personlig smak.`,
    },

    // ========== OPPGAVE 3: MULTIPLE CHOICE VISUELL GRAMMATIKK ==========
    {
      id: 'norsk-10-9-1-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-1-ex-3',
        number: '9.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Et reklamebilde viser en person i nærbilde som ser rett inn i kameraet med et alvorlig ansiktsuttrykk. Under bildet står teksten: «Hvert tredje barn opplever mobbing. Gjør noe.» Ifølge visuell grammatikk — hva slags relasjon skaper blikk-kontakten mellom bildet og betrakteren?',
        options: [
          {
            id: 'a',
            text: 'En tilbudsrelasjon — bildet tilbyr seg til rolig betraktning',
            isCorrect: false,
            feedback: 'Feil. Et tilbud oppstår når personen ser bort fra kameraet. Her ser personen rett på deg.',
          },
          {
            id: 'b',
            text: 'En kravrelasjon — bildet krever noe av betrakteren, som oppmerksomhet, empati eller handling',
            isCorrect: true,
            feedback: 'Riktig! Direkte blikk-kontakt skaper en krav-relasjon. Bildet «krever» at du engasjerer deg — og teksten forsterker dette med oppfordringen «Gjør noe.»',
          },
          {
            id: 'c',
            text: 'En narrativ relasjon — bildet viser en handling som utfolder seg',
            isCorrect: false,
            feedback: 'Feil. Narrativ representasjon handler om at bildet viser en handling eller prosess. Her er det ingen handling — bare blikk-kontakt.',
          },
          {
            id: 'd',
            text: 'En konseptuell relasjon — bildet klassifiserer eller kategoriserer noe',
            isCorrect: false,
            feedback: 'Feil. Konseptuell representasjon handler om tilstander og strukturer (som et organisasjonskart). Her skaper det direkte blikket en krav-relasjon.',
          },
        ],
        solution: 'Alternativ B er riktig. Direkte blikk-kontakt + nærbilde = krav-relasjon. Reklamen krever empati og handling fra betrakteren.',
      },
    },

    // ========== KOHERENS OG INTERSEMIOTISKE RELASJONER ==========
    {
      id: 'norsk-10-9-1-koherens',
      type: 'text',
      content: `## Koherens og intersemiotiske relasjoner

Når vi analyserer multimodale tekster, handler det ikke bare om å identifisere de enkelte modalitetene. Det viktigste er å forstå **koherensen** — den indre sammenhengen — og de **intersemiotiske relasjonene** — hvordan modalitetene forholder seg til hverandre.

### Koherens — henger teksten sammen?

En multimodal tekst har **koherens** når alle modalitetene jobber sammen mot et felles formål. Elementene passer visuelt, tematisk og logisk sammen. God koherens gjør at teksten føles som en helhet, selv om den bruker mange ulike uttrykksmåter.

**Eksempel på god koherens:** En nettside for en barnevernorganisasjon bruker dempede, varme farger, bilder av barn i trygge situasjoner, rolig og empatisk språk, og en oversiktlig layout. Alle modalitetene kommuniserer det samme: trygghet, omsorg, tillit.

**Eksempel på dårlig koherens:** Den samme nettsiden bruker neonfarger, harde kanter, en aggressiv font og bilder av luksusbiler. Innholdet handler om barnevern, men designet kommuniserer noe helt annet. Modalitetene motarbeider hverandre, og teksten mister troverdighet.

### Intersemiotiske relasjoner

Intersemiotiske relasjoner beskriver hvordan modalitetene forholder seg til hverandre. De viktigste typene er:

**Utdyping (elaboration):** En modalitet gjentar eller utdyper det en annen allerede uttrykker. Tekst og bilde sier i bunn og grunn det samme.
- *Eksempel:* Et bilde av en oversvømt by med overskriften «Flomkatastrofe rammer Sørøst-Asia». Bildet og teksten forsterker hverandre.

**Utvidelse (extension):** En modalitet tilfører ny informasjon som den andre ikke har. Sammen gir de et mer komplett bilde.
- *Eksempel:* Et bilde av en smilende politiker med teksten «Statsministeren avviser all kritikk». Bildet viser utseende og ansiktsuttrykk, teksten gir kontekst og innhold — begge er nødvendige.

**Forsterkning (enhancement):** En modalitet forsterker den andre ved å tilføre tid, sted, årsak eller betingelse.
- *Eksempel:* En bildetekst som sier «Oslo sentrum, 14. mars 2025» under et fotografi — teksten forsterker bildet med tid og sted.

**Kontrast:** Modalitetene sier noe forskjellig eller motstridende — bevisst brukt for å skape ironi, humor, uro eller kritisk refleksjon.
- *Eksempel:* Et bilde av en brennende regnskog med reklameteksten «Vi elsker naturen» — kontrasten avslører hykleri.

### Systematisk multimodal analyse

Når du skal gjennomføre en multimodal analyse, følg disse stegene:

**1. Kontekst:** Hvem er avsenderen? Hvem er målgruppen? Hva er formålet? Hvor publiseres teksten?

**2. Identifiser modalitetene:** Hvilke semiotiske ressurser brukes? Beskriv dem enkeltvis.

**3. Analyser affordans:** Hva bidrar hver modalitet med? Hva kan den gjøre som andre modaliteter ikke kan?

**4. Analyser samspillet:** Hvilke intersemiotiske relasjoner finnes? Utdyping, utvidelse, forsterkning eller kontrast?

**5. Vurder koherens:** Henger alle modalitetene sammen? Jobber de mot et felles formål, eller er det spenninger?

**6. Tolk og vurder:** Hva er den samlede effekten? Hvordan påvirker teksten mottakeren? Er den effektiv? Er den etisk?`,
    },

    // ========== OPPGAVE 4: CLASSIC INTERSEMIOTISK ANALYSE ==========
    {
      id: 'norsk-10-9-1-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-1-ex-4',
        number: '9.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bestem hvilken type intersemiotisk relasjon som beskrives i hvert eksempel.',
        subTasks: [
          {
            label: 'a',
            task: 'En nyhetsartikkel om en fotballkamp har et bilde av spilleren som scorer, med overskriften «Haaland scorer igjen!»',
            solution: 'Utdyping (elaboration). Bildet og teksten uttrykker i bunn og grunn det samme — at Haaland scorer. Bildet viser hendelsen visuelt, teksten bekrefter det verbalt. De forsterker hverandre.',
            multipleChoiceOptions: ['Utdyping (elaboration)', 'Utvidelse (extension)', 'Kontrast', 'Forsterkning (enhancement)'],
          },
          {
            label: 'b',
            task: 'Et fotografi av en gammel kvinne som sitter ved et vindu, med bildeteksten «Martha, 92, venter fortsatt på å få plass på sykehjem.»',
            solution: 'Utvidelse (extension). Bildet viser kvinnen og stemningen (ensomhet, venting), men teksten tilfører ny informasjon vi ikke kan se: hennes navn, alder, og situasjonen med sykehjemskøen. Begge er nødvendige for å forstå helheten.',
            multipleChoiceOptions: ['Utvidelse (extension)', 'Utdyping (elaboration)', 'Forsterkning (enhancement)', 'Kontrast'],
          },
          {
            label: 'c',
            task: 'En reklame for cruiseferie viser krystallklart hav og hvite strender, mens det med liten skrift nederst står: «CO₂-utslipp per passasjer: 820 kg per uke.»',
            solution: 'Kontrast. Det store, vakre bildet selger drømmen om paradis. Den lille teksten nederst avslører en ubehagelig miljøsannhet. Kontrasten er sannsynligvis ikke tilsiktet av annonsøren, men en kritisk leser kan oppdage motsetningen mellom det visuelle løftet og de faktiske konsekvensene.',
            multipleChoiceOptions: ['Kontrast', 'Utdyping (elaboration)', 'Utvidelse (extension)', 'Forsterkning (enhancement)'],
          },
        ],
        solution: 'a) Utdyping, b) Utvidelse, c) Kontrast. En systematisk analyse identifiserer hvilken type relasjon som finnes mellom modalitetene.',
      },
    },

    // ========== EKSEMPEL: KOMPLETT MULTIMODAL ANALYSE ==========
    {
      id: 'norsk-10-9-1-ex-komplett',
      type: 'example',
      title: 'Eksempel: Komplett multimodal analyse av en Instagram-post',
      problem: `Gjennomfør en systematisk multimodal analyse av denne tenkte Instagram-posten fra en kjendis:

**Bilde:** Et nærbilde av kjendisen som holder opp et glass med en grønn smoothie. Bakgrunnen er et hvitt, minimalistisk kjøkken med planter. Kjendisen har på seg treningstøy og smiler mot kameraet.
**Tekst (caption):** «Ny dag, ny meg! Denne smoothien gir meg energi for hele dagen. Bruk kode KJENDIS20 for 20 % rabatt. #ad #samarbeid #sunnliv»
**Tagger/hashtags:** #ad, #samarbeid, #sunnliv, #smoothie, #morgenrutine`,
      solution: `**1. Kontekst:**
Avsender: En kjendis (influencer) med stor følgerskare. Formål: Reklame for et smoothie-produkt, kamuflerert som personlig anbefaling. Målgruppe: Unge følgere som ser opp til kjendisen. Plattform: Instagram (bildedrevet, personlig).

**2. Semiotiske ressurser:**
- **Bilde:** Nærbilde, blikk-kontakt, smilende ansikt, hvitt kjøkken, grønn smoothie, treningstøy, planter
- **Verbaltekst:** Personlig, entusiastisk språk, rabattkode, hashtags
- **Farge:** Grønt (smoothie, planter = helse, natur) + hvitt (renhet, enkelhet)
- **Layout:** Instagram-format — bilde dominerer, tekst under

**3. Affordans:**
Bildet har høy affordans for å vise livsstil visuelt — kjøkkenet, klærne og smoothien kommuniserer «sunt og vellykket liv» umiddelbart. Verbalteksten har affordans for å gi produktinformasjon og rabattkode. Hashtags har affordans for å kategorisere og øke synligheten.

**4. Intersemiotiske relasjoner:**
- Bilde og tekst står i **utdyping**: Begge formidler «sunt, energisk liv»
- Teksten **utvider** bildet med informasjon bildet ikke kan gi: produktnavn, rabattkode, at det er reklame
- Hashtag «#ad» og «#samarbeid» står i **kontrast** til den personlige tonen — de avslører at det personlige er betalt

**5. Koherens:**
Teksten har god visuell og tematisk koherens — alt peker i retning av «sunt og vellykket liv». Men det finnes en spenning mellom den personlige, autentiske tonen og det faktum at det er reklame. Hashtaggene #ad og #samarbeid bryter den personlige illusjonen — men de er plassert diskret blant andre hashtags.

**6. Tolkning og kritisk vurdering:**
Posten bruker det som kalles «native advertising» — reklame som ser ut som vanlig innhold. Krav-relasjonen (blikk-kontakt i nærbildet) skaper illusjonen av en personlig anbefaling. Fargene grønt og hvitt assosieres med helse og renhet. Men en kritisk leser ser at hele oppsettet er nøye planlagt for å selge et produkt — og at «#ad» er det eneste som avslører at dette ikke er en ekte, personlig opplevelse.`,
    },

    // ========== OPPGAVE 5: MULTIPLE CHOICE KOHERENS ==========
    {
      id: 'norsk-10-9-1-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-1-ex-5',
        number: '9.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En nettside for et advokatfirma bruker Comic Sans som skrifttype, neonrosa bakgrunn og emojier i overskriftene. Hva er problemet med denne designløsningen?',
        options: [
          {
            id: 'a',
            text: 'Ingenting — alle skrifttyper og farger er like gode',
            isCorrect: false,
            feedback: 'Feil. Semiotiske ressurser som skrifttype og farge kommuniserer mening. Comic Sans og neonrosa signaliserer uformell lekenhet — det motsatte av det en advokatbedrift trenger.',
          },
          {
            id: 'b',
            text: 'Dårlig koherens — designvalgene kommuniserer lekenhet og uformellhet, som motarbeider advokatfirmaets behov for å signalisere seriøsitet og troverdighet',
            isCorrect: true,
            feedback: 'Riktig! Modalitetene (typografi, farge) motarbeider budskapet. Koherensen brytes fordi designet signaliserer noe helt annet enn det innholdet krever.',
          },
          {
            id: 'c',
            text: 'For mange modaliteter — nettsiden burde bare brukt tekst',
            isCorrect: false,
            feedback: 'Feil. Problemet er ikke antall modaliteter, men at de valgte modalitetene signaliserer feil ting. En nettside trenger farger og typografi — men de må passe til konteksten.',
          },
          {
            id: 'd',
            text: 'Problemet er at nettsiden er digital — advokatfirmaer bør bare bruke trykte medier',
            isCorrect: false,
            feedback: 'Feil. Det er ingenting galt med digitale nettsider for advokatfirmaer. Problemet er de spesifikke designvalgene, ikke mediet.',
          },
        ],
        solution: 'Alternativ B er riktig. Dårlig koherens oppstår når semiotiske ressurser (skrifttype, farge) motarbeider budskapet og konteksten.',
      },
    },

    // ========== OPPGAVE 6: GJENNOMFØR MULTIMODAL ANALYSE ==========
    {
      id: 'norsk-10-9-1-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-1-ex-6',
        number: '9.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Velg en multimodal tekst du møter i hverdagen — det kan være en reklame, en nettside, en forsideside, et Instagram-innlegg, en YouTube-thumbnail eller en plakat.

Gjennomfør en systematisk multimodal analyse (250–350 ord) der du følger alle seks stegene:

1. **Kontekst:** Hvem er avsenderen? Målgruppen? Formålet?
2. **Identifiser modalitetene:** Hvilke semiotiske ressurser brukes?
3. **Analyser affordans:** Hva bidrar hver modalitet med?
4. **Analyser samspillet:** Hvilke intersemiotiske relasjoner finnes? (utdyping, utvidelse, forsterkning, kontrast)
5. **Vurder koherens:** Henger alle modalitetene sammen?
6. **Tolk og vurder:** Hva er effekten? Er teksten effektiv? Er den etisk?`,
        hints: [
          'Velg en tekst du synes er interessant eller provoserende — det er lettere å analysere noe du reagerer på',
          'Bruk fagbegrepene fra kapittelet: semiotisk ressurs, affordans, koherens, intersemiotisk relasjon, krav/tilbud, visuell grammatikk',
          'Husk det kritiske perspektivet: Hva vil avsenderen at du IKKE skal tenke over?',
        ],
        solution: 'En god multimodal analyse identifiserer semiotiske ressurser, beskriver affordans og intersemiotiske relasjoner med fagbegreper, vurderer koherens, og inkluderer en kritisk vurdering av effekt og etikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-9-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Nøkkelbegreper
- **Semiotikk:** Læren om tegn og hvordan vi skaper og tolker mening
- **Semiotisk ressurs:** Ethvert middel for å kommunisere mening — tekst, bilde, lyd, farge, typografi, layout
- **Modalitet:** En overordnet kategori av semiotiske ressurser (visuell, auditiv, verbal, spatial)
- **Affordans:** Hva en modalitet egner seg til å uttrykke — dens muligheter og begrensninger
- **Visuell grammatikk:** System for å analysere bilder (representasjon, interaksjon, komposisjon)
- **Krav vs. tilbud:** Blikk-kontakt skaper krav-relasjon, blikk bort skaper tilbuds-relasjon
- **Intersemiotiske relasjoner:** Utdyping, utvidelse, forsterkning, kontrast
- **Koherens:** Den indre sammenhengen i en tekst — at alle modaliteter jobber mot samme formål

### Viktige sammenhenger
- Ingen enkelt modalitet kan gjøre alt — derfor kombinerer vi dem i multimodale tekster
- Affordans forklarer HVORFOR avsenderen velger bestemte modaliteter for bestemte deler av budskapet
- Koherens er avgjørende for troverdighet — når designet motarbeider innholdet, mister teksten kraft
- En systematisk analyse bruker fagbegreper og følger en klar metode, i stedet for å basere seg på personlig smak`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-9-1-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-1-ex-7',
        number: '9.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Sammenlign to versjoner av samme nyhet.

Finn en nyhetssak som er publisert både som nettartikkel (for eksempel på NRK eller VG) og som Instagram-post (eller TikTok/Snapchat-versjon).

Skriv en sammenlignende multimodal analyse (300–400 ord) der du:
a) Beskriver hvilke semiotiske ressurser som brukes i hver versjon
b) Analyserer affordansen: Hva kan nettartikkelen gjøre som Instagram-posten ikke kan, og omvendt?
c) Vurderer intersemiotiske relasjoner i begge versjoner
d) Diskuterer hvilken versjon som er mest effektiv for ulike målgrupper
e) Reflekterer over om noen av versjonene er mer etisk problematiske enn den andre`,
        hints: [
          'Se etter forskjeller i dybde, nyansering, emosjonell appell og visuelt uttrykk',
          'Husk at Instagram og nettartikler har ulik affordans som medier — Instagram er bildedrevet og kort, nettartikler er tekstdrevet og lange',
          'Etikk-spørsmålet kan handle om forenkling, sensasjonalisering eller mangel på kontekst',
        ],
        solution: 'En god analyse viser at ulike medier former nyheten ulikt gjennom sine affordanser. Nettartikkelen har affordans for dybde og nyanser, mens Instagram har affordans for umiddelbar emosjonell virkning. Begge har styrker og svakheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-9-1-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-1-ex-8',
        number: '9.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Design en multimodal tekst med bevisste valg.

Du skal lage en plakat for et skolearrangement (temakveld, konsert, idrettsdag, eller lignende). Plakaten skal bruke minst fire ulike semiotiske ressurser.

Lever to ting:
1. **Selve plakaten** (som bilde, tegning eller digitalt design)
2. **En analytisk refleksjon** (200–250 ord) der du:
   a) Identifiserer hvilke semiotiske ressurser du brukte
   b) Forklarer affordansen til hver ressurs — hvorfor valgte du akkurat disse?
   c) Beskriver de intersemiotiske relasjonene — hvordan jobber ressursene sammen?
   d) Vurderer koherensen — henger alt sammen? Kommuniserer plakaten det du ønsker?`,
        hints: [
          'Tenk på målgruppen: Hvem skal se plakaten? Hva appellerer til dem?',
          'Vær bevisst på ALLE valg: farge, font, bildeplassering, tekstformulering, layout',
          'Den analytiske refleksjonen er like viktig som plakaten — vis at du forstår teorien',
        ],
        solution: 'En god besvarelse viser bevisste valg i alle semiotiske ressurser, og refleksjonen demonstrerer at du kan bruke fagbegrepene semiotisk ressurs, affordans, intersemiotisk relasjon og koherens for å begrunne valgene dine.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9.2: Filmanalyse
// LK20: Lese, analysere og tolke sammensatte tekster og vurdere hvordan
//        ulike modaliteter spiller sammen
// ============================================================================

export const CHAPTER_NORSK_10_9_2: TextbookChapter = {
  id: 'norsk-10-9-2',
  courseId: 'norsk-10',
  chapterNumber: '9.2',
  title: 'Filmanalyse',
  description: 'Lær å analysere film systematisk med fagbegreper fra filmteori — kamerateknikk, klipping, mise-en-scène, lyd og fortellerteknikk. Bruk filmspråket til å forstå hvordan filmskapere styrer opplevelsen din.',
  estimatedMinutes: 85,
  competenceGoals: [
    'lese, analysere og tolke sammensatte tekster og vurdere hvordan ulike modaliteter spiller sammen',
    'bruke fagspråk til å beskrive virkemidler i film og andre audiovisuelle tekster',
    'sammenligne tekster fra ulike medier og reflektere over hvordan mediet påvirker innholdet',
  ],
  keyTerms: [
    { term: 'Mise-en-scène', definition: 'Alt som er plassert foran kameraet og synlig i bildet — kulisser, kostymer, lys, rekvisitter, skuespillernes plassering' },
    { term: 'Kinematografi', definition: 'Alt som handler om kameraarbeidet — kameravinkler, bevegelser, innstillinger, fokus, objektiv' },
    { term: 'Klipping (redigering)', definition: 'Hvordan enkeltbilder settes sammen til sekvenser — tempo, overganger, rekkefølge' },
    { term: 'Diegetisk lyd', definition: 'Lyd som har en kilde innenfor filmens verden — lyd som karakterene selv kan høre' },
    { term: 'Ikke-diegetisk lyd', definition: 'Lyd som legges til for publikum, men som karakterene ikke kan høre — filmmusikk, fortellerstemme' },
    { term: 'Montasje', definition: 'En klippeteknikk der korte klipp settes sammen for å skape en komprimert fremstilling av tid, sted eller tema' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-9-2-intro',
      type: 'text',
      content: `## Filmanalyse: Se filmen bak filmen

Du har sett hundrevis av filmer. Du har ledd, grått, blitt redd og blitt overrasket. Men har du noen gang stoppet opp og spurt: **Hvordan fikk filmskaperen meg til å føle dette?**

Film er ikke tilfeldighet. Hvert bilde du ser, er resultatet av hundrevis av bevisste valg: Hvor skal kameraet stå? Hvordan skal lyset falle? Hvilken musikk skal spille? Hvor lenge skal klippet vare? Hvilke farger dominerer? Hvor skal skuespilleren se? Alle disse valgene jobber sammen for å styre opplevelsen din — uten at du merker det.

Det er det som gjør film til den kanskje mest kraftfulle sammensatte teksten vi har. Film kombinerer nesten alle modalitetene: visuell (bilde, farge, lys, komposisjon), auditiv (dialog, musikk, lydeffekter), verbal (dialog, fortellerstemme, tekst), temporal (klipping, tempo, varighet) og kinestetisk (bevegelse, dans, kroppsspråk).

I dette kapittelet skal du lære **filmspråket** — de fagbegrepene og verktøyene du trenger for å analysere film systematisk. Du skal gå fra å si «filmen var bra» til å kunne forklare **hvorfor** og **hvordan** den var bra.

I dette kapittelet skal du lære å:
- Analysere **mise-en-scène** — alt som er synlig i bildet
- Forstå **kinematografi** — kameraarbeid, vinkler og bevegelser
- Analysere **klipping og montasje** — hvordan klipp skaper mening
- Skille mellom **diegetisk og ikke-diegetisk lyd**
- Gjennomføre en **komplett filmanalyse** med fagbegreper`,
    },

    // ========== DEFINISJON: MISE-EN-SCÈNE ==========
    {
      id: 'norsk-10-9-2-def-1',
      type: 'definition',
      title: 'Mise-en-scène',
      content: `**Mise-en-scène** (uttales «mis-on-sén») er et fransk begrep som betyr «det som er satt i scene». Det omfatter **alt som er synlig i bildet** — alt som er plassert foran kameraet.

Mise-en-scène inkluderer:

**1. Setting/kulisser:** Hvor foregår scenen? Et luksuriøst herskapshus kommuniserer noe helt annet enn en trang leilighet. Settingen er aldri tilfeldig i en gjennomtenkt film.

**2. Kostymer og sminke:** Hva har karakterene på seg? Klær kommuniserer status, personlighet, tidsperiode og tilhørighet. Sminke kan gjøre en ung skuespiller gammel, en frisk person syk, eller en vanlig person til et monster.

**3. Lyssetting:** Hvordan faller lyset? Sterkt, jevnt lys skaper trygghet. Mørke skygger skaper uro. Motlys (silhuett) skaper mystikk. Varmt lys (gult/oransje) skaper intimitet. Kaldt lys (blått) skaper fremmedgjøring.

**4. Rekvisitter:** Gjenstander i bildet som har en funksjon eller symbolsk mening. Et glass vin, et fotografi på veggen, en kniv på bordet — alt er bevisst plassert.

**5. Skuespillernes plassering og bevegelse:** Hvor i bildet står karakterene? Hvem er i forgrunnen, hvem i bakgrunnen? Hvem beveger seg, hvem står stille? Plassering kommuniserer maktforhold.

**Huskeregel:** Ingenting i en godt regissert film er tilfeldig. Hvis du ser noe i bildet, har noen bestemt at det skal være der.`,
    },

    // ========== EKSEMPEL: MISE-EN-SCÈNE ==========
    {
      id: 'norsk-10-9-2-ex-mise-en-scene',
      type: 'example',
      title: 'Eksempel: Analyse av mise-en-scène i en krimscene',
      problem: `Tenk deg en scene i en krimserie: En etterforsker sitter alene på kontoret sitt sent om kvelden. Beskriv hva du ville sett i mise-en-scènen, og forklar hva elementene kommuniserer.`,
      solution: `**Setting:** Et lite, rotete kontor. Stablet med papirer og mapper. Et vindu viser mørk nattehimmel og regnvær. Veggen bak har en tavle med bilder, tråder og post-it-lapper (den klassiske «etterforskningstaven»).
→ *Kommuniserer:* Besettelse. Etterforskeren har jobbet lenge, kontoret viser at saken dominerer livet deres.

**Lyssetting:** Eneste lyskilde er en skrivebordlampe som kaster et gult, varmt lys over dokumentene — resten av rommet er mørkt. Ansiktet til etterforskeren er halvt opplyst, halvt i skygge.
→ *Kommuniserer:* Dobbelthet. Halvt i lys, halvt i mørke — etterforskeren er mellom sannheten (lyset) og mysteriet (mørket). Den ensomme lampen forsterker isolasjonen.

**Kostymer:** Etterforskeren har løsnet slipset, brettet opp ermene. Jakken henger over stolryggen. En tom kaffekopp og en halvspist brødskive på skrivebordet.
→ *Kommuniserer:* Utmattelse og hengivelse. Denne personen har vært her i mange timer. De har glemt å ta vare på seg selv fordi saken betyr alt.

**Rekvisitter:** Et innrammet foto på skrivebordet er lagt med bildesiden ned. En flaske whisky står i skuffen, halvfull.
→ *Kommuniserer:* Personlige problemer. Det nedlagte bildet antyder et ødelagt forhold. Whiskyflasken forteller om selvmedisinering. Disse detaljene gir karakteren dybde uten at et eneste ord er sagt.

**Samlet effekt:** Mise-en-scènen alene — uten dialog, uten musikk — forteller oss: Dette er en person som er drevet, ensom, slitt og kanskje på grensen av kollaps. Alt dette kommuniseres visuelt, gjennom bevisst plassering av elementer i bildet.`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE MISE-EN-SCÈNE ==========
    {
      id: 'norsk-10-9-2-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-2-ex-1',
        number: '9.9',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'I en filmscene er det eneste synlige lyset et stearinlys. Rommet er nesten helt mørkt, og skuespillerens ansikt flakkrer mellom lys og skygge. Hva kommuniserer denne lyssettingen?',
        options: [
          {
            id: 'a',
            text: 'At strømmen har gått — en praktisk forklaring',
            isCorrect: false,
            feedback: 'Feil. Selv om strømmen kan ha gått i filmens handling, er lyssettingen et bevisst filmteknisk valg for å kommunisere stemning — ikke bare et praktisk element.',
          },
          {
            id: 'b',
            text: 'At scenen er glad og festlig, som et bursdagsselskap',
            isCorrect: false,
            feedback: 'Feil. Et enkelt stearinlys i et ellers mørkt rom skaper uro og intimitet, ikke feststemning. For fest ville filmskaperen brukt mange lys og varme farger.',
          },
          {
            id: 'c',
            text: 'Uro, sårbarhet og intimitet — flakkringen mellom lys og mørke skaper usikkerhet, og den begrensede lyskilden gjør situasjonen spenningsfull',
            isCorrect: true,
            feedback: 'Riktig! Stearinlys i mørke skaper intimitet (liten, nær lyskilde), sårbarhet (flammen kan slukke) og uro (flakkringen mellom lys og mørke signaliserer usikkerhet).',
          },
          {
            id: 'd',
            text: 'At filmskaperen hadde dårlig budsjett til lyssetting',
            isCorrect: false,
            feedback: 'Feil. Mørke, stemningsfulle scener er ofte dyrere å lyssette enn lyse scener. Dette er et bevisst kunstnerisk valg.',
          },
        ],
        solution: 'Alternativ C er riktig. Stearinlys i mørke kommuniserer uro, sårbarhet og intimitet gjennom mise-en-scène.',
      },
    },

    // ========== KINEMATOGRAFI ==========
    {
      id: 'norsk-10-9-2-kinematografi',
      type: 'text',
      content: `## Kinematografi — kameraets språk

**Kinematografi** handler om alt som har med kameraarbeidet å gjøre. Kameraet er filmens «øye» — det bestemmer hva vi ser, fra hvilken vinkel, på hvilken avstand, og med hvilket fokus. Kameraarbeidet er et av de mektigste verktøyene filmskaperen har.

### Kamerainnstillinger (bildeutsnitt)

**Ekstremt nærbilde (extreme close-up):** Bare en liten del av ansiktet — et øye, en munn, en hånd. Skaper intens intimitet og tvinger oss til å fokusere på en detalj.

**Nærbilde (close-up):** Ansiktet fyller det meste av bildet. Vi ser følelsene tydelig. Skaper empati og emosjonell nærhet.

**Halvnært (medium close-up):** Fra brystet og opp. Standardinnstillingen for dialog — nær nok til å se følelser, men med nok avstand til å se kroppsspråk.

**Halvtotalt (medium shot):** Fra livet og opp, eller hele overkroppen. Viser kropp og omgivelser. Sosial distanse.

**Totalt (wide shot/full shot):** Hele personen er synlig, med mye omgivelser. Viser personen i kontekst.

**Ekstremt totalt (extreme wide shot):** Personen er liten i et stort landskap. Skaper en følelse av ensomhet, ubetydelighet eller frihet.

### Kameravinkler

**Normalperspektiv (eye level):** Kameraet er i øyehøyde. Nøytralt — vi er «likeverdige» med personen.

**Fugleperspektiv (high angle):** Kameraet ser ned på personen. Gjør dem liten, sårbar, avmektig, underlegen.

**Froskeperspektiv (low angle):** Kameraet ser opp på personen. Gjør dem stor, mektig, truende, overlegen.

**Skrå vinkel (dutch angle/canted angle):** Kameraet er vippet til siden. Skaper uro, ustabilitet, at noe er «galt».

### Kamerabevegelser

**Panorering (pan):** Kameraet roterer horisontalt fra én side til en annen — som å snu hodet. Brukes for å vise et panorama eller følge en person.

**Tilting:** Kameraet roterer vertikalt — opp eller ned. Brukes for å avsløre noe (tilt ned fra ansiktet til blodet på hendene).

**Tracking/dolly:** Kameraet beveger seg fysisk med handlingen. Skaper en følelse av å være med i scenen.

**Steadicam/håndholdt:** Håndholdt kamera skaper en rå, dokumentarisk følelse. Ustabilt bilde signaliserer kaos, hast eller realisme. Steadicam gir jevn bevegelse uten stativ.

**Zoom:** Objektivet endrer brennvidde uten at kameraet flyttes. Zoom inn = noe viktig, fokus. Zoom ut = kontekst, avstand.

### Fokus og dybdeskarphet

**Grunt fokus (shallow focus):** Bare én ting er skarp — resten er uskarpt. Styrer blikket vårt til det viktige.

**Dypt fokus (deep focus):** Alt i bildet er skarpt — fra forgrunnen til bakgrunnen. Lar oss se alt, men vi må selv velge hva vi fokuserer på.

**Rackfokus:** Fokuset flyttes fra én ting til en annen mens vi ser på. Styrer blikket og kan avsløre sammenhenger.`,
    },

    // ========== DEFINISJON: KINEMATOGRAFI ==========
    {
      id: 'norsk-10-9-2-def-2',
      type: 'definition',
      title: 'Kinematografi — kameraarbeidets tre hoveddimensjoner',
      content: `**Kinematografi** er kunsten og teknikken i kameraarbeidet. Det omfatter tre hoveddimensjoner:

**1. Innstilling (bildeutsnitt):**
Hvor nær eller fjern er kameraet?
- Ekstremt nærbilde → nærbilde → halvnært → halvtotalt → totalt → ekstremt totalt
- Fra intim nærhet til upersonlig avstand

**2. Vinkel:**
Hvor ser kameraet fra?
- Normalperspektiv (nøytralt), fugleperspektiv (ovenfra = liten/sårbar), froskeperspektiv (nedenfra = mektig), skrå vinkel (uro)

**3. Bevegelse:**
Beveger kameraet seg?
- Panorering (horisontalt), tilting (vertikalt), tracking (med handlingen), håndholdt (kaos/realisme), zoom (inn/ut)

**I tillegg:** Fokus og dybdeskarphet styrer hva vi ser skarpt og hva som er uskarpt.

**Huskeregel:** Kameraet er regissørens stemme. Hvordan kameraet er plassert og beveger seg, forteller oss hva vi skal føle og tenke — selv om vi ikke er bevisste på det.`,
    },

    // ========== OPPGAVE 2: CLASSIC KAMERAANALYSE ==========
    {
      id: 'norsk-10-9-2-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-2-ex-2',
        number: '9.10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv hva du forventer å se og føle basert på disse kamerabeskrivelsene.',
        subTasks: [
          {
            label: 'a',
            task: 'Ekstremt totalt bilde av en person som går alene gjennom en ørken, filmet ovenfra (fugleperspektiv).',
            solution: 'Vi forventer å føle ensomhet, sårbarhet og ubetydelighet. Det ekstreme totale bildet gjør personen liten i det store landskapet — vi ser hvor alene de er. Fugleperspektivet forsterker dette ved å gjøre personen enda mindre. Effekten er at mennesket virker ubetydelig sammenlignet med naturen.',
            multipleChoiceOptions: ['Ensomhet, sårbarhet og ubetydelighet', 'Makt og kontroll', 'Glede og frihet', 'Spenning og fart'],
          },
          {
            label: 'b',
            task: 'Ekstremt nærbilde av et øye som utvider seg, med rackfokus fra øyet til noe i bakgrunnen.',
            solution: 'Vi forventer spenning og avsløring. Det ekstreme nærbildet tvinger oss inn i personens opplevelse — vi ser sjokket i øyet. Rackfokuset drar blikket vårt til det personen ser, og bygger forventning: Hva er det de oppdager? Teknikken brukes ofte i thrillere og skrekkfilmer.',
            multipleChoiceOptions: ['Spenning og avsløring', 'Ro og harmoni', 'Humor og letthet', 'Tristhet og melankoli'],
          },
          {
            label: 'c',
            task: 'Håndholdt kamera som løper etter en person gjennom trange gater, med skrå vinkel.',
            solution: 'Vi forventer kaos, hast og uro. Det håndholdte kameraet skaper en rå, ustabil følelse — som om vi selv løper. Bevegelsen gjennom trange gater skaper klaustrofobi. Den skrå vinkelen forsterker følelsen av at noe er galt, at verden er ute av balanse. Typisk for jaktscener og actionsekvenser.',
            multipleChoiceOptions: ['Kaos, hast og uro', 'Ro og kontemplasjon', 'Makt og autoritet', 'Romantikk og varme'],
          },
        ],
        solution: 'a) Ensomhet og ubetydelighet, b) Spenning og avsløring, c) Kaos og uro. Kameraarbeidet styrer følelsene våre aktivt.',
      },
    },

    // ========== KLIPPING OG LYD ==========
    {
      id: 'norsk-10-9-2-klipping-lyd',
      type: 'text',
      content: `## Klipping — filmens usynlige kunstverk

Klipping (eller redigering) handler om hvordan enkeltbilder settes sammen til sekvenser. Gode klippere er ofte usynlige — du merker ikke klippene, men de styrer opplevelsen din fullstendig.

### Klippeteknikker

**Kontinuitetskutt (continuity editing):** Den «usynlige» klippestilen der klippene er så smidige at du ikke merker dem. Målet er å opprettholde illusjonen av sammenhengende tid og rom. Standard i de fleste spillefilmer.

**Jump cut:** Et brått klipp der bildet «hopper» — for eksempel fra én posisjon til en annen i samme rom. Skaper en følelse av at tiden hopper, av rastløshet eller uro. Brukes mye i moderne film og musikkvideoer.

**Kryssklipping (cross-cutting):** Klipping mellom to eller flere handlinger som foregår samtidig. Bygger spenning ved å vise at noe viktig skjer parallelt — for eksempel kutting mellom en person som er i fare og en annen som prøver å nå frem i tide.

**Montasje:** En serie korte klipp som komprimerer tid. Klassisk eksempel: treningsscenen i Rocky — vi ser ukesvis med trening i løpet av to minutter. Montasje brukes for å vise utvikling uten å bruke tid på alle detaljene.

**Match cut:** Et klipp der to bilder er visuelt like, men viser noe helt forskjellig. Skaper en symbolsk kobling.
- *Klassisk eksempel:* I «2001: A Space Odyssey» kaster en ape et bein opp i luften — klipp — og beinet blir til et romskip. Match cutten kobler menneskets opprinnelse med fremtiden.

**Smash cut:** Et brått, overraskende klipp fra en rolig scene til noe helt annet — eller omvendt. Brukes for sjokkeffekt eller komikk.

### Klippetempo

Tempo i klippingen er avgjørende for stemningen:
- **Raskt tempo (korte klipp):** Skaper spenning, kaos, energi, panikk
- **Langsomt tempo (lange klipp):** Skaper ro, intensitet, ubehag, ettertanke
- **Akselererende tempo:** Klippene blir gradvis kortere — bygger spenning mot klimaks
- **Deselererende tempo:** Klippene blir gradvis lengre — roen etter stormen

## Lyd i film — det du hører uten å tenke over det

Lyd er kanskje den mest undervurderte modaliteten i film. Vi merker ofte ikke lyden bevisst, men den styrer følelsene våre i enorm grad.

### Tre typer filmlyd

**1. Dialog:** Karakterenes tale. Formidler informasjon, personlighet og følelser direkte.

**2. Lydeffekter (SFX):** Alle lyder som ikke er dialog eller musikk — fotsteg, dørsmell, regn, skudd, trafikk. Skaper realisme og atmosfære.

**3. Musikk (score/soundtrack):** Filmmusikken. Styrer følelsene mer enn noe annet element. En scene kan virke romantisk, skremmende eller trist — bare basert på musikken.

### Lydperspektiv

Lydstyrke og kvalitet endres med avstand. Nær lyd = intimitet. Fjern lyd = avstand. En hvisken rett i kameraet føles annerledes enn et rop fra den andre enden av rommet.

### Stillhet

Stillhet er et av de mektigste lydgrepene i film. Etter en lang sekvens med lyd og musikk kan plutselig stillhet skape sjokk, ettertanke eller en overveldende følelse av tomhet. Mange regissører bruker stillhet strategisk i de mest emosjonelle øyeblikkene.`,
    },

    // ========== OPPGAVE 3: MULTIPLE CHOICE KLIPPING ==========
    {
      id: 'norsk-10-9-2-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-2-ex-3',
        number: '9.11',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'I en actionfilm klipper regissøren mellom en bombe som tikker ned (10, 9, 8...) og en helt som løper gjennom bygningen. Klippene blir kortere og kortere. Hvilken klippeteknikk brukes, og hva er effekten?',
        options: [
          {
            id: 'a',
            text: 'Montasje — for å komprimere tid og vise utvikling',
            isCorrect: false,
            feedback: 'Feil. Montasje komprimerer tid (f.eks. ukesvis trening i to minutter). Her er klippene mellom samtidige hendelser i sanntid — det er noe annet.',
          },
          {
            id: 'b',
            text: 'Jump cut — for å vise at tiden hopper',
            isCorrect: false,
            feedback: 'Feil. Jump cut er brå klipp innenfor samme scene. Her klipper vi mellom to ulike steder — bomben og helten.',
          },
          {
            id: 'c',
            text: 'Kryssklipping med akselererende tempo — klipping mellom parallelle handlinger med stadig kortere klipp som bygger spenning',
            isCorrect: true,
            feedback: 'Riktig! Kryssklipping mellom bomben og helten viser at hendelsene skjer samtidig. Det akselererende tempoet (stadig kortere klipp) øker spenningen — vi føler at tiden renner ut.',
          },
          {
            id: 'd',
            text: 'Match cut — fordi bomben og helten er visuelt like',
            isCorrect: false,
            feedback: 'Feil. Match cut handler om visuell likhet mellom to bilder. Her er det ingen visuell likhet — vi klipper mellom en bombe og en løpende person.',
          },
        ],
        solution: 'Alternativ C er riktig. Kryssklipping + akselererende tempo = maksimal spenning. Parallelle handlinger + kortere klipp = «rekker helten det?»',
      },
    },

    // ========== EKSEMPEL: KOMPLETT FILMANALYSE ==========
    {
      id: 'norsk-10-9-2-ex-komplett-film',
      type: 'example',
      title: 'Eksempel: Komplett filmanalyse av en åpningssekvens',
      problem: `Gjennomfør en filmanalyse av denne tenkte åpningssekvensen:

En ungdomsfilm åpner med et ekstremt totalt bilde av en liten by ved kysten i gråvær. Vi hører bølger og måker (diegetisk lyd) og en stille, melankolsk pianomelodi (ikke-diegetisk lyd).

Klipp til: Et halvtotalt bilde av en jente (Mia, 16) som sitter alene på en benk ved havnen, filmet i normalperspektiv. Hun ser utover havet (bort fra kameraet). Klærne er mørke, håret blåser i vinden. Ved siden av henne ligger en åpen notatbok med tomme sider.

Klipp til: Nærbilde av hendene hennes. Hun holder en penn, men skriver ikke. Pennen hviler mot papiret. En regndråpe lander på den tomme siden.

Klipp til: Halvnært av ansiktet hennes. Hun ser fortsatt bort. En svak skygge av et smil — eller er det tristhet? Vanskelig å si.

Tekst på skjermen: «September.»`,
      solution: `**Mise-en-scène:**
- Setting: Liten kystby, havn, gråvær — kommuniserer isolasjon, melankoli, enden av sommeren
- Kostyme: Mørke klær — matcher den grå stemningen, signaliserer introversjon eller sorg
- Rekvisitt: Åpen notatbok med tomme sider — symbol på kreativitet som ennå ikke er utfoldet, eller ord som mangler. Pennen som hviler = noe hun vil uttrykke, men ikke klarer.
- Regndråpen på den tomme siden — poesi i bildet. Naturen «skriver» der Mia ikke gjør det.

**Kinematografi:**
- Ekstremt totalt åpningsbilde: Plasserer historien i kontekst — liten by, isolert
- Halvtotalt av Mia på benken: Sosial distanse — vi observerer henne, men er ikke nær ennå
- Nærbilde av hendene: Skiftet til nærhet. Vi kommer inn i hennes verden. Detaljene i hendene og pennen avslører indre tilstand.
- Halvnært av ansiktet: Nærhet nok til å lete etter følelser, men hun viser oss ikke alt. Mystikk.
- Normalperspektiv: Vi er på linje med Mia — ingen maktforskjell, vi er hennes likeverdige
- Mia ser bort fra kameraet: Tilbudsrelasjon — vi observerer henne uten at hun henvender seg til oss. Skaper mystikk og distanse.

**Klipping:**
- Langsomt tempo — lange klipp som skaper ro, ettertanke, melankoli
- Gradvis innzooming: Fra ekstremt totalt → halvtotalt → nærbilde → halvnært. Vi beveger oss fra distanse til nærhet — vi nærmer oss Mia, fysisk og emosjonelt.
- Klippene er glatte og usynlige (kontinuitetskutt) — filmskaperen vil at vi skal synke inn i stemningen, ikke bli distrahert av klippene.

**Lyd:**
- Diegetisk lyd: Bølger og måker — realistisk, forankrer oss i kystbyen
- Ikke-diegetisk lyd: Melankolsk piano — styrer følelsene mot tristhet og ettertanke
- Samspill: Bølgene og pianoen jobber sammen i forsterkning — begge er langsomme, rytmiske, melankolske

**Tekst:** «September.» — Forsterkning. Forankrer tid. September = enden av sommeren, begynnelse av noe nytt, overgangstid. Passer perfekt til den melankolske stemningen.

**Samlet tolkning:** Åpningssekvensen forteller oss — uten et eneste ord fra Mia — at dette er en historie om en ensom, kreativ, ettertenksom jente i en liten by. Noe mangler i livet hennes (de tomme sidene), og hun står på terskelen til noe nytt (september). Alle modalitetene jobber sammen med perfekt koherens for å skape denne stemningen.`,
    },

    // ========== OPPGAVE 4: CLASSIC FORTELLERTEKNIKK ==========
    {
      id: 'norsk-10-9-2-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-2-ex-4',
        number: '9.12',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser filmteknikken som beskrives i hvert eksempel, og forklar effekten.',
        subTasks: [
          {
            label: 'a',
            task: 'I en scene ser vi en karakter som blåser ut en fyrstikk. Klipp — neste bilde er en soloppgang som fyller skjermen med gult lys. Formen på den slukkende flammen og den stigende solen ligner hverandre.',
            solution: 'Match cut. De to bildene er visuelt like (flammen og solen har lignende form og farge), men viser helt forskjellige ting. Effekten er en symbolsk kobling: Noe slukker (fyrstikken, natten, kanskje et gammelt liv), og noe nytt begynner (soloppgangen, en ny dag, et nytt kapittel). Overgangen er smidig og poetisk.',
            multipleChoiceOptions: ['Match cut', 'Jump cut', 'Kryssklipping', 'Smash cut'],
          },
          {
            label: 'b',
            task: 'En karakter sier rolig: «Det kommer til å gå bra.» Smash — neste klipp viser en eksplosjon.',
            solution: 'Smash cut. Det brå, overraskende klippet fra ro til kaos skaper sjokkeffekt. Kontrasten mellom den trygge dialogen og eksplosjonen er maksimal. Effekten kan være dramatisk (det gikk IKKE bra) eller ironisk/humoristisk (avhengig av konteksten). Smash cuts brukes for å ta publikum på sengen.',
            multipleChoiceOptions: ['Smash cut', 'Match cut', 'Kontinuitetskutt', 'Montasje'],
          },
          {
            label: 'c',
            task: 'Vi ser en serie korte klipp: en elev som leser, skriver, stryker ut, leser igjen, drikker kaffe, leser, skriver, sover med hodet på bøkene, våkner, leser igjen. Alt akkompagnert av motiverende musikk.',
            solution: 'Montasje. En serie korte klipp komprimerer ukesvis med lesing og eksamensforarbeid til noen sekunder. Effekten er at vi forstår at personen jobber hardt over lang tid, uten at vi trenger å se alle timene. Musikken holder energien oppe og gir sekvensen en følelse av driv og utvikling.',
            multipleChoiceOptions: ['Montasje', 'Kryssklipping', 'Jump cut', 'Smash cut'],
          },
        ],
        solution: 'a) Match cut (visuell likhet mellom to bilder), b) Smash cut (brå overgang for sjokk), c) Montasje (komprimert tid gjennom korte klipp).',
      },
    },

    // ========== OPPGAVE 5: MULTIPLE CHOICE FILMLYD ==========
    {
      id: 'norsk-10-9-2-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-2-ex-5',
        number: '9.13',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'I en skrekkfilm ser vi en karakter gå gjennom et mørkt hus. Vi hører gulvplankene knirke under føttene deres (diegetisk lyd). Plutselig stopper all diegetisk lyd, og det eneste vi hører er en lav, pulserende tone (ikke-diegetisk lyd). Hva er effekten av denne lydendringen?',
        options: [
          {
            id: 'a',
            text: 'Det signaliserer at karakteren har blitt døv',
            isCorrect: false,
            feedback: 'Feil. I filmens verden hører karakteren fortsatt normalt. Det er vi, publikum, som hører lyden endre seg. Filmskaperen bruker lyddesignet for å styre VÅRE følelser.',
          },
          {
            id: 'b',
            text: 'Det skaper en følelse av truende fare — bortfallet av realistisk lyd og den pulserende tonen signaliserer at noe farlig nærmer seg',
            isCorrect: true,
            feedback: 'Riktig! Bortfallet av diegetisk lyd fjerner realismen og erstatter den med ren stemning. Den pulserende tonen er ikke-diegetisk — bare vi hører den — og den signaliserer at noe er galt. Effekten er intens spenning.',
          },
          {
            id: 'c',
            text: 'Det er en teknisk feil i lydmiksen',
            isCorrect: false,
            feedback: 'Feil. I en ferdig film er slike lydendringer nøye planlagt. Overgangen fra diegetisk til ikke-diegetisk lyd er et bevisst artistisk valg.',
          },
          {
            id: 'd',
            text: 'Det betyr at scenen er over og filmen skifter til en ny scene',
            isCorrect: false,
            feedback: 'Feil. Lydendringen skjer midt i scenen og er ment å bygge spenning, ikke markere en overgang.',
          },
        ],
        solution: 'Alternativ B er riktig. Overgangen fra diegetisk til ikke-diegetisk lyd erstatter realisme med ren stemning og signaliserer fare.',
      },
    },

    // ========== OPPGAVE 6: FILMANALYSE ==========
    {
      id: 'norsk-10-9-2-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-2-ex-6',
        number: '9.14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Velg en scene fra en film eller serie du kjenner godt (3–5 minutter lang). Se scenen minst to ganger — én gang for opplevelsen, én gang for analysen.

Gjennomfør en komplett filmanalyse (300–400 ord) der du dekker:

a) **Mise-en-scène:** Beskriv setting, lyssetting, kostymer, rekvisitter og skuespillernes plassering. Hva kommuniserer disse elementene?

b) **Kinematografi:** Hvilke kamerainnstillinger, vinkler og bevegelser brukes? Hva er effekten?

c) **Klipping:** Hva slags klippeteknikk brukes? Er tempoet raskt eller langsomt? Hvordan påvirker det stemningen?

d) **Lyd:** Skill mellom diegetisk og ikke-diegetisk lyd. Hva bidrar lyden med?

e) **Samlet tolkning:** Hvordan jobber alle elementene sammen for å skape en bestemt stemning eller formidle et bestemt budskap?`,
        hints: [
          'Velg en scene du husker godt og som gjør inntrykk — det er lettere å analysere noe du reagerer på',
          'Se scenen med lyden av og legg merke til hva du ser. Se den deretter med lukkede øyne og legg merke til hva du hører. Til slutt: se alt sammen.',
          'Bruk fagbegrepene fra kapittelet: mise-en-scène, kinematografi, klippetempo, diegetisk/ikke-diegetisk, nærbilde, fugleperspektiv osv.',
        ],
        solution: 'En god filmanalyse identifiserer elementer fra alle fire dimensjonene (mise-en-scène, kinematografi, klipping, lyd), bruker fagbegreper presist, og forklarer hvordan elementene jobber sammen for å skape den ønskede effekten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-9-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Nøkkelbegreper
- **Mise-en-scène:** Alt synlig i bildet — setting, lys, kostymer, rekvisitter, plassering
- **Kinematografi:** Kameraarbeid — innstillinger (nærbilde til ekstremt totalt), vinkler (normal, fugle, froske, skrå), bevegelser (pan, tilt, tracking, håndholdt, zoom), fokus (grunt, dypt, rack)
- **Klipping:** Hvordan klipp settes sammen — kontinuitetskutt, jump cut, kryssklipping, montasje, match cut, smash cut
- **Klippetempo:** Raskt = spenning/kaos, langsomt = ro/intensitet, akselererende = oppbygging
- **Diegetisk lyd:** Lyd fra filmens verden (dialog, fotsteg, regn)
- **Ikke-diegetisk lyd:** Lyd bare publikum hører (filmmusikk, fortellerstemme)
- **Stillhet:** Et av de mektigste lydgrepene — skaper sjokk, ettertanke eller tomhet

### Viktige sammenhenger
- Film er den mest komplekse sammensatte teksten — den kombinerer nesten alle modaliteter
- Ingen enkeltelement virker alene — mise-en-scène, kamera, klipping og lyd jobber alltid sammen
- Gode filmskapere styrer følelsene dine uten at du merker det — filmanalyse handler om å bli bevisst på disse virkemidlene
- Å «lese» film med fagbegreper gjør deg til en bedre og mer kritisk filmbetrakter`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-9-2-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-2-ex-7',
        number: '9.15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Se en scene med og uten lyd.

Velg en emosjonelt sterk scene fra en film (f.eks. en avskjed, en konfrontasjon, et klimaks). Se scenen to ganger:

1. **Første gang:** Se scenen MED lyd, som normalt. Skriv ned hva du føler og opplever.
2. **Andre gang:** Se scenen UTEN lyd (mute). Skriv ned hva du føler nå.

Skriv en refleksjon (200–250 ord) der du:
a) Beskriver forskjellen mellom de to opplevelsene
b) Identifiserer hva lyden (dialog, musikk, lydeffekter) tilfører som bildet alene ikke kan
c) Diskuterer om scenen er mer avhengig av lyden eller bildet — og begrunner svaret med fagbegreper`,
        hints: [
          'Velg en scene der musikken spiller en viktig rolle — da blir forskjellen størst',
          'Legg merke til hva du føler i kroppen i begge tilfeller — er spenningen den samme?',
          'Bruk begrepene affordans og intersemiotisk relasjon i analysen',
        ],
        solution: 'De fleste opplever at scenen mister mye av sin emosjonelle kraft uten lyd. Musikk har høy affordans for umiddelbar emosjonell påvirkning, og den ikke-diegetiske lyden styrer ofte mer av opplevelsen enn vi tror.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-9-2-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-2-ex-8',
        number: '9.16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Skriv et reginotat for en kort scene.

Skriv et detaljert reginotat (150–200 ord) for en filmscene på 30–60 sekunder. Scenen skal handle om en person som mottar en viktig melding (SMS, brev, telefonsamtale — du bestemmer).

Reginotatet skal inneholde:
a) **Mise-en-scène:** Beskriv settingen, lyssettingen og rekvisittene
b) **Kinematografi:** Beskriv kamerainnstillinger, vinkler og bevegelser
c) **Klipping:** Beskriv hvordan du vil klippe scenen — hvilke klipp, i hvilken rekkefølge, med hvilket tempo?
d) **Lyd:** Beskriv diegetisk og ikke-diegetisk lyd

I en kort analyse (100 ord) under reginotatet: Forklar HVORFOR du valgte akkurat disse virkemidlene. Hva ønsker du at publikum skal føle?`,
        hints: [
          'Tenk på stemningen du vil skape: Er meldingen god eller dårlig? Forventet eller overraskende?',
          'Husk at alle valg kommuniserer: Lyssettingen, kameravinkelen, lyden — alt påvirker opplevelsen',
          'Start gjerne med sluttstemningen og jobb bakover: Hva skal publikum føle? Hvilke valg skaper den følelsen?',
        ],
        solution: 'Et godt reginotat viser at du forstår samspillet mellom mise-en-scène, kinematografi, klipping og lyd, og at du kan begrunne alle valgene dine med filmteoretiske begreper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9.3: Tegneserier og grafiske noveller
// LK20: Lese, analysere og tolke sammensatte tekster og vurdere hvordan
//        ulike modaliteter spiller sammen
// ============================================================================

export const CHAPTER_NORSK_10_9_3: TextbookChapter = {
  id: 'norsk-10-9-3',
  courseId: 'norsk-10',
  chapterNumber: '9.3',
  title: 'Tegneserier og grafiske noveller',
  description: 'Lær om tegneseriens unike formspråk — ruter, overganger, snakkebobler, bevegelseslinjer og visuell fortelling. Analyser grafiske noveller som sammensatte tekster og forstå hvorfor tegneserien er en seriøs kunstform.',
  estimatedMinutes: 75,
  competenceGoals: [
    'lese, analysere og tolke sammensatte tekster og vurdere hvordan ulike modaliteter spiller sammen',
    'bruke fagspråk til å beskrive virkemidler i tegneserier og grafiske noveller',
    'utforske og reflektere over sammensatte tekster som kunstform og kulturuttrykk',
  ],
  keyTerms: [
    { term: 'Rute (panel)', definition: 'Den avgrensede bilderammen i en tegneserie — den grunnleggende byggesteinen' },
    { term: 'Rennestein (gutter)', definition: 'Mellomrommet mellom rutene — der leserens fantasi fyller inn det som skjer mellom bildene' },
    { term: 'Snakkeboble (taleboble)', definition: 'En avgrenset form som inneholder dialog — formen kommuniserer hvordan teksten leses (tale, tanke, rop)' },
    { term: 'Closure (lukking)', definition: 'Den mentale prosessen der leseren fyller inn handling og tid mellom to ruter — hjernen kobler bildene til en sammenhengende historie' },
    { term: 'Grafisk novelle', definition: 'En lengre, sammenhengende tegneseriefortelling med litterære ambisjoner — ofte med komplekse tema og voksen tematikk' },
    { term: 'Bevegelseslinjer', definition: 'Streker i bildet som viser bevegelse og fart — et visuelt virkemiddel unikt for tegneserien' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-9-3-intro',
      type: 'text',
      content: `## Tegneserier og grafiske noveller: Når bilder forteller historier

Tegneserien er en merkelig og fascinerende kunstform. Den er ikke film — bildene beveger seg ikke. Den er ikke litteratur — ordene alene forteller ikke historien. Den er ikke bildende kunst — et enkelt tegneseriebilde gir sjelden mening alene. Tegneserien er noe eget: en sammensatt tekst der bilder og ord jobber sammen på en måte som er helt unik.

Det som gjør tegneserien spesiell, er det som **ikke** er der. Mellom to ruter i en tegneserie kan det gå et sekund eller et tiår. En karakter kan bevege seg fra et rom til et annet, fra en by til en annen, fra livet til døden — i mellomrommet mellom to bilder. Og hvem fyller inn det som mangler? Det gjør **du**, leseren. Din fantasi kobler bildene sammen til en sammenhengende historie. Ingen annen kunstform krever like aktiv deltakelse fra mottakeren.

Lenge ble tegneserier sett på som barneunderholdning — noe useriøst og lite litterært. Det har endret seg dramatisk. I dag er **grafiske noveller** anerkjent som en seriøs kunstform. Art Spiegelmans «Maus» (om Holocaust, med jøder tegnet som mus og nazister som katter) vant Pulitzerprisen i 1992. Marjane Satrapis «Persepolis» (om oppvekst i Iran under revolusjonen) er pensum på universiteter verden over. Og norske Jason (John Arne Sæterøy) er internasjonalt anerkjent for sine ordløse og melankolske tegneserier.

I dette kapittelet skal du lære å:
- Forstå tegneseriens **unike formspråk** — ruter, rennestein, snakkebobler, bevegelseslinjer
- Analysere **overganger mellom ruter** og forstå «closure»
- Analysere **grafiske noveller** som sammensatte tekster
- Forstå tegneserien som en seriøs **kunstform og kulturuttrykk**`,
    },

    // ========== DEFINISJON: TEGNESERIENS FORMSPRÅK ==========
    {
      id: 'norsk-10-9-3-def-1',
      type: 'definition',
      title: 'Tegneseriens grunnleggende formspråk',
      content: `Tegneserien har et eget visuelt «språk» med konvensjoner som lesere forstår intuitivt:

**Ruter (panels):** Avgrensede bilderammer som er tegneseriens grunnleggende byggesteiner. Rutenes størrelse, form og plassering kommuniserer mening:
- Store ruter = viktige øyeblikk, vide landskaper, dramatiske hendelser
- Små ruter = raske øyeblikk, detaljer, tempo
- Ruter uten ramme = drøm, minner, tidløshet
- Skrå eller uregelmessige ruter = kaos, uro, brudd med det normale

**Rennestein (gutter):** Mellomrommet mellom rutene. Her skjer **closure** — leserens hjerne fyller inn det som mangler. Rennesteinen er «usynlig», men den er der hele magien skjer.

**Snakkebobler (talebobler):**
- **Oval med pil:** Normal tale
- **Bølgete boble:** Svak stemme, hvisking, usikkerhet
- **Takket/eksploderende boble:** Rop, sinne, sjokk
- **Tankeboble (sky-form):** Indre tanker
- **Firkant med rett kant:** Fortellerstemme, narrasjon

**Lydord (onomatopoetikon):** Visuelle ord som representerer lyder: «BANG!», «KRASJ!», «tikk tikk tikk». Skrifttypen, størrelsen og fargen kommuniserer lydens karakter.

**Bevegelseslinjer:** Streker som viser bevegelse — en slag, et løp, et fall. Jo flere og tykkere linjer, desto raskere bevegelse.

**Emanata:** Små symboler rundt en karakter som viser følelser: svettedråper (nervøsitet), stjerner (smerte), hjerter (forelskelse), lyspære (idé), spørsmålstegn (forvirring).`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE FORMSPRÅK ==========
    {
      id: 'norsk-10-9-3-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-3-ex-1',
        number: '9.17',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'I en tegneserie ser du en snakkeboble formet som en sky (med små bobler som peker mot karakteren i stedet for en pil). Hva betyr dette?',
        options: [
          { id: 'a', text: 'Karakteren snakker normalt', isCorrect: false, feedback: 'Feil. Normal tale vises med en oval boble med en pil. Sky-formen signaliserer noe annet.' },
          { id: 'b', text: 'Karakteren roper eller er sint', isCorrect: false, feedback: 'Feil. Rop og sinne vises med en takket, eksploderende boble — ikke en sky-form.' },
          { id: 'c', text: 'Karakteren tenker — teksten er indre tanker som andre karakterer ikke kan høre', isCorrect: true, feedback: 'Riktig! Sky-formen er den universelle tegneseriekonvensjonen for tanker.' },
          { id: 'd', text: 'Karakteren hvisker veldig lavt', isCorrect: false, feedback: 'Feil. Hvisking vises gjerne med en bølgete eller stiplet boble — ikke en sky-form.' },
        ],
        solution: 'Alternativ C er riktig. Sky-formen med små bobler betyr tanker.',
      },
    },

    // ========== CLOSURE OG OVERGANGER ==========
    {
      id: 'norsk-10-9-3-closure',
      type: 'text',
      content: `## Closure — fantasien som limer bildene sammen

Den amerikanske tegneserieteoretikeren Scott McClouds viktigste bidrag til forståelsen av tegneserier er begrepet **closure**. Closure er den mentale prosessen der hjernen din fyller inn det som mangler mellom to bilder, og skaper en sammenhengende opplevelse.

**Eksempel:** I rute 1 ser du en person som svinger en øks. I rute 2 hører du «AAAARGH!». Mellom disse to rutene — i rennesteinen — fyller hjernen din inn selve handlingen. Du «ser» for deg at øksen treffer. Men det bildet finnes ikke i tegneserien — det finnes bare i hodet ditt.

Dette er tegneseriens genialitet: Den lar leseren bli **medforfatter**. Filmen viser deg alt. Tegneserien viser deg to bilder og lar hjernen din gjøre resten.

### Scott McClouds seks overgangstyper

McCloud identifiserte seks typer overganger mellom ruter:

**1. Øyeblikk-til-øyeblikk:** Svært lite tid mellom rutene. Nesten som slow motion.

**2. Handling-til-handling:** Én karakter utfører en sekvens av handlinger. Den vanligste overgangstypen.

**3. Subjekt-til-subjekt:** Vi holder oss i samme scene, men bytter fokus fra én ting til en annen.

**4. Scene-til-scene:** Vi hopper til en helt annen tid eller et helt annet sted. Krever mest closure.

**5. Aspekt-til-aspekt:** Vi ser ulike sider av samme øyeblikk, sted eller stemning. Handlingen «stopper opp». Svært vanlig i japansk manga.

**6. Non sequitur:** Ingen logisk sammenheng mellom rutene. Sjelden, men kan skape humor eller surrealistisk effekt.

Når du analyserer en tegneserie, er overgangene mellom rutene like viktige som innholdet i rutene. Hvilke overgangstyper dominerer? Mye handling-til-handling gir tempo og driv. Mye aspekt-til-aspekt gir ro og stemning. Scene-til-scene gir dramatiske hopp.`,
    },

    // ========== DEFINISJON: CLOSURE ==========
    {
      id: 'norsk-10-9-3-def-2',
      type: 'definition',
      title: 'Closure (lukking)',
      content: `**Closure** er den mentale prosessen der leseren fyller inn handling, tid og sammenheng mellom to tegneserieruter.

Begrepet ble gjort sentralt i tegneserieteori av Scott McCloud i boken «Understanding Comics» (1993). McCloud argumenterer for at closure er det som gjør tegneserien til en unik kunstform: Leseren er **aktiv medforfatter** av historien.

**Slik fungerer det:**
- Du ser rute 1 og rute 2
- Mellom dem (i rennesteinen) fyller hjernen din inn det som mangler
- Du skaper en sammenhengende hendelse basert på de to bildene
- Jo mer som er utelatt mellom rutene, desto mer closure kreves

**Filmens parallell:** Film krever nesten ingen closure — alt er vist for deg i bevegelse. Tegneserien krever closure hele tiden — og det er derfor den engasjerer hjernen på en annen måte enn film.`,
    },

    // ========== EKSEMPEL: ANALYSE AV GRAFISK NOVELLE ==========
    {
      id: 'norsk-10-9-3-ex-grafisk',
      type: 'example',
      title: 'Eksempel: Analyse av en sekvens fra en grafisk novelle',
      problem: `Tenk deg følgende sekvens fra en grafisk novelle om en tenåring som nettopp har mistet bestefaren sin:

**Rute 1:** Halvtotalt bilde. Isak (15) sitter i baksetet av en bil. Han ser ut av vinduet. Dempet blått og grått. Ingen tekst.
**Rute 2:** Nærbilde av Isaks hånd. Han holder et gammelt lommeur. Viserne står stille. Ingen tekst.
**Rute 3:** Dobbeltside. Ekstremt totalt bilde av en tom strand med grått hav. Langt borte en liten skikkelse. Fortellerstemme: «Bestefar sa alltid at havet er det eneste som aldri forandrer seg.»
**Rute 4:** Halvnært av Isaks ansikt. Han ser mot leseren. Blanke øyne. Et lite smil. Ingen tekst.

Analyser sekvensen som sammensatt tekst.`,
      solution: `**Rutene og formatet:**
Variasjon i rutestørrelse med bevisst effekt. Normalstørrelse i rute 1–2 holder vanlig tempo. Rute 3 sprenger formatet med en dobbeltside — det store rommet reflekterer det emosjonelle omfanget. Rute 4 er tilbake til normalt — vi vender tilbake til Isak.

**Overganger og closure:**
- Rute 1 → 2: Subjekt-til-subjekt. Vi forstår at uret tilhørte bestefaren.
- Rute 2 → 3: Scene-til-scene/aspekt-til-aspekt. Er det et minne? Fantasi? Leseren fyller inn med closure.
- Rute 3 → 4: Tilbake til Isak. Fra det yttre til det indre.

**Symbolikk:**
- Lommeuret med stille visere = tiden har stoppet, bestefaren er borte
- Havet = det evige, det uforanderlige — kontrast til døden som forandrer alt
- Isaks blikk mot leseren (rute 4) = sjelden krav-relasjon. Intimt, nesten som en bønn.

**Intersemiotiske relasjoner:**
Teksten og bildet står i utdyping — begge handler om det uforanderlige. Men underforstått er det en kontrast: Havet forandrer seg ikke — men livet gjør det.`,
    },

    // ========== OPPGAVE 2: CLASSIC OVERGANGSTYPER ==========
    {
      id: 'norsk-10-9-3-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-3-ex-2',
        number: '9.18',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser overgangstypen (ifølge Scott McCloud) i hvert eksempel.',
        subTasks: [
          {
            label: 'a',
            task: 'Rute 1: En person kaster en ball opp i luften. Rute 2: Ballen lander i en hunds munn.',
            solution: 'Handling-til-handling. Samme karakter utfører en handlingssekvens. Closure fyller inn ballens bue gjennom luften.',
            multipleChoiceOptions: ['Handling-til-handling', 'Subjekt-til-subjekt', 'Scene-til-scene', 'Aspekt-til-aspekt'],
          },
          {
            label: 'b',
            task: 'Rute 1: Et barn blåser ut lysene på en bursdagskake. Rute 2: En gammel person blåser ut lysene på en bursdagskake.',
            solution: 'Scene-til-scene. Vi hopper over et helt liv — fra barndommen til alderdommen. Krever mye closure.',
            multipleChoiceOptions: ['Scene-til-scene', 'Handling-til-handling', 'Øyeblikk-til-øyeblikk', 'Non sequitur'],
          },
          {
            label: 'c',
            task: 'Rute 1: Regndråper mot et vindu. Rute 2: En tom kaffekopp. Rute 3: En halvåpen bok. Rute 4: En katt som sover.',
            solution: 'Aspekt-til-aspekt. Ingen handling — vi utforsker ulike sider av samme stemning. Rutene bygger en atmosfære: regn, tomhet, ro. Typisk for japansk manga.',
            multipleChoiceOptions: ['Aspekt-til-aspekt', 'Subjekt-til-subjekt', 'Scene-til-scene', 'Handling-til-handling'],
          },
        ],
        solution: 'a) Handling-til-handling, b) Scene-til-scene, c) Aspekt-til-aspekt.',
      },
    },

    // ========== GRAFISKE NOVELLER ==========
    {
      id: 'norsk-10-9-3-grafisk-novelle',
      type: 'text',
      content: `## Grafiske noveller — tegneserien blir litteratur

En **grafisk novelle** er en lengre, sammenhengende tegneseriefortelling — ofte med den dybden og kompleksiteten vi forbinder med romaner. Begrepet brukes for å skille mellom korte tegneserier og mer ambisiøse verk som utforsker alvorlige tema.

### Hva gjør grafiske noveller spesielle?

**1. Visuell fortellerkraft:** Grafiske noveller kan vise det som er vanskelig å si med ord. Art Spiegelman tegnet jøder som mus og nazister som katter i «Maus» — en visuell metafor som gjør Holocaust-opplevelsen både mer tilgjengelig og mer ubehagelig.

**2. Uatskillelig tekst og bilde:** I en illustrert bok kan du fjerne bildene og fortsatt forstå historien. I en grafisk novelle brytes historien i stykker uten bildene. Tekst og bilde forteller historien **sammen** gjennom avløsning.

**3. Kontroll over lesetempo:** Små ruter med mye tekst bremser deg. Store, ordløse dobbelsider tvinger deg til å stoppe og betrakte. Raske, smale paneler akselererer tempoet.

**4. Emosjonell tilgjengelighet:** Grafiske noveller gjør vanskelige tema tilgjengelige — ikke enklere, men mer **konkrete**. Den visuelle modaliteten har høy affordans for umiddelbar emosjonell virkning.

### Viktige grafiske noveller

- **«Maus»** av Art Spiegelman (1986/1991) — Holocaust gjennom dyremetaforer. Pulitzerprisvinner.
- **«Persepolis»** av Marjane Satrapi (2000–2003) — Oppvekst i Iran under revolusjonen.
- **«Jeg drepte Adolf Hitler»** av Jason (2006) — Norsk mesterverk med minimalistisk stil.
- **«Blankets»** av Craig Thompson (2003) — Oppvekstskildring om kjærlighet og identitet.
- **«Fun Home»** av Alison Bechdel (2006) — Selvbiografi om familiehemmeligheter.`,
    },

    // ========== DEFINISJON: GRAFISK NOVELLE ==========
    {
      id: 'norsk-10-9-3-def-3',
      type: 'definition',
      title: 'Grafisk novelle vs. tegneserie',
      content: `**Grafisk novelle (graphic novel)** er en lengre, sammenhengende tegneseriefortelling som vanligvis har litterære ambisjoner.

**Forskjellen fra tradisjonell tegneserie:**
- **Tegneserie (comic):** Ofte seriebasert, kan være humoristisk eller action-orientert, gjerne kortere format
- **Grafisk novelle:** Selvstendig, avsluttet fortelling. Ofte utgitt som bok. Utforsker gjerne alvorlige tema.

**Ulike nasjonale tradisjoner:**
- **Amerikansk:** Superhelter (Marvel, DC), underground comix, graphic novels
- **Franco-belgisk:** «Bande dessinée» (BD) — Tintin, Asterix, ambisiøse voksenverk
- **Japansk:** Manga — enormt utbredt, dekker alle sjangre og aldersgrupper
- **Norsk:** Jason (John Arne Sæterøy), Lise Myhre (Nemi), Lars Fiske, Steffen Kverneland`,
    },

    // ========== OPPGAVE 3: MULTIPLE CHOICE GRAFISK NOVELLE ==========
    {
      id: 'norsk-10-9-3-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-3-ex-3',
        number: '9.19',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er den viktigste forskjellen mellom en grafisk novelle og en illustrert bok?',
        options: [
          { id: 'a', text: 'En grafisk novelle er laget for barn, mens en illustrert bok er for voksne', isCorrect: false, feedback: 'Feil. Mange grafiske noveller er for voksne og tar opp alvorlige tema.' },
          { id: 'b', text: 'I en grafisk novelle er tekst og bilde uatskillelige — historien brytes uten bildene. I en illustrert bok kan du forstå historien fra teksten alene', isCorrect: true, feedback: 'Riktig! I en grafisk novelle forteller tekst og bilde historien sammen. Fjerner du bildene, forsvinner historien.' },
          { id: 'c', text: 'En grafisk novelle har alltid farger, mens illustrerte bøker er svart-hvitt', isCorrect: false, feedback: 'Feil. Mange berømte grafiske noveller (som «Maus» og «Persepolis») er i svart-hvitt.' },
          { id: 'd', text: 'Det er ingen forskjell — begrepene betyr det samme', isCorrect: false, feedback: 'Feil. Forholdet mellom tekst og bilde er fundamentalt ulikt i de to formatene.' },
        ],
        solution: 'Alternativ B er riktig. I grafiske noveller er tekst og bilde integrert — de er avhengige av hverandre.',
      },
    },

    // ========== OPPGAVE 4: CLASSIC TEGNESERIEANALYSE ==========
    {
      id: 'norsk-10-9-3-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-3-ex-4',
        number: '9.20',
        type: 'classic',
        difficulty: 'medium',
        task: `Tegn (eller beskriv med ord) en tegneseriesekvens på fire ruter som forteller en liten historie.

a) Rute 1: Bruk en stor rute for å etablere settingen
b) Rute 2 og 3: Bruk handling-til-handling-overgang for å vise noe som skjer
c) Rute 4: Avslutt med et nærbilde som avslører en følelse eller overraskelse
d) Bruk minst én snakkeboble, én lydeffekt og én bevegelseslinje

Skriv en kort forklaring (50–100 ord) av de bevisste valgene dine.`,
        hints: [
          'Hold historien enkel — fire ruter er lite å jobbe med',
          'Tenk på hva som skjer i rennesteinen mellom rutene',
          'Rutestørrelsen kommuniserer: Stor rute = viktig øyeblikk',
        ],
        solution: 'En god sekvens viser at du forstår tegneseriens formspråk: variasjon i rutestørrelse, bevisst valg av overgangstype, korrekt bruk av snakkeboble/lydord/bevegelseslinjer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 5: MULTIPLE CHOICE CLOSURE ==========
    {
      id: 'norsk-10-9-3-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-3-ex-5',
        number: '9.21',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor er «closure» (lukking) så viktig i tegneserieteorien?',
        options: [
          { id: 'a', text: 'Fordi closure handler om hvordan tegneserier avsluttes med en tydelig slutt', isCorrect: false, feedback: 'Feil. Closure handler om prosessen som skjer mellom rutene — ikke om avslutningen.' },
          { id: 'b', text: 'Fordi closure gjør leseren til aktiv medforfatter — hjernen fyller inn handling og tid mellom rutene, noe som gjør tegneserien unik som kunstform', isCorrect: true, feedback: 'Riktig! Closure gjør tegneserien spesiell. Leseren skaper aktivt sammenheng mellom bildene.' },
          { id: 'c', text: 'Fordi closure betyr at tegneserier alltid har lukkede, firkantede ruter', isCorrect: false, feedback: 'Feil. Closure handler ikke om formen på rutene, men om den mentale prosessen mellom dem.' },
          { id: 'd', text: 'Fordi closure er et teknisk begrep for trykkeprosessen', isCorrect: false, feedback: 'Feil. Closure er et kognitivt begrep — det handler om hvordan hjernen prosesserer tegneserier.' },
        ],
        solution: 'Alternativ B er riktig. Closure gjør tegneserien unik ved å kreve aktiv deltakelse fra leseren.',
      },
    },

    // ========== OPPGAVE 6: GRAFISK NOVELLE-ANALYSE ==========
    {
      id: 'norsk-10-9-3-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-3-ex-6',
        number: '9.22',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Finn et utdrag fra en grafisk novelle eller tegneserie (søk på nettet etter eksempelsider fra «Maus», «Persepolis», en manga eller en norsk tegneserie). Analyser en sekvens på 4–8 ruter.

Skriv en analyse (200–300 ord) der du:
a) Beskriver rutene og deres størrelse/form
b) Identifiserer overgangstyper mellom rutene
c) Analyserer samspillet mellom tekst og bilde
d) Vurderer bruk av formgrep: snakkebobler, lydeffekter, bevegelseslinjer, farger
e) Diskuterer hva closure krever av deg som leser`,
        hints: [
          'Velg en sekvens som gjør inntrykk på deg',
          'Bruk fagbegrepene: rute, rennestein, closure, overgangstype, intersemiotisk relasjon',
          'Det som IKKE er vist er ofte like viktig som det som er vist',
        ],
        solution: 'En god tegneserieanalyse bruker Scott McClouds begreper og analyserer samspillet mellom tekst og bilde med presise fagtermer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-9-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Nøkkelbegreper
- **Rute (panel):** Tegneseriens grunnleggende byggestein — en avgrenset bilderamme
- **Rennestein (gutter):** Mellomrommet mellom rutene — der closure skjer
- **Closure (lukking):** Leserens mentale prosess der hjernen fyller inn handling mellom ruter
- **Snakkeboble:** Oval = tale, sky = tanker, takket = rop, firkant = fortellerstemme
- **McClouds overgangstyper:** Øyeblikk-til-øyeblikk, handling-til-handling, subjekt-til-subjekt, scene-til-scene, aspekt-til-aspekt, non sequitur
- **Grafisk novelle:** Lengre, sammenhengende tegneseriefortelling med litterære ambisjoner
- **Emanata:** Visuelle symboler for følelser (svettedråper, hjerter, stjerner)

### Viktige sammenhenger
- Tegneserien er unik fordi den krever **aktiv leserdeltakelse** gjennom closure
- Tekst og bilde er **uatskillelige** i tegneserien — de forteller historien sammen
- Rutestørrelse og overgangstyper styrer **lesetempot** og stemningen
- Grafiske noveller er en seriøs kunstform som kan utforske komplekse tema med visuell kraft`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-9-3-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-3-ex-7',
        number: '9.23',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Lag en kort tegneseriefortelling (6–10 ruter) med begynnelse, midtdel og avslutning.

Krav:
a) Bruk minst tre ulike overgangstyper
b) Varier rutestørrelsene bevisst
c) Bruk minst to typer snakkebobler
d) Inkluder minst én rute helt uten tekst

Skriv en kort refleksjon (100–150 ord) med fagbegreper.`,
        hints: [
          'Planlegg historien FØR du tegner',
          'Det trenger ikke å være pent tegnet — fortellingen er det viktigste',
          'La rennesteinen gjøre arbeid — hva fyller leseren inn selv?',
        ],
        solution: 'En god tegneseriefortelling viser bevisst bruk av formspråket: variasjon i rutestørrelse, gjennomtenkte overgangstyper, og minst ett ordløst øyeblikk der bildet bærer fortellingen alene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-9-3-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-3-ex-8',
        number: '9.24',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Sammenlign tegneserie med film.

Tenk deg at en kort historie skal fortelles som tegneseriesekvens og som filmsekvens. Skriv en sammenligning (200–300 ord) der du:
a) Forklarer hvilke virkemidler tegneserien har som filmen ikke har (og omvendt)
b) Diskuterer affordans: Hva egner hvert medium seg best til?
c) Reflekterer over closure: Hva må leseren fylle inn i tegneserien som filmen viser direkte?
d) Vurderer hvilket medium som best kan formidle den emosjonelle kjernen`,
        hints: [
          'Tenk på forskjellen mellom å SE bevegelse (film) og å FORESTILLE SEG bevegelse (tegneserie)',
          'Lyd er en viktig forskjell — tegneserien har bare visuelle representasjoner av lyd',
          'Film styrer tempoet. Tegneserien lar deg styre det selv.',
        ],
        solution: 'En god sammenligning viser at hvert medium har unike styrker. Film har lyd, bevegelse og styrt tempo. Tegneserien har closure, leserstyrt tempo og visuell symbolikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9.4: Digital fortelling og podcasting
// LK20: Utforske og vurdere hvordan digitale medier påvirker og endrer
//        språk og kommunikasjon
// ============================================================================

export const CHAPTER_NORSK_10_9_4: TextbookChapter = {
  id: 'norsk-10-9-4',
  courseId: 'norsk-10',
  chapterNumber: '9.4',
  title: 'Digital fortelling og podcasting',
  description: 'Lær å lage digitale fortellinger og podkaster med bevisst bruk av stemme, lyd, musikk og fortellerteknikk. Forstå podcast som sjanger og medieuttrykk.',
  estimatedMinutes: 75,
  competenceGoals: [
    'utforske og vurdere hvordan digitale medier påvirker og endrer språk og kommunikasjon',
    'lage sammensatte tekster med bevisst bruk av ulike uttrykksmåter',
    'eksperimentere med kreative uttrykksformer i digitale medier',
  ],
  keyTerms: [
    { term: 'Digital fortelling', definition: 'En kort, personlig fortelling som kombinerer fortellerstemme, bilder, video og musikk i et digitalt format' },
    { term: 'Podcast', definition: 'Et lydbasert medium der innhold distribueres som episoder — samtaler, intervjuer, fortellinger eller monologer' },
    { term: 'Lydlandskap (soundscape)', definition: 'Den totale lydopplevelsen i en produksjon — bakgrunnslyder, musikk, stemme og stillhet som sammen skaper en auditiv atmosfære' },
    { term: 'Fortellerstemme (voice-over)', definition: 'En stemme som forteller over bilder, lyd eller musikk — bærer den narrative tråden' },
    { term: 'Lydbroing', definition: 'Å la lyden fra en scene fortsette inn i neste, eller starte lyden fra neste scene før bildet skifter' },
    { term: 'Fortellerdriv', definition: 'Det som holder lytteren interessert — spenning, nysgjerrighet, emosjonell investering' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-9-4-intro',
      type: 'text',
      content: `## Digital fortelling og podcasting: Fortell med lyd og bilde

I 2024 lyttet over 60 prosent av norske ungdommer mellom 13 og 19 år jevnlig på podkaster. True crime-podkaster tiltrekker millioner av lyttere verden over. Og i klasserommet har digital fortelling blitt et viktig verktøy for å kombinere personlig skriving med multimodale uttrykksmåter.

Hva har disse til felles? De bruker **lyd** som primær modalitet — men på helt ulike måter. En samtalepodkast bruker humor og kjemi. En true crime-podkast bruker spenning, dramatisk musikk og intervjuer. En digital fortelling kombinerer personlig fortellerstemme med bilder og musikk for å skape en sterk, emosjonell opplevelse.

Det som gjør lyd til et så kraftig medium, er at det er **intimt**. Når du hører noen snakke rett inn i øret ditt gjennom hodetelefoner, føles det som om de snakker bare til deg. Lyd skaper en nærhet som tekst og bilde sjelden oppnår. Og fordi lyd ikke krever synet, kan du lytte mens du går, sykler, trener eller ligger i sengen.

I dette kapittelet skal du lære å:
- Forstå **digital fortelling** som sjanger og multimodalt uttrykk
- Forstå **podcasting** som medieuttrykk og analysere podkaster kritisk
- Lære om **lydlandskap** og hvordan lyd skaper stemning
- Planlegge, produsere og evaluere din egen **digitale fortelling eller podkast-episode**`,
    },

    // ========== DEFINISJON: DIGITAL FORTELLING ==========
    {
      id: 'norsk-10-9-4-def-1',
      type: 'definition',
      title: 'Digital fortelling',
      content: `En **digital fortelling** (også kalt «digital storytelling») er en kort, personlig fortelling som kombinerer **fortellerstemme** med **bilder, video og musikk** i et digitalt format. Typisk varighet: 2–5 minutter.

**Kjennetegn:**
- **Personlig:** Handler om en opplevelse eller et tema som betyr noe for deg
- **Fortellerstemme:** Din egen stemme bærer fortellingen
- **Multimodal:** Kombinerer stemme, stillbilder/video, musikk og lydeffekter
- **Kort:** Konsentrert format tvinger deg til å velge det vesentlige
- **Narrativ:** Følger en fortellingsstruktur med begynnelse, midte og slutt

**De syv elementene (Joe Lambert):**
1. **Synspunkt:** Hva er din personlige vinkel?
2. **Dramatisk spørsmål:** Hva holder lytteren engasjert?
3. **Emosjonelt innhold:** Hva føler du — og hva vil du at mottakeren skal føle?
4. **Stemmen din:** Din egen stemme gir autentisitet
5. **Musikk:** Forsterker stemningen
6. **Økonomi:** Bruk bare det som er nødvendig
7. **Tempo:** Veksle mellom raskt og rolig for dynamikk`,
    },

    // ========== EKSEMPEL: DIGITAL FORTELLING ==========
    {
      id: 'norsk-10-9-4-ex-digital',
      type: 'example',
      title: 'Eksempel: Planlegging av en digital fortelling',
      problem: `Du skal lage en digital fortelling om «et øyeblikk som forandret hvordan jeg ser på noe». Vis hvordan du planlegger med de syv elementene.`,
      solution: `**Tema:** Øyeblikket da bestefar fortalte at han hadde kommet til Norge som flyktning.

**1. Synspunkt:** Jeg visste alltid at bestefar var «fra et annet land», men tenkte aldri over hva det betød. Nå forstår jeg at hans historie også er min historie.

**2. Dramatisk spørsmål:** Hva skjulte bestefar — og hvorfor fortalte han det akkurat den kvelden?

**3. Emosjonelt innhold:** Overraskelse → medlidenhet → stolthet → ny forståelse

**4. Stemmen min:** Rolig, ettertenksom. Pauser for å la ordene synke inn.

**5. Musikk:** Forsiktig akustisk gitar. Ekte, ikke filmatisk.

**6. Økonomi:** Bare tre bilder: Gammelt foto av bestefar. Kjøkkenbordet der vi satt. Mine hender som holder fotoet. Ingen videoklipp.

**7. Tempo:** Langsomt i starten (det vanlige livet). Akselererer når han forteller. Bremser ned ved erkjennelsen. Slutter med lang pause og siste bilde.

**Manus (utdrag):**
«Bestefar lagde alltid lammegryte på søndager. Det var det eneste fra hjemlandet han snakket om — maten. Jeg trodde det var alt han savnet. Men den kvelden — det var november, det regnet — satte han seg ned og sa: 'Det er noe du bør vite.'»`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE DIGITAL FORTELLING ==========
    {
      id: 'norsk-10-9-4-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-4-ex-1',
        number: '9.25',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er det viktigste elementet som gjør en digital fortelling personlig og autentisk?',
        options: [
          { id: 'a', text: 'Profesjonelt filmkamera og studiobelysning', isCorrect: false, feedback: 'Feil. Profesjonelt utstyr er ikke det som gjør fortellingen personlig.' },
          { id: 'b', text: 'Fortellerens egen stemme — den gir ekthet og nærhet', isCorrect: true, feedback: 'Riktig! Fortellerstemmen er kjernen. Din egen stemme med dine pauser og følelser skaper autentisitet.' },
          { id: 'c', text: 'Mange spesialeffekter og animasjoner', isCorrect: false, feedback: 'Feil. Spesialeffekter kan svekke fortellingen — «økonomi» betyr å kutte det unødvendige.' },
          { id: 'd', text: 'At fortellingen er minst 15 minutter lang', isCorrect: false, feedback: 'Feil. Digitale fortellinger er typisk 2–5 minutter. Det korte formatet gjør fortellingen sterkere.' },
        ],
        solution: 'Alternativ B er riktig. Fortellerstemmen gir ekthet, nærhet og personlighet.',
      },
    },

    // ========== PODCAST ==========
    {
      id: 'norsk-10-9-4-podcast',
      type: 'text',
      content: `## Podcast — lydens renessanse

Podkasten har revolusjonert mediebruk blant unge. I en verden dominert av skjermer har podkasten vist at **lyd alene** kan være like engasjerende som video.

### Hva gjør podcasting spesiell?

**Intimitet:** Podkaster lyttes til gjennom hodetelefoner. Stemmen kommer rett inn i øret. Gode podkastverter føles som venner.

**Tilgjengelighet:** Du kan lytte mens du gjør andre ting. Podkasten krever ikke full oppmerksomhet.

**Demokratisering:** Hvem som helst med en mikrofon kan lage en podkast. Stemmer som ikke slipper til i tradisjonelle medier, kan nå et publikum.

### Podkast-sjangre

**Samtalepodkast:** Uformell samtale om et tema. Eksempel: «Papaya», «Lørdagsrådet».
**Intervjupodkast:** Vert intervjuer gjester. Eksempel: «Misjonen» (NRK).
**Narrativ podkast:** Fortelling med fortellerstemme, intervjuer, lydeffekter og musikk. Nesten som en «lydfilm». Eksempel: «Serial».
**Monolog/essay-podkast:** Én person snakker strukturert om et tema.
**True crime:** Dokumentarer om virkelige kriminalsaker. Den mest populære sjangeren blant unge.

### Lydlandskap i podcast

Et **lydlandskap** (soundscape) er den totale lydopplevelsen:
- **Stemme(r):** Tonefall, tempo, pauser og energi kommuniserer personlighet
- **Bakgrunnslyd/atmo:** Kafélyder, natur, romlyd. Skaper atmosfære.
- **Musikk:** Intro/outro, stemningsmusikk, overganger. Styrer følelsene.
- **Lydeffekter:** Dørsmell, fotsteg. Skaper realisme i narrative podkaster.
- **Stillhet:** Pauser er like viktige som lyd. En godt plassert pause kan være mer virkningsfull enn musikk.

### Lydbroing

**Lydbroing** er en teknikk der lyden fra én scene fortsetter inn i neste — eller der lyden fra neste scene starter før den forrige er ferdig. Effekten er smidige, nesten umerkelige overganger.`,
    },

    // ========== DEFINISJON: FORTELLERDRIV ==========
    {
      id: 'norsk-10-9-4-def-2',
      type: 'definition',
      title: 'Fortellerdriv i lyd-fortelling',
      content: `**Fortellerdriv** er det som holder lytteren engasjert. I et lydmedium har du bare **lyd** — da blir fortellerdrivet ekstra viktig.

**Virkemidler:**
1. **Dramatisk spørsmål:** Still et spørsmål som ikke besvares med én gang. Lytteren vil vite svaret.
2. **Kliffhenger:** Stopp midt i en spennende del. Lytteren MÅ høre videre.
3. **Personlig investering:** Få lytteren til å bry seg om en person. Gi detaljer, følelser, sårbarhet.
4. **Tidspress:** «De hadde bare tre timer.» Skaper urgency.
5. **Kontrast og vendepunkt:** «Alt var perfekt. Helt til det ikke var det lenger.»
6. **Stemmens kraft:** Tonefall, tempo og pauser. En hvisken skaper spenning. Økt tempo skaper energi.

**Huskeregel:** Lytterens finger er alltid over stopp-knappen. Fortellerdrivet hindrer dem i å trykke.`,
    },

    // ========== DEFINISJON: LYDLANDSKAP ==========
    {
      id: 'norsk-10-9-4-def-3',
      type: 'definition',
      title: 'Lydlandskap (soundscape)',
      content: `Et **lydlandskap** er den totale lydopplevelsen i en produksjon — alle lydene som til sammen skaper en auditiv atmosfære.

**Elementer:**
- **Grunnlyd (keynote):** Den konstante bakgrunnslyden — trafikk, vind, stillhet
- **Signal:** Lyder som stikker seg ut — dørklokke, SMS-lyd, horn
- **Soundmark:** Karakteristiske lyder for et sted — kirkeklokker, bølger, trikkehjul

Lydlandskapet er den auditive versjonen av mise-en-scène — det setter scenen med lyd.

**Tips for egen produksjon:**
- Bruk bakgrunnslyd sparsomt — den skal forsterke, ikke forstyrre
- Velg **spesifikke** lyder. «Espressomaskin og klirrende kopper» er bedre enn bare «kafélyd».
- Stillhet er et aktivt valg. Fravær av lyd kan være mer effektfullt enn noen lydeffekt.`,
    },

    // ========== OPPGAVE 2: MULTIPLE CHOICE PODCAST ==========
    {
      id: 'norsk-10-9-4-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-4-ex-2',
        number: '9.26',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'I en true crime-podkast sier fortelleren: «Politiet var overbevist om at de hadde funnet morderen. Men det var noe de ikke visste — noe som ville snu hele etterforskningen.» Deretter dramatisk musikk og pause. Hvilket virkemiddel brukes?',
        options: [
          { id: 'a', text: 'Lydbroing — lyden kobler to scener', isCorrect: false, feedback: 'Feil. Lydbroing handler om sømløse overganger. Her er det et bevisst spenningsbrudd.' },
          { id: 'b', text: 'Kliffhenger kombinert med dramatisk spørsmål — fortellingen stopper på et spenningsmoment og stiller et ubesvart spørsmål', isCorrect: true, feedback: 'Riktig! «Noe som ville snu hele etterforskningen» er et dramatisk spørsmål. Pausen og musikken er en kliffhenger.' },
          { id: 'c', text: 'Aspekt-til-aspekt-overgang', isCorrect: false, feedback: 'Feil. Det er et begrep fra tegneserieteori, ikke podkastanalyse.' },
          { id: 'd', text: 'Closure — lytteren fyller inn det som mangler', isCorrect: false, feedback: 'Feil. Closure er et tegneseriebegrep. I lyd-fortelling bruker vi fortellerdriv og kliffhenger.' },
        ],
        solution: 'Alternativ B er riktig. Kliffhenger + dramatisk spørsmål = lytteren MÅ høre videre.',
      },
    },

    // ========== OPPGAVE 3: CLASSIC LYDANALYSE ==========
    {
      id: 'norsk-10-9-4-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-4-ex-3',
        number: '9.27',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv et lydlandskap for hver situasjon. Inkluder grunnlyd, signaler og minst tre spesifikke lydelementer.',
        subTasks: [
          {
            label: 'a',
            task: 'En digital fortelling om en sommerdag på hytta i barndommen.',
            solution: 'Grunnlyd: Svak bris, fjern insektsumming. Signaler: Planketak som smeller, rop fra bading. Spesifikke lyder: Sprut fra stup, svak radiomusikk fra hytta, grillmat som freser, båtmotor i det fjerne. Kommuniserer varme, trygghet, nostalgi.',
          },
          {
            label: 'b',
            task: 'En podkast-intro om en forsvunnet person.',
            solution: 'Grunnlyd: Lavfrekvent pulserende tone. Signal: Telefon som ringer — ingen svarer. Spesifikke lyder: Statisk støy, forvrengt politiradio, dør som lukkes sakte. Kort stillhet. Deretter rolig, alvorlig fortellerstemme. Kommuniserer mysterium og uro.',
          },
          {
            label: 'c',
            task: 'En fortelling om første skoledag på en ny skole.',
            solution: 'Grunnlyd: Summing av stemmer, fotsteg i korridor. Signaler: Skoleklokke, dørsmell. Spesifikke lyder: Skosuler mot linoleum, ryggsekk-glidelås, nervøs hosting, fjern latter fra en gjeng, stol som skraper. Kommuniserer nervøsitet og utenforskap.',
          },
        ],
        solution: 'Gode lydlandskap bruker spesifikke lyder som kommuniserer stemning og sted uten fortellerstemme.',
      },
    },

    // ========== OPPGAVE 4: PODKASTANALYSE ==========
    {
      id: 'norsk-10-9-4-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-4-ex-4',
        number: '9.28',
        type: 'classic',
        difficulty: 'medium',
        task: `Lytt til de første 5 minuttene av en podkast-episode. Analyser lydbruken:
a) Hvilken sjanger tilhører podkasten?
b) Beskriv lydlandskapet utover stemmene
c) Hvordan brukes fortellerstemmen? Tonefall, tempo, energi?
d) Identifiser minst ett virkemiddel for fortellerdriv`,
        hints: [
          'Lytt med hodetelefoner og lukk øynene — da hører du detaljer',
          'Legg merke til overgangene — brukes lydbroing eller brå kutt?',
          'Tenk på affordans: Hva kan podkasten gjøre som en nettartikkel ikke kan?',
        ],
        solution: 'En god podkastanalyse identifiserer sjanger, beskriver lydlandskapet presist, analyserer stemmens rolle og peker på konkrete virkemidler for fortellerdriv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 5: MULTIPLE CHOICE LYDBROING ==========
    {
      id: 'norsk-10-9-4-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-4-ex-5',
        number: '9.29',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'I en digital fortelling snakker fortelleren om barndommen. I bakgrunnen hører vi fuglekvitter og barnelatter. Gradvis blander trafikklyder og regn seg inn, og stemmen skifter til nåtiden. Hvilken lydteknikk brukes?',
        options: [
          { id: 'a', text: 'Jump cut — lyden hopper brått', isCorrect: false, feedback: 'Feil. Jump cut er et visuelt begrep. Her er overgangen gradvis.' },
          { id: 'b', text: 'Lydbroing — lydene overlapper gradvis uten brått brudd', isCorrect: true, feedback: 'Riktig! Barndomslydene glir over i nåtidslyder. Effekten er poetisk og flytende.' },
          { id: 'c', text: 'Montasje — korte lydklipp settes sammen', isCorrect: false, feedback: 'Feil. Montasje handler om mange korte klipp. Her er det en gradvis overgang.' },
          { id: 'd', text: 'Kryssklipping — to lydspor veksler', isCorrect: false, feedback: 'Feil. Kryssklipping innebærer veksling. Her glir én lydverden over i en annen.' },
        ],
        solution: 'Alternativ B er riktig. Lydbroing skaper sømløse overganger ved å la lyder overlappe.',
      },
    },

    // ========== OPPGAVE 6: PRODUKSJONSOPPGAVE ==========
    {
      id: 'norsk-10-9-4-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-4-ex-6',
        number: '9.30',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Velg ett alternativ:

**Alternativ 1: Digital fortelling (2–3 minutter)**
Lag en fortelling med din egen stemme, minst tre stillbilder, bakgrunnsmusikk og minst ett lydeffekt-element. Planlegg med de syv elementene.

**Alternativ 2: Podkast-episode (3–5 minutter)**
Lag en samtale med en medelev, en mini-fortelling med lydlandskap, eller et intervju.

Lever produksjonen med en refleksjon (150–200 ord) der du forklarer valgene med fagbegreper.`,
        hints: [
          'Du trenger ikke profesjonelt utstyr — en mobiltelefon er nok',
          'Planlegg manus FØR opptak',
          'Husk økonomi: Ta med bare det som tjener fortellingen',
          'Pauser er bra — ikke vær redd for stillhet',
        ],
        solution: 'En god produksjon viser bevisst bruk av lyd: fortellerstemme med variasjon, gjennomtenkt lydlandskap, og musikk som forsterker uten å overdøve.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-9-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Nøkkelbegreper
- **Digital fortelling:** Kort, personlig fortelling med fortellerstemme, bilder, musikk og lydeffekter
- **Podcast:** Lydbasert medium med episoder — samtale, intervju, narrativ, true crime, monolog
- **Lydlandskap (soundscape):** Den totale lydopplevelsen — grunnlyd, signaler, soundmarks
- **Fortellerstemme:** Stemmen som bærer den narrative tråden
- **Lydbroing:** Lydovergang mellom scener der lyder overlapper
- **Fortellerdriv:** Det som holder lytteren engasjert — dramatisk spørsmål, kliffhenger, tidspress
- **De syv elementene:** Synspunkt, dramatisk spørsmål, emosjonelt innhold, stemme, musikk, økonomi, tempo

### Viktige sammenhenger
- Lyd er det mest **intime** mediet — hodetelefoner skaper en-til-en-opplevelse
- **Fortellerstemmen** gir autentisitet ingen skuespiller kan kopiere
- **Lydlandskap** er den auditive versjonen av mise-en-scène
- **Fortellerdriv** er avgjørende i et medium uten bilder`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-9-4-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-4-ex-7',
        number: '9.31',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Samme historie — tre medier.

Velg en kort historie. Planlegg hvordan du ville fortalt den:
1. **Som tegneserie** (6 ruter — beskriv innholdet)
2. **Som digital fortelling** (2 min — beskriv stemme, bilder, musikk)
3. **Som podkast-scene** (2 min — beskriv lydlandskap, stemme, musikk)

Skriv en refleksjon (200–250 ord) der du:
a) Sammenligner affordansen til de tre mediene
b) Diskuterer hva som går tapt og vinnes i hvert medium
c) Vurderer hvilket medium som passer best for denne historien`,
        hints: [
          'Tenk på kjernen: Er det visuelt? En følelse? Et vendepunkt?',
          'Tegneserien har closure. Digital fortelling har stemme+bilde. Podkasten har kun lyd men er mest intim.',
          'Bruk fagbegreper fra alle kapitlene',
        ],
        solution: 'En god besvarelse viser at hvert medium har unike styrker og begrensninger, og refleksjonen bruker fagbegreper fra flere kapitler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-9-4-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-4-ex-8',
        number: '9.32',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Podkast-anmeldelse.

Lytt til en hel podkast-episode. Skriv en anmeldelse (250–350 ord) der du:
a) Beskriver sjanger, tema og format
b) Analyserer lydbruken: stemme, musikk, lydeffekter, lydlandskap
c) Vurderer fortellerdrivet
d) Sammenligner med et annet medium
e) Gir en balansert vurdering med styrker og forbedringspotensial`,
        hints: [
          'Ta notater mens du lytter. Legg merke til engasjement og uengasjement.',
          'Vurder stemmens variasjon i tempo, tonefall og energi',
          'En god anmeldelse er balansert — styrker OG forbedringspotensial',
        ],
        solution: 'En god podkast-anmeldelse bruker fagbegreper presist, analyserer lydbruken konkret, og viser kritisk medieforståelse gjennom sammenligningen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9.5: Adaptasjon — Fra bok til film
// LK20: Sammenligne tekster fra ulike medier og reflektere over hvordan
//        mediet påvirker innholdet
// ============================================================================

export const CHAPTER_NORSK_10_9_5: TextbookChapter = {
  id: 'norsk-10-9-5',
  courseId: 'norsk-10',
  chapterNumber: '9.5',
  title: 'Adaptasjon — Fra bok til film',
  description: 'Lær om adaptasjon — prosessen der en fortelling overføres fra ett medium til et annet. Forstå hva som skjer med en historie når den går fra bok til film, fra tegneserie til serie, eller fra spill til film.',
  estimatedMinutes: 75,
  competenceGoals: [
    'sammenligne tekster fra ulike medier og reflektere over hvordan mediet påvirker innholdet',
    'bruke fagspråk til å analysere forholdet mellom originaltekst og adaptasjon',
    'reflektere kritisk over hva som vinnes og tapes når en fortelling skifter medium',
  ],
  keyTerms: [
    { term: 'Adaptasjon', definition: 'Prosessen der en fortelling overføres fra ett medium til et annet — for eksempel fra bok til film, fra tegneserie til serie, eller fra spill til film' },
    { term: 'Kildetekst', definition: 'Originalteksten som adaptasjonen er basert på — boken, tegneserien, spillet eller annet opphav' },
    { term: 'Troskap (fidelity)', definition: 'Graden av likhet mellom kildeteksten og adaptasjonen — hvor «tro» er filmen mot boken?' },
    { term: 'Mediumspesifikke virkemidler', definition: 'Virkemidler som er unike for et bestemt medium — for eksempel indre monolog i bøker, kameravinkler i film, closure i tegneserier' },
    { term: 'Transmedial fortelling', definition: 'En fortelling som strekker seg over flere medier — der hvert medium tilfører noe unikt til den overordnede historien' },
    { term: 'Tolkningsrom', definition: 'Rommet der leseren/seeren skaper sine egne bilder og tolkninger — ulikt i ulike medier' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-9-5-intro',
      type: 'text',
      content: `## Adaptasjon — Fra bok til film: Hva skjer med historien?

«Boken var bedre.» Har du hørt den setningen? Kanskje har du sagt den selv. Den er nesten blitt et standardsvar når noen har sett en film basert på en bok. Men er den egentlig rettferdig?

Når en historie flyttes fra ett medium til et annet — fra bok til film, fra tegneserie til TV-serie, fra dataspill til film — kalles prosessen **adaptasjon**. Og adaptasjon er ikke kopiering. Det er **oversettelse**. Akkurat som det å oversette en norsk tekst til kinesisk krever mer enn å bytte ut ord for ord, krever adaptasjon mer enn å «filme boken». Mediene har ulike styrker, ulike begrensninger, ulike affordanser. Noe må legges til, noe må fjernes, noe må endres.

Spørsmålet er ikke «er filmen lik boken?». Spørsmålet er: **Hva skjer med historien når den skifter medium? Hva vinnes, og hva tapes?**

Harry Potter, Ringenes Herre, Sult, Dopesick, The Last of Us, «Maus», Persepolis — alle er adaptasjoner. Noen er elsket, noen er hatet, noen har overgått kildeteksten. I dette kapittelet skal du lære å analysere og vurdere adaptasjoner med fagbegreper og kritisk blikk.

I dette kapittelet skal du lære å:
- Forstå **adaptasjon** som prosess og fenomen
- Analysere forskjellene mellom **kildetekst** og adaptasjon
- Diskutere **troskap** — og hvorfor troskap ikke alltid er det viktigste
- Forstå **mediumspesifikke virkemidler** og hva hvert medium kan og ikke kan`,
    },

    // ========== DEFINISJON: ADAPTASJON ==========
    {
      id: 'norsk-10-9-5-def-1',
      type: 'definition',
      title: 'Adaptasjon',
      content: `**Adaptasjon** betyr å tilpasse en tekst til et nytt medium. Begrepet kommer fra latin «adaptare» — å tilpasse.

**Vanlige typer adaptasjon:**
- **Bok → film:** Den vanligste typen. Harry Potter, Ringenes Herre, Sult.
- **Tegneserie → film/serie:** Marvel-filmene, «Persepolis», «The Walking Dead».
- **Spill → film/serie:** «The Last of Us», «Arcane», «Sonic».
- **Film → bok (novelisering):** Sjeldnere, men forekommer.
- **Bok → tegneserie:** Litterære klassikere i grafisk format.
- **Virkelig hendelse → alle medier:** Dokumentarfilmer, true crime, biografier.

**Tre typer adaptasjonstilnærminger (Linda Hutcheon):**
1. **Telling → showing:** Fra tekst (du leser om handlingen) til visuelt medium (du ser handlingen). Bok → film.
2. **Showing → telling:** Fra visuelt medium til tekst. Film → bok.
3. **Interaktiv:** Publikum deltar aktivt. Bok/film → dataspill.

**Viktig:** En adaptasjon er **ikke** en kopi. Den er et nytt, selvstendig kunstverk som er inspirert av et annet. Den bør vurderes på sine egne premisser — ikke bare målt mot originalen.`,
    },

    // ========== EKSEMPEL: ADAPTASJON AV SULT ==========
    {
      id: 'norsk-10-9-5-ex-sult',
      type: 'example',
      title: 'Eksempel: Adaptasjon av Knut Hamsuns «Sult» (1890 → 1966)',
      problem: `Knut Hamsuns roman «Sult» ble filmatisert i 1966, med regi av Henning Carlsen og Per Oscarsson i hovedrollen. Romanen er skrevet som en jeg-fortelling der vi er inne i hodet til en sulten, desperat mann som vandrer gjennom Kristiania. Hva skjer når denne historien overføres til film?`,
      solution: `**Kildeteksten (romanen):**
- **Medium:** Prosatekst, jeg-forteller
- **Mediumspesifikke virkemidler:** Indre monolog, bevissthetsstrøm, direkte tilgang til tankene. Vi opplever sulten, forvirringen og desperasjonen innenfra. Hamsuns språk er kaotisk, poetisk, springende — det gjenspeiler hovedpersonens mentale tilstand.
- **Affordans:** Høy affordans for indre opplevelse, tankekaos og abstrakt hunger.

**Adaptasjonen (filmen):**
- **Medium:** Film, tredjepersonsperspektiv (kamera kan ikke være «inne i hodet»)
- **Mediumspesifikke virkemidler:** Skuespill (ansiktsuttrykk, kroppsspråk), mise-en-scène (Kristianias gater, fattigslig kostymer), kinematografi (nærbilder av det utrygge ansiktet), lyd (mageknurring, byens lyder).
- **Affordans:** Høy affordans for visuell, konkret erfaring. Vi SER sulten i ansiktet og kroppen.

**Hva vinnes:**
- Vi SER Kristiania i 1890 — gatene, menneskene, fattigdommen
- Per Oscarssons skuespill gjør sulten fysisk til stede — vi ser det i øynene, i bevegelsene
- Filmen kan vise det sosiale miljøet visuelt — klasse, fattigdom, kontraster

**Hva tapes:**
- Den indre monologen — Hamsuns geniale bevissthetsstrøm kan ikke oversettes direkte til film
- Det kaotiske, fragmenterte språket som gjenspeiler mentaltilstanden
- Tolkningsrommet: I boken forestiller du deg Kristiania. I filmen SER du den — regissørens versjon erstatter din.

**Vurdering:**
Filmen er ikke «verre» enn boken. Den er **annerledes**. Boken gir indre opplevelse, filmen gir ytre virkelighet. Begge er sterke — på ulike måter.`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE ADAPTASJON ==========
    {
      id: 'norsk-10-9-5-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-5-ex-1',
        number: '9.33',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvorfor er det problematisk å vurdere en filmadaptasjon bare ut fra «troskap» til boken?',
        options: [
          { id: 'a', text: 'Fordi film alltid er bedre enn bøker', isCorrect: false, feedback: 'Feil. Verken film eller bok er automatisk «bedre». De er ulike medier med ulike styrker.' },
          { id: 'b', text: 'Fordi film og bok har ulike affordanser — et filmspråk som bare kopierer boken, utnytter ikke filmens egne styrker', isCorrect: true, feedback: 'Riktig! Hvert medium har unike styrker. En god adaptasjon utnytter filmens muligheter (bilde, lyd, bevegelse) i stedet for å slavisk kopiere boken.' },
          { id: 'c', text: 'Fordi regissører aldri leser boken de filmatiserer', isCorrect: false, feedback: 'Feil. De fleste regissører kjenner kildeteksten godt. Endringer er bevisste valg, ikke uvitenhet.' },
          { id: 'd', text: 'Fordi bøker er utdatert og film er fremtiden', isCorrect: false, feedback: 'Feil. Bøker er et levende medium med styrker filmen ikke kan kopiere — som indre monolog og tolkningsrom.' },
        ],
        solution: 'Alternativ B er riktig. En god adaptasjon oversetter — den kopierer ikke. Den utnytter det nye mediets affordanser.',
      },
    },

    // ========== MEDIUMSPESIFIKKE VIRKEMIDLER ==========
    {
      id: 'norsk-10-9-5-medium',
      type: 'text',
      content: `## Mediumspesifikke virkemidler — hva kan hvert medium?

Nøkkelen til å forstå adaptasjon er å forstå at hvert medium har **virkemidler som er unike for det mediet**. Når en historie flyttes fra ett medium til et annet, må disse virkemidlene «oversettes» — og noe går alltid tapt, mens noe nytt oppstår.

### Bokens mediumspesifikke virkemidler

- **Indre monolog:** Direkte tilgang til tankene. Filmen kan ikke «vise» tanker like direkte.
- **Fortellerstemme:** Bokens forteller kan kommentere, reflektere, ironisere — med en fleksibilitet filmen sjelden oppnår.
- **Tolkningsrom:** Når du leser «hun var vakker», ser du FOR DEG en person. Bildet er ditt eget. Filmen gir deg regissørens versjon.
- **Tid og tempo:** Boken kan stoppe tiden og bruke ti sider på et øyeblikk — eller hoppe over ti år i én setning.
- **Abstraksjon:** Boken kan beskrive abstrakte ideer, filosofiske refleksjoner og indre tilstander som er vanskelige å filme.

### Filmens mediumspesifikke virkemidler

- **Visuell konkrethet:** Alt er synlig. Vi SER karakterene, stedene, handlingen.
- **Mise-en-scène:** Alt i bildet kommuniserer — setting, lys, farger, kostymer.
- **Kinematografi:** Kameravinkler styrer hva vi ser og føler.
- **Lyd og musikk:** Umiddelbar emosjonell virkning som boken ikke kan oppnå.
- **Skuespill:** Ansiktsuttrykk, kroppsspråk, stemme — nyansert kommunikasjon.
- **Samtidighet:** Film kan vise mange ting som skjer på én gang — i samme bilde.

### Hva må endres i adaptasjon?

Når en bok filmatiseres, må følgende ofte endres:

**1. Kutte:** En roman på 500 sider kan ikke bli en film på 2 timer uten kutt. Bihandlinger, bikarakterer og scener må fjernes.

**2. Eksternalisere:** Indre tanker må gjøres synlige. «Hun var redd» i boken blir skjelvende hender, vidåpne øyne og rask pust i filmen (show, don't tell — igjen!).

**3. Komprimere:** Tidsperioder, dialoger og hendelser komprimeres. En samtale over tre sider kan bli tre replikker i filmen.

**4. Legge til:** Noen ganger legger filmen til scener eller karakterer som ikke finnes i boken — for å visualisere noe som bare var antydet, eller for å tilpasse historien til filmformatet.

**5. Endre rekkefølge:** Filmen kan endre kronologien for å skape bedre spenningskurve på film.`,
    },

    // ========== DEFINISJON: TOLKNINGSROM ==========
    {
      id: 'norsk-10-9-5-def-2',
      type: 'definition',
      title: 'Tolkningsrom og mediumspesifisitet',
      content: `**Tolkningsrom** er rommet der mottakeren skaper sine egne bilder, tolkninger og følelser. Ulike medier gir ulikt tolkningsrom:

- **Bok:** Stort tolkningsrom. Du forestiller deg karakterenes utseende, stemme, omgivelser. Ingen to lesere ser det samme.
- **Film:** Lite tolkningsrom visuelt. Du SER karakterene slik regissøren vil. Men tolkningsrommet finnes fortsatt i meningsdannelsen — hva betyr det du ser?
- **Tegneserie:** Middels tolkningsrom. Bildene er stiliserte, ikke realistiske — din hjerne fyller inn detaljer. Closure gir ekstra tolkningsrom mellom rutene.
- **Podcast:** Stort tolkningsrom visuelt (du ser ingenting — du forestiller deg alt), men liten for lyd (stemmen, musikken og lydeffektene er gitt).

**Mediumspesifisitet** betyr at hvert medium har virkemidler som er unike for det. Indre monolog er mediumspesifikk for boken. Kameravinkler er mediumspesifikke for filmen. Closure er mediumspesifikt for tegneserien. Lydlandskap er mediumspesifikt for lyd-fortellinger.

**Konsekvens for adaptasjon:** Når en historie flyttes mellom medier, må de mediumspesifikke virkemidlene «oversettes» til det nye mediets virkemidler. Indre monolog kan bli voice-over, ansiktsuttrykk eller symbolsk mise-en-scène.`,
    },

    // ========== OPPGAVE 2: CLASSIC MEDIUMSAMMENLIGNING ==========
    {
      id: 'norsk-10-9-5-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-5-ex-2',
        number: '9.34',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvordan filmskaperen kan «oversette» disse boklige virkemidlene til film.',
        subTasks: [
          {
            label: 'a',
            task: 'I boken: «Sara tenkte at dette var den verste dagen i livet hennes.» (Indre tanke)',
            solution: 'Filmskaperen kan bruke: 1) Voice-over (Saras stemme forteller tanken). 2) Ansiktsuttrykk i nærbilde (vi SER desperasjonen). 3) Mise-en-scène (grå farger, regn, tom gate — omgivelsene speiler følelsen). 4) Musikk (melankolsk tone). 5) Handlinger (Sara kaster noe i veggen, synker ned). Beste løsning: Kombinasjon av flere — vis det i stedet for å fortelle det.',
            multipleChoiceOptions: ['Vis med ansikt, handlinger og mise-en-scène', 'Bare vis tekst på skjermen', 'Bruk voice-over alene', 'Fjern tanken helt'],
          },
          {
            label: 'b',
            task: 'I boken: «Ti år gikk. Da det endelig skjedde, var hun en annen person.» (Tidshopp)',
            solution: 'Filmskaperen kan bruke: 1) Montasje (en serie korte klipp som viser tid som går — årstider, alder, endring). 2) Tekst på skjermen: «Ti år senere». 3) Match cut (f.eks. ung Sara ser i et speil → klipp → eldre Sara ser i samme speil). 4) Visuell endring i mise-en-scène (nye klær, ny frisyre, nytt hjem).',
            multipleChoiceOptions: ['Montasje, match cut eller tekst på skjermen', 'Bare vis alle ti årene i sanntid', 'Hopp over tidshoppet helt', 'Bruk en klokke som tikker'],
          },
          {
            label: 'c',
            task: 'I boken: «Rommet luktet av gammel sigarettrøyk og ensomhet.» (Lukt og abstraksjon)',
            solution: 'Lukt kan ikke filmes direkte (film har ikke affordans for lukt). Filmskaperen «oversetter»: 1) Visuelt: Gulnet tapet, overfylte askebegre, støvete møbler, lukket gardin (mise-en-scène viser det lukten antyder). 2) Lyd: Stillhet, kanskje en klokke som tikker — lyden av ensomhet. 3) Farge: Dempede, brungule toner. 4) Kameraarbeid: Langsom bevegelse gjennom rommet, som om kameraet selv nøler med å gå inn.',
            multipleChoiceOptions: ['Mise-en-scène, farge og lyd som «viser» lukten', 'Bare skrive «det lukter» på skjermen', 'Fjerne lukt-beskrivelsen helt', 'Bruke spesialeffekter for å vise lukt'],
          },
        ],
        solution: 'Gode adaptasjoner oversetter bokens virkemidler til filmens — de finner filmspråkets ekvivalent for indre tanker, tidshopp og sanseinntrykk.',
      },
    },

    // ========== OPPGAVE 3: MULTIPLE CHOICE TOLKNINGSROM ==========
    {
      id: 'norsk-10-9-5-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-5-ex-3',
        number: '9.35',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Mange lesere er skuffet når de ser en filmversjon av en bok de elsker. Hva er den vanligste grunnen ifølge adaptasjonsteori?',
        options: [
          { id: 'a', text: 'Fordi filmregissører aldri forstår bøker', isCorrect: false, feedback: 'Feil. De fleste filmregissører forstår kildeteksten godt. Problemet er mer nyansert.' },
          { id: 'b', text: 'Fordi film alltid er et dårligere medium enn bøker', isCorrect: false, feedback: 'Feil. Film er ikke «dårligere» — det er et annet medium med andre styrker.' },
          { id: 'c', text: 'Fordi boken ga stort tolkningsrom — leseren hadde sine egne bilder av karakterer og steder. Filmen erstatter disse bildene med regissørens versjon', isCorrect: true, feedback: 'Riktig! Når du leser, lager du dine egne bilder. Filmen gir deg andres bilder. Hvis de ikke matcher dine, føles det galt — selv om filmen i seg selv er god.' },
          { id: 'd', text: 'Fordi filmer alltid er for korte til å fortelle hele historien', isCorrect: false, feedback: 'Feil. Kutt er nødvendig, men det er ikke hovedgrunnen til skuffelse. Mange gode adaptasjoner kutter mye og er likevel elsket.' },
        ],
        solution: 'Alternativ C er riktig. Tolkningsrommet i boken skaper personlige bilder som filmen ikke kan matche — og det er helt naturlig.',
      },
    },

    // ========== OPPGAVE 4: ADAPTASJONSANALYSE ==========
    {
      id: 'norsk-10-9-5-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-5-ex-4',
        number: '9.36',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Velg en adaptasjon du kjenner — en bok som er filmatisert, en tegneserie som er blitt serie, eller et spill som er blitt film.

Skriv en adaptasjonsanalyse (250–350 ord) der du:
a) Beskriver kildeteksten: Hvilket medium? Hvilke mediumspesifikke virkemidler brukes?
b) Beskriver adaptasjonen: Hvilket medium? Hvilke mediumspesifikke virkemidler brukes?
c) Analyserer hva som er kuttet, lagt til eller endret — og diskuterer HVORFOR
d) Vurderer hva som vinnes og hva som tapes i adaptasjonen
e) Diskuterer «troskap»: Er det viktig at adaptasjonen er tro mot originalen? Hvorfor/hvorfor ikke?`,
        hints: [
          'Velg en adaptasjon du kjenner begge versjonene av',
          'Bruk fagbegrepene: affordans, mediumspesifikke virkemidler, tolkningsrom, troskap',
          'Husk: Spørsmålet er ikke «er filmen lik boken?» men «hva skjer med historien?»',
        ],
        solution: 'En god adaptasjonsanalyse bruker fagbegreper, diskuterer mediumspesifikke virkemidler i begge versjoner, og vurderer hva som vinnes og tapes — uten å anta at originalen automatisk er best.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 5: MULTIPLE CHOICE TRANSMEDIAL ==========
    {
      id: 'norsk-10-9-5-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-5-ex-5',
        number: '9.37',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er en «transmedial fortelling»?',
        options: [
          { id: 'a', text: 'En fortelling som bare finnes i ett medium, men er oversatt til mange språk', isCorrect: false, feedback: 'Feil. Transmedial handler om medier (bok, film, spill), ikke om språk.' },
          { id: 'b', text: 'En fortelling som strekker seg over flere medier, der hvert medium tilfører noe unikt til den overordnede historien', isCorrect: true, feedback: 'Riktig! I en transmedial fortelling er ikke filmen bare en kopi av boken — hvert medium forteller en del av historien som de andre ikke gjør.' },
          { id: 'c', text: 'En fortelling som handler om medier og teknologi', isCorrect: false, feedback: 'Feil. Temaet trenger ikke å handle om medier. Det er formen — at fortellingen strekker seg over flere medier — som er transmedial.' },
          { id: 'd', text: 'Et synonym for «adaptasjon»', isCorrect: false, feedback: 'Feil. Adaptasjon er å overføre en historie fra ett medium til et annet. Transmedial fortelling er når en historie strekker seg over flere medier, der hvert tilfører noe nytt.' },
        ],
        solution: 'Alternativ B er riktig. Transmediale fortellinger bruker flere medier der hvert medium bidrar med noe unikt.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-9-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Nøkkelbegreper
- **Adaptasjon:** Prosessen der en fortelling overføres fra ett medium til et annet
- **Kildetekst:** Originalteksten adaptasjonen er basert på
- **Troskap (fidelity):** Graden av likhet mellom kildetekst og adaptasjon
- **Mediumspesifikke virkemidler:** Virkemidler unike for et medium (indre monolog i bok, kameravinkel i film, closure i tegneserie)
- **Tolkningsrom:** Rommet der mottakeren skaper egne bilder — ulikt i ulike medier
- **Transmedial fortelling:** En fortelling som strekker seg over flere medier

### Viktige sammenhenger
- Adaptasjon er **oversettelse**, ikke kopiering — hvert medium har sine styrker
- «Boken var bedre» er ofte en reaksjon på tapt tolkningsrom, ikke på dårlig kvalitet
- Gode adaptasjoner utnytter det nye mediets **affordanser** i stedet for å slavisk kopiere originalen
- Spørsmålet er ikke troskap, men **hva skjer med historien når den skifter medium?**`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-9-5-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-5-ex-6',
        number: '9.38',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Lag en adaptasjonsplan.

Velg en kort tekst du har lest (det kan være en novelle, et dikt, en nyhetsartikkel eller en scene fra en roman). Planlegg hvordan du ville adaptert den til film.

Skriv en adaptasjonsplan (250–300 ord) der du:
a) Beskriver kildeteksten og dens mediumspesifikke virkemidler
b) Forklarer hva du ville beholdt, kuttet, lagt til og endret — og HVORFOR
c) Beskriver minst to scener med filmspråk: mise-en-scène, kameraarbeid, lyd
d) Reflekterer over hva som vinnes og tapes i din adaptasjon
e) Diskuterer troskap: Hvor tro er din adaptasjon mot originalen, og er det viktig?`,
        hints: [
          'Velg en tekst med sterke bilder eller følelser — det gjør adaptasjonen lettere',
          'Tenk som en regissør: Hva kan filmen VISE som boken bare kan BESKRIVE?',
          'Husk «show, don\'t tell» — filmen må eksternalisere det indre',
        ],
        solution: 'En god adaptasjonsplan viser at du forstår mediumspesifikke virkemidler i begge medier og kan begrunne alle valg med fagbegreper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-9-5-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-5-ex-7',
        number: '9.39',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Debatt om adaptasjon.

«Bøker er alltid bedre enn filmadaptasjonene.» Er du enig eller uenig?

Skriv en argumenterende tekst (200–300 ord) der du:
a) Tar et tydelig standpunkt
b) Bruker minst tre fagbegreper fra kapittelet (affordans, mediumspesifikke virkemidler, tolkningsrom, troskap, etc.)
c) Bruker konkrete eksempler fra adaptasjoner du kjenner
d) Drøfter motargumenter — hva ville noen som er uenig med deg, si?`,
        hints: [
          'Det finnes ikke ett riktig svar — det viktige er at du argumenterer godt',
          'Bruk fagbegrepene aktivt: Ikke bare nevn dem, men BRUK dem i argumentasjonen',
          'Konkrete eksempler gjør argumentene sterkere',
        ],
        solution: 'En god argumenterende tekst tar et tydelig standpunkt, bruker fagbegreper presist, støtter argumentene med eksempler, og drøfter motargumenter ærlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9.6: Gaming og interaktiv fortelling
// LK20: Utforske og vurdere hvordan digitale medier påvirker og endrer
//        språk og kommunikasjon
// ============================================================================

export const CHAPTER_NORSK_10_9_6: TextbookChapter = {
  id: 'norsk-10-9-6',
  courseId: 'norsk-10',
  chapterNumber: '9.6',
  title: 'Gaming og interaktiv fortelling',
  description: 'Lær om dataspill som sammensatte tekster og kulturuttrykk. Forstå interaktiv fortelling, spillerens rolle som medforfatter, og hvordan spill bruker multimodalitet til å skape opplevelser.',
  estimatedMinutes: 75,
  competenceGoals: [
    'utforske og vurdere hvordan digitale medier påvirker og endrer språk og kommunikasjon',
    'analysere sammensatte tekster i digitale medier og vurdere samspillet mellom ulike uttrykksmåter',
    'reflektere kritisk over spillmediet som kulturuttrykk og fortellingsform',
  ],
  keyTerms: [
    { term: 'Interaktiv fortelling', definition: 'En fortelling der mottakeren (spilleren) aktivt påvirker handlingen gjennom valg, handlinger og utforskning' },
    { term: 'Ludonarrativitet', definition: 'Samspillet mellom spillmekanikk (gameplay) og fortelling (narrativ) — hvordan reglene og historien jobber sammen' },
    { term: 'Spilleragens', definition: 'Spillerens opplevelse av å ha meningsfull innflytelse på spillets verden og fortelling' },
    { term: 'Ludonarrativ dissonans', definition: 'Når spillmekanikken motsier fortellingen — for eksempel når en «snill» karakter dreper hundrevis i gameplay' },
    { term: 'Emergent fortelling', definition: 'Historier som oppstår spontant gjennom spillerens handlinger, ikke planlagt av utviklerne' },
    { term: 'Environmental storytelling', definition: 'Fortelling gjennom miljøet — gjenstander, notater, arkitektur og detaljer i spillverdenen som forteller historier uten dialog' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-9-6-intro',
      type: 'text',
      content: `## Gaming og interaktiv fortelling: Når du er helten

Du sitter med kontrolleren i hånden. Foran deg: en postapokalyptisk verden der du må velge mellom å redde en fremmed og å beskytte gruppen din. Ingen av valgene er «riktige». Begge har konsekvenser. Klokken tikker. Du velger.

Denne opplevelsen er unik for dataspill. I en bok bestemmer forfatteren hva som skjer. I en film bestemmer regissøren. Men i et dataspill bestemmer **du**. Du er ikke bare tilskuer — du er **deltaker**. Dine valg former historien. Dine handlinger har konsekvenser. Du er, på en måte, **medforfatter** av fortellingen.

Dataspill er den nyeste og kanskje mest komplekse formen for sammensatte tekster. De kombinerer alle modalitetene vi har snakket om i dette temaet: Bilde, lyd, musikk, tekst, bevegelse, farge, layout — pluss noe helt nytt: **interaktivitet**. Du reagerer ikke bare på teksten; du handler i den.

I Norge spiller over 95 prosent av gutter og 75 prosent av jenter mellom 13 og 18 år dataspill jevnlig. Gaming er ikke lenger nisje — det er en av de største kulturuttrykkene i vår tid. Og noen dataspill forteller historier som rivaliserer med de beste romanene og filmene.

I dette kapittelet skal du lære å:
- Forstå dataspill som **sammensatte tekster** og kulturuttrykk
- Analysere **interaktiv fortelling** og spillerens rolle som medforfatter
- Forstå begreper som **ludonarrativitet**, **spilleragens** og **environmental storytelling**
- Analysere spill kritisk med fagbegreper fra norskfaget`,
    },

    // ========== DEFINISJON: INTERAKTIV FORTELLING ==========
    {
      id: 'norsk-10-9-6-def-1',
      type: 'definition',
      title: 'Interaktiv fortelling',
      content: `**Interaktiv fortelling** er en fortelling der mottakeren (spilleren) aktivt påvirker handlingen gjennom valg, handlinger og utforskning. I motsetning til bøker og film, der fortellingen er fastlagt, kan interaktive fortellinger ha ulike utfall avhengig av hva spilleren gjør.

**Tre typer interaktivitet i fortelling:**

1. **Valgbasert:** Spilleren tar eksplisitte valg som endrer historien. Eksempel: «The Walking Dead» (Telltale), «Detroit: Become Human», «Life is Strange». Du velger hva karakteren sier, hvem du hjelper, hva du gjør — og historien forgrener seg.

2. **Utforskningsbasert:** Spilleren oppdager fortellingen ved å utforske verdenen. Historien er der, men du må finne den. Eksempel: «Gone Home», «What Remains of Edith Finch», «Firewatch».

3. **Emergent (fremvoksende):** Historier som oppstår spontant gjennom spillerens handlinger, uten at utviklerne har planlagt dem. Eksempel: I «Minecraft» eller «The Sims» skaper spillerne sine egne fortellinger gjennom det de bygger og gjør.

**Forskjellen fra andre medier:**
- **Bok:** Du leser forfatterens historie. Du har tolkningsrom, men ikke handlingsrom.
- **Film:** Du ser regissørens historie. Du er passiv mottaker.
- **Dataspill:** Du handler i forfatterens/utviklerens verden. Du har både tolkningsrom og handlingsrom.

**Viktig:** Interaktivitet betyr ikke at «alt er mulig». Spilldesignerne setter rammene. Men innenfor de rammene har du frihet — og den friheten skaper en unik form for engasjement.`,
    },

    // ========== EKSEMPEL: SPILLANALYSE ==========
    {
      id: 'norsk-10-9-6-ex-spill',
      type: 'example',
      title: 'Eksempel: Multimodal analyse av et dataspill',
      problem: `Gjennomfør en multimodal analyse av dette tenkte dataspillet:

**«Frostveien»** — Et norsk indie-spill der du spiller en ung jente (Astrid, 14) som vandrer gjennom et vinterlig, forlatt Norge etter en mystisk katastrofe. Spillet er langsomt, stemningsfullt og fokuserer på utforskning, ikke action. Du finner brev, dagbøker og gjenstander fra mennesker som levde der før. Valgene dine påvirker hva du oppdager og hvordan historien ender.`,
      solution: `**Semiotiske ressurser:**

1. **Visuell modalitet:** Snølandskaper med dempede farger (hvitt, blågrått, svak gul sol). Forlatte hus, frosne innsjøer, tomme veier. Mise-en-scène forteller historien: Et tekopp med is i, en barnetegning på et kjøleskap, en åpen koffert halvveis pakket.

2. **Auditiv modalitet:** Vind. Knirking av snø under føttene. Dempet, melankolsk musikk (piano og strykere) som øker og minker basert på hva du oppdager. Stillhet i de mest emosjonelle øyeblikkene. Lydlandskapet er minimalistisk og realistisk.

3. **Verbal modalitet:** Astrids fortellerstemme (voice-over) kommenterer det hun finner. Skrevne tekster: brev, dagbøker, avisutklipp. Dialogfragmenter fra minner.

4. **Interaktiv modalitet:** Spilleren velger hva de utforsker. Gå inn i dette huset eller gå videre? Lese dette brevet eller legge det fra deg? Valgene er ikke «riktig/galt», men de avgjør hvilke deler av historien du oppdager.

**Ludonarrativitet:**
Spillmekanikken (utforskning, valg, gåing) harmonerer med fortellingen (oppdagelse, sorg, aksept). Selve spillopplevelsen — å gå sakte gjennom et tomt landskap — gjenspeiler tematikken. Det finnes ingen fiender, ingen tidsbegrensning — bare deg og landskapet. Gameplay og narrativ er i harmoni.

**Environmental storytelling:**
Mesteparten av historien fortelles gjennom miljøet. Et barnerom med uinnpakkede julegaver forteller om en familie som forsvant brått. En bil med motoren fortsatt i gang (men frosset fast) forteller om noen som prøvde å flykte. Du trenger ikke en fortellerstemme — miljøet forteller alt.

**Spilleragens:**
Spilleren har agens i hva de oppdager, ikke i hva som har skjedd. Historien er allerede utspilt — du avdekker den. Denne typen agens skaper en følelse av arkeologisk utforskning og gir spilleren ansvar for egen opplevelse.

**Samlet vurdering:**
«Frostveien» bruker multimodalitet og interaktivitet til å skape en opplevelse som verken bok eller film kan gi. Boken kan beskrive ensomheten. Filmen kan vise den. Men spillet lar deg **oppleve** den — gå gjennom den, føle den i kroppen gjennom det langsomme tempoet og den interaktive utforskningen.`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE INTERAKTIV FORTELLING ==========
    {
      id: 'norsk-10-9-6-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-6-ex-1',
        number: '9.40',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste forskjellen mellom fortelling i en bok/film og fortelling i et dataspill?',
        options: [
          { id: 'a', text: 'Dataspill har alltid bedre grafikk enn film', isCorrect: false, feedback: 'Feil. Grafikk-kvalitet er ikke det som skiller dataspill fra film som fortellingsform.' },
          { id: 'b', text: 'I et dataspill er spilleren en aktiv deltaker som påvirker handlingen gjennom valg og handlinger — i bok og film er mottakeren passiv tilskuer', isCorrect: true, feedback: 'Riktig! Interaktiviteten er det som gjør dataspill unikt som fortellingsmedium. Du handler, velger og utforsker — du er ikke bare mottaker.' },
          { id: 'c', text: 'Dataspill har alltid flere karakterer enn bøker og filmer', isCorrect: false, feedback: 'Feil. Antall karakterer varierer i alle medier. Noen spill har én karakter, noen romaner har hundrevis.' },
          { id: 'd', text: 'Det finnes ingen forskjell — alle medier forteller historier på samme måte', isCorrect: false, feedback: 'Feil. Interaktiviteten i dataspill skaper en fundamentalt annerledes fortellingsopplevelse.' },
        ],
        solution: 'Alternativ B er riktig. Interaktiviteten — spillerens aktive deltakelse — er det som gjør dataspill unikt.',
      },
    },

    // ========== LUDONARRATIVITET ==========
    {
      id: 'norsk-10-9-6-ludonarrativitet',
      type: 'text',
      content: `## Ludonarrativitet — når spill og fortelling møtes

Et av de mest interessante begrepene i spillforskning er **ludonarrativitet** — samspillet mellom **ludo** (spill, regler, mekanikk) og **narrativ** (fortelling, historie). Det handler om hvordan spillets regler og spillerens handlinger forholder seg til historien som fortelles.

### Ludonarrativ harmoni

Når spillmekanikken og fortellingen jobber **sammen**, oppstår ludonarrativ harmoni. Spillet føles helhetlig — det du gjør som spiller, harmonerer med det karakteren opplever.

**Eksempel:** I «The Last of Us» spiller du en far som beskytter en jente i en postapokalyptisk verden. Spillmekanikken — forsiktig bevegelse, begrensede ressurser, desperate kamper — gjenspeiler historiens tematikk: desperasjon, omsorg, overlevelse. Det du GJØR og det du OPPLEVER fortellingsmessig, er det samme.

### Ludonarrativ dissonans

Når spillmekanikken **motsier** fortellingen, oppstår **ludonarrativ dissonans**. Spillet sender motstridende signaler.

**Eksempel:** I mange actionspill er hovedpersonen fremstilt som «snill» og empatisk i filmsekvensene, men dreper hundrevis av mennesker i gameplay. Historien sier «jeg er et godt menneske», men handlingene sier noe annet. Spilleren merker motsetningen — selv om de kanskje ikke kan sette ord på den.

**Et annet eksempel:** Du spiller et spill der historien forteller deg at det haster — verden går under om 24 timer! Men spillmekanikken lar deg ta så lang tid du vil. Du kan fiske, shoppe og gjøre sideoppdrag mens verden angivelig er i fare. Det er ludonarrativ dissonans.

### Environmental storytelling — miljøet forteller

En av spillmediets mest unike virkemidler er **environmental storytelling** — fortelling gjennom miljøet. I stedet for å fortelle deg hva som har skjedd gjennom dialog eller tekst, lar spillet deg **oppdage** det gjennom gjenstander, arkitektur og detaljer.

**Eksempel:** Du går inn i et forlatt rom. På bordet ligger to tallerkener med mat — kald, halvspist. En stol er veltet. Et vindu er knust. En barnesko ligger ved døren. Ingen fortellerstemme forklarer noe. Men du forstår: Noe skjedde brått. Noen måtte flykte. Et barn var involvert.

Environmental storytelling er kraftfullt fordi det krever at spilleren aktivt **tolker**. Det er closure — men i 3D. Du fyller inn historien basert på det du ser, akkurat som i tegneseriens rennestein.`,
    },

    // ========== DEFINISJON: LUDONARRATIVITET ==========
    {
      id: 'norsk-10-9-6-def-2',
      type: 'definition',
      title: 'Ludonarrativitet og ludonarrativ dissonans',
      content: `**Ludonarrativitet** er forholdet mellom spillmekanikk (ludo = spill) og fortelling (narrativ). Begrepet handler om hvordan det du GJØR i spillet forholder seg til det historien FORTELLER.

**Ludonarrativ harmoni:** Gameplay og historie jobber sammen. Det du gjør som spiller, harmonerer med fortellingen.
- *Eksempel:* I «Journey» vandrer du alene gjennom en ørken. Spillmekanikken (langsom vandring, ingen fiender) forsterker den ensomme, meditative fortellingen.

**Ludonarrativ dissonans:** Gameplay og historie motsier hverandre.
- *Eksempel:* En karakter som i filmsekvenser er fredelig og filosofisk, men i gameplay dreper hundrevis av fiender med vold.

**Hvorfor er dette viktig for analysen?**
Ludonarrativitet er et begrep som kun gir mening for dataspill. Bøker og filmer har ikke spillmekanikk — derfor har de ikke ludonarrativ dissonans. Det er et mediumspesifikt analyseverktøy.

**Spørsmål for analyse:** Forsterker eller undergraver spillmekanikken den historien spillet prøver å fortelle?`,
    },

    // ========== DEFINISJON: ENVIRONMENTAL STORYTELLING ==========
    {
      id: 'norsk-10-9-6-def-3',
      type: 'definition',
      title: 'Environmental storytelling',
      content: `**Environmental storytelling** er fortelling gjennom spillmiljøet — gjenstander, notater, arkitektur, lys og detaljer i spillverdenen som forteller historier uten dialog eller filmsekvenser.

**Slik fungerer det:**
- Spilleren oppdager detaljer i miljøet: et forlatt brev, en blodig vegg, et barns tegning
- Spilleren tolker detaljene og fyller inn historien selv (closure!)
- Ingen fortellerstemme forklarer hva som har skjedd — spilleren er detektiven

**Eksempler:**
- I «BioShock» forteller den forfalne undervannsbyen Rapture sin egen historie gjennom arkitekturen, propagandaplakatene og de forlatte rommene
- I «The Last of Us» finner du brev og dagbøker fra mennesker som levde der — hver gjenstand er et lite vindu inn i en persons liv

**Paralleller til andre medier:**
- Environmental storytelling ligner på mise-en-scène i film — det som er synlig i bildet, forteller historien
- Det ligner også på closure i tegneserien — spilleren fyller inn det som mangler
- Men det er unikt for spill fordi du **velger** hva du utforsker og oppdager`,
    },

    // ========== OPPGAVE 2: CLASSIC LUDONARRATIVITET ==========
    {
      id: 'norsk-10-9-6-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-6-ex-2',
        number: '9.41',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vurder om disse eksemplene representerer ludonarrativ harmoni eller ludonarrativ dissonans, og forklar hvorfor.',
        subTasks: [
          {
            label: 'a',
            task: 'I et overlevelsesspill har du svært begrensede ressurser — lite mat, lite ammunisjon. Historien handler om desperasjon og overlevelse etter en katastrofe.',
            solution: 'Ludonarrativ harmoni. Spillmekanikken (knappe ressurser, vanskelige valg) forsterker fortellingens tema (desperasjon, overlevelse). Det du gjør som spiller, harmonerer med det karakteren opplever.',
            multipleChoiceOptions: ['Ludonarrativ harmoni', 'Ludonarrativ dissonans'],
          },
          {
            label: 'b',
            task: 'I et rollespill er hovedpersonen en helt som kjemper for rettferdighet. Men i gameplay kan du stjele fra butikker, drepe uskyldige og ødelegge landsbyer — uten konsekvenser.',
            solution: 'Ludonarrativ dissonans. Historien sier at du er en helt. Gameplay lar deg oppføre deg som en skurk. Mangelen på konsekvenser forsterker dissonansen — spillverdenen «bryr seg ikke» om det gale du gjør.',
            multipleChoiceOptions: ['Ludonarrativ dissonans', 'Ludonarrativ harmoni'],
          },
          {
            label: 'c',
            task: 'I et puzzlespill løser du stadig vanskeligere gåter mens du utforsker en mystisk øy. Historien handler om en forsker som prøver å forstå et mysterium.',
            solution: 'Ludonarrativ harmoni. Puslespillene er metaforer for forskerens intellektuelle arbeid. Å løse gåter i gameplay = å løse mysteriet i fortellingen. Opplevelsen av å forstå noe gradvis er den samme for spilleren og karakteren.',
            multipleChoiceOptions: ['Ludonarrativ harmoni', 'Ludonarrativ dissonans'],
          },
        ],
        solution: 'a) Harmoni, b) Dissonans, c) Harmoni. Nøkkelspørsmålet er: Forsterker eller undergraver gameplay-en fortellingen?',
      },
    },

    // ========== OPPGAVE 3: MULTIPLE CHOICE ENVIRONMENTAL STORYTELLING ==========
    {
      id: 'norsk-10-9-6-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-6-ex-3',
        number: '9.42',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Du spiller et spill og går inn i et forlatt barnerom. På veggen henger en kalender der alle dagene etter 15. mars er strøket over. På gulvet ligger en halvpakket ryggsekk med en bamse som stikker opp. Vinduet er knust innenfra. Hva er dette et eksempel på?',
        options: [
          { id: 'a', text: 'Ludonarrativ dissonans', isCorrect: false, feedback: 'Feil. Her er det ingen motsetning mellom spillmekanikk og fortelling. Det er en annen mekanisme som er i spill.' },
          { id: 'b', text: 'Environmental storytelling — miljøet forteller en historie uten dialog eller tekst', isCorrect: true, feedback: 'Riktig! Gjenstandene i rommet forteller en historie: Noe skjedde 15. mars. Noen (et barn?) prøvde å flykte i hast (halvpakket ryggsekk, knust vindu). Du tolker selv hva som skjedde.' },
          { id: 'c', text: 'Emergent fortelling — spilleren skaper historien selv', isCorrect: false, feedback: 'Feil. Denne scenen er designet av utviklerne — den er ikke spontan. Emergent fortelling oppstår uplanlagt gjennom spillerens handlinger.' },
          { id: 'd', text: 'Transmedial fortelling — historien strekker seg over flere medier', isCorrect: false, feedback: 'Feil. Alt skjer innenfor ett medium (spillet). Transmedial fortelling krever flere ulike medier.' },
        ],
        solution: 'Alternativ B er riktig. Environmental storytelling lar miljøet fortelle historien uten et eneste ord.',
      },
    },

    // ========== OPPGAVE 4: SPILLANALYSE ==========
    {
      id: 'norsk-10-9-6-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-6-ex-4',
        number: '9.43',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Velg et dataspill du kjenner godt. Analyser det som sammensatt tekst.

Skriv en analyse (250–350 ord) der du:
a) Beskriver spillets semiotiske ressurser: visuell modalitet (grafikk, farger, design), auditiv modalitet (musikk, lydeffekter, dialog), verbal modalitet (tekst, dialog), interaktiv modalitet (spillmekanikk, valg)
b) Vurderer ludonarrativiteten: Er det harmoni eller dissonans mellom gameplay og fortelling?
c) Identifiserer eventuell environmental storytelling: Forteller miljøet historier?
d) Vurderer spilleragens: Har du meningsfull innflytelse på historien?
e) Sammenligner med et annet medium: Hva kan spillet gjøre som en bok eller film ikke kan?`,
        hints: [
          'Velg et spill du kjenner godt — det trenger ikke være et «fancy» spill',
          'Bruk fagbegrepene: semiotiske ressurser, affordans, ludonarrativitet, environmental storytelling, spilleragens',
          'Husk: Interaktiviteten er det som gjør dataspill unikt — fokuser på hva det GJØR med opplevelsen',
        ],
        solution: 'En god spillanalyse bruker fagbegreper fra multimodal teori og spillforskning, identifiserer mediumspesifikke virkemidler, og reflekterer over hva interaktiviteten tilfører.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 5: MULTIPLE CHOICE SPILLERAGENS ==========
    {
      id: 'norsk-10-9-6-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-6-ex-5',
        number: '9.44',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'I et valgbasert spill må du velge mellom å redde en venn og å redde en gruppe fremmede. Uansett hva du velger, får valget konsekvenser for resten av spillet. Hva opplever spilleren i denne situasjonen?',
        options: [
          { id: 'a', text: 'Ludonarrativ dissonans — fordi det er et umulig valg', isCorrect: false, feedback: 'Feil. Et vanskelig valg er ikke dissonans. Dissonans oppstår når gameplay MOTSIER fortellingen.' },
          { id: 'b', text: 'Spilleragens — følelsen av å ha meningsfull innflytelse på spillets verden og historie, forsterket av at valget har reelle konsekvenser', isCorrect: true, feedback: 'Riktig! Spilleragens oppstår når valgene dine har betydning. Det vanskelige moralske dilemmaet forsterker følelsen av ansvar og engasjement.' },
          { id: 'c', text: 'Environmental storytelling — miljøet forteller historien', isCorrect: false, feedback: 'Feil. Her er det et eksplisitt valg, ikke en historie fortalt gjennom miljødetaljer.' },
          { id: 'd', text: 'Emergent fortelling — historien oppstår spontant', isCorrect: false, feedback: 'Feil. Dette valget er designet av utviklerne. Emergent fortelling er uplanlagt.' },
        ],
        solution: 'Alternativ B er riktig. Spilleragens — meningsfull innflytelse med konsekvenser — er en av spillmediets sterkeste opplevelser.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-9-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Nøkkelbegreper
- **Interaktiv fortelling:** Fortelling der spilleren aktivt påvirker handlingen gjennom valg og handlinger
- **Ludonarrativitet:** Samspillet mellom spillmekanikk og fortelling
- **Ludonarrativ harmoni:** Gameplay og historie forsterker hverandre
- **Ludonarrativ dissonans:** Gameplay og historie motsier hverandre
- **Spilleragens:** Spillerens opplevelse av å ha meningsfull innflytelse
- **Environmental storytelling:** Fortelling gjennom miljødetaljer uten dialog
- **Emergent fortelling:** Historier som oppstår spontant gjennom spillerens handlinger

### Viktige sammenhenger
- Dataspill er sammensatte tekster som kombinerer ALLE modaliteter pluss interaktivitet
- **Interaktivitet** er det som gjør spill unikt — spilleren er medforfatter, ikke bare mottaker
- **Ludonarrativitet** er et mediumspesifikt analyseverktøy som bare gir mening for dataspill
- **Environmental storytelling** er spillmediets versjon av mise-en-scène og closure kombinert
- Gaming er en seriøs kulturuttrykk som fortjener samme analytiske oppmerksomhet som litteratur og film`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-9-6-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-6-ex-6',
        number: '9.45',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Design et spill-konsept.

Du skal designe et konsept for et kort dataspill (du trenger ikke programmere det — bare beskrive ideen).

Skriv et spillkonsept (250–300 ord) der du:
a) Beskriver settingen, hovedpersonen og temaet
b) Forklarer spillmekanikken: Hva gjør spilleren? Hvilke valg har de?
c) Planlegger environmental storytelling: Hva finner spilleren i miljøet som forteller historien?
d) Vurderer ludonarrativitet: Hvordan sikrer du at gameplay og fortelling forsterker hverandre?
e) Beskriver den multimodale opplevelsen: Hvordan bruker du bilde, lyd, musikk, tekst og interaktivitet?`,
        hints: [
          'Hold konseptet enkelt — det trenger ikke være et stort, komplekst spill',
          'Tenk på temaet først: Hva vil du at spilleren skal føle eller forstå?',
          'Bruk fagbegrepene: ludonarrativ harmoni, environmental storytelling, spilleragens, affordans',
        ],
        solution: 'Et godt spillkonsept viser at du forstår samspillet mellom spillmekanikk og fortelling, og at du bevisst bruker spillmediets unike affordanser — interaktivitet, environmental storytelling og spilleragens.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-9-6-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-6-ex-7',
        number: '9.46',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Tverrfaglig refleksjon over hele temaet «Sammensatte tekster og digitale medier».

Du har nå lært om multimodal analyse, filmanalyse, tegneserier, digital fortelling, adaptasjon og gaming. Skriv en refleksjonstekst (300–400 ord) der du:

a) Oppsummerer de tre viktigste tingene du har lært i dette temaet
b) Forklarer hvordan begreper fra ulike kapitler henger sammen (f.eks. closure i tegneserier og environmental storytelling i spill — begge krever aktiv tolkning)
c) Diskuterer hvordan forståelsen av sammensatte tekster gjør deg til en mer **kritisk mediebruker** i hverdagen
d) Reflekterer over hvilket medium som engasjerer deg mest — og forklarer HVORFOR med fagbegreper (affordans, interaktivitet, tolkningsrom, etc.)
e) Ser fremover: Hvordan tror du sammensatte tekster og digitale medier vil utvikle seg? Hva er neste steg?`,
        hints: [
          'Bruk fagbegreper fra alle kapitlene: semiotisk ressurs, affordans, koherens, closure, mise-en-scène, lydlandskap, fortellerdriv, adaptasjon, ludonarrativitet, environmental storytelling',
          'Personlige refleksjoner er like viktige som faglige analyser i denne oppgaven',
          'Det finnes ikke ett riktig svar — det viktige er at du reflekterer med dybde og bruker fagspråket',
        ],
        solution: 'En god refleksjonstekst binder tråder fra alle kapitlene, bruker fagbegreper presist, viser personlig refleksjon og kritisk medieforståelse, og demonstrerer at du ser sammenhengene mellom ulike medier og uttrykksformer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler i del 7
// ============================================================================

export const NORSK_10_DEL7_CHAPTERS = [
  CHAPTER_NORSK_10_9_1,
  CHAPTER_NORSK_10_9_2,
  CHAPTER_NORSK_10_9_3,
  CHAPTER_NORSK_10_9_4,
  CHAPTER_NORSK_10_9_5,
  CHAPTER_NORSK_10_9_6,
];
