/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Biologi 2 VG3
 *
 * Seksjon 3: Fysiologi II – Nervesystem og regulering (Kapittel 3.1–3.7)
 * Denne filen inneholder kapittel 3.1–3.7.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1: Nerveceller og signaloverføring
// ============================================================================

export const CHAPTER_BIOLOGI_2_3_1: TextbookChapter = {
  id: 'biologi-2-3-1',
  courseId: 'biologi-2',
  chapterNumber: '3.1',
  title: 'Nerveceller og signaloverføring',
  description: 'Nevroner, aksjonspotensial, synapser og nevrotransmittere.',
  estimatedMinutes: 30,
  competenceGoals: [
    'forklare nervesignaloverføring',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'bio2-3-1-intro',
      type: 'text',
      content: `# Nerveceller og signaloverføring

I dette kapittelet skal du lære om:

- Oppbyggingen av nerveceller (nevroner)
- Hvilemembranpotensialet og ionekanalenes rolle
- Aksjonspotensial og hvordan nerveimpulser ledes
- Synaptisk overføring og nevrotransmittere

Nervesystemet er kroppens raske kommunikasjonssystem. Mens hormoner bruker blodet som transportmedium og virker over minutter til timer, kan nervesignaler overføres på brøkdeler av et sekund. Denne hastigheten er mulig takket være spesialiserte celler kalt **nevroner**, som kan generere og lede elektriske signaler over lange avstander.`,
    },

    // ========== TEORI 1: Nevronets oppbygging ==========
    {
      id: 'bio2-3-1-nevron-oppbygging',
      type: 'text',
      content: `## Nevronets oppbygging

Et **nevron** (nervecelle) er den funksjonelle enheten i nervesystemet. Selv om nevroner varierer i form og størrelse, har de fleste en felles grunnstruktur med tre hoveddeler:

### 1. Cellelegemet (soma)
- Inneholder **cellekjernen** med DNA og det meste av cellens organeller
- Her foregår det meste av **proteinsyntesen**
- Mottakingssone for signaler fra andre nevroner
- Diameteren er typisk 10–25 µm

### 2. Dendritter
- Korte, forgreinede utløpere fra cellelegemet
- Fungerer som **mottakerstrukturer** som fanger opp signaler fra andre nevroner
- Øker overflatearealet for mottak av synapser
- Et enkelt nevron kan ha tusenvis av dendritter

### 3. Akson
- Lang, tynn utløper som leder nerveimpulsen **bort fra cellelegemet**
- Kan være fra noen mikrometer til over **1 meter** langt (f.eks. fra ryggmargen til foten)
- Ender i **aksonterminaler** (synaptiske endeplater) som danner synapser med andre celler
- Mange aksoner er omgitt av en **myelinskjede** som øker ledningshastigheten

### Myelinskjeden

Myelinskjeden er et isolerende fettlag som dannes av **gliaceller**:
- I sentralnervesystemet: **oligodendrocytter**
- I det perifere nervesystemet: **Schwannske celler**

Myelinen avbrytes med jevne mellomrom av **Ranvierske innsnøringer** – små blottede områder der ionekanalene er konsentrert. Dette muliggjør **saltatorisk ledning**, der nerveimpulsen «hopper» fra innsnøring til innsnøring, noe som øker ledningshastigheten betydelig (opptil 120 m/s i myeliniserte aksoner mot 0,5–2 m/s i umyeliniserte).`,
    },

    {
      id: 'bio2-3-1-def-nevron',
      type: 'definition',
      title: 'Nevron',
      content: 'Et nevron er en spesialisert nervecelle som kan motta, bearbeide og sende elektriske signaler. Det består av et cellelegeme (soma) med cellekjerne, dendritter som mottar signaler, og et akson som leder signalet videre til andre celler. Nevroner kommuniserer med hverandre ved synapser via kjemiske signalstoffer (nevrotransmittere) eller elektriske koblinger.',
    },

    {
      id: 'bio2-3-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Myeliniserte vs. umyeliniserte aksoner',
      problem: 'Et myelinisert akson leder signaler med en hastighet på 100 m/s, mens et umyelinisert akson av samme diameter leder med 2 m/s. Hvor lang tid tar det for et signal å nå fra ryggmargen til foten (ca. 1 meter) via hvert aksontype?',
      solution: `**Løsning:**

Vi bruker sammenhengen $t = \\frac{d}{v}$ der $d$ er avstand og $v$ er hastighet.

**Myelinisert akson:**
$$t = \\frac{1 \\text{ m}}{100 \\text{ m/s}} = 0{,}01 \\text{ s} = 10 \\text{ ms}$$

**Umyelinisert akson:**
$$t = \\frac{1 \\text{ m}}{2 \\text{ m/s}} = 0{,}5 \\text{ s} = 500 \\text{ ms}$$

Signalet i det myeliniserte aksonet når fram **50 ganger raskere**. Dette illustrerer hvorfor myelinisering er viktig for raske reflekser og presis motorisk kontroll. Ved sykdommer som **multippel sklerose (MS)** brytes myelinskjeden ned, noe som fører til langsom og upålitelig signaloverføring.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'bio2-3-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-1-ex-1',
        number: '3.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken del av nevronet leder nerveimpulsen bort fra cellelegemet?',
        options: [
          { id: 'a', text: 'Dendritt', isCorrect: false },
          { id: 'b', text: 'Akson', isCorrect: true },
          { id: 'c', text: 'Soma', isCorrect: false },
          { id: 'd', text: 'Myelinskjede', isCorrect: false },
        ],
        solution: 'Aksonet er den lange utløperen som leder nerveimpulsen bort fra cellelegemet (soma) og videre til andre nevroner, muskelceller eller kjertelceller. Dendrittene mottar signaler, soma bearbeider dem, og myelinskjeden er et isolerende lag rundt aksonet – ikke en del som leder signalet i seg selv.',
        hints: ['Tenk på informasjonsflyten i et nevron: mottak → bearbeiding → videresending.'],
      },
    },

    // ========== TEORI 2: Hvilemembranpotensial og aksjonspotensial ==========
    {
      id: 'bio2-3-1-membranpotensial',
      type: 'text',
      content: `## Hvilemembranpotensial og aksjonspotensial

### Hvilemembranpotensialet

Når et nevron er i hvile (ikke sender signaler), har det en **elektrisk spenningsforskjell** over cellemembranen på omtrent **–70 mV**. Innsiden av cellen er negativ i forhold til utsiden. Dette kalles **hvilemembranpotensialet**.

Spenningsforskjellen opprettholdes av flere mekanismer:

1. **Natrium-kalium-pumpen** ($Na^+/K^+$-ATPase): Transporterer aktivt **3 $Na^+$ ut** og **2 $K^+$ inn** per ATP-molekyl. Dette skaper en ujevn ionefordeling.
2. **Kaliumlekkasjekanaler**: Membranen er mer permeabel for $K^+$ enn for $Na^+$ i hvile. $K^+$-ioner lekker ut, noe som gjør innsiden mer negativ.
3. **Negativ ladede proteiner**: Store, negativt ladede proteiner inne i cellen kan ikke passere membranen.

### Aksjonspotensial

Et **aksjonspotensial** er en rask, kortvarig endring i membranpotensialet som utgjør nerveimpulsen. Det følger en karakteristisk faseinndeling:

**1. Hvile (–70 mV)**
- Cellen er i likevekt med natrium-kalium-pumpen aktiv

**2. Depolarisering**
- Et signal (f.eks. fra en synapse) åpner **spenningsstyrte $Na^+$-kanaler**
- $Na^+$ strømmer inn i cellen langs konsentrasjonsgradienten
- Membranpotensialet stiger raskt mot **+30 mV**

**3. Repolarisering**
- $Na^+$-kanalene inaktiveres etter ca. 1 ms
- **Spenningsstyrte $K^+$-kanaler** åpnes og $K^+$ strømmer ut
- Membranpotensialet synker tilbake mot hvileverdi

**4. Hyperpolarisering**
- $K^+$-kanalene lukkes med en forsinkelse, så litt for mye $K^+$ lekker ut
- Potensialet faller kortvarig under –70 mV (til ca. –80 mV)
- $Na^+/K^+$-pumpen gjenoppretter balansen

### Alt-eller-ingenting-prinsippet

Et aksjonspotensial utløses bare dersom membranen depolariseres til **terskelverdien** (ca. –55 mV). Hvis terskelen nås, fyrer neuronet med full styrke. Styrken på aksjonspotensialene varierer ikke – informasjon kodes i stedet som **frekvensen** av aksjonspotensial (mange per sekund = sterkere signal).`,
    },

    {
      id: 'bio2-3-1-def-aksjonspotensial',
      type: 'definition',
      title: 'Aksjonspotensial',
      content: 'Et aksjonspotensial er en rask, forbigående endring i membranpotensialet i en nervecelle, fra ca. –70 mV til +30 mV og tilbake igjen. Det utløses når depolariseringen når terskelverdien (ca. –55 mV) og følger alt-eller-ingenting-prinsippet. Aksjonspotensialene forplanter seg langs aksonet som nerveimpulser.',
    },

    {
      id: 'bio2-3-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Fasene i et aksjonspotensial',
      problem: 'Beskriv hva som skjer med membranpotensialet og ionekanalene i et nevron når det mottar et tilstrekkelig sterkt signal. Inkluder alle fire faser.',
      solution: `**Løsning:**

**Fase 1 – Hvile (–70 mV):**
Neuronet er i hvile. Natrium-kalium-pumpen opprettholder ioneforskjellen med 3 $Na^+$ ut og 2 $K^+$ inn. Kaliumlekkasjekanaler holder innsiden negativ.

**Fase 2 – Depolarisering (–70 → +30 mV):**
Et tilstrekkelig sterkt signal depolariserer membranen til terskelverdien (ca. –55 mV). Spenningsstyrte $Na^+$-kanaler åpnes raskt. $Na^+$ strømmer inn i cellen, og membranpotensialet stiger mot +30 mV.

**Fase 3 – Repolarisering (+30 → –70 mV):**
Etter ca. 1 ms inaktiveres $Na^+$-kanalene automatisk. Spenningsstyrte $K^+$-kanaler åpnes (med liten forsinkelse). $K^+$ strømmer ut av cellen, og potensialet synker tilbake.

**Fase 4 – Hyperpolarisering (–70 → –80 → –70 mV):**
$K^+$-kanalene lukkes med forsinkelse, slik at potensialet midlertidig faller under hvilepotensialet. I denne **refraktærperioden** er neuronet vanskeligere å aktivere på nytt. Natrium-kalium-pumpen gjenoppretter ionbalansen.

Hele aksjonspotensialforløpet tar omtrent **2–3 millisekunder**.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'bio2-3-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-1-ex-2',
        number: '3.1.2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva skjer under depolariseringsfasen av et aksjonspotensial?',
        options: [
          { id: 'a', text: 'Kaliumioner strømmer ut av cellen gjennom spenningsstyrte kanaler', isCorrect: false },
          { id: 'b', text: 'Natriumioner strømmer inn i cellen gjennom spenningsstyrte kanaler', isCorrect: true },
          { id: 'c', text: 'Natrium-kalium-pumpen transporterer ioner aktivt over membranen', isCorrect: false },
          { id: 'd', text: 'Kloridioner strømmer inn og gjør cellen mer negativ', isCorrect: false },
        ],
        solution: 'Under depolariseringen åpnes spenningsstyrte natriumkanaler, og $Na^+$ strømmer raskt inn i cellen langs konsentrasjonsgradienten. Dette gjør innsiden av cellen mer positiv (fra –70 mV mot +30 mV). Kaliumutstrømming skjer i repolariseringsfasen, og natrium-kalium-pumpen arbeider kontinuerlig, men er ikke årsaken til den raske depolariseringen.',
        hints: ['Tenk på hvilke ioner som gjør innsiden av cellen mer positiv.'],
      },
    },

    // ========== TEORI 3: Synapser og nevrotransmittere ==========
    {
      id: 'bio2-3-1-synapser',
      type: 'text',
      content: `## Synapser og nevrotransmittere

### Synapsens struktur

En **synapse** er kontaktpunktet mellom to nevroner, eller mellom et nevron og en effektorcelle (muskel- eller kjertelcelle). De fleste synapser i nervesystemet er **kjemiske synapser** med følgende struktur:

- **Presynaptisk endeplade**: Aksonterminalen som sender signalet. Inneholder **synaptiske vesikler** fylt med nevrotransmitter.
- **Synaptisk spalte**: Et smalt rom (ca. 20–40 nm) mellom de to cellene.
- **Postsynaptisk membran**: Membranen på mottakercellen, med **reseptorer** som binder nevrotransmitteren.

### Synaptisk overføring – trinn for trinn

1. **Aksjonspotensial ankommer** aksonterminalen
2. **Spenningsstyrte $Ca^{2+}$-kanaler åpnes**, og kalsiumioner strømmer inn
3. Kalsiumøkningen trigger **eksocytose**: synaptiske vesikler fusjonerer med membranen og frigjør nevrotransmitter i synaptisk spalte
4. Nevrotransmittermolekyler **binder til reseptorer** på den postsynaptiske membranen
5. Reseptorbinding åpner **ionekanaler** i den postsynaptiske cellen
6. Avhengig av type reseptor oppstår enten en **eksitatorisk** (stimulerende) eller **inhibitorisk** (hemmende) respons
7. Nevrotransmitteren **fjernes** fra spalten ved enzymatisk nedbrytning, gjenopptak eller diffusjon

### Viktige nevrotransmittere

| Nevrotransmitter | Type | Hovedfunksjon |
|---|---|---|
| **Acetylkolin** | Eksitatorisk/inhibitorisk | Muskelstyring, hukommelse, læring |
| **Noradrenalin** | Eksitatorisk | Oppmerksomhet, kamp-eller-flukt-respons |
| **Dopamin** | Eksitatorisk/modulerende | Belønning, motivasjon, motorikk |
| **Serotonin** | Modulerende | Humør, søvn, appetitt |
| **GABA** | Inhibitorisk | Hovedhemmer i hjernen, demper aktivitet |
| **Glutamat** | Eksitatorisk | Hovedstimulator i hjernen, læring |

### Eksitatoriske og inhibitoriske signaler

Et enkelt nevron mottar signaler fra opptil **10 000** andre nevroner. Noen av disse er **eksitatoriske** (depolariserer den postsynaptiske cellen og gjør det lettere å utløse aksjonspotensial), mens andre er **inhibitoriske** (hyperpolariserer cellen og gjør det vanskeligere). Neuronet summerer alle innkommende signaler – dette kalles **synaptisk integrasjon**. Bare dersom summen overstiger terskelverdien, fyrer neuronet.`,
    },

    {
      id: 'bio2-3-1-def-synapse',
      type: 'definition',
      title: 'Synapse',
      content: 'En synapse er koblingspunktet der signaler overføres mellom to nerveceller, eller mellom en nervecelle og en effektorcelle. I en kjemisk synapse frigjøres nevrotransmittere fra den presynaptiske cellen, diffunderer over synaptisk spalte og binder til reseptorer på den postsynaptiske cellen. Signaloverføringen er enveis og kan være eksitatorisk (stimulerende) eller inhibitorisk (hemmende).',
    },

    {
      id: 'bio2-3-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Synaptisk overføring ved den nevromuskulære synapsen',
      problem: 'Forklar trinn for trinn hva som skjer når en nerveimpuls fører til at en skjelettmuskel trekker seg sammen, fra aksjonspotensial i motornevronet til muskelkontraksjon.',
      solution: `**Løsning:**

1. Et **aksjonspotensial** brer seg langs aksonet i motornevronet og ankommer aksonterminalen ved den nevromuskulære synapsen.

2. Aksjonspotensialene åpner **spenningsstyrte kalsiumkanaler** ($Ca^{2+}$) i aksonterminalen. Kalsiumioner strømmer inn.

3. Kalsiumøkningen utløser **eksocytose**: synaptiske vesikler med **acetylkolin (ACh)** fusjonerer med den presynaptiske membranen og frigjør ACh i den synaptiske spalten.

4. ACh diffunderer over den synaptiske spalten (ca. 20 nm) og binder til **nikotinreseptorer** på muskelcellens membran.

5. Reseptorbindingen åpner **natriumkanaler** i muskelcellens membran. $Na^+$ strømmer inn, og muskelcellens membran **depolariseres**.

6. Depolariseringen utløser et aksjonspotensial i muskelcellen, som fører til frigjøring av $Ca^{2+}$ fra sarkoplasmatisk retikulum og dermed **muskelkontraksjon**.

7. Enzymet **acetylkolinesterase** bryter raskt ned ACh i den synaptiske spalten, slik at signalet opphører og muskelen kan relaksere.

Denne prosessen tar bare noen få millisekunder og sikrer rask, presis kontroll av muskulaturen.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'bio2-3-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-1-ex-3',
        number: '3.1.3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvilken rolle spiller kalsiumioner ($Ca^{2+}$) i synaptisk signaloverføring?',
        options: [
          { id: 'a', text: 'De virker som nevrotransmittere i den synaptiske spalten', isCorrect: false },
          { id: 'b', text: 'De utløser frigjøring av nevrotransmitter fra synaptiske vesikler', isCorrect: true },
          { id: 'c', text: 'De opprettholder hvilemembranpotensialet i neuronet', isCorrect: false },
          { id: 'd', text: 'De bryter ned nevrotransmitteren i den synaptiske spalten', isCorrect: false },
        ],
        solution: 'Når aksjonspotensialene når aksonterminalen, åpnes spenningsstyrte kalsiumkanaler. Innstrømmingen av $Ca^{2+}$ trigger eksocytose av synaptiske vesikler, slik at nevrotransmitteren frigjøres i den synaptiske spalten. Uten kalsium ville ingen nevrotransmitter blitt frigjort, og synaptisk overføring ville stoppe opp.',
        hints: ['Kalsium er viktig i aksonterminalen – hva utløser frigjøringen av nevrotransmitter?'],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'bio2-3-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Et **nevron** består av cellelegeme (soma), dendritter (mottar signaler) og akson (sender signaler).
- **Myelinskjeden** isolerer aksonet og muliggjør rask **saltatorisk ledning** via Ranvierske innsnøringer.
- **Hvilemembranpotensialet** (–70 mV) opprettholdes av natrium-kalium-pumpen og kaliumlekkasjekanaler.
- Et **aksjonspotensial** er en rask depolarisering (til +30 mV) fulgt av repolarisering, og følger **alt-eller-ingenting-prinsippet**.
- Aksjonspotensialforløpet drives av spenningsstyrte $Na^+$-kanaler (depolarisering) og $K^+$-kanaler (repolarisering).
- **Synapser** overfører signaler via nevrotransmittere som frigjøres ved kalsiumavhengig eksocytose.
- Signaler kan være **eksitatoriske** (stimulerende, f.eks. glutamat) eller **inhibitoriske** (hemmende, f.eks. GABA).
- **Synaptisk integrasjon** summerer alle innkommende signaler og avgjør om neuronet fyrer.`,
    },

    // ========== SAMLEOPPGAVE ==========
    {
      id: 'bio2-3-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-1-ex-4',
        number: '3.1.4',
        type: 'classic',
        difficulty: 'middels',
        task: 'Forklar hvordan et nervesignal overføres fra ett nevron til et annet ved en kjemisk synapse. Ta med alle trinn fra aksjonspotensial i det presynaptiske nevronet til respons i det postsynaptiske nevronet, og nevn hvilke ioner og molekyler som er involvert i hvert trinn.',
        hints: [
          'Start med hva som skjer når aksjonspotensialene ankommer aksonterminalen.',
          'Husk rollen til kalsiumioner og eksocytose.',
          'Beskriv hva som skjer på den postsynaptiske siden og hvordan signalet avsluttes.',
        ],
        solution: 'Et aksjonspotensial ankommer aksonterminalen og åpner spenningsstyrte kalsiumkanaler. Innstrømming av Ca²⁺ trigger eksocytose av synaptiske vesikler, og nevrotransmitter (f.eks. acetylkolin) frigjøres i den synaptiske spalten. Nevrotransmitteren binder til reseptorer på den postsynaptiske membranen og åpner ionekanaler (f.eks. Na⁺-kanaler for eksitatoriske synapser). Na⁺ strømmer inn og depolariserer den postsynaptiske cellen, noe som kan utløse et nytt aksjonspotensial dersom terskelverdien nås. Signalet avsluttes ved at nevrotransmitteren brytes ned av enzymer (f.eks. acetylkolinesterase), tas opp igjen i den presynaptiske cellen, eller diffunderer bort.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'bio2-3-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-1-ex-5',
        number: '3.1.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Nervegiften kurare blokkerer acetylkolinreseptorer ved den nevromuskulære synapsen, mens nervegassen sarin hemmer enzymet acetylkolinesterase. Forklar med utgangspunkt i din kunnskap om synaptisk overføring hvilken effekt hvert av disse stoffene har på muskelaktivitet, og begrunn hvorfor effektene er forskjellige.',
        hints: [
          'Tenk på hva som skjer dersom reseptorene ikke kan binde acetylkolin.',
          'Tenk på hva som skjer dersom acetylkolin ikke brytes ned i den synaptiske spalten.',
        ],
        solution: 'Kurare blokkerer nikotinreseptorene slik at acetylkolin ikke kan binde seg og åpne ionekanaler i muskelcellen. Resultatet er lammelse – musklene kan ikke trekke seg sammen fordi signalet fra motornevronet ikke når fram. Sarin hemmer acetylkolinesterase, slik at acetylkolin ikke brytes ned i den synaptiske spalten. ACh akkumuleres og stimulerer muskelcellene kontinuerlig, noe som fører til ukontrollerte muskelkramper og til slutt lammelse fordi musklene ikke kan relaksere. Begge stoffene fører til lammelse, men via motsatte mekanismer: kurare hindrer signaloverføring (ingen stimulering), mens sarin forårsaker overstimulering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],

  exercises: [],
};

// ============================================================================
// Kapittel 3.2: Sentralnervesystemet
// ============================================================================

export const CHAPTER_BIOLOGI_2_3_2: TextbookChapter = {
  id: 'biologi-2-3-2',
  courseId: 'biologi-2',
  chapterNumber: '3.2',
  title: 'Sentralnervesystemet',
  description: 'Hjernen, ryggmargen og hjernens funksjonsområder.',
  estimatedMinutes: 25,
  competenceGoals: [
    'beskrive sentralnervesystemets oppbygning',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'bio2-3-2-intro',
      type: 'text',
      content: `# Sentralnervesystemet

I dette kapittelet skal du lære om:

- Sentralnervesystemets to hoveddeler: hjernen og ryggmargen
- Hjernens hovedstrukturer og funksjonsområder
- Ryggmargens oppbygging og rolle i reflekser
- Hjernehinner og cerebrospinalvæske som beskyttelse

**Sentralnervesystemet** (SNS) er det overordnede kontrollsenteret i kroppen. Det mottar, bearbeider og koordinerer informasjon fra sanseorganer og indre organer, og sender ut signaler som styrer muskelaktivitet, hormonproduksjon og andre kroppsfunksjoner. SNS består av **hjernen** og **ryggmargen** og er beskyttet av beinstrukturer (kraniet og virvelsøylen), hjernehinner og cerebrospinalvæske.`,
    },

    // ========== TEORI 1: Hjernens hovedstrukturer ==========
    {
      id: 'bio2-3-2-hjernen',
      type: 'text',
      content: `## Hjernens hovedstrukturer

Hjernen veier omtrent **1,3–1,4 kg** hos voksne og inneholder anslagsvis **86 milliarder nevroner**. Den kan deles inn i flere hovedområder med ulike funksjoner:

### Storhjernen (cerebrum)

Storhjernen er den største delen og utgjør ca. 85 % av hjernens masse. Den er delt i to **hemisfærer** forbundet av **corpus callosum** (hjernebjelken). Overflaten er sterkt foldet i **vindinger** (gyri) og **furer** (sulci), noe som øker overflatearealet.

**Hjernebarken (cortex cerebri)** er det ytre laget av grå substans (2–4 mm tykt) og er setet for bevisst tenkning, sansning, motorikk og språk. Hver hemisfære er delt i fire lapper:

- **Frontallappen**: Planlegging, beslutningstaking, motorikk, personlighet, tale (Brocas område)
- **Parietallappen**: Somatosensorikk (berøring, smerte, temperatur), romlig orientering
- **Temporallappen**: Hørsel, språkforståelse (Wernickes område), hukommelse
- **Oksipitallappen**: Syn og visuell bearbeiding

### Lillehjernen (cerebellum)

Lillehjernen ligger bak og under storhjernen. Den er essensiell for:
- **Koordinering av bevegelser** – sikrer at bevegelser er jevne og presise
- **Balanse** – bearbeider informasjon fra balanseorganet i det indre øret
- **Motorisk læring** – viktig for å lære nye bevegelsesmønstre (f.eks. sykkelriding)

Lillehjernen inneholder over **halvparten** av hjernens nevroner til tross for at den utgjør kun ca. 10 % av hjernens volum.

### Hjernestammen

Hjernestammen forbinder storhjernen med ryggmargen og består av tre deler:

- **Midthjernen (mesencephalon)**: Relé for syns- og hørselsinformasjon, visse reflekser
- **Broen (pons)**: Forbinder lillehjernen med resten av hjernen, rolle i søvn og åndedrett
- **Den forlengede marg (medulla oblongata)**: Styrer vitale, automatiske funksjoner som hjerterytme, åndedrett og blodtrykk

### Mellomhjernen (diencephalon)

- **Thalamus**: «Porten til bevisstheten» – filtrerer og videresender sanseinformasjon til hjernebarken (unntatt lukt)
- **Hypothalamus**: Styrer det autonome nervesystemet, hormonregulering via hypofysen, kroppstemperatur, sult, tørst og døgnrytme`,
    },

    {
      id: 'bio2-3-2-def-hjernebarken',
      type: 'definition',
      title: 'Hjernebarken (cortex cerebri)',
      content: 'Hjernebarken er det ytre laget av grå substans i storhjernen, 2–4 mm tykt, bestående av nevronenes cellelegemer. Den er sterkt foldet for å øke overflatearealet og er ansvarlig for høyere hjernefunksjoner som bevisst tenkning, sansepersepsjon, frivillig motorikk, språk og hukommelse. Den deles i fire lapper: frontallappen, parietallappen, temporallappen og oksipitallappen.',
    },

    {
      id: 'bio2-3-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Lokalisering av hjernefunksjoner',
      problem: 'En pasient får en skade i venstre frontallapp, nærmere bestemt i et område kalt Brocas område. Hvilke symptomer kan pasienten forvente, og hvorfor?',
      solution: `**Løsning:**

**Brocas område** ligger i den nedre delen av venstre frontallapp (hos de fleste mennesker) og er ansvarlig for **motorisk tale** – altså evnen til å produsere sammenhengende talespråk.

**Forventede symptomer (Brocas afasi):**
- Pasienten vil ha **vanskeligheter med å snakke** – talen blir hakkete, langsom og grammatisk forenklet
- Pasienten **forstår** det andre sier (Wernickes område i temporallappen er intakt)
- Pasienten vet hva de vil si, men klarer ikke å forme ordene og setningene korrekt
- Skriving kan også være påvirket, da dette også er en form for språkproduksjon

**Hvorfor?**
Brocas område koordinerer musklene som brukes ved tale (lepper, tunge, strupehode). Uten dette området kan hjernen fortsatt bearbeide og forstå språk, men selve produksjonen av tale svikter. Dette illustrerer at ulike hjernefunksjoner er **lokalisert** til bestemte deler av hjernebarken.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'bio2-3-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-2-ex-1',
        number: '3.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken del av hjernen er hovedansvarlig for å koordinere bevegelser og opprettholde balanse?',
        options: [
          { id: 'a', text: 'Storhjernen (cerebrum)', isCorrect: false },
          { id: 'b', text: 'Lillehjernen (cerebellum)', isCorrect: true },
          { id: 'c', text: 'Hjernestammen', isCorrect: false },
          { id: 'd', text: 'Hypothalamus', isCorrect: false },
        ],
        solution: 'Lillehjernen (cerebellum) er ansvarlig for koordinering av bevegelser, balanse og motorisk læring. Den sørger for at bevegelser er jevne og presise, og bearbeider informasjon fra balanseorganet. Storhjernen initierer frivillige bevegelser, hjernestammen styrer vitale funksjoner, og hypothalamus regulerer hormoner og homøostase.',
        hints: ['Navnet kan gi et hint – denne strukturen er den «lille» versjonen av en annen hjernedel.'],
      },
    },

    // ========== TEORI 2: Ryggmargen ==========
    {
      id: 'bio2-3-2-ryggmargen',
      type: 'text',
      content: `## Ryggmargen

Ryggmargen er en langstrakt nervøs struktur som strekker seg fra hjernestammen (medulla oblongata) ned gjennom virvelkanalen til omtrent nivået av første–andre lumbale virvel (L1–L2). Den er ca. **45 cm lang** hos voksne og har en diameter på ca. 1–1,5 cm.

### Tverrsnitt av ryggmargen

Et tverrsnitt av ryggmargen viser et karakteristisk mønster:

**Grå substans (sentral, H-formet):**
- **Dorsale (bakre) horn**: Mottar sensorisk informasjon fra kroppen via dorsale nerverøtter
- **Ventrale (fremre) horn**: Inneholder motornevroner som sender signaler til musklene via ventrale nerverøtter
- **Laterale horn** (kun i bryst- og korsryggsegmenter): Inneholder nevroner i det autonome nervesystemet

**Hvit substans (ytre):**
- Består av myeliniserte aksoner organisert i **baner** (tractus)
- **Stigende baner**: Leder sensorisk informasjon oppover til hjernen
- **Synkende baner**: Leder motoriske kommandoer nedover fra hjernen

### Refleksbuen

Ryggmargen er senteret for **spinale reflekser** – raske, automatiske reaksjoner som ikke krever bevisst hjernedeltagelse:

1. **Reseptor** oppdager stimulus (f.eks. smerte i fingeren)
2. **Sensorisk nevron** sender signal via dorsal rot inn i ryggmargens grå substans
3. **Internevron** i ryggmargen kobler sensorisk nevron til motornevron
4. **Motornevron** sender signal via ventral rot ut til effektor (muskel)
5. **Effektor** utfører respons (f.eks. trekke hånden tilbake)

Refleksen skjer i løpet av millisekunder, lenge før signalet rekker opp til hjernen for bevisst bearbeiding. Hjernen informeres parallelt, men refleksresponsen er allerede igangsatt.

### Spinalnervene

Fra ryggmargen utgår **31 par spinalnerver**, som hver består av:
- En **dorsal rot** (sensorisk – inn til ryggmargen)
- En **ventral rot** (motorisk – ut fra ryggmargen)

Disse forener seg til en blandet spinalnerve som forsyner et bestemt kroppsområde (**dermatom**).`,
    },

    {
      id: 'bio2-3-2-def-refleksbue',
      type: 'definition',
      title: 'Refleksbue',
      content: 'En refleksbue er den nevrale banen som formidler en refleks. Den består av fem komponenter: (1) reseptor som oppdager stimulus, (2) sensorisk (afferent) nevron som leder impulsen til sentralnervesystemet, (3) integreringssenter (vanligvis et internevron i ryggmargen), (4) motorisk (efferent) nevron som leder responssignalet ut, og (5) effektor (muskel eller kjertel) som utfører responsen. Reflekser er raske, automatiske og forutsigbare.',
    },

    {
      id: 'bio2-3-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Knerefleksen',
      problem: 'Beskriv hva som skjer fra det øyeblikket en lege slår med en reflekshammer under kneskålen til beinet sparker opp. Identifiser alle komponentene i refleksbuen.',
      solution: `**Løsning:**

**Knerefleksen (patellarefleksen)** er et eksempel på en **monosynaptisk strekkerefleks**:

1. **Stimulus**: Reflekshammeren slår på patellarsenen under kneskålen, noe som strekker quadriceps-muskelen på forsiden av låret.

2. **Reseptor**: **Muskelspindler** (strekkereseptorer) i quadriceps registrerer den plutselige strekkingen.

3. **Sensorisk nevron**: Et afferent nevron leder impulsen fra muskelspindlene via dorsal rot inn i ryggmargens lumbale segment.

4. **Integreringssenter**: I dette tilfellet er det en **direkte synapse** mellom det sensoriske nevronet og motornevronet i det ventrale hornet – det er ingen internevron, derav «monosynaptisk».

5. **Motornevron**: Et efferent nevron i det ventrale hornet sender signal via ventral rot ut til quadriceps.

6. **Effektor**: Quadriceps-muskelen trekker seg sammen, og beinet sparker opp (kneekstensjon).

**Tilleggskomponent**: Samtidig sender et internevron et inhibitorisk signal til motornevronene for **hamstringsmusklene** (bøyerne på baksiden av låret), slik at disse relakserer. Dette kalles **resiprok inhibisjon** og sikrer at bevegelsen er koordinert.

Hele refleksen tar ca. **25–50 millisekunder**.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'bio2-3-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-2-ex-2',
        number: '3.2.2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'I hvilken rekkefølge passerer et sensorisk signal gjennom ryggmargen?',
        options: [
          { id: 'a', text: 'Ventral rot → grå substans → hvit substans → hjernen', isCorrect: false },
          { id: 'b', text: 'Dorsal rot → grå substans (dorsalt horn) → hvit substans (stigende baner) → hjernen', isCorrect: true },
          { id: 'c', text: 'Hvit substans → grå substans → dorsal rot → hjernen', isCorrect: false },
          { id: 'd', text: 'Dorsal rot → hvit substans → ventral rot → hjernen', isCorrect: false },
        ],
        solution: 'Sensorisk informasjon kommer inn i ryggmargen via den dorsale (bakre) roten og ankommer først det dorsale hornet i den grå substansen. Herfra kobles signalet videre til stigende baner i den hvite substansen, som leder informasjonen opp til hjernen. Ventral rot er motorisk (utadgående).',
        hints: ['Dorsal = bakside/sensorisk, ventral = framside/motorisk.'],
      },
    },

    // ========== TEORI 3: Beskyttelse av SNS ==========
    {
      id: 'bio2-3-2-beskyttelse',
      type: 'text',
      content: `## Beskyttelse av sentralnervesystemet

Hjernen og ryggmargen er livsviktige og svært sårbare organer som er beskyttet av flere lag:

### Beinstrukturer
- **Kraniet** omslutter og beskytter hjernen
- **Virvelsøylen** omgir og beskytter ryggmargen i virvelkanalen

### Hjernehinnene (meningene)

Tre bindevevshinner omgir SNS:

1. **Dura mater** (den harde hinnen): Ytterst. Tykk, sterk bindevevshinne som gir mekanisk beskyttelse.
2. **Arachnoidea** (edderkopphinnen): Mellomlag. Tynnere hinne som danner et rom fylt med cerebrospinalvæske.
3. **Pia mater** (den bløte hinnen): Innerst. Tynn hinne som ligger tett inntil hjernens og ryggmargens overflate, med blodkar.

Mellom arachnoidea og pia mater ligger **subaraknoidalrommet**, fylt med cerebrospinalvæske.

### Cerebrospinalvæske (CSF)

Cerebrospinalvæsken er en klar, fargeløs væske som:
- Produseres av **plexus choroideus** i hjernens hulrom (ventrikler)
- Sirkulerer gjennom ventriklene, rundt hjernen og ryggmargen
- Fungerer som **støtdemper** mot mekanisk påvirkning
- Transporterer næringsstoffer og avfallsstoffer
- Opprettholder et stabilt kjemisk miljø for nevronene
- Volum: ca. **150 ml** til enhver tid, men fornyes flere ganger daglig

### Blod-hjerne-barrieren

**Blod-hjerne-barrieren** er en selektiv barriere dannet av tette koblinger mellom endotelcellene i hjernens blodkar. Den:
- Hindrer de fleste stoffer i blodet fra å nå hjernevevet
- Slipper gjennom oksygen, karbondioksid, glukose og visse aminosyrer
- Beskytter hjernen mot giftstoffer, patogener og hormonsvingninger
- Gjør det utfordrende å levere legemidler til hjernen`,
    },

    {
      id: 'bio2-3-2-def-csf',
      type: 'definition',
      title: 'Cerebrospinalvæske (CSF)',
      content: 'Cerebrospinalvæske er en klar væske som fyller ventriklene i hjernen og subaraknoidalrommet rundt hjernen og ryggmargen. Den produseres av plexus choroideus, fungerer som støtdemper mot mekaniske påkjenninger, transporterer næringsstoffer og avfallsstoffer, og bidrar til et stabilt kjemisk miljø for nervevevet. Volumet er ca. 150 ml og fornyes flere ganger i døgnet.',
    },

    {
      id: 'bio2-3-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Blod-hjerne-barrierens kliniske betydning',
      problem: 'Forklar hvorfor det er vanskelig å behandle hjerneinfeksjoner med antibiotika, med utgangspunkt i blod-hjerne-barrierens egenskaper.',
      solution: `**Løsning:**

**Blod-hjerne-barrieren** er dannet av endotelceller i hjernens kapillærer som er forbundet med **tette koblinger** (tight junctions). Denne barrieren er svært selektiv og slipper kun gjennom:

- Små, fettløselige molekyler (f.eks. $O_2$, $CO_2$)
- Molekyler med spesifikke transportproteiner (f.eks. glukose)

**Problemet med antibiotikabehandling:**

De fleste antibiotika er **store, vannløselige molekyler** som ikke kan passere de tette koblingene i barrieren. Selv om blodkonsentrasjonen av antibiotikumet er høy, når svært lite av legemiddelet fram til hjernevevet der infeksjonen er.

**Kliniske konsekvenser:**
- Ved hjernehinnebetennelse (meningitt) kan man utnytte at inflammasjon gjør barrieren noe mer permeabel
- Man må bruke antibiotika i svært høye doser for å oppnå tilstrekkelig konsentrasjon i hjernen
- Noen ganger gis antibiotika **direkte inn i spinalvæsken** (intratekal injeksjon) for å omgå barrieren
- Forskning pågår for å utvikle metoder som midlertidig åpner barrieren eller bruker nanotransportører for å levere legemidler til hjernen`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'bio2-3-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-2-ex-3',
        number: '3.2.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedfunksjonen til thalamus?',
        options: [
          { id: 'a', text: 'Å koordinere bevegelser og balanse', isCorrect: false },
          { id: 'b', text: 'Å styre åndedrett og hjerterytme', isCorrect: false },
          { id: 'c', text: 'Å filtrere og videresende sanseinformasjon til hjernebarken', isCorrect: true },
          { id: 'd', text: 'Å regulere kroppstemperatur og hormoner', isCorrect: false },
        ],
        solution: 'Thalamus fungerer som hjernens «relestasjon» og kalles ofte «porten til bevisstheten». Den mottar sanseinformasjon fra sanseorganer (unntatt lukt) og filtrerer og videresender denne til de aktuelle områdene i hjernebarken for bevisst bearbeiding. Lillehjernen koordinerer bevegelser, hjernestammen styrer vitale funksjoner, og hypothalamus regulerer temperatur og hormoner.',
        hints: ['Thalamus kalles ofte «porten til bevisstheten» – hva kan det bety?'],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'bio2-3-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Sentralnervesystemet** (SNS) består av hjernen og ryggmargen, og er det overordnede kontrollsenteret.
- **Storhjernen** har fire lapper (frontal-, parietal-, temporal- og oksipitallappen) med spesialiserte funksjoner.
- **Lillehjernen** koordinerer bevegelser og balanse, mens **hjernestammen** styrer vitale funksjoner.
- **Thalamus** filtrerer sanseinformasjon, og **hypothalamus** regulerer hormoner og homøostase.
- **Ryggmargen** leder signaler mellom hjernen og kroppen og er senteret for spinale reflekser.
- En **refleksbue** (reseptor → sensorisk nevron → internevron → motornevron → effektor) muliggjør raske, automatiske reaksjoner.
- SNS er beskyttet av beinstrukturer, tre hjernehinner, cerebrospinalvæske og blod-hjerne-barrieren.`,
    },

    // ========== SAMLEOPPGAVE ==========
    {
      id: 'bio2-3-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-2-ex-4',
        number: '3.2.4',
        type: 'classic',
        difficulty: 'middels',
        task: 'Gjør rede for hjernens fire hovedstrukturer (storhjernen, lillehjernen, hjernestammen og mellomhjernen). For hver struktur, beskriv beliggenhet og minst to viktige funksjoner.',
        hints: [
          'Organiser svaret med én struktur om gangen.',
          'For storhjernen – tenk på de fire lappene og hva slags funksjoner som er lokalisert der.',
          'For hjernestammen – tenk på hvilke automatiske prosesser den styrer.',
        ],
        solution: 'Storhjernen (cerebrum) er den største delen, delt i to hemisfærer med fire lapper. Den styrer bevisst tenkning, sansepersepsjon, frivillig motorikk og språk. Lillehjernen (cerebellum) ligger bak og under storhjernen og koordinerer bevegelser, balanse og motorisk læring. Hjernestammen forbinder storhjernen med ryggmargen og styrer vitale funksjoner som hjerterytme, åndedrett og blodtrykk, samt relé for sansedata. Mellomhjernen inkluderer thalamus (filtrerer og videresender sanseinformasjon til hjernebarken) og hypothalamus (regulerer hormoner via hypofysen, kroppstemperatur, sult, tørst og det autonome nervesystemet).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'bio2-3-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-2-ex-5',
        number: '3.2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En person blir utsatt for en ulykke som skader ryggmargen på nivå T6 (midt i brystsegmentet). Forklar hvilke konsekvenser dette kan ha for personens motoriske og sensoriske funksjoner, og begrunn svaret med utgangspunkt i ryggmargens oppbygging og funksjon.',
        hints: [
          'Tenk på hvilke signaler som passerer gjennom ryggmargen på T6-nivå.',
          'Hva skjer med signaler som normalt passerer skadestedet?',
          'Reflekser under skadenivået – fungerer de fortsatt?',
        ],
        solution: 'En ryggmargsskade på T6-nivå avbryter de stigende (sensoriske) og synkende (motoriske) banene i den hvite substansen. Personen vil miste frivillig motorisk kontroll og sensorisk følelse i kroppsområdene som innerveres av spinalnerver under T6, dvs. underkroppen og bena (paraplegi). Armer og hender er upåvirket fordi de innerveres av cervikalnervene over skadestedet. Spinale reflekser under skadenivået kan fortsatt fungere fordi refleksbuen er intakt lokalt i ryggmargen – men de er ikke lenger under hjernens bevisste kontroll. Det autonome nervesystemet kan også påvirkes, med konsekvenser for blærekontroll, tarmfunksjon og blodtrykksregulering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],

  exercises: [],
};

// ============================================================================
// Kapittel 3.3: Det perifere nervesystemet
// ============================================================================

export const CHAPTER_BIOLOGI_2_3_3: TextbookChapter = {
  id: 'biologi-2-3-3',
  courseId: 'biologi-2',
  chapterNumber: '3.3',
  title: 'Det perifere nervesystemet',
  description: 'Somatisk og autonomt nervesystem, sympatikus og parasympatikus.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forklare det perifere nervesystemet',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'bio2-3-3-intro',
      type: 'text',
      content: `# Det perifere nervesystemet

I dette kapittelet skal du lære om:

- Skillet mellom det somatiske og det autonome nervesystemet
- Sensoriske og motoriske nerver i det somatiske nervesystemet
- Det sympatiske og parasympatiske nervesystemet
- Hvordan de to autonome grenene balanserer hverandre

**Det perifere nervesystemet** (PNS) omfatter alle nervestrukturer utenfor hjernen og ryggmargen. Det fungerer som kommunikasjonsnettverket mellom sentralnervesystemet og resten av kroppen – det bringer sanseinformasjon inn til SNS og fører motoriske kommandoer ut til muskler og kjertler.`,
    },

    // ========== TEORI 1: Somatisk nervesystem ==========
    {
      id: 'bio2-3-3-somatisk',
      type: 'text',
      content: `## Det somatiske nervesystemet

Det somatiske nervesystemet er den delen av PNS som styrer **frivillige** kroppsfunksjoner og formidler bevisst sanseinformasjon. Det har to hovedkomponenter:

### Sensorisk (afferent) del
- Leder informasjon **fra** sansereseptorer i hud, muskler, ledd og sanseorganer **til** sentralnervesystemet
- Sensoriske reseptorer inkluderer:
  - **Mekanoreseptorer**: Berøring, trykk, vibrasjon (f.eks. Meissners og Pacinis legemer i huden)
  - **Termoreseptorer**: Temperatur (varme og kulde)
  - **Nociceptorer**: Smerte
  - **Proprioseptorer**: Kroppsstilling og bevegelse (muskelspindler, Golgi seneorganer)

### Motorisk (efferent) del
- Leder impulser **fra** sentralnervesystemet **til** skjelettmuskulaturen
- Styrer **frivillige bevegelser** – du bestemmer bevisst at du vil bevege en arm eller et bein
- Involverer kun **ett** motornevron fra SNS til muskelen (monosynaptisk motorisk bane, uten ganglier)
- Nevrotransmitteren ved den nevromuskulære synapsen er alltid **acetylkolin**

### Kranienerver

I tillegg til de 31 par spinalnervene fra ryggmargen finnes det **12 par kranienerver** som utgår direkte fra hjernen og hjernestammen. De viktigste inkluderer:

| Nr. | Nerve | Funksjon |
|-----|-------|----------|
| I | Luktenerven (olfaktorius) | Luktesans |
| II | Synsnerven (optikus) | Syn |
| V | Trigeminusnerven | Ansiktsfølelse, tygging |
| VII | Ansiktsnerven (facialis) | Ansiktsmimikk, smak |
| VIII | Hørsels-/balansenervene (vestibulocochlearis) | Hørsel og balanse |
| X | Vagusnerven | Parasympatisk innervering av indre organer |

**Vagusnerven** er spesielt viktig – den er den lengste kranieneven og den viktigste parasympatiske nerven, med forgreninger til hjerte, lunger, mage og tarmer.`,
    },

    {
      id: 'bio2-3-3-def-somatisk',
      type: 'definition',
      title: 'Det somatiske nervesystemet',
      content: 'Det somatiske nervesystemet er den delen av det perifere nervesystemet som formidler bevisst sanseinformasjon (via sensoriske nevroner) og styrer frivillige bevegelser av skjelettmuskulatur (via motoriske nevroner). Det skiller seg fra det autonome nervesystemet ved at det er under bevisst, viljesstyrt kontroll.',
    },

    {
      id: 'bio2-3-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Sensoriske reseptorer i huden',
      problem: 'Du stikker deg på en torn i fingeren og trekker hånden raskt tilbake. Beskriv hvilke sensoriske reseptorer som aktiveres, og forklar forskjellen mellom somatisk og autonom respons i denne situasjonen.',
      solution: `**Løsning:**

**Sensoriske reseptorer som aktiveres:**

1. **Nociceptorer** (smertereseptorer): Aktiveres av vevsskaden fra tornen. Sender smertesignal via raske ($A\\delta$) og langsomme (C) smertfibre til ryggmargen og hjernen.
2. **Mekanoreseptorer**: Registrerer trykket fra tornen mot huden.

**Somatisk respons:**
- Den **raske tilbaketrekningsrefleksen** er en spinal refleks via det somatiske nervesystemet
- Nociceptorer → sensorisk nevron → internevron i ryggmargen → motornevron → bøyemuskler i armen kontraheres
- Denne refleksen er **automatisk** men involverer skjelettmuskulatur (somatisk nervesystem)
- Bevisst smerteopplevelse kommer litt senere, når signalet når hjernebarken

**Autonom respons:**
- Det autonome nervesystemet reagerer parallelt med **stressrespons**:
  - Økt hjertefrekvens (sympatisk aktivering)
  - Økt svetteproduksjon i håndflatene
  - Lokalt: inflammasjonsrespons med økt blodtilførsel (rødhet og hevelse)

Situasjonen illustrerer at somatiske (frivillige) og autonome (ufrivillige) systemer ofte aktiveres samtidig ved en stimulus.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'bio2-3-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-3-ex-1',
        number: '3.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedforskjellen mellom det somatiske og det autonome nervesystemet?',
        options: [
          { id: 'a', text: 'Det somatiske styrer frivillige bevegelser, det autonome styrer ufrivillige funksjoner', isCorrect: true },
          { id: 'b', text: 'Det somatiske er en del av sentralnervesystemet, det autonome er perifert', isCorrect: false },
          { id: 'c', text: 'Det somatiske bruker nevrotransmittere, det autonome bruker hormoner', isCorrect: false },
          { id: 'd', text: 'Det somatiske finnes bare i hjernen, det autonome bare i ryggmargen', isCorrect: false },
        ],
        solution: 'Det somatiske nervesystemet styrer frivillige bevegelser av skjelettmuskulaturen og formidler bevisst sanseinformasjon. Det autonome nervesystemet styrer ufrivillige funksjoner som hjerterytme, fordøyelse og kjertelaktivitet. Begge er deler av det perifere nervesystemet og bruker nevrotransmittere for signaloverføring.',
        hints: ['Tenk på hva som er under din bevisste kontroll og hva som skjer automatisk.'],
      },
    },

    // ========== TEORI 2: Det autonome nervesystemet ==========
    {
      id: 'bio2-3-3-autonomt',
      type: 'text',
      content: `## Det autonome nervesystemet

Det autonome (vegetative) nervesystemet styrer **ufrivillige** kroppsfunksjoner – prosesser du normalt ikke tenker over, som hjerterytme, fordøyelse, pupillstørrelse og svetteproduksjon. Det innerverer **glatt muskulatur**, **hjertemuskulatur** og **kjertler**.

Det autonome nervesystemet deles i to hovedgrener med ofte **motsatte** effekter:

### Sympatisk nervesystem («kamp eller flukt»)

Det sympatiske nervesystemet forbereder kroppen på **aktivitet og stressituasjoner**:

- **Hjertet**: Økt hjertefrekvens og slagkraft
- **Luftveier**: Bronkodilatasjon (utvider bronkiene) for økt oksygenopptak
- **Blodkar**: Dilatasjon i skjelettmuskler (økt blodtilførsel), konstriksjon i hud og fordøyelsesorganer
- **Pupiller**: Dilatasjon (mydriasis) – større pupiller for bedre syn
- **Lever**: Glykogenolyse – frigjør glukose til blodet for energi
- **Svette**: Økt svetteproduksjon
- **Fordøyelse**: Redusert aktivitet – peristaltikken bremses

**Nevrotransmitter**: **Noradrenalin** ved målorganet (postganglionært), acetylkolin preganglionært.

De preganglionære nevronene utgår fra **bryst- og korsryggdelen** av ryggmargen (thorakolumbal del) og kobler om i **sympatiske ganglier** nær ryggsøylen.

### Parasympatisk nervesystem («hvile og fordøyelse»)

Det parasympatiske nervesystemet dominerer i **hvile og rolige situasjoner**:

- **Hjertet**: Redusert hjertefrekvens
- **Luftveier**: Bronkokonstriksjon
- **Fordøyelse**: Økt peristaltikk og enzymutskillelse – stimulerer fordøyelsen
- **Pupiller**: Konstriksjon (miosis) – mindre pupiller
- **Spyttkjertler**: Økt spyttproduksjon
- **Blære**: Stimulerer tømming

**Nevrotransmitter**: **Acetylkolin** både preganglionært og postganglionært.

De preganglionære nevronene utgår fra **hjernestammen** (via kranienerver, spesielt vagusnerven) og **sakraldelen** av ryggmargen (kraniosakral del). Gangliene ligger **nær eller i** målorganet.

### Tonevron-prinsippet

I motsetning til det somatiske systemet (ett motornevron), bruker det autonome nervesystemet **to nevroner** i serie:
1. **Preganglionært nevron**: Fra SNS til et ganglion
2. **Postganglionært nevron**: Fra ganglion til målorganet

Synapsen mellom dem er i et **ganglion** (nerveknutepunkt utenfor SNS).`,
    },

    {
      id: 'bio2-3-3-def-autonomt',
      type: 'definition',
      title: 'Det autonome nervesystemet',
      content: 'Det autonome (vegetative) nervesystemet er den delen av det perifere nervesystemet som styrer ufrivillige kroppsfunksjoner. Det deles i to grener: det sympatiske nervesystemet (aktiveres ved stress, «kamp eller flukt») og det parasympatiske nervesystemet (dominerer i hvile, «hvile og fordøyelse»). De to grenene har som regel motsatte effekter på målorganene og balanserer hverandre for å opprettholde homøostase.',
    },

    {
      id: 'bio2-3-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Sympatisk vs. parasympatisk aktivering',
      problem: 'En person opplever plutselig en farlig situasjon (f.eks. en bil som nesten treffer dem). Beskriv minst fem fysiologiske endringer som skjer som følge av sympatisk aktivering, og forklar den biologiske hensikten med hver endring.',
      solution: `**Løsning:**

Ved en akutt fare aktiveres det sympatiske nervesystemet og binyremergelen (som frigjør adrenalin). Følgende endringer inntreffer:

**1. Økt hjertefrekvens og slagkraft**
- *Hensikt*: Pumper mer blod per minutt for å levere oksygen og næringsstoffer til musklene som trengs for flukt eller kamp.

**2. Bronkodilatasjon (utvidelse av luftveiene)**
- *Hensikt*: Øker luftstrømmen til lungene, slik at mer oksygen kan tas opp og mer $CO_2$ fjernes.

**3. Pupilldilatasjon (større pupiller)**
- *Hensikt*: Slipper inn mer lys for bedre syn og bredere synsfelt, viktig for å oppdage trusler.

**4. Økt blodtilførsel til skjelettmuskler, redusert til fordøyelsesorganer**
- *Hensikt*: Omdirigerer blod til musklene der det trengs mest. Fordøyelse er ikke prioritert i en krisesituasjon.

**5. Glykogenolyse i leveren (frigjøring av glukose)**
- *Hensikt*: Øker blodsukkeret for å gi musklene og hjernen raskt tilgjengelig energi.

**6. Økt svetteproduksjon**
- *Hensikt*: Kjøler ned kroppen i forkant av økt fysisk aktivitet og gjør huden glattere (vanskeligere for en angriper å gripe tak).

Alle disse responsene er koordinert for å maksimere sjansen for overlevelse i en akutt trussel. Etter at faren er over, vil det parasympatiske nervesystemet gradvis ta over og gjenopprette kroppen til hviletilstand.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'bio2-3-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-3-ex-2',
        number: '3.3.2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvilken nevrotransmitter frigjøres ved de postganglionære synapsene i det parasympatiske nervesystemet?',
        options: [
          { id: 'a', text: 'Noradrenalin', isCorrect: false },
          { id: 'b', text: 'Dopamin', isCorrect: false },
          { id: 'c', text: 'Acetylkolin', isCorrect: true },
          { id: 'd', text: 'Serotonin', isCorrect: false },
        ],
        solution: 'Det parasympatiske nervesystemet bruker acetylkolin som nevrotransmitter ved begge synapser – både preganglionært (i ganglion) og postganglionært (ved målorganet). Det sympatiske nervesystemet bruker acetylkolin preganglionært, men noradrenalin postganglionært (med noen unntak, som svettekjertler).',
        hints: ['Det parasympatiske systemet bruker samme nevrotransmitter ved begge synapser.'],
      },
    },

    // ========== TEORI 3: Samspill mellom sympatikus og parasympatikus ==========
    {
      id: 'bio2-3-3-samspill',
      type: 'text',
      content: `## Samspill og balanse mellom sympatikus og parasympatikus

De to grenene av det autonome nervesystemet fungerer ikke som en av/på-bryter, men som et **kontinuerlig balansesystem**. De fleste organer mottar innervering fra begge grener, og den endelige effekten avhenger av balansen mellom sympatisk og parasympatisk aktivitet.

### Dual innervering

De fleste indre organer mottar **dobbel innervering** – nerver fra både sympatikus og parasympatikus. Effektene er som regel antagonistiske (motsatte):

| Organ | Sympatisk effekt | Parasympatisk effekt |
|-------|-------------------|----------------------|
| Hjerte | Økt frekvens | Redusert frekvens |
| Bronkier | Dilatasjon | Konstriksjon |
| Pupiller | Dilatasjon | Konstriksjon |
| Fordøyelseskanal | Hemmet peristaltikk | Økt peristaltikk |
| Blære | Relaksering (lagring) | Kontraksjon (tømming) |
| Spyttkjertler | Tykt, lite spytt | Tynt, mye spytt |

### Tonus og kontinuerlig regulering

Begge systemene har en viss **grunnaktivitet** (tonus) til enhver tid. Regulering skjer ved å øke eller redusere aktiviteten i det ene eller begge systemene:

- **I hvile**: Parasympatisk tonus dominerer – hjertefrekvensen holdes nede, fordøyelsen er aktiv
- **Ved aktivitet**: Sympatisk tonus øker – hjertefrekvensen stiger, fordøyelsen dempes
- **Finregulering av hjertefrekvensen**: Selv små endringer i sympatisk/parasympatisk balanse justerer pulsen presist

### Unntak fra dual innervering

Noen strukturer innerveres kun av **sympatikus**:
- **Binyremergen**: Stimuleres direkte av preganglionære sympatiske nevroner til å frigjøre adrenalin og noradrenalin
- **Svettekjertler**: Sympatisk innervering, men bruker unntaksvis acetylkolin som nevrotransmitter
- **De fleste blodkar**: Reguleres hovedsakelig av sympatisk vasokonstriksjon

### Homøostase

Samspillet mellom sympatikus og parasympatikus er en sentral mekanisme for å opprettholde **homøostase** – kroppens evne til å holde det indre miljøet stabilt. Ubalanse mellom de to systemene kan bidra til helseproblemer som høyt blodtrykk, fordøyelsesproblemer, angst og stressrelaterte lidelser.`,
    },

    {
      id: 'bio2-3-3-def-dual-innervering',
      type: 'definition',
      title: 'Dual innervering',
      content: 'Dual innervering betyr at et organ mottar nerveforbindelser fra både det sympatiske og det parasympatiske nervesystemet. De to systemene har som regel antagonistiske (motsatte) effekter på organet, og den samlede responsen avhenger av balansen mellom sympatisk og parasympatisk aktivitet. Dette gir presis regulering av organfunksjoner og bidrar til homøostase.',
    },

    {
      id: 'bio2-3-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Regulering av hjertefrekvens',
      problem: 'Forklar hvordan hjertefrekvensen reguleres av det autonome nervesystemet når en person går fra hvile til løping og deretter tilbake til hvile.',
      solution: `**Løsning:**

**I hvile:**
Det parasympatiske nervesystemet (via vagusnerven) har en dominerende tonus på hjertet. Vagusnerven frigjør **acetylkolin** som binder til muskarine reseptorer i sinusknuten (hjertets naturlige pacemaker) og bremser hjertefrekvensen. Hvilepuls er typisk 60–70 slag/min.

**Overgang til løping:**
1. Hjernen registrerer at kroppen trenger mer oksygen og næringsstoffer
2. **Parasympatisk aktivitet reduseres** (vagal tilbaketrekking) – dette alene kan øke pulsen til ca. 100 slag/min
3. **Sympatisk aktivitet øker**: Sympatiske nerver frigjør **noradrenalin** ved hjertet, og binyremargelen frigjør **adrenalin** til blodet
4. Noradrenalin og adrenalin binder til $\\beta_1$-reseptorer i sinusknuten og hjertemuskulaturen
5. Effekt: Økt hjertefrekvens (opptil 180–200 slag/min) og økt slagstyrke

**Tilbake til hvile:**
1. Hjernen registrerer at aktiviteten er over
2. **Sympatisk aktivitet avtar** gradvis
3. **Parasympatisk aktivitet øker** igjen (vagal tonus gjenopprettes)
4. Acetylkolin bremser sinusknuten tilbake mot hvilepuls
5. Pulsen synker gradvis over minutter

Denne prosessen illustrerer hvordan finregulert balanse mellom sympatikus og parasympatikus gir presis kontroll over hjertefrekvensen i sanntid, tilpasset kroppens aktuelle behov.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'bio2-3-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-3-ex-3',
        number: '3.3.3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvorfor reduseres fordøyelsesaktiviteten under en stressituasjon?',
        options: [
          { id: 'a', text: 'Fordi det parasympatiske nervesystemet øker aktiviteten i mage-tarm-kanalen', isCorrect: false },
          { id: 'b', text: 'Fordi sympatikus hemmer peristaltikk og enzymutskillelse for å spare energi til muskler', isCorrect: true },
          { id: 'c', text: 'Fordi stresshormoner ødelegger fordøyelsesenzymene', isCorrect: false },
          { id: 'd', text: 'Fordi blod-hjerne-barrieren stenger av fordøyelsessignalene', isCorrect: false },
        ],
        solution: 'Under stress aktiveres det sympatiske nervesystemet, som hemmer peristaltikk og enzymutskillelse i mage-tarm-kanalen. Samtidig reduseres den parasympatiske aktiviteten som normalt stimulerer fordøyelsen. Hensikten er å omdirigere blod og energi til skjelettmuskulatur, hjerte og lunger – organer som er viktige for «kamp eller flukt». Fordøyelse er ikke en livsnødvendig funksjon i en akutt krisesituasjon.',
        hints: ['Tenk på prioritering av energi – hva er viktigst i en krisesituasjon?'],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'bio2-3-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Det perifere nervesystemet** (PNS) omfatter alle nervestrukturer utenfor hjernen og ryggmargen.
- **Det somatiske nervesystemet** formidler bevisst sanseinformasjon (afferent) og styrer frivillige bevegelser av skjelettmuskulatur (efferent).
- **Det autonome nervesystemet** styrer ufrivillige funksjoner og deles i sympatikus og parasympatikus.
- **Sympatikus** forbereder kroppen på aktivitet («kamp eller flukt»): økt puls, utvidede pupiller, økt blodsukker, hemmet fordøyelse. Postganglionær nevrotransmitter: **noradrenalin**.
- **Parasympatikus** dominerer i hvile («hvile og fordøyelse»): redusert puls, stimulert fordøyelse, innsnevrede pupiller. Nevrotransmitter: **acetylkolin** ved begge synapser.
- De fleste organer har **dual innervering** med antagonistiske effekter fra begge systemer.
- Det autonome nervesystemet bruker **to nevroner i serie** (preganglionært og postganglionært) i motsetning til det somatiske systemets ene motornevron.
- Balansen mellom sympatikus og parasympatikus er avgjørende for **homøostase**.`,
    },

    // ========== SAMLEOPPGAVE ==========
    {
      id: 'bio2-3-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-3-ex-4',
        number: '3.3.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign det sympatiske og det parasympatiske nervesystemet i en tabell eller strukturert oversikt. Inkluder følgende for hvert system: (a) overordnet funksjon, (b) anatomisk opprinnelse, (c) nevrotransmittere (pre- og postganglionært), (d) effekt på minst fire ulike organer, og (e) ganglienenes plassering.',
        hints: [
          'Bruk gjerne en tabell med to kolonner – én for sympatikus og én for parasympatikus.',
          'Husk at det er forskjeller i nevrotransmittere postganglionært.',
          'Tenk på hvor gangliene befinner seg i forhold til målorganene.',
        ],
        solution: 'Sympatisk: Funksjon: «kamp eller flukt», aktivering ved stress. Opprinnelse: thorakolumbal (bryst-/korsryggsegmenter). Nevrotransmittere: acetylkolin preganglionært, noradrenalin postganglionært. Effekter: økt hjertefrekvens, bronkodilatasjon, pupilldilatasjon, hemmet fordøyelse, glykogenolyse. Ganglier: nær ryggsøylen (paravertebrale og prevertebrale). Parasympatisk: Funksjon: «hvile og fordøyelse», dominerer i hvile. Opprinnelse: kraniosakral (hjernestamme via kranienerver + sakrale spinalsegmenter). Nevrotransmittere: acetylkolin både pre- og postganglionært. Effekter: redusert hjertefrekvens, bronkokonstriksjon, pupillkonstriksjon, økt fordøyelse, blæretømming. Ganglier: nær eller i målorganet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],

  exercises: [],
};

// ============================================================================
// Kapittel 3.4: Sansene
// ============================================================================

export const CHAPTER_BIOLOGI_2_3_4: TextbookChapter = {
  id: 'biologi-2-3-4',
  courseId: 'biologi-2',
  chapterNumber: '3.4',
  title: 'Sansene',
  description: 'Syn, hørsel, lukt, smak og berøring – reseptorer og signalbehandling.',
  estimatedMinutes: 25,
  competenceGoals: [
    'beskrive sansenes funksjon',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'bio2-3-4-intro',
      type: 'text',
      content: `# Sansene

I dette kapittelet skal du lære om:

- De fem hovedsansene og deres reseptortyper
- Synssansen og øyets oppbygging
- Hørselen og ørets funksjon
- Kjemiske sanser: lukt og smak
- Berøringssansen og somatosensoriske reseptorer

**Sansene** gir oss informasjon om omgivelsene og om kroppens indre tilstand. All sanseinformasjon begynner med at en **stimulus** påvirker en **sansereseptor**, som omdanner energien til elektriske nervesignaler. Denne prosessen kalles **transduksjon**. Signalene sendes deretter via sensoriske nerver til hjernen, der de tolkes og gir opphav til bevisst persepsjon.`,
    },

    // ========== TEORI 1: Synssansen ==========
    {
      id: 'bio2-3-4-syn',
      type: 'text',
      content: `## Synssansen

Synet er vår dominerende fjernsans. Øyet fanger opp **elektromagnetisk stråling** i det synlige spekteret (ca. 380–750 nm) og omdanner det til nervesignaler.

### Øyets oppbygging

- **Hornhinnen (cornea)**: Gjennomsiktig ytterflate som bryter lyset (ca. 2/3 av lysbrytningen)
- **Pupillen**: Åpningen i regnbuehinnen som regulerer lysmengden
- **Linsen**: Fininnstiller fokuseringen gjennom **akkomodasjon**
- **Netthinnen (retina)**: Innerste lag med fotoreseptorer

### Fotoreseptorer i netthinnen

**Staver (ca. 120 millioner)**
- Svært lysfølsomme – fungerer ved svakt lys (skotopisk syn)
- Gir **sort-hvitt** syn uten fargeoppløsning
- Inneholder fotopigmentet **rhodopsin**
- Flest i periferien av netthinnen

**Tapper (ca. 6 millioner)**
- Krever sterkere lys (fotopisk syn)
- Gir **fargesyn** og skarp detaljoppløsning
- Tre typer: rødfølsomme (L), grønnfølsomme (M) og blåfølsomme (S)
- Konsentrert i **fovea** (skarpsynsfeltet)

### Signalbehandling

Når lys treffer fotoreseptorene, spaltes fotopigmentet og starter en signalkaskade. Signalet bearbeides gjennom bipolære celler og ganglieceller i netthinnen, og forlater øyet via **synsnerven** til **synsbarken** i oksipitallappen.

I **synsnervekorset (chiasma opticum)** krysser deler av nervefibrene, slik at høyre hjernehalvdel bearbeider venstre synsfelt og omvendt.`,
    },

    {
      id: 'bio2-3-4-def-transduksjon',
      type: 'definition',
      title: 'Sensorisk transduksjon',
      content: 'Sensorisk transduksjon er prosessen der en sansereseptor omdanner en bestemt form for energi (lysenergi, lydenergi, mekanisk trykk, kjemisk stimulus) til et elektrisk nervesignal (reseptorpotensial). Dette er det første trinnet i all sansepersepsjon og finner sted i spesialiserte reseptorceller i sanseorganene.',
    },

    {
      id: 'bio2-3-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Mørketilpasning',
      problem: 'Når du går fra et godt opplyst rom inn i et mørkt rom, ser du svært lite de første sekundene, men etter noen minutter begynner du å se konturer. Forklar denne prosessen med utgangspunkt i fotoreseptorene.',
      solution: `**Løsning:**

**I det opplyste rommet:**
Stavene er blekett – rhodopsinet er spaltet av lyset. Tappene er aktive og gir fargesyn. Pupillen er innsnevret.

**Umiddelbart i mørket:**
- Pupillen utvides raskt for å slippe inn mer lys
- Tappene er for lite lysfølsomme til å fungere ved svakt lys
- Stavene er fortsatt blekett – rhodopsinet er ikke regenerert

**Over 20–30 minutter (mørketilpasning):**
- Rhodopsin regenereres gradvis i stavene
- Stavene blir stadig mer lysfølsomme
- Etter full tilpasning er stavene opptil **1 million ganger** mer lysfølsomme enn tappene

**Resultat:**
Du ser konturer i **gråtoner** (stavene gir ikke fargesyn). Mørketilpasning illustrerer at synsfunksjonen avhenger av **mengden tilgjengelig fotopigment** i reseptorcellene.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'bio2-3-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-4-ex-1',
        number: '3.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken type fotoreseptorer er ansvarlig for fargesyn?',
        options: [
          { id: 'a', text: 'Staver', isCorrect: false },
          { id: 'b', text: 'Tapper', isCorrect: true },
          { id: 'c', text: 'Bipolære celler', isCorrect: false },
          { id: 'd', text: 'Ganglieceller', isCorrect: false },
        ],
        solution: 'Tapper er ansvarlige for fargesyn. Det finnes tre typer tapper med ulike fotopigmenter som er følsomme for rødt, grønt og blått lys (L-, M- og S-tapper). Tappene krever sterkere lys enn stavene og er konsentrert i fovea. Staver gir sort-hvitt syn ved svakt lys.',
        hints: ['Tenk på hvilken fotoreseptortype som finnes i tre varianter for ulike bølgelengder.'],
      },
    },

    // ========== TEORI 2: Hørselen ==========
    {
      id: 'bio2-3-4-horsel',
      type: 'text',
      content: `## Hørselen

Øret fanger opp **lydbølger** (mekaniske trykkvariasjoner) i frekvensområdet ca. 20–20 000 Hz.

### Ørets tre deler

**Ytre øre:** Øremuslingen samler lydbølger → trommehinnen vibrerer.

**Mellomøret:** Tre bein (**hammer, ambolt, stigbøyle**) forsterker vibrasjonene fra trommehinnen til det ovale vinduet. Forsterkningen trengs fordi lyd skal overføres fra luft til væske.

**Indre øre:** Sneglehuset (cochlea) inneholder **Cortis organ** med **hårceller**. Lydbølger setter basilærmembranen i bevegelse → bøyer stereocilier på hårcellene → ionekanaler åpnes → depolarisering → nervesignal.

### Tonotopisk organisering

Basilærmembranen er **tonotopisk**:
- **Høye frekvenser**: Nær basen (stiv, smal membran)
- **Lave frekvenser**: Nær toppen (fleksibel, bred membran)

Signalene sendes via **hørselsnerven** til **hørselsbarken** i temporallappen.`,
    },

    {
      id: 'bio2-3-4-def-harcelle',
      type: 'definition',
      title: 'Hårceller',
      content: 'Hårceller er de sensoriske reseptorcellene i det indre øret (sneglehuset) og balanseorganet. De har tynne utløpere kalt stereocilier. Når stereociliene bøyes av mekaniske bevegelser, åpnes ionekanaler som endrer membranpotensialet. Dette fører til frigjøring av nevrotransmittere og et nervesignal til hjernen. Hårceller kan ikke regenereres hos mennesker – skade gir varig hørselstap.',
    },

    {
      id: 'bio2-3-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Støyskade og hørselstap',
      problem: 'En person som jobber på en byggeplass uten hørselsvern over mange år, utvikler gradvis hørselstap for høye frekvenser. Forklar den biologiske årsaken.',
      solution: `**Løsning:**

**Mekanisme:**
Vedvarende høye lydnivåer (over ca. 85 dB) påfører hårcellene **mekanisk overbelastning**:
1. Stereociliene kan brekke eller fusjonere
2. Metabolsk utmattelse i hårcellene
3. Celledød over tid

**Hvorfor høye frekvenser rammes først:**
Lydbølger passerer **basen** av sneglehuset først (der høyfrekvensreseptorene sitter). Hårcellene der utsettes for mest energi fra alle frekvenser og slites mest.

**Konsekvens:**
Hårceller **kan ikke regenereres** hos mennesker – skaden er permanent. Personen vil ha vanskeligheter med å høre høyfrekvente lyder som konsonanter i tale (s, f, t), noe som gjør det vanskelig å forstå tale i støy.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'bio2-3-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-4-ex-2',
        number: '3.4.2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva er funksjonen til mellomørebeinene (hammer, ambolt og stigbøyle)?',
        options: [
          { id: 'a', text: 'De produserer lydbølger som sendes til det indre øret', isCorrect: false },
          { id: 'b', text: 'De forsterker og overfører vibrasjoner fra trommehinnen til det ovale vinduet', isCorrect: true },
          { id: 'c', text: 'De filtrerer bort skadelige frekvenser', isCorrect: false },
          { id: 'd', text: 'De omdanner lydbølger direkte til nervesignaler', isCorrect: false },
        ],
        solution: 'Mellomørebeinene forsterker og overfører vibrasjoner fra trommehinnen til det ovale vinduet i sneglehuset. Forsterkningen er nødvendig fordi lyd skal overføres fra luft til væske, som har mye høyere akustisk motstand. Uten forsterkning ville ca. 99 % av lydenergien reflekteres.',
        hints: ['Tenk på hva som skjer når lydbølger skal gå fra luft til væske.'],
      },
    },

    // ========== TEORI 3: Lukt, smak og berøring ==========
    {
      id: 'bio2-3-4-kjemiske-sanser',
      type: 'text',
      content: `## Lukt, smak og berøring

### Luktesansen

- **Luktereseptorer** i lukteslimhinnen øverst i nesehulen
- Ca. **400 ulike typer** luktreseptorer, kan skille over 10 000 lukter
- Signaler sendes via **luktenerven** til **luktekolben** og videre til hjernebarken
- Unik kobling: Luktesignaler går **direkte til det limbiske systemet** (amygdala, hippocampus) uten å passere thalamus – forklarer sterke lukt-minne-assosiasjoner

### Smakssansen

- **Smaksløker** i papiller på tungens overflate
- Fem grunnsmaker: **søtt**, **salt**, **surt**, **bittert** og **umami**
- Signaler sendes via kranienerver til **smaksbarken** i parietallappen

### Berøringssansen

Huden inneholder flere typer mekanoreseptorer:
- **Meissners legemer**: Lett berøring og tekstur
- **Pacinis legemer**: Dyp trykk og vibrasjon
- **Ruffinis legemer**: Strekking av huden
- **Merkels celler**: Vedvarende trykk og form
- **Frie nerveender**: Smerte og temperatur

Signalene sendes til **somatosensorisk cortex** i parietallappen. Kroppen er «kartlagt» på hjernebarken (**somatotopisk organisering**) – områder med høy reseptortetthet (fingre, lepper) har store representasjoner (homunculus).`,
    },

    {
      id: 'bio2-3-4-def-reseptor',
      type: 'definition',
      title: 'Sansereseptor',
      content: 'En sansereseptor er en spesialisert celle eller nerveende som reagerer på en bestemt type stimulus (lys, lyd, trykk, temperatur eller kjemiske stoffer). Reseptoren omdanner stimulien til et elektrisk signal gjennom sensorisk transduksjon. Typer: fotoreseptorer (lys), mekanoreseptorer (trykk/bevegelse), kjemoreseptorer (kjemiske stoffer), termoreseptorer (temperatur) og nociceptorer (smerte).',
    },

    {
      id: 'bio2-3-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Lukt og hukommelse',
      problem: 'Mange opplever at en bestemt lukt kan fremkalle et sterkt minne fra barndommen. Forklar den nevrologiske årsaken.',
      solution: `**Løsning:**

Fenomenet kalles **Proust-effekten** og skyldes luktesansens unike nervebane:

De fleste sanser sender signaler først til **thalamus** for filtrering. Luktesignaler følger en **annen rute**:
1. Luktreseptorer → luktekolben
2. Fra luktekolben **direkte** til det **limbiske systemet**:
   - **Amygdala**: Emosjonelle reaksjoner
   - **Hippocampus**: Langtidsminner
3. Signalet når disse strukturene **uten** thalamus-filtrering

Fordi luktesignaler har direkte forbindelse til strukturer for **følelser** og **hukommelse**, kan en lukt utløse levende, emosjonelt ladede minner umiddelbart. Andre sanser mangler denne direkte koblingen.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'bio2-3-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-4-ex-3',
        number: '3.4.3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvorfor har luktesansen en sterkere kobling til følelser og minner enn andre sanser?',
        options: [
          { id: 'a', text: 'Fordi luktesignaler sendes direkte til det limbiske systemet uten å passere thalamus', isCorrect: true },
          { id: 'b', text: 'Fordi luktreseptorene er mer følsomme enn andre sansereseptorer', isCorrect: false },
          { id: 'c', text: 'Fordi luktesignalene bearbeides i frontallappen', isCorrect: false },
          { id: 'd', text: 'Fordi mennesket har flere luktreseptorer enn noen annen sansereseptor', isCorrect: false },
        ],
        solution: 'Luktesignaler sendes direkte fra luktekolben til det limbiske systemet (amygdala og hippocampus) uten å gå via thalamus. Amygdala er sentral for emosjonelle reaksjoner, og hippocampus for hukommelse. Denne direkte nervebanen gjør at lukter kan utløse umiddelbare, emosjonelt ladede minner.',
        hints: ['Tenk på hvilken «mellomstasjon» luktesignaler hopper over.'],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'bio2-3-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Sensorisk transduksjon** omdanner stimulus til elektriske nervesignaler.
- **Synssansen**: Staver (sort-hvitt, svakt lys) og tapper (farger, skarpt syn) i netthinnen. Bearbeides i synsbarken (oksipitallappen).
- **Hørselen**: Hårceller i sneglehuset omdanner lydbølger til nervesignaler. Tonotopisk organisering. Bearbeides i hørselsbarken (temporallappen).
- **Luktesansen**: Kjemoreseptorer i nesehulen. Direkte kobling til limbiske systemet – sterk følelse-/minneassosiasjon.
- **Smakssansen**: Fem grunnsmaker registrert av smaksløker på tungen.
- **Berøringssansen**: Ulike mekanoreseptorer i huden. Somatotopisk representasjon i hjernebarken.`,
    },

    // ========== SAMLEOPPGAVE ==========
    {
      id: 'bio2-3-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-4-ex-4',
        number: '3.4.4',
        type: 'classic',
        difficulty: 'middels',
        task: 'Sammenlign synssansen og hørselen ved å beskrive: (a) hvilken stimulus som registreres, (b) hvilke reseptorceller som er involvert, (c) hvor reseptorene befinner seg, (d) hvordan transduksjonen foregår, og (e) hvor i hjernen signalene bearbeides.',
        hints: [
          'Tenk på energiform: elektromagnetisk stråling vs. mekaniske bølger.',
          'Begge har reseptorer spesialisert for varianter av stimulien (farger/frekvenser).',
        ],
        solution: 'Syn: (a) Elektromagnetisk stråling (380–750 nm). (b) Fotoreseptorer – staver og tapper. (c) Netthinnen i øyet. (d) Lys spalter fotopigment → signalkaskade → endret membranpotensial. (e) Synsbarken i oksipitallappen. Hørsel: (a) Mekaniske trykkbølger (20–20 000 Hz). (b) Hårceller i Cortis organ. (c) Sneglehuset i det indre øret. (d) Lydbølger bøyer stereocilier → ionekanaler åpnes → depolarisering. (e) Hørselsbarken i temporallappen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'bio2-3-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-4-ex-5',
        number: '3.4.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En person mangler funksjonelt fotopigment for rødt lys (L-tapper). Forklar (a) hva tilstanden kalles, (b) hvilke farger personen har vanskeligheter med å skille, (c) hvorfor tilstanden er vanligere hos menn enn kvinner, og (d) hvordan personen likevel kan se i dagslys.',
        hints: [
          'Tilstanden er en form for fargeblindhet.',
          'Genene for rødt og grønt fotopigment sitter på X-kromosomet.',
        ],
        solution: 'Tilstanden kalles protanopi (rød-grønn fargeblindhet). (a) Protanopi – dikromatisk fargesyn. (b) Vanskeligheter med å skille rødt fra grønt, fordi hjernen kun kan sammenligne M-tapper (grønn) og S-tapper (blå). (c) Genene for rød- og grønnpigment ligger på X-kromosomet. Menn (XY) trenger kun én defekt kopi. Kvinner (XX) trenger defekt gen på begge X-kromosomer. (d) M- og S-tapper fungerer normalt og gir begrenset fargesyn; staver gir syn ved svakt lys uavhengig av tappene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],

  exercises: [],
};

// ============================================================================
// Kapittel 3.5: Hormonsystemet
// ============================================================================

export const CHAPTER_BIOLOGI_2_3_5: TextbookChapter = {
  id: 'biologi-2-3-5',
  courseId: 'biologi-2',
  chapterNumber: '3.5',
  title: 'Hormonsystemet',
  description: 'Endokrine kjertler, hormoner og signaleringsmekanismer.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for hormonsystemet',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'bio2-3-5-intro',
      type: 'text',
      content: `# Hormonsystemet

I dette kapittelet skal du lære om:

- Hva hormoner er og hvordan de virker
- De viktigste endokrine kjertlene og deres hormoner
- Forskjellen mellom vannløselige og fettløselige hormoner
- Hypothalamus–hypofyse-aksen og hormonstyring

**Hormonsystemet** (det endokrine systemet) er kroppens langsomme kommunikasjonssystem. Mens nervesystemet sender raske, presise signaler via nevroner, sender hormonsystemet **kjemiske budbringere** (hormoner) via blodet til målceller over hele kroppen. Hormoner regulerer vekst, stoffskifte, reproduksjon, stressrespons og homøostase.`,
    },

    // ========== TEORI 1: Hormoner og virkningsmekanismer ==========
    {
      id: 'bio2-3-5-hormoner-mekanismer',
      type: 'text',
      content: `## Hormoner og virkningsmekanismer

Et **hormon** er et signalstoff som produseres i endokrine kjertler, transporteres med blodet og påvirker **målceller** som har den rette **reseptoren**.

### Vannløselige hormoner

Peptidhormoner, proteinhormoner og aminer:
- Kan **ikke** passere cellemembranen
- Binder til **reseptorer på celleoverflaten**
- Aktiverer **intracellulære signalkaskader** via sekundære budbringere (f.eks. cAMP)
- Rask effekt (sekunder til minutter), men kortvarig
- Eksempler: **insulin**, **glukagon**, **adrenalin**, **ADH**, **oksytocin**

### Fettløselige hormoner

Steroidhormoner og tyroideahormoner:
- Kan **passere cellemembranen** direkte
- Binder til **intracellulære reseptorer** (ofte i cellekjernen)
- Hormon-reseptorkomplekset fungerer som **transkripsjonsfaktor**
- Langsom effekt (timer til dager), men langvarig
- Eksempler: **kortisol**, **østrogen**, **testosteron**, **tyroksin (T4)**

### Nøkkelprinsipp

Et hormon påvirker bare celler med den **rette reseptoren**. Insulin sirkulerer i hele kroppen, men bare celler med insulinreseptorer (muskel-, fett-, leverceller) responderer.`,
    },

    {
      id: 'bio2-3-5-def-hormon',
      type: 'definition',
      title: 'Hormon',
      content: 'Et hormon er et kjemisk signalstoff som produseres i en endokrin kjertel, skilles ut i blodbanen og transporteres til målceller i andre deler av kroppen. Hormonet binder til spesifikke reseptorer på eller i målcellene og utløser en biologisk respons. Hormoner regulerer langsomme, langvarige prosesser som vekst, stoffskifte, reproduksjon og homøostase.',
    },

    {
      id: 'bio2-3-5-example-1',
      type: 'example',
      title: 'Eksempel 1: Adrenalin – et vannløselig hormon',
      problem: 'Beskriv hvordan adrenalin virker på hjertet ved akutt stress. Forklar signalveien fra produksjon til effekt.',
      solution: `**Løsning:**

**1. Produksjon:** Sympatisk aktivering → binyremergen frigjør **adrenalin** til blodet.

**2. Transport:** Adrenalin sirkulerer fritt i blodplasmaet (vannløselig).

**3. Reseptorbinding:** Adrenalin binder til **$\\beta_1$-adrenerge reseptorer** på hjertemuskelcellenes overflate (kan ikke passere membranen).

**4. Signalkaskade:** Reseptorbinding → G-protein aktiveres → **adenylatsyklase** aktiveres → ATP omdannes til **cAMP** (sekundær budbringer) → proteinkinaser aktiveres.

**5. Effekt:**
- Økt kalsiuminnstrømning → sterkere kontraksjoner
- Økt hjertefrekvens via pacemakercellene

**Resultat:** Hjertet slår raskere og med større kraft – mer blod pumpes ut per minutt.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'bio2-3-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-5-ex-1',
        number: '3.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste forskjellen mellom vannløselige og fettløselige hormoner?',
        options: [
          { id: 'a', text: 'Vannløselige binder intracellulært, fettløselige binder på celleoverflaten', isCorrect: false },
          { id: 'b', text: 'Vannløselige binder på celleoverflaten, fettløselige passerer membranen og binder intracellulært', isCorrect: true },
          { id: 'c', text: 'Vannløselige transporteres i blodet, fettløselige via nervesystemet', isCorrect: false },
          { id: 'd', text: 'Vannløselige virker bare på fettceller, fettløselige på alle celletyper', isCorrect: false },
        ],
        solution: 'Vannløselige hormoner kan ikke passere den hydrofobe cellemembranen og binder til overflatereseptorer, med rask men kortvarig effekt via sekundære budbringere. Fettløselige hormoner passerer membranen og binder intracellulært, fungerer som transkripsjonsfaktorer med langsom men langvarig effekt.',
        hints: ['Cellemembranen har en hydrofob kjerne av fosfolipider.'],
      },
    },

    // ========== TEORI 2: Endokrine kjertler ==========
    {
      id: 'bio2-3-5-endokrine-kjertler',
      type: 'text',
      content: `## De viktigste endokrine kjertlene

### Hypothalamus og hypofysen

**Hypothalamus** kobler nervesystem og hormonsystem. Den produserer frigjøringshormoner og hemmende hormoner som styrer hypofysen.

**Hypofysens forlapp** produserer:
- **Veksthormon (GH)**, **TSH**, **ACTH**, **FSH**, **LH**, **Prolaktin**

**Hypofysens baklapp** lagrer og frigjør (produsert i hypothalamus):
- **ADH** (vannreabsorpsjon i nyrene) og **oksytocin** (livmorkontraksjon, melkeutdrivning)

### Skjoldbruskkjertelen
- Produserer **tyroksin (T4)** og **T3** – regulerer basalstoffskiftet
- Stimuleres av TSH fra hypofysen

### Binyrene
- **Binyrebarken**: Kortisol, aldosteron, kjønnshormoner
- **Binyremergen**: Adrenalin og noradrenalin

### Bukspyttkjertelen (Langerhanske øyer)
- **$\\beta$-celler**: **Insulin** (senker blodsukker)
- **$\\alpha$-celler**: **Glukagon** (øker blodsukker)

### Kjønnskjertlene
- **Testikler**: Testosteron
- **Eggstokker**: Østrogen og progesteron`,
    },

    {
      id: 'bio2-3-5-def-endokrin',
      type: 'definition',
      title: 'Endokrin kjertel',
      content: 'En endokrin kjertel er en kjertel uten utførselsgang som skiller ut hormoner direkte i blodbanen. I motsetning til eksokrine kjertler (svettekjertler, spyttkjertler) som har utførselsganger, sender endokrine kjertler hormoner via blodet til målceller over hele kroppen. Eksempler: hypofysen, skjoldbruskkjertelen, binyrene, bukspyttkjertelen og kjønnskjertlene.',
    },

    {
      id: 'bio2-3-5-example-2',
      type: 'example',
      title: 'Eksempel 2: Hypothalamus–hypofyse–skjoldbruskkjertel-aksen',
      problem: 'En pasient har lavt tyroksin (T4). Forklar den hormonelle reguleringsmekanismen steg for steg.',
      solution: `**Løsning:**

**Steg 1 – Hypothalamus:** Registrerer lavt T4 → produserer **TRH** (tyreotropinfrigjørende hormon) til hypofysen.

**Steg 2 – Hypofysens forlapp:** TRH stimulerer produksjon av **TSH** (tyreoideastimulerende hormon) til blodet.

**Steg 3 – Skjoldbruskkjertelen:** TSH stimulerer produksjon av **T4** og **T3**.

**Steg 4 – Negativ feedback:** Når T4/T3 stiger til normalnivå, hemmes TRH og TSH-produksjonen. Produktet hemmer sin egen produksjon.

**Hos pasienten:** Lavt T4 → svak negativ feedback → hypothalamus produserer mer TRH → hypofysen mer TSH. Hvis skjoldbruskkjertelen er skadet, kan den ikke øke produksjonen – TSH forblir høyt (primær hypothyreose).`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'bio2-3-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-5-ex-2',
        number: '3.5.2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvilken endokrin kjertel produserer insulin?',
        options: [
          { id: 'a', text: 'Binyrebarken', isCorrect: false },
          { id: 'b', text: 'Hypofysens forlapp', isCorrect: false },
          { id: 'c', text: 'De Langerhanske øyer i bukspyttkjertelen', isCorrect: true },
          { id: 'd', text: 'Skjoldbruskkjertelen', isCorrect: false },
        ],
        solution: 'Insulin produseres av β-cellene i de Langerhanske øyer i bukspyttkjertelen. Insulin senker blodsukkeret ved å stimulere celleopptak av glukose og glykogensyntese. α-cellene produserer glukagon med motsatt effekt.',
        hints: ['Dette organet har også eksokrin funksjon – det produserer fordøyelsesenzymer.'],
      },
    },

    // ========== TEORI 3: Hormonstyring og tilbakekobling ==========
    {
      id: 'bio2-3-5-tilbakekobling',
      type: 'text',
      content: `## Hormonstyring og tilbakekobling

### Negativ tilbakekobling (vanligst)

- Hormonnivå stiger over normalverdi → produksjonen **hemmes**
- Hormonnivå synker under normalverdi → produksjonen **stimuleres**
- Holder hormoner innenfor normalt referanseområde

**Eksempel – kortisol:** Stress → CRH → ACTH → kortisol. Høyt kortisol hemmer CRH og ACTH → produksjonen avtar.

### Positiv tilbakekobling (sjelden)

- Produktet **forsterker** sin egen produksjon → eskalerende respons
- Avsluttes av en ekstern hendelse

**Eksempel – oksytocin under fødsel:** Trykk på livmorhalsen → oksytocin → sterkere kontraksjoner → mer trykk → mer oksytocin. Stopper når barnet er født.

### Hierarkisk hormonstyring

Mange hormoner reguleres i tre trinn:
1. **Hypothalamus** → frigjøringshormon
2. **Hypofysen** → stimulerende hormon
3. **Målkjertel** → effektorhormon

Negativ feedback skjer på alle nivåer.`,
    },

    {
      id: 'bio2-3-5-def-negativ-feedback',
      type: 'definition',
      title: 'Negativ tilbakekobling',
      content: 'Negativ tilbakekobling (negativ feedback) er en reguleringsmekanisme der sluttproduktet hemmer den videre produksjonen. I hormonsystemet signaliserer et hormon som har nådd riktig nivå tilbake til overordnede kjertler om å redusere produksjonen. Dette er den viktigste mekanismen for å holde hormoner innenfor normalt referanseområde og bidrar til homøostase.',
    },

    {
      id: 'bio2-3-5-example-3',
      type: 'example',
      title: 'Eksempel 3: Positiv tilbakekobling ved fødsel',
      problem: 'Forklar hvorfor positiv tilbakekobling av oksytocin under fødsel ikke fører til uendelig eskalering.',
      solution: `**Løsning:**

**Positiv sløyfe:** Barnets hode → trykk på livmorhalsen → oksytocin fra hypofysens baklapp → sterkere kontraksjoner → mer trykk → mer oksytocin → enda sterkere kontraksjoner.

**Hvorfor det stopper:** Den positive sløyfen avsluttes av en **ekstern hendelse**: barnet fødes og trykket opphører. Uten stimulus stopper oksytocinproduksjonen.

**Sammenligning:**

| Egenskap | Negativ feedback | Positiv feedback |
|----------|-----------------|------------------|
| Effekt | Hemmer produksjonen | Forsterker produksjonen |
| Resultat | Stabilisering | Eskalering mot sluttpunkt |
| Frekvens | Svært vanlig | Sjelden |
| Avslutning | Automatisk | Krever ekstern hendelse |`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'bio2-3-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-5-ex-3',
        number: '3.5.3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva skjer med TSH-nivået dersom skjoldbruskkjertelen produserer for lite tyroksin?',
        options: [
          { id: 'a', text: 'TSH synker fordi hypofysen hemmes', isCorrect: false },
          { id: 'b', text: 'TSH stiger fordi den negative tilbakekoblingen er svekket', isCorrect: true },
          { id: 'c', text: 'TSH forblir uendret', isCorrect: false },
          { id: 'd', text: 'TSH svinger uregelmessig', isCorrect: false },
        ],
        solution: 'Lavt tyroksin svekker negativ tilbakekobling til hypothalamus og hypofysen. Hypofysen produserer mer TSH for å stimulere skjoldbruskkjertelen. Forhøyet TSH med lavt T4 er klassisk for primær hypothyreose.',
        hints: ['Hva skjer med negativ feedback når det er for lite av sluttproduktet?'],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'bio2-3-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Hormoner** er kjemiske signalstoffer som transporteres med blodet og påvirker målceller med riktig reseptor.
- **Vannløselige hormoner** binder til overflatereseptorer → rask, kortvarig effekt via sekundære budbringere.
- **Fettløselige hormoner** passerer membranen → langsom, langvarig effekt via genregulering.
- **Hypothalamus** kobler nervesystem og hormonsystem; **hypofysen** styrer mange endokrine kjertler.
- Viktige hormoner: insulin, glukagon, adrenalin, kortisol, tyroksin, veksthormon, østrogen, testosteron.
- **Negativ tilbakekobling** er den vanligste reguleringsmekanismen.
- **Positiv tilbakekobling** driver prosesser som må eskalere (f.eks. fødsel).`,
    },

    // ========== SAMLEOPPGAVE ==========
    {
      id: 'bio2-3-5-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-5-ex-4',
        number: '3.5.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjør rede for HPA-aksen (hypothalamus–hypofyse–binyre-aksen). Beskriv (a) hva som aktiverer den, (b) de tre hormonelle trinnene, (c) kortisolets viktigste effekter, og (d) hvordan negativ tilbakekobling regulerer aksen.',
        hints: [
          'HPA-aksen er kroppens viktigste stressresponssystem.',
          'Husk: CRH → ACTH → kortisol.',
          'Kortisol påvirker energimobilisering og immunsystem.',
        ],
        solution: 'HPA-aksen: (a) Aktiveres av fysisk/psykisk stress. (b) Trinn 1: Hypothalamus frigjør CRH. Trinn 2: CRH stimulerer hypofysen til å frigjøre ACTH. Trinn 3: ACTH stimulerer binyrebarken til å produsere kortisol. (c) Kortisol: øker blodsukker (glukoneogenese), bryter ned muskelprotein, hemmer immunsystem og inflammasjon, øker blodtrykk. (d) Høyt kortisol hemmer CRH i hypothalamus og ACTH i hypofysen → stimuleringen avtar → kortisolnivået normaliseres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'bio2-3-5-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-5-ex-5',
        number: '3.5.5',
        type: 'classic',
        difficulty: 'middels',
        task: 'Sammenlign nervesystemet og hormonsystemet: (a) type signal, (b) hastighet, (c) varighet, (d) presisjon, og (e) gi et eksempel på samarbeid mellom dem.',
        hints: [
          'Nervesignaler vs. hormoner i blodet.',
          'Stressresponsen er et godt eksempel på samarbeid.',
          'Hypothalamus er koblingen mellom systemene.',
        ],
        solution: 'Nervesystemet: (a) Elektriske impulser og nevrotransmittere. (b) Millisekunder. (c) Kortvarig. (d) Svært presis – kun synaptisk koblede celler. Hormonsystemet: (a) Kjemiske signalstoffer i blodet. (b) Sekunder–timer. (c) Minutter–dager. (d) Mindre presis – alle celler med riktig reseptor. (e) Stress: Sympatiske nerver aktiverer binyremergen raskt → adrenalin. Hypothalamus aktiverer HPA-aksen → kortisol gir langvarig stressrespons. Nervesystemet gir umiddelbar respons, hormonsystemet opprettholder den.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],

  exercises: [],
};

// ============================================================================
// Kapittel 3.6: Homeostase og regulering
// ============================================================================

export const CHAPTER_BIOLOGI_2_3_6: TextbookChapter = {
  id: 'biologi-2-3-6',
  courseId: 'biologi-2',
  chapterNumber: '3.6',
  title: 'Homeostase og regulering',
  description: 'Blodsukkerregulering, temperaturregulering og negativ feedback.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forklare homeostase',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'bio2-3-6-intro',
      type: 'text',
      content: `# Homeostase og regulering

I dette kapittelet skal du lære om:

- Hva homeostase er og hvorfor det er livsviktig
- Prinsippet om negativ tilbakekobling
- Blodsukkerregulering med insulin og glukagon
- Temperaturregulering og kroppens termostatsystem

**Homeostase** er kroppens evne til å opprettholde et stabilt indre miljø til tross for endringer i omgivelsene. Cellene fungerer optimalt innenfor smale grenser for temperatur, pH, blodsukker og ionkonsentrasjoner. De fleste reguleringsmekanismene bygger på **negativ tilbakekobling**.`,
    },

    // ========== TEORI 1: Homøostatisk regulering ==========
    {
      id: 'bio2-3-6-homeostatisk',
      type: 'text',
      content: `## Prinsippet om homøostatisk regulering

Et homøostatisk reguleringssystem har tre grunnkomponenter:

### 1. Sensor (reseptor)
Registrerer den aktuelle verdien. Eksempler: termoreseptorer (temperatur), kjemoreseptorer i bukspyttkjertelen (blodsukker).

### 2. Kontrollsenter (integrator)
Sammenligner med en **settpunktsverdi** og sender korrigerende signaler. Eksempler: hypothalamus, bukspyttkjertelens øyceller.

### 3. Effektor
Utfører korrigeringen. Eksempler: blodkar og svettekjertler (temperatur), lever og muskelceller (blodsukker).

### Negativ tilbakekobling

Effektoren virker i **motsatt retning** av avviket:
- Verdi for **høy** → effektoren **senker** den
- Verdi for **lav** → effektoren **øker** den

Resultatet er at variabelen **oscillerer** rundt settpunktet innenfor smale grenser.`,
    },

    {
      id: 'bio2-3-6-def-homeostase',
      type: 'definition',
      title: 'Homeostase',
      content: 'Homeostase er organismens evne til å opprettholde et stabilt indre miljø til tross for variasjoner i ytre og indre forhold. Det innebærer dynamisk regulering av variabler som kroppstemperatur, blodsukker, pH og blodtrykk innenfor biologisk optimale grenser. Homeostase opprettholdes hovedsakelig gjennom negativ tilbakekobling, der avvik fra settpunktet utløser korrigerende responser.',
    },

    {
      id: 'bio2-3-6-example-1',
      type: 'example',
      title: 'Eksempel 1: Termostat-analogi',
      problem: 'En termostat er satt til 21 °C. Sammenlign termostatsystemet med kroppens temperaturregulering.',
      solution: `**Løsning:**

**Termostaten:**
1. **Sensor**: Termometer måler romtemperaturen
2. **Kontrollsenter**: Sammenligner med settpunktet (21 °C)
3. **Effektor – for kaldt**: Ovnen slås på → oppvarming → ovnen slås av
4. **Effektor – for varmt**: Ovnen av (eller kjøling på) → nedkjøling

**Kroppens temperaturregulering:**
1. **Sensor**: Termoreseptorer i hud og hypothalamus
2. **Kontrollsenter**: Hypothalamus (settpunkt ca. 37 °C)
3. **For varm**: Svetteproduksjon, vasodilatasjon i huden
4. **For kald**: Skjelving, vasokonstriksjon, økt stoffskifte

Begge bruker negativ tilbakekobling for å stabilisere verdien rundt et settpunkt.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'bio2-3-6-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-6-ex-1',
        number: '3.6.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er de tre grunnkomponentene i et homøostatisk reguleringssystem?',
        options: [
          { id: 'a', text: 'Hypothalamus, hypofysen og målkjertel', isCorrect: false },
          { id: 'b', text: 'Sensor, kontrollsenter og effektor', isCorrect: true },
          { id: 'c', text: 'Nervesystem, hormonsystem og immunsystem', isCorrect: false },
          { id: 'd', text: 'Positiv feedback, negativ feedback og settpunkt', isCorrect: false },
        ],
        solution: 'De tre grunnkomponentene er: (1) sensor/reseptor – registrerer verdien, (2) kontrollsenter/integrator – sammenligner med settpunktet, og (3) effektor – utfører korrigeringen.',
        hints: ['Tenk på hva som trengs for å oppdage, vurdere og korrigere et avvik.'],
      },
    },

    // ========== TEORI 2: Blodsukkerregulering ==========
    {
      id: 'bio2-3-6-blodsukker',
      type: 'text',
      content: `## Blodsukkerregulering

Blodsukkeret holdes normalt mellom ca. **4–7 mmol/L** ved hjelp av to antagonistiske hormoner.

### Etter et måltid – blodsukkeret stiger

1. Glukose absorberes → blodsukkeret stiger
2. **$\\beta$-celler** registrerer høyt blodsukker → skiller ut **insulin**
3. Insulin stimulerer:
   - Opptak av glukose i muskel- og fettceller (GLUT4-transportører)
   - Omdanning til **glykogen** i leveren (glykogenese)
4. Blodsukkeret synker → insulinsekresjon avtar

### Mellom måltider – blodsukkeret synker

1. Blodsukkeret synker
2. **$\\alpha$-celler** skiller ut **glukagon**
3. Glukagon stimulerer (i leveren):
   - **Glykogenolyse** (glykogen → glukose)
   - **Glukoneogenese** (aminosyrer/glyserol → glukose)
4. Blodsukkeret stiger → glukagonsekresjon avtar

### Diabetes mellitus

- **Type 1**: Autoimmun ødeleggelse av $\\beta$-celler → ingen insulinproduksjon
- **Type 2**: Cellene utvikler **insulinresistens** → insulin virker dårligere`,
    },

    {
      id: 'bio2-3-6-def-insulin',
      type: 'definition',
      title: 'Insulin og glukagon',
      content: 'Insulin og glukagon er to antagonistiske peptidhormoner fra bukspyttkjertelens Langerhanske øyer. Insulin (β-celler) senker blodsukkeret ved å stimulere celleopptak av glukose og glykogensyntese. Glukagon (α-celler) øker blodsukkeret ved å stimulere glykogenolyse og glukoneogenese i leveren. Samspillet holder blodsukkeret innenfor normalområdet (ca. 4–7 mmol/L).',
    },

    {
      id: 'bio2-3-6-example-2',
      type: 'example',
      title: 'Eksempel 2: Blodsukker gjennom en dag',
      problem: 'Beskriv hvordan blodsukker, insulin og glukagon endrer seg gjennom en dag med tre måltider og en treningsøkt.',
      solution: `**Løsning:**

**Morgen (fastende):** Blodsukker lavt (4–5 mmol/L), glukagon høyt, insulin lavt. Leveren frigjør glukose.

**Etter frokost:** Glukose absorberes → blodsukker stiger → insulin øker → celleopptak → blodsukker normaliseres.

**Formiddag:** Blodsukker gradvis synkende → glukagon stiger svakt.

**Etter lunsj:** Ny insulinpuls.

**Treningsøkt (16:00):** Musklene forbruker glukose → blodsukker synker → insulin synker, glukagon stiger → leveren frigjør glukose. Adrenalin bidrar også.

**Etter middag:** Insulinpuls → glykogenlagrene fylles opp.

**Kveld/natt:** Blodsukker synker gradvis → glukagon dominerer → leveren frigjør glukose langsomt gjennom natten.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'bio2-3-6-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-6-ex-2',
        number: '3.6.2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva er den viktigste forskjellen mellom type 1- og type 2-diabetes?',
        options: [
          { id: 'a', text: 'Type 1 skyldes for mye insulin, type 2 for lite glukagon', isCorrect: false },
          { id: 'b', text: 'Type 1 skyldes autoimmun ødeleggelse av β-celler, type 2 skyldes insulinresistens', isCorrect: true },
          { id: 'c', text: 'Type 1 rammer bare barn, type 2 bare eldre', isCorrect: false },
          { id: 'd', text: 'Type 1 gir høyt blodsukker, type 2 gir lavt blodsukker', isCorrect: false },
        ],
        solution: 'Type 1: Autoimmun ødeleggelse av β-celler → ingen insulinproduksjon → livslang insulintilførsel. Type 2: Insulinresistens i målcellene, ofte assosiert med overvekt og inaktivitet. Begge gir hyperglykemi.',
        hints: ['Den ene mangler insulin helt, den andre produserer insulin men cellene responderer dårlig.'],
      },
    },

    // ========== TEORI 3: Temperaturregulering ==========
    {
      id: 'bio2-3-6-temperatur',
      type: 'text',
      content: `## Temperaturregulering

Mennesket er **endotermt** med kjernetemperatur ca. **37 °C**. Hypothalamus fungerer som kroppens termostat.

### For høy temperatur (varmeregulering)

1. **Vasodilatasjon** i huden → mer blod nær overflaten → varme avgis
2. **Svetteproduksjon** → fordampningskjøling
3. Adferdsendring (søker skygge, tar av klær)

### For lav temperatur (kulderegulering)

1. **Vasokonstriksjon** i huden → mindre blod nær overflaten → redusert varmetap
2. **Skjelving** → muskelkontraksjoner produserer varme
3. **Piloereksjon** → gåsehud
4. **Økt stoffskifte** via tyroksin og adrenalin
5. Adferdsendring (klær, bevegelse)

### Feber

Ved infeksjon frigjør immunceller **pyrogener** som hever settpunktet i hypothalamus (f.eks. fra 37 til 39 °C). Kroppen reagerer som om den er for kald: frysninger og skjelving inntil ny settpunktstemperatur nås. Når feberen «løsner» (settpunktet senkes igjen), svetter personen for å kvitte seg med overskuddsvarmen.`,
    },

    {
      id: 'bio2-3-6-def-endoterm',
      type: 'definition',
      title: 'Endoterm',
      content: 'En endoterm organisme regulerer kroppstemperaturen ved å produsere egen varme gjennom stoffskifte. Pattedyr og fugler er endoterme og opprettholder stabil kjernetemperatur uavhengig av omgivelsene, ved hjelp av termoreseptorer, hypothalamus som kontrollsenter, og effektorer som blodkar, svettekjertler og skjelettmuskler.',
    },

    {
      id: 'bio2-3-6-example-3',
      type: 'example',
      title: 'Eksempel 3: Feber som forsvarsmekanisme',
      problem: 'Forklar (a) hvorfor en person fryser og skjelver i starten av feber, og (b) hvorfor personen svetter når feberen løsner.',
      solution: `**Løsning:**

**Bakgrunn:** Pyrogener fra immunceller hever settpunktet i hypothalamus til f.eks. 39 °C.

**(a) Start av feber:**
Hypothalamus oppfatter 37 °C som **for lavt** i forhold til det nye settpunktet (39 °C). Kulderesponser aktiveres:
- Vasokonstriksjon → blek, kald hud
- Skjelving → varmeproduksjon
- Frysninger og ønske om å kle seg varmt

Kroppen varmes opp til 39 °C.

**(b) Feber løsner:**
Settpunktet senkes tilbake til 37 °C. Nå er 39 °C **for høyt**. Varmeresponser aktiveres:
- Vasodilatasjon → rød, varm hud
- Svetteproduksjon → fordampningskjøling
- Personen kaster av klær

Frysninger og svette er begge **normal homøostatisk regulering** – men i forhold til et midlertidig endret settpunkt.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'bio2-3-6-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-6-ex-3',
        number: '3.6.3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva skjer når hypothalamus registrerer at kjernetemperaturen er over settpunktet?',
        options: [
          { id: 'a', text: 'Blodkar i huden trekker seg sammen og skjelving starter', isCorrect: false },
          { id: 'b', text: 'Blodkar i huden utvides og svetteproduksjonen øker', isCorrect: true },
          { id: 'c', text: 'Tyroksinproduksjonen øker for å øke stoffskiftet', isCorrect: false },
          { id: 'd', text: 'Adrenalinfrigjøringen øker for å aktivere muskler', isCorrect: false },
        ],
        solution: 'Når temperaturen er over settpunktet aktiveres varmeavgivende mekanismer: vasodilatasjon i huden og økt svetteproduksjon. Vasokonstriksjon og skjelving er kulderesponser som aktiveres når temperaturen er under settpunktet.',
        hints: ['Hva hjelper kroppen å kvitte seg med overskuddsvarme?'],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'bio2-3-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Homeostase** opprettholdes av sensor, kontrollsenter og effektor via negativ tilbakekobling.
- **Blodsukkerregulering**: Insulin (β-celler) senker blodsukker; glukagon (α-celler) øker blodsukker.
- **Diabetes**: Type 1 – manglende insulin (autoimmunt). Type 2 – insulinresistens.
- **Temperaturregulering**: Hypothalamus som termostat. Varme: vasodilatasjon + svette. Kulde: vasokonstriksjon + skjelving + økt stoffskifte.
- **Feber**: Pyrogener hever settpunktet → frysninger til nytt settpunkt nås; svette når settpunktet senkes.`,
    },

    // ========== SAMLEOPPGAVE ==========
    {
      id: 'bio2-3-6-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-6-ex-4',
        number: '3.6.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign blodsukkerregulering og temperaturregulering som eksempler på homeostase. For hvert system, beskriv (a) den regulerte variabelen og normalverdi, (b) sensorene, (c) kontrollsenteret, (d) effektorene, og (e) hvordan negativ tilbakekobling sikrer stabilitet.',
        hints: [
          'Lag gjerne en tabell med to kolonner.',
          'Blodsukker reguleres av to antagonistiske hormoner, temperatur av fysiologiske mekanismer.',
        ],
        solution: 'Blodsukker: (a) Blodglukose, 4–7 mmol/L. (b) α- og β-celler. (c) Bukspyttkjertelens øyceller. (d) Insulin → celleopptak + glykogenese; glukagon → glykogenolyse + glukoneogenese. (e) Insulin senker → normal → sekresjon avtar. Temperatur: (a) Kjernetemperatur, 37 °C. (b) Termoreseptorer i hud og hypothalamus. (c) Hypothalamus. (d) Varme: vasodilatasjon + svette. Kulde: vasokonstriksjon + skjelving. (e) Varmetap senker temperaturen → respons avtar. Begge bruker negativ tilbakekobling med antagonistiske effektorer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'bio2-3-6-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-6-ex-5',
        number: '3.6.5',
        type: 'classic',
        difficulty: 'middels',
        task: 'En person med ubehandlet type 1-diabetes spiser et stort karbohydratrikt måltid. Beskriv hva som skjer med blodsukkeret, og forklar hvorfor kroppen ikke regulerer det tilbake. Hvilke symptomer kan oppstå?',
        hints: [
          'β-cellene er ødelagt – hva betyr det for insulin?',
          'Hva skjer når cellene ikke får glukose inn tross høyt blodsukker?',
        ],
        solution: 'Glukose absorberes → blodsukkeret stiger kraftig. Uten β-celler produseres ingen insulin. Muskel- og fettceller kan ikke ta opp glukose (manglende GLUT4). Blodsukkeret forblir svært høyt (hyperglykemi). α-cellene frigjør glukagon → leveren frigjør enda mer glukose. Symptomer: kraftig tørst (polydipsi) pga. osmotisk diurese i nyrene, hyppig vannlating (polyuri), vekttap (fett og protein brytes ned), trøtthet. I alvorlige tilfeller ketoacidose (ketoner fra fettforbrenning → lav pH).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],

  exercises: [],
};

// ============================================================================
// Kapittel 3.7: Rusmidler og hjernen
// ============================================================================

export const CHAPTER_BIOLOGI_2_3_7: TextbookChapter = {
  id: 'biologi-2-3-7',
  courseId: 'biologi-2',
  chapterNumber: '3.7',
  title: 'Rusmidler og hjernen',
  description: 'Rusmidlers påvirkning på hjernen, avhengighet og belønningssystemet.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forklare rusmidlers effekt på hjernen',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'bio2-3-7-intro',
      type: 'text',
      content: `# Rusmidler og hjernen

I dette kapittelet skal du lære om:

- Hjernens belønningssystem og dopamin
- Hvordan ulike rusmidler påvirker synaptisk overføring
- Toleranse, avhengighet og abstinens
- Nevrobiologiske konsekvenser av rusmiddelbruk

**Rusmidler** er stoffer som påvirker hjernens funksjon ved å endre synaptisk overføring. De fleste virker på **nevrotransmittersystemene**. Til tross for ulike kjemiske strukturer og effekter deler de en felles egenskap: de aktiverer hjernens **belønningssystem** og kan føre til **avhengighet**.`,
    },

    // ========== TEORI 1: Belønningssystemet ==========
    {
      id: 'bio2-3-7-belonning',
      type: 'text',
      content: `## Hjernens belønningssystem

Belønningssystemet gir en følelse av **tilfredsstillelse** ved biologisk gunstige aktiviteter (mat, sosial kontakt, fysisk aktivitet).

### Den mesolimbiske banen

Sentral nevrotransmitter: **dopamin**. Viktigste nervebane:

1. **Ventral tegmental area (VTA)** i midthjernen – dopaminproduserende nevroner
2. Aksoner til **nucleus accumbens** (belønningssenteret) i frontalhjernen
3. Videre forbindelser til **prefrontal cortex** (impulskontroll, planlegging)

### Normal belønning

Ved naturlige belønninger frigjøres **moderat** mengde dopamin. Signalet er selvbegrensende – dopaminet fjernes raskt via **gjenopptak** og enzymatisk nedbrytning. Hjernen «lærer» at aktiviteten er verdt å gjenta.

### Rusmidler kaprer systemet

Rusmidler utløser **unaturlig sterk** dopaminfrigjøring – ofte 2–10 ganger sterkere enn naturlige belønninger. Over tid endrer dette hjernens prioriteringer og beslutningsprosesser.`,
    },

    {
      id: 'bio2-3-7-def-belonning',
      type: 'definition',
      title: 'Belønningssystemet',
      content: 'Belønningssystemet er et nevralt nettverk sentrert rundt den mesolimbiske banen, som forbinder ventral tegmental area (VTA) med nucleus accumbens via dopaminerge nevroner. Systemet gir tilfredsstillelse og motivasjon ved biologisk gunstige aktiviteter. Rusmidler kaprer systemet ved å utløse unaturlig sterke dopaminsignaler, noe som kan føre til avhengighet.',
    },

    {
      id: 'bio2-3-7-example-1',
      type: 'example',
      title: 'Eksempel 1: Dopamin – naturlig belønning vs. kokain',
      problem: 'Sammenlign dopaminfrigjøringen ved et godt måltid og ved kokaininntak. Hvorfor er forskjellen viktig for avhengighet?',
      solution: `**Løsning:**

**Godt måltid:** Dopamin stiger **50–100 %** over basisnivå. Gradvis stigning, raskt fjernet via gjenopptak. Hjernen: «Gjenta ved anledning.»

**Kokain:** Blokkerer dopamintransportøren → dopamin kan ikke fjernes → stiger **300–1000 %**. Rask, intens stigning. Hjernen: «Ekstraordinært viktig – MÅ gjentas.»

**Betydning for avhengighet:**
Den sterke dopaminsignaleringen «overkjører» normal prioritering. Over tid:
- Hjernen **nedregulerer** dopaminreseptorer (toleranse) → mer trengs
- Naturlige belønninger gir **relativt svakere** signal → anhedoni (gledeløshet)
- Fra «wanting» (lyst) til «needing» (behov) → tvangsmessig rusmiddelsøking`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'bio2-3-7-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-7-ex-1',
        number: '3.7.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken nevrotransmitter er mest sentral i hjernens belønningssystem?',
        options: [
          { id: 'a', text: 'Acetylkolin', isCorrect: false },
          { id: 'b', text: 'Serotonin', isCorrect: false },
          { id: 'c', text: 'Dopamin', isCorrect: true },
          { id: 'd', text: 'Noradrenalin', isCorrect: false },
        ],
        solution: 'Dopamin er den sentrale nevrotransmitteren i belønningssystemet. Den mesolimbiske banen fra VTA til nucleus accumbens bruker dopamin til å signalisere belønning og motivasjon.',
        hints: ['Denne nevrotransmitteren kalles ofte «motivasjonstransmitteren».'],
      },
    },

    // ========== TEORI 2: Rusmidlers mekanismer ==========
    {
      id: 'bio2-3-7-mekanismer',
      type: 'text',
      content: `## Hvordan ulike rusmidler påvirker hjernen

Alle rusmidler fører direkte eller indirekte til økt dopamin i belønningssystemet.

### Alkohol (etanol)
- **Forsterker GABA** (hemmende) og **hemmer glutamat** (stimulerende)
- Generell **demping** av hjerneaktivitet → nedsatt impulskontroll, motorikk, hukommelse
- Indirekte dopaminøkning

### Nikotin
- Binder til **nikotinerge acetylkolinreseptorer** i VTA
- **Direkte** stimulering av dopaminfrigjøring i nucleus accumbens
- Svært avhengighetsskapende

### Cannabis (THC)
- Binder til **CB1-reseptorer** (endocannabinoidsystemet)
- Hemmer GABA-nevroner → **indirekte** økt dopamin
- Effekt: eufori, endret sanseopplevelse, nedsatt korttidshukommelse

### Opiater (morfin, heroin)
- Binder til **opioidreseptorer** (µ-reseptorer) – samme som endorfiner
- Hemmer GABA-nevroner i VTA → frikobling av dopamin
- Sterk smertelindring, intens eufori, høy toleranseutvikling

### Sentralstimulerende (amfetamin, kokain)
- **Amfetamin**: Øker dopaminfrigjøring og hemmer gjenopptak
- **Kokain**: Blokkerer dopamintransportøren → dopamin hoper seg opp
- Eufori, økt energi, økt hjertefrekvens`,
    },

    {
      id: 'bio2-3-7-def-toleranse',
      type: 'definition',
      title: 'Toleranse',
      content: 'Toleranse er en nevrobiologisk tilpasning der kroppen blir gradvis mindre følsom for et rusmiddels effekt. Den oppstår ved nedregulering av reseptorer og endret nevrotransmitterfrigjøring. Konsekvensen er behov for stadig høyere doser for samme rusopplevelse, noe som øker risikoen for overdose og avhengighet.',
    },

    {
      id: 'bio2-3-7-example-2',
      type: 'example',
      title: 'Eksempel 2: Kokain og synapsespalten',
      problem: 'Forklar hva som skjer i en dopaminerg synapse under normale forhold og under påvirkning av kokain.',
      solution: `**Løsning:**

**Normal synapse:**
1. Aksjonspotensial → vesikler frigjør dopamin i synapsespalten
2. Dopamin binder postsynaptiske reseptorer → signal
3. **Dopamintransportøren (DAT)** pumper dopamin tilbake (gjenopptak)
4. Signalet er **kortvarig**

**Under kokainpåvirkning:**
1–2. Normalt – dopamin frigjøres og binder reseptorer
3. **Kokain blokkerer DAT** → dopamin kan ikke pumpes tilbake
4. Dopamin **hoper seg opp** → vedvarende, forsterket signal

**Konsekvens:** Nucleus accumbens oversvømmes av dopamin → intens eufori. Over tid nedreguleres dopaminreseptorer (toleranse), og naturlig dopaminsignalering svekkes (anhedoni).`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'bio2-3-7-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-7-ex-2',
        number: '3.7.2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvordan virker alkohol på nevrotransmittersystemene?',
        options: [
          { id: 'a', text: 'Blokkerer dopamintransportøren', isCorrect: false },
          { id: 'b', text: 'Binder direkte til dopaminreseptorer', isCorrect: false },
          { id: 'c', text: 'Forsterker GABA (hemmende) og hemmer glutamat (stimulerende)', isCorrect: true },
          { id: 'd', text: 'Øker serotoninfrigjøring og hemmer noradrenalinnedbrytning', isCorrect: false },
        ],
        solution: 'Alkohol forsterker den hemmende nevrotransmitteren GABA og hemmer den stimulerende nevrotransmitteren glutamat (NMDA-reseptorer). Samlet gir dette generell demping av hjerneaktiviteten.',
        hints: ['Alkohol har dempende effekt – hvilke nevrotransmittersystemer gir demping?'],
      },
    },

    // ========== TEORI 3: Avhengighet og abstinens ==========
    {
      id: 'bio2-3-7-avhengighet',
      type: 'text',
      content: `## Avhengighet og abstinens

### Utvikling av avhengighet

**1. Eksperimentering:** Sterk dopaminfrigjøring → intens belønning → sterke assosiasjoner.

**2. Toleranse:** Hjernen nedregulerer dopaminreseptorer → høyere doser trengs → naturlige belønninger gir relativt svakere respons (anhedoni).

**3. Avhengighet:** Fysisk (hjernen fungerer ikke normalt uten stoffet), psykisk (craving), tap av kontroll.

### Abstinens

Når en avhengig person slutter brått, oppstår abstinensreaksjoner fordi hjernen er tilpasset stoffets tilstedeværelse:

- **Alkohol**: Angst, skjelving, kramper, delirium tremens. Årsak: Nedregulerte GABA-reseptorer + oppregulerte glutamatreseptorer → overeksitasjon.
- **Opiater**: Smerter, kvalme, diaré, frysninger. Årsak: Nedregulert endorfinproduksjon.
- **Nikotin**: Irritabilitet, konsentrasjonsvansker, økt appetitt.

### Langtidseffekter

- Redusert grå substans i prefrontal cortex → svekket impulskontroll
- Endret genekspresjon → vedvarende sårbarhet for tilbakefall
- Svekkede synaptiske forbindelser i prefrontal cortex
- Effektene kan vedvare måneder til år etter rusfrihet`,
    },

    {
      id: 'bio2-3-7-def-avhengighet',
      type: 'definition',
      title: 'Avhengighet',
      content: 'Avhengighet er en kronisk hjernetilstand kjennetegnet av tvangsmessig rusmiddelbruk til tross for negative konsekvenser. Den skyldes nevroplastiske endringer i belønningssystemet, impulskontrollsystemet og stresssystemet. Avhengighet innebærer toleranse (økende doser), fysisk avhengighet (abstinens uten stoffet) og psykisk avhengighet (craving). Avhengighet påvirker spesielt dopaminsystemet og prefrontal cortex.',
    },

    {
      id: 'bio2-3-7-example-3',
      type: 'example',
      title: 'Eksempel 3: Alkoholtoleranse og farlig abstinens',
      problem: 'Forklar hvorfor en langvarig storforbruker av alkohol (a) trenger stadig mer for å bli beruset, og (b) kan oppleve livstruende symptomer ved brå avslutning.',
      solution: `**Løsning:**

**(a) Toleranse:**
Alkohol forsterker GABA og hemmer glutamat. Hjernen kompenserer:
1. **GABA-reseptorer nedreguleres** → mindre hemmende effekt per enhet
2. **Glutamatreseptorer (NMDA) oppreguleres** → motvirker dempingen
Resultat: Mer alkohol trengs for samme effekt → ond sirkel.

**(b) Farlig abstinens:**
Uten alkohol er de kompensatoriske endringene fortsatt til stede:
- Nedregulerte GABA → utilstrekkelig hemming
- Oppregulerte glutamat → overeksitasjon
- Hjernen er i **massiv overstimulering**

**Symptomer (eskalerende):**
1. Angst, skjelving, svette (6–24 timer)
2. Hallusinasjoner, høy puls (24–48 timer)
3. **Delirium tremens**: Forvirring, kramper, livstruende arytmier (48–72 timer)

Alkoholabstinens er en av de få formene som kan være **direkte livstruende**.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'bio2-3-7-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-7-ex-3',
        number: '3.7.3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva er den nevrobiologiske årsaken til toleranse?',
        options: [
          { id: 'a', text: 'Leveren bryter ned rusmiddelet raskere', isCorrect: false },
          { id: 'b', text: 'Hjernen nedregulerer reseptorer og tilpasser nevrotransmitterfrigjøringen', isCorrect: true },
          { id: 'c', text: 'Blodhjernebarrieren blir tettere', isCorrect: false },
          { id: 'd', text: 'Immunsystemet danner antistoffer', isCorrect: false },
        ],
        solution: 'Nevrobiologisk toleranse skyldes at hjernen kompenserer: nedregulering av reseptorer (færre på celleoverflaten), desensitisering (mindre følsomme reseptorer), og endret nevrotransmitterfrigjøring. Levermetabolisme kan bidra, men den nevrobiologiske tilpasningen er viktigst.',
        hints: ['Hjernen tilpasser seg stimuli den utsettes for gjentatte ganger (nevroplastisitet).'],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'bio2-3-7-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Belønningssystemet** (VTA → nucleus accumbens) bruker dopamin. Rusmidler kaprer dette med unaturlig sterke signaler.
- **Alkohol**: Forsterker GABA + hemmer glutamat → generell demping.
- **Nikotin**: Stimulerer dopaminfrigjøring via nikotinerge reseptorer.
- **Cannabis (THC)**: Hemmer GABA-nevroner via CB1 → indirekte dopaminøkning.
- **Opiater**: Hemmer GABA i VTA via opioidreseptorer → økt dopamin.
- **Kokain**: Blokkerer dopamintransportøren → dopamin hoper seg opp.
- **Toleranse**: Nedregulering av reseptorer → behov for høyere doser.
- **Avhengighet**: Kronisk hjernetilstand med tvangsmessig bruk, toleranse og abstinens.
- **Abstinens**: Kompensatoriske endringer dominerer uten rusmiddelets tilstedeværelse.`,
    },

    // ========== SAMLEOPPGAVE ==========
    {
      id: 'bio2-3-7-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bio2-3-7-ex-4',
        number: '3.7.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg to ulike rusmidler og sammenlign: (a) virkningsmekanisme på synaptisk nivå, (b) hvilke nevrotransmittersystemer som påvirkes, (c) akutte effekter, (d) toleranseutvikling, og (e) abstinensreaksjoner. Forklar hvorfor begge fører til økt dopamin i belønningssystemet.',
        hints: [
          'Kokain virker direkte på dopamin, alkohol virker indirekte via GABA/glutamat.',
          'Abstinensreaksjoner er ofte «motsatte» av rusmiddelets akutte effekt.',
        ],
        solution: 'Eksempel – kokain og alkohol: (a) Kokain blokkerer dopamintransportøren; alkohol forsterker GABA-A og hemmer NMDA-glutamat. (b) Kokain: primært dopamin. Alkohol: GABA og glutamat, indirekte dopamin. (c) Kokain: eufori, energi, økt puls. Alkohol: avslapping, nedsatt hemming, nedsatt motorikk. (d) Kokain: nedregulerte dopaminreseptorer. Alkohol: nedregulerte GABA + oppregulerte NMDA. (e) Kokain: depresjon, trøtthet, craving. Alkohol: angst, skjelving, kramper, delirium tremens. Begge øker dopamin: kokain direkte (blokkert gjenopptak), alkohol indirekte (disinhibisjon av dopaminnevroner i VTA via GABA-hemming).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],

  exercises: [],
};

// ============================================================================
// Eksport alle kapitler i Seksjon 3
// ============================================================================

export const BIOLOGI_2_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_BIOLOGI_2_3_1,
  CHAPTER_BIOLOGI_2_3_2,
  CHAPTER_BIOLOGI_2_3_3,
  CHAPTER_BIOLOGI_2_3_4,
  CHAPTER_BIOLOGI_2_3_5,
  CHAPTER_BIOLOGI_2_3_6,
  CHAPTER_BIOLOGI_2_3_7,
];
