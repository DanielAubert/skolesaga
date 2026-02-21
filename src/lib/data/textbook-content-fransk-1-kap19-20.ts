/* eslint-disable */
// @ts-nocheck
/**
 * Fransk Nivå 1 - Kapittel 19-20
 *
 * Kapittel 19: Communication numérique (Digital kommunikasjon)
 * Kapittel 20: Dialogues pratiques et révision (Praktiske dialoger og repetisjon)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 19.1: Envoyer un SMS en français - Sende SMS på fransk
// ============================================================================

export const CHAPTER_FRANSK_1_19_1: TextbookChapter = {
  id: 'fransk-1-19-1',
  courseId: 'fransk-1',
  chapterNumber: '19.1',
  title: 'Envoyer un SMS en français',
  subtitle: 'Sende SMS på fransk',
  description: 'Lær vanlige franske tekstmeldingsforkortelser og skriv uformelle meldinger på fransk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke fransk i digitale sammenhenger',
  ],
  content: [
    {
      id: 'fransk-1-19-1-intro',
      type: 'text',
      content: `## SMS og tekstmeldinger på fransk

Når franskmenn skriver tekstmeldinger, bruker de mange forkortelser - akkurat som vi gjør på norsk! Disse forkortelsene sparer tid og plass, men de kan være vanskelige a forstå hvis du ikke kjenner dem. I dette kapittelet lærer du de vanligste franske SMS-forkortelsene og hvordan du skriver uformelle meldinger.`,
    },
    {
      id: 'fransk-1-19-1-def-1',
      type: 'definition',
      title: 'Franske SMS-forkortelser (le langage SMS)',
      content: `**Le langage SMS** er det uformelle språket som brukes i tekstmeldinger på fransk. Her er de vanligste forkortelsene:

| Forkortelse | Fullt uttrykk | Norsk |
|-------------|--------------|-------|
| slt | salut | hei |
| bjr | bonjour | god dag |
| stp | s'il te plaît | vær så snill (uformelt) |
| svp | s'il vous plaît | vær så snill (formelt) |
| mdr | mort de rire | "dør av latter" (= lol) |
| bcp | beaucoup | mye |
| pk | pourquoi | hvorfor |
| pcq / psk | parce que | fordi |
| tkt | t'inquiète | ikke bekymre deg |
| dsl | désolé(e) | beklager |
| cc | coucou | hei (veldig uformelt) |
| a+ | à plus (tard) | snakkes |
| biz | bisous | kyss (avskjedshilsen) |

**Merk:** Disse forkortelsene brukes KUN i uformelle meldinger, aldri i formelle tekster!`,
    },
    {
      id: 'fransk-1-19-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Tyde SMS-forkortelser',
      problem: `Hva betyr disse tekstmeldingene på vanlig fransk?
a) "slt, cv?"
b) "mdr, c tro dr"
c) "dsl, je sui en retard"`,
      solution: `a) "slt, cv?" = "Salut, ça va ?" (Hei, hvordan går det?)
b) "mdr, c tro dr" = "Mort de rire, c'est trop drôle" (Dor av latter, det er for morsomt)
c) "dsl, je sui en retard" = "Désolé, je suis en retard" (Beklager, jeg er forsinket)

**Tips:** I SMS skrives ofte lyder istedenfor hele ord: "c" = c'est, "g" = j'ai, "t" = tu es.`,
    },
    {
      id: 'fransk-1-19-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-19-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv det fulle franske uttrykket for disse SMS-forkortelsene.',
        subTasks: [
          { label: 'a', task: 'slt', solution: 'salut' },
          { label: 'b', task: 'bjr', solution: 'bonjour' },
          { label: 'c', task: 'stp', solution: "s'il te plaît" },
          { label: 'd', task: 'mdr', solution: 'mort de rire' },
        ],
        solution: "a) salut, b) bonjour, c) s'il te plaît, d) mort de rire",
        hints: ['Se tabellen over SMS-forkortelser'],
      },
    },
    {
      id: 'fransk-1-19-1-text-1',
      type: 'text',
      content: `## Skrive en uformell melding

Når du skriver en SMS eller melding til en venn på fransk, følger du denne strukturen:

1. **Hilsen**: slt / cc / bjr
2. **Innhold**: Kort og uformelt
3. **Avskjed**: a+ / biz / à demain (ses i morgen)

**Eksempel på en kort SMS-samtale:**

*Thomas: Slt ! Ça va ?*
*Marie: Cc ! Oui ça va, et toi ?*
*Thomas: Bien ! Tu fais quoi ce soir ?*
*Marie: Rien de spécial, pk ?*
*Thomas: On va au cinéma ? Il y a un bon film.*
*Marie: Oui, super ! À quelle heure ?*
*Thomas: A 20h. Rdv devant le cinéma.*
*Marie: Ok, a+ !*

**Rdv** = rendez-vous (møte/avtale)`,
    },
    {
      id: 'fransk-1-19-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Skrive en SMS',
      problem: `Skriv en kort SMS på fransk der du:
a) Hilser på en venn
b) Spor om han/hun vil spise lunsj sammen
c) Foreslaar et tidspunkt`,
      solution: `**Eksempel:**
"Slt ! Tu veux manger ensemble a midi ? Rdv a la cantine a 12h ? A+"

**På vanlig fransk:** "Salut ! Tu veux manger ensemble a midi ? Rendez-vous a la cantine a 12 heures ? À plus !"

(Hei! Vil du spise sammen til lunsj? Møtes i kantina kl. 12? Snakkes!)`,
    },
    {
      id: 'fransk-1-19-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-19-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett disse SMS-meldingene til vanlig fransk.',
        subTasks: [
          { label: 'a', task: 'cc, cv ? tu fais koi ?', solution: 'Coucou, ça va ? Tu fais quoi ?' },
          { label: 'b', task: 'dsl, g på le tps', solution: "Désolé, j'ai pas le temps" },
          { label: 'c', task: 'pk t på venu ?', solution: "Pourquoi tu n'es pas venu ?" },
        ],
        solution: "a) Coucou, ça va ? Tu fais quoi ? b) Désolé, j'ai pas le temps. c) Pourquoi tu n'es pas venu ?",
        hints: ['g = j\'ai', 'koi = quoi', 'tps = temps'],
      },
    },
    {
      id: 'fransk-1-19-1-text-2',
      type: 'text',
      content: `## Emojier og uttrykk

Franske ungdommer bruker også emojier og spesielle uttrykk i meldinger:

| Uttrykk | Betydning |
|---------|-----------|
| :) / ^^ | smile, glad |
| :( | trist |
| xD / mdr | ler høylytt |
| trop bien ! | kjempebra! |
| c'est nul | det er dust |
| grave | "skikkelig" (slang for "veldig") |
| j'en ai marre | jeg er lei av det |
| c'est ouf | det er galskap (ouf = verlan for "fou") |

**Verlan** er en type fransk slang der stavelsene i ord snus. "Fou" (gal) blir "ouf", "femme" (kvinne) blir "meuf".`,
    },
    {
      id: 'fransk-1-19-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Emojier og slang',
      problem: `Hva uttrykker disse meldingene?
a) "Le film c'était trop bien ! ^^"
b) "Mdr, c'est ouf ce truc"
c) "J'en ai marre des devoirs :("`,
      solution: `a) "Filmen var kjempebra!" (avsender er glad/fornøyd)
b) "Haha, den greia der er helt vill" (avsender synes noe er morsomt og vilt)
c) "Jeg er lei av lekser" (avsender er frustrert)`,
    },
    {
      id: 'fransk-1-19-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-19-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en passende SMS-respons på fransk.',
        subTasks: [
          { label: 'a', task: 'Vennen din skriver: "Tu veux venir a ma fête samedi ?" Svar ja, du er begeistret.', solution: 'Oui, trop bien ! À quelle heure ? ^^' },
          { label: 'b', task: 'Vennen din skriver: "Dsl, je peux pas venir ce soir." Si at det er synd, men at det er ok.', solution: "Oh, c'est dommage :( Mais tkt, c'est pas grave ! A+" },
          { label: 'c', task: 'Vennen din skriver: "T\'as vu le match ?" Si at du sag det og at det var kjempebra.', solution: 'Oui ! C\'était trop bien, mdr ! ^^' },
        ],
        solution: 'a) Oui, trop bien ! b) C\'est dommage, mais tkt ! c) Oui, c\'était trop bien !',
        hints: ['trop bien = kjempebra', "tkt = t'inquiète (ikke bekymre deg)", "c'est dommage = det er synd"],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-19-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-19-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en SMS-samtale på fransk mellom to venner. Bruk minst 5 SMS-forkortelser.',
        subTasks: [
          { label: 'a', task: 'Person A hilser og spor hva person B gjør i helgen.', solution: 'Slt ! Tu fais koi ce weekend ?' },
          { label: 'b', task: 'Person B svarer og foreslaar en aktivitet.', solution: 'Cc ! Rien de spécial. On va au parc ? Il fait beau !' },
          { label: 'c', task: 'Person A aksepterer og avtaler tidspunkt. Avslutt samtalen.', solution: 'Trop bien ! Rdv a 14h ? Biz, a+ !' },
        ],
        solution: 'Eksempel: A: "Slt ! Tu fais koi ce weekend ?" B: "Cc ! Rien. On va au parc ?" A: "Trop bien ! Rdv a 14h ? A+"',
        hints: ['Bruk slt, cc, pk, mdr, a+, rdv, tkt, biz'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 19.2: Les réseaux sociaux - Sosiale medier
// ============================================================================

export const CHAPTER_FRANSK_1_19_2: TextbookChapter = {
  id: 'fransk-1-19-2',
  courseId: 'fransk-1',
  chapterNumber: '19.2',
  title: 'Les réseaux sociaux',
  subtitle: 'Sosiale medier',
  description: 'Lær vokabular for sosiale medier på fransk og lag en enkel profil.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kommunisere på fransk i digitale kanaler',
  ],
  content: [
    {
      id: 'fransk-1-19-2-intro',
      type: 'text',
      content: `## Sosiale medier på fransk

Sosiale medier er en stor del av hverdagen for ungdom over hele verden. Når du bruker sosiale medier på fransk, får du øving i a lese og skrive fransk i autentiske situasjoner. I dette kapittelet lærer du nyttig vokabular og øvelser knyttet til sosiale medier.`,
    },
    {
      id: 'fransk-1-19-2-def-1',
      type: 'definition',
      title: 'Vokabular for sosiale medier',
      content: `Her er de viktigste ordene du trenger for a snakke om sosiale medier på fransk:

| Fransk | Norsk |
|--------|-------|
| un réseau social | et sosialt medium |
| un profil | en profil |
| un compte | en konto |
| publier / poster | legge ut / poste |
| partager | dele |
| aimer | like |
| commenter | kommentere |
| suivre | følge |
| un abonné | en følger |
| un fil d'actualite | en nyhetsstrom |
| une photo de profil | et profilbilde |
| un mot de passe | et passord |
| une notification | et varsel |
| un hashtag / un mot-clé | en hashtag / et nøkkelord |
| mettre en ligne | laste opp |
| une story | en story / en historie |
| en direct | direkte / live |`,
    },
    {
      id: 'fransk-1-19-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Forstå en profil',
      problem: `Les denne franske profilen og svar på spørsmålene:

**Nom:** Marie Dupont
**Age:** 17 ans
**Ville:** Lyon, France
**Bio:** "J'adore la musique, les voyages et la photographie. Lycéenne en terminale. Mon rêve : visiter la Norvège !"
**Abonnés:** 342
**Publications:** 89

a) Hvor gammel er Marie?
b) Hva er hobbyene hennes?
c) Hva er drømmen hennes?`,
      solution: `a) Marie er 17 år gammal.
b) Hobbyene hennes er musikk, reiser og fotografering (la musique, les voyages, la photographie).
c) Drommen hennes er a besøke Norge (visiter la Norvège).`,
    },
    {
      id: 'fransk-1-19-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-19-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett disse sosiale medie-ordene til norsk.',
        subTasks: [
          { label: 'a', task: 'publier', solution: 'legge ut / poste' },
          { label: 'b', task: 'partager', solution: 'dele' },
          { label: 'c', task: 'suivre', solution: 'følge' },
          { label: 'd', task: 'un abonné', solution: 'en følger' },
        ],
        solution: 'a) legge ut, b) dele, c) følge, d) en følger',
        hints: ['Se vokabulartabellen'],
      },
    },
    {
      id: 'fransk-1-19-2-text-1',
      type: 'text',
      content: `## Lage en fransk profil

Når du lager en profil på fransk, trenger du a kunne beskrive deg selv kort. Her er en mal:

**Struktur for en bio:**
1. Alder og bosted: "J'ai ... ans, j'habite a ..."
2. Interesser: "J'adore / J'aime ..."
3. Noe personlig: Et morsomt sitat, en drøm, eller noe du er stolt av

**Nyttige uttrykk for bio:**
- "Passionné(e) de..." = Lidenskapelig opptatt av...
- "Fan de..." = Fan av...
- "Amoureux/amoureuse de la vie" = Glad i livet
- "En route vers mes rêves" = På vei mot drømmene mine
- "La vie est belle" = Livet er vakkert`,
    },
    {
      id: 'fransk-1-19-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Skrive en bio',
      problem: `Skriv en enkel bio på fransk for en 16-aring fra Bergen som liker fotball og musikk.`,
      solution: `**Eksempel:**
"16 ans, Bergen, Norvège. Passionné de football et de musique. Fan de Manchester City ! La vie est belle ⚽🎵"

**Oversettelse:** 16 år, Bergen, Norge. Lidenskapelig opptatt av fotball og musikk. Fan av Manchester City! Livet er vakkert.`,
    },
    {
      id: 'fransk-1-19-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-19-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort fransk profil for disse personene.',
        subTasks: [
          { label: 'a', task: 'En 17-aring fra Oslo som liker a lese og reise.', solution: "17 ans, Oslo, Norvège. J'adore la lecture et les voyages. En route vers mes reves !" },
          { label: 'b', task: 'En 16-aring fra Trondheim som er glad i dyr og natur.', solution: '16 ans, Trondheim. Passionnee de la nature et des animaux. La vie est belle !' },
          { label: 'c', task: 'En 15-aring fra Stavanger som spiller gitar og liker film.', solution: '15 ans, Stavanger. Fan de guitare et de cinéma. La musique, c\'est ma vie !' },
        ],
        solution: 'Personlige svar. Se løsningsforslagene for eksempler.',
        hints: ["J'adore = Jeg elsker", 'Passionne(e) de = Lidenskapelig opptatt av'],
      },
    },
    {
      id: 'fransk-1-19-2-text-2',
      type: 'text',
      content: `## Kommentere og reagere

På sosiale medier skriver vi ofte korte kommentarer. Her er vanlige franske uttrykk:

| Fransk kommentar | Norsk |
|-----------------|-------|
| Trop beau/belle ! | Sa vakkert! |
| J'adore ! | Elsker det! |
| Génial ! | Genialt! |
| C'est magnifique ! | Det er fantastisk! |
| Trop drôle ! | Sa morsomt! |
| Bravo ! | Bra! |
| Félicitations ! | Gratulerer! |
| Bonne chance ! | Lykke til! |
| Tu me manques ! | Jeg savner deg! |
| Vivement les vacances ! | Gleder meg til ferien! |`,
    },
    {
      id: 'fransk-1-19-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Kommentere et innlegg',
      problem: `Vennen din har lagt ut et bilde fra ferien i Paris. Skriv tre ulike kommentarer på fransk.`,
      solution: `1. "Trop beau ! J'adore Paris !"
2. "C'est magnifique ! Tu as de la chance !"
3. "Génial ! Je veux aussi visiter Paris un jour !"

**Oversettelse:**
1. Sa vakkert! Jeg elsker Paris!
2. Det er fantastisk! Du er heldig!
3. Genialt! Jeg vil også besøke Paris en dag!`,
    },
    {
      id: 'fransk-1-19-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-19-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en passende fransk kommentar til disse innleggene.',
        subTasks: [
          { label: 'a', task: 'Vennen din har bestått en eksamen.', solution: 'Félicitations ! Bravo, tu es le/la meilleur(e) !' },
          { label: 'b', task: 'Noen har lagt ut et morsomt bilde.', solution: 'Mdr, trop drôle ! ^^' },
          { label: 'c', task: 'Vennen din reiser på ferie i morgen.', solution: 'Bonnes vacances ! Bonne chance et profite bien !' },
        ],
        solution: 'a) Félicitations ! Bravo ! b) Trop drôle ! c) Bonnes vacances !',
        hints: ['Félicitations = gratulerer', 'Bonnes vacances = god ferie'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-19-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-19-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en komplett fransk profil for deg selv og skriv et kort innlegg med kommentarer.',
        subTasks: [
          { label: 'a', task: 'Skriv en bio på fransk (2-3 setninger) med alder, bosted og interesser.', solution: "Eksempel: 16 ans, Oslo, Norvège. J'adore la musique et le sport. La vie est belle !" },
          { label: 'b', task: 'Skriv et kort innlegg (1-2 setninger) der du forteller hva du gjør i dag.', solution: "Eksempel: Aujourd'hui, je suis au café avec mes amis. C'est trop bien !" },
          { label: 'c', task: 'Skriv to kommentarer fra "venner" på innlegget ditt.', solution: 'Eksempel: "Génial ! J\'adore !" og "Trop beau ! On se voit demain ?"' },
        ],
        solution: 'Personlige svar. Bruk vokabularet fra kapittelet.',
        hints: ['Bruk ordene: publier, partager, aimer, commenter'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 19.3: Écrire un e-mail formel - Skrive formell e-post
// ============================================================================

export const CHAPTER_FRANSK_1_19_3: TextbookChapter = {
  id: 'fransk-1-19-3',
  courseId: 'fransk-1',
  chapterNumber: '19.3',
  title: 'Écrire un e-mail formel',
  subtitle: 'Skrive formell e-post',
  description: 'Lær a skrive formelle e-poster på fransk med riktig struktur og høflighetsfraser.',
  estimatedMinutes: 45,
  competenceGoals: [
    'skrive formelle og uformelle tekster tilpasset formal og mottaker',
  ],
  content: [
    {
      id: 'fransk-1-19-3-intro',
      type: 'text',
      content: `## Formell e-post på fransk

Å kunne skrive en formell e-post på fransk er nyttig i mange situasjoner: søke på en jobb, kontakte en skole, eller skrive til noen du ikke kjenner. Fransk har veldig faste regler for høflighet i formelle brev og e-poster, og det er viktig a følge dem.`,
    },
    {
      id: 'fransk-1-19-3-def-1',
      type: 'definition',
      title: 'Strukturen i en formell fransk e-post',
      content: `En formell fransk e-post har denne strukturen:

**1. Tiltale (formule d'appel):**
- Madame, / Monsieur, (til en kvinne / mann)
- Madame, Monsieur, (hvis du ikke vet kjønnet)
- Cher Monsieur, / Chère Madame, (noe mer personlig)

**2. Innledning:**
- Je me permets de vous écrire pour... (Jeg tillater meg a skrive til Dem for a...)
- Je vous écris au sujet de... (Jeg skriver til Dem angaende...)
- Suite a votre annonce... (I forbindelse med Deres annonse...)

**3. Hoveddel:**
- Forklar tydelig hva du ønsker

**4. Avslutning (formule de politesse):**
- Cordialement, (Vennlig hilsen)
- Veuillez agreer, Madame/Monsieur, l'expression de mes salutations distinguees. (Svart formelt)
- Je vous prie d'agreer mes salutations respectueuses. (Formelt)
- Bien cordialement, (Litt mindre formelt)

**5. Underskrift:**
- Fornavn og etternavn`,
    },
    {
      id: 'fransk-1-19-3-example-1',
      type: 'example',
      title: 'Eksempel 1: En formell e-post',
      problem: `Les denne e-posten og identifiser de ulike delene (tiltale, innledning, hoveddel, avslutning).

Objet : Demande d'information

Madame, Monsieur,

Je me permets de vous écrire pour obtenir des informations sur vos cours de français pour étrangers.

Je suis un élève norvegien de 17 ans et je voudrais suivre un cours intensif de français a Paris cet été. Pourriez-vous m'envoyer le programme et les tarifs, s'il vous plaît ?

Je vous remercie par avance de votre réponse.

Cordialement,
Erik Hansen`,
      solution: `**Tiltale:** "Madame, Monsieur," (formell tiltale til ukjent mottaker)
**Innledning:** "Je me permets de vous écrire pour obtenir des informations..." (presenterer formalet)
**Hoveddel:** "Je suis un élève norvegien... Pourriez-vous m'envoyer..." (forklarer situasjonen og ber om noe)
**Avslutning:** "Je vous remercie par avance de votre réponse." (takker på forhand)
**Hilsen:** "Cordialement," (vennlig hilsen)
**Underskrift:** "Erik Hansen"`,
    },
    {
      id: 'fransk-1-19-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-19-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett disse formelle e-postfrasene til norsk.',
        subTasks: [
          { label: 'a', task: 'Je me permets de vous écrire pour...', solution: 'Jeg tillater meg a skrive til Dem for a...' },
          { label: 'b', task: 'Veuillez agreer mes salutations distinguees.', solution: 'Motta mine beste hilsener. (Svart formell avslutning)' },
          { label: 'c', task: 'Je vous remercie par avance.', solution: 'Jeg takker Dem på forhand.' },
          { label: 'd', task: 'Cordialement,', solution: 'Vennlig hilsen,' },
        ],
        solution: 'a) Jeg tillater meg a skrive til Dem... b) Motta mine beste hilsener. c) Jeg takker Dem på forhand. d) Vennlig hilsen.',
        hints: ['Formelle fraser på fransk er lengre og mer høytidelige enn på norsk'],
      },
    },
    {
      id: 'fransk-1-19-3-text-1',
      type: 'text',
      content: `## Forskjellen mellom formelt og uformelt

Det er stor forskjell mellom en formell og uformell e-post på fransk:

| Element | Formelt | Uformelt |
|---------|---------|----------|
| **Tiltale** | Madame, Monsieur, | Salut ! / Coucou ! |
| **Du/De** | vous | tu |
| **Innledning** | Je me permets de vous écrire... | Ça va ? Je t'écris pour... |
| **Avslutning** | Cordialement, | Bisous / À bientôt ! |
| **Tone** | Hoflig, distansert | Varm, personlig |

**Viktig:** På fransk er det a bruke "vous" (De) i formelle sammenhenger ikke bare hoflig - det er helt nødvendig. Å bruke "tu" (du) til noen du ikke kjenner regnes som uhoflig.`,
    },
    {
      id: 'fransk-1-19-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Formelt vs. uformelt',
      problem: `Skriv den samme meldingen både formelt og uformelt:
"Kan du sende meg informasjon om kurset?"`,
      solution: `**Formelt:**
"Pourriez-vous m'envoyer des informations sur le cours, s'il vous plaît ?"
(Kunne De sende meg informasjon om kurset, vær så snill?)

**Uformelt:**
"Tu peux m'envoyer des infos sur le cours ?"
(Kan du sende meg info om kurset?)

**Legg merke til:** Formelt bruker "pourriez-vous" (hoflighetsform med conditionnel) og "s'il vous plaît", mens uformelt bruker "tu peux" og kortformen "infos".`,
    },
    {
      id: 'fransk-1-19-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-19-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør disse uformelle uttrykkene formelle.',
        subTasks: [
          { label: 'a', task: 'Salut ! Je veux des infos.', solution: 'Madame, Monsieur, je me permets de vous écrire pour obtenir des informations.' },
          { label: 'b', task: 'Tu peux répondre vite ?', solution: 'Pourriez-vous me répondre dans les meilleurs délais ?' },
          { label: 'c', task: 'Merci, à plus !', solution: 'Je vous remercie par avance. Cordialement,' },
        ],
        solution: 'a) Madame, Monsieur, je me permets de vous écrire pour obtenir des informations. b) Pourriez-vous me répondre dans les meilleurs délais ? c) Je vous remercie par avance. Cordialement,',
        hints: ['Bruk "vous" i stedet for "tu"', 'Pourriez-vous = Kunne De (hoflighetsform)'],
      },
    },
    {
      id: 'fransk-1-19-3-text-2',
      type: 'text',
      content: `## Nyttige fraser for formelle e-poster

| Situasjon | Fransk frase |
|-----------|-------------|
| Be om informasjon | Je souhaiterais obtenir des informations sur... |
| Søke på noe | Je me permets de poser ma candidature pour... |
| Klage | Je me permets de vous signaler un problème... |
| Takke | Je vous remercie pour votre aide. |
| Be om svar | Dans l'attente de votre réponse... |
| Legge ved | Veuillez trouver ci-joint... (Vennligst finn vedlagt...) |`,
    },
    {
      id: 'fransk-1-19-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Skrive en komplett formell e-post',
      problem: `Skriv en formell e-post til et hotell i Paris der du:
- Spor om de har ledige rom i juli
- Vil ha et rom for to personer i en uke
- Spor om prisen`,
      solution: `**Objet : Réservation d'une chambre**

Madame, Monsieur,

Je me permets de vous écrire pour savoir si vous avez des chambres disponibles au mois de juillet.

Je souhaiterais réserver une chambre pour deux personnes pour une semaine, du 10 au 17 juillet. Pourriez-vous m'indiquer le tarif, s'il vous plaît ?

Dans l'attente de votre réponse, je vous prie d'agreer mes salutations distinguees.

Anna Olsen`,
    },
    {
      id: 'fransk-1-19-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-19-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett disse delene av en formell e-post til fransk.',
        subTasks: [
          { label: 'a', task: 'Jeg skriver til Dem angaende Deres annonse.', solution: 'Je vous écris au sujet de votre annonce.' },
          { label: 'b', task: 'Kunne De sende meg mer informasjon?', solution: "Pourriez-vous m'envoyer plus d'informations ?" },
          { label: 'c', task: 'I pavente av Deres svar, vennlig hilsen.', solution: "Dans l'attente de votre réponse, cordialement," },
        ],
        solution: "a) Je vous écris au sujet de votre annonce. b) Pourriez-vous m'envoyer plus d'informations ? c) Dans l'attente de votre réponse, cordialement,",
        hints: ['au sujet de = angaende', "dans l'attente de = i pavente av"],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-19-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-19-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en komplett formell e-post på fransk til en skole i Frankrike. Du ønsker informasjon om et sommerkurs i fransk.',
        subTasks: [
          { label: 'a', task: 'Skriv tiltale og innledning.', solution: 'Madame, Monsieur, je me permets de vous écrire pour obtenir des informations sur vos cours de français d\'ete.' },
          { label: 'b', task: 'Skriv hoveddelen: presenter deg selv og forklar hva du ønsker.', solution: 'Je suis un(e) élève norvegien(ne) de 16 ans. Je souhaiterais suivre un cours intensif de français pendant le mois de juillet. Pourriez-vous m\'envoyer le programme et les tarifs ?' },
          { label: 'c', task: 'Skriv avslutning med takk og formell hilsen.', solution: 'Je vous remercie par avance de votre réponse. Cordialement, [Navn]' },
        ],
        solution: 'Se løsningsforslagene for en komplett e-post. Viktig: Bruk "vous", formell tiltale og hoflig avslutning.',
        hints: ['Folg strukturen: tiltale -> innledning -> hoveddel -> avslutning -> underskrift'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 19.4: Chercher des informations en français - Søke informasjon på fransk
// ============================================================================

export const CHAPTER_FRANSK_1_19_4: TextbookChapter = {
  id: 'fransk-1-19-4',
  courseId: 'fransk-1',
  chapterNumber: '19.4',
  title: 'Chercher des informations en français',
  subtitle: 'Søke informasjon på fransk',
  description: 'Lær a søke etter og forstå informasjon på franske nettsider.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke digitale ressurser i språklæringen',
  ],
  content: [
    {
      id: 'fransk-1-19-4-intro',
      type: 'text',
      content: `## Søke informasjon på fransk

Å kunne søke etter og forstå informasjon på fransk er en viktig ferdighet. Enten du leter etter informasjon til et skoleprosjekt, planlegger en reise, eller bare er nysgjerrig, er det nyttig a kunne navigere franske nettsider. I dette kapittelet lærer du strategier for a søke på fransk og forstå det du finner.`,
    },
    {
      id: 'fransk-1-19-4-def-1',
      type: 'definition',
      title: 'Nyttige søkeord og nettbegreper',
      content: `For a søke effektivt på fransk, trenger du disse ordene:

| Fransk | Norsk |
|--------|-------|
| chercher | søke |
| une recherche | et søk |
| un moteur de recherche | en søketjeneste |
| un site web / un site internet | en nettside |
| une page d'accueil | en hjemmeside / forside |
| un lien | en lenke |
| cliquer | klikke |
| télécharger | laste ned |
| un navigateur | en nettleser |
| un article | en artikkel |
| les résultats | resultatene |
| un mot-clé | et nøkkelord |
| se connecter | logge inn |
| un menu | en meny |
| les actualites | nyhetene |`,
    },
    {
      id: 'fransk-1-19-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Forstå en fransk nettside',
      problem: `Her er menyen fra en fransk nettside om turisme. Hva betyr hvert menypunkt?

**Menu:**
- Accueil
- Destinations
- Hôtels et hébergements
- Activités et loisirs
- Infos pratiques
- Contact`,
      solution: `- **Accueil** = Hjem / Forside
- **Destinations** = Reisemal
- **Hôtels et hébergements** = Hoteller og overnattingssteder
- **Activités et loisirs** = Aktiviteter og fritid
- **Infos pratiques** = Praktisk informasjon
- **Contact** = Kontakt

**Tips:** Mange franske nettsider har en lignende struktur som norske. Bruk konteksten og cognater for a forstå!`,
    },
    {
      id: 'fransk-1-19-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-19-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett disse nettbegrepene til norsk.',
        subTasks: [
          { label: 'a', task: 'un moteur de recherche', solution: 'en søketjeneste' },
          { label: 'b', task: 'télécharger', solution: 'laste ned' },
          { label: 'c', task: 'cliquer sur un lien', solution: 'klikke på en lenke' },
          { label: 'd', task: 'les actualites', solution: 'nyhetene' },
        ],
        solution: 'a) en søketjeneste, b) laste ned, c) klikke på en lenke, d) nyhetene',
        hints: ['Mange IT-ord er lignende på norsk, engelsk og fransk'],
      },
    },
    {
      id: 'fransk-1-19-4-text-1',
      type: 'text',
      content: `## Strategier for a lese franske tekster på nett

Når du leser en tekst på fransk, trenger du ikke a forstå hvert eneste ord. Bruk disse strategiene:

**1. Skumles forst (survoler)**
Les overskrifter, underoverskrifter og bilder for a få oversikt.

**2. Let etter nøkkelord (mots-clés)**
Finn de viktigste ordene som forteller deg hva teksten handler om.

**3. Bruk cognater**
Mange franske ord ligner på norske eller engelske:
- information = informasjon
- tourisme = turisme
- réservation = reservasjon
- gratuit = gratis

**4. Se på konteksten**
Ordene rundt et ukjent ord kan hjelpe deg a gjette betydningen.

**5. Bruk en ordbok**
Franske nettordboker som WordReference er gode hjelpemidler.`,
    },
    {
      id: 'fransk-1-19-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Lese en kort fransk tekst',
      problem: `Les denne teksten fra en nettside og svar på spørsmålene:

**"Le Musée du Louvre"**
"Le musée du Louvre est le plus grand musée d'art du monde. Il est situé à Paris, en France. Le musée est ouvert tous les jours sauf le mardi. L'entrée est gratuite pour les jeunes de moins de 18 ans. La Joconde (Mona Lisa) est l'oeuvre la plus célèbre du musée."

a) Hva er Louvre?
b) Hvilken dag er museet stengt?
c) Hvem får gratis inngang?`,
      solution: `a) Louvre er verdens største kunstmuseum (le plus grand musée d'art du monde).
b) Museet er stengt på tirsdager (sauf le mardi = unntatt tirsdag).
c) Unge under 18 år får gratis inngang (gratuite pour les jeunes de moins de 18 ans).

**Nøkkelord:** musée = museum, ouvert = åpent, sauf = unntatt, gratuit = gratis, moins de = under.`,
    },
    {
      id: 'fransk-1-19-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-19-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les tekstutdraget og svar på spørsmålene på norsk.',
        subTasks: [
          { label: 'a', task: '"La Tour Eiffel est ouverte tous les jours de 9h30 a 23h45." - Når er Eiffeltarnet åpent?', solution: 'Eiffeltarnet er åpent hver dag fra 9:30 til 23:45.' },
          { label: 'b', task: '"Le billet adulte coûte 26 euros." - Hva koster en voksenbillett?', solution: 'En voksenbillett koster 26 euro.' },
          { label: 'c', task: '"Il est conseille de réserver en ligne." - Hva anbefales?', solution: 'Det anbefales a bestille/reservere på nett (en ligne = på nett).' },
        ],
        solution: 'a) Hver dag 9:30-23:45. b) 26 euro. c) A reservere på nett.',
        hints: ['ouverte = åpent', 'coûte = koster', 'conseille = anbefalt', 'en ligne = på nett'],
      },
    },
    {
      id: 'fransk-1-19-4-text-2',
      type: 'text',
      content: `## Nyttige franske nettsider for språklæringen

Her er noen gode ressurser for a øve fransk på nett:

| Nettside | Hva den tilbyr |
|----------|---------------|
| **WordReference.com** | Fransk-norsk/engelsk ordbok |
| **TV5Monde.com** | Franske videoer med undertekster |
| **Le Monde.fr** | Fransk avis (for a lese nyheter) |
| **RFI.fr** | Radio France Internationale (nyheter på enkel fransk) |
| **Francaisfacile.com** | Grammatikkovelser og tester |

**Tips for a bruke franske nettsider:**
- Start med sider som er laget for fransklaeerende (FLE = Français Langue Étrangère)
- Bruk undertekster når du ser på videoer
- Les korte artikler forst, og jobb deg opp til lengre tekster`,
    },
    {
      id: 'fransk-1-19-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Planlegge med fransk informasjon',
      problem: `Du skal planlegge en dag i Paris. Bruk denne informasjonen:

- Louvre: ouvert 9h-18h, ferme le mardi, billet: 17 euros
- Tour Eiffel: ouverte 9h30-23h45, billet: 26 euros
- Bateau-mouche: depart toutes les 30 minutes, duree: 1 heure, billet: 15 euros

Lag en plan for dagen og beregn totalkostnaden.`,
      solution: `**Plan:**
- 9h30: Besoke Louvre (17 euros) - åpent fra 9h
- 13h: Lunsj
- 14h30: Eiffeltarnet (26 euros) - åpent til 23h45
- 16h30: Batmouche / elvecruise (15 euros) - avgang hver 30. minutt, varer 1 time

**Totalkostnad:** 17 + 26 + 15 = **58 euros**

**Merk:** Dette fungerer bare hvis det ikke er tirsdag (Louvre er stengt på tirsdager)!`,
    },
    {
      id: 'fransk-1-19-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-19-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett disse franske nettsidefrasene til norsk.',
        subTasks: [
          { label: 'a', task: 'Cliquez ici pour réserver.', solution: 'Klikk her for a bestille.' },
          { label: 'b', task: 'Téléchargez le plan du musée.', solution: 'Last ned museumskartet.' },
          { label: 'c', task: 'Entrée gratuite pour les moins de 18 ans.', solution: 'Gratis inngang for de under 18 år.' },
        ],
        solution: 'a) Klikk her for a bestille. b) Last ned museumskartet. c) Gratis inngang for de under 18 år.',
        hints: ['cliquez = klikk (imperativ)', 'telechargez = last ned (imperativ)'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-19-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-19-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Kombiner ferdighetene dine: Les, søk og skriv på fransk.',
        subTasks: [
          { label: 'a', task: 'Hvilke søkeord (på fransk) ville du brukt for a finne et billig hotell i Paris?', solution: 'hôtel pas cher Paris, hébergement economique Paris, hôtel bon marché Paris' },
          { label: 'b', task: 'Du finner en nettside der det star "Chambre double a partir de 65 euros la nuit." Hva betyr dette?', solution: 'Dobbeltrom fra 65 euro per natt.' },
          { label: 'c', task: 'Skriv en kort formell e-post til hotellet der du spor om de har ledige rom i august.', solution: "Madame, Monsieur, je souhaiterais savoir si vous avez des chambres disponibles au mois d'aout. Pourriez-vous m'indiquer les tarifs ? Cordialement, [Navn]" },
        ],
        solution: 'a) hôtel pas cher Paris. b) Dobbeltrom fra 65 euro per natt. c) Se løsningsforslag.',
        hints: ['pas cher = billig', 'a partir de = fra', 'la nuit = per natt'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 20.1: Dialogues du quotidien - Hverdagsdialoger
// ============================================================================

export const CHAPTER_FRANSK_1_20_1: TextbookChapter = {
  id: 'fransk-1-20-1',
  courseId: 'fransk-1',
  chapterNumber: '20.1',
  title: 'Dialogues du quotidien',
  subtitle: 'Hverdagsdialoger',
  description: 'Øv på utvidede dialoger i hverdagssituasjoner: på bakeriet, apoteket og på gata.',
  estimatedMinutes: 45,
  competenceGoals: [
    'delta i enkle samtaler om dagligdagse temaer',
  ],
  content: [
    {
      id: 'fransk-1-20-1-intro',
      type: 'text',
      content: `## Hverdagsdialoger på fransk

I dette kapittelet øver du på lengre dialoger i vanlige hverdagssituasjoner. Du lærer a handle på bakeriet, besøke apoteket og spørre om veien. Disse dialogene gir deg øving i a bruke alt du har lært så langt i kurset.`,
    },
    {
      id: 'fransk-1-20-1-text-1',
      type: 'text',
      content: `## På bakeriet (À la boulangerie)

Bakeriet er en viktig del av fransk kultur. Franskmenn kjøper fersk brød nesten hver dag! Her er nyttige ord og uttrykk:

| Fransk | Norsk |
|--------|-------|
| une baguette | en baguett (langt brød) |
| un croissant | en croissant |
| un pain au chocolat | et sjokoladebrood |
| une tarte aux pommes | en eplekake |
| un eclair | en vannbakkels |
| Je voudrais... | Jeg vil gjerne ha... |
| C'est combien ? | Hva koster det? |
| C'est tout. | Det er alt. |
| L'addition, s'il vous plaît. | Regningen, takk. |`,
    },
    {
      id: 'fransk-1-20-1-example-1',
      type: 'example',
      title: 'Eksempel 1: På bakeriet',
      problem: `Les dialogen og svar på spørsmålene:

*Boulanger : Bonjour ! Qu'est-ce que je vous sers ?*
*Client : Bonjour ! Je voudrais une baguette et deux croissants, s'il vous plaît.*
*Boulanger : Très bien. Autre chose ?*
*Client : Oui, vous avez des tartes aux pommes ?*
*Boulanger : Oui, bien sur ! Elles sont delicieuses aujourd'hui.*
*Client : Alors, une tarte aux pommes aussi, s'il vous plaît.*
*Boulanger : Voilà. Ça fait 8 euros 50.*
*Client : Voici 10 euros.*
*Boulanger : Et 1 euro 50 de monnaie. Bonne journée !*
*Client : Merci, bonne journée !*

a) Hva bestiller kunden?
b) Hva koster det totalt?
c) Hvor mye får kunden tilbake?`,
      solution: `a) Kunden bestiller en baguett, to croissanter og en eplekake.
b) Det koster 8 euro og 50 cent totalt (8 euros 50).
c) Kunden får 1 euro og 50 cent tilbake (betaler med 10 euro).`,
    },
    {
      id: 'fransk-1-20-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-20-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til fransk. Du er på et bakeri.',
        subTasks: [
          { label: 'a', task: 'Jeg vil gjerne ha to baguetter.', solution: 'Je voudrais deux baguettes, s\'il vous plait.' },
          { label: 'b', task: 'Har dere croissanter?', solution: 'Vous avez des croissants ?' },
          { label: 'c', task: 'Hva koster det?', solution: "C'est combien ? / Ça fait combien ?" },
          { label: 'd', task: 'Det er alt, takk.', solution: "C'est tout, merci." },
        ],
        solution: "a) Je voudrais deux baguettes, svp. b) Vous avez des croissants ? c) C'est combien ? d) C'est tout, merci.",
        hints: ['Je voudrais = Jeg vil gjerne ha', "C'est combien = Hva koster det"],
      },
    },
    {
      id: 'fransk-1-20-1-text-2',
      type: 'text',
      content: `## På apoteket (À la pharmacie)

I Frankrike har apotekene et grønt kors utenfor. Du kan kjøpe medisin, men også få råd om helse. Her er nyttige uttrykk:

| Fransk | Norsk |
|--------|-------|
| J'ai mal a la tête. | Jeg har hodepine. |
| J'ai mal au ventre. | Jeg har vondt i magen. |
| J'ai de la fièvre. | Jeg har feber. |
| Je suis enrhumé(e). | Jeg er forkjølet. |
| J'ai besoin de... | Jeg trenger... |
| un médicament | en medisin |
| une ordonnance | en resept |
| un comprime | en tablett |
| un sirop | en sirup |
| une crème | en krem |`,
    },
    {
      id: 'fransk-1-20-1-example-2',
      type: 'example',
      title: 'Eksempel 2: På apoteket',
      problem: `Les dialogen:

*Pharmacien : Bonjour, je peux vous aider ?*
*Client : Bonjour, j'ai mal a la tête et je suis enrhumé.*
*Pharmacien : Depuis quand ?*
*Client : Depuis hier soir.*
*Pharmacien : D'accord. Je vous conseille ces comprimes pour le mal de tete et ce sirop pour le rhume.*
*Client : Merci. C'est combien ?*
*Pharmacien : 12 euros 30. Vous avez une ordonnance ?*
*Client : Non, je n'ai pas d'ordonnance.*
*Pharmacien : Pas de problème, ces médicaments sont en vente libre.*

Hva feiler kunden, og hva anbefaler apotekeren?`,
      solution: `**Symptomer:** Kunden har hodepine (mal a la tête) og er forkjølet (enrhumé) siden i går kveld (depuis hier soir).

**Anbefaling:** Apotekeren anbefaler tabletter mot hodepine (comprimes pour le mal de tete) og sirup mot forkjølelse (sirop pour le rhume).

**Pris:** 12 euro og 30 cent. Ingen resept trengs (en vente libre = reseptfritt).`,
    },
    {
      id: 'fransk-1-20-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-20-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk. Du er på apoteket.',
        subTasks: [
          { label: 'a', task: 'Jeg har vondt i magen.', solution: "J'ai mal au ventre." },
          { label: 'b', task: 'Jeg trenger medisin mot forkjølelse.', solution: "J'ai besoin d'un médicament contre le rhume." },
          { label: 'c', task: 'Har du noe mot feber?', solution: 'Vous avez quelque chose contre la fièvre ?' },
        ],
        solution: "a) J'ai mal au ventre. b) J'ai besoin d'un médicament contre le rhume. c) Vous avez quelque chose contre la fièvre ?",
        hints: ["J'ai mal a = Jeg har vondt i", "J'ai besoin de = Jeg trenger", 'contre = mot'],
      },
    },
    {
      id: 'fransk-1-20-1-text-3',
      type: 'text',
      content: `## Sporge om veien (Demander le chemin)

Å kunne spørre om veien er viktig når du er i Frankrike. Her er nyttige uttrykk:

| Fransk | Norsk |
|--------|-------|
| Excusez-moi... | Unnskyld meg... |
| Ou se trouve... ? | Hvor er... ? |
| Comment aller a... ? | Hvordan kommer jeg til... ? |
| C'est loin d'ici ? | Er det langt herfra? |
| Tournez a gauche. | Sving til venstre. |
| Tournez a droite. | Sving til høyre. |
| Allez tout droit. | Ga rett fram. |
| C'est a cote de... | Det er ved siden av... |
| C'est en face de... | Det er overfor... |
| Prenez la première rue a... | Ta den første gaten til... |`,
    },
    {
      id: 'fransk-1-20-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Sporge om veien',
      problem: `Les dialogen:

*Touriste : Excusez-moi, ou se trouve la gare, s'il vous plaît ?*
*Passant : La gare ? C'est facile. Allez tout droit, puis tournez a gauche au feu rouge. La gare est en face de l'hôtel de ville.*
*Touriste : C'est loin d'ici ?*
*Passant : Non, c'est a cinq minutes a pied.*
*Touriste : Merci beaucoup !*
*Passant : De rien, bonne journée !*

Beskriv ruten til togstasjonen på norsk.`,
      solution: `**Ruten:** Ga rett fram, sving til venstre ved det røde trafikklyset (au feu rouge). Togstasjonen er overfor rådhuset (en face de l'hôtel de ville).

**Avstand:** Det er ca. 5 minutter til fots (a cinq minutes a pied).

**Nøkkelord:** tout droit = rett fram, à gauche = til venstre, en face de = overfor, à pied = til fots.`,
    },
    {
      id: 'fransk-1-20-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-20-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Unnskyld, hvor er museet?', solution: 'Excusez-moi, ou se trouve le musée ?' },
          { label: 'b', task: 'Ga rett fram og sving til høyre.', solution: 'Allez tout droit, puis tournez a droite.' },
          { label: 'c', task: 'Er det langt herfra?', solution: "C'est loin d'ici ?" },
        ],
        solution: 'a) Excusez-moi, ou se trouve le musée ? b) Allez tout droit, puis tournez a droite. c) C\'est loin d\'ici ?',
        hints: ['ou se trouve = hvor er/befinner seg', 'tout droit = rett fram'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-20-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-20-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort dialog på fransk for hver situasjon (3-4 replikker per dialog).',
        subTasks: [
          { label: 'a', task: 'Du kjøper en baguett og et pain au chocolat på bakeriet.', solution: '- Bonjour ! Je voudrais une baguette et un pain au chocolat, svp.\n- Voilà ! Ça fait 3 euros 50.\n- Voici 5 euros.\n- Et 1 euro 50 de monnaie. Bonne journée !' },
          { label: 'b', task: 'Du har vondt i halsen og går på apoteket.', solution: "- Bonjour, j'ai mal a la gorge.\n- Depuis quand ?\n- Depuis deux jours.\n- Je vous conseille ces pastilles. Ça fait 6 euros." },
          { label: 'c', task: 'Du spor en forbipasserende om veien til stranden.', solution: "- Excusez-moi, ou se trouve la plage ?\n- Allez tout droit, puis tournez a droite.\n- C'est loin ?\n- Non, c'est a 10 minutes a pied." },
        ],
        solution: 'Se løsningsforslagene for eksempler på dialoger.',
        hints: ['Bruk hoflige uttrykk: s\'il vous plait, merci, excusez-moi'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 20.2: Situations d'urgence et problemes - Nødssituasjoner og problemer
// ============================================================================

export const CHAPTER_FRANSK_1_20_2: TextbookChapter = {
  id: 'fransk-1-20-2',
  courseId: 'fransk-1',
  chapterNumber: '20.2',
  title: "Situations d'urgence et problemes",
  subtitle: 'Nødssituasjoner og problemer',
  description: 'Lær a kommunisere på fransk når du er syk, har gatt deg vill, eller trenger hjelp.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kommunisere i uventede situasjoner på fransk',
  ],
  content: [
    {
      id: 'fransk-1-20-2-intro',
      type: 'text',
      content: `## Nødssituasjoner og problemer

Når du reiser i et fransktalende land, kan det oppsta situasjoner der du trenger hjelp. Kanskje du har mistet passet, blitt syk, eller gatt deg vill. I dette kapittelet lærer du de viktigste frasene for a få hjelp når du trenger det.`,
    },
    {
      id: 'fransk-1-20-2-def-1',
      type: 'definition',
      title: 'Viktige nødsfraser',
      content: `Her er de viktigste frasene du trenger i nødssituasjoner:

| Fransk | Norsk |
|--------|-------|
| Au secours ! | Hjelp! |
| Aidez-moi ! | Hjelp meg! |
| Appelez la police ! | Ring politiet! |
| Appelez une ambulance ! | Ring en ambulanse! |
| J'ai perdu... | Jeg har mistet... |
| On m'a vole... | Noen har stjalet... |
| Je suis perdu(e). | Jeg har gatt meg vill. |
| J'ai un problème. | Jeg har et problem. |
| C'est urgent ! | Det haster! |
| Je suis malade. | Jeg er syk. |

**Viktige telefonnumre i Frankrike:**
- **15** : SAMU (akuttmedisin)
- **17** : Police (politi)
- **18** : Pompiers (brannvesen)
- **112** : Europeisk nodsnummer`,
    },
    {
      id: 'fransk-1-20-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Rapportere et problem',
      problem: `Du har mistet lommeboken din på togstasjonen. Hvordan forklarer du dette?

Lag 3 setninger på fransk der du:
a) Sier at du har et problem
b) Forklarer hva du har mistet
c) Sier hvor du mistet det`,
      solution: `a) "Excusez-moi, j'ai un problème."
(Unnskyld, jeg har et problem.)

b) "J'ai perdu mon portefeuille."
(Jeg har mistet lommeboken min.)

c) "Je l'ai perdu a la gare, je pense."
(Jeg mistet den på togstasjonen, tror jeg.)

**Ekstra nyttige ord:** mon portefeuille = lommeboken min, mon passeport = passet mitt, mon téléphone = telefonen min, mes clés = noklene mine.`,
    },
    {
      id: 'fransk-1-20-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-20-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Hjelp meg!', solution: 'Aidez-moi !' },
          { label: 'b', task: 'Jeg har mistet passet mitt.', solution: 'J\'ai perdu mon passeport.' },
          { label: 'c', task: 'Ring politiet!', solution: 'Appelez la police !' },
          { label: 'd', task: 'Jeg er syk.', solution: 'Je suis malade.' },
        ],
        solution: "a) Aidez-moi ! b) J'ai perdu mon passeport. c) Appelez la police ! d) Je suis malade.",
        hints: ['Aidez-moi = Hjelp meg', "J'ai perdu = Jeg har mistet"],
      },
    },
    {
      id: 'fransk-1-20-2-text-1',
      type: 'text',
      content: `## Hos legen (Chez le médecin)

Hvis du blir syk i Frankrike, er det nyttig a kunne forklare symptomene dine:

| Fransk | Norsk |
|--------|-------|
| J'ai mal a... | Jeg har vondt i... |
| J'ai mal a la tête | hodepine |
| J'ai mal a la gorge | vondt i halsen |
| J'ai mal au dos | vondt i ryggen |
| J'ai mal au ventre | vondt i magen |
| J'ai de la fièvre | feber |
| Je tousse | Jeg hoster |
| J'ai des nausees | Jeg er kvalm |
| Je me suis blesse(e) | Jeg har skadet meg |
| J'ai une allergie a... | Jeg er allergisk mot... |

**Dialog-struktur hos legen:**
1. Legen spor: "Qu'est-ce qui ne va pas ?" (Hva er galt?)
2. Du forklarer symptomene: "J'ai mal a..."
3. Legen spor hvor lenge: "Depuis quand ?" (Siden når?)
4. Du svarer: "Depuis hier / deux jours / une semaine" (Siden i går / to dager / en uke)`,
    },
    {
      id: 'fransk-1-20-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Hos legen',
      problem: `Les dialogen:

*Médecin : Bonjour. Qu'est-ce qui ne va pas ?*
*Patient : Bonjour, docteur. J'ai mal a la gorge et je tousse beaucoup.*
*Médecin : Depuis quand ?*
*Patient : Depuis trois jours.*
*Médecin : Vous avez de la fièvre ?*
*Patient : Oui, un peu. 38 degres.*
*Médecin : D'accord. Vous avez des allergies ?*
*Patient : Non, pas d'allergies.*
*Médecin : Je vais vous prescrire un antibiotique. Prenez un comprime matin et soir pendant cinq jours.*

Oppsummer på norsk: Hva feiler pasienten, og hva foreskriver legen?`,
      solution: `**Symptomer:** Pasienten har vondt i halsen (mal a la gorge), hoster mye (tousse beaucoup) og har litt feber på 38 grader. Det har vart i tre dager (depuis trois jours).

**Behandling:** Legen foreskriver (prescrire) en antibiotika. Pasienten skal ta en tablett morgen og kveld (matin et soir) i fem dager (pendant cinq jours).

**Ingen allergier** (pas d'allergies).`,
    },
    {
      id: 'fransk-1-20-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-20-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk. Du er hos legen.',
        subTasks: [
          { label: 'a', task: 'Jeg har vondt i ryggen siden mandag.', solution: "J'ai mal au dos depuis lundi." },
          { label: 'b', task: 'Jeg hoster og har feber.', solution: "Je tousse et j'ai de la fièvre." },
          { label: 'c', task: 'Jeg er allergisk mot penicillin.', solution: "J'ai une allergie a la penicilline." },
        ],
        solution: "a) J'ai mal au dos depuis lundi. b) Je tousse et j'ai de la fièvre. c) J'ai une allergie a la penicilline.",
        hints: ["J'ai mal a = Jeg har vondt i", 'depuis = siden'],
      },
    },
    {
      id: 'fransk-1-20-2-text-2',
      type: 'text',
      content: `## På politistasjonen (Au commissariat)

Hvis du blir utsatt for tyveri eller mister noe verdifullt, må du kanskje gå til politiet:

| Fransk | Norsk |
|--------|-------|
| Je voudrais faire une déclaration. | Jeg vil gjerne anmelde noe. |
| On m'a vole mon sac. | Noen har stjalet vesken min. |
| J'ai perdu mon portefeuille. | Jeg har mistet lommeboken min. |
| Ça s'est passé a... | Det skjedde på/ved... |
| C'était vers... heures. | Det var rundt klokka... |
| Je n'ai pas vu le voleur. | Jeg sag ikke tyven. |

**Nyttige ord:**
- un vol = et tyveri
- un voleur = en tyv
- un temoin = et vitne
- une déclaration = en anmeldelse
- un formulaire = et skjema`,
    },
    {
      id: 'fransk-1-20-2-example-3',
      type: 'example',
      title: 'Eksempel 3: På politistasjonen',
      problem: `Du har fatt stjalet telefonen din på metroen. Skriv tre setninger der du:
a) Sier at du vil anmelde noe
b) Forklarer hva som skjedde
c) Sier når og hvor det skjedde`,
      solution: `a) "Bonjour, je voudrais faire une déclaration."
(Hei, jeg vil gjerne anmelde noe.)

b) "On m'a vole mon téléphone portable dans le metro."
(Noen har stjalet mobiltelefonen min på metroen.)

c) "Ça s'est passé ce matin, vers 9 heures, à la station Châtelet."
(Det skjedde i dag morges, rundt klokka 9, på stasjonen Châtelet.)`,
    },
    {
      id: 'fransk-1-20-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-20-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Noen har stjalet vesken min.', solution: 'On m\'a vole mon sac.' },
          { label: 'b', task: 'Det skjedde på togstasjonen.', solution: "Ça s'est passé a la gare." },
          { label: 'c', task: 'Det var rundt klokka 14.', solution: "C'était vers 14 heures." },
        ],
        solution: "a) On m'a vole mon sac. b) Ça s'est passé a la gare. c) C'était vers 14 heures.",
        hints: ["On m'a vole = Noen har stjalet fra meg", "Ça s'est passé = Det skjedde"],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-20-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-20-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort dialog på fransk for situasjonen: Du har gatt deg vill i Paris og trenger hjelp med a finne tilbake til hotellet ditt.',
        subTasks: [
          { label: 'a', task: 'Stopp en forbipasserende og forklar at du har gatt deg vill.', solution: "Excusez-moi, je suis perdu(e). Pouvez-vous m'aider ?" },
          { label: 'b', task: 'Fortell hvilket hotell du bor på og spor om veien.', solution: "Mon hôtel s'appelle Hôtel du Nord. C'est dans la rue Lafayette. Comment y aller ?" },
          { label: 'c', task: 'Takk for hjelpen.', solution: 'Merci beaucoup, vous êtes très gentil(le) ! Bonne journée !' },
        ],
        solution: 'Se løsningsforslagene. Bruk: je suis perdu(e), pouvez-vous m\'aider, comment aller a...',
        hints: ['je suis perdu(e) = jeg har gatt meg vill', "pouvez-vous m'aider = kan De hjelpe meg"],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 20.3: Si + present - Betingelsessetninger
// ============================================================================

export const CHAPTER_FRANSK_1_20_3: TextbookChapter = {
  id: 'fransk-1-20-3',
  courseId: 'fransk-1',
  chapterNumber: '20.3',
  title: 'Si + present',
  subtitle: 'Betingelsessetninger',
  description: 'Lær a lage enkle betingelsessetninger med si + presens på fransk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke enkle betingelsessetninger med si + presens',
  ],
  content: [
    {
      id: 'fransk-1-20-3-intro',
      type: 'text',
      content: `## Betingelsessetninger med si (hvis)

På fransk bruker vi "si" for a si "hvis". Betingelsessetninger er nyttige for a snakke om hva som skjer under bestemte forutsetninger. På nivå 1 lærer vi den enkleste formen: **si + presens + presens/futur**.`,
    },
    {
      id: 'fransk-1-20-3-def-1',
      type: 'definition',
      title: 'Si + present (type 1)',
      content: `**Betingelsessetning type 1** brukes for reelle, mulige situasjoner:

**Struktur:** Si + presens, presens/futur proche

| Fransk | Norsk |
|--------|-------|
| Si tu viens, je suis content. | Hvis du kommer, er jeg glad. |
| Si il pleut, on reste a la maison. | Hvis det regner, blir vi hjemme. |
| Si tu veux, on va au cinéma. | Hvis du vil, går vi på kino. |
| Si j'ai le temps, je vais étudier. | Hvis jeg har tid, skal jeg studere. |

**Viktige regler:**
1. Etter "si" bruker vi **presens** (aldri futur!)
2. I hovedsetningen kan vi bruke **presens** eller **futur proche** (aller + infinitiv)
3. "Si" forkortets til **s'** foran "il" og "ils": s'il, s'ils
4. "Si" forkortets IKKE foran "elle" eller andre pronomen: si elle, si on`,
    },
    {
      id: 'fransk-1-20-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Enkle si-setninger',
      problem: `Oversett til fransk:
a) Hvis det er fint vær, går vi i parken.
b) Hvis du vil, kan vi spise sammen.
c) Hvis han kommer, blir jeg glad.`,
      solution: `a) S'il fait beau, on va au parc.
(Si + il -> s'il. "faire beau" = være fint vær)

b) Si tu veux, on peut manger ensemble.
(Si tu veux = hvis du vil)

c) S'il vient, je suis content(e).
(Si + il -> s'il. Presens i begge deler.)

**Merk:** Vi bruker presens etter "si", ikke futur!`,
    },
    {
      id: 'fransk-1-20-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-20-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til fransk. Bruk si + presens.',
        subTasks: [
          { label: 'a', task: 'Hvis det regner, blir vi hjemme.', solution: "S'il pleut, on reste a la maison." },
          { label: 'b', task: 'Hvis du vil, går vi på kino.', solution: 'Si tu veux, on va au cinéma.' },
          { label: 'c', task: 'Hvis jeg har tid, studerer jeg.', solution: "Si j'ai le temps, j'étudie." },
          { label: 'd', task: 'Hvis hun ringer, svarer jeg.', solution: "Si elle appelle, je réponds." },
        ],
        solution: "a) S'il pleut, on reste a la maison. b) Si tu veux, on va au cinéma. c) Si j'ai le temps, j'étudie. d) Si elle appelle, je réponds.",
        hints: ["Si + il = S'il", "Si + elle = Si elle (IKKE s'elle!)"],
      },
    },
    {
      id: 'fransk-1-20-3-text-1',
      type: 'text',
      content: `## Vanlige si-uttrykk i hverdagen

Mange dagligdagse uttrykk på fransk bruker "si":

| Uttrykk | Norsk | Brukes når... |
|---------|-------|--------------|
| Si tu veux | Hvis du vil | Du foreslaar noe |
| Si c'est possible | Hvis det er mulig | Du ber om noe hoflig |
| Si j'ai bien compris | Hvis jeg har forstått riktig | Du vil bekrefte noe |
| Si ça te dit | Hvis du har lyst | Du inviterer noen |
| Si on allait... ? | Hva om vi dro...? | Du foreslaar en aktivitet |

**Med futur proche (aller + infinitiv):**
- Si tu viens, on **va s'amuser** ! (Hvis du kommer, skal vi ha det morsomt!)
- Si il fait beau demain, on **va aller** à la plage. (Hvis det er fint vær i morgen, skal vi dra til stranden.)`,
    },
    {
      id: 'fransk-1-20-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Si-setninger i dialog',
      problem: `Les dialogen og finn alle si-setningene:

*Marie : Tu veux faire quoi ce weekend ?*
*Thomas : Si il fait beau, on va a la plage. Si il pleut, on reste a la maison.*
*Marie : Bonne idée. Et si on invite Pierre ?*
*Thomas : Oui ! Si tu l'appelles, je prépare le pique-nique.*
*Marie : D'accord ! Si on part a 10 heures, on arrive vers midi.*`,
      solution: `**Si-setninger i dialogen:**
1. **S'il fait beau**, on va a la plage. (Hvis det er fint vær, drar vi til stranden.)
2. **S'il pleut**, on reste a la maison. (Hvis det regner, blir vi hjemme.)
3. Et **si on invite** Pierre ? (Og hva om vi inviterer Pierre?)
4. **Si tu l'appelles**, je prépare le pique-nique. (Hvis du ringer ham, forbereder jeg piknik.)
5. **Si on part** a 10 heures, on arrive vers midi. (Hvis vi drar kl. 10, ankommer vi rundt middag.)

**Alle** følger regelen: si + presens!`,
    },
    {
      id: 'fransk-1-20-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-20-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fullfør setningene med riktig verbform.',
        subTasks: [
          { label: 'a', task: 'Si tu _______ (venir), je suis content.', solution: 'Si tu viens, je suis content. (presens av venir)' },
          { label: 'b', task: "Si il _______ (faire) beau, on _______ (aller) au parc.", solution: "S'il fait beau, on va au parc. (presens + presens)" },
          { label: 'c', task: 'Si nous _______ (avoir) le temps, nous _______ (visiter) le musée.', solution: 'Si nous avons le temps, nous allons visiter le musée. (presens + futur proche)' },
        ],
        solution: 'a) viens. b) fait, va. c) avons, allons visiter.',
        hints: ['Etter si brukes alltid presens', 'I hovedsetningen kan du bruke presens eller futur proche'],
      },
    },
    {
      id: 'fransk-1-20-3-tip-1',
      type: 'tip',
      content: `**Viktig a huske:** På fransk sier vi ALDRI "si il" - det forkortes alltid til **s'il**. Men dette gjelder KUN "il" og "ils":
- s'il vient (riktig) / si il vient (feil)
- s'ils viennent (riktig) / si ils viennent (feil)
- si elle vient (riktig) / s'elle vient (feil)
- si on veut (riktig) / s'on veut (feil)`,
    },
    {
      id: 'fransk-1-20-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Lage egne si-setninger',
      problem: `Lag si-setninger basert på disse situasjonene:
a) Du har en eksamen i morgen. Hva gjør du hvis du har tid i kveld?
b) Det er helg. Hva gjør du hvis været er fint?
c) En venn spor om du vil på kino. Hva svarer du?`,
      solution: `a) Si j'ai le temps ce soir, je vais reviser pour l'examen.
(Hvis jeg har tid i kveld, skal jeg repetere til eksamen.)

b) S'il fait beau ce weekend, je vais aller a la plage avec mes amis.
(Hvis det er fint vær i helgen, drar jeg til stranden med vennene mine.)

c) Si tu veux, on va au cinéma ce soir. Si le film est bien, on va s'amuser !
(Hvis du vil, går vi på kino i kveld. Hvis filmen er bra, skal vi ha det morsomt!)`,
    },
    {
      id: 'fransk-1-20-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-20-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk med si + presens.',
        subTasks: [
          { label: 'a', task: 'Hvis du studerer, består du eksamen.', solution: "Si tu étudies, tu réussis l'examen." },
          { label: 'b', task: 'Hvis vi tar toget, ankommer vi kl. 15.', solution: 'Si on prend le train, on arrive a 15 heures.' },
          { label: 'c', task: 'Hvis det er mulig, vil jeg gjerne besøke Paris.', solution: "Si c'est possible, je voudrais visiter Paris." },
        ],
        solution: "a) Si tu étudies, tu réussis l'examen. b) Si on prend le train, on arrive a 15 heures. c) Si c'est possible, je voudrais visiter Paris.",
        hints: ['réussir = lykkes, bestå', 'prendre le train = ta toget'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-20-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-20-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv 3 si-setninger på fransk om planene dine for helgen. Bruk forskjellige verb og situasjoner.',
        subTasks: [
          { label: 'a', task: 'Skriv en si-setning om været og en aktivitet.', solution: "S'il fait beau, je vais faire du velo." },
          { label: 'b', task: 'Skriv en si-setning om en venn og en plan.', solution: 'Si mon ami vient, on va jouer aux jeux video.' },
          { label: 'c', task: 'Skriv en si-setning om tid og studier.', solution: "Si j'ai le temps dimanche, je vais faire mes devoirs." },
        ],
        solution: 'Personlige svar. Viktig: bruk si + presens, og presens eller futur proche i hovedsetningen.',
        hints: ['Husk: si + presens (aldri futur)', "s'il (ikke si il)"],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 20.4: Révision générale - Totalrepetisjon
// ============================================================================

export const CHAPTER_FRANSK_1_20_4: TextbookChapter = {
  id: 'fransk-1-20-4',
  courseId: 'fransk-1',
  chapterNumber: '20.4',
  title: 'Révision générale',
  subtitle: 'Totalrepetisjon',
  description: 'Répéter all viktig grammatikk og vokabular fra Fransk Nivå 1.',
  estimatedMinutes: 60,
  competenceGoals: [
    'mestre grunnleggende fransk kommunikasjon på nivå 1',
  ],
  content: [
    {
      id: 'fransk-1-20-4-intro',
      type: 'text',
      content: `## Totalrepetisjon - Fransk Nivå 1

Gratulerer! Du nærmer deg slutten av Fransk Nivå 1. I dette kapittelet repeterer vi alt det viktigste du har lært: grammatikk, verb, vokabular og kommunikasjon. Bruk dette kapittelet som forberedelse til prøver og som oppslagsverk.`,
    },
    {
      id: 'fransk-1-20-4-text-1',
      type: 'text',
      content: `## Viktige verb: être, avoir og -er-verb

**Être (a være):**

| Person | Form |
|--------|------|
| je | suis |
| tu | es |
| il/elle/on | est |
| nous | sommes |
| vous | êtes |
| ils/elles | sont |

**Avoir (a ha):**

| Person | Form |
|--------|------|
| je | ai (j'ai) |
| tu | as |
| il/elle/on | a |
| nous | avons |
| vous | avez |
| ils/elles | ont |

**-er-verb (f.eks. parler):**

| Person | Endelse | Eksempel |
|--------|---------|----------|
| je | -e | je parle |
| tu | -es | tu parles |
| il/elle/on | -e | il parle |
| nous | -ons | nous parlons |
| vous | -ez | vous parlez |
| ils/elles | -ent | ils parlent |`,
    },
    {
      id: 'fransk-1-20-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Verb i presens',
      problem: `Boyr disse verbene i presens for de angitte personene:
a) être - je, nous
b) avoir - tu, ils
c) parler - elle, vous
d) habiter - j', nous`,
      solution: `a) je **suis**, nous **sommes**
b) tu **as**, ils **ont**
c) elle **parle**, vous **parlez**
d) j'**habite**, nous **habitons**

**Husk:** -er-verb fjerner "-er" og legger til endelsen. Être og avoir er uregelrette og må pugges!`,
    },
    {
      id: 'fransk-1-20-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-20-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av verbet i parentes.',
        subTasks: [
          { label: 'a', task: 'Je _______ (être) norvegien.', solution: 'Je suis norvegien.' },
          { label: 'b', task: 'Nous _______ (avoir) deux chats.', solution: 'Nous avons deux chats.' },
          { label: 'c', task: 'Ils _______ (habiter) à Paris.', solution: 'Ils habitent a Paris.' },
          { label: 'd', task: 'Tu _______ (aimer) le chocolat ?', solution: 'Tu aimes le chocolat ?' },
        ],
        solution: 'a) suis, b) avons, c) habitent, d) aimes',
        hints: ['Être og avoir er uregelrette', '-er-verb: fjern -er og legg til endelsen'],
      },
    },
    {
      id: 'fransk-1-20-4-text-2',
      type: 'text',
      content: `## Passé composé - Fortid

Passé composé brukes for handlinger som er ferdige. Det dannes med **avoir/être + partisipp**.

**Med avoir (de fleste verb):**
- J'ai mangé (Jeg spiste/har spist)
- Tu as parlé (Du snakket)
- Il a fini (Han avsluttet)

**Med être (bevegelsesverb + refleksive verb):**
- Je suis allé(e) (Jeg dro)
- Elle est venue (Hun kom)
- Nous sommes partis (Vi dro)
- Je me suis leve(e) (Jeg sto opp)

**Vanlige partisipper:**
| Infinitiv | Partisipp | Norsk |
|-----------|-----------|-------|
| manger | mangé | spist |
| parler | parlé | snakket |
| finir | fini | avsluttet |
| faire | fait | gjort |
| voir | vu | sett |
| prendre | pris | tatt |
| écrire | écrit | skrevet |
| être | été | vært |
| avoir | eu | hatt |`,
    },
    {
      id: 'fransk-1-20-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Passé composé',
      problem: `Sett disse setningene i passé composé:
a) Je mange une pizza.
b) Elle va a Paris.
c) Nous faisons les devoirs.`,
      solution: `a) J'**ai mangé** une pizza. (Jeg spiste en pizza.)
(manger -> mange, bruker avoir)

b) Elle **est allee** à Paris. (Hun dro til Paris.)
(aller -> alle, bruker être, -e fordi "elle")

c) Nous **avons fait** les devoirs. (Vi gjorde leksene.)
(faire -> fait, bruker avoir)

**Husk:** Med être må partisippet samsvare med subjektet (elle -> allee).`,
    },
    {
      id: 'fransk-1-20-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-20-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv setningene i passé composé.',
        subTasks: [
          { label: 'a', task: 'Je (parler) avec Marie.', solution: "J'ai parlé avec Marie." },
          { label: 'b', task: 'Elle (aller) au cinéma.', solution: 'Elle est allee au cinéma.' },
          { label: 'c', task: 'Nous (faire) un gâteau.', solution: 'Nous avons fait un gâteau.' },
          { label: 'd', task: 'Tu (voir) le film ?', solution: 'Tu as vu le film ?' },
        ],
        solution: "a) J'ai parlé. b) Elle est allee. c) Nous avons fait. d) Tu as vu.",
        hints: ['De fleste verb bruker avoir', 'Bevegelsesverb (aller, venir, partir...) bruker être'],
      },
    },
    {
      id: 'fransk-1-20-4-text-3',
      type: 'text',
      content: `## Grammatikk-oversikt

**Nektelse:**
- Je **ne** parle **pas** français. (Jeg snakker ikke fransk.)
- Je **n'**ai **pas** de freres. (Jeg har ikke brødre.)

**Sporsmal (3 måter):**
1. Intonasjon: Tu parles français ? (stigende tonefall)
2. Est-ce que: Est-ce que tu parles français ?
3. Inversjon: Parles-tu français ? (mest formelt)

**Artikler:**
| Type | Hankjonn | Hunkjonn | Flertall |
|------|----------|----------|----------|
| Bestemt | le | la | les |
| Ubestemt | un | une | des |
| Delingsartikkel | du | de la | des |

**Eiendomsord:**
| Norsk | Hankjonn | Hunkjonn | Flertall |
|-------|----------|----------|----------|
| min | mon | ma | mes |
| din | ton | ta | tes |
| hans/hennes | son | sa | ses |
| var | notre | notre | nos |
| deres (dere) | votre | votre | vos |
| deres (de) | leur | leur | leurs |

**Modale verb:**
- pouvoir (kan): je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent
- vouloir (vil): je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent
- devoir (må): je dois, tu dois, il doit, nous devons, vous devez, ils doivent`,
    },
    {
      id: 'fransk-1-20-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Blandet grammatikk',
      problem: `Oversett til fransk:
a) Jeg har ikke en bil. (nektelse + artikkel)
b) Snakker du fransk? (spørsmål)
c) Sosterma mi heter Marie. (eiendomsord)
d) Jeg må gjøre leksene. (modalt verb)`,
      solution: `a) Je **n'ai pas de** voiture.
(I nektelse: un/une/des -> de)

b) **Est-ce que** tu parles français ?
(Eller: Tu parles français ? / Parles-tu français ?)

c) **Ma** soeur s'appelle Marie.
(ma = min, for hunkjønnsord)

d) Je **dois** faire les devoirs.
(devoir + infinitiv)`,
    },
    {
      id: 'fransk-1-20-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-20-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk. Bruk riktig grammatikk.',
        subTasks: [
          { label: 'a', task: 'Jeg snakker ikke spansk.', solution: 'Je ne parle pas espagnol.' },
          { label: 'b', task: 'Kan du hjelpe meg? (uformelt)', solution: 'Tu peux m\'aider ?' },
          { label: 'c', task: 'Broren min er 18 år gammal.', solution: 'Mon frere a 18 ans.' },
          { label: 'd', task: 'Vi må dra nå.', solution: 'Nous devons partir maintenant.' },
        ],
        solution: 'a) Je ne parle pas espagnol. b) Tu peux m\'aider ? c) Mon frere a 18 ans. d) Nous devons partir maintenant.',
        hints: ['ne...pas rundt verbet', 'pouvoir + infinitiv', 'avoir + ans (alder)'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-20-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-20-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Totaloppgave: Skriv en kort tekst på fransk (8-10 setninger) der du bruker alt du har lært. Presenter deg selv, fortell om hverdagen din, og beskriv planene dine for sommeren.',
        subTasks: [
          { label: 'a', task: 'Presenter deg selv: navn, alder, bosted, familie (bruk être, avoir, eiendomsord).', solution: "Je m'appelle [navn]. J'ai [alder] ans. J'habite a [sted] en Norvège. Ma famille est petite: j'ai un frere et une soeur." },
          { label: 'b', task: 'Fortell om hverdagen din: hva du liker, hva du gjør (bruk -er-verb, modale verb, nektelse).', solution: "J'aime le sport et la musique. Je ne parle pas bien français, mais j'étudie beaucoup. Le weekend, je peux sortir avec mes amis." },
          { label: 'c', task: 'Beskriv planene for sommeren: hva du har gjort og hva du skal gjøre (bruk passé composé, si-setninger, futur proche).', solution: "L'ete dernier, je suis allé(e) en France. C'était super ! Si j'ai assez d'argent cet été, je vais visiter Paris. Je vais voir la Tour Eiffel et manger des croissants !" },
        ],
        solution: "Se løsningsforslagene. Bruk variert grammatikk: être/avoir, -er-verb, passé composé, nektelse, spørsmål, eiendomsord, modale verb, si-setninger.",
        hints: ['Bruk overgangsfrasene: d\'abord, ensuite, enfin', 'Varier mellom presens, passé composé og futur proche'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const FRANSK_1_CHAPTERS_19_20: TextbookChapter[] = [
  CHAPTER_FRANSK_1_19_1,
  CHAPTER_FRANSK_1_19_2,
  CHAPTER_FRANSK_1_19_3,
  CHAPTER_FRANSK_1_19_4,
  CHAPTER_FRANSK_1_20_1,
  CHAPTER_FRANSK_1_20_2,
  CHAPTER_FRANSK_1_20_3,
  CHAPTER_FRANSK_1_20_4,
];
