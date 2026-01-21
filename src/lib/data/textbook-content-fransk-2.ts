/* eslint-disable */
// @ts-nocheck
/**
 * Fransk nivå 2 - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for fremmedspråk nivå 2
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Passé composé et imparfait (fortid utvidet)
// ============================================================================

export const CHAPTER_FRANSK_2_1: TextbookChapter = {
  id: 'fransk-2-1',
  courseId: 'fransk-2',
  chapterNumber: '1',
  title: 'Passé composé et imparfait',
  description: 'Lær å bruke og skille mellom de to fortidsformene på fransk.',
  estimatedMinutes: 75,
  competenceGoals: [
    'bruke varierte setningsstrukturer og tidsformer tilpasset formålet',
    'uttrykke seg med et visst språklig register',
  ],
  content: [
    {
      id: 'fransk-2-1-intro',
      type: 'text',
      content: `På nivå 1 lærte du grunnleggende om **passé composé**. Nå skal vi gå dypere inn i bruken av denne tidsformen, samt lære **imparfait** - den andre viktige fortidsformen på fransk. Å forstå forskjellen mellom disse to er avgjørende for å kommunisere presist om fortiden.`,
    },
    {
      id: 'fransk-2-1-def-1',
      type: 'definition',
      title: 'Passé composé - repetisjon',
      content: `**Passé composé** brukes for:
- Avsluttede handlinger i fortiden
- Handlinger som skjedde på et bestemt tidspunkt
- Handlinger som skjedde et bestemt antall ganger

**Dannelse:** avoir/être + participe passé

Eksempler:
- J'ai mangé une pizza. *(Jeg spiste en pizza.)*
- Elle est allée au cinéma. *(Hun dro på kino.)*
- Nous avons visité Paris trois fois. *(Vi har besøkt Paris tre ganger.)*`,
    },
    {
      id: 'fransk-2-1-def-2',
      type: 'definition',
      title: 'Imparfait - ny tidsform',
      content: `**Imparfait** brukes for:
- Beskrivelser i fortiden (vær, følelser, utseende)
- Vaner og gjentatte handlinger i fortiden
- Bakgrunnshandlinger mens noe annet skjedde
- Tilstander som varte over tid

**Dannelse:** Stamme fra nous-formen i presens + endelser:
-ais, -ais, -ait, -ions, -iez, -aient

Eksempel med **parler** (nous parlons → parl-):
- je parlais, tu parlais, il/elle parlait
- nous parlions, vous parliez, ils/elles parlaient`,
    },
    {
      id: 'fransk-2-1-example-1',
      type: 'example',
      title: 'Imparfait av vanlige verb',
      content: `**Avoir** (nous avons → av-):
j'avais, tu avais, il avait, nous avions, vous aviez, ils avaient

**Faire** (nous faisons → fais-):
je faisais, tu faisais, il faisait, nous faisions, vous faisiez, ils faisaient

**Être** (unntaksverb, stamme: ét-):
j'étais, tu étais, il était, nous étions, vous étiez, ils étaient`,
    },
    {
      id: 'fransk-2-1-text-1',
      type: 'text',
      title: 'Forskjellen mellom passé composé og imparfait',
      content: `| Passé composé | Imparfait |
|---------------|-----------|
| Avsluttet handling | Pågående handling |
| Punktuell hendelse | Beskrivelse/bakgrunn |
| Hovedhandling | Sekundær handling |
| "Hva skjedde?" | "Hvordan var det?" |

**Viktig:** I fortellinger brukes ofte begge sammen - imparfait setter scenen, passé composé forteller hva som skjedde.`,
    },
    {
      id: 'fransk-2-1-example-2',
      type: 'example',
      title: 'Kombinere tidsformene',
      content: `**Il pleuvait** quand je **suis sorti**.
*(Det regnet da jeg gikk ut.)*
- pleuvait (imparfait) = bakgrunnshandling, pågående
- suis sorti (passé composé) = hovedhandling, punktuell

**Je lisais** un livre quand le téléphone **a sonné**.
*(Jeg leste en bok da telefonen ringte.)*
- lisais (imparfait) = pågående aktivitet
- a sonné (passé composé) = plutselig hendelse`,
    },
    {
      id: 'fransk-2-1-tip-1',
      type: 'tip',
      content: `**Huskeregel:** Tenk på imparfait som en videokamera som filmer kontinuerlig (bakgrunn), og passé composé som et fotografi av et bestemt øyeblikk (handling).`,
    },
    {
      id: 'fransk-2-1-note-1',
      type: 'note',
      content: `Noen tidsuttrykk passer bedre med hver tidsform:

**Passé composé:** hier, la semaine dernière, soudain, tout à coup, une fois
**Imparfait:** toujours, souvent, chaque jour, d'habitude, pendant que`,
    },
  ],
  exercises: [
    {
      id: 'fransk-2-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er imparfait av "je mange"?',
      options: [
        { id: 'a', text: 'je mangeais', isCorrect: true },
        { id: 'b', text: 'j\'ai mangé', isCorrect: false, feedback: 'Det er passé composé.' },
        { id: 'c', text: 'je mangerais', isCorrect: false, feedback: 'Det er conditionnel.' },
        { id: 'd', text: 'je mangais', isCorrect: false, feedback: 'Feil stavemåte - husk "e" før "a".' },
      ],
      solution: 'Imparfait av "manger": je mange-ais → je mangeais (beholder "e" for å bevare uttalen).',
    },
    {
      id: 'fransk-2-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Velg riktig form: "Quand j\'étais jeune, je ___ au football tous les jours."',
      options: [
        { id: 'a', text: 'jouais', isCorrect: true },
        { id: 'b', text: 'ai joué', isCorrect: false, feedback: 'Passé composé passer ikke her - det er en gjentatt vane.' },
        { id: 'c', text: 'joue', isCorrect: false, feedback: 'Det er presens.' },
        { id: 'd', text: 'jouerai', isCorrect: false, feedback: 'Det er futurum.' },
      ],
      solution: '"Tous les jours" (hver dag) indikerer en vane i fortiden, som krever imparfait.',
    },
    {
      id: 'fransk-2-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Velg riktig form: "Hier, il ___ très chaud."',
      options: [
        { id: 'a', text: 'faisait', isCorrect: true },
        { id: 'b', text: 'a fait', isCorrect: false, feedback: 'For værbeskrivelser brukes vanligvis imparfait.' },
        { id: 'c', text: 'fait', isCorrect: false, feedback: 'Det er presens.' },
        { id: 'd', text: 'fera', isCorrect: false, feedback: 'Det er futurum.' },
      ],
      solution: 'Værbeskrivelser i fortiden tar vanligvis imparfait fordi de beskriver en tilstand.',
    },
    {
      id: 'fransk-2-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Velg riktig kombinasjon: "Je ___ quand tu ___."',
      options: [
        { id: 'a', text: 'dormais / es arrivé', isCorrect: true },
        { id: 'b', text: 'ai dormi / arrivais', isCorrect: false, feedback: 'Rekkefølgen er feil - bakgrunnen (sove) tar imparfait.' },
        { id: 'c', text: 'dormais / arrivais', isCorrect: false, feedback: 'En av handlingene må være punktuell (passé composé).' },
        { id: 'd', text: 'ai dormi / es arrivé', isCorrect: false, feedback: 'Begge kan ikke være passé composé i denne konteksten.' },
      ],
      solution: '"Dormais" (imparfait) er bakgrunnshandlingen, "es arrivé" (passé composé) er det som avbrøt.',
    },
    {
      id: 'fransk-2-1-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er imparfait av "nous avons" (avoir)?',
      options: [
        { id: 'a', text: 'nous avions', isCorrect: true },
        { id: 'b', text: 'nous avons eu', isCorrect: false, feedback: 'Det er passé composé.' },
        { id: 'c', text: 'nous avais', isCorrect: false, feedback: 'Feil endelse for "nous".' },
        { id: 'd', text: 'nous étions', isCorrect: false, feedback: 'Det er imparfait av "être", ikke "avoir".' },
      ],
      solution: 'Avoir i imparfait: stamme "av-" + endelse "-ions" = "nous avions".',
    },
  ],
};

// ============================================================================
// Kapittel 2: Le subjonctif (konjunktiv)
// ============================================================================

export const CHAPTER_FRANSK_2_2: TextbookChapter = {
  id: 'fransk-2-2',
  courseId: 'fransk-2',
  chapterNumber: '2',
  title: 'Le subjonctif',
  description: 'Lær konjunktiv - en viktig modus for å uttrykke følelser, ønsker og usikkerhet.',
  estimatedMinutes: 80,
  competenceGoals: [
    'bruke varierte setningsstrukturer og tidsformer tilpasset formålet',
    'uttrykke meninger, følelser og holdninger',
  ],
  content: [
    {
      id: 'fransk-2-2-intro',
      type: 'text',
      content: `**Le subjonctif** (konjunktiv) er en verbmodus som brukes til å uttrykke subjektive holdninger - ønsker, følelser, tvil, nødvendighet og muligheter. Det er en av de mest karakteristiske trekkene ved fransk grammatikk og krever at man tenker annerledes enn på norsk.`,
    },
    {
      id: 'fransk-2-2-def-1',
      type: 'definition',
      title: 'Dannelse av subjonctif présent',
      content: `**Grunnregel:** Ta stammen fra ils/elles-formen i presens, legg til endelsene:
-e, -es, -e, -ions, -iez, -ent

**Eksempel med parler** (ils parlent → parl-):
- que je parle, que tu parles, qu'il/elle parle
- que nous parlions, que vous parliez, qu'ils/elles parlent

**Merk:** For nous og vous brukes ofte stammen fra imparfait.`,
    },
    {
      id: 'fransk-2-2-example-1',
      type: 'example',
      title: 'Uregelmessige verb i subjonctif',
      content: `**Être:**
que je sois, que tu sois, qu'il soit, que nous soyons, que vous soyez, qu'ils soient

**Avoir:**
que j'aie, que tu aies, qu'il ait, que nous ayons, que vous ayez, qu'ils aient

**Aller:**
que j'aille, que tu ailles, qu'il aille, que nous allions, que vous alliez, qu'ils aillent

**Faire:**
que je fasse, que tu fasses, qu'il fasse, que nous fassions, que vous fassiez, qu'ils fassent

**Pouvoir:**
que je puisse, que tu puisses, qu'il puisse, que nous puissions, que vous puissiez, qu'ils puissent`,
    },
    {
      id: 'fransk-2-2-text-1',
      type: 'text',
      title: 'Når brukes subjonctif?',
      content: `**1. Etter uttrykk for følelser:**
- Je suis content(e) que... *(Jeg er glad for at...)*
- J'ai peur que... *(Jeg er redd for at...)*
- Il est triste que... *(Det er trist at...)*

**2. Etter uttrykk for vilje/ønske:**
- Je veux que... *(Jeg vil at...)*
- Je souhaite que... *(Jeg ønsker at...)*
- Il faut que... *(Det er nødvendig at...)*

**3. Etter uttrykk for tvil/usikkerhet:**
- Je doute que... *(Jeg tviler på at...)*
- Il est possible que... *(Det er mulig at...)*
- Je ne pense pas que... *(Jeg tror ikke at...)*

**4. Etter visse konjunksjoner:**
- bien que *(selv om)*
- pour que *(for at)*
- avant que *(før)*
- à moins que *(med mindre)*`,
    },
    {
      id: 'fransk-2-2-example-2',
      type: 'example',
      title: 'Eksempler på bruk',
      content: `**Følelser:**
Je suis content que tu **sois** là.
*(Jeg er glad for at du er her.)*

**Vilje:**
Je veux que tu **fasses** tes devoirs.
*(Jeg vil at du skal gjøre leksene dine.)*

**Nødvendighet:**
Il faut que nous **partions** maintenant.
*(Vi må dra nå.)*

**Tvil:**
Je ne pense pas qu'il **puisse** venir.
*(Jeg tror ikke han kan komme.)*`,
    },
    {
      id: 'fransk-2-2-warning-1',
      type: 'warning',
      content: `**Viktig:** Subjonctif brukes bare når det er to forskjellige subjekter i setningen!

✓ Je veux **que tu viennes**. *(Jeg vil at du skal komme.)* - Subjonctif fordi "je" ≠ "tu"
✗ Je veux venir. *(Jeg vil komme.)* - Infinitiv fordi samme subjekt`,
    },
    {
      id: 'fransk-2-2-tip-1',
      type: 'tip',
      content: `**Huskeregel:** Subjonctif uttrykker det subjektive - følelser, ønsker, tvil. Indikativ (vanlig modus) uttrykker det objektive - fakta og sikre påstander.`,
    },
  ],
  exercises: [
    {
      id: 'fransk-2-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er subjonctif av "il est" (être)?',
      options: [
        { id: 'a', text: 'qu\'il soit', isCorrect: true },
        { id: 'b', text: 'qu\'il est', isCorrect: false, feedback: 'Det er indikativ, ikke subjonctif.' },
        { id: 'c', text: 'qu\'il sois', isCorrect: false, feedback: 'Feil endelse - "sois" brukes med je/tu.' },
        { id: 'd', text: 'qu\'il été', isCorrect: false, feedback: 'Det er participe passé.' },
      ],
      solution: 'Être i subjonctif: que je sois, que tu sois, qu\'il soit...',
    },
    {
      id: 'fransk-2-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Fullfør: "Je veux que tu ___ avec moi." (venir)',
      options: [
        { id: 'a', text: 'viennes', isCorrect: true },
        { id: 'b', text: 'viens', isCorrect: false, feedback: 'Det er indikativ presens.' },
        { id: 'c', text: 'venais', isCorrect: false, feedback: 'Det er imparfait.' },
        { id: 'd', text: 'venir', isCorrect: false, feedback: 'Man kan ikke bruke infinitiv her fordi subjektene er forskjellige.' },
      ],
      solution: '"Vouloir que" krever subjonctif. Venir → que tu viennes.',
    },
    {
      id: 'fransk-2-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken setning krever IKKE subjonctif?',
      options: [
        { id: 'a', text: 'Je sais que tu...', isCorrect: true },
        { id: 'b', text: 'Je doute que tu...', isCorrect: false, feedback: 'Tvil krever subjonctif.' },
        { id: 'c', text: 'Je veux que tu...', isCorrect: false, feedback: 'Vilje krever subjonctif.' },
        { id: 'd', text: 'Il faut que tu...', isCorrect: false, feedback: 'Nødvendighet krever subjonctif.' },
      ],
      solution: '"Savoir que" uttrykker sikker kunnskap (fakta), derfor brukes indikativ.',
    },
    {
      id: 'fransk-2-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Fullfør: "Bien qu\'il ___ malade, il est venu." (être)',
      options: [
        { id: 'a', text: 'soit', isCorrect: true },
        { id: 'b', text: 'est', isCorrect: false, feedback: '"Bien que" krever alltid subjonctif.' },
        { id: 'c', text: 'était', isCorrect: false, feedback: 'Det er imparfait, ikke subjonctif.' },
        { id: 'd', text: 'serait', isCorrect: false, feedback: 'Det er conditionnel.' },
      ],
      solution: '"Bien que" (selv om) krever alltid subjonctif: bien qu\'il soit.',
    },
    {
      id: 'fransk-2-2-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er subjonctif av "nous avons" (avoir)?',
      options: [
        { id: 'a', text: 'que nous ayons', isCorrect: true },
        { id: 'b', text: 'que nous avons', isCorrect: false, feedback: 'Det er indikativ presens.' },
        { id: 'c', text: 'que nous aions', isCorrect: false, feedback: 'Feil stavemåte.' },
        { id: 'd', text: 'que nous avions', isCorrect: false, feedback: 'Det er imparfait.' },
      ],
      solution: 'Avoir i subjonctif: que j\'aie, que tu aies, qu\'il ait, que nous ayons...',
    },
  ],
};

// ============================================================================
// Kapittel 3: Le conditionnel
// ============================================================================

export const CHAPTER_FRANSK_2_3: TextbookChapter = {
  id: 'fransk-2-3',
  courseId: 'fransk-2',
  chapterNumber: '3',
  title: 'Le conditionnel',
  description: 'Lær kondisjonalis - for å uttrykke høflighet, hypotetiske situasjoner og ønsker.',
  estimatedMinutes: 70,
  competenceGoals: [
    'bruke varierte setningsstrukturer og tidsformer tilpasset formålet',
    'kommunisere med et visst språklig register tilpasset situasjonen',
  ],
  content: [
    {
      id: 'fransk-2-3-intro',
      type: 'text',
      content: `**Le conditionnel** (kondisjonalis) brukes til å uttrykke høflighet, hypotetiske situasjoner, ønsker og usikre påstander. Du har kanskje allerede møtt "je voudrais" (jeg vil gjerne ha) - det er kondisjonalis av "vouloir"!`,
    },
    {
      id: 'fransk-2-3-def-1',
      type: 'definition',
      title: 'Dannelse av conditionnel présent',
      content: `**Grunnregel:** Futurumstamme + imparfait-endelser

**Endelser:** -ais, -ais, -ait, -ions, -iez, -aient

**Eksempel med parler:**
- je parlerais, tu parlerais, il/elle parlerait
- nous parlerions, vous parleriez, ils/elles parleraient

**Eksempel med finir:**
- je finirais, tu finirais, il finirait
- nous finirions, vous finiriez, ils finiraient`,
    },
    {
      id: 'fransk-2-3-example-1',
      type: 'example',
      title: 'Uregelmessige verb (samme stamme som futurum)',
      content: `**Être:** je serais, tu serais, il serait... (stamme: ser-)
**Avoir:** j'aurais, tu aurais, il aurait... (stamme: aur-)
**Aller:** j'irais, tu irais, il irait... (stamme: ir-)
**Faire:** je ferais, tu ferais, il ferait... (stamme: fer-)
**Pouvoir:** je pourrais, tu pourrais, il pourrait... (stamme: pourr-)
**Vouloir:** je voudrais, tu voudrais, il voudrait... (stamme: voudr-)
**Venir:** je viendrais, tu viendrais, il viendrait... (stamme: viendr-)
**Voir:** je verrais, tu verrais, il verrait... (stamme: verr-)`,
    },
    {
      id: 'fransk-2-3-text-1',
      type: 'text',
      title: 'Bruk av kondisjonalis',
      content: `**1. Høflighet:**
- Je voudrais un café, s'il vous plaît. *(Jeg vil gjerne ha en kaffe.)*
- Pourriez-vous m'aider? *(Kunne De hjelpe meg?)*

**2. Hypotetiske situasjoner (med "si" + imparfait):**
- Si j'avais de l'argent, j'achèterais une maison. *(Hvis jeg hadde penger, ville jeg kjøpe et hus.)*

**3. Ønsker og drømmer:**
- J'aimerais voyager en Asie. *(Jeg skulle gjerne reise til Asia.)*

**4. Usikre påstander / rykter:**
- Il serait malade. *(Han skal visst være syk.)*

**5. Forslag og råd:**
- Tu devrais étudier plus. *(Du burde studere mer.)*`,
    },
    {
      id: 'fransk-2-3-def-2',
      type: 'definition',
      title: 'Hypotetiske setninger med "si"',
      content: `**Mønster for nåtidige/fremtidige hypoteser:**
Si + imparfait, conditionnel

**Eksempler:**
- Si j'étais riche, je voyagerais beaucoup.
  *(Hvis jeg var rik, ville jeg reise mye.)*
- Si tu venais, nous serions contents.
  *(Hvis du kom, ville vi være glade.)*

**Merk:** Man bruker ALDRI kondisjonalis etter "si"!`,
    },
    {
      id: 'fransk-2-3-example-2',
      type: 'example',
      title: 'Sammenligning: presens vs kondisjonalis',
      content: `**Presens (faktisk):**
Je veux un café. *(Jeg vil ha en kaffe.)* - direkte

**Kondisjonalis (høflig):**
Je voudrais un café. *(Jeg vil gjerne ha en kaffe.)* - høflig

**Presens (faktisk):**
Tu peux m'aider? *(Kan du hjelpe meg?)*

**Kondisjonalis (høflig):**
Pourrais-tu m'aider? *(Kunne du hjelpe meg?)*`,
    },
    {
      id: 'fransk-2-3-tip-1',
      type: 'tip',
      content: `**Huskeregel:** Kondisjonalis = futurumstamme + imparfait-endelser. Tenk på det som "fremtid i fortid" eller "hva ville skje".`,
    },
  ],
  exercises: [
    {
      id: 'fransk-2-3-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er kondisjonalis av "je veux" (vouloir)?',
      options: [
        { id: 'a', text: 'je voudrais', isCorrect: true },
        { id: 'b', text: 'je voulais', isCorrect: false, feedback: 'Det er imparfait.' },
        { id: 'c', text: 'je voudrai', isCorrect: false, feedback: 'Det er futurum.' },
        { id: 'd', text: 'je voulus', isCorrect: false, feedback: 'Det er passé simple.' },
      ],
      solution: 'Vouloir i kondisjonalis: je voudrais, tu voudrais, il voudrait...',
    },
    {
      id: 'fransk-2-3-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Fullfør: "Si j\'avais le temps, je ___ au cinéma." (aller)',
      options: [
        { id: 'a', text: 'irais', isCorrect: true },
        { id: 'b', text: 'vais', isCorrect: false, feedback: 'Det er presens.' },
        { id: 'c', text: 'allais', isCorrect: false, feedback: 'Det er imparfait - man trenger kondisjonalis i hovedsetningen.' },
        { id: 'd', text: 'irai', isCorrect: false, feedback: 'Det er futurum.' },
      ],
      solution: 'Etter "si + imparfait" brukes kondisjonalis i hovedsetningen: j\'irais.',
    },
    {
      id: 'fransk-2-3-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan sier du "Kunne du hjelpe meg?" høflig?',
      options: [
        { id: 'a', text: 'Pourrais-tu m\'aider?', isCorrect: true },
        { id: 'b', text: 'Peux-tu m\'aider?', isCorrect: false, feedback: 'Det er korrekt, men mindre høflig (presens).' },
        { id: 'c', text: 'Pouvais-tu m\'aider?', isCorrect: false, feedback: 'Det er imparfait.' },
        { id: 'd', text: 'Pourras-tu m\'aider?', isCorrect: false, feedback: 'Det er futurum.' },
      ],
      solution: 'For høflige forespørsler brukes kondisjonalis: pourrais-tu...',
    },
    {
      id: 'fransk-2-3-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Velg riktig setning:',
      options: [
        { id: 'a', text: 'Si j\'étais toi, je partirais.', isCorrect: true },
        { id: 'b', text: 'Si je serais toi, je partirais.', isCorrect: false, feedback: 'Man bruker ALDRI kondisjonalis etter "si".' },
        { id: 'c', text: 'Si j\'étais toi, je pars.', isCorrect: false, feedback: 'Hovedsetningen trenger kondisjonalis.' },
        { id: 'd', text: 'Si je suis toi, je partirais.', isCorrect: false, feedback: '"Si"-setningen trenger imparfait for hypotetiske situasjoner.' },
      ],
      solution: 'Korrekt mønster: Si + imparfait, kondisjonalis. Aldri kondisjonalis etter "si"!',
    },
    {
      id: 'fransk-2-3-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er kondisjonalis av "nous sommes" (être)?',
      options: [
        { id: 'a', text: 'nous serions', isCorrect: true },
        { id: 'b', text: 'nous serons', isCorrect: false, feedback: 'Det er futurum.' },
        { id: 'c', text: 'nous étions', isCorrect: false, feedback: 'Det er imparfait.' },
        { id: 'd', text: 'nous soyons', isCorrect: false, feedback: 'Det er subjonctif.' },
      ],
      solution: 'Être i kondisjonalis: je serais, tu serais, il serait, nous serions...',
    },
  ],
};

// ============================================================================
// Kapittel 4: Les pronoms (avancé)
// ============================================================================

export const CHAPTER_FRANSK_2_4: TextbookChapter = {
  id: 'fransk-2-4',
  courseId: 'fransk-2',
  chapterNumber: '4',
  title: 'Les pronoms (avancé)',
  description: 'Utvidet kunnskap om pronomen - y, en, relative pronomen og doble objektspronomen.',
  estimatedMinutes: 75,
  competenceGoals: [
    'bruke varierte setningsstrukturer tilpasset formålet',
    'uttrykke seg presist og variert',
  ],
  content: [
    {
      id: 'fransk-2-4-intro',
      type: 'text',
      content: `På nivå 1 lærte du grunnleggende pronomen. Nå skal vi gå dypere med pronomenene **y** og **en**, **relative pronomen**, og hvordan man kombinerer flere pronomen i samme setning.`,
    },
    {
      id: 'fransk-2-4-def-1',
      type: 'definition',
      title: 'Pronomenet "y"',
      content: `**Y** erstatter:
1. Stedsuttrykk med preposisjon (à, en, dans, sur, chez...):
   - Tu vas **à Paris**? → Tu **y** vas? *(Drar du dit?)*
   - Elle habite **en France** → Elle **y** habite. *(Hun bor der.)*

2. Uttrykk med "à" + ting/abstrakt:
   - Tu penses **à ton examen**? → Tu **y** penses? *(Tenker du på det?)*

**Plassering:** Før verbet (som andre objektspronomen)`,
    },
    {
      id: 'fransk-2-4-def-2',
      type: 'definition',
      title: 'Pronomenet "en"',
      content: `**En** erstatter:
1. Uttrykk med "de" + sted:
   - Tu viens **de Paris**? → Tu **en** viens? *(Kommer du derfra?)*

2. Delingsartikkel (du, de la, de l', des):
   - Tu veux **du café**? → Tu **en** veux? *(Vil du ha noe?)*

3. Mengdeuttrykk:
   - J'ai **trois livres** → J'**en** ai trois. *(Jeg har tre.)*

4. Uttrykk med "de" + ting:
   - Tu parles **de ce film**? → Tu **en** parles? *(Snakker du om det?)*`,
    },
    {
      id: 'fransk-2-4-example-1',
      type: 'example',
      title: 'Eksempler med y og en',
      content: `**Y:**
- Tu vas au cinéma? - Oui, j'**y** vais. *(Ja, jeg drar dit.)*
- Vous pensez à l'examen? - Oui, nous **y** pensons. *(Ja, vi tenker på det.)*

**En:**
- Tu as des frères? - Oui, j'**en** ai deux. *(Ja, jeg har to.)*
- Tu veux du gâteau? - Non, je n'**en** veux pas. *(Nei, jeg vil ikke ha noe.)*
- Elle revient de Londres? - Oui, elle **en** revient. *(Ja, hun kommer derfra.)*`,
    },
    {
      id: 'fransk-2-4-text-1',
      type: 'text',
      title: 'Relative pronomen',
      content: `**Qui** - subjekt (hvem/som):
- L'homme **qui** parle est mon père. *(Mannen som snakker er min far.)*

**Que** - objekt (som/hvem):
- Le livre **que** je lis est intéressant. *(Boken som jeg leser er interessant.)*

**Où** - sted/tid (hvor/da):
- La ville **où** j'habite est belle. *(Byen hvor jeg bor er vakker.)*
- Le jour **où** je suis né... *(Dagen da jeg ble født...)*

**Dont** - "de"-uttrykk (som/hvis):
- Le film **dont** je parle... *(Filmen som jeg snakker om...)*
- L'homme **dont** la fille est médecin... *(Mannen hvis datter er lege...)*`,
    },
    {
      id: 'fransk-2-4-def-3',
      type: 'definition',
      title: 'Doble objektspronomen',
      content: `Når to pronomen brukes sammen, følger de denne rekkefølgen:

**me/te/se/nous/vous** + **le/la/les** + **lui/leur** + **y** + **en** + verb

**Eksempler:**
- Il **me le** donne. *(Han gir meg den.)*
- Je **la lui** donne. *(Jeg gir den til ham/henne.)*
- Il **y en** a beaucoup. *(Det er mange der.)*`,
    },
    {
      id: 'fransk-2-4-tip-1',
      type: 'tip',
      content: `**Huskeregel for qui/que:** "Qui" er SUBjekt (begge har U), "que" er OBjekt (begge har ingen U i stavelsen).`,
    },
  ],
  exercises: [
    {
      id: 'fransk-2-4-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Erstatt "à Paris": "Tu vas à Paris?" → "Tu ___ vas?"',
      options: [
        { id: 'a', text: 'y', isCorrect: true },
        { id: 'b', text: 'en', isCorrect: false, feedback: '"En" erstatter uttrykk med "de", ikke "à".' },
        { id: 'c', text: 'le', isCorrect: false, feedback: '"Le" erstatter direkte objekt, ikke stedsuttrykk.' },
        { id: 'd', text: 'lui', isCorrect: false, feedback: '"Lui" erstatter indirekte objekt (person).' },
      ],
      solution: '"Y" erstatter stedsuttrykk med à, en, dans osv.',
    },
    {
      id: 'fransk-2-4-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Erstatt "du café": "Tu veux du café?" → "Tu ___ veux?"',
      options: [
        { id: 'a', text: 'en', isCorrect: true },
        { id: 'b', text: 'y', isCorrect: false, feedback: '"Y" erstatter stedsuttrykk, ikke delingsartikkel.' },
        { id: 'c', text: 'le', isCorrect: false, feedback: '"Le" passer ikke med delingsartikkel.' },
        { id: 'd', text: 'la', isCorrect: false, feedback: '"La" passer ikke her.' },
      ],
      solution: '"En" erstatter uttrykk med delingsartikkel (du, de la, des).',
    },
    {
      id: 'fransk-2-4-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Velg riktig relativpronomen: "La fille ___ j\'ai vue hier est ma cousine."',
      options: [
        { id: 'a', text: 'que', isCorrect: true },
        { id: 'b', text: 'qui', isCorrect: false, feedback: '"Qui" er subjekt, men her er "j\'" subjektet.' },
        { id: 'c', text: 'dont', isCorrect: false, feedback: '"Dont" brukes med "de"-uttrykk.' },
        { id: 'd', text: 'où', isCorrect: false, feedback: '"Où" brukes for sted/tid.' },
      ],
      solution: '"Que" er objekt - "j\'" er subjektet som har sett "la fille".',
    },
    {
      id: 'fransk-2-4-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Velg riktig: "Le livre ___ je parle est très intéressant."',
      options: [
        { id: 'a', text: 'dont', isCorrect: true },
        { id: 'b', text: 'que', isCorrect: false, feedback: 'Verbet er "parler DE", derfor brukes "dont".' },
        { id: 'c', text: 'qui', isCorrect: false, feedback: '"Qui" er subjekt, ikke objekt for preposisjon.' },
        { id: 'd', text: 'où', isCorrect: false, feedback: '"Où" brukes for sted/tid.' },
      ],
      solution: '"Parler de" krever "dont" som relativpronomen.',
    },
    {
      id: 'fransk-2-4-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er riktig rekkefølge? "Il donne le livre à Marie" → "Il ___."',
      options: [
        { id: 'a', text: 'le lui donne', isCorrect: true },
        { id: 'b', text: 'lui le donne', isCorrect: false, feedback: 'Feil rekkefølge - le/la/les kommer før lui/leur.' },
        { id: 'c', text: 'la lui donne', isCorrect: false, feedback: '"Livre" er hankjønn, så "le" ikke "la".' },
        { id: 'd', text: 'lui donne le', isCorrect: false, feedback: 'Pronomen må stå før verbet.' },
      ],
      solution: 'Rekkefølge: le/la/les + lui/leur + verb → "Il le lui donne."',
    },
  ],
};

// ============================================================================
// Kapittel 5: Littérature française
// ============================================================================

export const CHAPTER_FRANSK_2_5: TextbookChapter = {
  id: 'fransk-2-5',
  courseId: 'fransk-2',
  chapterNumber: '5',
  title: 'Littérature française',
  description: 'Utforsk fransk litteratur fra klassikerne til moderne forfattere.',
  estimatedMinutes: 80,
  competenceGoals: [
    'lese og forstå ulike typer tekster',
    'reflektere over innhold og virkemidler i tekster',
    'kjenne til kulturelle uttrykk fra franskspråklige områder',
  ],
  content: [
    {
      id: 'fransk-2-5-intro',
      type: 'text',
      content: `Fransk litteratur er en av verdens rikeste og mest innflytelsesrike. Fra middelalderens epos til moderne romaner har franske forfattere formet verdenslitteraturen. La oss utforske noen viktige perioder og forfattere.`,
    },
    {
      id: 'fransk-2-5-text-1',
      type: 'text',
      title: 'Les grands siècles (1600-1700-tallet)',
      content: `**Le classicisme** preget 1600-tallet med fokus på orden, balanse og fornuft.

**Viktige forfattere:**
- **Molière** (1622-1673): Komedier som "Le Malade imaginaire", "L'Avare"
- **Jean Racine** (1639-1699): Tragedier som "Phèdre"
- **Jean de La Fontaine** (1621-1695): Fabler med moralske lærdommer

**Les Lumières** (Opplysningstiden, 1700-tallet):
- **Voltaire** (1694-1778): Filosof, "Candide"
- **Jean-Jacques Rousseau** (1712-1778): "Du contrat social"
- **Denis Diderot** (1713-1784): L'Encyclopédie`,
    },
    {
      id: 'fransk-2-5-example-1',
      type: 'example',
      title: 'La Fontaine - Le Corbeau et le Renard',
      content: `**Begynnelsen av fabelen:**

*Maître Corbeau, sur un arbre perché,*
*Tenait en son bec un fromage.*
*Maître Renard, par l'odeur alléché,*
*Lui tint à peu près ce langage...*

**Oversettelse:**
*Mester Ravn, på et tre satt,*
*Holdt i nebbet sitt en ost.*
*Mester Rev, av lukten fristet,*
*Talte til ham omtrent slik...*

**Moral:** Smiger kan lure selv de klokeste.`,
    },
    {
      id: 'fransk-2-5-text-2',
      type: 'text',
      title: 'Le XIXe siècle - Romantisme et Réalisme',
      content: `**Romantismen** (1800-1850):
- **Victor Hugo** (1802-1885): "Les Misérables", "Notre-Dame de Paris"
- **Alexandre Dumas** (1802-1870): "Les Trois Mousquetaires"
- **Alfred de Musset** (1810-1857): Poesi og teater

**Realismen og Naturalismen**:
- **Gustave Flaubert** (1821-1880): "Madame Bovary"
- **Émile Zola** (1840-1902): "Germinal", "J'accuse"
- **Guy de Maupassant** (1850-1893): Noveller`,
    },
    {
      id: 'fransk-2-5-text-3',
      type: 'text',
      title: 'Le XXe siècle et au-delà',
      content: `**Eksistensialisme og modernisme:**
- **Marcel Proust** (1871-1922): "À la recherche du temps perdu"
- **Albert Camus** (1913-1960): "L'Étranger", Nobelpris 1957
- **Jean-Paul Sartre** (1905-1980): "La Nausée", eksistensialismens far
- **Simone de Beauvoir** (1908-1986): "Le Deuxième Sexe", feminisme

**Moderne forfattere:**
- **Marguerite Duras** (1914-1996): "L'Amant"
- **Patrick Modiano** (1945-): Nobelpris 2014
- **Annie Ernaux** (1940-): Nobelpris 2022`,
    },
    {
      id: 'fransk-2-5-example-2',
      type: 'example',
      title: 'Albert Camus - L\'Étranger (1942)',
      content: `**Berømt åpning:**

*"Aujourd'hui, maman est morte. Ou peut-être hier, je ne sais pas."*

**Oversettelse:**
*"I dag døde mamma. Eller kanskje i går, jeg vet ikke."*

Denne åpningen viser hovedpersonen Meursaults likegyldighet og fremmedgjøring fra følelser - et sentralt tema i eksistensialismen.`,
    },
    {
      id: 'fransk-2-5-def-1',
      type: 'definition',
      title: 'Litterære begreper',
      content: `**Le roman** - romanen
**La nouvelle** - novellen
**Le poème** - diktet
**La pièce de théâtre** - teaterstykket
**L'auteur/l'autrice** - forfatteren
**Le personnage** - karakteren
**L'intrigue** - handlingen
**Le thème** - temaet`,
    },
    {
      id: 'fransk-2-5-tip-1',
      type: 'tip',
      content: `**Lesetips:** Begynn med kortere tekster som noveller av Maupassant eller fabler av La Fontaine. "Le Petit Prince" av Saint-Exupéry er også utmerket for språklæring!`,
    },
  ],
  exercises: [
    {
      id: 'fransk-2-5-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvem skrev "Les Misérables"?',
      options: [
        { id: 'a', text: 'Victor Hugo', isCorrect: true },
        { id: 'b', text: 'Alexandre Dumas', isCorrect: false, feedback: 'Dumas skrev "Les Trois Mousquetaires".' },
        { id: 'c', text: 'Émile Zola', isCorrect: false, feedback: 'Zola skrev "Germinal".' },
        { id: 'd', text: 'Gustave Flaubert', isCorrect: false, feedback: 'Flaubert skrev "Madame Bovary".' },
      ],
      solution: 'Victor Hugo skrev "Les Misérables" (1862), en av verdens mest kjente romaner.',
    },
    {
      id: 'fransk-2-5-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "le roman" på norsk?',
      options: [
        { id: 'a', text: 'Romanen', isCorrect: true },
        { id: 'b', text: 'Diktet', isCorrect: false, feedback: '"Diktet" er "le poème".' },
        { id: 'c', text: 'Novellen', isCorrect: false, feedback: '"Novellen" er "la nouvelle".' },
        { id: 'd', text: 'Teaterstykket', isCorrect: false, feedback: '"Teaterstykket" er "la pièce de théâtre".' },
      ],
      solution: '"Le roman" betyr "romanen" på norsk.',
    },
    {
      id: 'fransk-2-5-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken forfatter vant Nobelprisen i litteratur i 2022?',
      options: [
        { id: 'a', text: 'Annie Ernaux', isCorrect: true },
        { id: 'b', text: 'Patrick Modiano', isCorrect: false, feedback: 'Modiano vant Nobelprisen i 2014.' },
        { id: 'c', text: 'Albert Camus', isCorrect: false, feedback: 'Camus vant Nobelprisen i 1957.' },
        { id: 'd', text: 'Marguerite Duras', isCorrect: false, feedback: 'Duras vant aldri Nobelprisen.' },
      ],
      solution: 'Annie Ernaux vant Nobelprisen i litteratur i 2022 for sitt selvbiografiske forfatterskap.',
    },
    {
      id: 'fransk-2-5-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken litterær periode preget 1600-tallet i Frankrike?',
      options: [
        { id: 'a', text: 'Le classicisme', isCorrect: true },
        { id: 'b', text: 'Le romantisme', isCorrect: false, feedback: 'Romantismen preget 1800-tallet.' },
        { id: 'c', text: 'Le réalisme', isCorrect: false, feedback: 'Realismen kom senere på 1800-tallet.' },
        { id: 'd', text: 'L\'existentialisme', isCorrect: false, feedback: 'Eksistensialismen er fra 1900-tallet.' },
      ],
      solution: 'Le classicisme preget 1600-tallet med fokus på orden, balanse og fornuft.',
    },
    {
      id: 'fransk-2-5-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvem skrev "L\'Étranger" og representerte eksistensialismen?',
      options: [
        { id: 'a', text: 'Albert Camus', isCorrect: true },
        { id: 'b', text: 'Jean-Paul Sartre', isCorrect: false, feedback: 'Sartre skrev "La Nausée", men ikke "L\'Étranger".' },
        { id: 'c', text: 'Simone de Beauvoir', isCorrect: false, feedback: 'Beauvoir skrev "Le Deuxième Sexe".' },
        { id: 'd', text: 'Marcel Proust', isCorrect: false, feedback: 'Proust skrev "À la recherche du temps perdu".' },
      ],
      solution: 'Albert Camus skrev "L\'Étranger" (Den fremmede) i 1942.',
    },
  ],
};

// ============================================================================
// Kapittel 6: Culture et société
// ============================================================================

export const CHAPTER_FRANSK_2_6: TextbookChapter = {
  id: 'fransk-2-6',
  courseId: 'fransk-2',
  chapterNumber: '6',
  title: 'Culture et société',
  description: 'Utforsk fransk kultur, tradisjoner og samfunnsforhold.',
  estimatedMinutes: 70,
  competenceGoals: [
    'utforske og beskrive levemåter, tradisjoner og geografi i franskspråklige områder',
    'reflektere over kulturelle likheter og forskjeller',
  ],
  content: [
    {
      id: 'fransk-2-6-intro',
      type: 'text',
      content: `Frankrike er kjent for sin rike kultur - fra gastronomi og mote til kunst og filosofi. La oss utforske hva som gjør fransk kultur unik, og hvordan samfunnet fungerer.`,
    },
    {
      id: 'fransk-2-6-text-1',
      type: 'text',
      title: 'La gastronomie française',
      content: `Fransk matkultur er UNESCO verdensarv siden 2010!

**Typiske måltider:**
- **Le petit-déjeuner**: Croissant, baguette med smør og syltetøy, kaffe
- **Le déjeuner**: Ofte et skikkelig måltid, 12-14
- **Le dîner**: Familiesamling, ofte tre retter

**Berømte retter:**
- Le coq au vin *(kylling i vin)*
- Le boeuf bourguignon *(oksekjøtt i rødvin)*
- La ratatouille *(grønnsaksrett fra Provence)*
- Les crêpes *(pannekaker fra Bretagne)*
- Le fromage *(over 400 ostesorter!)*`,
    },
    {
      id: 'fransk-2-6-def-1',
      type: 'definition',
      title: 'Viktige kulturelle begreper',
      content: `**La laïcité** - sekularisme, skille mellom stat og religion
**La francophonie** - det franskspråklige fellesskapet
**L'exception culturelle** - beskyttelse av fransk kultur mot globalisering
**Les droits de l'homme** - menneskerettighetene (1789)
**La liberté, l'égalité, la fraternité** - Frankrikes motto`,
    },
    {
      id: 'fransk-2-6-text-2',
      type: 'text',
      title: 'Les fêtes et traditions',
      content: `**Nasjonale høytider:**
- **Le 14 juillet** - Bastilledagen, nasjonaldagen
- **Le 1er mai** - Arbeidernes dag, man gir liljekonvall
- **Le 11 novembre** - Våpenhviledag (1918)

**Religiøse/kulturelle høytider:**
- **Noël** - Jul, med bûche de Noël (julekake)
- **Pâques** - Påske, med sjokoladeegg
- **La Chandeleur** - Kyndelmesse, man spiser crêpes
- **L'Épiphanie** - Hellig tre kongers dag, galette des rois`,
    },
    {
      id: 'frans-2-6-text-3',
      type: 'text',
      title: 'La société française',
      content: `**Politisk system:**
- République française - den femte republikk (siden 1958)
- Presidenten velges for 5 år
- Nationalforsamlingen og Senatet utgjør parlamentet

**Utdanningssystemet:**
- L'école maternelle (3-6 år)
- L'école primaire (6-11 år)
- Le collège (11-15 år)
- Le lycée (15-18 år)
- Le baccalauréat ("le bac") - avsluttende eksamen

**Arbeidsliv:**
- 35-timers arbeidsuke
- 5 uker ferie
- Mange tar lang lunsj`,
    },
    {
      id: 'fransk-2-6-example-1',
      type: 'example',
      title: 'Kulturelle forskjeller',
      content: `**Hilsener:**
- "La bise" - kyssing på kinnet (antall varierer etter region!)
- Håndhilsen i formelle situasjoner

**Bordskikk:**
- Hendene på bordet (ikke i fanget)
- Brød legges direkte på duken
- Ost spises før dessert
- Man sier "Bon appétit!" før måltidet

**Samtale:**
- Politikk og filosofi er vanlige samtaleemner
- Å snakke om lønn anses som uhøflig`,
    },
    {
      id: 'fransk-2-6-tip-1',
      type: 'tip',
      content: `**Kulturell bevissthet:** I Frankrike setter man pris på at utlendinger prøver å snakke fransk, selv om det ikke er perfekt. Et "Bonjour" og "S'il vous plaît" åpner mange dører!`,
    },
  ],
  exercises: [
    {
      id: 'fransk-2-6-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Når feires den franske nasjonaldagen?',
      options: [
        { id: 'a', text: 'Le 14 juillet', isCorrect: true },
        { id: 'b', text: 'Le 1er mai', isCorrect: false, feedback: 'Det er arbeidernes dag.' },
        { id: 'c', text: 'Le 11 novembre', isCorrect: false, feedback: 'Det er våpenhviledagen.' },
        { id: 'd', text: 'Le 8 mai', isCorrect: false, feedback: 'Det er frigjøringsdagen (1945).' },
      ],
      solution: 'Den 14. juli feires Bastilledagen - den franske nasjonaldagen.',
    },
    {
      id: 'fransk-2-6-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er Frankrikes motto?',
      options: [
        { id: 'a', text: 'Liberté, égalité, fraternité', isCorrect: true },
        { id: 'b', text: 'Vive la France', isCorrect: false, feedback: 'Det er et utrop, ikke mottoet.' },
        { id: 'c', text: 'Travail, famille, patrie', isCorrect: false, feedback: 'Det var Vichy-regimets motto.' },
        { id: 'd', text: 'Honneur et patrie', isCorrect: false, feedback: 'Det er militærets motto.' },
      ],
      solution: '"Liberté, égalité, fraternité" (Frihet, likhet, brorskap) er Frankrikes motto siden revolusjonen.',
    },
    {
      id: 'fransk-2-6-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "la laïcité"?',
      options: [
        { id: 'a', text: 'Sekularisme - skille mellom stat og religion', isCorrect: true },
        { id: 'b', text: 'Frihet - rett til å gjøre hva man vil', isCorrect: false, feedback: '"Frihet" er "la liberté".' },
        { id: 'c', text: 'Brorskap - fellesskap mellom mennesker', isCorrect: false, feedback: '"Brorskap" er "la fraternité".' },
        { id: 'd', text: 'Demokrati - folkestyre', isCorrect: false, feedback: '"Demokrati" er "la démocratie".' },
      ],
      solution: '"La laïcité" er et sentralt fransk prinsipp om skille mellom stat og religion.',
    },
    {
      id: 'fransk-2-6-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva heter den avsluttende eksamenen på videregående i Frankrike?',
      options: [
        { id: 'a', text: 'Le baccalauréat (le bac)', isCorrect: true },
        { id: 'b', text: 'Le diplôme', isCorrect: false, feedback: '"Le diplôme" er et generelt ord for vitnemål.' },
        { id: 'c', text: 'L\'examen final', isCorrect: false, feedback: 'Det er ikke det offisielle navnet.' },
        { id: 'd', text: 'Le certificat', isCorrect: false, feedback: '"Le certificat" er et sertifikat.' },
      ],
      solution: '"Le baccalauréat" (ofte kalt "le bac") er den avsluttende eksamenen på lycée.',
    },
    {
      id: 'fransk-2-6-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er "la francophonie"?',
      options: [
        { id: 'a', text: 'Det franskspråklige fellesskapet i verden', isCorrect: true },
        { id: 'b', text: 'Den franske musikkindustrien', isCorrect: false, feedback: 'Det handler om språk, ikke musikk.' },
        { id: 'c', text: 'Fransk dialekt', isCorrect: false, feedback: 'Det er mye bredere enn en dialekt.' },
        { id: 'd', text: 'Fransk aksent', isCorrect: false, feedback: 'Det handler om det franskspråklige fellesskapet.' },
      ],
      solution: '"La francophonie" omfatter alle land og regioner der fransk snakkes - ca. 300 millioner mennesker!',
    },
  ],
};

// ============================================================================
// Kapittel 7: L'histoire de France
// ============================================================================

export const CHAPTER_FRANSK_2_7: TextbookChapter = {
  id: 'fransk-2-7',
  courseId: 'fransk-2',
  chapterNumber: '7',
  title: 'L\'histoire de France',
  description: 'Utforsk viktige hendelser og perioder i fransk historie.',
  estimatedMinutes: 75,
  competenceGoals: [
    'utforske og beskrive historiske hendelser og personer i franskspråklige områder',
    'reflektere over sammenhenger mellom historie og nåtid',
  ],
  content: [
    {
      id: 'fransk-2-7-intro',
      type: 'text',
      content: `Frankrike har en rik og dramatisk historie som har formet ikke bare Europa, men hele verden. Fra Gallernes motstand mot romerne til den franske revolusjonen - la oss utforske de viktigste hendelsene.`,
    },
    {
      id: 'fransk-2-7-text-1',
      type: 'text',
      title: 'Des Gaulois à Charlemagne',
      content: `**Les Gaulois** (Gallerne):
- Keltisk folk som bodde i Gallia
- Asterix-tegneserien er basert på dem!
- 52 f.Kr.: Vercingetorix overgir seg til Julius Caesar

**Le Moyen Âge** (Middelalderen):
- 800: Charlemagne (Karl den store) krones til keiser
- Korstogene (1096-1291)
- Hundreårskrigen med England (1337-1453)
- Jeanne d'Arc (1412-1431) - Frankrikes nasjonalhelgen`,
    },
    {
      id: 'fransk-2-7-text-2',
      type: 'text',
      title: 'La Renaissance et l\'Ancien Régime',
      content: `**La Renaissance** (1400-1600-tallet):
- François Ier - kunstens beskytter, inviterte Leonardo da Vinci
- Bygging av Loire-slottene

**L'Ancien Régime** (det gamle regimet):
- **Louis XIV** (1638-1715) - Solkongen, "L'État, c'est moi"
- Bygging av Versailles
- **Louis XVI** - den siste enevoldskongen, henrettet i 1793`,
    },
    {
      id: 'fransk-2-7-def-1',
      type: 'definition',
      title: 'La Révolution française (1789-1799)',
      content: `Den franske revolusjonen er en av historiens viktigste hendelser:

**Viktige datoer:**
- **14 juli 1789**: Storming av Bastillen
- **26 août 1789**: Erklæringen om menneskerettighetene
- **1792**: Første republikk proklamert
- **1793**: Louis XVI henrettes

**Viktige personer:**
- Robespierre - revolusjonens leder, senere henrettet
- Marie-Antoinette - dronningen, henrettet

**Arv:** Frihet, likhet, brorskap - prinsipper som fortsatt definerer Frankrike`,
    },
    {
      id: 'fransk-2-7-text-3',
      type: 'text',
      title: 'Napoléon et les guerres mondiales',
      content: `**Napoléon Bonaparte** (1769-1821):
- Keiser fra 1804 til 1814/1815
- Erobret store deler av Europa
- Code Napoléon - moderne lovverk
- Waterloo (1815) - det endelige nederlaget

**Les guerres mondiales:**
- **1914-1918**: La Première Guerre mondiale
  - Verdun, Somme - blodige slag på fransk jord
- **1940-1944**: L'Occupation allemande
  - Charles de Gaulle ledet motstanden fra London
  - La Résistance - den franske motstandsbevegelsen
- **6 juin 1944**: D-Day, frigjøringen begynner`,
    },
    {
      id: 'fransk-2-7-text-4',
      type: 'text',
      title: 'La France moderne',
      content: `**L'après-guerre:**
- 1958: Den femte republikk, de Gaulle blir president
- 1968: Mai 68 - studentopprør og generalstreik

**L'Union européenne:**
- Frankrike er grunnleggende medlem
- 2002: Euroen innføres

**Moderne Frankrike:**
- Multikulturellt samfunn
- Fortsatt global innflytelse (G7, FNs sikkerhetsråd)
- Utfordringer: terrorisme, gul vest-bevegelsen, pensonsreformer`,
    },
    {
      id: 'fransk-2-7-example-1',
      type: 'example',
      title: 'Historiske uttrykk',
      content: `**"L'État, c'est moi"** - *Staten, det er meg*
(Louis XIV - symboliserer enevelde)

**"Qu'ils mangent de la brioche"** - *La dem spise brioche*
(Tilskrevet Marie-Antoinette, men trolig apokryf)

**"Je vous ai compris"** - *Jeg har forstått dere*
(De Gaulle til kolonistene i Algerie, 1958)`,
    },
  ],
  exercises: [
    {
      id: 'fransk-2-7-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Når stormet folket Bastillen?',
      options: [
        { id: 'a', text: '14. juli 1789', isCorrect: true },
        { id: 'b', text: '14. juli 1889', isCorrect: false, feedback: 'Det var hundre år senere!' },
        { id: 'c', text: '4. juli 1789', isCorrect: false, feedback: '4. juli er USAs nasjonaldag.' },
        { id: 'd', text: '14. august 1789', isCorrect: false, feedback: 'Feil måned.' },
      ],
      solution: 'Den 14. juli 1789 stormet folket Bastillen - begynnelsen på den franske revolusjonen.',
    },
    {
      id: 'fransk-2-7-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvem var "Solkongen"?',
      options: [
        { id: 'a', text: 'Louis XIV', isCorrect: true },
        { id: 'b', text: 'Louis XVI', isCorrect: false, feedback: 'Louis XVI ble henrettet under revolusjonen.' },
        { id: 'c', text: 'Napoléon', isCorrect: false, feedback: 'Napoléon var keiser, ikke "Solkongen".' },
        { id: 'd', text: 'Charlemagne', isCorrect: false, feedback: 'Charlemagne levde i middelalderen.' },
      ],
      solution: 'Louis XIV (1638-1715) ble kalt "Solkongen" (le Roi-Soleil) og bygde Versailles.',
    },
    {
      id: 'fransk-2-7-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvem ledet den franske motstanden under andre verdenskrig?',
      options: [
        { id: 'a', text: 'Charles de Gaulle', isCorrect: true },
        { id: 'b', text: 'Napoléon Bonaparte', isCorrect: false, feedback: 'Napoléon levde på 1800-tallet.' },
        { id: 'c', text: 'Robespierre', isCorrect: false, feedback: 'Robespierre var aktiv under revolusjonen.' },
        { id: 'd', text: 'Louis XIV', isCorrect: false, feedback: 'Louis XIV levde på 1600-tallet.' },
      ],
      solution: 'Charles de Gaulle ledet "La France libre" fra London under okkupasjonen.',
    },
    {
      id: 'fransk-2-7-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva var "La Résistance"?',
      options: [
        { id: 'a', text: 'Den franske motstandsbevegelsen under 2. verdenskrig', isCorrect: true },
        { id: 'b', text: 'Den franske hæren under Napoléon', isCorrect: false, feedback: 'Det var noe helt annet.' },
        { id: 'c', text: 'Navnet på revolusjonen i 1789', isCorrect: false, feedback: 'Revolusjonen het ikke det.' },
        { id: 'd', text: 'En politisk parti i moderne Frankrike', isCorrect: false, feedback: 'Det var en motstandsbevegelse.' },
      ],
      solution: '"La Résistance" var den franske motstandsbevegelsen mot Nazi-Tyskland 1940-1944.',
    },
    {
      id: 'fransk-2-7-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er "Code Napoléon"?',
      options: [
        { id: 'a', text: 'Et moderne lovverk innført av Napoléon', isCorrect: true },
        { id: 'b', text: 'Napoléons militære strategi', isCorrect: false, feedback: 'Det handler om lover, ikke militær strategi.' },
        { id: 'c', text: 'Napoléons hemmelige kode', isCorrect: false, feedback: 'Det var et lovverk, ikke en kode.' },
        { id: 'd', text: 'Napoléons gravmonument', isCorrect: false, feedback: 'Napoléon er gravlagt i Les Invalides.' },
      ],
      solution: '"Code Napoléon" (1804) er et sivilt lovverk som fortsatt påvirker mange lands rettssystemer.',
    },
  ],
};

// ============================================================================
// Kapittel 8: L'environnement
// ============================================================================

export const CHAPTER_FRANSK_2_8: TextbookChapter = {
  id: 'fransk-2-8',
  courseId: 'fransk-2',
  chapterNumber: '8',
  title: 'L\'environnement',
  description: 'Diskuter miljøspørsmål og bærekraft på fransk.',
  estimatedMinutes: 70,
  competenceGoals: [
    'uttrykke seg om samfunnsspørsmål og aktuelle temaer',
    'bruke relevante begreper for å diskutere komplekse temaer',
  ],
  content: [
    {
      id: 'fransk-2-8-intro',
      type: 'text',
      content: `Miljø og bærekraft er blant vår tids viktigste temaer. Frankrike har vært vertskap for Parisavtalen (2015) og er aktiv i klimakampen. La oss lære ordforråd og uttrykk for å diskutere miljøspørsmål på fransk.`,
    },
    {
      id: 'fransk-2-8-def-1',
      type: 'definition',
      title: 'Miljøvokabular - grunnleggende',
      content: `**L'environnement** - miljøet
**La nature** - naturen
**L'écologie** - økologi
**Le climat** - klimaet
**La pollution** - forurensning
**Le réchauffement climatique** - global oppvarming
**Les gaz à effet de serre** - drivhusgasser
**L'empreinte carbone** - karbonfotavtrykk`,
    },
    {
      id: 'fransk-2-8-text-1',
      type: 'text',
      title: 'Les problèmes environnementaux',
      content: `**Miljøproblemer:**
- **La déforestation** - avskoging
- **La fonte des glaciers** - smelting av isbreer
- **L'élévation du niveau de la mer** - havnivåstigning
- **La perte de biodiversité** - tap av biologisk mangfold
- **La pollution de l'air/de l'eau** - luft-/vannforurensning
- **Les déchets plastiques** - plastavfall
- **L'extinction des espèces** - utryddelse av arter`,
    },
    {
      id: 'fransk-2-8-text-2',
      type: 'text',
      title: 'Les solutions',
      content: `**Løsninger og tiltak:**
- **Les énergies renouvelables** - fornybar energi
  - l'énergie solaire *(solenergi)*
  - l'énergie éolienne *(vindenergi)*
  - l'énergie hydraulique *(vannkraft)*
- **Le recyclage** - resirkulering
- **Le développement durable** - bærekraftig utvikling
- **La transition écologique** - økologisk omstilling
- **Les transports en commun** - kollektivtransport
- **Le véhicule électrique** - elbil`,
    },
    {
      id: 'fransk-2-8-example-1',
      type: 'example',
      title: 'Uttrykke meninger om miljø',
      content: `**For å uttrykke bekymring:**
- Je suis inquiet/inquiète pour l'avenir de la planète.
  *(Jeg er bekymret for planetens fremtid.)*
- Il est urgent d'agir contre le changement climatique.
  *(Det haster å handle mot klimaendringene.)*

**For å foreslå løsninger:**
- Nous devrions réduire notre consommation d'énergie.
  *(Vi burde redusere energiforbruket vårt.)*
- Il faudrait investir davantage dans les énergies renouvelables.
  *(Man burde investere mer i fornybar energi.)*

**For å uttrykke håp:**
- Je crois que nous pouvons changer les choses.
  *(Jeg tror vi kan endre ting.)*`,
    },
    {
      id: 'fransk-2-8-text-3',
      type: 'text',
      title: 'L\'Accord de Paris',
      content: `**Parisavtalen (2015):**
- Undertegnet av 196 land
- Mål: Begrense global oppvarming til 1,5-2°C
- Frankrike var vertskap - "COP21"

**Franske miljøtiltak:**
- Forbud mot engangsplast
- Utbygging av høyhastighetstog (TGV)
- Atomkraft (ca. 70% av elektrisiteten)
- Økte avgifter på fossilt drivstoff (utløste "gilets jaunes")`,
    },
    {
      id: 'fransk-2-8-tip-1',
      type: 'tip',
      content: `**Diskusjonstips:** Bruk uttrykk som "À mon avis..." (Etter min mening), "Je pense que..." (Jeg tror at), "Il me semble que..." (Det virker som om) for å introdusere dine synspunkter.`,
    },
  ],
  exercises: [
    {
      id: 'fransk-2-8-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "le réchauffement climatique"?',
      options: [
        { id: 'a', text: 'Global oppvarming', isCorrect: true },
        { id: 'b', text: 'Forurensning', isCorrect: false, feedback: '"Forurensning" er "la pollution".' },
        { id: 'c', text: 'Resirkulering', isCorrect: false, feedback: '"Resirkulering" er "le recyclage".' },
        { id: 'd', text: 'Bærekraft', isCorrect: false, feedback: '"Bærekraft" er "le développement durable".' },
      ],
      solution: '"Le réchauffement climatique" betyr "global oppvarming".',
    },
    {
      id: 'fransk-2-8-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er "les énergies renouvelables"?',
      options: [
        { id: 'a', text: 'Fornybar energi', isCorrect: true },
        { id: 'b', text: 'Atomenergi', isCorrect: false, feedback: '"Atomenergi" er "l\'énergie nucléaire".' },
        { id: 'c', text: 'Fossilt brensel', isCorrect: false, feedback: 'Det er det motsatte av fornybar.' },
        { id: 'd', text: 'Elektrisitet', isCorrect: false, feedback: '"Elektrisitet" er "l\'électricité".' },
      ],
      solution: '"Les énergies renouvelables" er fornybar energi som sol, vind og vann.',
    },
    {
      id: 'fransk-2-8-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "Nous devrions réduire notre consommation"?',
      options: [
        { id: 'a', text: 'Vi burde redusere forbruket vårt', isCorrect: true },
        { id: 'b', text: 'Vi vil øke forbruket vårt', isCorrect: false, feedback: '"Øke" er "augmenter", ikke "réduire".' },
        { id: 'c', text: 'Vi kan ikke redusere forbruket vårt', isCorrect: false, feedback: 'Setningen er positiv, ikke negativ.' },
        { id: 'd', text: 'Vi reduserte forbruket vårt', isCorrect: false, feedback: '"Devrions" er kondisjonalis, ikke fortid.' },
      ],
      solution: '"Devrions" er kondisjonalis av "devoir" (burde), "réduire" betyr å redusere.',
    },
    {
      id: 'fransk-2-8-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva heter Parisavtalen på fransk?',
      options: [
        { id: 'a', text: 'L\'Accord de Paris', isCorrect: true },
        { id: 'b', text: 'Le Traité de Paris', isCorrect: false, feedback: '"Traité" brukes ofte om eldre avtaler.' },
        { id: 'c', text: 'La Convention de Paris', isCorrect: false, feedback: 'Det er ikke det offisielle navnet.' },
        { id: 'd', text: 'Le Pacte de Paris', isCorrect: false, feedback: '"Pacte" er ikke riktig ord her.' },
      ],
      solution: '"L\'Accord de Paris" er den internasjonale klimaavtalen fra 2015.',
    },
    {
      id: 'fransk-2-8-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva betyr "l\'empreinte carbone"?',
      options: [
        { id: 'a', text: 'Karbonfotavtrykk', isCorrect: true },
        { id: 'b', text: 'Karbonavgift', isCorrect: false, feedback: '"Karbonavgift" er "la taxe carbone".' },
        { id: 'c', text: 'Karbondioksid', isCorrect: false, feedback: '"Karbondioksid" er "le dioxyde de carbone" eller "CO2".' },
        { id: 'd', text: 'Karbonnøytralitet', isCorrect: false, feedback: '"Karbonnøytralitet" er "la neutralité carbone".' },
      ],
      solution: '"L\'empreinte carbone" (karbonfotavtrykk) måler hvor mye CO2 man slipper ut.',
    },
  ],
};

// ============================================================================
// Kapittel 9: Le monde du travail
// ============================================================================

export const CHAPTER_FRANSK_2_9: TextbookChapter = {
  id: 'fransk-2-9',
  courseId: 'fransk-2',
  chapterNumber: '9',
  title: 'Le monde du travail',
  description: 'Lær om arbeidslivet, jobbsøking og karriere på fransk.',
  estimatedMinutes: 75,
  competenceGoals: [
    'kommunisere i formelle situasjoner',
    'forstå og produsere formelle tekster',
    'bruke språket i yrkesrelevante sammenhenger',
  ],
  content: [
    {
      id: 'fransk-2-9-intro',
      type: 'text',
      content: `Å kunne snakke om arbeid og karriere er viktig for fremtidige muligheter. La oss lære vokabular og uttrykk knyttet til arbeidslivet, jobbsøking og profesjonell kommunikasjon på fransk.`,
    },
    {
      id: 'fransk-2-9-def-1',
      type: 'definition',
      title: 'Arbeidsvokabular',
      content: `**Le travail** - arbeid/jobb
**L'emploi** - stilling/sysselsetting
**Le métier** - yrke
**La profession** - profesjon
**L'entreprise** - bedrift
**Le bureau** - kontor
**Le salaire** - lønn
**Le chômage** - arbeidsledighet
**La retraite** - pensjon`,
    },
    {
      id: 'fransk-2-9-text-1',
      type: 'text',
      title: 'Les métiers (Yrker)',
      content: `**Vanlige yrker:**
| Fransk | Norsk |
|--------|-------|
| le médecin | lege |
| l'avocat(e) | advokat |
| l'ingénieur(e) | ingeniør |
| le/la professeur(e) | lærer |
| l'infirmier/-ière | sykepleier |
| le/la comptable | regnskapsfører |
| le/la journaliste | journalist |
| le/la programmeur/-euse | programmerer |
| le/la chef d'entreprise | bedriftsleder |
| le/la vendeur/-euse | selger |`,
    },
    {
      id: 'fransk-2-9-text-2',
      type: 'text',
      title: 'La recherche d\'emploi (Jobbsøking)',
      content: `**Viktige dokumenter:**
- **Le CV (curriculum vitae)** - CV
- **La lettre de motivation** - søknadsbrev
- **Le diplôme** - vitnemål
- **Les références** - referanser

**Prosessen:**
- **Chercher un emploi** - søke jobb
- **Postuler à un poste** - søke på en stilling
- **Envoyer sa candidature** - sende søknaden
- **Passer un entretien** - ha jobbintervju
- **Être embauché(e)** - bli ansatt`,
    },
    {
      id: 'fransk-2-9-example-1',
      type: 'example',
      title: 'Formelle fraser i jobbsøking',
      content: `**I søknadsbrev:**
- Je me permets de vous adresser ma candidature pour le poste de...
  *(Jeg tillater meg å sende min søknad på stillingen som...)*
- Je suis vivement intéressé(e) par cette opportunité.
  *(Jeg er svært interessert i denne muligheten.)*
- Je reste à votre disposition pour un entretien.
  *(Jeg er tilgjengelig for et intervju.)*

**Avslutning:**
- Veuillez agréer, Madame/Monsieur, l'expression de mes salutations distinguées.
  *(Med vennlig hilsen - formell avslutning)*`,
    },
    {
      id: 'fransk-2-9-text-3',
      type: 'text',
      title: 'L\'entretien d\'embauche (Jobbintervju)',
      content: `**Vanlige spørsmål:**
- Parlez-moi de vous. *(Fortell om deg selv.)*
- Pourquoi voulez-vous travailler chez nous? *(Hvorfor vil du jobbe hos oss?)*
- Quelles sont vos qualités? *(Hva er dine styrker?)*
- Quels sont vos défauts? *(Hva er dine svakheter?)*
- Où vous voyez-vous dans cinq ans? *(Hvor ser du deg selv om fem år?)*

**Nyttige svar:**
- Je suis organisé(e) et travailleur/-euse. *(Jeg er organisert og arbeidsom.)*
- J'ai de l'expérience dans... *(Jeg har erfaring med...)*
- Je suis motivé(e) par... *(Jeg er motivert av...)*`,
    },
    {
      id: 'fransk-2-9-def-2',
      type: 'definition',
      title: 'Arbeidsforhold i Frankrike',
      content: `**Le contrat de travail:**
- **CDI** (Contrat à Durée Indéterminée) - fast stilling
- **CDD** (Contrat à Durée Déterminée) - midlertidig stilling
- **Stage** - praksisplass/internship

**Arbeidstid og rettigheter:**
- 35 heures par semaine - 35-timers uke
- 5 semaines de congés payés - 5 uker betalt ferie
- Le SMIC - minstlønn`,
    },
    {
      id: 'fransk-2-9-tip-1',
      type: 'tip',
      content: `**Kulturtips:** I franske jobbsøknader er det vanlig å inkludere bilde, alder og sivilstatus - ulikt Norge! CV-en bør være på én side og søknadsbrevet håndskrevet (noen ganger).`,
    },
  ],
  exercises: [
    {
      id: 'fransk-2-9-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "le CV"?',
      options: [
        { id: 'a', text: 'CV / Curriculum Vitae', isCorrect: true },
        { id: 'b', text: 'Søknadsbrev', isCorrect: false, feedback: '"Søknadsbrev" er "la lettre de motivation".' },
        { id: 'c', text: 'Vitnemål', isCorrect: false, feedback: '"Vitnemål" er "le diplôme".' },
        { id: 'd', text: 'Arbeidskontrakt', isCorrect: false, feedback: '"Arbeidskontrakt" er "le contrat de travail".' },
      ],
      solution: '"Le CV" står for "curriculum vitae" og inneholder arbeidserfaring og utdanning.',
    },
    {
      id: 'fransk-2-9-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "passer un entretien"?',
      options: [
        { id: 'a', text: 'Ha et jobbintervju', isCorrect: true },
        { id: 'b', text: 'Sende en søknad', isCorrect: false, feedback: 'Det er "envoyer sa candidature".' },
        { id: 'c', text: 'Bli ansatt', isCorrect: false, feedback: 'Det er "être embauché(e)".' },
        { id: 'd', text: 'Si opp jobben', isCorrect: false, feedback: 'Det er "démissionner".' },
      ],
      solution: '"Passer un entretien" betyr å ha/gjennomføre et jobbintervju.',
    },
    {
      id: 'fransk-2-9-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er en "CDI"?',
      options: [
        { id: 'a', text: 'Fast stilling (Contrat à Durée Indéterminée)', isCorrect: true },
        { id: 'b', text: 'Midlertidig stilling', isCorrect: false, feedback: 'Det er "CDD" (Contrat à Durée Déterminée).' },
        { id: 'c', text: 'Praksisplass', isCorrect: false, feedback: 'Det er "stage".' },
        { id: 'd', text: 'Deltidsjobb', isCorrect: false, feedback: 'Det er "travail à temps partiel".' },
      ],
      solution: 'CDI er en fast arbeidskontrakt uten sluttdato - den mest ettertraktede kontrakttypen.',
    },
    {
      id: 'fransk-2-9-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan sier du "Jeg har erfaring med markedsføring"?',
      options: [
        { id: 'a', text: 'J\'ai de l\'expérience dans le marketing', isCorrect: true },
        { id: 'b', text: 'Je suis expérience en marketing', isCorrect: false, feedback: 'Grammatisk feil - "être" passer ikke her.' },
        { id: 'c', text: 'J\'avais expérience du marketing', isCorrect: false, feedback: 'Feil artikkel og tid.' },
        { id: 'd', text: 'Je fais l\'expérience de marketing', isCorrect: false, feedback: '"Faire l\'expérience" betyr å oppleve, ikke å ha erfaring.' },
      ],
      solution: '"Avoir de l\'expérience dans" er den korrekte konstruksjonen.',
    },
    {
      id: 'fransk-2-9-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er den normale arbeidsuken i Frankrike?',
      options: [
        { id: 'a', text: '35 timer', isCorrect: true },
        { id: 'b', text: '40 timer', isCorrect: false, feedback: '40 timer er vanlig i mange land, men ikke i Frankrike.' },
        { id: 'c', text: '37,5 timer', isCorrect: false, feedback: 'Det er vanlig i Norge, ikke Frankrike.' },
        { id: 'd', text: '30 timer', isCorrect: false, feedback: 'Det er kortere enn den franske standarden.' },
      ],
      solution: 'Frankrike innførte 35-timers arbeidsuke i 2000 - "les 35 heures".',
    },
  ],
};

// ============================================================================
// Kapittel 10: Communication avancée
// ============================================================================

export const CHAPTER_FRANSK_2_10: TextbookChapter = {
  id: 'fransk-2-10',
  courseId: 'fransk-2',
  chapterNumber: '10',
  title: 'Communication avancée',
  description: 'Utvikle avanserte kommunikasjonsferdigheter - argumentere, nyansere og debattere.',
  estimatedMinutes: 80,
  competenceGoals: [
    'delta i samtaler og diskusjoner om ulike temaer',
    'uttrykke og begrunne egne meninger',
    'bruke ulike strategier for kommunikasjon',
  ],
  content: [
    {
      id: 'fransk-2-10-intro',
      type: 'text',
      content: `På dette nivået handler det om å kommunisere nyansert og overbevisende. La oss lære teknikker for å argumentere, uttrykke enighet og uenighet, og føre gode diskusjoner på fransk.`,
    },
    {
      id: 'fransk-2-10-text-1',
      type: 'text',
      title: 'Exprimer son opinion (Uttrykke mening)',
      content: `**Introdusere din mening:**
- À mon avis... *(Etter min mening...)*
- Selon moi... *(Ifølge meg...)*
- Je pense que... *(Jeg tror/mener at...)*
- Je crois que... *(Jeg tror at...)*
- Il me semble que... *(Det virker for meg som...)*
- J'ai l'impression que... *(Jeg har inntrykk av at...)*

**Sterkere meninger:**
- Je suis convaincu(e) que... *(Jeg er overbevist om at...)*
- Je suis persuadé(e) que... *(Jeg er sikker på at...)*
- Il est évident que... *(Det er åpenbart at...)*`,
    },
    {
      id: 'fransk-2-10-text-2',
      type: 'text',
      title: 'Exprimer l\'accord et le désaccord',
      content: `**Enighet:**
- Je suis d'accord avec toi/vous. *(Jeg er enig med deg/Dem.)*
- C'est vrai. *(Det er sant.)*
- Exactement! / Absolument! *(Akkurat! / Absolutt!)*
- Tu as/Vous avez raison. *(Du/De har rett.)*
- Je partage ton/votre point de vue. *(Jeg deler ditt/Deres synspunkt.)*

**Uenighet (høflig):**
- Je ne suis pas tout à fait d'accord. *(Jeg er ikke helt enig.)*
- Je vois les choses différemment. *(Jeg ser ting annerledes.)*
- C'est discutable. *(Det er diskutabelt.)*
- Je comprends ton point de vue, mais... *(Jeg forstår synspunktet ditt, men...)*

**Sterkere uenighet:**
- Je ne suis pas du tout d'accord. *(Jeg er overhodet ikke enig.)*
- C'est faux! *(Det er galt!)*`,
    },
    {
      id: 'fransk-2-10-example-1',
      type: 'example',
      title: 'Argumentere og begrunne',
      content: `**Introdusere argumenter:**
- Premièrement... Deuxièmement... Enfin...
  *(For det første... For det andre... Til slutt...)*
- D'une part... D'autre part...
  *(På den ene siden... På den andre siden...)*
- D'abord... Ensuite... Puis... Finalement...
  *(Først... Deretter... Så... Til slutt...)*

**Gi grunner:**
- ...parce que / car... *(...fordi...)*
- ...puisque... *(...ettersom...)*
- C'est pourquoi... *(Derfor...)*
- En raison de... *(På grunn av...)*

**Gi eksempler:**
- Par exemple... *(For eksempel...)*
- Prenons l'exemple de... *(La oss ta eksempelet med...)*`,
    },
    {
      id: 'fransk-2-10-text-3',
      type: 'text',
      title: 'Nuancer son propos (Nyansere)',
      content: `**Myke opp påstander:**
- Il est possible que... (+subjonctif) *(Det er mulig at...)*
- Il se peut que... (+subjonctif) *(Det kan hende at...)*
- Peut-être que... *(Kanskje...)*
- En général... *(Generelt sett...)*
- Dans la plupart des cas... *(I de fleste tilfeller...)*

**Innrømme motargumenter:**
- Certes... mais... *(Riktignok... men...)*
- Il est vrai que... cependant... *(Det er sant at... likevel...)*
- Bien que (+subjonctif)... *(Selv om...)*
- Malgré... *(Til tross for...)*`,
    },
    {
      id: 'fransk-2-10-def-1',
      type: 'definition',
      title: 'Konnektorer for sammenheng',
      content: `**Tillegg:**
- de plus, en outre, également *(dessuten, i tillegg)*

**Motsetning:**
- mais, cependant, pourtant, toutefois *(men, likevel, imidlertid)*

**Årsak:**
- car, parce que, puisque *(for, fordi, ettersom)*

**Konsekvens:**
- donc, par conséquent, ainsi *(altså, følgelig, dermed)*

**Konklusjon:**
- en conclusion, pour conclure, bref *(avslutningsvis, for å konkludere, kort sagt)*`,
    },
    {
      id: 'fransk-2-10-example-2',
      type: 'example',
      title: 'Eksempel på strukturert argument',
      content: `**Tema: Bør skoleuniformer innføres?**

*À mon avis, les uniformes scolaires présentent des avantages.*

*Premièrement, ils créent un sentiment d'égalité entre les élèves. En effet, personne ne peut juger les autres sur leurs vêtements.*

*De plus, ils simplifient la routine matinale des familles.*

*Cependant, il est vrai que certains y voient une atteinte à la liberté d'expression.*

*En conclusion, bien que le débat reste ouvert, je pense que les avantages l'emportent.*`,
    },
    {
      id: 'fransk-2-10-tip-1',
      type: 'tip',
      content: `**Kommunikasjonstips:** I franske diskusjoner verdsettes det å strukturere argumentene godt og å anerkjenne motpartens synspunkter før du argumenterer imot. Bruk "Certes... mais..." for å vise at du har forstått begge sider.`,
    },
  ],
  exercises: [
    {
      id: 'fransk-2-10-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvordan sier du "Etter min mening" på fransk?',
      options: [
        { id: 'a', text: 'À mon avis', isCorrect: true },
        { id: 'b', text: 'À mon opinion', isCorrect: false, feedback: 'Man sier "avis", ikke "opinion" i dette uttrykket.' },
        { id: 'c', text: 'Pour mon avis', isCorrect: false, feedback: 'Feil preposisjon - bruk "à", ikke "pour".' },
        { id: 'd', text: 'De mon avis', isCorrect: false, feedback: 'Feil preposisjon - bruk "à", ikke "de".' },
      ],
      solution: '"À mon avis" er den vanlige måten å introdusere sin mening på fransk.',
    },
    {
      id: 'fransk-2-10-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvordan uttrykker du høflig uenighet?',
      options: [
        { id: 'a', text: 'Je ne suis pas tout à fait d\'accord', isCorrect: true },
        { id: 'b', text: 'C\'est complètement faux!', isCorrect: false, feedback: 'Det er for sterkt og uhøflig.' },
        { id: 'c', text: 'Tu as tort!', isCorrect: false, feedback: 'Det er direkte og kan virke frekt.' },
        { id: 'd', text: 'Non!', isCorrect: false, feedback: 'Det er for bryskt for en høflig diskusjon.' },
      ],
      solution: '"Je ne suis pas tout à fait d\'accord" (Jeg er ikke helt enig) er høflig og nyansert.',
    },
    {
      id: 'fransk-2-10-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "Certes... mais..."?',
      options: [
        { id: 'a', text: 'Riktignok... men...', isCorrect: true },
        { id: 'b', text: 'Absolutt... og...', isCorrect: false, feedback: '"Mais" betyr "men", ikke "og".' },
        { id: 'c', text: 'Kanskje... eller...', isCorrect: false, feedback: 'Feil oversettelse.' },
        { id: 'd', text: 'Sikkert... derfor...', isCorrect: false, feedback: '"Mais" betyr "men", ikke "derfor".' },
      ],
      solution: '"Certes... mais..." brukes for å anerkjenne et poeng før man argumenterer imot.',
    },
    {
      id: 'fransk-2-10-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken konnektor brukes for å introdusere en konsekvens?',
      options: [
        { id: 'a', text: 'donc', isCorrect: true },
        { id: 'b', text: 'car', isCorrect: false, feedback: '"Car" introduserer en årsak, ikke konsekvens.' },
        { id: 'c', text: 'mais', isCorrect: false, feedback: '"Mais" introduserer en motsetning.' },
        { id: 'd', text: 'de plus', isCorrect: false, feedback: '"De plus" legger til informasjon.' },
      ],
      solution: '"Donc" (altså/derfor) introduserer en konsekvens eller konklusjon.',
    },
    {
      id: 'fransk-2-10-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Fullfør: "_____ le problème soit complexe, je crois qu\'on peut le résoudre."',
      options: [
        { id: 'a', text: 'Bien que', isCorrect: true },
        { id: 'b', text: 'Parce que', isCorrect: false, feedback: '"Parce que" tar indikativ og passer ikke betydningsmessig.' },
        { id: 'c', text: 'Donc', isCorrect: false, feedback: '"Donc" passer ikke grammatisk her.' },
        { id: 'd', text: 'Car', isCorrect: false, feedback: '"Car" tar indikativ og passer ikke.' },
      ],
      solution: '"Bien que" (selv om) + subjonctif ("soit") er korrekt konstruksjon.',
    },
    {
      id: 'fransk-2-10-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er riktig rekkefølge for å strukturere et argument?',
      options: [
        { id: 'a', text: 'Premièrement... Deuxièmement... Enfin...', isCorrect: true },
        { id: 'b', text: 'Enfin... Premièrement... Deuxièmement...', isCorrect: false, feedback: '"Enfin" (til slutt) kommer sist.' },
        { id: 'c', text: 'Deuxièmement... Enfin... Premièrement...', isCorrect: false, feedback: 'Feil rekkefølge - start med "Premièrement".' },
        { id: 'd', text: 'Premièrement... Enfin... Deuxièmement...', isCorrect: false, feedback: '"Enfin" kommer etter alle de nummererte punktene.' },
      ],
      solution: 'Korrekt rekkefølge: Premièrement (for det første), Deuxièmement (for det andre), Enfin (til slutt).',
    },
  ],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const FRANSK_2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_FRANSK_2_1,
  CHAPTER_FRANSK_2_2,
  CHAPTER_FRANSK_2_3,
  CHAPTER_FRANSK_2_4,
  CHAPTER_FRANSK_2_5,
  CHAPTER_FRANSK_2_6,
  CHAPTER_FRANSK_2_7,
  CHAPTER_FRANSK_2_8,
  CHAPTER_FRANSK_2_9,
  CHAPTER_FRANSK_2_10,
];
