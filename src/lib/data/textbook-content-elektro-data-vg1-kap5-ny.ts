/* eslint-disable */
// @ts-nocheck
/**
 * Elektro og datateknologi VG1 - Kapittel 5: Energi og installasjoner (nye delkapitler)
 *
 * Dekker: 5.3, 5.4, 5.5, 5.6, 5.7
 * Temaer: Vindkraft og fornybar energi, elektriske installasjoner, forskrifter,
 *         vern og jordfeil, motorer og transformatorer
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.3: Vindkraft og andre fornybare energikilder
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_5_3: TextbookChapter = {
  id: 'elektro-data-vg1-5-3',
  courseId: 'elektro-data-vg1',
  chapterNumber: '5.3',
  title: 'Vindkraft og andre fornybare energikilder',
  description: 'Vindturbiner, bølgekraft, varmepumper og energilagring – hvordan fornybar energi produseres og lagres.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare prinsippene bak fornybare energikilder',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-5-3-intro',
      type: 'text',
      content: `## Vindkraft og andre fornybare energikilder

Norge er i en unik posisjon med rikelig tilgang på fornybare energiressurser. I tillegg til vannkraft, som dekker mesteparten av norsk strømproduksjon, har vi store muligheter innen vindkraft, bølgekraft og varmepumper. For å utnytte disse kildene trenger vi å forstå hvordan de fungerer teknisk – og hvordan vi kan lagre energien til den trengs.

I dette kapittelet skal du lære:
- Hvordan vindturbiner omdanner kinetisk energi til elektrisitet
- Forskjellen mellom horisontal- og vertikalakse vindturbiner
- Hvordan bølgekraft og varmepumper fungerer
- Metoder for energilagring, inkludert batterier og hydrogen`,
    },

    // BLOKK 1: Vindturbiner
    {
      id: 'elektro-data-vg1-5-3-def-1',
      type: 'definition',
      title: 'Vindturbiner og vindenergi',
      content: `En **vindturbin** omdanner kinetisk energi i vinden til elektrisk energi via en generator.

**Horisontalakse vindturbin (HAWT):**
- Rotorbladene er montert horisontalt, vinkelrett på vindretningen
- Mest vanlig type, brukes i store vindparker
- Typisk 3 rotorblad, men kan ha 2
- Krever retningsjustering mot vinden (yaw-system)
- Tårnhøyde: 80–150 m, rotordiameter: 80–220 m

**Vertikalakse vindturbin (VAWT):**
- Rotorakselen står vertikalt
- Fanger vind fra alle retninger uten retningsjustering
- Darrieus-type (eggformede blad) eller Savonius-type (halvskåler)
- Lavere virkningsgrad, men enklere konstruksjon
- Egnet for urban bruk og mindre installasjoner

**Effekt fra vind:**
Tilgjengelig effekt: **P = ½ × ρ × A × v³**
- ρ = lufttetthet (ca. 1,225 kg/m³)
- A = rotorens sveipeareal (πr²)
- v = vindhastighet (m/s)

Merk: Effekten øker med **kuben** av vindhastigheten – dobles vinden, åttedobles energien!`,
    },
    {
      id: 'elektro-data-vg1-5-3-def-2',
      type: 'definition',
      title: 'Generator i vindturbiner',
      content: `**Generatoren** i en vindturbin omdanner rotasjonsenergi til elektrisitet ved hjelp av elektromagnetisk induksjon.

**Vanlige generatortyper:**
- **Asynkrongenerator:** Enkel og robust, brukes i eldre vindturbiner. Koblet direkte til nettet med fast turtall.
- **Permanent magnet synkrongenerator (PMSG):** Bruker sterke permanentmagneter, høy virkningsgrad. Vanlig i moderne direktedrevne vindturbiner.
- **Dobbelmatad asynkrongenerator (DFIG):** Tillater variabelt turtall innenfor et visst område. Mye brukt i mellomstore turbiner.

**Girboks vs. direktedrift:**
- Girboks øker turtallet fra rotor (10–20 rpm) til generator (1000–1500 rpm)
- Direktedrevne turbiner har ingen girboks – generatoren roterer sakte med mange poler
- Direktedrift gir færre bevegelige deler og mindre vedlikehold`,
    },
    {
      id: 'elektro-data-vg1-5-3-example-1',
      type: 'example',
      title: 'Effekt fra en vindturbin',
      problem: 'En vindturbin har rotorblad med diameter 90 m. Vindhastigheten er 12 m/s og lufttettheten er 1,225 kg/m³. Beregn den tilgjengelige vindeffekten. Turbinens virkningsgrad er 40 %. Hva er faktisk elektrisk effekt?',
      solution: `**Steg 1:** Beregn rotorens sveipeareal:
A = π × r² = π × 45² = π × 2025 ≈ 6362 m²

**Steg 2:** Beregn tilgjengelig vindeffekt:
P = ½ × ρ × A × v³ = ½ × 1,225 × 6362 × 12³
P = ½ × 1,225 × 6362 × 1728
P ≈ 6 731 000 W ≈ **6,73 MW**

**Steg 3:** Faktisk elektrisk effekt:
P_el = P × η = 6,73 × 0,40 = **2,69 MW**

Turbinen kan levere ca. 2,7 MW elektrisk effekt ved 12 m/s vind.`,
    },
    {
      id: 'elektro-data-vg1-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva skjer med den tilgjengelige vindeffekten hvis vindhastigheten dobles?',
        options: [
          { id: 'a', text: 'Effekten dobles', correct: false },
          { id: 'b', text: 'Effekten firedobles', correct: false },
          { id: 'c', text: 'Effekten åttedobles', correct: true },
          { id: 'd', text: 'Effekten sekstendobles', correct: false },
        ],
        solution: 'Effekten er proporsjonal med v³ (kuben av vindhastigheten). Når v dobles: (2v)³ = 8v³. Effekten åttedobles.',
      },
    },

    // BLOKK 2: Andre fornybare kilder
    {
      id: 'elektro-data-vg1-5-3-def-3',
      type: 'definition',
      title: 'Bølgekraft og varmepumper',
      content: `**Bølgekraft:**
Utnytter havbølgenes bevegelsesenergi til å produsere elektrisitet. Flere teknologier finnes:
- **Pelamis:** Flytende «slange» som bøyes av bølgene – hydrauliske pumper driver generatorer
- **Oscillerende vannsøyle (OWC):** Bølger presser luft gjennom en turbin
- **Punktabsorbenter:** Flytende bøyer som beveger seg opp og ned med bølgene

Norge har lang kystlinje med gode bølgeforhold, spesielt på vestkysten.

**Varmepumper:**
En varmepumpe henter varme fra omgivelsene og «pumper» den til et høyere temperaturnivå:
- **Luft-til-luft:** Henter varme fra uteluft (mest vanlig i Norge)
- **Luft-til-vann:** Varmer opp vann til radiatorer og gulvvarme
- **Væske-til-vann (bergvarme):** Henter varme fra grunnen via borehull
- **COP** (Coefficient of Performance): Typisk 2–5, dvs. 1 kWh strøm gir 2–5 kWh varme

**Virkemåte:** Bruker samme prinsipp som kjøleskap, men i motsatt retning – kuldemedie fordamper ved lav temperatur, komprimeres, avgir varme ved høy temperatur.`,
    },
    {
      id: 'elektro-data-vg1-5-3-example-2',
      type: 'example',
      title: 'Energibesparelse med varmepumpe',
      problem: 'Et hus bruker 20 000 kWh til oppvarming per år med direkte elektrisk oppvarming. En varmepumpe med COP = 3 installeres. Hvor mye strøm spares årlig, og hva spares i kroner hvis strømprisen er 1,50 kr/kWh?',
      solution: `**Steg 1:** Strømforbruk med varmepumpe:
Forbruk = Varmebehov / COP = 20 000 / 3 ≈ 6 667 kWh

**Steg 2:** Besparelse i kWh:
Spart = 20 000 − 6 667 = **13 333 kWh**

**Steg 3:** Besparelse i kroner:
Spart = 13 333 × 1,50 = **20 000 kr/år**

Varmepumpen reduserer strømforbruket til oppvarming med ca. 67 %.`,
    },
    {
      id: 'elektro-data-vg1-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'middels',
        task: 'Forklar forskjellen mellom horisontalakse og vertikalakse vindturbiner. Nevn fordeler og ulemper med hver type, og gi eksempler på bruksområder.',
        solution: 'Horisontalakse (HAWT): Rotorbladene er horisontale, vinkelrett på vinden. Fordeler: Høy virkningsgrad, godt egnet for store installasjoner, mest utviklet teknologi. Ulemper: Krever retningsjustering (yaw-system), støy, visuell påvirkning. Bruksområde: Store vindparker på land og til havs. Vertikalakse (VAWT): Rotorakselen er vertikal. Fordeler: Fanger vind fra alle retninger uten retningsjustering, lavere støy, enklere vedlikehold. Ulemper: Lavere virkningsgrad, lavere effekt. Bruksområde: Urbane områder, tak på bygninger, mindre installasjoner.',
      },
    },

    // BLOKK 3: Energilagring
    {
      id: 'elektro-data-vg1-5-3-def-4',
      type: 'definition',
      title: 'Energilagring',
      content: `Fornybar energi produseres ikke alltid når den trengs. Derfor er **energilagring** avgjørende.

**Batterier:**
- **Litiumion (Li-ion):** Høy energitetthet, brukes i mobiler, elbiler og stasjonær lagring. Typisk 150–250 Wh/kg.
- **Litiummjernfosfat (LFP):** Sikrere enn vanlig Li-ion, lang levetid, brukes i stasjonær lagring.
- **Blybatterier:** Billige, tunge, lavere energitetthet. Brukes i UPS-anlegg og eldre solcelleanlegg.

**Hydrogen:**
- Elektrolyse: Vann + strøm → hydrogen + oksygen (2H₂O → 2H₂ + O₂)
- Brenselceller: Hydrogen + oksygen → vann + strøm (motsatt prosess)
- Egnet for sesonglagring (lagre sommerstrøm til vinter)
- Utfordring: Lav virkningsgrad (30–40 % totalt for elektrolyse + brenselcelle)

**Andre lagringsmetoder:**
- **Pumpekraftverk:** Pumper vann opp i et magasin når strøm er billig, slipper det ned gjennom turbin når behovet er stort
- **Svinghjul:** Lagrer kinetisk energi som rotasjon
- **Komprimert luft (CAES):** Lagrer energi som trykkluft i underjordiske kaverner`,
    },
    {
      id: 'elektro-data-vg1-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva er COP (Coefficient of Performance) for en typisk luft-til-luft varmepumpe?',
        options: [
          { id: 'a', text: 'Under 1 – varmepumpen bruker mer energi enn den leverer', correct: false },
          { id: 'b', text: 'Nøyaktig 1 – like mye energi inn som ut', correct: false },
          { id: 'c', text: '2–5 – den leverer 2–5 ganger mer varmeenergi enn strømmen den bruker', correct: true },
          { id: 'd', text: 'Over 10 – den gir over 10 ganger mer energi enn forbrukt', correct: false },
        ],
        solution: 'COP for en typisk varmepumpe er 2–5. Det betyr at for hver kWh strøm du bruker, får du 2–5 kWh varme. Varmepumpen «stjeler» ikke energi – den henter gratis varme fra omgivelsene (luft, jord, vann) og bruker strøm til å flytte den inn i huset.',
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-5-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om fornybare energikilder og energilagring:

- **Vindturbiner** omdanner kinetisk energi i vinden til elektrisitet via en generator
- Vindeffekt: P = ½ρAv³ – effekten øker med kuben av vindhastigheten
- **Horisontalakse** (HAWT) er mest effektive og brukes i store vindparker
- **Vertikalakse** (VAWT) er enklere og fanger vind fra alle retninger
- **Bølgekraft** utnytter havbølgenes bevegelse
- **Varmepumper** leverer 2–5 ganger mer varme enn strømmen de bruker (COP 2–5)
- **Batterier** (Li-ion) er viktigste lagringsform for korttidslagring
- **Hydrogen** kan brukes til sesonglagring, men har lav virkningsgrad
- **Pumpekraftverk** er en velprøvd metode for storskala energilagring`,
    },

    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign hydrogen og batterier som energilagringsmetoder. Diskuter fordeler, ulemper og bruksområder for begge. Hvilken metode egner seg best for å lagre overskuddsenergi fra en vindpark over en hel sesong?',
        solution: 'Batterier (Li-ion): Fordeler: Høy virkningsgrad (85–95 % tur-retur), rask responstid, modular teknologi. Ulemper: Begrenset kapasitet for storskala, degraderer over tid, miljøutfordringer med utvinning av litium. Bruk: Korttidslagring (timer til dager), nettbalansering, elbiler. Hydrogen: Fordeler: Kan lagres i store mengder over lang tid, ingen selvutlading, kan transporteres. Ulemper: Lav total virkningsgrad (30–40 %), dyr infrastruktur, lagring krever høyt trykk eller lav temperatur. Bruk: Sesonglagring, tungtransport, industri. For sesonglagring (lagre overskudd fra sommer til vinter) er hydrogen best egnet, fordi batterier er for dyre i så store mengder og taper kapasitet over tid.',
      },
    },
    {
      id: 'elektro-data-vg1-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En vindpark med 10 turbiner produserer i gjennomsnitt 3 MW per turbin. Kapasitetsfaktoren (andel av tid med full produksjon) er 35 %. Beregn hvor mye energi vindparken produserer per år i GWh. Sammenlign med et gjennomsnittlig norsk husholdningsforbruk på 16 000 kWh/år – hvor mange husholdninger kan vindparken forsyne?',
        solution: 'Total installert effekt: 10 × 3 MW = 30 MW. Med kapasitetsfaktor 35 %: Gjennomsnittlig effekt = 30 × 0,35 = 10,5 MW. Årlig energiproduksjon: 10,5 MW × 8760 timer = 91 980 MWh ≈ 92 GWh. Antall husholdninger: 92 000 000 kWh / 16 000 kWh = ca. 5750 husholdninger. Vindparken kan forsyne omtrent 5750 norske husholdninger.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Vindturbin', definition: 'Maskin som omdanner kinetisk vindenergi til elektrisk energi.' },
    { term: 'HAWT', definition: 'Horisontalakse vindturbin – rotorbladene er horisontale, mest brukte type.' },
    { term: 'VAWT', definition: 'Vertikalakse vindturbin – rotorakselen er vertikal, fanger vind fra alle retninger.' },
    { term: 'Bølgekraft', definition: 'Energiproduksjon fra havbølgenes bevegelse.' },
    { term: 'Varmepumpe', definition: 'Enhet som henter varme fra omgivelsene og pumper den til høyere temperatur.' },
    { term: 'COP', definition: 'Coefficient of Performance – forholdet mellom levert varme og tilført strøm.' },
    { term: 'Elektrolyse', definition: 'Prosess der vann spaltes til hydrogen og oksygen ved hjelp av strøm.' },
    { term: 'Kapasitetsfaktor', definition: 'Andel av tid en energikilde produserer ved full kapasitet.' },
  ],
};

// ============================================================================
// Kapittel 5.4: Elektriske installasjoner i bygg
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_5_4: TextbookChapter = {
  id: 'elektro-data-vg1-5-4',
  courseId: 'elektro-data-vg1',
  chapterNumber: '5.4',
  title: 'Elektriske installasjoner i bygg',
  description: 'Kursopplegg, installasjonsmetoder, kabeltyper, koblingsskjema og TN-nett i norske bygg.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forklare grunnleggende elektriske installasjoner i bygg',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-5-4-intro',
      type: 'text',
      content: `## Elektriske installasjoner i bygg

Alle bygg i Norge har elektriske installasjoner som forsyner stikkontakter, lys, varme og teknisk utstyr. En elektrisk installasjon må planlegges grundig for å være sikker, pålitelig og i tråd med gjeldende forskrifter. Som elektrofaglært må du forstå hvordan disse anleggene er bygd opp – fra sikringsskapet til den siste stikkontakten.

I dette kapittelet skal du lære:
- Hva et kursopplegg (sikringskurs) er og hvordan det er organisert
- Ulike installasjonsmetoder og kabeltyper
- Hvordan du leser og tegner koblingsskjemaer
- Oppbygging av TN-nett (fordelingssystem)`,
    },

    // BLOKK 1: Kursopplegg
    {
      id: 'elektro-data-vg1-5-4-def-1',
      type: 'definition',
      title: 'Kursopplegg og sikringskurser',
      content: `Et **kursopplegg** er den planlagte fordelingen av strøm i et bygg. Strømmen fordeles fra hovedfordelingen (sikringsskapet) til ulike **kurser** (strømkretser).

**Typer kurser:**
- **Lyskurs:** Forsyner belysning, typisk 10 A sikring, 1,5 mm² kabel
- **Stikkontaktkurs:** Forsyner vanlige stikkontakter, typisk 16 A sikring, 2,5 mm² kabel
- **Dedikert kurs:** Egen kurs til storforbrukere som komfyr (25–32 A), varmtvannsbereder (16 A), elbil-lader (16–32 A)
- **IT-kurs:** Egen kurs for datautstyr, ofte med overspenningsvern

**Sikringsskap (fordeling):**
- Hovedbryter: Kobler fra hele bygget
- Automatsikringer: Én per kurs
- Jordfeilbryter (RCD): Beskytter mot jordfeil
- Overspenningsvern: Beskytter mot lynnedslag

**Dimensjonering:**
Kabeltverrsnittet må passe til sikringsstørrelsen:
- 10 A sikring → 1,5 mm² kabel
- 16 A sikring → 2,5 mm² kabel
- 20 A sikring → 4 mm² kabel
- 25 A sikring → 6 mm² kabel
- 32 A sikring → 6 mm² kabel (avhengig av lengde og forlegning)`,
    },
    {
      id: 'elektro-data-vg1-5-4-example-1',
      type: 'example',
      title: 'Planlegge kurser for en leilighet',
      problem: 'En leilighet har stue, kjøkken, bad, to soverom og gang. Sett opp et enkelt kursopplegg med passende sikringsstørrelser.',
      solution: `**Forslag til kursopplegg:**

| Kurs | Område | Sikring | Kabel |
|------|--------|---------|-------|
| 1 | Lys stue/soverom/gang | 10 A | 1,5 mm² |
| 2 | Lys kjøkken/bad | 10 A | 1,5 mm² |
| 3 | Stikkontakter stue/soverom | 16 A | 2,5 mm² |
| 4 | Stikkontakter kjøkken | 16 A | 2,5 mm² |
| 5 | Stikkontakter bad | 16 A | 2,5 mm² |
| 6 | Komfyr | 25 A | 6 mm² |
| 7 | Varmtvannsbereder | 16 A | 2,5 mm² |
| 8 | Varmekabler bad | 16 A | 2,5 mm² |

Totalt 8 kurser. Kjøkken og bad har egne stikkontaktkurser fordi de har høyt forbruk og krav om egen jordfeilbryter.`,
    },
    {
      id: 'elektro-data-vg1-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket kabeltverrsnitt skal brukes til en vanlig stikkontaktkurs med 16 A sikring?',
        options: [
          { id: 'a', text: '1,0 mm²', correct: false },
          { id: 'b', text: '1,5 mm²', correct: false },
          { id: 'c', text: '2,5 mm²', correct: true },
          { id: 'd', text: '4,0 mm²', correct: false },
        ],
        solution: 'En 16 A stikkontaktkurs krever minimum 2,5 mm² kabeltverrsnitt. 1,5 mm² brukes til 10 A lyskurser.',
      },
    },

    // BLOKK 2: Kabeltyper og installasjonsmetoder
    {
      id: 'elektro-data-vg1-5-4-def-2',
      type: 'definition',
      title: 'Kabeltyper og forlegning',
      content: `**Vanlige kabeltyper i norske installasjoner:**

**PFXP (installasjonskabel):**
- Plastkappe, fleksibel, med skjerm
- Brukes utendørs, i jord, og innstøpt i betong
- Tåler fukt og mekanisk påkjenning
- Typisk bruk: Innmating til bygg, utendørs installasjoner

**PN (installasjonskanal):**
- Plastkappe, norsk standard
- Brukes innendørs i tørre rom
- Vanligste kabeltype for boliginstallasjoner
- PN 3G2,5: 3 ledere (fase, nøytral, jord), 2,5 mm² tverrsnitt
- PN 5G6: 5 ledere (3 faser, nøytral, jord), 6 mm² (komfyr)

**RG (rørkanal):**
- Brukes der kabelen trenger ekstra beskyttelse
- Stive eller fleksible rør

**Installasjonsmetoder:**
- **Skjult i vegg/tak:** Vanligst i nybygg, kabelen legges i rør eller direkte i konstruksjonen
- **På vegg i kanal:** Brukes ved oppgradering, kabelen legges i plastkanaler
- **Nedgravd i jord:** PFXP-kabel i minimum 40 cm dybde, med varselbånd
- **På kabelbro/stigekanal:** Brukes i næringsbygg og industri

**Lederfarge (norsk standard):**
- Brun = Fase (L1)
- Sort = Fase (L2)
- Grå = Fase (L3)
- Blå = Nøytral (N)
- Gul/grønn = Beskyttelsesjord (PE)`,
    },
    {
      id: 'elektro-data-vg1-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'middels',
        task: 'Forklar forskjellen mellom PFXP-kabel og PN-kabel. Når bruker du hvilken type? Hva betyr betegnelsen PN 3G2,5?',
        solution: 'PFXP: Har metallisk skjerm, tåler fukt og mekanisk belastning, brukes utendørs, i jord og i betong. PN: Enklere plastkappe uten skjerm, brukes innendørs i tørre rom, billigere og lettere å jobbe med. PN 3G2,5 betyr: PN-kabel med 3 ledere (G = med jord), 2,5 mm² tverrsnitt. De tre lederne er fase (brun), nøytral (blå) og jord (gul/grønn).',
      },
    },

    // BLOKK 3: TN-nett og koblingsskjema
    {
      id: 'elektro-data-vg1-5-4-def-3',
      type: 'definition',
      title: 'TN-nett og fordelingssystem',
      content: `I Norge brukes **TN-nett** (Terra Neutral) som standard fordelingssystem. Nettet leverer 230 V (fase-nøytral) og 400 V (fase-fase).

**TN-S (Separate):**
- Nøytral (N) og jord (PE) er separate ledere gjennom hele anlegget
- Standard i nye installasjoner
- Gir best beskyttelse mot jordfeil

**TN-C-S (Combined-Separate):**
- Nøytral og jord er kombinert (PEN) i forsyningsnettet
- Deles til separate N og PE i sikringsskapet
- Vanligste system i norske boliginstallasjoner

**Trefasesystem:**
Norge bruker **trefase** med 50 Hz:
- Fase-nøytral: 230 V (brukes i vanlige stikkontakter)
- Fase-fase: 400 V (brukes til komfyr, industri)
- Tre faser er forskjøvet 120° i forhold til hverandre

**Koblingsskjema:**
- **Strømstigsplan:** Viser den prinsipielle oppbyggingen fra inntak til kurser
- **Koblingsskjema:** Viser ledningsforbindelsene i detalj
- **Plantegning med el-symboler:** Viser plassering av utstyr i bygget`,
    },
    {
      id: 'elektro-data-vg1-5-4-example-2',
      type: 'example',
      title: 'Spenninger i trefasesystem',
      problem: 'I et TN-S nett måler du 230 V mellom fase og nøytral. Hva er spenningen mellom to faser (f.eks. L1 og L2)? Og hvorfor er denne spenningen høyere?',
      solution: `**Spenning fase-fase:**
U_FF = U_FN × √3 = 230 × 1,732 ≈ **400 V**

**Forklaring:**
De tre fasene er sinusbølger som er forskjøvet 120° i forhold til hverandre. Når du måler mellom to faser, er spenningsforskjellen mellom dem alltid √3 (ca. 1,73) ganger fase-nøytral-spenningen.

Derfor:
- Stikkontakt (fase-nøytral): **230 V**
- Komfyr (fase-fase): **400 V**
- Industriutstyr kan kobles til alle tre faser: **3 × 400 V**`,
    },
    {
      id: 'elektro-data-vg1-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvilken farge har jordlederen i norsk standard?',
        options: [
          { id: 'a', text: 'Blå', correct: false },
          { id: 'b', text: 'Brun', correct: false },
          { id: 'c', text: 'Sort', correct: false },
          { id: 'd', text: 'Gul/grønn', correct: true },
        ],
        solution: 'Jordlederen (PE - Protective Earth) er alltid gul/grønn stripet. Blå er nøytral (N), brun er fase L1, sort er fase L2, og grå er fase L3.',
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-5-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om elektriske installasjoner i bygg:

- Et **kursopplegg** fordeler strømmen fra sikringsskapet til ulike kurser
- **Lyskurser** bruker 10 A/1,5 mm², **stikkontaktkurser** bruker 16 A/2,5 mm²
- **PFXP** brukes utendørs og i jord, **PN** brukes innendørs i tørre rom
- Lederfarger: Brun = fase L1, sort = L2, grå = L3, blå = nøytral, gul/grønn = jord
- **TN-nett** er norsk standard, med 230 V (fase-nøytral) og 400 V (fase-fase)
- Tre faser er forskjøvet 120° – U_FF = U_FN × √3
- Koblingsskjema og plantegninger er viktige verktøy for planlegging`,
    },

    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et lite verksted skal ha følgende utstyr: tre stikkontakter for elektroverktøy (maks 2500 W hver), en kompressor (3 kW, 400 V trefase), belysning (10 stk. LED-armaturer á 40 W), og en varmeovn (2000 W). Sett opp et kursopplegg med passende sikringsstørrelser og kabeltverrsnitt.',
        solution: 'Kurs 1 – Belysning: 10 × 40 W = 400 W. I = 400/230 ≈ 1,7 A → 10 A sikring, 1,5 mm² PN. Kurs 2 – Stikkontakter 1 og 2: 2 × 2500 W = 5000 W. I = 5000/230 ≈ 21,7 A → 25 A sikring, 6 mm² PN (eller 2 separate 16 A kurser med 2,5 mm²). Kurs 3 – Stikkontakt 3 + varmeovn: 2500 + 2000 = 4500 W. I = 4500/230 ≈ 19,6 A → 20 A sikring, 4 mm² PN (eller to separate kurser). Kurs 4 – Kompressor (trefase): 3000 W / (√3 × 400) ≈ 4,3 A → 16 A trefase sikring, 5G2,5 PN. Anbefaling: Del heller opp i flere kurser med lavere sikringer for bedre sikkerhet.',
      },
    },
    {
      id: 'elektro-data-vg1-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar forskjellen mellom TN-S og TN-C-S fordelingssystem. Hvorfor er TN-S foretrukket i nye installasjoner? Hva kan gå galt hvis PEN-lederen i et TN-C-S system brytes?',
        solution: 'TN-S: Nøytral (N) og jord (PE) er separate ledere gjennom hele anlegget. TN-C-S: N og PE er kombinert (PEN) i forsyningsnettet, deles ved inntak til bygget. TN-S er foretrukket fordi: 1) Separate ledere eliminerer risiko for at strøm på nøytral påvirker jordforbindelsen, 2) Bedre EMC (elektromagnetisk kompatibilitet), 3) Jordfeilbrytere fungerer mer pålitelig. Hvis PEN-lederen i et TN-C-S system brytes: Alle metalliske deler som er jordet kan få farlig spenning (opp til 230 V) fordi nøytralstrømmen søker jord gjennom utstyrets jordleder. Dette er livsfarlig! I TN-S-system vil et brudd på nøytral eller jord bare påvirke den ene funksjonen.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Kursopplegg', definition: 'Planlagt fordeling av strøm i et bygg med ulike sikringskurser.' },
    { term: 'Sikringskurs', definition: 'En separat strømkrets beskyttet av en sikring eller automatsikring.' },
    { term: 'PFXP', definition: 'Installasjonskabel med skjerm, brukes utendørs og i jord.' },
    { term: 'PN', definition: 'Standard installasjonskabel for innendørs bruk i tørre rom.' },
    { term: 'TN-nett', definition: 'Norsk standard fordelingssystem med jordet nøytralpunkt.' },
    { term: 'Trefase', definition: 'Strømsystem med tre faser forskjøvet 120°, gir 400 V fase-fase.' },
    { term: 'Koblingsskjema', definition: 'Tegning som viser ledningsforbindelser i en elektrisk installasjon.' },
  ],
};

// ============================================================================
// Kapittel 5.5: Forskrifter og NEK 400
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_5_5: TextbookChapter = {
  id: 'elektro-data-vg1-5-5',
  courseId: 'elektro-data-vg1',
  chapterNumber: '5.5',
  title: 'Forskrifter og NEK 400',
  description: 'NEK 400, FEL og FSE – de viktigste forskriftene for elektriske installasjoner og arbeid.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for gjeldende forskrifter for elektriske installasjoner',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-5-5-intro',
      type: 'text',
      content: `## Forskrifter og NEK 400

Elektriske installasjoner kan være livsfarlige hvis de ikke utføres korrekt. Derfor har Norge et omfattende regelverk som stiller krav til hvordan installasjoner skal utføres, kontrolleres og driftes. Som elektriker er det din plikt å kjenne til disse forskriftene – de er grunnlaget for alt arbeid du gjør.

I dette kapittelet skal du lære:
- Hva NEK 400 er og hvorfor den er så viktig
- Forskjellen mellom FEL og FSE
- De viktigste kravene som stilles til elektriske installasjoner
- Hvem som har lov til å utføre elektrisk arbeid`,
    },

    // BLOKK 1: NEK 400
    {
      id: 'elektro-data-vg1-5-5-def-1',
      type: 'definition',
      title: 'NEK 400 – Norsk elektroteknisk norm',
      content: `**NEK 400** er det viktigste normsverket for elektriske lavspenningsinstallasjoner i Norge. Det er utgitt av Norsk Elektroteknisk Komité (NEK) og basert på internasjonale standarder (IEC 60364).

**Hva NEK 400 dekker:**
- Dimensjonering av kabler og ledninger
- Valg av vern (sikringer, jordfeilbrytere)
- Installasjon i ulike rom og miljøer
- Krav til jording og utjevning
- Spesielle installasjoner (bad, svømmebasseng, campingplasser osv.)
- Verifikasjon og kontroll av anlegg

**Viktige delstandarder:**
- **NEK 400-4-41:** Beskyttelse mot elektrisk sjokk
- **NEK 400-4-43:** Beskyttelse mot overstrøm
- **NEK 400-5-52:** Valg og installasjon av ledningssystemer
- **NEK 400-7-701:** Installasjoner i bad og dusj (sonekrav)

**Status:**
NEK 400 er ikke en lov i seg selv, men er referert til i forskriftene (FEL). Å følge NEK 400 er den enkleste måten å oppfylle kravene i FEL.`,
    },
    {
      id: 'elektro-data-vg1-5-5-example-1',
      type: 'example',
      title: 'Sonekrav på bad (NEK 400-7-701)',
      problem: 'Forklar sonekravene for elektrisk installasjon på et baderom ifølge NEK 400.',
      solution: `NEK 400 deler et baderom inn i soner basert på avstand fra badekar/dusj:

**Sone 0:** Innsiden av badekar/dusjkar
- Kun IPX7-utstyr (nedsenking)
- Maks 12 V (SELV)
- Ingen stikkontakter eller brytere

**Sone 1:** Rett over badekar/dusj, opp til 2,25 m høyde
- Minimum IPX4 (sprutsikker)
- Kun faststilte apparater som varmtvannsbereder
- Ingen stikkontakter

**Sone 2:** 0,6 m ut fra sone 1
- Minimum IPX4
- Tillatt med lys, ventilator, barberstikkontakt med skilletransformator
- Stikkontakter krever jordfeilbryter 30 mA

**Utenfor sonene:** Normale krav, men jordfeilbryter anbefales for alle kurser.`,
    },
    {
      id: 'elektro-data-vg1-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er NEK 400?',
        options: [
          { id: 'a', text: 'En lov vedtatt av Stortinget om elektrisitet', correct: false },
          { id: 'b', text: 'En norsk elektroteknisk norm for lavspenningsinstallasjoner', correct: true },
          { id: 'c', text: 'En forsikringsordning for elektrikere', correct: false },
          { id: 'd', text: 'Et EU-direktiv som gjelder i hele Europa', correct: false },
        ],
        solution: 'NEK 400 er en norsk elektroteknisk norm (standard) for lavspenningsinstallasjoner, utgitt av Norsk Elektroteknisk Komité. Den er ikke en lov, men er referert til i forskriften FEL, slik at den i praksis er bindende.',
      },
    },

    // BLOKK 2: FEL og FSE
    {
      id: 'elektro-data-vg1-5-5-def-2',
      type: 'definition',
      title: 'FEL – Forskrift for elektriske lavspenningsanlegg',
      content: `**FEL** er den norske forskriften som stiller krav til elektriske lavspenningsanlegg (opp til 1000 V AC / 1500 V DC). Den er fastsatt av Direktoratet for samfunnssikkerhet og beredskap (DSB).

**Viktige krav i FEL:**
- Alle installasjoner skal utføres av **kvalifisert personell** (elektriker med fagbrev, eller under veiledning)
- Installasjoner skal oppfylle krav i **NEK 400** (eller tilsvarende normer)
- Nye anlegg og endringer skal **meldes til nettselskapet** (DLE – Det lokale eltilsyn)
- **Samsvarserklæring** skal utstedes av installatøren etter ferdigstillelse
- Eier av anlegget har ansvar for at det holdes i forsvarlig stand

**Hvem har lov til å gjøre hva:**
- Elektriker (fagbrev): Kan utføre alt arbeid innen lavspenning
- Lærling: Kan jobbe under veiledning av fagarbeider
- Privatpersoner: Kan kun bytte sikringer, stikkontakter (uten jordfeilbryter), lamper og lignende enkelt arbeid
- Installatør (virksomhet): Ansvarlig for samsvarserklæring`,
    },
    {
      id: 'elektro-data-vg1-5-5-def-3',
      type: 'definition',
      title: 'FSE – Forskrift for sikkerhet ved arbeid i og drift av elektriske anlegg',
      content: `**FSE** regulerer sikkerheten for personer som arbeider på eller nær elektriske anlegg. Gjelder for alt arbeid der det er risiko for elektrisk sjokk.

**Sentrale prinsipper i FSE:**
1. **Frakobling:** Anlegget skal kobles fra spenningskilden
2. **Sikring mot innkobling:** Bryter skal låses i av-stilling
3. **Verifikasjon av spenningsløs tilstand:** Bruk godkjent spenningsprøver
4. **Jording og kortslutning:** I høyspenningsanlegg
5. **Beskyttelse mot tilgrensende spenningsførende deler:** Berøringsbeskyttelse

**De 5 sikkerhetstrinnene (arbeid på spenningsløst anlegg):**
1. Koble fra
2. Sikre mot innkobling (hengelås + skilt)
3. Kontroller at anlegget er spenningsløst
4. Jord og kortslutt (ved høyspenning)
5. Sett opp sperringer og varselskilt

**Ansvar:**
- **Leder for kobling (LFK):** Ansvarlig for sikkerhetskobling
- **Leder for sikkerhet (LFS):** Ansvarlig for personellets sikkerhet på arbeidsplassen
- **Instruert person:** Har fått spesialopplæring for bestemte oppgaver`,
    },
    {
      id: 'elektro-data-vg1-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'middels',
        task: 'Forklar de 5 sikkerhetstrinnene i FSE for arbeid på spenningsløst anlegg. Hvorfor er hvert trinn viktig?',
        solution: '1) Koble fra: Fjerner spenning fra anlegget slik at det er trygt å berøre. 2) Sikre mot innkobling: Hengelås og skilt hindrer at noen kobler inn spenningen mens du jobber. 3) Kontroller spenningsløs tilstand: Verifiser med godkjent spenningsprøver – man kan aldri stole blindt på at bryteren virker. 4) Jord og kortslutt: I høyspenningsanlegg kan det lagres farlig energi (kondensatorer, kabler). Jording og kortslutning sørger for at denne energien utlades trygt. 5) Sperringer og varselskilt: Hindrer uvedkommende i å komme inn i arbeidsområdet og advarer om faren. Alle trinnene er viktige fordi elektrisk sjokk kan være dødelig – de gir redundant sikkerhet (flere lag beskyttelse).',
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-5-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om forskrifter for elektriske installasjoner:

- **NEK 400** er normen for lavspenningsinstallasjoner – dekker dimensjonering, vern, installasjon og kontroll
- NEK 400 er ikke en lov, men er referert til i FEL og er i praksis bindende
- **FEL** krever at installasjoner utføres av kvalifisert personell og at samsvarserklæring utstedes
- Kun elektrikere med fagbrev kan utføre elektrisk installasjonsarbeid
- **FSE** regulerer sikkerheten for arbeid på og nær elektriske anlegg
- De 5 sikkerhetstrinnene: Koble fra → Sikre mot innkobling → Verifiser spenningsløst → Jord/kortslutt → Sperringer
- Baderom har sonekrav (sone 0, 1, 2) med ulike krav til IP-klasse og utstyr`,
    },

    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En boligeier ønsker å installere en ny stikkontaktkurs på kjøkkenet selv for å spare penger. Forklar hvilke regler som gjelder, hva privatpersoner har lov til å gjøre, og hva konsekvensene kan bli ved ulovlig arbeid.',
        solution: 'Ifølge FEL kan privatpersoner kun gjøre enkelt arbeid som å bytte sikringer, stikkontakter (uten jordfeilbryter), lamper og tilsvarende. Å legge en ny kurs (trekke kabel, koble i sikringsskap) krever fagbrev i elektrikerfaget. Konsekvenser av ulovlig arbeid: 1) Ingen forsikringsdekning ved brann eller skade, 2) Anmeldelse og bot fra DSB/DLE, 3) Livsfare ved feil installasjon (brannfare, strømgjennomgang), 4) Boligen kan bli nektet strøm av nettselskapet, 5) Ved salg kan ulovlige installasjoner føre til erstatningskrav.',
      },
    },
    {
      id: 'elektro-data-vg1-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar forskjellen mellom FEL og FSE. Hvem retter de seg mot, og hva regulerer de? Gi et praktisk eksempel der begge forskriftene er relevante.',
        solution: 'FEL (Forskrift for elektriske lavspenningsanlegg): Regulerer selve anlegget – hvordan det skal bygges, dokumenteres og vedlikeholdes. Retter seg mot eiere av anlegg og de som utfører installasjonsarbeid. FSE (Forskrift for sikkerhet ved arbeid): Regulerer sikkerheten til personene som jobber på eller nær anlegget. Retter seg mot arbeidsgiver, arbeidstaker og virksomheter. Praktisk eksempel: En elektriker skal oppgradere sikringsskapet i en bolig. FEL krever at arbeidet utføres av kvalifisert personell, at NEK 400 følges, og at samsvarserklæring utstedes. FSE krever at elektrikeren følger sikkerhetstrinnene (koble fra, sikre mot innkobling, verifisere spenningsløst) og at det er utpekt en LFS. Begge forskrifter er like viktige – FEL sikrer at resultatet er trygt, FSE sikrer at arbeidet utføres trygt.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'NEK 400', definition: 'Norsk elektroteknisk norm for lavspenningsinstallasjoner.' },
    { term: 'FEL', definition: 'Forskrift for elektriske lavspenningsanlegg – stiller krav til anlegget.' },
    { term: 'FSE', definition: 'Forskrift for sikkerhet ved arbeid i og drift av elektriske anlegg.' },
    { term: 'Samsvarserklæring', definition: 'Dokument som bekrefter at installasjonen er utført iht. forskriftene.' },
    { term: 'DLE', definition: 'Det lokale eltilsyn – tilsynsmyndighet for elektriske anlegg.' },
    { term: 'DSB', definition: 'Direktoratet for samfunnssikkerhet og beredskap – overordnet tilsynsmyndighet.' },
    { term: 'LFS', definition: 'Leder for sikkerhet – ansvarlig for personellets sikkerhet på arbeidsplassen.' },
  ],
};

// ============================================================================
// Kapittel 5.6: Vern og jordfeil
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_5_6: TextbookChapter = {
  id: 'elektro-data-vg1-5-6',
  courseId: 'elektro-data-vg1',
  chapterNumber: '5.6',
  title: 'Vern og jordfeil',
  description: 'Sikringer, jordfeilbrytere, overspenningsvern, jording og beskyttelsesklasser i elektriske anlegg.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare prinsippene for vern og beskyttelse i elektriske anlegg',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-5-6-intro',
      type: 'text',
      content: `## Vern og jordfeil

Elektrisk strøm er farlig – allerede 30 mA gjennom kroppen kan være dødelig. Elektriske anlegg må derfor ha flere lag med beskyttelse som hindrer overbelastning, kortslutning og farlig berøringsspenning. Disse vernene er den viktigste sikkerhetsbarrieren mellom deg og farlig strøm.

I dette kapittelet skal du lære:
- Hvordan automatsikringer og smeltesikringer fungerer
- Hva en jordfeilbryter (RCD) gjør og hvorfor den er livsviktig
- Overspenningsvern og jording
- Beskyttelsesklasser og IP-klassifisering`,
    },

    // BLOKK 1: Sikringer
    {
      id: 'elektro-data-vg1-5-6-def-1',
      type: 'definition',
      title: 'Sikringer og automatsikringer',
      content: `**Sikringer** beskytter kabler og utstyr mot overbelastning og kortslutning ved å bryte strømmen når den blir for høy.

**Smeltesikringer:**
- En smeltetråd som smelter ved for høy strøm
- Engangsbruk – må byttes etter utløsning
- Brukes fortsatt i eldre anlegg og i noen spesielle applikasjoner

**Automatsikringer (MCB – Miniature Circuit Breaker):**
- Kan tilbakestilles etter utløsning (vippe opp igjen)
- Har to utløsermekanismer:
  - **Termisk utløser:** Reagerer på langvarig overbelastning (bimetall som bøyer seg)
  - **Magnetisk utløser:** Reagerer raskt på kortslutning (elektromagnet)
- Standard i moderne installasjoner

**Karakteristikk:**
- **B-karakteristikk:** Utløser magnetisk ved 3–5 × I_n. Brukes i boliginstallasjoner.
- **C-karakteristikk:** Utløser ved 5–10 × I_n. Brukes der det er høye startstrømmer (motorer).
- **D-karakteristikk:** Utløser ved 10–20 × I_n. Brukes til transformatorer og store motorer.

I_n = sikringens merkestrøm (f.eks. 16 A).`,
    },
    {
      id: 'elektro-data-vg1-5-6-example-1',
      type: 'example',
      title: 'Når utløser en B16 automatsikring?',
      problem: 'En automatsikring av type B16 er installert på en stikkontaktkurs. Ved hvilken strøm utløser den termisk (langsomt), og ved hvilken strøm utløser den magnetisk (raskt)?',
      solution: `**B16 automatsikring:**
Merkestrøm I_n = 16 A

**Termisk utløsning (overbelastning):**
Utløser ved strøm over I_n i lengre tid:
- 1,13 × I_n = 18,1 A → skal IKKE utløse innen 1 time
- 1,45 × I_n = 23,2 A → SKAL utløse innen 1 time

**Magnetisk utløsning (kortslutning):**
B-karakteristikk: 3–5 × I_n
- Minimum: 3 × 16 = **48 A** → skal utløse umiddelbart
- Maksimum: 5 × 16 = **80 A** → garantert utløsning

I praksis: Kursen tåler litt over 16 A i kort tid, men ved kortslutning (hundrevis av ampere) bryter sikringen strømmen på millisekunder.`,
    },
    {
      id: 'elektro-data-vg1-5-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom B- og C-karakteristikk for automatsikringer?',
        options: [
          { id: 'a', text: 'B tåler mer strøm enn C', correct: false },
          { id: 'b', text: 'B utløser magnetisk ved 3–5 × I_n, C ved 5–10 × I_n', correct: true },
          { id: 'c', text: 'C brukes i boliger, B brukes i industri', correct: false },
          { id: 'd', text: 'B og C er identiske, bare ulike produsenter', correct: false },
        ],
        solution: 'B-karakteristikk utløser magnetisk ved 3–5 ganger merkestrømmen og brukes i boliger. C-karakteristikk utløser ved 5–10 ganger og brukes der det er høye startstrømmer, som motorer. C er altså mer «tolerant» for høye kortvarige strømmer.',
      },
    },

    // BLOKK 2: Jordfeilbrytere
    {
      id: 'elektro-data-vg1-5-6-def-2',
      type: 'definition',
      title: 'Jordfeilbrytere (RCD)',
      content: `En **jordfeilbryter** (RCD – Residual Current Device) beskytter mot farlig strøm gjennom kroppen ved jordfeil.

**Virkemåte:**
Jordfeilbryteren sammenligner strømmen i faselederen med strømmen i nøytrallederen. Normalt er disse like. Hvis det er forskjell, betyr det at strøm lekker ut en annen vei – typisk gjennom en person eller gjennom isolasjonsfeil til jord.

**Utløsningsstrøm:**
- **30 mA:** Standard for personbeskyttelse (bolig, bad, stikkontakter)
- **300 mA:** Brannvern (industri, hovedfordeling)
- **10 mA:** Ekstra beskyttelse for medisinsk utstyr

**Krav til jordfeilbrytere:**
- Alle kurser i nye boliger skal ha jordfeilbryter (maks 30 mA)
- Baderom og våtrom: Påkrevd
- Utendørs stikkontakter: Påkrevd
- Elbil-lading: Påkrevd (ofte type B RCD)

**Typer:**
- **Type AC:** Reagerer på vekselstrøm-jordfeil. Enklest og billigst.
- **Type A:** Reagerer også på pulserende likestrøm-jordfeil. Standard i nye boliger.
- **Type B:** Reagerer også på ren likestrøm. Brukes for elbil-ladere og inverterbasert utstyr.

**Testknapp:**
Alle jordfeilbrytere har en testknapp som skal trykkes **månedlig** for å verifisere at den fungerer.`,
    },
    {
      id: 'elektro-data-vg1-5-6-example-2',
      type: 'example',
      title: 'Hvordan jordfeilbryteren redder liv',
      problem: 'En person berører en skadet ledning i en vaskemaskin. Fasestrømmen er 5,2 A og nøytralstrømmen er 5,17 A. Vil jordfeilbryteren (30 mA) utløse?',
      solution: `**Beregn differansestrømmen:**
Forskjell = 5,200 − 5,170 = 0,030 A = **30 mA**

**Vurdering:**
Jordfeilbryteren utløser ved 30 mA, så den vil **utløse** og bryte strømmen.

De manglende 30 mA er strøm som går gjennom personen til jord. 30 mA gjennom kroppen kan forårsake hjerteflimmer, men jordfeilbryteren bryter strømmen innen **30 millisekunder** – raskt nok til å forhindre alvorlig skade i de fleste tilfeller.

Uten jordfeilbryter ville 30 mA vært altfor lite til å utløse en vanlig 16 A sikring, og personen ville fått strøm gjennom seg over lengre tid – potensielt dødelig.`,
    },
    {
      id: 'elektro-data-vg1-5-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'middels',
        task: 'Forklar med egne ord hvordan en jordfeilbryter (RCD) fungerer. Hvorfor kan den oppdage farlig lekkasjestrøm som en vanlig sikring ikke reagerer på?',
        solution: 'En jordfeilbryter måler forskjellen mellom strømmen som går ut på faselederen og strømmen som kommer tilbake på nøytrallederen. Normalt er disse identiske. Hvis strøm lekker ut en annen vei (f.eks. gjennom en person til jord), blir det en forskjell. Jordfeilbryteren oppdager denne forskjellen og bryter strømmen. En vanlig sikring reagerer bare på totalstrømmen i kretsen. 30 mA er altfor lite til å utløse en 16 A sikring (den tåler 16 000 mA!), men 30 mA er nok til å drepe et menneske. Derfor er jordfeilbryteren så viktig – den oppdager den lille lekkasjestrømmen som sikringen ikke bryr seg om.',
      },
    },

    // BLOKK 3: Beskyttelsesklasser og IP
    {
      id: 'elektro-data-vg1-5-6-def-3',
      type: 'definition',
      title: 'Beskyttelsesklasser og IP-klassifisering',
      content: `**Beskyttelsesklasser** angir hvordan elektrisk utstyr er konstruert for å beskytte mot elektrisk sjokk:

**Klasse I:**
- Grunnleggende isolasjon + beskyttelsesjord
- Metallkapsling koblet til jord via jordleder (gul/grønn)
- Eksempler: Vaskemaskin, komfyr, brødrister med jordplugg
- Krever jordet stikkontakt

**Klasse II:**
- Dobbel isolasjon eller forsterket isolasjon
- Ingen jording nødvendig (symbolet □ i □)
- Eksempler: Mobiltelefon-lader, hårtørker, boremaskin med dobbelt isolert kapsling
- Trygg selv uten jordet stikkontakt

**Klasse III:**
- Svært lav spenning (SELV – Safety Extra Low Voltage, maks 50 V AC / 120 V DC)
- Forsynt via sikkerhetstransformator
- Eksempler: Leker, LED-belysning 12 V, hagebelysning

**IP-klassifisering (Ingress Protection):**
Angir beskyttelse mot inntrengning av faste gjenstander og vann: **IP XY**

**Første siffer (X) – Faste gjenstander:**
- 0: Ingen beskyttelse
- 2: Finger (>12,5 mm)
- 4: Tynn ledning (>1 mm)
- 5: Støvbeskyttet
- 6: Støvtett

**Andre siffer (Y) – Vann:**
- 0: Ingen beskyttelse
- 4: Sprut fra alle retninger (IPX4)
- 5: Vannstråle (IPX5)
- 7: Midlertidig nedsenking (IPX7)
- 8: Kontinuerlig nedsenking (IPX8)

Eksempler: IP20 (innendørs bryter), IP44 (utendørs stikkontakt), IP67 (undervannsutstyr).`,
    },
    {
      id: 'elektro-data-vg1-5-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-6-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'En utendørs stikkontakt skal tåle regn. Hva er minimum IP-klassifisering?',
        options: [
          { id: 'a', text: 'IP20', correct: false },
          { id: 'b', text: 'IP33', correct: false },
          { id: 'c', text: 'IP44', correct: true },
          { id: 'd', text: 'IP68', correct: false },
        ],
        solution: 'Utendørs stikkontakter krever minimum IP44. Første siffer 4 = beskyttet mot gjenstander >1 mm, andre siffer 4 = beskyttet mot vannsprut fra alle retninger. IP20 er for innendørs bruk. IP68 er for permanent nedsenking og overdimensjonert for dette formålet.',
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-5-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om vern og beskyttelse i elektriske anlegg:

- **Automatsikringer** beskytter mot overbelastning (termisk) og kortslutning (magnetisk)
- B-karakteristikk for boliger, C for motorer, D for transformatorer
- **Jordfeilbrytere (RCD)** oppdager lekkasjestrøm og bryter ved 30 mA – livsviktig personbeskyttelse
- Type A er standard i nye boliger, type B for elbil-ladere
- **Test jordfeilbryteren månedlig** med testknappen
- **Beskyttelsesklasse I:** Jording, **II:** Dobbel isolasjon, **III:** Lavspenning (SELV)
- **IP-klassifisering:** Første siffer = faste gjenstander, andre siffer = vann
- Utendørs: Minimum IP44, baderom: Varierer per sone`,
    },

    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-5-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En eldre bolig fra 1970-tallet har smeltesikringer og ingen jordfeilbrytere. Eieren ønsker å oppgradere sikringsskapet. Forklar hva som bør gjøres, hvilke nye krav som gjelder, og hvilken type jordfeilbryter som trengs for ulike kurser (bad, stikkontakter, elbil-lading).',
        solution: 'Oppgradering: Bytte fra smeltesikringer til automatsikringer (MCB), installere jordfeilbrytere og eventuelt overspenningsvern. Krav for nye boliger (gjelder også ved vesentlige endringer): Alle kurser skal ha jordfeilbryter med maks 30 mA. Jordfeilbryter per kurs: Bad og våtrom: 30 mA type A (minimum), anbefalt for alle stikkontaktkurser. Vanlige stikkontakter: 30 mA type A. Elbil-lading: 30 mA type B (fordi elbil-ladere kan generere likestrøm-jordfeil som type A ikke oppdager). Belysning: 30 mA type A. Brannvern i hovedfordeling: 300 mA jordfeilbryter som overordnet vern. I tillegg: B-karakteristikk automatsikringer for boligkurser, samsvarserklæring fra elektriker, melding til DLE.',
      },
    },
    {
      id: 'elektro-data-vg1-5-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar hva som kan skje hvis jording mangler på et klasse I apparat (f.eks. en vaskemaskin med metallkapsling). Beskriv feilsituasjonen steg for steg og hvordan vern (sikring og jordfeilbryter) ville reagert med og uten jording.',
        solution: 'Uten jording: 1) En ledning løsner inne i vaskemaskinen og berører metallkapslingen. 2) Metallkapslingen får 230 V spenning mot jord, men ingen strøm flyter fordi kretsen ikke er sluttet. 3) Personen berører kapslingen og står på gulvet → strøm flyter gjennom personen til jord. 4) Strømmen gjennom personen kan være 30–230 mA (avhengig av kroppsmotstand og gulvmotstand). 5) Sikringen reagerer ikke (strømmen er altfor liten). 6) Hvis jordfeilbryter er installert, vil den utløse ved 30 mA og redde personen. Med jording: 1) Samme feil oppstår – ledning berører kapsling. 2) Strøm flyter umiddelbart via jordlederen (lav motstand). 3) Høy jordfeilstrøm (hundrevis av ampere) utløser sikringen raskt. 4) Jordfeilbryteren utløser enda raskere (ved 30 mA). 5) Personen som berører kapslingen er beskyttet fordi mesteparten av strømmen går via jordlederen. Konklusjon: Jording + jordfeilbryter gir dobbel beskyttelse. Uten jording er man avhengig av at jordfeilbryteren fungerer.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Automatsikring', definition: 'Tilbakestillbar sikring med termisk og magnetisk utløser.' },
    { term: 'Jordfeilbryter (RCD)', definition: 'Vern som bryter ved lekkasjestrøm til jord, typisk 30 mA.' },
    { term: 'Overspenningsvern', definition: 'Beskytter utstyr mot spenningstopper fra lynnedslag eller svitsjing.' },
    { term: 'Beskyttelsesklasse I', definition: 'Utstyr med grunnleggende isolasjon og beskyttelsesjord.' },
    { term: 'Beskyttelsesklasse II', definition: 'Utstyr med dobbel isolasjon, ingen jording nødvendig.' },
    { term: 'SELV', definition: 'Safety Extra Low Voltage – spenning under 50 V AC, klasse III.' },
    { term: 'IP-klassifisering', definition: 'Angir beskyttelsesgrad mot faste gjenstander og vann (f.eks. IP44).' },
    { term: 'B-karakteristikk', definition: 'Automatsikring som utløser magnetisk ved 3–5 × merkestrøm, for boliger.' },
  ],
};

// ============================================================================
// Kapittel 5.7: Motorer og transformatorer
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_5_7: TextbookChapter = {
  id: 'elektro-data-vg1-5-7',
  courseId: 'elektro-data-vg1',
  chapterNumber: '5.7',
  title: 'Motorer og transformatorer',
  description: 'DC-motorer, AC-motorer, trefasesystem, transformatorer og frekvensomformere.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare virkemåten til elektriske motorer og transformatorer',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-5-7-intro',
      type: 'text',
      content: `## Motorer og transformatorer

Elektriske motorer og transformatorer er to av de viktigste komponentene i det moderne samfunnet. Motorer omdanner elektrisk energi til mekanisk bevegelse – de driver alt fra vifter og pumper til elbiler og industriroboter. Transformatorer overfører energi mellom ulike spenningsnivåer og gjør det mulig å transportere strøm effektivt over lange avstander.

I dette kapittelet skal du lære:
- Prinsippet bak DC-motorer og kommutatorens rolle
- AC-motorer: asynkron- og synkronmotorer
- Trefasesystem og roterende magnetfelt
- Transformatorens oppbygning og virkningsgrad
- Frekvensomformere og motorstyrring`,
    },

    // BLOKK 1: DC-motorer
    {
      id: 'elektro-data-vg1-5-7-def-1',
      type: 'definition',
      title: 'DC-motorer',
      content: `En **DC-motor** omdanner likestrøm til rotasjonsbevegelse ved hjelp av magnetiske krefter.

**Virkemåte:**
Når strøm går gjennom en leder i et magnetfelt, oppstår en kraft (Lorentz-kraften). Denne kraften får rotoren til å rotere.

**Oppbygning:**
- **Stator:** Permanentmagneter eller elektromagneter som skaper et stasjonært magnetfelt
- **Rotor (armatur):** Spolene som roterer i magnetfeltet
- **Kommutator:** Mekanisk bryter som snur strømretningen i rotorspolene for hvert halvt omdreiningsintervall, slik at rotasjonen fortsetter i samme retning
- **Børster:** Karbonblokker som overfører strøm til kommutatoren via kontakt

**Fordeler med DC-motorer:**
- Enkelt å regulere hastigheten (endre spenning)
- Høyt startmoment
- Lett å reversere (bytt polaritet)

**Ulemper:**
- Børster og kommutator slites (gnister, støv)
- Krever regelmessig vedlikehold
- Begrenset hastighet

**Hastighetskontroll:**
- Spenningsvariasjon: Lavere spenning → lavere turtall
- **PWM (pulsbreddemodulasjon):** Slår spenningen raskt av og på. Gjennomsnittlig spenning bestemmer hastigheten. Mest effektiv metode.`,
    },
    {
      id: 'elektro-data-vg1-5-7-example-1',
      type: 'example',
      title: 'PWM-styring av DC-motor',
      problem: 'En DC-motor er koblet til 12 V og styres med PWM. Duty cycle er 75 %. Hva er gjennomsnittlig spenning og omtrentlig hastighet i prosent av makshastighet?',
      solution: `**PWM (Pulsbreddemodulasjon):**
Duty cycle = andel av tiden spenningen er «på».

**Gjennomsnittlig spenning:**
U_snitt = U × duty cycle = 12 V × 0,75 = **9 V**

**Hastighet:**
Siden hastigheten er tilnærmet proporsjonal med spenningen:
Hastighet ≈ 75 % av makshastighet

**Fordelen med PWM** er at transistoren som styrer motoren enten er helt av (ingen strøm, ingen effekttap) eller helt på (lav motstand, lite effekttap). Dette gir svært liten varmetap i styringselektronikken sammenlignet med å bruke en variabel motstand.`,
    },
    {
      id: 'elektro-data-vg1-5-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-7-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er kommutatorens oppgave i en DC-motor?',
        options: [
          { id: 'a', text: 'Å øke spenningen til rotoren', correct: false },
          { id: 'b', text: 'Å snu strømretningen i rotorspolene slik at rotasjonen fortsetter', correct: true },
          { id: 'c', text: 'Å bremse motoren når den skal stoppe', correct: false },
          { id: 'd', text: 'Å beskytte motoren mot overbelastning', correct: false },
        ],
        solution: 'Kommutatoren er en mekanisk bryter som snur strømretningen i rotorspolene for hvert halvt omdreiningsintervall. Uten kommutatoren ville rotoren stoppet etter en halv omdreining fordi kraften ville snu retning.',
      },
    },

    // BLOKK 2: AC-motorer
    {
      id: 'elektro-data-vg1-5-7-def-2',
      type: 'definition',
      title: 'AC-motorer – asynkron og synkron',
      content: `**AC-motorer** drives av vekselstrøm og er de mest brukte motorene i industri og bygninger.

**Asynkronmotor (induksjonsmotor):**
Den vanligste motortypen i verden.

**Virkemåte:**
1. Trefasestrøm i statorviklingene skaper et **roterende magnetfelt**
2. Det roterende feltet induserer strøm i rotoren (som i en transformator)
3. Den induserte strømmen i magnetfeltet skaper en kraft → rotasjon

**Rotor:** «Ekornbur» – kortsluttede metallstaver. Ingen strømtilkobling til rotoren!

**Slip:**
Rotoren roterer alltid litt saktere enn magnetfeltet:
**s = (n_s − n) / n_s × 100 %**
- n_s = synkronhastighet = 60 × f / p (f = frekvens, p = polpar)
- n = rotorens turtall
- Typisk slip: 2–5 %

Uten slip = ingen indusert strøm = ingen kraft. Slip er nødvendig!

**Synkronmotor:**
Rotoren roterer med nøyaktig samme hastighet som magnetfeltet (ingen slip).
- Bruker permanentmagneter eller elektromagneter på rotoren
- Presis hastighetsregulering
- Brukes i applikasjoner der nøyaktig turtall er kritisk

**Fordeler med AC-motorer:**
- Svært robust og pålitelig (ingen børster)
- Billig å produsere
- Minimalt vedlikehold
- Høy virkningsgrad (85–95 %)`,
    },
    {
      id: 'elektro-data-vg1-5-7-example-2',
      type: 'example',
      title: 'Beregne synkronhastighet og slip',
      problem: 'En 4-pols asynkronmotor er tilkoblet 50 Hz trefasenett. Motorens turtall er 1440 rpm. Beregn synkronhastigheten og slippet.',
      solution: `**Steg 1:** Synkronhastighet:
En 4-pols motor har 2 polpar (p = 2)
n_s = 60 × f / p = 60 × 50 / 2 = **1500 rpm**

**Steg 2:** Slip:
s = (n_s − n) / n_s × 100 %
s = (1500 − 1440) / 1500 × 100 %
s = 60 / 1500 × 100 % = **4 %**

Et slip på 4 % er typisk for en belastet asynkronmotor. Ved tomgang vil slippet være mye lavere (under 1 %).`,
    },
    {
      id: 'elektro-data-vg1-5-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-7-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'middels',
        task: 'En 2-pols asynkronmotor er koblet til 50 Hz nett og roterer med 2880 rpm. Beregn synkronhastigheten og slippet. Forklar hvorfor motoren ikke kan rotere med synkronhastighet.',
        hints: ['En 2-pols motor har 1 polpar.', 'Slip = (n_s − n) / n_s × 100 %'],
        solution: 'Synkronhastighet: n_s = 60 × 50 / 1 = 3000 rpm. Slip: s = (3000 − 2880) / 3000 × 100 % = 120/3000 × 100 % = 4 %. Motoren kan ikke rotere med synkronhastighet fordi slip er nødvendig for å indusere strøm i rotoren. Hvis rotoren fulgte magnetfeltet nøyaktig, ville det ikke vært noen relativ bevegelse mellom felt og rotor, ingen indusert strøm, og dermed ingen kraft. Motoren ville saktet ned, slippet øker, strøm induseres igjen, og motoren akselererer – den finner en balanse med noen prosent slip.',
      },
    },

    // BLOKK 3: Transformatorer og frekvensomformere
    {
      id: 'elektro-data-vg1-5-7-def-3',
      type: 'definition',
      title: 'Transformatorer',
      content: `En **transformator** overfører elektrisk energi mellom to kretser via elektromagnetisk induksjon. Den fungerer kun med vekselstrøm.

**Oppbygning:**
- **Primærvikling:** Kobles til strømkilden (N₁ vindinger)
- **Sekundærvikling:** Leverer strøm til lasten (N₂ vindinger)
- **Jernkjerne:** Leder magnetfeltet mellom viklingene med minimalt tap

**Transformatorlikningen:**
**U₁/U₂ = N₁/N₂ = I₂/I₁**

**Typer:**
- **Opptrafo:** N₂ > N₁ → Spenningen øker, strømmen avtar
- **Nedtrafo:** N₂ < N₁ → Spenningen synker, strømmen øker
- **Skilletransformator:** N₁ = N₂, galvanisk skille for sikkerhet

**Virkningsgrad (η):**
η = P_ut / P_inn × 100 %

**Tap i transformatorer:**
- **Kobbertap:** Varme i viklingene (I²R), avhenger av belastning
- **Jerntap:** Virvelstrømmer og hysterese i kjerne, tilnærmet konstante
- Moderne krafttransformatorer: η > 99 %
- Små transformatorer (ladere): η ≈ 80–95 %`,
    },
    {
      id: 'elektro-data-vg1-5-7-example-3',
      type: 'example',
      title: 'Transformator med virkningsgrad',
      problem: 'En transformator har 500 vindinger på primærsiden og 25 vindinger på sekundærsiden. Primærspenningen er 230 V og virkningsgraden er 92 %. Sekundærsiden leverer 8 A. Beregn sekundærspenningen, effekten ut og effekten inn.',
      solution: `**Steg 1:** Sekundærspenning (ideell):
U₂ = U₁ × N₂/N₁ = 230 × 25/500 = 230 × 0,05 = **11,5 V**

**Steg 2:** Effekt ut:
P_ut = U₂ × I₂ = 11,5 × 8 = **92 W**

**Steg 3:** Effekt inn (med virkningsgrad):
η = P_ut / P_inn → P_inn = P_ut / η
P_inn = 92 / 0,92 = **100 W**

**Tap:**
P_tap = P_inn − P_ut = 100 − 92 = **8 W**

Transformatoren bruker 100 W fra nettet, leverer 92 W til lasten, og 8 W går tapt som varme.`,
    },
    {
      id: 'elektro-data-vg1-5-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-7-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'En transformator har 200 vindinger primært og 1000 vindinger sekundært. Primærspenningen er 230 V. Hva er sekundærspenningen?',
        options: [
          { id: 'a', text: '46 V', correct: false },
          { id: 'b', text: '230 V', correct: false },
          { id: 'c', text: '1150 V', correct: true },
          { id: 'd', text: '2300 V', correct: false },
        ],
        solution: 'U₂ = U₁ × N₂/N₁ = 230 × 1000/200 = 230 × 5 = 1150 V. Sekundærsiden har flere vindinger, så dette er en opptrafo som øker spenningen.',
      },
    },

    // BLOKK 4: Frekvensomformere
    {
      id: 'elektro-data-vg1-5-7-def-4',
      type: 'definition',
      title: 'Frekvensomformere (VFD)',
      content: `En **frekvensomformer** (VFD – Variable Frequency Drive) styrer hastigheten til AC-motorer ved å variere frekvensen og spenningen.

**Virkemåte (tre trinn):**
1. **Likeretter:** Konverterer AC (50 Hz) til DC
2. **Mellomkrets:** Glatter ut DC-spenningen (kondensatorer)
3. **Vekselretter (inverter):** Lager ny AC med variabel frekvens og spenning

**Hvorfor variere frekvensen?**
Synkronhastigheten til en AC-motor: n_s = 60 × f / p
- Lavere frekvens → lavere hastighet
- Høyere frekvens → høyere hastighet
- Spenningen justeres proporsjonalt (U/f = konstant) for å opprettholde motorens moment

**Fordeler med frekvensomformer:**
- **Energibesparelse:** Pumper og vifter bruker effekt proporsjonalt med n³ – halvert hastighet = 1/8 effekt!
- **Myk start:** Gradvis oppstart uten høye startstrømmer
- **Presis hastighetskontroll:** Nøyaktig turtall i alle driftspunkter
- **Bremsing:** Regenerativ bremsing kan mate energi tilbake

**Bruksområder:**
- Ventilasjonsanlegg og kjøleanlegg
- Pumper (vann, varme)
- Transportbånd
- Heiser og rulletrapper
- Elbiler (AC-motordrift)`,
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-5-7-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om elektriske motorer og transformatorer:

- **DC-motorer** bruker kommutator og børster, enkel hastighetsregulering med PWM
- **AC asynkronmotorer** har roterende magnetfelt og ekornburrotor, krever slip for å fungere
- **Slip** = (n_s − n) / n_s, typisk 2–5 %
- **Synkronmotorer** roterer med magnetfeltets hastighet (ingen slip)
- **Trefasesystem** med 50 Hz skaper roterende magnetfelt for motordrift
- **Transformatorer** overfører energi via induksjon: U₁/U₂ = N₁/N₂
- Tap: Kobbertap (viklingene) og jerntap (kjernen)
- **Frekvensomformere** styrer AC-motorhastighet ved å variere frekvens og spenning
- Energibesparelse: Halvert hastighet = 1/8 effektforbruk for pumper og vifter`,
    },

    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-5-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-7-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En fabrikk bruker en viftemotor som kjører på full hastighet (1450 rpm) hele dagen. Effektforbruket er 5 kW. Ingeniøren foreslår å installere en frekvensomformer og kjøre viften på 70 % hastighet, som er tilstrekkelig for behovet. Beregn nytt effektforbruk (effekten er proporsjonal med n³), daglig energibesparelse (drift 10 timer) og årlig besparelse i kroner (250 driftsdager, strømpris 1,50 kr/kWh).',
        solution: 'Nytt effektforbruk: P_ny = P × (n_ny/n)³ = 5 × 0,70³ = 5 × 0,343 = 1,715 kW. Daglig besparelse: ΔP = 5 − 1,715 = 3,285 kW. Daglig energi: 3,285 × 10 = 32,85 kWh. Årlig besparelse: 32,85 × 250 = 8212,5 kWh. Årlig pengebesparelse: 8212,5 × 1,50 = 12 319 kr. En reduksjon på 30 % i hastighet gir hele 65,7 % reduksjon i effektforbruk – dette viser den enorme energibesparelsen ved å bruke frekvensomformere på vifter og pumper.',
      },
    },
    {
      id: 'elektro-data-vg1-5-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-7-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign DC-motorer og AC asynkronmotorer. Diskuter fordeler, ulemper, virkningsgrad og typiske bruksområder. Hvorfor har AC-motorer i stor grad erstattet DC-motorer i industrien, og hva var det som muliggjorde dette skiftet?',
        solution: 'DC-motorer: Fordeler: Enkel hastighetsregulering (spenning), høyt startmoment, lett reversering. Ulemper: Børster slites, gnister, krever vedlikehold, dyrere å produsere, begrenset hastighet. Virkningsgrad: 75–90 %. Bruksområder: Batteridrevne verktøy, robotikk, småskala applikasjoner. AC asynkronmotorer: Fordeler: Ingen børster (robust), billig, minimalt vedlikehold, lang levetid, høy virkningsgrad 85–95 %. Ulemper: Var vanskelig å hastighetsregulere, krever trefase for høy effekt, lavere startmoment. Bruksområder: Industrimotorer, pumper, vifter, kompressorer, transportbånd. Skiftet fra DC til AC ble muliggjort av frekvensomformeren. Før frekvensomformeren var DC-motorer overlegne fordi hastigheten var enkel å styre. Frekvensomformeren gir AC-motorer like god (eller bedre) hastighetskontroll, og da er AC-motorens fordeler (robust, billig, vedlikeholdsfri) avgjørende.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'DC-motor', definition: 'Motor drevet av likestrøm, bruker kommutator og børster.' },
    { term: 'Kommutator', definition: 'Mekanisk bryter som snur strømretningen i rotorspolene.' },
    { term: 'PWM', definition: 'Pulsbreddemodulasjon – styrer gjennomsnittlig spenning ved raske av/på-svitsjinger.' },
    { term: 'Asynkronmotor', definition: 'AC-motor der rotoren roterer saktere enn magnetfeltet (slip).' },
    { term: 'Slip', definition: 'Forskjellen mellom magnetfeltets og rotorens hastighet, i prosent.' },
    { term: 'Synkronmotor', definition: 'AC-motor der rotoren følger magnetfeltets hastighet nøyaktig.' },
    { term: 'Transformator', definition: 'Overfører energi mellom kretser via elektromagnetisk induksjon.' },
    { term: 'Frekvensomformer', definition: 'Styrer AC-motorhastighet ved å variere frekvens og spenning.' },
    { term: 'Virkningsgrad', definition: 'Forholdet mellom nyttig utlevert effekt og tilført effekt (η = P_ut/P_inn).' },
  ],
};

// ============================================================================
// Eksportarray
// ============================================================================

export const CHAPTERS_ELEKTRO_DATA_VG1_KAP5_NY = [
  CHAPTER_ELEKTRO_DATA_VG1_5_3,
  CHAPTER_ELEKTRO_DATA_VG1_5_4,
  CHAPTER_ELEKTRO_DATA_VG1_5_5,
  CHAPTER_ELEKTRO_DATA_VG1_5_6,
  CHAPTER_ELEKTRO_DATA_VG1_5_7,
];
