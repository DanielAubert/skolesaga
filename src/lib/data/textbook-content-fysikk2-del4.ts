/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Fysikk 2 VG3 DEL 4
 * Seksjon 7: Kvantefysikk (7.1-7.6)
 *
 * Dekker LK20-kompetansemål for fysikk 2 (FYS02-02)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Fotoelektrisk effekt og fotoner
// ============================================================================

export const CHAPTER_FYSIKK2_7_1: TextbookChapter = {
  id: 'fysikk2-7-1',
  courseId: 'fysikk2',
  chapterNumber: '7.1',
  title: 'Fotoelektrisk effekt og fotoner',
  description:
    'Lær om den fotoelektriske effekten, Plancks kvantehypotese og Einsteins fotonmodell som revolusjonerte fysikken.',
  estimatedMinutes: 90,
  competenceGoals: [
    'gjøre rede for fotoelektrisk effekt og fotonmodellen',
    'bruke sammenhengen mellom fotonenergi, frekvens og bølgelengde',
    'beregne kinetisk energi for fotoelektroner',
    'forklare hvorfor bølgemodellen ikke kan forklare fotoelektrisk effekt',
  ],
  content: [
    {
      id: 'fys2-7-1-intro',
      type: 'text',
      content: `# Fotoelektrisk effekt og fotoner

Mot slutten av 1800-tallet mente mange fysikere at fysikken var «ferdig». Newtons mekanikk forklarte bevegelse, Maxwells ligninger forklarte elektromagnetisme, og termodynamikken forklarte varme. Men det fantes noen uløste gåter som skulle vise seg å revolusjonere hele fysikken.

En av disse gåtene var **svartlegemestråling** — hvordan oppvarmede objekter sender ut lys. En annen var den **fotoelektriske effekten** — at lys kan slå løs elektroner fra en metalloverflate. Løsningen på disse problemene førte til fødselen av **kvantefysikken**, en helt ny måte å forstå naturen på.

## Bakgrunn: Svartlegemestråling og Plancks kvantehypotese

Et **svartlegeme** (idealisert objekt) absorberer all innkommende stråling og sender ut stråling avhengig av temperaturen. Klassisk fysikk forutsa at strålingsenergien skulle bli uendelig stor ved korte bølgelengder — den såkalte **ultrafiolettkatastrofen**.

I år 1900 foreslo den tyske fysikeren **Max Planck** en revolusjonerende idé for å løse dette problemet: Energien i elektromagnetisk stråling er **kvantisert**. Det betyr at energien ikke kan ha hvilken som helst verdi, men kun opptrer i bestemte «pakker» — **kvanter**.`,
    },
    {
      id: 'fys2-7-1-planck',
      type: 'theorem',
      title: 'Plancks kvantehypotese',
      content: `Energien til elektromagnetisk stråling med frekvens $f$ kan bare ha verdier som er hele multipler av en minste energiporsjon:

$$E = nhf$$

der:
- $n$ er et positivt heltall ($n = 1, 2, 3, \\ldots$)
- $h = 6{,}626 \\times 10^{-34}$ J·s er **Plancks konstant**
- $f$ er strålingens frekvens i Hz

Den minste energiporsjonen ($n=1$) kalles et **kvant**: $E_{\\text{kvant}} = hf$.`,
    },
    {
      id: 'fys2-7-1-fotoelektrisk',
      type: 'text',
      content: `## Den fotoelektriske effekten

I 1887 oppdaget Heinrich Hertz at ultrafiolett lys som treffer en metallplate kan frigjøre elektroner fra overflaten. Dette fenomenet kalles den **fotoelektriske effekten**.

### Eksperimentelt oppsett

Tenk deg en metallplate i vakuum som belyses med lys. Når lyset treffer platen, kan elektroner bli slått løs. Disse kalles **fotoelektroner**. Ved å samle opp elektronene med en positiv motpart (anoden) kan man måle en elektrisk strøm — **fotostrømmen**.

### Eksperimentelle observasjoner

Forskere gjorde flere overraskende observasjoner:

1. **Grensefrekvens**: Det finnes en minste frekvens $f_0$ (grensefrekvensen) som lyset må ha for at elektroner skal frigjøres. Under denne frekvensen skjer det ingenting, uansett hvor sterk lysintensiteten er.

2. **Intensitet påvirker ikke elektronenes energi**: Sterkere lys gir flere fotoelektroner (større strøm), men ikke raskere elektroner. Elektronenes kinetiske energi avhenger bare av lysets frekvens.

3. **Umiddelbar respons**: Elektronene frigjøres praktisk talt momentant, uten merkbar tidsforsinkelse, selv ved svært svak belysning.

4. **Økt frekvens gir raskere elektroner**: Lys med høyere frekvens (kortere bølgelengde) gir fotoelektroner med høyere kinetisk energi.`,
    },
    {
      id: 'fys2-7-1-bolgemodell-feil',
      type: 'text',
      content: `## Hvorfor bølgemodellen svikter

Den klassiske bølgemodellen for lys kan **ikke** forklare disse observasjonene:

| Observasjon | Bølgemodellen forutsier | Eksperimentet viser |
|---|---|---|
| Grensefrekvens | Alle frekvenser burde fungere (gitt nok intensitet) | Det finnes en klar grensefrekvens |
| Intensitet | Sterkere lys → raskere elektroner | Sterkere lys → flere, men ikke raskere elektroner |
| Tidsforsinkelse | Svakt lys → lang oppsamlingstid | Ingen merkbar forsinkelse |
| Frekvens | Energi avhenger av intensitet, ikke frekvens | Energi øker med frekvens |

Ifølge bølgemodellen burde energien i en lysbølge fordele seg jevnt over hele bølgefronten. Et svakt lys ville da gradvis overføre energi til et elektron, og det ville ta tid før elektronet hadde nok energi til å forlate metallet. Men eksperimentet viser at elektroner frigjøres umiddelbart!

Bølgemodellen kan heller ikke forklare grensefrekvensen. Hvis lys er en bølge, burde et tilstrekkelig sterkt lys med lav frekvens til slutt frigjøre elektroner — men det gjør det ikke.`,
    },
    {
      id: 'fys2-7-1-einstein',
      type: 'text',
      content: `## Einsteins fotonmodell (1905)

I 1905 publiserte **Albert Einstein** en artikkel der han forklarte den fotoelektriske effekten ved å utvide Plancks idé. Einstein foreslo at lys ikke bare er en bølge, men også kan betraktes som en strøm av **partikler** — **fotoner**.

Hver foton bærer en bestemt mengde energi som kun avhenger av lysets frekvens. Når en foton treffer et elektron i metallet, overfører den all sin energi til elektronet i én enkelt prosess. Hvis fotonens energi er stor nok, kan elektronet frigjøres fra metalloverflaten.

### Einsteins forklaring punkt for punkt

- **Grensefrekvens**: Fotonet må ha nok energi ($hf$) til å overvinne bindingsenergien i metallet. Under grensefrekvensen har hvert foton for lite energi, uansett hvor mange fotoner det er.
- **Intensitet**: Flere fotoner betyr flere fotoelektroner (mer strøm), men hvert foton overfører like mye energi.
- **Ingen tidsforsinkelse**: Energioverføringen skjer i ett trinn — ett foton gir all sin energi til ett elektron.
- **Frekvensavhengighet**: Høyere frekvens betyr mer energi per foton, altså mer kinetisk energi for elektronet.

Einstein fikk **Nobelprisen i fysikk i 1921** for denne forklaringen — ikke for relativitetsteorien som mange tror!`,
    },
    {
      id: 'fys2-7-1-fotonenergi',
      type: 'formula',
      title: 'Fotonenergi',
      latex: `E = hf = \\frac{hc}{\\lambda}`,
      description: `Energien til et foton med frekvens $f$ og bølgelengde $\\lambda$. Her er $h = 6{,}626 \\times 10^{-34}$ J·s (Plancks konstant) og $c = 3{,}00 \\times 10^8$ m/s (lyshastigheten).`,
    },
    {
      id: 'fys2-7-1-arbeidsfunksjon',
      type: 'definition',
      title: 'Arbeidsfunksjon',
      content: `**Arbeidsfunksjonen** $W_0$ er den minste energien som trengs for å frigjøre et elektron fra metalloverflaten. Den måles i joule (J) eller elektronvolt (eV).

Arbeidsfunksjonen avhenger av metalltypen:

| Metall | $W_0$ (eV) |
|---|---|
| Kalium (K) | 2,30 |
| Natrium (Na) | 2,75 |
| Sink (Zn) | 4,33 |
| Kobber (Cu) | 4,65 |
| Platina (Pt) | 5,65 |

**Enhetsomregning**: $1 \\text{ eV} = 1{,}602 \\times 10^{-19}$ J

Metaller med lav arbeidsfunksjon (som alkalimetaller) frigjør elektroner lettere.`,
    },
    {
      id: 'fys2-7-1-einsteins-ligning',
      type: 'theorem',
      title: 'Einsteins ligning for fotoelektrisk effekt',
      content: `Når et foton med energi $E = hf$ treffer et elektron i metallet, brukes en del av energien til å frigjøre elektronet (arbeidsfunksjonen $W_0$), og resten blir kinetisk energi:

$$E_k = hf - W_0$$

der:
- $E_k = \\frac{1}{2}mv^2$ er den maksimale kinetiske energien til fotoelektronet
- $hf$ er fotonets energi
- $W_0$ er metallets arbeidsfunksjon

**Betingelse for fotoelektrisk effekt**: $hf \\geq W_0$, altså $f \\geq f_0$

Der $f_0 = \\frac{W_0}{h}$ er **grensefrekvensen** — den laveste frekvensen som kan frigjøre elektroner.`,
    },
    {
      id: 'fys2-7-1-stoppespenning',
      type: 'text',
      content: `## Stoppespenning

For å måle den maksimale kinetiske energien til fotoelektronene kan man legge på en **bremse-spenning** $V_0$ (stoppespenningen) mellom metallplaten og anoden. Denne spenningen bremser elektronene. Når spenningen er akkurat stor nok til at ingen elektroner når anoden, har vi:

$$eV_0 = E_{k,\\text{maks}} = hf - W_0$$

der $e = 1{,}602 \\times 10^{-19}$ C er elementærladningen.

Ved å måle stoppespenningen $V_0$ for ulike frekvenser $f$ kan man:
- Bestemme Plancks konstant $h$ fra stigningstallet i en $V_0$-mot-$f$-graf
- Bestemme arbeidsfunksjonen $W_0$ fra skjæringspunktet med y-aksen

Grafen $V_0$ mot $f$ gir en rett linje med stigningstall $\\frac{h}{e}$ og $y$-skjæringspunkt $-\\frac{W_0}{e}$.`,
    },
    {
      id: 'fys2-7-1-formula-stoppespenning',
      type: 'formula',
      title: 'Stoppespenning',
      latex: `eV_0 = hf - W_0`,
      description: `Sammenhengen mellom stoppespenningen $V_0$, fotonets frekvens $f$ og metallets arbeidsfunksjon $W_0$. Her er $e$ elementærladningen.`,
    },
    {
      id: 'fys2-7-1-grensefrekvens',
      type: 'formula',
      title: 'Grensefrekvens og grensebølgelengde',
      latex: `f_0 = \\frac{W_0}{h} \\qquad \\lambda_0 = \\frac{hc}{W_0}`,
      description: `Grensefrekvensen $f_0$ og grensebølgelengden $\\lambda_0$ for den fotoelektriske effekten. Lys med frekvens under $f_0$ (eller bølgelengde over $\\lambda_0$) kan ikke frigjøre elektroner fra metallet.`,
    },
    {
      id: 'fys2-7-1-example1',
      type: 'example',
      title: 'Eksempel 1: Fotonenergi for synlig lys',
      problem: `Beregn energien til et foton med bølgelengde $\\lambda = 550$ nm (grønt lys). Oppgi svaret i joule og i elektronvolt.`,
      solution: `**Gitt:** $\\lambda = 550 \\text{ nm} = 550 \\times 10^{-9}$ m

**Formler:** $E = \\frac{hc}{\\lambda}$ og $1 \\text{ eV} = 1{,}602 \\times 10^{-19}$ J

**Beregning:**

$$E = \\frac{hc}{\\lambda} = \\frac{6{,}626 \\times 10^{-34} \\cdot 3{,}00 \\times 10^8}{550 \\times 10^{-9}}$$

$$E = \\frac{1{,}988 \\times 10^{-25}}{550 \\times 10^{-9}} = 3{,}61 \\times 10^{-19} \\text{ J}$$

Omregning til elektronvolt:

$$E = \\frac{3{,}61 \\times 10^{-19}}{1{,}602 \\times 10^{-19}} = 2{,}25 \\text{ eV}$$

**Svar:** Energien til et grønt foton er $3{,}61 \\times 10^{-19}$ J $= 2{,}25$ eV.`,
    },
    {
      id: 'fys2-7-1-example2',
      type: 'example',
      title: 'Eksempel 2: Fotoelektrisk effekt for natrium',
      problem: `Natrium har arbeidsfunksjon $W_0 = 2{,}75$ eV. Lys med bølgelengde $\\lambda = 400$ nm treffer en natriumoverflate.

a) Vil det frigjøres fotoelektroner?
b) Hva er den maksimale kinetiske energien til fotoelektronene?
c) Hva er stoppespenningen?`,
      solution: `**Gitt:** $W_0 = 2{,}75$ eV, $\\lambda = 400$ nm $= 400 \\times 10^{-9}$ m

**a) Sjekk om fotoelektrisk effekt oppstår:**

Fotonets energi:
$$E = \\frac{hc}{\\lambda} = \\frac{6{,}626 \\times 10^{-34} \\cdot 3{,}00 \\times 10^8}{400 \\times 10^{-9}} = 4{,}97 \\times 10^{-19} \\text{ J} = 3{,}10 \\text{ eV}$$

Siden $E = 3{,}10 \\text{ eV} > W_0 = 2{,}75 \\text{ eV}$, **ja**, det frigjøres fotoelektroner.

**b) Maksimal kinetisk energi:**

$$E_k = hf - W_0 = 3{,}10 - 2{,}75 = 0{,}35 \\text{ eV}$$

$$E_k = 0{,}35 \\times 1{,}602 \\times 10^{-19} = 5{,}6 \\times 10^{-20} \\text{ J}$$

**c) Stoppespenning:**

$$eV_0 = E_k \\implies V_0 = \\frac{E_k}{e} = \\frac{0{,}35 \\text{ eV}}{e} = 0{,}35 \\text{ V}$$

**Svar:** a) Ja. b) $E_k = 0{,}35$ eV $= 5{,}6 \\times 10^{-20}$ J. c) $V_0 = 0{,}35$ V.`,
    },
    {
      id: 'fys2-7-1-example3',
      type: 'example',
      title: 'Eksempel 3: Grensefrekvens og grensebølgelengde',
      problem: `Sink har arbeidsfunksjon $W_0 = 4{,}33$ eV. Beregn grensefrekvensen og grensebølgelengden for sink. Hvilken type lys (synlig, UV, IR) trengs?`,
      solution: `**Gitt:** $W_0 = 4{,}33$ eV $= 4{,}33 \\times 1{,}602 \\times 10^{-19} = 6{,}94 \\times 10^{-19}$ J

**Grensefrekvens:**
$$f_0 = \\frac{W_0}{h} = \\frac{6{,}94 \\times 10^{-19}}{6{,}626 \\times 10^{-34}} = 1{,}05 \\times 10^{15} \\text{ Hz}$$

**Grensebølgelengde:**
$$\\lambda_0 = \\frac{c}{f_0} = \\frac{3{,}00 \\times 10^8}{1{,}05 \\times 10^{15}} = 2{,}87 \\times 10^{-7} \\text{ m} = 287 \\text{ nm}$$

Synlig lys har bølgelengder mellom 400 nm og 700 nm. Siden $\\lambda_0 = 287$ nm er kortere enn synlig lys, trengs det **ultrafiolett (UV) stråling** for å frigjøre elektroner fra sink.

**Svar:** $f_0 = 1{,}05 \\times 10^{15}$ Hz, $\\lambda_0 = 287$ nm. Det trengs UV-stråling.`,
    },
    {
      id: 'fys2-7-1-example4',
      type: 'example',
      title: 'Eksempel 4: Bestemme Plancks konstant fra graf',
      problem: `I et forsøk med fotoelektrisk effekt måles stoppespenningen $V_0$ for ulike frekvenser $f$. Resultatene gir en rett linje med stigningstall $4{,}14 \\times 10^{-15}$ V·s og krysser $f$-aksen ved $f_0 = 5{,}50 \\times 10^{14}$ Hz.

a) Bestem Plancks konstant fra målingene.
b) Bestem arbeidsfunksjonen til metallet.`,
      solution: `**a) Plancks konstant:**

Fra Einsteins ligning: $V_0 = \\frac{h}{e}f - \\frac{W_0}{e}$

Stigningstallet er $\\frac{h}{e}$:

$$\\frac{h}{e} = 4{,}14 \\times 10^{-15} \\text{ V·s}$$

$$h = e \\times 4{,}14 \\times 10^{-15} = 1{,}602 \\times 10^{-19} \\times 4{,}14 \\times 10^{-15}$$

$$h = 6{,}63 \\times 10^{-34} \\text{ J·s}$$

Dette stemmer godt med den kjente verdien $h = 6{,}626 \\times 10^{-34}$ J·s.

**b) Arbeidsfunksjonen:**

Ved grensefrekvensen $f_0$ er $V_0 = 0$:

$$W_0 = hf_0 = 6{,}63 \\times 10^{-34} \\times 5{,}50 \\times 10^{14} = 3{,}65 \\times 10^{-19} \\text{ J}$$

$$W_0 = \\frac{3{,}65 \\times 10^{-19}}{1{,}602 \\times 10^{-19}} = 2{,}28 \\text{ eV}$$

**Svar:** a) $h \\approx 6{,}63 \\times 10^{-34}$ J·s. b) $W_0 \\approx 2{,}28$ eV (dette tilsvarer kalium).`,
    },
    {
      id: 'fys2-7-1-note-eV',
      type: 'note',
      title: 'Huskeregel: Elektronvolt',
      content: `**Elektronvolt (eV)** er en praktisk energienhet i atom- og kvantefysikk:

$$1 \\text{ eV} = 1{,}602 \\times 10^{-19} \\text{ J}$$

Et elektronvolt er den kinetiske energien et elektron får når det akselereres gjennom en potensialdifferanse på 1 volt.

**Nyttig huskeregel:** For å beregne fotonenergi i eV kan du bruke:

$$E = \\frac{1240 \\text{ eV·nm}}{\\lambda \\text{ (i nm)}}$$

F.eks. for $\\lambda = 500$ nm: $E = 1240/500 = 2{,}48$ eV.`,
    },
    {
      id: 'fys2-7-1-warning1',
      type: 'warning',
      title: 'Vanlige feil',
      content: `**Feil 1:** Å tro at sterkere lys gir raskere fotoelektroner.
→ Intensitet bestemmer *antallet* fotoner, ikke energien per foton. Elektronenes kinetiske energi avhenger kun av frekvensen.

**Feil 2:** Å glemme å konvertere mellom eV og joule.
→ Bruk $1 \\text{ eV} = 1{,}602 \\times 10^{-19}$ J. Vær nøye med enheter.

**Feil 3:** Å bruke $E = hf$ og glemme å trekke fra arbeidsfunksjonen.
→ Fotoelektronets kinetiske energi er $E_k = hf - W_0$, **ikke** $E_k = hf$.

**Feil 4:** Å forveksle nanometer og meter.
→ $1 \\text{ nm} = 10^{-9}$ m. Husk å konvertere bølgelengder.`,
    },
    {
      id: 'fys2-7-1-historisk',
      type: 'note',
      title: 'Historisk kontekst',
      content: `**Tidslinje for kvantefysikkens begynnelse:**

- **1887**: Heinrich Hertz oppdager fotoelektrisk effekt under eksperimenter med radiobølger.
- **1900**: Max Planck foreslår kvantehypotesen for å forklare svartlegemestråling.
- **1902**: Philipp Lenard utfører detaljerte eksperimenter og viser at elektronenes energi avhenger av lysets frekvens, ikke intensitet.
- **1905**: Albert Einstein publiserer fotonmodellen og forklarer den fotoelektriske effekten.
- **1916**: Robert Millikan bekrefter Einsteins teori eksperimentelt og bestemmer $h$ nøyaktig.
- **1921**: Einstein tildeles Nobelprisen i fysikk for forklaringen av fotoelektrisk effekt.

Einsteins artikkel fra 1905 kalles «annus mirabilis»-året hans, da han også publiserte spesiell relativitetsteori og Brown-bevegelse.`,
    },
    {
      id: 'fys2-7-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Nøkkelpunkter:**
- Lys består av fotoner, hver med energi $E = hf = \\frac{hc}{\\lambda}$.
- Fotoelektrisk effekt: Et foton overfører all sin energi til ett elektron.
- Einsteins ligning: $E_k = hf - W_0$.
- Grensefrekvens: $f_0 = W_0/h$ — under denne frekvensen frigjøres ingen elektroner.
- Stoppespenning: $eV_0 = hf - W_0$.
- Bølgemodellen kan ikke forklare fotoelektrisk effekt — fotonmodellen er nødvendig.`,
    },
  ],
  exercises: [
    {
      id: 'fys2-7-1-ex1',
      type: 'classic',
      difficulty: 'lett',
      task: `Beregn energien til et foton med bølgelengde $\\lambda = 650$ nm (rødt lys). Oppgi svaret i både joule og elektronvolt.`,
      hints: ['Bruk $E = hc/\\lambda$', 'Husk å konvertere nm til m: $1 \\text{ nm} = 10^{-9}$ m'],
      solution: `$E = \\frac{hc}{\\lambda} = \\frac{6{,}626 \\times 10^{-34} \\times 3{,}00 \\times 10^8}{650 \\times 10^{-9}} = 3{,}06 \\times 10^{-19}$ J $= \\frac{3{,}06 \\times 10^{-19}}{1{,}602 \\times 10^{-19}} = 1{,}91$ eV.`,
    },
    {
      id: 'fys2-7-1-ex2',
      type: 'classic',
      difficulty: 'lett',
      task: `Hva er frekvensen til et foton med energi $E = 3{,}00$ eV?`,
      hints: ['Konverter først til joule', 'Bruk $f = E/h$'],
      solution: `$E = 3{,}00 \\times 1{,}602 \\times 10^{-19} = 4{,}81 \\times 10^{-19}$ J. $f = E/h = 4{,}81 \\times 10^{-19} / 6{,}626 \\times 10^{-34} = 7{,}25 \\times 10^{14}$ Hz.`,
    },
    {
      id: 'fys2-7-1-ex3',
      type: 'classic',
      difficulty: 'lett',
      task: `Forklar med egne ord hvorfor den klassiske bølgemodellen ikke kan forklare den fotoelektriske effekten. Nevn minst to eksperimentelle observasjoner som bølgemodellen ikke kan redegjøre for.`,
      solution: `Bølgemodellen kan ikke forklare: (1) Grensefrekvensen — ifølge bølgemodellen burde et tilstrekkelig sterkt lys med hvilken som helst frekvens kunne frigjøre elektroner, men eksperimentet viser at det finnes en grensefrekvens. (2) Ingen tidsforsinkelse — bølgemodellen forutsier at det tar tid å samle opp nok energi ved svak belysning, men elektronene frigjøres umiddelbart. (3) Elektronenes kinetiske energi avhenger av frekvensen, ikke intensiteten, noe bølgemodellen ikke kan forklare.`,
    },
    {
      id: 'fys2-7-1-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: `Kalium har arbeidsfunksjon $W_0 = 2{,}30$ eV. Lys med bølgelengde $\\lambda = 450$ nm treffer en kaliumoverflate.

a) Beregn fotonets energi i eV.
b) Vil det frigjøres fotoelektroner?
c) Beregn den maksimale kinetiske energien til fotoelektronene.
d) Finn stoppespenningen.`,
      hints: ['Bruk $E = hc/\\lambda$', 'Sammenlign fotonets energi med arbeidsfunksjonen', 'Bruk $E_k = hf - W_0$'],
      solution: `a) $E = \\frac{hc}{\\lambda} = \\frac{6{,}626 \\times 10^{-34} \\times 3{,}00 \\times 10^8}{450 \\times 10^{-9}} = 4{,}42 \\times 10^{-19}$ J $= 2{,}76$ eV.
b) Ja, $E = 2{,}76$ eV $> W_0 = 2{,}30$ eV.
c) $E_k = 2{,}76 - 2{,}30 = 0{,}46$ eV $= 7{,}4 \\times 10^{-20}$ J.
d) $V_0 = E_k/e = 0{,}46$ V.`,
    },
    {
      id: 'fys2-7-1-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: `Beregn grensefrekvensen og grensebølgelengden for kobber ($W_0 = 4{,}65$ eV). Er synlig lys tilstrekkelig til å frigjøre elektroner fra kobber?`,
      hints: ['$f_0 = W_0/h$', '$\\lambda_0 = c/f_0$', 'Synlig lys: $\\lambda = 400$–$700$ nm'],
      solution: `$W_0 = 4{,}65 \\times 1{,}602 \\times 10^{-19} = 7{,}45 \\times 10^{-19}$ J. $f_0 = W_0/h = 7{,}45 \\times 10^{-19}/6{,}626 \\times 10^{-34} = 1{,}12 \\times 10^{15}$ Hz. $\\lambda_0 = c/f_0 = 3{,}00 \\times 10^8/1{,}12 \\times 10^{15} = 267$ nm. Synlig lys ($400$–$700$ nm) har for lang bølgelengde (for lav frekvens), så synlig lys er **ikke** tilstrekkelig. Det trengs UV-stråling.`,
    },
    {
      id: 'fys2-7-1-ex6',
      type: 'classic',
      difficulty: 'medium',
      task: `En metalloverflate belyses med UV-lys med frekvens $f = 1{,}20 \\times 10^{15}$ Hz. Stoppespenningen måles til $V_0 = 2{,}10$ V. Bestem arbeidsfunksjonen til metallet i eV.`,
      hints: ['Bruk $eV_0 = hf - W_0$', 'Løs for $W_0$'],
      solution: `$W_0 = hf - eV_0 = 6{,}626 \\times 10^{-34} \\times 1{,}20 \\times 10^{15} - 1{,}602 \\times 10^{-19} \\times 2{,}10 = 7{,}95 \\times 10^{-19} - 3{,}36 \\times 10^{-19} = 4{,}59 \\times 10^{-19}$ J $= 2{,}87$ eV.`,
    },
    {
      id: 'fys2-7-1-ex7',
      type: 'classic',
      difficulty: 'medium',
      task: `En UV-lampe sender ut lys med bølgelengde $\\lambda = 200$ nm og effekt $P = 2{,}0$ W. Hvor mange fotoner sender lampen ut per sekund?`,
      hints: ['Beregn energi per foton', 'Antall fotoner per sekund = $P/E$'],
      solution: `Energi per foton: $E = \\frac{hc}{\\lambda} = \\frac{6{,}626 \\times 10^{-34} \\times 3{,}00 \\times 10^8}{200 \\times 10^{-9}} = 9{,}94 \\times 10^{-19}$ J. Antall fotoner per sekund: $N = \\frac{P}{E} = \\frac{2{,}0}{9{,}94 \\times 10^{-19}} = 2{,}0 \\times 10^{18}$ fotoner/s.`,
    },
    {
      id: 'fys2-7-1-ex8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `I et forsøk med fotoelektrisk effekt på et ukjent metall, måles følgende stoppespenninger:

| Bølgelengde (nm) | Stoppespenning (V) |
|---|---|
| 300 | 1,85 |
| 400 | 0,82 |
| 500 | 0,18 |

a) Tegn en graf av $V_0$ mot $f$ og vis at målepunktene ligger på en rett linje.
b) Bestem Plancks konstant fra grafen.
c) Bestem metallets arbeidsfunksjon.
d) Bestem grensebølgelengden for metallet.`,
      hints: ['Konverter bølgelengder til frekvenser: $f = c/\\lambda$', 'Bruk lineær regresjon eller grafisk metode', 'Stigningstall = $h/e$'],
      solution: `Frekvenser: $f_1 = 3{,}00 \\times 10^8/300 \\times 10^{-9} = 1{,}00 \\times 10^{15}$ Hz, $f_2 = 7{,}50 \\times 10^{14}$ Hz, $f_3 = 6{,}00 \\times 10^{14}$ Hz.

b) Stigningstall: $(V_1 - V_3)/(f_1 - f_3) = (1{,}85 - 0{,}18)/(1{,}00 \\times 10^{15} - 6{,}00 \\times 10^{14}) = 1{,}67/4{,}00 \\times 10^{14} = 4{,}18 \\times 10^{-15}$ V·s. $h = e \\times 4{,}18 \\times 10^{-15} = 6{,}69 \\times 10^{-34}$ J·s $\\approx 6{,}63 \\times 10^{-34}$ J·s.

c) $W_0 = hf - eV_0 = 6{,}626 \\times 10^{-34} \\times 6{,}00 \\times 10^{14} - 1{,}602 \\times 10^{-19} \\times 0{,}18 = 3{,}98 \\times 10^{-19} - 2{,}88 \\times 10^{-20} = 3{,}69 \\times 10^{-19}$ J $= 2{,}30$ eV.

d) $\\lambda_0 = hc/W_0 = 6{,}626 \\times 10^{-34} \\times 3{,}00 \\times 10^8/3{,}69 \\times 10^{-19} = 539$ nm. Metallet er sannsynligvis kalium.`,
    },
    {
      id: 'fys2-7-1-ex9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Et foton med bølgelengde $\\lambda = 250$ nm treffer en natriumoverflate ($W_0 = 2{,}75$ eV). Beregn farten til det utsendte fotoelektronet. Elektronets masse er $m_e = 9{,}109 \\times 10^{-31}$ kg.`,
      hints: ['Beregn fotonets energi', 'Finn kinetisk energi: $E_k = hf - W_0$', 'Bruk $E_k = \\frac{1}{2}mv^2$ for å finne $v$'],
      solution: `Fotonets energi: $E = hc/\\lambda = 6{,}626 \\times 10^{-34} \\times 3{,}00 \\times 10^8/(250 \\times 10^{-9}) = 7{,}95 \\times 10^{-19}$ J $= 4{,}96$ eV. $E_k = 4{,}96 - 2{,}75 = 2{,}21$ eV $= 3{,}54 \\times 10^{-19}$ J. $v = \\sqrt{2E_k/m_e} = \\sqrt{2 \\times 3{,}54 \\times 10^{-19}/9{,}109 \\times 10^{-31}} = \\sqrt{7{,}77 \\times 10^{11}} = 8{,}82 \\times 10^5$ m/s $\\approx 880$ km/s.`,
    },
    {
      id: 'fys2-7-1-ex10',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Forklar hvorfor alkalimetallene (som kalium og natrium) brukes i fotoelektriske celler, mens edle metaller (som gull og platina) vanligvis ikke brukes. Hvilken rolle spiller arbeidsfunksjonen?`,
      solution: `Alkalimetaller har lav arbeidsfunksjon (f.eks. $W_0 = 2{,}30$ eV for kalium), noe som betyr at de har lav grensefrekvens og kan frigjøre elektroner ved synlig lys. Edle metaller som platina har høy arbeidsfunksjon ($W_0 = 5{,}65$ eV), og krever derfor UV-stråling for å frigjøre elektroner. I praktiske fotoelektriske celler ønsker man å detektere synlig lys, så alkalimetaller er mest egnet. Arbeidsfunksjonen bestemmer altså hvor energetisk lyset må være for å utløse fotoelektrisk effekt, og dermed hvilke typer lys cellen er sensitiv for.`,
    },
  ],
};

// ============================================================================
// Kapittel 7.2: Bølge-partikkel-dualitet
// ============================================================================

export const CHAPTER_FYSIKK2_7_2: TextbookChapter = {
  id: 'fysikk2-7-2',
  courseId: 'fysikk2',
  chapterNumber: '7.2',
  title: 'Bølge-partikkel-dualitet',
  description:
    'Utforsk lysets dobbelnatur: Lys oppfører seg både som bølge og partikkel, avhengig av eksperimentet.',
  estimatedMinutes: 75,
  prerequisites: ['fysikk2-7-1'],
  competenceGoals: [
    'gjøre rede for bølge-partikkel-dualiteten til lys',
    'forklare dobbeltspalteksperimentet og dets betydning',
    'beskrive Comptonspredning som bevis for fotonbevegelsesmengde',
    'forklare komplementaritetsprinsippet',
  ],
  content: [
    {
      id: 'fys2-7-2-intro',
      type: 'text',
      content: `# Bølge-partikkel-dualitet

I forrige kapittel så vi at lys oppfører seg som **partikler** (fotoner) i den fotoelektriske effekten. Men vi vet også at lys kan vise **bølgeegenskaper** — interferens og diffraksjon. Hvordan kan lys være begge deler?

Dette paradokset er kjernen i **bølge-partikkel-dualiteten**, et av de mest grunnleggende prinsippene i kvantefysikken. Svaret er at lys verken er «bare» en bølge eller «bare» en partikkel — det er noe mer fundamentalt som viser ulike egenskaper avhengig av hvordan vi observerer det.

## Historisk bakgrunn

Debatten om lysets natur har pågått i århundrer:

- **Isaac Newton** (1600-tallet): Mente lys bestod av partikler («korpuskler»).
- **Christiaan Huygens** (1600-tallet): Foreslo at lys er en bølge.
- **Thomas Young** (1801): Dobbeltspalteksperimentet viste interferens — bevis for bølgenatur.
- **James Clerk Maxwell** (1860-tallet): Viste at lys er elektromagnetiske bølger.
- **Albert Einstein** (1905): Fotoelektrisk effekt — bevis for partikkelnatur.

Etter Youngs eksperiment var det bred enighet om at lys er en bølge. Einsteins fotonmodell skapte forvirring: **Er lys en bølge eller en partikkel?**`,
    },
    {
      id: 'fys2-7-2-dobbelspalte',
      type: 'text',
      content: `## Youngs dobbeltspaltforsøk — bevis for bølgenatur

I 1801 utførte Thomas Young et av de mest berømte eksperimentene i fysikkhistorien. Han sendte lys gjennom to smale spalter plassert nær hverandre. Bak spaltene plasserte han en skjerm.

### Hva skjedde?

Isteden for to lysstriber (som partikkelmodellen forutsier), observerte Young et **interferensmønster** — vekslende lyse og mørke striper:

- **Lyse striper** (konstruktiv interferens): Bølger fra de to spaltene forsterker hverandre.
- **Mørke striper** (destruktiv interferens): Bølger fra de to spaltene kansellerer hverandre.

### Betingelser for interferens

**Konstruktiv interferens** (lyst) oppstår når gangforskjellen er et helt antall bølgelengder:

$$d \\sin\\theta = n\\lambda \\qquad n = 0, 1, 2, 3, \\ldots$$

**Destruktiv interferens** (mørkt) oppstår når gangforskjellen er et halvt antall bølgelengder:

$$d \\sin\\theta = \\left(n + \\frac{1}{2}\\right)\\lambda \\qquad n = 0, 1, 2, \\ldots$$

der $d$ er avstanden mellom spaltene, $\\theta$ er vinkelen til det aktuelle punktet, og $\\lambda$ er bølgelengden.

### Konklusjon

Interferensmønsteret kan bare forklares dersom lys er en **bølge**. Partikler ville gitt et helt annet mønster — bare to striper rett bak spaltene.`,
    },
    {
      id: 'fys2-7-2-fotoelektrisk-partikkel',
      type: 'text',
      content: `## Fotoelektrisk effekt — bevis for partikkelnatur

Som vi lærte i kapittel 7.1, viser den fotoelektriske effekten at lys oppfører seg som partikler. De viktigste bevisene er:

1. **Grensefrekvens**: Bare fotoner med nok energi ($hf \\geq W_0$) kan frigjøre elektroner.
2. **Ingen tidsforsinkelse**: Energien overføres i «pakker» (kvanter), ikke gradvis.
3. **Frekvensavhengighet**: Elektronenes energi avhenger av fotonets frekvens, ikke lysets intensitet.

Disse observasjonene er uforenlige med en ren bølgemodell, men forklares perfekt av fotonmodellen.`,
    },
    {
      id: 'fys2-7-2-enkeltfotoner',
      type: 'text',
      content: `## Dobbeltspaltforsøk med enkeltfotoner

Et av de mest forbløffende eksperimentene i kvantefysikken er dobbeltspaltforsøket med **enkeltfotoner** (utført første gang i 1909 av G.I. Taylor, og senere med svært høy presisjon).

### Oppsett
Man reduserer lysintensiteten til et minimum, slik at bare **ett foton om gangen** sendes mot dobbelspalten. Hvert foton registreres som et punkt på en detektor bak spaltene.

### Observasjoner

1. **Hvert enkelt foton** registreres som et punkt — en diskret «klatt» på detektoren. Dette er partikkeloppførsel.

2. **Etter mange fotoner** bygger punktene opp et mønster. Og dette mønsteret er... et **interferensmønster**! Akkurat som med en lysbølge.

3. **Hvert enkelt foton «interfererer med seg selv»**: Fotonet oppfører seg som om det går gjennom *begge* spaltene samtidig og interfererer med seg selv.

### Hva skjer hvis vi observerer?

Hvis vi setter opp en detektor for å finne ut hvilken spalte fotonet går gjennom, **forsvinner interferensmønsteret**. Vi ser i stedet to striper — partikkelmønsteret.

Selve handlingen å **observere** endrer resultatet. Dette er et av de merkeligste og mest grunnleggende fenomenene i kvantefysikken.`,
    },
    {
      id: 'fys2-7-2-komplementaritet',
      type: 'definition',
      title: 'Komplementaritetsprinsippet (Niels Bohr)',
      content: `**Komplementaritetsprinsippet**, formulert av den danske fysikeren **Niels Bohr** i 1928, sier:

*Bølge- og partikkelegenskapene til lys (og materie) er **komplementære**. De kan aldri observeres samtidig i samme eksperiment, men begge er nødvendige for en fullstendig beskrivelse.*

- I et **interferenseksperiment** (dobbelspalte) viser lys sin bølgenatur.
- I et **fotoelektrisk eksperiment** viser lys sin partikkelnatur.
- Vi kan aldri observere **begge** samtidig — det avhenger av eksperimentoppsettet.

Lys er verken «bare» en bølge eller «bare» en partikkel. Det er en kvantemekanisk størrelse som ikke har noen perfekt analog i vår dagligdagse erfaring.`,
    },
    {
      id: 'fys2-7-2-compton',
      type: 'text',
      content: `## Comptonspredning — fotonets bevegelsesmengde

I 1923 utførte den amerikanske fysikeren **Arthur Holly Compton** et eksperiment som ga ytterligere bevis for at fotoner er partikler.

### Eksperimentet

Compton sendte røntgenstråler (fotoner med kort bølgelengde) mot en grafittblokk. Han observerte at de spredte røntgenstrålene hadde **lengre bølgelengde** enn de innkommende — altså **lavere energi**.

### Forklaring

Dette kan forklares som en **kollisjon** mellom et foton og et elektron, der fotonet avgir noe av sin energi og bevegelsesmengde til elektronet — akkurat som to biljardkuler som kolliderer.

### Fotonets bevegelsesmengde

Selv om fotonet er masseløst, har det bevegelsesmengde:`,
    },
    {
      id: 'fys2-7-2-foton-momentum',
      type: 'formula',
      title: 'Fotonets bevegelsesmengde',
      latex: `p = \\frac{E}{c} = \\frac{hf}{c} = \\frac{h}{\\lambda}`,
      description: `Bevegelsesmengden til et foton med frekvens $f$ og bølgelengde $\\lambda$. Selv om fotonet har null hvilemasse, har det bevegelsesmengde fordi det beveger seg med lyshastigheten $c$.`,
    },
    {
      id: 'fys2-7-2-compton-formel',
      type: 'theorem',
      title: 'Comptoneffekten',
      content: `Endringen i bølgelengde ved Comptonspredning er:

$$\\Delta\\lambda = \\lambda' - \\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta)$$

der:
- $\\lambda$ er innkommende bølgelengde
- $\\lambda'$ er spredt bølgelengde
- $\\theta$ er spredningsvinkelen
- $m_e = 9{,}109 \\times 10^{-31}$ kg er elektronets masse
- $\\frac{h}{m_e c} = 2{,}43 \\times 10^{-12}$ m kalles **Comptonbølgelengden**

Comptoneffekten viser at fotoner har **bevegelsesmengde** og at foton-elektron-kollisjoner følger bevaringslovene for energi og bevegelsesmengde — akkurat som kollisjoner mellom partikler.`,
    },
    {
      id: 'fys2-7-2-example1',
      type: 'example',
      title: 'Eksempel 1: Bevegelsesmengde til et foton',
      problem: `Beregn bevegelsesmengden til et foton med bølgelengde $\\lambda = 500$ nm (grønt lys).`,
      solution: `**Gitt:** $\\lambda = 500$ nm $= 500 \\times 10^{-9}$ m

**Formel:** $p = h/\\lambda$

**Beregning:**
$$p = \\frac{h}{\\lambda} = \\frac{6{,}626 \\times 10^{-34}}{500 \\times 10^{-9}} = 1{,}33 \\times 10^{-27} \\text{ kg·m/s}$$

**Svar:** Fotonets bevegelsesmengde er $1{,}33 \\times 10^{-27}$ kg·m/s. Dette er svært lite sammenlignet med makroskopiske objekter, men målbart ved Comptonspredning.`,
    },
    {
      id: 'fys2-7-2-example2',
      type: 'example',
      title: 'Eksempel 2: Comptonspredning',
      problem: `Et røntgenfoton med bølgelengde $\\lambda = 0{,}0700$ nm spres av et fritt elektron med vinkel $\\theta = 90°$. Beregn bølgelengden til det spredte fotonet.`,
      solution: `**Gitt:** $\\lambda = 0{,}0700$ nm, $\\theta = 90°$

**Comptonbølgelengden:** $\\frac{h}{m_e c} = \\frac{6{,}626 \\times 10^{-34}}{9{,}109 \\times 10^{-31} \\times 3{,}00 \\times 10^8} = 2{,}43 \\times 10^{-12}$ m $= 0{,}00243$ nm

**Beregning:**
$$\\Delta\\lambda = \\frac{h}{m_e c}(1 - \\cos 90°) = 0{,}00243 \\times (1 - 0) = 0{,}00243 \\text{ nm}$$

$$\\lambda' = \\lambda + \\Delta\\lambda = 0{,}0700 + 0{,}00243 = 0{,}0724 \\text{ nm}$$

**Svar:** Det spredte fotonet har bølgelengde $0{,}0724$ nm, altså litt lengre (lavere energi) enn det innkommende.`,
    },
    {
      id: 'fys2-7-2-example3',
      type: 'example',
      title: 'Eksempel 3: Dobbeltspaltforsøk',
      problem: `I et dobbeltspaltforsøk med lys av bølgelengde $\\lambda = 600$ nm er spalteavstanden $d = 0{,}10$ mm. Finn vinkelen $\\theta$ til det første og andre lyse interferensmaksimumet.`,
      solution: `**Gitt:** $\\lambda = 600$ nm $= 600 \\times 10^{-9}$ m, $d = 0{,}10$ mm $= 1{,}0 \\times 10^{-4}$ m

**Formel:** $d\\sin\\theta = n\\lambda$ for lyse striper ($n = 0, 1, 2, \\ldots$)

**Første maksimum ($n = 1$):**
$$\\sin\\theta_1 = \\frac{\\lambda}{d} = \\frac{600 \\times 10^{-9}}{1{,}0 \\times 10^{-4}} = 6{,}0 \\times 10^{-3}$$
$$\\theta_1 = \\arcsin(6{,}0 \\times 10^{-3}) = 0{,}34°$$

**Andre maksimum ($n = 2$):**
$$\\sin\\theta_2 = \\frac{2\\lambda}{d} = \\frac{2 \\times 600 \\times 10^{-9}}{1{,}0 \\times 10^{-4}} = 1{,}2 \\times 10^{-2}$$
$$\\theta_2 = \\arcsin(1{,}2 \\times 10^{-2}) = 0{,}69°$$

**Svar:** $\\theta_1 = 0{,}34°$ og $\\theta_2 = 0{,}69°$. Vinklene er svært små fordi $\\lambda \\ll d$.`,
    },
    {
      id: 'fys2-7-2-note-oppsummering',
      type: 'note',
      title: 'Huskeregel: Bølge vs. partikkel',
      content: `**Bølgeegenskaper** (interferens, diffraksjon):
- Observeres i dobbeltspaltforsøk, enkeltspalt-diffraksjon, tynn film
- Lys opptrer som bølge under **utbredelse**

**Partikkelegenskaper** (fotoelektrisk effekt, Comptonspredning):
- Observeres når lys **vekselvirker** med materie
- Lys opptrer som partikkel under **absorpsjon** og **emisjon**

Huskeregel: «Lys **reiser** som bølge, men **lander** som partikkel.»`,
    },
    {
      id: 'fys2-7-2-warning1',
      type: 'warning',
      title: 'Vanlige misforståelser',
      content: `**Misforståelse 1:** «Lys bytter mellom å være bølge og partikkel.»
→ Lys er alltid det samme — det er en kvantemekanisk størrelse. Det er **eksperimentet** som avgjør hvilke egenskaper som manifesterer seg.

**Misforståelse 2:** «Et foton er en liten kule som beveger seg i en bølgende bane.»
→ Et foton er verken en klassisk partikkel eller en klassisk bølge. Det er en kvantisert eksitasjon av det elektromagnetiske feltet.

**Misforståelse 3:** «Observatøren bestemmer hva lys er.»
→ Det er **eksperimentoppsettet** (måleapparatet), ikke observatørens bevissthet, som avgjør hvilke egenskaper som måles.`,
    },
    {
      id: 'fys2-7-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Lys viser **bølgenatur** i interferens- og diffraksjonsforsøk (Youngs dobbelspalte).
- Lys viser **partikkelnatur** i fotoelektrisk effekt og Comptonspredning.
- Dobbeltspaltforsøk med enkeltfotoner viser at hvert foton interfererer med seg selv.
- **Komplementaritetsprinsippet** (Bohr): Bølge- og partikkelegenskaper er komplementære — de kan aldri observeres samtidig.
- Fotonets bevegelsesmengde: $p = h/\\lambda$.
- Comptonspredning bekrefter at fotoner har bevegelsesmengde og energi som partikler.`,
    },
  ],
  exercises: [
    {
      id: 'fys2-7-2-ex1',
      type: 'classic',
      difficulty: 'lett',
      task: `Forklar med egne ord hva bølge-partikkel-dualitet betyr. Gi ett eksperiment som viser bølgenatur og ett som viser partikkelnatur for lys.`,
      solution: `Bølge-partikkel-dualitet betyr at lys (og all materie) har egenskaper fra både bølger og partikler. Dobbeltspaltforsøket viser bølgenatur gjennom interferensmønsteret, der lyse og mørke striper oppstår. Den fotoelektriske effekten viser partikkelnatur fordi lys overfører energi i diskrete pakker (fotoner) til elektroner, med en grensefrekvens som bølgemodellen ikke kan forklare.`,
    },
    {
      id: 'fys2-7-2-ex2',
      type: 'classic',
      difficulty: 'lett',
      task: `Beregn bevegelsesmengden til et røntgenfoton med bølgelengde $\\lambda = 0{,}10$ nm.`,
      hints: ['$p = h/\\lambda$'],
      solution: `$p = h/\\lambda = 6{,}626 \\times 10^{-34}/(0{,}10 \\times 10^{-9}) = 6{,}6 \\times 10^{-24}$ kg·m/s.`,
    },
    {
      id: 'fys2-7-2-ex3',
      type: 'classic',
      difficulty: 'lett',
      task: `Hva er Bohrs komplementaritetsprinsipp? Hvorfor er det viktig for vår forståelse av lys?`,
      solution: `Komplementaritetsprinsippet sier at bølge- og partikkelegenskapene til lys er komplementære: de kan ikke observeres samtidig i samme eksperiment, men begge er nødvendige for en fullstendig beskrivelse. Det er viktig fordi det løser det tilsynelatende paradokset med bølge-partikkel-dualiteten — lys er ikke enten bølge eller partikkel, men en kvantemekanisk størrelse som viser ulike aspekter avhengig av målemetoden.`,
    },
    {
      id: 'fys2-7-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: `I et dobbeltspaltforsøk med grønt lys ($\\lambda = 532$ nm) er spalteavstanden $d = 0{,}050$ mm. Avstanden fra spaltene til skjermen er $L = 1{,}5$ m.

a) Finn vinkelen til det første interferensmaksimumet.
b) Finn avstanden mellom de to første lyse stripene på skjermen.`,
      hints: ['$d\\sin\\theta = n\\lambda$', 'For små vinkler: $\\sin\\theta \\approx \\tan\\theta = y/L$'],
      solution: `a) $\\sin\\theta_1 = \\lambda/d = 532 \\times 10^{-9}/(0{,}050 \\times 10^{-3}) = 1{,}064 \\times 10^{-2}$. $\\theta_1 = 0{,}61°$.
b) $y_1 = L\\tan\\theta_1 \\approx L\\sin\\theta_1 = 1{,}5 \\times 1{,}064 \\times 10^{-2} = 0{,}016$ m $= 16$ mm. Avstand mellom sentral stripe og første lyse stripe er 16 mm.`,
    },
    {
      id: 'fys2-7-2-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: `Forklar hva som skjer i dobbeltspaltforsøket med enkeltfotoner. Hvorfor er dette eksperimentet så viktig for kvantefysikken?`,
      solution: `Når man sender enkeltfotoner gjennom en dobbelspalte, registreres hvert foton som et punkt på detektoren (partikkeloppførsel). Men etter at mange fotoner er registrert, bygges det opp et interferensmønster (bølgeoppførsel). Hvert foton oppfører seg som om det passerer gjennom begge spaltene samtidig og interfererer med seg selv. Hvis man forsøker å observere hvilken spalte fotonet passerer, forsvinner interferensmønsteret. Eksperimentet er viktig fordi det viser at bølge-partikkel-dualiteten ikke bare er en statistisk effekt — den gjelder for hvert enkelt foton. Det viser også at observasjonen påvirker resultatet, et fundamentalt trekk ved kvantefysikken.`,
    },
    {
      id: 'fys2-7-2-ex6',
      type: 'classic',
      difficulty: 'medium',
      task: `Et røntgenfoton med bølgelengde $\\lambda = 0{,}050$ nm Comptonspres med vinkel $\\theta = 180°$ (rett tilbake). Finn bølgelengden til det spredte fotonet og den prosentvise endringen i bølgelengde.`,
      hints: ['$\\Delta\\lambda = (h/m_ec)(1-\\cos\\theta)$', 'For $\\theta = 180°$: $\\cos 180° = -1$'],
      solution: `$\\Delta\\lambda = (h/m_ec)(1 - \\cos 180°) = 0{,}00243 \\times (1 - (-1)) = 0{,}00243 \\times 2 = 0{,}00486$ nm. $\\lambda' = 0{,}050 + 0{,}00486 = 0{,}0549$ nm. Prosentvis endring: $\\Delta\\lambda/\\lambda \\times 100 = 0{,}00486/0{,}050 \\times 100 = 9{,}7\\%$.`,
    },
    {
      id: 'fys2-7-2-ex7',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Forklar forskjellen mellom det klassiske bølgemønsteret og det observerte mønsteret i dobbeltspaltforsøket med enkeltfotoner. Inkluder i svaret ditt en diskusjon av hva som skjer når man prøver å finne ut hvilken spalte fotonet passerer gjennom.`,
      solution: `Klassisk bølgeteori forutsier et interferensmønster basert på superposisjon av to bølger. Med enkeltfotoner ser man at hvert foton landet som et punkt (partikkel), men statistisk over mange fotoner bygges interferensmønsteret opp. Hver foton ser ut til å «kjenne til» begge spaltene. Kvantemekanisk beskrives fotonet av en sannsynlighetsbølge som passerer gjennom begge spaltene og interfererer med seg selv. Sannsynligheten for å detektere fotonet på ulike steder på skjermen følger interferensmønsteret. Når vi prøver å observere hvilken spalte fotonet passerer (f.eks. med en detektor), kollapser bølgefunksjonen — fotonet lokaliseres til én spalte, og interferensmønsteret forsvinner. Vi ser da to striper (partikkelmønster). Dette er en konsekvens av komplementaritetsprinsippet: vi kan enten ha informasjon om fotonets vei (partikkel), eller se interferens (bølge), men ikke begge deler.`,
    },
    {
      id: 'fys2-7-2-ex8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Et foton med bølgelengde $\\lambda = 0{,}0200$ nm Comptonspres av et elektron.

a) Beregn energien til det innkommende fotonet i keV.
b) Finn den maksimale endringen i bølgelengde (ved hvilken vinkel oppstår den?).
c) Beregn energien til det spredte fotonet ved denne vinkelen.
d) Hvor mye kinetisk energi overføres til elektronet?`,
      hints: ['Maksimal $\\Delta\\lambda$ ved $\\theta = 180°$', '$E = hc/\\lambda$', 'Energibevaring: $E_{\\text{inn}} = E_{\\text{spredt}} + E_k$'],
      solution: `a) $E = hc/\\lambda = (6{,}626 \\times 10^{-34} \\times 3{,}00 \\times 10^8)/(0{,}0200 \\times 10^{-9}) = 9{,}94 \\times 10^{-15}$ J $= 62{,}1$ keV.

b) Maksimal $\\Delta\\lambda$ ved $\\theta = 180°$: $\\Delta\\lambda_{\\max} = 2h/(m_ec) = 2 \\times 0{,}00243 = 0{,}00486$ nm. $\\lambda' = 0{,}0200 + 0{,}00486 = 0{,}0249$ nm.

c) $E' = hc/\\lambda' = (6{,}626 \\times 10^{-34} \\times 3{,}00 \\times 10^8)/(0{,}0249 \\times 10^{-9}) = 7{,}98 \\times 10^{-15}$ J $= 49{,}8$ keV.

d) $E_k = E - E' = 62{,}1 - 49{,}8 = 12{,}3$ keV $= 1{,}97 \\times 10^{-15}$ J.`,
    },
    {
      id: 'fys2-7-2-ex9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `En laser sender ut lys med bølgelengde $\\lambda = 632{,}8$ nm (helium-neon-laser) og effekt $P = 5{,}0$ mW. Lyset sendes mot en dobbelspalte.

a) Beregn energien og bevegelsesmengden til hvert foton.
b) Beregn antall fotoner som sendes ut per sekund.
c) Forklar hvorfor man likevel kan observere interferens med denne laseren, selv om det er svært mange fotoner.`,
      hints: ['$E = hc/\\lambda$, $p = h/\\lambda$', '$N = P/E$'],
      solution: `a) $E = hc/\\lambda = 6{,}626 \\times 10^{-34} \\times 3{,}00 \\times 10^8/(632{,}8 \\times 10^{-9}) = 3{,}14 \\times 10^{-19}$ J $= 1{,}96$ eV. $p = h/\\lambda = 6{,}626 \\times 10^{-34}/(632{,}8 \\times 10^{-9}) = 1{,}05 \\times 10^{-27}$ kg·m/s.

b) $N = P/E = 5{,}0 \\times 10^{-3}/3{,}14 \\times 10^{-19} = 1{,}6 \\times 10^{16}$ fotoner/s.

c) Selv om det er mange fotoner, er laserlys **koherent** — alle fotoner har samme frekvens, fase og retning. Hvert foton interfererer med seg selv i dobbelspalten, og fordi alle har samme bølgelengde, bygger de opp det samme interferensmønsteret. Interferens observeres fordi det er en bølgeegenskap av hvert enkelt foton, ikke en kollektiv effekt mellom flere fotoner.`,
    },
  ],
};

// ============================================================================
// Kapittel 7.3: de Broglies hypotese
// ============================================================================

export const CHAPTER_FYSIKK2_7_3: TextbookChapter = {
  id: 'fysikk2-7-3',
  courseId: 'fysikk2',
  chapterNumber: '7.3',
  title: 'de Broglies hypotese',
  description:
    'Lær om de Broglies revolusjonerende idé om at all materie har bølgeegenskaper, og hvordan dette ble bekreftet eksperimentelt.',
  estimatedMinutes: 70,
  prerequisites: ['fysikk2-7-2'],
  competenceGoals: [
    'gjøre rede for de Broglies hypotese om materiebølger',
    'beregne de Broglie-bølgelengden til partikler',
    'forklare hvorfor bølgeegenskaper ikke observeres for makroskopiske objekter',
    'beskrive eksperimentell bekreftelse av materiebølger',
  ],
  content: [
    {
      id: 'fys2-7-3-intro',
      type: 'text',
      content: `# de Broglies hypotese

I 1924 foreslo den franske fysikeren **Louis de Broglie** en dristig idé i sin doktoravhandling: Hvis lys — som tradisjonelt ble betraktet som bølger — også har partikkelegneskaper (fotoner), kanskje **materie** — som tradisjonelt ble betraktet som partikler — også har **bølgeegenskaper**?

Denne ideen, kjent som **de Broglies hypotese**, revolusjonerte fysikken og la grunnlaget for kvantemekanikken slik vi kjenner den i dag.

## Fra lys til materie

Vi vet at fotoner har bevegelsesmengde:

$$p = \\frac{h}{\\lambda}$$

de Broglie snudde denne sammenhengen og foreslo at **enhver partikkel med bevegelsesmengde $p$** har en tilhørende bølgelengde:

$$\\lambda = \\frac{h}{p} = \\frac{h}{mv}$$

der $m$ er partikkelens masse og $v$ er farten.

Denne bølgelengden kalles **de Broglie-bølgelengden** eller **materiebølgelengden**.`,
    },
    {
      id: 'fys2-7-3-formel',
      type: 'formula',
      title: 'de Broglie-bølgelengden',
      latex: `\\lambda = \\frac{h}{p} = \\frac{h}{mv}`,
      description: `de Broglie-bølgelengden til en partikkel med masse $m$ og fart $v$. Her er $h = 6{,}626 \\times 10^{-34}$ J·s (Plancks konstant) og $p = mv$ er bevegelsesmengden. Jo større masse eller fart, desto kortere bølgelengde.`,
    },
    {
      id: 'fys2-7-3-def',
      type: 'definition',
      title: 'de Broglies hypotese',
      content: `**de Broglies hypotese** (1924): Enhver partikkel med bevegelsesmengde $p$ har en tilknyttet bølgelengde gitt ved:

$$\\lambda = \\frac{h}{p}$$

Dette gjelder for **all materie** — elektroner, protoner, nøytroner, atomer, molekyler, og i prinsippet også makroskopiske objekter som baller og mennesker.

de Broglie kalte disse bølgene for **materiebølger** (eller de Broglie-bølger).

**Merk:** de Broglie-bølgelengden er **ikke** en fysisk bølge som vann- eller lydbølger. Den er en **sannsynlighetsbølge** som beskriver partikkelens kvantemekaniske oppførsel.`,
    },
    {
      id: 'fys2-7-3-elektron-akselerert',
      type: 'text',
      content: `## de Broglie-bølgelengde for akselererte elektroner

I mange eksperimenter akselererer man elektroner gjennom en spenning $V$. Da får elektronet kinetisk energi lik:

$$E_k = eV = \\frac{1}{2}mv^2$$

Bevegelsesmengden blir da:

$$p = mv = \\sqrt{2mE_k} = \\sqrt{2meV}$$

Og de Broglie-bølgelengden:

$$\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2meV}}$$

Denne formelen er svært nyttig for elektronmikroskoper og elektronbøyningseksperimenter.`,
    },
    {
      id: 'fys2-7-3-formula-akselerert',
      type: 'formula',
      title: 'de Broglie-bølgelengde for akselererte elektroner',
      latex: `\\lambda = \\frac{h}{\\sqrt{2m_e eV}}`,
      description: `Bølgelengden til et elektron akselerert gjennom en potensialdifferanse $V$. Her er $m_e = 9{,}109 \\times 10^{-31}$ kg og $e = 1{,}602 \\times 10^{-19}$ C.`,
    },
    {
      id: 'fys2-7-3-example1',
      type: 'example',
      title: 'Eksempel 1: de Broglie-bølgelengde for et elektron',
      problem: `Et elektron beveger seg med fart $v = 1{,}0 \\times 10^6$ m/s. Beregn de Broglie-bølgelengden. Elektronets masse er $m_e = 9{,}109 \\times 10^{-31}$ kg.`,
      solution: `**Gitt:** $v = 1{,}0 \\times 10^6$ m/s, $m_e = 9{,}109 \\times 10^{-31}$ kg

**Formel:** $\\lambda = h/(mv)$

**Beregning:**
$$\\lambda = \\frac{h}{m_e v} = \\frac{6{,}626 \\times 10^{-34}}{9{,}109 \\times 10^{-31} \\times 1{,}0 \\times 10^6}$$

$$\\lambda = \\frac{6{,}626 \\times 10^{-34}}{9{,}109 \\times 10^{-25}} = 7{,}27 \\times 10^{-10} \\text{ m} = 0{,}727 \\text{ nm}$$

**Svar:** de Broglie-bølgelengden er $0{,}727$ nm. Dette er sammenlignbart med atomavstander i krystaller, noe som betyr at elektronbølger kan diffrakteres av krystallgittere.`,
    },
    {
      id: 'fys2-7-3-example2',
      type: 'example',
      title: 'Eksempel 2: Fotball vs. elektron',
      problem: `Sammenlign de Broglie-bølgelengdene for:
a) Et elektron med fart $v = 1{,}0 \\times 10^6$ m/s
b) En fotball ($m = 0{,}43$ kg) med fart $v = 25$ m/s

Forklar hvorfor vi ikke observerer bølgeegenskaper for fotballen.`,
      solution: `**a) Elektron:**
$$\\lambda_e = \\frac{h}{m_e v} = \\frac{6{,}626 \\times 10^{-34}}{9{,}109 \\times 10^{-31} \\times 1{,}0 \\times 10^6} = 7{,}3 \\times 10^{-10} \\text{ m} = 0{,}73 \\text{ nm}$$

**b) Fotball:**
$$\\lambda_f = \\frac{h}{mv} = \\frac{6{,}626 \\times 10^{-34}}{0{,}43 \\times 25} = \\frac{6{,}626 \\times 10^{-34}}{10{,}75} = 6{,}2 \\times 10^{-35} \\text{ m}$$

**Sammenligning:**

| Objekt | de Broglie-bølgelengde |
|---|---|
| Elektron | $0{,}73$ nm = $7{,}3 \\times 10^{-10}$ m |
| Fotball | $6{,}2 \\times 10^{-35}$ m |

Fotballens bølgelengde er ca. $10^{25}$ ganger kortere enn elektronets!

**Forklaring:** Fotballens de Broglie-bølgelengde ($6{,}2 \\times 10^{-35}$ m) er enormt mye mindre enn noen kjent fysisk størrelse. Selv en atomkjerne har radius ca. $10^{-15}$ m — altså $10^{20}$ ganger større enn fotballens bølgelengde. Det er umulig å lage spalter eller hindringer små nok til å observere diffraksjon av en fotball. Bølgeegenskaper for makroskopiske objekter er i praksis uobserverbare.`,
    },
    {
      id: 'fys2-7-3-example3',
      type: 'example',
      title: 'Eksempel 3: Akselerert elektron',
      problem: `Et elektron akselereres fra ro gjennom en potensialdifferanse på $V = 100$ V. Beregn de Broglie-bølgelengden til elektronet.`,
      solution: `**Gitt:** $V = 100$ V

**Formel:** $\\lambda = h/\\sqrt{2m_e eV}$

**Beregning:**
$$\\lambda = \\frac{6{,}626 \\times 10^{-34}}{\\sqrt{2 \\times 9{,}109 \\times 10^{-31} \\times 1{,}602 \\times 10^{-19} \\times 100}}$$

Nevneren:
$$\\sqrt{2 \\times 9{,}109 \\times 10^{-31} \\times 1{,}602 \\times 10^{-17}} = \\sqrt{2{,}919 \\times 10^{-47}} = 5{,}40 \\times 10^{-24}$$

$$\\lambda = \\frac{6{,}626 \\times 10^{-34}}{5{,}40 \\times 10^{-24}} = 1{,}23 \\times 10^{-10} \\text{ m} = 0{,}123 \\text{ nm}$$

**Svar:** $\\lambda = 0{,}123$ nm. Dette er sammenlignbart med avstanden mellom atomer i et krystallgitter (typisk $0{,}1$–$0{,}5$ nm), så elektronet kan diffrakteres av krystaller.`,
    },
    {
      id: 'fys2-7-3-davisson-germer',
      type: 'text',
      content: `## Eksperimentell bekreftelse: Davisson-Germer-eksperimentet (1927)

De Broglies hypotese var en teoretisk forutsigelse som trengte eksperimentell bekreftelse. Denne kom i 1927, bare tre år etter de Broglies doktoravhandling.

### Davisson-Germer-eksperimentet

De amerikanske fysikerne **Clinton Davisson** og **Lester Germer** sendte en stråle av elektroner mot en nikkelkrystall og målte intensiteten av de reflekterte elektronene som funksjon av vinkelen.

**Observasjoner:**
- Elektronene ble reflektert i bestemte vinkler — akkurat som røntgenstråler diffrakteres av krystaller.
- Mønsteret stemte perfekt med det som forventes for **bølger med de Broglie-bølgelengden**.
- Resultatene bekreftet de Broglies formel $\\lambda = h/p$.

### G.P. Thomson

Omtrent samtidig utførte **George Paget Thomson** (sønn av J.J. Thomson som oppdaget elektronet) lignende eksperimenter med elektronbøyning gjennom tynne metallfolier. Resultatene bekreftet de Broglies hypotese uavhengig.

Davisson og Thomson delte **Nobelprisen i fysikk i 1937** for eksperimentell bekreftelse av elektronets bølgenatur.

**Historisk ironi:** J.J. Thomson fikk Nobelprisen i 1906 for å vise at elektronet er en **partikkel**. Hans sønn G.P. Thomson fikk Nobelprisen i 1937 for å vise at elektronet er en **bølge**!`,
    },
    {
      id: 'fys2-7-3-elektronmikroskop',
      type: 'text',
      content: `## Anvendelse: Elektronmikroskopet

En viktig praktisk anvendelse av de Broglies hypotese er **elektronmikroskopet**.

### Oppløsningsevne

Et mikroskops oppløsningsevne (evne til å skille fine detaljer) er begrenset av bølgelengden til strålingen som brukes. Jo kortere bølgelengde, jo finere detaljer kan man se:

$$d_{\\min} \\approx \\frac{\\lambda}{2}$$

der $d_{\\min}$ er den minste detaljen som kan oppløses.

### Lysmikroskop vs. elektronmikroskop

| Egenskap | Lysmikroskop | Elektronmikroskop |
|---|---|---|
| Bølgelengde | $\\sim 400$–$700$ nm (synlig lys) | $\\sim 0{,}005$–$0{,}1$ nm (elektroner) |
| Oppløsning | $\\sim 200$ nm | $\\sim 0{,}05$ nm |
| Forstørrelse | Opptil $\\sim 1500\\times$ | Opptil $\\sim 10^6\\times$ |
| Kan se | Celler, bakterier | Atomer, molekyler |

Elektronmikroskopet utnytter at elektroner akselerert gjennom høye spenninger (f.eks. 100 kV) har de Broglie-bølgelengder som er mye kortere enn synlig lys, og dermed gir mye bedre oppløsning.

### Typer elektronmikroskoper

- **TEM** (transmisjonselektronmikroskop): Elektronene passerer gjennom et tynt prøvesnitt. Kan oppløse individuelle atomer.
- **SEM** (sveipeelektronmikroskop): Elektronene reflekteres fra overflaten. Gir 3D-lignende bilder av overflatestrukturer.`,
    },
    {
      id: 'fys2-7-3-example4',
      type: 'example',
      title: 'Eksempel 4: Elektronmikroskop',
      problem: `I et transmisjonselektronmikroskop (TEM) akselereres elektroner gjennom en spenning på $V = 200$ kV.

a) Beregn de Broglie-bølgelengden til elektronene.
b) Sammenlign med bølgelengden til synlig lys.
c) Anslå oppløsningsevnen til mikroskopet.`,
      solution: `**a) de Broglie-bølgelengden:**

$V = 200 \\text{ kV} = 200\\,000$ V

$$\\lambda = \\frac{h}{\\sqrt{2m_e eV}} = \\frac{6{,}626 \\times 10^{-34}}{\\sqrt{2 \\times 9{,}109 \\times 10^{-31} \\times 1{,}602 \\times 10^{-19} \\times 2{,}00 \\times 10^5}}$$

$$= \\frac{6{,}626 \\times 10^{-34}}{\\sqrt{5{,}84 \\times 10^{-44}}} = \\frac{6{,}626 \\times 10^{-34}}{2{,}41 \\times 10^{-22}} = 2{,}75 \\times 10^{-12} \\text{ m} = 0{,}00275 \\text{ nm}$$

**b) Sammenligning:**

Synlig lys: $\\lambda \\approx 500$ nm.
Elektronene: $\\lambda \\approx 0{,}003$ nm.

Elektronenes bølgelengde er ca. $\\frac{500}{0{,}003} \\approx 170\\,000$ ganger kortere enn synlig lys!

**c) Oppløsningsevne:**

$d_{\\min} \\approx \\lambda/2 \\approx 0{,}001$ nm. I praksis er oppløsningen begrenset av linseaberrasjoner til ca. $0{,}05$ nm, som likevel er nok til å se individuelle atomer.

**Merk:** Ved så høye spenninger bør man egentlig bruke relativistisk korreksjon for elektronets masse, men vi ser bort fra dette her.`,
    },
    {
      id: 'fys2-7-3-note-makro',
      type: 'note',
      title: 'Hvorfor ser vi ikke bølgeegenskaper i hverdagen?',
      content: `Plancks konstant $h = 6{,}626 \\times 10^{-34}$ J·s er **ekstremt liten**. For makroskopiske objekter med stor masse og fart er de Broglie-bølgelengden umålelig liten:

- **Menneske** (70 kg, 1,5 m/s): $\\lambda \\approx 6 \\times 10^{-36}$ m
- **Støvkorn** ($10^{-9}$ kg, 1 m/s): $\\lambda \\approx 7 \\times 10^{-25}$ m
- **Bakterie** ($10^{-15}$ kg): $\\lambda \\approx 7 \\times 10^{-19}$ m

Selv for en bakterie er bølgelengden mye kortere enn en atomkjerne ($\\sim 10^{-15}$ m). Bølgeegenskaper er kun observerbare for **subatomære partikler** som elektroner, protoner og nøytroner, der massen er tilstrekkelig liten.`,
    },
    {
      id: 'fys2-7-3-warning1',
      type: 'warning',
      title: 'Vanlige feil',
      content: `**Feil 1:** Å tro at de Broglie-bølger er fysiske bølger man kan «se».
→ de Broglie-bølger er **sannsynlighetsbølger** som beskriver kvantemekanisk oppførsel. De er ikke mekaniske bølger som lyd eller vannbølger.

**Feil 2:** Å glemme enheter i formelen $\\lambda = h/(mv)$.
→ Husk at $h$ er i J·s, $m$ i kg og $v$ i m/s. Da får du $\\lambda$ i meter.

**Feil 3:** Å bruke formelen for akselererte elektroner ($\\lambda = h/\\sqrt{2meV}$) når farten allerede er gitt.
→ Bruk $\\lambda = h/(mv)$ når farten er kjent, og $\\lambda = h/\\sqrt{2meV}$ kun når akselerasjonsspenningen er gitt.`,
    },
    {
      id: 'fys2-7-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **de Broglies hypotese** (1924): All materie har bølgeegenskaper med bølgelengde $\\lambda = h/p = h/(mv)$.
- Bekreftet eksperimentelt av **Davisson og Germer** (1927) gjennom elektronbøyning.
- For makroskopiske objekter er $\\lambda$ umålelig liten — bølgeegenskaper er kun observerbare for subatomære partikler.
- **Elektronmikroskopet** utnytter elektronenes korte de Broglie-bølgelengde for å oppnå mye bedre oppløsning enn lysmikroskoper.
- de Broglie-bølger er sannsynlighetsbølger, ikke mekaniske bølger.
- de Broglie fikk Nobelprisen i fysikk i 1929 for sin hypotese.`,
    },
  ],
  exercises: [
    {
      id: 'fys2-7-3-ex1',
      type: 'classic',
      difficulty: 'lett',
      task: `Beregn de Broglie-bølgelengden til et elektron med fart $v = 5{,}0 \\times 10^5$ m/s.`,
      hints: ['$\\lambda = h/(m_ev)$', '$m_e = 9{,}109 \\times 10^{-31}$ kg'],
      solution: `$\\lambda = h/(m_e v) = 6{,}626 \\times 10^{-34}/(9{,}109 \\times 10^{-31} \\times 5{,}0 \\times 10^5) = 6{,}626 \\times 10^{-34}/(4{,}55 \\times 10^{-25}) = 1{,}46 \\times 10^{-9}$ m $= 1{,}46$ nm.`,
    },
    {
      id: 'fys2-7-3-ex2',
      type: 'classic',
      difficulty: 'lett',
      task: `Beregn de Broglie-bølgelengden til et proton ($m_p = 1{,}673 \\times 10^{-27}$ kg) med fart $v = 3{,}0 \\times 10^6$ m/s. Sammenlign med et elektron med samme fart.`,
      hints: ['Bruk $\\lambda = h/(mv)$ for begge', 'Forholdet mellom bølgelengdene er forholdet mellom massene'],
      solution: `Proton: $\\lambda_p = 6{,}626 \\times 10^{-34}/(1{,}673 \\times 10^{-27} \\times 3{,}0 \\times 10^6) = 6{,}626 \\times 10^{-34}/(5{,}02 \\times 10^{-21}) = 1{,}32 \\times 10^{-13}$ m $= 0{,}132$ pm.

Elektron: $\\lambda_e = 6{,}626 \\times 10^{-34}/(9{,}109 \\times 10^{-31} \\times 3{,}0 \\times 10^6) = 2{,}43 \\times 10^{-10}$ m $= 0{,}243$ nm.

Elektronets bølgelengde er $\\lambda_e/\\lambda_p = m_p/m_e \\approx 1836$ ganger lenger. Tyngre partikler har kortere bølgelengde.`,
    },
    {
      id: 'fys2-7-3-ex3',
      type: 'classic',
      difficulty: 'lett',
      task: `Forklar med egne ord hva de Broglies hypotese sier, og hvorfor den var så revolusjonerende da den ble fremmet i 1924.`,
      solution: `de Broglies hypotese sier at all materie har bølgeegenskaper, og at bølgelengden er gitt ved $\\lambda = h/p = h/(mv)$. Hypotesen var revolusjonerende fordi den utvidet bølge-partikkel-dualiteten fra lys til all materie. Frem til da ble materielle partikler som elektroner kun ansett som partikler, mens bølger var et helt annet fenomen. de Broglie viste at grensen mellom bølger og partikler er kunstig — naturen på det fundamentale nivået har egenskaper fra begge.`,
    },
    {
      id: 'fys2-7-3-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: `Et elektron akselereres gjennom en spenning på $V = 50$ V. Beregn de Broglie-bølgelengden. Er denne bølgelengden egnet til å studere krystallstrukturer der atomavstanden er ca. $0{,}2$ nm?`,
      hints: ['$\\lambda = h/\\sqrt{2m_eeV}$'],
      solution: `$\\lambda = h/\\sqrt{2m_eeV} = 6{,}626 \\times 10^{-34}/\\sqrt{2 \\times 9{,}109 \\times 10^{-31} \\times 1{,}602 \\times 10^{-19} \\times 50} = 6{,}626 \\times 10^{-34}/\\sqrt{1{,}460 \\times 10^{-47}} = 6{,}626 \\times 10^{-34}/(3{,}82 \\times 10^{-24}) = 1{,}74 \\times 10^{-10}$ m $= 0{,}174$ nm.

Ja, dette er sammenlignbart med atomavstanden $0{,}2$ nm, og er derfor godt egnet til å studere krystallstrukturer gjennom elektronbøyning.`,
    },
    {
      id: 'fys2-7-3-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: `En tennisball med masse $m = 0{,}057$ kg slås med fart $v = 50$ m/s. Beregn de Broglie-bølgelengden og forklar hvorfor tennisballen ikke viser merkbare bølgeegenskaper.`,
      solution: `$\\lambda = h/(mv) = 6{,}626 \\times 10^{-34}/(0{,}057 \\times 50) = 6{,}626 \\times 10^{-34}/2{,}85 = 2{,}3 \\times 10^{-34}$ m.

Denne bølgelengden er ca. $10^{-19}$ ganger mindre enn en atomkjerne ($\\sim 10^{-15}$ m). Det er umulig å konstruere spalter eller hindringer som er små nok til å observere diffraksjon eller interferens for en tennisball. Bølgeegenskaper er derfor fullstendig uobserverbare for makroskopiske objekter.`,
    },
    {
      id: 'fys2-7-3-ex6',
      type: 'classic',
      difficulty: 'medium',
      task: `Hvilken akselerasjonsspenning må brukes for at elektroner i et elektronmikroskop skal ha de Broglie-bølgelengde $\\lambda = 0{,}010$ nm?`,
      hints: ['Løs $\\lambda = h/\\sqrt{2m_eeV}$ for $V$'],
      solution: `Fra $\\lambda = h/\\sqrt{2m_eeV}$:

$V = \\frac{h^2}{2m_ee\\lambda^2} = \\frac{(6{,}626 \\times 10^{-34})^2}{2 \\times 9{,}109 \\times 10^{-31} \\times 1{,}602 \\times 10^{-19} \\times (0{,}010 \\times 10^{-9})^2}$

$= \\frac{4{,}39 \\times 10^{-67}}{2 \\times 9{,}109 \\times 10^{-31} \\times 1{,}602 \\times 10^{-19} \\times 10^{-22}}$

$= \\frac{4{,}39 \\times 10^{-67}}{2{,}919 \\times 10^{-71}} = 1{,}50 \\times 10^4$ V $= 15{,}0$ kV.`,
    },
    {
      id: 'fys2-7-3-ex7',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Davisson og Germer sendte elektroner akselerert gjennom $V = 54$ V mot en nikkelkrystall. Gitteravstanden i nikkel er $d = 0{,}091$ nm.

a) Beregn de Broglie-bølgelengden til elektronene.
b) Bruk Braggs lov ($2d\\sin\\theta = n\\lambda$ for $n = 1$) til å beregne vinkelen for første ordens diffraksjon.
c) Davisson og Germer målte et diffraksjonsmaksimum ved $\\theta = 65°$. Passer dette med beregningen?`,
      hints: ['$\\lambda = h/\\sqrt{2m_eeV}$', 'Braggs lov: $2d\\sin\\theta = n\\lambda$'],
      solution: `a) $\\lambda = h/\\sqrt{2m_eeV} = 6{,}626 \\times 10^{-34}/\\sqrt{2 \\times 9{,}109 \\times 10^{-31} \\times 1{,}602 \\times 10^{-19} \\times 54} = 6{,}626 \\times 10^{-34}/\\sqrt{1{,}577 \\times 10^{-47}} = 6{,}626 \\times 10^{-34}/(3{,}97 \\times 10^{-24}) = 0{,}167$ nm.

b) $\\sin\\theta = \\lambda/(2d) = 0{,}167/(2 \\times 0{,}091) = 0{,}167/0{,}182 = 0{,}918$. $\\theta = \\arcsin(0{,}918) = 66{,}6°$.

c) Den beregnede vinkelen ($66{,}6°$) er svært nær den målte ($65°$). Forskjellen skyldes at den faktiske geometrien i eksperimentet er noe mer kompleks enn enkel Bragg-refleksjon. Resultatet bekrefter de Broglies hypotese.`,
    },
    {
      id: 'fys2-7-3-ex8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Et nøytron ($m_n = 1{,}675 \\times 10^{-27}$ kg) har kinetisk energi lik $E_k = \\frac{3}{2}k_BT$ ved romtemperatur $T = 300$ K, der $k_B = 1{,}381 \\times 10^{-23}$ J/K er Boltzmanns konstant.

a) Beregn nøytronets kinetiske energi.
b) Beregn de Broglie-bølgelengden til nøytronet.
c) Forklar hvorfor termiske nøytroner er nyttige for å studere krystallstrukturer.`,
      hints: ['$E_k = \\frac{3}{2}k_BT$', '$p = \\sqrt{2mE_k}$', '$\\lambda = h/p$'],
      solution: `a) $E_k = \\frac{3}{2}k_BT = \\frac{3}{2} \\times 1{,}381 \\times 10^{-23} \\times 300 = 6{,}21 \\times 10^{-21}$ J $= 0{,}0388$ eV.

b) $p = \\sqrt{2m_nE_k} = \\sqrt{2 \\times 1{,}675 \\times 10^{-27} \\times 6{,}21 \\times 10^{-21}} = \\sqrt{2{,}08 \\times 10^{-47}} = 4{,}56 \\times 10^{-24}$ kg·m/s.

$\\lambda = h/p = 6{,}626 \\times 10^{-34}/4{,}56 \\times 10^{-24} = 1{,}45 \\times 10^{-10}$ m $= 0{,}145$ nm.

c) Termiske nøytroner har de Broglie-bølgelengde ($\\sim 0{,}15$ nm) som er sammenlignbar med typiske atomavstander i krystaller ($\\sim 0{,}1$–$0{,}5$ nm). Derfor kan de diffrakteres av krystallgittere, akkurat som røntgenstråler. I tillegg er nøytroner elektrisk nøytrale og vekselvirker med atomkjerner (ikke elektroner), noe som gir komplementær informasjon til røntgendiffraksjon. Nøytrondiffraksjon er spesielt nyttig for å lokalisere lette atomer som hydrogen.`,
    },
  ],
};

// ============================================================================
// Kapittel 7.4: Heisenbergs usikkerhetsrelasjon
// ============================================================================

export const CHAPTER_FYSIKK2_7_4: TextbookChapter = {
  id: 'fysikk2-7-4',
  courseId: 'fysikk2',
  chapterNumber: '7.4',
  title: 'Heisenbergs usikkerhetsrelasjon',
  description:
    'Forstå den fundamentale grensen for nøyaktighet av samtidige målinger av posisjon og bevegelsesmengde i kvantemekanikken.',
  estimatedMinutes: 70,
  prerequisites: ['fysikk2-7-3'],
  competenceGoals: [
    'gjøre rede for Heisenbergs usikkerhetsrelasjon',
    'forklare at usikkerheten er fundamental, ikke et resultat av dårlige måleinstrumenter',
    'bruke usikkerhetsrelasjonen til å beregne minimum usikkerhet',
    'forstå konsekvensene for atomer og subatomære partikler',
  ],
  content: [
    {
      id: 'fys2-7-4-intro',
      type: 'text',
      content: `# Heisenbergs usikkerhetsrelasjon

I 1927 formulerte den tyske fysikeren **Werner Heisenberg** et av de mest grunnleggende prinsippene i kvantefysikken: **usikkerhetsrelasjonen** (også kalt usikkerhetsprinsippet).

Dette prinsippet setter en **fundamental grense** for hvor nøyaktig vi kan kjenne visse par av fysiske størrelser samtidig — spesielt posisjon og bevegelsesmengde.

## Klassisk fysikk vs. kvantefysikk

I klassisk fysikk kan vi i prinsippet måle en partikkels posisjon $x$ og bevegelsesmengde $p$ med vilkårlig stor nøyaktighet — begrensningene er bare praktiske (kvaliteten på instrumentene).

I kvantefysikken er dette **fundamentalt umulig**. Det finnes en nedre grense for produktet av usikkerhetene, uansett hvor gode instrumentene våre er. Dette er ikke en teknisk begrensning, men en **fundamental egenskap ved naturen**.`,
    },
    {
      id: 'fys2-7-4-relasjon',
      type: 'theorem',
      title: 'Heisenbergs usikkerhetsrelasjon',
      content: `For en partikkels posisjon $x$ og bevegelsesmengde $p_x$ (i samme retning) gjelder:

$$\\Delta x \\cdot \\Delta p_x \\geq \\frac{\\hbar}{2}$$

der:
- $\\Delta x$ er usikkerheten i posisjon
- $\\Delta p_x$ er usikkerheten i bevegelsesmengde (i $x$-retningen)
- $\\hbar = \\frac{h}{2\\pi} = 1{,}055 \\times 10^{-34}$ J·s er den **reduserte Plancks konstant**

**Konsekvens:** Jo mer nøyaktig vi kjenner en partikkels posisjon ($\\Delta x$ liten), desto mindre nøyaktig kjenner vi bevegelsesmengden ($\\Delta p$ stor), og omvendt.`,
    },
    {
      id: 'fys2-7-4-formula-pos-mom',
      type: 'formula',
      title: 'Usikkerhetsrelasjonen (posisjon-bevegelsesmengde)',
      latex: `\\Delta x \\cdot \\Delta p \\geq \\frac{\\hbar}{2} = \\frac{h}{4\\pi}`,
      description: `Produktet av usikkerhetene i posisjon og bevegelsesmengde kan aldri være mindre enn $\\hbar/2 \\approx 5{,}27 \\times 10^{-35}$ J·s. Her er $\\hbar = h/(2\\pi)$.`,
    },
    {
      id: 'fys2-7-4-energi-tid',
      type: 'theorem',
      title: 'Energi-tid-usikkerhetsrelasjonen',
      content: `Det finnes også en usikkerhetsrelasjon mellom energi og tid:

$$\\Delta E \\cdot \\Delta t \\geq \\frac{\\hbar}{2}$$

der:
- $\\Delta E$ er usikkerheten i energi
- $\\Delta t$ er usikkerheten i tid (tidsvinduet for målingen)

**Konsekvens:** En tilstand som eksisterer i kort tid ($\\Delta t$ liten) har stor usikkerhet i energi ($\\Delta E$ stor). Dette forklarer blant annet bredden på spektrallinjer og virtuelle partikler.`,
    },
    {
      id: 'fys2-7-4-formula-energi-tid',
      type: 'formula',
      title: 'Energi-tid-usikkerhetsrelasjonen',
      latex: `\\Delta E \\cdot \\Delta t \\geq \\frac{\\hbar}{2}`,
      description: `Produktet av usikkerhetene i energi og tid kan aldri være mindre enn $\\hbar/2$. Tilstander med kort levetid har bredere energifordeling.`,
    },
    {
      id: 'fys2-7-4-fysisk-forklaring',
      type: 'text',
      content: `## Fysisk forklaring

### Heisenbergs mikroskop-tankeeksperiment

Heisenberg illustrerte usikkerhetsrelasjonen med et tankeeksperiment. Tenk deg at du vil bestemme posisjonen til et elektron med et mikroskop:

1. For å «se» elektronet må du belyse det med fotoner.
2. For å bestemme posisjonen nøyaktig ($\\Delta x$ liten), trenger du lys med **kort bølgelengde** (f.eks. gammastråler).
3. Men kort bølgelengde betyr **høy energi** ($E = hc/\\lambda$), og når fotonet kolliderer med elektronet, gir det elektronet et kraftig «dytt».
4. Denne kollisjonen endrer elektronets bevegelsesmengde på en uforutsigbar måte ($\\Delta p$ stor).

Omvendt: Bruker du lys med lang bølgelengde (lavt «dytt»), blir usikkerheten i bevegelsesmengde liten, men posisjonen blir bestemt med dårlig nøyaktighet.

### Fundamental egenskap — ikke målefeil!

Det er viktig å forstå at usikkerhetsrelasjonen **ikke** skyldes:
- Dårlige måleinstrumenter
- Forstyrrelser forårsaket av målingen
- Vår uvitenhet om den «egentlige» verdien

Usikkerheten er en **fundamental egenskap** ved kvantemekaniske objekter. En partikkel har rett og slett ikke en bestemt posisjon og bestemt bevegelsesmengde samtidig. De Broglie-bølger illustrerer dette: En bølge med bestemt bølgelengde ($\\Delta p = 0$) strekker seg over hele rommet ($\\Delta x = \\infty$), mens en lokalisert «bølgepakke» ($\\Delta x$ liten) inneholder mange ulike bølgelengder ($\\Delta p$ stor).`,
    },
    {
      id: 'fys2-7-4-note-klassisk',
      type: 'note',
      title: 'Usikkerhetsrelasjonen for makroskopiske objekter',
      content: `For en tennisball ($m = 0{,}057$ kg) med posisjonusikkerhet $\\Delta x = 1$ mm:

$$\\Delta p \\geq \\frac{\\hbar}{2\\Delta x} = \\frac{1{,}055 \\times 10^{-34}}{2 \\times 10^{-3}} = 5{,}3 \\times 10^{-32} \\text{ kg·m/s}$$

$$\\Delta v = \\frac{\\Delta p}{m} = \\frac{5{,}3 \\times 10^{-32}}{0{,}057} = 9{,}3 \\times 10^{-31} \\text{ m/s}$$

Denne fartusikkerheten er **ufattelig liten** — den er ikke målbar med noen kjent teknologi. For makroskopiske objekter er usikkerhetsrelasjonen uten praktisk betydning. Men for elektroner og andre subatomære partikler er den helt avgjørende!`,
    },
    {
      id: 'fys2-7-4-example1',
      type: 'example',
      title: 'Eksempel 1: Usikkerhet for et elektron i et atom',
      problem: `Et elektron er bundet i et hydrogenatom med radius ca. $a_0 = 0{,}053$ nm (Bohr-radius). Anslå minimum usikkerhet i elektronets fart.`,
      solution: `**Gitt:** $\\Delta x \\approx a_0 = 0{,}053$ nm $= 5{,}3 \\times 10^{-11}$ m

Vi tolker dette som at elektronets posisjon er kjent med usikkerhet $\\Delta x \\approx 5{,}3 \\times 10^{-11}$ m.

**Minimum usikkerhet i bevegelsesmengde:**
$$\\Delta p \\geq \\frac{\\hbar}{2\\Delta x} = \\frac{1{,}055 \\times 10^{-34}}{2 \\times 5{,}3 \\times 10^{-11}} = 9{,}95 \\times 10^{-25} \\text{ kg·m/s}$$

**Usikkerhet i fart:**
$$\\Delta v = \\frac{\\Delta p}{m_e} = \\frac{9{,}95 \\times 10^{-25}}{9{,}109 \\times 10^{-31}} = 1{,}09 \\times 10^6 \\text{ m/s}$$

**Svar:** Minimum fartusikkerhet er ca. $1{,}1 \\times 10^6$ m/s — det er omtrent $0{,}4\\%$ av lyshastigheten! Elektronet i et atom har altså en svært stor usikkerhet i farten, noe som betyr at det er meningsløst å snakke om en bestemt bane for elektronet.`,
    },
    {
      id: 'fys2-7-4-example2',
      type: 'example',
      title: 'Eksempel 2: Usikkerhet for en kule',
      problem: `En kule med masse $m = 0{,}010$ kg har posisjon kjent med usikkerhet $\\Delta x = 1{,}0 \\times 10^{-6}$ m (1 mikrometer). Hva er minimum usikkerhet i kulens fart?`,
      solution: `**Gitt:** $m = 0{,}010$ kg, $\\Delta x = 1{,}0 \\times 10^{-6}$ m

**Beregning:**
$$\\Delta p \\geq \\frac{\\hbar}{2\\Delta x} = \\frac{1{,}055 \\times 10^{-34}}{2 \\times 1{,}0 \\times 10^{-6}} = 5{,}28 \\times 10^{-29} \\text{ kg·m/s}$$

$$\\Delta v = \\frac{\\Delta p}{m} = \\frac{5{,}28 \\times 10^{-29}}{0{,}010} = 5{,}3 \\times 10^{-27} \\text{ m/s}$$

**Svar:** Minimum fartusikkerhet er $5{,}3 \\times 10^{-27}$ m/s — en ekstremt liten verdi som er fullstendig umålelig. Usikkerhetsrelasjonen har ingen praktisk betydning for makroskopiske objekter.`,
    },
    {
      id: 'fys2-7-4-example3',
      type: 'example',
      title: 'Eksempel 3: Energi-tid-usikkerhet',
      problem: `En eksitert atomtilstand har levetid $\\Delta t = 1{,}0 \\times 10^{-8}$ s. Beregn minimum usikkerhet i energien til tilstanden.`,
      solution: `**Gitt:** $\\Delta t = 1{,}0 \\times 10^{-8}$ s

**Beregning:**
$$\\Delta E \\geq \\frac{\\hbar}{2\\Delta t} = \\frac{1{,}055 \\times 10^{-34}}{2 \\times 1{,}0 \\times 10^{-8}} = 5{,}3 \\times 10^{-27} \\text{ J}$$

I elektronvolt:
$$\\Delta E = \\frac{5{,}3 \\times 10^{-27}}{1{,}602 \\times 10^{-19}} = 3{,}3 \\times 10^{-8} \\text{ eV}$$

**Svar:** Energiusikkerheten er minst $3{,}3 \\times 10^{-8}$ eV. Dette forklarer hvorfor spektrallinjer har en endelig bredde (naturlig linjebredde) — energiovergangen er ikke skarp, men har en liten spredning.`,
    },
    {
      id: 'fys2-7-4-example4',
      type: 'example',
      title: 'Eksempel 4: Elektron innelukket i en atomkjerne?',
      problem: `Kan et elektron være lokalisert inne i en atomkjerne med radius $r \\approx 5 \\times 10^{-15}$ m? Bruk usikkerhetsrelasjonen til å anslå elektronets kinetiske energi og sammenlign med typiske kjerneenergier ($\\sim 1$ MeV).`,
      solution: `**Gitt:** $\\Delta x \\approx 5 \\times 10^{-15}$ m (kjerneradius)

**Minimum bevegelsesmengde:**
$$\\Delta p \\geq \\frac{\\hbar}{2\\Delta x} = \\frac{1{,}055 \\times 10^{-34}}{2 \\times 5 \\times 10^{-15}} = 1{,}06 \\times 10^{-20} \\text{ kg·m/s}$$

**Minimum kinetisk energi:**
$$E_k \\approx \\frac{(\\Delta p)^2}{2m_e} = \\frac{(1{,}06 \\times 10^{-20})^2}{2 \\times 9{,}109 \\times 10^{-31}} = \\frac{1{,}12 \\times 10^{-40}}{1{,}82 \\times 10^{-30}} = 6{,}2 \\times 10^{-11} \\text{ J}$$

$$E_k = \\frac{6{,}2 \\times 10^{-11}}{1{,}602 \\times 10^{-19}} = 3{,}9 \\times 10^8 \\text{ eV} = 390 \\text{ MeV}$$

**Svar:** Et elektron lokalisert i en atomkjerne ville ha kinetisk energi $\\sim 390$ MeV, mye større enn typiske kjernebindingsenergier ($\\sim$ noen MeV). Derfor kan elektroner **ikke** befinne seg inne i atomkjernen — usikkerhetsrelasjonen forbyr det. (Merk: Ved slike energier bør man bruke relativistisk mekanikk, men konklusjonen er den samme.)`,
    },
    {
      id: 'fys2-7-4-konsekvenser',
      type: 'text',
      content: `## Viktige konsekvenser av usikkerhetsrelasjonen

### 1. Nullpunktsenergi
Usikkerhetsrelasjonen betyr at en partikkel aldri kan være **helt i ro**. Hvis $\\Delta x$ og $\\Delta p$ begge var null, ville produktet $\\Delta x \\cdot \\Delta p = 0 < \\hbar/2$, som er umulig. Partikler har alltid en minimum energi — **nullpunktsenergien**.

### 2. Elektronskyer, ikke baner
I Bohrs atommodell beveger elektronet seg i bestemte baner. Men usikkerhetsrelasjonen viser at det er meningsløst å snakke om en bestemt bane. I stedet beskrives elektronet av en **sannsynlighetsfordeling** (elektronsky) som angir sannsynligheten for å finne elektronet i ulike posisjoner.

### 3. Kvantemekanisk tunnelering
Energi-tid-usikkerheten tillater at en partikkel «låner» energi i en svært kort tid for å passere gjennom en energibarriere den klassisk sett ikke har nok energi til å overvinne. Dette kalles **kvantemekanisk tunnelering**.

### 4. Spektrallinjebredde
Eksiterte atomtilstander har endelig levetid, noe som ifølge $\\Delta E \\cdot \\Delta t \\geq \\hbar/2$ gir en endelig bredde på spektrallinjene.`,
    },
    {
      id: 'fys2-7-4-warning1',
      type: 'warning',
      title: 'Vanlige misforståelser',
      content: `**Misforståelse 1:** «Usikkerheten skyldes at målingen forstyrrer systemet.»
→ Selv om Heisenbergs mikroskop-tankeeksperiment bruker denne forklaringen, er den egentlige årsaken dypere. Usikkerheten er en **fundamental egenskap** ved kvantemekaniske partikler. En partikkel har rett og slett ikke en bestemt posisjon *og* en bestemt bevegelsesmengde samtidig.

**Misforståelse 2:** «Vi kan omgå usikkerheten med bedre teknologi.»
→ Nei! Usikkerhetsrelasjonen er en naturlov, ikke en teknisk begrensning. Ingen forbedring av måleinstrumenter kan gjøre produktet $\\Delta x \\cdot \\Delta p < \\hbar/2$.

**Misforståelse 3:** «Usikkerhetsrelasjonen gjelder for enkeltstørrelser.»
→ Usikkerhetsrelasjonen gjelder bare for bestemte **par** av størrelser (konjugerte variable): posisjon-bevegelsesmengde og energi-tid. Du kan kjenne posisjon og energi samtidig med vilkårlig nøyaktighet!`,
    },
    {
      id: 'fys2-7-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Heisenbergs usikkerhetsrelasjon**: $\\Delta x \\cdot \\Delta p \\geq \\hbar/2$
- **Energi-tid-usikkerheten**: $\\Delta E \\cdot \\Delta t \\geq \\hbar/2$
- Usikkerheten er **fundamental**, ikke et resultat av dårlige målinger.
- For makroskopiske objekter er usikkerheten neglisjerbar.
- For subatomære partikler er usikkerheten avgjørende: den forbyr at elektroner er i atomkjernen, gir nullpunktsenergi, og gjør at vi må erstatte baner med sannsynlighetsfordelinger.
- $\\hbar = h/(2\\pi) = 1{,}055 \\times 10^{-34}$ J·s.`,
    },
  ],
  exercises: [
    {
      id: 'fys2-7-4-ex1',
      type: 'classic',
      difficulty: 'lett',
      task: `Forklar med egne ord hva Heisenbergs usikkerhetsrelasjon sier. Hvorfor er den viktig for kvantefysikken?`,
      solution: `Heisenbergs usikkerhetsrelasjon sier at det er umulig å kjenne en partikkels posisjon og bevegelsesmengde med vilkårlig stor nøyaktighet samtidig. Produktet av usikkerhetene må alltid være minst $\\hbar/2$: $\\Delta x \\cdot \\Delta p \\geq \\hbar/2$. Den er viktig fordi den setter en fundamental grense for hva vi kan vite om kvantemekaniske systemer, og viser at klassiske begreper som «bane» og «posisjon» ikke er direkte anvendelige for subatomære partikler.`,
    },
    {
      id: 'fys2-7-4-ex2',
      type: 'classic',
      difficulty: 'lett',
      task: `Et elektron har posisjon kjent med usikkerhet $\\Delta x = 1{,}0$ nm. Beregn minimum usikkerhet i elektronets bevegelsesmengde og fart.`,
      hints: ['$\\Delta p \\geq \\hbar/(2\\Delta x)$', '$\\Delta v = \\Delta p / m_e$'],
      solution: `$\\Delta p \\geq \\hbar/(2\\Delta x) = 1{,}055 \\times 10^{-34}/(2 \\times 1{,}0 \\times 10^{-9}) = 5{,}28 \\times 10^{-26}$ kg·m/s. $\\Delta v = \\Delta p/m_e = 5{,}28 \\times 10^{-26}/9{,}109 \\times 10^{-31} = 5{,}8 \\times 10^4$ m/s $\\approx 58$ km/s.`,
    },
    {
      id: 'fys2-7-4-ex3',
      type: 'classic',
      difficulty: 'lett',
      task: `Hva er forskjellen mellom $h$ (Plancks konstant) og $\\hbar$ (redusert Plancks konstant)? Beregn verdien av $\\hbar$.`,
      solution: `$\\hbar = h/(2\\pi) = 6{,}626 \\times 10^{-34}/(2\\pi) = 1{,}055 \\times 10^{-34}$ J·s. $h$ brukes i formler som $E = hf$ og $\\lambda = h/p$, mens $\\hbar$ brukes i usikkerhetsrelasjonen og mange kvantemekaniske ligninger. Forskjellen er bare en faktor $2\\pi$.`,
    },
    {
      id: 'fys2-7-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: `Et proton ($m_p = 1{,}673 \\times 10^{-27}$ kg) er lokalisert i en atomkjerne med radius $r = 2{,}0 \\times 10^{-15}$ m. Anslå minimum kinetisk energi for protonet. Oppgi svaret i MeV.`,
      hints: ['$\\Delta x \\approx r$', '$E_k \\approx (\\Delta p)^2/(2m_p)$'],
      solution: `$\\Delta p \\geq \\hbar/(2\\Delta x) = 1{,}055 \\times 10^{-34}/(2 \\times 2{,}0 \\times 10^{-15}) = 2{,}64 \\times 10^{-20}$ kg·m/s. $E_k \\approx (\\Delta p)^2/(2m_p) = (2{,}64 \\times 10^{-20})^2/(2 \\times 1{,}673 \\times 10^{-27}) = 6{,}97 \\times 10^{-40}/(3{,}346 \\times 10^{-27}) = 2{,}08 \\times 10^{-13}$ J $= 1{,}30$ MeV. Denne verdien er i god overensstemmelse med typiske kjerneenergier.`,
    },
    {
      id: 'fys2-7-4-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: `Et eksitert atom har en tilstand med levetid $\\Delta t = 2{,}0 \\times 10^{-9}$ s. Atomet sender ut et foton når det de-eksiteres.

a) Beregn minimum usikkerhet i fotonets energi.
b) Hvis fotonets middelenergi er $E = 2{,}0$ eV, hva er den relative usikkerheten $\\Delta E / E$?`,
      hints: ['$\\Delta E \\geq \\hbar/(2\\Delta t)$'],
      solution: `a) $\\Delta E \\geq \\hbar/(2\\Delta t) = 1{,}055 \\times 10^{-34}/(2 \\times 2{,}0 \\times 10^{-9}) = 2{,}6 \\times 10^{-26}$ J $= 1{,}6 \\times 10^{-7}$ eV.

b) $\\Delta E/E = 1{,}6 \\times 10^{-7}/2{,}0 = 8{,}3 \\times 10^{-8}$. Den relative usikkerheten er altså ca. $10^{-7}$ — spektrallinjen er ekstremt skarp, men har likevel en endelig bredde.`,
    },
    {
      id: 'fys2-7-4-ex6',
      type: 'classic',
      difficulty: 'medium',
      task: `Forklar hvorfor usikkerhetsrelasjonen gjør det umulig for et elektron å ha en bestemt bane rundt atomkjernen, slik Bohr foreslo. Hva erstatter Bohrs baner i moderne kvantemekanikk?`,
      solution: `Bohrs atommodell antar at elektronet beveger seg i bestemte baner med definert posisjon og fart til enhver tid. Men ifølge usikkerhetsrelasjonen kan vi ikke kjenne både posisjon og bevegelsesmengde nøyaktig samtidig. For et elektron i et atom med $\\Delta x \\approx 0{,}1$ nm er fartusikkerheten $\\Delta v \\approx 10^6$ m/s — sammenlignbar med selve farten. Det er altså meningsløst å snakke om en «bane». I moderne kvantemekanikk erstatter man baner med **orbitaler** (sannsynlighetsfordelinger) som angir sannsynligheten for å finne elektronet i ulike posisjoner rundt kjernen. Disse er løsninger av Schrödingers ligning.`,
    },
    {
      id: 'fys2-7-4-ex7',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Et elektron er fanget i en endimensjonal «boks» med lengde $L = 0{,}50$ nm (omtrent størrelsen på et atom).

a) Bruk usikkerhetsrelasjonen til å anslå elektronets minimum kinetiske energi (nullpunktsenergien).
b) Konverter svaret til eV.
c) Sammenlign med den eksakte kvantemekaniske verdien: $E_1 = \\frac{h^2}{8mL^2}$.`,
      hints: ['$\\Delta x \\approx L$', '$E_k \\approx (\\Delta p)^2/(2m_e)$'],
      solution: `a) $\\Delta x \\approx L = 0{,}50 \\times 10^{-9}$ m. $\\Delta p \\geq \\hbar/(2\\Delta x) = 1{,}055 \\times 10^{-34}/(2 \\times 0{,}50 \\times 10^{-9}) = 1{,}055 \\times 10^{-25}$ kg·m/s.

$E_k \\approx (\\Delta p)^2/(2m_e) = (1{,}055 \\times 10^{-25})^2/(2 \\times 9{,}109 \\times 10^{-31}) = 1{,}113 \\times 10^{-50}/(1{,}822 \\times 10^{-30}) = 6{,}11 \\times 10^{-21}$ J.

b) $E_k = 6{,}11 \\times 10^{-21}/1{,}602 \\times 10^{-19} = 0{,}038$ eV.

c) Eksakt: $E_1 = h^2/(8m_eL^2) = (6{,}626 \\times 10^{-34})^2/(8 \\times 9{,}109 \\times 10^{-31} \\times (0{,}50 \\times 10^{-9})^2) = 4{,}39 \\times 10^{-67}/(1{,}822 \\times 10^{-48}) = 2{,}41 \\times 10^{-19}$ J $= 1{,}50$ eV.

Usikkerhetsrelasjonen gir en grov anslag ($0{,}038$ eV) som er lavere enn den eksakte verdien ($1{,}50$ eV) fordi $\\Delta x = L$ overestimerer den effektive størrelsen. Med $\\Delta x = L/(2\\pi)$ ville anslaget vært bedre.`,
    },
    {
      id: 'fys2-7-4-ex8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `En ustabil partikkel har levetid $\\tau = 8{,}4 \\times 10^{-17}$ s.

a) Beregn minimum usikkerhet i partikkelens masse-energi (i eV).
b) Hvis partikkelens hvilemasse tilsvarer $E_0 = m_0c^2 = 91{,}2$ GeV (dette er Z-bosonet), hva er den relative masseusikkerheten $\\Delta m/m_0$?
c) Denne usikkerheten observeres som «bredden» til Z-resonansen i partikkelfysikkeksperimenter. Bruk $\\Gamma = \\Delta E$ til å beregne bredden i GeV.`,
      hints: ['$\\Delta E \\geq \\hbar/(2\\Delta t)$', '$\\Gamma \\approx \\hbar/\\tau$'],
      solution: `a) $\\Delta E \\geq \\hbar/(2\\tau) = 1{,}055 \\times 10^{-34}/(2 \\times 8{,}4 \\times 10^{-17}) = 6{,}28 \\times 10^{-19}$ J $= 3{,}92$ eV.

Mer presist med $\\Gamma \\approx \\hbar/\\tau$: $\\Gamma = 1{,}055 \\times 10^{-34}/(8{,}4 \\times 10^{-17}) = 1{,}256 \\times 10^{-18}$ J $= 7{,}84$ eV.

b) $\\Delta m/m_0 = \\Delta E/E_0 \\approx 3{,}9/(91{,}2 \\times 10^9) = 4{,}3 \\times 10^{-11}$.

c) Den eksperimentelle bredden er $\\Gamma \\approx \\hbar/\\tau = 1{,}055 \\times 10^{-34}/(8{,}4 \\times 10^{-17}) = 1{,}26 \\times 10^{-18}$ J $\\approx 2{,}5$ GeV (den eksperimentelt målte verdien er $\\Gamma_Z = 2{,}495$ GeV). (Merk: Den fulle beregningen krever at man tar hensyn til alle henfalskanalene til Z-bosonet.)`,
    },
  ],
};

// ============================================================================
// Kapittel 7.5: Bohrs atommodell
// ============================================================================

export const CHAPTER_FYSIKK2_7_5: TextbookChapter = {
  id: 'fysikk2-7-5',
  courseId: 'fysikk2',
  chapterNumber: '7.5',
  title: 'Bohrs atommodell',
  description:
    'Lær om Bohrs modell for hydrogenatomet med kvantiserte energinivåer, og forstå emisjon og absorpsjon av spektrallinjer.',
  estimatedMinutes: 90,
  prerequisites: ['fysikk2-7-1'],
  competenceGoals: [
    'gjøre rede for Bohrs atommodell og dens postulater',
    'beregne energinivåer i hydrogenatomet',
    'forklare emisjon og absorpsjon av spektrallinjer',
    'bruke Rydbergs formel til å beregne bølgelengder for spektrallinjer',
    'kjenne til begrensningene i Bohrs modell',
  ],
  content: [
    {
      id: 'fys2-7-5-intro',
      type: 'text',
      content: `# Bohrs atommodell

I 1913, tolv år før kvantemekanikken ble fullt utviklet, foreslo den danske fysikeren **Niels Bohr** en modell for hydrogenatomet som klarte å forklare atomets spektrum. Selv om modellen er en forenkling som senere ble erstattet av kvantemekanikken, gir den fortsatt viktig innsikt og korrekte resultater for hydrogenatomets energinivåer.

## Bakgrunn: Problemer med klassisk fysikk

**Rutherfords planetmodell** (1911) plasserte elektronet i bane rundt kjernen, som en planet rundt solen. Men denne modellen hadde et alvorlig problem:

Et elektron i en sirkulær bane **akselererer** (retningen endres hele tiden). Ifølge klassisk elektromagnetisme skal en akselererende ladning sende ut elektromagnetisk stråling — og dermed miste energi. Elektronet ville spirale innover og kollidere med kjernen i løpet av ca. $10^{-11}$ sekunder!

I tillegg ville strålingen ha en kontinuerlig fordeling av frekvenser, noe som strider mot det observerte **linjespekteret** for hydrogen.

## Linjespekteret til hydrogen

Når man varmer opp hydrogengass eller sender elektrisk strøm gjennom den, sender gassen ut lys. Men dette lyset inneholder ikke alle farger — det består av diskrete, skarpt definerte farger (bølgelengder). Dette kalles et **linjespektrum**.

Allerede i 1885 fant **Johann Balmer** en empirisk formel for de synlige linjene:

$$\\frac{1}{\\lambda} = R_H\\left(\\frac{1}{2^2} - \\frac{1}{n^2}\\right) \\qquad n = 3, 4, 5, \\ldots$$

der $R_H = 1{,}097 \\times 10^7$ m$^{-1}$ er **Rydbergkonstanten**. Men ingen visste *hvorfor* denne formelen stemte.`,
    },
    {
      id: 'fys2-7-5-postulater',
      type: 'theorem',
      title: 'Bohrs postulater',
      content: `Bohr foreslo tre postulater som løste problemene:

**Postulat 1: Stasjonære tilstander**
Elektronet kan bare befinne seg i bestemte, tillatte baner rundt kjernen. I disse banene sender elektronet **ikke** ut stråling, til tross for at det akselererer. Banene kalles **stasjonære tilstander**.

**Postulat 2: Kvantisert dreieimpuls**
Elektronets dreieimpuls er kvantisert:
$$L = n\\hbar = n\\frac{h}{2\\pi} \\qquad n = 1, 2, 3, \\ldots$$
der $n$ er **kvantetallet** (et positivt heltall). Hver verdi av $n$ gir en tillatt bane.

**Postulat 3: Kvantesprang**
Når elektronet hopper fra én stasjonær tilstand til en annen (et **kvantesprang**), sendes eller absorberes et foton med energi lik forskjellen mellom tilstandene:
$$E_{\\text{foton}} = hf = |E_n - E_m|$$`,
    },
    {
      id: 'fys2-7-5-energinivaaer',
      type: 'text',
      content: `## Energinivåer i hydrogenatomet

Ved å kombinere Bohrs postulater med Coulombs lov og Newtons andre lov, kan man utlede energinivåene for hydrogenatomet.

### Utledning (forenklet)

For et elektron i sirkulær bane rundt en proton:

**Coulombkraft = sentripetalkraft:**
$$\\frac{ke^2}{r^2} = \\frac{mv^2}{r}$$

**Kvantiseringsbetingelsen** (postulat 2):
$$mvr = n\\hbar$$

Disse to ligningene gir:`,
    },
    {
      id: 'fys2-7-5-formel-radius',
      type: 'formula',
      title: 'Baneradier i Bohrs modell',
      latex: `r_n = n^2 a_0`,
      description: `Radius for den $n$-te banen, der $a_0 = \\frac{\\hbar^2}{m_e ke^2} = 0{,}0529$ nm er **Bohr-radius** (radius for den innerste banen, $n=1$). Radien vokser med $n^2$: $r_1 = a_0$, $r_2 = 4a_0$, $r_3 = 9a_0$, osv.`,
    },
    {
      id: 'fys2-7-5-formel-energi',
      type: 'formula',
      title: 'Energinivåer for hydrogen',
      latex: `E_n = -\\frac{13{,}6 \\text{ eV}}{n^2} \\qquad n = 1, 2, 3, \\ldots`,
      description: `Energien til den $n$-te stasjonære tilstanden i hydrogenatomet. Det negative fortegnet betyr at elektronet er bundet til kjernen. $n = 1$ er grunntilstanden med lavest energi ($E_1 = -13{,}6$ eV). $n = \\infty$ tilsvarer et fritt elektron ($E = 0$).`,
    },
    {
      id: 'fys2-7-5-def-ionisering',
      type: 'definition',
      title: 'Grunntilstand, eksiterte tilstander og ionisering',
      content: `**Grunntilstanden** ($n = 1$): Den laveste energitilstanden. $E_1 = -13{,}6$ eV. Elektronet er mest bundet.

**Eksiterte tilstander** ($n = 2, 3, 4, \\ldots$): Tilstander med høyere energi (mindre negativt). Elektronet er lenger fra kjernen.

| $n$ | $E_n$ (eV) | $r_n$ (nm) |
|---|---|---|
| 1 | $-13{,}6$ | 0,053 |
| 2 | $-3{,}40$ | 0,212 |
| 3 | $-1{,}51$ | 0,476 |
| 4 | $-0{,}850$ | 0,847 |
| 5 | $-0{,}544$ | 1,32 |
| $\\infty$ | $0$ | $\\infty$ |

**Ioniseringsenergi**: Energien som trengs for å frigjøre elektronet fra grunntilstanden: $E_i = 13{,}6$ eV.`,
    },
    {
      id: 'fys2-7-5-kvantesprang',
      type: 'text',
      content: `## Kvantesprang og spektrallinjer

### Emisjon
Når elektronet hopper fra et høyere energinivå ($n_i$) til et lavere ($n_f < n_i$), sendes ut et foton:

$$E_{\\text{foton}} = E_{n_i} - E_{n_f} = 13{,}6 \\text{ eV} \\left(\\frac{1}{n_f^2} - \\frac{1}{n_i^2}\\right)$$

### Absorpsjon
Når et foton med riktig energi absorberes, hopper elektronet fra et lavere til et høyere nivå. Fotonet må ha **nøyaktig** riktig energi — ellers absorberes det ikke.

### Energinivådiagram

Et energinivådiagram viser alle tillatte energinivåer som horisontale linjer. Kvantesprang tegnes som piler mellom nivåene:
- **Pil nedover** = emisjon (foton sendes ut)
- **Pil oppover** = absorpsjon (foton absorberes)`,
    },
    {
      id: 'fys2-7-5-rydberg',
      type: 'theorem',
      title: 'Rydbergs formel',
      content: `Bølgelengden til et foton utsendt ved overgang fra nivå $n_i$ til $n_f$ er:

$$\\frac{1}{\\lambda} = R_H\\left(\\frac{1}{n_f^2} - \\frac{1}{n_i^2}\\right)$$

der $R_H = 1{,}097 \\times 10^7$ m$^{-1}$ er **Rydbergkonstanten**.

Denne formelen forklarer alle observerte spektralserier for hydrogen.`,
    },
    {
      id: 'fys2-7-5-spektralserier',
      type: 'text',
      content: `## Spektralserier

Overganger til samme sluttnivå $n_f$ danner en **spektralserie**:

| Serie | $n_f$ | $n_i$ | Bølgelengdeområde |
|---|---|---|---|
| **Lyman** | 1 | 2, 3, 4, ... | Ultrafiolett (UV) |
| **Balmer** | 2 | 3, 4, 5, ... | Synlig lys og nær-UV |
| **Paschen** | 3 | 4, 5, 6, ... | Infrarødt (IR) |
| **Brackett** | 4 | 5, 6, 7, ... | Infrarødt (IR) |
| **Pfund** | 5 | 6, 7, 8, ... | Fjernt infrarødt |

### Balmer-serien (synlig lys)

De synlige spektrallinjene for hydrogen tilhører Balmer-serien:

| Overgang | Bølgelengde | Farge |
|---|---|---|
| $3 \\to 2$ (H$\\alpha$) | 656 nm | Rød |
| $4 \\to 2$ (H$\\beta$) | 486 nm | Blågrønn |
| $5 \\to 2$ (H$\\gamma$) | 434 nm | Blå |
| $6 \\to 2$ (H$\\delta$) | 410 nm | Fiolett |
| $\\infty \\to 2$ (seriegrense) | 365 nm | UV |

### Lyman-serien (UV)

Overganger til grunntilstanden ($n_f = 1$) frigjør mest energi og gir UV-stråling:
- $2 \\to 1$: $\\lambda = 122$ nm
- $\\infty \\to 1$: $\\lambda = 91{,}2$ nm (seriegrensen, tilsvarer ioniseringsenergien)`,
    },
    {
      id: 'fys2-7-5-example1',
      type: 'example',
      title: 'Eksempel 1: Bølgelengde for Balmer-alfa',
      problem: `Beregn bølgelengden for H$\\alpha$-linjen i Balmer-serien (overgang $n = 3 \\to n = 2$).`,
      solution: `**Gitt:** $n_i = 3$, $n_f = 2$, $R_H = 1{,}097 \\times 10^7$ m$^{-1}$

**Rydbergs formel:**
$$\\frac{1}{\\lambda} = R_H\\left(\\frac{1}{n_f^2} - \\frac{1}{n_i^2}\\right) = 1{,}097 \\times 10^7 \\left(\\frac{1}{4} - \\frac{1}{9}\\right)$$

$$= 1{,}097 \\times 10^7 \\times \\frac{9 - 4}{36} = 1{,}097 \\times 10^7 \\times \\frac{5}{36} = 1{,}524 \\times 10^6 \\text{ m}^{-1}$$

$$\\lambda = \\frac{1}{1{,}524 \\times 10^6} = 6{,}56 \\times 10^{-7} \\text{ m} = 656 \\text{ nm}$$

**Svar:** $\\lambda = 656$ nm — dette er rødt lys, og gir hydrogen dens karakteristiske rødlige glød.`,
    },
    {
      id: 'fys2-7-5-example2',
      type: 'example',
      title: 'Eksempel 2: Energi for kvantesprang',
      problem: `Et hydrogenatom i grunntilstanden ($n = 1$) absorberer et foton og eksiteres til $n = 3$.

a) Beregn energien til det absorberte fotonet.
b) Beregn fotonets bølgelengde.`,
      solution: `**a) Fotonets energi:**

$$E = E_3 - E_1 = -\\frac{13{,}6}{3^2} - \\left(-\\frac{13{,}6}{1^2}\\right) = -1{,}51 + 13{,}6 = 12{,}09 \\text{ eV}$$

**b) Bølgelengde:**

$$E = \\frac{hc}{\\lambda} \\implies \\lambda = \\frac{hc}{E}$$

$E = 12{,}09 \\times 1{,}602 \\times 10^{-19} = 1{,}937 \\times 10^{-18}$ J

$$\\lambda = \\frac{6{,}626 \\times 10^{-34} \\times 3{,}00 \\times 10^8}{1{,}937 \\times 10^{-18}} = 1{,}03 \\times 10^{-7} \\text{ m} = 103 \\text{ nm}$$

**Svar:** a) $E = 12{,}09$ eV. b) $\\lambda = 103$ nm (UV-stråling, Lyman-serien).`,
    },
    {
      id: 'fys2-7-5-example3',
      type: 'example',
      title: 'Eksempel 3: Ionisering av hydrogen',
      problem: `Hvor mye energi trengs for å ionisere et hydrogenatom som befinner seg i:
a) Grunntilstanden ($n = 1$)?
b) Første eksiterte tilstand ($n = 2$)?`,
      solution: `Ionisering betyr å fjerne elektronet helt ($n \\to \\infty$, $E_\\infty = 0$).

**a) Fra grunntilstanden:**
$$E_i = E_\\infty - E_1 = 0 - (-13{,}6) = 13{,}6 \\text{ eV}$$

**b) Fra $n = 2$:**
$$E_i = E_\\infty - E_2 = 0 - (-3{,}40) = 3{,}40 \\text{ eV}$$

**Svar:** a) 13,6 eV fra grunntilstanden. b) 3,40 eV fra $n = 2$. Det trengs mye mindre energi å ionisere et allerede eksitert atom.`,
    },
    {
      id: 'fys2-7-5-example4',
      type: 'example',
      title: 'Eksempel 4: Mulige overganger',
      problem: `Et hydrogenatom er i tilstanden $n = 4$. Hvilke bølgelengder kan det sende ut når det de-eksiteres?`,
      solution: `Fra $n = 4$ kan atomet hoppe til $n = 3$, $n = 2$ eller $n = 1$. I tillegg kan det hoppe fra $n = 4$ til $n = 3$, og deretter fra $n = 3$ til lavere nivåer. De mulige direkte overgangene er:

**$4 \\to 3$ (Paschen-serien, IR):**
$1/\\lambda = R_H(1/9 - 1/16) = 1{,}097 \\times 10^7 \\times 7/144 = 5{,}33 \\times 10^5$ m$^{-1}$
$\\lambda = 1876$ nm

**$4 \\to 2$ (Balmer-serien, synlig):**
$1/\\lambda = R_H(1/4 - 1/16) = 1{,}097 \\times 10^7 \\times 3/16 = 2{,}06 \\times 10^6$ m$^{-1}$
$\\lambda = 486$ nm (blågrønt lys, H$\\beta$)

**$4 \\to 1$ (Lyman-serien, UV):**
$1/\\lambda = R_H(1/1 - 1/16) = 1{,}097 \\times 10^7 \\times 15/16 = 1{,}028 \\times 10^7$ m$^{-1}$
$\\lambda = 97{,}3$ nm

I tillegg kan atomet kaskade: $4 \\to 3 \\to 2 \\to 1$ eller $4 \\to 3 \\to 1$ eller $4 \\to 2 \\to 1$, som gir ytterligere linjer ($3 \\to 2$: 656 nm, $3 \\to 1$: 103 nm, $2 \\to 1$: 122 nm).

**Totalt 6 mulige linjer** fra et atom i $n = 4$.`,
    },
    {
      id: 'fys2-7-5-begrensninger',
      type: 'text',
      content: `## Begrensninger i Bohrs modell

Bohrs modell var en stor suksess for hydrogenatomet, men den har flere begrensninger:

1. **Fungerer bare for hydrogen**: Modellen gir ikke korrekte resultater for atomer med mer enn ett elektron (elektron-elektron-vekselvirkninger ignoreres).

2. **Bestemte baner er feil**: Usikkerhetsrelasjonen (Heisenberg, 1927) viser at elektronet ikke kan ha en bestemt bane. Baner erstattes av **orbitaler** i kvantemekanikken.

3. **Mangler spinns**: Modellen tar ikke hensyn til elektronets spinn, som er nødvendig for å forklare finstrukturen i spektrallinjer.

4. **Forklarer ikke intensiteter**: Modellen sier ingenting om hvor sterke de ulike spektrallinjene er.

5. **Flat modell**: Bohrs baner er sirkler i et plan, mens den virkelige kvantemekaniske beskrivelsen er tredimensjonal.

Til tross for disse begrensningene er Bohrs modell verdifull som pedagogisk verktøy og gir korrekte energinivåer for hydrogen-lignende atomer (He$^+$, Li$^{2+}$, osv.).`,
    },
    {
      id: 'fys2-7-5-emisjon-absorpsjon',
      type: 'note',
      title: 'Huskeregel: Emisjon vs. absorpsjon',
      content: `**Emisjon** (foton sendes ut):
- Elektronet hopper fra høyt til lavt energinivå ($n_i > n_f$)
- Foton sendes ut med energi $E = E_{n_i} - E_{n_f}$
- Gir **emisjonsspektrum** (lyse linjer på mørk bakgrunn)

**Absorpsjon** (foton absorberes):
- Elektronet hopper fra lavt til høyt energinivå ($n_f > n_i$)
- Fotonet som absorberes må ha **nøyaktig riktig energi**
- Gir **absorpsjonsspektrum** (mørke linjer på lys bakgrunn)

**Huskeregel:** Absorpsjonslinjene for et stoff har *nøyaktig samme bølgelengder* som emisjonslinjene.`,
    },
    {
      id: 'fys2-7-5-warning1',
      type: 'warning',
      title: 'Vanlige feil',
      content: `**Feil 1:** Å glemme at energinivåene er **negative**.
→ $E_n = -13{,}6/n^2$ eV. Energien er negativ fordi elektronet er bundet. $E = 0$ betyr et fritt elektron.

**Feil 2:** Å forveksle rekkefølgen i Rydbergs formel.
→ For **emisjon**: $1/\\lambda = R_H(1/n_f^2 - 1/n_i^2)$ der $n_f < n_i$. Pass på at uttrykket er positivt.

**Feil 3:** Å tro at energinivåene er jevnt fordelt.
→ Energiforskjellen avtar for høyere $n$: $|E_2 - E_1| = 10{,}2$ eV, mens $|E_3 - E_2| = 1{,}89$ eV. Nivåene konvergerer mot $E = 0$.

**Feil 4:** Å bruke Bohrs modell for andre atomer enn hydrogen.
→ Modellen gir kun korrekte resultater for hydrogenatomet og hydrogen-lignende ioner (He$^+$, Li$^{2+}$, osv.).`,
    },
    {
      id: 'fys2-7-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Bohrs postulater**: Kvantiserte baner, ingen stråling i stasjonære tilstander, kvantesprang med fotonemisjon/absorpsjon.
- **Energinivåer**: $E_n = -13{,}6/n^2$ eV for hydrogen.
- **Baneradier**: $r_n = n^2 a_0$ der $a_0 = 0{,}0529$ nm.
- **Rydbergs formel**: $1/\\lambda = R_H(1/n_f^2 - 1/n_i^2)$ med $R_H = 1{,}097 \\times 10^7$ m$^{-1}$.
- **Spektralserier**: Lyman (UV), Balmer (synlig), Paschen (IR).
- **Ioniseringsenergi**: 13,6 eV fra grunntilstanden.
- **Begrensninger**: Fungerer bare for hydrogen, bestemte baner er feil, mangler spinn.`,
    },
  ],
  exercises: [
    {
      id: 'fys2-7-5-ex1',
      type: 'classic',
      difficulty: 'lett',
      task: `Beregn energien til de fire laveste energinivåene i hydrogenatomet ($n = 1, 2, 3, 4$) i elektronvolt.`,
      hints: ['$E_n = -13{,}6/n^2$ eV'],
      solution: `$E_1 = -13{,}6/1 = -13{,}6$ eV. $E_2 = -13{,}6/4 = -3{,}40$ eV. $E_3 = -13{,}6/9 = -1{,}51$ eV. $E_4 = -13{,}6/16 = -0{,}850$ eV.`,
    },
    {
      id: 'fys2-7-5-ex2',
      type: 'classic',
      difficulty: 'lett',
      task: `Hva er ioniseringsenergien for hydrogen? Forklar hva ionisering betyr.`,
      solution: `Ioniseringsenergien er 13,6 eV. Ionisering betyr å fjerne elektronet helt fra atomet (fra grunntilstanden $n = 1$ til $n = \\infty$, der $E = 0$). Man må tilføre energi lik $E_\\infty - E_1 = 0 - (-13{,}6) = 13{,}6$ eV for å frigjøre elektronet.`,
    },
    {
      id: 'fys2-7-5-ex3',
      type: 'classic',
      difficulty: 'lett',
      task: `Forklar de tre postulatene i Bohrs atommodell med egne ord. Nevn én viktig begrensning ved modellen.`,
      solution: `Postulat 1: Elektronet kan bare befinne seg i bestemte tillatte baner (stasjonære tilstander) og sender ikke ut stråling i disse. Postulat 2: Elektronets dreieimpuls er kvantisert: $L = n\\hbar$. Postulat 3: Når elektronet hopper mellom tilstander, sendes ut eller absorberes et foton med energi lik energiforskjellen. En viktig begrensning er at modellen bare fungerer for hydrogen (og hydrogenliknende ioner). For atomer med flere elektroner gir den feil resultater.`,
    },
    {
      id: 'fys2-7-5-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: `Beregn bølgelengden for den første linjen i Lyman-serien ($n = 2 \\to n = 1$) og den første linjen i Paschen-serien ($n = 4 \\to n = 3$). I hvilket bølgelengdeområde ligger hver?`,
      hints: ['$1/\\lambda = R_H(1/n_f^2 - 1/n_i^2)$'],
      solution: `**Lyman ($2 \\to 1$):**
$1/\\lambda = 1{,}097 \\times 10^7 \\times (1/1 - 1/4) = 1{,}097 \\times 10^7 \\times 3/4 = 8{,}23 \\times 10^6$ m$^{-1}$.
$\\lambda = 122$ nm — **ultrafiolett**.

**Paschen ($4 \\to 3$):**
$1/\\lambda = 1{,}097 \\times 10^7 \\times (1/9 - 1/16) = 1{,}097 \\times 10^7 \\times 7/144 = 5{,}33 \\times 10^5$ m$^{-1}$.
$\\lambda = 1876$ nm — **infrarødt**.`,
    },
    {
      id: 'fys2-7-5-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: `Et hydrogenatom i grunntilstanden treffes av et foton med bølgelengde $\\lambda = 95{,}0$ nm.

a) Beregn fotonets energi i eV.
b) Har fotonet nok energi til å ionisere atomet?
c) Hva er den kinetiske energien til det frigjorte elektronet?`,
      hints: ['$E = hc/\\lambda$', 'Ioniseringsenergi = 13,6 eV'],
      solution: `a) $E = hc/\\lambda = 6{,}626 \\times 10^{-34} \\times 3{,}00 \\times 10^8/(95{,}0 \\times 10^{-9}) = 2{,}09 \\times 10^{-18}$ J $= 13{,}1$ eV.

b) Ioniseringsenergien er 13,6 eV. Fotonet har 13,1 eV. **Nei**, fotonet har ikke nok energi til å ionisere atomet fra grunntilstanden.

c) Siden fotonet ikke kan ionisere atomet, frigjøres ikke noe elektron. Fotonet kan eventuelt eksitere atomet til $n = 4$ ($E_4 - E_1 = 12{,}75$ eV) hvis energien passer, men 13,1 eV passer ikke nøyaktig til noen overgang, så fotonet absorberes ikke.`,
    },
    {
      id: 'fys2-7-5-ex6',
      type: 'classic',
      difficulty: 'medium',
      task: `Beregn Bohr-radius og baneradiusen for $n = 1$, $n = 2$ og $n = 3$ i hydrogenatomet. Tegn en skisse av de tre banene.`,
      hints: ['$r_n = n^2 a_0$ der $a_0 = 0{,}0529$ nm'],
      solution: `$r_1 = 1^2 \\times 0{,}0529 = 0{,}0529$ nm (Bohr-radius).
$r_2 = 2^2 \\times 0{,}0529 = 4 \\times 0{,}0529 = 0{,}212$ nm.
$r_3 = 3^2 \\times 0{,}0529 = 9 \\times 0{,}0529 = 0{,}476$ nm.

Banene er konsentriske sirkler rundt kjernen. Forholdet mellom radiusene er $1 : 4 : 9$ (altså $n^2$). Den tredje banen er 9 ganger så stor som den første.`,
    },
    {
      id: 'fys2-7-5-ex7',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Et hydrogenatom i tilstanden $n = 5$ de-eksiteres ved å sende ut fotoner.

a) Hvor mange ulike spektrallinjer kan potensielt produseres?
b) Beregn bølgelengden for overgangen med kortest bølgelengde (mest energi).
c) Beregn bølgelengden for overgangen med lengst bølgelengde (minst energi).`,
      hints: ['Antall linjer fra $n = N$: $\\frac{N(N-1)}{2}$', 'Kortest bølgelengde: $5 \\to 1$', 'Lengst bølgelengde: $5 \\to 4$'],
      solution: `a) Fra $n = 5$ kan atomet sende ut fotoner for alle overganger mellom nivåer fra 5 ned til 1. Antall mulige overganger: $\\binom{5}{2} = 5 \\times 4/2 = 10$ linjer.

b) Kortest bølgelengde ($5 \\to 1$, mest energi):
$1/\\lambda = 1{,}097 \\times 10^7 \\times (1/1 - 1/25) = 1{,}097 \\times 10^7 \\times 24/25 = 1{,}053 \\times 10^7$ m$^{-1}$.
$\\lambda = 95{,}0$ nm (UV, Lyman-serien).

c) Lengst bølgelengde ($5 \\to 4$, minst energi):
$1/\\lambda = 1{,}097 \\times 10^7 \\times (1/16 - 1/25) = 1{,}097 \\times 10^7 \\times (25-16)/400 = 1{,}097 \\times 10^7 \\times 9/400 = 2{,}47 \\times 10^5$ m$^{-1}$.
$\\lambda = 4050$ nm (IR, Brackett-serien).`,
    },
    {
      id: 'fys2-7-5-ex8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Bruk Bohrs modell til å beregne energinivåene for He$^+$ (heliumion med ett elektron). Heliumkjernen har ladning $Ze = 2e$.

a) Vis at energinivåene er $E_n = -Z^2 \\times 13{,}6/n^2$ eV.
b) Beregn de tre laveste energinivåene for He$^+$.
c) Beregn ioniseringsenergien for He$^+$ fra grunntilstanden.
d) Hvilken bølgelengde har fotonet som sendes ut ved overgangen $n = 3 \\to n = 2$ i He$^+$?`,
      hints: ['For hydrogen-lignende ioner erstatter man $e^2$ med $Ze^2$ i Coulomb-kraften', '$R_H$ erstattes med $Z^2 R_H$'],
      solution: `a) For et hydrogen-lignende ion med kjerneladning $Z$ endres Coulomb-kraften fra $ke^2/r^2$ til $kZe^2/r^2$. Dette gir $E_n = -Z^2 \\times 13{,}6/n^2$ eV.

b) For He$^+$ ($Z = 2$):
$E_1 = -4 \\times 13{,}6/1 = -54{,}4$ eV.
$E_2 = -4 \\times 13{,}6/4 = -13{,}6$ eV.
$E_3 = -4 \\times 13{,}6/9 = -6{,}04$ eV.

c) $E_i = 0 - (-54{,}4) = 54{,}4$ eV (4 ganger hydrogens ioniseringsenergi).

d) $E_{\\text{foton}} = E_3 - E_2 = -6{,}04 - (-13{,}6) = 7{,}56$ eV $= 1{,}21 \\times 10^{-18}$ J.
$\\lambda = hc/E = 6{,}626 \\times 10^{-34} \\times 3{,}00 \\times 10^8/1{,}21 \\times 10^{-18} = 164$ nm (UV).

Alternativt: $1/\\lambda = Z^2 R_H(1/4 - 1/9) = 4 \\times 1{,}097 \\times 10^7 \\times 5/36 = 6{,}09 \\times 10^6$ m$^{-1}$. $\\lambda = 164$ nm.`,
    },
    {
      id: 'fys2-7-5-ex9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Forklar sammenhengen mellom de Broglies hypotese og Bohrs kvantiseringsbetingelse. Vis at kravet om at elektronets bane skal romme et helt antall de Broglie-bølgelengder gir $L = n\\hbar$.`,
      solution: `de Broglie foreslo at elektronet har bølgelengde $\\lambda = h/(mv)$. Hvis elektronet beveger seg i en sirkulær bane med radius $r$, må banen romme et helt antall bølgelengder for at bølgen skal interferere konstruktivt med seg selv (ellers destruerer den seg selv):

$2\\pi r = n\\lambda$ der $n = 1, 2, 3, \\ldots$

Setter vi inn $\\lambda = h/(mv)$:

$2\\pi r = n \\cdot h/(mv)$

$mvr = nh/(2\\pi) = n\\hbar$

Men $mvr = L$ (dreieimpulsen), så vi får:

$L = n\\hbar$

Dette er akkurat Bohrs kvantiseringsbetingelse! de Broglies bølgehypotese ga altså en fysisk begrunnelse for Bohrs ellers ad hoc postulat. Stasjonære tilstander tilsvarer stående de Broglie-bølger rundt kjernen.`,
    },
  ],
};

// ============================================================================
// Kapittel 7.6: Kvantefenomener i hverdagen
// ============================================================================

export const CHAPTER_FYSIKK2_7_6: TextbookChapter = {
  id: 'fysikk2-7-6',
  courseId: 'fysikk2',
  chapterNumber: '7.6',
  title: 'Kvantefenomener i hverdagen',
  description:
    'Utforsk hvordan kvantefysikk ligger til grunn for moderne teknologi som lasere, LED, solceller og kvantedatamaskiner.',
  estimatedMinutes: 75,
  prerequisites: ['fysikk2-7-5'],
  competenceGoals: [
    'gi eksempler på teknologi som bygger på kvantefysiske prinsipper',
    'forklare hvordan stimulert emisjon ligger til grunn for laseren',
    'beskrive virkemåten til LED og solceller ved hjelp av energinivåer',
    'gjøre rede for kvantemekanisk tunnelering og anvendelser',
  ],
  content: [
    {
      id: 'fys2-7-6-intro',
      type: 'text',
      content: `# Kvantefenomener i hverdagen

Kvantefysikk kan virke abstrakt og fjernt fra hverdagen, men faktum er at en stor del av moderne teknologi er direkte basert på kvantemekaniske prinsipper. Uten kvantefysikk ville vi ikke hatt datamaskiner, smarttelefoner, lasere, LED-lys eller solceller.

I dette kapittelet ser vi på hvordan de kvantemekaniske fenomenene vi har lært om — energikvantisering, fotoner, bølge-partikkel-dualitet og tunnelering — ligger til grunn for teknologi vi bruker daglig.`,
    },
    {
      id: 'fys2-7-6-laser-intro',
      type: 'text',
      content: `## Lasere

**LASER** er et akronym for **L**ight **A**mplification by **S**timulated **E**mission of **R**adiation — lysforsterkning ved stimulert emisjon av stråling.

Lasere er en av de viktigste oppfinnelsene fra kvantefysikken. De brukes i alt fra strekkodelesere og CD/DVD-spillere til medisinsk kirurgi, fiberoptisk kommunikasjon og industriell skjæring.

### Tre typer emisjon og absorpsjon

For å forstå laseren må vi skille mellom tre prosesser:

**1. Spontan emisjon:**
Et atom i en eksitert tilstand faller spontant ned til en lavere tilstand og sender ut et foton. Fotonet har tilfeldig retning og fase. Dette er den vanlige måten atomer sender ut lys.

**2. Absorpsjon:**
Et foton med riktig energi absorberes av et atom i grunntilstanden, som eksiteres.

**3. Stimulert emisjon (nøkkelen til laseren):**
Et foton som treffer et atom i en eksitert tilstand, kan *stimulere* atomet til å sende ut et identisk foton — med **samme frekvens, fase, retning og polarisasjon** som det innkommende fotonet. Nå har vi to identiske fotoner istedenfor ett!

Stimulert emisjon ble forutsagt av **Einstein** allerede i 1917, men den første laseren ble ikke bygget før i 1960 (av Theodore Maiman).`,
    },
    {
      id: 'fys2-7-6-def-laser',
      type: 'definition',
      title: 'Stimulert emisjon og koherent lys',
      content: `**Stimulert emisjon**: Et innkommende foton får et eksitert atom til å sende ut et foton som er **identisk** med det innkommende:
- Samme frekvens (energi)
- Samme fase
- Samme retning
- Samme polarisasjon

Resultatet er to identiske fotoner — lyset er **forsterket**.

**Koherent lys**: Lys der alle fotoner har samme frekvens og fase. Laserlys er koherent, i motsetning til vanlig lys (fra glødelamper, LED, etc.) som er **inkoherent** (tilfeldig fase).

Koherens er det som gjør laserlys spesielt: det gir en svært smal, intens stråle som kan fokuseres til en prikk og beholde sin form over lange avstander.`,
    },
    {
      id: 'fys2-7-6-laser-oppbygging',
      type: 'text',
      content: `### Oppbygning av en laser

En laser består av tre hovedelementer:

**1. Aktivt medium (lasermedium):**
Materialet som produserer stimulert emisjon. Det kan være en gass (helium-neon), en fast krystall (rubin, Nd:YAG), en halvleder (diode-laser) eller en væske (fargestofflaser).

**2. Pumping (energitilførsel):**
For å oppnå stimulert emisjon må **flere atomer være i eksitert tilstand enn i grunntilstanden** — dette kalles **populasjonsinversjon**. Normalt er de fleste atomene i grunntilstanden (termisk likevekt). Populasjonsinversjon oppnås ved å «pumpe» energi inn, f.eks. med et annet lys, elektrisk strøm, eller kjemisk reaksjon.

**3. Optisk resonator (speilene):**
To speil plasseres på hver side av det aktive mediet. Fotonene reflekteres fram og tilbake og stimulerer stadig flere atomer, noe som gir en kaskade av stimulert emisjon (lavirkning). Ett speil er halvgjennomsiktig slik at en del av lyset slipper ut som laserstrålen.

### Populasjonsinversjon

Under normale forhold er de fleste atomene i grunntilstanden. For stimulert emisjon må vi ha **flere atomer i eksitert tilstand enn i grunntilstanden**. Dette oppnås typisk med et **trenivåsystem** eller **firenivåsystem**, der pumping eksiterer atomer til et høyt nivå som raskt deseksiterer til et metastabilt nivå med lang levetid.`,
    },
    {
      id: 'fys2-7-6-laser-anvendelser',
      type: 'note',
      title: 'Anvendelser av lasere',
      content: `**Hverdagsteknologi:**
- Strekkodelesere i butikker
- CD, DVD og Blu-ray-spillere (leser/skriver data)
- Laserpekere og presentasjon
- Fiberoptisk kommunikasjon (internett)

**Medisin:**
- Øyekirurgi (LASIK) — korrigerer synsfeil
- Laserkirurgi — presis skjæring med minimal blødning
- Hudbehandling og fjerning av tatoveringer
- Tannbehandling

**Industri og vitenskap:**
- Laserskjæring og -sveising av metall
- 3D-printing (SLA)
- LIDAR (avstandsmåling, brukes i selvkjørende biler)
- Gravitasjonsbølgedetektorer (LIGO)
- Laserkjøling av atomer (Nobelprisen 1997)`,
    },
    {
      id: 'fys2-7-6-led',
      type: 'text',
      content: `## LED — lysdioder

**LED** (Light Emitting Diode) er en halvlederkomponent som sender ut lys når strøm passerer gjennom den. LED-er er energieffektive, har lang levetid, og brukes overalt — fra mobilskjermer til billykt, trafikkskilt og boligbelysning.

### Hvordan fungerer en LED?

En LED er basert på en **p-n-overgang** i en halvleder:

- **n-type halvleder**: Har overskudd av elektroner (negative ladningsbærere)
- **p-type halvleder**: Har overskudd av «hull» (positive ladningsbærere)

Når strøm passerer gjennom overgangen, rekombinerer elektroner og hull. Ved rekombinasjon **frigis energi** i form av et foton. Fotonets energi (og dermed fargen på lyset) bestemmes av **båndgapet** $E_g$ i halvlederen:

$$E_{\\text{foton}} = hf = E_g$$

$$\\lambda = \\frac{hc}{E_g}$$`,
    },
    {
      id: 'fys2-7-6-def-bandgap',
      type: 'definition',
      title: 'Båndgap i halvledere',
      content: `**Båndgapet** $E_g$ er energiforskjellen mellom **valensbåndet** (der elektronene normalt befinner seg) og **ledningsbåndet** (der frie elektroner kan bevege seg).

Forskjellige halvledermaterialer har forskjellige båndgap, og dette bestemmer LED-ens farge:

| Materiale | $E_g$ (eV) | Bølgelengde (nm) | Farge |
|---|---|---|---|
| GaAs (galliumarsenid) | 1,42 | 870 | Infrarød |
| GaAsP (galliumarsenidfosfid) | 1,95 | 635 | Rød |
| GaP (galliumfosfid) | 2,26 | 549 | Grønn |
| InGaN (indiumgalliumnitrid) | 2,64 | 470 | Blå |
| InGaN/GaN | 3,0+ | <410 | UV |

**Hvite LED-er** lages enten ved å blande rød, grønn og blå LED, eller ved å bruke en blå LED med et fosforlag som konverterer noe av det blå lyset til gult.

**Nobelpris 2014** ble tildelt for oppfinnelsen av den **blå LED-en** (Akasaki, Amano, Nakamura), som muliggjorde energieffektiv hvit belysning.`,
    },
    {
      id: 'fys2-7-6-example1',
      type: 'example',
      title: 'Eksempel 1: Bølgelengde fra en LED',
      problem: `En rød LED er laget av GaAsP med båndgap $E_g = 1{,}95$ eV. Beregn bølgelengden til lyset som sendes ut.`,
      solution: `**Gitt:** $E_g = 1{,}95$ eV $= 1{,}95 \\times 1{,}602 \\times 10^{-19} = 3{,}12 \\times 10^{-19}$ J

**Bølgelengde:**
$$\\lambda = \\frac{hc}{E_g} = \\frac{6{,}626 \\times 10^{-34} \\times 3{,}00 \\times 10^8}{3{,}12 \\times 10^{-19}} = 6{,}37 \\times 10^{-7} \\text{ m} = 637 \\text{ nm}$$

**Svar:** $\\lambda = 637$ nm — dette er rødt lys, som forventet.`,
    },
    {
      id: 'fys2-7-6-solceller',
      type: 'text',
      content: `## Solceller — fotoelektrisk effekt i praksis

En **solcelle** omdanner sollys direkte til elektrisk energi. Den er basert på den fotoelektriske effekten i halvledermaterialer, vanligvis silisium.

### Virkemåte

1. Et **foton** fra sollyset treffer solcellen og absorberes av halvlederen.
2. Hvis fotonets energi er **større enn båndgapet** ($E \\geq E_g$), kan det slå løs et elektron fra valensbåndet til ledningsbåndet. Dette skaper et elektron-hull-par.
3. Den innebygde elektriske feltet i **p-n-overgangen** separerer elektronet og hullet.
4. Elektronene samles opp av metallkontakter og driver en ytre krets — **elektrisk strøm**.

### Effektivitet og båndgap

Solcellens effektivitet avhenger av forholdet mellom båndgapet og solspekteret:

- **For lite båndgap** ($E_g < 1$ eV): De fleste fotoner absorberes, men overskuddsenergien ($E - E_g$) går tapt som varme.
- **For stort båndgap** ($E_g > 3$ eV): Få fotoner har nok energi til å absorberes.
- **Optimalt båndgap**: Ca. $1{,}1$–$1{,}5$ eV. Silisium ($E_g = 1{,}12$ eV) er nær optimalt.

Maksimal teoretisk effektivitet for en enkeltkrystall-solcelle med $E_g = 1{,}34$ eV er ca. **33 %** (Shockley-Queisser-grensen). Kommersielle silisiumsolceller har typisk 20–25 % effektivitet.`,
    },
    {
      id: 'fys2-7-6-example2',
      type: 'example',
      title: 'Eksempel 2: Grensebølgelengde for en solcelle',
      problem: `En silisiumsolcelle har båndgap $E_g = 1{,}12$ eV. Hva er den lengste bølgelengden som solcellen kan utnytte?`,
      solution: `**Gitt:** $E_g = 1{,}12$ eV $= 1{,}12 \\times 1{,}602 \\times 10^{-19} = 1{,}79 \\times 10^{-19}$ J

Fotonet må ha minst energi $E_g$ for å skape et elektron-hull-par:

$$\\lambda_{\\text{maks}} = \\frac{hc}{E_g} = \\frac{6{,}626 \\times 10^{-34} \\times 3{,}00 \\times 10^8}{1{,}79 \\times 10^{-19}} = 1{,}11 \\times 10^{-6} \\text{ m} = 1110 \\text{ nm}$$

**Svar:** $\\lambda_{\\text{maks}} = 1110$ nm. Fotoner med bølgelengde over 1110 nm (infrarødt) har for lite energi og passerer gjennom silisiumet uten å absorberes. Solcellen kan utnytte synlig lys og nær-infrarødt.`,
    },
    {
      id: 'fys2-7-6-tunnelering',
      type: 'text',
      content: `## Kvantemekanisk tunnelering

I klassisk fysikk kan en partikkel ikke passere gjennom en energibarriere den ikke har nok energi til å overvinne. Tenk på en ball som trilles mot en bakketopp — har den for lite fart, ruller den tilbake.

I kvantefysikken er dette annerledes. En kvantemekanisk partikkel har en viss sannsynlighet for å dukke opp på **den andre siden** av barrieren, selv om den klassisk sett ikke har nok energi. Dette kalles **kvantemekanisk tunnelering**.

### Fysisk forklaring

Partikkelens bølgefunksjon (sannsynlighetsbølge) dør ikke brått ut ved barrieren, men avtar **eksponentielt** inne i barrieren. Hvis barrieren er tynn nok, er det fortsatt en endelig sannsynlighet for å finne partikkelen på den andre siden.

### Tunnelingssannsynlighet

Sannsynligheten for tunnelering avhenger av:
- **Barrierens bredde** $L$: Smalere barriere → høyere sannsynlighet
- **Barrierens høyde** $V_0 - E$: Lavere barriere → høyere sannsynlighet
- **Partikkelens masse** $m$: Lettere partikkel → høyere sannsynlighet

Tunnelingssannsynligheten avtar **eksponentielt** med barrierens bredde. For makroskopiske objekter er barrierene så brede at tunnelering i praksis aldri skjer.`,
    },
    {
      id: 'fys2-7-6-tunnelering-anvendelser',
      type: 'text',
      content: `### Anvendelser av tunnelering

**1. Alfapartikkelhenfall:**
Radioaktive kjerner sender ut alfapartikler ($^4_2\\text{He}$). Alfapartikkelen er «fanget» inne i kjernen av en energibarriere (den sterke kjernekraften). Men på grunn av tunnelering kan den «lekke» gjennom barrieren. Halveringstiden for alfahenfall varierer enormt — fra mikrosekunder til milliarder av år — fordi den avhenger eksponentielt av barrierens egenskaper.

**2. Sveipeprobe-mikroskop (STM):**
**Sveipetunnelmikroskopet** (STM, Scanning Tunneling Microscope) utnytter tunnelering for å avbilde overflater med **atomær oppløsning**. En svært skarp nål holdes nær overflaten. Elektroner tunnelerer mellom nålen og overflaten, og den resulterende strømmen avhenger ekstremt følsomt av avstanden. Ved å skanne nålen over overflaten får man et bilde av individuelle atomer!

STM ble oppfunnet i 1981 av Gerd Binnig og Heinrich Rohrer, som fikk **Nobelprisen i fysikk i 1986**.

**3. Tunneldioder:**
Elektroniske komponenter som utnytter tunnelering for svært rask bryting. Brukes i høyfrekvenselektronikk og kvanteelektronikk.

**4. Fusjon i solen:**
Protoner i solens kjerne har ikke nok kinetisk energi til å overvinne Coulomb-barrieren (frastøtning mellom positive ladninger). Tunnelering gjør det mulig for protonene å komme nær nok til at den sterke kjernekraften tar over. Uten tunnelering ville solen ikke skinne!`,
    },
    {
      id: 'fys2-7-6-kvantedatamaskin',
      type: 'text',
      content: `## Kvantedatamaskiner

En **kvantedatamaskin** utnytter kvantemekaniske fenomener som **superposisjon** og **sammenfiltring** (entanglement) for å utføre beregninger som er umulige for klassiske datamaskiner.

### Klassiske bits vs. kvantebits (qubits)

| Egenskap | Klassisk bit | Kvantebit (qubit) |
|---|---|---|
| Verdier | 0 eller 1 | Superposisjon av 0 **og** 1 samtidig |
| Tilstand | Bestemt | Sannsynlighetsfordeling |
| Måling | Endrer ikke tilstanden | Kollapser superposisjonen |
| Kobling | Uavhengige | Kan være sammenfiltret (entangled) |

### Superposisjon

En qubit kan være i en **superposisjon** av tilstandene $|0\\rangle$ og $|1\\rangle$:

$$|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle$$

der $|\\alpha|^2 + |\\beta|^2 = 1$. Når vi måler, kollapser tilstanden til enten $|0\\rangle$ eller $|1\\rangle$ med sannsynligheter $|\\alpha|^2$ og $|\\beta|^2$.

### Sammenfiltring (entanglement)

To qubits kan være **sammenfiltret** — deres tilstander er korrelerte på en måte som ikke har noe klassisk motstykke. Måling av én qubit bestemmer umiddelbart tilstanden til den andre, uansett avstanden mellom dem. Einstein kalte dette for «spooky action at a distance».

### Anvendelser

Kvantedatamaskiner er spesielt gode til:
- **Kryptografi**: Knekke klassiske krypteringsmetoder (Shors algoritme)
- **Optimering**: Finne optimale løsninger for komplekse problemer
- **Simulering**: Simulere kvantemekaniske systemer (f.eks. nye medisiner)
- **Maskinlæring**: Visse AI-algoritmer kan akselereres
- **Kryptografi**: Kvantekryptografi gir ubrytelig kommunikasjon`,
    },
    {
      id: 'fys2-7-6-mri',
      type: 'text',
      content: `## MRI — Magnetisk resonanstomografi

**MRI** (Magnetic Resonance Imaging) er en medisinsk avbildningsteknikk som bruker kvantemekaniske egenskaper ved atomkjerner — spesielt **kjernespin** og **resonans**.

### Virkemåte (forenklet)

1. Pasienten plasseres i et svært sterkt magnetfelt ($1{,}5$–$3$ T, typisk).
2. Hydrogenatomenes kjerner (protoner) i kroppen oppfører seg som små magneter og **innretter seg** med det ytre feltet. De kan innta to kvantiserte tilstander: parallell (lav energi) eller antiparallell (høy energi) med feltet.
3. Radiobølger med **riktig frekvens** (resonansfrekvensen) sendes inn og absorberes av protonene, som eksiteres til høyere energitilstand.
4. Når radiobølgene slås av, **relakserer** protonene tilbake til lavere tilstand og sender ut radiosignaler.
5. Signalene analyseres av en datamaskin for å danne et **detaljert bilde** av kroppens indre.

Resonansfrekvensen avhenger av magnetfeltets styrke via **Larmor-relasjonen**:

$$f = \\frac{\\gamma B}{2\\pi}$$

der $\\gamma$ er det gyromagnetiske forholdet og $B$ er magnetfeltstyrken.

MRI bruker ingen ioniserende stråling (i motsetning til røntgen og CT) og gir utmerket kontrast mellom ulike bløtvev.`,
    },
    {
      id: 'fys2-7-6-example3',
      type: 'example',
      title: 'Eksempel 3: LED-belysning vs. glødelampe',
      problem: `En LED-pære med effekt 10 W sender hovedsakelig ut fotoner med bølgelengde $\\lambda = 550$ nm. En glødelampe med effekt 60 W sender også ut lys, men det meste er infrarød stråling.

a) Beregn energien til hvert foton fra LED-pæren.
b) Hvor mange fotoner sender LED-pæren ut per sekund (anta at all effekt går til fotoner)?
c) Forklar ved hjelp av kvantefysikk hvorfor LED-er er mer energieffektive enn glødelamper.`,
      solution: `**a) Fotonenergi:**
$$E = \\frac{hc}{\\lambda} = \\frac{6{,}626 \\times 10^{-34} \\times 3{,}00 \\times 10^8}{550 \\times 10^{-9}} = 3{,}61 \\times 10^{-19} \\text{ J} = 2{,}25 \\text{ eV}$$

**b) Fotoner per sekund:**
$$N = \\frac{P}{E} = \\frac{10}{3{,}61 \\times 10^{-19}} = 2{,}77 \\times 10^{19} \\text{ fotoner/s}$$

**c) LED-er sender ut fotoner med spesifikke energier (bestemt av båndgapet i halvlederen) som tilsvarer synlig lys. Nesten all tilført energi blir til nyttig lys. Glødelamper derimot varmer opp en glødetråd til ca. 2700 K, som sender ut svartlegemestråling. Mesteparten av strålingen ($\\sim 95\\%$) er infrarød (varme), og bare ca. 5% er synlig lys. LED-er er mer effektive fordi de *direkte* konverterer elektrisk energi til fotoner med ønsket bølgelengde, uten å gå via varme.`,
    },
    {
      id: 'fys2-7-6-example4',
      type: 'example',
      title: 'Eksempel 4: Tunnelering i STM',
      problem: `I et sveipetunnelmikroskop (STM) er avstanden mellom nålspissen og overflaten typisk $d = 1{,}0$ nm. Tunnelstrømmen avhenger eksponentielt av avstanden: $I \\propto e^{-2\\kappa d}$ der $\\kappa = \\sqrt{2m(V_0 - E)}/\\hbar$. For en typisk barrierehøyde $V_0 - E = 4{,}0$ eV, hva er endringen i tunnelstrøm når avstanden øker med 0,1 nm?`,
      solution: `**Beregn $\\kappa$:**

$V_0 - E = 4{,}0 \\times 1{,}602 \\times 10^{-19} = 6{,}41 \\times 10^{-19}$ J

$$\\kappa = \\frac{\\sqrt{2m_e(V_0-E)}}{\\hbar} = \\frac{\\sqrt{2 \\times 9{,}109 \\times 10^{-31} \\times 6{,}41 \\times 10^{-19}}}{1{,}055 \\times 10^{-34}}$$

$$= \\frac{\\sqrt{1{,}168 \\times 10^{-48}}}{1{,}055 \\times 10^{-34}} = \\frac{1{,}081 \\times 10^{-24}}{1{,}055 \\times 10^{-34}} = 1{,}02 \\times 10^{10} \\text{ m}^{-1}$$

**Forholdstall for strøm ved $d$ og $d + 0{,}1$ nm:**

$$\\frac{I(d + \\Delta d)}{I(d)} = e^{-2\\kappa \\Delta d} = e^{-2 \\times 1{,}02 \\times 10^{10} \\times 0{,}1 \\times 10^{-9}} = e^{-2{,}04} = 0{,}13$$

**Svar:** En økning i avstand på bare $0{,}1$ nm (omtrent en atomdiameter) reduserer strømmen til ca. **13%** av den opprinnelige verdien. Denne ekstreme følsomheten er det som gjør STM i stand til å avbilde individuelle atomer.`,
    },
    {
      id: 'fys2-7-6-note-oversikt',
      type: 'note',
      title: 'Oversikt: Kvantefysikk i moderne teknologi',
      content: `| Teknologi | Kvantemekanisk prinsipp |
|---|---|
| Laser | Stimulert emisjon, koherens |
| LED | Rekombinasjon i p-n-overgang, båndgap |
| Solcelle | Fotoelektrisk effekt i halvleder |
| Elektronmikroskop | de Broglies materiebølger |
| STM | Kvantemekanisk tunnelering |
| MRI | Kjernespin og magnetisk resonans |
| Kvantedatamaskin | Superposisjon og sammenfiltring |
| Transistorer (datamaskiner) | Kvantemekanikk i halvledere |
| GPS-atomklokker | Atomare energioverganger |
| Fusjonskraft (fremtidig) | Kvantemekanisk tunnelering |`,
    },
    {
      id: 'fys2-7-6-warning1',
      type: 'warning',
      title: 'Vanlige misforståelser om kvantefysikk',
      content: `**Misforståelse 1:** «Kvantemekanikk gjelder bare for subatomære partikler.»
→ Kvantemekaniske effekter er mest synlige for små partikler, men de ligger til grunn for *all* materie og teknologi. Halvledere, magneter, kjemiske bindinger — alt bygger på kvantemekanikk.

**Misforståelse 2:** «Tunnelering betyr at partikkelen 'graver seg gjennom' barrieren.»
→ Det er ingen klassisk bevegelse gjennom barrieren. Partikkelens bølgefunksjon strekker seg gjennom barrieren, og det er en endelig sannsynlighet for å finne partikkelen på den andre siden.

**Misforståelse 3:** «Kvantedatamaskiner kan løse alle problemer raskere enn vanlige datamaskiner.»
→ Kvantedatamaskiner er bare raskere for visse typer problemer (f.eks. faktorisering, søk, simulering). For mange dagligdagse oppgaver er vanlige datamaskiner like gode eller bedre.`,
    },
    {
      id: 'fys2-7-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Lasere** bruker stimulert emisjon for å produsere koherent, fokusert lys. Krever populasjonsinversjon.
- **LED-er** sender ut lys ved rekombinasjon av elektroner og hull i en p-n-overgang. Fargen bestemmes av båndgapet.
- **Solceller** utnytter den fotoelektriske effekten i halvledere til å konvertere sollys til elektrisitet.
- **Kvantemekanisk tunnelering** tillater partikler å passere gjennom energibarrierer. Ligger til grunn for alfahenfall, STM-mikroskoper og solens fusjon.
- **Kvantedatamaskiner** utnytter superposisjon og sammenfiltring for å utføre visse beregninger enormt mye raskere.
- **MRI** bruker kvanteegenskaper ved atomkjerner (spin og resonans) til å avbilde kroppens indre.
- Moderne teknologi er gjennomgående basert på kvantefysiske prinsipper.`,
    },
  ],
  exercises: [
    {
      id: 'fys2-7-6-ex1',
      type: 'classic',
      difficulty: 'lett',
      task: `Forklar forskjellen mellom spontan emisjon og stimulert emisjon. Hvorfor er stimulert emisjon viktig for lasere?`,
      solution: `Ved spontan emisjon sender et eksitert atom ut et foton med tilfeldig retning og fase — dette er tilfeldig og gir inkoherent lys. Ved stimulert emisjon får et innkommende foton atomet til å sende ut et identisk foton — med samme frekvens, retning, fase og polarisasjon. Stimulert emisjon er viktig for lasere fordi det gir lysforsterkning: ett foton blir til to identiske, som igjen stimulerer flere. Resultatet er en intens stråle av koherent lys.`,
    },
    {
      id: 'fys2-7-6-ex2',
      type: 'classic',
      difficulty: 'lett',
      task: `En grønn LED har båndgap $E_g = 2{,}26$ eV. Beregn bølgelengden til lyset som sendes ut.`,
      hints: ['$\\lambda = hc/E_g$'],
      solution: `$E_g = 2{,}26 \\times 1{,}602 \\times 10^{-19} = 3{,}62 \\times 10^{-19}$ J. $\\lambda = hc/E_g = 6{,}626 \\times 10^{-34} \\times 3{,}00 \\times 10^8/(3{,}62 \\times 10^{-19}) = 549$ nm. Dette er grønt lys.`,
    },
    {
      id: 'fys2-7-6-ex3',
      type: 'classic',
      difficulty: 'lett',
      task: `Nevn tre teknologier du bruker daglig som er basert på kvantefysiske prinsipper. Forklar kort hvilket kvantemekanisk prinsipp som ligger til grunn for hver.`,
      solution: `1) **Smarttelefon-skjerm (LED/OLED)**: Bruker rekombinasjon av elektroner og hull i halvledere for å sende ut lys med bestemte farger (kvantiserte energinivåer i halvledere). 2) **GPS**: Atomklokker i GPS-satellitter utnytter presise atomare energioverganger (kvantiserte energinivåer). 3) **Internettforbindelse (fiberoptikk)**: Laserdioder sender data som lyspulser gjennom optiske fibre (stimulert emisjon, koherent lys).`,
    },
    {
      id: 'fys2-7-6-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: `En helium-neon-laser sender ut rødt lys med bølgelengde $\\lambda = 632{,}8$ nm og effekt $P = 1{,}0$ mW.

a) Beregn energien til hvert foton.
b) Beregn antall fotoner som sendes ut per sekund.
c) Forklar hva det betyr at laserlyset er koherent.`,
      hints: ['$E = hc/\\lambda$', '$N = P/E$'],
      solution: `a) $E = hc/\\lambda = 6{,}626 \\times 10^{-34} \\times 3{,}00 \\times 10^8/(632{,}8 \\times 10^{-9}) = 3{,}14 \\times 10^{-19}$ J $= 1{,}96$ eV.

b) $N = P/E = 1{,}0 \\times 10^{-3}/3{,}14 \\times 10^{-19} = 3{,}2 \\times 10^{15}$ fotoner/s.

c) Koherent lys betyr at alle fotonene har samme frekvens og er i fase med hverandre. Dette oppnås ved stimulert emisjon, der hvert nytt foton er identisk med det stimulerende fotonet. Koherens gir laserstrålen dens spesielle egenskaper: den kan fokuseres til en svært liten prikk og beholde sin form over lange avstander.`,
    },
    {
      id: 'fys2-7-6-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: `En silisiumsolcelle ($E_g = 1{,}12$ eV) belyses med sollys.

a) Beregn den lengste bølgelengden solcellen kan absorbere.
b) Hva skjer med energien til et foton med $\\lambda = 400$ nm (blått lys) som absorberes? Hvor mye energi «kastes bort»?
c) Forklar hvorfor det er en øvre grense for effektiviteten til solceller med kun ett halvledermateriale.`,
      hints: ['$\\lambda_{\\text{maks}} = hc/E_g$', 'Overskuddsenergi = $E_{\\text{foton}} - E_g$'],
      solution: `a) $\\lambda_{\\text{maks}} = hc/E_g = 1240 \\text{ eV·nm}/1{,}12 = 1107$ nm $\\approx 1110$ nm.

b) $E_{\\text{foton}} = 1240/400 = 3{,}10$ eV. Overskuddsenergi = $3{,}10 - 1{,}12 = 1{,}98$ eV. Denne energien går tapt som **varme** (termalisering). Bare 1,12 eV av fotonets 3,10 eV utnyttes — en effektivitet på 36 % for dette fotonet.

c) Fotoner med energi under $E_g$ absorberes ikke (tap). Fotoner med energi over $E_g$ bidrar bare med energi lik $E_g$ (resten blir varme). Denne avveiningen setter en øvre grense (Shockley-Queisser-grensen, ca. 33 %). Flerlags-solceller med ulike båndgap kan overvinne dette ved å absorbere ulike deler av solspekteret.`,
    },
    {
      id: 'fys2-7-6-ex6',
      type: 'classic',
      difficulty: 'medium',
      task: `Forklar kvantemekanisk tunnelering med egne ord. Beskriv to praktiske anvendelser av tunnelering.`,
      solution: `Kvantemekanisk tunnelering er et fenomen der en partikkel kan passere gjennom en energibarriere den klassisk sett ikke har nok energi til å overvinne. Dette skjer fordi partikkelens bølgefunksjon ikke stopper brått ved barrieren, men avtar eksponentielt gjennom den. Hvis barrieren er tynn nok, er det en endelig sannsynlighet for å finne partikkelen på den andre siden.

Anvendelse 1: **STM-mikroskopet** utnytter tunnelering av elektroner mellom en skarp nål og en overflate. Tunnelstrømmen er ekstremt følsom for avstanden, noe som gjør det mulig å avbilde individuelle atomer.

Anvendelse 2: **Alfahenfall** i radioaktive kjerner skyldes tunnelering. Alfapartikkelen er fanget av en energibarriere i kjernen, men har en liten sannsynlighet for å tunnelere gjennom. Halveringstiden bestemmes av tunnelingssannsynligheten.`,
    },
    {
      id: 'fys2-7-6-ex7',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `En blå LED sender ut lys med bølgelengde $\\lambda = 470$ nm.

a) Beregn båndgapet til halvledermaterialet i eV.
b) Hvilket spenningsfall over LED-en forventer du tilnærmet? (Hint: Energien til hvert foton kommer fra den elektriske energien til ett elektron som passerer gjennom LED-en.)
c) Forklar hvorfor hvite LED-er vanligvis bruker en blå LED med et fosforlag, og hvorfor man ikke bare bruker en UV-LED.`,
      hints: ['$E_g = hc/\\lambda$', 'Spenningsfall $V \\approx E_g/e$'],
      solution: `a) $E_g = hc/\\lambda = 1240/470 = 2{,}64$ eV. (Materialet er typisk InGaN.)

b) $V \\approx E_g/e = 2{,}64$ eV$/e = 2{,}64$ V. I praksis er spenningsfallet noe høyere (ca. 3,0–3,5 V) på grunn av resistive tap.

c) Hvite LED-er bruker en blå LED fordi: (1) Det blå lyset har høy nok energi til å eksitere fosforet, som sender ut bredspektret gult lys. Blandingen av blått og gult gir hvitt lys. (2) UV-LED-er kunne også brukes, men de er mindre energieffektive fordi UV-fotoner har *mer* energi enn nødvendig for synlig lys, og overskuddsenergien (fra UV til synlig) går tapt som varme i fosforet. Blått lys er nærmere i energi til resten av det synlige spekteret, så konverteringstapet er mindre. (3) UV-stråling kan også degradere materialer raskere.`,
    },
    {
      id: 'fys2-7-6-ex8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Forklar forskjellen mellom klassiske bits og kvantebits (qubits). Hva menes med superposisjon og sammenfiltring (entanglement)? Gi et eksempel på et problem der kvantedatamaskiner har en fordel over klassiske datamaskiner.`,
      solution: `En klassisk bit er enten 0 eller 1. En qubit kan være i en superposisjon av 0 og 1 samtidig: $|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle$. Først når vi måler, kollapser qubiten til enten 0 eller 1. Med $n$ qubits i superposisjon kan man representere $2^n$ tilstander samtidig.

Sammenfiltring (entanglement) betyr at to qubits er kvantemekanisk korrelerte: tilstanden til én qubit er avhengig av den andre, selv om de er langt fra hverandre. Måling av én qubit bestemmer umiddelbart tilstanden til den andre.

Eksempel: Faktorisering av store tall (Shors algoritme). En klassisk datamaskin bruker eksponentiell tid på å faktorisere et tall med mange sifre (dette er grunnlaget for RSA-kryptering). En kvantedatamaskin kan gjøre dette i polynomisk tid ved å utnytte superposisjon og sammenfiltring til å «prøve mange muligheter samtidig». Med en tilstrekkelig kraftig kvantedatamaskin ville dagens krypteringssystemer bli brutt.`,
    },
    {
      id: 'fys2-7-6-ex9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Forklar virkemåten til en MRI-maskin ved hjelp av kvantefysiske begreper. Hvilken egenskap ved atomkjerner utnyttes, og hvorfor er hydrogen spesielt godt egnet?`,
      solution: `MRI utnytter **kjernespin** — en kvantemekanisk egenskap der atomkjerner oppfører seg som små magneter. I et sterkt ytre magnetfelt kan protonet (hydrogenets kjerne) innta to kvantiserte tilstander: parallell (lav energi) og antiparallell (høy energi). Energiforskjellen mellom tilstandene er proporsjonal med magnetfeltets styrke.

Radiobølger med frekvens lik resonansfrekvensen (Larmor-frekvensen) absorberes av protonene, som eksiteres fra lav til høy energitilstand. Når radiobølgene slås av, relakserer protonene tilbake og sender ut signaler som detekteres og brukes til å danne bilder.

Hydrogen er spesielt egnet fordi: (1) Menneskekroppen inneholder enormt mye hydrogen — i vann ($\\text{H}_2\\text{O}$) og fett. (2) Protonet har sterkt magnetisk moment og gir kraftig signal. (3) Relakseringstidene varierer mellom ulike vev (fett, muskel, hjerne), noe som gir utmerket kontrast. MRI bruker ingen ioniserende stråling og er derfor trygt for pasienten.`,
    },
    {
      id: 'fys2-7-6-ex10',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `En solcelle mottar sollys med effekt $P_{\\text{inn}} = 1000$ W/m$^2$ (standard testbetingelser) på et areal $A = 1{,}6$ m$^2$.

a) Beregn den totale innstrålt effekten.
b) Hvis solcellen har effektivitet $\\eta = 22\\%$, hva er den elektriske effekten?
c) Gi en kvantemekanisk forklaring på hvorfor effektiviteten ikke kan være 100 % for en enkeltmaterialsolcelle.`,
      hints: ['$P_{\\text{el}} = \\eta \\times P_{\\text{inn}} \\times A$'],
      solution: `a) $P_{\\text{tot}} = P_{\\text{inn}} \\times A = 1000 \\times 1{,}6 = 1600$ W.

b) $P_{\\text{el}} = \\eta \\times P_{\\text{tot}} = 0{,}22 \\times 1600 = 352$ W.

c) En enkeltmaterialsolcelle kan ikke ha 100 % effektivitet av to kvantemekaniske grunner: (1) **Subbåndgap-tap**: Fotoner med energi $E < E_g$ kan ikke absorberes fordi de ikke har nok energi til å løfte et elektron over båndgapet. Disse fotonene passerer rett gjennom. (2) **Termaliseringstap**: Fotoner med energi $E > E_g$ skaper elektron-hull-par, men overskuddsenergien ($E - E_g$) omdannes raskt til varme (gittervibrasjoner) istedenfor elektrisk energi. Bare energi lik $E_g$ utnyttes per foton. Denne avveiningen mellom de to tapene gir en optimal $E_g \\approx 1{,}34$ eV med maksimal teoretisk effektivitet ca. 33 % (Shockley-Queisser-grensen).`,
    },
  ],
};

// ============================================================================
// Export av alle kapitler i DEL 4
// ============================================================================

export const FYSIKK2_CHAPTERS_DEL4: Record<string, TextbookChapter> = {
  'fysikk2-7-1': CHAPTER_FYSIKK2_7_1,
  'fysikk2-7-2': CHAPTER_FYSIKK2_7_2,
  'fysikk2-7-3': CHAPTER_FYSIKK2_7_3,
  'fysikk2-7-4': CHAPTER_FYSIKK2_7_4,
  'fysikk2-7-5': CHAPTER_FYSIKK2_7_5,
  'fysikk2-7-6': CHAPTER_FYSIKK2_7_6,
};