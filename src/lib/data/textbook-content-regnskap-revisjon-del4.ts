/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Regnskap og revisjon (VG3) - DEL 4
 * Seksjon 4: Balanse (Kapittel 4.1–4.5)
 *
 * LK20 kompetansemål:
 * - sette opp og analysere en balanse i samsvar med gjeldende regnskapsregler
 * - gjøre rede for ulike poster i balansen og forklare sammenhengen mellom eiendeler, gjeld og egenkapital
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 4.1: Balanselikningen og oppstilling
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_4_1: TextbookChapter = {
  id: 'regnskap-revisjon-4-1',
  courseId: 'regnskap-revisjon',
  chapterNumber: '4.1',
  title: 'Balanselikningen og oppstilling',
  description: 'Sammenhengen mellom eiendeler, gjeld og egenkapital, balansens oppbygging etter regnskapsloven, og hvordan transaksjoner påvirker balansen.',
  estimatedMinutes: 20,
  competenceGoals: [
    'sette opp og analysere en balanse i samsvar med gjeldende regnskapsregler',
    'gjøre rede for ulike poster i balansen og forklare sammenhengen mellom eiendeler, gjeld og egenkapital',
  ],
  content: [
    {
      id: 'rr-4-1-intro',
      type: 'text',
      content: `## Hva er en balanse?

Balansen er en oversikt over en virksomhets økonomiske stilling på et bestemt tidspunkt. Den viser hva virksomheten eier (eiendeler), hva den skylder (gjeld) og hva eierne har skutt inn og tjent opp (egenkapital).

Mens resultatregnskapet viser lønnsomheten over en periode, er balansen et øyeblikksbilde — et «fotografi» av virksomhetens finansielle situasjon per en bestemt dato, typisk 31. desember.

**I dette kapittelet skal du lære:**
- Balanselikningen og hvorfor den alltid stemmer
- Balansens oppstilling etter regnskapsloven
- Hvordan ulike transaksjoner påvirker balansen`,
    },
    {
      id: 'rr-4-1-def-balanse',
      type: 'definition',
      title: 'Balanselikningen',
      content: `Balanselikningen uttrykker den grunnleggende sammenhengen:

$$\\text{Eiendeler} = \\text{Gjeld} + \\text{Egenkapital}$$

Denne likningen stemmer alltid, fordi alle eiendeler er finansiert enten av fremmedkapital (gjeld) eller av eiernes kapital (egenkapital). Likningen kan også skrives som:

$$\\text{Egenkapital} = \\text{Eiendeler} - \\text{Gjeld}$$`,
    },
    {
      id: 'rr-4-1-oppstilling',
      type: 'text',
      content: `## Balansens oppstilling

Etter regnskapsloven § 6-2 skal balansen stilles opp med **eiendeler** på den ene siden og **egenkapital og gjeld** på den andre. I praksis presenteres dette ofte vertikalt:

**Eiendeler (debet-siden):**
1. **Anleggsmidler** — eiendeler som er bestemt til varig eie eller bruk
   - Immaterielle eiendeler (goodwill, patenter)
   - Varige driftsmidler (maskiner, bygninger, inventar)
   - Finansielle anleggsmidler (langsiktige investeringer)

2. **Omløpsmidler** — eiendeler som forventes realisert innen ett år
   - Varelager
   - Kundefordringer
   - Bankinnskudd og kontanter

**Egenkapital og gjeld (kredit-siden):**
1. **Egenkapital** — innskutt og opptjent egenkapital
2. **Langsiktig gjeld** — gjeld med forfall mer enn ett år frem
3. **Kortsiktig gjeld** — gjeld med forfall innen ett år`,
    },
    {
      id: 'rr-4-1-eks-oppstilling',
      type: 'example',
      title: 'Eksempel: Enkel balanse for Nordvik AS',
      problem: 'Nordvik AS har følgende poster per 31.12: Varige driftsmidler 800 000 kr, varelager 150 000 kr, kundefordringer 120 000 kr, bankinnskudd 230 000 kr, aksjekapital 500 000 kr, opptjent egenkapital 200 000 kr, langsiktig gjeld 400 000 kr og leverandørgjeld 200 000 kr. Sett opp balansen og kontroller at balanselikningen stemmer.',
      solution: `**Balanse for Nordvik AS per 31.12:**

| **Eiendeler** | **kr** | **Egenkapital og gjeld** | **kr** |
|---|---|---|---|
| Varige driftsmidler | 800 000 | Aksjekapital | 500 000 |
| Varelager | 150 000 | Opptjent egenkapital | 200 000 |
| Kundefordringer | 120 000 | Langsiktig gjeld | 400 000 |
| Bankinnskudd | 230 000 | Leverandørgjeld | 200 000 |
| **Sum eiendeler** | **1 300 000** | **Sum EK og gjeld** | **1 300 000** |

**Kontroll av balanselikningen:**
$$\\text{Eiendeler} = 800\\,000 + 150\\,000 + 120\\,000 + 230\\,000 = 1\\,300\\,000$$
$$\\text{Gjeld} + \\text{EK} = (400\\,000 + 200\\,000) + (500\\,000 + 200\\,000) = 1\\,300\\,000$$
$$1\\,300\\,000 = 1\\,300\\,000 \\quad \\checkmark$$`,
    },
    {
      id: 'rr-4-1-transaksjoner',
      type: 'text',
      content: `## Hvordan transaksjoner påvirker balansen

Enhver transaksjon påvirker minst to poster i balansen, slik at balanselikningen alltid opprettholdes. Tre typiske mønstre:

1. **Eiendelsbytte:** Én eiendel øker, en annen synker (f.eks. kjøp av varer mot kontant betaling).
2. **Økning på begge sider:** Eiendeler øker og gjeld eller egenkapital øker (f.eks. opptak av lån).
3. **Reduksjon på begge sider:** Eiendeler synker og gjeld synker (f.eks. betaling av leverandørgjeld).`,
    },
    {
      id: 'rr-4-1-eks-transaksjon',
      type: 'example',
      title: 'Eksempel: Transaksjoners effekt på balansen',
      content: `Nordvik AS gjennomfører tre transaksjoner:

**1. Kjøper varer på kreditt for 40 000 kr:**
- Varelager øker med 40 000 kr (eiendel opp)
- Leverandørgjeld øker med 40 000 kr (gjeld opp)
- Begge sider øker likt — balansen stemmer.

**2. Betaler leverandørgjeld med 60 000 kr fra bank:**
- Bankinnskudd synker med 60 000 kr (eiendel ned)
- Leverandørgjeld synker med 60 000 kr (gjeld ned)
- Begge sider synker likt — balansen stemmer.

**3. Tar opp banklån på 200 000 kr:**
- Bankinnskudd øker med 200 000 kr (eiendel opp)
- Langsiktig gjeld øker med 200 000 kr (gjeld opp)
- Begge sider øker likt — balansen stemmer.`,
    },
    {
      id: 'rr-4-1-note',
      type: 'note',
      title: 'Husk: Balansen er alltid i balanse',
      content: `Uansett hvor mange transaksjoner som gjennomføres, vil summen av eiendelene alltid være lik summen av egenkapital og gjeld. Hvis balansen din ikke stemmer, har du gjort en feil — enten er en postering feil, eller en transaksjon er utelatt.`,
    },
    {
      id: 'rr-4-1-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rr-4-1-oppg-1',
        number: '4.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken likning uttrykker balanselikningen korrekt?',
        options: [
          { id: 'a', text: 'Eiendeler = Gjeld − Egenkapital', isCorrect: false },
          { id: 'b', text: 'Eiendeler + Gjeld = Egenkapital', isCorrect: false },
          { id: 'c', text: 'Eiendeler = Gjeld + Egenkapital', isCorrect: true },
          { id: 'd', text: 'Gjeld = Eiendeler + Egenkapital', isCorrect: false },
        ],
        solution: 'Balanselikningen sier at Eiendeler = Gjeld + Egenkapital. Alt virksomheten eier (eiendeler) er finansiert enten med lånte penger (gjeld) eller eiernes kapital (egenkapital).',
      },
    },
    {
      id: 'rr-4-1-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rr-4-1-oppg-2',
        number: '4.1.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En virksomhet kjøper en maskin for 250 000 kr finansiert med banklån. Hvordan påvirkes balansen?',
        options: [
          { id: 'a', text: 'Eiendeler øker, gjeld er uendret', isCorrect: false },
          { id: 'b', text: 'Eiendeler øker med 250 000, gjeld øker med 250 000', isCorrect: true },
          { id: 'c', text: 'Eiendeler er uendret, gjeld øker med 250 000', isCorrect: false },
          { id: 'd', text: 'Eiendeler øker med 250 000, egenkapital synker med 250 000', isCorrect: false },
        ],
        solution: 'Maskinen er en eiendel som øker med 250 000 kr. Banklånet er gjeld som også øker med 250 000 kr. Begge sider av balansen øker like mye, og balanselikningen er fortsatt oppfylt.',
      },
    },
    {
      id: 'rr-4-1-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rr-4-1-oppg-3',
        number: '4.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fjordtekst AS har eiendeler på 2 400 000 kr og gjeld på 1 500 000 kr. a) Beregn egenkapitalen. b) Egenkapitalandelen viser forholdet mellom egenkapital og totalkapital (eiendeler). Beregn egenkapitalandelen i prosent. c) Vurder om egenkapitalandelen er tilfredsstillende.',
        hints: ['Egenkapitalandel = Egenkapital / Totalkapital × 100 %'],
        solution: `**a) Egenkapital:**
$$\\text{EK} = \\text{Eiendeler} - \\text{Gjeld} = 2\\,400\\,000 - 1\\,500\\,000 = 900\\,000 \\text{ kr}$$

**b) Egenkapitalandel:**
$$\\frac{900\\,000}{2\\,400\\,000} \\times 100\\% = 37.5\\%$$

**c) Vurdering:**
En egenkapitalandel på 37,5 % anses som akseptabel for de fleste bransjer. Hovedregelen er at egenkapitalandelen bør være over 30 %. Jo høyere andel, desto mer solid er virksomheten og desto bedre tåler den tap.`,
      },
    },
    {
      id: 'rr-4-1-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rr-4-1-oppg-4',
        number: '4.1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Havbris AS har følgende poster per 31.12: Bygninger 1 200 000 kr, maskiner 450 000 kr, varelager 180 000 kr, kundefordringer 95 000 kr, bankinnskudd 275 000 kr, aksjekapital 600 000 kr, overkursfond 150 000 kr, opptjent egenkapital 350 000 kr, pantelån 800 000 kr, leverandørgjeld 180 000 kr, skyldig skattetrekk 120 000 kr. a) Sett opp balansen. b) Kontroller at balanselikningen stemmer.',
        solution: `**a) Balanse for Havbris AS per 31.12:**

**Eiendeler:**
Anleggsmidler:
- Bygninger: 1 200 000 kr
- Maskiner: 450 000 kr
Sum anleggsmidler: 1 650 000 kr

Omløpsmidler:
- Varelager: 180 000 kr
- Kundefordringer: 95 000 kr
- Bankinnskudd: 275 000 kr
Sum omløpsmidler: 550 000 kr

**Sum eiendeler: 2 200 000 kr**

**Egenkapital og gjeld:**
Egenkapital:
- Aksjekapital: 600 000 kr
- Overkursfond: 150 000 kr
- Opptjent egenkapital: 350 000 kr
Sum egenkapital: 1 100 000 kr

Langsiktig gjeld:
- Pantelån: 800 000 kr

Kortsiktig gjeld:
- Leverandørgjeld: 180 000 kr
- Skyldig skattetrekk: 120 000 kr
Sum kortsiktig gjeld: 300 000 kr

**Sum egenkapital og gjeld: 2 200 000 kr**

**b) Kontroll:**
$$\\text{Eiendeler} = 1\\,650\\,000 + 550\\,000 = 2\\,200\\,000$$
$$\\text{EK + Gjeld} = 1\\,100\\,000 + 800\\,000 + 300\\,000 = 2\\,200\\,000$$
$$2\\,200\\,000 = 2\\,200\\,000 \\quad \\checkmark$$`,
      },
    },
    {
      id: 'rr-4-1-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rr-4-1-oppg-5',
        number: '4.1.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vestfjord AS har en balanse der sum eiendeler er 3 600 000 kr og egenkapitalen er 1 200 000 kr. I løpet av januar skjer følgende: (1) Selskapet tar opp et nytt banklån på 500 000 kr. (2) De kjøper en maskin for 700 000 kr kontant. (3) De betaler leverandørgjeld på 150 000 kr fra bank. Sett opp ny balanselikning etter alle tre transaksjonene.',
        hints: ['Analyser hver transaksjon for seg og se hvordan den påvirker eiendeler, gjeld og egenkapital.'],
        solution: `**Utgangspunkt:**
Eiendeler = 3 600 000, EK = 1 200 000, Gjeld = 3 600 000 − 1 200 000 = 2 400 000

**Transaksjon 1: Nytt banklån 500 000 kr**
- Bank (eiendel) +500 000
- Langsiktig gjeld +500 000
- Eiendeler = 4 100 000, Gjeld = 2 900 000

**Transaksjon 2: Kjøp maskin 700 000 kontant**
- Maskiner (eiendel) +700 000
- Bank (eiendel) −700 000
- Eiendeler = 4 100 000 (eiendelsbytte, netto uendret)

**Transaksjon 3: Betaler leverandørgjeld 150 000**
- Bank (eiendel) −150 000
- Leverandørgjeld (gjeld) −150 000
- Eiendeler = 3 950 000, Gjeld = 2 750 000

**Ny balanselikning:**
$$\\text{Eiendeler} = \\text{Gjeld} + \\text{EK}$$
$$3\\,950\\,000 = 2\\,750\\,000 + 1\\,200\\,000 = 3\\,950\\,000 \\quad \\checkmark$$

Egenkapitalen er uendret fordi ingen av transaksjonene var inntekter eller kostnader.`,
      },
    },
    {
      id: 'rr-4-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 4.1

- **Balansen** viser virksomhetens økonomiske stilling på et bestemt tidspunkt.
- **Balanselikningen:** Eiendeler = Gjeld + Egenkapital. Denne stemmer alltid.
- Eiendeler deles inn i **anleggsmidler** (varig eie) og **omløpsmidler** (realiseres innen ett år).
- Egenkapital og gjeld deles inn i **egenkapital**, **langsiktig gjeld** og **kortsiktig gjeld**.
- Enhver transaksjon påvirker minst to poster, slik at balanselikningen opprettholdes.
- **Egenkapitalandelen** (EK / Totalkapital) bør normalt være over 30 %.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Balanse', definition: 'Oversikt over virksomhetens eiendeler, gjeld og egenkapital på et bestemt tidspunkt.' },
    { term: 'Balanselikningen', definition: 'Eiendeler = Gjeld + Egenkapital. Grunnprinsippet som alltid gjelder.' },
    { term: 'Anleggsmidler', definition: 'Eiendeler bestemt til varig eie eller bruk i virksomheten (mer enn ett år).' },
    { term: 'Omløpsmidler', definition: 'Eiendeler som forventes realisert eller brukt opp innen ett år.' },
    { term: 'Egenkapitalandel', definition: 'Egenkapital delt på totalkapital, uttrykt i prosent. Mål på finansiell soliditet.' },
  ],
};

// ============================================================================
// KAPITTEL 4.2: Anleggsmidler og avskrivninger
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_4_2: TextbookChapter = {
  id: 'regnskap-revisjon-4-2',
  courseId: 'regnskap-revisjon',
  chapterNumber: '4.2',
  title: 'Anleggsmidler og avskrivninger',
  description: 'Varige driftsmidler, lineær og saldoavskrivning med konkrete beregninger, nedskrivning, og regnskapsmessig behandling av anleggsmidler.',
  estimatedMinutes: 24,
  competenceGoals: [
    'gjøre rede for ulike poster i balansen og forklare sammenhengen mellom eiendeler, gjeld og egenkapital',
    'beregne avskrivninger og forklare betydningen av avskrivninger i regnskapet',
  ],
  content: [
    {
      id: 'rr-4-2-intro',
      type: 'text',
      content: `## Hva er anleggsmidler?

Anleggsmidler er eiendeler som er bestemt til varig eie eller bruk i virksomheten. De forventes å ha en levetid på mer enn ett regnskapsår. Typiske anleggsmidler er maskiner, kjøretøy, bygninger, inventar og datautstyr.

Fordi anleggsmidler brukes over flere år, skal kostprisen fordeles over levetiden gjennom **avskrivninger**. Avskrivninger er en systematisk fordeling av et anleggsmiddels anskaffelseskost over den økonomiske levetiden.

**I dette kapittelet skal du lære:**
- Hva som kjennetegner varige driftsmidler
- Lineær avskrivning og saldoavskrivning
- Nedskrivning vs. avskrivning
- Bokført verdi og restverdi`,
    },
    {
      id: 'rr-4-2-def-avskrivning',
      type: 'definition',
      title: 'Avskrivning',
      content: `**Avskrivning** er den planmessige fordelingen av et anleggsmiddels anskaffelseskost (minus eventuell restverdi) over den estimerte økonomiske levetiden.

Avskrivning er en **kostnad** i resultatregnskapet og en **reduksjon** av bokført verdi i balansen. Avskrivninger påvirker ikke likviditeten — det er en regnskapsmessig kostnad, ikke en utbetaling.`,
    },
    {
      id: 'rr-4-2-lineaer',
      type: 'text',
      content: `## Lineær avskrivning

Ved lineær avskrivning fordeles anskaffelseskosten (minus eventuell restverdi) jevnt over levetiden. Hvert år avskrives det samme beløpet.

$$\\text{Årlig avskrivning} = \\frac{\\text{Anskaffelseskost} - \\text{Restverdi}}{\\text{Levetid i år}}$$

Lineær avskrivning er den mest brukte metoden i praksis og gir en jevn kostnad i resultatregnskapet.`,
    },
    {
      id: 'rr-4-2-eks-lineaer',
      type: 'example',
      title: 'Eksempel: Lineær avskrivning av varebil',
      problem: 'Fjordtransport AS kjøper en varebil for 480 000 kr. Estimert levetid er 8 år, og forventet restverdi ved utløpet av levetiden er 80 000 kr. Beregn årlig avskrivning og bokført verdi etter 3 år.',
      solution: `**Årlig avskrivning:**
$$\\frac{480\\,000 - 80\\,000}{8} = \\frac{400\\,000}{8} = 50\\,000 \\text{ kr per år}$$

**Avskrivningsplan (utdrag):**

| År | Avskrivning | Akkumulert avskrivning | Bokført verdi |
|---|---|---|---|
| 0 (kjøp) | — | — | 480 000 |
| 1 | 50 000 | 50 000 | 430 000 |
| 2 | 50 000 | 100 000 | 380 000 |
| 3 | 50 000 | 150 000 | 330 000 |

**Bokført verdi etter 3 år:**
$$480\\,000 - (3 \\times 50\\,000) = 480\\,000 - 150\\,000 = 330\\,000 \\text{ kr}$$`,
    },
    {
      id: 'rr-4-2-saldo',
      type: 'text',
      content: `## Saldoavskrivning

Ved saldoavskrivning beregnes avskrivningen som en fast prosent av **bokført verdi** ved inngangen til hvert år. Avskrivningsbeløpet blir størst i begynnelsen og synker gradvis.

$$\\text{Avskrivning i år } n = \\text{Bokført verdi ved årets start} \\times \\text{Avskrivningssats}$$

Saldoavskrivning brukes i skattesammenheng (saldogrupper etter skatteloven). Metoden gir høyere avskrivninger de første årene, noe som gir lavere skattbart resultat tidlig.`,
    },
    {
      id: 'rr-4-2-eks-saldo',
      type: 'example',
      title: 'Eksempel: Saldoavskrivning av maskin',
      problem: 'Industrimek AS kjøper en produksjonsmaskin for 600 000 kr. Avskrivningssatsen er 20 % (saldoavskrivning). Beregn avskrivning og bokført verdi for de tre første årene.',
      solution: `**År 1:**
Avskrivning: $600\\,000 \\times 0{,}20 = 120\\,000$ kr
Bokført verdi: $600\\,000 - 120\\,000 = 480\\,000$ kr

**År 2:**
Avskrivning: $480\\,000 \\times 0{,}20 = 96\\,000$ kr
Bokført verdi: $480\\,000 - 96\\,000 = 384\\,000$ kr

**År 3:**
Avskrivning: $384\\,000 \\times 0{,}20 = 76\\,800$ kr
Bokført verdi: $384\\,000 - 76\\,800 = 307\\,200$ kr

**Sammenligning med lineær avskrivning (over 5 år uten restverdi):**
Lineær: $600\\,000 / 5 = 120\\,000$ kr hvert år.

Merk at ved saldoavskrivning er avskrivningen størst i år 1 (120 000 kr) og synker deretter, mens lineær gir 120 000 kr hvert år.`,
    },
    {
      id: 'rr-4-2-nedskrivning',
      type: 'text',
      content: `## Nedskrivning

Nedskrivning er en uplanlagt reduksjon av bokført verdi når den **virkelige verdien** er vesentlig lavere enn bokført verdi. Dette kan skyldes skade, teknologisk utvikling eller endrede markedsforhold.

**Forskjell mellom avskrivning og nedskrivning:**
- **Avskrivning** er planlagt og skjer systematisk hvert år
- **Nedskrivning** er uplanlagt og skjer kun når det er et verdifall

Nedskrivning er en kostnad i resultatregnskapet og reduserer bokført verdi i balansen. Hvis forholdene endrer seg, kan nedskrivningen reverseres (men aldri over opprinnelig bokført verdi).`,
    },
    {
      id: 'rr-4-2-eks-nedskrivning',
      type: 'example',
      title: 'Eksempel: Nedskrivning av spesialisert utstyr',
      content: `Nordtech AS har en spesialisert maskin med bokført verdi 350 000 kr. På grunn av ny teknologi har maskinens virkelige verdi sunket til 200 000 kr.

**Nedskrivning:**
$$350\\,000 - 200\\,000 = 150\\,000 \\text{ kr}$$

Ny bokført verdi: 200 000 kr. Nedskrivningen på 150 000 kr føres som kostnad i resultatregnskapet.

Fremtidige avskrivninger beregnes nå ut fra den nye bokførte verdien (200 000 kr) over gjenværende levetid.`,
    },
    {
      id: 'rr-4-2-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rr-4-2-oppg-1',
        number: '4.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er formålet med avskrivninger?',
        options: [
          { id: 'a', text: 'Å spare penger til å kjøpe nytt utstyr', isCorrect: false },
          { id: 'b', text: 'Å fordele anskaffelseskosten over eiendelens økonomiske levetid', isCorrect: true },
          { id: 'c', text: 'Å øke verdien av eiendelen i balansen', isCorrect: false },
          { id: 'd', text: 'Å redusere egenkapitalen direkte', isCorrect: false },
        ],
        solution: 'Avskrivninger er den planmessige fordelingen av anskaffelseskosten over den estimerte økonomiske levetiden. Det er et regnskapsprinsipp (sammenstillingsprinsippet) som sikrer at kostnaden belastes de periodene eiendelen bidrar til inntjening.',
      },
    },
    {
      id: 'rr-4-2-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rr-4-2-oppg-2',
        number: '4.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Berghagen AS kjøper kontormøbler for 120 000 kr. Estimert levetid er 10 år og restverdi er 0 kr. a) Beregn årlig lineær avskrivning. b) Hva er bokført verdi etter 4 år? c) Etter 6 år selges møblene for 30 000 kr. Beregn gevinst eller tap ved salget.',
        hints: ['Gevinst/tap = Salgssum − Bokført verdi på salgstidspunktet'],
        solution: `**a) Årlig avskrivning:**
$$\\frac{120\\,000 - 0}{10} = 12\\,000 \\text{ kr per år}$$

**b) Bokført verdi etter 4 år:**
$$120\\,000 - (4 \\times 12\\,000) = 120\\,000 - 48\\,000 = 72\\,000 \\text{ kr}$$

**c) Gevinst/tap ved salg etter 6 år:**
Bokført verdi etter 6 år: $120\\,000 - (6 \\times 12\\,000) = 48\\,000$ kr
Salgssum: 30 000 kr
$$\\text{Tap} = 30\\,000 - 48\\,000 = -18\\,000 \\text{ kr}$$

Salget gir et **tap på 18 000 kr**. Tapet føres som kostnad i resultatregnskapet.`,
      },
    },
    {
      id: 'rr-4-2-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rr-4-2-oppg-3',
        number: '4.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Kystlogistikk AS kjøper en lastebil for 900 000 kr. Skattemessig avskrivningssats er 20 % (saldoavskrivning). Beregn skattemessig avskrivning og bokført verdi for hvert av de fire første årene.',
        solution: `| År | Bokført verdi (start) | Avskrivning (20 %) | Bokført verdi (slutt) |
|---|---|---|---|
| 1 | 900 000 | 180 000 | 720 000 |
| 2 | 720 000 | 144 000 | 576 000 |
| 3 | 576 000 | 115 200 | 460 800 |
| 4 | 460 800 | 92 160 | 368 640 |

**Beregning:**
År 1: $900\\,000 \\times 0{,}20 = 180\\,000$
År 2: $720\\,000 \\times 0{,}20 = 144\\,000$
År 3: $576\\,000 \\times 0{,}20 = 115\\,200$
År 4: $460\\,800 \\times 0{,}20 = 92\\,160$

Merk at avskrivningsbeløpet synker hvert år, men bokført verdi blir aldri null ved saldoavskrivning.`,
      },
    },
    {
      id: 'rr-4-2-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rr-4-2-oppg-4',
        number: '4.2.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er forskjellen mellom avskrivning og nedskrivning?',
        options: [
          { id: 'a', text: 'Avskrivning er planlagt og systematisk, nedskrivning er uplanlagt ved varig verdifall', isCorrect: true },
          { id: 'b', text: 'Avskrivning gjelder kun bygninger, nedskrivning gjelder alt annet', isCorrect: false },
          { id: 'c', text: 'Avskrivning øker bokført verdi, nedskrivning reduserer den', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell — begrepene brukes om hverandre', isCorrect: false },
        ],
        solution: 'Avskrivning er den planlagte, systematiske fordelingen av kostpris over levetiden. Nedskrivning er en uplanlagt reduksjon som gjøres når virkelig verdi er vesentlig lavere enn bokført verdi, for eksempel på grunn av skade eller teknologisk utvikling.',
      },
    },
    {
      id: 'rr-4-2-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rr-4-2-oppg-5',
        number: '4.2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Fjordproduksjon AS kjøper en maskin for 750 000 kr med estimert levetid 10 år og restverdi 50 000 kr (lineær avskrivning). Etter 4 år oppdager de at maskinen har en virkelig verdi på kun 300 000 kr og gjenværende levetid er 4 år (restverdi 0 kr). a) Beregn årlig avskrivning de første 4 årene. b) Beregn bokført verdi etter 4 år (før nedskrivning). c) Beregn nedskrivningsbeløpet. d) Beregn ny årlig avskrivning for de gjenværende 4 årene.',
        solution: `**a) Årlig avskrivning, år 1–4:**
$$\\frac{750\\,000 - 50\\,000}{10} = \\frac{700\\,000}{10} = 70\\,000 \\text{ kr per år}$$

**b) Bokført verdi etter 4 år (før nedskrivning):**
$$750\\,000 - (4 \\times 70\\,000) = 750\\,000 - 280\\,000 = 470\\,000 \\text{ kr}$$

**c) Nedskrivningsbeløp:**
$$470\\,000 - 300\\,000 = 170\\,000 \\text{ kr}$$

Ny bokført verdi: 300 000 kr

**d) Ny årlig avskrivning, år 5–8:**
$$\\frac{300\\,000 - 0}{4} = 75\\,000 \\text{ kr per år}$$

Etter nedskrivningen er den nye årlige avskrivningen 75 000 kr over de gjenværende 4 årene.`,
      },
    },
    {
      id: 'rr-4-2-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rr-4-2-oppg-6',
        number: '4.2.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign lineær avskrivning og saldoavskrivning for en maskin som koster 500 000 kr. Lineær levetid er 5 år med restverdi 0 kr. Saldosats er 30 %. Beregn avskrivning og bokført verdi for alle 5 år med begge metoder.',
        solution: `**Lineær avskrivning:**
Årlig: $500\\,000 / 5 = 100\\,000$ kr

| År | Avskrivning | Bokført verdi |
|---|---|---|
| 1 | 100 000 | 400 000 |
| 2 | 100 000 | 300 000 |
| 3 | 100 000 | 200 000 |
| 4 | 100 000 | 100 000 |
| 5 | 100 000 | 0 |

**Saldoavskrivning (30 %):**

| År | Avskrivning | Bokført verdi |
|---|---|---|
| 1 | 150 000 | 350 000 |
| 2 | 105 000 | 245 000 |
| 3 | 73 500 | 171 500 |
| 4 | 51 450 | 120 050 |
| 5 | 36 015 | 84 035 |

**Observasjon:** Med lineær avskrivning er eiendelen fullt avskrevet etter 5 år. Med saldoavskrivning har den fortsatt bokført verdi på 84 035 kr — ved saldometoden blir bokført verdi aldri null. Sum avskrivet: lineær 500 000 kr, saldo 415 965 kr etter 5 år.`,
      },
    },
    {
      id: 'rr-4-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 4.2

- **Anleggsmidler** er eiendeler bestemt til varig eie eller bruk, med levetid over ett år.
- **Avskrivning** fordeler anskaffelseskosten systematisk over levetiden.
- **Lineær avskrivning:** Jevnt beløp hvert år = (Anskaffelseskost − Restverdi) / Levetid.
- **Saldoavskrivning:** Fast prosent av bokført verdi. Høyest i starten, synker over tid. Bokført verdi blir aldri null.
- **Nedskrivning** er uplanlagt og gjøres ved varig verdifall. Kan reverseres.
- Ved salg av anleggsmiddel oppstår **gevinst** (salgssum > bokført verdi) eller **tap** (salgssum < bokført verdi).`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Anleggsmiddel', definition: 'Eiendel bestemt til varig eie eller bruk i virksomheten, med levetid over ett år.' },
    { term: 'Lineær avskrivning', definition: 'Avskrivningsmetode der anskaffelseskost (minus restverdi) fordeles jevnt over levetiden.' },
    { term: 'Saldoavskrivning', definition: 'Avskrivningsmetode der en fast prosentsats beregnes av bokført verdi hvert år.' },
    { term: 'Nedskrivning', definition: 'Uplanlagt reduksjon av bokført verdi når virkelig verdi er vesentlig lavere enn bokført verdi.' },
    { term: 'Bokført verdi', definition: 'Anskaffelseskost minus akkumulerte avskrivninger og eventuelle nedskrivninger.' },
    { term: 'Restverdi', definition: 'Forventet verdi av anleggsmiddelet ved utløpet av den økonomiske levetiden.' },
  ],
};

// ============================================================================
// KAPITTEL 4.3: Omløpsmidler
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_4_3: TextbookChapter = {
  id: 'regnskap-revisjon-4-3',
  courseId: 'regnskap-revisjon',
  chapterNumber: '4.3',
  title: 'Omløpsmidler',
  description: 'Varelager med FIFO og veiet gjennomsnitt, kundefordringer og tapsavsetning, samt vurderingsregler etter laveste verdis prinsipp.',
  estimatedMinutes: 24,
  competenceGoals: [
    'gjøre rede for ulike poster i balansen og forklare sammenhengen mellom eiendeler, gjeld og egenkapital',
    'beregne verdien av varelager og kundefordringer i samsvar med gjeldende regnskapsregler',
  ],
  content: [
    {
      id: 'rr-4-3-intro',
      type: 'text',
      content: `## Hva er omløpsmidler?

Omløpsmidler er eiendeler som forventes realisert (solgt, brukt opp eller innkrevd) innen ett år eller innenfor virksomhetens normale driftssyklus. De viktigste omløpsmidlene er:

- **Varelager** — varer som skal selges videre eller brukes i produksjon
- **Kundefordringer** — penger kunder skylder for varer/tjenester levert på kreditt
- **Andre fordringer** — forskuddsbetalte kostnader, opptjente inntekter
- **Bankinnskudd og kontanter** — likvide midler

**I dette kapittelet skal du lære:**
- Verdsettelse av varelager med FIFO og veiet gjennomsnitt
- Laveste verdis prinsipp
- Tapsavsetning på kundefordringer`,
    },
    {
      id: 'rr-4-3-def-lvp',
      type: 'definition',
      title: 'Laveste verdis prinsipp (LVP)',
      content: `Omløpsmidler skal vurderes til det **laveste** av anskaffelseskost og virkelig verdi (markedsverdi). Dette kalles **laveste verdis prinsipp** og følger av forsiktighetsprinsippet i regnskapsloven.

Hvis virkelig verdi er lavere enn anskaffelseskost, må verdien skrives ned. Hvis virkelig verdi er høyere, beholdes anskaffelseskost.`,
    },
    {
      id: 'rr-4-3-varelager',
      type: 'text',
      content: `## Verdsettelse av varelager

Når en virksomhet kjøper inn varer til forskjellige priser over tid, oppstår spørsmålet: Hvilken kostpris skal brukes for varene som er igjen på lager?

To vanlige metoder:

**1. FIFO (First In, First Out):**
De varene som ble kjøpt inn først, antas å bli solgt først. Varelageret ved periodens slutt verdsettes derfor til de siste (nyeste) innkjøpsprisene.

**2. Veiet gjennomsnitt:**
Gjennomsnittlig kostpris beregnes basert på alle innkjøp i perioden, vektet med antall enheter.

$$\\text{Veiet gjennomsnittspris} = \\frac{\\text{Total innkjøpskostnad}}{\\text{Totalt antall enheter}}$$`,
    },
    {
      id: 'rr-4-3-eks-fifo',
      type: 'example',
      title: 'Eksempel: FIFO-metoden',
      problem: 'Sportshuset AS handler inn treningssko i løpet av kvartalet:\n\n- 1. januar: 100 par à 400 kr\n- 15. februar: 150 par à 420 kr\n- 10. mars: 80 par à 450 kr\n\nI løpet av kvartalet selges 200 par. Beregn verdien av varelageret per 31. mars med FIFO.',
      solution: `**Totalt innkjøpt:** $100 + 150 + 80 = 330$ par
**Solgt:** 200 par
**På lager per 31. mars:** $330 - 200 = 130$ par

**FIFO — de eldste selges først:**
De 200 solgte parene er:
- 100 par à 400 kr (hele det første innkjøpet)
- 100 par à 420 kr (fra det andre innkjøpet)

**Gjenværende på lager (nyeste priser):**
- 50 par à 420 kr = 21 000 kr (resten av innkjøp 2)
- 80 par à 450 kr = 36 000 kr (hele innkjøp 3)

**Lagerverdi per 31. mars (FIFO):**
$$21\\,000 + 36\\,000 = 57\\,000 \\text{ kr}$$`,
    },
    {
      id: 'rr-4-3-eks-veiet',
      type: 'example',
      title: 'Eksempel: Veiet gjennomsnitt',
      problem: 'Bruk de samme tallene som i forrige eksempel. Beregn verdien av varelageret per 31. mars med veiet gjennomsnitt.',
      solution: `**Total innkjøpskostnad:**
$(100 \\times 400) + (150 \\times 420) + (80 \\times 450)$
$= 40\\,000 + 63\\,000 + 36\\,000 = 139\\,000$ kr

**Totalt antall:** 330 par

**Veiet gjennomsnittspris:**
$$\\frac{139\\,000}{330} = 421{,}21 \\text{ kr per par}$$

**Lagerverdi per 31. mars (veiet gjennomsnitt):**
$$130 \\times 421{,}21 = 54\\,757 \\text{ kr}$$

**Sammenligning:** FIFO gir lagerverdi 57 000 kr, veiet gjennomsnitt gir 54 757 kr. FIFO gir høyere verdi fordi lageret verdsettes til de nyeste (høyere) prisene i en periode med stigende priser.`,
    },
    {
      id: 'rr-4-3-kundefordringer',
      type: 'text',
      content: `## Kundefordringer og tapsavsetning

Kundefordringer er beløp som kunder skylder virksomheten for varer eller tjenester levert på kreditt. De føres som omløpsmidler i balansen.

Ikke alle kundefordringer vil bli betalt. Noen kunder betaler sent, andre betaler aldri. Regnskapsloven krever at virksomheten gjør en **tapsavsetning** — et anslag på hvor mye av kundefordringene som sannsynligvis ikke vil bli innbetalt.

Kundefordringene i balansen vises da som:
$$\\text{Netto kundefordringer} = \\text{Brutto kundefordringer} - \\text{Tapsavsetning}$$`,
    },
    {
      id: 'rr-4-3-eks-tap',
      type: 'example',
      title: 'Eksempel: Tapsavsetning på kundefordringer',
      problem: 'Havnekompaniet AS har brutto kundefordringer på 850 000 kr per 31.12. Basert på tidligere erfaring anslår de at 3 % av kundefordringene ikke vil bli innbetalt. I tillegg har de en spesifikk fordring på 25 000 kr til en kunde som har gått konkurs. Beregn netto kundefordringer i balansen.',
      solution: `**Generell tapsavsetning:**
$$850\\,000 \\times 0{,}03 = 25\\,500 \\text{ kr}$$

**Spesifikk tapsavsetning (konkurs):** 25 000 kr

**Total tapsavsetning:**
$$25\\,500 + 25\\,000 = 50\\,500 \\text{ kr}$$

**Netto kundefordringer i balansen:**
$$850\\,000 - 50\\,500 = 799\\,500 \\text{ kr}$$

Tapsavsetningen på 50 500 kr føres som kostnad i resultatregnskapet (tap på fordringer).`,
    },
    {
      id: 'rr-4-3-warning',
      type: 'warning',
      title: 'Viktig om vurdering av omløpsmidler',
      content: `Husk laveste verdis prinsipp: Hvis markedsverdien på varelageret har sunket under kostprisen, skal lageret vurderes til markedsverdi. Eksempel: Hvis du kjøpte inn varer til 100 kr per enhet, men markedsverdien har sunket til 80 kr, skal varelageret føres til 80 kr per enhet.`,
    },
    {
      id: 'rr-4-3-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rr-4-3-oppg-1',
        number: '4.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr FIFO-prinsippet for varelager?',
        options: [
          { id: 'a', text: 'De dyreste varene selges først', isCorrect: false },
          { id: 'b', text: 'De varene som ble kjøpt inn først, antas solgt først', isCorrect: true },
          { id: 'c', text: 'Alle varer verdsettes til gjennomsnittspris', isCorrect: false },
          { id: 'd', text: 'De nyeste varene selges først', isCorrect: false },
        ],
        solution: 'FIFO (First In, First Out) betyr at varene som ble kjøpt inn først, antas solgt først. Dermed verdsettes varelageret til de nyeste innkjøpsprisene.',
      },
    },
    {
      id: 'rr-4-3-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rr-4-3-oppg-2',
        number: '4.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Møbelringen AS har følgende innkjøp av en stolmodell i kvartal 1:\n\n- Januar: 60 stoler à 1 200 kr\n- Februar: 40 stoler à 1 300 kr\n- Mars: 50 stoler à 1 350 kr\n\nI kvartalet selges 90 stoler. Beregn lagerverdien per 31. mars med: a) FIFO b) Veiet gjennomsnitt',
        solution: `**Totalt innkjøpt:** $60 + 40 + 50 = 150$ stoler
**Solgt:** 90 stoler
**På lager:** $150 - 90 = 60$ stoler

**a) FIFO:**
De 90 solgte: 60 stk à 1 200 + 30 stk à 1 300
Gjenværende 60 stoler:
- 10 stk à 1 300 kr = 13 000 kr
- 50 stk à 1 350 kr = 67 500 kr
$$\\text{Lagerverdi (FIFO)} = 13\\,000 + 67\\,500 = 80\\,500 \\text{ kr}$$

**b) Veiet gjennomsnitt:**
Total kostnad: $(60 \\times 1\\,200) + (40 \\times 1\\,300) + (50 \\times 1\\,350)$
$= 72\\,000 + 52\\,000 + 67\\,500 = 191\\,500$ kr

Veiet snitt: $\\frac{191\\,500}{150} = 1\\,276{,}67$ kr

$$\\text{Lagerverdi (veiet snitt)} = 60 \\times 1\\,276{,}67 = 76\\,600 \\text{ kr}$$`,
      },
    },
    {
      id: 'rr-4-3-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rr-4-3-oppg-3',
        number: '4.3.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En virksomhet kjøpte varer til 500 kr per enhet. Markedsverdien har sunket til 420 kr per enhet. Etter laveste verdis prinsipp — til hvilken verdi skal varene føres i balansen?',
        options: [
          { id: 'a', text: '500 kr per enhet (anskaffelseskost)', isCorrect: false },
          { id: 'b', text: '420 kr per enhet (markedsverdi)', isCorrect: true },
          { id: 'c', text: '460 kr per enhet (gjennomsnitt)', isCorrect: false },
          { id: 'd', text: '80 kr per enhet (differansen)', isCorrect: false },
        ],
        solution: 'Etter laveste verdis prinsipp skal omløpsmidler vurderes til det laveste av anskaffelseskost (500 kr) og virkelig verdi / markedsverdi (420 kr). Siden markedsverdien er lavest, føres varene til 420 kr per enhet.',
      },
    },
    {
      id: 'rr-4-3-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rr-4-3-oppg-4',
        number: '4.3.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vestland Trading AS har brutto kundefordringer på 1 200 000 kr per 31.12. Erfaringsmessig tap er 2,5 %. I tillegg er det en spesifikk fordring på 45 000 kr til en kunde under konkursbehandling, og en fordring på 18 000 kr som er over 90 dager forfalt (anslått tapssannsynlighet 50 %). Beregn total tapsavsetning og netto kundefordringer.',
        solution: `**Generell tapsavsetning:**
$$1\\,200\\,000 \\times 0{,}025 = 30\\,000 \\text{ kr}$$

**Spesifikk avsetning (konkurs):** 45 000 kr

**Spesifikk avsetning (forfalt):**
$$18\\,000 \\times 0{,}50 = 9\\,000 \\text{ kr}$$

**Total tapsavsetning:**
$$30\\,000 + 45\\,000 + 9\\,000 = 84\\,000 \\text{ kr}$$

**Netto kundefordringer:**
$$1\\,200\\,000 - 84\\,000 = 1\\,116\\,000 \\text{ kr}$$

I balansen vises kundefordringer med 1 116 000 kr. Tapsavsetningen på 84 000 kr belastes resultatregnskapet.`,
      },
    },
    {
      id: 'rr-4-3-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rr-4-3-oppg-5',
        number: '4.3.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Byggevarer Sør AS har følgende innkjøp av sementposer i 1. halvår:\n\n- Januar: 500 poser à 85 kr\n- Mars: 300 poser à 90 kr\n- Mai: 400 poser à 95 kr\n\nI perioden selges 800 poser. Per 30. juni har markedsprisen sunket til 82 kr per pose. a) Beregn lagerverdi med FIFO (uten LVP). b) Beregn lagerverdi med veiet gjennomsnitt (uten LVP). c) Beregn endelig lagerverdi med FIFO og laveste verdis prinsipp.',
        hints: ['Husk at laveste verdis prinsipp betyr at du sammenligner FIFO-verdi med markedsverdi per enhet.'],
        solution: `**Totalt:** $500 + 300 + 400 = 1\\,200$ poser. Solgt: 800. På lager: 400.

**a) FIFO (uten LVP):**
Solgt (FIFO): 500 à 85 + 300 à 90 = 800 poser
Gjenværende: 400 poser à 95 kr
$$\\text{Lagerverdi (FIFO)} = 400 \\times 95 = 38\\,000 \\text{ kr}$$

**b) Veiet gjennomsnitt (uten LVP):**
Total kostnad: $(500 \\times 85) + (300 \\times 90) + (400 \\times 95)$
$= 42\\,500 + 27\\,000 + 38\\,000 = 107\\,500$ kr
Veiet snitt: $\\frac{107\\,500}{1\\,200} = 89{,}58$ kr
$$\\text{Lagerverdi (veiet snitt)} = 400 \\times 89{,}58 = 35\\,833 \\text{ kr}$$

**c) FIFO med laveste verdis prinsipp:**
FIFO-verdi: 95 kr per pose
Markedsverdi: 82 kr per pose
Laveste verdi: 82 kr per pose
$$\\text{Lagerverdi (FIFO + LVP)} = 400 \\times 82 = 32\\,800 \\text{ kr}$$

Nedskrivning: $38\\,000 - 32\\,800 = 5\\,200$ kr (belastes resultatregnskapet).`,
      },
    },
    {
      id: 'rr-4-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 4.3

- **Omløpsmidler** forventes realisert innen ett år: varelager, kundefordringer, bankinnskudd.
- **FIFO:** Eldste varer selges først; lageret verdsettes til nyeste priser.
- **Veiet gjennomsnitt:** Alle enheter verdsettes til gjennomsnittlig innkjøpspris.
- **Laveste verdis prinsipp (LVP):** Omløpsmidler føres til det laveste av kostpris og markedsverdi.
- **Tapsavsetning:** Anslag på kundefordringer som ikke vil bli betalt. Kan være generell (prosent av total) og/eller spesifikk (enkeltfordringer).
- FIFO gir normalt høyere lagerverdi i perioder med stigende priser.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Omløpsmidler', definition: 'Eiendeler som forventes realisert, solgt eller brukt opp innen ett år.' },
    { term: 'FIFO', definition: 'First In, First Out. Metode der de eldste varene antas solgt først; lageret verdsettes til nyeste priser.' },
    { term: 'Veiet gjennomsnitt', definition: 'Verdsettelsesmetode der alle enheter verdsettes til gjennomsnittlig innkjøpspris vektet med antall.' },
    { term: 'Laveste verdis prinsipp', definition: 'Omløpsmidler vurderes til det laveste av anskaffelseskost og virkelig verdi.' },
    { term: 'Tapsavsetning', definition: 'Estimert beløp av kundefordringer som ikke forventes innbetalt. Reduserer kundefordringene i balansen.' },
    { term: 'Kundefordringer', definition: 'Beløp kunder skylder virksomheten for varer eller tjenester levert på kreditt.' },
  ],
};

// ============================================================================
// KAPITTEL 4.4: Gjeld
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_4_4: TextbookChapter = {
  id: 'regnskap-revisjon-4-4',
  courseId: 'regnskap-revisjon',
  chapterNumber: '4.4',
  title: 'Gjeld',
  description: 'Skillet mellom kortsiktig og langsiktig gjeld, leverandørgjeld, lån og avdrag, skattegjeld, pensjonsforpliktelser og regnskapsmessige avsetninger.',
  estimatedMinutes: 22,
  competenceGoals: [
    'gjøre rede for ulike poster i balansen og forklare sammenhengen mellom eiendeler, gjeld og egenkapital',
    'klassifisere gjeldsposter og forklare forskjellen mellom kortsiktig og langsiktig gjeld',
  ],
  content: [
    {
      id: 'rr-4-4-intro',
      type: 'text',
      content: `## Gjeld i balansen

Gjeld representerer virksomhetens forpliktelser — beløp den skylder til andre. Gjeld er finansiering fra eksterne kilder (fremmedkapital) og deles inn i **langsiktig gjeld** og **kortsiktig gjeld**.

Skillet mellom kortsiktig og langsiktig er viktig for å vurdere virksomhetens likviditet (evne til å betale kortsiktige forpliktelser) og soliditet (langsiktig finansiell styrke).

**I dette kapittelet skal du lære:**
- Forskjellen mellom kortsiktig og langsiktig gjeld
- Vanlige gjeldsposter i balansen
- Hvordan lån og avdrag behandles regnskapsmessig
- Avsetninger for forpliktelser`,
    },
    {
      id: 'rr-4-4-def-gjeld',
      type: 'definition',
      title: 'Kortsiktig og langsiktig gjeld',
      content: `**Langsiktig gjeld** er gjeld med forfall mer enn ett år frem i tid:
- Pantelån og banklån med lang nedbetalingstid
- Obligasjonslån
- Pensjonsforpliktelser
- Utsatt skatt

**Kortsiktig gjeld** er gjeld med forfall innen ett år:
- Leverandørgjeld (skyldige beløp for varer/tjenester)
- Skyldig skattetrekk og arbeidsgiveravgift
- Betalbar skatt (skyldig skatt for inneværende år)
- Skyldig merverdiavgift
- Neste års avdrag på langsiktig lån
- Påløpte kostnader (feriepenger, renter)`,
    },
    {
      id: 'rr-4-4-laan',
      type: 'text',
      content: `## Lån og avdrag

Når en virksomhet tar opp et langsiktig lån, er hoveddelen langsiktig gjeld. Men den delen av lånet som forfaller til betaling innen neste år (neste avdrag) skal klassifiseres som **kortsiktig gjeld**.

**Serielån** har like store avdrag og synkende renter:
$$\\text{Årlig avdrag} = \\frac{\\text{Lånebeløp}}{\\text{Antall avdragsperioder}}$$

**Annuitetslån** har like store terminbeløp (avdrag + renter), der avdragsdelen øker og rentedelen synker over tid.`,
    },
    {
      id: 'rr-4-4-eks-laan',
      type: 'example',
      title: 'Eksempel: Klassifisering av lån i balansen',
      problem: 'Nordfjord Industri AS tok opp et serielån på 2 000 000 kr 01.01.2023 med 10 års nedbetalingstid og årlige avdrag. Renten er 5 % per år. Hvordan føres lånet i balansen per 31.12.2023, og hva er rentekostnaden for 2023?',
      solution: `**Årlig avdrag:**
$$\\frac{2\\,000\\,000}{10} = 200\\,000 \\text{ kr}$$

**Betalt avdrag i 2023:** 200 000 kr
**Restlån per 31.12.2023:** $2\\,000\\,000 - 200\\,000 = 1\\,800\\,000$ kr

**Klassifisering i balansen per 31.12.2023:**
- Langsiktig gjeld: $1\\,800\\,000 - 200\\,000 = 1\\,600\\,000$ kr
- Kortsiktig gjeld (neste års avdrag): 200 000 kr

**Rentekostnad for 2023:**
Rente beregnes på gjennomsnittlig lån (eller startsaldo):
$$2\\,000\\,000 \\times 0{,}05 = 100\\,000 \\text{ kr}$$

Rentekostnaden (100 000 kr) føres i resultatregnskapet. Eventuell skyldig rente per 31.12 føres som kortsiktig gjeld.`,
    },
    {
      id: 'rr-4-4-leverandoergjeld',
      type: 'text',
      content: `## Leverandørgjeld

Leverandørgjeld er beløp virksomheten skylder sine leverandører for varer og tjenester mottatt på kreditt. Leverandørgjeld er alltid kortsiktig gjeld, typisk med betalingsfrist 30 dager.

**Eksempel på leverandørgjeld i praksis:**
- Faktura fra vareleverandør med 30 dagers betalingsfrist
- Faktura fra regnskapsfører
- Faktura fra strømleverandør

Leverandørgjeld øker når virksomheten mottar en faktura og reduseres når fakturaen betales.`,
    },
    {
      id: 'rr-4-4-avsetninger',
      type: 'text',
      content: `## Avsetninger for forpliktelser

Avsetninger er gjeld der beløpet eller forfallstidspunktet er usikkert. Virksomheten vet at forpliktelsen eksisterer, men vet ikke nøyaktig hvor mye den vil koste eller når den forfaller.

**Eksempler på avsetninger:**
- **Garantiavsetning:** Anslått kostnad for garantiforpliktelser på solgte produkter
- **Pensjonsforpliktelser:** Fremtidige pensjonsutbetalinger til ansatte
- **Miljøforpliktelser:** Anslåtte kostnader for opprydding etter forurensning
- **Tvistavsetning:** Estimert tap i pågående rettssaker

En avsetning skal innregnes når: (1) det er sannsynlig at forpliktelsen vil føre til utbetaling, og (2) beløpet kan estimeres pålitelig.`,
    },
    {
      id: 'rr-4-4-eks-garanti',
      type: 'example',
      title: 'Eksempel: Garantiavsetning',
      content: `Teknomax AS selger elektronikk med 2 års garanti. Basert på historiske data koster garantireparasjoner i gjennomsnitt 2 % av omsetningen.

Omsetningen i 2024 var 15 000 000 kr.

**Garantiavsetning:**
$$15\\,000\\,000 \\times 0{,}02 = 300\\,000 \\text{ kr}$$

I balansen per 31.12.2024 føres 300 000 kr som avsetning for garantiforpliktelser (kortsiktig eller langsiktig avhengig av garantitiden). Beløpet føres som kostnad i resultatregnskapet.`,
    },
    {
      id: 'rr-4-4-note',
      type: 'note',
      title: 'Forskjellen mellom gjeld og avsetning',
      content: `**Gjeld** er en forpliktelse der beløpet og forfallstidspunktet er kjent (f.eks. leverandørfaktura på 50 000 kr med forfall om 30 dager).

**Avsetning** er en forpliktelse der beløpet og/eller forfallstidspunktet er usikkert (f.eks. garantiforpliktelse der man ikke vet nøyaktig hvor mange kunder som vil reklamere).`,
    },
    {
      id: 'rr-4-4-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rr-4-4-oppg-1',
        number: '4.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av følgende er en kortsiktig gjeldspost?',
        options: [
          { id: 'a', text: 'Pantelån med 15 års nedbetalingstid', isCorrect: false },
          { id: 'b', text: 'Skyldig merverdiavgift', isCorrect: true },
          { id: 'c', text: 'Obligasjonslån med forfall om 5 år', isCorrect: false },
          { id: 'd', text: 'Pensjonsforpliktelser', isCorrect: false },
        ],
        solution: 'Skyldig merverdiavgift er kortsiktig gjeld fordi den forfaller innen kort tid (neste MVA-termin). Pantelån, obligasjonslån og pensjonsforpliktelser er normalt langsiktig gjeld.',
      },
    },
    {
      id: 'rr-4-4-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rr-4-4-oppg-2',
        number: '4.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bergseng AS tok opp et serielån på 1 500 000 kr 01.01.2024 med 5 års nedbetalingstid og årlige avdrag. Renten er 6 % per år. a) Beregn årlig avdrag. b) Sett opp en avdragsplan med renter, avdrag og restlån for alle 5 år. c) Klassifiser gjelden i balansen per 31.12.2024.',
        solution: `**a) Årlig avdrag:**
$$\\frac{1\\,500\\,000}{5} = 300\\,000 \\text{ kr}$$

**b) Avdragsplan:**

| År | Restlån (start) | Rente (6 %) | Avdrag | Sum betaling | Restlån (slutt) |
|---|---|---|---|---|---|
| 2024 | 1 500 000 | 90 000 | 300 000 | 390 000 | 1 200 000 |
| 2025 | 1 200 000 | 72 000 | 300 000 | 372 000 | 900 000 |
| 2026 | 900 000 | 54 000 | 300 000 | 354 000 | 600 000 |
| 2027 | 600 000 | 36 000 | 300 000 | 336 000 | 300 000 |
| 2028 | 300 000 | 18 000 | 300 000 | 318 000 | 0 |

**c) Balanse per 31.12.2024:**
Restlån: 1 200 000 kr
- Langsiktig gjeld: $1\\,200\\,000 - 300\\,000 = 900\\,000$ kr
- Kortsiktig gjeld (neste års avdrag): 300 000 kr
- Rentekostnad 2024 i resultatregnskapet: 90 000 kr`,
      },
    },
    {
      id: 'rr-4-4-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rr-4-4-oppg-3',
        number: '4.4.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Et selskap har et langsiktig lån med restgjeld 800 000 kr og årlige avdrag på 200 000 kr. Hvordan klassifiseres dette i balansen?',
        options: [
          { id: 'a', text: 'Hele 800 000 kr som langsiktig gjeld', isCorrect: false },
          { id: 'b', text: '600 000 kr langsiktig gjeld og 200 000 kr kortsiktig gjeld', isCorrect: true },
          { id: 'c', text: 'Hele 800 000 kr som kortsiktig gjeld', isCorrect: false },
          { id: 'd', text: '400 000 kr langsiktig og 400 000 kr kortsiktig', isCorrect: false },
        ],
        solution: 'Neste års avdrag (200 000 kr) skal klassifiseres som kortsiktig gjeld fordi det forfaller innen ett år. Resterende 600 000 kr er langsiktig gjeld. Dette gir et riktigere bilde av virksomhetens kortsiktige betalingsforpliktelser.',
      },
    },
    {
      id: 'rr-4-4-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rr-4-4-oppg-4',
        number: '4.4.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Montasjen AS har følgende gjeldsposter per 31.12: Pantelån (restgjeld 3 200 000 kr, årlig avdrag 400 000 kr), leverandørgjeld 280 000 kr, skyldig skattetrekk 145 000 kr, skyldig arbeidsgiveravgift 85 000 kr, skyldig merverdiavgift 190 000 kr, garantiavsetning 120 000 kr. Klassifiser gjelden og beregn sum kortsiktig og langsiktig gjeld.',
        solution: `**Langsiktig gjeld:**
- Pantelån (ekskl. neste avdrag): $3\\,200\\,000 - 400\\,000 = 2\\,800\\,000$ kr
- Sum langsiktig gjeld: **2 800 000 kr**

**Kortsiktig gjeld:**
- Neste års avdrag pantelån: 400 000 kr
- Leverandørgjeld: 280 000 kr
- Skyldig skattetrekk: 145 000 kr
- Skyldig arbeidsgiveravgift: 85 000 kr
- Skyldig merverdiavgift: 190 000 kr
- Garantiavsetning: 120 000 kr
- Sum kortsiktig gjeld: **1 220 000 kr**

**Total gjeld:** $2\\,800\\,000 + 1\\,220\\,000 = 4\\,020\\,000$ kr`,
      },
    },
    {
      id: 'rr-4-4-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rr-4-4-oppg-5',
        number: '4.4.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Kystservice AS har følgende informasjon per 31.12.2024: Sum eiendeler 5 800 000 kr, egenkapital 2 100 000 kr. De har serielån med restgjeld 2 400 000 kr (årlig avdrag 300 000 kr, rente 5,5 %), leverandørgjeld 450 000 kr, skyldig skattetrekk 210 000 kr, skyldig feriepenger 340 000 kr. a) Kontroller at balanselikningen stemmer. b) Beregn gjeldsgrad (gjeld / egenkapital). c) Beregn likviditetsgrad 1 (omløpsmidler / kortsiktig gjeld), gitt at omløpsmidler utgjør 2 200 000 kr. d) Vurder virksomhetens finansielle stilling.',
        hints: ['Gjeldsgrad > 2 anses som høy. Likviditetsgrad 1 bør være > 2 for god likviditet.'],
        solution: `**a) Kontroll av balanselikningen:**
Gjeld: $5\\,800\\,000 - 2\\,100\\,000 = 3\\,700\\,000$ kr
Sjekk: Langsiktig gjeld: $2\\,400\\,000 - 300\\,000 = 2\\,100\\,000$ kr
Kortsiktig gjeld: $300\\,000 + 450\\,000 + 210\\,000 + 340\\,000 = 1\\,300\\,000$ kr
Resterende (annen gjeld): $3\\,700\\,000 - 2\\,100\\,000 - 1\\,300\\,000 = 300\\,000$ kr
Total EK + Gjeld: $2\\,100\\,000 + 3\\,700\\,000 = 5\\,800\\,000$ kr $\\checkmark$

**b) Gjeldsgrad:**
$$\\frac{3\\,700\\,000}{2\\,100\\,000} = 1{,}76$$

**c) Likviditetsgrad 1:**
$$\\frac{2\\,200\\,000}{1\\,300\\,000} = 1{,}69$$

**d) Vurdering:**
- Gjeldsgrad 1,76 er under 2, noe som er akseptabelt.
- Egenkapitalandel: $2\\,100\\,000 / 5\\,800\\,000 = 36{,}2\\%$ — over 30 %, som er tilfredsstillende.
- Likviditetsgrad 1 på 1,69 er under anbefalte 2,0, noe som tyder på at kortsiktig betalingsevne kunne vært bedre. Virksomheten bør vurdere å bedre likviditeten.`,
      },
    },
    {
      id: 'rr-4-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 4.4

- **Gjeld** deles inn i **langsiktig gjeld** (forfall > 1 år) og **kortsiktig gjeld** (forfall < 1 år).
- Neste års avdrag på langsiktig lån skal omklassifiseres til kortsiktig gjeld.
- **Leverandørgjeld**, skyldig skatt, avgifter og feriepenger er typisk kortsiktig gjeld.
- **Avsetninger** er forpliktelser med usikkert beløp eller tidspunkt (garanti, pensjon, miljø).
- **Serielån** har like avdrag og synkende renter; **annuitetslån** har like terminbeløp.
- **Gjeldsgrad** (gjeld / EK) og **likviditetsgrad** (omløpsmidler / kortsiktig gjeld) er viktige nøkkeltall.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Langsiktig gjeld', definition: 'Gjeld med forfall mer enn ett år frem i tid, f.eks. pantelån og obligasjonslån.' },
    { term: 'Kortsiktig gjeld', definition: 'Gjeld med forfall innen ett år, f.eks. leverandørgjeld og skyldig skatt.' },
    { term: 'Leverandørgjeld', definition: 'Beløp virksomheten skylder leverandører for varer og tjenester mottatt på kreditt.' },
    { term: 'Avsetning', definition: 'Forpliktelse der beløpet og/eller forfallstidspunktet er usikkert, f.eks. garantiavsetning.' },
    { term: 'Serielån', definition: 'Lån med like store avdrag i hver termin. Rentekostnaden synker over tid.' },
    { term: 'Gjeldsgrad', definition: 'Total gjeld delt på egenkapital. Mål på forholdet mellom fremmedkapital og egenkapital.' },
  ],
};

// ============================================================================
// KAPITTEL 4.5: Egenkapital
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_4_5: TextbookChapter = {
  id: 'regnskap-revisjon-4-5',
  courseId: 'regnskap-revisjon',
  chapterNumber: '4.5',
  title: 'Egenkapital',
  description: 'Innskutt og opptjent egenkapital, aksjekapital og overkursfond, utbytte, egenkapitaloppstilling og sammenhengen med resultatregnskapet.',
  estimatedMinutes: 22,
  competenceGoals: [
    'gjøre rede for ulike poster i balansen og forklare sammenhengen mellom eiendeler, gjeld og egenkapital',
    'forklare hvordan egenkapitalen endres gjennom overskudd, underskudd og utbytte',
  ],
  content: [
    {
      id: 'rr-4-5-intro',
      type: 'text',
      content: `## Hva er egenkapital?

Egenkapital er den delen av virksomhetens eiendeler som er finansiert av eierne — enten gjennom innskudd eller ved at overskudd beholdes i virksomheten. Egenkapitalen er differansen mellom eiendeler og gjeld:

$$\\text{Egenkapital} = \\text{Eiendeler} - \\text{Gjeld}$$

Egenkapitalen er en buffer mot tap. Jo høyere egenkapital, desto mer tap kan virksomheten tåle før den blir insolvent (gjelden overstiger eiendelene).

**I dette kapittelet skal du lære:**
- Forskjellen mellom innskutt og opptjent egenkapital
- Aksjekapital, overkursfond og annen innskutt egenkapital
- Hvordan årsresultatet påvirker egenkapitalen
- Utbytte og tilbakeføring til eierne`,
    },
    {
      id: 'rr-4-5-def-ek',
      type: 'definition',
      title: 'Innskutt og opptjent egenkapital',
      content: `Egenkapitalen deles inn i to hoveddeler:

**Innskutt egenkapital** — kapital eierne har skutt inn:
- **Aksjekapital:** Pålydende verdi × antall aksjer. Minimumskrav: 30 000 kr for AS.
- **Overkursfond:** Beløpet aksjonærene betalte utover pålydende ved emisjon.

**Opptjent egenkapital** — kapital virksomheten har tjent opp:
- **Annen egenkapital (fri egenkapital):** Akkumulert overskudd minus utbytte over virksomhetens levetid.
- Også kalt «tilbakeholdt overskudd» eller «opptjent egenkapital».`,
    },
    {
      id: 'rr-4-5-aksjekapital',
      type: 'text',
      content: `## Aksjekapital og overkursfond

Når et aksjeselskap stiftes, bestemmes **pålydende verdi** per aksje og antall aksjer. Aksjekapitalen er:
$$\\text{Aksjekapital} = \\text{Pålydende verdi per aksje} \\times \\text{Antall aksjer}$$

Ved en **emisjon** (nyutstedelse av aksjer) kan aksjene selges til en pris som er høyere enn pålydende. Differansen mellom emisjonskurs og pålydende kalles **overkurs** og føres til overkursfondet.

$$\\text{Overkurs per aksje} = \\text{Emisjonskurs} - \\text{Pålydende verdi}$$`,
    },
    {
      id: 'rr-4-5-eks-emisjon',
      type: 'example',
      title: 'Eksempel: Stiftelse og emisjon',
      problem: 'Fjordtek AS stiftes med 10 000 aksjer à pålydende 10 kr. Etter to år gjennomfører selskapet en emisjon der de utsteder 5 000 nye aksjer til kurs 25 kr per aksje. Beregn aksjekapital og overkursfond etter emisjonen.',
      solution: `**Ved stiftelse:**
Aksjekapital: $10\\,000 \\times 10 = 100\\,000$ kr
Overkursfond: 0 kr
Innbetalt kapital: 100 000 kr

**Ved emisjon:**
Nye aksjer: 5 000 stk à 25 kr = 125 000 kr innbetalt
- Aksjekapital-økning: $5\\,000 \\times 10 = 50\\,000$ kr (pålydende)
- Overkurs: $5\\,000 \\times (25 - 10) = 5\\,000 \\times 15 = 75\\,000$ kr

**Etter emisjon:**
- Aksjekapital: $100\\,000 + 50\\,000 = 150\\,000$ kr
- Overkursfond: $0 + 75\\,000 = 75\\,000$ kr
- Totalt antall aksjer: 15 000 stk
- Sum innskutt egenkapital: $150\\,000 + 75\\,000 = 225\\,000$ kr`,
    },
    {
      id: 'rr-4-5-resultat',
      type: 'text',
      content: `## Årsresultatets påvirkning på egenkapitalen

Egenkapitalen endres av fire ting:
1. **Overskudd** øker opptjent egenkapital
2. **Underskudd** reduserer opptjent egenkapital
3. **Utbytte** reduserer opptjent egenkapital (overføring til eierne)
4. **Kapitalinnskudd/emisjon** øker innskutt egenkapital

**Egenkapitaloppstillingen** viser endringen i egenkapital fra 01.01 til 31.12:

$$\\text{EK 31.12} = \\text{EK 01.01} + \\text{Årsresultat} - \\text{Utbytte} + \\text{Kapitalinnskudd}$$`,
    },
    {
      id: 'rr-4-5-eks-egenkapitaloppstilling',
      type: 'example',
      title: 'Eksempel: Egenkapitaloppstilling',
      problem: 'Kystprodukter AS har følgende informasjon for 2024:\n- Egenkapital 01.01.2024: aksjekapital 500 000 kr, overkursfond 100 000 kr, opptjent EK 650 000 kr\n- Årsresultat 2024: overskudd 280 000 kr\n- Utbytte vedtatt: 150 000 kr\n\nSett opp egenkapitaloppstillingen for 2024.',
      solution: `**Egenkapitaloppstilling for 2024:**

| | Aksjekapital | Overkursfond | Opptjent EK | Sum EK |
|---|---|---|---|---|
| EK 01.01.2024 | 500 000 | 100 000 | 650 000 | 1 250 000 |
| Årsresultat | — | — | +280 000 | +280 000 |
| Utbytte | — | — | −150 000 | −150 000 |
| **EK 31.12.2024** | **500 000** | **100 000** | **780 000** | **1 380 000** |

**Forklaring:**
Opptjent EK øker fra 650 000 til 780 000 kr ($650\\,000 + 280\\,000 - 150\\,000$).
Sum egenkapital øker fra 1 250 000 til 1 380 000 kr — en netto økning på 130 000 kr (overskudd minus utbytte).`,
    },
    {
      id: 'rr-4-5-utbytte',
      type: 'text',
      content: `## Utbytte

Utbytte er overføring av overskudd fra selskapet til aksjonærene. Utbytte kan kun deles ut fra **fri egenkapital** (opptjent egenkapital), ikke fra aksjekapitalen.

Aksjeloven stiller krav til forsvarlig egenkapital og likviditet etter utdeling. Selskapet må ha:
- Tilstrekkelig egenkapital etter utdelingen (forsvarlig egenkapital)
- Tilstrekkelig likviditet til å betale sine forpliktelser

**Utbytte per aksje:**
$$\\text{Utbytte per aksje} = \\frac{\\text{Totalt utbytte}}{\\text{Antall aksjer}}$$`,
    },
    {
      id: 'rr-4-5-eks-utbytte',
      type: 'example',
      title: 'Eksempel: Beregning av utbytte',
      content: `Solstad AS har 20 000 aksjer. Opptjent egenkapital er 840 000 kr. Styret foreslår et utbytte på 12 kr per aksje.

**Totalt utbytte:**
$$20\\,000 \\times 12 = 240\\,000 \\text{ kr}$$

**Opptjent EK etter utbytte:**
$$840\\,000 - 240\\,000 = 600\\,000 \\text{ kr}$$

**Utbytteandel:**
$$\\frac{240\\,000}{\\text{Årsresultat}} \\times 100\\%$$

Hvis årsresultatet var 300 000 kr, er utbytteandelen:
$$\\frac{240\\,000}{300\\,000} \\times 100\\% = 80\\%$$

Det betyr at 80 % av overskuddet deles ut til aksjonærene, mens 20 % beholdes i selskapet.`,
    },
    {
      id: 'rr-4-5-warning',
      type: 'warning',
      title: 'Krav til forsvarlig egenkapital',
      content: `Aksjeloven § 3-4 krever at selskapet til enhver tid skal ha en egenkapital og likviditet som er forsvarlig ut fra risikoen og omfanget av virksomheten. Styret har plikt til å handle hvis egenkapitalen er lavere enn forsvarlig — for eksempel ved å foreslå tiltak for generalforsamlingen.`,
    },
    {
      id: 'rr-4-5-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rr-4-5-oppg-1',
        number: '4.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom innskutt og opptjent egenkapital?',
        options: [
          { id: 'a', text: 'Innskutt EK kommer fra eierne, opptjent EK er akkumulert overskudd beholdt i virksomheten', isCorrect: true },
          { id: 'b', text: 'Innskutt EK er kortsiktig, opptjent EK er langsiktig', isCorrect: false },
          { id: 'c', text: 'Innskutt EK kan deles ut som utbytte, opptjent EK kan ikke', isCorrect: false },
          { id: 'd', text: 'Det er ingen praktisk forskjell — begge er egenkapital', isCorrect: false },
        ],
        solution: 'Innskutt egenkapital er kapital eierne har skutt inn (aksjekapital og overkursfond). Opptjent egenkapital er akkumulert overskudd som er beholdt i virksomheten over tid, minus utdelinger. Utbytte kan kun deles ut fra opptjent (fri) egenkapital.',
      },
    },
    {
      id: 'rr-4-5-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rr-4-5-oppg-2',
        number: '4.5.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Nordlys AS har 30 000 aksjer med pålydende 5 kr. Selskapet gjennomfører en emisjon der de utsteder 10 000 nye aksjer til kurs 18 kr. a) Beregn aksjekapitalen før og etter emisjon. b) Beregn overkursfondet etter emisjon. c) Hvor mye kapital tilføres selskapet totalt gjennom emisjonen?',
        solution: `**a) Aksjekapital:**
Før: $30\\,000 \\times 5 = 150\\,000$ kr
Økning: $10\\,000 \\times 5 = 50\\,000$ kr
Etter: $150\\,000 + 50\\,000 = 200\\,000$ kr

**b) Overkursfond:**
Overkurs per aksje: $18 - 5 = 13$ kr
$$10\\,000 \\times 13 = 130\\,000 \\text{ kr}$$

**c) Total kapital tilført:**
$$10\\,000 \\times 18 = 180\\,000 \\text{ kr}$$

Kontroll: Aksjekapital-økning (50 000) + Overkursfond (130 000) = 180 000 kr $\\checkmark$`,
      },
    },
    {
      id: 'rr-4-5-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rr-4-5-oppg-3',
        number: '4.5.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Havteknikk AS har 50 000 aksjer. Opptjent egenkapital er 1 400 000 kr. Årsresultatet for 2024 var 480 000 kr. Styret ønsker å dele ut 8 kr per aksje i utbytte. a) Beregn totalt utbytte. b) Beregn utbytteandelen (andel av årsresultat). c) Hva blir opptjent egenkapital etter disponering av årsresultatet?',
        solution: `**a) Totalt utbytte:**
$$50\\,000 \\times 8 = 400\\,000 \\text{ kr}$$

**b) Utbytteandel:**
$$\\frac{400\\,000}{480\\,000} \\times 100\\% = 83{,}3\\%$$

**c) Opptjent egenkapital etter disponering:**
$$1\\,400\\,000 + 480\\,000 - 400\\,000 = 1\\,480\\,000 \\text{ kr}$$

Av årsresultatet på 480 000 kr deles 400 000 kr ut som utbytte, mens 80 000 kr beholdes i selskapet og øker opptjent egenkapital.`,
      },
    },
    {
      id: 'rr-4-5-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rr-4-5-oppg-4',
        number: '4.5.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Et selskap har aksjekapital 200 000 kr, overkursfond 80 000 kr og opptjent egenkapital 520 000 kr. Hva er maksimalt utbytte selskapet kan dele ut (kun basert på fri egenkapital)?',
        options: [
          { id: 'a', text: '200 000 kr', isCorrect: false },
          { id: 'b', text: '520 000 kr', isCorrect: true },
          { id: 'c', text: '800 000 kr', isCorrect: false },
          { id: 'd', text: '600 000 kr', isCorrect: false },
        ],
        solution: 'Utbytte kan kun deles ut fra fri (opptjent) egenkapital, som er 520 000 kr. Aksjekapitalen (200 000 kr) og overkursfondet (80 000 kr) er bundet egenkapital og kan ikke deles ut som utbytte. I praksis må selskapet også vurdere krav til forsvarlig egenkapital og likviditet.',
      },
    },
    {
      id: 'rr-4-5-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rr-4-5-oppg-5',
        number: '4.5.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Storfjord AS har følgende egenkapital per 01.01.2024: aksjekapital 300 000 kr (30 000 aksjer à 10 kr pålydende), overkursfond 120 000 kr, opptjent egenkapital 890 000 kr. I 2024 skjer følgende: (1) Årsresultat: overskudd 350 000 kr. (2) Utbytte vedtatt: 6 kr per aksje. (3) Emisjon: 5 000 nye aksjer til kurs 22 kr. Sett opp egenkapitaloppstillingen for 2024.',
        solution: `**Egenkapitaloppstilling for 2024:**

| | Aksjekapital | Overkursfond | Opptjent EK | Sum EK |
|---|---|---|---|---|
| EK 01.01.2024 | 300 000 | 120 000 | 890 000 | 1 310 000 |
| Årsresultat | — | — | +350 000 | +350 000 |
| Utbytte ($30\\,000 \\times 6$) | — | — | −180 000 | −180 000 |
| Emisjon (aksjekapital) | +50 000 | — | — | +50 000 |
| Emisjon (overkurs) | — | +60 000 | — | +60 000 |
| **EK 31.12.2024** | **350 000** | **180 000** | **1 060 000** | **1 590 000** |

**Beregninger:**
- Utbytte: $30\\,000 \\times 6 = 180\\,000$ kr
- Emisjon aksjekapital: $5\\,000 \\times 10 = 50\\,000$ kr
- Emisjon overkurs: $5\\,000 \\times (22 - 10) = 60\\,000$ kr
- Opptjent EK: $890\\,000 + 350\\,000 - 180\\,000 = 1\\,060\\,000$ kr
- Sum EK: $350\\,000 + 180\\,000 + 1\\,060\\,000 = 1\\,590\\,000$ kr`,
      },
    },
    {
      id: 'rr-4-5-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rr-4-5-oppg-6',
        number: '4.5.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Etter årsoppgjøret har Nordvik Industri AS sum eiendeler 8 500 000 kr, langsiktig gjeld 3 200 000 kr og kortsiktig gjeld 1 800 000 kr. a) Beregn egenkapitalen. b) Beregn egenkapitalandelen. c) Selskapet går med underskudd på 400 000 kr neste år og deler ikke ut utbytte. Hva blir ny egenkapitalandel (forutsett at annet er uendret)? d) Vurder utviklingen.',
        solution: `**a) Egenkapital:**
$$\\text{EK} = 8\\,500\\,000 - 3\\,200\\,000 - 1\\,800\\,000 = 3\\,500\\,000 \\text{ kr}$$

**b) Egenkapitalandel:**
$$\\frac{3\\,500\\,000}{8\\,500\\,000} \\times 100\\% = 41{,}2\\%$$

**c) Etter underskudd på 400 000 kr:**
Ny EK: $3\\,500\\,000 - 400\\,000 = 3\\,100\\,000$ kr
Ny totalkapital: $8\\,500\\,000 - 400\\,000 = 8\\,100\\,000$ kr (eiendelene reduseres tilsvarende, f.eks. lavere bankinnskudd)

Ny egenkapitalandel:
$$\\frac{3\\,100\\,000}{8\\,100\\,000} \\times 100\\% = 38{,}3\\%$$

**d) Vurdering:**
Egenkapitalandelen synker fra 41,2 % til 38,3 %, en reduksjon på 2,9 prosentpoeng. Andelen er fortsatt over 30 %, men utviklingen er negativ. Styret bør vurdere tiltak for å snu lønnsomheten og unngå ytterligere erosjon av egenkapitalen. Dersom underskuddene fortsetter, kan egenkapitalen komme under forsvarlig nivå.`,
      },
    },
    {
      id: 'rr-4-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 4.5

- **Egenkapital** = Eiendeler − Gjeld. Representerer eiernes andel av virksomhetens verdier.
- **Innskutt egenkapital:** Aksjekapital (pålydende × antall aksjer) og overkursfond (emisjonskurs − pålydende).
- **Opptjent egenkapital:** Akkumulert overskudd minus utbytte over virksomhetens levetid.
- **Utbytte** kan kun deles ut fra opptjent (fri) egenkapital, med krav til forsvarlig egenkapital og likviditet.
- **Egenkapitaloppstillingen** viser endringer fra 01.01 til 31.12: årsresultat, utbytte og kapitalinnskudd.
- **Aksjeloven** krever forsvarlig egenkapital (§ 3-4) og gir styret handleplikt ved lav egenkapital.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Egenkapital', definition: 'Eiernes andel av virksomhetens verdier. Eiendeler minus gjeld.' },
    { term: 'Aksjekapital', definition: 'Pålydende verdi per aksje multiplisert med antall aksjer. Bundet egenkapital som ikke kan deles ut.' },
    { term: 'Overkursfond', definition: 'Differansen mellom emisjonskurs og pålydende verdi ved utstedelse av nye aksjer.' },
    { term: 'Opptjent egenkapital', definition: 'Akkumulert overskudd beholdt i virksomheten minus utdelinger over tid. Fri egenkapital.' },
    { term: 'Utbytte', definition: 'Overføring av overskudd fra selskapet til aksjonærene. Kan kun tas fra fri egenkapital.' },
    { term: 'Emisjon', definition: 'Utstedelse av nye aksjer for å tilføre selskapet mer egenkapital.' },
  ],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const REGNSKAP_REVISJON_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_REGNSKAP_REVISJON_4_1,
  CHAPTER_REGNSKAP_REVISJON_4_2,
  CHAPTER_REGNSKAP_REVISJON_4_3,
  CHAPTER_REGNSKAP_REVISJON_4_4,
  CHAPTER_REGNSKAP_REVISJON_4_5,
];
