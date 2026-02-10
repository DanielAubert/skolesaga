/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Teknologi og forskningslære 2 VG3
 *
 * Seksjon 3: Nanoteknologi (Kapittel 3.1–3.7)
 * Denne filen inneholder kapittel 3.1–3.7.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 3.1: Nanoskalaen – grunnleggende prinsipper
// ============================================================================

export const CHAPTER_TOF_2_3_1: TextbookChapter = {
  id: 'tof-2-3-1',
  courseId: 'tof-2',
  chapterNumber: '3.1',
  title: 'Nanoskalaen – grunnleggende prinsipper',
  description: 'Størrelsesforhold, overflate-til-volum og kvanteeffekter.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forklare nanoskalaens egenskaper',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-3-1-intro',
      type: 'text',
      content: `## Nanoskalaen – grunnleggende prinsipper

Nanoteknologi er et av de mest lovende og hurtigvoksende teknologifeltene i det 21. århundret. Ordet «nano» kommer fra gresk og betyr «dverg». I vitenskapelig sammenheng brukes prefikset nano- om størrelsesordenen $10^{-9}$ — altså en milliarddel. Én nanometer (1 nm) er en milliarddel av en meter.

For å sette dette i perspektiv: et menneskelig hårstrå er omtrent 80 000–100 000 nm tykt, et vannmolekyl er ca. 0,27 nm i diameter, og DNA-dobbelthelixen har en diameter på ca. 2 nm. Nanoteknologien opererer i området mellom 1 og 100 nm — et område der materien oppfører seg fundamentalt annerledes enn det vi er vant til fra hverdagen.

I dette kapittelet skal vi utforske hva som gjør nanoskalaen så spesiell: de dramatiske endringene i overflate-til-volum-forholdet, og de kvanteeffektene som begynner å dominere når materialer krympes til nanoskala.`,
    },

    // --- BLOKK 1: Nanoskalaen og størrelsesforhold ---
    {
      id: 'tof2-3-1-def-1',
      type: 'definition',
      title: 'Nanoskalaen',
      content: `**Nanoskalaen** refererer til størrelsesområdet fra omtrent 1 til 100 nanometer (nm), der $1\\text{ nm} = 10^{-9}\\text{ m}$.

På denne skalaen viser materialer ofte egenskaper som er **kvalitativt forskjellige** fra de samme materialene i bulk (makroskopisk størrelse). Disse uventede egenskapene skyldes to hovedfaktorer:

1. **Overflate-til-volum-forholdet** øker dramatisk — en stadig større andel av atomene befinner seg på overflaten i stedet for inne i materialet.
2. **Kvanteeffekter** begynner å dominere fordi elektronenes bevegelse begrenses (kvantemekanisk innesperring).

Nanoteknologi er utviklingen og bruken av materialer, strukturer og systemer i dette størrelsesområdet for å utnytte disse unike egenskapene.`,
    },
    {
      id: 'tof2-3-1-text-1',
      type: 'text',
      content: `### Størrelsesforhold og skala

For å forstå nanoskalaen er det nyttig å sammenligne størrelser langs en logaritmisk skala:

| Objekt | Størrelse |
|--------|-----------|
| Tennisball | ca. $6{,}5 \\times 10^{-2}$ m (65 mm) |
| Menneskelig hårstrå | ca. $8 \\times 10^{-5}$ m (80 µm) |
| Rødt blodlegeme | ca. $7 \\times 10^{-6}$ m (7 µm) |
| Bakterie (*E. coli*) | ca. $2 \\times 10^{-6}$ m (2 µm) |
| Virus (influensa) | ca. $1 \\times 10^{-7}$ m (100 nm) |
| DNA-dobbeltheliks (bredde) | ca. $2 \\times 10^{-9}$ m (2 nm) |
| Vannmolekyl | ca. $2{,}7 \\times 10^{-10}$ m (0,27 nm) |
| Atom (karbon) | ca. $1{,}5 \\times 10^{-10}$ m (0,15 nm) |

Legg merke til at vi beveger oss over mange størrelsesordener. Forholdet mellom en tennisball og et atom er omtrent det samme som forholdet mellom jorden og en tennisball! Nanoteknologien opererer midt i dette spekteret — i området der biologiske makromolekyler og viruspartikler befinner seg.`,
    },
    {
      id: 'tof2-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Størrelsessammenligning',
      problem: 'Hvor mange gullnanopartikler med diameter 10 nm kan du legge etter hverandre langs bredden av et menneskelig hårstrå (ca. 80 µm)?',
      solution: `Vi regner om til samme enhet:

$$\\text{Hårbredde} = 80\\text{ µm} = 80 \\times 10^3\\text{ nm} = 80\\,000\\text{ nm}$$

$$\\text{Antall partikler} = \\frac{80\\,000\\text{ nm}}{10\\text{ nm}} = 8\\,000$$

Det får altså plass ca. **8 000 gullnanopartikler** langs bredden av et enkelt hårstrå. Dette illustrerer hvor utrolig små nanopartikler er — og hvor mange som kan pakkes sammen i et lite volum.`,
    },
    {
      id: 'tof2-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-1-ex-1',
        number: '3.1.1',
        type: 'multiple-choice',
        task: 'Hvilket størrelsesområde definerer nanoskalaen?',
        options: [
          { id: 'a', text: '1–100 pm (pikometer)', isCorrect: false },
          { id: 'b', text: '1–100 nm (nanometer)', isCorrect: true },
          { id: 'c', text: '1–100 µm (mikrometer)', isCorrect: false },
          { id: 'd', text: '1–100 mm (millimeter)', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Nanoskalaen defineres som området fra 1 til 100 nanometer ($10^{-9}$ m). Pikometer er tusen ganger mindre (atomkjerner), mikrometer er tusen ganger større (celler), og millimeter er en million ganger større.',
      },
    },

    // --- BLOKK 2: Overflate-til-volum-forholdet ---
    {
      id: 'tof2-3-1-text-2',
      type: 'text',
      title: 'Overflate-til-volum-forholdet',
      content: `### Overflate-til-volum-forholdet

En av de viktigste konsekvensene av å gjøre materialer mindre er den dramatiske økningen i **overflate-til-volum-forholdet** ($S/V$). Dette er kanskje den mest intuitive grunnen til at nanomaterialer oppfører seg annerledes enn bulk-materialer.

For en kule med radius $r$ er:

$$\\text{Overflate} = 4\\pi r^2 \\quad \\text{og} \\quad \\text{Volum} = \\frac{4}{3}\\pi r^3$$

Overflate-til-volum-forholdet blir:

$$\\frac{S}{V} = \\frac{4\\pi r^2}{\\frac{4}{3}\\pi r^3} = \\frac{3}{r}$$

Denne enkle formelen viser at $S/V$ er **omvendt proporsjonal** med radius. Når radius halveres, dobles $S/V$. Når vi går fra en kule med radius 1 cm til en nanopartikkel med radius 5 nm, øker $S/V$ med en faktor på to millioner!

Konsekvensen er at i en nanopartikkel befinner en mye større andel av atomene seg på **overflaten** i stedet for i det indre. Overflateatomene har færre naboer og har umettet bindingskapasitet, noe som gjør dem mye mer kjemisk reaktive.`,
    },
    {
      id: 'tof2-3-1-def-2',
      type: 'definition',
      title: 'Overflate-til-volum-forholdet',
      content: `**Overflate-til-volum-forholdet** ($S/V$) beskriver forholdet mellom et objekts overflate og dets volum. For geometriske former:

- **Kule:** $S/V = 3/r$
- **Terning:** $S/V = 6/a$ (der $a$ er sidelengden)

Generelt gjelder at $S/V \\propto 1/L$, der $L$ er en karakteristisk lengde.

I nanoteknologien er dette forholdet kritisk fordi:
- Høyere $S/V$ gir **mer reaktive** materialer (flere atomer eksponert for omgivelsene)
- Overflateenergi dominerer over volumenergi
- Katalytisk aktivitet øker dramatisk
- Smeltepunktet kan synke betydelig for nanopartikler`,
    },
    {
      id: 'tof2-3-1-example-2',
      type: 'example',
      title: 'Eksempel: Oppkutting og overflateøkning',
      problem: 'En gullterning med sidelengde 1 cm deles opp i terninger med sidelengde 10 nm. Beregn (a) overflate-til-volum-forholdet for den opprinnelige terningen, (b) overflate-til-volum-forholdet for én 10 nm-terning, og (c) den totale overflaten til alle småterningene sammenlignet med den opprinnelige.',
      solution: `**(a)** For den store terningen med $a = 1\\text{ cm} = 10^{-2}\\text{ m}$:

$$\\frac{S}{V} = \\frac{6}{a} = \\frac{6}{10^{-2}} = 600\\text{ m}^{-1}$$

**(b)** For én liten terning med $a = 10\\text{ nm} = 10^{-8}\\text{ m}$:

$$\\frac{S}{V} = \\frac{6}{10^{-8}} = 6 \\times 10^{8}\\text{ m}^{-1}$$

$S/V$ har altså økt med en faktor $10^6$ (en million)!

**(c)** Total overflate:

Den store terningens volum: $V = (10^{-2})^3 = 10^{-6}\\text{ m}^3$

Én liten ternings volum: $v = (10^{-8})^3 = 10^{-24}\\text{ m}^3$

Antall småterninger: $N = V/v = 10^{-6}/10^{-24} = 10^{18}$

Overflate per småterning: $s = 6 \\times (10^{-8})^2 = 6 \\times 10^{-16}\\text{ m}^2$

Total overflate: $S_{\\text{total}} = N \\times s = 10^{18} \\times 6 \\times 10^{-16} = 600\\text{ m}^2$

Den opprinnelige overflaten var $6 \\times (10^{-2})^2 = 6 \\times 10^{-4}\\text{ m}^2$.

Overflaten har altså økt fra $6 \\times 10^{-4}\\text{ m}^2$ til $600\\text{ m}^2$ — en økning med en faktor **en million**. De små terningene har til sammen en overflate på 600 m², omtrent like stort som en håndballbane, fra én liten terning på 1 cm!`,
    },
    {
      id: 'tof2-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-1-ex-2',
        number: '3.1.2',
        type: 'multiple-choice',
        task: 'Hva skjer med overflate-til-volum-forholdet ($S/V$) for en kule når radius halveres?',
        options: [
          { id: 'a', text: '$S/V$ halveres', isCorrect: false },
          { id: 'b', text: '$S/V$ forblir uendret', isCorrect: false },
          { id: 'c', text: '$S/V$ dobles', isCorrect: true },
          { id: 'd', text: '$S/V$ firedobles', isCorrect: false },
        ],
        solution: 'Riktig svar er C. For en kule er $S/V = 3/r$. Hvis radius halveres ($r \\to r/2$), blir $S/V = 3/(r/2) = 6/r$, som er dobbelt så stort som det opprinnelige. Overflate-til-volum-forholdet er omvendt proporsjonalt med radius, så halvering av radius gir dobling av $S/V$.',
      },
    },

    // --- BLOKK 3: Kvanteeffekter ---
    {
      id: 'tof2-3-1-text-3',
      type: 'text',
      title: 'Kvanteeffekter på nanoskalaen',
      content: `### Kvanteeffekter på nanoskalaen

Når et materiale krympes ned mot nanoskalaen, begynner **kvantemekaniske effekter** å spille en merkbar rolle. I bulk-materialer er disse effektene «utvasket» fordi vi har med enorme antall atomer å gjøre, men i nanopartikler med noen hundre til noen tusen atomer blir kvantemekanikken avgjørende.

**Kvantemekanisk innesperring (quantum confinement):** I et metall eller halvleder kan elektronene bevege seg fritt gjennom materialet. Men hvis materialet gjøres så lite at dimensjonene er sammenlignbare med elektronets de Broglie-bølgelengde, begrenses elektronets bevegelse. Elektronet blir «innesperret» i en svært liten boks.

Akkurat som en gitarstreng bare kan vibrere ved bestemte frekvenser (stående bølger), kan et innesperret elektron bare ha bestemte, diskrete energinivåer. Jo mindre boksen er, desto større blir avstanden mellom energinivåene:

$$\\Delta E \\propto \\frac{1}{L^2}$$

der $L$ er dimensjonen til nanostrukturen. Dette betyr at **små nanopartikler har større energigap** enn store, noe som direkte påvirker optiske og elektriske egenskaper.

Den mest spektakulære konsekvensen er at **fargen på nanopartikler avhenger av størrelsen**. Kvanteprikker (quantum dots) av samme materiale kan gi lys i hele regnbuens spektrum bare ved å endre størrelsen — små kvanteprikker gir blått lys (høy energi, stort gap), mens store kvanteprikker gir rødt lys (lav energi, lite gap).`,
    },
    {
      id: 'tof2-3-1-def-3',
      type: 'definition',
      title: 'Kvantemekanisk innesperring',
      content: `**Kvantemekanisk innesperring** (quantum confinement) oppstår når en partikkel (typisk et elektron) er begrenset til et volum som er sammenlignbart med partikkelens **de Broglie-bølgelengde**.

For et elektron i et metall er de Broglie-bølgelengden typisk noen få nanometer. Når materialets dimensjoner nærmer seg denne størrelsen, oppstår diskrete energinivåer i stedet for kontinuerlige energibånd.

Konsekvenser:
- **Energigapet** mellom tillatte nivåer øker når partikkelen krympes
- **Optiske egenskaper** endres — absorpsjon og emisjon av lys forskyves
- **Elektrisk ledningsevne** endres kvalitativt
- Materialet kan gå fra metallisk til halvledende oppførsel`,
    },
    {
      id: 'tof2-3-1-example-3',
      type: 'example',
      title: 'Eksempel: Kvanteprikker og farge',
      problem: 'Forklar hvorfor en løsning av CdSe-kvanteprikker med diameter 2 nm sender ut blått lys, mens kvanteprikker med diameter 6 nm av samme materiale sender ut rødt lys.',
      solution: `Forklaringen ligger i kvantemekanisk innesperring:

**Liten kvanteprikk (2 nm):** Elektronet er sterkt innesperret i et lite volum. Energigapet mellom grunntilstanden og den første eksiterte tilstanden er stort. Når elektronet faller tilbake fra den eksiterte tilstanden, avgis et foton med **høy energi**, som tilsvarer **kort bølgelengde** — altså blått lys ($\\lambda \\approx 450\\text{ nm}$).

**Stor kvanteprikk (6 nm):** Elektronet har mer plass, og innesperringen er svakere. Energigapet er mindre. Fotonet som emitteres har **lavere energi** og **lengre bølgelengde** — altså rødt lys ($\\lambda \\approx 630\\text{ nm}$).

Sammenhengen mellom energi og bølgelengde er gitt ved:

$$E = \\frac{hc}{\\lambda}$$

der $h$ er Plancks konstant og $c$ er lyshastigheten. Høyere energi gir kortere bølgelengde (blåforskyvning), og lavere energi gir lengre bølgelengde (rødforskyvning). Innesperringsenergien skalerer omtrent som $1/d^2$, der $d$ er diameteren.`,
    },
    {
      id: 'tof2-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-1-ex-3',
        number: '3.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar med egne ord hva kvantemekanisk innesperring er, og hvordan det påvirker egenskapene til nanopartikler. Gi minst to konkrete eksempler på hvordan denne effekten kan observeres eller utnyttes.',
        hints: ['Tenk på hva som skjer med et elektronbølge når den begrenses til et lite rom. Sammenlign med stående bølger på en gitarstreng.'],
        solution: 'Kvantemekanisk innesperring oppstår når et elektron er begrenset til et så lite volum at dets bølgenatur blir avgjørende. Akkurat som en gitarstreng begrenset mellom to faste punkter bare kan vibrere ved bestemte frekvenser, kan elektronet bare innta bestemte, diskrete energinivåer.\n\nJo mindre strukturen er, desto større avstand mellom energinivåene. Dette påvirker materialets egenskaper fundamentalt:\n\nEksempel 1: Kvanteprikker av CdSe endrer farge avhengig av størrelse — små partikler (2 nm) emitterer blått lys (stort energigap), store partikler (6 nm) emitterer rødt lys (lite energigap). Dette utnyttes i QLED-skjermer og medisinsk bildebehandling.\n\nEksempel 2: Gull i bulk er et gult, inert metall. Gullnanopartikler på 10–50 nm er dypt røde (plasmonresonans) og er svært kjemisk reaktive. Nanopartikler under 2 nm viser halvledende oppførsel i stedet for metallisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- BLOKK 4: Praktiske konsekvenser ---
    {
      id: 'tof2-3-1-text-4',
      type: 'text',
      title: 'Praktiske konsekvenser av nanoegenskaper',
      content: `### Praktiske konsekvenser av nanoegenskaper

Kombinasjonen av økt overflate-til-volum-forhold og kvanteeffekter gir nanopartikler en rekke uventede egenskaper som utnyttes i teknologi og vitenskap:

**Optiske egenskaper:**
Gull i bulk er gult, men gullnanopartikler i løsning er dypt røde, lilla eller blå avhengig av størrelse og form. Dette skyldes **overflate-plasmonresonans** — kollektive svingninger av ledningselektronene som interagerer med synlig lys. Nanogull har vært brukt i farget glass i århundrer (f.eks. den romerske Lycurgus-koppen fra det 4. århundre).

**Smeltepunktsnedsettelse:**
Bulk-gull smelter ved 1064 °C, men gullnanopartikler med diameter 2 nm smelter allerede ved ca. 300 °C. Årsaken er at overflateatomene har færre bindinger og trenger mindre energi for å bryte fri. Smeltepunktet $T_m$ for en nanopartikkel med radius $r$ kan tilnærmes ved:

$$T_m(r) = T_{m,\\text{bulk}} \\left(1 - \\frac{C}{r}\\right)$$

der $C$ er en materialkonstant.

**Kjemisk reaktivitet:**
Nanopartikler er langt mer reaktive enn bulk-materialer fordi en større andel atomer er eksponert på overflaten. Platina-nanopartikler er ekstremt effektive katalysatorer, og nanogull — som er inert i bulk — viser overraskende høy katalytisk aktivitet for CO-oksidasjon ved lave temperaturer.

**Magnetiske egenskaper:**
Jernoksidnanopartikler under ca. 15 nm viser **superparamagnetisme** — de er magnetiske i et ytre felt, men mister magnetismen umiddelbart når feltet fjernes. Dette gjør dem nyttige i medisinsk diagnostikk (MR-kontrastmidler) og målrettet medikamentlevering.`,
    },
    {
      id: 'tof2-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-1-ex-4',
        number: '3.1.4',
        type: 'multiple-choice',
        task: 'Hva er hovedårsaken til at gullnanopartikler i løsning ser røde ut, selv om bulk-gull er gult?',
        options: [
          { id: 'a', text: 'Gullatomene endrer krystallstruktur i nanopartikler', isCorrect: false },
          { id: 'b', text: 'Overflate-plasmonresonans — kollektive elektronsvingninger som absorberer og sprer synlig lys', isCorrect: true },
          { id: 'c', text: 'Gullet oksideres lettere i nanoform og danner rødt gulloksid', isCorrect: false },
          { id: 'd', text: 'Nanopartiklene er gjennomsiktige og farges av løsningsmiddelet', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Gullnanopartikler viser overflate-plasmonresonans: de frie ledningselektronene på partikkeloverflaten svinger kollektivt når de påvirkes av synlig lys. For nanopartikler rundt 10–50 nm absorberer denne resonansen sterkt i det grønne/blå området av spekteret, slik at lyset som transmitteres og spres er i det røde området. Fargen kan justeres ved å endre partikkelstørrelse og -form.',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof2-3-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Nanoskalaen** (1–100 nm) er et størrelsesområde der materialer viser fundamentalt andre egenskaper enn i makroskopisk form.
- **Overflate-til-volum-forholdet** ($S/V$) øker dramatisk når partikkelstørrelsen synker. For en kule gjelder $S/V = 3/r$, slik at halvering av radius dobler $S/V$. Dette gir økt kjemisk reaktivitet og endrede termiske egenskaper.
- **Kvanteeffekter** (kvantemekanisk innesperring) oppstår når materialets dimensjoner nærmer seg de Broglie-bølgelengden. Energinivåene blir diskrete, og energigapet øker med avtagende størrelse ($\\Delta E \\propto 1/L^2$).
- Konsekvensene inkluderer **fargeendring** (plasmonresonans, kvanteprikker), **lavere smeltepunkt**, **økt katalytisk aktivitet** og **superparamagnetisme**.
- Disse egenskapene utgjør grunnlaget for en rekke nanoteknologiske anvendelser innen medisin, energi, elektronikk og materialer.`,
    },

    // --- Samleoppgave ---
    {
      id: 'tof2-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvorfor nanomaterialer kan ha både fordeler og utfordringer sammenlignet med bulk-materialer. Inkluder i svaret ditt: (a) minst to eksempler på nyttige egenskaper som oppstår på nanoskalaen, med forklaring av den fysiske mekanismen, og (b) en vurdering av hvorfor den økte reaktiviteten som gjør nanopartikler nyttige som katalysatorer, også kan representere en utfordring.',
        hints: ['Tenk på overflate-til-volum og kvanteeffekter. Hva skjer med reaktivitet, stabilitet og helse/miljø?'],
        solution: '(a) Eksempel 1: Kvanteprikker endrer farge med størrelse på grunn av kvantemekanisk innesperring. Små partikler har større energigap og emitterer kortbølget (blått) lys, mens store partikler emitterer langbølget (rødt) lys. Dette utnyttes i QLED-skjermer og medisinsk avbildning.\n\nEksempel 2: Superparamagnetiske jernoksidnanopartikler mister magnetismen når det ytre feltet fjernes, fordi den termiske energien er tilstrekkelig til å tilfeldig reorientere det magnetiske momentet i en enkelt-domene-partikkel. Dette utnyttes i MR-kontrastmidler og målrettet medikamentlevering.\n\n(b) Den store overflaten som gjør nanopartikler til effektive katalysatorer (mange tilgjengelige reaksjonsposisjoner), betyr også at de er svært reaktive med omgivelsene. Dette kan føre til: uønsket oksidasjon eller degradering av partiklene, potensielle helseeffekter ved innånding (nanopartikler kan trenge dypt inn i lungene og passere biologiske barrierer), og ukjente miljøeffekter ved utslipp. Balansen mellom nytteverdi og risiko er et sentralt tema i ansvarlig utvikling av nanoteknologi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.2: Nanomaterialer og egenskaper
// ============================================================================

export const CHAPTER_TOF_2_3_2: TextbookChapter = {
  id: 'tof-2-3-2',
  courseId: 'tof-2',
  chapterNumber: '3.2',
  title: 'Nanomaterialer og egenskaper',
  description: 'Nanopartikler, nanorør, kvanteprikker og deres unike egenskaper.',
  estimatedMinutes: 25,
  competenceGoals: [
    'beskrive nanomaterialer',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-3-2-intro',
      type: 'text',
      content: `## Nanomaterialer og egenskaper

I forrige kapittel lærte vi om de grunnleggende prinsippene som gjør nanoskalaen spesiell — økt overflate-til-volum-forhold og kvanteeffekter. Nå skal vi se nærmere på de viktigste **typene nanomaterialer** som er utviklet, og hvilke unike egenskaper de har.

Nanomaterialer kan klassifiseres etter form og dimensjonalitet. Noen er kuler (nanopartikler), andre er rør (nanorør), tynne filmer (nanoskikt) eller punktformige strukturer (kvanteprikker). Hver type har sine spesielle egenskaper som gjør dem egnet for bestemte anvendelser.

Utvikling av nye nanomaterialer er et av de mest aktive forskningsområdene i verden, og nye materialer med overraskende egenskaper oppdages stadig.`,
    },

    // --- BLOKK 1: Nanopartikler ---
    {
      id: 'tof2-3-2-def-1',
      type: 'definition',
      title: 'Nanopartikler',
      content: `**Nanopartikler** er partikler der minst én dimensjon er mellom 1 og 100 nm. De kan bestå av metaller, metalloksider, halvledere, polymerer eller organiske materialer.

Nanopartikler klassifiseres etter **dimensjonalitet**:

- **0D (null-dimensjonale):** Alle tre dimensjoner er på nanoskala — f.eks. kvanteprikker, fullerener og metallnanopartikler.
- **1D (én-dimensjonale):** Én dimensjon er makroskopisk, to er nanoskala — f.eks. nanorør, nanotråder og nanostaver.
- **2D (to-dimensjonale):** To dimensjoner er makroskopiske, én er nanoskala — f.eks. grafén, nanoplater og tynne filmer.
- **3D (tre-dimensjonale):** Bulk-materialer som inneholder nanostrukturering — f.eks. nanoporøse materialer og nanokompositter.

Denne klassifiseringen er viktig fordi dimensjonaliteten avgjør hvilke kvanteeffekter som dominerer og dermed hvilke egenskaper materialet har.`,
    },
    {
      id: 'tof2-3-2-text-1',
      type: 'text',
      content: `### Metallnanopartikler

Metallnanopartikler — spesielt gull, sølv og platina — er blant de mest studerte nanomaterialene. De har egenskaper som skiller seg markant fra bulk-metallene:

**Gullnanopartikler** viser den nevnte overflate-plasmonresonansen og brukes i diagnostiske tester (graviditetstest, COVID-19 hurtigtester), kreftbehandling (fototermal terapi) og som katalysatorer.

**Sølvnanopartikler** har sterke antibakterielle egenskaper fordi sølvioner ($\\text{Ag}^+$) forstyrrer bakteriers cellemembraner og enzymer. De brukes i medisinsk utstyr, bandasjer, tekstiler og vannrensing. Men det er bekymring for miljøeffekter ved utslipp av nanosølv.

**Platina-nanopartikler** er ekstremt effektive katalysatorer på grunn av den store tilgjengelige overflaten. De brukes i bilkatalysatorer (avgassrensing) og brenselsceller.

**Jernoksidnanopartikler** ($\\text{Fe}_3\\text{O}_4$) er superparamagnetiske og brukes som MR-kontrastmidler i medisinsk avbildning og i målrettet medikamentlevering.`,
    },
    {
      id: 'tof2-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Sølvnanopartikler i antibakterielle produkter',
      problem: 'Forklar hvorfor sølvnanopartikler er mer effektive som antibakterielt middel enn en tilsvarende masse bulk-sølv.',
      solution: `Sølvnanopartikler er mer effektive av to hovedgrunner:

**1. Enormt overflate-til-volum-forhold:** Sølvnanopartikler med diameter 10 nm har et $S/V$-forhold som er ca. en million ganger større enn en sølvklump på 1 cm. Siden den antibakterielle effekten skyldes frigjøring av $\\text{Ag}^+$-ioner fra overflaten, betyr mer overflate at flere ioner frigis per masseenhet sølv.

**2. Økt reaktivitet:** Overflateatomene i nanopartikler har færre bindinger og høyere energi enn atomer inne i bulk-sølv. Disse «uferdige» bindingene gjør det lettere for sølvatomene å oksideres til $\\text{Ag}^+$, som er den bakteriedrepende formen.

I tillegg er nanopartiklene så små at de kan trenge inn i bakteriemembraner og forstyrre cellulære prosesser direkte, noe bulk-sølv ikke kan.

Resultatet er at en svært liten mengde nanosølv (mikrogram) gir tilsvarende antibakteriell effekt som mange gram bulk-sølv.`,
    },
    {
      id: 'tof2-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-2-ex-1',
        number: '3.2.1',
        type: 'multiple-choice',
        task: 'Hvilken dimensjonalitetsklassifisering har et nanorør?',
        options: [
          { id: 'a', text: '0D — alle tre dimensjoner er nanoskala', isCorrect: false },
          { id: 'b', text: '1D — to dimensjoner er nanoskala, én er makroskopisk', isCorrect: true },
          { id: 'c', text: '2D — én dimensjon er nanoskala, to er makroskopiske', isCorrect: false },
          { id: 'd', text: '3D — ingen dimensjoner er nanoskala', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Et nanorør har en diameter på nanoskala (typisk 1–50 nm) i to tverrgående dimensjoner, men kan være mikrometer til millimeter langt — altså makroskopisk i lengderetningen. Derfor klassifiseres det som 1D (én-dimensjonalt) nanomateriale.',
      },
    },

    // --- BLOKK 2: Nanorør ---
    {
      id: 'tof2-3-2-text-2',
      type: 'text',
      title: 'Nanorør',
      content: `### Nanorør

**Nanorør** er rørformede nanostrukturer med diameter typisk fra 1 til 100 nm og lengde opptil flere mikrometer eller millimeter. De mest kjente er **karbonnanorør** (CNT — Carbon Nanotubes), som vi skal studere i detalj i neste kapittel, men nanorør kan også lages av andre materialer.

**Karbonnanorør** kan beskrives som et «opprullet» grafénark. De finnes i to hovedtyper:
- **Enkeltvegget (SWCNT):** Ett grafénlag rullet til et rør, med diameter typisk 0,4–2 nm.
- **Flervegget (MWCNT):** Flere konsentriske grafénrør, som russiske dukker, med ytre diameter typisk 2–100 nm.

**Egenskaper som gjør karbonnanorør spesielle:**
- **Mekanisk styrke:** Strekkfasthet opptil 63 GPa — omtrent 100 ganger sterkere enn stål ved samme vekt. Elastisitetsmodul på ca. 1 TPa.
- **Elektrisk ledningsevne:** Avhengig av kiralitet (rullevinkelen) kan et SWCNT være enten metallisk eller halvledende. Strømtettheten kan nå $10^9\\text{ A/cm}^2$, tusen ganger mer enn kobber.
- **Termisk ledningsevne:** Opptil 3500 W/(m·K) langs rørets akse, bedre enn diamant.
- **Lav vekt:** Tettheten er ca. $1{,}3\\text{ g/cm}^3$, omtrent en sjettedel av stål.

Andre typer nanorør inkluderer **bornitrid-nanorør** (BN-NT), som er elektrisk isolerende men termisk ledende, og **titandioksid-nanorør** ($\\text{TiO}_2$-NT), som brukes i solceller og fotokatalyse.`,
    },
    {
      id: 'tof2-3-2-def-2',
      type: 'definition',
      title: 'Kiralitet i karbonnanorør',
      content: `**Kiraliteten** til et karbonnanorør beskriver vinkelen grafénarket er rullet opp under. Den angis med en **kiralitetsvektor** $(n, m)$ som beskriver hvordan arket «kobles» til seg selv ved sammenrulling.

Det finnes tre hovedtyper:
- **Armchair** $(n, n)$: Alltid metallisk (god leder)
- **Zigzag** $(n, 0)$: Kan være metallisk eller halvledende
- **Kiral** $(n, m)$ der $n \\neq m$: Halvledende når $(n - m)$ ikke er delelig med 3; metallisk når $(n - m)$ er delelig med 3

Statistisk er ca. 1/3 av alle tilfeldig genererte SWCNT metalliske og 2/3 halvledende. Å kontrollere kiraliteten under syntese er en av de store utfordringene i nanorørforskningen.`,
    },
    {
      id: 'tof2-3-2-example-2',
      type: 'example',
      title: 'Eksempel: Kiralitet og elektriske egenskaper',
      problem: 'Et enkeltvegget karbonnanorør har kiralitetsvektoren $(6, 3)$. Er dette røret metallisk eller halvledende?',
      solution: `Vi bruker regelen: et karbonnanorør $(n, m)$ er metallisk dersom $(n - m)$ er delelig med 3, og halvledende ellers.

$$n - m = 6 - 3 = 3$$

Siden $3$ er delelig med $3$ (rest = 0), er dette røret **metallisk**.

Et rør med $(6, 4)$ ville derimot gitt $n - m = 2$, som ikke er delelig med $3$, og ville vært **halvledende**.

Et armchair-rør $(6, 6)$ gir $n - m = 0$, som er delelig med $3$, og er alltid metallisk — dette stemmer med den generelle regelen om at armchair-rør alltid er metalliske.`,
    },
    {
      id: 'tof2-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-2-ex-2',
        number: '3.2.2',
        type: 'multiple-choice',
        task: 'Et karbonnanorør har kiralitetsvektoren $(8, 5)$. Er dette røret metallisk eller halvledende?',
        options: [
          { id: 'a', text: 'Metallisk, fordi $n - m = 3$ som er delelig med 3', isCorrect: true },
          { id: 'b', text: 'Halvledende, fordi $n - m = 3$ som er et oddetall', isCorrect: false },
          { id: 'c', text: 'Metallisk, fordi det er et armchair-rør', isCorrect: false },
          { id: 'd', text: 'Halvledende, fordi verken $n$ eller $m$ er delelig med 3', isCorrect: false },
        ],
        solution: 'Riktig svar er A. Vi beregner $n - m = 8 - 5 = 3$. Siden 3 er delelig med 3, er røret metallisk. Alternativ B er feil fordi regelen handler om delelighet med 3, ikke om oddetall/partall. C er feil fordi armchair krever $n = m$, og her er $n \\neq m$. D er feil fordi regelen baserer seg på differansen $(n - m)$, ikke på $n$ og $m$ individuelt.',
      },
    },

    // --- BLOKK 3: Kvanteprikker ---
    {
      id: 'tof2-3-2-text-3',
      type: 'text',
      title: 'Kvanteprikker',
      content: `### Kvanteprikker (Quantum Dots)

**Kvanteprikker** er halvleder-nanokrystaller med diameter typisk 2–10 nm, som inneholder alt fra noen hundre til noen tusen atomer. De er 0D-nanomaterialer der kvantemekanisk innesperring skjer i alle tre romlige dimensjoner.

Den mest bemerkelsesverdige egenskapen til kvanteprikker er at deres **optiske egenskaper kan finjusteres** bare ved å endre størrelsen. Samme materiale kan gi lys i hele det synlige spekteret — fra ultrafiolett til infrarødt — avhengig av nanopartikkelens diameter.

**Vanlige materialer for kvanteprikker:**
- **CdSe/ZnS** (kadmiumselenid/sinksulfid): Den mest studerte typen. CdSe-kjernen gir de optiske egenskapene, mens ZnS-skallet beskytter mot degradering og øker lysstyrken.
- **InP/ZnS** (indiumfosfid/sinksulfid): Kadmiumfritt alternativ som er mindre giftig. Brukes i QLED-skjermer.
- **PbS/PbSe** (blysulfid/blyselenid): Emitterer i infrarødt. Brukes i solceller og nattsynsdetektorer.
- **Perovskitt-kvanteprikker** ($\\text{CsPbBr}_3$): Nyere type med svært høy lysstyrke og lave produksjonskostnader.

**Anvendelser:**
- **QLED-skjermer:** Samsung og andre produsenter bruker kvanteprikker i TV-skjermer for å gi rene, mettet farger med høy lysstyrke.
- **Medisinsk avbildning:** Kvanteprikker konjugert med antistoffer kan merke spesifikke celler eller proteiner med ulike farger — multiplex fluorescens.
- **Solceller:** Kvanteprikker kan absorbere bred-spektret sollys og potensielt overskride Shockley-Queisser-grensen for enkelt-junction-solceller.`,
    },
    {
      id: 'tof2-3-2-def-3',
      type: 'definition',
      title: 'Kvanteprikk (Quantum Dot)',
      content: `En **kvanteprikk** er en halvleder-nanokrystall med diameter typisk 2–10 nm der elektronene er kvantemekanisk innesperret i alle tre dimensjoner.

Nøkkelegenskaper:
- **Størrelsesjusterbar emisjon:** Bølgelengden til emittert lys bestemmes av partikkelstørrelsen, ikke bare materialvalget
- **Smal emisjonsprofil:** Kvanteprikker har smale emisjonstopper (FWHM typisk 20–30 nm), som gir rene, mettede farger
- **Bred absorpsjon:** De absorberer lys effektivt ved bølgelengder kortere enn emisjonsbølgelengden
- **Høy kvanteutbytte:** Moderne kvanteprikker med kjerne-skall-struktur kan ha lysutsendingseffektivitet (kvanteutbytte) over 90 %

Energigapet $E_g$ for en kvanteprikk med radius $r$ kan tilnærmes med:

$$E_g(r) \\approx E_{g,\\text{bulk}} + \\frac{\\hbar^2 \\pi^2}{2r^2}\\left(\\frac{1}{m_e^*} + \\frac{1}{m_h^*}\\right)$$

der $m_e^*$ og $m_h^*$ er de effektive massene til elektron og hull.`,
    },
    {
      id: 'tof2-3-2-example-3',
      type: 'example',
      title: 'Eksempel: Kvanteprikker i QLED-skjermer',
      problem: 'En QLED-skjerm bruker kvanteprikker av InP/ZnS. For å gi rødt, grønt og blått lys trengs kvanteprikker med diameter henholdsvis ca. 5 nm, 3,5 nm og 2,5 nm. Forklar sammenhengen mellom størrelse og farge.',
      solution: `Sammenhengen mellom størrelse og farge forklares av kvantemekanisk innesperring:

**Store kvanteprikker (5 nm → rødt):** Elektronene har relativt god plass, og energigapet mellom valensbåndet og ledningsbåndet er **lite**. Fotonet som emitteres ved rekombinasjon har lav energi, altså **lang bølgelengde** — rødt lys ($\\lambda \\approx 630\\text{ nm}$).

**Mellomstore kvanteprikker (3,5 nm → grønt):** Sterkere innesperring gir et **større** energigap. Emittert lys har høyere energi og **kortere bølgelengde** — grønt lys ($\\lambda \\approx 530\\text{ nm}$).

**Små kvanteprikker (2,5 nm → blått):** Kraftig innesperring gir det **største** energigapet. Emittert lys har den høyeste energien og **korteste bølgelengden** — blått lys ($\\lambda \\approx 460\\text{ nm}$).

Sammenhengen er: $E_g \\propto 1/r^2$, og $\\lambda = hc/E_g$, så kortere radius gir kortere bølgelengde (blåforskyvning). QLED-skjermer bruker en blå LED som lyskilde og lar kvanteprikker konvertere deler av lyset til rent grønt og rent rødt — dette gir et bredere fargespekter enn tradisjonelle LCD-skjermer.`,
    },
    {
      id: 'tof2-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-2-ex-3',
        number: '3.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign nanopartikler (0D), nanorør (1D) og grafén (2D) med hensyn til dimensjonalitet, typiske størrelser og minst én unik egenskap for hver. Presenter svaret i en tabell eller strukturert oversikt.',
        hints: ['Tenk på hva dimensjonaliteten betyr for kvanteinnesperring og hvilke egenskaper som følger av det.'],
        solution: '**Nanopartikler (0D):** Alle tre dimensjoner er nanoskala (typisk 1–100 nm). Kvanteeffekter i alle retninger. Unik egenskap: størrelsesjusterbar farge (kvanteprikker) — samme materiale gir ulike farger avhengig av diameter.\n\n**Nanorør (1D):** To dimensjoner er nanoskala (diameter 1–100 nm), én er makroskopisk (lengde opptil mm). Kvanteeffekter i tverretning. Unik egenskap: ekstraordinær strekkfasthet (opptil 63 GPa for CNT) kombinert med elektrisk ledningsevne som kan være metallisk eller halvledende avhengig av kiralitet.\n\n**Grafén (2D):** Én dimensjon er nanoskala (tykkelse: ett atomlag ≈ 0,34 nm), to er makroskopiske. Kvanteeffekter i tykkelsesretning. Unik egenskap: elektronene oppfører seg som masseløse Dirac-fermioner med ekstremt høy mobilitet (opptil 200 000 cm²/Vs), noe som gjør grafén til den beste kjente elektriske lederen per tykkelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- BLOKK 4: Nanokompositter og anvendelser ---
    {
      id: 'tof2-3-2-text-4',
      type: 'text',
      title: 'Nanokompositter og praktiske anvendelser',
      content: `### Nanokompositter

En **nanokompositt** er et materiale der nanoskala-fyllstoffer er innlemmet i en matrise (typisk polymer, keramikk eller metall) for å forbedre egenskapene. Selv små mengder nanofyllstoff kan gi dramatiske forbedringer:

**Polymerbaserte nanokompositter:**
- CNT eller grafén i epoksy gir økt strekkfasthet og elektrisk ledningsevne. Bare 0,5 vektprosent CNT kan doble seigheten til en polymer.
- Nanoleire (montmorillonitt) i nylon brukes i bilmotordeksler og emballasje for å bedre barrieregenskaper mot gass og fuktighet.

**Nanokeramikk:**
- Nanostrukturert aluminiumoksid ($\\text{Al}_2\\text{O}_3$) er hardere og seigere enn konvensjonell keramikk fordi korngrensene bremser sprekkdannelse.
- Nanostrukturert hydroksyapatitt brukes i beinimplantater fordi strukturen ligner naturlig bein.

### Viktige anvendelsesområder

| Område | Nanomateriale | Anvendelse |
|--------|---------------|------------|
| Medisin | Jernoksidnanopartikler | MR-kontrastmidler |
| Medisin | Gullnanopartikler | Diagnostikk, kreftbehandling |
| Elektronikk | Kvanteprikker | QLED-skjermer |
| Energi | TiO₂-nanopartikler | Solceller, fotokatalyse |
| Materialer | CNT/grafén i polymer | Lette, sterke kompositter |
| Miljø | Nanosølv | Vannrensing, antibakterielt |
| Tekstil | Nano-TiO₂/ZnO | UV-beskyttelse, selvrensende |`,
    },
    {
      id: 'tof2-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-2-ex-4',
        number: '3.2.4',
        type: 'multiple-choice',
        task: 'Hva er hovedfordelen med kvanteprikker fremfor tradisjonelle fluorescerende fargestoffer i medisinsk avbildning?',
        options: [
          { id: 'a', text: 'Kvanteprikker er billigere å produsere', isCorrect: false },
          { id: 'b', text: 'Kvanteprikker har smalere emisjonsprofil, er mer lyssterke og kan finjusteres i farge ved å endre størrelse', isCorrect: true },
          { id: 'c', text: 'Kvanteprikker er alltid ugiftige', isCorrect: false },
          { id: 'd', text: 'Kvanteprikker fungerer bare med ultrafiolett lys', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Kvanteprikker har flere fordeler over tradisjonelle fargestoffer: (1) smalere emisjonstopper gir renere farger og mulighet for multiplex-avbildning med mange farger samtidig, (2) høyere lysstyrke og kvanteutbytte, (3) størrelsesjusterbar emisjon slik at samme materiale kan gi ulike farger, og (4) bedre fotostabilitet (de blekes langsommere). A er feil (de er dyrere), C er feil (mange typer inneholder giftige metaller som kadmium), og D er feil (de kan eksiteres av ulike lyskilder).',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof2-3-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Nanomaterialer** klassifiseres etter dimensjonalitet: 0D (nanopartikler, kvanteprikker), 1D (nanorør, nanotråder), 2D (grafén, nanoplater) og 3D (nanokompositter).
- **Metallnanopartikler** av gull, sølv og platina har uventede optiske, antibakterielle og katalytiske egenskaper på grunn av økt overflate og plasmoneffekter.
- **Karbonnanorør** er ekstraordinært sterke, lette og elektrisk ledende. Kiraliteten $(n, m)$ bestemmer om de er metalliske eller halvledende — metalliske når $(n - m)$ er delelig med 3.
- **Kvanteprikker** er halvleder-nanokrystaller med størrelsesjusterbare optiske egenskaper. Energigapet øker med avtagende størrelse ($E_g \\propto 1/r^2$), noe som gir blåforskyvning.
- **Nanokompositter** kombinerer nanofyllstoffer med en matrise for å oppnå forbedrede mekaniske, elektriske eller barrieregenskaper.`,
    },

    // --- Samleoppgave ---
    {
      id: 'tof2-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du skal presentere nanomaterialer for en gruppe ingeniører som vurderer å bruke nanoteknologi i produktene sine. Velg tre ulike nanomaterialer (f.eks. gullnanopartikler, karbonnanorør og kvanteprikker) og beskriv for hvert materiale: (a) hva det er og hvordan det er strukturert, (b) hvilke unike egenskaper det har og hvorfor, og (c) en konkret anvendelse med forklaring av hvordan nanoegenskapene utnyttes.',
        hints: ['Knytt egenskapene til de grunnleggende prinsippene fra kapittel 3.1 — overflate-til-volum og kvanteeffekter.'],
        solution: 'Tre nanomaterialer med egenskaper og anvendelser:\n\n1. **Gullnanopartikler (0D):** Sfæriske partikler av gull med diameter 10–100 nm. Unik egenskap: overflate-plasmonresonans gir sterk absorpsjon av synlig lys ved bestemte bølgelengder. Egenskapen skyldes det økte overflate-til-volum-forholdet som gjør at en stor andel ledningselektroner er eksponert for lysfeltet. Anvendelse: COVID-19 hurtigtester — gullnanopartikler konjugert med antistoffer vandrer langs en teststripe. Når de bindes til virusproteiner i en testlinje, akkumuleres de og den røde fargen blir synlig med det blotte øye.\n\n2. **Karbonnanorør (1D):** Opprullede grafénark med diameter 1–100 nm og lengde opptil mm. Unik egenskap: ekstraordinær strekkfasthet (63 GPa) kombinert med lav vekt (1,3 g/cm³). Styrken skyldes de sterke sp²-karbonbindingene i en defektfri sylindrisk geometri. Anvendelse: Lette komposittmaterialer for romfart — tilsetting av bare 1 % CNT i en polymermatrise kan doble strekkfastheten og samtidig redusere vekten.\n\n3. **Kvanteprikker (0D):** Halvleder-nanokrystaller (f.eks. InP/ZnS) med diameter 2–10 nm. Unik egenskap: størrelsesjusterbar lysutsendelse med smal emisjonsprofil. Skyldes kvantemekanisk innesperring der energigapet øker som $1/r²$. Anvendelse: QLED-skjermer — blå LED eksiterer kvanteprikker som konverterer lys til rent rødt og grønt, noe som gir bredere fargegamut og høyere energieffektivitet enn tradisjonelle LCD-skjermer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.3: Grafén og karbonnanostrukturer
// ============================================================================

export const CHAPTER_TOF_2_3_3: TextbookChapter = {
  id: 'tof-2-3-3',
  courseId: 'tof-2',
  chapterNumber: '3.3',
  title: 'Grafén og karbonnanostrukturer',
  description: 'Grafén, fullerener, karbonnanorør og anvendelser.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for karbonnanostrukturer',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-3-3-intro',
      type: 'text',
      content: `## Grafén og karbonnanostrukturer

Karbon er et av de mest allsidige grunnstoffene i periodesystemet. I tillegg til de velkjente formene diamant og grafitt, finnes en hel familie av **karbonnanostrukturer** som har revolusjonert materialvitenskapen siden oppdagelsen av fullerener i 1985.

Disse nanostrukturene — fullerener, karbonnanorør og grafén — deler det samme grunnleggende byggeelementet: et heksagonalt nettverk av $sp^2$-hybridiserte karbonatomer. Men ved å variere geometrien — lukke nettverket til en kule, rulle det til et rør, eller holde det flatt — oppnår man vidt forskjellige egenskaper.

Grafén, som er et enkelt atomlag av karbon i et bikakemønster, ble isolert for første gang i 2004 av Andre Geim og Konstantin Novoselov, som fikk Nobelprisen i fysikk for dette i 2010. Materialet har siden blitt kalt et «vidundermateriale» på grunn av sine ekstreme egenskaper.`,
    },

    // --- BLOKK 1: Karbon og sp²-hybridisering ---
    {
      id: 'tof2-3-3-def-1',
      type: 'definition',
      title: 'Karbons allotroper',
      content: `**Allotroper** er ulike strukturelle former av samme grunnstoff. Karbon har et uvanlig høyt antall allotroper:

- **Diamant:** Hvert karbonatom er $sp^3$-hybridisert og bundet til fire naboer i et tetraedrisk nettverk. Hardeste kjente naturlige materiale, elektrisk isolator.
- **Grafitt:** Lag av $sp^2$-hybridiserte karbonatomer (grafénlag) stablet med svake van der Waals-krefter mellom lagene. Myk, elektrisk ledende langs lagene, brukes i blyanter og smøremidler.
- **Fulleren ($\\text{C}_{60}$):** 60 karbonatomer arrangert som en fotball (truncated icosahedron) — 20 heksagoner og 12 pentagoner. Oppdaget i 1985 (Nobelprisen i kjemi 1996).
- **Karbonnanorør (CNT):** Sylindrisk opprullet grafén. Enkeltvegget (SWCNT) eller flervegget (MWCNT). Oppdaget av Sumio Iijima i 1991.
- **Grafén:** Ett enkelt lag av karbonatomer i heksagonalt bikakemønster. Isolert i 2004 (Nobelprisen i fysikk 2010).

Felles for fullerener, CNT og grafén er $sp^2$-hybridisering: hvert karbonatom danner tre $\\sigma$-bindinger med naboene i planet, mens den gjenværende $p$-orbitalen danner et delokalisert $\\pi$-system over hele strukturen. Det er dette $\\pi$-systemet som gir de ekstraordinære elektriske egenskapene.`,
    },
    {
      id: 'tof2-3-3-text-1',
      type: 'text',
      content: `### Fra grafitt til grafén

Grafén er egentlig ikke noe nytt materiale — det har alltid eksistert som de individuelle lagene i grafitt. Det revolusjonerende var at Geim og Novoselov klarte å **isolere** et enkelt atomlag og vise at det var stabilt ved romtemperatur.

Metoden de brukte var overraskende enkel: de presset et stykke grafitt mot vanlig kontortape, rev tapen av (og tok med seg noen grafénlag), og gjentok prosessen til bare et enkelt lag gjenstod. Denne «teip-metoden» (mekanisk eksfoliering) ga grafénflak av svært høy kvalitet, men bare i mikrometerstørrelse.

**Bindingsstruktur i grafén:**
Hvert karbonatom i grafén er bundet til tre naboer gjennom sterke kovalente $\\sigma$-bindinger. Bindingslengden C–C er 0,142 nm (mellom enkeltbinding 0,154 nm og dobbeltbinding 0,134 nm), noe som reflekterer den delokaliserte $\\pi$-bindingen.

Grafénets styrke kommer fra $\\sigma$-bindingene — de er blant de sterkeste kjente kjemiske bindinger. $\\pi$-bindingene gir de elektriske egenskapene: elektronene i $\\pi$-systemet er delokaliserte over hele arket og kan bevege seg fritt, noe som gjør grafén til en utmerket leder.`,
    },
    {
      id: 'tof2-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Sammenligning av karbonallotroper',
      problem: 'Sammenlign diamant og grafén med hensyn til hybridisering, bindingsstruktur, hardhet og elektrisk ledningsevne. Forklar forskjellene ut fra atomenes bindinger.',
      solution: `| Egenskap | Diamant | Grafén |
|----------|---------|--------|
| Hybridisering | $sp^3$ | $sp^2$ |
| Bindinger per atom | 4 σ-bindinger | 3 σ + 1 π-binding |
| Struktur | 3D tetraedrisk nettverk | 2D heksagonalt nettverk |
| Hardhet | Ekstrem (10 på Mohs skala) | Svært sterk i planet, men bare ett lag tykt |
| Elektrisk ledningsevne | Isolator | Utmerket leder |

**Forklaring:**
I diamant er alle fire valenselektroner bundet i $\\sigma$-bindinger til fire naboer. Det finnes ingen frie elektroner, og materialet er en elektrisk isolator. Den tredimensjonale nettverksstrukturen med sterke bindinger i alle retninger gir ekstrem hardhet.

I grafén danner tre av fire valenselektroner $\\sigma$-bindinger i planet, mens det fjerde elektrones $p$-orbital danner et delokalisert $\\pi$-system. Disse $\\pi$-elektronene kan bevege seg fritt langs grafénoverflaten, noe som gir høy elektrisk ledningsevne. Grafén er ekstremt sterkt i planet (strekkfasthet ca. 130 GPa), men som et enkelt atomlag har det ingen styrke vinkelrett på planet.`,
    },
    {
      id: 'tof2-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-3-ex-1',
        number: '3.3.1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste grunnen til at grafén er elektrisk ledende, mens diamant er en isolator?',
        options: [
          { id: 'a', text: 'Grafén har flere karbonatomer enn diamant', isCorrect: false },
          { id: 'b', text: 'I grafén ($sp^2$) finnes delokaliserte π-elektroner som kan bevege seg fritt, mens i diamant ($sp^3$) er alle elektroner bundet i σ-bindinger', isCorrect: true },
          { id: 'c', text: 'Diamant er hardere og derfor ikke ledende', isCorrect: false },
          { id: 'd', text: 'Grafén inneholder metalliske urenheter som gir ledningsevne', isCorrect: false },
        ],
        solution: 'Riktig svar er B. I grafén er karbonatomene $sp^2$-hybridisert, noe som betyr at tre valenselektroner danner σ-bindinger, mens det fjerde elektrones p-orbital danner et delokalisert π-system over hele arket. Disse π-elektronene kan bevege seg fritt og fungerer som ladningsbærere. I diamant er alle fire valenselektroner bundet i lokaliserte σ-bindinger ($sp^3$), og det finnes ingen frie elektroner.',
      },
    },

    // --- BLOKK 2: Grafénets egenskaper ---
    {
      id: 'tof2-3-3-text-2',
      type: 'text',
      title: 'Grafénets ekstraordinære egenskaper',
      content: `### Grafénets ekstraordinære egenskaper

Grafén holder en rekke rekorder blant kjente materialer:

**Elektriske egenskaper:**
Elektronmobiliteten i grafén er opptil $200\\,000\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ ved romtemperatur, over 100 ganger høyere enn i silisium. Elektronene i grafén oppfører seg som **masseløse Dirac-fermioner** — de beveger seg med en effektiv «lyshastighet» på ca. $10^6$ m/s (300 ganger langsommere enn lys i vakuum, men ekstremt raskt for elektroner i et fast stoff).

**Mekaniske egenskaper:**
Grafén er det sterkeste materialet noensinne målt. Strekkfastheten er ca. 130 GPa, og Youngs modul (elastisitetsmodulen) er ca. 1 TPa. Et grafénark på 1 m² veier bare 0,77 mg, men kan bære en vekt på ca. 4 kg før det ryker — dette beskrives populært som at en «hengekøye av grafén kan bære en katt».

**Termiske egenskaper:**
Termisk ledningsevne opptil 5000 W/(m·K), høyere enn diamant og kobber.

**Optiske egenskaper:**
Et enkelt lag grafén absorberer nøyaktig $\\pi\\alpha \\approx 2{,}3\\,\\%$ av gjennomgående hvitt lys, der $\\alpha \\approx 1/137$ er finstrukturkonstanten. Dette er en bemerkelsesverdig sammenheng mellom et rent kvantemekanisk fenomen og en makroskopisk optisk egenskap.

**Overflate:**
Grafén har den høyeste mulige overflate-til-masse-forholdet av alle materialer — hele $2630\\text{ m}^2/\\text{g}$ — fordi hvert atom er et overflateatom.`,
    },
    {
      id: 'tof2-3-3-def-2',
      type: 'definition',
      title: 'Grafén',
      content: `**Grafén** er et todimensjonalt materiale bestående av ett enkelt lag karbonatomer arrangert i et heksagonalt (bikake-) mønster.

Nøkkelegenskaper:
- **Tykkelse:** 0,34 nm — det tynneste mulige materialet (ett atom tykt)
- **Strekkfasthet:** ca. 130 GPa — det sterkeste kjente materialet
- **Elektronmobilitet:** opptil $200\\,000\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$
- **Termisk ledningsevne:** opptil 5000 W/(m·K)
- **Optisk absorpsjon:** 2,3 % per lag
- **Spesifikt overflateareal:** $2630\\text{ m}^2/\\text{g}$

Grafén er et **nullgap-halvleder** (eller halvmetall) — det har ikke et energigap mellom valensbåndet og ledningsbåndet. Disparisjonsrelasjonen er lineær nær Dirac-punktene, noe som gir elektronene sin uvanlige massløse oppførsel. Denne egenskapen er viktig for grunnleggende fysikk, men er en utfordring for transistoranvendelser der et båndgap trengs for å slå av strømmen.`,
    },
    {
      id: 'tof2-3-3-example-2',
      type: 'example',
      title: 'Eksempel: Lysabsorpsjon i grafén',
      problem: 'Beregn hvor mye lys som transmitteres gjennom et grafénark med 5 lag, gitt at hvert lag absorberer 2,3 % av innfallende lys.',
      solution: `Hvert lag transmitterer $100\\% - 2{,}3\\% = 97{,}7\\%$ av lyset som treffer det. Etter $n$ lag har vi:

$$T_n = (0{,}977)^n$$

For $n = 5$ lag:

$$T_5 = (0{,}977)^5 = 0{,}977^5$$

Vi regner stegvis:
- $0{,}977^2 = 0{,}9545$
- $0{,}977^4 = 0{,}9545^2 = 0{,}9111$
- $0{,}977^5 = 0{,}9111 \\times 0{,}977 = 0{,}890$

Altså transmitteres ca. **89,0 %** av lyset gjennom 5 lag grafén, og ca. 11 % absorberes. Selv med 5 lag er grafén altså svært gjennomsiktig — noe som gjør det attraktivt for transparente elektroder i berøringsskjermer og solceller.`,
    },
    {
      id: 'tof2-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-3-ex-2',
        number: '3.3.2',
        type: 'multiple-choice',
        task: 'Hvilken egenskap gjør grafén MINST egnet som materiale i en tradisjonell transistor uten modifisering?',
        options: [
          { id: 'a', text: 'Lav elektrisk ledningsevne', isCorrect: false },
          { id: 'b', text: 'Manglende båndgap — grafén er en nullgap-halvleder', isCorrect: true },
          { id: 'c', text: 'For høy mekanisk styrke', isCorrect: false },
          { id: 'd', text: 'For stor tykkelse', isCorrect: false },
        ],
        solution: 'Riktig svar er B. En transistor trenger et båndgap for å kunne slå strømmen av og på — det er slik binær logikk (0 og 1) implementeres. Grafén har nullt båndgap, noe som betyr at strømmen aldri kan slås helt av. Dette gir et dårlig av/på-forhold. Forskere arbeider med å åpne et båndgap i grafén gjennom nanobånd, kjemisk funksjonalisering eller bilag-grafén med elektrisk felt.',
      },
    },

    // --- BLOKK 3: Fullerener ---
    {
      id: 'tof2-3-3-text-3',
      type: 'text',
      title: 'Fullerener',
      content: `### Fullerener

**Fullerener** er lukkede, hule karbonmolekyler. Den mest kjente er **buckminsterfullerén** ($\\text{C}_{60}$), oppkalt etter arkitekten Buckminster Fuller som designet geodetiske kupler med lignende struktur. Molekylet kalles også «buckyball» eller «fotballmolekyl».

$\\text{C}_{60}$ ble oppdaget i 1985 av Harold Kroto, Robert Curl og Richard Smalley ved å fordampe grafitt med en kraftig laser. De tre fikk Nobelprisen i kjemi i 1996 for denne oppdagelsen.

**Struktur:**
$\\text{C}_{60}$ har 60 karbonatomer arrangert i 20 heksagoner og 12 pentagoner — nøyaktig som en fotball. Diameteren er ca. 0,71 nm. Hvert karbonatom er $sp^2$-hybridisert og bundet til tre naboer, men overflaten er buet (ikke flat som i grafén).

Eulers polyederformel forteller oss at en lukket polyeder med bare pentagoner og heksagoner alltid trenger **nøyaktig 12 pentagoner** (mens antall heksagoner kan variere). Det finnes derfor fullerener av mange størrelser: $\\text{C}_{70}$, $\\text{C}_{76}$, $\\text{C}_{84}$, osv.

**Egenskaper og anvendelser:**
- **Endohedralt fulleren:** Atomer eller små molekyler kan innkapsles inne i det hule $\\text{C}_{60}$-buret — notasjon: $\\text{X@C}_{60}$. Eksempler: $\\text{La@C}_{82}$ brukes i MR-kontrastmidler.
- **Organiske solceller:** $\\text{C}_{60}$ og derivater (spesielt PCBM) brukes som elektronakseptor i organiske solceller.
- **Smøremiddel:** Sfærisk form gjør fullerener til potensielle molekylære «kulelager».
- **Antioksidanter:** Fullerener kan nøytralisere frie radikaler ved å reagere med dem på overflaten.`,
    },
    {
      id: 'tof2-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-3-ex-3',
        number: '3.3.3',
        type: 'multiple-choice',
        task: 'Hvor mange pentagoner inneholder et $\\text{C}_{60}$-fulleren?',
        options: [
          { id: 'a', text: '10', isCorrect: false },
          { id: 'b', text: '12', isCorrect: true },
          { id: 'c', text: '20', isCorrect: false },
          { id: 'd', text: '30', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Ifølge Eulers polyederformel inneholder alle lukkede polyedere bygget av heksagoner og pentagoner nøyaktig 12 pentagoner. $\\text{C}_{60}$ har 12 pentagoner og 20 heksagoner. De 12 pentagonene er det som gjør det mulig å lukke den flate heksagonale strukturen til en kule — uten pentagoner ville arket forblitt flatt (som grafén).',
      },
    },

    // --- BLOKK 4: Karbonnanorør detaljert ---
    {
      id: 'tof2-3-3-text-4',
      type: 'text',
      title: 'Karbonnanorør og anvendelser',
      content: `### Karbonnanorør — syntese og anvendelser

Karbonnanorør ble første gang observert av Sumio Iijima i 1991 som fletveggende rør i sot fra bueladning. Siden da har det blitt et av de mest intensivt studerte nanomaterialene.

**Syntesemetoder:**
- **Bueladning (arc discharge):** Høy strøm mellom to grafittelektroder i inert atmosfære. Gir CNT av høy kvalitet, men blandet med andre karbonformer.
- **Laserablasjon:** En kraftig laser fordamper grafitt i en ovn. Gir hovedsakelig SWCNT.
- **Kjemisk dampavsetning (CVD):** En gass med karbon (f.eks. metan) strømmer over metallkatalysatorer (Fe, Co, Ni) ved 600–1200 °C. Den mest skalerbare metoden.

**Sentrale anvendelser:**

**1. Komposittmaterialer:** CNT tilsettes i polymerer, keramikk og metaller for å forbedre styrke, stivhet og elektrisk ledningsevne. Brukes i sportsutstyr (tennisracketer, sykkelrammer), romfartskomponenter og bilindustri.

**2. Elektronikk:** CNT-baserte transistorer kan potensielt erstatte silisium i fremtidige prosessorer. Et team ved MIT demonstrerte i 2019 en enkel 16-bits mikroprosessor basert utelukkende på karbonnanorørtransistorer.

**3. Energi:** CNT brukes som elektrodemateriale i superkondensatorer og litiumionbatterier for å øke overflatearealet og elektrisk ledningsevne. De forbedrer også ytelsen til brenselsceller.

**4. Filtre og membraner:** Vertikalt justerte CNT-membraner kan filtrere vann med ekstremt høy gjennomstrømming og lav energibruk, fordi vann beveger seg nesten friksjonsfritt gjennom de glatte, hydrofobe kanalene.

**5. Romheis-konseptet:** Karbonnanorørs høye strekkfasthet-til-vekt-forhold gjør dem til det eneste kjente materialet som teoretisk er sterkt nok til å bygge en romheis — et kabel fra jordoverflaten til geostasjonær bane. I praksis er defektfrie CNT-fibre av tilstrekkelig lengde foreløpig uoppnåelig.`,
    },
    {
      id: 'tof2-3-3-example-3',
      type: 'example',
      title: 'Eksempel: Styrke-til-vekt-forhold',
      problem: 'Sammenlign styrke-til-vekt-forholdet for stål og enkeltvegget karbonnanorør (SWCNT). Stål har strekkfasthet ca. 0,5 GPa og tetthet 7800 kg/m³. SWCNT har strekkfasthet ca. 50 GPa og tetthet 1300 kg/m³.',
      solution: `Styrke-til-vekt-forholdet (spesifikk styrke) beregnes som:

$$\\text{Spesifikk styrke} = \\frac{\\text{Strekkfasthet}}{\\text{Tetthet}}$$

**Stål:**
$$\\frac{0{,}5 \\times 10^9\\text{ Pa}}{7800\\text{ kg/m}^3} = 6{,}4 \\times 10^4\\text{ N·m/kg} = 64\\text{ kN·m/kg}$$

**SWCNT:**
$$\\frac{50 \\times 10^9\\text{ Pa}}{1300\\text{ kg/m}^3} = 3{,}85 \\times 10^7\\text{ N·m/kg} = 38\\,500\\text{ kN·m/kg}$$

**Forhold:**
$$\\frac{38\\,500}{64} \\approx 600$$

Karbonnanorør har altså et styrke-til-vekt-forhold som er ca. **600 ganger** bedre enn stål. Dette er grunnen til at CNT er det eneste kjente materialet som potensielt er sterkt nok til å bygge en romheis.`,
    },
    {
      id: 'tof2-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-3-ex-4',
        number: '3.3.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv de tre viktigste karbonnanostrukturene (fullerener, karbonnanorør og grafén) og forklar for hver av dem: (a) den geometriske strukturen, (b) minst én unik egenskap, og (c) en konkret anvendelse. Diskuter også hva alle tre har til felles på atomnivå.',
        hints: ['Alle tre er basert på sp²-hybridiserte karbonatomer i heksagonale nettverk. Forskjellen er geometrien: kule, rør eller flate.'],
        solution: '**Fullerener:** (a) Lukkede, sfæriske strukturer — C₆₀ har 60 atomer i 20 heksagoner og 12 pentagoner. (b) Hulrommet inni kan fange andre atomer eller molekyler (endohedralt fulleren). (c) PCBM (C₆₀-derivat) brukes som elektronakseptor i organiske solceller.\n\n**Karbonnanorør:** (a) Sylindrisk opprullet grafén. SWCNT har diameter 1–2 nm, MWCNT 2–100 nm. (b) Ekstraordinær strekkfasthet (ca. 50 GPa) kombinert med elektrisk ledningsevne som varierer med kiralitet. (c) Tilsettes i polymerkompositter for å lage lette, sterke materialer til romfart og sportsutstyr.\n\n**Grafén:** (a) Flatt, todimensjonalt ark av karbonatomer i heksagonalt bikakemønster. Tykkelse: 0,34 nm (ett atom). (b) Høyeste kjente elektronmobilitet (200 000 cm²/Vs) — elektronene oppfører seg som masseløse Dirac-fermioner. (c) Transparente, fleksible elektroder for berøringsskjermer.\n\n**Felles:** Alle tre er bygget av sp²-hybridiserte karbonatomer med tre σ-bindinger til naboer og et delokalisert π-system. Det er dette π-systemet som gir de gode elektriske egenskapene. Forskjellen er bare geometrien: nulldimensjonal (kule), éndimensjonal (rør) eller todimensjonal (flate).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof2-3-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Karbon** danner en rekke nanostrukturer basert på $sp^2$-hybridisering: fullerener (0D), karbonnanorør (1D) og grafén (2D).
- **Grafén** er det sterkeste (130 GPa), tynneste (0,34 nm) og mest ledende ($200\\,000\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$) materialet kjent. Det er en nullgap-halvleder, som er en utfordring for transistorbruk.
- **Fullerener** ($\\text{C}_{60}$) er sfæriske karbonmolekyler med 12 pentagoner og 20 heksagoner, nyttige i organiske solceller og som nanoskala beholdere.
- **Karbonnanorør** kombinerer ekstraordinær styrke (50 GPa), lav vekt ($1{,}3\\text{ g/cm}^3$) og variabel ledningsevne styrt av kiraliteten. Viktige i kompositter, elektronikk og energilagring.
- Alle tre deler det samme $sp^2$-karbonnettverket med delokalisert $\\pi$-system — geometrien bestemmer egenskapene.`,
    },

    // --- Samleoppgave ---
    {
      id: 'tof2-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Grafén har blitt kalt et «vidundermateriale» med potensiale til å revolusjonere elektronikk, energi og materialer. Drøft dette påstanden kritisk: (a) Beskriv minst tre konkrete egenskaper som gjør grafén ekstraordinært. (b) Diskuter minst to utfordringer som må løses før grafén kan brukes i stor skala. (c) Vurder om «vidundermateriale» er en berettiget betegnelse eller en overforenkling.',
        hints: ['Tenk på produksjonsutfordringer, båndgap-problemet og forskjellen mellom laboratorie-egenskaper og praktisk bruk.'],
        solution: '(a) Ekstraordinære egenskaper: (1) Mekanisk styrke — 130 GPa strekkfasthet, 200 ganger sterkere enn stål, men ett atom tykt. (2) Elektrisk ledningsevne — elektronmobilitet opptil 200 000 cm²/Vs, over 100x bedre enn silisium. (3) Termisk ledningsevne — opptil 5000 W/(m·K), bedre enn alle andre kjente materialer. (4) Optisk transparens — absorberer bare 2,3 % lys per lag.\n\n(b) Utfordringer: (1) Produksjon — mekanisk eksfoliering gir perfekt grafén, men bare i mikrometer-flak. CVD-metoder gir store flater, men med defekter, korngrenser og vanskeligheter med overføring til substrater. Masseproduksjon av defektfritt grafén er foreløpig uløst. (2) Manglende båndgap — grafén er en nullgap-halvleder, noe som gjør det uegnet for logiske transistorer uten modifisering. Å åpne et båndgap (f.eks. gjennom nanobånd) reduserer ofte mobiliteten betydelig.\n\n(c) Betegnelsen «vidundermateriale» er delvis berettiget: grafén har faktisk rekordegenskaper i mange kategorier. Men den er også en overforenkling fordi laboratorie-egenskapene (målt på perfekte, små flak) sjelden oppnås i stor skala. Reelle grafén-produkter har defekter, korngrenser og kontaktproblemer som reduserer ytelsen dramatisk. Det er mer presist å si at grafén har vidunderlige egenskaper i prinsippet, men at praktisk utnyttelse krever løsning av betydelige teknologiske utfordringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.4: Produksjon av nanomaterialer
// ============================================================================

export const CHAPTER_TOF_2_3_4: TextbookChapter = {
  id: 'tof-2-3-4',
  courseId: 'tof-2',
  chapterNumber: '3.4',
  title: 'Produksjon av nanomaterialer',
  description: 'Top-down og bottom-up metoder, selvorganisering.',
  estimatedMinutes: 25,
  competenceGoals: [
    'beskrive produksjonsmetoder',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-3-4-intro',
      type: 'text',
      content: `## Produksjon av nanomaterialer

De foregående kapitlene har vist oss at nanomaterialer har ekstraordinære egenskaper — men hvordan lager vi dem? Produksjon av nanomaterialer med kontrollert størrelse, form og sammensetning er en av de store utfordringene i nanoteknologien.

Produksjonsmetodene deles i to fundamentalt forskjellige tilnærminger:

1. **Top-down** (ovenfra-og-ned): Vi starter med et større materiale og «skjærer» eller «sliper» det ned til nanostørrelse.
2. **Bottom-up** (nedenfra-og-opp): Vi starter med individuelle atomer eller molekyler og bygger opp nanostrukturer fra grunnen av.

Begge tilnærmingene har sine styrker og begrensninger, og valget avhenger av hvilket materiale man ønsker, hvilken størrelse og form som trengs, og hvor store mengder som skal produseres.`,
    },

    // --- BLOKK 1: Top-down metoder ---
    {
      id: 'tof2-3-4-def-1',
      type: 'definition',
      title: 'Top-down-tilnærming',
      content: `**Top-down** (ovenfra-og-ned) er en produksjonstilnærming der man starter med et bulk-materiale og reduserer det til nanostrukturerte former gjennom fysiske eller kjemiske prosesser.

Fordeler:
- Godt utviklet teknologi basert på eksisterende industrielle prosesser
- Kan produsere relativt store mengder
- Kompatibelt med halvlederindustriens infrastruktur

Ulemper:
- Begrenset oppløsning — vanskelig å nå de minste nanoskalaene (<10 nm)
- Kan introdusere defekter og forurensninger
- Mye materialsvinn (det som fjernes kastes)
- Høyt energiforbruk per enhet produsert materiale`,
    },
    {
      id: 'tof2-3-4-text-1',
      type: 'text',
      content: `### Viktige top-down-metoder

**1. Litografi**
Litografi er den viktigste top-down-metoden i halvlederindustrien og brukes til å lage de integrerte kretsene i alle moderne mikroprosessorer.

Grunnprinsippet er at et mønster overføres til et materiale gjennom en maske og en eksponeringsprosess:

- **Fotolitografi:** Lys (typisk UV, 193 nm) skinner gjennom en maske med mønsteret og eksponerer et lysfølsomt lag (fotoresist) på en silisiumwafer. De eksponerte områdene kan deretter fjernes kjemisk (eller de ueksponerte, avhengig av type resist). Oppløsning begrenset av lysets bølgelengde.
- **EUV-litografi (Extreme Ultraviolet):** Bruker lys med bølgelengde 13,5 nm for å oppnå strukturer ned mot 5 nm. ASML i Nederland er den eneste produsenten av EUV-litografimaskiner, som koster over 2 milliarder kroner per stk.
- **Elektronstrålelitografi (e-beam):** Bruker en fokusert elektronstråle til å «tegne» mønsteret direkte, atom for atom. Svært høy oppløsning (<5 nm), men ekstremt langsom og kun egnet for forskning og maskelaging.

**2. Mekanisk maling (ball milling)**
Materialet knuses til nanopartikler i en kule- eller planeteriekvern. Karbidkuler roterer med høy hastighet og knuser materialet. Enkelt og skalerbart, men gir bred størrelsesfordeling og ofte forurensninger fra malelegemene.

**3. Etsing**
Kjemisk eller plasma-basert fjerning av materiale gjennom masker. Brukes i kombinasjon med litografi for å lage 3D-nanostrukturer.`,
    },
    {
      id: 'tof2-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Oppløsningsgrensen i litografi',
      problem: 'Oppløsningen i fotolitografi begrenses av Rayleighs kriterium: $R = k_1 \\cdot \\lambda / \\text{NA}$, der $\\lambda$ er bølgelengden, NA er den numeriske aperturen til linsen, og $k_1$ er en prosesskonstant (typisk $k_1 \\approx 0{,}25$ for avansert litografi). Hva er den minste oppnåelige strukturstørrelsen med (a) standard UV-litografi ($\\lambda = 193$ nm, NA = 1,35) og (b) EUV-litografi ($\\lambda = 13{,}5$ nm, NA = 0,55)?',
      solution: `**(a) Standard UV-litografi:**

$$R = \\frac{k_1 \\cdot \\lambda}{\\text{NA}} = \\frac{0{,}25 \\times 193\\text{ nm}}{1{,}35} = \\frac{48{,}25}{1{,}35} \\approx 36\\text{ nm}$$

**Med multipatterning** (dobbelt eller firedobbelt eksponering) kan dette halveres til ca. 18 nm eller 9 nm, noe som brukes i moderne prosessorer (7 nm og 5 nm noder).

**(b) EUV-litografi:**

$$R = \\frac{0{,}25 \\times 13{,}5\\text{ nm}}{0{,}55} = \\frac{3{,}375}{0{,}55} \\approx 6{,}1\\text{ nm}$$

EUV oppnår altså direkte en oppløsning på ca. 6 nm — tilstrekkelig for 3 nm og fremtidige prosessornoder. Med High-NA EUV (NA = 0,55 → 0,75) kan man potensielt nå under 3 nm.

Denne beregningen viser hvorfor EUV-litografi var et gjennombrudd for halvlederindustrien — det muliggjør strukturer som er fysisk umulige med standard UV-lys.`,
    },
    {
      id: 'tof2-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-4-ex-1',
        number: '3.4.1',
        type: 'multiple-choice',
        task: 'Hva er en viktig begrensning ved top-down-metoder for nanoproduksjon?',
        options: [
          { id: 'a', text: 'De kan bare brukes på metalliske materialer', isCorrect: false },
          { id: 'b', text: 'Oppløsningen er begrenset — det er vanskelig å nå de minste nanoskalaene uten avansert utstyr', isCorrect: true },
          { id: 'c', text: 'De krever romtemperatur og kan ikke bruke varme', isCorrect: false },
          { id: 'd', text: 'De kan bare produsere sfæriske nanopartikler', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Top-down-metoder har en grunnleggende oppløsningsbegrensning fordi det blir stadig vanskeligere (og dyrere) å fjerne materiale med nanometerpresisjon. I litografi er oppløsningen begrenset av lysets bølgelengde, i mekanisk maling av energien som trengs for å knuse små partikler ytterligere. A er feil (litografi brukes på halvledere), C er feil (mange prosesser bruker høy temperatur), og D er feil (litografi lager vilkårlige former).',
      },
    },

    // --- BLOKK 2: Bottom-up metoder ---
    {
      id: 'tof2-3-4-def-2',
      type: 'definition',
      title: 'Bottom-up-tilnærming',
      content: `**Bottom-up** (nedenfra-og-opp) er en produksjonstilnærming der nanostrukturer bygges opp atom for atom eller molekyl for molekyl fra grunnkomponentene.

Fordeler:
- Kan oppnå atomær presisjon og kontroll
- Mindre materialsvinn — man bygger opp i stedet for å rive ned
- Kan lage strukturer som er umulige med top-down
- Lavere energiforbruk per enhet for mange prosesser

Ulemper:
- Vanskelig å skalere opp til industrielle mengder
- Prosessene kan være langsomme
- Krever presis kontroll over reaksjonsforhold
- Utfordringer med defekter og reproduserbarhet`,
    },
    {
      id: 'tof2-3-4-text-2',
      type: 'text',
      content: `### Viktige bottom-up-metoder

**1. Kjemisk vapørdeponering (CVD — Chemical Vapor Deposition)**
Gasser med de ønskede atomene strømmer over et substrat ved høy temperatur. Atomene deponeres på overflaten og danner et tynt lag. CVD brukes til å lage grafén (fra metan på kobberkatalysator), karbonnanorør (fra etylen på jernkatalysator) og tynne halvlederfilmer.

**2. Sol-gel-prosessen**
En kjemisk metode der en «sol» (kolloidal løsning) omdannes til en «gel» (fastnet nettverk), som deretter tørkes og varmebehandles. Brukes til å lage metalloksid-nanopartikler (SiO₂, TiO₂) med kontrollert størrelse. Prosessen er relativt enkel og billig.

**3. Kolloidal syntese**
Nanopartikler dannes ved kontrollert kjemisk reaksjon i en løsning. Ved å justere temperatur, reaksjonstid og konsentrasjoner kan man styre størrelsen nøyaktig. Kvanteprikker (CdSe, InP) produseres typisk på denne måten.

**4. Molekylærstråleepitaksi (MBE — Molecular Beam Epitaxy)**
Atomer fordampes i ultravakuum og sendes som stråler mot et substrat der de danner krystallinske lag, atom for atom. Brukes til å lage halvlederkvantebrønner, supergittere og andre presisjonsstrukturer. Ekstremt langsom, men gir uovertruffen krystallkvalitet.

**5. Elektrokjemisk deponering**
Ioner i en løsning reduseres og avsettes på en elektrode. Ved å kontrollere spenning og strøm kan tykkelsen styres ned til atomlagsnivå. Brukes til nanoporøse filmer og nanotrådvekst i templater.`,
    },
    {
      id: 'tof2-3-4-example-2',
      type: 'example',
      title: 'Eksempel: CVD-syntese av grafén',
      problem: 'Beskriv trinn for trinn hvordan grafén kan produseres ved CVD-metoden, og forklar rollen til kobbersubstratet.',
      solution: `**CVD-syntese av grafén — trinnvis:**

**Trinn 1 — Forberedelse:** En kobberfolie (typisk 25 µm tykk) rengjøres og legges i en rørformet ovn. Systemet pumpes ned til lavt trykk eller fylles med inert gass.

**Trinn 2 — Oppvarming:** Ovnen varmes til 1000–1050 °C under strømming av hydrogen ($\\text{H}_2$), som reduserer kobberoksid og gir en ren overflate.

**Trinn 3 — Vekst:** Metan ($\\text{CH}_4$) tilsettes gassstrømmen. På den varme kobberoverflaten spaltes $\\text{CH}_4$ til karbon og hydrogen:

$$\\text{CH}_4 \\xrightarrow{\\text{Cu, 1000°C}} \\text{C}_{\\text{overflate}} + 2\\text{H}_2$$

Karbonatomene diffunderer over kobberoverflaten og organiserer seg i det heksagonale grafénmønsteret.

**Trinn 4 — Avkjøling:** Ovnen kjøles ned, og grafénet forblir på kobberoverflaten.

**Kobberets rolle:** Kobber er avgjørende fordi karbon har **svært lav løselighet** i kobber (i motsetning til f.eks. nikkel). Dette betyr at karbon ikke løser seg inn i metallet og felles ut ukontrollert ved avkjøling. I stedet skjer all vekst **på overflaten**, og prosessen er **selv-begrensende**: når kobberoverflaten er dekket av ett lag grafén, stopper den katalytiske spaltingen av metan. Resultatet er et uniformt enkeltlag grafén.`,
    },
    {
      id: 'tof2-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-4-ex-2',
        number: '3.4.2',
        type: 'multiple-choice',
        task: 'Hvilken metode er best egnet for å produsere kvanteprikker med presis størrelses­kontroll?',
        options: [
          { id: 'a', text: 'Mekanisk maling (ball milling)', isCorrect: false },
          { id: 'b', text: 'Fotolitografi', isCorrect: false },
          { id: 'c', text: 'Kolloidal syntese i løsning', isCorrect: true },
          { id: 'd', text: 'Mekanisk eksfoliering med tape', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Kolloidal syntese gir presis kontroll over størrelsen til kvanteprikker ved å justere temperatur, reaksjonstid og forholdet mellom forløperstoffer og stabilisatorer. Mekanisk maling (A) gir bred størrelses­fordeling. Fotolitografi (B) er en top-down-metode som er bedre egnet for planare strukturer. Mekanisk eksfoliering (D) brukes for grafén, ikke kvanteprikker.',
      },
    },

    // --- BLOKK 3: Selvorganisering ---
    {
      id: 'tof2-3-4-text-3',
      type: 'text',
      title: 'Selvorganisering',
      content: `### Selvorganisering (Self-Assembly)

**Selvorganisering** er en prosess der molekyler eller nanopartikler spontant ordner seg i organiserte strukturer uten ytre styring. Det er en bottom-up-tilnærming som er inspirert av naturen — biologiske systemer bruker selvorganisering overalt, fra DNA-dobbeltheliks til cellemembraner og viruskapsider.

**Drivkrefter for selvorganisering:**
- **Van der Waals-krefter:** Svake, kortrekkende tiltrekningskrefter mellom alle molekyler
- **Hydrofob effekt:** Vannuløselige (hydrofobe) grupper samler seg for å minimere kontakt med vann
- **Hydrogenbindinger:** Sterke, retningsavhengige bindinger mellom elektronegative atomer og hydrogen
- **Elektrostatisk vekselvirkning:** Tiltrekning mellom motsatt ladede grupper
- **π-π-stacking:** Tiltrekning mellom aromatiske ringer

Systemet beveger seg spontant mot en tilstand med **lavest fri energi** — det er termodynamikken som driver prosessen. Strukturene som dannes er ofte høyt ordnede fordi det er den mest energigunstige konfigurasjonen.

**Eksempler på selvorganisering:**
- **Selvorganiserte monolag (SAMs):** Tiol-molekyler ($\\text{R-SH}$) binder seg spontant til gulloverflater og danner et ordnet, tett pakket enkeltlag. Brukes til å modifisere overflateegenskaper (gjøre hydrofobe overflater hydrofile eller omvendt).
- **Blokksampolymerer:** Polymerer med to eller flere ulike blokker organiserer seg i regulære nanostrukturer (sfærer, sylindre, lameller) fordi de ulike blokkene «frastøter» hverandre.
- **DNA-origami:** Syntetiske DNA-tråder designes til å brette seg til komplekse 2D- og 3D-nanostrukturer med nanometer-presisjon.`,
    },
    {
      id: 'tof2-3-4-def-3',
      type: 'definition',
      title: 'Selvorganisering',
      content: `**Selvorganisering** (self-assembly) er den spontane organiseringen av komponenter til ordnede strukturer gjennom lokale vekselvirkninger, uten ekstern styring.

Kjennetegn:
- **Spontan:** Skjer uten ytre inngrep når betingelsene er riktige
- **Reversibel:** Komponentene er typisk holdt sammen av svake bindinger, slik at strukturen kan dannes og oppløses gjentatte ganger
- **Termodynamisk drevet:** Systemet minimerer fri energi
- **Hierarkisk:** Enkle komponenter kan bygge opp stadig mer komplekse strukturer i flere trinn

Selvorganisering er fundamentalt forskjellig fra vanlig kjemisk syntese: i stedet for å styre hver enkelt reaksjon, «programmer» man komponentene til å organisere seg selv.`,
    },
    {
      id: 'tof2-3-4-example-3',
      type: 'example',
      title: 'Eksempel: DNA-origami',
      problem: 'Forklar prinsippet bak DNA-origami og hvordan det kan brukes til å lage nanostrukturer med presis form.',
      solution: `**DNA-origami** er en teknikk utviklet av Paul Rothemund i 2006 som utnytter DNAs selvorganiserende egenskaper til å lage vilkårlige 2D- og 3D-nanostrukturer.

**Prinsipp:**
1. En lang «stillaskjede» av enkel-trådet DNA (typisk fra bakteriofagen M13, ca. 7000 baser) fungerer som byggemateriale.
2. Hundrevis av korte, syntetiske «stifttråder» (20–40 baser) er designet til å binde seg til spesifikke steder på stillaskjeden gjennom Watson-Crick-basepar (A-T og G-C).
3. Når alle komponentene blandes i en løsning med salt og oppvarmes til 90 °C og deretter sakte avkjøles, bretter stifttådene stillaskjeden til den ønskede strukturen.

**Programmering av form:**
Fordi DNA-sekvensen bestemmer nøyaktig hvilke stifttråder som binder til hvilke deler av stillaset, kan man beregne sekvensene som trengs for å lage en ønsket form. Dataprogrammer som caDNAno gjør dette automatisk.

**Presis kontroll:** Oppløsningen er ca. 6 nm (omtrent to DNA-heliks-bredder), og strukturene kan lages med svært lav feilrate. Anvendelser inkluderer nanoroboter for legemiddellevering, maler for nanoelektronikk og plattformer for enkeltmolekylstudier.`,
    },
    {
      id: 'tof2-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-4-ex-3',
        number: '3.4.3',
        type: 'multiple-choice',
        task: 'Hva er hovedforskjellen mellom top-down og bottom-up nanoproduksjon?',
        options: [
          { id: 'a', text: 'Top-down bygger opp fra atomer, bottom-up bryter ned fra bulk', isCorrect: false },
          { id: 'b', text: 'Top-down starter med bulk-materiale og bryter det ned, bottom-up bygger opp fra atomer/molekyler', isCorrect: true },
          { id: 'c', text: 'Top-down bruker bare kjemiske metoder, bottom-up bruker bare fysiske metoder', isCorrect: false },
          { id: 'd', text: 'Top-down gir alltid bedre resultat enn bottom-up', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Top-down starter med et stort materiale og reduserer det til nanostørrelse (f.eks. litografi, mekanisk maling). Bottom-up bygger nanostrukturer opp fra individuelle atomer eller molekyler (f.eks. CVD, kolloidal syntese, selvorganisering). A er omvendt. C er feil fordi begge tilnærmingene kan bruke både kjemiske og fysiske metoder. D er feil fordi ingen tilnærming er universelt bedre — valget avhenger av materialet og anvendelsen.',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof2-3-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Nanomaterialer produseres enten ved **top-down** (bryte ned fra bulk) eller **bottom-up** (bygge opp fra atomer/molekyler).
- **Top-down-metoder** inkluderer litografi (foto, EUV, e-beam), mekanisk maling og etsing. De er godt utviklet, men har oppløsningsbegrensninger og materialsvinn.
- **Bottom-up-metoder** inkluderer CVD, sol-gel, kolloidal syntese og MBE. De gir atomær presisjon, men er vanskeligere å skalere opp.
- **Litografi** er nøkkelteknologien i halvlederindustrien. Oppløsningen $R = k_1 \\cdot \\lambda / \\text{NA}$ begrenses av bølgelengden — EUV ($\\lambda = 13{,}5$ nm) muliggjør strukturer under 10 nm.
- **Selvorganisering** er en bottom-up-strategi der komponenter spontant danner ordnede strukturer drevet av termodynamikk. Eksempler inkluderer SAMs, blokksampolymerer og DNA-origami.
- I praksis kombineres ofte top-down og bottom-up i **hybride tilnærminger** — f.eks. litografi for å lage maler der nanopartikler kan selvorganiseres.`,
    },

    // --- Samleoppgave ---
    {
      id: 'tof2-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du skal planlegge produksjon av tre ulike nanomaterialer: (1) grafén til fleksible elektroder, (2) gullnanopartikler til diagnostiske tester, og (3) nanostrukturerte mønstre på en silisiumchip. For hvert materiale: velg den mest egnede produksjonsmetoden (top-down eller bottom-up), beskriv metoden trinn for trinn, og begrunn hvorfor denne metoden er best egnet.',
        hints: ['Tenk på hva slags materiale det er, hvilken form som trengs, og om det er overflatestruktur eller frittstående partikler.'],
        solution: '1. **Grafén til fleksible elektroder — CVD (bottom-up):** (a) Kobberfolie renses og legges i en rørformet ovn. (b) Oppvarming til 1000 °C under H₂-strøm. (c) Tilsetting av CH₄ — karbon deponeres på kobberoverflaten og danner grafén. (d) Avkjøling. (e) Overføring til fleksibelt substrat ved å etse bort kobberet. Begrunnelse: CVD gir store, sammenhengende grafénflater av god kvalitet. Top-down (eksfoliering) gir bare mikrometer-flak, utilstrekkelig for elektroder.\n\n2. **Gullnanopartikler — Kolloidal syntese (bottom-up):** (a) Gullklorid (HAuCl₄) oppløses i vann. (b) Et reduksjonsmiddel (f.eks. natriumsitrat) tilsettes. (c) Au³⁺-ioner reduseres til Au⁰ som nukleerer og vokser til nanopartikler. (d) Størrelsen kontrolleres via reaksjonstemperatur, konsentrasjon og stabilisator. Begrunnelse: Kolloidal syntese gir uniform størrelse, kontrollert overflatemodifisering og kan skaleres. Mekanisk maling ville gitt bred størrelsesfordeling.\n\n3. **Nanostrukturerte mønstre — EUV-litografi (top-down):** (a) Silisiumwafer dekkes med fotoresist. (b) EUV-lys (13,5 nm) eksponerer gjennom en maske med mønsteret. (c) Utvikling — eksponert resist fjernes. (d) Etsing — mønsteret overføres til silisium. (e) Resistfjerning. Begrunnelse: Litografi er den eneste metoden som kan lage vilkårlige, presise mønstre over store wafere med nanometer-oppløsning. Bottom-up-metoder kan ikke gi den nødvendige mønster-kontrollen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.5: Nanoteknologi i medisin
// ============================================================================

export const CHAPTER_TOF_2_3_5: TextbookChapter = {
  id: 'tof-2-3-5',
  courseId: 'tof-2',
  chapterNumber: '3.5',
  title: 'Nanoteknologi i medisin',
  description: 'Nanomedisin, målrettet legemiddellevering og diagnostikk.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forklare nanomedisin',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-3-5-intro',
      type: 'text',
      content: `## Nanoteknologi i medisin

Medisin er et av de områdene der nanoteknologi har størst potensial til å revolusjonere eksisterende praksis. **Nanomedisin** — anvendelsen av nanoteknologi innen medisinsk diagnostikk, behandling og forebygging — er allerede i ferd med å endre hvordan vi oppdager og bekjemper sykdommer.

Tradisjonelle legemidler har en grunnleggende begrensning: de distribueres i hele kroppen via blodbanen, uavhengig av hvor sykdommen befinner seg. Resultatet er at bare en liten brøkdel av dosen når det syke vevet, mens resten kan forårsake bivirkninger i friske organer. Nanoteknologien tilbyr en løsning — legemidler kan innkapsles i nanopartikler som er designet for å finne og levere medisinen direkte til de syke cellene.

I dette kapittelet skal vi utforske tre hovedområder: nanobærere for målrettet legemiddellevering, nanopartikler i diagnostikk og avbildning, og kombinasjonen av disse i såkalte **teranostiske** systemer som kan diagnostisere og behandle samtidig.`,
    },

    // --- BLOKK 1: Nanomedisin – grunnleggende prinsipper ---
    {
      id: 'tof2-3-5-text-1',
      type: 'text',
      title: 'Hva er nanomedisin?',
      content: `### Hva er nanomedisin?

Nanomedisin omfatter all bruk av nanomaterialer og nanoteknologi i medisinsk sammenheng. De viktigste anvendelsesområdene er:

1. **Målrettet legemiddellevering** (drug delivery) — transport av legemidler direkte til sykt vev
2. **Diagnostikk og avbildning** — forbedrede metoder for å oppdage sykdom tidlig
3. **Regenerativ medisin** — nanomaterialer som støtter vevsvekst og reparasjon
4. **Teranostikk** — kombinasjon av terapi og diagnostikk i ett og samme nanosystem

Nøkkelen til nanomedisinen er at nanopartikler i størrelsen 10–200 nm har egenskaper som er ideelle for medisinsk bruk. De er store nok til å bære en betydelig last av legemiddelmolekyler, men små nok til å sirkulere i blodbanen, passere gjennom kapillærer og trenge inn i vev. I tillegg kan overflaten deres modifiseres kjemisk for å styre hvor de havner i kroppen.`,
    },
    {
      id: 'tof2-3-5-def-1',
      type: 'definition',
      title: 'Nanomedisin',
      content: `**Nanomedisin** er anvendelsen av nanoteknologi for medisinsk diagnostikk, behandling og forebygging. Feltet utnytter nanomaterialer i størrelsen 1–1000 nm (typisk 10–200 nm for legemiddellevering) for å:

- Levere legemidler mer presist til sykt vev
- Forbedre avbildning og tidlig diagnostikk
- Utvikle nye terapeutiske strategier

Nanomedisin er et tverrfaglig felt som kombinerer kunnskap fra nanoteknologi, medisin, biologi, kjemi og materialvitenskap.`,
    },
    {
      id: 'tof2-3-5-example-1',
      type: 'example',
      title: 'Eksempel: Nanopartikkel vs. tradisjonelt legemiddel',
      problem: 'Et konvensjonelt cellegiftmiddel har en biotilgjengelighet på 0,5 % i svulstvevet (det vil si at bare 0,5 % av den administrerte dosen når tumoren). En nanopartikkelformulering av det samme legemiddelet utnytter EPR-effekten og øker biotilgjengeligheten til 5 %. Hvis den terapeutiske dosen som trengs i svulsten er 10 mg, hvor mye legemiddel må administreres i hvert tilfelle?',
      solution: `**Konvensjonell administrering:**

$$\\text{Dose} = \\frac{10\\text{ mg}}{0{,}005} = 2\\,000\\text{ mg} = 2\\text{ g}$$

**Nanopartikkelformulering:**

$$\\text{Dose} = \\frac{10\\text{ mg}}{0{,}05} = 200\\text{ mg} = 0{,}2\\text{ g}$$

Nanopartikkelformuleringen reduserer altså den nødvendige totaldosen med en **faktor 10**. Siden bivirkningene av cellegift i stor grad skyldes eksponering av friskt vev, betyr dette potensielt **dramatisk reduserte bivirkninger** for pasienten — mindre kvalme, mindre hårtap, mindre immunsuppresjon — samtidig som den terapeutiske effekten opprettholdes.`,
    },
    {
      id: 'tof2-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-5-ex-1',
        number: '3.5.1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste fordelen med nanopartikkelbasert legemiddellevering sammenlignet med konvensjonelle legemidler?',
        options: [
          { id: 'a', text: 'Nanopartikler er billigere å produsere', isCorrect: false },
          { id: 'b', text: 'Nanopartikler kan levere legemidler mer målrettet til sykt vev og redusere bivirkninger', isCorrect: true },
          { id: 'c', text: 'Nanopartikler virker raskere enn vanlige tabletter', isCorrect: false },
          { id: 'd', text: 'Nanopartikler eliminerer behovet for kliniske studier', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Hovedfordelen med nanopartikkelbasert legemiddellevering er evnen til å transportere legemidler mer presist til sykt vev. Dette øker den lokale konsentrasjonen av legemiddelet der det trengs, samtidig som eksponeringen av friskt vev reduseres. Resultatet er bedre terapeutisk effekt og færre bivirkninger. A er feil — nanoformuleringer er ofte dyrere. C er en overforenkling. D er feil — alle legemidler krever klinisk testing uansett formulering.',
      },
    },

    // --- BLOKK 2: Målrettet legemiddellevering ---
    {
      id: 'tof2-3-5-text-2',
      type: 'text',
      title: 'Målrettet legemiddellevering',
      content: `### Målrettet legemiddellevering

Målrettet legemiddellevering (targeted drug delivery) er nanomedisins kanskje mest studerte anvendelse. Prinsippet er å innkapsle legemidler i nanopartikler som selektivt akkumuleres i sykt vev — spesielt kreftsvulster.

**Passiv målretting — EPR-effekten**

De fleste solide svulster har en unormal blodkarstruktur: blodkarene vokser raskt og uorganisert, noe som gir dem store porer (100–800 nm) i karveggen. Samtidig mangler svulster et fungerende lymfatisk system som normalt fjerner overskuddsvæske. Denne kombinasjonen — lekke blodkar og dårlig drenering — kalles **EPR-effekten** (Enhanced Permeability and Retention).

Nanopartikler i størrelsen 10–200 nm kan passere gjennom de store porene i svulstens blodkar, men er for store til å passere gjennom normale, tette blodkar. Når de først er inne i svulsten, blir de der fordi lymfesystemet ikke drenerer dem ut. Resultatet er en selektiv opphopning av nanopartikler — og dermed legemiddel — i svulsten.

**Aktiv målretting — liganddekorering**

For enda høyere presisjon kan nanopartiklenes overflate dekoreres med **målrettende ligander** — molekyler som gjenkjenner og binder seg til spesifikke reseptorer på kreftcellenes overflate. Vanlige ligander inkluderer:

- **Antistoffer** eller antistoff-fragmenter som binder til tumorspesifikke antigener
- **Folsyre** — mange kreftceller overuttrykker folatreseptoren
- **Transferrin** — transferrinreseptoren er oppregulert i raskt delende celler
- **Peptider** som RGD-sekvensen, som binder til integriner på tumorendotel

Aktiv målretting forbedrer ikke nødvendigvis opphopningen i svulsten vesentlig (det styres primært av EPR), men den øker **opptaket i de individuelle kreftcellene** ved å trigge reseptormediert endocytose.`,
    },
    {
      id: 'tof2-3-5-def-2',
      type: 'definition',
      title: 'EPR-effekten',
      content: `**EPR-effekten** (Enhanced Permeability and Retention) beskriver fenomenet der nanopartikler selektivt akkumuleres i svulstvev på grunn av:

1. **Enhanced Permeability** — svulstens blodkar har store porer (100–800 nm) som lar nanopartikler passere, mens normale blodkar er tettere.
2. **Retention** — svulsten mangler et effektivt lymfatisk dreneringssystem, så nanopartiklene forblir i vevet.

EPR-effekten er grunnlaget for **passiv målretting** i nanomedisinen. For optimal utnyttelse bør nanopartiklene ha en størrelse på ca. 10–200 nm og lang sirkulasjonstid i blodet (oppnås gjerne ved PEG-ylering av overflaten).`,
    },
    {
      id: 'tof2-3-5-example-2',
      type: 'example',
      title: 'Eksempel: Liposomalt doksorubicin (Doxil)',
      problem: 'Liposomalt doksorubicin (handelsnavnet Doxil/Caelyx) var det første FDA-godkjente nanomedisinproduktet (1995). Beskriv hvordan dette produktet utnytter nanoteknologiske prinsipper for å forbedre kreftbehandling.',
      solution: `**Doxil** er et eksempel på nanomedisin i klinisk praksis:

1. **Nanostruktur:** Doksorubicin (en cellegift) innkapsles i **liposomer** — kulerunde lipidvesikler med diameter ca. 85 nm. Liposomene har en lipid-dobbeltmembran som ligner cellemembranen.

2. **PEG-ylering:** Liposomenes overflate er dekket med polyetylenglykol (PEG)-kjeder. Dette skaper et «stealth»-lag som hindrer immunsystemets makrofager i å gjenkjenne og fjerne partiklene. Resultatet er en **sirkulasjonshalveringstid på ca. 55 timer**, mot bare 5 minutter for fritt doksorubicin.

3. **EPR-effekt:** Den lange sirkulasjonstiden gir liposomene tid til å akkumuleres i svulstvevet via EPR-effekten. Studier viser 5–11 ganger høyere konsentrasjon i svulsten sammenlignet med fritt doksorubicin.

4. **Klinisk fordel:** Innkapslingen reduserer den kardiotoksiske bivirkningen av doksorubicin dramatisk (hjerteskade er den dosebegrensende bivirkningen for fritt doksorubicin). Pasienter kan dermed behandles over lengre tid.

Doxil demonstrerer kjerneprinsippet i nanomedisin: **same legemiddel, smartere levering, bedre resultat**.`,
    },
    {
      id: 'tof2-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-5-ex-2',
        number: '3.5.2',
        type: 'multiple-choice',
        task: 'Hva er EPR-effekten, og hvorfor er den viktig for nanopartikkelbasert kreftbehandling?',
        options: [
          { id: 'a', text: 'EPR gjør at nanopartikler ødelegger kreftceller direkte ved kontakt', isCorrect: false },
          { id: 'b', text: 'EPR beskriver at nanopartikler akkumuleres i svulster fordi svulstens blodkar er lekke og mangler effektiv lymfedrenering', isCorrect: true },
          { id: 'c', text: 'EPR er en metode for å produsere nanopartikler i laboratoriet', isCorrect: false },
          { id: 'd', text: 'EPR betyr at nanopartikler kan passere blod-hjerne-barrieren uten modifikasjon', isCorrect: false },
        ],
        solution: 'Riktig svar er B. EPR-effekten (Enhanced Permeability and Retention) beskriver at nanopartikler i størrelsen 10–200 nm selektivt lekker inn i svulstvev gjennom de unormalt store porene i svulstens blodkar (enhanced permeability) og forblir der fordi svulsten mangler effektiv lymfedrenering (retention). Dette gir passiv målretting av legemidler til tumoren. A er feil — nanopartiklene bærer legemidler men ødelegger ikke celler direkte. C er feil — EPR er et biologisk fenomen, ikke en produksjonsmetode. D er feil — blod-hjerne-barrieren krever spesiell modifikasjon.',
      },
    },

    // --- BLOKK 3: Nanopartikler i diagnostikk ---
    {
      id: 'tof2-3-5-text-3',
      type: 'text',
      title: 'Nanopartikler i diagnostikk og avbildning',
      content: `### Nanopartikler i diagnostikk og avbildning

Nanoteknologi revolusjonerer også medisinsk diagnostikk — evnen til å oppdage sykdom tidlig og presist. Nanopartikler har unike optiske, magnetiske og elektriske egenskaper som gjør dem til utmerkede kontrastmidler og sensorelementer.

**Kvanteprikkbasert avbildning**

Kvanteprikker (quantum dots) er halvleder-nanopartikler (typisk 2–10 nm) som fluorescerer med en skarp, størrelsesavhengig farge. De har flere fordeler over tradisjonelle organiske fargestoffer:

- **Smalere emisjonsspekter** — gir klarere signaler med mindre bakgrunnsstøy
- **Bredere eksitasjonsspekter** — flere farger kan eksiteres med én lyskilde
- **Mye høyere fotostabilitet** — tåler lengre eksponering uten bleking
- **Størrelsesjusterbar farge** — ulike størrelser gir ulike farger, ideelt for multiplekset avbildning

Ved å koble kvanteprikker til antistoffer kan man merke ulike celletyper eller biomarkører med distinkte farger og avbilde flere mål samtidig.

**Magnetiske nanopartikler i MR-avbildning**

Superparamagnetiske jernoksidnanopartikler (SPIONs, typisk 5–20 nm) forsterker kontrasten i MR-bilder (Magnetic Resonance Imaging). SPIONs forstyrrer det lokale magnetfeltet rundt seg, noe som påvirker relaksasjonstiden til omkringliggende vannprotoner og dermed endrer signalintensiteten i MR-bildet.

SPIONs kan funksjonaliseres med målrettende ligander og brukes til å:
- Visualisere svulster med forbedret kontrast
- Avbilde inflammasjon (makrofager tar opp udekorerte SPIONs)
- Spore stamceller eller immunceller injisert i kroppen

**Gullnanopartikler i hurtigtester**

Gullnanopartikler (AuNPs) er allerede i daglig bruk i milliarder av hurtigtester — inkludert laterale strømningstester (lateral flow assays) som graviditetstester og hurtige antigentester for COVID-19. Den røde fargen til linja som viser positivt resultat skyldes gullnanopartikler (ca. 40 nm) konjugert med antistoffer.`,
    },
    {
      id: 'tof2-3-5-def-3',
      type: 'definition',
      title: 'Teranostikk',
      content: `**Teranostikk** (fra terapi + diagnostikk) er en strategi der diagnostikk og behandling kombineres i ett og samme nanosystem.

Et teranostisk nanopartikkelsystem kan for eksempel:
1. **Diagnostisere** — avbilde en svulst med MR eller fluorescens ved hjelp av kontrastgivende kjernemateriale
2. **Levere terapi** — frigi innkapslet legemiddel når partikkelen når målet
3. **Monitorere** — følge behandlingsrespons i sanntid via avbildning

Eksempel: En jernoksid-nanokjerne (MR-kontrast) innkapslet i en polymerkappe lastet med cellegift og dekorert med målrettende antistoffer på overflaten. Samme partikkel finner svulsten, visualiserer den, leverer legemiddel og lar legen følge effekten over tid.`,
    },
    {
      id: 'tof2-3-5-example-3',
      type: 'example',
      title: 'Eksempel: Gullnanopartikler i hurtigtest',
      problem: 'Forklar hvordan gullnanopartikler fungerer i en lateral strømningstest (f.eks. en COVID-19 hurtigtest), og hvilke nanoteknologiske prinsipper som utnyttes.',
      solution: `En lateral strømningstest fungerer slik:

1. **Prøvepåføring:** Pasienten setter en prøve (f.eks. neseslim) på prøvefeltet. Prøven beveger seg langs en nitrocellulosemembran via kapillærkrefter.

2. **Konjugatpute:** Prøven møter gullnanopartikler (ca. 40 nm) som er konjugert med antistoffer mot målantigenet (f.eks. SARS-CoV-2 spike-protein). Hvis antigenet er til stede i prøven, binder det seg til antistoff-gull-konjugatene.

3. **Testlinje (T):** Antigen–antistoff–AuNP-kompleksene strømmer videre og fanges opp av immobiliserte antistoffer på testlinjen. Oppkonsentrasjonen av gullnanopartikler gir en **synlig rød linje** — positiv test.

4. **Kontrolllinje (C):** Overskudd av antistoff–AuNP-konjugater (uten bundet antigen) fanges av sekundære antistoffer → bekrefter at testen fungerer.

**Nanoteknologiske prinsipper som utnyttes:**
- **Lokalisert overflateplasmonsresonans (LSPR)** — gullnanopartikler (ca. 40 nm) absorberer grønt lys og fremstår dypt røde, synlige med det blotte øye
- **Høyt overflate-til-volum-forhold** — gir mange bindingsseter for antistoffer per partikkel
- **Kolloidal stabilitet** — partiklene holdes i stabil suspensjon med overflateladning og funksjonelle grupper

Det er verdt å merke seg at denne teknologien er en av nanoteknologiens største kommersielle suksesser — milliarder av tester produseres hvert år, og de koster ofte under 50 kroner per stykk.`,
    },
    {
      id: 'tof2-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-5-ex-3',
        number: '3.5.3',
        type: 'multiple-choice',
        task: 'Hvilken egenskap gjør kvanteprikker spesielt egnet til medisinsk fluorescensavbildning sammenlignet med tradisjonelle organiske fargestoffer?',
        options: [
          { id: 'a', text: 'Kvanteprikker er billigere å produsere enn organiske fargestoffer', isCorrect: false },
          { id: 'b', text: 'Kvanteprikker er biologisk nedbrytbare og forsvinner etter bruk', isCorrect: false },
          { id: 'c', text: 'Kvanteprikker har størrelsesavhengig emisjon, høy fotostabilitet og smale emisjonsspektre', isCorrect: true },
          { id: 'd', text: 'Kvanteprikker kan bare brukes in vitro og er derfor tryggere', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Kvanteprikker har tre nøkkelfordeler for fluorescensavbildning: (1) Emisjonsfargen kan justeres ved å endre størrelsen på nanopartikkelen — dette gir enkel tilgang til mange farger. (2) De har ekstremt høy fotostabilitet — de blekes ikke like raskt som organiske fargestoffer ved langvarig eksponering. (3) De har smale, symmetriske emisjonsspektre som gir klare, distinkte signaler med lite overlapp. A er feil — kvanteprikker er ofte dyrere. B er feil — mange kvanteprikker (f.eks. CdSe) er toksiske og nedbrytes langsomt. D er feil — kvanteprikker brukes også in vivo i preklinisk forskning.',
      },
    },

    // --- BLOKK 4: mRNA-lipidnanopartikler ---
    {
      id: 'tof2-3-5-text-4',
      type: 'text',
      title: 'Lipidnanopartikler og mRNA-vaksiner',
      content: `### Lipidnanopartikler og mRNA-vaksiner

En av de mest spektakulære suksesshistoriene for nanomedisin i nyere tid er utviklingen av **mRNA-vaksiner** mot COVID-19. Vaksiner fra Pfizer/BioNTech og Moderna bruker **lipidnanopartikler** (LNPs) som leveringssystem for mRNA — og uten denne nanoteknologien ville vaksinene ikke fungert.

**Problemet:** mRNA er ekstremt ustabilt. Det brytes ned i løpet av minutter av RNase-enzymer som finnes overalt — i blodet, på hudoverflater, og selv i luften. I tillegg er mRNA negativt ladet og kan ikke passere gjennom cellemembranen på egen hånd. Det trengs altså en beskyttende innpakning som kan:

- Skjerme mRNA mot enzymatisk nedbrytning
- Transportere det inn i celler
- Frigi mRNA i cytoplasmaet der det kan translateres til protein

**Løsningen — lipidnanopartikler:**

LNPs er sfæriske partikler (typisk 60–100 nm) som består av fire lipidkomponenter:

1. **Ioniserbare kationiske lipider** — binder elektrostatisk til negativt ladet mRNA ved lav pH under formulering, men er nøytrale ved fysiologisk pH (reduserer toksisitet). Muliggjør endosomal flukt inne i cellen.
2. **Fosfolipider** — gir strukturell stabilitet til lipidlaget
3. **Kolesterol** — tetter membranen og øker stabiliteten
4. **PEG-lipider** — gir «stealth»-egenskaper og forhindrer aggregering

Etter injeksjon tas LNPs opp i celler (primært antigenpresenterende celler) via endocytose. Inne i endosomet gjør de ioniserbare lipidene at LNP-membranen fusjonerer med endosommembranen, slik at mRNA frigis til cytoplasmaet. Der translateres mRNA til spike-protein, som presenteres på celleoverflaten og aktiverer immunresponsen.`,
    },
    {
      id: 'tof2-3-5-def-4',
      type: 'definition',
      title: 'Lipidnanopartikler (LNPs)',
      content: `**Lipidnanopartikler (LNPs)** er sfæriske nanostrukturer (typisk 60–100 nm) sammensatt av lipider som brukes til å levere nukleinsyrer (mRNA, siRNA) inn i celler.

En typisk LNP består av:
- **Ioniserbart kationisk lipid** (~50 mol%) — innkapsler nukleinsyre og muliggjør endosomal flukt
- **Fosfolipid** (~10 mol%) — strukturell komponent
- **Kolesterol** (~38 mol%) — stabiliserer membranen
- **PEG-lipid** (~1,5 mol%) — forlenger sirkulasjonstid og hindrer aggregering

LNPs var avgjørende for de første godkjente mRNA-vaksinene (2020) og representerer et gjennombrudd i nanomedisinen der årtiers grunnforskning på lipidbasert nanoteknologi ga et verdensomspennende helseutfall.`,
    },
    {
      id: 'tof2-3-5-example-4',
      type: 'example',
      title: 'Eksempel: Fra nanoteknologi til pandemirespons',
      problem: 'Pfizer/BioNTech-vaksinen (Comirnaty) inneholder LNPs med diameter ca. 80 nm, der hver LNP bærer gjennomsnittlig 2–5 mRNA-molekyler. Én vaksinedose inneholder 30 µg mRNA. Hvis mRNA-molekylvekten er ca. 1,3 MDa (1,3 × 10⁶ g/mol), estimer antall LNPs i én vaksinedose.',
      solution: `**Steg 1:** Beregn antall mRNA-molekyler i dosen.

$$n_{\\text{mRNA}} = \\frac{m}{M} \\times N_A = \\frac{30 \\times 10^{-6}\\text{ g}}{1{,}3 \\times 10^6\\text{ g/mol}} \\times 6{,}02 \\times 10^{23}\\text{ mol}^{-1}$$

$$n_{\\text{mRNA}} = \\frac{30 \\times 10^{-6}}{1{,}3 \\times 10^6} \\times 6{,}02 \\times 10^{23} \\approx 1{,}4 \\times 10^{13}$$

Altså ca. **14 billioner mRNA-molekyler** per dose.

**Steg 2:** Estimer antall LNPs.

Med gjennomsnittlig 3,5 mRNA per LNP:

$$n_{\\text{LNP}} = \\frac{1{,}4 \\times 10^{13}}{3{,}5} \\approx 4 \\times 10^{12}$$

Det er omtrent **4 billioner lipidnanopartikler** i én enkelt vaksinedose — et imponerende eksempel på nanoteknologisk masseproduksjon. Disse partiklene er så små at de tilsammen utgjør et volum på bare noen mikroliter, men de bærer nok mRNA til å instruere milliarder av celler om å produsere spike-protein og starte en immunrespons.`,
    },
    {
      id: 'tof2-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-5-ex-4',
        number: '3.5.4',
        type: 'classic',
        difficulty: 'middels',
        task: 'Forklar hvorfor mRNA-vaksiner ikke ville fungert uten lipidnanopartikler. Beskriv minst tre funksjoner som LNPs fyller i leveringen av mRNA.',
        hints: ['Tenk på hva som skjer med nakent mRNA i kroppen, og hva som trengs for at mRNA skal nå ribosomet i cytoplasmaet.'],
        solution: 'Nakent mRNA ville ikke fungert som vaksine av tre grunner, og LNPs løser alle tre: (1) **Beskyttelse mot nedbrytning:** mRNA brytes ned av RNase-enzymer i blodet på sekunder til minutter. LNPs innkapsler mRNA i en lipidmembran som skjermer det fra enzymer. (2) **Celleopptak:** mRNA er et stort, negativt ladet molekyl som ikke kan passere gjennom cellemembranen. LNPs tas opp via endocytose — cellene «svelger» partiklene. (3) **Endosomal flukt:** Etter endocytose havner LNPs i endosomer (syrevesikler). De ioniserbare lipidene i LNP protoneres ved lav pH, destabiliserer endosommembranen og frigir mRNA til cytoplasmaet der ribosomene kan oversette det til protein. I tillegg gir PEG-lipidene forlenget sirkulasjonstid og kolesterolet gir strukturell stabilitet.',
        allowsUpload: true,
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof2-3-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Nanomedisin** utnytter nanomaterialer (typisk 10–200 nm) for medisinsk diagnostikk, behandling og forebygging.
- **Målrettet legemiddellevering** bruker nanopartikler som innkapsler legemidler og leverer dem selektivt til sykt vev via **passiv målretting** (EPR-effekten) eller **aktiv målretting** (liganddekorering).
- **EPR-effekten** skyldes svulsters lekke blodkar og dårlige lymfedrenering, som gir opphopning av nanopartikler i tumorvev.
- **Diagnostikk** forbedres med kvanteprikker (fluorescensavbildning), SPIONs (MR-kontrast) og gullnanopartikler (hurtigtester).
- **Teranostikk** kombinerer diagnostikk og terapi i samme nanosystem — avbild, behandle og monitorere i ett.
- **Lipidnanopartikler (LNPs)** muliggjorde mRNA-vaksiner mot COVID-19 ved å beskytte mRNA, levere det inn i celler og frigi det i cytoplasmaet.
- Nanomedisin er allerede klinisk virkelighet — Doxil (1995), Abraxane (2005) og COVID-19-vaksiner (2020) er viktige milepæler.`,
    },

    // --- Samleoppgave ---
    {
      id: 'tof2-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-5-ex-5',
        number: '3.5.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du skal designe et teranostisk nanosystem for å diagnostisere og behandle brystkreft. Beskriv (a) hvilke materialer du ville brukt til kjernen, skallet og overflaten, (b) hvordan systemet ville kombinere avbildning og terapi, og (c) hvilke målrettingsstrategier du ville benyttet (passiv og aktiv). Begrunn valgene dine.',
        hints: ['Tenk på hvilke avbildningsmodaliteter som er klinisk relevante, hvilke overflatereseptorer som er overuttrykt i brystkreft, og hvordan du kan trigge legemiddelfrigjøring.'],
        solution: 'Et mulig teranostisk nanosystem for brystkreft:\n\n**(a) Materialer:**\n- **Kjerne:** Superparamagnetiske jernoksidnanopartikler (SPIONs, ca. 10 nm) for MR-kontrast. Kjernen kan også inneholde cellegiften doksorubicin.\n- **Skall:** Polymerkappe av PLGA (poly(laktid-ko-glykolid)) som innkapsler legemiddelet og gir kontrollert frigjøring. PLGA er FDA-godkjent og biologisk nedbrytbar.\n- **Overflate:** PEG-kjeder for «stealth»-egenskaper (forlenger sirkulasjonstid), pluss målrettende ligander.\n\nTotal partikkelstørrelse: ca. 100–150 nm — innenfor EPR-vinduet.\n\n**(b) Kombinasjon av avbildning og terapi:**\n- SPIONs-kjernen gir T2-vektet MR-kontrast → svulsten kan lokaliseres og størrelsen kan måles.\n- Doksorubicin frigis gradvis fra PLGA-kappen når polymeren degraderes i det svakt sure tumormiljøet (pH ~6,5 vs. 7,4 i normalt vev).\n- Etter behandling kan ny MR-avbildning vise om svulsten har krympet → behandlingsrespons monitoreres.\n\n**(c) Målrettingsstrategier:**\n- **Passiv (EPR):** Partikkelstørrelse 100–150 nm og PEG-ylering gir lang sirkulasjonstid og selektiv akkumulering i svulsten.\n- **Aktiv:** Overflaten dekoreres med anti-HER2-antistoffer (trastuzumab-fragmenter). HER2-reseptoren er overuttrykt i ca. 20–30 % av brystkrefttilfeller. Antistoffbindingen trigger reseptormediert endocytose → forbedret celleopptak.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.6: Nanoteknologi i energi og miljø
// ============================================================================

export const CHAPTER_TOF_2_3_6: TextbookChapter = {
  id: 'tof-2-3-6',
  courseId: 'tof-2',
  chapterNumber: '3.6',
  title: 'Nanoteknologi i energi og miljø',
  description: 'Solceller, batterier, vannrensing og katalysatorer.',
  estimatedMinutes: 25,
  competenceGoals: [
    'beskrive nanoteknologi i energi',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-3-6-intro',
      type: 'text',
      content: `## Nanoteknologi i energi og miljø

Verdens energi- og miljøutfordringer — klimaendringer, økende energibehov, forurensning og tilgang til rent vann — er blant de mest presserende problemene i vår tid. Nanoteknologi tilbyr nye verktøy for å møte disse utfordringene, fordi nanomaterialer ofte har egenskaper som er dramatisk forbedret sammenlignet med konvensjonelle materialer.

Solceller som omdanner sollys til elektrisitet mer effektivt. Batterier som lagrer mer energi og lades raskere. Katalysatorer som gjør kjemiske prosesser grønnere. Membraner som renser forurenset vann på molekylnivå. Alt dette er mulig — eller i ferd med å bli det — takket være nanoteknologi.

I dette kapittelet utforsker vi hvordan nanomaterialer brukes til å forbedre energikonvertering, energilagring, katalyse og vannrensing — fire sentrale områder der nanoteknologi kan bidra til en mer bærekraftig fremtid.`,
    },

    // --- BLOKK 1: Nanosolceller ---
    {
      id: 'tof2-3-6-text-1',
      type: 'text',
      title: 'Nanoteknologi i solceller',
      content: `### Nanoteknologi i solceller

Solceller konverterer solenergi til elektrisitet via den fotovoltaiske effekten. Konvensjonelle silisiumsolceller har blitt svært rimelige, men nanoteknologi åpner dørene for **neste generasjons solceller** med potensielt høyere virkningsgrad, lavere materialkostnad og nye formfaktorer.

**Kvanteprikksolceller (QDSCs)**

Kvanteprikker (QDs) kan brukes som det lysabsorberende materialet i solceller. Fordi kvanteprikkenes bandgap er størrelsesavhengig, kan man **tune absorpsjonen** til å matche solspekteret optimalt. I prinsippet kan man lage en **multijunction-celle** med kvanteprikker av ulike størrelser som absorberer ulike deler av spekteret — fra UV til nær-infrarødt.

En spesielt spennende mulighet er **multiple exciton generation** (MEG): i kvanteprikker kan ett høyenergifoton generere mer enn ett elektron–hull-par, noe som potensielt kan bryte Shockley–Queisser-grensen (ca. 33 % for enkeltjunction-celler). MEG er demonstrert i PbSe- og PbS-kvanteprikker.

**Perovskittsolceller**

Perovskitter — materialer med krystallstruktur ABX₃ (der A og B er kationer og X er et halogenid) — har revolusjonert solcelleforskningen det siste tiåret. Nanokrystallinske perovskittfilmer kan deponeres fra løsning ved romtemperatur, noe som gir svært lave produksjonskostnader.

Virkningsgraden har steget fra 3,8 % i 2009 til over 26 % i 2024 — en forbedringshastighet som er uten sidestykke i solcellehistorien. Nanostrukturering av perovskittlaget — for eksempel ved å kontrollere kornstørrelse og grenseflater på nanoskala — er avgjørende for å oppnå høy effektivitet og stabilitet.

**Fargestoffsensibiliserte solceller (DSSCs)**

DSSCs, eller Grätzel-celler, bruker nanoporøs titandioksid (TiO₂) med et overflate-til-volum-forhold som er hundrevis av ganger større enn en flat overflate. TiO₂-nanopartiklene (ca. 20 nm) danner et porøst nettverk med enorm total overflate, der fargestoffmolekyler adsorberes og absorberer sollys.`,
    },
    {
      id: 'tof2-3-6-def-1',
      type: 'definition',
      title: 'Kvanteprikksolcelle',
      content: `En **kvanteprikksolcelle** (QDSC) bruker halvleder-kvanteprikker som det lysabsorberende materialet.

Viktige egenskaper:
- **Tunbart bandgap:** Absorpsjonskanten justeres ved å endre kvanteprikkstørrelsen, slik at solspekteret kan utnyttes optimalt.
- **Løsningsprosesserbar:** Kvanteprikker kan deponeres fra kolloidal løsning — rimelig og skalerbar produksjon.
- **Multiple exciton generation (MEG):** Muligheten for at ett foton genererer flere elektron–hull-par, noe som potensielt kan øke virkningsgraden utover Shockley–Queisser-grensen (~33 %).
- **Utfordringer:** Nåværende virkningsgrader er lavere enn for silisium og perovskitt. Toksiske materialer (Pb, Cd) begrenser kommersialisering.`,
    },
    {
      id: 'tof2-3-6-example-1',
      type: 'example',
      title: 'Eksempel: Overflateøkning i Grätzel-celler',
      problem: 'I en Grätzel-celle (DSSC) dekkes et 1 cm × 1 cm glassubstrat med et 10 µm tykt lag av TiO₂-nanopartikler med diameter 20 nm. Anta at partiklene er sfæriske og at de pakkes med en porøsitet på 50 %. Estimer den totale indre overflaten tilgjengelig for fargestoffadsorpsjon.',
      solution: `**Steg 1:** Beregn volumet av TiO₂-laget.

$$V_{\\text{lag}} = 1\\text{ cm} \\times 1\\text{ cm} \\times 10\\text{ µm} = 1 \\times 10^{-4}\\text{ cm} \\times 1\\text{ cm}^2 = 10^{-4}\\text{ cm}^3 = 10^{-10}\\text{ m}^3$$

**Steg 2:** Med 50 % porøsitet er volumet okkupert av TiO₂:

$$V_{\\text{TiO}_2} = 0{,}5 \\times 10^{-10}\\text{ m}^3 = 5 \\times 10^{-11}\\text{ m}^3$$

**Steg 3:** Volum per nanopartikkel ($r = 10\\text{ nm} = 10^{-8}\\text{ m}$):

$$v_p = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (10^{-8})^3 \\approx 4{,}19 \\times 10^{-24}\\text{ m}^3$$

**Steg 4:** Antall nanopartikler:

$$N = \\frac{V_{\\text{TiO}_2}}{v_p} = \\frac{5 \\times 10^{-11}}{4{,}19 \\times 10^{-24}} \\approx 1{,}19 \\times 10^{13}$$

**Steg 5:** Overflate per nanopartikkel:

$$s_p = 4\\pi r^2 = 4\\pi (10^{-8})^2 \\approx 1{,}26 \\times 10^{-15}\\text{ m}^2$$

**Steg 6:** Total overflate:

$$S_{\\text{total}} = N \\times s_p = 1{,}19 \\times 10^{13} \\times 1{,}26 \\times 10^{-15} \\approx 0{,}015\\text{ m}^2 = 150\\text{ cm}^2$$

Den indre overflaten er altså ca. **150 cm²** — det er **150 ganger** større enn substratarealets geometriske overflate (1 cm²). Denne enorme overflateøkningen er grunnen til at nanoporøs TiO₂ muliggjør effektive fargestoffsensibiliserte solceller — mye mer fargestoff kan adsorberes enn på en flat overflate.`,
    },
    {
      id: 'tof2-3-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-6-ex-1',
        number: '3.6.1',
        type: 'multiple-choice',
        task: 'Hva er «multiple exciton generation» (MEG) i kvanteprikksolceller?',
        options: [
          { id: 'a', text: 'Prosessen der flere fotoner kombineres for å eksitere ett elektron', isCorrect: false },
          { id: 'b', text: 'Prosessen der ett høyenergifoton genererer mer enn ett elektron–hull-par i en kvanteprikk', isCorrect: true },
          { id: 'c', text: 'Prosessen der kvanteprikker deler seg i mindre partikler under belysning', isCorrect: false },
          { id: 'd', text: 'Prosessen der flere kvanteprikker fusjonerer til én stor partikkel', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Multiple exciton generation (MEG) er et fenomen i kvanteprikker der ett enkelt foton med energi som er minst dobbelt så stor som bandgapet kan generere to eller flere elektron–hull-par (eksitoner). I bulk-halvledere ville den overskytende energien gått tapt som varme, men i kvanteprikker kan energien i stedet brukes til å skape flere ladningsbærere. Dette kan potensielt øke solcellens virkningsgrad utover Shockley–Queisser-grensen. A beskriver den omvendte prosessen. C og D er fysisk meningsløse i denne sammenhengen.',
      },
    },

    // --- BLOKK 2: Nanobatterier og energilagring ---
    {
      id: 'tof2-3-6-text-2',
      type: 'text',
      title: 'Nanomaterialer i batterier og energilagring',
      content: `### Nanomaterialer i batterier og energilagring

Effektiv energilagring er en flaskehals for overgangen til fornybar energi. Litiumionbatterier dominerer markedet, men har begrensninger i energitetthet, ladetid og levetid. Nanoteknologi kan forbedre alle disse parameterne.

**Nanostrukturerte elektroder**

I et litiumionbatteri må litiumioner transporteres inn og ut av elektrodematerialene under lading og utlading. Denne prosessen — interkalering — begrenses av diffusjonsavstanden inne i partiklene. Diffusjonstiden skalerer som $t \\propto L^2/D$, der $L$ er diffusjonsavstanden og $D$ er diffusjonskoeffisienten.

Ved å bruke **nanopartikler** i stedet for mikrometerpartikler som elektrodemateriale reduseres $L$ drastisk. Hvis partikkelstørrelsen reduseres fra 10 µm til 100 nm (faktor 100), reduseres diffusjonstiden med faktor $100^2 = 10\\,000$. Resultatet er **mye raskere lading og utlading**.

I tillegg gir nanostrukturering:
- **Større overflate** for elektrokjemiske reaksjoner → høyere effekt (watt)
- **Bedre toleranse for volumendringer** under syklering (viktig for silisiumanoder som ekspanderer ~300 %)
- **Kortere transportvei for elektroner** til strømoppsamleren

**Silisiumnanoanoder**

Silisium har en teoretisk kapasitet på 3579 mAh/g — ti ganger høyere enn grafitt (372 mAh/g). Problemet er at silisium ekspanderer ca. 300 % ved full litiering, noe som knuser bulk-silisium etter få sykluser. Nanostrukturert silisium — som nanopartikler, nanotråder eller porøse nanostrukturer — kan håndtere denne volumendringen uten å sprekke, fordi nanopartikler har mer plass til å ekspandere og tåler mekanisk stress bedre.

**Faststoffbatterier med nanoelektrolytter**

I faststoffbatterier erstattes den brannfarlige flytende elektrolytten med en fast ioneleder. Nano-grenseflater mellom elektrode og faststoffelektrolytt er avgjørende for god ioneoverføring. Nanoteknologiske teknikker som tynnfilmdeponering og nanokompositt-elektrolytter brukes for å optimalisere disse grenseflatene.`,
    },
    {
      id: 'tof2-3-6-def-2',
      type: 'definition',
      title: 'Nanostrukturert elektrode',
      content: `En **nanostrukturert elektrode** er et elektrodemateriale der de aktive partiklene eller strukturene har dimensjoner i nanometerområdet (typisk 1–100 nm).

Fordeler sammenlignet med konvensjonelle mikrometerelektroder:
- **Kortere diffusjonsavstander:** Litiumioner når sentrum av partikkelen raskere → raskere lading ($t \\propto L^2$)
- **Større spesifikt overflateareal:** Flere reaksjonsseter → høyere strømtetthet
- **Mekanisk robusthet:** Nanopartikler tåler volumendringer bedre under syklering
- **Nye reaksjonsmekanismer:** Noen konversjonsreaksjoner er kun mulige på nanoskala

Ulemper inkluderer lavere pakningsgrad (mer tomt rom), høyere overflatereaktivitet (kan gi uønskede sidereaksjoner med elektrolytten), og vanskeligere prosessering.`,
    },
    {
      id: 'tof2-3-6-example-2',
      type: 'example',
      title: 'Eksempel: Ladetid og partikkelstørrelse',
      problem: 'Diffusjonstiden for litiumioner i et elektrodemateriale er gitt ved $t \\approx L^2 / D$, der $L$ er partikkelradiusen og $D = 10^{-14}$ m²/s er diffusjonskoeffisienten. Beregn ladetiden for (a) en konvensjonell mikropartikkel med $L = 5$ µm og (b) en nanopartikkel med $L = 50$ nm.',
      solution: `**(a)** Mikropartikkel ($L = 5\\text{ µm} = 5 \\times 10^{-6}\\text{ m}$):

$$t = \\frac{L^2}{D} = \\frac{(5 \\times 10^{-6})^2}{10^{-14}} = \\frac{25 \\times 10^{-12}}{10^{-14}} = 2\\,500\\text{ s} \\approx 42\\text{ min}$$

**(b)** Nanopartikkel ($L = 50\\text{ nm} = 5 \\times 10^{-8}\\text{ m}$):

$$t = \\frac{L^2}{D} = \\frac{(5 \\times 10^{-8})^2}{10^{-14}} = \\frac{25 \\times 10^{-16}}{10^{-14}} = 0{,}25\\text{ s}$$

Nanopartikkelen lades på **0,25 sekunder** — det er **10 000 ganger raskere** enn mikropartikkelen. I praksis begrenses ladetiden av andre faktorer (elektronisk motstand, ioneledning i elektrolytten), men dette illustrerer det enorme potensialet i nanostrukturerte elektroder for hurtiglading.`,
    },
    {
      id: 'tof2-3-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-6-ex-2',
        number: '3.6.2',
        type: 'classic',
        difficulty: 'middels',
        task: 'Forklar hvorfor silisium er et lovende anodemateriale for litiumionbatterier, og beskriv minst to utfordringer ved å bruke bulk-silisium. Forklar deretter hvordan nanostrukturering av silisium kan løse disse utfordringene.',
        hints: ['Sammenlign den teoretiske kapasiteten med grafitt, og tenk på hva som skjer mekanisk når silisium tar opp litium.'],
        solution: 'Silisium er lovende fordi det har en teoretisk kapasitet på 3579 mAh/g — nesten ti ganger høyere enn grafitt (372 mAh/g). Det er også det nest vanligste grunnstoffet i jordskorpen, altså rimelig og tilgjengelig.\n\n**Utfordringer med bulk-silisium:** (1) **Volumekspansjon:** Silisium ekspanderer ca. 300 % ved full litiering (Li₁₅Si₄). Denne enorme volumendringen forårsaker sprekker og pulverisering av elektrodematerialet etter bare noen få lade-/utladingssykluser. (2) **Ustabilt SEI-lag:** Det faste elektrolytt-grenseflatelaget (SEI) som dannes på overflaten sprekker opp ved hver syklus og re-dannes, noe som forbruker litium og elektrolytt og reduserer batteriets levetid. (3) **Dårlig elektronisk ledningsevne:** Silisium er en halvleder med lavere elektronisk konduktivitet enn grafitt.\n\n**Nanostrukturering løser problemene:** (1) Nanopartikler og nanotråder har en kritisk størrelse (ca. 150 nm for Si) under hvilken de kan tåle full litiering uten å sprekke — de er små nok til at den mekaniske spenningen fordeles uten brudd. (2) Porøse nanostrukturer gir «pusterom» for volumekspansjonen — partiklene kan ekspandere inn i porene. (3) Kortere elektroniske og ioniske transportveier kompenserer for lav ledningsevne.',
        allowsUpload: true,
      },
    },

    // --- BLOKK 3: Nanoteknologi i vannrensing ---
    {
      id: 'tof2-3-6-text-3',
      type: 'text',
      title: 'Nanoteknologi i vannrensing og katalyse',
      content: `### Nanoteknologi i vannrensing og katalyse

Tilgang til rent vann er en global utfordring — over 2 milliarder mennesker mangler trygg drikkevannskilde. Nanoteknologi tilbyr nye løsninger for å fjerne forurensninger, patogener og tungmetaller fra vann, ofte med lavere energiforbruk enn konvensjonelle metoder.

**Nanomembraner**

Konvensjonell omvendt osmose (RO) bruker polymermembraner med nanometerstore porer for å fjerne salter og forurensninger. Nanoteknologi kan forbedre disse membranene dramatisk:

- **Karbonnanorørmembraner:** Vann transporteres gjennom karbonnanorør (CNTs) med indre diameter 1–2 nm. Den ultraglatte inneroverflaten gir vannstrømning som er **opptil 1000 ganger raskere** enn i konvensjonelle polymermembraner med samme porestørrelse. Dette kan dramatisk redusere energiforbruket ved avsaltning.
- **Grafénoksidmembraner:** Grafénoksidflak stables i lagvise membraner med justerbar mellomlagsavstand. Vannmolekyler kan passere mellom lagene, mens større ioner og molekyler blokkeres.
- **Nanofiber-membraner:** Elektrosponnet polymernanofibre (diameter 50–500 nm) danner membraner med høy porøsitet og god mekanisk styrke — effektive for partikkelfiltrering.

**Nanokatalysatorer**

Det enorme overflate-til-volum-forholdet til nanopartikler gjør dem til svært effektive katalysatorer. Gullnanopartikler — som i bulk-form er kjemisk inert — blir katalytisk aktive under ca. 5 nm diameter. TiO₂-nanopartikler brukes som **fotokatalysatorer**: under UV-belysning genererer de reaktive oksygenarter (ROS) som bryter ned organiske forurensninger, dreper bakterier og kan til og med spalte vann for hydrogenproduksjon.

**Nano-nullverdig jern (nZVI)**

Jernnanopartikler (typisk 10–100 nm) er svært effektive for å rense grunnvann forurenset med klorerte løsemidler, tungmetaller og arsenikk. De virker ved å redusere forurensningene kjemisk — jernet oksideres fra Fe⁰ til Fe²⁺/Fe³⁺ mens forurensningen reduseres og ufarliggjøres. Den høye overflate-til-volum-ratioen gir svært rask reaksjon sammenlignet med bulk-jern.`,
    },
    {
      id: 'tof2-3-6-def-3',
      type: 'definition',
      title: 'Fotokatalyse med TiO₂',
      content: `**Fotokatalyse** er en prosess der en halvleder-nanokatalysator (typisk TiO₂) absorberer lys og bruker energien til å drive kjemiske reaksjoner.

**Mekanisme:**
1. Et foton med energi $\\geq E_g$ (bandgapet, 3,2 eV for anatase TiO₂) absorberes og genererer et elektron–hull-par ($e^-$ i ledningsbåndet, $h^+$ i valensbåndet).
2. **Hullet** ($h^+$) oksiderer vann eller adsorberte OH⁻-ioner til hydroksylradikaler (OH·) — svært reaktive oksidanter.
3. **Elektronet** ($e^-$) reduserer O₂ til superoksidradikaler (O₂⁻·).
4. Disse **reaktive oksygenartene** (ROS) bryter ned organiske forurensninger til CO₂ og H₂O.

Nanokrystallinsk TiO₂ er ideell fordi det høye overflatearealet gir mange aktive seter, og den lille partikkelstørrelsen minimerer rekombinasjon av elektron–hull-par.`,
    },
    {
      id: 'tof2-3-6-example-3',
      type: 'example',
      title: 'Eksempel: Vannrensing med jernnanonpartikler',
      problem: 'Et grunnvann er forurenset med trikloreten (TCE, et klorert løsemiddel). Forklar hvordan nano-nullverdig jern (nZVI) kan brukes til å rense vannet, og hvorfor nanopartikkelformen er mer effektiv enn konvensjonelt jernpulver.',
      solution: `**Rensemekanisme:**

Nano-nullverdig jern (nZVI) reduserer trikloreten (TCE) gjennom en dekloreringsreaksjon:

$$\\text{C}_2\\text{HCl}_3 + 4\\text{Fe}^0 + 5\\text{H}^+ \\rightarrow \\text{C}_2\\text{H}_6 + 4\\text{Fe}^{2+} + 3\\text{Cl}^-$$

Jernatomene på overflaten donerer elektroner til TCE-molekylet, som bryter C–Cl-bindingene trinnvis. Sluttproduktet (etan, C₂H₆) er en ufarlig gass.

**Hvorfor nanopartikler er bedre enn konvensjonelt jernpulver:**

1. **Overflate-til-volum-forholdet:** nZVI-partikler (50 nm diameter) har $S/V = 3/r = 3/(25 \\times 10^{-9}) = 1{,}2 \\times 10^{8}\\text{ m}^{-1}$. Konvensjonelt jernpulver (50 µm) har $S/V = 1{,}2 \\times 10^{5}\\text{ m}^{-1}$. Nanopartiklene har altså **1000 ganger** mer overflate per volum — og dermed 1000 ganger flere reaktive seter.

2. **Reaksjonshastighet:** Siden reaksjonen skjer på overflaten, er den proporsjonal med tilgjengelig overflateareal. nZVI reagerer dermed mye raskere — minutter i stedet for timer/dager.

3. **Mobilitet:** nZVI-partikler er små nok til å transporteres gjennom porer i jord og grunnvann, noe som muliggjør in situ-rensing uten å grave opp forurenset jord.

I praksis injiseres en suspensjon av nZVI-partikler direkte i det forurensede grunnvannet, der de sprer seg og reagerer med forurensningene på stedet.`,
    },
    {
      id: 'tof2-3-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-6-ex-3',
        number: '3.6.3',
        type: 'multiple-choice',
        task: 'Hvorfor er karbonnanorørmembraner potensielt mer energieffektive enn konvensjonelle polymermembraner for avsaltning?',
        options: [
          { id: 'a', text: 'Karbonnanorør er billigere å produsere enn polymermembraner', isCorrect: false },
          { id: 'b', text: 'Karbonnanorørenes ultraglatte inneroverflate gir mye raskere vannstrømning ved samme trykk', isCorrect: true },
          { id: 'c', text: 'Karbonnanorør kan fjerne salt uten å bruke noe trykk overhodet', isCorrect: false },
          { id: 'd', text: 'Karbonnanorør varmer opp vannet slik at det fordamper gjennom membranen', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Karbonnanorør har en atomært glatt, hydrofob inneroverflate som gir ekstremt lav friksjon for vanntransport. Eksperimentelle og teoretiske studier viser at vannstrømningen gjennom karbonnanorør kan være opptil 1000 ganger raskere enn gjennom konvensjonelle polymermembraner med tilsvarende porestørrelse. Dette betyr at mindre trykk trengs for å oppnå samme vannproduksjon, noe som reduserer energiforbruket. A er feil — CNT-membraner er foreløpig mye dyrere. C er feil — avsaltning krever alltid energi for å overvinne den osmotiske trykkforskjellen. D beskriver membrandestillasjon, ikke CNT-membraner.',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof2-3-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Nanosolceller** (kvanteprikksolceller, perovskitter, Grätzel-celler) utnytter nanomaterialenes tunbare optiske egenskaper og enorme overflater for å omdanne sollys til elektrisitet mer effektivt og billigere.
- **Multiple exciton generation** (MEG) i kvanteprikker kan potensielt bryte Shockley–Queisser-grensen for solcelleeffektivitet.
- **Nanostrukturerte batterielektroder** gir kortere diffusjonsavstander ($t \\propto L^2$), raskere lading og bedre toleranse for volumendringer — spesielt viktig for silisiumanoder.
- **Faststoffbatterier** med nano-grenseflater kan erstatte brannfarlige flytende elektrolytter.
- **Nanomembraner** (karbonnanorør, grafénoksid, nanofiber) forbedrer vannrensing med høyere gjennomstrømning og lavere energiforbruk.
- **Fotokatalyse** med TiO₂-nanopartikler bruker sollys til å bryte ned forurensninger og desinfisere vann.
- **Nano-nullverdig jern** (nZVI) renser forurenset grunnvann ved kjemisk reduksjon med enormt overflate-til-volum-forhold.
- Nanoteknologi er et nøkkelverktøy for å møte verdens energi- og miljøutfordringer.`,
    },

    // --- Samleoppgave ---
    {
      id: 'tof2-3-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-6-ex-4',
        number: '3.6.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign to nanoteknologiske tilnærminger til vannrensing: (1) fotokatalyse med TiO₂-nanopartikler og (2) filtrering med karbonnanorørmembraner. For hver tilnærming: beskriv virkemekanismen, hvilke forurensninger den er best egnet for, og diskuter fordeler og begrensninger.',
        hints: ['Tenk på forskjellen mellom å bryte ned forurensninger kjemisk versus å fysisk filtrere dem ut.'],
        solution: '**(1) Fotokatalyse med TiO₂-nanopartikler:**\n\n*Virkemekanisme:* UV-lys eksiterer elektron–hull-par i TiO₂. Hullene oksiderer vann til hydroksylradikaler (OH·) som bryter ned organiske molekyler til CO₂ og H₂O. Elektroner reduserer O₂ til superoksid.\n\n*Best egnet for:* Nedbrytning av organiske forurensninger (pesticider, legemiddelrester, fargestoffer), desinfeksjon (dreper bakterier og virus), fjerning av lave konsentrasjoner av forurensninger.\n\n*Fordeler:* Bruker sollys som energikilde (bærekraftig), bryter ned forurensninger fullstendig (ikke bare overføring til annet medium), katalysatoren forbrukes ikke.\n\n*Begrensninger:* Langsom prosess for høye konsentrasjoner, krever UV-lys (kun 3–5 % av sollys), ineffektiv mot uorganiske ioner og salter, vanskelig å gjenvinne nanopartiklene fra vannet.\n\n**(2) Karbonnanorørmembraner:**\n\n*Virkemekanisme:* Fysisk filtrering — vann presses gjennom nanorør med definert indre diameter (1–2 nm). Molekyler og ioner større enn porediameteren blokkeres. Den ultraglatte inneroverflaten gir minimal friksjon.\n\n*Best egnet for:* Avsaltning, fjerning av tungmetallioner, partikler, bakterier og virus — alt som er større enn porediameteren.\n\n*Fordeler:* Opptil 1000× høyere vannflux enn konvensjonelle membraner → lavere energiforbruk, presis størrelses-selektivitet.\n\n*Begrensninger:* Svært dyr produksjon, vanskelig å skalere opp, fjerner ikke oppløste organiske molekyler som er mindre enn porediameteren, membranen kan tilstoppes (fouling).\n\n**Konklusjon:** Metodene er komplementære. CNT-membraner er best for fysisk separasjon (salt, partikler), mens fotokatalyse er best for kjemisk nedbrytning av organiske forurensninger. Et optimalt vannrensingssystem kan kombinere begge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.7: Risiko og etikk ved nanoteknologi
// ============================================================================

export const CHAPTER_TOF_2_3_7: TextbookChapter = {
  id: 'tof-2-3-7',
  courseId: 'tof-2',
  chapterNumber: '3.7',
  title: 'Risiko og etikk ved nanoteknologi',
  description: 'Helserisiko, miljøpåvirkning og regulering av nanomaterialer.',
  estimatedMinutes: 25,
  competenceGoals: [
    'drøfte risiko ved nanoteknologi',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-3-7-intro',
      type: 'text',
      content: `## Risiko og etikk ved nanoteknologi

De foregående kapitlene har vist nanoteknologiens enorme potensial — fra medisin og energi til elektronikk og materialvitenskap. Men med enhver kraftfull teknologi følger også risiko og etiske spørsmål som må tas på alvor. Nanomaterialer oppfører seg annerledes enn sine bulk-motparter, og dette gjelder også deres potensielle skadeeffekter.

Et stoff som er helt trygt i makroskopisk form kan bli giftig på nanoskala. Titandioksid (TiO₂) brukes trygt i solkrem og maling, men TiO₂-nanopartikler kan generere reaktive oksygenarter (ROS) som skader celler. Gull er kjemisk inert i bulk, men gullnanopartikler kan krysse biologiske barrierer som bulk-gull aldri ville passert.

Denne dobbelheten — fantastiske egenskaper som både muliggjør nye løsninger og skaper nye risikoer — er kjernen i nanoteknologiens etiske utfordring. I dette kapittelet utforsker vi helserisiko, miljøpåvirkning, regulering og de etiske rammene for ansvarlig utvikling av nanoteknologi.`,
    },

    // --- BLOKK 1: Helserisiko ved nanomaterialer ---
    {
      id: 'tof2-3-7-text-1',
      type: 'text',
      title: 'Helserisiko ved nanomaterialer',
      content: `### Helserisiko ved nanomaterialer

Nanomaterialers potensielle helserisiko er et aktivt forskningsfelt kjent som **nanotoksikologi**. De samme egenskapene som gjør nanomaterialer nyttige — liten størrelse, stor overflate, høy reaktivitet, evne til å krysse biologiske barrierer — kan også gjøre dem potensielt skadelige.

**Eksponeringsveier**

Mennesker kan eksponeres for nanomaterialer gjennom tre hovedveier:

1. **Innånding (inhalasjon)** — den mest bekymringsfulle eksponeringsveien. Nanopartikler følger luftstrømmen dypt ned i lungene til alveolene (lungeblærene), der de kan deponeres og potensielt translokere til blodbanen. Ultrafine partikler (< 100 nm) kan til og med nå lungealveolenes overflate mer effektivt enn større partikler fordi de følger den brownske bevegelsen.

2. **Hudkontakt (dermal)** — intakt hud er en relativt god barriere mot nanopartikler, men det er bekymring for at nanopartikler kan penetrere skadet hud eller trenge inn via hårfolliklene. TiO₂ og ZnO-nanopartikler i solkrem er grundig studert — de ser ut til å forbli i de øverste hudlagene og ikke penetrere til blodbanen i betydelig grad hos friske individer.

3. **Svelging (oral)** — gjennom mat, vann eller hånd-til-munn-kontakt. Nanomaterialer i mage-tarm-kanalen kan tas opp gjennom tarmcellene. Absorpsjonsgraden varierer sterkt med materiale, størrelse og overflateegenskaper.

**Toksisitetsmekanismer**

Når nanopartikler først er inne i kroppen, kan de forårsake skade gjennom flere mekanismer:

- **Oksidativt stress:** Mange nanopartikler genererer reaktive oksygenarter (ROS) som skader DNA, proteiner og cellemembraner. TiO₂, ZnO, CeO₂ og karbonnanorør er alle vist å indusere ROS.
- **Inflammasjon:** Nanopartikler som deponeres i lungene kan utløse en inflammatorisk respons. Langvarig inflammasjon er knyttet til fibrose og potensielt kreft.
- **Proteincorona:** Når nanopartikler kommer i kontakt med biologiske væsker, adsorberes proteiner umiddelbart på overflaten og danner en «proteincorona». Denne coronaen endrer hvordan kroppen «ser» partikkelen og påvirker biodistribusjon, celleopptak og toksisitet.
- **Trojanerhest-mekanismen:** Nanopartikler kan transportere adsorberte toksiske stoffer (f.eks. tungmetaller, PAH-er) inn i celler som ellers ikke ville vært eksponert — de fungerer som «trojanerhester».`,
    },
    {
      id: 'tof2-3-7-def-1',
      type: 'definition',
      title: 'Nanotoksikologi',
      content: `**Nanotoksikologi** er studiet av nanomaterialers potensielle skadeeffekter på biologiske systemer og miljøet.

Sentrale konsepter:
- **Dosen alene gjør ikke giften:** For nanomaterialer er det ikke bare masse-dosen som avgjør toksisiteten, men også **partikkelantall, overflate, form, krystallinitet og overflateladning**.
- **Overflatedose-paradigmet:** Overflateareal er ofte en bedre predikator for toksisitet enn masse — fordi biologiske interaksjoner skjer på overflaten.
- **Proteincorona:** Nanopartikler dekkes umiddelbart av proteiner i biologiske medier, og det er denne «biologiske identiteten» (ikke den «syntetiske identiteten») som avgjør den biologiske responsen.
- **Fiber-paradigmet:** Lange, stive nanofibre (f.eks. visse karbonnanorør) kan oppføre seg som asbest i lungene — de er for lange til å bli fagocyttert av makrofager, noe som utløser kronisk inflammasjon.`,
    },
    {
      id: 'tof2-3-7-example-1',
      type: 'example',
      title: 'Eksempel: Karbonnanorør og asbestanalogien',
      problem: 'Forklar «fiber-paradigmet» for karbonnanorør og hvorfor lange, stive flerveggede karbonnanorør (MWCNTs) har blitt sammenlignet med asbestfibre.',
      solution: `**Fiber-paradigmet** beskriver sammenhengen mellom fibergeometri og lungeskade. Det ble først etablert for asbestfibre og sier at fibre som er **lange (> 15–20 µm), tynne (< 3 µm diameter) og biopersistente** (motstår nedbrytning i kroppen) kan forårsake kronisk inflammasjon, fibrose og kreft i lungene.

**Mekanismen:**

1. Lange fibre som inhaleres og deponeres i lungealveolene forsøkes fagocyttert (spist) av alveolære makrofager — kroppens førstelinjeforvar.
2. Makrofagene er typisk 10–15 µm i diameter. Hvis fiberen er **lengre enn makrofagen**, mislykkes fagocytosen — makrofagen kan ikke omslutte fiberen fullstendig. Dette kalles **frustrert fagocytose**.
3. Resultatet er at makrofagen dør og frigir pro-inflammatoriske signalstoffer og oksidative enzymer, som skader omkringliggende vev.
4. Nye makrofager rekrutteres, og syklusen gjentas → **kronisk inflammasjon** → fibrose → potensielt mesoteliom (lungehinnekreft).

**Asbestanalogien:**

I 2008 viste studier (Poland et al., Nature Nanotechnology) at lange, stive MWCNTs (> 20 µm) injisert i bukhinnen hos mus forårsaket de **samme patologiske responsene** som asbestfibre — granulomer, inflammasjon og fibrose. Korte MWCNTs og sammenfiltrede (krøllete) MWCNTs forårsaket ikke den samme responsen.

**Konklusjon:** Ikke alle karbonnanorør er farlige — det er den spesifikke kombinasjonen av **lang lengde, stiv struktur og biopersistens** som utgjør risikoen. Korte, funksjonaliserte eller sammenfiltrede CNTs ser ut til å ha lavere risikoprofil. Dette understreker at «nano er ikke nano» — egenskapene til et spesifikt nanomateriale avhenger kritisk av størrelse, form og overflatemodifikasjon.`,
    },
    {
      id: 'tof2-3-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-7-ex-1',
        number: '3.7.1',
        type: 'multiple-choice',
        task: 'Hvorfor er overflate-dose (overflateareal) ofte en bedre predikator for nanopartiklers toksisitet enn masse-dose?',
        options: [
          { id: 'a', text: 'Fordi nanopartikler veier mer enn makroskopiske partikler', isCorrect: false },
          { id: 'b', text: 'Fordi biologiske interaksjoner (ROS-generering, proteinadsorpsjon, celleopptak) skjer på partikkeloverflaten, og nanopartikler har enormt mye mer overflate per masseenhet', isCorrect: true },
          { id: 'c', text: 'Fordi overflate er lettere å måle enn masse i laboratoriet', isCorrect: false },
          { id: 'd', text: 'Fordi nanopartikler alltid har samme overflate uansett størrelse', isCorrect: false },
        ],
        solution: 'Riktig svar er B. De biologiske interaksjonene som driver nanopartiklers toksisitet — generering av reaktive oksygenarter (ROS), adsorpsjon av proteiner (proteincorona), interaksjon med cellemembraner og opptak i celler — skjer alle på partikkelens overflate. Nanopartikler har et enormt overflate-til-volum-forhold, slik at 1 mg nanopartikler kan ha hundrevis av ganger mer overflate enn 1 mg av det samme materialet som mikrometer-partikler. Dermed kan 1 mg nanopartikler være mye mer «biologisk aktive» enn 1 mg store partikler. A er feil — nanopartikler har lavere masse per partikkel. C er feil — overflate er faktisk vanskeligere å måle. D er feil — overflate per masseenhet varierer sterkt med størrelsen.',
      },
    },

    // --- BLOKK 2: Miljøpåvirkning ---
    {
      id: 'tof2-3-7-text-2',
      type: 'text',
      title: 'Miljøpåvirkning av nanomaterialer',
      content: `### Miljøpåvirkning av nanomaterialer

Etter hvert som produksjonen og bruken av nanomaterialer øker, havner stadig mer nanomateriale i miljøet — gjennom industrielt utslipp, slitasje av nanoteknologiske produkter, avfallshåndtering og direkte miljøanvendelser (som nZVI for grunnvannsrensing). Spørsmålet er: hva skjer med disse nanomaterialene i naturen?

**Kilder til nanomaterialer i miljøet**

- **Industrielle utslipp:** Fabrikker som produserer eller bruker nanomaterialer kan slippe ut partikler til luft og vann.
- **Produktslitasje:** Nanoteknologiske produkter (solkrem, maling, tekstiler med nanosølv, bildekk med nanosilika) frigir nanopartikler under bruk og vask.
- **Avløpsvann:** Nanosølv fra antibakterielle produkter og TiO₂ fra solkrem ender i avløpsvannet. Renseanlegg fjerner 90–99 % av nanopartiklene, men de konsentreres i kloakkslam som ofte spres på jordbruksareal.
- **Tilsiktet utslipp:** nZVI for grunnvannsrensing og nano-pesticider spres bevisst i miljøet.

**Skjebne i miljøet**

Nanomaterialers miljøskjebne bestemmes av prosesser som:
- **Aggregering:** Nanopartikler klumper seg sammen i naturlige medier (spesielt i saltvann), noe som endrer deres mobilitet og biotilgjengelighet.
- **Oppløsning:** Noen nanopartikler (f.eks. nanosølv, nanoZnO) løses opp over tid og frigir ioner som kan være toksiske.
- **Transformasjon:** Naturlige prosesser som oksidasjon, sulfidisering og binding til organisk materiale endrer nanomaterialenes overflateegenskaper og toksisitet.
- **Bioakkumulering:** Nanopartikler kan tas opp av organismer i næringskjeden — fra alger og vannlopper til fisk og fugl.

**Økotoksikologiske effekter**

Forskning har vist at nanomaterialer kan ha negative effekter på mange organismegrupper:
- **Akvatiske organismer:** Nanosølv er toksisk for fisk, alger og krepsdyr selv ved lave konsentrasjoner (µg/L). TiO₂-nanopartikler kan skade gjellene til fisk.
- **Jordorganismer:** Nanopartikler i jord kan påvirke meitemark, nematoder og jordmikrobiom — organismene som opprettholder jordhelsen.
- **Planter:** Nanopartikler kan tas opp av røttene og påvirke plantevekst — både positivt (noen nanogjødsel) og negativt (toksiske nanopartikler).`,
    },
    {
      id: 'tof2-3-7-def-2',
      type: 'definition',
      title: 'Føre-var-prinsippet',
      content: `**Føre-var-prinsippet** (precautionary principle) er et regulatorisk prinsipp som sier at dersom en handling eller teknologi kan forårsake alvorlig eller irreversibel skade på helse eller miljø, bør forebyggende tiltak iverksettes **selv om den vitenskapelige usikkerheten er stor**.

Anvendt på nanoteknologi innebærer føre-var-prinsippet at:
1. Nanomaterialer bør behandles som potensielt skadelige inntil det foreligger tilstrekkelig dokumentasjon for at de er trygge.
2. Produsenter bør ha **bevisbyrden** for å demonstrere sikkerhet — ikke samfunnet for å bevise skade.
3. Regulering bør tilpasses etter hvert som ny kunnskap om risiko blir tilgjengelig.
4. Mangel på vitenskapelig enighet skal ikke brukes som grunn til å utsette beskyttende tiltak.

Føre-var-prinsippet er forankret i Rio-erklæringen (1992) og er et sentralt prinsipp i EUs kjemikalieregulering (REACH).`,
    },
    {
      id: 'tof2-3-7-example-2',
      type: 'example',
      title: 'Eksempel: Nanosølv — nytte vs. risiko',
      problem: 'Nanosølv (AgNPs) er det mest kommersielt brukte nanomaterialet, med anvendelser i antibakterielle tekstiler, sårbandager, maling, kjøleskap og vaskemaskiner. Drøft balansen mellom nytte og miljørisiko ved utbredt bruk av nanosølv.',
      solution: `**Nytte:**
- Nanosølv er et **bredt spektrum antimikrobielt middel** som dreper bakterier, sopp og noen virus. Sølvioner (Ag⁺) frigis fra nanopartiklenes overflate og dreper mikroorganismer ved å skade cellemembranen, denaturere proteiner og interferere med DNA-replikasjon.
- Klinisk bruk i sårbandager (f.eks. Acticoat) er veldokumentert effektivt mot sårinfeksjoner.
- Kan redusere behovet for antibiotika — viktig i lys av antibiotikaresistens.

**Miljørisiko:**
- **Akvatisk toksisitet:** Nanosølv er svært toksisk for akvatiske organismer. LC50 (dødelig konsentrasjon for 50 % av testorganismene) for vannlopper (Daphnia magna) er ca. 1–10 µg/L — ekstremt lavt.
- **Antibiotika-resistens:** Det er bekymring for at utbredt bruk av nanosølv i hverdagsprodukter kan fremme resistensutvikling hos bakterier — på samme måte som overflødig antibrotikabruk.
- **Utslipp:** Studier viser at opptil 50 % av nanosølvet i tekstiler vaskes ut under de første vaskene. Renseanlegg fjerner mesteparten, men nanosølvet konsentreres i kloakkslam.
- **Økosystemeffekter:** Nanosølv i akvatiske miljøer kan forstyrre det mikrobielle samfunnet som er essensielt for økosystemfunksjoner som nedbrytning og nitrogensykling.

**Vurdering:**
Medisinsk bruk av nanosølv (sårbandager, medisinske instrumenter) er velbegrunnet — nytten er klar og eksponeringen er kontrollert. Bruk i hverdagsprodukter som sokker, kjøleskap og vaskemaskiner er mer problematisk — den antibakterielle nytten er ofte marginal, mens den kumulative miljøbelastningen kan bli betydelig. Føre-var-prinsippet tilsier at bruk i ikke-medisinske produkter bør begrenses inntil miljørisikoen er bedre forstått.`,
    },
    {
      id: 'tof2-3-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-7-ex-2',
        number: '3.7.2',
        type: 'multiple-choice',
        task: 'Hvilken prosess endrer primært nanopartiklers biologiske identitet når de kommer i kontakt med biologiske væsker?',
        options: [
          { id: 'a', text: 'Nanopartiklene løses opp umiddelbart i blodet', isCorrect: false },
          { id: 'b', text: 'Proteiner adsorberes på overflaten og danner en proteincorona som endrer hvordan kroppen oppfatter partikkelen', isCorrect: true },
          { id: 'c', text: 'Nanopartiklene krymper til enkeltatomstørrelse i biologiske medier', isCorrect: false },
          { id: 'd', text: 'Cellene endrer sin egen overflate for å tilpasse seg nanopartiklene', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Når nanopartikler kommer i kontakt med biologiske væsker (blod, lymfe, vevsvæsker), adsorberes proteiner umiddelbart på partikkelens overflate i løpet av sekunder til minutter. Denne «proteincorona» endrer nanopartikkelens biologiske identitet fundamentalt. Det er proteinacoronaen — ikke den opprinnelige syntetiske overflaten — som immunsystemets celler «ser». Proteinacoronaens sammensetning avgjør om partikkelen gjenkjennes av makrofager (og fjernes raskt) eller unnslipper immunforsvaret (og sirkulerer lenger). PEG-ylering fungerer nettopp ved å redusere proteinadsorpsjonen. A er feil — de fleste nanopartikler løses ikke opp raskt. C er fysisk umulig. D har ingen biologisk basis.',
      },
    },

    // --- BLOKK 3: Regulering og etikk ---
    {
      id: 'tof2-3-7-text-3',
      type: 'text',
      title: 'Regulering og etiske rammer',
      content: `### Regulering og etiske rammer

Hvordan bør samfunnet regulere en teknologi som er i rask utvikling, der risikovurderingen er ufullstendig, men potensialet er enormt? Dette er det sentrale regulatoriske dilemmaet for nanoteknologi.

**Regulatoriske utfordringer**

Eksisterende kjemikalieregulering (som REACH i EU og TSCA i USA) er primært basert på **kjemisk identitet** — et stoff reguleres basert på sin molekylformel. Men for nanomaterialer er det ikke bare den kjemiske sammensetningen som avgjør egenskapene og risikoen — **størrelse, form, krystallinitet, overflatebehandling og agglomereringstilstand** er minst like viktige.

TiO₂ illustrerer problemet: mikrometer-TiO₂ (i maling) og nanometer-TiO₂ (i solkrem) har samme kjemiske formel men helt forskjellige biologiske egenskaper. Bør de reguleres likt?

EU har ledet an i nanoregulering og definerte i 2022 «nanomaterial» som et materiale der 50 % eller mer av partiklene har minst én dimensjon mellom 1 og 100 nm. Denne definisjonen brukes i REACH, kosmetikkforordningen, matlovgivningen og biocidforordningen.

**Nanosikkerhet i praksis**

For arbeidstakere som håndterer nanomaterialer gjelder følgende hierarki av beskyttelsestiltak:

1. **Eliminering/substitusjon:** Kan nano unngås? Kan et mindre farlig nanomateriale brukes?
2. **Tekniske tiltak:** Lukkede systemer, avtrekksskap, HEPA-filtrering av luft
3. **Administrative tiltak:** Opplæring, prosedyrer, overvåking av eksponering
4. **Personlig verneutstyr:** Åndedrettsvern (FFP3), hansker (doble nitrilhansker), beskyttelsesbriller, heldress

**Etiske rammer — ELSA**

Forskningsfeltet **ELSA** (Ethical, Legal and Social Aspects) adresserer de bredere samfunnsmessige implikasjonene av nanoteknologi:

- **Rettferdighet:** Vil nanomedisinske gjennombrudd være tilgjengelige for alle, eller bare for velstående land og pasienter?
- **Personvern:** Nanosensorer kan muliggjøre overvåking — hvem kontrollerer dataene?
- **Informert samtykke:** Når nanopartikler finnes i forbrukerprodukter (mat, kosmetikk) — vet forbrukerne om det? Har de et reelt valg?
- **Generasjonsansvar:** Biopersistente nanomaterialer som akkumulerer i miljøet kan påvirke fremtidige generasjoner — hvem bærer ansvaret?
- **Dual use:** Nanoteknologi som utvikles for fredelige formål (medisin, energi) kan potensielt misbrukes (overvåking, militære formål).`,
    },
    {
      id: 'tof2-3-7-def-3',
      type: 'definition',
      title: 'Safe-by-design',
      content: `**Safe-by-design** (trygghet ved design) er en strategi for å integrere sikkerhets- og miljøhensyn **allerede i designfasen** av nye nanomaterialer, i stedet for å vurdere risiko først etter at materialet er utviklet.

Prinsipper:
1. **Reduser farlighet:** Velg materialer med lavere iboende toksisitet (f.eks. jernoksid fremfor kadmiumselenid for kvanteprikker).
2. **Kontroller eksponering:** Design produkter som minimerer frigjøring av frie nanopartikler (f.eks. nanopartikler bundet i en matrise fremfor fritt pulver).
3. **Funksjonsbevarelse:** Sikkerhetstiltakene skal ikke gå på bekostning av materialets funksjon — det er en optimeringsutfordring.
4. **Livssyklustenkning:** Vurder risiko gjennom hele livssyklusen — fra syntese via bruk til avfallshåndtering.

Safe-by-design representerer et paradigmeskifte fra «utvikle først, vurder risiko etterpå» til **«innbygg sikkerhet fra starten»**.`,
    },
    {
      id: 'tof2-3-7-example-3',
      type: 'example',
      title: 'Eksempel: Safe-by-design av kvanteprikker',
      problem: 'Tradisjonelle kvanteprikker for medisinsk avbildning er basert på kadmiumselenid (CdSe), som er svært giftig. Forklar hvordan safe-by-design-prinsippet kan anvendes for å utvikle tryggere alternativer.',
      solution: `**Problemet:** CdSe-kvanteprikker har utmerkede optiske egenskaper, men kadmium er et av de mest toksiske tungmetallene. Det akkumulerer i kroppen (spesielt nyrer og lever), er kreftfremkallende og kan forårsake nyreskade ved svært lave doser. Selv med beskyttende skall (f.eks. ZnS) er det risiko for at skallet degraderes over tid og frigir Cd²⁺-ioner.

**Safe-by-design-tilnærming:**

1. **Materialsubstitusjon:** Erstatt CdSe-kjernen med **ikke-toksiske alternativer**:
   - **InP (indiumfosfid)** — tilsvarende optiske egenskaper, men indium og fosfor er langt mindre toksiske enn kadmium og selen.
   - **Karbonkvanteprikker** (carbon dots) — laget av karbon, nitrogen og oksygen, som er biologisk kompatible. Mindre toksisk enn halvleder-QDs, men har foreløpig svakere optiske egenskaper.
   - **Si-kvanteprikker** — silisium er biologisk nedbrytbart og atoksisk.

2. **Robuste skall:** Hvis CdSe brukes, design **tykkere og mer stabile ZnS/SiO₂-dobbeltskall** som forhindrer Cd-lekkasje under fysiologiske betingelser.

3. **Overflatemodifisering:** PEG-ylering og polymerkoating reduserer cellulært opptak og forlenger sirkulasjonstiden, slik at kroppen kan skille ut partiklene via nyrene før eventuelle skall degraderes.

4. **Livssyklusvurdering:** Vurder hele livssyklusen — fra syntese (arbeidsmiljørisiko ved håndtering av Cd-prekursorer) via klinisk bruk (skjebne i kroppen) til avfallshåndtering (Cd i miljøet).

InP/ZnS-kvanteprikker er nå foretrukket i ny forskning og har nesten matchet CdSe i optiske egenskaper — et eksempel på at safe-by-design kan lykkes uten vesentlig tap av funksjon.`,
    },
    {
      id: 'tof2-3-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-7-ex-3',
        number: '3.7.3',
        type: 'multiple-choice',
        task: 'Hva innebærer «safe-by-design»-prinsippet for nanomaterialer?',
        options: [
          { id: 'a', text: 'At nanomaterialer kun testes for sikkerhet etter at de er ferdig utviklet og produsert', isCorrect: false },
          { id: 'b', text: 'At sikkerhet og miljøhensyn integreres allerede i designfasen av nye nanomaterialer', isCorrect: true },
          { id: 'c', text: 'At alle nanomaterialer automatisk er trygge på grunn av deres lille størrelse', isCorrect: false },
          { id: 'd', text: 'At forskning på nanomaterialer forbys inntil alle risikoer er kartlagt', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Safe-by-design er en proaktiv strategi der sikkerhets- og miljøhensyn bygges inn i selve utviklingsprosessen for nye nanomaterialer — fra valg av råmaterialer til design av produktet som inneholder dem. Eksempler inkluderer å velge ikke-toksiske alternativer (InP i stedet for CdSe), designe robuste innkapslingssystemer, og vurdere hele livssyklusen. A beskriver den tradisjonelle tilnærmingen som safe-by-design nettopp ønsker å forbedre. C er feil — liten størrelse gir tvert imot nye risikoer. D er feil — prinsippet er ikke å stoppe forskning, men å gjøre den tryggere.',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof2-3-7-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Nanotoksikologi** studerer nanomaterialers potensielle skadeeffekter. De samme egenskapene som gjør nanomaterialer nyttige (liten størrelse, stor overflate, høy reaktivitet) kan også gjøre dem skadelige.
- De viktigste **eksponeringsveiene** er innånding, hudkontakt og svelging. Innånding er mest bekymringsfullt fordi nanopartikler kan nå dypt inn i lungene.
- **Toksisitetsmekanismer** inkluderer oksidativt stress (ROS), inflammasjon, proteincorona-effekter og trojanerhest-mekanismen.
- **Fiber-paradigmet** viser at lange, stive nanofibre (som visse karbonnanorør) kan oppføre seg som asbest i lungene.
- **Miljøpåvirkning** er bekymringsfullt: nanosølv er toksisk for akvatiske organismer, og nanopartikler kan bioakkumulere i næringskjeden.
- **Føre-var-prinsippet** sier at nanomaterialer bør behandles som potensielt skadelige inntil sikkerhet er dokumentert.
- **Regulering** er utfordrende fordi egenskapene avhenger av mer enn kjemisk sammensetning — størrelse, form og overflatebehandling er avgjørende.
- **Safe-by-design** integrerer sikkerhet allerede i designfasen — eksempel: erstatte giftige CdSe-kvanteprikker med InP eller karbon-baserte alternativer.
- **ELSA-perspektivet** reiser spørsmål om rettferdighet, personvern, informert samtykke og generasjonsansvar.`,
    },

    // --- Samleoppgave ---
    {
      id: 'tof2-3-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-3-7-ex-4',
        number: '3.7.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En bedrift ønsker å markedsføre nanosølv-belagte treningssokker som «luktfrie og antibakterielle». Du er bedt om å skrive en risikovurdering. Drøft (a) den antibakterielle nytten, (b) potensielle helse- og miljørisikoer gjennom produktets livssyklus, (c) regulatoriske krav (med fokus på EU/Norge), og (d) gi din anbefaling basert på føre-var-prinsippet.',
        hints: ['Tenk på hele livssyklusen: produksjon, bruk (svette, hudkontakt), vask (utslipp til avløp), og avfallshåndtering. Hvem eksponeres?'],
        solution: '**(a) Antibakteriell nytte:**\nNanosølv dreper bakterier effektivt ved å frigi Ag⁺-ioner som skader cellemembranen, denaturerer proteiner og interfererer med DNA-replikasjon. I treningssokker kan dette redusere bakteriell nedbrytning av svette og dermed lukt. Nytten er reell men begrenset — luktreduksjon er en komfortegenskap, ikke et medisinsk behov.\n\n**(b) Helse- og miljørisikoer gjennom livssyklusen:**\n- **Produksjon:** Arbeidstakere kan eksponeres for nanosølv via innånding under produksjonsprosessen. Nødvendig med lukkede systemer og verneutstyr.\n- **Bruk:** Nanosølv er i direkte kontakt med hud (fotsvette, eventuelt skadet hud/blemmer). Selv om intakt hud er en barriere, kan skadet hud tillate penetrasjon. Sølvallergi er også en risiko.\n- **Vask:** Studier viser at 20–50 % av nanosølvet vaskes ut under de første vaskene. Avløpsvannet fører nanosølv til renseanlegg, der det delvis fjernes men konsentreres i kloakkslam som spres på jordbruksareal.\n- **Akvatisk miljø:** Nanosølv som passerer renseanlegget kan være toksisk for akvatiske organismer ved svært lave konsentrasjoner (µg/L). Kan forstyrre mikrobielle økosystemtjenester.\n- **Antibiotikaresistens:** Kronisk lavdose sølveksponering kan selektere for sølvresistente bakterier, med potensielle koresistensmekanismer mot antibiotika.\n- **Avfall:** Ved endt levetid havner sokkene i avfallskjeden — forbrenning eller deponi — med usikker skjebne for nanosølvet.\n\n**(c) Regulatoriske krav:**\n- EU: Nanosølv er regulert som et biocid under Biocidforordningen (BPR, EU 528/2012). Produktet trenger biocidgodkjenning. Aktivstoffet nanoform av sølv er godkjent i enkelte produkttyper men underlagt strenge krav til risikovurdering.\n- REACH: Nanomaterialer skal registreres separat med nanoform-spesifikke data (partikkelstørrelse, overflateareal, osv.).\n- Merking: EU krever at nanomaterialer i kosmetikk og mat merkes med «(nano)» — lignende krav kan gjelde for tekstiler.\n- Norge følger EUs regelverk gjennom EØS-avtalen.\n\n**(d) Anbefaling:**\nBasert på føre-var-prinsippet anbefaler jeg **at produktet ikke markedsføres i denne formen.** Begrunnelse: Nytten (luktreduksjon i treningssokker) er marginal og kan oppnås med andre, mindre problematiske metoder (hyppigere vask, syntetiske antibakterielle tekstilfibre uten nanopartikkelfrigjøring). Risikoene (miljøutslipp av toksisk nanosølv, potensiell antibiotikaresistens, hudeksponering) er reelle og dårlig kvantifiserte. Føre-var-prinsippet tilsier at produkter med potensielt alvorlige miljøkonsekvenser og marginal nytte bør unngås. Nanosølv bør reserveres for medisinske anvendelser der nytten er klar og eksponeringen kan kontrolleres.',
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

export const TOF_2_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TOF_2_3_1,
  CHAPTER_TOF_2_3_2,
  CHAPTER_TOF_2_3_3,
  CHAPTER_TOF_2_3_4,
  CHAPTER_TOF_2_3_5,
  CHAPTER_TOF_2_3_6,
  CHAPTER_TOF_2_3_7,
];