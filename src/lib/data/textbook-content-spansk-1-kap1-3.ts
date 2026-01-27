/* eslint-disable */
// @ts-nocheck
/**
 * Spansk nivå 1 - Tekstbokinnhold kapittel 1-3
 *
 * Dekker LK20 læreplan for fremmedspråk nivå 1
 * Struktur: teori → eksempel → oppgave (gjentatt)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: ¡Hola! - Hilsener
// ============================================================================

export const CHAPTER_SPANSK_1_1_1: TextbookChapter = {
  id: 'spansk-1-1-1',
  courseId: 'spansk-1',
  chapterNumber: '1.1',
  title: '¡Hola! - Hilsener',
  description: 'Lær grunnleggende hilsener, avskjeder og høflighetsuttrykk på spansk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke enkle hilsener og høflighetsuttrykk på spansk',
    'tilpasse språkbruken til ulike situasjoner',
  ],
  content: [
    // --- Intro ---
    {
      id: 'spansk-1-1-1-intro',
      type: 'text',
      content: `Spansk er verdens nest mest talte morsmål med over 500 millioner morsmålsbrukere. Språket er offisielt i 20 land, fra Spania til Latin-Amerika. La oss begynne med det aller viktigste: å hilse på folk!`,
    },

    // --- Teori: Hilsener ---
    {
      id: 'spansk-1-1-1-text-1',
      type: 'text',
      content: `**Hilsener (Saludos)**

| Spansk | Norsk | Når brukes det? |
|--------|-------|-----------------|
| ¡Hola! | Hei! | Hele dagen, uformelt |
| Buenos días | God morgen / God dag | Om morgenen (til ca. kl. 12) |
| Buenas tardes | God ettermiddag | Etter kl. 12 til ca. kl. 20 |
| Buenas noches | God kveld / God natt | Etter kl. 20 |
| ¿Qué tal? | Hvordan går det? | Uformelt |
| ¿Cómo estás? | Hvordan har du det? | Uformelt (tú) |
| ¿Cómo está usted? | Hvordan har De det? | Formelt (usted) |`,
    },
    {
      id: 'spansk-1-1-1-text-2',
      type: 'text',
      content: `**Vanlige svar på hilsener**

| Spansk | Norsk |
|--------|-------|
| Muy bien, gracias | Veldig bra, takk |
| Bien | Bra |
| Regular | Sånn passe |
| Mal | Dårlig |
| ¿Y tú? | Og du? (uformelt) |
| ¿Y usted? | Og De? (formelt) |`,
    },

    // --- Definisjon: Tú vs Usted ---
    {
      id: 'spansk-1-1-1-def-1',
      type: 'definition',
      title: 'Tú vs. Usted',
      content: `På spansk skiller man mellom uformell (**tú**) og formell (**usted**) tiltale.\n\n- **Tú** brukes med venner, familie og jevnaldrende.\n- **Usted** (forkortet **Ud.**) brukes med voksne du ikke kjenner godt, lærere, eldre personer og i formelle situasjoner.\n\nI Latin-Amerika brukes **usted** oftere enn i Spania. I noen land (som Colombia) brukes **usted** selv mellom venner.`,
    },

    // --- Eksempel 1 ---
    {
      id: 'spansk-1-1-1-ex-1-example',
      type: 'example',
      title: 'Hilse på en venn',
      problem: 'Hvordan hilser du på en venn du møter på skolen om morgenen?',
      solution: `— ¡Hola! Buenos días. ¿Qué tal?\n— Muy bien, gracias. ¿Y tú?\n— Bien, gracias.\n\nHer bruker vi **tú**-formen fordi vi snakker med en venn.`,
    },

    // --- Oppgave 1 ---
    {
      id: 'spansk-1-1-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-1-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett følgende hilsener til spansk:',
        subTasks: [
          { label: 'a', task: 'Hei', solution: '¡Hola!' },
          { label: 'b', task: 'God morgen', solution: 'Buenos días' },
          { label: 'c', task: 'God kveld', solution: 'Buenas noches' },
        ],
        solution: 'a) ¡Hola!\nb) Buenos días\nc) Buenas noches',
        hints: ['Se tabellen med hilsener (Saludos)'],
      },
    },

    // --- Mer teori: Avskjeder ---
    {
      id: 'spansk-1-1-1-text-3',
      type: 'text',
      content: `**Avskjeder (Despedidas)**

| Spansk | Norsk |
|--------|-------|
| Adiós | Ha det |
| Hasta luego | Vi sees senere |
| Hasta mañana | Vi sees i morgen |
| Hasta pronto | Vi sees snart |
| Chao | Ha det (uformelt) |
| Nos vemos | Vi sees |

Legg merke til at **hasta** betyr «til» og brukes i mange avskjedsuttrykk. **Chao** er lånt fra italiensk og er svært vanlig i Latin-Amerika.`,
    },

    // --- Eksempel 2 ---
    {
      id: 'spansk-1-1-1-ex-2-example',
      type: 'example',
      title: 'Ta farvel med en lærer',
      problem: 'Du skal gå hjem fra skolen. Hvordan tar du farvel med læreren din?',
      solution: `— Adiós, señora García. Hasta mañana.\n— Hasta mañana. ¡Buenas tardes!\n\nHer bruker vi **usted**-formen (indirekte, via høflig tiltale med \"señora\") fordi vi snakker med en lærer.`,
    },

    // --- Oppgave 2 ---
    {
      id: 'spansk-1-1-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-1-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett følgende avskjeder til spansk:',
        subTasks: [
          { label: 'a', task: 'Ha det', solution: 'Adiós' },
          { label: 'b', task: 'Vi sees i morgen', solution: 'Hasta mañana' },
          { label: 'c', task: 'Vi sees snart', solution: 'Hasta pronto' },
        ],
        solution: 'a) Adiós\nb) Hasta mañana\nc) Hasta pronto',
        hints: ['Se tabellen med avskjeder (Despedidas)'],
      },
    },

    // --- Tips ---
    {
      id: 'spansk-1-1-1-tip-1',
      type: 'tip',
      content: `Spanske utropstegn og spørsmålstegn brukes **dobbelt**: ett opp-ned i starten og ett vanlig på slutten. For eksempel: **¡Hola!** og **¿Cómo estás?** Dette er unikt for spansk og hjelper leseren å forstå tonen i setningen med en gang.`,
    },

    // --- Teori: Høflighetsuttrykk ---
    {
      id: 'spansk-1-1-1-text-4',
      type: 'text',
      content: `**Høflighetsuttrykk (Expresiones de cortesía)**

| Spansk | Norsk |
|--------|-------|
| Por favor | Vær så snill |
| Gracias | Takk |
| Muchas gracias | Tusen takk |
| De nada | Ingen årsak |
| Perdón / Perdone | Unnskyld |
| Lo siento | Beklager |
| Con permiso | Unnskyld meg (når du skal forbi) |`,
    },

    // --- Eksempel 3 ---
    {
      id: 'spansk-1-1-1-ex-3-example',
      type: 'example',
      title: 'Bruke høflighetsuttrykk',
      problem: 'Du vil be om noe høflig i en butikk. Lag en kort dialog.',
      solution: `— Buenos días. Un café, por favor.\n— Aquí tiene.\n— Muchas gracias.\n— De nada.\n\n**Por favor** legges vanligvis til på slutten av en forespørsel.`,
    },

    // --- Oppgave 3 ---
    {
      id: 'spansk-1-1-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva svarer du på spansk i disse situasjonene?',
        subTasks: [
          { label: 'a', task: 'Noen gir deg en gave', solution: '¡Muchas gracias!' },
          { label: 'b', task: 'Noen sier «gracias» til deg', solution: 'De nada' },
          { label: 'c', task: 'Du trenger å komme forbi noen', solution: 'Con permiso' },
        ],
        solution: 'a) ¡Muchas gracias!\nb) De nada\nc) Con permiso',
        hints: ['Se tabellen med høflighetsuttrykk (Expresiones de cortesía)'],
      },
    },

    // --- Oppgave 4 ---
    {
      id: 'spansk-1-1-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-1-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort dialog (4-6 linjer) der to personer hilser på hverandre, spør hvordan det går, og tar farvel. Bruk minst 4 ulike spanske uttrykk.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv dialogen mellom to venner (tú-form)',
            solution: '— ¡Hola! ¿Qué tal?\n— Muy bien, gracias. ¿Y tú?\n— Bien. Hasta luego.\n— ¡Chao!',
          },
          {
            label: 'b',
            task: 'Skriv dialogen mellom en elev og en lærer (usted-form)',
            solution: '— Buenos días, señor López. ¿Cómo está usted?\n— Bien, gracias. ¿Y tú?\n— Muy bien. Hasta mañana.\n— Adiós. Buenas tardes.',
          },
        ],
        solution: 'a) — ¡Hola! ¿Qué tal?\n— Muy bien, gracias. ¿Y tú?\n— Bien. Hasta luego.\n— ¡Chao!\n\nb) — Buenos días, señor López. ¿Cómo está usted?\n— Bien, gracias. ¿Y tú?\n— Muy bien. Hasta mañana.\n— Adiós. Buenas tardes.',
        hints: [
          'Bruk hilsener fra Saludos-tabellen',
          'Husk å bruke riktig tiltaleform: tú for venner, usted for lærere',
        ],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.2: Me llamo... - Presentere seg
// ============================================================================

export const CHAPTER_SPANSK_1_1_2: TextbookChapter = {
  id: 'spansk-1-1-2',
  courseId: 'spansk-1',
  chapterNumber: '1.2',
  title: 'Me llamo... - Presentere seg',
  description: 'Lær å presentere deg selv, si navnet ditt og fortelle hvor gammel du er.',
  estimatedMinutes: 45,
  competenceGoals: [
    'presentere seg selv med navn og alder',
    'bruke verbet llamarse i presens',
    'stille og svare på enkle spørsmål om identitet',
  ],
  content: [
    // --- Intro ---
    {
      id: 'spansk-1-1-2-intro',
      type: 'text',
      content: `Å kunne presentere seg er noe av det første du trenger å lære på et nytt språk. I dette kapittelet lærer du å si hva du heter, spørre andre om navnet deres, og fortelle hvor gammel du er.`,
    },

    // --- Teori: Grunnleggende presentasjonsfraser ---
    {
      id: 'spansk-1-1-2-text-1',
      type: 'text',
      content: `**Presentere seg (Presentarse)**

| Spansk | Norsk |
|--------|-------|
| Me llamo... | Jeg heter... |
| Soy... | Jeg er... |
| ¿Cómo te llamas? | Hva heter du? (uformelt) |
| ¿Cómo se llama usted? | Hva heter De? (formelt) |
| Mucho gusto | Hyggelig å møte deg |
| Encantado (mann) / Encantada (kvinne) | Hyggelig å treffe deg |
| Igualmente | I like måte |

Legg merke til at **encantado/encantada** endrer seg etter kjønnet til den som snakker, ikke den man snakker til.`,
    },

    // --- Definisjon: Verbet llamarse ---
    {
      id: 'spansk-1-1-2-def-1',
      type: 'definition',
      title: 'Verbet llamarse (å hete)',
      content: `**Llamarse** er et refleksivt verb som betyr «å hete» (bokstavelig: «å kalle seg»). Det bøyes slik i presens:\n\n| Person | Spansk | Norsk |\n|--------|--------|-------|\n| Yo | me llamo | jeg heter |\n| Tú | te llamas | du heter |\n| Él/Ella/Usted | se llama | han/hun heter / De heter |\n| Nosotros/as | nos llamamos | vi heter |\n| Ellos/Ellas/Ustedes | se llaman | de heter |\n\n**Refleksive verb** har et pronomen (me, te, se, nos, se) som viser at handlingen «peker tilbake» til subjektet. Flere vanlige verb i spansk er refleksive.`,
    },

    // --- Eksempel 1 ---
    {
      id: 'spansk-1-1-2-ex-1-example',
      type: 'example',
      title: 'Si hva du heter',
      problem: 'Hvordan sier du at du heter Maria?',
      solution: `Det finnes to vanlige måter:\n\n1. **Me llamo María.** (Jeg heter María.)\n2. **Soy María.** (Jeg er María.)\n\n«Me llamo» er mer formelt og fullstendig, mens «soy» er mer direkte og uformelt. Begge er helt korrekte.`,
    },

    // --- Oppgave 1 ---
    {
      id: 'spansk-1-1-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-1-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av verbet llamarse:',
        subTasks: [
          { label: 'a', task: 'Yo ___ Pedro.', solution: 'me llamo' },
          { label: 'b', task: 'Ella ___ Ana.', solution: 'se llama' },
          { label: 'c', task: '¿Cómo ___ tú?', solution: 'te llamas' },
          { label: 'd', task: 'Nosotros ___ García.', solution: 'nos llamamos' },
        ],
        solution: 'a) me llamo\nb) se llama\nc) te llamas\nd) nos llamamos',
        hints: ['Se tabellen med bøyningen av llamarse'],
      },
    },

    // --- Mer teori: Spørre og svare om navn ---
    {
      id: 'spansk-1-1-2-text-2',
      type: 'text',
      content: `**Spørre om noens navn**

Uformelt (med venner og jevnaldrende):
> — ¿Cómo te llamas?
> — Me llamo Carlos. ¿Y tú?

Formelt (med voksne, lærere):
> — ¿Cómo se llama usted?
> — Me llamo señor Martínez.

**Presentere andre:**
> — Él se llama Juan. (Han heter Juan.)
> — Ella se llama Sofía. (Hun heter Sofía.)

Når du presenterer noen, bruker du **se llama** (tredje person).`,
    },

    // --- Eksempel 2 ---
    {
      id: 'spansk-1-1-2-ex-2-example',
      type: 'example',
      title: 'Presentere seg for en ny klasse',
      problem: 'Du er ny i klassen og læreren ber deg presentere deg. Hva sier du?',
      solution: `— ¡Hola! Me llamo Sofía. Mucho gusto.\n— Encantada, Sofía. Bienvenida a la clase.\n\nHer bruker vi **«Mucho gusto»** som betyr «hyggelig å møte deg». Læreren svarer med **«Encantada»** (hun er kvinne) og ønsker velkommen.`,
    },

    // --- Oppgave 2 ---
    {
      id: 'spansk-1-1-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-1-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til spansk:',
        subTasks: [
          { label: 'a', task: 'Hva heter du? (uformelt)', solution: '¿Cómo te llamas?' },
          { label: 'b', task: 'Jeg heter Erik.', solution: 'Me llamo Erik.' },
          { label: 'c', task: 'Hun heter Carmen.', solution: 'Ella se llama Carmen.' },
          { label: 'd', task: 'Hyggelig å møte deg.', solution: 'Mucho gusto.' },
        ],
        solution: 'a) ¿Cómo te llamas?\nb) Me llamo Erik.\nc) Ella se llama Carmen.\nd) Mucho gusto.',
        hints: ['Bruk riktig refleksivpronomen: me, te, se, nos'],
      },
    },

    // --- Tips ---
    {
      id: 'spansk-1-1-2-tip-1',
      type: 'tip',
      content: `**Encantado eller Encantada?** Valget avhenger av **hvem som snakker**, ikke hvem man snakker til. En gutt sier «encantado» og en jente sier «encantada». Dette er et eksempel på at spansk har grammatisk kjønn som påvirker adjektiver.`,
    },

    // --- Teori: Alder ---
    {
      id: 'spansk-1-1-2-text-3',
      type: 'text',
      content: `**Alder (La edad)**

På spansk bruker vi verbet **tener** (å ha) for å si hvor gamle vi er — ikke «å være» som på norsk.

| Spansk | Norsk |
|--------|-------|
| Tengo ___ años. | Jeg er ___ år. |
| ¿Cuántos años tienes? | Hvor gammel er du? (uformelt) |
| ¿Cuántos años tiene usted? | Hvor gammel er De? (formelt) |
| Tiene ___ años. | Han/hun er ___ år. |

**Tener** i presens (utdrag):

| Person | Spansk |
|--------|--------|
| Yo | tengo |
| Tú | tienes |
| Él/Ella/Usted | tiene |
| Nosotros/as | tenemos |
| Ellos/Ellas/Ustedes | tienen |

Legg merke til at «años» betyr «år». På spansk sier man bokstavelig «Jeg **har** 16 år» i stedet for «Jeg **er** 16 år».`,
    },

    // --- Eksempel 3 ---
    {
      id: 'spansk-1-1-2-ex-3-example',
      type: 'example',
      title: 'Fortelle om alder',
      problem: 'Lag en kort presentasjon der du sier hva du heter og hvor gammel du er.',
      solution: `— ¡Hola! Me llamo Carlos. Tengo dieciséis años.\n— Mucho gusto, Carlos. Yo me llamo Ana y tengo quince años.\n\n**Dieciséis** = 16 og **quince** = 15. Vi kommer tilbake til tallene i et eget kapittel.`,
    },

    // --- Oppgave 3 ---
    {
      id: 'spansk-1-1-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig form av verbet tener:',
        subTasks: [
          { label: 'a', task: 'Yo ___ quince años.', solution: 'tengo' },
          { label: 'b', task: '¿Cuántos años ___ tú?', solution: 'tienes' },
          { label: 'c', task: 'Ella ___ diecisiete años.', solution: 'tiene' },
          { label: 'd', task: 'Nosotros ___ dieciséis años.', solution: 'tenemos' },
        ],
        solution: 'a) tengo\nb) tienes\nc) tiene\nd) tenemos',
        hints: ['Se tabellen med bøyningen av tener'],
      },
    },

    // --- Oppgave 4 ---
    {
      id: 'spansk-1-1-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-1-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort dialog der to personer presenterer seg for hverandre. Dialogen skal inneholde: navn, alder, og en høflighetsfrase.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv dialogen mellom to elever som møtes for første gang',
            solution: '— ¡Hola! Me llamo Lucía. ¿Cómo te llamas?\n— Me llamo Pedro. Mucho gusto.\n— Encantada. ¿Cuántos años tienes?\n— Tengo dieciséis años. ¿Y tú?\n— Tengo quince años.',
          },
          {
            label: 'b',
            task: 'Skriv de tre viktigste setningene du trenger for å presentere deg selv på spansk',
            solution: '1. Me llamo [navn]. (Jeg heter...)\n2. Tengo [tall] años. (Jeg er ... år.)\n3. Mucho gusto. (Hyggelig å møte deg.)',
          },
        ],
        solution: 'a) — ¡Hola! Me llamo Lucía. ¿Cómo te llamas?\n— Me llamo Pedro. Mucho gusto.\n— Encantada. ¿Cuántos años tienes?\n— Tengo dieciséis años. ¿Y tú?\n— Tengo quince años.\n\nb) 1. Me llamo [navn].\n2. Tengo [tall] años.\n3. Mucho gusto.',
        hints: [
          'Bruk fraser fra presentasjonstabellen',
          'Husk at alder uttrykkes med tener (å ha), ikke ser (å være)',
        ],
      },
    },
  ],
  exercises: [],
};
// ============================================================================
// Kapittel 1.3: ¿De dónde eres? - Hvor kommer du fra
// ============================================================================

export const CHAPTER_SPANSK_1_1_3: TextbookChapter = {
  id: 'spansk-1-1-3',
  courseId: 'spansk-1',
  chapterNumber: '1.3',
  title: '¿De dónde eres? - Hvor kommer du fra',
  description: 'Lær å snakke om land og nasjonaliteter, og fortelle hvor du kommer fra.',
  estimatedMinutes: 45,
  competenceGoals: [
    'fortelle hvor du kommer fra og spørre andre om det samme',
    'bruke nasjonalitetsadjektiver med riktig kjønnsbøyning',
    'navngi spansktalende land og andre viktige land',
  ],
  content: [
    // --- Intro ---
    {
      id: 'spansk-1-1-3-intro',
      type: 'text',
      content: `Når du møter noen nye, er det vanlig å spørre hvor de kommer fra. I dette kapittelet lærer du å snakke om land og nasjonaliteter. Du lærer også en viktig grammatikkregel: nasjonalitetsadjektiver bøyes etter kjønn på spansk.`,
    },

    // --- Teori: Land ---
    {
      id: 'spansk-1-1-3-text-1',
      type: 'text',
      content: `**Spansktalende land (Países hispanohablantes)**

| Spansk | Norsk |
|--------|-------|
| España | Spania |
| México | Mexico |
| Argentina | Argentina |
| Colombia | Colombia |
| Perú | Peru |
| Chile | Chile |
| Cuba | Cuba |
| Venezuela | Venezuela |
| Ecuador | Ecuador |
| Guatemala | Guatemala |

**Andre viktige land:**

| Spansk | Norsk |
|--------|-------|
| Noruega | Norge |
| Estados Unidos | USA |
| Inglaterra | England |
| Francia | Frankrike |
| Alemania | Tyskland |
| Brasil | Brasil |
| China | Kina |
| Japón | Japan |

Spansk snakkes som offisielt språk i 20 land. De fleste ligger i Latin-Amerika, pluss Spania i Europa og Ekvatorial-Guinea i Afrika.`,
    },

    // --- Definisjon: Soy de... / ¿De dónde eres? ---
    {
      id: 'spansk-1-1-3-def-1',
      type: 'definition',
      title: 'Spørre og svare om opprinnelse',
      content: `For å spørre hvor noen kommer fra og svare, bruker vi verbet **ser** (å være) og preposisjonen **de** (fra).\n\n**Spørre:**\n- ¿De dónde eres? — Hvor kommer du fra? (uformelt)\n- ¿De dónde es usted? — Hvor kommer De fra? (formelt)\n\n**Svare:**\n- Soy de Noruega. — Jeg er fra Norge.\n- Soy de España. — Jeg er fra Spania.\n\n**Ser** i presens (utdrag):\n\n| Person | Spansk |\n|--------|--------|\n| Yo | soy |\n| Tú | eres |\n| Él/Ella/Usted | es |\n| Nosotros/as | somos |\n| Ellos/Ellas/Ustedes | son |\n\n**Ser** er et uregelmessig verb og et av de viktigste verbene i spansk. Det brukes blant annet om opprinnelse, nasjonalitet og faste egenskaper.`,
    },

    // --- Eksempel 1 ---
    {
      id: 'spansk-1-1-3-ex-1-example',
      type: 'example',
      title: 'Spørre hvor noen kommer fra',
      problem: 'Du møter en ny elev og vil vite hvor han kommer fra. Lag en kort dialog.',
      solution: `— ¡Hola! ¿Cómo te llamas?\n— Me llamo Alejandro. ¿Y tú?\n— Me llamo Erik. ¿De dónde eres, Alejandro?\n— Soy de México. ¿Y tú?\n— Soy de Noruega.\n\nHer bruker vi **«Soy de»** etterfulgt av landet for å si hvor vi kommer fra.`,
    },

    // --- Oppgave 1 ---
    {
      id: 'spansk-1-1-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-1-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til spansk:',
        subTasks: [
          { label: 'a', task: 'Hvor kommer du fra? (uformelt)', solution: '¿De dónde eres?' },
          { label: 'b', task: 'Jeg er fra Norge.', solution: 'Soy de Noruega.' },
          { label: 'c', task: 'Hun er fra Spania.', solution: 'Ella es de España.' },
          { label: 'd', task: 'Vi er fra Chile.', solution: 'Nosotros somos de Chile.' },
        ],
        solution: 'a) ¿De dónde eres?\nb) Soy de Noruega.\nc) Ella es de España.\nd) Nosotros somos de Chile.',
        hints: ['Bruk verbet ser + de + land', 'Se tabellen med bøyningen av ser'],
      },
    },

    // --- Mer teori: Nasjonaliteter ---
    {
      id: 'spansk-1-1-3-text-2',
      type: 'text',
      content: `**Nasjonaliteter (Nacionalidades)**

På spansk bøyes nasjonalitetsadjektiver etter kjønn. De fleste har en hankjønnsform (-o) og en hunkjønnsform (-a). Noen ender på -e eller konsonant, og da er formen lik for begge kjønn (men de som ender på konsonant legger til -a for hunkjønn).

| Land | Hankjønn (masculino) | Hunkjønn (femenino) | Norsk |
|------|---------------------|---------------------|-------|
| España | español | española | spansk |
| México | mexicano | mexicana | meksikansk |
| Argentina | argentino | argentina | argentinsk |
| Colombia | colombiano | colombiana | colombiansk |
| Perú | peruano | peruana | peruansk |
| Chile | chileno | chilena | chilensk |
| Cuba | cubano | cubana | cubansk |
| Noruega | noruego | noruega | norsk |
| Estados Unidos | estadounidense | estadounidense | amerikansk |
| Inglaterra | inglés | inglesa | engelsk |
| Francia | francés | francesa | fransk |
| Alemania | alemán | alemana | tysk |

Legg merke til at nasjonaliteter **ikke** skrives med stor bokstav på spansk, i motsetning til på norsk.`,
    },

    // --- Eksempel 2 ---
    {
      id: 'spansk-1-1-3-ex-2-example',
      type: 'example',
      title: 'Bruke nasjonalitetsadjektiver',
      problem: 'Hvordan sier du at Carlos er spansk og María er meksikansk?',
      solution: `— Carlos es español.\n— María es mexicana.\n\nNår vi snakker om Carlos (hankjønn), bruker vi **español**. Når vi snakker om María (hunkjønn), bruker vi **mexicana**. Adjektivet må samsvare med kjønnet til personen det beskriver.`,
    },

    // --- Oppgave 2 ---
    {
      id: 'spansk-1-1-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-1-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig nasjonalitetsadjektiv:',
        subTasks: [
          { label: 'a', task: 'Pedro es ___ (fra Spania).', solution: 'español' },
          { label: 'b', task: 'Ana es ___ (fra Mexico).', solution: 'mexicana' },
          { label: 'c', task: 'Yo soy ___ (fra Norge, gutt).', solution: 'noruego' },
          { label: 'd', task: 'Ella es ___ (fra Frankrike).', solution: 'francesa' },
        ],
        solution: 'a) español\nb) mexicana\nc) noruego\nd) francesa',
        hints: ['Se tabellen med nasjonaliteter', 'Husk at adjektivet må samsvare med kjønnet til personen'],
      },
    },

    // --- Tips ---
    {
      id: 'spansk-1-1-3-tip-1',
      type: 'tip',
      content: `**To måter å uttrykke opprinnelse:** Du kan si både «Soy de España» (Jeg er fra Spania) og «Soy español/española» (Jeg er spansk). Begge er korrekte. Den første bruker preposisjonen **de** + landnavn, den andre bruker et nasjonalitetsadjektiv. Husk at adjektivet må samsvare med ditt kjønn!`,
    },

    // --- Eksempel 3 ---
    {
      id: 'spansk-1-1-3-ex-3-example',
      type: 'example',
      title: 'Presentere seg med nasjonalitet',
      problem: 'Lag en kort presentasjon der du forteller hva du heter, hvor gammel du er, og hvor du kommer fra.',
      solution: `— ¡Hola! Me llamo Ingrid. Tengo dieciséis años. Soy noruega. Soy de Oslo.\n\nHer bruker Ingrid hunkjønnsformen **noruega** fordi hun er jente. En gutt ville sagt **noruego**. Hun bruker også «Soy de Oslo» for å spesifisere hvilken by hun er fra.`,
    },

    // --- Oppgave 3 ---
    {
      id: 'spansk-1-1-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-1-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk. Pass på riktig kjønnsbøyning:',
        subTasks: [
          { label: 'a', task: 'Maria er argentinsk.', solution: 'María es argentina.' },
          { label: 'b', task: 'Juan er colombiansk.', solution: 'Juan es colombiano.' },
          { label: 'c', task: 'De (gutter) er tyske.', solution: 'Ellos son alemanes.' },
          { label: 'd', task: 'Vi (jenter) er norske.', solution: 'Nosotras somos noruegas.' },
        ],
        solution: 'a) María es argentina.\nb) Juan es colombiano.\nc) Ellos son alemanes.\nd) Nosotras somos noruegas.',
        hints: ['Nasjonalitetsadjektiver bøyes i kjønn og tall', 'Flertallsformen legger til -s eller -es'],
      },
    },

    // --- Oppgave 4 ---
    {
      id: 'spansk-1-1-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-1-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort dialog der to personer spør hverandre hvor de kommer fra og svarer med nasjonalitetsadjektiv. Bruk minst 3 ulike land.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv dialogen mellom tre utvekslingselever som møtes for første gang',
            solution: '— ¡Hola! Me llamo Pierre. Soy francés. ¿De dónde eres tú?\n— Me llamo Yuki. Soy japonesa. ¿Y tú?\n— Yo me llamo Carlos. Soy colombiano. Mucho gusto.\n— Igualmente. ¿De dónde eres exactamente, Carlos?\n— Soy de Bogotá. ¿Y tú, Pierre?\n— Soy de París.',
          },
          {
            label: 'b',
            task: 'Skriv tre setninger der du presenterer deg selv med navn, alder og nasjonalitet',
            solution: 'Me llamo [navn]. Tengo [tall] años. Soy noruego/noruega, soy de [by].',
          },
        ],
        solution: 'a) — ¡Hola! Me llamo Pierre. Soy francés. ¿De dónde eres tú?\n— Me llamo Yuki. Soy japonesa. ¿Y tú?\n— Yo me llamo Carlos. Soy colombiano. Mucho gusto.\n— Igualmente. ¿De dónde eres exactamente, Carlos?\n— Soy de Bogotá. ¿Y tú, Pierre?\n— Soy de París.\n\nb) Me llamo [navn]. Tengo [tall] años. Soy noruego/noruega, soy de [by].',
        hints: [
          'Bruk «Soy de» + land eller «Soy» + nasjonalitetsadjektiv',
          'Husk riktig kjønnsbøyning på nasjonalitetsadjektivene',
        ],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.4: Primeras conversaciones - Første samtaler
// ============================================================================

export const CHAPTER_SPANSK_1_1_4: TextbookChapter = {
  id: 'spansk-1-1-4',
  courseId: 'spansk-1',
  chapterNumber: '1.4',
  title: 'Primeras conversaciones - Første samtaler',
  description: 'Kombiner hilsener, presentasjoner, alder og nasjonalitet i fullstendige samtaler.',
  estimatedMinutes: 50,
  competenceGoals: [
    'føre enkle samtaler på spansk ved å kombinere hilsener, presentasjon, alder og nasjonalitet',
    'forstå og bruke ulike samtalemønstre i forskjellige situasjoner',
    'skrive og forstå korte dialoger på spansk',
  ],
  content: [
    // --- Intro ---
    {
      id: 'spansk-1-1-4-intro',
      type: 'text',
      content: `Nå har du lært å hilse, presentere deg, si alderen din og fortelle hvor du kommer fra. I dette kapittelet setter vi alt sammen til fullstendige samtaler. Du lærer å føre enkle, naturlige samtaler på spansk i ulike situasjoner.`,
    },

    // --- Teori: Samtalemønster ---
    {
      id: 'spansk-1-1-4-text-1',
      type: 'text',
      content: `**Byggesteinene i en samtale (Los elementos de una conversación)**

En typisk første samtale på spansk følger ofte dette mønsteret:

| Steg | Spansk | Norsk |
|------|--------|-------|
| 1. Hilse | ¡Hola! / Buenos días | Hei! / God dag |
| 2. Spørre om navn | ¿Cómo te llamas? | Hva heter du? |
| 3. Svare med navn | Me llamo... | Jeg heter... |
| 4. Høflighetsfrase | Mucho gusto | Hyggelig å møte deg |
| 5. Spørre om opprinnelse | ¿De dónde eres? | Hvor kommer du fra? |
| 6. Svare med opprinnelse | Soy de... / Soy... | Jeg er fra... / Jeg er... |
| 7. Spørre om alder | ¿Cuántos años tienes? | Hvor gammel er du? |
| 8. Svare med alder | Tengo... años | Jeg er... år |
| 9. Ta farvel | ¡Adiós! / Hasta luego | Ha det! / Vi sees |

Du trenger ikke alltid bruke alle stegene. I en kort samtale kan du kombinere to-tre elementer.`,
    },

    // --- Definisjon: Sammenhengsord ---
    {
      id: 'spansk-1-1-4-def-1',
      type: 'definition',
      title: 'Nyttige sammenhengsord (Conectores)',
      content: `For å gjøre samtalene mer naturlige, kan du bruke disse sammenhengsordene:\n\n| Spansk | Norsk |\n|--------|-------|\n| y | og |\n| también | også |\n| pero | men |\n| ¿Y tú? | Og du? |\n| ¿Verdad? | Ikke sant? |\n| Pues... | Vel... / Altså... |\n| Bueno | Bra / Vel |\n| Mira | Se (for å fange oppmerksomhet) |\n\nDisse små ordene gjør at samtalene flyter bedre og høres mer naturlige ut.`,
    },

    // --- Eksempel 1 ---
    {
      id: 'spansk-1-1-4-ex-1-example',
      type: 'example',
      title: 'Samtale på skolen',
      problem: 'To elever møtes første skoledag. Skriv en naturlig samtale.',
      solution: `— ¡Hola! Buenos días. ¿Cómo te llamas?\n— Me llamo Sofía. ¿Y tú?\n— Me llamo Lars. Mucho gusto, Sofía.\n— Encantada. ¿De dónde eres, Lars?\n— Soy noruego, soy de Bergen. ¿Y tú?\n— Soy española, soy de Madrid. Pero ahora vivo aquí.\n— ¡Qué bien! ¿Cuántos años tienes?\n— Tengo quince años. ¿Y tú?\n— Yo también tengo quince años.\n\nLegg merke til bruken av **«¿Y tú?»** (Og du?) for å returnere spørsmålet, og **«Yo también»** (Jeg også) for å vise enighet. **«Pero ahora vivo aquí»** betyr «Men nå bor jeg her».`,
    },

    // --- Oppgave 1 ---
    {
      id: 'spansk-1-1-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-1-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Sett setningene i riktig rekkefølge for å lage en naturlig dialog:',
        subTasks: [
          {
            label: 'a',
            task: '1) Tengo catorce años. 2) ¡Hola! ¿Cómo te llamas? 3) Me llamo Pablo. ¿Y tú? 4) Me llamo Nora. ¿Cuántos años tienes?',
            solution: '2) ¡Hola! ¿Cómo te llamas? → 3) Me llamo Pablo. ¿Y tú? → 4) Me llamo Nora. ¿Cuántos años tienes? → 1) Tengo catorce años.',
          },
          {
            label: 'b',
            task: '1) Soy de Colombia. ¿Y tú? 2) Mucho gusto. ¿De dónde eres? 3) Soy noruega, soy de Oslo. 4) Me llamo Valentina. Encantada.',
            solution: '4) Me llamo Valentina. Encantada. → 2) Mucho gusto. ¿De dónde eres? → 1) Soy de Colombia. ¿Y tú? → 3) Soy noruega, soy de Oslo.',
          },
        ],
        solution: 'a) 2 → 3 → 4 → 1\nb) 4 → 2 → 1 → 3',
        hints: ['En samtale starter vanligvis med en hilsen eller presentasjon', 'Spørsmål kommer før svar'],
      },
    },

    // --- Mer teori: Formelle og uformelle samtaler ---
    {
      id: 'spansk-1-1-4-text-2',
      type: 'text',
      content: `**Formelle vs. uformelle samtaler**

Husk forskjellen mellom **tú** (uformelt) og **usted** (formelt). Her er en sammenligning:

| Situasjon | Uformelt (tú) | Formelt (usted) |
|-----------|---------------|-----------------|
| Hva heter du? | ¿Cómo te llamas? | ¿Cómo se llama usted? |
| Hvor kommer du fra? | ¿De dónde eres? | ¿De dónde es usted? |
| Hvor gammel er du? | ¿Cuántos años tienes? | ¿Cuántos años tiene usted? |
| Hvordan har du det? | ¿Cómo estás? | ¿Cómo está usted? |

**Når bruker vi hva?**
- **Tú**: venner, klassekamerater, jevnaldrende, familie
- **Usted**: lærere, voksne du ikke kjenner, i butikker/restauranter, formelle situasjoner

I Latin-Amerika er man generelt mer formell enn i Spania. I noen land som Colombia brukes **usted** også mellom venner.`,
    },

    // --- Eksempel 2 ---
    {
      id: 'spansk-1-1-4-ex-2-example',
      type: 'example',
      title: 'Formell samtale med en lærer',
      problem: 'En ny elev møter læreren sin for første gang. Skriv en formell dialog.',
      solution: `— Buenos días. ¿Cómo se llama usted?\n— Me llamo señora Rodríguez. Soy la profesora de español. ¿Y tú, cómo te llamas?\n— Me llamo Knut. Soy noruego.\n— Mucho gusto, Knut. Bienvenido a la clase.\n— Gracias, señora Rodríguez.\n\nLegg merke til at eleven bruker **usted**-formen til læreren, mens læreren bruker **tú**-formen til eleven. **«Bienvenido»** betyr «velkommen» (til en gutt; «bienvenida» til en jente). **«La profesora»** betyr «læreren» (kvinne).`,
    },

    // --- Oppgave 2 ---
    {
      id: 'spansk-1-1-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-1-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør om disse uformelle spørsmålene til formelle (usted-form):',
        subTasks: [
          { label: 'a', task: '¿Cómo te llamas?', solution: '¿Cómo se llama usted?' },
          { label: 'b', task: '¿De dónde eres?', solution: '¿De dónde es usted?' },
          { label: 'c', task: '¿Cuántos años tienes?', solution: '¿Cuántos años tiene usted?' },
          { label: 'd', task: '¿Cómo estás?', solution: '¿Cómo está usted?' },
        ],
        solution: 'a) ¿Cómo se llama usted?\nb) ¿De dónde es usted?\nc) ¿Cuántos años tiene usted?\nd) ¿Cómo está usted?',
        hints: ['Bytt refleksivpronomenet te → se og verbformen til tredje person', 'Legg til «usted» på slutten av setningen'],
      },
    },

    // --- Tips ---
    {
      id: 'spansk-1-1-4-tip-1',
      type: 'tip',
      content: `**Slik husker du samtalemønsteret:** Tenk på det som en trapp — du starter med en hilsen, deretter navn, så opprinnelse og alder. Hvert steg bygger på det forrige. Et godt triks er å alltid returnere spørsmålet med **«¿Y tú?»** (Og du?) eller **«¿Y usted?»** (Og De?). Da holder du samtalen i gang!`,
    },

    // --- Eksempel 3 ---
    {
      id: 'spansk-1-1-4-ex-3-example',
      type: 'example',
      title: 'Møte noen på ferie',
      problem: 'Du er på ferie i Spania og møter en jevnaldrende person på stranden. Skriv en uformell samtale.',
      solution: `— ¡Hola! ¿Qué tal?\n— ¡Hola! Bien, gracias. ¿Y tú?\n— Muy bien. Me llamo Ingrid. ¿Cómo te llamas?\n— Me llamo Pablo. Mucho gusto.\n— Encantada. ¿Eres de aquí?\n— Sí, soy español. Soy de Málaga. ¿Y tú, de dónde eres?\n— Soy noruega, soy de Tromsø.\n— ¡Qué bien! ¿Cuántos años tienes?\n— Tengo dieciséis años. ¿Y tú?\n— Yo también tengo dieciséis. ¡Genial!\n\n**«¿Eres de aquí?»** betyr «Er du herfra?» — en naturlig måte å spørre om opprinnelse. **«¡Qué bien!»** betyr «Så bra!» og **«¡Genial!»** betyr «Flott!» — vanlige uttrykk for å vise entusiasme.`,
    },

    // --- Oppgave 3 ---
    {
      id: 'spansk-1-1-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-1-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les dialogen og svar på spørsmålene på norsk:',
        subTasks: [
          {
            label: 'a',
            task: 'Dialog: — ¡Hola! Me llamo Carmen. Soy mexicana, soy de Guadalajara. Tengo quince años.\n\nHva heter personen, hvor kommer hun fra, og hvor gammel er hun?',
            solution: 'Hun heter Carmen. Hun er fra Guadalajara i Mexico. Hun er 15 år gammel.',
          },
          {
            label: 'b',
            task: 'Dialog: — Buenos días. Me llamo señor Fernández. Soy colombiano, soy de Bogotá.\n\nEr dette en formell eller uformell presentasjon? Hvordan vet du det?',
            solution: 'Det er en formell presentasjon. Vi ser det fordi personen bruker «señor» foran etternavnet sitt og hilser med «Buenos días» i stedet for bare «¡Hola!».',
          },
          {
            label: 'c',
            task: 'Dialog: — ¿De dónde eres? — Soy argentino, soy de Buenos Aires. ¿Y tú? — Soy chilena, soy de Santiago.\n\nHvilken nasjonalitet har personene, og hvorfor vet vi at den andre personen er en jente?',
            solution: 'Den første personen er argentinsk (argentino — gutt) og den andre er chilensk (chilena — jente). Vi vet at den andre personen er jente fordi hun bruker hunkjønnsformen «chilena» i stedet for «chileno».',
          },
        ],
        solution: 'a) Hun heter Carmen, er fra Guadalajara i Mexico, og er 15 år gammel.\nb) Formell presentasjon — bruk av «señor» + etternavn og «Buenos días».\nc) Argentinsk gutt og chilensk jente — «chilena» er hunkjønnsformen.',
        hints: ['Les dialogen nøye og se etter kjønnsbøyning i nasjonalitetsadjektivene', 'Formelle samtaler bruker titler som señor/señora'],
      },
    },

    // --- Oppgave 4 ---
    {
      id: 'spansk-1-1-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-1-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv fullstendige dialoger på spansk for disse situasjonene. Bruk hilsener, presentasjon, alder, nasjonalitet og avskjed.',
        subTasks: [
          {
            label: 'a',
            task: 'To ungdommer møtes på en språkleir. Den ene er norsk (16 år) og den andre er spansk (15 år). Skriv en dialog med minst 8 linjer.',
            solution: '— ¡Hola! ¿Qué tal?\n— ¡Hola! Bien, gracias. ¿Y tú?\n— Muy bien. Me llamo Emma. ¿Cómo te llamas?\n— Me llamo Diego. Mucho gusto, Emma.\n— Encantada. ¿De dónde eres?\n— Soy español, soy de Barcelona. ¿Y tú?\n— Soy noruega, soy de Oslo. Tengo dieciséis años. ¿Y tú?\n— Tengo quince años. ¡Qué bien! Hasta luego, Emma.\n— ¡Adiós, Diego! Hasta mañana.',
          },
          {
            label: 'b',
            task: 'En elev presenterer seg for en ny lærer (formell situasjon). Skriv en dialog med minst 6 linjer.',
            solution: '— Buenos días. ¿Cómo se llama usted?\n— Me llamo señor Martínez. Soy el profesor de español. ¿Cómo te llamas?\n— Me llamo Olav. Soy noruego.\n— Mucho gusto, Olav. ¿Cuántos años tienes?\n— Tengo dieciséis años.\n— Bienvenido a la clase. Hasta mañana.\n— Gracias, señor Martínez. Hasta mañana.',
          },
        ],
        solution: 'a) — ¡Hola! ¿Qué tal?\n— ¡Hola! Bien, gracias. ¿Y tú?\n— Muy bien. Me llamo Emma. ¿Cómo te llamas?\n— Me llamo Diego. Mucho gusto, Emma.\n— Encantada. ¿De dónde eres?\n— Soy español, soy de Barcelona. ¿Y tú?\n— Soy noruega, soy de Oslo. Tengo dieciséis años. ¿Y tú?\n— Tengo quince años. ¡Qué bien! Hasta luego, Emma.\n— ¡Adiós, Diego! Hasta mañana.\n\nb) — Buenos días. ¿Cómo se llama usted?\n— Me llamo señor Martínez. Soy el profesor de español. ¿Cómo te llamas?\n— Me llamo Olav. Soy noruego.\n— Mucho gusto, Olav. ¿Cuántos años tienes?\n— Tengo dieciséis años.\n— Bienvenido a la clase. Hasta mañana.\n— Gracias, señor Martínez. Hasta mañana.',
        hints: [
          'Følg samtalemønsteret: hilsen → navn → opprinnelse → alder → avskjed',
          'Bruk tú-form mellom jevnaldrende og usted-form med lærere',
          'Husk riktig kjønnsbøyning på encantado/encantada og nasjonalitetsadjektiver',
        ],
      },
    },
  ],
  exercises: [],
};
// ============================================================================
// Kapittel 2.1: Los números 0-20 - Tall 0-20
// ============================================================================

export const CHAPTER_SPANSK_1_2_1: TextbookChapter = {
  id: 'spansk-1-2-1',
  courseId: 'spansk-1',
  chapterNumber: '2.1',
  title: 'Los números 0-20 - Tall 0-20',
  description: 'Lær tallene fra 0 til 20 på spansk, og bruk dem i telefonnumre og enkel regning.',
  estimatedMinutes: 40,
  competenceGoals: [
    'telle fra 0 til 20 på spansk',
    'bruke tall i enkle hverdagssituasjoner som telefonnumre og regning',
  ],
  content: [
    // --- Intro ---
    {
      id: 'spansk-1-2-1-intro',
      type: 'text',
      content: `Tall er noe du trenger hele tiden — for å oppgi telefonnummeret ditt, handle i en butikk, eller si hvor gammel du er. I dette kapittelet lærer du tallene fra 0 til 20 på spansk. Disse tallene må læres utenat, fordi de fleste har helt egne former.`,
    },

    // --- Teori: Tallene 0-15 ---
    {
      id: 'spansk-1-2-1-text-1',
      type: 'text',
      content: `**Tallene 0-15 (Los números 0-15)**

| Tall | Spansk | Tall | Spansk |
|------|--------|------|--------|
| 0 | cero | 8 | ocho |
| 1 | uno | 9 | nueve |
| 2 | dos | 10 | diez |
| 3 | tres | 11 | once |
| 4 | cuatro | 12 | doce |
| 5 | cinco | 13 | trece |
| 6 | seis | 14 | catorce |
| 7 | siete | 15 | quince |

Alle tallene fra 0 til 15 har unike former som må læres utenat. Legg merke til at **once** (11) til **quince** (15) ikke følger et tydelig mønster, men du kan se at de fleste ender på **-ce**.`,
    },

    // --- Definisjon: Mønster for 16-19 ---
    {
      id: 'spansk-1-2-1-def-1',
      type: 'definition',
      title: 'Tallene 16-19: dieci + tall',
      content: `Fra 16 til 19 følger tallene et mønster: **dieci-** + grunntallets form. De skrives som **ett ord**.\n\n| Tall | Spansk | Oppbygging |\n|------|--------|------------|\n| 16 | dieciséis | dieci + seis |\n| 17 | diecisiete | dieci + siete |\n| 18 | dieciocho | dieci + ocho |\n| 19 | diecinueve | dieci + nueve |\n| 20 | veinte | (eget ord) |\n\nLegg merke til aksenten i **dieciséis** (16). De andre har ingen aksent. Tallet **20** (veinte) har sin egen form og følger ikke mønsteret.`,
    },

    // --- Eksempel 1 ---
    {
      id: 'spansk-1-2-1-ex-1-example',
      type: 'example',
      title: 'Si et telefonnummer',
      problem: 'Hvordan sier du telefonnummeret 917 04 15 20 på spansk?',
      solution: `**Nueve - uno - siete - cero - cuatro - quince - veinte**\n\nTelefonnumre leses vanligvis siffer for siffer, men de to siste parene kan leses som tosifrede tall. I Spania har mobilnumre 9 sifre.`,
    },

    // --- Oppgave 1 ---
    {
      id: 'spansk-1-2-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-2-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv disse tallene på spansk:',
        subTasks: [
          { label: 'a', task: '7', solution: 'siete' },
          { label: 'b', task: '12', solution: 'doce' },
          { label: 'c', task: '16', solution: 'dieciséis' },
          { label: 'd', task: '20', solution: 'veinte' },
        ],
        solution: 'a) siete\nb) doce\nc) dieciséis\nd) veinte',
        hints: ['Se tabellene med tall 0-15 og 16-20'],
      },
    },

    // --- Mer teori: Regning på spansk ---
    {
      id: 'spansk-1-2-1-text-2',
      type: 'text',
      content: `**Enkel regning på spansk (Matemáticas básicas)**

| Spansk | Norsk | Symbol |
|--------|-------|--------|
| más | pluss | + |
| menos | minus | − |
| son | er (lik) | = |
| ¿Cuánto es? | Hvor mye er det? | |

**Eksempler:**
- Dos más tres son cinco. (2 + 3 = 5)
- Diez menos cuatro son seis. (10 − 4 = 6)
- ¿Cuánto es ocho más siete? — Son quince. (8 + 7 = 15)

Å øve på enkel regning på spansk er en fin måte å automatisere tallene.`,
    },

    // --- Eksempel 2 ---
    {
      id: 'spansk-1-2-1-ex-2-example',
      type: 'example',
      title: 'Regning på spansk',
      problem: 'Hvordan sier du «11 + 9 = 20» på spansk?',
      solution: `**Once más nueve son veinte.**\n\nLegg merke til at vi bruker **son** (er, flertall) fordi resultatet er et tall som representerer en mengde. Dette er en fast form i spansk regning.`,
    },

    // --- Oppgave 2 ---
    {
      id: 'spansk-1-2-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-2-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv disse regnestykkene på spansk:',
        subTasks: [
          { label: 'a', task: '3 + 4 = 7', solution: 'Tres más cuatro son siete.' },
          { label: 'b', task: '15 − 5 = 10', solution: 'Quince menos cinco son diez.' },
          { label: 'c', task: '8 + 6 = 14', solution: 'Ocho más seis son catorce.' },
          { label: 'd', task: '20 − 1 = 19', solution: 'Veinte menos uno son diecinueve.' },
        ],
        solution: 'a) Tres más cuatro son siete.\nb) Quince menos cinco son diez.\nc) Ocho más seis son catorce.\nd) Veinte menos uno son diecinueve.',
        hints: ['Bruk «más» for pluss, «menos» for minus og «son» for er lik'],
      },
    },

    // --- Tips ---
    {
      id: 'spansk-1-2-1-tip-1',
      type: 'tip',
      content: `En god måte å lære tallene på er å telle på spansk i hverdagen — for eksempel når du går i trapper, teller penger, eller ser på klokka. Prøv også å si telefonnummeret ditt på spansk hver dag!`,
    },

    // --- Eksempel 3 ---
    {
      id: 'spansk-1-2-1-ex-3-example',
      type: 'example',
      title: 'Alle tallene 0-20',
      problem: 'Tell fra 0 til 20 på spansk.',
      solution: `**Cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce, quince, dieciséis, diecisiete, dieciocho, diecinueve, veinte.**\n\nDel gjerne opp i grupper når du øver:\n- 0-5: cero, uno, dos, tres, cuatro, cinco\n- 6-10: seis, siete, ocho, nueve, diez\n- 11-15: once, doce, trece, catorce, quince\n- 16-20: dieciséis, diecisiete, dieciocho, diecinueve, veinte`,
    },

    // --- Oppgave 3 ---
    {
      id: 'spansk-1-2-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-2-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv tallene på spansk:',
        subTasks: [
          { label: 'a', task: '0', solution: 'cero' },
          { label: 'b', task: '11', solution: 'once' },
          { label: 'c', task: '17', solution: 'diecisiete' },
          { label: 'd', task: '14', solution: 'catorce' },
        ],
        solution: 'a) cero\nb) once\nc) diecisiete\nd) catorce',
        hints: ['Tallene 0-15 har unike former', 'Tallene 16-19 følger mønsteret dieci + tall'],
      },
    },

    // --- Oppgave 4 ---
    {
      id: 'spansk-1-2-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-2-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv følgende situasjoner på spansk med tall:',
        subTasks: [
          {
            label: 'a',
            task: 'Du er 16 år gammel. Si det på spansk.',
            solution: 'Tengo dieciséis años.',
          },
          {
            label: 'b',
            task: 'Si telefonnummeret 6-1-8-0-3-12 på spansk (siffer for siffer, siste to som tall).',
            solution: 'Seis - uno - ocho - cero - tres - doce.',
          },
          {
            label: 'c',
            task: 'Lag et regnestykke som gir 13 og skriv det på spansk.',
            solution: 'For eksempel: Seis más siete son trece. (6 + 7 = 13)',
          },
          {
            label: 'd',
            task: 'Det er 18 elever i klassen. Si det på spansk.',
            solution: 'Hay dieciocho alumnos en la clase.',
          },
        ],
        solution: 'a) Tengo dieciséis años.\nb) Seis - uno - ocho - cero - tres - doce.\nc) For eksempel: Seis más siete son trece.\nd) Hay dieciocho alumnos en la clase.',
        hints: [
          'Husk at alder uttrykkes med tener: Tengo ... años',
          'Telefonnumre leses vanligvis siffer for siffer',
        ],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.2: Los números 21-100 - Tall 21-100
// ============================================================================

export const CHAPTER_SPANSK_1_2_2: TextbookChapter = {
  id: 'spansk-1-2-2',
  courseId: 'spansk-1',
  chapterNumber: '2.2',
  title: 'Los números 21-100 - Tall 21-100',
  description: 'Lær tallene fra 21 til 100 på spansk, og bruk dem i priser og adresser.',
  estimatedMinutes: 45,
  competenceGoals: [
    'telle fra 21 til 100 på spansk',
    'bruke tall i sammenhenger som priser og adresser',
  ],
  content: [
    // --- Intro ---
    {
      id: 'spansk-1-2-2-intro',
      type: 'text',
      content: `Nå som du kan tallene 0-20, er det på tide å utvide til 100. Den gode nyheten er at tallene fra 21 til 100 følger tydelige mønstre, så det blir lettere enn du kanskje tror!`,
    },

    // --- Teori: Tallene 21-29 ---
    {
      id: 'spansk-1-2-2-text-1',
      type: 'text',
      content: `**Tallene 21-29 (Los números 21-29)**

Tallene 21-29 skrives som **ett ord**, bygd på **veinti-** pluss ensifret tall:

| Tall | Spansk | Oppbygging |
|------|--------|------------|
| 21 | veintiuno | veinti + uno |
| 22 | veintidós | veinti + dos |
| 23 | veintitrés | veinti + tres |
| 24 | veinticuatro | veinti + cuatro |
| 25 | veinticinco | veinti + cinco |
| 26 | veintiséis | veinti + seis |
| 27 | veintisiete | veinti + siete |
| 28 | veintiocho | veinti + ocho |
| 29 | veintinueve | veinti + nueve |

Legg merke til aksentene: **veintidós** (22), **veintitrés** (23) og **veintiséis** (26) har aksent.`,
    },

    // --- Definisjon: Tierne 30-100 ---
    {
      id: 'spansk-1-2-2-def-1',
      type: 'definition',
      title: 'Tierne 30-100',
      content: `Fra 30 og oppover skrives tierne som egne ord:\n\n| Tall | Spansk |\n|------|--------|\n| 30 | treinta |\n| 40 | cuarenta |\n| 50 | cincuenta |\n| 60 | sesenta |\n| 70 | setenta |\n| 80 | ochenta |\n| 90 | noventa |\n| 100 | cien |\n\nFra 31 og oppover bruker man **y** (og) mellom tierne og enerne, og det skrives som **tre separate ord**: treinta **y** uno, treinta **y** dos, osv. Dette er forskjellig fra 21-29 som skrives som ett ord.`,
    },

    // --- Eksempel 1 ---
    {
      id: 'spansk-1-2-2-ex-1-example',
      type: 'example',
      title: 'Sammensatte tall 31-99',
      problem: 'Hvordan sier du 47 og 83 på spansk?',
      solution: `**47 = cuarenta y siete** (40 + 7)\n**83 = ochenta y tres** (80 + 3)\n\nMønsteret er alltid: tier + **y** + ener. Husk at **y** betyr «og» på spansk.`,
    },

    // --- Oppgave 1 ---
    {
      id: 'spansk-1-2-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-2-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv disse tallene på spansk:',
        subTasks: [
          { label: 'a', task: '24', solution: 'veinticuatro' },
          { label: 'b', task: '35', solution: 'treinta y cinco' },
          { label: 'c', task: '58', solution: 'cincuenta y ocho' },
          { label: 'd', task: '100', solution: 'cien' },
        ],
        solution: 'a) veinticuatro\nb) treinta y cinco\nc) cincuenta y ocho\nd) cien',
        hints: ['Tallene 21-29 skrives som ett ord', 'Fra 31 brukes tre ord: tier + y + ener'],
      },
    },

    // --- Mer teori: Priser ---
    {
      id: 'spansk-1-2-2-text-2',
      type: 'text',
      content: `**Priser på spansk (Los precios)**

I Spania bruker man **euro (€)** som valuta. Slik snakker du om priser:

| Spansk | Norsk |
|--------|-------|
| ¿Cuánto cuesta? | Hvor mye koster det? |
| Cuesta ___ euros. | Det koster ___ euro. |
| ¿Cuánto cuestan? | Hvor mye koster de? (flertall) |
| Cuestan ___ euros. | De koster ___ euro. |

**Eksempler:**
- El libro cuesta doce euros. (Boken koster 12 euro.)
- Los zapatos cuestan cincuenta euros. (Skoene koster 50 euro.)
- La camiseta cuesta veinticinco euros. (T-skjorten koster 25 euro.)

**Cuesta** brukes for én ting (entall), **cuestan** for flere ting (flertall).`,
    },

    // --- Eksempel 2 ---
    {
      id: 'spansk-1-2-2-ex-2-example',
      type: 'example',
      title: 'Spørre om pris',
      problem: 'Du er i en butikk og vil vite hva en jakke koster. Jakken koster 79 euro. Lag dialogen.',
      solution: `— Perdone, ¿cuánto cuesta la chaqueta?\n— Cuesta setenta y nueve euros.\n— Gracias.\n\n**La chaqueta** = jakken. Vi bruker **cuesta** (entall) fordi det er snakk om én jakke.`,
    },

    // --- Oppgave 2 ---
    {
      id: 'spansk-1-2-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-2-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv prisene på spansk:',
        subTasks: [
          { label: 'a', task: 'Boken koster 22 euro.', solution: 'El libro cuesta veintidós euros.' },
          { label: 'b', task: 'Skoene koster 65 euro.', solution: 'Los zapatos cuestan sesenta y cinco euros.' },
          { label: 'c', task: 'Pennen koster 3 euro.', solution: 'El bolígrafo cuesta tres euros.' },
          { label: 'd', task: 'Buksene koster 40 euro.', solution: 'Los pantalones cuestan cuarenta euros.' },
        ],
        solution: 'a) El libro cuesta veintidós euros.\nb) Los zapatos cuestan sesenta y cinco euros.\nc) El bolígrafo cuesta tres euros.\nd) Los pantalones cuestan cuarenta euros.',
        hints: ['Bruk «cuesta» for én ting og «cuestan» for flere ting', 'Tallene 21-29 skrives som ett ord'],
      },
    },

    // --- Tips ---
    {
      id: 'spansk-1-2-2-tip-1',
      type: 'tip',
      content: `For å huske tierne, legg merke til likhetene med enerne: **treinta** (30) ligner **tres** (3), **cuarenta** (40) ligner **cuatro** (4), **cincuenta** (50) ligner **cinco** (5), osv. Unntaket er **veinte** (20) som ikke ligner **dos** (2).`,
    },

    // --- Eksempel 3 ---
    {
      id: 'spansk-1-2-2-ex-3-example',
      type: 'example',
      title: 'Adresser med tall',
      problem: 'Si adressen «Calle Gran Vía, 52» på spansk.',
      solution: `**Calle Gran Vía, número cincuenta y dos.**\n\nI spanske adresser kommer gatenavnet først, deretter nummeret. **Calle** betyr «gate». **Número** kan legges til for å tydeliggjøre at det er et husnummer.`,
    },

    // --- Oppgave 3 ---
    {
      id: 'spansk-1-2-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-2-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv tallene på spansk:',
        subTasks: [
          { label: 'a', task: '73', solution: 'setenta y tres' },
          { label: 'b', task: '91', solution: 'noventa y uno' },
          { label: 'c', task: '46', solution: 'cuarenta y seis' },
          { label: 'd', task: '67', solution: 'sesenta y siete' },
        ],
        solution: 'a) setenta y tres\nb) noventa y uno\nc) cuarenta y seis\nd) sesenta y siete',
        hints: ['Mønster: tier + y + ener', 'Se tabellen med tierne 30-100'],
      },
    },

    // --- Oppgave 4 ---
    {
      id: 'spansk-1-2-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-2-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk tall i hverdagssituasjoner. Skriv på spansk:',
        subTasks: [
          {
            label: 'a',
            task: 'Du bor i gate nummer 88. Si adressen din: «Calle Alcalá, número ___».',
            solution: 'Calle Alcalá, número ochenta y ocho.',
          },
          {
            label: 'b',
            task: 'Et par sko koster 95 euro. Fortell om prisen.',
            solution: 'Los zapatos cuestan noventa y cinco euros.',
          },
          {
            label: 'c',
            task: 'Bestemoren din er 72 år. Si det på spansk.',
            solution: 'Mi abuela tiene setenta y dos años.',
          },
          {
            label: 'd',
            task: 'Det er 29 elever i klassen. Si det på spansk.',
            solution: 'Hay veintinueve alumnos en la clase.',
          },
        ],
        solution: 'a) Calle Alcalá, número ochenta y ocho.\nb) Los zapatos cuestan noventa y cinco euros.\nc) Mi abuela tiene setenta y dos años.\nd) Hay veintinueve alumnos en la clase.',
        hints: [
          'Alder uttrykkes med tener: tiene ... años',
          'Priser med cuesta/cuestan',
          'Tallene 21-29 skrives som ett ord, 31+ som tre ord',
        ],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.3: Los colores - Fargene
// ============================================================================

export const CHAPTER_SPANSK_1_2_3: TextbookChapter = {
  id: 'spansk-1-2-3',
  courseId: 'spansk-1',
  chapterNumber: '2.3',
  title: 'Los colores - Fargene',
  description: 'Lær fargene på spansk og hvordan de bøyes etter kjønn (hankjønn/hunkjønn).',
  estimatedMinutes: 40,
  competenceGoals: [
    'navngi de vanligste fargene på spansk',
    'bruke riktig kjønnsform av fargeadjektiver',
    'beskrive gjenstander med farger',
  ],
  content: [
    // --- Intro ---
    {
      id: 'spansk-1-2-3-intro',
      type: 'text',
      content: `Farger er noe vi bruker hele tiden for å beskrive ting rundt oss. På spansk er fargene adjektiver, og noen av dem endrer form etter om substantivet de beskriver er hankjønn eller hunkjønn. La oss lære de viktigste fargene!`,
    },

    // --- Teori: Fargene ---
    {
      id: 'spansk-1-2-3-text-1',
      type: 'text',
      content: `**Fargene (Los colores)**

| Spansk | Norsk | Hankjønn (m) | Hunkjønn (f) |
|--------|-------|--------------|--------------|
| rojo | rød | rojo | roja |
| azul | blå | azul | azul |
| verde | grønn | verde | verde |
| amarillo | gul | amarillo | amarilla |
| blanco | hvit | blanco | blanca |
| negro | svart | negro | negra |
| marrón | brun | marrón | marrón |
| gris | grå | gris | gris |
| rosa | rosa | rosa | rosa |
| naranja | oransje | naranja | naranja |
| morado | lilla | morado | morada |

Legg merke til at noen farger endrer form (-o/-a), mens andre er uforanderlige.`,
    },

    // --- Definisjon: Kjønnsbøyning av farger ---
    {
      id: 'spansk-1-2-3-def-1',
      type: 'definition',
      title: 'Kjønnsbøyning av farger',
      content: `Farger som er adjektiver bøyes etter kjønnet til substantivet de beskriver:\n\n**Farger som endrer form (ender på -o/-a):**\n- rojo → roj**a** (rød)\n- amarillo → amarill**a** (gul)\n- blanco → blanc**a** (hvit)\n- negro → negr**a** (svart)\n- morado → morad**a** (lilla)\n\n**Farger som IKKE endrer form:**\n- **azul** (blå) — lik for begge kjønn\n- **verde** (grønn) — lik for begge kjønn\n- **marrón** (brun) — lik for begge kjønn\n- **gris** (grå) — lik for begge kjønn\n- **rosa** (rosa) — lik for begge kjønn\n- **naranja** (oransje) — lik for begge kjønn\n\n**Huskeregel:** Farger som ender på **-o** i hankjønn endrer til **-a** i hunkjønn. Alle andre farger er uforanderlige.`,
    },

    // --- Eksempel 1 ---
    {
      id: 'spansk-1-2-3-ex-1-example',
      type: 'example',
      title: 'Beskrive ting med farger',
      problem: 'Hvordan sier du «Den røde bilen» og «Det røde huset» på spansk?',
      solution: `**El coche rojo.** (Den røde bilen.) — Hankjønn → rojo\n**La casa roja.** (Det røde huset.) — Hunkjønn → roja\n\nPå spansk kommer fargen **etter** substantivet, ikke foran slik som på norsk. Og fargen bøyes etter kjønnet til substantivet: **el coche** er hankjønn, så vi bruker **rojo**. **La casa** er hunkjønn, så vi bruker **roja**.`,
    },

    // --- Oppgave 1 ---
    {
      id: 'spansk-1-2-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-2-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett fargene til spansk:',
        subTasks: [
          { label: 'a', task: 'rød', solution: 'rojo/roja' },
          { label: 'b', task: 'blå', solution: 'azul' },
          { label: 'c', task: 'grønn', solution: 'verde' },
          { label: 'd', task: 'svart', solution: 'negro/negra' },
        ],
        solution: 'a) rojo/roja\nb) azul\nc) verde\nd) negro/negra',
        hints: ['Se tabellen med farger (Los colores)'],
      },
    },

    // --- Mer teori: Farger i setninger ---
    {
      id: 'spansk-1-2-3-text-2',
      type: 'text',
      content: `**Farger i setninger**

Farger brukes som adjektiver og plasseres **etter** substantivet. Med verbet **ser** (å være) beskriver vi fargen til noe:

| Spansk | Norsk |
|--------|-------|
| El coche es rojo. | Bilen er rød. |
| La casa es blanca. | Huset er hvitt. |
| El cielo es azul. | Himmelen er blå. |
| La hierba es verde. | Gresset er grønt. |
| El gato es negro. | Katten er svart. |
| La flor es amarilla. | Blomsten er gul. |

**Nyttige substantiver:**
- el coche (bilen), la casa (huset), el cielo (himmelen)
- la hierba (gresset), el gato (katten), la flor (blomsten)
- el libro (boken), la mesa (bordet), el bolígrafo (pennen)
- la puerta (døren), el sol (solen), la nieve (snøen)`,
    },

    // --- Eksempel 2 ---
    {
      id: 'spansk-1-2-3-ex-2-example',
      type: 'example',
      title: 'Uforanderlige farger',
      problem: 'Beskriv en grønn bok og et grønt bord på spansk.',
      solution: `**El libro verde.** (Den grønne boken.)\n**La mesa verde.** (Det grønne bordet.)\n\nFargen **verde** endrer seg ikke, uansett om substantivet er hankjønn (**el libro**) eller hunkjønn (**la mesa**). Det er bare farger som ender på **-o** som endrer form.`,
    },

    // --- Oppgave 2 ---
    {
      id: 'spansk-1-2-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-2-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av fargen i parentes:',
        subTasks: [
          { label: 'a', task: 'La puerta es ___ (blanco).', solution: 'blanca' },
          { label: 'b', task: 'El coche es ___ (azul).', solution: 'azul' },
          { label: 'c', task: 'La flor es ___ (amarillo).', solution: 'amarilla' },
          { label: 'd', task: 'El gato es ___ (gris).', solution: 'gris' },
        ],
        solution: 'a) blanca\nb) azul\nc) amarilla\nd) gris',
        hints: ['Sjekk om substantivet er hankjønn (el) eller hunkjønn (la)', 'Farger på -o endrer til -a i hunkjønn, andre endrer seg ikke'],
      },
    },

    // --- Tips ---
    {
      id: 'spansk-1-2-3-tip-1',
      type: 'tip',
      content: `For å huske fargene, se deg rundt i rommet og beskriv ting du ser på spansk! «La pared es blanca» (veggen er hvit), «el bolígrafo es azul» (pennen er blå). Jo mer du kobler fargene til ekte gjenstander, jo raskere lærer du dem.`,
    },

    // --- Eksempel 3 ---
    {
      id: 'spansk-1-2-3-ex-3-example',
      type: 'example',
      title: 'Favoritfarge',
      problem: 'Hvordan sier du hva som er favorittfargen din?',
      solution: `— ¿Cuál es tu color favorito?\n— Mi color favorito es el azul.\n\n**¿Cuál es tu color favorito?** betyr «Hva er favorittfargen din?» Når vi svarer, bruker vi bestemt artikkel foran fargen: **el azul**, **el rojo**, **el verde**, osv.`,
    },

    // --- Oppgave 3 ---
    {
      id: 'spansk-1-2-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-2-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett setningene til spansk:',
        subTasks: [
          { label: 'a', task: 'Bilen er svart.', solution: 'El coche es negro.' },
          { label: 'b', task: 'Døren er brun.', solution: 'La puerta es marrón.' },
          { label: 'c', task: 'Solen er gul.', solution: 'El sol es amarillo.' },
          { label: 'd', task: 'Snøen er hvit.', solution: 'La nieve es blanca.' },
        ],
        solution: 'a) El coche es negro.\nb) La puerta es marrón.\nc) El sol es amarillo.\nd) La nieve es blanca.',
        hints: ['Bruk «es» (er) mellom substantivet og fargen', 'Husk kjønnsbøyning for farger som ender på -o'],
      },
    },

    // --- Oppgave 4 ---
    {
      id: 'spansk-1-2-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-2-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv ting med farger. Skriv hele setninger på spansk:',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv tre ting i klasserommet med farger.',
            solution: 'For eksempel: La pizarra es negra. El libro es rojo. La mesa es marrón.',
          },
          {
            label: 'b',
            task: 'Si hva favorittfargen din er på spansk.',
            solution: 'For eksempel: Mi color favorito es el verde.',
          },
          {
            label: 'c',
            task: 'Beskriv det norske flagget med farger.',
            solution: 'La bandera de Noruega es roja, blanca y azul.',
          },
          {
            label: 'd',
            task: 'Beskriv det spanske flagget med farger.',
            solution: 'La bandera de España es roja y amarilla.',
          },
        ],
        solution: 'a) For eksempel: La pizarra es negra. El libro es rojo. La mesa es marrón.\nb) For eksempel: Mi color favorito es el verde.\nc) La bandera de Noruega es roja, blanca y azul.\nd) La bandera de España es roja y amarilla.',
        hints: [
          'Bruk «es» for å si hva noe er',
          'Husk å bøye fargen etter substantivets kjønn',
          'Bandera (flagg) er hunkjønn → la bandera',
        ],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.4: De compras con números - Handle med tall
// ============================================================================

export const CHAPTER_SPANSK_1_2_4: TextbookChapter = {
  id: 'spansk-1-2-4',
  courseId: 'spansk-1',
  chapterNumber: '2.4',
  title: 'De compras con números - Handle med tall',
  description: 'Lær å handle på spansk med tall, farger og vanlige handleuttrykk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke handleuttrykk på spansk i enkle dialoger',
    'kombinere tall og farger for å beskrive varer',
    'gjennomføre en enkel handlesamtale på spansk',
  ],
  content: [
    // --- Intro ---
    {
      id: 'spansk-1-2-4-intro',
      type: 'text',
      content: `Nå som du kan tall og farger, er det på tide å bruke dem i praksis! Å handle i en butikk er en av de vanligste situasjonene der du trenger språket. I dette kapittelet lærer du de viktigste handleuttrykkene og øver på å kombinere alt du har lært i kapittel 2.`,
    },

    // --- Teori: Handleuttrykk ---
    {
      id: 'spansk-1-2-4-text-1',
      type: 'text',
      content: `**Handleuttrykk (Expresiones de compras)**

| Spansk | Norsk |
|--------|-------|
| ¿Cuánto cuesta? | Hvor mye koster det? |
| ¿Cuánto cuestan? | Hvor mye koster de? (flertall) |
| Cuesta ___ euros. | Det koster ___ euro. |
| Cuestan ___ euros. | De koster ___ euro. |
| ¿Tiene...? | Har du/dere...? |
| Quiero... | Jeg vil ha... |
| Me llevo esto. | Jeg tar denne. |
| ¿Algo más? | Noe mer? |
| Nada más, gracias. | Ikke noe mer, takk. |
| ¿Puedo pagar con tarjeta? | Kan jeg betale med kort? |
| En efectivo | Med kontanter |
| La cuenta, por favor | Regningen, takk |
| Aquí tiene | Vær så god (når man gir noe) |

I Spania brukes **euro (€)** som valuta. Én euro er omtrent 11 norske kroner.`,
    },

    // --- Definisjon: Cuesta vs. Cuestan ---
    {
      id: 'spansk-1-2-4-def-1',
      type: 'definition',
      title: 'Cuesta vs. Cuestan',
      content: `Verbet **costar** (å koste) bøyes etter om du snakker om én ting eller flere:\n\n- **¿Cuánto cuesta?** → én ting (entall)\n  - La camiseta cuesta veinte euros. (T-skjorten koster 20 euro.)\n\n- **¿Cuánto cuestan?** → flere ting (flertall)\n  - Las camisetas cuestan cuarenta euros. (T-skjortene koster 40 euro.)\n\nDette er et **stammeskiftende verb**: o → ue. Stammen endrer seg i de fleste former, men mønsteret er regelmessig. Du trenger foreløpig bare **cuesta** og **cuestan**.`,
    },

    // --- Eksempel 1 ---
    {
      id: 'spansk-1-2-4-ex-1-example',
      type: 'example',
      title: 'Enkel handlesamtale',
      problem: 'Du vil kjøpe en rød t-skjorte i en butikk. Lag en kort dialog.',
      solution: `— Buenos días. ¿Tiene camisetas rojas?\n— Sí, aquí tiene. \n— ¿Cuánto cuesta?\n— Cuesta veinticinco euros.\n— Me llevo esta. Gracias.\n— De nada. ¿Algo más?\n— Nada más, gracias.\n\nHer bruker vi **camisetas rojas** (røde t-skjorter, hunkjønn flertall) fordi vi spør om de har dem. Prisen oppgis med **cuesta** (entall) fordi vi kjøper én.`,
    },

    // --- Oppgave 1 ---
    {
      id: 'spansk-1-2-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-2-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til spansk:',
        subTasks: [
          { label: 'a', task: 'Hvor mye koster det?', solution: '¿Cuánto cuesta?' },
          { label: 'b', task: 'Det koster 15 euro.', solution: 'Cuesta quince euros.' },
          { label: 'c', task: 'Jeg tar denne.', solution: 'Me llevo esto.' },
          { label: 'd', task: 'Kan jeg betale med kort?', solution: '¿Puedo pagar con tarjeta?' },
        ],
        solution: 'a) ¿Cuánto cuesta?\nb) Cuesta quince euros.\nc) Me llevo esto.\nd) ¿Puedo pagar con tarjeta?',
        hints: ['Se tabellen med handleuttrykk (Expresiones de compras)'],
      },
    },

    // --- Mer teori: Klær og varer ---
    {
      id: 'spansk-1-2-4-text-2',
      type: 'text',
      content: `**Vanlige klær og varer (Ropa y artículos)**

| Spansk | Norsk | Kjønn |
|--------|-------|-------|
| la camiseta | t-skjorten | f |
| la chaqueta | jakken | f |
| los pantalones | buksene | m (flertall) |
| los zapatos | skoene | m (flertall) |
| el vestido | kjolen | m |
| la falda | skjørtet | f |
| el bolso | vesken | m |
| las gafas de sol | solbrillene | f (flertall) |
| el libro | boken | m |
| el bolígrafo | pennen | m |
| el cuaderno | skriveboken | m |
| la mochila | ryggsekken | f |

Når du beskriver en vare med farge, husk at fargen kommer **etter** substantivet og bøyes etter kjønnet:
- **la camiseta roja** (den røde t-skjorten) — hunkjønn → roja
- **el vestido negro** (den svarte kjolen) — hankjønn → negro
- **los zapatos blancos** (de hvite skoene) — hankjønn flertall → blancos`,
    },

    // --- Eksempel 2 ---
    {
      id: 'spansk-1-2-4-ex-2-example',
      type: 'example',
      title: 'Beskrive varer med farge og pris',
      problem: 'Si at de svarte skoene koster 85 euro.',
      solution: `**Los zapatos negros cuestan ochenta y cinco euros.**\n\n- **Los zapatos** — hankjønn flertall → bruker **negros** (flertall av negro)\n- **Cuestan** — flertallsformen av costar fordi det er flere (et par sko)\n- **Ochenta y cinco** — 85`,
    },

    // --- Oppgave 2 ---
    {
      id: 'spansk-1-2-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-2-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beskriv varene med farge og pris. Skriv hele setninger på spansk:',
        subTasks: [
          { label: 'a', task: 'Den blå ryggsekken koster 30 euro.', solution: 'La mochila azul cuesta treinta euros.' },
          { label: 'b', task: 'Den hvite kjolen koster 55 euro.', solution: 'El vestido blanco cuesta cincuenta y cinco euros.' },
          { label: 'c', task: 'De grå buksene koster 42 euro.', solution: 'Los pantalones grises cuestan cuarenta y dos euros.' },
          { label: 'd', task: 'Den grønne jakken koster 78 euro.', solution: 'La chaqueta verde cuesta setenta y ocho euros.' },
        ],
        solution: 'a) La mochila azul cuesta treinta euros.\nb) El vestido blanco cuesta cincuenta y cinco euros.\nc) Los pantalones grises cuestan cuarenta y dos euros.\nd) La chaqueta verde cuesta setenta y ocho euros.',
        hints: ['Husk at fargen kommer etter substantivet', 'Bruk cuesta for entall, cuestan for flertall'],
      },
    },

    // --- Tips ---
    {
      id: 'spansk-1-2-4-tip-1',
      type: 'tip',
      content: `I Spania er det vanlig å prute på markeder (**mercados**), men ikke i vanlige butikker. Nyttige uttrykk for markedet: **¿Me hace un descuento?** (Kan du gi meg rabatt?) og **Es muy caro** (Det er veldig dyrt). Prøv å øve på handledialoger med en venn — det er den beste måten å bli trygg på!`,
    },

    // --- Eksempel 3 ---
    {
      id: 'spansk-1-2-4-ex-3-example',
      type: 'example',
      title: 'Fullstendig handlesamtale',
      problem: 'Du er i en klesbutikk i Madrid. Du vil kjøpe en hvit t-skjorte og svarte bukser. Lag en fullstendig dialog.',
      solution: `— Buenos días.\n— Buenos días. ¿Puedo ayudarte?\n— Sí, quiero una camiseta blanca y unos pantalones negros.\n— Aquí tiene. La camiseta cuesta dieciocho euros y los pantalones cuestan cuarenta y cinco euros.\n— Muy bien. Me llevo los dos.\n— Son sesenta y tres euros en total.\n— ¿Puedo pagar con tarjeta?\n— Sí, claro. Aquí tiene.\n— Muchas gracias. Adiós.\n— Adiós, ¡hasta luego!\n\nLegg merke til:\n- **¿Puedo ayudarte?** = Kan jeg hjelpe deg?\n- **Una camiseta blanca** = en hvit t-skjorte (hunkjønn → blanca)\n- **Unos pantalones negros** = noen svarte bukser (hankjønn flertall → negros)\n- **Son 63 euros en total** = det blir 63 euro totalt`,
    },

    // --- Oppgave 3 ---
    {
      id: 'spansk-1-2-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-2-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Svar på spansk i disse handlesituasjonene:',
        subTasks: [
          { label: 'a', task: 'Ekspeditøren spør «¿Algo más?». Du trenger ikke noe mer.', solution: 'Nada más, gracias.' },
          { label: 'b', task: 'Du vil vite hva de røde skoene koster.', solution: '¿Cuánto cuestan los zapatos rojos?' },
          { label: 'c', task: 'Skoene koster 90 euro. Si prisen.', solution: 'Cuestan noventa euros.' },
          { label: 'd', task: 'Du bestemmer deg for å kjøpe skoene.', solution: 'Me llevo los zapatos. / Me los llevo.' },
        ],
        solution: 'a) Nada más, gracias.\nb) ¿Cuánto cuestan los zapatos rojos?\nc) Cuestan noventa euros.\nd) Me llevo los zapatos.',
        hints: ['Bruk cuestan (flertall) for sko fordi de kommer i par', 'Husk kjønnsbøyning: zapatos rojos (hankjønn flertall)'],
      },
    },

    // --- Oppgave 4 ---
    {
      id: 'spansk-1-2-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-2-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en handlesamtale på spansk. Dialogen skal inneholde: hilsen, spørre om pris, farge på vare, betaling og avskjed.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv en dialog der du kjøper en blå ryggsekk som koster 27 euro.',
            solution: '— Buenos días. ¿Tiene mochilas azules?\n— Sí, aquí tiene.\n— ¿Cuánto cuesta?\n— Cuesta veintisiete euros.\n— Me llevo esta. ¿Puedo pagar con tarjeta?\n— Sí, claro.\n— Muchas gracias. Adiós.\n— Adiós, ¡hasta luego!',
          },
          {
            label: 'b',
            task: 'Du handler og kjøper tre ting: en grønn bok (12 euro), en hvit penn (3 euro) og en rød veske (36 euro). Regn ut totalen og skriv hva du sier til kassereren.',
            solution: 'Quiero un libro verde, un bolígrafo blanco y un bolso rojo. ¿Cuánto es en total? Son cincuenta y uno euros en total. (12 + 3 + 36 = 51)',
          },
          {
            label: 'c',
            task: 'Du synes prisen er høy. Spør om de har noe billigere.',
            solution: 'Es muy caro. ¿Tiene algo más barato?',
          },
          {
            label: 'd',
            task: 'Skriv en handleliste med 4 varer, der du oppgir farge og pris for hver vare.',
            solution: 'For eksempel:\n1. Una camiseta roja — dieciocho euros\n2. Unos pantalones azules — cuarenta y cinco euros\n3. Una mochila negra — treinta euros\n4. Unas gafas de sol — veinticinco euros',
          },
        ],
        solution: 'a) — Buenos días. ¿Tiene mochilas azules?\n— Sí, aquí tiene.\n— ¿Cuánto cuesta?\n— Cuesta veintisiete euros.\n— Me llevo esta. ¿Puedo pagar con tarjeta?\n— Sí, claro.\n— Muchas gracias. Adiós.\n— Adiós, ¡hasta luego!\n\nb) Quiero un libro verde, un bolígrafo blanco y un bolso rojo. Son cincuenta y uno euros en total.\n\nc) Es muy caro. ¿Tiene algo más barato?\n\nd) For eksempel:\n1. Una camiseta roja — dieciocho euros\n2. Unos pantalones azules — cuarenta y cinco euros\n3. Una mochila negra — treinta euros\n4. Unas gafas de sol — veinticinco euros',
        hints: [
          'Bruk handleuttrykkene fra tabellen',
          'Husk kjønnsbøyning av farger etter substantivet',
          'Bruk cuesta for entall, cuestan for flertall',
        ],
      },
    },
  ],
  exercises: [],
};
// ============================================================================
// KAPITTEL 3: MI FAMILIA (MIN FAMILIE)
// ============================================================================

// ----------------------------------------------------------------------------
// 3.1 La familia - Familien
// ----------------------------------------------------------------------------

export const CHAPTER_SPANSK_1_3_1: TextbookChapter = {
  id: 'spansk-1-3-1',
  courseId: 'spansk-1',
  chapterNumber: '3.1',
  title: 'La familia - Familien',
  description: 'Lær ordforråd for familiemedlemmer og lag enkle setninger om familien din.',
  estimatedMinutes: 40,
  competenceGoals: [
    'navngi nære familiemedlemmer på spansk',
    'bruke familieordforråd i enkle setninger',
    'fortelle om familiens sammensetning',
  ],
  content: [
    // --- Intro ---
    {
      id: 'spansk-1-3-1-intro',
      type: 'text',
      content: `Familien er et sentralt tema i spansk kultur. Familiebånd er sterke i spansktalende land, og det er vanlig å bo nær familien hele livet. I dette kapittelet lærer du navnene på familiemedlemmer og hvordan du snakker om familien din på spansk.`,
    },

    // --- Teori: Familiemedlemmer ---
    {
      id: 'spansk-1-3-1-text-1',
      type: 'text',
      content: `**Familiemedlemmer (Los miembros de la familia)**

| Spansk (hankjønn) | Spansk (hunkjønn) | Norsk |
|--------------------|---------------------|-------|
| el padre | la madre | far / mor |
| el hermano | la hermana | bror / søster |
| el abuelo | la abuela | bestefar / bestemor |
| el tío | la tía | onkel / tante |
| el primo | la prima | fetter / kusine |
| el hijo | la hija | sønn / datter |
| el sobrino | la sobrina | nevø / niese |

Legg merke til at hankjønnsformen vanligvis ender på **-o** og hunkjønnsformen på **-a**. Dette er et viktig mønster i spansk.`,
    },

    // --- Definisjon: Flertallsformer ---
    {
      id: 'spansk-1-3-1-def-1',
      type: 'definition',
      title: 'Flertall og samlebetegnelser',
      content: `Når vi snakker om begge kjønn sammen, bruker vi hankjønns flertallsform som samlebetegnelse:\n\n- **los padres** = foreldrene (far og mor)\n- **los hermanos** = søsknene (brødre og søstre)\n- **los abuelos** = besteforeldrene\n- **los tíos** = onkler og tanter\n- **los primos** = fettere og kusiner\n- **los hijos** = barna (sønner og døtre)\n\nDette gjelder generelt i spansk: hankjønns flertall brukes som samlebetegnelse når gruppen inneholder både menn og kvinner.`,
    },

    // --- Eksempel 1 ---
    {
      id: 'spansk-1-3-1-ex-1-example',
      type: 'example',
      title: 'Presentere familiemedlemmer',
      problem: 'Hvordan sier du at moren din heter María og at du har to brødre?',
      solution: `— Mi madre se llama María. Tengo dos hermanos.\n\nHer bruker vi **mi** (min/mitt) foran familiemedlemmet, verbet **llamarse** for å si navnet, og verbet **tener** for å si hvor mange søsken vi har.`,
    },

    // --- Oppgave 1 ---
    {
      id: 'spansk-1-3-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-3-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett følgende familieord til spansk:',
        subTasks: [
          { label: 'a', task: 'mor', solution: 'la madre' },
          { label: 'b', task: 'bestefar', solution: 'el abuelo' },
          { label: 'c', task: 'søster', solution: 'la hermana' },
          { label: 'd', task: 'foreldrene', solution: 'los padres' },
        ],
        solution: 'a) la madre\nb) el abuelo\nc) la hermana\nd) los padres',
        hints: ['Se tabellen med familiemedlemmer', 'Husk å ta med artikkelen (el/la/los/las)'],
      },
    },

    // --- Mer teori: Setninger om familien ---
    {
      id: 'spansk-1-3-1-text-2',
      type: 'text',
      content: `**Snakke om familien (Hablar de la familia)**

For å fortelle om familien din bruker du disse uttrykkene:

| Spansk | Norsk |
|--------|-------|
| Mi madre se llama... | Moren min heter... |
| Mi padre se llama... | Faren min heter... |
| Tengo un hermano / una hermana | Jeg har en bror / en søster |
| Tengo dos hermanos | Jeg har to søsken |
| No tengo hermanos | Jeg har ingen søsken |
| Soy hijo/a único/a | Jeg er enebarn |
| Somos tres hermanos | Vi er tre søsken |

**Nyttige tall for familien:**
uno (1), dos (2), tres (3), cuatro (4), cinco (5), seis (6)`,
    },

    // --- Eksempel 2 ---
    {
      id: 'spansk-1-3-1-ex-2-example',
      type: 'example',
      title: 'Fortelle om familien',
      problem: 'Lag setninger som beskriver en familie med en far (Pedro), en mor (Ana), og tre barn.',
      solution: `— Mi padre se llama Pedro. Mi madre se llama Ana. Somos tres hermanos. Tengo un hermano y una hermana.\n\nHer kombinerer vi flere setninger for å gi et bilde av hele familien. **Y** betyr «og».`,
    },

    // --- Oppgave 2 ---
    {
      id: 'spansk-1-3-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-3-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til spansk:',
        subTasks: [
          { label: 'a', task: 'Faren min heter Carlos.', solution: 'Mi padre se llama Carlos.' },
          { label: 'b', task: 'Jeg har en søster.', solution: 'Tengo una hermana.' },
          { label: 'c', task: 'Bestemoren min heter Rosa.', solution: 'Mi abuela se llama Rosa.' },
          { label: 'd', task: 'Jeg har ingen søsken.', solution: 'No tengo hermanos.' },
        ],
        solution: 'a) Mi padre se llama Carlos.\nb) Tengo una hermana.\nc) Mi abuela se llama Rosa.\nd) No tengo hermanos.',
        hints: ['Bruk «mi» foran familiemedlemmet', 'Bruk «tener» for å si hva du har'],
      },
    },

    // --- Tips ---
    {
      id: 'spansk-1-3-1-tip-1',
      type: 'tip',
      content: `I mange spansktalende land er familiebegrepet bredere enn i Norge. **La familia** kan inkludere besteforeldre, onkler, tanter og fettere/kusiner som bor i nærheten. Det er vanlig å samles til store familiemiddager, spesielt på søndager og helligdager.`,
    },

    // --- Teori: Utvidet familie ---
    {
      id: 'spansk-1-3-1-text-3',
      type: 'text',
      content: `**Utvidet familie (La familia extendida)**

| Spansk | Norsk |
|--------|-------|
| el marido / el esposo | ektemannen |
| la mujer / la esposa | kona |
| el suegro / la suegra | svigerfar / svigermor |
| el cuñado / la cuñada | svoger / svigerinne |
| el nieto / la nieta | barnebarn (gutt / jente) |
| el bebé | babyen |
| la mascota | kjæledyret |

**Spørre om familien:**
— ¿Tienes hermanos? (Har du søsken?)
— ¿Cuántos hermanos tienes? (Hvor mange søsken har du?)`,
    },

    // --- Eksempel 3 ---
    {
      id: 'spansk-1-3-1-ex-3-example',
      type: 'example',
      title: 'Dialog om familien',
      problem: 'Skriv en kort dialog der to venner snakker om familiene sine.',
      solution: `— ¿Tienes hermanos?\n— Sí, tengo un hermano y dos hermanas. ¿Y tú?\n— No tengo hermanos. Soy hijo único.\n— ¿Cómo se llama tu madre?\n— Mi madre se llama Elena.\n\nHer ser vi vanlige spørsmål og svar om familien. **Sí** betyr «ja» og **no** betyr «nei».`,
    },

    // --- Oppgave 3 ---
    {
      id: 'spansk-1-3-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-3-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Svar på spansk med fullstendige setninger:',
        subTasks: [
          { label: 'a', task: '¿Tienes hermanos? (Du har en bror og en søster)', solution: 'Sí, tengo un hermano y una hermana.' },
          { label: 'b', task: '¿Cómo se llama tu padre? (Faren din heter Erik)', solution: 'Mi padre se llama Erik.' },
          { label: 'c', task: '¿Cuántos primos tienes? (Du har fire fettere/kusiner)', solution: 'Tengo cuatro primos.' },
        ],
        solution: 'a) Sí, tengo un hermano y una hermana.\nb) Mi padre se llama Erik.\nc) Tengo cuatro primos.',
        hints: ['Svar i fullstendige setninger', 'Bruk tener for å uttrykke hva du har'],
      },
    },

    // --- Oppgave 4 ---
    {
      id: 'spansk-1-3-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-3-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv 4-5 setninger om din egen familie på spansk. Inkluder foreldrenes navn, antall søsken, og besteforeldrene.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv om familien din. Bruk: mi padre/madre se llama..., tengo... hermanos, mi abuelo/abuela se llama...',
            solution: 'Mi padre se llama Ola. Mi madre se llama Kari. Tengo un hermano. Mi hermano se llama Lars. Mi abuela se llama Astrid.',
          },
          {
            label: 'b',
            task: 'Skriv en kort dialog der noen spør deg om familien din, og du svarer.',
            solution: '— ¿Tienes hermanos?\n— Sí, tengo un hermano. Se llama Lars.\n— ¿Cómo se llama tu madre?\n— Mi madre se llama Kari.\n— ¿Y tu padre?\n— Mi padre se llama Ola.',
          },
        ],
        solution: 'a) Mi padre se llama Ola. Mi madre se llama Kari. Tengo un hermano. Mi hermano se llama Lars. Mi abuela se llama Astrid.\n\nb) — ¿Tienes hermanos?\n— Sí, tengo un hermano. Se llama Lars.\n— ¿Cómo se llama tu madre?\n— Mi madre se llama Kari.\n— ¿Y tu padre?\n— Mi padre se llama Ola.',
        hints: [
          'Bruk mi + familiemedlem + se llama + navn',
          'Bruk tener for å si hvor mange søsken du har',
        ],
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 3.2 Los posesivos - Eiendomsord
// ----------------------------------------------------------------------------

export const CHAPTER_SPANSK_1_3_2: TextbookChapter = {
  id: 'spansk-1-3-2',
  courseId: 'spansk-1',
  chapterNumber: '3.2',
  title: 'Los posesivos - Eiendomsord',
  description: 'Lær eiendomsordene på spansk og hvordan de samsvarsbøyes i tall og kjønn.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke eiendomsord (mi, tu, su, nuestro) korrekt',
    'samsvarsbøye eiendomsord i tall og kjønn',
    'kombinere eiendomsord med familieordforråd',
  ],
  content: [
    // --- Intro ---
    {
      id: 'spansk-1-3-2-intro',
      type: 'text',
      content: `Eiendomsord brukes for å vise hvem noe tilhører: «min», «din», «hans/hennes», «vår». På spansk må eiendomsordene samsvarsbøyes med substantivet de står til. I dette kapittelet lærer du å bruke de vanligste eiendomsordene.`,
    },

    // --- Teori: Eiendomsord ---
    {
      id: 'spansk-1-3-2-text-1',
      type: 'text',
      content: `**Eiendomsord (Los posesivos)**

| Person | Entall | Flertall | Norsk |
|--------|--------|----------|-------|
| yo | mi | mis | min/mitt/mine |
| tú | tu | tus | din/ditt/dine |
| él/ella/usted | su | sus | hans/hennes/Deres |
| nosotros/as | nuestro/nuestra | nuestros/nuestras | vår/vårt/våre |
| ellos/ellas/ustedes | su | sus | deres |

**Viktig:** De fleste eiendomsordene (mi, tu, su) endrer seg bare i **tall** (entall/flertall). Men **nuestro** endrer seg i både **tall og kjønn**.`,
    },

    // --- Definisjon: Samsvar med substantivet ---
    {
      id: 'spansk-1-3-2-def-1',
      type: 'definition',
      title: 'Samsvar med substantivet',
      content: `Eiendomsordene samsvarsbøyes med **substantivet de står til**, IKKE med eieren.\n\n- **mi padre** (min far) — entall\n- **mis padres** (mine foreldre) — flertall\n- **mi madre** (min mor) — entall (mi endres ikke etter kjønn)\n- **mis hermanas** (mine søstre) — flertall\n\nFor **nuestro** må du tenke på både tall og kjønn:\n- **nuestro padre** (vår far) — hankjønn entall\n- **nuestra madre** (vår mor) — hunkjønn entall\n- **nuestros hermanos** (våre brødre) — hankjønn flertall\n- **nuestras hermanas** (våre søstre) — hunkjønn flertall`,
    },

    // --- Eksempel 1 ---
    {
      id: 'spansk-1-3-2-ex-1-example',
      type: 'example',
      title: 'Bruke mi og mis',
      problem: 'Fyll inn riktig eiendomsord: ___ madre, ___ hermanos, ___ abuelo.',
      solution: `— **Mi** madre (min mor) — entall\n— **Mis** hermanos (mine søsken) — flertall\n— **Mi** abuelo (min bestefar) — entall\n\nRegelen er enkel: bruk **mi** foran entall og **mis** foran flertall. Kjønnet på substantivet spiller ingen rolle for mi/mis.`,
    },

    // --- Oppgave 1 ---
    {
      id: 'spansk-1-3-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-3-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av eiendomsordet (mi/mis, tu/tus):',
        subTasks: [
          { label: 'a', task: '___ padre (min far)', solution: 'mi padre' },
          { label: 'b', task: '___ hermanas (mine søstre)', solution: 'mis hermanas' },
          { label: 'c', task: '___ abuelos (dine besteforeldre)', solution: 'tus abuelos' },
          { label: 'd', task: '___ madre (din mor)', solution: 'tu madre' },
        ],
        solution: 'a) mi padre\nb) mis hermanas\nc) tus abuelos\nd) tu madre',
        hints: ['Entall: mi/tu, flertall: mis/tus', 'Se om substantivet er entall eller flertall'],
      },
    },

    // --- Mer teori: Su/sus og nuestro ---
    {
      id: 'spansk-1-3-2-text-2',
      type: 'text',
      content: `**Su/sus — hans, hennes, Deres, deres**

Eiendomsordet **su/sus** kan bety mange ting, avhengig av sammenhengen:

| Spansk | Mulige betydninger |
|--------|-------------------|
| su padre | hans far / hennes far / Deres far / deres far |
| sus hermanos | hans søsken / hennes søsken / Deres søsken / deres søsken |

Sammenhengen avgjør hvilken betydning som er riktig. Hvis det er uklart, kan man presisere:
— el padre **de él** (hans far)
— el padre **de ella** (hennes far)

**Nuestro/nuestra — vår/vårt**

| Form | Eksempel | Norsk |
|------|----------|-------|
| nuestro | nuestro padre | vår far |
| nuestra | nuestra madre | vår mor |
| nuestros | nuestros abuelos | våre besteforeldre |
| nuestras | nuestras hermanas | våre søstre |`,
    },

    // --- Eksempel 2 ---
    {
      id: 'spansk-1-3-2-ex-2-example',
      type: 'example',
      title: 'Bruke su og nuestro',
      problem: 'Oversett: «Hennes mor heter Carmen. Vår bestemor heter Pilar.»',
      solution: `— Su madre se llama Carmen. Nuestra abuela se llama Pilar.\n\n**Su** brukes fordi «madre» er entall. **Nuestra** brukes fordi «abuela» er hunkjønn entall, og nuestro må samsvarsbøyes i kjønn.`,
    },

    // --- Oppgave 2 ---
    {
      id: 'spansk-1-3-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-3-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig form av eiendomsordet:',
        subTasks: [
          { label: 'a', task: '___ casa es grande. (Vårt hus er stort)', solution: 'Nuestra casa es grande.' },
          { label: 'b', task: '___ hermano se llama Luis. (Hans bror heter Luis)', solution: 'Su hermano se llama Luis.' },
          { label: 'c', task: '___ primos viven en Madrid. (Våre fettere bor i Madrid)', solution: 'Nuestros primos viven en Madrid.' },
          { label: 'd', task: '___ hijas son simpáticas. (Hennes døtre er hyggelige)', solution: 'Sus hijas son simpáticas.' },
        ],
        solution: 'a) Nuestra casa es grande.\nb) Su hermano se llama Luis.\nc) Nuestros primos viven en Madrid.\nd) Sus hijas son simpáticas.',
        hints: ['Nuestro/a bøyes i kjønn og tall', 'Su = entall, sus = flertall'],
      },
    },

    // --- Tips ---
    {
      id: 'spansk-1-3-2-tip-1',
      type: 'tip',
      content: `**Husk forskjellen mellom «tu» og «tú»!** Uten aksent er **tu** et eiendomsord som betyr «din/ditt». Med aksent er **tú** et personlig pronomen som betyr «du». For eksempel: **Tú** tienes **tu** libro. (Du har boka di.)`,
    },

    // --- Teori: Eiendomsord med familien ---
    {
      id: 'spansk-1-3-2-text-3',
      type: 'text',
      content: `**Eiendomsord i praksis: Min familie**

La oss se hvordan vi bruker eiendomsordene i setninger om familien:

| Spansk | Norsk |
|--------|-------|
| Mi padre es profesor. | Faren min er lærer. |
| Mis hermanos son altos. | Søsknene mine er høye. |
| Tu madre es simpática. | Moren din er hyggelig. |
| Su abuela vive en Barcelona. | Bestemoren hennes bor i Barcelona. |
| Nuestra casa es grande. | Huset vårt er stort. |
| Nuestros primos vienen mañana. | Fetterne våre kommer i morgen. |

**Merk:** På spansk sier vi **mi padre** (min far), aldri **el mi padre**. Eiendomsordet erstatter artikkelen.`,
    },

    // --- Eksempel 3 ---
    {
      id: 'spansk-1-3-2-ex-3-example',
      type: 'example',
      title: 'Beskrive familien med eiendomsord',
      problem: 'Skriv tre setninger om en familie der du bruker mi, su og nuestro.',
      solution: `— Mi padre se llama Jorge. Su hermano es mi tío Raúl. Nuestra abuela vive con nosotros.\n\n(Min far heter Jorge. Hans bror er onkelen min Raúl. Bestemoren vår bor hos oss.)\n\nHer bruker vi tre ulike eiendomsord i naturlige setninger om familien.`,
    },

    // --- Oppgave 3 ---
    {
      id: 'spansk-1-3-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-3-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk:',
        subTasks: [
          { label: 'a', task: 'Min bror heter Pablo.', solution: 'Mi hermano se llama Pablo.' },
          { label: 'b', task: 'Våre foreldre er hyggelige.', solution: 'Nuestros padres son simpáticos.' },
          { label: 'c', task: 'Hennes søstre bor i Spania.', solution: 'Sus hermanas viven en España.' },
          { label: 'd', task: 'Din bestemor er snill.', solution: 'Tu abuela es amable.' },
        ],
        solution: 'a) Mi hermano se llama Pablo.\nb) Nuestros padres son simpáticos.\nc) Sus hermanas viven en España.\nd) Tu abuela es amable.',
        hints: ['Velg riktig eiendomsord basert på eier og substantivets tall/kjønn'],
      },
    },

    // --- Oppgave 4 ---
    {
      id: 'spansk-1-3-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-3-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort tekst (4-6 setninger) om en familie. Bruk minst tre ulike eiendomsord (mi, tu, su, nuestro).',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv om din egen familie. Bruk mi/mis og nuestro/nuestra.',
            solution: 'Mi familia es grande. Mi padre se llama Erik y mi madre se llama Ingrid. Mis hermanos son divertidos. Nuestra casa es pequeña. Nuestra abuela vive cerca.',
          },
          {
            label: 'b',
            task: 'Skriv om en venns familie. Bruk su/sus.',
            solution: 'Mi amigo se llama Pablo. Su padre es profesor. Su madre es doctora. Sus hermanos son simpáticos. Su familia vive en Oslo.',
          },
        ],
        solution: 'a) Mi familia es grande. Mi padre se llama Erik y mi madre se llama Ingrid. Mis hermanos son divertidos. Nuestra casa es pequeña. Nuestra abuela vive cerca.\n\nb) Mi amigo se llama Pablo. Su padre es profesor. Su madre es doctora. Sus hermanos son simpáticos. Su familia vive en Oslo.',
        hints: [
          'Varier mellom ulike eiendomsord',
          'Husk at nuestro/a bøyes i kjønn etter substantivet',
        ],
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 3.3 Describir personas - Beskrive personer
// ----------------------------------------------------------------------------

export const CHAPTER_SPANSK_1_3_3: TextbookChapter = {
  id: 'spansk-1-3-3',
  courseId: 'spansk-1',
  chapterNumber: '3.3',
  title: 'Describir personas - Beskrive personer',
  description: 'Lær adjektiver for utseende og personlighet, og beskriv mennesker med verbet ser.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive personers utseende og personlighet på spansk',
    'bruke verbet ser med adjektiver',
    'samsvarsbøye adjektiver i kjønn og tall',
  ],
  content: [
    // --- Intro ---
    {
      id: 'spansk-1-3-3-intro',
      type: 'text',
      content: `For å kunne snakke om familien og venner trenger du adjektiver som beskriver hvordan folk ser ut og hvordan de er. I dette kapittelet lærer du vanlige adjektiver for utseende og personlighet, og hvordan du samsvarsbøyer dem.`,
    },

    // --- Teori: Utseende ---
    {
      id: 'spansk-1-3-3-text-1',
      type: 'text',
      content: `**Utseende (El aspecto físico)**

| Hankjønn | Hunkjønn | Norsk |
|-----------|-----------|-------|
| alto | alta | høy |
| bajo | baja | lav |
| delgado | delgada | tynn/slank |
| gordo | gorda | tykk |
| rubio | rubia | blond |
| moreno | morena | mørkhåret |
| pelirrojo | pelirroja | rødhåret |
| guapo | guapa | kjekk/pen |
| joven | joven | ung |
| viejo | vieja | gammel |
| grande | grande | stor |
| pequeño | pequeña | liten |

**Merk:** Adjektiver som ender på **-o** endrer seg til **-a** i hunkjønn. Adjektiver som ender på **-e** (som *joven*, *grande*) har **samme form** for begge kjønn.`,
    },

    // --- Definisjon: Adjektivsamsvar ---
    {
      id: 'spansk-1-3-3-def-1',
      type: 'definition',
      title: 'Adjektivsamsvar (Concordancia)',
      content: `På spansk må adjektiver samsvare med substantivet i **kjønn** og **tall**:\n\n**Kjønn:**\n- Hankjønn: -o → Mi padre es **alto**.\n- Hunkjønn: -a → Mi madre es **alta**.\n\n**Tall:**\n- Entall: alto/alta\n- Flertall: altos/altas\n\n**Regler for flertall:**\n- Ender på vokal → legg til **-s**: alto → altos\n- Ender på konsonant → legg til **-es**: joven → jóvenes\n\n**Eksempler:**\n- Mi hermano es **alto**. (en bror, hankjønn)\n- Mis hermanas son **altas**. (søstre, hunkjønn flertall)\n- Mis padres son **jóvenes**. (foreldre, flertall)`,
    },

    // --- Eksempel 1 ---
    {
      id: 'spansk-1-3-3-ex-1-example',
      type: 'example',
      title: 'Beskrive utseende',
      problem: 'Beskriv en høy, blond mor og en lav, mørkhåret far.',
      solution: `— Mi madre es alta y rubia. Mi padre es bajo y moreno.\n\nHer bruker vi **alta** og **rubia** (hunkjønn) for mor, og **bajo** og **moreno** (hankjønn) for far. Bindordet **y** (og) brukes for å koble sammen to adjektiver.`,
    },

    // --- Oppgave 1 ---
    {
      id: 'spansk-1-3-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-3-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Velg riktig form av adjektivet:',
        subTasks: [
          { label: 'a', task: 'Mi madre es ___ (alto/alta)', solution: 'alta' },
          { label: 'b', task: 'Mi padre es ___ (rubio/rubia)', solution: 'rubio' },
          { label: 'c', task: 'Mis hermanas son ___ (delgado/delgadas)', solution: 'delgadas' },
          { label: 'd', task: 'Mi abuela es ___ (viejo/vieja)', solution: 'vieja' },
        ],
        solution: 'a) alta\nb) rubio\nc) delgadas\nd) vieja',
        hints: ['Adjektivet må samsvare med substantivet i kjønn og tall', '-o for hankjønn, -a for hunkjønn'],
      },
    },

    // --- Mer teori: Personlighet ---
    {
      id: 'spansk-1-3-3-text-2',
      type: 'text',
      content: `**Personlighet (La personalidad)**

| Hankjønn | Hunkjønn | Norsk |
|-----------|-----------|-------|
| simpático | simpática | hyggelig/sympatisk |
| antipático | antipática | uhyggelig/usympatisk |
| divertido | divertida | morsom |
| aburrido | aburrida | kjedelig |
| serio | seria | seriøs/alvorlig |
| tímido | tímida | sjenert |
| generoso | generosa | sjenerøs |
| cariñoso | cariñosa | kjærlig/omsorgsfull |

**Adjektiver som ender på -e (felles for begge kjønn):**

| Spansk | Norsk |
|--------|-------|
| inteligente | intelligent |
| amable | vennlig/snill |
| alegre | glad/munter |
| fuerte | sterk |
| responsable | ansvarlig |

Disse har **samme form** for hankjønn og hunkjønn: Mi padre es amable. Mi madre es amable.`,
    },

    // --- Eksempel 2 ---
    {
      id: 'spansk-1-3-3-ex-2-example',
      type: 'example',
      title: 'Beskrive personlighet',
      problem: 'Beskriv en morsom og intelligent søster.',
      solution: `— Mi hermana es divertida e inteligente.\n\n**Merk:** Vi bruker **e** i stedet for **y** (og) foran ord som begynner med **i-** eller **hi-**. Derfor sier vi «divertida **e** inteligente», ikke «divertida y inteligente». Dette er en viktig lyd-regel i spansk.`,
    },

    // --- Oppgave 2 ---
    {
      id: 'spansk-1-3-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-3-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk. Husk adjektivsamsvar!',
        subTasks: [
          { label: 'a', task: 'Moren min er hyggelig og vennlig.', solution: 'Mi madre es simpática y amable.' },
          { label: 'b', task: 'Broren min er morsom.', solution: 'Mi hermano es divertido.' },
          { label: 'c', task: 'Søstrene mine er intelligente.', solution: 'Mis hermanas son inteligentes.' },
          { label: 'd', task: 'Bestefaren min er sjenerøs og kjærlig.', solution: 'Mi abuelo es generoso y cariñoso.' },
        ],
        solution: 'a) Mi madre es simpática y amable.\nb) Mi hermano es divertido.\nc) Mis hermanas son inteligentes.\nd) Mi abuelo es generoso y cariñoso.',
        hints: ['Bruk «es» for entall og «son» for flertall', 'Adjektiver på -e endres ikke etter kjønn, men tar -s i flertall'],
      },
    },

    // --- Tips ---
    {
      id: 'spansk-1-3-3-tip-1',
      type: 'tip',
      content: `**Ser vs. Estar:** For å beskrive permanente egenskaper (utseende, personlighet) bruker vi verbet **ser**: «Mi madre **es** alta.» Verbet **estar** brukes for midlertidige tilstander: «Mi madre **está** cansada.» (Moren min er trøtt.) I dette kapittelet bruker vi bare **ser**.`,
    },

    // --- Teori: Kombinere utseende og personlighet ---
    {
      id: 'spansk-1-3-3-text-3',
      type: 'text',
      content: `**Sette sammen beskrivelser**

Når du beskriver en person, kan du kombinere utseende og personlighet:

> Mi madre es alta, rubia y muy simpática.
> (Moren min er høy, blond og veldig hyggelig.)

> Mi hermano es bajo y moreno, pero es muy divertido.
> (Broren min er lav og mørkhåret, men han er veldig morsom.)

**Nyttige ord:**
| Spansk | Norsk |
|--------|-------|
| muy | veldig |
| bastante | ganske |
| un poco | litt |
| también | også |
| pero | men |
| y | og |

Eksempel: Mi primo es **bastante** alto y **muy** inteligente.`,
    },

    // --- Eksempel 3 ---
    {
      id: 'spansk-1-3-3-ex-3-example',
      type: 'example',
      title: 'Fullstendig personbeskrivelse',
      problem: 'Beskriv en person med både utseende og personlighet.',
      solution: `— Mi tía Carmen es alta y delgada. Es morena y muy guapa. También es muy simpática y generosa. Es un poco seria, pero muy amable.\n\n(Tanten min Carmen er høy og slank. Hun er mørkhåret og veldig pen. Hun er også veldig hyggelig og sjenerøs. Hun er litt alvorlig, men veldig vennlig.)\n\nHer kombinerer vi flere adjektiver med **y** (og), **también** (også) og **pero** (men) for å gi en variert beskrivelse.`,
    },

    // --- Oppgave 3 ---
    {
      id: 'spansk-1-3-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-3-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv disse personene med riktige adjektivformer:',
        subTasks: [
          { label: 'a', task: 'En høy og morsom bror (hermano)', solution: 'Mi hermano es alto y divertido.' },
          { label: 'b', task: 'En vennlig og intelligent bestemor (abuela)', solution: 'Mi abuela es amable e inteligente.' },
          { label: 'c', task: 'To sjenerte og snille kusiner (primas)', solution: 'Mis primas son tímidas y amables.' },
        ],
        solution: 'a) Mi hermano es alto y divertido.\nb) Mi abuela es amable e inteligente.\nc) Mis primas son tímidas y amables.',
        hints: ['Husk adjektivsamsvar i kjønn og tall', 'Bruk «e» i stedet for «y» foran i-/hi-'],
      },
    },

    // --- Oppgave 4 ---
    {
      id: 'spansk-1-3-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-3-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en beskrivelse av to familiemedlemmer. Beskriv utseende og personlighet for hver person (3-4 setninger per person).',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv moren din eller en kvinnelig slektning. Bruk minst 4 adjektiver.',
            solution: 'Mi madre se llama Kari. Es alta y delgada. Es rubia y muy guapa. También es simpática y amable. Es un poco seria, pero muy cariñosa.',
          },
          {
            label: 'b',
            task: 'Beskriv faren din eller en mannlig slektning. Bruk minst 4 adjektiver.',
            solution: 'Mi padre se llama Ola. Es alto y moreno. Es bastante fuerte. Es muy divertido y generoso. También es inteligente.',
          },
        ],
        solution: 'a) Mi madre se llama Kari. Es alta y delgada. Es rubia y muy guapa. También es simpática y amable. Es un poco seria, pero muy cariñosa.\n\nb) Mi padre se llama Ola. Es alto y moreno. Es bastante fuerte. Es muy divertido y generoso. También es inteligente.',
        hints: [
          'Kombiner utseende- og personlighetsadjektiver',
          'Bruk muy, bastante, un poco for å variere',
          'Husk riktig kjønnsform på adjektivene',
        ],
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 3.4 Presentar a mi familia - Presentere familien
// ----------------------------------------------------------------------------

export const CHAPTER_SPANSK_1_3_4: TextbookChapter = {
  id: 'spansk-1-3-4',
  courseId: 'spansk-1',
  chapterNumber: '3.4',
  title: 'Presentar a mi familia - Presentere familien',
  description: 'Kombiner alt du har lært i kapittel 3 for å presentere familien din med beskrivelser, eiendomsord og alder.',
  estimatedMinutes: 50,
  competenceGoals: [
    'presentere familiemedlemmer med navn, alder og beskrivelser',
    'skrive en sammenhengende tekst om familien',
    'føre en samtale om familier',
  ],
  content: [
    // --- Intro ---
    {
      id: 'spansk-1-3-4-intro',
      type: 'text',
      content: `Nå har du lært familieord, eiendomsord og adjektiver for å beskrive mennesker. I dette kapittelet setter du alt sammen for å presentere familien din muntlig og skriftlig. Du lærer å skrive lengre tekster og føre samtaler om familier.`,
    },

    // --- Teori: Modelltekst ---
    {
      id: 'spansk-1-3-4-text-1',
      type: 'text',
      content: `**Modelltekst: Mi familia**

> ¡Hola! Me llamo Sofía y tengo quince años. Voy a presentar a mi familia.
>
> Mi padre se llama Antonio. Tiene cuarenta y cinco años. Es alto y moreno. Es muy simpático y divertido.
>
> Mi madre se llama Isabel. Tiene cuarenta y dos años. Es baja y rubia. Es muy amable e inteligente.
>
> Tengo un hermano. Se llama Pablo y tiene diecisiete años. Es alto y delgado. Es un poco serio, pero muy generoso.
>
> También tengo una hermana pequeña. Se llama Lucía y tiene diez años. Es rubia como mi madre. Es muy alegre y divertida.
>
> Nuestra abuela se llama Carmen. Vive con nosotros. Es muy cariñosa.
>
> Me gusta mucho mi familia.

**Nyttige uttrykk i teksten:**

| Spansk | Norsk |
|--------|-------|
| Voy a presentar a... | Jeg skal presentere... |
| Tiene ___ años | Han/hun er ___ år |
| como | som / lik |
| Vive con nosotros | Bor hos oss |
| Me gusta mucho | Jeg liker veldig godt |`,
    },

    // --- Definisjon: Strukturere en presentasjon ---
    {
      id: 'spansk-1-3-4-def-1',
      type: 'definition',
      title: 'Struktur for familiepresentasjon',
      content: `En god familiepresentasjon følger denne strukturen:\n\n1. **Innledning:** Si hvem du er og introduser temaet.\n   — Me llamo... Voy a presentar a mi familia.\n\n2. **Foreldre:** Navn, alder, utseende, personlighet.\n   — Mi padre se llama... Tiene... años. Es...\n\n3. **Søsken:** Navn, alder, beskrivelse.\n   — Tengo un/una hermano/a. Se llama...\n\n4. **Andre familiemedlemmer:** Besteforeldre, onkler, etc.\n   — Mi abuela se llama... También tengo...\n\n5. **Avslutning:** En personlig kommentar.\n   — Me gusta mucho mi familia. / Mi familia es muy importante para mí.`,
    },

    // --- Eksempel 1 ---
    {
      id: 'spansk-1-3-4-ex-1-example',
      type: 'example',
      title: 'Presentere et familiemedlem',
      problem: 'Presenter moren din i 3-4 setninger. Bruk navn, alder, utseende og personlighet.',
      solution: `— Mi madre se llama Elena. Tiene cuarenta años. Es alta y morena. Es muy simpática y cariñosa.\n\n(Moren min heter Elena. Hun er 40 år. Hun er høy og mørkhåret. Hun er veldig hyggelig og kjærlig.)\n\nHer følger vi mønsteret: **navn → alder → utseende → personlighet**.`,
    },

    // --- Oppgave 1 ---
    {
      id: 'spansk-1-3-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-3-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig ord i denne familiepresentasjonen:',
        subTasks: [
          { label: 'a', task: 'Mi padre ___ llama Jorge. (reflexivpronomen)', solution: 'se' },
          { label: 'b', task: '___ cuarenta y tres años. (Har)', solution: 'Tiene' },
          { label: 'c', task: 'Es alto ___ moreno. (og)', solution: 'y' },
          { label: 'd', task: 'Es muy ___ . (hyggelig, hankjønn)', solution: 'simpático' },
        ],
        solution: 'a) se\nb) Tiene\nc) y\nd) simpático',
        hints: ['Llamarse: me llamo, te llamas, se llama', 'Tener: tengo, tienes, tiene'],
      },
    },

    // --- Mer teori: Dialog om familien ---
    {
      id: 'spansk-1-3-4-text-2',
      type: 'text',
      content: `**Dialog om familien (Hablar de la familia)**

Her er en typisk samtale mellom to venner om familiene sine:

> — ¡Hola, María! ¿Cómo es tu familia?
> — Mi familia es bastante grande. Somos cinco: mis padres, mis dos hermanos y yo.
> — ¿Cómo se llaman tus hermanos?
> — Mi hermano se llama Pedro y mi hermana se llama Ana.
> — ¿Cuántos años tienen?
> — Pedro tiene dieciocho años y Ana tiene doce.
> — ¿Cómo es Pedro?
> — Es alto y moreno. Es muy divertido.
> — ¿Y Ana?
> — Ana es baja y rubia. Es un poco tímida, pero muy amable.
> — ¡Qué bien! Mi familia es pequeña. Solo somos tres.

**Nyttige spørsmål for dialogen:**

| Spansk | Norsk |
|--------|-------|
| ¿Cómo es tu familia? | Hvordan er familien din? |
| ¿Cuántas personas sois? | Hvor mange er dere? |
| ¿Cómo se llaman tus hermanos? | Hva heter søsknene dine? |
| ¿Cuántos años tienen? | Hvor gamle er de? |
| ¿Cómo es tu padre/madre? | Hvordan er faren/moren din? |`,
    },

    // --- Eksempel 2 ---
    {
      id: 'spansk-1-3-4-ex-2-example',
      type: 'example',
      title: 'Svare på spørsmål om familien',
      problem: 'Svar på spørsmålet: ¿Cómo es tu familia? (Familien: 4 personer, far = høy, mor = blond, en søster = morsom)',
      solution: `— Mi familia es pequeña. Somos cuatro: mis padres, mi hermana y yo. Mi padre es alto y simpático. Mi madre es rubia y muy amable. Mi hermana se llama Lise y es muy divertida.\n\n(Familien min er liten. Vi er fire: foreldrene mine, søsteren min og meg. Faren min er høy og hyggelig. Moren min er blond og veldig vennlig. Søsteren min heter Lise og er veldig morsom.)\n\nHer bruker vi **somos** (vi er) for å si hvor mange vi er i familien.`,
    },

    // --- Oppgave 2 ---
    {
      id: 'spansk-1-3-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-3-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Svar på spørsmålene med fullstendige setninger på spansk:',
        subTasks: [
          { label: 'a', task: '¿Cómo es tu familia? (Familien din er stor, dere er 6 personer)', solution: 'Mi familia es grande. Somos seis personas.' },
          { label: 'b', task: '¿Cuántos hermanos tienes? (Du har en bror og to søstre)', solution: 'Tengo un hermano y dos hermanas.' },
          { label: 'c', task: '¿Cómo es tu padre? (Faren din er høy, mørkhåret og morsom)', solution: 'Mi padre es alto y moreno. Es muy divertido.' },
          { label: 'd', task: '¿Cómo se llama tu madre? (Moren din heter Karin og er 45 år)', solution: 'Mi madre se llama Karin. Tiene cuarenta y cinco años.' },
        ],
        solution: 'a) Mi familia es grande. Somos seis personas.\nb) Tengo un hermano y dos hermanas.\nc) Mi padre es alto y moreno. Es muy divertido.\nd) Mi madre se llama Karin. Tiene cuarenta y cinco años.',
        hints: ['Bruk fullstendige setninger', 'Kombiner navn, alder og beskrivelser'],
      },
    },

    // --- Tips ---
    {
      id: 'spansk-1-3-4-tip-1',
      type: 'tip',
      content: `**Tips for muntlig presentasjon:** Når du presenterer familien din muntlig, kan du ta med et bilde (una foto) og peke på personene mens du snakker. Start med «Esta es mi familia» (Dette er familien min) og pek: «Este es mi padre» (Dette er faren min), «Esta es mi madre» (Dette er moren min). Bruk **este** for hankjønn og **esta** for hunkjønn.`,
    },

    // --- Teori: Beskrive et familiebilde ---
    {
      id: 'spansk-1-3-4-text-3',
      type: 'text',
      content: `**Beskrive et bilde (Describir una foto)**

Når du beskriver et familiebilde, kan du bruke disse uttrykkene:

| Spansk | Norsk |
|--------|-------|
| En esta foto... | På dette bildet... |
| Esta es mi familia. | Dette er familien min. |
| Este es mi padre. | Dette er faren min. |
| Esta es mi madre. | Dette er moren min. |
| A la izquierda está... | Til venstre er... |
| A la derecha está... | Til høyre er... |
| En el centro está... | I midten er... |
| Detrás está... | Bak er... |
| Delante está... | Foran er... |

**Eksempel:**
> En esta foto está mi familia. A la izquierda está mi padre. Es alto y moreno. En el centro está mi madre. Es rubia y simpática. A la derecha estoy yo.`,
    },

    // --- Eksempel 3 ---
    {
      id: 'spansk-1-3-4-ex-3-example',
      type: 'example',
      title: 'Beskrive et familiebilde',
      problem: 'Beskriv et familiebilde med fire personer: far (til venstre), mor (i midten), deg (til høyre) og en søster (foran).',
      solution: `— En esta foto está mi familia. A la izquierda está mi padre. Se llama Jorge y es alto y moreno. En el centro está mi madre. Se llama Elena y es rubia y amable. A la derecha estoy yo. Delante está mi hermana Lucía. Es pequeña y muy alegre.\n\n(På dette bildet er familien min. Til venstre er faren min. Han heter Jorge og er høy og mørkhåret. I midten er moren min. Hun heter Elena og er blond og vennlig. Til høyre er jeg. Foran er søsteren min Lucía. Hun er liten og veldig glad.)`,
    },

    // --- Oppgave 3 ---
    {
      id: 'spansk-1-3-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-3-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en beskrivelse av et tenkt familiebilde. Bruk posisjonsuttrykkene (a la izquierda, a la derecha, en el centro).',
        subTasks: [
          { label: 'a', task: 'Si hvem som er til venstre: faren din (høy, mørk)', solution: 'A la izquierda está mi padre. Es alto y moreno.' },
          { label: 'b', task: 'Si hvem som er i midten: moren din (blond, hyggelig)', solution: 'En el centro está mi madre. Es rubia y simpática.' },
          { label: 'c', task: 'Si hvem som er til høyre: søsteren din (ung, glad)', solution: 'A la derecha está mi hermana. Es joven y alegre.' },
        ],
        solution: 'a) A la izquierda está mi padre. Es alto y moreno.\nb) En el centro está mi madre. Es rubia y simpática.\nc) A la derecha está mi hermana. Es joven y alegre.',
        hints: ['Bruk «está» for å si hvor noen befinner seg', 'Kombiner posisjon med beskrivelse'],
      },
    },

    // --- Oppgave 4 ---
    {
      id: 'spansk-1-3-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-3-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en fullstendig familiepresentasjon på spansk (8-10 setninger). Bruk strukturen: innledning, foreldre, søsken, andre familiemedlemmer, avslutning.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv en presentasjon av din egen familie (eller en fiktiv familie). Inkluder: navn, alder, utseende og personlighet for minst 3 familiemedlemmer.',
            solution: '¡Hola! Me llamo Erik y tengo dieciséis años. Voy a presentar a mi familia.\n\nMi padre se llama Ola. Tiene cuarenta y siete años. Es alto y rubio. Es muy divertido y generoso.\n\nMi madre se llama Kari. Tiene cuarenta y cinco años. Es baja y morena. Es simpática e inteligente.\n\nTengo una hermana. Se llama Ingrid y tiene trece años. Es rubia como mi padre. Es alegre y un poco tímida.\n\nNuestra abuela se llama Astrid. Es muy cariñosa y amable.\n\nMe gusta mucho mi familia.',
          },
          {
            label: 'b',
            task: 'Skriv en dialog der du presenterer familien din for en ny venn. Vennen stiller spørsmål og du svarer.',
            solution: '— ¡Hola! ¿Cómo es tu familia?\n— Mi familia es pequeña. Somos cuatro: mis padres, mi hermana y yo.\n— ¿Cómo se llama tu hermana?\n— Se llama Ingrid. Tiene trece años.\n— ¿Cómo es?\n— Es rubia y alegre. Es un poco tímida.\n— ¿Y tus padres?\n— Mi padre es alto y muy divertido. Mi madre es simpática e inteligente.\n— ¡Qué bien! Tu familia es muy simpática.',
          },
        ],
        solution: 'a) ¡Hola! Me llamo Erik y tengo dieciséis años. Voy a presentar a mi familia.\n\nMi padre se llama Ola. Tiene cuarenta y siete años. Es alto y rubio. Es muy divertido y generoso.\n\nMi madre se llama Kari. Tiene cuarenta y cinco años. Es baja y morena. Es simpática e inteligente.\n\nTengo una hermana. Se llama Ingrid y tiene trece años. Es rubia como mi padre. Es alegre y un poco tímida.\n\nNuestra abuela se llama Astrid. Es muy cariñosa y amable.\n\nMe gusta mucho mi familia.\n\nb) — ¡Hola! ¿Cómo es tu familia?\n— Mi familia es pequeña. Somos cuatro: mis padres, mi hermana y yo.\n— ¿Cómo se llama tu hermana?\n— Se llama Ingrid. Tiene trece años.\n— ¿Cómo es?\n— Es rubia y alegre. Es un poco tímida.\n— ¿Y tus padres?\n— Mi padre es alto y muy divertido. Mi madre es simpática e inteligente.\n— ¡Qué bien! Tu familia es muy simpática.',
        hints: [
          'Følg strukturen: innledning → foreldre → søsken → andre → avslutning',
          'Bruk varierte adjektiver for utseende og personlighet',
          'Husk adjektivsamsvar i kjønn og tall',
        ],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler samlet
// ============================================================================

export const SPANSK_1_CHAPTERS_1_3: TextbookChapter[] = [
  CHAPTER_SPANSK_1_1_1,
  CHAPTER_SPANSK_1_1_2,
  CHAPTER_SPANSK_1_1_3,
  CHAPTER_SPANSK_1_1_4,
  CHAPTER_SPANSK_1_2_1,
  CHAPTER_SPANSK_1_2_2,
  CHAPTER_SPANSK_1_2_3,
  CHAPTER_SPANSK_1_2_4,
  CHAPTER_SPANSK_1_3_1,
  CHAPTER_SPANSK_1_3_2,
  CHAPTER_SPANSK_1_3_3,
  CHAPTER_SPANSK_1_3_4,
];
