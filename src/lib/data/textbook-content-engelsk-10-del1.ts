/**
 * Tekstbok innhold for Engelsk 10. klasse - Del 1 (Kapittel 1-4)
 *
 * Følger LK20 læreplan for engelsk ungdomstrinn.
 * Avsluttende år med fokus på eksamensforberedelse og avanserte ferdigheter.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: Exam Preparation - Writing
// ============================================================================

export const CHAPTER_ENGELSK_10_1: TextbookChapter = {
  id: 'engelsk-10-1',
  courseId: 'engelsk-10',
  chapterNumber: '1',
  title: 'Exam Preparation - Writing',
  description: 'Forbered deg grundig til skriftlig eksamen med fokus på ulike teksttyper, skrivestrategier og språklige virkemidler.',
  estimatedMinutes: 90,
  competenceGoals: [
    'skrive ulike typer tekster med struktur og sammenheng, tilpasset formål og mottaker',
    'bruke variert ordforråd og idiomatiske uttrykk i skriftlig kommunikasjon',
    'bruke kunnskap om grammatikk og tekststruktur til å skape presise og sammenhengende tekster',
    'planlegge, revidere og bearbeide egne tekster basert på tilbakemelding',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-1-intro',
      type: 'text',
      content: `## Preparing for the Written Exam

Den skriftlige eksamenen i engelsk er en av de viktigste prøvene du tar i 10. klasse. Her skal du vise at du kan skrive sammenhengende, velstrukturerte tekster på engelsk — og at du behersker språket på et nivå som gjør at budskapet ditt kommer tydelig fram.

Eksamen varer vanligvis **5 timer** og består av en **forberedelsesdel** (dagen før) og selve **eksamensdagen**. Du får velge mellom flere oppgaver som krever ulike teksttyper.

**De vanligste teksttypene på eksamen:**
- **Essay** — argumenterende eller drøftende tekst
- **Article** — artikkel for avis, magasin eller nettside
- **Short story** — kreativ fortelling med litterære virkemidler
- **Formal letter** — formelt brev til en organisasjon eller myndighet
- **Speech** — tale til et bestemt publikum

Uansett hvilken oppgave du velger, er det noen grunnleggende ferdigheter som alltid teller:

1. **Planlegging** — Lag en disposisjon før du begynner å skrive
2. **Struktur** — Tydelig innledning, hoveddel og avslutning
3. **Språk** — Variert ordforråd, korrekt grammatikk, gode overganger
4. **Innhold** — Relevant, engasjerende og godt begrunnet
5. **Revisjon** — Les gjennom og forbedre teksten din`,
    },

    // ========== DEFINISJON: ESSAY ==========
    {
      id: 'engelsk-10-1-def-1',
      type: 'definition',
      title: 'The Essay — Struktur og kjennetegn',
      content: `Et **essay** er en argumenterende eller drøftende tekst der du presenterer et synspunkt og underbygger det med argumenter og eksempler.

**Struktur:**

**1. Introduction (Innledning)**
- **Hook** — En fengende åpning som fanger leserens oppmerksomhet (spørsmål, sitat, statistikk, anekdote)
- **Background** — Kort kontekst om temaet
- **Thesis statement** — Din hovedpåstand eller det du skal argumentere for, uttrykt i én tydelig setning

**2. Body paragraphs (Hoveddel) — vanligvis 3-4 avsnitt**
- Hvert avsnitt starter med en **topic sentence** (hovedpoeng)
- **Supporting evidence** — Fakta, eksempler, statistikk
- **Explanation** — Forklar hvorfor bevisene støtter poenget ditt
- **Link** — Koble tilbake til thesis statement

**3. Conclusion (Avslutning)**
- Gjenta hovedpåstanden med andre ord
- Oppsummer de viktigste argumentene
- Avslutt med en tankevekkende sluttsetning

**PEEL-metoden for hvert avsnitt:**
- **P**oint — Hva er poenget ditt?
- **E**vidence — Hva er beviset?
- **E**xplain — Hvorfor er dette relevant?
- **L**ink — Hvordan henger dette sammen med thesis?`,
    },

    // ========== EKSEMPEL: ESSAY INTRODUCTION ==========
    {
      id: 'engelsk-10-1-example-1',
      type: 'example',
      title: 'Eksempel: Skrive en essay-innledning',
      problem: `Skriv en innledning til et essay om temaet: "Should social media be banned for teenagers?"`,
      solution: `**Modell-innledning:**

"Every day, millions of teenagers around the world wake up and reach for their phones before they even get out of bed. According to recent studies, the average teenager spends over three hours daily on social media platforms like Instagram, TikTok, and Snapchat. While these platforms offer opportunities for connection, creativity, and self-expression, growing evidence suggests that they also contribute to rising rates of anxiety, depression, and cyberbullying among young people. This essay will argue that rather than imposing an outright ban on social media for teenagers, governments and schools should focus on digital literacy education and stronger platform regulations to protect young users."

**Analyse av innledningen:**
- **Hook:** Konkret, gjenkjennelig bilde (å sjekke telefonen om morgenen)
- **Background:** Statistikk som gir kontekst, pluss nevner både positive og negative sider
- **Thesis statement:** Tydelig standpunkt som viser HVA essayet skal argumentere for
- **Tone:** Balansert — anerkjenner begge sider før standpunktet presenteres

**Vanlige feil å unngå:**
- Å starte med "In this essay I will write about..." (for direkte og kjedelig)
- Å stille et spørsmål uten å besvare det
- Å være for vag i thesis statement`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-1-ex-1',
        number: '1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en "thesis statement"?',
        options: [
          {
            id: 'a',
            text: 'En tydelig setning som uttrykker hovedpåstanden eller argumentet i et essay',
            isCorrect: true,
            feedback: 'Riktig! Thesis statement er kjernen i essayet ditt — den setningen alt annet bygger på.',
          },
          {
            id: 'b',
            text: 'Det første avsnittet i et essay',
            isCorrect: false,
            feedback: 'Feil. Thesis statement er en del av innledningen, men er én spesifikk setning — ikke hele avsnittet.',
          },
          {
            id: 'c',
            text: 'En oppsummering av hele essayet i avslutningen',
            isCorrect: false,
            feedback: 'Feil. Selv om avslutningen gjentar thesis, er thesis statement plassert i innledningen.',
          },
          {
            id: 'd',
            text: 'En setning som stiller et spørsmål til leseren',
            isCorrect: false,
            feedback: 'Feil. En thesis statement er en påstand, ikke et spørsmål. Den uttrykker ditt standpunkt.',
          },
        ],
        solution: 'En thesis statement er en tydelig påstand som uttrykker hovedargumentet i essayet. Den plasseres i innledningen og styrer resten av teksten.',
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-1-ex-2',
        number: '1.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hvilken thesis statement er best? Ranger fra best (1) til dårligst (3) og forklar hvorfor.',
        subTasks: [
          {
            label: 'a',
            task: '"Climate change is bad."',
            solution: 'Rangering: 3 (dårligst). For vag og generell. Sier ikke hva du skal argumentere for eller hvilke aspekter du vil fokusere på.',
          },
          {
            label: 'b',
            task: '"Governments must prioritize renewable energy investments over fossil fuel subsidies because the long-term economic and environmental costs of inaction far outweigh the short-term expenses of transitioning to clean energy."',
            solution: 'Rangering: 1 (best). Spesifikk, tar et tydelig standpunkt, og forteller leseren hva argumentene vil handle om (økonomi og miljø).',
          },
          {
            label: 'c',
            task: '"This essay is about climate change and what we should do about it."',
            solution: 'Rangering: 2. Bedre enn (a) fordi den antyder et tema, men den tar ikke et tydelig standpunkt og er for vag om "hva vi bør gjøre".',
          },
        ],
        solution: 'Beste rekkefølge: b (1), c (2), a (3). En god thesis er spesifikk, tar standpunkt, og antyder strukturen for resten av essayet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: ARTICLE ==========
    {
      id: 'engelsk-10-1-def-2',
      type: 'definition',
      title: 'The Article — Struktur og kjennetegn',
      content: `En **artikkel** er en informativ eller meningsbærende tekst skrevet for en avis, et magasin eller en nettside. Den skal engasjere leseren og formidle informasjon på en tilgjengelig måte.

**Struktur:**

**1. Headline (Overskrift)**
- Kort, fengende og informativ
- Bruker ofte ordspill, allitterasjon eller provokasjon
- Eksempler: "Screen Time: Are We Raising a Generation of Zombies?" / "The Silent Crisis in Our Schools"

**2. Byline (Forfatterinfo)**
- "By [ditt navn]" — vanlig i aviser og magasiner

**3. Lead paragraph (Ingress)**
- Svarer på de 5 W-ene: **Who, What, When, Where, Why** (og eventuelt **How**)
- Fanger oppmerksomheten umiddelbart
- Gir leseren den viktigste informasjonen først

**4. Body (Hoveddel)**
- Utdyper temaet med fakta, sitater og eksempler
- Bruk **sitater** fra relevante personer: "According to Dr. Smith, ..."
- Hvert avsnitt har ett tydelig poeng
- Bruk underoverskrifter for å dele opp lange artikler

**5. Conclusion (Avslutning)**
- Oppsummerer eller peker fremover
- Kan inneholde en "call to action" (oppfordring til handling)
- Kan avslutte med et sitat eller en tankevekkende refleksjon`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-1-ex-3',
        number: '1.3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Match teksttypen med riktig kjennetegn.',
        subTasks: [
          {
            label: 'a',
            task: 'Starter med "Dear Sir/Madam" og avslutter med "Yours faithfully"',
            solution: 'Formal letter',
            multipleChoiceOptions: ['Formal letter', 'Essay', 'Article', 'Short story'],
          },
          {
            label: 'b',
            task: 'Har en "thesis statement" i innledningen og bruker PEEL-strukturen',
            solution: 'Essay',
            multipleChoiceOptions: ['Essay', 'Article', 'Speech', 'Formal letter'],
          },
          {
            label: 'c',
            task: 'Har en catchy headline og svarer på de 5 W-ene i ingressen',
            solution: 'Article',
            multipleChoiceOptions: ['Article', 'Essay', 'Short story', 'Speech'],
          },
          {
            label: 'd',
            task: 'Inneholder setting, characters, rising action, climax og resolution',
            solution: 'Short story',
            multipleChoiceOptions: ['Short story', 'Article', 'Formal letter', 'Essay'],
          },
          {
            label: 'e',
            task: 'Henvender seg direkte til publikum og bruker retoriske virkemidler',
            solution: 'Speech',
            multipleChoiceOptions: ['Speech', 'Essay', 'Article', 'Short story'],
          },
        ],
        solution: 'a) Formal letter, b) Essay, c) Article, d) Short story, e) Speech. Hver teksttype har sine egne konvensjoner og strukturer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: OVERGANGSFASER ==========
    {
      id: 'engelsk-10-1-def-3',
      type: 'definition',
      title: 'Transition Phrases — Overgangsfaser for bedre flyt',
      content: `Gode overgangsfaser binder teksten sammen og gjør den lettere å følge. Her er de viktigste kategoriene:

**For å legge til informasjon (Adding):**
- Furthermore, Moreover, In addition, Additionally, What is more
- "Furthermore, research shows that reading improves vocabulary."

**For å vise kontrast (Contrasting):**
- However, On the other hand, Nevertheless, In contrast, Although, Despite this
- "However, not everyone agrees with this approach."

**For å gi eksempler (Exemplifying):**
- For instance, For example, Such as, To illustrate, A case in point is
- "For instance, Norway has successfully implemented electric vehicle incentives."

**For å vise årsak og virkning (Cause and effect):**
- As a result, Consequently, Thus, Therefore, Because of this, This leads to
- "Consequently, many students struggle with concentration in class."

**For å konkludere (Concluding):**
- In conclusion, To sum up, All in all, Ultimately, In short, To conclude
- "All in all, the benefits of exercise far outweigh the time investment."

**For å ordne poenger (Sequencing):**
- First of all, Secondly, Finally, To begin with, Next, Last but not least
- "First of all, we need to consider the economic implications."

**For å innrømme et poeng (Conceding):**
- Admittedly, It is true that, Granted, While it may be true that
- "Admittedly, social media does have some positive aspects."`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-1-ex-4',
        number: '1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg riktig overgangsfrase for hvert mellomrom.',
        subTasks: [
          {
            label: 'a',
            task: 'Many students struggle with homework. _______, teachers should provide more support during school hours.',
            solution: 'Therefore / Consequently',
            multipleChoiceOptions: ['Therefore', 'However', 'For example', 'In contrast'],
          },
          {
            label: 'b',
            task: 'Exercise is important for physical health. _______, it also improves mental well-being and academic performance.',
            solution: 'Furthermore / Moreover',
            multipleChoiceOptions: ['Furthermore', 'However', 'In conclusion', 'Nevertheless'],
          },
          {
            label: 'c',
            task: 'Some people prefer living in big cities. _______, others enjoy the peace and quiet of rural areas.',
            solution: 'On the other hand / However',
            multipleChoiceOptions: ['On the other hand', 'Therefore', 'Furthermore', 'For instance'],
          },
          {
            label: 'd',
            task: '_______ social media can be addictive, it also provides valuable opportunities for communication and creativity.',
            solution: 'Although / While it is true that',
            multipleChoiceOptions: ['Although', 'Therefore', 'Furthermore', 'In conclusion'],
          },
        ],
        solution: 'a) Therefore, b) Furthermore, c) On the other hand, d) Although. Overgangsfaser viser leseren forholdet mellom ideene dine.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: SHORT STORY ==========
    {
      id: 'engelsk-10-1-def-4',
      type: 'definition',
      title: 'The Short Story — Kreativ skriving på eksamen',
      content: `En **short story** (novelle) er en kreativ tekst med handling, karakterer og et tema. På eksamen forventes det at du viser språklig kreativitet og bruker litterære virkemidler.

**Struktur (Freytags pyramide):**

**1. Exposition (Eksposisjon)**
- Introduser setting (tid og sted), hovedkarakter og situasjon
- "Show, don't tell" — vis gjennom handlinger og sanseinntrykk

**2. Rising action (Stigende handling)**
- Introduser konflikten eller problemet
- Bygg opp spenning gradvis
- La leseren bli kjent med karakterene

**3. Climax (Klimaks)**
- Vendepunktet i historien
- Det mest intense eller avgjørende øyeblikket
- Karakteren må ta et valg eller konfrontere noe

**4. Falling action (Fallende handling)**
- Konsekvensene av klimaks
- Spenningen avtar

**5. Resolution (Oppløsning)**
- Historien avsluttes — åpent eller lukket
- Karakteren har endret seg eller lært noe

**Viktige virkemidler for short story:**
- **Imagery** — Bruk av sanseinntrykk (syn, hørsel, lukt, smak, berøring)
- **Dialogue** — Realistisk dialog som viser karakter
- **Metaphor/simile** — Sammenligninger som skaper dybde
- **Foreshadowing** — Hint om hva som skal skje
- **Show, don't tell** — "Her hands trembled" istedenfor "She was nervous"`,
    },

    // ========== EKSEMPEL: SHOW DON'T TELL ==========
    {
      id: 'engelsk-10-1-example-2',
      type: 'example',
      title: 'Eksempel: "Show, don\'t tell" i kreativ skriving',
      problem: `Hva er forskjellen mellom "telling" og "showing"? Sammenlign disse to versjonene av samme scene.`,
      solution: `**Version A — Telling (svak):**
"Sarah was sad because she had lost her dog. She walked home and felt lonely."

**Version B — Showing (sterk):**
"Sarah trudged along the empty pavement, her eyes scanning every garden and alleyway. 'Max!' she called, her voice cracking. The red leash in her pocket felt heavier with every step. When she reached her front door, the silence that greeted her was deafening — no excited barking, no scrambling paws on the wooden floor. She sank onto the hallway floor and buried her face in Max's favourite blanket, breathing in what was left of him."

**Analyse:**
Version B er mye sterkere fordi den:
- **Bruker handlinger** for å vise følelser (trudged, scanning, sank)
- **Bruker sanseinntrykk** (silence, scrambling paws, breathing in)
- **Bruker detaljer** (red leash, wooden floor, favourite blanket)
- **Bruker dialog** ("Max!" — viser desperasjon)
- **Lar leseren trekke konklusjoner** selv, istedenfor å fortelle at hun er trist

**Tommelfingerregel:** Hvis du kan erstatte et adjektiv (sad, angry, happy) med en handling eller et sanselig bilde, gjør det!`,
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-1-ex-5',
        number: '1.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv om disse "telling"-setningene til "showing"-setninger. Bruk sanseinntrykk, handlinger og detaljer.',
        subTasks: [
          {
            label: 'a',
            task: '"He was very angry."',
            solution: 'Eksempel: "His jaw clenched and he slammed his fist on the table, sending the coffee cup rattling against its saucer." — Viser sinne gjennom fysisk handling og detaljer.',
          },
          {
            label: 'b',
            task: '"The place was scary."',
            solution: 'Eksempel: "Shadows crept along the crumbling walls, and somewhere deep within the building, a door creaked shut on its own." — Viser uhygge gjennom stemning og sanseinntrykk.',
          },
          {
            label: 'c',
            task: '"She was excited about the trip."',
            solution: 'Eksempel: "She checked her suitcase for the third time, bouncing on her toes as she counted down the hours. Sleep was impossible — every time she closed her eyes, she pictured the turquoise water and white sand." — Viser begeistring gjennom handlinger og tanker.',
          },
        ],
        hints: [
          'Bruk kroppsspråk og fysiske handlinger',
          'Legg til sanseinntrykk (hva ser, hører, kjenner personen?)',
          'Bruk spesifikke detaljer istedenfor generelle beskrivelser',
        ],
        solution: 'Show, don\'t tell er et av de viktigste prinsippene i kreativ skriving. Det gjør teksten levende og lar leseren oppleve historien istedenfor å bli fortalt om den.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST: FORMAL LETTER OG SPEECH ==========
    {
      id: 'engelsk-10-1-text-formal',
      type: 'text',
      content: `## Formal Letter og Speech

### The Formal Letter (Formelt brev)

Et formelt brev brukes når du skriver til noen du ikke kjenner personlig, for eksempel en bedrift, en organisasjon eller en myndighet. Det har en svært streng oppbygging:

**Oppbygging:**
1. **Avsenderens adresse** (øverst til høyre)
2. **Dato** (under avsenderens adresse)
3. **Mottakerens adresse** (til venstre)
4. **Hilsen:** "Dear Sir/Madam" (hvis du ikke vet navnet) eller "Dear Mr/Mrs [Etternavn]"
5. **Innledning:** Forklar hvorfor du skriver
6. **Hoveddel:** Utdyp saken med argumenter og eksempler
7. **Avslutning:** Oppsummer og si hva du forventer
8. **Sluttfrase:** "Yours faithfully" (Dear Sir/Madam) eller "Yours sincerely" (Dear Mr/Mrs ...)
9. **Signatur og navn**

### The Speech (Tale)

En tale er en tekst som skal fremføres muntlig for et publikum. Den bruker retoriske virkemidler for å overbevise, inspirere eller informere.

**Retoriske virkemidler:**
- **Repetition** — Gjenta nøkkelfraser for effekt: "We can do better. We must do better. We will do better."
- **Rhetorical questions** — Spørsmål du ikke forventer svar på: "Are we really willing to stand by and do nothing?"
- **Rule of three** — Tre ting i en liste: "Education, determination, and compassion"
- **Personal anecdotes** — Del personlige historier for å skape tilknytning
- **Direct address** — Snakk direkte til publikum: "You, sitting here today..."
- **Emotive language** — Ord som vekker følelser: "innocent children", "devastating loss"`,
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-1-ex-6',
        number: '1.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvordan avslutter du et formelt brev der du har skrevet "Dear Sir/Madam" i hilsenen?',
        options: [
          {
            id: 'a',
            text: 'Yours faithfully',
            isCorrect: true,
            feedback: 'Riktig! "Yours faithfully" brukes når du ikke vet mottakerens navn (Dear Sir/Madam).',
          },
          {
            id: 'b',
            text: 'Yours sincerely',
            isCorrect: false,
            feedback: 'Feil. "Yours sincerely" brukes når du kjenner mottakerens navn (Dear Mr Smith).',
          },
          {
            id: 'c',
            text: 'Best regards',
            isCorrect: false,
            feedback: 'Feil. "Best regards" er semi-formelt og brukes i e-poster, men ikke i et tradisjonelt formelt brev.',
          },
          {
            id: 'd',
            text: 'See you later',
            isCorrect: false,
            feedback: 'Feil. Dette er altfor uformelt for et formelt brev.',
          },
        ],
        solution: '"Yours faithfully" brukes med "Dear Sir/Madam" (ukjent mottaker). "Yours sincerely" brukes med "Dear Mr/Mrs [navn]" (kjent mottaker). Husk: Faithfully = Fremmed, Sincerely = Spesifikk.',
      },
    },

    // ========== EKSEMPEL: MODELL-TEKSTER ==========
    {
      id: 'engelsk-10-1-example-3',
      type: 'example',
      title: 'Eksempel: Åpningen av en tale',
      problem: `Skriv de første 100 ordene av en tale til skoleforsamlingen om viktigheten av mental helse blant ungdom.`,
      solution: `**Modell-åpning:**

"Good morning, everyone. I want you to close your eyes for a moment. Think about the last time you asked a friend, 'How are you?' Now think about this: did you actually wait for the answer? In a world where we share everything online — our meals, our holidays, our perfectly filtered lives — we have somehow become experts at hiding the one thing that matters most: how we truly feel.

Today, I want to talk about something that affects every single person in this room. Mental health. It is not a weakness. It is not something to be whispered about in the corridors. It is as real and as important as a broken arm — and it deserves the same care."

**Analyse av retoriske virkemidler:**
- **Direct address:** "I want you to close your eyes" — involverer publikum aktivt
- **Rhetorical question:** "Did you actually wait for the answer?" — får tilhørerne til å tenke
- **Contrast:** "share everything online" vs. "hiding... how we truly feel"
- **Rule of three:** "It is not a weakness. It is not something to be whispered about. It is as real..."
- **Comparison:** Mental helse sammenlignes med et brukket bein — gjør abstrakt tema konkret`,
    },

    // ========== OPPGAVE 7 ==========
    {
      id: 'engelsk-10-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-1-ex-7',
        number: '1.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser de retoriske virkemidlene i disse utdragene fra kjente taler.',
        subTasks: [
          {
            label: 'a',
            task: '"I have a dream that one day this nation will rise up and live out the true meaning of its creed." (Martin Luther King Jr.)',
            solution: 'Repetition ("I have a dream"), metaphor ("rise up"), allusion (til Uavhengighetserklæringen). Repetisjon av "I have a dream" skaper rytme og forsterker budskapet.',
          },
          {
            label: 'b',
            task: '"Ask not what your country can do for you — ask what you can do for your country." (John F. Kennedy)',
            solution: 'Antithesis (motsatte setninger i parallell struktur), chiasmus (ordene gjentas i omvendt rekkefølge). Denne teknikken gjør setningen minneverdig.',
          },
          {
            label: 'c',
            task: '"We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets." (Winston Churchill)',
            solution: 'Anaphora (repetisjon av "we shall fight" i starten av hver leddsetning), rule of three, listing. Skaper en følelse av besluttsomhet og styrke.',
          },
        ],
        solution: 'Retoriske virkemidler gjør taler kraftfulle og minneverdige. De beste talene bruker flere virkemidler sammen for å bygge opp et budskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST: PLANLEGGING OG REVISJON ==========
    {
      id: 'engelsk-10-1-text-planning',
      type: 'text',
      content: `## Planlegging og revisjon — Nøkkelen til en god eksamenstekst

Mange elever gjør feilen å begynne å skrive med én gang. De beste tekstene starter alltid med en plan.

### Steg 1: Les oppgaven nøye (5 minutter)
- Hva er **teksttypen**? (essay, article, short story, etc.)
- Hva er **temaet**?
- Hvem er **mottakeren**?
- Er det noen **krav** til innhold eller lengde?

### Steg 2: Brainstorming (10 minutter)
- Skriv ned alle ideer uten å sensurere deg selv
- Bruk mindmap, lister eller fri assosiasjon
- Tenk på: argumenter, eksempler, personlige erfaringer

### Steg 3: Lag en disposisjon (10 minutter)
- Velg de 3-4 beste ideene fra brainstormingen
- Organiser dem i logisk rekkefølge
- Bestem åpning og avslutning

### Steg 4: Skriv førsteutkast (hovedtiden)
- Følg disposisjonen, men vær fleksibel
- Ikke stopp for å perfeksjonere — skriv ferdig først
- Bruk overgangsfaser mellom avsnitt

### Steg 5: Revisjon (15-20 minutter)
Bruk denne **sjekklisten** når du leser gjennom:
- **Struktur:** Har teksten tydelig innledning, hoveddel og avslutning?
- **Innhold:** Er argumentene relevante og godt begrunnet?
- **Språk:** Har du variert ordforråd? Unngår du gjentakelser?
- **Grammatikk:** Subject-verb agreement, riktig tempus, artikler?
- **Flyt:** Bruker du overgangsfaser? Henger avsnittene sammen?
- **Stavemåte:** Sjekk vanskelige ord du er usikker på`,
    },

    // ========== NOTE: VANLIGE FEIL ==========
    {
      id: 'engelsk-10-1-note-errors',
      type: 'note',
      title: 'Vanlige grammatikkfeil norske elever gjør på engelsk',
      content: `Pass spesielt på disse feilene som er typiske for norsktalende:

**1. Subject-verb agreement:**
- Feil: "He don't like it." / Riktig: "He doesn't like it."
- Feil: "The students was tired." / Riktig: "The students were tired."

**2. Artikler (a, an, the):**
- Feil: "I like the nature." / Riktig: "I like nature."
- Feil: "She is doctor." / Riktig: "She is a doctor."

**3. Direkte oversettelse fra norsk:**
- Feil: "I use to play football" (fra "pleier å") / Riktig: "I usually play football"
- Feil: "It was very fun" / Riktig: "It was a lot of fun" eller "It was great fun"

**4. Preposisjoner:**
- Feil: "I'm interested on..." / Riktig: "I'm interested in..."
- Feil: "I'm good in English." / Riktig: "I'm good at English."

**5. Tempus-feil:**
- Feil: "Yesterday I have seen a movie." / Riktig: "Yesterday I saw a movie."
- Bruk simple past for spesifikke tidspunkt, present perfect for ubestemt tid`,
    },

    // ========== OPPGAVE 8 ==========
    {
      id: 'engelsk-10-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-1-ex-8',
        number: '1.8',
        type: 'classic',
        difficulty: 'lett',
        task: 'Rett feilene i disse setningene. Hver setning har minst én grammatikkfeil.',
        subTasks: [
          {
            label: 'a',
            task: '"The students in my class is very good in English."',
            solution: '"The students in my class are very good at English." (is → are for flertall, in → at med "good")',
          },
          {
            label: 'b',
            task: '"Yesterday I have been to the cinema with my friends."',
            solution: '"Yesterday I went to the cinema with my friends." (have been → went, fordi "yesterday" krever simple past)',
          },
          {
            label: 'c',
            task: '"She said me that she don\'t like the nature."',
            solution: '"She told me that she doesn\'t like nature." (said me → told me, don\'t → doesn\'t for 3. person, the nature → nature)',
          },
          {
            label: 'd',
            task: '"I use to go to school by the bus every day."',
            solution: '"I usually go to school by bus every day." (use to → usually for vane, the bus → bus etter "by")',
          },
        ],
        solution: 'Bevissthet om typiske feil hjelper deg å unngå dem. Les alltid gjennom teksten din og se spesielt etter disse feilkategoriene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-1-summary',
      type: 'text',
      content: `## Oppsummering: Dine verktøy for skriftlig eksamen

I dette kapittelet har du lært om de fem viktigste teksttypene på eksamen:

| Teksttype | Nøkkelkjennetegn | Viktigste element |
|-----------|-------------------|-------------------|
| **Essay** | Argumenterende, PEEL-struktur | Thesis statement |
| **Article** | Informativ, fengende headline | Lead paragraph (5 W) |
| **Short story** | Kreativ, litterære virkemidler | Show, don't tell |
| **Formal letter** | Streng format, formelt språk | Riktig hilsen og avslutning |
| **Speech** | Retoriske virkemidler, direkte henvendelse | Engasjere publikum |

**De viktigste rådene for eksamensdagen:**
1. Bruk tid på planlegging — det lønner seg
2. Velg den teksttypen du føler deg tryggest på
3. Bruk varierte overgangsfaser for flyt
4. "Show, don't tell" i kreative tekster
5. Sett av tid til revisjon og korrekturlesing
6. Pass på typiske grammatikkfeil (artikler, preposisjoner, tempus)`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-1-ex-9',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-1-ex-9',
        number: '1.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort artikkel (200-250 ord) for skoleavisa om et tema du brenner for. Følg artikkelstrukturen nøye.',
        hints: [
          'Lag en fengende headline',
          'Start med en lead paragraph som svarer på minst 3 av de 5 W-ene',
          'Inkluder minst ett "sitat" fra en relevant person (kan være fiktivt)',
          'Avslutt med en tankevekkende refleksjon eller oppfordring',
          'Bruk minst tre ulike overgangsfaser',
        ],
        solution: 'Artikkelen vurderes etter: Headline (fengende?), Lead paragraph (5 W?), Struktur (tydelige avsnitt?), Språk (variert og korrekt?), Innhold (engasjerende og informativt?), og Avslutning (minneverdig?).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-1-ex-10',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-1-ex-10',
        number: '1.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Planlegg og skriv et essay (350-450 ord) om ett av disse temaene:',
        subTasks: [
          {
            label: 'a',
            task: '"Technology: Friend or Foe?" — Drøft hvordan teknologi påvirker hverdagen vår, med argumenter for og mot.',
            solution: 'Et godt essay om dette temaet bør diskutere kommunikasjon, utdanning, helse, personvern og avhengighet. Ha en tydelig thesis som tar et standpunkt.',
          },
          {
            label: 'b',
            task: '"Why representation matters in media" — Argumenter for hvorfor det er viktig med mangfold i film, TV og litteratur.',
            solution: 'Trekk inn eksempler fra konkrete filmer/serier, diskuter effekten på selvbilde og stereotypier, og vis til forskning om representasjon.',
          },
        ],
        hints: [
          'Start med 10 minutters brainstorming',
          'Lag en disposisjon med thesis, 3 hovedargumenter og avslutning',
          'Bruk PEEL-strukturen i hvert avsnitt',
          'Inkluder minst ett motargument du imøtegår',
          'Bruk varierte overgangsfaser mellom avsnitt',
        ],
        solution: 'Essayet vurderes etter: Thesis statement (tydelig?), Argumentasjon (PEEL?), Struktur (innledning, hoveddel, avslutning?), Språk (variert, korrekt?), Overganger (flyt mellom avsnitt?), og Avslutning (oppsummerer og gir sluttpoeng?).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 3 ==========
    {
      id: 'engelsk-10-1-ex-11',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-1-ex-11',
        number: '1.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv begynnelsen av en short story (200-250 ord) basert på denne åpningssetningen: "The last message on her phone changed everything."',
        hints: [
          'Bruk "show, don\'t tell" — vis følelser gjennom handlinger og sanseinntrykk',
          'Etabler setting (hvor og når er vi?)',
          'Introduser hovedkarakteren gjennom detaljer, ikke beskrivelser',
          'Bruk minst to litterære virkemidler (imagery, metaphor, simile, etc.)',
          'Avslutt utdraget med noe som skaper spenning (cliffhanger)',
        ],
        solution: 'Novelle-åpningen vurderes etter: Bruk av "show, don\'t tell", Spenningsoppbygging, Litterære virkemidler, Karakterskildring, Sanseinntrykk, og Språklig kvalitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: Exam Preparation - Oral
// ============================================================================

export const CHAPTER_ENGELSK_10_2: TextbookChapter = {
  id: 'engelsk-10-2',
  courseId: 'engelsk-10',
  chapterNumber: '2',
  title: 'Exam Preparation - Oral',
  description: 'Forbered deg grundig til muntlig eksamen med presentasjonsteknikk, samtaleferdigheter og strategier for spontane spørsmål.',
  estimatedMinutes: 80,
  competenceGoals: [
    'uttrykke seg med flyt og sammenheng tilpasset formål og situasjon',
    'delta i spontane samtaler om ulike emner og uttrykke og begrunne egne meninger',
    'bruke varierte språklige virkemidler i muntlig kommunikasjon',
    'tilpasse språket til ulike kommunikasjonssituasjoner',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-2-intro',
      type: 'text',
      content: `## Preparing for the Oral Exam

Den muntlige eksamenen i engelsk er mange elevers største utfordring — men også den eksamenen der du virkelig kan skinne og vise hvem du er som engelskbruker.

Eksamen består vanligvis av to hoveddeler:

**Del 1: Presentation (ca. 10 minutter)**
Du presenterer et tema du har forberedt på forhånd. Forberedelsestiden er vanligvis 48 timer (2 dager) der du får vite temaet.

**Del 2: Conversation (ca. 15-20 minutter)**
En samtale med sensor(ene) om ulike emner. Denne delen tester evnen din til å snakke spontant, uttrykke meninger og reflektere over temaer.

**Hva sensor vurderer:**
- **Kommunikasjon:** Kan du formidle budskapet ditt klart?
- **Språk:** Har du variert ordforråd og korrekt grammatikk?
- **Innhold:** Viser du kunnskap og evne til refleksjon?
- **Flyt:** Snakker du sammenhengende, uten for mange pauser?
- **Interaksjon:** Kan du delta i en naturlig samtale?

Den gode nyheten: Alt dette kan trenes!`,
    },

    // ========== DEFINISJON: PRESENTASJONSSTRUKTUR ==========
    {
      id: 'engelsk-10-2-def-1',
      type: 'definition',
      title: 'Presentation Structure — Den gode presentasjonen',
      content: `En velstrukturert presentasjon følger en klar oppbygging som gjør det lett for tilhørerne å følge med.

**1. Introduction (Innledning — ca. 1-2 minutter)**
- **Greeting:** "Good morning. My name is..."
- **Hook:** Start med noe som fanger oppmerksomheten (spørsmål, sitat, faktum, bilde)
- **Topic:** "Today I'm going to talk about..."
- **Outline:** "I will cover three main areas: First... Second... Finally..."

**2. Main Body (Hoveddel — ca. 6-7 minutter)**
- Del inn i **3-4 tydelige seksjoner**
- Bruk **signposting** for å guide tilhørerne:
  - "Let's start with..." / "Moving on to..." / "Another important aspect is..."
- Hvert punkt bør ha: **Påstand → Bevis/eksempel → Forklaring**
- Bruk **konkrete eksempler** og **personlige koblinger**
- Varier mellom fakta, historier og refleksjon

**3. Conclusion (Avslutning — ca. 1-2 minutter)**
- **Signal:** "To sum up..." / "In conclusion..."
- **Gjenta** hovedpunktene kort
- **Avslutt med impact:** Et sitat, et spørsmål til publikum, eller en personlig refleksjon
- **Takk:** "Thank you for listening. I'm happy to answer any questions."

**Viktig om notater:**
- Bruk **stikkord**, IKKE fullstendige setninger
- Skriv på kartotekkort eller én A4-side
- Ha øyekontakt med sensor — ikke les fra arket`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-2-ex-1',
        number: '2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er "signposting" i en presentasjon?',
        options: [
          {
            id: 'a',
            text: 'Å bruke overgangsfaser som veileder tilhørerne gjennom presentasjonen',
            isCorrect: true,
            feedback: 'Riktig! Signposting er som veiskilt som forteller tilhørerne hvor du er i presentasjonen og hvor du skal neste.',
          },
          {
            id: 'b',
            text: 'Å holde opp skilt med tekst under presentasjonen',
            isCorrect: false,
            feedback: 'Feil. Signposting er et begrep for verbale overganger, ikke fysiske skilt.',
          },
          {
            id: 'c',
            text: 'Å skrive hele presentasjonen på et papir og lese fra det',
            isCorrect: false,
            feedback: 'Feil. Å lese fra et manus er det motsatte av god presentasjonsteknikk. Signposting er muntlige veivisere.',
          },
          {
            id: 'd',
            text: 'Å lage en PowerPoint-presentasjon med mye tekst',
            isCorrect: false,
            feedback: 'Feil. Signposting handler om hva du sier, ikke hva som står på slides.',
          },
        ],
        solution: 'Signposting er verbale veivisere som hjelper tilhørerne å følge strukturen din. Eksempler: "Moving on to...", "My second point is...", "To conclude...".',
      },
    },

    // ========== DEFINISJON: SAMTALEFERDIGHETER ==========
    {
      id: 'engelsk-10-2-def-2',
      type: 'definition',
      title: 'Discussion Skills — Fraser for samtale og diskusjon',
      content: `Samtalen med sensor er minst like viktig som presentasjonen. Her er de viktigste frasene du trenger:

**Gi din mening (Giving opinions):**
- In my opinion... / I believe that... / From my point of view...
- Personally, I think... / As I see it... / It seems to me that...
- I'm convinced that... / I would argue that...

**Være enig (Agreeing):**
- I completely agree. / That's a good point. / Exactly!
- I couldn't agree more. / You make a valid point.

**Være uenig — høflig (Disagreeing politely):**
- I see your point, but... / I understand what you mean, however...
- I'm not sure I agree entirely because...
- That's an interesting perspective, but I would argue that...
- With all due respect, I think...

**Be om avklaring (Asking for clarification):**
- Could you explain what you mean by...?
- Sorry, I didn't quite catch that. Could you rephrase?
- Do you mean that...? / Are you saying that...?

**Vinne tid til å tenke (Buying time):**
- That's a really interesting question. Let me think about that for a moment...
- Well, it depends on how you look at it...
- That's a complex issue. I think...

**Utdype et poeng (Elaborating):**
- What I mean by that is... / To put it another way...
- Let me give you an example... / For instance...
- To clarify, I think...`,
    },

    // ========== EKSEMPEL: SPONTANE SPØRSMÅL ==========
    {
      id: 'engelsk-10-2-example-1',
      type: 'example',
      title: 'Eksempel: Strategier for spontane spørsmål',
      problem: `Hvordan håndterer du et spørsmål du ikke vet svaret på under eksamen?`,
      solution: `**Situasjon:** Sensor spør: "What do you think about the impact of artificial intelligence on employment in the next decade?"

**Dårlig respons:**
"I don't know." (stopper samtalen helt)

**Middels respons:**
"I think AI will change things." (for vag, viser lite refleksjon)

**God respons:**
"That's a really thought-provoking question. I haven't studied AI in great detail, but from what I've read and seen in the news, I think it's going to be a double-edged sword. On the one hand, AI will probably automate many routine jobs, especially in manufacturing and data processing. On the other hand, it could also create entirely new types of jobs that we can't even imagine yet. Historically, technology has always changed the job market rather than simply destroying it. What concerns me most, though, is whether the transition will be fair — will the people who lose their jobs get the training they need for the new ones?"

**Hvorfor dette fungerer:**
1. **Anerkjenner spørsmålet** ("thought-provoking question")
2. **Er ærlig** om begrensninger ("haven't studied in great detail")
3. **Viser refleksjon** ved å diskutere flere sider
4. **Bruker strukturfrase** ("On the one hand... On the other hand...")
5. **Kobler til eksisterende kunnskap** (historisk perspektiv)
6. **Avslutter med en egen refleksjon** (rettferdighet i overgangen)
7. **Total lengde:** Ca. 30 sekunder — nok til å vise dybde uten å ramble`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-2-ex-2',
        number: '2.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Velg riktig frase for situasjonen.',
        subTasks: [
          {
            label: 'a',
            task: 'Du vil si deg delvis enig med sensor, men har et annet perspektiv.',
            solution: '"I see your point, but..." / "I understand what you mean, however..."',
            multipleChoiceOptions: ['I see your point, but...', 'I completely agree', 'That\'s wrong', 'Moving on to...'],
          },
          {
            label: 'b',
            task: 'Du trenger litt tid til å formulere svaret ditt.',
            solution: '"That\'s a really interesting question. Let me think about that for a moment..."',
            multipleChoiceOptions: ['That\'s an interesting question. Let me think...', 'I don\'t know', 'First of all...', 'Any questions?'],
          },
          {
            label: 'c',
            task: 'Du vil gi et eksempel for å illustrere poenget ditt.',
            solution: '"Let me give you an example..." / "For instance..."',
            multipleChoiceOptions: ['Let me give you an example...', 'In my opinion...', 'I completely agree', 'To conclude...'],
          },
          {
            label: 'd',
            task: 'Du forsto ikke spørsmålet sensor stilte.',
            solution: '"Could you rephrase that?" / "Sorry, I didn\'t quite catch that."',
            multipleChoiceOptions: ['Could you rephrase that?', 'That\'s interesting', 'I agree', 'In conclusion...'],
          },
        ],
        solution: 'a) "I see your point, but...", b) "That\'s an interesting question...", c) "Let me give you an example...", d) "Could you rephrase that?" Det er helt akseptabelt å be om avklaring — det viser kommunikasjonskompetanse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: KROPPSSPRÅK ==========
    {
      id: 'engelsk-10-2-def-3',
      type: 'definition',
      title: 'Body Language and Delivery — Kroppsspråk og fremføring',
      content: `Forskning viser at opptil **55% av kommunikasjon** er ikke-verbal. Hvordan du presenterer deg er minst like viktig som hva du sier.

**Øyekontakt:**
- Se på sensor(ene), ikke på gulvet eller taket
- Veksle blikket mellom sensorene hvis det er flere
- Det er OK å se på notatene innimellom, men ikke les fra dem

**Stemmebruk:**
- **Volum:** Snakk høyt nok til at alle hører — men ikke rop
- **Tempo:** Snakk rolig og tydelig. Nervøsitet gjør at mange snakker for fort
- **Pauser:** Bruk pauser med vilje — de gir tilhørerne tid til å fordøye informasjonen
- **Intonasjon:** Varier tonefall for å unngå monoton fremføring

**Kroppsholdning:**
- Stå rett (eller sitt rett) — det utstråler selvtillit
- Bruk hendene naturlig for å understreke poenger
- Unngå å krysse armene (lukket kroppsspråk)
- Unngå å fikle med penn, hår eller klær

**Nervøsitet:**
- Det er helt normalt å være nervøs — sensor vet dette
- Ta noen dype åndedrag før du starter
- Husk: Du kan materialet ditt. Stol på forberedelsene dine
- Hvis du mister tråden — ta en pause, se på stikkordene, og fortsett`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-2-ex-3',
        number: '2.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av disse er den BESTE strategien hvis du mister tråden midt i presentasjonen?',
        options: [
          {
            id: 'a',
            text: 'Ta en kort pause, se på stikkordene dine, og fortsett med neste punkt',
            isCorrect: true,
            feedback: 'Riktig! En kort pause er helt naturlig og viser at du takler situasjonen med ro. Sensor forstår dette.',
          },
          {
            id: 'b',
            text: 'Si "Beklager, jeg husker ikke" og stopp presentasjonen',
            isCorrect: false,
            feedback: 'Feil. Å gi opp er aldri en god strategi. Bruk stikkordene dine og gå videre til neste punkt.',
          },
          {
            id: 'c',
            text: 'Snakke veldig fort for å komme forbi den delen du ikke husker',
            isCorrect: false,
            feedback: 'Feil. Å snakke fort gjør det vanskelig for sensor å følge med og viser nervøsitet. Rolige pauser er bedre.',
          },
          {
            id: 'd',
            text: 'Begynne hele presentasjonen på nytt fra starten',
            isCorrect: false,
            feedback: 'Feil. Å starte på nytt er tidskrevende og unødvendig. Hopp heller til neste punkt og gå videre.',
          },
        ],
        solution: 'Den beste strategien er å ta en kort, rolig pause, sjekke stikkordene, og fortsette. Pauser er naturlige — sensor dømmer deg ikke for dem.',
      },
    },

    // ========== TEKST: VANLIGE EKSAMENSEMNER ==========
    {
      id: 'engelsk-10-2-text-topics',
      type: 'text',
      content: `## Vanlige temaer på muntlig eksamen

Her er en oversikt over temaer som ofte dukker opp på muntlig eksamen, med eksempler på spørsmål sensor kan stille:

### Identitet og mangfold
- What does identity mean to you?
- How has growing up in Norway shaped who you are?
- What role does language play in identity?

### Engelskspråklige land og kulturer
- Compare life in the UK and the USA — what are the main differences?
- How has colonialism shaped the English-speaking world?
- What do you know about indigenous cultures in Australia or Canada?

### Teknologi og samfunn
- How has social media changed the way young people communicate?
- What are the ethical concerns around artificial intelligence?
- Should schools ban smartphones?

### Globale utfordringer
- What can young people do about climate change?
- Why is poverty still a global issue?
- How does migration affect societies?

### Litteratur og kultur
- Discuss a book or film you've read/seen in English class
- What makes a good story? What literary devices are used?
- Why is it important to read literature from different cultures?

### Menneskerettigheter
- Why are human rights important?
- Can you give examples of human rights being violated today?
- What is the difference between equality and equity?`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-2-ex-4',
        number: '2.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Øv på å svare på disse vanlige eksamensemnene. Skriv et kort svar (4-6 setninger) på hvert spørsmål.',
        subTasks: [
          {
            label: 'a',
            task: 'What do you think is the biggest challenge facing young people today? Explain your answer.',
            solution: 'Et godt svar bør: 1) Navngi en utfordring, 2) Forklare hvorfor den er viktig, 3) Gi et konkret eksempel, 4) Vise personlig refleksjon. Eksempel: "I believe the biggest challenge is the pressure to perform — both academically and socially. Social media creates unrealistic expectations, and many teenagers feel they need to be perfect in everything they do..."',
          },
          {
            label: 'b',
            task: 'How has technology changed the way we communicate? Discuss both positive and negative effects.',
            solution: 'Et godt svar bør diskutere begge sider. Positivt: global kommunikasjon, umiddelbar kontakt. Negativt: overfladiske relasjoner, avhengighet, misforståelser i tekstkommunikasjon.',
          },
          {
            label: 'c',
            task: 'Why is it important to learn about different cultures? Give examples from your own experience.',
            solution: 'Et godt svar kobler kulturforståelse til empati, samarbeid og globalt medborgerskap. Bruk personlige eksempler fra reiser, medier, eller møter med mennesker fra andre kulturer.',
          },
        ],
        hints: [
          'Bruk strukturen: Mening → Begrunnelse → Eksempel → Refleksjon',
          'Start med en "opinion phrase": "I believe that..." / "In my view..."',
          'Avslutt med en tanke som viser dybde',
        ],
        solution: 'Gode muntlige svar er strukturerte (mening + begrunnelse + eksempel), personlige (dine egne erfaringer) og reflekterte (viser at du tenker kritisk).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL: PRESENTASJON MED STIKKORD ==========
    {
      id: 'engelsk-10-2-example-2',
      type: 'example',
      title: 'Eksempel: Fra stikkord til presentasjon',
      problem: `Her er et kartotekkort med stikkord for en presentasjon om "The Impact of Social Media on Teenagers". Hvordan ville du utforme presentasjonen basert på disse stikkordene?`,
      solution: `**Stikkord på kortet:**
- Hook: stat — 3+ hrs/day
- Thesis: double-edged sword
- Section 1: POSITIVE — connection, creativity, awareness
- Section 2: NEGATIVE — mental health, cyberbullying, FOMO
- Section 3: SOLUTIONS — education, limits, awareness
- Conclusion: balance, personal choice

**Slik kan dette bli til en presentasjon:**

**Intro:** "Did you know that the average Norwegian teenager spends over three hours a day on social media? That's more than 1,000 hours a year — the equivalent of sitting in a classroom for an entire school year. Today, I want to explore how this technology is affecting our generation, because I believe social media is a double-edged sword."

**Section 1:** "Let's start with the positive side. Social media helps us stay connected with friends and family across the world. Platforms like YouTube and TikTok allow teenagers to express their creativity and even build careers. Additionally, social media has been instrumental in raising awareness about important issues like climate change and mental health."

**Section 2:** "However, there's a darker side. Studies show a strong link between heavy social media use and increased rates of anxiety and depression among teenagers. Cyberbullying has become a serious problem..."

**Legg merke til:**
- Stikkordene er korte, men presentasjonen er utfyllende
- Hvert stikkord blir til 2-3 fulle setninger
- Overgangsfaser binder seksjonene sammen
- Statistikk og konkrete eksempler gjør det levende`,
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-2-ex-5',
        number: '2.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en stikkordsliste (maks 10 stikkord) for en 5-minutters presentasjon om ETT av disse temaene.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv stikkordene for temaet "My favourite book/film and why I recommend it".',
            solution: 'Eksempel på stikkord: Hook (quote from book) — Title/Author — Genre/Setting — Main character — Plot (kort) — Theme — Favourite scene — Why it matters — Personal connection — Recommendation',
          },
          {
            label: 'b',
            task: 'Skriv stikkordene for temaet "Should voting age be lowered to 16?".',
            solution: 'Eksempel: Hook (16-year-olds can work, pay tax) — Thesis (yes/no) — ARG 1 (maturity/engagement) — ARG 2 (representation) — COUNTER (brain development) — Examples (other countries) — Conclusion (democracy)',
          },
        ],
        hints: [
          'Ikke skriv hele setninger — bare nøkkelord',
          'Inkluder en hook og en avslutning',
          'Ha 3 hovedpunkter i hoveddelen',
          'Tenk på hva som gjør dette interessant for tilhørerne',
        ],
        solution: 'Gode stikkord er korte (1-3 ord per punkt), logisk organisert, og gir deg nok å snakke om uten å bli avhengig av manus.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST: UTTALE OG INTONASJON ==========
    {
      id: 'engelsk-10-2-text-pronunciation',
      type: 'text',
      content: `## Pronunciation and Intonation — Uttale og intonasjon

God uttale handler ikke om å snakke "perfekt britisk" eller "perfekt amerikansk" — det handler om å bli forstått. Her er de vanligste uttaleutfordringene for norske elever:

### Vanskelige lyder

**"th"-lydene** (de vanligste feilene)
- **Voiced "th"** (/ð/): "the", "this", "that", "weather" — tungens spiss mellom tennene, med stemme
- **Voiceless "th"** (/θ/): "think", "three", "through" — tungens spiss mellom tennene, uten stemme
- **Vanlig norsk feil:** Erstatte med "d" eller "t" → "da" istedenfor "the", "tink" istedenfor "think"

**"W" vs. "V"**
- "W" = runde leppene: "water", "world", "would"
- "V" = tennene mot underleppen: "very", "voice", "village"
- **Vanlig norsk feil:** Si "v" når det skal være "w" → "vorld" istedenfor "world"

**Stille bokstaver**
- "k" i "knife", "know", "knee"
- "w" i "write", "wrong", "wrap"
- "b" i "climb", "comb", "doubt"
- "t" i "listen", "castle", "often" (varierer)

### Intonasjon

Intonasjon handler om hvordan stemmen din stiger og synker. Det påvirker meningen:
- **Falling intonation** ↘ : Påstander og avgjorte spørsmål ("I think it's important. ↘")
- **Rising intonation** ↗ : Ja/nei-spørsmål og usikkerhet ("Do you agree? ↗")
- **Fall-rise** ↘↗ : Innrømmelse eller kontrast ("It's true... ↘↗ but I disagree.")`,
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-2-ex-6',
        number: '2.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les denne teksten høyt og ta opp deg selv (bruk telefonen). Lytt etter tydelig uttale, naturlig flyt og riktig intonasjon.',
        hints: [
          'Pass spesielt på: "th"-lyder, "w/v"-forskjellen',
          'Bruk pauser ved komma og punktum',
          'Varier intonasjonen — ikke vær monoton',
          'Tempo: Rolig og tydelig, ikke for fort',
        ],
        solution: `Tekst å lese: "Throughout history, the world has witnessed remarkable changes driven by three powerful forces: technology, education, and the will of ordinary people. Think about this: just thirty years ago, most people had never heard of the internet. Now, we carry the world's knowledge in our pockets. Whether this transformation will ultimately benefit or harm humanity depends on the choices we make today. The question is not whether change is coming — it is whether we are ready for it."

**Fokusord:** throughout (th), world (w), witnessed (w), three (th), thirty (th), think (th), whether (wh + th), this (th)`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 7 ==========
    {
      id: 'engelsk-10-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-2-ex-7',
        number: '2.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Diskusjonsøvelse: Velg ETT av disse temaene og skriv en minisamtale (6-8 replikker) mellom en elev og en sensor.',
        subTasks: [
          {
            label: 'a',
            task: 'Tema: "Should schools have uniforms?"',
            solution: 'Samtalen bør inkludere: meningsutveksling, høflig uenighet, eksempler, og oppfølgingsspørsmål fra begge sider.',
          },
          {
            label: 'b',
            task: 'Tema: "Is it important to travel to understand other cultures?"',
            solution: 'Samtalen bør vise: evne til å reflektere, bruk av personlige erfaringer, balansert diskusjon av flere perspektiver.',
          },
        ],
        hints: [
          'La eleven bruke minst 3 ulike samtalefaser (opinion, agree, disagree, etc.)',
          'La sensor stille oppfølgingsspørsmål',
          'Vis at eleven kan utdype poengene sine med eksempler',
        ],
        solution: 'En god diskusjon viser at du kan: gi meninger, begrunne dem, lytte til andre perspektiver, og svare på oppfølgingsspørsmål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-2-summary',
      type: 'text',
      content: `## Oppsummering: Din sjekkliste for muntlig eksamen

### Før eksamen:
- [ ] Lag en klar struktur med innledning, hoveddel (3-4 punkter) og avslutning
- [ ] Skriv stikkord, ikke fullstendig manus
- [ ] Øv på presentasjonen foran speilet, venner eller familie — minst 3 ganger
- [ ] Ta tiden — pass på at du holder deg innenfor tidsrammen
- [ ] Øv på vanlige oppfølgingsspørsmål

### Under presentasjonen:
- [ ] Start med en hook som fanger oppmerksomheten
- [ ] Bruk signposting: "First...", "Moving on...", "To conclude..."
- [ ] Ha øyekontakt med sensor — ikke les fra arket
- [ ] Snakk rolig og tydelig — pauser er OK
- [ ] Avslutt med impact — sitat, spørsmål eller refleksjon

### Under samtalen:
- [ ] Lytt nøye til spørsmålet før du svarer
- [ ] Bruk samtalefaser: "In my opinion...", "I see your point, but..."
- [ ] Gi eksempler og personlige erfaringer
- [ ] Det er OK å tenke — "That's an interesting question..."
- [ ] Be om avklaring hvis du ikke forstår — "Could you rephrase that?"

**Husk:** Sensor ØNSKER at du skal lykkes. De ser etter hva du KAN, ikke hva du IKKE kan.`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-2-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-2-ex-8',
        number: '2.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forbered og hold en 5-minutters presentasjon om temaet "A person who has inspired me". Ta opp deg selv og vurder etterpå.',
        hints: [
          'Lag stikkordskort (maks 5 kort med 3-4 stikkord per kort)',
          'Forklar HVORFOR denne personen inspirerer deg — bruk personlige eksempler',
          'Bruk signposting mellom seksjonene',
          'Avslutt med en refleksjon: Hva har du lært av denne personen?',
          'Etter opptak: Vurder øyekontakt, tempo, variasjon i stemmebruk, og bruk av samtalefaser',
        ],
        solution: 'En god presentasjon om inspirasjon bør være personlig, strukturert og engasjerende. Sensor ser etter: klar struktur, variert språk, personlig tilknytning, og god fremføring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-2-ex-9',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-2-ex-9',
        number: '2.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Rollespill med en medelev: En spiller sensor, en spiller elev. Sensor stiller disse spørsmålene, og eleven svarer spontant (uten forberedelse). Bytt roller etterpå.',
        subTasks: [
          {
            label: 'a',
            task: 'Sensor spør: "Can you compare the education system in Norway with what you know about the American system?"',
            solution: 'Eleven bør diskutere: gratis vs. betalt utdanning, karakterer, skoledager, fritidsaktiviteter, mobbing, skolekultur.',
          },
          {
            label: 'b',
            task: 'Sensor følger opp: "Do you think the Norwegian system is better? Why or why not?"',
            solution: 'Eleven bør gi en balansert vurdering med konkrete argumenter for og mot, og vise evne til å se saken fra flere sider.',
          },
          {
            label: 'c',
            task: 'Sensor spør noe uventet: "If you could change one thing about your school, what would it be?"',
            solution: 'Eleven bør vise evne til spontan refleksjon, gi et konkret svar med begrunnelse, og gjerne relatere det til bredere temaer.',
          },
        ],
        hints: [
          'Sensor: Still oppfølgingsspørsmål basert på svarene',
          'Elev: Bruk "buying time"-fraser hvis du trenger å tenke',
          'Elev: Gi konkrete eksempler, ikke bare generelle meninger',
        ],
        solution: 'Rollespill er en av de mest effektive måtene å forberede seg til muntlig eksamen. Jo mer du øver på å snakke spontant, jo tryggere blir du.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: Literary Analysis
// ============================================================================

export const CHAPTER_ENGELSK_10_3: TextbookChapter = {
  id: 'engelsk-10-3',
  courseId: 'engelsk-10',
  chapterNumber: '3',
  title: 'Literary Analysis',
  description: 'Lær å analysere litterære tekster med fokus på virkemidler, temaer, karakterer og tolkning — fra noveller og dikt til romaner.',
  estimatedMinutes: 85,
  competenceGoals: [
    'lese, analysere og tolke engelskspråklig litteratur, inkludert ungdomslitteratur',
    'samtale om forfatterens virkemidler og tekstens tema',
    'beskrive og reflektere over sammenhenger mellom tekst og kontekst',
    'utforske og reflektere over mangfold og samfunnsforhold i engelskspråklige land gjennom litteratur',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-3-intro',
      type: 'text',
      content: `## Analysing Literature — Å lese mellom linjene

Har du noen gang lest en bok eller sett en film som fikk deg til å tenke lenge etterpå? Kanskje du lurte på hva forfatteren egentlig mente, eller hvorfor en bestemt scene berørte deg så sterkt?

Litterær analyse handler om å forstå hvordan en tekst fungerer — ikke bare **hva** den forteller, men **hvordan** og **hvorfor** den forteller det akkurat slik.

**Tre nivåer av analyse:**

| Nivå | Spørsmål | Eksempel |
|------|----------|----------|
| **Surface level** (overflaten) | Hva skjer? | "En gutt reiser hjemmefra" |
| **Deeper level** (dypere nivå) | Hvorfor skjer det? Hva betyr det? | "Reisen symboliserer overgangen fra barn til voksen" |
| **Craft level** (håndverksnivå) | Hvordan formidles det? | "Forfatteren bruker naturbeskrivelser som speiler guttens indre utvikling" |

En god analyse beveger seg mellom alle tre nivåene. Du starter med å **observere** (hva ser jeg?), deretter **tolker** du (hva betyr det?), og til slutt **vurderer** du (hvordan gjør forfatteren dette?).

**Analyseverktøyet: SMILE**
- **S**tructure — Hvordan er teksten bygd opp?
- **M**eaning — Hva er budskapet eller temaet?
- **I**magery — Hvilke bilder og sanseinntrykk brukes?
- **L**anguage — Hva slags språk og ordvalg bruker forfatteren?
- **E**ffect — Hvilken effekt har alt dette på leseren?`,
    },

    // ========== DEFINISJON: LITERARY ELEMENTS ==========
    {
      id: 'engelsk-10-3-def-1',
      type: 'definition',
      title: 'Literary Elements — De grunnleggende byggesteinene',
      content: `Alle fortellende tekster (noveller, romaner, skuespill) er bygd opp av de samme grunnelementene:

**Setting (Miljø og tid)**
- **Tid:** Når foregår handlingen? (historisk periode, årstid, tid på døgnet)
- **Sted:** Hvor foregår handlingen? (by, land, fantasiverden)
- **Atmosfære:** Hvilken stemning skaper settingen? (trygg, truende, melankolsk)
- Setting kan være **symbolsk** — en mørk skog kan representere det ukjente

**Characters (Karakterer)**
- **Protagonist:** Hovedpersonen (trenger ikke være "helten")
- **Antagonist:** Den som motarbeider protagonisten (kan være en person, samfunnet, eller naturen)
- **Dynamic character:** En karakter som endrer seg gjennom historien
- **Static character:** En karakter som forblir den samme
- **Flat character:** Enkel, med få egenskaper (ofte bikarakterer)
- **Round character:** Kompleks, med mange sider og indre konflikter

**Plot (Handling)**
- **Exposition:** Introduksjon av karakterer, setting og situasjon
- **Rising action:** Konflikten utvikler seg, spenningen øker
- **Climax:** Vendepunktet — det mest intense øyeblikket
- **Falling action:** Konsekvensene av klimaks
- **Resolution:** Avslutningen — konflikten løses (eller ikke)

**Point of View (Synsvinkel)**
- **First person** ("I") — Vi ser gjennom én karakters øyne
- **Third person limited** ("he/she") — Fortelleren følger én karakter
- **Third person omniscient** ("he/she") — Fortelleren vet alt om alle
- **Unreliable narrator** — Fortelleren kan ikke stoles på fullt ut`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-3-ex-1',
        number: '3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom en "dynamic" og en "static" character?',
        options: [
          {
            id: 'a',
            text: 'En dynamic character endrer seg gjennom historien, mens en static character forblir den samme',
            isCorrect: true,
            feedback: 'Riktig! En dynamic character gjennomgår en utvikling — de lærer noe, endrer holdning, eller vokser som person. En static character er lik i starten og slutten.',
          },
          {
            id: 'b',
            text: 'En dynamic character er hovedpersonen, mens en static character er bipersonen',
            isCorrect: false,
            feedback: 'Feil. Protagonist/antagonist og dynamic/static er to ulike ting. En biperson kan være dynamic, og en hovedperson kan være static.',
          },
          {
            id: 'c',
            text: 'En dynamic character er spennende, mens en static character er kjedelig',
            isCorrect: false,
            feedback: 'Feil. "Dynamic" og "static" handler om endring, ikke om hvor interessant karakteren er. En static character kan være svært fascinerende.',
          },
          {
            id: 'd',
            text: 'En dynamic character har mange egenskaper, mens en static character har få',
            isCorrect: false,
            feedback: 'Feil. Det du beskriver er forskjellen mellom "round" og "flat" characters. Dynamic/static handler om endring over tid.',
          },
        ],
        solution: 'Dynamic = endrer seg. Static = forblir lik. Eksempel: I "A Christmas Carol" er Scrooge en dynamic character (endrer seg fra gjerrig til sjenerøs), mens Bob Cratchit er mer static.',
      },
    },

    // ========== DEFINISJON: LITERARY DEVICES ==========
    {
      id: 'engelsk-10-3-def-2',
      type: 'definition',
      title: 'Literary Devices — Virkemidler i litteratur',
      content: `Forfattere bruker **literary devices** (virkemidler) for å skape mening, stemning og effekt. Her er de viktigste:

**Imagery (Billedspråk og sanseinntrykk)**
Beskrivelser som appellerer til sansene: syn, hørsel, lukt, smak, berøring.
- "The bitter cold bit through his thin jacket" (berøring)
- "The sweet scent of jasmine drifted through the open window" (lukt)

**Symbolism (Symbolikk)**
Gjenstander, farger eller hendelser som representerer noe dypere.
- En **due** = fred
- **Mørke** = det ukjente, frykt, død
- **Vann** = renselse, forandring, livets gang

**Metaphor (Metafor)**
En direkte sammenligning UTEN "like" eller "as".
- "Life is a roller coaster" — livet sammenlignes direkte med en berg-og-dal-bane
- "He was drowning in homework" — han "druknet" i lekser (ikke bokstavelig)

**Simile (Sammenligning)**
En sammenligning MED "like" eller "as".
- "Her eyes sparkled like diamonds"
- "He was as quiet as a mouse"

**Personification (Personifisering)**
Gi menneskelige egenskaper til ikke-menneskelige ting.
- "The wind whispered through the trees"
- "The sun smiled down on the village"

**Foreshadowing (Frampek)**
Hint tidlig i teksten om hva som skal skje senere.
- Mørke skyer som samler seg før en tragedie
- En karakter som sier "I have a bad feeling about this"

**Irony (Ironi)**
- **Situational irony:** Det motsatte av det forventede skjer (en brannstasjon brenner ned)
- **Dramatic irony:** Leseren vet noe karakterene ikke vet
- **Verbal irony:** Si det motsatte av det man mener (sarkasme)

**Alliteration (Allitterasjon)**
Gjentakelse av samme starttlyd i flere ord på rad.
- "Peter Piper picked a peck of pickled peppers"

**Repetition (Gjentakelse)**
Gjenta ord eller fraser for å forsterke et budskap.
- "I have a dream" (Martin Luther King Jr.)`,
    },

    // ========== EKSEMPEL: TEKSTANALYSE ==========
    {
      id: 'engelsk-10-3-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av et tekstutdrag',
      problem: `Analyser dette utdraget fra "The Great Gatsby" av F. Scott Fitzgerald:

"Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that's no matter — tomorrow we will run faster, stretch out our arms farther... And one fine morning—

So we beat on, boats against the current, borne back ceaselessly into the past."`,
      solution: `**Overflatenivå — Hva skjer?**
Fortelleren beskriver Gatsbys tro på "det grønne lyset" og fremtiden det representerer. Til tross for at det glir unna, fortsetter "vi" å strekke oss etter det.

**Dypere nivå — Temaer:**
- **Den amerikanske drømmen:** Det grønne lyset symboliserer håp og muligheter — men de er alltid utenfor rekkevidde
- **Tid og tap:** Fremtiden beveger seg vekk, og vi blir trukket tilbake til fortiden
- **Menneskelig streben:** Vi fortsetter å kjempe selv når det er nytteløst

**Håndverksnivå — Virkemidler:**
- **Symbolism:** The green light = håp, drømmer, den amerikanske drømmen
- **Imagery:** "stretch out our arms farther" — visuelt, fysisk bilde av streben
- **Metaphor:** "boats against the current" — vi er båter som kjemper mot strømmen (livet, tiden)
- **Repetition:** "year by year" — understreker den uendelige, nytteløse jakten
- **Irony:** Vi tror på fremtiden, men blir "borne back ceaselessly into the past"

**Effekt på leseren:**
Passasjen skaper en følelse av vakker fortvilelse — det er noe tragisk, men også dypt menneskelig, over vår evige jakt på noe uoppnåelig. Fitzgerald kritiserer den amerikanske drømmen som illusjon, men anerkjenner samtidig at denne jakten er det som gjør oss menneskelige.

**SMILE-analyse:**
- **S**tructure: Klimaktisk oppbygging med et avsluttende bilde
- **M**eaning: Drømmer er uoppnåelige, men vi fortsetter å jage
- **I**magery: Grønt lys, utstrakte armer, båter mot strømmen
- **L**anguage: Poetisk, melankolsk, bruk av "we" inkluderer leseren
- **E**ffect: Melankolsk, ettertenksom, universell`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-3-ex-2',
        number: '3.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Identifiser virkemiddelet i hver setning.',
        subTasks: [
          {
            label: 'a',
            task: '"The classroom was a prison."',
            solution: 'Metaphor — Klasserommet sammenlignes direkte med et fengsel (uten "like/as"). Effekt: Eleven føler seg fanget og ufri.',
            multipleChoiceOptions: ['Metaphor', 'Simile', 'Personification', 'Irony'],
          },
          {
            label: 'b',
            task: '"The trees danced joyfully in the breeze."',
            solution: 'Personification — Trærne gis menneskelige egenskaper (å danse). Effekt: Skaper en levende, glad stemning.',
            multipleChoiceOptions: ['Personification', 'Metaphor', 'Symbolism', 'Foreshadowing'],
          },
          {
            label: 'c',
            task: '"As brave as a lion, she faced her fears."',
            solution: 'Simile — Sammenligning med "as" (modig som en løve). Effekt: Vi forstår umiddelbart karakterens mot.',
            multipleChoiceOptions: ['Simile', 'Metaphor', 'Irony', 'Imagery'],
          },
          {
            label: 'd',
            task: '"The unsinkable ship sank on its maiden voyage."',
            solution: 'Situational irony — Det motsatte av det forventede skjer (Titanic-referanse). Effekt: Understreker det tragiske og uventede.',
            multipleChoiceOptions: ['Irony', 'Foreshadowing', 'Symbolism', 'Metaphor'],
          },
          {
            label: 'e',
            task: '"Dark clouds gathered on the horizon as the children set off on their journey."',
            solution: 'Foreshadowing — Mørke skyer varsler om problemer som skal komme. Effekt: Skaper uro og spenning hos leseren.',
            multipleChoiceOptions: ['Foreshadowing', 'Imagery', 'Symbolism', 'Personification'],
          },
          {
            label: 'f',
            task: '"The bitter wind howled through the empty streets, carrying the smell of smoke and ash."',
            solution: 'Imagery (sanseinntrykk: berøring, hørsel, lukt) + Personification (vinden "uler"). Effekt: Leseren føler seg til stede i scenen.',
            multipleChoiceOptions: ['Imagery + Personification', 'Metaphor', 'Symbolism', 'Irony'],
          },
        ],
        solution: 'a) Metaphor, b) Personification, c) Simile, d) Irony, e) Foreshadowing, f) Imagery + Personification. Husk: Identifiser virkemiddelet, gi eksemplet, og forklar effekten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST: TEMA I LITTERATUR ==========
    {
      id: 'engelsk-10-3-text-themes',
      type: 'text',
      content: `## Theme — Temaer i litteratur

Et **tema** er den underliggende ideen eller budskapet i en tekst. Det er ikke det samme som handlingen (plot). Handlingen er HVA som skjer — temaet er HVA TEKSTEN BETYR.

**Eksempel:**
- **Plot:** En fattig gutt drømmer om å bli rik og jobbe seg opp, men oppdager at penger ikke gjør ham lykkelig.
- **Theme:** Penger kan ikke kjøpe lykke. / Den amerikanske drømmen er en illusjon.

### Vanlige temaer i engelskspråklig litteratur:

| Tema | Forklaring | Eksempeltekster |
|------|-----------|-----------------|
| **Identity** | Hvem er jeg? Hvordan former omgivelsene oss? | "The Absolutely True Diary of a Part-Time Indian" |
| **Coming of age** | Overgangen fra barndom til voksenliv | "To Kill a Mockingbird", "The Catcher in the Rye" |
| **Prejudice & discrimination** | Rasisme, fordommer, urettferdighet | "Of Mice and Men", "The Help" |
| **Power & corruption** | Makt korrumperer | "Animal Farm", "Lord of the Flies" |
| **Love & loss** | Kjærlighet, sorg, tap | "Romeo and Juliet", "The Fault in Our Stars" |
| **Freedom vs. control** | Individets frihet vs. samfunnets kontroll | "1984", "The Hunger Games" |
| **Appearance vs. reality** | Ting er ikke alltid som de ser ut | "The Great Gatsby" |
| **Good vs. evil** | Kampen mellom godt og ondt | "Harry Potter", "The Lord of the Rings" |

### Hvordan finne temaet:
1. Se på **konflikten** — hva kjemper karakterene mot?
2. Se på **endringen** — hva har karakterene lært ved slutten?
3. Se på **gjentakelser** — hva kommer opp igjen og igjen?
4. Se på **symboler** — hva representerer de?
5. Spør: Hva vil forfatteren at leseren skal **tenke på** etter å ha lest teksten?`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-3-ex-3',
        number: '3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les dette utdraget og analyser det på alle tre nivåer (overflate, dypere, håndverk).',
        subTasks: [
          {
            label: 'a',
            task: '"The old house stood alone at the end of the road, its windows like hollow eyes staring into the darkness. Weeds had claimed the garden, and the front door hung open like a mouth frozen in a silent scream. No one had lived there for years, but sometimes, late at night, a light flickered in the upstairs window." — Hvilke virkemidler brukes her? Identifiser minst tre.',
            solution: 'Simile ("windows like hollow eyes", "like a mouth frozen"), Personification (weeds "claimed", huset "starer"), Imagery (visuelt: mørke, ugress, flakkende lys), Foreshadowing (lyset i vinduet antyder noe mystisk). Det flakkende lyset antyder at noen — eller noe — kanskje er der likevel.',
          },
          {
            label: 'b',
            task: 'Hvilken stemning (mood/atmosphere) skaper denne beskrivelsen? Bruk minst tre adjektiver.',
            solution: 'Uhyggelig (eerie), forlatt (desolate), mystisk (mysterious), skremmende (unsettling), melankolsk (melancholic). Settingen skaper en gotisk atmosfære som antyder at noe urovekkende har skjedd eller er i ferd med å skje.',
          },
          {
            label: 'c',
            task: 'Hva kan huset symbolisere? Gi minst to mulige tolkninger.',
            solution: '1) Forfall og glemsel — det som engang var levende er nå forlatt. 2) Hemmeligheter — det lukkede huset gjemmer på historier. 3) Fortiden — huset representerer minner som nekter å dø (lyset i vinduet). 4) Ensomhet — huset står "alone", avskåret fra resten av verden.',
          },
        ],
        hints: ['Bruk SMILE-modellen', 'Se etter sammenligninger og beskrivelser', 'Tenk på hva huset kan representere utover det bokstavelige'],
        solution: 'En god analyse identifiserer virkemidler, forklarer deres effekt, og tolker den dypere meningen. Husk: Det finnes sjelden bare én "riktig" tolkning — det viktige er at du begrunner tolkningen din.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: ANALYSE AV DIKT ==========
    {
      id: 'engelsk-10-3-def-3',
      type: 'definition',
      title: 'Poetry Analysis — Å analysere dikt',
      content: `Dikt er ofte tettere og mer komprimerte enn prosatekster. Hvert ord teller, og strukturen er like viktig som innholdet.

**Begreper for diktanalyse:**

**Stanza (Strofe)**
En gruppe verselinjer, adskilt med mellomrom — dikttets "avsnitt".

**Rhyme scheme (Rimmønster)**
Mønsteret av rim, markert med bokstaver: ABAB, AABB, ABCABC, etc.
- "Roses are red (A), Violets are blue (B), Sugar is sweet (A), And so are you (B)" = ABAB

**Rhythm/Metre (Rytme/Metrum)**
Mønsteret av betonte og ubetonte stavelser. Gir diktet musikalitet.

**Free verse (Frie vers)**
Dikt uten fast rimmønster eller metrum — bruker linjeinndeling og rytme fritt.

**Enjambment**
Når en setning fortsetter over flere verselinjer uten stans. Skaper flyt og kan skape overraskelse.

**Tone**
Forfatterens holdning til emnet: sarkastisk, melankolsk, håpefull, sint, etc.

**Analyseverktøy for dikt — TPCASTT:**
- **T**itle — Hva antyder tittelen?
- **P**araphrase — Gjenfortell innholdet med egne ord
- **C**onnotation — Hvilke assosiasjoner skaper ordene?
- **A**ttitude/Tone — Hva er forfatterens holdning?
- **S**hift — Er det et stemningsskifte i diktet?
- **T**itle revisited — Hva betyr tittelen NÅ?
- **T**heme — Hva er budskapet?`,
    },

    // ========== EKSEMPEL: DIKTANALYSE ==========
    {
      id: 'engelsk-10-3-example-2',
      type: 'example',
      title: 'Eksempel: Analyse av et dikt',
      problem: `Analyser dette diktet av Robert Frost:

**"The Road Not Taken" (siste strofe)**

"I shall be telling this with a sigh
Somewhere ages and ages hence:
Two roads diverged in a wood, and I—
I took the one less travelled by,
And that has made all the difference."`,
      solution: `**TPCASTT-analyse:**

**Title:** "The Road Not Taken" — handler om veien som IKKE ble valgt. Ikke "The Road Less Travelled" — fokuset er på det vi gir opp, ikke det vi velger.

**Paraphrase:** I fremtiden vil jeg fortelle, med et sukk, at jeg sto ved en veikrysning og valgte den minst brukte stien, og det endret alt.

**Connotation:**
- "sigh" — tvetydig: lettelse eller beklagelse?
- "ages and ages hence" — langt inn i fremtiden, refleksjon over livet
- "less travelled by" — det ukonvensjonelle valget
- "all the difference" — positive, men er det oppriktig eller ironisk?

**Attitude/Tone:** Reflekterende, melankolsk, muligens ironisk. Diktet er mer tvetydig enn det vanligvis tolkes.

**Shift:** "I shall be telling this with a sigh" — vi flyttes til fremtiden, der fortelleren ser tilbake. Dette skiftet gjør diktet til en refleksjon over hvordan vi skaper narrativer om livene våre.

**Theme:**
- Vi skaper mening i livene våre i etterkant — vi velger å se valg som avgjørende, selv når de kanskje ikke var det
- Individets ønske om å føle at valgene deres var unike og meningsfulle
- Tvetydigheten i "sukket" — er det tilfredshet eller anger?

**Virkemidler:**
- **Metaphor:** Veiene = livets valg
- **Symbolism:** Skogen = det ukjente, veikrysset = et avgjørende øyeblikk
- **Repetition:** "I—" og gjentatte referanser til valget
- **Rhyme scheme:** ABAAB — gir diktet musikalitet og en følelse av helhet
- **Enjambment:** "and I— / I took" — pausen gjenspeiler nølingen i valget`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-3-ex-4',
        number: '3.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser synsvinkel og fortellerstemme i disse utdragene.',
        subTasks: [
          {
            label: 'a',
            task: '"I never understood why they did it. Even now, years later, I still wonder what could have made them act that way." — Hvilken synsvinkel er dette? Hva er fordeler og begrensninger?',
            solution: 'First person (jeg-forteller). Fordeler: Personlig, intim, vi får innsikt i fortellerens tanker og følelser. Begrensninger: Vi ser bare gjennom én persons perspektiv — kan være upålitelig. "I never understood" antyder at fortelleren ikke har hele bildet.',
          },
          {
            label: 'b',
            task: '"Sarah sat by the window, watching the rain. She didn\'t know that across town, her brother was making the decision that would change both their lives forever." — Hvilken synsvinkel? Hva vet fortelleren som Sarah ikke vet?',
            solution: 'Third person omniscient — fortelleren vet alt, inkludert hva som skjer andre steder. Fortelleren vet om brorens beslutning og dens konsekvenser, mens Sarah er uvitende. Dette skaper dramatic irony.',
          },
          {
            label: 'c',
            task: 'Forklar hva en "unreliable narrator" er og gi et eksempel på når dette brukes.',
            solution: 'En upålitelig forteller er en jeg-forteller som leseren ikke kan stole helt på — kanskje de lyver, husker feil, er psykisk ustabile, eller har en agenda. Eksempel: I "Gone Girl" av Gillian Flynn manipulerer fortellerne bevisst leserens oppfatning. Effekten er at leseren må lese kritisk og stille spørsmål ved det som presenteres.',
          },
        ],
        solution: 'Synsvinkelen påvirker fundamentalt hvordan vi oppfatter historien. En jeg-forteller gir nærhet, men begrensning. En allvitende forteller gir oversikt, men mindre intimitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST: KONTEKST ==========
    {
      id: 'engelsk-10-3-text-context',
      type: 'text',
      content: `## Context — Kontekstens betydning

For å forstå en tekst fullt ut, må du kjenne konteksten den ble skrevet i. Kontekst gir oss nøkler til å forstå valg forfatteren har gjort.

### Typer kontekst:

**Historisk kontekst**
Hva skjedde i verden da teksten ble skrevet?
- "To Kill a Mockingbird" (1960) handler om rasisme i det amerikanske Sørstatene på 1930-tallet — skrevet midt i borgerrettighetsbevegelsen
- "1984" (1949) er skrevet like etter andre verdenskrig og reflekterer frykten for totalitære regimer

**Sosial kontekst**
Hvordan var samfunnet organisert? Klasser, kjønnsroller, normer?
- I "Of Mice and Men" er arbeidere på 1930-tallet desperate etter jobb under den store depresjonen
- "The Handmaid's Tale" reflekterer over kvinners rettigheter og patriarkalsk makt

**Biografisk kontekst**
Hvem er forfatteren? Hva preget deres liv og syn?
- Roald Dahl vokste opp med streng disiplin på engelske kostskoler — dette reflekteres i bøkene hans
- Maya Angelou skrev om sin erfaring som svart kvinne i det segregerte USA

**Kulturell kontekst**
Hvilken kulturell tradisjon tilhører teksten?
- Australsk litteratur utforsker ofte identitet, tilhørighet og forholdet til urfolk
- Indisk-engelsk litteratur tematiserer ofte postkolonialisme og kulturkollisjon`,
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-3-ex-5',
        number: '3.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Koble teksten til konteksten. Forklar hvilken type kontekst (historisk, sosial, biografisk, kulturell) som er relevant for hver tekst.',
        subTasks: [
          {
            label: 'a',
            task: '"Animal Farm" av George Orwell — en fabel der dyr tar over en gård, men noen dyr ender opp med mer makt enn andre.',
            solution: 'Historisk kontekst: Boken er en allegori over den russiske revolusjonen og Stalins diktatur. Sosial kontekst: Reflekterer klasse og maktforhold. Forståelse av Sovjet-historien gir teksten dypere mening.',
          },
          {
            label: 'b',
            task: '"The Hate U Give" av Angie Thomas — en ung svart jente vitner mordet på vennen sin begått av en politimann.',
            solution: 'Sosial kontekst: Skrevet i lys av Black Lives Matter-bevegelsen og politivold mot svarte amerikanere. Kulturell kontekst: Utforsker afroamerikansk ungdomskultur og "code-switching". Tittelen refererer til Tupacs akronym THUG LIFE.',
          },
        ],
        hints: ['Tenk på: Når ble teksten skrevet? Hva skjedde i verden da? Hvem er forfatteren?'],
        solution: 'Kontekst er nøkkelen til dypere forståelse. En tekst kan leses på flere nivåer, og kontekst åpner for tolkninger som ikke er tilgjengelige uten bakgrunnskunnskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST: HVORDAN SKRIVE EN ANALYSE ==========
    {
      id: 'engelsk-10-3-text-how-to',
      type: 'text',
      content: `## Hvordan skrive en litterær analyse

En god litterær analyse følger en strukturert fremgangsmåte. Her er en steg-for-steg-guide:

### Steg 1: Les teksten grundig
- Les **minst to ganger**: først for helhetsinntrykk, deretter for detaljer
- **Marker** interessante passasjer, virkemidler og språklige valg
- **Noter** dine første reaksjoner og spørsmål

### Steg 2: Identifiser de viktigste elementene
Bruk **SMILE** som sjekkliste:
- **S**tructure: Hvordan er teksten bygd opp?
- **M**eaning: Hva er tema/budskap?
- **I**magery: Hvilke bilder og sanseinntrykk brukes?
- **L**anguage: Ordvalg, tone, stil?
- **E**ffect: Hva gjør teksten med leseren?

### Steg 3: Skriv analysen

**Innledning (1 avsnitt):**
- Tittel, forfatter, sjanger, utgivelsesår
- Kort presentasjon av teksten (2-3 setninger)
- Din hovedtolkning (thesis)

**Hoveddel (3-4 avsnitt):**
- Hvert avsnitt tar for seg ETT aspekt (virkemiddel, tema, karakter...)
- Bruk **P.E.E.-metoden**:
  - **P**oint — Hva vil du vise?
  - **E**vidence — Siter fra teksten (bruk "anførselstegn")
  - **E**xplain — Forklar effekten og koblingen til tema

**Avslutning (1 avsnitt):**
- Oppsummer hovedfunnene
- Hva sier teksten om menneskelivet, samfunnet, eller verden?
- Eventuell personlig refleksjon

### Viktige fraser for analyse:
- "The author uses [virkemiddel] to create a sense of..."
- "This suggests that..." / "This implies..."
- "The reader is left with a feeling of..."
- "This can be interpreted as..."
- "In the context of [historisk hendelse], this takes on a deeper meaning..."`,
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-3-ex-6',
        number: '3.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fullfør disse analyse-setningene med riktig virkemiddel og effekt.',
        subTasks: [
          {
            label: 'a',
            task: 'In the line "Time is a thief that steals our youth", the author uses a _______ to suggest that time takes away our most precious years without us noticing.',
            solution: 'Metaphor — Tiden sammenlignes direkte med en tyv, noe som gir tiden en aktiv, nesten ondsinnet kvalitet.',
            multipleChoiceOptions: ['metaphor', 'simile', 'personification', 'alliteration'],
          },
          {
            label: 'b',
            task: 'The description of "dark, twisting corridors" and "doors that led nowhere" creates a mood of _______, reflecting the protagonist\'s _______.',
            solution: 'Confusion/entrapment (forvirring/fangskap), reflecting the protagonist\'s helplessness/disorientation. Settingen speiler karakterens indre tilstand — dette kalles "pathetic fallacy".',
          },
          {
            label: 'c',
            task: 'The fact that the story begins and ends in the same place is an example of _______ structure, which suggests that _______.',
            solution: 'Circular (sirkulær) structure, som antyder at karakteren er fanget i en syklus, at ingenting egentlig har endret seg, eller at vi vender tilbake til start med ny innsikt.',
          },
        ],
        solution: 'Analysespråk krever at du navngir virkemiddelet, viser det med et teksteksempel, og forklarer effekten det har. P.E.E. = Point, Evidence, Explain.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-3-summary',
      type: 'text',
      content: `## Oppsummering: Verktøykassen for litterær analyse

### De viktigste begrepene:

**Litterære elementer:** Setting, Characters (protagonist/antagonist, dynamic/static, flat/round), Plot (exposition → climax → resolution), Point of View

**Virkemidler:** Imagery, Symbolism, Metaphor, Simile, Personification, Foreshadowing, Irony, Alliteration, Repetition

**Analysemodeller:**
- **SMILE:** Structure, Meaning, Imagery, Language, Effect
- **TPCASTT:** Title, Paraphrase, Connotation, Attitude, Shift, Title, Theme
- **P.E.E.:** Point, Evidence, Explain

**Kontekst:** Historisk, sosial, biografisk, kulturell

### Huskesetninger:
- **Overflate:** "Hva skjer i teksten?"
- **Dybde:** "Hva betyr det? Hva er temaet?"
- **Håndverk:** "Hvordan formidles det? Hvilke virkemidler brukes?"
- **Effekt:** "Hva gjør teksten med leseren?"
- **Kontekst:** "Hvorfor ble denne teksten skrevet akkurat slik?"`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-3-ex-7',
        number: '3.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort litterær analyse (200-250 ord) av en novelle, et dikt eller en roman du har lest i engelskundervisningen. Bruk SMILE-modellen og P.E.E.-metoden.',
        hints: [
          'Start med tittel, forfatter, sjanger og utgivelsesår',
          'Gi et kort sammendrag (2-3 setninger)',
          'Identifiser minst to virkemidler med eksempler fra teksten',
          'Forklar temaet og koble det til virkemidlene',
          'Avslutt med en refleksjon: Hva sier teksten om verden vi lever i?',
        ],
        solution: 'En god analyse balanserer beskrivelse (hva skjer), identifikasjon av virkemidler (hvordan formidles det), og personlig tolkning (hva betyr det). Bruk alltid teksteksempler som bevis.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-3-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-3-ex-8',
        number: '3.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign to tekster med samme tema. Velg to tekster (bøker, noveller, dikt eller filmer) som handler om samme tema (f.eks. identitet, fordommer, kjærlighet, makt).',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke to tekster sammenligner du, og hva er det felles temaet?',
            solution: 'Oppgi tittel, forfatter og sjanger for begge tekstene. Identifiser temaet de deler.',
          },
          {
            label: 'b',
            task: 'Hvordan behandler de to tekstene temaet forskjellig? Se på virkemidler, setting, karakterer og synsvinkel.',
            solution: 'En grundig sammenligning ser på ulikheter i tilnærming: Bruker den ene humor og den andre alvor? Er den ene realistisk og den andre fantasifull? Hvilke virkemidler dominerer?',
          },
          {
            label: 'c',
            task: 'Hvilken tekst gir deg mest å tenke på, og hvorfor?',
            solution: 'Her viser du evne til personlig refleksjon og kritisk tenkning. Forklar hva det er med teksten som berører deg eller utfordrer din tenkning.',
          },
        ],
        hints: [
          'Du kan bruke tekster fra ulike sjangre og tidsperioder',
          'Bruk SMILE på begge tekstene og sammenlign',
          'Reflekter over kontekst — påvirker tid og sted tolkningene?',
        ],
        solution: 'Komparativ analyse er en avansert ferdighet som viser at du kan se sammenhenger mellom tekster og forstå hvordan form påvirker innhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4: Media and Society
// ============================================================================

export const CHAPTER_ENGELSK_10_4: TextbookChapter = {
  id: 'engelsk-10-4',
  courseId: 'engelsk-10',
  chapterNumber: '4',
  title: 'Media and Society',
  description: 'Utforsk medias rolle i samfunnet, lær kritisk medieforståelse, kildevurdering med CRAAP-testen, og forstå hvordan bias og algoritmer former informasjonen vi møter.',
  estimatedMinutes: 80,
  competenceGoals: [
    'vurdere og bruke kilder kritisk og reflektere over kildens troverdighet',
    'reflektere over medias rolle og påvirkning i samfunnet',
    'utforske og drøfte samfunnsaktuelle temaer knyttet til engelskspråklige land',
    'bruke digitale ressurser kritisk og kreativt i egen språklæring',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-4-intro',
      type: 'text',
      content: `## Media in the Modern World

Vi lever i en informasjonsalder. Hver dag bombarderes vi med tusenvis av budskap — fra nyhetssendinger og sosiale medier, fra reklame og underholdning, fra podcaster og influencere. Men hvem bestemmer hva vi ser? Og hvordan kan vi vite hva som er sant?

**Media literacy** (mediekompetanse) er evnen til å forstå, analysere og vurdere medieinnhold kritisk. I en verden der falske nyheter spres raskere enn sanne, og der algoritmer bestemmer hva du ser, er dette en av de viktigste ferdighetene du kan ha.

### Medietyper og deres rolle:

| Type | Eksempler | Kjennetegn |
|------|-----------|------------|
| **Traditional media** | Aviser, TV-nyheter, radio | Profesjonelt produsert, redaktørstyrt, journalistisk etikk |
| **Digital media** | Nettsider, apper, strømmetjenester | Umiddelbar, global, interaktiv |
| **Social media** | TikTok, Instagram, YouTube, Snapchat | Brukergenerert, algoritmestyrt, viralt potensial |
| **Alternative media** | Blogger, podcaster, uavhengige kanaler | Ufiltrert, mangfoldig, varierende kvalitet |

### Viktige spørsmål å stille seg:
1. **Hvem** laget dette innholdet, og **hvorfor**?
2. **Hvilken informasjon** er inkludert — og hva er **utelatt**?
3. **Hvordan** kan dette innholdet **påvirke** meg?
4. **Hvem** tjener på at jeg tror på dette?
5. **Kan** dette **bekreftes** av andre, uavhengige kilder?`,
    },

    // ========== DEFINISJON: BIAS ==========
    {
      id: 'engelsk-10-4-def-1',
      type: 'definition',
      title: 'Media Bias — Partiskhet i medier',
      content: `**Bias** (partiskhet) betyr at informasjon presenteres på en vinkling som favoriserer én side. Alle medier har en viss grad av bias — det viktige er å være bevisst på det.

**Typer bias:**

**Selection bias (Utvalgspartiskhet)**
Hvilke saker velger mediet å dekke? Hva ignoreres?
- En avis som hovedsakelig dekker saker som støtter et bestemt politisk parti

**Framing bias (Innrammingspartiskhet)**
Hvordan presenteres saken? Hvilken vinkel velges?
- Samme innvandringssak kan rammes inn som "krise" eller som "mulighet"

**Confirmation bias (Bekreftelsesbias)**
Tendensen til å søke informasjon som bekrefter det vi allerede tror.
- Du googler "er kaffe sunt?" og bare klikker på artikler som sier ja

**Omission bias (Utelatelsespartiskhet)**
Viktig informasjon som utelates bevisst eller ubevisst.
- En artikkel om klimaendringer som ikke nevner vitenskapelig konsensus

**Headline bias (Overskriftpartiskhet)**
Overskriften gir et annet inntrykk enn artikkelen selv.
- Overskrift: "Scientist claims chocolate cures cancer!" / Artikkel: "...but further research is needed"

**Photo/visual bias (Visuell partiskhet)**
Bildene som velges påvirker oppfatningen.
- Å velge et ufordelaktig bilde av en politiker du er imot

**Hvordan gjenkjenne bias:**
- Les HELE artikkelen, ikke bare overskriften
- Se etter **ladede ord** (emotive language)
- Sjekk om **begge sider** får komme til orde
- Spør: Hvem eier dette mediet? Hva er deres agenda?
- Sammenlign dekningen fra **flere kilder**`,
    },

    // ========== EKSEMPEL: IDENTIFISERE BIAS ==========
    {
      id: 'engelsk-10-4-example-1',
      type: 'example',
      title: 'Eksempel: Gjenkjenne bias i nyhetsoverskrifter',
      problem: `Se på disse to overskriftene om samme hendelse — en demonstrasjon i en by:

1. "Violent protesters clash with police in downtown riot"
2. "Peaceful march turns chaotic as police deploy tear gas"

Analyser bias i begge overskriftene.`,
      solution: `**Analyse av overskrift 1:**
- **Ordvalg:** "Violent", "clash", "riot" — alle negative ord knyttet til demonstrantene
- **Framing:** Demonstrantene fremstilles som aggressive og voldelige
- **Hvem er aktør?** Demonstrantene "clashes with police" — de har skylden
- **Utelatt:** Ingen informasjon om hva demonstrantene protesterer mot, eller om politiet brukte makt

**Analyse av overskrift 2:**
- **Ordvalg:** "Peaceful march" — positivt utgangspunkt for demonstrantene
- **Framing:** Det startet fredelig, men noe gikk galt
- **Hvem er aktør?** Politiet "deploy tear gas" — politiet eskalerer situasjonen
- **Utelatt:** Ingen informasjon om hvorfor politiet brukte tåregass

**Konklusjon:**
Begge overskriftene beskriver muligens SAMME hendelse, men de forteller veldig forskjellige historier. Ingen av dem er nødvendigvis "usanne" — men begge er partiske.

**Overskrift 1** har en pro-politi bias (demonstrantene er problemet)
**Overskrift 2** har en pro-demonstrant bias (politiet er problemet)

**Hva gjør en kritisk leser?**
1. Les begge versjonene
2. Se etter **fakta** som kan bekreftes: Var det vold? Fra hvem? Brukte politiet tåregass?
3. Finn en **tredje kilde** som gir et mer balansert bilde
4. Vær oppmerksom på dine **egne** bias — hvilken overskrift "føles" mest riktig for deg?`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-4-ex-1',
        number: '4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er "confirmation bias"?',
        options: [
          {
            id: 'a',
            text: 'Tendensen til å søke og tro på informasjon som bekrefter det vi allerede mener',
            isCorrect: true,
            feedback: 'Riktig! Confirmation bias er en av de vanligste og farligste typene bias, fordi den forsterker eksisterende overbevisninger uansett hva bevisene sier.',
          },
          {
            id: 'b',
            text: 'Når en journalist bevisst skriver falske nyheter',
            isCorrect: false,
            feedback: 'Feil. Det du beskriver er desinformasjon. Confirmation bias handler om hvordan leseren tolker informasjon, ikke om journalistens intensjon.',
          },
          {
            id: 'c',
            text: 'Når en overskrift ikke stemmer med artikkelen',
            isCorrect: false,
            feedback: 'Feil. Det du beskriver er "headline bias". Confirmation bias handler om leserens tendens til å favorisere informasjon som bekrefter egne meninger.',
          },
          {
            id: 'd',
            text: 'Når mediet kun dekker positive nyheter',
            isCorrect: false,
            feedback: 'Feil. Confirmation bias handler om den enkeltes tendens til å søke bekreftende informasjon — det er en kognitiv bias, ikke en mediestrategi.',
          },
        ],
        solution: 'Confirmation bias er en kognitiv bias som gjør at vi ubevisst søker, tolker og husker informasjon som bekrefter det vi allerede tror. Det er derfor viktig å aktivt oppsøke kilder som utfordrer våre synspunkter.',
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-4-ex-2',
        number: '4.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar disse mediebegrepene på norsk med egne ord og gi et eksempel for hvert begrep.',
        subTasks: [
          {
            label: 'a',
            task: 'Echo chamber (Ekkokammer)',
            solution: 'Et ekkokammer oppstår når du bare hører meninger som ligner dine egne, ofte forsterket av algoritmer. Eksempel: Hvis du bare følger personer som mener det samme som deg på Instagram, vil du aldri bli eksponert for motargumenter.',
          },
          {
            label: 'b',
            task: 'Filter bubble (Filterboble)',
            solution: 'En filterboble er når algoritmer tilpasser innholdet du ser basert på din tidligere oppførsel, slik at du bare ser ting du sannsynligvis liker/er enig i. Eksempel: YouTubes anbefalinger viser deg stadig mer av det du allerede har sett.',
          },
          {
            label: 'c',
            task: 'Clickbait (Klikkagn)',
            solution: 'Clickbait er overdrevne eller villedende overskrifter designet for å få deg til å klikke. Eksempel: "Du vil IKKE tro hva som skjedde da han åpnet pakken!" — innholdet er sjelden like spennende som overskriften lover.',
          },
          {
            label: 'd',
            task: 'Misinformation vs. Disinformation',
            solution: 'Misinformation er feil informasjon som deles uten at personen vet at det er feil. Disinformation er feil informasjon som deles MED VILJE for å villede. Eksempel: Å dele en gammel artikkel og tro den er ny = misinformation. Å lage en falsk video av en politiker = disinformation.',
          },
        ],
        solution: 'Å forstå disse begrepene er grunnlaget for kritisk mediekompetanse. De hjelper oss å gjenkjenne mekanismene som former vår oppfatning av verden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: CRAAP-TESTEN ==========
    {
      id: 'engelsk-10-4-def-2',
      type: 'definition',
      title: 'The CRAAP Test — Systematisk kildevurdering',
      content: `**CRAAP-testen** er et verktøy for å vurdere om en kilde er pålitelig. Utviklet av bibliotekarer ved California State University.

**C — Currency (Aktualitet)**
- Når ble kilden publisert eller sist oppdatert?
- Er informasjonen fortsatt relevant for ditt tema?
- Virker nettstedet aktivt vedlikeholdt?
- **Rødt flagg:** Ingen dato, utdatert informasjon, døde lenker

**R — Relevance (Relevans)**
- Er informasjonen relevant for ditt tema?
- Hvem er den tiltenkte målgruppen (fagfolk, studenter, allmennheten)?
- Er nivået passende for dine behov?
- **Rødt flagg:** Off-topic, for spesialisert eller for forenklet

**A — Authority (Autoritet)**
- Hvem er forfatteren/utgiveren?
- Hva er deres kvalifikasjoner og kompetanse?
- Er det en anerkjent organisasjon eller institusjon?
- Finnes det kontaktinformasjon?
- **Rødt flagg:** Anonym forfatter, ukjent nettsted, ingen legitimasjon

**A — Accuracy (Nøyaktighet)**
- Er informasjonen basert på bevis?
- Har kilden referanser og fotnoter?
- Kan informasjonen bekreftes av andre uavhengige kilder?
- Er teksten fri for stavefeil og grammatiske feil?
- **Rødt flagg:** Ingen kilder, mange feil, upresis informasjon, overdrevne påstander

**P — Purpose (Formål)**
- Hvorfor ble denne kilden skapt?
- Er formålet å informere, utdanne, selge, underholde eller overtale?
- Er det tydelig bias eller partiskhet?
- Er innholdet fakta, meninger eller propaganda?
- **Rødt flagg:** Reklame forkledd som artikkel, sterk politisk vinkling uten å oppgi det`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-4-ex-3',
        number: '4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk CRAAP-testen på en nettartikkel du finner selv. Velg en artikkel om et aktuelt tema (f.eks. kunstig intelligens, klimaendringer, eller ungdoms mediebruk).',
        subTasks: [
          {
            label: 'a',
            task: 'Currency: Når ble artikkelen publisert? Er informasjonen oppdatert?',
            solution: 'Sjekk publiseringsdato og eventuelle oppdateringer. For temaer som teknologi og vitenskap er dette spesielt viktig da informasjonen fort kan bli utdatert.',
          },
          {
            label: 'b',
            task: 'Authority: Hvem skrev artikkelen? Hva er deres kvalifikasjoner?',
            solution: 'Se etter forfatterens navn, tittel og bakgrunn. Sjekk om nettstedet er kjent og respektert. Er det en avis, et universitet, en organisasjon eller en tilfeldig blogg?',
          },
          {
            label: 'c',
            task: 'Accuracy: Er informasjonen støttet av bevis? Kan den bekreftes?',
            solution: 'Se etter referanser, lenker til studier, eller direkte sitater fra eksperter. Prøv å finne samme informasjon i minst én annen uavhengig kilde.',
          },
          {
            label: 'd',
            task: 'Purpose: Hva er formålet med artikkelen? Er det tydelig bias?',
            solution: 'Vurder om artikkelen informerer, overtaler, selger eller underholder. Se etter ladede ord, ensidig dekning, eller reklame blandet inn i redaksjonelt innhold.',
          },
          {
            label: 'e',
            task: 'Konklusjon: Basert på CRAAP-testen, hvor pålitelig er denne kilden? Gi en vurdering fra 1 (upålitelig) til 5 (svært pålitelig).',
            solution: 'En helhetsvurdering som veier alle CRAAP-kriteriene mot hverandre. En kilde kan score høyt på noen og lavt på andre — forklar din vurdering.',
          },
        ],
        hints: [
          'Velg en aktuell nyhetsartikkel på engelsk',
          'Se etter "Om oss"-sider og forfatterbiografier',
          'Google forfatterens navn for å se hva mer de har skrevet',
        ],
        solution: 'Systematisk kildevurdering med CRAAP-testen er en essensiell ferdighet i informasjonsalderen. Jo mer du øver, jo raskere blir du til å gjenkjenne pålitelige og upålitelige kilder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST: ALGORITMER OG SOSIALE MEDIER ==========
    {
      id: 'engelsk-10-4-text-algorithms',
      type: 'text',
      content: `## Algorithms and Social Media — Hvordan algoritmer former virkeligheten din

Visste du at det du ser på sosiale medier ikke er tilfeldig? Alt styres av **algoritmer** — matematiske regler som bestemmer hva du ser, i hvilken rekkefølge, og hvor ofte.

### Hvordan algoritmer fungerer:

**1. Datainnsamling**
Plattformene samler data om alt du gjør:
- Hva du liker, kommenterer og deler
- Hvor lenge du ser på hvert innlegg
- Hvem du følger og interagerer med
- Hvilke emneknagger du søker etter
- Tid på døgnet du er aktiv

**2. Profilering**
Basert på dataene bygger algoritmen en profil av dine interesser, preferanser og vaner.

**3. Innholdskuratering**
Algoritmen velger innhold den tror du vil engasjere deg med — ikke nødvendigvis det som er sant, viktig eller bra for deg.

### Problemet: Engasjement ≠ Sannhet

Algoritmene er designet for å holde deg på plattformen så lenge som mulig, fordi mer tid = mer reklame = mer penger. Forskning viser at:

- **Kontroversielt innhold** genererer mer engasjement enn nøytralt
- **Følelsesladde innlegg** deles oftere enn saklige
- **Falske nyheter** spres 6x raskere enn sanne nyheter (MIT-studie)
- **Ekstreme meninger** forsterkes fordi de provoserer reaksjoner

### Konsekvenser for deg:

**Filterboble:** Du ser bare innhold som bekrefter dine eksisterende synspunkter.

**Ekkokammer:** Du omgir deg bare med meninger som ligner dine egne, og begynner å tro at "alle" mener det samme.

**Radikalisering:** Algoritmer kan gradvis lede brukere mot stadig mer ekstremt innhold.

**FOMO (Fear of Missing Out):** Konstant eksponering for andres "perfekte" liv skaper stress og utilstrekkelighet.`,
    },

    // ========== DEFINISJON: RETORISK ANALYSE AV MEDIER ==========
    {
      id: 'engelsk-10-4-def-3',
      type: 'definition',
      title: 'Rhetorical Analysis of Media — Retorisk analyse av medieinnhold',
      content: `Alle mediebudskap bruker retoriske teknikker for å påvirke deg. Her er de viktigste å gjenkjenne:

**Ethos (Troverdighet)**
Avsender bygger tillit gjennom autoritet, ekspertise eller karakter.
- Eksempel: "According to Harvard researchers..." / "As a doctor with 20 years of experience..."
- I reklame: Tannleger anbefaler tannkrem, kjendiser bruker produktet

**Pathos (Følelser)**
Budskapet appellerer til følelsene dine for å påvirke.
- Eksempel: Bilder av sultende barn i veldedighetsreklame
- I sosiale medier: Sjokkerende overskrifter, rørende historier, sinte kommentarer

**Logos (Logikk)**
Budskapet bruker fakta, statistikk og logiske argumenter.
- Eksempel: "Studies show that 85% of teenagers use social media daily"
- OBS: Statistikk kan manipuleres — sjekk alltid kilden og metoden

**Kairos (Timing)**
Budskapet bruker riktig timing for maksimal effekt.
- Eksempel: Skremmende nyheter om sykdom under en pandemi, politisk reklame rett før valg

**Vanlige persuasive teknikker i reklame og medier:**
- **Bandwagon:** "Alle gjør det — du bør også!" (gruppepress)
- **Testimonial:** En kjent person anbefaler produktet
- **Appeal to fear:** Skremme deg til å handle ("Du kan bli neste!")
- **Repetition:** Gjenta budskapet til det fester seg
- **Transfer:** Assosiere produktet med positive bilder (natur, familie, frihet)
- **Plain folks:** Late som produktet er "for vanlige folk" (selv om det er luksus)`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-4-ex-4',
        number: '4.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser den retoriske appellen (ethos, pathos eller logos) i hvert eksempel.',
        subTasks: [
          {
            label: 'a',
            task: '"9 out of 10 dentists recommend this toothpaste for healthier gums."',
            solution: 'Ethos (tannlegenes autoritet) + Logos (statistikk: "9 out of 10"). Merk: Denne typen statistikk kan være misvisende — 9 av 10 i hvilken studie? Hvem betalte for studien?',
            multipleChoiceOptions: ['Ethos + Logos', 'Pathos', 'Kairos', 'Logos only'],
          },
          {
            label: 'b',
            task: 'En reklame viser et ensomt barn som sitter alene i et øde rom, med teksten: "No child should have to face Christmas alone."',
            solution: 'Pathos — Reklamen bruker følelser (tristhet, empati, medfølelse) for å motivere til handling (donasjon). Bildet av barnet er spesielt effektivt fordi det appellerer til beskytterinstinktet.',
            multipleChoiceOptions: ['Pathos', 'Ethos', 'Logos', 'Kairos'],
          },
          {
            label: 'c',
            task: '"As world-renowned climate scientist Dr. Emily Chen explains in her peer-reviewed research published in Nature..."',
            solution: 'Ethos — Troverdighet bygges gjennom tittel ("world-renowned"), kvalifikasjoner ("climate scientist"), navn (identifiserbar person), og publikasjon ("peer-reviewed", "Nature"). Dette er et sterkt ethos-argument.',
            multipleChoiceOptions: ['Ethos', 'Pathos', 'Logos', 'Bandwagon'],
          },
          {
            label: 'd',
            task: '"Millions of people have already switched to our service. Don\'t be the last one!"',
            solution: 'Bandwagon (gruppepress) + Pathos (frykt for å gå glipp av noe / FOMO). "Millions" antyder popularitet uten å bevise kvalitet.',
            multipleChoiceOptions: ['Bandwagon + Pathos', 'Logos', 'Ethos', 'Plain folks'],
          },
        ],
        solution: 'Retorisk analyse hjelper deg å gjennomskue hvordan medier forsøker å påvirke deg. Husk: Et budskap kan bruke flere appeller samtidig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL: ANALYSERE EN REKLAME ==========
    {
      id: 'engelsk-10-4-example-2',
      type: 'example',
      title: 'Eksempel: Analysere en reklame',
      problem: `Analyser denne fiktive reklameteksten for en mobiltelefon:

"The new PhoneX Pro. Because life doesn't wait. Captured in stunning 200MP clarity by award-winning photographer James Lee. Join 50 million satisfied users worldwide. Limited offer — only available this week. #LiveBolder"`,
      solution: `**Retorisk analyse:**

**Ethos (Troverdighet):**
- "Award-winning photographer James Lee" — en ekspert anbefaler produktet
- "50 million satisfied users" — sosial bekreftelse (bandwagon)

**Pathos (Følelser):**
- "Because life doesn't wait" — appellerer til frykt for å gå glipp av øyeblikk (FOMO)
- "#LiveBolder" — appellerer til ønsket om å leve et spennende liv
- Hele reklamen skaper en følelse av at du TRENGER dette produktet for å leve fullt

**Logos (Logikk — tilsynelatende):**
- "200MP clarity" — teknisk spesifikasjon som antyder overlegen kvalitet
- "50 million users" — tall som antyder popularitet (men er dette mye for en global telefon?)

**Kairos (Timing):**
- "Limited offer — only available this week" — presser til rask handling uten å tenke seg om
- Knapphet skaper urgency (hastverkfølelse)

**Persuasive teknikker:**
- **Testimonial:** James Lee (kjendisanbefaling)
- **Bandwagon:** "50 million users" (alle har den)
- **Appeal to urgency:** "Limited offer" (skynd deg!)
- **Transfer:** Produktet assosieres med "bold" livsstil

**Kritiske spørsmål:**
- Trenger du virkelig 200MP? Hva betyr det i praksis?
- Hvorfor er tilbudet tidsbegrenset? Er det virkelig begrenset?
- Er "50 million users" tilfreds, eller bare kjøpere?
- Hva sier uavhengige tester om denne telefonen?`,
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-4-ex-5',
        number: '4.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser en reklame du finner selv (video, bilde eller tekst). Besvar alle deloppgavene.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv reklamen kort: Hva reklameres det for? Hvor fant du den?',
            solution: 'Beskriv produktet, plattformen (TV, Instagram, YouTube, etc.) og reklamens format (video, bilde, tekst).',
          },
          {
            label: 'b',
            task: 'Hvem er målgruppen? Hvordan kan du se det?',
            solution: 'Se på: Alder på personene i reklamen, språk/sjargong, musikk, farger, plattform den vises på, og hva slags livsstil som fremstilles.',
          },
          {
            label: 'c',
            task: 'Hvilke retoriske appeller brukes (ethos, pathos, logos)?',
            solution: 'Identifiser minst to appeller med konkrete eksempler fra reklamen.',
          },
          {
            label: 'd',
            task: 'Hva er det implisitte budskapet — det som ikke sies direkte?',
            solution: 'Det implisitte budskapet er ofte: "Livet ditt blir bedre med dette produktet" eller "Du trenger dette for å være lykkelig/populær/vellykket." Forklar hva reklamen antyder mellom linjene.',
          },
        ],
        hints: [
          'Velg en reklame som berører deg — det er lettere å analysere',
          'Se reklamen flere ganger og noter detaljene',
          'Tenk på hva reklamen IKKE forteller deg',
        ],
        solution: 'Reklameanalyse avslører persuasive teknikker og skjulte budskap. Jo mer bevisst du er på disse teknikkene, jo bedre kan du ta selvstendige valg som forbruker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST: FALSKE NYHETER ==========
    {
      id: 'engelsk-10-4-text-fake-news',
      type: 'text',
      content: `## Fake News and Fact-Checking — Falske nyheter og faktasjekking

Begrepet "fake news" ble for alvor kjent under den amerikanske presidentvalgkampen i 2016, men fenomenet er langt eldre. Falske nyheter har eksistert så lenge det har vært medier.

### Typer falske/villedende nyheter:

**1. Fabricated content (Fullstendig oppdiktet)**
Innhold som er 100% falsk, skapt for å villede.
- Eksempel: Falske nettsider som ligner ekte nyhetskanaler

**2. Manipulated content (Manipulert innhold)**
Ekte innhold som er endret eller tatt ut av kontekst.
- Eksempel: Et bilde fra én hendelse brukt for å illustrere en helt annen

**3. Misleading content (Villedende innhold)**
Ekte informasjon presentert på en misvisende måte.
- Eksempel: Kirsebærplukking av statistikk for å støtte en påstand

**4. Satire/Parody (misforstått)**
Humor som noen tar bokstavelig.
- Eksempel: Artikler fra The Onion (satirisk nettavis) som deles som om de var ekte

### Praktiske tips for faktasjekking:

**1. SIFT-metoden** (rask kildekritikk):
- **S**top — Ikke del eller reager umiddelbart
- **I**nvestigate the source — Hvem er avsender?
- **F**ind better coverage — Finn dekningen fra anerkjente medier
- **T**race claims — Spor påstanden tilbake til originalen

**2. Bruk faktsjekkere:**
- Snopes.com (USA, internasjonal)
- FactCheck.org (USA, politikk)
- Faktisk.no (Norge)
- Full Fact (UK)

**3. Omvendt bildesøk:**
Google Images → kameraikon → last opp bildet → se om det er brukt andre steder i en annen kontekst`,
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-4-ex-6',
        number: '4.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn tre ulike mediers dekning av SAMME nyhetssak på engelsk. Sammenlign dem.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke tre kilder valgte du? Beskriv kort hva nyhetssaken handler om.',
            solution: 'Velg gjerne kilder fra ulike land eller med ulik politisk profil for å se forskjellene tydeligst.',
          },
          {
            label: 'b',
            task: 'Hvilke vinklinger velger de tre kildene? Er det forskjeller i overskrifter, ordvalg eller fokus?',
            solution: 'Sammenlign overskriftene direkte. Se etter ladede ord, hvem som siteres, og hvilke aspekter av saken som vektlegges eller nedtones.',
          },
          {
            label: 'c',
            task: 'Hva er likt i alle tre dekningen? Hva er forskjellig?',
            solution: 'Fakta er vanligvis like (hva som skjedde), men tolkningen og vinklingen varierer. Se etter hva som er utelatt i noen kilder men inkludert i andre.',
          },
          {
            label: 'd',
            task: 'Hvilken kilde stoler du mest på, og hvorfor? Bruk CRAAP-testen.',
            solution: 'Gi en begrunnet vurdering basert på CRAAP-kriteriene. Ingen kilde er perfekt — det viktige er å være bevisst på styrker og svakheter.',
          },
        ],
        hints: [
          'Prøv BBC, CNN, Al Jazeera, Fox News, The Guardian, NRK (engelsk)',
          'Sammenlign overskriftene side ved side',
          'Se etter hva som IKKE dekkes i noen av kildene',
        ],
        solution: 'Å sammenligne mediedekning er en av de mest effektive måtene å utvikle kritisk mediekompetanse. Det avslører bias, valg og prioriteringer som former budskapet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== NOTE: DIGITAL BORGER ==========
    {
      id: 'engelsk-10-4-note-citizen',
      type: 'note',
      title: 'Viktig: Ditt ansvar som digital borger',
      content: `Som bruker av sosiale medier og digitale plattformer har du også et ansvar:

**Før du deler:**
- Har du lest hele artikkelen, ikke bare overskriften?
- Er kilden pålitelig? (CRAAP-test)
- Kan informasjonen bekreftes av andre kilder?
- Vil delingen bidra positivt til samtalen?

**Tenk på effekten:**
- Kan dette skade noen?
- Sprer dette fordommer eller stereotypier?
- Er dette noe du ville sagt ansikt til ansikt?

**Husk:**
- Du har rett til ytringsfrihet, men også ansvar for det du ytrer
- Algoritmene belønner engasjement — ikke la dem styre hva du tror
- Det er OK å endre mening når du får ny informasjon
- Å si "jeg vet ikke" er et tegn på styrke, ikke svakhet`,
    },

    // ========== OPPGAVE 7 ==========
    {
      id: 'engelsk-10-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-4-ex-7',
        number: '4.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Reflekter over din egen mediebruk. Svar ærlig og utfyllende (på engelsk, 4-6 setninger per deloppgave).',
        subTasks: [
          {
            label: 'a',
            task: 'How much time do you spend on social media each day? Which platforms do you use most? What type of content do you mainly consume?',
            solution: 'Et godt svar er ærlig og konkret. Eksempel: "I spend about 2-3 hours daily, mostly on TikTok and Instagram. I mainly watch short videos about gaming and comedy, but I also follow some news accounts..."',
          },
          {
            label: 'b',
            task: 'How do you think algorithms affect what you see? Have you noticed your feed becoming more one-sided over time?',
            solution: 'Et godt svar viser bevissthet om algoritmer. Reflekter over om du har lagt merke til at innholdet blir stadig mer likt, eller om du aktivt motvirker dette.',
          },
          {
            label: 'c',
            task: 'Have you ever shared something online that turned out to be false? What did you learn from the experience?',
            solution: 'Et godt svar viser selvinnsikt og læring. Hvis du aldri har opplevd dette, reflekter over hvordan du ville håndtert det.',
          },
        ],
        hints: [
          'Vær ærlig — det finnes ingen "riktige" medievaner',
          'Bruk konkrete eksempler fra din egen opplevelse',
          'Vis at du er bevisst på utfordringene, selv om du ikke alltid er "perfekt"',
        ],
        solution: 'Selvrefleksjon over medievaner er det første steget mot bevisst mediebruk. Det handler ikke om å slutte å bruke medier, men om å bruke dem med åpne øyne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-4-summary',
      type: 'text',
      content: `## Oppsummering: Din guide til kritisk medieforståelse

### Nøkkelbegreper:
- **Bias:** Partiskhet i medier — selection, framing, confirmation, omission
- **Echo chamber / Filter bubble:** Mekanismer som begrenser mangfoldet i informasjonen du eksponeres for
- **Misinformation / Disinformation:** Feil informasjon (utilsiktet vs. med vilje)
- **Clickbait:** Villedende overskrifter designet for å generere klikk

### Verktøy for kildekritikk:
- **CRAAP-testen:** Currency, Relevance, Authority, Accuracy, Purpose
- **SIFT-metoden:** Stop, Investigate, Find better coverage, Trace claims
- **Retorisk analyse:** Ethos (troverdighet), Pathos (følelser), Logos (logikk), Kairos (timing)

### Huskesetninger:
1. **Stopp** — Ikke del eller reager umiddelbart
2. **Spør** — Hvem laget dette? Hvorfor? For hvem?
3. **Sjekk** — Kan dette bekreftes av uavhengige kilder?
4. **Tenk** — Hva er det implisitte budskapet?
5. **Reflekter** — Hvordan påvirker dette mine egne meninger og holdninger?

### Det viktigste:
Kritisk mediekompetanse handler ikke om å mistro alt, men om å tenke selvstendig. Det handler om å stille spørsmål, søke flere perspektiver, og ta informerte beslutninger basert på gode kilder.`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-4-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-4-ex-8',
        number: '4.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et essay (300-400 ord) på engelsk om ETT av disse temaene. Bruk argumenter, eksempler og retorisk analyse.',
        subTasks: [
          {
            label: 'a',
            task: '"Should social media platforms be legally responsible for the content their algorithms promote?"',
            solution: 'Et godt essay diskuterer ytringsfrihet vs. ansvar, algoritmenes rolle, eksempler på skadelig innhold som forsterkes, og mulige løsninger (regulering, transparens, aldersgrenser).',
          },
          {
            label: 'b',
            task: '"How do influencers affect young people\'s self-image and consumer behaviour?"',
            solution: 'Et godt essay diskuterer parasosiale relasjoner, sponset innhold vs. ekte anbefalinger, skjønnhetsidealer, merkevarelojalitet, og medienes ansvar.',
          },
        ],
        hints: [
          'Bruk PEEL-strukturen fra kapittel 1',
          'Inkluder minst ett eksempel fra virkelige medier/hendelser',
          'Vis at du kan bruke begrepene fra dette kapittelet (bias, ethos/pathos/logos, etc.)',
          'Diskuter motargumenter — vis at du ser flere sider',
        ],
        solution: 'Essayet vurderes etter: Tydelig thesis, strukturert argumentasjon, bruk av mediebegreper, konkrete eksempler, og evne til å diskutere flere perspektiver.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-4-ex-9',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-4-ex-9',
        number: '4.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gruppeprosjekt: Lag en kort presentasjon (5-7 minutter) om "Media Literacy in the Age of AI". Presenter for klassen.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva deepfakes er og hvorfor de er problematiske.',
            solution: 'Deepfakes er AI-genererte videoer eller bilder som ser ekte ut. De kan brukes til svindel, politisk manipulasjon og spredning av falsk informasjon. Gi eksempler.',
          },
          {
            label: 'b',
            task: 'Diskuter hvordan AI-generert tekst (som ChatGPT) utfordrer kildekritikk.',
            solution: 'AI kan produsere overbevisende tekst som er helt oppdiktet. Diskuter implikasjoner for utdanning, journalistikk og offentlig debatt.',
          },
          {
            label: 'c',
            task: 'Foreslå tre praktiske tiltak som unge kan gjøre for å beskytte seg mot AI-manipulasjon.',
            solution: 'F.eks.: 1) Sjekk alltid kilden. 2) Bruk omvendt bildesøk. 3) Vær skeptisk til innhold som vekker sterke følelser. 4) Følg med på utviklingen av AI-deteksjonsverktøy.',
          },
        ],
        hints: [
          'Bruk konkrete eksempler på deepfakes og AI-generert innhold',
          'Diskuter både risikoer og muligheter med AI',
          'Koble til CRAAP-testen og SIFT-metoden — fungerer de fortsatt i en AI-verden?',
        ],
        solution: 'AI-mediekompetanse er den neste store utfordringen. De som forstår hvordan AI-verktøy fungerer, vil være bedre rustet til å navigere i fremtidens medielandskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT: Samlet array for del 1
// ============================================================================

export const ENGELSK_10_DEL1_CHAPTERS = [
  CHAPTER_ENGELSK_10_1,
  CHAPTER_ENGELSK_10_2,
  CHAPTER_ENGELSK_10_3,
  CHAPTER_ENGELSK_10_4,
];
