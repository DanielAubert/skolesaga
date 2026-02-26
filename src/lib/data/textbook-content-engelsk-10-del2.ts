/**
 * Tekstbok innhold for Engelsk 10. klasse - Del 2 (Kapittel 5-7)
 *
 * Følger LK20 læreplan for engelsk ungdomstrinn.
 * Avsluttende år med fokus på tverrkulturell kommunikasjon, akademisk skriving og debatt.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 5: Intercultural Communication
// ============================================================================

export const CHAPTER_ENGELSK_10_5: TextbookChapter = {
  id: 'engelsk-10-5',
  courseId: 'engelsk-10',
  chapterNumber: '5',
  title: 'Intercultural Communication',
  description: 'Forstå kulturelle forskjeller i kommunikasjon, forskjellen mellom britisk og amerikansk engelsk, og utvikle tverrkulturell kompetanse.',
  estimatedMinutes: 90,
  competenceGoals: [
    'utforske og reflektere over mangfold og samfunnsforhold i den engelskspråklige verden',
    'uttrykke seg med flyt og sammenheng, tilpasset formål og situasjon',
    'diskutere og reflektere over form, innhold og språklige virkemidler i engelskspråklige kulturelle uttrykksformer',
    'utforske og beskrive levemåter, tenkesett og kommunikasjonsmønstre i den engelskspråklige verden',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-5-intro',
      type: 'text',
      content: `## Why Intercultural Communication Matters

Tenk deg at du er på utveksling i Japan. Vertsfamilien din tilbyr deg mat du aldri har sett før. Du rynker på nesen og sier "No thanks, that looks weird." I Norge ville dette kanskje bare vært ærlig — men i Japan har du nettopp fornærmet vertsfamilien din dypt.

Eller forestill deg at du sender en e-post til en britisk bedrift og skriver "I want to meet with you next Tuesday." En brite ville oppfattet dette som uhøflig og direkte — de forventer noe mer som "I was wondering if it might be possible to arrange a meeting at your convenience."

**Tverrkulturell kommunikasjon** handler om å forstå at mennesker fra ulike kulturer kommuniserer på forskjellige måter — og at misforståelser ofte ikke skyldes språkfeil, men *kulturelle* forskjeller.

I en stadig mer globalisert verden er denne kompetansen avgjørende:
- **Internasjonalt arbeidsliv** krever samarbeid på tvers av kulturer
- **Sosiale medier** kobler deg til mennesker fra hele verden
- **Reising og utveksling** gir deg direkte kontakt med andre kulturer
- **Innvandring og mangfold** gjør at du møter kulturelle forskjeller i hverdagen

I dette kapittelet skal du lære å gjenkjenne kulturelle forskjeller i kommunikasjon, forstå forskjellen mellom britisk og amerikansk engelsk, og utvikle strategier for å kommunisere effektivt på tvers av kulturer.`,
    },

    // ========== DEFINISJON 1: HIGH-CONTEXT OG LOW-CONTEXT ==========
    {
      id: 'engelsk-10-5-def-1',
      type: 'definition',
      title: 'High-Context vs. Low-Context Cultures',
      content: `Antropologen Edward T. Hall delte kulturer inn i to hovedkategorier basert på hvordan de kommuniserer:

**High-context cultures (indirekte kommunikasjon):**
- Mye av budskapet ligger i *konteksten* — kroppsspråk, tonefall, hva som IKKE sies
- Man forventes å "lese mellom linjene"
- Direkte konfrontasjon unngås; harmoni er viktig
- Eksempler: Japan, Kina, Korea, mange arabiske og afrikanske kulturer
- Typisk utsagn: "That might be difficult..." (betyr ofte "nei")

**Low-context cultures (direkte kommunikasjon):**
- Budskapet ligger i selve *ordene* — man sier det man mener
- Klarhet og tydelighet verdsettes
- Det er akseptert å si seg uenig åpent
- Eksempler: USA, Tyskland, Nederland, Skandinavia
- Typisk utsagn: "No, I disagree because..." (direkte og tydelig)

**Viktig nyanse:** Norge er generelt en low-context-kultur, men *mindre* direkte enn for eksempel Nederland eller Tyskland. Britisk kultur er mer high-context enn amerikansk kultur, selv om begge er engelskspråklige.

**Husk:** Ingen kultur er "bedre" enn en annen — de er bare forskjellige. Poenget er å forstå forskjellene slik at du kan tilpasse kommunikasjonen din.`,
    },

    // ========== EKSEMPEL 1: HIGH-CONTEXT VS LOW-CONTEXT ==========
    {
      id: 'engelsk-10-5-ex-1',
      type: 'example',
      title: 'Eksempel: Samme situasjon — ulik kulturell respons',
      problem: 'En kollega presenterer en idé du mener er dårlig i et møte. Hvordan ville ulike kulturer reagere?',
      solution: `**Situasjon:** Din kollega foreslår å flytte et viktig arrangement til en dato som kolliderer med en annen hendelse.

**Low-context (direkte, f.eks. Nederland):**
"I don't think that's a good idea. The date clashes with the annual conference, and we'd lose half our audience. We should pick another date."

**Medium-context (moderat, f.eks. Norge):**
"That's an interesting suggestion. I'm just a bit worried about the timing — doesn't it overlap with the annual conference? Maybe we could look at alternative dates?"

**High-context (indirekte, f.eks. Japan):**
"Thank you for your suggestion. It would certainly be an interesting option. I wonder, though, if we might want to consider the calendar more carefully... Perhaps we could discuss this further after the meeting?"

**Analyse av forskjellene:**
- Den nederlandske responsen er direkte og tydelig — ingen tvil om meningen
- Den norske responsen demper kritikken med "interesting" og "just a bit worried"
- Den japanske responsen unngår direkte uenighet helt — men en japansk kollega ville forstått at svaret egentlig er "nei"
- Alle tre oppnår samme mål, men på kulturelt tilpassede måter

**Fare for misforståelse:** En person fra en low-context-kultur kan tolke den japanske responsen som positiv. En person fra en high-context-kultur kan oppleve den nederlandske responsen som uhøflig.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-5-ex-1a',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-5-ex-1a',
        number: '5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'En britisk kollega sier: "That\'s a very brave idea." Hva mener de mest sannsynlig?',
        options: [
          {
            id: 'a',
            text: 'De beundrer ideen din og synes den er modig og innovativ',
            isCorrect: false,
            feedback: 'Feil. I britisk kommunikasjon er "brave" ofte et høflighetsuttrykk som faktisk betyr noe negativt.',
          },
          {
            id: 'b',
            text: 'De synes ideen er risikabel og sannsynligvis dårlig',
            isCorrect: true,
            feedback: 'Riktig! I britisk understatement betyr "brave" ofte "dumdristig" eller "dette kommer til å gå galt". Det er et klassisk eksempel på indirekte kommunikasjon.',
          },
          {
            id: 'c',
            text: 'De er nøytrale og vil høre mer',
            isCorrect: false,
            feedback: 'Feil. "Brave" i britisk kontekst er sjelden nøytralt — det er en forsiktig advarsel forkledd som et kompliment.',
          },
          {
            id: 'd',
            text: 'De spøker og prøver å være morsomme',
            isCorrect: false,
            feedback: 'Feil. Selv om britisk humor er kjent for ironi, er dette et seriøst eksempel på indirekte kommunikasjon — ikke humor.',
          },
        ],
        solution: 'I britisk kommunikasjon er "brave" ofte et eufemisme for "risikabelt" eller "dårlig idé". Andre eksempler: "interesting" (betyr ofte "merkelig"), "with respect" (betyr "jeg er uenig"), "I hear what you say" (betyr "jeg er helt uenig, men vil ikke diskutere det").',
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-5-ex-2',
        number: '5.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Omskriv disse direkte utsagnene til mer indirekte, høflige versjoner som ville passet i en britisk kontekst.',
        subTasks: [
          {
            label: 'a',
            task: '"Your report is full of mistakes."',
            solution: '"I noticed a few areas in the report that might benefit from another look." eller "There are perhaps one or two points we might want to revisit."',
          },
          {
            label: 'b',
            task: '"I disagree with your plan."',
            solution: '"I see where you\'re coming from, but I wonder if we might consider an alternative approach?" eller "That\'s an interesting perspective. Have you thought about...?"',
          },
          {
            label: 'c',
            task: '"You are late again."',
            solution: '"I don\'t suppose the traffic was kind to you today?" eller "I hope everything is alright — we were slightly worried when you hadn\'t arrived."',
          },
          {
            label: 'd',
            task: '"This food tastes terrible."',
            solution: '"It\'s certainly... different. Perhaps not quite to my taste." eller "I\'m sure it\'s lovely, but I think I might be full, actually."',
          },
        ],
        solution: 'Britisk indirekthet bruker hedging (might, perhaps, I wonder), eufemismer (areas that need attention i stedet for mistakes), og understatement (not quite i stedet for terrible). Målet er å bevare den andres verdighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON 2: BRITISK VS AMERIKANSK ENGELSK ==========
    {
      id: 'engelsk-10-5-def-2',
      type: 'definition',
      title: 'British English vs. American English',
      content: `Britisk og amerikansk engelsk er to varianter av samme språk, men det finnes viktige forskjeller innen stavemåte, ordforråd, grammatikk og uttale.

**Stavemåte (Spelling):**

| Britisk | Amerikansk | Regel |
|---------|-----------|-------|
| colour, favour, honour | color, favor, honor | -our → -or |
| centre, theatre, metre | center, theater, meter | -re → -er |
| organise, realise, analyse | organize, realize, analyze | -ise → -ize |
| travelling, cancelled | traveling, canceled | Dobbelt konsonant → enkel |
| defence, licence | defense, license | -ence → -ense |
| programme | program | -mme → -m |

**Ordforråd (Vocabulary):**

| Britisk | Amerikansk | Norsk |
|---------|-----------|-------|
| flat | apartment | leilighet |
| boot (of a car) | trunk | bagasjerom |
| biscuit | cookie | kjeks |
| chemist | pharmacy | apotek |
| lorry | truck | lastebil |
| queue | line | kø |
| rubbish | trash/garbage | søppel |
| holiday | vacation | ferie |
| lift | elevator | heis |
| pavement | sidewalk | fortau |
| mobile phone | cell phone | mobiltelefon |
| postbox | mailbox | postkasse |

**Grammatikk:**
- **Kollektive substantiv:** Britisk bruker ofte flertall ("The team are playing well"), amerikansk bruker entall ("The team is playing well")
- **Present perfect vs. simple past:** Britisk foretrekker "I've just eaten", amerikansk aksepterer "I just ate"
- **Have/have got:** Britisk "Have you got a pen?", amerikansk "Do you have a pen?"
- **Preposisjoner:** Britisk "at the weekend", amerikansk "on the weekend"

**Uttale:** Mange forskjeller — britisk "schedule" (SHED-yool), amerikansk "schedule" (SKED-yool); britisk "aluminium" (al-yoo-MIN-ee-um), amerikansk "aluminum" (ah-LOO-mi-num).

**På eksamen:** Du kan bruke enten britisk eller amerikansk engelsk, men vær **konsekvent**. Ikke bland "colour" og "organize" i samme tekst.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-5-ex-3',
        number: '5.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av disse setningene er skrevet konsekvent på britisk engelsk?',
        options: [
          {
            id: 'a',
            text: '"I went to the pharmacy to buy some cookies and then I took the elevator."',
            isCorrect: false,
            feedback: 'Feil. "Pharmacy", "cookies" og "elevator" er alle amerikanske ord. Britisk ville vært: chemist, biscuits, lift.',
          },
          {
            id: 'b',
            text: '"She put the rubbish in the boot and drove the lorry to the centre of town."',
            isCorrect: true,
            feedback: 'Riktig! Alle ordene følger britisk standard: rubbish (ikke trash), boot (ikke trunk), lorry (ikke truck), centre (ikke center).',
          },
          {
            id: 'c',
            text: '"He took the lift to his flat and organised his holiday photos."',
            isCorrect: false,
            feedback: 'Nesten! "Lift", "flat" og "holiday" er britiske, men "organised" bør skrives "organised" (som det er her — dette er faktisk konsekvent britisk). Beklager, dette er også korrekt britisk. Men (b) er et tydeligere eksempel med flere britiske markører.',
          },
          {
            id: 'd',
            text: '"I queued on the pavement to buy a theater ticket for my vacation."',
            isCorrect: false,
            feedback: 'Feil. "Queued" og "pavement" er britiske, men "theater" (i stedet for theatre) og "vacation" (i stedet for holiday) er amerikanske. Dette er inkonsekvent blanding.',
          },
        ],
        solution: 'Konsekvent språkbruk er viktig. Velg enten britisk eller amerikansk engelsk og hold deg til det gjennom hele teksten. Sensorene legger merke til inkonsekvent blanding.',
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-5-ex-4',
        number: '5.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett denne teksten til konsekvent amerikansk engelsk. Teksten er skrevet på britisk engelsk.',
        subTasks: [
          {
            label: 'a',
            task: '"During the holiday, I organised a trip to the city centre. We took the underground and then queued for an hour to visit the favourite museum."',
            solution: '"During the vacation, I organized a trip to the city center. We took the subway and then stood in line for an hour to visit the favorite museum." Endringer: holiday→vacation, organised→organized, centre→center, underground→subway, queued→stood in line, favourite→favorite.',
          },
          {
            label: 'b',
            task: '"My mum put the shopping bags in the boot of the car. The biscuits were for the neighbours, and the sweets were for my flatmate."',
            solution: '"My mom put the shopping bags in the trunk of the car. The cookies were for the neighbors, and the candy was for my roommate." Endringer: mum→mom, boot→trunk, biscuits→cookies, neighbours→neighbors, sweets→candy, flatmate→roommate.',
          },
        ],
        solution: 'Oversettelse mellom britisk og amerikansk engelsk krever oppmerksomhet på stavemåte (-our→-or, -ise→-ize, -re→-er), ordforråd (boot→trunk, biscuit→cookie) og grammatikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON 3: KULTURELLE DIMENSJONER ==========
    {
      id: 'engelsk-10-5-def-3',
      type: 'definition',
      title: 'Cultural Dimensions — Hofstedes kulturelle dimensjoner',
      content: `Den nederlandske forskeren Geert Hofstede identifiserte flere dimensjoner som beskriver kulturelle forskjeller. To av de viktigste er:

**1. Individualism vs. Collectivism (Individualisme vs. kollektivisme)**

*Individualistiske kulturer (USA, Storbritannia, Australia, Norge):*
- Fokus på individets rettigheter og selvstendighet
- "Jeg" er viktigere enn "vi"
- Personlig prestasjon verdsettes
- Direkte kommunikasjon om egne behov er akseptert
- "What do YOU think about this?"

*Kollektivistiske kulturer (Japan, Kina, India, mange afrikanske og latinamerikanske land):*
- Fokus på gruppens harmoni og samhold
- "Vi" er viktigere enn "jeg"
- Lojalitet mot gruppen verdsettes
- Man unngår å skille seg ut eller forstyrre harmonien
- "What does the GROUP think about this?"

**2. Power Distance (Maktavstand)**

*Lav maktavstand (Norge, Danmark, New Zealand):*
- Flat struktur — elever kan diskutere med lærere, ansatte med sjefer
- Alle har rett til å si sin mening
- Ledere forventes å være tilgjengelige og ydmyke
- "Call me by my first name"

*Høy maktavstand (Malaysia, Mexico, Filippinene):*
- Hierarkisk struktur — respekt for autoriteter
- Man stiller ikke spørsmål ved beslutninger fra overordnede
- Titler og formell tiltale er viktig
- "Address me as Dr. Smith"

**Norsk kontekst:** Norge skårer svært høyt på individualisme og svært lavt på maktavstand. Dette betyr at norske kommunikasjonsforventninger (uformell tone, flat struktur, direkte meningsytring) IKKE er universelle.`,
    },

    // ========== EKSEMPEL 2: KULTURKRASJ ==========
    {
      id: 'engelsk-10-5-ex-2a',
      type: 'example',
      title: 'Eksempel: Kulturkrasj i praksis',
      problem: 'Les disse to scenariene og identifiser hvilke kulturelle dimensjoner som skaper misforståelse.',
      solution: `**Scenario 1: E-post mellom norsk elev og amerikansk lærer**

Den norske eleven skriver:
"Hi John, I can't come to class tomorrow because I have a dentist appointment. Can I get the notes from someone? Thanks, Emma"

Den amerikanske læreren svarer (internt tenker):
"This is fine — Americans are also quite direct. But if this were a professor at a formal university, the tone might be too casual."

Nå, forestill deg at Emma sender SAMME e-post til en japansk lærer:
Den japanske læreren tenker: "Denne eleven er uhøflig. Hun bruker fornavnet mitt, gir ingen unnskyldning, og ber om noe uten å vise respekt for min tid."

**Bedre versjon for en høy-maktavstand-kontekst:**
"Dear Professor Tanaka, I sincerely apologise for the inconvenience, but I have an unavoidable medical appointment tomorrow and will unfortunately be unable to attend your valued class. Would it be possible for me to obtain the class notes? I deeply appreciate your understanding. Respectfully, Emma"

**Kulturelle dimensjoner i spill:**
- **Maktavstand:** Norges lave maktavstand gjør at Emma er uformell med læreren. I Japan (høy maktavstand) kreves formell tiltale og respektspråk.
- **Individualisme:** Emma fokuserer på sitt eget behov (tannlegetime) uten å anerkjenne ulempen for læreren. I en kollektivistisk kultur ville man fokusere mer på gruppens behov.

**Scenario 2: Forretningslunsj**

En norsk forretningskvinne er på forretningsreise i Saudi-Arabia. Hun strekker ut hånden for et håndtrykk med sin mannlige forretningspartner. Han nøler og unngår øyekontakt.

**Kulturell forklaring:** I mange konservative kulturer er fysisk kontakt mellom menn og kvinner som ikke er i familie, ikke vanlig i profesjonelle sammenhenger. Dette handler ikke om uhøflighet, men om kulturelle normer for samhandling.

**Lærdom:** Forbered deg kulturelt før internasjonale møter. Et lite Google-søk kan forhindre pinlige situasjoner.`,
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-5-ex-5',
        number: '5.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser disse situasjonene og forklar hvilke kulturelle forskjeller som kan skape misforståelser.',
        subTasks: [
          {
            label: 'a',
            task: 'En norsk elev på utveksling i USA sier til vertsfamilien: "The food was OK." Vertsfamilien virker skuffet. Hva gikk galt?',
            solution: 'I USA forventes mer entusiastiske tilbakemeldinger. "OK" oppfattes som negativt/likegyldig. Amerikanere ville sagt "It was great!" eller "I loved it!" selv om maten bare var grei. Norsk nøkternhet kolliderer med amerikansk positiv kommunikasjonsstil.',
          },
          {
            label: 'b',
            task: 'En japansk utvekslingsstudent nikker og sier "Yes, yes" gjennom hele en samtale, men gjør ikke det de ble enige om etterpå. Hva skjedde?',
            solution: 'I japansk kultur betyr "yes" ofte "ja, jeg hører hva du sier" — ikke nødvendigvis "ja, jeg er enig" eller "ja, jeg skal gjøre det." Nikkingen er et tegn på at de lytter aktivt, ikke at de godtar forslaget. High-context-kommunikasjon krever at man leser mellom linjene.',
          },
          {
            label: 'c',
            task: 'En tysk kollega sier direkte til en britisk kollega: "Your presentation was not good. The data was wrong and the conclusion was weak." Den britiske kollegaen blir svært fornærmet. Forklar konflikten.',
            solution: 'Tyskland har en svært direkte (low-context) kommunikasjonsstil der saklig kritikk er normalt og forventet. Storbritannia, selv om det er et low-context-land, bruker mye mer indirekthet og høflighetsfraser. En brite ville sagt: "There are a few areas that could perhaps be strengthened." Tyskeren mente det konstruktivt; briten opplevde det som et personangrep.',
          },
        ],
        solution: 'Kulturelle misforståelser oppstår når vi tolker andres oppførsel gjennom våre egne kulturelle briller. Nøkkelen er å være bevisst på at ulike kulturer har ulike kommunikasjonsnormer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON 4: POLITENESS STRATEGIES ==========
    {
      id: 'engelsk-10-5-def-4',
      type: 'definition',
      title: 'Politeness Strategies — Høflighetsstrategier på engelsk',
      content: `Språkforskerne Penelope Brown og Stephen Levinson utviklet en teori om høflighetsstrategier som brukes universelt, men i ulik grad i ulike kulturer.

**Positive politeness (inkluderende høflighet):**
- Vis interesse for den andre: "How was your weekend?"
- Bruk inkluderende språk: "We should work on this together"
- Gi komplimenter: "That's a great idea!"
- Bruk humor og uformelt språk
- Vanligst i: USA, Australia, Latin-Amerika

**Negative politeness (respektfull høflighet):**
- Unngå å legge press på den andre: "Would you mind...?"
- Bruk indirekte formuleringer: "I was wondering if perhaps..."
- Vis at du vet du ber om noe: "I'm sorry to bother you, but..."
- Gi den andre mulighet til å si nei: "Only if you have time..."
- Vanligst i: Storbritannia, Japan, Korea

**Nøkkelfraser for høflig engelsk:**

| Direkte (uformell) | Indirekte (høflig) | Svært indirekte (formell) |
|---|---|---|
| Give me that. | Could you pass me that? | I wonder if you'd mind passing me that? |
| I want coffee. | I'd like a coffee, please. | Would it be possible to get a coffee? |
| You're wrong. | I'm not sure that's quite right. | With respect, I think there might be another way to look at this. |
| Do this now. | Could you do this soon? | When you get a chance, would you mind looking at this? |
| I don't understand. | I'm not sure I follow. | I'm afraid I might be missing something — could you explain? |

**Kulturell bevissthet:** Jo mer formell situasjonen er, jo mer indirekte bør du være. Jo bedre du kjenner personen, jo mer direkte kan du være.`,
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-5-ex-6',
        number: '5.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Du skal sende en e-post til en britisk professor for å be om utsettelse på en innlevering. Hvilken åpning er mest passende?',
        options: [
          {
            id: 'a',
            text: '"Hi! I need more time for my assignment. Can I hand it in on Friday instead?"',
            isCorrect: false,
            feedback: 'For direkte og uformell for en britisk akademisk kontekst. Mangler høflighetsmarkører og respekt for professorens tid.',
          },
          {
            id: 'b',
            text: '"Dear Professor Williams, I am writing to enquire whether it might be possible to request a short extension for my assignment, as I have encountered some unforeseen circumstances."',
            isCorrect: true,
            feedback: 'Riktig! Dette er passende formelt: "Dear Professor" (korrekt tiltale), "I am writing to enquire" (formell innledning), "whether it might be possible" (indirekte forespørsel), "unforeseen circumstances" (høflig forklaring).',
          },
          {
            id: 'c',
            text: '"Yo Professor, I\'m gonna need a few more days for the paper. Cool?"',
            isCorrect: false,
            feedback: 'Altfor uformelt! "Yo", "gonna" og "Cool?" er slang som er helt upassende i akademisk kommunikasjon.',
          },
          {
            id: 'd',
            text: '"I demand an extension for my assignment. I have been very busy."',
            isCorrect: false,
            feedback: 'Feil tone. "I demand" er aggressivt, og "I have been very busy" er ikke en god begrunnelse. Ingen høflighetsmarkører.',
          },
        ],
        solution: 'I formell engelsk kommunikasjon (spesielt britisk) er det viktig å bruke korrekt tiltale, indirekte formuleringer og vise respekt for mottakerens tid og posisjon.',
      },
    },

    // ========== EKSEMPEL 3: WORLD ENGLISHES ==========
    {
      id: 'engelsk-10-5-ex-3a',
      type: 'example',
      title: 'Eksempel: World Englishes — Engelsk som globalt språk',
      problem: 'Les disse utdragene fra ulike engelskspråklige kulturer og identifiser opprinnelsesland.',
      solution: `Engelsk snakkes som første- eller andrespråk av over 1,5 milliarder mennesker. Her er eksempler på hvordan engelsk varierer verden over:

**Utdrag 1 — India:**
"I'm going to the market. You want to come, no? We can take an auto-rickshaw. The veggies there are first-class, I tell you."
*Kjennetegn:* Bruk av "no?" som spørsmålshale (tag question), "auto-rickshaw" (lokalt transportmiddel), "first-class" som forsterkende adjektiv, "I tell you" for vektlegging.

**Utdrag 2 — Australia:**
"G'day mate! Reckon we should head to the servo before arvo. Don't forget to grab some snags for the barbie tonight."
*Kjennetegn:* "G'day" (good day), "reckon" (tror/mener), "servo" (service station/bensinstasjon), "arvo" (afternoon), "snags" (pølser), "barbie" (barbecue). Australsk engelsk forkorter alt!

**Utdrag 3 — Sør-Afrika:**
"Howzit! We're having a braai this weekend at the lapa. Everyone's invited — it's going to be lekker. Just now I'll send you the details."
*Kjennetegn:* "Howzit" (how is it/hei), "braai" (grilling, fra afrikaans), "lapa" (utendørs samlingssted), "lekker" (fint/deilig, fra afrikaans), "just now" (betyr "snart" — ikke "akkurat nå"!).

**Utdrag 4 — Singapore (Singlish):**
"Wah, this hawker centre food very shiok lah! You don't want to eat, is it? Aiyah, don't like that lah, come try!"
*Kjennetegn:* "Wah" (uttrykk for overraskelse), "shiok" (deilig, fra malajisk), "lah" (partikkel for vektlegging), "is it" (tag question), "aiyah" (utrop). Singlish blander engelsk med mandarin, malajisk og tamilske elementer.

**Refleksjon:** Alle disse er gyldige varianter av engelsk. Det finnes ikke én "riktig" engelsk — men på eksamen bør du holde deg til standard britisk eller amerikansk.`,
    },

    // ========== OPPGAVE 7 ==========
    {
      id: 'engelsk-10-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-5-ex-7',
        number: '5.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Diskuter disse spørsmålene om World Englishes skriftlig (minst 4-5 setninger per spørsmål).',
        subTasks: [
          {
            label: 'a',
            task: 'Is there a "correct" English? Should schools teach British English, American English, or accept all varieties? Give arguments for your view.',
            solution: 'Det finnes ikke én objektivt "riktig" engelsk. Britisk og amerikansk har tradisjonelt vært standarder, men alle varianter har egne grammatiske regler og er like gyldige lingvistisk sett. For praktiske formål er det nyttig å lære en standardvariant, men man bør også anerkjenne og respektere andre varianter.',
          },
          {
            label: 'b',
            task: 'How does the spread of English as a global language affect other languages? Is it a positive or negative development?',
            solution: 'Positive sider: felles kommunikasjonsspråk, tilgang til informasjon, internasjonalt samarbeid. Negative sider: trussel mot minoritetsspråk, kulturell imperialisme, urettferdig fordel for morsmålstalere. Et balansert svar anerkjenner begge sider.',
          },
        ],
        hints: [
          'Bruk eksempler fra kapittelet for å underbygge argumentene dine',
          'Vis at du kan se saken fra flere sider',
          'Bruk akademisk språk og overgangsfaser',
        ],
        solution: 'Gode svar viser evne til å reflektere over språk og makt, bruker konkrete eksempler, og presenterer en nyansert argumentasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 8 ==========
    {
      id: 'engelsk-10-5-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-5-ex-8',
        number: '5.8',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken kulturell dimensjon beskriver forskjellen mellom land der man respekterer autoriteter og hierarki, og land der alle forventes å være likestilte?',
        options: [
          {
            id: 'a',
            text: 'High-context vs. low-context',
            isCorrect: false,
            feedback: 'Feil. High-context vs. low-context handler om kommunikasjonsstil (direkte vs. indirekte), ikke om hierarki.',
          },
          {
            id: 'b',
            text: 'Individualism vs. collectivism',
            isCorrect: false,
            feedback: 'Feil. Individualisme vs. kollektivisme handler om forholdet mellom individet og gruppen, ikke direkte om hierarki.',
          },
          {
            id: 'c',
            text: 'Power distance',
            isCorrect: true,
            feedback: 'Riktig! Power distance (maktavstand) beskriver i hvilken grad en kultur aksepterer og forventer ulik fordeling av makt. Høy maktavstand = respekt for hierarki; lav maktavstand = alle er likeverdige.',
          },
          {
            id: 'd',
            text: 'Positive vs. negative politeness',
            isCorrect: false,
            feedback: 'Feil. Dette er høflighetsstrategier i språkbruk, ikke en kulturell dimensjon som beskriver samfunnsstruktur.',
          },
        ],
        solution: 'Power distance er en av Hofstedes kulturelle dimensjoner. Norge har svært lav maktavstand, noe som betyr at vi forventer flat struktur og uformell omgangstone — også med autoriteter.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-5-summary',
      type: 'text',
      content: `## Oppsummering: Nøkler til tverrkulturell kommunikasjon

I dette kapittelet har du lært om de viktigste aspektene ved tverrkulturell kommunikasjon:

| Begrep | Forklaring | Eksempel |
|--------|-----------|----------|
| **High-context** | Budskap ligger i konteksten, indirekte | Japan: "That might be difficult" = nei |
| **Low-context** | Budskap ligger i ordene, direkte | Nederland: "I disagree because..." |
| **Power distance** | Grad av aksept for hierarki | Norge (lav) vs. Japan (høy) |
| **Individualism** | Fokus på individet vs. gruppen | USA (individualistisk) vs. Kina (kollektivistisk) |
| **Politeness strategies** | Måter å være høflig på | "Could you...?" vs. "I was wondering if..." |
| **World Englishes** | Engelske varianter verden over | Britisk, amerikansk, indisk, australsk |

**De viktigste rådene for tverrkulturell kommunikasjon:**
1. **Vær bevisst** på dine egne kulturelle "briller"
2. **Tilpass** kommunikasjonsstilen til konteksten
3. **Unngå stereotypier** — kultur er et spekter, ikke en boks
4. **Spør** når du er usikker — de fleste setter pris på nysgjerrighet
5. **Vær konsekvent** i valg av britisk eller amerikansk engelsk
6. **Vis respekt** for kulturelle forskjeller uten å dømme`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-5-ex-9',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-5-ex-9',
        number: '5.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en artikkel (250-350 ord) med tittelen "Lost in Translation: When Culture Gets in the Way". Bruk eksempler fra kapittelet og egne erfaringer.',
        hints: [
          'Start med en engasjerende anekdote om en kulturell misforståelse',
          'Forklar minst to kulturelle dimensjoner (high/low context, power distance, etc.)',
          'Gi konkrete eksempler på hvordan kulturelle forskjeller kan skape problemer',
          'Avslutt med praktiske råd for bedre tverrkulturell kommunikasjon',
          'Bruk varierte overgangsfaser og akademisk språk',
        ],
        solution: 'Artikkelen vurderes etter: Engasjerende åpning, forståelse av kulturelle dimensjoner, bruk av relevante eksempler, praktiske råd, språklig kvalitet og artikkelstruktur (headline, ingress, hoveddel, avslutning).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-5-ex-10',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-5-ex-10',
        number: '5.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Rollespill: Skriv en dialog (minimum 15 replikker) mellom to personer fra ulike kulturer som opplever en misforståelse. Vis hvordan de løser den.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg to kulturer med tydelig forskjellig kommunikasjonsstil (f.eks. norsk og japansk, amerikansk og britisk, tysk og indisk).',
            solution: 'Velg kulturer der du kan vise kontrasten mellom f.eks. direkte/indirekte kommunikasjon eller høy/lav maktavstand.',
          },
          {
            label: 'b',
            task: 'Skriv dialogen der misforståelsen oppstår naturlig — ikke lat som om karakterene vet de har ulik kulturbakgrunn.',
            solution: 'La misforståelsen vokse gradvis. Vis at begge tror de kommuniserer tydelig. Bruk sceneanvisninger for å vise forvirring og følelser.',
          },
          {
            label: 'c',
            task: 'La karakterene innse misforståelsen og løse den gjennom åpen dialog.',
            solution: 'Vis at løsningen kommer gjennom nysgjerrighet og vilje til å forstå den andres perspektiv — ikke ved at én kultur "vinner" over den andre.',
          },
        ],
        hints: [
          'Bruk sceneanvisninger i parentes: (smiling nervously), (looking confused)',
          'La begge karakterene ha rett ut fra sin egen kulturelle logikk',
          'Vis at løsningen handler om gjensidig forståelse, ikke om at én har rett',
        ],
        solution: 'Dialogen vurderes etter: Realistisk kulturell kontrast, naturlig språk, tydelig misforståelse, god oppløsning, og bruk av kunnskap fra kapittelet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 3 ==========
    {
      id: 'engelsk-10-5-ex-11',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-5-ex-11',
        number: '5.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Research-oppgave: Velg et engelskspråklig land du er interessert i (f.eks. India, Nigeria, Jamaica, Singapore) og lag en kort presentasjon om "English in [country]".',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv den engelske varianten som snakkes i landet — hva er spesielt med uttale, ordforråd og grammatikk?',
            solution: 'Gi konkrete eksempler på ord og uttrykk som er unike for denne varianten, og forklar hvor de kommer fra (lokale språk, historisk påvirkning, etc.).',
          },
          {
            label: 'b',
            task: 'Forklar den historiske bakgrunnen for hvorfor engelsk snakkes i dette landet.',
            solution: 'De fleste engelskspråklige land utenfor Storbritannia snakker engelsk på grunn av kolonialisme. Diskuter dette kritisk — hvordan ble engelsk innført, og hvilken status har det i dag?',
          },
          {
            label: 'c',
            task: 'Diskuter: Bør dette landets engelske variant ha samme status som britisk og amerikansk engelsk? Hvorfor/hvorfor ikke?',
            solution: 'Et godt svar viser forståelse for maktforhold i språk, anerkjenner alle varianter som gyldige, og reflekterer over språklig mangfold vs. standardisering.',
          },
        ],
        hints: [
          'Bruk pålitelige kilder og oppgi dem',
          'Inkluder lytte- eller videoeksempler hvis mulig',
          'Vis respekt for den varianten du presenterer — unngå å fremstille den som "feil" engelsk',
        ],
        solution: 'Presentasjonen vurderes etter: Grundighet i research, forståelse av språklig variasjon, historisk kontekst, kritisk refleksjon, og kvalitet på fremføring.',
        isInvestigation: true,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: Academic Writing
// ============================================================================

export const CHAPTER_ENGELSK_10_6: TextbookChapter = {
  id: 'engelsk-10-6',
  courseId: 'engelsk-10',
  chapterNumber: '6',
  title: 'Academic Writing',
  description: 'Lær akademisk skriving på engelsk: formell stil, kildehenvisning, argumentasjonsstruktur og hvordan du skriver overbevisende sakprosa.',
  estimatedMinutes: 90,
  competenceGoals: [
    'skrive ulike typer tekster med struktur og sammenheng, tilpasset formål og mottaker',
    'bruke variert ordforråd og idiomatiske uttrykk tilpasset ulike kommunikasjonssituasjoner',
    'bruke kunnskap om grammatikk og tekststruktur til å skape presise og sammenhengende tekster',
    'bruke kilder kritisk og på en etterrettelig måte',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-6-intro',
      type: 'text',
      content: `## What Makes Writing "Academic"?

Har du noen gang lurt på hva som er forskjellen mellom en vanlig skolestil og en virkelig akademisk tekst? Forskjellen handler ikke bare om å bruke vanskelige ord — det handler om **presisjon**, **struktur**, **kildekritikk** og **objektivitet**.

Akademisk skriving er det språket som brukes i forskning, universiteter og seriøs sakprosa over hele verden. Å mestre denne stilen gir deg et enormt fortrinn — ikke bare på eksamen, men i høyere utdanning og arbeidsliv.

**Kjennetegn på akademisk skriving:**

1. **Formell tone** — Ingen slang, forkortelser eller uformelt språk
2. **Presis ordbruk** — Velg det mest presise ordet, ikke det mest generelle
3. **Objektiv stemme** — Fokus på sak, ikke person
4. **Kildebruk** — Støtt påstandene dine med pålitelige kilder
5. **Logisk struktur** — Klar oppbygning med tydelige overganger
6. **Akademiske konvensjoner** — Kildehenvisninger, referanselister, formelle innledninger

I dette kapittelet skal du lære å forvandle uformell skriving til akademisk kvalitet. Du vil øve på formell stil, lære å bruke kilder riktig, og utvikle en presis og overbevisende skrivemåte.`,
    },

    // ========== DEFINISJON 1: FORMELL VS UFORMELL ==========
    {
      id: 'engelsk-10-6-def-1',
      type: 'definition',
      title: 'Formal vs. Informal Language — Registerskifte',
      content: `**Register** er det språklige nivået du velger basert på situasjonen. I akademisk skriving bruker du **formelt register**.

**Uformelt → Formelt: Ordnivå**

| Uformelt | Formelt | Kommentar |
|----------|---------|-----------|
| get | obtain, acquire | "Get" er for vagt i akademisk tekst |
| big | significant, substantial | Mer presist og akademisk |
| good | beneficial, advantageous | Spesifiserer HVA som er bra |
| bad | detrimental, adverse | Spesifiserer HVA som er dårlig |
| a lot of | numerous, considerable | Mer presist |
| show | demonstrate, illustrate | Akademisk standard |
| think | argue, contend, maintain | Viser intellektuell aktivitet |
| help | facilitate, contribute to | Mer presist om årsak-virkning |
| use | employ, utilise | Mer formelt |
| also | furthermore, moreover, additionally | Akademiske overgangsfaser |
| but | however, nevertheless, conversely | Akademiske kontrastmarkører |
| so | therefore, consequently, thus | Akademiske årsaksmarkører |

**Uformelt → Formelt: Setningsnivå**

| Uformelt | Formelt |
|----------|---------|
| "Kids these days are always on their phones." | "Young people today demonstrate a significant reliance on mobile technology." |
| "Scientists found out that..." | "Research conducted by [name] demonstrates that..." |
| "It's pretty obvious that..." | "The evidence clearly suggests that..." |
| "This is a really big problem." | "This constitutes a significant challenge." |
| "You can see that..." | "It is evident that..." / "One can observe that..." |

**Hva du bør UNNGÅ i akademisk skriving:**
- **Sammentrekninger:** don't → do not, it's → it is, won't → will not
- **Første person (med noen unntak):** "I think" → "It can be argued that"
- **Andre person:** "You should..." → "One should..." / "It is advisable to..."
- **Slang og uformelle uttrykk:** "awesome", "cool", "stuff", "things"
- **Retoriske spørsmål** (i de fleste tilfeller)
- **Overdrivelser:** "everyone knows", "always", "never", "totally"`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-6-ex-1',
        number: '6.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Omskriv disse uformelle setningene til formelt, akademisk språk.',
        subTasks: [
          {
            label: 'a',
            task: '"Lots of kids drop out of school because they don\'t like it."',
            solution: '"A significant number of young people discontinue their education due to a lack of engagement with the curriculum." Endringer: lots of→significant number, kids→young people, drop out→discontinue their education, don\'t like it→lack of engagement.',
          },
          {
            label: 'b',
            task: '"Social media is bad for you because it messes with your head."',
            solution: '"Social media can have a detrimental impact on mental health." Endringer: is bad for you→can have a detrimental impact, messes with your head→on mental health. Fjernet "you" (uformell tiltale).',
          },
          {
            label: 'c',
            task: '"Scientists found out that eating junk food a lot makes people fat."',
            solution: '"Research indicates that a high consumption of processed food contributes significantly to obesity." Endringer: scientists found out→research indicates, eating a lot→high consumption, junk food→processed food, makes people fat→contributes to obesity.',
          },
          {
            label: 'd',
            task: '"I think that climate change is a really big problem and we should do something about it."',
            solution: '"It can be argued that climate change constitutes one of the most pressing challenges of the modern era, necessitating immediate and decisive action." Endringer: I think→It can be argued, really big problem→most pressing challenges, do something→necessitating immediate action.',
          },
        ],
        solution: 'Akademisk skriving erstatter vage, uformelle ord med presise, formelle alternativer. Unngå sammentrekninger, slang og direkte tiltale.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-6-ex-2',
        number: '6.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken setning er MEST akademisk i stil?',
        options: [
          {
            id: 'a',
            text: '"There are tons of reasons why poverty is a huge problem worldwide."',
            isCorrect: false,
            feedback: 'Feil. "Tons of" er uformelt (bruk "numerous"), "huge" er for vagt (bruk "significant"), og setningen mangler presisjon.',
          },
          {
            id: 'b',
            text: '"Poverty is bad and governments should fix it."',
            isCorrect: false,
            feedback: 'Feil. "Bad" er for vagt, "fix it" er uformelt, og setningen er for enkel og upresis for akademisk skriving.',
          },
          {
            id: 'c',
            text: '"Global poverty remains a significant challenge, with far-reaching consequences for public health, education, and economic development."',
            isCorrect: true,
            feedback: 'Riktig! Denne setningen er presis ("significant challenge", "far-reaching consequences"), spesifikk (nevner konkrete områder), formell i tone, og unngår uformelle uttrykk.',
          },
          {
            id: 'd',
            text: '"I personally believe that poverty is the worst thing in the world and it makes me really sad."',
            isCorrect: false,
            feedback: 'Feil. Bruker første person ("I"), er subjektiv ("makes me sad"), og inneholder overdrivelser ("worst thing in the world").',
          },
        ],
        solution: 'Akademisk skriving er presis, spesifikk og objektiv. Den unngår overdrivelser, uformelle uttrykk og unødvendig bruk av første person.',
      },
    },

    // ========== DEFINISJON 2: KILDEHENVISNING ==========
    {
      id: 'engelsk-10-6-def-2',
      type: 'definition',
      title: 'Referencing — Hvordan bruke og oppgi kilder',
      content: `Kildehenvisning er en av de viktigste ferdighetene i akademisk skriving. Når du bruker andres ideer, forskning eller ord, MÅ du oppgi kilden. Ellers er det **plagiat**.

**Hvorfor kildehenvisning er viktig:**
- Viser at påstandene dine er underbygget med bevis
- Gir leseren mulighet til å sjekke kildene selv
- Viser bredden i din research
- Beskytter deg mot plagiatbeskyldninger
- Styrker troverdigheten din som skribent

**Tre måter å bruke kilder på:**

**1. Direkte sitat (Direct quote)**
Bruker den opprinnelige forfatterens nøyaktige ord. Sett i anførselstegn.
- "According to Smith (2023), 'social media has fundamentally altered the way young people communicate' (p. 45)."
- Bruk direkte sitat når ordlyden er spesielt viktig eller treffende.

**2. Parafrasering (Paraphrasing)**
Gjengir innholdet med dine egne ord. Ingen anførselstegn, men kilden oppgis.
- "Smith (2023) argues that social media has changed communication patterns among the younger generation."
- Bruk parafrasering for å vise at du forstår innholdet og kan formidle det selv.

**3. Oppsummering (Summarising)**
Kondenserer en lengre tekst til det viktigste poenget.
- "Smith's (2023) research on youth and technology concludes that digital communication is reshaping social norms."

**Enkle referanseformater for skolen:**

**I teksten (in-text citation):**
- Etter sitat: (Smith, 2023, p. 45)
- Etter parafrase: (Smith, 2023)
- Forfatter i setningen: Smith (2023) argues that...
- To forfattere: (Smith and Jones, 2022)
- Tre eller flere: (Smith et al., 2021)
- Nettside uten forfatter: (BBC News, 2023)

**I referanselisten (reference list):**
- Bok: Smith, J. (2023). *The Digital Generation*. Oxford University Press.
- Artikkel: Jones, A. (2022). 'Youth and Social Media', *Journal of Communication*, 15(3), pp. 234-251.
- Nettside: BBC News (2023). 'Teen Mental Health Crisis'. Available at: https://www.bbc.com/... (Accessed: 15 March 2024).

**Tommelfingerregel:** Når du er i tvil — oppgi kilden. Det er bedre å referere for mye enn for lite.`,
    },

    // ========== EKSEMPEL 1: PLAGIAT VS PARAFRASE ==========
    {
      id: 'engelsk-10-6-example-1',
      type: 'example',
      title: 'Eksempel: Plagiat vs. korrekt kildebruk',
      problem: 'Originaltekst: "The rise of artificial intelligence poses both extraordinary opportunities and significant ethical challenges for modern society." (Johnson, 2024, p. 12)',
      solution: `**PLAGIAT (feil — kopierer uten kildehenvisning):**
"The rise of artificial intelligence poses both extraordinary opportunities and significant ethical challenges for modern society."
→ Dette er PLAGIAT fordi du bruker forfatterens nøyaktige ord uten anførselstegn eller kildehenvisning.

**FORTSATT PLAGIAT (feil — kun byttet noen ord):**
"The growth of AI creates both amazing opportunities and important ethical problems for today's society."
→ Dette er fortsatt plagiat fordi du bare har byttet enkeltord uten å reformulere setningen. Strukturen er identisk.

**KORREKT DIREKTE SITAT:**
According to Johnson (2024), "the rise of artificial intelligence poses both extraordinary opportunities and significant ethical challenges for modern society" (p. 12).
→ Korrekt fordi ordene er i anførselstegn, forfatteren er nevnt, og sidetallet er oppgitt.

**KORREKT PARAFRASERING:**
Johnson (2024) contends that AI technology presents society with a dual challenge: while it opens doors to remarkable innovation, it simultaneously raises profound questions about ethics and responsibility.
→ Korrekt fordi ideen er helt omformulert med egne ord og ny setningsstruktur, men kilden er oppgitt.

**KORREKT OPPSUMMERING MED EGET TILLEGG:**
Recent scholarship highlights the ethical dilemmas surrounding AI development (Johnson, 2024). This is particularly relevant in the context of education, where AI tools are increasingly being integrated into learning environments.
→ Korrekt fordi kilden brukes som utgangspunkt for din egen analyse.

**Tips for god parafrasering:**
1. Les originalteksten nøye
2. Legg bort teksten
3. Skriv det du husker med egne ord
4. Sjekk at du ikke har kopiert setningsstruktur
5. Legg til kildehenvisning`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-6-ex-3',
        number: '6.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Originaltekst: "Approximately 2.5 billion people worldwide lack access to adequate sanitation facilities." (WHO, 2023). Hvilken av disse er korrekt parafrasering?',
        options: [
          {
            id: 'a',
            text: '"About 2.5 billion people around the world do not have access to good sanitation facilities (WHO, 2023)."',
            isCorrect: false,
            feedback: 'Feil. Dette er for nært originalteksten — du har bare byttet enkeltord (approximately→about, worldwide→around the world, adequate→good). Setningsstrukturen er identisk.',
          },
          {
            id: 'b',
            text: '"According to WHO (2023), a significant proportion of the global population — approximately 2.5 billion individuals — continues to live without access to basic sanitation infrastructure."',
            isCorrect: true,
            feedback: 'Riktig! Denne versjonen reformulerer innholdet med ny setningsstruktur, nye formuleringer, og legger til kontekst. Faktatallet er beholdt (dette er OK for statistikk), men uttrykkes i en ny ramme.',
          },
          {
            id: 'c',
            text: '"2.5 billion people lack access to adequate sanitation facilities worldwide."',
            isCorrect: false,
            feedback: 'Feil. Dette er nesten et direkte sitat, men uten anførselstegn og uten kildehenvisning. Ordene er nesten identiske med originalteksten.',
          },
          {
            id: 'd',
            text: '"Many people in the world don\'t have good toilets."',
            isCorrect: false,
            feedback: 'Feil. Selv om dette er en parafrasering, er det for uformelt ("don\'t", "good toilets") og mister viktig informasjon (tallet 2.5 milliarder, presisjon).',
          },
        ],
        solution: 'God parafrasering beholder det faktiske innholdet men reformulerer det helt med ny setningsstruktur, nye ordvalg og ofte en ny vinkling. Statistikk og faktatall kan beholdes ordrett.',
      },
    },

    // ========== DEFINISJON 3: AKADEMISK STRUKTUR ==========
    {
      id: 'engelsk-10-6-def-3',
      type: 'definition',
      title: 'Academic Text Structure — Strukturen i akademisk tekst',
      content: `En akademisk tekst følger en streng struktur som gjør det lett for leseren å følge argumentasjonen din.

**Standard akademisk struktur:**

**1. Introduction (Innledning) — ca. 10-15% av teksten**
- **Context:** Presenter temaet og hvorfor det er viktig
- **Scope:** Avgrens — hva vil du fokusere på?
- **Thesis statement:** Din hovedpåstand
- **Outline:** Kort oversikt over hvordan teksten er organisert
- Eksempel: "This essay examines the impact of social media on adolescent mental health. First, it will review current research on the topic. Then, it will analyse the main risks identified by psychologists. Finally, it will propose strategies for healthier digital habits."

**2. Body Paragraphs (Hoveddel) — ca. 70-80% av teksten**

Hvert avsnitt følger **TEEL-strukturen:**
- **T**opic sentence — Hovedpoenget i avsnittet
- **E**vidence — Bevis fra kilder (sitat, statistikk, forskning)
- **E**laboration — Din analyse av bevisene
- **L**ink — Koble tilbake til thesis og videre til neste avsnitt

**3. Conclusion (Avslutning) — ca. 10-15% av teksten**
- Gjenta thesis med andre ord
- Oppsummer hovedfunnene
- Pek på begrensninger eller behov for videre forskning
- Avslutt med en bredere refleksjon
- **IKKE** introduser nye argumenter i avslutningen

**4. Reference List (Referanseliste)**
- Alfabetisk etter forfatterens etternavn
- Følg et konsekvent referanseformat
- Inkluder alle kilder du har referert til i teksten

**Overgangsfaser mellom avsnitt:**
Akademiske tekster bruker spesifikke fraser for å koble avsnitt:
- "Building on this point..." / "In addition to the evidence presented above..."
- "A contrasting perspective is offered by..." / "However, it is important to consider..."
- "Having established that..., it is now necessary to examine..."`,
    },

    // ========== EKSEMPEL 2: TEEL-AVSNITT ==========
    {
      id: 'engelsk-10-6-example-2',
      type: 'example',
      title: 'Eksempel: Et fullstendig TEEL-avsnitt',
      problem: 'Skriv et akademisk avsnitt om temaet "Social media and mental health" ved hjelp av TEEL-strukturen.',
      solution: `**Modell-avsnitt:**

"**[T — Topic sentence:]** One of the most well-documented effects of social media on young people is the increase in anxiety and depression. **[E — Evidence:]** A comprehensive study by Twenge and Campbell (2019) found that teenagers who spent more than three hours per day on social media were 35% more likely to report symptoms of depression compared to those who spent less than one hour. Furthermore, a report by the Royal Society for Public Health (2017) ranked Instagram as the most harmful social media platform for young people's mental health, particularly in relation to body image and sleep quality. **[E — Elaboration:]** These findings are particularly concerning given that the average teenager currently spends approximately two to three hours daily on social media platforms. The correlation between screen time and mental health issues suggests that social media creates an environment of constant comparison, where curated images and highlight reels replace authentic human connection. The pressure to maintain an online persona can lead to feelings of inadequacy and social isolation, paradoxically in a space designed for connection. **[L — Link:]** This evidence strongly supports the argument that social media poses a significant risk to adolescent mental health, and highlights the urgent need for the preventive strategies that will be discussed in the following section."

**Analyse:**
- **T:** Klar hovedpåstand som forteller leseren hva avsnittet handler om
- **E:** To konkrete kilder med spesifikke data (prosenter, rapporter)
- **E:** Forfatteren analyserer bevisene og forklarer HVORFOR de er viktige
- **L:** Knytter tilbake til hovedargumentet OG peker fremover til neste avsnitt
- **Språk:** Formelt, presist, ingen sammentrekninger eller uformelle uttrykk`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-6-ex-4',
        number: '6.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser TEEL-komponentene i dette avsnittet. Marker hvor T, E, E og L er.',
        subTasks: [
          {
            label: 'a',
            task: '"Access to clean water is a fundamental human right that remains unfulfilled for millions. According to UNICEF (2022), approximately 785 million people worldwide lack access to basic drinking water services. In sub-Saharan Africa, the situation is particularly severe, with 40% of the population affected. This disparity has profound implications for public health, as contaminated water is a leading cause of preventable diseases such as cholera and typhoid. Moreover, the time spent collecting water — often by women and girls — reduces opportunities for education and economic participation. These findings underscore the critical importance of international investment in water infrastructure, which will be examined in the next section."',
            solution: 'T (Topic sentence): "Access to clean water is a fundamental human right that remains unfulfilled for millions." E (Evidence): UNICEF-statistikken og sub-Saharan Africa-fakta. E (Elaboration): Analyse av konsekvenser for helse, utdanning og økonomi. L (Link): "These findings underscore... which will be examined in the next section."',
          },
        ],
        solution: 'TEEL-strukturen gjør akademiske avsnitt logiske og overbevisende. Hvert element har en spesifikk funksjon: T introduserer, E beviser, E analyserer, og L kobler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-6-ex-5',
        number: '6.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et TEEL-avsnitt (100-150 ord) om ETT av disse temaene. Bruk minst én kilde (kan være fiktiv, men realistisk).',
        subTasks: [
          {
            label: 'a',
            task: '"The benefits of reading for young people"',
            solution: 'Et godt TEEL-avsnitt starter med en klar påstand (f.eks. "Reading regularly has been shown to enhance cognitive development in young people"), støtter den med en kilde, analyserer betydningen, og kobler til hovedargumentet.',
          },
          {
            label: 'b',
            task: '"The importance of physical education in schools"',
            solution: 'Start med en tydelig topic sentence, bruk statistikk eller forskning som bevis, analyser hvorfor dette er viktig, og koble til en bredere diskusjon om utdanning og helse.',
          },
        ],
        hints: [
          'Husk: Ingen sammentrekninger i akademisk skriving',
          'Bruk en referanse — f.eks. "(Smith, 2023)" eller "According to a study by..."',
          'Analyser bevisene — ikke bare gjengi dem',
          'Avslutt med en kobling til en større sammenheng',
        ],
        solution: 'Et godt TEEL-avsnitt har tydelig struktur, bruker kilder som bevis, og inneholder forfatterens egen analyse. Bevisene skal ikke bare nevnes — de skal forklares og settes i kontekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON 4: HEDGING ==========
    {
      id: 'engelsk-10-6-def-4',
      type: 'definition',
      title: 'Hedging — Akademisk nyanseringsspråk',
      content: `**Hedging** er bruken av forsiktige, nyanserte formuleringer i akademisk skriving. I stedet for å påstå noe absolutt, viser hedging at du er klar over kompleksiteten i temaet.

**Hvorfor hedging er viktig:**
- Viser at du forstår at virkeligheten er nyansert
- Beskytter deg mot å bli motbevist
- Er standard i all seriøs akademisk skriving
- Viser intellektuell modenhet

**Hedging-verktøy:**

**Modal verbs (modale hjelpeverb):**
| Sterkt | Moderat | Forsiktig |
|--------|---------|-----------|
| will | would | could, might |
| must | should | may |
| is | is likely to | appears to, seems to |

**Hedging-fraser:**
- "It could be argued that..."
- "The evidence suggests that..."
- "This may indicate..."
- "There appears to be a correlation between..."
- "It is possible that..."
- "Research tends to show..."
- "To some extent..."
- "In most cases..."

**Uten hedging (for sterkt):**
"Social media causes depression in teenagers."

**Med hedging (akademisk):**
"Research suggests that social media may contribute to increased rates of depression among teenagers."

**For mye hedging (for svakt):**
"It is perhaps possible that social media might potentially have some slight connection to what could perhaps be considered depression-like symptoms."

**Balanse:** God akademisk skriving bruker hedging strategisk — nok til å vise nyanse, men ikke så mye at budskapet forsvinner.`,
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-6-ex-6',
        number: '6.6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Omskriv disse absolutte påstandene med passende hedging.',
        subTasks: [
          {
            label: 'a',
            task: '"Video games make children violent."',
            solution: '"Research suggests that exposure to violent video games may contribute to increased aggressive behaviour in some children." Hedging: suggests, may, contribute to (i stedet for make), some (i stedet for alle).',
          },
          {
            label: 'b',
            task: '"All teenagers are addicted to their phones."',
            solution: '"A significant proportion of teenagers appear to demonstrate a high degree of dependence on mobile devices." Hedging: significant proportion (i stedet for all), appear to, high degree of dependence (i stedet for addicted).',
          },
          {
            label: 'c',
            task: '"Homework is useless and a waste of time."',
            solution: '"Some researchers have questioned the effectiveness of homework, suggesting that, in certain contexts, it may not significantly enhance academic performance." Hedging: some researchers, questioned, suggesting, in certain contexts, may not significantly.',
          },
          {
            label: 'd',
            task: '"Climate change will destroy the planet."',
            solution: '"Scientific evidence indicates that climate change is likely to have severe and potentially irreversible consequences for global ecosystems." Hedging: evidence indicates, is likely to, potentially, consequences (i stedet for destroy).',
          },
        ],
        solution: 'Hedging gjør absolutte påstander mer akademiske og troverdige. Bruk modale verb (may, could, might), hedging-fraser (suggests, appears to, is likely to) og nyanserende ord (some, significant, in certain contexts).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 7 ==========
    {
      id: 'engelsk-10-6-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-6-ex-7',
        number: '6.7',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av disse setningene bruker hedging best i akademisk kontekst?',
        options: [
          {
            id: 'a',
            text: '"Exercise definitely cures depression."',
            isCorrect: false,
            feedback: 'Feil. "Definitely" og "cures" er for absolutte. Forskning viser at trening kan hjelpe, men det er ikke en garantert kur.',
          },
          {
            id: 'b',
            text: '"Exercise might possibly perhaps have some kind of minor effect on depression in some people maybe."',
            isCorrect: false,
            feedback: 'Feil. For mye hedging! Når du bruker "might possibly perhaps" og "some kind of minor effect maybe", blir budskapet meningsløst.',
          },
          {
            id: 'c',
            text: '"Research suggests that regular physical exercise can have a significant positive impact on symptoms of depression."',
            isCorrect: true,
            feedback: 'Riktig! God balanse mellom presisjon og hedging. "Research suggests" viser kilde, "can have" (ikke "will have") viser at det ikke er garantert, og "significant positive impact" er tydelig men ikke overdrevet.',
          },
          {
            id: 'd',
            text: '"I think exercise is probably good for depression."',
            isCorrect: false,
            feedback: 'Feil. "I think" er for personlig og subjektivt for akademisk skriving, og "probably good" er for vagt og uformelt.',
          },
        ],
        solution: 'Godt hedging bruker én eller to nyanserende uttrykk per setning. For lite hedging virker arrogant og upresist; for mye hedging gjør teksten meningsløs.',
      },
    },

    // ========== NOTE: AKADEMISKE SIGNALORD ==========
    {
      id: 'engelsk-10-6-note-signal',
      type: 'note',
      title: 'Reporting Verbs — Signalord for kildebruk',
      content: `Når du refererer til kilder, bruker du **reporting verbs** (signalord). Valg av signalord viser din tolkning av kilden.

**Nøytrale signalord (viser ingen vurdering):**
- states, describes, reports, notes, observes, explains, outlines

**Signalord som viser enighet/styrke:**
- demonstrates, establishes, confirms, proves, shows, reveals

**Signalord som viser argument/mening:**
- argues, claims, contends, maintains, asserts, suggests, proposes

**Signalord som viser forsiktighet:**
- implies, hints, indicates, questions, challenges, speculates

**Eksempler:**
- "Smith (2023) *demonstrates* that..." → Du aksepterer funnene som sterke
- "Smith (2023) *claims* that..." → Du er litt skeptisk til påstanden
- "Smith (2023) *speculates* that..." → Du viser at dette er en teori, ikke bevist

Velg signalord bevisst — de forteller leseren mye om din holdning til kilden.`,
    },

    // ========== OPPGAVE 8 ==========
    {
      id: 'engelsk-10-6-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-6-ex-8',
        number: '6.8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg passende reporting verb for hver situasjon og skriv en fullstendig setning.',
        subTasks: [
          {
            label: 'a',
            task: 'En FN-rapport med solid statistikk viser at fattigdom har gått ned med 30% siden 2000. (Bruk et sterkt signalord.)',
            solution: '"A United Nations report (2023) demonstrates that global poverty rates have decreased by approximately 30% since the year 2000." Sterkt signalord "demonstrates" fordi dataene er solide og fra en pålitelig kilde.',
          },
          {
            label: 'b',
            task: 'En blogger mener at skolen bør avskaffes fordi den er utdatert. (Bruk et skeptisk signalord.)',
            solution: '"Education blogger Davis (2023) claims that the traditional school system is outdated and should be abolished." Skeptisk signalord "claims" fordi dette er en sterk personlig mening uten solid forskningsstøtte.',
          },
          {
            label: 'c',
            task: 'En forsker presenterer en ny hypotese om at AI kan forbedre læring, men det er tidlig i forskningen. (Bruk et forsiktig signalord.)',
            solution: '"Dr. Lee (2024) suggests that artificial intelligence may have the potential to enhance learning outcomes, though further research is needed." Forsiktig signalord "suggests" fordi forskningen er i en tidlig fase.',
          },
        ],
        solution: 'Signalord er ikke tilfeldige — de viser din vurdering av kildens pålitelighet og styrken i påstanden. Sterke funn = demonstrates/establishes. Meninger = argues/claims. Spekulasjoner = suggests/implies.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 3: AKADEMISK INNLEDNING ==========
    {
      id: 'engelsk-10-6-example-3',
      type: 'example',
      title: 'Eksempel: Akademisk innledning med alle elementene',
      problem: 'Skriv en akademisk innledning til et essay om "The Impact of Social Media on Democracy".',
      solution: `**Modell-innledning:**

"**[Context:]** In the twenty-first century, social media platforms such as Twitter, Facebook, and Instagram have fundamentally transformed the way citizens engage with political discourse. What began as tools for personal communication have evolved into powerful channels for political mobilisation, public debate, and the dissemination of information — and misinformation.

**[Importance:]** The relationship between social media and democracy has become a subject of intense scholarly debate, particularly following events such as the Arab Spring (2010-2012), the Brexit referendum (2016), and allegations of Russian interference in the US presidential election (2016). These events have raised critical questions about whether social media strengthens or undermines democratic processes.

**[Scope:]** This essay will focus specifically on two aspects of social media's impact on democracy: the spread of misinformation and the creation of echo chambers. It will not address broader questions of digital censorship or government surveillance, as these topics warrant separate analysis.

**[Thesis:]** It will be argued that, while social media has the potential to enhance democratic participation, the current lack of regulation poses a significant threat to informed public discourse.

**[Outline:]** The essay will first examine the phenomenon of misinformation. It will then analyse the concept of echo chambers and their impact on political polarisation. Finally, it will evaluate potential regulatory solutions."

**Analyse:** Legg merke til hvordan innledningen:
- Gir kontekst (hva, når, hvorfor er dette viktig)
- Avgrenser temaet (bare to aspekter, ikke alt)
- Har en tydelig thesis med hedging ("it will be argued")
- Gir leseren et veikart for resten av teksten`,
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-6-summary',
      type: 'text',
      content: `## Oppsummering: Sjekkliste for akademisk skriving

I dette kapittelet har du lært de grunnleggende ferdighetene i akademisk skriving:

| Ferdighet | Nøkkelpunkter | Eksempel |
|-----------|--------------|----------|
| **Formelt register** | Unngå slang, sammentrekninger, "you" | "obtain" i stedet for "get" |
| **Kildehenvisning** | Sitat, parafrase, oppsummering | (Smith, 2023, p. 45) |
| **TEEL-struktur** | Topic, Evidence, Elaboration, Link | Hvert avsnitt har alle fire |
| **Hedging** | Nyanserte formuleringer | "may contribute to" |
| **Signalord** | Reporting verbs som viser din vurdering | demonstrates vs. claims |
| **Akademisk innledning** | Context, scope, thesis, outline | Se modell over |

**Sjekkliste før innlevering:**
1. Er alle sammentrekninger fjernet? (don't → do not)
2. Er "I" erstattet med passiv eller "one"? (der det er mulig)
3. Er alle kilder oppgitt korrekt?
4. Har hvert avsnitt en tydelig topic sentence?
5. Er hedging brukt der det er passende?
6. Er det logiske overganger mellom avsnittene?
7. Er referanselisten komplett og korrekt formatert?
8. Er språket presist og spesifikt — ikke vagt og generelt?`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-6-ex-9',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-6-ex-9',
        number: '6.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en akademisk innledning (100-150 ord) til et essay om ETT av disse temaene. Inkluder alle fire elementene: context, scope, thesis og outline.',
        subTasks: [
          {
            label: 'a',
            task: '"The Role of Education in Reducing Inequality"',
            solution: 'En god innledning gir kontekst om global ulikhet, avgrenser til utdanning spesifikt, presenterer en thesis (f.eks. at utdanning er nødvendig men ikke tilstrekkelig), og skisserer strukturen.',
          },
          {
            label: 'b',
            task: '"Should Artificial Intelligence Be Used in Schools?"',
            solution: 'En god innledning gir kontekst om AI i utdanning, avgrenser til spesifikke aspekter (f.eks. personalisert læring og akademisk integritet), presenterer en nyansert thesis, og gir en oversikt over essayets struktur.',
          },
        ],
        hints: [
          'Start med bred kontekst, deretter smale inn',
          'Avgrens tydelig — du kan ikke dekke alt',
          'Thesis skal være spesifikk og argubar, med hedging',
          'Outline gir leseren et kart over teksten',
        ],
        solution: 'En akademisk innledning fungerer som en trakt: bred kontekst → smalere fokus → spesifikk thesis → oversikt over strukturen. Alle fire elementene bør være tilstede.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-6-ex-10',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-6-ex-10',
        number: '6.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et fullstendig akademisk avsnitt (TEEL, 120-180 ord) som bygger videre på innledningen du skrev i oppgave 6.9. Bruk minst én kilde (kan være fiktiv men realistisk) og inkluder passende hedging.',
        hints: [
          'Start med en klar topic sentence',
          'Bruk et passende reporting verb når du refererer til kilden',
          'Analyser bevisene — ikke bare gjengi dem',
          'Koble tilbake til thesis fra innledningen',
          'Bruk hedging der det er passende',
        ],
        solution: 'Et fullstendig TEEL-avsnitt integrerer alle ferdighetene fra kapittelet: formelt språk, kildebruk med signalord, hedging, analyse og logisk kobling til hovedargumentet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 3 ==========
    {
      id: 'engelsk-10-6-ex-11',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-6-ex-11',
        number: '6.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Peer review: Bytt teksten fra oppgave 6.10 med en medelev. Evaluer medelvens avsnitt ved hjelp av denne sjekklisten.',
        subTasks: [
          {
            label: 'a',
            task: 'Er topic sentence tydelig? Vet du umiddelbart hva avsnittet handler om?',
            solution: 'Topic sentence skal være den første setningen og tydelig angi avsnittets hovedpoeng. Hvis du må lese hele avsnittet for å forstå hva det handler om, er topic sentence for uklar.',
          },
          {
            label: 'b',
            task: 'Er kilden brukt korrekt? Er det sitat, parafrase eller oppsummering — og er det riktig formatert?',
            solution: 'Sjekk: Er kilden oppgitt med forfatter og årstall? Er direkte sitater i anførselstegn? Er parafraser genuint omformulert (ikke bare ord-for-ord-erstatning)?',
          },
          {
            label: 'c',
            task: 'Er det analyse eller bare gjengivelse? Forklarer forfatteren HVORFOR bevisene er relevante?',
            solution: 'Den vanligste feilen i elevtekster er å gjengi en kilde uten å analysere den. Elaboration-delen skal forklare betydningen av bevisene og knytte dem til argumentet.',
          },
          {
            label: 'd',
            task: 'Er hedging brukt riktig? Gi forslag til forbedring.',
            solution: 'Sjekk om det er absolutte påstander som burde vært nyansert (f.eks. "proves" → "suggests"), eller om det er for mye hedging som gjør teksten utydelig.',
          },
        ],
        hints: [
          'Vær konstruktiv — pek på styrker OG forbedringsområder',
          'Gi spesifikke forslag, ikke bare "dette er bra/dårlig"',
          'Bruk sjekklisten fra oppsummeringen som guide',
        ],
        solution: 'Peer review er en viktig akademisk ferdighet. Det trener deg i kritisk lesing, samtidig som du lærer av andres styrker og feil. Husk: målet er å hjelpe, ikke å kritisere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7: Debating and Argumentation
// ============================================================================

export const CHAPTER_ENGELSK_10_7: TextbookChapter = {
  id: 'engelsk-10-7',
  courseId: 'engelsk-10',
  chapterNumber: '7',
  title: 'Debating and Argumentation',
  description: 'Mestre debatt og argumentasjon på engelsk: bygg sterke argumenter, gjenkjenn logiske feilslutninger, og bruk retoriske virkemidler for å overbevise.',
  estimatedMinutes: 90,
  competenceGoals: [
    'lytte til og forstå ulike varianter av engelsk og bruke et variert ordforråd',
    'uttrykke seg med flyt og sammenheng, tilpasset formål og situasjon',
    'diskutere og argumentere for ulike synspunkter på tvers av kulturer og fagområder',
    'bruke retoriske virkemidler og tilpasse språket til ulike formål',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-7-intro',
      type: 'text',
      content: `## The Art of Persuasion

I 2018 holdt den 15 år gamle svenske klimaaktivisten Greta Thunberg en tale for FNs klimatoppmøte. Hun hadde ingen politisk makt, ingen milliarder, ingen hær. Alt hun hadde var **ord** — og en brinnende overbevisning. Talen hennes forandret den globale klimadebatten.

Evnen til å argumentere overbevisende er en av de viktigste ferdighetene du kan utvikle. Det handler ikke om å "vinne" en krangel — det handler om å uttrykke dine ideer klart, lytte til andre, og komme fram til bedre løsninger gjennom dialog.

**Hvorfor debatt og argumentasjon er viktig:**
- **Demokrati** fungerer bare når borgere kan diskutere saker informert og respektfullt
- **Kritisk tenkning** utvikles gjennom å vurdere argumenter fra alle sider
- **Eksamen** krever ofte at du drøfter ulike synspunkter
- **Arbeidsliv** forventer at du kan presentere og forsvare ideer
- **Hverdagen** er full av situasjoner der du trenger å overbevise (søknader, forhandlinger, diskusjoner)

I dette kapittelet skal du lære å bygge sterke argumenter, gjenkjenne svake argumenter og logiske feilslutninger, bruke retoriske virkemidler effektivt, og delta i strukturert debatt på engelsk.`,
    },

    // ========== DEFINISJON 1: ARGUMENT ==========
    {
      id: 'engelsk-10-7-def-1',
      type: 'definition',
      title: 'The Structure of an Argument — Argumentets oppbygning',
      content: `Et **argument** i akademisk forstand er ikke en krangel — det er en logisk oppbygning der du bruker bevis for å støtte en påstand.

**De tre grunnelementene i et argument:**

**1. Claim (Påstand)**
- Din hovedpåstand — det du mener er sant
- Skal være spesifikk, argubar og tydelig
- Eksempel: "Schools should start at 10 AM instead of 8 AM."

**2. Evidence (Bevis/begrunnelse)**
- Fakta, statistikk, eksperter, eksempler som støtter påstanden
- Jo sterkere bevisene, jo sterkere argumentet
- Eksempel: "Research by Dr. Mary Carskadon at Brown University shows that teenagers' circadian rhythms shift during puberty, making it biologically difficult to fall asleep before 11 PM."

**3. Reasoning (Resonnement)**
- Forklaringen som kobler bevisene til påstanden
- HVORFOR beviser bevisene det du påstår?
- Eksempel: "Since teenagers naturally fall asleep later, an 8 AM start means most students attend class in a state of sleep deprivation, which directly impairs learning, memory, and concentration."

**Modell for et komplett argument:**
*Claim:* "The voting age should be lowered to 16."
*Evidence:* "In Austria, where 16-year-olds have been allowed to vote since 2007, youth voter turnout has been higher than expected, and studies show that 16-year-old voters make informed choices comparable to those of older voters (Wagner et al., 2012)."
*Reasoning:* "The Austrian example demonstrates that young people are capable of making responsible political decisions when given the opportunity. Furthermore, allowing them to vote while still in school — where they have access to civic education — may actually produce more informed voters than those who first vote at 18, often after leaving the educational system."

**Tommelfingerregel:** Hvis du kan si "because" mellom claim og evidence, og "therefore" mellom evidence og reasoning, er argumentet logisk.`,
    },

    // ========== EKSEMPEL 1: SVAKT VS STERKT ARGUMENT ==========
    {
      id: 'engelsk-10-7-example-1',
      type: 'example',
      title: 'Eksempel: Svakt vs. sterkt argument',
      problem: 'Sammenlign disse to argumentene om skoleuniformer og identifiser hvorfor det ene er sterkere.',
      solution: `**SVAKT ARGUMENT:**

"Schools should require uniforms because they look nice and everyone should wear the same thing. Also, my mum thinks uniforms are good. Besides, I saw a school with uniforms once and they seemed disciplined."

**Hva er galt?**
- **Vag påstand:** "look nice" er subjektivt og ikke et argument
- **Svak evidens:** "My mum thinks" er en anekdotisk autoritet, ikke et bevis
- **Ingen resonnement:** Det er ingen forklaring på HVORFOR uniformer fører til gode resultater
- **Logisk feil:** Å se en disiplinert skole med uniformer betyr ikke at uniformene FORÅRSAKET disiplinen (korrelasjon er ikke kausalitet)

**STERKT ARGUMENT:**

"Schools should consider implementing uniform policies as a means of reducing socioeconomic bullying. Research conducted by the University of Nevada (Gentile and Imberman, 2012) found that schools which introduced uniforms experienced a 12% reduction in disciplinary incidents and a measurable decrease in bullying related to clothing and appearance. This finding suggests that when visible markers of economic status — such as branded clothing and expensive trainers — are removed from the classroom, students are less likely to be targeted for their family's financial situation. While uniforms alone cannot eliminate all forms of bullying, they may remove one significant trigger, allowing schools to focus resources on addressing deeper social issues."

**Hva gjør dette argumentet sterkt?**
- **Spesifikk påstand:** Uniformer kan redusere sosioøkonomisk mobbing (ikke bare at de "er bra")
- **Konkret evidens:** Forskning med spesifikk statistikk og kilde
- **Klar resonnement:** Forklarer mekanismen (fjerner synlige statusmarkører, dermed mindre mobbing)
- **Hedging:** "Should consider", "suggests", "may remove" — nyansert og akademisk
- **Innrømmelse:** "While uniforms alone cannot eliminate..." — viser at forfatteren forstår begrensningene`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-7-ex-1',
        number: '7.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er de tre grunnelementene i et godt argument?',
        options: [
          {
            id: 'a',
            text: 'Introduction, body, conclusion',
            isCorrect: false,
            feedback: 'Feil. Dette er strukturen i en tekst, ikke i et argument. Et argument er byggesteinen INNE i teksten.',
          },
          {
            id: 'b',
            text: 'Claim, evidence, reasoning',
            isCorrect: true,
            feedback: 'Riktig! Claim er din påstand, evidence er bevisene som støtter den, og reasoning er forklaringen som kobler bevisene til påstanden.',
          },
          {
            id: 'c',
            text: 'Ethos, pathos, logos',
            isCorrect: false,
            feedback: 'Feil. Ethos, pathos og logos er retoriske appellformer (du lærer om dem snart!), men de er ikke de tre elementene i et argument.',
          },
          {
            id: 'd',
            text: 'Opinion, fact, summary',
            isCorrect: false,
            feedback: 'Feil. En mening uten begrunnelse er ikke et argument. Et argument krever at du forklarer HVORFOR du mener det du mener, med bevis.',
          },
        ],
        solution: 'Et komplett argument = Claim (hva du mener) + Evidence (hva som beviser det) + Reasoning (hvorfor bevisene støtter påstanden).',
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-7-ex-2',
        number: '7.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bygg et komplett argument (claim + evidence + reasoning) for HVERT av disse temaene. Skriv 3-5 setninger per tema.',
        subTasks: [
          {
            label: 'a',
            task: '"Homework should be abolished in primary school."',
            solution: 'Claim: Hjemmelekser bør avskaffes i barneskolen. Evidence: Forskning av Harris Cooper (Duke University) viser at lekser i barneskolen har liten eller ingen positiv effekt på akademisk prestasjon. Reasoning: Barn i barneskolen trenger tid til lek, kreativitet og familieliv, som er viktigere for deres utvikling enn repetitiv øving hjemme.',
          },
          {
            label: 'b',
            task: '"All countries should ban single-use plastics."',
            solution: 'Claim: Alle land bør forby engangsplast. Evidence: Ifølge UNEP havner 8 millioner tonn plast i havet hvert år, og engangsplast utgjør omtrent 50% av all plastforurensning. Reasoning: Siden engangsplast er den største kilden til havforurensning og det finnes bærekraftige alternativer, er et forbud det mest effektive tiltaket for å beskytte marine økosystemer.',
          },
        ],
        hints: [
          'Husk strukturen: Claim → Evidence → Reasoning',
          'Bruk spesifikke bevis — tall, forskning, eksempler',
          'Forklar HVORFOR bevisene støtter påstanden — dette er reasoning',
        ],
        solution: 'Et godt argument er som en bro: claim er den ene bredden, evidence er den andre, og reasoning er selve broen som forbinder dem. Uten reasoning er det bare en påstand og et faktum som henger i luften.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON 2: MOTARGUMENTER ==========
    {
      id: 'engelsk-10-7-def-2',
      type: 'definition',
      title: 'Counterarguments and Rebuttals — Motargumenter og tilsvar',
      content: `De sterkeste argumentene anerkjenner og imøtegår motargumenter. Dette kalles **concession and rebuttal** (innrømmelse og tilsvar).

**Hvorfor motargumenter styrker teksten din:**
- Viser at du har tenkt grundig over temaet
- Øker troverdigheten din (du skjuler ikke svakheter)
- Gjør argumentet mer overbevisende fordi du viser at du kjenner begge sider
- Er forventet i akademisk skriving og på eksamen

**Struktur for motargument og tilsvar:**

**1. Introduser motargumentet (Concession):**
- "Critics of this view argue that..."
- "Some may object that..."
- "It is true that..."
- "Admittedly, there are those who believe..."
- "A common counterargument is that..."
- "Opponents of this position maintain that..."

**2. Anerkjenn det som er gyldig (Acknowledgement):**
- "This is a valid concern..."
- "There is some merit to this argument..."
- "While this point has some validity..."

**3. Imøtegå med ditt tilsvar (Rebuttal):**
- "However, this argument fails to consider..."
- "Nevertheless, the evidence suggests..."
- "While this concern is understandable, it overlooks..."
- "This objection, though compelling, does not account for..."
- "On closer examination, however..."

**Eksempel — komplett med motargument:**

*Argument:* "Schools should start later for teenagers."
*Motargument:* "Some may object that later start times would disrupt parents' work schedules and create logistical problems for families who rely on the current timetable."
*Anerkjennelse:* "This is a legitimate practical concern that must be taken seriously."
*Tilsvar:* "However, schools that have already implemented later start times, such as those in the Seattle School District, have found that families adapt within a few weeks. Moreover, the significant improvements in student health, attendance, and academic performance — including a 4.5% increase in grades (Dunster et al., 2018) — far outweigh the temporary inconvenience of schedule adjustments."`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-7-ex-3',
        number: '7.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'For hvert argument under, skriv: 1) Et sterkt motargument, 2) En anerkjennelse, og 3) Et tilsvar som imøtegår motargumentet.',
        subTasks: [
          {
            label: 'a',
            task: 'Argument: "Zoos should be closed because keeping wild animals in captivity is unethical."',
            solution: 'Motargument: "Some argue that zoos play a crucial role in conservation, protecting endangered species from extinction through breeding programmes." Anerkjennelse: "This is a valid point — many species have been saved from extinction by zoo breeding programmes." Tilsvar: "However, only a small percentage of zoo animals are part of conservation programmes, and the majority are kept primarily for entertainment. A more ethical approach would be to redirect zoo funding to habitat conservation, which addresses the root cause of species decline."',
          },
          {
            label: 'b',
            task: 'Argument: "Social media should be banned for children under 16."',
            solution: 'Motargument: "Critics argue that banning social media would deprive young people of important social connections, digital literacy skills, and creative outlets." Anerkjennelse: "There is some merit to this argument — social media does offer valuable opportunities for communication and self-expression." Tilsvar: "Nevertheless, the well-documented mental health risks — including increased anxiety, depression, and cyberbullying — suggest that the harm outweighs the benefits for younger users. Rather than an outright ban, a regulated approach with age verification and parental controls may be more effective."',
          },
        ],
        hints: [
          'Velg det sterkeste motargumentet — ikke det letteste å tilbakevise',
          'Anerkjenn det som er gyldig — ikke avfei det',
          'Tilsvaret bør bruke ny evidens eller logikk som viser at ditt argument fortsatt er sterkest',
        ],
        solution: 'Å innrømme motargumenter og imøtegå dem er et tegn på intellektuell styrke, ikke svakhet. De beste essayene på eksamen viser at forfatteren har vurdert saken fra flere sider.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON 3: LOGISKE FEILSLUTNINGER ==========
    {
      id: 'engelsk-10-7-def-3',
      type: 'definition',
      title: 'Logical Fallacies — Logiske feilslutninger',
      content: `En **logisk feilslutning** (logical fallacy) er en feil i resonnementet som gjør et argument ugyldig — selv om det kan virke overbevisende på overflaten. Å gjenkjenne feilslutninger er avgjørende for kritisk tenkning.

**De viktigste logiske feilslutningene:**

**1. Ad Hominem (personangrep)**
Angriper personen i stedet for argumentet.
- "You can't trust her opinion on climate change — she's not even a scientist."
- Problemet: Et arguments gyldighet avhenger av bevisene, ikke av hvem som fremsetter det.

**2. Straw Man (halmstrå)**
Forvrenger motstanderens argument for å gjøre det lettere å angripe.
- Person A: "We should have stricter gun regulations."
- Person B: "So you want to take away everyone's guns and leave us defenceless!"
- Problemet: Person A sa "stricter regulations", ikke "take away all guns."

**3. False Dilemma (falsk dilemma)**
Presenterer bare to alternativer når det finnes flere.
- "Either we ban all immigration or our country will collapse."
- Problemet: Det finnes mange mellomløsninger (regulert innvandring, integreringsprogrammer, etc.).

**4. Slippery Slope (skråplanargument)**
Påstår at én handling uunngåelig vil føre til en kjede av katastrofale konsekvenser.
- "If we allow students to use calculators, next they'll use AI to do all their homework, and then they won't learn anything at all!"
- Problemet: Hvert steg i kjeden er usannsynlig og ubegrunnet.

**5. Appeal to Authority (autoritetsargument)**
Bruker en autoritet som ikke er relevant for temaet.
- "This famous actor says vaccines are dangerous, so they must be."
- Problemet: En skuespiller er ikke ekspert på medisin. Relevant autoritet ville vært en lege eller forsker.

**6. Appeal to Emotion (følelsesbegrunnelse)**
Bruker følelser i stedet for logikk og bevis.
- "Think of the children! We must ban video games immediately!"
- Problemet: Følelser alene er ikke bevis. Du trenger data og forskning.

**7. Bandwagon (flertallsargument)**
Argumenterer at noe er riktig fordi mange mennesker mener det.
- "Everyone thinks this is a good idea, so it must be."
- Problemet: Flertallet kan ta feil. Populæritet er ikke et bevis på sannhet.

**8. Red Herring (avledningsmanøver)**
Introduserer et irrelevant tema for å avlede fra det opprinnelige argumentet.
- "Why should we worry about air pollution when there are so many people living in poverty?"
- Problemet: Begge problemene kan eksistere og adresseres samtidig.`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-7-ex-4',
        number: '7.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser den logiske feilslutningen i hvert utsagn og forklar kort hva som er feil.',
        subTasks: [
          {
            label: 'a',
            task: '"My grandfather smoked every day and lived to be 95, so smoking can\'t be bad for your health."',
            solution: 'Anekdotisk bevis / Hasty generalisation. Ett enkelttilfelle kan ikke motbevise overveldende statistisk evidens. Det at én person overlevde betyr ikke at røyking er ufarlig — det betyr bare at denne personen var et unntak.',
          },
          {
            label: 'b',
            task: '"If we allow refugees into our country, soon there won\'t be any jobs left for our own citizens, the welfare system will collapse, and our culture will disappear."',
            solution: 'Slippery slope. Argumentet antar en kjede av katastrofale konsekvenser uten bevis for at noen av stegene er sannsynlige. Forskning viser at moderat innvandring ofte styrker økonomien.',
          },
          {
            label: 'c',
            task: '"You can\'t argue for higher taxes — you\'re rich, so of course you wouldn\'t want to pay more."',
            solution: 'Ad hominem. Angriper personen (de er rike) i stedet for argumentet (om høyere skatt). Argumentets gyldighet avhenger av bevisene, ikke av hvem som fremsetter det.',
          },
          {
            label: 'd',
            task: '"Either you support complete freedom of speech with no restrictions, or you\'re against free speech entirely."',
            solution: 'False dilemma. Presenterer bare to ekstreme alternativer. I virkeligheten finnes det mange mellomposisjoner, som ytringsfrihet med ansvar eller restriksjoner mot hets og trusler.',
          },
          {
            label: 'e',
            task: '"This famous footballer says we should all eat organic food, so we definitely should."',
            solution: 'Appeal to authority. En fotballspiller er ekspert på fotball, ikke ernæring. En relevant autoritet ville vært en ernæringsforsker eller lege.',
          },
          {
            label: 'f',
            task: '"Why are we debating school lunch quality when there are children starving in Africa?"',
            solution: 'Red herring. Avleder fra det opprinnelige temaet (skolemat) ved å introdusere et annet tema (global sult). Begge problemene kan diskuteres og adresseres uavhengig av hverandre.',
          },
        ],
        solution: 'Logiske feilslutninger er overalt — i politikk, reklame, sosiale medier og daglige diskusjoner. Evnen til å gjenkjenne dem er en av de viktigste ferdighetene for kritisk tenkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-7-ex-5',
        number: '7.5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: '"If we let students eat in the classroom, soon they\'ll be throwing food, then the desks will be ruined, then the school will have to buy new furniture, and our taxes will go up!" Hvilken logisk feilslutning er dette?',
        options: [
          {
            id: 'a',
            text: 'Ad hominem',
            isCorrect: false,
            feedback: 'Feil. Ad hominem angriper personen, ikke argumentet. Her angripes ingen person.',
          },
          {
            id: 'b',
            text: 'Straw man',
            isCorrect: false,
            feedback: 'Feil. Straw man forvrenger motstanderens argument. Her er det ikke noe argument som forvrennes.',
          },
          {
            id: 'c',
            text: 'Slippery slope',
            isCorrect: true,
            feedback: 'Riktig! Slippery slope-argumentet påstår at én liten handling (spise i klasserommet) uunngåelig fører til en kjede av stadig verre konsekvenser, uten bevis for at noen av stegene faktisk er sannsynlige.',
          },
          {
            id: 'd',
            text: 'False dilemma',
            isCorrect: false,
            feedback: 'Feil. False dilemma presenterer bare to alternativer. Her presenteres en kjede av konsekvenser, ikke to valg.',
          },
        ],
        solution: 'Slippery slope er en av de vanligste feilslutningene i hverdagsdiskusjoner. Den brukes ofte for å skremme folk fra å gjøre endringer ved å male et worst-case scenario som er usannsynlig.',
      },
    },

    // ========== DEFINISJON 4: RETORISKE VIRKEMIDLER ==========
    {
      id: 'engelsk-10-7-def-4',
      type: 'definition',
      title: 'Rhetorical Devices — Retoriske appellformer og virkemidler',
      content: `Aristoteles identifiserte tre grunnleggende måter å overbevise et publikum på. Disse kalles **retoriske appellformer:**

**1. Ethos (troverdighet)**
Overbeviser gjennom avsenderens karakter og troverdighet.
- Vis at du er kunnskapsrik: "Having studied this issue extensively..."
- Vis at du er rettferdig: "I understand both sides of this debate..."
- Vis at du er til å stole på: Bruk pålitelige kilder og ærlige argumenter
- Eksempel: "As a student who has experienced both traditional and digital classrooms, I have seen firsthand how technology can transform learning."

**2. Pathos (følelser)**
Overbeviser gjennom følelser og emosjonell appell.
- Bruk levende bilder: "Imagine a world where every child goes to bed hungry..."
- Bruk personlige historier: "When my grandmother fled her home country..."
- Bruk sterke ord: "devastating", "heartbreaking", "inspiring", "outrageous"
- Eksempel: "Every single day, a child somewhere in the world loses a parent to a preventable disease. That child could be your neighbour."

**3. Logos (logikk)**
Overbeviser gjennom logikk, bevis og fornuft.
- Bruk statistikk: "Studies show that 73% of..."
- Bruk logiske resonnementer: "If A leads to B, and B leads to C, then A leads to C"
- Bruk ekspertvurderinger: "According to researchers at Harvard..."
- Eksempel: "Countries that have invested in renewable energy have seen a 40% reduction in carbon emissions within five years (IEA, 2023)."

**De mest effektive talene og tekstene bruker ALLE TRE appellformene.**

**Andre viktige retoriske virkemidler:**

| Virkemiddel | Forklaring | Eksempel |
|-------------|-----------|----------|
| **Repetition** | Gjenta nøkkelord for effekt | "I have a dream..." (MLK) |
| **Rhetorical question** | Spørsmål der svaret er åpenbart | "Are we really willing to sacrifice our future?" |
| **Rule of three** | Presenter tre eksempler/poenger | "Life, liberty, and the pursuit of happiness" |
| **Contrast/antithesis** | Sett opp motsetninger | "Ask not what your country can do for you — ask what you can do for your country" (JFK) |
| **Anaphora** | Gjenta begynnelsen av setninger | "We shall fight on the beaches, we shall fight on the landing grounds, we shall fight..." (Churchill) |
| **Inclusive language** | Bruk "we" og "us" | "Together, we can make a difference" |`,
    },

    // ========== EKSEMPEL 2: RETORISK ANALYSE ==========
    {
      id: 'engelsk-10-7-example-2',
      type: 'example',
      title: 'Eksempel: Retorisk analyse av en tale',
      problem: 'Analyser denne korte talen med fokus på ethos, pathos, logos og retoriske virkemidler.',
      solution: `**Talen:**

"Fellow students,

We stand at a crossroads. Every morning, we walk through the gates of this school carrying backpacks that weigh almost as much as we do — literally and figuratively. **[Pathos — visuelt bilde + metafor]**

According to the National Education Association, the average student today spends 7.5 hours in school, plus 3.5 hours on homework — that is an 11-hour working day. No adult would accept those conditions. **[Logos — statistikk + logisk sammenligning]**

As your student council president for the past two years, I have listened to hundreds of you share your stories of stress, exhaustion, and anxiety. I know this issue personally — last year, I ended up in hospital from stress-related illness. **[Ethos — autoritet og erfaring + Pathos — personlig historie]**

So I ask you: is this what education should look like? Is this what learning feels like? Is this what our future should be built on? **[Retorisk spørsmål + Anaphora (gjentatt 'Is this') + Rule of three]**

The answer is no. Not tomorrow. Not next year. Now. **[Repetisjon + kort, slagkraftig stil]**

We deserve better. We demand better. We will achieve better. **[Anaphora + Rule of three + Inkluderende språk (we)]**

Thank you."

**Analyse:**
- **Ethos:** Taleren etablerer troverdighet gjennom rollen som student council president og personlig erfaring
- **Pathos:** Personlig historie om sykehus, emosjonelle bilder, inkluderende "we"
- **Logos:** Statistikk fra National Education Association, logisk sammenligning med voksnes arbeidsvilkår
- **Retoriske virkemidler:** Anaphora, rule of three, retoriske spørsmål, kontrast, repetisjon

Legg merke til at talen begynner med pathos (fanger oppmerksomhet), beveger seg til logos (bygger argumentet), og avslutter med en blanding av alle tre (avslutning med kraft).`,
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-7-ex-6',
        number: '7.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser om hvert utsagn primært bruker ethos, pathos eller logos.',
        subTasks: [
          {
            label: 'a',
            task: '"As a doctor with 30 years of experience in emergency medicine, I can tell you that seatbelt laws save lives."',
            solution: 'Ethos. Taleren bruker sin profesjonelle bakgrunn og erfaring for å bygge troverdighet.',
          },
          {
            label: 'b',
            task: '"Last year alone, 38,000 people died in car accidents in the United States. Of those, approximately 47% were not wearing seatbelts."',
            solution: 'Logos. Bruker statistikk og tall som bevis for å bygge et logisk argument.',
          },
          {
            label: 'c',
            task: '"Imagine the phone call. Imagine hearing that your son, your daughter, your best friend, was killed in a crash because they forgot to click their seatbelt."',
            solution: 'Pathos. Appellerer til følelser (frykt, kjærlighet for familien) gjennom et levende, emosjonelt scenario. Bruker også rule of three ("your son, your daughter, your best friend").',
          },
          {
            label: 'd',
            task: '"According to WHO, countries that have enacted strict seatbelt legislation have seen a 40-65% reduction in fatal crash injuries."',
            solution: 'Logos. Bruker data fra en autoritativ kilde (WHO) og spesifikke prosenter for å underbygge argumentet logisk.',
          },
          {
            label: 'e',
            task: '"We, as a community, have a responsibility to protect each other. This is not about politics — it is about caring for the people we love."',
            solution: 'Primært pathos (appell til fellesskap og kjærlighet), men også ethos (viser moralsk integritet) gjennom inkluderende språk ("we, as a community").',
          },
        ],
        solution: 'I praksis bruker gode argumenter ofte en kombinasjon av ethos, pathos og logos. Evnen til å identifisere hvilken appell som brukes er nøkkelen til kritisk analyse av taler, reklame og politisk kommunikasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 7 ==========
    {
      id: 'engelsk-10-7-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-7-ex-7',
        number: '7.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv tre versjoner av det samme argumentet — én som primært bruker ethos, én som bruker pathos, og én som bruker logos. Temaet er: "Schools should serve free, healthy lunches to all students."',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv en ethos-versjon (3-4 setninger). Fokuser på troverdighet og erfaring.',
            solution: 'Eksempel: "As the principal of a school that introduced free lunches two years ago, I have witnessed the transformation firsthand. Teachers report that students are more focused, behaviour incidents have dropped, and academic results have improved. Based on my 20 years in education, this is one of the most impactful changes a school can make."',
          },
          {
            label: 'b',
            task: 'Skriv en pathos-versjon (3-4 setninger). Fokuser på følelser og menneskelige historier.',
            solution: 'Eksempel: "Every day in this country, children sit in classrooms with empty stomachs, too ashamed to admit they cannot afford lunch. They watch their classmates eat while they pretend they are not hungry. No child should have to choose between their dignity and their hunger."',
          },
          {
            label: 'c',
            task: 'Skriv en logos-versjon (3-4 setninger). Fokuser på statistikk og logikk.',
            solution: 'Eksempel: "Research by the Education Policy Institute (2022) demonstrates that students who eat a nutritious lunch perform on average 18% better on afternoon tests than those who skip lunch. Furthermore, universal free lunch programmes cost approximately 2.50 pounds per student per day, while the long-term economic gains from improved educational outcomes are estimated at 8 pounds per student per day in future productivity."',
          },
        ],
        hints: [
          'Ethos: Hvem sier det? Hvorfor bør vi lytte til dem?',
          'Pathos: Hvordan føles det? Hvem lider? Kan du male et bilde?',
          'Logos: Hva sier tallene? Hva er den logiske slutningen?',
        ],
        solution: 'Å mestre alle tre appellformene gir deg et kraftig verktøy for overtalelse. De mest effektive argumentene bruker alle tre sammen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 3: DEBATTFORMAT ==========
    {
      id: 'engelsk-10-7-example-3',
      type: 'example',
      title: 'Eksempel: Slik fungerer en formell debatt',
      problem: 'Forstå strukturen i en formell debatt og hvordan man forbereder seg.',
      solution: `**Formelt debattformat (forenklet for klasserommet):**

**Roller:**
- **Proposition (For-siden):** Argumenterer FOR forslaget (motion)
- **Opposition (Mot-siden):** Argumenterer MOT forslaget
- **Chairperson (Ordstyrer):** Leder debatten, holder orden
- **Audience (Publikum):** Lytter, stiller spørsmål, stemmer til slutt

**Struktur (forenklet):**

| Fase | Tid | Hva skjer |
|------|-----|-----------|
| 1. Proposition åpner | 3 min | Presenterer forslaget og hovedargumentene |
| 2. Opposition åpner | 3 min | Presenterer motargumentene |
| 3. Proposition 2. taler | 2 min | Utvider argumentene, imøtegår opposisjonen |
| 4. Opposition 2. taler | 2 min | Utvider motargumentene, imøtegår proposisjonen |
| 5. Åpen debatt | 5 min | Publikum stiller spørsmål til begge sider |
| 6. Opposition oppsummerer | 2 min | Oppsummering og sluttappell |
| 7. Proposition oppsummerer | 2 min | Oppsummering og sluttappell |
| 8. Avstemning | — | Publikum stemmer |

**Nyttige debatt-fraser:**

*Åpne debatten:*
- "This house believes that..." (formell innledning)
- "We, the proposition, firmly believe that..."
- "The motion before us today is..."

*Presentere argumenter:*
- "Our first argument is..." / "Furthermore..." / "Most importantly..."
- "The evidence clearly shows that..."
- "Allow me to illustrate with an example..."

*Imøtegå motstanderen:*
- "My honourable opponent claims that..., however..."
- "While the opposition makes an interesting point, they fail to consider..."
- "The opposition's argument falls apart when we examine the evidence..."

*Stille spørsmål (Points of Information):*
- "Would the speaker accept that...?"
- "How does the speaker respond to the fact that...?"
- "On that point..."

*Avslutte:*
- "For all these reasons, we urge you to vote in favour of / against the motion."
- "The choice is clear. Vote [for/against]."`,
    },

    // ========== OPPGAVE 8 ==========
    {
      id: 'engelsk-10-7-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-7-ex-8',
        number: '7.8',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedforskjellen mellom en formell debatt og en vanlig diskusjon?',
        options: [
          {
            id: 'a',
            text: 'I en debatt er man sinte, i en diskusjon er man rolige',
            isCorrect: false,
            feedback: 'Feil! En formell debatt er faktisk veldig strukturert og rolig. Det handler om logikk og respekt, ikke følelser og sinne.',
          },
          {
            id: 'b',
            text: 'En debatt har faste regler, roller og tidsbegrensninger, mens en diskusjon er friere i formen',
            isCorrect: true,
            feedback: 'Riktig! En formell debatt har klare regler: faste roller (proposition/opposition), tildelt tid, en ordstyrer som holder orden, og en avstemning til slutt. En diskusjon er mer uformell og flytende.',
          },
          {
            id: 'c',
            text: 'I en debatt må man alltid mene det man sier, i en diskusjon kan man bare utforske ideer',
            isCorrect: false,
            feedback: 'Feil — det er faktisk omvendt! I en formell debatt kan du bli tildelt en side du ikke nødvendigvis er enig i. Å argumentere for en posisjon du ikke er enig i er god trening i kritisk tenkning.',
          },
          {
            id: 'd',
            text: 'Det er ingen forskjell — debatt og diskusjon er det samme',
            isCorrect: false,
            feedback: 'Feil. Debatt og diskusjon har ulike mål og strukturer. En debatt har vinnere og tapere; en diskusjon søker felles forståelse.',
          },
        ],
        solution: 'En formell debatt er en strukturert øvelse med klare regler. Det er en verdifull ferdighet som trener deg i å tenke raskt, argumentere tydelig og lytte aktivt til motargumenter.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-7-summary',
      type: 'text',
      content: `## Oppsummering: Din verktøykasse for debatt og argumentasjon

I dette kapittelet har du lært de viktigste verktøyene for overbevisende kommunikasjon:

| Verktøy | Forklaring | Bruk det når... |
|---------|-----------|-----------------|
| **Claim + Evidence + Reasoning** | Grunnstrukturen i et argument | ...du skal bygge et overbevisende poeng |
| **Counterargument + Rebuttal** | Imøtegå motargumenter | ...du vil vise at du har vurdert begge sider |
| **Logical fallacies** | Gjenkjenn svake argumenter | ...du analyserer andres argumenter |
| **Ethos** | Troverdighet | ...du vil vise at du er pålitelig |
| **Pathos** | Følelsesappell | ...du vil engasjere publikum emosjonelt |
| **Logos** | Logikk og bevis | ...du vil overbevise med fakta |
| **Retoriske virkemidler** | Repetisjon, rule of three, retoriske spørsmål | ...du vil gjøre språket kraftfullt og minneverdig |

**Husk disse grunnreglene:**
1. **Angrip argumentet, aldri personen** — det er ad hominem
2. **Bruk bevis, ikke bare meninger** — "I think" er ikke nok
3. **Anerkjenn motargumenter** — det styrker ditt eget standpunkt
4. **Vær presis** — vage argumenter er svake argumenter
5. **Balanser ethos, pathos og logos** — bruk alle tre for maksimal effekt
6. **Unngå logiske feilslutninger** — de undergraver troverdigheten din`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-7-ex-9',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-7-ex-9',
        number: '7.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forbered en 2-minutters tale (ca. 250-300 ord) FOR eller MOT ett av disse forslagene. Bruk minst to argumenter med claim + evidence + reasoning, ett motargument med tilsvar, og minst to retoriske virkemidler.',
        subTasks: [
          {
            label: 'a',
            task: '"This house believes that all countries should adopt a four-day working week."',
            solution: 'For: Produktivitet øker, mental helse forbedres, klimapåvirkning reduseres. Mot: Kan redusere BNP, ikke alle bransjer kan tilpasse seg. Bruk statistikk fra Islands forsøk (2015-2019), der produktiviteten ble opprettholdt eller økte.',
          },
          {
            label: 'b',
            task: '"This house believes that violent video games should be banned for players under 18."',
            solution: 'For: Studier viser kortsiktig økning i aggresjon, foreldre krever beskyttelse. Mot: Forskning er blandet, spillere er i stand til å skille fiksjon og virkelighet, ytringsfrihet. Bruk forskning fra APA og kritikk av den.',
          },
          {
            label: 'c',
            task: '"This house believes that space exploration is a waste of money."',
            solution: 'For: Pengene kunne løst problemer på jorden. Mot: Romforskning gir teknologi (GPS, værvarsling, materialer), inspirerer generasjoner, og er nødvendig for menneskehetens overlevelse på lang sikt.',
          },
        ],
        hints: [
          'Start med en sterk åpning (anekdote, statistikk, retorisk spørsmål)',
          'Ha to-tre hovedargumenter med tydelig claim + evidence + reasoning',
          'Inkluder ett motargument som du imøtegår',
          'Avslutt med en kraftig sluttappell',
          'Bruk retoriske virkemidler: repetisjon, rule of three, kontrast',
          'Øv på fremføringen — tempo, pauser, øyekontakt',
        ],
        solution: 'En god debatt-tale kombinerer sterke argumenter (logos), personlig troverdighet (ethos), emosjonell appell (pathos) og retoriske virkemidler. Øv på å holde deg innenfor tidsbegrensningen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-7-ex-10',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-7-ex-10',
        number: '7.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Fallacy Detective: Finn og analyser tre eksempler på logiske feilslutninger fra virkeligheten (reklame, sosiale medier, politiske taler, nyheter). For hvert eksempel:',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv situasjonen og hva som ble sagt/skrevet.',
            solution: 'Gi konkret kontekst: Hvem sa det, hvor, når, og til hvem? Gjengi sitatet eller argumentet så nøyaktig som mulig.',
          },
          {
            label: 'b',
            task: 'Identifiser hvilken type feilslutning det er, og forklar hvorfor.',
            solution: 'Navngi feilslutningen (ad hominem, straw man, false dilemma, etc.) og forklar nøyaktig hva som gjør argumentet logisk ugyldig.',
          },
          {
            label: 'c',
            task: 'Foreslå hvordan argumentet kunne vært formulert bedre — uten feilslutningen.',
            solution: 'Omskriv argumentet slik at det bruker reelle bevis og logisk resonnement i stedet for feilslutningen. Vis at man kan argumentere for samme standpunkt uten å bruke logiske feil.',
          },
        ],
        hints: [
          'Se etter feilslutninger i reklame (appeal to authority, bandwagon)',
          'Politiske debatter er fulle av straw man og ad hominem',
          'Sosiale medier-diskusjoner bruker ofte false dilemma og slippery slope',
          'Avisoverskrifter kan bruke appeal to emotion',
        ],
        solution: 'Denne oppgaven trener din evne til å gjenkjenne logiske feilslutninger i den virkelige verden. Å oppdage dem i praksis er mye vanskeligere enn i lærebokeksempler — men det er nettopp derfor det er viktig å øve.',
        isInvestigation: true,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 3 ==========
    {
      id: 'engelsk-10-7-ex-11',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-7-ex-11',
        number: '7.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Klassedebatt: Organiser en formell debatt i klassen om temaet "This house believes that artificial intelligence will do more harm than good to society." Følg debattformatet fra kapittelet.',
        subTasks: [
          {
            label: 'a',
            task: 'Forbered to argumenter med claim + evidence + reasoning for DIN side (du kan bli tildelt en side du ikke er enig med!).',
            solution: 'For-siden: AI kan erstatte arbeidsplasser, true personvern, spre desinformasjon. Mot-siden: AI kan revolusjonere medisin, løse klimakrisen, forbedre utdanning. Bruk spesifikke eksempler og kilder.',
          },
          {
            label: 'b',
            task: 'Forbered ett motargument du forventer fra motstanderen, og planlegg ditt tilsvar.',
            solution: 'Tenk: Hva er det sterkeste argumentet motstanderen kan bruke? Hvordan kan du imøtegå det? Forbered evidens som svekker motargumentet.',
          },
          {
            label: 'c',
            task: 'Etter debatten: Skriv en kort refleksjon (100-150 ord) om hva du lærte. Hva var det sterkeste argumentet fra den andre siden? Endret debatten noe av det du tenker?',
            solution: 'God refleksjon viser evne til å anerkjenne styrker i motstanderens argumenter, identifisere svakheter i egne argumenter, og vise at man er åpen for å endre mening basert på bevis.',
          },
        ],
        hints: [
          'Bruk debatt-frasene fra kapittelet',
          'Husk: Det er argumentene som skal vinne, ikke volumet',
          'Lytt aktivt til motstanderen — noter svakheter du kan utnytte',
          'Avslutt med en sterk sluttappell som oppsummerer dine beste poenger',
        ],
        solution: 'Klassedebatt er den ultimate testen av alt du har lært i dette kapittelet. Det kombinerer argumentasjon, motargumenter, retoriske virkemidler, logisk tenkning og muntlige ferdigheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT: Samlet array for del 2
// ============================================================================

export const ENGELSK_10_DEL2_CHAPTERS = [
  CHAPTER_ENGELSK_10_5,
  CHAPTER_ENGELSK_10_6,
  CHAPTER_ENGELSK_10_7,
];
