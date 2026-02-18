/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 2P – Seksjon 4: Sannsynlighet – NARRATIV VERSJON
 * Kapittel 4.1–4.3
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * å lese og lytte til, med quiz-spørsmål for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 4.1 NARRATIV: Sannsynlighetsregning
// ============================================================================

export const CHAPTER_2P_4_1_NARRATIV: TextbookChapter = {
  id: '2p-4-1-narrativ',
  courseId: '2p',
  chapterNumber: '4.1',
  title: 'Sannsynlighetsregning',
  subtitle: 'Narrativ versjon',
  description:
    'Bli med inn i sannsynlighetens verden -- fra terningkast og kortstokker til valgtrær og systematisk opptelling. En fortelling om hvordan vi kan sette tall på tilfeldigheter.',
  estimatedMinutes: 35,
  competenceGoals: [
    'forklare og bruke prosent, prosentpoeng og vekstfaktor til modellering av praktiske situasjoner med digitale verktøy',
  ],
  linkedChapterId: '2p-4-1',
  content: [
    {
      id: '2p-4-1-n-intro',
      type: 'text',
      content: `## Kan vi sette tall på tilfeldigheter?

Tenk deg at du står i en kiosk og vurderer å kjøpe en lodd i et lotteri. Du lurer på: *Hvor sannsynlig er det egentlig at jeg vinner?* Eller kanskje du sjekker værmeldingen og leser at det er 70 prosent sjanse for regn. Hva betyr egentlig det? Og når vennen din hevder at han "alltid" slår sekser på terningen -- stemmer det, eller er han bare heldig?

Sannsynlighet handler om å sette tall på tilfeldigheter. Det er et matematisk verktøy som lar oss si noe fornuftig om ting vi ikke kan forutsi med sikkerhet. Vi kan ikke vite *nøyaktig* hva som skjer neste gang vi kaster en terning, men vi kan si noe presist om hva som er *sannsynlig*. Og det viser seg at disse beregningene har enorm praktisk verdi -- fra forsikringsmatematikk og medisinsk forskning til poker og Lotto.

I dette kapittelet skal vi starte helt fra begynnelsen: Hva er egentlig et utfallsrom? Hva mener vi med en hendelse? Og hvordan regner vi ut sannsynligheten for at noe bestemt skjer? Vi skal også lære noen kraftige verktøy: komplementsetningen, addisjonssetningen og valgtrær.`,
    },
    {
      id: '2p-4-1-n-section1',
      type: 'text',
      content: `## Utfallsrom, hendelser og den grunnleggende formelen

La oss starte med det aller mest grunnleggende. Når vi gjør et forsøk der utfallet er tilfeldig -- for eksempel kaster en terning -- kaller vi mengden av *alle* mulige utfall for **utfallsrommet**. Vi bruker symbolet $\\Omega$ (den greske bokstaven omega) for dette. Kaster du en vanlig terning, er utfallsrommet $\\Omega = \\{1, 2, 3, 4, 5, 6\\}$. Seks mulige utfall, ikke noe mer, ikke noe mindre.

En **hendelse** er det vi er interessert i å finne sannsynligheten for. Det kan være ett enkelt utfall, som "å få 4", eller en samling av utfall, som "å få et partall". Matematisk sier vi at en hendelse $A$ er en *delmengde* av utfallsrommet. Hendelsen "partall" inneholder utfallene $\\{2, 4, 6\\}$ -- tre av de seks mulige.

Og nå kommer selve nøkkelen: Sannsynligheten for en hendelse $A$ er gitt ved formelen $P(A) = \\frac{\\text{antall gunstige utfall}}{\\text{antall mulige utfall}}$. Denne formelen forutsetter at alle utfall er like sannsynlige -- noe som gjelder for en rettferdig terning, en godt blandet kortstokk og mange andre situasjoner. Sannsynligheten er alltid et tall mellom 0 og 1, der $P(A) = 0$ betyr at hendelsen er umulig, og $P(A) = 1$ betyr at den er sikker.

La oss teste formelen med terningen. Sannsynligheten for å få nøyaktig 4 er $P(\\text{fire}) = \\frac{1}{6}$, fordi det er 1 gunstig utfall av 6 mulige. Sannsynligheten for et partall er $P(\\text{partall}) = \\frac{3}{6} = \\frac{1}{2}$, fordi det er 3 partall blant de 6 mulige. Og sannsynligheten for et tall større enn 4 er $P(\\text{tall} > 4) = \\frac{2}{6} = \\frac{1}{3}$, fordi bare 5 og 6 oppfyller kravet.

Hva med en kortstokk? En standard kortstokk har 52 kort, og det finnes 4 ess. Sannsynligheten for å trekke et ess tilfeldig er altså $P(\\text{ess}) = \\frac{4}{52} = \\frac{1}{13}$.`,
    },
    {
      id: '2p-4-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '2p-4-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på grunnleggende sannsynlighet:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-4-1-n-quiz1-q0',
            task: 'I en pose ligger 5 røde, 3 blå og 2 grønne kuler. Du trekker én kule tilfeldig. Hva er sannsynligheten for å trekke en rød kule?',
            options: [
              { id: 'a', text: '$\\frac{1}{5}$', isCorrect: false },
              { id: 'b', text: '$\\frac{1}{2}$', isCorrect: true },
              { id: 'c', text: '$\\frac{5}{8}$', isCorrect: false },
              { id: 'd', text: '$\\frac{1}{3}$', isCorrect: false },
            ],
            solution: 'Totalt er det $5 + 3 + 2 = 10$ kuler. Av disse er 5 røde. $P(\\text{rød}) = \\frac{5}{10} = \\frac{1}{2}$.',
          },
          {
            id: '2p-4-1-n-quiz1-q1',
            task: 'Du kaster en vanlig terning. Hva er sannsynligheten for å få et tall større enn 4?',
            options: [
              { id: 'a', text: '$\\frac{4}{6}$', isCorrect: false },
              { id: 'b', text: '$\\frac{1}{6}$', isCorrect: false },
              { id: 'c', text: '$\\frac{2}{6} = \\frac{1}{3}$', isCorrect: true },
              { id: 'd', text: '$\\frac{3}{6} = \\frac{1}{2}$', isCorrect: false },
            ],
            solution: 'Tallene større enn 4 er 5 og 6 -- altså 2 gunstige av 6 mulige utfall. $P(\\text{tall} > 4) = \\frac{2}{6} = \\frac{1}{3}$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-4-1-n-section2',
      type: 'text',
      content: `## Komplementsetningen -- å tenke baklengs

Noen ganger er det lettere å beregne sannsynligheten for at noe *ikke* skjer, enn for at det skjer. Og det er her **komplementsetningen** kommer inn som et elegant triks.

Komplementhendelsen til $A$, skrevet $A'$, er rett og slett hendelsen "A skjer ikke". Og fordi noe enten skjer eller ikke skjer, vet vi at $P(A) + P(A') = 1$. Snur vi om på dette, får vi komplementsetningen: $P(A') = 1 - P(A)$.

La oss ta et hverdagslig eksempel. Værmeldingen sier at det er 35 prosent sjanse for regn i morgen. Hva er sjansen for at det *ikke* regner? Vi setter opp: $P(\\text{ikke regn}) = 1 - P(\\text{regn}) = 1 - 0{,}35 = 0{,}65$. Altså 65 prosent sjanse for tørt vær. Enkelt og greit.

Men komplementsetningen er mer enn bare en snarvei for enkle problemer. Den er spesielt nyttig i situasjoner der det er vanskelig å telle de gunstige utfallene direkte, men lett å telle de *ugunstige*. Tenk for eksempel på spørsmålet: "Hva er sannsynligheten for å få *minst én* sekser på tre terningkast?" Å telle alle måter du kan få minst én sekser på er litt rotete -- det kan være én, to eller tre seksere. Men å beregne sannsynligheten for *ingen* seksere er enkelt: $P(\\text{ingen sekser}) = \\frac{5}{6} \\cdot \\frac{5}{6} \\cdot \\frac{5}{6} = \\frac{125}{216}$. Dermed er $P(\\text{minst én sekser}) = 1 - \\frac{125}{216} = \\frac{91}{216} \\approx 0{,}42$.

Her er et annet eksempel å tenke på: Sannsynligheten for at en tilfeldig valgt elev har bursdag i januar er $\\frac{31}{365}$ (31 dager i januar av 365 dager totalt). Da er sannsynligheten for at eleven *ikke* har bursdag i januar $1 - \\frac{31}{365} = \\frac{334}{365}$.`,
    },
    {
      id: '2p-4-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '2p-4-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på komplementsetningen:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-4-1-n-quiz2-q0',
            task: 'Sannsynligheten for å bestå en eksamen er $0{,}78$. Hva er sannsynligheten for å ikke bestå?',
            options: [
              { id: 'a', text: '$0{,}78$', isCorrect: false },
              { id: 'b', text: '$0{,}12$', isCorrect: false },
              { id: 'c', text: '$0{,}22$', isCorrect: true },
              { id: 'd', text: '$1{,}78$', isCorrect: false },
            ],
            solution: '$P(\\text{ikke bestå}) = 1 - P(\\text{bestå}) = 1 - 0{,}78 = 0{,}22$.',
          },
          {
            id: '2p-4-1-n-quiz2-q1',
            task: 'Hva er sannsynligheten for å få *minst én* sekser på tre terningkast?',
            options: [
              { id: 'a', text: '$\\frac{3}{6} = \\frac{1}{2}$', isCorrect: false },
              { id: 'b', text: '$1 - \\left(\\frac{5}{6}\\right)^3 = 1 - \\frac{125}{216} \\approx 0{,}42$', isCorrect: true },
              { id: 'c', text: '$\\left(\\frac{1}{6}\\right)^3 \\approx 0{,}005$', isCorrect: false },
              { id: 'd', text: '$3 \\cdot \\frac{1}{6} = 0{,}5$', isCorrect: false },
            ],
            solution: 'Vi bruker komplementet: $P(\\text{minst én}) = 1 - P(\\text{ingen})$. $P(\\text{ingen sekser}) = (\\frac{5}{6})^3 = \\frac{125}{216}$. Altså $P(\\text{minst én}) = 1 - \\frac{125}{216} = \\frac{91}{216} \\approx 0{,}42$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-4-1-n-section3',
      type: 'text',
      content: `## Addisjonssetningen -- når vi spør "det ene eller det andre"

Hva om du trekker et kort fra en kortstokk og lurer på: "Hva er sjansen for å trekke et ess *eller* et hjertekort?" Her er det fristende å bare legge sammen sannsynlighetene, men da må vi passe på litt. Noen hendelser kan nemlig skje *samtidig*, og da teller vi noe dobbelt hvis vi bare adderer.

Vi skiller mellom to typer hendelser. **Uforenlige hendelser** er hendelser som *ikke* kan skje samtidig. Kaster du en terning, kan du ikke få både 3 og 5 i samme kast. For uforenlige hendelser $A$ og $B$ er regelen enkel: $P(A \\cup B) = P(A) + P(B)$. Unionen $A \\cup B$ betyr "A eller B (eller begge)".

Men mange hendelser er **forenlige** -- de *kan* skje samtidig. Å trekke et ess og å trekke et hjertekort er forenlige hendelser, fordi hjerter-ess er begge deler. Hvis vi bare legger sammen $P(\\text{ess}) + P(\\text{hjerter})$, teller vi hjerter-ess dobbelt. Derfor trenger vi den generelle addisjonssetningen: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$, der $P(A \\cap B)$ er sannsynligheten for at *begge* skjer.

La oss regne ut kortstokk-eksempelet. Det er 4 ess i kortstokken, så $P(\\text{ess}) = \\frac{4}{52}$. Det er 13 hjerterkort, så $P(\\text{hjerter}) = \\frac{13}{52}$. Og det er 1 hjerter-ess, så $P(\\text{ess} \\cap \\text{hjerter}) = \\frac{1}{52}$. Dermed: $P(\\text{ess} \\cup \\text{hjerter}) = \\frac{4}{52} + \\frac{13}{52} - \\frac{1}{52} = \\frac{16}{52} = \\frac{4}{13} \\approx 0{,}31$.

Her er et eksempel med en skoleklasse. I en klasse med 30 elever spiller 18 fotball, 12 håndball, og 5 spiller begge deler. Hendelsene "spiller fotball" og "spiller håndball" er forenlige fordi 5 elever gjør begge deler. Sannsynligheten for at en tilfeldig elev spiller fotball eller håndball er $P(F \\cup H) = \\frac{18}{30} + \\frac{12}{30} - \\frac{5}{30} = \\frac{25}{30} = \\frac{5}{6}$.`,
    },
    {
      id: '2p-4-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '2p-4-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på addisjonssetningen:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-4-1-n-quiz3-q0',
            task: 'I en klasse med 40 elever leser 20 krim, 15 leser fantasy, og 8 leser begge sjangre. Hva er sannsynligheten for at en tilfeldig valgt elev leser krim eller fantasy?',
            options: [
              { id: 'a', text: '$\\frac{35}{40} = \\frac{7}{8}$', isCorrect: false },
              { id: 'b', text: '$\\frac{27}{40}$', isCorrect: true },
              { id: 'c', text: '$\\frac{43}{40}$', isCorrect: false },
              { id: 'd', text: '$\\frac{8}{40} = \\frac{1}{5}$', isCorrect: false },
            ],
            solution: 'Hendelsene er forenlige (8 leser begge). $P(K \\cup F) = \\frac{20}{40} + \\frac{15}{40} - \\frac{8}{40} = \\frac{27}{40}$. Vi trekker fra de 8 som telles dobbelt.',
          },
          {
            id: '2p-4-1-n-quiz3-q1',
            task: 'Du kaster en terning. Hva er sannsynligheten for å få 3 eller 5?',
            options: [
              { id: 'a', text: '$\\frac{1}{6}$', isCorrect: false },
              { id: 'b', text: '$\\frac{2}{6} = \\frac{1}{3}$', isCorrect: true },
              { id: 'c', text: '$\\frac{1}{36}$', isCorrect: false },
              { id: 'd', text: '$\\frac{3}{6} = \\frac{1}{2}$', isCorrect: false },
            ],
            solution: 'Hendelsene «3» og «5» er uforenlige (du kan ikke få begge i samme kast). Da er $P(3 \\cup 5) = P(3) + P(5) = \\frac{1}{6} + \\frac{1}{6} = \\frac{2}{6} = \\frac{1}{3}$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-4-1-n-section4',
      type: 'text',
      content: `## Valgtrær -- å se alle mulighetene

Når et forsøk har flere trinn -- for eksempel to myntkast etter hverandre -- kan det bli uoversiktlig å holde styr på alle mulige utfall. Da er et **valgtre** (også kalt treediagram) et fantastisk verktøy. Det lar deg *se* alle stiene gjennom forsøket, og det gjør det enkelt å beregne sannsynligheter.

Slik fungerer det: Hvert forgreningspunkt i treet representerer ett trinn i forsøket, og grenene viser de mulige utfallene. Langs hver gren skriver vi sannsynligheten for det utfallet. For å finne sannsynligheten for en bestemt *sti* gjennom treet -- altså en bestemt kombinasjon av utfall -- multipliserer vi sannsynlighetene langs stien. Dette er **multiplikasjonsregelen**. Og for å finne sannsynligheten for en *hendelse* som kan skje på flere måter, legger vi sammen sannsynlighetene for alle stier som gir hendelsen. Det er **addisjonsregelen**.

La oss se på et konkret eksempel. Du kaster en mynt to ganger. Valgtreet har fire stier: Krone-Krone (KK), Krone-Mynt (KM), Mynt-Krone (MK) og Mynt-Mynt (MM). Hver sti har sannsynlighet $\\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$. Hva er sannsynligheten for minst én krone? Det er stiene KK, KM og MK, altså $P = \\frac{1}{4} + \\frac{1}{4} + \\frac{1}{4} = \\frac{3}{4}$.

Valgtrær er spesielt nyttige når sannsynlighetene *endrer seg* mellom trinnene. Tenk deg en pose med 3 røde og 2 blå kuler. Du trekker to kuler *uten tilbakelegging*. Sannsynligheten for rød på første trekk er $\\frac{3}{5}$. Men hvis den første var rød, er det nå bare 2 røde og 2 blå igjen -- 4 kuler totalt. Så sannsynligheten for rød på andre trekk *gitt* at den første var rød, er $\\frac{2}{4} = \\frac{1}{2}$. Sannsynligheten for to røde kuler er $\\frac{3}{5} \\cdot \\frac{1}{2} = \\frac{3}{10}$.

En viktig kontroll: Summen av sannsynlighetene i alle endepunkter i et valgtre skal alltid bli 1. Hvis den ikke gjør det, har du gjort en feil underveis.`,
    },
    {
      id: '2p-4-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '2p-4-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på valgtrær:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-4-1-n-quiz4-q0',
            task: 'Du kaster en mynt tre ganger. Hvor mange mulige utfall (stier) finnes i valgtreet?',
            options: [
              { id: 'a', text: '3', isCorrect: false },
              { id: 'b', text: '6', isCorrect: false },
              { id: 'c', text: '9', isCorrect: false },
              { id: 'd', text: '8', isCorrect: true },
            ],
            solution: 'Hvert kast har 2 mulige utfall. Med multiplikasjonsprinsippet: $2 \\cdot 2 \\cdot 2 = 8$ mulige stier (KKK, KKM, KMK, KMM, MKK, MKM, MMK, MMM).',
          },
          {
            id: '2p-4-1-n-quiz4-q1',
            task: 'I en pose er 3 røde og 2 blå kuler. Du trekker to kuler uten tilbakelegging. Hva er sannsynligheten for to røde?',
            options: [
              { id: 'a', text: '$\\frac{3}{5} \\cdot \\frac{3}{5} = \\frac{9}{25}$', isCorrect: false },
              { id: 'b', text: '$\\frac{3}{5} \\cdot \\frac{2}{4} = \\frac{6}{20} = \\frac{3}{10}$', isCorrect: true },
              { id: 'c', text: '$\\frac{3}{5} + \\frac{2}{4} = \\frac{11}{10}$', isCorrect: false },
              { id: 'd', text: '$\\frac{2}{5} \\cdot \\frac{1}{4} = \\frac{2}{20}$', isCorrect: false },
            ],
            solution: 'Uten tilbakelegging endres sannsynlighetene. Første trekk: $\\frac{3}{5}$ (3 røde av 5). Andre trekk: $\\frac{2}{4}$ (2 røde igjen av 4 totalt). Multipliserer langs stien: $\\frac{3}{5} \\cdot \\frac{2}{4} = \\frac{3}{10}$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-4-1-n-section5',
      type: 'text',
      content: `## Systematisk opptelling og multiplikasjonsprinsippet

Noen ganger trenger vi ikke å tegne hele valgtreet -- vi trenger bare å vite *hvor mange* mulige utfall det finnes. Og da har vi et kraftig prinsipp: **multiplikasjonsprinsippet**. Det sier at hvis valg 1 kan gjøres på $m$ måter og valg 2 kan gjøres på $n$ måter, så kan begge valgene gjøres på $m \\cdot n$ måter.

Tenk på en pizzarestaurant med 3 typer bunn og 5 typer fylling. Hvor mange ulike pizzakombinasjoner kan du lage? Med multiplikasjonsprinsippet: $3 \\cdot 5 = 15$ kombinasjoner. Du trenger ikke å liste opp alle femten -- prinsippet gir deg svaret direkte.

Prinsippet utvides naturlig til flere valg. En PIN-kode består av 4 siffer, og hvert siffer kan være 0 til 9 -- altså 10 muligheter. Antall mulige PIN-koder er $10 \\cdot 10 \\cdot 10 \\cdot 10 = 10^4 = 10\\,000$. Sannsynligheten for å gjette riktig PIN på første forsøk er dermed $P = \\frac{1}{10\\,000} = 0{,}0001 = 0{,}01\\%$. Ikke akkurat oppmuntrende for en tyv.

Hva med et passord som består av 2 bokstaver (A--Z, 26 muligheter per posisjon) etterfulgt av 3 siffer (0--9)? Da er antall mulige passord $26 \\cdot 26 \\cdot 10 \\cdot 10 \\cdot 10 = 676\\,000$. Legg merke til at vi multipliserer antall muligheter for *hver posisjon* -- vi adderer dem ikke. Dette er en vanlig feil: å skrive $26 + 26 + 10 + 10 + 10 = 82$ i stedet for å multiplisere. Addering gir antall valg per posisjon summert, men multiplikasjon gir antall *kombinasjoner*.

Systematisk opptelling med multiplikasjonsprinsippet er grunnlaget for mye av sannsynlighetsregningen. Når du har funnet antall mulige utfall, kan du sette det rett inn i formelen $P(A) = \\frac{\\text{gunstige}}{\\text{mulige}}$ og finne sannsynligheten.`,
    },
    {
      id: '2p-4-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '2p-4-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på multiplikasjonsprinsippet:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-4-1-n-quiz5-q0',
            task: 'En iskrembar tilbyr 4 smaker og 3 typer topping. Hvor mange ulike kombinasjoner av smak og topping kan du velge?',
            options: [
              { id: 'a', text: '7', isCorrect: false },
              { id: 'b', text: '12', isCorrect: true },
              { id: 'c', text: '24', isCorrect: false },
              { id: 'd', text: '43', isCorrect: false },
            ],
            solution: 'Multiplikasjonsprinsippet: $4 \\cdot 3 = 12$ kombinasjoner. Vi multipliserer fordi hvert smaksvalg kan kombineres med hver topping.',
          },
          {
            id: '2p-4-1-n-quiz5-q1',
            task: 'En PIN-kode har 4 siffer (0–9). Hvor mange mulige PIN-koder finnes?',
            options: [
              { id: 'a', text: '$40$', isCorrect: false },
              { id: 'b', text: '$10\\,000$', isCorrect: true },
              { id: 'c', text: '$1\\,000$', isCorrect: false },
              { id: 'd', text: '$10\\,024$', isCorrect: false },
            ],
            solution: '$10 \\cdot 10 \\cdot 10 \\cdot 10 = 10^4 = 10\\,000$. Hvert siffer har 10 muligheter (0–9), og vi multipliserer for hver posisjon.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-4-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Vi har nå vært gjennom de grunnleggende byggeklossene i sannsynlighetsregningen, og du har fått et solid fundament å bygge videre på.

**Nøkkelbegreper du nå kjenner:**
- **Utfallsrommet** $\\Omega$ er mengden av alle mulige utfall i et forsøk
- **En hendelse** $A$ er en delmengde av utfallsrommet -- de utfallene vi er interessert i
- **Sannsynligheten** for en hendelse er $P(A) = \\frac{\\text{gunstige utfall}}{\\text{mulige utfall}}$, alltid mellom 0 og 1
- **Komplementsetningen**: $P(A') = 1 - P(A)$ -- sannsynligheten for at A *ikke* skjer
- **Addisjonssetningen for uforenlige hendelser**: $P(A \\cup B) = P(A) + P(B)$
- **Addisjonssetningen for forenlige hendelser**: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$
- **Valgtre**: Multipliser sannsynligheter langs stier, adder mellom stier
- **Multiplikasjonsprinsippet**: $m \\cdot n$ kombinasjoner for uavhengige valg

**Det viktigste du tar med deg:**
Sannsynlighetsregning handler om å tenke systematisk om tilfeldigheter. Med utfallsrom, hendelser og noen få regneregler kan du beregne sjansen for nesten hva som helst -- fra terningkast til PIN-koder. Og når det blir uoversiktlig, er valgtreet din beste venn.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.2 NARRATIV: Betinget sannsynlighet
// ============================================================================

export const CHAPTER_2P_4_2_NARRATIV: TextbookChapter = {
  id: '2p-4-2-narrativ',
  courseId: '2p',
  chapterNumber: '4.2',
  title: 'Betinget sannsynlighet',
  subtitle: 'Narrativ versjon',
  description:
    'Hva skjer med sannsynligheter når vi allerede vet noe? Fra medisinske tester til kvalitetskontroll -- en fortelling om hvordan informasjon endrer sjansene.',
  estimatedMinutes: 40,
  competenceGoals: [
    'forklare og bruke prosent, prosentpoeng og vekstfaktor til modellering av praktiske situasjoner med digitale verktøy',
  ],
  linkedChapterId: '2p-4-2',
  content: [
    {
      id: '2p-4-2-n-intro',
      type: 'text',
      content: `## Når informasjon endrer sjansene

Tenk deg at du er hos legen og har tatt en blodprøve. Legen forteller at testen var *positiv* for en bestemt sykdom. Hjertet slår litt fortere -- men hvor bekymret bør du egentlig være? Er det sikkert at du er syk? Svaret er overraskende: Nei, langt ifra. Selv en god test kan gi mange falske positive resultater, spesielt hvis sykdommen er sjelden. For å forstå dette trenger vi et konsept som heter **betinget sannsynlighet**.

Betinget sannsynlighet handler om dette: Hvordan endres sannsynligheten for noe når vi allerede vet at noe annet har skjedd? Det er forskjell på å spørre "Hva er sjansen for at det regner?" og "Hva er sjansen for at det regner, *gitt at himmelen er overskyet*?" Den ekstra informasjonen -- at himmelen er overskyet -- endrer svaret vårt.

I dette kapittelet skal vi utforske betinget sannsynlighet, lære multiplikasjonssetningen, forstå forskjellen mellom avhengige og uavhengige hendelser, og se hvordan alt dette kan brukes på virkelige problemer som medisinsk testing og kvalitetskontroll i industrien.`,
    },
    {
      id: '2p-4-2-n-section1',
      type: 'text',
      content: `## Formelen som krymper utfallsrommet

La oss starte med definisjonen. **Betinget sannsynlighet** er sannsynligheten for en hendelse $B$, gitt at hendelse $A$ allerede har inntruffet. Vi skriver dette som $P(B|A)$ og leser det som "sannsynligheten for B gitt A". Formelen er:

$$P(B|A) = \\frac{P(A \\cap B)}{P(A)}$$

Hva betyr dette intuitivt? Jo, når vi vet at $A$ har skjedd, *krymper vi utfallsrommet* til bare de utfallene der $A$ gjelder. Så ser vi på hvor stor andel av disse utfallene som også gir $B$. Vi deler altså sannsynligheten for at *begge* skjer, med sannsynligheten for at $A$ skjer.

La oss gjøre et eksempel. I en klasse med 30 elever spiller 18 fotball og 8 spiller håndball. 4 elever spiller begge deler. Nå velges en tilfeldig elev, og vi får vite at eleven spiller fotball. Hva er sannsynligheten for at eleven *også* spiller håndball?

Vi setter $A$ = "spiller fotball" og $B$ = "spiller håndball". Da er $P(A) = \\frac{18}{30}$ og $P(A \\cap B) = \\frac{4}{30}$ (de som spiller begge). Vi regner: $P(B|A) = \\frac{4/30}{18/30} = \\frac{4}{18} = \\frac{2}{9} \\approx 0{,}22$. Altså: Blant fotballspillerne er det 22 prosent sjanse for at eleven også spiller håndball.

Her er et annet eksempel å tenke over. I en undersøkelse liker 60 prosent av elevene matte, og 20 prosent liker *både* matte og naturfag. Hva er sannsynligheten for at en elev liker naturfag, gitt at eleven liker matte? Svaret er $P(\\text{naturfag}|\\text{matte}) = \\frac{0{,}20}{0{,}60} = \\frac{1}{3}$. En tredjedel av de som liker matte, liker også naturfag.`,
    },
    {
      id: '2p-4-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '2p-4-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på betinget sannsynlighet:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-4-2-n-quiz1-q0',
            task: 'Av 200 elever foretrekker 110 matte og 90 norsk. Blant jentene (110 totalt) foretrekker 60 matte. Hva er $P(\\text{matte}|\\text{jente})$?',
            options: [
              { id: 'a', text: '$\\frac{60}{200} = \\frac{3}{10}$', isCorrect: false },
              { id: 'b', text: '$\\frac{60}{110} = \\frac{6}{11}$', isCorrect: true },
              { id: 'c', text: '$\\frac{110}{200} = \\frac{11}{20}$', isCorrect: false },
              { id: 'd', text: '$\\frac{60}{90} = \\frac{2}{3}$', isCorrect: false },
            ],
            solution: 'Vi krymper utfallsrommet til jentene (110 stk). Av disse foretrekker 60 matte. $P(\\text{matte}|\\text{jente}) = \\frac{60}{110} = \\frac{6}{11} \\approx 0{,}545$.',
          },
          {
            id: '2p-4-2-n-quiz1-q1',
            task: '60 % av elevene liker matte, og 20 % liker *både* matte og naturfag. Hva er $P(\\text{naturfag}|\\text{matte})$?',
            options: [
              { id: 'a', text: '$0{,}20$', isCorrect: false },
              { id: 'b', text: '$0{,}12$', isCorrect: false },
              { id: 'c', text: '$\\frac{1}{3} \\approx 0{,}33$', isCorrect: true },
              { id: 'd', text: '$0{,}80$', isCorrect: false },
            ],
            solution: '$P(\\text{naturfag}|\\text{matte}) = \\frac{P(\\text{matte} \\cap \\text{naturfag})}{P(\\text{matte})} = \\frac{0{,}20}{0{,}60} = \\frac{1}{3}$. En tredjedel av de som liker matte, liker også naturfag.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-4-2-n-section2',
      type: 'text',
      content: `## Multiplikasjonssetningen -- sannsynligheten for "begge deler"

Fra formelen for betinget sannsynlighet kan vi utlede noe veldig nyttig. Hvis vi ganger begge sider av $P(B|A) = \\frac{P(A \\cap B)}{P(A)}$ med $P(A)$, får vi **multiplikasjonssetningen**:

$$P(A \\cap B) = P(A) \\cdot P(B|A)$$

Denne setningen forteller oss sannsynligheten for at *begge* hendelsene skjer: Vi tar sannsynligheten for at den første skjer, og ganger med sannsynligheten for den andre *gitt at den første har skjedd*. For flere hendelser utvides dette naturlig: $P(A \\cap B \\cap C) = P(A) \\cdot P(B|A) \\cdot P(C|A \\cap B)$.

Et typisk eksempel er å trekke kuler uten tilbakelegging. Tenk deg en pose med 6 røde og 4 blå kuler. Du trekker to kuler uten å legge den første tilbake. Hva er sannsynligheten for at begge er røde?

Første trekk: $P(\\text{rød}_1) = \\frac{6}{10} = \\frac{3}{5}$. Nå er det 5 røde og 4 blå igjen -- 9 kuler totalt. Andre trekk, gitt at den første var rød: $P(\\text{rød}_2|\\text{rød}_1) = \\frac{5}{9}$. Med multiplikasjonssetningen: $P(\\text{begge røde}) = \\frac{3}{5} \\cdot \\frac{5}{9} = \\frac{15}{45} = \\frac{1}{3}$.

Her er enda et eksempel. I en skål ligger 8 sjokolader: 5 med nøtter og 3 uten. Du tar to etter hverandre uten tilbakelegging. Sannsynligheten for at begge har nøtter er $P = \\frac{5}{8} \\cdot \\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14} \\approx 0{,}357$. Etter at du tok den første sjokoladen med nøtter, var det bare 4 med nøtter igjen av 7 totalt -- og det er nettopp den betingede sannsynligheten i aksjon.`,
    },
    {
      id: '2p-4-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '2p-4-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på multiplikasjonssetningen:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-4-2-n-quiz2-q0',
            task: 'En pose har 7 epler og 3 pærer. Du trekker to frukter uten tilbakelegging. Hva er sannsynligheten for at begge er epler?',
            options: [
              { id: 'a', text: '$\\frac{49}{100}$', isCorrect: false },
              { id: 'b', text: '$\\frac{7}{10}$', isCorrect: false },
              { id: 'c', text: '$\\frac{7}{15}$', isCorrect: true },
              { id: 'd', text: '$\\frac{21}{50}$', isCorrect: false },
            ],
            solution: '$P(\\text{eple}_1) = \\frac{7}{10}$. Etter første eple: 6 epler og 3 pærer igjen (9 totalt). $P(\\text{eple}_2|\\text{eple}_1) = \\frac{6}{9} = \\frac{2}{3}$. $P(\\text{begge}) = \\frac{7}{10} \\cdot \\frac{2}{3} = \\frac{7}{15}$.',
          },
          {
            id: '2p-4-2-n-quiz2-q1',
            task: 'I en skål er 5 sjokolader med nøtter og 3 uten. Du tar to etter hverandre uten tilbakelegging. Hva er sannsynligheten for at begge har nøtter?',
            options: [
              { id: 'a', text: '$\\frac{25}{64}$', isCorrect: false },
              { id: 'b', text: '$\\frac{5}{14}$', isCorrect: true },
              { id: 'c', text: '$\\frac{5}{8}$', isCorrect: false },
              { id: 'd', text: '$\\frac{10}{56}$', isCorrect: false },
            ],
            solution: '$P = \\frac{5}{8} \\cdot \\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14} \\approx 0{,}357$. Etter at den første med nøtter er tatt, er det 4 med nøtter igjen av 7 totalt.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-4-2-n-section3',
      type: 'text',
      content: `## Uavhengige hendelser -- når informasjon ikke hjelper

Noen ganger gjør det ingen forskjell hva som har skjedd først. Kaster du en terning og deretter en mynt, påvirker terningkastet ikke myntkastet. Disse hendelsene er **uavhengige**. Formelt: To hendelser $A$ og $B$ er uavhengige dersom $P(B|A) = P(B)$ -- altså at informasjonen om $A$ ikke endrer sannsynligheten for $B$.

For uavhengige hendelser forenkles multiplikasjonssetningen til: $P(A \\cap B) = P(A) \\cdot P(B)$. Vi trenger ikke bekymre oss om betingelser -- vi bare ganger.

Typiske eksempler på uavhengige hendelser er to terningkast, myntkast og terningkast i kombinasjon, og trekking *med* tilbakelegging. Typiske eksempler på *avhengige* hendelser er trekking *uten* tilbakelegging og hendelser i samme populasjon som overlapper.

Her er et praktisk eksempel. Sannsynligheten for at en buss er forsinket er $0{,}15$. To busser kjører uavhengig av hverandre. La $p = 0{,}15$ og $q = 1 - 0{,}15 = 0{,}85$. Sannsynligheten for at *begge* er forsinket er $p \\cdot p = 0{,}15^2 = 0{,}0225$. Sannsynligheten for at *ingen* er forsinket er $q \\cdot q = 0{,}85^2 = 0{,}7225$. Og sannsynligheten for at *nøyaktig én* er forsinket? Det kan skje på to måter: den første forsinket og den andre i rute, eller omvendt. Altså $P = p \\cdot q + q \\cdot p = 2 \\cdot 0{,}15 \\cdot 0{,}85 = 0{,}255$. Legg merke til at $0{,}0225 + 0{,}7225 + 0{,}255 = 1{,}00$ -- alle mulighetene summerer til 1, som de skal.

Et annet eksempel: Sannsynligheten for å bestå en eksamen er $0{,}80$. To elever tar eksamen uavhengig av hverandre. Sannsynligheten for at begge består er $0{,}80 \\cdot 0{,}80 = 0{,}64$.`,
    },
    {
      id: '2p-4-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '2p-4-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på uavhengige hendelser:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-4-2-n-quiz3-q0',
            task: 'Ole har 75 % sjanse for å bestå teoriprøven, og Kari har 85 %. De tar prøven uavhengig. Hva er sannsynligheten for at minst én av dem består?',
            options: [
              { id: 'a', text: '$0{,}6375$', isCorrect: false },
              { id: 'b', text: '$1{,}60$', isCorrect: false },
              { id: 'c', text: '$0{,}0375$', isCorrect: false },
              { id: 'd', text: '$0{,}9625$', isCorrect: true },
            ],
            solution: '$P(\\text{minst én}) = 1 - P(\\text{ingen}) = 1 - 0{,}25 \\cdot 0{,}15 = 1 - 0{,}0375 = 0{,}9625$.',
          },
          {
            id: '2p-4-2-n-quiz3-q1',
            task: 'Sannsynligheten for at en buss er forsinket er $0{,}15$. To busser kjører uavhengig. Hva er sannsynligheten for at begge er forsinket?',
            options: [
              { id: 'a', text: '$0{,}30$', isCorrect: false },
              { id: 'b', text: '$0{,}0225$', isCorrect: true },
              { id: 'c', text: '$0{,}85$', isCorrect: false },
              { id: 'd', text: '$0{,}15$', isCorrect: false },
            ],
            solution: 'Uavhengige hendelser: $P(\\text{begge forsinket}) = 0{,}15 \\cdot 0{,}15 = 0{,}0225 = 2{,}25\\%$. Vi multipliserer sannsynlighetene direkte fordi hendelsene er uavhengige.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-4-2-n-section4',
      type: 'text',
      content: `## Treediagram og totalsetningen -- den store sammenhengen

Treediagram er spesielt kraftig for å organisere betingede sannsynligheter. Langs hver gren skriver vi den betingede sannsynligheten for det aktuelle utfallet, og vi kan lese av sannsynlighetene for enhver kombinasjon ved å multiplisere langs stiene.

Men treediagram gir oss også tilgang til **totalsetningen for sannsynlighet**: $P(B) = P(A) \\cdot P(B|A) + P(A') \\cdot P(B|A')$. Denne setningen lar oss beregne den totale sannsynligheten for $B$ ved å summere over alle mulige "veier" til $B$.

La oss se på et eksempel fra industrien. En fabrikk har to maskiner. Maskin A produserer 60 prosent av varene med 2 prosent feilrate. Maskin B produserer 40 prosent med 5 prosent feilrate. Hva er sannsynligheten for at en tilfeldig valgt vare er defekt?

Vi bruker totalsetningen: $P(\\text{defekt}) = P(A) \\cdot P(\\text{defekt}|A) + P(B) \\cdot P(\\text{defekt}|B) = 0{,}60 \\cdot 0{,}02 + 0{,}40 \\cdot 0{,}05 = 0{,}012 + 0{,}020 = 0{,}032$. Den totale feilraten er altså 3,2 prosent. Selv om maskin A produserer flest varer, bidrar maskin B faktisk mer til feilraten fordi den har høyere feilprosent.

Totalsetningen er også nøkkelen til å forstå medisinske tester. Tenk deg en sykdom som rammer 1 prosent av befolkningen. En test oppdager sykdommen hos 95 prosent av de syke (sensitivitet), men gir falskt positivt hos 3 prosent av de friske. Sannsynligheten for positiv test er $P(\\text{pos}) = 0{,}01 \\cdot 0{,}95 + 0{,}99 \\cdot 0{,}03 = 0{,}0095 + 0{,}0297 = 0{,}0392$. Og sannsynligheten for at du faktisk er syk gitt positiv test? $P(\\text{syk}|\\text{pos}) = \\frac{0{,}0095}{0{,}0392} \\approx 0{,}242$. Bare ca. 24 prosent! Dette kalles **den falske positive paradoksen** -- selv med en nøyaktig test er flertallet av de positive resultatene falske når sykdommen er sjelden.`,
    },
    {
      id: '2p-4-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '2p-4-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på totalsetningen:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-4-2-n-quiz4-q0',
            task: 'Et flyselskap har to ruter. Rute A: 70 % av avgangene, 10 % forsinkelse. Rute B: 30 % av avgangene, 20 % forsinkelse. Hva er total forsinkelsesrate?',
            options: [
              { id: 'a', text: '$0{,}30$', isCorrect: false },
              { id: 'b', text: '$0{,}13$', isCorrect: true },
              { id: 'c', text: '$0{,}15$', isCorrect: false },
              { id: 'd', text: '$0{,}07$', isCorrect: false },
            ],
            solution: 'Totalsetningen: $P(\\text{forsinket}) = 0{,}70 \\cdot 0{,}10 + 0{,}30 \\cdot 0{,}20 = 0{,}07 + 0{,}06 = 0{,}13$.',
          },
          {
            id: '2p-4-2-n-quiz4-q1',
            task: 'Maskin A produserer 60 % av varene med 2 % feil, maskin B 40 % med 5 % feil. Hva er den totale feilraten?',
            options: [
              { id: 'a', text: '$3{,}5\\%$', isCorrect: false },
              { id: 'b', text: '$7\\%$', isCorrect: false },
              { id: 'c', text: '$3{,}2\\%$', isCorrect: true },
              { id: 'd', text: '$2{,}5\\%$', isCorrect: false },
            ],
            solution: '$P(\\text{defekt}) = 0{,}60 \\cdot 0{,}02 + 0{,}40 \\cdot 0{,}05 = 0{,}012 + 0{,}020 = 0{,}032 = 3{,}2\\%$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-4-2-n-section5',
      type: 'text',
      content: `## Betinget sannsynlighet i den virkelige verden

Betinget sannsynlighet er ikke bare et abstrakt matematisk konsept -- det er et verktøy som brukes i avgjørelser som påvirker liv og død.

I **medisinsk testing** er det avgjørende å forstå at en positiv test ikke betyr at du definitivt er syk. Som vi så i eksempelet med den sjeldne sykdommen, hadde bare 24 prosent av de med positiv test faktisk sykdommen. Derfor anbefaler leger ofte en oppfølgende test for å bekrefte resultatet. Den falske positive paradoksen er spesielt relevant ved screening av store befolkningsgrupper for sjeldne tilstander.

I **kvalitetskontroll** bruker fabrikker betinget sannsynlighet daglig. Hvis en defekt vare oppdages, kan man bruke betinget sannsynlighet til å finne ut hvilken maskin eller leverandør som mest sannsynlig produserte den. Tenk på leverandøreksempelet: leverandør X leverer 70 prosent av komponentene med 3 prosent feilrate, og leverandør Y leverer 30 prosent med 7 prosent feilrate. Total feilrate: $0{,}70 \\cdot 0{,}03 + 0{,}30 \\cdot 0{,}07 = 0{,}042 = 4{,}2\\%$. Hvis en defekt komponent oppdages, er sannsynligheten for at den kom fra leverandør Y: $P(Y|\\text{defekt}) = \\frac{0{,}021}{0{,}042} = 0{,}50$. Halvparten av de defekte komponentene kommer altså fra leverandør Y, selv om Y bare leverer 30 prosent av totalen.

I **rettsvesenet** er betinget sannsynlighet viktig for å tolke DNA-bevis. Det er avgjørende å skille mellom $P(\\text{DNA-match}|\\text{uskyldig})$ og $P(\\text{uskyldig}|\\text{DNA-match})$. Å forveksle disse to er en kjent feilslutning som har ført til justismord.

Poenget er at rekkefølgen av betingelsene betyr enormt mye. $P(B|A)$ og $P(A|B)$ er *ikke* det samme, og å blande dem sammen kan ha alvorlige konsekvenser.`,
    },
    {
      id: '2p-4-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '2p-4-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på den falske positive paradoksen:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-4-2-n-quiz5-q0',
            task: 'En sykdom rammer 1 % av befolkningen. En test oppdager 95 % av de syke, men gir falskt positivt hos 3 % av de friske. Hva er $P(\\text{syk}|\\text{positiv})$?',
            options: [
              { id: 'a', text: 'Ca. 95 %', isCorrect: false },
              { id: 'b', text: 'Ca. 75 %', isCorrect: false },
              { id: 'c', text: 'Ca. 50 %', isCorrect: false },
              { id: 'd', text: 'Ca. 24 %', isCorrect: true },
            ],
            solution: '$P(\\text{syk} \\cap \\text{pos}) = 0{,}01 \\cdot 0{,}95 = 0{,}0095$. $P(\\text{pos}) = 0{,}0095 + 0{,}99 \\cdot 0{,}03 = 0{,}0392$. $P(\\text{syk}|\\text{pos}) = \\frac{0{,}0095}{0{,}0392} \\approx 0{,}24 = 24\\%$.',
          },
          {
            id: '2p-4-2-n-quiz5-q1',
            task: 'Hvorfor er det viktig å skille mellom $P(B|A)$ og $P(A|B)$?',
            options: [
              { id: 'a', text: 'De er alltid like', isCorrect: false },
              { id: 'b', text: 'Det spiller ingen rolle i praksis', isCorrect: false },
              { id: 'c', text: 'De kan være svært forskjellige, og forveksling kan føre til alvorlige feiltolkninger', isCorrect: true },
              { id: 'd', text: 'Den ene er alltid dobbelt så stor som den andre', isCorrect: false },
            ],
            solution: '$P(B|A)$ og $P(A|B)$ er generelt helt forskjellige verdier. For eksempel er $P(\\text{DNA-match}|\\text{uskyldig})$ veldig liten, men $P(\\text{uskyldig}|\\text{DNA-match})$ kan være mye større. Å forveksle dem kan ha alvorlige konsekvenser.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-4-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Betinget sannsynlighet er et av de viktigste konseptene i sannsynlighetsregningen, og det har direkte anvendelser i hverdagen -- fra medisinske beslutninger til kvalitetskontroll.

**Nøkkelbegreper du nå kjenner:**
- **Betinget sannsynlighet**: $P(B|A) = \\frac{P(A \\cap B)}{P(A)}$ -- sannsynligheten for $B$ gitt at $A$ har skjedd
- **Multiplikasjonssetningen**: $P(A \\cap B) = P(A) \\cdot P(B|A)$ -- sannsynligheten for at begge skjer
- **Uavhengige hendelser**: $P(A \\cap B) = P(A) \\cdot P(B)$ -- den ene påvirker ikke den andre
- **Totalsetningen**: $P(B) = P(A) \\cdot P(B|A) + P(A') \\cdot P(B|A')$ -- den totale sannsynligheten via alle veier
- **Falsk positiv**: En positiv test hos en person som faktisk er frisk
- **Sensitivitet**: Andelen syke som tester positivt

**Det viktigste du tar med deg:**
Informasjon endrer sannsynligheter. Når vi vet at noe har skjedd, krymper vi utfallsrommet og beregner sannsynligheten i det nye, mindre rommet. Vær spesielt oppmerksom på den falske positive paradoksen -- den minner oss om at $P(B|A)$ og $P(A|B)$ er helt forskjellige ting.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.3 NARRATIV: Binomisk sannsynlighet
// ============================================================================

export const CHAPTER_2P_4_3_NARRATIV: TextbookChapter = {
  id: '2p-4-3-narrativ',
  courseId: '2p',
  chapterNumber: '4.3',
  title: 'Binomisk sannsynlighet',
  subtitle: 'Narrativ versjon',
  description:
    'Kaste mynt ti ganger, skyte straffekast i basketball, gjette på en prøve -- når forsøk gjentas med to mulige utfall, har vi et mønster som matematikken kan fange. Velkommen til binomisk sannsynlighet.',
  estimatedMinutes: 40,
  competenceGoals: [
    'forklare og bruke prosent, prosentpoeng og vekstfaktor til modellering av praktiske situasjoner med digitale verktøy',
  ],
  linkedChapterId: '2p-4-3',
  content: [
    {
      id: '2p-4-3-n-intro',
      type: 'text',
      content: `## Suksess eller fiasko -- gang på gang

Forestill deg en basketballspiller ved frikaststreken. Hun har trent i årevis, og treffprosenten hennes er 70 prosent. I kveld skal hun ta 20 straffekast. Hvor mange treff er det rimelig å forvente? Hva er sjansen for at hun treffer alle 20? Og hva er sjansen for at hun treffer minst 15?

Eller tenk på en annen situasjon: Du sitter på en eksamen med 12 flervalgsoppgaver, hvert spørsmål har 4 alternativer, og du har *ingen anelse* om svaret. Du gjetter tilfeldig på alle. Hva er sjansen for å bestå?

Begge disse situasjonene har noe til felles: Vi gjentar det samme forsøket mange ganger, og hvert forsøk har bare to mulige utfall -- suksess eller fiasko, treff eller bom, riktig eller galt. Denne typen situasjon dukker opp overalt, og matematikken har utviklet et elegant verktøy for å håndtere den: **binomisk sannsynlighet**. Det er det vi skal utforske nå.`,
    },
    {
      id: '2p-4-3-n-section1',
      type: 'text',
      content: `## De fire kjennetegnene ved et binomisk forsøk

Ikke alle gjentatte forsøk er binomiske. Et **binomisk forsøk** har fire helt spesifikke kjennetegn, og alle fire må være oppfylt.

For det første: Det må være et **fast antall forsøk** $n$. Du bestemmer på forhånd at du kaster terningen 8 ganger, tar 20 straffekast, eller svarer på 12 spørsmål. Antallet er bestemt før forsøket starter.

For det andre: Hvert forsøk har nøyaktig **to mulige utfall** -- det vi kaller "suksess" og "fiasko". Hva som er suksess, bestemmer du selv ut fra hva du er interessert i. Kaster du terning og teller seksere, er "sekser" suksess og alt annet fiasko. Svarer du på sant/usant-spørsmål, er "riktig" suksess.

For det tredje: Sannsynligheten $p$ for suksess er **den samme i hvert forsøk**. Treffprosenten er $\\frac{1}{6}$ for sekser i hvert kast, $0{,}5$ for riktig på sant/usant, og $0{,}70$ for treff på hvert straffekast.

For det fjerde: Forsøkene er **uavhengige** -- utfallet i ett forsøk påvirker ikke de andre. Det du fikk på forrige terningkast, endrer ikke sjansene i neste.

Når alle fire er oppfylt, sier vi at den stokastiske variabelen $X$ = "antall suksesser" følger en **binomisk fordeling**, og vi skriver $X \\sim \\text{Bin}(n, p)$.

La oss sjekke noen eksempler. Å kaste en terning 8 ganger og telle seksere: Ja, det er binomisk -- $n = 8$, $p = \\frac{1}{6}$, uavhengige kast. Å trekke 5 kort fra en kortstokk uten tilbakelegging og telle ess: *Nei*, ikke binomisk, fordi trekking uten tilbakelegging gjør forsøkene avhengige (sannsynligheten endrer seg for hvert trekk). Å svare på 12 sant/usant-spørsmål ved ren gjetting: Ja, binomisk -- $n = 12$, $p = 0{,}5$, uavhengige gjetninger.`,
    },
    {
      id: '2p-4-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '2p-4-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på binomiske forsøk:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-4-3-n-quiz1-q0',
            task: 'Hvilket av følgende er et binomisk forsøk?',
            options: [
              { id: 'a', text: 'Måle høyden til 30 tilfeldig valgte elever', isCorrect: false },
              { id: 'b', text: 'Trekke 10 kuler fra en pose med 20 kuler uten tilbakelegging', isCorrect: false },
              { id: 'c', text: 'Kaste en mynt 50 ganger og telle antall krone', isCorrect: true },
              { id: 'd', text: 'Telle antall biler som passerer et punkt i løpet av en time', isCorrect: false },
            ],
            solution: 'Myntkast 50 ganger oppfyller alle fire krav: fast $n = 50$, to utfall (krone/mynt), fast $p = 0{,}5$, uavhengige kast.',
          },
          {
            id: '2p-4-3-n-quiz1-q1',
            task: 'Hvorfor er trekking av 5 kort fra en kortstokk uten tilbakelegging IKKE et binomisk forsøk?',
            options: [
              { id: 'a', text: 'Fordi det ikke er to utfall', isCorrect: false },
              { id: 'b', text: 'Fordi forsøkene ikke er uavhengige -- sannsynligheten endres for hvert trekk', isCorrect: true },
              { id: 'c', text: 'Fordi $n$ ikke er fast', isCorrect: false },
              { id: 'd', text: 'Fordi $p$ er for liten', isCorrect: false },
            ],
            solution: 'Uten tilbakelegging endres sannsynligheten for hvert trekk (f.eks. sjansen for ess endres fra $\\frac{4}{52}$ til $\\frac{3}{51}$ etter at et ess er trukket). Forsøkene er altså *avhengige*, og kravet om uavhengighet brytes.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-4-3-n-section2',
      type: 'text',
      content: `## Den binomiske formelen -- matematikken bak mønsteret

Nå som vi vet hva et binomisk forsøk er, trenger vi en formel for å beregne sannsynligheter. Formelen for sannsynligheten for nøyaktig $k$ suksesser i $n$ forsøk med suksesssannsynlighet $p$ er:

$$P(X = k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}$$

La oss forstå hva hver del betyr. Faktoren $p^k$ er sannsynligheten for $k$ suksesser -- for eksempel sjansen for at nøyaktig 2 terningkast gir sekser. Faktoren $(1-p)^{n-k}$ er sannsynligheten for de resterende $n-k$ fiaskoene. Og $\\binom{n}{k}$ -- **binomialkoeffisienten** -- forteller oss på hvor mange *rekkefølger* suksessene kan komme.

Binomialkoeffisienten beregnes med: $\\binom{n}{k} = \\frac{n!}{k! \\cdot (n-k)!}$. For eksempel er $\\binom{6}{2} = \\frac{6!}{2! \\cdot 4!} = \\frac{720}{2 \\cdot 24} = 15$. Det betyr at det er 15 ulike måter å velge 2 elementer fra 6.

La oss regne et konkret eksempel. Du kaster en terning 5 ganger. Hva er sannsynligheten for nøyaktig 2 seksere? Vi har $n = 5$, $k = 2$, $p = \\frac{1}{6}$. Først binomialkoeffisienten: $\\binom{5}{2} = \\frac{5!}{2! \\cdot 3!} = \\frac{120}{2 \\cdot 6} = 10$. Så setter vi inn i formelen:

$$P(X = 2) = 10 \\cdot \\left(\\frac{1}{6}\\right)^2 \\cdot \\left(\\frac{5}{6}\\right)^3 = 10 \\cdot \\frac{1}{36} \\cdot \\frac{125}{216} = \\frac{1250}{7776} \\approx 0{,}161$$

Altså ca. 16,1 prosent sjanse for nøyaktig 2 seksere på 5 kast. De 10 rekkefølgene fra binomialkoeffisienten representerer alle måtene to seksere kan plasseres blant fem kast -- for eksempel SSFFF, SFSFF, SFFSF, og så videre.`,
    },
    {
      id: '2p-4-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '2p-4-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på den binomiske formelen:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-4-3-n-quiz2-q0',
            task: 'Hva er verdien av binomialkoeffisienten $\\binom{6}{2}$?',
            options: [
              { id: 'a', text: '12', isCorrect: false },
              { id: 'b', text: '36', isCorrect: false },
              { id: 'c', text: '15', isCorrect: true },
              { id: 'd', text: '30', isCorrect: false },
            ],
            solution: '$\\binom{6}{2} = \\frac{6!}{2! \\cdot 4!} = \\frac{6 \\cdot 5}{2 \\cdot 1} = 15$. Det er 15 måter å velge 2 elementer fra 6.',
          },
          {
            id: '2p-4-3-n-quiz2-q1',
            task: 'I formelen $P(X = k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}$, hva representerer faktoren $(1-p)^{n-k}$?',
            options: [
              { id: 'a', text: 'Antall mulige rekkefølger', isCorrect: false },
              { id: 'b', text: 'Sannsynligheten for de $n - k$ fiaskoene', isCorrect: true },
              { id: 'c', text: 'Sannsynligheten for alle suksessene', isCorrect: false },
              { id: 'd', text: 'Forventningsverdien', isCorrect: false },
            ],
            solution: '$p^k$ er sannsynligheten for $k$ suksesser, $(1-p)^{n-k}$ er sannsynligheten for de resterende $n - k$ fiaskoene, og $\\binom{n}{k}$ teller antall rekkefølger suksessene kan komme i.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-4-3-n-section3',
      type: 'text',
      content: `## Forventningsverdi og standardavvik -- hva kan vi forvente?

Formelen gir oss sannsynligheten for et *bestemt* antall suksesser. Men ofte vil vi vite noe mer overordnet: Hvor mange suksesser kan vi *forvente* i gjennomsnitt? Og hvor mye vil resultatet typisk variere? Svarene gis av **forventningsverdien** og **standardavviket**.

For en binomisk fordeling $X \\sim \\text{Bin}(n, p)$ er forventningsverdien gitt ved den elegante formelen $E(X) = \\mu = n \\cdot p$. Den er rett og slett antall forsøk ganget med sannsynligheten for suksess i hvert forsøk. Basketballspilleren med 70 prosent treffprosent og 20 straffekast forventer $E(X) = 20 \\cdot 0{,}70 = 14$ treff. Det er gjennomsnittet over mange gjentakelser -- noen ganger treffer hun 12, noen ganger 16, men *i snitt* blir det 14.

Standardavviket måler hvor mye resultatet typisk *avviker* fra forventningen: $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$. For basketballspilleren: $\\sigma = \\sqrt{20 \\cdot 0{,}70 \\cdot 0{,}30} = \\sqrt{4{,}2} \\approx 2{,}05$.

Hva betyr standardavviket i praksis? En nyttig tommelfingerregel er at de fleste resultater vil ligge innenfor $\\mu \\pm 2\\sigma$. For basketballspilleren: $14 \\pm 2 \\cdot 2{,}05 \\approx 14 \\pm 4$, altså mellom 10 og 18 treff. Hvis hun treffer bare 5 av 20, vet vi at noe uvanlig har skjedd.

Her er et eksempel fra industrien. En fabrikk har 4 prosent feilrate på lyspærer. I en pakke med 25: $E(X) = 25 \\cdot 0{,}04 = 1{,}0$ defekt i snitt. $\\sigma = \\sqrt{25 \\cdot 0{,}04 \\cdot 0{,}96} = \\sqrt{0{,}96} \\approx 0{,}98$. Intervallet $\\mu \\pm 2\\sigma = 1{,}0 \\pm 1{,}96$ gir ca. 0 til 3. Å finne 5 defekte i en pakke ville være utenfor dette intervallet og altså *overraskende* -- det kunne tyde på et problem med produksjonen.`,
    },
    {
      id: '2p-4-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '2p-4-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på forventningsverdi og standardavvik:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-4-3-n-quiz3-q0',
            task: 'En stokastisk variabel $X \\sim \\text{Bin}(100, \\; 0{,}3)$. Hva er forventningsverdien $E(X)$?',
            options: [
              { id: 'a', text: '$0{,}3$', isCorrect: false },
              { id: 'b', text: '$30$', isCorrect: true },
              { id: 'c', text: '$70$', isCorrect: false },
              { id: 'd', text: '$21$', isCorrect: false },
            ],
            solution: '$E(X) = n \\cdot p = 100 \\cdot 0{,}3 = 30$. I snitt forventer vi 30 suksesser i 100 forsøk.',
          },
          {
            id: '2p-4-3-n-quiz3-q1',
            task: 'En basketballspiller har 70 % treffprosent og tar 20 straffekast. Hva er $E(X)$ og $\\sigma$?',
            options: [
              { id: 'a', text: '$E(X) = 14$, $\\sigma \\approx 4{,}2$', isCorrect: false },
              { id: 'b', text: '$E(X) = 7$, $\\sigma \\approx 2{,}05$', isCorrect: false },
              { id: 'c', text: '$E(X) = 14$, $\\sigma \\approx 2{,}05$', isCorrect: true },
              { id: 'd', text: '$E(X) = 6$, $\\sigma \\approx 1{,}41$', isCorrect: false },
            ],
            solution: '$E(X) = 20 \\cdot 0{,}70 = 14$ treff. $\\sigma = \\sqrt{20 \\cdot 0{,}70 \\cdot 0{,}30} = \\sqrt{4{,}2} \\approx 2{,}05$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-4-3-n-section4',
      type: 'text',
      content: `## Digitale verktøy -- når regninga blir for tung

Den binomiske formelen er elegant, men for store verdier av $n$ og $k$ blir beregningene upraktiske for hånd. Prøv å beregne $\\binom{50}{23}$ manuelt, og du forstår hvorfor vi trenger digitale verktøy.

I **GeoGebra CAS** har du tre nyttige kommandoer: $\\texttt{BinomialKoeffisient(n, k)}$ beregner $\\binom{n}{k}$. $\\texttt{Binomial(n, p, k)}$ beregner $P(X = k)$ -- sannsynligheten for *nøyaktig* $k$ suksesser. Og $\\texttt{Binomial(n, p, k, true)}$ beregner den *kumulative* sannsynligheten $P(X \\leq k)$ -- sannsynligheten for *høyst* $k$ suksesser.

I **Excel eller regneark** bruker du funksjonen BINOM.FORDELING. Med \`=BINOM.FORDELING(k; n; p; USANN)\` får du $P(X = k)$, og med \`=BINOM.FORDELING(k; n; p; SANN)\` får du $P(X \\leq k)$.

Et viktig triks er å bruke komplementet for å finne $P(X \\geq k)$: $P(X \\geq k) = 1 - P(X \\leq k-1)$. La oss se hvordan. En elev gjetter tilfeldig på en prøve med 20 sant/usant-spørsmål, så $X \\sim \\text{Bin}(20, \\; 0{,}5)$. Hva er sannsynligheten for å få *minst* 15 riktige? Vi beregner: $P(X \\geq 15) = 1 - P(X \\leq 14)$. Med GeoGebra: $P(X \\leq 14) = \\texttt{Binomial(20, 0.5, 14, true)} \\approx 0{,}9793$. Altså $P(X \\geq 15) = 1 - 0{,}9793 = 0{,}0207 \\approx 2{,}1\\%$. Det er svært usannsynlig å gjette seg til 15 av 20 riktige -- noe som er betryggende for læreren.

Spørreundersøkelser kan også analyseres med binomisk sannsynlighet. Hvis 40 prosent av ungdommer foretrekker streaming og du spør 15 tilfeldig valgte, kan du beregne at $P(X = 6) \\approx 0{,}207$ og at $P(X < 4) = P(X \\leq 3) \\approx 0{,}091$ med digitale verktøy.`,
    },
    {
      id: '2p-4-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '2p-4-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på kumulativ binomisk sannsynlighet:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-4-3-n-quiz4-q0',
            task: 'Du vil finne $P(X \\geq 8)$ for en binomisk fordeling. Hvilken beregning er riktig?',
            options: [
              { id: 'a', text: '$P(X \\geq 8) = P(X \\leq 8)$', isCorrect: false },
              { id: 'b', text: '$P(X \\geq 8) = 1 - P(X \\leq 8)$', isCorrect: false },
              { id: 'c', text: '$P(X \\geq 8) = 1 - P(X \\leq 7)$', isCorrect: true },
              { id: 'd', text: '$P(X \\geq 8) = P(X = 8)$', isCorrect: false },
            ],
            solution: '$P(X \\geq 8) = 1 - P(X \\leq 7)$. Vi bruker komplementet av «høyst 7» for å finne «minst 8». Merk: $\\leq 7$, ikke $\\leq 8$, fordi $X = 8$ skal inkluderes.',
          },
          {
            id: '2p-4-3-n-quiz4-q1',
            task: 'I GeoGebra gir \`Binomial(20, 0.5, 14, true)\` verdien $0{,}9793$. Hva er $P(X \\geq 15)$?',
            options: [
              { id: 'a', text: '$0{,}9793$', isCorrect: false },
              { id: 'b', text: '$0{,}0207$', isCorrect: true },
              { id: 'c', text: '$0{,}5$', isCorrect: false },
              { id: 'd', text: '$0{,}9586$', isCorrect: false },
            ],
            solution: '$P(X \\geq 15) = 1 - P(X \\leq 14) = 1 - 0{,}9793 = 0{,}0207 \\approx 2{,}1\\%$. Det er svært usannsynlig å gjette seg til 15 av 20 riktige.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-4-3-n-section5',
      type: 'text',
      content: `## Binomisk sannsynlighet i praksis

La oss avslutte med å se på noen situasjoner der binomisk sannsynlighet gir virkelig nyttige svar.

**Kvalitetskontroll:** En kontrollør tester 10 produkter fra en linje med 8 prosent feilrate. Hva er sjansen for at *ingen* er defekte? $P(X = 0) = 0{,}92^{10} \\approx 0{,}434$. Bare 43 prosent sjanse for en feilfri prøve! Og sjansen for at *minst* ett produkt er defekt: $P(X \\geq 1) = 1 - 0{,}434 \\approx 0{,}566$. Altså over 50 prosent sjanse for å finne minst én feil -- selv med bare 8 prosent feilrate -- fordi vi tester 10 produkter.

**Gjetting på eksamen:** I et TV-quizshow svarer en deltaker på 12 spørsmål med 3 alternativer, og gjetter tilfeldig. Da er $X \\sim \\text{Bin}(12, \\frac{1}{3})$. Forventningsverdien er $E(X) = 12 \\cdot \\frac{1}{3} = 4$ riktige, og standardavviket er $\\sigma = \\sqrt{12 \\cdot \\frac{1}{3} \\cdot \\frac{2}{3}} = \\sqrt{\\frac{8}{3}} \\approx 1{,}63$. Intervallet $\\mu \\pm 2\\sigma$ gir ca. 1 til 7 riktige. For å gå videre trengs minst 8 riktige: $P(X \\geq 8) \\approx 0{,}0028 = 0{,}28\\%$. Altså nesten umulig å gjette seg videre -- du trenger faktisk å *kunne* noe.

**Standardavviket som varslingssignal:** En stokastisk variabel $X \\sim \\text{Bin}(50, \\; 0{,}2)$ har $E(X) = 10$ og $\\sigma = \\sqrt{50 \\cdot 0{,}2 \\cdot 0{,}8} = \\sqrt{8} \\approx 2{,}83$. Intervallet $\\mu \\pm 2\\sigma$ gir ca. 4 til 16. Hvis du observerer 20 suksesser i 50 forsøk, er det *langt* utenfor det forventede. Enten har du vært veldig heldig, eller så er den virkelige sannsynligheten $p$ høyere enn 0,2.

Binomisk sannsynlighet er et verktøy du vil møte igjen og igjen -- i statistikk, i naturvitenskap, i økonomi, og i hverdagslige beslutninger. Det fine er at mønsteret alltid er det samme: gjentatte, uavhengige forsøk med to utfall.`,
    },
    {
      id: '2p-4-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '2p-4-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på binomisk sannsynlighet i praksis:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-4-3-n-quiz5-q0',
            task: 'En stokastisk variabel $X \\sim \\text{Bin}(50, \\; 0{,}2)$. Hva er standardavviket $\\sigma$?',
            options: [
              { id: 'a', text: '$10$', isCorrect: false },
              { id: 'b', text: '$\\sqrt{8} \\approx 2{,}83$', isCorrect: true },
              { id: 'c', text: '$8$', isCorrect: false },
              { id: 'd', text: '$\\sqrt{10} \\approx 3{,}16$', isCorrect: false },
            ],
            solution: '$\\sigma = \\sqrt{np(1-p)} = \\sqrt{50 \\cdot 0{,}2 \\cdot 0{,}8} = \\sqrt{8} \\approx 2{,}83$.',
          },
          {
            id: '2p-4-3-n-quiz5-q1',
            task: 'En kvalitetskontrollør tester 10 produkter fra en linje med 8 % feilrate. Hva er sannsynligheten for at *ingen* er defekte?',
            options: [
              { id: 'a', text: '$0{,}92$', isCorrect: false },
              { id: 'b', text: '$0{,}08^{10}$', isCorrect: false },
              { id: 'c', text: '$0{,}92^{10} \\approx 0{,}434$', isCorrect: true },
              { id: 'd', text: '$0{,}80$', isCorrect: false },
            ],
            solution: '$P(X = 0) = \\binom{10}{0} \\cdot 0{,}08^0 \\cdot 0{,}92^{10} = 0{,}92^{10} \\approx 0{,}434$. Bare ca. 43 % sjanse for en feilfri prøve, selv med bare 8 % feilrate.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-4-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Binomisk sannsynlighet gir oss et presist verktøy for å analysere gjentatte forsøk med to mulige utfall. Det er en av de mest anvendte sannsynlighetsmodellene i matematikken.

**Nøkkelbegreper du nå kjenner:**
- **Binomisk forsøk**: Fast antall forsøk $n$, to utfall, fast sannsynlighet $p$, uavhengige forsøk
- **Binomisk formel**: $P(X = k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}$
- **Binomialkoeffisient**: $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$ -- antall måter å velge $k$ av $n$
- **Forventningsverdi**: $E(X) = np$ -- gjennomsnittlig antall suksesser
- **Standardavvik**: $\\sigma = \\sqrt{np(1-p)}$ -- typisk spredning rundt forventningen
- **Kumulativ sannsynlighet**: $P(X \\leq k)$ beregnes best med digitale verktøy
- **Komplement**: $P(X \\geq k) = 1 - P(X \\leq k-1)$

**Det viktigste du tar med deg:**
Binomisk sannsynlighet dukker opp i en overraskende mengde situasjoner -- fra kvalitetskontroll og medisinsk forskning til spill og eksamensvurdering. Forventningsverdien forteller deg hva du kan forvente i gjennomsnitt, og standardavviket forteller deg hvor mye variasjon som er normalt. Når et resultat ligger mer enn $2\\sigma$ fra forventningen, bør du stoppe opp og spørre: Skjedde det noe uvanlig her?`,
    },
  ],
  exercises: [],
};
