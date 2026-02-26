/**
 * Tekstbok innhold for Engelsk 10. klasse - Del 4 (Kapittel 10)
 *
 * Følger LK20 læreplan for engelsk ungdomstrinn.
 * Fokus på kritisk lesing, analyse av engelske tekster og akademisk lesekompetanse.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 10: Critical Reading
// ============================================================================

export const CHAPTER_ENGELSK_10_10: TextbookChapter = {
  id: 'engelsk-10-10',
  courseId: 'engelsk-10',
  chapterNumber: '10',
  title: 'Critical Reading',
  description: 'Lær å analysere engelske tekster kritisk, gjenkjenne overtalelsesteknikker, evaluere kilders troverdighet, og syntetisere informasjon fra flere kilder.',
  estimatedMinutes: 90,
  competenceGoals: [
    'lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre',
    'bruke ulike strategier for å forstå og vurdere innholdet i tekster på engelsk',
    'sammenligne og vurdere engelskspråklige kilder kritisk og reflektere over avsenderens formål',
    'utforske og drøfte engelskspråklige tekster og reflektere over sammenhenger mellom tekst, kultur og samfunn',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-10-intro',
      type: 'text',
      content: `## Critical Reading — Å lese med et kritisk blikk

I en verden full av informasjon er evnen til å lese kritisk viktigere enn noensinne. Kritisk lesing handler ikke bare om å forstå hva en tekst sier — det handler om å vurdere **hvordan** og **hvorfor** teksten sier det den gjør.

Som kritisk leser stiller du spørsmål som:

- **Hvem** har skrevet denne teksten, og hva er forfatterens bakgrunn?
- **Hvorfor** ble teksten skrevet? Hva er formålet — å informere, overbevise, underholde eller manipulere?
- **Hvordan** bruker forfatteren språk, struktur og virkemidler for å påvirke leseren?
- **Hva** er utelatt? Er det andre perspektiver som ikke blir presentert?
- **Hvilke** bevis underbygger påstandene, og er de troverdige?

Kritisk lesing er en ferdighet du trenger i alle fag, men den er spesielt viktig i engelsk fordi du møter tekster fra mange ulike engelskspråklige kulturer og medietradisjoner. Enten du leser en nyhetsartikkel fra BBC, en meningsytring fra en blogger, eller en reklametekst, må du kunne skille mellom fakta og meninger, gjenkjenne overtalelsesteknikker, og vurdere kildens pålitelighet.

**I dette kapittelet lærer du å:**

1. Identifisere overtalelsesteknikker (*persuasion techniques*) i engelske tekster
2. Evaluere teksters troverdighet og formål (*purpose and reliability*)
3. Syntetisere informasjon fra flere kilder (*synthesis*)
4. Sammenligne kilder og perspektiver (*comparing sources*)
5. Lese akademiske tekster strategisk (*academic reading strategies*)`,
    },

    // ========== DEFINISJON 1: PERSUASION TECHNIQUES ==========
    {
      id: 'engelsk-10-10-def-1',
      type: 'definition',
      title: 'Persuasion Techniques — Overtalelsesteknikker',
      content: `**Persuasion techniques** er virkemidler en forfatter bruker for å overtale leseren til å akseptere et bestemt synspunkt eller handle på en bestemt måte.

**De viktigste teknikkene:**

**1. Emotional appeal (Patos)**
Appellerer til følelser som frykt, medfølelse, sinne eller stolthet.
- *"Imagine a child going to bed hungry every single night."*
- Brukes ofte i veldedighetskampanjer og politiske taler.

**2. Logical appeal (Logos)**
Bruker fakta, statistikk og logiske argumenter.
- *"Studies show that 73% of teenagers report feeling stressed about school."*
- Styrker troverdigheten, men husk å sjekke kilden bak tallene.

**3. Ethical appeal (Etos)**
Bygger tillit gjennom forfatterens troverdighet, karakter eller autoritet.
- *"As a doctor with 20 years of experience, I can confirm that..."*
- Ekspertuttalelser og referanser til anerkjente institusjoner.

**4. Bandwagon effect**
Antyder at "alle gjør det", så du bør også gjøre det.
- *"Millions of people have already switched to our product."*

**5. Repetition**
Gjentar nøkkelord eller fraser for å forsterke budskapet.
- *"We will fight on the beaches, we will fight in the fields..."* (Churchill)

**6. Loaded language**
Bruker ord med sterke positive eller negative konnotasjoner.
- *"Freedom fighters"* vs. *"terrorists"* — samme handling, ulikt bilde.

**7. Rhetorical questions**
Spørsmål der svaret er underforstått.
- *"Don't we all deserve a better future?"*

**8. Anecdote**
En personlig historie som gjør argumentet mer relaterbart.
- *"When I was 15, I experienced bullying firsthand. That is why I believe..."*`,
    },

    // ========== TEORI: SLIK GJENKJENNER DU TEKNIKKER ==========
    {
      id: 'engelsk-10-10-text-1',
      type: 'text',
      content: `## Slik gjenkjenner du overtalelsesteknikker i praksis

Når du leser en tekst, bør du stille deg selv disse spørsmålene:

**Steg 1: Identifiser formålet**
Hva prøver forfatteren å oppnå? Vil hen informere, overbevise, selge noe, eller vekke følelser?

**Steg 2: Se etter mønsteret**
- Bruker teksten mye statistikk og forskning? → Logos
- Bruker den sterke følelsesord og personlige historier? → Patos
- Refererer den til eksperter og autoriteter? → Etos
- Sier den at "alle andre gjør det"? → Bandwagon

**Steg 3: Sjekk balansen**
En troverdig tekst presenterer ofte flere sider av en sak. En overtalende tekst fokuserer gjerne kun på én side.

**Steg 4: Se etter det som mangler**
Hva sier teksten *ikke*? Hvilke motargumenter er utelatt? Manglende informasjon er ofte like viktig som det som faktisk står der.

**Nøkkelregel:** En tekst kan bruke overtalelsesteknikker uten at den er usann. Kritisk lesing handler om å *gjenkjenne* teknikkene, ikke nødvendigvis avvise innholdet.`,
    },

    // ========== EKSEMPEL 1: ANALYSE AV OVERTALELSESTEKNIKKER ==========
    {
      id: 'engelsk-10-10-example-1',
      type: 'example',
      title: 'Eksempel: Identifisere overtalelsesteknikker',
      problem: `Les følgende utdrag og identifiser hvilke overtalelsesteknikker som brukes:

*"Every year, over 8 million tonnes of plastic end up in our oceans. Marine biologist Dr. Sarah Chen warns that if we don't act now, there will be more plastic than fish in the sea by 2050. Think about that for a moment — more plastic than fish. Our children and grandchildren deserve a cleaner world. Join the millions of people who have already made the switch to reusable products. Don't you want to be part of the solution?"*`,
      solution: `**Analyse av overtalelsesteknikker:**

1. **Logos (logisk appell):** *"Over 8 million tonnes of plastic end up in our oceans"* — konkret statistikk som gir faktagrunnlag.

2. **Etos (etisk appell):** *"Marine biologist Dr. Sarah Chen warns..."* — en ekspert siteres for å gi budskapet troverdighet.

3. **Repetition:** *"more plastic than fish"* — gjentas for å forsterke det sjokkerende budskapet.

4. **Emotional appeal (patos):** *"Our children and grandchildren deserve a cleaner world"* — appellerer til omsorg for fremtidige generasjoner.

5. **Bandwagon effect:** *"Join the millions of people who have already made the switch"* — antyder at mange allerede gjør det.

6. **Rhetorical question:** *"Don't you want to be part of the solution?"* — et spørsmål der svaret er underforstått (ja, selvfølgelig).

**Formål:** Teksten er en overtalende tekst som bruker en kombinasjon av fakta og følelser for å motivere leseren til å endre atferd. Den er relativt balansert fordi den starter med fakta (logos), men bruker deretter flere emosjonelle teknikker.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-10-ex-1',
        number: '10.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken overtalelsesteknikk brukes i følgende setning? "As a teacher with 30 years of experience in education, I strongly believe that homework is essential for student learning."',
        options: [
          {
            id: 'a',
            text: 'Ethical appeal (etos) — forfatteren bygger troverdighet gjennom sin erfaring og autoritet',
            isCorrect: true,
            feedback: 'Riktig! Forfatteren refererer til sin lange erfaring (30 år) og profesjonelle rolle (teacher) for å gi argumentet vekt og troverdighet.',
          },
          {
            id: 'b',
            text: 'Emotional appeal (patos) — setningen appellerer til leserens følelser',
            isCorrect: false,
            feedback: 'Feil. Setningen er saklig og bygger på erfaring, ikke følelser. Patos ville brukt mer følelsesladet språk.',
          },
          {
            id: 'c',
            text: 'Bandwagon effect — setningen sier at alle gjør det',
            isCorrect: false,
            feedback: 'Feil. Bandwagon-effekten handler om at "alle andre gjør det". Her refereres det til én persons erfaring.',
          },
          {
            id: 'd',
            text: 'Loaded language — setningen bruker ord med sterke konnotasjoner',
            isCorrect: false,
            feedback: 'Feil. Ordene i setningen er relativt nøytrale. "Strongly believe" er meningsytring, men ikke loaded language.',
          },
        ],
        solution: 'Ethical appeal (etos). Forfatteren bruker sin profesjonelle bakgrunn og lange erfaring som grunnlag for troverdighet.',
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-10-ex-2',
        number: '10.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Les følgende utdrag: "Nine out of ten dentists recommend BrightSmile toothpaste. Why would you trust anything else? Your family deserves the best protection against cavities." Hvilken kombinasjon av overtalelsesteknikker brukes?',
        options: [
          {
            id: 'a',
            text: 'Logos (statistikk), rhetorical question, og emotional appeal (familie)',
            isCorrect: true,
            feedback: 'Riktig! "Nine out of ten" er statistikk (logos), "Why would you trust anything else?" er et retorisk spørsmål, og "Your family deserves" appellerer til omsorg for familien (patos).',
          },
          {
            id: 'b',
            text: 'Kun bandwagon effect og repetition',
            isCorrect: false,
            feedback: 'Feil. Det finnes elementer av bandwagon ("nine out of ten"), men teksten bruker også tydelig et retorisk spørsmål og emosjonell appell.',
          },
          {
            id: 'c',
            text: 'Kun ethical appeal og anecdote',
            isCorrect: false,
            feedback: 'Feil. Det er ingen personlig historie (anekdote), og selv om eksperter nevnes (tannleger), er det flere teknikker i spill.',
          },
          {
            id: 'd',
            text: 'Kun loaded language og repetition',
            isCorrect: false,
            feedback: 'Feil. "Deserves" og "best protection" er noe ladet, men de dominerende teknikkene er statistikk, retorisk spørsmål og emosjonell appell.',
          },
        ],
        solution: 'Teksten kombinerer logos (statistikk fra tannleger), et retorisk spørsmål, og patos (appell til familieansvar). Reklametekster bruker ofte flere teknikker samtidig.',
      },
    },

    // ========== DEFINISJON 2: SOURCE EVALUATION ==========
    {
      id: 'engelsk-10-10-def-2',
      type: 'definition',
      title: 'Source Evaluation — Kildevurdering',
      content: `**Source evaluation** er prosessen med å vurdere om en kilde er troverdig, pålitelig og relevant for ditt formål.

**CRAAP-testen** er et anerkjent verktøy for kildevurdering:

**C — Currency (Aktualitet)**
- Når ble teksten publisert eller sist oppdatert?
- Er informasjonen fortsatt relevant, eller er den utdatert?
- *"An article about social media from 2010 may not reflect today's platforms."*

**R — Relevance (Relevans)**
- Er kilden relevant for det du undersøker?
- Er informasjonen på riktig nivå (ikke for enkel eller for avansert)?
- *"A medical journal article may be too technical for a school essay."*

**A — Authority (Autoritet)**
- Hvem er forfatteren? Hva er kvalifikasjonene?
- Er utgiveren anerkjent (f.eks. BBC, The Guardian, Nature)?
- *"A blog post by an anonymous author has less authority than a BBC article."*

**A — Accuracy (Nøyaktighet)**
- Er informasjonen underbygget med kilder og bevis?
- Kan du verifisere påstandene i andre kilder?
- *"If a claim has no sources, treat it with skepticism."*

**P — Purpose (Formål)**
- Hva er formålet med teksten — informere, overbevise, selge, underholde?
- Er innholdet objektivt, eller er det tydelig partisk (*biased*)?
- *"An advertisement's purpose is to sell, so its claims should be verified."*`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-10-ex-3',
        number: '10.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk CRAAP-testen for å vurdere følgende kilde. Gi en kort vurdering for hvert kriterium.',
        subTasks: [
          {
            label: 'a',
            task: 'En bloggpost fra 2019 med tittelen "Why Vaccines Are Dangerous" skrevet av en anonym forfatter på en personlig nettside, uten kildehenvisninger.',
            solution: 'Currency: Relativt ny (2019), men vaksineforskning oppdateres stadig. Relevance: Avhenger av tema. Authority: Ingen kjent forfatter, personlig nettside — lav autoritet. Accuracy: Ingen kilder — svært lav nøyaktighet. Purpose: Sannsynligvis å overbevise, muligens konspiratorisk. Totalvurdering: Upålitelig kilde.',
          },
          {
            label: 'b',
            task: 'En forskningsartikkel fra 2023 i tidsskriftet "The Lancet" om effekten av vaksinasjon, skrevet av et team på 12 forskere ved Oxford University.',
            solution: 'Currency: Svært aktuell (2023). Relevance: Høy, direkte relevant for vaksinasjonstemaet. Authority: The Lancet er et av verdens mest anerkjente medisinske tidsskrifter, Oxford er et topp-universitet. Accuracy: Fagfellevurdert med kildehenvisninger. Purpose: Å informere det vitenskapelige miljøet. Totalvurdering: Svært pålitelig kilde.',
          },
        ],
        hints: [
          'Tenk gjennom hvert av de fem CRAAP-kriteriene systematisk',
          'Sammenlign de to kildene direkte — hva er forskjellene?',
        ],
        solution: 'De to kildene viser tydelig forskjell i troverdighet. Kilde (a) mangler autoritet, nøyaktighet og transparens. Kilde (b) oppfyller alle kriteriene i CRAAP-testen. Denne øvelsen viser hvorfor kildevurdering er avgjørende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEORI: SYNTHESIS ==========
    {
      id: 'engelsk-10-10-text-2',
      type: 'text',
      content: `## Synthesis — Å sette sammen informasjon fra flere kilder

**Synthesis** (syntese) betyr å kombinere informasjon fra flere kilder for å skape en dypere forståelse av et tema. Det er en av de viktigste ferdighetene i akademisk lesing og skriving.

**Forskjellen mellom oppsummering og syntese:**

| | **Summary** | **Synthesis** |
|---|---|---|
| **Hva det er** | Gjengi hva *én* kilde sier | Kombinere innsikt fra *flere* kilder |
| **Fokus** | Gjenfortelling | Sammenligning og ny innsikt |
| **Resultat** | Du forstår én tekst | Du forstår et helt tema |

**Slik gjør du en syntese:**

**1. Les flere kilder om samme tema**
Velg 2-4 kilder som belyser ulike sider av temaet.

**2. Identifiser hovedpoengene**
Hva er kjernebudskapet i hver kilde?

**3. Se etter mønstre**
- Hva er kildene **enige** om?
- Hvor **motsier** de hverandre?
- Hva tilfører hver kilde som de andre **mangler**?

**4. Kombiner til en helhet**
Skriv en tekst som vever sammen informasjonen og gir en samlet forståelse.

**Nyttige fraser for syntese:**
- *"While Source A argues that..., Source B presents a different perspective..."*
- *"Both sources agree that..., however they differ on..."*
- *"Source A focuses on..., whereas Source B emphasises..."*
- *"Together, these sources suggest that..."*`,
    },

    // ========== DEFINISJON 3: BIAS ==========
    {
      id: 'engelsk-10-10-def-3',
      type: 'definition',
      title: 'Bias — Skjevhet og partiskhet i tekster',
      content: `**Bias** (skjevhet) betyr at en tekst presenterer informasjon på en ubalansert måte som favoriserer ett perspektiv fremfor andre.

**Typer bias:**

**1. Confirmation bias (Bekreftelsesskjevhet)**
Forfatteren velger kun informasjon som støtter eget synspunkt.
- *Eksempel:* En artikkel om skjermtid som kun siterer studier som viser negative effekter, og ignorerer studier som viser positive sider.

**2. Selection bias (Utvalgs-skjevhet)**
Forfatteren velger spesifikke eksempler eller data som gir et skjevt bilde.
- *Eksempel:* "Crime rates have skyrocketed!" — men viser kun tall fra én by i én måned.

**3. Cultural bias (Kulturell skjevhet)**
Teksten ser verden gjennom ett kulturelt perspektiv og ignorerer andre.
- *Eksempel:* En bok om "world history" som nesten utelukkende handler om Europa og Nord-Amerika.

**4. Media bias (Medieskjevhet)**
Nyhetsmedier kan ha politisk, ideologisk eller kommersiell skjevhet.
- *Eksempel:* Fox News og CNN dekker ofte samme hendelse svært forskjellig.

**Slik avslører du bias:**
- Les flere kilder om samme tema
- Se etter ladet språk (*loaded language*)
- Spør: *"What is missing from this picture?"*
- Sjekk hvem som finansierer eller eier mediet
- Vurder om forfatteren har en personlig interesse (*conflict of interest*)`,
    },

    // ========== EKSEMPEL 2: SAMMENLIGNING AV KILDER ==========
    {
      id: 'engelsk-10-10-example-2',
      type: 'example',
      title: 'Eksempel: Sammenligne to kilder om samme tema',
      problem: `Sammenlign disse to utdragene om skjermtid for tenåringer:

**Kilde A** (Tech Industry Blog):
*"Screen time can be incredibly beneficial for teenagers. Digital tools help students learn faster, connect with peers globally, and develop essential 21st-century skills. Research by TechEd Foundation shows that students who use tablets in class perform 15% better on standardized tests."*

**Kilde B** (Health Journal):
*"Excessive screen time among teenagers is linked to increased rates of anxiety, sleep disorders, and reduced physical activity. A meta-analysis of 47 studies published in The Journal of Pediatrics found that more than two hours of recreational screen time per day is associated with negative mental health outcomes."*`,
      solution: `**Sammenligning:**

| Aspekt | Kilde A | Kilde B |
|---|---|---|
| **Perspektiv** | Positiv til skjermtid | Bekymret for skjermtid |
| **Avsender** | Tech Industry Blog — kommersielt interessert | Health Journal — vitenskapelig |
| **Bevis** | Én studie fra TechEd Foundation (mulig interessekonflikt) | Meta-analyse av 47 studier i anerkjent tidsskrift |
| **Fokus** | Læringsverdi og ferdigheter | Helsekonsekvenser |
| **Bias** | Selection bias — kun positive effekter | Kan ha confirmation bias mot negative effekter |
| **Troverdighet** | Middels — mulig interessekonflikt | Høy — fagfellevurdert forskning |

**Syntese:**
Begge kildene har relevante poenger. Skjermtid *kan* være nyttig for læring (Kilde A), men *overdreven* skjermtid har dokumenterte helseulemper (Kilde B). Kilde B er mer troverdig på grunn av bredere forskningsgrunnlag og uavhengig publisering. En balansert konklusjon er at **moderat, målrettet** skjermtid er gunstig, mens **overdreven, passiv** skjermtid er skadelig.

**Nøkkelspørsmål som avslørte bias:**
- Hvem finansierer TechEd Foundation? (Sannsynligvis teknologiselskaper)
- Skiller Kilde B mellom produktiv og underholdningsmessig skjermtid?
- Hvilke aldersgrupper dekker meta-analysen?`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-10-ex-4',
        number: '10.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken type bias er mest tydelig i følgende eksempel? En nyhetsartikkel om innvandring viser kun intervjuer med personer som er negative til innvandring, og presenterer kun statistikk om kriminalitet blant innvandrere.',
        options: [
          {
            id: 'a',
            text: 'Selection bias — forfatteren har bevisst valgt kun informasjon som støtter ett perspektiv',
            isCorrect: true,
            feedback: 'Riktig! Selection bias betyr at forfatteren har plukket ut spesifikke eksempler, intervjuer og data som gir et skjevt bilde. Ved å kun vise negative perspektiver og kriminalitetsstatistikk ignoreres positive bidrag fra innvandrere.',
          },
          {
            id: 'b',
            text: 'Cultural bias — artikkelen ser verden fra ett kulturelt ståsted',
            isCorrect: false,
            feedback: 'Delvis relevant, men ikke det mest treffende. Cultural bias handler mer om et kulturelt perspektiv som preger hele teksten, mens dette er et bevisst utvalg av informasjon.',
          },
          {
            id: 'c',
            text: 'Confirmation bias — leseren velger å bare lese det hen er enig i',
            isCorrect: false,
            feedback: 'Feil. Confirmation bias hos *leseren* er noe annet. Her handler det om *forfatterens* skjeve utvalg av informasjon.',
          },
          {
            id: 'd',
            text: 'Det er ingen bias — artikkelen presenterer fakta',
            isCorrect: false,
            feedback: 'Feil. Selv om enkeltfaktaene kan være sanne, er det ensidig å kun presentere negative perspektiver. Bias handler ofte om hva som *utelates*.',
          },
        ],
        solution: 'Selection bias. Forfatteren har gjort et bevisst utvalg som bare viser én side av saken. Husk: bias handler like mye om det som utelates som det som inkluderes.',
      },
    },

    // ========== TEORI: AKADEMISK LESING ==========
    {
      id: 'engelsk-10-10-text-3',
      type: 'text',
      content: `## Academic Reading Strategies — Strategier for akademisk lesing

Når du leser engelske fagtekster eller artikler på et høyere nivå, trenger du effektive lesestrategier. Her er de viktigste:

**1. Skimming — Få overblikk**
Les raskt gjennom teksten for å forstå hva den handler om:
- Les overskrifter, underoverskrifter, ingresser
- Les første setning i hvert avsnitt (*topic sentences*)
- Se på bilder, grafer og tabeller
- Les avslutningen

**2. Scanning — Finn spesifikk informasjon**
Let etter konkret informasjon uten å lese alt:
- Søk etter nøkkelord, tall, navn eller datoer
- Bruk innholdsfortegnelse og register (index)

**3. Close reading — Grundig lesing**
Les nøye for å forstå dybden i teksten:
- Les sakte og noter underveis
- Slå opp ukjente ord
- Still spørsmål til teksten mens du leser
- Merk viktige passasjer

**4. Annotating — Å gjøre notater i teksten**
Skriv notater i margen (eller på post-it-lapper):
- Understrek nøkkelpoenger
- Skriv korte spørsmål eller kommentarer
- Bruk symboler: **?** (forstår ikke), **!** (viktig), **↔** (kobling til annen tekst)

**5. SQ3R-metoden — En systematisk lesestrategi**
- **S**urvey — Få overblikk over teksten
- **Q**uestion — Formuler spørsmål du vil ha svar på
- **R**ead — Les teksten grundig
- **R**ecite — Gjenfortell hovedpoengene med egne ord
- **R**eview — Gå tilbake og sjekk at du har forstått alt`,
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-10-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-10-ex-5',
        number: '10.5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Match hver lesestrategi med situasjonen der den passer best.',
        subTasks: [
          {
            label: 'a',
            task: 'Du har 2 minutter til å finne ut hva en 10-siders artikkel handler om.',
            solution: 'Skimming — les overskrifter, ingress, første setning i hvert avsnitt og avslutningen for å få raskt overblikk.',
            multipleChoiceOptions: ['Skimming', 'Scanning', 'Close reading', 'Annotating'],
          },
          {
            label: 'b',
            task: 'Du trenger å finne årstallet for en bestemt hendelse nevnt i en lang tekst.',
            solution: 'Scanning — let spesifikt etter tall og datoer uten å lese alt.',
            multipleChoiceOptions: ['Scanning', 'Skimming', 'Close reading', 'SQ3R'],
          },
          {
            label: 'c',
            task: 'Du skal analysere forfatterens bruk av overtalelsesteknikker i en debattartikkel.',
            solution: 'Close reading — du trenger å lese grundig, ord for ord, for å identifisere språklige virkemidler.',
            multipleChoiceOptions: ['Close reading', 'Skimming', 'Scanning', 'Annotating'],
          },
          {
            label: 'd',
            task: 'Du forbereder deg til en muntlig presentasjon om en vitenskapelig artikkel.',
            solution: 'SQ3R — den systematiske tilnærmingen hjelper deg å forstå og huske stoffet grundig nok til å presentere det.',
            multipleChoiceOptions: ['SQ3R', 'Skimming', 'Scanning', 'Close reading'],
          },
        ],
        solution: 'a) Skimming, b) Scanning, c) Close reading, d) SQ3R. Valg av strategi avhenger av formålet med lesingen og tiden du har tilgjengelig.',
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-10-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-10-ex-6',
        number: '10.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les de to korte utdragene nedenfor og skriv en kort syntese (5-8 setninger på engelsk) som kombinerer informasjonen fra begge kildene.',
        subTasks: [
          {
            label: 'a',
            task: `Kilde 1: "According to a 2023 report by UNESCO, access to education has improved dramatically worldwide. Primary school enrollment in developing countries has risen from 64% in 1990 to 91% in 2022."

Kilde 2: "Despite gains in enrollment, a World Bank study reveals that 53% of children in low-income countries cannot read a simple sentence by age 10. Attendance alone does not guarantee learning."

Skriv en syntese som kombinerer begge perspektivene.`,
            solution: 'Eksempel: "While global access to education has improved significantly, with primary enrollment rising from 64% to 91% since 1990 (UNESCO), the quality of education remains a serious concern. According to the World Bank, over half of children in low-income countries cannot read a simple sentence by age 10, suggesting that enrollment alone does not equal learning. Together, these sources indicate that the next challenge in global education is not getting children into schools, but ensuring they actually receive quality education once there."',
          },
        ],
        hints: [
          'Start med det kildene er enige om, deretter vis forskjellen',
          'Bruk fraser som "While Source 1 shows..., Source 2 reveals..."',
          'Avslutt med en konklusjon som kombinerer begge perspektivene',
        ],
        solution: 'En god syntese kombinerer innsikt fra begge kildene uten å bare gjenfortelle dem separat. Nøkkelen er å vise hvordan kildene utfyller hverandre og sammen gir et mer komplett bilde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 7 ==========
    {
      id: 'engelsk-10-10-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-10-ex-7',
        number: '10.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Les den følgende teksten og gjør en fullstendig kritisk analyse. Identifiser formål, overtalelsesteknikker, mulig bias og kildens troverdighet.',
        subTasks: [
          {
            label: 'a',
            task: `Tekst: "FastLearn Academy — Your Future Starts Here!

Are you tired of falling behind in school? Our revolutionary AI-powered tutoring system has helped over 50,000 students improve their grades by an average of two full letter grades in just 8 weeks! Harvard-trained educators designed our curriculum, and 97% of parents say they would recommend FastLearn to a friend.

Don't let your child miss out — every day without FastLearn is a day wasted. Sign up now and get 50% off your first month!"

Hva er formålet med denne teksten?`,
            solution: 'Formålet er å selge et produkt (FastLearn Academy). Det er en reklametekst som prøver å overtale foreldre til å kjøpe en abonnementstjeneste.',
          },
          {
            label: 'b',
            task: 'Identifiser minst fire overtalelsesteknikker som brukes i teksten.',
            solution: '1) Emotional appeal/Fear: "tired of falling behind", "every day without FastLearn is a day wasted" (frykt for å gå glipp av noe). 2) Logos/Statistikk: "50,000 students", "two full letter grades", "97% of parents". 3) Etos/Authority: "Harvard-trained educators". 4) Bandwagon: "50,000 students", "97% of parents". 5) Loaded language: "revolutionary", "a day wasted". 6) Rhetorical question: "Are you tired of falling behind?"',
          },
          {
            label: 'c',
            task: 'Vurder kildens troverdighet ved hjelp av CRAAP-testen.',
            solution: 'Currency: Uklar — ingen dato oppgitt. Relevance: Relevant for foreldre som vurderer leksehjelp. Authority: "Harvard-trained" er vagt — er de ansatt ved Harvard, eller tok de ett kurs der? Accuracy: Statistikken er ikke kildehenvist — hvem utførte studien? "97% of parents" kan være fra en svært liten spørreundersøkelse. Purpose: Tydelig kommersielt — formålet er å selge. Totalvurdering: Lav troverdighet som informasjonskilde; høy troverdighet som eksempel på overtalende reklame.',
          },
          {
            label: 'd',
            task: 'Hvilken informasjon mangler fra teksten som ville gjort den mer troverdig?',
            solution: 'Det mangler: 1) Uavhengig forskning som bekrefter resultatene. 2) Informasjon om hvem som utførte studien med 50 000 elever. 3) Prisen etter rabattperioden. 4) Hva "Harvard-trained" faktisk betyr. 5) Noen erkjennelse av begrensninger. 6) Informasjon om hva som skjer etter 8 uker.',
          },
        ],
        hints: [
          'Les teksten flere ganger — først for innhold, deretter for teknikker',
          'Husk at reklametekster er designet for å selge, ikke informere objektivt',
          'Bruk CRAAP-testen systematisk på hvert kriterium',
        ],
        solution: 'Denne teksten er et godt eksempel på kommersiell overtalelse som bruker mange teknikker samtidig. En kritisk leser gjenkjenner at imponerende tall uten kildehenvisning, vagt autoritetsgrunnlag og fryktbasert markedsføring er røde flagg for troverdigheten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-10-summary',
      type: 'text',
      content: `## Oppsummering — Critical Reading

**Overtalelsesteknikker (Persuasion techniques):**
- **Patos** — appell til følelser
- **Logos** — appell til logikk og fakta
- **Etos** — appell til troverdighet og autoritet
- **Bandwagon** — "alle gjør det"
- **Repetition** — gjentakelse for effekt
- **Loaded language** — ord med sterke konnotasjoner
- **Rhetorical questions** — spørsmål med underforstått svar
- **Anecdote** — personlige historier

**Kildevurdering (CRAAP-testen):**
- **C**urrency — Er informasjonen oppdatert?
- **R**elevance — Er kilden relevant for ditt formål?
- **A**uthority — Er forfatteren kvalifisert?
- **A**ccuracy — Er påstandene underbygget?
- **P**urpose — Hva er formålet med teksten?

**Syntese (Synthesis):**
Å kombinere informasjon fra flere kilder til en samlet forståelse. Se etter likheter, forskjeller og hva kildene tilfører hverandre.

**Bias (Skjevhet):**
Vær oppmerksom på confirmation bias, selection bias, cultural bias og media bias. Spør alltid: *"What is missing?"*

**Lesestrategier:**
- **Skimming** — raskt overblikk
- **Scanning** — finne spesifikk informasjon
- **Close reading** — grundig analyse
- **Annotating** — notater i teksten
- **SQ3R** — systematisk lesestrategi

**Husk:** Kritisk lesing handler ikke om å avvise alt du leser, men om å forstå *hvordan* tekster påvirker deg og gjøre informerte vurderinger.`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-10-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-10-ex-8',
        number: '10.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn to engelske nyhetsartikler om samme hendelse fra to ulike nyhetskilder (f.eks. BBC og Fox News, eller The Guardian og The Daily Mail). Skriv en kritisk analyse (ca. 300 ord på engelsk) der du sammenligner dem.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv kort hva hendelsen handler om og hvilke to kilder du har valgt.',
            solution: 'Eleven bør identifisere en tydelig hendelse og to anerkjente, men forskjellige nyhetskilder.',
          },
          {
            label: 'b',
            task: 'Analyser overtalelsesteknikker og bias i hver av de to artiklene.',
            solution: 'Eleven bør identifisere bruk av loaded language, selection bias, og eventuelle forskjeller i hvilke eksperter som siteres og hvilke fakta som vektlegges.',
          },
          {
            label: 'c',
            task: 'Skriv en syntese der du forklarer hva en leser kan lære ved å lese begge artiklene, som hen ikke ville fått fra bare én av dem.',
            solution: 'Syntesen bør vise at forskjellige kilder belyser ulike aspekter av saken, og at man får et mer komplett og nyansert bilde ved å konsultere flere kilder med ulike perspektiver.',
          },
        ],
        hints: [
          'Velg et tema der du forventer ulike perspektiver (f.eks. klimapolitikk, innvandring, teknologi)',
          'Bruk CRAAP-testen og bias-kategoriene systematisk',
          'Husk å bruke kildehenvisninger i analysen din',
        ],
        solution: 'Denne oppgaven gir praktisk erfaring med å sammenligne kilder i den virkelige verden. Nøkkelen er å ikke bare beskrive forskjellene, men forklare *hvorfor* kildene er forskjellige (ulik redaksjonell linje, ulik målgruppe, ulik bias).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-10-ex-9',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-10-ex-9',
        number: '10.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort argumenterende tekst (200-250 ord på engelsk) der du forklarer hvorfor critical reading er viktig i dagens samfunn. Bruk minst to av overtalelsesteknikkene du har lært i dette kapittelet bevisst, og marker dem i teksten din.',
        subTasks: [
          {
            label: 'a',
            task: 'Planlegg teksten: Velg to overtalelsesteknikker du vil bruke, og skriv en thesis statement.',
            solution: 'Eleven bør bevisst velge f.eks. logos (statistikk om misinformasjon) og patos (konsekvenser for demokratiet), og formulere en tydelig thesis som "Critical reading is the most important skill for navigating the modern information landscape."',
          },
          {
            label: 'b',
            task: 'Skriv teksten. Marker i parentes hvilke teknikker du bruker, f.eks.: [LOGOS], [PATHOS], [ETHOS].',
            solution: 'Eleven bør produsere en velstrukturert tekst som demonstrerer bevisst bruk av overtalelsesteknikker. Markeringene viser metabevissthet om egne skrivevalg.',
          },
          {
            label: 'c',
            task: 'Reflekter: Ble teksten din mer overbevisende med disse teknikkene? Kunne noen kritisere teksten din for bias? Forklar.',
            solution: 'Eleven bør reflektere over at overtalelsesteknikker gjør tekster mer effektive, men at bevisst bruk også innebærer et ansvar. Å kun velge fakta som støtter eget syn er selection bias, selv i en argumenterende tekst.',
          },
        ],
        hints: [
          'Bruk det du har lært i dette kapittelet som eksempler i teksten din',
          'Prøv å bruke minst én statistikk eller forskningsreferanse (logos)',
          'Husk at en god argumenterende tekst anerkjenner motargumenter',
        ],
        solution: 'Denne oppgaven krever at du bruker overtalelsesteknikker bevisst — altså at du forstår dem godt nok til å bruke dem selv. Samtidig krever den meta-refleksjon: at du vurderer din egen tekst kritisk. Dette er kjernen i critical reading — å forstå hvordan tekster påvirker, både som leser og som skribent.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT: Samlet array for del 4
// ============================================================================

export const ENGELSK_10_DEL4_CHAPTERS = [
  CHAPTER_ENGELSK_10_10,
];
