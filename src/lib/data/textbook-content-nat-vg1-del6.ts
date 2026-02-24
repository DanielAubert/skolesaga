/**
 * Tekstbok innhold for Naturfag VG1 DEL 6
 * Utvidede kapitler for komplett LK20-dekning
 *
 * Seksjon 10: Teknologi, energi og bærekraft (10.1-10.7)
 *
 * Dekker LK20 kompetansemål for NAT01-04.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// SEKSJON 10: Teknologi, energi og bærekraft
// ============================================================================

export const CHAPTER_NAT_VG1_10_1: TextbookChapter = {
  id: 'nat-vg1-10-1',
  courseId: 'nat-vg1',
  chapterNumber: '10.1',
  title: 'Energiformer og energiovergang',
  description: 'Utforsk ulike energiformer, energioverganger og energibevaring.',
  estimatedMinutes: 55,
  competenceGoals: ['utforske en selvvalgt naturfaglig problemstilling, presentere funn og argumentere for valg av metoder'],
  content: [
    {
      id: 'nat-vg1-10-1-intro',
      type: 'text',
      content: `## Hva er energi?

**Energi** er evnen til å utføre arbeid eller skape forandring. Energi finnes overalt rundt oss og kan ikke skapes eller ødelegges - bare omdannes fra en form til en annen.

**Måleenhet:** Joule (J)
- 1 kJ = 1000 J
- 1 MJ = 1 000 000 J
- 1 kWh = 3,6 MJ (vanlig i strømregninger)

**Energiformer:**
- Kinetisk energi (bevegelsesenergi)
- Potensiell energi (stillingsenergi)
- Termisk energi (varmeenergi)
- Kjemisk energi (lagret i bindinger)
- Elektrisk energi
- Strålings-/lysenergi
- Kjerneenergi (atomkjerner)`,
    },
    {
      id: 'nat-vg1-10-1-def-1',
      type: 'definition',
      title: 'Kinetisk og potensiell energi',
      content: `**Kinetisk energi (Ek):**
Energien et objekt har på grunn av bevegelse.

$$E_k = \\frac{1}{2}mv^2$$

Der m = masse (kg) og v = fart (m/s)

**Eksempel:** En bil på 1500 kg som kjører i 20 m/s:
Ek = 0,5 × 1500 × 20² = 300 000 J = 300 kJ

**Potensiell energi (Ep) - tyngdeenergi:**
Energien et objekt har på grunn av sin posisjon i et tyngdefelt.

$$E_p = mgh$$

Der m = masse (kg), g = tyngdeakselerasjon (9,81 m/s²), h = høyde (m)

**Eksempel:** En stein på 2 kg løftet 10 m:
Ep = 2 × 9,81 × 10 = 196 J`,
    },
    {
      id: 'nat-vg1-10-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'En bil på 1200 kg kjører i 30 m/s. Beregn bilens kinetiske energi. Hvor høyt kunne denne energien løfte bilen hvis den ble omdannet til potensiell energi?',
        solution: 'Ek = ½mv² = 0,5 × 1200 × 30² = 540 000 J = 540 kJ. Høyde: Ep = Ek → mgh = Ek → h = Ek/(mg) = 540 000/(1200 × 9,81) = 45,9 m ≈ 46 m.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-10-1-def-2',
      type: 'definition',
      title: 'Energibevaring og energioverganger',
      content: `**Energibevaringsloven:**
Energi kan ikke skapes eller ødelegges, bare omdannes fra en form til en annen. Den totale energien i et lukket system er konstant.

**Energiovergang i en vannkraftverk:**
1. Vann i høyden (potensiell energi)
2. Faller ned (kinetisk energi)
3. Driver turbiner (mekanisk energi)
4. Generator (elektrisk energi)
5. Varmetap i alle ledd (termisk energi)

**Energiovergang ved forbrenning:**
Kjemisk energi → Termisk energi + Lysenergi

**Viktig:** Ved alle energioverganger går noe energi tapt som varme til omgivelsene. Dette er ikke brudd på energibevaring - energien forsvinner ikke, men spres utover og blir mindre nyttig.`,
    },
    {
      id: 'nat-vg1-10-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar energibevaringsloven med egne ord. Gi et eksempel på en energiovergang der det ser ut som energi forsvinner, og forklar hvor energien faktisk blir av.',
        solution: 'Energibevaringsloven sier at energi ikke kan skapes eller ødelegges, bare omdannes fra en form til en annen. Total energi i et lukket system er alltid konstant. Eksempel: Når en ball spretter og til slutt stopper, ser det ut som energien forsvinner. Men den kinetiske energien omdannes til termisk energi (varme) i ballen, gulvet og luften på grunn av friksjon og deformasjon. Energien er ikke borte, bare spredt utover som varme.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-10-1-def-3',
      type: 'definition',
      title: 'Arbeid og effekt',
      content: `**Arbeid (W):**
Energi overført når en kraft virker over en strekning.

$$W = F \\cdot s$$

Der F = kraft (N) og s = strekning (m).
Måles i joule (J).

**Effekt (P):**
Hvor raskt arbeid utføres - energi per tidsenhet.

$$P = \\frac{W}{t} = \\frac{E}{t}$$

Måles i watt (W). 1 W = 1 J/s

**Eksempel:** En person som løfter en kasse på 20 kg opp 2 meter på 4 sekunder:
- Arbeid: W = mgh = 20 × 9,81 × 2 = 392 J
- Effekt: P = 392 J / 4 s = 98 W

**Kilowattime (kWh):**
1 kWh = effekt på 1000 W i 1 time = 3,6 MJ
Brukes til å måle strømforbruk.`,
    },
    {
      id: 'nat-vg1-10-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'En varmtvannsbereder på 2000 W varmer vann i 3 timer. Hvor mye energi bruker den? Gi svaret i kWh og i MJ.',
        solution: 'Effekt = 2000 W = 2 kW. Tid = 3 timer. Energi = P × t = 2 kW × 3 h = 6 kWh. I MJ: 6 kWh × 3,6 MJ/kWh = 21,6 MJ.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-10-1-example-1',
      type: 'example',
      title: 'Eksempel: Energi i en berg-og-dal-bane',
      problem: 'En vogn på 500 kg starter på toppen av en berg-og-dal-bane 30 m over bakken. Hvor stor fart har vognen nederst hvis vi ser bort fra friksjon?',
      solution: `**Løsning med energibevaring:**

På toppen:
- Ep = mgh = 500 × 9,81 × 30 = 147 150 J
- Ek = 0 (vognen starter i ro)
- Etotal = 147 150 J

Nederst:
- Ep = 0 (h = 0)
- All energi er blitt kinetisk

Energibevaring: Ek(nederst) = Ep(toppen)
$$\\frac{1}{2}mv^2 = mgh$$
$$v^2 = 2gh$$
$$v = \\sqrt{2 \\times 9,81 \\times 30}$$
$$v = \\sqrt{588,6} \\approx 24,3 \\text{ m/s}$$

**Svar:** Vognen har fart ca. 24 m/s (87 km/t) nederst.
NB: Massen kanselleres ut - farten avhenger bare av høyden!`,
    },
    {
      id: 'nat-vg1-10-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'En syklist på 70 kg (inkludert sykkel) ruller nedover en bakke med høydeforskjell 15 m. Start fra ro. Beregn farten nederst hvis vi ser bort fra friksjon.',
        hints: ['Bruk energibevaring', 'Ep på toppen = Ek nederst'],
        solution: 'Ep = mgh = 70 × 9,81 × 15 = 10 300 J. Ek = Ep → ½mv² = mgh → v² = 2gh = 2 × 9,81 × 15 = 294,3 → v = 17,2 m/s (ca. 62 km/t)',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummering ---
    {
      id: 'nat-vg1-10-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Energiformer**: Energi finnes som kinetisk, potensiell, termisk, kjemisk, elektrisk, strålings- og kjerneenergi
- **Energibevaring**: Energi kan ikke skapes eller ødelegges, bare omdannes fra en form til en annen
- **Kinetisk og potensiell energi**: Kan beregnes med formlene Ek = ½mv² og Ep = mgh
- **Arbeid og effekt**: Arbeid er energioverføring (W = Fs), effekt er arbeid per tid (P = W/t)
- **Kilowattime**: Praktisk energienhet der 1 kWh = 3,6 MJ

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Energi | Evnen til å utføre arbeid eller skape forandring, målt i joule (J) |
| Kinetisk energi | Bevegelsesenergi, Ek = ½mv² |
| Potensiell energi | Stillingsenergi i tyngdefelt, Ep = mgh |
| Energibevaringsloven | Total energi i et lukket system er konstant |
| Arbeid | Energi overført via kraft over strekning, W = Fs |
| Effekt | Energi per tid, P = W/t, målt i watt (W) |
| Kilowattime (kWh) | 1000 W i 1 time = 3,6 MJ |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-10-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'En heis løfter en person på 80 kg fra bakkenivå til 25. etasje (75 m) på 30 sekunder.',
        subTasks: [
          { label: 'a', task: 'Beregn arbeidet heisen utfører.', solution: 'W = mgh = 80 × 9,81 × 75 = 58 860 J ≈ 59 kJ' },
          { label: 'b', task: 'Beregn effekten til heismotoren.', solution: 'P = W/t = 58 860/30 = 1962 W ≈ 2,0 kW' },
          { label: 'c', task: 'Hvis heisen har en virkningsgrad på 70 %, hvor mye elektrisk energi brukes?', solution: 'Elektrisk energi = 58 860 / 0,70 = 84 086 J ≈ 84 kJ' },
        ],
        solution: 'a) 59 kJ, b) 2,0 kW, c) 84 kJ',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-10-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'En pendel på 0,5 kg henger i en snor og svinges ut til en høyde på 0,4 m over det laveste punktet. Bruk energibevaring til å finne farten i det laveste punktet. Forklar også hvorfor pendelen gradvis svinger med mindre utslag.',
        solution: 'Med energibevaring: mgh = ½mv². Massen kansellerer: gh = ½v² → v = √(2gh) = √(2 × 9,81 × 0,4) = √7,85 = 2,8 m/s. Pendelen mister gradvis utslag fordi noe energi omdannes til varme på grunn av luftmotstand og friksjon i opphengspunktet. Denne energien spres til omgivelsene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_10_2: TextbookChapter = {
  id: 'nat-vg1-10-2',
  courseId: 'nat-vg1',
  chapterNumber: '10.2',
  title: 'Fornybare og ikke-fornybare energikilder',
  description: 'Lær om ulike energikilder, deres fordeler og ulemper, og betydningen for bærekraftig utvikling.',
  estimatedMinutes: 55,
  competenceGoals: ['gjøre rede for hvordan klimaendringer påvirker evolusjon, utbredelse av arter og biologisk mangfold'],
  content: [
    {
      id: 'nat-vg1-10-2-intro',
      type: 'text',
      content: `## Energikilder

Verden trenger store mengder energi til transport, oppvarming, industri og elektrisitet. Hvor denne energien kommer fra, har stor betydning for klima og miljø.

**Ikke-fornybare energikilder:**
- Fossil energi (kull, olje, gass) - 80 % av verdens energi
- Kjernekraft (uran)

**Fornybare energikilder:**
- Vannkraft
- Vindkraft
- Solenergi
- Bioenergi
- Geotermisk energi
- Bølge- og tidevannsenergi

**Hvorfor skifte?**
- Klimaendringer fra CO₂-utslipp
- Fossile ressurser er begrensede
- Luftforurensning fra forbrenning
- Energisikkerhet og uavhengighet`,
    },
    {
      id: 'nat-vg1-10-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom fornybare og ikke-fornybare energikilder. Gi tre eksempler på hver.',
        solution: 'Ikke-fornybare energikilder tar millioner av år å danne og finnes i begrensede mengder - de vil ta slutt. Eksempler: kull, olje, naturgass, uran. Fornybare energikilder fornyes naturlig i menneskelig tidsskala og vil ikke ta slutt. Eksempler: vannkraft, vindkraft, solenergi, bioenergi, geotermisk energi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-10-2-def-1',
      type: 'definition',
      title: 'Fossile energikilder',
      content: `**Fossile brensler** er dannet av døde organismer over millioner av år.

**Kull:**
- Dannet av planter i sumpområder
- Høyest CO₂-utslipp per energienhet
- Brukes hovedsakelig til elektrisitet og industri
- Største kilde til global CO₂-utslipp

**Olje:**
- Dannet av marine organismer
- Brukes til transport, plast, kjemikalier
- Ca. 30 % av verdens energi
- Lett å transportere og lagre

**Naturgass:**
- Hovedsakelig metan (CH₄)
- Lavest CO₂-utslipp av de fossile
- Brukes til oppvarming, elektrisitet, industri
- Utslipp av metan ved lekkasjer (sterk klimagass)

**Fordeler:** Høy energitetthet, stabile, fleksible, billige (ekstern kostnad ikke inkludert)

**Ulemper:** CO₂-utslipp, luftforurensning, begrensede ressurser, oljeutslipp, geopolitiske konflikter`,
    },
    {
      id: 'nat-vg1-10-2-def-2',
      type: 'definition',
      title: 'Fornybare energikilder',
      content: `**Vannkraft:**
- 96 % av norsk strømproduksjon
- Potensiell energi i vann → kinetisk → elektrisk
- Regulerbar, kan lagre energi (pumpekraftverk)
- Ulemper: Naturinngrep, påvirker elveøkosystemer

**Vindkraft:**
- Raskest voksende energikilde globalt
- Kinetisk energi i luft → elektrisk
- Uforutsigbar (varierer med vær)
- Ulemper: Visuell påvirkning, fugledød, støy

**Solenergi:**
- Solceller (PV): Lys → elektrisitet
- Solfangere: Lys → varme
- Enorm ressurs, synker raskt i pris
- Ulemper: Varierer med vær og årstid, plassbehov

**Bioenergi:**
- Energi fra biologisk materiale (tre, avfall, biodrivstoff)
- Regnes som karbonnøytral (CO₂ tas opp igjen)
- Ulemper: Konkurrerer med matproduksjon, avskoging

**Geotermisk:**
- Varme fra jordens indre
- Stabilt, uavhengig av vær
- Begrenset til vulkanske områder (Island, Kenya)`,
    },
    {
      id: 'nat-vg1-10-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Diskuter fordeler og ulemper ved vindkraft som energikilde. Vurder både miljømessige, økonomiske og sosiale aspekter.',
        solution: 'Fordeler: Ingen CO₂-utslipp under drift, fornybar og uuttømmelig ressurs, synkende priser, kan kombineres med landbruk. Ulemper: Variabel produksjon (avhengig av vind), visuell påvirkning på landskap, støy for naboer, fugledød og påvirkning på flaggermus, behov for kraftlinjer til avsidesliggende områder. Sosiale aspekter: Lokale konflikter om utbygging, arbeidsplasser, energiuavhengighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-10-2-def-3',
      type: 'definition',
      title: 'Kjernekraft',
      content: `**Kjernekraft** (fisjon) frigjør energi ved å spalte tunge atomkjerner (uran-235).

**Fordeler:**
- Ingen CO₂-utslipp under drift
- Høy energitetthet (1 kg uran = 20 000 kg kull)
- Stabil og regulerbar
- Liten landarealbruk

**Ulemper:**
- Radioaktivt avfall (farlig i tusenvis av år)
- Risiko for ulykker (Tsjernobyl, Fukushima)
- Høye byggekostnader
- Uranutvinning og opprikingsproblematikk
- Kan brukes til atomvåpen

**Kjernefusjon:**
Sammenslåing av lette kjerner (hydrogen → helium). Solens energikilde. Ikke kommersielt tilgjengelig ennå, men forskes intenst på (ITER-prosjektet).

**Debatt:**
Er kjernekraft en del av løsningen på klimakrisen? Noen mener ja (lav CO₂), andre mener nei (avfall, risiko, kostnad).`,
    },
    {
      id: 'nat-vg1-10-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Diskuter om kjernekraft bør være en del av løsningen på klimakrisen. Presenter argumenter for og mot.',
        solution: 'For kjernekraft: Svært lave CO₂-utslipp, stabil og pålitelig strømforsyning, høy energitetthet, liten arealbruk, kan erstatte kullkraftverk. Mot kjernekraft: Radioaktivt avfall som er farlig i tusenvis av år, risiko for alvorlige ulykker, høye byggekostnader og lang byggetid, uranutvinning har miljøkostnader, kan brukes til atomvåpen (spredningsfare). Konklusjon: Det finnes ikke ett riktig svar - det avhenger av hvordan man vekter ulike risikoer og verdier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-10-2-example-1',
      type: 'example',
      title: 'Eksempel: Sammenligning av CO₂-utslipp',
      problem: 'Sammenlign CO₂-utslipp per produsert kWh elektrisitet for ulike energikilder.',
      solution: `**Typiske livsløpsutslipp (g CO₂ per kWh):**

| Energikilde | CO₂ (g/kWh) |
|-------------|-------------|
| Kull | 820 |
| Naturgass | 490 |
| Solceller | 41 |
| Vindkraft | 11 |
| Vannkraft | 24 |
| Kjernekraft | 12 |

**Konklusjon:**
- Fornybare kilder og kjernekraft har dramatisk lavere utslipp
- Kull har ca. 75× høyere utslipp enn vindkraft
- For å nå klimamålene må fossile erstattes med lavutslippskilder
- Norge har svært lav CO₂-intensitet i strømmen (vannkraft)`,
    },
    {
      id: 'nat-vg1-10-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor har Norge så lav CO₂-intensitet i strømproduksjonen sammenlignet med andre europeiske land?',
        solution: 'Norge har ca. 96 % av strømproduksjonen fra vannkraft, som har svært lave CO₂-utslipp (24 g/kWh mot 820 g/kWh for kull). Dette skyldes naturlige forutsetninger: mye nedbør, høye fjell som gir fallhøyde, og mange innsjøer som fungerer som naturlige reservoarer. De fleste andre europeiske land har vært avhengige av kull, gass eller kjernekraft. Norge er også koblet til europeiske kraftmarkeder og kan eksportere fornybar kraft.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummering ---
    {
      id: 'nat-vg1-10-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Fossile energikilder**: Kull, olje og naturgass er dannet over millioner av år og gir høye CO₂-utslipp
- **Fornybare energikilder**: Vannkraft, vindkraft, solenergi, bioenergi og geotermisk energi fornyes naturlig
- **Kjernekraft**: Svært lav CO₂ men utfordringer med radioaktivt avfall og risiko
- **Norges energisituasjon**: Ca. 96 % vannkraft gir svært lav CO₂-intensitet
- **Energiskiftet**: Overgang fra fossile til fornybare kilder er nødvendig for å begrense klimaendringer

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Fossile brensler | Kull, olje og naturgass dannet av døde organismer over millioner av år |
| Fornybare energikilder | Energikilder som fornyes naturlig i menneskelig tidsskala |
| Kjernekraft (fisjon) | Energi frigjort ved spalting av tunge atomkjerner |
| Kjernefusjon | Energi frigjort ved sammenslåing av lette atomkjerner |
| Livsløpsutslipp | Totale utslipp fra produksjon, drift og avvikling av en energikilde |
| Energitetthet | Mengde energi per masse- eller volumenhet |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-10-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Et land planlegger å fase ut kullkraft og erstatte den med andre energikilder. Lag et forslag til en energimiks og begrunn valgene dine ut fra kriterier som CO₂-utslipp, stabilitet, kostnad og lokale forhold.',
        solution: 'Forslag: 40 % vindkraft, 30 % solkraft, 20 % naturgass (overgangsløsning), 10 % vannkraft. Begrunnelse: Vind og sol har lave utslipp og synkende priser, men varierer med været. Naturgass gir fleksibilitet og har halvparten så mye CO₂ som kull (overgangsløsning). Vannkraft gir stabil basislast. Energilagring (batterier, pumpekraft) og nettutbygging trengs. Alternativt kan kjernekraft vurderes for stabil basislast. Lokale forhold avgjør - ikke alle land har gode vindforhold eller sol.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-10-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Beskriv energiovergangene i en vannkraftverk fra regnvann til strøm i stikkontakten. Hvilke energitap skjer underveis?',
        solution: 'Energioverganger: 1) Solen fordamper vann (strålings- til termisk energi). 2) Vanndamp stiger og kondenserer som regn (termisk til potensiell energi). 3) Vann samles i høytliggende reservoarer (potensiell energi). 4) Vann faller gjennom rør (potensiell til kinetisk energi). 5) Vann driver turbiner (kinetisk til mekanisk energi). 6) Generator omdanner rotasjon til strøm (mekanisk til elektrisk energi). 7) Transformatorer og ledninger til forbruker. Energitap: Friksjon i rør og turbiner, elektrisk motstand i ledninger (varmetap), transformatortap. Typisk totalvirkningsgrad: 85-90 %.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_10_3: TextbookChapter = {
  id: 'nat-vg1-10-3',
  courseId: 'nat-vg1',
  chapterNumber: '10.3',
  title: 'Drivhuseffekten og klimaendringer',
  description: 'Forstå drivhuseffekten, klimaendringer og sammenhengen med energibruk.',
  estimatedMinutes: 55,
  competenceGoals: ['gjøre rede for hvordan klimaendringer påvirker evolusjon, utbredelse av arter og biologisk mangfold'],
  content: [
    {
      id: 'nat-vg1-10-3-intro',
      type: 'text',
      content: `## Drivhuseffekten

**Drivhuseffekten** er en naturlig prosess som gjør jorden beboelig. Uten den ville gjennomsnittstemperaturen vært ca. -18°C i stedet for +15°C.

**Hvordan fungerer det?**
1. Sollys (kortbølget stråling) treffer jorden
2. Bakken absorberer lyset og varmes opp
3. Jorden sender ut varmestråling (langbølget infrarød)
4. Drivhusgasser absorberer og sender tilbake noe av varmestrålingen
5. Atmosfæren og jordoverflaten varmes opp

**Problemet:**
Menneskelige aktiviteter øker konsentrasjonen av drivhusgasser, noe som forsterker den naturlige drivhuseffekten og fører til global oppvarming.`,
    },
    {
      id: 'nat-vg1-10-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar den naturlige drivhuseffekten steg for steg, og beskriv hvorfor den er viktig for livet på jorden.',
        solution: '1) Sollys (kortbølget stråling) passerer gjennom atmosfæren og treffer jordoverflaten. 2) Bakken absorberer lyset og varmes opp. 3) Den varme bakken sender ut varmestråling (langbølget infrarød stråling). 4) Drivhusgasser (CO₂, H₂O, CH₄) absorberer noe av denne varmestrålingen. 5) Gassene sender strålingen i alle retninger, inkludert tilbake mot bakken. 6) Dette varmer opp atmosfæren og overflaten. Betydning: Uten drivhuseffekten ville jordens gjennomsnittstemperatur vært ca. -18°C i stedet for +15°C. Vann ville fryse og livet som vi kjenner det ville ikke eksistere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-10-3-def-1',
      type: 'definition',
      title: 'Drivhusgasser',
      content: `**Viktige drivhusgasser:**

**Karbondioksid (CO₂):**
- Viktigste menneskeskapte klimagass
- Kilder: Forbrenning av fossile brensler, avskoging
- Oppholdstid i atmosfæren: Hundrevis av år
- Konsentrasjon: Økt fra 280 ppm (førindustriell) til >420 ppm

**Metan (CH₄):**
- 80× sterkere drivhuseffekt enn CO₂ (over 20 år)
- Kilder: Husdyrhold, rismarker, avfall, naturgasslekkasjer
- Oppholdstid: Ca. 12 år

**Lystgass (N₂O):**
- 270× sterkere enn CO₂
- Kilder: Landbruk (gjødsel), industri
- Oppholdstid: Ca. 120 år

**Fluorerte gasser (HFK, PFK, SF₆):**
- Ekstremt kraftige klimagasser (tusenvis av ganger sterkere enn CO₂)
- Kilder: Kjøling, industri
- Begrenset bruk, men økende

**Global oppvarmingspotensial (GWP):**
Måler hvor mye en gass bidrar til oppvarming sammenlignet med CO₂ over en tidsperiode.`,
    },
    {
      id: 'nat-vg1-10-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn de fire viktigste menneskeskapte drivhusgassene og forklar for hver hvor de kommer fra.',
        solution: '1) Karbondioksid (CO₂): Forbrenning av fossile brensler (kull, olje, gass), avskoging, sementproduksjon. 2) Metan (CH₄): Husdyrhold (drøvtyggere), rismarker, lekkasjer fra naturgass og olje, avfallsdeponier. 3) Lystgass (N₂O): Landbruk (nitrogengjødsel), forbrenning av fossile brensler, industriprosesser. 4) Fluorerte gasser (HFK, PFK, SF₆): Kjøleanlegg, klimaanlegg, isolasjonsmaterialer, industriprosesser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-10-3-def-2',
      type: 'definition',
      title: 'Observerte klimaendringer',
      content: `**Global oppvarming:**
- Temperaturen har økt ca. 1,1°C siden førindustriell tid
- De siste tiårene har vært de varmeste som er registrert
- Arktis varmes opp 2-3 ganger raskere enn globalt gjennomsnitt

**Observerte konsekvenser:**
- Isbreer og haviser smelter
- Havnivået stiger (ca. 20 cm siden 1900, akselererer)
- Mer ekstremvær: Hetebølger, tørke, kraftig nedbør
- Endringer i økosystemer og arters utbredelse
- Surere hav (CO₂ løses i havet)
- Korallbleking
- Tidligere vår, forsinket høst

**I Norge:**
- Raskere oppvarming enn globalt gjennomsnitt
- Mer nedbør, spesielt på vestlandet
- Isbreer smelter
- Endret snøsesong
- Påvirkning på fiske og landbruk`,
    },
    {
      id: 'nat-vg1-10-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn tre observerte konsekvenser av klimaendringene vi allerede ser i dag, både globalt og i Norge.',
        solution: 'Globalt: 1) Økt global gjennomsnittstemperatur med ca. 1,1°C. 2) Stigende havnivå (ca. 20 cm siden 1900). 3) Smelting av isbreer og haviser, spesielt i Arktis. 4) Hyppigere og mer intense ekstremværhendelser. 5) Surere hav og korallbleking. I Norge: 1) Raskere oppvarming enn globalt gjennomsnitt. 2) Økt nedbør, spesielt på Vestlandet. 3) Smelting av norske isbreer. 4) Kortere snøsesong og endret vintersesong. 5) Endringer i fiskebestander (nye arter trekker nordover).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-10-3-def-3',
      type: 'definition',
      title: 'Tilbakekoblingsmekanismer',
      content: `**Positiv tilbakekobling** (forsterker oppvarming):

**Is-albedo-tilbakekobling:**
1. Oppvarming smelter is og snø
2. Mørk bakke/hav erstatter hvit is
3. Mørke flater absorberer mer sollys
4. Mer oppvarming → mer issmelting

**Permafrost-tilbakekobling:**
1. Oppvarming tiner permafrost
2. Organisk materiale frigjør metan og CO₂
3. Mer drivhusgasser → mer oppvarming

**Skyer (kompleks):**
- Lave skyer: Reflekterer sollys → kjøling
- Høye skyer: Holder på varme → oppvarming
- Netto effekt under forskning

**Vippepunkter:**
Irreversible endringer som kan utløses ved viss oppvarming:
- Kollaps av iskapper (Grønland, Vest-Antarktis)
- Død av Amazonas regnskog
- Stans av Golfstrømmen
- Permanent tap av korallrev`,
    },
    {
      id: 'nat-vg1-10-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar is-albedo-tilbakekoblingen og hvorfor den er et eksempel på positiv tilbakekobling.',
        solution: 'Is-albedo-tilbakekobling: Når temperaturen stiger, smelter is og snø. Hvit is og snø reflekterer ca. 80-90 % av sollyset, mens mørk bakke eller hav bare reflekterer 10-30 %. Når is erstattes av mørke flater, absorberes mer sollys, noe som gir mer oppvarming, som smelter mer is, osv. Dette er en positiv tilbakekobling fordi den forsterker den opprinnelige endringen (oppvarming fører til mer oppvarming). "Positiv" betyr her selvforsterkende, ikke at det er positivt for oss.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-10-3-example-1',
      type: 'example',
      title: 'Eksempel: Karbonbudsjettet',
      problem: 'Forklar hva karbonbudsjettet er og hvorfor det er viktig for klimapolitikken.',
      solution: `**Karbonbudsjettet:**
Mengden CO₂ vi kan slippe ut og fortsatt holde oss under et gitt oppvarmingsmål.

**For 1,5°C-målet (Parisavtalen):**
- Gjenværende budsjett (fra 2020): Ca. 500 Gt CO₂
- Årlige utslipp: Ca. 40 Gt CO₂
- Med dagens utslipp: Budsjettet er brukt opp om ca. 12 år!

**For 2°C-målet:**
- Gjenværende budsjett: Ca. 1150 Gt CO₂
- Ca. 28 år med dagens utslipp

**Konklusjon:**
- Vi har et begrenset "budsjett" av CO₂ vi kan slippe ut
- Jo raskere vi kutter, desto mer rom for fremtidige utslipp
- Forsinket handling krever brattere kutt senere
- Hver tiendedels grad oppvarming betyr mer skade`,
    },
    // --- Oppsummering ---
    {
      id: 'nat-vg1-10-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Drivhuseffekten**: En naturlig prosess der drivhusgasser holder på varme og gjør jorden beboelig
- **Forsterket drivhuseffekt**: Menneskelig aktivitet øker konsentrasjonen av drivhusgasser og forsterker oppvarmingen
- **Drivhusgasser**: CO₂, metan, lystgass og fluorerte gasser med ulik styrke og oppholdstid
- **Observerte endringer**: 1,1°C oppvarming, issmelting, havnivåstigning, mer ekstremvær
- **Tilbakekoblinger**: Selvforsterkende prosesser som is-albedo og permafrost-tining
- **Karbonbudsjettet**: Begrenset mengde CO₂ vi kan slippe ut for å holde oss under oppvarmingsmålene

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Drivhuseffekten | Atmosfærens evne til å holde på varmestråling fra jorden |
| Drivhusgasser | Gasser som absorberer varmestråling (CO₂, CH₄, N₂O, HFK) |
| GWP | Global oppvarmingspotensial - styrken til en klimagass sammenlignet med CO₂ |
| Positiv tilbakekobling | Selvforsterkende prosess som øker den opprinnelige endringen |
| Vippepunkter | Terskler der irreversible endringer i klimasystemet utløses |
| Karbonbudsjettet | Total mengde CO₂ som kan slippes ut innenfor et oppvarmingsmål |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-10-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar sammenhengen mellom forbrenning av fossile brensler, CO₂-konsentrasjon i atmosfæren og global oppvarming. Bruk en årsak-virkning-kjede i svaret.',
        solution: 'Årsak-virkning-kjede: 1) Fossile brensler (kull, olje, gass) brennes for energi. 2) Forbrenningen frigjør CO₂ som har vært lagret i millioner av år. 3) CO₂-konsentrasjonen i atmosfæren øker (fra 280 til >420 ppm). 4) CO₂ absorberer varmestråling fra jordoverflaten. 5) Mer energi holdes tilbake i atmosfæren (forsterket drivhuseffekt). 6) Global gjennomsnittstemperatur stiger. 7) Oppvarmingen utløser tilbakekoblingsmekanismer (issmelting, tining av permafrost). 8) Klimasystemet endres: havnivåstigning, ekstremvær, økosystemendringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-10-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft hvorfor det er viktig å begrense oppvarmingen til 1,5°C fremfor 2°C. Bruk begrepet karbonbudsjett i svaret.',
        solution: 'Forskjellen mellom 1,5°C og 2°C oppvarming er større enn den høres ut: Ved 2°C dobles risikoen for alvorlig tørke, havnivåstigningen blir 10 cm høyere, nesten alle korallrev dør (mot 70-90 % ved 1,5°C), og det er høyere risiko for å utløse irreversible vippepunkter. Karbonbudsjettet for 1,5°C er ca. 500 Gt CO₂, mens for 2°C er det ca. 1150 Gt. Med dagens utslipp (40 Gt/år) er 1,5°C-budsjettet brukt opp om ca. 12 år. Jo raskere vi kutter, desto mer rom har vi. Hver halvgrad teller - selv om 1,5°C er vanskelig, gjør alle utslippskutt forskjell.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_10_4: TextbookChapter = {
  id: 'nat-vg1-10-4',
  courseId: 'nat-vg1',
  chapterNumber: '10.4',
  title: 'Virkningsgrad og energieffektivisering',
  description: 'Lær om virkningsgrad, energitap og hvordan vi kan bruke energi mer effektivt.',
  estimatedMinutes: 50,
  competenceGoals: ['utforske en selvvalgt naturfaglig problemstilling, presentere funn og argumentere for valg av metoder'],
  content: [
    {
      id: 'nat-vg1-10-4-intro',
      type: 'text',
      content: `## Virkningsgrad

Ved alle energioverganger går noe energi tapt som varme. **Virkningsgrad** (η) angir hvor stor del av tilført energi som omdannes til nyttig arbeid.

$$\\eta = \\frac{\\text{Nyttig energi ut}}{\\text{Tilført energi}} \\times 100\\%$$

**Eksempler på virkningsgrad:**
| Enhet | Virkningsgrad |
|-------|---------------|
| Glødelampe | 5 % |
| LED-lampe | 40-50 % |
| Bensinmotor | 25-30 % |
| Elbilmotor | 85-95 % |
| Varmepumpe | 300-400 % |
| Vannkraftverk | 85-95 % |
| Solceller | 15-22 % |
| Kullkraftverk | 35-45 % |

**Merk:** Varmepumper har over 100 % fordi de flytter varme fra omgivelsene i stedet for å skape den.`,
    },
    {
      id: 'nat-vg1-10-4-def-1',
      type: 'definition',
      title: 'Energitap og termodynamikk',
      content: `**Hvorfor er det alltid energitap?**

**Termodynamikkens 2. lov:**
Energi har en tendens til å spres utover og bli mer uordnet. Varme flyter fra varmt til kaldt, aldri omvendt av seg selv.

**Varme som "ubrukelig" energi:**
Når energi omdannes til varme ved omgivelsestemperatur, er den spredt utover og vanskelig å utnytte til arbeid.

**Eksempel - glødelampe:**
- Tilført elektrisk energi: 60 W
- Lysenergi ut: 3 W (5 %)
- Varmetap: 57 W (95 %)

Energien er ikke borte, men spredt som varme i rommet. Den er ikke lenger nyttig for belysning.

**Carnot-grensen:**
Varmemotorer (f.eks. biler) har en teoretisk maksimal virkningsgrad som avhenger av temperaturforskjellen mellom varm og kald side. Ingen varmemaskin kan være 100 % effektiv.`,
    },
    {
      id: 'nat-vg1-10-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'En bilmotor tilføres 150 kJ kjemisk energi fra bensin. Motoren har 28 % virkningsgrad. Hvor mye nyttig mekanisk energi leverer motoren, og hvor mye energi går tapt som varme?',
        solution: 'Nyttig energi = 150 kJ × 0,28 = 42 kJ. Varmetap = 150 kJ - 42 kJ = 108 kJ. Motoren leverer 42 kJ mekanisk energi, mens 108 kJ (72 %) går tapt som varme til kjølesystem og eksos.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-10-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Sammenlign energibruken til en glødelampe (60 W, 5 % lys) og en LED-lampe som gir like mye lys (12 W, 50 % lys). Begge brukes 4 timer daglig i ett år.',
        subTasks: [
          { label: 'a', task: 'Beregn årlig energiforbruk for begge lampene i kWh.', solution: 'Glødelampe: 60 W × 4 t × 365 = 87 600 Wh = 87,6 kWh. LED: 12 W × 4 t × 365 = 17 520 Wh = 17,5 kWh.' },
          { label: 'b', task: 'Beregn årlig strømkostnad ved 1,50 kr/kWh.', solution: 'Glødelampe: 87,6 × 1,50 = 131,40 kr. LED: 17,5 × 1,50 = 26,25 kr. Sparing: 105,15 kr per lampe per år.' },
        ],
        solution: 'a) Glødelampe: 87,6 kWh, LED: 17,5 kWh. b) Glødelampe: 131,40 kr, LED: 26,25 kr. LED-lampen sparer 80 % energi og 105 kr årlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-10-4-def-2',
      type: 'definition',
      title: 'Varmepumper',
      content: `**Varmepumpe:** En maskin som flytter varme fra et sted til et annet ved hjelp av elektrisk energi.

**Hvordan fungerer det?**
1. Væske (kjølemiddel) fordamper i en fordamper og tar opp varme fra uteluften, bakken eller vann
2. Kompressor komprimerer gassen og øker temperaturen
3. Varm gass kondenserer i en kondensator og avgir varme til huset
4. Væske utvides gjennom en ventil og avkjøles
5. Syklusen gjentas

**COP (Coefficient of Performance):**
Forholdet mellom avgitt varme og tilført elektrisk energi.

COP = Varme ut / Elektrisk energi inn

**Eksempel:**
- COP = 3,5
- 1 kWh elektrisitet → 3,5 kWh varme
- 2,5 kWh varme kommer "gratis" fra uteluft/bakke

**Typer varmepumper:**
- Luft-luft: Billigst, lavere COP i kulde
- Luft-vann: Varmer radiator/gulvvarme
- Bergvarme/jordvarme: Høyest COP, dyreste installasjon`,
    },
    {
      id: 'nat-vg1-10-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvorfor en varmepumpe kan ha COP over 100 %, mens dette er umulig for en motor eller en glødelampe.',
        solution: 'En varmepumpe bryter ikke energibevaringen - den skaper ikke energi. Den bruker elektrisk energi til å flytte varme fra ett sted (ute) til et annet (inne). Med 1 kWh elektrisitet kan den flytte for eksempel 3 kWh varme fra uteluften inn i huset, og avgir totalt 4 kWh varme (1 kWh fra elektrisiteten + 3 kWh fra uteluften). COP = 4 (400 %). En motor eller lampe derimot omdanner energi fra en form til en annen, og kan aldri få ut mer nyttig energi enn det som tilføres på grunn av termodynamikkens lover.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-10-4-def-3',
      type: 'definition',
      title: 'Energieffektivisering',
      content: `**Tiltak for å redusere energibruk:**

**I bygninger:**
- Bedre isolasjon (vegger, tak, vinduer)
- Tette luftlekkasjer
- Varmepumper i stedet for panelovner
- LED-belysning
- Styringssystemer for varme og lys
- Varmegjenvinning i ventilasjon

**I transport:**
- Elektrifisering (elbiler, eltog, elferger)
- Kollektivtransport
- Sykkel og gange
- Mer effektive forbrenningsmotorer
- Lettere materialer

**I industri:**
- Prosessforbedringer
- Spillvarme utnyttes
- Elektrifisering

**Energispareparadokset (rebound-effekt):**
Når noe blir mer effektivt, bruker vi ofte mer av det. Eksempel: Mer drivstoffgjerrig bil → kjører lengre. Dette motvirker noe av gevinsten.`,
    },
    {
      id: 'nat-vg1-10-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hva rebound-effekten (energispareparadokset) er, og gi et eksempel på hvordan det kan motvirke energisparingstiltak.',
        solution: 'Rebound-effekten oppstår når energieffektivisering fører til økt bruk, slik at en del av besparelsen går tapt. Eksempel: En familie kjøper en mer drivstoffeffektiv bil som bruker 40 % mindre bensin per mil. Fordi det nå er billigere å kjøre, kjører de 30 % lengre distanser enn før. Nettobesparelsen blir da ikke 40 %, men mindre. Et annet eksempel: LED-lys er billigere å bruke, så folk lar lyset stå på oftere. Løsning: Kombinere effektivisering med bevissthet, priser eller reguleringer som motvirker økt forbruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-10-4-example-1',
      type: 'example',
      title: 'Eksempel: Sammenligning av oppvarming',
      problem: 'En familie bruker 20 000 kWh årlig til oppvarming med panelovner. Hvor mye elektrisitet spares ved å installere en varmepumpe med COP = 3,5?',
      solution: `**Med panelovner:**
- Elektrisk energi: 20 000 kWh
- Virkningsgrad ≈ 100 % (all strøm blir varme)
- Varme levert: 20 000 kWh

**Med varmepumpe (COP = 3,5):**
- Varme levert: 20 000 kWh (samme som før)
- Elektrisk energi = Varme / COP = 20 000 / 3,5 = 5714 kWh

**Sparing:**
20 000 - 5714 = 14 286 kWh (71 % sparing)

**Kostnad (antatt 1,50 kr/kWh):**
- Panelovn: 20 000 × 1,50 = 30 000 kr
- Varmepumpe: 5714 × 1,50 = 8571 kr
- Årlig sparing: 21 429 kr

Dette illustrerer hvorfor varmepumper er så populære - de gir betydelig lavere strømregning.`,
    },
    // --- Oppsummering ---
    {
      id: 'nat-vg1-10-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Virkningsgrad**: Andelen av tilført energi som omdannes til nyttig arbeid (η = nyttig energi / tilført energi)
- **Energitap**: Ved alle energioverganger tapes energi som varme, i tråd med termodynamikkens 2. lov
- **Varmepumper**: Flytter varme fra omgivelsene og kan ha COP over 100 % uten å bryte energibevaring
- **Energieffektivisering**: Tiltak i bygninger, transport og industri som reduserer energibruk
- **Rebound-effekten**: Effektivisering kan føre til økt bruk som delvis motvirker besparelsen

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Virkningsgrad (η) | Andel tilført energi som blir nyttig energi, i prosent |
| Termodynamikkens 2. lov | Energi spres naturlig og blir mer uordnet |
| COP | Coefficient of Performance - forholdet mellom avgitt varme og tilført elektrisitet |
| Varmepumpe | Maskin som flytter varme fra kaldt til varmt sted ved hjelp av elektrisitet |
| Rebound-effekt | Økt forbruk som følge av energieffektivisering |
| Carnot-grensen | Teoretisk maksimal virkningsgrad for en varmemaskin |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-10-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Sammenlign en elbil med en bensinbil når det gjelder energieffektivitet. En elbil har motorvirkningsgrad på 90 %, mens en bensinbil har 28 %. Begge trenger 20 kWh mekanisk energi for å kjøre en bestemt strekning. Hvor mye energi (i form av elektrisitet eller bensin) må tilføres hver bil?',
        solution: 'Elbil: Tilført energi = Nyttig energi / virkningsgrad = 20 kWh / 0,90 = 22,2 kWh elektrisitet. Bensinbil: Tilført energi = 20 kWh / 0,28 = 71,4 kWh (i form av kjemisk energi i bensin). Bensinbilen trenger over 3 ganger så mye tilført energi for samme strekning. Merk: For elbilen må vi også vurdere hvordan elektrisiteten produseres (f.eks. fra vannkraft med 90 % virkningsgrad eller kullkraftverk med 40 % virkningsgrad).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-10-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Et hus bruker 25 000 kWh elektrisitet årlig til oppvarming med elektriske panelovner. Eieren vurderer å investere i bergvarme (varmepumpe med COP = 4) til 200 000 kr eller etterisolering som reduserer varmebehovet med 40 % til 80 000 kr. Strømprisen er 1,50 kr/kWh. Hvilken investering er mest lønnsom, og hvor lang er tilbakebetalingstiden?',
        solution: 'Bergvarme: Ny strømbruk = 25 000 / 4 = 6250 kWh. Sparing = 25 000 - 6250 = 18 750 kWh = 28 125 kr/år. Tilbakebetaling = 200 000 / 28 125 = 7,1 år. Etterisolering: Ny varmebruk = 25 000 × 0,6 = 15 000 kWh. Sparing = 10 000 kWh = 15 000 kr/år. Tilbakebetaling = 80 000 / 15 000 = 5,3 år. Begge kombinert: Varmebruk = 15 000 kWh. Med bergvarme: 15 000 / 4 = 3750 kWh. Total sparing = 21 250 kWh = 31 875 kr/år. Investering = 280 000 kr. Tilbakebetaling = 8,8 år. Etterisolering alene har kortest tilbakebetalingstid, men kombinasjonen gir størst total sparing.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_10_5: TextbookChapter = {
  id: 'nat-vg1-10-5',
  courseId: 'nat-vg1',
  chapterNumber: '10.5',
  title: 'Usikkerhet og feilkilder i målinger',
  description: 'Lær å vurdere usikkerhet i målinger og identifisere feilkilder i naturvitenskapelige undersøkelser.',
  estimatedMinutes: 50,
  competenceGoals: ['utforske en selvvalgt naturfaglig problemstilling, presentere funn og argumentere for valg av metoder'],
  content: [
    {
      id: 'nat-vg1-10-5-intro',
      type: 'text',
      content: `## Usikkerhet i målinger

Alle målinger har en grad av usikkerhet. Å forstå og kommunisere denne usikkerheten er en viktig del av naturvitenskapelig arbeid.

**Hvorfor har vi usikkerhet?**
- Begrensninger i måleutstyr
- Menneskelige feil
- Variasjon i det vi måler
- Miljøpåvirkninger

**Nøyaktighet vs. presisjon:**
- **Nøyaktighet:** Hvor nær målingen er den sanne verdien
- **Presisjon:** Hvor godt målinger gjentas (liten spredning)

Man kan være presis uten å være nøyaktig (systematisk feil), eller nøyaktig i gjennomsnitt uten å være presis (tilfeldig feil).`,
    },
    {
      id: 'nat-vg1-10-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom nøyaktighet og presisjon med et eksempel fra skyting på blink.',
        solution: 'Nøyaktighet handler om hvor nær man treffer sentrum (den sanne verdien). Presisjon handler om hvor tett sammen skuddene er (liten spredning). En presis, men unøyaktig skytter treffer tett samlet, men langt fra sentrum (f.eks. alle skudd i øvre venstre hjørne) - dette er en systematisk feil. En nøyaktig, men upresis skytter har skudd spredt rundt sentrum, med gjennomsnitt i sentrum, men enkeltskudd langt fra hverandre. Ideelt er man både nøyaktig og presis: alle skudd i sentrum.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-10-5-def-1',
      type: 'definition',
      title: 'Systematiske og tilfeldige feil',
      content: `**Systematiske feil:**
- Gir målinger som konsekvent er for høye eller for lave
- Kan ikke reduseres ved å ta flere målinger
- Må korrigeres ved å finne og rette årsaken

**Eksempler:**
- Feil kalibrert instrument
- Parallaksefeil (lese av fra feil vinkel)
- Reaksjonstid ved tidtaking

**Tilfeldige feil:**
- Varierer tilfeldig rundt sann verdi
- Kan reduseres ved å ta flere målinger og beregne gjennomsnitt
- Skyldes tilfeldige variasjoner

**Eksempler:**
- Små variasjoner i temperatur
- Litt ulikt trykk på en knapp
- Variasjoner i det du måler (biologisk variasjon)

**Unngå feil:**
- Kalibrere instrumenter
- Bruke standardiserte metoder
- Ta mange målinger
- Dokumentere og kontrollere forhold`,
    },
    {
      id: 'nat-vg1-10-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Identifiser om følgende er systematiske eller tilfeldige feil:',
        subTasks: [
          { label: 'a', task: 'En vekt er feil kalibrert og viser alltid 2 g for lite', solution: 'Systematisk feil - konsekvent avvik i samme retning' },
          { label: 'b', task: 'Ulike personer har litt ulik reaksjonstid når de starter stoppeklokken', solution: 'Tilfeldig feil - varierer tilfeldig rundt gjennomsnittet' },
          { label: 'c', task: 'En elev leser alltid termometeret fra en vinkel som gir litt høyere verdi', solution: 'Systematisk feil (parallaksefeil) - konsekvent for høyt' },
          { label: 'd', task: 'Temperaturen i laboratoriet varierer litt gjennom dagen', solution: 'Tilfeldig feil - påvirker målingene tilfeldig' },
        ],
        solution: 'a) Systematisk, b) Tilfeldig, c) Systematisk, d) Tilfeldig',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-10-5-def-2',
      type: 'definition',
      title: 'Gjeldende siffer og avrunding',
      content: `**Gjeldende siffer:**
Antall siffer i et tall som har betydning og er målt.

**Regler:**
- Alle siffer unntatt ledende nuller er gjeldende
- Nuller mellom andre siffer er gjeldende
- Etterfølgende nuller etter komma er gjeldende

**Eksempler:**
- 2,30 m har 3 gjeldende siffer
- 0,0045 har 2 gjeldende siffer
- 1000 er tvetydig (1, 2, 3 eller 4?) → bruk 1,0 × 10³

**Regneregler:**
- Addisjon/subtraksjon: Svar rundes til færrest desimaler
- Multiplikasjon/divisjon: Svar rundes til færrest gjeldende siffer

**Eksempel:**
3,24 m × 1,5 m = 4,86 m² → rundes til 4,9 m² (2 gjeldende siffer som 1,5)`,
    },
    {
      id: 'nat-vg1-10-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvor mange gjeldende siffer har følgende tall? a) 0,00340  b) 5,200  c) 8,0 × 10⁵  d) 1200',
        solution: 'a) 0,00340 har 3 gjeldende siffer (3, 4, 0 - ledende nuller teller ikke). b) 5,200 har 4 gjeldende siffer (etterfølgende nuller etter komma er gjeldende). c) 8,0 × 10⁵ har 2 gjeldende siffer. d) 1200 er tvetydig - kan være 2, 3 eller 4 gjeldende siffer. Bedre skrivemåte: 1,2 × 10³ (2), 1,20 × 10³ (3), eller 1,200 × 10³ (4).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-10-5-def-3',
      type: 'definition',
      title: 'Angi usikkerhet',
      content: `**Måter å uttrykke usikkerhet:**

**Absolutt usikkerhet:**
Måling ± usikkerhet i samme enhet
Eksempel: Lengde = 5,32 ± 0,01 m

**Relativ usikkerhet (prosentvis):**
$$\\text{Relativ usikkerhet} = \\frac{\\text{Absolutt usikkerhet}}{\\text{Målt verdi}} \\times 100\\%$$

Eksempel: 0,01 / 5,32 × 100 % = 0,19 %

**Standardavvik:**
Mål på spredningen i et datasett. Beregnes matematisk fra gjennomsnittet.

**I grafer:**
Usikkerhet vises som feilstaver (error bars) rundt datapunktene.

**Tommelfingerregel:**
Usikkerheten er ofte halvparten av minste avlesbare enhet.
- Linjal med 1 mm-inndeling: ± 0,5 mm
- Stopp-klokke (manuell): ± 0,1-0,3 s (reaksjonstid)`,
    },
    {
      id: 'nat-vg1-10-5-example-1',
      type: 'example',
      title: 'Eksempel: Beregne gjennomsnitt og vurdere spredning',
      problem: 'Fem elever måler tiden det tar for en pendel å svinge 10 ganger: 12,4 s, 12,7 s, 12,5 s, 12,3 s, 12,6 s. Beregn gjennomsnitt og vurder usikkerheten.',
      solution: `**Gjennomsnitt:**
$$\\bar{x} = \\frac{12,4 + 12,7 + 12,5 + 12,3 + 12,6}{5} = \\frac{62,5}{5} = 12,5 \\text{ s}$$

**Spredning:**
Minste verdi: 12,3 s
Største verdi: 12,7 s
Spenn (range): 12,7 - 12,3 = 0,4 s

**Enkel usikkerhetsangivelse:**
Halvparten av spennet: 0,4 / 2 = 0,2 s

**Resultat:** Tid = 12,5 ± 0,2 s

**Periode for én svingning:**
T = 12,5 / 10 = 1,25 s
Usikkerhet: 0,2 / 10 = 0,02 s
T = 1,25 ± 0,02 s`,
    },
    {
      id: 'nat-vg1-10-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'En elev måler massen av et objekt fem ganger og får: 24,5 g, 24,8 g, 24,6 g, 24,7 g, 24,4 g. Beregn gjennomsnittet og gi svaret med en enkel usikkerhetsangivelse.',
        solution: 'Gjennomsnitt = (24,5 + 24,8 + 24,6 + 24,7 + 24,4) / 5 = 123,0 / 5 = 24,6 g. Spenn = 24,8 - 24,4 = 0,4 g. Enkel usikkerhet = spenn / 2 = 0,2 g. Resultat: m = 24,6 ± 0,2 g.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummering ---
    {
      id: 'nat-vg1-10-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Usikkerhet**: Alle målinger har usikkerhet som må vurderes og kommuniseres
- **Nøyaktighet vs. presisjon**: Nøyaktighet er nærhet til sann verdi, presisjon er reproduserbarhet
- **Feiltyper**: Systematiske feil gir konsekvent avvik, tilfeldige feil varierer rundt sann verdi
- **Gjeldende siffer**: Antall siffer med reell måleinformasjon i et tall
- **Usikkerhetsangivelse**: Kan uttrykkes som absolutt (± enhet) eller relativ (%)

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Nøyaktighet | Hvor nær en måling er den sanne verdien |
| Presisjon | Hvor tett gjentatte målinger ligger sammen |
| Systematisk feil | Konsekvent avvik i én retning, kan ikke reduseres ved flere målinger |
| Tilfeldig feil | Tilfeldig variasjon rundt sann verdi, reduseres ved gjennomsnitt |
| Gjeldende siffer | Antall meningsfulle siffer i en måling |
| Absolutt usikkerhet | Usikkerhet oppgitt i målingens enhet (f.eks. ± 0,1 g) |
| Relativ usikkerhet | Usikkerhet oppgitt som prosent av målt verdi |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-10-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Du skal måle tyngdeakselerasjonen g ved å slippe en ball fra en høyde h og måle falltiden t. Formelen er g = 2h/t². Listen nedenfor viser mulige feilkilder. Klassifiser hver som systematisk eller tilfeldig, og forklar hvordan den påvirker resultatet.',
        subTasks: [
          { label: 'a', task: 'Luftmotstand bremser ballen', solution: 'Systematisk - gir konsekvent lenger falltid, og dermed for lav g.' },
          { label: 'b', task: 'Varierende reaksjonstid ved start og stopp av klokke', solution: 'Tilfeldig - varierer rundt gjennomsnittet. Kan reduseres ved flere målinger.' },
          { label: 'c', task: 'Meterstokken er strukket og viser for kort lengde', solution: 'Systematisk - h måles for lav, gir for lav g.' },
        ],
        solution: 'a) Systematisk - for lav g, b) Tilfeldig - reduseres ved flere målinger, c) Systematisk - for lav g. Systematiske feil må korrigeres (f.eks. korrigere for luftmotstand, kalibrere meterstokk), mens tilfeldige feil reduseres ved å ta gjennomsnitt av mange målinger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-10-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Du måler siden i en firkant til 4,5 ± 0,1 cm. Beregn arealet med usikkerhet. Bruk at den relative usikkerheten i et produkt er summen av de relative usikkerhetene i faktorene.',
        solution: 'Areal = side² = 4,5² = 20,25 cm². Relativ usikkerhet i siden = 0,1/4,5 = 0,022 = 2,2 %. Ved areal = side × side er relativ usikkerhet i areal = 2,2 % + 2,2 % = 4,4 %. Absolutt usikkerhet i areal = 20,25 × 0,044 = 0,9 cm². Areal = 20,3 ± 0,9 cm² (eller 20 ± 1 cm² med 2 gjeldende siffer).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_10_6: TextbookChapter = {
  id: 'nat-vg1-10-6',
  courseId: 'nat-vg1',
  chapterNumber: '10.6',
  title: 'Teknologi og samfunn',
  description: 'Drøft hvordan naturvitenskapelig kunnskap brukes i teknologiutvikling og påvirker samfunnet.',
  estimatedMinutes: 45,
  competenceGoals: ['drøfte hvordan utvikling av naturvitenskapelige hypoteser, modeller og teorier bidrar til at vi kan forstå og forklare verden'],
  content: [
    {
      id: 'nat-vg1-10-6-intro',
      type: 'text',
      content: `## Vitenskap, teknologi og samfunn

Naturvitenskap og teknologi henger tett sammen. Vitenskapelig kunnskap danner grunnlaget for ny teknologi, mens ny teknologi gjør ny vitenskap mulig.

**Samspillet:**
- **Vitenskap → Teknologi:** Forståelse av elektromagnetisme → mobil og WiFi
- **Teknologi → Vitenskap:** Kraftige datamaskiner → klimamodeller og genom-sekvensering

**Teknologi er ikke nøytral:**
- Den utvikles av mennesker med verdier og interesser
- Den har både tilsiktede og utilsiktede konsekvenser
- Bruken avhenger av sosiale, økonomiske og politiske forhold
- Teknologivalg er også verdivalg`,
    },
    {
      id: 'nat-vg1-10-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Gi tre eksempler på hvordan vitenskapelige oppdagelser har ført til teknologisk utvikling, og tre eksempler på hvordan ny teknologi har gjort ny vitenskap mulig.',
        solution: 'Vitenskap → teknologi: 1) Forståelse av elektromagnetisme → elektromotorer, generatorer, strømnett. 2) Oppdagelsen av antibiotika (penicillin) → medisinsk behandling av infeksjoner. 3) Kvantemekanikk → transistorer og datamaskiner. Teknologi → vitenskap: 1) Teleskoper → oppdagelse av planeter, galakser, universets struktur. 2) DNA-sekvenseringsteknologi → genomforskning og forståelse av evolusjon. 3) Satellitter → klimaforskning og værprognoser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-10-6-def-1',
      type: 'definition',
      title: 'Teknologivurdering',
      content: `**Teknologivurdering** (Technology Assessment) er en systematisk vurdering av teknologiens virkninger på samfunn, miljø og individ.

**Spørsmål som stilles:**
- Hvilke problemer løser teknologien?
- Hvem har nytte av den, og hvem bærer kostnadene?
- Hvilke utilsiktede konsekvenser kan oppstå?
- Finnes det alternative løsninger?
- Er teknologien reversibel?

**SWOT-analyse:**
- **S**tyrker (Strengths): Fordeler ved teknologien
- **W**eaknesses: Svakheter og begrensninger
- **O**pportunities: Muligheter som åpner seg
- **T**hreats: Trusler og risikoer

**Interessenter:**
Ulike grupper har ulike interesser: forskere, industri, forbrukere, miljøorganisasjoner, myndigheter, fremtidige generasjoner.`,
    },
    {
      id: 'nat-vg1-10-6-def-2',
      type: 'definition',
      title: 'Eksempler på teknologivurdering',
      content: `**Mobiltelefoner:**
- Styrker: Kommunikasjon, tilgang til informasjon, sikkerhet
- Svakheter: Avhengighet, distraksjoner, overvåkingsmuligheter
- Muligheter: Mobil helse, utdanning, inkludering
- Trusler: Personvern, sosiale medier og mental helse, e-avfall

**Kunstig intelligens (AI):**
- Styrker: Effektivisering, medisinsk diagnostikk, forskning
- Svakheter: Skjevheter i data, mangel på åpenhet ("black box")
- Muligheter: Løse komplekse problemer, personalisering
- Trusler: Arbeidsplasser, autonome våpen, overvåking, feilinformasjon

**Plastikk:**
- Styrker: Billig, lett, holdbart, formbart
- Svakheter: Nedbrytes ikke, lages fra olje
- Muligheter: Resirkulering, bioplast
- Trusler: Havforurensning, mikroplast, helsepåvirkning`,
    },
    {
      id: 'nat-vg1-10-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Gjennomfør en enkel SWOT-analyse av elektriske biler (elbiler) sammenlignet med bensin/dieselbiler.',
        solution: 'Styrker: Null utslipp under kjøring, lavere driftskostnader, stille, rask akselerasjon, kan lades hjemme. Svakheter: Høyere innkjøpspris, begrenset rekkevidde, lang ladetid, behov for ladeinfrastruktur. Muligheter: Fallende batteripriser, fornybar strøm, energilagring til nettet, ny industri. Trusler: Produksjon av batterier krever sjeldne mineraler (gruvedrift), behov for mer strømproduksjon, gjenvinning av batterier, arbeidsplasser i fossilindustrien.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-10-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Diskuter påstanden: "Teknologi er nøytral - det kommer an på hvordan vi bruker den."',
        solution: 'Påstanden er delvis riktig, men forenklet. Bruken av teknologi er viktig - et kjøkkenkniv kan brukes til matlaging eller vold. Men teknologi er ikke helt nøytral: Den utvikles av mennesker med verdier, interesser og makt. Designvalg bestemmer hva som er mulig og hva som er vanskelig. Noen teknologier har innebygde tendenser (sosiale medier designet for avhengighet, biler designet for hastighet). Fordeling av teknologi er ujevn (hvem har tilgang?). Teknologivalg lukker noen muligheter og åpner andre. Konklusjon: Både teknologiens design og dens bruk er viktig for konsekvensene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-10-6-def-3',
      type: 'definition',
      title: 'Bærekraftig teknologiutvikling',
      content: `**Bærekraft** betyr å dekke dagens behov uten å ødelegge mulighetene for fremtidige generasjoner.

**Tre dimensjoner:**
- **Miljømessig:** Ikke tømme ressurser eller ødelegge naturen
- **Sosial:** Rettferdig fordeling, menneskerettigheter, helse
- **Økonomisk:** Levedyktig på lang sikt

**Sirkulær økonomi:**
- Fra "ta-bruk-kast" til "bruk-gjenbruk-resirkuler"
- Design for lang levetid og reparasjon
- Materialer holdes i kretsløp

**Føre-var-prinsippet:**
Ved usikkerhet om konsekvensene, handle med forsiktighet.

**Tenk globalt, handle lokalt:**
Teknologivalg i Norge påvirker resten av verden (utvinning av råvarer, produksjon, avfallshåndtering).`,
    },
    {
      id: 'nat-vg1-10-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hva sirkulær økonomi er, og gi et eksempel på hvordan det kan anvendes på mobiltelefoner.',
        solution: 'Sirkulær økonomi er et økonomisk system der ressurser holdes i bruk så lenge som mulig gjennom gjenbruk, reparasjon, oppussing og resirkulering, i stedet for å kastes etter engangsbruk (lineær økonomi). For mobiltelefoner: Design for lang levetid og enkel reparasjon (utskiftbart batteri), mulighet for programvareoppdateringer i mange år, innsamlingsordninger for brukte telefoner, gjenvinning av verdifulle metaller (gull, kobolt, sjeldne jordarter), leasing/abonnementsmodeller der produsenten tar ansvar for hele livssyklusen. Dette reduserer behovet for å utvinne nye råvarer og minimerer e-avfall.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummering ---
    {
      id: 'nat-vg1-10-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Samspillet mellom vitenskap og teknologi**: Vitenskap gir grunnlag for teknologi, og teknologi muliggjør ny vitenskap
- **Teknologivurdering**: Systematisk vurdering av en teknologis virkninger på samfunn, miljø og individ
- **SWOT-analyse**: Verktøy for å vurdere styrker, svakheter, muligheter og trusler ved en teknologi
- **Bærekraftig utvikling**: Teknologi må vurderes ut fra miljømessige, sosiale og økonomiske dimensjoner
- **Sirkulær økonomi**: Holde ressurser i bruk lengst mulig gjennom gjenbruk og resirkulering

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Teknologivurdering | Systematisk vurdering av en teknologis konsekvenser |
| SWOT-analyse | Rammeverk: Styrker, Svakheter, Muligheter, Trusler |
| Bærekraftig utvikling | Dekke dagens behov uten å ødelegge for fremtidige generasjoner |
| Sirkulær økonomi | Ressurser holdes i kretsløp gjennom gjenbruk og resirkulering |
| Føre-var-prinsippet | Handle forsiktig ved usikkerhet om konsekvenser |
| Interessenter | Ulike grupper som påvirkes av en teknologi |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-10-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Velg en aktuell teknologi (f.eks. ansiktsgjenkjenning, selvkjørende biler, genredigering, droner) og gjennomfør en teknologivurdering. Vurder hvem som har nytte, hvem som bærer risikoen, og om det finnes alternative løsninger.',
        solution: 'Eksempel - Ansiktsgjenkjenning: Bruksområder: Sikkerhet, opplåsing av telefoner, finne savnede personer, overvåking. Nytte: Politiet (effektiv identifisering), selskaper (sikkerhet og målretting), brukere (bekvemmelighet). Risikoer: Personvern, overvåkingssamfunn, feilidentifisering (særlig av minoriteter), autoritære regimer kan misbruke. Interessekonflikter: Sikkerhet vs. personvern, effektivitet vs. rettssikkerhet. Alternative løsninger: PIN-koder, fingeravtrykk, andre sikkerhetstiltak. Konklusjon: Nyttig teknologi, men krever streng regulering og åpenhet om bruk. Demokratisk kontroll er viktig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-10-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft hva som menes med bærekraftig teknologiutvikling, og gi eksempler på hvordan vi kan gjøre teknologibruk mer bærekraftig.',
        solution: 'Bærekraftig teknologiutvikling innebærer å utvikle og bruke teknologi som dekker dagens behov uten å ødelegge mulighetene for fremtidige generasjoner. Dette inkluderer miljømessig bærekraft (fornybare ressurser, lite avfall, lave utslipp), sosial bærekraft (rettferdig fordeling, gode arbeidsforhold, menneskerettigheter) og økonomisk bærekraft (lønnsomt på lang sikt). Eksempler: Fornybar energi i stedet for fossil, energieffektive produkter, sirkulær design (reparerbart, resirkulerbart), rettferdig utvinning av mineraler, forlenget levetid på produkter, deling fremfor eierskap (bildeling), digitale løsninger som erstatter materielle produkter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_10_7: TextbookChapter = {
  id: 'nat-vg1-10-7',
  courseId: 'nat-vg1',
  chapterNumber: '10.7',
  title: 'Naturvitenskapens rolle i samfunnsdebatten',
  description: 'Forstå naturvitenskapens betydning for samfunnsbeslutninger og demokratisk debatt.',
  estimatedMinutes: 45,
  competenceGoals: ['drøfte aktuelle helse- og livsstilsspørsmål og vurdere pålitelighet i informasjon fra ulike kilder'],
  content: [
    {
      id: 'nat-vg1-10-7-intro',
      type: 'text',
      content: `## Naturvitenskap og demokrati

I et demokrati må borgere og politikere ta beslutninger om kompliserte saker som klimaendringer, vaksinering, genteknologi og energipolitikk. Naturvitenskapelig kunnskap er viktig for å forstå disse spørsmålene, men vitenskap alene gir ikke svarene.

**Vitenskapens rolle:**
- Beskrive hvordan ting er (fakta)
- Forklare sammenhenger (årsak-virkning)
- Forutsi konsekvenser av ulike valg
- Utvikle løsninger og teknologi

**Politikkens rolle:**
- Bestemme mål og verdier
- Veie ulike hensyn mot hverandre
- Ta beslutninger på vegne av fellesskapet
- Fordele ressurser og byrder

**Vitenskapelig konsensus vs. demokratisk beslutning:**
At 97 % av klimaforskere mener at klimaendringene er menneskeskapte, sier oss hva som er sannsynlig. Hvordan vi skal handle, er et politisk og etisk spørsmål.`,
    },
    {
      id: 'nat-vg1-10-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom vitenskapens og politikkens rolle i å håndtere klimaendringer.',
        solution: 'Vitenskapens rolle: Samle observasjoner og data om klimaet, modellere hvordan klimasystemet fungerer, forutsi konsekvenser av ulike utslippsnivåer, utvikle teknologier for lavutslippssamfunnet, og vurdere effekten av tiltak. Politikkens rolle: Sette mål for utslippskutt basert på verdivalg (hvor mye risiko godtar vi?), vedta lover og avgifter, fordele byrder mellom land, sektorer og generasjoner, prioritere mellom klimatiltak og andre behov. Vitenskap forteller oss hva som sannsynligvis skjer; politikken bestemmer hva vi gjør med det.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-10-7-def-1',
      type: 'definition',
      title: 'Vitenskapelig usikkerhet i samfunnsdebatten',
      content: `**All vitenskap har usikkerhet:**
- Modeller er forenklinger
- Data er begrenset
- Noen sammenhenger er komplekse

**Misbruk av usikkerhet:**
- "Forskerne er ikke enige" → brukes til å avvise etablert kunnskap
- "Vi vet ikke nok" → brukes til å utsette handling
- Enkeltstudier som "motbevis" → ignorerer konsensus

**Vitenskapelig konsensus:**
Når det store flertallet av eksperter, basert på mange uavhengige studier, er enige.

**Eksempler på vitenskapelig konsensus:**
- Klimaendringene er primært menneskeskapte
- Vaksiner er trygge og effektive
- Evolusjon er forklaringen på artsmangfoldet
- Røyking forårsaker kreft

**Forsiktighetsprinsippet:**
Ved usikkerhet om alvorlige konsekvenser, handle forsiktig selv uten fullstendig kunnskap.`,
    },
    {
      id: 'nat-vg1-10-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva vitenskapelig konsensus betyr, og hvorfor det er viktig å skille mellom konsensus og enkeltstudier.',
        solution: 'Vitenskapelig konsensus betyr at det store flertallet av eksperter på et felt, basert på mange uavhengige studier over tid, er enige om en konklusjon. Enkeltstudier kan ha feil, tilfeldige resultater, eller dekke bare en del av bildet. Konsensus oppstår når mange studier, gjort med ulike metoder av ulike forskere, peker i samme retning. Eksempel: Én studie som viser at en vaksine har bivirkninger veier lite mot tusenvis av studier som viser at den er trygg. Å fokusere på enkeltstudier som motsier konsensus er ofte cherrypicking og kan villede folk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-10-7-def-2',
      type: 'definition',
      title: 'Kritisk tenkning og kildekritikk',
      content: `**Kritisk tenkning:**
Evnen til å vurdere påstander, argumenter og bevis på en systematisk måte.

**Spørsmål å stille:**
1. Hvem sier dette, og hva er deres interesser?
2. Hva er kilden til påstanden?
3. Hvilke bevis presenteres?
4. Er bevisene etterprøvbare?
5. Hva sier det store flertallet av eksperter?
6. Finnes det alternative forklaringer?

**Røde flagg:**
- Appell til følelser fremfor fakta
- Angrep på person fremfor argument
- Cherrypicking (velge ut bare det som støtter konklusjonen)
- Falske eksperter
- Konspirasjonsteorier
- Overforkle sammenligninger

**Hvor finne pålitelig informasjon:**
- Fagfellevurdert forskning
- Anerkjente vitenskapelige institusjoner
- FNs klimapanel (IPCC), WHO, Folkehelseinstituttet
- Oppslagsverk som Store Norske Leksikon`,
    },
    {
      id: 'nat-vg1-10-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'En politiker sier: "Forskerne er uenige om klimaendringene, så vi bør vente med å handle til vi vet mer." Vurder dette argumentet kritisk.',
        solution: 'Argumentet er problematisk av flere grunner: 1) Det er misvisende om enigheten - over 97 % av klimaforskere er enige om at klimaendringene er menneskeskapte. Uenighet finnes om detaljer og konsekvenser, ikke om hovedbildet. 2) Det misforstår vitenskapelig usikkerhet - all vitenskap har usikkerhet, men det betyr ikke at vi ikke kan handle. 3) Det ignorerer forsiktighetsprinsippet - når konsekvensene av å ta feil er alvorlige og irreversible, bør vi handle forsiktig selv med usikkerhet. 4) Det er et forsinkelsesargument - vi vet nok til å handle, og å vente gjør problemet verre. Å kreve "mer forskning" kan være en strategi for å unngå upopulære beslutninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-10-7-def-3',
      type: 'definition',
      title: 'Vitenskap og verdier',
      content: `**Vitenskapelig objektivitet:**
Vitenskap streber etter objektivitet gjennom:
- Systematiske metoder
- Åpenhet og etterprøvbarhet
- Fagfellevurdering
- Selvkorreksjon over tid

**Men vitenskap er også menneskelig:**
- Forskere har fordommer og forutinntatthet
- Forskning styres av finansiering og prioriteringer
- Spørsmålene som stilles, reflekterer verdier
- Tolkning av resultater kan påvirkes

**Verdivalg i forskning:**
- Hva forskes det på? (prioritering)
- Hvordan forskes det? (etiske grenser)
- Hvordan brukes resultatene? (anvendelse)

**Eksempel - genteknologi:**
Vitenskap kan fortelle oss at vi KAN redigere gener i mennesker.
Vitenskap kan IKKE fortelle oss om vi BØR gjøre det - det er et etisk og politisk spørsmål.`,
    },
    {
      id: 'nat-vg1-10-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Gi et eksempel på hvordan verdier påvirker hvilken forskning som gjøres og hvordan resultater tolkes.',
        solution: 'Eksempel - medisinsk forskning: Hvilke sykdommer det forskes på, påvirkes av hva som er lønnsomt for legemiddelindustrien. Tropiske sykdommer som rammer fattige land får mindre forskningsmidler enn sykdommer i rike land. Tolkning: En studie som viser 20 % reduksjon i hjerteinfarkt kan fremstilles som "dramatisk forbedring" eller "beskjeden effekt" avhengig av hvem som kommuniserer den. Legemiddelprodusenter har interesse av å fremheve positive resultater. Annet eksempel: Forskning på kjønnsforskjeller i hjerner kan tolkes til å støtte eller utfordre kjønnsstereotypier, avhengig av forskerens utgangspunkt. Vitenskap er ikke helt verdifri, og det er viktig å være bevisst på dette.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummering ---
    {
      id: 'nat-vg1-10-7-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Vitenskapens og politikkens roller**: Vitenskap beskriver og forklarer, politikken bestemmer mål og verdivalg
- **Vitenskapelig konsensus**: Bred enighet blant eksperter basert på mange uavhengige studier
- **Kritisk tenkning**: Systematisk vurdering av påstander, argumenter og bevis
- **Kildekritikk**: Evnen til å identifisere pålitelig informasjon og gjenkjenne feilinformasjon
- **Vitenskap og verdier**: Forskning er ikke helt verdifri - spørsmål, metoder og tolkning påvirkes av verdier

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Vitenskapelig konsensus | Bred enighet blant eksperter basert på mange studier |
| Kritisk tenkning | Systematisk vurdering av påstander og argumenter |
| Kildekritikk | Evne til å vurdere påliteligheten til informasjonskilder |
| Forsiktighetsprinsippet | Handle forsiktig ved usikkerhet om alvorlige konsekvenser |
| Fagfellevurdering | Kvalitetskontroll der eksperter vurderer andres forskning |
| Cherrypicking | Selektiv bruk av data som støtter en bestemt konklusjon |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'nat-vg1-10-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Diskuter hvorfor naturvitenskapelig allmenndannelse (scientific literacy) er viktig i et demokrati. Gi konkrete eksempler på saker der borgere trenger å forstå vitenskap for å delta i demokratisk debatt.',
        solution: 'Naturvitenskapelig allmenndannelse er evnen til å forstå vitenskapelige begreper, metoder og grenser. Det er viktig i et demokrati fordi: 1) Mange politiske saker har vitenskapelige aspekter (klimapolitikk, vaksinasjonsprogrammer, genteknologilovgivning, energipolitikk). 2) Borgere må kunne vurdere påstander kritisk og ikke bli manipulert av feilinformasjon. 3) Valgbare representanter trenger å forstå vitenskap for å ta gode beslutninger. 4) Teknologiske valg påvirker alles liv. Eksempler: Forstå at vaksiner ikke forårsaker autisme, vurdere risiko ved atomkraft, forstå hvorfor klimatiltak er nødvendige, delta i debatt om genmodifisert mat. Uten denne kompetansen blir demokratiet svakere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-10-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-10-7-ex-6',
        number: '6',
        type: 'classic',
        task: 'Velg en aktuell samfunnsdebatt med naturvitenskapelige aspekter (f.eks. vindkraftutbygging, vaksinering, genmodifisert mat, hvalfangst). Identifiser hva vitenskap kan fortelle oss, og hva som er verdivalg.',
        solution: 'Eksempel - Vindkraftutbygging: Vitenskap kan fortelle: Hvor mye strøm en vindpark produserer, CO₂-sparing sammenlignet med fossile alternativer, påvirkning på fugler og flaggermus, støynivåer på ulike avstander, visuell påvirkning. Verdivalg: Hvor viktig er klimatiltak vs. uberørt natur? Hvem skal bære byrden av utbygging? Hvor mye er lokal motstand verdt? Hvordan veier vi globale klimafordeler mot lokale naturulemper? Hvem har rett til å bestemme? Konklusjon: Vitenskap gir faktagrunnlaget, men beslutningen krever at vi veier ulike verdier mot hverandre - det er politikk og etikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Export av alle kapitler i DEL 6
// ============================================================================

export const NAT_VG1_CHAPTERS_DEL6: TextbookChapter[] = [
  // Seksjon 10: Teknologi, energi og bærekraft
  CHAPTER_NAT_VG1_10_1,
  CHAPTER_NAT_VG1_10_2,
  CHAPTER_NAT_VG1_10_3,
  CHAPTER_NAT_VG1_10_4,
  CHAPTER_NAT_VG1_10_5,
  CHAPTER_NAT_VG1_10_6,
  CHAPTER_NAT_VG1_10_7,
];
