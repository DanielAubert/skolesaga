/**
 * Naturbruk VG1 - Tekstbokinnhold DEL 3
 *
 * Kapittel 5: Akvakultur og fiskeri (5.1-5.6)
 * Kapittel 6: Utmark, jakt og friluftsliv (6.1-6.7)
 *
 * Dekker LK20 læreplan for Naturbruk på VG1
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 5: Akvakultur og fiskeri
// ============================================================================

// ----------------------------------------------------------------------------
// 5.1 Akvakultur i Norge
// ----------------------------------------------------------------------------

export const CHAPTER_NATURBRUK_VG1_5_1: TextbookChapter = {
  id: 'naturbruk-vg1-5-1',
  courseId: 'naturbruk-vg1',
  chapterNumber: '5.1',
  title: 'Akvakultur i Norge',
  description: 'Oversikt over oppdrettsnæringen i Norge, de viktigste artene og næringens betydning for økonomi og sysselsetting.',
  estimatedMinutes: 50,
  competenceGoals: [
    'planlegge, gjennomføre og vurdere naturbaserte næringsaktiviteter og beskrive en tilhørende verdikjede',
  ],
  content: [
    {
      id: 'naturbruk-vg1-5-1-intro',
      type: 'text',
      content: `## Norges blå revolusjon

Norge er en av verdens ledende sjømatnasjoner, og akvakultur har blitt en av våre viktigste eksportnæringer. Med en kystlinje på over 100 000 kilometer, dype fjorder med rent, kaldt vann og stabile temperaturer, har vi ideelle forhold for oppdrett av fisk og andre marine organismer.

Oppdrettsnæringen har utviklet seg fra småskala forsøk på 1970-tallet til en høyteknologisk industri som eksporterer sjømat til over 100 land. I dag er sjømat Norges nest største eksportvare etter olje og gass, med en eksportverdi på over 150 milliarder kroner årlig.

**Hva er akvakultur?**

Akvakultur er kontrollert oppdrett av vannlevende organismer. Dette omfatter fisk, skalldyr, bløtdyr og marine planter som tang og tare. I motsetning til tradisjonelt fiske, der vi høster fra ville bestander, produserer vi i akvakultur organismene selv under kontrollerte forhold.

**Hvorfor er akvakultur viktig?**

- Bidrar til global matforsyning med sunn sjømat
- Skaper arbeidsplasser langs hele kysten
- Genererer store eksportinntekter for Norge
- Kan være mer ressurseffektivt enn landbasert kjøttproduksjon
- Gir forutsigbar tilgang på sjømat hele året`,
    },
    {
      id: 'naturbruk-vg1-5-1-def-1',
      type: 'definition',
      title: 'Akvakultur',
      content: `Akvakultur er kontrollert oppdrett av vannlevende organismer som fisk, skalldyr, bløtdyr og alger. Oppdrettet skjer i merder i sjøen, kar på land, eller i dammer og innsjøer. Formålet er å produsere mat, fôr eller andre produkter på en effektiv og bærekraftig måte.`,
    },
    {
      id: 'naturbruk-vg1-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er akvakultur, og hvorfor er det viktig for Norge?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva akvakultur er med egne ord.',
            solution: 'Akvakultur er kontrollert oppdrett av vannlevende organismer som fisk, skalldyr og alger. Det foregår i merder i sjøen, kar på land eller i dammer.',
          },
          {
            label: 'b',
            task: 'Nevn tre grunner til at akvakultur er viktig for Norge.',
            solution: 'Akvakultur er viktig fordi det: 1) Gir store eksportinntekter (over 150 milliarder kr), 2) Skaper arbeidsplasser langs kysten, 3) Bidrar til global matforsyning med sunn sjømat.',
          },
        ],
        solution: 'Akvakultur er oppdrett av vannlevende organismer og er viktig for Norge på grunn av eksportinntekter, arbeidsplasser og bidrag til global matforsyning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-5-1-text-1',
      type: 'text',
      content: `## De viktigste oppdrettsartene i Norge

**Atlantisk laks (Salmo salar)**

Laksen er den desidert viktigste arten i norsk akvakultur og utgjør over 90% av produksjonsvolumet. Norge produserer årlig rundt 1,5 millioner tonn oppdrettslaks, noe som gjør oss til verdens største lakseeksportør.

Laksen trives godt i norske fjorder med:
- Vanntemperatur mellom 8-14°C
- God vanngjennomstrømning
- Tilstrekkelig oksygennivå
- Beskyttelse mot ekstreme værforhold

**Regnbueørret (Oncorhynchus mykiss)**

Regnbueørreten er den nest største oppdrettsarten i Norge. Den ligner på laksen i biologi og oppdrettsmetoder, men har noen forskjeller i smak og tekstur. Årlig produksjon er rundt 80 000-100 000 tonn.

**Andre oppdrettsarter:**

| Art | Produksjon | Særtrekk |
|-----|------------|----------|
| Torsk | Under utvikling | Utfordrende, men lovende |
| Kveite | Liten skala | Høy pris, nisjeprodukt |
| Røye | Liten skala | Ferskvann, kaldt vann |
| Blåskjell | Økende | Filtrerer vann, miljøvennlig |
| Østers | Liten skala | Delikatesse |
| Tang/tare | Voksende | Ny næring, mange bruksområder |`,
    },
    {
      id: 'naturbruk-vg1-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilke oppdrettsarter er viktigst i Norge?',
        solution: 'Atlantisk laks er den viktigste arten og utgjør over 90% av produksjonen med ca. 1,5 millioner tonn årlig. Regnbueørret er nummer to med 80 000-100 000 tonn. Andre arter inkluderer torsk, kveite, røye, blåskjell, østers og tang/tare.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-5-1-def-2',
      type: 'definition',
      title: 'Merd',
      content: `En merd er en innhegning i sjøen som holder oppdrettsfisken på plass. Moderne merder består av et flytende rammeverk med en not (netting) som henger ned i vannet. En typisk laksemerd kan være 50-60 meter i diameter og 30-50 meter dyp, og romme flere hundre tusen fisk.`,
    },
    {
      id: 'naturbruk-vg1-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er en merd, og hva er typiske dimensjoner?',
        solution: 'En merd er en innhegning i sjøen som holder oppdrettsfisken på plass. Den består av et flytende rammeverk med en not som henger ned i vannet. Typiske dimensjoner er 50-60 meter i diameter og 30-50 meter dybde, og kan romme flere hundre tusen fisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-5-1-text-2',
      type: 'text',
      content: `## Næringens betydning for Norge

**Økonomisk betydning**

Sjømatnæringen er en av Norges viktigste eksportnæringer:
- Eksportverdi på over 150 milliarder kroner årlig
- Norge eksporterer sjømat til mer enn 100 land
- De viktigste markedene er EU, USA og Asia
- Laks utgjør hovedparten av eksporten

**Sysselsetting**

Oppdrettsnæringen skaper arbeidsplasser i hele landet:
- Direkte sysselsetting: Ca. 8 000 årsverk i oppdrett
- Indirekte sysselsetting: Ca. 30 000 årsverk i leverandørindustri
- Ringvirkninger i lokalsamfunn langs kysten
- Bidrar til bosetting i distriktene

**Geografisk fordeling**

Oppdrettsanlegg finnes langs hele kysten, men er særlig konsentrert i:
- Vestlandet (Hordaland, Sogn og Fjordane, Møre og Romsdal)
- Midt-Norge (Trøndelag)
- Nord-Norge (Nordland, Troms, Finnmark)

Disse områdene har gunstige naturforhold med dype fjorder, god vannkvalitet og beskyttede lokaliteter.`,
    },
    {
      id: 'naturbruk-vg1-5-1-def-3',
      type: 'definition',
      title: 'Konsesjon',
      content: `En konsesjon er en tillatelse fra myndighetene til å drive oppdrett på en bestemt lokalitet. Konsesjonen regulerer hvor mye fisk som kan produseres (målt i maksimalt tillatt biomasse - MTB) og hvilke miljøkrav som gjelder. I Norge er det strenge krav for å få og beholde en oppdrettskonsesjon.`,
    },
    {
      id: 'naturbruk-vg1-5-1-text-3',
      type: 'text',
      content: `## Verdikjeden i oppdrettsnæringen

Oppdrettsnæringen omfatter mange ledd fra avl til ferdig produkt:

**1. Avl og genetikk**
- Utvikling av bedre fiskestammer
- Seleksjon for rask vekst, sykdomsresistens og kvalitet
- Avlsselskaper som AquaGen og Mowi Genetics

**2. Settefiskproduksjon**
- Klekking av rogn i ferskvann
- Oppfôring av yngel til smolt
- Smoltifisering (tilpasning til saltvann)

**3. Matfiskproduksjon**
- Utsett av smolt i sjømerder
- Fôring og stell i 12-24 måneder
- Overvåking av helse og miljø

**4. Slakting og foredling**
- Humant avliving og prosessering
- Filetering, røyking, pakking
- Kvalitetskontroll

**5. Salg og distribusjon**
- Eksport til verdensmarkedet
- Logistikk og transport
- Markedsføring

**6. Leverandørindustri**
- Fôrprodusenter (Skretting, Biomar)
- Teknologileverandører
- Tjenesteleverandører`,
    },
    {
      id: 'naturbruk-vg1-5-1-def-4',
      type: 'definition',
      title: 'Biomasse',
      content: `Biomasse i akvakultur er den totale vekten av levende fisk i et anlegg på et gitt tidspunkt. Myndighetene regulerer produksjonen gjennom maksimalt tillatt biomasse (MTB), som angir hvor mye fisk (i tonn) et anlegg kan ha stående til enhver tid.`,
    },
    {
      id: 'naturbruk-vg1-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv verdikjeden i oppdrettsnæringen fra avl til salg.',
        subTasks: [
          {
            label: 'a',
            task: 'List opp de seks hovedleddene i verdikjeden.',
            solution: '1. Avl og genetikk, 2. Settefiskproduksjon, 3. Matfiskproduksjon, 4. Slakting og foredling, 5. Salg og distribusjon, 6. Leverandørindustri.',
          },
          {
            label: 'b',
            task: 'Forklar kort hva som skjer i settefiskproduksjonen.',
            solution: 'I settefiskproduksjonen klekkes rogn i ferskvann, yngelen fôres opp til smolt, og fisken gjennomgår smoltifisering der den tilpasses saltvann.',
          },
        ],
        solution: 'Verdikjeden omfatter avl, settefisk, matfisk, slakting/foredling, salg/distribusjon og leverandørindustri.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-5-1-tip-1',
      type: 'tip',
      title: 'Norsk sjømat - et kvalitetsstempel',
      content: `Norsk oppdrettslaks har et godt omdømme internasjonalt på grunn av strenge krav til mattrygghet, dyrevelferd og miljø. Merkeordninger som «Seafood from Norway» brukes aktivt i markedsføringen. Den rene, kalde sjøen og profesjonell drift gir fisk av høy kvalitet som er etterspurt over hele verden.`,
    },
    {
      id: 'naturbruk-vg1-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Et oppdrettsanlegg i praksis',
      problem: 'Hvordan ser hverdagen ut på et moderne lakseoppdrettsanlegg?',
      solution: `Et typisk oppdrettsanlegg har 6-10 merder, hver med 150 000-200 000 fisk. Daglige oppgaver inkluderer:

**Morgen:**
- Sjekke vannkvalitet (oksygen, temperatur)
- Kontrollere at fôringssystemet fungerer
- Observere fiskens atferd og appetitt

**Formiddag:**
- Fôring via automatiske fôringsanlegg
- Kameraovervåking av fiskens spiseatferd
- Registrering av fôrforbruk

**Ettermiddag:**
- Dødfiskhåndtering og registrering
- Notinspeksjon og vedlikehold
- Rapportering til myndighetene

**Ukentlige oppgaver:**
- Lusetelling og behandling ved behov
- Dykkerinspeksjon av nøter
- Prøvetaking for sykdomsovervåking

Moderne anlegg bruker avansert teknologi som undervannskameraer, sensorer og automatiserte fôringssystemer for å optimalisere driften.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'naturbruk-vg1-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Diskuter hvorfor norske fjorder er godt egnet for lakseoppdrett.',
        solution: 'Norske fjorder er godt egnet fordi de har: 1) Vanntemperatur mellom 8-14°C som passer laksen, 2) God vanngjennomstrømning som gir oksygen og tar bort avfall, 3) Rent, kaldt vann med høy kvalitet, 4) Beskyttelse mot ekstreme værforhold, 5) Dype, beskyttede lokaliteter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 5.2 Laksens livssyklus i oppdrett
// ----------------------------------------------------------------------------

export const CHAPTER_NATURBRUK_VG1_5_2: TextbookChapter = {
  id: 'naturbruk-vg1-5-2',
  courseId: 'naturbruk-vg1',
  chapterNumber: '5.2',
  title: 'Laksens livssyklus i oppdrett',
  description: 'Fra stamfisk og rogn til slakteklar fisk, hele produksjonssyklusen for atlantisk laks i norsk oppdrett.',
  estimatedMinutes: 60,
  competenceGoals: [
    'stelle dyr eller fisk med respekt for etiske retningslinjer og kunnskaper om dyrevelferd, dyrehelse og artenes biologi',
    'utføre arbeidsoppgaver i ulike deler av verdikjeden basert på gjeldende regler og standarder',
  ],
  content: [
    {
      id: 'naturbruk-vg1-5-2-intro',
      type: 'text',
      content: `## Fra rogn til matfisk

Lakseoppdrett er en kompleks prosess som følger fiskens naturlige livssyklus, men under kontrollerte forhold. Å forstå denne syklusen er grunnleggende for å kunne stelle fisken på en god måte og sikre god dyrevelferd gjennom hele produksjonen.

I naturen lever laksen som yngel i elver i 2-4 år før den vandrer ut i havet. Der tilbringer den 1-3 år før den returnerer til elven for å gyte. I oppdrett har vi optimalisert denne prosessen slik at vi kan produsere slakteklar laks på 2-3 år totalt.

**Hovedfasene i lakseoppdrett:**
1. Stamfisk og stryking
2. Rogn og klekking
3. Startfôring av yngel
4. Parr-stadiet
5. Smoltifisering
6. Matfiskproduksjon i sjø
7. Slakting

Hver fase har sine spesifikke krav til miljø, fôring og stell.`,
    },
    {
      id: 'naturbruk-vg1-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv de syv hovedfasene i lakseoppdrett.',
        solution: 'De syv fasene er: 1. Stamfisk og stryking, 2. Rogn og klekking, 3. Startfôring av yngel, 4. Parr-stadiet, 5. Smoltifisering, 6. Matfiskproduksjon i sjø, 7. Slakting.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-5-2-def-1',
      type: 'definition',
      title: 'Stamfisk',
      content: `Stamfisk er voksne, utvalgte fisk som brukes til avl. De velges ut basert på ønskede egenskaper som rask vekst, god helse, sykdomsresistens og filétkvalitet. Stamfisken holdes i egne anlegg under streng kontroll for å sikre god genetikk og frihet fra sykdommer.`,
    },
    {
      id: 'naturbruk-vg1-5-2-text-1',
      type: 'text',
      content: `## Fase 1: Stamfisk og stryking

**Utvelgelse av stamfisk**

Stamfisk velges ut gjennom systematiske avlsprogrammer. Viktige egenskaper som selekteres for:
- Rask vekst
- God fôrutnyttelse
- Sykdomsresistens
- Sen kjønnsmodning
- God filétkvalitet
- Motstandskraft mot lakselus

**Stryking**

Stryking er prosessen der rogn og melke (sperm) tas ut av fisken:

1. **Hunfisken** bedøves og rognen «strykes» ut ved forsiktig press på buken
2. **Hannfisken** behandles på samme måte for å få ut melke
3. Rogn og melke blandes for befruktning
4. Befruktede egg legges til inkubering

En hunnlaks kan gi 10 000-20 000 rogn, avhengig av størrelse.

**Tidspunkt**

Stryking skjer vanligvis om høsten (oktober-desember) når laksen naturlig ville gytt. Moderne avlsselskaper kan også produsere «off-season»-rogn ved å manipulere lys og temperatur.`,
    },
    {
      id: 'naturbruk-vg1-5-2-def-2',
      type: 'definition',
      title: 'Smoltifisering',
      content: `Smoltifisering er den fysiologiske prosessen der laksen tilpasser seg fra ferskvann til saltvann. Under smoltifiseringen endres fiskens gjeller, nyrer og hud for å kunne regulere salt- og vannbalansen i sjøvann. Fisken får også sølvfarget utseende og blir mer strømlinjeformet.`,
    },
    {
      id: 'naturbruk-vg1-5-2-text-2',
      type: 'text',
      content: `## Fase 2-4: Fra rogn til parr

**Inkubering (ca. 60 dager)**

- Befruktet rogn legges i klekkebakker med rennende vann
- Temperaturen holdes på 6-8°C
- Rognen utvikler seg og øynene blir synlige (øyerogn)
- Etter ca. 500 døgngrader klekker rognen

**Plommesekklarver (ca. 4-6 uker)**

- Nyklekket yngel har plommesekk med næring
- Ligger i ro og bruker næringen i plommesekken
- Kalles også «alevin»
- Trenger ikke fôring i denne fasen

**Startfôring**

- Når plommesekken er brukt opp, starter fôringen
- Yngelen lærer å ta imot fôr
- Kritisk fase med høy dødelighet hvis ikke gjort riktig
- Krever riktig fôrstørrelse og fôringsfrekvens

**Parr-stadiet (6-12 måneder)**

- Yngelen vokser i ferskvann
- Har karakteristiske «parrmerker» (mørke striper)
- Fôres intensivt for god vekst
- Sorteres etter størrelse
- Vaksineres mot vanlige sykdommer`,
    },
    {
      id: 'naturbruk-vg1-5-2-def-3',
      type: 'definition',
      title: 'Døgngrader',
      content: `Døgngrader er et mål på akkumulert temperatur over tid, beregnet som summen av daglig gjennomsnittstemperatur. For eksempel: 10 dager ved 8°C = 80 døgngrader. Laksens utvikling styres av temperatur, og døgngrader brukes til å forutsi når rogn klekker eller når fisken er klar for smoltifisering.`,
    },
    {
      id: 'naturbruk-vg1-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er døgngrader, og hvordan brukes det i oppdrett?',
        solution: 'Døgngrader er summen av daglig gjennomsnittstemperatur over tid (f.eks. 10 dager ved 8°C = 80 døgngrader). Det brukes til å forutsi når rogn klekker (ca. 500 døgngrader) eller når fisken er klar for smoltifisering, fordi laksens utvikling styres av temperatur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-5-2-text-3',
      type: 'text',
      content: `## Fase 5: Smoltifisering

Smoltifiseringen er en avgjørende overgang i laksens liv:

**Fysiologiske endringer:**
- Gjellene utvikler evne til å skille ut salt
- Nyrene tilpasses til å spare vann
- Huden blir mer motstandsdyktig mot saltvann
- Kroppen blir mer strømlinjeformet
- Fargen endres fra parr-merker til sølvblank

**Triggere for smoltifisering:**
- Økende daglengde (lys)
- Temperaturøkning
- Fiskens størrelse (vanligvis 60-100 gram)

**Smoltvindu**

Fisken er kun klar for sjøvann i en begrenset periode («smoltvinduet»). Hvis den ikke settes ut i sjøen i tide, kan den desmoltifisere og miste evnen til å tåle saltvann.

**Testing av smoltifisering:**
- Saltvannstest (måle overlevelse i saltvann)
- Måling av ATPase-aktivitet i gjellene
- Visuell vurdering (sølvfarge, løse skjell)

**Transport til sjø**

Smolten transporteres fra settefiskanlegget til sjømerder i:
- Brønnbåter (spesialbygde skip)
- Tankbiler for kortere avstander
- Transporten er stressende og krever god planlegging`,
    },
    {
      id: 'naturbruk-vg1-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er smoltifisering, og hvorfor er den viktig?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva som skjer med fisken under smoltifisering.',
            solution: 'Under smoltifisering tilpasses laksen fra ferskvann til saltvann. Gjellene utvikler evne til å skille ut salt, nyrene tilpasses til å spare vann, huden blir mer motstandsdyktig, kroppen blir strømlinjeformet og fargen endres til sølvblank.',
          },
          {
            label: 'b',
            task: 'Hva menes med «smoltvinduet»?',
            solution: 'Smoltvinduet er den begrensede perioden der fisken er klar for sjøvann. Hvis den ikke settes ut i tide, kan den desmoltifisere og miste evnen til å tåle saltvann.',
          },
        ],
        solution: 'Smoltifisering er tilpasningen fra ferskvann til saltvann, og smoltvinduet er den kritiske perioden for utsett.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-5-2-text-4',
      type: 'text',
      content: `## Fase 6: Matfiskproduksjon i sjø

**Utsett**

- Smolt på 60-150 gram settes ut i merder
- Gradvis tilvenning til nytt miljø
- Tett oppfølging de første ukene

**Vekstfasen (12-24 måneder)**

I sjøen vokser laksen fra smolt til slaktestørrelse:

| Alder etter utsett | Typisk vekt |
|-------------------|-------------|
| Utsett | 60-150 g |
| 6 måneder | 1-2 kg |
| 12 måneder | 3-4 kg |
| 18 måneder | 4-5 kg |
| 24 måneder | 5-6 kg |

**Daglig stell:**
- Fôring (automatisk eller manuelt)
- Overvåking av appetitt og atferd
- Kontroll av vannkvalitet
- Dødfiskhåndtering
- Lusetelling og behandling

**Fôring**

Laksen fôres med spesiallaget fiskefôr som inneholder:
- Protein (fiskemel, planteprotein)
- Fett (fiskeolje, vegetabilsk olje)
- Karbohydrater
- Vitaminer og mineraler
- Astaxanthin (gir rød farge)

Fôrfaktoren (kg fôr per kg tilvekst) er typisk 1,1-1,3.`,
    },
    {
      id: 'naturbruk-vg1-5-2-def-4',
      type: 'definition',
      title: 'Fôrfaktor',
      content: `Fôrfaktor (FCR - Feed Conversion Ratio) er et mål på hvor effektivt fisken utnytter fôret. Den beregnes som kg fôr brukt delt på kg tilvekst. En fôrfaktor på 1,2 betyr at det trengs 1,2 kg fôr for å produsere 1 kg fisk. Laks har svært god fôrutnyttelse sammenlignet med andre husdyr.`,
    },
    {
      id: 'naturbruk-vg1-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv hvordan laksen fôres og hva fôret inneholder.',
        solution: 'Laksen fôres med spesiallaget fiskefôr som inneholder protein (fiskemel, planteprotein), fett (fiskeolje, vegetabilsk olje), karbohydrater, vitaminer og mineraler, samt astaxanthin som gir rød farge. Fôringen skjer automatisk eller manuelt, og fôrfaktoren er typisk 1,1-1,3 kg fôr per kg tilvekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-5-2-text-5',
      type: 'text',
      content: `## Fase 7: Slakting

**Forberedelse**
- Fisken sultes i 1-2 uker før slakting
- Tømmer tarmen og gir bedre kvalitet
- Reduserer stress under transport

**Slakteprosessen**

1. **Trenging**: Fisken samles i en del av merden
2. **Pumping**: Overføres til brønnbåt
3. **Transport**: Fraktes til slakteriet
4. **Bedøving**: Elektrisk eller CO₂-bedøving
5. **Avliving**: Bløgging (kutting av gjeller)
6. **Utblødning**: Fisken blør ut i istank
7. **Sløying**: Innvoller fjernes
8. **Kjøling**: Rask nedkjøling til 0°C

**Videreforedling**

Etter sløying kan fisken:
- Selges som hel fisk (rund)
- Fileteres og pakkes
- Røykes
- Fryses
- Bearbeides til andre produkter

**Kvalitetskontroll**

Hver fisk vurderes for:
- Farge (måles med SalmoFan-fargeviften)
- Tekstur og fasthet
- Eventuelle skader eller sykdom
- Fettinnhold
- Størrelse og vekt`,
    },
    {
      id: 'naturbruk-vg1-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Beskriv slakteprosessen fra trenging til ferdig produkt.',
        solution: 'Slakteprosessen: 1. Trenging - fisken samles i merden, 2. Pumping til brønnbåt, 3. Transport til slakteri, 4. Bedøving (elektrisk eller CO₂), 5. Avliving ved bløgging, 6. Utblødning i istank, 7. Sløying, 8. Rask nedkjøling til 0°C. Deretter kan fisken selges hel, fileteres, røykes eller fryses.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-5-2-tip-1',
      type: 'tip',
      title: 'Dyrevelferd i alle ledd',
      content: `God dyrevelferd er ikke bare etisk viktig, det gir også bedre produksjonsresultater. Stresset fisk vokser dårligere, er mer utsatt for sykdom og gir dårligere kvalitet ved slakting. Derfor legger oppdretterne stor vekt på skånsom håndtering, riktig tetthet i merdene og god vannkvalitet gjennom hele produksjonssyklusen.`,
    },
    {
      id: 'naturbruk-vg1-5-2-example-1',
      type: 'example',
      title: 'Eksempel: Tidslinjen for en oppdrettslaks',
      problem: 'Hvor lang tid tar det fra befruktning til slakteklar fisk?',
      solution: `**Tidslinje for en typisk oppdrettslaks:**

| Fase | Varighet | Akkumulert tid |
|------|----------|----------------|
| Inkubering (rogn) | ~60 dager | 2 måneder |
| Plommesekklarve | ~6 uker | 3,5 måneder |
| Startfôring og yngel | ~2 måneder | 5,5 måneder |
| Parr i ferskvann | ~8 måneder | 13,5 måneder |
| Smoltifisering | ~2 måneder | 15,5 måneder |
| Matfisk i sjø | ~14 måneder | 29,5 måneder |

**Total tid: Ca. 2,5 år fra befruktning til slakting**

I denne perioden vokser laksen fra et lite egg på noen millimeter til en fisk på 4-6 kg. Dette er betydelig raskere enn i naturen, der laksen bruker 4-6 år på samme vekst.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'naturbruk-vg1-5-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hvorfor er god dyrevelferd viktig for produksjonsresultatene i lakseoppdrett?',
        solution: 'God dyrevelferd gir bedre produksjonsresultater fordi stresset fisk vokser dårligere, er mer utsatt for sykdom og gir dårligere kvalitet ved slakting. Derfor legges det vekt på skånsom håndtering, riktig tetthet i merdene og god vannkvalitet gjennom hele produksjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 5.3 Fiskehelse og miljøutfordringer
// ----------------------------------------------------------------------------

export const CHAPTER_NATURBRUK_VG1_5_3: TextbookChapter = {
  id: 'naturbruk-vg1-5-3',
  courseId: 'naturbruk-vg1',
  chapterNumber: '5.3',
  title: 'Fiskehelse og miljøutfordringer',
  description: 'Lakselus, sykdommer, rømming og miljøpåvirkning fra oppdrett, samt tiltak for å løse utfordringene.',
  estimatedMinutes: 55,
  competenceGoals: [
    'stelle dyr eller fisk med respekt for etiske retningslinjer og kunnskaper om dyrevelferd, dyrehelse og artenes biologi',
    'prøve ut driftsmetoder og vurdere dem opp mot tradisjon, etikk, kvalitetskrav og miljøkonsekvenser',
  ],
  content: [
    {
      id: 'naturbruk-vg1-5-3-intro',
      type: 'text',
      content: `## Utfordringer i moderne akvakultur

Selv om norsk oppdrettsnæring er verdensledende, står den overfor betydelige utfordringer knyttet til fiskehelse og miljøpåvirkning. Disse utfordringene må løses for at næringen skal kunne vokse på en bærekraftig måte.

De største utfordringene er:
- **Lakselus** - en parasitt som angriper laks og ørret
- **Sykdommer** - virus- og bakterieinfeksjoner
- **Rømming** - oppdrettsfisk som unnslipper til naturen
- **Miljøpåvirkning** - utslipp og påvirkning av sjøbunn

Å forstå disse utfordringene og tiltakene som brukes for å møte dem, er sentralt for alle som arbeider i næringen.`,
    },
    {
      id: 'naturbruk-vg1-5-3-def-1',
      type: 'definition',
      title: 'Lakselus',
      content: `Lakselus (Lepeophtheirus salmonis) er et lite krepsdyr som lever som parasitt på laks og ørret. Den fester seg på fiskens skinn og spiser slim, hud og blod. I store mengder kan lakselus gi alvorlige sår, svekke fisken og føre til dødelighet. Lakselus er den største helseutfordringen i norsk oppdrettsnæring.`,
    },
    {
      id: 'naturbruk-vg1-5-3-text-1',
      type: 'text',
      content: `## Lakselus - næringens største utfordring

**Livssyklus**

Lakselusen har en kompleks livssyklus:
1. **Nauplius** - frittsvømmende larve (klekker fra egg)
2. **Copepoditt** - smittsom larve som finner vert
3. **Chalimus** - festet på fisken
4. **Preadult og adult** - bevegelig på fisken, formerer seg

**Skadevirkninger**

- Spiser slim, hud og blod fra fisken
- Gir sår som kan bli infisert
- Svekker fiskens immunforsvar
- Kan føre til dødelighet ved høye nivåer
- Smitter til villfisk (laks og sjøørret)

**Hvorfor er lakselus et problem?**

I oppdrettsmerder med mange fisk tett sammen, kan lakselus formere seg raskt. Lusene kan også spre seg til vill laksefisk, noe som truer ville bestander. Myndighetene har derfor satt strenge grenser for hvor mye lakselus som er tillatt.

**Lusegrense:**
- Maks 0,5 voksne hunnlus per fisk i gjennomsnitt
- Lavere grenser i perioder med utvandrende smolt`,
    },
    {
      id: 'naturbruk-vg1-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er lakselus, og hvorfor er det et problem i oppdrett?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv hva lakselus er og hvordan den skader fisken.',
            solution: 'Lakselus er et lite krepsdyr som lever som parasitt på laks. Den fester seg på skinnet og spiser slim, hud og blod. Dette gir sår, svekker immunforsvaret og kan føre til dødelighet.',
          },
          {
            label: 'b',
            task: 'Forklar hvorfor lakselus også er et problem for villfisk.',
            solution: 'Lakselus kan spre seg fra oppdrettsanlegg til vill laksefisk. Høye lusenivåer truer ville bestander av laks og sjøørret, spesielt utvandrende smolt som er sårbare.',
          },
        ],
        solution: 'Lakselus er en parasitt som skader fisk og kan spre seg til villfisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-5-3-def-2',
      type: 'definition',
      title: 'Rensefisk',
      content: `Rensefisk er fisk som spiser lakselus direkte fra oppdrettslaksen. De vanligste artene er rognkjeks og ulike leppefiskarter (bergnebb, grønngylt, berggylt). Rensefisk settes ut i merdene sammen med laksen som et biologisk tiltak mot lus. Dette kalles integrert bekjempelse.`,
    },
    {
      id: 'naturbruk-vg1-5-3-text-2',
      type: 'text',
      content: `## Tiltak mot lakselus

**Medikamentell behandling**

Tradisjonelt har man brukt legemidler:
- **Badebehandling** - fisken bades i lusemiddel
- **Fôrbehandling** - lusemiddel i fôret
- Utfordring: Lusen utvikler resistens over tid

**Ikke-medikamentelle metoder**

Næringen satser nå på:

**1. Rensefisk**
- Rognkjeks og leppefisk spiser lus
- Naturlig og miljøvennlig
- Utfordring: Krever god velferd for rensefisken

**2. Mekanisk avlusning**
- Spyling med temperert vann
- Laser som skyter lus
- Ferskvannsbad

**3. Forebygging**
- Luseskjørt (tett duk rundt merden)
- Snorkelmerd (fisken svømmer dypere)
- Lukkede eller semi-lukkede anlegg

**4. Samordnet brakklegging**
- Områder tømmes for fisk samtidig
- Bryter lusens livssyklus

| Metode | Fordeler | Ulemper |
|--------|----------|---------|
| Legemidler | Effektivt | Resistens, miljø |
| Rensefisk | Naturlig | Krever god velferd |
| Mekanisk | Ingen kjemikalier | Stress for fisken |
| Forebygging | Reduserer behov | Kostbart |`,
    },
    {
      id: 'naturbruk-vg1-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv ulike metoder for å bekjempe lakselus.',
        solution: 'Metoder inkluderer: 1) Medikamentell behandling (bade- eller fôrbehandling), 2) Rensefisk som spiser lus (rognkjeks, leppefisk), 3) Mekanisk avlusning (spyling, laser, ferskvannsbad), 4) Forebygging (luseskjørt, snorkelmerd, lukkede anlegg), 5) Samordnet brakklegging.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-5-3-def-3',
      type: 'definition',
      title: 'ILA og PD',
      content: `ILA (Infeksiøs lakseanemi) og PD (Pankreas Disease) er alvorlige virussykdommer hos laks. ILA er meldepliktig og fører til pålagt nedslakting av hele anlegget. PD gir betennelse i bukspyttkjertelen og redusert vekst. Begge sykdommene kan gi stor dødelighet og økonomiske tap.`,
    },
    {
      id: 'naturbruk-vg1-5-3-text-3',
      type: 'text',
      content: `## Sykdommer i oppdrett

**Virussykdommer**

| Sykdom | Symptomer | Tiltak |
|--------|-----------|--------|
| ILA | Bleke gjeller, blødninger, dødelighet | Nedslakting, sone |
| PD | Dårlig appetitt, svekket vekst | Vaksinering |
| CMS | Hjerteproblemer, plutselig død | Avlsarbeid |
| HSMB | Hjerte- og skjelettproblemer | Vaksinering |

**Bakteriesykdommer**

| Sykdom | Årsak | Tiltak |
|--------|-------|--------|
| Furunkulose | Aeromonas salmonicida | Vaksine |
| Vibriose | Vibrio-bakterier | Vaksine |
| Vintersår | Moritella viscosa | Forebygging |

**Forebygging av sykdom**

- **Vaksinering** - de fleste laks vaksineres mot flere sykdommer
- **Smittevern** - desinfeksjon, karantene, soner
- **God fiskevelferd** - reduserer stress og sykdomsrisiko
- **Overvåking** - tidlig oppdagelse og tiltak
- **Brakklegging** - tømme anlegg mellom utsett

**Veterinær og Mattilsynet**

Alle oppdrettsanlegg må ha avtale med fiskehelsetjeneste. Mattilsynet fører tilsyn og har myndighet til å pålegge tiltak ved sykdomsutbrudd.`,
    },
    {
      id: 'naturbruk-vg1-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn to virussykdommer og to bakteriesykdommer hos oppdrettslaks.',
        solution: 'Virussykdommer: ILA (Infeksiøs lakseanemi) og PD (Pankreas Disease). Bakteriesykdommer: Furunkulose (Aeromonas salmonicida) og Vibriose (Vibrio-bakterier). Andre eksempler er CMS, HSMB og vintersår.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-5-3-text-4',
      type: 'text',
      content: `## Rømming og genetisk påvirkning

**Problemet med rømming**

Når oppdrettslaks rømmer, kan det ha negative konsekvenser:
- **Genetisk innblanding** - oppdrettslaks kan gyte med villaks
- **Sykdomsspredning** - kan spre sykdommer til villfisk
- **Konkurranse** - om mat og gyteplasser

**Årsaker til rømming**
- Uvær og bølger som skader nøter
- Propellskader fra båter
- Rovdyr (sel) som lager hull
- Menneskelige feil ved håndtering

**Tiltak mot rømming**

1. **Tekniske krav** - sterkere nøter og fortøyninger
2. **Rømmingsforskriften** - strenge krav til anleggene
3. **Rømmingsfond** - gjenfangst av rømt fisk
4. **Overvåking** - telling og rapportering
5. **Steril fisk** - forskning på fisk som ikke kan formere seg

**Mål:**
Næringen har mål om null rømming. Antall rømte fisk har gått betydelig ned de siste årene takket være bedre teknologi og strengere krav.`,
    },
    {
      id: 'naturbruk-vg1-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er rømming av oppdrettslaks et problem, og hvilke tiltak finnes?',
        solution: 'Rømming er et problem fordi: 1) Genetisk innblanding med villaks, 2) Sykdomsspredning, 3) Konkurranse om mat og gyteplasser. Tiltak inkluderer: Tekniske krav til sterkere nøter, rømmingsforskriften, rømmingsfond for gjenfangst, overvåking og telling, og forskning på steril fisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-5-3-def-4',
      type: 'definition',
      title: 'MOM-undersøkelse',
      content: `MOM (Matfiskanlegg - Overvåking - Miljø) er et system for miljøovervåking under og rundt oppdrettsanlegg. MOM B-undersøkelser gjøres på bunnen under anlegget og vurderer tilstand på sedimenter. MOM C-undersøkelser dekker et større område. Resultatene bestemmer om anlegget kan fortsette drift.`,
    },
    {
      id: 'naturbruk-vg1-5-3-text-5',
      type: 'text',
      content: `## Miljøpåvirkning fra oppdrett

**Utslipp til sjø**

Oppdrettsanlegg slipper ut:
- **Fôrrester** - ubrukt fôr som synker
- **Fekalier** - avføring fra fisken
- **Næringssalter** - nitrogen og fosfor
- **Legemiddelrester** - ved behandling

**Påvirkning på sjøbunn**

Under anleggene kan det hope seg opp organisk materiale:
- Nedsatt oksygen i sedimentene
- Endret bunndyrsamfunn
- I verste fall: «død» bunn uten liv

**Overvåking og tiltak**

- **MOM B-undersøkelser** - regelmessig prøvetaking
- **Brakklegging** - la lokaliteten hvile
- **Strømkrav** - god vanngjennomstrømning
- **Fôroptimalisering** - mindre spill

**Påvirkning på villaks**

- Lakselus fra oppdrett kan smitte villfisk
- Rømt oppdrettslaks kan blande seg med villaks
- Sykdommer kan spre seg
- Trafikklyssystemet regulerer vekst basert på påvirkning

**Trafikklyssystemet**

Kysten er delt inn i 13 produksjonsområder med farger:
- **Grønt** - lav påvirkning, kan øke produksjon
- **Gult** - moderat påvirkning, holde produksjon
- **Rødt** - høy påvirkning, må redusere produksjon`,
    },
    {
      id: 'naturbruk-vg1-5-3-tip-1',
      type: 'tip',
      title: 'Fremtidens løsninger',
      content: `Næringen investerer stort i nye teknologier for å løse utfordringene: Lukkede anlegg i sjøen eller på land fjerner problemene med lus og rømming. Havmerder plassert offshore gir bedre vannkvalitet. Steril laks kan ikke formere seg med villfisk. Gjennom forskning og innovasjon jobber næringen mot målet om bærekraftig vekst.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'naturbruk-vg1-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hva trafikklyssystemet er og hvordan det fungerer.',
        solution: 'Trafikklyssystemet deler kysten inn i 13 produksjonsområder som får farge basert på miljøpåvirkning på villaks: Grønt = lav påvirkning, kan øke produksjon. Gult = moderat påvirkning, holde produksjon stabil. Rødt = høy påvirkning, må redusere produksjon. Systemet regulerer næringens vekst basert på bærekraft.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 5.4 Tradisjonelt fiskeri og kystkultur
// ----------------------------------------------------------------------------

export const CHAPTER_NATURBRUK_VG1_5_4: TextbookChapter = {
  id: 'naturbruk-vg1-5-4',
  courseId: 'naturbruk-vg1',
  chapterNumber: '5.4',
  title: 'Tradisjonelt fiskeri og kystkultur',
  description: 'Norsk fiskeritradisjon, kystfiske og havfiske, kvoteregulering og havressurslovens betydning for bærekraftig fangst.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske eksempler på lokal produkt- og næringsutvikling basert på teknologisk utvikling, lokale ressurser, kultur og tradisjon',
  ],
  content: [
    {
      id: 'naturbruk-vg1-5-4-intro',
      type: 'text',
      content: `## Fiskerinasjonens røtter

Norge har vært en fiskerinasjon i tusenvis av år. Havet har gitt mat, inntekter og arbeidsplasser til kystbefolkningen gjennom generasjoner. Fra de første fiskerbøndene som rodde ut på fjorden, til dagens moderne fiskefartøy med avansert teknologi - fisket har alltid vært en bærebjelke i norsk økonomi og kultur.

I dag er Norge en av verdens største fiskerinasjoner, med en eksport av villfanget fisk på over 30 milliarder kroner årlig. Selv om næringen har gjennomgått store endringer, lever tradisjonene videre i kystkulturen og i mange småskala fiskerier langs kysten.

**Historisk betydning**

- Tørrfisk fra Lofoten har vært eksportert siden middelalderen
- Fiskeriene finansierte byer som Bergen (hansatiden)
- Kystsamfunn ble bygget rundt fiskeriene
- Sesongfiskeriene (lofotfisket, sildefisket) samlet tusenvis av fiskere

**Moderne betydning**

- Villfisk utgjør ca. 30% av norsk sjømateksport
- Viktig for sysselsetting i kystsamfunn
- Bidrar til matforsyning og matberedskap
- Kulturarv og identitet for kystbefolkningen`,
    },
    {
      id: 'naturbruk-vg1-5-4-def-1',
      type: 'definition',
      title: 'Kystfiske',
      content: `Kystfiske er fiske som foregår relativt nær land, vanligvis innenfor 12 nautiske mil fra kysten. Kystfiskere bruker ofte mindre fartøy (under 15 meter) og tradisjonelle redskaper som garn, line og juksa. Kystfisket er viktig for mange småsamfunn langs norskekysten.`,
    },
    {
      id: 'naturbruk-vg1-5-4-text-1',
      type: 'text',
      content: `## Kystfiske i Norge

**Fartøytyper**

Kystfiskeflåten består av mange ulike båttyper:
- **Sjarker** - små, åpne båter under 10 meter
- **Kystfiskefartøy** - dekket båt 10-15 meter
- **Større kystfartøy** - 15-21 meter

**Vanlige redskaper**

| Redskap | Beskrivelse | Målarter |
|---------|-------------|----------|
| Garn | Nett som settes fast | Torsk, sei, kveite |
| Line | Lang snor med kroker | Torsk, hyse, lange |
| Juksa | Håndsnøre med pilk | Torsk, sei, lyr |
| Ruser | Feller for skalldyr | Krabbe, hummer |
| Teiner | Feller | Krabbe, hummer |

**Sesongfiskeriene**

Kystfisket følger fiskens vandringsmønster:
- **Vinter** - Lofotfisket (torsk)
- **Vår** - Sei langs kysten
- **Sommer** - Makrell, krabbe
- **Høst** - Sild, kongekrabbe (nord)

**Fiskemottak**

Fangsten leveres til lokale fiskemottak som:
- Kjøper og veier fangsten
- Sorterer etter kvalitet
- Videresender til foredling
- Gir fiskeren oppgjør`,
    },
    {
      id: 'naturbruk-vg1-5-4-def-2',
      type: 'definition',
      title: 'Havfiske',
      content: `Havfiske er fiske som foregår i åpent hav, ofte langt fra kysten. Havfiskeflåten bruker store fartøy (trålere, ringnotfartøy, autoliner) som kan være på sjøen i uker om gangen. De fanger store volum og har ofte prosesseringsanlegg om bord.`,
    },
    {
      id: 'naturbruk-vg1-5-4-text-2',
      type: 'text',
      content: `## Havfiske og industrielt fiske

**Fartøytyper i havfiskeflåten**

| Type | Lengde | Redskap | Fangst |
|------|--------|---------|--------|
| Tråler | 30-80 m | Trål | Torsk, sei, reke |
| Ringnot | 40-90 m | Ringnot/snurpenot | Sild, makrell, lodde |
| Autoliner | 30-60 m | Automatisk line | Torsk, hyse |
| Fabrikktråler | 60-100 m | Trål + prosessering | Torsk, sei |

**Trål**

Trålfiske er den mest effektive fangstmetoden:
- Stort nett som slepes bak båten
- Bunntrål (langs bunnen) eller pelagisk trål (i vannmassene)
- Kan fange store mengder på kort tid
- Utfordringer med bifangst og bunnpåvirkning

**Ringnot/snurpenot**

Brukes til fangst av stimfisk:
- Nota «snurpes» rundt en fiskestim
- Effektivt for sild, makrell, brisling
- Krever god teknikk for å finne stimene
- Ekkolodd og sonar er viktige hjelpemidler

**Prosessering om bord**

Moderne havgående fartøy kan:
- Sløye og filetere fangsten
- Fryse produktet umiddelbart
- Produsere fiskemel og olje
- Ligge på feltet i uker`,
    },
    {
      id: 'naturbruk-vg1-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen på kystfiske og havfiske?',
        solution: 'Kystfiske foregår nær land (innenfor 12 nautiske mil) med mindre fartøy (under 15 meter) og tradisjonelle redskaper som garn, line og juksa. Havfiske foregår i åpent hav med store fartøy (trålere, ringnotfartøy) som kan være på sjøen i uker og fange store volum.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv tre ulike fiskeredskaper og hvilke fiskearter de brukes til.',
        solution: '1. Garn - nett som settes fast, brukes til torsk, sei og kveite. 2. Trål - stort nett som slepes bak båten, brukes til torsk, sei og reke. 3. Ringnot - not som snurpes rundt fiskestimer, brukes til sild, makrell og brisling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-5-4-def-3',
      type: 'definition',
      title: 'Kvote',
      content: `En kvote er den mengden fisk et fartøy eller en fisker har tillatelse til å fange i løpet av en periode (vanligvis ett år). Kvotene fastsettes av myndighetene basert på vitenskapelige råd om bestandens størrelse og skal sikre bærekraftig beskatning av fiskeressursene.`,
    },
    {
      id: 'naturbruk-vg1-5-4-text-3',
      type: 'text',
      content: `## Forvaltning og reguleringer

**Havressursloven**

Norges viktigste lov for fiskeriforvaltning:
- Fiskeressursene tilhører fellesskapet
- Skal forvaltes bærekraftig
- Gir grunnlag for kvoter og reguleringer
- Stiller krav til fangstrapportering

**Kvoteregulering**

Kvotesystemet sikrer bærekraftig fiske:

1. **Totalkvote (TAC)** - Total tillatt fangst for hele bestanden
2. **Nasjonal kvote** - Norges andel av totalkvoten
3. **Gruppekvote** - Fordelt på fartøygrupper
4. **Fartøykvote** - Den enkelte båts andel

**Hvordan fastsettes kvotene?**

- Havforskningsinstituttet kartlegger bestandene
- ICES (Det internasjonale havforskningsrådet) gir råd
- Forhandlinger med andre land (delte bestander)
- Fiskeridirektoratet fordeler kvotene

**Andre reguleringer**

- **Minstemål** - Fisk under en viss størrelse må slippes
- **Maskevidde** - Krav til størrelse på nett/garn
- **Stengte områder** - Forbud mot fiske visse steder/tider
- **Bifangstregler** - Begrenser utilsiktet fangst`,
    },
    {
      id: 'naturbruk-vg1-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er en kvote, og hvordan fastsettes den?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva en kvote er.',
            solution: 'En kvote er den mengden fisk et fartøy eller en fisker har tillatelse til å fange i løpet av en periode, vanligvis ett år.',
          },
          {
            label: 'b',
            task: 'Beskriv prosessen for hvordan kvotene fastsettes.',
            solution: 'Havforskningsinstituttet kartlegger bestandene, ICES gir vitenskapelige råd, det forhandles med andre land om delte bestander, og Fiskeridirektoratet fordeler kvotene på fartøygrupper.',
          },
        ],
        solution: 'Kvote er tillatt fangstmengde basert på vitenskapelige råd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-5-4-text-4',
      type: 'text',
      content: `## Viktige fiskeslag i Norge

**Bunnfisk (torskefisk)**

| Art | Årlig fangst | Hovedområde |
|-----|--------------|-------------|
| Torsk | ~400 000 tonn | Barentshavet |
| Sei | ~150 000 tonn | Norskekysten |
| Hyse | ~100 000 tonn | Barentshavet |

**Pelagisk fisk (stimfisk)**

| Art | Årlig fangst | Hovedområde |
|-----|--------------|-------------|
| Sild | ~300 000 tonn | Norskehavet |
| Makrell | ~200 000 tonn | Nordsjøen/Norskehavet |
| Lodde | Varierer | Barentshavet |
| Kolmule | ~300 000 tonn | Nordøst-Atlanteren |

**Skalldyr**

| Art | Betydning | Område |
|-----|-----------|--------|
| Reker | Høy verdi | Nordsjøen, Nord-Norge |
| Kongekrabbe | Voksende | Øst-Finnmark |
| Taskekrabbe | Tradisjonell | Hele kysten |
| Hummer | Delikatesse | Sør-Norge |

**Spesielle produkter**

- **Skrei** - Torsk fra Lofoten, premium kvalitet
- **Klippfisk** - Saltet og tørket torsk
- **Tørrfisk** - Lufttørket torsk
- **Rakfisk** - Fermentert ørret`,
    },
    {
      id: 'naturbruk-vg1-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn fire viktige fiskeslag i norsk fiske og hvor de hovedsakelig fanges.',
        solution: '1. Torsk - ca. 400 000 tonn, hovedsakelig Barentshavet. 2. Sild - ca. 300 000 tonn, Norskehavet. 3. Sei - ca. 150 000 tonn, norskekysten. 4. Makrell - ca. 200 000 tonn, Nordsjøen/Norskehavet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-5-4-def-4',
      type: 'definition',
      title: 'Kystkultur',
      content: `Kystkultur omfatter de tradisjonene, kunnskapene og levemåtene som har utviklet seg i kystsamfunn gjennom generasjoner av fiske og sjøfart. Dette inkluderer båtbygging, fiskemetoder, mattradisjoner, språk og dialekter, arkitektur og sosiale strukturer knyttet til livet ved havet.`,
    },
    {
      id: 'naturbruk-vg1-5-4-tip-1',
      type: 'tip',
      title: 'Lofotfisket - en levende tradisjon',
      content: `Lofotfisket (skreifisket) er verdens største torskefiske og har foregått siden middelalderen. Hvert år, fra januar til april, samles fiskere fra hele kysten når torsken (skreien) kommer inn til Lofoten for å gyte. I dag deltar ca. 3000 fiskere med over 600 fartøy. Tradisjonen er søkt oppført på UNESCOs verdensarvliste som immateriell kulturarv.`,
    },
    {
      id: 'naturbruk-vg1-5-4-example-1',
      type: 'example',
      title: 'Eksempel: Fra hav til bord',
      problem: 'Beskriv veien en torsk tar fra den fanges til den ligger på middagsbordet.',
      solution: `**Fangst:**
1. Torsken fanges på garn i Lofoten under skreifisket (januar-april)
2. Fiskeren bløgger fisken (kutter blodårene for utblødning)
3. Fangsten tas om bord og kjøles ned

**Levering:**
4. Fangsten leveres til fiskemottak samme dag
5. Fisken veies, sorteres og kvalitetsvurderes
6. Fiskeren får oppgjør basert på vekt og kvalitet

**Foredling:**
7. Fisken sløyes (innvoller fjernes)
8. Kan selges som fersk, hel fisk
9. Alternativt: Fileteres, saltes til klippfisk, eller henges til tørrfisk

**Distribusjon:**
10. Fersk fisk sendes med fly til Europa (24-48 timer)
11. Tørrfisk lagres og eksporteres (Italia er største marked)

**Forbruker:**
12. Kjøpes i fiskdisk eller restaurant
13. Tilberedes og serveres - fersk skrei kan være hos forbruker 2-3 dager etter fangst`,
    },
    // --- Samleoppgaver ---
    {
      id: 'naturbruk-vg1-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er Lofotfisket, og hvorfor er det viktig for norsk kystkultur?',
        solution: 'Lofotfisket er verdens største torskefiske som foregår fra januar til april når skreien kommer inn til Lofoten for å gyte. Det har foregått siden middelalderen og samler ca. 3000 fiskere med 600 fartøy årlig. Det er viktig for kystkultur fordi det representerer en levende tradisjon som har formet kystsamfunn i generasjoner, og er søkt oppført på UNESCOs verdensarvliste.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 5.5 Tang, tare og nye marine arter
// ----------------------------------------------------------------------------

export const CHAPTER_NATURBRUK_VG1_5_5: TextbookChapter = {
  id: 'naturbruk-vg1-5-5',
  courseId: 'naturbruk-vg1',
  chapterNumber: '5.5',
  title: 'Tang, tare og nye marine arter',
  description: 'Dyrking av tang og tare, blåskjell og andre marine arter som fremtidsrettede næringer i norsk akvakultur.',
  estimatedMinutes: 50,
  competenceGoals: [
    'drøfte hvordan naturbaserte produkter og tjenester kan utvikles innenfor rammen av bærekraftig utvikling og ressursforvaltning',
  ],
  content: [
    {
      id: 'naturbruk-vg1-5-5-intro',
      type: 'text',
      content: `## Den blå bioøkonomien

Mens lakseoppdrett dominerer norsk akvakultur i dag, vokser det fram spennende nye næringer basert på andre marine organismer. Tang og tare, blåskjell, østers og andre arter representerer store muligheter for fremtiden.

Disse næringene har flere fordeler:
- Krever ikke fôr (tang, skjell filtrerer næring fra vannet)
- Kan forbedre vannkvaliteten
- Binder CO₂ (tang og tare)
- Gir råstoff til mat, fôr, kosmetikk og medisiner
- Kan kombineres med annen akvakultur (IMTA)

**Hva er den blå bioøkonomien?**

Den blå bioøkonomien handler om å utnytte marine ressurser på en bærekraftig måte til produksjon av mat, energi, materialer og andre produkter. Norge med sin lange kystlinje og marine kompetanse har store muligheter innen dette feltet.`,
    },
    {
      id: 'naturbruk-vg1-5-5-def-1',
      type: 'definition',
      title: 'Tare',
      content: `Tare er store brunalger som vokser i sjøen langs kysten. De kan bli flere meter lange og danner «tareskogen» som er et viktig habitat for mange arter. I Norge er sukkertare, stortare og fingertare de vanligste artene. Tare brukes til mat, alginat, fôr, gjødsel og biodrivstoff.`,
    },
    {
      id: 'naturbruk-vg1-5-5-text-1',
      type: 'text',
      content: `## Tareproduksjon i Norge

**Ville tareressurser**

Norge har verdens nest største tareskog:
- Strekker seg langs hele kysten
- Viktig økosystem for fisk og skalldyr
- Høstet tradisjonelt til tang og gjødsel
- I dag begrenset høsting for å beskytte økosystemet

**Dyrking av tare**

Tareproduksjon er en voksende næring:

1. **Sporer samles** fra viltvoksende tare
2. **Smådyrking** i kar på land
3. **Utsett på liner** i sjøen
4. **Vekst** gjennom vinter og vår
5. **Høsting** på forsommeren

**Produksjonsanlegg**

- Vertikale liner som henger ned fra overflaten
- Horisontale liner mellom bøyer
- Kan kombineres med annen akvakultur
- Krever gode strømforhold og vannkvalitet

**Arter som dyrkes**

| Art | Bruksområder |
|-----|--------------|
| Sukkertare | Mat, fôr, alginat |
| Fingertare | Mat, kosmetikk |
| Søl (rødalge) | Mat (sushi-nori), kosmetikk |
| Butare | Mat, smakstilsetning |`,
    },
    {
      id: 'naturbruk-vg1-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er tare, og hvilke bruksområder har den?',
        solution: 'Tare er store brunalger som vokser i sjøen langs kysten. Bruksområder inkluderer: mat og matingredienser, fôr til dyr og fisk, alginat til industri, kosmetikk og helseprodukter, biodrivstoff (forskning), og miljøtjenester som CO₂-binding og vannrensing.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-5-5-def-2',
      type: 'definition',
      title: 'Alginat',
      content: `Alginat er et stoff som utvinnes fra brunalger (tare). Det brukes som fortykningsmiddel og stabilisator i mat, kosmetikk og medisiner. Alginat kan gjøre iskrem kremete, saus tykkere og tabletter stabile. Norge har lange tradisjoner for alginatproduksjon.`,
    },
    {
      id: 'naturbruk-vg1-5-5-text-2',
      type: 'text',
      content: `## Bruksområder for tang og tare

**Mat og matingredienser**

- Direkte konsum (salater, supper, tilbehør)
- Smakstilsetning (umami-smak)
- Fortykningsmiddel (alginat, karragenan)
- Sushi og asiatisk mat
- Helsekost og kosttilskudd

**Fôr til dyr og fisk**

- Tilsetning i fiskefôr
- Husdyrfôr (forbedrer helse)
- Gjødsel til planter
- Bioaktive stoffer som styrker immunforsvar

**Industri og teknologi**

- Alginat i tekstilindustrien
- Bioplast fra alginat
- Biodrivstoff (forskning)
- Materialer og emballasje

**Kosmetikk og helse**

- Hudpleie og antialdring
- Farmasøytiske produkter
- Medisinsk forskning
- Naturlige fargestoffer

**Miljøtjenester**

- CO₂-binding (tang og tare tar opp CO₂)
- Næringssaltopptak (renser vannet)
- Habitat for fiskeyngel
- Erosjonsbeskyttelse`,
    },
    {
      id: 'naturbruk-vg1-5-5-def-3',
      type: 'definition',
      title: 'IMTA',
      content: `IMTA (Integrert Multitrofisk Akvakultur) er et oppdrettssystem der flere arter dyrkes sammen på en måte som utnytter ressursene bedre. For eksempel kan tang og blåskjell dyrkes rundt lakseanlegg - tangen tar opp næringssalter fra laksen, og blåskjellene filtrerer partikler fra vannet.`,
    },
    {
      id: 'naturbruk-vg1-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er IMTA, og hvilke fordeler har det?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva IMTA står for og hva det innebærer.',
            solution: 'IMTA står for Integrert Multitrofisk Akvakultur. Det er et oppdrettssystem der flere arter dyrkes sammen slik at ressursene utnyttes bedre - avfall fra én art blir ressurs for en annen.',
          },
          {
            label: 'b',
            task: 'Gi et eksempel på hvordan IMTA kan fungere i praksis.',
            solution: 'Ved et lakseanlegg kan blåskjell dyrkes i nærheten for å filtrere partikler, mens tare dyrkes lenger ut for å ta opp næringssalter. Slik utnytter man avfallet fra laksen produktivt.',
          },
        ],
        solution: 'IMTA er integrert oppdrett av flere arter som utnytter ressursene bedre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-5-5-text-3',
      type: 'text',
      content: `## Blåskjell og andre skalldyr

**Blåskjelldyrking**

Blåskjell er den nest største oppdrettsarten i Norge etter laks:

**Produksjonsmetode:**
1. Yngelsamlere (tau) henges ut om våren
2. Blåskjellyngel fester seg naturlig
3. Tau med yngel flyttes til vekstanlegg
4. Skjellene vokser i 1-2 år
5. Høsting, vasking og sortering

**Fordeler med blåskjell:**
- Krever ikke fôr (filtrerer plankton)
- Renser vannet for partikler
- Klimavennlig proteinkilde
- Kan kombineres med annen akvakultur

**Utfordringer:**
- Algetoksiner (giftige algeoppblomstringer)
- Predatorer (ærfugl, sjøstjerner)
- Markedsutvikling i Norge

**Andre skalldyr**

| Art | Status | Potensial |
|-----|--------|-----------|
| Flatøsters | Liten skala | Høy verdi, nisjeprodukt |
| Stillehavsøsters | Viltvoksende | Spredning fra utsetting |
| Kamskjell | Forsøk | Høy verdi |
| Hjerteskjell | Småskala | Tradisjonell høsting |`,
    },
    {
      id: 'naturbruk-vg1-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv hvordan blåskjell dyrkes fra yngel til ferdig produkt.',
        solution: '1. Yngelsamlere (tau) henges ut om våren, 2. Blåskjellyngel fester seg naturlig fra vannet, 3. Tau med yngel flyttes til vekstanlegg, 4. Skjellene vokser i 1-2 år mens de filtrerer plankton, 5. Høsting, vasking og sortering før salg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-5-5-text-4',
      type: 'text',
      content: `## Andre nye arter i akvakultur

**Torskeoppdrett**

Oppdrett av torsk har vært forsøkt siden 1980-tallet:
- Utfordringer med tidlig kjønnsmodning
- Sykdommer og høy dødelighet
- Lav lønnsomhet
- Ny satsing med forbedret teknologi

**Kveite og piggvar**

Flatfisk som dyrkes i lukkede anlegg:
- Høy verdi per kilo
- Krevende oppdrettsforhold
- Liten skala i Norge
- Potensial for vekst

**Røye**

Røye er en laksefisk tilpasset kaldt vann:
- Oppdrett i ferskvann
- Godt tilpasset nordlige forhold
- Premium produkt
- Begrenset produksjon

**Rensefisk**

Rensefisk dyrkes for bruk mot lakselus:
- Rognkjeks
- Berggylt og bergnebb
- Stor etterspørsel fra lakseoppdrett

**Sjøpølser og sjøpiggsvin**

Nye arter under utforsking:
- Etterspurt i Asia
- Kan rense sjøbunn
- Forskning pågår`,
    },
    {
      id: 'naturbruk-vg1-5-5-tip-1',
      type: 'tip',
      title: 'Tang som klimahelt',
      content: `Tang og tare kan spille en viktig rolle i klimakampen. De vokser raskt og binder store mengder CO₂ fra atmosfæren. Når taren høstes og brukes til produkter, holdes karbonet borte fra atmosfæren. Tareskogen langs norskekysten binder allerede millioner av tonn CO₂ hvert år. Dyrket tare kan bidra enda mer.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'naturbruk-vg1-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilke miljøfordeler har dyrking av tang og blåskjell sammenlignet med lakseoppdrett?',
        solution: 'Tang og blåskjell krever ikke fôr da de får næring fra vannet. De forbedrer vannkvaliteten ved å ta opp næringssalter (tare) og filtrere partikler (skjell). Tare binder også CO₂ fra atmosfæren. De har derfor lavere miljøbelastning og kan ha positiv miljøeffekt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Nevn tre nye arter som det forskes på eller dyrkes i norsk akvakultur utenom laks.',
        solution: 'Eksempler: 1. Torsk - forsøkes på nytt med forbedret teknologi, 2. Kveite - flatfisk i lukkede anlegg, 3. Røye - laksefisk i ferskvann, 4. Rognkjeks - rensefisk, 5. Sjøpølser og sjøpiggsvin.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 5.6 Verdikjeden for sjømat
// ----------------------------------------------------------------------------

export const CHAPTER_NATURBRUK_VG1_5_6: TextbookChapter = {
  id: 'naturbruk-vg1-5-6',
  courseId: 'naturbruk-vg1',
  chapterNumber: '5.6',
  title: 'Verdikjeden for sjømat',
  description: 'Foredling, distribusjon og salg av sjømat, fra fangst og slakt til ferdigprodukt på forbrukerens bord.',
  estimatedMinutes: 50,
  competenceGoals: [
    'planlegge, gjennomføre og vurdere naturbaserte næringsaktiviteter og beskrive en tilhørende verdikjede',
    'utføre enkel bearbeiding av råstoff',
  ],
  content: [
    {
      id: 'naturbruk-vg1-5-6-intro',
      type: 'text',
      content: `## Fra hav til bord

Verdikjeden for sjømat omfatter alle leddene fra fisken svømmer i havet eller merden, til den ligger på forbrukerens tallerken. Å forstå denne kjeden er viktig for alle som jobber i sjømatnæringen, fordi hvert ledd påvirker produktets kvalitet og verdi.

**Hva er en verdikjede?**

En verdikjede beskriver alle aktivitetene som må til for å bringe et produkt fra råvare til sluttbruker. For hvert ledd i kjeden tilføres verdi gjennom bearbeiding, transport, lagring eller andre tjenester.

**Verdikjeden for sjømat:**

1. **Primærproduksjon** - Fangst eller oppdrett
2. **Førstehåndsmottak** - Kjøp og sortering
3. **Foredling** - Bearbeiding av råstoff
4. **Distribusjon** - Transport og lagring
5. **Salg** - Engros og detaljist
6. **Forbruker** - Kjøp og konsum

Hvert ledd må fungere godt for at sluttkunden skal få et produkt av høy kvalitet.`,
    },
    {
      id: 'naturbruk-vg1-5-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv de seks hovedleddene i verdikjeden for sjømat.',
        solution: '1. Primærproduksjon - fangst eller oppdrett. 2. Førstehåndsmottak - kjøp, veining og sortering. 3. Foredling - bearbeiding som filetering, røyking, frysing. 4. Distribusjon - transport og lagring. 5. Salg - engros og detaljhandel. 6. Forbruker - kjøp og konsum.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-5-6-def-1',
      type: 'definition',
      title: 'Foredling',
      content: `Foredling av sjømat er prosessen der rå fisk bearbeides til ulike produkter. Dette kan være sløying, filetering, salting, tørking, røyking, frysing eller videreforedling til ferdige måltider. Foredling øker produktets verdi og holdbarhet, og tilpasser det til kundens ønsker.`,
    },
    {
      id: 'naturbruk-vg1-5-6-text-1',
      type: 'text',
      content: `## Foredlingsmetoder

**Fersk fisk**

Den enkleste formen for foredling:
- Sløying (fjerning av innvoller)
- Hodekapping (valgfritt)
- Pakking i is eller MAP (modifisert atmosfære)
- Holdbarhet: 5-14 dager

**Filetering**

- Filéen skjæres ut fra fisken
- Gir høyere kilopris
- Krever kvalifisert arbeidskraft
- Kan gjøres manuelt eller maskinelt

**Frysing**

- Fisken fryses ned til -20°C eller kaldere
- Gir lang holdbarhet (6-24 måneder)
- Bevarer kvaliteten godt
- Kan fryses på sjøen eller på land

**Tradisjonelle metoder**

| Metode | Prosess | Produkt |
|--------|---------|---------|
| Salting | Fisken legges i salt | Saltfisk, klippfisk |
| Tørking | Lufttørking utendørs | Tørrfisk |
| Røyking | Varmrøyking eller kaldrøyking | Røykelaks |
| Hermetisering | Sterilisering i bokser | Hermetisk fisk |
| Marinering | Syrebad med eddik/sitron | Gravet fisk, sild |`,
    },
    {
      id: 'naturbruk-vg1-5-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn og beskriv fire ulike foredlingsmetoder for fisk.',
        solution: '1. Filetering - skjære ut filét fra fisken. 2. Frysing - fryse ned til -20°C, lang holdbarhet. 3. Salting/tørking - legge i salt og tørke til tørrfisk eller klippfisk. 4. Røyking - varm- eller kaldrøyke til røykelaks.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-5-6-def-2',
      type: 'definition',
      title: 'Kjølekjede',
      content: `Kjølekjeden er det kontinuerlige kravet om at fersk og frossen sjømat holdes ved riktig temperatur fra produksjon til forbruker. For fersk fisk er dette 0-4°C, for frossen fisk -18°C eller kaldere. Brudd i kjølekjeden fører til kvalitetstap og kortere holdbarhet.`,
    },
    {
      id: 'naturbruk-vg1-5-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er kjølekjeden, og hvorfor er den viktig?',
        solution: 'Kjølekjeden er kravet om at sjømat holdes ved riktig temperatur (0-4°C for fersk, -18°C for frossen) gjennom hele verdikjeden. Den er viktig fordi brudd fører til kvalitetstap, kortere holdbarhet og potensielle matsikkerhetsproblemer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-5-6-text-2',
      type: 'text',
      content: `## Kvalitet og mattrygghet

**Kvalitetsfaktorer**

Kvaliteten på sjømat påvirkes av:
- **Råstoffkvalitet** - Fiskens tilstand ved fangst/slakt
- **Håndtering** - Skånsom behandling
- **Kjøling** - Rask nedkjøling og kald lagring
- **Tid** - Kort tid fra fangst til forbruker
- **Hygiene** - Rent utstyr og omgivelser

**Kvalitetsgradering**

Fisk graderes etter kvalitet:
- **Superior/Ekstra** - Beste kvalitet
- **A** - God kvalitet
- **B** - Akseptabel kvalitet
- **Industri** - Til bearbeiding

**Mattrygghet**

Krav til trygg sjømat:
- HACCP-system (fareanalyse og kritiske kontrollpunkter)
- Sporbarhet gjennom hele kjeden
- Temperaturkontroll
- Regelmessig prøvetaking
- Dokumentasjon

**Mattilsynet**

Mattilsynet fører tilsyn med:
- Hygiene i foredlingsanlegg
- Temperaturkontroll
- Merking av produkter
- Import og eksport`,
    },
    {
      id: 'naturbruk-vg1-5-6-def-3',
      type: 'definition',
      title: 'Sporbarhet',
      content: `Sporbarhet betyr at man kan følge et produkt gjennom hele verdikjeden fra råvare til forbruker. For sjømat skal man kunne finne ut hvor fisken ble fanget eller oppdrettet, når og hvordan den ble bearbeidet, og hvordan den ble transportert. Dette er viktig for matsikkerhet og kvalitetskontroll.`,
    },
    {
      id: 'naturbruk-vg1-5-6-text-3',
      type: 'text',
      content: `## Distribusjon og logistikk

**Transport av fersk sjømat**

Fersk sjømat krever rask transport:
- **Fly** - Fersk laks til Asia på 24-48 timer
- **Kjølebil** - Transport i Europa
- **Containerskip** - Lengre distanser (frossen)

**Viktige faktorer:**
- Temperaturkontroll under hele transporten
- Rask håndtering og omlasting
- God emballasje som beskytter produktet
- Dokumentasjon og sporbarhet

**Eksportmarkeder for norsk sjømat**

| Marked | Viktigste produkter |
|--------|---------------------|
| EU | Fersk laks, fersk torsk |
| USA | Laks, kongekrabbe |
| Asia | Laks (Japan, Kina, Sør-Korea) |
| Brasil | Klippfisk |
| Italia | Tørrfisk |

**Logistikkutfordringer**

- Lang kystlinje med mange små leverandører
- Fersk vare som må frem raskt
- Temperaturkontroll i alle ledd
- Sesongvariasjoner i fangst
- Uforutsigbart vær og forsinkelser`,
    },
    {
      id: 'naturbruk-vg1-5-6-text-4',
      type: 'text',
      content: `## Markedsføring og salg

**Salgskanaler**

Sjømat selges gjennom ulike kanaler:
- **Fiskdisker** - Fersk fisk i butikk
- **Dagligvare** - Pakket fersk og frossen
- **HORECA** - Hotell, restaurant, catering
- **Eksport** - Direkte til utenlandske kjøpere
- **Netthandel** - Voksende marked

**Merkeordninger**

Forbrukere ser etter kvalitetsmerker:
- **Seafood from Norway** - Norsk opprinnelse
- **MSC** - Bærekraftig villfangst
- **ASC** - Ansvarlig oppdrett
- **Økologisk** - Økologisk produksjon

**Trender i markedet**

Utviklingstrekk i sjømatmarkedet:
- Økende etterspørsel etter fersk fisk
- Mer bekvemmelighetsprodukter
- Fokus på bærekraft og miljø
- Sporbarhet og opprinnelse viktig
- Vekst i online-salg`,
    },
    {
      id: 'naturbruk-vg1-5-6-def-4',
      type: 'definition',
      title: 'HACCP',
      content: `HACCP (Hazard Analysis and Critical Control Points) er et internasjonalt system for matsikkerhet. Det innebærer å identifisere farer i produksjonen, definere kritiske kontrollpunkter der farene kan kontrolleres, og overvåke disse punktene kontinuerlig. Alle som produserer eller foredler mat må ha et HACCP-system.`,
    },
    {
      id: 'naturbruk-vg1-5-6-tip-1',
      type: 'tip',
      title: 'Verdiskaping i kystsamfunn',
      content: `Foredling av sjømat lokalt gir større verdiskaping i kystsamfunn enn å eksportere rå fisk. Når fisken fileteres, røykes eller pakkes lokalt, skapes det arbeidsplasser og skatteinntekter i kommunen. Mange kystsamfunn satser derfor på lokal foredling og nisjeprodukter med høy verdi.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'naturbruk-vg1-5-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er HACCP, og hvorfor er det viktig i sjømatnæringen?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva HACCP står for og hva det innebærer.',
            solution: 'HACCP står for Hazard Analysis and Critical Control Points. Det innebærer å identifisere farer, definere kritiske kontrollpunkter og overvåke disse kontinuerlig.',
          },
          {
            label: 'b',
            task: 'Hvorfor må alle som produserer sjømat ha HACCP-system?',
            solution: 'HACCP er lovpålagt for å sikre mattryggheten. Det sikrer at farlige situasjoner oppdages og kontrolleres før produktet når forbrukeren.',
          },
        ],
        solution: 'HACCP er et matsikkerhetssystem som sikrer at farer identifiseres og kontrolleres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: Utmark, jakt og friluftsliv
// ============================================================================

// ----------------------------------------------------------------------------
// 6.1 Allemannsretten og ferdsel i naturen
// ----------------------------------------------------------------------------

export const CHAPTER_NATURBRUK_VG1_6_1: TextbookChapter = {
  id: 'naturbruk-vg1-6-1',
  courseId: 'naturbruk-vg1',
  chapterNumber: '6.1',
  title: 'Allemannsretten og ferdsel i naturen',
  description: 'Allemannsrettens innhold, begrensninger og plikter, og hvordan retten til fri ferdsel praktiseres i norsk utmark.',
  estimatedMinutes: 45,
  competenceGoals: [
    'orientere seg i naturen ved hjelp av tradisjonelle og moderne metoder og hjelpemidler',
  ],
  content: [
    {
      id: 'naturbruk-vg1-6-1-intro',
      type: 'text',
      content: `## Frihet til å ferdes i naturen

Norge er unikt i verden når det gjelder retten til fri ferdsel i naturen. Allemannsretten gir alle - uavhengig av hvem som eier grunnen - rett til å ferdes og oppholde seg i utmark. Dette er en gammel rett som er forankret i friluftsloven og utgjør grunnlaget for det norske friluftslivet.

Allemannsretten er ikke bare en rettighet, men også et ansvar. Den som bruker naturen har plikt til å opptre hensynsfullt og varsomt, slik at naturen og andre brukere ikke påføres skade eller ulempe.

**Hvorfor er allemannsretten viktig?**

- Gir alle tilgang til naturopplevelser
- Fremmer folkehelse og trivsel
- Er grunnlag for friluftslivstradisjonen
- Bidrar til bosetting og turisme i distriktene
- Styrker naturforståelse og miljøbevissthet`,
    },
    {
      id: 'naturbruk-vg1-6-1-def-1',
      type: 'definition',
      title: 'Allemannsretten',
      content: `Allemannsretten er den lovfestede retten alle har til å ferdes og oppholde seg i utmark, uavhengig av hvem som eier grunnen. Retten er nedfelt i friluftsloven av 1957 og omfatter ferdsel til fots, på ski, med sykkel på sti/vei, bading, rasting, telting og høsting av ville bær, sopp og blomster.`,
    },
    {
      id: 'naturbruk-vg1-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er allemannsretten, og hvor er den lovfestet?',
        solution: 'Allemannsretten er den lovfestede retten alle har til å ferdes og oppholde seg i utmark, uavhengig av hvem som eier grunnen. Den er nedfelt i friluftsloven av 1957.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-1-text-1',
      type: 'text',
      content: `## Innmark og utmark

**Utmark - der allemannsretten gjelder**

Utmark er områder som ikke er innmark:
- Skog og skogsmark
- Fjell og vidder
- Myrer og våtmarker
- Strender og kystområder
- Hei og beitemark som ikke er inngjerdet

**Innmark - der allemannsretten er begrenset**

Innmark omfatter:
- Dyrket mark (åker, eng, kulturbeite)
- Inngjerdet hage og gårdstun
- Områder som ligger i nærheten av boliger
- Industriområder og lignende

**Viktige regler:**
- På innmark kan du bare ferdes når det ikke er til skade (vinterstid, frossen mark)
- Respekter private områder rundt hus
- Gå rundt, ikke over, dyrket mark i vekstsesongen`,
    },
    {
      id: 'naturbruk-vg1-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen på innmark og utmark.',
        solution: 'Utmark er skog, fjell, myr, strender og lignende der allemannsretten gjelder fullt ut. Innmark er dyrket mark, inngjerdet hage, gårdstun og områder nær boliger der ferdselsretten er begrenset.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-1-def-2',
      type: 'definition',
      title: 'Friluftsloven',
      content: `Friluftsloven er den norske loven som regulerer allemannsretten og friluftsliv. Loven ble vedtatt i 1957 og har som formål å verne friluftslivets naturgrunnlag og sikre allmennhetens rett til ferdsel, opphold med videre i naturen, slik at muligheten for friluftsliv bevares og fremmes.`,
    },
    {
      id: 'naturbruk-vg1-6-1-text-2',
      type: 'text',
      content: `## Hva har du lov til?

**Ferdsel**
- Gå til fots overalt i utmark
- Sykle og ri på stier og veier
- Gå på ski
- Ro og padle i sjø, elv og vann
- Bade (hvis ikke skiltet forbud)

**Opphold og rasting**
- Slå deg ned for hvile og mat
- Bade og slappe av ved vannet
- Plukke blomster (ikke fredede arter)
- Sanke bær, sopp og nøtter

**Telting og overnatting**
- Telte inntil 2 netter på samme sted
- Minst 150 meter fra nærmeste bebodde hus
- Spør om lov hvis du vil bli lenger
- Bruk etablerte teltplasser der det finnes

**Bål**
- Generelt bålforbud 15. april - 15. september
- Kan tenne bål på snødekt mark eller ved sjøen
- Må ikke være brannfare
- Alltid lov å bruke primus/kokeapparat`,
    },
    {
      id: 'naturbruk-vg1-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er reglene for telting i utmark?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor lenge kan du telte på samme sted?',
            solution: 'Inntil 2 netter på samme sted uten å spørre grunneier om lov.',
          },
          {
            label: 'b',
            task: 'Hvor langt fra hus må du holde deg?',
            solution: 'Minst 150 meter fra nærmeste bebodde hus eller hytte.',
          },
        ],
        solution: 'Du kan telte inntil 2 netter, minst 150 meter fra bebodde hus.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-1-def-3',
      type: 'definition',
      title: 'Ferdselskultur',
      content: `Ferdselskultur handler om hvordan vi oppfører oss i naturen - å vise hensyn til andre brukere, dyr, planter og selve naturmiljøet. God ferdselskultur innebærer å følge stier, ikke forsøple, holde hunden i bånd, unngå unødig støy og generelt «la naturen være som du fant den».`,
    },
    {
      id: 'naturbruk-vg1-6-1-text-3',
      type: 'text',
      content: `## Dine plikter

**Hensynsregelen**

Friluftsloven sier at alle som ferdes i naturen skal opptre hensynsfullt og varsomt, for ikke å:
- Volde skade eller ulempe for grunneier eller andre
- Påføre miljøet skade

**Konkrete plikter:**

**Ta med søppelet**
- Alt du tar med inn, tar du med ut
- Organisk avfall (matskrell) kan graves ned
- Plast og metall skal aldri etterlates

**Respekter beitedyr**
- Hold avstand til husdyr på beite
- Hund skal være i bånd i beiteområder

**Unngå å forstyrre vilt**
- Spesielt i hekke- og yngletiden
- Hold avstand fra reir og hi

**Respekter skilting**
- Følg oppslag om ferdselsforbud
- Respekter private områder

**Vis hensyn til andre**
- Gi plass på stien
- Unngå unødig støy
- Respekter andre brukeres naturopplevelse`,
    },
    {
      id: 'naturbruk-vg1-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva sier hensynsregelen i friluftsloven?',
        solution: 'Hensynsregelen sier at alle som ferdes i naturen skal opptre hensynsfullt og varsomt for ikke å volde skade eller ulempe for grunneier, andre brukere eller miljøet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-1-text-4',
      type: 'text',
      content: `## Særlige bestemmelser

**Hund**
- Båndtvang fra 1. april til 20. august (yngletid)
- Kommunene kan utvide båndtvangen
- Alltid båndtvang i beiteområder med husdyr
- Hund under kontroll (lydighet) kan gå løs utenom båndtvangstid

**Motorferdsel**
- Ikke lov med motorkjøretøy i utmark
- Unntak: Grunneiere, nødvendig næring, funksjonshemmede
- Snøscooter kun på merkede løyper (der det finnes)
- Båt: Egne regler for fart og områder

**Jakt og fiske**
- Ikke del av allemannsretten
- Krever tillatelse fra grunneier
- Statens grunn: Fiskekort kan kjøpes
- Jakt: Jegerprøve og godkjenning påkrevd

**Kommersiell virksomhet**
- Organiserte turer kan kreve avtale med grunneier
- Særlig ved gjentatt bruk av samme område
- Avgift kan kreves for tilrettelegging`,
    },
    {
      id: 'naturbruk-vg1-6-1-tip-1',
      type: 'tip',
      title: 'Sporløs ferdsel',
      content: `Prinsippet «Leave No Trace» betyr at du skal etterlate naturen slik du fant den. Ta med alt søppel, bruk etablerte stier, ikke lag nye bålplasser, og unngå å knekke greiner eller skade vegetasjon. Tanken er at de som kommer etter deg skal kunne oppleve naturen like uberørt som du gjorde.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'naturbruk-vg1-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Når gjelder båndtvang for hund, og hvorfor?',
        solution: 'Generell båndtvang gjelder fra 1. april til 20. august. Dette er yngletiden for vilt, og løshund kan skade rådyrkalver, fugleunger og andre dyr. Kommunene kan utvide båndtvangen, og det er alltid båndtvang i beiteområder med husdyr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 6.2 Jakt og viltforvaltning
// ----------------------------------------------------------------------------

export const CHAPTER_NATURBRUK_VG1_6_2: TextbookChapter = {
  id: 'naturbruk-vg1-6-2',
  courseId: 'naturbruk-vg1',
  chapterNumber: '6.2',
  title: 'Jakt og viltforvaltning',
  description: 'Jaktformer, jaktetikk, viltarter og forvaltningsprinsipper for å sikre levedyktige bestander av storvilt og småvilt.',
  estimatedMinutes: 60,
  competenceGoals: [
    'vurdere risiko og utføre naturbaserte aktiviteter med hensyn til egen og andres sikkerhet',
    'utføre arbeidsoppgaver i ulike deler av verdikjeden basert på gjeldende regler og standarder',
  ],
  content: [
    {
      id: 'naturbruk-vg1-6-2-intro',
      type: 'text',
      content: `## Jakt som tradisjon og forvaltning

Jakt har vært en viktig del av norsk kultur og levesett i tusenvis av år. I dag er jakten både en fritidsaktivitet og et viktig verktøy for viltforvaltning. Gjennom regulert jakt bidrar jegerne til å opprettholde sunne og levedyktige viltbestander.

Norge har rundt 500 000 registrerte jegere, og jakt utøves over hele landet. Jakten gir verdifull mat, naturopplevelser og bidrar til å forebygge skader på skog og landbruk.

**Jaktens betydning i dag:**

- Høsting av fornybare naturressurser
- Forvaltningsverktøy for å regulere bestander
- Forebygger skader på skog og avlinger
- Kulturarv og tradisjon
- Friluftsliv og naturkontakt
- Økonomisk betydning for grunneiere`,
    },
    {
      id: 'naturbruk-vg1-6-2-def-1',
      type: 'definition',
      title: 'Viltforvaltning',
      content: `Viltforvaltning er den målrettede styringen av viltbestander og deres leveområder. Formålet er å sikre levedyktige bestander av alle arter, balansert mot hensynet til andre samfunnsinteresser. Viltforvaltningen omfatter regulering av jakt, biotopskjøtsel, bestandsovervåking og forebygging av skader.`,
    },
    {
      id: 'naturbruk-vg1-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er viltforvaltning, og hva er formålet med den?',
        solution: 'Viltforvaltning er den målrettede styringen av viltbestander og deres leveområder. Formålet er å sikre levedyktige bestander av alle arter, balansert mot hensynet til andre samfunnsinteresser som landbruk og skogbruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-2-text-1',
      type: 'text',
      content: `## Viltarter i Norge

**Storvilt**

| Art | Bestand | Årlig felling |
|-----|---------|---------------|
| Elg | ~100 000 | ~30 000 |
| Hjort | ~200 000 | ~45 000 |
| Rådyr | ~200 000 | ~25 000 |
| Villrein | ~25 000 | ~5 000 |

**Rovvilt**

| Art | Bestand | Status |
|-----|---------|--------|
| Gaupe | ~300-400 | Kvotejakt |
| Jerv | ~350-400 | Lisensjakt |
| Ulv | ~50-100 | Strengt regulert |
| Bjørn | ~150-180 | Strengt regulert |
| Kongeørn | ~900 par | Fredet |

**Småvilt**

- **Skogsfugl**: Storfugl (tiur/røy), orrfugl, jerpe
- **Fjellrype og lirype**: Viktig jaktbart småvilt
- **Hare**: Snøhare og sørhare
- **Pelsdyr**: Rev, mår, grevling, mink
- **Andefugler**: Stokkand, krikkand, toppand
- **Gjess**: Grågås, kanadagås`,
    },
    {
      id: 'naturbruk-vg1-6-2-def-2',
      type: 'definition',
      title: 'Jakttid',
      content: `Jakttid er den perioden av året når det er lov å jakte på en bestemt art. Jakttidene fastsettes av myndighetene og tar hensyn til artens yngletid, bestandssituasjon og andre faktorer. Utenom jakttiden er arten fredet. Jakttidene varierer for ulike arter og kan variere mellom regioner.`,
    },
    {
      id: 'naturbruk-vg1-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn fire storviltarter i Norge og omtrentlig bestand.',
        solution: 'Elg (ca. 100 000), hjort (ca. 200 000), rådyr (ca. 200 000) og villrein (ca. 25 000).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-2-text-2',
      type: 'text',
      content: `## Jaktformer

**Storviltjakt**

- **Drivjakt**: Mannskap driver viltet mot posterte skyttere
- **Posteringsjakt**: Skytteren venter på strategiske steder
- **Smygjakt**: Jegeren oppsøker viltet til fots
- **Åtejakt** (bjørn): Jakt over utlagt åte

**Småviltjakt**

- **Jakt med stående hund**: Hunden stopper og «står» over fuglen
- **Løshundjakt**: Hunden jager og driver viltet
- **Posting over rypeflokk**: Jegeren plasserer seg foran flokken
- **Harejakt med hund**: Hund følger harens spor

**Spesielle jaktformer**

- **Ettersøk**: Spore og avlive skadet vilt
- **Skadefelling**: Felling av vilt som gjør skade
- **Fellefangst**: Bruk av godkjente feller`,
    },
    {
      id: 'naturbruk-vg1-6-2-def-3',
      type: 'definition',
      title: 'Jegerprøven',
      content: `Jegerprøven er en obligatorisk eksamen som alle må bestå før de kan løse jegeravgift og drive jakt i Norge. Prøven tester kunnskap om vilt, våpen, sikkerhet, lover og jaktetikk. For å jakte med rifle kreves i tillegg skyteprøve som viser at jegeren behersker våpenet.`,
    },
    {
      id: 'naturbruk-vg1-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv tre ulike jaktformer.',
        solution: '1. Drivjakt - mannskap driver viltet mot posterte skyttere. 2. Posteringsjakt - skytteren venter på strategiske steder der viltet passerer. 3. Smygjakt - jegeren oppsøker viltet til fots og jakter alene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva kreves for å kunne jakte i Norge?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken prøve må man bestå?',
            solution: 'Man må bestå jegerprøven, som tester kunnskap om vilt, våpen, sikkerhet, lover og jaktetikk.',
          },
          {
            label: 'b',
            task: 'Hva kreves i tillegg for å jakte med rifle?',
            solution: 'For å jakte med rifle kreves i tillegg bestått skyteprøve som viser at jegeren behersker våpenet.',
          },
        ],
        solution: 'Jegerprøve og skyteprøve (for rifle) kreves.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-2-text-3',
      type: 'text',
      content: `## Kvotesystemet og regulering

**Bestandsovervåking**

For å fastsette kvoter trengs kunnskap om bestandene:
- Sett elg / sett hjort - jegernes observasjoner
- Taksering av rypebestander
- Viltkameraer og sporinger
- Forskningsprosjekter

**Kvotefastsettelse**

Prosessen for storvilt:
1. Kommunen vedtar bestandsmål
2. Viltnemnd fastsetter fellingskvote
3. Kvoten fordeles på jaktlag/valdene
4. Jaktlagene tildeler kvoter til jegerne

**Rapportering**

All jakt skal rapporteres:
- Sett og skutt (observasjoner og felling)
- Vekt, alder og kjønn på felt vilt
- Prøver til viltsykdomsovervåking

**Reguleringsmetoder**

- Jakttider (korte/lange)
- Kvoter (antall dyr)
- Kjønns- og aldersfordeling
- Minsteareal per dyr`,
    },
    {
      id: 'naturbruk-vg1-6-2-text-4',
      type: 'text',
      content: `## Jaktetikk og sikkerhet

**Etiske prinsipper**

God jaktetikk innebærer:
- Respekt for viltet og naturen
- Kun skyte på sikre hold
- Sørge for rask og human avliving
- Utføre ettersøk på skadet vilt
- Følge lover og regler
- Vise hensyn til andre jegere og folk

**Sikkerhet på jakt**

Våpensikkerhet er kritisk:
- Behandle alle våpen som om de er ladd
- Aldri pek på noe du ikke vil skyte
- Hold fingeren borte fra avtrekkeren
- Kjenn ditt mål og hva som er bak
- Bruk godkjent synlighetsbekledning

**Sikkerhetsregler i jaktlag**
- Klare avtaler om jaktområder
- Radiokontakt mellom jegere
- Vit hvor andre jegere befinner seg
- Aldri skyt mot ukjente mål`,
    },
    {
      id: 'naturbruk-vg1-6-2-def-4',
      type: 'definition',
      title: 'Ettersøk',
      content: `Ettersøk er den lovpålagte plikten til å spore opp og avlive skadet vilt. Hvis en jeger skadeskyter et dyr, skal det gjøres umiddelbart forsøk på ettersøk med godkjent ettersøkshund. Ettersøk kan vare i flere timer og skal fortsette til dyret er funnet eller sporet er tapt.`,
    },
    {
      id: 'naturbruk-vg1-6-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er ettersøk, og hvorfor er det viktig?',
        solution: 'Ettersøk er den lovpålagte plikten til å spore opp og avlive skadet vilt. Hvis en jeger skadeskyter et dyr, skal det gjøres umiddelbart forsøk på ettersøk med godkjent hund. Det er viktig for dyrevelferd - å hindre at skadede dyr lider unødig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-2-tip-1',
      type: 'tip',
      title: 'Verdien av viltkjøtt',
      content: `Norske jegere høster årlig tusenvis av tonn viltkjøtt av høy kvalitet. Elgkjøtt, hjortekjøtt og rådyrkjøtt er magert, proteinrikt og har lave nivåer av miljøgifter. Viltkjøtt er en bærekraftig matressurs som høstes fra frittlevende dyr i norsk natur. Verdien av kjøttet fra storviltjakten alene er anslått til flere hundre millioner kroner årlig.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'naturbruk-vg1-6-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Nevn fire viktige prinsipper for våpensikkerhet på jakt.',
        solution: '1. Behandle alle våpen som om de er ladd. 2. Aldri pek på noe du ikke vil skyte. 3. Hold fingeren borte fra avtrekkeren til du er klar til å skyte. 4. Kjenn ditt mål og hva som er bak det.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 6.3 Ferskvannsfiske og fiskeforvaltning
// ----------------------------------------------------------------------------

export const CHAPTER_NATURBRUK_VG1_6_3: TextbookChapter = {
  id: 'naturbruk-vg1-6-3',
  courseId: 'naturbruk-vg1',
  chapterNumber: '6.3',
  title: 'Ferskvannsfiske og fiskeforvaltning',
  description: 'Lakse- og innlandsfiske, fiskearter, fiskemetoder og reguleringer som sikrer bærekraftig utnyttelse av fiskeressursene.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utføre arbeidsoppgaver i ulike deler av verdikjeden basert på gjeldende regler og standarder',
  ],
  content: [
    {
      id: 'naturbruk-vg1-6-3-intro',
      type: 'text',
      content: `## Norges rike fiskevann

Norge har over 450 000 innsjøer og utallige elver og bekker. Ferskvannsfiske er en viktig fritidsaktivitet som engasjerer hundretusenvis av nordmenn hvert år. Fra storslagen laksefiske i mektige elver til stille fiske etter ørret i fjellvann - mulighetene er nesten uendelige.

Ferskvannsfisket er strengt regulert for å sikre bærekraftig bruk av fiskeressursene. Villaksen er spesielt verdifull og har egne, strenge regler.

**Ferskvannsfiskets betydning:**

- Rekreasjon og friluftsliv for alle
- Verdifull matressurs
- Turistattraksjon, særlig laksefiske
- Lokal næringsutvikling
- Kulturarv og tradisjoner`,
    },
    {
      id: 'naturbruk-vg1-6-3-def-1',
      type: 'definition',
      title: 'Anadrom fisk',
      content: `Anadrom fisk er fisk som lever i saltvann men vandrer opp i ferskvann for å gyte. I Norge omfatter dette laks, sjøørret og sjørøye. Disse artene har strenge reguleringer fordi de er sårbare og verdifulle. Fisket etter anadrom fisk krever alltid fiskeravgift i tillegg til fiskekort.`,
    },
    {
      id: 'naturbruk-vg1-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er anadrom fisk, og hvilke arter i Norge tilhører denne gruppen?',
        solution: 'Anadrom fisk er fisk som lever i saltvann men vandrer opp i ferskvann for å gyte. I Norge omfatter dette laks, sjøørret og sjørøye.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-3-text-1',
      type: 'text',
      content: `## Fiskearter i ferskvann

**Anadrome arter (vandrer mellom sjø og ferskvann)**

| Art | Særtrekk | Verdi |
|-----|----------|-------|
| Laks | Gyter i elv, vokser i hav | Svært høy |
| Sjøørret | Lever mer kystnært enn laks | Høy |
| Sjørøye | Nordlige områder | Høy |

**Innlandsfisk**

| Art | Utbredelse | Popularitet |
|-----|------------|-------------|
| Brunørret | Hele landet | Svært populær |
| Røye | Fjellvann, Nord-Norge | Populær |
| Harr | Finnmark, noen elver | Sportsfisk |
| Sik | Innsjøer | Vanlig |
| Abbor | Sør- og Østlandet | Vanlig |
| Gjedde | Østlandet | Sportsfisk |
| Lake | Innsjøer | Mindre vanlig |

**Introduserte arter**

- Regnbueørret (utsatt for sportsfiske)
- Bekkerøye (fra Nord-Amerika)
- Karpe (varmere strøk)`,
    },
    {
      id: 'naturbruk-vg1-6-3-def-2',
      type: 'definition',
      title: 'Fiskekort',
      content: `Fiskekort er en tillatelse til å fiske i et bestemt område. Kortet kjøpes fra grunneier eller rettighetshaver og gir rett til fiske i en avgrenset periode og et avgrenset område. Prisen varierer fra noen titalls kroner for innlandsfiske til flere tusen for eksklusivt laksefiske.`,
    },
    {
      id: 'naturbruk-vg1-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn fem vanlige innlandsfiskearter i Norge.',
        solution: 'Brunørret, røye, harr, sik, abbor, gjedde eller lake.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-3-text-2',
      type: 'text',
      content: `## Fiskemetoder

**Stangfiske**

- **Flue**: Kunstig flue kastes med fluesnøre
- **Sluk**: Metallblink som imiterer byttefisk
- **Spinner**: Roterende blad som tiltrekker fisk
- **Wobbler**: Kunstig byttefisk
- **Mark**: Naturlig agn

**Fluefiske**

Mest prestisjefylt for laks og ørret:
- Kasting med flueline og fluestang
- Kunstfluer bundet av fjær og pels
- Teknikk for å presentere fluen naturlig
- Krever øvelse og kunnskap om fiskens atferd

**Garnfiske**

Kun tillatt for grunneiere/rettighetshavere:
- Bunngarn og flytegarn
- Regulert med maskevidde
- Kun til eget bruk, ikke salg (i de fleste tilfeller)

**Isfiske**

- Pilking gjennom hull i isen
- Populært for abbor, sik og ørret
- Krever forsiktighet på isen`,
    },
    {
      id: 'naturbruk-vg1-6-3-def-3',
      type: 'definition',
      title: 'Gytefredning',
      content: `Gytefredning er forbud mot fiske i perioder når fisken gyter. For laks og sjøørret er det vanligvis fredning fra sensommer/høst, men tidspunktet varierer mellom vassdrag. Formålet er å la fisken gyte i fred slik at rekrutteringen til bestanden sikres.`,
    },
    {
      id: 'naturbruk-vg1-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv tre ulike fiskemetoder for stangfiske.',
        solution: '1. Fluefiske - kunstig flue kastes med fluesnøre. 2. Slukfiske - metallblink som imiterer byttefisk dras gjennom vannet. 3. Markfiske - naturlig agn som mark brukes på krok.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-3-text-3',
      type: 'text',
      content: `## Reguleringer og forvaltning

**Lakse- og innlandsfiskeloven**

Regulerer alt ferskvannsfiske:
- Grunneiers enerett til fiske
- Krav om fiskekort/tillatelse
- Minstemål og kvoter
- Fredningsbestemmelser
- Miljøkrav

**Fiskeravgift**

- Statlig avgift for fiske etter anadrom fisk
- Betales via Miljødirektoratets nettside
- Midlene går til forvaltning og forskning
- Gjelder i tillegg til fiskekort

**Reguleringer i laksevassdrag**

Hvert vassdrag har egne regler:
- Fisketid (fra-dato til-dato)
- Døgnkvoter (antall fisk per dag)
- Sesongkvoter (totalt for sesongen)
- Minstemål og maksmål
- Krav til gjenutsetting
- Redskapsregler

**Organisering**

- **Elveeierlag**: Organiserer grunneierne
- **Jeger- og fiskeforeninger**: Interesseorganisasjoner
- **Statsforvalteren**: Tilsyn og forvaltning
- **Miljødirektoratet**: Overordnet myndighet`,
    },
    {
      id: 'naturbruk-vg1-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er fiskekort, og hva er fiskeravgift?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva et fiskekort er.',
            solution: 'Fiskekort er en tillatelse til å fiske i et bestemt område, kjøpt fra grunneier eller rettighetshaver.',
          },
          {
            label: 'b',
            task: 'Hva er fiskeravgift, og når må den betales?',
            solution: 'Fiskeravgift er en statlig avgift som må betales for å fiske etter anadrom fisk (laks, sjøørret, sjørøye). Den kommer i tillegg til fiskekort.',
          },
        ],
        solution: 'Fiskekort gir tillatelse i et område, fiskeravgift er statlig avgift for anadrom fisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-3-text-4',
      type: 'text',
      content: `## Kultivering og tiltak

**Kultivering**

Tiltak for å styrke fiskebestandene:
- Utsetting av yngel og settefisk
- Rognutlegging i gytegrus
- Opparbeiding av gyteplasser
- Habitatforbedringer
- Kalking av sure vassdrag

**Trusler mot ferskvannsfisk**

- Lakselus fra oppdrett (anadrom fisk)
- Rømt oppdrettsfisk
- Vannkraftregulering
- Forurensning og forsuring
- Gjengroing av bekker
- Fremmede arter

**Fisketrapper og tiltak**

For å hjelpe fisken forbi hindringer:
- Fisketrapper ved demninger
- Terskler og kulper
- Kantvegetasjon langs bekker
- Grusutlegging i gyteområder`,
    },
    {
      id: 'naturbruk-vg1-6-3-tip-1',
      type: 'tip',
      title: 'Catch and release',
      content: `Gjenutsetting («catch and release») blir stadig vanligere, spesielt for laks. Prinsippet er å sette fisken skånsomt tilbake etter fangst. For at fisken skal overleve, må den håndteres riktig: Bruk krokløs krok eller mothakefri krok, hold fisken i vannet, unngå å berøre gjellene, og slipp fisken raskt tilbake.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'naturbruk-vg1-6-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er gytefredning, og hvorfor er det viktig?',
        solution: 'Gytefredning er forbud mot fiske i perioder når fisken gyter. Det er viktig fordi det lar fisken gyte i fred, noe som sikrer rekrutteringen til bestanden og dermed langsiktig bærekraftig fiske.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 6.4 Kart, kompass og navigasjon
// ----------------------------------------------------------------------------

export const CHAPTER_NATURBRUK_VG1_6_4: TextbookChapter = {
  id: 'naturbruk-vg1-6-4',
  courseId: 'naturbruk-vg1',
  chapterNumber: '6.4',
  title: 'Kart, kompass og navigasjon',
  description: 'Kartlesing, kompassbruk, GPS-navigasjon og praktisk orientering i norsk natur under ulike forhold.',
  estimatedMinutes: 60,
  competenceGoals: [
    'orientere seg i naturen ved hjelp av tradisjonelle og moderne metoder og hjelpemidler',
    'velge og bruke analoge og digitale verktøy til planlegging og gjennomføring av arbeidsoppgaver',
  ],
  content: [
    {
      id: 'naturbruk-vg1-6-4-intro',
      type: 'text',
      content: `## Å finne veien i naturen

Evnen til å orientere seg i naturen er en grunnleggende ferdighet for alle som ferdes utendørs. Enten du er på tur i fjellet, jobber i skogen eller driver med jakt og fiske, må du kunne finne frem og tilbake på en sikker måte.

Moderne teknologi som GPS og mobiltelefoner har gjort navigasjon enklere, men de tradisjonelle ferdighetene med kart og kompass er fortsatt viktige. Batterier kan gå tomme, og elektronikk kan svikte i kulde og fuktighet. Den som behersker både tradisjonelle og moderne navigasjonsmetoder, er best rustet for alle situasjoner.

**Hvorfor er navigasjonsferdigheter viktige?**

- Sikkerhet - finne veien i dårlig vær og mørke
- Effektivitet - velge beste rute
- Planlegging - vurdere avstand og tid
- Nødssituasjoner - kunne orientere seg uten teknologi`,
    },
    {
      id: 'naturbruk-vg1-6-4-def-1',
      type: 'definition',
      title: 'Topografisk kart',
      content: `Et topografisk kart viser terrenget med høydekurver, vann, veger, bygninger og annen viktig informasjon. Høydekurvene er linjer som forbinder punkter med samme høyde over havet. Tette kurver betyr bratt terreng, spredte kurver betyr slakere terreng. Norge kartlegges av Kartverket.`,
    },
    {
      id: 'naturbruk-vg1-6-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva forteller målestokken på et kart?',
        solution: 'Målestokken forteller forholdet mellom avstand på kartet og i virkeligheten. For eksempel betyr 1:50 000 at 1 cm på kartet tilsvarer 500 meter (50 000 cm) i terrenget.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva viser høydekurvene på et kart, og hva betyr det når de ligger tett?',
        solution: 'Høydekurvene viser punkter med samme høyde over havet og dermed terrengformen. Når kurvene ligger tett, betyr det bratt terreng. Når de ligger spredt, er terrenget slakere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-4-text-1',
      type: 'text',
      content: `## Kartlesing

**Målestokk**

Målestokken forteller forholdet mellom avstand på kartet og i virkeligheten:
- **1:50 000** - 1 cm på kartet = 500 m i terrenget (turkart)
- **1:25 000** - 1 cm på kartet = 250 m i terrenget (detaljert)
- **1:100 000** - 1 cm på kartet = 1000 m i terrenget (oversikt)

**Høydekurver**

Høydekurvene viser terrengform:
- **Ekvidistanse**: Høydeforskjell mellom kurvene (vanligvis 20 m)
- **Tette kurver**: Bratt terreng
- **Spredte kurver**: Slakt terreng
- **Tellekurver**: Hver 5. kurve er tykkere

**Kartsymboler**

Viktige symboler å kjenne:
- Vann (blått)
- Skog (grønt)
- Åpent terreng (hvitt/gult)
- Myr (blått stripemønster)
- Veger og stier (rødt/svart)
- Bygninger (sort firkant)
- Høyder/topper (prikk med tall)`,
    },
    {
      id: 'naturbruk-vg1-6-4-def-2',
      type: 'definition',
      title: 'Kompass',
      content: `Et kompass er et navigasjonsverktøy med en magnetisk nål som alltid peker mot magnetisk nord. Ved å kombinere kompasset med et kart kan du bestemme retninger, ta peilinger og navigere til et mål. Det finnes flere typer kompass, men turkompasset med plate og linjaler er mest vanlig i friluftsliv.`,
    },
    {
      id: 'naturbruk-vg1-6-4-text-2',
      type: 'text',
      content: `## Kompassbruk

**Kompassets deler**

- **Magnetisk nål**: Peker mot magnetisk nord
- **Kompasshus**: Roterbar ring med grader (0-360°)
- **Plate**: Gjennomsiktig med linjaler
- **Retningspil**: Viser marsrettning
- **Orienteringslinjer**: I bunnen av huset

**Misvisning**

- Magnetisk nord er ikke det samme som geografisk nord
- I Norge er misvisningen ca. 1-4° østlig
- Må korrigeres for nøyaktig navigasjon
- Står oppgitt i kartets hjørne

**Grunnleggende kompassteknikk**

1. **Orientere kartet**: Drei kartet til det stemmer med terrenget
2. **Finne retning**: Legg kompasset på kartet, drei huset til orienteringslinjene peker nord
3. **Følge retning**: Hold kompasset foran deg, gå i pilens retning
4. **Ta peiling**: Sikt mot et punkt, les av grader`,
    },
    {
      id: 'naturbruk-vg1-6-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv de fire grunnleggende stegene for å bruke kompass med kart.',
        solution: '1. Orientere kartet - drei kartet til det stemmer med terrenget. 2. Finne retning - legg kompasset på kartet, drei huset til linjene peker nord. 3. Følge retning - hold kompasset foran deg, gå i pilens retning. 4. Ta peiling - sikt mot et punkt, les av grader.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-4-ex-5',
        number: '4',
        type: 'classic',
        task: 'Hva er misvisning, og hvorfor må man ta hensyn til det?',
        solution: 'Misvisning er forskjellen mellom magnetisk nord (som kompasset peker mot) og geografisk nord (som kartet er orientert etter). I Norge er misvisningen ca. 1-4° østlig. Man må ta hensyn til det for nøyaktig navigasjon over lengre avstander.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-4-def-3',
      type: 'definition',
      title: 'GPS',
      content: `GPS (Global Positioning System) er et satellittbasert navigasjonssystem som gir nøyaktig posisjon hvor som helst på jorden. En GPS-mottaker (i telefon eller egen enhet) beregner posisjonen ved å motta signaler fra flere satellitter. GPS gir koordinater som kan brukes med digitale eller papirkart.`,
    },
    {
      id: 'naturbruk-vg1-6-4-text-3',
      type: 'text',
      content: `## Digital navigasjon

**GPS-enheter**

Fordeler med GPS:
- Nøyaktig posisjon (5-15 meter)
- Sporlogging (registrerer ruten)
- Lagrede punkter (hyttesteder, mål)
- Avstand og hastighet

Begrensninger:
- Avhengig av batterier
- Kan svikte i kulde og fukt
- Tett skog kan gi dårlig signal
- Læringskurve for bruk

**Smarttelefon-apper**

Populære navigasjonsapper:
- UT.no (DNT)
- Norgeskart (Kartverket)
- Peakfinder (fjelltopper)
- Avenza Maps (offline kart)

**Viktige funksjoner:**

- Last ned kart for offline-bruk
- Spar batteri (flymodus, spare strøm)
- Ta med nødlader
- Ha alltid backup med kart og kompass`,
    },
    {
      id: 'naturbruk-vg1-6-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-4-ex-4',
        number: '5',
        type: 'classic',
        task: 'Hva er GPS, og hva er begrensningene med å bruke GPS til navigasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar kort hva GPS er.',
            solution: 'GPS (Global Positioning System) er et satellittbasert system som gir nøyaktig posisjon ved hjelp av signaler fra satellitter.',
          },
          {
            label: 'b',
            task: 'Nevn tre begrensninger med GPS.',
            solution: 'Avhengig av batterier som kan gå tomme, kan svikte i kulde og fuktighet, tett skog kan gi dårlig signal.',
          },
        ],
        solution: 'GPS er satellittnavigasjon med begrensninger i batteri, vær og signalforhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-4-text-4',
      type: 'text',
      content: `## Praktisk navigasjon

**Planlegging**

Før turen:
- Studer kartet og planlegg rute
- Beregn avstand og tid
- Identifiser terrengformasjoner
- Noter alternative ruter
- Sjekk værmelding

**Underveis**

Gode vaner:
- Hold kartet orientert
- Sammenlign kart med terreng regelmessig
- Bruk siktelinjer (fjelltopper, vann)
- Tell skritt for avstander
- Marker posisjon regelmessig

**I dårlig sikt**

Når du ikke kan se terrenget:
- Bruk kompass for retning
- Gå på tid og avstand
- Følg terrengformasjoner (bekker, rygger)
- Vurder å vente på bedre forhold

**Tidskalkulator**

Tommelfingerregel for gangtid:
- 4 km/t i lett terreng (sti)
- 3 km/t i kupert terreng
- Legg til 1 t per 300 høydemeter opp
- Vurder pauser og gruppemedlemmer`,
    },
    {
      id: 'naturbruk-vg1-6-4-tip-1',
      type: 'tip',
      title: 'Naturlige hjelpemidler',
      content: `Du kan også orientere deg ved hjelp av naturen: Solen står i sør midt på dagen (kl. 13 sommertid). Mose vokser ofte på nordsiden av trær. Maurtuer er ofte på sørsiden. Stjernene kan vise nord (Polstjernen). Disse metodene er unøyaktige men kan hjelpe i nødsfall.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'naturbruk-vg1-6-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Bruk tommelfingerregelen til å beregne gangtid for en tur på 8 km i kupert terreng med 400 høydemeter stigning.',
        solution: 'Beregning: 8 km i kupert terreng (3 km/t) = ca. 2,7 timer. 400 høydemeter opp (1 time per 300 m) = ca. 1,3 timer. Total: ca. 4 timer gangtid (pluss pauser).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 6.5 Friluftsliv og naturopplevelser
// ----------------------------------------------------------------------------

export const CHAPTER_NATURBRUK_VG1_6_5: TextbookChapter = {
  id: 'naturbruk-vg1-6-5',
  courseId: 'naturbruk-vg1',
  chapterNumber: '6.5',
  title: 'Friluftsliv og naturopplevelser',
  description: 'Planlegging og gjennomføring av turer, fjellvettreglene, bekledning og utstyr for trygt friluftsliv til alle årstider.',
  estimatedMinutes: 55,
  competenceGoals: [
    'velge og bruke utstyr og bekledning etter situasjon, naturforhold og klima og utføre enkelt vedlikehold på utstyret',
    'vurdere risiko og utføre naturbaserte aktiviteter med hensyn til egen og andres sikkerhet',
  ],
  content: [
    {
      id: 'naturbruk-vg1-6-5-intro',
      type: 'text',
      content: `## Opplevelser i friluft

Friluftsliv er en viktig del av norsk kultur og identitet. Å ferdes i naturen gir både fysiske og psykiske helsegevinster, og er en kilde til mestring, ro og naturforståelse. For å få gode opplevelser og holde seg trygg, trengs kunnskap om planlegging, utstyr og sikkerhet.

**Hva er friluftsliv?**

Friluftsliv er opphold og fysisk aktivitet i friluft i fritiden, med sikte på miljøforandring og naturopplevelse. Det omfatter alt fra korte spaserturer til lange ekspedisjoner.

**Helsegevinster:**

- Fysisk aktivitet og kondisjon
- Stressreduksjon og mental helse
- Sosiale opplevelser
- Naturkunnskap og miljøbevissthet
- Mestringsfølelse`,
    },
    {
      id: 'naturbruk-vg1-6-5-def-1',
      type: 'definition',
      title: 'Fjellvettreglene',
      content: `Fjellvettreglene er ni råd for trygg ferdsel i fjellet, utviklet av Den Norske Turistforening og Røde Kors. Reglene oppfordrer til god planlegging, respekt for vær og føre, å lytte til erfarne fjellfolk, å snu i tide, og å ta med nødvendig utstyr. De gjelder for all ferdsel i fjellet.`,
    },
    {
      id: 'naturbruk-vg1-6-5-text-1',
      type: 'text',
      content: `## Fjellvettreglene

**1. Planlegg turen og meld fra hvor du går**
- Studer kart og rute
- Informer noen om planer og forventet hjemkomst

**2. Tilpass turen etter evne og forhold**
- Vurder gruppens erfaring og kondisjon
- Velg rute etter evne

**3. Ta hensyn til vær- og skredvarsel**
- Sjekk yr.no og varsom.no
- Vær forberedt på endringer

**4. Vær forberedt på uvær og kulde, selv på korte turer**
- Ta med ekstra klær
- Regn med værskifte

**5. Ta med nødvendig utstyr for å kunne hjelpe deg selv og andre**
- Kart, kompass, førstehjelpsutstyr
- Mat, drikke, ekstra klær

**6. Ta trygge veivalg, gjenkjenn skredfarlig terreng og usikker is**
- Unngå bratte skråninger ved skredfare
- Test isen før du går ut

**7. Bruk kart og kompass, vit alltid hvor du er**
- Ikke stol blindt på GPS
- Orienter deg regelmessig

**8. Vend i tide, det er ingen skam å snu**
- Lytt til kroppen og gruppens tilstand
- Vurder om målet er trygt å nå

**9. Spar på kreftene og søk ly om nødvendig**
- Fordel krefter over turen
- Bygg nødly ved behov`,
    },
    {
      id: 'naturbruk-vg1-6-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'List opp minst fem av fjellvettreglene.',
        solution: 'Eksempler: 1) Planlegg turen og meld fra hvor du går. 2) Tilpass turen etter evne og forhold. 3) Ta hensyn til vær- og skredvarsel. 4) Vær forberedt på uvær og kulde. 5) Ta med nødvendig utstyr. 6) Bruk kart og kompass. 7) Vend i tide. 8) Spar på kreftene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-5-def-2',
      type: 'definition',
      title: 'Lagprinsippet',
      content: `Lagprinsippet (trelagsprinsippet) er en metode for å kle seg riktig utendørs. Innerst et baselayer som transporterer fukt bort fra kroppen, i midten et isolerende lag som holder på varmen, og ytterst et beskyttende lag som stopper vind og vann. Ved å justere lagene kan man regulere temperaturen.`,
    },
    {
      id: 'naturbruk-vg1-6-5-text-2',
      type: 'text',
      content: `## Bekledning

**Trelagsprinsippet**

| Lag | Funksjon | Materialer |
|-----|----------|------------|
| Innerlag (baselayer) | Transporterer fukt | Ull, syntetisk |
| Mellomlag | Isolerer, holder varme | Fleece, dun, ull |
| Ytterlag | Beskytter mot vind/regn | Gore-Tex, softshell |

**Materialer**

- **Ull**: Varmer selv når den er våt, naturlig
- **Syntetisk**: Tørker raskt, rimelig
- **Dun**: Lett og veldig varm, dårlig når våt
- **Gore-Tex**: Vanntett og pustende

**Viktige klesplagge**

- Lue (mye varmetap fra hodet)
- Hansker/votter
- Godt fottøy (støtter, vanntett)
- Ekstra sokker
- Solbriller (snø reflekterer UV)

**Unngå bomull!**
Bomull holder på fukt og kjøler ned kroppen. Bruk ull eller syntetiske materialer som tørker raskt.`,
    },
    {
      id: 'naturbruk-vg1-6-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar trelagsprinsippet for bekledning.',
        solution: 'Trelagsprinsippet: Innerlag (baselayer) transporterer fukt vekk fra kroppen (ull/syntetisk). Mellomlag isolerer og holder på varmen (fleece/dun). Ytterlag beskytter mot vind og regn (Gore-Tex/softshell). Ved å justere lagene kan man regulere temperaturen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-5-ex-4',
        number: '3',
        type: 'classic',
        task: 'Hvorfor bør man unngå bomullsklær på tur?',
        solution: 'Bomull holder på fukt og tørker sakte. Når bomull blir våt av svette eller regn, kjøler den ned kroppen i stedet for å holde den varm. Dette kan føre til nedkjøling og i verste fall hypotermi. Ull og syntetiske materialer tørker raskere og varmer selv når de er fuktige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-5-text-3',
      type: 'text',
      content: `## Utstyr for dagstur

**Obligatorisk utstyr**

- Sekk (25-35 liter)
- Kart og kompass (+ GPS som supplement)
- Mat og drikke (litt ekstra)
- Ekstra klær (varm jakke, regntøy)
- Førstehjelpsutstyr
- Lommelykt/hodelykt
- Mobiltelefon (ladd)

**Anbefalt tilleggsutstyr**

- Sitteunderlag
- Termos med varm drikke
- Solkrem og solbriller
- Fyrstikker/lighter
- Kniv
- Nødproviant (sjokolade, nøtter)

**For overnattingstur**

I tillegg:
- Telt eller lavvo
- Sovepose og liggeunderlag
- Kokeapparat og kokeutstyr
- Mer mat og vann
- Toalettartikler`,
    },
    {
      id: 'naturbruk-vg1-6-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-5-ex-3',
        number: '4',
        type: 'classic',
        task: 'Lag en pakkeliste for en dagstur i fjellet.',
        solution: 'Pakkeliste: Sekk, kart og kompass, mat og drikke (litt ekstra), ekstra klær (varm jakke, regntøy), førstehjelpsutstyr, lommelykt/hodelykt, mobiltelefon (ladd), sitteunderlag, termos, solkrem og solbriller, fyrstikker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-5-text-4',
      type: 'text',
      content: `## Aktiviteter gjennom året

**Vår**

- Skiturer i fjellet (påske)
- Fuglekikking
- Første dagsturer
- Fiskestart i noen vann

**Sommer**

- Fotturer i fjellet
- Padling og bading
- Fiske
- Sykling
- Overnatting i telt

**Høst**

- Sopp- og bærplukking
- Jakt
- Fargerike dagsturer
- Forberedelse til vinter

**Vinter**

- Skitur på fjellet
- Skøyter og isfiske
- Truger i skog
- Snøhulebygging
- Overnatte ute i vinterforhold`,
    },
    {
      id: 'naturbruk-vg1-6-5-tip-1',
      type: 'tip',
      title: 'Turens ti bud for nybegynnere',
      content: `Start med korte turer nær folk og veier. Gå med erfarne turfolk. Bygg opp erfaring gradvis. Lær å lese vær og terreng. Tren på navigasjon. Øv på førstehjelp. Sjekk utstyret før du går. Ha alltid reserveplan. Fortell noen hvor du går. Vend i tide - det er ingen skam å snu!`,
    },
    // --- Samleoppgaver ---
    {
      id: 'naturbruk-vg1-6-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Nevn tre friluftsaktiviteter du kan gjøre om sommeren og tre om vinteren.',
        solution: 'Sommer: Fotturer, padling/bading, fiske, sykling, telting. Vinter: Skitur, skøyter/isfiske, truger i skog, snøhulebygging.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 6.6 Naturveiledning og formidling
// ----------------------------------------------------------------------------

export const CHAPTER_NATURBRUK_VG1_6_6: TextbookChapter = {
  id: 'naturbruk-vg1-6-6',
  courseId: 'naturbruk-vg1',
  chapterNumber: '6.6',
  title: 'Naturveiledning og formidling',
  description: 'Teknikker for naturformidling, guidede turer, pedagogiske metoder og hvordan skape engasjement for natur hos ulike målgrupper.',
  estimatedMinutes: 50,
  competenceGoals: [
    'presentere næringsaktiviteter, produkter eller tjenester for ulike målgrupper',
  ],
  content: [
    {
      id: 'naturbruk-vg1-6-6-intro',
      type: 'text',
      content: `## Dele naturkunnskap med andre

Naturveiledning handler om å formidle kunnskap, begeistring og respekt for naturen til andre mennesker. En god naturveileder kombinerer fagkunnskap med pedagogiske evner og evnen til å skape engasjement.

I en tid der mange lever urbane liv med lite kontakt med naturen, er naturveiledning viktigere enn noen gang. Ved å dele kunnskap og opplevelser kan vi bygge forståelse for naturvern og bærekraftig bruk av naturressursene.

**Naturveiledning kan være:**

- Guidede turer i naturen
- Naturstier med informasjonstavler
- Undervisning i naturfag
- Arrangement og aktiviteter
- Formidling gjennom sosiale medier`,
    },
    {
      id: 'naturbruk-vg1-6-6-def-1',
      type: 'definition',
      title: 'Naturveiledning',
      content: `Naturveiledning er formidling av kunnskap om natur, økologi og miljø til ulike målgrupper. Formålet er å skape forståelse, respekt og engasjement for naturen. Naturveiledere bruker ofte opplevelsesbaserte metoder der deltakerne lærer gjennom å se, høre, lukte og ta på.`,
    },
    {
      id: 'naturbruk-vg1-6-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er naturveiledning, og hva er formålet?',
        solution: 'Naturveiledning er formidling av kunnskap om natur, økologi og miljø til ulike målgrupper. Formålet er å skape forståelse, respekt og engasjement for naturen gjennom opplevelsesbaserte metoder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-6-text-1',
      type: 'text',
      content: `## Prinsipper for god formidling

**AIDA-modellen**

En klassisk modell for å engasjere publikum:
- **A** - Attention (oppmerksomhet): Fang interessen
- **I** - Interest (interesse): Bygg nysgjerrighet
- **D** - Desire (ønske): Skap motivasjon for å lære mer
- **A** - Action (handling): Gi deltakerne noe å gjøre

**Opplevelsesbasert læring**

God naturveiledning engasjerer alle sanser:
- **Se**: Observere detaljer, spor, mønstre
- **Høre**: Fuglsang, vind, bekk
- **Lukte**: Blomster, mose, jord
- **Ta på**: Bark, mose, steiner
- **Smake**: Spiselige planter (kun sikre arter!)

**Fortell historier**

Historier fester seg bedre enn fakta:
- Fortell om dyret du ser, ikke bare hva det heter
- Bruk anekdoter og lokale fortellinger
- Skap sammenhenger og forståelse
- La deltakerne oppdage selv`,
    },
    {
      id: 'naturbruk-vg1-6-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar AIDA-modellen for formidling.',
        solution: 'AIDA-modellen: A - Attention (fang oppmerksomheten), I - Interest (bygg interesse og nysgjerrighet), D - Desire (skap motivasjon for å lære mer), A - Action (gi deltakerne noe å gjøre/handle på).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-6-def-2',
      type: 'definition',
      title: 'Tolkning (interpretasjon)',
      content: `Tolkning eller interpretasjon er en formidlingsmetode som handler om å gi mening til det man ser og opplever. I stedet for bare å fortelle fakta, knytter man informasjonen til noe deltakerne kan relatere til. Formålet er å skape personlig relevans og forståelse, ikke bare kunnskap.`,
    },
    {
      id: 'naturbruk-vg1-6-6-text-2',
      type: 'text',
      content: `## Målgrupper og tilpasning

**Barn (5-10 år)**

- Korte økter med mye aktivitet
- Lek og oppdagelse
- Konkrete oppgaver (finn, tell, samle)
- Bruk fantasien (dyreleker, rollespill)
- Forenklede forklaringer

**Ungdom (10-18 år)**

- Mer avansert faginnhold
- Utfordringer og mestring
- Gjerne teknologi og apper
- Relevans for deres verden
- Gi ansvar og selvstendighet

**Voksne**

- Dybdekunnskap og faglige diskusjoner
- Tid til refleksjon
- Kobling til egen erfaring
- Gjerne historiske og kulturelle perspektiver

**Turister**

- Tilpasning til språk og kulturbakgrunn
- Fokus på det unike ved området
- Praktisk informasjon
- Gode fotomuligheter
- Sikkerhetsinformasjon`,
    },
    {
      id: 'naturbruk-vg1-6-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan bør du tilpasse naturveiledning til barn sammenlignet med voksne?',
        solution: 'Barn: Korte økter med mye aktivitet, lek og oppdagelse, konkrete oppgaver, bruk av fantasi, forenklede forklaringer. Voksne: Dybdekunnskap og faglige diskusjoner, tid til refleksjon, kobling til egen erfaring, historiske og kulturelle perspektiver.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-6-text-3',
      type: 'text',
      content: `## Aktiviteter og metoder

**Artsjakt**
- Gi deltakerne en liste med arter å finne
- Bruk bilder eller beskrivelser
- Kan gjøres som konkurranse

**Sporjakt**
- Let etter spor og sportegn
- Tolke hva som har skjedd
- Hvem har vært her?

**Natursti**
- Poster med oppgaver eller informasjon
- Selvguidet eller med veileder
- Kan tilpasses ulike nivåer

**Sanseøvelser**
- Bind for øynene - hva hører du?
- Finn noe mykt, hardt, glatt
- Still ned og lytt

**Samle og sortere**
- Samle naturmateriale (lov å ta)
- Sorter etter farge, form, størrelse
- Lag kunst av naturmateriale

**Fortellerstund**
- Eventyr og sagn knyttet til stedet
- Samiske fortellinger
- Lokale tradisjoner`,
    },
    {
      id: 'naturbruk-vg1-6-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv tre aktiviteter som kan brukes i naturveiledning.',
        solution: 'Eksempler: 1) Artsjakt - deltakerne får liste med arter å finne. 2) Sporjakt - lete etter spor og sportegn og tolke hva som har skjedd. 3) Sanseøvelser - bruke ulike sanser for å oppleve naturen. 4) Natursti med poster og oppgaver.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-6-text-4',
      type: 'text',
      content: `## Praktiske råd for guidede turer

**Forberedelse**

- Rekogniser ruten på forhånd
- Planlegg stopp og formidlingspunkter
- Ha ekstra tid i bakhånd
- Sjekk været og tilpass
- Ha plan B ved dårlig vær

**Gjennomføring**

- Start med introduksjon og sikkerhetsinfo
- Sett forventninger (lengde, vanskelighetsgrad)
- Hold gruppa samlet
- Varier tempoet
- Avslutt med oppsummering

**Sikkerhet**

- Kjenn gruppas nivå
- Informer om farer
- Ha førstehjelpsutstyr
- Vit hvor nærmeste hjelp er
- Ha mobildekning eller nødkommunikasjon

**Etterarbeid**

- Evaluer turen
- Hva fungerte bra/dårlig?
- Samle tilbakemeldinger
- Forbedre til neste gang`,
    },
    {
      id: 'naturbruk-vg1-6-6-tip-1',
      type: 'tip',
      title: 'Still spørsmål',
      content: `De beste naturveilederne forteller ikke alt - de stiller spørsmål. «Hva tror dere dette sporet er fra?» «Hvorfor vokser denne planten akkurat her?» Ved å stille spørsmål får deltakerne tenke selv, og læringen sitter bedre. Ikke vær redd for å si «Det vet jeg ikke - la oss finne ut av det sammen!»`,
    },
    // --- Samleoppgaver ---
    {
      id: 'naturbruk-vg1-6-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva bør du tenke på ved planlegging og gjennomføring av en guidet naturtur?',
        solution: 'Planlegging: Rekognisere ruten, planlegge stopp og formidlingspunkter, sjekke været, ha plan B. Gjennomføring: Starte med introduksjon og sikkerhet, holde gruppa samlet, variere tempoet, avslutte med oppsummering. Sikkerhet: Kjenne gruppas nivå, ha førstehjelpsutstyr, vite hvor hjelp finnes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 6.7 Kulturlandskap og utmarksressurser
// ----------------------------------------------------------------------------

export const CHAPTER_NATURBRUK_VG1_6_7: TextbookChapter = {
  id: 'naturbruk-vg1-6-7',
  courseId: 'naturbruk-vg1',
  chapterNumber: '6.7',
  title: 'Kulturlandskap og utmarksressurser',
  description: 'Kulturlandskapets verdier, skjøtsel av kulturmark, bær- og soppsanking, og bærekraftig bruk av utmarkens ressurser.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske eksempler på lokal produkt- og næringsutvikling basert på teknologisk utvikling, lokale ressurser, kultur og tradisjon',
  ],
  content: [
    {
      id: 'naturbruk-vg1-6-7-intro',
      type: 'text',
      content: `## Arven fra generasjoner

Kulturlandskapet er naturen formet av menneskers bruk gjennom hundrevis av år. Slåttenger, setervoller, beiteområder og steingjerder forteller historien om hvordan folk levde av og med naturen. Disse landskapene har høy verdi - både kulturelt, biologisk og estetisk.

I dag er mange kulturlandskap i fare for å gro igjen fordi den tradisjonelle bruken har opphørt. Samtidig har vi fått øynene opp for verdien av utmarkens ressurser - fra bær og sopp til naturbasert reiseliv.

**Hvorfor er kulturlandskapet viktig?**

- Kulturhistorisk verdi (tradisjon, kunnskap)
- Biologisk mangfold (mange arter avhengige av skjøtsel)
- Estetisk verdi (vakre landskap)
- Rekreasjon og turisme
- Matproduksjon og beite`,
    },
    {
      id: 'naturbruk-vg1-6-7-def-1',
      type: 'definition',
      title: 'Kulturlandskap',
      content: `Kulturlandskap er områder der naturen er påvirket av menneskers virksomhet over tid. Dette inkluderer jordbrukslandskap, seterområder, kystlynghei og andre områder formet av beite, slått, brenning eller annen bruk. Kulturlandskapet er ofte artrikere enn urørt natur fordi skjøtselen skaper varierte leveområder.`,
    },
    {
      id: 'naturbruk-vg1-6-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er et kulturlandskap, og hvorfor er det viktig?',
        solution: 'Kulturlandskap er områder der naturen er påvirket av menneskers virksomhet over tid (jordbrukslandskap, seterområder, kystlynghei). Det er viktig for kulturhistorisk verdi, biologisk mangfold, estetisk verdi, rekreasjon og matproduksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-7-text-1',
      type: 'text',
      content: `## Typer kulturlandskap

**Slåttemark og slåtteng**

- Eng som slås (høstes) årlig
- Ikke gjødslet kunstig
- Svært artsrik (opptil 50 arter per m²)
- Truet naturtype - de fleste gjengrodd

**Beitemark**

- Områder holdt åpne av beitende dyr
- Storfe, sau, geit, hest
- Hindrer gjengroing
- Viktig for biologisk mangfold

**Seterområder**

- Tradisjonelle sommerbeiter i fjellet
- Seterbygninger og setervoll
- Del av norsk kulturarv
- Mange i forfall, noen i bruk

**Kystlynghei**

- Kystområder med lyng
- Holdt åpne ved brenning og beite
- Viktig for fugler og insekter
- Særlig på Vestlandet

**Steingarder og rydningsrøyser**

- Rester etter tidligere jordbruk
- Skjulested for dyr
- Kulturhistorisk verdi`,
    },
    {
      id: 'naturbruk-vg1-6-7-def-2',
      type: 'definition',
      title: 'Skjøtsel',
      content: `Skjøtsel er aktive tiltak for å vedlikeholde og bevare kulturlandskap og naturtyper. For kulturmark kan dette være slått (høsting av gress), beiting med husdyr, rydding av kratt, eller kontrollert brenning. Uten skjøtsel vil de fleste kulturlandskap gro igjen med trær og busker.`,
    },
    {
      id: 'naturbruk-vg1-6-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn og beskriv tre typer kulturlandskap.',
        solution: '1. Slåttemark - eng som slås årlig uten kunstgjødsel, svært artsrik. 2. Beitemark - områder holdt åpne av beitende dyr. 3. Kystlynghei - kystområder med lyng, holdt åpne ved brenning og beite.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er skjøtsel, og hvorfor er det nødvendig for kulturlandskapet?',
        solution: 'Skjøtsel er aktive tiltak for å vedlikeholde kulturlandskap, som slått, beiting, rydding av kratt eller kontrollert brenning. Det er nødvendig fordi kulturlandskapet ellers vil gro igjen med trær og busker, og de spesielle artene som lever der vil forsvinne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-7-text-2',
      type: 'text',
      content: `## Høsting fra utmarka

**Bær**

Allemannsretten gir rett til å plukke ville bær:

| Bær | Sesong | Voksested |
|-----|--------|-----------|
| Blåbær | Juli-august | Skog, hei |
| Tyttebær | August-september | Skog, myr |
| Molte | Juli-august | Myr i fjellet |
| Krekling | August-september | Fjell, kyst |
| Bringebær | Juli-august | Skogsåpninger |

**Unntak**: På statsallmenning i Nord-Norge er molte forbeholdt lokalbefolkningen.

**Sopp**

Rik tradisjon for soppsanking:

| Sopp | Sesong | Kjennetegn |
|------|--------|------------|
| Kantarell | Juli-oktober | Gul, traktformet |
| Steinsopp | Juli-oktober | Brun hatt, hvit stilk |
| Traktkantarell | August-november | Brun, traktformet |
| Piggsopp | Juli-oktober | Pigger under hatten |

**Viktig**: Lær å kjenne sopp sikkert før du spiser! Mange giftige arter kan forveksles med spiselige.`,
    },
    {
      id: 'naturbruk-vg1-6-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn fem ville bær du kan plukke i norsk natur.',
        solution: 'Blåbær, tyttebær, molte, krekling, bringebær, markjordbær, bjørnebær, tranebær.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-7-text-3',
      type: 'text',
      content: `## Andre utmarksressurser

**Ville urter og planter**

- Brennesle (te, suppe)
- Ramsløk (vårens hvitløk)
- Skvallerkål (grønnsak)
- Geitrams (te, honning)
- Rognebær (gele)

**Viktig**: Vær sikker på artsbestemmelse!

**Ved og virke**

- Grunneiers enerett
- Kan få tillatelse
- Tradisjonelt viktig ressurs
- Fortsatt viktig på mange gårdsbruk

**Vilt og fisk**

- Ikke del av allemannsretten
- Krever tillatelse/kort
- Regulert gjennom lov
- Viktig matressurs

**Rekreasjon og opplevelser**

- Naturbasert turisme
- Jakt- og fisketurisme
- Guidede turer
- Overnatting i naturen`,
    },
    {
      id: 'naturbruk-vg1-6-7-text-4',
      type: 'text',
      content: `## Bevaring og utvikling

**Trusler mot kulturlandskapet**

- Gjengroing når bruken opphører
- Nedbygging og utbygging
- Intensivering av jordbruket
- Tap av tradisjonskunnskap
- Klimaendringer

**Bevaringstiltak**

- Tilskudd til skjøtsel
- Kulturlandskapspris
- Utvalgte kulturlandskap i jordbruket
- Frivillig innsats
- Beitebruksordninger

**Nye muligheter**

Utmarka gir muligheter for næringsutvikling:
- Lokal mat og drikke (bær, sopp, urter)
- Naturbasert reiseliv
- Grønn omsorg og Inn på tunet
- Jakt- og fisketurisme
- Formidling og kurs`,
    },
    {
      id: 'naturbruk-vg1-6-7-def-3',
      type: 'definition',
      title: 'Utvalgte kulturlandskap',
      content: `Utvalgte kulturlandskap i jordbruket er en nasjonal ordning der særlig verdifulle kulturlandskap får status og økonomisk støtte til skjøtsel og vedlikehold. Per i dag er det utpekt 51 slike områder over hele landet, fra strandflater i nord til frodige dalføre i sør.`,
    },
    {
      id: 'naturbruk-vg1-6-7-tip-1',
      type: 'tip',
      title: 'Sikker soppsanking',
      content: `Gyllen regel for soppsanking: Spis bare sopp du er 100% sikker på! Start med å lære noen få, lette arter som kantarell og steinsopp. Bruk soppbok med gode bilder. Gå på soppkurs. Vis funnet til en ekspert hvis du er usikker. Husk at noen giftige sopper kan forveksles med spiselige - feil kan være dødelig!`,
    },
    // --- Samleoppgaver ---
    {
      id: 'naturbruk-vg1-6-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvilke muligheter gir utmarka for lokal næringsutvikling?',
        solution: 'Utmarka gir muligheter for: Lokal mat og drikke (bær, sopp, urter), naturbasert reiseliv og turisme, grønn omsorg og Inn på tunet, jakt- og fisketurisme, formidling og kurs, overnatting i naturen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const NATURBRUK_VG1_DEL3_CHAPTERS = [
  CHAPTER_NATURBRUK_VG1_5_1,
  CHAPTER_NATURBRUK_VG1_5_2,
  CHAPTER_NATURBRUK_VG1_5_3,
  CHAPTER_NATURBRUK_VG1_5_4,
  CHAPTER_NATURBRUK_VG1_5_5,
  CHAPTER_NATURBRUK_VG1_5_6,
  CHAPTER_NATURBRUK_VG1_6_1,
  CHAPTER_NATURBRUK_VG1_6_2,
  CHAPTER_NATURBRUK_VG1_6_3,
  CHAPTER_NATURBRUK_VG1_6_4,
  CHAPTER_NATURBRUK_VG1_6_5,
  CHAPTER_NATURBRUK_VG1_6_6,
  CHAPTER_NATURBRUK_VG1_6_7,
];
