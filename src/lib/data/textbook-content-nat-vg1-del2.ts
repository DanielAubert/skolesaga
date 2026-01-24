/**
 * Tekstbok innhold for Naturfag VG1 DEL 2
 * Seksjon 3: Universet (3.1-3.4)
 * Seksjon 4: Kjemi - stoffer og bindinger (4.1-4.8)
 *
 * Dekker LK20 kompetansemål for NAT01-04.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// SEKSJON 3: Universet
// ============================================================================

export const CHAPTER_NAT_VG1_3_1: TextbookChapter = {
  id: 'nat-vg1-3-1',
  courseId: 'nat-vg1',
  chapterNumber: '3.1',
  title: 'Big bang og universets opprinnelse',
  description: 'Lær om big bang-teorien og hvordan universet oppsto og utviklet seg.',
  estimatedMinutes: 55,
  competenceGoals: ['beskrive big bang-teorien om hvordan universet har oppstått og utviklet seg, og gjøre rede for observasjoner som støtter denne teorien'],
  content: [
    {
      id: 'nat-vg1-3-1-intro',
      type: 'text',
      content: `## Big bang - universets fødsel

For ca. 13,8 milliarder år siden oppsto universet i det vi kaller **big bang**. Dette var ikke en eksplosjon i rommet, men en eksplosjon AV rommet selv.

**Hva skjedde?**
I begynnelsen var all materie og energi konsentrert i et ekstremt lite, varmt og tett punkt. Så begynte rommet selv å utvide seg raskt.`,
    },
    {
      id: 'nat-vg1-3-1-def-1',
      type: 'definition',
      title: 'Tidslinje etter big bang',
      content: `**De første øyeblikkene:**
- **10⁻⁴³ s:** Planck-tiden - fysikkens lover begynner å gjelde
- **10⁻³⁶ s:** Inflasjon - universet utvider seg eksponentielt
- **10⁻⁶ s:** Kvarker kombineres til protoner og nøytroner
- **3 min:** Kjernefysiske reaksjoner danner hydrogen og helium
- **380 000 år:** Universet blir gjennomsiktig - lyset kan bevege seg fritt
- **200 mill. år:** De første stjernene tennes
- **13,8 mrd. år:** I dag`,
    },
    {
      id: 'nat-vg1-3-1-def-2',
      type: 'definition',
      title: 'Universets sammensetning',
      content: `**Hva består universet av?**

- **Vanlig materie:** ~5%
  (Atomer, stjerner, planeter, deg og meg)

- **Mørk materie:** ~27%
  (Ukjent - vi ser bare gravitasjonseffekten)

- **Mørk energi:** ~68%
  (Ukjent - driver universets akselererende utvidelse)

**Grunnstoffene:**
Big bang produserte bare hydrogen (~75%) og helium (~25%). Alle tyngre grunnstoffer er dannet i stjerner!`,
    },
    {
      id: 'nat-vg1-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar med egne ord hva big bang var og hva det IKKE var.',
        hints: ['Big bang var ikke en eksplosjon i rommet', 'Tenk på at rommet selv ble til'],
        solution: 'Big bang var ikke en eksplosjon i rommet, men starten på selve rommet og tiden. All materie, energi og rommet selv oppsto fra et ekstremt lite punkt og begynte å utvide seg. Det var ingen "utenfor" før big bang.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_3_2: TextbookChapter = {
  id: 'nat-vg1-3-2',
  courseId: 'nat-vg1',
  chapterNumber: '3.2',
  title: 'Stjerner og deres livssyklus',
  description: 'Utforsk hvordan stjerner dannes, lever og dør.',
  estimatedMinutes: 50,
  competenceGoals: ['beskrive big bang-teorien om hvordan universet har oppstått og utviklet seg'],
  content: [
    {
      id: 'nat-vg1-3-2-intro',
      type: 'text',
      content: `## Stjernenes liv

Stjerner er gigantiske kuler av glødende gass der kjernefysiske reaksjoner frigjør enorme mengder energi. Vår sol er en helt gjennomsnittlig stjerne.

**Hva er en stjerne?**
En stjerne er et objekt der gravitasjonen presser materie så hardt sammen at kjernen blir varm nok til å starte fusjon - sammenslåing av lette atomkjerner til tyngre.`,
    },
    {
      id: 'nat-vg1-3-2-def-1',
      type: 'definition',
      title: 'Stjernens livsfaser',
      content: `**1. Fødsel (protostjerne):**
- Gasssky kollapser under egen tyngde
- Temperaturen øker
- Når 10 mill. °C starter hydrogenfusjon

**2. Hovedserien:**
- Stabil fase der hydrogen fusjonerer til helium
- Varer milliarder av år (avhenger av masse)
- Solen er i denne fasen

**3. Rød kjempe:**
- Hydrogen i kjernen brukt opp
- Helium fusjonerer til karbon
- Stjernens ytre lag utvider seg

**4. Død:**
- Lav masse → hvit dverg → svart dverg
- Høy masse → supernova → nøytronstjerne eller svart hull`,
    },
    {
      id: 'nat-vg1-3-2-def-2',
      type: 'definition',
      title: 'Vi er stjernestøv',
      content: `**Nukleosyntese i stjerner:**

Stjerner lager nye grunnstoffer gjennom fusjon:
- Hydrogen → Helium
- Helium → Karbon, oksygen
- Videre til jern (i massive stjerner)

**Grunnstoffer tyngre enn jern** dannes i supernovaeksplosjoner.

Når stjerner dør, sprer de disse grunnstoffene ut i rommet. Nye stjerner og planeter dannes av dette materialet.

**Konklusjon:** Alle atomer i kroppen din (unntatt hydrogen) ble dannet inne i stjerner. Karbonet i cellene dine, oksygenet du puster, jernet i blodet - alt er stjernestøv!`,
    },
    {
      id: 'nat-vg1-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'En stjerne har 10 ganger solens masse. Vil den leve lenger eller kortere enn solen? Forklar.',
        hints: ['Massive stjerner har mer drivstoff, men...', 'Tenk på energiproduksjon og forbruk'],
        solution: 'Kortere! Selv om den har mer drivstoff, bruker den det mye raskere. Energiproduksjonen øker kraftig med massen (omtrent med massen opphøyd i 3,5). En stjerne med 10 solmasser lever kanskje bare 30 millioner år, mens solen lever ca. 10 milliarder år.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_3_3: TextbookChapter = {
  id: 'nat-vg1-3-3',
  courseId: 'nat-vg1',
  chapterNumber: '3.3',
  title: 'Galakser og universets struktur',
  description: 'Lær om galakser, galaksehoper og universets storskalastruktur.',
  estimatedMinutes: 45,
  competenceGoals: ['beskrive big bang-teorien om hvordan universet har oppstått og utviklet seg'],
  content: [
    {
      id: 'nat-vg1-3-3-intro',
      type: 'text',
      content: `## Galakser - stjernebyer i rommet

En galakse er en enorm samling av stjerner, gass, støv og mørk materie holdt sammen av gravitasjon. Det finnes anslagsvis 200 milliarder galakser i det observerbare universet.

**Vår galakse - Melkeveien:**
- Ca. 200-400 milliarder stjerner
- Diameter: ~100 000 lysår
- Spiralformet
- Solen ligger 26 000 lysår fra sentrum`,
    },
    {
      id: 'nat-vg1-3-3-def-1',
      type: 'definition',
      title: 'Galaksetyper',
      content: `**Spiralgalakser:**
- Flate skiver med spiralarmer
- Aktiv stjernedannelse i armene
- Eksempel: Melkeveien, Andromeda

**Elliptiske galakser:**
- Kuleformede til avlange
- Gamle, røde stjerner dominerer
- Lite gass og støv

**Irregulære galakser:**
- Ingen bestemt form
- Ofte forstyrret av kollisjoner
- Eksempel: Den store magellanske sky`,
    },
    {
      id: 'nat-vg1-3-3-def-2',
      type: 'definition',
      title: 'Universets storskalastruktur',
      content: `**Hierarkiet:**
- Stjerner samles i **galakser**
- Galakser samles i **galaksegrupper** (titalls galakser)
- Grupper samles i **galaksehoper** (hundrevis til tusenvis)
- Hoper danner **superhoper** og **filamenter**

**Kosmisk vev:**
Galaksene er ikke jevnt fordelt, men danner et nettverk av filamenter med enorme tomrom (voids) mellom.

**Målestokk:**
- Avstand til nærmeste stjerne: 4,2 lysår
- Melkeveiens diameter: 100 000 lysår
- Avstand til Andromeda: 2,5 millioner lysår
- Observerbart univers: 93 milliarder lysår i diameter`,
    },
    {
      id: 'nat-vg1-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Lys beveger seg med 300 000 km/s. Hvor lang tid tar det lyset å reise fra solen til jorda (avstand: 150 millioner km)?',
        solution: 'Tid = avstand/hastighet = 150 000 000 km / 300 000 km/s = 500 sekunder ≈ 8,3 minutter',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_3_4: TextbookChapter = {
  id: 'nat-vg1-3-4',
  courseId: 'nat-vg1',
  chapterNumber: '3.4',
  title: 'Observasjoner som støtter big bang',
  description: 'Gjør rede for de viktigste observasjonene som støtter big bang-teorien.',
  estimatedMinutes: 50,
  competenceGoals: ['beskrive big bang-teorien om hvordan universet har oppstått og utviklet seg, og gjøre rede for observasjoner som støtter denne teorien'],
  content: [
    {
      id: 'nat-vg1-3-4-intro',
      type: 'text',
      content: `## Bevisene for big bang

Big bang er ikke bare en idé - det er en vitenskapelig teori støttet av mange uavhengige observasjoner. Her er de viktigste:`,
    },
    {
      id: 'nat-vg1-3-4-def-1',
      type: 'definition',
      title: 'Bevis 1: Universets utvidelse',
      content: `**Hubbles oppdagelse (1929):**
Edwin Hubble oppdaget at fjerne galakser beveger seg bort fra oss, og at hastigheten øker med avstanden.

**Rødforskyvning:**
Lyset fra fjerne galakser er strukket til lengre (rødere) bølgelengder fordi rommet mellom oss og galaksen utvider seg.

**Hubbles lov:**
v = H₀ × d

Der v er hastigheten galaksen beveger seg bort med, d er avstanden, og H₀ er Hubble-konstanten.

**Konsekvens:** Hvis vi "spoler tilbake", var alt på ett sted for ca. 13,8 milliarder år siden.`,
    },
    {
      id: 'nat-vg1-3-4-def-2',
      type: 'definition',
      title: 'Bevis 2: Kosmisk bakgrunnsstråling',
      content: `**Hva er det?**
Mikrobølgestråling som kommer fra alle retninger i rommet med temperatur 2,7 K (-270,5°C).

**Opprinnelse:**
380 000 år etter big bang ble universet kjølig nok til at elektroner kunne binde seg til atomkjerner. Da ble universet gjennomsiktig, og lyset som ble frigjort reiser fortsatt gjennom rommet.

**Oppdagelse:**
Penzias og Wilson oppdaget dette tilfeldig i 1965 og fikk Nobelprisen.

**Betydning:**
Dette er direkte observasjon av det tidlige universet - et "babybilde" av kosmos.`,
    },
    {
      id: 'nat-vg1-3-4-def-3',
      type: 'definition',
      title: 'Bevis 3: Grunnstoffenes forekomst',
      content: `**Big bang-nukleosyntese:**
Teorien forutsier at det tidlige universet skulle produsere ca. 75% hydrogen, 25% helium, og spor av litium.

**Observasjoner:**
Dette stemmer nøyaktig med hva vi måler i de eldste stjernene og i intergalaktisk gass!

**Viktig:**
Tyngre grunnstoffer (karbon, oksygen, jern osv.) dannes IKKE i big bang, men i stjerner. Dette forklarer hvorfor unge stjerner har mer av disse stoffene enn gamle stjerner.`,
    },
    {
      id: 'nat-vg1-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar med egne ord hvordan rødforskyvningen av galakselys støtter big bang-teorien.',
        hints: ['Tenk på hva rødforskyvning betyr', 'Hva betyr det at alle galakser beveger seg bort fra oss?'],
        solution: 'Rødforskyvning viser at galaksene beveger seg bort fra oss fordi rommet mellom oss utvider seg. Jo lenger unna galaksen er, jo raskere beveger den seg bort. Dette betyr at universet var mindre og tettere før, og at alt må ha vært samlet på ett sted i begynnelsen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// SEKSJON 4: Kjemi - stoffer og bindinger
// ============================================================================

export const CHAPTER_NAT_VG1_4_1: TextbookChapter = {
  id: 'nat-vg1-4-1',
  courseId: 'nat-vg1',
  chapterNumber: '4.1',
  title: 'Atomets oppbygning',
  description: 'Repeter og utdyp kunnskap om atomets bestanddeler og elektronkonfigurasjon.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske og gjøre rede for sammenhenger mellom kjemiske bindinger og egenskaper til ulike stoffer'],
  content: [
    {
      id: 'nat-vg1-4-1-intro',
      type: 'text',
      content: `## Atomet - byggesteinen

Alle stoffer er bygget opp av atomer. Atomet består av en liten, tung kjerne omgitt av elektroner.

**Atomets bestanddeler:**
- **Protoner** (p⁺): Positive, i kjernen
- **Nøytroner** (n): Nøytrale, i kjernen
- **Elektroner** (e⁻): Negative, rundt kjernen`,
    },
    {
      id: 'nat-vg1-4-1-def-1',
      type: 'definition',
      title: 'Atomnummer og massetall',
      content: `**Atomnummer (Z):**
Antall protoner i kjernen. Bestemmer hvilket grunnstoff det er.
- Hydrogen: Z = 1
- Karbon: Z = 6
- Oksygen: Z = 8

**Massetall (A):**
Summen av protoner og nøytroner.
A = Z + N

**Isotoper:**
Atomer med samme atomnummer men ulikt massetall (ulikt antall nøytroner).
- Karbon-12: 6 protoner + 6 nøytroner
- Karbon-14: 6 protoner + 8 nøytroner`,
    },
    {
      id: 'nat-vg1-4-1-def-2',
      type: 'definition',
      title: 'Elektronskall',
      content: `Elektronene er ordnet i skall rundt kjernen:

**Skall og kapasitet:**
| Skall | Navn | Maks elektroner |
|-------|------|-----------------|
| 1 | K | 2 |
| 2 | L | 8 |
| 3 | M | 18 |
| 4 | N | 32 |

**Elektronkonfigurasjon:**
- Natrium (Na, Z=11): 2, 8, 1
- Klor (Cl, Z=17): 2, 8, 7
- Argon (Ar, Z=18): 2, 8, 8

**Valenselektroner:** Elektronene i ytterste skall. Bestemmer kjemiske egenskaper.`,
    },
    {
      id: 'nat-vg1-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Oksygen har atomnummer 8. Angi elektronkonfigurasjonen og antall valenselektroner.',
        solution: 'Elektronkonfigurasjon: 2, 6. Valenselektroner: 6',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_4_2: TextbookChapter = {
  id: 'nat-vg1-4-2',
  courseId: 'nat-vg1',
  chapterNumber: '4.2',
  title: 'Periodesystemet',
  description: 'Forstå periodesystemets oppbygning og hvordan det forklarer grunnstoffenes egenskaper.',
  estimatedMinutes: 50,
  competenceGoals: ['utforske og gjøre rede for sammenhenger mellom kjemiske bindinger og egenskaper til ulike stoffer'],
  content: [
    {
      id: 'nat-vg1-4-2-intro',
      type: 'text',
      content: `## Periodesystemet - kjemiens ordensystem

Periodesystemet ordner grunnstoffene etter stigende atomnummer i rader (perioder) og kolonner (grupper) slik at stoffer med lignende egenskaper havner i samme gruppe.`,
    },
    {
      id: 'nat-vg1-4-2-def-1',
      type: 'definition',
      title: 'Perioder og grupper',
      content: `**Perioder (vannrette rader):**
- Periode 1: 2 grunnstoffer
- Periode 2-3: 8 grunnstoffer
- Periode 4-5: 18 grunnstoffer
- Periodenummer = antall elektronskall

**Grupper (loddrette kolonner):**
- Gruppe 1: Alkalimetaller (Li, Na, K...)
- Gruppe 2: Jordalkalimetaller (Be, Mg, Ca...)
- Gruppe 17: Halogener (F, Cl, Br...)
- Gruppe 18: Edelgasser (He, Ne, Ar...)

**Gruppenummer = antall valenselektroner** (for hovedgruppene)`,
    },
    {
      id: 'nat-vg1-4-2-def-2',
      type: 'definition',
      title: 'Periodetrender',
      content: `**Atomradius:**
- Øker nedover i en gruppe (flere skall)
- Minker bortover i en periode (sterkere kjerneladning)

**Ioniseringsenergi:**
Energien som trengs for å fjerne et elektron.
- Øker bortover i perioden
- Minker nedover i gruppen

**Elektronegativitet:**
Evnen til å tiltrekke seg elektroner i en binding.
- Fluor er mest elektronegativt
- Metaller har lav elektronegativitet`,
    },
    {
      id: 'nat-vg1-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hvorfor natrium (Na) og kalium (K) har lignende kjemiske egenskaper.',
        hints: ['Hvor i periodesystemet er de?', 'Hva har de til felles?'],
        solution: 'Begge er i gruppe 1 (alkalimetaller) og har 1 valenselektron. De vil begge lett gi fra seg dette elektronet og danne +1-ioner. Derfor reagerer de likt kjemisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_4_3: TextbookChapter = {
  id: 'nat-vg1-4-3',
  courseId: 'nat-vg1',
  chapterNumber: '4.3',
  title: 'Ionebinding',
  description: 'Lær om hvordan ionebindinger dannes og egenskapene til ioneforbindelser.',
  estimatedMinutes: 50,
  competenceGoals: ['utforske og gjøre rede for sammenhenger mellom kjemiske bindinger og egenskaper til ulike stoffer'],
  content: [
    {
      id: 'nat-vg1-4-3-intro',
      type: 'text',
      content: `## Ionebinding - overføring av elektroner

Ionebinding oppstår når atomer overfører elektroner til hverandre. Dette skjer typisk mellom metaller og ikke-metaller.

**Hvordan dannes ioner?**
- Metaller gir fra seg elektroner → positive ioner (kationer)
- Ikke-metaller tar opp elektroner → negative ioner (anioner)`,
    },
    {
      id: 'nat-vg1-4-3-def-1',
      type: 'definition',
      title: 'Dannelse av natriumklorid',
      content: `**NaCl - vanlig salt:**

**Natrium (Na):**
- Elektronkonfigurasjon: 2, 8, 1
- Gir fra seg 1 elektron
- Blir Na⁺ med konfigurasjon 2, 8

**Klor (Cl):**
- Elektronkonfigurasjon: 2, 8, 7
- Tar opp 1 elektron
- Blir Cl⁻ med konfigurasjon 2, 8, 8

Begge ionene får nå edelgasskonfigurasjon (fullt ytterste skall).

**Ionegitter:**
Ionene ordner seg i et regelmessig tredimensjonalt mønster der hvert ion er omgitt av ioner med motsatt ladning.`,
    },
    {
      id: 'nat-vg1-4-3-def-2',
      type: 'definition',
      title: 'Egenskaper til ioneforbindelser',
      content: `**Typiske egenskaper:**

- **Høyt smeltepunkt:** Sterk tiltrekning mellom ioner
  (NaCl smelter ved 801°C)

- **Sprø:** Slår man på dem, forskyves ionene og like ladninger frastøter hverandre

- **Leder strøm når smeltet eller løst:** Ionene kan bevege seg fritt

- **Løselig i vann:** Vannmolekyler kan bryte opp gitteret

- **Krystallinske:** Former regelmessige krystaller`,
    },
    {
      id: 'nat-vg1-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hvorfor fast natriumklorid ikke leder strøm, men smeltet eller løst NaCl gjør det.',
        solution: 'I fast NaCl sitter ionene fast i gitteret og kan ikke bevege seg. Når NaCl smeltes eller løses i vann, kan ionene bevege seg fritt og transportere elektrisk ladning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_4_4: TextbookChapter = {
  id: 'nat-vg1-4-4',
  courseId: 'nat-vg1',
  chapterNumber: '4.4',
  title: 'Kovalent binding',
  description: 'Forstå kovalent binding, elektronparbinding og molekylstruktur.',
  estimatedMinutes: 55,
  competenceGoals: ['utforske og gjøre rede for sammenhenger mellom kjemiske bindinger og egenskaper til ulike stoffer'],
  content: [
    {
      id: 'nat-vg1-4-4-intro',
      type: 'text',
      content: `## Kovalent binding - deling av elektroner

Kovalent binding oppstår når atomer deler elektroner med hverandre. Dette skjer typisk mellom ikke-metaller.

**Hvorfor deling?**
Begge atomene oppnår edelgasskonfigurasjon ved å dele elektronpar.`,
    },
    {
      id: 'nat-vg1-4-4-def-1',
      type: 'definition',
      title: 'Typer kovalente bindinger',
      content: `**Enkeltbinding:**
Deling av ett elektronpar
- Eksempel: H-H, C-H, C-C
- Tegnes med én strek

**Dobbeltbinding:**
Deling av to elektronpar
- Eksempel: O=O, C=C, C=O
- Tegnes med to streker

**Trippelbinding:**
Deling av tre elektronpar
- Eksempel: N≡N, C≡C
- Tegnes med tre streker

**Bindingsstyrke:**
Trippel > dobbel > enkel`,
    },
    {
      id: 'nat-vg1-4-4-def-2',
      type: 'definition',
      title: 'Polare og upolare bindinger',
      content: `**Elektronegativitet** avgjør hvordan elektronene fordeles:

**Upolar kovalent binding:**
- Like atomer deler likt
- Eksempel: H₂, O₂, N₂

**Polar kovalent binding:**
- Ulike atomer deler ulikt
- Elektronene trekkes mot det mest elektronegative atomet
- Eksempel: H-Cl, H-O

**Vann er polart:**
Oksygen trekker elektronene mot seg, så oksygensiden blir litt negativ (δ-) og hydrogensiden litt positiv (δ+).`,
    },
    {
      id: 'nat-vg1-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Tegn Lewis-strukturen (elektronprikkformel) for vann (H₂O). Oksygen har 6 valenselektroner og hydrogen har 1.',
        hints: ['Oksygen er sentralatomet', 'Hvert hydrogen deler ett elektronpar med oksygen', 'Oksygen har også to frie elektronpar'],
        solution: 'Oksygen i midten med to O-H bindinger og to frie elektronpar. Totalt: 2 bindende elektronpar + 2 frie elektronpar rundt oksygen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_4_5: TextbookChapter = {
  id: 'nat-vg1-4-5',
  courseId: 'nat-vg1',
  chapterNumber: '4.5',
  title: 'Metallbinding og stoffers egenskaper',
  description: 'Lær om metallbinding og sammenhengen mellom bindingstype og stoffegenskaper.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske og gjøre rede for sammenhenger mellom kjemiske bindinger og egenskaper til ulike stoffer'],
  content: [
    {
      id: 'nat-vg1-4-5-intro',
      type: 'text',
      content: `## Metallbinding - elektroner i fellesskap

I metaller deles valenselektronene av alle atomene. Elektronene beveger seg fritt i et "elektronssjø" mellom positive metallioner.`,
    },
    {
      id: 'nat-vg1-4-5-def-1',
      type: 'definition',
      title: 'Metallers egenskaper',
      content: `**Typiske metallegenskaper:**

- **Leder strøm og varme:** Frie elektroner transporterer ladning og energi

- **Glinsende:** Frie elektroner reflekterer lys

- **Formbare:** Kan hamres og trekkes til tråd uten å brekke (metallatomer kan gli over hverandre)

- **Høyt smeltepunkt:** Sterk binding (varierer med metall)

- **Faste ved romtemperatur:** Unntatt kvikksølv (Hg)`,
    },
    {
      id: 'nat-vg1-4-5-def-2',
      type: 'definition',
      title: 'Sammenligning av bindingstyper',
      content: `| Egenskap | Ionebinding | Kovalent | Metall |
|----------|-------------|----------|--------|
| Mellom | Metall/ikke-metall | Ikke-metaller | Metaller |
| Elektroner | Overføres | Deles | Felles sjø |
| Smeltepunkt | Høyt | Lavt-middels | Varierer |
| Ledningsevne fast | Nei | Nei | Ja |
| Ledningsevne smeltet | Ja | Nei | Ja |
| Løselighet i vann | Ofte ja | Varierer | Nei |`,
    },
    {
      id: 'nat-vg1-4-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identifiser bindingstypen og forutsi egenskapene for: a) MgO  b) CO₂  c) Fe',
        subTasks: [
          { label: 'a', task: 'MgO', solution: 'Ionebinding (metall + ikke-metall). Høyt smeltepunkt, løselig i vann, leder strøm når smeltet.' },
          { label: 'b', task: 'CO₂', solution: 'Kovalent binding (to ikke-metaller). Lavt smeltepunkt, gass ved romtemperatur, leder ikke strøm.' },
          { label: 'c', task: 'Fe', solution: 'Metallbinding. Leder strøm, formbart, glinsende, høyt smeltepunkt.' },
        ],
        solution: 'Bindingstypen avgjør stoffets egenskaper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_4_6: TextbookChapter = {
  id: 'nat-vg1-4-6',
  courseId: 'nat-vg1',
  chapterNumber: '4.6',
  title: 'Organisk kjemi - introduksjon',
  description: 'Introduksjon til organisk kjemi og karbonets spesielle egenskaper.',
  estimatedMinutes: 50,
  competenceGoals: ['utforske egenskaper og reaksjoner til noen organiske og uorganiske karbonforbindelser'],
  content: [
    {
      id: 'nat-vg1-4-6-intro',
      type: 'text',
      content: `## Organisk kjemi - karbonets kjemi

Organisk kjemi handler om karbonforbindelser. Karbon er unikt fordi det kan danne lange kjeder og ringer med andre karbonatomer.

**Hvorfor er karbon spesielt?**
- Har 4 valenselektroner - kan danne 4 bindinger
- Kan binde til seg selv i kjeder, forgreininger og ringer
- Danner stabile bindinger med mange grunnstoffer`,
    },
    {
      id: 'nat-vg1-4-6-def-1',
      type: 'definition',
      title: 'Hydrokarboner',
      content: `**Hydrokarboner** inneholder bare karbon og hydrogen.

**Alkaner (mettede):**
Bare enkeltbindinger mellom karbonatomene.

| Navn | Formel | Struktur |
|------|--------|----------|
| Metan | CH₄ | Gass, naturgass |
| Etan | C₂H₆ | Gass |
| Propan | C₃H₈ | Gass, camping |
| Butan | C₄H₁₀ | Gass, lighter |
| Pentan | C₅H₁₂ | Væske |
| Heksan | C₆H₁₄ | Væske |

**Navneregelen:** Antall C → forstavelse + "an"
- 1 = met-, 2 = et-, 3 = prop-, 4 = but-`,
    },
    {
      id: 'nat-vg1-4-6-def-2',
      type: 'definition',
      title: 'Umettede hydrokarboner',
      content: `**Alkener (C=C dobbeltbinding):**
- Eten: CH₂=CH₂ (bruges i plastproduksjon)
- Formel: CₙH₂ₙ

**Alkyner (C≡C trippelbinding):**
- Etyn: CH≡CH (acetylen, sveising)
- Formel: CₙH₂ₙ₋₂

**Mettede vs umettede:**
- Mettet = bare enkeltbindinger
- Umettet = inneholder dobbelt- eller trippelbindinger
- Umettede kan reagere med mer hydrogen (addisjon)`,
    },
    {
      id: 'nat-vg1-4-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Tegn strukturformelen for propan (C₃H₈) og propen (C₃H₆).',
        hints: ['Propan har bare enkeltbindinger', 'Propen har en dobbeltbinding'],
        solution: 'Propan: H₃C-CH₂-CH₃ (alle enkeltbindinger). Propen: H₂C=CH-CH₃ (en dobbeltbinding mellom C1 og C2).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_4_7: TextbookChapter = {
  id: 'nat-vg1-4-7',
  courseId: 'nat-vg1',
  chapterNumber: '4.7',
  title: 'Funksjonelle grupper',
  description: 'Lær om viktige funksjonelle grupper og deres egenskaper.',
  estimatedMinutes: 55,
  competenceGoals: ['utforske egenskaper og reaksjoner til noen organiske og uorganiske karbonforbindelser, gi eksempler på anvendelser'],
  content: [
    {
      id: 'nat-vg1-4-7-intro',
      type: 'text',
      content: `## Funksjonelle grupper

En funksjonell gruppe er en atomgruppe som gir molekylet karakteristiske egenskaper. Den bestemmer hvordan stoffet reagerer kjemisk.`,
    },
    {
      id: 'nat-vg1-4-7-def-1',
      type: 'definition',
      title: 'Viktige funksjonelle grupper',
      content: `**Alkoholer (-OH):**
- Navnes med -ol
- Eksempel: Metanol (CH₃OH), etanol (C₂H₅OH)
- Løselige i vann, brukes som løsemidler

**Karboksylsyrer (-COOH):**
- Navnes med -syre
- Eksempel: Eddiksyre (CH₃COOH), maursyre (HCOOH)
- Sure egenskaper

**Estere (-COO-):**
- Dannes av alkohol + syre
- Gir lukt og smak
- Eksempel: Etylacetat (neglelakkfjerner)

**Aminer (-NH₂):**
- Inneholder nitrogen
- Basiske egenskaper
- Viktig i proteiner`,
    },
    {
      id: 'nat-vg1-4-7-def-2',
      type: 'definition',
      title: 'Anvendelser',
      content: `**Etanol (alkohol):**
- Drikkevarer (vin, øl, sprit)
- Desinfeksjonsmiddel
- Drivstoff (bioetanol)
- Løsemiddel

**Eddiksyre:**
- Matlaging (eddik)
- Konserveringsmiddel
- Industrielt løsemiddel

**Metanol:**
- Industrielt løsemiddel
- Drivstoff
- ⚠️ Giftig! Kan ikke drikkes

**Estere:**
- Parfyme og aromastoffer
- Løsemidler (neglelakkfjerner)
- Plast (polyestere)`,
    },
    {
      id: 'nat-vg1-4-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identifiser den funksjonelle gruppen og navngi stoffklassen:\na) CH₃CH₂OH\nb) CH₃COOH\nc) CH₃NH₂',
        subTasks: [
          { label: 'a', task: 'CH₃CH₂OH', solution: 'Hydroksylgruppe (-OH), alkohol (etanol)' },
          { label: 'b', task: 'CH₃COOH', solution: 'Karboksylgruppe (-COOH), karboksylsyre (eddiksyre)' },
          { label: 'c', task: 'CH₃NH₂', solution: 'Amingruppe (-NH₂), amin (metylamin)' },
        ],
        solution: 'Funksjonelle grupper bestemmer stoffets egenskaper og reaktivitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_4_8: TextbookChapter = {
  id: 'nat-vg1-4-8',
  courseId: 'nat-vg1',
  chapterNumber: '4.8',
  title: 'Karbonets kretsløp',
  description: 'Forstå karbonets kretsløp og betydning for livet og klimaet.',
  estimatedMinutes: 50,
  competenceGoals: ['gjøre rede for karbonets betydning for livet'],
  content: [
    {
      id: 'nat-vg1-4-8-intro',
      type: 'text',
      content: `## Karbonets kretsløp

Karbon er grunnlaget for alt liv. Det sirkulerer mellom atmosfære, hav, levende organismer og jordskorpen i et evigvarende kretsløp.`,
    },
    {
      id: 'nat-vg1-4-8-def-1',
      type: 'definition',
      title: 'Prosesser i karbonkretsløpet',
      content: `**Fotosyntese (binder CO₂):**
6CO₂ + 6H₂O + lys → C₆H₁₂O₆ + 6O₂
Planter tar opp CO₂ og lager sukker.

**Respirasjon (frigjør CO₂):**
C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energi
Alle levende organismer frigjør CO₂.

**Forbrenning:**
Fossilt brensel + O₂ → CO₂ + H₂O + energi

**Oppløsning i hav:**
CO₂ løser seg i havvann og danner karbonater.

**Langsiktig lagring:**
- Fossilt brensel (kull, olje, gass)
- Kalkstein (CaCO₃)
- Permafrost`,
    },
    {
      id: 'nat-vg1-4-8-def-2',
      type: 'definition',
      title: 'Menneskelig påvirkning',
      content: `**Ubalanse i karbonkretsløpet:**

Før den industrielle revolusjon var kretsløpet i balanse. Nå tilfører vi ca. 40 milliarder tonn CO₂ årlig ved:
- Forbrenning av fossilt brensel
- Avskoging
- Sementproduksjon

**Konsekvenser:**
- Økt CO₂ i atmosfæren (fra 280 til 420 ppm)
- Forsterket drivhuseffekt
- Havforsuring (lavere pH i havet)

**Naturlige karbonsluk:**
- Skog og vegetasjon
- Hav (tar opp ca. 25% av utslippene)
- Jord og myrer`,
    },
    {
      id: 'nat-vg1-4-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-4-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hvorfor det er problematisk å brenne fossilt brensel, med tanke på karbonkretsløpet.',
        hints: ['Hvor kommer det fossile brenselet fra?', 'Hva skjer med karbonet?'],
        solution: 'Fossilt brensel inneholder karbon som har vært lagret i millioner av år. Når vi brenner det, frigjøres CO₂ til atmosfæren mye raskere enn naturen kan ta det opp igjen. Dette forstyrrer balansen i karbonkretsløpet og fører til økt drivhuseffekt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// Export alle kapitler fra del 2
export const NAT_VG1_CHAPTERS_DEL2 = [
  CHAPTER_NAT_VG1_3_1,
  CHAPTER_NAT_VG1_3_2,
  CHAPTER_NAT_VG1_3_3,
  CHAPTER_NAT_VG1_3_4,
  CHAPTER_NAT_VG1_4_1,
  CHAPTER_NAT_VG1_4_2,
  CHAPTER_NAT_VG1_4_3,
  CHAPTER_NAT_VG1_4_4,
  CHAPTER_NAT_VG1_4_5,
  CHAPTER_NAT_VG1_4_6,
  CHAPTER_NAT_VG1_4_7,
  CHAPTER_NAT_VG1_4_8,
];
