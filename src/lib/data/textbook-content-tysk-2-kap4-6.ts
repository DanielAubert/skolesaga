/* eslint-disable */
// @ts-nocheck
/**
 * Tysk Nivå 2 - Kapittel 4-6
 * Adjektivdeklination, Deutsche Literatur und Medien, Geschichte und Politik
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 4.1: Starke Deklination
// ============================================================================

export const CHAPTER_TYSK_2_4_1: TextbookChapter = {
  id: 'tysk-2-4-1',
  courseId: 'tysk-2',
  chapterNumber: '4.1',
  title: 'Starke Deklination',
  subtitle: 'Adjektiv uten artikkel',
  description: 'Laer adjektivboyning uten artikkel - den sterke deklinasjonen.',
  estimatedMinutes: 45,
  competenceGoals: [
    'boye adjektiver korrekt uten artikkel',
    'bruke sterk deklinasjon i praktiske situasjoner',
  ],
  content: [
    {
      id: 'tysk-2-4-1-intro',
      type: 'text',
      content: `## Sterk deklinasjon - Adjektiv uten artikkel

Nar et adjektiv star foran et substantiv **uten artikkel**, ma adjektivet selv vise kjonn, tall og kasus. Dette kalles **sterk deklinasjon** fordi adjektivet tar pa seg hele boyningsjobben.

Sterk deklinasjon brukes:
- Etter mengdeord uten artikkel (viel, wenig, einige, mehrere)
- Etter tall (zwei, drei, etc.)
- Nar det ikke er noen artikkel i det hele tatt`,
    },
    {
      id: 'tysk-2-4-1-def-1',
      type: 'definition',
      title: 'Sterk deklinasjon - Oversikt',
      content: `**Endelser i sterk deklinasjon:**

| Kasus | Maskulin | Feminin | Noytrum | Flertall |
|-------|----------|---------|---------|----------|
| Nominativ | -er | -e | -es | -e |
| Akkusativ | -en | -e | -es | -e |
| Dativ | -em | -er | -em | -en |
| Genitiv | -en | -er | -en | -er |

Merk: Endelsene ligner pa bestemt artikkel (der, die, das)!`,
    },
    {
      id: 'tysk-2-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Maskulin og feminin',
      problem: `Boy adjektivet "frisch" (fersk) med substantivene:
a) ___ Kaffee (m) - nominativ
b) ___ Milch (f) - akkusativ
c) ___ Fisch (m) - dativ`,
      solution: `a) **frischer** Kaffee (maskulin nominativ: -er)
b) **frische** Milch (feminin akkusativ: -e)
c) mit **frischem** Fisch (maskulin dativ: -em)

Huskeregel: Adjektivet viser kjonn og kasus nar artikkelen mangler!`,
    },
    {
      id: 'tysk-2-4-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-4-1-ex-1',
        number: '4.1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig adjektivendelse (sterk deklinasjon):',
        subTasks: [
          { label: 'a', task: 'kalt___ Wasser (n, nom)', solution: 'kaltes Wasser', answer: 'kaltes' },
          { label: 'b', task: 'frisch___ Luft (f, nom)', solution: 'frische Luft', answer: 'frische' },
          { label: 'c', task: 'gut___ Wein (m, nom)', solution: 'guter Wein', answer: 'guter' },
        ],
        solution: 'a) kaltes (noytrum nom: -es), b) frische (feminin nom: -e), c) guter (maskulin nom: -er)',
        hints: ['Sterk bøyning: adjektivet viser kjønn med endelse som ligner artikkelen'],
      },
    },
    {
      id: 'tysk-2-4-1-text-2',
      type: 'text',
      content: `## Noytrum og flertall

Noytrum far endelsen **-es** i nominativ og akkusativ, mens flertall far **-e** i nominativ og akkusativ. I dativ far flertall alltid **-en** (og substantivet far ofte -n).

**Eksempler med noytrum:**
- Frisches Brot schmeckt am besten. (Ferskt brod smaker best.)
- Ich trinke kaltes Wasser. (Jeg drikker kaldt vann.)

**Eksempler med flertall:**
- Kleine Kinder spielen gern. (Sma barn leker gjerne.)
- Mit guten Freunden macht alles Spass. (Med gode venner er alt goy.)`,
    },
    {
      id: 'tysk-2-4-1-example-2',
      type: 'example',
      title: 'Eksempel: Noytrum og flertall',
      problem: `Boy adjektivet "warm" med:
a) ___ Brot (n) - nominativ
b) ___ Suppe (f) - akkusativ
c) ___ Tage (pl) - dativ`,
      solution: `a) **warmes** Brot (noytrum nominativ: -es)
b) **warme** Suppe (feminin akkusativ: -e)
c) an **warmen** Tagen (flertall dativ: -en)

Husk: Flertall dativ - bade adjektiv (-en) og substantiv far ofte -n!`,
    },
    {
      id: 'tysk-2-4-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-4-1-ex-2',
        number: '4.1.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig adjektivendelse:',
        subTasks: [
          { label: 'a', task: 'dunkel___ Bier (n, akk)', solution: 'dunkles Bier', answer: 'dunkles' },
          { label: 'b', task: 'alt___ Freunde (pl, nom)', solution: 'alte Freunde', answer: 'alte' },
          { label: 'c', task: 'mit stark___ Kaffee (m, dat)', solution: 'mit starkem Kaffee', answer: 'starkem' },
          { label: 'd', task: 'bei schlecht___ Wetter (n, dat)', solution: 'bei schlechtem Wetter', answer: 'schlechtem' },
        ],
        solution: 'a) dunkles (-es), b) alte (-e), c) starkem (-em), d) schlechtem (-em)',
        hints: ['Noytrum nom/akk: -es', 'Flertall nom/akk: -e', 'Dativ maskulin/noytrum: -em'],
      },
    },
    {
      id: 'tysk-2-4-1-text-3',
      type: 'text',
      content: `## Etter mengdeord og tall

Sterk deklinasjon brukes ogsa etter mengdeord som **viel**, **wenig**, **einige**, **mehrere**, **manche**, og etter talord.

**Eksempler:**
- Viele junge Menschen reisen gern. (Mange unge mennesker reiser gjerne.)
- Einige alte Hauser stehen noch. (Noen gamle hus star fortsatt.)
- Zwei kleine Kinder spielten im Garten. (To sma barn lekte i hagen.)
- Mit wenig neuem Geld kann man viel machen. (Med lite nye penger kan man gjore mye.)`,
    },
    {
      id: 'tysk-2-4-1-example-3',
      type: 'example',
      title: 'Eksempel: Med mengdeord',
      problem: `Oversett til tysk med sterk deklinasjon:
a) mange interessante boker
b) noen gode ideer
c) med lite varmt vann`,
      solution: `a) **viele interessante Bucher** (flertall nominativ: -e)
b) **einige gute Ideen** (flertall nominativ: -e)
c) **mit wenig warmem Wasser** (noytrum dativ: -em)`,
    },
    {
      id: 'tysk-2-4-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-4-1-ex-3',
        number: '4.1.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til tysk med sterk deklinasjon:',
        subTasks: [
          { label: 'a', task: 'fersk frukt (f, nom)', solution: 'frische Frucht', answer: 'frische Frucht' },
          { label: 'b', task: 'med god samvittighet (n, dat)', solution: 'mit gutem Gewissen', answer: 'mit gutem Gewissen' },
          { label: 'c', task: 'flere unge kunstnere (pl, nom)', solution: 'mehrere junge Kunstler', answer: 'mehrere junge Künstler' },
          { label: 'd', task: 'pa grunn av darlig vaer (n, gen)', solution: 'wegen schlechten Wetters', answer: 'wegen schlechten Wetters' },
        ],
        solution: 'a) frische Frucht, b) mit gutem Gewissen, c) mehrere junge Künstler, d) wegen schlechten Wetters',
        hints: ['Genitiv noytrum: -en', 'Husk at genitiv noytrum far -en, ikke -es'],
      },
    },
    {
      id: 'tysk-2-4-1-tip-1',
      type: 'tip',
      content: `**Huskeregel for sterk deklinasjon:** Tenk pa endelsene til bestemt artikkel (der, die, das, den, dem). Adjektivet far lignende endelser nar artikkelen mangler!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.2: Schwache Deklination
// ============================================================================

export const CHAPTER_TYSK_2_4_2: TextbookChapter = {
  id: 'tysk-2-4-2',
  courseId: 'tysk-2',
  chapterNumber: '4.2',
  title: 'Schwache Deklination',
  subtitle: 'Adjektiv med bestemt artikkel',
  description: 'Laer adjektivboyning med bestemt artikkel - den svake deklinasjonen.',
  estimatedMinutes: 45,
  competenceGoals: [
    'boye adjektiver korrekt med bestemt artikkel',
    'forstå forskjellen mellom sterk og svak deklinasjon',
  ],
  content: [
    {
      id: 'tysk-2-4-2-intro',
      type: 'text',
      content: `## Svak deklinasjon - Adjektiv med bestemt artikkel

Nar et adjektiv star etter **bestemt artikkel** (der, die, das), trenger ikke adjektivet a vise kjonn og kasus - det gjor artikkelen allerede! Derfor far adjektivet bare enkle endelser: **-e** eller **-en**.

Svak deklinasjon brukes etter:
- Bestemt artikkel (der, die, das)
- dieser, jener, jeder, welcher, mancher
- alle, beide, samtliche`,
    },
    {
      id: 'tysk-2-4-2-def-1',
      type: 'definition',
      title: 'Svak deklinasjon - Oversikt',
      content: `**Endelser i svak deklinasjon:**

| Kasus | Maskulin | Feminin | Noytrum | Flertall |
|-------|----------|---------|---------|----------|
| Nominativ | -e | -e | -e | -en |
| Akkusativ | -en | -e | -e | -en |
| Dativ | -en | -en | -en | -en |
| Genitiv | -en | -en | -en | -en |

**Huskeregel:** Nominativ entall far -e, nesten alt annet far -en!`,
    },
    {
      id: 'tysk-2-4-2-example-1',
      type: 'example',
      title: 'Eksempel: Nominativ og akkusativ',
      problem: `Boy adjektivet "neu" (ny) med bestemt artikkel:
a) d___ neu___ Lehrer (m) - nominativ
b) d___ neu___ Schule (f) - akkusativ
c) d___ neu___ Buch (n) - nominativ`,
      solution: `a) **der neue** Lehrer (maskulin nominativ: -e)
b) **die neue** Schule (feminin akkusativ: -e)
c) **das neue** Buch (noytrum nominativ: -e)

Nominativ entall far alltid -e uansett kjonn!`,
    },
    {
      id: 'tysk-2-4-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-4-2-ex-1',
        number: '4.2.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig adjektivendelse (svak deklinasjon):',
        subTasks: [
          { label: 'a', task: 'der alt___ Mann', solution: 'der alte Mann', answer: 'alte' },
          { label: 'b', task: 'die schon___ Frau', solution: 'die schone Frau', answer: 'schöne' },
          { label: 'c', task: 'das klein___ Kind', solution: 'das kleine Kind', answer: 'kleine' },
        ],
        solution: 'a) alte (-e), b) schöne (-e), c) kleine (-e) - Alle nominativ entall far -e',
        hints: ['Nominativ entall med bestemt artikkel: alltid -e'],
      },
    },
    {
      id: 'tysk-2-4-2-text-2',
      type: 'text',
      content: `## Dativ og akkusativ

I **dativ** far adjektivet alltid **-en** uansett kjonn og tall. I **akkusativ** far maskulin -en, mens feminin og noytrum beholder -e.

**Eksempler i dativ:**
- Ich helfe dem alten Mann. (Jeg hjelper den gamle mannen.)
- Sie wohnt in der neuen Wohnung. (Hun bor i den nye leiligheten.)
- Mit dem kleinen Kind. (Med det lille barnet.)

**Eksempler i akkusativ:**
- Ich sehe den alten Mann. (Jeg ser den gamle mannen.) - maskulin far -en
- Ich sehe die neue Schule. (Jeg ser den nye skolen.) - feminin beholder -e`,
    },
    {
      id: 'tysk-2-4-2-example-2',
      type: 'example',
      title: 'Eksempel: Dativ',
      problem: `Boy med bestemt artikkel i dativ:
a) mit d___ alt___ Auto (n)
b) in d___ gross___ Stadt (f)
c) bei d___ nett___ Leuten (pl)`,
      solution: `a) mit **dem alten** Auto (noytrum dativ: -en)
b) in **der grossen** Stadt (feminin dativ: -en)
c) bei **den netten** Leuten (flertall dativ: -en)

I dativ far adjektivet ALLTID -en!`,
    },
    {
      id: 'tysk-2-4-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-4-2-ex-2',
        number: '4.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig endelse:',
        subTasks: [
          { label: 'a', task: 'Ich kaufe den neu___ Computer (m, akk)', solution: 'den neuen Computer', answer: 'neuen' },
          { label: 'b', task: 'mit der alt___ Freundin (f, dat)', solution: 'mit der alten Freundin', answer: 'alten' },
          { label: 'c', task: 'die klein___ Kinder (pl, nom)', solution: 'die kleinen Kinder', answer: 'kleinen' },
          { label: 'd', task: 'in dem schon___ Haus (n, dat)', solution: 'in dem schönen Haus', answer: 'schönen' },
        ],
        solution: 'a) neuen, b) alten, c) kleinen, d) schönen - Alle far -en unntatt nom/akk entall f/n',
        hints: ['Maskulin akkusativ: -en', 'Dativ: alltid -en', 'Flertall: alltid -en'],
      },
    },
    {
      id: 'tysk-2-4-2-text-3',
      type: 'text',
      content: `## Etter "dieser", "jeder", "welcher"

Ord som **dieser** (denne), **jeder** (hver), **welcher** (hvilken), **jener** (den der), **mancher** (mang en), og **alle** (alle) fungerer som bestemt artikkel - adjektivet far svak boyning.

**Eksempler:**
- Dieser alte Film ist interessant. (Denne gamle filmen er interessant.)
- Jedes kleine Kind braucht Liebe. (Hvert lite barn trenger kjaerlighet.)
- Welchen neuen Lehrer meinst du? (Hvilken ny laerer mener du?)
- Alle guten Dinge sind drei. (Alle gode ting er tre.)`,
    },
    {
      id: 'tysk-2-4-2-example-3',
      type: 'example',
      title: 'Eksempel: Med dieser/jeder/alle',
      problem: `Boy adjektivet korrekt:
a) dies___ interessant___ Buch (n, nom)
b) jed___ klein___ Schritt (m, nom)
c) all___ gut___ Freunde (pl, nom)`,
      solution: `a) **dieses interessante** Buch (noytrum nominativ)
b) **jeder kleine** Schritt (maskulin nominativ)
c) **alle guten** Freunde (flertall - alltid -en)

Husk: Etter dieser/jeder/alle = svak boyning!`,
    },
    {
      id: 'tysk-2-4-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-4-2-ex-3',
        number: '4.2.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til tysk med svak deklinasjon:',
        subTasks: [
          { label: 'a', task: 'den vakre blomsten (f, akk)', solution: 'die schone Blume', answer: 'die schöne Blume' },
          { label: 'b', task: 'med de hyggelige naboene (pl, dat)', solution: 'mit den netten Nachbarn', answer: 'mit den netten Nachbarn' },
          { label: 'c', task: 'hver ung student (m, nom)', solution: 'jeder junge Student', answer: 'jeder junge Student' },
          { label: 'd', task: 'dette interessante spoersmalet (n, akk)', solution: 'dieses interessante Problem', answer: 'dieses interessante Problem' },
        ],
        solution: 'a) die schöne Blume, b) mit den netten Nachbarn, c) jeder junge Student, d) dieses interessante Problem',
        hints: ['Feminin akk: -e', 'Dativ flertall: -en', 'Etter jeder: svak boyning'],
      },
    },
    {
      id: 'tysk-2-4-2-tip-1',
      type: 'tip',
      content: `**Enkel huskeregel:** Med bestemt artikkel er adjektivet "lat" - det tar bare -e eller -en. Artikkelen gjor jobben med a vise kjonn og kasus!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.3: Gemischte Deklination
// ============================================================================

export const CHAPTER_TYSK_2_4_3: TextbookChapter = {
  id: 'tysk-2-4-3',
  courseId: 'tysk-2',
  chapterNumber: '4.3',
  title: 'Gemischte Deklination',
  subtitle: 'Adjektiv med ubestemt artikkel',
  description: 'Laer adjektivboyning med ubestemt artikkel - den blandede deklinasjonen.',
  estimatedMinutes: 45,
  competenceGoals: [
    'boye adjektiver korrekt med ubestemt artikkel',
    'mestre alle tre deklinasjonstyper',
  ],
  content: [
    {
      id: 'tysk-2-4-3-intro',
      type: 'text',
      content: `## Blandet deklinasjon - Adjektiv med ubestemt artikkel

**Ubestemt artikkel** (ein, eine, ein) viser ikke alltid kjonn tydelig. Derfor ma adjektivet noen ganger hjelpe til - en blanding av sterk og svak deklinasjon!

Blandet deklinasjon brukes etter:
- Ubestemt artikkel (ein, eine, ein)
- Nektende artikkel (kein, keine)
- Eiendomsord (mein, dein, sein, ihr, unser, euer, ihr)`,
    },
    {
      id: 'tysk-2-4-3-def-1',
      type: 'definition',
      title: 'Blandet deklinasjon - Oversikt',
      content: `**Endelser i blandet deklinasjon:**

| Kasus | Maskulin | Feminin | Noytrum | Flertall |
|-------|----------|---------|---------|----------|
| Nominativ | -er | -e | -es | -en |
| Akkusativ | -en | -e | -es | -en |
| Dativ | -en | -en | -en | -en |
| Genitiv | -en | -en | -en | -en |

**Viktig:** I nominativ og akkusativ ligner det sterk deklinasjon (adjektivet viser kjonn), i dativ/genitiv ligner det svak (bare -en).`,
    },
    {
      id: 'tysk-2-4-3-example-1',
      type: 'example',
      title: 'Eksempel: Med ubestemt artikkel',
      problem: `Boy adjektivet "gut" (god) med ubestemt artikkel:
a) ein gut___ Freund (m, nom)
b) eine gut___ Idee (f, nom)
c) ein gut___ Buch (n, nom)`,
      solution: `a) ein **guter** Freund (maskulin nominativ: -er)
b) eine **gute** Idee (feminin nominativ: -e)
c) ein **gutes** Buch (noytrum nominativ: -es)

I nominativ viser adjektivet kjonn fordi "ein" er lik for m/n!`,
    },
    {
      id: 'tysk-2-4-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-4-3-ex-1',
        number: '4.3.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig adjektivendelse (blandet deklinasjon):',
        subTasks: [
          { label: 'a', task: 'ein alt___ Mann (m, nom)', solution: 'ein alter Mann', answer: 'alter' },
          { label: 'b', task: 'eine jung___ Frau (f, nom)', solution: 'eine junge Frau', answer: 'junge' },
          { label: 'c', task: 'ein klein___ Haus (n, nom)', solution: 'ein kleines Haus', answer: 'kleines' },
        ],
        solution: 'a) alter (-er), b) junge (-e), c) kleines (-es)',
        hints: ['I nominativ viser adjektivet kjonn: m=-er, f=-e, n=-es'],
      },
    },
    {
      id: 'tysk-2-4-3-text-2',
      type: 'text',
      content: `## Med eiendomsord (mein, dein, sein...)

Eiendomsord (possessivartikel) fungerer akkurat som ubestemt artikkel - adjektivet far blandet deklinasjon.

**Eksempler:**
- Mein alter Freund ist hier. (Min gamle venn er her.)
- Deine neue Jacke ist schon. (Din nye jakke er fin.)
- Sein kleines Auto ist praktisch. (Hans lille bil er praktisk.)
- Unsere guten Freunde kommen morgen. (Vare gode venner kommer i morgen.)`,
    },
    {
      id: 'tysk-2-4-3-example-2',
      type: 'example',
      title: 'Eksempel: Med eiendomsord i akkusativ',
      problem: `Boy adjektivet i akkusativ:
a) Ich sehe mein___ neu___ Auto (n)
b) Er kauft sein___ alt___ Haus (n)
c) Sie sucht ihr___ rot___ Tasche (f)`,
      solution: `a) Ich sehe **mein neues** Auto (noytrum akkusativ: -es)
b) Er kauft **sein altes** Haus (noytrum akkusativ: -es)
c) Sie sucht **ihre rote** Tasche (feminin akkusativ: -e)

Noytrum akkusativ = nominativ (begge -es). Feminin beholder -e.`,
    },
    {
      id: 'tysk-2-4-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-4-3-ex-2',
        number: '4.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig endelse:',
        subTasks: [
          { label: 'a', task: 'Ich besuche meinen alt___ Onkel (m, akk)', solution: 'meinen alten Onkel', answer: 'alten' },
          { label: 'b', task: 'mit deiner neu___ Freundin (f, dat)', solution: 'mit deiner neuen Freundin', answer: 'neuen' },
          { label: 'c', task: 'in seinem gross___ Garten (m, dat)', solution: 'in seinem grossen Garten', answer: 'großen' },
          { label: 'd', task: 'unsere gut___ Nachbarn (pl, nom)', solution: 'unsere guten Nachbarn', answer: 'guten' },
        ],
        solution: 'a) alten, b) neuen, c) großen, d) guten',
        hints: ['Maskulin akkusativ: -en', 'Dativ: alltid -en', 'Flertall: alltid -en'],
      },
    },
    {
      id: 'tysk-2-4-3-text-3',
      type: 'text',
      content: `## Med "kein" (ingen/ikke noen)

Nektende artikkel **kein** boyer akkurat som eiendomsord - adjektivet far blandet deklinasjon.

**Eksempler:**
- Kein guter Mensch wurde das tun. (Intet godt menneske ville gjore det.)
- Ich habe keine neue Idee. (Jeg har ingen ny ide.)
- Das ist kein grosses Problem. (Det er ikke noe stort problem.)
- Keine alten Hauser stehen mehr dort. (Ingen gamle hus star der lenger.)`,
    },
    {
      id: 'tysk-2-4-3-example-3',
      type: 'example',
      title: 'Eksempel: Med kein',
      problem: `Boy adjektivet med "kein":
a) Das ist kein___ gut___ Losung (f, nom)
b) Ich habe kein___ gross___ Hunger (m, akk)
c) mit kein___ gut___ Gewissen (n, dat)`,
      solution: `a) Das ist **keine gute** Losung (feminin nominativ)
b) Ich habe **keinen grossen** Hunger (maskulin akkusativ)
c) mit **keinem guten** Gewissen (noytrum dativ)`,
    },
    {
      id: 'tysk-2-4-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-4-3-ex-3',
        number: '4.3.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til tysk med blandet deklinasjon:',
        subTasks: [
          { label: 'a', task: 'en interessant bok (f, nom)', solution: 'ein interessantes Buch', answer: 'ein interessantes Buch' },
          { label: 'b', task: 'min beste venn (m, nom)', solution: 'mein bester Freund', answer: 'mein bester Freund' },
          { label: 'c', task: 'ingen god ide (f, nom)', solution: 'keine gute Idee', answer: 'keine gute Idee' },
          { label: 'd', task: 'med vart nye hus (n, dat)', solution: 'mit unserem neuen Haus', answer: 'mit unserem neuen Haus' },
        ],
        solution: 'a) ein interessantes Buch, b) mein bester Freund, c) keine gute Idee, d) mit unserem neuen Haus',
        hints: ['Buch er noytrum!', 'Nominativ m: -er', 'Dativ: alltid -en'],
      },
    },
    {
      id: 'tysk-2-4-3-tip-1',
      type: 'tip',
      content: `**Hovedregel for blandet:** Nominativ/akkusativ = sterk (adjektivet viser kjonn), dativ/genitiv = svak (bare -en). Tenk: "Hjelper artikkelen? Hvis ikke, ma adjektivet hjelpe!"`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.4: Adjektive in Beschreibungen
// ============================================================================

export const CHAPTER_TYSK_2_4_4: TextbookChapter = {
  id: 'tysk-2-4-4',
  courseId: 'tysk-2',
  chapterNumber: '4.4',
  title: 'Adjektive in Beschreibungen',
  subtitle: 'Praktisk bruk av adjektiver',
  description: 'Laer a bruke adjektiver i beskrivelser av personer, steder og ting.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive personer, steder og ting detaljert',
    'bruke adjektiver kreativt og variert',
  ],
  content: [
    {
      id: 'tysk-2-4-4-intro',
      type: 'text',
      content: `## Adjektiver i beskrivelser

Na som du har laert de tre deklinasjonstypene, er det pa tide a bruke adjektivene aktivt! Gode beskrivelser gjor sprak levende og interessant.

I dette kapittelet fokuserer vi pa:
- Personbeskrivelser (utseende og personlighet)
- Stedbeskrivelser (byer, natur, rom)
- Tingbeskrivelser (gjenstander, mat, vaer)`,
    },
    {
      id: 'tysk-2-4-4-def-1',
      type: 'definition',
      title: 'Adjektiver for personbeskrivelser',
      content: `**Utseende (das Aussehen):**
gross - stor/hoy | klein - liten/lav | schlank - slank
dick - tykk | dunn - tynn | hubsch - pen
schon - vakker | hasslich - stygg | alt - gammel | jung - ung
blond - blond | dunkelhaarig - morkharet | rothaarig - rodharet

**Personlighet (die Personlichkeit):**
nett - hyggelig | freundlich - vennlig | lustig - morsom
ernst - alvorlig | schuchtern - sjenert | selbstbewusst - selvsikker
klug - klok | intelligent - intelligent | dumm - dum
fleissig - flittig | faul - lat | geduldig - talmodig`,
    },
    {
      id: 'tysk-2-4-4-example-1',
      type: 'example',
      title: 'Eksempel: Personbeskrivelse',
      problem: `Beskriv en person med minst 5 adjektiver:`,
      solution: `**Meine beste Freundin**

Meine beste Freundin heisst Anna. Sie ist eine grosse, schlanke Frau mit langen, blonden Haaren. Sie hat wunderschone, blaue Augen und ein freundliches Lacheln.

Anna ist ein sehr netter Mensch. Sie ist immer hilfsbereit und geduldig. Manchmal ist sie ein bisschen schuchtern, aber mit guten Freunden ist sie sehr lustig und offen.

**Oversettelse:** Min beste venninne heter Anna. Hun er en hoy, slank kvinne med langt, blondt har. Hun har vakre, bla oyne og et vennlig smil. Anna er et veldig hyggelig menneske...`,
    },
    {
      id: 'tysk-2-4-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-4-4-ex-1',
        number: '4.4.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn passende adjektiver (velg selv):',
        subTasks: [
          { label: 'a', task: 'Er ist ein ___ Mann mit ___ Haaren.', solution: 'z.B. grosser, kurzen', answer: 'grosser, kurzen' },
          { label: 'b', task: 'Sie hat ___ Augen und ein ___ Gesicht.', solution: 'z.B. grune, rundes', answer: 'grüne, rundes' },
          { label: 'c', task: 'Mein Bruder ist ___ und ___.', solution: 'z.B. lustig, intelligent', answer: 'lustig, intelligent' },
        ],
        solution: 'Ulike svar er mulige. Sjekk at adjektivene er riktig boyd!',
        hints: ['Tenk pa adjektivboyning etter artikkel', 'Predikative adjektiv (etter sein) boyes ikke'],
      },
    },
    {
      id: 'tysk-2-4-4-text-2',
      type: 'text',
      content: `## Stedbeskrivelser

Nar vi beskriver steder, bruker vi ofte adjektiver sammen med preposisjoner. Husk at preposisjonen bestemmer kasus!

**Nyttige adjektiver for steder:**
- gross / klein (stor / liten)
- alt / modern (gammel / moderne)
- schon / hasslich (vakker / stygg)
- ruhig / laut (rolig / hoylydtt)
- sauber / schmutzig (ren / skitten)
- gemutlich / ungemutlich (koselig / ukoselig)
- hell / dunkel (lys / mork)`,
    },
    {
      id: 'tysk-2-4-4-example-2',
      type: 'example',
      title: 'Eksempel: Stedbeskrivelse',
      problem: `Beskriv et sted med adjektiver i ulike kasus:`,
      solution: `**Meine Stadt**

Ich wohne in einer kleinen, gemutlichen Stadt in Norwegen. Die alten Hauser im Zentrum sind sehr schon. In der Nahe gibt es einen grossen, grunen Park mit vielen alten Baumen.

Im Sommer ist es hier sehr ruhig und friedlich. Die sauberen Strassen und die freundlichen Menschen machen das Leben hier angenehm.

**Grammatikk:**
- in einer kleinen Stadt (dativ, blandet)
- die alten Hauser (nominativ, svak)
- einen grossen Park (akkusativ, blandet)
- mit vielen alten Baumen (dativ, sterk)`,
    },
    {
      id: 'tysk-2-4-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-4-4-ex-2',
        number: '4.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Boy adjektivene riktig i setningene:',
        subTasks: [
          { label: 'a', task: 'Ich wohne in einem (alt) ___ Haus.', solution: 'alten', answer: 'alten' },
          { label: 'b', task: 'Die (gross) ___ Stadt hat viele Parks.', solution: 'grosse', answer: 'große' },
          { label: 'c', task: 'Wir gehen durch einen (schon) ___ Wald.', solution: 'schonen', answer: 'schönen' },
          { label: 'd', task: 'In der (ruhig) ___ Strasse stehen (alt) ___ Baume.', solution: 'ruhigen, alte', answer: 'ruhigen, alte' },
        ],
        solution: 'a) alten (dat, blandet), b) große (nom, svak), c) schönen (akk, blandet), d) ruhigen (dat, svak), alte (nom, svak)',
        hints: ['Etter preposisjon "in" med sted: dativ', 'Etter "durch": akkusativ'],
      },
    },
    {
      id: 'tysk-2-4-4-text-3',
      type: 'text',
      content: `## Tingbeskrivelser og vaer

Nar vi beskriver ting og vaer, kan adjektiver sta bade attributivt (foran substantiv) og predikativt (etter "sein").

**Attributiv (boyes):** Das ist ein schoones Auto.
**Predikativ (boyes ikke):** Das Auto ist schon.

**Vaeradjektiver:**
- sonnig (solrikt), wolkig (skyet), regnerisch (regnfullt)
- warm (varmt), kalt (kaldt), kuhl (kjølig)
- windig (vindfullt), sturmisch (stormfullt)
- neblig (takete), feucht (fuktig), trocken (tort)`,
    },
    {
      id: 'tysk-2-4-4-example-3',
      type: 'example',
      title: 'Eksempel: Vaerbeskrivelse',
      problem: `Beskriv vaeret med bade attributive og predikative adjektiver:`,
      solution: `**Das Wetter heute**

Heute ist es ein wunderschoner Tag! Der blaue Himmel ist wolkenlos und die warme Sonne scheint. Ein leichter Wind weht durch die grunen Baume.

Gestern war das Wetter ganz anders - es war kalt und regnerisch. Der graue Himmel sah traurig aus. Aber heute ist alles wunderbar!

**Grammatikk:**
- ein wunderschoner Tag (attributiv, blandet)
- der blaue Himmel (attributiv, svak)
- es war kalt (predikativ, ingen boyning)`,
    },
    {
      id: 'tysk-2-4-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-4-4-ex-3',
        number: '4.4.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort beskrivelse (3-4 setninger) med adjektiver. Tema: Ditt favorittsted.',
        subTasks: [
          { label: 'a', task: 'Skriv forste setning med ett adjektiv.', solution: 'z.B. Mein Lieblingsort ist ein kleiner Strand.', answer: 'varierer' },
          { label: 'b', task: 'Skriv andre setning med to adjektiver.', solution: 'z.B. Das klare, blaue Wasser ist wunderschon.', answer: 'varierer' },
          { label: 'c', task: 'Skriv tredje setning med predikativt adjektiv.', solution: 'z.B. Dort ist es immer ruhig und friedlich.', answer: 'varierer' },
        ],
        solution: 'Ulike svar er mulige. Sjekk at attributive adjektiver er riktig boyd og predikative ikke er boyd.',
        hints: ['Attributive adjektiver (foran substantiv) boyes', 'Predikative adjektiver (etter sein) boyes ikke'],
      },
    },
    {
      id: 'tysk-2-4-4-note-1',
      type: 'note',
      content: `**Kulturtips:** Tyskere setter pris pa presise beskrivelser. Bruk gjerne flere adjektiver for a gi et noyaktig bilde. "Ein grosses, altes, gemutliches Haus" er bedre enn bare "ein Haus"!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.1: Klassiker der deutschen Literatur
// ============================================================================

export const CHAPTER_TYSK_2_5_1: TextbookChapter = {
  id: 'tysk-2-5-1',
  courseId: 'tysk-2',
  chapterNumber: '5.1',
  title: 'Klassiker der deutschen Literatur',
  subtitle: 'Goethe, Schiller und die Weimarer Klassik',
  description: 'Bli kjent med de store klassikerne i tysk litteratur.',
  estimatedMinutes: 50,
  competenceGoals: [
    'kjenne til viktige tyske forfattere og verk',
    'forstå kulturell betydning av litteratur',
  ],
  content: [
    {
      id: 'tysk-2-5-1-intro',
      type: 'text',
      content: `## De store tyske klassikerne

Tysk litteratur har en rik historie med verdensberomte forfattere. De viktigste periodene er:
- **Weimarer Klassik** (ca. 1786-1805): Goethe og Schiller
- **Romantikken** (ca. 1795-1848): Novalis, E.T.A. Hoffmann
- **Realismen** (ca. 1848-1890): Fontane, Storm

I dette kapittelet fokuserer vi pa Goethe og Schiller - Tysklands mest beromte forfatterduo.`,
    },
    {
      id: 'tysk-2-5-1-def-1',
      type: 'definition',
      title: 'Johann Wolfgang von Goethe (1749-1832)',
      content: `**Liv:**
- Fodt i Frankfurt am Main
- Studerte jus, men ble forfatter og politiker
- Bodde det meste av livet i Weimar
- Regnes som Tysklands storste dikter

**Viktige verk:**
- *Die Leiden des jungen Werthers* (1774) - Briefroman
- *Faust I und II* (1808/1832) - Drama
- *Wilhelm Meisters Lehrjahre* (1795-96) - Roman
- Mange dikt og ballader`,
    },
    {
      id: 'tysk-2-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Goethe-sitat',
      problem: `Les og analyser dette kjente Goethe-sitatet:

"Auch aus Steinen, die einem in den Weg gelegt werden, kann man Schones bauen."`,
      solution: `**Oversettelse:** "Ogsa av steiner som blir lagt i ens vei, kan man bygge noe vakkert."

**Analyse:**
- Metafor: Steiner = problemer/hindringer
- Budskap: Vanskeligheter kan bli til noe positivt
- Typisk for Goethe: Optimistisk livssyn, tro pa menneskets evne til a overvinne

**Grammatikk:**
- Passiv: "die einem in den Weg gelegt werden"
- Relativsetning med ubestemt pronomen "einem"`,
    },
    {
      id: 'tysk-2-5-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-5-1-ex-1',
        number: '5.1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar pa sporsmalene om Goethe:',
        subTasks: [
          { label: 'a', task: 'Hvor ble Goethe fodt?', solution: 'Frankfurt am Main', answer: 'Frankfurt am Main' },
          { label: 'b', task: 'Hva heter hans mest kjente drama?', solution: 'Faust', answer: 'Faust' },
          { label: 'c', task: 'I hvilken by bodde han mesteparten av livet?', solution: 'Weimar', answer: 'Weimar' },
        ],
        solution: 'a) Frankfurt am Main, b) Faust, c) Weimar',
        hints: ['Les definisjonsboksen noye'],
      },
    },
    {
      id: 'tysk-2-5-1-def-2',
      type: 'definition',
      title: 'Friedrich Schiller (1759-1805)',
      content: `**Liv:**
- Fodt i Marbach am Neckar
- Utdannet lege, men valgte litteraturen
- Naer venn av Goethe fra 1794
- Dode ung (45 ar), men etterlot et enormt verk

**Viktige verk:**
- *Die Rauber* (1781) - Drama
- *Kabale und Liebe* (1784) - Drama
- *Wilhelm Tell* (1804) - Drama
- *An die Freude* (1785) - Dikt (brukt i Beethovens 9. symfoni)`,
    },
    {
      id: 'tysk-2-5-1-example-2',
      type: 'example',
      title: 'Eksempel: Schillers "An die Freude"',
      problem: `Les begynnelsen av Schillers beromte dikt:

"Freude, schoner Gotterfunken,
Tochter aus Elysium,
Wir betreten feuertrunken,
Himmlische, dein Heiligtum!"`,
      solution: `**Oversettelse:**
"Glede, vakre guddommelige gnist,
Datter fra Elysium,
Vi trer inn, beruset av ild,
Himmelske, i din helligdom!"

**Analyse:**
- Elysium: Paradis i gresk mytologi
- Gleden personifiseres som en guddommelig skikkelse
- Diktet feirer menneskelig brorskap og glede
- Beethoven brukte det i sin 9. symfoni (na EUs hymne)`,
    },
    {
      id: 'tysk-2-5-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-5-1-ex-2',
        number: '5.1.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Koble verk med forfatter:',
        subTasks: [
          { label: 'a', task: 'Die Rauber', solution: 'Schiller', answer: 'Schiller' },
          { label: 'b', task: 'Faust', solution: 'Goethe', answer: 'Goethe' },
          { label: 'c', task: 'Wilhelm Tell', solution: 'Schiller', answer: 'Schiller' },
          { label: 'd', task: 'Die Leiden des jungen Werthers', solution: 'Goethe', answer: 'Goethe' },
        ],
        solution: 'a) Schiller, b) Goethe, c) Schiller, d) Goethe',
        hints: ['Schiller skrev mye drama', 'Goethe skrev bade drama, romaner og dikt'],
      },
    },
    {
      id: 'tysk-2-5-1-text-2',
      type: 'text',
      content: `## Weimarer Klassik

Perioden da Goethe og Schiller samarbeidet i Weimar kalles **Weimarer Klassik**. Kjennetegn:

- **Humanistiske idealer:** Tro pa menneskets iboende godhet
- **Balanse og harmoni:** Inspirert av gresk antikk
- **Dannelse (Bildung):** Menneskets selvutvikling
- **Universalitet:** Kunst og litteratur for alle

Weimar var et lite hertugdomme, men ble et kulturelt sentrum takket vaere Goethe og hertug Carl August.`,
    },
    {
      id: 'tysk-2-5-1-example-3',
      type: 'example',
      title: 'Eksempel: Tema i Faust',
      problem: `Forklar hovedtemaene i Goethes "Faust":`,
      solution: `**Handlingen:**
Doktor Faust er en laerd mann som er misfornøyd med livet. Han gjor en pakt med djevelen Mephisto: Mephisto vil gi ham alt han onsker, men far sjelen hans hvis Faust noen gang blir helt tilfreds.

**Hovedtemaer:**
1. **Menneskets streben:** Faust soker alltid mer kunnskap og opplevelser
2. **Godt mot ondt:** Kampen mellom Gud og djevelen om menneskets sjel
3. **Kjaerlighet og skyld:** Fausts forhold til Gretchen
4. **Forlosning:** Kan mennesket reddes til tross for sine synder?

**Beromt sitat:**
"Zwei Seelen wohnen, ach! in meiner Brust."
(To sjeler bor, akk, i mitt bryst.)`,
    },
    {
      id: 'tysk-2-5-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-5-1-ex-3',
        number: '5.1.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Diskuter pa tysk (korte svar):',
        subTasks: [
          { label: 'a', task: 'Was bedeutet "Bildung" in der Weimarer Klassik?', solution: 'Bildung bedeutet die Selbstentwicklung des Menschen.', answer: 'Selbstentwicklung des Menschen' },
          { label: 'b', task: 'Warum ist Goethes Faust wichtig?', solution: 'Faust zeigt den Kampf zwischen Gut und Bose und das menschliche Streben.', answer: 'varierer' },
          { label: 'c', task: 'Wo kann man heute Schillers Dichtung horen?', solution: 'In Beethovens 9. Symphonie / In der EU-Hymne', answer: 'Beethovens 9. Symphonie / EU-Hymne' },
        ],
        solution: 'Ulike formuleringer er mulige. Hovedpoengene skal vaere med.',
        hints: ['Tenk pa diktet "An die Freude"', 'Bildung = dannelse/selvutvikling'],
      },
    },
    {
      id: 'tysk-2-5-1-note-1',
      type: 'note',
      content: `**Kulturtips:** Nar du besoker Tyskland, ta turen til Weimar! Der kan du se Goethes og Schillers hjem, museer og teateret der verkene deres ble uroppfort. Weimar er UNESCO verdensarvsted.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.2: Moderne Autoren und Bucher
// ============================================================================

export const CHAPTER_TYSK_2_5_2: TextbookChapter = {
  id: 'tysk-2-5-2',
  courseId: 'tysk-2',
  chapterNumber: '5.2',
  title: 'Moderne Autoren und Bucher',
  subtitle: 'Tysk litteratur fra 1900 til i dag',
  description: 'Utforsk moderne tysk litteratur og viktige forfattere.',
  estimatedMinutes: 50,
  competenceGoals: [
    'kjenne til moderne tyske forfattere',
    'kunne diskutere litteratur pa tysk',
  ],
  content: [
    {
      id: 'tysk-2-5-2-intro',
      type: 'text',
      content: `## Moderne tysk litteratur

Det 20. og 21. arhundre har gitt oss mange viktige tyske forfattere. Flere har fatt Nobelprisen i litteratur! La oss se pa noen av de viktigste.

**Viktige perioder:**
- Modernismen (ca. 1900-1930): Kafka, Mann, Rilke
- Etterkrigslitteratur (1945-): Boll, Grass
- Samtidsforfattere: Herta Muller, Daniel Kehlmann`,
    },
    {
      id: 'tysk-2-5-2-def-1',
      type: 'definition',
      title: 'Franz Kafka (1883-1924)',
      content: `**Liv:**
- Fodt i Praha (da osterriksk-ungarsk)
- Skrev pa tysk
- Arbeidet som forsikringsjurist
- Dode av tuberkulose, 40 ar gammel
- Ba vennen Max Brod brenne alle manuskriptene - han gjorde det heldigvis ikke!

**Viktige verk:**
- *Die Verwandlung* (Forvandlingen, 1915)
- *Der Prozess* (Prosessen, 1925)
- *Das Schloss* (Slottet, 1926)

**Stil:** Absurd, drommeaktig, angstfylt - ordet "kafkaesk" brukes om absurde, byrakratiske situasjoner.`,
    },
    {
      id: 'tysk-2-5-2-example-1',
      type: 'example',
      title: 'Eksempel: Apningslinjen i "Die Verwandlung"',
      problem: `Les og analyser den beromte apningen:

"Als Gregor Samsa eines Morgens aus unruhigen Traumen erwachte, fand er sich in seinem Bett zu einem ungeheueren Ungeziefer verwandelt."`,
      solution: `**Oversettelse:**
"Da Gregor Samsa en morgen vaknet fra urolige drommer, fant han seg i sengen forvandlet til et uhyrlig kryp."

**Analyse:**
- Ingen forklaring gis - leseren kastes rett inn i det absurde
- Typisk "kafkaesk": Det umulige presenteres som hverdagslig
- Temaer: Fremmedgjoring, familie, arbeid, identitet

**Grammatikk:**
- "aus unruhigen Traumen" - sterk deklinasjon (dativ flertall)
- "zu einem ungeheueren Ungeziefer" - blandet deklinasjon (dativ)`,
    },
    {
      id: 'tysk-2-5-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-5-2-ex-1',
        number: '5.2.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar pa sporsmalene om Kafka:',
        subTasks: [
          { label: 'a', task: 'Hva betyr "kafkaesk"?', solution: 'Absurd, byrakratisk, drommeaktig', answer: 'absurd' },
          { label: 'b', task: 'Hva skjer med Gregor Samsa?', solution: 'Han blir forvandlet til et insekt', answer: 'forvandlet til insekt' },
          { label: 'c', task: 'Hvilket sprak skrev Kafka pa?', solution: 'Tysk', answer: 'Tysk' },
        ],
        solution: 'a) Absurd/byrakratisk, b) Forvandlet til insekt, c) Tysk',
        hints: ['Kafka kom fra Praha, men skrev pa tysk'],
      },
    },
    {
      id: 'tysk-2-5-2-def-2',
      type: 'definition',
      title: 'Nobelprisvinnere i litteratur',
      content: `**Tyske nobelprisvinnere:**
- Thomas Mann (1929) - *Der Zauberberg*, *Buddenbrooks*
- Heinrich Boll (1972) - *Ansichten eines Clowns*
- Gunter Grass (1999) - *Die Blechtrommel*
- Herta Muller (2009) - *Atemschaukel*

**Osterrikske:**
- Elfriede Jelinek (2004) - *Die Klavierspielerin*
- Peter Handke (2019) - *Die Angst des Tormanns beim Elfmeter*`,
    },
    {
      id: 'tysk-2-5-2-example-2',
      type: 'example',
      title: 'Eksempel: Gunter Grass og "Die Blechtrommel"',
      problem: `Hva handler "Die Blechtrommel" (Blikktrommen) om?`,
      solution: `**Handlingen:**
Oskar Matzerath bestemmer seg pa sin tredje bursdag for a slutte a vokse. Han forteller sin historie - og Tysklands historie - fra perspektivet til en liten gutt med en blikktromme.

**Temaer:**
- Nazismen og krigen fra et barns synsvinkel
- Skyld og ansvar
- Tysk identitet etter krigen

**Betydning:**
- En av de viktigste tyske etterkrigsromanene
- Filmatisert i 1979 (Oscar for beste utenlandske film)
- Grass fikk Nobelprisen i 1999

**Sitat:** "Es war einmal ein Blechtrommler, der hiess Oskar..."
(Det var en gang en blikktrommelslager som het Oskar...)`,
    },
    {
      id: 'tysk-2-5-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-5-2-ex-2',
        number: '5.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Koble forfatter med verk:',
        subTasks: [
          { label: 'a', task: 'Der Zauberberg', solution: 'Thomas Mann', answer: 'Thomas Mann' },
          { label: 'b', task: 'Die Blechtrommel', solution: 'Gunter Grass', answer: 'Gunter Grass' },
          { label: 'c', task: 'Die Verwandlung', solution: 'Franz Kafka', answer: 'Franz Kafka' },
          { label: 'd', task: 'Atemschaukel', solution: 'Herta Muller', answer: 'Herta Muller' },
        ],
        solution: 'a) Thomas Mann, b) Gunter Grass, c) Franz Kafka, d) Herta Muller',
        hints: ['Flere av disse er Nobelprisvinnere'],
      },
    },
    {
      id: 'tysk-2-5-2-text-2',
      type: 'text',
      content: `## Samtidsforfattere

Ogsa i dag finnes det spennende tyskspreaklige forfattere:

**Daniel Kehlmann** (f. 1975)
- *Die Vermessung der Welt* (2005) - Om Gauss og Humboldt
- En av de mest solgte tyske romanene noensinne

**Juli Zeh** (f. 1974)
- *Unterleuten* (2016) - Om en landsby i omstilling
- Skriver om samfunnsaktuelle temaer

**Bernhard Schlink** (f. 1944)
- *Der Vorleser* (Hoytleseren, 1995)
- Filmatisert med Kate Winslet (Oscar 2009)`,
    },
    {
      id: 'tysk-2-5-2-example-3',
      type: 'example',
      title: 'Eksempel: Bokanmeldelse pa tysk',
      problem: `Skriv en kort bokanmeldelse pa tysk:`,
      solution: `**Buchrezension: "Der Vorleser" von Bernhard Schlink**

"Der Vorleser" ist ein beruhmter deutscher Roman aus dem Jahr 1995. Die Geschichte handelt von Michael, einem 15-jahrigen Jungen, der eine Beziehung mit der alteren Hanna beginnt. Er liest ihr jeden Tag vor.

Jahre spater begegnet Michael Hanna wieder - als Angeklagte in einem Kriegsverbrecherprozess. Der Roman behandelt schwierige Themen wie Schuld, Verantwortung und die deutsche Vergangenheit.

Ich empfehle dieses Buch, weil es gut geschrieben und sehr bewegend ist.

**Nyttige fraser:**
- Das Buch handelt von... (Boken handler om...)
- Der Autor beschreibt... (Forfatteren beskriver...)
- Ich empfehle dieses Buch, weil... (Jeg anbefaler denne boken fordi...)`,
    },
    {
      id: 'tysk-2-5-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-5-2-ex-3',
        number: '5.2.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv korte svar pa tysk:',
        subTasks: [
          { label: 'a', task: 'Welches Buch mochtest du lesen? Warum?', solution: 'Ich mochte ... lesen, weil ...', answer: 'varierer' },
          { label: 'b', task: 'Was ist ein wichtiges Thema in der deutschen Nachkriegsliteratur?', solution: 'Schuld und Verantwortung / Die Nazi-Zeit', answer: 'Schuld/Verantwortung/Nazi-Zeit' },
          { label: 'c', task: 'Warum ist "Die Blechtrommel" besonders?', solution: 'Sie erzahlt die Geschichte aus der Perspektive eines Kindes.', answer: 'Kinderperspektive' },
        ],
        solution: 'Ulike formuleringer er mulige.',
        hints: ['Bruk fraser fra eksempelet', 'Nachkriegsliteratur = etterkrigslitteratur'],
      },
    },
    {
      id: 'tysk-2-5-2-tip-1',
      type: 'tip',
      content: `**Lesetips:** Start med kortere tekster! Kafkas "Die Verwandlung" er bare ca. 60 sider. Daniel Kehlmanns boker er underholdende og lettleste. Finn gjerne lydbokversjoner for a trene lytting!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.3: Film und Fernsehen
// ============================================================================

export const CHAPTER_TYSK_2_5_3: TextbookChapter = {
  id: 'tysk-2-5-3',
  courseId: 'tysk-2',
  chapterNumber: '5.3',
  title: 'Film und Fernsehen',
  subtitle: 'Tysk film og TV',
  description: 'Utforsk tysk film- og TV-kultur fra stumfilm til i dag.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kjenne til viktige tyske filmer og serier',
    'kunne diskutere film og TV pa tysk',
  ],
  content: [
    {
      id: 'tysk-2-5-3-intro',
      type: 'text',
      content: `## Tysk film og TV

Tyskland har en lang og stolt filmtradisjon. Fra stumfilmens gullalder til moderne Netflix-serier - la oss utforske dette spennende feltet!

**Viktige perioder:**
- Stumfilmtiden (1920-tallet): Ekspresjonisme
- Nazi-tiden (1933-1945): Propaganda
- Etterkrigstid: Ost og vest
- Moderne tid: Internasjonale suksesser`,
    },
    {
      id: 'tysk-2-5-3-def-1',
      type: 'definition',
      title: 'Ordforrad: Film og TV',
      content: `**Filmtyper (die Filmgenres):**
der Spielfilm - spillefilm | der Dokumentarfilm - dokumentar
die Komodie - komedie | der Krimi - krim
der Horrorfilm - skrekkfilm | der Liebesfilm - romantisk film
der Actionfilm - actionfilm | der Zeichentrickfilm - tegnefilm

**Pa kino og TV:**
der Regisseur - regissor | der Schauspieler - skuespiller
die Hauptrolle - hovedrollen | die Nebenrolle - birolle
der Untertitel - undertekst | synchronisiert - dubbet
die Folge - episode | die Staffel - sesong`,
    },
    {
      id: 'tysk-2-5-3-example-1',
      type: 'example',
      title: 'Eksempel: Klassisk tysk film',
      problem: `Hvilke klassiske tyske filmer bor man kjenne til?`,
      solution: `**Klassikere:**

1. **Metropolis (1927)** - Fritz Lang
   - Stumfilm, science fiction
   - Banebrytende spesialeffekter
   - Handler om et fremtidig klassesamfunn

2. **Das Cabinet des Dr. Caligari (1920)**
   - Ekspresjonistisk skrekkfilm
   - Forvridde kulisser og skygger
   - Innflytelsesrik for hele sjangeren

3. **Der blaue Engel (1930)** - Josef von Sternberg
   - Med Marlene Dietrich
   - En av de forste tyske lydfilmene
   - Gjorde Dietrich til internasjonal stjerne`,
    },
    {
      id: 'tysk-2-5-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-5-3-ex-1',
        number: '5.3.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett filmtermer til norsk:',
        subTasks: [
          { label: 'a', task: 'der Regisseur', solution: 'regissor', answer: 'regissor' },
          { label: 'b', task: 'die Komodie', solution: 'komedie', answer: 'komedie' },
          { label: 'c', task: 'der Untertitel', solution: 'undertekst', answer: 'undertekst' },
          { label: 'd', task: 'die Staffel', solution: 'sesong', answer: 'sesong' },
        ],
        solution: 'a) regissor, b) komedie, c) undertekst, d) sesong',
        hints: ['Mange ord ligner pa norsk eller engelsk'],
      },
    },
    {
      id: 'tysk-2-5-3-text-2',
      type: 'text',
      content: `## Moderne tyske filmer

Flere tyske filmer har vunnet Oscar for beste utenlandske film:

**Oscar-vinnere:**
- *Die Blechtrommel* (1979) - etter Grass' roman
- *Nirgendwo in Afrika* (2001) - om jodisk familie i Kenya
- *Das Leben der Anderen* (2006) - om Stasi i DDR
- *Im Westen nichts Neues* (2022) - krigsfilm

**Andre viktige filmer:**
- *Good Bye, Lenin!* (2003) - komedie om gjenforeningen
- *Der Untergang* (2004) - om Hitlers siste dager
- *Toni Erdmann* (2016) - Oscar-nominert komedie`,
    },
    {
      id: 'tysk-2-5-3-example-2',
      type: 'example',
      title: 'Eksempel: "Das Leben der Anderen"',
      problem: `Beskriv filmen "Das Leben der Anderen" pa tysk:`,
      solution: `**"Das Leben der Anderen" (2006)**

**Regie:** Florian Henckel von Donnersmarck
**Genre:** Drama, Thriller

**Handlung:**
Der Film spielt 1984 in Ost-Berlin. Ein Stasi-Offizier (Hauptmann Wiesler) muss einen Schriftsteller und seine Freundin uberwachen. Langsam beginnt er, an seiner Arbeit zu zweifeln.

**Themen:**
- Uberwachung und Privatsphare
- Kunst und Freiheit
- Moral und Pflicht

**Meine Meinung:**
Ich finde den Film sehr spannend und bewegend. Er zeigt das Leben in der DDR auf eine sehr realistische Weise.

**Auszeichnungen:**
- Oscar fur den besten fremdsprachigen Film (2007)`,
    },
    {
      id: 'tysk-2-5-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-5-3-ex-2',
        number: '5.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv en film med disse setningene:',
        subTasks: [
          { label: 'a', task: 'Der Film heisst... und ist ein/eine...', solution: 'f.eks. Der Film heisst "Dark" und ist eine Serie.', answer: 'varierer' },
          { label: 'b', task: 'Der Film handelt von...', solution: 'f.eks. Der Film handelt von einem Stasi-Offizier.', answer: 'varierer' },
          { label: 'c', task: 'Ich finde den Film..., weil...', solution: 'f.eks. Ich finde den Film spannend, weil er gut gemacht ist.', answer: 'varierer' },
        ],
        solution: 'Ulike svar er mulige. Sjekk grammatikken!',
        hints: ['handelt von + dativ', 'Adjektiver etter finden boyes ikke'],
      },
    },
    {
      id: 'tysk-2-5-3-text-3',
      type: 'text',
      content: `## Tyske TV-serier

Tyske serier har blitt populaere internasjonalt, spesielt pa strommeplattformer:

**Populaere serier:**
- **Dark** (Netflix, 2017-2020): Sci-fi thriller om tidreise
- **Babylon Berlin** (2017-): Krimserie i 1920-tallets Berlin
- **Deutschland 83/86/89** (2015-2020): Spionserie under den kalde krigen
- **How to Sell Drugs Online (Fast)** (Netflix, 2019-): Ungdomskomedie

**Tradisjonell tysk TV:**
- **Tatort** (siden 1970): Krimserie - hver sondag klokken 20:15!
- **Lindenstrasse** (1985-2020): Sapeoperaen som varte i 35 ar`,
    },
    {
      id: 'tysk-2-5-3-example-3',
      type: 'example',
      title: 'Eksempel: Diskutere serier',
      problem: `Hvordan diskuterer man serier pa tysk?`,
      solution: `**Nyttige fraser:**

"Hast du schon 'Dark' gesehen?"
- Har du sett "Dark"?

"Ich schaue gerade die zweite Staffel von Babylon Berlin."
- Jeg ser for tiden andre sesong av Babylon Berlin.

"Die letzte Folge war total spannend!"
- Siste episode var helt spennende!

"Schaust du lieber mit Untertiteln oder synchronisiert?"
- Ser du helst med undertekst eller dubbet?

"Ich kann die Serie empfehlen, sie ist echt gut."
- Jeg kan anbefale serien, den er virkelig bra.

"Achtung, Spoiler-Alarm!"
- Pass opp, spoiler-advarsel!`,
    },
    {
      id: 'tysk-2-5-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-5-3-ex-3',
        number: '5.3.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Jeg liker a se tyske filmer med undertekst.', solution: 'Ich sehe gern deutsche Filme mit Untertiteln.', answer: 'Ich sehe gern deutsche Filme mit Untertiteln' },
          { label: 'b', task: 'Hvem er hovedrolleinnehaveren?', solution: 'Wer spielt die Hauptrolle?', answer: 'Wer spielt die Hauptrolle?' },
          { label: 'c', task: 'Filmen handler om andre verdenskrig.', solution: 'Der Film handelt vom Zweiten Weltkrieg.', answer: 'Der Film handelt vom Zweiten Weltkrieg' },
        ],
        solution: 'a) Ich sehe gern deutsche Filme mit Untertiteln, b) Wer spielt die Hauptrolle?, c) Der Film handelt vom Zweiten Weltkrieg',
        hints: ['handelt von + dativ', 'vom = von dem', 'Untertitel er flertall i denne sammenhengen'],
      },
    },
    {
      id: 'tysk-2-5-3-tip-1',
      type: 'tip',
      content: `**Laeringstips:** Se tyske filmer og serier med tyske undertekster! Da trener du bade lytting og lesing samtidig. Netflix, Amazon Prime og ARD/ZDF Mediathek har mye tysk innhold.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.4: Literarische Texte verstehen
// ============================================================================

export const CHAPTER_TYSK_2_5_4: TextbookChapter = {
  id: 'tysk-2-5-4',
  courseId: 'tysk-2',
  chapterNumber: '5.4',
  title: 'Literarische Texte verstehen',
  subtitle: 'Lese og analysere litteraere tekster',
  description: 'Laer a lese og analysere tyskspreaklige litteraere tekster.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese og forsta litteraere tekster',
    'analysere virkemidler og temaer',
  ],
  content: [
    {
      id: 'tysk-2-5-4-intro',
      type: 'text',
      content: `## A lese litteraere tekster

A lese litteratur pa et fremmedsprak er utfordrende, men ogsa givende. I dette kapittelet laerer du strategier og faguttrykk for a analysere tyskspreaklige tekster.

**Hvorfor lese litteratur pa tysk?**
- Utvider ordforradet
- Gir kulturell innsikt
- Trener leseferdigheter
- Gjor spraket levende`,
    },
    {
      id: 'tysk-2-5-4-def-1',
      type: 'definition',
      title: 'Litteraere sjangre (Literarische Gattungen)',
      content: `**Hovedsjangre:**
die Epik - epikk (fortellende tekster)
die Lyrik - lyrikk (dikt)
die Dramatik - dramatikk (skuespill)

**Episke sjangre:**
der Roman - roman | die Novelle - novelle
die Kurzgeschichte - novelle/kortprosa | das Marchen - eventyr
die Fabel - fabel | die Autobiographie - selvbiografi

**Lyriske sjangre:**
das Gedicht - dikt | die Ballade - ballade
das Sonett - sonett | die Ode - ode`,
    },
    {
      id: 'tysk-2-5-4-example-1',
      type: 'example',
      title: 'Eksempel: Lese et kort dikt',
      problem: `Les og analyser dette diktet av Rainer Maria Rilke:

**Herbsttag**

Herr: es ist Zeit. Der Sommer war sehr gross.
Leg deinen Schatten auf die Sonnenuhren,
und auf den Fluren lass die Winde los.

Befiehl den letzten Fruchten voll zu sein;
gib ihnen noch zwei sudlichere Tage,
drange sie zur Vollendung hin und jage
die letzte Susse in den schweren Wein.`,
      solution: `**Oversettelse:**
Herre: det er tid. Sommeren var svaert stor.
Legg din skygge over solurene,
og pa markene slipp vindene los.

Befal de siste fruktene a vaere fulle;
gi dem enna to mer sydlige dager,
driv dem mot fullendelse og jag
den siste sodme inn i den tunge vinen.

**Analyse:**
- **Tema:** Overgangen fra sommer til host
- **Henvendelse:** Til "Herr" (Gud) - en bonn
- **Stemning:** Melankolsk, men aksepterende
- **Virkemidler:**
  - Personifikasjon: Vindene slippes los
  - Imperativ: Leg, lass, befiehl, gib, drange, jage
  - Naturbilder: Solurer, marker, frukter, vin`,
    },
    {
      id: 'tysk-2-5-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-5-4-ex-1',
        number: '5.4.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar pa sporsmalene om diktet:',
        subTasks: [
          { label: 'a', task: 'Hvilken arstid handler diktet om?', solution: 'Hosten (Herbst)', answer: 'hosten' },
          { label: 'b', task: 'Hvem henvender dikteren seg til?', solution: 'Gud/Herren', answer: 'Gud' },
          { label: 'c', task: 'Hvilken verbform brukes mye?', solution: 'Imperativ (bydeform)', answer: 'imperativ' },
        ],
        solution: 'a) Hosten, b) Gud/Herren, c) Imperativ',
        hints: ['Herbst = host', 'Herr kan bety Gud i religios sammenheng'],
      },
    },
    {
      id: 'tysk-2-5-4-def-2',
      type: 'definition',
      title: 'Analysebegreper (Begriffe zur Analyse)',
      content: `**Fortellerteknikk:**
der Erzahler - forteller | die Perspektive - synsvinkel
der Ich-Erzahler - jeg-forteller | der allwissende Erzahler - allvitende forteller
die Handlung - handling | der Hohepunkt - klimaks

**Stilistiske virkemidler:**
die Metapher - metafor | der Vergleich - sammenligning
die Personifikation - personifikasjon | das Symbol - symbol
die Ironie - ironi | die Ubertreibung - overdrivelse
die Wiederholung - gjentakelse | der Kontrast - kontrast`,
    },
    {
      id: 'tysk-2-5-4-example-2',
      type: 'example',
      title: 'Eksempel: Analysere en kort tekst',
      problem: `Analyser apningen av Kafkas "Die Verwandlung":`,
      solution: `**Tekst:**
"Als Gregor Samsa eines Morgens aus unruhigen Traumen erwachte, fand er sich in seinem Bett zu einem ungeheueren Ungeziefer verwandelt."

**Analyse:**

**Fortellerperspektiv:**
- Tredjepersonsforteller (personal)
- Vi ser gjennom Gregors oyne

**Spraklige virkemidler:**
- Kontrastvirkning: Hverdagslig tone om noe umulig
- Allitterasjon: "ungeheueren Ungeziefer"
- Ingen forklaring - leseren kastes inn i situasjonen

**Tematikk:**
- Fremmedgjoring (Entfremdung)
- Identitet og kropp
- Familie og plikt

**Grammatisk analyse:**
- Temporal bisetning: "Als... erwachte"
- Fortidsform (preteritum) - typisk for litteratur`,
    },
    {
      id: 'tysk-2-5-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-5-4-ex-2',
        number: '5.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn de tyske ordene for:',
        subTasks: [
          { label: 'a', task: 'metafor', solution: 'die Metapher', answer: 'die Metapher' },
          { label: 'b', task: 'forteller', solution: 'der Erzahler', answer: 'der Erzahler' },
          { label: 'c', task: 'handling', solution: 'die Handlung', answer: 'die Handlung' },
          { label: 'd', task: 'klimaks', solution: 'der Hohepunkt', answer: 'der Hohepunkt' },
        ],
        solution: 'a) die Metapher, b) der Erzahler, c) die Handlung, d) der Hohepunkt',
        hints: ['Se pa definisjonsboksen', 'Husk artikkel og stor forbokstav'],
      },
    },
    {
      id: 'tysk-2-5-4-text-2',
      type: 'text',
      content: `## Strategier for a lese litteratur

**For du leser:**
1. Les om forfatteren og verket
2. Sjekk ukjente ord pa forhand
3. Ha en ordbok tilgjengelig

**Mens du leser:**
1. Les hoyt - det hjelper forstaelsen
2. Ikke stopp for hvert ukjent ord
3. Marker viktige passasjer
4. Skriv ned sporsmal

**Etter lesing:**
1. Oppsummer handlingen
2. Reflekter over temaer
3. Diskuter med andre`,
    },
    {
      id: 'tysk-2-5-4-example-3',
      type: 'example',
      title: 'Eksempel: Skrive en tekstanalyse',
      problem: `Hvordan strukturerer man en tekstanalyse pa tysk?`,
      solution: `**Struktur for tekstanalyse:**

**1. Einleitung (Innledning)**
- Tittel, forfatter, utgivelsesar
- Sjanger og kort innholdsbeskrivelse

Eksempel: "Der Text 'Die Verwandlung' wurde 1915 von Franz Kafka veroffentlicht. Es handelt sich um eine Erzahlung uber..."

**2. Hauptteil (Hoveddel)**
- Innhold og handling
- Fortellerperspektiv
- Spraklige virkemidler
- Temaer og tolkning

Eksempel: "Der Erzahler berichtet aus der Perspektive von Gregor. Wichtige sprachliche Mittel sind..."

**3. Schluss (Avslutning)**
- Sammenfatning
- Egen vurdering

Eksempel: "Zusammenfassend lasst sich sagen, dass Kafka ein Meisterwerk der modernen Literatur geschaffen hat."`,
    },
    {
      id: 'tysk-2-5-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-5-4-ex-3',
        number: '5.4.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort analyse (pa tysk) av et valgfritt dikt eller tekst:',
        subTasks: [
          { label: 'a', task: 'Skriv en innledning (2-3 setninger)', solution: 'Eksempel: Das Gedicht "Herbsttag" wurde von Rilke geschrieben. Es handelt vom Ubergang vom Sommer zum Herbst.', answer: 'varierer' },
          { label: 'b', task: 'Nevn ett virkemiddel', solution: 'Eksempel: Der Dichter benutzt Personifikation, wenn er die Winde als lebendig beschreibt.', answer: 'varierer' },
          { label: 'c', task: 'Skriv en kort konklusjon', solution: 'Eksempel: Das Gedicht druckt eine melancholische Stimmung aus.', answer: 'varierer' },
        ],
        solution: 'Svarene varierer. Sjekk grammatikk og struktur.',
        hints: ['Bruk frasene fra eksempelet', 'Husk preteritum i analyse'],
      },
    },
    {
      id: 'tysk-2-5-4-tip-1',
      type: 'tip',
      content: `**Anbefalte forstelesninger:** Start med kortere tekster som Kafkas "Die Verwandlung", Borcherts "Nachts schlafen die Ratten doch" eller dikt av Rilke. Bruk gjerne parallelltekster (tysk/norsk) i begynnelsen!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.1: Deutsche Geschichte im 20. Jahrhundert
// ============================================================================

export const CHAPTER_TYSK_2_6_1: TextbookChapter = {
  id: 'tysk-2-6-1',
  courseId: 'tysk-2',
  chapterNumber: '6.1',
  title: 'Deutsche Geschichte im 20. Jahrhundert',
  subtitle: 'Fra keiserdømme til delt land',
  description: 'Laer om Tysklands turbulente historie i det 20. arhundre.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå hovedtrekkene i tysk historie',
    'diskutere historiske hendelser pa tysk',
  ],
  content: [
    {
      id: 'tysk-2-6-1-intro',
      type: 'text',
      content: `## Tysk historie i det 20. arhundre

Det 20. arhundre var en dramatisk periode i tysk historie. Tyskland gikk gjennom:
- To verdenskriger
- Keiserdommets fall
- Weimar-republikken
- Nazi-diktaturet
- Delingen i ost og vest
- Gjenforeningen

A forstå denne historien er viktig for a forstå dagens Tyskland.`,
    },
    {
      id: 'tysk-2-6-1-def-1',
      type: 'definition',
      title: 'Viktige historiske begreper',
      content: `**Politiske begreper:**
das Kaiserreich - keiserriket | die Republik - republikken
die Demokratie - demokratiet | die Diktatur - diktaturet
der Krieg - krigen | der Frieden - freden
die Niederlage - nederlaget | der Sieg - seieren

**Historiske perioder:**
das Kaiserreich (1871-1918) - Det tyske keiserriket
die Weimarer Republik (1918-1933) - Weimar-republikken
das Dritte Reich (1933-1945) - Det tredje riket
die Nachkriegszeit (1945-) - Etterkrigstiden`,
    },
    {
      id: 'tysk-2-6-1-example-1',
      type: 'example',
      title: 'Eksempel: Forste verdenskrig',
      problem: `Beskriv Tysklands rolle i forste verdenskrig pa tysk:`,
      solution: `**Der Erste Weltkrieg (1914-1918)**

Deutschland war einer der Hauptakteure im Ersten Weltkrieg. Der Krieg begann im August 1914 nach dem Attentat auf den osterreichischen Thronfolger in Sarajevo.

**Wichtige Fakten:**
- Deutschland kampfte zusammen mit Osterreich-Ungarn (die Mittelmachte)
- Gegen Frankreich, Grossbritannien und Russland (die Entente)
- Der Krieg dauerte vier Jahre
- Deutschland verlor den Krieg 1918
- Der Kaiser Wilhelm II. musste abdanken

**Folgen:**
- Der Versailler Vertrag (1919)
- Grosse Gebiets- und Geldverluste
- Die Grundung der Weimarer Republik`,
    },
    {
      id: 'tysk-2-6-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-6-1-ex-1',
        number: '6.1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar pa sporsmalene:',
        subTasks: [
          { label: 'a', task: 'Nar varte forste verdenskrig?', solution: '1914-1918', answer: '1914-1918' },
          { label: 'b', task: 'Hva var resultatet for Tyskland?', solution: 'Nederlag/Niederlage', answer: 'Niederlage' },
          { label: 'c', task: 'Hvilken fredsavtale ble undertegnet?', solution: 'Versailler Vertrag', answer: 'Versailler Vertrag' },
        ],
        solution: 'a) 1914-1918, b) Niederlage (nederlag), c) Der Versailler Vertrag',
        hints: ['Les eksempelteksten noye'],
      },
    },
    {
      id: 'tysk-2-6-1-text-2',
      type: 'text',
      content: `## Weimar-republikken og dens fall

**Die Weimarer Republik (1918-1933)** var Tysklands forste demokrati. Republikken hadde mange problemer:

- Okonomisk krise og hyperinflasjon (1923)
- Politisk ustabilitet
- Mange partier og koalisjonsregjeringer
- Ekstremisme fra bade hoyre og venstre
- Den store depresjonen (1929)

Disse problemene banet vei for nazistenes maktovertagelse i 1933.`,
    },
    {
      id: 'tysk-2-6-1-example-2',
      type: 'example',
      title: 'Eksempel: Nazi-tiden',
      problem: `Beskriv hovedtrekkene i Nazi-Tyskland:`,
      solution: `**Das Dritte Reich (1933-1945)**

Am 30. Januar 1933 wurde Adolf Hitler zum Reichskanzler ernannt. Dies war der Beginn der nationalsozialistischen Diktatur.

**Hauptmerkmale:**
- Einparteienstaat (nur die NSDAP erlaubt)
- Totale Kontrolle uber Medien und Gesellschaft
- Verfolgung von Juden, Roma, Homosexuellen und politischen Gegnern
- Aufbau einer Kriegswirtschaft

**Der Holocaust:**
Die systematische Ermordung von sechs Millionen Juden und Millionen anderer Menschen in Konzentrationslagern.

**Der Zweite Weltkrieg (1939-1945):**
- Beginn: 1. September 1939 (Angriff auf Polen)
- Ende: 8. Mai 1945 (deutsche Kapitulation)
- Folge: Deutschland wurde in vier Besatzungszonen geteilt`,
    },
    {
      id: 'tysk-2-6-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-6-1-ex-2',
        number: '6.1.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til norsk:',
        subTasks: [
          { label: 'a', task: 'die Diktatur', solution: 'diktaturet', answer: 'diktaturet' },
          { label: 'b', task: 'die Verfolgung', solution: 'forfolgelsen', answer: 'forfølgelsen' },
          { label: 'c', task: 'die Kapitulation', solution: 'kapitulasjonen', answer: 'kapitulasjonen' },
          { label: 'd', task: 'die Besatzungszone', solution: 'okkupasjonssonen', answer: 'okkupasjonssonen' },
        ],
        solution: 'a) diktaturet, b) forfolgelsen, c) kapitulasjonen, d) okkupasjonssonen',
        hints: ['Mange ord ligner pa norsk'],
      },
    },
    {
      id: 'tysk-2-6-1-text-3',
      type: 'text',
      content: `## Etterkrigstiden

Etter 1945 ble Tyskland delt i fire okkupasjonssoner (amerikansk, britisk, fransk og sovjetisk). I 1949 ble to tyske stater grunnlagt:

**Bundesrepublik Deutschland (BRD)** - Vest-Tyskland
- Vestlige soner
- Demokrati og markedsokonomi
- Medlem av NATO og EU

**Deutsche Demokratische Republik (DDR)** - Ost-Tyskland
- Sovjetisk sone
- Kommunistisk ettpartisystem
- Medlem av Warszawapakten`,
    },
    {
      id: 'tysk-2-6-1-example-3',
      type: 'example',
      title: 'Eksempel: Diskutere historie pa tysk',
      problem: `Hvordan diskuterer man historie pa tysk?`,
      solution: `**Nyttige fraser:**

**Tidsbegreper:**
- Im Jahr 1933... (I aret 1933...)
- Wahrend des Krieges... (Under krigen...)
- Nach dem Krieg... (Etter krigen...)
- Vor der Wiedervereinigung... (For gjenforeningen...)

**A snakke om arsaker:**
- Der Grund dafur war... (Grunnen til det var...)
- Das fuhrte zu... (Det forte til...)
- Aufgrund von... (Pa grunn av...)

**A snakke om konsekvenser:**
- Die Folge war... (Konsekvensen var...)
- Dies hatte zur Folge, dass... (Dette forte til at...)
- Deshalb... (Derfor...)`,
    },
    {
      id: 'tysk-2-6-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-6-1-ex-3',
        number: '6.1.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv korte svar pa tysk:',
        subTasks: [
          { label: 'a', task: 'Wann begann der Zweite Weltkrieg?', solution: 'Der Zweite Weltkrieg begann am 1. September 1939.', answer: '1. September 1939' },
          { label: 'b', task: 'Was war die DDR?', solution: 'Die DDR war Ost-Deutschland, ein kommunistischer Staat.', answer: 'Ost-Deutschland / kommunistischer Staat' },
          { label: 'c', task: 'Warum wurde Deutschland geteilt?', solution: 'Deutschland wurde geteilt wegen des Kalten Krieges zwischen Ost und West.', answer: 'varierer' },
        ],
        solution: 'Ulike formuleringer er mulige.',
        hints: ['Bruk preteritum (war, wurde, begann)', 'Se pa frasene fra eksempelet'],
      },
    },
    {
      id: 'tysk-2-6-1-warning-1',
      type: 'warning',
      content: `**Viktig:** Nazitiden og Holocaust er ekstremt sensitive temaer i Tyskland. Symboler som hakekorset er forbudt, og bagatellisering av Holocaust er straffbart. Vis alltid respekt nar du diskuterer denne perioden.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.2: Die Teilung und Wiedervereinigung
// ============================================================================

export const CHAPTER_TYSK_2_6_2: TextbookChapter = {
  id: 'tysk-2-6-2',
  courseId: 'tysk-2',
  chapterNumber: '6.2',
  title: 'Die Teilung und Wiedervereinigung',
  subtitle: 'Berlinmuren og gjenforeningen',
  description: 'Laer om delingen av Tyskland og gjenforeningen i 1990.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå delingen av Tyskland',
    'kjenne til Berlinmurens historie',
  ],
  content: [
    {
      id: 'tysk-2-6-2-intro',
      type: 'text',
      content: `## Den delte tiden (1949-1990)

I over 40 ar var Tyskland delt i to stater. Berlin var ogsa delt - og fra 1961 av en mur. Denne perioden preget millioner av mennesker og har fortsatt betydning i dag.

**Viktige datoer:**
- 1949: Grunnleggelse av BRD og DDR
- 1961: Bygging av Berlinmuren
- 1989: Murens fall
- 1990: Gjenforeningen`,
    },
    {
      id: 'tysk-2-6-2-def-1',
      type: 'definition',
      title: 'Ordforrad: Delingen',
      content: `**Politiske begreper:**
die Mauer - muren | die Grenze - grensen
der Westen - vesten | der Osten - osten
die Flucht - flukten | der Fluchtling - flyktningen
die Stasi - statssikkerheten (DDR)

**Viktige steder:**
der Checkpoint Charlie - grenseovergang i Berlin
das Brandenburger Tor - Brandenburger Tor
der Todesstreifen - dodsstripa (langs muren)`,
    },
    {
      id: 'tysk-2-6-2-example-1',
      type: 'example',
      title: 'Eksempel: Berlinmuren',
      problem: `Beskriv Berlinmurens historie:`,
      solution: `**Die Berliner Mauer (1961-1989)**

Am 13. August 1961 begann die DDR, eine Mauer um West-Berlin zu bauen. Der offizielle Grund war "antifaschistischer Schutzwall", aber in Wirklichkeit wollte man die Flucht von DDR-Burgern in den Westen stoppen.

**Fakten zur Mauer:**
- Lange: ca. 155 km (um ganz West-Berlin)
- Hohe: 3,6 Meter
- Mindestens 140 Menschen starben bei Fluchtversuchen

**Auswirkungen:**
- Familien wurden getrennt
- Millionen Menschen lebten eingesperrt
- Die Mauer wurde zum Symbol des Kalten Krieges

**Der Fall der Mauer:**
Am 9. November 1989 offnete die DDR die Grenzen. Tausende Menschen feierten auf der Mauer. Es war der Anfang vom Ende der DDR.`,
    },
    {
      id: 'tysk-2-6-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-6-2-ex-1',
        number: '6.2.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar pa sporsmalene:',
        subTasks: [
          { label: 'a', task: 'Nar ble Berlinmuren bygget?', solution: '1961', answer: '1961' },
          { label: 'b', task: 'Nar falt muren?', solution: '9. november 1989', answer: '9. November 1989' },
          { label: 'c', task: 'Hvor lang var muren?', solution: 'ca. 155 km', answer: '155 km' },
        ],
        solution: 'a) 1961, b) 9. november 1989, c) ca. 155 km',
        hints: ['Les eksempelteksten'],
      },
    },
    {
      id: 'tysk-2-6-2-text-2',
      type: 'text',
      content: `## Livet i DDR

Livet i Ost-Tyskland var svart forskjellig fra Vest-Tyskland:

**Politisk kontroll:**
- Bare ett parti (SED) hadde makten
- Stasi (hemmelig politi) overvakte befolkningen
- Reiseforbud til Vesten
- Pressesensur

**Dagliglivet:**
- Mangel pa forbruksvarer
- Lange koer for varer
- Gratis utdanning og helsevesen
- Garantert arbeid (men lav lonn)

Mange osttyskere lengtet etter frihet og velstand i Vesten.`,
    },
    {
      id: 'tysk-2-6-2-example-2',
      type: 'example',
      title: 'Eksempel: Personlige fortellinger',
      problem: `Les denne personlige beretningen fra DDR:`,
      solution: `**Erfahrungsbericht: Leben in der DDR**

"Ich bin 1975 in Ost-Berlin geboren. Als Kind wusste ich nicht viel uber den Westen - nur, dass es dort mehr Bananen gab! Meine Grossmutter wohnte in West-Berlin, aber wir konnten sie nur selten besuchen.

Die Schule war streng. Wir mussten die Pioniere tragen und von der DDR als dem "besseren Deutschland" lernen. Meine Eltern sprachen zu Hause leise uber Politik - man wusste nie, wer zuhorte.

Als die Mauer fiel, war ich 14 Jahre alt. Ich erinnere mich an die Freude auf den Strassen. Mein Vater weinte vor Gluck."

**Vokabular:**
- der Pionier - ungdomsorganisasjon i DDR
- zuhoren - lytte
- vor Gluck weinen - grate av glede`,
    },
    {
      id: 'tysk-2-6-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-6-2-ex-2',
        number: '6.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Leseforstaelse - svar pa tysk:',
        subTasks: [
          { label: 'a', task: 'Wo ist die Person geboren?', solution: 'In Ost-Berlin', answer: 'In Ost-Berlin' },
          { label: 'b', task: 'Wo wohnte die Grossmutter?', solution: 'In West-Berlin', answer: 'In West-Berlin' },
          { label: 'c', task: 'Wie alt war die Person als die Mauer fiel?', solution: '14 Jahre alt', answer: '14 Jahre' },
        ],
        solution: 'a) In Ost-Berlin, b) In West-Berlin, c) 14 Jahre alt',
        hints: ['Svarene finnes direkte i teksten'],
      },
    },
    {
      id: 'tysk-2-6-2-text-3',
      type: 'text',
      content: `## Gjenforeningen (Die Wiedervereinigung)

Etter murens fall gikk det raskt:

**Tidslinje:**
- Nov. 1989: Grensene apnes
- Mars 1990: Fritt valg i DDR
- Juli 1990: Monetaer union (D-Mark i ost)
- 3. oktober 1990: **Tag der Deutschen Einheit** (Offisiell gjenforening)

**Utfordringer etter gjenforeningen:**
- Okonomisk omstilling i ost
- Arbeidsloshet
- "Mauer in den Kopfen" - mentale forskjeller
- Kostnader for gjenoppbygging`,
    },
    {
      id: 'tysk-2-6-2-example-3',
      type: 'example',
      title: 'Eksempel: Gjenforeningsdagen',
      problem: `Hva er "Tag der Deutschen Einheit"?`,
      solution: `**Der Tag der Deutschen Einheit - 3. Oktober**

Der 3. Oktober ist Deutschlands Nationalfeiertag. An diesem Tag im Jahr 1990 wurde Deutschland offiziell wiedervereinigt.

**Wie wird gefeiert?**
- Offizielle Feiern in Berlin und anderen Stadten
- Feuerwerk und Konzerte
- Politische Reden
- Burgerfeste

**Bedeutung:**
Der Tag erinnert an die friedliche Revolution und die Uberwindung der deutschen Teilung. Er ist ein Symbol fur Freiheit und Demokratie.

**Nyttige ord:**
- der Nationalfeiertag - nasjonaldagen
- die Wiedervereinigung - gjenforeningen
- die friedliche Revolution - den fredelige revolusjonen
- die Uberwindung - overvinnelsen`,
    },
    {
      id: 'tysk-2-6-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-6-2-ex-3',
        number: '6.2.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Diskuter pa tysk:',
        subTasks: [
          { label: 'a', task: 'Wann ist der deutsche Nationalfeiertag?', solution: 'Am 3. Oktober', answer: '3. Oktober' },
          { label: 'b', task: 'Was bedeutet "die Mauer in den Kopfen"?', solution: 'Mentale/psykologiske forskjeller mellom ost og vest', answer: 'mentale forskjeller' },
          { label: 'c', task: 'Warum war die Wiedervereinigung schwierig?', solution: 'Wegen okonomischer Unterschiede, Arbeitslosigkeit, etc.', answer: 'varierer' },
        ],
        solution: 'Ulike formuleringer er mulige.',
        hints: ['Mauer in den Kopfen = metafor for mentale barrierer'],
      },
    },
    {
      id: 'tysk-2-6-2-note-1',
      type: 'note',
      content: `**Kulturtips:** Besoek Berlin og se restene av muren ved East Side Gallery, Checkpoint Charlie-museet og Gedenkstatte Berliner Mauer. Filmer som "Good Bye, Lenin!" og "Das Leben der Anderen" gir ogsa god innsikt i tiden.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.3: Das politische System Deutschlands
// ============================================================================

export const CHAPTER_TYSK_2_6_3: TextbookChapter = {
  id: 'tysk-2-6-3',
  courseId: 'tysk-2',
  chapterNumber: '6.3',
  title: 'Das politische System Deutschlands',
  subtitle: 'Hvordan Tyskland styres',
  description: 'Laer om det tyske politiske systemet og viktige institusjoner.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå det tyske politiske systemet',
    'kjenne til viktige politiske institusjoner',
  ],
  content: [
    {
      id: 'tysk-2-6-3-intro',
      type: 'text',
      content: `## Det tyske politiske systemet

Tyskland er en **forbundsrepublikk** (Bundesrepublik) - det betyr at makten er delt mellom staten (Bund) og de 16 delstatene (Lander). Systemet ble utformet etter andre verdenskrig for a forhindre maktkonsentrasjon.

**Viktige prinsipper:**
- Demokrati og rettsstat
- Foderalt system
- Parlamentarisk demokrati
- Sosial markedsokonomi`,
    },
    {
      id: 'tysk-2-6-3-def-1',
      type: 'definition',
      title: 'Politiske institusjoner',
      content: `**De viktigste institusjonene:**
der Bundestag - Forbundsdagen (parlamentet)
der Bundesrat - Forbundsradet (delstatenes representasjon)
der Bundespraesident - Forbundspresidenten (statsoverhode)
der Bundeskanzler - Forbundskansleren (regjeringssjef)
die Bundesregierung - Forbundsregjeringen

**Andre viktige begreper:**
das Grundgesetz - Grunnloven
die Partei - partiet
die Wahl - valget
der Abgeordnete - representanten`,
    },
    {
      id: 'tysk-2-6-3-example-1',
      type: 'example',
      title: 'Eksempel: Bundestag og Bundesrat',
      problem: `Forklar forskjellen mellom Bundestag og Bundesrat:`,
      solution: `**Der Bundestag**
- Tysklands parlament
- Minst 598 medlemmer (kan vaere flere pga. overskuddsmandater)
- Velges direkte av folket hvert 4. ar
- Hovedoppgaver:
  - Vedta lover
  - Velge forbundskansleren
  - Kontrollere regjeringen

**Der Bundesrat**
- Representerer de 16 delstatene
- 69 medlemmer
- Ikke valgt direkte - sendt av delstatsregjeringene
- Hovedoppgaver:
  - Godkjenne lover som angår delstatene
  - Representere delstatenes interesser

**Sammenligning med Norge:**
- Bundestag = Stortinget
- Bundesrat = (finnes ikke direkte tilsvarende)`,
    },
    {
      id: 'tysk-2-6-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-6-3-ex-1',
        number: '6.3.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Koble institusjon med funksjon:',
        subTasks: [
          { label: 'a', task: 'Bundestag', solution: 'Parlamentet/vedtar lover', answer: 'Parlamentet' },
          { label: 'b', task: 'Bundeskanzler', solution: 'Regjeringssjef', answer: 'Regjeringssjef' },
          { label: 'c', task: 'Bundespraesident', solution: 'Statsoverhode', answer: 'Statsoverhode' },
          { label: 'd', task: 'Grundgesetz', solution: 'Grunnloven', answer: 'Grunnloven' },
        ],
        solution: 'a) Parlamentet, b) Regjeringssjef, c) Statsoverhode, d) Grunnloven',
        hints: ['Bund = forbund, Tag = dag (mote), Kanzler = kansler'],
      },
    },
    {
      id: 'tysk-2-6-3-text-2',
      type: 'text',
      content: `## Forbundskansleren og regjeringen

**Der Bundeskanzler** (forbundskansleren) er den viktigste politiske lederskikkelsen i Tyskland - tilsvarende statsministeren i Norge.

**Viktige kanslere:**
- Konrad Adenauer (1949-1963) - forste kansler
- Willy Brandt (1969-1974) - Ostpolitik
- Helmut Kohl (1982-1998) - gjenforeningskansleren
- Angela Merkel (2005-2021) - forste kvinnelige kansler
- Olaf Scholz (2021-) - navarande kansler

Kansleren velges av Bundestag og leder regjeringen (Bundesregierung).`,
    },
    {
      id: 'tysk-2-6-3-example-2',
      type: 'example',
      title: 'Eksempel: De storste partiene',
      problem: `Hvilke partier finnes i Tyskland?`,
      solution: `**Die grossen Parteien:**

**CDU/CSU** (Christlich Demokratische Union / Christlich-Soziale Union)
- Konservativt, kristendemokratisk
- Sentrum-hoyre

**SPD** (Sozialdemokratische Partei Deutschlands)
- Sosialdemokratisk
- Sentrum-venstre

**Bundnis 90/Die Grunen**
- Miljoparti
- Sentrum-venstre

**FDP** (Freie Demokratische Partei)
- Liberalt parti
- Sentrum

**Die Linke**
- Venstreparti
- Venstre

**AfD** (Alternative fur Deutschland)
- Hoyre-populistisk
- Hoyre

**Koalisjoner:** Ofte ma flere partier samarbeide for a danne regjering. Scholz-regjeringen (2021) er f.eks. en "Ampelkoalition" (SPD + Grune + FDP).`,
    },
    {
      id: 'tysk-2-6-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-6-3-ex-2',
        number: '6.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Koble parti med politisk retning:',
        subTasks: [
          { label: 'a', task: 'CDU/CSU', solution: 'konservativ/kristendemokratisk', answer: 'konservativ' },
          { label: 'b', task: 'SPD', solution: 'sosialdemokratisk', answer: 'sosialdemokratisk' },
          { label: 'c', task: 'Die Grunen', solution: 'miljoparti', answer: 'miljoparti' },
          { label: 'd', task: 'FDP', solution: 'liberal', answer: 'liberal' },
        ],
        solution: 'a) konservativ, b) sosialdemokratisk, c) miljoparti, d) liberal',
        hints: ['CDU = Christlich (kristelig)', 'SPD = Sozialdemokratisch'],
      },
    },
    {
      id: 'tysk-2-6-3-text-3',
      type: 'text',
      content: `## Delstatene (Die Bundeslander)

Tyskland bestar av 16 delstater med egne regjeringer og parlamenter:

**De storste delstatene:**
- Nordrhein-Westfalen (mest folkerikt)
- Bayern (storst i areal)
- Baden-Wurttemberg
- Niedersachsen

**Bystater:**
- Berlin (hovedstad)
- Hamburg
- Bremen

**Ostlige delstater (tidligere DDR):**
- Sachsen, Thuringen, Brandenburg, Sachsen-Anhalt, Mecklenburg-Vorpommern

Hver delstat har sin egen minister-president (bortsett fra bystatene).`,
    },
    {
      id: 'tysk-2-6-3-example-3',
      type: 'example',
      title: 'Eksempel: Valg i Tyskland',
      problem: `Hvordan fungerer valg i Tyskland?`,
      solution: `**Das Wahlsystem**

Ved Bundestagsvalg har hver velger **to stemmer**:

**Erststimme (forstestemmen):**
- Velger en kandidat fra valgkretsen
- Direkte mandat

**Zweitstimme (andrestemmen):**
- Velger et parti
- Bestemmer partienes styrke i Bundestag
- Den viktigste stemmen!

**Sperrklausel (sperregrense):**
- Et parti ma fa minst 5% av andrestemmene
- Eller vinne minst 3 direktemandater
- For a komme inn i Bundestag

**Pa tysk:**
"Am Wahltag gehe ich ins Wahllokal. Dort bekomme ich meinen Stimmzettel. Ich mache zwei Kreuze - eins fur die Erststimme und eins fur die Zweitstimme. Dann werfe ich den Stimmzettel in die Wahlurne."`,
    },
    {
      id: 'tysk-2-6-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-6-3-ex-3',
        number: '6.3.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Svar pa tysk:',
        subTasks: [
          { label: 'a', task: 'Wie viele Stimmen hat man bei der Bundestagswahl?', solution: 'Man hat zwei Stimmen.', answer: 'zwei' },
          { label: 'b', task: 'Wie heisst die Sperrgrenze auf Deutsch?', solution: 'Die Sperrklausel (oder Funf-Prozent-Hurde)', answer: 'Sperrklausel' },
          { label: 'c', task: 'Wie viele Bundeslander hat Deutschland?', solution: 'Deutschland hat 16 Bundeslander.', answer: '16' },
        ],
        solution: 'a) Zwei Stimmen, b) Die Sperrklausel / Funf-Prozent-Hurde, c) 16 Bundeslander',
        hints: ['Erst = forst, Zweit = andre', 'Sperr = sperre, Klausel = klausul'],
      },
    },
    {
      id: 'tysk-2-6-3-tip-1',
      type: 'tip',
      content: `**Folg med pa tysk politikk:** Nettsider som tagesschau.de og zeit.de gir gode nyheter pa lettlest tysk. Under valgkamper er det spesielt interessant a folge debattene!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.4: Deutschland in Europa
// ============================================================================

export const CHAPTER_TYSK_2_6_4: TextbookChapter = {
  id: 'tysk-2-6-4',
  courseId: 'tysk-2',
  chapterNumber: '6.4',
  title: 'Deutschland in Europa',
  subtitle: 'Tysklands rolle i EU og Europa',
  description: 'Laer om Tysklands rolle i EU og europeisk samarbeid.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstå Tysklands rolle i EU',
    'diskutere europeisk samarbeid pa tysk',
  ],
  content: [
    {
      id: 'tysk-2-6-4-intro',
      type: 'text',
      content: `## Tyskland i Europa

Tyskland er et av de viktigste landene i EU - bade okonomisk og politisk. Etter andre verdenskrig ble europeisk integrasjon sett som en mate a sikre fred pa, og Tyskland har vaert en padriver for europeisk samarbeid.

**Viktige organisasjoner:**
- EU (Europaische Union) - Den europeiske union
- NATO (Nordatlantikpakt) - Forsvarsallianse
- FN (Vereinte Nationen) - De forente nasjoner`,
    },
    {
      id: 'tysk-2-6-4-def-1',
      type: 'definition',
      title: 'EU-ordforrad',
      content: `**Institusjoner:**
die Europaische Union - EU
das Europaische Parlament - Europaparlamentet
die Europaische Kommission - EU-kommisjonen
der Europaische Rat - Det europeiske rad
der Europagerichtshof - EU-domstolen

**Viktige begreper:**
der Euro - euroen
der Binnenmarkt - det indre markedet
die Freizugigkeit - fri bevegelighet
das Schengen-Abkommen - Schengen-avtalen
der Brexit - Storbritannias uttreden`,
    },
    {
      id: 'tysk-2-6-4-example-1',
      type: 'example',
      title: 'Eksempel: Tysklands rolle i EU',
      problem: `Beskriv Tysklands rolle i EU:`,
      solution: `**Deutschland in der EU**

Deutschland ist eines der Grundungsmitglieder der EU (damals EWG, 1957). Heute ist Deutschland:

**Okonomisk:**
- Storste okonomi i EU
- Storste bidragsyter til EU-budsjettet
- Viktig handelspartner for alle EU-land

**Politisk:**
- Ofte ledende i EU-politikk
- Viktig samarbeid med Frankrike ("deutsch-franzosische Achse")
- Sentral rolle i kriser (eurokrise, flyktningkrise, korona)

**Geografisk:**
- Ligger midt i Europa
- Grenser til 9 land (flest i EU)
- Viktig transittland

**Viktig:** Tyskland er for mer europeisk integrasjon og ser EU som garanti for fred og velstand.`,
    },
    {
      id: 'tysk-2-6-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-6-4-ex-1',
        number: '6.4.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til norsk:',
        subTasks: [
          { label: 'a', task: 'die Europaische Union', solution: 'Den europeiske union / EU', answer: 'Den europeiske union' },
          { label: 'b', task: 'der Binnenmarkt', solution: 'det indre markedet', answer: 'det indre markedet' },
          { label: 'c', task: 'die Freizugigkeit', solution: 'fri bevegelighet', answer: 'fri bevegelighet' },
          { label: 'd', task: 'das Europaische Parlament', solution: 'Europaparlamentet', answer: 'Europaparlamentet' },
        ],
        solution: 'a) Den europeiske union, b) det indre markedet, c) fri bevegelighet, d) Europaparlamentet',
        hints: ['Binnen = inne/indre', 'Zug = bevegelse, frei = fri'],
      },
    },
    {
      id: 'tysk-2-6-4-text-2',
      type: 'text',
      content: `## EU og hverdagen

For vanlige borgere betyr EU mye i hverdagen:

**Fordelene:**
- Reise uten pass i Schengen-omradet
- Bo og jobbe fritt i andre EU-land
- Billigere mobilbruk i utlandet (roaming)
- Felles valuta (euro) i 20 land
- Forbrukerbeskyttelse

**Utfordringer:**
- Byrakrati i Brussel
- Uenighet om flyktningpolitikk
- Okonomiske forskjeller mellom land
- Brexit viste at EU ikke er perfekt`,
    },
    {
      id: 'tysk-2-6-4-example-2',
      type: 'example',
      title: 'Eksempel: Diskutere EU pa tysk',
      problem: `Hvordan diskuterer man EU pa tysk?`,
      solution: `**Nyttige fraser:**

**For EU:**
- "Ich finde die EU wichtig, weil..."
  (Jeg synes EU er viktig fordi...)
- "Die EU sorgt fur Frieden und Wohlstand."
  (EU sorger for fred og velstand.)
- "Dank der EU konnen wir frei reisen."
  (Takket vaere EU kan vi reise fritt.)

**Kritisk til EU:**
- "Die EU ist zu burokratisch."
  (EU er for byrakratisk.)
- "Brussel entscheidet zu viel."
  (Brussel bestemmer for mye.)
- "Es gibt zu wenig Demokratie in der EU."
  (Det er for lite demokrati i EU.)

**Noytral:**
- "Die EU hat Vor- und Nachteile."
  (EU har fordeler og ulemper.)
- "Es ist ein kompliziertes Thema."
  (Det er et komplisert tema.)`,
    },
    {
      id: 'tysk-2-6-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-6-4-ex-2',
        number: '6.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'EU er viktig for fred.', solution: 'Die EU ist wichtig fur den Frieden.', answer: 'Die EU ist wichtig für den Frieden' },
          { label: 'b', task: 'Vi kan reise fritt i Europa.', solution: 'Wir konnen frei in Europa reisen.', answer: 'Wir können frei in Europa reisen' },
          { label: 'c', task: 'Tyskland er det storste landet i EU.', solution: 'Deutschland ist das grosste Land in der EU.', answer: 'Deutschland ist das größte Land in der EU' },
        ],
        solution: 'a) Die EU ist wichtig fur den Frieden, b) Wir konnen frei in Europa reisen, c) Deutschland ist das grosste Land in der EU',
        hints: ['wichtig fur + akkusativ', 'Superlativ: das grosste'],
      },
    },
    {
      id: 'tysk-2-6-4-text-3',
      type: 'text',
      content: `## Norge og Tyskland i Europa

Norge er ikke medlem av EU, men har et naert forhold til Tyskland og EU:

**Samarbeid:**
- EOS-avtalen gir tilgang til det indre markedet
- Schengen-samarbeid
- Viktig handelspartner (olje, gass, fisk)
- Kulturelt og akademisk samarbeid

**Forskjeller:**
- Norge har egen valuta (krone)
- Norge er ikke med i EUs landbrukspolitikk
- Norge har egen fiskeri- og oljepolitikk

Tyskland er en av Norges viktigste handelspartnere!`,
    },
    {
      id: 'tysk-2-6-4-example-3',
      type: 'example',
      title: 'Eksempel: Sammenligne land',
      problem: `Sammenlign Norge og Tyskland pa tysk:`,
      solution: `**Vergleich: Norwegen und Deutschland**

**Gemeinsamkeiten (Likheter):**
- Beide Lander sind Demokratien
- Beide sind Mitglieder von NATO
- Beide haben eine starke Wirtschaft
- Enge kulturelle Beziehungen

**Unterschiede (Forskjeller):**
- Deutschland ist EU-Mitglied, Norwegen nicht
- Deutschland hat den Euro, Norwegen die Krone
- Deutschland hat 83 Millionen Einwohner, Norwegen nur 5 Millionen
- Deutschland liegt in Mitteleuropa, Norwegen in Nordeuropa

**Wirtschaftsbeziehungen:**
Norwegen exportiert Ol, Gas und Fisch nach Deutschland. Deutschland exportiert Autos, Maschinen und Chemikalien nach Norwegen.`,
    },
    {
      id: 'tysk-2-6-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-6-4-ex-3',
        number: '6.4.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv korte svar pa tysk:',
        subTasks: [
          { label: 'a', task: 'Ist Norwegen EU-Mitglied?', solution: 'Nein, Norwegen ist kein EU-Mitglied.', answer: 'Nein' },
          { label: 'b', task: 'Was exportiert Norwegen nach Deutschland?', solution: 'Norwegen exportiert Ol, Gas und Fisch.', answer: 'Öl, Gas, Fisch' },
          { label: 'c', task: 'Warum ist Deutschland wichtig in der EU?', solution: 'Deutschland ist wichtig weil es die grosste Wirtschaft hat.', answer: 'varierer' },
        ],
        solution: 'Ulike formuleringer er mulige.',
        hints: ['Bruk "weil" for a forklare', 'exportieren = eksportere'],
      },
    },
    {
      id: 'tysk-2-6-4-note-1',
      type: 'note',
      content: `**Aktuelle temaer:** EU er stadig i endring. Folg med pa nyheter om europeisk politikk! Temaer som klima, migrasjon og okonomi diskuteres ofte. Deutsche Welle (dw.com) har gode artikler pa enkel tysk.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const TYSK_2_CHAPTERS_4_6: TextbookChapter[] = [
  CHAPTER_TYSK_2_4_1,
  CHAPTER_TYSK_2_4_2,
  CHAPTER_TYSK_2_4_3,
  CHAPTER_TYSK_2_4_4,
  CHAPTER_TYSK_2_5_1,
  CHAPTER_TYSK_2_5_2,
  CHAPTER_TYSK_2_5_3,
  CHAPTER_TYSK_2_5_4,
  CHAPTER_TYSK_2_6_1,
  CHAPTER_TYSK_2_6_2,
  CHAPTER_TYSK_2_6_3,
  CHAPTER_TYSK_2_6_4,
];
