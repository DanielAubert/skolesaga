/* eslint-disable */
// @ts-nocheck
/**
 * Spansk nivå 2 - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for fremmedspråk nivå 2
 * Bygger videre på nivå 1 med mer avansert grammatikk og kulturforståelse
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Perfecto y imperfecto - Fortid utvidet
// ============================================================================

export const CHAPTER_SPANSK_2_1: TextbookChapter = {
  id: 'spansk-2-1',
  courseId: 'spansk-2',
  chapterNumber: '1',
  title: 'Perfecto y imperfecto - Fortid utvidet',
  description: 'Lær forskjellen mellom pretérito perfecto og pretérito imperfecto, og når du bruker hver form.',
  estimatedMinutes: 75,
  competenceGoals: [
    'bruke ulike fortidsformer for å fortelle om hendelser og beskrive bakgrunn',
    'skille mellom avsluttede handlinger og pågående tilstander i fortid',
  ],
  content: [
    {
      id: 'spansk-2-1-intro',
      type: 'text',
      content: `I spansk finnes det flere måter å snakke om fortiden på. I dette kapittelet lærer du forskjellen mellom **pretérito perfecto** (sammensatt fortid) og **pretérito imperfecto** (ufullendt fortid), og hvordan de brukes sammen for å fortelle historier.`,
    },
    {
      id: 'spansk-2-1-def-1',
      type: 'definition',
      title: 'Pretérito perfecto (sammensatt fortid)',
      content: `Pretérito perfecto brukes for handlinger som har skjedd nylig eller som har relevans for nåtiden. Det dannes med **haber** i presens + perfektum partisipp.

| Person | Haber | Eksempel |
|--------|-------|----------|
| yo | he | he hablado (jeg har snakket) |
| tú | has | has comido (du har spist) |
| él/ella | ha | ha vivido (han/hun har bodd) |
| nosotros | hemos | hemos estudiado (vi har studert) |
| ellos/ustedes | han | han trabajado (de har jobbet) |

**Perfektum partisipp:**
- -ar verb: -ado (hablar → hablado)
- -er/-ir verb: -ido (comer → comido, vivir → vivido)`,
    },
    {
      id: 'spansk-2-1-def-2',
      type: 'definition',
      title: 'Pretérito imperfecto (ufullendt fortid)',
      content: `Pretérito imperfecto brukes for å beskrive **bakgrunn**, **vaner i fortiden**, og **pågående tilstander**.

**-AR verb (hablar):**
| Person | Bøyning |
|--------|---------|
| yo | hablaba |
| tú | hablabas |
| él/ella | hablaba |
| nosotros | hablábamos |
| ellos | hablaban |

**-ER/-IR verb (comer, vivir):**
| Person | Bøyning |
|--------|---------|
| yo | comía / vivía |
| tú | comías / vivías |
| él/ella | comía / vivía |
| nosotros | comíamos / vivíamos |
| ellos | comían / vivían |`,
    },
    {
      id: 'spansk-2-1-text-1',
      type: 'text',
      content: `**Når bruker vi imperfecto?**

1. **Vaner i fortiden**: *Cuando era niño, jugaba al fútbol todos los días.* (Da jeg var barn, spilte jeg fotball hver dag.)

2. **Beskrivelser i fortiden**: *El cielo estaba azul y hacía calor.* (Himmelen var blå og det var varmt.)

3. **Alder og tid i fortiden**: *Tenía quince años cuando empecé a estudiar español.* (Jeg var femten år da jeg begynte å studere spansk.)

4. **Samtidige handlinger**: *Mientras yo estudiaba, mi hermano veía la televisión.* (Mens jeg studerte, så broren min på TV.)`,
    },
    {
      id: 'spansk-2-1-text-2',
      type: 'text',
      content: `**Uregelmessige verb i imperfecto**

Det finnes bare TRE uregelmessige verb i imperfecto:

| Verb | yo | tú | él | nosotros | ellos |
|------|----|----|-------|----------|-------|
| ser | era | eras | era | éramos | eran |
| ir | iba | ibas | iba | íbamos | iban |
| ver | veía | veías | veía | veíamos | veían |`,
    },
    {
      id: 'spansk-2-1-example-1',
      type: 'example',
      title: 'Perfecto vs. Imperfecto i en historie',
      content: `**Tekst:**
*Ayer hice muchas cosas. Por la mañana, fui al gimnasio. Hacía buen tiempo y el sol brillaba. Después, he comido con mi amigo en un restaurante nuevo. La comida estaba deliciosa.*

**Analyse:**
- *hice, fui* = avsluttede handlinger (indefinido/perfecto)
- *hacía, brillaba, estaba* = beskrivelser/bakgrunn (imperfecto)
- *he comido* = nylig hendelse med relevans for nå (perfecto)`,
    },
    {
      id: 'spansk-2-1-tip-1',
      type: 'tip',
      title: 'Huskeregel',
      content: `Tenk på imperfecto som **videokamera** (pågående, bakgrunn) og perfecto/indefinido som **fotografi** (øyeblikksbilde, avsluttet handling).`,
    },
  ],
  exercises: [
    {
      id: 'spansk-2-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er perfektum partisipp av "hablar"?',
      options: [
        { id: 'a', text: 'hablado', isCorrect: true },
        { id: 'b', text: 'hablido', isCorrect: false, feedback: '-ar verb får endelsen -ado.' },
        { id: 'c', text: 'habló', isCorrect: false, feedback: 'Det er indefinido, ikke partisipp.' },
        { id: 'd', text: 'hablaba', isCorrect: false, feedback: 'Det er imperfecto.' },
      ],
      solution: 'Verb på -ar får endelsen -ado i perfektum partisipp: hablar → hablado.',
    },
    {
      id: 'spansk-2-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Fullfør setningen: "Cuando _____ niño, _____ mucho fútbol." (Da jeg var barn, spilte jeg mye fotball)',
      options: [
        { id: 'a', text: 'era / jugaba', isCorrect: true },
        { id: 'b', text: 'fui / jugué', isCorrect: false, feedback: 'Her beskriver vi en vane i fortiden, så imperfecto passer bedre.' },
        { id: 'c', text: 'era / jugué', isCorrect: false, feedback: '"Jugar mucho fútbol" var en vane, så bruk imperfecto.' },
        { id: 'd', text: 'he sido / he jugado', isCorrect: false, feedback: 'Perfecto passer ikke for fjerne barndomsminner.' },
      ],
      solution: 'Begge verbene skal være i imperfecto fordi vi beskriver en tilstand (å være barn) og en vane (å spille fotball).',
    },
    {
      id: 'spansk-2-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan bøyes "comer" i imperfecto for "nosotros"?',
      options: [
        { id: 'a', text: 'comíamos', isCorrect: true },
        { id: 'b', text: 'comemos', isCorrect: false, feedback: 'Det er presens.' },
        { id: 'c', text: 'comimos', isCorrect: false, feedback: 'Det er indefinido.' },
        { id: 'd', text: 'hemos comido', isCorrect: false, feedback: 'Det er perfecto.' },
      ],
      solution: '-ER verb i imperfecto for "nosotros" ender på -íamos: comíamos.',
    },
    {
      id: 'spansk-2-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Velg riktig: "Ayer _____ a María. Ella _____ muy contenta." (I går så jeg María. Hun var veldig glad.)',
      options: [
        { id: 'a', text: 'vi / estaba', isCorrect: true },
        { id: 'b', text: 'veía / estaba', isCorrect: false, feedback: '"Ver a María" var en avsluttet handling (indefinido).' },
        { id: 'c', text: 'vi / estuvo', isCorrect: false, feedback: 'Beskrivelse av tilstand bruker imperfecto.' },
        { id: 'd', text: 'he visto / está', isCorrect: false, feedback: '"Ayer" krever fortid, ikke perfecto eller presens.' },
      ],
      solution: '"Vi" (indefinido) for den avsluttede handlingen, "estaba" (imperfecto) for å beskrive hennes tilstand.',
    },
    {
      id: 'spansk-2-1-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilket verb er IKKE uregelmessig i imperfecto?',
      options: [
        { id: 'a', text: 'tener', isCorrect: true },
        { id: 'b', text: 'ser', isCorrect: false, feedback: '"Ser" er uregelmessig: era, eras, era...' },
        { id: 'c', text: 'ir', isCorrect: false, feedback: '"Ir" er uregelmessig: iba, ibas, iba...' },
        { id: 'd', text: 'ver', isCorrect: false, feedback: '"Ver" er uregelmessig: veía, veías, veía...' },
      ],
      solution: 'Det finnes bare tre uregelmessige verb i imperfecto: ser, ir og ver. "Tener" følger det vanlige mønsteret: tenía, tenías, tenía...',
    },
  ],
};

// ============================================================================
// Kapittel 2: El subjuntivo - Konjunktiv
// ============================================================================

export const CHAPTER_SPANSK_2_2: TextbookChapter = {
  id: 'spansk-2-2',
  courseId: 'spansk-2',
  chapterNumber: '2',
  title: 'El subjuntivo - Konjunktiv',
  description: 'Lær å bruke subjuntivo for å uttrykke ønsker, følelser, tvil og usikkerhet.',
  estimatedMinutes: 90,
  competenceGoals: [
    'uttrykke ønsker, følelser og meninger med konjunktiv',
    'bruke subjuntivo i setninger med uttrykk for tvil og usikkerhet',
  ],
  content: [
    {
      id: 'spansk-2-2-intro',
      type: 'text',
      content: `**El subjuntivo** (konjunktiv) er en verbmodus som brukes mye på spansk. Den uttrykker subjektive holdninger som ønsker, følelser, tvil og hypotetiske situasjoner. Dette er en av de viktigste grammatiske strukturene å mestre på nivå 2.`,
    },
    {
      id: 'spansk-2-2-def-1',
      type: 'definition',
      title: 'Dannelse av presente de subjuntivo',
      content: `Subjuntivo dannes ved å ta stammen fra yo-formen i presens og legge til motsatte endelser:

**-AR verb → -e, -es, -e, -emos, -en**
| hablar | hablo → |
|--------|---------|
| yo | hable |
| tú | hables |
| él/ella | hable |
| nosotros | hablemos |
| ellos | hablen |

**-ER/-IR verb → -a, -as, -a, -amos, -an**
| comer | como → |
|-------|--------|
| yo | coma |
| tú | comas |
| él/ella | coma |
| nosotros | comamos |
| ellos | coman |`,
    },
    {
      id: 'spansk-2-2-text-1',
      type: 'text',
      content: `**Når brukes subjuntivo?**

1. **Ønsker og vilje (Deseos y voluntad)**
   - *Quiero que vengas.* (Jeg vil at du skal komme.)
   - *Espero que tengas suerte.* (Jeg håper du har flaks.)
   - *Prefiero que hablemos mañana.* (Jeg foretrekker at vi snakker i morgen.)

2. **Følelser (Emociones)**
   - *Me alegro de que estés aquí.* (Jeg er glad for at du er her.)
   - *Siento que no puedas venir.* (Jeg beklager at du ikke kan komme.)
   - *Es triste que llueva hoy.* (Det er trist at det regner i dag.)

3. **Tvil og usikkerhet (Duda e incertidumbre)**
   - *No creo que sea verdad.* (Jeg tror ikke det er sant.)
   - *Dudo que lleguen a tiempo.* (Jeg tviler på at de kommer i tide.)
   - *Es posible que tenga razón.* (Det er mulig at han/hun har rett.)`,
    },
    {
      id: 'spansk-2-2-def-2',
      type: 'definition',
      title: 'WEIRDO - Huskeregel for subjuntivo',
      content: `En nyttig huskeregel for når subjuntivo brukes:

**W**ishes (Ønsker): querer, desear, esperar
**E**motions (Følelser): alegrarse, sentir, tener miedo
**I**mpersonal expressions: es importante, es necesario, es posible
**R**ecommendations (Anbefalinger): recomendar, sugerir, aconsejar
**D**oubt/Denial (Tvil/benektelse): dudar, no creer, negar
**O**jalá (Forhåpentligvis): ¡Ojalá que llueva!`,
    },
    {
      id: 'spansk-2-2-text-2',
      type: 'text',
      content: `**Uregelmessige verb i subjuntivo**

Noen vanlige verb har uregelmessig stamme:

| Infinitiv | Subjuntivo |
|-----------|------------|
| ser | sea, seas, sea, seamos, sean |
| estar | esté, estés, esté, estemos, estén |
| ir | vaya, vayas, vaya, vayamos, vayan |
| haber | haya, hayas, haya, hayamos, hayan |
| saber | sepa, sepas, sepa, sepamos, sepan |
| dar | dé, des, dé, demos, den |`,
    },
    {
      id: 'spansk-2-2-example-1',
      type: 'example',
      title: 'Subjuntivo vs. Indicativo',
      content: `**Sammenligning:**

| Indicativo (fakta) | Subjuntivo (subjektivt) |
|--------------------|-------------------------|
| *Creo que viene.* (Jeg tror han kommer.) | *No creo que venga.* (Jeg tror ikke han kommer.) |
| *Es verdad que habla español.* (Det er sant at hun snakker spansk.) | *Es posible que hable español.* (Det er mulig at hun snakker spansk.) |
| *Sé que está enfermo.* (Jeg vet at han er syk.) | *Espero que no esté enfermo.* (Jeg håper han ikke er syk.) |`,
    },
    {
      id: 'spansk-2-2-tip-1',
      type: 'tip',
      title: 'Subjektbytte',
      content: `Subjuntivo brukes vanligvis når subjektet i bisetningen er **forskjellig** fra hovedsetningen: "Quiero que TÚ vengas" (Jeg vil at DU skal komme). Hvis subjektet er det samme, brukes infinitiv: "Quiero venir" (Jeg vil komme).`,
    },
  ],
  exercises: [
    {
      id: 'spansk-2-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er subjuntivo-formen av "hablar" for "yo"?',
      options: [
        { id: 'a', text: 'hable', isCorrect: true },
        { id: 'b', text: 'hablo', isCorrect: false, feedback: 'Det er indicativo presens.' },
        { id: 'c', text: 'hablé', isCorrect: false, feedback: 'Det er indefinido.' },
        { id: 'd', text: 'habla', isCorrect: false, feedback: 'Det er indicativo for él/ella.' },
      ],
      solution: '-AR verb i subjuntivo får endelsen -e for "yo": hablar → hable.',
    },
    {
      id: 'spansk-2-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Fullfør: "Espero que tú _____ mañana." (Jeg håper du kommer i morgen.)',
      options: [
        { id: 'a', text: 'vengas', isCorrect: true },
        { id: 'b', text: 'vienes', isCorrect: false, feedback: '"Esperar que" krever subjuntivo.' },
        { id: 'c', text: 'vendrás', isCorrect: false, feedback: 'Futurum brukes ikke etter "espero que".' },
        { id: 'd', text: 'viniste', isCorrect: false, feedback: 'Det er fortid, ikke subjuntivo presens.' },
      ],
      solution: '"Esperar" uttrykker et ønske og krever subjuntivo i bisetningen: vengas.',
    },
    {
      id: 'spansk-2-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket uttrykk krever IKKE subjuntivo?',
      options: [
        { id: 'a', text: 'Es verdad que...', isCorrect: true },
        { id: 'b', text: 'Es posible que...', isCorrect: false, feedback: 'Uttrykk for mulighet krever subjuntivo.' },
        { id: 'c', text: 'Dudo que...', isCorrect: false, feedback: 'Tvil krever subjuntivo.' },
        { id: 'd', text: 'Quiero que...', isCorrect: false, feedback: 'Ønsker krever subjuntivo.' },
      ],
      solution: '"Es verdad que" (det er sant at) uttrykker fakta/sikkerhet og bruker indicativo.',
    },
    {
      id: 'spansk-2-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Velg riktig: "No creo que él _____ la verdad." (Jeg tror ikke han forteller sannheten.)',
      options: [
        { id: 'a', text: 'diga', isCorrect: true },
        { id: 'b', text: 'dice', isCorrect: false, feedback: 'Negativ tro (no creer) krever subjuntivo.' },
        { id: 'c', text: 'decir', isCorrect: false, feedback: 'Infinitiv kan ikke brukes her.' },
        { id: 'd', text: 'dijo', isCorrect: false, feedback: 'Det er indefinido, ikke subjuntivo.' },
      ],
      solution: '"No creo que" uttrykker tvil og krever subjuntivo. "Decir" i subjuntivo er "diga".',
    },
    {
      id: 'spansk-2-2-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvorfor brukes subjuntivo i "Quiero que estudies"?',
      options: [
        { id: 'a', text: 'Fordi subjektet i bisetningen (tú) er forskjellig fra hovedsetningen (yo)', isCorrect: true },
        { id: 'b', text: 'Fordi setningen er i fortid', isCorrect: false, feedback: 'Tidsform avgjør ikke subjuntivo.' },
        { id: 'c', text: 'Fordi "estudiar" alltid krever subjuntivo', isCorrect: false, feedback: 'Verb krever ikke subjuntivo i seg selv.' },
        { id: 'd', text: 'Fordi det er et spørsmål', isCorrect: false, feedback: 'Spørsmål alene utløser ikke subjuntivo.' },
      ],
      solution: 'Subjuntivo brukes fordi "querer" uttrykker et ønske OG subjektet er forskjellig (yo vs. tú). Hvis det var samme subjekt, ville vi si "Quiero estudiar" (infinitiv).',
    },
  ],
};

// ============================================================================
// Kapittel 3: Condicional y futuro
// ============================================================================

export const CHAPTER_SPANSK_2_3: TextbookChapter = {
  id: 'spansk-2-3',
  courseId: 'spansk-2',
  chapterNumber: '3',
  title: 'Condicional y futuro',
  description: 'Lær å snakke om fremtiden og hypotetiske situasjoner med futurum og kondisjonalis.',
  estimatedMinutes: 75,
  competenceGoals: [
    'uttrykke fremtidige handlinger og planer',
    'formulere høflige forespørsler og hypotetiske situasjoner',
  ],
  content: [
    {
      id: 'spansk-2-3-intro',
      type: 'text',
      content: `For å snakke om fremtiden bruker vi **futuro simple**, og for å uttrykke hypotetiske situasjoner eller høflige forespørsler bruker vi **condicional**. Begge disse formene er viktige for å kunne kommunisere nyansert på spansk.`,
    },
    {
      id: 'spansk-2-3-def-1',
      type: 'definition',
      title: 'Futuro simple (enkel futurum)',
      content: `Futuro dannes ved å legge endelser til hele infinitiven:

**Endelser for alle verb:**
| Person | Endelse |
|--------|---------|
| yo | -é |
| tú | -ás |
| él/ella | -á |
| nosotros | -emos |
| ellos | -án |

**Eksempel med hablar:**
hablaré, hablarás, hablará, hablaremos, hablarán

**Bruk:**
- Fremtidige handlinger: *Mañana estudiaré español.* (I morgen skal jeg studere spansk.)
- Antakelser: *Serán las tres.* (Det er nok/antagelig klokken tre.)`,
    },
    {
      id: 'spansk-2-3-text-1',
      type: 'text',
      content: `**Uregelmessige verb i futurum**

Noen verb har endret stamme, men beholder de vanlige endelsene:

| Infinitiv | Stamme | Eksempel (yo) |
|-----------|--------|---------------|
| tener | tendr- | tendré |
| poder | podr- | podré |
| venir | vendr- | vendré |
| salir | saldr- | saldré |
| poner | pondr- | pondré |
| hacer | har- | haré |
| decir | dir- | diré |
| saber | sabr- | sabré |
| querer | querr- | querré |`,
    },
    {
      id: 'spansk-2-3-def-2',
      type: 'definition',
      title: 'El condicional (kondisjonalis)',
      content: `Condicional dannes med samme stamme som futurum, men med andre endelser:

**Endelser:**
| Person | Endelse |
|--------|---------|
| yo | -ía |
| tú | -ías |
| él/ella | -ía |
| nosotros | -íamos |
| ellos | -ían |

**Eksempel med hablar:**
hablaría, hablarías, hablaría, hablaríamos, hablarían

**Bruk:**
- Høflige forespørsler: *¿Podrías ayudarme?* (Kunne du hjelpe meg?)
- Hypotetiske situasjoner: *Me gustaría viajar a España.* (Jeg ville gjerne reise til Spania.)
- Råd: *Yo que tú, estudiaría más.* (Hvis jeg var deg, ville jeg studere mer.)`,
    },
    {
      id: 'spansk-2-3-text-2',
      type: 'text',
      content: `**Kondisjonalssetninger (Si + imperfecto de subjuntivo + condicional)**

For hypotetiske/usannsynlige situasjoner:

*Si tuviera dinero, viajaría a México.*
(Hvis jeg hadde penger, ville jeg reise til Mexico.)

*Si pudiera, te ayudaría.*
(Hvis jeg kunne, ville jeg hjelpe deg.)

**Merk:** "Si" (hvis) følges ALDRI av futurum eller condicional på spansk!`,
    },
    {
      id: 'spansk-2-3-example-1',
      type: 'example',
      title: 'Sammenligning: Futurum vs. Condicional',
      content: `| Futurum (vilje/fremtid) | Condicional (hypotetisk/høflig) |
|-------------------------|----------------------------------|
| *Iré a la fiesta.* (Jeg skal gå på festen.) | *Iría a la fiesta, pero estoy enfermo.* (Jeg ville gå på festen, men jeg er syk.) |
| *¿Puedes ayudarme?* (Kan du hjelpe meg?) | *¿Podrías ayudarme?* (Kunne du hjelpe meg? - mer høflig) |
| *Será interesante.* (Det vil være interessant.) | *Sería interesante.* (Det ville være interessant.) |`,
    },
    {
      id: 'spansk-2-3-tip-1',
      type: 'tip',
      title: 'Høflighet med condicional',
      content: `Bruk condicional for mer høflige forespørsler: "¿Podría hablar con usted?" er mer høflig enn "¿Puedo hablar con usted?" - omtrent som forskjellen mellom "Kunne jeg..." og "Kan jeg..." på norsk.`,
    },
  ],
  exercises: [
    {
      id: 'spansk-2-3-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvordan sier du "Jeg skal snakke" (futurum)?',
      options: [
        { id: 'a', text: 'hablaré', isCorrect: true },
        { id: 'b', text: 'hablaría', isCorrect: false, feedback: 'Det er condicional.' },
        { id: 'c', text: 'hablo', isCorrect: false, feedback: 'Det er presens.' },
        { id: 'd', text: 'hablé', isCorrect: false, feedback: 'Det er indefinido.' },
      ],
      solution: 'Futurum for "yo" av "hablar" er "hablaré" (infinitiv + é).',
    },
    {
      id: 'spansk-2-3-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er futurum av "tener" for "tú"?',
      options: [
        { id: 'a', text: 'tendrás', isCorrect: true },
        { id: 'b', text: 'tenerás', isCorrect: false, feedback: '"Tener" har uregelmessig stamme: tendr-.' },
        { id: 'c', text: 'tienes', isCorrect: false, feedback: 'Det er presens.' },
        { id: 'd', text: 'tenías', isCorrect: false, feedback: 'Det er imperfecto.' },
      ],
      solution: '"Tener" har uregelmessig stamme i futurum: tendr- + ás = tendrás.',
    },
    {
      id: 'spansk-2-3-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Fullfør høflig: "¿_____ decirme la hora?" (Kunne du fortelle meg klokken?)',
      options: [
        { id: 'a', text: 'Podrías', isCorrect: true },
        { id: 'b', text: 'Puedes', isCorrect: false, feedback: 'Presens er mindre høflig.' },
        { id: 'c', text: 'Podrás', isCorrect: false, feedback: 'Futurum brukes ikke for høflige forespørsler.' },
        { id: 'd', text: 'Pudiste', isCorrect: false, feedback: 'Det er fortid.' },
      ],
      solution: 'Condicional (podrías) brukes for høflige forespørsler.',
    },
    {
      id: 'spansk-2-3-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Velg riktig: "Si _____ tiempo, _____ al cine." (Hvis jeg hadde tid, ville jeg gå på kino.)',
      options: [
        { id: 'a', text: 'tuviera / iría', isCorrect: true },
        { id: 'b', text: 'tendré / iré', isCorrect: false, feedback: 'For hypotetiske situasjoner brukes imperfecto de subjuntivo + condicional.' },
        { id: 'c', text: 'tengo / voy', isCorrect: false, feedback: 'Presens uttrykker ikke det hypotetiske.' },
        { id: 'd', text: 'tendría / iría', isCorrect: false, feedback: 'Etter "si" brukes aldri condicional.' },
      ],
      solution: 'Hypotetiske kondisjonalsetninger: Si + imperfecto de subjuntivo, condicional.',
    },
    {
      id: 'spansk-2-3-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva uttrykker "Serán las cinco"?',
      options: [
        { id: 'a', text: 'En antakelse: Det er nok/antagelig klokken fem', isCorrect: true },
        { id: 'b', text: 'Sikkerhet: Klokken er fem', isCorrect: false, feedback: 'For sikkerhet ville vi si "Son las cinco".' },
        { id: 'c', text: 'Et ønske: Jeg vil at klokken skal være fem', isCorrect: false, feedback: 'Ønsker uttrykkes ikke med futurum.' },
        { id: 'd', text: 'Fremtid: Klokken kommer til å være fem', isCorrect: false, feedback: 'I denne konteksten uttrykker futurum en antakelse.' },
      ],
      solution: 'Futurum kan brukes for å uttrykke antakelser eller gjetninger om nåtiden.',
    },
  ],
};

// ============================================================================
// Kapittel 4: Pronombres y referencias
// ============================================================================

export const CHAPTER_SPANSK_2_4: TextbookChapter = {
  id: 'spansk-2-4',
  courseId: 'spansk-2',
  chapterNumber: '4',
  title: 'Pronombres y referencias',
  description: 'Mestre bruken av objektspronomen, refleksive pronomen og relative pronomen.',
  estimatedMinutes: 80,
  competenceGoals: [
    'bruke objektspronomen og refleksive pronomen korrekt',
    'konstruere setninger med relative pronomen',
  ],
  content: [
    {
      id: 'spansk-2-4-intro',
      type: 'text',
      content: `Pronomen erstatter substantiv og gjør språket mer flytende. I dette kapittelet lærer du å mestre direkte og indirekte objektspronomen, refleksive pronomen, og relative pronomen.`,
    },
    {
      id: 'spansk-2-4-def-1',
      type: 'definition',
      title: 'Direkte objektspronomen (OD)',
      content: `Direkte objektspronomen erstatter det direkte objektet (den/det som handlingen går direkte til):

| Person | Pronomen | Eksempel |
|--------|----------|----------|
| meg | me | Me ves. (Du ser meg.) |
| deg | te | Te llamo. (Jeg ringer deg.) |
| ham/den | lo | Lo compro. (Jeg kjøper den.) |
| henne/den | la | La veo. (Jeg ser henne.) |
| oss | nos | Nos invitan. (De inviterer oss.) |
| dem (m) | los | Los leo. (Jeg leser dem.) |
| dem (f) | las | Las conozco. (Jeg kjenner dem.) |`,
    },
    {
      id: 'spansk-2-4-def-2',
      type: 'definition',
      title: 'Indirekte objektspronomen (OI)',
      content: `Indirekte objektspronomen viser hvem/hva som mottar noe:

| Person | Pronomen | Eksempel |
|--------|----------|----------|
| meg | me | Me da el libro. (Han gir meg boken.) |
| deg | te | Te escribo. (Jeg skriver til deg.) |
| ham/henne/Dem | le | Le digo la verdad. (Jeg forteller ham/henne sannheten.) |
| oss | nos | Nos explica la lección. (Hun forklarer oss leksjonen.) |
| dem/Dere | les | Les mando un mensaje. (Jeg sender dem en melding.) |`,
    },
    {
      id: 'spansk-2-4-text-1',
      type: 'text',
      content: `**Kombinasjon av OI + OD**

Når begge pronomen brukes sammen, kommer OI alltid før OD:

- *Te lo doy.* (Jeg gir deg den.)
- *Me la explicas.* (Du forklarer meg den.)

**Viktig regel: Le/Les → Se foran lo/la/los/las**
- ~~Le lo doy~~ → **Se lo doy.** (Jeg gir ham/henne den.)
- ~~Les las mando~~ → **Se las mando.** (Jeg sender dem dem.)`,
    },
    {
      id: 'spansk-2-4-text-2',
      type: 'text',
      content: `**Plassering av pronomen**

1. **Foran bøyd verb:** *Lo veo.* (Jeg ser det.)

2. **Etter infinitiv (ett ord):** *Quiero verlo.* = *Lo quiero ver.*

3. **Etter gerundium (ett ord):** *Estoy haciéndolo.* = *Lo estoy haciendo.*

4. **Etter bekreftende imperativ:** *¡Dímelo!* (Fortell meg det!)

5. **Foran nektende imperativ:** *¡No me lo digas!* (Ikke fortell meg det!)`,
    },
    {
      id: 'spansk-2-4-def-3',
      type: 'definition',
      title: 'Relative pronomen',
      content: `Relative pronomen binder setninger sammen:

| Pronomen | Bruk | Eksempel |
|----------|------|----------|
| que | personer/ting (subjekt/direkte objekt) | La chica **que** conocí... (Jenta som jeg møtte...) |
| quien/quienes | personer (etter preposisjon) | El amigo **con quien** hablé... (Vennen jeg snakket med...) |
| el que, la que, los que, las que | etter preposisjon, spesifisering | El libro **del que** hablamos... (Boken vi snakket om...) |
| lo que | det som, hva | No entiendo **lo que** dices. (Jeg forstår ikke det du sier.) |
| cuyo/a | hvis (eiendom) | El autor **cuya** obra... (Forfatteren hvis verk...) |`,
    },
    {
      id: 'spansk-2-4-example-1',
      type: 'example',
      title: 'Pronomen i praksis',
      content: `**Dialog:**
- ¿Le diste el regalo a María?
  (Ga du gaven til María?)
- Sí, **se lo** di ayer.
  (Ja, jeg ga henne den i går.)
- ¿Y las flores?
  (Og blomstene?)
- También **se las** di.
  (Jeg ga henne dem også.)

**Forklaring:** "Le" → "se" foran "lo/las" for å unngå "le lo" og "le las".`,
    },
  ],
  exercises: [
    {
      id: 'spansk-2-4-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Erstatt "el libro" med riktig pronomen: "Yo leo el libro."',
      options: [
        { id: 'a', text: 'Yo lo leo.', isCorrect: true },
        { id: 'b', text: 'Yo la leo.', isCorrect: false, feedback: '"Libro" er hankjønn, så vi bruker "lo".' },
        { id: 'c', text: 'Yo le leo.', isCorrect: false, feedback: '"Le" er indirekte objekt.' },
        { id: 'd', text: 'Yo les leo.', isCorrect: false, feedback: '"Les" er flertall indirekte objekt.' },
      ],
      solution: '"El libro" er direkte objekt hankjønn entall, så det erstattes med "lo".',
    },
    {
      id: 'spansk-2-4-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Fullfør: "Yo doy el regalo a María" → "Yo ___ ___ doy."',
      options: [
        { id: 'a', text: 'se lo', isCorrect: true },
        { id: 'b', text: 'le lo', isCorrect: false, feedback: '"Le lo" er grammatisk feil - "le" blir "se" foran "lo".' },
        { id: 'c', text: 'lo le', isCorrect: false, feedback: 'Rekkefølgen er feil - OI kommer før OD.' },
        { id: 'd', text: 'la le', isCorrect: false, feedback: '"Regalo" er hankjønn (lo), ikke hunkjønn (la).' },
      ],
      solution: '"A María" → "le" → "se" (foran lo), "el regalo" → "lo". Rekkefølge: OI + OD = "se lo".',
    },
    {
      id: 'spansk-2-4-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvor plasseres pronomenet i "Quiero ver (la película)"?',
      options: [
        { id: 'a', text: 'Quiero verla / La quiero ver', isCorrect: true },
        { id: 'b', text: 'Quierola ver', isCorrect: false, feedback: 'Pronomenet festes til infinitiven eller settes foran det bøyde verbet.' },
        { id: 'c', text: 'Quiero la ver', isCorrect: false, feedback: 'Pronomenet må stå enten foran "quiero" eller etter "ver".' },
        { id: 'd', text: 'La quiero a ver', isCorrect: false, feedback: '"A" trengs ikke her.' },
      ],
      solution: 'Med infinitiv kan pronomenet enten festes til infinitiven (verla) eller settes foran det bøyde verbet (la quiero).',
    },
    {
      id: 'spansk-2-4-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Velg riktig relativpronomen: "La chica ___ conocí ayer es mi vecina."',
      options: [
        { id: 'a', text: 'que', isCorrect: true },
        { id: 'b', text: 'quien', isCorrect: false, feedback: '"Quien" brukes vanligvis etter preposisjon.' },
        { id: 'c', text: 'lo que', isCorrect: false, feedback: '"Lo que" betyr "det som" og refererer ikke til personer.' },
        { id: 'd', text: 'cuya', isCorrect: false, feedback: '"Cuya" viser eiendom (hvis).' },
      ],
      solution: '"Que" brukes for personer som direkte objekt: "La chica que conocí" (jenta som jeg møtte).',
    },
    {
      id: 'spansk-2-4-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Velg riktig: "No entiendo ___ dices."',
      options: [
        { id: 'a', text: 'lo que', isCorrect: true },
        { id: 'b', text: 'que', isCorrect: false, feedback: '"Que" alene kan ikke stå som objekt uten antecedent.' },
        { id: 'c', text: 'el que', isCorrect: false, feedback: '"El que" refererer til en spesifikk ting, ikke "det som".' },
        { id: 'd', text: 'quien', isCorrect: false, feedback: '"Quien" refererer til personer.' },
      ],
      solution: '"Lo que" betyr "det som" eller "hva" og brukes når vi refererer til noe uspesifisert.',
    },
  ],
};

// ============================================================================
// Kapittel 5: Literatura hispanohablante
// ============================================================================

export const CHAPTER_SPANSK_2_5: TextbookChapter = {
  id: 'spansk-2-5',
  courseId: 'spansk-2',
  chapterNumber: '5',
  title: 'Literatura hispanohablante',
  description: 'Utforsk spansk og latinamerikansk litteratur gjennom utdrag fra klassiske og moderne forfattere.',
  estimatedMinutes: 70,
  competenceGoals: [
    'lese og analysere litterære tekster fra spansktalende land',
    'reflektere over kulturelle og historiske kontekster i litteratur',
  ],
  content: [
    {
      id: 'spansk-2-5-intro',
      type: 'text',
      content: `Spanskspråklig litteratur er rik og mangfoldig, med bidrag fra både Spania og Latin-Amerika. Fra middelalderen til moderne tid har spansktalende forfattere skapt verdenskjente verk. La oss utforske noen viktige forfattere og litterære bevegelser.`,
    },
    {
      id: 'spansk-2-5-text-1',
      type: 'text',
      content: `**Klassisk spansk litteratur**

**Miguel de Cervantes (1547-1616)**
Forfatteren av *Don Quijote de la Mancha* (1605/1615), regnet som den første moderne romanen. Verket forteller om en ridder som leser så mange ridderromaner at han mister fatningen og drar ut på eventyr.

*Sitat:*
> "En un lugar de la Mancha, de cuyo nombre no quiero acordarme..."
> (Et sted i La Mancha, hvis navn jeg ikke vil huske...)

**Federico García Lorca (1898-1936)**
Poet og dramatiker fra Granada, kjent for sine poetiske dramaer og diktsamlinger. Hans mest kjente verk inkluderer *Bodas de sangre* (Blodbryllup) og *La casa de Bernarda Alba*.`,
    },
    {
      id: 'spansk-2-5-text-2',
      type: 'text',
      content: `**Latinamerikansk litteratur**

**Gabriel García Márquez (1927-2014)** - Colombia
Nobelprisvinner i litteratur (1982), kjent for **magisk realisme**. Hans mesterverk *Cien años de soledad* (Hundre års ensomhet) følger familien Buendía gjennom generasjoner.

*Sitat:*
> "Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo."
> (Mange år senere, foran eksekusjonspelotongen, skulle oberst Aureliano Buendía huske den fjerne ettermiddagen da faren hans tok ham med for å se is.)

**Pablo Neruda (1904-1973)** - Chile
Nobelprisvinner i litteratur (1971), elsket for sine kjærlighetsdikt (*Veinte poemas de amor*) og politiske poesi.

**Isabel Allende (1942-)** - Chile
Kjent for romaner som *La casa de los espíritus* (Åndenes hus), også i tradisjonen av magisk realisme.`,
    },
    {
      id: 'spansk-2-5-def-1',
      type: 'definition',
      title: 'El realismo mágico (magisk realisme)',
      content: `Magisk realisme er en litterær stil der overnaturlige elementer presenteres som normale deler av hverdagen. Stilen er spesielt knyttet til latinamerikansk litteratur fra 1960-70-tallet ("El Boom"). Forfattere som García Márquez, Allende og Carpentier brukte denne teknikken for å utforske latinamerikansk identitet og historie.`,
    },
    {
      id: 'spansk-2-5-text-3',
      type: 'text',
      content: `**Litterære sjangre og termer**

| Spansk | Norsk |
|--------|-------|
| la novela | romanen |
| el cuento | novellen/fortellingen |
| la poesía | poesien |
| el poema | diktet |
| el drama / la obra de teatro | dramaet/skuespillet |
| el personaje | karakteren/figuren |
| el narrador | fortelleren |
| la trama | handlingen/plottet |
| el tema | temaet |
| el ambiente | miljøet/stemningen |`,
    },
    {
      id: 'spansk-2-5-example-1',
      type: 'example',
      title: 'Analyse av et litterært utdrag',
      content: `**Tekst fra "La casa de los espíritus" av Isabel Allende:**

*"Clara era capaz de predecir el futuro, de adivinar la suerte ajena y de leer los sueños."*

(Clara var i stand til å forutsi fremtiden, gjette andres skjebne og lese drømmer.)

**Analyse:**
- **Tema:** Overnaturlige evner som del av hverdagen
- **Stil:** Magisk realisme - det ekstraordinære presenteres som normalt
- **Virkning:** Leseren aksepterer det magiske som del av virkeligheten`,
    },
  ],
  exercises: [
    {
      id: 'spansk-2-5-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvem skrev "Don Quijote de la Mancha"?',
      options: [
        { id: 'a', text: 'Miguel de Cervantes', isCorrect: true },
        { id: 'b', text: 'Gabriel García Márquez', isCorrect: false, feedback: 'García Márquez skrev "Cien años de soledad".' },
        { id: 'c', text: 'Federico García Lorca', isCorrect: false, feedback: 'García Lorca var poet og dramatiker.' },
        { id: 'd', text: 'Pablo Neruda', isCorrect: false, feedback: 'Neruda var chilensk poet.' },
      ],
      solution: 'Miguel de Cervantes skrev "Don Quijote de la Mancha" (1605/1615), regnet som den første moderne romanen.',
    },
    {
      id: 'spansk-2-5-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva kjennetegner "realismo mágico" (magisk realisme)?',
      options: [
        { id: 'a', text: 'Overnaturlige elementer presenteres som normale deler av hverdagen', isCorrect: true },
        { id: 'b', text: 'Bare realistiske hendelser skildres', isCorrect: false, feedback: 'Magisk realisme inkluderer overnaturlige elementer.' },
        { id: 'c', text: 'Handlingen foregår alltid i fantasiland', isCorrect: false, feedback: 'Handlingen foregår ofte i virkelige steder.' },
        { id: 'd', text: 'Det er alltid lykkelige slutter', isCorrect: false, feedback: 'Sluttene varierer og er ofte tragiske.' },
      ],
      solution: 'Magisk realisme blander det fantastiske med det hverdagslige, der overnaturlige hendelser behandles som helt normale.',
    },
    {
      id: 'spansk-2-5-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket land kommer Gabriel García Márquez fra?',
      options: [
        { id: 'a', text: 'Colombia', isCorrect: true },
        { id: 'b', text: 'Chile', isCorrect: false, feedback: 'Chile er hjemlandet til Neruda og Allende.' },
        { id: 'c', text: 'México', isCorrect: false, feedback: 'García Márquez var fra Colombia.' },
        { id: 'd', text: 'Argentina', isCorrect: false, feedback: 'García Márquez var fra Colombia.' },
      ],
      solution: 'Gabriel García Márquez var fra Colombia og vant Nobelprisen i litteratur i 1982.',
    },
    {
      id: 'spansk-2-5-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva betyr "el narrador" på norsk?',
      options: [
        { id: 'a', text: 'Fortelleren', isCorrect: true },
        { id: 'b', text: 'Hovedpersonen', isCorrect: false, feedback: 'Hovedpersonen er "el protagonista".' },
        { id: 'c', text: 'Forfatteren', isCorrect: false, feedback: 'Forfatteren er "el autor/la autora".' },
        { id: 'd', text: 'Leseren', isCorrect: false, feedback: 'Leseren er "el lector/la lectora".' },
      ],
      solution: '"El narrador" betyr fortelleren - den som forteller historien, som kan være forskjellig fra forfatteren.',
    },
    {
      id: 'spansk-2-5-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken forfatter er IKKE fra Chile?',
      options: [
        { id: 'a', text: 'Gabriel García Márquez', isCorrect: true },
        { id: 'b', text: 'Pablo Neruda', isCorrect: false, feedback: 'Neruda var fra Chile.' },
        { id: 'c', text: 'Isabel Allende', isCorrect: false, feedback: 'Allende er fra Chile.' },
        { id: 'd', text: 'Alle de nevnte er fra Chile', isCorrect: false, feedback: 'García Márquez var fra Colombia.' },
      ],
      solution: 'Gabriel García Márquez var fra Colombia. Pablo Neruda og Isabel Allende er begge fra Chile.',
    },
  ],
};

// ============================================================================
// Kapittel 6: Cultura y sociedad
// ============================================================================

export const CHAPTER_SPANSK_2_6: TextbookChapter = {
  id: 'spansk-2-6',
  courseId: 'spansk-2',
  chapterNumber: '6',
  title: 'Cultura y sociedad',
  description: 'Utforsk kulturelle tradisjoner, sosiale skikker og hverdagsliv i spansktalende land.',
  estimatedMinutes: 65,
  competenceGoals: [
    'sammenligne kulturelle uttrykk i spansktalende land med egen kultur',
    'reflektere over sosiale og kulturelle forhold i den spansktalende verden',
  ],
  content: [
    {
      id: 'spansk-2-6-intro',
      type: 'text',
      content: `Den spansktalende verden strekker seg over flere kontinenter og inkluderer et enormt mangfold av kulturer og tradisjoner. Fra flamenco i Spania til tango i Argentina, fra Día de los Muertos i Mexico til karnevalet i Río - la oss utforske denne rike kulturarven.`,
    },
    {
      id: 'spansk-2-6-text-1',
      type: 'text',
      content: `**Fiestas y tradiciones (Fester og tradisjoner)**

**Spania:**
- **La Semana Santa** (Påskeuka): Religiøse prosesjoner med statuer av Jesus og Maria
- **Los Sanfermines** (Pamplona): Berømt for "el encierro" - løping med okser
- **La Tomatina** (Buñol): Verdens største tomatkamp
- **Las Fallas** (Valencia): Brenning av gigantiske skulpturer

**Mexico:**
- **El Día de los Muertos** (2. november): Feiring av de døde med altere, blomster og sukkerskaller
- **El Cinco de Mayo**: Feiring av seier over Frankrike i 1862

**Andre land:**
- **El Carnaval** (Brasil, men også i mange spansktalende land)
- **El Día de la Independencia** (varierer etter land)`,
    },
    {
      id: 'spansk-2-6-text-2',
      type: 'text',
      content: `**La vida cotidiana (Hverdagslivet)**

**Måltider:**
- **El desayuno** (frokost): Ofte lett, kaffe og brød
- **El almuerzo/la comida** (lunsj): Hovedmåltidet, ofte mellom 14-16
- **La merienda** (mellommåltid): Kaffe og noe søtt om ettermiddagen
- **La cena** (middag/kveldsmat): Ofte sent, rundt 21-22

**La siesta:**
I mange spansktalende land er det tradisjon med hvile etter lunsj, selv om dette er mindre vanlig i moderne storbyer.

**Los horarios:**
- Butikker kan ha stengt mellom 14-17 (siesta)
- Kveldsmåltidet spises ofte etter kl. 21
- Fester og sosiale arrangementer starter sent`,
    },
    {
      id: 'spansk-2-6-def-1',
      type: 'definition',
      title: 'El tuteo vs. el voseo',
      content: `I ulike spansktalende land brukes ulike pronomen for "du":

**Tuteo** (Spania, Mexico, det meste av Latin-Amerika):
- tú hablas, tú comes, tú vives

**Voseo** (Argentina, Uruguay, deler av Mellom-Amerika):
- vos hablás, vos comés, vos vivís

Begge formene er korrekte, men reflekterer regional variasjon.`,
    },
    {
      id: 'spansk-2-6-text-3',
      type: 'text',
      content: `**Música y baile (Musikk og dans)**

| Stil | Opprinnelse | Kjennetegn |
|------|-------------|------------|
| Flamenco | Spania (Andalucía) | Intens gitarspill, klapping, dans med tapping |
| Tango | Argentina/Uruguay | Lidenskapelig pardans, melankoli |
| Salsa | Cuba/Puerto Rico | Rask rytme, festlig, populær i hele verden |
| Mariachi | Mexico | Orkester med strykere, trompeter, tradisjonelle drakter |
| Reggaetón | Puerto Rico | Moderne, urban, elektronisk beat |
| Cumbia | Colombia | Tradisjonell folkloristisk dans og musikk |`,
    },
    {
      id: 'spansk-2-6-example-1',
      type: 'example',
      title: 'Sammenligning: Norsk vs. spansk kultur',
      content: `| Aspekt | Norge | Spania/Latin-Amerika |
|--------|-------|----------------------|
| Lunsjtid | 11:30-12:30 | 14:00-16:00 |
| Middagstid | 16:00-18:00 | 21:00-23:00 |
| Tiltale | Ofte uformell (du) | Formell (usted) vanligere med fremmede |
| Fysisk kontakt | Reservert | Mer fysisk (klemmer, kinn-kyss) |
| Punktlighet | Viktig | Mer fleksibel ("la hora latina") |`,
    },
  ],
  exercises: [
    {
      id: 'spansk-2-6-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva feires på "El Día de los Muertos"?',
      options: [
        { id: 'a', text: 'De døde minnes og feires', isCorrect: true },
        { id: 'b', text: 'Uavhengighetsdagen', isCorrect: false, feedback: 'Det er "El Día de la Independencia".' },
        { id: 'c', text: 'Nyttår', isCorrect: false, feedback: 'Nyttår er "Año Nuevo".' },
        { id: 'd', text: 'Karnevalet', isCorrect: false, feedback: 'Karnevalet er en annen feiring.' },
      ],
      solution: 'El Día de los Muertos (2. november) er en meksikansk tradisjon der man minnes og feirer avdøde familiemedlemmer.',
    },
    {
      id: 'spansk-2-6-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken dansestil kommer fra Argentina?',
      options: [
        { id: 'a', text: 'Tango', isCorrect: true },
        { id: 'b', text: 'Flamenco', isCorrect: false, feedback: 'Flamenco kommer fra Spania (Andalucía).' },
        { id: 'c', text: 'Salsa', isCorrect: false, feedback: 'Salsa kommer fra Cuba/Puerto Rico.' },
        { id: 'd', text: 'Cumbia', isCorrect: false, feedback: 'Cumbia kommer fra Colombia.' },
      ],
      solution: 'Tango oppsto i Argentina og Uruguay på slutten av 1800-tallet.',
    },
    {
      id: 'spansk-2-6-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er "voseo"?',
      options: [
        { id: 'a', text: 'Bruk av "vos" i stedet for "tú" i noen land', isCorrect: true },
        { id: 'b', text: 'En type dans', isCorrect: false, feedback: 'Voseo er et lingvistisk fenomen.' },
        { id: 'c', text: 'En meksikansk tradisjon', isCorrect: false, feedback: 'Voseo er mest vanlig i Argentina.' },
        { id: 'd', text: 'Formell tiltale', isCorrect: false, feedback: 'Formell tiltale er "usted".' },
      ],
      solution: 'Voseo er bruk av pronomenet "vos" i stedet for "tú", vanlig i Argentina, Uruguay og deler av Mellom-Amerika.',
    },
    {
      id: 'spansk-2-6-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Når spises typisk "la cena" i Spania?',
      options: [
        { id: 'a', text: 'Rundt kl. 21-22', isCorrect: true },
        { id: 'b', text: 'Kl. 17-18', isCorrect: false, feedback: 'Det er mer typisk norsk tid.' },
        { id: 'c', text: 'Kl. 12-13', isCorrect: false, feedback: 'Det er lunsjtid i Norge.' },
        { id: 'd', text: 'Kl. 19-20', isCorrect: false, feedback: 'Det er fortsatt tidlig for spansk kveldsmat.' },
      ],
      solution: 'I Spania spises kveldsmaten (la cena) ofte sent, rundt kl. 21-22 eller senere.',
    },
    {
      id: 'spansk-2-6-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvor feires "La Tomatina"?',
      options: [
        { id: 'a', text: 'Buñol, Spania', isCorrect: true },
        { id: 'b', text: 'Pamplona, Spania', isCorrect: false, feedback: 'I Pamplona feires Los Sanfermines.' },
        { id: 'c', text: 'Valencia, Spania', isCorrect: false, feedback: 'I Valencia feires Las Fallas.' },
        { id: 'd', text: 'Mexico City, Mexico', isCorrect: false, feedback: 'La Tomatina er en spansk festival.' },
      ],
      solution: 'La Tomatina feires i Buñol (nær Valencia) i Spania, der deltakerne kaster tomater på hverandre.',
    },
  ],
};

// ============================================================================
// Kapittel 7: El mundo laboral
// ============================================================================

export const CHAPTER_SPANSK_2_7: TextbookChapter = {
  id: 'spansk-2-7',
  courseId: 'spansk-2',
  chapterNumber: '7',
  title: 'El mundo laboral',
  description: 'Lær vokabular og uttrykk knyttet til arbeidslivet, jobbsøking og karriere.',
  estimatedMinutes: 70,
  competenceGoals: [
    'kommunisere om arbeidsliv og karriere',
    'skrive og forstå jobbsøknader og CV på spansk',
  ],
  content: [
    {
      id: 'spansk-2-7-intro',
      type: 'text',
      content: `I en globalisert verden er det nyttig å kunne snakke om arbeid og karriere på spansk. Enten du skal jobbe i et spansktalende land, med spansktalende kolleger, eller bare vil utvide ordforrådet ditt - dette kapittelet gir deg verktøyene du trenger.`,
    },
    {
      id: 'spansk-2-7-text-1',
      type: 'text',
      content: `**Vocabulario del trabajo (Arbeidsvokabular)**

| Spansk | Norsk |
|--------|-------|
| el trabajo | jobben/arbeidet |
| el empleo | stillingen |
| la empresa | bedriften |
| el/la jefe/a | sjefen |
| el/la empleado/a | den ansatte |
| el/la compañero/a | kollegaen |
| el sueldo / el salario | lønnen |
| el contrato | kontrakten |
| la jornada laboral | arbeidsdagen |
| el horario | arbeidstiden |
| las vacaciones | ferien |
| la jubilación | pensjoneringen |`,
    },
    {
      id: 'spansk-2-7-text-2',
      type: 'text',
      content: `**Yrker (Las profesiones)**

| Spansk | Norsk |
|--------|-------|
| el/la abogado/a | advokaten |
| el/la médico/a | legen |
| el/la enfermero/a | sykepleieren |
| el/la profesor/a | læreren |
| el/la ingeniero/a | ingeniøren |
| el/la programador/a | programmereren |
| el/la periodista | journalisten |
| el/la arquitecto/a | arkitekten |
| el/la contable | regnskapsføreren |
| el/la vendedor/a | selgeren |
| el/la cocinero/a | kokken |
| el/la camarero/a | servitøren |`,
    },
    {
      id: 'spansk-2-7-text-3',
      type: 'text',
      content: `**Buscar trabajo (Å søke jobb)**

| Spansk | Norsk |
|--------|-------|
| buscar trabajo | å søke jobb |
| el currículum / el CV | CVen |
| la carta de presentación | søknadsbrevet |
| la entrevista de trabajo | jobbintervjuet |
| la oferta de empleo | stillingsannonsen |
| los requisitos | kravene |
| la experiencia | erfaringen |
| la formación | utdannelsen |
| las habilidades | ferdighetene |
| contratar | å ansette |
| despedir | å si opp/sparke |`,
    },
    {
      id: 'spansk-2-7-def-1',
      type: 'definition',
      title: 'Typer av arbeid',
      content: `| Spansk | Norsk |
|--------|-------|
| trabajo a tiempo completo | heltidsjobb |
| trabajo a tiempo parcial | deltidsjobb |
| trabajo temporal | midlertidig jobb |
| trabajo fijo | fast jobb |
| trabajo por cuenta propia | selvstendig næringsdrivende |
| trabajo remoto / teletrabajo | hjemmekontor/fjernarbeid |
| prácticas | praksis/internship |`,
    },
    {
      id: 'spansk-2-7-example-1',
      type: 'example',
      title: 'Presentere seg i et jobbintervju',
      content: `**Dialog:**

*Entrevistador:* Buenos días. Por favor, preséntese.
*Candidato:* Buenos días. Me llamo Carlos López. Tengo 25 años y soy ingeniero informático. Acabo de terminar mis estudios en la Universidad de Madrid. Tengo experiencia en programación y he realizado prácticas en una empresa de software durante seis meses.

**Oversettelse:**
*Intervjuer:* God dag. Vennligst presenter deg selv.
*Kandidat:* God dag. Jeg heter Carlos López. Jeg er 25 år og er dataingeniør. Jeg har nettopp fullført studiene mine ved universitetet i Madrid. Jeg har erfaring med programmering og har gjennomført praksis i et programvareselskap i seks måneder.`,
    },
    {
      id: 'spansk-2-7-tip-1',
      type: 'tip',
      title: 'Nyttige uttrykk for intervju',
      content: `- *Tengo experiencia en...* (Jeg har erfaring med...)
- *Soy responsable, organizado/a y trabajo bien en equipo.* (Jeg er ansvarlig, organisert og jobber godt i team.)
- *Me gustaría trabajar en esta empresa porque...* (Jeg vil gjerne jobbe i denne bedriften fordi...)
- *¿Cuáles son las responsabilidades del puesto?* (Hva er oppgavene i stillingen?)`,
    },
  ],
  exercises: [
    {
      id: 'spansk-2-7-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "el sueldo"?',
      options: [
        { id: 'a', text: 'Lønnen', isCorrect: true },
        { id: 'b', text: 'Jobben', isCorrect: false, feedback: 'Jobben er "el trabajo".' },
        { id: 'c', text: 'Sjefen', isCorrect: false, feedback: 'Sjefen er "el/la jefe/a".' },
        { id: 'd', text: 'Kollegaen', isCorrect: false, feedback: 'Kollegaen er "el/la compañero/a".' },
      ],
      solution: '"El sueldo" eller "el salario" betyr lønnen.',
    },
    {
      id: 'spansk-2-7-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er "la carta de presentación" på norsk?',
      options: [
        { id: 'a', text: 'Søknadsbrevet', isCorrect: true },
        { id: 'b', text: 'CVen', isCorrect: false, feedback: 'CVen er "el currículum".' },
        { id: 'c', text: 'Kontrakten', isCorrect: false, feedback: 'Kontrakten er "el contrato".' },
        { id: 'd', text: 'Stillingsannonsen', isCorrect: false, feedback: 'Stillingsannonsen er "la oferta de empleo".' },
      ],
      solution: '"La carta de presentación" er søknadsbrevet som følger med CVen.',
    },
    {
      id: 'spansk-2-7-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket ord betyr "sykepleier"?',
      options: [
        { id: 'a', text: 'enfermero/a', isCorrect: true },
        { id: 'b', text: 'médico/a', isCorrect: false, feedback: '"Médico/a" er lege.' },
        { id: 'c', text: 'abogado/a', isCorrect: false, feedback: '"Abogado/a" er advokat.' },
        { id: 'd', text: 'contable', isCorrect: false, feedback: '"Contable" er regnskapsfører.' },
      ],
      solution: '"Enfermero" (m) / "enfermera" (f) betyr sykepleier.',
    },
    {
      id: 'spansk-2-7-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva betyr "trabajo a tiempo parcial"?',
      options: [
        { id: 'a', text: 'Deltidsjobb', isCorrect: true },
        { id: 'b', text: 'Heltidsjobb', isCorrect: false, feedback: 'Heltidsjobb er "trabajo a tiempo completo".' },
        { id: 'c', text: 'Midlertidig jobb', isCorrect: false, feedback: 'Midlertidig jobb er "trabajo temporal".' },
        { id: 'd', text: 'Fast jobb', isCorrect: false, feedback: 'Fast jobb er "trabajo fijo".' },
      ],
      solution: '"Trabajo a tiempo parcial" betyr deltidsjobb - arbeid med færre timer enn fulltid.',
    },
    {
      id: 'spansk-2-7-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvordan spør du "Hva er oppgavene i stillingen?" på spansk?',
      options: [
        { id: 'a', text: '¿Cuáles son las responsabilidades del puesto?', isCorrect: true },
        { id: 'b', text: '¿Cuánto es el sueldo?', isCorrect: false, feedback: 'Det spør om lønnen.' },
        { id: 'c', text: '¿Dónde está la empresa?', isCorrect: false, feedback: 'Det spør om bedriftens beliggenhet.' },
        { id: 'd', text: '¿Cuándo empiezo?', isCorrect: false, feedback: 'Det spør om når man begynner.' },
      ],
      solution: '"¿Cuáles son las responsabilidades del puesto?" er en relevant spørsmål å stille i et jobbintervju.',
    },
  ],
};

// ============================================================================
// Kapittel 8: Medio ambiente y sociedad
// ============================================================================

export const CHAPTER_SPANSK_2_8: TextbookChapter = {
  id: 'spansk-2-8',
  courseId: 'spansk-2',
  chapterNumber: '8',
  title: 'Medio ambiente y sociedad',
  description: 'Diskuter miljøspørsmål og samfunnsutfordringer på spansk.',
  estimatedMinutes: 75,
  competenceGoals: [
    'uttrykke meninger om miljø- og samfunnsspørsmål',
    'forstå og diskutere aktuelle temaer på spansk',
  ],
  content: [
    {
      id: 'spansk-2-8-intro',
      type: 'text',
      content: `Miljø og samfunnsspørsmål er viktige temaer i dagens verden. I dette kapittelet lærer du å diskutere klimaendringer, bærekraft og sosiale utfordringer på spansk. Du vil også lære uttrykk for å gi din mening og argumentere for ulike standpunkter.`,
    },
    {
      id: 'spansk-2-8-text-1',
      type: 'text',
      content: `**Vocabulario del medio ambiente (Miljøvokabular)**

| Spansk | Norsk |
|--------|-------|
| el medio ambiente | miljøet |
| el cambio climático | klimaendringene |
| el calentamiento global | global oppvarming |
| la contaminación | forurensningen |
| los residuos / la basura | avfall/søppel |
| el reciclaje | resirkulering |
| las energías renovables | fornybar energi |
| la energía solar | solenergi |
| la energía eólica | vindenergi |
| la deforestación | avskogingen |
| la biodiversidad | biologisk mangfold |
| las especies en peligro | truede arter |`,
    },
    {
      id: 'spansk-2-8-text-2',
      type: 'text',
      content: `**Problemas sociales (Sosiale problemer)**

| Spansk | Norsk |
|--------|-------|
| la pobreza | fattigdom |
| la desigualdad | ulikhet |
| el desempleo | arbeidsledighet |
| la inmigración | innvandring |
| los derechos humanos | menneskerettigheter |
| la discriminación | diskriminering |
| la igualdad de género | likestilling |
| la educación | utdanning |
| la sanidad | helsevesen |
| la vivienda | bolig |`,
    },
    {
      id: 'spansk-2-8-def-1',
      type: 'definition',
      title: 'Uttrykk for meninger',
      content: `**Å uttrykke enighet:**
- *Estoy de acuerdo con...* (Jeg er enig med...)
- *Tienes razón.* (Du har rett.)
- *Es verdad que...* (Det er sant at...)

**Å uttrykke uenighet:**
- *No estoy de acuerdo.* (Jeg er ikke enig.)
- *No creo que sea así.* (Jeg tror ikke det er slik.)
- *Depende de...* (Det kommer an på...)

**Å uttrykke mening:**
- *En mi opinión...* (Etter min mening...)
- *Creo que...* (Jeg tror at...)
- *Me parece que...* (Det virker for meg som...)`,
    },
    {
      id: 'spansk-2-8-text-3',
      type: 'text',
      content: `**Acciones para el medio ambiente (Miljøtiltak)**

| Spansk | Norsk |
|--------|-------|
| reciclar | å resirkulere |
| reutilizar | å gjenbruke |
| reducir | å redusere |
| ahorrar energía | å spare energi |
| usar transporte público | å bruke offentlig transport |
| consumir productos locales | å kjøpe lokale produkter |
| evitar el plástico | å unngå plast |
| plantar árboles | å plante trær |
| proteger la naturaleza | å beskytte naturen |`,
    },
    {
      id: 'spansk-2-8-example-1',
      type: 'example',
      title: 'Diskusjon om miljø',
      content: `**Dialog:**

*A:* En mi opinión, el cambio climático es el problema más grave de nuestro tiempo.
*B:* Estoy de acuerdo. Creo que todos debemos hacer algo para reducir nuestra huella de carbono.
*A:* Sí, pero también creo que los gobiernos deben tomar medidas más fuertes.
*B:* Tienes razón. Es necesario invertir más en energías renovables.

**Oversettelse:**
*A:* Etter min mening er klimaendringene det mest alvorlige problemet i vår tid.
*B:* Jeg er enig. Jeg tror alle må gjøre noe for å redusere vårt karbonavtrykk.
*A:* Ja, men jeg tror også at regjeringene må ta sterkere grep.
*B:* Du har rett. Det er nødvendig å investere mer i fornybar energi.`,
    },
    {
      id: 'spansk-2-8-tip-1',
      type: 'tip',
      title: 'Argumentasjonsstrukturer',
      content: `For å argumentere effektivt:
1. **Påstand:** *Creo que...* (Jeg mener at...)
2. **Begrunnelse:** *porque...* (fordi...)
3. **Eksempel:** *Por ejemplo...* (For eksempel...)
4. **Konklusjon:** *Por eso...* (Derfor...)`,
    },
  ],
  exercises: [
    {
      id: 'spansk-2-8-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "el reciclaje"?',
      options: [
        { id: 'a', text: 'Resirkulering', isCorrect: true },
        { id: 'b', text: 'Forurensning', isCorrect: false, feedback: 'Forurensning er "la contaminación".' },
        { id: 'c', text: 'Avfall', isCorrect: false, feedback: 'Avfall er "los residuos" eller "la basura".' },
        { id: 'd', text: 'Energi', isCorrect: false, feedback: 'Energi er "la energía".' },
      ],
      solution: '"El reciclaje" betyr resirkulering - å gjenvinne materialer.',
    },
    {
      id: 'spansk-2-8-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan sier du "Jeg er enig med deg"?',
      options: [
        { id: 'a', text: 'Estoy de acuerdo contigo', isCorrect: true },
        { id: 'b', text: 'No estoy de acuerdo', isCorrect: false, feedback: 'Det betyr "Jeg er ikke enig".' },
        { id: 'c', text: 'En mi opinión', isCorrect: false, feedback: 'Det betyr "Etter min mening".' },
        { id: 'd', text: 'Creo que no', isCorrect: false, feedback: 'Det betyr "Jeg tror ikke det".' },
      ],
      solution: '"Estoy de acuerdo contigo" brukes for å uttrykke enighet med noen.',
    },
    {
      id: 'spansk-2-8-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er "la energía eólica"?',
      options: [
        { id: 'a', text: 'Vindenergi', isCorrect: true },
        { id: 'b', text: 'Solenergi', isCorrect: false, feedback: 'Solenergi er "la energía solar".' },
        { id: 'c', text: 'Atomenergi', isCorrect: false, feedback: 'Atomenergi er "la energía nuclear".' },
        { id: 'd', text: 'Vannkraft', isCorrect: false, feedback: 'Vannkraft er "la energía hidráulica".' },
      ],
      solution: '"La energía eólica" kommer fra "Eolo", vindguden, og betyr vindenergi.',
    },
    {
      id: 'spansk-2-8-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Fullfør: "___ mi opinión, debemos ___ el consumo de plástico." (Etter min mening må vi redusere plastforbruket.)',
      options: [
        { id: 'a', text: 'En / reducir', isCorrect: true },
        { id: 'b', text: 'De / reciclar', isCorrect: false, feedback: '"Reciclar" betyr å resirkulere, ikke redusere.' },
        { id: 'c', text: 'Por / aumentar', isCorrect: false, feedback: '"Aumentar" betyr å øke.' },
        { id: 'd', text: 'Con / reutilizar', isCorrect: false, feedback: '"Reutilizar" betyr å gjenbruke.' },
      ],
      solution: '"En mi opinión" = etter min mening, "reducir" = å redusere.',
    },
    {
      id: 'spansk-2-8-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva betyr "la huella de carbono"?',
      options: [
        { id: 'a', text: 'Karbonavtrykk', isCorrect: true },
        { id: 'b', text: 'Karbondioksid', isCorrect: false, feedback: 'Karbondioksid er "el dióxido de carbono".' },
        { id: 'c', text: 'Fotavtrykk', isCorrect: false, feedback: '"Huella" betyr avtrykk, men her med "carbono" blir det karbonavtrykk.' },
        { id: 'd', text: 'Karbonskatt', isCorrect: false, feedback: 'Karbonskatt ville være "el impuesto de carbono".' },
      ],
      solution: '"La huella de carbono" er et mål på hvor mye CO2 en person eller aktivitet slipper ut.',
    },
  ],
};

// ============================================================================
// Kapittel 9: Historia de España y Latinoamérica
// ============================================================================

export const CHAPTER_SPANSK_2_9: TextbookChapter = {
  id: 'spansk-2-9',
  courseId: 'spansk-2',
  chapterNumber: '9',
  title: 'Historia de España y Latinoamérica',
  description: 'Utforsk viktige historiske hendelser og perioder i Spania og Latin-Amerika.',
  estimatedMinutes: 80,
  competenceGoals: [
    'forstå hovedtrekk i spanskspråklig historie',
    'reflektere over historiske hendelsers betydning for dagens samfunn',
  ],
  content: [
    {
      id: 'spansk-2-9-intro',
      type: 'text',
      content: `For å forstå den spansktalende verden i dag, er det viktig å kjenne til historien. Fra maurerne i Spania til uavhengighetsbevegelsene i Latin-Amerika, fra den spanske borgerkrigen til diktaturene i Sør-Amerika - historien former fortsatt kulturen og samfunnet i disse landene.`,
    },
    {
      id: 'spansk-2-9-text-1',
      type: 'text',
      content: `**Historia de España (Spanias historie)**

**711-1492: Al-Ándalus (Maurisk Spania)**
- Maurerne (muslimene) erobret store deler av Den iberiske halvøya
- Kulturell blomstringstid med vitenskap, kunst og arkitektur
- La Reconquista: Den gradvise kristne gjenerobringen

**1492: Et skjellsettende år**
- Fullføringen av Reconquista (Granada falt)
- Columbus "oppdaget" Amerika
- Utvisning av jøder fra Spania

**1500-1700-tallet: Det spanske imperiet**
- Spania ble verdens mektigste rike
- Kolonisering av store deler av Amerika
- "El Siglo de Oro" - gullalderen for kunst og litteratur`,
    },
    {
      id: 'spansk-2-9-text-2',
      type: 'text',
      content: `**1900-tallet i Spania**

**1936-1939: La Guerra Civil Española (Den spanske borgerkrigen)**
- Konflikt mellom republikanerne og nasjonalistene (under Franco)
- Internasjonale brigader kjempet for republikken
- Francos nasjonalister vant med støtte fra Hitler og Mussolini

**1939-1975: La dictadura de Franco**
- Autoritært styre under general Francisco Franco
- Undertrykkelse av regional kultur og språk (katalansk, baskisk)
- Økonomisk isolasjon, senere modernisering

**1975-i dag: La democracia**
- Kong Juan Carlos I ledet overgangen til demokrati
- 1978: Ny demokratisk grunnlov
- Spania ble medlem av EU (1986)`,
    },
    {
      id: 'spansk-2-9-text-3',
      type: 'text',
      content: `**Historia de Latinoamérica**

**1492-1800-tallet: Kolonitiden**
- Spansk erobring av azteker- og inkariket
- Blanding av europeisk, urfolks- og afrikansk kultur
- Utbytting av naturressurser og urfolk

**1810-1830: Uavhengighet**
- Simón Bolívar: "El Libertador" - frigjørde flere land
- José de San Martín: Frigjorde Argentina, Chile, Peru
- Miguel Hidalgo: Startet Mexicos uavhengighetskamp

**1900-tallet: Revolusjoner og diktaturer**
- Den meksikanske revolusjonen (1910-1920)
- Den cubanske revolusjonen (1959) - Fidel Castro
- Militærdiktaturer i Argentina, Chile, Brasil
- Demokratisering fra 1980-tallet`,
    },
    {
      id: 'spansk-2-9-def-1',
      type: 'definition',
      title: 'Viktige historiske termer',
      content: `| Spansk | Norsk |
|--------|-------|
| la conquista | erobringen |
| la colonización | koloniseringen |
| la independencia | uavhengigheten |
| la revolución | revolusjonen |
| la dictadura | diktaturet |
| la democracia | demokratiet |
| los derechos | rettighetene |
| la libertad | friheten |
| el golpe de estado | statskuppet |`,
    },
    {
      id: 'spansk-2-9-example-1',
      type: 'example',
      title: 'Historisk tidslinje',
      content: `| Årstall | Hendelse |
|---------|----------|
| 711 | Maurerne invaderer Spania |
| 1492 | Columbus når Amerika |
| 1521 | Cortés erobrer aztekerne |
| 1533 | Pizarro erobrer inkariket |
| 1810 | Uavhengighetsbevegelser starter |
| 1898 | Spania mister Cuba og Filippinene |
| 1936 | Den spanske borgerkrigen begynner |
| 1959 | Den cubanske revolusjonen |
| 1975 | Franco dør, demokrati i Spania |`,
    },
  ],
  exercises: [
    {
      id: 'spansk-2-9-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket år "oppdaget" Columbus Amerika?',
      options: [
        { id: 'a', text: '1492', isCorrect: true },
        { id: 'b', text: '1392', isCorrect: false, feedback: 'Det var 100 år tidligere.' },
        { id: 'c', text: '1592', isCorrect: false, feedback: 'Det var 100 år senere.' },
        { id: 'd', text: '1776', isCorrect: false, feedback: 'Det er året for USAs uavhengighet.' },
      ],
      solution: 'I 1492 nådde Columbus Amerika, samme år som Reconquista ble fullført.',
    },
    {
      id: 'spansk-2-9-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvem var "El Libertador"?',
      options: [
        { id: 'a', text: 'Simón Bolívar', isCorrect: true },
        { id: 'b', text: 'Francisco Franco', isCorrect: false, feedback: 'Franco var diktator i Spania.' },
        { id: 'c', text: 'Cristóbal Colón', isCorrect: false, feedback: 'Columbus var oppdagelsesreisende.' },
        { id: 'd', text: 'Hernán Cortés', isCorrect: false, feedback: 'Cortés var conquistador.' },
      ],
      solution: 'Simón Bolívar fikk tilnavnet "El Libertador" fordi han frigjorde flere søramerikanske land fra spansk styre.',
    },
    {
      id: 'spansk-2-9-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva var "La Reconquista"?',
      options: [
        { id: 'a', text: 'Den kristne gjenerobringen av Spania fra maurerne', isCorrect: true },
        { id: 'b', text: 'Spanias erobring av Amerika', isCorrect: false, feedback: 'Det kalles "La Conquista".' },
        { id: 'c', text: 'Den spanske borgerkrigen', isCorrect: false, feedback: 'Det er "La Guerra Civil".' },
        { id: 'd', text: 'Uavhengighetskampene i Latin-Amerika', isCorrect: false, feedback: 'Det er "Las guerras de independencia".' },
      ],
      solution: 'La Reconquista var prosessen der de kristne kongerikene gradvis gjenerobret Den iberiske halvøya fra 711 til 1492.',
    },
    {
      id: 'spansk-2-9-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Når var den spanske borgerkrigen?',
      options: [
        { id: 'a', text: '1936-1939', isCorrect: true },
        { id: 'b', text: '1914-1918', isCorrect: false, feedback: 'Det var første verdenskrig.' },
        { id: 'c', text: '1939-1945', isCorrect: false, feedback: 'Det var andre verdenskrig.' },
        { id: 'd', text: '1959-1962', isCorrect: false, feedback: 'Det var rundt den cubanske revolusjonen.' },
      ],
      solution: 'Den spanske borgerkrigen varte fra 1936 til 1939 og endte med Francos seier.',
    },
    {
      id: 'spansk-2-9-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva betyr "el golpe de estado"?',
      options: [
        { id: 'a', text: 'Statskupp', isCorrect: true },
        { id: 'b', text: 'Statsbudsjettet', isCorrect: false, feedback: 'Statsbudsjettet er "el presupuesto del estado".' },
        { id: 'c', text: 'Valget', isCorrect: false, feedback: 'Valget er "las elecciones".' },
        { id: 'd', text: 'Grunnloven', isCorrect: false, feedback: 'Grunnloven er "la constitución".' },
      ],
      solution: '"El golpe de estado" betyr statskupp - en plutselig, ofte voldelig overtakelse av makten.',
    },
  ],
};

// ============================================================================
// Kapittel 10: Comunicación avanzada
// ============================================================================

export const CHAPTER_SPANSK_2_10: TextbookChapter = {
  id: 'spansk-2-10',
  courseId: 'spansk-2',
  chapterNumber: '10',
  title: 'Comunicación avanzada',
  description: 'Utvikle avanserte kommunikasjonsferdigheter for formelle og uformelle situasjoner.',
  estimatedMinutes: 70,
  competenceGoals: [
    'kommunisere effektivt i ulike sosiale og formelle sammenhenger',
    'tilpasse språkbruk etter situasjon og samtalepartner',
  ],
  content: [
    {
      id: 'spansk-2-10-intro',
      type: 'text',
      content: `God kommunikasjon handler ikke bare om grammatikk og vokabular, men også om å tilpasse språket til situasjonen. I dette kapittelet lærer du å kommunisere effektivt i ulike sammenhenger - fra uformelle samtaler med venner til formelle presentasjoner og debatter.`,
    },
    {
      id: 'spansk-2-10-text-1',
      type: 'text',
      content: `**Registro formal vs. informal (Formelt vs. uformelt språk)**

| Situasjon | Uformelt | Formelt |
|-----------|----------|---------|
| Hilsen | ¡Hola! ¿Qué tal? | Buenos días. ¿Cómo está usted? |
| Takke | ¡Gracias! | Le agradezco mucho. |
| Be om noe | ¿Me pasas...? | ¿Podría usted pasarme...? |
| Beklage | Perdona. | Le pido disculpas. |
| Avskjed | ¡Hasta luego! Chao. | Ha sido un placer. Hasta pronto. |`,
    },
    {
      id: 'spansk-2-10-text-2',
      type: 'text',
      content: `**Conectores del discurso (Diskursmarkører)**

**For å organisere:**
- *En primer lugar...* (For det første...)
- *Por un lado... por otro lado...* (På den ene siden... på den andre siden...)
- *Además...* (Dessuten...)
- *Sin embargo...* (Imidlertid...)
- *Por último...* (Til slutt...)
- *En conclusión...* (Som konklusjon...)

**For å eksemplifisere:**
- *Por ejemplo...* (For eksempel...)
- *Es decir...* (Det vil si...)
- *En otras palabras...* (Med andre ord...)`,
    },
    {
      id: 'spansk-2-10-def-1',
      type: 'definition',
      title: 'Perifrasis verbales (Verbale omskrivninger)',
      content: `Verbale omskrivninger gir nyanserte betydninger:

| Konstruksjon | Betydning | Eksempel |
|--------------|-----------|----------|
| ir a + infinitiv | nær fremtid | Voy a estudiar. (Jeg skal studere.) |
| estar + gerundium | pågående handling | Estoy estudiando. (Jeg holder på å studere.) |
| acabar de + infinitiv | nettopp gjort | Acabo de llegar. (Jeg har nettopp kommet.) |
| volver a + infinitiv | gjøre igjen | Vuelvo a intentarlo. (Jeg prøver igjen.) |
| dejar de + infinitiv | slutte å | Dejé de fumar. (Jeg sluttet å røyke.) |
| seguir + gerundium | fortsette å | Sigo trabajando. (Jeg fortsetter å jobbe.) |`,
    },
    {
      id: 'spansk-2-10-text-3',
      type: 'text',
      content: `**Expresar acuerdo y desacuerdo (Uttrykke enighet og uenighet)**

**Sterk enighet:**
- *Estoy totalmente de acuerdo.* (Jeg er helt enig.)
- *Exactamente.* (Nettopp.)
- *Sin duda.* (Uten tvil.)

**Delvis enighet:**
- *Tienes razón en parte.* (Du har delvis rett.)
- *Hasta cierto punto, sí.* (Til en viss grad, ja.)
- *Depende.* (Det kommer an på.)

**Uenighet:**
- *No estoy de acuerdo.* (Jeg er ikke enig.)
- *No lo veo así.* (Jeg ser det ikke slik.)
- *Perdona, pero creo que...* (Unnskyld, men jeg tror at...)`,
    },
    {
      id: 'spansk-2-10-example-1',
      type: 'example',
      title: 'Formell presentasjon',
      content: `**Struktur:**

*Buenos días a todos. Me gustaría hablarles sobre el cambio climático.*

*En primer lugar, voy a explicar las causas principales. Por un lado, tenemos las emisiones de CO2. Por otro lado, la deforestación contribuye al problema.*

*Además, es importante mencionar los efectos. Por ejemplo, el aumento del nivel del mar.*

*En conclusión, debemos actuar ahora. Les agradezco su atención. ¿Tienen alguna pregunta?*

**Oversettelse:**
God dag alle sammen. Jeg vil gjerne snakke med dere om klimaendringene.

For det første skal jeg forklare hovedårsakene. På den ene siden har vi CO2-utslipp. På den andre siden bidrar avskogingen til problemet.

Dessuten er det viktig å nevne virkningene. For eksempel, stigningen i havnivået.

Som konklusjon må vi handle nå. Takk for oppmerksomheten. Har dere noen spørsmål?`,
    },
    {
      id: 'spansk-2-10-tip-1',
      type: 'tip',
      title: 'Kommunikasjonsstrategier',
      content: `Når du ikke forstår eller trenger tid:
- *¿Podría repetir, por favor?* (Kan du gjenta?)
- *¿Qué significa...?* (Hva betyr...?)
- *Déjame pensar...* (La meg tenke...)
- *Es decir...* (Det vil si...)
- *¿Cómo se dice... en español?* (Hvordan sier man... på spansk?)`,
    },
  ],
  exercises: [
    {
      id: 'spansk-2-10-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er den formelle måten å si "Unnskyld" på?',
      options: [
        { id: 'a', text: 'Le pido disculpas', isCorrect: true },
        { id: 'b', text: 'Perdona', isCorrect: false, feedback: 'Det er uformelt.' },
        { id: 'c', text: 'Lo siento', isCorrect: false, feedback: 'Det er nøytralt, men ikke spesielt formelt.' },
        { id: 'd', text: 'Oye', isCorrect: false, feedback: 'Det betyr "Hør her" (uformelt).' },
      ],
      solution: '"Le pido disculpas" er den mest formelle måten å be om unnskyldning.',
    },
    {
      id: 'spansk-2-10-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "acabar de + infinitiv"?',
      options: [
        { id: 'a', text: 'Å ha nettopp gjort noe', isCorrect: true },
        { id: 'b', text: 'Å holde på å gjøre noe', isCorrect: false, feedback: 'Det er "estar + gerundium".' },
        { id: 'c', text: 'Å skal til å gjøre noe', isCorrect: false, feedback: 'Det er "ir a + infinitiv".' },
        { id: 'd', text: 'Å slutte å gjøre noe', isCorrect: false, feedback: 'Det er "dejar de + infinitiv".' },
      ],
      solution: '"Acabar de + infinitiv" uttrykker at noe nettopp har skjedd: "Acabo de comer" = Jeg har nettopp spist.',
    },
    {
      id: 'spansk-2-10-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken kobling brukes for å introdusere en kontrast?',
      options: [
        { id: 'a', text: 'Sin embargo', isCorrect: true },
        { id: 'b', text: 'Además', isCorrect: false, feedback: '"Además" legger til informasjon, ikke kontrast.' },
        { id: 'c', text: 'Por ejemplo', isCorrect: false, feedback: 'Det introduserer et eksempel.' },
        { id: 'd', text: 'En conclusión', isCorrect: false, feedback: 'Det introduserer en konklusjon.' },
      ],
      solution: '"Sin embargo" (imidlertid/likevel) brukes for å introdusere en kontrast eller motsetning.',
    },
    {
      id: 'spansk-2-10-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Velg den beste åpningen for en formell presentasjon:',
      options: [
        { id: 'a', text: 'Buenos días a todos. Me gustaría hablarles sobre...', isCorrect: true },
        { id: 'b', text: '¡Hola! Voy a hablar de...', isCorrect: false, feedback: 'For uformelt for en presentasjon.' },
        { id: 'c', text: 'Oye, escucha esto...', isCorrect: false, feedback: 'Alt for uformelt.' },
        { id: 'd', text: 'Pues nada, el tema es...', isCorrect: false, feedback: 'For uformelt og ustrukturert.' },
      ],
      solution: '"Buenos días a todos. Me gustaría hablarles sobre..." er en passende formell og høflig åpning.',
    },
    {
      id: 'spansk-2-10-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvordan uttrykker du delvis enighet?',
      options: [
        { id: 'a', text: 'Tienes razón en parte', isCorrect: true },
        { id: 'b', text: 'Estoy totalmente de acuerdo', isCorrect: false, feedback: 'Det uttrykker full enighet.' },
        { id: 'c', text: 'No estoy de acuerdo', isCorrect: false, feedback: 'Det uttrykker uenighet.' },
        { id: 'd', text: 'Sin duda', isCorrect: false, feedback: 'Det uttrykker sterk enighet.' },
      ],
      solution: '"Tienes razón en parte" (Du har delvis rett) er en diplomatisk måte å uttrykke delvis enighet på.',
    },
  ],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const SPANSK_2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SPANSK_2_1,
  CHAPTER_SPANSK_2_2,
  CHAPTER_SPANSK_2_3,
  CHAPTER_SPANSK_2_4,
  CHAPTER_SPANSK_2_5,
  CHAPTER_SPANSK_2_6,
  CHAPTER_SPANSK_2_7,
  CHAPTER_SPANSK_2_8,
  CHAPTER_SPANSK_2_9,
  CHAPTER_SPANSK_2_10,
];
