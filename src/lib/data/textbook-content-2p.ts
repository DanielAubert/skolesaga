/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Matematikk 2P
 * Følger LK20 læreplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_2P_1: TextbookChapter = {
  id: '2p-1',
  courseId: '2p',
  chapterNumber: '1',
  title: 'Tall og tallforståelse',
  description: 'Repetisjon og utvidelse av tallbegreper, regning med store og små tall.',
  estimatedMinutes: 90,
  competenceGoals: [
    'bruke ulike representasjoner av tall og størrelser',
    'utforske og beskrive strukturer i tallmønstre'
  ],
  content: [
    {
      id: '2p-1-1',
      type: 'text',
      content: '## Tallforståelse i praksis\n\nI Matematikk 2P bygger vi videre på tallforståelsen fra 1P. Vi skal arbeide med tall i ulike sammenhenger og lære å tolke og bruke tall i hverdagen og yrkeslivet.\n\n### Store og små tall\n\nI mange sammenhenger møter vi svært store eller svært små tall:\n- Statsbudsjettet: ca. 1 800 000 000 000 kr\n- Avstand til sola: ca. 150 000 000 km\n- Diameter på et virus: ca. 0,0000001 m'
    },
    {
      id: '2p-1-2',
      type: 'definition',
      title: 'Standardform',
      content: 'Et tall på standardform skrives som a · 10^n der 1 ≤ a < 10 og n er et heltall. Eksempel: 3 400 000 = 3,4 · 10^6'
    },
    {
      id: '2p-1-3',
      type: 'example',
      title: 'Skrive tall på standardform',
      content: '**Eksempel 1:** Skriv 0,000045 på standardform.\n\n**Løsning:**\nVi flytter desimalkommaet 5 plasser til høyre:\n0,000045 = 4,5 · 10^(-5)\n\n**Eksempel 2:** Skriv 2,8 · 10^7 som vanlig tall.\n\n**Løsning:**\nVi flytter desimalkommaet 7 plasser til høyre:\n2,8 · 10^7 = 28 000 000'
    },
    {
      id: '2p-1-4',
      type: 'text',
      content: '### Avrunding og gjeldende siffer\n\nNår vi arbeider med målte verdier, er det viktig å bruke riktig antall gjeldende siffer.\n\n**Gjeldende siffer** er alle siffer som gir informasjon om nøyaktigheten:\n- 3,45 har tre gjeldende siffer\n- 0,0034 har to gjeldende siffer (nullene foran teller ikke)\n- 3400 kan ha 2, 3 eller 4 gjeldende siffer'
    },
    {
      id: '2p-1-5',
      type: 'tip',
      title: 'Avrundingsregel',
      content: 'Ved multiplikasjon og divisjon skal svaret ha like mange gjeldende siffer som det tallet i regnestykket som har færrest gjeldende siffer.'
    },
    {
      id: '2p-1-ex1',
      type: 'exercise',
      exercise: {
        id: '2p-1-ex1',
        type: 'multiple-choice',
        task: 'Hvilket tall er 5 670 000 skrevet på standardform?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar:',
            multipleChoiceOptions: [
              '5,67 · 10^6',
              '56,7 · 10^5',
              '5,67 · 10^7',
              '0,567 · 10^7'
            ],
            solution: '5,67 · 10^6 fordi vi må ha et tall mellom 1 og 10 foran, og vi flytter komma 6 plasser.'
          }
        ]
      }
    },
    {
      id: '2p-1-ex2',
      type: 'exercise',
      exercise: {
        id: '2p-1-ex2',
        type: 'multiple-choice',
        task: 'Hvor mange gjeldende siffer har tallet 0,00340?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar:',
            multipleChoiceOptions: [
              '3 gjeldende siffer',
              '5 gjeldende siffer',
              '2 gjeldende siffer',
              '6 gjeldende siffer'
            ],
            solution: 'Tallet har 3 gjeldende siffer: 3, 4 og den siste 0-en. Nullene foran desimalkommaet teller ikke.'
          }
        ]
      }
    }
  ],
  exercises: []
};

export const CHAPTER_2P_2: TextbookChapter = {
  id: '2p-2',
  courseId: '2p',
  chapterNumber: '2',
  title: 'Prosentregning',
  description: 'Prosentvis endring, vekstfaktor og sammensatt vekst.',
  estimatedMinutes: 100,
  competenceGoals: [
    'bruke prosent, prosentpoeng og vekstfaktor i praktiske beregninger',
    'tolke og vurdere statistiske fremstillinger'
  ],
  content: [
    {
      id: '2p-2-1',
      type: 'text',
      content: '## Prosentregning i praksis\n\nProsent brukes overalt i samfunnet: lønnsvekst, prisendringer, renter, statistikk og mer. Å forstå prosentregning er avgjørende for å kunne ta gode økonomiske beslutninger.\n\n### Grunnleggende prosentbegreper\n\n- **Prosent** betyr \"per hundre\" og skrives med symbolet %\n- **Prosentandel** = (del / helhet) · 100%\n- **Prosentpoeng** brukes for å beskrive forskjellen mellom to prosenttall'
    },
    {
      id: '2p-2-2',
      type: 'definition',
      title: 'Vekstfaktor',
      content: 'Vekstfaktoren forteller hva vi skal gange med for å få ny verdi.\n\nVekstfaktor = 1 + (prosentendring/100)\n\nVed økning på 15%: vekstfaktor = 1 + 0,15 = 1,15\nVed reduksjon på 20%: vekstfaktor = 1 - 0,20 = 0,80'
    },
    {
      id: '2p-2-3',
      type: 'example',
      title: 'Bruke vekstfaktor',
      content: '**Eksempel:** En jakke koster 800 kr. Den settes ned med 25%. Hva blir ny pris?\n\n**Løsning med vekstfaktor:**\nVekstfaktor = 1 - 0,25 = 0,75\nNy pris = 800 · 0,75 = 600 kr\n\n**Alternativ løsning:**\nRabatt = 800 · 0,25 = 200 kr\nNy pris = 800 - 200 = 600 kr'
    },
    {
      id: '2p-2-4',
      type: 'text',
      content: '### Prosentvis endring\n\nNår vi skal finne prosentvis endring fra gammel til ny verdi:\n\n**Prosentvis endring** = ((ny verdi - gammel verdi) / gammel verdi) · 100%\n\nEller med vekstfaktor:\n**Prosentvis endring** = (vekstfaktor - 1) · 100%'
    },
    {
      id: '2p-2-5',
      type: 'example',
      title: 'Finne prosentvis endring',
      content: '**Eksempel:** Aksjekursen steg fra 45 kr til 54 kr. Hva var prosentvis økning?\n\n**Løsning:**\nProsentvis endring = ((54 - 45) / 45) · 100% = (9/45) · 100% = 20%\n\n**Med vekstfaktor:**\nVekstfaktor = 54/45 = 1,2\nProsentvis endring = (1,2 - 1) · 100% = 20%'
    },
    {
      id: '2p-2-6',
      type: 'warning',
      title: 'Prosent vs. prosentpoeng',
      content: 'Ikke forveksl prosent og prosentpoeng!\n\nHvis renta øker fra 3% til 5%, har den:\n- Økt med 2 prosentpoeng (5% - 3% = 2 prosentpoeng)\n- Økt med ca. 67% ((5-3)/3 · 100% ≈ 67%)'
    },
    {
      id: '2p-2-7',
      type: 'text',
      content: '### Sammensatt vekst\n\nNår noe vokser med samme prosent flere ganger (f.eks. årlig rente), bruker vi formelen for sammensatt vekst:\n\n**Sluttverdi = startverdi · (vekstfaktor)^n**\n\nder n er antall perioder.'
    },
    {
      id: '2p-2-8',
      type: 'example',
      title: 'Sammensatt vekst',
      content: '**Eksempel:** Du setter inn 10 000 kr i banken til 3% årlig rente. Hvor mye har du etter 5 år?\n\n**Løsning:**\nVekstfaktor = 1,03\nSluttverdi = 10 000 · 1,03^5 = 10 000 · 1,159 = 11 593 kr\n\nDu har fått 1 593 kr i renter.'
    },
    {
      id: '2p-2-ex1',
      type: 'exercise',
      exercise: {
        id: '2p-2-ex1',
        type: 'multiple-choice',
        task: 'En vare øker i pris fra 250 kr til 300 kr. Hva er den prosentvise økningen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar:',
            multipleChoiceOptions: [
              '20%',
              '50 kr',
              '16,7%',
              '25%'
            ],
            solution: 'Prosentvis økning = (300-250)/250 · 100% = 50/250 · 100% = 20%'
          }
        ]
      }
    },
    {
      id: '2p-2-ex2',
      type: 'exercise',
      exercise: {
        id: '2p-2-ex2',
        type: 'multiple-choice',
        task: 'Hva blir vekstfaktoren ved en prisreduksjon på 35%?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar:',
            multipleChoiceOptions: [
              '0,65',
              '1,35',
              '0,35',
              '1,65'
            ],
            solution: 'Vekstfaktor = 1 - 0,35 = 0,65. Ved reduksjon trekker vi fra 1.'
          }
        ]
      }
    }
  ],
  exercises: []
};

export const CHAPTER_2P_3: TextbookChapter = {
  id: '2p-3',
  courseId: '2p',
  chapterNumber: '3',
  title: 'Personlig økonomi',
  description: 'Budsjett, lån, sparing og økonomisk planlegging.',
  estimatedMinutes: 110,
  competenceGoals: [
    'utforske og bruke ulike typer lån og sparing',
    'lage og vurdere budsjett for privatpersoner'
  ],
  content: [
    {
      id: '2p-3-1',
      type: 'text',
      content: '## Personlig økonomi\n\nGod økonomistyring er viktig for å ha kontroll over egen økonomi. Dette innebærer å forstå inntekter, utgifter, skatt, lån og sparing.\n\n### Budsjett\n\nEt budsjett er en plan for hvordan du vil bruke pengene dine.\n\n**Hovedposter i et budsjett:**\n- Inntekter (lønn, stipend, andre inntekter)\n- Faste utgifter (husleie, forsikring, abonnementer)\n- Variable utgifter (mat, klær, transport, fritid)\n- Sparing'
    },
    {
      id: '2p-3-2',
      type: 'tip',
      title: '50/30/20-regelen',
      content: 'En enkel tommelfingerregel for budsjettering:\n- 50% til nødvendige utgifter (bolig, mat, transport)\n- 30% til ønsker (fritid, underholdning, shopping)\n- 20% til sparing og nedbetaling av gjeld'
    },
    {
      id: '2p-3-3',
      type: 'text',
      content: '### Skatt og nettoinntekt\n\n**Bruttoinntekt** er lønnen før skatt trekkes fra.\n**Nettoinntekt** er det du faktisk får utbetalt etter skatt.\n\nI Norge har vi progressiv skatt, som betyr at skatteprosenten øker med inntekten.\n\n**Viktige skattefradrag for unge:**\n- Minstefradrag (automatisk)\n- Personfradrag (bunnfradrag)\n- Renteutgifter på lån'
    },
    {
      id: '2p-3-4',
      type: 'definition',
      title: 'Nominell vs. effektiv rente',
      content: 'Nominell rente er den oppgitte årsrenten.\n\nEffektiv rente inkluderer alle kostnader knyttet til lånet (gebyrer, termingebyr etc.) og gir et bedre bilde av den faktiske kostnaden.\n\nEffektiv rente er alltid høyere enn nominell rente.'
    },
    {
      id: '2p-3-5',
      type: 'text',
      content: '### Lån\n\nDe vanligste lånetypene:\n\n**Annuitetslån:**\n- Like store terminbeløp\n- Høy rentedel i starten, høy avdragsdel mot slutten\n- Mest brukt for boliglån\n\n**Serielån:**\n- Like store avdrag\n- Terminbeløpet synker over tid\n- Lavere totale rentekostnader\n\n**Forbrukslån:**\n- Høy rente (ofte 15-25%)\n- Bør unngås eller betales ned raskt'
    },
    {
      id: '2p-3-6',
      type: 'example',
      title: 'Beregne terminbeløp',
      content: '**Eksempel:** Du tar opp et lån på 100 000 kr med 5% årlig rente. Lånet skal betales ned over 2 år med månedlige terminer.\n\n**Formel for annuitetslån:**\nTerminbeløp = Lån · (r · (1+r)^n) / ((1+r)^n - 1)\n\nder r = månedsrente = 0,05/12 = 0,00417\nog n = antall terminer = 24\n\nTerminbeløp = 100 000 · (0,00417 · 1,00417^24) / (1,00417^24 - 1)\n            = 100 000 · 0,0438 = 4 387 kr\n\nTotal tilbakebetaling: 24 · 4 387 = 105 288 kr\nTotale rentekostnader: 5 288 kr'
    },
    {
      id: '2p-3-7',
      type: 'text',
      content: '### Sparing\n\n**Sparemåter:**\n- Høyrentekonto (trygt, lav avkastning)\n- BSU - Boligsparing for ungdom (skattefradrag, maks 27 500 kr/år)\n- Aksjefond (høyere risiko, potensielt høyere avkastning)\n- Indeksfond (følger markedet, lave kostnader)\n\n**Renters rente-effekten:**\nNår rentene legges til kapitalen og selv begynner å gi renter, får vi renters rente. Over tid blir dette en kraftig effekt.'
    },
    {
      id: '2p-3-8',
      type: 'example',
      title: 'BSU-sparing',
      content: '**Eksempel:** Du sparer 25 000 kr per år i BSU med 3,5% rente i 5 år.\n\n**Skattefordel:**\n20% av innskuddet = 0,20 · 25 000 = 5 000 kr tilbake på skatten per år.\n\n**Etter 5 år:**\nVed å bruke formelen for annuitetssparing:\nSluttverdi ≈ 25 000 · ((1,035^5 - 1) / 0,035) = 134 365 kr\n\nPluss skattefordel: 5 · 5 000 = 25 000 kr\n\nTotal gevinst fra BSU: ca. 159 365 kr (125 000 kr innskudd + 9 365 kr renter + 25 000 kr skattefordel)'
    },
    {
      id: '2p-3-ex1',
      type: 'exercise',
      exercise: {
        id: '2p-3-ex1',
        type: 'multiple-choice',
        task: 'Hvilken lånetype gir lavest totale rentekostnader?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar:',
            multipleChoiceOptions: [
              'Serielån',
              'Annuitetslån',
              'Forbrukslån',
              'Alle gir like rentekostnader'
            ],
            solution: 'Serielån gir lavest totale rentekostnader fordi du betaler ned mer av lånet tidlig, og dermed betaler rente på et mindre beløp over tid.'
          }
        ]
      }
    },
    {
      id: '2p-3-ex2',
      type: 'exercise',
      exercise: {
        id: '2p-3-ex2',
        type: 'multiple-choice',
        task: 'Hva er hovedfordelen med BSU?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar:',
            multipleChoiceOptions: [
              'Skattefradrag på 20% av innskuddet',
              'Høyere rente enn vanlig sparekonto',
              'Ingen bindingstid',
              'Ubegrenset innskudd'
            ],
            solution: 'Hovedfordelen er skattefradraget på 20% av innskuddet, som betyr at du får 20 øre tilbake for hver krone du sparer (opp til maks 27 500 kr per år).'
          }
        ]
      }
    }
  ],
  exercises: []
};

export const CHAPTER_2P_4: TextbookChapter = {
  id: '2p-4',
  courseId: '2p',
  chapterNumber: '4',
  title: 'Algebra og likninger',
  description: 'Løse likninger, ulikheter og likningssett i praktiske sammenhenger.',
  estimatedMinutes: 95,
  competenceGoals: [
    'løse likninger, ulikheter og likningssett',
    'bruke algebra til å løse praktiske problemer'
  ],
  content: [
    {
      id: '2p-4-1',
      type: 'text',
      content: '## Algebra i praksis\n\nAlgebra er et kraftig verktøy for å løse problemer. Ved å sette opp likninger kan vi finne ukjente verdier i mange praktiske situasjoner.\n\n### Lineære likninger\n\nEn lineær likning har formen ax + b = c, der x er den ukjente.\n\n**Løsningsmetode:**\n1. Samle alle ledd med x på én side\n2. Samle alle talledd på den andre siden\n3. Dele på koeffisienten foran x'
    },
    {
      id: '2p-4-2',
      type: 'example',
      title: 'Løse lineær likning',
      content: '**Eksempel:** Løs likningen 3x + 7 = 22\n\n**Løsning:**\n3x + 7 = 22\n3x = 22 - 7\n3x = 15\nx = 15/3\nx = 5\n\n**Kontroll:** 3 · 5 + 7 = 15 + 7 = 22 ✓'
    },
    {
      id: '2p-4-3',
      type: 'text',
      content: '### Likninger med parenteser og brøker\n\nVed parenteser: Multipliser ut eller bruk fellesnevner.\n\n**Eksempel med parentes:**\n2(x + 3) = 14\n2x + 6 = 14\n2x = 8\nx = 4\n\n**Eksempel med brøk:**\nx/3 + 2 = 5\nx/3 = 3\nx = 9'
    },
    {
      id: '2p-4-4',
      type: 'definition',
      title: 'Ulikhet',
      content: 'En ulikhet har tegn som <, >, ≤ eller ≥ i stedet for =.\n\nViktig regel: Når vi ganger eller deler med et negativt tall, må vi snu ulikhetstegnet.\n\nEksempel: -2x > 6 gir x < -3'
    },
    {
      id: '2p-4-5',
      type: 'example',
      title: 'Løse ulikhet',
      content: '**Eksempel:** Løs ulikheten 4x - 3 ≤ 13\n\n**Løsning:**\n4x - 3 ≤ 13\n4x ≤ 16\nx ≤ 4\n\nLøsningsmengden er alle tall fra og med 4 og nedover, altså x ≤ 4 eller (-∞, 4].'
    },
    {
      id: '2p-4-6',
      type: 'text',
      content: '### Likningssett\n\nNår vi har to ukjente, trenger vi to likninger. Dette kalles et likningssett.\n\n**Løsningsmetoder:**\n1. **Innsettingsmetoden:** Løs én likning for én variabel, sett inn i den andre\n2. **Addisjonsmetoden:** Legg sammen likningene slik at én variabel forsvinner'
    },
    {
      id: '2p-4-7',
      type: 'example',
      title: 'Løse likningssett',
      content: '**Eksempel:** Løs likningssettett:\nx + y = 10\n2x - y = 5\n\n**Løsning med addisjonsmetoden:**\nLegger sammen likningene:\n(x + y) + (2x - y) = 10 + 5\n3x = 15\nx = 5\n\nSetter inn x = 5 i første likning:\n5 + y = 10\ny = 5\n\n**Svar:** x = 5 og y = 5'
    },
    {
      id: '2p-4-8',
      type: 'text',
      content: '### Praktisk bruk av likninger\n\n**Eksempel fra hverdagen:**\nEn mobilabonnement koster 199 kr i måneden pluss 0,50 kr per SMS. Du har 300 kr å bruke. Hvor mange SMS kan du sende?\n\nLa x = antall SMS\n199 + 0,50x ≤ 300\n0,50x ≤ 101\nx ≤ 202\n\nDu kan sende maksimalt 202 SMS.'
    },
    {
      id: '2p-4-ex1',
      type: 'exercise',
      exercise: {
        id: '2p-4-ex1',
        type: 'multiple-choice',
        task: 'Løs likningen 5x - 8 = 3x + 6',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar:',
            multipleChoiceOptions: [
              'x = 7',
              'x = -1',
              'x = 1',
              'x = 14'
            ],
            solution: '5x - 8 = 3x + 6 → 5x - 3x = 6 + 8 → 2x = 14 → x = 7'
          }
        ]
      }
    },
    {
      id: '2p-4-ex2',
      type: 'exercise',
      exercise: {
        id: '2p-4-ex2',
        type: 'multiple-choice',
        task: 'Hva skjer med ulikhetstegnet når vi deler med -3?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar:',
            multipleChoiceOptions: [
              'Tegnet snur (< blir > og omvendt)',
              'Tegnet forblir det samme',
              'Ulikheten blir ugyldig',
              'Vi må gange med 3 først'
            ],
            solution: 'Når vi ganger eller deler med et negativt tall, må vi snu ulikhetstegnet. For eksempel: -3x > 9 gir x < -3 når vi deler med -3.'
          }
        ]
      }
    }
  ],
  exercises: []
};

export const CHAPTER_2P_5: TextbookChapter = {
  id: '2p-5',
  courseId: '2p',
  chapterNumber: '5',
  title: 'Funksjoner',
  description: 'Lineære funksjoner, andregradsfunksjoner og praktisk tolkning.',
  estimatedMinutes: 105,
  competenceGoals: [
    'bruke funksjoner til å modellere praktiske situasjoner',
    'tolke og vurdere funksjonsuttrykk og grafer'
  ],
  content: [
    {
      id: '2p-5-1',
      type: 'text',
      content: '## Funksjoner\n\nEn funksjon beskriver en sammenheng mellom to størrelser. Når x endrer seg, endrer y seg på en bestemt måte.\n\n### Lineære funksjoner\n\nEn lineær funksjon har formen:\n\n**f(x) = ax + b**\n\nder:\n- a er stigningstallet (hvor bratt grafen er)\n- b er konstantleddet (hvor grafen krysser y-aksen)'
    },
    {
      id: '2p-5-2',
      type: 'definition',
      title: 'Stigningstall',
      content: 'Stigningstallet a forteller hvor mye y øker når x øker med 1.\n\nStigningstall = Δy / Δx = (y₂ - y₁) / (x₂ - x₁)\n\n- Positivt stigningstall: grafen stiger\n- Negativt stigningstall: grafen synker\n- Stigningstall = 0: horisontal linje'
    },
    {
      id: '2p-5-3',
      type: 'example',
      title: 'Tolke lineær funksjon',
      content: '**Eksempel:** Et taxiselskap tar 50 kr i startpris og 12 kr per km.\n\nFunksjonen for prisen blir:\nf(x) = 12x + 50\n\nder x er antall km.\n\n**Tolkning:**\n- Stigningstallet 12 betyr at prisen øker med 12 kr per km\n- Konstantleddet 50 er startprisen\n\n**Pris for 8 km:** f(8) = 12 · 8 + 50 = 96 + 50 = 146 kr'
    },
    {
      id: '2p-5-4',
      type: 'text',
      content: '### Andregradsfunksjoner (parabeler)\n\nEn andregradsfunksjon har formen:\n\n**f(x) = ax² + bx + c**\n\nGrafen er en parabel.\n\n**Egenskaper:**\n- a > 0: Parabelen åpner oppover (smilemunn) - har et minimum\n- a < 0: Parabelen åpner nedover (surmunn) - har et maksimum\n- Symmetrilinje: x = -b/(2a)\n- Toppunkt/bunnpunkt: finnes ved å sette inn x-verdien i funksjonen'
    },
    {
      id: '2p-5-5',
      type: 'example',
      title: 'Finne toppunkt',
      content: '**Eksempel:** En ball kastes opp. Høyden er gitt ved h(t) = -5t² + 20t + 2 meter, der t er tid i sekunder.\n\n**Finn maks høyde:**\nSymmetrilinje: t = -20/(2·(-5)) = -20/(-10) = 2 sekunder\n\nMaks høyde: h(2) = -5·4 + 20·2 + 2 = -20 + 40 + 2 = 22 meter\n\nBallen når maksimal høyde på 22 meter etter 2 sekunder.'
    },
    {
      id: '2p-5-6',
      type: 'text',
      content: '### Nullpunkter\n\nNullpunktene til en funksjon er x-verdiene der f(x) = 0, altså der grafen krysser x-aksen.\n\n**For lineær funksjon:**\nax + b = 0 → x = -b/a\n\n**For andregradsfunksjon:**\nBruk abc-formelen:\nx = (-b ± √(b² - 4ac)) / (2a)'
    },
    {
      id: '2p-5-7',
      type: 'definition',
      title: 'ABC-formelen',
      content: 'For likningen ax² + bx + c = 0:\n\nx = (-b ± √(b² - 4ac)) / (2a)\n\nDiskriminanten D = b² - 4ac forteller antall løsninger:\n- D > 0: To løsninger\n- D = 0: Én løsning (dobbeltrot)\n- D < 0: Ingen reelle løsninger'
    },
    {
      id: '2p-5-8',
      type: 'example',
      title: 'Bruke abc-formelen',
      content: '**Eksempel:** Løs x² - 5x + 6 = 0\n\n**Løsning:**\na = 1, b = -5, c = 6\n\nDiskriminant: D = (-5)² - 4·1·6 = 25 - 24 = 1\n\nx = (5 ± √1) / 2 = (5 ± 1) / 2\n\nx₁ = (5 + 1)/2 = 3\nx₂ = (5 - 1)/2 = 2\n\n**Svar:** x = 2 eller x = 3'
    },
    {
      id: '2p-5-ex1',
      type: 'exercise',
      exercise: {
        id: '2p-5-ex1',
        type: 'multiple-choice',
        task: 'En funksjon er gitt ved f(x) = 3x - 6. Hva er nullpunktet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar:',
            multipleChoiceOptions: [
              'x = 2',
              'x = -2',
              'x = 6',
              'x = 3'
            ],
            solution: 'Nullpunkt: 3x - 6 = 0 → 3x = 6 → x = 2. Grafen krysser x-aksen når x = 2.'
          }
        ]
      }
    },
    {
      id: '2p-5-ex2',
      type: 'exercise',
      exercise: {
        id: '2p-5-ex2',
        type: 'multiple-choice',
        task: 'Funksjonen f(x) = -2x² + 8x har en parabel som graf. Hvor ligger toppunktet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar:',
            multipleChoiceOptions: [
              'x = 2',
              'x = -2',
              'x = 4',
              'x = 8'
            ],
            solution: 'Toppunkt når a < 0: x = -b/(2a) = -8/(2·(-2)) = -8/(-4) = 2'
          }
        ]
      }
    }
  ],
  exercises: []
};

export const CHAPTER_2P_6: TextbookChapter = {
  id: '2p-6',
  courseId: '2p',
  chapterNumber: '6',
  title: 'Statistikk',
  description: 'Sentralmål, spredningsmål og analyse av datasett.',
  estimatedMinutes: 95,
  competenceGoals: [
    'planlegge og gjennomføre statistiske undersøkelser',
    'beregne og tolke sentralmål og spredningsmål'
  ],
  content: [
    {
      id: '2p-6-1',
      type: 'text',
      content: '## Statistikk\n\nStatistikk handler om å samle inn, organisere og analysere data for å trekke konklusjoner.\n\n### Sentralmål\n\nSentralmål beskriver hvor \"sentrum\" av dataene ligger.\n\n**Gjennomsnitt (mean):** Sum av alle verdier delt på antall verdier\n\n**Median:** Den midterste verdien når dataene er sortert\n\n**Typetall (modus):** Den verdien som forekommer oftest'
    },
    {
      id: '2p-6-2',
      type: 'example',
      title: 'Beregne sentralmål',
      content: '**Datasett:** 3, 5, 5, 7, 8, 9, 15\n\n**Gjennomsnitt:**\n(3 + 5 + 5 + 7 + 8 + 9 + 15) / 7 = 52/7 ≈ 7,4\n\n**Median:**\nDet er 7 verdier, så medianen er den 4. verdien = 7\n\n**Typetall:**\n5 forekommer to ganger = typetallet er 5'
    },
    {
      id: '2p-6-3',
      type: 'tip',
      title: 'Når bruke hvilket sentralmål?',
      content: '- **Gjennomsnitt:** Best for symmetriske data uten ekstremverdier\n- **Median:** Best når det er ekstremverdier (f.eks. inntektsdata)\n- **Typetall:** Best for kategoriske data (f.eks. favorittfarge)'
    },
    {
      id: '2p-6-4',
      type: 'text',
      content: '### Spredningsmål\n\nSpredingsmål beskriver hvor spredt dataene er.\n\n**Variasjonsbredde:** Største verdi minus minste verdi\n\n**Kvartiler:**\n- Q₁ (første kvartil): Medianen av nedre halvdel\n- Q₂ (andre kvartil): Medianen\n- Q₃ (tredje kvartil): Medianen av øvre halvdel\n\n**Interkvartilbredde (IQR):** Q₃ - Q₁'
    },
    {
      id: '2p-6-5',
      type: 'definition',
      title: 'Standardavvik',
      content: 'Standardavviket måler gjennomsnittlig avstand fra gjennomsnittet.\n\nFormel: s = √(Σ(xᵢ - x̄)² / (n-1))\n\nLavt standardavvik = dataene ligger nær gjennomsnittet\nHøyt standardavvik = dataene er mer spredt'
    },
    {
      id: '2p-6-6',
      type: 'example',
      title: 'Beregne standardavvik',
      content: '**Datasett:** 4, 6, 8, 10, 12\n\n**Steg 1:** Gjennomsnitt x̄ = (4+6+8+10+12)/5 = 40/5 = 8\n\n**Steg 2:** Avvik fra gjennomsnittet:\n4-8 = -4, 6-8 = -2, 8-8 = 0, 10-8 = 2, 12-8 = 4\n\n**Steg 3:** Kvadrer avvikene:\n16, 4, 0, 4, 16\n\n**Steg 4:** Summer og del på (n-1):\n(16+4+0+4+16)/(5-1) = 40/4 = 10\n\n**Steg 5:** Ta kvadratroten:\ns = √10 ≈ 3,16'
    },
    {
      id: '2p-6-7',
      type: 'text',
      content: '### Boksplott\n\nEt boksplott (box-and-whisker plot) viser fordelingen av dataene grafisk.\n\n**Komponenter:**\n- Minimum (minste verdi eller nedre \"whisker\")\n- Q₁ (venstre kant av boksen)\n- Median (linje inni boksen)\n- Q₃ (høyre kant av boksen)\n- Maksimum (største verdi eller øvre \"whisker\")\n\nUtliggere vises ofte som separate punkter.'
    },
    {
      id: '2p-6-8',
      type: 'text',
      content: '### Statistiske diagrammer\n\n**Vanlige diagramtyper:**\n- **Søylediagram:** Sammenlikne kategorier\n- **Stolpediagram:** Vise frekvenser\n- **Sektordiagram:** Vise andeler av en helhet\n- **Linjediagram:** Vise utvikling over tid\n- **Histogram:** Vise fordeling av kontinuerlige data\n- **Punktdiagram:** Vise sammenheng mellom to variabler'
    },
    {
      id: '2p-6-ex1',
      type: 'exercise',
      exercise: {
        id: '2p-6-ex1',
        type: 'multiple-choice',
        task: 'Et datasett er: 2, 4, 4, 6, 8, 10, 100. Hvilket sentralmål gir best bilde av \"typisk\" verdi?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar:',
            multipleChoiceOptions: [
              'Median',
              'Gjennomsnitt',
              'Typetall',
              'Variasjonsbredde'
            ],
            solution: 'Median er best fordi 100 er en ekstremverdi som trekker gjennomsnittet kraftig opp. Medianen (6) gir et bedre bilde av de typiske verdiene.'
          }
        ]
      }
    },
    {
      id: '2p-6-ex2',
      type: 'exercise',
      exercise: {
        id: '2p-6-ex2',
        type: 'multiple-choice',
        task: 'Hva forteller et høyt standardavvik om datasettet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar:',
            multipleChoiceOptions: [
              'Verdiene er spredt langt fra gjennomsnittet',
              'Verdiene ligger tett rundt gjennomsnittet',
              'Gjennomsnittet er høyt',
              'Datasettet har mange verdier'
            ],
            solution: 'Høyt standardavvik betyr at verdiene i gjennomsnitt ligger langt fra gjennomsnittet, altså at dataene er spredt.'
          }
        ]
      }
    }
  ],
  exercises: []
};

export const CHAPTER_2P_7: TextbookChapter = {
  id: '2p-7',
  courseId: '2p',
  chapterNumber: '7',
  title: 'Sannsynlighet',
  description: 'Sannsynlighetsberegninger og kombinatorikk.',
  estimatedMinutes: 90,
  competenceGoals: [
    'beregne sannsynlighet ved å bruke systematiske metoder',
    'bruke sannsynlighet til å vurdere risiko og muligheter'
  ],
  content: [
    {
      id: '2p-7-1',
      type: 'text',
      content: '## Sannsynlighet\n\nSannsynlighet måler hvor stor sjanse det er for at noe skjer, på en skala fra 0 (umulig) til 1 (sikkert).\n\n### Grunnleggende begreper\n\n**Utfallsrom (S):** Mengden av alle mulige utfall\n\n**Hendelse:** En delmengde av utfallsrommet\n\n**Sannsynlighet:**\nP(A) = (antall gunstige utfall) / (antall mulige utfall)'
    },
    {
      id: '2p-7-2',
      type: 'example',
      title: 'Enkel sannsynlighet',
      content: '**Eksempel:** En terning kastes. Hva er sannsynligheten for å få et tall større enn 4?\n\n**Løsning:**\nUtfallsrom S = {1, 2, 3, 4, 5, 6} - 6 mulige utfall\nGunstige utfall (større enn 4) = {5, 6} - 2 utfall\n\nP(større enn 4) = 2/6 = 1/3 ≈ 0,33 = 33%'
    },
    {
      id: '2p-7-3',
      type: 'definition',
      title: 'Komplementsetningen',
      content: 'Sannsynligheten for at A IKKE skjer:\n\nP(A̅) = 1 - P(A)\n\nEksempel: Hvis P(regn) = 0,3, så er P(ikke regn) = 1 - 0,3 = 0,7'
    },
    {
      id: '2p-7-4',
      type: 'text',
      content: '### Addisjonssetningen\n\nFor to hendelser A og B:\n\n**P(A eller B) = P(A) + P(B) - P(A og B)**\n\nHvis A og B er uforenlige (kan ikke skje samtidig):\n**P(A eller B) = P(A) + P(B)**'
    },
    {
      id: '2p-7-5',
      type: 'example',
      title: 'Addisjonssetningen',
      content: '**Eksempel:** I en kortstokk (52 kort) trekkes ett kort. Hva er sannsynligheten for å trekke et ess ELLER et hjerterkort?\n\n**Løsning:**\nP(ess) = 4/52\nP(hjerter) = 13/52\nP(hjerter-ess) = 1/52 (telles i begge)\n\nP(ess eller hjerter) = 4/52 + 13/52 - 1/52 = 16/52 = 4/13 ≈ 0,31'
    },
    {
      id: '2p-7-6',
      type: 'text',
      content: '### Multiplikasjonssetningen\n\nFor uavhengige hendelser (den ene påvirker ikke den andre):\n\n**P(A og B) = P(A) · P(B)**\n\nFor avhengige hendelser (betinget sannsynlighet):\n**P(A og B) = P(A) · P(B|A)**\n\nder P(B|A) er sannsynligheten for B gitt at A har skjedd.'
    },
    {
      id: '2p-7-7',
      type: 'example',
      title: 'Multiplikasjonssetningen',
      content: '**Eksempel 1 (uavhengige):** To terninger kastes. Hva er sannsynligheten for to seksere?\n\nP(6 på begge) = P(6) · P(6) = 1/6 · 1/6 = 1/36\n\n**Eksempel 2 (avhengige):** Trekke to kort uten tilbakelegging. Sannsynlighet for to ess?\n\nP(ess først) = 4/52\nP(ess deretter | ess først) = 3/51\nP(to ess) = 4/52 · 3/51 = 12/2652 = 1/221'
    },
    {
      id: '2p-7-8',
      type: 'text',
      content: '### Valgtre\n\nEt valgtre (sannsynlighetstre) er et nyttig verktøy for å visualisere sammensatte forsøk.\n\n**Regler:**\n- Ved hver forgrening: summer av sannsynlighetene = 1\n- Langs en gren: gang sannsynlighetene sammen\n- For å finne P(hendelse): summer sannsynlighetene for alle grener som gir hendelsen'
    },
    {
      id: '2p-7-ex1',
      type: 'exercise',
      exercise: {
        id: '2p-7-ex1',
        type: 'multiple-choice',
        task: 'To terninger kastes. Hva er sannsynligheten for at summen blir 7?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar:',
            multipleChoiceOptions: [
              '6/36 = 1/6',
              '7/36',
              '2/36 = 1/18',
              '7/12'
            ],
            solution: 'Kombinasjoner som gir 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 gunstige av 36 mulige = 6/36 = 1/6'
          }
        ]
      }
    },
    {
      id: '2p-7-ex2',
      type: 'exercise',
      exercise: {
        id: '2p-7-ex2',
        type: 'multiple-choice',
        task: 'P(A) = 0,4 og P(B) = 0,3. Hvis A og B er uavhengige, hva er P(A og B)?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar:',
            multipleChoiceOptions: [
              '0,12',
              '0,70',
              '0,58',
              '0,10'
            ],
            solution: 'For uavhengige hendelser: P(A og B) = P(A) · P(B) = 0,4 · 0,3 = 0,12'
          }
        ]
      }
    }
  ],
  exercises: []
};

export const CHAPTER_2P_8: TextbookChapter = {
  id: '2p-8',
  courseId: '2p',
  chapterNumber: '8',
  title: 'Geometri',
  description: 'Areal, volum, Pytagoras og praktisk geometri.',
  estimatedMinutes: 100,
  competenceGoals: [
    'bruke geometri til å løse praktiske problemer',
    'beregne areal og volum av ulike figurer og legemer'
  ],
  content: [
    {
      id: '2p-8-1',
      type: 'text',
      content: '## Geometri i praksis\n\nGeometri brukes i mange yrker: arkitekter, snekkere, ingeniører og designere. Vi skal se på praktisk bruk av geometriske beregninger.\n\n### Areal av plane figurer\n\n**Trekant:** A = (g · h) / 2\n**Rektangel:** A = l · b\n**Sirkel:** A = π · r²\n**Trapes:** A = (a + b) · h / 2\n**Parallellogram:** A = g · h'
    },
    {
      id: '2p-8-2',
      type: 'example',
      title: 'Beregne areal',
      content: '**Eksempel:** Et rom har form som et rektangel med en halvsirkelformet utbygging. Rektangelet er 5 m × 4 m, og halvsirkelen har diameter 3 m. Finn arealet.\n\n**Løsning:**\nAreal rektangel = 5 · 4 = 20 m²\n\nHalvsirkel: radius = 3/2 = 1,5 m\nAreal halvsirkel = (π · 1,5²)/2 = (π · 2,25)/2 ≈ 3,53 m²\n\nTotalt areal ≈ 20 + 3,53 = 23,53 m²'
    },
    {
      id: '2p-8-3',
      type: 'definition',
      title: 'Pytagoras\' setning',
      content: 'I en rettvinklet trekant med kateter a og b og hypotenus c:\n\na² + b² = c²\n\nDette kan brukes til å finne:\n- Hypotenusen: c = √(a² + b²)\n- En katet: a = √(c² - b²)'
    },
    {
      id: '2p-8-4',
      type: 'example',
      title: 'Bruke Pytagoras',
      content: '**Eksempel:** En stige på 5 m står mot en vegg. Foten av stigen er 2 m fra veggen. Hvor høyt opp på veggen når stigen?\n\n**Løsning:**\nLa h = høyden på veggen\n\nEtter Pytagoras: 2² + h² = 5²\n4 + h² = 25\nh² = 21\nh = √21 ≈ 4,58 m\n\nStigen når ca. 4,6 m opp på veggen.'
    },
    {
      id: '2p-8-5',
      type: 'text',
      content: '### Volum\n\nVolum måler rominnhold og oppgis i kubikkenheter (cm³, m³, liter).\n\n**Formler:**\n- **Kube:** V = s³\n- **Rett prisme:** V = G · h (G = grunnflate)\n- **Sylinder:** V = π · r² · h\n- **Kjegle:** V = (π · r² · h) / 3\n- **Kule:** V = (4/3) · π · r³\n- **Pyramide:** V = G · h / 3'
    },
    {
      id: '2p-8-6',
      type: 'example',
      title: 'Beregne volum',
      content: '**Eksempel:** En sylinderformet beholder har radius 30 cm og høyde 50 cm. Hvor mange liter rommer den?\n\n**Løsning:**\nV = π · r² · h\nV = π · 30² · 50\nV = π · 900 · 50\nV = 45 000π cm³\nV ≈ 141 372 cm³\n\n1 liter = 1000 cm³\nV ≈ 141,4 liter'
    },
    {
      id: '2p-8-7',
      type: 'text',
      content: '### Overflate\n\nOverflaten er summen av alle flatene på et legeme.\n\n**Formler:**\n- **Kube:** O = 6s²\n- **Rett prisme:** O = 2G + (omkrets · h)\n- **Sylinder:** O = 2πr² + 2πrh = 2πr(r + h)\n- **Kule:** O = 4πr²'
    },
    {
      id: '2p-8-8',
      type: 'example',
      title: 'Praktisk anvendelse',
      content: '**Eksempel:** Du skal male et rom som er 4 m × 3 m med takhøyde 2,5 m. Rommet har en dør (2 m × 0,9 m) og et vindu (1,2 m × 1 m). Hvor mange m² skal males?\n\n**Løsning:**\nVeggareal (4 vegger): 2(4·2,5) + 2(3·2,5) = 20 + 15 = 35 m²\nTak: 4 · 3 = 12 m²\n\nFradrag:\nDør: 2 · 0,9 = 1,8 m²\nVindu: 1,2 · 1 = 1,2 m²\n\nAreal å male: 35 + 12 - 1,8 - 1,2 = 44 m²'
    },
    {
      id: '2p-8-ex1',
      type: 'exercise',
      exercise: {
        id: '2p-8-ex1',
        type: 'multiple-choice',
        task: 'En rettvinklet trekant har kateter 6 cm og 8 cm. Hvor lang er hypotenusen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar:',
            multipleChoiceOptions: [
              '10 cm',
              '14 cm',
              '7 cm',
              '100 cm'
            ],
            solution: 'Pytagoras: c² = 6² + 8² = 36 + 64 = 100, så c = √100 = 10 cm. Dette er en 3-4-5-trekant (ganget med 2).'
          }
        ]
      }
    },
    {
      id: '2p-8-ex2',
      type: 'exercise',
      exercise: {
        id: '2p-8-ex2',
        type: 'multiple-choice',
        task: 'En kule har radius 6 cm. Hva er volumet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar:',
            multipleChoiceOptions: [
              '288π cm³ ≈ 905 cm³',
              '144π cm³ ≈ 452 cm³',
              '72π cm³ ≈ 226 cm³',
              '36π cm³ ≈ 113 cm³'
            ],
            solution: 'V = (4/3)πr³ = (4/3)π · 6³ = (4/3)π · 216 = 288π cm³ ≈ 904,8 cm³'
          }
        ]
      }
    }
  ],
  exercises: []
};

export const CHAPTER_2P_9: TextbookChapter = {
  id: '2p-9',
  courseId: '2p',
  chapterNumber: '9',
  title: 'Måling og enheter',
  description: 'Enhetsomregning, måleusikkerhet og praktisk måling.',
  estimatedMinutes: 70,
  competenceGoals: [
    'gjøre målinger og vurdere måleusikkerhet',
    'bruke og omregne mellom ulike enheter'
  ],
  content: [
    {
      id: '2p-9-1',
      type: 'text',
      content: '## Måling og enheter\n\nI hverdagen og arbeidslivet må vi kunne håndtere ulike enheter og forstå usikkerhet i målinger.\n\n### SI-systemet\n\nSI-systemet er det internasjonale enhetssystemet:\n\n| Størrelse | Enhet | Symbol |\n|-----------|-------|--------|\n| Lengde | meter | m |\n| Masse | kilogram | kg |\n| Tid | sekund | s |\n| Temperatur | kelvin | K |\n| Strøm | ampere | A |'
    },
    {
      id: '2p-9-2',
      type: 'definition',
      title: 'Prefikser',
      content: 'Vanlige prefikser for å uttrykke store og små tall:\n\n- giga (G) = 10⁹ = 1 000 000 000\n- mega (M) = 10⁶ = 1 000 000\n- kilo (k) = 10³ = 1 000\n- milli (m) = 10⁻³ = 0,001\n- mikro (μ) = 10⁻⁶ = 0,000001\n- nano (n) = 10⁻⁹ = 0,000000001'
    },
    {
      id: '2p-9-3',
      type: 'text',
      content: '### Omregning mellom enheter\n\n**Lengde:**\n1 km = 1000 m\n1 m = 100 cm = 1000 mm\n1 mil (norsk) = 10 km\n1 tomme = 2,54 cm\n1 fot = 30,48 cm\n\n**Areal:**\n1 m² = 10 000 cm²\n1 km² = 1 000 000 m²\n1 mål = 1000 m² = 1 dekar\n1 hektar = 10 000 m² = 10 mål'
    },
    {
      id: '2p-9-4',
      type: 'example',
      title: 'Enhetsomregning',
      content: '**Eksempel 1:** Gjør om 3,5 km til meter.\n3,5 km = 3,5 · 1000 m = 3500 m\n\n**Eksempel 2:** Gjør om 45 000 cm² til m².\n45 000 cm² = 45 000 / 10 000 m² = 4,5 m²\n\n**Eksempel 3:** En tomt er 2,3 mål. Hvor mange m²?\n2,3 mål = 2,3 · 1000 m² = 2300 m²'
    },
    {
      id: '2p-9-5',
      type: 'text',
      content: '### Volum og væskeenheter\n\n**Volum:**\n1 m³ = 1000 liter = 1 000 000 cm³\n1 liter = 1 dm³ = 1000 ml = 1000 cm³\n1 dl = 0,1 liter = 100 ml\n\n**Masse:**\n1 tonn = 1000 kg\n1 kg = 1000 g\n1 g = 1000 mg'
    },
    {
      id: '2p-9-6',
      type: 'definition',
      title: 'Måleusikkerhet',
      content: 'Alle målinger har en usikkerhet. Usikkerheten angis ofte som ± en verdi.\n\nEksempel: 25,3 cm ± 0,1 cm betyr at den faktiske verdien ligger mellom 25,2 cm og 25,4 cm.\n\nUsikkerheten avhenger av måleinstrumentet og målemetoden.'
    },
    {
      id: '2p-9-7',
      type: 'tip',
      title: 'Tommelfingerregel for usikkerhet',
      content: 'Ved avlesing av analoge instrumenter (linjal, termometer) er usikkerheten ofte halve minste skalainndeling.\n\nEksempel: En linjal med mm-inndeling har usikkerhet ± 0,5 mm.'
    },
    {
      id: '2p-9-8',
      type: 'text',
      content: '### Hastighet og tid\n\n**Hastighet:**\n1 m/s = 3,6 km/t\n1 km/t = 1/3,6 m/s ≈ 0,278 m/s\n\n**Tid:**\n1 time = 60 minutter = 3600 sekunder\n1 døgn = 24 timer\n1 år ≈ 365,25 døgn'
    },
    {
      id: '2p-9-ex1',
      type: 'exercise',
      exercise: {
        id: '2p-9-ex1',
        type: 'multiple-choice',
        task: 'Gjør om 90 km/t til m/s.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar:',
            multipleChoiceOptions: [
              '25 m/s',
              '324 m/s',
              '15 m/s',
              '90 m/s'
            ],
            solution: '90 km/t = 90 / 3,6 m/s = 25 m/s. Del på 3,6 for å gå fra km/t til m/s.'
          }
        ]
      }
    },
    {
      id: '2p-9-ex2',
      type: 'exercise',
      exercise: {
        id: '2p-9-ex2',
        type: 'multiple-choice',
        task: 'Hvor mange liter er 0,5 m³?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar:',
            multipleChoiceOptions: [
              '500 liter',
              '50 liter',
              '5000 liter',
              '5 liter'
            ],
            solution: '1 m³ = 1000 liter, så 0,5 m³ = 0,5 · 1000 = 500 liter.'
          }
        ]
      }
    }
  ],
  exercises: []
};

export const CHAPTER_2P_10: TextbookChapter = {
  id: '2p-10',
  courseId: '2p',
  chapterNumber: '10',
  title: 'Modellering og problemløsning',
  description: 'Bruke matematikk til å modellere og løse praktiske problemer.',
  estimatedMinutes: 85,
  competenceGoals: [
    'bruke matematiske modeller til å beskrive og forstå praktiske situasjoner',
    'vurdere og kommunisere matematiske resonnementer'
  ],
  content: [
    {
      id: '2p-10-1',
      type: 'text',
      content: '## Matematisk modellering\n\nMatematisk modellering handler om å beskrive virkeligheten med matematikk. En modell er en forenklet beskrivelse som fanger de viktigste egenskapene.\n\n### Modelleringsprosessen\n\n1. **Forstå problemet:** Hva skal vi finne ut?\n2. **Forenkle:** Hvilke antakelser gjør vi?\n3. **Lag modellen:** Velg matematiske verktøy\n4. **Løs:** Gjør beregningene\n5. **Vurder:** Er svaret rimelig? Stemmer det med virkeligheten?'
    },
    {
      id: '2p-10-2',
      type: 'example',
      title: 'Lineær modell',
      content: '**Problem:** En bil bruker 0,7 liter bensin per mil. Tanken rommer 50 liter.\n\n**Modell:** La x = antall mil kjørt\nBensin igjen: f(x) = 50 - 0,7x\n\n**Bruk modellen:**\n- Hvor langt kan bilen kjøre? 50 - 0,7x = 0 → x ≈ 71 mil\n- Hvor mye bensin er igjen etter 30 mil? f(30) = 50 - 21 = 29 liter\n\n**Vurdering:** Modellen forutsetter konstant forbruk. I virkeligheten varierer det med kjøreforhold.'
    },
    {
      id: '2p-10-3',
      type: 'text',
      content: '### Eksponentiell vekst og nedbrytning\n\nMange prosesser følger eksponentiell vekst eller nedbrytning:\n\n**Vekst:** N(t) = N₀ · a^t der a > 1\n**Nedbrytning:** N(t) = N₀ · a^t der 0 < a < 1\n\n- N₀ = startverdien\n- a = vekstfaktor per tidsenhet\n- t = tid'
    },
    {
      id: '2p-10-4',
      type: 'example',
      title: 'Befolkningsvekst',
      content: '**Problem:** En by har 50 000 innbyggere og vokser med 2% per år. Hvor mange innbyggere er det om 10 år?\n\n**Modell:** N(t) = 50 000 · 1,02^t\n\n**Løsning:**\nN(10) = 50 000 · 1,02^10\n       = 50 000 · 1,219\n       ≈ 60 950 innbyggere\n\n**Vurdering:** Modellen forutsetter konstant vekstrate, noe som sjelden stemmer over lang tid.'
    },
    {
      id: '2p-10-5',
      type: 'definition',
      title: 'Halveringstid',
      content: 'Halveringstiden er tiden det tar før en mengde er halvert.\n\nFor nedbrytning med faktor a per tidsenhet:\nHalveringstid T½ slik at a^T½ = 0,5\n\nT½ = ln(0,5) / ln(a) = -0,693 / ln(a)'
    },
    {
      id: '2p-10-6',
      type: 'example',
      title: 'Verdifall',
      content: '**Problem:** En bil kjøpt for 400 000 kr synker i verdi med 15% per år. Når er bilen verdt halvparten?\n\n**Modell:** V(t) = 400 000 · 0,85^t\n\n**Finn halveringstid:**\n400 000 · 0,85^t = 200 000\n0,85^t = 0,5\n\nVed prøving: 0,85^4 ≈ 0,52 og 0,85^5 ≈ 0,44\n\nHalveringstiden er mellom 4 og 5 år (nærmere bestemt ca. 4,3 år).'
    },
    {
      id: '2p-10-7',
      type: 'text',
      content: '### Problemløsningsstrategier\n\n**Nyttige strategier:**\n1. **Tegn en figur:** Visualiser problemet\n2. **Lag en tabell:** Organiser informasjon\n3. **Prøv med enkle tall:** Test forståelsen\n4. **Jobb baklengs:** Start med svaret\n5. **Del opp problemet:** Løs én bit om gangen\n6. **Sjekk svaret:** Er det rimelig?'
    },
    {
      id: '2p-10-8',
      type: 'tip',
      title: 'Kommunisere matematikk',
      content: 'Når du presenterer en løsning:\n- Forklar hva variablene betyr\n- Vis utregningene steg for steg\n- Begrunn valgene du gjør\n- Vurder om svaret er rimelig\n- Kommenter begrensninger ved modellen'
    },
    {
      id: '2p-10-ex1',
      type: 'exercise',
      exercise: {
        id: '2p-10-ex1',
        type: 'multiple-choice',
        task: 'En befolkning vokser med 3% per år. Hvor lang tid tar det før befolkningen er doblet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det nærmeste svaret:',
            multipleChoiceOptions: [
              'Ca. 23 år',
              'Ca. 33 år',
              'Ca. 50 år',
              'Ca. 10 år'
            ],
            solution: 'Tommelfingerregel: 70/vekstprosent ≈ doblingstid. 70/3 ≈ 23 år. Eksakt: ln(2)/ln(1,03) ≈ 23,4 år.'
          }
        ]
      }
    },
    {
      id: '2p-10-ex2',
      type: 'exercise',
      exercise: {
        id: '2p-10-ex2',
        type: 'multiple-choice',
        task: 'Hva er det første steget i matematisk modellering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar:',
            multipleChoiceOptions: [
              'Forstå problemet',
              'Sette opp en likning',
              'Gjøre beregninger',
              'Tegne en graf'
            ],
            solution: 'Det første steget er alltid å forstå problemet - hva skal vi finne ut, og hvilken informasjon har vi?'
          }
        ]
      }
    }
  ],
  exercises: []
};

// Eksporter alle kapitler
export const MATEMATIKK_2P_CHAPTERS: TextbookChapter[] = [
  CHAPTER_2P_1,
  CHAPTER_2P_2,
  CHAPTER_2P_3,
  CHAPTER_2P_4,
  CHAPTER_2P_5,
  CHAPTER_2P_6,
  CHAPTER_2P_7,
  CHAPTER_2P_8,
  CHAPTER_2P_9,
  CHAPTER_2P_10
];
