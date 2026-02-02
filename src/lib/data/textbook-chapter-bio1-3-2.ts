/**
 * Biologi 1 - Kapittel 3.2: Fra gen til protein
 *
 * Dekker det sentrale dogmet, transkripsjon, mRNA-prosessering,
 * den genetiske koden og translasjon.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_BIO1_3_2: TextbookChapter = {
  id: 'bio1-3-2',
  courseId: 'biologi-1',
  chapterNumber: '3.2',
  title: 'Fra gen til protein',
  description:
    'Det sentrale dogmet, transkripsjon, mRNA-prosessering og translasjon.',
  estimatedMinutes: 90,
  competenceGoals: [
    'gjore rede for det sentrale dogmet i molekylaerbiologien',
    'forklare transkripsjon og rollen til RNA-polymerase',
    'beskrive mRNA-prosessering hos eukaryoter, inkludert spleising',
    'forklare den genetiske koden og kodon-tabellen',
    'beskrive translasjon trinn for trinn',
    'gjore rede for tRNA-struktur og funksjon',
    'forklare hvordan mutasjoner kan pavirke proteinsyntesen',
    'droefte sammenhengen mellom gen og polypeptid',
  ],

  // ---------------------------------------------------------------------------
  // INNHOLD
  // ---------------------------------------------------------------------------
  content: [
    // =========================================================================
    // 1. Introduksjon: Det sentrale dogmet
    // =========================================================================
    {
      id: 'bio1-3-2-intro',
      type: 'text',
      title: 'Det sentrale dogmet',
      content: `# Fra gen til protein

Alle levende organismer bruker den samme grunnleggende strategien for a omsette genetisk informasjon til funksjonelle molekyler. Francis Crick formulerte i 1958 det som kalles **det sentrale dogmet** i molekylaerbiologien:

$$\\text{DNA} \\xrightarrow{\\text{transkripsjon}} \\text{RNA} \\xrightarrow{\\text{translasjon}} \\text{Protein}$$

Informasjonen flyter i to hovedtrinn:

1. **Transkripsjon** - DNA-sekvensen kopieres over til et RNA-molekyl (budbringer-RNA, mRNA).
2. **Translasjon** - mRNA-sekvensen leses av ribosomene, som setter sammen aminosyrer til en polypeptidkjede (protein).

Hos **eukaryoter** skjer transkripsjon i cellekjernen, mens translasjon skjer i cytoplasmaet (pa ribosomene). Hos **prokaryoter** (som mangler cellekjerne) kan begge prosessene skje samtidig i cytoplasmaet.

I tillegg finnes det noen unntak fra det sentrale dogmet:
- **Revers transkripsjon**: Noen virus (retrovirus, f.eks. HIV) kan kopiere RNA tilbake til DNA ved hjelp av enzymet revers transkriptase.
- **RNA-replikasjon**: Noen RNA-virus kan kopiere RNA direkte fra RNA.

Disse unntakene endrer ikke hovedregelen: i alle celler gar informasjonsflyten fra DNA via RNA til protein.`,
    },

    // =========================================================================
    // 2. RNA-typer
    // =========================================================================
    {
      id: 'bio1-3-2-rna-typer',
      type: 'text',
      title: 'Tre viktige RNA-typer',
      content: `# Typer RNA

Cellen bruker flere typer RNA-molekyler i proteinsyntesen. De tre viktigste er:

## 1. Budbringer-RNA (mRNA)
- Baerer den genetiske informasjonen fra DNA i cellekjernen ut til ribosomene i cytoplasmaet.
- Fungerer som en **kopi** (avskrift) av et gen.
- Har en relativt kort levetid - det brytes ned etter at det er lest av ribosomene.
- Sekvensen av nukleotider i mRNA bestemmer rekkefolgjen av aminosyrer i proteinet.

## 2. Transport-RNA (tRNA)
- Smaa RNA-molekyler med en karakteristisk **kloverblad-form** (L-formet i 3D).
- Har to viktige omrader:
  - **Antikodon** (tre nukleotider): Baseparrer med et kodon pa mRNA.
  - **Aminosyre-festepunkt** (3'-enden): Baerer en spesifikk aminosyre.
- Det finnes minst 20 ulike tRNA-molekyler - ett eller flere for hver aminosyre.
- tRNA fungerer som en **tolk** mellom nukleotidspraket (mRNA) og aminosyrespraket (protein).

## 3. Ribosomalt RNA (rRNA)
- Er hovedkomponenten i ribosomene (sammen med ribosomale proteiner).
- Utgjor omtrent **60 %** av ribosomets masse.
- rRNA har **katalytisk aktivitet** - det er rRNA som katalyserer dannelsen av peptidbindinger mellom aminosyrer.
- Ribosomer bestar av en **stor underenhet** og en **liten underenhet**, begge inneholder rRNA.

I tillegg finnes det andre RNA-typer (snRNA, miRNA, siRNA m.fl.) som regulerer genuttrykk, men disse er mindre sentrale for den grunnleggende proteinsyntesen.`,
    },

    // =========================================================================
    // 3. Definisjon: mRNA
    // =========================================================================
    {
      id: 'bio1-3-2-def-mrna',
      type: 'definition',
      title: 'mRNA (budbringer-RNA)',
      content:
        'Budbringer-RNA er et enkelttradet RNA-molekyl som dannes ved transkripsjon av et gen. mRNA baerer den genetiske koden fra DNA i cellekjernen til ribosomene i cytoplasmaet, der informasjonen oversettes til en aminosyresekvens (protein).',
    },

    // =========================================================================
    // 4. Definisjon: tRNA
    // =========================================================================
    {
      id: 'bio1-3-2-def-trna',
      type: 'definition',
      title: 'tRNA (transport-RNA)',
      content:
        'Transport-RNA er et lite RNA-molekyl med kloverblad-form som frakter aminosyrer til ribosomet under translasjon. Hvert tRNA har et antikodon som baseparrer med et spesifikt kodon pa mRNA, og baerer den tilhorende aminosyren i den andre enden.',
    },

    // =========================================================================
    // 5. Definisjon: rRNA
    // =========================================================================
    {
      id: 'bio1-3-2-def-rrna',
      type: 'definition',
      title: 'rRNA (ribosomalt RNA)',
      content:
        'Ribosomalt RNA er den viktigste strukturelle og katalytiske komponenten i ribosomer. rRNA katalyserer dannelsen av peptidbindinger mellom aminosyrer under translasjonen og utgjor omtrent 60 % av ribosomets masse.',
    },

    // =========================================================================
    // 6. DNA vs. RNA
    // =========================================================================
    {
      id: 'bio1-3-2-dna-vs-rna',
      type: 'text',
      title: 'Sammenligning av DNA og RNA',
      content: `# DNA vs. RNA

DNA og RNA er begge nukleinsyrer bygd opp av nukleotider, men de har flere viktige forskjeller:

| Egenskap | DNA | RNA |
|---|---|---|
| **Sukker** | Deoksyribose (mangler en OH-gruppe) | Ribose (har OH-gruppe pa 2'-karbon) |
| **Baser** | A, T, G, C | A, **U**, G, C |
| **Struktur** | Dobbelttrad (dobbeltheliks) | Enkelttrad (kan folde seg) |
| **Stabilitet** | Svart stabil (langtidslagring) | Mindre stabil, brytes ned raskere |
| **Lokalisering** | Cellekjernen (og mitokondrier) | Cellekjernen og cytoplasmaet |
| **Funksjon** | Lagrer genetisk informasjon | Overforer og uttrykker genetisk informasjon |

**Viktige forskjeller a merke seg:**

1. **Uracil (U) erstatter tymin (T)** i RNA. Nar DNA transkriberes til RNA, blir adenin (A) i DNA-tradens matstykke paret med uracil (U) i RNA (ikke tymin).

2. **Enkelttrad vs. dobbelttrad**: RNA er enkelttrad, men kan folde seg pa seg selv og danne lokale dobbelttradsstrukturer. Dette er spesielt viktig for tRNA (kloverblad-formen) og rRNA (katalytisk aktivitet).

3. **Ribose vs. deoksyribose**: OH-gruppen pa 2'-karbonet i ribose gjor RNA mer reaktivt og mindre stabilt enn DNA. Dette er fornuftig: DNA ma vare stabilt for a lagre informasjon, mens RNA trenger a vaere midlertidig.`,
    },

    // =========================================================================
    // 7. Transkripsjon - oversikt
    // =========================================================================
    {
      id: 'bio1-3-2-transkripsjon',
      type: 'text',
      title: 'Transkripsjon',
      content: `# Transkripsjon - fra DNA til mRNA

**Transkripsjon** er prosessen der en DNA-sekvens kopieres over til et mRNA-molekyl. Enzymet **RNA-polymerase** utforer selve kopieringen.

## Malstrengen og den kodende strengen

DNA-dobbeltheliksen bestar av to antiparallelle strenger:

- **Malstrengen (template strand)**: Strengen som RNA-polymerase leser. mRNA-sekvensen blir **komplementar** til malstrengen. Malstrengen leses i retningen 3' til 5'.
- **Kodende streng (coding strand / sense strand)**: Strengen som har **samme sekvens** som mRNA (bortsett fra at T erstattes med U). Kalles ogsa "ikke-malstreng" (non-template strand).

**Eksempel:**

| | Sekvens |
|---|---|
| Kodende streng (5'→3') | ...A T G C G A T T A... |
| Malstreng (3'→5') | ...T A C G C T A A T... |
| mRNA (5'→3') | ...A U G C G A U U A... |

Legg merke til at mRNA-sekvensen er lik den kodende strengen, men med U i stedet for T.

## Viktig a huske:
- RNA-polymerase bygger mRNA i retningen **5' til 3'** (ny nukleotider legges til i 3'-enden).
- RNA-polymerase leser malstrengen i retningen **3' til 5'**.
- Det trengs **ingen primer** for a starte RNA-syntese (til forskjell fra DNA-replikasjon).`,
    },

    // =========================================================================
    // 8. Definisjon: Transkripsjon
    // =========================================================================
    {
      id: 'bio1-3-2-def-transkripsjon',
      type: 'definition',
      title: 'Transkripsjon',
      content:
        'Prosessen der en DNA-sekvens kopieres til et komplementaert mRNA-molekyl ved hjelp av enzymet RNA-polymerase. Transkripsjon skjer i cellekjernen hos eukaryoter og er forste steg i genuttrykk.',
    },

    // =========================================================================
    // 9. Definisjon: Promotor
    // =========================================================================
    {
      id: 'bio1-3-2-def-promotor',
      type: 'definition',
      title: 'Promotor',
      content:
        'En spesifikk DNA-sekvens foran (oppstroms for) et gen, der RNA-polymerase og transkripsjonsfaktorer binder seg for a starte transkripsjonen. Hos eukaryoter inneholder promotoren ofte en TATA-boks (sekvensen TATAAA), som ligger omtrent 25 basepar for transkripsjonsstart.',
    },

    // =========================================================================
    // 10. Transkripsjon - trinnene
    // =========================================================================
    {
      id: 'bio1-3-2-transkripsjon-trinn',
      type: 'text',
      title: 'Transkripsjonens tre faser',
      content: `# Transkripsjonens tre faser

## 1. Initiering

Transkripsjonen starter nar RNA-polymerase binder seg til **promotorregionen** pa DNA-et.

**Hos eukaryoter:**
- **Transkripsjonsfaktorer** (proteiner) binder seg forst til promotoren, spesielt til **TATA-boksen** (en AT-rik sekvens, vanligvis TATAAA).
- TATA-bindende protein (TBP) gjenkjenner TATA-boksen og rekrutterer andre transkripsjonsfaktorer.
- Sammen danner de et **initieringskompleks** som tiltrekker **RNA-polymerase II** (enzymet som transkriberer proteinkodende gener).
- RNA-polymerase II binder til komplekset, og DNA-dobbeltheliksen apnes lokalt (transkripsjonsboble).

**Hos prokaryoter:**
- RNA-polymerase gjenkjenner promotoren direkte ved hjelp av en sigma-faktor (sigma-underenhet).
- Det trengs faerre hjelpefaktorer.

## 2. Elongering

Nar RNA-polymerase har startet, beveger den seg langs **malstrengen** i 3'→5'-retningen og bygger mRNA i 5'→3'-retningen.

- For hver nukleotid i malstrengen legger RNA-polymerase til en **komplementaer ribonukleotid** i mRNA-kjedens 3'-ende.
- Baseparring: A i DNA → U i RNA, T i DNA → A i RNA, G i DNA → C i RNA, C i DNA → G i RNA.
- DNA-et apner seg foran RNA-polymerase og lukker seg bak.
- Hastigheten er omtrent **30-50 nukleotider per sekund** hos eukaryoter (opptil 80 hos prokaryoter).
- Flere RNA-polymeraser kan transkribere det samme genet samtidig, slik at mange mRNA-kopier lages parallelt.

## 3. Terminering

Transkripsjonen stopper nar RNA-polymerase nar et **termineringssignal** i DNA-sekvensen.

**Hos eukaryoter:**
- RNA-polymerase II transkriberer forbi et **polyadenyleringssignal** (sekvensen AAUAAA i mRNA).
- mRNA kuttes ved polyadenyleringssignalet, og en poly-A-hale legges til (se mRNA-prosessering).
- RNA-polymerase fortsetter en stund for den slipper DNA-et.

**Hos prokaryoter:**
- Terminering kan skje ved en **harnalstruktur** (stamme-lokke) i det nye RNA-et, som far RNA-polymerase til a stoppe.
- Alternativt kan rho-proteinet lose RNA-polymerase fra DNA-et (rho-avhengig terminering).`,
    },

    // =========================================================================
    // 11. mRNA-prosessering
    // =========================================================================
    {
      id: 'bio1-3-2-mrna-prosessering',
      type: 'text',
      title: 'mRNA-prosessering hos eukaryoter',
      content: `# mRNA-prosessering

Hos eukaryoter ma det primaere transkriptet (pre-mRNA) gjennom tre viktige modifikasjoner for det kan forlate cellekjernen og brukes i translasjon:

## 1. 5'-kappe (5' cap)

- En **modifisert guanin-nukleotid** (7-metylguanosin) festes til 5'-enden av mRNA.
- Kappen beskyttes mRNA mot nedbrytning av enzymer (nukleaser).
- Kappen er nodvendig for at ribosomet skal gjenkjenne mRNA og starte translasjon.
- Kappen legges til svart tidlig - allerede nar mRNA er omtrent 20-30 nukleotider langt.

## 2. Poly-A-hale (3' polyadenylering)

- En rekke med **100-250 adenin-nukleotider** (poly-A-hale) legges til 3'-enden av mRNA.
- Enzymet **poly-A-polymerase** katalyserer tilleggingen.
- Poly-A-halen beskytter mRNA mot nedbrytning og okes stabiliteten.
- Den er ogsa viktig for eksport av mRNA ut av cellekjernen.
- Over tid forkortes poly-A-halen, og nar den er kort nok, brytes mRNA-et ned.

## 3. Spleising (splicing)

- **Introner** (ikke-kodende sekvenser) klippes bort fra pre-mRNA.
- **Eksoner** (kodende sekvenser) skjotes sammen til et ferdig mRNA.
- Spleisingen utfores av **spleisosomet** - et stort molekylkompleks bestaende av proteiner og smae kjerneRNAer (snRNA/snRNP).
- snRNA-ene gjenkjenner spesifikke sekvenser ved intronerenes grenser (spleiseseter) og katalyserer klippingen.

Resultatet er et **modent mRNA** med 5'-kappe, kodende sekvens (eksoner) og poly-A-hale, klart til a eksporteres fra cellekjernen til cytoplasmaet.`,
    },

    // =========================================================================
    // 12. Definisjon: Spleising
    // =========================================================================
    {
      id: 'bio1-3-2-def-spleising',
      type: 'definition',
      title: 'Spleising',
      content:
        'Prosessen der introner (ikke-kodende sekvenser) fjernes fra pre-mRNA og eksoner (kodende sekvenser) skjotes sammen til et modent mRNA. Spleisingen utfores av spleisosomet, et kompleks av snRNA og proteiner. Spleising er en viktig del av mRNA-prosesseringen hos eukaryoter.',
    },

    // =========================================================================
    // 13. Alternativ spleising
    // =========================================================================
    {
      id: 'bio1-3-2-alternativ-spleising',
      type: 'note',
      title: 'Alternativ spleising - ett gen, mange proteiner',
      content: `Ved **alternativ spleising** kan eksonene fra det samme pre-mRNA kombineres pa ulike mater. Noen eksoner kan hoppes over, eller forskjellige eksoner kan inkluderes avhengig av celletype, utviklingsstadium eller ytre signaler.

**Eksempel:** Et gen med 5 eksoner (E1-E5) kan gi opphav til flere ulike mRNA:
- mRNA variant A: E1 - E2 - E3 - E5 (ekson 4 er hoppet over)
- mRNA variant B: E1 - E3 - E4 - E5 (ekson 2 er hoppet over)
- mRNA variant C: E1 - E2 - E3 - E4 - E5 (alle eksoner inkludert)

Hvert mRNA-variant kan gi et litt forskjellig protein med ulike egenskaper.

**Betydning:** Alternativ spleising forklarer hvordan mennesker kan ha omtrent **20 000 gener** men produsere mer enn **100 000 ulike proteiner**. Det er en viktig mekanisme for a oke proteinmangfoldet uten a oke antall gener.

Over 90 % av menneskegener antas a undergaa alternativ spleising.`,
    },

    // =========================================================================
    // 14. Den genetiske koden
    // =========================================================================
    {
      id: 'bio1-3-2-genetisk-kode',
      type: 'text',
      title: 'Den genetiske koden',
      content: `# Den genetiske koden

Den genetiske koden er reglene for hvordan sekvensen av nukleotider i mRNA oversettes til en sekvens av aminosyrer i et protein.

## Triplettkodon

- Tre pafolgende nukleotider i mRNA utgjor et **kodon**.
- Hvert kodon spesifiserer **en bestemt aminosyre** (eller et stoppsignal).
- Det finnes $4^3 = 64$ mulige kodoner (4 baser i kombinasjoner av 3).

## Oversikt over kodoner

Av de 64 kodonene:
- **61 kodoner** koder for aminosyrer.
- **3 kodoner** er **stoppkodoner**: UAA, UAG, UGA. Disse signaliserer at translasjon skal avsluttes.
- **AUG** er **startkodonet**: Det koder for aminosyren metionin og signaliserer starten pa translasjonen.

## Degenerering (redundans)

Den genetiske koden er **degenerert** (redundant): Flere ulike kodoner kan kode for den **samme** aminosyren.

- **Eksempel**: Leucin kodes av hele 6 kodoner: UUA, UUG, CUU, CUC, CUA, CUG.
- **Eksempel**: Metionin kodes av kun 1 kodon: AUG.
- Ofte er det den **tredje posisjonen** i kodonet (wobble-posisjonen) som varierer uten a endre aminosyren. For eksempel koder GCU, GCC, GCA og GCG alle for alanin - uavhengig av basen i tredje posisjon.

## Universell kode

Den genetiske koden er naer sagt **universell** - den er (nesten) identisk i alle levende organismer, fra bakterier til mennesker. Dette er sterkt bevis for at alt liv har en felles opprinnelse.

Det finnes noen fa **unntak**, f.eks.:
- Mitokondrielt DNA bruker noen kodoner litt annerledes.
- Noen encellete organismer (f.eks. Mycoplasma) har sma avvik.

## Leseramme

Leserammen bestemmer hvordan nukleotidene grupperes i kodoner. Leserammen settes av **startkodonet AUG**. En forskyvning av leserammen med en eller to nukleotider gir helt andre kodoner og dermed et helt annet (og vanligvis ikke-funksjonelt) protein.

**Eksempel pa leserammens betydning:**

Sekvens: ...AUGCCUGAAUUC...

| Leseramme | Kodoner | Aminosyrer |
|---|---|---|
| Ramme 1 | AUG-CCU-GAA-UUC | Met-Pro-Glu-Phe |
| Ramme 2 | A-UGC-CUG-AAU-UC | (forskjovet) |
| Ramme 3 | AU-GCC-UGA-AUU-C | (inneholder stoppkodon UGA) |

Bare leseramme 1 (som starter med AUG) gir en meningsfull aminosyresekvens.`,
    },

    // =========================================================================
    // 15. Definisjon: Kodon og Antikodon
    // =========================================================================
    {
      id: 'bio1-3-2-def-kodon',
      type: 'definition',
      title: 'Kodon',
      content:
        'Et kodon er en sekvens av tre pafolgende nukleotider i mRNA som spesifiserer en bestemt aminosyre (eller et stoppsignal). Det finnes 64 kodoner: 61 som koder for aminosyrer og 3 stoppkodoner (UAA, UAG, UGA). Startkodonet AUG koder for metionin.',
    },

    {
      id: 'bio1-3-2-def-antikodon',
      type: 'definition',
      title: 'Antikodon',
      content:
        'Antikodon er en sekvens av tre nukleotider pa tRNA som er komplementaer til et kodon pa mRNA. Under translasjon baseparrer antikodonene med kodonene, slik at riktig aminosyre leveres til den voksende polypeptidkjeden. Eksempel: Kodonet AUG parrer med antikodonets UAC.',
    },

    // =========================================================================
    // 16. Eksempel: Fra DNA til aminosyresekvens
    // =========================================================================
    {
      id: 'bio1-3-2-ex-dna-til-protein',
      type: 'example',
      title: 'Eksempel: Fra DNA-sekvens til aminosyrer',
      problem:
        'En DNA-malstreng har sekvensen: 3\'-TACTTCAAAGCCACT-5\'. Hva blir mRNA-sekvensen, og hvilke aminosyrer koder den for?',
      solution: `**Trinn 1: Bestem mRNA-sekvensen**

mRNA dannes komplementaert til malstrengen (med U i stedet for T):

| Malstreng (3'→5') | T | A | C | T | T | C | A | A | A | G | C | C | A | C | T |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| mRNA (5'→3') | A | U | G | A | A | G | U | U | U | C | G | G | U | G | A |

**mRNA-sekvens: 5'-AUGAAGUUUCGGUGA-3'**

**Trinn 2: Del inn i kodoner**

AUG - AAG - UUU - CGG - UGA

**Trinn 3: Slaa opp aminosyrer i kodontabellen**

| Kodon | Aminosyre |
|---|---|
| AUG | Metionin (startkodon) |
| AAG | Lysin |
| UUU | Fenylalanin |
| CGG | Arginin |
| UGA | Stoppkodon |

**Aminosyresekvens: Met - Lys - Phe - Arg**

Polypeptidet bestar av 4 aminosyrer. Stoppkodonet UGA signaliserer at translasjonen skal stoppe.`,
    },

    // =========================================================================
    // 17. Eksempel: Lese kodontabellen
    // =========================================================================
    {
      id: 'bio1-3-2-ex-kodontabell',
      type: 'example',
      title: 'Eksempel: Lese en kodontabell',
      problem:
        'Bruk kodontabellen til a finne aminosyren som kodes av kodonet GCA. Finn ogsa alle kodonene som koder for aminosyren serin (Ser).',
      solution: `**Del A: Finne aminosyren for GCA**

For a lese kodontabellen:
1. Forste bokstav (G) - finn raden for G.
2. Andre bokstav (C) - finn kolonnen for C.
3. Tredje bokstav (A) - finn underraden for A.

**GCA = Alanin (Ala)**

Legg merke til at GCU, GCC, GCA og GCG alle koder for alanin - et eksempel pa kodens degenerering.

**Del B: Alle kodoner for serin**

Serin (Ser) kodes av hele 6 kodoner:
- **UCU**, **UCC**, **UCA**, **UCG** (alle starter med UC)
- **AGU**, **AGC** (starter med AG)

Dette illustrerer at den genetiske koden er degenerert: Flere kodoner koder for samme aminosyre, spesielt i den tredje posisjonen (wobble-posisjonen).`,
    },

    // =========================================================================
    // 18. Translasjon - ribosomstruktur og tRNA
    // =========================================================================
    {
      id: 'bio1-3-2-translasjon-intro',
      type: 'text',
      title: 'Translasjon - proteinbygging',
      content: `# Translasjon - fra mRNA til protein

**Translasjon** er prosessen der nukleotidsekvensen i mRNA oversettes til en aminosyresekvens i et polypeptid. Translasjonen skjer pa **ribosomene** i cytoplasmaet.

## Ribosomets oppbygging

Ribosomet bestar av to underenheter:

- **Liten underenhet**: Binder mRNA og sikrer korrekt avlesning av kodoner. Hos eukaryoter er dette 40S-underenheten.
- **Stor underenhet**: Katalyserer dannelsen av peptidbindinger mellom aminosyrer. Hos eukaryoter er dette 60S-underenheten. Tilsammen danner de et 80S-ribosom (hos prokaryoter: 30S + 50S = 70S).

Ribosomet har tre viktige **bindingsseter** for tRNA:

| Sete | Navn | Funksjon |
|---|---|---|
| **A-setet** | Aminoacyl-setet | Her ankommer nytt tRNA med sin aminosyre |
| **P-setet** | Peptidyl-setet | Her sitter tRNA-et som baerer den voksende polypeptidkjeden |
| **E-setet** | Exit-setet | Her forlater tomt tRNA ribosomet etter a ha levert aminosyren |

## tRNA-strukturen i detalj

Hvert tRNA-molekyl har:
- **Antikodon-lokke**: Tre nukleotider som baseparrer med kodonet i mRNA (i A-setet).
- **Akseptorarm (3'-CCA-ende)**: Aminosyren er festet til 3'-enden (adenin-nukleotidet i CCA-sekvensen).
- **D-lokke** og **T-lokke**: Bidrar til tRNA-ets 3D-struktur (L-formet).

## Aminoacyl-tRNA-syntetase

For at tRNA skal baere riktig aminosyre, ma det "lades opp" av et spesifikt enzym: **aminoacyl-tRNA-syntetase**.

- Det finnes **minst 20 ulike** aminoacyl-tRNA-syntetaser - en for hver aminosyre.
- Enzymet gjenkjenner **bade** aminosyren og det riktige tRNA-et.
- Reaksjonen bruker **ATP** som energikilde.
- Prosessen kalles **aminoacylering** eller "lading" av tRNA.

Denne kobling mellom riktig aminosyre og riktig tRNA er helt avgjorende for noyaktigheten i translasjonen. Aminoacyl-tRNA-syntetasene er sa noye at feilraten er omtrent **1 per 10 000**.`,
    },

    // =========================================================================
    // 19. Definisjon: Translasjon
    // =========================================================================
    {
      id: 'bio1-3-2-def-translasjon',
      type: 'definition',
      title: 'Translasjon',
      content:
        'Prosessen der nukleotidsekvensen i mRNA oversettes (translateres) til en aminosyresekvens i et polypeptid. Translasjon skjer pa ribosomene i cytoplasmaet og innebar at tRNA-molekyler leverer aminosyrer i rekkefolgje bestemt av kodonene i mRNA.',
    },

    // =========================================================================
    // 20. Translasjon - trinnene
    // =========================================================================
    {
      id: 'bio1-3-2-translasjon-trinn',
      type: 'text',
      title: 'Translasjonens tre faser',
      content: `# Translasjonens tre faser

## 1. Initiering

Translasjonen starter ved at de nodvendige komponentene samles pa mRNA:

1. Den **lille underenheten** av ribosomet binder til mRNA naer 5'-kappen.
2. Den lille underenheten skanner langs mRNA-et i 5'→3'-retning til den finner **startkodonet AUG**.
3. Et spesielt **initiator-tRNA** (som baerer metionin) binder til AUG-kodonet i P-setet. Antikodonet pa dette tRNA-et er UAC.
4. Den **store underenheten** binder seg til komplekset. Ribosomet er na komplett og klart til elongering.
5. Prosessen krever energi i form av **GTP** (guanosintrifosfat) og hjelp fra initieringsfaktorer.

**Resultatet**: Ribosomet er sammensatt pa mRNA med initiator-tRNA i P-setet. A-setet er ledig og klart for neste tRNA.

## 2. Elongering

Elongeringen er en syklisk prosess der aminosyrer legges til polypeptidkjeden, en om gangen. Hvert steg bestar av tre trinn:

**a) Kodongjenkjenning (A-setet)**
- Et aminoacyl-tRNA (ladet tRNA med aminosyre) ankommer A-setet.
- Antikodonet pa tRNA-et baseparrer med kodonet i mRNA.
- Kun tRNA med riktig antikodon binder stabilt. Feil tRNA avvises.
- Denne prosessen krever GTP-energi.

**b) Peptidbinding**
- rRNA i den store underenheten (peptidyltransferase-aktivitet) katalyserer dannelsen av en **peptidbinding** mellom aminosyren i A-setet og den voksende polypeptidkjeden i P-setet.
- Polypeptidkjeden overfores fra tRNA i P-setet til aminosyren pa tRNA i A-setet.

**c) Translokasjon**
- Ribosomet forskyves **ett kodon** (3 nukleotider) langs mRNA i 5'→3'-retningen.
- tRNA-et som var i P-setet (na tomt) flyttes til **E-setet** og forlater ribosomet.
- tRNA-et som var i A-setet (med polypeptidkjeden) flyttes til **P-setet**.
- A-setet er na ledig for neste ladet tRNA.
- Translokasjon krever GTP-energi og elongeringsfaktor EF-G.

Denne syklusen gjentas for hvert kodon, og legger til omtrent **15-20 aminosyrer per sekund** hos eukaryoter.

## 3. Terminering

Translasjonen avsluttes nar ribosomet nar et **stoppkodon** (UAA, UAG eller UGA) i mRNA:

1. Ingen tRNA har antikodon som passer til stoppkodoner.
2. I stedet binder en **frisettingsfaktor** (release factor) til stoppkodonet i A-setet.
3. Frisettingsfaktoren utloser hydrolyse (spaltning med vann) av bindingen mellom polypeptidet og tRNA i P-setet.
4. Det ferdige **polypeptidet frisettes** fra ribosomet.
5. Ribosomet dissosierer (deler seg) i sine to underenheter, som kan gjenbrukes.
6. mRNA-et frisettes og kan translateres pa nytt eller brytes ned.`,
    },

    // =========================================================================
    // 21. Polyribosomer og post-translasjon
    // =========================================================================
    {
      id: 'bio1-3-2-polyribosomer',
      type: 'text',
      title: 'Polyribosomer og posttranslasjonelle modifikasjoner',
      content: `# Polyribosomer

Et enkelt mRNA-molekyl kan translateres av **flere ribosomer samtidig**. Nar flere ribosomer folger etter hverandre langs det samme mRNA-et, dannes en struktur som kalles et **polyribosom** (eller polysom).

- Hvert ribosom i polyribosomet produserer sin egen kopi av polypeptidet.
- Ribosomet naermest 5'-enden har nettopp startet (kort polypeptid), mens ribosomet naermest 3'-enden nesten er ferdig (langt polypeptid).
- Polyribosomer gjor at cellen kan produsere mange kopier av det samme proteinet raskt og effektivt.

# Posttranslasjonelle modifikasjoner

Det ferdige polypeptidet er ikke alltid et ferdig, funksjonelt protein. Mange proteiner ma gjennom **posttranslasjonelle modifikasjoner** for de er aktive:

## 1. Folding
- Polypeptidkjeden ma folde seg til en bestemt **tredimensjonal struktur** for a vaere funksjonell.
- **Chaperoner** (hjelpeproteiner) bistaar med korrekt folding.
- Feilfoldede proteiner brytes ned av proteasomet.

## 2. Klipping (proteolytisk prosessering)
- Noen proteiner lages forst som inaktive forlopere (**proproteiner**) og aktiveres ved at deler klippes bort.
- Eksempel: Insulin lages forst som proinsulin, der en del (C-peptidet) klippes bort for a danne aktivt insulin.

## 3. Kjemiske modifikasjoner
- **Fosforylering**: Tillegging av fosfatgrupper (regulerer proteinaktivitet).
- **Glykosylering**: Tillegging av sukkerkjeder (viktig for celloverflateproteiner).
- **Acetylering**: Tillegging av acetylgrupper (viktig for histoner og genregulering).
- **Disulfidbindinger**: Binding mellom cysteinrester som stabiliserer 3D-strukturen.

## 4. Dirigering (sorting)
- Proteiner ma sendes til riktig sted i cellen (cellekjernen, mitokondrier, cellemembranen, utsiden av cellen osv.).
- **Signalsekvenser** i proteinets aminosyresekvens fungerer som "adresselapper" som dirigerer proteinet til riktig destinasjon.`,
    },

    // =========================================================================
    // 22. Oppsummering: Ett gen - ett polypeptid
    // =========================================================================
    {
      id: 'bio1-3-2-oppsummering',
      type: 'text',
      title: 'Oppsummering: Ett gen - ett polypeptid',
      content: `# Fra "ett gen - ett enzym" til "ett gen - ett polypeptid"

Opprinnelig foreslo Beadle og Tatum (1941) hypotesen **"ett gen - ett enzym"**: Hvert gen koder for ett enzym. Denne hypotesen ble senere revidert:

1. **Ett gen - ett protein**: Ikke alle proteiner er enzymer. Gener koder ogsa for strukturproteiner, transportproteiner, hormoner osv.

2. **Ett gen - ett polypeptid**: Mange proteiner bestar av flere polypeptidkjeder (underenheter), der hver kjede kodes av sitt eget gen. Eksempel: Hemoglobin bestar av fire polypeptidkjeder - to alfa-kjeder og to beta-kjeder, kodet av to ulike gener.

3. **I dag vet vi**: Takket vaere alternativ spleising og posttranslasjonelle modifikasjoner kan ett gen gi opphav til **flere ulike polypeptider**. Den opprinnelige "regelen" er derfor en forenkling.

## Sammendrag av veien fra gen til protein

| Steg | Prosess | Sted | Resultat |
|---|---|---|---|
| 1 | Transkripsjon | Cellekjerne | Pre-mRNA |
| 2 | mRNA-prosessering | Cellekjerne | Modent mRNA (med kappe, poly-A, spleiset) |
| 3 | Eksport | Kjernepore | mRNA i cytoplasma |
| 4 | Translasjon | Ribosom (cytoplasma) | Polypeptidkjede |
| 5 | Posttranslasjonelle modifikasjoner | ER, Golgi, cytoplasma | Funksjonelt protein |`,
    },

    // =========================================================================
    // 23. Eksempel: Mutasjonens effekt
    // =========================================================================
    {
      id: 'bio1-3-2-ex-mutasjon',
      type: 'example',
      title: 'Eksempel: Effekten av en punktmutasjon',
      problem:
        'Den normale DNA-malstrengen for en del av et gen er: 3\'-TACCAAGCCACT-5\'. Hva skjer dersom den tredje basen (C) endres til A? Sammenlign det normale og det muterte proteinet.',
      solution: `**Normalt:**

| Malstreng (3'→5') | TAC - CAA - GCC - ACT |
|---|---|
| mRNA (5'→3') | AUG - GUU - CGG - UGA |
| Aminosyrer | Met - Val - Arg - (Stopp) |

**Mutert (C → A i posisjon 3):**

Malstreng endres fra TAC til TA**A** i forste kodon:

| Malstreng (3'→5') | TA**A** - CAA - GCC - ACT |
|---|---|
| mRNA (5'→3') | AU**U** - GUU - CGG - UGA |
| Aminosyrer | **Ile** - Val - Arg - (Stopp) |

**Konsekvens:**
- Startkodonet AUG er endret til AUU. Dette betyr at ribosomet **ikke gjenkjenner** dette som et startkodon.
- Translasjonen starter ikke pa dette stedet. Ribosomet vil skanne videre langs mRNA til det finner et AUG.
- Hvis det ikke finnes et annet AUG i riktig leseramme, produseres **ikke noe protein** fra dette genet.
- Tap av startkodonet kan ha alvorlige konsekvenser dersom proteinet er viktig for cellen.

**Andre typer punktmutasjoner:**
- **Stille mutasjon**: Kodonet endres, men koder fortsatt for samme aminosyre (p.g.a. degenerering).
- **Missense-mutasjon**: Kodonet koder for en annen aminosyre (kan vaere skadelig eller uskadelig).
- **Nonsense-mutasjon**: Kodonet endres til et stoppkodon, slik at proteinet forkortes.`,
    },

    // =========================================================================
    // 24. Advarsel om leserammemutasjoner
    // =========================================================================
    {
      id: 'bio1-3-2-warning-frameshift',
      type: 'warning',
      title: 'Leserammemutasjoner (frameshift)',
      content: `**Insersjon** (innsetting av ekstra nukleotider) eller **delesjon** (fjerning av nukleotider) som ikke er et multiplum av tre, forskyver leserammen for alle kodoner nedstroms for mutasjonen.

Eksempel: Normal mRNA-sekvens: AUG-GCU-UAC-GAA → Met-Ala-Tyr-Glu

Innsetting av en ekstra U etter forste kodon:
AUG-**U**GC-UUA-CGA-A... → Met-**Cys**-**Leu**-**Arg**-...

Alle aminosyrer etter innsettingspunktet er endret. Proteinet blir helt forskjellig og nesten alltid ikke-funksjonelt. Leserammemutasjoner er derfor blant de mest skadelige typene mutasjoner.`,
    },
  ],

  // ---------------------------------------------------------------------------
  // OPPGAVER
  // ---------------------------------------------------------------------------
  exercises: [
    // -------------------------------------------------------------------------
    // Oppgave 1: Flervalgaer - Det sentrale dogmet
    // -------------------------------------------------------------------------
    {
      id: 'bio1-3-2-ex-1',
      number: '3.2.1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva beskriver det sentrale dogmet i molekylaerbiologien?',
      options: [
        {
          id: 'a',
          text: 'Informasjonsflyten DNA → RNA → Protein',
          isCorrect: true,
        },
        {
          id: 'b',
          text: 'Informasjonsflyten Protein → RNA → DNA',
          isCorrect: false,
        },
        {
          id: 'c',
          text: 'Informasjonsflyten RNA → DNA → Protein',
          isCorrect: false,
        },
        {
          id: 'd',
          text: 'Informasjonsflyten DNA → Protein → RNA',
          isCorrect: false,
        },
      ],
      solution:
        'Det sentrale dogmet sier at genetisk informasjon flyter fra DNA til RNA (transkripsjon) og deretter fra RNA til protein (translasjon). Denne retningen gjelder i alle celler, selv om det finnes unntak som revers transkripsjon hos retrovirus.',
      topic: 'Det sentrale dogmet',
    },

    // -------------------------------------------------------------------------
    // Oppgave 2: Flervalg - RNA-typer
    // -------------------------------------------------------------------------
    {
      id: 'bio1-3-2-ex-2',
      number: '3.2.2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken type RNA frakter aminosyrer til ribosomet under translasjon?',
      options: [
        { id: 'a', text: 'mRNA (budbringer-RNA)', isCorrect: false },
        { id: 'b', text: 'tRNA (transport-RNA)', isCorrect: true },
        { id: 'c', text: 'rRNA (ribosomalt RNA)', isCorrect: false },
        { id: 'd', text: 'snRNA (lite kjerneRNA)', isCorrect: false },
      ],
      solution:
        'tRNA (transport-RNA) er ansvarlig for a frakte aminosyrer til ribosomet. Hvert tRNA har et antikodon som passer til et bestemt kodon pa mRNA, og baerer den tilhorende aminosyren i den andre enden.',
      topic: 'RNA-typer',
    },

    // -------------------------------------------------------------------------
    // Oppgave 3: Flervalg - DNA vs. RNA
    // -------------------------------------------------------------------------
    {
      id: 'bio1-3-2-ex-3',
      number: '3.2.3',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken base finnes i RNA men ikke i DNA?',
      options: [
        { id: 'a', text: 'Adenin (A)', isCorrect: false },
        { id: 'b', text: 'Guanin (G)', isCorrect: false },
        { id: 'c', text: 'Uracil (U)', isCorrect: true },
        { id: 'd', text: 'Cytosin (C)', isCorrect: false },
      ],
      solution:
        'Uracil (U) finnes i RNA og erstatter tymin (T) som finnes i DNA. I RNA parrer adenin (A) med uracil (U), mens det i DNA parrer med tymin (T). Guanin (G), cytosin (C) og adenin (A) finnes i bade DNA og RNA.',
      topic: 'DNA vs. RNA',
    },

    // -------------------------------------------------------------------------
    // Oppgave 4: Flervalg - Transkripsjon
    // -------------------------------------------------------------------------
    {
      id: 'bio1-3-2-ex-4',
      number: '3.2.4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket enzym utforer transkripsjonen?',
      options: [
        { id: 'a', text: 'DNA-polymerase', isCorrect: false },
        { id: 'b', text: 'RNA-polymerase', isCorrect: true },
        { id: 'c', text: 'Helikase', isCorrect: false },
        { id: 'd', text: 'Aminoacyl-tRNA-syntetase', isCorrect: false },
      ],
      solution:
        'RNA-polymerase er enzymet som utforer transkripsjonen. Det binder seg til promotorregionen pa DNA-et, apner dobbeltheliksen og bygger et mRNA-molekyl komplementaert til malstrengen. Hos eukaryoter er det RNA-polymerase II som transkriberer proteinkodende gener.',
      topic: 'Transkripsjon',
    },

    // -------------------------------------------------------------------------
    // Oppgave 5: Flervalg - Stoppkodoner
    // -------------------------------------------------------------------------
    {
      id: 'bio1-3-2-ex-5',
      number: '3.2.5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilke av folgende er stoppkodoner?',
      options: [
        { id: 'a', text: 'UAA, UAG, UGA', isCorrect: true },
        { id: 'b', text: 'AUG, UAA, UGA', isCorrect: false },
        { id: 'c', text: 'AUG, AGU, GUA', isCorrect: false },
        { id: 'd', text: 'UUU, CCC, AAA', isCorrect: false },
      ],
      solution:
        'De tre stoppkodonene er UAA, UAG og UGA. Disse kodonene koder ikke for noen aminosyre. I stedet signaliserer de at translasjonen skal avsluttes. Frisettingsfaktorer gjenkjenner stoppkodonene og utloser frisettingen av det ferdige polypeptidet.',
      topic: 'Den genetiske koden',
    },

    // -------------------------------------------------------------------------
    // Oppgave 6: Klassisk - Transkripsjon
    // -------------------------------------------------------------------------
    {
      id: 'bio1-3-2-ex-6',
      number: '3.2.6',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv de tre fasene i transkripsjonen (initiering, elongering og terminering). Forklar hva som skjer i hver fase og nevn viktige molekyler som deltar.',
      hints: [
        'Hva maa skje for RNA-polymerase kan begynne aa lage mRNA?',
        'I hvilken retning bygger RNA-polymerase mRNA?',
        'Hvordan vet RNA-polymerase at den skal stoppe?',
      ],
      solution: `**Initiering:**
- Transkripsjonsfaktorer binder seg til promotorregionen pa DNA-et (hos eukaryoter til TATA-boksen).
- RNA-polymerase (type II hos eukaryoter) rekrutteres til promotorkomplekset.
- DNA-dobbeltheliksen apnes lokalt.

**Elongering:**
- RNA-polymerase beveger seg langs malstrengen i 3'→5'-retning.
- Den bygger mRNA i 5'→3'-retning ved a legge til komplementaere ribonukleotider.
- DNA apner seg foran og lukker seg bak RNA-polymerase.

**Terminering:**
- RNA-polymerase nar et termineringssignal (hos eukaryoter: polyadenyleringssignal AAUAAA).
- mRNA frisettes.
- RNA-polymerase slipper DNA-et.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
      topic: 'Transkripsjon',
    },

    // -------------------------------------------------------------------------
    // Oppgave 7: Klassisk - mRNA-prosessering
    // -------------------------------------------------------------------------
    {
      id: 'bio1-3-2-ex-7',
      number: '3.2.7',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar de tre typene mRNA-prosessering som skjer hos eukaryoter for mRNA kan eksporteres fra cellekjernen. Hvorfor er disse modifikasjonene nodvendige?',
      hints: [
        'Hva skjer med 5-enden og 3-enden av mRNA?',
        'Hva er introner og eksoner?',
        'Hva er funksjonen til spleiseosomet?',
      ],
      solution: `**1. 5'-kappe:**
- En modifisert guanin (7-metylguanosin) festes til 5'-enden.
- Beskytter mRNA mot nedbrytning og er nodvendig for ribosomal gjenkjenning.

**2. Poly-A-hale:**
- 100-250 adenin-nukleotider legges til 3'-enden av enzymet poly-A-polymerase.
- Oker mRNA-stabiliteten og er viktig for eksport fra kjernen.

**3. Spleising:**
- Introner (ikke-kodende sekvenser) fjernes, og eksoner (kodende sekvenser) skjotes sammen.
- Utfores av spleisosomet (snRNA + proteiner).
- Nodvendig fordi eukaryote gener inneholder introner som ikke koder for protein.

**Hvorfor nodvendig:** Uten prosessering ville mRNA vaere ustabilt, ikke gjenkjennes av ribosomene, og inneholde introner som ville gi et feil protein.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
      topic: 'mRNA-prosessering',
    },

    // -------------------------------------------------------------------------
    // Oppgave 8: Klassisk - Translasjon
    // -------------------------------------------------------------------------
    {
      id: 'bio1-3-2-ex-8',
      number: '3.2.8',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv translasjonsprosessen trinn for trinn. Forklar hva som skjer under initiering, elongering og terminering, og navngi de tre bindingssetene pa ribosomet.',
      hints: [
        'Hva skjer nar den lille underenheten finner startkodonet?',
        'Hva skjer i A-setet, P-setet og E-setet?',
        'Hva utloser avslutningen av translasjonen?',
      ],
      solution: `**Ribosomets tre seter:** A-setet (aminoacyl), P-setet (peptidyl) og E-setet (exit).

**Initiering:**
1. Liten underenhet binder til mRNA naer 5'-kappen.
2. Skanner til startkodonet AUG.
3. Initiator-tRNA (med Met) binder til AUG i P-setet.
4. Stor underenhet binder - ribosomet er komplett.

**Elongering (syklisk):**
1. Kodongjenkjenning: Ladet tRNA med riktig antikodon binder i A-setet.
2. Peptidbinding: rRNA katalyserer peptidbinding mellom aminosyrene.
3. Translokasjon: Ribosomet forskyves ett kodon; tRNA i P → E (ut), tRNA i A → P.

**Terminering:**
1. Stoppkodon (UAA, UAG eller UGA) nar A-setet.
2. Frisettingsfaktor binder i stedet for tRNA.
3. Polypeptidet frisettes, og ribosomet dissosierer.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
      topic: 'Translasjon',
    },

    // -------------------------------------------------------------------------
    // Oppgave 9: Flervalg - Ribosomets seter
    // -------------------------------------------------------------------------
    {
      id: 'bio1-3-2-ex-9',
      number: '3.2.9',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er funksjonen til A-setet pa ribosomet?',
      options: [
        {
          id: 'a',
          text: 'Her forlater tomt tRNA ribosomet',
          isCorrect: false,
        },
        {
          id: 'b',
          text: 'Her sitter tRNA med den voksende polypeptidkjeden',
          isCorrect: false,
        },
        {
          id: 'c',
          text: 'Her ankommer nytt aminoacyl-tRNA med sin aminosyre',
          isCorrect: true,
        },
        {
          id: 'd',
          text: 'Her festes 5-kappen til mRNA',
          isCorrect: false,
        },
      ],
      solution:
        'A-setet (aminoacyl-setet) er stedet pa ribosomet der nytt aminoacyl-tRNA ankommer med sin aminosyre. Antikodonet pa tRNA-et ma matche kodonet i mRNA for at tRNA-et skal aksepteres. P-setet holder tRNA med polypeptidkjeden, og E-setet er der tomme tRNA forlater ribosomet.',
      topic: 'Translasjon',
    },

    // -------------------------------------------------------------------------
    // Oppgave 10: Klassisk - DNA til protein
    // -------------------------------------------------------------------------
    {
      id: 'bio1-3-2-ex-10',
      number: '3.2.10',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En DNA-malstreng har folgende sekvens: 3\'-TACGCAAAGTTAACT-5\'. a) Bestem mRNA-sekvensen. b) Del mRNA-sekvensen inn i kodoner. c) Bruk kodontabellen til a bestemme aminosyresekvensen. (Kodon-hjelp: AUG=Met, CGU=Arg, UUU=Phe, AAU=Asn, UGA=Stopp)',
      hints: [
        'Husk: mRNA er komplementaer til malstrengen, med U i stedet for T',
        'Start med aa dele inn i grupper paa tre nukleotider fra AUG',
        'Stoppkodonet avslutter translasjonen',
      ],
      solution: `**a) mRNA-sekvens:**
Malstrengen leses 3'→5', og mRNA bygges 5'→3' med komplementaere baser (A→U, T→A, G→C, C→G):

Malstreng: 3'-TAC GCA AAG TTA ACT-5'
mRNA:      5'-AUG CGU UUC AAU UGA-3'

**b) Kodoner:**
AUG - CGU - UUC - AAU - UGA

**c) Aminosyresekvens:**
| Kodon | Aminosyre |
|---|---|
| AUG | Metionin (Start) |
| CGU | Arginin |
| UUC | Fenylalanin |
| AAU | Asparagin |
| UGA | Stopp |

**Aminosyresekvens: Met - Arg - Phe - Asn**

Polypeptidet bestar av 4 aminosyrer.`,
      subTasks: [
        {
          label: 'a',
          task: 'Bestem mRNA-sekvensen fra malstrengen.',
          solution: 'mRNA: 5\'-AUGCGUUUCAAUUGA-3\'',
        },
        {
          label: 'b',
          task: 'Del mRNA-sekvensen inn i kodoner.',
          solution: 'AUG - CGU - UUC - AAU - UGA',
        },
        {
          label: 'c',
          task: 'Bruk kodontabellen til a bestemme aminosyresekvensen.',
          solution: 'Met - Arg - Phe - Asn (stoppkodon UGA avslutter translasjonen)',
        },
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
      topic: 'Genetisk kode',
    },

    // -------------------------------------------------------------------------
    // Oppgave 11: Klassisk - Alternativ spleising
    // -------------------------------------------------------------------------
    {
      id: 'bio1-3-2-ex-11',
      number: '3.2.11',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hva alternativ spleising er, og hvorfor det er viktig. Hvordan kan mennesker ha ca. 20 000 gener men produsere mer enn 100 000 ulike proteiner?',
      hints: [
        'Hva skjer med eksoner under spleisingen?',
        'Kan forskjellige celletyper spleise det samme pre-mRNA pa ulike mater?',
        'Tenk paa mangfoldet av proteiner dette kan gi',
      ],
      solution: `**Alternativ spleising** er en prosess der eksonene fra det samme pre-mRNA kan kombineres pa ulike mater. Under spleising fjernes introner, men hvilke eksoner som inkluderes kan variere.

**Eksempel:**
Et gen med 4 eksoner (E1-E4) kan gi:
- Variant A: E1-E2-E3-E4 (alle eksoner)
- Variant B: E1-E2-E4 (ekson 3 hoppet over)
- Variant C: E1-E3-E4 (ekson 2 hoppet over)

Hvert mRNA-variant koder for et litt forskjellig protein.

**Betydning:**
- Alternativ spleising oker proteinmangfoldet enormt.
- Med 20 000 gener kan cellen produsere over 100 000 ulike proteiner.
- Ulike celletyper kan bruke de samme genene til a lage forskjellige proteinvarianter tilpasset sine behov.
- Over 90 % av menneskegener undergaar alternativ spleising.
- Dette er en viktig mekanisme for a regulere genuttrykk og tilpasse cellerespons.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
      topic: 'mRNA-prosessering',
    },

    // -------------------------------------------------------------------------
    // Oppgave 12: Flervalg - Aminoacyl-tRNA-syntetase
    // -------------------------------------------------------------------------
    {
      id: 'bio1-3-2-ex-12',
      number: '3.2.12',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er funksjonen til aminoacyl-tRNA-syntetase?',
      options: [
        {
          id: 'a',
          text: 'Bygger mRNA fra DNA-malstrengen',
          isCorrect: false,
        },
        {
          id: 'b',
          text: 'Kobler riktig aminosyre til riktig tRNA-molekyl',
          isCorrect: true,
        },
        {
          id: 'c',
          text: 'Fjerner introner fra pre-mRNA',
          isCorrect: false,
        },
        {
          id: 'd',
          text: 'Katalyserer peptidbindinger mellom aminosyrer',
          isCorrect: false,
        },
      ],
      solution:
        'Aminoacyl-tRNA-syntetase er enzymet som kobler riktig aminosyre til riktig tRNA ("lading" av tRNA). Det finnes minst 20 ulike aminoacyl-tRNA-syntetaser, en for hver aminosyre. Enzymet gjenkjenner bade aminosyren og tRNA-et og bruker ATP som energikilde. Noyaktigheten til dette enzymet er avgjorende for korrekt translasjon.',
      topic: 'Translasjon',
    },

    // -------------------------------------------------------------------------
    // Oppgave 13: Klassisk - Mutasjoner og proteinsyntese
    // -------------------------------------------------------------------------
    {
      id: 'bio1-3-2-ex-13',
      number: '3.2.13',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar forskjellen mellom en stille mutasjon, en missense-mutasjon, en nonsense-mutasjon og en leserammemutasjon (frameshift). Hvilken type er vanligvis mest skadelig, og hvorfor?',
      hints: [
        'Tenk paa hva som skjer med aminosyresekvensen i hvert tilfelle',
        'Hva betyr det at den genetiske koden er degenerert?',
        'Hva skjer nar leserammen forskyves?',
      ],
      solution: `**Stille mutasjon (silent):**
- En nukleotidendring som IKKE endrer aminosyren.
- Mulig fordi den genetiske koden er degenerert (flere kodoner koder for samme aminosyre).
- Eksempel: GCU → GCC (begge koder for alanin).
- Ingen effekt pa proteinet.

**Missense-mutasjon:**
- En nukleotidendring som gir en ANNEN aminosyre.
- Eksempel: GAG → GUG (glutaminsyre → valin, som ved sigdcelleanemi).
- Effekten varierer: Noen ganger harmlost, andre ganger odeleggende for proteinets funksjon.

**Nonsense-mutasjon:**
- En nukleotidendring som skaper et STOPPKODON.
- Eksempel: UAC → UAA (tyrosin → stoppkodon).
- Gir et forkortet, vanligvis ikke-funksjonelt protein.

**Leserammemutasjon (frameshift):**
- Insersjon eller delesjon av nukleotider (ikke multiplum av 3) som forskyver leserammen.
- Alle kodoner etter mutasjonen blir endret.
- Gir vanligvis et helt annet og ikke-funksjonelt protein.

**Mest skadelig:** Leserammemutasjoner er vanligvis mest skadelige fordi de endrer alle aminosyrer nedstroms for mutasjonen, og proteinet blir helt forandret. Nonsense-mutasjoner er ogsa svart skadelige fordi proteinet forkortes.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
      topic: 'Mutasjoner',
    },

    // -------------------------------------------------------------------------
    // Oppgave 14: Flervalg - Posttranslasjonelle modifikasjoner
    // -------------------------------------------------------------------------
    {
      id: 'bio1-3-2-ex-14',
      number: '3.2.14',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken paastand om posttranslasjonelle modifikasjoner er riktig?',
      options: [
        {
          id: 'a',
          text: 'Alle proteiner er ferdige og funksjonelle med en gang de er translatert',
          isCorrect: false,
        },
        {
          id: 'b',
          text: 'Noen proteiner maa foldes, klippes eller faa tillagt kjemiske grupper for aa bli funksjonelle',
          isCorrect: true,
        },
        {
          id: 'c',
          text: 'Posttranslasjonelle modifikasjoner skjer i cellekjernen',
          isCorrect: false,
        },
        {
          id: 'd',
          text: 'Posttranslasjonelle modifikasjoner endrer mRNA-sekvensen',
          isCorrect: false,
        },
      ],
      solution:
        'Mange proteiner ma gjennom posttranslasjonelle modifikasjoner for a bli funksjonelle. Dette inkluderer folding til riktig 3D-struktur (med hjelp av chaperoner), klipping av deler av polypeptidkjeden (f.eks. proinsulin → insulin), og tillegging av kjemiske grupper (fosforylering, glykosylering, acetylering). Disse modifikasjonene skjer i cytoplasmaet, ER og Golgiapparatet, ikke i cellekjernen.',
      topic: 'Posttranslasjonelle modifikasjoner',
    },

    // -------------------------------------------------------------------------
    // Oppgave 15: Klassisk - Helhetlig forstaelse
    // -------------------------------------------------------------------------
    {
      id: 'bio1-3-2-ex-15',
      number: '3.2.15',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Tegn og beskriv et oversiktskart som viser veien fra et gen i DNA til et ferdig, funksjonelt protein. Inkluder alle hovedtrinnene: transkripsjon, mRNA-prosessering, eksport fra cellekjernen, translasjon og posttranslasjonelle modifikasjoner. Angi hvor i cellen hvert trinn finner sted.',
      hints: [
        'Start med DNA i cellekjernen',
        'Husk alle tre typene mRNA-prosessering',
        'Hva skjer etter at polypeptidkjeden er ferdig?',
        'Hvilke enzymer og molekyler er involvert i hvert trinn?',
      ],
      solution: `**Oversiktskart: Fra gen til funksjonelt protein**

**1. Transkripsjon (cellekjernen)**
- RNA-polymerase II binder til promotoren (TATA-boksen) med hjelp av transkripsjonsfaktorer.
- RNA-polymerase leser malstrengen (3'→5') og bygger pre-mRNA (5'→3').
- Terminering ved polyadenyleringssignal.

**2. mRNA-prosessering (cellekjernen)**
- 5'-kappe: 7-metylguanosin legges til 5'-enden.
- Poly-A-hale: 100-250 adenin-nukleotider legges til 3'-enden.
- Spleising: Introner fjernes, eksoner skjotes sammen av spleisosomet.
- Resultat: Modent mRNA.

**3. Eksport (kjerneporen)**
- Det modne mRNA-et transporteres gjennom kjerneporer til cytoplasmaet.

**4. Translasjon (ribosomer i cytoplasmaet)**
- Initiering: Ribosom samles pa mRNA ved AUG med initiator-tRNA.
- Elongering: Aminosyrer legges til polypeptidkjeden i A-setet, peptidbinding dannes, ribosomet translokerer.
- Terminering: Stoppkodon gjenkjennes, polypeptid frisettes.

**5. Posttranslasjonelle modifikasjoner (ER, Golgi, cytoplasma)**
- Folding til 3D-struktur (chaperoner).
- Klipping (fjerning av signalsekvenser, aktivering av proproteiner).
- Kjemiske modifikasjoner (fosforylering, glykosylering, disulfidbindinger).
- Dirigering til riktig sted i cellen.

Resultat: Et ferdig, funksjonelt protein pa riktig sted i cellen.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
      topic: 'Helhetlig oversikt',
    },
  ],
};
