/* eslint-disable */
// @ts-nocheck
/**
 * Fransk Niva 1 - Kapittel 19-20
 *
 * Kapittel 19: Communication numerique (Digital kommunikasjon)
 * Kapittel 20: Dialogues pratiques et revision (Praktiske dialoger og repetisjon)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 19.1: Envoyer un SMS en francais - Sende SMS pa fransk
// ============================================================================

export const CHAPTER_FRANSK_1_19_1: TextbookChapter = {
  id: 'fransk-1-19-1',
  courseId: 'fransk-1',
  chapterNumber: '19.1',
  title: 'Envoyer un SMS en francais',
  subtitle: 'Sende SMS pa fransk',
  description: 'Laer vanlige franske tekstmeldingsforkortelser og skriv uformelle meldinger pa fransk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke fransk i digitale sammenhenger',
  ],
  content: [
    {
      id: 'fransk-1-19-1-intro',
      type: 'text',
      content: `## SMS og tekstmeldinger pa fransk

Nar franskmenn skriver tekstmeldinger, bruker de mange forkortelser - akkurat som vi gjor pa norsk! Disse forkortelsene sparer tid og plass, men de kan vaere vanskelige a forsta hvis du ikke kjenner dem. I dette kapittelet laerer du de vanligste franske SMS-forkortelsene og hvordan du skriver uformelle meldinger.`,
    },
    {
      id: 'fransk-1-19-1-def-1',
      type: 'definition',
      title: 'Franske SMS-forkortelser (le langage SMS)',
      content: `**Le langage SMS** er det uformelle spraket som brukes i tekstmeldinger pa fransk. Her er de vanligste forkortelsene:

| Forkortelse | Fullt uttrykk | Norsk |
|-------------|--------------|-------|
| slt | salut | hei |
| bjr | bonjour | god dag |
| stp | s'il te plait | vaer sa snill (uformelt) |
| svp | s'il vous plait | vaer sa snill (formelt) |
| mdr | mort de rire | "dor av latter" (= lol) |
| bcp | beaucoup | mye |
| pk | pourquoi | hvorfor |
| pcq / psk | parce que | fordi |
| tkt | t'inquiete | ikke bekymre deg |
| dsl | desole(e) | beklager |
| cc | coucou | hei (veldig uformelt) |
| a+ | a plus (tard) | snakkes |
| biz | bisous | kyss (avskjedshilsen) |

**Merk:** Disse forkortelsene brukes KUN i uformelle meldinger, aldri i formelle tekster!`,
    },
    {
      id: 'fransk-1-19-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Tyde SMS-forkortelser',
      problem: `Hva betyr disse tekstmeldingene pa vanlig fransk?
a) "slt, cv?"
b) "mdr, c tro dr"
c) "dsl, je sui en retard"`,
      solution: `a) "slt, cv?" = "Salut, ca va ?" (Hei, hvordan gar det?)
b) "mdr, c tro dr" = "Mort de rire, c'est trop drole" (Dor av latter, det er for morsomt)
c) "dsl, je sui en retard" = "Desole, je suis en retard" (Beklager, jeg er forsinket)

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
          { label: 'c', task: 'stp', solution: "s'il te plait" },
          { label: 'd', task: 'mdr', solution: 'mort de rire' },
        ],
        solution: "a) salut, b) bonjour, c) s'il te plait, d) mort de rire",
        hints: ['Se tabellen over SMS-forkortelser'],
      },
    },
    {
      id: 'fransk-1-19-1-text-1',
      type: 'text',
      content: `## Skrive en uformell melding

Nar du skriver en SMS eller melding til en venn pa fransk, folger du denne strukturen:

1. **Hilsen**: slt / cc / bjr
2. **Innhold**: Kort og uformelt
3. **Avskjed**: a+ / biz / a demain (ses i morgen)

**Eksempel pa en kort SMS-samtale:**

*Thomas: Slt ! Ca va ?*
*Marie: Cc ! Oui ca va, et toi ?*
*Thomas: Bien ! Tu fais quoi ce soir ?*
*Marie: Rien de special, pk ?*
*Thomas: On va au cinema ? Il y a un bon film.*
*Marie: Oui, super ! A quelle heure ?*
*Thomas: A 20h. Rdv devant le cinema.*
*Marie: Ok, a+ !*

**Rdv** = rendez-vous (mote/avtale)`,
    },
    {
      id: 'fransk-1-19-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Skrive en SMS',
      problem: `Skriv en kort SMS pa fransk der du:
a) Hilser pa en venn
b) Spor om han/hun vil spise lunsj sammen
c) Foreslaar et tidspunkt`,
      solution: `**Eksempel:**
"Slt ! Tu veux manger ensemble a midi ? Rdv a la cantine a 12h ? A+"

**Pa vanlig fransk:** "Salut ! Tu veux manger ensemble a midi ? Rendez-vous a la cantine a 12 heures ? A plus !"

(Hei! Vil du spise sammen til lunsj? Motes i kantina kl. 12? Snakkes!)`,
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
          { label: 'a', task: 'cc, cv ? tu fais koi ?', solution: 'Coucou, ca va ? Tu fais quoi ?' },
          { label: 'b', task: 'dsl, g pa le tps', solution: "Desole, j'ai pas le temps" },
          { label: 'c', task: 'pk t pa venu ?', solution: "Pourquoi tu n'es pas venu ?" },
        ],
        solution: "a) Coucou, ca va ? Tu fais quoi ? b) Desole, j'ai pas le temps. c) Pourquoi tu n'es pas venu ?",
        hints: ['g = j\'ai', 'koi = quoi', 'tps = temps'],
      },
    },
    {
      id: 'fransk-1-19-1-text-2',
      type: 'text',
      content: `## Emojier og uttrykk

Franske ungdommer bruker ogsa emojier og spesielle uttrykk i meldinger:

| Uttrykk | Betydning |
|---------|-----------|
| :) / ^^ | smile, glad |
| :( | trist |
| xD / mdr | ler hoylytt |
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
a) "Le film c'etait trop bien ! ^^"
b) "Mdr, c'est ouf ce truc"
c) "J'en ai marre des devoirs :("`,
      solution: `a) "Filmen var kjempebra!" (avsender er glad/fornoyd)
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
        task: 'Skriv en passende SMS-respons pa fransk.',
        subTasks: [
          { label: 'a', task: 'Vennen din skriver: "Tu veux venir a ma fete samedi ?" Svar ja, du er begeistret.', solution: 'Oui, trop bien ! A quelle heure ? ^^' },
          { label: 'b', task: 'Vennen din skriver: "Dsl, je peux pas venir ce soir." Si at det er synd, men at det er ok.', solution: "Oh, c'est dommage :( Mais tkt, c'est pas grave ! A+" },
          { label: 'c', task: 'Vennen din skriver: "T\'as vu le match ?" Si at du sag det og at det var kjempebra.', solution: 'Oui ! C\'etait trop bien, mdr ! ^^' },
        ],
        solution: 'a) Oui, trop bien ! b) C\'est dommage, mais tkt ! c) Oui, c\'etait trop bien !',
        hints: ['trop bien = kjempebra', "tkt = t'inquiete (ikke bekymre deg)", "c'est dommage = det er synd"],
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
        task: 'Skriv en SMS-samtale pa fransk mellom to venner. Bruk minst 5 SMS-forkortelser.',
        subTasks: [
          { label: 'a', task: 'Person A hilser og spor hva person B gjor i helgen.', solution: 'Slt ! Tu fais koi ce weekend ?' },
          { label: 'b', task: 'Person B svarer og foreslaar en aktivitet.', solution: 'Cc ! Rien de special. On va au parc ? Il fait beau !' },
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
// Kapittel 19.2: Les reseaux sociaux - Sosiale medier
// ============================================================================

export const CHAPTER_FRANSK_1_19_2: TextbookChapter = {
  id: 'fransk-1-19-2',
  courseId: 'fransk-1',
  chapterNumber: '19.2',
  title: 'Les reseaux sociaux',
  subtitle: 'Sosiale medier',
  description: 'Laer vokabular for sosiale medier pa fransk og lag en enkel profil.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kommunisere pa fransk i digitale kanaler',
  ],
  content: [
    {
      id: 'fransk-1-19-2-intro',
      type: 'text',
      content: `## Sosiale medier pa fransk

Sosiale medier er en stor del av hverdagen for ungdom over hele verden. Nar du bruker sosiale medier pa fransk, far du oving i a lese og skrive fransk i autentiske situasjoner. I dette kapittelet laerer du nyttig vokabular og ovelser knyttet til sosiale medier.`,
    },
    {
      id: 'fransk-1-19-2-def-1',
      type: 'definition',
      title: 'Vokabular for sosiale medier',
      content: `Her er de viktigste ordene du trenger for a snakke om sosiale medier pa fransk:

| Fransk | Norsk |
|--------|-------|
| un reseau social | et sosialt medium |
| un profil | en profil |
| un compte | en konto |
| publier / poster | legge ut / poste |
| partager | dele |
| aimer | like |
| commenter | kommentere |
| suivre | folge |
| un abonne | en folger |
| un fil d'actualite | en nyhetsstrom |
| une photo de profil | et profilbilde |
| un mot de passe | et passord |
| une notification | et varsel |
| un hashtag / un mot-cle | en hashtag / et nokkelord |
| mettre en ligne | laste opp |
| une story | en story / en historie |
| en direct | direkte / live |`,
    },
    {
      id: 'fransk-1-19-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Forstaa en profil',
      problem: `Les denne franske profilen og svar pa sporsmalene:

**Nom:** Marie Dupont
**Age:** 17 ans
**Ville:** Lyon, France
**Bio:** "J'adore la musique, les voyages et la photographie. Lycéenne en terminale. Mon rêve : visiter la Norvège !"
**Abonnés:** 342
**Publications:** 89

a) Hvor gammel er Marie?
b) Hva er hobbyene hennes?
c) Hva er drommen hennes?`,
      solution: `a) Marie er 17 ar gammal.
b) Hobbyene hennes er musikk, reiser og fotografering (la musique, les voyages, la photographie).
c) Drommen hennes er a besoke Norge (visiter la Norvege).`,
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
          { label: 'c', task: 'suivre', solution: 'folge' },
          { label: 'd', task: 'un abonne', solution: 'en folger' },
        ],
        solution: 'a) legge ut, b) dele, c) folge, d) en folger',
        hints: ['Se vokabulartabellen'],
      },
    },
    {
      id: 'fransk-1-19-2-text-1',
      type: 'text',
      content: `## Lage en fransk profil

Nar du lager en profil pa fransk, trenger du a kunne beskrive deg selv kort. Her er en mal:

**Struktur for en bio:**
1. Alder og bosted: "J'ai ... ans, j'habite a ..."
2. Interesser: "J'adore / J'aime ..."
3. Noe personlig: Et morsommet sitat, en drom, eller noe du er stolt av

**Nyttige uttrykk for bio:**
- "Passionné(e) de..." = Lidenskapelig opptatt av...
- "Fan de..." = Fan av...
- "Amoureux/amoureuse de la vie" = Glad i livet
- "En route vers mes rêves" = Pa vei mot drommene mine
- "La vie est belle" = Livet er vakkert`,
    },
    {
      id: 'fransk-1-19-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Skrive en bio',
      problem: `Skriv en enkel bio pa fransk for en 16-aring fra Bergen som liker fotball og musikk.`,
      solution: `**Eksempel:**
"16 ans, Bergen, Norvège. Passionné de football et de musique. Fan de Manchester City ! La vie est belle ⚽🎵"

**Oversettelse:** 16 ar, Bergen, Norge. Lidenskapelig opptatt av fotball og musikk. Fan av Manchester City! Livet er vakkert.`,
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
          { label: 'a', task: 'En 17-aring fra Oslo som liker a lese og reise.', solution: "17 ans, Oslo, Norvege. J'adore la lecture et les voyages. En route vers mes reves !" },
          { label: 'b', task: 'En 16-aring fra Trondheim som er glad i dyr og natur.', solution: '16 ans, Trondheim. Passionnee de la nature et des animaux. La vie est belle !' },
          { label: 'c', task: 'En 15-aring fra Stavanger som spiller gitar og liker film.', solution: '15 ans, Stavanger. Fan de guitare et de cinema. La musique, c\'est ma vie !' },
        ],
        solution: 'Personlige svar. Se losningsforslagene for eksempler.',
        hints: ["J'adore = Jeg elsker", 'Passionne(e) de = Lidenskapelig opptatt av'],
      },
    },
    {
      id: 'fransk-1-19-2-text-2',
      type: 'text',
      content: `## Kommentere og reagere

Pa sosiale medier skriver vi ofte korte kommentarer. Her er vanlige franske uttrykk:

| Fransk kommentar | Norsk |
|-----------------|-------|
| Trop beau/belle ! | Sa vakkert! |
| J'adore ! | Elsker det! |
| Genial ! | Genialt! |
| C'est magnifique ! | Det er fantastisk! |
| Trop drole ! | Sa morsomt! |
| Bravo ! | Bra! |
| Felicitations ! | Gratulerer! |
| Bonne chance ! | Lykke til! |
| Tu me manques ! | Jeg savner deg! |
| Vivement les vacances ! | Gleder meg til ferien! |`,
    },
    {
      id: 'fransk-1-19-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Kommentere et innlegg',
      problem: `Vennen din har lagt ut et bilde fra ferien i Paris. Skriv tre ulike kommentarer pa fransk.`,
      solution: `1. "Trop beau ! J'adore Paris !"
2. "C'est magnifique ! Tu as de la chance !"
3. "Genial ! Je veux aussi visiter Paris un jour !"

**Oversettelse:**
1. Sa vakkert! Jeg elsker Paris!
2. Det er fantastisk! Du er heldig!
3. Genialt! Jeg vil ogsa besoke Paris en dag!`,
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
          { label: 'a', task: 'Vennen din har bestatt en eksamen.', solution: 'Felicitations ! Bravo, tu es le/la meilleur(e) !' },
          { label: 'b', task: 'Noen har lagt ut et morsomt bilde.', solution: 'Mdr, trop drole ! ^^' },
          { label: 'c', task: 'Vennen din reiser pa ferie i morgen.', solution: 'Bonnes vacances ! Bonne chance et profite bien !' },
        ],
        solution: 'a) Felicitations ! Bravo ! b) Trop drole ! c) Bonnes vacances !',
        hints: ['Felicitations = gratulerer', 'Bonnes vacances = god ferie'],
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
          { label: 'a', task: 'Skriv en bio pa fransk (2-3 setninger) med alder, bosted og interesser.', solution: "Eksempel: 16 ans, Oslo, Norvege. J'adore la musique et le sport. La vie est belle !" },
          { label: 'b', task: 'Skriv et kort innlegg (1-2 setninger) der du forteller hva du gjor i dag.', solution: "Eksempel: Aujourd'hui, je suis au cafe avec mes amis. C'est trop bien !" },
          { label: 'c', task: 'Skriv to kommentarer fra "venner" pa innlegget ditt.', solution: 'Eksempel: "Genial ! J\'adore !" og "Trop beau ! On se voit demain ?"' },
        ],
        solution: 'Personlige svar. Bruk vokabularet fra kapittelet.',
        hints: ['Bruk ordene: publier, partager, aimer, commenter'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 19.3: Ecrire un e-mail formel - Skrive formell e-post
// ============================================================================

export const CHAPTER_FRANSK_1_19_3: TextbookChapter = {
  id: 'fransk-1-19-3',
  courseId: 'fransk-1',
  chapterNumber: '19.3',
  title: 'Ecrire un e-mail formel',
  subtitle: 'Skrive formell e-post',
  description: 'Laer a skrive formelle e-poster pa fransk med riktig struktur og hoflighetsfraser.',
  estimatedMinutes: 45,
  competenceGoals: [
    'skrive formelle og uformelle tekster tilpasset formal og mottaker',
  ],
  content: [
    {
      id: 'fransk-1-19-3-intro',
      type: 'text',
      content: `## Formell e-post pa fransk

A kunne skrive en formell e-post pa fransk er nyttig i mange situasjoner: soke pa en jobb, kontakte en skole, eller skrive til noen du ikke kjenner. Fransk har veldig faste regler for hoflighet i formelle brev og e-poster, og det er viktig a folge dem.`,
    },
    {
      id: 'fransk-1-19-3-def-1',
      type: 'definition',
      title: 'Strukturen i en formell fransk e-post',
      content: `En formell fransk e-post har denne strukturen:

**1. Tiltale (formule d'appel):**
- Madame, / Monsieur, (til en kvinne / mann)
- Madame, Monsieur, (hvis du ikke vet kjonnet)
- Cher Monsieur, / Chere Madame, (noe mer personlig)

**2. Innledning:**
- Je me permets de vous ecrire pour... (Jeg tillater meg a skrive til Dem for a...)
- Je vous ecris au sujet de... (Jeg skriver til Dem angaende...)
- Suite a votre annonce... (I forbindelse med Deres annonse...)

**3. Hoveddel:**
- Forklar tydelig hva du onsker

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

Je me permets de vous ecrire pour obtenir des informations sur vos cours de francais pour etrangers.

Je suis un eleve norvegien de 17 ans et je voudrais suivre un cours intensif de francais a Paris cet ete. Pourriez-vous m'envoyer le programme et les tarifs, s'il vous plait ?

Je vous remercie par avance de votre reponse.

Cordialement,
Erik Hansen`,
      solution: `**Tiltale:** "Madame, Monsieur," (formell tiltale til ukjent mottaker)
**Innledning:** "Je me permets de vous ecrire pour obtenir des informations..." (presenterer formalet)
**Hoveddel:** "Je suis un eleve norvegien... Pourriez-vous m'envoyer..." (forklarer situasjonen og ber om noe)
**Avslutning:** "Je vous remercie par avance de votre reponse." (takker pa forhand)
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
          { label: 'a', task: 'Je me permets de vous ecrire pour...', solution: 'Jeg tillater meg a skrive til Dem for a...' },
          { label: 'b', task: 'Veuillez agreer mes salutations distinguees.', solution: 'Motta mine beste hilsener. (Svart formell avslutning)' },
          { label: 'c', task: 'Je vous remercie par avance.', solution: 'Jeg takker Dem pa forhand.' },
          { label: 'd', task: 'Cordialement,', solution: 'Vennlig hilsen,' },
        ],
        solution: 'a) Jeg tillater meg a skrive til Dem... b) Motta mine beste hilsener. c) Jeg takker Dem pa forhand. d) Vennlig hilsen.',
        hints: ['Formelle fraser pa fransk er lengre og mer hoytidelige enn pa norsk'],
      },
    },
    {
      id: 'fransk-1-19-3-text-1',
      type: 'text',
      content: `## Forskjellen mellom formelt og uformelt

Det er stor forskjell mellom en formell og uformell e-post pa fransk:

| Element | Formelt | Uformelt |
|---------|---------|----------|
| **Tiltale** | Madame, Monsieur, | Salut ! / Coucou ! |
| **Du/De** | vous | tu |
| **Innledning** | Je me permets de vous ecrire... | Ca va ? Je t'ecris pour... |
| **Avslutning** | Cordialement, | Bisous / A bientot ! |
| **Tone** | Hoflig, distansert | Varm, personlig |

**Viktig:** Pa fransk er det a bruke "vous" (De) i formelle sammenhenger ikke bare hoflig - det er helt nodvendig. A bruke "tu" (du) til noen du ikke kjenner regnes som uhoflig.`,
    },
    {
      id: 'fransk-1-19-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Formelt vs. uformelt',
      problem: `Skriv den samme meldingen bade formelt og uformelt:
"Kan du sende meg informasjon om kurset?"`,
      solution: `**Formelt:**
"Pourriez-vous m'envoyer des informations sur le cours, s'il vous plait ?"
(Kunne De sende meg informasjon om kurset, vaer sa snill?)

**Uformelt:**
"Tu peux m'envoyer des infos sur le cours ?"
(Kan du sende meg info om kurset?)

**Legg merke til:** Formelt bruker "pourriez-vous" (hoflighetsform med conditionnel) og "s'il vous plait", mens uformelt bruker "tu peux" og kortformen "infos".`,
    },
    {
      id: 'fransk-1-19-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-19-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjor disse uformelle uttrykkene formelle.',
        subTasks: [
          { label: 'a', task: 'Salut ! Je veux des infos.', solution: 'Madame, Monsieur, je me permets de vous ecrire pour obtenir des informations.' },
          { label: 'b', task: 'Tu peux repondre vite ?', solution: 'Pourriez-vous me repondre dans les meilleurs delais ?' },
          { label: 'c', task: 'Merci, a plus !', solution: 'Je vous remercie par avance. Cordialement,' },
        ],
        solution: 'a) Madame, Monsieur, je me permets de vous ecrire pour obtenir des informations. b) Pourriez-vous me repondre dans les meilleurs delais ? c) Je vous remercie par avance. Cordialement,',
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
| Soke pa noe | Je me permets de poser ma candidature pour... |
| Klage | Je me permets de vous signaler un probleme... |
| Takke | Je vous remercie pour votre aide. |
| Be om svar | Dans l'attente de votre reponse... |
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
      solution: `**Objet : Reservation d'une chambre**

Madame, Monsieur,

Je me permets de vous ecrire pour savoir si vous avez des chambres disponibles au mois de juillet.

Je souhaiterais reserver une chambre pour deux personnes pour une semaine, du 10 au 17 juillet. Pourriez-vous m'indiquer le tarif, s'il vous plait ?

Dans l'attente de votre reponse, je vous prie d'agreer mes salutations distinguees.

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
          { label: 'a', task: 'Jeg skriver til Dem angaende Deres annonse.', solution: 'Je vous ecris au sujet de votre annonce.' },
          { label: 'b', task: 'Kunne De sende meg mer informasjon?', solution: "Pourriez-vous m'envoyer plus d'informations ?" },
          { label: 'c', task: 'I pavente av Deres svar, vennlig hilsen.', solution: "Dans l'attente de votre reponse, cordialement," },
        ],
        solution: "a) Je vous ecris au sujet de votre annonce. b) Pourriez-vous m'envoyer plus d'informations ? c) Dans l'attente de votre reponse, cordialement,",
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
        task: 'Skriv en komplett formell e-post pa fransk til en skole i Frankrike. Du onsker informasjon om et sommerkurs i fransk.',
        subTasks: [
          { label: 'a', task: 'Skriv tiltale og innledning.', solution: 'Madame, Monsieur, je me permets de vous ecrire pour obtenir des informations sur vos cours de francais d\'ete.' },
          { label: 'b', task: 'Skriv hoveddelen: presenter deg selv og forklar hva du onsker.', solution: 'Je suis un(e) eleve norvegien(ne) de 16 ans. Je souhaiterais suivre un cours intensif de francais pendant le mois de juillet. Pourriez-vous m\'envoyer le programme et les tarifs ?' },
          { label: 'c', task: 'Skriv avslutning med takk og formell hilsen.', solution: 'Je vous remercie par avance de votre reponse. Cordialement, [Navn]' },
        ],
        solution: 'Se losningsforslagene for en komplett e-post. Viktig: Bruk "vous", formell tiltale og hoflig avslutning.',
        hints: ['Folg strukturen: tiltale -> innledning -> hoveddel -> avslutning -> underskrift'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 19.4: Chercher des informations en francais - Soke informasjon pa fransk
// ============================================================================

export const CHAPTER_FRANSK_1_19_4: TextbookChapter = {
  id: 'fransk-1-19-4',
  courseId: 'fransk-1',
  chapterNumber: '19.4',
  title: 'Chercher des informations en francais',
  subtitle: 'Soke informasjon pa fransk',
  description: 'Laer a soke etter og forsta informasjon pa franske nettsider.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke digitale ressurser i spraklaeringen',
  ],
  content: [
    {
      id: 'fransk-1-19-4-intro',
      type: 'text',
      content: `## Soke informasjon pa fransk

A kunne soke etter og forsta informasjon pa fransk er en viktig ferdighet. Enten du leter etter informasjon til et skoleprosjekt, planlegger en reise, eller bare er nysgjerrig, er det nyttig a kunne navigere franske nettsider. I dette kapittelet laerer du strategier for a soke pa fransk og forsta det du finner.`,
    },
    {
      id: 'fransk-1-19-4-def-1',
      type: 'definition',
      title: 'Nyttige sokeord og nettbegreper',
      content: `For a soke effektivt pa fransk, trenger du disse ordene:

| Fransk | Norsk |
|--------|-------|
| chercher | soke |
| une recherche | et sok |
| un moteur de recherche | en soketjeneste |
| un site web / un site internet | en nettside |
| une page d'accueil | en hjemmeside / forside |
| un lien | en lenke |
| cliquer | klikke |
| telecharger | laste ned |
| un navigateur | en nettleser |
| un article | en artikkel |
| les resultats | resultatene |
| un mot-cle | et nokkelord |
| se connecter | logge inn |
| un menu | en meny |
| les actualites | nyhetene |`,
    },
    {
      id: 'fransk-1-19-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Forsta en fransk nettside',
      problem: `Her er menyen fra en fransk nettside om turisme. Hva betyr hvert menypunkt?

**Menu:**
- Accueil
- Destinations
- Hotels et hebergements
- Activites et loisirs
- Infos pratiques
- Contact`,
      solution: `- **Accueil** = Hjem / Forside
- **Destinations** = Reisemal
- **Hotels et hebergements** = Hoteller og overnattingssteder
- **Activites et loisirs** = Aktiviteter og fritid
- **Infos pratiques** = Praktisk informasjon
- **Contact** = Kontakt

**Tips:** Mange franske nettsider har en lignende struktur som norske. Bruk konteksten og cognater for a forsta!`,
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
          { label: 'a', task: 'un moteur de recherche', solution: 'en soketjeneste' },
          { label: 'b', task: 'telecharger', solution: 'laste ned' },
          { label: 'c', task: 'cliquer sur un lien', solution: 'klikke pa en lenke' },
          { label: 'd', task: 'les actualites', solution: 'nyhetene' },
        ],
        solution: 'a) en soketjeneste, b) laste ned, c) klikke pa en lenke, d) nyhetene',
        hints: ['Mange IT-ord er lignende pa norsk, engelsk og fransk'],
      },
    },
    {
      id: 'fransk-1-19-4-text-1',
      type: 'text',
      content: `## Strategier for a lese franske tekster pa nett

Nar du leser en tekst pa fransk, trenger du ikke a forsta hvert eneste ord. Bruk disse strategiene:

**1. Skumles forst (survoler)**
Les overskrifter, underoverskrifter og bilder for a fa oversikt.

**2. Let etter nokkelord (mots-cles)**
Finn de viktigste ordene som forteller deg hva teksten handler om.

**3. Bruk cognater**
Mange franske ord ligner pa norske eller engelske:
- information = informasjon
- tourisme = turisme
- reservation = reservasjon
- gratuit = gratis

**4. Se pa konteksten**
Ordene rundt et ukjent ord kan hjelpe deg a gjette betydningen.

**5. Bruk en ordbok**
Franske nettordboker som WordReference er gode hjelpemidler.`,
    },
    {
      id: 'fransk-1-19-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Lese en kort fransk tekst',
      problem: `Les denne teksten fra en nettside og svar pa sporsmalene:

**"Le Musée du Louvre"**
"Le musée du Louvre est le plus grand musée d'art du monde. Il est situé à Paris, en France. Le musée est ouvert tous les jours sauf le mardi. L'entrée est gratuite pour les jeunes de moins de 18 ans. La Joconde (Mona Lisa) est l'oeuvre la plus célèbre du musée."

a) Hva er Louvre?
b) Hvilken dag er museet stengt?
c) Hvem far gratis inngang?`,
      solution: `a) Louvre er verdens storste kunstmuseum (le plus grand musee d'art du monde).
b) Museet er stengt pa tirsdager (sauf le mardi = unntatt tirsdag).
c) Unge under 18 ar far gratis inngang (gratuite pour les jeunes de moins de 18 ans).

**Nokkelord:** musee = museum, ouvert = apent, sauf = unntatt, gratuit = gratis, moins de = under.`,
    },
    {
      id: 'fransk-1-19-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-19-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les tekstutdraget og svar pa sporsmalene pa norsk.',
        subTasks: [
          { label: 'a', task: '"La Tour Eiffel est ouverte tous les jours de 9h30 a 23h45." - Nar er Eiffeltarnet apent?', solution: 'Eiffeltarnet er apent hver dag fra 9:30 til 23:45.' },
          { label: 'b', task: '"Le billet adulte coute 26 euros." - Hva koster en voksenbillett?', solution: 'En voksenbillett koster 26 euro.' },
          { label: 'c', task: '"Il est conseille de reserver en ligne." - Hva anbefales?', solution: 'Det anbefales a bestille/reservere pa nett (en ligne = pa nett).' },
        ],
        solution: 'a) Hver dag 9:30-23:45. b) 26 euro. c) A reservere pa nett.',
        hints: ['ouverte = apent', 'coute = koster', 'conseille = anbefalt', 'en ligne = pa nett'],
      },
    },
    {
      id: 'fransk-1-19-4-text-2',
      type: 'text',
      content: `## Nyttige franske nettsider for spraklaeringen

Her er noen gode ressurser for a ove fransk pa nett:

| Nettside | Hva den tilbyr |
|----------|---------------|
| **WordReference.com** | Fransk-norsk/engelsk ordbok |
| **TV5Monde.com** | Franske videoer med undertekster |
| **Le Monde.fr** | Fransk avis (for a lese nyheter) |
| **RFI.fr** | Radio France Internationale (nyheter pa enkel fransk) |
| **Francaisfacile.com** | Grammatikkovelser og tester |

**Tips for a bruke franske nettsider:**
- Start med sider som er laget for fransklaeerende (FLE = Francais Langue Etrangere)
- Bruk undertekster nar du ser pa videoer
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
- 9h30: Besoke Louvre (17 euros) - apent fra 9h
- 13h: Lunsj
- 14h30: Eiffeltarnet (26 euros) - apent til 23h45
- 16h30: Batmouche / elvecruise (15 euros) - avgang hver 30. minutt, varer 1 time

**Totalkostnad:** 17 + 26 + 15 = **58 euros**

**Merk:** Dette fungerer bare hvis det ikke er tirsdag (Louvre er stengt pa tirsdager)!`,
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
          { label: 'a', task: 'Cliquez ici pour reserver.', solution: 'Klikk her for a bestille.' },
          { label: 'b', task: 'Telechargez le plan du musee.', solution: 'Last ned museumskartet.' },
          { label: 'c', task: 'Entree gratuite pour les moins de 18 ans.', solution: 'Gratis inngang for de under 18 ar.' },
        ],
        solution: 'a) Klikk her for a bestille. b) Last ned museumskartet. c) Gratis inngang for de under 18 ar.',
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
        task: 'Kombiner ferdighetene dine: Les, sok og skriv pa fransk.',
        subTasks: [
          { label: 'a', task: 'Hvilke sokeord (pa fransk) ville du brukt for a finne et billig hotell i Paris?', solution: 'hotel pas cher Paris, hebergement economique Paris, hotel bon marche Paris' },
          { label: 'b', task: 'Du finner en nettside der det star "Chambre double a partir de 65 euros la nuit." Hva betyr dette?', solution: 'Dobbeltrom fra 65 euro per natt.' },
          { label: 'c', task: 'Skriv en kort formell e-post til hotellet der du spor om de har ledige rom i august.', solution: "Madame, Monsieur, je souhaiterais savoir si vous avez des chambres disponibles au mois d'aout. Pourriez-vous m'indiquer les tarifs ? Cordialement, [Navn]" },
        ],
        solution: 'a) hotel pas cher Paris. b) Dobbeltrom fra 65 euro per natt. c) Se losningsforslag.',
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
  description: 'Ov pa utvidede dialoger i hverdagssituasjoner: pa bakeriet, apoteket og pa gata.',
  estimatedMinutes: 45,
  competenceGoals: [
    'delta i enkle samtaler om dagligdagse temaer',
  ],
  content: [
    {
      id: 'fransk-1-20-1-intro',
      type: 'text',
      content: `## Hverdagsdialoger pa fransk

I dette kapittelet over du pa lengre dialoger i vanlige hverdagssituasjoner. Du laerer a handle pa bakeriet, besoke apoteket og sporge om veien. Disse dialogene gir deg oving i a bruke alt du har laert sa langt i kurset.`,
    },
    {
      id: 'fransk-1-20-1-text-1',
      type: 'text',
      content: `## Pa bakeriet (A la boulangerie)

Bakeriet er en viktig del av fransk kultur. Franskmenn kjoper fersk brood nesten hver dag! Her er nyttige ord og uttrykk:

| Fransk | Norsk |
|--------|-------|
| une baguette | en baguett (langt brood) |
| un croissant | en croissant |
| un pain au chocolat | et sjokoladebrood |
| une tarte aux pommes | en eplekake |
| un eclair | en vannbakkels |
| Je voudrais... | Jeg vil gjerne ha... |
| C'est combien ? | Hva koster det? |
| C'est tout. | Det er alt. |
| L'addition, s'il vous plait. | Regningen, takk. |`,
    },
    {
      id: 'fransk-1-20-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Pa bakeriet',
      problem: `Les dialogen og svar pa sporsmalene:

*Boulanger : Bonjour ! Qu'est-ce que je vous sers ?*
*Client : Bonjour ! Je voudrais une baguette et deux croissants, s'il vous plait.*
*Boulanger : Tres bien. Autre chose ?*
*Client : Oui, vous avez des tartes aux pommes ?*
*Boulanger : Oui, bien sur ! Elles sont delicieuses aujourd'hui.*
*Client : Alors, une tarte aux pommes aussi, s'il vous plait.*
*Boulanger : Voila. Ca fait 8 euros 50.*
*Client : Voici 10 euros.*
*Boulanger : Et 1 euro 50 de monnaie. Bonne journee !*
*Client : Merci, bonne journee !*

a) Hva bestiller kunden?
b) Hva koster det totalt?
c) Hvor mye far kunden tilbake?`,
      solution: `a) Kunden bestiller en baguett, to croissanter og en eplekake.
b) Det koster 8 euro og 50 cent totalt (8 euros 50).
c) Kunden far 1 euro og 50 cent tilbake (betaler med 10 euro).`,
    },
    {
      id: 'fransk-1-20-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-20-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til fransk. Du er pa et bakeri.',
        subTasks: [
          { label: 'a', task: 'Jeg vil gjerne ha to baguetter.', solution: 'Je voudrais deux baguettes, s\'il vous plait.' },
          { label: 'b', task: 'Har dere croissanter?', solution: 'Vous avez des croissants ?' },
          { label: 'c', task: 'Hva koster det?', solution: "C'est combien ? / Ca fait combien ?" },
          { label: 'd', task: 'Det er alt, takk.', solution: "C'est tout, merci." },
        ],
        solution: "a) Je voudrais deux baguettes, svp. b) Vous avez des croissants ? c) C'est combien ? d) C'est tout, merci.",
        hints: ['Je voudrais = Jeg vil gjerne ha', "C'est combien = Hva koster det"],
      },
    },
    {
      id: 'fransk-1-20-1-text-2',
      type: 'text',
      content: `## Pa apoteket (A la pharmacie)

I Frankrike har apotekene et gront kors utenfor. Du kan kjope medisin, men ogsa fa rad om helse. Her er nyttige uttrykk:

| Fransk | Norsk |
|--------|-------|
| J'ai mal a la tete. | Jeg har hodepine. |
| J'ai mal au ventre. | Jeg har vondt i magen. |
| J'ai de la fievre. | Jeg har feber. |
| Je suis enrhume(e). | Jeg er forkjolet. |
| J'ai besoin de... | Jeg trenger... |
| un medicament | en medisin |
| une ordonnance | en resept |
| un comprime | en tablett |
| un sirop | en sirup |
| une creme | en krem |`,
    },
    {
      id: 'fransk-1-20-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Pa apoteket',
      problem: `Les dialogen:

*Pharmacien : Bonjour, je peux vous aider ?*
*Client : Bonjour, j'ai mal a la tete et je suis enrhume.*
*Pharmacien : Depuis quand ?*
*Client : Depuis hier soir.*
*Pharmacien : D'accord. Je vous conseille ces comprimes pour le mal de tete et ce sirop pour le rhume.*
*Client : Merci. C'est combien ?*
*Pharmacien : 12 euros 30. Vous avez une ordonnance ?*
*Client : Non, je n'ai pas d'ordonnance.*
*Pharmacien : Pas de probleme, ces medicaments sont en vente libre.*

Hva feiler kunden, og hva anbefaler apotekeren?`,
      solution: `**Symptomer:** Kunden har hodepine (mal a la tete) og er forkjolet (enrhume) siden i gar kveld (depuis hier soir).

**Anbefaling:** Apotekeren anbefaler tabletter mot hodepine (comprimes pour le mal de tete) og sirup mot forkjolelse (sirop pour le rhume).

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
        task: 'Oversett til fransk. Du er pa apoteket.',
        subTasks: [
          { label: 'a', task: 'Jeg har vondt i magen.', solution: "J'ai mal au ventre." },
          { label: 'b', task: 'Jeg trenger medisin mot forkjolelse.', solution: "J'ai besoin d'un medicament contre le rhume." },
          { label: 'c', task: 'Har du noe mot feber?', solution: 'Vous avez quelque chose contre la fievre ?' },
        ],
        solution: "a) J'ai mal au ventre. b) J'ai besoin d'un medicament contre le rhume. c) Vous avez quelque chose contre la fievre ?",
        hints: ["J'ai mal a = Jeg har vondt i", "J'ai besoin de = Jeg trenger", 'contre = mot'],
      },
    },
    {
      id: 'fransk-1-20-1-text-3',
      type: 'text',
      content: `## Sporge om veien (Demander le chemin)

A kunne sporge om veien er viktig nar du er i Frankrike. Her er nyttige uttrykk:

| Fransk | Norsk |
|--------|-------|
| Excusez-moi... | Unnskyld meg... |
| Ou se trouve... ? | Hvor er... ? |
| Comment aller a... ? | Hvordan kommer jeg til... ? |
| C'est loin d'ici ? | Er det langt herfra? |
| Tournez a gauche. | Sving til venstre. |
| Tournez a droite. | Sving til hoyre. |
| Allez tout droit. | Ga rett fram. |
| C'est a cote de... | Det er ved siden av... |
| C'est en face de... | Det er overfor... |
| Prenez la premiere rue a... | Ta den forste gaten til... |`,
    },
    {
      id: 'fransk-1-20-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Sporge om veien',
      problem: `Les dialogen:

*Touriste : Excusez-moi, ou se trouve la gare, s'il vous plait ?*
*Passant : La gare ? C'est facile. Allez tout droit, puis tournez a gauche au feu rouge. La gare est en face de l'hotel de ville.*
*Touriste : C'est loin d'ici ?*
*Passant : Non, c'est a cinq minutes a pied.*
*Touriste : Merci beaucoup !*
*Passant : De rien, bonne journee !*

Beskriv ruten til togstasjonen pa norsk.`,
      solution: `**Ruten:** Ga rett fram, sving til venstre ved det rode trafikklyset (au feu rouge). Togstasjonen er overfor radhuset (en face de l'hotel de ville).

**Avstand:** Det er ca. 5 minutter til fots (a cinq minutes a pied).

**Nokkelord:** tout droit = rett fram, a gauche = til venstre, en face de = overfor, a pied = til fots.`,
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
          { label: 'a', task: 'Unnskyld, hvor er museet?', solution: 'Excusez-moi, ou se trouve le musee ?' },
          { label: 'b', task: 'Ga rett fram og sving til hoyre.', solution: 'Allez tout droit, puis tournez a droite.' },
          { label: 'c', task: 'Er det langt herfra?', solution: "C'est loin d'ici ?" },
        ],
        solution: 'a) Excusez-moi, ou se trouve le musee ? b) Allez tout droit, puis tournez a droite. c) C\'est loin d\'ici ?',
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
        task: 'Skriv en kort dialog pa fransk for hver situasjon (3-4 replikker per dialog).',
        subTasks: [
          { label: 'a', task: 'Du kjoper en baguett og et pain au chocolat pa bakeriet.', solution: '- Bonjour ! Je voudrais une baguette et un pain au chocolat, svp.\n- Voila ! Ca fait 3 euros 50.\n- Voici 5 euros.\n- Et 1 euro 50 de monnaie. Bonne journee !' },
          { label: 'b', task: 'Du har vondt i halsen og gar pa apoteket.', solution: "- Bonjour, j'ai mal a la gorge.\n- Depuis quand ?\n- Depuis deux jours.\n- Je vous conseille ces pastilles. Ca fait 6 euros." },
          { label: 'c', task: 'Du spor en forbipasserende om veien til stranden.', solution: "- Excusez-moi, ou se trouve la plage ?\n- Allez tout droit, puis tournez a droite.\n- C'est loin ?\n- Non, c'est a 10 minutes a pied." },
        ],
        solution: 'Se losningsforslagene for eksempler pa dialoger.',
        hints: ['Bruk hoflige uttrykk: s\'il vous plait, merci, excusez-moi'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 20.2: Situations d'urgence et problemes - Nodssituasjoner og problemer
// ============================================================================

export const CHAPTER_FRANSK_1_20_2: TextbookChapter = {
  id: 'fransk-1-20-2',
  courseId: 'fransk-1',
  chapterNumber: '20.2',
  title: "Situations d'urgence et problemes",
  subtitle: 'Nodssituasjoner og problemer',
  description: 'Laer a kommunisere pa fransk nar du er syk, har gatt deg vill, eller trenger hjelp.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kommunisere i uventede situasjoner pa fransk',
  ],
  content: [
    {
      id: 'fransk-1-20-2-intro',
      type: 'text',
      content: `## Nodssituasjoner og problemer

Nar du reiser i et fransktalende land, kan det oppsta situasjoner der du trenger hjelp. Kanskje du har mistet passet, blitt syk, eller gatt deg vill. I dette kapittelet laerer du de viktigste frasene for a fa hjelp nar du trenger det.`,
    },
    {
      id: 'fransk-1-20-2-def-1',
      type: 'definition',
      title: 'Viktige nodsfraser',
      content: `Her er de viktigste frasene du trenger i nodssituasjoner:

| Fransk | Norsk |
|--------|-------|
| Au secours ! | Hjelp! |
| Aidez-moi ! | Hjelp meg! |
| Appelez la police ! | Ring politiet! |
| Appelez une ambulance ! | Ring en ambulanse! |
| J'ai perdu... | Jeg har mistet... |
| On m'a vole... | Noen har stjalet... |
| Je suis perdu(e). | Jeg har gatt meg vill. |
| J'ai un probleme. | Jeg har et problem. |
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
      problem: `Du har mistet lommeboken din pa togstasjonen. Hvordan forklarer du dette?

Lag 3 setninger pa fransk der du:
a) Sier at du har et problem
b) Forklarer hva du har mistet
c) Sier hvor du mistet det`,
      solution: `a) "Excusez-moi, j'ai un probleme."
(Unnskyld, jeg har et problem.)

b) "J'ai perdu mon portefeuille."
(Jeg har mistet lommeboken min.)

c) "Je l'ai perdu a la gare, je pense."
(Jeg mistet den pa togstasjonen, tror jeg.)

**Ekstra nyttige ord:** mon portefeuille = lommeboken min, mon passeport = passet mitt, mon telephone = telefonen min, mes cles = noklene mine.`,
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
      content: `## Hos legen (Chez le medecin)

Hvis du blir syk i Frankrike, er det nyttig a kunne forklare symptomene dine:

| Fransk | Norsk |
|--------|-------|
| J'ai mal a... | Jeg har vondt i... |
| J'ai mal a la tete | hodepine |
| J'ai mal a la gorge | vondt i halsen |
| J'ai mal au dos | vondt i ryggen |
| J'ai mal au ventre | vondt i magen |
| J'ai de la fievre | feber |
| Je tousse | Jeg hoster |
| J'ai des nausees | Jeg er kvalm |
| Je me suis blesse(e) | Jeg har skadet meg |
| J'ai une allergie a... | Jeg er allergisk mot... |

**Dialog-struktur hos legen:**
1. Legen spor: "Qu'est-ce qui ne va pas ?" (Hva er galt?)
2. Du forklarer symptomene: "J'ai mal a..."
3. Legen spor hvor lenge: "Depuis quand ?" (Siden nar?)
4. Du svarer: "Depuis hier / deux jours / une semaine" (Siden i gar / to dager / en uke)`,
    },
    {
      id: 'fransk-1-20-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Hos legen',
      problem: `Les dialogen:

*Medecin : Bonjour. Qu'est-ce qui ne va pas ?*
*Patient : Bonjour, docteur. J'ai mal a la gorge et je tousse beaucoup.*
*Medecin : Depuis quand ?*
*Patient : Depuis trois jours.*
*Medecin : Vous avez de la fievre ?*
*Patient : Oui, un peu. 38 degres.*
*Medecin : D'accord. Vous avez des allergies ?*
*Patient : Non, pas d'allergies.*
*Medecin : Je vais vous prescrire un antibiotique. Prenez un comprime matin et soir pendant cinq jours.*

Oppsummer pa norsk: Hva feiler pasienten, og hva foreskriver legen?`,
      solution: `**Symptomer:** Pasienten har vondt i halsen (mal a la gorge), hoster mye (tousse beaucoup) og har litt feber pa 38 grader. Det har vart i tre dager (depuis trois jours).

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
          { label: 'b', task: 'Jeg hoster og har feber.', solution: "Je tousse et j'ai de la fievre." },
          { label: 'c', task: 'Jeg er allergisk mot penicillin.', solution: "J'ai une allergie a la penicilline." },
        ],
        solution: "a) J'ai mal au dos depuis lundi. b) Je tousse et j'ai de la fievre. c) J'ai une allergie a la penicilline.",
        hints: ["J'ai mal a = Jeg har vondt i", 'depuis = siden'],
      },
    },
    {
      id: 'fransk-1-20-2-text-2',
      type: 'text',
      content: `## Pa politistasjonen (Au commissariat)

Hvis du blir utsatt for tyveri eller mister noe verdifullt, ma du kanskje ga til politiet:

| Fransk | Norsk |
|--------|-------|
| Je voudrais faire une declaration. | Jeg vil gjerne anmelde noe. |
| On m'a vole mon sac. | Noen har stjalet vesken min. |
| J'ai perdu mon portefeuille. | Jeg har mistet lommeboken min. |
| Ca s'est passe a... | Det skjedde pa/ved... |
| C'etait vers... heures. | Det var rundt klokka... |
| Je n'ai pas vu le voleur. | Jeg sag ikke tyven. |

**Nyttige ord:**
- un vol = et tyveri
- un voleur = en tyv
- un temoin = et vitne
- une declaration = en anmeldelse
- un formulaire = et skjema`,
    },
    {
      id: 'fransk-1-20-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Pa politistasjonen',
      problem: `Du har fatt stjalet telefonen din pa metroen. Skriv tre setninger der du:
a) Sier at du vil anmelde noe
b) Forklarer hva som skjedde
c) Sier nar og hvor det skjedde`,
      solution: `a) "Bonjour, je voudrais faire une declaration."
(Hei, jeg vil gjerne anmelde noe.)

b) "On m'a vole mon telephone portable dans le metro."
(Noen har stjalet mobiltelefonen min pa metroen.)

c) "Ca s'est passe ce matin, vers 9 heures, a la station Chatelet."
(Det skjedde i dag morges, rundt klokka 9, pa stasjonen Chatelet.)`,
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
          { label: 'b', task: 'Det skjedde pa togstasjonen.', solution: "Ca s'est passe a la gare." },
          { label: 'c', task: 'Det var rundt klokka 14.', solution: "C'etait vers 14 heures." },
        ],
        solution: "a) On m'a vole mon sac. b) Ca s'est passe a la gare. c) C'etait vers 14 heures.",
        hints: ["On m'a vole = Noen har stjalet fra meg", "Ca s'est passe = Det skjedde"],
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
        task: 'Skriv en kort dialog pa fransk for situasjonen: Du har gatt deg vill i Paris og trenger hjelp med a finne tilbake til hotellet ditt.',
        subTasks: [
          { label: 'a', task: 'Stopp en forbipasserende og forklar at du har gatt deg vill.', solution: "Excusez-moi, je suis perdu(e). Pouvez-vous m'aider ?" },
          { label: 'b', task: 'Fortell hvilket hotell du bor pa og spor om veien.', solution: "Mon hotel s'appelle Hotel du Nord. C'est dans la rue Lafayette. Comment y aller ?" },
          { label: 'c', task: 'Takk for hjelpen.', solution: 'Merci beaucoup, vous etes tres gentil(le) ! Bonne journee !' },
        ],
        solution: 'Se losningsforslagene. Bruk: je suis perdu(e), pouvez-vous m\'aider, comment aller a...',
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
  description: 'Laer a lage enkle betingelsessetninger med si + presens pa fransk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke enkle betingelsessetninger med si + presens',
  ],
  content: [
    {
      id: 'fransk-1-20-3-intro',
      type: 'text',
      content: `## Betingelsessetninger med si (hvis)

Pa fransk bruker vi "si" for a si "hvis". Betingelsessetninger er nyttige for a snakke om hva som skjer under bestemte forutsetninger. Pa niva 1 laerer vi den enkleste formen: **si + presens + presens/futur**.`,
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
| Si tu veux, on va au cinema. | Hvis du vil, gar vi pa kino. |
| Si j'ai le temps, je vais etudier. | Hvis jeg har tid, skal jeg studere. |

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
a) Hvis det er fint vaer, gar vi i parken.
b) Hvis du vil, kan vi spise sammen.
c) Hvis han kommer, blir jeg glad.`,
      solution: `a) S'il fait beau, on va au parc.
(Si + il -> s'il. "faire beau" = vaere fint vaer)

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
          { label: 'b', task: 'Hvis du vil, gar vi pa kino.', solution: 'Si tu veux, on va au cinema.' },
          { label: 'c', task: 'Hvis jeg har tid, studerer jeg.', solution: "Si j'ai le temps, j'etudie." },
          { label: 'd', task: 'Hvis hun ringer, svarer jeg.', solution: "Si elle appelle, je reponds." },
        ],
        solution: "a) S'il pleut, on reste a la maison. b) Si tu veux, on va au cinema. c) Si j'ai le temps, j'etudie. d) Si elle appelle, je reponds.",
        hints: ["Si + il = S'il", "Si + elle = Si elle (IKKE s'elle!)"],
      },
    },
    {
      id: 'fransk-1-20-3-text-1',
      type: 'text',
      content: `## Vanlige si-uttrykk i hverdagen

Mange dagligdagse uttrykk pa fransk bruker "si":

| Uttrykk | Norsk | Brukes nar... |
|---------|-------|--------------|
| Si tu veux | Hvis du vil | Du foreslaar noe |
| Si c'est possible | Hvis det er mulig | Du ber om noe hoflig |
| Si j'ai bien compris | Hvis jeg har forstatt riktig | Du vil bekrefte noe |
| Si ca te dit | Hvis du har lyst | Du inviterer noen |
| Si on allait... ? | Hva om vi dro...? | Du foreslaar en aktivitet |

**Med futur proche (aller + infinitiv):**
- Si tu viens, on **va s'amuser** ! (Hvis du kommer, skal vi ha det morsomt!)
- Si il fait beau demain, on **va aller** a la plage. (Hvis det er fint vaer i morgen, skal vi dra til stranden.)`,
    },
    {
      id: 'fransk-1-20-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Si-setninger i dialog',
      problem: `Les dialogen og finn alle si-setningene:

*Marie : Tu veux faire quoi ce weekend ?*
*Thomas : Si il fait beau, on va a la plage. Si il pleut, on reste a la maison.*
*Marie : Bonne idee. Et si on invite Pierre ?*
*Thomas : Oui ! Si tu l'appelles, je prepare le pique-nique.*
*Marie : D'accord ! Si on part a 10 heures, on arrive vers midi.*`,
      solution: `**Si-setninger i dialogen:**
1. **S'il fait beau**, on va a la plage. (Hvis det er fint vaer, drar vi til stranden.)
2. **S'il pleut**, on reste a la maison. (Hvis det regner, blir vi hjemme.)
3. Et **si on invite** Pierre ? (Og hva om vi inviterer Pierre?)
4. **Si tu l'appelles**, je prepare le pique-nique. (Hvis du ringer ham, forbereder jeg piknik.)
5. **Si on part** a 10 heures, on arrive vers midi. (Hvis vi drar kl. 10, ankommer vi rundt middag.)

**Alle** folger regelen: si + presens!`,
    },
    {
      id: 'fransk-1-20-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-20-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fullfoor setningene med riktig verbform.',
        subTasks: [
          { label: 'a', task: 'Si tu _______ (venir), je suis content.', solution: 'Si tu viens, je suis content. (presens av venir)' },
          { label: 'b', task: "Si il _______ (faire) beau, on _______ (aller) au parc.", solution: "S'il fait beau, on va au parc. (presens + presens)" },
          { label: 'c', task: 'Si nous _______ (avoir) le temps, nous _______ (visiter) le musee.', solution: 'Si nous avons le temps, nous allons visiter le musee. (presens + futur proche)' },
        ],
        solution: 'a) viens. b) fait, va. c) avons, allons visiter.',
        hints: ['Etter si brukes alltid presens', 'I hovedsetningen kan du bruke presens eller futur proche'],
      },
    },
    {
      id: 'fransk-1-20-3-tip-1',
      type: 'tip',
      content: `**Viktig a huske:** Pa fransk sier vi ALDRI "si il" - det forkortes alltid til **s'il**. Men dette gjelder KUN "il" og "ils":
- s'il vient (riktig) / si il vient (feil)
- s'ils viennent (riktig) / si ils viennent (feil)
- si elle vient (riktig) / s'elle vient (feil)
- si on veut (riktig) / s'on veut (feil)`,
    },
    {
      id: 'fransk-1-20-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Lage egne si-setninger',
      problem: `Lag si-setninger basert pa disse situasjonene:
a) Du har en eksamen i morgen. Hva gjor du hvis du har tid i kveld?
b) Det er helg. Hva gjor du hvis vaeret er fint?
c) En venn spor om du vil pa kino. Hva svarer du?`,
      solution: `a) Si j'ai le temps ce soir, je vais reviser pour l'examen.
(Hvis jeg har tid i kveld, skal jeg repetere til eksamen.)

b) S'il fait beau ce weekend, je vais aller a la plage avec mes amis.
(Hvis det er fint vaer i helgen, drar jeg til stranden med vennene mine.)

c) Si tu veux, on va au cinema ce soir. Si le film est bien, on va s'amuser !
(Hvis du vil, gar vi pa kino i kveld. Hvis filmen er bra, skal vi ha det morsomt!)`,
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
          { label: 'a', task: 'Hvis du studerer, bestar du eksamen.', solution: "Si tu etudies, tu reussis l'examen." },
          { label: 'b', task: 'Hvis vi tar toget, ankommer vi kl. 15.', solution: 'Si on prend le train, on arrive a 15 heures.' },
          { label: 'c', task: 'Hvis det er mulig, vil jeg gjerne besoke Paris.', solution: "Si c'est possible, je voudrais visiter Paris." },
        ],
        solution: "a) Si tu etudies, tu reussis l'examen. b) Si on prend le train, on arrive a 15 heures. c) Si c'est possible, je voudrais visiter Paris.",
        hints: ['reussir = lykkes, besta', 'prendre le train = ta toget'],
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
        task: 'Skriv 3 si-setninger pa fransk om planene dine for helgen. Bruk forskjellige verb og situasjoner.',
        subTasks: [
          { label: 'a', task: 'Skriv en si-setning om vaeret og en aktivitet.', solution: "S'il fait beau, je vais faire du velo." },
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
// Kapittel 20.4: Revision generale - Totalrepetisjon
// ============================================================================

export const CHAPTER_FRANSK_1_20_4: TextbookChapter = {
  id: 'fransk-1-20-4',
  courseId: 'fransk-1',
  chapterNumber: '20.4',
  title: 'Revision generale',
  subtitle: 'Totalrepetisjon',
  description: 'Repeter all viktig grammatikk og vokabular fra Fransk Niva 1.',
  estimatedMinutes: 60,
  competenceGoals: [
    'mestre grunnleggende fransk kommunikasjon pa niva 1',
  ],
  content: [
    {
      id: 'fransk-1-20-4-intro',
      type: 'text',
      content: `## Totalrepetisjon - Fransk Niva 1

Gratulerer! Du naermer deg slutten av Fransk Niva 1. I dette kapittelet repeterer vi alt det viktigste du har laert: grammatikk, verb, vokabular og kommunikasjon. Bruk dette kapittelet som forberedelse til prover og som oppslagsverk.`,
    },
    {
      id: 'fransk-1-20-4-text-1',
      type: 'text',
      content: `## Viktige verb: etre, avoir og -er-verb

**Etre (a vaere):**

| Person | Form |
|--------|------|
| je | suis |
| tu | es |
| il/elle/on | est |
| nous | sommes |
| vous | etes |
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
a) etre - je, nous
b) avoir - tu, ils
c) parler - elle, vous
d) habiter - j', nous`,
      solution: `a) je **suis**, nous **sommes**
b) tu **as**, ils **ont**
c) elle **parle**, vous **parlez**
d) j'**habite**, nous **habitons**

**Husk:** -er-verb fjerner "-er" og legger til endelsen. Etre og avoir er uregelrette og ma pugges!`,
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
          { label: 'a', task: 'Je _______ (etre) norvegien.', solution: 'Je suis norvegien.' },
          { label: 'b', task: 'Nous _______ (avoir) deux chats.', solution: 'Nous avons deux chats.' },
          { label: 'c', task: 'Ils _______ (habiter) a Paris.', solution: 'Ils habitent a Paris.' },
          { label: 'd', task: 'Tu _______ (aimer) le chocolat ?', solution: 'Tu aimes le chocolat ?' },
        ],
        solution: 'a) suis, b) avons, c) habitent, d) aimes',
        hints: ['Etre og avoir er uregelrette', '-er-verb: fjern -er og legg til endelsen'],
      },
    },
    {
      id: 'fransk-1-20-4-text-2',
      type: 'text',
      content: `## Passe compose - Fortid

Passe compose brukes for handlinger som er ferdige. Det dannes med **avoir/etre + partisipp**.

**Med avoir (de fleste verb):**
- J'ai mange (Jeg spiste/har spist)
- Tu as parle (Du snakket)
- Il a fini (Han avsluttet)

**Med etre (bevegelsesverb + refleksive verb):**
- Je suis alle(e) (Jeg dro)
- Elle est venue (Hun kom)
- Nous sommes partis (Vi dro)
- Je me suis leve(e) (Jeg sto opp)

**Vanlige partisipper:**
| Infinitiv | Partisipp | Norsk |
|-----------|-----------|-------|
| manger | mange | spist |
| parler | parle | snakket |
| finir | fini | avsluttet |
| faire | fait | gjort |
| voir | vu | sett |
| prendre | pris | tatt |
| ecrire | ecrit | skrevet |
| etre | ete | vaert |
| avoir | eu | hatt |`,
    },
    {
      id: 'fransk-1-20-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Passe compose',
      problem: `Sett disse setningene i passe compose:
a) Je mange une pizza.
b) Elle va a Paris.
c) Nous faisons les devoirs.`,
      solution: `a) J'**ai mange** une pizza. (Jeg spiste en pizza.)
(manger -> mange, bruker avoir)

b) Elle **est allee** a Paris. (Hun dro til Paris.)
(aller -> alle, bruker etre, -e fordi "elle")

c) Nous **avons fait** les devoirs. (Vi gjorde leksene.)
(faire -> fait, bruker avoir)

**Husk:** Med etre ma partisippet samsvare med subjektet (elle -> allee).`,
    },
    {
      id: 'fransk-1-20-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-20-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv setningene i passe compose.',
        subTasks: [
          { label: 'a', task: 'Je (parler) avec Marie.', solution: "J'ai parle avec Marie." },
          { label: 'b', task: 'Elle (aller) au cinema.', solution: 'Elle est allee au cinema.' },
          { label: 'c', task: 'Nous (faire) un gateau.', solution: 'Nous avons fait un gateau.' },
          { label: 'd', task: 'Tu (voir) le film ?', solution: 'Tu as vu le film ?' },
        ],
        solution: "a) J'ai parle. b) Elle est allee. c) Nous avons fait. d) Tu as vu.",
        hints: ['De fleste verb bruker avoir', 'Bevegelsesverb (aller, venir, partir...) bruker etre'],
      },
    },
    {
      id: 'fransk-1-20-4-text-3',
      type: 'text',
      content: `## Grammatikk-oversikt

**Nektelse:**
- Je **ne** parle **pas** francais. (Jeg snakker ikke fransk.)
- Je **n'**ai **pas** de freres. (Jeg har ikke brodre.)

**Sporsmal (3 mater):**
1. Intonasjon: Tu parles francais ? (stigende tonefall)
2. Est-ce que: Est-ce que tu parles francais ?
3. Inversjon: Parles-tu francais ? (mest formelt)

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
- devoir (ma): je dois, tu dois, il doit, nous devons, vous devez, ils doivent`,
    },
    {
      id: 'fransk-1-20-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Blandet grammatikk',
      problem: `Oversett til fransk:
a) Jeg har ikke en bil. (nektelse + artikkel)
b) Snakker du fransk? (sporsmal)
c) Sosterma mi heter Marie. (eiendomsord)
d) Jeg ma gjore leksene. (modalt verb)`,
      solution: `a) Je **n'ai pas de** voiture.
(I nektelse: un/une/des -> de)

b) **Est-ce que** tu parles francais ?
(Eller: Tu parles francais ? / Parles-tu francais ?)

c) **Ma** soeur s'appelle Marie.
(ma = min, for hunkjonnsord)

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
          { label: 'c', task: 'Broren min er 18 ar gammal.', solution: 'Mon frere a 18 ans.' },
          { label: 'd', task: 'Vi ma dra na.', solution: 'Nous devons partir maintenant.' },
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
        task: 'Totaloppgave: Skriv en kort tekst pa fransk (8-10 setninger) der du bruker alt du har laert. Presenter deg selv, fortell om hverdagen din, og beskriv planene dine for sommeren.',
        subTasks: [
          { label: 'a', task: 'Presenter deg selv: navn, alder, bosted, familie (bruk etre, avoir, eiendomsord).', solution: "Je m'appelle [navn]. J'ai [alder] ans. J'habite a [sted] en Norvege. Ma famille est petite: j'ai un frere et une soeur." },
          { label: 'b', task: 'Fortell om hverdagen din: hva du liker, hva du gjor (bruk -er-verb, modale verb, nektelse).', solution: "J'aime le sport et la musique. Je ne parle pas bien francais, mais j'etudie beaucoup. Le weekend, je peux sortir avec mes amis." },
          { label: 'c', task: 'Beskriv planene for sommeren: hva du har gjort og hva du skal gjore (bruk passe compose, si-setninger, futur proche).', solution: "L'ete dernier, je suis alle(e) en France. C'etait super ! Si j'ai assez d'argent cet ete, je vais visiter Paris. Je vais voir la Tour Eiffel et manger des croissants !" },
        ],
        solution: "Se losningsforslagene. Bruk variert grammatikk: etre/avoir, -er-verb, passe compose, nektelse, sporsmal, eiendomsord, modale verb, si-setninger.",
        hints: ['Bruk overgangsfrasene: d\'abord, ensuite, enfin', 'Varier mellom presens, passe compose og futur proche'],
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
