/**
 * Tekstbok kapitler for S2 - Seksjon 9: Følger og programmering
 * Ny seksjon med følger, tallmønstre og programmering
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 9.1: Følger og tallmønstre
// ============================================================================

export const CHAPTER_S2_9_1: TextbookChapter = {
  id: 's2-9-1',
  courseId: 's2',
  chapterNumber: '9.1',
  title: 'Følger og tallmønstre',
  description: 'Lær om aritmetiske og geometriske følger, konvergens og divergens, rekursive definisjoner og summeformler for rekker.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske rekursive sammenhenger og presentere egne framgangsmåter',
    'gjøre rede for begrepene følge, rekke, konvergens og divergens, og bruke dette i problemløsning',
    'modellere og analysere situasjoner ved hjelp av følger og rekker'
  ],
  content: [
    {
      id: 's2-9-1-intro',
      type: 'text',
      title: 'Hva er en følge?',
      content: `En **følge** er en ordnet liste med tall som følger et bestemt mønster. Vi skriver leddene som $a_1, a_2, a_3, \\ldots$ der $a_n$ betegner det $n$-te leddet. Følger er fundamentale i matematikken og modellerer alt fra rentevekst og medikamentkonsentrasjoner til befolkningsdynamikk.

Vi skiller mellom to hovedtyper beskrivelser:

- **Eksplisitt formel:** $a_n$ er gitt direkte som en funksjon av $n$, for eksempel $a_n = 3n + 1$. Du kan finne et vilkårlig ledd uten å kjenne de foregående.
- **Rekursiv formel:** $a_n$ er gitt som en funksjon av de foregående leddene, for eksempel $a_{n+1} = 2a_n - 1$ med startverdi $a_1 = 5$. For å beregne et ledd må du starte fra begynnelsen.

I dette kapitlet studerer vi de to viktigste klassene av følger: **aritmetiske** og **geometriske**, og undersøker når en følge nærmer seg en endelig grenseverdi (konvergens) eller vokser uten grense (divergens).`
    },
    {
      id: 's2-9-1-def-aritmetisk',
      type: 'definition',
      title: 'Aritmetisk følge',
      content: `En **aritmetisk følge** er en følge der differansen mellom to påfølgende ledd er konstant. Denne konstanten kalles den **felles differansen** $d$.

**Rekursiv formel:**
$$a_{n+1} = a_n + d, \\quad a_1 \\text{ gitt}$$

**Eksplisitt formel:**
$$a_n = a_1 + (n-1) \\cdot d$$

**Eksempel:** Følgen $3, 7, 11, 15, 19, \\ldots$ er aritmetisk med $a_1 = 3$ og $d = 4$. Den eksplisitte formelen er:
$$a_n = 3 + (n-1) \\cdot 4 = 4n - 1$$

Vi verifiserer: $a_1 = 4 \\cdot 1 - 1 = 3$ og $a_5 = 4 \\cdot 5 - 1 = 19$. $\\checkmark$`
    },
    {
      id: 's2-9-1-def-geometrisk',
      type: 'definition',
      title: 'Geometrisk følge',
      content: `En **geometrisk følge** er en følge der forholdet mellom to påfølgende ledd er konstant. Dette konstante forholdet kalles **kvotienten** $k$.

**Rekursiv formel:**
$$a_{n+1} = a_n \\cdot k, \\quad a_1 \\text{ gitt}$$

**Eksplisitt formel:**
$$a_n = a_1 \\cdot k^{n-1}$$

**Eksempel:** Følgen $2, 6, 18, 54, 162, \\ldots$ er geometrisk med $a_1 = 2$ og $k = 3$. Den eksplisitte formelen er:
$$a_n = 2 \\cdot 3^{n-1}$$

**Eksempel (kvotient < 1):** Følgen $800, 400, 200, 100, 50, \\ldots$ er geometrisk med $a_1 = 800$ og $k = \\frac{1}{2}$:
$$a_n = 800 \\cdot \\left(\\frac{1}{2}\\right)^{n-1}$$

Leddene nærmer seg $0$ siden $|k| = \\frac{1}{2} < 1$.`
    },
    {
      id: 's2-9-1-note-rekursiv',
      type: 'note',
      title: 'Rekursive definisjoner i praksis',
      content: `Mange naturlige prosesser beskrives enklest rekursivt: vi vet hva som skjer i neste steg basert på nåværende tilstand.

**Eksempler på rekursive følger:**
- Bankkonto med rente: $a_{n+1} = a_n \\cdot 1{,}04$ (4 % rente)
- Medikament: $a_{n+1} = 0{,}75 \\cdot a_n$ (25 % brytes ned per døgn)
- Logistisk vekst: $a_{n+1} = r \\cdot a_n(1 - a_n/K)$

For å finne en eksplisitt formel fra en rekursiv definisjon, må man ofte gjenkjenne mønster (aritmetisk, geometrisk) eller bruke mer avanserte teknikker.`
    },
    {
      id: 's2-9-1-theorem-konvergens',
      type: 'theorem',
      title: 'Konvergens og divergens av følger',
      content: `En følge $\\{a_n\\}$ **konvergerer** mot $L$ dersom leddene nærmer seg $L$ vilkårlig nært når $n$ vokser uten grense. Vi skriver:
$$\\lim_{n \\to \\infty} a_n = L$$

En følge som ikke konvergerer, sier vi **divergerer**.

**Aritmetiske følger:**
- Konvergerer bare dersom $d = 0$ (konstant følge).
- Divergerer for alle $d \\neq 0$.

**Geometriske følger:**
- Konvergerer mot $0$ dersom $|k| < 1$:
$$\\lim_{n \\to \\infty} a_1 \\cdot k^{n-1} = 0 \\quad \\text{når } |k| < 1$$
- Divergerer dersom $|k| > 1$.
- Er konstant dersom $k = 1$.
- Alternerer mellom $a_1$ og $-a_1$ uten å konvergere dersom $k = -1$.

**Teknisk resultat for brøkfølger:** For å finne grenseverdien av et rasjonalt uttrykk i $n$, deler vi teller og nevner på den høyeste potensen av $n$ som opptrer.`,
      proof: `For geometriske følger med $|k| < 1$: La $|k| = r < 1$. Da er $|a_n| = |a_1| \\cdot r^{n-1}$. Siden $0 \\leq r < 1$ vet vi at $r^{n-1} \\to 0$ (eksponentiell demping), og dermed $a_n \\to 0$.`
    },
    {
      id: 's2-9-1-example-1',
      type: 'example',
      title: 'Finne formel for en geometrisk følge',
      problem: `En pasient tar 400 mg av et medikament. Kroppen bryter ned 25 % av medikamentet i løpet av ett døgn. La $a_n$ være mengden medikament (i mg) etter $n$ døgn uten nye doser.

a) Sett opp en rekursiv formel for $a_n$.
b) Finn en eksplisitt formel.
c) Etter hvor mange døgn er konsentrasjonen under 10 mg?`,
      solution: `**a) Rekursiv formel:**

Etter hvert døgn er $75\\,\\%$ av medikamentet igjen:
$$a_{n+1} = 0{,}75 \\cdot a_n, \\quad a_0 = 400$$

(Vi bruker $a_0$ som startverdi.)

**b) Eksplisitt formel:**

Geometrisk følge med $a_0 = 400$ og $k = 0{,}75$:
$$a_n = 400 \\cdot 0{,}75^n$$

**c) Finne $n$ slik at $a_n < 10$:**
$$400 \\cdot 0{,}75^n < 10 \\Leftrightarrow 0{,}75^n < \\frac{10}{400} = 0{,}025$$

Tar logaritmen på begge sider:
$$n \\ln(0{,}75) < \\ln(0{,}025) \\Leftrightarrow n > \\frac{\\ln(0{,}025)}{\\ln(0{,}75)} \\approx \\frac{-3{,}689}{-0{,}288} \\approx 12{,}8$$

Etter $13$ døgn er konsentrasjonen under $10$ mg.`
    },
    {
      id: 's2-9-1-theorem-sumformler',
      type: 'theorem',
      title: 'Sumformler for rekker',
      content: `**Aritmetisk rekke** - summen av de $n$ første leddene i en aritmetisk følge:
$$S_n = a_1 + a_2 + \\cdots + a_n = \\frac{n(a_1 + a_n)}{2} = \\frac{n}{2}\\bigl(2a_1 + (n-1)d\\bigr)$$

**Geometrisk rekke** - summen av de $n$ første leddene i en geometrisk følge (for $k \\neq 1$):
$$S_n = a_1 + a_1 k + a_1 k^2 + \\cdots + a_1 k^{n-1} = a_1 \\cdot \\frac{k^n - 1}{k - 1}$$

**Uendelig geometrisk rekke** - dersom $|k| < 1$ konvergerer summen av alle leddene mot:
$$S = \\sum_{n=0}^{\\infty} a_1 k^n = \\frac{a_1}{1 - k}$$

Dersom $|k| \\geq 1$ divergerer den uendelige rekken.`,
      proof: `Geometrisk rekke: La $S_n = a_1 + a_1 k + \\cdots + a_1 k^{n-1}$. Multipliser med $k$: $kS_n = a_1 k + a_1 k^2 + \\cdots + a_1 k^n$. Subtraher: $S_n - kS_n = a_1 - a_1 k^n$, dvs. $S_n(1-k) = a_1(1-k^n)$, og dermed $S_n = a_1\\frac{1-k^n}{1-k} = a_1\\frac{k^n-1}{k-1}$. For $|k| < 1$ gir $k^n \\to 0$ at $S = \\frac{a_1}{1-k}$.`
    },
    {
      id: 's2-9-1-example-2',
      type: 'example',
      title: 'Bruke sumformler',
      problem: `a) En bedrift produserte 500 enheter det første kvartalet, og øker produksjonen med 80 enheter hvert kvartal. Hva er total produksjon etter 12 kvartaler?

b) En geometrisk rekke har $a_1 = 300$ og $k = 0{,}6$. Finn summen av alle leddene.

c) Finn summen $1 + \\frac{1}{3} + \\frac{1}{9} + \\frac{1}{27} + \\cdots$.`,
      solution: `**a) Aritmetisk rekke:**

$a_1 = 500$, $d = 80$, $n = 12$.

$$S_{12} = \\frac{12}{2}(2 \\cdot 500 + 11 \\cdot 80) = 6(1000 + 880) = 6 \\cdot 1880 = 11\\,280$$

Total produksjon er $11\\,280$ enheter.

**b) Uendelig geometrisk rekke:**

$a_1 = 300$, $k = 0{,}6$, og $|k| < 1$ så rekken konvergerer:
$$S = \\frac{300}{1 - 0{,}6} = \\frac{300}{0{,}4} = 750$$

**c) Uendelig geometrisk rekke:**

$a_1 = 1$, $k = \\frac{1}{3}$:
$$S = \\frac{1}{1 - \\frac{1}{3}} = \\frac{1}{\\frac{2}{3}} = \\frac{3}{2}$$`
    },
    {
      id: 's2-9-1-note-grenseverdi',
      type: 'note',
      title: 'Teknikk for grenseverdier av brøkfølger',
      content: `For å finne $\\lim_{n \\to \\infty} a_n$ der $a_n$ er et rasjonalt uttrykk i $n$: del teller og nevner på den **høyeste potensen** av $n$ som opptrer.

**Eksempel:** Finn $\\lim_{n \\to \\infty} \\dfrac{4n^2 + 3n}{2n^2 - 7}$.

Del på $n^2$:
$$\\frac{4n^2 + 3n}{2n^2 - 7} = \\frac{4 + \\frac{3}{n}}{2 - \\frac{7}{n^2}} \\xrightarrow{n \\to \\infty} \\frac{4 + 0}{2 - 0} = 2$$

**Tommelfingerregel:** Grenseverdien bestemmes av leddene med høyest grad i teller og nevner. Dersom graden til telleren er høyere enn nevnerens, divergerer følgen.`
    },
    {
      id: 's2-9-1-tip-gjenkjenne',
      type: 'tip',
      title: 'Gjenkjenne følgetyper',
      content: `**Slik identifiserer du følgetypen:**

1. **Beregn differansene** $a_2 - a_1$, $a_3 - a_2$, $a_4 - a_3$, ...
   - Hvis alle differanser er like: **aritmetisk** med $d$ = differansen
2. **Beregn forholdene** $\\frac{a_2}{a_1}$, $\\frac{a_3}{a_2}$, $\\frac{a_4}{a_3}$, ...
   - Hvis alle forhold er like: **geometrisk** med $k$ = forholdet
3. Hvis hverken differanser eller forhold er konstante, kan følgen være **verken aritmetisk eller geometrisk** - sjekk om andreordens differanser er konstante (da er det et andregradsuttrykk i $n$).`
    },
    {
      id: 's2-9-1-example-3',
      type: 'example',
      title: 'Rekursiv følge med grenseverdi',
      problem: `En rekursiv følge er definert ved $a_1 = 10$ og $a_{n+1} = \\frac{a_n + 6}{2}$.

a) Beregn de fem første leddene.
b) Finn grenseverdien $L$ analytisk ved å sette $L = \\frac{L+6}{2}$.
c) Vis at følgen $b_n = a_n - L$ er geometrisk.`,
      solution: `**a) De fem første leddene:**
$$a_1 = 10, \\quad a_2 = \\frac{10+6}{2} = 8, \\quad a_3 = \\frac{8+6}{2} = 7$$
$$a_4 = \\frac{7+6}{2} = 6{,}5, \\quad a_5 = \\frac{6{,}5+6}{2} = 6{,}25$$

Leddene nærmer seg $6$.

**b) Grenseverdi analytisk:**
$$L = \\frac{L+6}{2} \\Rightarrow 2L = L + 6 \\Rightarrow L = 6$$

**c) Geometrisk restfølge:**
$$b_{n+1} = a_{n+1} - 6 = \\frac{a_n + 6}{2} - 6 = \\frac{a_n - 6}{2} = \\frac{b_n}{2}$$

Så $\\{b_n\\}$ er geometrisk med $k = \\frac{1}{2}$ og $b_1 = a_1 - 6 = 4$. Dermed $b_n = 4 \\cdot (\\frac{1}{2})^{n-1} \\to 0$, og $a_n = b_n + 6 \\to 6$.`
    },
    {
      id: 's2-9-1-warning-divergens',
      type: 'warning',
      content: `**Vanlige feil med konvergens:**

- En følge som **oscillerer** (f.eks. $(-1)^n$) konvergerer **ikke**, selv om den er begrenset.
- Den harmoniske rekken $\\sum \\frac{1}{n}$ **divergerer** selv om leddene går mot $0$. At $a_n \\to 0$ er nødvendig men ikke tilstrekkelig for konvergens av rekken.
- For uendelig geometrisk rekke: Formelen $S = \\frac{a_1}{1-k}$ gjelder **kun** når $|k| < 1$.`
    },
    {
      id: 's2-9-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-9-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Identifiser og beskriv følger',
        subTasks: [
          {
            label: 'a',
            task: 'Avgjør om følgen $4, 9, 14, 19, 24, \\ldots$ er aritmetisk eller geometrisk. Finn en eksplisitt formel for $a_n$ og beregn $a_{30}$.',
            solution: 'Differansen er konstant: $d = 5$. Aritmetisk følge med $a_1 = 4$ og $d = 5$. Eksplisitt: $a_n = 4 + (n-1) \\cdot 5 = 5n - 1$. $a_{30} = 5 \\cdot 30 - 1 = 149$.'
          },
          {
            label: 'b',
            task: 'Avgjør om følgen $2, 6, 18, 54, \\ldots$ er aritmetisk eller geometrisk. Finn en eksplisitt formel for $a_n$ og avgjør om følgen konvergerer.',
            solution: 'Forholdet er konstant: $k = 3$. Geometrisk følge med $a_1 = 2$ og $k = 3$. Eksplisitt: $a_n = 2 \\cdot 3^{n-1}$. Siden $|k| = 3 > 1$ divergerer følgen.'
          },
          {
            label: 'c',
            task: 'En følge er gitt ved $a_1 = 120$ og $a_{n+1} = 0{,}75 \\cdot a_n$. Skriv opp de fire første leddene og finn en eksplisitt formel.',
            solution: 'Leddene: $120, 90, 67{,}5, 50{,}625$. Geometrisk med $a_1 = 120$, $k = 0{,}75$. Eksplisitt: $a_n = 120 \\cdot 0{,}75^{n-1}$.'
          }
        ]
      }
    },
    {
      id: 's2-9-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-9-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Summeformler for rekker',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn summen $3 + 7 + 11 + 15 + \\cdots + 99$ ved å bruke formelen for aritmetisk rekke.',
            solution: 'Aritmetisk med $a_1 = 3$, $d = 4$. Finn $n$: $a_n = 3 + (n-1) \\cdot 4 = 99 \\Rightarrow n = 25$. $S_{25} = \\frac{25}{2}(3 + 99) = \\frac{25 \\cdot 102}{2} = 1275$.'
          },
          {
            label: 'b',
            task: 'Beregn summen av de 10 første leddene i den geometriske følgen $5, 10, 20, 40, \\ldots$',
            solution: '$a_1 = 5$, $k = 2$. $S_{10} = 5 \\cdot \\frac{2^{10} - 1}{2 - 1} = 5(1024 - 1) = 5 \\cdot 1023 = 5115$.'
          },
          {
            label: 'c',
            task: 'Finn summen av den uendelige geometriske rekken $100 + 60 + 36 + 21{,}6 + \\cdots$.',
            solution: '$a_1 = 100$, $k = 0{,}6$. Siden $|k| < 1$: $S = \\frac{100}{1 - 0{,}6} = \\frac{100}{0{,}4} = 250$.'
          }
        ]
      }
    },
    {
      id: 's2-9-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-9-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Konvergens og grenseverdier',
        subTasks: [
          {
            label: 'a',
            task: 'Avgjør om de følgende følgene konvergerer eller divergerer. Finn eventuell grenseverdi.\n\n(i) $a_n = \\dfrac{5n - 3}{2n + 1}$\n\n(ii) $a_n = 4 \\cdot (-0{,}8)^n$\n\n(iii) $a_n = \\dfrac{3n^2 + n}{n + 1}$',
            solution: '(i) Del på $n$: $\\frac{5 - 3/n}{2 + 1/n} \\to \\frac{5}{2}$. Konvergerer mot $\\frac{5}{2}$.\n\n(ii) $|k| = 0{,}8 < 1$, så $a_n = 4 \\cdot (-0{,}8)^n \\to 0$. Konvergerer mot $0$.\n\n(iii) $\\frac{3n^2 + n}{n+1} \\approx 3n \\to \\infty$. Divergerer.'
          },
          {
            label: 'b',
            task: 'En rekursiv følge er gitt ved $a_1 = 8$, $a_{n+1} = \\frac{a_n + 4}{2}$. Beregn de seks første leddene og finn grenseverdien analytisk ved å sette $L = \\frac{L+4}{2}$.',
            solution: 'Ledd: $8, 6, 5, 4{,}5, 4{,}25, 4{,}125$. Setter $L = \\frac{L+4}{2} \\Rightarrow 2L = L + 4 \\Rightarrow L = 4$. Grenseverdien er $4$.'
          },
          {
            label: 'c',
            task: 'Vis at dersom $b_n = a_n - 4$ (der $\\{a_n\\}$ er følgen fra b), så er $\\{b_n\\}$ geometrisk med $k = \\frac{1}{2}$. Bruk dette til å bevise at $a_n \\to 4$.',
            solution: '$b_{n+1} = a_{n+1} - 4 = \\frac{a_n + 4}{2} - 4 = \\frac{a_n - 4}{2} = \\frac{b_n}{2}$. Altså er $b_n$ geometrisk med $k = \\frac{1}{2}$ og $b_1 = 4$. $b_n = 4 \\cdot (\\frac{1}{2})^{n-1} \\to 0$ siden $|k| < 1$. Dermed $a_n = b_n + 4 \\to 4$.'
          }
        ]
      }
    },
    {
      id: 's2-9-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-9-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Anvendt problemløsning',
        subTasks: [
          {
            label: 'a',
            task: 'En bank tilbyr 4 % nominell rente per år. Du setter inn 25 000 kr. Sett opp en eksplisitt formel for beløpet $a_n$ etter $n$ år, og finn beløpet etter 15 år.',
            solution: '$a_n = 25\\,000 \\cdot 1{,}04^n$. Etter 15 år: $a_{15} = 25\\,000 \\cdot 1{,}04^{15} \\approx 25\\,000 \\cdot 1{,}8009 \\approx 45\\,023$ kr.'
          },
          {
            label: 'b',
            task: 'Et selskap betaler ut 10 000 kr i dividende hvert år. Du diskonterer fremtidige utbetalinger med en rente på 8 % per år. Hva er nåverdien av alle fremtidige utbetalinger? (Hint: uendelig geometrisk rekke med $a_1 = \\frac{10\\,000}{1{,}08}$ og $k = \\frac{1}{1{,}08}$.)',
            solution: '$S = \\frac{a_1}{1 - k} = \\frac{\\frac{10\\,000}{1{,}08}}{1 - \\frac{1}{1{,}08}} = \\frac{\\frac{10\\,000}{1{,}08}}{\\frac{0{,}08}{1{,}08}} = \\frac{10\\,000}{0{,}08} = 125\\,000$ kr. Nåverdien av utbetalingene er $125\\,000$ kr.'
          },
          {
            label: 'c',
            task: 'En ball slippes fra 5 meters høyde. For hvert hopp returnerer ballen til $\\frac{3}{5}$ av forrige høyde. Finn den totale distansen ballen tilbakelegger (opp og ned) over uendelig mange hopp.',
            solution: 'Første fall: $5$ m. Deretter hvert hopp opp og ned: $2 \\cdot 5 \\cdot (\\frac{3}{5})^n$ for $n = 1, 2, \\ldots$. Total: $5 + 2 \\cdot 5 \\cdot \\frac{\\frac{3}{5}}{1 - \\frac{3}{5}} = 5 + 10 \\cdot \\frac{\\frac{3}{5}}{\\frac{2}{5}} = 5 + 10 \\cdot \\frac{3}{2} = 5 + 15 = 20$ m.'
          }
        ]
      }
    },
    {
      id: 's2-9-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-9-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Avanserte følge- og rekkeoppgaver',
        subTasks: [
          {
            label: 'a',
            task: 'Vis at den harmoniske rekken $H_n = \\sum_{k=1}^{n} \\frac{1}{k}$ divergerer ved å gruppere leddene: $H_{2^n} \\geq 1 + \\frac{n}{2}$.',
            solution: '$H_1 = 1 \\geq 1 + 0$. $H_2 = 1 + \\frac{1}{2} \\geq 1 + \\frac{1}{2}$. $H_4 = H_2 + \\frac{1}{3} + \\frac{1}{4} \\geq \\frac{3}{2} + \\frac{1}{4} + \\frac{1}{4} = 2$. Generelt: $H_{2^n} - H_{2^{n-1}} = \\sum_{k=2^{n-1}+1}^{2^n} \\frac{1}{k} \\geq 2^{n-1} \\cdot \\frac{1}{2^n} = \\frac{1}{2}$. Ved induksjon: $H_{2^n} \\geq 1 + \\frac{n}{2} \\to \\infty$.'
          },
          {
            label: 'b',
            task: 'Finn summen $S = \\sum_{n=1}^{\\infty} \\frac{n}{3^n}$ ved å bruke at $\\sum_{n=1}^{\\infty} nx^{n-1} = \\frac{1}{(1-x)^2}$ for $|x| < 1$.',
            solution: '$S = \\sum_{n=1}^{\\infty} n \\cdot \\left(\\frac{1}{3}\\right)^n = \\frac{1}{3} \\sum_{n=1}^{\\infty} n \\cdot \\left(\\frac{1}{3}\\right)^{n-1} = \\frac{1}{3} \\cdot \\frac{1}{(1 - \\frac{1}{3})^2} = \\frac{1}{3} \\cdot \\frac{1}{\\frac{4}{9}} = \\frac{1}{3} \\cdot \\frac{9}{4} = \\frac{3}{4}$.'
          }
        ]
      }
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 9.2: Figurtall og rekursive sammenhenger
// ============================================================================

export const CHAPTER_S2_9_2: TextbookChapter = {
  id: 's2-9-2',
  courseId: 's2',
  chapterNumber: '9.2',
  title: 'Figurtall og rekursive sammenhenger',
  description: 'Utforsk trekantall, kvadrattall og pentagonaltall, lær å utlede eksplisitte formler fra geometriske mønstre, og bruk matematisk induksjon til å bevise formler.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske rekursive sammenhenger og presentere egne framgangsmåter',
    'utlede og anvende formler for figurtall og rekkesummer',
    'bruke matematisk induksjon til å bevise formler'
  ],
  content: [
    {
      id: 's2-9-2-intro',
      type: 'text',
      title: 'Figurtall og geometriske mønstre',
      content: `**Figurtall** er positive heltall som kan fremstilles som geometriske figurer bygd opp av prikker. Studiet av figurtall er en klassisk metode for å utvikle intuisjon for algebraiske formler og for å trene bevisføring.

Vi skal studere tre familier av figurtall: **trekantall**, **kvadrattall** og **pentagonaltall**. For hver type vil vi:
1. Beskrive det geometriske mønsteret
2. Finne en rekursiv formel ut fra mønsteret
3. Utlede en eksplisitt formel ved hjelp av summeteknikker
4. Bevise formelen med matematisk induksjon

Koblingen mellom figurtall og rekker (summer av følger) gir en visuell tolkning av abstrakte algebraiske identiteter.`
    },
    {
      id: 's2-9-2-def-trekantall',
      type: 'definition',
      title: 'Trekantall',
      content: `Det $n$-te **trekantallet** $T_n$ er antall prikker i en likesidet trekant med $n$ prikker langs hver side.

De første trekantallene: $T_1 = 1,\\ T_2 = 3,\\ T_3 = 6,\\ T_4 = 10,\\ T_5 = 15, \\ldots$

**Geometrisk beskrivelse:** $T_n$ dannes ved å legge een ekstra rad med prikker under den forrige trekanten. Rad $k$ har $k$ prikker.

**Rekursiv formel:**
$$T_{n+1} = T_n + (n+1), \\quad T_1 = 1$$

**Eksplisitt formel** (Gauss' summeformel):
$$T_n = 1 + 2 + 3 + \\cdots + n = \\frac{n(n+1)}{2}$$

**Geometrisk bevis:** To kopier av trekanten kan settes sammen til et rektangel med $n$ rader og $n+1$ kolonner ($n(n+1)$ prikker). Halvparten gir $T_n = \\frac{n(n+1)}{2}$.`
    },
    {
      id: 's2-9-2-def-kvadrattall',
      type: 'definition',
      title: 'Kvadrattall og sammenheng med trekantall',
      content: `Det $n$-te **kvadrattallet** $K_n$ er antall prikker i et $n \\times n$-kvadrat:
$$K_n = n^2$$

De første kvadrattallene: $K_1 = 1,\\ K_2 = 4,\\ K_3 = 9,\\ K_4 = 16,\\ K_5 = 25, \\ldots$

**Rekursiv formel:** For å gå fra $K_n$ til $K_{n+1}$ legges en L-formet "vinkel" (gnomon) med $2n + 1$ prikker til:
$$K_{n+1} = K_n + (2n+1), \\quad K_1 = 1$$

Dette betyr at $n^2$ er summen av de $n$ første oddetallene:
$$n^2 = 1 + 3 + 5 + \\cdots + (2n-1) = \\sum_{k=1}^{n}(2k-1)$$

**Sammenheng med trekantall:**
$$K_n = T_n + T_{n-1} = \\frac{n(n+1)}{2} + \\frac{(n-1)n}{2} = n^2$$

Visuelt: Dele et $n \\times n$-kvadrat langs diagonalen gir to trekanter med $T_n$ og $T_{n-1}$ prikker.`
    },
    {
      id: 's2-9-2-def-pentagonaltall',
      type: 'definition',
      title: 'Pentagonaltall og polygonaltall',
      content: `Det $n$-te **pentagonaltallet** $P_n$ er antall prikker som bygger opp en regulær femkant (pentagon) lagvis.

**Eksplisitt formel:**
$$P_n = \\frac{n(3n-1)}{2}$$

De første pentagonaltallene: $P_1 = 1,\\ P_2 = 5,\\ P_3 = 12,\\ P_4 = 22,\\ P_5 = 35, \\ldots$

**Rekursiv formel:** Differansen $P_{n+1} - P_n = 3n + 1$ (en aritmetisk følge med $d = 3$):
$$P_{n+1} = P_n + (3n+1), \\quad P_1 = 1$$

**Generalisering - polygonaltall:** For en regulær $s$-kant er det $n$-te polygonaltallet:
$$p_s(n) = \\frac{n\\bigl[(s-2)n - (s-4)\\bigr]}{2}$$

| $s$ | Figur | Formel |
|-----|-------|--------|
| 3 | Trekant | $\\frac{n(n+1)}{2}$ |
| 4 | Kvadrat | $n^2$ |
| 5 | Pentagon | $\\frac{n(3n-1)}{2}$ |
| 6 | Heksagon | $n(2n-1)$ |`
    },
    {
      id: 's2-9-2-tip-visualisering',
      type: 'tip',
      title: 'Visualisering av tallmønstre',
      content: `Når du jobber med figurtall, er det svart nyttig å **tegne figurene** for de første verdiene av $n$.

**Strategi for å finne formler:**
1. Tegn figuren for $n = 1, 2, 3, 4$
2. Tell prikkene og skriv opp tallfølgen
3. Finn differansene mellom påfølgende ledd
4. Hvis differansene er konstante: lineær formel (førstegradsuttrykk i $n$)
5. Hvis differansene danner en aritmetisk følge: andregradsuttrykk i $n$
6. Verifiser formelen for alle de oppgitte verdiene

GeoGebra og Python er gode verktoy for å visualisere figurtall interaktivt.`
    },
    {
      id: 's2-9-2-text-induksjon',
      type: 'text',
      title: 'Matematisk induksjon',
      content: `**Matematisk induksjon** er en bevisteknikk for å vise at en egenskap $P(n)$ gjelder for alle naturlige tall $n \\geq 1$.

**Fremgangsmåte:**

**Steg 1 - Grunnsteg:** Vis at $P(1)$ er sann (formelen gjelder for $n = 1$).

**Steg 2 - Induksjonssteg:** Anta at $P(m)$ er sann for et vilkårlig $m \\geq 1$ (induksjonsantagelsen). Vis at $P(m+1)$ da også er sann.

**Konklusjon:** Siden $P(1)$ gjelder, og $P(m) \\Rightarrow P(m+1)$ for alle $m$, gjelder $P(n)$ for alle $n \\geq 1$.

**Strategi for induksjonssteg:** Skriv $S_{m+1} = S_m + (m+1)$-te ledd, og bruk induksjonsantagelsen for $S_m$.

**Nyttige summeformler å huske:**
$$\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}, \\quad \\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}, \\quad \\sum_{k=1}^{n}(2k-1) = n^2$$`
    },
    {
      id: 's2-9-2-example-1',
      type: 'example',
      title: 'Bevise summeformelen med induksjon',
      problem: `Bruk matematisk induksjon til å bevise at:
$$1 + 2 + 3 + \\cdots + n = \\frac{n(n+1)}{2}$$`,
      solution: `**Grunnsteg ($n = 1$):**

Venstre side: $1$. Høyre side: $\\frac{1 \\cdot 2}{2} = 1$. Stemmer. $\\checkmark$

**Induksjonssteg:**

Anta at formelen gjelder for $n = m$:
$$1 + 2 + \\cdots + m = \\frac{m(m+1)}{2} \\quad \\text{(induksjonsantagelsen)}$$

Vi skal vise at formelen da gjelder for $n = m + 1$:
$$1 + 2 + \\cdots + m + (m+1) = \\frac{(m+1)(m+2)}{2}$$

Venstre side, ved induksjonsantagelsen:
$$\\underbrace{1 + 2 + \\cdots + m}_{= \\frac{m(m+1)}{2}} + (m+1) = \\frac{m(m+1)}{2} + (m+1) = (m+1)\\!\\left(\\frac{m}{2} + 1\\right) = (m+1) \\cdot \\frac{m+2}{2} = \\frac{(m+1)(m+2)}{2}$$

Dette er nøyaktig høyre side med $n = m + 1$. $\\checkmark$

**Konklusjon:** Formelen gjelder for alle $n \\geq 1$. $\\blacksquare$`
    },
    {
      id: 's2-9-2-example-2',
      type: 'example',
      title: 'Ukjent figurtallsfølge - finn eksplisitt formel',
      problem: `En figurtallsfølge har de fem første leddene $1, 6, 15, 28, 45$.

a) Finn differansene mellom påfølgende ledd.
b) Finn en rekursiv formel.
c) Finn en eksplisitt formel for $a_n$ ved hjelp av summeformler.`,
      solution: `**a) Differansene:**

$6-1=5$, $15-6=9$, $28-15=13$, $45-28=17$.

Differansene er $5, 9, 13, 17, \\ldots$ - en aritmetisk følge med $d = 4$ og første ledd $5$.

**b) Rekursiv formel:**

Den $k$-te differansen er $5 + (k-1) \\cdot 4 = 4k + 1$.
$$a_{n+1} = a_n + (4n+1), \\quad a_1 = 1$$

**c) Eksplisitt formel:**

$$a_n = a_1 + \\sum_{k=1}^{n-1}(4k+1) = 1 + 4\\sum_{k=1}^{n-1}k + \\sum_{k=1}^{n-1}1$$
$$= 1 + 4 \\cdot \\frac{(n-1)n}{2} + (n-1) = 1 + 2n(n-1) + (n-1) = 1 + (n-1)(2n+1)$$
$$= 1 + 2n^2 - n - 1 = 2n^2 - n = n(2n-1)$$

**Verifikasjon:** $a_5 = 5(10-1) = 45$ $\\checkmark$. (Dette er heksagonaltallene: $p_6(n) = n(2n-1)$.)`
    },
    {
      id: 's2-9-2-example-3',
      type: 'example',
      title: 'Figurtall med visuell tilnærming',
      problem: `Tenk deg en stjerneformet figur der den $n$-te figuren har en sentral prikk og $n$ "armer", der hver arm har $n$ prikker. Finn en formel for antall prikker $S_n$.`,
      solution: `**Mønster:**
- $S_1$: 1 sentral + 1 arm med 1 prikk = $1 + 1 = 2$... men la oss tenke annerledes.
- Sentral prikk: $1$.
- $n$ armer med $n$ prikker hver: $n \\cdot n = n^2$.
- Totalt: $S_n = n^2 + 1$.

**Verifikasjon:**
$S_1 = 1 + 1 = 2$, $S_2 = 4 + 1 = 5$, $S_3 = 9 + 1 = 10$, $S_4 = 16 + 1 = 17$.

**Rekursiv formel:**
$S_{n+1} - S_n = (n+1)^2 + 1 - n^2 - 1 = 2n + 1$.

Differansene er oddetall $3, 5, 7, 9, \\ldots$, som bekrefter sammenhengen med kvadrattall.`
    },
    {
      id: 's2-9-2-note-andrediff',
      type: 'note',
      title: 'Andredifferanser og andregradsuttrykk',
      content: `Når **andredifferansene** (differansene av differansene) er konstante, er den eksplisitte formelen et **andregradsuttrykk** i $n$:
$$a_n = An^2 + Bn + C$$

**Metode for å finne $A$, $B$, $C$:**
1. Andredifferansen $= 2A$, så $A = \\frac{\\text{andredifferanse}}{2}$
2. Sett inn tre kjente verdier av $(n, a_n)$ for å bestemme $B$ og $C$

**Eksempel:** Følgen $2, 7, 16, 29, 46, \\ldots$
- Differanser: $5, 9, 13, 17$ (aritmetisk med $d = 4$)
- Andredifferanser: $4, 4, 4$ (konstant)
- $A = 4/2 = 2$, så $a_n = 2n^2 + Bn + C$
- $a_1 = 2 + B + C = 2 \\Rightarrow B + C = 0$
- $a_2 = 8 + 2B + C = 7 \\Rightarrow 2B + C = -1$
- Løsning: $B = -1$, $C = 1$, så $a_n = 2n^2 - n + 1$`
    },
    {
      id: 's2-9-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-9-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Trekantall og kvadrattall',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn trekantallene $T_1, T_2, \\ldots, T_{10}$ ved formelen $T_n = \\frac{n(n+1)}{2}$. Skriv dem opp.',
            solution: '$T_1=1, T_2=3, T_3=6, T_4=10, T_5=15, T_6=21, T_7=28, T_8=36, T_9=45, T_{10}=55$.'
          },
          {
            label: 'b',
            task: 'Vis algebraisk at $T_n + T_{n-1} = n^2$ for alle $n \\geq 2$. Forklar dette geometrisk.',
            solution: '$T_n + T_{n-1} = \\frac{n(n+1)}{2} + \\frac{(n-1)n}{2} = \\frac{n^2+n+n^2-n}{2} = \\frac{2n^2}{2} = n^2$. Geometrisk: To trekanter kan settes sammen til et $n \\times n$-kvadrat.'
          },
          {
            label: 'c',
            task: 'Et tall $N$ er et trekantall dersom $8N + 1$ er et perfekt kvadrat. Sjekk dette for $T_5 = 15$ og $T_8 = 36$, og bevis formelen algebraisk.',
            solution: '$8 \\cdot 15 + 1 = 121 = 11^2$ $\\checkmark$. $8 \\cdot 36 + 1 = 289 = 17^2$ $\\checkmark$. Algebraisk: $8T_n + 1 = 8 \\cdot \\frac{n(n+1)}{2} + 1 = 4n^2 + 4n + 1 = (2n+1)^2$. Stemmer for alle $n$.'
          }
        ]
      }
    },
    {
      id: 's2-9-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-9-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Pentagonaltall og mønstre',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn de seks første pentagonaltallene med formelen $P_n = \\frac{n(3n-1)}{2}$.',
            solution: '$P_1=1, P_2=5, P_3=12, P_4=22, P_5=35, P_6=51$.'
          },
          {
            label: 'b',
            task: 'Vis at $P_{n+1} - P_n = 3n + 1$ for alle $n \\geq 1$.',
            solution: '$P_{n+1} - P_n = \\frac{(n+1)(3n+2)}{2} - \\frac{n(3n-1)}{2} = \\frac{3n^2+5n+2 - 3n^2+n}{2} = \\frac{6n+2}{2} = 3n+1$.'
          },
          {
            label: 'c',
            task: 'Vis at hvert pentagonaltall kan skrives som $P_n = K_n + T_{n-1}$ der $K_n = n^2$ er det $n$-te kvadrattallet og $T_{n-1}$ er det $(n-1)$-te trekantallet.',
            solution: '$K_n + T_{n-1} = n^2 + \\frac{(n-1)n}{2} = \\frac{2n^2 + n^2 - n}{2} = \\frac{3n^2 - n}{2} = \\frac{n(3n-1)}{2} = P_n$. $\\checkmark$'
          }
        ]
      }
    },
    {
      id: 's2-9-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-9-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finne eksplisitt formel fra mønster',
        subTasks: [
          {
            label: 'a',
            task: 'En figurtallsfølge starter med $1, 8, 21, 40, 65, \\ldots$. Finn differansene mellom påfølgende ledd og identifiser mønsteret.',
            solution: 'Differansene: $7, 13, 19, 25, \\ldots$ - aritmetisk med $d = 6$ og første differanse $7$.'
          },
          {
            label: 'b',
            task: 'Finn en rekursiv formel for følgen i oppgave a.',
            solution: 'Den $k$-te differansen er $7 + (k-1) \\cdot 6 = 6k+1$. Rekursiv: $a_{n+1} = a_n + (6n+1)$, $a_1 = 1$.'
          },
          {
            label: 'c',
            task: 'Finn en eksplisitt formel og verifiser den for $n = 5$.',
            solution: '$a_n = 1 + \\sum_{k=1}^{n-1}(6k+1) = 1 + 6 \\cdot \\frac{(n-1)n}{2} + (n-1) = 1 + 3n(n-1) + (n-1) = 3n^2 - 2n$. Verifiserer: $a_5 = 3 \\cdot 25 - 10 = 65$ $\\checkmark$.'
          }
        ]
      }
    },
    {
      id: 's2-9-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-9-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Andregradsformel fra følge',
        subTasks: [
          {
            label: 'a',
            task: 'Følgen $3, 10, 21, 36, 55, \\ldots$ har konstante andredifferanser. Finn andredifferansen og bestem $A$ i formelen $a_n = An^2 + Bn + C$.',
            solution: 'Differanser: $7, 11, 15, 19$. Andredifferanser: $4, 4, 4$. $A = 4/2 = 2$.'
          },
          {
            label: 'b',
            task: 'Bruk $a_1 = 3$ og $a_2 = 10$ til å finne $B$ og $C$ i formelen $a_n = 2n^2 + Bn + C$.',
            solution: '$a_1 = 2 + B + C = 3 \\Rightarrow B + C = 1$. $a_2 = 8 + 2B + C = 10 \\Rightarrow 2B + C = 2$. Trekker fra: $B = 1$, $C = 0$. Altså $a_n = 2n^2 + n$.'
          },
          {
            label: 'c',
            task: 'Verifiser at $a_n = 2n^2 + n = n(2n+1)$ stemmer for alle de fem oppgitte leddene. Skriv $a_n$ som en sum av de $n$ første leddene i en aritmetisk følge.',
            solution: '$a_1 = 1 \\cdot 3 = 3$, $a_2 = 2 \\cdot 5 = 10$, $a_3 = 3 \\cdot 7 = 21$, $a_4 = 4 \\cdot 9 = 36$, $a_5 = 5 \\cdot 11 = 55$ $\\checkmark$. Differansene er $7, 11, 15, 19, \\ldots = 4k+3$. Så $a_n = 3 + \\sum_{k=1}^{n-1}(4k+3) = 3 + 4 \\cdot \\frac{(n-1)n}{2} + 3(n-1) = 2n^2 + n$.'
          }
        ]
      }
    },
    {
      id: 's2-9-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-9-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Matematisk induksjon',
        subTasks: [
          {
            label: 'a',
            task: 'Bruk matematisk induksjon til å bevise at $\\sum_{k=1}^{n}(2k-1) = n^2$.',
            solution: '**Grunnsteg ($n=1$):** $2 \\cdot 1 - 1 = 1 = 1^2$ $\\checkmark$.\n\n**Induksjonssteg:** Anta $\\sum_{k=1}^{m}(2k-1) = m^2$. Da: $\\sum_{k=1}^{m+1}(2k-1) = m^2 + (2m+1) = m^2+2m+1 = (m+1)^2$ $\\checkmark$.'
          },
          {
            label: 'b',
            task: 'Bruk matematisk induksjon til å bevise at $\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}$.',
            solution: '**Grunnsteg ($n=1$):** $1 = \\frac{1 \\cdot 2 \\cdot 3}{6} = 1$ $\\checkmark$.\n\n**Induksjonssteg:** Anta formelen for $n=m$. Da: $\\sum_{k=1}^{m+1}k^2 = \\frac{m(m+1)(2m+1)}{6} + (m+1)^2 = \\frac{(m+1)[m(2m+1)+6(m+1)]}{6} = \\frac{(m+1)(2m^2+7m+6)}{6} = \\frac{(m+1)(m+2)(2m+3)}{6}$. Dette er formelen for $n=m+1$ $\\checkmark$.'
          },
          {
            label: 'c',
            task: 'Bruk matematisk induksjon til å bevise at $\\sum_{k=1}^{n} k^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$ (summen av kuber er kvadratet av summen av heltall).',
            solution: '**Grunnsteg ($n=1$):** $1^3 = 1 = \\left(\\frac{1 \\cdot 2}{2}\\right)^2 = 1$ $\\checkmark$.\n\n**Induksjonssteg:** Anta $\\sum_{k=1}^{m} k^3 = \\left(\\frac{m(m+1)}{2}\\right)^2$. Da: $\\sum_{k=1}^{m+1}k^3 = \\left(\\frac{m(m+1)}{2}\\right)^2 + (m+1)^3 = (m+1)^2\\left(\\frac{m^2}{4} + (m+1)\\right) = (m+1)^2 \\cdot \\frac{m^2+4m+4}{4} = (m+1)^2 \\cdot \\frac{(m+2)^2}{4} = \\left(\\frac{(m+1)(m+2)}{2}\\right)^2$ $\\checkmark$.'
          }
        ]
      }
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 9.3: Programmering med følger og rekker
// ============================================================================

export const CHAPTER_S2_9_3: TextbookChapter = {
  id: 's2-9-3',
  courseId: 's2',
  chapterNumber: '9.3',
  title: 'Programmering med følger og rekker',
  description: 'Implementer følger og rekker i Python med for-løkker og while-løkker, visualiser konvergens med matplotlib, og utforsk tallmønstre numerisk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke programmering til å utforske matematiske sammenhenger og løse problemer',
    'utforske rekursive sammenhenger og presentere egne framgangsmåter',
    'gjøre rede for begrepene følge, rekke, konvergens og divergens, og bruke dette i problemløsning'
  ],
  content: [
    {
      id: 's2-9-3-intro',
      type: 'text',
      title: 'Hvorfor programmere følger og rekker?',
      content: `Programmering er et kraftig supplement til analytisk matematikk. Når vi studerer følger og rekker, gir Python oss muligheten til aa:

- **Generere** hundrevis av ledd umiddelbart, selv for kompliserte rekursive formler
- **Visualisere** konvergens og divergens grafisk
- **Eksperimentere** med parametre og se effekten umiddelbart
- **Modellere** praktiske situasjoner der analytiske formler er kompliserte

I dette kapitlet bruker vi tre typer løkker:
- **\`for\`-løkke:** Når vi vet nøyaktig hvor mange iterasjoner vi trenger (f.eks. "beregn de første 50 leddene")
- **\`while\`-løkke:** Når vi itererer til en betingelse er oppfylt (f.eks. "kjør til feilen er under $10^{-6}$")

Vi bruker **\`matplotlib\`** for plotting og **\`math\`** for matematiske funksjoner.`
    },
    {
      id: 's2-9-3-text-forloop',
      type: 'text',
      title: 'For-løkker for følger og delsummer',
      content: `**Eksplisitte følger** beregnes direkte:

\`\`\`python
# Geometrisk følge: a_n = 100 * 0.85^(n-1)
a1 = 100
k = 0.85
for n in range(1, 21):
    a_n = a1 * k**(n - 1)
    print(f"a_{n:>2} = {a_n:.4f}")
\`\`\`

**Rekursive følger** oppdaterer variabelen i hver iterasjon:

\`\`\`python
# Rekursiv: a_{n+1} = 0.7 * a_n + 15, a_1 = 200
a = 200
print(f"a_1 = {a:.4f}")
for n in range(2, 21):
    a = 0.7 * a + 15
    print(f"a_{n:>2} = {a:.4f}")
# Grenseverdi: L = 0.7L + 15 => L = 50
\`\`\`

**Delsummer** beregnes med en akkumulerende variabel:

\`\`\`python
import matplotlib.pyplot as plt

N = 100
S = 0
n_verdier = []
s_verdier = []

for n in range(1, N + 1):
    S += 1 / n**2       # Legg til neste ledd
    n_verdier.append(n)
    s_verdier.append(S)

plt.plot(n_verdier, s_verdier, "b-", linewidth=1.5)
plt.axhline(y=3.14159**2/6, color="red", linestyle="--",
            label=r"$\\pi^2/6 \\approx 1.6449$")
plt.xlabel("n")
plt.ylabel("$S_n$")
plt.title("Delsummer av $\\\\sum 1/n^2$")
plt.legend()
plt.grid(True)
plt.show()
\`\`\``
    },
    {
      id: 's2-9-3-text-while',
      type: 'text',
      title: 'While-løkker for konvergens',
      content: `En **\`while\`-løkke** er nyttig når vi ikke vet på forhånd hvor mange iterasjoner vi trenger. Et typisk brukstilfelle er å iterere til en følge har konvergert til ønsket presisjon.

**Eksempel: Finne antall ledd til grenseverdien er nådd**

\`\`\`python
# Geometrisk følge a_n = 500 * 0.9^(n-1)
# Finn første n slik at a_n < 1
a = 500
n = 1
while a >= 1:
    a = a * 0.9
    n += 1
print(f"Første n med a_n < 1: n = {n}, a_n = {a:.6f}")
\`\`\`

**Eksempel: Iterasjon til konvergens**

\`\`\`python
# Rekursiv: a_{n+1} = (a_n + 3/a_n) / 2  (kvadratrot av 3 med Newton-metoden)
import math

a = 2.0       # Startgjetning
toleranse = 1e-10
n = 0

while True:
    a_ny = (a + 3 / a) / 2
    n += 1
    if abs(a_ny - a) < toleranse:
        break
    a = a_ny

print(f"sqrt(3) = {a_ny:.12f}  (etter {n} iterasjoner)")
print(f"math.sqrt(3) = {math.sqrt(3):.12f}")
\`\`\`

Newton-metoden konvergerer ekstremt raskt (kvadratisk konvergens): antall korrekte desimaler omtrent fordobles per iterasjon.`
    },
    {
      id: 's2-9-3-tip-visualisering',
      type: 'tip',
      title: 'Visualisering med matplotlib og GeoGebra',
      content: `**matplotlib** er det vanligste plottebiblioteket i Python. Nyttige funksjoner:

- \`plt.plot(x, y)\` - linjeplott (bra for delsummer og trender)
- \`plt.stem(x, y)\` - stemmeplott (bra for diskrete følger)
- \`plt.axhline(y=L)\` - horisontal linje (bra for grenseverdier)
- \`plt.yscale('log')\` - logaritmisk skala (bra for eksponentiell vekst)

**GeoGebra** er også et godt verktoy:
- Bruk \`Sekvens()\`-kommandoen for å generere følger
- \`Sekvens(k^2, k, 1, 10)\` gir $\\{1, 4, 9, 16, 25, 36, 49, 64, 81, 100\\}$
- \`Sum(Sekvens(1/k^2, k, 1, 100))\` beregner delsummen $S_{100}$

Begge verktoyene lar deg raskt **eksperimentere** med parametre og visuelt oppdage mønstre før du beviser dem analytisk.`
    },
    {
      id: 's2-9-3-example-1',
      type: 'example',
      title: 'Lånamortisering med Python',
      problem: `Du tar opp et lån på 500 000 kr med 5 % nominell årlig rente. Du betaler 35 000 kr per år. La $a_n$ være restgjelden etter $n$ år.

a) Sett opp en rekursiv formel for $a_n$.
b) Skriv et Python-program som beregner restgjelden for hvert år og plotter utviklingen.
c) Finn det første året der restgjelden er nedbetalt (under 0 kr).`,
      solution: `**a) Rekursiv formel:**

$$a_{n+1} = a_n \\cdot 1{,}05 - 35\\,000, \\quad a_0 = 500\\,000$$

Restgjelden vokser med 5 % rente, men reduseres med årsbetalingen.

**b) Python-program:**

\`\`\`python
import matplotlib.pyplot as plt

a = 500_000    # Startlån
rente = 1.05
betaling = 35_000

år = [0]
gjeld = [a]

n = 0
while a > 0:
    a = a * rente - betaling
    n += 1
    år.append(n)
    gjeld.append(max(a, 0))  # Ikke vis negativ gjeld

plt.figure(figsize=(10, 5))
plt.plot(år, gjeld, "b-o", markersize=4)
plt.axhline(y=0, color="red", linestyle="--")
plt.xlabel("Aar")
plt.ylabel("Restgjeld (kr)")
plt.title("Lånamortisering: 500 000 kr til 5 % rente")
plt.grid(True)
plt.show()
print(f"Lånet er nedbetalt etter {n} år.")
\`\`\`

**c) Resultat:**

Programmet viser at lånet er nedbetalt etter ca. **24 år**. Vi kan verifisere analytisk: For $a_n > 0$ trenger vi $a_n \\cdot 1{,}05 > 35\\,000$, dvs. restgjelden må være over $\\frac{35\\,000}{0{,}05} = 700\\,000$ kr for at gjelden skal vokse. Siden startlånet er lavere, vil det alltid bli nedbetalt.`
    },
    {
      id: 's2-9-3-example-2',
      type: 'example',
      title: 'Numerisk utforsking av konvergens',
      problem: `Bruk Python til å undersoke konvergensen av rekken $\\sum_{n=1}^{\\infty} \\frac{1}{n^p}$ for ulike verdier av $p$.

a) Beregn delsummen $S_{10\\,000}$ for $p = 0{,}5$, $p = 1$, $p = 1{,}5$ og $p = 2$.
b) Plott delsummene som funksjon av $N$ for disse fire verdiene av $p$.
c) Kommenter hvilke verdier av $p$ som gir konvergens.`,
      solution: `**a) og b) Python-program:**

\`\`\`python
import matplotlib.pyplot as plt

N_max = 10000
p_verdier = [0.5, 1.0, 1.5, 2.0]

plt.figure(figsize=(10, 6))

for p in p_verdier:
    S = 0
    n_list = []
    s_list = []
    for n in range(1, N_max + 1):
        S += 1 / n**p
        if n % 100 == 0 or n <= 50:
            n_list.append(n)
            s_list.append(S)
    print(f"p = {p}: S_10000 = {S:.6f}")
    plt.plot(n_list, s_list, label=f"p = {p}")

plt.xlabel("N")
plt.ylabel("$S_N$")
plt.title("Delsummer av $\\\\sum 1/n^p$")
plt.legend()
plt.grid(True)
plt.show()
\`\`\`

**Resultater:**
- $p = 0{,}5$: $S_{10\\,000} \\approx 198{,}5$ (divergerer)
- $p = 1$: $S_{10\\,000} \\approx 9{,}79$ (divergerer, men sakte)
- $p = 1{,}5$: $S_{10\\,000} \\approx 2{,}612$ (konvergerer mot $\\zeta(1{,}5) \\approx 2{,}612$)
- $p = 2$: $S_{10\\,000} \\approx 1{,}6449$ (konvergerer mot $\\pi^2/6 \\approx 1{,}6449$)

**c) Konklusjon:** Rekken $\\sum 1/n^p$ konvergerer når $p > 1$ og divergerer når $p \\leq 1$.`
    },
    {
      id: 's2-9-3-example-3',
      type: 'example',
      title: 'Populasjonsmodell med logistisk vekst',
      problem: `En populasjon modelleres med den logistiske rekursive formelen:
$$P_{n+1} = r \\cdot P_n \\left(1 - \\frac{P_n}{K}\\right)$$

der $r = 2{,}8$ er vekstraten og $K = 1000$ er bæreevnen. Startpopulasjonen er $P_0 = 100$.

a) Skriv et Python-program som beregner de 50 første leddene og plotter dem.
b) Hva skjer med populasjonen på lang sikt?`,
      solution: `**a) Python-program:**

\`\`\`python
import matplotlib.pyplot as plt

r = 2.8
K = 1000
P = 100        # Startpopulasjon P_0
N = 50

n_verdier = [0]
p_verdier = [P]

for n in range(N):
    P = r * P * (1 - P / K)
    n_verdier.append(n + 1)
    p_verdier.append(P)

plt.figure(figsize=(10, 5))
plt.plot(n_verdier, p_verdier, "b-o", markersize=3)
plt.axhline(y=K * (1 - 1/r), color="red", linestyle="--",
            label=f"Likevekt = {K*(1-1/r):.0f}")
plt.xlabel("Generasjon $n$")
plt.ylabel("Populasjon $P_n$")
plt.title("Logistisk populasjonsmodell ($r = 2.8$, $K = 1000$)")
plt.legend()
plt.grid(True)
plt.show()
\`\`\`

**b) Analyse:**

For $r = 2{,}8$ stabiliserer populasjonen seg rundt likevekten:
$$P^* = K\\left(1 - \\frac{1}{r}\\right) = 1000 \\left(1 - \\frac{1}{2{,}8}\\right) \\approx 643$$

Plottet viser at populasjonen oscillerer rundt $P^*$ og konvergerer mot denne verdien. For høyere verdier av $r$ (f.eks. $r = 3{,}5$) oppstår kaotisk atferd - et fascinerende resultat fra dynamiske systemer.`
    },
    {
      id: 's2-9-3-note-tips',
      type: 'tip',
      title: 'Nyttige Python-mønstre for følger',
      content: `**Listeforståelse (list comprehension)** er kompakt for eksplisitte følger:
\`\`\`python
# a_n = n^2 + 3n for n = 1, ..., 20
a = [n**2 + 3*n for n in range(1, 21)]
\`\`\`

**\`sum()\` med generatoruttrykk** for raske summer uten å lagre alle ledd:
\`\`\`python
S = sum(1/n**2 for n in range(1, 10001))  # Sum av 10 000 ledd
\`\`\`

**\`enumerate()\`** gir både indeks og verdi:
\`\`\`python
for i, verdi in enumerate(a, 1):
    print(f"a_{i} = {verdi}")
\`\`\`

**Logaritmisk skala** for følger som vokser raskt:
\`\`\`python
plt.yscale('log')  # Y-aksen i logaritmisk skala
\`\`\`

**\`plt.stem()\`** passer for diskrete følger (enkeltpunkter med loddrette linjer), \`plt.plot()\` for trender og delsummer.`
    },
    {
      id: 's2-9-3-warning-python',
      type: 'warning',
      content: `**Vanlige programmeringsfeil med følger:**

- **Indeksfeil:** Python bruker 0-indeksering, men matematiske følger starter gjerne på $n = 1$. Pass på \`range(1, N+1)\` vs. \`range(N)\`.
- **Overskriving av variabel:** I rekursive følger må du oppdatere variabelen **etter** at du har brukt den gamle verdien. Skriv \`a_ny = f(a)\` først, deretter \`a = a_ny\`.
- **Flyttallsfeil:** Python bruker flyttall med begrenset presisjon (~15 desimaler). For veldig mange iterasjoner kan avrundingsfeil hope seg opp.
- **Uendelig løkke:** En \`while\`-løkke uten korrekt stoppbetingelse kjører for alltid. Legg alltid inn en maksimumsgrense: \`while a >= 1 and n < 10000:\`.`
    },
    {
      id: 's2-9-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-9-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Grunnleggende programmering av følger',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv et Python-program som bruker en for-løkke til å skrive ut de 15 første leddene i den aritmetiske følgen $a_n = 7 + 4(n-1)$ og beregner summen $S_{15}$. Verifiser summen analytisk med formelen $S_n = \\frac{n}{2}(2a_1 + (n-1)d)$.',
            solution: '```python\na1, d = 7, 4\nS = 0\nfor n in range(1, 16):\n    a_n = a1 + (n - 1) * d\n    S += a_n\n    print(f"a_{n:>2} = {a_n}")\nprint(f"S_15 = {S}")\n\n# Analytisk:\nn = 15\nS_an = n / 2 * (2 * a1 + (n - 1) * d)\nprint(f"Analytisk: S_15 = {S_an:.0f}")\n```\nBegge gir $S_{15} = 525$.'
          },
          {
            label: 'b',
            task: 'Skriv et Python-program som genererer de 20 første leddene i den rekursive følgen $a_1 = 1000$, $a_{n+1} = 0{,}85 \\cdot a_n$ og plotter dem med matplotlib. Legg inn en stiplet linje for grenseverdien.',
            solution: '```python\nimport matplotlib.pyplot as plt\n\na_verdier = [1000]\nfor _ in range(19):\n    a_verdier.append(0.85 * a_verdier[-1])\n\nplt.figure(figsize=(8, 5))\nplt.stem(range(1, 21), a_verdier)\nplt.axhline(y=0, color="red", linestyle="--", label="Grenseverdi = 0")\nplt.xlabel("n")\nplt.ylabel("a_n")\nplt.title("Geometrisk følge med k = 0.85")\nplt.legend()\nplt.grid(True)\nplt.show()\n```'
          },
          {
            label: 'c',
            task: 'Bruk en while-løkke til å finne det første leddet i følgen $a_n = 1000 \\cdot 0{,}85^{n-1}$ som er mindre enn $1$.',
            solution: '```python\na = 1000\nn = 1\nwhile a >= 1:\n    a = a * 0.85\n    n += 1\nprint(f"Første n med a_n < 1: n = {n}")\nprint(f"a_{n} = {a:.6f}")\n```\nAnalytisk: $1000 \\cdot 0{,}85^{n-1} < 1 \\Rightarrow n > 1 + \\frac{\\ln 1000}{\\ln(1/0{,}85)} \\approx 44$.'
          }
        ]
      }
    },
    {
      id: 's2-9-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-9-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Delsummer og konvergens',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv et Python-program som beregner delsummene $S_N = \\sum_{n=1}^{N} \\frac{1}{n^3}$ for $N = 10, 100, 1000, 10\\,000$. Sammenlign med Aperys konstant $\\zeta(3) \\approx 1{,}202056903$.',
            solution: '```python\nfor N in [10, 100, 1000, 10000]:\n    S = sum(1/n**3 for n in range(1, N+1))\n    feil = abs(S - 1.202056903)\n    print(f"S_{N:>5} = {S:.8f}  (feil: {feil:.2e})")\n```\nDelsummene konvergerer sakte mot $\\zeta(3) \\approx 1{,}20206$.'
          },
          {
            label: 'b',
            task: 'Plott delsummene $S_n = \\sum_{k=1}^{n} \\frac{(-1)^{k+1}}{k}$ for $n = 1, 2, \\ldots, 200$ (den alternerende harmoniske rekken). Hva er grenseverdien?',
            solution: '```python\nimport matplotlib.pyplot as plt\nimport math\n\nN = 200\nS = 0\nn_verdier = []\ns_verdier = []\nfor n in range(1, N+1):\n    S += (-1)**(n+1) / n\n    n_verdier.append(n)\n    s_verdier.append(S)\n\nplt.plot(n_verdier, s_verdier, "b-", linewidth=0.8)\nplt.axhline(y=math.log(2), color="red", linestyle="--",\n            label=f"ln(2) = {math.log(2):.6f}")\nplt.xlabel("n")\nplt.ylabel("S_n")\nplt.title("Alternerende harmoniske rekke")\nplt.legend()\nplt.grid(True)\nplt.show()\n```\nGrenseverdien er $\\ln 2 \\approx 0{,}6931$.'
          }
        ]
      }
    },
    {
      id: 's2-9-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-9-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Figurtall med programmering',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv et Python-program som beregner og plotter de 20 første trekantallene $T_n = \\frac{n(n+1)}{2}$ og de 20 første kvadrattallene $K_n = n^2$ i samme figur.',
            solution: '```python\nimport matplotlib.pyplot as plt\n\nn_verdier = list(range(1, 21))\nT = [n*(n+1)//2 for n in n_verdier]\nK = [n**2 for n in n_verdier]\n\nplt.figure(figsize=(8, 5))\nplt.stem(n_verdier, T, linefmt="b-", markerfmt="bo", label="Trekantall")\nplt.stem(n_verdier, K, linefmt="r-", markerfmt="rs", label="Kvadrattall")\nplt.xlabel("n")\nplt.ylabel("Verdi")\nplt.title("Trekantall og kvadrattall")\nplt.legend()\nplt.grid(True)\nplt.show()\n```'
          },
          {
            label: 'b',
            task: 'Verifiser med Python at $T_n + T_{n-1} = n^2$ for $n = 2, 3, \\ldots, 100$ ved å sjekke at differansen er null for alle $n$.',
            solution: '```python\ndef T(n):\n    return n * (n + 1) // 2\n\nfor n in range(2, 101):\n    assert T(n) + T(n-1) == n**2, f"Feil for n={n}"\nprint("Verifisert for n = 2, 3, ..., 100: T_n + T_{n-1} = n^2")\n```'
          }
        ]
      }
    },
    {
      id: 's2-9-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-9-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Praktisk modellering og tilnærminger',
        subTasks: [
          {
            label: 'a',
            task: 'Du investerer 5 000 kr ved starten av hvert år i et fond med 7 % avkastning per år. Skriv et Python-program som beregner og plotter formuen for tre ulike renter: 3 %, 7 % og 10 % over 30 år. Kommenter effekten av renteforskjellen.',
            solution: '```python\nimport matplotlib.pyplot as plt\n\nN = 30\nrenter = [0.03, 0.07, 0.10]\nnavn = ["3 %", "7 %", "10 %"]\n\nplt.figure(figsize=(10, 6))\nfor r, navn_r in zip(renter, navn):\n    a = 0\n    verdier = [0]\n    for n in range(N):\n        a = (1 + r) * a + 5000\n        verdier.append(a)\n    plt.plot(range(N+1), verdier, label=f"Rente {navn_r}")\n    print(f"Rente {navn_r}: {a:,.0f} kr etter {N} år")\n\nplt.xlabel("Aar")\nplt.ylabel("Formue (kr)")\nplt.title("Sparing: 5 000 kr/år med ulike renter")\nplt.legend()\nplt.grid(True)\nplt.show()\n```\nEtter 30 år: 3 %: ca. 237 000 kr, 7 %: ca. 472 000 kr, 10 %: ca. 822 000 kr. En dobling av renten gir nesten en tredobling av formuen pga. rentes rente-effekten.'
          },
          {
            label: 'b',
            task: 'Skriv et Python-program som bruker Newtons metode ($a_{n+1} = \\frac{1}{2}(a_n + \\frac{c}{a_n})$) til å beregne $\\sqrt{c}$ for $c = 7$. Start med $a_0 = 3$ og kjør til $|a_{n+1} - a_n| < 10^{-12}$. Skriv ut hvert ledd og antall korrekte desimaler.',
            solution: '```python\nimport math\n\nc = 7\na = 3.0\nexakt = math.sqrt(c)\n\nprint(f"Eksakt sqrt({c}) = {eksakt:.15f}")\nfor n in range(20):\n    a_ny = 0.5 * (a + c / a)\n    feil = abs(a_ny - eksakt)\n    print(f"a_{n+1:>2} = {a_ny:.15f}  (feil: {feil:.2e})")\n    if abs(a_ny - a) < 1e-12:\n        print(f"Konvergert etter {n+1} iterasjoner.")\n        break\n    a = a_ny\n```\nNewton konvergerer etter ca. 5-6 iterasjoner til maskinpresisjon (kvadratisk konvergens).'
          },
          {
            label: 'c',
            task: 'Bruk Python til å estimere $\\pi$ ved hjelp av Leibniz-formelen: $\\frac{\\pi}{4} = 1 - \\frac{1}{3} + \\frac{1}{5} - \\frac{1}{7} + \\cdots$. Plott feilen $|S_n \\cdot 4 - \\pi|$ som funksjon av $n$ i logaritmisk skala. Hvor mange ledd trenger du for 6 korrekte desimaler?',
            solution: '```python\nimport matplotlib.pyplot as plt\nimport math\n\nN = 1_000_000\nS = 0\nn_verdier = []\nfeil_verdier = []\n\nfor n in range(N):\n    S += (-1)**n / (2*n + 1)\n    if (n+1) % 10000 == 0 or n < 100:\n        n_verdier.append(n + 1)\n        feil_verdier.append(abs(4*S - math.pi))\n\nplt.figure(figsize=(10, 5))\nplt.loglog(n_verdier, feil_verdier, "b-")\nplt.xlabel("Antall ledd")\nplt.ylabel("Feil")\nplt.title("Konvergens av Leibniz-formelen for pi")\nplt.grid(True)\nplt.show()\nprint(f"pi = {4*S:.10f} (etter {N} ledd)")\n```\nLeibniz-formelen konvergerer svart sakte: man trenger ca. $10^6$ ledd for 6 korrekte desimaler.'
          }
        ]
      }
    }
  ],
  exercises: []
};
