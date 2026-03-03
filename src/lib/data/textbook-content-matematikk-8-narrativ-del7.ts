/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 8. klasse - Narrativ versjon Del 7
 *
 * Kapittel 6.1: Hoderegningsstrategier -- addisjon og subtraksjon
 * Kapittel 6.2: Hoderegningsstrategier -- multiplikasjon og divisjon
 * Kapittel 6.3: Overslagsregning og avrundingsstrategier
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 6.1 NARRATIV: Hoderegningsstrategier -- addisjon og subtraksjon
// ============================================================================

export const CHAPTER_8_6_1_NARRATIV: TextbookChapter = {
  id: '8-6-1-narrativ',
  courseId: '8',
  chapterNumber: '6.1',
  title: 'Hoderegningsstrategier -- addisjon og subtraksjon',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av hoderegningsstrategier for addisjon og subtraksjon -- der vi lærer å bruke vennlige tall, kompensasjon og tallinjen for å regne raskere og smartere i hodet.',
  estimatedMinutes: 30,
  competenceGoals: [
    'utvikle og bruke metodar for hovudrekning, overslagsrekning og skriftleg rekning',
  ],
  linkedChapterId: '8-6-1',
  content: [
    {
      id: '8-6-1-n-intro',
      type: 'text',
      content: `## Hvorfor regne i hodet?

Forestill deg at du er i butikken. Du har en hundrelapp og legger tre ting i handlekurven: en brus til 29 kr, en sjokolade til 37 kr og en pakke tyggis til 19 kr. Rekker pengene? Du har ikke kalkulator for hånden, men hjernen din er raskere enn du tror -- hvis du bruker riktige strategier.

**Hoderegning** handler ikke om å huske masse tall i hodet samtidig. Det handler om å gjøre regnestykket *enklere* før du regner. De fleste som er gode til hoderegning bruker smarte triks for å forvandle vanskelige regnestykker til lette. I dette kapittelet skal du lære de viktigste strategiene for addisjon og subtraksjon.

Nøkkelen til god hoderegning er ett prinsipp: **gjør regnestykket vennlig**. Et vennlig tall er et tall som er lett å jobbe med -- typisk et tiertal som $10$, $20$, $50$ eller $100$.`,
    },

    {
      id: '8-6-1-n-section1',
      type: 'text',
      content: `## Strategi 1: Vennlige tall (runde opp eller ned)

Den enkleste hoderegningsstrategien er å avrunde et av tallene til nærmeste tiertal og deretter justere.

**Eksempel: $47 + 38$**

$38$ er nesten $40$. Vi regner:
$$47 + 40 = 87$$
Men vi la til $2$ for mye (fordi $40 - 38 = 2$), så vi trekker fra igjen:
$$87 - 2 = 85$$

Altså: $47 + 38 = 85$.

**Eksempel: $83 - 29$**

$29$ er nesten $30$. Vi regner:
$$83 - 30 = 53$$
Men vi trakk fra $1$ for mye, så vi legger tilbake:
$$53 + 1 = 54$$

Altså: $83 - 29 = 54$.

Denne strategien kalles **kompensasjon** -- vi gjør regnestykket enklere ved å bruke et vennlig tall, og deretter kompenserer vi for forskjellen. Trikset er å holde styr på om du la til for mye eller for lite:

- Hvis du **runder opp** et tall du **adderer**, har du lagt til for mye -- **trekk fra** kompensasjonen.
- Hvis du **runder opp** et tall du **subtraherer**, har du trukket fra for mye -- **legg til** kompensasjonen.`,
    },

    {
      id: '8-6-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-6-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på vennlige tall:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-6-1-n-quiz1-q0',
            task: 'Hva er $56 + 39$ med kompensasjon?',
            options: [
              { id: 'a', text: '$94$', isCorrect: false },
              { id: 'b', text: '$95$', isCorrect: true },
              { id: 'c', text: '$96$', isCorrect: false },
              { id: 'd', text: '$93$', isCorrect: false },
            ],
            solution: '$39$ er nesten $40$. $56 + 40 = 96$. Vi la til $1$ for mye: $96 - 1 = 95$.',
          },
          {
            id: '8-6-1-n-quiz1-q1',
            task: 'Du regner $72 - 48$ ved å runde $48$ opp til $50$. Hva blir mellomsvaret, og hva må du gjøre etterpå?',
            options: [
              { id: 'a', text: '$72 - 50 = 22$, deretter legge til $2$: svaret er $24$', isCorrect: true },
              { id: 'b', text: '$72 - 50 = 22$, deretter trekke fra $2$: svaret er $20$', isCorrect: false },
              { id: 'c', text: '$72 - 50 = 22$, og det er endelig svar', isCorrect: false },
              { id: 'd', text: '$72 - 50 = 32$, deretter legge til $2$: svaret er $34$', isCorrect: false },
            ],
            solution: 'Vi runder $48$ opp til $50$ og trekker fra: $72 - 50 = 22$. Siden vi trakk fra $2$ for mye, legger vi tilbake: $22 + 2 = 24$.',
          },
          {
            id: '8-6-1-n-quiz1-q2',
            task: 'Hva er $128 + 97$?',
            options: [
              { id: 'a', text: '$215$', isCorrect: false },
              { id: 'b', text: '$225$', isCorrect: true },
              { id: 'c', text: '$235$', isCorrect: false },
              { id: 'd', text: '$220$', isCorrect: false },
            ],
            solution: '$97$ er nesten $100$. $128 + 100 = 228$. Vi la til $3$ for mye: $228 - 3 = 225$.',
          },
        ],
      },
    },

    {
      id: '8-6-1-n-section2',
      type: 'text',
      content: `## Strategi 2: Dele opp tallene (partisjonering)

En annen kraftig strategi er å **dele opp** et av tallene i deler som er lettere å jobbe med -- for eksempel i tiere og enere.

**Eksempel: $64 + 53$**

Del opp $53$ i $50 + 3$:
$$64 + 50 = 114$$
$$114 + 3 = 117$$

**Eksempel: $92 - 35$**

Del opp $35$ i $30 + 5$:
$$92 - 30 = 62$$
$$62 - 5 = 57$$

Denne metoden fungerer spesielt godt for subtraksjon, fordi den unngår «lån» som kan være forvirrende i hodet. Ved å trekke fra tierene først, og deretter enerne, holder du deg i komfortabelt territorium.

**Eksempel med tre tall: $29 + 37 + 41$**

Her kan vi bruke en kombinasjon: legg sammen tallene som gir «fine» summer først.

$29 + 41 = 70$ (nesten $30$ pluss nesten $40$, men enda lettere: $29 + 1 = 30$, og da gjenstår $40$ av $41$, altså $30 + 40 = 70$)

Så: $70 + 37 = 107$.

Å lete etter tall som gir pene summer kalles **par-strategi** eller **make ten**.`,
    },

    {
      id: '8-6-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-6-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på partisjonering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-6-1-n-quiz2-q0',
            task: 'Regn $78 + 45$ ved å dele opp $45$ i $40 + 5$. Hva er svaret?',
            options: [
              { id: 'a', text: '$113$', isCorrect: false },
              { id: 'b', text: '$123$', isCorrect: true },
              { id: 'c', text: '$133$', isCorrect: false },
              { id: 'd', text: '$121$', isCorrect: false },
            ],
            solution: '$78 + 40 = 118$, deretter $118 + 5 = 123$.',
          },
          {
            id: '8-6-1-n-quiz2-q1',
            task: 'Du skal finne $85 - 47$. Hvilket mellomsteg gir riktig svar?',
            options: [
              { id: 'a', text: '$85 - 40 = 45$, deretter $45 - 7 = 38$', isCorrect: true },
              { id: 'b', text: '$85 - 50 = 35$, deretter $35 + 7 = 42$', isCorrect: false },
              { id: 'c', text: '$85 - 40 = 55$, deretter $55 - 7 = 48$', isCorrect: false },
              { id: 'd', text: '$85 - 47 = 48$', isCorrect: false },
            ],
            solution: 'Del opp $47 = 40 + 7$. Trekk fra trinnvis: $85 - 40 = 45$, $45 - 7 = 38$.',
          },
          {
            id: '8-6-1-n-quiz2-q2',
            task: 'Hvilke to tall i summen $23 + 47 + 36 + 14$ bør du legge sammen først for enklest hoderegning?',
            options: [
              { id: 'a', text: '$23$ og $47$', isCorrect: false },
              { id: 'b', text: '$36$ og $14$', isCorrect: true },
              { id: 'c', text: '$47$ og $36$', isCorrect: false },
              { id: 'd', text: '$23$ og $36$', isCorrect: false },
            ],
            solution: '$36 + 14 = 50$ (fint tiertal). Deretter $23 + 47 = 70$. Til slutt $50 + 70 = 120$.',
          },
        ],
      },
    },

    {
      id: '8-6-1-n-section3',
      type: 'text',
      content: `## Strategi 3: Tallinjen som tankeverktøy

Noen ganger er det lettere å tenke på subtraksjon som **avstanden mellom to tall** i stedet for å «ta bort». Forestill deg en tallinje der du hopper fremover fra det minste tallet til det største.

**Eksempel: $82 - 57$**

I stedet for å trekke $57$ fra $82$, tenker vi: «Hvor langt er det fra $57$ til $82$ på tallinjen?»

- Fra $57$ til $60$: det er $3$
- Fra $60$ til $80$: det er $20$
- Fra $80$ til $82$: det er $2$

Total avstand: $3 + 20 + 2 = 25$. Altså $82 - 57 = 25$.

Denne metoden er spesielt nyttig når tallene ligger nær hverandre, for eksempel $103 - 97$. I stedet for å sette opp en lang subtraksjon, teller du bare fremover: fra $97$ til $100$ er $3$, fra $100$ til $103$ er $3$. Svaret er $6$.

**Eksempel med større tall: $1000 - 683$**

- Fra $683$ til $700$: $17$
- Fra $700$ til $1000$: $300$

Svar: $17 + 300 = 317$.

Denne tilnærmingen kalles også **regning oppover** eller **shopkeeper's method** (kassererens metode), fordi kasserer tradisjonelt telte vekslepenger på akkurat denne måten.`,
    },

    {
      id: '8-6-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-6-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på tallinjemetoden:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-6-1-n-quiz3-q0',
            task: 'Regn $91 - 64$ ved å telle oppover fra $64$. Hva er svaret?',
            options: [
              { id: 'a', text: '$37$', isCorrect: false },
              { id: 'b', text: '$27$', isCorrect: true },
              { id: 'c', text: '$33$', isCorrect: false },
              { id: 'd', text: '$17$', isCorrect: false },
            ],
            solution: 'Fra $64$ til $70$: $6$. Fra $70$ til $91$: $21$. Totalt $6 + 21 = 27$.',
          },
          {
            id: '8-6-1-n-quiz3-q1',
            task: 'Du skal finne $500 - 287$. Ved å telle oppover fra $287$, hva er svaret?',
            options: [
              { id: 'a', text: '$213$', isCorrect: true },
              { id: 'b', text: '$223$', isCorrect: false },
              { id: 'c', text: '$203$', isCorrect: false },
              { id: 'd', text: '$313$', isCorrect: false },
            ],
            solution: 'Fra $287$ til $300$: $13$. Fra $300$ til $500$: $200$. Totalt $13 + 200 = 213$.',
          },
          {
            id: '8-6-1-n-quiz3-q2',
            task: 'Hvilken strategi passer best for $205 - 198$?',
            options: [
              { id: 'a', text: 'Kompensasjon (runde $198$ til $200$)', isCorrect: false },
              { id: 'b', text: 'Partisjonering (del opp $198$ i $100 + 90 + 8$)', isCorrect: false },
              { id: 'c', text: 'Telle oppover (fra $198$ til $205$)', isCorrect: true },
              { id: 'd', text: 'Alle tre er like vanskelige', isCorrect: false },
            ],
            solution: 'Tallene ligger veldig nær hverandre, så det er lettest å telle oppover: fra $198$ til $205$ er det bare $7$. (Kompensasjon fungerer også: $205 - 200 = 5$, pluss $2 = 7$, men oppovertelling er mest direkte.)',
          },
        ],
      },
    },

    {
      id: '8-6-1-n-section4',
      type: 'text',
      content: `## Strategi 4: Lik endring (konstant differanse)

Her er en elegant strategi: i en subtraksjon kan du legge til (eller trekke fra) det samme tallet på **begge** tall uten at svaret endres. Det er fordi differansen mellom to tall forblir den samme når begge flyttes like langt.

**Eksempel: $73 - 28$**

Legg til $2$ på begge tall:
$$73 - 28 = 75 - 30 = 45$$

Plutselig ble regnestykket mye enklere!

**Eksempel: $146 - 89$**

Legg til $1$ på begge:
$$146 - 89 = 147 - 90 = 57$$

Denne strategien er kraftig fordi den kan forvandle ethvert subtraksjonsregnestykke til et regnestykke med et rundt tall. Velg alltid å justere slik at **det du trekker fra** blir et tiertal.

For addisjon fungerer en lignende idé -- men i stedet flytter du «enheter» fra det ene tallet til det andre:

**Eksempel: $68 + 45$**

Flytt $2$ fra $45$ til $68$:
$$68 + 45 = 70 + 43 = 113$$

Du endret ikke totalen, bare fordelingen mellom de to tallene.`,
    },

    {
      id: '8-6-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Fire strategier for hoderegning med addisjon og subtraksjon:

| Strategi | Idé | Eksempel |
|----------|-----|----------|
| **Vennlige tall** | Rund av og kompenser | $47 + 38 = 47 + 40 - 2 = 85$ |
| **Partisjonering** | Del opp i tiere og enere | $64 + 53 = 64 + 50 + 3 = 117$ |
| **Tallinje** | Tell oppover fra minste tall | $82 - 57$: $57 \\to 60 \\to 80 \\to 82 = 25$ |
| **Lik endring** | Juster begge tall likt | $73 - 28 = 75 - 30 = 45$ |

Tips for hoderegning:
- Velg strategi ut fra tallene -- noen tall inviterer til avrunding, andre til partisjonering
- Se etter tall som gir pene summer ($36 + 14 = 50$)
- Ved subtraksjon av tall som ligger nær hverandre, tell oppover
- Øvelse gir fart -- jo mer du bruker strategiene, jo raskere blir du`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.2 NARRATIV: Hoderegningsstrategier -- multiplikasjon og divisjon
// ============================================================================

export const CHAPTER_8_6_2_NARRATIV: TextbookChapter = {
  id: '8-6-2-narrativ',
  courseId: '8',
  chapterNumber: '6.2',
  title: 'Hoderegningsstrategier -- multiplikasjon og divisjon',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av hoderegningsstrategier for multiplikasjon og divisjon -- der vi lærer å doble og halvere, bryte opp faktorer og utnytte regneregler for å multiplisere og dividere raskt i hodet.',
  estimatedMinutes: 30,
  competenceGoals: [
    'utvikle og bruke metodar for hovudrekning, overslagsrekning og skriftleg rekning',
  ],
  linkedChapterId: '8-6-2',
  content: [
    {
      id: '8-6-2-n-intro',
      type: 'text',
      content: `## Multiplikasjon og divisjon uten kalkulator

Multiplikasjon og divisjon kan virke vanskelig å gjøre i hodet. Å gange $17 \\cdot 24$ rett frem krever at du holder mange mellomresultater i hukommelsen. Men akkurat som med addisjon og subtraksjon finnes det smarte strategier som gjør jobben mye lettere.

Grunnideen er den samme: **gjør regnestykket enklere**. I stedet for å gange med $24$ direkte, kan du for eksempel gange med $25$ og justere. I stedet for å dele på $15$, kan du dele på $5$ og deretter på $3$.

La oss utforske de viktigste strategiene.`,
    },

    {
      id: '8-6-2-n-section1',
      type: 'text',
      content: `## Strategi 1: Dobling og halvering

Denne strategien bygger på en enkel idé: hvis du dobler den ene faktoren og halverer den andre, forblir produktet det samme.

$$a \\cdot b = (2a) \\cdot \\frac{b}{2}$$

**Eksempel: $35 \\cdot 18$**

Halvér $18$ og doble $35$:
$$35 \\cdot 18 = 70 \\cdot 9 = 630$$

$70 \\cdot 9$ er mye enklere å gjøre i hodet enn $35 \\cdot 18$!

**Eksempel: $25 \\cdot 48$**

Doble $25$ og halvér $48$:
$$25 \\cdot 48 = 50 \\cdot 24 = 1200$$

Eller doble og halvér en gang til:
$$50 \\cdot 24 = 100 \\cdot 12 = 1200$$

Du kan doble og halvere flere ganger for å nå fine tall.

**Eksempel: $125 \\cdot 16$**

$$125 \\cdot 16 = 250 \\cdot 8 = 500 \\cdot 4 = 1000 \\cdot 2 = 2000$$

Denne strategien er spesielt nyttig når én av faktorene er et tall som ender på $5$ eller $25$ -- da gir dobling et pent tiertal.`,
    },

    {
      id: '8-6-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-6-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på dobling og halvering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-6-2-n-quiz1-q0',
            task: 'Hva er $45 \\cdot 12$ ved å doble og halvere?',
            options: [
              { id: 'a', text: '$540$', isCorrect: true },
              { id: 'b', text: '$450$', isCorrect: false },
              { id: 'c', text: '$560$', isCorrect: false },
              { id: 'd', text: '$520$', isCorrect: false },
            ],
            solution: '$45 \\cdot 12 = 90 \\cdot 6 = 540$.',
          },
          {
            id: '8-6-2-n-quiz1-q1',
            task: 'Hva er $250 \\cdot 32$ ved gjentatt dobling og halvering?',
            options: [
              { id: 'a', text: '$7500$', isCorrect: false },
              { id: 'b', text: '$8000$', isCorrect: true },
              { id: 'c', text: '$8500$', isCorrect: false },
              { id: 'd', text: '$7000$', isCorrect: false },
            ],
            solution: '$250 \\cdot 32 = 500 \\cdot 16 = 1000 \\cdot 8 = 8000$.',
          },
          {
            id: '8-6-2-n-quiz1-q2',
            task: 'Dobling og halvering er spesielt nyttig når:',
            options: [
              { id: 'a', text: 'Begge tallene er oddetall', isCorrect: false },
              { id: 'b', text: 'Én faktor ender på $5$ eller $25$, den andre er partall', isCorrect: true },
              { id: 'c', text: 'Tallene er primtall', isCorrect: false },
              { id: 'd', text: 'Tallene er like store', isCorrect: false },
            ],
            solution: 'Når én faktor ender på $5$ eller $25$ og den andre er et partall, gir dobling/halvering fine tiertall å jobbe med.',
          },
        ],
      },
    },

    {
      id: '8-6-2-n-section2',
      type: 'text',
      content: `## Strategi 2: Bryte opp faktorer (distributiv lov)

Denne strategien bruker den **distributive loven** -- at vi kan dele opp en av faktorene og gange delene hver for seg:

$$a \\cdot (b + c) = a \\cdot b + a \\cdot c$$

**Eksempel: $7 \\cdot 43$**

Bryt opp $43 = 40 + 3$:
$$7 \\cdot 43 = 7 \\cdot 40 + 7 \\cdot 3 = 280 + 21 = 301$$

**Eksempel: $6 \\cdot 98$**

Her er det lurere å bryte opp $98 = 100 - 2$:
$$6 \\cdot 98 = 6 \\cdot 100 - 6 \\cdot 2 = 600 - 12 = 588$$

Se hva som skjedde: i stedet for å gange med $98$ direkte, ganget vi med $100$ (som er superlettl) og trakk fra et lite produkt. Denne varianten -- der vi runder opp og trekker fra -- er ofte raskere enn å addere.

**Eksempel: $12 \\cdot 15$**

Bryt opp $12 = 10 + 2$:
$$12 \\cdot 15 = 10 \\cdot 15 + 2 \\cdot 15 = 150 + 30 = 180$$

Alternativt: Bryt opp $15 = 10 + 5$:
$$12 \\cdot 15 = 12 \\cdot 10 + 12 \\cdot 5 = 120 + 60 = 180$$

Begge gir riktig svar -- velg den oppdelingen du synes er enklest!`,
    },

    {
      id: '8-6-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-6-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på å bryte opp faktorer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-6-2-n-quiz2-q0',
            task: 'Hva er $8 \\cdot 47$ med distributiv lov?',
            options: [
              { id: 'a', text: '$366$', isCorrect: false },
              { id: 'b', text: '$376$', isCorrect: true },
              { id: 'c', text: '$386$', isCorrect: false },
              { id: 'd', text: '$356$', isCorrect: false },
            ],
            solution: '$8 \\cdot 47 = 8 \\cdot 40 + 8 \\cdot 7 = 320 + 56 = 376$.',
          },
          {
            id: '8-6-2-n-quiz2-q1',
            task: 'Hva er $9 \\cdot 99$ med kompensasjonsmetoden?',
            options: [
              { id: 'a', text: '$891$', isCorrect: true },
              { id: 'b', text: '$881$', isCorrect: false },
              { id: 'c', text: '$901$', isCorrect: false },
              { id: 'd', text: '$899$', isCorrect: false },
            ],
            solution: '$9 \\cdot 99 = 9 \\cdot 100 - 9 \\cdot 1 = 900 - 9 = 891$.',
          },
          {
            id: '8-6-2-n-quiz2-q2',
            task: 'Hvilken oppdeling er smartest for $5 \\cdot 86$?',
            options: [
              { id: 'a', text: '$5 \\cdot 80 + 5 \\cdot 6$', isCorrect: true },
              { id: 'b', text: '$5 \\cdot 8 + 5 \\cdot 6$', isCorrect: false },
              { id: 'c', text: '$5 \\cdot 43 + 5 \\cdot 43$', isCorrect: false },
              { id: 'd', text: '$5 \\cdot 90 - 5 \\cdot 6$', isCorrect: false },
            ],
            solution: '$5 \\cdot 86 = 5 \\cdot 80 + 5 \\cdot 6 = 400 + 30 = 430$. (Alternativ d) fungerer også: $5 \\cdot 90 - 5 \\cdot 4 = 450 - 20 = 430$, men a) er mer direkte.)',
          },
        ],
      },
    },

    {
      id: '8-6-2-n-section3',
      type: 'text',
      content: `## Strategi 3: Faktorisering (del opp i enklere gangestykker)

I stedet for å bryte opp ett tall i en sum, kan du bryte det opp i et **produkt** av enklere faktorer.

**Eksempel: $15 \\cdot 14$**

Skriv $14 = 2 \\cdot 7$:
$$15 \\cdot 14 = 15 \\cdot 2 \\cdot 7 = 30 \\cdot 7 = 210$$

**Eksempel: $36 \\cdot 25$**

Skriv $36 = 4 \\cdot 9$:
$$36 \\cdot 25 = 4 \\cdot 9 \\cdot 25 = 4 \\cdot 25 \\cdot 9 = 100 \\cdot 9 = 900$$

Her brukte vi at multiplikasjon er **kommutativ** (rekkefølgen spiller ingen rolle) -- vi flyttet faktorene for å lage et pent produkt ($4 \\cdot 25 = 100$).

**For divisjon** bruker vi en lignende idé -- del opp divisoren i faktorer og divider steg for steg:

**Eksempel: $720 \\div 18$**

Skriv $18 = 2 \\cdot 9$:
$$720 \\div 18 = 720 \\div 2 \\div 9 = 360 \\div 9 = 40$$

Eller skriv $18 = 3 \\cdot 6$:
$$720 \\div 3 = 240, \\quad 240 \\div 6 = 40$$

Å dele på $2$ og deretter på $9$ er mye enklere enn å dele på $18$ direkte!`,
    },

    {
      id: '8-6-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-6-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på faktorisering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-6-2-n-quiz3-q0',
            task: 'Hva er $25 \\cdot 28$ ved å faktorisere $28 = 4 \\cdot 7$?',
            options: [
              { id: 'a', text: '$600$', isCorrect: false },
              { id: 'b', text: '$700$', isCorrect: true },
              { id: 'c', text: '$750$', isCorrect: false },
              { id: 'd', text: '$650$', isCorrect: false },
            ],
            solution: '$25 \\cdot 28 = 25 \\cdot 4 \\cdot 7 = 100 \\cdot 7 = 700$.',
          },
          {
            id: '8-6-2-n-quiz3-q1',
            task: 'Hva er $480 \\div 12$ ved å dele på $4$ først, deretter på $3$?',
            options: [
              { id: 'a', text: '$40$', isCorrect: true },
              { id: 'b', text: '$48$', isCorrect: false },
              { id: 'c', text: '$36$', isCorrect: false },
              { id: 'd', text: '$30$', isCorrect: false },
            ],
            solution: '$12 = 4 \\cdot 3$. $480 \\div 4 = 120$, $120 \\div 3 = 40$.',
          },
          {
            id: '8-6-2-n-quiz3-q2',
            task: 'Regn $50 \\cdot 16$ i hodet. Hva er svaret?',
            options: [
              { id: 'a', text: '$750$', isCorrect: false },
              { id: 'b', text: '$800$', isCorrect: true },
              { id: 'c', text: '$850$', isCorrect: false },
              { id: 'd', text: '$900$', isCorrect: false },
            ],
            solution: '$50 \\cdot 16 = 50 \\cdot 2 \\cdot 8 = 100 \\cdot 8 = 800$. Eller: $50 \\cdot 16 = 50 \\cdot 10 + 50 \\cdot 6 = 500 + 300 = 800$.',
          },
        ],
      },
    },

    {
      id: '8-6-2-n-section4',
      type: 'text',
      content: `## Spesialtriks for ganging med 5, 9, 11 og 25

Noen tall dukker opp så ofte at det lønner seg å ha egne triks for dem:

**Gange med $5$:** Gang med $10$ og halvér.
$$38 \\cdot 5 = 38 \\cdot 10 \\div 2 = 380 \\div 2 = 190$$

**Gange med $9$:** Gang med $10$ og trekk fra tallet selv.
$$7 \\cdot 9 = 7 \\cdot 10 - 7 = 70 - 7 = 63$$
$$23 \\cdot 9 = 230 - 23 = 207$$

**Gange med $11$:** For tosifrede tall $\\overline{ab}$: sett summen av sifrene mellom dem.
$$34 \\cdot 11: \\quad 3 \\underbrace{(3+4)}_{7} 4 = 374$$
$$62 \\cdot 11: \\quad 6 \\underbrace{(6+2)}_{8} 2 = 682$$

(Hvis summen av sifrene er $10$ eller mer, må du «bære over» til sifferet foran.)

**Gange med $25$:** Gang med $100$ og del på $4$.
$$32 \\cdot 25 = 32 \\cdot 100 \\div 4 = 3200 \\div 4 = 800$$

**Dele på $5$:** Doble og del på $10$.
$$135 \\div 5 = 270 \\div 10 = 27$$`,
    },

    {
      id: '8-6-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Strategier for hoderegning med multiplikasjon og divisjon:

| Strategi | Idé | Eksempel |
|----------|-----|----------|
| **Dobling/halvering** | Doble én faktor, halvér den andre | $35 \\cdot 18 = 70 \\cdot 9 = 630$ |
| **Distributiv lov** | Bryt opp i sum/differanse | $7 \\cdot 43 = 7 \\cdot 40 + 7 \\cdot 3 = 301$ |
| **Faktorisering** | Bryt opp i produkter | $25 \\cdot 28 = 25 \\cdot 4 \\cdot 7 = 700$ |
| **Spesialtriks** | Egne triks for $5, 9, 11, 25$ | $\\cdot 5$: gang med $10$, halvér |

Nøkkelen til alle strategiene er å **gjøre regnestykket om** til noe enklere. Med øvelse vil du automatisk se hvilken strategi som passer best for hvert regnestykke.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.3 NARRATIV: Overslagsregning og avrundingsstrategier
// ============================================================================

export const CHAPTER_8_6_3_NARRATIV: TextbookChapter = {
  id: '8-6-3-narrativ',
  courseId: '8',
  chapterNumber: '6.3',
  title: 'Overslagsregning og avrundingsstrategier',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av overslagsregning -- kunsten å raskt finne et omtrentlig svar som er «godt nok» -- der vi lærer avrundingsregler, fronttalsstrategi og hvordan vi vurderer om et svar er rimelig.',
  estimatedMinutes: 30,
  competenceGoals: [
    'utvikle og bruke metodar for hovudrekning, overslagsrekning og skriftleg rekning',
  ],
  linkedChapterId: '8-6-3',
  content: [
    {
      id: '8-6-3-n-intro',
      type: 'text',
      content: `## Hvorfor trenger vi overslag?

Du planlegger en klassetur og trenger å vite omtrent hvor mye det koster. Billettene er $189$ kr per person, og dere er $28$ elever. Trenger du det eksakte svaret for å vite om budsjettet på $6000$ kr holder? Nei -- et raskt overslag er nok:

$$189 \\approx 200, \\quad 28 \\approx 30$$
$$200 \\cdot 30 = 6000$$

Hmm, overslaget sier nøyaktig $6000$. Men vi rundet begge tallene **oppover**, så det virkelige svaret er lavere. Budsjettet holder!

**Overslagsregning** handler om å finne et svar som er omtrent riktig -- raskt. Det er ikke slurv; det er en egen matematisk ferdighet. Vi bruker overslag til å:
- Sjekke om et svar vi har regnet ut er **rimelig**
- Raskt avgjøre om vi har **nok penger**, **nok tid**, eller **nok materiale**
- Oppdage **tastefeil** på kalkulatoren (skrev du $189 \\cdot 28$ eller $189 \\cdot 280$?)

Overslag handler om å forenkle tallene **før** du regner, i stedet for å finne et eksakt svar.`,
    },

    {
      id: '8-6-3-n-section1',
      type: 'text',
      content: `## Avrundingsregler

Avrunding er grunnsteinen i overslagsregning. Her er reglene:

**Avrunding til nærmeste tier:**
Se på enersifferet:
- Hvis det er $0, 1, 2, 3, 4$ -- rund **ned** (behold tiersifferet)
- Hvis det er $5, 6, 7, 8, 9$ -- rund **opp** (øk tiersifferet med $1$)

| Tall | Avrundet til tier |
|------|-------------------|
| $43$ | $40$ |
| $67$ | $70$ |
| $85$ | $90$ |
| $35$ | $40$ |

**Avrunding til nærmeste hundrer:**
Se på tiersifferet og bruk samme regel.

| Tall | Avrundet til hundrer |
|------|----------------------|
| $432$ | $400$ |
| $678$ | $700$ |
| $850$ | $900$ |
| $349$ | $300$ |

**Hovedregelen:** Se på sifferet **rett til høyre** for den posisjonen du runder til. Er det $5$ eller mer, rund opp. Er det under $5$, rund ned.

**Hva med sifferet $5$?** I norsk skole runder vi $5$ opp. Altså $45 \\approx 50$, $350 \\approx 400$. Dette er den vanligste konvensjonen.`,
    },

    {
      id: '8-6-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-6-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på avrunding:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-6-3-n-quiz1-q0',
            task: 'Hva er $746$ avrundet til nærmeste hundrer?',
            options: [
              { id: 'a', text: '$700$', isCorrect: true },
              { id: 'b', text: '$750$', isCorrect: false },
              { id: 'c', text: '$800$', isCorrect: false },
              { id: 'd', text: '$740$', isCorrect: false },
            ],
            solution: 'Tiersifferet er $4$ (under $5$), så vi runder ned: $746 \\approx 700$.',
          },
          {
            id: '8-6-3-n-quiz1-q1',
            task: 'Hva er $3\\,850$ avrundet til nærmeste tusen?',
            options: [
              { id: 'a', text: '$3\\,000$', isCorrect: false },
              { id: 'b', text: '$4\\,000$', isCorrect: true },
              { id: 'c', text: '$3\\,900$', isCorrect: false },
              { id: 'd', text: '$3\\,800$', isCorrect: false },
            ],
            solution: 'Hundresifferet er $8$ (over $5$), så vi runder opp: $3\\,850 \\approx 4\\,000$.',
          },
          {
            id: '8-6-3-n-quiz1-q2',
            task: 'Avrund $2\\,549$ til nærmeste hundrer.',
            options: [
              { id: 'a', text: '$2\\,500$', isCorrect: true },
              { id: 'b', text: '$2\\,600$', isCorrect: false },
              { id: 'c', text: '$2\\,550$', isCorrect: false },
              { id: 'd', text: '$3\\,000$', isCorrect: false },
            ],
            solution: 'Tiersifferet er $4$ (under $5$), så vi runder ned: $2\\,549 \\approx 2\\,500$.',
          },
        ],
      },
    },

    {
      id: '8-6-3-n-section2',
      type: 'text',
      content: `## Fronttalstrategi

En vanlig og enkel metode for overslag er å bare bruke det **første sifferet** i hvert tall -- resten erstattes med nuller. Dette kalles **fronttalstrategien** (eller «leading digit»-metoden).

**Eksempel: $437 + 682$**

Fronttall: $400 + 700 = 1100$

Eksakt svar: $437 + 682 = 1119$. Overslaget $1100$ er nær!

**Eksempel: $38 \\cdot 72$**

Fronttall: $30 \\cdot 70 = 2100$

Eksakt svar: $38 \\cdot 72 = 2736$. Her er overslaget litt lavt, fordi vi rundet begge tallene ned.

**Viktig innsikt:** Fronttalstrategien runder som regel **ned**, fordi vi kutter alle sifrene bak det første. For å få et bedre overslag kan du justere:

- Bruk to fronttall i stedet for ett: $437 \\approx 440$ i stedet for $400$
- Rund til nærmeste tier/hundrer i stedet for å bare kutte: $437 \\approx 440$, $682 \\approx 680$

$$440 + 680 = 1120$$

Det er enda nærmere det eksakte svaret $1119$!`,
    },

    {
      id: '8-6-3-n-section3',
      type: 'text',
      content: `## Overslag med «kompenserende avrunding»

Et smart triks er å balansere avrundingen: rund det ene tallet **opp** og det andre **ned**. Da kompenserer feilene for hverandre, og overslaget blir mer nøyaktig.

**Eksempel: $48 \\cdot 53$**

Vanlig avrunding: $50 \\cdot 50 = 2500$

Her rundet vi $48$ opp med $2$ og $53$ ned med $3$. Eksakt svar: $2544$. Overslaget $2500$ er ganske nær!

**Eksempel: $287 + 713$**

Hmm, her er det lurere å se at $287 + 713 = 1000$ eksakt. Noen ganger ser du at tallene «passer sammen» -- da trenger du ikke runde i det hele tatt.

**Eksempel: $3\\,870 + 4\\,230 + 2\\,940$**

Avrunding til nærmeste tusen: $4000 + 4000 + 3000 = 11\\,000$

Men merk: det første tallet ble rundet opp med $130$, det andre ned med $230$, og det tredje opp med $60$. Netto avrunding: $130 - 230 + 60 = -40$, altså overslaget er ca. $40$ for lavt. Ganske godt likevel!

**Tommelfingerregel:** Når du legger sammen mange tall, jevner avrundingsfeilene seg ofte ut. Noen tall rundes opp, andre ned, og overslaget blir naturlig ganske nøyaktig.`,
    },

    {
      id: '8-6-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-6-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på overslag:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-6-3-n-quiz2-q0',
            task: 'Du bruker fronttalstrategien på $589 \\cdot 41$. Hva blir overslaget?',
            options: [
              { id: 'a', text: '$500 \\cdot 40 = 20\\,000$', isCorrect: true },
              { id: 'b', text: '$600 \\cdot 40 = 24\\,000$', isCorrect: false },
              { id: 'c', text: '$590 \\cdot 40 = 23\\,600$', isCorrect: false },
              { id: 'd', text: '$500 \\cdot 41 = 20\\,500$', isCorrect: false },
            ],
            solution: 'Fronttalstrategien bruker bare første siffer: $500 \\cdot 40 = 20\\,000$. (Eksakt svar: $24\\,149$.)',
          },
          {
            id: '8-6-3-n-quiz2-q1',
            task: 'Du runder $47 \\cdot 52$ til $50 \\cdot 50 = 2500$. Er dette overslaget sannsynligvis for høyt, for lavt, eller omtrent riktig?',
            options: [
              { id: 'a', text: 'For høyt', isCorrect: false },
              { id: 'b', text: 'For lavt', isCorrect: false },
              { id: 'c', text: 'Omtrent riktig, fordi feilene kompenserer', isCorrect: true },
              { id: 'd', text: 'Umulig å si uten kalkulator', isCorrect: false },
            ],
            solution: 'Vi rundet $47$ opp med $3$ og $52$ ned med $2$. Feilene kompenserer delvis. Eksakt: $47 \\cdot 52 = 2444$. Overslaget $2500$ er nær.',
          },
          {
            id: '8-6-3-n-quiz2-q2',
            task: 'En elev regner $312 \\cdot 48$ på kalkulator og får $14\\,976$. Er dette et rimelig svar?',
            options: [
              { id: 'a', text: 'Ja, fordi $300 \\cdot 50 = 15\\,000$ som er nær', isCorrect: true },
              { id: 'b', text: 'Nei, svaret burde være rundt $1500$', isCorrect: false },
              { id: 'c', text: 'Nei, svaret burde være rundt $150\\,000$', isCorrect: false },
              { id: 'd', text: 'Umulig å vurdere uten nøyaktig utregning', isCorrect: false },
            ],
            solution: 'Overslag: $300 \\cdot 50 = 15\\,000$. Kalkulatorsvaret $14\\,976$ er svært nær, så det er rimelig.',
          },
        ],
      },
    },

    {
      id: '8-6-3-n-section4',
      type: 'text',
      content: `## Rimelighetsvurdering -- er svaret fornuftig?

En av de viktigste bruksområdene for overslag er å **sjekke om et svar er rimelig**. Mange feil -- både ved hoderegning, skriftlig regning og kalkulatorbruk -- gir svar som er åpenbart feil hvis du gjør et raskt overslag.

**Eksempel: «Tastefeil»**
En elev regner $24 \\cdot 36$ og får $8\\,640$. Overslag: $20 \\cdot 40 = 800$. Svaret $8\\,640$ er over 10 ganger for stort! Trolig tastet eleven $240 \\cdot 36$ i stedet. (Riktig svar: $864$.)

**Eksempel: Galt fortegn**
En elev regner $500 - 347$ og får $847$. Overslag: $500 - 350 = 150$. Svaret $847$ er større enn $500$ -- det kan umulig stemme for en subtraksjon der vi trekker fra et positivt tall. (Eleven la sannsynligvis sammen i stedet for å trekke fra.)

**Sjekkliste for rimelighetsvurdering:**
1. **Størrelsesorden:** Er svaret i riktig «liga»? (Hundrevis, tusenvis, millioner?)
2. **Fortegn:** Er svaret positivt/negativt som forventet?
3. **Overslag:** Stemmer svaret omtrent med et raskt overslag?
4. **Sunn fornuft:** Gir svaret mening i sammenhengen? (Kan en bil koste 350 kr?)

Overslag er din innebygde «feilsjekkerlarm» -- bruk den alltid!`,
    },

    {
      id: '8-6-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-6-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på rimelighetsvurdering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-6-3-n-quiz3-q0',
            task: 'En elev regner $68 \\cdot 42$ og får $286$. Er dette rimelig?',
            options: [
              { id: 'a', text: 'Ja, det virker riktig', isCorrect: false },
              { id: 'b', text: 'Nei, overslaget $70 \\cdot 40 = 2800$ viser at svaret bør være rundt $2800$', isCorrect: true },
              { id: 'c', text: 'Nei, svaret bør være rundt $28\\,000$', isCorrect: false },
              { id: 'd', text: 'Ja, fordi $68 + 42 = 110$ og $110 \\cdot 2 = 220$', isCorrect: false },
            ],
            solution: 'Overslag: $70 \\cdot 40 = 2800$. Svaret $286$ er ca. 10 ganger for lite -- eleven mangler trolig et siffer. (Eksakt: $2856$.)',
          },
          {
            id: '8-6-3-n-quiz3-q1',
            task: 'En pizza koster $159$ kr. Du bestiller $4$ pizzaer. Omtrent hva koster det?',
            options: [
              { id: 'a', text: 'Omtrent $500$ kr', isCorrect: false },
              { id: 'b', text: 'Omtrent $640$ kr', isCorrect: true },
              { id: 'c', text: 'Omtrent $800$ kr', isCorrect: false },
              { id: 'd', text: 'Omtrent $450$ kr', isCorrect: false },
            ],
            solution: '$159 \\approx 160$. $160 \\cdot 4 = 640$ kr. (Eksakt: $636$ kr.)',
          },
          {
            id: '8-6-3-n-quiz3-q2',
            task: 'En klasse samler inn penger. Etter tre uker har de $1\\,247$ kr, $983$ kr og $1\\,520$ kr. Omtrent hvor mye har de til sammen?',
            options: [
              { id: 'a', text: 'Omtrent $2\\,500$ kr', isCorrect: false },
              { id: 'b', text: 'Omtrent $3\\,000$ kr', isCorrect: false },
              { id: 'c', text: 'Omtrent $3\\,750$ kr', isCorrect: true },
              { id: 'd', text: 'Omtrent $4\\,500$ kr', isCorrect: false },
            ],
            solution: '$1\\,247 \\approx 1\\,200$, $983 \\approx 1\\,000$, $1\\,520 \\approx 1\\,500$. Sum: $1\\,200 + 1\\,000 + 1\\,500 = 3\\,700$. Nærmest $3\\,750$. (Eksakt: $3\\,750$.)',
          },
        ],
      },
    },

    {
      id: '8-6-3-n-summary',
      type: 'text',
      content: `## Oppsummering

**Avrunding:**
- Se på sifferet til høyre for posisjonen du runder til
- $5$ eller mer: rund opp. Under $5$: rund ned

**Overslagsstrategier:**

| Strategi | Beskrivelse |
|----------|-------------|
| **Fronttalstrategi** | Bruk bare første siffer, erstatt resten med $0$ |
| **Avrunding** | Rund tallene til nærmeste tier, hundrer eller tusen |
| **Kompenserende avrunding** | Rund én faktor opp og den andre ned |

**Rimelighetsvurdering -- sjekkliste:**
1. Er svaret i riktig størrelsesorden?
2. Er fortegnet riktig?
3. Stemmer det med et raskt overslag?
4. Gir det mening i konteksten?

Overslag er ikke det samme som slurv -- det er en bevisst forenkling som gir deg et raskt og nyttig svar. Bruk det som en «feilsjekker» hver gang du regner.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const MATEMATIKK_8_NARRATIV_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_8_6_1_NARRATIV,
  CHAPTER_8_6_2_NARRATIV,
  CHAPTER_8_6_3_NARRATIV,
];
